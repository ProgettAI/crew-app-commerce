"""Launcher for the ProgettAI Commerce bridge MCP server.

Kiro Crew starts app stdio MCP servers in the session's working directory, not
the app's install root, and it does not anchor a relative ``node`` script
argument to the app. It does anchor one shape: a bare ``python`` command whose
launch target is a relative ``.py`` file inside the app (Kiro Crew 0.11.0 and
later). The manifest therefore names this file, Crew rewrites it to its
absolute installed path, and this launcher finds ``dist/index.mjs`` beside
itself whatever the working directory is.

Contract (standard library only):

- The target is fixed: ``<this directory>/dist/index.mjs``. Nothing in argv or
  the environment can change it, so the launcher cannot run arbitrary code.
- ``node`` is resolved on PATH and started without a shell.
- stdin, stdout, stderr, the environment, and the working directory are all
  inherited unchanged. stdout is the MCP JSON-RPC transport, so this launcher
  never writes to it; its own diagnostics go to stderr only.
- POSIX: ``os.execv`` replaces this process with Node, so signals and the exit
  status belong to Node directly and no extra process stays in the tree.
- Windows: ``execv`` does not replace the process, so Node runs as an ordinary
  child in the same process tree (no detached or new-group flags). The
  launcher forwards termination to it and exits with Node's exit code.
"""

from __future__ import annotations

import os
import shutil
import signal
import subprocess
import sys
from pathlib import Path

_BRIDGE_DIR = Path(__file__).resolve().parent
_ENTRY_PARTS = ("dist", "index.mjs")

# Exit codes for failures before Node starts.
_EXIT_BAD_BUNDLE = 1
_EXIT_CANNOT_EXEC = 126
_EXIT_NODE_MISSING = 127


def _fail(message: str, code: int) -> int:
    """Report a startup failure on stderr (never stdout) and return its code."""
    sys.stderr.write(f"progettai-bridge launcher: {message}\n")
    sys.stderr.flush()
    return code


def _resolve_entry() -> Path | None:
    """The bundle path, or ``None`` when it is missing, not a file, or escapes this directory."""
    candidate = _BRIDGE_DIR.joinpath(*_ENTRY_PARTS)
    try:
        resolved = candidate.resolve(strict=True)
    except (OSError, RuntimeError):
        return None
    try:
        resolved.relative_to(_BRIDGE_DIR)
    except ValueError:
        return None
    return resolved if resolved.is_file() else None


def _run_child(argv: list[str]) -> int:
    """Windows path: run Node as a child with inherited stdio and forward termination."""
    try:
        child = subprocess.Popen(argv)  # inherits stdin, stdout, stderr, env, and cwd
    except OSError as exc:
        return _fail(f"could not start node ({exc.__class__.__name__})", _EXIT_CANNOT_EXEC)

    def _forward(_signum: object = None, _frame: object = None) -> None:
        # Idempotent: a child that already exited is left alone.
        try:
            if child.poll() is None:
                child.terminate()
        except OSError:
            pass

    for name in ("SIGTERM", "SIGINT", "SIGBREAK"):
        sig = getattr(signal, name, None)
        if sig is None:
            continue
        try:
            signal.signal(sig, _forward)
        except (OSError, ValueError):
            pass

    while True:
        try:
            return child.wait()
        except KeyboardInterrupt:
            _forward()


def main() -> int:
    entry = _resolve_entry()
    if entry is None:
        return _fail(
            "bundle dist/index.mjs is missing, not a file, or outside the bridge directory",
            _EXIT_BAD_BUNDLE,
        )
    node = shutil.which("node")
    if node is None:
        return _fail(
            "node was not found on PATH; install Node.js 26 or later and make it visible "
            "to the Kiro Crew gateway",
            _EXIT_NODE_MISSING,
        )
    argv = [node, str(entry)]
    if os.name != "nt":
        try:
            os.execv(node, argv)  # does not return on success
        except OSError as exc:
            return _fail(f"could not start node ({exc.__class__.__name__})", _EXIT_CANNOT_EXEC)
    return _run_child(argv)


if __name__ == "__main__":
    sys.exit(main())
