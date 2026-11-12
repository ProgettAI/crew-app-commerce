import * as e from "react";
import { forwardRef as t, useContext as n, useEffect as r, useState as i } from "react";
import { useAppApi as a } from "@kirocrew/app-sdk";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var c = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), l = {
	black: "#000",
	white: "#fff"
}, u = {
	50: "#ffebee",
	100: "#ffcdd2",
	200: "#ef9a9a",
	300: "#e57373",
	400: "#ef5350",
	500: "#f44336",
	600: "#e53935",
	700: "#d32f2f",
	800: "#c62828",
	900: "#b71c1c",
	A100: "#ff8a80",
	A200: "#ff5252",
	A400: "#ff1744",
	A700: "#d50000"
}, d = {
	50: "#f3e5f5",
	100: "#e1bee7",
	200: "#ce93d8",
	300: "#ba68c8",
	400: "#ab47bc",
	500: "#9c27b0",
	600: "#8e24aa",
	700: "#7b1fa2",
	800: "#6a1b9a",
	900: "#4a148c",
	A100: "#ea80fc",
	A200: "#e040fb",
	A400: "#d500f9",
	A700: "#aa00ff"
}, f = {
	50: "#e3f2fd",
	100: "#bbdefb",
	200: "#90caf9",
	300: "#64b5f6",
	400: "#42a5f5",
	500: "#2196f3",
	600: "#1e88e5",
	700: "#1976d2",
	800: "#1565c0",
	900: "#0d47a1",
	A100: "#82b1ff",
	A200: "#448aff",
	A400: "#2979ff",
	A700: "#2962ff"
}, p = {
	50: "#e1f5fe",
	100: "#b3e5fc",
	200: "#81d4fa",
	300: "#4fc3f7",
	400: "#29b6f6",
	500: "#03a9f4",
	600: "#039be5",
	700: "#0288d1",
	800: "#0277bd",
	900: "#01579b",
	A100: "#80d8ff",
	A200: "#40c4ff",
	A400: "#00b0ff",
	A700: "#0091ea"
}, m = {
	50: "#e8f5e9",
	100: "#c8e6c9",
	200: "#a5d6a7",
	300: "#81c784",
	400: "#66bb6a",
	500: "#4caf50",
	600: "#43a047",
	700: "#388e3c",
	800: "#2e7d32",
	900: "#1b5e20",
	A100: "#b9f6ca",
	A200: "#69f0ae",
	A400: "#00e676",
	A700: "#00c853"
}, h = {
	50: "#fff3e0",
	100: "#ffe0b2",
	200: "#ffcc80",
	300: "#ffb74d",
	400: "#ffa726",
	500: "#ff9800",
	600: "#fb8c00",
	700: "#f57c00",
	800: "#ef6c00",
	900: "#e65100",
	A100: "#ffd180",
	A200: "#ffab40",
	A400: "#ff9100",
	A700: "#ff6d00"
}, g = {
	50: "#fafafa",
	100: "#f5f5f5",
	200: "#eeeeee",
	300: "#e0e0e0",
	400: "#bdbdbd",
	500: "#9e9e9e",
	600: "#757575",
	700: "#616161",
	800: "#424242",
	900: "#212121",
	A100: "#f5f5f5",
	A200: "#eeeeee",
	A400: "#bdbdbd",
	A700: "#616161"
};
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/formatMuiErrorMessage/formatMuiErrorMessage.mjs
function _(e, ...t) {
	let n = new URL(`https://mui.com/production-error/?code=${e}`);
	return t.forEach((e) => n.searchParams.append("args[]", e)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/identifier.mjs
var v = "$$material";
//#endregion
//#region ../../../node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js
function y() {
	return y = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, y.apply(null, arguments);
}
//#endregion
//#region ../../../node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
function b(e) {
	if (e.sheet) return e.sheet;
	/* istanbul ignore next */
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function x(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var S = /*#__PURE__*/ function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = e.speedy === void 0 || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(x(this));
		var t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = b(t);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), C = "-ms-", w = "-moz-", T = "-webkit-", ee = "comm", te = "rule", ne = "decl", re = "@import", E = "@keyframes", ie = "@layer", ae = Math.abs, oe = String.fromCharCode, se = Object.assign;
function ce(e, t) {
	return O(e, 0) ^ 45 ? (((t << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
}
function le(e) {
	return e.trim();
}
function ue(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
	return e.replace(t, n);
}
function de(e, t) {
	return e.indexOf(t);
}
function O(e, t) {
	return e.charCodeAt(t) | 0;
}
function fe(e, t, n) {
	return e.slice(t, n);
}
function pe(e) {
	return e.length;
}
function me(e) {
	return e.length;
}
function he(e, t) {
	return t.push(e), e;
}
function ge(e, t) {
	return e.map(t).join("");
}
//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var k = 1, _e = 1, ve = 0, A = 0, j = 0, ye = "";
function be(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: k,
		column: _e,
		length: o,
		return: ""
	};
}
function xe(e, t) {
	return se(be("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Se() {
	return j;
}
function Ce() {
	return j = A > 0 ? O(ye, --A) : 0, _e--, j === 10 && (_e = 1, k--), j;
}
function M() {
	return j = A < ve ? O(ye, A++) : 0, _e++, j === 10 && (_e = 1, k++), j;
}
function we() {
	return O(ye, A);
}
function Te() {
	return A;
}
function Ee(e, t) {
	return fe(ye, e, t);
}
function De(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function Oe(e) {
	return k = _e = 1, ve = pe(ye = e), A = 0, [];
}
function ke(e) {
	return ye = "", e;
}
function Ae(e) {
	return le(Ee(A - 1, Ne(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function je(e) {
	for (; (j = we()) && j < 33;) M();
	return De(e) > 2 || De(j) > 3 ? "" : " ";
}
function Me(e, t) {
	for (; --t && M() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97););
	return Ee(e, Te() + (t < 6 && we() == 32 && M() == 32));
}
function Ne(e) {
	for (; M();) switch (j) {
		case e: return A;
		case 34:
		case 39:
			e !== 34 && e !== 39 && Ne(j);
			break;
		case 40:
			e === 41 && Ne(e);
			break;
		case 92: M();
	}
	return A;
}
function Pe(e, t) {
	for (; M() && e + j !== 57 && (e + j !== 84 || we() !== 47););
	return "/*" + Ee(t, A - 1) + "*" + oe(e === 47 ? e : M());
}
function Fe(e) {
	for (; !De(we());) M();
	return Ee(e, A);
}
//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
function Ie(e) {
	return ke(Le("", null, null, null, [""], e = Oe(e), 0, [0], e));
}
function Le(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = "", b = i, x = a, S = r, C = y; g;) switch (m = v, v = M()) {
		case 40: if (m != 108 && O(C, d - 1) == 58) {
			de(C += D(Ae(v), "&", "&\f"), "&\f") != -1 && (_ = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			C += Ae(v);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			C += je(m);
			break;
		case 92:
			C += Me(Te() - 1, 7);
			continue;
		case 47:
			switch (we()) {
				case 42:
				case 47:
					he(ze(Pe(M(), Te()), t, n), c);
					break;
				default: C += "/";
			}
			break;
		case 123 * h: s[l++] = pe(C) * _;
		case 125 * h:
		case 59:
		case 0:
			switch (v) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (C = D(C, /\f/g, "")), p > 0 && pe(C) - d && he(p > 32 ? Be(C + ";", r, n, d - 1) : Be(D(C, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: C += ";";
				default: if (he(S = Re(C, t, n, l, u, i, s, y, b = [], x = [], d), a), v === 123) {
					if (u === 0) Le(C, t, S, S, b, a, d, s, x);
					else switch (f === 99 && O(C, 3) === 110 ? 100 : f) {
						case 100:
						case 108:
						case 109:
						case 115:
							Le(e, S, S, r && he(Re(e, S, S, 0, 0, i, s, y, i, b = [], d), x), i, x, d, s, r ? b : x);
							break;
						default: Le(C, S, S, S, [""], x, 0, s, x);
					}
				}
			}
			l = u = p = 0, h = _ = 1, y = C = "", d = o;
			break;
		case 58: d = 1 + pe(C), p = m;
		default:
			if (h < 1) {
				if (v == 123) --h;
				else if (v == 125 && h++ == 0 && Ce() == 125) continue;
			}
			switch (C += oe(v), v * h) {
				case 38:
					_ = u > 0 ? 1 : (C += "\f", -1);
					break;
				case 44:
					s[l++] = (pe(C) - 1) * _, _ = 1;
					break;
				case 64:
					we() === 45 && (C += Ae(M())), f = we(), u = d = pe(y = C += Fe(Te())), v++;
					break;
				case 45: m === 45 && pe(C) == 2 && (h = 0);
			}
	}
	return a;
}
function Re(e, t, n, r, i, a, o, s, c, l, u) {
	for (var d = i - 1, f = i === 0 ? a : [""], p = me(f), m = 0, h = 0, g = 0; m < r; ++m) for (var _ = 0, v = fe(e, d + 1, d = ae(h = o[m])), y = e; _ < p; ++_) (y = le(h > 0 ? f[_] + " " + v : D(v, /&\f/g, f[_]))) && (c[g++] = y);
	return be(e, t, n, i === 0 ? te : s, c, l, u);
}
function ze(e, t, n) {
	return be(e, t, n, ee, oe(Se()), fe(e, 2, -2), 0);
}
function Be(e, t, n, r) {
	return be(e, t, n, ne, fe(e, 0, r), fe(e, r + 1, -1), r);
}
//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
function Ve(e, t) {
	for (var n = "", r = me(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function He(e, t, n, r) {
	switch (e.type) {
		case ie: if (e.children.length) break;
		case re:
		case ne: return e.return = e.return || e.value;
		case ee: return "";
		case E: return e.return = e.value + "{" + Ve(e.children, r) + "}";
		case te: e.value = e.props.join(",");
	}
	return pe(n = Ve(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region ../../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
function Ue(e) {
	var t = me(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function We(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function Ge(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var Ke = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = we(), r === 38 && i === 12 && (t[n] = 1), !De(i);) M();
	return Ee(e, A);
}, qe = function(e, t) {
	var n = -1, r = 44;
	do
		switch (De(r)) {
			case 0:
				r === 38 && we() === 12 && (t[n] = 1), e[n] += Ke(A - 1, t, n);
				break;
			case 2:
				e[n] += Ae(r);
				break;
			case 4: if (r === 44) {
				e[++n] = we() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += oe(r);
		}
	while (r = M());
	return e;
}, Je = function(e, t) {
	return ke(qe(Oe(e), t));
}, Ye = /* #__PURE__ */ new WeakMap(), Xe = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if ((e.props.length !== 1 || t.charCodeAt(0) === 58 || Ye.get(n)) && !r) {
			Ye.set(e, !0);
			for (var i = [], a = Je(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, Ze = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function Qe(e, t) {
	switch (ce(e, t)) {
		case 5103: return T + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return T + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return T + e + w + e + C + e + e;
		case 6828:
		case 4268: return T + e + C + e + e;
		case 6165: return T + e + C + "flex-" + e + e;
		case 5187: return T + e + D(e, /(\w+).+(:[^]+)/, T + "box-$1$2" + C + "flex-$1$2") + e;
		case 5443: return T + e + C + "flex-item-" + D(e, /flex-|-self/, "") + e;
		case 4675: return T + e + C + "flex-line-pack" + D(e, /align-content|flex-|-self/, "") + e;
		case 5548: return T + e + C + D(e, "shrink", "negative") + e;
		case 5292: return T + e + C + D(e, "basis", "preferred-size") + e;
		case 6060: return T + "box-" + D(e, "-grow", "") + T + e + C + D(e, "grow", "positive") + e;
		case 4554: return T + D(e, /([^-])(transform)/g, "$1" + T + "$2") + e;
		case 6187: return D(D(D(e, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), e, "") + e;
		case 5495:
		case 3959: return D(e, /(image-set\([^]*)/, T + "$1$`$1");
		case 4968: return D(D(e, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + C + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return D(e, /(.+)-inline(.+)/, T + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (pe(e) - 1 - t > 6) switch (O(e, t + 1)) {
				case 109: if (O(e, t + 4) !== 45) break;
				case 102: return D(e, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + w + (O(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~de(e, "stretch") ? Qe(D(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (O(e, t + 1) !== 115) break;
		case 6444:
			switch (O(e, pe(e) - 3 - (~de(e, "!important") && 10))) {
				case 107: return D(e, ":", ":" + T) + e;
				case 101: return D(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + T + (O(e, 14) === 45 ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + C + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (O(e, t + 11)) {
				case 114: return T + e + C + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return T + e + C + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return T + e + C + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return T + e + C + e + e;
	}
	return e;
}
var $e = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case ne:
			e.return = Qe(e.value, e.length);
			break;
		case E: return Ve([xe(e, { value: D(e.value, "@", "@" + T) })], r);
		case te: if (e.length) return ge(e.props, function(t) {
			switch (ue(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return Ve([xe(e, { props: [D(t, /:(read-\w+)/, ":" + w + "$1")] })], r);
				case "::placeholder": return Ve([
					xe(e, { props: [D(t, /:(plac\w+)/, ":" + T + "input-$1")] }),
					xe(e, { props: [D(t, /:(plac\w+)/, ":" + w + "$1")] }),
					xe(e, { props: [D(t, /:(plac\w+)/, C + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], et = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || $e, i = {}, a, o = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
		o.push(e);
	});
	var s, c = [Xe, Ze], l, u = [He, We(function(e) {
		l.insert(e);
	})], d = Ue(c.concat(r, u)), f = function(e) {
		return Ve(Ie(e), d);
	};
	s = function(e, t, n, r) {
		l = n, f(e ? e + "{" + t.styles + "}" : t.styles), r && (p.inserted[t.name] = !0);
	};
	var p = {
		key: t,
		sheet: new S({
			key: t,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: i,
		registered: {},
		insert: s
	};
	return p.sheet.hydrate(o), p;
}, tt = /* @__PURE__ */ c(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), nt = /* @__PURE__ */ c(((e, t) => {
	t.exports = tt();
})), rt = /* @__PURE__ */ c(((e, t) => {
	var n = nt(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
}));
//#endregion
//#region ../../../node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
function it(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var at = function(e, t, n) {
	var r = e.key + "-" + t.name;
	n === !1 && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, ot = function(e, t, n) {
	at(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js
function st(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
//#endregion
//#region ../../../node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var ct = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, lt = /[A-Z]|^ms/g, ut = /_EMO_([^_]+?)_([^]*?)_EMO_/g, dt = function(e) {
	return e.charCodeAt(1) === 45;
}, ft = function(e) {
	return e != null && typeof e != "boolean";
}, pt = /* #__PURE__ */ Ge(function(e) {
	return dt(e) ? e : e.replace(lt, "-$&").toLowerCase();
}), mt = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(ut, function(e, t, n) {
			return vt = {
				name: t,
				styles: n,
				next: vt
			}, t;
		});
	}
	return ct[e] !== 1 && !dt(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function ht(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return vt = {
				name: i.name,
				styles: i.styles,
				next: vt
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) vt = {
					name: o.name,
					styles: o.styles,
					next: vt
				}, o = o.next;
				return a.styles + ";";
			}
			return gt(e, t, n);
		case "function": if (e !== void 0) {
			var s = vt, c = n(e);
			return vt = s, ht(e, t, c);
		}
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function gt(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += ht(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : ft(s) && (r += pt(a) + ":" + mt(a, s) + ";");
		} else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) ft(o[c]) && (r += pt(a) + ":" + mt(a, o[c]) + ";");
		else {
			var l = ht(e, t, o);
			switch (a) {
				case "animation":
				case "animationName":
					r += pt(a) + ":" + l + ";";
					break;
				default: r += a + "{" + l + "}";
			}
		}
	}
	return r;
}
var _t = /label:\s*([^\s;{]+)\s*(;|$)/g, vt;
function yt(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	vt = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += ht(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += ht(n, t, e[o]), r && (i += a[o]);
	_t.lastIndex = 0;
	for (var s = "", c; (c = _t.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: st(i) + s,
		styles: i,
		next: vt
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.2.8/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var bt = function(e) {
	return e();
}, xt = e.useInsertionEffect ? e.useInsertionEffect : !1, St = xt || bt;
xt || e.useLayoutEffect;
var Ct = /* #__PURE__ */ e.createContext(typeof HTMLElement < "u" ? /* #__PURE__ */ et({ key: "css" }) : null);
Ct.Provider;
var wt = function(e) {
	return /*#__PURE__*/ t(function(t, r) {
		return e(t, n(Ct), r);
	});
}, Tt = /* #__PURE__ */ e.createContext({}), Et = {}.hasOwnProperty, Dt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ot = function(e, t) {
	var n = {};
	for (var r in t) Et.call(t, r) && (n[r] = t[r]);
	return n[Dt] = e, n;
}, kt = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return at(t, n, r), St(function() {
		return ot(t, n, r);
	}), null;
}, At = /* @__PURE__ */ wt(function(t, n, r) {
	var i = t.css;
	typeof i == "string" && n.registered[i] !== void 0 && (i = n.registered[i]);
	var a = t[Dt], o = [i], s = "";
	typeof t.className == "string" ? s = it(n.registered, o, t.className) : t.className != null && (s = t.className + " ");
	var c = yt(o, void 0, e.useContext(Tt));
	s += n.key + "-" + c.name;
	var l = {};
	for (var u in t) Et.call(t, u) && u !== "css" && u !== Dt && (l[u] = t[u]);
	return l.className = s, r && (l.ref = r), /*#__PURE__*/ e.createElement(e.Fragment, null, /*#__PURE__*/ e.createElement(kt, {
		cache: n,
		serialized: c,
		isStringTag: typeof a == "string"
	}), /*#__PURE__*/ e.createElement(a, l));
});
rt();
var jt = function(t, n) {
	var r = arguments;
	if (n == null || !Et.call(n, "css")) return e.createElement.apply(void 0, r);
	var i = r.length, a = Array(i);
	a[0] = At, a[1] = Ot(t, n);
	for (var o = 2; o < i; o++) a[o] = r[o];
	return e.createElement.apply(null, a);
};
(function(e) {
	var t;
	t ||= e.JSX ||= {};
})(jt ||= {});
function Mt() {
	return yt([...arguments]);
}
function Nt() {
	var e = Mt.apply(void 0, arguments), t = "animation-" + e.name;
	return {
		name: t,
		styles: "@keyframes " + t + "{" + e.styles + "}",
		anim: 1,
		toString: function() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@emotion+is-prop-valid@1.4.0/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var Pt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ft = /* @__PURE__ */ Ge(function(e) {
	return Pt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), It = function(e) {
	return e !== "theme";
}, Lt = function(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96 ? Ft : It;
}, Rt = function(e, t, n) {
	var r;
	if (t) {
		var i = t.shouldForwardProp;
		r = e.__emotion_forwardProp && i ? function(t) {
			return e.__emotion_forwardProp(t) && i(t);
		} : i;
	}
	return typeof r != "function" && n && (r = e.__emotion_forwardProp), r;
}, zt = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return at(t, n, r), St(function() {
		return ot(t, n, r);
	}), null;
}, Bt = function t(n, r) {
	var i = n.__emotion_real === n, a = i && n.__emotion_base || n, o, s;
	r !== void 0 && (o = r.label, s = r.target);
	var c = Rt(n, r, i), l = c || Lt(a), u = !l("as");
	return function() {
		var d = arguments, f = i && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
		if (o !== void 0 && f.push("label:" + o + ";"), d[0] == null || d[0].raw === void 0) f.push.apply(f, d);
		else {
			var p = d[0];
			f.push(p[0]);
			for (var m = d.length, h = 1; h < m; h++) f.push(d[h], p[h]);
		}
		var g = wt(function(t, n, r) {
			var i = u && t.as || a, o = "", d = [], p = t;
			if (t.theme == null) {
				for (var m in p = {}, t) p[m] = t[m];
				p.theme = e.useContext(Tt);
			}
			typeof t.className == "string" ? o = it(n.registered, d, t.className) : t.className != null && (o = t.className + " ");
			var h = yt(f.concat(d), n.registered, p);
			o += n.key + "-" + h.name, s !== void 0 && (o += " " + s);
			var g = u && c === void 0 ? Lt(i) : l, _ = {};
			for (var v in t) u && v === "as" || g(v) && (_[v] = t[v]);
			return _.className = o, r && (_.ref = r), /*#__PURE__*/ e.createElement(e.Fragment, null, /*#__PURE__*/ e.createElement(zt, {
				cache: n,
				serialized: h,
				isStringTag: typeof i == "string"
			}), /*#__PURE__*/ e.createElement(i, _));
		});
		return g.displayName = o === void 0 ? "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")" : o, g.defaultProps = n.defaultProps, g.__emotion_real = g, g.__emotion_base = a, g.__emotion_styles = f, g.__emotion_forwardProp = c, Object.defineProperty(g, "toString", { value: function() {
			return "." + s;
		} }), g.withComponent = function(e, n) {
			return t(e, y({}, r, n, { shouldForwardProp: Rt(g, n, !0) })).apply(void 0, f);
		}, g;
	};
}, Vt = /* @__PURE__ */ "a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan".split("."), Ht = Bt.bind(null);
Vt.forEach(function(e) {
	Ht[e] = Ht(e);
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+styled-engine@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppo_51eccef736c150721c95a5c5a258616b/node_modules/@mui/styled-engine/index.mjs
function Ut(e, t) {
	return Ht(e, t);
}
function Wt(e, t) {
	Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
var Gt = [];
function Kt(e) {
	return Gt[0] = e, yt(Gt);
}
//#endregion
//#region ../../../node_modules/.pnpm/react-is@19.2.8/node_modules/react-is/cjs/react-is.production.js
var qt = /* @__PURE__ */ c(((e) => {
	var t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), d = Symbol.for("react.client.reference");
	e.isValidElementType = function(e) {
		return !!(typeof e == "string" || typeof e == "function" || e === t || e === r || e === n || e === s || e === c || typeof e == "object" && e && (e.$$typeof === u || e.$$typeof === l || e.$$typeof === a || e.$$typeof === i || e.$$typeof === o || e.$$typeof === d || e.getModuleId !== void 0));
	};
})), Jt = (/* @__PURE__ */ c(((e, t) => {
	t.exports = qt();
})))();
function Yt(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Xt(t) {
	if (/*#__PURE__*/ e.isValidElement(t) || (0, Jt.isValidElementType)(t) || !Yt(t)) return t;
	let n = {};
	return Object.keys(t).forEach((e) => {
		n[e] = Xt(t[e]);
	}), n;
}
function N(t, n, r = { clone: !0 }) {
	let i = r.clone ? { ...t } : t;
	return Yt(t) && Yt(n) && Object.keys(n).forEach((a) => {
		/*#__PURE__*/ e.isValidElement(n[a]) || (0, Jt.isValidElementType)(n[a]) ? i[a] = n[a] : Yt(n[a]) && Object.prototype.hasOwnProperty.call(t, a) && Yt(t[a]) ? i[a] = N(t[a], n[a], r) : r.clone ? i[a] = Yt(n[a]) ? Xt(n[a]) : n[a] : i[a] = n[a];
	}), i;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/createBreakpoints/createBreakpoints.mjs
var Zt = (e) => {
	let t = Object.keys(e).map((t) => ({
		key: t,
		val: e[t]
	})) || [];
	return t.sort((e, t) => e.val - t.val), t.reduce((e, t) => ({
		...e,
		[t.key]: t.val
	}), {});
};
function Qt(e) {
	let { values: t = {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	}, unit: n = "px", step: r = 5, ...i } = e, a = Zt(t), o = Object.keys(a);
	function s(e) {
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n})`;
	}
	function c(e) {
		return `@media (max-width:${(typeof t[e] == "number" ? t[e] : e) - r / 100}${n})`;
	}
	function l(e, i) {
		let a = o.indexOf(i);
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n}) and (max-width:${(a !== -1 && typeof t[o[a]] == "number" ? t[o[a]] : i) - r / 100}${n})`;
	}
	function u(e) {
		return o.indexOf(e) + 1 < o.length ? l(e, o[o.indexOf(e) + 1]) : s(e);
	}
	function d(e) {
		let t = o.indexOf(e);
		return t === 0 ? s(o[1]) : t === o.length - 1 ? c(o[t]) : l(e, o[o.indexOf(e) + 1]).replace("@media", "@media not all and");
	}
	let f = [];
	for (let e = 0; e < o.length; e += 1) f.push(s(o[e]));
	return {
		keys: o,
		values: a,
		up: s,
		down: c,
		between: l,
		only: u,
		not: d,
		unit: n,
		internal_mediaKeys: f,
		...i
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/cssContainerQueries/cssContainerQueries.mjs
var $t = /min-width:\s*([0-9.]+)/;
function en(e, t) {
	if (!e.containerQueries || !tn(t)) return t;
	let n = [];
	for (let e in t) e.startsWith("@container") && n.push(e);
	n.sort((e, t) => +(e.match($t)?.[1] || 0) - (t.match($t)?.[1] || 0));
	let r = t;
	for (let e = 0; e < n.length; e += 1) {
		let t = n[e], i = r[t];
		delete r[t], r[t] = i;
	}
	return r;
}
function tn(e) {
	for (let t in e) if (t.startsWith("@container")) return !0;
	return !1;
}
function nn(e, t) {
	return t === "@" || t.startsWith("@") && (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/));
}
function rn(e, t) {
	let n = t.match(/^@([^/]+)?\/?(.+)?$/);
	if (!n) return null;
	let [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
	return e.containerQueries(i).up(a);
}
function an(e) {
	let t = (e, t) => e.replace("@media", t ? `@container ${t}` : "@container");
	function n(n, r) {
		n.up = (...n) => t(e.breakpoints.up(...n), r), n.down = (...n) => t(e.breakpoints.down(...n), r), n.between = (...n) => t(e.breakpoints.between(...n), r), n.only = (...n) => t(e.breakpoints.only(...n), r), n.not = (...n) => {
			let i = t(e.breakpoints.not(...n), r);
			return i.includes("not all and") ? i.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : i;
		};
	}
	let r = {}, i = (e) => (n(r, e), r);
	return n(i), {
		...e,
		containerQueries: i
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/createTheme/shape.mjs
var on = { borderRadius: 4 };
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/isObjectEmpty/isObjectEmpty.mjs
function sn(e) {
	if (e == null) return !0;
	for (let t in e) return !1;
	return !0;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/fastDeepAssign/fastDeepAssign.mjs
function cn(e, t) {
	let n = Array.isArray(t), r = Array.isArray(e);
	return pn(t) ? t : mn(e) ? hn(t) : n && r ? dn(e, t) : n === r ? gn(e, t) : hn(t);
}
function ln(e) {
	let t = 0, n = e.length, r = Array(n);
	for (t = 0; t < n; t += 1) r[t] = hn(e[t]);
	return r;
}
function un(e) {
	let t = {};
	for (let n in e) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = hn(e[n]));
	return t;
}
function dn(e, t) {
	let n = e.length;
	for (let r = 0; r < t.length; r += 1) e[n + r] = hn(t[r]);
	return e;
}
function fn(e) {
	return typeof e == "object" && !!e && !(e instanceof RegExp) && !(e instanceof Date);
}
function pn(e) {
	return typeof e != "object" || !e;
}
function mn(e) {
	return typeof e != "object" || !e || e instanceof RegExp || e instanceof Date;
}
function hn(e) {
	return fn(e) ? Array.isArray(e) ? ln(e) : un(e) : e;
}
function gn(e, t) {
	for (let n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = n in e ? cn(e[n], t[n]) : hn(t[n]));
	return e;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/breakpoints/breakpoints.mjs
var _n = {}, vn = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
}, yn = Qt({ values: vn }), bn = { containerQueries: (e) => ({ up: (t) => {
	let n = typeof t == "number" ? t : vn[t] || t;
	return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
} }) };
function xn(e, t, n) {
	let r = {};
	return Sn(r, e.theme, t, (e, t, i) => {
		let a = n(t, i);
		e ? r[e] = a : cn(r, a);
	});
}
function Sn(e, t, n, r) {
	if (t ??= _n, Array.isArray(n)) {
		let i = t.breakpoints ?? yn;
		for (let t = 0; t < n.length; t += 1) Cn(e, i.up(i.keys[t]), n[t], void 0, r);
		return e;
	}
	if (typeof n == "object") {
		let i = t.breakpoints ?? yn, a = i.values ?? vn;
		for (let o in n) if (nn(i.keys, o)) {
			let i = rn(t.containerQueries ? t : bn, o);
			i && Cn(e, i, n[o], o, r);
		} else if (o in a) Cn(e, i.up(o), n[o], o, r);
		else {
			let t = o;
			e[t] = n[t];
		}
		return e;
	}
	return r(void 0, n), e;
}
function Cn(e, t, n, r, i) {
	e[t] ??= {}, i(t, n, r);
}
function wn(e = yn) {
	let { internal_mediaKeys: t } = e, n = {};
	for (let e = 0; e < t.length; e += 1) n[t[e]] = {};
	return n;
}
function Tn(e, t) {
	let n = e.internal_mediaKeys;
	for (let e = 0; e < n.length; e += 1) {
		let r = n[e];
		sn(t[r]) && delete t[r];
	}
	return t;
}
function En(e, ...t) {
	return Tn(e, [wn(e), ...t].reduce((e, t) => N(e, t), {}));
}
function Dn(e, t) {
	if (typeof e != "object") return {};
	let n = {}, r = Object.keys(t);
	return Array.isArray(e) ? r.forEach((t, r) => {
		r < e.length && (n[t] = !0);
	}) : r.forEach((t) => {
		e[t] != null && (n[t] = !0);
	}), n;
}
function On(e) {
	let { values: t, breakpoints: n, base: r } = e, i = r || Dn(t, n), a = Object.keys(i);
	if (a.length === 0) return t;
	let o;
	return a.reduce((e, n, r) => {
		if (Array.isArray(t)) e[n] = t[r] == null ? t[o] : t[r], o = r;
		else if (typeof t == "object" && t) {
			let r = t;
			e[n] = r[n] == null ? r[o] : r[n], o = n;
		} else e[n] = t;
		return e;
	}, {});
}
function kn(e, t) {
	if (Array.isArray(t)) return !0;
	if (typeof t == "object" && t) {
		for (let n = 0; n < e.keys.length; n += 1) if (e.keys[n] in t) return !0;
		let n = Object.keys(t);
		for (let t = 0; t < n.length; t += 1) if (nn(e.keys, n[t])) return !0;
	}
	return !1;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/capitalize/capitalize.mjs
function An(e) {
	if (typeof e != "string") throw Error(_(7));
	return e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/style/style.mjs
function jn(e, t, n, r) {
	let i;
	return i = typeof e == "function" ? e(n) : Array.isArray(e) ? e[n] || n : typeof n == "string" && Mn(e, n, !0, r) || n, t && (i = t(i, n, e)), i;
}
function Mn(e, t, n = !0, r = void 0) {
	if (!e || !t) return null;
	let i = t.split(".");
	if (e.vars && n) {
		let t = Nn(e.vars, i, r);
		if (t != null) return t;
	}
	return Nn(e, i, r);
}
function Nn(e, t, n = void 0) {
	let r, i = e, a = 0;
	for (; a < t.length;) {
		if (i == null) return i;
		r = i, i = i[t[a]], a += 1;
	}
	if (n && i === void 0) {
		let e = t[t.length - 1], i = `${n}${e === "default" ? "" : An(e)}`;
		return r?.[i];
	}
	return i;
}
function P(e) {
	let { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e, a = (e) => {
		if (e[t] == null) return null;
		let a = e[t], o = e.theme, s = Mn(o, r) || {};
		return xn(e, a, (e) => {
			let r = jn(s, i, e, t);
			return n === !1 ? r : { [n]: r };
		});
	};
	return a.propTypes = {}, a.filterProps = [t], a;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/spacing/spacing.mjs
var Pn = { internal_cache: {} }, Fn = {
	m: "margin",
	p: "padding"
}, In = {
	t: "Top",
	r: "Right",
	b: "Bottom",
	l: "Left",
	x: ["Left", "Right"],
	y: ["Top", "Bottom"]
}, Ln = {
	marginX: "mx",
	marginY: "my",
	paddingX: "px",
	paddingY: "py"
}, Rn = {};
for (let e in Fn) Rn[e] = [Fn[e]];
for (let e in Fn) for (let t in In) {
	let n = Fn[e], r = In[t], i = Array.isArray(r) ? r.map((e) => n + e) : [n + r];
	Rn[e + t] = i;
}
for (let e in Ln) Rn[e] = Rn[Ln[e]];
var zn = /* @__PURE__ */ new Set([
	"m",
	"mt",
	"mr",
	"mb",
	"ml",
	"mx",
	"my",
	"margin",
	"marginTop",
	"marginRight",
	"marginBottom",
	"marginLeft",
	"marginX",
	"marginY",
	"marginInline",
	"marginInlineStart",
	"marginInlineEnd",
	"marginBlock",
	"marginBlockStart",
	"marginBlockEnd"
]), Bn = /* @__PURE__ */ new Set([
	"p",
	"pt",
	"pr",
	"pb",
	"pl",
	"px",
	"py",
	"padding",
	"paddingTop",
	"paddingRight",
	"paddingBottom",
	"paddingLeft",
	"paddingX",
	"paddingY",
	"paddingInline",
	"paddingInlineStart",
	"paddingInlineEnd",
	"paddingBlock",
	"paddingBlockStart",
	"paddingBlockEnd"
]);
[...zn, ...Bn];
function Vn(e, t, n, r) {
	let i = Mn(e, t, !0) ?? n;
	return typeof i == "number" || typeof i == "string" ? (e) => typeof e == "string" ? e : typeof i == "string" ? i.startsWith("var(") && e === 0 ? 0 : i.startsWith("var(") && e === 1 ? i : `calc(${e} * ${i})` : i * e : Array.isArray(i) ? (e) => {
		if (typeof e == "string") return e;
		let t = i[Math.abs(e)];
		return e >= 0 ? t : typeof t == "number" ? -t : typeof t == "string" && t.startsWith("var(") ? `calc(-1 * ${t})` : `-${t}`;
	} : typeof i == "function" ? i : () => void 0;
}
function Hn(e) {
	return Vn(e, "spacing", 8, "spacing");
}
function Un(e, t) {
	return typeof t == "string" || t == null ? t : e(t);
}
var Wn = [""];
function Gn(e, t) {
	let n = e.theme ?? Pn, r = n?.internal_cache?.unarySpacing ?? Hn(n), i = {};
	for (let n in e) {
		if (!t.has(n)) continue;
		let a = Rn[n] ?? (Wn[0] = n, Wn), o = e[n];
		Sn(i, e.theme, o, (e, t) => {
			let n = e ? i[e] : i;
			for (let e = 0; e < a.length; e += 1) n[a[e]] = Un(r, t);
		});
	}
	return i;
}
function Kn(e) {
	return Gn(e, zn);
}
Kn.propTypes = {}, Kn.filterProps = zn;
var F = Kn;
function qn(e) {
	return Gn(e, Bn);
}
qn.propTypes = {}, qn.filterProps = Bn;
var I = qn;
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/createTheme/createSpacing.mjs
function Jn(e = 8, t = Hn({ spacing: e })) {
	if (e.mui) return e;
	let n = (...e) => (e.length === 0 ? [1] : e).map((e) => {
		let n = t(e);
		return typeof n == "number" ? `${n}px` : n;
	}).join(" ");
	return n.mui = !0, n;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/compose/compose.mjs
function Yn(...e) {
	let t = e.reduce((e, t) => (t.filterProps.forEach((n) => {
		e[n] = t;
	}), e), {}), n = (e) => {
		let n = {};
		for (let r in e) t[r] && cn(n, t[r](e));
		return n;
	};
	return n.propTypes = {}, n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), []), n;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/borders/borders.mjs
function Xn(e) {
	return typeof e == "number" ? `${e}px solid` : e;
}
function Zn(e, t) {
	return P({
		prop: e,
		themeKey: "borders",
		transform: t
	});
}
var Qn = Zn("border", Xn), $n = Zn("borderTop", Xn), er = Zn("borderRight", Xn), tr = Zn("borderBottom", Xn), nr = Zn("borderLeft", Xn), rr = Zn("borderColor"), ir = Zn("borderTopColor"), ar = Zn("borderRightColor"), or = Zn("borderBottomColor"), sr = Zn("borderLeftColor"), cr = Zn("outline", Xn), lr = Zn("outlineColor"), ur = (e) => {
	if (e.borderRadius !== void 0 && e.borderRadius !== null) {
		let t = Vn(e.theme, "shape.borderRadius", 4, "borderRadius");
		return xn(e, e.borderRadius, (e) => ({ borderRadius: Un(t, e) }));
	}
	return null;
};
ur.propTypes = {}, ur.filterProps = ["borderRadius"], Yn(Qn, $n, er, tr, nr, rr, ir, ar, or, sr, ur, cr, lr);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/cssGrid/cssGrid.mjs
var dr = (e) => {
	if (e.gap !== void 0 && e.gap !== null) {
		let t = Vn(e.theme, "spacing", 8, "gap");
		return xn(e, e.gap, (e) => ({ gap: Un(t, e) }));
	}
	return null;
};
dr.propTypes = {}, dr.filterProps = ["gap"];
var fr = (e) => {
	if (e.columnGap !== void 0 && e.columnGap !== null) {
		let t = Vn(e.theme, "spacing", 8, "columnGap");
		return xn(e, e.columnGap, (e) => ({ columnGap: Un(t, e) }));
	}
	return null;
};
fr.propTypes = {}, fr.filterProps = ["columnGap"];
var pr = (e) => {
	if (e.rowGap !== void 0 && e.rowGap !== null) {
		let t = Vn(e.theme, "spacing", 8, "rowGap");
		return xn(e, e.rowGap, (e) => ({ rowGap: Un(t, e) }));
	}
	return null;
};
pr.propTypes = {}, pr.filterProps = ["rowGap"], Yn(dr, fr, pr, P({ prop: "gridColumn" }), P({ prop: "gridRow" }), P({ prop: "gridAutoFlow" }), P({ prop: "gridAutoColumns" }), P({ prop: "gridAutoRows" }), P({ prop: "gridTemplateColumns" }), P({ prop: "gridTemplateRows" }), P({ prop: "gridTemplateAreas" }), P({ prop: "gridArea" }));
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/palette/palette.mjs
function mr(e, t) {
	return t === "grey" ? t : e;
}
Yn(P({
	prop: "color",
	themeKey: "palette",
	transform: mr
}), P({
	prop: "bgcolor",
	cssProperty: "backgroundColor",
	themeKey: "palette",
	transform: mr
}), P({
	prop: "backgroundColor",
	themeKey: "palette",
	transform: mr
}));
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/sizing/sizing.mjs
var hr = vn;
function L(e) {
	return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
var gr = P({
	prop: "width",
	transform: L
}), _r = (e) => e.maxWidth !== void 0 && e.maxWidth !== null ? xn(e, e.maxWidth, (t) => {
	let n = e.theme?.breakpoints?.values?.[t] || hr[t];
	return n ? e.theme?.breakpoints?.unit === "px" ? { maxWidth: n } : { maxWidth: `${n}${e.theme.breakpoints.unit}` } : { maxWidth: L(t) };
}) : null;
_r.filterProps = ["maxWidth"];
var vr = P({
	prop: "minWidth",
	transform: L
}), yr = P({
	prop: "height",
	transform: L
}), br = P({
	prop: "maxHeight",
	transform: L
}), xr = P({
	prop: "minHeight",
	transform: L
});
P({
	prop: "size",
	cssProperty: "width",
	transform: L
}), P({
	prop: "size",
	cssProperty: "height",
	transform: L
}), Yn(gr, _r, vr, yr, br, xr, P({ prop: "boxSizing" }));
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/styleFunctionSx/defaultSxConfig.mjs
var Sr = {
	border: {
		themeKey: "borders",
		transform: Xn
	},
	borderTop: {
		themeKey: "borders",
		transform: Xn
	},
	borderRight: {
		themeKey: "borders",
		transform: Xn
	},
	borderBottom: {
		themeKey: "borders",
		transform: Xn
	},
	borderLeft: {
		themeKey: "borders",
		transform: Xn
	},
	borderColor: { themeKey: "palette" },
	borderTopColor: { themeKey: "palette" },
	borderRightColor: { themeKey: "palette" },
	borderBottomColor: { themeKey: "palette" },
	borderLeftColor: { themeKey: "palette" },
	outline: {
		themeKey: "borders",
		transform: Xn
	},
	outlineColor: { themeKey: "palette" },
	borderRadius: {
		themeKey: "shape.borderRadius",
		style: ur
	},
	color: {
		themeKey: "palette",
		transform: mr
	},
	bgcolor: {
		themeKey: "palette",
		cssProperty: "backgroundColor",
		transform: mr
	},
	backgroundColor: {
		themeKey: "palette",
		transform: mr
	},
	p: { style: I },
	pt: { style: I },
	pr: { style: I },
	pb: { style: I },
	pl: { style: I },
	px: { style: I },
	py: { style: I },
	padding: { style: I },
	paddingTop: { style: I },
	paddingRight: { style: I },
	paddingBottom: { style: I },
	paddingLeft: { style: I },
	paddingX: { style: I },
	paddingY: { style: I },
	paddingInline: { style: I },
	paddingInlineStart: { style: I },
	paddingInlineEnd: { style: I },
	paddingBlock: { style: I },
	paddingBlockStart: { style: I },
	paddingBlockEnd: { style: I },
	m: { style: F },
	mt: { style: F },
	mr: { style: F },
	mb: { style: F },
	ml: { style: F },
	mx: { style: F },
	my: { style: F },
	margin: { style: F },
	marginTop: { style: F },
	marginRight: { style: F },
	marginBottom: { style: F },
	marginLeft: { style: F },
	marginX: { style: F },
	marginY: { style: F },
	marginInline: { style: F },
	marginInlineStart: { style: F },
	marginInlineEnd: { style: F },
	marginBlock: { style: F },
	marginBlockStart: { style: F },
	marginBlockEnd: { style: F },
	displayPrint: {
		cssProperty: !1,
		transform: (e) => ({ "@media print": { display: e } })
	},
	display: {},
	overflow: {},
	textOverflow: {},
	visibility: {},
	whiteSpace: {},
	flexBasis: {},
	flexDirection: {},
	flexWrap: {},
	justifyContent: {},
	alignItems: {},
	alignContent: {},
	order: {},
	flex: {},
	flexGrow: {},
	flexShrink: {},
	alignSelf: {},
	justifyItems: {},
	justifySelf: {},
	gap: { style: dr },
	rowGap: { style: pr },
	columnGap: { style: fr },
	gridColumn: {},
	gridRow: {},
	gridAutoFlow: {},
	gridAutoColumns: {},
	gridAutoRows: {},
	gridTemplateColumns: {},
	gridTemplateRows: {},
	gridTemplateAreas: {},
	gridArea: {},
	position: {},
	zIndex: { themeKey: "zIndex" },
	top: {},
	right: {},
	bottom: {},
	left: {},
	boxShadow: { themeKey: "shadows" },
	width: { transform: L },
	maxWidth: { style: _r },
	minWidth: { transform: L },
	height: { transform: L },
	maxHeight: { transform: L },
	minHeight: { transform: L },
	boxSizing: {},
	font: { themeKey: "font" },
	fontFamily: { themeKey: "typography" },
	fontSize: { themeKey: "typography" },
	fontStyle: { themeKey: "typography" },
	fontWeight: { themeKey: "typography" },
	letterSpacing: {},
	textTransform: {},
	lineHeight: {},
	textAlign: {},
	typography: {
		cssProperty: !1,
		themeKey: "typography"
	}
}, Cr = {};
function wr() {
	function e(t) {
		if (!t.sx) return null;
		let { sx: n, theme: r = Cr, nested: i } = t, a = r.unstable_sxConfig ?? Sr, o = {
			sx: null,
			theme: r,
			nested: !0
		};
		function s(n) {
			let s = n;
			if (typeof n == "function") s = n(r);
			else if (typeof n != "object") return n;
			if (!s) return null;
			let c = r.breakpoints ?? yn, l = wn(c);
			for (let n in s) {
				let i = Dr(s[n], r);
				if (i != null) {
					if (typeof i != "object") {
						Er(l, n, i, r, a);
						continue;
					}
					if (a[n]) {
						Er(l, n, i, r, a);
						continue;
					}
					kn(c, i) ? Sn(l, t.theme, i, (e, t) => {
						l[e][n] = t;
					}) : (o.sx = i, l[n] = e(o));
				}
			}
			return !i && r.modularCssLayers ? { "@layer sx": en(r, Tn(c, l)) } : en(r, Tn(c, l));
		}
		return Array.isArray(n) ? n.map(s) : s(n);
	}
	return e.filterProps = ["sx"], e;
}
var Tr = wr();
function Er(e, t, n, r, i) {
	let a = i[t];
	if (!a) {
		e[t] = n;
		return;
	}
	if (n == null) return;
	let { themeKey: o } = a;
	if (o === "typography" && n === "inherit") {
		e[t] = n;
		return;
	}
	let { style: s } = a;
	if (s) {
		cn(e, s({
			[t]: n,
			theme: r
		}));
		return;
	}
	let { cssProperty: c = t, transform: l } = a, u = Mn(r, o);
	Sn(e, r, n, (n, r) => {
		let i = jn(u, l, r, t);
		c === !1 ? cn(n ? e[n] : e, i) : n ? e[n][c] = i : e[c] = i;
	});
}
function Dr(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/createTheme/applyStyles.mjs
function Or(e, t) {
	let n = this;
	if (n.vars) {
		if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function") return {};
		let r = n.getColorSchemeSelector(e);
		return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), { [r]: t });
	}
	return n.palette.mode === e ? t : {};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/createTheme/createTheme.mjs
function kr(e = {}, ...t) {
	let { breakpoints: n = {}, palette: r = {}, spacing: i, shape: a = {}, ...o } = e, s = Qt(n), c = Jn(i), l = N({
		breakpoints: s,
		direction: "ltr",
		components: {},
		palette: {
			mode: "light",
			...r
		},
		spacing: c,
		shape: {
			...on,
			...a
		}
	}, o);
	return l = an(l), l.applyStyles = Or, l = t.reduce((e, t) => N(e, t), l), l.unstable_sxConfig = {
		...Sr,
		...o?.unstable_sxConfig
	}, l.unstable_sx = function(e) {
		return Tr({
			sx: e,
			theme: this
		});
	}, l.internal_cache = {}, l;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/useThemeWithoutDefault/useThemeWithoutDefault.mjs
function Ar(e) {
	return Object.keys(e).length === 0;
}
function jr(t = null) {
	let n = e.useContext(Tt);
	return !n || Ar(n) ? t : n;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/useTheme/useTheme.mjs
var Mr = kr();
function Nr(e = Mr) {
	return jr(e);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs
var Pr = (e) => e, Fr = (() => {
	let e = Pr;
	return {
		configure(t) {
			e = t;
		},
		generate(t) {
			return e(t);
		},
		reset() {
			e = Pr;
		}
	};
})();
//#endregion
//#region ../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function Ir(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Ir(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function R() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ir(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/createBox/createBox.mjs
function Lr(t = {}) {
	let { themeId: n, defaultTheme: r, defaultClassName: i = "MuiBox-root", generateClassName: a } = t, s = Ut("div", { shouldForwardProp: (e) => e !== "theme" && e !== "sx" && e !== "as" })(Tr);
	return /* @__PURE__ */ e.forwardRef(function(e, t) {
		let c = Nr(r), { className: l, component: u = "div", ...d } = e;
		return /*#__PURE__*/ o(s, {
			as: u,
			ref: t,
			className: R(l, a ? a(i) : i),
			theme: n && c[n] || c,
			...d
		});
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs
var Rr = {
	active: "active",
	checked: "checked",
	completed: "completed",
	disabled: "disabled",
	error: "error",
	expanded: "expanded",
	focused: "focused",
	focusVisible: "focusVisible",
	open: "open",
	readOnly: "readOnly",
	required: "required",
	selected: "selected"
};
function z(e, t, n = "Mui") {
	let r = Rr[t];
	return r ? `${n}-${r}` : `${Fr.generate(e)}-${t}`;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs
function B(e, t, n = "Mui") {
	let r = {};
	return t.forEach((t) => {
		r[t] = z(e, t, n);
	}), r;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/preprocessStyles.mjs
function zr(e) {
	let { variants: t, ...n } = e, r = {
		variants: t,
		style: Kt(n),
		isProcessed: !0
	};
	return r.style === n || t && t.forEach((e) => {
		typeof e.style != "function" && (e.style = Kt(e.style));
	}), r;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/createStyled/createStyled.mjs
var Br = kr();
function Vr(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Hr(e, t) {
	return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Ur(e) {
	return e ? (t, n) => n[e] : null;
}
function Wr(e, t, n) {
	e.theme = sn(e.theme) ? n : e.theme[t] || e.theme;
}
function Gr(e, t, n) {
	let r = typeof t == "function" ? t(e) : t;
	if (Array.isArray(r)) return r.flatMap((t) => Gr(e, t, n));
	if (Array.isArray(r?.variants)) {
		let t;
		if (r.isProcessed) t = n ? Hr(r.style, n) : r.style;
		else {
			let { variants: e, ...i } = r;
			t = n ? Hr(Kt(i), n) : i;
		}
		return Kr(e, r.variants, [t], n);
	}
	return r?.isProcessed ? n ? Hr(Kt(r.style), n) : r.style : n ? Hr(Kt(r), n) : r;
}
function Kr(e, t, n = [], r = void 0) {
	let i;
	variantLoop: for (let a = 0; a < t.length; a += 1) {
		let o = t[a];
		if (typeof o.props == "function") {
			if (i ??= {
				...e,
				...e.ownerState,
				ownerState: e.ownerState
			}, !o.props(i)) continue;
		} else for (let t in o.props) if (e[t] !== o.props[t] && e.ownerState?.[t] !== o.props[t]) continue variantLoop;
		typeof o.style == "function" ? (i ??= {
			...e,
			...e.ownerState,
			ownerState: e.ownerState
		}, n.push(r ? Hr(Kt(o.style(i)), r) : o.style(i))) : n.push(r ? Hr(Kt(o.style), r) : o.style);
	}
	return n;
}
function qr(e = {}) {
	let { themeId: t, defaultTheme: n = Br, rootShouldForwardProp: r = Vr, slotShouldForwardProp: i = Vr } = e;
	function a(e) {
		Wr(e, t, n);
	}
	return (e, t = {}) => {
		Wt(e, (e) => e.filter((e) => e !== Tr));
		let { name: n, slot: o, skipVariantsResolver: s, skipSx: c, overridesResolver: l = Ur(Yr(o)), ...u } = t, d = n && n.startsWith("Mui") || o ? "components" : "custom", f = s === void 0 ? o && o !== "Root" && o !== "root" || !1 : s, p = c || !1, m = Vr;
		o === "Root" || o === "root" ? m = r : o ? m = i : Jr(e) && (m = void 0);
		let h = Ut(e, {
			shouldForwardProp: m,
			label: void 0,
			...u
		}), g = (e) => {
			if (e.__emotion_real === e) return e;
			if (typeof e == "function") return function(t) {
				return Gr(t, e, t.theme.modularCssLayers ? d : void 0);
			};
			if (Yt(e)) {
				let t = zr(e);
				return function(e) {
					return t.variants ? Gr(e, t, e.theme.modularCssLayers ? d : void 0) : e.theme.modularCssLayers ? Hr(t.style, d) : t.style;
				};
			}
			return e;
		}, _ = (...t) => {
			let r = [], i = t.map(g), o = [];
			if (r.push(a), n && l && o.push(function(e) {
				let t = e.theme.components?.[n]?.styleOverrides;
				if (!t) return null;
				let r = {};
				for (let n in t) r[n] = Gr(e, t[n], e.theme.modularCssLayers ? "theme" : void 0);
				return l(e, r);
			}), n && !f && o.push(function(e) {
				let t = e.theme?.components?.[n]?.variants;
				return t ? Kr(e, t, [], e.theme.modularCssLayers ? "theme" : void 0) : null;
			}), p || o.push(Tr), Array.isArray(i[0])) {
				let e = i.shift(), t = Array(r.length).fill(""), n = Array(o.length).fill(""), a;
				a = [
					...t,
					...e,
					...n
				], a.raw = [
					...t,
					...e.raw,
					...n
				], r.unshift(a);
			}
			let s = [
				...r,
				...i,
				...o
			], c = h(...s);
			return e.muiName && (c.muiName = e.muiName), c;
		};
		return h.withConfig && (_.withConfig = h.withConfig), _;
	};
}
function Jr(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Yr(e) {
	return e && e.charAt(0).toLowerCase() + e.slice(1);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/styled/styled.mjs
var Xr = qr();
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/resolveProps/resolveProps.mjs
function Zr(e, t, n = !1) {
	let r = { ...t };
	for (let i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
		let a = i;
		if (a === "components" || a === "slots") r[a] = {
			...e[a],
			...r[a]
		};
		else if (a === "componentsProps" || a === "slotProps") {
			let i = e[a], o = t[a];
			if (!o) r[a] = i || {};
			else if (!i) r[a] = o;
			else {
				r[a] = { ...o };
				for (let e in i) if (Object.prototype.hasOwnProperty.call(i, e)) {
					let t = e, s = i[t], c = o[t];
					typeof s == "function" || typeof c == "function" ? r[a][t] = (...e) => Zr((typeof s == "function" ? s(...e) : s) ?? {}, (typeof c == "function" ? c(...e) : c) ?? {}, n) : r[a][t] = Zr(s ?? {}, c ?? {}, n);
				}
			}
		} else a === "className" && n && t.className !== void 0 ? r.className = R(e?.className, t?.className) : a === "style" && n && t.style ? r.style = {
			...e?.style,
			...t?.style
		} : r[a] === void 0 && (r[a] = e[a]);
	}
	return r;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/useThemeProps/getThemeProps.mjs
function Qr(e) {
	let { theme: t, name: n, props: r } = e;
	return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Zr(t.components[n].defaultProps, r);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/useThemeProps/useThemeProps.mjs
function $r(e) {
	let { props: t, name: n, defaultTheme: r, themeId: i } = e, a = Nr(r);
	return i && (a = a[i] || a), Qr({
		theme: a,
		name: n,
		props: t
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs
var ei = typeof window < "u" ? e.useLayoutEffect : e.useEffect;
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/clamp/clamp.mjs
function ti(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/colorManipulator/colorManipulator.mjs
function ni(e, t = 0, n = 1) {
	return ti(e, t, n);
}
function ri(e) {
	e = e.slice(1);
	let t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"), n = e.match(t);
	return n && n[0].length === 1 && (n = n.map((e) => e + e)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ii(e) {
	if (e.type) return e;
	if (e.charAt(0) === "#") return ii(ri(e));
	let t = e.indexOf("("), n = e.substring(0, t);
	if (![
		"rgb",
		"rgba",
		"hsl",
		"hsla",
		"color"
	].includes(n)) throw Error(_(9, e));
	let r = e.substring(t + 1, e.length - 1), i;
	if (n === "color") {
		if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
			"srgb",
			"display-p3",
			"a98-rgb",
			"prophoto-rgb",
			"rec-2020"
		].includes(i)) throw Error(_(10, i));
	} else r = r.split(",");
	return r = r.map((e) => parseFloat(e)), {
		type: n,
		values: r,
		colorSpace: i
	};
}
var ai = (e) => {
	let t = ii(e);
	return t.values.slice(0, 3).map((e, n) => t.type.includes("hsl") && n !== 0 ? `${e}%` : e).join(" ");
}, oi = (e, t) => {
	try {
		return ai(e);
	} catch {
		return e;
	}
};
function si(e) {
	let { type: t, colorSpace: n } = e, { values: r } = e;
	return t.includes("rgb") ? r = r.map((e, t) => t < 3 ? parseInt(e, 10) : e) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), r = t.includes("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`, `${t}(${r})`;
}
function ci(e) {
	e = ii(e);
	let { values: t } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), o = (e, t = (e + n / 30) % 12) => i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1), s = "rgb", c = [
		Math.round(o(0) * 255),
		Math.round(o(8) * 255),
		Math.round(o(4) * 255)
	];
	return e.type === "hsla" && (s += "a", c.push(t[3])), si({
		type: s,
		values: c
	});
}
function li(e) {
	e = ii(e);
	let t = e.type === "hsl" || e.type === "hsla" ? ii(ci(e)).values : e.values;
	return t = t.map((t) => (e.type !== "color" && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
}
function ui(e, t) {
	let n = li(e), r = li(t);
	return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
}
function di(e, t) {
	return e = ii(e), t = ni(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, si(e);
}
function fi(e, t, n) {
	try {
		return di(e, t);
	} catch {
		return e;
	}
}
function pi(e, t) {
	if (e = ii(e), t = ni(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
	else if (e.type.includes("rgb") || e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
	return si(e);
}
function V(e, t, n) {
	try {
		return pi(e, t);
	} catch {
		return e;
	}
}
function mi(e, t) {
	if (e = ii(e), t = ni(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
	else if (e.type.includes("rgb")) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
	else if (e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
	return si(e);
}
function H(e, t, n) {
	try {
		return mi(e, t);
	} catch {
		return e;
	}
}
function hi(e, t = .15) {
	return li(e) > .5 ? pi(e, t) : mi(e, t);
}
function gi(e, t, n) {
	try {
		return hi(e, t);
	} catch {
		return e;
	}
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/DefaultPropsProvider/DefaultPropsProvider.mjs
var _i = /*#__PURE__*/ e.createContext(void 0);
function vi(e) {
	let { theme: t, name: n, props: r } = e;
	if (!t || !t.components || !t.components[n]) return r;
	let i = t.components[n];
	return i.defaultProps ? Zr(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? Zr(i, r, t.components.mergeClassNameAndStyle) : r;
}
function yi({ props: t, name: n }) {
	return vi({
		props: t,
		name: n,
		theme: { components: e.useContext(_i) }
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/useId/useId.mjs
var bi = 0;
function xi(t) {
	let [n, r] = e.useState(t), i = t || n;
	return e.useEffect(() => {
		n ?? (bi += 1, r(`mui-${bi}`));
	}, [n]), i;
}
var Si = { ...e }.useId;
function Ci(e) {
	if (Si !== void 0) {
		let t = Si();
		return e ?? t;
	}
	return xi(e);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/memoTheme.mjs
var wi = { theme: void 0 };
function Ti(e) {
	let t, n;
	return function(r) {
		let i = t;
		return (i === void 0 || r.theme !== n) && (wi.theme = r.theme, i = zr(e(wi)), t = i, n = r.theme), i;
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/cssVars/createGetCssVar.mjs
function Ei(e = "") {
	function t(...n) {
		if (!n.length) return "";
		let r = n[0];
		return typeof r == "string" && !r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${r}${t(...n.slice(1))})` : `, ${r}`;
	}
	return (n, ...r) => `var(--${e ? `${e}-` : ""}${n}${t(...r)})`;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/cssVars/cssVarsParser.mjs
var Di = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]), Oi = (e, t, n, r = []) => {
	let i = e;
	for (let e = 0; e < t.length; e += 1) {
		let a = t[e];
		if (Di.has(a)) break;
		e === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
	}
}, ki = (e, t, n) => {
	function r(e, i = [], a = []) {
		Object.entries(e).forEach(([e, o]) => {
			(!n || n && !n([...i, e])) && o != null && (typeof o == "object" && Object.keys(o).length > 0 ? r(o, [...i, e], Array.isArray(o) ? [...a, e] : a) : t([...i, e], o, a));
		});
	}
	r(e);
}, Ai = (e, t) => typeof t == "number" ? [
	"lineHeight",
	"fontWeight",
	"opacity",
	"zIndex"
].some((t) => e.includes(t)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ji(e, t) {
	let { prefix: n, shouldSkipGeneratingVar: r } = t || {}, i = {}, a = {}, o = {};
	return ki(e, (e, t, s) => {
		if ((typeof t == "string" || typeof t == "number") && (!r || !r(e, t))) {
			let r = `--${n ? `${n}-` : ""}${e.join("-")}`, c = Ai(e, t);
			Object.assign(i, { [r]: c }), Oi(a, e, `var(${r})`, s), Oi(o, e, `var(${r}, ${c})`, s);
		}
	}, (e) => e[0] === "vars"), {
		css: i,
		vars: a,
		varsWithDefaults: o
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/cssVars/prepareCssVars.mjs
function Mi(e, t = {}) {
	let { getSelector: n = _, disableCssColorScheme: r, colorSchemeSelector: i, enableContrastVars: a } = t, { colorSchemes: o = {}, components: s, defaultColorScheme: c = "light", ...l } = e, { vars: u, css: d, varsWithDefaults: f } = ji(l, t), p = f, m = {}, { [c]: h, ...g } = o;
	if (Object.entries(g || {}).forEach(([e, n]) => {
		let { vars: r, css: i, varsWithDefaults: a } = ji(n, t);
		p = N(p, a), m[e] = {
			css: i,
			vars: r
		};
	}), h) {
		let { css: e, vars: n, varsWithDefaults: r } = ji(h, t);
		p = N(p, r), m[c] = {
			css: e,
			vars: n
		};
	}
	function _(t, n) {
		let r = i;
		if (i === "class" && (r = ".%s"), i === "data" && (r = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (r = `[${i}="%s"]`), t) {
			if (r === "media") return e.defaultColorScheme === t ? ":root" : { [`@media (prefers-color-scheme: ${o[t]?.palette?.mode || t})`]: { ":root": n } };
			if (r) return e.defaultColorScheme === t ? `:root, ${r.replace("%s", String(t))}` : r.replace("%s", String(t));
		}
		return ":root";
	}
	return {
		vars: p,
		generateThemeVars: () => {
			let e = { ...u };
			return Object.entries(m).forEach(([, { vars: t }]) => {
				e = N(e, t);
			}), e;
		},
		generateStyleSheets: () => {
			let t = [], i = e.defaultColorScheme || "light";
			function s(e, n) {
				Object.keys(n).length && t.push(typeof e == "string" ? { [e]: { ...n } } : e);
			}
			s(n(void 0, { ...d }), d);
			let { [i]: c, ...l } = m;
			if (c) {
				let { css: e } = c, t = o[i]?.palette?.mode, a = !r && t ? {
					colorScheme: t,
					...e
				} : { ...e };
				s(n(i, { ...a }), a);
			}
			return Object.entries(l).forEach(([e, { css: t }]) => {
				let i = o[e]?.palette?.mode, a = !r && i ? {
					colorScheme: i,
					...t
				} : { ...t };
				s(n(e, { ...a }), a);
			}), a && t.push({ ":root": {
				"--__l-threshold": "0.7",
				"--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
				"--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
			} }), t;
		}
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/cssVars/getColorSchemeSelector.mjs
function Ni(e) {
	return function(t) {
		return e === "media" ? `@media (prefers-color-scheme: ${t})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/composeClasses/composeClasses.mjs
function U(e, t, n = void 0) {
	let r = {};
	for (let i in e) {
		let a = e[i], o = "", s = !0;
		for (let e = 0; e < a.length; e += 1) {
			let r = a[e];
			r && (o += (s === !0 ? "" : " ") + t(r), s = !1, n && n[r] && (o += " " + n[r]));
		}
		r[i] = o;
	}
	return r;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/Stack/createStack.mjs
var Pi = kr(), Fi = Xr("div", {
	name: "MuiStack",
	slot: "Root"
});
function Ii(e) {
	return $r({
		props: e,
		name: "MuiStack",
		defaultTheme: Pi
	});
}
function Li(t, n) {
	let r = e.Children.toArray(t).filter(Boolean);
	return r.reduce((t, i, a) => (t.push(i), a < r.length - 1 && t.push(/*#__PURE__*/ e.cloneElement(n, { key: `separator-${a}` })), t), []);
}
var Ri = (e) => ({
	row: "Left",
	"row-reverse": "Right",
	column: "Top",
	"column-reverse": "Bottom"
})[e], zi = ({ ownerState: e, theme: t }) => {
	let n = {
		display: "flex",
		flexDirection: "column",
		...xn({ theme: t }, On({
			values: e.direction,
			breakpoints: t.breakpoints.values
		}), (e) => ({ flexDirection: e }))
	};
	if (e.spacing) {
		let r = Hn(t), i = Object.keys(t.breakpoints.values).reduce((t, n) => ((typeof e.spacing == "object" && e.spacing[n] != null || typeof e.direction == "object" && e.direction[n] != null) && (t[n] = !0), t), {}), a = On({
			values: e.direction,
			base: i
		}), o = On({
			values: e.spacing,
			base: i
		});
		typeof a == "object" && Object.keys(a).forEach((e, t, n) => {
			if (!a[e]) {
				let r = t > 0 ? a[n[t - 1]] : "column";
				a[e] = r;
			}
		}), n = N(n, xn({ theme: t }, o, (t, n) => e.useFlexGap ? { gap: Un(r, t) } : {
			"& > :not(style):not(style)": { margin: 0 },
			"& > :not(style) ~ :not(style)": { [`margin${Ri(n ? a[n] : e.direction)}`]: Un(r, t) }
		}));
	}
	return n = En(t.breakpoints, n), n;
};
function Bi(t = {}) {
	let { createStyledComponent: n = Fi, useThemeProps: r = Ii, componentName: i = "MuiStack" } = t, a = () => U({ root: ["root"] }, (e) => z(i, e), {}), s = n(zi);
	return /* @__PURE__ */ e.forwardRef(function(e, t) {
		let { component: n = "div", direction: i = "column", spacing: c = 0, divider: l, children: u, className: d, useFlexGap: f = !1, ...p } = r(e), m = {
			direction: i,
			spacing: c,
			useFlexGap: f
		}, h = a();
		return /*#__PURE__*/ o(s, {
			as: n,
			ownerState: m,
			ref: t,
			className: R(h.root, d),
			...p,
			children: l ? Li(u, l) : u
		});
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/createPalette.mjs
function Vi() {
	return {
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.6)",
			disabled: "rgba(0, 0, 0, 0.38)"
		},
		divider: "rgba(0, 0, 0, 0.12)",
		background: {
			paper: l.white,
			default: l.white
		},
		action: {
			active: "rgba(0, 0, 0, 0.54)",
			hover: "rgba(0, 0, 0, 0.04)",
			hoverOpacity: .04,
			selected: "rgba(0, 0, 0, 0.08)",
			selectedOpacity: .08,
			disabled: "rgba(0, 0, 0, 0.26)",
			disabledBackground: "rgba(0, 0, 0, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(0, 0, 0, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .12
		}
	};
}
var Hi = Vi();
function Ui() {
	return {
		text: {
			primary: l.white,
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: "rgba(255, 255, 255, 0.5)"
		},
		divider: "rgba(255, 255, 255, 0.12)",
		background: {
			paper: "#121212",
			default: "#121212"
		},
		action: {
			active: l.white,
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: .08,
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: .16,
			disabled: "rgba(255, 255, 255, 0.3)",
			disabledBackground: "rgba(255, 255, 255, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .24
		}
	};
}
var Wi = Ui();
function Gi(e, t, n, r) {
	let i = r.light || r, a = r.dark || r * 1.5;
	e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = mi(e.main, i) : t === "dark" && (e.dark = pi(e.main, a)));
}
function Ki(e, t, n, r, i) {
	let a = i.light || i, o = i.dark || i * 1.5;
	t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(o * 100).toFixed(0)}%)`));
}
function qi(e = "light") {
	return e === "dark" ? {
		main: f[200],
		light: f[50],
		dark: f[400]
	} : {
		main: f[700],
		light: f[400],
		dark: f[800]
	};
}
function Ji(e = "light") {
	return e === "dark" ? {
		main: d[200],
		light: d[50],
		dark: d[400]
	} : {
		main: d[500],
		light: d[300],
		dark: d[700]
	};
}
function Yi(e = "light") {
	return e === "dark" ? {
		main: u[500],
		light: u[300],
		dark: u[700]
	} : {
		main: u[700],
		light: u[400],
		dark: u[800]
	};
}
function Xi(e = "light") {
	return e === "dark" ? {
		main: p[400],
		light: p[300],
		dark: p[700]
	} : {
		main: p[700],
		light: p[500],
		dark: p[900]
	};
}
function Zi(e = "light") {
	return e === "dark" ? {
		main: m[400],
		light: m[300],
		dark: m[700]
	} : {
		main: m[800],
		light: m[500],
		dark: m[900]
	};
}
function Qi(e = "light") {
	return e === "dark" ? {
		main: h[400],
		light: h[300],
		dark: h[700]
	} : {
		main: "#ed6c02",
		light: h[500],
		dark: h[900]
	};
}
function $i(e) {
	return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ea(e) {
	let { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = .2, colorSpace: i, ...a } = e, o = e.primary || qi(t), s = e.secondary || Ji(t), c = e.error || Yi(t), u = e.info || Xi(t), d = e.success || Zi(t), f = e.warning || Qi(t);
	function p(e) {
		return i ? $i(e) : ui(e, Wi.text.primary) >= n ? Wi.text.primary : Hi.text.primary;
	}
	let m = ({ color: e, name: t, mainShade: n = 500, lightShade: a = 300, darkShade: o = 700 }) => {
		if (e = { ...e }, !e.main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw Error(_(11, t ? ` (${t})` : "", n));
		if (typeof e.main != "string") throw Error(_(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
		return i ? (Ki(i, e, "light", a, r), Ki(i, e, "dark", o, r)) : (Gi(e, "light", a, r), Gi(e, "dark", o, r)), e.contrastText || (e.contrastText = p(e.main)), e;
	}, h;
	return t === "light" ? h = Vi() : t === "dark" && (h = Ui()), N({
		common: { ...l },
		mode: t,
		primary: m({
			color: o,
			name: "primary"
		}),
		secondary: m({
			color: s,
			name: "secondary",
			mainShade: "A400",
			lightShade: "A200",
			darkShade: "A700"
		}),
		error: m({
			color: c,
			name: "error"
		}),
		warning: m({
			color: f,
			name: "warning"
		}),
		info: m({
			color: u,
			name: "info"
		}),
		success: m({
			color: d,
			name: "success"
		}),
		grey: g,
		contrastThreshold: n,
		getContrastText: p,
		augmentColor: m,
		tonalOffset: r,
		...h
	}, a);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/focusVisible.mjs
var ta = "--_focusVisible-offset", na = "--_focusVisible-behavior", ra = "--_focusVisible-shadow", ia = `var(${ta}, 1)`, aa = `var(${na}, )`, oa = {
	[ta]: 1,
	[na]: "initial"
};
function sa(e) {
	return { [ra]: e };
}
function ca(e, t) {
	return t.reduce((e, t) => t && "focusVisible" in t ? N(e, { focusVisible: t.focusVisible }) : e, { focusVisible: e }).focusVisible;
}
function la(e) {
	return typeof e == "object" && !!e && typeof e.outlineOffset == "string" && e.outlineOffset.includes(ta);
}
function ua(e, t) {
	return da({
		outlineStyle: "solid",
		outlineColor: t,
		outlineWidth: 2,
		outlineOffset: 2,
		boxShadow: `var(${ra}, 0 0)`,
		...e === !0 ? null : e
	});
}
function da(e) {
	let t = e.outlineOffset ?? 0;
	(typeof t != "string" || !t.includes(ta)) && (e.outlineOffset = `calc(${ia} * ${typeof t == "number" ? `${t}px` : t})`);
	let n = /* @__PURE__ */ new Set([
		"none",
		"initial",
		"inherit",
		"unset",
		"revert",
		"revert-layer"
	]);
	return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(na) && (e.boxShadow = `${aa} ${e.boxShadow}`), e;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+system@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-col_de02ea905f0dfe63b9a56a663c611dc7/node_modules/@mui/system/cssVars/prepareTypographyVars.mjs
function fa(e) {
	let t = {};
	return Object.entries(e).forEach((e) => {
		let [n, r] = e;
		typeof r == "object" && (t[n] = `${r.fontStyle ? `${r.fontStyle} ` : ""}${r.fontVariant ? `${r.fontVariant} ` : ""}${r.fontWeight ? `${r.fontWeight} ` : ""}${r.fontStretch ? `${r.fontStretch} ` : ""}${r.fontSize || ""}${r.lineHeight ? `/${r.lineHeight} ` : ""}${r.fontFamily || ""}`);
	}), t;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/createMixins.mjs
function pa(e, t) {
	return {
		toolbar: {
			minHeight: 56,
			[e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
			[e.up("sm")]: { minHeight: 64 }
		},
		...t
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/createTypography.mjs
function ma(e) {
	return Math.round(e * 1e5) / 1e5;
}
var ha = { textTransform: "uppercase" }, ga = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
function _a(e, t) {
	let { fontFamily: n = ga, fontSize: r = 14, fontWeightLight: i = 300, fontWeightRegular: a = 400, fontWeightMedium: o = 500, fontWeightBold: s = 700, htmlFontSize: c = 16, allVariants: l, pxToRem: u, ...d } = typeof t == "function" ? t(e) : t, f = r / 14, p = u || ((e) => `${e / c * f}rem`), m = (e, t, r, i, a) => ({
		fontFamily: n,
		fontWeight: e,
		fontSize: p(t),
		lineHeight: r,
		...n === ga ? { letterSpacing: `${ma(i / t)}em` } : {},
		...a,
		...l
	});
	return N({
		htmlFontSize: c,
		pxToRem: p,
		fontFamily: n,
		fontSize: r,
		fontWeightLight: i,
		fontWeightRegular: a,
		fontWeightMedium: o,
		fontWeightBold: s,
		h1: m(i, 96, 1.167, -1.5),
		h2: m(i, 60, 1.2, -.5),
		h3: m(a, 48, 1.167, 0),
		h4: m(a, 34, 1.235, .25),
		h5: m(a, 24, 1.334, 0),
		h6: m(o, 20, 1.6, .15),
		subtitle1: m(a, 16, 1.75, .15),
		subtitle2: m(o, 14, 1.57, .1),
		body1: m(a, 16, 1.5, .15),
		body2: m(a, 14, 1.43, .15),
		button: m(o, 14, 1.75, .4, ha),
		caption: m(a, 12, 1.66, .4),
		overline: m(a, 12, 2.66, 1, ha),
		inherit: {
			fontFamily: "inherit",
			fontWeight: "inherit",
			fontSize: "inherit",
			lineHeight: "inherit",
			letterSpacing: "inherit"
		}
	}, d, { clone: !1 });
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/shadows.mjs
var va = .2, ya = .14, ba = .12;
function W(...e) {
	return [
		`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${va})`,
		`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ya})`,
		`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ba})`
	].join(",");
}
var xa = [
	"none",
	W(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
	W(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
	W(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
	W(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
	W(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
	W(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
	W(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
	W(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
	W(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
	W(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
	W(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
	W(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
	W(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
	W(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
	W(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
	W(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
	W(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
	W(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
	W(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
	W(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
	W(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
	W(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
	W(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
	W(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
], Sa = ["all"], Ca = {}, wa = {
	easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
	easeIn: "cubic-bezier(0.4, 0, 1, 1)",
	sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ta = {
	shortest: 150,
	shorter: 200,
	short: 250,
	standard: 300,
	complex: 375,
	enteringScreen: 225,
	leavingScreen: 195
};
function Ea(e) {
	return `${Math.round(e)}ms`;
}
function Da(e) {
	if (!e) return 0;
	let t = e / 36;
	return Math.min(Math.round((4 + 15 * t ** .25 + t / 5) * 10), 3e3);
}
function Oa(e) {
	let t = { ...e };
	delete t.reducedMotion;
	let n = {
		...wa,
		...t.easing
	}, r = {
		...Ta,
		...t.duration
	};
	return {
		getAutoHeightDuration: Da,
		create: t.create ?? ((e = Sa, t = Ca) => {
			let { duration: i = r.standard, easing: a = n.easeInOut, delay: o = 0, ...s } = t;
			return (Array.isArray(e) ? e : [e]).map((e) => `${e} ${typeof i == "string" ? i : Ea(i)} ${a} ${typeof o == "string" ? o : Ea(o)}`).join(",");
		}),
		...t,
		easing: n,
		duration: r
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/createMotion.mjs
var ka = {};
function Aa(e = ka) {
	return {
		reducedMotion: "never",
		...e
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/zIndex.mjs
var ja = {
	mobileStepper: 1e3,
	fab: 1050,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	snackbar: 1400,
	tooltip: 1500
};
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/stringifyTheme.mjs
function Ma(e) {
	return Yt(e) || e === void 0 || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Na(e = {}) {
	let t = { ...e };
	function n(e) {
		let t = Object.entries(e);
		for (let r = 0; r < t.length; r++) {
			let [i, a] = t[r];
			!Ma(a) || i.startsWith("unstable_") || i.startsWith("internal_") ? delete e[i] : Yt(a) && (e[i] = { ...a }, n(e[i]));
		}
	}
	return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/createThemeNoVars.mjs
function Pa(e) {
	return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
var Fa = (e) => {
	if (!Number.isNaN(+e)) return +e;
	let t = e.match(/\d*\.?\d+/g);
	if (!t) return 0;
	let n = 0;
	for (let e = 0; e < t.length; e += 1) n += +t[e];
	return n;
};
function Ia(e) {
	Object.assign(e, {
		alpha(t, n) {
			let r = this || e;
			return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : di(t, Fa(n));
		},
		lighten(t, n) {
			let r = this || e;
			return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Pa(n)})` : mi(t, n);
		},
		darken(t, n) {
			let r = this || e;
			return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Pa(n)})` : pi(t, n);
		}
	});
}
function La(e = {}, ...t) {
	let { breakpoints: n, mixins: r = {}, spacing: i, palette: a = {}, motion: o = {}, transitions: s = {}, typography: c = {}, shape: l, colorSpace: u, ...d } = e;
	if (e.vars && e.generateThemeVars === void 0) throw Error(_(22));
	let f = ea({
		...a,
		colorSpace: u
	}), p = kr(e), m = N(p, {
		mixins: pa(p.breakpoints, r),
		palette: f,
		shadows: xa.slice(),
		typography: _a(f, c),
		motion: Aa(o),
		transitions: Oa(s),
		zIndex: { ...ja }
	});
	return m = N(m, d), m = t.reduce((e, t) => N(e, t), m), delete m.transitions.reducedMotion, m.focusVisible != null && m.focusVisible !== !1 && (m.focusVisible = ua(m.focusVisible, m.palette.primary.main)), m.unstable_sxConfig = {
		...Sr,
		...d?.unstable_sxConfig
	}, m.unstable_sx = function(e) {
		return Tr({
			sx: e,
			theme: this
		});
	}, m.toRuntimeSource = Na, Ia(m), m;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/getOverlayAlpha.mjs
function Ra(e) {
	let t;
	return t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/createColorScheme.mjs
var za = [...Array(25)].map((e, t) => {
	if (t === 0) return "none";
	let n = Ra(t);
	return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Ba(e) {
	return {
		inputPlaceholder: e === "dark" ? .5 : .42,
		inputUnderline: e === "dark" ? .7 : .42,
		switchTrackDisabled: e === "dark" ? .2 : .12,
		switchTrack: e === "dark" ? .3 : .38
	};
}
function Va(e) {
	return e === "dark" ? za : [];
}
function Ha(e) {
	let { palette: t = { mode: "light" }, opacity: n, overlays: r, colorSpace: i, ...a } = e, o = ea({
		...t,
		colorSpace: i
	});
	return {
		palette: o,
		opacity: {
			...Ba(o.mode),
			...n
		},
		overlays: r || Va(o.mode),
		...a
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/shouldSkipGeneratingVar.mjs
function Ua(e) {
	return e[0] === "motion" || e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/excludeVariablesFromRoot.mjs
var Wa = (e) => [
	...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
	`--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
	`--${e ? `${e}-` : ""}palette-AppBar-darkColor`
], Ga = (e) => (t, n) => {
	let r = e.rootSelector || ":root", i = e.colorSchemeSelector, a = i;
	if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
		if (t === "dark") {
			let i = {};
			return Wa(e.cssVarPrefix).forEach((e) => {
				i[e] = n[e], delete n[e];
			}), a === "media" ? {
				[r]: n,
				"@media (prefers-color-scheme: dark)": { [r]: i }
			} : a ? {
				[a.replace("%s", t)]: i,
				[`${r}, ${a.replace("%s", t)}`]: n
			} : { [r]: {
				...n,
				...i
			} };
		}
		if (a && a !== "media") return `${r}, ${a.replace("%s", String(t))}`;
	} else if (t) {
		if (a === "media") return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } };
		if (a) return a.replace("%s", String(t));
	}
	return r;
};
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/createThemeWithVars.mjs
function Ka(e, t) {
	t.forEach((t) => {
		e[t] || (e[t] = {});
	});
}
function G(e, t, n) {
	!e[t] && n && (e[t] = n);
}
function qa(e) {
	return typeof e != "string" || !e.startsWith("hsl") ? e : ci(e);
}
function Ja(e, t) {
	`${t}Channel` in e || (e[`${t}Channel`] = oi(qa(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ya(e) {
	return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
var Xa = (e) => {
	try {
		return e();
	} catch {}
}, Za = (e = "mui") => Ei(e);
function Qa(e, t, n, r, i) {
	if (!n) return;
	n = n === !0 ? {} : n;
	let a = i === "dark" ? "dark" : "light";
	if (!r) {
		t[i] = Ha({
			...n,
			palette: {
				mode: a,
				...n?.palette
			},
			colorSpace: e
		});
		return;
	}
	let { palette: o, ...s } = La({
		...r,
		palette: {
			mode: a,
			...n?.palette
		},
		colorSpace: e
	});
	return t[i] = {
		...n,
		palette: o,
		opacity: {
			...Ba(a),
			...n?.opacity
		},
		overlays: n?.overlays || Va(a)
	}, s;
}
function $a(e = {}, ...t) {
	let { colorSchemes: n = { light: !0 }, defaultColorScheme: r, disableCssColorScheme: i = !1, cssVarPrefix: a = "mui", nativeColor: o = !1, shouldSkipGeneratingVar: s = Ua, colorSchemeSelector: c = n.light && n.dark ? "media" : void 0, rootSelector: l = ":root", ...u } = e, d = Object.keys(n)[0], f = r || (n.light && d !== "light" ? "light" : d), p = Za(a), { [f]: m, light: h, dark: g, ...v } = n, y = { ...v }, b = m;
	if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (b = !0), !b) throw Error(_(21, f));
	let x;
	o && (x = "oklch");
	let S = Qa(x, y, b, u, f);
	h && !y.light && Qa(x, y, h, void 0, "light"), g && !y.dark && Qa(x, y, g, void 0, "dark");
	let C = {
		defaultColorScheme: f,
		...S,
		cssVarPrefix: a,
		colorSchemeSelector: c,
		rootSelector: l,
		getCssVar: p,
		colorSchemes: y,
		font: {
			...fa(S.typography),
			...S.font
		},
		spacing: Ya(u.spacing)
	};
	Object.keys(C.colorSchemes).forEach((e) => {
		let t = C.colorSchemes[e].palette, n = (e) => {
			let n = e.split("-"), r = n[1], i = n[2];
			return p(e, t[r][i]);
		};
		t.mode === "light" && (G(t.common, "background", "#fff"), G(t.common, "onBackground", "#000")), t.mode === "dark" && (G(t.common, "background", "#000"), G(t.common, "onBackground", "#fff"));
		function r(e, t, n) {
			if (x) {
				let r;
				return e === fi && (r = `transparent ${((1 - n) * 100).toFixed(0)}%`), e === V && (r = `#000 ${(n * 100).toFixed(0)}%`), e === H && (r = `#fff ${(n * 100).toFixed(0)}%`), `color-mix(in ${x}, ${t}, ${r})`;
			}
			return e(t, n);
		}
		if (Ka(t, [
			"Alert",
			"AppBar",
			"Avatar",
			"Button",
			"Chip",
			"FilledInput",
			"LinearProgress",
			"Skeleton",
			"Slider",
			"SnackbarContent",
			"SpeedDialAction",
			"StepConnector",
			"StepContent",
			"Switch",
			"TableCell",
			"Tooltip"
		]), t.mode === "light") {
			G(t.Alert, "errorColor", r(V, o ? p("palette-error-light") : t.error.light, .6)), G(t.Alert, "infoColor", r(V, o ? p("palette-info-light") : t.info.light, .6)), G(t.Alert, "successColor", r(V, o ? p("palette-success-light") : t.success.light, .6)), G(t.Alert, "warningColor", r(V, o ? p("palette-warning-light") : t.warning.light, .6)), G(t.Alert, "errorFilledBg", n("palette-error-main")), G(t.Alert, "infoFilledBg", n("palette-info-main")), G(t.Alert, "successFilledBg", n("palette-success-main")), G(t.Alert, "warningFilledBg", n("palette-warning-main")), G(t.Alert, "errorFilledColor", Xa(() => t.getContrastText(t.error.main))), G(t.Alert, "infoFilledColor", Xa(() => t.getContrastText(t.info.main))), G(t.Alert, "successFilledColor", Xa(() => t.getContrastText(t.success.main))), G(t.Alert, "warningFilledColor", Xa(() => t.getContrastText(t.warning.main))), G(t.Alert, "errorStandardBg", r(H, o ? p("palette-error-light") : t.error.light, .9)), G(t.Alert, "infoStandardBg", r(H, o ? p("palette-info-light") : t.info.light, .9)), G(t.Alert, "successStandardBg", r(H, o ? p("palette-success-light") : t.success.light, .9)), G(t.Alert, "warningStandardBg", r(H, o ? p("palette-warning-light") : t.warning.light, .9)), G(t.Alert, "errorIconColor", n("palette-error-main")), G(t.Alert, "infoIconColor", n("palette-info-main")), G(t.Alert, "successIconColor", n("palette-success-main")), G(t.Alert, "warningIconColor", n("palette-warning-main")), G(t.AppBar, "defaultBg", n("palette-grey-100")), G(t.Avatar, "defaultBg", n("palette-grey-400")), G(t.Button, "inheritContainedBg", n("palette-grey-300")), G(t.Button, "inheritContainedHoverBg", n("palette-grey-A100")), G(t.Chip, "defaultBorder", n("palette-grey-400")), G(t.Chip, "defaultAvatarColor", n("palette-grey-700")), G(t.Chip, "defaultIconColor", n("palette-grey-700")), G(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), G(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), G(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), G(t.LinearProgress, "primaryBg", r(H, o ? p("palette-primary-main") : t.primary.main, .62)), G(t.LinearProgress, "secondaryBg", r(H, o ? p("palette-secondary-main") : t.secondary.main, .62)), G(t.LinearProgress, "errorBg", r(H, o ? p("palette-error-main") : t.error.main, .62)), G(t.LinearProgress, "infoBg", r(H, o ? p("palette-info-main") : t.info.main, .62)), G(t.LinearProgress, "successBg", r(H, o ? p("palette-success-main") : t.success.main, .62)), G(t.LinearProgress, "warningBg", r(H, o ? p("palette-warning-light") : t.warning.main, .62)), G(t.Skeleton, "bg", x ? r(fi, o ? p("palette-text-primary") : t.text.primary, .11) : `rgba(${n("palette-text-primaryChannel")} / 0.11)`), G(t.Slider, "primaryTrack", r(H, o ? p("palette-primary-main") : t.primary.main, .62)), G(t.Slider, "secondaryTrack", r(H, o ? p("palette-secondary-main") : t.secondary.main, .62)), G(t.Slider, "errorTrack", r(H, o ? p("palette-error-main") : t.error.main, .62)), G(t.Slider, "infoTrack", r(H, o ? p("palette-info-main") : t.info.main, .62)), G(t.Slider, "successTrack", r(H, o ? p("palette-success-main") : t.success.main, .62)), G(t.Slider, "warningTrack", r(H, o ? p("palette-warning-main") : t.warning.main, .62));
			let e = x ? r(V, o ? p("palette-background-default") : t.background.default, .6825) : gi(t.background.default, .8);
			G(t.SnackbarContent, "bg", e), G(t.SnackbarContent, "color", Xa(() => x ? Wi.text.primary : t.getContrastText(e))), G(t.SpeedDialAction, "fabHoverBg", gi(t.background.paper, .15)), G(t.StepConnector, "border", n("palette-grey-400")), G(t.StepContent, "border", n("palette-grey-400")), G(t.Switch, "defaultColor", n("palette-common-white")), G(t.Switch, "defaultDisabledColor", n("palette-grey-100")), G(t.Switch, "primaryDisabledColor", r(H, o ? p("palette-primary-main") : t.primary.main, .62)), G(t.Switch, "secondaryDisabledColor", r(H, o ? p("palette-secondary-main") : t.secondary.main, .62)), G(t.Switch, "errorDisabledColor", r(H, o ? p("palette-error-main") : t.error.main, .62)), G(t.Switch, "infoDisabledColor", r(H, o ? p("palette-info-main") : t.info.main, .62)), G(t.Switch, "successDisabledColor", r(H, o ? p("palette-success-main") : t.success.main, .62)), G(t.Switch, "warningDisabledColor", r(H, o ? p("palette-warning-main") : t.warning.main, .62)), G(t.TableCell, "border", r(H, fi(o ? p("palette-divider") : t.divider, 1), .88)), G(t.Tooltip, "bg", r(fi, o ? p("palette-grey-700") : t.grey[700], .92));
		}
		if (t.mode === "dark") {
			G(t.Alert, "errorColor", r(H, o ? p("palette-error-light") : t.error.light, .6)), G(t.Alert, "infoColor", r(H, o ? p("palette-info-light") : t.info.light, .6)), G(t.Alert, "successColor", r(H, o ? p("palette-success-light") : t.success.light, .6)), G(t.Alert, "warningColor", r(H, o ? p("palette-warning-light") : t.warning.light, .6)), G(t.Alert, "errorFilledBg", n("palette-error-dark")), G(t.Alert, "infoFilledBg", n("palette-info-dark")), G(t.Alert, "successFilledBg", n("palette-success-dark")), G(t.Alert, "warningFilledBg", n("palette-warning-dark")), G(t.Alert, "errorFilledColor", Xa(() => t.getContrastText(t.error.dark))), G(t.Alert, "infoFilledColor", Xa(() => t.getContrastText(t.info.dark))), G(t.Alert, "successFilledColor", Xa(() => t.getContrastText(t.success.dark))), G(t.Alert, "warningFilledColor", Xa(() => t.getContrastText(t.warning.dark))), G(t.Alert, "errorStandardBg", r(V, o ? p("palette-error-light") : t.error.light, .9)), G(t.Alert, "infoStandardBg", r(V, o ? p("palette-info-light") : t.info.light, .9)), G(t.Alert, "successStandardBg", r(V, o ? p("palette-success-light") : t.success.light, .9)), G(t.Alert, "warningStandardBg", r(V, o ? p("palette-warning-light") : t.warning.light, .9)), G(t.Alert, "errorIconColor", n("palette-error-main")), G(t.Alert, "infoIconColor", n("palette-info-main")), G(t.Alert, "successIconColor", n("palette-success-main")), G(t.Alert, "warningIconColor", n("palette-warning-main")), G(t.AppBar, "defaultBg", n("palette-grey-900")), G(t.AppBar, "darkBg", n("palette-background-paper")), G(t.AppBar, "darkColor", n("palette-text-primary")), G(t.Avatar, "defaultBg", n("palette-grey-600")), G(t.Button, "inheritContainedBg", n("palette-grey-800")), G(t.Button, "inheritContainedHoverBg", n("palette-grey-700")), G(t.Chip, "defaultBorder", n("palette-grey-700")), G(t.Chip, "defaultAvatarColor", n("palette-grey-300")), G(t.Chip, "defaultIconColor", n("palette-grey-300")), G(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), G(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), G(t.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), G(t.LinearProgress, "primaryBg", r(V, o ? p("palette-primary-main") : t.primary.main, .5)), G(t.LinearProgress, "secondaryBg", r(V, o ? p("palette-secondary-main") : t.secondary.main, .5)), G(t.LinearProgress, "errorBg", r(V, o ? p("palette-error-main") : t.error.main, .5)), G(t.LinearProgress, "infoBg", r(V, o ? p("palette-info-main") : t.info.main, .5)), G(t.LinearProgress, "successBg", r(V, o ? p("palette-success-main") : t.success.main, .5)), G(t.LinearProgress, "warningBg", r(V, o ? p("palette-warning-main") : t.warning.main, .5)), G(t.Skeleton, "bg", x ? r(fi, o ? p("palette-text-primary") : t.text.primary, .13) : `rgba(${n("palette-text-primaryChannel")} / 0.13)`), G(t.Slider, "primaryTrack", r(V, o ? p("palette-primary-main") : t.primary.main, .5)), G(t.Slider, "secondaryTrack", r(V, o ? p("palette-secondary-main") : t.secondary.main, .5)), G(t.Slider, "errorTrack", r(V, o ? p("palette-error-main") : t.error.main, .5)), G(t.Slider, "infoTrack", r(V, o ? p("palette-info-main") : t.info.main, .5)), G(t.Slider, "successTrack", r(V, o ? p("palette-success-main") : t.success.main, .5)), G(t.Slider, "warningTrack", r(V, o ? p("palette-warning-light") : t.warning.main, .5));
			let e = x ? r(H, o ? p("palette-background-default") : t.background.default, .985) : gi(t.background.default, .98);
			G(t.SnackbarContent, "bg", e), G(t.SnackbarContent, "color", Xa(() => x ? Hi.text.primary : t.getContrastText(e))), G(t.SpeedDialAction, "fabHoverBg", gi(t.background.paper, .15)), G(t.StepConnector, "border", n("palette-grey-600")), G(t.StepContent, "border", n("palette-grey-600")), G(t.Switch, "defaultColor", n("palette-grey-300")), G(t.Switch, "defaultDisabledColor", n("palette-grey-600")), G(t.Switch, "primaryDisabledColor", r(V, o ? p("palette-primary-main") : t.primary.main, .55)), G(t.Switch, "secondaryDisabledColor", r(V, o ? p("palette-secondary-main") : t.secondary.main, .55)), G(t.Switch, "errorDisabledColor", r(V, o ? p("palette-error-main") : t.error.main, .55)), G(t.Switch, "infoDisabledColor", r(V, o ? p("palette-info-main") : t.info.main, .55)), G(t.Switch, "successDisabledColor", r(V, o ? p("palette-success-main") : t.success.main, .55)), G(t.Switch, "warningDisabledColor", r(V, o ? p("palette-warning-light") : t.warning.main, .55)), G(t.TableCell, "border", r(V, fi(o ? p("palette-divider") : t.divider, 1), .68)), G(t.Tooltip, "bg", r(fi, o ? p("palette-grey-700") : t.grey[700], .92));
		}
		o || (Ja(t.background, "default"), Ja(t.background, "paper"), Ja(t.common, "background"), Ja(t.common, "onBackground"), Ja(t, "divider")), Object.keys(t).forEach((e) => {
			let n = t[e];
			e !== "tonalOffset" && !o && n && typeof n == "object" && (n.main && G(t[e], "mainChannel", oi(qa(n.main))), n.light && G(t[e], "lightChannel", oi(qa(n.light))), n.dark && G(t[e], "darkChannel", oi(qa(n.dark))), n.contrastText && G(t[e], "contrastTextChannel", oi(qa(n.contrastText))), e === "text" && (Ja(t[e], "primary"), Ja(t[e], "secondary")), e === "action" && (n.active && Ja(t[e], "active"), n.selected && Ja(t[e], "selected")));
		});
	}), C = t.reduce((e, t) => N(e, t), C);
	let w = ca(e.focusVisible, t);
	w != null && w !== !1 && (C.focusVisible = ua(w, p("palette-primary-main")));
	let T = {
		prefix: a,
		disableCssColorScheme: i,
		shouldSkipGeneratingVar: s,
		getSelector: Ga(C),
		enableContrastVars: o
	}, { vars: ee, generateThemeVars: te, generateStyleSheets: ne } = Mi(C, T);
	return C.vars = ee, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([e, t]) => {
		C[e] = t;
	}), C.generateThemeVars = te, C.generateStyleSheets = ne, C.generateSpacing = function() {
		return Jn(u.spacing, Hn(this));
	}, C.getColorSchemeSelector = Ni(c), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = s, C.unstable_sxConfig = {
		...Sr,
		...u?.unstable_sxConfig
	}, C.unstable_sx = function(e) {
		return Tr({
			sx: e,
			theme: this
		});
	}, C.internal_cache = {}, C.toRuntimeSource = Na, C;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/createTheme.mjs
function eo(e, t, n) {
	e.colorSchemes && n && (e.colorSchemes[t] = {
		...n !== !0 && n,
		palette: ea({
			...n === !0 ? {} : n.palette,
			mode: t
		})
	});
}
function to(e = {}, ...t) {
	let { palette: n, cssVariables: r = !1, colorSchemes: i = n ? void 0 : { light: !0 }, defaultColorScheme: a = n?.mode, ...o } = e, s = a || "light", c = i?.[s], l = {
		...i,
		...n ? { [s]: {
			...typeof c != "boolean" && c,
			palette: n
		} } : void 0
	};
	if (r === !1) {
		if (!("colorSchemes" in e)) return La(e, ...t);
		let r = n;
		"palette" in e || l[s] && (l[s] === !0 ? s === "dark" && (r = { mode: "dark" }) : r = l[s].palette);
		let i = La({
			...e,
			palette: r
		}, ...t);
		if (i.defaultColorScheme = s, i.colorSchemes = l, i.palette.mode === "light" && (i.colorSchemes.light = {
			...l.light !== !0 && l.light,
			palette: i.palette
		}, eo(i, "dark", l.dark)), i.palette.mode === "dark" && (i.colorSchemes.dark = {
			...l.dark !== !0 && l.dark,
			palette: i.palette
		}, eo(i, "light", l.light)), i.focusVisible != null && i.focusVisible !== !1) {
			let n = i.focusVisible, r = ca(e.focusVisible, t), a = r && typeof r == "object" ? r.outlineColor : void 0;
			if (!a || la(r) && a === i.palette.primary.main) {
				let { outlineColor: e, ...t } = n;
				n = t;
			}
			Object.keys(i.colorSchemes).forEach((e) => {
				let t = i.colorSchemes?.[e]?.palette;
				t?.primary && (i.colorSchemes[e].focusVisible = ua(n, t.primary.main));
			});
		}
		return i;
	}
	return !n && !("light" in l) && s === "light" && (l.light = !0), $a({
		...o,
		colorSchemes: l,
		defaultColorScheme: s,
		...typeof r != "boolean" && r
	}, ...t);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/isHostComponent/isHostComponent.mjs
function no(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/useForkRef/useForkRef.mjs
function ro(...t) {
	let n = e.useRef(void 0), r = e.useCallback((e) => {
		let n = t.map((t) => {
			if (t == null) return null;
			if (typeof t == "function") {
				let n = t, r = n(e);
				return typeof r == "function" ? r : () => {
					n(null);
				};
			}
			return t.current = e, () => {
				t.current = null;
			};
		});
		return () => {
			n.forEach((e) => e?.());
		};
	}, t);
	return e.useMemo(() => t.every((e) => e == null) ? null : (e) => {
		n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
	}, t);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/useEventCallback/useEventCallback.mjs
function io(t) {
	let n = e.useRef(t);
	return ei(() => {
		n.current = t;
	}), e.useRef((...e) => (0, n.current)(...e)).current;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/defaultTheme.mjs
var ao = to();
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/useTheme.mjs
function oo() {
	let e = Nr(ao);
	return e.$$material || e;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/slotShouldForwardProp.mjs
function so(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/styles/rootShouldForwardProp.mjs
var co = (e) => so(e) && e !== "classes", K = qr({
	themeId: v,
	defaultTheme: ao,
	rootShouldForwardProp: co
}), q = Ti;
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs
function J(e) {
	return yi(e);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/utils/capitalize.mjs
var Y = An, lo = ro, uo = { transition: "none" };
function fo(e, t) {
	return e === "always" ? t : e === "system" ? { "@media (prefers-reduced-motion: reduce)": t } : null;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/transitions/utils.mjs
var po = {}, mo = ["all"], ho = {};
function go(e, t) {
	let n = t ?? uo;
	return fo(e.motion?.reducedMotion, n);
}
function _o(e, t = mo, n = ho) {
	let r = e.transitions?.create?.(t, n), i = go(e);
	if (r === void 0) return i ?? po;
	let a = { transition: r };
	return i ? {
		...a,
		...i
	} : a;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ListItemButton/listItemButtonClasses.mjs
var vo = B("MuiListItemButton", [
	"root",
	"focusVisible",
	"dense",
	"alignItemsFlexStart",
	"disabled",
	"divider",
	"gutters",
	"selected"
]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/SvgIcon/svgIconClasses.mjs
function yo(e) {
	return z("MuiSvgIcon", e);
}
B("MuiSvgIcon", [
	"root",
	"colorPrimary",
	"colorSecondary",
	"colorAction",
	"colorError",
	"colorDisabled",
	"fontSizeInherit",
	"fontSizeSmall",
	"fontSizeMedium",
	"fontSizeLarge"
]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/SvgIcon/SvgIcon.mjs
var bo = (e) => {
	let { color: t, fontSize: n, classes: r } = e;
	return U({ root: [
		"root",
		t !== "inherit" && `color${Y(t)}`,
		`fontSize${Y(n)}`
	] }, yo, r);
}, xo = K("svg", {
	name: "MuiSvgIcon",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.color !== "inherit" && t[`color${Y(n.color)}`],
			t[`fontSize${Y(n.fontSize)}`]
		];
	}
})(q(({ theme: e }) => ({
	userSelect: "none",
	width: "1em",
	height: "1em",
	display: "inline-block",
	flexShrink: 0,
	..._o(e, "fill", { duration: (e.vars ?? e).transitions?.duration?.shorter }),
	variants: [
		{
			props: (e) => !e.hasSvgAsChild,
			style: { fill: "currentColor" }
		},
		{
			props: { fontSize: "inherit" },
			style: { fontSize: "inherit" }
		},
		{
			props: { fontSize: "small" },
			style: { fontSize: e.typography?.pxToRem?.(20) || "1.25rem" }
		},
		{
			props: { fontSize: "medium" },
			style: { fontSize: e.typography?.pxToRem?.(24) || "1.5rem" }
		},
		{
			props: { fontSize: "large" },
			style: { fontSize: e.typography?.pxToRem?.(35) || "2.1875rem" }
		},
		...Object.entries((e.vars ?? e).palette).filter(([, e]) => e && e.main).map(([t]) => ({
			props: { color: t },
			style: { color: (e.vars ?? e).palette?.[t]?.main }
		})),
		{
			props: { color: "action" },
			style: { color: (e.vars ?? e).palette?.action?.active }
		},
		{
			props: { color: "disabled" },
			style: { color: (e.vars ?? e).palette?.action?.disabled }
		},
		{
			props: { color: "inherit" },
			style: { color: void 0 }
		}
	]
}))), So = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiSvgIcon"
	}), { children: i, className: a, color: c = "inherit", component: l = "svg", fontSize: u = "medium", htmlColor: d, inheritViewBox: f = !1, titleAccess: p, viewBox: m = "0 0 24 24", ...h } = r, g = /*#__PURE__*/ e.isValidElement(i) && i.type === "svg", _ = {
		...r,
		color: c,
		component: l,
		fontSize: u,
		instanceFontSize: t.fontSize,
		inheritViewBox: f,
		viewBox: m,
		hasSvgAsChild: g
	}, v = {};
	f || (v.viewBox = m);
	let y = bo(_);
	return /*#__PURE__*/ s(xo, {
		as: l,
		className: R(y.root, a),
		focusable: "false",
		color: d,
		"aria-hidden": !p || void 0,
		role: p ? "img" : void 0,
		ref: n,
		...v,
		...h,
		...g && i.props,
		ownerState: _,
		children: [g ? i.props.children : i, p ? /*#__PURE__*/ o("title", { children: p }) : null]
	});
});
So.muiName = "SvgIcon";
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs
function Co(t, n) {
	function r(e, n) {
		return /*#__PURE__*/ o(So, {
			"data-testid": void 0,
			ref: n,
			...e,
			children: t
		});
	}
	return r.muiName = So.muiName, /*#__PURE__*/ e.memo(/*#__PURE__*/ e.forwardRef(r));
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/utils/useId.mjs
var wo = Ci, To = io;
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/isEventHandler/isEventHandler.mjs
function Eo(e, t) {
	let n = e.charCodeAt(2);
	return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/useLazyRef/useLazyRef.mjs
var Do = {};
function Oo(t, n) {
	let r = e.useRef(Do);
	return r.current === Do && (r.current = t(n)), r;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/transitions/useReducedMotion.mjs
var ko = "(prefers-reduced-motion: reduce)", Ao = 0, jo = "0ms", Mo = () => {}, No = () => !1, Po = () => !0, Fo = () => Mo;
function Io(t) {
	let [n, r] = e.useState(() => ({
		enabled: t,
		matches: t ? null : !1
	})), i = n.matches;
	return n.enabled !== t && (i = null, t || (i = !1)), ei(() => {
		let e = (e) => {
			r((n) => n.enabled === t && n.matches === e ? n : {
				enabled: t,
				matches: e
			});
		};
		if (!t) {
			n.enabled && e(!1);
			return;
		}
		if (typeof window > "u" || typeof window.matchMedia != "function") {
			e(!1);
			return;
		}
		let i = window.matchMedia(ko), a = () => {
			e(i.matches);
		};
		return a(), i.addEventListener("change", a), () => {
			i.removeEventListener("change", a);
		};
	}, [t, n.enabled]), i;
}
var Lo = { ...e }.useSyncExternalStore;
function Ro(t) {
	let n = t ? Po : No, [r, i] = e.useMemo(() => {
		if (!t || typeof window > "u" || typeof window.matchMedia != "function") return [No, Fo];
		let e = window.matchMedia(ko);
		return [() => e.matches, (t) => (e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		})];
	}, [t]);
	return Lo(i, r, n);
}
var zo = Lo === void 0 ? Io : Ro;
function Bo(t, n) {
	let r = zo(!n && t === "system"), i = !n && (t === "always" || t === "system" && r !== !1);
	return e.useMemo(() => ({
		shouldReduceMotion: i,
		getTransitionTiming(e) {
			return i ? {
				duration: Ao,
				delay: jo
			} : e;
		}
	}), [i]);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/appendOwnerState/appendOwnerState.mjs
function Vo(e, t, n) {
	return e === void 0 || no(e) ? t : {
		...t,
		ownerState: {
			...t.ownerState,
			...n
		}
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.mjs
function Ho(e, t, n) {
	return typeof e == "function" ? e(t, n) : e;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.mjs
function Uo(e) {
	if (e === void 0) return {};
	let t = {};
	for (let n of Object.keys(e)) Eo(n, e[n]) && (t[n] = e[n]);
	return t;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.mjs
function Wo(e) {
	if (e === void 0) return {};
	let t = {};
	return Object.keys(e).filter((t) => !(t.match(/^on[A-Z]/) && typeof e[t] == "function")).forEach((n) => {
		t[n] = e[n];
	}), t;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.mjs
function Go(e) {
	let { getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: i, className: a } = e;
	if (!t) {
		let e = R(n?.className, a, i?.className, r?.className), t = {
			...n?.style,
			...i?.style,
			...r?.style
		}, o = {
			...n,
			...i,
			...r
		};
		return e.length > 0 && (o.className = e), Object.keys(t).length > 0 && (o.style = t), {
			props: o,
			internalRef: void 0
		};
	}
	let o = Uo({
		...i,
		...r
	}), s = Wo(r), c = Wo(i), l = t(o), u = R(l?.className, n?.className, a, i?.className, r?.className), d = {
		...l?.style,
		...n?.style,
		...i?.style,
		...r?.style
	}, f = {
		...l,
		...n,
		...c,
		...s
	};
	return u.length > 0 && (f.className = u), Object.keys(d).length > 0 && (f.style = d), {
		props: f,
		internalRef: l.ref
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/utils/useSlot.mjs
function Ko(e, t) {
	let { className: n, elementType: r, ownerState: i, externalForwardedProps: a, internalForwardedProps: o, shouldForwardComponentProp: s = !1, ...c } = t, { component: l, slots: u = { [e]: void 0 }, slotProps: d = { [e]: void 0 }, ...f } = a, p = u[e] || r, m = Ho(d[e], i), { props: { component: h, ...g }, internalRef: _ } = Go({
		className: n,
		...c,
		externalForwardedProps: e === "root" ? f : void 0,
		externalSlotProps: m
	}), v = ro(_, m?.ref, t.ref), y = e === "root" ? h || l : h;
	return [p, Vo(p, {
		...e === "root" && !l && !u[e] && o,
		...e !== "root" && !u[e] && o,
		...g,
		...y && !s && { as: y },
		...y && s && { component: y },
		ref: v
	}, i)];
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Paper/paperClasses.mjs
function qo(e) {
	return z("MuiPaper", e);
}
B("MuiPaper", /* @__PURE__ */ "root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24".split("."));
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Paper/Paper.mjs
var Jo = (e) => {
	let { square: t, elevation: n, variant: r, classes: i } = e;
	return U({ root: [
		"root",
		r,
		!t && "rounded",
		r === "elevation" && `elevation${n}`
	] }, qo, i);
}, Yo = K("div", {
	name: "MuiPaper",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			!n.square && t.rounded,
			n.variant === "elevation" && t[`elevation${n.elevation}`]
		];
	}
})(q(({ theme: e }) => ({
	backgroundColor: (e.vars || e).palette.background.paper,
	color: (e.vars || e).palette.text.primary,
	..._o(e, "box-shadow"),
	variants: [
		{
			props: ({ ownerState: e }) => !e.square,
			style: { borderRadius: e.shape.borderRadius }
		},
		{
			props: { variant: "outlined" },
			style: { border: `1px solid ${(e.vars || e).palette.divider}` }
		},
		{
			props: { variant: "elevation" },
			style: {
				boxShadow: "var(--Paper-shadow)",
				backgroundImage: "var(--Paper-overlay)"
			}
		}
	]
}))), Xo = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiPaper"
	}), r = oo(), { className: i, component: a = "div", elevation: s = 1, square: c = !1, variant: l = "elevation", ...u } = n, d = {
		...n,
		component: a,
		elevation: s,
		square: c,
		variant: l
	}, f = Jo(d);
	return /*#__PURE__*/ o(Yo, {
		as: a,
		ownerState: d,
		className: R(f.root, i),
		ref: t,
		...u,
		style: {
			...l === "elevation" && {
				"--Paper-shadow": (r.vars || r).shadows[s],
				...r.vars && { "--Paper-overlay": r.vars.overlays?.[s] },
				...!r.vars && r.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${di("#fff", Ra(s))}, ${di("#fff", Ra(s))})` }
			},
			...u.style
		}
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/isFocusVisible/isFocusVisible.mjs
function Zo(e) {
	try {
		return e.matches(":focus-visible");
	} catch {}
	return !1;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/utils/useFocusableWhenDisabled.mjs
function Qo(t) {
	let { focusableWhenDisabled: n, disabled: r, composite: i = !1, tabIndex: a = 0, isNativeButton: o } = t, s = i && n !== !1, c = i && n === !1;
	return e.useMemo(() => {
		let e = { onKeyDown(e) {
			r && n && e.key !== "Tab" && e.preventDefault();
		} };
		return i || (e.tabIndex = a, !o && r && (e.tabIndex = n ? a : -1)), (o && (n || s) || !o && r) && (e["aria-disabled"] = r), o && (!n || c) && (e.disabled = r), e;
	}, [
		i,
		r,
		n,
		s,
		c,
		o,
		a
	]);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ButtonBase/useButtonBase.mjs
var $o = {};
function es(t) {
	let { nativeButton: n, nativeButtonProp: r, internalNativeButton: i = n, allowInferredHostMismatch: a = !1, disabled: o, type: s, hasFormAction: c = !1, tabIndex: l = 0, focusableWhenDisabled: u, stopEventPropagation: d = !1, onBeforeKeyDown: f, onBeforeKeyUp: p } = t, m = e.useRef(null), h = u === !0, g = Qo({
		focusableWhenDisabled: h,
		disabled: o,
		isNativeButton: n,
		tabIndex: l
	}), _ = e.useCallback(() => {
		let e = m.current;
		return e == null ? n : e.tagName === "BUTTON" || !!(e.tagName === "A" && e.href);
	}, [n]), v = e.useMemo(() => {
		let e = h ? {} : { tabIndex: o ? -1 : l };
		return n ? (e.type = s === void 0 && !c ? "button" : s, h || (e.disabled = o)) : (e.role = "button", !h && o && (e["aria-disabled"] = o)), h ? {
			...e,
			...g
		} : e;
	}, [
		o,
		h,
		g,
		c,
		n,
		l,
		s
	]);
	return {
		getButtonProps: e.useCallback((e = $o) => {
			let { onClick: t, onKeyDown: n, onKeyUp: r, ...i } = e, a = (e) => {
				if (d && e.stopPropagation(), o) {
					e.preventDefault();
					return;
				}
				t?.(e);
			}, s = (e) => {
				if (h && g.onKeyDown(e), !o && (f?.(e), n?.(e), !(e.target !== e.currentTarget || _()))) {
					if (e.key === " ") {
						e.preventDefault();
						return;
					}
					e.key === "Enter" && (e.preventDefault(), e.currentTarget.click());
				}
			}, c = (e) => {
				o || (p?.(e), r?.(e), e.target === e.currentTarget && !_() && e.key === " " && !e.defaultPrevented && e.currentTarget.click());
			};
			return {
				...v,
				...i,
				onClick: a,
				onKeyDown: s,
				onKeyUp: c
			};
		}, [
			v,
			o,
			h,
			g,
			_,
			f,
			p,
			d
		]),
		rootRef: m
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/useLazyRipple/useLazyRipple.mjs
var ts = class t {
	static create() {
		return new t();
	}
	static use() {
		let n = Oo(t.create).current, [r, i] = e.useState(!1);
		return n.shouldMount = r, n.setShouldMount = i, e.useEffect(n.mountEffect, [r]), n;
	}
	constructor() {
		this.ref = { current: null }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
	}
	mount() {
		return this.mounted || (this.mounted = rs(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
	}
	mountEffect = () => {
		this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
	};
	start(...e) {
		this.mount().then(() => this.ref.current?.start(...e));
	}
	stop(...e) {
		this.mount().then(() => this.ref.current?.stop(...e));
	}
	pulsate(...e) {
		this.mount().then(() => this.ref.current?.pulsate(...e));
	}
};
function ns() {
	return ts.use();
}
function rs() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/useOnMount/useOnMount.mjs
var is = [];
function as(t) {
	e.useEffect(t, is);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+utils@9.4.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/useTimeout/useTimeout.mjs
var os = class e {
	static create() {
		return new e();
	}
	currentId = null;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = null, t();
		}, e);
	}
	clear = () => {
		this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
	};
	disposeEffect = () => this.clear;
};
function ss() {
	let e = Oo(os.create).current;
	return as(e.disposeEffect), e;
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ButtonBase/Ripple.mjs
function cs(t) {
	let { className: n, classes: r, pulsate: i = !1, rippleX: a, rippleY: s, rippleSize: c, in: l, onExited: u, timeout: d } = t, [f, p] = e.useState(!1), m = ss(), h = e.useRef(!1), g = e.useRef(u);
	g.current = u;
	let _ = u != null, v = R(n, r.ripple, r.rippleVisible, i && r.ripplePulsate), y = {
		width: c,
		height: c,
		top: -(c / 2) + s,
		left: -(c / 2) + a
	}, b = R(r.child, f && r.childLeaving, i && r.childPulsate);
	return !l && !f && p(!0), e.useEffect(() => {
		!l && _ ? h.current || (h.current = !0, m.start(d, () => {
			h.current = !1, g.current?.();
		})) : (h.current = !1, m.clear());
	}, [
		m,
		_,
		l,
		d
	]), /*#__PURE__*/ o("span", {
		className: v,
		style: y,
		children: /*#__PURE__*/ o("span", { className: b })
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ButtonBase/touchRippleClasses.mjs
var X = B("MuiTouchRipple", [
	"root",
	"ripple",
	"rippleVisible",
	"ripplePulsate",
	"child",
	"childLeaving",
	"childPulsate"
]), ls = 550, us = {}, ds = [], fs = () => {};
function ps(e, t) {
	let n = new Set(t), r = /* @__PURE__ */ new Map(), i = [];
	for (let t of e) n.has(t) ? i.length > 0 && (r.set(t, i), i = []) : i.push(t);
	let a = [];
	for (let e of t) {
		let t = r.get(e);
		t && a.push(...t), a.push(e);
	}
	return a.push(...i), a;
}
function ms({ event: e, element: t, center: n }) {
	let r = t ? t.getBoundingClientRect() : {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	}, i, a;
	if (n || e === void 0 || e.clientX === 0 && e.clientY === 0 || !e.clientX && !e.touches) i = Math.round(r.width / 2), a = Math.round(r.height / 2);
	else {
		let { clientX: t, clientY: n } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
		i = Math.round(t - r.left), a = Math.round(n - r.top);
	}
	let o;
	if (n) o = Math.sqrt((2 * r.width ** 2 + r.height ** 2) / 3), o % 2 == 0 && (o += 1);
	else {
		let e = Math.max(Math.abs((t ? t.clientWidth : 0) - i), i) * 2 + 2, n = Math.max(Math.abs((t ? t.clientHeight : 0) - a), a) * 2 + 2;
		o = Math.sqrt(e ** 2 + n ** 2);
	}
	return {
		rippleX: i,
		rippleY: a,
		rippleSize: o
	};
}
var hs = Nt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, gs = Nt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, _s = Nt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
function vs(e) {
	if (e.motion.reducedMotion === "always") return null;
	let t = Mt`
    &.${X.rippleVisible} {
      animation-name: ${hs};
      animation-duration: ${ls}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${X.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${X.childLeaving} {
      animation-name: ${gs};
      animation-duration: ${ls}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${X.childPulsate} {
      animation-name: ${_s};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
	return e.motion.reducedMotion === "system" ? Mt`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
var ys = K("span", {
	name: "MuiTouchRipple",
	slot: "Root"
})({
	overflow: "hidden",
	pointerEvents: "none",
	position: "absolute",
	zIndex: 0,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	borderRadius: "inherit"
}), bs = K(cs, {
	name: "MuiTouchRipple",
	slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${X.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${X.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${X.childLeaving} {
    opacity: 0;
  }

  & .${X.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({ theme: e }) => vs(e)}
`, xs = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiTouchRipple"
	}), i = Bo(oo().motion.reducedMotion, !1), { center: a = !1, classes: s = us, className: c, ...l } = r, [u, d] = e.useState({
		items: ds,
		order: ds
	}), f = u.items, p = e.useRef(0), m = e.useRef(null), h = e.useRef(!1);
	as(() => (h.current = !0, () => {
		h.current = !1;
	})), e.useEffect(() => {
		m.current &&= (m.current(), null);
	}, [f]);
	let g = e.useRef(!1), _ = ss(), v = e.useRef(null), y = e.useRef(null), b = To((e) => {
		h.current && d((t) => {
			let n = t.items.filter((t) => t.key !== e);
			return {
				items: n,
				order: ps(t.order.filter((t) => t !== e), n.filter((e) => !e.exiting).map((e) => e.key))
			};
		});
	}), x = To((e) => {
		let { pulsate: t, rippleX: n, rippleY: r, rippleSize: i, cb: a } = e, o = p.current;
		p.current += 1, d((e) => {
			let a = [...e.items, {
				key: o,
				pulsate: t,
				rippleX: n,
				rippleY: r,
				rippleSize: i,
				exiting: !1
			}];
			return {
				items: a,
				order: ps(e.order, a.filter((e) => !e.exiting).map((e) => e.key))
			};
		}), m.current = a;
	}), S = To((e = us, t = us, n = fs) => {
		let { pulsate: r = !1, center: i = a || t.pulsate, fakeElement: o = !1 } = t;
		if (e?.type === "mousedown" && g.current) {
			g.current = !1;
			return;
		}
		e?.type === "touchstart" && (g.current = !0);
		let { rippleX: s, rippleY: c, rippleSize: l } = ms({
			event: e,
			element: o ? null : y.current,
			center: i
		});
		e?.touches ? v.current === null && (v.current = () => {
			x({
				pulsate: r,
				rippleX: s,
				rippleY: c,
				rippleSize: l,
				cb: n
			});
		}, _.start(80, () => {
			v.current &&= (v.current(), null);
		})) : x({
			pulsate: r,
			rippleX: s,
			rippleY: c,
			rippleSize: l,
			cb: n
		});
	}), C = To(() => {
		S(us, { pulsate: !0 });
	}), w = To((e, t) => {
		if (_.clear(), e?.type === "touchend" && v.current) {
			v.current(), v.current = null, _.start(0, () => {
				w(e, t);
			});
			return;
		}
		v.current = null, d((e) => {
			let t = e.items.findIndex((e) => !e.exiting);
			if (t === -1) return e;
			let n = e.items.slice();
			return n[t] = {
				...n[t],
				exiting: !0
			}, {
				items: n,
				order: ps(e.order, n.filter((e) => !e.exiting).map((e) => e.key))
			};
		}), m.current = t;
	});
	e.useImperativeHandle(n, () => ({
		pulsate: C,
		start: S,
		stop: w
	}), [
		C,
		S,
		w
	]);
	let T = new Map(f.map((e) => [e.key, e])), ee = u.order.map((e) => T.get(e)).filter(Boolean);
	return /*#__PURE__*/ o(ys, {
		className: R(X.root, s.root, c),
		ref: y,
		...l,
		children: ee.map((e) => /*#__PURE__*/ o(bs, {
			classes: {
				ripple: R(s.ripple, X.ripple),
				rippleVisible: R(s.rippleVisible, X.rippleVisible),
				ripplePulsate: R(s.ripplePulsate, X.ripplePulsate),
				child: R(s.child, X.child),
				childLeaving: R(s.childLeaving, X.childLeaving),
				childPulsate: R(s.childPulsate, X.childPulsate)
			},
			timeout: i.shouldReduceMotion ? 0 : ls,
			pulsate: e.pulsate,
			rippleX: e.rippleX,
			rippleY: e.rippleY,
			rippleSize: e.rippleSize,
			in: !e.exiting,
			onExited: () => b(e.key)
		}, e.key))
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ButtonBase/buttonBaseClasses.mjs
function Ss(e) {
	return z("MuiButtonBase", e);
}
var Cs = B("MuiButtonBase", [
	"root",
	"disabled",
	"focusVisible"
]), ws = (e) => {
	let { disabled: t, focusVisible: n, focusVisibleClassName: r, suppressFocusVisible: i, classes: a } = e, o = U({ root: [
		"root",
		t && "disabled",
		n && !i && "focusVisible"
	] }, Ss, a);
	return n && !i && r && (o.root += ` ${r}`), o;
}, Ts = K("button", {
	name: "MuiButtonBase",
	slot: "Root"
})(q(({ theme: e }) => ({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	boxSizing: "border-box",
	WebkitTapHighlightColor: "transparent",
	backgroundColor: "transparent",
	outline: 0,
	border: 0,
	margin: 0,
	borderRadius: 0,
	padding: 0,
	cursor: "pointer",
	userSelect: "none",
	verticalAlign: "middle",
	MozAppearance: "none",
	WebkitAppearance: "none",
	textDecoration: "none",
	color: "inherit",
	"&::-moz-focus-inner": { borderStyle: "none" },
	[`&.${Cs.disabled}`]: {
		pointerEvents: "none",
		cursor: "default"
	},
	"@media print": { colorAdjust: "exact" },
	variants: [{
		props: { internalDisabledThemeFocusVisible: !1 },
		style: e.focusVisible && {
			...oa,
			[`&.${Cs.focusVisible}`]: e.focusVisible
		}
	}]
}))), Es = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiButtonBase"
	}), { action: i, centerRipple: a = !1, children: c, className: l, component: u = "button", disabled: d = !1, disableRipple: f = !1, disableTouchRipple: p = !1, focusRipple: m = !1, focusVisibleClassName: h, focusableWhenDisabled: g, suppressFocusVisible: _ = !1, internalNativeButton: v, internalDisabledThemeFocusVisible: y = !1, LinkComponent: b = "a", nativeButton: x, onBlur: S, onClick: C, onContextMenu: w, onDragLeave: T, onFocus: ee, onFocusVisible: te, onKeyDown: ne, onKeyUp: re, onMouseDown: E, onMouseLeave: ie, onMouseUp: ae, onTouchEnd: oe, onTouchMove: se, onTouchStart: ce, tabIndex: le = 0, TouchRippleProps: ue, touchRippleRef: D, type: de, ...O } = r, fe = !!(O.href || O.to), pe = !!O.formAction, me = u;
	me === "button" && fe && (me = b);
	let he = typeof me == "string" ? me === "button" : v ?? !1, ge = x ?? he, k = ns(), _e = lo(k.ref, D), [ve, A] = e.useState(!1);
	(d || _) && ve && A(!1);
	let j = To((e) => {
		m && !e.repeat && ve && e.key === " " && k.stop(e, () => {
			k.start(e);
		});
	}), ye = To((e) => {
		m && e.key === " " && ve && !e.defaultPrevented && k.stop(e, () => {
			k.pulsate(e);
		});
	}), { getButtonProps: be, rootRef: xe } = es({
		nativeButton: ge,
		nativeButtonProp: x,
		internalNativeButton: he,
		allowInferredHostMismatch: fe || typeof me == "string",
		disabled: d,
		type: de,
		hasFormAction: pe,
		tabIndex: le,
		onBeforeKeyDown: j,
		onBeforeKeyUp: ye
	}), { onClick: Se, onKeyDown: Ce, onKeyUp: M, ...we } = be({
		onClick: C,
		onKeyDown: ne,
		onKeyUp: re
	});
	e.useImperativeHandle(i, () => ({ focusVisible: () => {
		A(!0), xe.current.focus();
	} }), [xe]);
	let Te = k.shouldMount && !f && !d;
	e.useEffect(() => {
		ve && m && !f && k.pulsate();
	}, [
		f,
		m,
		ve,
		k
	]);
	let Ee = Ds(k, "start", E, p), De = Ds(k, "stop", w, p), Oe = Ds(k, "stop", T, p), ke = Ds(k, "stop", ae, p), Ae = Ds(k, "stop", (e) => {
		ve && e.preventDefault(), ie && ie(e);
	}, p), je = Ds(k, "start", ce, p), Me = Ds(k, "stop", oe, p), Ne = Ds(k, "stop", se, p), Pe = Ds(k, "stop", (e) => {
		Zo(e.target) || A(!1), S && S(e);
	}, !1), Fe = To((e) => {
		xe.current ||= e.currentTarget, !_ && Zo(e.target) && (A(!0), te && te(e)), ee && ee(e);
	}), Ie = {};
	fe && (Ie.tabIndex = d ? -1 : le, d && (Ie["aria-disabled"] = d), Ie.type = de);
	let Le = lo(n, xe), Re = {
		...r,
		centerRipple: a,
		component: u,
		disabled: d,
		disableRipple: f,
		disableTouchRipple: p,
		focusRipple: m,
		suppressFocusVisible: _,
		tabIndex: le,
		focusVisible: ve,
		internalDisabledThemeFocusVisible: y
	}, ze = ws(Re);
	return /*#__PURE__*/ s(Ts, {
		as: me,
		className: R(ze.root, l),
		ownerState: Re,
		onBlur: Pe,
		onClick: Se,
		onContextMenu: De,
		onFocus: Fe,
		onKeyDown: Ce,
		onKeyUp: M,
		onMouseDown: Ee,
		onMouseLeave: Ae,
		onMouseUp: ke,
		onDragLeave: Oe,
		onTouchEnd: Me,
		onTouchMove: Ne,
		onTouchStart: je,
		ref: Le,
		...fe ? Ie : we,
		...O,
		children: [c, Te ? /*#__PURE__*/ o(xs, {
			ref: _e,
			center: a,
			...ue
		}) : null]
	});
});
function Ds(e, t, n, r = !1) {
	return To((i) => (n && n(i), r || e[t](i), !0));
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs
function Os(e) {
	return typeof e.main == "string";
}
function ks(e, t = []) {
	if (!Os(e)) return !1;
	for (let n of t) if (!e.hasOwnProperty(n) || typeof e[n] != "string") return !1;
	return !0;
}
function As(e = []) {
	return ([, t]) => t && ks(t, e);
}
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Alert/alertClasses.mjs
function js(e) {
	return z("MuiAlert", e);
}
var Ms = B("MuiAlert", [
	"root",
	"action",
	"icon",
	"message",
	"filled",
	"colorSuccess",
	"colorInfo",
	"colorWarning",
	"colorError",
	"outlined",
	"standard"
]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/CircularProgress/circularProgressClasses.mjs
function Ns(e) {
	return z("MuiCircularProgress", e);
}
B("MuiCircularProgress", [
	"root",
	"determinate",
	"indeterminate",
	"colorPrimary",
	"colorSecondary",
	"svg",
	"track",
	"circle",
	"circleDisableShrink"
]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/CircularProgress/CircularProgress.mjs
var Ps = 44, Fs = Nt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Is = Nt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Ls = typeof Fs == "string" ? null : Mt`
        animation: ${Fs} 1.4s linear infinite;
      `, Rs = typeof Is == "string" ? null : Mt`
        animation: ${Is} 1.4s ease-in-out infinite;
      `, zs = (e) => {
	let { classes: t, variant: n, color: r, disableShrink: i } = e;
	return U({
		root: [
			"root",
			n,
			`color${Y(r)}`
		],
		svg: ["svg"],
		track: ["track"],
		circle: ["circle", i && "circleDisableShrink"]
	}, Ns, t);
}, Bs = K("span", {
	name: "MuiCircularProgress",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`color${Y(n.color)}`]
		];
	}
})(q(({ theme: e }) => {
	let t = go(e, { animation: "none" });
	return {
		display: "inline-block",
		variants: [
			{
				props: { variant: "determinate" },
				style: { ..._o(e, "transform") }
			},
			{
				props: { variant: "indeterminate" },
				style: Ls || { animation: `${Fs} 1.4s linear infinite` }
			},
			...t ? [{
				props: { variant: "indeterminate" },
				style: t
			}] : [],
			...Object.entries(e.palette).filter(As()).map(([t]) => ({
				props: { color: t },
				style: { color: (e.vars || e).palette[t].main }
			}))
		]
	};
})), Vs = K("svg", {
	name: "MuiCircularProgress",
	slot: "Svg"
})({ display: "block" }), Hs = K("circle", {
	name: "MuiCircularProgress",
	slot: "Circle",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.circle, n.disableShrink && t.circleDisableShrink];
	}
})(q(({ theme: e }) => {
	let t = go(e, { animation: "none" });
	return {
		stroke: "currentColor",
		variants: [
			{
				props: { variant: "determinate" },
				style: { ..._o(e, "stroke-dashoffset") }
			},
			{
				props: { variant: "indeterminate" },
				style: {
					strokeDasharray: "80px, 200px",
					strokeDashoffset: 0
				}
			},
			{
				props: ({ ownerState: e }) => e.variant === "indeterminate" && !e.disableShrink,
				style: Rs || { animation: `${Is} 1.4s ease-in-out infinite` }
			},
			...t ? [{
				props: ({ ownerState: e }) => e.variant === "indeterminate" && !e.disableShrink,
				style: t
			}] : []
		]
	};
})), Us = K("circle", {
	name: "MuiCircularProgress",
	slot: "Track"
})(q(({ theme: e }) => ({
	stroke: "currentColor",
	opacity: (e.vars || e).palette.action.activatedOpacity
}))), Ws = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiCircularProgress"
	}), { className: r, color: i = "primary", disableShrink: a = !1, enableTrackSlot: c = !1, min: l, max: u, size: d = 40, style: f, thickness: p = 3.6, value: m = n.min ?? 0, variant: h = "indeterminate", ...g } = n, _ = l ?? 0, v = u ?? 100, y = {
		...n,
		color: i,
		disableShrink: a,
		size: d,
		thickness: p,
		value: m,
		variant: h,
		enableTrackSlot: c
	}, b = zs(y), x = {}, S = {}, C = {};
	if (h === "determinate") {
		let e = 2 * Math.PI * ((Ps - p) / 2), t = v - _;
		x.strokeDasharray = e.toFixed(3), x.strokeDashoffset = t > 0 ? `${((v - m) / t * e).toFixed(3)}px` : `${e.toFixed(3)}px`, S.transform = "rotate(-90deg)", C["aria-valuenow"] = m, C["aria-valuemin"] = _, C["aria-valuemax"] = v;
	}
	return /*#__PURE__*/ o(Bs, {
		className: R(b.root, r),
		style: {
			width: d,
			height: d,
			...S,
			...f
		},
		ownerState: y,
		ref: t,
		role: "progressbar",
		...C,
		...g,
		children: /*#__PURE__*/ s(Vs, {
			className: b.svg,
			ownerState: y,
			viewBox: `${Ps / 2} ${Ps / 2} ${Ps} ${Ps}`,
			children: [c ? /*#__PURE__*/ o(Us, {
				className: b.track,
				ownerState: y,
				cx: Ps,
				cy: Ps,
				r: (Ps - p) / 2,
				fill: "none",
				strokeWidth: p,
				"aria-hidden": "true"
			}) : null, /*#__PURE__*/ o(Hs, {
				className: b.circle,
				style: x,
				ownerState: y,
				cx: Ps,
				cy: Ps,
				r: (Ps - p) / 2,
				fill: "none",
				strokeWidth: p
			})]
		})
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/IconButton/iconButtonClasses.mjs
function Gs(e) {
	return z("MuiIconButton", e);
}
var Ks = B("MuiIconButton", [
	"root",
	"disabled",
	"colorInherit",
	"colorPrimary",
	"colorSecondary",
	"colorError",
	"colorInfo",
	"colorSuccess",
	"colorWarning",
	"edgeStart",
	"edgeEnd",
	"sizeSmall",
	"sizeMedium",
	"sizeLarge",
	"loading",
	"loadingIndicator",
	"loadingWrapper"
]), qs = (e) => {
	let { classes: t, disabled: n, color: r, edge: i, size: a, loading: o } = e;
	return U({
		root: [
			"root",
			o && "loading",
			n && "disabled",
			r !== "default" && `color${Y(r)}`,
			i && `edge${Y(i)}`,
			`size${Y(a)}`
		],
		loadingIndicator: ["loadingIndicator"],
		loadingWrapper: ["loadingWrapper"]
	}, Gs, t);
}, Js = K(Es, {
	name: "MuiIconButton",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.loading && t.loading,
			n.color !== "default" && t[`color${Y(n.color)}`],
			n.edge && t[`edge${Y(n.edge)}`],
			t[`size${Y(n.size)}`]
		];
	}
})(q(({ theme: e }) => ({
	textAlign: "center",
	flex: "0 0 auto",
	fontSize: e.typography.pxToRem(24),
	padding: 8,
	borderRadius: "50%",
	color: (e.vars || e).palette.action.active,
	..._o(e, "background-color", { duration: e.transitions.duration.shortest }),
	variants: [
		{
			props: (e) => !e.disableRipple,
			style: {
				"--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
				"&:hover": {
					backgroundColor: "var(--IconButton-hoverBg)",
					"@media (hover: none)": { backgroundColor: "transparent" }
				}
			}
		},
		{
			props: { edge: "start" },
			style: { marginLeft: -12 }
		},
		{
			props: {
				edge: "start",
				size: "small"
			},
			style: { marginLeft: -3 }
		},
		{
			props: { edge: "end" },
			style: { marginRight: -12 }
		},
		{
			props: {
				edge: "end",
				size: "small"
			},
			style: { marginRight: -3 }
		}
	]
})), q(({ theme: e }) => ({
	variants: [
		{
			props: { color: "inherit" },
			style: { color: "inherit" }
		},
		...Object.entries(e.palette).filter(As()).map(([t]) => ({
			props: { color: t },
			style: {
				color: (e.vars || e).palette[t].main,
				"--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
			}
		})),
		{
			props: { size: "small" },
			style: {
				padding: 5,
				fontSize: e.typography.pxToRem(18)
			}
		},
		{
			props: { size: "large" },
			style: {
				padding: 12,
				fontSize: e.typography.pxToRem(28)
			}
		}
	],
	[`&.${Ks.disabled}`]: {
		backgroundColor: "transparent",
		color: (e.vars || e).palette.action.disabled
	},
	[`&.${Ks.loading}`]: { color: "transparent" }
}))), Ys = K("span", {
	name: "MuiIconButton",
	slot: "LoadingIndicator"
})(({ theme: e }) => ({
	display: "none",
	position: "absolute",
	visibility: "visible",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	color: (e.vars || e).palette.action.disabled,
	variants: [{
		props: { loading: !0 },
		style: { display: "flex" }
	}]
})), Xs = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiIconButton"
	}), { edge: r = !1, children: i, className: a, color: c = "default", disabled: l = !1, disableFocusRipple: u = !1, size: d = "medium", id: f, loading: p = null, loadingIndicator: m, ...h } = n, g = wo(f), _ = m ?? /*#__PURE__*/ o(Ws, {
		"aria-labelledby": g,
		color: "inherit",
		size: 16
	}), v = {
		...n,
		edge: r,
		color: c,
		disabled: l,
		disableFocusRipple: u,
		loading: p,
		loadingIndicator: _,
		size: d
	}, y = qs(v);
	return /*#__PURE__*/ s(Js, {
		id: p ? g : f,
		className: R(y.root, a),
		centerRipple: !0,
		internalNativeButton: !0,
		focusRipple: !u,
		disabled: l || p,
		ref: t,
		...h,
		ownerState: v,
		children: [typeof p == "boolean" && /*#__PURE__*/ o("span", {
			className: y.loadingWrapper,
			style: { display: "contents" },
			children: /*#__PURE__*/ o(Ys, {
				className: y.loadingIndicator,
				ownerState: v,
				children: p && _
			})
		}), i]
	});
}), Zs = Co(/*#__PURE__*/ o("path", { d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" }), "SuccessOutlined"), Qs = Co(/*#__PURE__*/ o("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), "ReportProblemOutlined"), $s = Co(/*#__PURE__*/ o("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "ErrorOutline"), ec = Co(/*#__PURE__*/ o("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" }), "InfoOutlined"), tc = Co(/*#__PURE__*/ o("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close"), nc = (e) => {
	let { variant: t, color: n, severity: r, classes: i } = e;
	return U({
		root: [
			"root",
			`color${Y(n || r)}`,
			`${t}`
		],
		icon: ["icon"],
		message: ["message"],
		action: ["action"]
	}, js, i);
}, rc = K(Xo, {
	name: "MuiAlert",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.root, t[n.variant]];
	}
})(q(({ theme: e }) => {
	let t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
	return {
		...e.typography.body2,
		backgroundColor: "transparent",
		display: "flex",
		padding: "6px 16px",
		variants: [
			...Object.entries(e.palette).filter(As(["light"])).map(([r]) => ({
				props: {
					colorSeverity: r,
					variant: "standard"
				},
				style: {
					color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, .6),
					backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, .9),
					[`& .${Ms.icon}`]: e.vars ? { color: e.vars.palette.Alert[`${r}IconColor`] } : { color: e.palette[r].main }
				}
			})),
			...Object.entries(e.palette).filter(As(["light"])).map(([n]) => ({
				props: {
					colorSeverity: n,
					variant: "outlined"
				},
				style: {
					color: e.vars ? e.vars.palette.Alert[`${n}Color`] : t(e.palette[n].light, .6),
					border: `1px solid ${(e.vars || e).palette[n].light}`,
					[`& .${Ms.icon}`]: e.vars ? { color: e.vars.palette.Alert[`${n}IconColor`] } : { color: e.palette[n].main }
				}
			})),
			...Object.entries(e.palette).filter(As(["dark"])).map(([t]) => ({
				props: {
					colorSeverity: t,
					variant: "filled"
				},
				style: {
					...e.focusVisible && sa(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
					fontWeight: e.typography.fontWeightMedium,
					...e.vars ? {
						color: e.vars.palette.Alert[`${t}FilledColor`],
						backgroundColor: e.vars.palette.Alert[`${t}FilledBg`]
					} : {
						backgroundColor: e.palette.mode === "dark" ? e.palette[t].dark : e.palette[t].main,
						color: e.palette.getContrastText(e.palette[t].main)
					}
				}
			}))
		]
	};
})), ic = K("div", {
	name: "MuiAlert",
	slot: "Icon"
})({
	marginRight: 12,
	padding: "7px 0",
	display: "flex",
	fontSize: 22,
	opacity: .9
}), ac = K("div", {
	name: "MuiAlert",
	slot: "Message"
})({
	padding: "8px 0",
	minWidth: 0,
	overflow: "auto"
}), oc = K("div", {
	name: "MuiAlert",
	slot: "Action"
})({
	display: "flex",
	alignItems: "flex-start",
	padding: "4px 0 0 16px",
	marginLeft: "auto",
	marginRight: -8
}), sc = {
	success: /*#__PURE__*/ o(Zs, { fontSize: "inherit" }),
	warning: /*#__PURE__*/ o(Qs, { fontSize: "inherit" }),
	error: /*#__PURE__*/ o($s, { fontSize: "inherit" }),
	info: /*#__PURE__*/ o(ec, { fontSize: "inherit" })
}, cc = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiAlert"
	}), { action: r, children: i, className: a, closeText: c = "Close", color: l, icon: u, iconMapping: d = sc, onClose: f, role: p = "alert", severity: m = "success", slotProps: h = {}, slots: g = {}, variant: _ = "standard", ...v } = n, y = {
		...n,
		color: l,
		severity: m,
		variant: _,
		colorSeverity: l || m
	}, b = nc(y), x = {
		slots: g,
		slotProps: h
	}, [S, C] = Ko("root", {
		ref: t,
		shouldForwardComponentProp: !0,
		className: R(b.root, a),
		elementType: rc,
		externalForwardedProps: {
			...x,
			...v
		},
		ownerState: y,
		additionalProps: {
			role: p,
			elevation: 0
		}
	}), [w, T] = Ko("icon", {
		className: b.icon,
		elementType: ic,
		externalForwardedProps: x,
		ownerState: y
	}), [ee, te] = Ko("message", {
		className: b.message,
		elementType: ac,
		externalForwardedProps: x,
		ownerState: y
	}), [ne, re] = Ko("action", {
		className: b.action,
		elementType: oc,
		externalForwardedProps: x,
		ownerState: y
	}), [E, ie] = Ko("closeButton", {
		elementType: Xs,
		externalForwardedProps: x,
		ownerState: y
	}), [ae, oe] = Ko("closeIcon", {
		elementType: tc,
		externalForwardedProps: x,
		ownerState: y
	});
	return /*#__PURE__*/ s(S, {
		...C,
		children: [
			u === !1 ? null : /*#__PURE__*/ o(w, {
				...T,
				children: u || d[m] || sc[m]
			}),
			/*#__PURE__*/ o(ee, {
				...te,
				children: i
			}),
			r == null ? null : /*#__PURE__*/ o(ne, {
				...re,
				children: r
			}),
			r == null && f ? /*#__PURE__*/ o(ne, {
				...re,
				children: /*#__PURE__*/ o(E, {
					size: "small",
					"aria-label": c,
					title: c,
					color: "inherit",
					onClick: f,
					...ie,
					children: /*#__PURE__*/ o(ae, {
						fontSize: "small",
						...oe
					})
				})
			}) : null
		]
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Typography/typographyClasses.mjs
function lc(e) {
	return z("MuiTypography", e);
}
var uc = B("MuiTypography", [
	"root",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"subtitle1",
	"subtitle2",
	"body1",
	"body2",
	"inherit",
	"button",
	"caption",
	"overline",
	"alignLeft",
	"alignRight",
	"alignCenter",
	"alignJustify",
	"noWrap",
	"gutterBottom"
]), dc = (e) => {
	let { align: t, gutterBottom: n, noWrap: r, variant: i, classes: a } = e;
	return U({ root: [
		"root",
		i,
		e.align !== "inherit" && `align${Y(t)}`,
		n && "gutterBottom",
		r && "noWrap"
	] }, lc, a);
}, fc = K("span", {
	name: "MuiTypography",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.variant && t[n.variant],
			n.align !== "inherit" && t[`align${Y(n.align)}`],
			n.noWrap && t.noWrap,
			n.gutterBottom && t.gutterBottom
		];
	}
})(q(({ theme: e }) => ({
	margin: 0,
	variants: [
		{
			props: { variant: "inherit" },
			style: {
				font: "inherit",
				lineHeight: "inherit",
				letterSpacing: "inherit"
			}
		},
		...Object.entries(e.typography).filter(([e, t]) => e !== "inherit" && t && typeof t == "object").map(([e, t]) => ({
			props: { variant: e },
			style: t
		})),
		...Object.entries(e.palette).filter(As()).map(([t]) => ({
			props: { color: t },
			style: { color: (e.vars || e).palette[t].main }
		})),
		...Object.entries(e.palette?.text || {}).filter(([, e]) => typeof e == "string").map(([t]) => ({
			props: { color: `text${Y(t)}` },
			style: { color: (e.vars || e).palette.text[t] }
		})),
		{
			props: ({ ownerState: e }) => e.align !== "inherit",
			style: { textAlign: "var(--Typography-textAlign)" }
		},
		{
			props: ({ ownerState: e }) => e.noWrap,
			style: {
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap"
			}
		},
		{
			props: ({ ownerState: e }) => e.gutterBottom,
			style: { marginBottom: "0.35em" }
		}
	]
}))), pc = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subtitle1: "h6",
	subtitle2: "h6",
	body1: "p",
	body2: "p",
	inherit: "p"
}, Z = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiTypography"
	}), { color: r, align: i = "inherit", className: a, component: s, gutterBottom: c = !1, noWrap: l = !1, variant: u = "body1", variantMapping: d = pc, ...f } = n, p = {
		...n,
		align: i,
		color: r,
		className: a,
		component: s,
		gutterBottom: c,
		noWrap: l,
		variant: u,
		variantMapping: d
	}, m = s || d[u] || pc[u] || "span", h = dc(p);
	return /*#__PURE__*/ o(fc, {
		as: m,
		ref: t,
		className: R(h.root, a),
		...f,
		ownerState: p,
		style: {
			...i !== "inherit" && { "--Typography-textAlign": i },
			...f.style
		}
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/AlertTitle/alertTitleClasses.mjs
function mc(e) {
	return z("MuiAlertTitle", e);
}
B("MuiAlertTitle", ["root"]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/AlertTitle/AlertTitle.mjs
var hc = (e) => {
	let { classes: t } = e;
	return U({ root: ["root"] }, mc, t);
}, gc = K(Z, {
	name: "MuiAlertTitle",
	slot: "Root"
})(q(({ theme: e }) => ({
	fontWeight: e.typography.fontWeightMedium,
	marginTop: -2
}))), _c = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiAlertTitle"
	}), { className: r, ...i } = n, a = n, s = hc(a);
	return /*#__PURE__*/ o(gc, {
		gutterBottom: !0,
		component: "div",
		ownerState: a,
		ref: t,
		className: R(s.root, r),
		...i
	});
}), vc = Co(/*#__PURE__*/ o("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }), "Cancel");
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Chip/chipClasses.mjs
function yc(e) {
	return z("MuiChip", e);
}
var Q = B("MuiChip", [
	"root",
	"sizeSmall",
	"sizeMedium",
	"colorDefault",
	"colorError",
	"colorInfo",
	"colorPrimary",
	"colorSecondary",
	"colorSuccess",
	"colorWarning",
	"disabled",
	"clickable",
	"deletable",
	"outlined",
	"filled",
	"avatar",
	"icon",
	"label",
	"deleteIcon",
	"focusVisible"
]), bc = (e) => {
	let { classes: t, disabled: n, size: r, color: i, onDelete: a, clickable: o, variant: s } = e;
	return U({
		root: [
			"root",
			s,
			n && "disabled",
			`size${Y(r)}`,
			`color${Y(i)}`,
			o && "clickable",
			a && "deletable"
		],
		label: ["label"],
		avatar: ["avatar"],
		icon: ["icon"],
		deleteIcon: ["deleteIcon"]
	}, yc, t);
}, xc = K("div", {
	name: "MuiChip",
	slot: "Root",
	shouldForwardProp: (e) => co(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e, { color: r, clickable: i, onDelete: a, size: o, variant: s } = n;
		return [
			{ [`& .${Q.avatar}`]: t.avatar },
			{ [`& .${Q.icon}`]: t.icon },
			{ [`& .${Q.deleteIcon}`]: t.deleteIcon },
			t.root,
			t[`size${Y(o)}`],
			t[`color${Y(r)}`],
			i && t.clickable,
			a && t.deletable,
			t[s]
		];
	}
})(q(({ theme: e }) => {
	let t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
	return {
		maxWidth: "100%",
		fontFamily: e.typography.fontFamily,
		fontSize: e.typography.pxToRem(13),
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		height: 32,
		lineHeight: 1.5,
		color: (e.vars || e).palette.text.primary,
		backgroundColor: (e.vars || e).palette.action.selected,
		borderRadius: 16,
		whiteSpace: "nowrap",
		..._o(e, ["background-color", "box-shadow"]),
		cursor: "unset",
		outline: 0,
		textDecoration: "none",
		border: 0,
		padding: 0,
		verticalAlign: "middle",
		boxSizing: "border-box",
		[`&.${Q.disabled}`]: {
			opacity: (e.vars || e).palette.action.disabledOpacity,
			pointerEvents: "none"
		},
		[`& .${Q.avatar}`]: {
			marginLeft: 5,
			marginRight: -6,
			width: 24,
			height: 24,
			color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
			fontSize: e.typography.pxToRem(12)
		},
		[`& .${Q.icon}`]: {
			marginLeft: 5,
			marginRight: -6
		},
		[`& .${Q.deleteIcon}`]: {
			WebkitTapHighlightColor: "transparent",
			color: e.alpha((e.vars || e).palette.text.primary, .26),
			fontSize: 22,
			cursor: "pointer",
			margin: "0 5px 0 -6px",
			"&:hover": { color: e.alpha((e.vars || e).palette.text.primary, .4) }
		},
		variants: [
			{
				props: { color: "primary" },
				style: { [`& .${Q.avatar}`]: {
					color: (e.vars || e).palette.primary.contrastText,
					backgroundColor: (e.vars || e).palette.primary.dark
				} }
			},
			{
				props: { color: "secondary" },
				style: { [`& .${Q.avatar}`]: {
					color: (e.vars || e).palette.secondary.contrastText,
					backgroundColor: (e.vars || e).palette.secondary.dark
				} }
			},
			{
				props: { size: "small" },
				style: {
					height: 24,
					[`& .${Q.avatar}`]: {
						marginLeft: 4,
						marginRight: -4,
						width: 18,
						height: 18,
						fontSize: e.typography.pxToRem(10)
					},
					[`& .${Q.icon}`]: {
						fontSize: 18,
						marginLeft: 4,
						marginRight: -4
					},
					[`& .${Q.deleteIcon}`]: {
						fontSize: 16,
						marginRight: 4,
						marginLeft: -4
					}
				}
			},
			...Object.entries(e.palette).filter(As(["contrastText"])).map(([t]) => ({
				props: { color: t },
				style: {
					backgroundColor: (e.vars || e).palette[t].main,
					color: (e.vars || e).palette[t].contrastText,
					[`& .${Q.deleteIcon}`]: {
						color: e.alpha((e.vars || e).palette[t].contrastText, .7),
						"&:hover, &:active": { color: (e.vars || e).palette[t].contrastText }
					}
				}
			})),
			{
				props: (e) => e.iconColor === e.color,
				style: { [`& .${Q.icon}`]: { color: e.vars ? e.vars.palette.Chip.defaultIconColor : t } }
			},
			{
				props: (e) => e.iconColor === e.color && e.color !== "default",
				style: { [`& .${Q.icon}`]: { color: "inherit" } }
			},
			{
				props: { onDelete: !0 },
				style: !e.focusVisible && { [`&.${Q.focusVisible}`]: { backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`) } }
			},
			...Object.entries(e.palette).filter(As(["dark"])).map(([t]) => ({
				props: {
					color: t,
					onDelete: !0
				},
				style: !e.focusVisible && { [`&.${Q.focusVisible}`]: { background: (e.vars || e).palette[t].dark } }
			})),
			{
				props: { clickable: !0 },
				style: {
					userSelect: "none",
					WebkitTapHighlightColor: "transparent",
					cursor: "pointer",
					"&:hover": { backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`) },
					...!e.focusVisible && { [`&.${Q.focusVisible}`]: { backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`) } },
					"&:active": { boxShadow: (e.vars || e).shadows[1] }
				}
			},
			...Object.entries(e.palette).filter(As(["dark"])).map(([t]) => ({
				props: {
					color: t,
					clickable: !0
				},
				style: {
					"&:hover": { backgroundColor: (e.vars || e).palette[t].dark },
					...!e.focusVisible && { [`&.${Q.focusVisible}`]: { backgroundColor: (e.vars || e).palette[t].dark } }
				}
			})),
			{
				props: { variant: "outlined" },
				style: {
					backgroundColor: "transparent",
					border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
					[`&.${Q.clickable}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover },
					...!e.focusVisible && { [`&.${Q.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus } },
					[`& .${Q.avatar}`]: { marginLeft: 4 },
					[`& .${Q.icon}`]: { marginLeft: 4 },
					[`& .${Q.deleteIcon}`]: { marginRight: 5 }
				}
			},
			{
				props: {
					size: "small",
					variant: "outlined"
				},
				style: {
					[`& .${Q.avatar}`]: { marginLeft: 2 },
					[`& .${Q.icon}`]: { marginLeft: 2 },
					[`& .${Q.deleteIcon}`]: { marginRight: 3 }
				}
			},
			...Object.entries(e.palette).filter(As()).map(([t]) => ({
				props: {
					variant: "outlined",
					color: t
				},
				style: {
					color: (e.vars || e).palette[t].main,
					border: `1px solid ${e.alpha((e.vars || e).palette[t].main, .7)}`,
					[`&.${Q.clickable}:hover`]: { backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity) },
					...!e.focusVisible && { [`&.${Q.focusVisible}`]: { backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.focusOpacity) } },
					[`& .${Q.deleteIcon}`]: {
						color: e.alpha((e.vars || e).palette[t].main, .7),
						"&:hover, &:active": { color: (e.vars || e).palette[t].main }
					}
				}
			}))
		]
	};
})), Sc = K("span", {
	name: "MuiChip",
	slot: "Label"
})({
	overflow: "hidden",
	textOverflow: "ellipsis",
	paddingLeft: 12,
	paddingRight: 12,
	whiteSpace: "nowrap",
	variants: [
		{
			props: { variant: "outlined" },
			style: {
				paddingLeft: 11,
				paddingRight: 11
			}
		},
		{
			props: { size: "small" },
			style: {
				paddingLeft: 8,
				paddingRight: 8
			}
		},
		{
			props: {
				size: "small",
				variant: "outlined"
			},
			style: {
				paddingLeft: 7,
				paddingRight: 7
			}
		}
	]
});
function Cc(e) {
	return e.key === "Backspace" || e.key === "Delete";
}
var wc = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiChip"
	}), { avatar: i, className: a, clickable: c, color: l = "default", component: u, deleteIcon: d, disabled: f = !1, icon: p, label: m, onClick: h, onDelete: g, onKeyDown: _, onKeyUp: v, size: y = "medium", variant: b = "filled", tabIndex: x, skipFocusWhenDisabled: S = !1, slots: C = {}, slotProps: w = {}, ...T } = r, { nativeButton: ee, ...te } = T, ne = lo(e.useRef(null), n), re = (e) => {
		e.stopPropagation(), g(e);
	}, E = (e) => {
		e.currentTarget === e.target && Cc(e) && e.preventDefault(), _ && _(e);
	}, ie = (e) => {
		e.currentTarget === e.target && g && Cc(e) && g(e), v && v(e);
	}, ae = c !== !1 && h ? !0 : c, oe = ae || g ? Es : u || "div", se = {
		...r,
		component: oe,
		disabled: f,
		size: y,
		color: l,
		iconColor: /*#__PURE__*/ e.isValidElement(p) && p.props.color || l,
		onDelete: !!g,
		clickable: ae,
		variant: b
	}, ce = bc(se), le = oe === Es ? {
		component: u || "div",
		internalNativeButton: !1,
		focusVisibleClassName: ce.focusVisible,
		...g && { disableRipple: !0 },
		...ee !== void 0 && { nativeButton: ee }
	} : {}, ue = null;
	g && (ue = d && /*#__PURE__*/ e.isValidElement(d) ? /*#__PURE__*/ e.cloneElement(d, {
		className: R(d.props.className, ce.deleteIcon),
		onClick: re
	}) : /*#__PURE__*/ o(vc, {
		className: ce.deleteIcon,
		onClick: re
	}));
	let D = null;
	i && /*#__PURE__*/ e.isValidElement(i) && (D = /*#__PURE__*/ e.cloneElement(i, { className: R(ce.avatar, i.props.className) }));
	let de = null;
	p && /*#__PURE__*/ e.isValidElement(p) && (de = /*#__PURE__*/ e.cloneElement(p, { className: R(ce.icon, p.props.className) }));
	let O = {
		slots: C,
		slotProps: w
	}, [fe, pe] = Ko("root", {
		elementType: xc,
		externalForwardedProps: {
			...O,
			...te
		},
		ownerState: se,
		shouldForwardComponentProp: !0,
		ref: ne,
		className: R(ce.root, a),
		additionalProps: {
			disabled: ae && f ? !0 : void 0,
			tabIndex: S && f ? -1 : x,
			...le
		},
		getSlotProps: (e) => ({
			...e,
			onClick: (t) => {
				e.onClick?.(t), h?.(t);
			},
			onKeyDown: (t) => {
				e.onKeyDown?.(t), E(t);
			},
			onKeyUp: (t) => {
				e.onKeyUp?.(t), ie(t);
			}
		})
	}), [me, he] = Ko("label", {
		elementType: Sc,
		externalForwardedProps: O,
		ownerState: se,
		className: ce.label
	});
	return /*#__PURE__*/ s(fe, {
		as: oe,
		...pe,
		children: [
			D || de,
			/*#__PURE__*/ o(me, {
				...he,
				children: m
			}),
			ue
		]
	});
}), Tc = B("MuiBox", ["root"]), $ = Lr({
	themeId: v,
	defaultTheme: to(),
	defaultClassName: Tc.root,
	generateClassName: Fr.generate
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Button/buttonClasses.mjs
function Ec(e) {
	return z("MuiButton", e);
}
var Dc = B("MuiButton", /* @__PURE__ */ "root.text.outlined.contained.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.loading.loadingWrapper.loadingIconPlaceholder.loadingIndicator.loadingPositionCenter.loadingPositionStart.loadingPositionEnd".split(".")), Oc = /*#__PURE__*/ e.createContext({}), kc = /*#__PURE__*/ e.createContext(void 0), Ac = (e) => {
	let { color: t, disableElevation: n, fullWidth: r, size: i, variant: a, loading: o, loadingPosition: s, classes: c } = e, l = U({
		root: [
			"root",
			o && "loading",
			a,
			`size${Y(i)}`,
			`color${Y(t)}`,
			n && "disableElevation",
			r && "fullWidth",
			o && `loadingPosition${Y(s)}`
		],
		startIcon: ["icon", "startIcon"],
		endIcon: ["icon", "endIcon"],
		loadingIndicator: ["loadingIndicator"],
		loadingWrapper: ["loadingWrapper"]
	}, Ec, c);
	return {
		...c,
		...l
	};
}, jc = [
	{
		props: { size: "small" },
		style: { "& > *:nth-of-type(1)": { fontSize: 18 } }
	},
	{
		props: { size: "medium" },
		style: { "& > *:nth-of-type(1)": { fontSize: 20 } }
	},
	{
		props: { size: "large" },
		style: { "& > *:nth-of-type(1)": { fontSize: 22 } }
	}
], Mc = K(Es, {
	shouldForwardProp: (e) => co(e) || e === "classes",
	name: "MuiButton",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`size${Y(n.size)}`],
			n.color === "inherit" && t.colorInherit,
			n.disableElevation && t.disableElevation,
			n.fullWidth && t.fullWidth,
			n.loading && t.loading
		];
	}
})(q(({ theme: e }) => {
	let t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
	return {
		...e.typography.button,
		minWidth: 64,
		padding: "6px 16px",
		border: 0,
		borderRadius: (e.vars || e).shape.borderRadius,
		..._o(e, [
			"background-color",
			"box-shadow",
			"border-color",
			"color"
		], { duration: e.transitions.duration.short }),
		"&:hover": { textDecoration: "none" },
		[`&.${Dc.disabled}`]: { color: (e.vars || e).palette.action.disabled },
		variants: [
			{
				props: { variant: "contained" },
				style: {
					color: "var(--variant-containedColor)",
					backgroundColor: "var(--variant-containedBg)",
					boxShadow: (e.vars || e).shadows[2],
					"&:hover": {
						boxShadow: (e.vars || e).shadows[4],
						"@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] }
					},
					"&:active": { boxShadow: (e.vars || e).shadows[8] },
					[`&.${Dc.focusVisible}`]: {
						...e.focusVisible,
						boxShadow: e.focusVisible?.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
					},
					[`&.${Dc.disabled}`]: {
						color: (e.vars || e).palette.action.disabled,
						boxShadow: (e.vars || e).shadows[0],
						backgroundColor: (e.vars || e).palette.action.disabledBackground
					}
				}
			},
			{
				props: { variant: "outlined" },
				style: {
					padding: "5px 15px",
					border: "1px solid currentColor",
					borderColor: "var(--variant-outlinedBorder, currentColor)",
					backgroundColor: "var(--variant-outlinedBg)",
					color: "var(--variant-outlinedColor)",
					[`&.${Dc.disabled}`]: { border: `1px solid ${(e.vars || e).palette.action.disabledBackground}` }
				}
			},
			{
				props: { variant: "text" },
				style: {
					padding: "6px 8px",
					color: "var(--variant-textColor)",
					backgroundColor: "var(--variant-textBg)"
				}
			},
			...Object.entries(e.palette).filter(As()).map(([t]) => ({
				props: { color: t },
				style: {
					"--variant-textColor": (e.vars || e).palette[t].main,
					"--variant-outlinedColor": (e.vars || e).palette[t].main,
					"--variant-outlinedBorder": e.alpha((e.vars || e).palette[t].main, .5),
					"--variant-containedColor": (e.vars || e).palette[t].contrastText,
					"--variant-containedBg": (e.vars || e).palette[t].main,
					"@media (hover: hover)": { "&:hover": {
						"--variant-containedBg": (e.vars || e).palette[t].dark,
						"--variant-textBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
						"--variant-outlinedBorder": (e.vars || e).palette[t].main,
						"--variant-outlinedBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
					} }
				}
			})),
			{
				props: { color: "inherit" },
				style: {
					color: "inherit",
					borderColor: "currentColor",
					"--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
					"@media (hover: hover)": { "&:hover": {
						"--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
						"--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
						"--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
					} }
				}
			},
			{
				props: {
					size: "small",
					variant: "text"
				},
				style: {
					padding: "4px 5px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "text"
				},
				style: {
					padding: "8px 11px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: {
					size: "small",
					variant: "outlined"
				},
				style: {
					padding: "3px 9px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "outlined"
				},
				style: {
					padding: "7px 21px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: {
					size: "small",
					variant: "contained"
				},
				style: {
					padding: "4px 10px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "contained"
				},
				style: {
					padding: "8px 22px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: { disableElevation: !0 },
				style: {
					boxShadow: "none",
					"&:hover": { boxShadow: "none" },
					[`&.${Dc.focusVisible}`]: { boxShadow: e.focusVisible?.boxShadow ?? "none" },
					"&:active": { boxShadow: "none" },
					[`&.${Dc.disabled}`]: { boxShadow: "none" }
				}
			},
			{
				props: { fullWidth: !0 },
				style: { width: "100%" }
			},
			{
				props: { loadingPosition: "center" },
				style: {
					..._o(e, [
						"background-color",
						"box-shadow",
						"border-color"
					], { duration: e.transitions.duration.short }),
					[`&.${Dc.loading}`]: { color: "transparent" }
				}
			}
		]
	};
})), Nc = K("span", {
	name: "MuiButton",
	slot: "StartIcon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.startIcon, n.loading && t.startIconLoadingStart];
	}
})(({ theme: e }) => ({
	display: "inherit",
	alignItems: "center",
	marginRight: 8,
	marginLeft: -4,
	"&::before": {
		content: "\"\\200b\"",
		width: 0,
		overflow: "hidden"
	},
	variants: [
		{
			props: { size: "small" },
			style: { marginLeft: -2 }
		},
		{
			props: {
				loadingPosition: "start",
				loading: !0
			},
			style: {
				..._o(e, ["opacity"], { duration: e.transitions.duration.short }),
				opacity: 0
			}
		},
		{
			props: {
				loadingPosition: "start",
				loading: !0,
				fullWidth: !0
			},
			style: { marginRight: -8 }
		},
		...jc
	]
})), Pc = K("span", {
	name: "MuiButton",
	slot: "EndIcon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.endIcon, n.loading && t.endIconLoadingEnd];
	}
})(({ theme: e }) => ({
	display: "inherit",
	marginRight: -4,
	marginLeft: 8,
	variants: [
		{
			props: { size: "small" },
			style: { marginRight: -2 }
		},
		{
			props: {
				loadingPosition: "end",
				loading: !0
			},
			style: {
				..._o(e, ["opacity"], { duration: e.transitions.duration.short }),
				opacity: 0
			}
		},
		{
			props: {
				loadingPosition: "end",
				loading: !0,
				fullWidth: !0
			},
			style: { marginLeft: -8 }
		},
		...jc
	]
})), Fc = K("span", {
	name: "MuiButton",
	slot: "LoadingIndicator"
})(({ theme: e }) => ({
	display: "none",
	position: "absolute",
	visibility: "visible",
	variants: [
		{
			props: { loading: !0 },
			style: { display: "flex" }
		},
		{
			props: { loadingPosition: "start" },
			style: { left: 14 }
		},
		{
			props: {
				loadingPosition: "start",
				size: "small"
			},
			style: { left: 10 }
		},
		{
			props: {
				variant: "text",
				loadingPosition: "start"
			},
			style: { left: 6 }
		},
		{
			props: { loadingPosition: "center" },
			style: {
				left: "50%",
				transform: "translate(-50%)",
				color: (e.vars || e).palette.action.disabled
			}
		},
		{
			props: { loadingPosition: "end" },
			style: { right: 14 }
		},
		{
			props: {
				loadingPosition: "end",
				size: "small"
			},
			style: { right: 10 }
		},
		{
			props: {
				variant: "text",
				loadingPosition: "end"
			},
			style: { right: 6 }
		},
		{
			props: {
				loadingPosition: "start",
				fullWidth: !0
			},
			style: {
				position: "relative",
				left: -10
			}
		},
		{
			props: {
				loadingPosition: "end",
				fullWidth: !0
			},
			style: {
				position: "relative",
				right: -10
			}
		}
	]
})), Ic = K("span", {
	name: "MuiButton",
	slot: "LoadingIconPlaceholder"
})({
	display: "inline-block",
	width: "1em",
	height: "1em"
}), Lc = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = e.useContext(Oc), i = e.useContext(kc), a = J({
		props: Zr(r, t),
		name: "MuiButton"
	}), { children: c, color: l = "primary", component: u = "button", className: d, disabled: f = !1, disableElevation: p = !1, disableFocusRipple: m = !1, endIcon: h, focusVisibleClassName: g, fullWidth: _ = !1, id: v, loading: y = null, loadingIndicator: b, loadingPosition: x = "center", size: S = "medium", startIcon: C, type: w, variant: T = "text", ...ee } = a, te = wo(v), ne = b ?? /*#__PURE__*/ o(Ws, {
		"aria-labelledby": te,
		color: "inherit",
		size: 16
	}), re = {
		...a,
		color: l,
		component: u,
		disabled: f,
		disableElevation: p,
		disableFocusRipple: m,
		fullWidth: _,
		loading: y,
		loadingIndicator: ne,
		loadingPosition: x,
		size: S,
		type: w,
		variant: T
	}, E = Ac(re), ie = (C || y && x === "start") && /*#__PURE__*/ o(Nc, {
		className: E.startIcon,
		ownerState: re,
		children: C || /*#__PURE__*/ o(Ic, {
			className: E.loadingIconPlaceholder,
			ownerState: re
		})
	}), ae = (h || y && x === "end") && /*#__PURE__*/ o(Pc, {
		className: E.endIcon,
		ownerState: re,
		children: h || /*#__PURE__*/ o(Ic, {
			className: E.loadingIconPlaceholder,
			ownerState: re
		})
	}), oe = i || "", se = typeof y == "boolean" ? /*#__PURE__*/ o("span", {
		className: E.loadingWrapper,
		style: { display: "contents" },
		children: y && /*#__PURE__*/ o(Fc, {
			className: E.loadingIndicator,
			ownerState: re,
			children: ne
		})
	}) : null, { root: ce, ...le } = E;
	return /*#__PURE__*/ s(Mc, {
		ownerState: re,
		className: R(r.className, E.root, d, oe),
		component: u,
		disabled: f || y,
		focusRipple: !m,
		focusVisibleClassName: R(E.focusVisible, g),
		ref: n,
		internalNativeButton: !0,
		type: w,
		id: y ? te : v,
		...ee,
		classes: le,
		children: [
			ie,
			x !== "end" && se,
			c,
			x === "end" && se,
			ae
		]
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Card/cardClasses.mjs
function Rc(e) {
	return z("MuiCard", e);
}
B("MuiCard", ["root"]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Card/Card.mjs
var zc = (e) => {
	let { classes: t } = e;
	return U({ root: ["root"] }, Rc, t);
}, Bc = K(Xo, {
	name: "MuiCard",
	slot: "Root"
})({ overflow: "hidden" }), Vc = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiCard"
	}), { className: r, raised: i = !1, ...a } = n, s = {
		...n,
		raised: i
	}, c = zc(s);
	return /*#__PURE__*/ o(Bc, {
		className: R(c.root, r),
		elevation: i ? 8 : void 0,
		ref: t,
		ownerState: s,
		...a
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/CardContent/cardContentClasses.mjs
function Hc(e) {
	return z("MuiCardContent", e);
}
B("MuiCardContent", ["root"]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/CardContent/CardContent.mjs
var Uc = (e) => {
	let { classes: t } = e;
	return U({ root: ["root"] }, Hc, t);
}, Wc = K("div", {
	name: "MuiCardContent",
	slot: "Root"
})({
	padding: 16,
	"&:last-child": { paddingBottom: 24 }
}), Gc = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiCardContent"
	}), { className: r, component: i = "div", ...a } = n, s = {
		...n,
		component: i
	}, c = Uc(s);
	return /*#__PURE__*/ o(Wc, {
		as: i,
		className: R(c.root, r),
		ownerState: s,
		ref: t,
		...a
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Divider/dividerClasses.mjs
function Kc(e) {
	return z("MuiDivider", e);
}
B("MuiDivider", [
	"root",
	"absolute",
	"fullWidth",
	"inset",
	"middle",
	"flexItem",
	"vertical",
	"withChildren",
	"textAlignRight",
	"textAlignLeft",
	"wrapper",
	"wrapperVertical"
]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Divider/Divider.mjs
var qc = (e) => {
	let { absolute: t, children: n, classes: r, flexItem: i, orientation: a, textAlign: o, variant: s } = e;
	return U({
		root: [
			"root",
			t && "absolute",
			s,
			a === "vertical" && "vertical",
			i && "flexItem",
			n && "withChildren",
			o === "right" && a !== "vertical" && "textAlignRight",
			o === "left" && a !== "vertical" && "textAlignLeft"
		],
		wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
	}, Kc, r);
}, Jc = K("div", {
	name: "MuiDivider",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.absolute && t.absolute,
			t[n.variant],
			n.orientation === "vertical" && t.vertical,
			n.flexItem && t.flexItem,
			n.children && t.withChildren,
			n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight,
			n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft
		];
	}
})(q(({ theme: e }) => ({
	margin: 0,
	flexShrink: 0,
	borderWidth: 0,
	borderStyle: "solid",
	borderColor: (e.vars || e).palette.divider,
	borderBottomWidth: "thin",
	variants: [
		{
			props: { absolute: !0 },
			style: {
				position: "absolute",
				bottom: 0,
				left: 0,
				width: "100%"
			}
		},
		{
			props: { variant: "inset" },
			style: { marginLeft: 72 }
		},
		{
			props: {
				variant: "middle",
				orientation: "horizontal"
			},
			style: {
				marginLeft: e.spacing(2),
				marginRight: e.spacing(2)
			}
		},
		{
			props: {
				variant: "middle",
				orientation: "vertical"
			},
			style: {
				marginTop: e.spacing(1),
				marginBottom: e.spacing(1)
			}
		},
		{
			props: { orientation: "vertical" },
			style: {
				height: "100%",
				borderBottomWidth: 0,
				borderRightWidth: "thin"
			}
		},
		{
			props: { flexItem: !0 },
			style: {
				alignSelf: "stretch",
				height: "auto"
			}
		},
		{
			props: ({ ownerState: e }) => !!e.children,
			style: {
				display: "flex",
				textAlign: "center",
				border: 0,
				borderTopStyle: "solid",
				borderLeftStyle: "solid",
				"&::before, &::after": {
					content: "\"\"",
					alignSelf: "center"
				}
			}
		},
		{
			props: ({ ownerState: e }) => e.children && e.orientation !== "vertical",
			style: { "&::before, &::after": {
				width: "100%",
				borderTop: `thin solid ${(e.vars || e).palette.divider}`,
				borderTopStyle: "inherit"
			} }
		},
		{
			props: ({ ownerState: e }) => e.orientation === "vertical" && e.children,
			style: {
				flexDirection: "column",
				"&::before, &::after": {
					height: "100%",
					borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
					borderLeftStyle: "inherit"
				}
			}
		},
		{
			props: ({ ownerState: e }) => e.textAlign === "right" && e.orientation !== "vertical",
			style: {
				"&::before": { width: "90%" },
				"&::after": { width: "10%" }
			}
		},
		{
			props: ({ ownerState: e }) => e.textAlign === "left" && e.orientation !== "vertical",
			style: {
				"&::before": { width: "10%" },
				"&::after": { width: "90%" }
			}
		}
	]
}))), Yc = K("span", {
	name: "MuiDivider",
	slot: "Wrapper",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
	}
})(q(({ theme: e }) => ({
	display: "inline-block",
	paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
	paddingRight: `calc(${e.spacing(1)} * 1.2)`,
	whiteSpace: "nowrap",
	variants: [{
		props: { orientation: "vertical" },
		style: {
			paddingTop: `calc(${e.spacing(1)} * 1.2)`,
			paddingBottom: `calc(${e.spacing(1)} * 1.2)`
		}
	}]
}))), Xc = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiDivider"
	}), { absolute: r = !1, children: i, className: a, orientation: s = "horizontal", component: c = i || s === "vertical" ? "div" : "hr", flexItem: l = !1, role: u = c === "hr" ? void 0 : "separator", textAlign: d = "center", variant: f = "fullWidth", ...p } = n, m = {
		...n,
		absolute: r,
		component: c,
		flexItem: l,
		orientation: s,
		role: u,
		textAlign: d,
		variant: f
	}, h = qc(m);
	return /*#__PURE__*/ o(Jc, {
		as: c,
		className: R(h.root, a),
		role: u,
		ref: t,
		ownerState: m,
		"aria-orientation": u === "separator" && (c !== "hr" || s === "vertical") ? s : void 0,
		...p,
		children: i ? /*#__PURE__*/ o(Yc, {
			className: h.wrapper,
			ownerState: m,
			children: i
		}) : null
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Link/linkClasses.mjs
function Zc(e) {
	return z("MuiLink", e);
}
var Qc = B("MuiLink", [
	"root",
	"underlineNone",
	"underlineHover",
	"underlineAlways",
	"button",
	"focusVisible"
]), $c = ({ theme: e, ownerState: t }) => {
	let n = t.color;
	if ("colorSpace" in e && e.colorSpace) {
		let r = Mn(e, `palette.${n}.main`) || Mn(e, `palette.${n}`) || t.color;
		return e.alpha(r, .4);
	}
	let r = Mn(e, `palette.${n}.main`, !1) || Mn(e, `palette.${n}`, !1) || t.color, i = Mn(e, `palette.${n}.mainChannel`) || Mn(e, `palette.${n}Channel`);
	return "vars" in e && i ? `rgba(${i} / 0.4)` : di(r, .4);
}, el = {
	primary: !0,
	secondary: !0,
	error: !0,
	info: !0,
	success: !0,
	warning: !0,
	textPrimary: !0,
	textSecondary: !0,
	textDisabled: !0
}, tl = (e) => {
	let { classes: t, component: n, focusVisible: r, underline: i } = e;
	return U({ root: [
		"root",
		`underline${Y(i)}`,
		n === "button" && "button",
		r && "focusVisible"
	] }, Zc, t);
}, nl = K(Z, {
	name: "MuiLink",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[`underline${Y(n.underline)}`],
			n.component === "button" && t.button
		];
	}
})(q(({ theme: e }) => ({
	...e.focusVisible && { [`&.${Qc.focusVisible}`]: {
		...oa,
		...e.focusVisible
	} },
	variants: [
		{
			props: { underline: "none" },
			style: { textDecoration: "none" }
		},
		{
			props: { underline: "hover" },
			style: {
				textDecoration: "none",
				"&:hover": { textDecoration: "underline" }
			}
		},
		{
			props: { underline: "always" },
			style: {
				textDecoration: "underline",
				"&:hover": { textDecorationColor: "inherit" }
			}
		},
		{
			props: ({ underline: e, ownerState: t }) => e === "always" && t.color !== "inherit",
			style: { textDecorationColor: "var(--Link-underlineColor)" }
		},
		{
			props: ({ underline: e, ownerState: t }) => e === "always" && t.color === "inherit",
			style: e.colorSpace ? { textDecorationColor: e.alpha("currentColor", .4) } : null
		},
		...Object.entries(e.palette).filter(As()).map(([t]) => ({
			props: {
				underline: "always",
				color: t
			},
			style: { "--Link-underlineColor": e.alpha((e.vars || e).palette[t].main, .4) }
		})),
		{
			props: {
				underline: "always",
				color: "textPrimary"
			},
			style: { "--Link-underlineColor": e.alpha((e.vars || e).palette.text.primary, .4) }
		},
		{
			props: {
				underline: "always",
				color: "textSecondary"
			},
			style: { "--Link-underlineColor": e.alpha((e.vars || e).palette.text.secondary, .4) }
		},
		{
			props: {
				underline: "always",
				color: "textDisabled"
			},
			style: { "--Link-underlineColor": (e.vars || e).palette.text.disabled }
		},
		{
			props: { component: "button" },
			style: {
				position: "relative",
				WebkitTapHighlightColor: "transparent",
				backgroundColor: "transparent",
				outline: 0,
				border: 0,
				margin: 0,
				borderRadius: 0,
				padding: 0,
				cursor: "pointer",
				userSelect: "none",
				verticalAlign: "middle",
				MozAppearance: "none",
				WebkitAppearance: "none",
				"&::-moz-focus-inner": { borderStyle: "none" },
				...!e.focusVisible && { [`&.${Qc.focusVisible}`]: { outline: "auto" } }
			}
		}
	]
}))), rl = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiLink"
	}), i = oo(), { className: a, color: s = "primary", component: c = "a", onBlur: l, onFocus: u, TypographyClasses: d, underline: f = "always", variant: p = "inherit", sx: m, ...h } = r, [g, _] = e.useState(!1), v = (e) => {
		Zo(e.target) || _(!1), l && l(e);
	}, y = (e) => {
		Zo(e.target) && _(!0), u && u(e);
	}, b = {
		...r,
		color: s,
		component: c,
		focusVisible: g,
		underline: f,
		variant: p
	}, x = tl(b);
	return /*#__PURE__*/ o(nl, {
		color: s,
		className: R(x.root, a),
		classes: d,
		component: c,
		onBlur: v,
		onFocus: y,
		ref: n,
		ownerState: b,
		variant: p,
		...h,
		sx: [...el[s] === void 0 ? [{ color: s }] : [], ...Array.isArray(m) ? m : [m]],
		style: {
			...h.style,
			...f === "always" && s !== "inherit" && !el[s] && { "--Link-underlineColor": $c({
				theme: i,
				ownerState: b
			}) }
		}
	});
}), il = /*#__PURE__*/ e.createContext({});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/List/listClasses.mjs
function al(e) {
	return z("MuiList", e);
}
B("MuiList", [
	"root",
	"padding",
	"dense",
	"subheader"
]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/List/List.mjs
var ol = (e) => {
	let { classes: t, disablePadding: n, dense: r, subheader: i } = e;
	return U({ root: [
		"root",
		!n && "padding",
		r && "dense",
		i && "subheader"
	] }, al, t);
}, sl = K("ul", {
	name: "MuiList",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			!n.disablePadding && t.padding,
			n.dense && t.dense,
			n.subheader && t.subheader
		];
	}
})({
	listStyle: "none",
	margin: 0,
	padding: 0,
	position: "relative",
	variants: [{
		props: ({ ownerState: e }) => !e.disablePadding,
		style: {
			paddingTop: 8,
			paddingBottom: 8
		}
	}, {
		props: ({ ownerState: e }) => e.subheader,
		style: {
			paddingTop: 0,
			isolation: "isolate"
		}
	}]
}), cl = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiList"
	}), { children: i, className: a, component: c = "ul", dense: l = !1, disablePadding: u = !1, subheader: d, ...f } = r, p = e.useMemo(() => ({ dense: l }), [l]), m = {
		...r,
		component: c,
		dense: l,
		disablePadding: u
	}, h = ol(m);
	return /*#__PURE__*/ o(il.Provider, {
		value: p,
		children: /*#__PURE__*/ s(sl, {
			as: c,
			className: R(h.root, a),
			ref: n,
			ownerState: m,
			...f,
			children: [d, i]
		})
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ListItem/listItemClasses.mjs
function ll(e) {
	return z("MuiListItem", e);
}
B("MuiListItem", [
	"root",
	"dense",
	"alignItemsFlexStart",
	"divider",
	"gutters",
	"padding",
	"secondaryAction"
]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.mjs
function ul(e) {
	return z("MuiListItemSecondaryAction", e);
}
B("MuiListItemSecondaryAction", ["root", "disableGutters"]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.mjs
var dl = (e) => {
	let { disableGutters: t, classes: n } = e;
	return U({ root: ["root", t && "disableGutters"] }, ul, n);
}, fl = K("div", {
	name: "MuiListItemSecondaryAction",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.root, n.disableGutters && t.disableGutters];
	}
})({
	position: "absolute",
	right: 16,
	top: "50%",
	transform: "translateY(-50%)",
	variants: [{
		props: ({ ownerState: e }) => e.disableGutters,
		style: { right: 0 }
	}]
}), pl = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiListItemSecondaryAction"
	}), { className: i, component: a, ...s } = r, c = e.useContext(il), l = {
		...r,
		disableGutters: c.disableGutters
	}, u = dl(l);
	return /*#__PURE__*/ o(fl, {
		as: a,
		className: R(u.root, i),
		ownerState: l,
		ref: n,
		...s
	});
});
pl.muiName = "ListItemSecondaryAction";
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ListItem/ListItem.mjs
var ml = (e, t) => {
	let { ownerState: n } = e;
	return [
		t.root,
		n.dense && t.dense,
		n.alignItems === "flex-start" && t.alignItemsFlexStart,
		n.divider && t.divider,
		!n.disableGutters && t.gutters,
		!n.disablePadding && t.padding
	];
}, hl = (e) => {
	let { alignItems: t, classes: n, dense: r, disableGutters: i, disablePadding: a, divider: o } = e;
	return U({
		root: [
			"root",
			r && "dense",
			!i && "gutters",
			!a && "padding",
			o && "divider",
			t === "flex-start" && "alignItemsFlexStart"
		],
		secondaryAction: ["secondaryAction"]
	}, ll, n);
}, gl = K("div", {
	name: "MuiListItem",
	slot: "Root",
	overridesResolver: ml
})(q(({ theme: e }) => ({
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	position: "relative",
	textDecoration: "none",
	width: "100%",
	boxSizing: "border-box",
	textAlign: "left",
	variants: [
		{
			props: ({ ownerState: e }) => !e.disablePadding,
			style: {
				paddingTop: 8,
				paddingBottom: 8
			}
		},
		{
			props: ({ ownerState: e }) => !e.disablePadding && e.dense,
			style: {
				paddingTop: 4,
				paddingBottom: 4
			}
		},
		{
			props: ({ ownerState: e }) => !e.disablePadding && !e.disableGutters,
			style: {
				paddingLeft: 16,
				paddingRight: 16
			}
		},
		{
			props: ({ ownerState: e }) => !e.disablePadding && !!e.secondaryAction,
			style: { paddingRight: 48 }
		},
		{
			props: ({ ownerState: e }) => !!e.secondaryAction,
			style: { [`& > .${vo.root}`]: { paddingRight: 48 } }
		},
		{
			props: { alignItems: "flex-start" },
			style: { alignItems: "flex-start" }
		},
		{
			props: ({ ownerState: e }) => e.divider,
			style: {
				borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
				backgroundClip: "padding-box"
			}
		},
		{
			props: ({ ownerState: e }) => e.button,
			style: {
				..._o(e, "background-color", { duration: e.transitions.duration.shortest }),
				"&:hover": {
					textDecoration: "none",
					backgroundColor: (e.vars || e).palette.action.hover,
					"@media (hover: none)": { backgroundColor: "transparent" }
				}
			}
		}
	]
}))), _l = K(pl, {
	name: "MuiListItem",
	slot: "secondaryAction"
})({}), vl = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiListItem"
	}), { alignItems: i = "center", children: a, className: c, component: l = "li", dense: u = !1, disableGutters: d = !1, disablePadding: f = !1, divider: p = !1, secondaryAction: m, slotProps: h = {}, slots: g = {}, ..._ } = r, v = e.useContext(il), y = e.useMemo(() => ({
		dense: u || v.dense || !1,
		alignItems: i,
		disableGutters: d
	}), [
		i,
		v.dense,
		u,
		d
	]), b = {
		...r,
		alignItems: i,
		dense: y.dense,
		disableGutters: d,
		disablePadding: f,
		divider: p,
		secondaryAction: m
	}, x = hl(b), S = {
		slots: g,
		slotProps: h
	}, [C, w] = Ko("root", {
		ref: n,
		elementType: gl,
		externalForwardedProps: {
			component: l,
			...S,
			..._
		},
		ownerState: b,
		className: R(x.root, c)
	}), [T, ee] = Ko("secondaryAction", {
		elementType: _l,
		shouldForwardComponentProp: !0,
		externalForwardedProps: S,
		ownerState: b,
		className: x.secondaryAction
	});
	return /*#__PURE__*/ o(il.Provider, {
		value: y,
		children: /*#__PURE__*/ s(C, {
			...w,
			children: [a, m && /*#__PURE__*/ o(T, {
				...ee,
				children: m
			})]
		})
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ListItemIcon/listItemIconClasses.mjs
function yl(e) {
	return z("MuiListItemIcon", e);
}
B("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ListItemIcon/ListItemIcon.mjs
var bl = (e) => {
	let { alignItems: t, classes: n } = e;
	return U({ root: ["root", t === "flex-start" && "alignItemsFlexStart"] }, yl, n);
}, xl = K("div", {
	name: "MuiListItemIcon",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
	}
})(q(({ theme: e }) => ({
	minWidth: e.spacing(4.5),
	color: (e.vars || e).palette.action.active,
	flexShrink: 0,
	display: "inline-flex",
	variants: [{
		props: { alignItems: "flex-start" },
		style: { marginTop: 8 }
	}]
}))), Sl = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiListItemIcon"
	}), { className: i, ...a } = r, s = e.useContext(il), c = {
		...r,
		alignItems: s.alignItems
	}, l = bl(c);
	return /*#__PURE__*/ o(xl, {
		className: R(l.root, i),
		ownerState: c,
		ref: n,
		...a
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/ListItemText/listItemTextClasses.mjs
function Cl(e) {
	return z("MuiListItemText", e);
}
var wl = B("MuiListItemText", [
	"root",
	"multiline",
	"dense",
	"inset",
	"primary",
	"secondary"
]), Tl = (e) => {
	let { classes: t, inset: n, primary: r, secondary: i, dense: a } = e;
	return U({
		root: [
			"root",
			n && "inset",
			a && "dense",
			r && i && "multiline"
		],
		primary: ["primary"],
		secondary: ["secondary"]
	}, Cl, t);
}, El = K("div", {
	name: "MuiListItemText",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			{ [`& .${wl.primary}`]: t.primary },
			{ [`& .${wl.secondary}`]: t.secondary },
			t.root,
			n.inset && t.inset,
			n.primary && n.secondary && t.multiline,
			n.dense && t.dense
		];
	}
})({
	flex: "1 1 auto",
	minWidth: 0,
	marginTop: 4,
	marginBottom: 4,
	[`.${uc.root}:where(& .${wl.primary})`]: { display: "block" },
	[`.${uc.root}:where(& .${wl.secondary})`]: { display: "block" },
	variants: [{
		props: ({ ownerState: e }) => e.primary && e.secondary,
		style: {
			marginTop: 6,
			marginBottom: 6
		}
	}, {
		props: ({ ownerState: e }) => e.inset,
		style: { paddingLeft: 56 }
	}]
}), Dl = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiListItemText"
	}), { children: i, className: a, disableTypography: c = !1, inset: l = !1, primary: u, secondary: d, slots: f = {}, slotProps: p = {}, ...m } = r, { dense: h } = e.useContext(il), g = u ?? i, _ = d, v = {
		...r,
		disableTypography: c,
		inset: l,
		primary: !!g,
		secondary: !!_,
		dense: h
	}, y = Tl(v), b = {
		slots: f,
		slotProps: p
	}, [x, S] = Ko("root", {
		className: R(y.root, a),
		elementType: El,
		externalForwardedProps: {
			...b,
			...m
		},
		ownerState: v,
		ref: n
	}), [C, w] = Ko("primary", {
		className: y.primary,
		elementType: Z,
		externalForwardedProps: b,
		ownerState: v
	}), [T, ee] = Ko("secondary", {
		className: y.secondary,
		elementType: Z,
		externalForwardedProps: b,
		ownerState: v
	});
	return g != null && g.type !== Z && !c && (g = /*#__PURE__*/ o(C, {
		variant: h ? "body2" : "body1",
		component: w?.variant ? void 0 : "span",
		...w,
		children: g
	})), _ != null && _.type !== Z && !c && (_ = /*#__PURE__*/ o(T, {
		variant: "body2",
		color: "textSecondary",
		...ee,
		children: _
	})), /*#__PURE__*/ s(x, {
		...S,
		children: [g, _]
	});
}), Ol = Bi({
	createStyledComponent: K("div", {
		name: "MuiStack",
		slot: "Root"
	}),
	useThemeProps: (e) => J({
		props: e,
		name: "MuiStack"
	})
}), kl = /*#__PURE__*/ e.createContext();
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Table/tableClasses.mjs
function Al(e) {
	return z("MuiTable", e);
}
B("MuiTable", ["root", "stickyHeader"]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/Table/Table.mjs
var jl = (e) => {
	let { classes: t, stickyHeader: n } = e;
	return U({ root: ["root", n && "stickyHeader"] }, Al, t);
}, Ml = K("table", {
	name: "MuiTable",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.root, n.stickyHeader && t.stickyHeader];
	}
})(q(({ theme: e }) => ({
	display: "table",
	width: "100%",
	borderCollapse: "collapse",
	borderSpacing: 0,
	"& caption": {
		...e.typography.body2,
		padding: e.spacing(2),
		color: (e.vars || e).palette.text.secondary,
		textAlign: "left",
		captionSide: "bottom"
	},
	variants: [{
		props: ({ ownerState: e }) => e.stickyHeader,
		style: { borderCollapse: "separate" }
	}]
}))), Nl = "table", Pl = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiTable"
	}), { className: i, component: a = Nl, padding: s = "normal", size: c = "medium", stickyHeader: l = !1, ...u } = r, d = {
		...r,
		component: a,
		padding: s,
		size: c,
		stickyHeader: l
	}, f = jl(d), p = e.useMemo(() => ({
		padding: s,
		size: c,
		stickyHeader: l
	}), [
		s,
		c,
		l
	]);
	return /*#__PURE__*/ o(kl.Provider, {
		value: p,
		children: /*#__PURE__*/ o(Ml, {
			as: a,
			role: a === Nl ? null : "table",
			ref: n,
			className: R(f.root, i),
			ownerState: d,
			...u
		})
	});
}), Fl = /*#__PURE__*/ e.createContext();
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/TableBody/tableBodyClasses.mjs
function Il(e) {
	return z("MuiTableBody", e);
}
B("MuiTableBody", ["root"]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/TableBody/TableBody.mjs
var Ll = (e) => {
	let { classes: t } = e;
	return U({ root: ["root"] }, Il, t);
}, Rl = K("tbody", {
	name: "MuiTableBody",
	slot: "Root"
})({ display: "table-row-group" }), zl = { variant: "body" }, Bl = "tbody", Vl = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiTableBody"
	}), { className: r, component: i = Bl, ...a } = n, s = {
		...n,
		component: i
	}, c = Ll(s);
	return /*#__PURE__*/ o(Fl.Provider, {
		value: zl,
		children: /*#__PURE__*/ o(Rl, {
			className: R(c.root, r),
			as: i,
			ref: t,
			role: i === Bl ? null : "rowgroup",
			ownerState: s,
			...a
		})
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/TableCell/tableCellClasses.mjs
function Hl(e) {
	return z("MuiTableCell", e);
}
var Ul = B("MuiTableCell", [
	"root",
	"head",
	"body",
	"footer",
	"sizeSmall",
	"sizeMedium",
	"paddingCheckbox",
	"paddingNone",
	"alignLeft",
	"alignCenter",
	"alignRight",
	"alignJustify",
	"stickyHeader"
]), Wl = (e) => {
	let { classes: t, variant: n, align: r, padding: i, size: a, stickyHeader: o } = e;
	return U({ root: [
		"root",
		n,
		o && "stickyHeader",
		r !== "inherit" && `align${Y(r)}`,
		i !== "normal" && `padding${Y(i)}`,
		`size${Y(a)}`
	] }, Hl, t);
}, Gl = K("td", {
	name: "MuiTableCell",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`size${Y(n.size)}`],
			n.padding !== "normal" && t[`padding${Y(n.padding)}`],
			n.align !== "inherit" && t[`align${Y(n.align)}`],
			n.stickyHeader && t.stickyHeader
		];
	}
})(q(({ theme: e }) => ({
	...e.typography.body2,
	display: "table-cell",
	verticalAlign: "inherit",
	borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? e.lighten(e.alpha(e.palette.divider, 1), .88) : e.darken(e.alpha(e.palette.divider, 1), .68)}`,
	textAlign: "left",
	padding: 16,
	variants: [
		{
			props: { variant: "head" },
			style: {
				color: (e.vars || e).palette.text.primary,
				lineHeight: e.typography.pxToRem(24),
				fontWeight: e.typography.fontWeightMedium
			}
		},
		{
			props: { variant: "body" },
			style: { color: (e.vars || e).palette.text.primary }
		},
		{
			props: { variant: "footer" },
			style: {
				color: (e.vars || e).palette.text.secondary,
				lineHeight: e.typography.pxToRem(21),
				fontSize: e.typography.pxToRem(12)
			}
		},
		{
			props: { size: "small" },
			style: {
				padding: "6px 16px",
				[`&.${Ul.paddingCheckbox}`]: {
					width: 24,
					padding: "0 12px 0 16px",
					"& > *": { padding: 0 }
				}
			}
		},
		{
			props: { padding: "checkbox" },
			style: {
				width: 48,
				padding: "0 0 0 4px"
			}
		},
		{
			props: { padding: "none" },
			style: { padding: 0 }
		},
		{
			props: { align: "left" },
			style: { textAlign: "left" }
		},
		{
			props: { align: "center" },
			style: { textAlign: "center" }
		},
		{
			props: { align: "right" },
			style: {
				textAlign: "right",
				flexDirection: "row-reverse"
			}
		},
		{
			props: { align: "justify" },
			style: { textAlign: "justify" }
		},
		{
			props: ({ ownerState: e }) => e.stickyHeader,
			style: {
				position: "sticky",
				top: 0,
				zIndex: 2,
				backgroundColor: (e.vars || e).palette.background.default
			}
		}
	]
}))), Kl = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiTableCell"
	}), { align: i = "inherit", className: a, component: s, padding: c, scope: l, size: u, sortDirection: d, variant: f, ...p } = r, m = e.useContext(kl), h = e.useContext(Fl), g = h && h.variant === "head", _;
	_ = s || (g ? "th" : "td");
	let v = l;
	_ === "td" ? v = void 0 : !v && g && (v = "col");
	let y = f || h && h.variant, b = {
		...r,
		align: i,
		component: _,
		padding: c || (m && m.padding ? m.padding : "normal"),
		size: u || (m && m.size ? m.size : "medium"),
		sortDirection: d,
		stickyHeader: y === "head" && m && m.stickyHeader,
		variant: y
	}, x = Wl(b), S = null;
	return d && (S = d === "asc" ? "ascending" : "descending"), /*#__PURE__*/ o(Gl, {
		as: _,
		ref: n,
		className: R(x.root, a),
		"aria-sort": S,
		scope: v,
		ownerState: b,
		...p
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/TableHead/tableHeadClasses.mjs
function ql(e) {
	return z("MuiTableHead", e);
}
B("MuiTableHead", ["root"]);
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/TableHead/TableHead.mjs
var Jl = (e) => {
	let { classes: t } = e;
	return U({ root: ["root"] }, ql, t);
}, Yl = K("thead", {
	name: "MuiTableHead",
	slot: "Root"
})({ display: "table-header-group" }), Xl = { variant: "head" }, Zl = "thead", Ql = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = J({
		props: e,
		name: "MuiTableHead"
	}), { className: r, component: i = Zl, ...a } = n, s = {
		...n,
		component: i
	}, c = Jl(s);
	return /*#__PURE__*/ o(Fl.Provider, {
		value: Xl,
		children: /*#__PURE__*/ o(Yl, {
			as: i,
			className: R(c.root, r),
			ref: t,
			role: i === Zl ? null : "rowgroup",
			ownerState: s,
			...a
		})
	});
});
//#endregion
//#region ../../../node_modules/.pnpm/@mui+material@9.4.0_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-c_79ea790bb079ac24c101a3fc36adeb1a/node_modules/@mui/material/TableRow/tableRowClasses.mjs
function $l(e) {
	return z("MuiTableRow", e);
}
var eu = B("MuiTableRow", [
	"root",
	"selected",
	"hover",
	"head",
	"footer"
]), tu = (e) => {
	let { classes: t, selected: n, hover: r, head: i, footer: a } = e;
	return U({ root: [
		"root",
		n && "selected",
		r && "hover",
		i && "head",
		a && "footer"
	] }, $l, t);
}, nu = K("tr", {
	name: "MuiTableRow",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.head && t.head,
			n.footer && t.footer
		];
	}
})(q(({ theme: e }) => ({
	color: "inherit",
	display: "table-row",
	verticalAlign: "middle",
	outline: 0,
	[`&.${eu.hover}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover },
	[`&.${eu.selected}`]: {
		backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
		"&:hover": { backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`) }
	}
}))), ru = "tr", iu = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = J({
		props: t,
		name: "MuiTableRow"
	}), { className: i, component: a = ru, hover: s = !1, selected: c = !1, ...l } = r, u = e.useContext(Fl), d = {
		...r,
		component: a,
		hover: s,
		selected: c,
		head: u && u.variant === "head",
		footer: u && u.variant === "footer"
	}, f = tu(d);
	return /*#__PURE__*/ o(nu, {
		as: a,
		ref: n,
		className: R(f.root, i),
		role: a === ru ? null : "row",
		ownerState: d,
		...l
	});
});
//#endregion
//#region src/snapshot.ts
function au(e) {
	return e.published === !1;
}
//#endregion
//#region src/explanations.ts
var ou = {
	generated: "GENERATED by scripts/check-crew-content-sync.mjs --write from frontend/public/locales/en/crew.json and packages/account-management/src/tier-config.ts. Do not edit by hand.",
	blocks: [
		{
			id: "free-registration",
			title: "Registration and the Crew trial are free",
			statements: [
				{
					id: "no-payment",
					text: "Creating a ProgettAI account is free, and no step of registration asks you for a payment method."
				},
				{
					id: "trial-optional",
					text: "The free Kiro Crew trial is free for a limited time, is separate from registration, and starts only when you take an explicit action to start it. The free trial gives you access to the Crew Connect workflow, which enables Kiro Crew access to 1 active project and 100 credits, and nothing else. The trial length, what happens when it ends, and the price after the trial are shown in the Free trial section of the Crew page when the trial is open. Any payment method is requested only when you start the trial, never during registration."
				},
				{
					id: "policy-links",
					text: "See the Terms of Service and the Privacy Policy for the full terms."
				}
			],
			links: [{
				id: "termsOfService",
				label: "Terms of Service",
				path: "/policies/terms-of-service"
			}, {
				id: "privacyPolicy",
				label: "Privacy Policy",
				path: "/policies/privacy-policy"
			}]
		},
		{
			id: "local-keys",
			title: "Your local Crew UcpClient key stays with you",
			statements: [
				{
					id: "generated-locally",
					text: "Your local Crew UcpClient key is generated in your browser, downloaded once as a file, and kept on your machine."
				},
				{
					id: "public-only",
					text: "ProgettAI stores only the public key and cannot see, recover, or reissue the private key, so you must back up the private-key file."
				},
				{
					id: "signs-locally",
					text: "The Crew App reads the local Crew UcpClient key from a file path, signs requests locally, and sends no private-key material to the ProgettAI MCP Bridge or the Crew dashboard."
				},
				{
					id: "lost-or-exposed",
					text: "If the local Crew UcpClient key is lost or exposed, revoke the key in Profile settings, generate a new key, select the new key on the project, and update keyFile and keyId together in the Crew App settings."
				},
				{
					id: "separate-identities",
					text: "The browser-generated local Crew UcpClient key and the platform-managed outbound UCP identity are separate identities with separate purposes."
				},
				{
					id: "never-uploaded",
					text: "ProgettAI keeps the local Crew UcpClient private key on your machine and never uploads it or reuses it as the account's managed outbound signing key."
				}
			],
			links: []
		},
		{
			id: "separate-billing",
			title: "ProgettAI and Kiro bill separately",
			statements: [
				{
					id: "independent-billing",
					text: "ProgettAI and Kiro bill independently: your Kiro or Kiro Crew subscription and model usage are billed by Kiro, and your ProgettAI plans and credits are billed by ProgettAI through Stripe."
				},
				{
					id: "install-free",
					text: "Installing the Crew App is free, and ProgettAI never charges for the Kiro side or has visibility into it."
				},
				{
					id: "activity-categories",
					text: "ProgettAI credits are consumed by the activity categories shown in your usage summary: A2A Protocol, MCP Tool Calls, RAG Queries, Web Search, and Visual Generation."
				},
				{
					id: "demo-free",
					text: "Demo Business activity consumes none of your ProgettAI credits during the evaluation period because the platform absorbs those costs, and this policy may change after the evaluation."
				},
				{
					id: "storefront-purchases",
					text: "Purchases from a business are paid to that business on its own storefront and are not billed by ProgettAI."
				},
				{
					id: "manage-subscription",
					text: "You manage your ProgettAI subscription and payment method in Profile settings on the ProgettAI frontend."
				}
			],
			links: []
		},
		{
			id: "demo-facts",
			title: "About the Demo Business",
			statements: [
				{
					id: "progettai-demo",
					text: "The Demo Business is a ProgettAI demo connection."
				},
				{
					id: "real-listings",
					text: "The products are real listings from Shopify businesses, and the demo business is not affiliated with those businesses."
				},
				{
					id: "real-cart",
					text: "A cart is created on the business's real store, and following the cart's checkout link leads to that business's real checkout, where any completed purchase is a real purchase from that business."
				},
				{
					id: "demo-free-of-credits",
					text: "Demo use is free of your ProgettAI credits during the evaluation."
				}
			],
			links: []
		}
	]
}.blocks, su = "/apps/progettai-commerce/api/state", cu = "Configuration is read once when the app starts. After copying or changing config.json, disable and re-enable the app (or restart the gateway) for the change to take effect.", lu = "https://progettai.ai", uu = `${lu}/crew/connect`, du = "config.json", fu = [
	"The private key at keyFile does not match the public key published for the configured keyId. Confirm keyFile points at the PEM you downloaded for that key.",
	"The configured keyId is not the local Crew UcpClient key selected on the project. Re-run the Web Wizard project opt-in so the project selects the same key, then copy a config.json with the matching keyId.",
	"The configured projectId is wrong, or the project is no longer accessible or ACTIVE. Confirm the projectId matches the project you opted in through the Web Wizard.",
	"The local Crew UcpClient key is not published, so the bridge cannot resolve the caller profile. Publish the key in the Web Wizard signing-key step."
];
function pu(e) {
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? e : t.toLocaleString();
}
function mu(e) {
	return e < 1e3 ? `${e} ms` : `${(e / 1e3).toFixed(2)} s`;
}
async function hu(e) {
	try {
		if (typeof navigator < "u" && navigator.clipboard?.writeText) return await navigator.clipboard.writeText(e), !0;
	} catch {}
	return !1;
}
function gu(e) {
	return /* @__PURE__ */ o(Vc, {
		variant: "outlined",
		children: /* @__PURE__ */ s(Gc, { children: [/* @__PURE__ */ o(Z, {
			variant: "h6",
			sx: { mb: 1.5 },
			children: e.title
		}), e.children] })
	});
}
function _u(e) {
	return /* @__PURE__ */ s($, {
		sx: {
			display: "flex",
			flexDirection: {
				xs: "column",
				sm: "row"
			},
			gap: {
				xs: 0,
				sm: 2
			}
		},
		children: [/* @__PURE__ */ o(Z, {
			variant: "body2",
			sx: {
				color: "text.secondary",
				minWidth: 160,
				fontWeight: 600
			},
			children: e.label
		}), /* @__PURE__ */ o(Z, {
			component: "div",
			variant: "body2",
			sx: { wordBreak: "break-all" },
			children: e.value
		})]
	});
}
function vu(e) {
	return e.items.length === 0 ? /* @__PURE__ */ o(Z, {
		variant: "body2",
		sx: {
			color: "text.secondary",
			fontStyle: "italic"
		},
		children: e.emptyLabel
	}) : /* @__PURE__ */ o($, {
		sx: {
			display: "flex",
			flexWrap: "wrap",
			gap: .75
		},
		children: e.items.map((e, t) => /* @__PURE__ */ o(wc, {
			label: e,
			size: "small",
			variant: "outlined"
		}, `${e}-${t}`))
	});
}
function yu(e) {
	let [t, n] = i(!1);
	async function r() {
		await hu(e.value) && (n(!0), window.setTimeout(() => n(!1), 2e3));
	}
	return /* @__PURE__ */ s($, { children: [/* @__PURE__ */ o(Z, {
		variant: "caption",
		component: "div",
		sx: {
			color: "text.secondary",
			fontWeight: 600,
			mb: .5
		},
		children: e.label
	}), /* @__PURE__ */ s($, {
		sx: {
			display: "flex",
			alignItems: "center",
			gap: 1,
			flexWrap: "wrap"
		},
		children: [/* @__PURE__ */ o($, {
			component: "code",
			sx: {
				px: 1,
				py: .5,
				borderRadius: 1,
				bgcolor: "action.hover",
				fontFamily: "monospace",
				fontSize: "0.85rem",
				wordBreak: "break-all"
			},
			children: e.value
		}), /* @__PURE__ */ o(Lc, {
			size: "small",
			variant: "outlined",
			onClick: () => void r(),
			"aria-label": `Copy ${e.label}`,
			children: t ? "Copied" : "Copy"
		})]
	})] });
}
function bu(e) {
	return /* @__PURE__ */ o(gu, {
		title: "Set up ProgettAI Commerce",
		children: /* @__PURE__ */ s(Ol, {
			spacing: 2,
			children: [
				/* @__PURE__ */ s(Z, {
					variant: "body2",
					children: [
						"This app is not configured yet. Generate your ",
						/* @__PURE__ */ o("code", { children: du }),
						" in the ProgettAI Connection Wizard, then copy it into the data directory below. The dashboard only reads status — it never collects or uploads your configuration."
					]
				}),
				/* @__PURE__ */ s($, { children: [
					/* @__PURE__ */ o(Z, {
						variant: "subtitle2",
						sx: {
							fontWeight: 600,
							mb: .5
						},
						children: "1. Generate your configuration"
					}),
					/* @__PURE__ */ o(Lc, {
						variant: "contained",
						href: uu,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Open the Connection Wizard"
					}),
					/* @__PURE__ */ o(Z, {
						variant: "caption",
						component: "div",
						sx: {
							color: "text.secondary",
							mt: .5,
							wordBreak: "break-all"
						},
						children: uu
					})
				] }),
				/* @__PURE__ */ s($, { children: [/* @__PURE__ */ s(Z, {
					variant: "subtitle2",
					sx: {
						fontWeight: 600,
						mb: .5
					},
					children: [
						"2. Copy ",
						/* @__PURE__ */ o("code", { children: du }),
						" into this directory"
					]
				}), /* @__PURE__ */ o(yu, {
					label: "Data directory on this machine",
					value: e.dataDir
				})] }),
				/* @__PURE__ */ s($, { children: [/* @__PURE__ */ o(Z, {
					variant: "subtitle2",
					sx: {
						fontWeight: 600,
						mb: .5
					},
					children: "3. Restart to apply"
				}), /* @__PURE__ */ o(Z, {
					variant: "body2",
					sx: { color: "text.secondary" },
					children: cu
				})] })
			]
		})
	});
}
function xu(e) {
	return /* @__PURE__ */ s(cc, {
		severity: "warning",
		variant: "outlined",
		children: [
			/* @__PURE__ */ s(_c, { children: [/* @__PURE__ */ o("code", { children: du }), " is in the wrong directory"] }),
			/* @__PURE__ */ s(Z, {
				variant: "body2",
				sx: { mb: 1 },
				children: [
					"A ",
					/* @__PURE__ */ o("code", { children: du }),
					" was found in the app root next to",
					" ",
					/* @__PURE__ */ o("code", { children: "app.json" }),
					". The app reads its configuration only from the",
					" ",
					/* @__PURE__ */ o("code", { children: "data/" }),
					" directory, so move the file there:"
				]
			}),
			/* @__PURE__ */ o($, {
				sx: { mb: 1 },
				children: /* @__PURE__ */ o(yu, {
					label: "Move config.json into",
					value: e.dataDir
				})
			}),
			/* @__PURE__ */ o(Z, {
				variant: "body2",
				sx: { color: "text.secondary" },
				children: cu
			})
		]
	});
}
function Su(e) {
	let t = e.status === "ok" ? "✓" : e.status === "fail" ? "✗" : "○", n = e.status === "ok" ? "success.main" : e.status === "fail" ? "error.main" : "text.secondary", r = e.status === "ok" ? "passed" : e.status === "fail" ? "failed" : "pending";
	return /* @__PURE__ */ s(vl, {
		alignItems: "flex-start",
		disableGutters: !0,
		sx: { py: .5 },
		children: [/* @__PURE__ */ o(Sl, {
			sx: { minWidth: 32 },
			children: /* @__PURE__ */ o($, {
				component: "span",
				role: "img",
				"aria-label": `${e.label}: ${r}`,
				sx: {
					color: n,
					fontWeight: 700,
					fontSize: "1.1rem",
					lineHeight: 1
				},
				children: t
			})
		}), /* @__PURE__ */ o(Dl, {
			primary: e.label,
			secondary: e.detail,
			slotProps: {
				primary: {
					variant: "body2",
					sx: { fontWeight: 600 }
				},
				secondary: { variant: "body2" }
			}
		})]
	});
}
function Cu(e) {
	return /* @__PURE__ */ o(gu, {
		title: "Configuration is not valid",
		children: /* @__PURE__ */ s(Ol, {
			spacing: 1.5,
			children: [
				/* @__PURE__ */ s(Z, {
					variant: "body2",
					children: [
						"The app found a ",
						/* @__PURE__ */ o("code", { children: du }),
						" but could not start with it. Fix the fields below in the Connection Wizard, copy a new",
						" ",
						/* @__PURE__ */ o("code", { children: du }),
						" into the data directory, then restart."
					]
				}),
				/* @__PURE__ */ o(cl, {
					disablePadding: !0,
					children: e.startup.failures.map((e, t) => /* @__PURE__ */ o(Su, {
						status: "fail",
						label: e.field,
						detail: /* @__PURE__ */ o("code", { children: e.code })
					}, `${e.field}-${e.code}-${t}`))
				}),
				/* @__PURE__ */ o(Xc, {}),
				/* @__PURE__ */ o(yu, {
					label: "Data directory on this machine",
					value: e.dataDir
				}),
				/* @__PURE__ */ o(Lc, {
					variant: "outlined",
					href: uu,
					target: "_blank",
					rel: "noopener noreferrer",
					sx: { alignSelf: "flex-start" },
					children: "Open the Connection Wizard"
				}),
				/* @__PURE__ */ o(Z, {
					variant: "body2",
					sx: { color: "text.secondary" },
					children: cu
				})
			]
		})
	});
}
function wu() {
	return /* @__PURE__ */ o(gu, {
		title: "The bridge rejected the caller identity",
		children: /* @__PURE__ */ s(Ol, {
			spacing: 1.5,
			children: [
				/* @__PURE__ */ s(Z, {
					variant: "body2",
					children: [
						"Configuration loaded, but the ProgettAI Bridge rejected the signed request (",
						/* @__PURE__ */ o("code", { children: "BRIDGE_AUTH_FAILED" }),
						"). Check these four causes:"
					]
				}),
				/* @__PURE__ */ o(cl, {
					disablePadding: !0,
					children: fu.map((e, t) => /* @__PURE__ */ o(Su, {
						status: "fail",
						label: e
					}, t))
				}),
				/* @__PURE__ */ o(Lc, {
					variant: "outlined",
					href: uu,
					target: "_blank",
					rel: "noopener noreferrer",
					sx: { alignSelf: "flex-start" },
					children: "Open the Connection Wizard"
				})
			]
		})
	});
}
function Tu(e) {
	let { meta: t, snapshot: n } = e, r = t.configPresent || n.config.keyConfigured, i = n.config.keyConfigured, a = n.session.initialized, c = n.discoveredBusinesses.length > 0, l = (e) => e ? "ok" : "pending";
	return /* @__PURE__ */ o(gu, {
		title: "Connection verification",
		children: /* @__PURE__ */ s(cl, {
			disablePadding: !0,
			children: [
				/* @__PURE__ */ o(Su, {
					status: l(r),
					label: "Configuration found",
					detail: r ? void 0 : `Copy config.json into ${t.dataDir}, then restart.`
				}),
				/* @__PURE__ */ o(Su, {
					status: l(i),
					label: "Signing key loaded",
					detail: i ? void 0 : "The P-256 signing key has not loaded yet."
				}),
				/* @__PURE__ */ o(Su, {
					status: l(a),
					label: "Bridge reachable",
					detail: a ? void 0 : "The session has not initialized against the bridge yet."
				}),
				/* @__PURE__ */ o(Su, {
					status: l(c),
					label: "First discovery succeeded",
					detail: c ? void 0 : "No businesses discovered yet. Ask Crew to discover businesses."
				})
			]
		})
	});
}
function Eu() {
	return /* @__PURE__ */ o(Ol, {
		spacing: 2,
		children: ou.map((e) => /* @__PURE__ */ o(gu, {
			title: e.title,
			children: /* @__PURE__ */ s(Ol, {
				spacing: 1,
				children: [e.statements.map((e) => /* @__PURE__ */ o(Z, {
					variant: "body2",
					children: e.text
				}, e.id)), e.links.length > 0 && /* @__PURE__ */ o($, {
					sx: {
						display: "flex",
						flexWrap: "wrap",
						gap: 2,
						pt: .5
					},
					children: e.links.map((e) => /* @__PURE__ */ o(rl, {
						href: `${lu}${e.path}`,
						target: "_blank",
						rel: "noopener noreferrer",
						variant: "body2",
						children: e.label
					}, e.id))
				})]
			})
		}, e.id))
	});
}
function Du() {
	return /* @__PURE__ */ s(cc, {
		severity: "info",
		variant: "outlined",
		children: [/* @__PURE__ */ o(_c, { children: "Waiting for the bridge to report" }), /* @__PURE__ */ o(Z, {
			variant: "body2",
			children: "The app is installed but has not reported any state yet. This is normal right after enabling the app or before the first bridge activity. Status will appear here once the ProgettAI Bridge starts."
		})]
	});
}
function Ou(e) {
	return /* @__PURE__ */ s(cc, {
		severity: "warning",
		variant: "outlined",
		children: [/* @__PURE__ */ o(_c, { children: "Could not load status" }), /* @__PURE__ */ o(Z, {
			variant: "body2",
			children: e.message
		})]
	});
}
function ku(e) {
	let { connection: t } = e.snapshot;
	return t.connected ? /* @__PURE__ */ o(gu, {
		title: "Connection",
		children: /* @__PURE__ */ s(Ol, {
			spacing: 1.5,
			children: [
				/* @__PURE__ */ s($, {
					sx: {
						display: "flex",
						alignItems: "center",
						gap: 1,
						flexWrap: "wrap"
					},
					children: [/* @__PURE__ */ o(wc, {
						label: "Connected",
						size: "small",
						color: "success"
					}), /* @__PURE__ */ o(Z, {
						variant: "subtitle1",
						sx: { fontWeight: 600 },
						children: t.name
					})]
				}),
				/* @__PURE__ */ o(_u, {
					label: "Project id",
					value: t.projectId
				}),
				/* @__PURE__ */ o(_u, {
					label: "Connected at",
					value: pu(t.connectedAt)
				}),
				/* @__PURE__ */ o(Xc, {}),
				/* @__PURE__ */ s($, { children: [/* @__PURE__ */ o(Z, {
					variant: "body2",
					sx: {
						fontWeight: 600,
						mb: .75
					},
					children: "Capabilities"
				}), /* @__PURE__ */ o(vu, {
					items: t.capabilities,
					emptyLabel: "None advertised"
				})] }),
				/* @__PURE__ */ s($, { children: [/* @__PURE__ */ o(Z, {
					variant: "body2",
					sx: {
						fontWeight: 600,
						mb: .75
					},
					children: "Skills"
				}), /* @__PURE__ */ o(vu, {
					items: t.skills,
					emptyLabel: "None advertised"
				})] })
			]
		})
	}) : /* @__PURE__ */ o(gu, {
		title: "Connection",
		children: /* @__PURE__ */ s(Ol, {
			spacing: 1,
			children: [/* @__PURE__ */ o($, {
				sx: {
					display: "flex",
					alignItems: "center",
					gap: 1
				},
				children: /* @__PURE__ */ o(wc, {
					label: "Not connected",
					size: "small",
					color: "default"
				})
			}), /* @__PURE__ */ o(Z, {
				variant: "body2",
				sx: { color: "text.secondary" },
				children: "No business is selected. Discover businesses and connect to one to browse its catalog."
			})]
		})
	});
}
function Au(e) {
	let { config: t, session: n } = e.snapshot;
	return /* @__PURE__ */ o(gu, {
		title: "Configuration",
		children: /* @__PURE__ */ s(Ol, {
			spacing: 1.25,
			children: [
				/* @__PURE__ */ o(_u, {
					label: "Signing key",
					value: t.keyConfigured ? /* @__PURE__ */ o(wc, {
						label: "Configured (P-256)",
						size: "small",
						color: "success",
						variant: "outlined"
					}) : /* @__PURE__ */ o(wc, {
						label: "Not configured",
						size: "small",
						color: "warning",
						variant: "outlined"
					})
				}),
				/* @__PURE__ */ o(_u, {
					label: "Key id (thumbprint)",
					value: t.keyId || "—"
				}),
				/* @__PURE__ */ o(_u, {
					label: "Project id",
					value: t.projectId
				}),
				/* @__PURE__ */ o(_u, {
					label: "Bridge URL",
					value: t.bridgeUrl
				}),
				/* @__PURE__ */ o(_u, {
					label: "Profile URL",
					value: t.profileUrl
				}),
				/* @__PURE__ */ o(_u, {
					label: "Session",
					value: n.initialized ? `Initialized (${n.reinitCount} reinit${n.reinitCount === 1 ? "" : "s"})` : "Not initialized"
				}),
				/* @__PURE__ */ o(Xc, {}),
				/* @__PURE__ */ o(cc, {
					severity: "info",
					variant: "outlined",
					sx: { mt: .5 },
					children: /* @__PURE__ */ o(Z, {
						variant: "body2",
						children: cu
					})
				})
			]
		})
	});
}
function ju(e) {
	let t = [...e.snapshot.recentInvocations].reverse();
	return /* @__PURE__ */ o(gu, {
		title: "Recent invocations",
		children: t.length === 0 ? /* @__PURE__ */ o(Z, {
			variant: "body2",
			sx: {
				color: "text.secondary",
				fontStyle: "italic"
			},
			children: "No skills have been invoked yet."
		}) : /* @__PURE__ */ s(Pl, {
			size: "small",
			children: [/* @__PURE__ */ o(Ql, { children: /* @__PURE__ */ s(iu, { children: [
				/* @__PURE__ */ o(Kl, { children: "Skill" }),
				/* @__PURE__ */ o(Kl, { children: "When" }),
				/* @__PURE__ */ o(Kl, {
					align: "right",
					children: "Duration"
				}),
				/* @__PURE__ */ o(Kl, { children: "Status" })
			] }) }), /* @__PURE__ */ o(Vl, { children: t.map((e, t) => /* @__PURE__ */ s(iu, { children: [
				/* @__PURE__ */ o(Kl, {
					sx: { wordBreak: "break-all" },
					children: e.skillId
				}),
				/* @__PURE__ */ o(Kl, { children: pu(e.at) }),
				/* @__PURE__ */ o(Kl, {
					align: "right",
					children: mu(e.durationMs)
				}),
				/* @__PURE__ */ o(Kl, { children: e.status === "ok" ? /* @__PURE__ */ o(wc, {
					label: "ok",
					size: "small",
					color: "success",
					variant: "outlined"
				}) : /* @__PURE__ */ o(wc, {
					label: e.errorCode ?? "error",
					size: "small",
					color: "error",
					variant: "outlined"
				}) })
			] }, `${e.skillId}-${e.at}-${t}`)) })]
		})
	});
}
function Mu(e) {
	let t = [...e.snapshot.discoveredBusinesses].reverse();
	return /* @__PURE__ */ o(gu, {
		title: "Discovered businesses",
		children: t.length === 0 ? /* @__PURE__ */ o(Z, {
			variant: "body2",
			sx: {
				color: "text.secondary",
				fontStyle: "italic"
			},
			children: "No businesses have been discovered yet."
		}) : /* @__PURE__ */ o(Ol, {
			spacing: 1.5,
			divider: /* @__PURE__ */ o(Xc, { flexItem: !0 }),
			children: t.map((e, t) => /* @__PURE__ */ s($, { children: [
				/* @__PURE__ */ s($, {
					sx: {
						display: "flex",
						alignItems: "baseline",
						gap: 1,
						flexWrap: "wrap"
					},
					children: [/* @__PURE__ */ o(Z, {
						variant: "subtitle2",
						sx: { fontWeight: 600 },
						children: e.name
					}), /* @__PURE__ */ s(Z, {
						variant: "caption",
						sx: { color: "text.secondary" },
						children: ["last seen ", pu(e.lastSeen)]
					})]
				}),
				/* @__PURE__ */ o(Z, {
					variant: "caption",
					sx: {
						color: "text.secondary",
						wordBreak: "break-all"
					},
					children: e.projectId
				}),
				/* @__PURE__ */ o($, {
					sx: { mt: .75 },
					children: /* @__PURE__ */ o(vu, {
						items: e.capabilities,
						emptyLabel: "No capabilities advertised"
					})
				})
			] }, `${e.projectId}-${t}`))
		})
	});
}
function Nu(e) {
	return /* @__PURE__ */ s(Ol, {
		spacing: 2,
		children: [
			/* @__PURE__ */ o(ku, { snapshot: e.snapshot }),
			/* @__PURE__ */ o(Au, { snapshot: e.snapshot }),
			/* @__PURE__ */ o(ju, { snapshot: e.snapshot }),
			/* @__PURE__ */ o(Mu, { snapshot: e.snapshot })
		]
	});
}
function Pu(e) {
	let t = e.recentInvocations.at(-1);
	return t?.status === "error" && t.errorCode === "BRIDGE_AUTH_FAILED";
}
function Fu(e, t) {
	return e.startup?.outcome === "config_invalid" ? !1 : t?.config.keyConfigured ? !0 : e.configPresent;
}
function Iu(e, t) {
	return e.misplacedConfig ? /* @__PURE__ */ o(xu, { dataDir: e.dataDir }) : e.startup?.outcome === "config_invalid" ? /* @__PURE__ */ o(Cu, {
		startup: e.startup,
		dataDir: e.dataDir
	}) : Fu(e, t) ? t && Pu(t) ? /* @__PURE__ */ o(wu, {}) : t ? /* @__PURE__ */ s(Ol, {
		spacing: 2,
		children: [/* @__PURE__ */ o(Tu, {
			meta: e,
			snapshot: t
		}), /* @__PURE__ */ o(Nu, { snapshot: t })]
	}) : /* @__PURE__ */ o(Du, {}) : /* @__PURE__ */ o(bu, { dataDir: e.dataDir });
}
function Lu(e) {
	switch (e.kind) {
		case "loading": return /* @__PURE__ */ s($, {
			sx: {
				display: "flex",
				alignItems: "center",
				gap: 1.5,
				py: 4
			},
			children: [/* @__PURE__ */ o(Ws, { size: 20 }), /* @__PURE__ */ o(Z, {
				variant: "body2",
				sx: { color: "text.secondary" },
				children: "Loading status…"
			})]
		});
		case "error": return /* @__PURE__ */ o(Ou, { message: e.message });
		case "not-published": return /* @__PURE__ */ s(Ol, {
			spacing: 2,
			children: [Iu(e.meta, null), /* @__PURE__ */ o(Eu, {})]
		});
		case "snapshot": return /* @__PURE__ */ s(Ol, {
			spacing: 2,
			children: [Iu(e.meta, e.snapshot), /* @__PURE__ */ o(Eu, {})]
		});
	}
}
function Ru() {
	let e = a(), [t, n] = i({ kind: "loading" });
	return r(() => {
		let t = !1;
		async function r() {
			try {
				let r = await e.get(su);
				if (t) return;
				let i = {
					dataDir: r.dataDir,
					configPresent: r.configPresent,
					misplacedConfig: r.misplacedConfig,
					startup: r.startup
				};
				au(r) ? n({
					kind: "not-published",
					meta: i
				}) : n({
					kind: "snapshot",
					meta: i,
					snapshot: r
				});
			} catch (e) {
				if (t) return;
				let r = e instanceof Error ? e.message : "The status service is unavailable.";
				n({
					kind: "error",
					message: r
				});
			}
		}
		return r(), () => {
			t = !0;
		};
	}, [e]), /* @__PURE__ */ s($, {
		sx: {
			p: {
				xs: 2,
				sm: 3
			},
			maxWidth: 900,
			mx: "auto"
		},
		children: [/* @__PURE__ */ o(Z, {
			variant: "h5",
			sx: {
				mb: 2,
				fontWeight: 700
			},
			children: "ProgettAI Commerce"
		}), Lu(t)]
	});
}
//#endregion
export { Ru as default, Lu as renderBody, Iu as renderConfiguredBody };
