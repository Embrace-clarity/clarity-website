var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */ !function(t, e) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t);
    } : e(t);
}("undefined" != typeof window ? window : this, function(t, e) {
    var n = [], i = t.document, r = n.slice, o = n.concat, s = n.push, a = n.indexOf, u = {}, c = u.toString, l = u.hasOwnProperty, h = {}, f = "2.2.3", d = function t(e, n) {
        return new t.fn.init(e, n);
    }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, g = /^-ms-/, m = /-([\da-z])/gi, v = function(t, e) {
        return e.toUpperCase();
    };
    function y(t) {
        var e = !!t && "length" in t && t.length, n = d.type(t);
        return "function" !== n && !d.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }
    d.fn = d.prototype = {
        jquery: f,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this);
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : r.call(this);
        },
        pushStack: function(t) {
            var e = d.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e;
        },
        each: function(t) {
            return d.each(this, t);
        },
        map: function(t) {
            return this.pushStack(d.map(this, function(e, n) {
                return t.call(e, n, e);
            }));
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, d.extend = d.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (void 0 === s ? "undefined" : _typeof(s)) || d.isFunction(s) || (s = {}), 
        a === u && (s = this, a--); u > a; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], s !== (i = t[e]) && (c && i && (d.isPlainObject(i) || (r = d.isArray(i))) ? (r ? (r = !1, 
        o = n && d.isArray(n) ? n : []) : o = n && d.isPlainObject(n) ? n : {}, s[e] = d.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s;
    }, d.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t);
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === d.type(t);
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window;
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !d.isArray(t) && e - parseFloat(e) + 1 >= 0;
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== d.type(t) || t.nodeType || d.isWindow(t)) return !1;
            if (t.constructor && !l.call(t, "constructor") && !l.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t) ;
            return void 0 === e || l.call(t, e);
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        type: function(t) {
            return null == t ? t + "" : "object" == (void 0 === t ? "undefined" : _typeof(t)) || "function" == typeof t ? u[c.call(t)] || "object" : void 0 === t ? "undefined" : _typeof(t);
        },
        globalEval: function(t) {
            var e, n = eval;
            (t = d.trim(t)) && (1 === t.indexOf("use strict") ? ((e = i.createElement("script")).text = t, i.head.appendChild(e).parentNode.removeChild(e)) : n(t));
        },
        camelCase: function(t) {
            return t.replace(g, "ms-").replace(m, v);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e) {
            var n, i = 0;
            if (y(t)) for (n = t.length; n > i && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t;
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(p, "");
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (y(Object(t)) ? d.merge(n, "string" == typeof t ? [ t ] : t) : s.call(n, t)), n;
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : a.call(e, t, n);
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t;
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; o > r; r++) !e(t[r], r) !== s && i.push(t[r]);
            return i;
        },
        map: function(t, e, n) {
            var i, r, s = 0, a = [];
            if (y(t)) for (i = t.length; i > s; s++) null != (r = e(t[s], s, n)) && a.push(r); else for (s in t) null != (r = e(t[s], s, n)) && a.push(r);
            return o.apply([], a);
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            return "string" == typeof e && (n = t[e], e = t, t = n), d.isFunction(t) ? (i = r.call(arguments, 2), 
            (o = function() {
                return t.apply(e || this, i.concat(r.call(arguments)));
            }).guid = t.guid = t.guid || d.guid++, o) : void 0;
        },
        now: Date.now,
        support: h
    }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        u["[object " + e + "]"] = e.toLowerCase();
    });
    var b = function(t) {
        var e, n, i, r, o, s, a, u, c, l, h, f, d, p, g, m, v, y, b, w = "sizzle" + 1 * new Date(), x = t.document, _ = 0, T = 0, C = ot(), k = ot(), S = ot(), E = function(t, e) {
            return t === e && (h = !0), 0;
        }, A = 1 << 31, N = {}.hasOwnProperty, I = [], P = I.pop, M = I.push, D = I.push, O = I.slice, H = function(t, e) {
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
            return -1;
        }, j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", F = "\\[" + L + "*(" + W + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + L + "*\\]", R = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", q = new RegExp(L + "+", "g"), z = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), B = new RegExp("^" + L + "*," + L + "*"), $ = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(R), X = new RegExp("^" + W + "$"), Y = {
            ID: new RegExp("^#(" + W + ")"),
            CLASS: new RegExp("^\\.(" + W + ")"),
            TAG: new RegExp("^(" + W + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + j + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, tt = /'|\\/g, et = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), nt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, it = function() {
            f();
        };
        try {
            D.apply(I = O.call(x.childNodes), x.childNodes), I[x.childNodes.length].nodeType;
        } catch (t) {
            D = {
                apply: I.length ? function(t, e) {
                    M.apply(t, O.call(e));
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; ) ;
                    t.length = n - 1;
                }
            };
        }
        function rt(t, e, i, r) {
            var o, a, c, l, h, p, v, y, _ = e && e.ownerDocument, T = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== T && 9 !== T && 11 !== T) return i;
            if (!r && ((e ? e.ownerDocument || e : x) !== d && f(e), e = e || d, g)) {
                if (11 !== T && (p = Z.exec(t))) if (o = p[1]) {
                    if (9 === T) {
                        if (!(c = e.getElementById(o))) return i;
                        if (c.id === o) return i.push(c), i;
                    } else if (_ && (c = _.getElementById(o)) && b(e, c) && c.id === o) return i.push(c), i;
                } else {
                    if (p[2]) return D.apply(i, e.getElementsByTagName(t)), i;
                    if ((o = p[3]) && n.getElementsByClassName && e.getElementsByClassName) return D.apply(i, e.getElementsByClassName(o)), 
                    i;
                }
                if (n.qsa && !S[t + " "] && (!m || !m.test(t))) {
                    if (1 !== T) _ = e, y = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((l = e.getAttribute("id")) ? l = l.replace(tt, "\\$&") : e.setAttribute("id", l = w), a = (v = s(t)).length, 
                        h = X.test(l) ? "#" + l : "[id='" + l + "']"; a--; ) v[a] = h + " " + gt(v[a]);
                        y = v.join(","), _ = K.test(t) && dt(e.parentNode) || e;
                    }
                    if (y) try {
                        return D.apply(i, _.querySelectorAll(y)), i;
                    } catch (t) {} finally {
                        l === w && e.removeAttribute("id");
                    }
                }
            }
            return u(t.replace(z, "$1"), e, i, r);
        }
        function ot() {
            var t = [];
            return function e(n, r) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r;
            };
        }
        function st(t) {
            return t[w] = !0, t;
        }
        function at(t) {
            var e = d.createElement("div");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function ut(t, e) {
            for (var n = t.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = e;
        }
        function ct(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || A) - (~t.sourceIndex || A);
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === e) return -1;
            return t ? 1 : -1;
        }
        function lt(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function ht(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }
        function ft(t) {
            return st(function(e) {
                return e = +e, st(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--; ) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
                });
            });
        }
        function dt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in n = rt.support = {}, o = rt.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, f = rt.setDocument = function(t) {
            var e, r, s = t ? t.ownerDocument || t : x;
            return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", it, !1) : r.attachEvent && r.attachEvent("onunload", it)), 
            n.attributes = at(function(t) {
                return t.className = "i", !t.getAttribute("className");
            }), n.getElementsByTagName = at(function(t) {
                return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length;
            }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = at(function(t) {
                return p.appendChild(t).id = w, !d.getElementsByName || !d.getElementsByName(w).length;
            }), n.getById ? (i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n = e.getElementById(t);
                    return n ? [ n ] : [];
                }
            }, i.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }) : (delete i.find.ID, i.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e;
                };
            }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
            } : function(t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && g ? e.getElementsByClassName(t) : void 0;
            }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (at(function(t) {
                p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + j + ")"), 
                t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), 
                t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]");
            }), at(function(t) {
                var e = d.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), 
                t.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), 
                m.push(",.*:");
            })), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && at(function(t) {
                n.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", R);
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(p.compareDocumentPosition), 
            b = e || J.test(p.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, E = e ? function(t, e) {
                if (t === e) return h = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === x && b(x, t) ? -1 : e === d || e.ownerDocument === x && b(x, e) ? 1 : l ? H(l, t) - H(l, e) : 0 : 4 & i ? -1 : 1);
            } : function(t, e) {
                if (t === e) return h = !0, 0;
                var n, i = 0, r = t.parentNode, o = e.parentNode, s = [ t ], a = [ e ];
                if (!r || !o) return t === d ? -1 : e === d ? 1 : r ? -1 : o ? 1 : l ? H(l, t) - H(l, e) : 0;
                if (r === o) return ct(t, e);
                for (n = t; n = n.parentNode; ) s.unshift(n);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (;s[i] === a[i]; ) i++;
                return i ? ct(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0;
            }, d) : d;
        }, rt.matches = function(t, e) {
            return rt(t, null, null, e);
        }, rt.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== d && f(t), e = e.replace(U, "='$1']"), n.matchesSelector && g && !S[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                var i = y.call(t, e);
                if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
            } catch (t) {}
            return rt(e, d, null, [ t ]).length > 0;
        }, rt.contains = function(t, e) {
            return (t.ownerDocument || t) !== d && f(t), b(t, e);
        }, rt.attr = function(t, e) {
            (t.ownerDocument || t) !== d && f(t);
            var r = i.attrHandle[e.toLowerCase()], o = r && N.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null;
        }, rt.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, rt.uniqueSort = function(t) {
            var e, i = [], r = 0, o = 0;
            if (h = !n.detectDuplicates, l = !n.sortStable && t.slice(0), t.sort(E), h) {
                for (;e = t[o++]; ) e === t[o] && (r = i.push(o));
                for (;r--; ) t.splice(i[r], 1);
            }
            return l = null, t;
        }, r = rt.getText = function(t) {
            var e, n = "", i = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
                } else if (3 === o || 4 === o) return t.nodeValue;
            } else for (;e = t[i++]; ) n += r(e);
            return n;
        }, (i = rt.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), 
                    t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), 
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t;
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), 
                    t[2] = n.slice(0, e)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = C[t + " "];
                    return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && C(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, e, n) {
                    return function(i) {
                        var r = rt.attr(i, t);
                        return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode;
                    } : function(e, n, u) {
                        var c, l, h, f, d, p, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !u && !a, b = !1;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (f = e; f = f[g]; ) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    p = g = "only" === t && !p && "nextSibling";
                                }
                                return !0;
                            }
                            if (p = [ s ? m.firstChild : m.lastChild ], s && y) {
                                for (b = (d = (c = (l = (h = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === _ && c[1]) && c[2], 
                                f = d && m.childNodes[d]; f = ++d && f && f[g] || (b = d = 0) || p.pop(); ) if (1 === f.nodeType && ++b && f === e) {
                                    l[t] = [ _, d, b ];
                                    break;
                                }
                            } else if (y && (b = d = (c = (l = (h = (f = e)[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === _ && c[1]), 
                            !1 === b) for (;(f = ++d && f && f[g] || (b = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((l = (h = f[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] = [ _, b ]), 
                            f !== e)); ) ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0;
                        }
                    };
                },
                PSEUDO: function(t, e) {
                    var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                    return r[w] ? r(e) : r.length > 1 ? (n = [ t, t, "", e ], i.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, n) {
                        for (var i, o = r(t, e), s = o.length; s--; ) t[i = H(t, o[s])] = !(n[i] = o[s]);
                    }) : function(t) {
                        return r(t, 0, n);
                    }) : r;
                }
            },
            pseudos: {
                not: st(function(t) {
                    var e = [], n = [], i = a(t.replace(z, "$1"));
                    return i[w] ? st(function(t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                    }) : function(t, r, o) {
                        return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop();
                    };
                }),
                has: st(function(t) {
                    return function(e) {
                        return rt(t, e).length > 0;
                    };
                }),
                contains: st(function(t) {
                    return t = t.replace(et, nt), function(e) {
                        return (e.textContent || e.innerText || r(e)).indexOf(t) > -1;
                    };
                }),
                lang: st(function(t) {
                    return X.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(), function(e) {
                        var n;
                        do {
                            if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id;
                },
                root: function(t) {
                    return t === p;
                },
                focus: function(t) {
                    return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: function(t) {
                    return !1 === t.disabled;
                },
                disabled: function(t) {
                    return !0 === t.disabled;
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(t) {
                    return !i.pseudos.empty(t);
                },
                header: function(t) {
                    return Q.test(t.nodeName);
                },
                input: function(t) {
                    return G.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: ft(function() {
                    return [ 0 ];
                }),
                last: ft(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: ft(function(t, e, n) {
                    return [ 0 > n ? n + e : n ];
                }),
                even: ft(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t;
                }),
                odd: ft(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t;
                }),
                lt: ft(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
                    return t;
                }),
                gt: ft(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
                    return t;
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[e] = lt(e);
        for (e in {
            submit: !0,
            reset: !0
        }) i.pseudos[e] = ht(e);
        function pt() {}
        function gt(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i;
        }
        function mt(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, o = T++;
            return e.first ? function(e, n, o) {
                for (;e = e[i]; ) if (1 === e.nodeType || r) return t(e, n, o);
            } : function(e, n, s) {
                var a, u, c, l = [ _, o ];
                if (s) {
                    for (;e = e[i]; ) if ((1 === e.nodeType || r) && t(e, n, s)) return !0;
                } else for (;e = e[i]; ) if (1 === e.nodeType || r) {
                    if ((a = (u = (c = e[w] || (e[w] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[i]) && a[0] === _ && a[1] === o) return l[2] = a[2];
                    if (u[i] = l, l[2] = t(e, n, s)) return !0;
                }
            };
        }
        function vt(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                return !0;
            } : t[0];
        }
        function yt(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, c = null != e; u > a; a++) (o = t[a]) && (n && !n(o, i, r) || (s.push(o), 
            c && e.push(a)));
            return s;
        }
        function bt(t, e, n, i, r, o) {
            return i && !i[w] && (i = bt(i)), r && !r[w] && (r = bt(r, o)), st(function(o, s, a, u) {
                var c, l, h, f = [], d = [], p = s.length, g = o || function(t, e, n) {
                    for (var i = 0, r = e.length; r > i; i++) rt(t, e[i], n);
                    return n;
                }(e || "*", a.nodeType ? [ a ] : a, []), m = !t || !o && e ? g : yt(g, f, t, a, u), v = n ? r || (o ? t : p || i) ? [] : s : m;
                if (n && n(m, v, a, u), i) for (c = yt(v, d), i(c, [], a, u), l = c.length; l--; ) (h = c[l]) && (v[d[l]] = !(m[d[l]] = h));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (c = [], l = v.length; l--; ) (h = v[l]) && c.push(m[l] = h);
                            r(null, v = [], c, u);
                        }
                        for (l = v.length; l--; ) (h = v[l]) && (c = r ? H(o, h) : f[l]) > -1 && (o[c] = !(s[c] = h));
                    }
                } else v = yt(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, u) : D.apply(s, v);
            });
        }
        function wt(t) {
            for (var e, n, r, o = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], u = s ? 1 : 0, l = mt(function(t) {
                return t === e;
            }, a, !0), h = mt(function(t) {
                return H(e, t) > -1;
            }, a, !0), f = [ function(t, n, i) {
                var r = !s && (i || n !== c) || ((e = n).nodeType ? l(t, n, i) : h(t, n, i));
                return e = null, r;
            } ]; o > u; u++) if (n = i.relative[t[u].type]) f = [ mt(vt(f), n) ]; else {
                if ((n = i.filter[t[u].type].apply(null, t[u].matches))[w]) {
                    for (r = ++u; o > r && !i.relative[t[r].type]; r++) ;
                    return bt(u > 1 && vt(f), u > 1 && gt(t.slice(0, u - 1).concat({
                        value: " " === t[u - 2].type ? "*" : ""
                    })).replace(z, "$1"), n, r > u && wt(t.slice(u, r)), o > r && wt(t = t.slice(r)), o > r && gt(t));
                }
                f.push(n);
            }
            return vt(f);
        }
        function xt(t, e) {
            var n = e.length > 0, r = t.length > 0, o = function(o, s, a, u, l) {
                var h, p, m, v = 0, y = "0", b = o && [], w = [], x = c, T = o || r && i.find.TAG("*", l), C = _ += null == x ? 1 : Math.random() || .1, k = T.length;
                for (l && (c = s === d || s || l); y !== k && null != (h = T[y]); y++) {
                    if (r && h) {
                        for (p = 0, s || h.ownerDocument === d || (f(h), a = !g); m = t[p++]; ) if (m(h, s || d, a)) {
                            u.push(h);
                            break;
                        }
                        l && (_ = C);
                    }
                    n && ((h = !m && h) && v--, o && b.push(h));
                }
                if (v += y, n && y !== v) {
                    for (p = 0; m = e[p++]; ) m(b, w, s, a);
                    if (o) {
                        if (v > 0) for (;y--; ) b[y] || w[y] || (w[y] = P.call(u));
                        w = yt(w);
                    }
                    D.apply(u, w), l && !o && w.length > 0 && v + e.length > 1 && rt.uniqueSort(u);
                }
                return l && (_ = C, c = x), b;
            };
            return n ? st(o) : o;
        }
        return pt.prototype = i.filters = i.pseudos, i.setFilters = new pt(), s = rt.tokenize = function(t, e) {
            var n, r, o, s, a, u, c, l = k[t + " "];
            if (l) return e ? 0 : l.slice(0);
            for (a = t, u = [], c = i.preFilter; a; ) {
                for (s in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = $.exec(a)) && (n = r.shift(), 
                o.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), a = a.slice(n.length)), i.filter) !(r = Y[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), 
                o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return e ? a.length : a ? rt.error(t) : k(t, u).slice(0);
        }, a = rt.compile = function(t, e) {
            var n, i = [], r = [], o = S[t + " "];
            if (!o) {
                for (e || (e = s(t)), n = e.length; n--; ) (o = wt(e[n]))[w] ? i.push(o) : r.push(o);
                (o = S(t, xt(r, i))).selector = t;
            }
            return o;
        }, u = rt.select = function(t, e, r, o) {
            var u, c, l, h, f, d = "function" == typeof t && t, p = !o && s(t = d.selector || t);
            if (r = r || [], 1 === p.length) {
                if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && n.getById && 9 === e.nodeType && g && i.relative[c[1].type]) {
                    if (!(e = (i.find.ID(l.matches[0].replace(et, nt), e) || [])[0])) return r;
                    d && (e = e.parentNode), t = t.slice(c.shift().value.length);
                }
                for (u = Y.needsContext.test(t) ? 0 : c.length; u-- && (l = c[u], !i.relative[h = l.type]); ) if ((f = i.find[h]) && (o = f(l.matches[0].replace(et, nt), K.test(c[0].type) && dt(e.parentNode) || e))) {
                    if (c.splice(u, 1), !(t = o.length && gt(c))) return D.apply(r, o), r;
                    break;
                }
            }
            return (d || a(t, p))(o, e, !g, r, !e || K.test(t) && dt(e.parentNode) || e), r;
        }, n.sortStable = w.split("").sort(E).join("") === w, n.detectDuplicates = !!h, f(), n.sortDetached = at(function(t) {
            return 1 & t.compareDocumentPosition(d.createElement("div"));
        }), at(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || ut("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), n.attributes && at(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || ut("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
        }), at(function(t) {
            return null == t.getAttribute("disabled");
        }) || ut(j, function(t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }), rt;
    }(t);
    d.find = b, d.expr = b.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = b.uniqueSort, 
    d.text = b.getText, d.isXMLDoc = b.isXML, d.contains = b.contains;
    var w = function(t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
            if (r && d(t).is(n)) break;
            i.push(t);
        }
        return i;
    }, x = function(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n;
    }, _ = d.expr.match.needsContext, T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, C = /^.[^:#\[\.,]*$/;
    function k(t, e, n) {
        if (d.isFunction(e)) return d.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n;
        });
        if (e.nodeType) return d.grep(t, function(t) {
            return t === e !== n;
        });
        if ("string" == typeof e) {
            if (C.test(e)) return d.filter(e, t, n);
            e = d.filter(e, t);
        }
        return d.grep(t, function(t) {
            return a.call(e, t) > -1 !== n;
        });
    }
    d.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? d.find.matchesSelector(i, t) ? [ i ] : [] : d.find.matches(t, d.grep(e, function(t) {
            return 1 === t.nodeType;
        }));
    }, d.fn.extend({
        find: function(t) {
            var e, n = this.length, i = [], r = this;
            if ("string" != typeof t) return this.pushStack(d(t).filter(function() {
                for (e = 0; n > e; e++) if (d.contains(r[e], this)) return !0;
            }));
            for (e = 0; n > e; e++) d.find(t, r[e], i);
            return (i = this.pushStack(n > 1 ? d.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t, 
            i;
        },
        filter: function(t) {
            return this.pushStack(k(this, t || [], !1));
        },
        not: function(t) {
            return this.pushStack(k(this, t || [], !0));
        },
        is: function(t) {
            return !!k(this, "string" == typeof t && _.test(t) ? d(t) : t || [], !1).length;
        }
    });
    var S, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(t, e, n) {
        var r, o;
        if (!t) return this;
        if (n = n || S, "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [ null, t, null ] : E.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof d ? e[0] : e, d.merge(this, d.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), 
                T.test(r[1]) && d.isPlainObject(e)) for (r in e) d.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this;
            }
            return (o = i.getElementById(r[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = i, 
            this.selector = t, this;
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : d.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(d) : (void 0 !== t.selector && (this.selector = t.selector, 
        this.context = t.context), d.makeArray(t, this));
    }).prototype = d.fn, S = d(i);
    var A = /^(?:parents|prev(?:Until|All))/, N = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function I(t, e) {
        for (;(t = t[e]) && 1 !== t.nodeType; ) ;
        return t;
    }
    d.fn.extend({
        has: function(t) {
            var e = d(t, this), n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++) if (d.contains(this, e[t])) return !0;
            });
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = _.test(t) || "string" != typeof t ? d(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, t))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? d.uniqueSort(o) : o);
        },
        index: function(t) {
            return t ? "string" == typeof t ? a.call(d(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(t, e))));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), d.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return w(t, "parentNode");
        },
        parentsUntil: function(t, e, n) {
            return w(t, "parentNode", n);
        },
        next: function(t) {
            return I(t, "nextSibling");
        },
        prev: function(t) {
            return I(t, "previousSibling");
        },
        nextAll: function(t) {
            return w(t, "nextSibling");
        },
        prevAll: function(t) {
            return w(t, "previousSibling");
        },
        nextUntil: function(t, e, n) {
            return w(t, "nextSibling", n);
        },
        prevUntil: function(t, e, n) {
            return w(t, "previousSibling", n);
        },
        siblings: function(t) {
            return x((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return x(t.firstChild);
        },
        contents: function(t) {
            return t.contentDocument || d.merge([], t.childNodes);
        }
    }, function(t, e) {
        d.fn[t] = function(n, i) {
            var r = d.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = d.filter(i, r)), this.length > 1 && (N[t] || d.uniqueSort(r), 
            A.test(t) && r.reverse()), this.pushStack(r);
        };
    });
    var P, M = /\S+/g;
    function D() {
        i.removeEventListener("DOMContentLoaded", D), t.removeEventListener("load", D), d.ready();
    }
    d.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return d.each(t.match(M) || [], function(t, n) {
                e[n] = !0;
            }), e;
        }(t) : d.extend({}, t);
        var e, n, i, r, o = [], s = [], a = -1, u = function() {
            for (r = t.once, i = e = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length, 
            n = !1);
            t.memory || (n = !1), e = !1, r && (o = n ? [] : "");
        }, c = {
            add: function() {
                return o && (n && !e && (a = o.length - 1, s.push(n)), function e(n) {
                    d.each(n, function(n, i) {
                        d.isFunction(i) ? t.unique && c.has(i) || o.push(i) : i && i.length && "string" !== d.type(i) && e(i);
                    });
                }(arguments), n && !e && u()), this;
            },
            remove: function() {
                return d.each(arguments, function(t, e) {
                    for (var n; (n = d.inArray(e, o, n)) > -1; ) o.splice(n, 1), a >= n && a--;
                }), this;
            },
            has: function(t) {
                return t ? d.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return r = s = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return r = s = [], n || (o = n = ""), this;
            },
            locked: function() {
                return !!r;
            },
            fireWith: function(t, n) {
                return r || (n = [ t, (n = n || []).slice ? n.slice() : n ], s.push(n), e || u()), this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return c;
    }, d.extend({
        Deferred: function(t) {
            var e = [ [ "resolve", "done", d.Callbacks("once memory"), "resolved" ], [ "reject", "fail", d.Callbacks("once memory"), "rejected" ], [ "notify", "progress", d.Callbacks("memory") ] ], n = "pending", i = {
                state: function() {
                    return n;
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var t = arguments;
                    return d.Deferred(function(n) {
                        d.each(e, function(e, o) {
                            var s = d.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && d.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? d.extend(t, i) : i;
                }
            }, r = {};
            return i.pipe = i.then, d.each(e, function(t, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this;
                }, r[o[0] + "With"] = s.fireWith;
            }), i.promise(r), t && t.call(r, r), r;
        },
        when: function(t) {
            var e, n, i, o = 0, s = r.call(arguments), a = s.length, u = 1 !== a || t && d.isFunction(t.promise) ? a : 0, c = 1 === u ? t : d.Deferred(), l = function(t, n, i) {
                return function(o) {
                    n[t] = this, i[t] = arguments.length > 1 ? r.call(arguments) : o, i === e ? c.notifyWith(n, i) : --u || c.resolveWith(n, i);
                };
            };
            if (a > 1) for (e = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) s[o] && d.isFunction(s[o].promise) ? s[o].promise().progress(l(o, n, e)).done(l(o, i, s)).fail(c.reject) : --u;
            return u || c.resolveWith(i, s), c.promise();
        }
    }), d.fn.ready = function(t) {
        return d.ready.promise().done(t), this;
    }, d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? d.readyWait++ : d.ready(!0);
        },
        ready: function(t) {
            (!0 === t ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== t && --d.readyWait > 0 || (P.resolveWith(i, [ d ]), 
            d.fn.triggerHandler && (d(i).triggerHandler("ready"), d(i).off("ready"))));
        }
    }), d.ready.promise = function(e) {
        return P || (P = d.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(d.ready) : (i.addEventListener("DOMContentLoaded", D), 
        t.addEventListener("load", D))), P.promise(e);
    }, d.ready.promise();
    var O = function t(e, n, i, r, o, s, a) {
        var u = 0, c = e.length, l = null == i;
        if ("object" === d.type(i)) for (u in o = !0, i) t(e, n, u, i[u], !0, s, a); else if (void 0 !== r && (o = !0, 
        d.isFunction(r) || (a = !0), l && (a ? (n.call(e, r), n = null) : (l = n, n = function(t, e, n) {
            return l.call(d(t), n);
        })), n)) for (;c > u; u++) n(e[u], i, a ? r : r.call(e[u], u, n(e[u], i)));
        return o ? e : l ? n.call(e) : c ? n(e[0], i) : s;
    }, H = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    function j() {
        this.expando = d.expando + j.uid++;
    }
    j.uid = 1, j.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando];
        },
        cache: function(t) {
            if (!H(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, H(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e;
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[e] = n; else for (i in e) r[i] = e[i];
            return r;
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e];
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (i = this.get(t, e)) ? i : this.get(t, d.camelCase(e)) : (this.set(t, e, n), 
            void 0 !== n ? n : e);
        },
        remove: function(t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t); else {
                    d.isArray(e) ? i = e.concat(e.map(d.camelCase)) : (r = d.camelCase(e), e in o ? i = [ e, r ] : i = (i = r) in o ? [ i ] : i.match(M) || []), 
                    n = i.length;
                    for (;n--; ) delete o[i[n]];
                }
                (void 0 === e || d.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !d.isEmptyObject(e);
        }
    };
    var L = new j(), W = new j(), F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, R = /[A-Z]/g;
    function q(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(R, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? d.parseJSON(n) : n);
            } catch (t) {}
            W.set(t, e, n);
        } else n = void 0;
        return n;
    }
    d.extend({
        hasData: function(t) {
            return W.hasData(t) || L.hasData(t);
        },
        data: function(t, e, n) {
            return W.access(t, e, n);
        },
        removeData: function(t, e) {
            W.remove(t, e);
        },
        _data: function(t, e, n) {
            return L.access(t, e, n);
        },
        _removeData: function(t, e) {
            L.remove(t, e);
        }
    }), d.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = W.get(o), 1 === o.nodeType && !L.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && (0 === (i = s[n].name).indexOf("data-") && (i = d.camelCase(i.slice(5)), 
                    q(o, i, r[i])));
                    L.set(o, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == (void 0 === t ? "undefined" : _typeof(t)) ? this.each(function() {
                W.set(this, t);
            }) : O(this, function(e) {
                var n, i;
                if (o && void 0 === e) {
                    if (void 0 !== (n = W.get(o, t) || W.get(o, t.replace(R, "-$&").toLowerCase()))) return n;
                    if (i = d.camelCase(t), void 0 !== (n = W.get(o, i))) return n;
                    if (void 0 !== (n = q(o, i, void 0))) return n;
                } else i = d.camelCase(t), this.each(function() {
                    var n = W.get(this, i);
                    W.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && W.set(this, t, e);
                });
            }, null, e, arguments.length > 1, null, !0);
        },
        removeData: function(t) {
            return this.each(function() {
                W.remove(this, t);
            });
        }
    }), d.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = L.get(t, e), n && (!i || d.isArray(n) ? i = L.access(t, e, d.makeArray(n)) : i.push(n)), 
            i || []) : void 0;
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = d.queue(t, e), i = n.length, r = n.shift(), o = d._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, 
            r.call(t, function() {
                d.dequeue(t, e);
            }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return L.get(t, n) || L.access(t, n, {
                empty: d.Callbacks("once memory").add(function() {
                    L.remove(t, [ e + "queue", n ]);
                })
            });
        }
    }), d.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? d.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = d.queue(this, t, e);
                d._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && d.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                d.dequeue(this, t);
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
            var n, i = 1, r = d.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--; ) (n = L.get(o[s], t + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), r.promise(e);
        }
    });
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, B = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"), $ = [ "Top", "Right", "Bottom", "Left" ], U = function(t, e) {
        return t = e || t, "none" === d.css(t, "display") || !d.contains(t.ownerDocument, t);
    };
    function V(t, e, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return d.css(t, e, "");
        }, u = a(), c = n && n[3] || (d.cssNumber[e] ? "" : "px"), l = (d.cssNumber[e] || "px" !== c && +u) && B.exec(d.css(t, e));
        if (l && l[3] !== c) {
            c = c || l[3], n = n || [], l = +u || 1;
            do {
                l /= o = o || ".5", d.style(t, e, l + c);
            } while (o !== (o = a() / u) && 1 !== o && --s);
        }
        return n && (l = +l || +u || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = l, 
        i.end = r)), r;
    }
    var X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, G = /^$|\/(?:java|ecma)script/i, Q = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function J(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && d.nodeName(t, e) ? d.merge([ t ], n) : n;
    }
    function Z(t, e) {
        for (var n = 0, i = t.length; i > n; n++) L.set(t[n], "globalEval", !e || L.get(e[n], "globalEval"));
    }
    Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
    var K = /<|&#?\w+;/;
    function tt(t, e, n, i, r) {
        for (var o, s, a, u, c, l, h = e.createDocumentFragment(), f = [], p = 0, g = t.length; g > p; p++) if ((o = t[p]) || 0 === o) if ("object" === d.type(o)) d.merge(f, o.nodeType ? [ o ] : o); else if (K.test(o)) {
            for (s = s || h.appendChild(e.createElement("div")), a = (Y.exec(o) || [ "", "" ])[1].toLowerCase(), 
            u = Q[a] || Q._default, s.innerHTML = u[1] + d.htmlPrefilter(o) + u[2], l = u[0]; l--; ) s = s.lastChild;
            d.merge(f, s.childNodes), (s = h.firstChild).textContent = "";
        } else f.push(e.createTextNode(o));
        for (h.textContent = "", p = 0; o = f[p++]; ) if (i && d.inArray(o, i) > -1) r && r.push(o); else if (c = d.contains(o.ownerDocument, o), 
        s = J(h.appendChild(o), "script"), c && Z(s), n) for (l = 0; o = s[l++]; ) G.test(o.type || "") && n.push(o);
        return h;
    }
    !function() {
        var t = i.createDocumentFragment().appendChild(i.createElement("div")), e = i.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), 
        t.appendChild(e), h.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", 
        h.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var et = /^key/, nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, it = /^([^.]*)(?:\.(.+)|)/;
    function rt() {
        return !0;
    }
    function ot() {
        return !1;
    }
    function st() {
        try {
            return i.activeElement;
        } catch (t) {}
    }
    function at(t, e, n, i, r, o) {
        var s, a;
        if ("object" == (void 0 === e ? "undefined" : _typeof(e))) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) at(t, a, n, i, e[a], o);
            return t;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, 
        i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ot; else if (!r) return t;
        return 1 === o && (s = r, (r = function(t) {
            return d().off(t), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = d.guid++)), t.each(function() {
            d.event.add(this, e, r, i, n);
        });
    }
    d.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, c, l, h, f, p, g, m, v = L.get(t);
            if (v) for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = d.guid++), (u = v.events) || (u = v.events = {}), 
            (s = v.handle) || (s = v.handle = function(e) {
                return void 0 !== d && d.event.triggered !== e.type ? d.event.dispatch.apply(t, arguments) : void 0;
            }), c = (e = (e || "").match(M) || [ "" ]).length; c--; ) p = m = (a = it.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), 
            p && (h = d.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = d.event.special[p] || {}, 
            l = d.extend({
                type: p,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && d.expr.match.needsContext.test(r),
                namespace: g.join(".")
            }, o), (f = u[p]) || ((f = u[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, g, s) || t.addEventListener && t.addEventListener(p, s)), 
            h.add && (h.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, l) : f.push(l), 
            d.event.global[p] = !0);
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, c, l, h, f, p, g, m, v = L.hasData(t) && L.get(t);
            if (v && (u = v.events)) {
                for (c = (e = (e || "").match(M) || [ "" ]).length; c--; ) if (p = m = (a = it.exec(e[c]) || [])[1], 
                g = (a[2] || "").split(".").sort(), p) {
                    for (h = d.event.special[p] || {}, f = u[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    s = o = f.length; o--; ) l = f[o], !r && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (f.splice(o, 1), 
                    l.selector && f.delegateCount--, h.remove && h.remove.call(t, l));
                    s && !f.length && (h.teardown && !1 !== h.teardown.call(t, g, v.handle) || d.removeEvent(t, p, v.handle), 
                    delete u[p]);
                } else for (p in u) d.event.remove(t, p + e[c], n, i, !0);
                d.isEmptyObject(u) && L.remove(t, "handle events");
            }
        },
        dispatch: function(t) {
            t = d.event.fix(t);
            var e, n, i, o, s, a = [], u = r.call(arguments), c = (L.get(this, "events") || {})[t.type] || [], l = d.event.special[t.type] || {};
            if (u[0] = t, t.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (a = d.event.handlers.call(this, t, c), e = 0; (o = a[e++]) && !t.isPropagationStopped(); ) for (t.currentTarget = o.elem, 
                n = 0; (s = o.handlers[n++]) && !t.isImmediatePropagationStopped(); ) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, 
                t.data = s.data, void 0 !== (i = ((d.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), 
                t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, u = t.target;
            if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== t.type)) {
                for (i = [], n = 0; a > n; n++) void 0 === i[r = (o = e[n]).selector + " "] && (i[r] = o.needsContext ? d(r, this).index(u) > -1 : d.find(r, this, null, [ u ]).length), 
                i[r] && i.push(o);
                i.length && s.push({
                    elem: u,
                    handlers: i
                });
            }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, o, s = e.button;
                return null == t.pageX && null != e.clientX && (r = (n = t.target.ownerDocument || i).documentElement, 
                o = n.body, t.pageX = e.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), 
                t.pageY = e.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), 
                t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t;
            }
        },
        fix: function(t) {
            if (t[d.expando]) return t;
            var e, n, r, o = t.type, s = t, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = nt.test(o) ? this.mouseHooks : et.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, 
            t = new d.Event(s), e = r.length; e--; ) t[n = r[e]] = s[n];
            return t.target || (t.target = i), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, s) : t;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== st() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === st() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), !1) : void 0;
                },
                _default: function(t) {
                    return d.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                }
            }
        }
    }, d.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n);
    }, d.Event = function(t, e) {
        return this instanceof d.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? rt : ot) : this.type = t, 
        e && d.extend(this, e), this.timeStamp = t && t.timeStamp || d.now(), void (this[d.expando] = !0)) : new d.Event(t, e);
    }, d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = rt, t && t.preventDefault();
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = rt, t && t.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = rt, t && t.stopImmediatePropagation(), this.stopPropagation();
        }
    }, d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        d.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget, r = t.handleObj;
                return i && (i === this || d.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), 
                t.type = e), n;
            }
        };
    }), d.fn.extend({
        on: function(t, e, n, i) {
            return at(this, t, e, n, i);
        },
        one: function(t, e, n, i) {
            return at(this, t, e, n, i, 1);
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, d(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == (void 0 === t ? "undefined" : _typeof(t))) {
                for (r in t) this.off(r, e, t[r]);
                return this;
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = ot), this.each(function() {
                d.event.remove(this, t, n, e);
            });
        }
    });
    var ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ct = /<script|<style|<link/i, lt = /checked\s*(?:[^=]|=\s*.checked.)/i, ht = /^true\/(.*)/, ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function dt(t, e) {
        return d.nodeName(t, "table") && d.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function pt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }
    function gt(t) {
        var e = ht.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function mt(t, e) {
        var n, i, r, o, s, a, u, c;
        if (1 === e.nodeType) {
            if (L.hasData(t) && (o = L.access(t), s = L.set(e, o), c = o.events)) for (r in delete s.handle, s.events = {}, 
            c) for (n = 0, i = c[r].length; i > n; n++) d.event.add(e, r, c[r][n]);
            W.hasData(t) && (a = W.access(t), u = d.extend({}, a), W.set(e, u));
        }
    }
    function vt(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && X.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
    }
    function yt(t, e, n, i) {
        e = o.apply([], e);
        var r, s, a, u, c, l, f = 0, p = t.length, g = p - 1, m = e[0], v = d.isFunction(m);
        if (v || p > 1 && "string" == typeof m && !h.checkClone && lt.test(m)) return t.each(function(r) {
            var o = t.eq(r);
            v && (e[0] = m.call(this, r, o.html())), yt(o, e, n, i);
        });
        if (p && (s = (r = tt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = s), 
        s || i)) {
            for (u = (a = d.map(J(r, "script"), pt)).length; p > f; f++) c = r, f !== g && (c = d.clone(c, !0, !0), 
            u && d.merge(a, J(c, "script"))), n.call(t[f], c, f);
            if (u) for (l = a[a.length - 1].ownerDocument, d.map(a, gt), f = 0; u > f; f++) c = a[f], G.test(c.type || "") && !L.access(c, "globalEval") && d.contains(l, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval(c.textContent.replace(ft, "")));
        }
        return t;
    }
    function bt(t, e, n) {
        for (var i, r = e ? d.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || d.cleanData(J(i)), 
        i.parentNode && (n && d.contains(i.ownerDocument, i) && Z(J(i, "script")), i.parentNode.removeChild(i));
        return t;
    }
    d.extend({
        htmlPrefilter: function(t) {
            return t.replace(ut, "<$1></$2>");
        },
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0), u = d.contains(t.ownerDocument, t);
            if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || d.isXMLDoc(t))) for (s = J(a), i = 0, 
            r = (o = J(t)).length; r > i; i++) vt(o[i], s[i]);
            if (e) if (n) for (o = o || J(t), s = s || J(a), i = 0, r = o.length; r > i; i++) mt(o[i], s[i]); else mt(t, a);
            return (s = J(a, "script")).length > 0 && Z(s, !u && J(t, "script")), a;
        },
        cleanData: function(t) {
            for (var e, n, i, r = d.event.special, o = 0; void 0 !== (n = t[o]); o++) if (H(n)) {
                if (e = n[L.expando]) {
                    if (e.events) for (i in e.events) r[i] ? d.event.remove(n, i) : d.removeEvent(n, i, e.handle);
                    n[L.expando] = void 0;
                }
                n[W.expando] && (n[W.expando] = void 0);
            }
        }
    }), d.fn.extend({
        domManip: yt,
        detach: function(t) {
            return bt(this, t, !0);
        },
        remove: function(t) {
            return bt(this, t);
        },
        text: function(t) {
            return O(this, function(t) {
                return void 0 === t ? d.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                });
            }, null, t, arguments.length);
        },
        append: function() {
            return yt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || dt(this, t).appendChild(t);
            });
        },
        prepend: function() {
            return yt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = dt(this, t);
                    e.insertBefore(t, e.firstChild);
                }
            });
        },
        before: function() {
            return yt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return yt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (d.cleanData(J(t, !1)), t.textContent = "");
            return this;
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return d.clone(this, t, e);
            });
        },
        html: function(t) {
            return O(this, function(t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ct.test(t) && !Q[(Y.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                    t = d.htmlPrefilter(t);
                    try {
                        for (;i > n; n++) 1 === (e = this[n] || {}).nodeType && (d.cleanData(J(e, !1)), e.innerHTML = t);
                        e = 0;
                    } catch (t) {}
                }
                e && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function() {
            var t = [];
            return yt(this, arguments, function(e) {
                var n = this.parentNode;
                d.inArray(this, t) < 0 && (d.cleanData(J(this)), n && n.replaceChild(e, this));
            }, t);
        }
    }), d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        d.fn[t] = function(t) {
            for (var n, i = [], r = d(t), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), 
            d(r[a])[e](n), s.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var wt, xt = {
        HTML: "block",
        BODY: "block"
    };
    function _t(t, e) {
        var n = d(e.createElement(t)).appendTo(e.body), i = d.css(n[0], "display");
        return n.detach(), i;
    }
    function Tt(t) {
        var e = i, n = xt[t];
        return n || ("none" !== (n = _t(t, e)) && n || ((e = (wt = (wt || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), 
        e.close(), n = _t(t, e), wt.detach()), xt[t] = n), n;
    }
    var Ct = /^margin/, kt = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"), St = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e);
    }, Et = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        for (o in r = n.apply(t, i || []), e) t.style[o] = s[o];
        return r;
    }, At = i.documentElement;
    function Nt(t, e, n) {
        var i, r, o, s, a = t.style;
        return "" !== (s = (n = n || St(t)) ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== s || d.contains(t.ownerDocument, t) || (s = d.style(t, e)), 
        n && !h.pixelMarginRight() && kt.test(s) && Ct.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, 
        a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s;
    }
    function It(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments);
            }
        };
    }
    !function() {
        var e, n, r, o, s = i.createElement("div"), a = i.createElement("div");
        if (a.style) {
            var u = function() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", At.appendChild(s);
                var i = t.getComputedStyle(a);
                e = "1%" !== i.top, o = "2px" === i.marginLeft, n = "4px" === i.width, a.style.marginRight = "50%", 
                r = "4px" === i.marginRight, At.removeChild(s);
            };
            a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === a.style.backgroundClip, 
            s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            s.appendChild(a), d.extend(h, {
                pixelPosition: function() {
                    return u(), e;
                },
                boxSizingReliable: function() {
                    return null == n && u(), n;
                },
                pixelMarginRight: function() {
                    return null == n && u(), r;
                },
                reliableMarginLeft: function() {
                    return null == n && u(), o;
                },
                reliableMarginRight: function() {
                    var e, n = a.appendChild(i.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    n.style.marginRight = n.style.width = "0", a.style.width = "1px", At.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), 
                    At.removeChild(s), a.removeChild(n), e;
                }
            });
        }
    }();
    var Pt = /^(none|table(?!-c[ea]).+)/, Mt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Dt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ot = [ "Webkit", "O", "Moz", "ms" ], Ht = i.createElement("div").style;
    function jt(t) {
        if (t in Ht) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = Ot.length; n--; ) if ((t = Ot[n] + e) in Ht) return t;
    }
    function Lt(t, e, n) {
        var i = B.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function Wt(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += d.css(t, n + $[o], !0, r)), 
        i ? ("content" === n && (s -= d.css(t, "padding" + $[o], !0, r)), "margin" !== n && (s -= d.css(t, "border" + $[o] + "Width", !0, r))) : (s += d.css(t, "padding" + $[o], !0, r), 
        "padding" !== n && (s += d.css(t, "border" + $[o] + "Width", !0, r)));
        return s;
    }
    function Ft(e, n, r) {
        var o = !0, s = "width" === n ? e.offsetWidth : e.offsetHeight, a = St(e), u = "border-box" === d.css(e, "boxSizing", !1, a);
        if (i.msFullscreenElement && t.top !== t && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[n])), 
        0 >= s || null == s) {
            if ((0 > (s = Nt(e, n, a)) || null == s) && (s = e.style[n]), kt.test(s)) return s;
            o = u && (h.boxSizingReliable() || s === e.style[n]), s = parseFloat(s) || 0;
        }
        return s + Wt(e, n, r || (u ? "border" : "content"), o, a) + "px";
    }
    function Rt(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) (i = t[s]).style && (o[s] = L.get(i, "olddisplay"), 
        n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && U(i) && (o[s] = L.access(i, "olddisplay", Tt(i.nodeName)))) : (r = U(i), 
        "none" === n && r || L.set(i, "olddisplay", r ? n : d.css(i, "display"))));
        for (s = 0; a > s; s++) (i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t;
    }
    function qt(t, e, n, i, r) {
        return new qt.prototype.init(t, e, n, i, r);
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Nt(t, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = d.camelCase(e), u = t.style;
                return e = d.cssProps[a] || (d.cssProps[a] = jt(a) || a), s = d.cssHooks[e] || d.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e] : ("string" === (o = void 0 === n ? "undefined" : _typeof(n)) && (r = B.exec(n)) && r[1] && (n = V(t, e, r), 
                o = "number"), void (null != n && n == n && ("number" === o && (n += r && r[3] || (d.cssNumber[a] ? "" : "px")), 
                h.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (u[e] = n))));
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = d.camelCase(e);
            return e = d.cssProps[a] || (d.cssProps[a] = jt(a) || a), (s = d.cssHooks[e] || d.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), 
            void 0 === r && (r = Nt(t, e, i)), "normal" === r && e in Dt && (r = Dt[e]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
    }), d.each([ "height", "width" ], function(t, e) {
        d.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Pt.test(d.css(t, "display")) && 0 === t.offsetWidth ? Et(t, Mt, function() {
                    return Ft(t, e, i);
                }) : Ft(t, e, i) : void 0;
            },
            set: function(t, n, i) {
                var r, o = i && St(t), s = i && Wt(t, e, i, "border-box" === d.css(t, "boxSizing", !1, o), o);
                return s && (r = B.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = d.css(t, e)), Lt(0, n, s);
            }
        };
    }), d.cssHooks.marginLeft = It(h.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(Nt(t, "marginLeft")) || t.getBoundingClientRect().left - Et(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), d.cssHooks.marginRight = It(h.reliableMarginRight, function(t, e) {
        return e ? Et(t, {
            display: "inline-block"
        }, Nt, [ t, "marginRight" ]) : void 0;
    }), d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        d.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > i; i++) r[t + $[i] + e] = o[i] || o[i - 2] || o[0];
                return r;
            }
        }, Ct.test(t) || (d.cssHooks[t + e].set = Lt);
    }), d.fn.extend({
        css: function(t, e) {
            return O(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (d.isArray(e)) {
                    for (i = St(t), r = e.length; r > s; s++) o[e[s]] = d.css(t, e[s], !1, i);
                    return o;
                }
                return void 0 !== n ? d.style(t, e, n) : d.css(t, e);
            }, t, e, arguments.length > 1);
        },
        show: function() {
            return Rt(this, !0);
        },
        hide: function() {
            return Rt(this);
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                U(this) ? d(this).show() : d(this).hide();
            });
        }
    }), d.Tween = qt, qt.prototype = {
        constructor: qt,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || d.easing._default, this.options = e, this.start = this.now = this.cur(), 
            this.end = i, this.unit = o || (d.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var t = qt.propHooks[this.prop];
            return t && t.get ? t.get(this) : qt.propHooks._default.get(this);
        },
        run: function(t) {
            var e, n = qt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = d.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : qt.propHooks._default.set(this), this;
        }
    }, qt.prototype.init.prototype = qt.prototype, qt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = d.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
            },
            set: function(t) {
                d.fx.step[t.prop] ? d.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[d.cssProps[t.prop]] && !d.cssHooks[t.prop] ? t.elem[t.prop] = t.now : d.style(t.elem, t.prop, t.now + t.unit);
            }
        }
    }, qt.propHooks.scrollTop = qt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, d.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing"
    }, d.fx = qt.prototype.init, d.fx.step = {};
    var zt, Bt, $t = /^(?:toggle|show|hide)$/, Ut = /queueHooks$/;
    function Vt() {
        return t.setTimeout(function() {
            zt = void 0;
        }), zt = d.now();
    }
    function Xt(t, e) {
        var n, i = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) r["margin" + (n = $[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r;
    }
    function Yt(t, e, n) {
        for (var i, r = (Gt.tweeners[e] || []).concat(Gt.tweeners["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, e, t)) return i;
    }
    function Gt(t, e, n) {
        var i, r, o = 0, s = Gt.prefilters.length, a = d.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (r) return !1;
            for (var e = zt || Vt(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; s > o; o++) c.tweens[o].run(i);
            return a.notifyWith(t, [ c, i, n ]), 1 > i && s ? n : (a.resolveWith(t, [ c ]), !1);
        }, c = a.promise({
            elem: t,
            props: d.extend({}, e),
            opts: d.extend(!0, {
                specialEasing: {},
                easing: d.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: zt || Vt(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = d.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i), i;
            },
            stop: function(e) {
                var n = 0, i = e ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; i > n; n++) c.tweens[n].run(1);
                return e ? (a.notifyWith(t, [ c, 1, 0 ]), a.resolveWith(t, [ c, e ])) : a.rejectWith(t, [ c, e ]), this;
            }
        }), l = c.props;
        for (function(t, e) {
            var n, i, r, o, s;
            for (n in t) if (r = e[i = d.camelCase(n)], o = t[n], d.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, 
            delete t[n]), (s = d.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], 
            e[n] = r); else e[i] = r;
        }(l, c.opts.specialEasing); s > o; o++) if (i = Gt.prefilters[o].call(c, t, l, c.opts)) return d.isFunction(i.stop) && (d._queueHooks(c.elem, c.opts.queue).stop = d.proxy(i.stop, i)), 
        i;
        return d.map(l, Yt, c), d.isFunction(c.opts.start) && c.opts.start.call(t, c), d.fx.timer(d.extend(u, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    d.Animation = d.extend(Gt, {
        tweeners: {
            "*": [ function(t, e) {
                var n = this.createTween(t, e);
                return V(n.elem, t, B.exec(e), n), n;
            } ]
        },
        tweener: function(t, e) {
            d.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.match(M);
            for (var n, i = 0, r = t.length; r > i; i++) n = t[i], Gt.tweeners[n] = Gt.tweeners[n] || [], Gt.tweeners[n].unshift(e);
        },
        prefilters: [ function(t, e, n) {
            var i, r, o, s, a, u, c, l = this, h = {}, f = t.style, p = t.nodeType && U(t), g = L.get(t, "fxshow");
            for (i in n.queue || (null == (a = d._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, 
            a.empty.fire = function() {
                a.unqueued || u();
            }), a.unqueued++, l.always(function() {
                l.always(function() {
                    a.unqueued--, d.queue(t, "fx").length || a.empty.fire();
                });
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
            "inline" === ("none" === (c = d.css(t, "display")) ? L.get(t, "olddisplay") || Tt(t.nodeName) : c) && "none" === d.css(t, "float") && (f.display = "inline-block")), 
            n.overflow && (f.overflow = "hidden", l.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
            })), e) if (r = e[i], $t.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    p = !0;
                }
                h[i] = g && g[i] || d.style(t, i);
            } else c = void 0;
            if (d.isEmptyObject(h)) "inline" === ("none" === c ? Tt(t.nodeName) : c) && (f.display = c); else for (i in g ? "hidden" in g && (p = g.hidden) : g = L.access(t, "fxshow", {}), 
            o && (g.hidden = !p), p ? d(t).show() : l.done(function() {
                d(t).hide();
            }), l.done(function() {
                var e;
                for (e in L.remove(t, "fxshow"), h) d.style(t, e, h[e]);
            }), h) s = Yt(p ? g[i] : 0, i, l), i in g || (g[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0));
        } ],
        prefilter: function(t, e) {
            e ? Gt.prefilters.unshift(t) : Gt.prefilters.push(t);
        }
    }), d.speed = function(t, e, n) {
        var i = t && "object" == (void 0 === t ? "undefined" : _typeof(t)) ? d.extend({}, t) : {
            complete: n || !n && e || d.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !d.isFunction(e) && e
        };
        return i.duration = d.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default, 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            d.isFunction(i.old) && i.old.call(this), i.queue && d.dequeue(this, i.queue);
        }, i;
    }, d.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i);
        },
        animate: function(t, e, n, i) {
            var r = d.isEmptyObject(t), o = d.speed(e, n, i), s = function() {
                var e = Gt(this, d.extend({}, t), o);
                (r || L.get(this, "finish")) && e.stop(!0);
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n);
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, r = null != t && t + "queueHooks", o = d.timers, s = L.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && Ut.test(r) && i(s[r]);
                for (r = o.length; r--; ) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), 
                e = !1, o.splice(r, 1));
                !e && n || d.dequeue(this, t);
            });
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = L.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = d.timers, s = i ? i.length : 0;
                for (n.finish = !0, d.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
                o.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
            });
        }
    }), d.each([ "toggle", "show", "hide" ], function(t, e) {
        var n = d.fn[e];
        d.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Xt(e, !0), t, i, r);
        };
    }), d.each({
        slideDown: Xt("show"),
        slideUp: Xt("hide"),
        slideToggle: Xt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        d.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i);
        };
    }), d.timers = [], d.fx.tick = function() {
        var t, e = 0, n = d.timers;
        for (zt = d.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || d.fx.stop(), zt = void 0;
    }, d.fx.timer = function(t) {
        d.timers.push(t), t() ? d.fx.start() : d.timers.pop();
    }, d.fx.interval = 13, d.fx.start = function() {
        Bt || (Bt = t.setInterval(d.fx.tick, d.fx.interval));
    }, d.fx.stop = function() {
        t.clearInterval(Bt), Bt = null;
    }, d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, d.fn.delay = function(e, n) {
        return e = d.fx && d.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(r);
            };
        });
    }, function() {
        var t = i.createElement("input"), e = i.createElement("select"), n = e.appendChild(i.createElement("option"));
        t.type = "checkbox", h.checkOn = "" !== t.value, h.optSelected = n.selected, e.disabled = !0, h.optDisabled = !n.disabled, 
        (t = i.createElement("input")).value = "t", t.type = "radio", h.radioValue = "t" === t.value;
    }();
    var Qt, Jt = d.expr.attrHandle;
    d.fn.extend({
        attr: function(t, e) {
            return O(this, d.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                d.removeAttr(this, t);
            });
        }
    }), d.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? d.prop(t, e, n) : (1 === o && d.isXMLDoc(t) || (e = e.toLowerCase(), 
            r = d.attrHooks[e] || (d.expr.match.bool.test(e) ? Qt : void 0)), void 0 !== n ? null === n ? void d.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), 
            n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = d.find.attr(t, e)) ? void 0 : i);
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!h.radioValue && "radio" === e && d.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e;
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0, o = e && e.match(M);
            if (o && 1 === t.nodeType) for (;n = o[r++]; ) i = d.propFix[n] || n, d.expr.match.bool.test(n) && (t[i] = !1), 
            t.removeAttribute(n);
        }
    }), Qt = {
        set: function(t, e, n) {
            return !1 === e ? d.removeAttr(t, n) : t.setAttribute(n, n), n;
        }
    }, d.each(d.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Jt[e] || d.find.attr;
        Jt[e] = function(t, e, i) {
            var r, o;
            return i || (o = Jt[e], Jt[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Jt[e] = o), r;
        };
    });
    var Zt = /^(?:input|select|textarea|button)$/i, Kt = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(t, e) {
            return O(this, d.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[d.propFix[t] || t];
            });
        }
    }), d.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && d.isXMLDoc(t) || (e = d.propFix[e] || e, r = d.propHooks[e]), 
            void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = d.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Zt.test(t.nodeName) || Kt.test(t.nodeName) && t.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (d.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
    }), d.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        d.propFix[this.toLowerCase()] = this;
    });
    var te = /[\t\r\n\f]/g;
    function ee(t) {
        return t.getAttribute && t.getAttribute("class") || "";
    }
    d.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, u = 0;
            if (d.isFunction(t)) return this.each(function(e) {
                d(this).addClass(t.call(this, e, ee(this)));
            });
            if ("string" == typeof t && t) for (e = t.match(M) || []; n = this[u++]; ) if (r = ee(n), i = 1 === n.nodeType && (" " + r + " ").replace(te, " ")) {
                for (s = 0; o = e[s++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = d.trim(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, u = 0;
            if (d.isFunction(t)) return this.each(function(e) {
                d(this).removeClass(t.call(this, e, ee(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(M) || []; n = this[u++]; ) if (r = ee(n), i = 1 === n.nodeType && (" " + r + " ").replace(te, " ")) {
                for (s = 0; o = e[s++]; ) for (;i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                r !== (a = d.trim(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(t, e) {
            var n = void 0 === t ? "undefined" : _typeof(t);
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : d.isFunction(t) ? this.each(function(n) {
                d(this).toggleClass(t.call(this, n, ee(this), e), e);
            }) : this.each(function() {
                var e, i, r, o;
                if ("string" === n) for (i = 0, r = d(this), o = t.match(M) || []; e = o[i++]; ) r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else void 0 !== t && "boolean" !== n || ((e = ee(this)) && L.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : L.get(this, "__className__") || ""));
            });
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + ee(n) + " ").replace(te, " ").indexOf(e) > -1) return !0;
            return !1;
        }
    });
    var ne = /\r/g, ie = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = d.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, d(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : d.isArray(r) && (r = d.map(r, function(t) {
                    return null == t ? "" : t + "";
                })), (e = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r));
            })) : r ? (e = d.valHooks[r.type] || d.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ne, "") : null == n ? "" : n : void 0;
        }
    }), d.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = d.find.attr(t, "value");
                    return null != e ? e : d.trim(d.text(t)).replace(ie, " ");
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++) if (((n = i[u]).selected || u === r) && (h.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                        if (e = d(n).val(), o) return e;
                        s.push(e);
                    }
                    return s;
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = d.makeArray(e), s = r.length; s--; ) ((i = r[s]).selected = d.inArray(d.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o;
                }
            }
        }
    }), d.each([ "radio", "checkbox" ], function() {
        d.valHooks[this] = {
            set: function(t, e) {
                return d.isArray(e) ? t.checked = d.inArray(d(t).val(), e) > -1 : void 0;
            }
        }, h.checkOn || (d.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var re = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(e, n, r, o) {
            var s, a, u, c, h, f, p, g = [ r || i ], m = l.call(e, "type") ? e.type : e, v = l.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !re.test(m + d.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), 
            v.sort()), h = m.indexOf(":") < 0 && "on" + m, (e = e[d.expando] ? e : new d.Event(m, "object" == (void 0 === e ? "undefined" : _typeof(e)) && e)).isTrigger = o ? 2 : 3, 
            e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = r), n = null == n ? [ e ] : d.makeArray(n, [ e ]), p = d.event.special[m] || {}, 
            o || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!o && !p.noBubble && !d.isWindow(r)) {
                    for (c = p.delegateType || m, re.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), 
                    u = a;
                    u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || t);
                }
                for (s = 0; (a = g[s++]) && !e.isPropagationStopped(); ) e.type = s > 1 ? c : p.bindType || m, (f = (L.get(a, "events") || {})[e.type] && L.get(a, "handle")) && f.apply(a, n), 
                (f = h && a[h]) && f.apply && H(a) && (e.result = f.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = m, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), n) || !H(r) || h && d.isFunction(r[m]) && !d.isWindow(r) && ((u = r[h]) && (r[h] = null), 
                d.event.triggered = m, r[m](), d.event.triggered = void 0, u && (r[h] = u)), e.result;
            }
        },
        simulate: function(t, e, n) {
            var i = d.extend(new d.Event(), n, {
                type: t,
                isSimulated: !0
            });
            d.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault();
        }
    }), d.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                d.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? d.event.trigger(t, e, n, !0) : void 0;
        }
    }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        d.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
        };
    }), d.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        }
    }), h.focusin = "onfocusin" in t, h.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            d.event.simulate(e, t.target, d.event.fix(t));
        };
        d.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this, r = L.access(i, e);
                r || i.addEventListener(t, n, !0), L.access(i, e, (r || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, r = L.access(i, e) - 1;
                r ? L.access(i, e, r) : (i.removeEventListener(t, n, !0), L.remove(i, e));
            }
        };
    });
    var oe = t.location, se = d.now(), ae = /\?/;
    d.parseJSON = function(t) {
        return JSON.parse(t + "");
    }, d.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + e), n;
    };
    var ue = /#.*$/, ce = /([?&])_=[^&]*/, le = /^(.*?):[ \t]*([^\r\n]*)$/gm, he = /^(?:GET|HEAD)$/, fe = /^\/\//, de = {}, pe = {}, ge = "*/".concat("*"), me = i.createElement("a");
    function ve(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, o = e.toLowerCase().match(M) || [];
            if (d.isFunction(n)) for (;i = o[r++]; ) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        };
    }
    function ye(t, e, n, i) {
        var r = {}, o = t === pe;
        function s(a) {
            var u;
            return r[a] = !0, d.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(u = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1);
            }), u;
        }
        return s(e.dataTypes[0]) || !r["*"] && s("*");
    }
    function be(t, e) {
        var n, i, r = d.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && d.extend(!0, t, i), t;
    }
    me.href = oe.href, d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(oe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ge,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? be(be(t, d.ajaxSettings), e) : be(d.ajaxSettings, t);
        },
        ajaxPrefilter: ve(de),
        ajaxTransport: ve(pe),
        ajax: function(e, n) {
            "object" == (void 0 === e ? "undefined" : _typeof(e)) && (n = e, e = void 0), n = n || {};
            var r, o, s, a, u, c, l, h, f = d.ajaxSetup({}, n), p = f.context || f, g = f.context && (p.nodeType || p.jquery) ? d(p) : d.event, m = d.Deferred(), v = d.Callbacks("once memory"), y = f.statusCode || {}, b = {}, w = {}, x = 0, _ = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === x) {
                        if (!a) for (a = {}; e = le.exec(s); ) a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null;
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return x || (t = w[n] = w[n] || t, b[t] = e), this;
                },
                overrideMimeType: function(t) {
                    return x || (f.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > x) for (e in t) y[e] = [ y[e], t[e] ]; else T.always(t[T.status]);
                    return this;
                },
                abort: function(t) {
                    var e = t || _;
                    return r && r.abort(e), C(0, e), this;
                }
            };
            if (m.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || oe.href) + "").replace(ue, "").replace(fe, oe.protocol + "//"), 
            f.type = n.method || n.type || f.method || f.type, f.dataTypes = d.trim(f.dataType || "*").toLowerCase().match(M) || [ "" ], 
            null == f.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = me.protocol + "//" + me.host != c.protocol + "//" + c.host;
                } catch (t) {
                    f.crossDomain = !0;
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = d.param(f.data, f.traditional)), 
            ye(de, f, n, T), 2 === x) return T;
            for (h in (l = d.event && f.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), 
            f.hasContent = !he.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (ae.test(o) ? "&" : "?") + f.data, 
            delete f.data), !1 === f.cache && (f.url = ce.test(o) ? o.replace(ce, "$1_=" + se++) : o + (ae.test(o) ? "&" : "?") + "_=" + se++)), 
            f.ifModified && (d.lastModified[o] && T.setRequestHeader("If-Modified-Since", d.lastModified[o]), d.etag[o] && T.setRequestHeader("If-None-Match", d.etag[o])), 
            (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), 
            T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ge + "; q=0.01" : "") : f.accepts["*"]), 
            f.headers) T.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === x)) return T.abort();
            for (h in _ = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) T[h](f[h]);
            if (r = ye(pe, f, n, T)) {
                if (T.readyState = 1, l && g.trigger("ajaxSend", [ T, f ]), 2 === x) return T;
                f.async && f.timeout > 0 && (u = t.setTimeout(function() {
                    T.abort("timeout");
                }, f.timeout));
                try {
                    x = 1, r.send(b, C);
                } catch (t) {
                    if (!(2 > x)) throw t;
                    C(-1, t);
                }
            } else C(-1, "No Transport");
            function C(e, n, i, a) {
                var c, h, b, w, _, C = n;
                2 !== x && (x = 2, u && t.clearTimeout(u), r = void 0, s = a || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, 
                i && (w = function(t, e, n) {
                    for (var i, r, o, s, a = t.contents, u = t.dataTypes; "*" === u[0]; ) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        u.unshift(r);
                        break;
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (r in n) {
                            if (!u[0] || t.converters[r + " " + u[0]]) {
                                o = r;
                                break;
                            }
                            s || (s = r);
                        }
                        o = o || s;
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
                }(f, T, i)), w = function(t, e, n, i) {
                    var r, o, s, a, u, c = {}, l = t.dataTypes.slice();
                    if (l[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (o = l.shift(); o; ) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), 
                    u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(s = c[u + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], l.unshift(a[1]));
                            break;
                        }
                        if (!0 !== s) if (s && t.throws) e = s(e); else try {
                            e = s(e);
                        } catch (t) {
                            return {
                                state: "parsererror",
                                error: s ? t : "No conversion from " + u + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: e
                    };
                }(f, w, T, c), c ? (f.ifModified && ((_ = T.getResponseHeader("Last-Modified")) && (d.lastModified[o] = _), 
                (_ = T.getResponseHeader("etag")) && (d.etag[o] = _)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, 
                h = w.data, c = !(b = w.error))) : (b = C, !e && C || (C = "error", 0 > e && (e = 0))), T.status = e, 
                T.statusText = (n || C) + "", c ? m.resolveWith(p, [ h, C, T ]) : m.rejectWith(p, [ T, C, b ]), T.statusCode(y), 
                y = void 0, l && g.trigger(c ? "ajaxSuccess" : "ajaxError", [ T, f, c ? h : b ]), v.fireWith(p, [ T, C ]), 
                l && (g.trigger("ajaxComplete", [ T, f ]), --d.active || d.event.trigger("ajaxStop")));
            }
            return T;
        },
        getJSON: function(t, e, n) {
            return d.get(t, e, n, "json");
        },
        getScript: function(t, e) {
            return d.get(t, void 0, e, "script");
        }
    }), d.each([ "get", "post" ], function(t, e) {
        d[e] = function(t, n, i, r) {
            return d.isFunction(n) && (r = r || i, i = n, n = void 0), d.ajax(d.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, d.isPlainObject(t) && t));
        };
    }), d._evalUrl = function(t) {
        return d.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        });
    }, d.fn.extend({
        wrapAll: function(t) {
            var e;
            return d.isFunction(t) ? this.each(function(e) {
                d(this).wrapAll(t.call(this, e));
            }) : (this[0] && (e = d(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), 
            e.map(function() {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                return t;
            }).append(this)), this);
        },
        wrapInner: function(t) {
            return d.isFunction(t) ? this.each(function(e) {
                d(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = d(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = d.isFunction(t);
            return this.each(function(n) {
                d(this).wrapAll(e ? t.call(this, n) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes);
            }).end();
        }
    }), d.expr.filters.hidden = function(t) {
        return !d.expr.filters.visible(t);
    }, d.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0;
    };
    var we = /%20/g, xe = /\[\]$/, _e = /\r?\n/g, Te = /^(?:submit|button|image|reset|file)$/i, Ce = /^(?:input|select|textarea|keygen)/i;
    function ke(t, e, n, i) {
        var r;
        if (d.isArray(e)) d.each(e, function(e, r) {
            n || xe.test(t) ? i(t, r) : ke(t + "[" + ("object" == (void 0 === r ? "undefined" : _typeof(r)) && null != r ? e : "") + "]", r, n, i);
        }); else if (n || "object" !== d.type(e)) i(t, e); else for (r in e) ke(t + "[" + r + "]", e[r], n, i);
    }
    d.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            e = d.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
        };
        if (void 0 === e && (e = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(t) || t.jquery && !d.isPlainObject(t)) d.each(t, function() {
            r(this.name, this.value);
        }); else for (n in t) ke(n, t[n], e, r);
        return i.join("&").replace(we, "+");
    }, d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = d.prop(this, "elements");
                return t ? d.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !d(this).is(":disabled") && Ce.test(this.nodeName) && !Te.test(t) && (this.checked || !X.test(t));
            }).map(function(t, e) {
                var n = d(this).val();
                return null == n ? null : d.isArray(n) ? d.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(_e, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: n.replace(_e, "\r\n")
                };
            }).get();
        }
    }), d.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    };
    var Se = {
        0: 200,
        1223: 204
    }, Ee = d.ajaxSettings.xhr();
    h.cors = !!Ee && "withCredentials" in Ee, h.ajax = Ee = !!Ee, d.ajaxTransport(function(e) {
        var n, i;
        return h.cors || Ee && !e.crossDomain ? {
            send: function(r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), 
                r) a.setRequestHeader(s, r[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Se[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null);
                } catch (t) {
                    if (n) throw t;
                }
            },
            abort: function() {
                n && n();
            }
        } : void 0;
    }), d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return d.globalEval(t), t;
            }
        }
    }), d.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), d.ajaxTransport("script", function(t) {
        var e, n;
        if (t.crossDomain) return {
            send: function(r, o) {
                e = d("<script>").prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function(t) {
                    e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type);
                }), i.head.appendChild(e[0]);
            },
            abort: function() {
                n && n();
            }
        };
    });
    var Ae = [], Ne = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ae.pop() || d.expando + "_" + se++;
            return this[t] = !0, t;
        }
    }), d.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = !1 !== e.jsonp && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = d.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Ne, "$1" + r) : !1 !== e.jsonp && (e.url += (ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), 
        e.converters["script json"] = function() {
            return s || d.error(r + " was not called"), s[0];
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments;
        }, i.always(function() {
            void 0 === o ? d(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Ae.push(r)), 
            s && d.isFunction(o) && o(s[0]), s = o = void 0;
        }), "script") : void 0;
    }), d.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || i;
        var r = T.exec(t), o = !n && [];
        return r ? [ e.createElement(r[1]) ] : (r = tt([ t ], e, o), o && o.length && d(o).remove(), d.merge([], r.childNodes));
    };
    var Ie = d.fn.load;
    function Pe(t) {
        return d.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    d.fn.load = function(t, e, n) {
        if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a > -1 && (i = d.trim(t.slice(a)), t = t.slice(0, a)), d.isFunction(e) ? (n = e, e = void 0) : e && "object" == (void 0 === e ? "undefined" : _typeof(e)) && (r = "POST"), 
        s.length > 0 && d.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? d("<div>").append(d.parseHTML(t)).find(i) : t);
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [ t.responseText, e, t ]);
            });
        }), this;
    }, d.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        d.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), d.expr.filters.animated = function(t) {
        return d.grep(d.timers, function(e) {
            return t === e.elem;
        }).length;
    }, d.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, c = d.css(t, "position"), l = d(t), h = {};
            "static" === c && (t.style.position = "relative"), a = l.offset(), o = d.css(t, "top"), u = d.css(t, "left"), 
            ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (s = (i = l.position()).top, r = i.left) : (s = parseFloat(o) || 0, 
            r = parseFloat(u) || 0), d.isFunction(e) && (e = e.call(t, n, d.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), 
            null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : l.css(h);
        }
    }, d.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                d.offset.setOffset(this, t, e);
            });
            var e, n, i = this[0], r = {
                top: 0,
                left: 0
            }, o = i && i.ownerDocument;
            return o ? (e = o.documentElement, d.contains(e, i) ? (r = i.getBoundingClientRect(), n = Pe(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0;
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === d.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), d.nodeName(t[0], "html") || (i = t.offset()), i.top += d.css(t[0], "borderTopWidth", !0), 
                i.left += d.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - d.css(n, "marginTop", !0),
                    left: e.left - i.left - d.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === d.css(t, "position"); ) t = t.offsetParent;
                return t || At;
            });
        }
    }), d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        d.fn[t] = function(i) {
            return O(this, function(t, i, r) {
                var o = Pe(t);
                return void 0 === r ? o ? o[e] : t[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r);
            }, t, i, arguments.length);
        };
    }), d.each([ "top", "left" ], function(t, e) {
        d.cssHooks[e] = It(h.pixelPosition, function(t, n) {
            return n ? (n = Nt(t, e), kt.test(n) ? d(t).position()[e] + "px" : n) : void 0;
        });
    }), d.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        d.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            d.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === r ? "margin" : "border");
                return O(this, function(e, n, i) {
                    var r;
                    return d.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, 
                    Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? d.css(e, n, s) : d.style(e, n, i, s);
                }, e, o ? i : void 0, o, null);
            };
        });
    }), d.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i);
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
        },
        size: function() {
            return this.length;
        }
    }), d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return d;
    });
    var Me = t.jQuery, De = t.$;
    return d.noConflict = function(e) {
        return t.$ === d && (t.$ = De), e && t.jQuery === d && (t.jQuery = Me), d;
    }, e || (t.jQuery = t.$ = d), d;
}), 
//     Underscore may be freely distributed under the MIT license.
function() {
    var t = this, e = t._, n = Array.prototype, i = Object.prototype, r = Function.prototype, o = n.push, s = n.slice, a = i.toString, u = i.hasOwnProperty, c = Array.isArray, l = Object.keys, h = r.bind, f = Object.create, d = function() {}, p = function t(e) {
        return e instanceof t ? e : this instanceof t ? void (this._wrapped = e) : new t(e);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), 
    exports._ = p) : t._ = p, p.VERSION = "1.8.3";
    var g = function(t, e, n) {
        if (void 0 === e) return t;
        switch (null == n ? 3 : n) {
          case 1:
            return function(n) {
                return t.call(e, n);
            };

          case 2:
            return function(n, i) {
                return t.call(e, n, i);
            };

          case 3:
            return function(n, i, r) {
                return t.call(e, n, i, r);
            };

          case 4:
            return function(n, i, r, o) {
                return t.call(e, n, i, r, o);
            };
        }
        return function() {
            return t.apply(e, arguments);
        };
    }, m = function(t, e, n) {
        return null == t ? p.identity : p.isFunction(t) ? g(t, e, n) : p.isObject(t) ? p.matcher(t) : p.property(t);
    };
    p.iteratee = function(t, e) {
        return m(t, e, 1 / 0);
    };
    var v = function(t, e) {
        return function(n) {
            var i = arguments.length;
            if (i < 2 || null == n) return n;
            for (var r = 1; r < i; r++) for (var o = arguments[r], s = t(o), a = s.length, u = 0; u < a; u++) {
                var c = s[u];
                e && void 0 !== n[c] || (n[c] = o[c]);
            }
            return n;
        };
    }, y = function(t) {
        if (!p.isObject(t)) return {};
        if (f) return f(t);
        d.prototype = t;
        var e = new d();
        return d.prototype = null, e;
    }, b = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t];
        };
    }, w = Math.pow(2, 53) - 1, x = b("length"), _ = function(t) {
        var e = x(t);
        return "number" == typeof e && e >= 0 && e <= w;
    };
    function T(t) {
        return function(e, n, i, r) {
            n = g(n, r, 4);
            var o = !_(e) && p.keys(e), s = (o || e).length, a = t > 0 ? 0 : s - 1;
            return arguments.length < 3 && (i = e[o ? o[a] : a], a += t), function(e, n, i, r, o, s) {
                for (;o >= 0 && o < s; o += t) {
                    var a = r ? r[o] : o;
                    i = n(i, e[a], a, e);
                }
                return i;
            }(e, n, i, o, a, s);
        };
    }
    p.each = p.forEach = function(t, e, n) {
        var i, r;
        if (e = g(e, n), _(t)) for (i = 0, r = t.length; i < r; i++) e(t[i], i, t); else {
            var o = p.keys(t);
            for (i = 0, r = o.length; i < r; i++) e(t[o[i]], o[i], t);
        }
        return t;
    }, p.map = p.collect = function(t, e, n) {
        e = m(e, n);
        for (var i = !_(t) && p.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) {
            var a = i ? i[s] : s;
            o[s] = e(t[a], a, t);
        }
        return o;
    }, p.reduce = p.foldl = p.inject = T(1), p.reduceRight = p.foldr = T(-1), p.find = p.detect = function(t, e, n) {
        var i;
        if (void 0 !== (i = _(t) ? p.findIndex(t, e, n) : p.findKey(t, e, n)) && -1 !== i) return t[i];
    }, p.filter = p.select = function(t, e, n) {
        var i = [];
        return e = m(e, n), p.each(t, function(t, n, r) {
            e(t, n, r) && i.push(t);
        }), i;
    }, p.reject = function(t, e, n) {
        return p.filter(t, p.negate(m(e)), n);
    }, p.every = p.all = function(t, e, n) {
        e = m(e, n);
        for (var i = !_(t) && p.keys(t), r = (i || t).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (!e(t[s], s, t)) return !1;
        }
        return !0;
    }, p.some = p.any = function(t, e, n) {
        e = m(e, n);
        for (var i = !_(t) && p.keys(t), r = (i || t).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (e(t[s], s, t)) return !0;
        }
        return !1;
    }, p.contains = p.includes = p.include = function(t, e, n, i) {
        return _(t) || (t = p.values(t)), ("number" != typeof n || i) && (n = 0), p.indexOf(t, e, n) >= 0;
    }, p.invoke = function(t, e) {
        var n = s.call(arguments, 2), i = p.isFunction(e);
        return p.map(t, function(t) {
            var r = i ? e : t[e];
            return null == r ? r : r.apply(t, n);
        });
    }, p.pluck = function(t, e) {
        return p.map(t, p.property(e));
    }, p.where = function(t, e) {
        return p.filter(t, p.matcher(e));
    }, p.findWhere = function(t, e) {
        return p.find(t, p.matcher(e));
    }, p.max = function(t, e, n) {
        var i, r, o = -1 / 0, s = -1 / 0;
        if (null == e && null != t) for (var a = 0, u = (t = _(t) ? t : p.values(t)).length; a < u; a++) (i = t[a]) > o && (o = i); else e = m(e, n), 
        p.each(t, function(t, n, i) {
            ((r = e(t, n, i)) > s || r === -1 / 0 && o === -1 / 0) && (o = t, s = r);
        });
        return o;
    }, p.min = function(t, e, n) {
        var i, r, o = 1 / 0, s = 1 / 0;
        if (null == e && null != t) for (var a = 0, u = (t = _(t) ? t : p.values(t)).length; a < u; a++) (i = t[a]) < o && (o = i); else e = m(e, n), 
        p.each(t, function(t, n, i) {
            ((r = e(t, n, i)) < s || r === 1 / 0 && o === 1 / 0) && (o = t, s = r);
        });
        return o;
    }, p.shuffle = function(t) {
        for (var e, n = _(t) ? t : p.values(t), i = n.length, r = Array(i), o = 0; o < i; o++) (e = p.random(0, o)) !== o && (r[o] = r[e]), 
        r[e] = n[o];
        return r;
    }, p.sample = function(t, e, n) {
        return null == e || n ? (_(t) || (t = p.values(t)), t[p.random(t.length - 1)]) : p.shuffle(t).slice(0, Math.max(0, e));
    }, p.sortBy = function(t, e, n) {
        return e = m(e, n), p.pluck(p.map(t, function(t, n, i) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, i)
            };
        }).sort(function(t, e) {
            var n = t.criteria, i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (n < i || void 0 === i) return -1;
            }
            return t.index - e.index;
        }), "value");
    };
    var C = function(t) {
        return function(e, n, i) {
            var r = {};
            return n = m(n, i), p.each(e, function(i, o) {
                var s = n(i, o, e);
                t(r, i, s);
            }), r;
        };
    };
    p.groupBy = C(function(t, e, n) {
        p.has(t, n) ? t[n].push(e) : t[n] = [ e ];
    }), p.indexBy = C(function(t, e, n) {
        t[n] = e;
    }), p.countBy = C(function(t, e, n) {
        p.has(t, n) ? t[n]++ : t[n] = 1;
    }), p.toArray = function(t) {
        return t ? p.isArray(t) ? s.call(t) : _(t) ? p.map(t, p.identity) : p.values(t) : [];
    }, p.size = function(t) {
        return null == t ? 0 : _(t) ? t.length : p.keys(t).length;
    }, p.partition = function(t, e, n) {
        e = m(e, n);
        var i = [], r = [];
        return p.each(t, function(t, n, o) {
            (e(t, n, o) ? i : r).push(t);
        }), [ i, r ];
    }, p.first = p.head = p.take = function(t, e, n) {
        if (null != t) return null == e || n ? t[0] : p.initial(t, t.length - e);
    }, p.initial = function(t, e, n) {
        return s.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)));
    }, p.last = function(t, e, n) {
        if (null != t) return null == e || n ? t[t.length - 1] : p.rest(t, Math.max(0, t.length - e));
    }, p.rest = p.tail = p.drop = function(t, e, n) {
        return s.call(t, null == e || n ? 1 : e);
    }, p.compact = function(t) {
        return p.filter(t, p.identity);
    };
    var k = function t(e, n, i, r) {
        for (var o = [], s = 0, a = r || 0, u = x(e); a < u; a++) {
            var c = e[a];
            if (_(c) && (p.isArray(c) || p.isArguments(c))) {
                n || (c = t(c, n, i));
                var l = 0, h = c.length;
                for (o.length += h; l < h; ) o[s++] = c[l++];
            } else i || (o[s++] = c);
        }
        return o;
    };
    function S(t) {
        return function(e, n, i) {
            n = m(n, i);
            for (var r = x(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t) if (n(e[o], o, e)) return o;
            return -1;
        };
    }
    function E(t, e, n) {
        return function(i, r, o) {
            var a = 0, u = x(i);
            if ("number" == typeof o) t > 0 ? a = o >= 0 ? o : Math.max(o + u, a) : u = o >= 0 ? Math.min(o + 1, u) : o + u + 1; else if (n && o && u) return i[o = n(i, r)] === r ? o : -1;
            if (r != r) return (o = e(s.call(i, a, u), p.isNaN)) >= 0 ? o + a : -1;
            for (o = t > 0 ? a : u - 1; o >= 0 && o < u; o += t) if (i[o] === r) return o;
            return -1;
        };
    }
    p.flatten = function(t, e) {
        return k(t, e, !1);
    }, p.without = function(t) {
        return p.difference(t, s.call(arguments, 1));
    }, p.uniq = p.unique = function(t, e, n, i) {
        p.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = m(n, i));
        for (var r = [], o = [], s = 0, a = x(t); s < a; s++) {
            var u = t[s], c = n ? n(u, s, t) : u;
            e ? (s && o === c || r.push(u), o = c) : n ? p.contains(o, c) || (o.push(c), r.push(u)) : p.contains(r, u) || r.push(u);
        }
        return r;
    }, p.union = function() {
        return p.uniq(k(arguments, !0, !0));
    }, p.intersection = function(t) {
        for (var e = [], n = arguments.length, i = 0, r = x(t); i < r; i++) {
            var o = t[i];
            if (!p.contains(e, o)) {
                for (var s = 1; s < n && p.contains(arguments[s], o); s++) ;
                s === n && e.push(o);
            }
        }
        return e;
    }, p.difference = function(t) {
        var e = k(arguments, !0, !0, 1);
        return p.filter(t, function(t) {
            return !p.contains(e, t);
        });
    }, p.zip = function() {
        return p.unzip(arguments);
    }, p.unzip = function(t) {
        for (var e = t && p.max(t, x).length || 0, n = Array(e), i = 0; i < e; i++) n[i] = p.pluck(t, i);
        return n;
    }, p.object = function(t, e) {
        for (var n = {}, i = 0, r = x(t); i < r; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n;
    }, p.findIndex = S(1), p.findLastIndex = S(-1), p.sortedIndex = function(t, e, n, i) {
        for (var r = (n = m(n, i, 1))(e), o = 0, s = x(t); o < s; ) {
            var a = Math.floor((o + s) / 2);
            n(t[a]) < r ? o = a + 1 : s = a;
        }
        return o;
    }, p.indexOf = E(1, p.findIndex, p.sortedIndex), p.lastIndexOf = E(-1, p.findLastIndex), p.range = function(t, e, n) {
        null == e && (e = t || 0, t = 0), n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++, t += n) r[o] = t;
        return r;
    };
    var A = function(t, e, n, i, r) {
        if (!(i instanceof e)) return t.apply(n, r);
        var o = y(t.prototype), s = t.apply(o, r);
        return p.isObject(s) ? s : o;
    };
    p.bind = function(t, e) {
        if (h && t.bind === h) return h.apply(t, s.call(arguments, 1));
        if (!p.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var n = s.call(arguments, 2);
        return function i() {
            return A(t, i, e, this, n.concat(s.call(arguments)));
        };
    }, p.partial = function(t) {
        var e = s.call(arguments, 1);
        return function n() {
            for (var i = 0, r = e.length, o = Array(r), s = 0; s < r; s++) o[s] = e[s] === p ? arguments[i++] : e[s];
            for (;i < arguments.length; ) o.push(arguments[i++]);
            return A(t, n, this, this, o);
        };
    }, p.bindAll = function(t) {
        var e, n, i = arguments.length;
        if (i <= 1) throw new Error("bindAll must be passed function names");
        for (e = 1; e < i; e++) t[n = arguments[e]] = p.bind(t[n], t);
        return t;
    }, p.memoize = function(t, e) {
        var n = function n(i) {
            var r = n.cache, o = "" + (e ? e.apply(this, arguments) : i);
            return p.has(r, o) || (r[o] = t.apply(this, arguments)), r[o];
        };
        return n.cache = {}, n;
    }, p.delay = function(t, e) {
        var n = s.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n);
        }, e);
    }, p.defer = p.partial(p.delay, p, 1), p.throttle = function(t, e, n) {
        var i, r, o, s = null, a = 0;
        n || (n = {});
        var u = function() {
            a = !1 === n.leading ? 0 : p.now(), s = null, o = t.apply(i, r), s || (i = r = null);
        };
        return function() {
            var c = p.now();
            a || !1 !== n.leading || (a = c);
            var l = e - (c - a);
            return i = this, r = arguments, l <= 0 || l > e ? (s && (clearTimeout(s), s = null), a = c, o = t.apply(i, r), 
            s || (i = r = null)) : s || !1 === n.trailing || (s = setTimeout(u, l)), o;
        };
    }, p.debounce = function(t, e, n) {
        var i, r, o, s, a, u = function u() {
            var c = p.now() - s;
            c < e && c >= 0 ? i = setTimeout(u, e - c) : (i = null, n || (a = t.apply(o, r), i || (o = r = null)));
        };
        return function() {
            o = this, r = arguments, s = p.now();
            var c = n && !i;
            return i || (i = setTimeout(u, e)), c && (a = t.apply(o, r), o = r = null), a;
        };
    }, p.wrap = function(t, e) {
        return p.partial(e, t);
    }, p.negate = function(t) {
        return function() {
            return !t.apply(this, arguments);
        };
    }, p.compose = function() {
        var t = arguments, e = t.length - 1;
        return function() {
            for (var n = e, i = t[e].apply(this, arguments); n--; ) i = t[n].call(this, i);
            return i;
        };
    }, p.after = function(t, e) {
        return function() {
            if (--t < 1) return e.apply(this, arguments);
        };
    }, p.before = function(t, e) {
        var n;
        return function() {
            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
        };
    }, p.once = p.partial(p.before, 2);
    var N = !{
        toString: null
    }.propertyIsEnumerable("toString"), I = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
    function P(t, e) {
        var n = I.length, r = t.constructor, o = p.isFunction(r) && r.prototype || i, s = "constructor";
        for (p.has(t, s) && !p.contains(e, s) && e.push(s); n--; ) (s = I[n]) in t && t[s] !== o[s] && !p.contains(e, s) && e.push(s);
    }
    p.keys = function(t) {
        if (!p.isObject(t)) return [];
        if (l) return l(t);
        var e = [];
        for (var n in t) p.has(t, n) && e.push(n);
        return N && P(t, e), e;
    }, p.allKeys = function(t) {
        if (!p.isObject(t)) return [];
        var e = [];
        for (var n in t) e.push(n);
        return N && P(t, e), e;
    }, p.values = function(t) {
        for (var e = p.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = t[e[r]];
        return i;
    }, p.mapObject = function(t, e, n) {
        e = m(e, n);
        for (var i, r = p.keys(t), o = r.length, s = {}, a = 0; a < o; a++) s[i = r[a]] = e(t[i], i, t);
        return s;
    }, p.pairs = function(t) {
        for (var e = p.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = [ e[r], t[e[r]] ];
        return i;
    }, p.invert = function(t) {
        for (var e = {}, n = p.keys(t), i = 0, r = n.length; i < r; i++) e[t[n[i]]] = n[i];
        return e;
    }, p.functions = p.methods = function(t) {
        var e = [];
        for (var n in t) p.isFunction(t[n]) && e.push(n);
        return e.sort();
    }, p.extend = v(p.allKeys), p.extendOwn = p.assign = v(p.keys), p.findKey = function(t, e, n) {
        e = m(e, n);
        for (var i, r = p.keys(t), o = 0, s = r.length; o < s; o++) if (e(t[i = r[o]], i, t)) return i;
    }, p.pick = function(t, e, n) {
        var i, r, o = {}, s = t;
        if (null == s) return o;
        p.isFunction(e) ? (r = p.allKeys(s), i = g(e, n)) : (r = k(arguments, !1, !1, 1), i = function(t, e, n) {
            return e in n;
        }, s = Object(s));
        for (var a = 0, u = r.length; a < u; a++) {
            var c = r[a], l = s[c];
            i(l, c, s) && (o[c] = l);
        }
        return o;
    }, p.omit = function(t, e, n) {
        if (p.isFunction(e)) e = p.negate(e); else {
            var i = p.map(k(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !p.contains(i, e);
            };
        }
        return p.pick(t, e, n);
    }, p.defaults = v(p.allKeys, !0), p.create = function(t, e) {
        var n = y(t);
        return e && p.extendOwn(n, e), n;
    }, p.clone = function(t) {
        return p.isObject(t) ? p.isArray(t) ? t.slice() : p.extend({}, t) : t;
    }, p.tap = function(t, e) {
        return e(t), t;
    }, p.isMatch = function(t, e) {
        var n = p.keys(e), i = n.length;
        if (null == t) return !i;
        for (var r = Object(t), o = 0; o < i; o++) {
            var s = n[o];
            if (e[s] !== r[s] || !(s in r)) return !1;
        }
        return !0;
    };
    p.isEqual = function(t, e) {
        return function t(e, n, i, r) {
            if (e === n) return 0 !== e || 1 / e == 1 / n;
            if (null == e || null == n) return e === n;
            e instanceof p && (e = e._wrapped), n instanceof p && (n = n._wrapped);
            var o = a.call(e);
            if (o !== a.call(n)) return !1;
            switch (o) {
              case "[object RegExp]":
              case "[object String]":
                return "" + e == "" + n;

              case "[object Number]":
                return +e != +e ? +n != +n : 0 == +e ? 1 / +e == 1 / n : +e == +n;

              case "[object Date]":
              case "[object Boolean]":
                return +e == +n;
            }
            var s = "[object Array]" === o;
            if (!s) {
                if ("object" != (void 0 === e ? "undefined" : _typeof(e)) || "object" != (void 0 === n ? "undefined" : _typeof(n))) return !1;
                var u = e.constructor, c = n.constructor;
                if (u !== c && !(p.isFunction(u) && u instanceof u && p.isFunction(c) && c instanceof c) && "constructor" in e && "constructor" in n) return !1;
            }
            i = i || [], r = r || [];
            for (var l = i.length; l--; ) if (i[l] === e) return r[l] === n;
            if (i.push(e), r.push(n), s) {
                if ((l = e.length) !== n.length) return !1;
                for (;l--; ) if (!t(e[l], n[l], i, r)) return !1;
            } else {
                var h, f = p.keys(e);
                if (l = f.length, p.keys(n).length !== l) return !1;
                for (;l--; ) if (h = f[l], !p.has(n, h) || !t(e[h], n[h], i, r)) return !1;
            }
            return i.pop(), r.pop(), !0;
        }(t, e);
    }, p.isEmpty = function(t) {
        return null == t || (_(t) && (p.isArray(t) || p.isString(t) || p.isArguments(t)) ? 0 === t.length : 0 === p.keys(t).length);
    }, p.isElement = function(t) {
        return !(!t || 1 !== t.nodeType);
    }, p.isArray = c || function(t) {
        return "[object Array]" === a.call(t);
    }, p.isObject = function(t) {
        var e = void 0 === t ? "undefined" : _typeof(t);
        return "function" === e || "object" === e && !!t;
    }, p.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(t) {
        p["is" + t] = function(e) {
            return a.call(e) === "[object " + t + "]";
        };
    }), p.isArguments(arguments) || (p.isArguments = function(t) {
        return p.has(t, "callee");
    }), "function" != typeof /./ && "object" != ("undefined" == typeof Int8Array ? "undefined" : _typeof(Int8Array)) && (p.isFunction = function(t) {
        return "function" == typeof t || !1;
    }), p.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t));
    }, p.isNaN = function(t) {
        return p.isNumber(t) && t !== +t;
    }, p.isBoolean = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" === a.call(t);
    }, p.isNull = function(t) {
        return null === t;
    }, p.isUndefined = function(t) {
        return void 0 === t;
    }, p.has = function(t, e) {
        return null != t && u.call(t, e);
    }, p.noConflict = function() {
        return t._ = e, this;
    }, p.identity = function(t) {
        return t;
    }, p.constant = function(t) {
        return function() {
            return t;
        };
    }, p.noop = function() {}, p.property = b, p.propertyOf = function(t) {
        return null == t ? function() {} : function(e) {
            return t[e];
        };
    }, p.matcher = p.matches = function(t) {
        return t = p.extendOwn({}, t), function(e) {
            return p.isMatch(e, t);
        };
    }, p.times = function(t, e, n) {
        var i = Array(Math.max(0, t));
        e = g(e, n, 1);
        for (var r = 0; r < t; r++) i[r] = e(r);
        return i;
    }, p.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
    }, p.now = Date.now || function() {
        return new Date().getTime();
    };
    var M = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, D = p.invert(M), O = function(t) {
        var e = function(e) {
            return t[e];
        }, n = "(?:" + p.keys(t).join("|") + ")", i = RegExp(n), r = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t;
        };
    };
    p.escape = O(M), p.unescape = O(D), p.result = function(t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n), p.isFunction(i) ? i.call(t) : i;
    };
    var H = 0;
    p.uniqueId = function(t) {
        var e = ++H + "";
        return t ? t + e : e;
    }, p.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var j = /(.)^/, L = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, W = /\\|'|\r|\n|\u2028|\u2029/g, F = function(t) {
        return "\\" + L[t];
    };
    p.template = function(t, e, n) {
        !e && n && (e = n), e = p.defaults({}, e, p.templateSettings);
        var i = RegExp([ (e.escape || j).source, (e.interpolate || j).source, (e.evaluate || j).source ].join("|") + "|$", "g"), r = 0, o = "__p+='";
        t.replace(i, function(e, n, i, s, a) {
            return o += t.slice(r, a).replace(W, F), r = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), 
            e;
        }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj", "_", o);
        } catch (t) {
            throw t.source = o, t;
        }
        var a = function(t) {
            return s.call(this, t, p);
        }, u = e.variable || "obj";
        return a.source = "function(" + u + "){\n" + o + "}", a;
    }, p.chain = function(t) {
        var e = p(t);
        return e._chain = !0, e;
    };
    var R = function(t, e) {
        return t._chain ? p(e).chain() : e;
    };
    p.mixin = function(t) {
        p.each(p.functions(t), function(e) {
            var n = p[e] = t[e];
            p.prototype[e] = function() {
                var t = [ this._wrapped ];
                return o.apply(t, arguments), R(this, n.apply(p, t));
            };
        });
    }, p.mixin(p), p.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
        var e = n[t];
        p.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], R(this, n);
        };
    }), p.each([ "concat", "join", "slice" ], function(t) {
        var e = n[t];
        p.prototype[t] = function() {
            return R(this, e.apply(this._wrapped, arguments));
        };
    }), p.prototype.value = function() {
        return this._wrapped;
    }, p.prototype.valueOf = p.prototype.toJSON = p.prototype.value, p.prototype.toString = function() {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return p;
    });
}.call(this), 
//     Backbone may be freely distributed under the MIT license.
function(t) {
    var e = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self.self === self && self || "object" == ("undefined" == typeof global ? "undefined" : _typeof(global)) && global.global === global && global;
    if ("function" == typeof define && define.amd) define([ "underscore", "jquery", "exports" ], function(n, i, r) {
        e.Backbone = t(e, r, n, i);
    }); else if ("undefined" != typeof exports) {
        var n, i = require("underscore");
        try {
            n = require("jquery");
        } catch (t) {}
        t(e, exports, i, n);
    } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$);
}(function(t, e, n, i) {
    var r = t.Backbone, o = Array.prototype.slice;
    e.VERSION = "1.3.3", e.$ = i, e.noConflict = function() {
        return t.Backbone = r, this;
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var s = function(t, e, i) {
        n.each(e, function(e, r) {
            n[r] && (t.prototype[r] = function(t, e, i) {
                switch (t) {
                  case 1:
                    return function() {
                        return n[e](this[i]);
                    };

                  case 2:
                    return function(t) {
                        return n[e](this[i], t);
                    };

                  case 3:
                    return function(t, r) {
                        return n[e](this[i], a(t, this), r);
                    };

                  case 4:
                    return function(t, r, o) {
                        return n[e](this[i], a(t, this), r, o);
                    };

                  default:
                    return function() {
                        var t = o.call(arguments);
                        return t.unshift(this[i]), n[e].apply(n, t);
                    };
                }
            }(e, r, i));
        });
    }, a = function(t, e) {
        return n.isFunction(t) ? t : n.isObject(t) && !e._isModel(t) ? u(t) : n.isString(t) ? function(e) {
            return e.get(t);
        } : t;
    }, u = function(t) {
        var e = n.matches(t);
        return function(t) {
            return e(t.attributes);
        };
    }, c = e.Events = {}, l = /\s+/, h = function t(e, i, r, o, s) {
        var a, u = 0;
        if (r && "object" === (void 0 === r ? "undefined" : _typeof(r))) {
            void 0 !== o && "context" in s && void 0 === s.context && (s.context = o);
            for (a = n.keys(r); u < a.length; u++) i = t(e, i, a[u], r[a[u]], s);
        } else if (r && l.test(r)) for (a = r.split(l); u < a.length; u++) i = e(i, a[u], o, s); else i = e(i, r, o, s);
        return i;
    };
    c.on = function(t, e, n) {
        return f(this, t, e, n);
    };
    var f = function(t, e, n, i, r) {
        (t._events = h(d, t._events || {}, e, n, {
            context: i,
            ctx: t,
            listening: r
        }), r) && ((t._listeners || (t._listeners = {}))[r.id] = r);
        return t;
    };
    c.listenTo = function(t, e, i) {
        if (!t) return this;
        var r = t._listenId || (t._listenId = n.uniqueId("l")), o = this._listeningTo || (this._listeningTo = {}), s = o[r];
        if (!s) {
            var a = this._listenId || (this._listenId = n.uniqueId("l"));
            s = o[r] = {
                obj: t,
                objId: r,
                id: a,
                listeningTo: o,
                count: 0
            };
        }
        return f(t, e, i, this, s), this;
    };
    var d = function(t, e, n, i) {
        if (n) {
            var r = t[e] || (t[e] = []), o = i.context, s = i.ctx, a = i.listening;
            a && a.count++, r.push({
                callback: n,
                context: o,
                ctx: o || s,
                listening: a
            });
        }
        return t;
    };
    c.off = function(t, e, n) {
        return this._events ? (this._events = h(p, this._events, t, e, {
            context: n,
            listeners: this._listeners
        }), this) : this;
    }, c.stopListening = function(t, e, i) {
        var r = this._listeningTo;
        if (!r) return this;
        for (var o = t ? [ t._listenId ] : n.keys(r), s = 0; s < o.length; s++) {
            var a = r[o[s]];
            if (!a) break;
            a.obj.off(e, i, this);
        }
        return this;
    };
    var p = function(t, e, i, r) {
        if (t) {
            var o, s = 0, a = r.context, u = r.listeners;
            if (e || i || a) {
                for (var c = e ? [ e ] : n.keys(t); s < c.length; s++) {
                    var l = t[e = c[s]];
                    if (!l) break;
                    for (var h = [], f = 0; f < l.length; f++) {
                        var d = l[f];
                        i && i !== d.callback && i !== d.callback._callback || a && a !== d.context ? h.push(d) : (o = d.listening) && 0 == --o.count && (delete u[o.id], 
                        delete o.listeningTo[o.objId]);
                    }
                    h.length ? t[e] = h : delete t[e];
                }
                return t;
            }
            for (var p = n.keys(u); s < p.length; s++) delete u[(o = u[p[s]]).id], delete o.listeningTo[o.objId];
        }
    };
    c.once = function(t, e, i) {
        var r = h(g, {}, t, e, n.bind(this.off, this));
        return "string" == typeof t && null == i && (e = void 0), this.on(r, e, i);
    }, c.listenToOnce = function(t, e, i) {
        var r = h(g, {}, e, i, n.bind(this.stopListening, this, t));
        return this.listenTo(t, r);
    };
    var g = function(t, e, i, r) {
        if (i) {
            var o = t[e] = n.once(function() {
                r(e, o), i.apply(this, arguments);
            });
            o._callback = i;
        }
        return t;
    };
    c.trigger = function(t) {
        if (!this._events) return this;
        for (var e = Math.max(0, arguments.length - 1), n = Array(e), i = 0; i < e; i++) n[i] = arguments[i + 1];
        return h(m, this._events, t, void 0, n), this;
    };
    var m = function(t, e, n, i) {
        if (t) {
            var r = t[e], o = t.all;
            r && o && (o = o.slice()), r && v(r, i), o && v(o, [ e ].concat(i));
        }
        return t;
    }, v = function(t, e) {
        var n, i = -1, r = t.length, o = e[0], s = e[1], a = e[2];
        switch (e.length) {
          case 0:
            for (;++i < r; ) (n = t[i]).callback.call(n.ctx);
            return;

          case 1:
            for (;++i < r; ) (n = t[i]).callback.call(n.ctx, o);
            return;

          case 2:
            for (;++i < r; ) (n = t[i]).callback.call(n.ctx, o, s);
            return;

          case 3:
            for (;++i < r; ) (n = t[i]).callback.call(n.ctx, o, s, a);
            return;

          default:
            for (;++i < r; ) (n = t[i]).callback.apply(n.ctx, e);
            return;
        }
    };
    c.bind = c.on, c.unbind = c.off, n.extend(e, c);
    var y = e.Model = function(t, e) {
        var i = t || {};
        e || (e = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), 
        e.parse && (i = this.parse(i, e) || {});
        var r = n.result(this, "defaults");
        i = n.defaults(n.extend({}, r, i), r), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments);
    };
    n.extend(y.prototype, c, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function(t) {
            return n.clone(this.attributes);
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        get: function(t) {
            return this.attributes[t];
        },
        escape: function(t) {
            return n.escape(this.get(t));
        },
        has: function(t) {
            return null != this.get(t);
        },
        matches: function(t) {
            return !!n.iteratee(t, this)(this.attributes);
        },
        set: function(t, e, i) {
            if (null == t) return this;
            var r;
            if ("object" === (void 0 === t ? "undefined" : _typeof(t)) ? (r = t, i = e) : (r = {})[t] = e, i || (i = {}), 
            !this._validate(r, i)) return !1;
            var o = i.unset, s = i.silent, a = [], u = this._changing;
            this._changing = !0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
            var c = this.attributes, l = this.changed, h = this._previousAttributes;
            for (var f in r) e = r[f], n.isEqual(c[f], e) || a.push(f), n.isEqual(h[f], e) ? delete l[f] : l[f] = e, 
            o ? delete c[f] : c[f] = e;
            if (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !s) {
                a.length && (this._pending = i);
                for (var d = 0; d < a.length; d++) this.trigger("change:" + a[d], this, c[a[d]], i);
            }
            if (u) return this;
            if (!s) for (;this._pending; ) i = this._pending, this._pending = !1, this.trigger("change", this, i);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(t, e) {
            return this.set(t, void 0, n.extend({}, e, {
                unset: !0
            }));
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes) e[i] = void 0;
            return this.set(e, n.extend({}, t, {
                unset: !0
            }));
        },
        hasChanged: function(t) {
            return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t);
        },
        changedAttributes: function(t) {
            if (!t) return !!this.hasChanged() && n.clone(this.changed);
            var e = this._changing ? this._previousAttributes : this.attributes, i = {};
            for (var r in t) {
                var o = t[r];
                n.isEqual(e[r], o) || (i[r] = o);
            }
            return !!n.size(i) && i;
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes);
        },
        fetch: function(t) {
            var e = this, i = (t = n.extend({
                parse: !0
            }, t)).success;
            return t.success = function(n) {
                var r = t.parse ? e.parse(n, t) : n;
                if (!e.set(r, t)) return !1;
                i && i.call(t.context, e, n, t), e.trigger("sync", e, n, t);
            }, L(this, t), this.sync("read", this, t);
        },
        save: function(t, e, i) {
            var r;
            null == t || "object" === (void 0 === t ? "undefined" : _typeof(t)) ? (r = t, i = e) : (r = {})[t] = e;
            var o = (i = n.extend({
                validate: !0,
                parse: !0
            }, i)).wait;
            if (r && !o) {
                if (!this.set(r, i)) return !1;
            } else if (!this._validate(r, i)) return !1;
            var s = this, a = i.success, u = this.attributes;
            i.success = function(t) {
                s.attributes = u;
                var e = i.parse ? s.parse(t, i) : t;
                if (o && (e = n.extend({}, r, e)), e && !s.set(e, i)) return !1;
                a && a.call(i.context, s, t, i), s.trigger("sync", s, t, i);
            }, L(this, i), r && o && (this.attributes = n.extend({}, u, r));
            var c = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== c || i.attrs || (i.attrs = r);
            var l = this.sync(c, this, i);
            return this.attributes = u, l;
        },
        destroy: function(t) {
            var e = this, i = (t = t ? n.clone(t) : {}).success, r = t.wait, o = function() {
                e.stopListening(), e.trigger("destroy", e, e.collection, t);
            };
            t.success = function(n) {
                r && o(), i && i.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t);
            };
            var s = !1;
            return this.isNew() ? n.defer(t.success) : (L(this, t), s = this.sync("delete", this, t)), r || o(), 
            s;
        },
        url: function() {
            var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || j();
            if (this.isNew()) return t;
            var e = this.get(this.idAttribute);
            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
        },
        parse: function(t, e) {
            return t;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return !this.has(this.idAttribute);
        },
        isValid: function(t) {
            return this._validate({}, n.extend({}, t, {
                validate: !0
            }));
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate) return !0;
            t = n.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return !i || (this.trigger("invalid", this, i, n.extend(e, {
                validationError: i
            })), !1);
        }
    });
    s(y, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    }, "attributes");
    var b = e.Collection = function(t, e) {
        e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), 
        this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
            silent: !0
        }, e));
    }, w = {
        add: !0,
        remove: !0,
        merge: !0
    }, x = {
        add: !0,
        remove: !1
    }, _ = function(t, e, n) {
        n = Math.min(Math.max(n, 0), t.length);
        var i, r = Array(t.length - n), o = e.length;
        for (i = 0; i < r.length; i++) r[i] = t[i + n];
        for (i = 0; i < o; i++) t[i + n] = e[i];
        for (i = 0; i < r.length; i++) t[i + o + n] = r[i];
    };
    n.extend(b.prototype, c, {
        model: y,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t);
            });
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        add: function(t, e) {
            return this.set(t, n.extend({
                merge: !1
            }, e, x));
        },
        remove: function(t, e) {
            e = n.extend({}, e);
            var i = !n.isArray(t);
            t = i ? [ t ] : t.slice();
            var r = this._removeModels(t, e);
            return !e.silent && r.length && (e.changes = {
                added: [],
                merged: [],
                removed: r
            }, this.trigger("update", this, e)), i ? r[0] : r;
        },
        set: function(t, e) {
            if (null != t) {
                (e = n.extend({}, w, e)).parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                var i = !n.isArray(t);
                t = i ? [ t ] : t.slice();
                var r = e.at;
                null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                var o, s, a = [], u = [], c = [], l = [], h = {}, f = e.add, d = e.merge, p = e.remove, g = !1, m = this.comparator && null == r && !1 !== e.sort, v = n.isString(this.comparator) ? this.comparator : null;
                for (s = 0; s < t.length; s++) {
                    o = t[s];
                    var y = this.get(o);
                    if (y) {
                        if (d && o !== y) {
                            var b = this._isModel(o) ? o.attributes : o;
                            e.parse && (b = y.parse(b, e)), y.set(b, e), c.push(y), m && !g && (g = y.hasChanged(v));
                        }
                        h[y.cid] || (h[y.cid] = !0, a.push(y)), t[s] = y;
                    } else f && (o = t[s] = this._prepareModel(o, e)) && (u.push(o), this._addReference(o, e), h[o.cid] = !0, 
                    a.push(o));
                }
                if (p) {
                    for (s = 0; s < this.length; s++) h[(o = this.models[s]).cid] || l.push(o);
                    l.length && this._removeModels(l, e);
                }
                var x = !1, T = !m && f && p;
                if (a.length && T ? (x = this.length !== a.length || n.some(this.models, function(t, e) {
                    return t !== a[e];
                }), this.models.length = 0, _(this.models, a, 0), this.length = this.models.length) : u.length && (m && (g = !0), 
                _(this.models, u, null == r ? this.length : r), this.length = this.models.length), g && this.sort({
                    silent: !0
                }), !e.silent) {
                    for (s = 0; s < u.length; s++) null != r && (e.index = r + s), (o = u[s]).trigger("add", o, this, e);
                    (g || x) && this.trigger("sort", this, e), (u.length || l.length || c.length) && (e.changes = {
                        added: u,
                        removed: l,
                        merged: c
                    }, this.trigger("update", this, e));
                }
                return i ? t[0] : t;
            }
        },
        reset: function(t, e) {
            e = e ? n.clone(e) : {};
            for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], e);
            return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
                silent: !0
            }, e)), e.silent || this.trigger("reset", this, e), t;
        },
        push: function(t, e) {
            return this.add(t, n.extend({
                at: this.length
            }, e));
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t);
        },
        unshift: function(t, e) {
            return this.add(t, n.extend({
                at: 0
            }, e));
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t);
        },
        slice: function() {
            return o.apply(this.models, arguments);
        },
        get: function(t) {
            if (null != t) return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid];
        },
        has: function(t) {
            return null != this.get(t);
        },
        at: function(t) {
            return t < 0 && (t += this.length), this.models[t];
        },
        where: function(t, e) {
            return this[e ? "find" : "filter"](t);
        },
        findWhere: function(t) {
            return this.where(t, !0);
        },
        sort: function(t) {
            var e = this.comparator;
            if (!e) throw new Error("Cannot sort a set without a comparator");
            t || (t = {});
            var i = e.length;
            return n.isFunction(e) && (e = n.bind(e, this)), 1 === i || n.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e), 
            t.silent || this.trigger("sort", this, t), this;
        },
        pluck: function(t) {
            return this.map(t + "");
        },
        fetch: function(t) {
            var e = (t = n.extend({
                parse: !0
            }, t)).success, i = this;
            return t.success = function(n) {
                var r = t.reset ? "reset" : "set";
                i[r](n, t), e && e.call(t.context, i, n, t), i.trigger("sync", i, n, t);
            }, L(this, t), this.sync("read", this, t);
        },
        create: function(t, e) {
            var i = (e = e ? n.clone(e) : {}).wait;
            if (!(t = this._prepareModel(t, e))) return !1;
            i || this.add(t, e);
            var r = this, o = e.success;
            return e.success = function(t, e, n) {
                i && r.add(t, n), o && o.call(n.context, t, e, n);
            }, t.save(null, e), t;
        },
        parse: function(t, e) {
            return t;
        },
        clone: function() {
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            });
        },
        modelId: function(t) {
            return t[this.model.prototype.idAttribute || "id"];
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(t, e) {
            if (this._isModel(t)) return t.collection || (t.collection = this), t;
            (e = e ? n.clone(e) : {}).collection = this;
            var i = new this.model(t, e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i;
        },
        _removeModels: function(t, e) {
            for (var n = [], i = 0; i < t.length; i++) {
                var r = this.get(t[i]);
                if (r) {
                    var o = this.indexOf(r);
                    this.models.splice(o, 1), this.length--, delete this._byId[r.cid];
                    var s = this.modelId(r.attributes);
                    null != s && delete this._byId[s], e.silent || (e.index = o, r.trigger("remove", r, this, e)), n.push(r), 
                    this._removeReference(r, e);
                }
            }
            return n;
        },
        _isModel: function(t) {
            return t instanceof y;
        },
        _addReference: function(t, e) {
            this._byId[t.cid] = t;
            var n = this.modelId(t.attributes);
            null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this);
        },
        _removeReference: function(t, e) {
            delete this._byId[t.cid];
            var n = this.modelId(t.attributes);
            null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(t, e, n, i) {
            if (e) {
                if (("add" === t || "remove" === t) && n !== this) return;
                if ("destroy" === t && this.remove(e, i), "change" === t) {
                    var r = this.modelId(e.previousAttributes()), o = this.modelId(e.attributes);
                    r !== o && (null != r && delete this._byId[r], null != o && (this._byId[o] = e));
                }
            }
            this.trigger.apply(this, arguments);
        }
    });
    s(b, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    }, "models");
    var T = e.View = function(t) {
        this.cid = n.uniqueId("view"), n.extend(this, n.pick(t, k)), this._ensureElement(), this.initialize.apply(this, arguments);
    }, C = /^(\S+)\s*(.*)$/, k = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    n.extend(T.prototype, c, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this._removeElement(), this.stopListening(), this;
        },
        _removeElement: function() {
            this.$el.remove();
        },
        setElement: function(t) {
            return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this;
        },
        _setElement: function(t) {
            this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0];
        },
        delegateEvents: function(t) {
            if (t || (t = n.result(this, "events")), !t) return this;
            for (var e in this.undelegateEvents(), t) {
                var i = t[e];
                if (n.isFunction(i) || (i = this[i]), i) {
                    var r = e.match(C);
                    this.delegate(r[1], r[2], n.bind(i, this));
                }
            }
            return this;
        },
        delegate: function(t, e, n) {
            return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this;
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
        },
        undelegate: function(t, e, n) {
            return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this;
        },
        _createElement: function(t) {
            return document.createElement(t);
        },
        _ensureElement: function() {
            if (this.el) this.setElement(n.result(this, "el")); else {
                var t = n.extend({}, n.result(this, "attributes"));
                this.id && (t.id = n.result(this, "id")), this.className && (t.class = n.result(this, "className")), 
                this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t);
            }
        },
        _setAttributes: function(t) {
            this.$el.attr(t);
        }
    }), e.sync = function(t, i, r) {
        var o = S[t];
        n.defaults(r || (r = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var s = {
            type: o,
            dataType: "json"
        };
        if (r.url || (s.url = n.result(i, "url") || j()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", 
        s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", 
        s.data = s.data ? {
            model: s.data
        } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST", r.emulateJSON && (s.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function(t) {
                if (t.setRequestHeader("X-HTTP-Method-Override", o), a) return a.apply(this, arguments);
            };
        }
        "GET" === s.type || r.emulateJSON || (s.processData = !1);
        var u = r.error;
        r.error = function(t, e, n) {
            r.textStatus = e, r.errorThrown = n, u && u.call(r.context, t, e, n);
        };
        var c = r.xhr = e.ajax(n.extend(s, r));
        return i.trigger("request", i, c, r), c;
    };
    var S = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments);
    };
    var E = e.Router = function(t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, A = /\((.*?)\)/g, N = /(\(\?)?:\w+/g, I = /\*\w+/g, P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(E.prototype, c, {
        initialize: function() {},
        route: function(t, i, r) {
            n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
            var o = this;
            return e.history.route(t, function(n) {
                var s = o._extractParameters(t, n);
                !1 !== o.execute(r, s, i) && (o.trigger.apply(o, [ "route:" + i ].concat(s)), o.trigger("route", i, s), 
                e.history.trigger("route", o, i, s));
            }), this;
        },
        execute: function(t, e, n) {
            t && t.apply(this, e);
        },
        navigate: function(t, n) {
            return e.history.navigate(t, n), this;
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var t, e = n.keys(this.routes); null != (t = e.pop()); ) this.route(t, this.routes[t]);
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(P, "\\$&").replace(A, "(?:$1)?").replace(N, function(t, e) {
                return e ? t : "([^/?]+)";
            }).replace(I, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$");
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return n.map(i, function(t, e) {
                return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null;
            });
        }
    });
    var M = e.History = function() {
        this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, D = /^[#\/]|\s+$/g, O = /^\/+|\/+$/g, H = /#.*$/;
    M.started = !1, n.extend(M.prototype, c, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
        },
        matchRoot: function() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
        },
        decodeFragment: function(t) {
            return decodeURI(t.replace(/%25/g, "%2525"));
        },
        getSearch: function() {
            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return t ? t[0] : "";
        },
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : "";
        },
        getPath: function() {
            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === t.charAt(0) ? t.slice(1) : t;
        },
        getFragment: function(t) {
            return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), 
            t.replace(D, "");
        },
        start: function(t) {
            if (M.started) throw new Error("Backbone.history has already been started");
            if (M.started = !0, this.options = n.extend({
                root: "/"
            }, this.options, t), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, 
            this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), 
            this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, 
            this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, 
            this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(O, "/"), this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var e = this.root.slice(0, -1) || "/";
                    return this.location.replace(e + "#" + this.getPath()), !0;
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                });
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", 
                this.iframe.tabIndex = -1;
                var i = document.body, r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment;
            }
            var o = window.addEventListener || function(t, e) {
                return attachEvent("on" + t, e);
            };
            if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            !this.options.silent) return this.loadUrl();
        },
        stop: function() {
            var t = window.removeEventListener || function(t, e) {
                return detachEvent("on" + t, e);
            };
            this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), 
            this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), 
            M.started = !1;
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            });
        },
        checkUrl: function(t) {
            var e = this.getFragment();
            if (e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment) return !1;
            this.iframe && this.navigate(e), this.loadUrl();
        },
        loadUrl: function(t) {
            return !!this.matchRoot() && (t = this.fragment = this.getFragment(t), n.some(this.handlers, function(e) {
                if (e.route.test(t)) return e.callback(t), !0;
            }));
        },
        navigate: function(t, e) {
            if (!M.started) return !1;
            e && !0 !== e || (e = {
                trigger: !!e
            }), t = this.getFragment(t || "");
            var n = this.root;
            "" !== t && "?" !== t.charAt(0) || (n = n.slice(0, -1) || "/");
            var i = n + t;
            if (t = this.decodeFragment(t.replace(H, "")), this.fragment !== t) {
                if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i); else {
                    if (!this._wantsHashChange) return this.location.assign(i);
                    if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                        var r = this.iframe.contentWindow;
                        e.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, t, e.replace);
                    }
                }
                return e.trigger ? this.loadUrl(t) : void 0;
            }
        },
        _updateHash: function(t, e, n) {
            if (n) {
                var i = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(i + "#" + e);
            } else t.hash = "#" + e;
        }
    }), e.history = new M();
    y.extend = b.extend = E.extend = T.extend = M.extend = function(t, e) {
        var i, r = this;
        return i = t && n.has(t, "constructor") ? t.constructor : function() {
            return r.apply(this, arguments);
        }, n.extend(i, r, e), i.prototype = n.create(r.prototype, t), i.prototype.constructor = i, i.__super__ = r.prototype, 
        i;
    };
    var j = function() {
        throw new Error('A "url" property or function must be specified');
    }, L = function(t, e) {
        var n = e.error;
        e.error = function(i) {
            n && n.call(e.context, t, i, e), t.trigger("error", t, i, e);
        };
    };
    return e;
}), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
}(function(t) {
    function e(e, i) {
        var r, o, s, a = e.nodeName.toLowerCase();
        return "area" === a ? (o = (r = e.parentNode).name, !(!e.href || !o || "map" !== r.nodeName.toLowerCase()) && (!!(s = t("img[usemap='#" + o + "']")[0]) && n(s))) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a && e.href || i) && n(e);
    }
    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility");
        }).length;
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function(e) {
            var n = this.css("position"), i = "absolute" === n, r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
                var e = t(this);
                return (!i || "static" !== e.css("position")) && r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
            }).eq(0);
            return "fixed" !== n && o.length ? o : t(this[0].ownerDocument || document);
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(n) {
                return !!t.data(n, e);
            };
        }) : function(e, n, i) {
            return !!t.data(e, i[3]);
        },
        focusable: function(n) {
            return e(n, !isNaN(t.attr(n, "tabindex")));
        },
        tabbable: function(n) {
            var i = t.attr(n, "tabindex"), r = isNaN(i);
            return (r || i >= 0) && e(n, !r);
        }
    }), t("<a>").outerWidth(1).jquery || t.each([ "Width", "Height" ], function(e, n) {
        function i(e, n, i, o) {
            return t.each(r, function() {
                n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                o && (n -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), n;
        }
        var r = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = n.toLowerCase(), s = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function(e) {
            return void 0 === e ? s["inner" + n].call(this) : this.each(function() {
                t(this).css(o, i(this, e) + "px");
            });
        }, t.fn["outer" + n] = function(e, r) {
            return "number" != typeof e ? s["outer" + n].call(this, e) : this.each(function() {
                t(this).css(o, i(this, e, !0, r) + "px");
            });
        };
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(n) {
            return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this);
        };
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
        focus: function(e) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), i && i.call(e);
                    }, n);
                }) : e.apply(this, arguments);
            };
        }(t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length) for (var n, i, r = t(this[0]); r.length && r[0] !== document; ) {
                if (("absolute" === (n = r.css("position")) || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), 
                !isNaN(i) && 0 !== i)) return i;
                r = r.parent();
            }
            return 0;
        }
    }), t.ui.plugin = {
        add: function(e, n, i) {
            var r, o = t.ui[e].prototype;
            for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([ n, i[r] ]);
        },
        call: function(t, e, n, i) {
            var r, o = t.plugins[e];
            if (o && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (r = 0; o.length > r; r++) t.options[o[r][0]] && o[r][1].apply(t.element, n);
        }
    };
    var i = 0, r = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(n) {
            var i, r, o;
            for (o = 0; null != (r = n[o]); o++) try {
                (i = t._data(r, "events")) && i.remove && t(r).triggerHandler("remove");
            } catch (t) {}
            e(n);
        };
    }(t.cleanData), t.widget = function(e, n, i) {
        var r, o, s, a, u = {}, c = e.split(".")[0];
        return e = e.split(".")[1], r = c + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][r.toLowerCase()] = function(e) {
            return !!t.data(e, r);
        }, t[c] = t[c] || {}, o = t[c][e], s = t[c][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new s(t, e);
        }, t.extend(s, o, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: []
        }), (a = new n()).options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
            return t.isFunction(i) ? void (u[e] = function() {
                var t = function() {
                    return n.prototype[e].apply(this, arguments);
                }, r = function(t) {
                    return n.prototype[e].apply(this, t);
                };
                return function() {
                    var e, n = this._super, o = this._superApply;
                    return this._super = t, this._superApply = r, e = i.apply(this, arguments), this._super = n, this._superApply = o, 
                    e;
                };
            }()) : void (u[e] = i);
        }), s.prototype = t.widget.extend(a, {
            widgetEventPrefix: o && a.widgetEventPrefix || e
        }, u, {
            constructor: s,
            namespace: c,
            widgetName: e,
            widgetFullName: r
        }), o ? (t.each(o._childConstructors, function(e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, s, n._proto);
        }), delete o._childConstructors) : n._childConstructors.push(s), t.widget.bridge(e, s), s;
    }, t.widget.extend = function(e) {
        for (var n, i, o = r.call(arguments, 1), s = 0, a = o.length; a > s; s++) for (n in o[s]) i = o[s][n], 
        o[s].hasOwnProperty(n) && void 0 !== i && (e[n] = t.isPlainObject(i) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], i) : t.widget.extend({}, i) : i);
        return e;
    }, t.widget.bridge = function(e, n) {
        var i = n.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var s = "string" == typeof o, a = r.call(arguments, 1), u = this;
            return s ? this.each(function() {
                var n, r = t.data(this, i);
                return "instance" === o ? (u = r, !1) : r ? t.isFunction(r[o]) && "_" !== o.charAt(0) ? (n = r[o].apply(r, a)) !== r && void 0 !== n ? (u = n && n.jquery ? u.pushStack(n.get()) : n, 
                !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'");
            }) : (a.length && (o = t.widget.extend.apply(null, [ o ].concat(a))), this.each(function() {
                var e = t.data(this, i);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, i, new n(o, this));
            })), u;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, 
            this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy();
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, n) {
            var i, r, o, s = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (s = {}, e = (i = e.split(".")).shift(), i.length) {
                for (r = s[e] = t.widget.extend({}, this.options[e]), o = 0; i.length - 1 > o; o++) r[i[o]] = r[i[o]] || {}, 
                r = r[i[o]];
                if (e = i.pop(), 1 === arguments.length) return void 0 === r[e] ? null : r[e];
                r[e] = n;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                s[e] = n;
            }
            return this._setOptions(s), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), 
            e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), 
            this;
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _on: function(e, n, i) {
            var r, o = this;
            "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = r = t(n), this.bindings = this.bindings.add(n)) : (i = n, 
            n = this.element, r = this.widget()), t.each(i, function(i, s) {
                function a() {
                    return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? o[s] : s).apply(o, arguments) : void 0;
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                var u = i.match(/^([\w:-]*)\s*(.*)$/), c = u[1] + o.eventNamespace, l = u[2];
                l ? r.delegate(l, c, a) : n.bind(c, a);
            });
        },
        _off: function(e, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(n).undelegate(n), 
            this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            var n = this;
            return setTimeout(function() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments);
            }, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(e, n, i) {
            var r, o, s = this.options[e];
            if (i = i || {}, (n = t.Event(n)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            n.target = this.element[0], o = n.originalEvent) for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(t.isFunction(s) && !1 === s.apply(this.element[0], [ n ].concat(i)) || n.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, n) {
        t.Widget.prototype["_" + e] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var s, a = r ? !0 === r || "number" == typeof r ? n : r.effect || n : e;
            "number" == typeof (r = r || {}) && (r = {
                duration: r
            }), s = !t.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && t.effects && t.effects.effect[a] ? i[e](r) : a !== e && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                t(this)[e](), o && o.call(i[0]), n();
            });
        };
    }), t.widget;
    var o = !1;
    t(document).mouseup(function() {
        o = !1;
    }), t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t);
            }).bind("click." + this.widgetName, function(n) {
                return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), 
                n.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(e) {
            if (!o) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var n = this, i = 1 === e.which, r = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(i && !r && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), 
                !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t);
                }, this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t);
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                e.preventDefault(), o = !0, !0));
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which) return this._mouseUp(e);
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), 
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        },
        _mouseUp: function(e) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(e)), o = !1, !1;
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    }), function() {
        function e(t, e, n) {
            return [ parseFloat(t[0]) * (f.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (f.test(t[1]) ? n / 100 : 1) ];
        }
        function n(e, n) {
            return parseInt(t.css(e, n), 10) || 0;
        }
        t.ui = t.ui || {};
        var i, r, o = Math.max, s = Math.abs, a = Math.round, u = /left|center|right/, c = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, f = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== i) return i;
                var e, n, r = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = r.children()[0];
                return t("body").append(r), e = o.offsetWidth, r.css("overflow", "scroll"), e === (n = o.offsetWidth) && (n = r[0].clientWidth), 
                r.remove(), i = e - n;
            },
            getScrollInfo: function(e) {
                var n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), r = "scroll" === n || "auto" === n && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: r ? t.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(e) {
                var n = t(e || window), i = t.isWindow(n[0]), r = !!n[0] && 9 === n[0].nodeType;
                return {
                    element: n,
                    isWindow: i,
                    isDocument: r,
                    offset: n.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: n.scrollLeft(),
                    scrollTop: n.scrollTop(),
                    width: i || r ? n.width() : n.outerWidth(),
                    height: i || r ? n.height() : n.outerHeight()
                };
            }
        }, t.fn.position = function(i) {
            if (!i || !i.of) return d.apply(this, arguments);
            i = t.extend({}, i);
            var f, p, g, m, v, y, b = t(i.of), w = t.position.getWithinInfo(i.within), x = t.position.getScrollInfo(w), _ = (i.collision || "flip").split(" "), T = {};
            return y = function(e) {
                var n = e[0];
                return 9 === n.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(n) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : n.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: n.pageY,
                        left: n.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                };
            }(b), b[0].preventDefault && (i.at = "left top"), p = y.width, g = y.height, m = y.offset, v = t.extend({}, m), 
            t.each([ "my", "at" ], function() {
                var t, e, n = (i[this] || "").split(" ");
                1 === n.length && (n = u.test(n[0]) ? n.concat([ "center" ]) : c.test(n[0]) ? [ "center" ].concat(n) : [ "center", "center" ]), 
                n[0] = u.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", t = l.exec(n[0]), e = l.exec(n[1]), 
                T[this] = [ t ? t[0] : 0, e ? e[0] : 0 ], i[this] = [ h.exec(n[0])[0], h.exec(n[1])[0] ];
            }), 1 === _.length && (_[1] = _[0]), "right" === i.at[0] ? v.left += p : "center" === i.at[0] && (v.left += p / 2), 
            "bottom" === i.at[1] ? v.top += g : "center" === i.at[1] && (v.top += g / 2), f = e(T.at, p, g), v.left += f[0], 
            v.top += f[1], this.each(function() {
                var u, c, l = t(this), h = l.outerWidth(), d = l.outerHeight(), y = n(this, "marginLeft"), C = n(this, "marginTop"), k = h + y + n(this, "marginRight") + x.width, S = d + C + n(this, "marginBottom") + x.height, E = t.extend({}, v), A = e(T.my, l.outerWidth(), l.outerHeight());
                "right" === i.my[0] ? E.left -= h : "center" === i.my[0] && (E.left -= h / 2), "bottom" === i.my[1] ? E.top -= d : "center" === i.my[1] && (E.top -= d / 2), 
                E.left += A[0], E.top += A[1], r || (E.left = a(E.left), E.top = a(E.top)), u = {
                    marginLeft: y,
                    marginTop: C
                }, t.each([ "left", "top" ], function(e, n) {
                    t.ui.position[_[e]] && t.ui.position[_[e]][n](E, {
                        targetWidth: p,
                        targetHeight: g,
                        elemWidth: h,
                        elemHeight: d,
                        collisionPosition: u,
                        collisionWidth: k,
                        collisionHeight: S,
                        offset: [ f[0] + A[0], f[1] + A[1] ],
                        my: i.my,
                        at: i.at,
                        within: w,
                        elem: l
                    });
                }), i.using && (c = function(t) {
                    var e = m.left - E.left, n = e + p - h, r = m.top - E.top, a = r + g - d, u = {
                        target: {
                            element: b,
                            left: m.left,
                            top: m.top,
                            width: p,
                            height: g
                        },
                        element: {
                            element: l,
                            left: E.left,
                            top: E.top,
                            width: h,
                            height: d
                        },
                        horizontal: 0 > n ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : r > 0 ? "bottom" : "middle"
                    };
                    h > p && p > s(e + n) && (u.horizontal = "center"), d > g && g > s(r + a) && (u.vertical = "middle"), 
                    u.important = o(s(e), s(n)) > o(s(r), s(a)) ? "horizontal" : "vertical", i.using.call(this, t, u);
                }), l.offset(t.extend(E, {
                    using: c
                }));
            });
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var n, i = e.within, r = i.isWindow ? i.scrollLeft : i.offset.left, s = i.width, a = t.left - e.collisionPosition.marginLeft, u = r - a, c = a + e.collisionWidth - s - r;
                    e.collisionWidth > s ? u > 0 && 0 >= c ? (n = t.left + u + e.collisionWidth - s - r, t.left += u - n) : t.left = c > 0 && 0 >= u ? r : u > c ? r + s - e.collisionWidth : r : u > 0 ? t.left += u : c > 0 ? t.left -= c : t.left = o(t.left - a, t.left);
                },
                top: function(t, e) {
                    var n, i = e.within, r = i.isWindow ? i.scrollTop : i.offset.top, s = e.within.height, a = t.top - e.collisionPosition.marginTop, u = r - a, c = a + e.collisionHeight - s - r;
                    e.collisionHeight > s ? u > 0 && 0 >= c ? (n = t.top + u + e.collisionHeight - s - r, t.top += u - n) : t.top = c > 0 && 0 >= u ? r : u > c ? r + s - e.collisionHeight : r : u > 0 ? t.top += u : c > 0 ? t.top -= c : t.top = o(t.top - a, t.top);
                }
            },
            flip: {
                left: function(t, e) {
                    var n, i, r = e.within, o = r.offset.left + r.scrollLeft, a = r.width, u = r.isWindow ? r.scrollLeft : r.offset.left, c = t.left - e.collisionPosition.marginLeft, l = c - u, h = c + e.collisionWidth - a - u, f = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, p = -2 * e.offset[0];
                    0 > l ? (0 > (n = t.left + f + d + p + e.collisionWidth - a - o) || s(l) > n) && (t.left += f + d + p) : h > 0 && (((i = t.left - e.collisionPosition.marginLeft + f + d + p - u) > 0 || h > s(i)) && (t.left += f + d + p));
                },
                top: function(t, e) {
                    var n, i, r = e.within, o = r.offset.top + r.scrollTop, a = r.height, u = r.isWindow ? r.scrollTop : r.offset.top, c = t.top - e.collisionPosition.marginTop, l = c - u, h = c + e.collisionHeight - a - u, f = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, p = -2 * e.offset[1];
                    0 > l ? (0 > (i = t.top + f + d + p + e.collisionHeight - a - o) || s(l) > i) && (t.top += f + d + p) : h > 0 && (((n = t.top - e.collisionPosition.marginTop + f + d + p - u) > 0 || h > s(n)) && (t.top += f + d + p));
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                }
            }
        }, function() {
            var e, n, i, o, s, a = document.getElementsByTagName("body")[0], u = document.createElement("div");
            for (s in e = document.createElement(a ? "div" : "body"), i = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, a && t.extend(i, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            }), i) e.style[s] = i[s];
            e.appendChild(u), (n = a || document.documentElement).insertBefore(e, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", 
            o = t(u).offset().left, r = o > 10 && 11 > o, e.innerHTML = "", n.removeChild(e);
        }();
    }(), t.ui.position, t.widget("ui.sortable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, n) {
            return t >= e && e + n > t;
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
            });
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), 
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(e, n) {
            var i = null, r = !1, o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), 
            t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (i = t(this), !1) : void 0;
            }), t.data(e.target, o.widgetName + "-item") === o && (i = t(e.target)), !!i && (!(this.options.handle && !n && (t(this.options.handle, i).find("*").addBack().each(function() {
                this === e.target && (r = !0);
            }), !r)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))));
        },
        _mouseStart: function(e, n, i) {
            var r, o, s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), 
            this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), 
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), 
            this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), 
            s.cursor && "auto" !== s.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), 
            o.css("cursor", s.cursor), this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)), 
            s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), 
            s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), 
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !i) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0;
        },
        _mouseDrag: function(e) {
            var n, i, r, o, s = this.options, a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - this.document.scrollTop() < s.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - s.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < s.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + s.scrollSpeed)), 
            e.pageX - this.document.scrollLeft() < s.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - s.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < s.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + s.scrollSpeed))), 
            !1 !== a && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), 
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            n = this.items.length - 1; n >= 0; n--) if (r = (i = this.items[n]).item[0], (o = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], r))) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                this._rearrange(e, i), this._trigger("change", e, this._uiHash());
                break;
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), 
            this.lastPositionAbs = this.positionAbs, !1;
        },
        _mouseStop: function(e, n) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var i = this, r = this.placeholder.offset(), o = this.options.axis, s = {};
                    o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(e);
                    });
                } else this._clear(e, n);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var n = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, t(n).each(function() {
                var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]));
            }), !i.length && e.key && i.push(e.key + "="), i.join("&");
        },
        toArray: function(e) {
            var n = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, n.each(function() {
                i.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), i;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, n = e + this.helperProportions.width, i = this.positionAbs.top, r = i + this.helperProportions.height, o = t.left, s = o + t.width, a = t.top, u = a + t.height, c = this.offset.click.top, l = this.offset.click.left, h = "x" === this.options.axis || i + c > a && u > i + c, f = "y" === this.options.axis || e + l > o && s > e + l, d = h && f;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? d : e + this.helperProportions.width / 2 > o && s > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > a && u > r - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), i = e && n, r = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return !!i && (this.floating ? o && "right" === o || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1));
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), i = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return this.floating && r ? "right" === r && n || "left" === r && !n : i && ("down" === i && e || "up" === i && !e);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            function n() {
                a.push(this);
            }
            var i, r, o, s, a = [], u = [], c = this._connectWith();
            if (c && e) for (i = c.length - 1; i >= 0; i--) for (r = (o = t(c[i], this.document[0])).length - 1; r >= 0; r--) (s = t.data(o[r], this.widgetFullName)) && s !== this && !s.options.disabled && u.push([ t.isFunction(s.options.items) ? s.options.items.call(s.element) : t(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s ]);
            for (u.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            i = u.length - 1; i >= 0; i--) u[i][0].each(n);
            return t(a);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var n = 0; e.length > n; n++) if (e[n] === t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var n, i, r, o, s, a, u, c, l = this.items, h = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], f = this._connectWith();
            if (f && this.ready) for (n = f.length - 1; n >= 0; n--) for (i = (r = t(f[n], this.document[0])).length - 1; i >= 0; i--) (o = t.data(r[i], this.widgetFullName)) && o !== this && !o.options.disabled && (h.push([ t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                item: this.currentItem
            }) : t(o.options.items, o.element), o ]), this.containers.push(o));
            for (n = h.length - 1; n >= 0; n--) for (s = h[n][1], i = 0, c = (a = h[n][0]).length; c > i; i++) (u = t(a[i])).data(this.widgetName + "-item", s), 
            l.push({
                item: u,
                instance: s,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(e) {
            var n, i, r, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), n = this.items.length - 1; n >= 0; n--) (i = this.items[n]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item, 
            e || (i.width = r.outerWidth(), i.height = r.outerHeight()), o = r.offset(), i.left = o.left, i.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (n = this.containers.length - 1; n >= 0; n--) o = this.containers[n].element.offset(), 
            this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), 
            this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(e) {
            var n, i = (e = e || this).options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                element: function() {
                    var i = e.currentItem[0].nodeName.toLowerCase(), r = t("<" + i + ">", e.document[0]).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === i ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(r)) : "tr" === i ? e._createTrPlaceholder(e.currentItem, r) : "img" === i && r.attr("src", e.currentItem.attr("src")), 
                    n || r.css("visibility", "hidden"), r;
                },
                update: function(t, r) {
                    (!n || i.forcePlaceholderSize) && (r.height() || r.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                    r.width() || r.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            i.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function(e, n) {
            var i = this;
            e.children().each(function() {
                t("<td>&#160;</td>", i.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n);
            });
        },
        _contactContainers: function(e) {
            var n, i, r, o, s, a, u, c, l, h, f = null, d = null;
            for (n = this.containers.length - 1; n >= 0; n--) if (!t.contains(this.currentItem[0], this.containers[n].element[0])) if (this._intersectsWith(this.containers[n].containerCache)) {
                if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
                f = this.containers[n], d = n;
            } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), 
            this.containers[n].containerCache.over = 0);
            if (f) if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", e, this._uiHash(this)), 
            this.containers[d].containerCache.over = 1); else {
                for (r = 1e4, o = null, s = (l = f.floating || this._isFloating(this.currentItem)) ? "left" : "top", 
                a = l ? "width" : "height", h = l ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) t.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (u = this.items[i].item.offset()[s], 
                c = !1, e[h] - u > this.items[i][a] / 2 && (c = !0), r > Math.abs(e[h] - u) && (r = Math.abs(e[h] - u), 
                o = this.items[i], this.direction = c ? "up" : "down"));
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[d]) return void (this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", e, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[d].element, !0), this._trigger("change", e, this._uiHash()), 
                this.containers[d]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[d], 
                this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", e, this._uiHash(this)), 
                this.containers[d].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var n = this.options, i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), 
            i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), 
            i;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, n, i, r = this.options;
            "parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === r.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === r.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(r.containment) || (e = t(r.containment)[0], n = t(r.containment).offset(), 
            i = "hidden" !== t(e).css("overflow"), this.containment = [ n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(e, n) {
            n || (n = this.position);
            var i = "absolute" === e ? 1 : -1, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
            };
        },
        _generatePosition: function(e) {
            var n, i, r = this.options, o = e.pageX, s = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, u = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), 
            r.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1], s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, 
            i = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0], o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), 
            {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : u ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : u ? 0 : a.scrollLeft())
            };
        },
        _rearrange: function(t, e, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay(function() {
                r === this.counter && this.refreshPositions(!i);
            });
        },
        _clear: function(t, e) {
            function n(t, e, n) {
                return function(i) {
                    n._trigger(t, i, e._uiHash(e));
                };
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && r.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || r.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (r.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), r.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), r.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || r.push(n("deactivate", this, this.containers[i])), 
            this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), 
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), 
            !e) {
                for (i = 0; r.length > i; i++) r[i].call(this, t);
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(e) {
            var n = e || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || t([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: e ? e.element : null
            };
        }
    }), t.widget("ui.slider", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), 
            this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), 
            this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var e, n, i = this.options, r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = [];
            for (n = i.values && i.values.length || 1, r.length > n && (r.slice(n).remove(), r = r.slice(0, n)), 
            e = r.length; n > e; e++) o.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = r.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e);
            });
        },
        _createRange: function() {
            var e = this.options, n = "";
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [ e.values[0], e.values[0] ] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all"), 
            this.range.addClass(n + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(e) {
            var n, i, r, o, s, a, u, c = this, l = this.options;
            return !l.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: e.pageX,
                y: e.pageY
            }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var n = Math.abs(i - c.values(e));
                (r > n || r === n && (e === c._lastChangedValue || c.values(e) === l.min)) && (r = n, o = t(this), s = e);
            }), !1 !== this._start(e, s) && (this._mouseSliding = !0, this._handleIndex = s, o.addClass("ui-state-active").focus(), 
            a = o.offset(), u = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - a.left - o.width() / 2,
                top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, s, i), this._animateOff = !0, !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }, n = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, n), !1;
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), 
            this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, 
            !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(t) {
            var e, n, i, r, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, n = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, 
            n = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (i = n / e) > 1 && (i = 1), 
            0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), 
            o = this._valueMin() + i * r, this._trimAlignValue(o);
        },
        _start: function(t, e) {
            var n = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), 
            this._trigger("start", t, n);
        },
        _slide: function(t, e, n) {
            var i, r, o;
            this.options.values && this.options.values.length ? (i = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && n > i || 1 === e && i > n) && (n = i), 
            n !== this.values(e) && ((r = this.values())[e] = n, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: n,
                values: r
            }), i = this.values(e ? 0 : 1), !1 !== o && this.values(e, n))) : n !== this.value() && (!1 !== (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: n
            })) && this.value(n));
        },
        _stop: function(t, e) {
            var n = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), 
            this._trigger("stop", t, n);
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), 
                this._lastChangedValue = e, this._trigger("change", t, n);
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value();
        },
        values: function(e, n) {
            var i, r, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(n), this._refreshValue(), 
            void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (i = this.options.values, r = arguments[0], o = 0; i.length > o; o += 1) i[o] = this._trimAlignValue(r[o]), 
            this._change(null, o);
            this._refreshValue();
        },
        _setOption: function(e, n) {
            var i, r = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === n ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), t.isArray(this.options.values) && (r = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!n), 
            this._super(e, n), e) {
              case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), i = 0; r > i; i += 1) this._change(null, i);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _value: function() {
            var t = this.options.value;
            return this._trimAlignValue(t);
        },
        _values: function(t) {
            var e, n, i;
            if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (n = this.options.values.slice(), i = 0; n.length > i; i += 1) n[i] = this._trimAlignValue(n[i]);
                return n;
            }
            return [];
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, n = (t - this._valueMin()) % e, i = t - n;
            return 2 * Math.abs(n) >= e && (i += n > 0 ? e : -e), parseFloat(i.toFixed(5));
        },
        _calculateNewMax: function() {
            var t = this.options.max, e = this._valueMin(), n = this.options.step;
            t = Math.floor(+(t - e).toFixed(this._precision()) / n) * n + e, this.max = parseFloat(t.toFixed(this._precision()));
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
        },
        _precisionOf: function(t) {
            var e = "" + t, n = e.indexOf(".");
            return -1 === n ? 0 : e.length - n - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshValue: function() {
            var e, n, i, r, o, s = this.options.range, a = this.options, u = this, c = !this._animateOff && a.animate, l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(i) {
                n = (u.values(i) - u._valueMin()) / (u._valueMax() - u._valueMin()) * 100, l["horizontal" === u.orientation ? "left" : "bottom"] = n + "%", 
                t(this).stop(1, 1)[c ? "animate" : "css"](l, a.animate), !0 === u.options.range && ("horizontal" === u.orientation ? (0 === i && u.range.stop(1, 1)[c ? "animate" : "css"]({
                    left: n + "%"
                }, a.animate), 1 === i && u.range[c ? "animate" : "css"]({
                    width: n - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === i && u.range.stop(1, 1)[c ? "animate" : "css"]({
                    bottom: n + "%"
                }, a.animate), 1 === i && u.range[c ? "animate" : "css"]({
                    height: n - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), e = n;
            }) : (i = this.value(), r = this._valueMin(), o = this._valueMax(), n = o !== r ? (i - r) / (o - r) * 100 : 0, 
            l["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](l, a.animate), 
            "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: n + "%"
            }, a.animate), "max" === s && "horizontal" === this.orientation && this.range[c ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: a.animate
            }), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: n + "%"
            }, a.animate), "max" === s && "vertical" === this.orientation && this.range[c ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: a.animate
            }));
        },
        _handleEvents: {
            keydown: function(e) {
                var n, i, r, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_UP:
                  case t.ui.keyCode.PAGE_DOWN:
                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), 
                    !1 === this._start(e, o))) return;
                }
                switch (r = this.options.step, n = i = this.options.values && this.options.values.length ? this.values(o) : this.value(), 
                e.keyCode) {
                  case t.ui.keyCode.HOME:
                    i = this._valueMin();
                    break;

                  case t.ui.keyCode.END:
                    i = this._valueMax();
                    break;

                  case t.ui.keyCode.PAGE_UP:
                    i = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.PAGE_DOWN:
                    i = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                    if (n === this._valueMax()) return;
                    i = this._trimAlignValue(n + r);
                    break;

                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (n === this._valueMin()) return;
                    i = this._trimAlignValue(n - r);
                }
                this._slide(e, o, i);
            },
            keyup: function(e) {
                var n = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, n), this._change(e, n), t(e.target).removeClass("ui-state-active"));
            }
        }
    });
    var s = "ui-effects-", a = t;
    t.effects = {
        effect: {}
    }, function(t, e) {
        function n(t, e, n) {
            var i = l[e.type] || {};
            return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : t > i.max ? i.max : t);
        }
        function i(n) {
            var i = u(), r = i._rgba = [];
            return n = n.toLowerCase(), d(a, function(t, o) {
                var s, a = o.re.exec(n), u = a && o.parse(a), l = o.space || "rgba";
                return u ? (s = i[l](u), i[c[l].cache] = s[c[l].cache], r = i._rgba = s._rgba, !1) : e;
            }), r.length ? ("0,0,0,0" === r.join() && t.extend(r, o.transparent), i) : o[n];
        }
        function r(t, e, n) {
            return 1 > 6 * (n = (n + 1) % 1) ? t + 6 * (e - t) * n : 1 > 2 * n ? e : 2 > 3 * n ? t + 6 * (e - t) * (2 / 3 - n) : t;
        }
        var o, s = /^([\-+])=\s*(\d+\.?\d*)/, a = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], u = t.Color = function(e, n, i, r) {
            return new t.Color.fn.parse(e, n, i, r);
        }, c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, l = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, h = u.support = {}, f = t("<p>")[0], d = t.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = f.style.backgroundColor.indexOf("rgba") > -1, 
        d(c, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), u.fn = t.extend(u.prototype, {
            parse: function(r, s, a, l) {
                if (r === e) return this._rgba = [ null, null, null, null ], this;
                (r.jquery || r.nodeType) && (r = t(r).css(s), s = e);
                var h = this, f = t.type(r), p = this._rgba = [];
                return s !== e && (r = [ r, s, a, l ], f = "array"), "string" === f ? this.parse(i(r) || o._default) : "array" === f ? (d(c.rgba.props, function(t, e) {
                    p[e.idx] = n(r[e.idx], e);
                }), this) : "object" === f ? (d(c, r instanceof u ? function(t, e) {
                    r[e.cache] && (h[e.cache] = r[e.cache].slice());
                } : function(e, i) {
                    var o = i.cache;
                    d(i.props, function(t, e) {
                        if (!h[o] && i.to) {
                            if ("alpha" === t || null == r[t]) return;
                            h[o] = i.to(h._rgba);
                        }
                        h[o][e.idx] = n(r[t], e, !0);
                    }), h[o] && 0 > t.inArray(null, h[o].slice(0, 3)) && (h[o][3] = 1, i.from && (h._rgba = i.from(h[o])));
                }), this) : e;
            },
            is: function(t) {
                var n = u(t), i = !0, r = this;
                return d(c, function(t, o) {
                    var s, a = n[o.cache];
                    return a && (s = r[o.cache] || o.to && o.to(r._rgba) || [], d(o.props, function(t, n) {
                        return null != a[n.idx] ? i = a[n.idx] === s[n.idx] : e;
                    })), i;
                }), i;
            },
            _space: function() {
                var t = [], e = this;
                return d(c, function(n, i) {
                    e[i.cache] && t.push(n);
                }), t.pop();
            },
            transition: function(t, e) {
                var i = u(t), r = i._space(), o = c[r], s = 0 === this.alpha() ? u("transparent") : this, a = s[o.cache] || o.to(s._rgba), h = a.slice();
                return i = i[o.cache], d(o.props, function(t, r) {
                    var o = r.idx, s = a[o], u = i[o], c = l[r.type] || {};
                    null !== u && (null === s ? h[o] = u : (c.mod && (u - s > c.mod / 2 ? s += c.mod : s - u > c.mod / 2 && (s -= c.mod)), 
                    h[o] = n((u - s) * e + s, r)));
                }), this[r](h);
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var n = this._rgba.slice(), i = n.pop(), r = u(e)._rgba;
                return u(t.map(n, function(t, e) {
                    return (1 - i) * r[e] + i * t;
                }));
            },
            toRgbaString: function() {
                var e = "rgba(", n = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t;
                });
                return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")";
            },
            toHslaString: function() {
                var e = "hsla(", n = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
                });
                return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")";
            },
            toHexString: function(e) {
                var n = this._rgba.slice(), i = n.pop();
                return e && n.push(~~(255 * i)), "#" + t.map(n, function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), u.fn.parse.prototype = u.fn, c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e, n, i = t[0] / 255, r = t[1] / 255, o = t[2] / 255, s = t[3], a = Math.max(i, r, o), u = Math.min(i, r, o), c = a - u, l = a + u, h = .5 * l;
            return e = u === a ? 0 : i === a ? 60 * (r - o) / c + 360 : r === a ? 60 * (o - i) / c + 120 : 60 * (i - r) / c + 240, 
            n = 0 === c ? 0 : .5 >= h ? c / l : c / (2 - l), [ Math.round(e) % 360, n, h, null == s ? 1 : s ];
        }, c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, n = t[1], i = t[2], o = t[3], s = .5 >= i ? i * (1 + n) : i + n - i * n, a = 2 * i - s;
            return [ Math.round(255 * r(a, s, e + 1 / 3)), Math.round(255 * r(a, s, e)), Math.round(255 * r(a, s, e - 1 / 3)), o ];
        }, d(c, function(i, r) {
            var o = r.props, a = r.cache, c = r.to, l = r.from;
            u.fn[i] = function(i) {
                if (c && !this[a] && (this[a] = c(this._rgba)), i === e) return this[a].slice();
                var r, s = t.type(i), h = "array" === s || "object" === s ? i : arguments, f = this[a].slice();
                return d(o, function(t, e) {
                    var i = h["object" === s ? t : e.idx];
                    null == i && (i = f[e.idx]), f[e.idx] = n(i, e);
                }), l ? ((r = u(l(f)))[a] = f, r) : u(f);
            }, d(o, function(e, n) {
                u.fn[e] || (u.fn[e] = function(r) {
                    var o, a = t.type(r), u = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i, c = this[u](), l = c[n.idx];
                    return "undefined" === a ? l : ("function" === a && (r = r.call(this, l), a = t.type(r)), null == r && n.empty ? this : ("string" === a && ((o = s.exec(r)) && (r = l + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), 
                    c[n.idx] = r, this[u](c)));
                });
            });
        }), u.hook = function(e) {
            var n = e.split(" ");
            d(n, function(e, n) {
                t.cssHooks[n] = {
                    set: function(e, r) {
                        var o, s, a = "";
                        if ("transparent" !== r && ("string" !== t.type(r) || (o = i(r)))) {
                            if (r = u(o || r), !h.rgba && 1 !== r._rgba[3]) {
                                for (s = "backgroundColor" === n ? e.parentNode : e; ("" === a || "transparent" === a) && s && s.style; ) try {
                                    a = t.css(s, "backgroundColor"), s = s.parentNode;
                                } catch (t) {}
                                r = r.blend(a && "transparent" !== a ? a : "_default");
                            }
                            r = r.toRgbaString();
                        }
                        try {
                            e.style[n] = r;
                        } catch (t) {}
                    }
                }, t.fx.step[n] = function(e) {
                    e.colorInit || (e.start = u(e.elem, n), e.end = u(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos));
                };
            });
        }, u.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return d([ "Top", "Right", "Bottom", "Left" ], function(n, i) {
                    e["border" + i + "Color"] = t;
                }), e;
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(a), function() {
        function e(e) {
            var n, i, r = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (r && r.length && r[0] && r[r[0]]) for (i = r.length; i--; ) "string" == typeof r[n = r[i]] && (o[t.camelCase(n)] = r[n]); else for (n in r) "string" == typeof r[n] && (o[n] = r[n]);
            return o;
        }
        function n(e, n) {
            var i, o, s = {};
            for (i in n) o = n[i], e[i] !== o && (r[i] || (t.fx.step[i] || !isNaN(parseFloat(o))) && (s[i] = o));
            return s;
        }
        var i = [ "add", "remove", "toggle" ], r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(e, n) {
            t.fx.step[n] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (a.style(t.elem, n, t.end), t.setAttr = !0);
            };
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function(r, o, s, a) {
            var u = t.speed(o, s, a);
            return this.queue(function() {
                var o, s = t(this), a = s.attr("class") || "", c = u.children ? s.find("*").addBack() : s;
                c = c.map(function() {
                    return {
                        el: t(this),
                        start: e(this)
                    };
                }), (o = function() {
                    t.each(i, function(t, e) {
                        r[e] && s[e + "Class"](r[e]);
                    });
                })(), c = c.map(function() {
                    return this.end = e(this.el[0]), this.diff = n(this.start, this.end), this;
                }), s.attr("class", a), c = c.map(function() {
                    var e = this, n = t.Deferred(), i = t.extend({}, u, {
                        queue: !1,
                        complete: function() {
                            n.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, i), n.promise();
                }), t.when.apply(t, c.get()).done(function() {
                    o(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "");
                        });
                    }), u.complete.call(s[0]);
                });
            });
        }, t.fn.extend({
            addClass: function(e) {
                return function(n, i, r, o) {
                    return i ? t.effects.animateClass.call(this, {
                        add: n
                    }, i, r, o) : e.apply(this, arguments);
                };
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(n, i, r, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: n
                    }, i, r, o) : e.apply(this, arguments);
                };
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(n, i, r, o, s) {
                    return "boolean" == typeof i || void 0 === i ? r ? t.effects.animateClass.call(this, i ? {
                        add: n
                    } : {
                        remove: n
                    }, r, o, s) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: n
                    }, i, r, o);
                };
            }(t.fn.toggleClass),
            switchClass: function(e, n, i, r, o) {
                return t.effects.animateClass.call(this, {
                    add: n,
                    remove: e
                }, i, r, o);
            }
        });
    }(), function() {
        function e(e, n, i, r) {
            return t.isPlainObject(e) && (n = e, e = e.effect), e = {
                effect: e
            }, null == n && (n = {}), t.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (r = i, 
            i = n, n = {}), t.isFunction(i) && (r = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, 
            e.complete = r || n.complete, e;
        }
        function n(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == (void 0 === e ? "undefined" : _typeof(e)) && !e.effect));
        }
        t.extend(t.effects, {
            version: "1.11.4",
            save: function(t, e) {
                for (var n = 0; e.length > n; n++) null !== e[n] && t.data(s + e[n], t[0].style[e[n]]);
            },
            restore: function(t, e) {
                var n, i;
                for (i = 0; e.length > i; i++) null !== e[i] && (void 0 === (n = t.data(s + e[i])) && (n = ""), t.css(e[i], n));
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            getBaseline: function(t, e) {
                var n, i;
                switch (t[0]) {
                  case "top":
                    n = 0;
                    break;

                  case "middle":
                    n = .5;
                    break;

                  case "bottom":
                    n = 1;
                    break;

                  default:
                    n = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    i = 0;
                    break;

                  case "center":
                    i = .5;
                    break;

                  case "right":
                    i = 1;
                    break;

                  default:
                    i = t[1] / e.width;
                }
                return {
                    x: i,
                    y: n
                };
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var n = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                }, i = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), r = {
                    width: e.width(),
                    height: e.height()
                }, o = document.activeElement;
                try {
                    o.id;
                } catch (t) {
                    o = document.body;
                }
                return e.wrap(i), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(n, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each([ "top", "left", "bottom", "right" ], function(t, i) {
                    n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(r), i.css(n).show();
            },
            removeWrapper: function(e) {
                var n = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), 
                e;
            },
            setTransition: function(e, n, i, r) {
                return r = r || {}, t.each(n, function(t, n) {
                    var o = e.cssUnit(n);
                    o[0] > 0 && (r[n] = o[0] * i + o[1]);
                }), r;
            }
        }), t.fn.extend({
            effect: function() {
                function n(e) {
                    function n() {
                        t.isFunction(o) && o.call(r[0]), t.isFunction(e) && e();
                    }
                    var r = t(this), o = i.complete, a = i.mode;
                    (r.is(":hidden") ? "hide" === a : "show" === a) ? (r[a](), n()) : s.call(r[0], i, n);
                }
                var i = e.apply(this, arguments), r = i.mode, o = i.queue, s = t.effects.effect[i.effect];
                return t.fx.off || !s ? r ? this[r](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this);
                }) : !1 === o ? this.each(n) : this.queue(o || "fx", n);
            },
            show: function(t) {
                return function(i) {
                    if (n(i)) return t.apply(this, arguments);
                    var r = e.apply(this, arguments);
                    return r.mode = "show", this.effect.call(this, r);
                };
            }(t.fn.show),
            hide: function(t) {
                return function(i) {
                    if (n(i)) return t.apply(this, arguments);
                    var r = e.apply(this, arguments);
                    return r.mode = "hide", this.effect.call(this, r);
                };
            }(t.fn.hide),
            toggle: function(t) {
                return function(i) {
                    if (n(i) || "boolean" == typeof i) return t.apply(this, arguments);
                    var r = e.apply(this, arguments);
                    return r.mode = "toggle", this.effect.call(this, r);
                };
            }(t.fn.toggle),
            cssUnit: function(e) {
                var n = this.css(e), i = [];
                return t.each([ "em", "px", "%", "pt" ], function(t, e) {
                    n.indexOf(e) > 0 && (i = [ parseFloat(n), e ]);
                }), i;
            }
        });
    }(), function() {
        var e = {};
        t.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(t, n) {
            e[n] = function(e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, n = 4; ((e = Math.pow(2, --n)) - 1) / 11 > t; ) ;
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function(e, n) {
            t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function(t) {
                return 1 - n(1 - t);
            }, t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2;
            };
        });
    }(), t.effects, t.effects.effect.blind = function(e, n) {
        var i, r, o, s = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], u = t.effects.setMode(s, e.mode || "hide"), c = e.direction || "up", l = /up|down|vertical/.test(c), h = l ? "height" : "width", f = l ? "top" : "left", d = /up|left|vertical|horizontal/.test(c), p = {}, g = "show" === u;
        s.parent().is(".ui-effects-wrapper") ? t.effects.save(s.parent(), a) : t.effects.save(s, a), s.show(), 
        r = (i = t.effects.createWrapper(s).css({
            overflow: "hidden"
        }))[h](), o = parseFloat(i.css(f)) || 0, p[h] = g ? r : 0, d || (s.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
            position: "absolute"
        }), p[f] = g ? o : r + o), g && (i.css(h, 0), d || i.css(f, o + r)), i.animate(p, {
            duration: e.duration,
            easing: e.easing,
            queue: !1,
            complete: function() {
                "hide" === u && s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), n();
            }
        });
    }, t.effects.effect.bounce = function(e, n) {
        var i, r, o, s = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], u = t.effects.setMode(s, e.mode || "effect"), c = "hide" === u, l = "show" === u, h = e.direction || "up", f = e.distance, d = e.times || 5, p = 2 * d + (l || c ? 1 : 0), g = e.duration / p, m = e.easing, v = "up" === h || "down" === h ? "top" : "left", y = "up" === h || "left" === h, b = s.queue(), w = b.length;
        for ((l || c) && a.push("opacity"), t.effects.save(s, a), s.show(), t.effects.createWrapper(s), f || (f = s["top" === v ? "outerHeight" : "outerWidth"]() / 3), 
        l && ((o = {
            opacity: 1
        })[v] = 0, s.css("opacity", 0).css(v, y ? 2 * -f : 2 * f).animate(o, g, m)), c && (f /= Math.pow(2, d - 1)), 
        (o = {})[v] = 0, i = 0; d > i; i++) (r = {})[v] = (y ? "-=" : "+=") + f, s.animate(r, g, m).animate(o, g, m), 
        f = c ? 2 * f : f / 2;
        c && ((r = {
            opacity: 0
        })[v] = (y ? "-=" : "+=") + f, s.animate(r, g, m)), s.queue(function() {
            c && s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), n();
        }), w > 1 && b.splice.apply(b, [ 1, 0 ].concat(b.splice(w, p + 1))), s.dequeue();
    }, t.effects.effect.clip = function(e, n) {
        var i, r, o, s = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], u = "show" === t.effects.setMode(s, e.mode || "hide"), c = "vertical" === (e.direction || "vertical"), l = c ? "height" : "width", h = c ? "top" : "left", f = {};
        t.effects.save(s, a), s.show(), i = t.effects.createWrapper(s).css({
            overflow: "hidden"
        }), o = (r = "IMG" === s[0].tagName ? i : s)[l](), u && (r.css(l, 0), r.css(h, o / 2)), f[l] = u ? o : 0, 
        f[h] = u ? 0 : o / 2, r.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                u || s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), n();
            }
        });
    }, t.effects.effect.drop = function(e, n) {
        var i, r = t(this), o = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ], s = t.effects.setMode(r, e.mode || "hide"), a = "show" === s, u = e.direction || "left", c = "up" === u || "down" === u ? "top" : "left", l = "up" === u || "left" === u ? "pos" : "neg", h = {
            opacity: a ? 1 : 0
        };
        t.effects.save(r, o), r.show(), t.effects.createWrapper(r), i = e.distance || r["top" === c ? "outerHeight" : "outerWidth"](!0) / 2, 
        a && r.css("opacity", 0).css(c, "pos" === l ? -i : i), h[c] = (a ? "pos" === l ? "+=" : "-=" : "pos" === l ? "-=" : "+=") + i, 
        r.animate(h, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === s && r.hide(), t.effects.restore(r, o), t.effects.removeWrapper(r), n();
            }
        });
    }, t.effects.effect.explode = function(e, n) {
        function i() {
            v.push(this), v.length === l * h && (f.css({
                visibility: "visible"
            }), t(v).remove(), d || f.hide(), n());
        }
        var r, o, s, a, u, c, l = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, h = l, f = t(this), d = "show" === t.effects.setMode(f, e.mode || "hide"), p = f.show().css("visibility", "hidden").offset(), g = Math.ceil(f.outerWidth() / h), m = Math.ceil(f.outerHeight() / l), v = [];
        for (r = 0; l > r; r++) for (a = p.top + r * m, c = r - (l - 1) / 2, o = 0; h > o; o++) s = p.left + o * g, 
        u = o - (h - 1) / 2, f.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -o * g,
            top: -r * m
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: g,
            height: m,
            left: s + (d ? u * g : 0),
            top: a + (d ? c * m : 0),
            opacity: d ? 0 : 1
        }).animate({
            left: s + (d ? 0 : u * g),
            top: a + (d ? 0 : c * m),
            opacity: d ? 1 : 0
        }, e.duration || 500, e.easing, i);
    }, t.effects.effect.fade = function(e, n) {
        var i = t(this), r = t.effects.setMode(i, e.mode || "toggle");
        i.animate({
            opacity: r
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: n
        });
    }, t.effects.effect.fold = function(e, n) {
        var i, r, o = t(this), s = [ "position", "top", "bottom", "left", "right", "height", "width" ], a = t.effects.setMode(o, e.mode || "hide"), u = "show" === a, c = "hide" === a, l = e.size || 15, h = /([0-9]+)%/.exec(l), f = !!e.horizFirst, d = u !== f, p = d ? [ "width", "height" ] : [ "height", "width" ], g = e.duration / 2, m = {}, v = {};
        t.effects.save(o, s), o.show(), i = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), r = d ? [ i.width(), i.height() ] : [ i.height(), i.width() ], h && (l = parseInt(h[1], 10) / 100 * r[c ? 0 : 1]), 
        u && i.css(f ? {
            height: 0,
            width: l
        } : {
            height: l,
            width: 0
        }), m[p[0]] = u ? r[0] : l, v[p[1]] = u ? r[1] : 0, i.animate(m, g, e.easing).animate(v, g, e.easing, function() {
            c && o.hide(), t.effects.restore(o, s), t.effects.removeWrapper(o), n();
        });
    }, t.effects.effect.highlight = function(e, n) {
        var i = t(this), r = [ "backgroundImage", "backgroundColor", "opacity" ], o = t.effects.setMode(i, e.mode || "show"), s = {
            backgroundColor: i.css("backgroundColor")
        };
        "hide" === o && (s.opacity = 0), t.effects.save(i, r), i.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(s, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && i.hide(), t.effects.restore(i, r), n();
            }
        });
    }, t.effects.effect.size = function(e, n) {
        var i, r, o, s = t(this), a = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ], u = [ "width", "height", "overflow" ], c = [ "fontSize" ], l = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], h = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], f = t.effects.setMode(s, e.mode || "effect"), d = e.restore || "effect" !== f, p = e.scale || "both", g = e.origin || [ "middle", "center" ], m = s.css("position"), v = d ? a : [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ], y = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === f && s.show(), i = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }, "toggle" === e.mode && "show" === f ? (s.from = e.to || y, s.to = e.from || i) : (s.from = e.from || ("show" === f ? y : i), 
        s.to = e.to || ("hide" === f ? y : i)), o = {
            from: {
                y: s.from.height / i.height,
                x: s.from.width / i.width
            },
            to: {
                y: s.to.height / i.height,
                x: s.to.width / i.width
            }
        }, ("box" === p || "both" === p) && (o.from.y !== o.to.y && (v = v.concat(l), s.from = t.effects.setTransition(s, l, o.from.y, s.from), 
        s.to = t.effects.setTransition(s, l, o.to.y, s.to)), o.from.x !== o.to.x && (v = v.concat(h), s.from = t.effects.setTransition(s, h, o.from.x, s.from), 
        s.to = t.effects.setTransition(s, h, o.to.x, s.to))), ("content" === p || "both" === p) && o.from.y !== o.to.y && (v = v.concat(c).concat(u), 
        s.from = t.effects.setTransition(s, c, o.from.y, s.from), s.to = t.effects.setTransition(s, c, o.to.y, s.to)), 
        t.effects.save(s, v), s.show(), t.effects.createWrapper(s), s.css("overflow", "hidden").css(s.from), 
        g && (r = t.effects.getBaseline(g, i), s.from.top = (i.outerHeight - s.outerHeight()) * r.y, s.from.left = (i.outerWidth - s.outerWidth()) * r.x, 
        s.to.top = (i.outerHeight - s.to.outerHeight) * r.y, s.to.left = (i.outerWidth - s.to.outerWidth) * r.x), 
        s.css(s.from), ("content" === p || "both" === p) && (l = l.concat([ "marginTop", "marginBottom" ]).concat(c), 
        h = h.concat([ "marginLeft", "marginRight" ]), u = a.concat(l).concat(h), s.find("*[width]").each(function() {
            var n = t(this), i = n.height(), r = n.width(), s = n.outerHeight(), a = n.outerWidth();
            d && t.effects.save(n, u), n.from = {
                height: i * o.from.y,
                width: r * o.from.x,
                outerHeight: s * o.from.y,
                outerWidth: a * o.from.x
            }, n.to = {
                height: i * o.to.y,
                width: r * o.to.x,
                outerHeight: i * o.to.y,
                outerWidth: r * o.to.x
            }, o.from.y !== o.to.y && (n.from = t.effects.setTransition(n, l, o.from.y, n.from), n.to = t.effects.setTransition(n, l, o.to.y, n.to)), 
            o.from.x !== o.to.x && (n.from = t.effects.setTransition(n, h, o.from.x, n.from), n.to = t.effects.setTransition(n, h, o.to.x, n.to)), 
            n.css(n.from), n.animate(n.to, e.duration, e.easing, function() {
                d && t.effects.restore(n, u);
            });
        })), s.animate(s.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === s.to.opacity && s.css("opacity", s.from.opacity), "hide" === f && s.hide(), t.effects.restore(s, v), 
                d || ("static" === m ? s.css({
                    position: "relative",
                    top: s.to.top,
                    left: s.to.left
                }) : t.each([ "top", "left" ], function(t, e) {
                    s.css(e, function(e, n) {
                        var i = parseInt(n, 10), r = t ? s.to.left : s.to.top;
                        return "auto" === n ? r + "px" : i + r + "px";
                    });
                })), t.effects.removeWrapper(s), n();
            }
        });
    }, t.effects.effect.scale = function(e, n) {
        var i = t(this), r = t.extend(!0, {}, e), o = t.effects.setMode(i, e.mode || "effect"), s = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100), a = e.direction || "both", u = e.origin, c = {
            height: i.height(),
            width: i.width(),
            outerHeight: i.outerHeight(),
            outerWidth: i.outerWidth()
        }, l = "horizontal" !== a ? s / 100 : 1, h = "vertical" !== a ? s / 100 : 1;
        r.effect = "size", r.queue = !1, r.complete = n, "effect" !== o && (r.origin = u || [ "middle", "center" ], 
        r.restore = !0), r.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : c), r.to = {
            height: c.height * l,
            width: c.width * h,
            outerHeight: c.outerHeight * l,
            outerWidth: c.outerWidth * h
        }, r.fade && ("show" === o && (r.from.opacity = 0, r.to.opacity = 1), "hide" === o && (r.from.opacity = 1, 
        r.to.opacity = 0)), i.effect(r);
    }, t.effects.effect.puff = function(e, n) {
        var i = t(this), r = t.effects.setMode(i, e.mode || "hide"), o = "hide" === r, s = parseInt(e.percent, 10) || 150, a = s / 100, u = {
            height: i.height(),
            width: i.width(),
            outerHeight: i.outerHeight(),
            outerWidth: i.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: r,
            complete: n,
            percent: o ? s : 100,
            from: o ? u : {
                height: u.height * a,
                width: u.width * a,
                outerHeight: u.outerHeight * a,
                outerWidth: u.outerWidth * a
            }
        }), i.effect(e);
    }, t.effects.effect.pulsate = function(e, n) {
        var i, r = t(this), o = t.effects.setMode(r, e.mode || "show"), s = "show" === o, a = "hide" === o, u = s || "hide" === o, c = 2 * (e.times || 5) + (u ? 1 : 0), l = e.duration / c, h = 0, f = r.queue(), d = f.length;
        for ((s || !r.is(":visible")) && (r.css("opacity", 0).show(), h = 1), i = 1; c > i; i++) r.animate({
            opacity: h
        }, l, e.easing), h = 1 - h;
        r.animate({
            opacity: h
        }, l, e.easing), r.queue(function() {
            a && r.hide(), n();
        }), d > 1 && f.splice.apply(f, [ 1, 0 ].concat(f.splice(d, c + 1))), r.dequeue();
    }, t.effects.effect.shake = function(e, n) {
        var i, r = t(this), o = [ "position", "top", "bottom", "left", "right", "height", "width" ], s = t.effects.setMode(r, e.mode || "effect"), a = e.direction || "left", u = e.distance || 20, c = e.times || 3, l = 2 * c + 1, h = Math.round(e.duration / l), f = "up" === a || "down" === a ? "top" : "left", d = "up" === a || "left" === a, p = {}, g = {}, m = {}, v = r.queue(), y = v.length;
        for (t.effects.save(r, o), r.show(), t.effects.createWrapper(r), p[f] = (d ? "-=" : "+=") + u, g[f] = (d ? "+=" : "-=") + 2 * u, 
        m[f] = (d ? "-=" : "+=") + 2 * u, r.animate(p, h, e.easing), i = 1; c > i; i++) r.animate(g, h, e.easing).animate(m, h, e.easing);
        r.animate(g, h, e.easing).animate(p, h / 2, e.easing).queue(function() {
            "hide" === s && r.hide(), t.effects.restore(r, o), t.effects.removeWrapper(r), n();
        }), y > 1 && v.splice.apply(v, [ 1, 0 ].concat(v.splice(y, l + 1))), r.dequeue();
    }, t.effects.effect.slide = function(e, n) {
        var i, r = t(this), o = [ "position", "top", "bottom", "left", "right", "width", "height" ], s = t.effects.setMode(r, e.mode || "show"), a = "show" === s, u = e.direction || "left", c = "up" === u || "down" === u ? "top" : "left", l = "up" === u || "left" === u, h = {};
        t.effects.save(r, o), r.show(), i = e.distance || r["top" === c ? "outerHeight" : "outerWidth"](!0), 
        t.effects.createWrapper(r).css({
            overflow: "hidden"
        }), a && r.css(c, l ? isNaN(i) ? "-" + i : -i : i), h[c] = (a ? l ? "+=" : "-=" : l ? "-=" : "+=") + i, 
        r.animate(h, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === s && r.hide(), t.effects.restore(r, o), t.effects.removeWrapper(r), n();
            }
        });
    }, t.effects.effect.transfer = function(e, n) {
        var i = t(this), r = t(e.to), o = "fixed" === r.css("position"), s = t("body"), a = o ? s.scrollTop() : 0, u = o ? s.scrollLeft() : 0, c = r.offset(), l = {
            top: c.top - a,
            left: c.left - u,
            height: r.innerHeight(),
            width: r.innerWidth()
        }, h = i.offset(), f = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
            top: h.top - a,
            left: h.left - u,
            height: i.innerHeight(),
            width: i.innerWidth(),
            position: o ? "fixed" : "absolute"
        }).animate(l, e.duration, e.easing, function() {
            f.remove(), n();
        });
    };
}), 
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(t, e, n) {
    var i, r, o = {}, s = e.documentElement, a = "modernizr", u = e.createElement(a), c = u.style, l = e.createElement("input"), h = ":)", f = {}.toString, d = " -webkit- -moz- -o- -ms- ".split(" "), p = "Webkit Moz O ms".split(" "), g = "Webkit Moz O ms".toLowerCase().split(" "), m = "http://www.w3.org/2000/svg", v = {}, y = {}, b = {}, w = [], x = w.slice, _ = function(t, n, i, r) {
        var o, u, c, l, h = e.createElement("div"), f = e.body, d = f || e.createElement("body");
        if (parseInt(i, 10)) for (;i--; ) (c = e.createElement("div")).id = r ? r[i] : a + (i + 1), h.appendChild(c);
        return o = [ "&#173;", '<style id="s', a, '">', t, "</style>" ].join(""), h.id = a, (f ? h : d).innerHTML += o, 
        d.appendChild(h), f || (d.style.background = "", d.style.overflow = "hidden", l = s.style.overflow, 
        s.style.overflow = "hidden", s.appendChild(d)), u = n(h, t), f ? h.parentNode.removeChild(h) : (d.parentNode.removeChild(d), 
        s.style.overflow = l), !!u;
    }, T = function() {
        var t = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return function(i, r) {
            r = r || e.createElement(t[i] || "div");
            var o = (i = "on" + i) in r;
            return o || (r.setAttribute || (r = e.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(i, ""), 
            o = S(r[i], "function"), S(r[i], "undefined") || (r[i] = n), r.removeAttribute(i))), r = null, o;
        };
    }(), C = {}.hasOwnProperty;
    function k(t) {
        c.cssText = t;
    }
    function S(t, e) {
        return (void 0 === t ? "undefined" : _typeof(t)) === e;
    }
    function E(t, e) {
        return !!~("" + t).indexOf(e);
    }
    function A(t, e) {
        for (var i in t) {
            var r = t[i];
            if (!E(r, "-") && c[r] !== n) return "pfx" != e || r;
        }
        return !1;
    }
    function N(t, e, i) {
        var r = t.charAt(0).toUpperCase() + t.slice(1), o = (t + " " + p.join(r + " ") + r).split(" ");
        return S(e, "string") || S(e, "undefined") ? A(o, e) : function(t, e, i) {
            for (var r in t) {
                var o = e[t[r]];
                if (o !== n) return !1 === i ? t[r] : S(o, "function") ? o.bind(i || e) : o;
            }
            return !1;
        }(o = (t + " " + g.join(r + " ") + r).split(" "), e, i);
    }
    for (var I in r = S(C, "undefined") || S(C.call, "undefined") ? function(t, e) {
        return e in t && S(t.constructor.prototype[e], "undefined");
    } : function(t, e) {
        return C.call(t, e);
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError();
        var n = x.call(arguments, 1);
        return function i() {
            if (this instanceof i) {
                var r = function() {};
                r.prototype = e.prototype;
                var o = new r(), s = e.apply(o, n.concat(x.call(arguments)));
                return Object(s) === s ? s : o;
            }
            return e.apply(t, n.concat(x.call(arguments)));
        };
    }), v.flexbox = function() {
        return N("flexWrap");
    }, v.flexboxlegacy = function() {
        return N("boxDirection");
    }, v.canvas = function() {
        var t = e.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"));
    }, v.canvastext = function() {
        return !(!o.canvas || !S(e.createElement("canvas").getContext("2d").fillText, "function"));
    }, v.webgl = function() {
        return !!t.WebGLRenderingContext;
    }, v.touch = function() {
        var n;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : _([ "@media (", d.join("touch-enabled),("), a, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(t) {
            n = 9 === t.offsetTop;
        }), n;
    }, v.geolocation = function() {
        return "geolocation" in navigator;
    }, v.postmessage = function() {
        return !!t.postMessage;
    }, v.websqldatabase = function() {
        return !!t.openDatabase;
    }, v.indexedDB = function() {
        return !!N("indexedDB", t);
    }, v.hashchange = function() {
        return T("hashchange", t) && (e.documentMode === n || e.documentMode > 7);
    }, v.history = function() {
        return !(!t.history || !history.pushState);
    }, v.draganddrop = function() {
        var t = e.createElement("div");
        return "draggable" in t || "ondragstart" in t && "ondrop" in t;
    }, v.websockets = function() {
        return "WebSocket" in t || "MozWebSocket" in t;
    }, v.rgba = function() {
        return k("background-color:rgba(150,255,150,.5)"), E(c.backgroundColor, "rgba");
    }, v.hsla = function() {
        return k("background-color:hsla(120,40%,100%,.5)"), E(c.backgroundColor, "rgba") || E(c.backgroundColor, "hsla");
    }, v.multiplebgs = function() {
        return k("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background);
    }, v.backgroundsize = function() {
        return N("backgroundSize");
    }, v.borderimage = function() {
        return N("borderImage");
    }, v.borderradius = function() {
        return N("borderRadius");
    }, v.boxshadow = function() {
        return N("boxShadow");
    }, v.textshadow = function() {
        return "" === e.createElement("div").style.textShadow;
    }, v.opacity = function() {
        var t, e;
        return t = "opacity:.55", k(d.join(t + ";") + (e || "")), /^0.55$/.test(c.opacity);
    }, v.cssanimations = function() {
        return N("animationName");
    }, v.csscolumns = function() {
        return N("columnCount");
    }, v.cssgradients = function() {
        var t = "background-image:";
        return k((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + d.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), 
        E(c.backgroundImage, "gradient");
    }, v.cssreflections = function() {
        return N("boxReflect");
    }, v.csstransforms = function() {
        return !!N("transform");
    }, v.csstransforms3d = function() {
        var t = !!N("perspective");
        return t && "webkitPerspective" in s.style && _("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight;
        }), t;
    }, v.csstransitions = function() {
        return N("transition");
    }, v.fontface = function() {
        var t;
        return _('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
            var r = e.getElementById("smodernizr"), o = r.sheet || r.styleSheet, s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0]);
        }), t;
    }, v.generatedcontent = function() {
        var t;
        return _([ "#", a, "{font:0/0 a}#", a, ':after{content:"', h, '";visibility:hidden;font:3px/1 a}' ].join(""), function(e) {
            t = e.offsetHeight >= 3;
        }), t;
    }, v.video = function() {
        var t = e.createElement("video"), n = !1;
        try {
            (n = !!t.canPlayType) && ((n = new Boolean(n)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (t) {}
        return n;
    }, v.audio = function() {
        var t = e.createElement("audio"), n = !1;
        try {
            (n = !!t.canPlayType) && ((n = new Boolean(n)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (t) {}
        return n;
    }, v.localstorage = function() {
        try {
            return localStorage.setItem(a, a), localStorage.removeItem(a), !0;
        } catch (t) {
            return !1;
        }
    }, v.sessionstorage = function() {
        try {
            return sessionStorage.setItem(a, a), sessionStorage.removeItem(a), !0;
        } catch (t) {
            return !1;
        }
    }, v.webworkers = function() {
        return !!t.Worker;
    }, v.applicationcache = function() {
        return !!t.applicationCache;
    }, v.svg = function() {
        return !!e.createElementNS && !!e.createElementNS(m, "svg").createSVGRect;
    }, v.inlinesvg = function() {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == m;
    }, v.smil = function() {
        return !!e.createElementNS && /SVGAnimate/.test(f.call(e.createElementNS(m, "animate")));
    }, v.svgclippaths = function() {
        return !!e.createElementNS && /SVGClipPath/.test(f.call(e.createElementNS(m, "clipPath")));
    }, v) r(v, I) && (i = I.toLowerCase(), o[i] = v[I](), w.push((o[i] ? "" : "no-") + i));
    return o.input || (o.input = function(n) {
        for (var i = 0, r = n.length; i < r; i++) b[n[i]] = !!(n[i] in l);
        return b.list && (b.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), b;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(t) {
        for (var i, r, o, a = 0, u = t.length; a < u; a++) l.setAttribute("type", r = t[a]), (i = "text" !== l.type) && (l.value = h, 
        l.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && l.style.WebkitAppearance !== n ? (s.appendChild(l), 
        i = (o = e.defaultView).getComputedStyle && "textfield" !== o.getComputedStyle(l, null).WebkitAppearance && 0 !== l.offsetHeight, 
        s.removeChild(l)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? l.checkValidity && !1 === l.checkValidity() : l.value != h)), 
        y[t[a]] = !!i;
        return y;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))), 
    o.addTest = function(t, e) {
        if ("object" == (void 0 === t ? "undefined" : _typeof(t))) for (var i in t) r(t, i) && o.addTest(i, t[i]); else {
            if (t = t.toLowerCase(), o[t] !== n) return o;
            e = "function" == typeof e ? e() : e, s.className += " " + (e ? "" : "no-") + t, o[t] = e;
        }
        return o;
    }, k(""), u = l = null, function(t, e) {
        var n, i, r = t.html5 || {}, o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, s = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, a = "_html5shiv", u = 0, c = {};
        function l() {
            var t = p.elements;
            return "string" == typeof t ? t.split(" ") : t;
        }
        function h(t) {
            var e = c[t[a]];
            return e || (e = {}, u++, t[a] = u, c[u] = e), e;
        }
        function f(t, n, r) {
            return n || (n = e), i ? n.createElement(t) : (r || (r = h(n)), !(a = r.cache[t] ? r.cache[t].cloneNode() : s.test(t) ? (r.cache[t] = r.createElem(t)).cloneNode() : r.createElem(t)).canHaveChildren || o.test(t) || a.tagUrn ? a : r.frag.appendChild(a));
            var a;
        }
        function d(t) {
            t || (t = e);
            var r = h(t);
            return !p.shivCSS || n || r.hasCSS || (r.hasCSS = !!function(t, e) {
                var n = t.createElement("p"), i = t.getElementsByTagName("head")[0] || t.documentElement;
                return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild);
            }(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), 
            i || function(t, e) {
                e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), 
                t.createElement = function(n) {
                    return p.shivMethods ? f(n, t, e) : e.createElem(n);
                }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/[\w\-]+/g, function(t) {
                    return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")';
                }) + ");return n}")(p, e.frag);
            }(t, r), t;
        }
        !function() {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", n = "hidden" in t, i = 1 == t.childNodes.length || function() {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement;
                }();
            } catch (t) {
                n = !0, i = !0;
            }
        }();
        var p = {
            elements: r.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== r.shivCSS,
            supportsUnknownElements: i,
            shivMethods: !1 !== r.shivMethods,
            type: "default",
            shivDocument: d,
            createElement: f,
            createDocumentFragment: function(t, n) {
                if (t || (t = e), i) return t.createDocumentFragment();
                for (var r = (n = n || h(t)).frag.cloneNode(), o = 0, s = l(), a = s.length; o < a; o++) r.createElement(s[o]);
                return r;
            }
        };
        t.html5 = p, d(e);
    }(this, e), o._version = "2.8.3", o._prefixes = d, o._domPrefixes = g, o._cssomPrefixes = p, o.mq = function(e) {
        var n, i = t.matchMedia || t.msMatchMedia;
        return i ? i(e) && i(e).matches || !1 : (_("@media " + e + " { #" + a + " { position: absolute; } }", function(e) {
            n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position;
        }), n);
    }, o.hasEvent = T, o.testProp = function(t) {
        return A([ t ]);
    }, o.testAllProps = N, o.testStyles = _, o.prefixed = function(t, e, n) {
        return e ? N(t, e, n) : N(t, "pfx");
    }, s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + w.join(" "), o;
}(this, this.document), function(t, e) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e();
}(this, function() {
    "use strict";
    function t(t) {
        return "function" == typeof t;
    }
    function e() {
        var t = setTimeout;
        return function() {
            return t(n, 1);
        };
    }
    function n() {
        for (var t = 0; t < w; t += 2) {
            (0, N[t])(N[t + 1]), N[t] = void 0, N[t + 1] = void 0;
        }
        w = 0;
    }
    function i(t, e) {
        var n = arguments, i = this, r = new this.constructor(o);
        void 0 === r[P] && m(r);
        var s = i._state;
        return s ? function() {
            var t = n[s - 1];
            T(function() {
                return g(s, r, t, i._result);
            });
        }() : f(i, r, t, e), r;
    }
    function r(t) {
        if (t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && t.constructor === this) return t;
        var e = new this(o);
        return u(e, t), e;
    }
    function o() {}
    function s(t) {
        try {
            return t.then;
        } catch (t) {
            return H.error = t, H;
        }
    }
    function a(e, n, o) {
        n.constructor === e.constructor && o === i && n.constructor.resolve === r ? function(t, e) {
            e._state === D ? l(t, e._result) : e._state === O ? h(t, e._result) : f(e, void 0, function(e) {
                return u(t, e);
            }, function(e) {
                return h(t, e);
            });
        }(e, n) : o === H ? h(e, H.error) : void 0 === o ? l(e, n) : t(o) ? function(t, e, n) {
            T(function(t) {
                var i = !1, r = function(t, e, n, i) {
                    try {
                        t.call(e, n, i);
                    } catch (t) {
                        return t;
                    }
                }(n, e, function(n) {
                    i || (i = !0, e !== n ? u(t, n) : l(t, n));
                }, function(e) {
                    i || (i = !0, h(t, e));
                }, t._label);
                !i && r && (i = !0, h(t, r));
            }, t);
        }(e, n, o) : l(e, n);
    }
    function u(t, e) {
        t === e ? h(t, new TypeError("You cannot resolve a promise with itself")) : function(t) {
            return "function" == typeof t || "object" == (void 0 === t ? "undefined" : _typeof(t)) && null !== t;
        }(e) ? a(t, e, s(e)) : l(t, e);
    }
    function c(t) {
        t._onerror && t._onerror(t._result), d(t);
    }
    function l(t, e) {
        t._state === M && (t._result = e, t._state = D, 0 !== t._subscribers.length && T(d, t));
    }
    function h(t, e) {
        t._state === M && (t._state = O, t._result = e, T(c, t));
    }
    function f(t, e, n, i) {
        var r = t._subscribers, o = r.length;
        t._onerror = null, r[o] = e, r[o + D] = n, r[o + O] = i, 0 === o && t._state && T(d, t);
    }
    function d(t) {
        var e = t._subscribers, n = t._state;
        if (0 !== e.length) {
            for (var i = void 0, r = void 0, o = t._result, s = 0; s < e.length; s += 3) i = e[s], r = e[s + n], 
            i ? g(n, i, r, o) : r(o);
            t._subscribers.length = 0;
        }
    }
    function p() {
        this.error = null;
    }
    function g(e, n, i, r) {
        var o = t(i), s = void 0, a = void 0, c = void 0, f = void 0;
        if (o) {
            if ((s = function(t, e) {
                try {
                    return t(e);
                } catch (t) {
                    return j.error = t, j;
                }
            }(i, r)) === j ? (f = !0, a = s.error, s = null) : c = !0, n === s) return void h(n, new TypeError("A promises callback cannot return that same promise."));
        } else s = r, c = !0;
        n._state !== M || (o && c ? u(n, s) : f ? h(n, a) : e === D ? l(n, s) : e === O && h(n, s));
    }
    function m(t) {
        t[P] = L++, t._state = void 0, t._result = void 0, t._subscribers = [];
    }
    function v(t, e) {
        this._instanceConstructor = t, this.promise = new t(o), this.promise[P] || m(this.promise), b(e) ? (this._input = e, 
        this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? l(this.promise, this._result) : (this.length = this.length || 0, 
        this._enumerate(), 0 === this._remaining && l(this.promise, this._result))) : h(this.promise, new Error("Array Methods must be provided an Array"));
    }
    function y(t) {
        this[P] = L++, this._result = this._state = void 0, this._subscribers = [], o !== t && ("function" != typeof t && function() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }(), this instanceof y ? function(t, e) {
            try {
                e(function(e) {
                    u(t, e);
                }, function(e) {
                    h(t, e);
                });
            } catch (e) {
                h(t, e);
            }
        }(this, t) : function() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }());
    }
    var b = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }, w = 0, x = void 0, _ = void 0, T = function(t, e) {
        N[w] = t, N[w + 1] = e, 2 === (w += 2) && (_ ? _(n) : I());
    }, C = "undefined" != typeof window ? window : void 0, k = C || {}, S = k.MutationObserver || k.WebKitMutationObserver, E = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), A = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, N = new Array(1e3), I = void 0;
    I = E ? function() {
        return process.nextTick(n);
    } : S ? function() {
        var t = 0, e = new S(n), i = document.createTextNode("");
        return e.observe(i, {
            characterData: !0
        }), function() {
            i.data = t = ++t % 2;
        };
    }() : A ? function() {
        var t = new MessageChannel();
        return t.port1.onmessage = n, function() {
            return t.port2.postMessage(0);
        };
    }() : void 0 === C && "function" == typeof require ? function() {
        try {
            var t = require("vertx");
            return void 0 !== (x = t.runOnLoop || t.runOnContext) ? function() {
                x(n);
            } : e();
        } catch (t) {
            return e();
        }
    }() : e();
    var P = Math.random().toString(36).substring(16), M = void 0, D = 1, O = 2, H = new p(), j = new p(), L = 0;
    return v.prototype._enumerate = function() {
        for (var t = this.length, e = this._input, n = 0; this._state === M && n < t; n++) this._eachEntry(e[n], n);
    }, v.prototype._eachEntry = function(t, e) {
        var n = this._instanceConstructor, u = n.resolve;
        if (u === r) {
            var c = s(t);
            if (c === i && t._state !== M) this._settledAt(t._state, e, t._result); else if ("function" != typeof c) this._remaining--, 
            this._result[e] = t; else if (n === y) {
                var l = new n(o);
                a(l, t, c), this._willSettleAt(l, e);
            } else this._willSettleAt(new n(function(e) {
                return e(t);
            }), e);
        } else this._willSettleAt(u(t), e);
    }, v.prototype._settledAt = function(t, e, n) {
        var i = this.promise;
        i._state === M && (this._remaining--, t === O ? h(i, n) : this._result[e] = n), 0 === this._remaining && l(i, this._result);
    }, v.prototype._willSettleAt = function(t, e) {
        var n = this;
        f(t, void 0, function(t) {
            return n._settledAt(D, e, t);
        }, function(t) {
            return n._settledAt(O, e, t);
        });
    }, y.all = function(t) {
        return new v(this, t).promise;
    }, y.race = function(t) {
        var e = this;
        return new e(b(t) ? function(n, i) {
            for (var r = t.length, o = 0; o < r; o++) e.resolve(t[o]).then(n, i);
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."));
        });
    }, y.resolve = r, y.reject = function(t) {
        var e = new this(o);
        return h(e, t), e;
    }, y._setScheduler = function(t) {
        _ = t;
    }, y._setAsap = function(t) {
        T = t;
    }, y._asap = T, y.prototype = {
        constructor: y,
        then: i,
        catch: function(t) {
            return this.then(null, t);
        }
    }, y.polyfill = function() {
        var t = void 0;
        if ("undefined" != typeof global) t = global; else if ("undefined" != typeof self) t = self; else try {
            t = Function("return this")();
        } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var e = t.Promise;
        if (e) {
            var n = null;
            try {
                n = Object.prototype.toString.call(e.resolve());
            } catch (t) {}
            if ("[object Promise]" === n && !e.cast) return;
        }
        t.Promise = y;
    }, y.Promise = y, y;
});

var Froogaloop = function() {
    function t(e) {
        return new t.fn.init(e);
    }
    var e = {}, n = !1, i = (Array.prototype.slice, "*");
    function r(t, e, n) {
        if (!n.contentWindow.postMessage) return !1;
        var r = JSON.stringify({
            method: t,
            value: e
        });
        n.contentWindow.postMessage(r, i);
    }
    function o(t) {
        var i, r;
        try {
            r = (i = JSON.parse(t.data)).event || i.method;
        } catch (t) {}
        if ("ready" != r || n || (n = !0), !/^https?:\/\/player.vimeo.com/.test(t.origin)) return !1;
        var o = i.value, s = i.data, a = "" === a ? null : i.player_id, u = function(t, n) {
            return n ? e[n] && e[n][t] : e[t];
        }(r, a), c = [];
        return !!u && (void 0 !== o && c.push(o), s && c.push(s), a && c.push(a), c.length > 0 ? u.apply(null, c) : u.call());
    }
    function s(t, n, i) {
        i ? (e[i] || (e[i] = {}), e[i][t] = n) : e[t] = n;
    }
    function a(t) {
        return !!(t && t.constructor && t.call && t.apply);
    }
    return t.fn = t.prototype = {
        element: null,
        init: function(t) {
            return "string" == typeof t && (t = document.getElementById(t)), this.element = t, this.element ? this : null;
        },
        api: function(t, e) {
            if (!this.element || !t) return !1;
            var n = this.element, i = "" !== n.id ? n.id : null, o = a(e) ? null : e, u = a(e) ? e : null;
            return u && s(t, u, i), r(t, o, n), this;
        },
        addEvent: function(t, e) {
            if (!this.element) return !1;
            var i = this.element, o = "" !== i.id ? i.id : null;
            return s(t, e, o), "ready" != t ? r("addEventListener", t, i) : "ready" == t && n && e.call(null, o), 
            this;
        },
        removeEvent: function(t) {
            if (!this.element) return !1;
            var n = this.element, i = function(t, n) {
                if (n && e[n]) {
                    if (!e[n][t]) return !1;
                    e[n][t] = null;
                } else {
                    if (!e[t]) return !1;
                    e[t] = null;
                }
                return !0;
            }(t, "" !== n.id ? n.id : null);
            "ready" != t && i && r("removeEventListener", t, n);
        }
    }, t.fn.init.prototype = t.fn, window.addEventListener ? window.addEventListener("message", o, !1) : window.attachEvent("onmessage", o), 
    window.Froogaloop = window.$f = t;
}();

/*
 *	jQuery dotdotdot 1.8.1
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */ !function(t, e) {
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(e) {
            if (0 == this.length) return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), 
            this;
            if (this.length > 1) return this.each(function() {
                t(this).dotdotdot(e);
            });
            var i = this, r = i.contents();
            i.data("dotdotdot") && i.trigger("destroy.dot"), i.data("dotdotdot-style", i.attr("style") || ""), i.css("word-wrap", "break-word"), 
            "nowrap" === i.css("white-space") && i.css("white-space", "normal"), i.bind_events = function() {
                return i.bind("update.dot", function(e, n) {
                    switch (i.removeClass("is-truncated"), e.preventDefault(), e.stopPropagation(), _typeof(l.height)) {
                      case "number":
                        l.maxHeight = l.height;
                        break;

                      case "function":
                        l.maxHeight = l.height.call(i[0]);
                        break;

                      default:
                        l.maxHeight = function(t) {
                            for (var e = t.innerHeight(), n = [ "paddingTop", "paddingBottom" ], i = 0, r = n.length; i < r; i++) {
                                var o = parseInt(t.css(n[i]), 10);
                                isNaN(o) && (o = 0), e -= o;
                            }
                            return e;
                        }(i);
                    }
                    l.maxHeight += l.tolerance, void 0 !== n && (("string" == typeof n || "nodeType" in n && 1 === n.nodeType) && (n = t("<div />").append(n).contents()), 
                    n instanceof t && (r = n)), (g = i.wrapInner('<div class="dotdotdot" />').children()).contents().detach().end().append(r.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var a = !1, d = !1;
                    return f.afterElement && ((a = f.afterElement.clone(!0)).show(), f.afterElement.detach()), o(g, l) && (d = "children" == l.wrap ? function(t, e, n) {
                        var i = t.children(), r = !1;
                        t.empty();
                        for (var s = 0, a = i.length; s < a; s++) {
                            var u = i.eq(s);
                            if (t.append(u), n && t.append(n), o(t, e)) {
                                u.remove(), r = !0;
                                break;
                            }
                            n && n.detach();
                        }
                        return r;
                    }(g, l, a) : function e(n, i, r, a, l) {
                        var f = !1;
                        n.contents().detach().each(function() {
                            var d = this, p = t(d);
                            if (void 0 === d) return !0;
                            if (p.is("script, .dotdotdot-keep")) n.append(p); else {
                                if (f) return !0;
                                n.append(p), !l || p.is(a.after) || p.find(a.after).length || n[n.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](l), 
                                o(r, a) && (f = 3 == d.nodeType ? function(e, n, i, r, a) {
                                    var l = e[0];
                                    if (!l) return !1;
                                    var f = c(l), d = -1 !== f.indexOf(" ") ? " " : "　", p = "letter" == r.wrap ? "" : d, g = f.split(p), m = -1, v = -1, y = 0, b = g.length - 1;
                                    r.fallbackToLetter && 0 == y && 0 == b && (p = "", g = f.split(p), b = g.length - 1);
                                    for (;y <= b && (0 != y || 0 != b); ) {
                                        var w = Math.floor((y + b) / 2);
                                        if (w == v) break;
                                        v = w, u(l, g.slice(0, v + 1).join(p) + r.ellipsis), i.children().each(function() {
                                            t(this).toggle().toggle();
                                        }), o(i, r) ? (b = v, r.fallbackToLetter && 0 == y && 0 == b && (p = "", g = g[0].split(p), m = -1, 
                                        v = -1, y = 0, b = g.length - 1)) : (m = v, y = v);
                                    }
                                    if (-1 == m || 1 == g.length && 0 == g[0].length) {
                                        var x = e.parent();
                                        e.detach();
                                        var _ = a && a.closest(x).length ? a.length : 0;
                                        x.contents().length > _ ? l = h(x.contents().eq(-1 - _), n) : (l = h(x, n, !0), _ || x.detach()), l && (f = s(c(l), r), 
                                        u(l, f), _ && a && t(l).parent().append(a));
                                    } else f = s(g.slice(0, m + 1).join(p), r), u(l, f);
                                    return !0;
                                }(p, i, r, a, l) : e(p, i, r, a, l)), f || l && l.detach();
                            }
                        });
                        i.addClass("is-truncated");
                        return f;
                    }(g, i, g, l, a)), g.replaceWith(g.contents()), g = null, t.isFunction(l.callback) && l.callback.call(i[0], d, r), 
                    f.isTruncated = d, d;
                }).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(i[0], f.isTruncated), 
                    f.isTruncated;
                }).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(i[0], r), r;
                }).bind("destroy.dot", function(t) {
                    t.preventDefault(), t.stopPropagation(), i.unwatch().unbind_events().contents().detach().end().append(r).attr("style", i.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", !1);
                }), i;
            }, i.unbind_events = function() {
                return i.unbind(".dot"), i;
            }, i.watch = function() {
                if (i.unwatch(), "window" == l.watch) {
                    var e = t(window), n = e.width(), r = e.height();
                    e.bind("resize.dot" + f.dotId, function() {
                        n == e.width() && r == e.height() && l.windowResizeFix || (n = e.width(), r = e.height(), p && clearInterval(p), 
                        p = setTimeout(function() {
                            i.trigger("update.dot");
                        }, 100));
                    });
                } else d = a(i), p = setInterval(function() {
                    if (i.is(":visible")) {
                        var t = a(i);
                        d.width == t.width && d.height == t.height || (i.trigger("update.dot"), d = t);
                    }
                }, 500);
                return i;
            }, i.unwatch = function() {
                return t(window).unbind("resize.dot" + f.dotId), p && clearInterval(p), i;
            };
            var l = t.extend(!0, {}, t.fn.dotdotdot.defaults, e), f = {}, d = {}, p = null, g = null;
            return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove), 
            l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), 
            f.afterElement = function(e, n) {
                if (!e) return !1;
                if ("string" == typeof e) return !!(e = t(e, n)).length && e;
                return !!e.jquery && e;
            }(l.after, i), f.isTruncated = !1, f.dotId = n++, i.data("dotdotdot", !0).bind_events().trigger("update.dot"), 
            l.watch && i.watch(), i;
        }, t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        }, t.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [ " ", "　", ",", ";", ".", "!", "?" ],
                noEllipsis: []
            }
        }, t.fn.dotdotdot.debug = function(t) {};
        var n = 1, i = t.fn.html;
        t.fn.html = function(e) {
            return void 0 != e && !t.isFunction(e) && this.data("dotdotdot") ? this.trigger("update", [ e ]) : i.apply(this, arguments);
        };
        var r = t.fn.text;
        t.fn.text = function(e) {
            return void 0 != e && !t.isFunction(e) && this.data("dotdotdot") ? (e = t("<div />").text(e).html(), 
            this.trigger("update", [ e ])) : r.apply(this, arguments);
        };
    }
    function o(t, e) {
        return t.innerHeight() > e.maxHeight;
    }
    function s(e, n) {
        for (;t.inArray(e.slice(-1), n.lastCharacter.remove) > -1; ) e = e.slice(0, -1);
        return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis), e;
    }
    function a(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        };
    }
    function u(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e);
    }
    function c(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : "";
    }
    function l(t) {
        do {
            t = t.previousSibling;
        } while (t && 1 !== t.nodeType && 3 !== t.nodeType);
        return t;
    }
    function h(e, n, i) {
        var r, o = e && e[0];
        if (o) {
            if (!i) {
                if (3 === o.nodeType) return o;
                if (t.trim(e.text())) return h(e.contents().last(), n);
            }
            for (r = l(o); !r; ) {
                if ((e = e.parent()).is(n) || !e.length) return !1;
                r = l(e[0]);
            }
            if (r) return h(t(r), n);
        }
        return !1;
    }
}(jQuery), jQuery(document).ready(function(t) {
    t(".dot-ellipsis").each(function() {
        var e = t(this).hasClass("dot-resize-update"), n = t(this).hasClass("dot-timer-update"), i = 0, r = t(this).attr("class").split(/\s+/);
        t.each(r, function(t, e) {
            var n = e.match(/^dot-height-(\d+)$/);
            null !== n && (i = Number(n[1]));
        });
        var o = new Object();
        n && (o.watch = !0), e && (o.watch = "window"), i > 0 && (o.height = i), t(this).dotdotdot(o);
    });
}), jQuery(window).load(function() {
    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot");
});

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
var dateFormat = function() {
    var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, n = /[^-+\dA-Z]/g, i = function(t, e) {
        for (t = String(t), e = e || 2; t.length < e; ) t = "0" + t;
        return t;
    };
    return function(r, o, s) {
        var a = dateFormat;
        if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(r) || /\d/.test(r) || (o = r, 
        r = void 0), r = r ? new Date(r) : new Date(), isNaN(r)) throw SyntaxError("invalid date");
        "UTC:" == (o = String(a.masks[o] || o || a.masks.default)).slice(0, 4) && (o = o.slice(4), s = !0);
        var u = s ? "getUTC" : "get", c = r[u + "Date"](), l = r[u + "Day"](), h = r[u + "Month"](), f = r[u + "FullYear"](), d = r[u + "Hours"](), p = r[u + "Minutes"](), g = r[u + "Seconds"](), m = r[u + "Milliseconds"](), v = s ? 0 : r.getTimezoneOffset(), y = {
            d: c,
            dd: i(c),
            ddd: a.i18n.dayNames[l],
            dddd: a.i18n.dayNames[l + 7],
            m: h + 1,
            mm: i(h + 1),
            mmm: a.i18n.monthNames[h],
            mmmm: a.i18n.monthNames[h + 12],
            yy: String(f).slice(2),
            yyyy: f,
            h: d % 12 || 12,
            hh: i(d % 12 || 12),
            H: d,
            HH: i(d),
            M: p,
            MM: i(p),
            s: g,
            ss: i(g),
            l: i(m, 3),
            L: i(m > 99 ? Math.round(m / 10) : m),
            t: d < 12 ? "a" : "p",
            tt: d < 12 ? "am" : "pm",
            T: d < 12 ? "A" : "P",
            TT: d < 12 ? "AM" : "PM",
            Z: s ? "UTC" : (String(r).match(e) || [ "" ]).pop().replace(n, ""),
            o: (v > 0 ? "-" : "+") + i(100 * Math.floor(Math.abs(v) / 60) + Math.abs(v) % 60, 4),
            S: [ "th", "st", "nd", "rd" ][c % 10 > 3 ? 0 : (c % 100 - c % 10 != 10) * c % 10]
        };
        return o.replace(t, function(t) {
            return t in y ? y[t] : t.slice(1, t.length - 1);
        });
    };
}();

dateFormat.masks = {
    default: "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
}, dateFormat.i18n = {
    dayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
}, Date.prototype.format = function(t, e) {
    return dateFormat(this, t, e);
}, 
/**! Calculate the md5 hash of a string
 * +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
 * + namespaced by: Michael White (http://crestidg.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
**/
md5 = function(t) {
    var e, n, i, r, o, s, a, u, c, l = function(t, e) {
        return t << e | t >>> 32 - e;
    }, h = function(t, e) {
        var n, i, r, o, s;
        return r = 2147483648 & t, o = 2147483648 & e, s = (1073741823 & t) + (1073741823 & e), (n = 1073741824 & t) & (i = 1073741824 & e) ? 2147483648 ^ s ^ r ^ o : n | i ? 1073741824 & s ? 3221225472 ^ s ^ r ^ o : 1073741824 ^ s ^ r ^ o : s ^ r ^ o;
    }, f = function(t, e, n, i, r, o, s) {
        return t = h(t, h(h(function(t, e, n) {
            return t & e | ~t & n;
        }(e, n, i), r), s)), h(l(t, o), e);
    }, d = function(t, e, n, i, r, o, s) {
        return t = h(t, h(h(function(t, e, n) {
            return t & n | e & ~n;
        }(e, n, i), r), s)), h(l(t, o), e);
    }, p = function(t, e, n, i, r, o, s) {
        return t = h(t, h(h(function(t, e, n) {
            return t ^ e ^ n;
        }(e, n, i), r), s)), h(l(t, o), e);
    }, g = function(t, e, n, i, r, o, s) {
        return t = h(t, h(h(function(t, e, n) {
            return e ^ (t | ~n);
        }(e, n, i), r), s)), h(l(t, o), e);
    }, m = function(t) {
        var e, n = "", i = "";
        for (e = 0; e <= 3; e++) n += (i = "0" + (t >>> 8 * e & 255).toString(16)).substr(i.length - 2, 2);
        return n;
    }, v = Array();
    for (v = function(t) {
        for (var e, n = t.length, i = n + 8, r = 16 * ((i - i % 64) / 64 + 1), o = Array(r - 1), s = 0, a = 0; a < n; ) s = a % 4 * 8, 
        o[e = (a - a % 4) / 4] = o[e] | t.charCodeAt(a) << s, a++;
        return s = a % 4 * 8, o[e = (a - a % 4) / 4] = o[e] | 128 << s, o[r - 2] = n << 3, o[r - 1] = n >>> 29, 
        o;
    }(t), s = 1732584193, a = 4023233417, u = 2562383102, c = 271733878, e = 0; e < v.length; e += 16) n = s, 
    i = a, r = u, o = c, a = g(a = g(a = g(a = g(a = p(a = p(a = p(a = p(a = d(a = d(a = d(a = d(a = f(a = f(a = f(a = f(a, u = f(u, c = f(c, s = f(s, a, u, c, v[e + 0], 7, 3614090360), a, u, v[e + 1], 12, 3905402710), s, a, v[e + 2], 17, 606105819), c, s, v[e + 3], 22, 3250441966), u = f(u, c = f(c, s = f(s, a, u, c, v[e + 4], 7, 4118548399), a, u, v[e + 5], 12, 1200080426), s, a, v[e + 6], 17, 2821735955), c, s, v[e + 7], 22, 4249261313), u = f(u, c = f(c, s = f(s, a, u, c, v[e + 8], 7, 1770035416), a, u, v[e + 9], 12, 2336552879), s, a, v[e + 10], 17, 4294925233), c, s, v[e + 11], 22, 2304563134), u = f(u, c = f(c, s = f(s, a, u, c, v[e + 12], 7, 1804603682), a, u, v[e + 13], 12, 4254626195), s, a, v[e + 14], 17, 2792965006), c, s, v[e + 15], 22, 1236535329), u = d(u, c = d(c, s = d(s, a, u, c, v[e + 1], 5, 4129170786), a, u, v[e + 6], 9, 3225465664), s, a, v[e + 11], 14, 643717713), c, s, v[e + 0], 20, 3921069994), u = d(u, c = d(c, s = d(s, a, u, c, v[e + 5], 5, 3593408605), a, u, v[e + 10], 9, 38016083), s, a, v[e + 15], 14, 3634488961), c, s, v[e + 4], 20, 3889429448), u = d(u, c = d(c, s = d(s, a, u, c, v[e + 9], 5, 568446438), a, u, v[e + 14], 9, 3275163606), s, a, v[e + 3], 14, 4107603335), c, s, v[e + 8], 20, 1163531501), u = d(u, c = d(c, s = d(s, a, u, c, v[e + 13], 5, 2850285829), a, u, v[e + 2], 9, 4243563512), s, a, v[e + 7], 14, 1735328473), c, s, v[e + 12], 20, 2368359562), u = p(u, c = p(c, s = p(s, a, u, c, v[e + 5], 4, 4294588738), a, u, v[e + 8], 11, 2272392833), s, a, v[e + 11], 16, 1839030562), c, s, v[e + 14], 23, 4259657740), u = p(u, c = p(c, s = p(s, a, u, c, v[e + 1], 4, 2763975236), a, u, v[e + 4], 11, 1272893353), s, a, v[e + 7], 16, 4139469664), c, s, v[e + 10], 23, 3200236656), u = p(u, c = p(c, s = p(s, a, u, c, v[e + 13], 4, 681279174), a, u, v[e + 0], 11, 3936430074), s, a, v[e + 3], 16, 3572445317), c, s, v[e + 6], 23, 76029189), u = p(u, c = p(c, s = p(s, a, u, c, v[e + 9], 4, 3654602809), a, u, v[e + 12], 11, 3873151461), s, a, v[e + 15], 16, 530742520), c, s, v[e + 2], 23, 3299628645), u = g(u, c = g(c, s = g(s, a, u, c, v[e + 0], 6, 4096336452), a, u, v[e + 7], 10, 1126891415), s, a, v[e + 14], 15, 2878612391), c, s, v[e + 5], 21, 4237533241), u = g(u, c = g(c, s = g(s, a, u, c, v[e + 12], 6, 1700485571), a, u, v[e + 3], 10, 2399980690), s, a, v[e + 10], 15, 4293915773), c, s, v[e + 1], 21, 2240044497), u = g(u, c = g(c, s = g(s, a, u, c, v[e + 8], 6, 1873313359), a, u, v[e + 15], 10, 4264355552), s, a, v[e + 6], 15, 2734768916), c, s, v[e + 13], 21, 1309151649), u = g(u, c = g(c, s = g(s, a, u, c, v[e + 4], 6, 4149444226), a, u, v[e + 11], 10, 3174756917), s, a, v[e + 2], 15, 718787259), c, s, v[e + 9], 21, 3951481745), 
    s = h(s, n), a = h(a, i), u = h(u, r), c = h(c, o);
    return (m(s) + m(a) + m(u) + m(c)).toLowerCase();
}, 
/*
*   JavaScript interface for the SoundCloud Player widget
*   Author: Matas Petrikas, matas@soundcloud.com
*   Copyright (c) 2009  SoundCloud Ltd.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*/
function() {
    var t = /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
    window.soundcloud = {
        version: "0.1",
        debug: !1,
        _listeners: [],
        _redispatch: function(t, e, n) {
            var i, r = this._listeners[t] || [], o = "soundcloud:" + t;
            try {
                i = this.getPlayer(e);
            } catch (i) {
                return void (this.debug && window.console && console.error("unable to dispatch widget event " + t + " for the widget id " + e, n, i));
            }
            window.jQuery ? jQuery(i).trigger(o, [ n ]) : window.Prototype && $(i).fire(o, n);
            for (var s = 0, a = r.length; s < a; s += 1) r[s].apply(i, [ i, n ]);
            this.debug && window.console && console.log(o, t, e, n);
        },
        addEventListener: function(t, e) {
            this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e);
        },
        removeEventListener: function(t, e) {
            for (var n = this._listeners[t] || [], i = 0, r = n.length; i < r; i += 1) n[i] === e && n.splice(i, 1);
        },
        getPlayer: function(e) {
            var n;
            try {
                if (!e) throw "The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation.";
                if (n = t ? window[e] : document[e]) {
                    if (n.api_getFlashId) return n;
                    throw "The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code";
                }
                throw "The SoundCloud Widget with an id " + e + " couldn't be found";
            } catch (t) {
                throw console && console.error && console.error(t), t;
            }
        },
        onPlayerReady: function(t, e) {
            this._redispatch("onPlayerReady", t, e);
        },
        onMediaStart: function(t, e) {
            this._redispatch("onMediaStart", t, e);
        },
        onMediaEnd: function(t, e) {
            this._redispatch("onMediaEnd", t, e);
        },
        onMediaPlay: function(t, e) {
            this._redispatch("onMediaPlay", t, e);
        },
        onMediaPause: function(t, e) {
            this._redispatch("onMediaPause", t, e);
        },
        onMediaBuffering: function(t, e) {
            this._redispatch("onMediaBuffering", t, e);
        },
        onMediaSeek: function(t, e) {
            this._redispatch("onMediaSeek", t, e);
        },
        onMediaDoneBuffering: function(t, e) {
            this._redispatch("onMediaDoneBuffering", t, e);
        },
        onPlayerError: function(t, e) {
            this._redispatch("onPlayerError", t, e);
        }
    };
}(), 
/*
* RetargetMouseScroll JavaScript Library v0.0.2
* 2009-07-30
* By Eli Grey, http://eligrey.com
*
* http://github.com/eligrey/RetargetMouseScroll/tree/master
*
* Licensed under the X11/MIT License
*   See LICENSE.md or http://eligrey.com/blog/about/license
*/
"function" != typeof this.RetargetMouseScroll && function() {
    var t = [ "DOMMouseScroll", "mousewheel" ];
    this.RetargetMouseScroll = function(e, n, i, r) {
        e || (e = document), n || (n = window), "boolean" != typeof i && (i = !0);
        var o, s, a, u = function(t) {
            !function(t, e, n, i) {
                n && (t.preventDefault ? t.preventDefault() : event.returnValue = !1);
                var r = t.detail || -t.wheelDelta / 40;
                r *= 19, "number" != typeof i || isNaN(i) || (r *= i), e.scrollBy ? e.scrollBy(0, r) : e.scrollTop += r;
            }(t = t || window.event, n, i, r);
        };
        return (o = e.addEventListener) ? (o.call(e, t[0], u, !1), o.call(e, t[1], u, !1)) : (o = e.attachEvent) && o.call(e, "on" + t[1], u), 
        (s = e.removeEventListener) ? a = function() {
            s.call(e, t[0], u, !1), s.call(e, t[1], u, !1);
        } : (s = e.detachEvent) && (a = function() {
            s.call(e, "on" + t[1], u);
        }), {
            restore: a
        };
    };
}.call(this), 
/*!
 * Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function(t, e) {
    "function" == typeof define && define.amd ? define([ "exports" ], e) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? e(exports) : e(t);
}(this, function(t) {
    var e = {
        "&nbsp;": " ",
        "&iexcl;": "¡",
        "&cent;": "¢",
        "&pound;": "£",
        "&curren;": "€",
        "&yen;": "¥",
        "&brvbar;": "Š",
        "&sect;": "§",
        "&uml;": "š",
        "&copy;": "©",
        "&ordf;": "ª",
        "&laquo;": "«",
        "&not;": "¬",
        "&shy;": "­",
        "&reg;": "®",
        "&macr;": "¯",
        "&deg;": "°",
        "&plusmn;": "±",
        "&sup2;": "²",
        "&sup3;": "³",
        "&acute;": "Ž",
        "&micro;": "µ",
        "&para;": "¶",
        "&middot;": "·",
        "&cedil;": "ž",
        "&sup1;": "¹",
        "&ordm;": "º",
        "&raquo;": "»",
        "&frac14;": "Œ",
        "&frac12;": "œ",
        "&frac34;": "Ÿ",
        "&iquest;": "¿",
        "&Agrave;": "À",
        "&Aacute;": "Á",
        "&Acirc;": "Â",
        "&Atilde;": "Ã",
        "&Auml;": "Ä",
        "&Aring;": "Å",
        "&AElig;": "Æ",
        "&Ccedil;": "Ç",
        "&Egrave;": "È",
        "&Eacute;": "É",
        "&Ecirc;": "Ê",
        "&Euml;": "Ë",
        "&Igrave;": "Ì",
        "&Iacute;": "Í",
        "&Icirc;": "Î",
        "&Iuml;": "Ï",
        "&ETH;": "Ð",
        "&Ntilde;": "Ñ",
        "&Ograve;": "Ò",
        "&Oacute;": "Ó",
        "&Ocirc;": "Ô",
        "&Otilde;": "Õ",
        "&Ouml;": "Ö",
        "&times;": "×",
        "&Oslash;": "Ø",
        "&Ugrave;": "Ù",
        "&Uacute;": "Ú",
        "&Ucirc;": "Û",
        "&Uuml;": "Ü",
        "&Yacute;": "Ý",
        "&THORN;": "Þ",
        "&szlig;": "ß",
        "&agrave;": "à",
        "&aacute;": "á",
        "&acirc;": "â",
        "&atilde;": "ã",
        "&auml;": "ä",
        "&aring;": "å",
        "&aelig;": "æ",
        "&ccedil;": "ç",
        "&egrave;": "è",
        "&eacute;": "é",
        "&ecirc;": "ê",
        "&euml;": "ë",
        "&igrave;": "ì",
        "&iacute;": "í",
        "&icirc;": "î",
        "&iuml;": "ï",
        "&eth;": "ð",
        "&ntilde;": "ñ",
        "&ograve;": "ò",
        "&oacute;": "ó",
        "&ocirc;": "ô",
        "&otilde;": "õ",
        "&ouml;": "ö",
        "&divide;": "÷",
        "&oslash;": "ø",
        "&ugrave;": "ù",
        "&uacute;": "ú",
        "&ucirc;": "û",
        "&uuml;": "ü",
        "&yacute;": "ý",
        "&thorn;": "þ",
        "&yuml;": "ÿ",
        "&quot;": '"',
        "&lt;": "<",
        "&gt;": ">",
        "&apos;": "'",
        "&minus;": "−",
        "&circ;": "ˆ",
        "&tilde;": "˜",
        "&Scaron;": "Š",
        "&lsaquo;": "‹",
        "&OElig;": "Œ",
        "&lsquo;": "‘",
        "&rsquo;": "’",
        "&ldquo;": "“",
        "&rdquo;": "”",
        "&bull;": "•",
        "&ndash;": "–",
        "&mdash;": "—",
        "&trade;": "™",
        "&scaron;": "š",
        "&rsaquo;": "›",
        "&oelig;": "œ",
        "&Yuml;": "Ÿ",
        "&fnof;": "ƒ",
        "&Alpha;": "Α",
        "&Beta;": "Β",
        "&Gamma;": "Γ",
        "&Delta;": "Δ",
        "&Epsilon;": "Ε",
        "&Zeta;": "Ζ",
        "&Eta;": "Η",
        "&Theta;": "Θ",
        "&Iota;": "Ι",
        "&Kappa;": "Κ",
        "&Lambda;": "Λ",
        "&Mu;": "Μ",
        "&Nu;": "Ν",
        "&Xi;": "Ξ",
        "&Omicron;": "Ο",
        "&Pi;": "Π",
        "&Rho;": "Ρ",
        "&Sigma;": "Σ",
        "&Tau;": "Τ",
        "&Upsilon;": "Υ",
        "&Phi;": "Φ",
        "&Chi;": "Χ",
        "&Psi;": "Ψ",
        "&Omega;": "Ω",
        "&alpha;": "α",
        "&beta;": "β",
        "&gamma;": "γ",
        "&delta;": "δ",
        "&epsilon;": "ε",
        "&zeta;": "ζ",
        "&eta;": "η",
        "&theta;": "θ",
        "&iota;": "ι",
        "&kappa;": "κ",
        "&lambda;": "λ",
        "&mu;": "μ",
        "&nu;": "ν",
        "&xi;": "ξ",
        "&omicron;": "ο",
        "&pi;": "π",
        "&rho;": "ρ",
        "&sigmaf;": "ς",
        "&sigma;": "σ",
        "&tau;": "τ",
        "&upsilon;": "υ",
        "&phi;": "φ",
        "&chi;": "χ",
        "&psi;": "ψ",
        "&omega;": "ω",
        "&thetasym;": "ϑ",
        "&upsih;": "ϒ",
        "&piv;": "ϖ",
        "&ensp;": " ",
        "&emsp;": " ",
        "&thinsp;": " ",
        "&zwnj;": "‌",
        "&zwj;": "‍",
        "&lrm;": "‎",
        "&rlm;": "‏",
        "&sbquo;": "‚",
        "&bdquo;": "„",
        "&dagger;": "†",
        "&Dagger;": "‡",
        "&hellip;": "…",
        "&permil;": "‰",
        "&prime;": "′",
        "&Prime;": "″",
        "&oline;": "‾",
        "&frasl;": "⁄",
        "&euro;": "€",
        "&image;": "ℑ",
        "&weierp;": "℘",
        "&real;": "ℜ",
        "&alefsym;": "ℵ",
        "&larr;": "←",
        "&uarr;": "↑",
        "&rarr;": "→",
        "&darr;": "↓",
        "&harr;": "↔",
        "&crarr;": "↵",
        "&lArr;": "⇐",
        "&uArr;": "⇑",
        "&rArr;": "⇒",
        "&dArr;": "⇓",
        "&hArr;": "⇔",
        "&forall;": "∀",
        "&part;": "∂",
        "&exist;": "∃",
        "&empty;": "∅",
        "&nabla;": "∇",
        "&isin;": "∈",
        "&notin;": "∉",
        "&ni;": "∋",
        "&prod;": "∏",
        "&sum;": "∑",
        "&lowast;": "∗",
        "&radic;": "√",
        "&prop;": "∝",
        "&infin;": "∞",
        "&ang;": "∠",
        "&and;": "∧",
        "&or;": "∨",
        "&cap;": "∩",
        "&cup;": "∪",
        "&int;": "∫",
        "&there4;": "∴",
        "&sim;": "∼",
        "&cong;": "≅",
        "&asymp;": "≈",
        "&ne;": "≠",
        "&equiv;": "≡",
        "&le;": "≤",
        "&ge;": "≥",
        "&sub;": "⊂",
        "&sup;": "⊃",
        "&nsub;": "⊄",
        "&sube;": "⊆",
        "&supe;": "⊇",
        "&oplus;": "⊕",
        "&otimes;": "⊗",
        "&perp;": "⊥",
        "&sdot;": "⋅",
        "&lceil;": "⌈",
        "&rceil;": "⌉",
        "&lfloor;": "⌊",
        "&rfloor;": "⌋",
        "&lang;": "〈",
        "&rang;": "〉",
        "&loz;": "◊",
        "&spades;": "♠",
        "&clubs;": "♣",
        "&hearts;": "♥",
        "&diams;": "♦"
    }, n = function(t) {
        if (!~t.indexOf("&")) return t;
        for (var n in e) t = t.replace(new RegExp(n, "g"), e[n]);
        return t = (t = (t = t.replace(/&#x(0*[0-9a-f]{2,5});?/gi, function(t, e) {
            return String.fromCharCode(parseInt(+e, 16));
        })).replace(/&#([0-9]{2,4});?/gi, function(t, e) {
            return String.fromCharCode(+e);
        })).replace(/&amp;/g, "&");
    }, i = function(t) {
        for (var n in t = (t = t.replace(/&/g, "&amp;")).replace(/'/g, "&#39;"), e) t = t.replace(new RegExp(e[n], "g"), n);
        return t;
    };
    t.entities = {
        encode: i,
        decode: n
    };
    var r = {
        "document.cookie": "",
        "document.write": "",
        ".parentNode": "",
        ".innerHTML": "",
        "window.location": "",
        "-moz-binding": "",
        "\x3c!--": "&lt;!--",
        "--\x3e": "--&gt;",
        "<![CDATA[": "&lt;![CDATA["
    }, o = {
        "javascript\\s*:": "",
        "expression\\s*(\\(|&\\#40;)": "",
        "vbscript\\s*:": "",
        "Redirect\\s+302": ""
    }, s = [ /%0[0-8bcef]/g, /%1[0-9a-f]/g, /[\x00-\x08]/g, /\x0b/g, /\x0c/g, /[\x0e-\x1f]/g ], a = [ "javascript", "expression", "vbscript", "script", "applet", "alert", "document", "write", "cookie", "window" ];
    function u(t) {
        for (var e in s) t = t.replace(s[e], "");
        return t;
    }
    function c(t) {
        var e = /\/\*.*?\*\//g;
        return t.replace(/\s*[a-z-]+\s*=\s*'[^']*'/gi, function(t) {
            return t.replace(e, "");
        }).replace(/\s*[a-z-]+\s*=\s*"[^"]*"/gi, function(t) {
            return t.replace(e, "");
        }).replace(/\s*[a-z-]+\s*=\s*[^\s]+/gi, function(t) {
            return t.replace(e, "");
        });
    }
    t.xssClean = function(e, n) {
        if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
            for (var i in e) e[i] = t.xssClean(e[i]);
            return e;
        }
        e = (e = (e = (e = (e = u(e)).replace(/\&([a-z\_0-9]+)\=([a-z\_0-9]+)/i, "!*$^#(@*#&$1=$2")).replace(/(&\#?[0-9a-z]{2,})([\x00-\x20])*;?/i, "$1;$2")).replace(/(&\#x?)([0-9A-F]+);?/i, "$1;$2")).replace("!*$^#(@*#&", "&");
        try {
            e = decodeURIComponent(e);
        } catch (t) {}
        var s = e = (e = u(e = e.replace(/[a-z]+=([\'\"]).*?\1/gi, function(t, e) {
            return t.replace(e, e.replace(">", "&gt;").replace("<", "&lt;").replace("\\", "\\\\"));
        }))).replace("\t", " ");
        for (var i in r) e = e.replace(i, r[i]);
        for (var i in o) e = e.replace(new RegExp(i, "i"), o[i]);
        for (var i in a) {
            var l = a[i].split("").join("\\s*") + "\\s*";
            e = e.replace(new RegExp("(" + l + ")(\\W)", "ig"), function(t, e, n) {
                return e.replace(/\s+/g, "") + n;
            });
        }
        do {
            var h = e;
            e.match(/<a/i) && (e = e.replace(/<a\s+([^>]*?)(>|$)/gi, function(t, e, n) {
                return e = c(e.replace("<", "").replace(">", "")), t.replace(e, e.replace(/href=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)/gi, ""));
            })), e.match(/<img/i) && (e = e.replace(/<img\s+([^>]*?)(\s?\/?>|$)/gi, function(t, e, n) {
                return e = c(e.replace("<", "").replace(">", "")), t.replace(e, e.replace(/src=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)/gi, ""));
            })), (e.match(/script/i) || e.match(/xss/i)) && (e = e.replace(/<(\/*)(script|xss)(.*?)\>/gi, ""));
        } while (h != e);
        for (var i in event_handlers = [ "[^a-z_-]on\\w*" ], n || event_handlers.push("xmlns"), e = e.replace(new RegExp("<([^><]+?)(" + event_handlers.join("|") + ")(\\s*=\\s*[^><]*)([><]*)", "i"), "<$1$4"), 
        naughty = "alert|applet|audio|basefont|base|behavior|bgsound|blink|body|embed|expression|form|frameset|frame|head|html|ilayer|iframe|input|isindex|layer|link|meta|object|plaintext|style|script|textarea|title|video|xml|xss", 
        e = (e = e.replace(new RegExp("<(/*\\s*)(" + naughty + ")([^><]*)([><]*)", "gi"), function(t, e, n, i, r) {
            return "&lt;" + e + n + i + r.replace(">", "&gt;").replace("<", "&lt;");
        })).replace(/(alert|cmd|passthru|eval|exec|expression|system|fopen|fsockopen|file|file_get_contents|readfile|unlink)(\s*)\((.*?)\)/gi, "$1$2&#40;$3&#41;"), 
        r) e = e.replace(i, r[i]);
        for (var i in o) e = e.replace(new RegExp(i, "i"), o[i]);
        if (n && e !== s) throw new Error("Image may contain XSS");
        return e;
    };
    var l = t.Validator = function() {};
    function h(t) {
        return !!/^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/.test(t) && !(t.split(".").sort()[3] > 255);
    }
    function f(t) {
        return !!/^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/.test(t);
    }
    function d(t) {
        if (t instanceof Date) return t;
        var e = Date.parse(t);
        return isNaN(e) ? null : new Date(e);
    }
    l.prototype.check = function(t, e) {
        return this.str = void 0 === t || null === t || isNaN(t) && void 0 === t.length ? "" : t + "", this.msg = e, 
        this._errors = this._errors || [], this;
    }, l.prototype.validate = l.prototype.check, l.prototype.assert = l.prototype.check, l.prototype.error = function(t) {
        throw new Error(t);
    }, l.prototype.isAfter = function(t) {
        t = t || new Date();
        var e = d(this.str), n = d(t);
        return e && n && e >= n ? this : this.error(this.msg || "Invalid date");
    }, l.prototype.isBefore = function(t) {
        t = t || new Date();
        var e = d(this.str), n = d(t);
        return e && n && e <= n ? this : this.error(this.msg || "Invalid date");
    }, l.prototype.isEmail = function() {
        return this.str.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/) ? this : this.error(this.msg || "Invalid email");
    }, l.prototype.isCreditCard = function() {
        if (this.str = this.str.replace(/[^0-9]+/g, ""), !this.str.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) return this.error(this.msg || "Invalid credit card");
        for (var t, e, n = 0, i = !1, r = this.length - 1; r >= 0; r--) t = this.substring(r, r + 1), e = parseInt(t, 10), 
        n += i && (e *= 2) >= 10 ? e % 10 + 1 : e, i = !i;
        return n % 10 != 0 ? this.error(this.msg || "Invalid credit card") : this;
    }, l.prototype.isUrl = function() {
        return !this.str.match(/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i) || this.str.length > 2083 ? this.error(this.msg || "Invalid URL") : this;
    }, l.prototype.isIPv4 = function() {
        return h(this.str) ? this : this.error(this.msg || "Invalid IP");
    }, l.prototype.isIPv6 = function() {
        return f(this.str) ? this : this.error(this.msg || "Invalid IP");
    }, l.prototype.isIP = function() {
        return h(this.str) || f(this.str) ? this : this.error(this.msg || "Invalid IP");
    }, l.prototype.isAlpha = function() {
        return this.str.match(/^[a-zA-Z]+$/) ? this : this.error(this.msg || "Invalid characters");
    }, l.prototype.isAlphanumeric = function() {
        return this.str.match(/^[a-zA-Z0-9]+$/) ? this : this.error(this.msg || "Invalid characters");
    }, l.prototype.isNumeric = function() {
        return this.str.match(/^-?[0-9]+$/) ? this : this.error(this.msg || "Invalid number");
    }, l.prototype.isHexadecimal = function() {
        return this.str.match(/^[0-9a-fA-F]+$/) ? this : this.error(this.msg || "Invalid hexadecimal");
    }, l.prototype.isHexColor = function() {
        return this.str.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/) ? this : this.error(this.msg || "Invalid hexcolor");
    }, l.prototype.isLowercase = function() {
        return this.str !== this.str.toLowerCase() ? this.error(this.msg || "Invalid characters") : this;
    }, l.prototype.isUppercase = function() {
        return this.str !== this.str.toUpperCase() ? this.error(this.msg || "Invalid characters") : this;
    }, l.prototype.isInt = function() {
        return this.str.match(/^(?:-?(?:0|[1-9][0-9]*))$/) ? this : this.error(this.msg || "Invalid integer");
    }, l.prototype.isDecimal = function() {
        return this.str.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/) ? this : this.error(this.msg || "Invalid decimal");
    }, l.prototype.isDivisibleBy = function(t) {
        return parseFloat(this.str) % parseInt(t, 10) == 0;
    }, l.prototype.isFloat = function() {
        return this.isDecimal();
    }, l.prototype.notNull = function() {
        return "" === this.str ? this.error(this.msg || "String is empty") : this;
    }, l.prototype.isNull = function() {
        return "" !== this.str ? this.error(this.msg || "String is not empty") : this;
    }, l.prototype.notEmpty = function() {
        return this.str.match(/^[\s\t\r\n]*$/) ? this.error(this.msg || "String is whitespace") : this;
    }, l.prototype.equals = function(t) {
        return this.str != t ? this.error(this.msg || "Not equal") : this;
    }, l.prototype.contains = function(t) {
        return -1 !== this.str.indexOf(t) && t ? this : this.error(this.msg || "Invalid characters");
    }, l.prototype.notContains = function(t) {
        return this.str.indexOf(t) >= 0 ? this.error(this.msg || "Invalid characters") : this;
    }, l.prototype.regex = l.prototype.is = function(t, e) {
        return "RegExp" !== Object.prototype.toString.call(t).slice(8, -1) && (t = new RegExp(t, e)), this.str.match(t) ? this : this.error(this.msg || "Invalid characters");
    }, l.prototype.notRegex = l.prototype.not = function(t, e) {
        return "RegExp" !== Object.prototype.toString.call(t).slice(8, -1) && (t = new RegExp(t, e)), this.str.match(t) && this.error(this.msg || "Invalid characters"), 
        this;
    }, l.prototype.len = function(t, e) {
        return this.str.length < t ? this.error(this.msg || "String is too small") : void 0 !== (void 0 === e ? "undefined" : _typeof(e)) && this.str.length > e ? this.error(this.msg || "String is too large") : this;
    }, l.prototype.isUUID = function(t) {
        var e;
        return e = 3 == t || "v3" == t ? /[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i : 4 == t || "v4" == t ? /[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i : 5 == t || "v5" == t ? /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i : /[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 
        this.str.match(e) ? this : this.error(this.msg || "Not a UUID");
    }, l.prototype.isUUIDv3 = function() {
        return this.isUUID(3);
    }, l.prototype.isUUIDv4 = function() {
        return this.isUUID(4);
    }, l.prototype.isUUIDv5 = function() {
        return this.isUUID(5);
    }, l.prototype.isDate = function() {
        var t = Date.parse(this.str);
        return isNaN(t) ? this.error(this.msg || "Not a date") : this;
    }, l.prototype.isIn = function(t) {
        return t && "function" == typeof t.indexOf ? ~t.indexOf(this.str) ? this : this.error(this.msg || "Unexpected value") : this.error(this.msg || "Invalid in() argument");
    }, l.prototype.notIn = function(t) {
        return t && "function" == typeof t.indexOf ? -1 !== t.indexOf(this.str) ? this.error(this.msg || "Unexpected value") : this : this.error(this.msg || "Invalid notIn() argument");
    }, l.prototype.min = function(t) {
        var e = parseFloat(this.str);
        return !isNaN(e) && e < t ? this.error(this.msg || "Invalid number") : this;
    }, l.prototype.max = function(t) {
        var e = parseFloat(this.str);
        return !isNaN(e) && e > t ? this.error(this.msg || "Invalid number") : this;
    };
    var p = t.Filter = function() {};
    return p.prototype.modify = function(t) {
        this.str = t;
    }, p.prototype.convert = p.prototype.sanitize = function(t) {
        return this.str = null == t ? "" : t + "", this;
    }, p.prototype.xss = function(e) {
        return this.modify(t.xssClean(this.str, e)), this.str;
    }, p.prototype.entityDecode = function() {
        return this.modify(n(this.str)), this.str;
    }, p.prototype.entityEncode = function() {
        return this.modify(i(this.str)), this.str;
    }, p.prototype.escape = function() {
        return this.modify(this.str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), 
        this.str;
    }, p.prototype.ltrim = function(t) {
        return t = t || "\\r\\n\\t\\s", this.modify(this.str.replace(new RegExp("^[" + t + "]+", "g"), "")), 
        this.str;
    }, p.prototype.rtrim = function(t) {
        return t = t || "\\r\\n\\t\\s", this.modify(this.str.replace(new RegExp("[" + t + "]+$", "g"), "")), 
        this.str;
    }, p.prototype.trim = function(t) {
        return t = t || "\\r\\n\\t\\s", this.modify(this.str.replace(new RegExp("^[" + t + "]+|[" + t + "]+$", "g"), "")), 
        this.str;
    }, p.prototype.ifNull = function(t) {
        return this.str && "" !== this.str || this.modify(t), this.str;
    }, p.prototype.toFloat = function() {
        return this.modify(parseFloat(this.str)), this.str;
    }, p.prototype.toInt = function(t) {
        return t = t || 10, this.modify(parseInt(this.str, t)), this.str;
    }, p.prototype.toBoolean = function() {
        return this.str && "0" != this.str && "false" != this.str && "" != this.str ? this.modify(!0) : this.modify(!1), 
        this.str;
    }, p.prototype.toBooleanStrict = function() {
        return "1" == this.str || "true" == this.str ? this.modify(!0) : this.modify(!1), this.str;
    }, t.sanitize = t.convert = function(e) {
        return new t.Filter().sanitize(e);
    }, t.check = t.validate = t.assert = function(e, n) {
        return new t.Validator().check(e, n);
    }, t;
}), function(t, e) {
    "use strict";
    var n = "model", i = "name", r = "type", o = "vendor", s = "version", a = "mobile", u = "tablet", c = {
        extend: function(t, e) {
            var n = {};
            for (var i in t) e[i] && e[i].length % 2 == 0 ? n[i] = e[i].concat(t[i]) : n[i] = t[i];
            return n;
        },
        has: function(t, e) {
            return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase());
        },
        lowerize: function(t) {
            return t.toLowerCase();
        },
        major: function(t) {
            return "string" === (void 0 === t ? "undefined" : _typeof(t)) ? t.split(".")[0] : void 0;
        }
    }, l = {
        rgx: function() {
            for (var t, e, n, i, r, o, s, a = 0, u = arguments; a < u.length && !o; ) {
                var c = u[a], l = u[a + 1];
                if ("undefined" === (void 0 === t ? "undefined" : _typeof(t))) for (i in t = {}, l) l.hasOwnProperty(i) && ("object" === (void 0 === (r = l[i]) ? "undefined" : _typeof(r)) ? t[r[0]] = void 0 : t[r] = void 0);
                for (e = n = 0; e < c.length && !o; ) if (o = c[e++].exec(this.getUA())) for (i = 0; i < l.length; i++) s = o[++n], 
                "object" === (void 0 === (r = l[i]) ? "undefined" : _typeof(r)) && r.length > 0 ? 2 == r.length ? "function" == _typeof(r[1]) ? t[r[0]] = r[1].call(this, s) : t[r[0]] = r[1] : 3 == r.length ? "function" !== _typeof(r[1]) || r[1].exec && r[1].test ? t[r[0]] = s ? s.replace(r[1], r[2]) : void 0 : t[r[0]] = s ? r[1].call(this, s, r[2]) : void 0 : 4 == r.length && (t[r[0]] = s ? r[3].call(this, s.replace(r[1], r[2])) : void 0) : t[r] = s || void 0;
                a += 2;
            }
            return t;
        },
        str: function(t, e) {
            for (var n in e) if ("object" === _typeof(e[n]) && e[n].length > 0) {
                for (var i = 0; i < e[n].length; i++) if (c.has(e[n][i], t)) return "?" === n ? void 0 : n;
            } else if (c.has(e[n], t)) return "?" === n ? void 0 : n;
            return t;
        }
    }, h = {
        browser: {
            oldsafari: {
                version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }
            }
        },
        device: {
            amazon: {
                model: {
                    "Fire Phone": [ "SD", "KF" ]
                }
            },
            sprint: {
                model: {
                    "Evo Shift 4G": "7373KT"
                },
                vendor: {
                    HTC: "APA",
                    Sprint: "Sprint"
                }
            }
        },
        os: {
            windows: {
                version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2000: "NT 5.0",
                    XP: [ "NT 5.1", "NT 5.2" ],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: [ "NT 6.4", "NT 10.0" ],
                    RT: "ARM"
                }
            }
        }
    }, f = {
        browser: [ [ /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i ], [ i, s ], [ /(OPiOS)[\/\s]+([\w\.]+)/i ], [ [ i, "Opera Mini" ], s ], [ /\s(opr)\/([\w\.]+)/i ], [ [ i, "Opera" ], s ], [ /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i ], [ i, s ], [ /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i ], [ [ i, "IE" ], s ], [ /(edge)\/((\d+)?[\w\.]+)/i ], [ i, s ], [ /(yabrowser)\/([\w\.]+)/i ], [ [ i, "Yandex" ], s ], [ /(comodo_dragon)\/([\w\.]+)/i ], [ [ i, /_/g, " " ], s ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i ], [ i, s ], [ /(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i ], [ [ i, "UCBrowser" ], s ], [ /(dolfin)\/([\w\.]+)/i ], [ [ i, "Dolphin" ], s ], [ /((?:android.+)crmo|crios)\/([\w\.]+)/i ], [ [ i, "Chrome" ], s ], [ /XiaoMi\/MiuiBrowser\/([\w\.]+)/i ], [ s, [ i, "MIUI Browser" ] ], [ /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i ], [ s, [ i, "Android Browser" ] ], [ /FBAV\/([\w\.]+);/i ], [ s, [ i, "Facebook" ] ], [ /fxios\/([\w\.-]+)/i ], [ s, [ i, "Firefox" ] ], [ /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i ], [ s, [ i, "Mobile Safari" ] ], [ /version\/([\w\.]+).+?(mobile\s?safari|safari)/i ], [ s, i ], [ /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ i, [ s, l.str, h.browser.oldsafari.version ] ], [ /(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i ], [ i, s ], [ /(navigator|netscape)\/([\w\.-]+)/i ], [ [ i, "Netscape" ], s ], [ /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i ], [ i, s ] ],
        cpu: [ [ /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ], [ [ "architecture", "amd64" ] ], [ /(ia32(?=;))/i ], [ [ "architecture", c.lowerize ] ], [ /((?:i[346]|x)86)[;\)]/i ], [ [ "architecture", "ia32" ] ], [ /windows\s(ce|mobile);\sppc;/i ], [ [ "architecture", "arm" ] ], [ /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i ], [ [ "architecture", /ower/, "", c.lowerize ] ], [ /(sun4\w)[;\)]/i ], [ [ "architecture", "sparc" ] ], [ /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [ [ "architecture", c.lowerize ] ] ],
        device: [ [ /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i ], [ n, o, [ r, u ] ], [ /applecoremedia\/[\w\.]+ \((ipad)/ ], [ n, [ o, "Apple" ], [ r, u ] ], [ /(apple\s{0,1}tv)/i ], [ [ n, "Apple TV" ], [ o, "Apple" ] ], [ /(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i ], [ o, n, [ r, u ] ], [ /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i ], [ n, [ o, "Amazon" ], [ r, u ] ], [ /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i ], [ [ n, l.str, h.device.amazon.model ], [ o, "Amazon" ], [ r, a ] ], [ /\((ip[honed|\s\w*]+);.+(apple)/i ], [ n, o, [ r, a ] ], [ /\((ip[honed|\s\w*]+);/i ], [ n, [ o, "Apple" ], [ r, a ] ], [ /(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i ], [ o, n, [ r, a ] ], [ /\(bb10;\s(\w+)/i ], [ n, [ o, "BlackBerry" ], [ r, a ] ], [ /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i ], [ n, [ o, "Asus" ], [ r, u ] ], [ /(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i ], [ [ o, "Sony" ], [ n, "Xperia Tablet" ], [ r, u ] ], [ /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i ], [ [ o, "Sony" ], [ n, "Xperia Phone" ], [ r, a ] ], [ /\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i ], [ o, n, [ r, "console" ] ], [ /android.+;\s(shield)\sbuild/i ], [ n, [ o, "Nvidia" ], [ r, "console" ] ], [ /(playstation\s[34portablevi]+)/i ], [ n, [ o, "Sony" ], [ r, "console" ] ], [ /(sprint\s(\w+))/i ], [ [ o, l.str, h.device.sprint.vendor ], [ n, l.str, h.device.sprint.model ], [ r, a ] ], [ /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i ], [ o, n, [ r, u ] ], [ /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i ], [ o, [ n, /_/g, " " ], [ r, a ] ], [ /(nexus\s9)/i ], [ n, [ o, "HTC" ], [ r, u ] ], [ /[\s\(;](xbox(?:\sone)?)[\s\);]/i ], [ n, [ o, "Microsoft" ], [ r, "console" ] ], [ /(kin\.[onetw]{3})/i ], [ [ n, /\./g, " " ], [ o, "Microsoft" ], [ r, a ] ], [ /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i ], [ n, [ o, "Motorola" ], [ r, a ] ], [ /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i ], [ n, [ o, "Motorola" ], [ r, u ] ], [ /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i ], [ [ o, "Samsung" ], n, [ r, u ] ], [ /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i ], [ [ o, "Samsung" ], n, [ r, a ] ], [ /(samsung);smarttv/i ], [ o, n, [ r, "smarttv" ] ], [ /\(dtv[\);].+(aquos)/i ], [ n, [ o, "Sharp" ], [ r, "smarttv" ] ], [ /sie-(\w+)*/i ], [ n, [ o, "Siemens" ], [ r, a ] ], [ /(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i ], [ [ o, "Nokia" ], n, [ r, a ] ], [ /android\s3\.[\s\w;-]{10}(a\d{3})/i ], [ n, [ o, "Acer" ], [ r, u ] ], [ /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i ], [ [ o, "LG" ], n, [ r, u ] ], [ /(lg) netcast\.tv/i ], [ o, n, [ r, "smarttv" ] ], [ /(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i ], [ n, [ o, "LG" ], [ r, a ] ], [ /android.+(ideatab[a-z0-9\-\s]+)/i ], [ n, [ o, "Lenovo" ], [ r, u ] ], [ /linux;.+((jolla));/i ], [ o, n, [ r, a ] ], [ /((pebble))app\/[\d\.]+\s/i ], [ o, n, [ r, "wearable" ] ], [ /android.+;\s(glass)\s\d/i ], [ n, [ o, "Google" ], [ r, "wearable" ] ], [ /android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i ], [ [ n, /_/g, " " ], [ o, "Xiaomi" ], [ r, a ] ], [ /\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i ], [ [ r, c.lowerize ], o, n ] ],
        engine: [ [ /windows.+\sedge\/([\w\.]+)/i ], [ s, [ i, "EdgeHTML" ] ], [ /(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ i, s ], [ /rv\:([\w\.]+).*(gecko)/i ], [ s, i ] ],
        os: [ [ /microsoft\s(windows)\s(vista|xp)/i ], [ i, s ], [ /(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ i, [ s, l.str, h.os.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ i, "Windows" ], [ s, l.str, h.os.windows.version ] ], [ /\((bb)(10);/i ], [ [ i, "BlackBerry" ], s ], [ /(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i ], [ i, s ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i ], [ [ i, "Symbian" ], s ], [ /\((series40);/i ], [ i ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ i, "Firefox OS" ], s ], [ /(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i ], [ i, s ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ i, "Chromium OS" ], s ], [ /(sunos)\s?([\w\.]+\d)*/i ], [ [ i, "Solaris" ], s ], [ /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i ], [ i, s ], [ /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i ], [ [ i, "iOS" ], [ s, /_/g, "." ] ], [ /(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i ], [ [ i, "Mac OS" ], [ s, /_/g, "." ] ], [ /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i ], [ i, s ] ]
    }, d = function e(n, i) {
        if (!(this instanceof e)) return new e(n, i).getResult();
        var r = n || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : ""), o = i ? c.extend(f, i) : f;
        return this.getBrowser = function() {
            var t = l.rgx.apply(this, o.browser);
            return t.major = c.major(t.version), t;
        }, this.getCPU = function() {
            return l.rgx.apply(this, o.cpu);
        }, this.getDevice = function() {
            return l.rgx.apply(this, o.device);
        }, this.getEngine = function() {
            return l.rgx.apply(this, o.engine);
        }, this.getOS = function() {
            return l.rgx.apply(this, o.os);
        }, this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        }, this.getUA = function() {
            return r;
        }, this.setUA = function(t) {
            return r = t, this;
        }, this;
    };
    d.VERSION = "0.7.10", d.BROWSER = {
        NAME: i,
        MAJOR: "major",
        VERSION: s
    }, d.CPU = {
        ARCHITECTURE: "architecture"
    }, d.DEVICE = {
        MODEL: n,
        VENDOR: o,
        TYPE: r,
        CONSOLE: "console",
        MOBILE: a,
        SMARTTV: "smarttv",
        TABLET: u,
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    }, d.ENGINE = {
        NAME: i,
        VERSION: s
    }, d.OS = {
        NAME: i,
        VERSION: s
    }, "undefined" !== ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? ("undefined" !== ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports && (exports = module.exports = d), 
    exports.UAParser = d) : "function" === ("undefined" == typeof define ? "undefined" : _typeof(define)) && define.amd ? define("ua-parser-js", [], function() {
        return d;
    }) : t.UAParser = d;
    var p = t.jQuery || t.Zepto;
    if ("undefined" !== (void 0 === p ? "undefined" : _typeof(p))) {
        var g = new d();
        p.ua = g.getResult(), p.ua.get = function() {
            return g.getUA();
        }, p.ua.set = function(t) {
            g.setUA(t);
            var e = g.getResult();
            for (var n in e) p.ua[n] = e[n];
        };
    }
}("object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? window : this), function() {
    var t = function() {
        var t, e = {}, n = this.document.createElement("div");
        return t = "<P><I></P></I>", n.innerHTML = t, e.tagSoup = n.innerHTML !== t, n.innerHTML = "<P><i><P></P></i></P>", 
        e.selfClose = 2 === n.childNodes.length, e;
    }(), e = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, n = /^<\/([\-A-Za-z0-9_]+)[^>]*>/, i = /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g, r = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i, o = !1;
    function s(s, a) {
        for (var u in s = s || "", a = a || {}, t) t.hasOwnProperty(u) && (a.autoFix && (a["fix_" + u] = !0), 
        a.fix = a.fix || a["fix_" + u]);
        var c = document.createElement("div"), l = function(t) {
            s = t + s;
        }, h = {
            comment: /^<!--/,
            endTag: /^<\//,
            atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
            startTag: /^</,
            chars: /^[^<]/
        }, f = {
            comment: function() {
                var t = s.indexOf("--\x3e");
                if (t >= 0) return {
                    content: s.substr(4, t - 1),
                    length: t + 3
                };
            },
            endTag: function() {
                var t = s.match(n);
                if (t) return {
                    tagName: t[1],
                    length: t[0].length
                };
            },
            atomicTag: function() {
                var t = f.startTag();
                if (t) {
                    var e = s.slice(t.length);
                    if (e.match(new RegExp("</\\s*" + t.tagName + "\\s*>", "i"))) {
                        var n = e.match(new RegExp("([\\s\\S]*?)</\\s*" + t.tagName + "\\s*>", "i"));
                        if (n) return {
                            tagName: t.tagName,
                            attrs: t.attrs,
                            content: n[1],
                            length: n[0].length + t.length
                        };
                    }
                }
            },
            startTag: function() {
                if (-1 === s.indexOf(">")) return null;
                var t = s.match(e);
                if (t) {
                    var n = {}, o = {}, a = t[2];
                    return t[2].replace(i, function(t, e) {
                        if (arguments[2] || arguments[3] || arguments[4] || arguments[5]) if (arguments[5]) n[arguments[5]] = "", 
                        o[e] = !0; else {
                            var i = arguments[2] || arguments[3] || arguments[4] || r.test(e) && e || "";
                            n[e] = "string" == typeof (s = i) && -1 !== s.indexOf("&") ? (c.innerHTML = s, c.textContent || c.innerText || s) : s;
                        } else n[e] = null;
                        var s;
                        a = a.replace(t, "");
                    }), {
                        tagName: t[1],
                        attrs: n,
                        booleanAttrs: o,
                        rest: a,
                        unary: !!t[3],
                        length: t[0].length
                    };
                }
            },
            chars: function() {
                var t = s.indexOf("<");
                return {
                    length: t >= 0 ? t : s.length
                };
            }
        }, d = function() {
            for (var t in h) if (h[t].test(s)) {
                o && console.log("suspected " + t);
                var e = f[t]();
                return e ? (o && console.log("parsed " + t, e), e.type = e.type || t, e.text = s.substr(0, e.length), 
                s = s.slice(e.length), e) : null;
            }
        };
        return a.fix && function() {
            var t = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i, e = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i, n = [];
            n.last = function() {
                return this[this.length - 1];
            }, n.lastTagNameEq = function(t) {
                var e = this.last();
                return e && e.tagName && e.tagName.toUpperCase() === t.toUpperCase();
            }, n.containsTagName = function(t) {
                for (var e, n = 0; e = this[n]; n++) if (e.tagName === t) return !0;
                return !1;
            };
            var i = function(e) {
                return e && "startTag" === e.type && (e.unary = t.test(e.tagName) || e.unary, e.html5Unary = !/\/>$/.test(e.text)), 
                e;
            }, r = d, o = function() {
                var t = n.pop();
                l("</" + t.tagName + ">");
            }, u = {
                startTag: function(t) {
                    var i = t.tagName;
                    "TR" === i.toUpperCase() && n.lastTagNameEq("TABLE") ? (l("<TBODY>"), h()) : a.fix_selfClose && e.test(i) && n.containsTagName(i) ? n.lastTagNameEq(i) ? o() : (l("</" + t.tagName + ">"), 
                    h()) : t.unary || n.push(t);
                },
                endTag: function(t) {
                    n.last() ? a.fix_tagSoup && !n.lastTagNameEq(t.tagName) ? o() : n.pop() : a.fix_tagSoup && c();
                }
            }, c = function() {
                r(), h();
            }, h = function() {
                var t = function() {
                    var t = s, e = i(r());
                    return s = t, e;
                }();
                t && u[t.type] && u[t.type](t);
            };
            d = function() {
                return h(), i(r());
            };
        }(), {
            append: function(t) {
                s += t;
            },
            readToken: d,
            readTokens: function(t) {
                for (var e; e = d(); ) if (t[e.type] && !1 === t[e.type](e)) return;
            },
            clear: function() {
                var t = s;
                return s = "", t;
            },
            rest: function() {
                return s;
            },
            stack: []
        };
    }
    for (var a in s.supports = t, s.tokenToString = function(t) {
        var e = {
            comment: function(t) {
                return "\x3c!--" + t.content;
            },
            endTag: function(t) {
                return "</" + t.tagName + ">";
            },
            atomicTag: function(t) {
                return o && console.log(t), e.startTag(t) + t.content + e.endTag(t);
            },
            startTag: function(t) {
                var e = "<" + t.tagName;
                for (var n in t.attrs) {
                    e += " " + n;
                    var i = t.attrs[n];
                    void 0 !== t.booleanAttrs && void 0 !== t.booleanAttrs[n] || (e += '="' + (i ? i.replace(/(^|[^\\])"/g, '$1\\"') : "") + '"');
                }
                return t.rest && (e += t.rest), e + (t.unary && !t.html5Unary ? "/>" : ">");
            },
            chars: function(t) {
                return t.text;
            }
        };
        return e[t.type](t);
    }, s.escapeAttributes = function(t) {
        var e = {};
        for (var n in t) {
            var i = t[n];
            e[n] = i && i.replace(/(^|[^\\])"/g, '$1\\"');
        }
        return e;
    }, t) s.browserHasFlaw = s.browserHasFlaw || !t[a] && a;
    this.htmlParser = s;
}(), 
//     postscribe is freely distributable under the MIT license.
function() {
    function t() {}
    var e = {
        afterAsync: t,
        afterDequeue: t,
        afterStreamStart: t,
        afterWrite: t,
        autoFix: !0,
        beforeEnqueue: t,
        beforeWriteToken: function(t) {
            return t;
        },
        beforeWrite: function(t) {
            return t;
        },
        done: t,
        error: function(t) {
            throw t;
        },
        releaseAsync: !1
    }, n = this, i = void 0;
    function r(t) {
        return t !== i && null !== t;
    }
    if (!n.postscribe) {
        var o = Array.prototype.slice, s = function(t) {
            return t[t.length - 1];
        }, a = function() {
            var t = "data-ps-";
            function e(e, n, i) {
                var o = t + n;
                if (2 === arguments.length) {
                    var s = e.getAttribute(o);
                    return r(s) ? String(s) : s;
                }
                r(i) && "" !== i ? e.setAttribute(o, i) : e.removeAttribute(o);
            }
            function n(t, n) {
                var i = t.ownerDocument;
                h(this, {
                    root: t,
                    options: n,
                    win: i.defaultView || i.parentWindow,
                    doc: i,
                    parser: htmlParser("", {
                        autoFix: n.autoFix
                    }),
                    actuals: [ t ],
                    proxyHistory: "",
                    proxyRoot: i.createElement(t.nodeName),
                    scriptStack: [],
                    writeQueue: []
                }), e(this.proxyRoot, "proxyof", 0);
            }
            return n.prototype.write = function() {
                var t;
                for ([].push.apply(this.writeQueue, arguments); !this.deferredRemote && this.writeQueue.length; ) u(t = this.writeQueue.shift()) ? this.callFunction(t) : this.writeImpl(t);
            }, n.prototype.callFunction = function(t) {
                var e = {
                    type: "function",
                    value: t.name || t.toString()
                };
                this.onScriptStart(e), t.call(this.win, this.doc), this.onScriptDone(e);
            }, n.prototype.writeImpl = function(t) {
                this.parser.append(t);
                for (var e, n, i, r = []; (e = this.parser.readToken()) && !(n = d(e)) && !(i = p(e)); ) (e = this.options.beforeWriteToken(e)) && r.push(e);
                this.writeStaticTokens(r), n && this.handleScriptToken(e), i && this.handleStyleToken(e);
            }, n.prototype.writeStaticTokens = function(t) {
                var e = this.buildChunk(t);
                if (e.actual) return e.html = this.proxyHistory + e.actual, this.proxyHistory += e.proxy, this.proxyRoot.innerHTML = e.html, 
                this.walkChunk(), e;
            }, n.prototype.buildChunk = function(e) {
                var n = this.actuals.length, i = [], r = [], o = [];
                return c(e, function(e) {
                    var s = htmlParser.tokenToString(e);
                    if (i.push(s), e.attrs) {
                        if (!/^noscript$/i.test(e.tagName)) {
                            var a = n++;
                            r.push(s.replace(/(\/?>)/, " " + t + "id=" + a + " $1")), "ps-script" !== e.attrs.id && "ps-style" !== e.attrs.id && o.push("atomicTag" === e.type ? "" : "<" + e.tagName + " " + t + "proxyof=" + a + (e.unary ? " />" : ">"));
                        }
                    } else r.push(s), o.push("endTag" === e.type ? s : "");
                }), {
                    tokens: e,
                    raw: i.join(""),
                    actual: r.join(""),
                    proxy: o.join("")
                };
            }, n.prototype.walkChunk = function() {
                for (var t, n = [ this.proxyRoot ]; r(t = n.shift()); ) {
                    var i = 1 === t.nodeType;
                    if (!(i && e(t, "proxyof"))) {
                        i && (this.actuals[e(t, "id")] = t, e(t, "id", null));
                        var o = t.parentNode && e(t.parentNode, "proxyof");
                        o && this.actuals[o].appendChild(t);
                    }
                    n.unshift.apply(n, f(t.childNodes));
                }
            }, n.prototype.handleScriptToken = function(t) {
                var e = this.parser.clear();
                if (e && this.writeQueue.unshift(e), t.src = t.attrs.src || t.attrs.SRC, t = this.options.beforeWriteToken(t)) {
                    t.src && this.scriptStack.length ? this.deferredRemote = t : this.onScriptStart(t);
                    var n = this;
                    this.writeScriptToken(t, function() {
                        n.onScriptDone(t);
                    });
                }
            }, n.prototype.handleStyleToken = function(t) {
                var e = this.parser.clear();
                e && this.writeQueue.unshift(e), t.type = t.attrs.type || t.attrs.TYPE || "text/css", (t = this.options.beforeWriteToken(t)) && this.writeStyleToken(t), 
                e && this.write();
            }, n.prototype.writeStyleToken = function(t) {
                var e = this.buildStyle(t);
                this.insertStyle(e), t.content && (e.styleSheet && !e.sheet ? e.styleSheet.cssText = t.content : e.appendChild(this.doc.createTextNode(t.content)));
            }, n.prototype.buildStyle = function(t) {
                var e = this.doc.createElement(t.tagName);
                return e.setAttribute("type", t.type), l(t.attrs, function(t, n) {
                    e.setAttribute(t, n);
                }), e;
            }, n.prototype.insertStyle = function(t) {
                this.writeImpl('<span id="ps-style"/>');
                var e = this.doc.getElementById("ps-style");
                e.parentNode.replaceChild(t, e);
            }, n.prototype.onScriptStart = function(t) {
                t.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(t);
            }, n.prototype.onScriptDone = function(t) {
                t === this.scriptStack[0] ? (this.scriptStack.shift(), this.write.apply(this, t.outerWrites), !this.scriptStack.length && this.deferredRemote && (this.onScriptStart(this.deferredRemote), 
                this.deferredRemote = null)) : this.options.error({
                    message: "Bad script nesting or script finished twice"
                });
            }, n.prototype.writeScriptToken = function(t, e) {
                var n = this.buildScript(t), i = this.shouldRelease(n), r = this.options.afterAsync;
                t.src && (n.src = t.src, this.scriptLoadHandler(n, i ? r : function() {
                    e(), r();
                }));
                try {
                    this.insertScript(n), t.src && !i || e();
                } catch (t) {
                    this.options.error(t), e();
                }
            }, n.prototype.buildScript = function(t) {
                var e = this.doc.createElement(t.tagName);
                return l(t.attrs, function(t, n) {
                    e.setAttribute(t, n);
                }), t.content && (e.text = t.content), e;
            }, n.prototype.insertScript = function(t) {
                this.writeImpl('<span id="ps-script"/>');
                var e = this.doc.getElementById("ps-script");
                e.parentNode.replaceChild(t, e);
            }, n.prototype.scriptLoadHandler = function(t, e) {
                function n() {
                    t = t.onload = t.onreadystatechange = t.onerror = null;
                }
                var i = this.options.error;
                function r() {
                    n(), e();
                }
                h(t, {
                    onload: function() {
                        r();
                    },
                    onreadystatechange: function() {
                        /^(loaded|complete)$/.test(t.readyState) && r();
                    },
                    onerror: function() {
                        var r;
                        r = {
                            message: "remote script failed " + t.src
                        }, n(), i(r), e();
                    }
                });
            }, n.prototype.shouldRelease = function(t) {
                return !/^script$/i.test(t.nodeName) || !!(this.options.releaseAsync && t.src && t.hasAttribute("async"));
            }, n;
        }();
        n.postscribe = function() {
            var i = 0, o = [], c = null;
            function d() {
                var e, n = o.shift();
                n && ((e = s(n)).afterDequeue(), n.stream = function(e, n, r) {
                    (c = new a(e, r)).id = i++, c.name = r.name || c.id, p.streams[c.name] = c;
                    var o = e.ownerDocument, s = {
                        close: o.close,
                        open: o.open,
                        write: o.write,
                        writeln: o.writeln
                    };
                    function u(t) {
                        t = r.beforeWrite(t), c.write(t), r.afterWrite(t);
                    }
                    h(o, {
                        close: t,
                        open: t,
                        write: function() {
                            return u(f(arguments).join(""));
                        },
                        writeln: function() {
                            return u(f(arguments).join("") + "\n");
                        }
                    });
                    var l = c.win.onerror || t;
                    return c.win.onerror = function(t, e, n) {
                        r.error({
                            msg: t + " - " + e + ":" + n
                        }), l.apply(c.win, arguments);
                    }, c.write(n, function() {
                        h(o, s), c.win.onerror = l, r.done(), c = null, d();
                    }), c;
                }.apply(null, n), e.afterStreamStart());
            }
            function p(i, s, a) {
                u(a) && (a = {
                    done: a
                }), a = function(t, e) {
                    return t = t || {}, l(e, function(e, n) {
                        r(t[e]) || (t[e] = n);
                    }), t;
                }(a, e);
                var h = [ i = /^#/.test(i) ? n.document.getElementById(i.substr(1)) : i.jquery ? i[0] : i, s, a ];
                return i.postscribe = {
                    cancel: function() {
                        h.stream ? h.stream.abort() : h[1] = t;
                    }
                }, a.beforeEnqueue(h), o.push(h), c || d(), i.postscribe;
            }
            return h(p, {
                streams: {},
                queue: o,
                WriteStream: a
            });
        }();
    }
    function u(t) {
        return "function" == typeof t;
    }
    function c(t, e, n) {
        var i, r = t && t.length || 0;
        for (i = 0; i < r; i++) e.call(n, t[i], i);
    }
    function l(t, e, n) {
        var i;
        for (i in t) t.hasOwnProperty(i) && e.call(n, i, t[i]);
    }
    function h(t, e) {
        return l(e, function(e, n) {
            t[e] = n;
        }), t;
    }
    function f(t) {
        try {
            return o.call(t);
        } catch (n) {
            var e = [];
            return c(t, function(t) {
                e.push(t);
            }), e;
        }
    }
    function d(t) {
        return !!(t && "tagName" in t) && !!~t.tagName.toLowerCase().indexOf("script");
    }
    function p(t) {
        return !!(t && "tagName" in t) && !!~t.tagName.toLowerCase().indexOf("style");
    }
}(), function(t, e) {
    var n, i, r = [], o = !1, s = t.documentElement, a = function() {}, u = "hidden", c = "visibilitychange";
    void 0 !== t.webkitHidden && (u = "webkitHidden", c = "webkitvisibilitychange"), e.getComputedStyle || d();
    for (var l = [ "", "-webkit-", "-moz-", "-ms-" ], h = document.createElement("div"), f = l.length - 1; f >= 0; f--) {
        try {
            h.style.position = l[f] + "sticky";
        } catch (t) {}
        "" != h.style.position && d();
    }
    function d() {
        I = H = P = M = D = O = a;
    }
    function p(t) {
        return parseFloat(t) || 0;
    }
    function g() {
        n = {
            top: e.pageYOffset,
            left: e.pageXOffset
        };
    }
    function m() {
        if (e.pageXOffset != n.left) return g(), void P();
        e.pageYOffset != n.top && (g(), y());
    }
    function v(t) {
        setTimeout(function() {
            e.pageYOffset != n.top && (n.top = e.pageYOffset, y());
        }, 0);
    }
    function y() {
        for (var t = r.length - 1; t >= 0; t--) b(r[t]);
    }
    function b(t) {
        if (t.inited) {
            var e = n.top <= t.limit.start ? 0 : n.top >= t.limit.end ? 2 : 1;
            t.mode != e && function(t, e) {
                var n = t.node.style;
                switch (e) {
                  case 0:
                    n.position = "absolute", n.left = t.offset.left + "px", n.right = t.offset.right + "px", n.top = t.offset.top + "px", 
                    n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                    break;

                  case 1:
                    n.position = "fixed", n.left = t.box.left + "px", n.right = t.box.right + "px", n.top = t.css.top, n.bottom = "auto", 
                    n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                    break;

                  case 2:
                    n.position = "absolute", n.left = t.offset.left + "px", n.right = t.offset.right + "px", n.top = "auto", 
                    n.bottom = 0, n.width = "auto", n.marginLeft = 0, n.marginRight = 0;
                }
                t.mode = e;
            }(t, e);
        }
    }
    function w(t) {
        isNaN(parseFloat(t.computed.top)) || t.isCell || "none" == t.computed.display || (t.inited = !0, t.clone || function(t) {
            t.clone = document.createElement("div");
            var e = t.node.nextSibling || t.node, n = t.clone.style;
            n.height = t.height + "px", n.width = t.width + "px", n.marginTop = t.computed.marginTop, n.marginBottom = t.computed.marginBottom, 
            n.marginLeft = t.computed.marginLeft, n.marginRight = t.computed.marginRight, n.padding = n.border = n.borderSpacing = 0, 
            n.fontSize = "1em", n.position = "static", n.cssFloat = t.computed.cssFloat, t.node.parentNode.insertBefore(t.clone, e);
        }(t), "absolute" != t.parent.computed.position && "relative" != t.parent.computed.position && (t.parent.node.style.position = "relative"), 
        b(t), t.parent.height = t.parent.node.offsetHeight, t.docOffsetTop = k(t.clone));
    }
    function x(t) {
        var e = !0;
        t.clone && function(t) {
            t.clone.parentNode.removeChild(t.clone), t.clone = void 0;
        }(t), function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        }(t.node.style, t.css);
        for (var n = r.length - 1; n >= 0; n--) if (r[n].node !== t.node && r[n].parent.node === t.parent.node) {
            e = !1;
            break;
        }
        e && (t.parent.node.style.position = t.parent.css.position), t.mode = -1;
    }
    function _() {
        for (var t = r.length - 1; t >= 0; t--) w(r[t]);
    }
    function T() {
        for (var t = r.length - 1; t >= 0; t--) x(r[t]);
    }
    function C(t) {
        var e = getComputedStyle(t), n = t.parentNode, i = getComputedStyle(n), r = t.style.position;
        t.style.position = "relative";
        var o = {
            top: e.top,
            marginTop: e.marginTop,
            marginBottom: e.marginBottom,
            marginLeft: e.marginLeft,
            marginRight: e.marginRight,
            cssFloat: e.cssFloat,
            display: e.display
        }, a = {
            top: p(e.top),
            marginBottom: p(e.marginBottom),
            paddingLeft: p(e.paddingLeft),
            paddingRight: p(e.paddingRight),
            borderLeftWidth: p(e.borderLeftWidth),
            borderRightWidth: p(e.borderRightWidth)
        };
        t.style.position = r;
        var u = {
            position: t.style.position,
            top: t.style.top,
            bottom: t.style.bottom,
            left: t.style.left,
            right: t.style.right,
            width: t.style.width,
            marginTop: t.style.marginTop,
            marginLeft: t.style.marginLeft,
            marginRight: t.style.marginRight
        }, c = S(t), l = S(n), h = {
            node: n,
            css: {
                position: n.style.position
            },
            computed: {
                position: i.position
            },
            numeric: {
                borderLeftWidth: p(i.borderLeftWidth),
                borderRightWidth: p(i.borderRightWidth),
                borderTopWidth: p(i.borderTopWidth),
                borderBottomWidth: p(i.borderBottomWidth)
            }
        };
        return {
            node: t,
            box: {
                left: c.win.left,
                right: s.clientWidth - c.win.right
            },
            offset: {
                top: c.win.top - l.win.top - h.numeric.borderTopWidth,
                left: c.win.left - l.win.left - h.numeric.borderLeftWidth,
                right: -c.win.right + l.win.right - h.numeric.borderRightWidth
            },
            css: u,
            isCell: "table-cell" == e.display,
            computed: o,
            numeric: a,
            width: c.win.right - c.win.left,
            height: c.win.bottom - c.win.top,
            mode: -1,
            inited: !1,
            parent: h,
            limit: {
                start: c.doc.top - a.top,
                end: l.doc.top + n.offsetHeight - h.numeric.borderBottomWidth - t.offsetHeight - a.top - a.marginBottom
            }
        };
    }
    function k(t) {
        for (var e = 0; t; ) e += t.offsetTop, t = t.offsetParent;
        return e;
    }
    function S(t) {
        var n = t.getBoundingClientRect();
        return {
            doc: {
                top: n.top + e.pageYOffset,
                left: n.left + e.pageXOffset
            },
            win: n
        };
    }
    function E() {
        i = setInterval(function() {
            !function() {
                for (var t = r.length - 1; t >= 0; t--) if (r[t].inited) {
                    var e = Math.abs(k(r[t].clone) - r[t].docOffsetTop), n = Math.abs(r[t].parent.node.offsetHeight - r[t].parent.height);
                    if (e >= 2 || n >= 2) return !1;
                }
                return !0;
            }() && P();
        }, 500);
    }
    function A() {
        clearInterval(i);
    }
    function N() {
        o && (document[u] ? A() : E());
    }
    function I() {
        o || (g(), _(), e.addEventListener("scroll", m), e.addEventListener("wheel", v), e.addEventListener("resize", P), 
        e.addEventListener("orientationchange", P), t.addEventListener(c, N), E(), o = !0);
    }
    function P() {
        if (o) {
            T();
            for (var t = r.length - 1; t >= 0; t--) r[t] = C(r[t].node);
            _();
        }
    }
    function M() {
        e.removeEventListener("scroll", m), e.removeEventListener("wheel", v), e.removeEventListener("resize", P), 
        e.removeEventListener("orientationchange", P), t.removeEventListener(c, N), A(), o = !1;
    }
    function D() {
        M(), T();
    }
    function O() {
        for (D(); r.length; ) r.pop();
    }
    function H(t) {
        for (var e = r.length - 1; e >= 0; e--) if (r[e].node === t) return;
        var n = C(t);
        r.push(n), o ? w(n) : I();
    }
    g(), e.Stickyfill = {
        stickies: r,
        add: H,
        remove: function(t) {
            for (var e = r.length - 1; e >= 0; e--) r[e].node === t && (x(r[e]), r.splice(e, 1));
        },
        init: I,
        rebuild: P,
        pause: M,
        stop: D,
        kill: O
    };
}(document, window), window.jQuery && (window.jQuery.fn.Stickyfill = function(t) {
    return this.each(function() {
        Stickyfill.add(this);
    }), this;
});/*  Copyright (C) 2012-2014  Kurt Milam - http://xioup.com | Source: https://gist.github.com/1868955
 *  
 *  This mixin now has its own github repository: https://github.com/kurtmilam/underscoreDeepExtend
 *  It's also available through npm and bower
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/