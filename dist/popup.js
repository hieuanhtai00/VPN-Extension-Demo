/*! For license information please see popup.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n, r, o;
        (r = "undefined" != typeof window ? window : this),
          (o = function (r, o) {
            var i = [],
              s = i.slice,
              a = i.concat,
              l = i.push,
              c = i.indexOf,
              u = {},
              p = u.toString,
              f = u.hasOwnProperty,
              d = {},
              h = r.document,
              m = "2.1.4",
              g = function (e, t) {
                return new g.fn.init(e, t);
              },
              v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
              y = /^-ms-/,
              x = /-([\da-z])/gi,
              b = function (e, t) {
                return t.toUpperCase();
              };
            function w(e) {
              var t = "length" in e && e.length,
                n = g.type(e);
              return (
                "function" !== n &&
                !g.isWindow(e) &&
                (!(1 !== e.nodeType || !t) ||
                  "array" === n ||
                  0 === t ||
                  ("number" == typeof t && t > 0 && t - 1 in e))
              );
            }
            (g.fn = g.prototype =
              {
                jquery: m,
                constructor: g,
                selector: "",
                length: 0,
                toArray: function () {
                  return s.call(this);
                },
                get: function (e) {
                  return null != e
                    ? e < 0
                      ? this[e + this.length]
                      : this[e]
                    : s.call(this);
                },
                pushStack: function (e) {
                  var t = g.merge(this.constructor(), e);
                  return (t.prevObject = this), (t.context = this.context), t;
                },
                each: function (e, t) {
                  return g.each(this, e, t);
                },
                map: function (e) {
                  return this.pushStack(
                    g.map(this, function (t, n) {
                      return e.call(t, n, t);
                    })
                  );
                },
                slice: function () {
                  return this.pushStack(s.apply(this, arguments));
                },
                first: function () {
                  return this.eq(0);
                },
                last: function () {
                  return this.eq(-1);
                },
                eq: function (e) {
                  var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                  return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function () {
                  return this.prevObject || this.constructor(null);
                },
                push: l,
                sort: i.sort,
                splice: i.splice,
              }),
              (g.extend = g.fn.extend =
                function () {
                  var e,
                    t,
                    n,
                    r,
                    o,
                    i,
                    s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                  for (
                    "boolean" == typeof s &&
                      ((c = s), (s = arguments[a] || {}), a++),
                      "object" == typeof s || g.isFunction(s) || (s = {}),
                      a === l && ((s = this), a--);
                    a < l;
                    a++
                  )
                    if (null != (e = arguments[a]))
                      for (t in e)
                        (n = s[t]),
                          s !== (r = e[t]) &&
                            (c &&
                            r &&
                            (g.isPlainObject(r) || (o = g.isArray(r)))
                              ? (o
                                  ? ((o = !1), (i = n && g.isArray(n) ? n : []))
                                  : (i = n && g.isPlainObject(n) ? n : {}),
                                (s[t] = g.extend(c, i, r)))
                              : void 0 !== r && (s[t] = r));
                  return s;
                }),
              g.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                  throw new Error(e);
                },
                noop: function () {},
                isFunction: function (e) {
                  return "function" === g.type(e);
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                  return null != e && e === e.window;
                },
                isNumeric: function (e) {
                  return !g.isArray(e) && e - parseFloat(e) + 1 >= 0;
                },
                isPlainObject: function (e) {
                  return !(
                    "object" !== g.type(e) ||
                    e.nodeType ||
                    g.isWindow(e) ||
                    (e.constructor &&
                      !f.call(e.constructor.prototype, "isPrototypeOf"))
                  );
                },
                isEmptyObject: function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
                },
                type: function (e) {
                  return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                    ? u[p.call(e)] || "object"
                    : typeof e;
                },
                globalEval: function (e) {
                  var t,
                    n = eval;
                  (e = g.trim(e)) &&
                    (1 === e.indexOf("use strict")
                      ? (((t = h.createElement("script")).text = e),
                        h.head.appendChild(t).parentNode.removeChild(t))
                      : n(e));
                },
                camelCase: function (e) {
                  return e.replace(y, "ms-").replace(x, b);
                },
                nodeName: function (e, t) {
                  return (
                    e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                  );
                },
                each: function (e, t, n) {
                  var r = 0,
                    o = e.length,
                    i = w(e);
                  if (n) {
                    if (i) for (; r < o && !1 !== t.apply(e[r], n); r++);
                    else for (r in e) if (!1 === t.apply(e[r], n)) break;
                  } else if (i)
                    for (; r < o && !1 !== t.call(e[r], r, e[r]); r++);
                  else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                  return e;
                },
                trim: function (e) {
                  return null == e ? "" : (e + "").replace(v, "");
                },
                makeArray: function (e, t) {
                  var n = t || [];
                  return (
                    null != e &&
                      (w(Object(e))
                        ? g.merge(n, "string" == typeof e ? [e] : e)
                        : l.call(n, e)),
                    n
                  );
                },
                inArray: function (e, t, n) {
                  return null == t ? -1 : c.call(t, e, n);
                },
                merge: function (e, t) {
                  for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                    e[o++] = t[r];
                  return (e.length = o), e;
                },
                grep: function (e, t, n) {
                  for (var r = [], o = 0, i = e.length, s = !n; o < i; o++)
                    !t(e[o], o) !== s && r.push(e[o]);
                  return r;
                },
                map: function (e, t, n) {
                  var r,
                    o = 0,
                    i = e.length,
                    s = [];
                  if (w(e))
                    for (; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                  else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                  return a.apply([], s);
                },
                guid: 1,
                proxy: function (e, t) {
                  var n, r, o;
                  if (
                    ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                    g.isFunction(e))
                  )
                    return (
                      (r = s.call(arguments, 2)),
                      (o = function () {
                        return e.apply(t || this, r.concat(s.call(arguments)));
                      }),
                      (o.guid = e.guid = e.guid || g.guid++),
                      o
                    );
                },
                now: Date.now,
                support: d,
              }),
              g.each(
                "Boolean Number String Function Array Date RegExp Object Error".split(
                  " "
                ),
                function (e, t) {
                  u["[object " + t + "]"] = t.toLowerCase();
                }
              );
            var C = (function (e) {
              var t,
                n,
                r,
                o,
                i,
                s,
                a,
                l,
                c,
                u,
                p,
                f,
                d,
                h,
                m,
                g,
                v,
                y,
                x,
                b = "sizzle" + 1 * new Date(),
                w = e.document,
                C = 0,
                T = 0,
                k = se(),
                N = se(),
                E = se(),
                S = function (e, t) {
                  return e === t && (p = !0), 0;
                },
                j = 1 << 31,
                D = {}.hasOwnProperty,
                _ = [],
                A = _.pop,
                H = _.push,
                L = _.push,
                q = _.slice,
                O = function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                M =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                R = P.replace("w", "w#"),
                I =
                  "\\[[\\x20\\t\\r\\n\\f]*(" +
                  P +
                  ")(?:" +
                  F +
                  "*([*^$|!~]?=)" +
                  F +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  R +
                  "))|)" +
                  F +
                  "*\\]",
                W =
                  ":(" +
                  P +
                  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                  I +
                  ")*)|.*)\\)|)",
                B = new RegExp(F + "+", "g"),
                $ = new RegExp(
                  "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                  "g"
                ),
                z = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                X = new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
                ),
                U = new RegExp(
                  "=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]",
                  "g"
                ),
                V = new RegExp(W),
                Q = new RegExp("^" + R + "$"),
                Y = {
                  ID: new RegExp("^#(" + P + ")"),
                  CLASS: new RegExp("^\\.(" + P + ")"),
                  TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
                  ATTR: new RegExp("^" + I),
                  PSEUDO: new RegExp("^" + W),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + M + ")$", "i"),
                  needsContext: new RegExp(
                    "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                    "i"
                  ),
                },
                G = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = /'|\\/g,
                ne = new RegExp(
                  "\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)",
                  "ig"
                ),
                re = function (e, t, n) {
                  var r = "0x" + t - 65536;
                  return r != r || n
                    ? t
                    : r < 0
                    ? String.fromCharCode(r + 65536)
                    : String.fromCharCode(
                        (r >> 10) | 55296,
                        (1023 & r) | 56320
                      );
                },
                oe = function () {
                  f();
                };
              try {
                L.apply((_ = q.call(w.childNodes)), w.childNodes),
                  _[w.childNodes.length].nodeType;
              } catch (e) {
                L = {
                  apply: _.length
                    ? function (e, t) {
                        H.apply(e, q.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                      },
                };
              }
              function ie(e, t, r, o) {
                var i, a, c, u, p, h, v, y, C, T;
                if (
                  ((t ? t.ownerDocument || t : w) !== d && f(t),
                  (r = r || []),
                  (u = (t = t || d).nodeType),
                  "string" != typeof e ||
                    !e ||
                    (1 !== u && 9 !== u && 11 !== u))
                )
                  return r;
                if (!o && m) {
                  if (11 !== u && (i = Z.exec(e)))
                    if ((c = i[1])) {
                      if (9 === u) {
                        if (!(a = t.getElementById(c)) || !a.parentNode)
                          return r;
                        if (a.id === c) return r.push(a), r;
                      } else if (
                        t.ownerDocument &&
                        (a = t.ownerDocument.getElementById(c)) &&
                        x(t, a) &&
                        a.id === c
                      )
                        return r.push(a), r;
                    } else {
                      if (i[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                      if ((c = i[3]) && n.getElementsByClassName)
                        return L.apply(r, t.getElementsByClassName(c)), r;
                    }
                  if (n.qsa && (!g || !g.test(e))) {
                    if (
                      ((y = v = b),
                      (C = t),
                      (T = 1 !== u && e),
                      1 === u && "object" !== t.nodeName.toLowerCase())
                    ) {
                      for (
                        h = s(e),
                          (v = t.getAttribute("id"))
                            ? (y = v.replace(te, "\\$&"))
                            : t.setAttribute("id", y),
                          y = "[id='" + y + "'] ",
                          p = h.length;
                        p--;

                      )
                        h[p] = y + ge(h[p]);
                      (C = (ee.test(e) && he(t.parentNode)) || t),
                        (T = h.join(","));
                    }
                    if (T)
                      try {
                        return L.apply(r, C.querySelectorAll(T)), r;
                      } catch (e) {
                      } finally {
                        v || t.removeAttribute("id");
                      }
                  }
                }
                return l(e.replace($, "$1"), t, r, o);
              }
              function se() {
                var e = [];
                return function t(n, o) {
                  return (
                    e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    (t[n + " "] = o)
                  );
                };
              }
              function ae(e) {
                return (e[b] = !0), e;
              }
              function le(e) {
                var t = d.createElement("div");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function ce(e, t) {
                for (var n = e.split("|"), o = e.length; o--; )
                  r.attrHandle[n[o]] = t;
              }
              function ue(e, t) {
                var n = t && e,
                  r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    (~t.sourceIndex || j) - (~e.sourceIndex || j);
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function pe(e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function fe(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              }
              function de(e) {
                return ae(function (t) {
                  return (
                    (t = +t),
                    ae(function (n, r) {
                      for (var o, i = e([], n.length, t), s = i.length; s--; )
                        n[(o = i[s])] && (n[o] = !(r[o] = n[o]));
                    })
                  );
                });
              }
              function he(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((n = ie.support = {}),
              (i = ie.isXML =
                function (e) {
                  var t = e && (e.ownerDocument || e).documentElement;
                  return !!t && "HTML" !== t.nodeName;
                }),
              (f = ie.setDocument =
                function (e) {
                  var t,
                    o,
                    s = e ? e.ownerDocument || e : w;
                  return s !== d && 9 === s.nodeType && s.documentElement
                    ? ((d = s),
                      (h = s.documentElement),
                      (o = s.defaultView) &&
                        o !== o.top &&
                        (o.addEventListener
                          ? o.addEventListener("unload", oe, !1)
                          : o.attachEvent && o.attachEvent("onunload", oe)),
                      (m = !i(s)),
                      (n.attributes = le(function (e) {
                        return (
                          (e.className = "i"), !e.getAttribute("className")
                        );
                      })),
                      (n.getElementsByTagName = le(function (e) {
                        return (
                          e.appendChild(s.createComment("")),
                          !e.getElementsByTagName("*").length
                        );
                      })),
                      (n.getElementsByClassName = K.test(
                        s.getElementsByClassName
                      )),
                      (n.getById = le(function (e) {
                        return (
                          (h.appendChild(e).id = b),
                          !s.getElementsByName || !s.getElementsByName(b).length
                        );
                      })),
                      n.getById
                        ? ((r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && m) {
                              var n = t.getElementById(e);
                              return n && n.parentNode ? [n] : [];
                            }
                          }),
                          (r.filter.ID = function (e) {
                            var t = e.replace(ne, re);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }))
                        : (delete r.find.ID,
                          (r.filter.ID = function (e) {
                            var t = e.replace(ne, re);
                            return function (e) {
                              var n =
                                void 0 !== e.getAttributeNode &&
                                e.getAttributeNode("id");
                              return n && n.value === t;
                            };
                          })),
                      (r.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                              ? t.getElementsByTagName(e)
                              : n.qsa
                              ? t.querySelectorAll(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              r = [],
                              o = 0,
                              i = t.getElementsByTagName(e);
                            if ("*" === e) {
                              for (; (n = i[o++]); )
                                1 === n.nodeType && r.push(n);
                              return r;
                            }
                            return i;
                          }),
                      (r.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                          if (m) return t.getElementsByClassName(e);
                        }),
                      (v = []),
                      (g = []),
                      (n.qsa = K.test(s.querySelectorAll)) &&
                        (le(function (e) {
                          (h.appendChild(e).innerHTML =
                            "<a id='" +
                            b +
                            "'></a><select id='" +
                            b +
                            "-\f]' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                              g.push(
                                "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + M + ")"
                              ),
                            e.querySelectorAll("[id~=" + b + "-]").length ||
                              g.push("~="),
                            e.querySelectorAll(":checked").length ||
                              g.push(":checked"),
                            e.querySelectorAll("a#" + b + "+*").length ||
                              g.push(".#.+[+~]");
                        }),
                        le(function (e) {
                          var t = s.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length &&
                              g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                            e.querySelectorAll(":enabled").length ||
                              g.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            g.push(",.*:");
                        })),
                      (n.matchesSelector = K.test(
                        (y =
                          h.matches ||
                          h.webkitMatchesSelector ||
                          h.mozMatchesSelector ||
                          h.oMatchesSelector ||
                          h.msMatchesSelector)
                      )) &&
                        le(function (e) {
                          (n.disconnectedMatch = y.call(e, "div")),
                            y.call(e, "[s!='']:x"),
                            v.push("!=", W);
                        }),
                      (g = g.length && new RegExp(g.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = K.test(h.compareDocumentPosition)),
                      (x =
                        t || K.test(h.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                              return (
                                e === r ||
                                !(
                                  !r ||
                                  1 !== r.nodeType ||
                                  !(n.contains
                                    ? n.contains(r)
                                    : e.compareDocumentPosition &&
                                      16 & e.compareDocumentPosition(r))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t)
                                for (; (t = t.parentNode); )
                                  if (t === e) return !0;
                              return !1;
                            }),
                      (S = t
                        ? function (e, t) {
                            if (e === t) return (p = !0), 0;
                            var r =
                              !e.compareDocumentPosition -
                              !t.compareDocumentPosition;
                            return (
                              r ||
                              (1 &
                                (r =
                                  (e.ownerDocument || e) ===
                                  (t.ownerDocument || t)
                                    ? e.compareDocumentPosition(t)
                                    : 1) ||
                              (!n.sortDetached &&
                                t.compareDocumentPosition(e) === r)
                                ? e === s || (e.ownerDocument === w && x(w, e))
                                  ? -1
                                  : t === s ||
                                    (t.ownerDocument === w && x(w, t))
                                  ? 1
                                  : u
                                  ? O(u, e) - O(u, t)
                                  : 0
                                : 4 & r
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (p = !0), 0;
                            var n,
                              r = 0,
                              o = e.parentNode,
                              i = t.parentNode,
                              a = [e],
                              l = [t];
                            if (!o || !i)
                              return e === s
                                ? -1
                                : t === s
                                ? 1
                                : o
                                ? -1
                                : i
                                ? 1
                                : u
                                ? O(u, e) - O(u, t)
                                : 0;
                            if (o === i) return ue(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) l.unshift(n);
                            for (; a[r] === l[r]; ) r++;
                            return r
                              ? ue(a[r], l[r])
                              : a[r] === w
                              ? -1
                              : l[r] === w
                              ? 1
                              : 0;
                          }),
                      s)
                    : d;
                }),
              (ie.matches = function (e, t) {
                return ie(e, null, null, t);
              }),
              (ie.matchesSelector = function (e, t) {
                if (
                  ((e.ownerDocument || e) !== d && f(e),
                  (t = t.replace(U, "='$1']")),
                  n.matchesSelector &&
                    m &&
                    (!v || !v.test(t)) &&
                    (!g || !g.test(t)))
                )
                  try {
                    var r = y.call(e, t);
                    if (
                      r ||
                      n.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return r;
                  } catch (e) {}
                return ie(t, d, null, [e]).length > 0;
              }),
              (ie.contains = function (e, t) {
                return (e.ownerDocument || e) !== d && f(e), x(e, t);
              }),
              (ie.attr = function (e, t) {
                (e.ownerDocument || e) !== d && f(e);
                var o = r.attrHandle[t.toLowerCase()],
                  i =
                    o && D.call(r.attrHandle, t.toLowerCase())
                      ? o(e, t, !m)
                      : void 0;
                return void 0 !== i
                  ? i
                  : n.attributes || !m
                  ? e.getAttribute(t)
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null;
              }),
              (ie.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (ie.uniqueSort = function (e) {
                var t,
                  r = [],
                  o = 0,
                  i = 0;
                if (
                  ((p = !n.detectDuplicates),
                  (u = !n.sortStable && e.slice(0)),
                  e.sort(S),
                  p)
                ) {
                  for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
                  for (; o--; ) e.splice(r[o], 1);
                }
                return (u = null), e;
              }),
              (o = ie.getText =
                function (e) {
                  var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                  if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                      if ("string" == typeof e.textContent)
                        return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                  } else for (; (t = e[r++]); ) n += o(t);
                  return n;
                }),
              (r = ie.selectors =
                {
                  cacheLength: 50,
                  createPseudo: ae,
                  match: Y,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(ne, re)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(ne, re)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || ie.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && ie.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return Y.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || "")
                            : n &&
                              V.test(n) &&
                              (t = s(n, !0)) &&
                              (t = n.indexOf(")", n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(ne, re).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = k[e + " "];
                      return (
                        t ||
                        ((t = new RegExp(
                          "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + F + "|$)"
                        )) &&
                          k(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute &&
                                  e.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (r) {
                        var o = ie.attr(r, e);
                        return null == o
                          ? "!=" === t
                          : !t ||
                              ((o += ""),
                              "=" === t
                                ? o === n
                                : "!=" === t
                                ? o !== n
                                : "^=" === t
                                ? n && 0 === o.indexOf(n)
                                : "*=" === t
                                ? n && o.indexOf(n) > -1
                                : "$=" === t
                                ? n && o.slice(-n.length) === n
                                : "~=" === t
                                ? (" " + o.replace(B, " ") + " ").indexOf(n) >
                                  -1
                                : "|=" === t &&
                                  (o === n ||
                                    o.slice(0, n.length + 1) === n + "-"));
                      };
                    },
                    CHILD: function (e, t, n, r, o) {
                      var i = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                      return 1 === r && 0 === o
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, l) {
                            var c,
                              u,
                              p,
                              f,
                              d,
                              h,
                              m = i !== s ? "nextSibling" : "previousSibling",
                              g = t.parentNode,
                              v = a && t.nodeName.toLowerCase(),
                              y = !l && !a;
                            if (g) {
                              if (i) {
                                for (; m; ) {
                                  for (p = t; (p = p[m]); )
                                    if (
                                      a
                                        ? p.nodeName.toLowerCase() === v
                                        : 1 === p.nodeType
                                    )
                                      return !1;
                                  h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((h = [s ? g.firstChild : g.lastChild]), s && y)
                              ) {
                                for (
                                  d =
                                    (c =
                                      (u = g[b] || (g[b] = {}))[e] || [])[0] ===
                                      C && c[1],
                                    f = c[0] === C && c[2],
                                    p = d && g.childNodes[d];
                                  (p =
                                    (++d && p && p[m]) ||
                                    (f = d = 0) ||
                                    h.pop());

                                )
                                  if (1 === p.nodeType && ++f && p === t) {
                                    u[e] = [C, d, f];
                                    break;
                                  }
                              } else if (
                                y &&
                                (c = (t[b] || (t[b] = {}))[e]) &&
                                c[0] === C
                              )
                                f = c[1];
                              else
                                for (
                                  ;
                                  (p =
                                    (++d && p && p[m]) ||
                                    (f = d = 0) ||
                                    h.pop()) &&
                                  ((a
                                    ? p.nodeName.toLowerCase() !== v
                                    : 1 !== p.nodeType) ||
                                    !++f ||
                                    (y && ((p[b] || (p[b] = {}))[e] = [C, f]),
                                    p !== t));

                                );
                              return (
                                (f -= o) === r || (f % r == 0 && f / r >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        o =
                          r.pseudos[e] ||
                          r.setFilters[e.toLowerCase()] ||
                          ie.error("unsupported pseudo: " + e);
                      return o[b]
                        ? o(t)
                        : o.length > 1
                        ? ((n = [e, e, "", t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                            ? ae(function (e, n) {
                                for (var r, i = o(e, t), s = i.length; s--; )
                                  e[(r = O(e, i[s]))] = !(n[r] = i[s]);
                              })
                            : function (e) {
                                return o(e, 0, n);
                              })
                        : o;
                    },
                  },
                  pseudos: {
                    not: ae(function (e) {
                      var t = [],
                        n = [],
                        r = a(e.replace($, "$1"));
                      return r[b]
                        ? ae(function (e, t, n, o) {
                            for (
                              var i, s = r(e, null, o, []), a = e.length;
                              a--;

                            )
                              (i = s[a]) && (e[a] = !(t[a] = i));
                          })
                        : function (e, o, i) {
                            return (
                              (t[0] = e),
                              r(t, null, i, n),
                              (t[0] = null),
                              !n.pop()
                            );
                          };
                    }),
                    has: ae(function (e) {
                      return function (t) {
                        return ie(e, t).length > 0;
                      };
                    }),
                    contains: ae(function (e) {
                      return (
                        (e = e.replace(ne, re)),
                        function (t) {
                          return (
                            (t.textContent || t.innerText || o(t)).indexOf(e) >
                            -1
                          );
                        }
                      );
                    }),
                    lang: ae(function (e) {
                      return (
                        Q.test(e || "") || ie.error("unsupported lang: " + e),
                        (e = e.replace(ne, re).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = m
                                ? t.lang
                                : t.getAttribute("xml:lang") ||
                                  t.getAttribute("lang"))
                            )
                              return (
                                (n = n.toLowerCase()) === e ||
                                0 === n.indexOf(e + "-")
                              );
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === h;
                    },
                    focus: function (e) {
                      return (
                        e === d.activeElement &&
                        (!d.hasFocus || d.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: function (e) {
                      return !1 === e.disabled;
                    },
                    disabled: function (e) {
                      return !0 === e.disabled;
                    },
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && !!e.checked) ||
                        ("option" === t && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                      return J.test(e.nodeName);
                    },
                    input: function (e) {
                      return G.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && "button" === e.type) || "button" === t
                      );
                    },
                    text: function (e) {
                      var t;
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) ||
                          "text" === t.toLowerCase())
                      );
                    },
                    first: de(function () {
                      return [0];
                    }),
                    last: de(function (e, t) {
                      return [t - 1];
                    }),
                    eq: de(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: de(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: de(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: de(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                      return e;
                    }),
                    gt: de(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                    }),
                  },
                }),
              (r.pseudos.nth = r.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                r.pseudos[t] = pe(t);
              for (t in { submit: !0, reset: !0 }) r.pseudos[t] = fe(t);
              function me() {}
              function ge(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                  r += e[t].value;
                return r;
              }
              function ve(e, t, n) {
                var r = t.dir,
                  o = n && "parentNode" === r,
                  i = T++;
                return t.first
                  ? function (t, n, i) {
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || o) return e(t, n, i);
                    }
                  : function (t, n, s) {
                      var a,
                        l,
                        c = [C, i];
                      if (s) {
                        for (; (t = t[r]); )
                          if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                      } else
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || o) {
                            if (
                              (a = (l = t[b] || (t[b] = {}))[r]) &&
                              a[0] === C &&
                              a[1] === i
                            )
                              return (c[2] = a[2]);
                            if (((l[r] = c), (c[2] = e(t, n, s)))) return !0;
                          }
                    };
              }
              function ye(e) {
                return e.length > 1
                  ? function (t, n, r) {
                      for (var o = e.length; o--; )
                        if (!e[o](t, n, r)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function xe(e, t, n, r, o) {
                for (
                  var i, s = [], a = 0, l = e.length, c = null != t;
                  a < l;
                  a++
                )
                  (i = e[a]) &&
                    ((n && !n(i, r, o)) || (s.push(i), c && t.push(a)));
                return s;
              }
              function be(e, t, n, r, o, i) {
                return (
                  r && !r[b] && (r = be(r)),
                  o && !o[b] && (o = be(o, i)),
                  ae(function (i, s, a, l) {
                    var c,
                      u,
                      p,
                      f = [],
                      d = [],
                      h = s.length,
                      m =
                        i ||
                        (function (e, t, n) {
                          for (var r = 0, o = t.length; r < o; r++)
                            ie(e, t[r], n);
                          return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                      g = !e || (!i && t) ? m : xe(m, f, e, a, l),
                      v = n ? (o || (i ? e : h || r) ? [] : s) : g;
                    if ((n && n(g, v, a, l), r))
                      for (c = xe(v, d), r(c, [], a, l), u = c.length; u--; )
                        (p = c[u]) && (v[d[u]] = !(g[d[u]] = p));
                    if (i) {
                      if (o || e) {
                        if (o) {
                          for (c = [], u = v.length; u--; )
                            (p = v[u]) && c.push((g[u] = p));
                          o(null, (v = []), c, l);
                        }
                        for (u = v.length; u--; )
                          (p = v[u]) &&
                            (c = o ? O(i, p) : f[u]) > -1 &&
                            (i[c] = !(s[c] = p));
                      }
                    } else (v = xe(v === s ? v.splice(h, v.length) : v)), o ? o(null, s, v, l) : L.apply(s, v);
                  })
                );
              }
              function we(e) {
                for (
                  var t,
                    n,
                    o,
                    i = e.length,
                    s = r.relative[e[0].type],
                    a = s || r.relative[" "],
                    l = s ? 1 : 0,
                    u = ve(
                      function (e) {
                        return e === t;
                      },
                      a,
                      !0
                    ),
                    p = ve(
                      function (e) {
                        return O(t, e) > -1;
                      },
                      a,
                      !0
                    ),
                    f = [
                      function (e, n, r) {
                        var o =
                          (!s && (r || n !== c)) ||
                          ((t = n).nodeType ? u(e, n, r) : p(e, n, r));
                        return (t = null), o;
                      },
                    ];
                  l < i;
                  l++
                )
                  if ((n = r.relative[e[l].type])) f = [ve(ye(f), n)];
                  else {
                    if (
                      (n = r.filter[e[l].type].apply(null, e[l].matches))[b]
                    ) {
                      for (o = ++l; o < i && !r.relative[e[o].type]; o++);
                      return be(
                        l > 1 && ye(f),
                        l > 1 &&
                          ge(
                            e.slice(0, l - 1).concat({
                              value: " " === e[l - 2].type ? "*" : "",
                            })
                          ).replace($, "$1"),
                        n,
                        l < o && we(e.slice(l, o)),
                        o < i && we((e = e.slice(o))),
                        o < i && ge(e)
                      );
                    }
                    f.push(n);
                  }
                return ye(f);
              }
              return (
                (me.prototype = r.filters = r.pseudos),
                (r.setFilters = new me()),
                (s = ie.tokenize =
                  function (e, t) {
                    var n,
                      o,
                      i,
                      s,
                      a,
                      l,
                      c,
                      u = N[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = r.preFilter; a; ) {
                      for (s in ((n && !(o = z.exec(a))) ||
                        (o && (a = a.slice(o[0].length) || a),
                        l.push((i = []))),
                      (n = !1),
                      (o = X.exec(a)) &&
                        ((n = o.shift()),
                        i.push({ value: n, type: o[0].replace($, " ") }),
                        (a = a.slice(n.length))),
                      r.filter))
                        !(o = Y[s].exec(a)) ||
                          (c[s] && !(o = c[s](o))) ||
                          ((n = o.shift()),
                          i.push({ value: n, type: s, matches: o }),
                          (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? ie.error(e) : N(e, l).slice(0);
                  }),
                (a = ie.compile =
                  function (e, t) {
                    var n,
                      o = [],
                      i = [],
                      a = E[e + " "];
                    if (!a) {
                      for (t || (t = s(e)), n = t.length; n--; )
                        (a = we(t[n]))[b] ? o.push(a) : i.push(a);
                      (a = E(
                        e,
                        (function (e, t) {
                          var n = t.length > 0,
                            o = e.length > 0,
                            i = function (i, s, a, l, u) {
                              var p,
                                f,
                                h,
                                m = 0,
                                g = "0",
                                v = i && [],
                                y = [],
                                x = c,
                                b = i || (o && r.find.TAG("*", u)),
                                w = (C += null == x ? 1 : Math.random() || 0.1),
                                T = b.length;
                              for (
                                u && (c = s !== d && s);
                                g !== T && null != (p = b[g]);
                                g++
                              ) {
                                if (o && p) {
                                  for (f = 0; (h = e[f++]); )
                                    if (h(p, s, a)) {
                                      l.push(p);
                                      break;
                                    }
                                  u && (C = w);
                                }
                                n && ((p = !h && p) && m--, i && v.push(p));
                              }
                              if (((m += g), n && g !== m)) {
                                for (f = 0; (h = t[f++]); ) h(v, y, s, a);
                                if (i) {
                                  if (m > 0)
                                    for (; g--; )
                                      v[g] || y[g] || (y[g] = A.call(l));
                                  y = xe(y);
                                }
                                L.apply(l, y),
                                  u &&
                                    !i &&
                                    y.length > 0 &&
                                    m + t.length > 1 &&
                                    ie.uniqueSort(l);
                              }
                              return u && ((C = w), (c = x)), v;
                            };
                          return n ? ae(i) : i;
                        })(i, o)
                      )),
                        (a.selector = e);
                    }
                    return a;
                  }),
                (l = ie.select =
                  function (e, t, o, i) {
                    var l,
                      c,
                      u,
                      p,
                      f,
                      d = "function" == typeof e && e,
                      h = !i && s((e = d.selector || e));
                    if (((o = o || []), 1 === h.length)) {
                      if (
                        (c = h[0] = h[0].slice(0)).length > 2 &&
                        "ID" === (u = c[0]).type &&
                        n.getById &&
                        9 === t.nodeType &&
                        m &&
                        r.relative[c[1].type]
                      ) {
                        if (
                          !(t = (r.find.ID(u.matches[0].replace(ne, re), t) ||
                            [])[0])
                        )
                          return o;
                        d && (t = t.parentNode),
                          (e = e.slice(c.shift().value.length));
                      }
                      for (
                        l = Y.needsContext.test(e) ? 0 : c.length;
                        l-- && ((u = c[l]), !r.relative[(p = u.type)]);

                      )
                        if (
                          (f = r.find[p]) &&
                          (i = f(
                            u.matches[0].replace(ne, re),
                            (ee.test(c[0].type) && he(t.parentNode)) || t
                          ))
                        ) {
                          if ((c.splice(l, 1), !(e = i.length && ge(c))))
                            return L.apply(o, i), o;
                          break;
                        }
                    }
                    return (
                      (d || a(e, h))(
                        i,
                        t,
                        !m,
                        o,
                        (ee.test(e) && he(t.parentNode)) || t
                      ),
                      o
                    );
                  }),
                (n.sortStable = b.split("").sort(S).join("") === b),
                (n.detectDuplicates = !!p),
                f(),
                (n.sortDetached = le(function (e) {
                  return 1 & e.compareDocumentPosition(d.createElement("div"));
                })),
                le(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                  );
                }) ||
                  ce("type|href|height|width", function (e, t, n) {
                    if (!n)
                      return e.getAttribute(
                        t,
                        "type" === t.toLowerCase() ? 1 : 2
                      );
                  }),
                (n.attributes &&
                  le(function (e) {
                    return (
                      (e.innerHTML = "<input/>"),
                      e.firstChild.setAttribute("value", ""),
                      "" === e.firstChild.getAttribute("value")
                    );
                  })) ||
                  ce("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                      return e.defaultValue;
                  }),
                le(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  ce(M, function (e, t, n) {
                    var r;
                    if (!n)
                      return !0 === e[t]
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                        ? r.value
                        : null;
                  }),
                ie
              );
            })(r);
            (g.find = C),
              (g.expr = C.selectors),
              (g.expr[":"] = g.expr.pseudos),
              (g.unique = C.uniqueSort),
              (g.text = C.getText),
              (g.isXMLDoc = C.isXML),
              (g.contains = C.contains);
            var T = g.expr.match.needsContext,
              k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
              N = /^.[^:#\[\.,]*$/;
            function E(e, t, n) {
              if (g.isFunction(t))
                return g.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                });
              if (t.nodeType)
                return g.grep(e, function (e) {
                  return (e === t) !== n;
                });
              if ("string" == typeof t) {
                if (N.test(t)) return g.filter(t, e, n);
                t = g.filter(t, e);
              }
              return g.grep(e, function (e) {
                return c.call(t, e) >= 0 !== n;
              });
            }
            (g.filter = function (e, t, n) {
              var r = t[0];
              return (
                n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                  ? g.find.matchesSelector(r, e)
                    ? [r]
                    : []
                  : g.find.matches(
                      e,
                      g.grep(t, function (e) {
                        return 1 === e.nodeType;
                      })
                    )
              );
            }),
              g.fn.extend({
                find: function (e) {
                  var t,
                    n = this.length,
                    r = [],
                    o = this;
                  if ("string" != typeof e)
                    return this.pushStack(
                      g(e).filter(function () {
                        for (t = 0; t < n; t++)
                          if (g.contains(o[t], this)) return !0;
                      })
                    );
                  for (t = 0; t < n; t++) g.find(e, o[t], r);
                  return (
                    ((r = this.pushStack(n > 1 ? g.unique(r) : r)).selector =
                      this.selector ? this.selector + " " + e : e),
                    r
                  );
                },
                filter: function (e) {
                  return this.pushStack(E(this, e || [], !1));
                },
                not: function (e) {
                  return this.pushStack(E(this, e || [], !0));
                },
                is: function (e) {
                  return !!E(
                    this,
                    "string" == typeof e && T.test(e) ? g(e) : e || [],
                    !1
                  ).length;
                },
              });
            var S,
              j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            ((g.fn.init = function (e, t) {
              var n, r;
              if (!e) return this;
              if ("string" == typeof e) {
                if (
                  !(n =
                    "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                      ? [null, e, null]
                      : j.exec(e)) ||
                  (!n[1] && t)
                )
                  return !t || t.jquery
                    ? (t || S).find(e)
                    : this.constructor(t).find(e);
                if (n[1]) {
                  if (
                    ((t = t instanceof g ? t[0] : t),
                    g.merge(
                      this,
                      g.parseHTML(
                        n[1],
                        t && t.nodeType ? t.ownerDocument || t : h,
                        !0
                      )
                    ),
                    k.test(n[1]) && g.isPlainObject(t))
                  )
                    for (n in t)
                      g.isFunction(this[n])
                        ? this[n](t[n])
                        : this.attr(n, t[n]);
                  return this;
                }
                return (
                  (r = h.getElementById(n[2])) &&
                    r.parentNode &&
                    ((this.length = 1), (this[0] = r)),
                  (this.context = h),
                  (this.selector = e),
                  this
                );
              }
              return e.nodeType
                ? ((this.context = this[0] = e), (this.length = 1), this)
                : g.isFunction(e)
                ? void 0 !== S.ready
                  ? S.ready(e)
                  : e(g)
                : (void 0 !== e.selector &&
                    ((this.selector = e.selector), (this.context = e.context)),
                  g.makeArray(e, this));
            }).prototype = g.fn),
              (S = g(h));
            var D = /^(?:parents|prev(?:Until|All))/,
              _ = { children: !0, contents: !0, next: !0, prev: !0 };
            function A(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
            }
            g.extend({
              dir: function (e, t, n) {
                for (
                  var r = [], o = void 0 !== n;
                  (e = e[t]) && 9 !== e.nodeType;

                )
                  if (1 === e.nodeType) {
                    if (o && g(e).is(n)) break;
                    r.push(e);
                  }
                return r;
              },
              sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)
                  1 === e.nodeType && e !== t && n.push(e);
                return n;
              },
            }),
              g.fn.extend({
                has: function (e) {
                  var t = g(e, this),
                    n = t.length;
                  return this.filter(function () {
                    for (var e = 0; e < n; e++)
                      if (g.contains(this, t[e])) return !0;
                  });
                },
                closest: function (e, t) {
                  for (
                    var n,
                      r = 0,
                      o = this.length,
                      i = [],
                      s =
                        T.test(e) || "string" != typeof e
                          ? g(e, t || this.context)
                          : 0;
                    r < o;
                    r++
                  )
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (
                        n.nodeType < 11 &&
                        (s
                          ? s.index(n) > -1
                          : 1 === n.nodeType && g.find.matchesSelector(n, e))
                      ) {
                        i.push(n);
                        break;
                      }
                  return this.pushStack(i.length > 1 ? g.unique(i) : i);
                },
                index: function (e) {
                  return e
                    ? "string" == typeof e
                      ? c.call(g(e), this[0])
                      : c.call(this, e.jquery ? e[0] : e)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
                },
                add: function (e, t) {
                  return this.pushStack(g.unique(g.merge(this.get(), g(e, t))));
                },
                addBack: function (e) {
                  return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                  );
                },
              }),
              g.each(
                {
                  parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                    return g.dir(e, "parentNode");
                  },
                  parentsUntil: function (e, t, n) {
                    return g.dir(e, "parentNode", n);
                  },
                  next: function (e) {
                    return A(e, "nextSibling");
                  },
                  prev: function (e) {
                    return A(e, "previousSibling");
                  },
                  nextAll: function (e) {
                    return g.dir(e, "nextSibling");
                  },
                  prevAll: function (e) {
                    return g.dir(e, "previousSibling");
                  },
                  nextUntil: function (e, t, n) {
                    return g.dir(e, "nextSibling", n);
                  },
                  prevUntil: function (e, t, n) {
                    return g.dir(e, "previousSibling", n);
                  },
                  siblings: function (e) {
                    return g.sibling((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                    return g.sibling(e.firstChild);
                  },
                  contents: function (e) {
                    return e.contentDocument || g.merge([], e.childNodes);
                  },
                },
                function (e, t) {
                  g.fn[e] = function (n, r) {
                    var o = g.map(this, t, n);
                    return (
                      "Until" !== e.slice(-5) && (r = n),
                      r && "string" == typeof r && (o = g.filter(r, o)),
                      this.length > 1 &&
                        (_[e] || g.unique(o), D.test(e) && o.reverse()),
                      this.pushStack(o)
                    );
                  };
                }
              );
            var H,
              L = /\S+/g,
              q = {};
            function O() {
              h.removeEventListener("DOMContentLoaded", O, !1),
                r.removeEventListener("load", O, !1),
                g.ready();
            }
            (g.Callbacks = function (e) {
              e =
                "string" == typeof e
                  ? q[e] ||
                    (function (e) {
                      var t = (q[e] = {});
                      return (
                        g.each(e.match(L) || [], function (e, n) {
                          t[n] = !0;
                        }),
                        t
                      );
                    })(e)
                  : g.extend({}, e);
              var t,
                n,
                r,
                o,
                i,
                s,
                a = [],
                l = !e.once && [],
                c = function (p) {
                  for (
                    t = e.memory && p,
                      n = !0,
                      s = o || 0,
                      o = 0,
                      i = a.length,
                      r = !0;
                    a && s < i;
                    s++
                  )
                    if (!1 === a[s].apply(p[0], p[1]) && e.stopOnFalse) {
                      t = !1;
                      break;
                    }
                  (r = !1),
                    a &&
                      (l
                        ? l.length && c(l.shift())
                        : t
                        ? (a = [])
                        : u.disable());
                },
                u = {
                  add: function () {
                    if (a) {
                      var n = a.length;
                      !(function t(n) {
                        g.each(n, function (n, r) {
                          var o = g.type(r);
                          "function" === o
                            ? (e.unique && u.has(r)) || a.push(r)
                            : r && r.length && "string" !== o && t(r);
                        });
                      })(arguments),
                        r ? (i = a.length) : t && ((o = n), c(t));
                    }
                    return this;
                  },
                  remove: function () {
                    return (
                      a &&
                        g.each(arguments, function (e, t) {
                          for (var n; (n = g.inArray(t, a, n)) > -1; )
                            a.splice(n, 1), r && (n <= i && i--, n <= s && s--);
                        }),
                      this
                    );
                  },
                  has: function (e) {
                    return e ? g.inArray(e, a) > -1 : !(!a || !a.length);
                  },
                  empty: function () {
                    return (a = []), (i = 0), this;
                  },
                  disable: function () {
                    return (a = l = t = void 0), this;
                  },
                  disabled: function () {
                    return !a;
                  },
                  lock: function () {
                    return (l = void 0), t || u.disable(), this;
                  },
                  locked: function () {
                    return !l;
                  },
                  fireWith: function (e, t) {
                    return (
                      !a ||
                        (n && !l) ||
                        ((t = [e, (t = t || []).slice ? t.slice() : t]),
                        r ? l.push(t) : c(t)),
                      this
                    );
                  },
                  fire: function () {
                    return u.fireWith(this, arguments), this;
                  },
                  fired: function () {
                    return !!n;
                  },
                };
              return u;
            }),
              g.extend({
                Deferred: function (e) {
                  var t = [
                      [
                        "resolve",
                        "done",
                        g.Callbacks("once memory"),
                        "resolved",
                      ],
                      [
                        "reject",
                        "fail",
                        g.Callbacks("once memory"),
                        "rejected",
                      ],
                      ["notify", "progress", g.Callbacks("memory")],
                    ],
                    n = "pending",
                    r = {
                      state: function () {
                        return n;
                      },
                      always: function () {
                        return o.done(arguments).fail(arguments), this;
                      },
                      then: function () {
                        var e = arguments;
                        return g
                          .Deferred(function (n) {
                            g.each(t, function (t, i) {
                              var s = g.isFunction(e[t]) && e[t];
                              o[i[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && g.isFunction(e.promise)
                                  ? e
                                      .promise()
                                      .done(n.resolve)
                                      .fail(n.reject)
                                      .progress(n.notify)
                                  : n[i[0] + "With"](
                                      this === r ? n.promise() : this,
                                      s ? [e] : arguments
                                    );
                              });
                            }),
                              (e = null);
                          })
                          .promise();
                      },
                      promise: function (e) {
                        return null != e ? g.extend(e, r) : r;
                      },
                    },
                    o = {};
                  return (
                    (r.pipe = r.then),
                    g.each(t, function (e, i) {
                      var s = i[2],
                        a = i[3];
                      (r[i[1]] = s.add),
                        a &&
                          s.add(
                            function () {
                              n = a;
                            },
                            t[1 ^ e][2].disable,
                            t[2][2].lock
                          ),
                        (o[i[0]] = function () {
                          return (
                            o[i[0] + "With"](this === o ? r : this, arguments),
                            this
                          );
                        }),
                        (o[i[0] + "With"] = s.fireWith);
                    }),
                    r.promise(o),
                    e && e.call(o, o),
                    o
                  );
                },
                when: function (e) {
                  var t,
                    n,
                    r,
                    o = 0,
                    i = s.call(arguments),
                    a = i.length,
                    l = 1 !== a || (e && g.isFunction(e.promise)) ? a : 0,
                    c = 1 === l ? e : g.Deferred(),
                    u = function (e, n, r) {
                      return function (o) {
                        (n[e] = this),
                          (r[e] = arguments.length > 1 ? s.call(arguments) : o),
                          r === t
                            ? c.notifyWith(n, r)
                            : --l || c.resolveWith(n, r);
                      };
                    };
                  if (a > 1)
                    for (
                      t = new Array(a), n = new Array(a), r = new Array(a);
                      o < a;
                      o++
                    )
                      i[o] && g.isFunction(i[o].promise)
                        ? i[o]
                            .promise()
                            .done(u(o, r, i))
                            .fail(c.reject)
                            .progress(u(o, n, t))
                        : --l;
                  return l || c.resolveWith(r, i), c.promise();
                },
              }),
              (g.fn.ready = function (e) {
                return g.ready.promise().done(e), this;
              }),
              g.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                  e ? g.readyWait++ : g.ready(!0);
                },
                ready: function (e) {
                  (!0 === e ? --g.readyWait : g.isReady) ||
                    ((g.isReady = !0),
                    (!0 !== e && --g.readyWait > 0) ||
                      (H.resolveWith(h, [g]),
                      g.fn.triggerHandler &&
                        (g(h).triggerHandler("ready"), g(h).off("ready"))));
                },
              }),
              (g.ready.promise = function (e) {
                return (
                  H ||
                    ((H = g.Deferred()),
                    "complete" === h.readyState
                      ? setTimeout(g.ready)
                      : (h.addEventListener("DOMContentLoaded", O, !1),
                        r.addEventListener("load", O, !1))),
                  H.promise(e)
                );
              }),
              g.ready.promise();
            var M = (g.access = function (e, t, n, r, o, i, s) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === g.type(n))
                for (a in ((o = !0), n)) g.access(e, t, a, n[a], !0, i, s);
              else if (
                void 0 !== r &&
                ((o = !0),
                g.isFunction(r) || (s = !0),
                c &&
                  (s
                    ? (t.call(e, r), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(g(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
              return o ? e : c ? t.call(e) : l ? t(e[0], n) : i;
            });
            function F() {
              Object.defineProperty((this.cache = {}), 0, {
                get: function () {
                  return {};
                },
              }),
                (this.expando = g.expando + F.uid++);
            }
            (g.acceptData = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            }),
              (F.uid = 1),
              (F.accepts = g.acceptData),
              (F.prototype = {
                key: function (e) {
                  if (!F.accepts(e)) return 0;
                  var t = {},
                    n = e[this.expando];
                  if (!n) {
                    n = F.uid++;
                    try {
                      (t[this.expando] = { value: n }),
                        Object.defineProperties(e, t);
                    } catch (r) {
                      (t[this.expando] = n), g.extend(e, t);
                    }
                  }
                  return this.cache[n] || (this.cache[n] = {}), n;
                },
                set: function (e, t, n) {
                  var r,
                    o = this.key(e),
                    i = this.cache[o];
                  if ("string" == typeof t) i[t] = n;
                  else if (g.isEmptyObject(i)) g.extend(this.cache[o], t);
                  else for (r in t) i[r] = t[r];
                  return i;
                },
                get: function (e, t) {
                  var n = this.cache[this.key(e)];
                  return void 0 === t ? n : n[t];
                },
                access: function (e, t, n) {
                  var r;
                  return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? void 0 !== (r = this.get(e, t))
                      ? r
                      : this.get(e, g.camelCase(t))
                    : (this.set(e, t, n), void 0 !== n ? n : t);
                },
                remove: function (e, t) {
                  var n,
                    r,
                    o,
                    i = this.key(e),
                    s = this.cache[i];
                  if (void 0 === t) this.cache[i] = {};
                  else {
                    g.isArray(t)
                      ? (r = t.concat(t.map(g.camelCase)))
                      : ((o = g.camelCase(t)),
                        (r =
                          t in s
                            ? [t, o]
                            : (r = o) in s
                            ? [r]
                            : r.match(L) || [])),
                      (n = r.length);
                    for (; n--; ) delete s[r[n]];
                  }
                },
                hasData: function (e) {
                  return !g.isEmptyObject(this.cache[e[this.expando]] || {});
                },
                discard: function (e) {
                  e[this.expando] && delete this.cache[e[this.expando]];
                },
              });
            var P = new F(),
              R = new F(),
              I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              W = /([A-Z])/g;
            function B(e, t, n) {
              var r;
              if (void 0 === n && 1 === e.nodeType)
                if (
                  ((r = "data-" + t.replace(W, "-$1").toLowerCase()),
                  "string" == typeof (n = e.getAttribute(r)))
                ) {
                  try {
                    n =
                      "true" === n ||
                      ("false" !== n &&
                        ("null" === n
                          ? null
                          : +n + "" === n
                          ? +n
                          : I.test(n)
                          ? g.parseJSON(n)
                          : n));
                  } catch (e) {}
                  R.set(e, t, n);
                } else n = void 0;
              return n;
            }
            g.extend({
              hasData: function (e) {
                return R.hasData(e) || P.hasData(e);
              },
              data: function (e, t, n) {
                return R.access(e, t, n);
              },
              removeData: function (e, t) {
                R.remove(e, t);
              },
              _data: function (e, t, n) {
                return P.access(e, t, n);
              },
              _removeData: function (e, t) {
                P.remove(e, t);
              },
            }),
              g.fn.extend({
                data: function (e, t) {
                  var n,
                    r,
                    o,
                    i = this[0],
                    s = i && i.attributes;
                  if (void 0 === e) {
                    if (
                      this.length &&
                      ((o = R.get(i)),
                      1 === i.nodeType && !P.get(i, "hasDataAttrs"))
                    ) {
                      for (n = s.length; n--; )
                        s[n] &&
                          0 === (r = s[n].name).indexOf("data-") &&
                          ((r = g.camelCase(r.slice(5))), B(i, r, o[r]));
                      P.set(i, "hasDataAttrs", !0);
                    }
                    return o;
                  }
                  return "object" == typeof e
                    ? this.each(function () {
                        R.set(this, e);
                      })
                    : M(
                        this,
                        function (t) {
                          var n,
                            r = g.camelCase(e);
                          if (i && void 0 === t)
                            return void 0 !== (n = R.get(i, e)) ||
                              void 0 !== (n = R.get(i, r)) ||
                              void 0 !== (n = B(i, r, void 0))
                              ? n
                              : void 0;
                          this.each(function () {
                            var n = R.get(this, r);
                            R.set(this, r, t),
                              -1 !== e.indexOf("-") &&
                                void 0 !== n &&
                                R.set(this, e, t);
                          });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                      );
                },
                removeData: function (e) {
                  return this.each(function () {
                    R.remove(this, e);
                  });
                },
              }),
              g.extend({
                queue: function (e, t, n) {
                  var r;
                  if (e)
                    return (
                      (t = (t || "fx") + "queue"),
                      (r = P.get(e, t)),
                      n &&
                        (!r || g.isArray(n)
                          ? (r = P.access(e, t, g.makeArray(n)))
                          : r.push(n)),
                      r || []
                    );
                },
                dequeue: function (e, t) {
                  t = t || "fx";
                  var n = g.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = g._queueHooks(e, t);
                  "inprogress" === o && ((o = n.shift()), r--),
                    o &&
                      ("fx" === t && n.unshift("inprogress"),
                      delete i.stop,
                      o.call(
                        e,
                        function () {
                          g.dequeue(e, t);
                        },
                        i
                      )),
                    !r && i && i.empty.fire();
                },
                _queueHooks: function (e, t) {
                  var n = t + "queueHooks";
                  return (
                    P.get(e, n) ||
                    P.access(e, n, {
                      empty: g.Callbacks("once memory").add(function () {
                        P.remove(e, [t + "queue", n]);
                      }),
                    })
                  );
                },
              }),
              g.fn.extend({
                queue: function (e, t) {
                  var n = 2;
                  return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                      ? g.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                          var n = g.queue(this, e, t);
                          g._queueHooks(this, e),
                            "fx" === e &&
                              "inprogress" !== n[0] &&
                              g.dequeue(this, e);
                        })
                  );
                },
                dequeue: function (e) {
                  return this.each(function () {
                    g.dequeue(this, e);
                  });
                },
                clearQueue: function (e) {
                  return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                  var n,
                    r = 1,
                    o = g.Deferred(),
                    i = this,
                    s = this.length,
                    a = function () {
                      --r || o.resolveWith(i, [i]);
                    };
                  for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                      e = e || "fx";
                    s--;

                  )
                    (n = P.get(i[s], e + "queueHooks")) &&
                      n.empty &&
                      (r++, n.empty.add(a));
                  return a(), o.promise(t);
                },
              });
            var $,
              z,
              X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              U = ["Top", "Right", "Bottom", "Left"],
              V = function (e, t) {
                return (
                  (e = t || e),
                  "none" === g.css(e, "display") ||
                    !g.contains(e.ownerDocument, e)
                );
              },
              Q = /^(?:checkbox|radio)$/i;
            ($ = h
              .createDocumentFragment()
              .appendChild(h.createElement("div"))),
              (z = h.createElement("input")).setAttribute("type", "radio"),
              z.setAttribute("checked", "checked"),
              z.setAttribute("name", "t"),
              $.appendChild(z),
              (d.checkClone = $.cloneNode(!0).cloneNode(!0).lastChild.checked),
              ($.innerHTML = "<textarea>x</textarea>"),
              (d.noCloneChecked = !!$.cloneNode(!0).lastChild.defaultValue);
            var Y = "undefined";
            d.focusinBubbles = "onfocusin" in r;
            var G = /^key/,
              J = /^(?:mouse|pointer|contextmenu)|click/,
              K = /^(?:focusinfocus|focusoutblur)$/,
              Z = /^([^.]*)(?:\.(.+)|)$/;
            function ee() {
              return !0;
            }
            function te() {
              return !1;
            }
            function ne() {
              try {
                return h.activeElement;
              } catch (e) {}
            }
            (g.event = {
              global: {},
              add: function (e, t, n, r, o) {
                var i,
                  s,
                  a,
                  l,
                  c,
                  u,
                  p,
                  f,
                  d,
                  h,
                  m,
                  v = P.get(e);
                if (v)
                  for (
                    n.handler && ((n = (i = n).handler), (o = i.selector)),
                      n.guid || (n.guid = g.guid++),
                      (l = v.events) || (l = v.events = {}),
                      (s = v.handle) ||
                        (s = v.handle =
                          function (t) {
                            return typeof g !== Y &&
                              g.event.triggered !== t.type
                              ? g.event.dispatch.apply(e, arguments)
                              : void 0;
                          }),
                      c = (t = (t || "").match(L) || [""]).length;
                    c--;

                  )
                    (d = m = (a = Z.exec(t[c]) || [])[1]),
                      (h = (a[2] || "").split(".").sort()),
                      d &&
                        ((p = g.event.special[d] || {}),
                        (d = (o ? p.delegateType : p.bindType) || d),
                        (p = g.event.special[d] || {}),
                        (u = g.extend(
                          {
                            type: d,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext:
                              o && g.expr.match.needsContext.test(o),
                            namespace: h.join("."),
                          },
                          i
                        )),
                        (f = l[d]) ||
                          (((f = l[d] = []).delegateCount = 0),
                          (p.setup && !1 !== p.setup.call(e, r, h, s)) ||
                            (e.addEventListener &&
                              e.addEventListener(d, s, !1))),
                        p.add &&
                          (p.add.call(e, u),
                          u.handler.guid || (u.handler.guid = n.guid)),
                        o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                        (g.event.global[d] = !0));
              },
              remove: function (e, t, n, r, o) {
                var i,
                  s,
                  a,
                  l,
                  c,
                  u,
                  p,
                  f,
                  d,
                  h,
                  m,
                  v = P.hasData(e) && P.get(e);
                if (v && (l = v.events)) {
                  for (c = (t = (t || "").match(L) || [""]).length; c--; )
                    if (
                      ((d = m = (a = Z.exec(t[c]) || [])[1]),
                      (h = (a[2] || "").split(".").sort()),
                      d)
                    ) {
                      for (
                        p = g.event.special[d] || {},
                          f =
                            l[(d = (r ? p.delegateType : p.bindType) || d)] ||
                            [],
                          a =
                            a[2] &&
                            new RegExp(
                              "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                            ),
                          s = i = f.length;
                        i--;

                      )
                        (u = f[i]),
                          (!o && m !== u.origType) ||
                            (n && n.guid !== u.guid) ||
                            (a && !a.test(u.namespace)) ||
                            (r &&
                              r !== u.selector &&
                              ("**" !== r || !u.selector)) ||
                            (f.splice(i, 1),
                            u.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, u));
                      s &&
                        !f.length &&
                        ((p.teardown &&
                          !1 !== p.teardown.call(e, h, v.handle)) ||
                          g.removeEvent(e, d, v.handle),
                        delete l[d]);
                    } else for (d in l) g.event.remove(e, d + t[c], n, r, !0);
                  g.isEmptyObject(l) &&
                    (delete v.handle, P.remove(e, "events"));
                }
              },
              trigger: function (e, t, n, o) {
                var i,
                  s,
                  a,
                  l,
                  c,
                  u,
                  p,
                  d = [n || h],
                  m = f.call(e, "type") ? e.type : e,
                  v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                  ((s = a = n = n || h),
                  3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !K.test(m + g.event.triggered) &&
                    (m.indexOf(".") >= 0 &&
                      ((v = m.split(".")), (m = v.shift()), v.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    ((e = e[g.expando]
                      ? e
                      : new g.Event(m, "object" == typeof e && e)).isTrigger = o
                      ? 2
                      : 3),
                    (e.namespace = v.join(".")),
                    (e.namespace_re = e.namespace
                      ? new RegExp(
                          "(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        )
                      : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : g.makeArray(t, [e])),
                    (p = g.event.special[m] || {}),
                    o || !p.trigger || !1 !== p.trigger.apply(n, t)))
                ) {
                  if (!o && !p.noBubble && !g.isWindow(n)) {
                    for (
                      l = p.delegateType || m,
                        K.test(l + m) || (s = s.parentNode);
                      s;
                      s = s.parentNode
                    )
                      d.push(s), (a = s);
                    a === (n.ownerDocument || h) &&
                      d.push(a.defaultView || a.parentWindow || r);
                  }
                  for (i = 0; (s = d[i++]) && !e.isPropagationStopped(); )
                    (e.type = i > 1 ? l : p.bindType || m),
                      (u =
                        (P.get(s, "events") || {})[e.type] &&
                        P.get(s, "handle")) && u.apply(s, t),
                      (u = c && s[c]) &&
                        u.apply &&
                        g.acceptData(s) &&
                        ((e.result = u.apply(s, t)),
                        !1 === e.result && e.preventDefault());
                  return (
                    (e.type = m),
                    o ||
                      e.isDefaultPrevented() ||
                      (p._default && !1 !== p._default.apply(d.pop(), t)) ||
                      !g.acceptData(n) ||
                      (c &&
                        g.isFunction(n[m]) &&
                        !g.isWindow(n) &&
                        ((a = n[c]) && (n[c] = null),
                        (g.event.triggered = m),
                        n[m](),
                        (g.event.triggered = void 0),
                        a && (n[c] = a))),
                    e.result
                  );
                }
              },
              dispatch: function (e) {
                e = g.event.fix(e);
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = [],
                  l = s.call(arguments),
                  c = (P.get(this, "events") || {})[e.type] || [],
                  u = g.event.special[e.type] || {};
                if (
                  ((l[0] = e),
                  (e.delegateTarget = this),
                  !u.preDispatch || !1 !== u.preDispatch.call(this, e))
                ) {
                  for (
                    a = g.event.handlers.call(this, e, c), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();

                  )
                    for (
                      e.currentTarget = o.elem, n = 0;
                      (i = o.handlers[n++]) &&
                      !e.isImmediatePropagationStopped();

                    )
                      (e.namespace_re && !e.namespace_re.test(i.namespace)) ||
                        ((e.handleObj = i),
                        (e.data = i.data),
                        void 0 !==
                          (r = (
                            (g.event.special[i.origType] || {}).handle ||
                            i.handler
                          ).apply(o.elem, l)) &&
                          !1 === (e.result = r) &&
                          (e.preventDefault(), e.stopPropagation()));
                  return (
                    u.postDispatch && u.postDispatch.call(this, e), e.result
                  );
                }
              },
              handlers: function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  s = [],
                  a = t.delegateCount,
                  l = e.target;
                if (a && l.nodeType && (!e.button || "click" !== e.type))
                  for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                      for (r = [], n = 0; n < a; n++)
                        void 0 === r[(o = (i = t[n]).selector + " ")] &&
                          (r[o] = i.needsContext
                            ? g(o, this).index(l) >= 0
                            : g.find(o, this, null, [l]).length),
                          r[o] && r.push(i);
                      r.length && s.push({ elem: l, handlers: r });
                    }
                return (
                  a < t.length && s.push({ elem: this, handlers: t.slice(a) }),
                  s
                );
              },
              props:
                "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                  " "
                ),
              fixHooks: {},
              keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                  return (
                    null == e.which &&
                      (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                  );
                },
              },
              mouseHooks: {
                props:
                  "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                    " "
                  ),
                filter: function (e, t) {
                  var n,
                    r,
                    o,
                    i = t.button;
                  return (
                    null == e.pageX &&
                      null != t.clientX &&
                      ((r = (n = e.target.ownerDocument || h).documentElement),
                      (o = n.body),
                      (e.pageX =
                        t.clientX +
                        ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) -
                        ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
                      (e.pageY =
                        t.clientY +
                        ((r && r.scrollTop) || (o && o.scrollTop) || 0) -
                        ((r && r.clientTop) || (o && o.clientTop) || 0))),
                    e.which ||
                      void 0 === i ||
                      (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                    e
                  );
                },
              },
              fix: function (e) {
                if (e[g.expando]) return e;
                var t,
                  n,
                  r,
                  o = e.type,
                  i = e,
                  s = this.fixHooks[o];
                for (
                  s ||
                    (this.fixHooks[o] = s =
                      J.test(o)
                        ? this.mouseHooks
                        : G.test(o)
                        ? this.keyHooks
                        : {}),
                    r = s.props ? this.props.concat(s.props) : this.props,
                    e = new g.Event(i),
                    t = r.length;
                  t--;

                )
                  e[(n = r[t])] = i[n];
                return (
                  e.target || (e.target = h),
                  3 === e.target.nodeType && (e.target = e.target.parentNode),
                  s.filter ? s.filter(e, i) : e
                );
              },
              special: {
                load: { noBubble: !0 },
                focus: {
                  trigger: function () {
                    if (this !== ne() && this.focus) return this.focus(), !1;
                  },
                  delegateType: "focusin",
                },
                blur: {
                  trigger: function () {
                    if (this === ne() && this.blur) return this.blur(), !1;
                  },
                  delegateType: "focusout",
                },
                click: {
                  trigger: function () {
                    if (
                      "checkbox" === this.type &&
                      this.click &&
                      g.nodeName(this, "input")
                    )
                      return this.click(), !1;
                  },
                  _default: function (e) {
                    return g.nodeName(e.target, "a");
                  },
                },
                beforeunload: {
                  postDispatch: function (e) {
                    void 0 !== e.result &&
                      e.originalEvent &&
                      (e.originalEvent.returnValue = e.result);
                  },
                },
              },
              simulate: function (e, t, n, r) {
                var o = g.extend(new g.Event(), n, {
                  type: e,
                  isSimulated: !0,
                  originalEvent: {},
                });
                r ? g.event.trigger(o, null, t) : g.event.dispatch.call(t, o),
                  o.isDefaultPrevented() && n.preventDefault();
              },
            }),
              (g.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
              }),
              (g.Event = function (e, t) {
                if (!(this instanceof g.Event)) return new g.Event(e, t);
                e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                        ? ee
                        : te))
                  : (this.type = e),
                  t && g.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || g.now()),
                  (this[g.expando] = !0);
              }),
              (g.Event.prototype = {
                isDefaultPrevented: te,
                isPropagationStopped: te,
                isImmediatePropagationStopped: te,
                preventDefault: function () {
                  var e = this.originalEvent;
                  (this.isDefaultPrevented = ee),
                    e && e.preventDefault && e.preventDefault();
                },
                stopPropagation: function () {
                  var e = this.originalEvent;
                  (this.isPropagationStopped = ee),
                    e && e.stopPropagation && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                  var e = this.originalEvent;
                  (this.isImmediatePropagationStopped = ee),
                    e &&
                      e.stopImmediatePropagation &&
                      e.stopImmediatePropagation(),
                    this.stopPropagation();
                },
              }),
              g.each(
                {
                  mouseenter: "mouseover",
                  mouseleave: "mouseout",
                  pointerenter: "pointerover",
                  pointerleave: "pointerout",
                },
                function (e, t) {
                  g.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                      var n,
                        r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                      return (
                        (o && (o === r || g.contains(r, o))) ||
                          ((e.type = i.origType),
                          (n = i.handler.apply(this, arguments)),
                          (e.type = t)),
                        n
                      );
                    },
                  };
                }
              ),
              d.focusinBubbles ||
                g.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  var n = function (e) {
                    g.event.simulate(t, e.target, g.event.fix(e), !0);
                  };
                  g.event.special[t] = {
                    setup: function () {
                      var r = this.ownerDocument || this,
                        o = P.access(r, t);
                      o || r.addEventListener(e, n, !0),
                        P.access(r, t, (o || 0) + 1);
                    },
                    teardown: function () {
                      var r = this.ownerDocument || this,
                        o = P.access(r, t) - 1;
                      o
                        ? P.access(r, t, o)
                        : (r.removeEventListener(e, n, !0), P.remove(r, t));
                    },
                  };
                }),
              g.fn.extend({
                on: function (e, t, n, r, o) {
                  var i, s;
                  if ("object" == typeof e) {
                    for (s in ("string" != typeof t &&
                      ((n = n || t), (t = void 0)),
                    e))
                      this.on(s, t, n, e[s], o);
                    return this;
                  }
                  if (
                    (null == n && null == r
                      ? ((r = t), (n = t = void 0))
                      : null == r &&
                        ("string" == typeof t
                          ? ((r = n), (n = void 0))
                          : ((r = n), (n = t), (t = void 0))),
                    !1 === r)
                  )
                    r = te;
                  else if (!r) return this;
                  return (
                    1 === o &&
                      ((i = r),
                      (r = function (e) {
                        return g().off(e), i.apply(this, arguments);
                      }),
                      (r.guid = i.guid || (i.guid = g.guid++))),
                    this.each(function () {
                      g.event.add(this, e, r, n, t);
                    })
                  );
                },
                one: function (e, t, n, r) {
                  return this.on(e, t, n, r, 1);
                },
                off: function (e, t, n) {
                  var r, o;
                  if (e && e.preventDefault && e.handleObj)
                    return (
                      (r = e.handleObj),
                      g(e.delegateTarget).off(
                        r.namespace
                          ? r.origType + "." + r.namespace
                          : r.origType,
                        r.selector,
                        r.handler
                      ),
                      this
                    );
                  if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this;
                  }
                  return (
                    (!1 !== t && "function" != typeof t) ||
                      ((n = t), (t = void 0)),
                    !1 === n && (n = te),
                    this.each(function () {
                      g.event.remove(this, e, n, t);
                    })
                  );
                },
                trigger: function (e, t) {
                  return this.each(function () {
                    g.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var n = this[0];
                  if (n) return g.event.trigger(e, t, n, !0);
                },
              });
            var re =
                /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
              oe = /<([\w:]+)/,
              ie = /<|&#?\w+;/,
              se = /<(?:script|style|link)/i,
              ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
              le = /^$|\/(?:java|ecma)script/i,
              ce = /^true\/(.*)/,
              ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
              pe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
              };
            function fe(e, t) {
              return g.nodeName(e, "table") &&
                g.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
                ? e.getElementsByTagName("tbody")[0] ||
                    e.appendChild(e.ownerDocument.createElement("tbody"))
                : e;
            }
            function de(e) {
              return (
                (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
              );
            }
            function he(e) {
              var t = ce.exec(e.type);
              return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
            }
            function me(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                P.set(e[n], "globalEval", !t || P.get(t[n], "globalEval"));
            }
            function ge(e, t) {
              var n, r, o, i, s, a, l, c;
              if (1 === t.nodeType) {
                if (
                  P.hasData(e) &&
                  ((i = P.access(e)), (s = P.set(t, i)), (c = i.events))
                )
                  for (o in (delete s.handle, (s.events = {}), c))
                    for (n = 0, r = c[o].length; n < r; n++)
                      g.event.add(t, o, c[o][n]);
                R.hasData(e) &&
                  ((a = R.access(e)), (l = g.extend({}, a)), R.set(t, l));
              }
            }
            function ve(e, t) {
              var n = e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
              return void 0 === t || (t && g.nodeName(e, t))
                ? g.merge([e], n)
                : n;
            }
            (pe.optgroup = pe.option),
              (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead),
              (pe.th = pe.td),
              g.extend({
                clone: function (e, t, n) {
                  var r,
                    o,
                    i,
                    s,
                    a,
                    l,
                    c,
                    u = e.cloneNode(!0),
                    p = g.contains(e.ownerDocument, e);
                  if (
                    !(
                      d.noCloneChecked ||
                      (1 !== e.nodeType && 11 !== e.nodeType) ||
                      g.isXMLDoc(e)
                    )
                  )
                    for (s = ve(u), r = 0, o = (i = ve(e)).length; r < o; r++)
                      (a = i[r]),
                        void 0,
                        "input" === (c = (l = s[r]).nodeName.toLowerCase()) &&
                        Q.test(a.type)
                          ? (l.checked = a.checked)
                          : ("input" !== c && "textarea" !== c) ||
                            (l.defaultValue = a.defaultValue);
                  if (t)
                    if (n)
                      for (
                        i = i || ve(e), s = s || ve(u), r = 0, o = i.length;
                        r < o;
                        r++
                      )
                        ge(i[r], s[r]);
                    else ge(e, u);
                  return (
                    (s = ve(u, "script")).length > 0 &&
                      me(s, !p && ve(e, "script")),
                    u
                  );
                },
                buildFragment: function (e, t, n, r) {
                  for (
                    var o,
                      i,
                      s,
                      a,
                      l,
                      c,
                      u = t.createDocumentFragment(),
                      p = [],
                      f = 0,
                      d = e.length;
                    f < d;
                    f++
                  )
                    if ((o = e[f]) || 0 === o)
                      if ("object" === g.type(o))
                        g.merge(p, o.nodeType ? [o] : o);
                      else if (ie.test(o)) {
                        for (
                          i = i || u.appendChild(t.createElement("div")),
                            s = (oe.exec(o) || ["", ""])[1].toLowerCase(),
                            a = pe[s] || pe._default,
                            i.innerHTML =
                              a[1] + o.replace(re, "<$1></$2>") + a[2],
                            c = a[0];
                          c--;

                        )
                          i = i.lastChild;
                        g.merge(p, i.childNodes),
                          ((i = u.firstChild).textContent = "");
                      } else p.push(t.createTextNode(o));
                  for (u.textContent = "", f = 0; (o = p[f++]); )
                    if (
                      (!r || -1 === g.inArray(o, r)) &&
                      ((l = g.contains(o.ownerDocument, o)),
                      (i = ve(u.appendChild(o), "script")),
                      l && me(i),
                      n)
                    )
                      for (c = 0; (o = i[c++]); )
                        le.test(o.type || "") && n.push(o);
                  return u;
                },
                cleanData: function (e) {
                  for (
                    var t, n, r, o, i = g.event.special, s = 0;
                    void 0 !== (n = e[s]);
                    s++
                  ) {
                    if (
                      g.acceptData(n) &&
                      (o = n[P.expando]) &&
                      (t = P.cache[o])
                    ) {
                      if (t.events)
                        for (r in t.events)
                          i[r]
                            ? g.event.remove(n, r)
                            : g.removeEvent(n, r, t.handle);
                      P.cache[o] && delete P.cache[o];
                    }
                    delete R.cache[n[R.expando]];
                  }
                },
              }),
              g.fn.extend({
                text: function (e) {
                  return M(
                    this,
                    function (e) {
                      return void 0 === e
                        ? g.text(this)
                        : this.empty().each(function () {
                            (1 !== this.nodeType &&
                              11 !== this.nodeType &&
                              9 !== this.nodeType) ||
                              (this.textContent = e);
                          });
                    },
                    null,
                    e,
                    arguments.length
                  );
                },
                append: function () {
                  return this.domManip(arguments, function (e) {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      fe(this, e).appendChild(e);
                  });
                },
                prepend: function () {
                  return this.domManip(arguments, function (e) {
                    if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                    ) {
                      var t = fe(this, e);
                      t.insertBefore(e, t.firstChild);
                    }
                  });
                },
                before: function () {
                  return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                  });
                },
                after: function () {
                  return this.domManip(arguments, function (e) {
                    this.parentNode &&
                      this.parentNode.insertBefore(e, this.nextSibling);
                  });
                },
                remove: function (e, t) {
                  for (
                    var n, r = e ? g.filter(e, this) : this, o = 0;
                    null != (n = r[o]);
                    o++
                  )
                    t || 1 !== n.nodeType || g.cleanData(ve(n)),
                      n.parentNode &&
                        (t &&
                          g.contains(n.ownerDocument, n) &&
                          me(ve(n, "script")),
                        n.parentNode.removeChild(n));
                  return this;
                },
                empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                      (g.cleanData(ve(e, !1)), (e.textContent = ""));
                  return this;
                },
                clone: function (e, t) {
                  return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return g.clone(this, e, t);
                    })
                  );
                },
                html: function (e) {
                  return M(
                    this,
                    function (e) {
                      var t = this[0] || {},
                        n = 0,
                        r = this.length;
                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                      if (
                        "string" == typeof e &&
                        !se.test(e) &&
                        !pe[(oe.exec(e) || ["", ""])[1].toLowerCase()]
                      ) {
                        e = e.replace(re, "<$1></$2>");
                        try {
                          for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType &&
                              (g.cleanData(ve(t, !1)), (t.innerHTML = e));
                          t = 0;
                        } catch (e) {}
                      }
                      t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                  );
                },
                replaceWith: function () {
                  var e = arguments[0];
                  return (
                    this.domManip(arguments, function (t) {
                      (e = this.parentNode),
                        g.cleanData(ve(this)),
                        e && e.replaceChild(t, this);
                    }),
                    e && (e.length || e.nodeType) ? this : this.remove()
                  );
                },
                detach: function (e) {
                  return this.remove(e, !0);
                },
                domManip: function (e, t) {
                  e = a.apply([], e);
                  var n,
                    r,
                    o,
                    i,
                    s,
                    l,
                    c = 0,
                    u = this.length,
                    p = this,
                    f = u - 1,
                    h = e[0],
                    m = g.isFunction(h);
                  if (
                    m ||
                    (u > 1 &&
                      "string" == typeof h &&
                      !d.checkClone &&
                      ae.test(h))
                  )
                    return this.each(function (n) {
                      var r = p.eq(n);
                      m && (e[0] = h.call(this, n, r.html())), r.domManip(e, t);
                    });
                  if (
                    u &&
                    ((r = (n = g.buildFragment(
                      e,
                      this[0].ownerDocument,
                      !1,
                      this
                    )).firstChild),
                    1 === n.childNodes.length && (n = r),
                    r)
                  ) {
                    for (
                      i = (o = g.map(ve(n, "script"), de)).length;
                      c < u;
                      c++
                    )
                      (s = n),
                        c !== f &&
                          ((s = g.clone(s, !0, !0)),
                          i && g.merge(o, ve(s, "script"))),
                        t.call(this[c], s, c);
                    if (i)
                      for (
                        l = o[o.length - 1].ownerDocument, g.map(o, he), c = 0;
                        c < i;
                        c++
                      )
                        (s = o[c]),
                          le.test(s.type || "") &&
                            !P.access(s, "globalEval") &&
                            g.contains(l, s) &&
                            (s.src
                              ? g._evalUrl && g._evalUrl(s.src)
                              : g.globalEval(s.textContent.replace(ue, "")));
                  }
                  return this;
                },
              }),
              g.each(
                {
                  appendTo: "append",
                  prependTo: "prepend",
                  insertBefore: "before",
                  insertAfter: "after",
                  replaceAll: "replaceWith",
                },
                function (e, t) {
                  g.fn[e] = function (e) {
                    for (
                      var n, r = [], o = g(e), i = o.length - 1, s = 0;
                      s <= i;
                      s++
                    )
                      (n = s === i ? this : this.clone(!0)),
                        g(o[s])[t](n),
                        l.apply(r, n.get());
                    return this.pushStack(r);
                  };
                }
              );
            var ye,
              xe = {};
            function be(e, t) {
              var n,
                o = g(t.createElement(e)).appendTo(t.body),
                i =
                  r.getDefaultComputedStyle &&
                  (n = r.getDefaultComputedStyle(o[0]))
                    ? n.display
                    : g.css(o[0], "display");
              return o.detach(), i;
            }
            function we(e) {
              var t = h,
                n = xe[e];
              return (
                n ||
                  (("none" !== (n = be(e, t)) && n) ||
                    ((t = (ye = (
                      ye || g("<iframe frameborder='0' width='0' height='0'/>")
                    ).appendTo(t.documentElement))[0].contentDocument).write(),
                    t.close(),
                    (n = be(e, t)),
                    ye.detach()),
                  (xe[e] = n)),
                n
              );
            }
            var Ce = /^margin/,
              Te = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
              ke = function (e) {
                return e.ownerDocument.defaultView.opener
                  ? e.ownerDocument.defaultView.getComputedStyle(e, null)
                  : r.getComputedStyle(e, null);
              };
            function Ne(e, t, n) {
              var r,
                o,
                i,
                s,
                a = e.style;
              return (
                (n = n || ke(e)) && (s = n.getPropertyValue(t) || n[t]),
                n &&
                  ("" !== s ||
                    g.contains(e.ownerDocument, e) ||
                    (s = g.style(e, t)),
                  Te.test(s) &&
                    Ce.test(t) &&
                    ((r = a.width),
                    (o = a.minWidth),
                    (i = a.maxWidth),
                    (a.minWidth = a.maxWidth = a.width = s),
                    (s = n.width),
                    (a.width = r),
                    (a.minWidth = o),
                    (a.maxWidth = i))),
                void 0 !== s ? s + "" : s
              );
            }
            function Ee(e, t) {
              return {
                get: function () {
                  if (!e()) return (this.get = t).apply(this, arguments);
                  delete this.get;
                },
              };
            }
            !(function () {
              var e,
                t,
                n = h.documentElement,
                o = h.createElement("div"),
                i = h.createElement("div");
              function s() {
                (i.style.cssText =
                  "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                  (i.innerHTML = ""),
                  n.appendChild(o);
                var s = r.getComputedStyle(i, null);
                (e = "1%" !== s.top), (t = "4px" === s.width), n.removeChild(o);
              }
              i.style &&
                ((i.style.backgroundClip = "content-box"),
                (i.cloneNode(!0).style.backgroundClip = ""),
                (d.clearCloneStyle = "content-box" === i.style.backgroundClip),
                (o.style.cssText =
                  "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
                o.appendChild(i),
                r.getComputedStyle &&
                  g.extend(d, {
                    pixelPosition: function () {
                      return s(), e;
                    },
                    boxSizingReliable: function () {
                      return null == t && s(), t;
                    },
                    reliableMarginRight: function () {
                      var e,
                        t = i.appendChild(h.createElement("div"));
                      return (
                        (t.style.cssText = i.style.cssText =
                          "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                        (t.style.marginRight = t.style.width = "0"),
                        (i.style.width = "1px"),
                        n.appendChild(o),
                        (e = !parseFloat(
                          r.getComputedStyle(t, null).marginRight
                        )),
                        n.removeChild(o),
                        i.removeChild(t),
                        e
                      );
                    },
                  }));
            })(),
              (g.swap = function (e, t, n, r) {
                var o,
                  i,
                  s = {};
                for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
                for (i in ((o = n.apply(e, r || [])), t)) e.style[i] = s[i];
                return o;
              });
            var Se = /^(none|table(?!-c[ea]).+)/,
              je = new RegExp("^(" + X + ")(.*)$", "i"),
              De = new RegExp("^([+-])=(" + X + ")", "i"),
              _e = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
              },
              Ae = { letterSpacing: "0", fontWeight: "400" },
              He = ["Webkit", "O", "Moz", "ms"];
            function Le(e, t) {
              if (t in e) return t;
              for (
                var n = t[0].toUpperCase() + t.slice(1), r = t, o = He.length;
                o--;

              )
                if ((t = He[o] + n) in e) return t;
              return r;
            }
            function qe(e, t, n) {
              var r = je.exec(t);
              return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
            }
            function Oe(e, t, n, r, o) {
              for (
                var i =
                    n === (r ? "border" : "content")
                      ? 4
                      : "width" === t
                      ? 1
                      : 0,
                  s = 0;
                i < 4;
                i += 2
              )
                "margin" === n && (s += g.css(e, n + U[i], !0, o)),
                  r
                    ? ("content" === n &&
                        (s -= g.css(e, "padding" + U[i], !0, o)),
                      "margin" !== n &&
                        (s -= g.css(e, "border" + U[i] + "Width", !0, o)))
                    : ((s += g.css(e, "padding" + U[i], !0, o)),
                      "padding" !== n &&
                        (s += g.css(e, "border" + U[i] + "Width", !0, o)));
              return s;
            }
            function Me(e, t, n) {
              var r = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                i = ke(e),
                s = "border-box" === g.css(e, "boxSizing", !1, i);
              if (o <= 0 || null == o) {
                if (
                  (((o = Ne(e, t, i)) < 0 || null == o) && (o = e.style[t]),
                  Te.test(o))
                )
                  return o;
                (r = s && (d.boxSizingReliable() || o === e.style[t])),
                  (o = parseFloat(o) || 0);
              }
              return o + Oe(e, t, n || (s ? "border" : "content"), r, i) + "px";
            }
            function Fe(e, t) {
              for (var n, r, o, i = [], s = 0, a = e.length; s < a; s++)
                (r = e[s]).style &&
                  ((i[s] = P.get(r, "olddisplay")),
                  (n = r.style.display),
                  t
                    ? (i[s] || "none" !== n || (r.style.display = ""),
                      "" === r.style.display &&
                        V(r) &&
                        (i[s] = P.access(r, "olddisplay", we(r.nodeName))))
                    : ((o = V(r)),
                      ("none" === n && o) ||
                        P.set(r, "olddisplay", o ? n : g.css(r, "display"))));
              for (s = 0; s < a; s++)
                (r = e[s]).style &&
                  ((t &&
                    "none" !== r.style.display &&
                    "" !== r.style.display) ||
                    (r.style.display = t ? i[s] || "" : "none"));
              return e;
            }
            function Pe(e, t, n, r, o) {
              return new Pe.prototype.init(e, t, n, r, o);
            }
            g.extend({
              cssHooks: {
                opacity: {
                  get: function (e, t) {
                    if (t) {
                      var n = Ne(e, "opacity");
                      return "" === n ? "1" : n;
                    }
                  },
                },
              },
              cssNumber: {
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
                zoom: !0,
              },
              cssProps: { float: "cssFloat" },
              style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                  var o,
                    i,
                    s,
                    a = g.camelCase(t),
                    l = e.style;
                  if (
                    ((t = g.cssProps[a] || (g.cssProps[a] = Le(l, a))),
                    (s = g.cssHooks[t] || g.cssHooks[a]),
                    void 0 === n)
                  )
                    return s && "get" in s && void 0 !== (o = s.get(e, !1, r))
                      ? o
                      : l[t];
                  "string" == (i = typeof n) &&
                    (o = De.exec(n)) &&
                    ((n = (o[1] + 1) * o[2] + parseFloat(g.css(e, t))),
                    (i = "number")),
                    null != n &&
                      n == n &&
                      ("number" !== i || g.cssNumber[a] || (n += "px"),
                      d.clearCloneStyle ||
                        "" !== n ||
                        0 !== t.indexOf("background") ||
                        (l[t] = "inherit"),
                      (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                        (l[t] = n));
                }
              },
              css: function (e, t, n, r) {
                var o,
                  i,
                  s,
                  a = g.camelCase(t);
                return (
                  (t = g.cssProps[a] || (g.cssProps[a] = Le(e.style, a))),
                  (s = g.cssHooks[t] || g.cssHooks[a]) &&
                    "get" in s &&
                    (o = s.get(e, !0, n)),
                  void 0 === o && (o = Ne(e, t, r)),
                  "normal" === o && t in Ae && (o = Ae[t]),
                  "" === n || n
                    ? ((i = parseFloat(o)),
                      !0 === n || g.isNumeric(i) ? i || 0 : o)
                    : o
                );
              },
            }),
              g.each(["height", "width"], function (e, t) {
                g.cssHooks[t] = {
                  get: function (e, n, r) {
                    if (n)
                      return Se.test(g.css(e, "display")) && 0 === e.offsetWidth
                        ? g.swap(e, _e, function () {
                            return Me(e, t, r);
                          })
                        : Me(e, t, r);
                  },
                  set: function (e, n, r) {
                    var o = r && ke(e);
                    return qe(
                      0,
                      n,
                      r
                        ? Oe(
                            e,
                            t,
                            r,
                            "border-box" === g.css(e, "boxSizing", !1, o),
                            o
                          )
                        : 0
                    );
                  },
                };
              }),
              (g.cssHooks.marginRight = Ee(
                d.reliableMarginRight,
                function (e, t) {
                  if (t)
                    return g.swap(e, { display: "inline-block" }, Ne, [
                      e,
                      "marginRight",
                    ]);
                }
              )),
              g.each(
                { margin: "", padding: "", border: "Width" },
                function (e, t) {
                  (g.cssHooks[e + t] = {
                    expand: function (n) {
                      for (
                        var r = 0,
                          o = {},
                          i = "string" == typeof n ? n.split(" ") : [n];
                        r < 4;
                        r++
                      )
                        o[e + U[r] + t] = i[r] || i[r - 2] || i[0];
                      return o;
                    },
                  }),
                    Ce.test(e) || (g.cssHooks[e + t].set = qe);
                }
              ),
              g.fn.extend({
                css: function (e, t) {
                  return M(
                    this,
                    function (e, t, n) {
                      var r,
                        o,
                        i = {},
                        s = 0;
                      if (g.isArray(t)) {
                        for (r = ke(e), o = t.length; s < o; s++)
                          i[t[s]] = g.css(e, t[s], !1, r);
                        return i;
                      }
                      return void 0 !== n ? g.style(e, t, n) : g.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                  );
                },
                show: function () {
                  return Fe(this, !0);
                },
                hide: function () {
                  return Fe(this);
                },
                toggle: function (e) {
                  return "boolean" == typeof e
                    ? e
                      ? this.show()
                      : this.hide()
                    : this.each(function () {
                        V(this) ? g(this).show() : g(this).hide();
                      });
                },
              }),
              (g.Tween = Pe),
              (Pe.prototype = {
                constructor: Pe,
                init: function (e, t, n, r, o, i) {
                  (this.elem = e),
                    (this.prop = n),
                    (this.easing = o || "swing"),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = i || (g.cssNumber[n] ? "" : "px"));
                },
                cur: function () {
                  var e = Pe.propHooks[this.prop];
                  return e && e.get
                    ? e.get(this)
                    : Pe.propHooks._default.get(this);
                },
                run: function (e) {
                  var t,
                    n = Pe.propHooks[this.prop];
                  return (
                    this.options.duration
                      ? (this.pos = t =
                          g.easing[this.easing](
                            e,
                            this.options.duration * e,
                            0,
                            1,
                            this.options.duration
                          ))
                      : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                      this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Pe.propHooks._default.set(this),
                    this
                  );
                },
              }),
              (Pe.prototype.init.prototype = Pe.prototype),
              (Pe.propHooks = {
                _default: {
                  get: function (e) {
                    var t;
                    return null == e.elem[e.prop] ||
                      (e.elem.style && null != e.elem.style[e.prop])
                      ? (t = g.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0
                      : e.elem[e.prop];
                  },
                  set: function (e) {
                    g.fx.step[e.prop]
                      ? g.fx.step[e.prop](e)
                      : e.elem.style &&
                        (null != e.elem.style[g.cssProps[e.prop]] ||
                          g.cssHooks[e.prop])
                      ? g.style(e.elem, e.prop, e.now + e.unit)
                      : (e.elem[e.prop] = e.now);
                  },
                },
              }),
              (Pe.propHooks.scrollTop = Pe.propHooks.scrollLeft =
                {
                  set: function (e) {
                    e.elem.nodeType &&
                      e.elem.parentNode &&
                      (e.elem[e.prop] = e.now);
                  },
                }),
              (g.easing = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
              }),
              (g.fx = Pe.prototype.init),
              (g.fx.step = {});
            var Re,
              Ie,
              We = /^(?:toggle|show|hide)$/,
              Be = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
              $e = /queueHooks$/,
              ze = [
                function (e, t, n) {
                  var r,
                    o,
                    i,
                    s,
                    a,
                    l,
                    c,
                    u = this,
                    p = {},
                    f = e.style,
                    d = e.nodeType && V(e),
                    h = P.get(e, "fxshow");
                  for (r in (n.queue ||
                    (null == (a = g._queueHooks(e, "fx")).unqueued &&
                      ((a.unqueued = 0),
                      (l = a.empty.fire),
                      (a.empty.fire = function () {
                        a.unqueued || l();
                      })),
                    a.unqueued++,
                    u.always(function () {
                      u.always(function () {
                        a.unqueued--, g.queue(e, "fx").length || a.empty.fire();
                      });
                    })),
                  1 === e.nodeType &&
                    ("height" in t || "width" in t) &&
                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    "inline" ===
                      ("none" === (c = g.css(e, "display"))
                        ? P.get(e, "olddisplay") || we(e.nodeName)
                        : c) &&
                      "none" === g.css(e, "float") &&
                      (f.display = "inline-block")),
                  n.overflow &&
                    ((f.overflow = "hidden"),
                    u.always(function () {
                      (f.overflow = n.overflow[0]),
                        (f.overflowX = n.overflow[1]),
                        (f.overflowY = n.overflow[2]);
                    })),
                  t))
                    if (((o = t[r]), We.exec(o))) {
                      if (
                        (delete t[r],
                        (i = i || "toggle" === o),
                        o === (d ? "hide" : "show"))
                      ) {
                        if ("show" !== o || !h || void 0 === h[r]) continue;
                        d = !0;
                      }
                      p[r] = (h && h[r]) || g.style(e, r);
                    } else c = void 0;
                  if (g.isEmptyObject(p))
                    "inline" === ("none" === c ? we(e.nodeName) : c) &&
                      (f.display = c);
                  else
                    for (r in (h
                      ? "hidden" in h && (d = h.hidden)
                      : (h = P.access(e, "fxshow", {})),
                    i && (h.hidden = !d),
                    d
                      ? g(e).show()
                      : u.done(function () {
                          g(e).hide();
                        }),
                    u.done(function () {
                      var t;
                      for (t in (P.remove(e, "fxshow"), p)) g.style(e, t, p[t]);
                    }),
                    p))
                      (s = Qe(d ? h[r] : 0, r, u)),
                        r in h ||
                          ((h[r] = s.start),
                          d &&
                            ((s.end = s.start),
                            (s.start =
                              "width" === r || "height" === r ? 1 : 0)));
                },
              ],
              Xe = {
                "*": [
                  function (e, t) {
                    var n = this.createTween(e, t),
                      r = n.cur(),
                      o = Be.exec(t),
                      i = (o && o[3]) || (g.cssNumber[e] ? "" : "px"),
                      s =
                        (g.cssNumber[e] || ("px" !== i && +r)) &&
                        Be.exec(g.css(n.elem, e)),
                      a = 1,
                      l = 20;
                    if (s && s[3] !== i) {
                      (i = i || s[3]), (o = o || []), (s = +r || 1);
                      do {
                        (s /= a = a || ".5"), g.style(n.elem, e, s + i);
                      } while (a !== (a = n.cur() / r) && 1 !== a && --l);
                    }
                    return (
                      o &&
                        ((s = n.start = +s || +r || 0),
                        (n.unit = i),
                        (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
                      n
                    );
                  },
                ],
              };
            function Ue() {
              return (
                setTimeout(function () {
                  Re = void 0;
                }),
                (Re = g.now())
              );
            }
            function Ve(e, t) {
              var n,
                r = 0,
                o = { height: e };
              for (t = t ? 1 : 0; r < 4; r += 2 - t)
                o["margin" + (n = U[r])] = o["padding" + n] = e;
              return t && (o.opacity = o.width = e), o;
            }
            function Qe(e, t, n) {
              for (
                var r, o = (Xe[t] || []).concat(Xe["*"]), i = 0, s = o.length;
                i < s;
                i++
              )
                if ((r = o[i].call(n, t, e))) return r;
            }
            function Ye(e, t, n) {
              var r,
                o,
                i = 0,
                s = ze.length,
                a = g.Deferred().always(function () {
                  delete l.elem;
                }),
                l = function () {
                  if (o) return !1;
                  for (
                    var t = Re || Ue(),
                      n = Math.max(0, c.startTime + c.duration - t),
                      r = 1 - (n / c.duration || 0),
                      i = 0,
                      s = c.tweens.length;
                    i < s;
                    i++
                  )
                    c.tweens[i].run(r);
                  return (
                    a.notifyWith(e, [c, r, n]),
                    r < 1 && s ? n : (a.resolveWith(e, [c]), !1)
                  );
                },
                c = a.promise({
                  elem: e,
                  props: g.extend({}, t),
                  opts: g.extend(!0, { specialEasing: {} }, n),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: Re || Ue(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function (t, n) {
                    var r = g.Tween(
                      e,
                      c.opts,
                      t,
                      n,
                      c.opts.specialEasing[t] || c.opts.easing
                    );
                    return c.tweens.push(r), r;
                  },
                  stop: function (t) {
                    var n = 0,
                      r = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) c.tweens[n].run(1);
                    return (
                      t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
                      this
                    );
                  },
                }),
                u = c.props;
              for (
                (function (e, t) {
                  var n, r, o, i, s;
                  for (n in e)
                    if (
                      ((o = t[(r = g.camelCase(n))]),
                      (i = e[n]),
                      g.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                      n !== r && ((e[r] = i), delete e[n]),
                      (s = g.cssHooks[r]) && ("expand" in s))
                    )
                      for (n in ((i = s.expand(i)), delete e[r], i))
                        (n in e) || ((e[n] = i[n]), (t[n] = o));
                    else t[r] = o;
                })(u, c.opts.specialEasing);
                i < s;
                i++
              )
                if ((r = ze[i].call(c, e, u, c.opts))) return r;
              return (
                g.map(u, Qe, c),
                g.isFunction(c.opts.start) && c.opts.start.call(e, c),
                g.fx.timer(
                  g.extend(l, { elem: e, anim: c, queue: c.opts.queue })
                ),
                c
                  .progress(c.opts.progress)
                  .done(c.opts.done, c.opts.complete)
                  .fail(c.opts.fail)
                  .always(c.opts.always)
              );
            }
            (g.Animation = g.extend(Ye, {
              tweener: function (e, t) {
                g.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
                for (var n, r = 0, o = e.length; r < o; r++)
                  (n = e[r]), (Xe[n] = Xe[n] || []), Xe[n].unshift(t);
              },
              prefilter: function (e, t) {
                t ? ze.unshift(e) : ze.push(e);
              },
            })),
              (g.speed = function (e, t, n) {
                var r =
                  e && "object" == typeof e
                    ? g.extend({}, e)
                    : {
                        complete: n || (!n && t) || (g.isFunction(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !g.isFunction(t) && t),
                      };
                return (
                  (r.duration = g.fx.off
                    ? 0
                    : "number" == typeof r.duration
                    ? r.duration
                    : r.duration in g.fx.speeds
                    ? g.fx.speeds[r.duration]
                    : g.fx.speeds._default),
                  (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                  (r.old = r.complete),
                  (r.complete = function () {
                    g.isFunction(r.old) && r.old.call(this),
                      r.queue && g.dequeue(this, r.queue);
                  }),
                  r
                );
              }),
              g.fn.extend({
                fadeTo: function (e, t, n, r) {
                  return this.filter(V)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
                },
                animate: function (e, t, n, r) {
                  var o = g.isEmptyObject(e),
                    i = g.speed(t, n, r),
                    s = function () {
                      var t = Ye(this, g.extend({}, e), i);
                      (o || P.get(this, "finish")) && t.stop(!0);
                    };
                  return (
                    (s.finish = s),
                    o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
                  );
                },
                stop: function (e, t, n) {
                  var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                  };
                  return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                      var t = !0,
                        o = null != e && e + "queueHooks",
                        i = g.timers,
                        s = P.get(this);
                      if (o) s[o] && s[o].stop && r(s[o]);
                      else
                        for (o in s) s[o] && s[o].stop && $e.test(o) && r(s[o]);
                      for (o = i.length; o--; )
                        i[o].elem !== this ||
                          (null != e && i[o].queue !== e) ||
                          (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                      (!t && n) || g.dequeue(this, e);
                    })
                  );
                },
                finish: function (e) {
                  return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                      var t,
                        n = P.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = g.timers,
                        s = r ? r.length : 0;
                      for (
                        n.finish = !0,
                          g.queue(this, e, []),
                          o && o.stop && o.stop.call(this, !0),
                          t = i.length;
                        t--;

                      )
                        i[t].elem === this &&
                          i[t].queue === e &&
                          (i[t].anim.stop(!0), i.splice(t, 1));
                      for (t = 0; t < s; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                      delete n.finish;
                    })
                  );
                },
              }),
              g.each(["toggle", "show", "hide"], function (e, t) {
                var n = g.fn[t];
                g.fn[t] = function (e, r, o) {
                  return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(Ve(t, !0), e, r, o);
                };
              }),
              g.each(
                {
                  slideDown: Ve("show"),
                  slideUp: Ve("hide"),
                  slideToggle: Ve("toggle"),
                  fadeIn: { opacity: "show" },
                  fadeOut: { opacity: "hide" },
                  fadeToggle: { opacity: "toggle" },
                },
                function (e, t) {
                  g.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                  };
                }
              ),
              (g.timers = []),
              (g.fx.tick = function () {
                var e,
                  t = 0,
                  n = g.timers;
                for (Re = g.now(); t < n.length; t++)
                  (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || g.fx.stop(), (Re = void 0);
              }),
              (g.fx.timer = function (e) {
                g.timers.push(e), e() ? g.fx.start() : g.timers.pop();
              }),
              (g.fx.interval = 13),
              (g.fx.start = function () {
                Ie || (Ie = setInterval(g.fx.tick, g.fx.interval));
              }),
              (g.fx.stop = function () {
                clearInterval(Ie), (Ie = null);
              }),
              (g.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (g.fn.delay = function (e, t) {
                return (
                  (e = (g.fx && g.fx.speeds[e]) || e),
                  (t = t || "fx"),
                  this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                      clearTimeout(r);
                    };
                  })
                );
              }),
              (function () {
                var e = h.createElement("input"),
                  t = h.createElement("select"),
                  n = t.appendChild(h.createElement("option"));
                (e.type = "checkbox"),
                  (d.checkOn = "" !== e.value),
                  (d.optSelected = n.selected),
                  (t.disabled = !0),
                  (d.optDisabled = !n.disabled),
                  ((e = h.createElement("input")).value = "t"),
                  (e.type = "radio"),
                  (d.radioValue = "t" === e.value);
              })();
            var Ge,
              Je = g.expr.attrHandle;
            g.fn.extend({
              attr: function (e, t) {
                return M(this, g.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                return this.each(function () {
                  g.removeAttr(this, e);
                });
              },
            }),
              g.extend({
                attr: function (e, t, n) {
                  var r,
                    o,
                    i = e.nodeType;
                  if (e && 3 !== i && 8 !== i && 2 !== i)
                    return typeof e.getAttribute === Y
                      ? g.prop(e, t, n)
                      : ((1 === i && g.isXMLDoc(e)) ||
                          ((t = t.toLowerCase()),
                          (r =
                            g.attrHooks[t] ||
                            (g.expr.match.bool.test(t) ? Ge : void 0))),
                        void 0 === n
                          ? r && "get" in r && null !== (o = r.get(e, t))
                            ? o
                            : null == (o = g.find.attr(e, t))
                            ? void 0
                            : o
                          : null !== n
                          ? r && "set" in r && void 0 !== (o = r.set(e, n, t))
                            ? o
                            : (e.setAttribute(t, n + ""), n)
                          : void g.removeAttr(e, t));
                },
                removeAttr: function (e, t) {
                  var n,
                    r,
                    o = 0,
                    i = t && t.match(L);
                  if (i && 1 === e.nodeType)
                    for (; (n = i[o++]); )
                      (r = g.propFix[n] || n),
                        g.expr.match.bool.test(n) && (e[r] = !1),
                        e.removeAttribute(n);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      if (
                        !d.radioValue &&
                        "radio" === t &&
                        g.nodeName(e, "input")
                      ) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                      }
                    },
                  },
                },
              }),
              (Ge = {
                set: function (e, t, n) {
                  return (
                    !1 === t ? g.removeAttr(e, n) : e.setAttribute(n, n), n
                  );
                },
              }),
              g.each(g.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = Je[t] || g.find.attr;
                Je[t] = function (e, t, r) {
                  var o, i;
                  return (
                    r ||
                      ((i = Je[t]),
                      (Je[t] = o),
                      (o = null != n(e, t, r) ? t.toLowerCase() : null),
                      (Je[t] = i)),
                    o
                  );
                };
              });
            var Ke = /^(?:input|select|textarea|button)$/i;
            g.fn.extend({
              prop: function (e, t) {
                return M(this, g.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                return this.each(function () {
                  delete this[g.propFix[e] || e];
                });
              },
            }),
              g.extend({
                propFix: { for: "htmlFor", class: "className" },
                prop: function (e, t, n) {
                  var r,
                    o,
                    i = e.nodeType;
                  if (e && 3 !== i && 8 !== i && 2 !== i)
                    return (
                      (1 !== i || !g.isXMLDoc(e)) &&
                        ((t = g.propFix[t] || t), (o = g.propHooks[t])),
                      void 0 !== n
                        ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e[t] = n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : e[t]
                    );
                },
                propHooks: {
                  tabIndex: {
                    get: function (e) {
                      return e.hasAttribute("tabindex") ||
                        Ke.test(e.nodeName) ||
                        e.href
                        ? e.tabIndex
                        : -1;
                    },
                  },
                },
              }),
              d.optSelected ||
                (g.propHooks.selected = {
                  get: function (e) {
                    var t = e.parentNode;
                    return (
                      t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                  },
                }),
              g.each(
                [
                  "tabIndex",
                  "readOnly",
                  "maxLength",
                  "cellSpacing",
                  "cellPadding",
                  "rowSpan",
                  "colSpan",
                  "useMap",
                  "frameBorder",
                  "contentEditable",
                ],
                function () {
                  g.propFix[this.toLowerCase()] = this;
                }
              );
            var Ze = /[\t\r\n\f]/g;
            g.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  s,
                  a = "string" == typeof e && e,
                  l = 0,
                  c = this.length;
                if (g.isFunction(e))
                  return this.each(function (t) {
                    g(this).addClass(e.call(this, t, this.className));
                  });
                if (a)
                  for (t = (e || "").match(L) || []; l < c; l++)
                    if (
                      (r =
                        1 === (n = this[l]).nodeType &&
                        (n.className
                          ? (" " + n.className + " ").replace(Ze, " ")
                          : " "))
                    ) {
                      for (i = 0; (o = t[i++]); )
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      (s = g.trim(r)), n.className !== s && (n.className = s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  s,
                  a = 0 === arguments.length || ("string" == typeof e && e),
                  l = 0,
                  c = this.length;
                if (g.isFunction(e))
                  return this.each(function (t) {
                    g(this).removeClass(e.call(this, t, this.className));
                  });
                if (a)
                  for (t = (e || "").match(L) || []; l < c; l++)
                    if (
                      (r =
                        1 === (n = this[l]).nodeType &&
                        (n.className
                          ? (" " + n.className + " ").replace(Ze, " ")
                          : ""))
                    ) {
                      for (i = 0; (o = t[i++]); )
                        for (; r.indexOf(" " + o + " ") >= 0; )
                          r = r.replace(" " + o + " ", " ");
                      (s = e ? g.trim(r) : ""),
                        n.className !== s && (n.className = s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : g.isFunction(e)
                  ? this.each(function (n) {
                      g(this).toggleClass(
                        e.call(this, n, this.className, t),
                        t
                      );
                    })
                  : this.each(function () {
                      if ("string" === n)
                        for (
                          var t, r = 0, o = g(this), i = e.match(L) || [];
                          (t = i[r++]);

                        )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (n !== Y && "boolean" !== n) ||
                          (this.className &&
                            P.set(this, "__className__", this.className),
                          (this.className =
                            this.className || !1 === e
                              ? ""
                              : P.get(this, "__className__") || ""));
                    });
              },
              hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                  if (
                    1 === this[n].nodeType &&
                    (" " + this[n].className + " ")
                      .replace(Ze, " ")
                      .indexOf(t) >= 0
                  )
                    return !0;
                return !1;
              },
            });
            var et = /\r/g;
            g.fn.extend({
              val: function (e) {
                var t,
                  n,
                  r,
                  o = this[0];
                return arguments.length
                  ? ((r = g.isFunction(e)),
                    this.each(function (n) {
                      var o;
                      1 === this.nodeType &&
                        (null == (o = r ? e.call(this, n, g(this).val()) : e)
                          ? (o = "")
                          : "number" == typeof o
                          ? (o += "")
                          : g.isArray(o) &&
                            (o = g.map(o, function (e) {
                              return null == e ? "" : e + "";
                            })),
                        ((t =
                          g.valHooks[this.type] ||
                          g.valHooks[this.nodeName.toLowerCase()]) &&
                          "set" in t &&
                          void 0 !== t.set(this, o, "value")) ||
                          (this.value = o));
                    }))
                  : o
                  ? (t =
                      g.valHooks[o.type] ||
                      g.valHooks[o.nodeName.toLowerCase()]) &&
                    "get" in t &&
                    void 0 !== (n = t.get(o, "value"))
                    ? n
                    : "string" == typeof (n = o.value)
                    ? n.replace(et, "")
                    : null == n
                    ? ""
                    : n
                  : void 0;
              },
            }),
              g.extend({
                valHooks: {
                  option: {
                    get: function (e) {
                      var t = g.find.attr(e, "value");
                      return null != t ? t : g.trim(g.text(e));
                    },
                  },
                  select: {
                    get: function (e) {
                      for (
                        var t,
                          n,
                          r = e.options,
                          o = e.selectedIndex,
                          i = "select-one" === e.type || o < 0,
                          s = i ? null : [],
                          a = i ? o + 1 : r.length,
                          l = o < 0 ? a : i ? o : 0;
                        l < a;
                        l++
                      )
                        if (
                          ((n = r[l]).selected || l === o) &&
                          (d.optDisabled
                            ? !n.disabled
                            : null === n.getAttribute("disabled")) &&
                          (!n.parentNode.disabled ||
                            !g.nodeName(n.parentNode, "optgroup"))
                        ) {
                          if (((t = g(n).val()), i)) return t;
                          s.push(t);
                        }
                      return s;
                    },
                    set: function (e, t) {
                      for (
                        var n,
                          r,
                          o = e.options,
                          i = g.makeArray(t),
                          s = o.length;
                        s--;

                      )
                        ((r = o[s]).selected = g.inArray(r.value, i) >= 0) &&
                          (n = !0);
                      return n || (e.selectedIndex = -1), i;
                    },
                  },
                },
              }),
              g.each(["radio", "checkbox"], function () {
                (g.valHooks[this] = {
                  set: function (e, t) {
                    if (g.isArray(t))
                      return (e.checked = g.inArray(g(e).val(), t) >= 0);
                  },
                }),
                  d.checkOn ||
                    (g.valHooks[this].get = function (e) {
                      return null === e.getAttribute("value") ? "on" : e.value;
                    });
              }),
              g.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                  " "
                ),
                function (e, t) {
                  g.fn[t] = function (e, n) {
                    return arguments.length > 0
                      ? this.on(t, null, e, n)
                      : this.trigger(t);
                  };
                }
              ),
              g.fn.extend({
                hover: function (e, t) {
                  return this.mouseenter(e).mouseleave(t || e);
                },
                bind: function (e, t, n) {
                  return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                  return this.off(e, null, t);
                },
                delegate: function (e, t, n, r) {
                  return this.on(t, e, n, r);
                },
                undelegate: function (e, t, n) {
                  return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
                },
              });
            var tt = g.now(),
              nt = /\?/;
            (g.parseJSON = function (e) {
              return JSON.parse(e + "");
            }),
              (g.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                  t = new DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                  t = void 0;
                }
                return (
                  (t && !t.getElementsByTagName("parsererror").length) ||
                    g.error("Invalid XML: " + e),
                  t
                );
              });
            var rt = /#.*$/,
              ot = /([?&])_=[^&]*/,
              it = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              st = /^(?:GET|HEAD)$/,
              at = /^\/\//,
              lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
              ct = {},
              ut = {},
              pt = "*/".concat("*"),
              ft = r.location.href,
              dt = lt.exec(ft.toLowerCase()) || [];
            function ht(e) {
              return function (t, n) {
                "string" != typeof t && ((n = t), (t = "*"));
                var r,
                  o = 0,
                  i = t.toLowerCase().match(L) || [];
                if (g.isFunction(n))
                  for (; (r = i[o++]); )
                    "+" === r[0]
                      ? ((r = r.slice(1) || "*"),
                        (e[r] = e[r] || []).unshift(n))
                      : (e[r] = e[r] || []).push(n);
              };
            }
            function mt(e, t, n, r) {
              var o = {},
                i = e === ut;
              function s(a) {
                var l;
                return (
                  (o[a] = !0),
                  g.each(e[a] || [], function (e, a) {
                    var c = a(t, n, r);
                    return "string" != typeof c || i || o[c]
                      ? i
                        ? !(l = c)
                        : void 0
                      : (t.dataTypes.unshift(c), s(c), !1);
                  }),
                  l
                );
              }
              return s(t.dataTypes[0]) || (!o["*"] && s("*"));
            }
            function gt(e, t) {
              var n,
                r,
                o = g.ajaxSettings.flatOptions || {};
              for (n in t)
                void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
              return r && g.extend(!0, e, r), e;
            }
            g.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: ft,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    dt[1]
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": pt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": g.parseJSON,
                  "text xml": g.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? gt(gt(e, g.ajaxSettings), t) : gt(g.ajaxSettings, e);
              },
              ajaxPrefilter: ht(ct),
              ajaxTransport: ht(ut),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  i,
                  s,
                  a,
                  l,
                  c,
                  u = g.ajaxSetup({}, t),
                  p = u.context || u,
                  f = u.context && (p.nodeType || p.jquery) ? g(p) : g.event,
                  d = g.Deferred(),
                  h = g.Callbacks("once memory"),
                  m = u.statusCode || {},
                  v = {},
                  y = {},
                  x = 0,
                  b = "canceled",
                  w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (2 === x) {
                        if (!i)
                          for (i = {}; (t = it.exec(o)); )
                            i[t[1].toLowerCase()] = t[2];
                        t = i[e.toLowerCase()];
                      }
                      return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                      return 2 === x ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      var n = e.toLowerCase();
                      return x || ((e = y[n] = y[n] || e), (v[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                      return x || (u.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (x < 2) for (t in e) m[t] = [m[t], e[t]];
                        else w.always(e[w.status]);
                      return this;
                    },
                    abort: function (e) {
                      var t = e || b;
                      return n && n.abort(t), C(0, t), this;
                    },
                  };
                if (
                  ((d.promise(w).complete = h.add),
                  (w.success = w.done),
                  (w.error = w.fail),
                  (u.url = ((e || u.url || ft) + "")
                    .replace(rt, "")
                    .replace(at, dt[1] + "//")),
                  (u.type = t.method || t.type || u.method || u.type),
                  (u.dataTypes = g
                    .trim(u.dataType || "*")
                    .toLowerCase()
                    .match(L) || [""]),
                  null == u.crossDomain &&
                    ((a = lt.exec(u.url.toLowerCase())),
                    (u.crossDomain = !(
                      !a ||
                      (a[1] === dt[1] &&
                        a[2] === dt[2] &&
                        (a[3] || ("http:" === a[1] ? "80" : "443")) ===
                          (dt[3] || ("http:" === dt[1] ? "80" : "443")))
                    ))),
                  u.data &&
                    u.processData &&
                    "string" != typeof u.data &&
                    (u.data = g.param(u.data, u.traditional)),
                  mt(ct, u, t, w),
                  2 === x)
                )
                  return w;
                for (c in ((l = g.event && u.global) &&
                  0 == g.active++ &&
                  g.event.trigger("ajaxStart"),
                (u.type = u.type.toUpperCase()),
                (u.hasContent = !st.test(u.type)),
                (r = u.url),
                u.hasContent ||
                  (u.data &&
                    ((r = u.url += (nt.test(r) ? "&" : "?") + u.data),
                    delete u.data),
                  !1 === u.cache &&
                    (u.url = ot.test(r)
                      ? r.replace(ot, "$1_=" + tt++)
                      : r + (nt.test(r) ? "&" : "?") + "_=" + tt++)),
                u.ifModified &&
                  (g.lastModified[r] &&
                    w.setRequestHeader("If-Modified-Since", g.lastModified[r]),
                  g.etag[r] && w.setRequestHeader("If-None-Match", g.etag[r])),
                ((u.data && u.hasContent && !1 !== u.contentType) ||
                  t.contentType) &&
                  w.setRequestHeader("Content-Type", u.contentType),
                w.setRequestHeader(
                  "Accept",
                  u.dataTypes[0] && u.accepts[u.dataTypes[0]]
                    ? u.accepts[u.dataTypes[0]] +
                        ("*" !== u.dataTypes[0] ? ", " + pt + "; q=0.01" : "")
                    : u.accepts["*"]
                ),
                u.headers))
                  w.setRequestHeader(c, u.headers[c]);
                if (
                  u.beforeSend &&
                  (!1 === u.beforeSend.call(p, w, u) || 2 === x)
                )
                  return w.abort();
                for (c in ((b = "abort"),
                { success: 1, error: 1, complete: 1 }))
                  w[c](u[c]);
                if ((n = mt(ut, u, t, w))) {
                  (w.readyState = 1),
                    l && f.trigger("ajaxSend", [w, u]),
                    u.async &&
                      u.timeout > 0 &&
                      (s = setTimeout(function () {
                        w.abort("timeout");
                      }, u.timeout));
                  try {
                    (x = 1), n.send(v, C);
                  } catch (e) {
                    if (!(x < 2)) throw e;
                    C(-1, e);
                  }
                } else C(-1, "No Transport");
                function C(e, t, i, a) {
                  var c,
                    v,
                    y,
                    b,
                    C,
                    T = t;
                  2 !== x &&
                    ((x = 2),
                    s && clearTimeout(s),
                    (n = void 0),
                    (o = a || ""),
                    (w.readyState = e > 0 ? 4 : 0),
                    (c = (e >= 200 && e < 300) || 304 === e),
                    i &&
                      (b = (function (e, t, n) {
                        for (
                          var r, o, i, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in a)
                            if (a[o] && a[o].test(r)) {
                              l.unshift(o);
                              break;
                            }
                        if (l[0] in n) i = l[0];
                        else {
                          for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                              i = o;
                              break;
                            }
                            s || (s = o);
                          }
                          i = i || s;
                        }
                        if (i) return i !== l[0] && l.unshift(i), n[i];
                      })(u, w, i)),
                    (b = (function (e, t, n, r) {
                      var o,
                        i,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                      for (i = u.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !l &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = i),
                          (i = u.shift()))
                        )
                          if ("*" === i) i = l;
                          else if ("*" !== l && l !== i) {
                            if (!(s = c[l + " " + i] || c["* " + i]))
                              for (o in c)
                                if (
                                  (a = o.split(" "))[1] === i &&
                                  (s = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[o])
                                    : !0 !== c[o] &&
                                      ((i = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + i,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(u, b, w, c)),
                    c
                      ? (u.ifModified &&
                          ((C = w.getResponseHeader("Last-Modified")) &&
                            (g.lastModified[r] = C),
                          (C = w.getResponseHeader("etag")) && (g.etag[r] = C)),
                        204 === e || "HEAD" === u.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = b.state), (v = b.data), (c = !(y = b.error))))
                      : ((y = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (w.status = e),
                    (w.statusText = (t || T) + ""),
                    c
                      ? d.resolveWith(p, [v, T, w])
                      : d.rejectWith(p, [w, T, y]),
                    w.statusCode(m),
                    (m = void 0),
                    l &&
                      f.trigger(c ? "ajaxSuccess" : "ajaxError", [
                        w,
                        u,
                        c ? v : y,
                      ]),
                    h.fireWith(p, [w, T]),
                    l &&
                      (f.trigger("ajaxComplete", [w, u]),
                      --g.active || g.event.trigger("ajaxStop")));
                }
                return w;
              },
              getJSON: function (e, t, n) {
                return g.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return g.get(e, void 0, t, "script");
              },
            }),
              g.each(["get", "post"], function (e, t) {
                g[t] = function (e, n, r, o) {
                  return (
                    g.isFunction(n) && ((o = o || r), (r = n), (n = void 0)),
                    g.ajax({
                      url: e,
                      type: t,
                      dataType: o,
                      data: n,
                      success: r,
                    })
                  );
                };
              }),
              (g._evalUrl = function (e) {
                return g.ajax({
                  url: e,
                  type: "GET",
                  dataType: "script",
                  async: !1,
                  global: !1,
                  throws: !0,
                });
              }),
              g.fn.extend({
                wrapAll: function (e) {
                  var t;
                  return g.isFunction(e)
                    ? this.each(function (t) {
                        g(this).wrapAll(e.call(this, t));
                      })
                    : (this[0] &&
                        ((t = g(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                          .map(function () {
                            for (var e = this; e.firstElementChild; )
                              e = e.firstElementChild;
                            return e;
                          })
                          .append(this)),
                      this);
                },
                wrapInner: function (e) {
                  return g.isFunction(e)
                    ? this.each(function (t) {
                        g(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                        var t = g(this),
                          n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                      });
                },
                wrap: function (e) {
                  var t = g.isFunction(e);
                  return this.each(function (n) {
                    g(this).wrapAll(t ? e.call(this, n) : e);
                  });
                },
                unwrap: function () {
                  return this.parent()
                    .each(function () {
                      g.nodeName(this, "body") ||
                        g(this).replaceWith(this.childNodes);
                    })
                    .end();
                },
              }),
              (g.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0;
              }),
              (g.expr.filters.visible = function (e) {
                return !g.expr.filters.hidden(e);
              });
            var vt = /%20/g,
              yt = /\[\]$/,
              xt = /\r?\n/g,
              bt = /^(?:submit|button|image|reset|file)$/i,
              wt = /^(?:input|select|textarea|keygen)/i;
            function Ct(e, t, n, r) {
              var o;
              if (g.isArray(t))
                g.each(t, function (t, o) {
                  n || yt.test(e)
                    ? r(e, o)
                    : Ct(
                        e + "[" + ("object" == typeof o ? t : "") + "]",
                        o,
                        n,
                        r
                      );
                });
              else if (n || "object" !== g.type(t)) r(e, t);
              else for (o in t) Ct(e + "[" + o + "]", t[o], n, r);
            }
            (g.param = function (e, t) {
              var n,
                r = [],
                o = function (e, t) {
                  (t = g.isFunction(t) ? t() : null == t ? "" : t),
                    (r[r.length] =
                      encodeURIComponent(e) + "=" + encodeURIComponent(t));
                };
              if (
                (void 0 === t &&
                  (t = g.ajaxSettings && g.ajaxSettings.traditional),
                g.isArray(e) || (e.jquery && !g.isPlainObject(e)))
              )
                g.each(e, function () {
                  o(this.name, this.value);
                });
              else for (n in e) Ct(n, e[n], t, o);
              return r.join("&").replace(vt, "+");
            }),
              g.fn.extend({
                serialize: function () {
                  return g.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var e = g.prop(this, "elements");
                    return e ? g.makeArray(e) : this;
                  })
                    .filter(function () {
                      var e = this.type;
                      return (
                        this.name &&
                        !g(this).is(":disabled") &&
                        wt.test(this.nodeName) &&
                        !bt.test(e) &&
                        (this.checked || !Q.test(e))
                      );
                    })
                    .map(function (e, t) {
                      var n = g(this).val();
                      return null == n
                        ? null
                        : g.isArray(n)
                        ? g.map(n, function (e) {
                            return {
                              name: t.name,
                              value: e.replace(xt, "\r\n"),
                            };
                          })
                        : { name: t.name, value: n.replace(xt, "\r\n") };
                    })
                    .get();
                },
              }),
              (g.ajaxSettings.xhr = function () {
                try {
                  return new XMLHttpRequest();
                } catch (e) {}
              });
            var Tt = 0,
              kt = {},
              Nt = { 0: 200, 1223: 204 },
              Et = g.ajaxSettings.xhr();
            r.attachEvent &&
              r.attachEvent("onunload", function () {
                for (var e in kt) kt[e]();
              }),
              (d.cors = !!Et && "withCredentials" in Et),
              (d.ajax = Et = !!Et),
              g.ajaxTransport(function (e) {
                var t;
                if (d.cors || (Et && !e.crossDomain))
                  return {
                    send: function (n, r) {
                      var o,
                        i = e.xhr(),
                        s = ++Tt;
                      if (
                        (i.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                      )
                        for (o in e.xhrFields) i[o] = e.xhrFields[o];
                      for (o in (e.mimeType &&
                        i.overrideMimeType &&
                        i.overrideMimeType(e.mimeType),
                      e.crossDomain ||
                        n["X-Requested-With"] ||
                        (n["X-Requested-With"] = "XMLHttpRequest"),
                      n))
                        i.setRequestHeader(o, n[o]);
                      (t = function (e) {
                        return function () {
                          t &&
                            (delete kt[s],
                            (t = i.onload = i.onerror = null),
                            "abort" === e
                              ? i.abort()
                              : "error" === e
                              ? r(i.status, i.statusText)
                              : r(
                                  Nt[i.status] || i.status,
                                  i.statusText,
                                  "string" == typeof i.responseText
                                    ? { text: i.responseText }
                                    : void 0,
                                  i.getAllResponseHeaders()
                                ));
                        };
                      }),
                        (i.onload = t()),
                        (i.onerror = t("error")),
                        (t = kt[s] = t("abort"));
                      try {
                        i.send((e.hasContent && e.data) || null);
                      } catch (e) {
                        if (t) throw e;
                      }
                    },
                    abort: function () {
                      t && t();
                    },
                  };
              }),
              g.ajaxSetup({
                accepts: {
                  script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /(?:java|ecma)script/ },
                converters: {
                  "text script": function (e) {
                    return g.globalEval(e), e;
                  },
                },
              }),
              g.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1),
                  e.crossDomain && (e.type = "GET");
              }),
              g.ajaxTransport("script", function (e) {
                var t, n;
                if (e.crossDomain)
                  return {
                    send: function (r, o) {
                      (t = g("<script>")
                        .prop({
                          async: !0,
                          charset: e.scriptCharset,
                          src: e.url,
                        })
                        .on(
                          "load error",
                          (n = function (e) {
                            t.remove(),
                              (n = null),
                              e && o("error" === e.type ? 404 : 200, e.type);
                          })
                        )),
                        h.head.appendChild(t[0]);
                    },
                    abort: function () {
                      n && n();
                    },
                  };
              });
            var St = [],
              jt = /(=)\?(?=&|$)|\?\?/;
            g.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var e = St.pop() || g.expando + "_" + tt++;
                return (this[e] = !0), e;
              },
            }),
              g.ajaxPrefilter("json jsonp", function (e, t, n) {
                var o,
                  i,
                  s,
                  a =
                    !1 !== e.jsonp &&
                    (jt.test(e.url)
                      ? "url"
                      : "string" == typeof e.data &&
                        !(e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                        jt.test(e.data) &&
                        "data");
                if (a || "jsonp" === e.dataTypes[0])
                  return (
                    (o = e.jsonpCallback =
                      g.isFunction(e.jsonpCallback)
                        ? e.jsonpCallback()
                        : e.jsonpCallback),
                    a
                      ? (e[a] = e[a].replace(jt, "$1" + o))
                      : !1 !== e.jsonp &&
                        (e.url +=
                          (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                    (e.converters["script json"] = function () {
                      return s || g.error(o + " was not called"), s[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = r[o]),
                    (r[o] = function () {
                      s = arguments;
                    }),
                    n.always(function () {
                      (r[o] = i),
                        e[o] &&
                          ((e.jsonpCallback = t.jsonpCallback), St.push(o)),
                        s && g.isFunction(i) && i(s[0]),
                        (s = i = void 0);
                    }),
                    "script"
                  );
              }),
              (g.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && ((n = t), (t = !1)), (t = t || h);
                var r = k.exec(e),
                  o = !n && [];
                return r
                  ? [t.createElement(r[1])]
                  : ((r = g.buildFragment([e], t, o)),
                    o && o.length && g(o).remove(),
                    g.merge([], r.childNodes));
              });
            var Dt = g.fn.load;
            (g.fn.load = function (e, t, n) {
              if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
              var r,
                o,
                i,
                s = this,
                a = e.indexOf(" ");
              return (
                a >= 0 && ((r = g.trim(e.slice(a))), (e = e.slice(0, a))),
                g.isFunction(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                s.length > 0 &&
                  g
                    .ajax({ url: e, type: o, dataType: "html", data: t })
                    .done(function (e) {
                      (i = arguments),
                        s.html(
                          r ? g("<div>").append(g.parseHTML(e)).find(r) : e
                        );
                    })
                    .complete(
                      n &&
                        function (e, t) {
                          s.each(n, i || [e.responseText, t, e]);
                        }
                    ),
                this
              );
            }),
              g.each(
                [
                  "ajaxStart",
                  "ajaxStop",
                  "ajaxComplete",
                  "ajaxError",
                  "ajaxSuccess",
                  "ajaxSend",
                ],
                function (e, t) {
                  g.fn[t] = function (e) {
                    return this.on(t, e);
                  };
                }
              ),
              (g.expr.filters.animated = function (e) {
                return g.grep(g.timers, function (t) {
                  return e === t.elem;
                }).length;
              });
            var _t = r.document.documentElement;
            function At(e) {
              return g.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
            }
            (g.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  s,
                  a,
                  l,
                  c = g.css(e, "position"),
                  u = g(e),
                  p = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (i = g.css(e, "top")),
                  (l = g.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (i + l).indexOf("auto") > -1
                    ? ((s = (r = u.position()).top), (o = r.left))
                    : ((s = parseFloat(i) || 0), (o = parseFloat(l) || 0)),
                  g.isFunction(t) && (t = t.call(e, n, a)),
                  null != t.top && (p.top = t.top - a.top + s),
                  null != t.left && (p.left = t.left - a.left + o),
                  "using" in t ? t.using.call(e, p) : u.css(p);
              },
            }),
              g.fn.extend({
                offset: function (e) {
                  if (arguments.length)
                    return void 0 === e
                      ? this
                      : this.each(function (t) {
                          g.offset.setOffset(this, e, t);
                        });
                  var t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 },
                    i = r && r.ownerDocument;
                  return i
                    ? ((t = i.documentElement),
                      g.contains(t, r)
                        ? (typeof r.getBoundingClientRect !== Y &&
                            (o = r.getBoundingClientRect()),
                          (n = At(i)),
                          {
                            top: o.top + n.pageYOffset - t.clientTop,
                            left: o.left + n.pageXOffset - t.clientLeft,
                          })
                        : o)
                    : void 0;
                },
                position: function () {
                  if (this[0]) {
                    var e,
                      t,
                      n = this[0],
                      r = { top: 0, left: 0 };
                    return (
                      "fixed" === g.css(n, "position")
                        ? (t = n.getBoundingClientRect())
                        : ((e = this.offsetParent()),
                          (t = this.offset()),
                          g.nodeName(e[0], "html") || (r = e.offset()),
                          (r.top += g.css(e[0], "borderTopWidth", !0)),
                          (r.left += g.css(e[0], "borderLeftWidth", !0))),
                      {
                        top: t.top - r.top - g.css(n, "marginTop", !0),
                        left: t.left - r.left - g.css(n, "marginLeft", !0),
                      }
                    );
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var e = this.offsetParent || _t;
                      e &&
                      !g.nodeName(e, "html") &&
                      "static" === g.css(e, "position");

                    )
                      e = e.offsetParent;
                    return e || _t;
                  });
                },
              }),
              g.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (e, t) {
                  var n = "pageYOffset" === t;
                  g.fn[e] = function (o) {
                    return M(
                      this,
                      function (e, o, i) {
                        var s = At(e);
                        if (void 0 === i) return s ? s[t] : e[o];
                        s
                          ? s.scrollTo(
                              n ? r.pageXOffset : i,
                              n ? i : r.pageYOffset
                            )
                          : (e[o] = i);
                      },
                      e,
                      o,
                      arguments.length,
                      null
                    );
                  };
                }
              ),
              g.each(["top", "left"], function (e, t) {
                g.cssHooks[t] = Ee(d.pixelPosition, function (e, n) {
                  if (n)
                    return (
                      (n = Ne(e, t)), Te.test(n) ? g(e).position()[t] + "px" : n
                    );
                });
              }),
              g.each({ Height: "height", Width: "width" }, function (e, t) {
                g.each(
                  { padding: "inner" + e, content: t, "": "outer" + e },
                  function (n, r) {
                    g.fn[r] = function (r, o) {
                      var i = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                      return M(
                        this,
                        function (t, n, r) {
                          var o;
                          return g.isWindow(t)
                            ? t.document.documentElement["client" + e]
                            : 9 === t.nodeType
                            ? ((o = t.documentElement),
                              Math.max(
                                t.body["scroll" + e],
                                o["scroll" + e],
                                t.body["offset" + e],
                                o["offset" + e],
                                o["client" + e]
                              ))
                            : void 0 === r
                            ? g.css(t, n, s)
                            : g.style(t, n, r, s);
                        },
                        t,
                        i ? r : void 0,
                        i,
                        null
                      );
                    };
                  }
                );
              }),
              (g.fn.size = function () {
                return this.length;
              }),
              (g.fn.andSelf = g.fn.addBack),
              void 0 ===
                (n = function () {
                  return g;
                }.apply(t, [])) || (e.exports = n);
            var Ht = r.jQuery,
              Lt = r.$;
            return (
              (g.noConflict = function (e) {
                return (
                  r.$ === g && (r.$ = Lt),
                  e && r.jQuery === g && (r.jQuery = Ht),
                  g
                );
              }),
              typeof o === Y && (r.jQuery = r.$ = g),
              g
            );
          }),
          "object" == typeof e.exports
            ? (e.exports = r.document
                ? o(r, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return o(e);
                  })
            : o(r);
      },
      648: (e, t, n) => {
        n(880), n(170), n(178), n(306);
      },
      182: (e) => {
        e.exports = {
          name: "Browsec",
          browsec: {
            apiPrefix: "https://d1blmth2c5vbem.cloudfront.net/v1/",
            locationApiPrefix: "http://d2nib9hpvmumkf.cloudfront.net/v1/",
          },
          ga: {
            enabled: !0,
            extension_id: "omghfjlpggmjjaagoclmmobgdodcjboh",
            tracking_id: "UA-43024042-1",
          },
          proxy: {
            defaultCountry: "nl",
            settings: {
              version: 4,
              countries: {
                nl: {
                  servers: [
                    {
                      host: "nl1.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl2.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl3.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl4.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl5.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl6.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl7.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl8.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl9.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl10.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl11.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl12.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl13.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl14.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl15.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl16.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl17.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl18.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl19.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl20.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "nl22.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                  ],
                },
                sg: {
                  servers: [
                    {
                      host: "sg1.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg2.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg3.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg4.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg5.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg6.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg7.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg8.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg9.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg10.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "sg11.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                  ],
                },
                uk: {
                  servers: [
                    {
                      host: "uk1.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk2.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk3.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk4.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk5.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk6.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk7.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk8.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk9.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk10.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk11.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk12.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "uk13.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                  ],
                },
                us: {
                  servers: [
                    {
                      host: "us1.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us2.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us3.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us4.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us5.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us6.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us7.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us8.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us9.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us10.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us11.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us12.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us13.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us14.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us15.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us16.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us17.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us18.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us19.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us20.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us21.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us22.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us23.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us24.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                    {
                      host: "us25.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                  ],
                },
                us_test: {
                  hidden: !0,
                  servers: [
                    {
                      host: "us-test-1.postls.com",
                      port: 443,
                      alt_ports: [444, 8443],
                    },
                  ],
                },
              },
            },
          },
        };
      },
      817: (e, t, n) => {
        var r = n(182).ga;
        if (r.enabled) {
          (n.g._gaq = n.g._gaq || []),
            _gaq.push(["_setAccount", r.tracking_id]),
            _gaq.push(["_trackPageview"]);
          var o = {
            trackEvent: function (e, t, n, o, i) {
              console.log("Track event: " + JSON.stringify([e, t, n, o, i])),
                chrome.i18n.getMessage("@@extension_id") === r.extension_id &&
                  _gaq.push(["_trackEvent", e, t, n, o, i]);
            },
          };
        } else
          o = {
            trackEvent: function () {
              console.log("ga.trackEvent", "[DISABLED]", arguments);
            },
          };
        e.exports = o;
      },
      940: (e, t, n) => {
        function r(e) {
          return e.replace(/__MSG_(.+)__/g, function (e, t) {
            return chrome.i18n.getMessage(t);
          });
        }
        n(755)(document).ready(function () {
          (document.title = r(document.title)),
            (document.getElementsByTagName("body")[0].innerHTML = r(
              document.getElementsByTagName("body")[0].innerHTML
            ));
        });
      },
      423: (e, t, n) => {
        var r = (jQuery = n(755));
        r(function () {
          r("select").size() &&
            (r("select").not(".default").select(),
            r(".selectmenu-menu .unable").click(function () {
              return !1;
            }));
        }),
          (r.fn.select = function (e) {
            var t = r.fn.select.method,
              n = jQuery.Event("itemClick"),
              o = jQuery.Event("selectReady");
            if (
              (jQuery.Event("enabled"),
              jQuery.Event("disabled"),
              jQuery.Event("destroyed"),
              "string" == typeof e && e in r.fn.select.method)
            ) {
              var i = r(this);
              return t[e](i, arguments[1]), r(this);
            }
            "method" in r.fn.select ||
              ((r.fn.select.method = {
                destroy: function (t) {
                  if (!t.data("customized"))
                    throw new Error("объект не проинициализирован");
                  t.off("change" + e.namespace),
                    t.each(function () {
                      var e = r(this);
                      e.data("customSelect").remove(),
                        r(document).off(
                          "mousedown",
                          e.data("mousedownHandler")
                        ),
                        r(window).off("resize", e.data("resizeHandler"));
                    }),
                    t.removeData(),
                    t.trigger("destroyed");
                },
                enable: function (t) {
                  t.data("disable") &&
                    (t.attr("disabled", !1),
                    t
                      .data("customSelect")
                      .first()
                      .on("click" + e.namespace, t.data("openerHandler"))
                      .removeClass("disabled"),
                    t.trigger("enabled"));
                },
                disable: function (e) {
                  e.data("disable") ||
                    (e.data("disable", !0),
                    e.attr("disabled", !0),
                    e.data(
                      "openerHandler",
                      r._data(e.data("customSelect").first().get(0), "events")
                        .click[0].handler
                    ),
                    e
                      .data("customSelect")
                      .first()
                      .off("click")
                      .addClass("disabled"),
                    e.trigger("disabled"));
                },
                pick: function (t, n) {
                  t.each(function () {
                    this.selectedIndex = n;
                  }),
                    t.trigger("change" + e.namespace);
                },
              }),
              (t = r.fn.select.method)),
              (e = r.extend(
                {
                  list: "ul",
                  namespace: ".select",
                  item: "li",
                  itemHTML: "li span",
                  openerClass: "selectmenu",
                  icoClass: "selectmenu-icon",
                  selectedClass: "selectmenu-status",
                  activeItemClass: "active",
                  activeOpenerClass: "active",
                  dropDownClass: "selectmenu-menu",
                  style: "dropdown",
                  transferClass: !0,
                  dropdownHasBorder: !0,
                  hasIcons: !0,
                  resizable: !1,
                  triggerEvents: !0,
                },
                e
              )),
              (i = []);
            var s = r("body"),
              a = r(
                '<a class="' +
                  e.openerClass +
                  '"><span class="' +
                  e.icoClass +
                  '"></span><span class="' +
                  e.selectedClass +
                  '"></span></a>'
              ),
              l = r(
                "<div class=" +
                  e.dropDownClass +
                  '><div class="select-top"><div class="select-l"></div><div class="select-r"></div></div><div class="select-c"><div class="c appendHere"></div></div><div class="select-bottom"><div class="select-l"></div><div class="select-r"></div></div></div>'
              );
            if (
              (r(this).each(function (e) {
                r(this).data("customized") || i.push(this);
              }),
              !i.length)
            )
              throw Error(
                'селектор $("' + r(this).selector + '") ничего не возвратил'
              );
            r(i).each(function () {
              var t = a.clone(),
                i = r(this),
                c = i.find("option[title]").text(),
                u = i
                  .find("option[title]")
                  .attr("disabled", !0)
                  .end()
                  .find("option"),
                p = u.size() - 1,
                f = l.clone(),
                d = e.itemHTML.split(" "),
                h = d.length >= 2,
                m = "<" + e.list + ">";
              i.find("option").each(function (t, n) {
                if (r(this).attr("title"))
                  m +=
                    "<" +
                    e.item +
                    " class='title' style='display:none;'>" +
                    (n.childNodes.length > 0 ? n.childNodes[0].nodeValue : "") +
                    "</" +
                    e.item +
                    ">";
                else if (h) {
                  for (var o = "", i = d.length - 1; 0 != i; i--)
                    o
                      ? 0 != i &&
                        d.length > 2 &&
                        (o = "<" + d[i] + ">" + o + "</" + d[i] + ">")
                      : (o +=
                          "<" +
                          d[i] +
                          ">" +
                          (n.childNodes.length > 0
                            ? n.childNodes[0].nodeValue
                            : "") +
                          "</" +
                          d[i] +
                          ">");
                  (o = "<" + d[0] + ">" + o + "</" + d[0] + ">"), (m += o);
                } else
                  m +=
                    "<" +
                    e.item +
                    ">" +
                    (n.childNodes.length > 0 ? n.childNodes[0].nodeValue : "") +
                    "</" +
                    e.item +
                    ">";
                t == p && (m += "</" + e.list + ">");
              }),
                (m = r(m)),
                (f = f
                  .find(".appendHere")
                  .removeClass("appendHere")
                  .append(m)
                  .end()),
                t.insertAfter(i),
                t
                  .find("." + e.selectedClass)
                  .text(i.find("option:selected").text()),
                s.append(f),
                e.dropdownHasBorder
                  ? f.width(t.width())
                  : f.width(t.outerWidth()),
                e.transferClass &&
                  (t.addClass(t.attr("class") + " " + i.attr("class")),
                  f.addClass(f.attr("class") + " " + i.attr("class"))),
                r(this).data("customSelect", t.add(f)),
                r(this).data("customized", !0);
              var g = m.find(">" + e.item);
              function v() {
                if ("dropdown" == e.style) {
                  var n = t.offset().top + t.outerHeight(),
                    r = t.offset().left;
                  f.css({ top: n, left: r });
                } else {
                  var o = g.eq(i.get(0).selectedIndex);
                  (o = o.hasClass("title") ? o.next() : o),
                    (n = t.offset().top - o.position().top),
                    (r = t.offset().left),
                    f.css({ top: n, left: r });
                }
              }
              f.outerWidth(),
                f.outerHeight(),
                (selectedByHover = ""),
                (selected = ""),
                e.resizable
                  ? r(window)
                      .on("resize.opener", function () {
                        e.dropdownHasBorder
                          ? f.width(t.width())
                          : f.width(t.outerWidth());
                      })
                      .trigger("resize.opener")
                  : (t.width(i.outerWidth()),
                    e.dropdownHasBorder
                      ? f.width(t.width())
                      : f.width(t.outerWidth())),
                c &&
                  (t.find("." + e.selectedClass).text(c),
                  i.trigger("change" + e.namespace, [
                    u.filter(":selected").index(),
                  ])),
                i.on("change" + e.namespace, function (n, r, o, s) {
                  s ||
                    (r || 0 === r || (r = this.selectedIndex),
                    (this.selectedIndex = r),
                    g
                      .removeClass(e.activeItemClass)
                      .eq(r)
                      .addClass(e.activeItemClass),
                    (selected = u.eq(r)),
                    t.find("." + e.selectedClass).text(selected.text()),
                    o || (f.hide(), t.removeClass(e.activeOpenerClass)),
                    i.trigger("change", [null, null, !0]));
                }),
                e.hasIcons &&
                  (u.each(function (e) {
                    g.eq(e).addClass(this.className).prepend("<span></span>");
                  }),
                  i.on("change" + e.namespace, function (n, r, o, i) {
                    i ||
                      t
                        .find("." + e.selectedClass)
                        .prepend(
                          '<span class="' + selected.attr("class") + '"></span>'
                        );
                  }),
                  t
                    .find("." + e.selectedClass)
                    .prepend(
                      '<span class="' +
                        u.filter(":selected").attr("class") +
                        '"></span>'
                    )),
                i.hide(),
                g.click(function (n) {
                  if (r(this).hasClass("unable")) return !1;
                  r(this).hasClass(e.activeItemClass) ||
                    i.trigger("change" + e.namespace, [r(this).index()]),
                    f.hide(),
                    t.removeClass(e.activeOpenerClass);
                }),
                t.click(function (n) {
                  f.is(":hidden")
                    ? (f.show(), t.addClass(e.activeOpenerClass), v())
                    : (f.hide(), t.removeClass(e.activeOpenerClass));
                }),
                i.data("resizeHandler", function () {
                  f.is(":visible") && v();
                }),
                i.data("mousedownHandler", function (n) {
                  r(n.target).closest(f).size() ||
                    r(n.target).closest(t).size() ||
                    (f.hide(), t.removeClass(e.activeOpenerClass));
                }),
                r(window).on("resize", i.data("resizeHandler")),
                r(document).on("mousedown", i.data("mousedownHandler")),
                e.triggerEvents &&
                  (g.click(function (e) {
                    i.trigger(n, [r(this).text()]);
                  }),
                  i.trigger(o, [f])),
                i.is(":disabled") && i.select("disable");
            });
          });
      },
      846: (e) => {
        "use strict";
        const t = (function () {
          var e,
            t,
            n = ["webkit", "Moz", "ms", "O"],
            r = {};
          function o(e, t) {
            var n,
              r = document.createElement(e || "div");
            for (n in t) r[n] = t[n];
            return r;
          }
          function i(e) {
            for (var t = 1, n = arguments.length; t < n; t++)
              e.appendChild(arguments[t]);
            return e;
          }
          function s(n, o, i, s) {
            var a = ["opacity", o, ~~(100 * n), i, s].join("-"),
              l = 0.01 + (i / s) * 100,
              c = Math.max(1 - ((1 - n) / o) * (100 - l), n),
              u = e.substring(0, e.indexOf("Animation")).toLowerCase(),
              p = (u && "-" + u + "-") || "";
            return (
              r[a] ||
                (t.insertRule(
                  "@" +
                    p +
                    "keyframes " +
                    a +
                    "{0%{opacity:" +
                    c +
                    "}" +
                    l +
                    "%{opacity:" +
                    n +
                    "}" +
                    (l + 0.01) +
                    "%{opacity:1}" +
                    ((l + o) % 100) +
                    "%{opacity:" +
                    n +
                    "}100%{opacity:" +
                    c +
                    "}}",
                  t.cssRules.length
                ),
                (r[a] = 1)),
              a
            );
          }
          function a(e, t) {
            var r,
              o,
              i = e.style;
            if (void 0 !== i[(t = t.charAt(0).toUpperCase() + t.slice(1))])
              return t;
            for (o = 0; o < n.length; o++)
              if (void 0 !== i[(r = n[o] + t)]) return r;
          }
          function l(e, t) {
            for (var n in t) e.style[a(e, n) || n] = t[n];
            return e;
          }
          function c(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) void 0 === e[r] && (e[r] = n[r]);
            }
            return e;
          }
          function u(e, t) {
            return "string" == typeof e ? e : e[t % e.length];
          }
          var p,
            f = {
              lines: 12,
              length: 7,
              width: 5,
              radius: 10,
              scale: 1,
              corners: 1,
              color: "#000",
              opacity: 1 / 4,
              rotate: 0,
              direction: 1,
              speed: 1,
              trail: 100,
              fps: 20,
              zIndex: 2e9,
              className: "spinner",
              top: "50%",
              left: "50%",
              shadow: !1,
              hwaccel: !1,
              position: "absolute",
            };
          function d(e) {
            this.opts = c(e || {}, d.defaults, f);
          }
          if (
            ((d.defaults = {}),
            c(d.prototype, {
              spin: function (t) {
                this.stop();
                var n = this,
                  r = n.opts,
                  i = (n.el = o(null, { className: r.className }));
                if (
                  (l(i, {
                    position: r.position,
                    width: 0,
                    zIndex: r.zIndex,
                    left: r.left,
                    top: r.top,
                  }),
                  t && t.insertBefore(i, t.firstChild || null),
                  i.setAttribute("role", "progressbar"),
                  n.lines(i, n.opts),
                  !e)
                ) {
                  var s,
                    a = 0,
                    c = ((r.lines - 1) * (1 - r.direction)) / 2,
                    u = r.fps,
                    p = u / r.speed,
                    f = (1 - r.opacity) / ((p * r.trail) / 100),
                    d = p / r.lines;
                  !(function e() {
                    a++;
                    for (var t = 0; t < r.lines; t++)
                      (s = Math.max(
                        1 - ((a + (r.lines - t) * d) % p) * f,
                        r.opacity
                      )),
                        n.opacity(i, t * r.direction + c, s, r);
                    n.timeout = n.el && setTimeout(e, ~~(1e3 / u));
                  })();
                }
                return n;
              },
              stop: function () {
                var e = this.el;
                return (
                  e &&
                    (clearTimeout(this.timeout),
                    e.parentNode && e.parentNode.removeChild(e),
                    (this.el = void 0)),
                  this
                );
              },
              lines: function (t, n) {
                var r,
                  a = 0,
                  c = ((n.lines - 1) * (1 - n.direction)) / 2;
                function p(e, t) {
                  return l(o(), {
                    position: "absolute",
                    width: n.scale * (n.length + n.width) + "px",
                    height: n.scale * n.width + "px",
                    background: e,
                    boxShadow: t,
                    transformOrigin: "left",
                    transform:
                      "rotate(" +
                      ~~((360 / n.lines) * a + n.rotate) +
                      "deg) translate(" +
                      n.scale * n.radius +
                      "px,0)",
                    borderRadius: ((n.corners * n.scale * n.width) >> 1) + "px",
                  });
                }
                for (; a < n.lines; a++)
                  (r = l(o(), {
                    position: "absolute",
                    top: 1 + ~((n.scale * n.width) / 2) + "px",
                    transform: n.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: n.opacity,
                    animation:
                      e &&
                      s(n.opacity, n.trail, c + a * n.direction, n.lines) +
                        " " +
                        1 / n.speed +
                        "s linear infinite",
                  })),
                    n.shadow &&
                      i(r, l(p("#000", "0 0 4px #000"), { top: "2px" })),
                    i(t, i(r, p(u(n.color, a), "0 0 1px rgba(0,0,0,.1)")));
                return t;
              },
              opacity: function (e, t, n) {
                t < e.childNodes.length && (e.childNodes[t].style.opacity = n);
              },
            }),
            "undefined" != typeof document)
          ) {
            (p = o("style", { type: "text/css" })),
              i(document.getElementsByTagName("head")[0], p),
              (t = p.sheet || p.styleSheet);
            var h = l(o("group"), { behavior: "url(#default#VML)" });
            !a(h, "transform") && h.adj
              ? (function () {
                  function e(e, t) {
                    return o(
                      "<" +
                        e +
                        ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
                      t
                    );
                  }
                  t.addRule(".spin-vml", "behavior:url(#default#VML)"),
                    (d.prototype.lines = function (t, n) {
                      var r = n.scale * (n.length + n.width),
                        o = 2 * n.scale * r;
                      function s() {
                        return l(
                          e("group", {
                            coordsize: o + " " + o,
                            coordorigin: -r + " " + -r,
                          }),
                          { width: o, height: o }
                        );
                      }
                      var a,
                        c = -(n.width + n.length) * n.scale * 2 + "px",
                        p = l(s(), { position: "absolute", top: c, left: c });
                      function f(t, o, a) {
                        i(
                          p,
                          i(
                            l(s(), {
                              rotation: (360 / n.lines) * t + "deg",
                              left: ~~o,
                            }),
                            i(
                              l(e("roundrect", { arcsize: n.corners }), {
                                width: r,
                                height: n.scale * n.width,
                                left: n.scale * n.radius,
                                top: (-n.scale * n.width) >> 1,
                                filter: a,
                              }),
                              e("fill", {
                                color: u(n.color, t),
                                opacity: n.opacity,
                              }),
                              e("stroke", { opacity: 0 })
                            )
                          )
                        );
                      }
                      if (n.shadow)
                        for (a = 1; a <= n.lines; a++)
                          f(
                            a,
                            -2,
                            "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"
                          );
                      for (a = 1; a <= n.lines; a++) f(a);
                      return i(t, p);
                    }),
                    (d.prototype.opacity = function (e, t, n, r) {
                      var o = e.firstChild;
                      (r = (r.shadow && r.lines) || 0),
                        o &&
                          t + r < o.childNodes.length &&
                          (o =
                            (o = (o = o.childNodes[t + r]) && o.firstChild) &&
                            o.firstChild) &&
                          (o.opacity = n);
                    });
                })()
              : (e = a(h, "animation"));
          }
          return d;
        })();
        e.exports = t;
      },
      170: () => {
        String.prototype.endsWith ||
          (String.prototype.endsWith = function (e) {
            return -1 !== this.indexOf(e, this.length - e.length);
          });
      },
      306: (e, t, n) => {
        var r = n(817);
        window.onerror = function (e, t, n) {
          try {
            console.error(
              "message: {0}\nfilename: {1}\nlineno: {2}".format(e, t, n)
            );
            var o = "n/a";
            chrome.runtime.getManifest() &&
              (o = chrome.runtime.getManifest().version),
              r.trackEvent("error", o, "{0} at {1}:{2}".format(e, t, n), 0, !1);
          } catch (e) {
            console.error(e);
          }
          return !1;
        };
      },
      880: (e) => {
        function t(e, t) {
          return e.replace(/{(\d+)}/g, function (e, n) {
            return void 0 !== t[n] ? t[n] : e;
          });
        }
        String.prototype.format ||
          (String.prototype.format = function () {
            return t(this, arguments);
          }),
          (e.exports = t);
      },
      178: () => {
        String.prototype.startsWith ||
          (String.prototype.startsWith = function (e) {
            return 0 === this.indexOf(e);
          });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      n(648), n(940), n(423);
      var e = n(846),
        t = n(755),
        r = n(817),
        o = chrome.extension.getBackgroundPage(),
        i = o.proxy,
        s = o.browsec;
      function a() {
        var e = i.connected();
        console.log("Update page with connected = " + e),
          e
            ? (t(".content-box-other").addClass("active"),
              t("select option[value='" + e + "']").attr(
                "selected",
                "selected"
              ),
              t("select").select("destroy").select())
            : t(".content-box-other").removeClass("active");
      }
      t(document).ready(function () {
        console.time("ipinfo"),
          s.ipInfo(function (e) {
            t(".country").html(
              chrome.i18n.getMessage("popup_your_location") + e.country_name
            );
          }),
          console.timeEnd("ipinfo"),
          console.time(".link-on click"),
          t(".link-on").click(function () {
            var e = i.lastConnected();
            console.log("Set last connected proxy: " + e),
              i.setProxySettings(e, function () {
                a();
              }),
              r.trackEvent("extension", "enable");
          }),
          console.timeEnd(".link-on click"),
          console.time(".link-off click"),
          t(".link-off").click(function () {
            i.clearProxySettings(function () {
              a();
            }),
              r.trackEvent("extension", "disable");
          }),
          console.timeEnd(".link-off click"),
          console.time("update page"),
          a(),
          console.timeEnd("update page"),
          console.time("select change"),
          t("select").change(function () {
            var e = t("select option:selected").val();
            i.setProxySettings(e),
              r.trackEvent("extension", "change_country", e);
          }),
          console.timeEnd("select change"),
          t(".link-appstore").click(function (e) {
            r.trackEvent("extension", "appstore", e.target.text);
          });
        var n = new e({ scale: 0.5 }).spin(
          document.querySelector(".selectmenu")
        );
        i.countryCodes(function (e) {
          n.stop();
          var o = [];
          console.time("update select"),
            e.forEach(function (e) {
              var t = chrome.i18n.getMessage("country_name_" + e.toUpperCase());
              if ("" === t || void 0 === t) {
                var n = "n/a";
                "function" == typeof chrome.i18n.getUILanguage &&
                  (n = chrome.i18n.getUILanguage());
                var i = "n/a";
                chrome.runtime.getManifest() &&
                  (i = chrome.runtime.getManifest().version);
                var s =
                  "failed to look up country name for: " +
                  e +
                  " with locale: " +
                  n +
                  " at popup.js";
                console.warn(s),
                  r.trackEvent("error", i, s, 0, !1),
                  (t = e.toUpperCase() || "N/A");
              }
              o.push({ code: e, name: t });
            }),
            o.sort(function (e, t) {
              return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
            });
          var i = t("select").empty();
          t.each(o, function (e, n) {
            i.append(t("<option />").val(n.code).text(n.name));
          }),
            console.timeEnd("update select"),
            a();
        });
      });
    })();
})();
