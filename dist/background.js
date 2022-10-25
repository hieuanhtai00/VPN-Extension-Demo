/*! For license information please see background.js.LICENSE.txt */
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
              g = "2.1.4",
              m = function (e, t) {
                return new m.fn.init(e, t);
              },
              v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
              y = /^-ms-/,
              x = /-([\da-z])/gi,
              b = function (e, t) {
                return t.toUpperCase();
              };
            function w(e) {
              var t = "length" in e && e.length,
                n = m.type(e);
              return (
                "function" !== n &&
                !m.isWindow(e) &&
                (!(1 !== e.nodeType || !t) ||
                  "array" === n ||
                  0 === t ||
                  ("number" == typeof t && t > 0 && t - 1 in e))
              );
            }
            (m.fn = m.prototype =
              {
                jquery: g,
                constructor: m,
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
                  var t = m.merge(this.constructor(), e);
                  return (t.prevObject = this), (t.context = this.context), t;
                },
                each: function (e, t) {
                  return m.each(this, e, t);
                },
                map: function (e) {
                  return this.pushStack(
                    m.map(this, function (t, n) {
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
              (m.extend = m.fn.extend =
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
                      "object" == typeof s || m.isFunction(s) || (s = {}),
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
                            (m.isPlainObject(r) || (o = m.isArray(r)))
                              ? (o
                                  ? ((o = !1), (i = n && m.isArray(n) ? n : []))
                                  : (i = n && m.isPlainObject(n) ? n : {}),
                                (s[t] = m.extend(c, i, r)))
                              : void 0 !== r && (s[t] = r));
                  return s;
                }),
              m.extend({
                expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                  throw new Error(e);
                },
                noop: function () {},
                isFunction: function (e) {
                  return "function" === m.type(e);
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                  return null != e && e === e.window;
                },
                isNumeric: function (e) {
                  return !m.isArray(e) && e - parseFloat(e) + 1 >= 0;
                },
                isPlainObject: function (e) {
                  return !(
                    "object" !== m.type(e) ||
                    e.nodeType ||
                    m.isWindow(e) ||
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
                  (e = m.trim(e)) &&
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
                        ? m.merge(n, "string" == typeof e ? [e] : e)
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
                    m.isFunction(e))
                  )
                    return (
                      (r = s.call(arguments, 2)),
                      (o = function () {
                        return e.apply(t || this, r.concat(s.call(arguments)));
                      }),
                      (o.guid = e.guid = e.guid || m.guid++),
                      o
                    );
                },
                now: Date.now,
                support: d,
              }),
              m.each(
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
                g,
                m,
                v,
                y,
                x,
                b = "sizzle" + 1 * new Date(),
                w = e.document,
                C = 0,
                T = 0,
                S = se(),
                k = se(),
                N = se(),
                E = function (e, t) {
                  return e === t && (p = !0), 0;
                },
                _ = 1 << 31,
                j = {}.hasOwnProperty,
                A = [],
                D = A.pop,
                q = A.push,
                L = A.push,
                O = A.slice,
                H = function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                P =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                M = F.replace("w", "w#"),
                I =
                  "\\[[\\x20\\t\\r\\n\\f]*(" +
                  F +
                  ")(?:" +
                  R +
                  "*([*^$|!~]?=)" +
                  R +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  M +
                  "))|)" +
                  R +
                  "*\\]",
                W =
                  ":(" +
                  F +
                  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                  I +
                  ")*)|.*)\\)|)",
                $ = new RegExp(R + "+", "g"),
                B = new RegExp(
                  "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                  "g"
                ),
                U = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                z = new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
                ),
                X = new RegExp(
                  "=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]",
                  "g"
                ),
                J = new RegExp(W),
                V = new RegExp("^" + M + "$"),
                Y = {
                  ID: new RegExp("^#(" + F + ")"),
                  CLASS: new RegExp("^\\.(" + F + ")"),
                  TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                  ATTR: new RegExp("^" + I),
                  PSEUDO: new RegExp("^" + W),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + P + ")$", "i"),
                  needsContext: new RegExp(
                    "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                    "i"
                  ),
                },
                G = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
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
                L.apply((A = O.call(w.childNodes)), w.childNodes),
                  A[w.childNodes.length].nodeType;
              } catch (e) {
                L = {
                  apply: A.length
                    ? function (e, t) {
                        q.apply(e, O.call(t));
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
                if (!o && g) {
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
                  if (n.qsa && (!m || !m.test(e))) {
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
                        h[p] = y + me(h[p]);
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
                return l(e.replace(B, "$1"), t, r, o);
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
                    (~t.sourceIndex || _) - (~e.sourceIndex || _);
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
                      (g = !i(s)),
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
                            if (void 0 !== t.getElementById && g) {
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
                          if (g) return t.getElementsByClassName(e);
                        }),
                      (v = []),
                      (m = []),
                      (n.qsa = K.test(s.querySelectorAll)) &&
                        (le(function (e) {
                          (h.appendChild(e).innerHTML =
                            "<a id='" +
                            b +
                            "'></a><select id='" +
                            b +
                            "-\f]' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                              m.push(
                                "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + P + ")"
                              ),
                            e.querySelectorAll("[id~=" + b + "-]").length ||
                              m.push("~="),
                            e.querySelectorAll(":checked").length ||
                              m.push(":checked"),
                            e.querySelectorAll("a#" + b + "+*").length ||
                              m.push(".#.+[+~]");
                        }),
                        le(function (e) {
                          var t = s.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length &&
                              m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                            e.querySelectorAll(":enabled").length ||
                              m.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            m.push(",.*:");
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
                      (m = m.length && new RegExp(m.join("|"))),
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
                      (E = t
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
                                  ? H(u, e) - H(u, t)
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
                                ? H(u, e) - H(u, t)
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
                  (t = t.replace(X, "='$1']")),
                  n.matchesSelector &&
                    g &&
                    (!v || !v.test(t)) &&
                    (!m || !m.test(t)))
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
                    o && j.call(r.attrHandle, t.toLowerCase())
                      ? o(e, t, !g)
                      : void 0;
                return void 0 !== i
                  ? i
                  : n.attributes || !g
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
                  e.sort(E),
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
                              J.test(n) &&
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
                      var t = S[e + " "];
                      return (
                        t ||
                        ((t = new RegExp(
                          "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)"
                        )) &&
                          S(e, function (e) {
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
                                ? (" " + o.replace($, " ") + " ").indexOf(n) >
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
                              g = i !== s ? "nextSibling" : "previousSibling",
                              m = t.parentNode,
                              v = a && t.nodeName.toLowerCase(),
                              y = !l && !a;
                            if (m) {
                              if (i) {
                                for (; g; ) {
                                  for (p = t; (p = p[g]); )
                                    if (
                                      a
                                        ? p.nodeName.toLowerCase() === v
                                        : 1 === p.nodeType
                                    )
                                      return !1;
                                  h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((h = [s ? m.firstChild : m.lastChild]), s && y)
                              ) {
                                for (
                                  d =
                                    (c =
                                      (u = m[b] || (m[b] = {}))[e] || [])[0] ===
                                      C && c[1],
                                    f = c[0] === C && c[2],
                                    p = d && m.childNodes[d];
                                  (p =
                                    (++d && p && p[g]) ||
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
                                    (++d && p && p[g]) ||
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
                                  e[(r = H(e, i[s]))] = !(n[r] = i[s]);
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
                        r = a(e.replace(B, "$1"));
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
                        V.test(e || "") || ie.error("unsupported lang: " + e),
                        (e = e.replace(ne, re).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = g
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
                      return Q.test(e.nodeName);
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
              function ge() {}
              function me(e) {
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
                      g =
                        i ||
                        (function (e, t, n) {
                          for (var r = 0, o = t.length; r < o; r++)
                            ie(e, t[r], n);
                          return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                      m = !e || (!i && t) ? g : xe(g, f, e, a, l),
                      v = n ? (o || (i ? e : h || r) ? [] : s) : m;
                    if ((n && n(m, v, a, l), r))
                      for (c = xe(v, d), r(c, [], a, l), u = c.length; u--; )
                        (p = c[u]) && (v[d[u]] = !(m[d[u]] = p));
                    if (i) {
                      if (o || e) {
                        if (o) {
                          for (c = [], u = v.length; u--; )
                            (p = v[u]) && c.push((m[u] = p));
                          o(null, (v = []), c, l);
                        }
                        for (u = v.length; u--; )
                          (p = v[u]) &&
                            (c = o ? H(i, p) : f[u]) > -1 &&
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
                        return H(t, e) > -1;
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
                          me(
                            e.slice(0, l - 1).concat({
                              value: " " === e[l - 2].type ? "*" : "",
                            })
                          ).replace(B, "$1"),
                        n,
                        l < o && we(e.slice(l, o)),
                        o < i && we((e = e.slice(o))),
                        o < i && me(e)
                      );
                    }
                    f.push(n);
                  }
                return ye(f);
              }
              return (
                (ge.prototype = r.filters = r.pseudos),
                (r.setFilters = new ge()),
                (s = ie.tokenize =
                  function (e, t) {
                    var n,
                      o,
                      i,
                      s,
                      a,
                      l,
                      c,
                      u = k[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = r.preFilter; a; ) {
                      for (s in ((n && !(o = U.exec(a))) ||
                        (o && (a = a.slice(o[0].length) || a),
                        l.push((i = []))),
                      (n = !1),
                      (o = z.exec(a)) &&
                        ((n = o.shift()),
                        i.push({ value: n, type: o[0].replace(B, " ") }),
                        (a = a.slice(n.length))),
                      r.filter))
                        !(o = Y[s].exec(a)) ||
                          (c[s] && !(o = c[s](o))) ||
                          ((n = o.shift()),
                          i.push({ value: n, type: s, matches: o }),
                          (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? ie.error(e) : k(e, l).slice(0);
                  }),
                (a = ie.compile =
                  function (e, t) {
                    var n,
                      o = [],
                      i = [],
                      a = N[e + " "];
                    if (!a) {
                      for (t || (t = s(e)), n = t.length; n--; )
                        (a = we(t[n]))[b] ? o.push(a) : i.push(a);
                      (a = N(
                        e,
                        (function (e, t) {
                          var n = t.length > 0,
                            o = e.length > 0,
                            i = function (i, s, a, l, u) {
                              var p,
                                f,
                                h,
                                g = 0,
                                m = "0",
                                v = i && [],
                                y = [],
                                x = c,
                                b = i || (o && r.find.TAG("*", u)),
                                w = (C += null == x ? 1 : Math.random() || 0.1),
                                T = b.length;
                              for (
                                u && (c = s !== d && s);
                                m !== T && null != (p = b[m]);
                                m++
                              ) {
                                if (o && p) {
                                  for (f = 0; (h = e[f++]); )
                                    if (h(p, s, a)) {
                                      l.push(p);
                                      break;
                                    }
                                  u && (C = w);
                                }
                                n && ((p = !h && p) && g--, i && v.push(p));
                              }
                              if (((g += m), n && m !== g)) {
                                for (f = 0; (h = t[f++]); ) h(v, y, s, a);
                                if (i) {
                                  if (g > 0)
                                    for (; m--; )
                                      v[m] || y[m] || (y[m] = D.call(l));
                                  y = xe(y);
                                }
                                L.apply(l, y),
                                  u &&
                                    !i &&
                                    y.length > 0 &&
                                    g + t.length > 1 &&
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
                        g &&
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
                          if ((c.splice(l, 1), !(e = i.length && me(c))))
                            return L.apply(o, i), o;
                          break;
                        }
                    }
                    return (
                      (d || a(e, h))(
                        i,
                        t,
                        !g,
                        o,
                        (ee.test(e) && he(t.parentNode)) || t
                      ),
                      o
                    );
                  }),
                (n.sortStable = b.split("").sort(E).join("") === b),
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
                  ce(P, function (e, t, n) {
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
            (m.find = C),
              (m.expr = C.selectors),
              (m.expr[":"] = m.expr.pseudos),
              (m.unique = C.uniqueSort),
              (m.text = C.getText),
              (m.isXMLDoc = C.isXML),
              (m.contains = C.contains);
            var T = m.expr.match.needsContext,
              S = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
              k = /^.[^:#\[\.,]*$/;
            function N(e, t, n) {
              if (m.isFunction(t))
                return m.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                });
              if (t.nodeType)
                return m.grep(e, function (e) {
                  return (e === t) !== n;
                });
              if ("string" == typeof t) {
                if (k.test(t)) return m.filter(t, e, n);
                t = m.filter(t, e);
              }
              return m.grep(e, function (e) {
                return c.call(t, e) >= 0 !== n;
              });
            }
            (m.filter = function (e, t, n) {
              var r = t[0];
              return (
                n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                  ? m.find.matchesSelector(r, e)
                    ? [r]
                    : []
                  : m.find.matches(
                      e,
                      m.grep(t, function (e) {
                        return 1 === e.nodeType;
                      })
                    )
              );
            }),
              m.fn.extend({
                find: function (e) {
                  var t,
                    n = this.length,
                    r = [],
                    o = this;
                  if ("string" != typeof e)
                    return this.pushStack(
                      m(e).filter(function () {
                        for (t = 0; t < n; t++)
                          if (m.contains(o[t], this)) return !0;
                      })
                    );
                  for (t = 0; t < n; t++) m.find(e, o[t], r);
                  return (
                    ((r = this.pushStack(n > 1 ? m.unique(r) : r)).selector =
                      this.selector ? this.selector + " " + e : e),
                    r
                  );
                },
                filter: function (e) {
                  return this.pushStack(N(this, e || [], !1));
                },
                not: function (e) {
                  return this.pushStack(N(this, e || [], !0));
                },
                is: function (e) {
                  return !!N(
                    this,
                    "string" == typeof e && T.test(e) ? m(e) : e || [],
                    !1
                  ).length;
                },
              });
            var E,
              _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            ((m.fn.init = function (e, t) {
              var n, r;
              if (!e) return this;
              if ("string" == typeof e) {
                if (
                  !(n =
                    "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                      ? [null, e, null]
                      : _.exec(e)) ||
                  (!n[1] && t)
                )
                  return !t || t.jquery
                    ? (t || E).find(e)
                    : this.constructor(t).find(e);
                if (n[1]) {
                  if (
                    ((t = t instanceof m ? t[0] : t),
                    m.merge(
                      this,
                      m.parseHTML(
                        n[1],
                        t && t.nodeType ? t.ownerDocument || t : h,
                        !0
                      )
                    ),
                    S.test(n[1]) && m.isPlainObject(t))
                  )
                    for (n in t)
                      m.isFunction(this[n])
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
                : m.isFunction(e)
                ? void 0 !== E.ready
                  ? E.ready(e)
                  : e(m)
                : (void 0 !== e.selector &&
                    ((this.selector = e.selector), (this.context = e.context)),
                  m.makeArray(e, this));
            }).prototype = m.fn),
              (E = m(h));
            var j = /^(?:parents|prev(?:Until|All))/,
              A = { children: !0, contents: !0, next: !0, prev: !0 };
            function D(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
            }
            m.extend({
              dir: function (e, t, n) {
                for (
                  var r = [], o = void 0 !== n;
                  (e = e[t]) && 9 !== e.nodeType;

                )
                  if (1 === e.nodeType) {
                    if (o && m(e).is(n)) break;
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
              m.fn.extend({
                has: function (e) {
                  var t = m(e, this),
                    n = t.length;
                  return this.filter(function () {
                    for (var e = 0; e < n; e++)
                      if (m.contains(this, t[e])) return !0;
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
                          ? m(e, t || this.context)
                          : 0;
                    r < o;
                    r++
                  )
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (
                        n.nodeType < 11 &&
                        (s
                          ? s.index(n) > -1
                          : 1 === n.nodeType && m.find.matchesSelector(n, e))
                      ) {
                        i.push(n);
                        break;
                      }
                  return this.pushStack(i.length > 1 ? m.unique(i) : i);
                },
                index: function (e) {
                  return e
                    ? "string" == typeof e
                      ? c.call(m(e), this[0])
                      : c.call(this, e.jquery ? e[0] : e)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
                },
                add: function (e, t) {
                  return this.pushStack(m.unique(m.merge(this.get(), m(e, t))));
                },
                addBack: function (e) {
                  return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                  );
                },
              }),
              m.each(
                {
                  parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                    return m.dir(e, "parentNode");
                  },
                  parentsUntil: function (e, t, n) {
                    return m.dir(e, "parentNode", n);
                  },
                  next: function (e) {
                    return D(e, "nextSibling");
                  },
                  prev: function (e) {
                    return D(e, "previousSibling");
                  },
                  nextAll: function (e) {
                    return m.dir(e, "nextSibling");
                  },
                  prevAll: function (e) {
                    return m.dir(e, "previousSibling");
                  },
                  nextUntil: function (e, t, n) {
                    return m.dir(e, "nextSibling", n);
                  },
                  prevUntil: function (e, t, n) {
                    return m.dir(e, "previousSibling", n);
                  },
                  siblings: function (e) {
                    return m.sibling((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                    return m.sibling(e.firstChild);
                  },
                  contents: function (e) {
                    return e.contentDocument || m.merge([], e.childNodes);
                  },
                },
                function (e, t) {
                  m.fn[e] = function (n, r) {
                    var o = m.map(this, t, n);
                    return (
                      "Until" !== e.slice(-5) && (r = n),
                      r && "string" == typeof r && (o = m.filter(r, o)),
                      this.length > 1 &&
                        (A[e] || m.unique(o), j.test(e) && o.reverse()),
                      this.pushStack(o)
                    );
                  };
                }
              );
            var q,
              L = /\S+/g,
              O = {};
            function H() {
              h.removeEventListener("DOMContentLoaded", H, !1),
                r.removeEventListener("load", H, !1),
                m.ready();
            }
            (m.Callbacks = function (e) {
              e =
                "string" == typeof e
                  ? O[e] ||
                    (function (e) {
                      var t = (O[e] = {});
                      return (
                        m.each(e.match(L) || [], function (e, n) {
                          t[n] = !0;
                        }),
                        t
                      );
                    })(e)
                  : m.extend({}, e);
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
                        m.each(n, function (n, r) {
                          var o = m.type(r);
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
                        m.each(arguments, function (e, t) {
                          for (var n; (n = m.inArray(t, a, n)) > -1; )
                            a.splice(n, 1), r && (n <= i && i--, n <= s && s--);
                        }),
                      this
                    );
                  },
                  has: function (e) {
                    return e ? m.inArray(e, a) > -1 : !(!a || !a.length);
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
              m.extend({
                Deferred: function (e) {
                  var t = [
                      [
                        "resolve",
                        "done",
                        m.Callbacks("once memory"),
                        "resolved",
                      ],
                      [
                        "reject",
                        "fail",
                        m.Callbacks("once memory"),
                        "rejected",
                      ],
                      ["notify", "progress", m.Callbacks("memory")],
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
                        return m
                          .Deferred(function (n) {
                            m.each(t, function (t, i) {
                              var s = m.isFunction(e[t]) && e[t];
                              o[i[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && m.isFunction(e.promise)
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
                        return null != e ? m.extend(e, r) : r;
                      },
                    },
                    o = {};
                  return (
                    (r.pipe = r.then),
                    m.each(t, function (e, i) {
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
                    l = 1 !== a || (e && m.isFunction(e.promise)) ? a : 0,
                    c = 1 === l ? e : m.Deferred(),
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
                      i[o] && m.isFunction(i[o].promise)
                        ? i[o]
                            .promise()
                            .done(u(o, r, i))
                            .fail(c.reject)
                            .progress(u(o, n, t))
                        : --l;
                  return l || c.resolveWith(r, i), c.promise();
                },
              }),
              (m.fn.ready = function (e) {
                return m.ready.promise().done(e), this;
              }),
              m.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                  e ? m.readyWait++ : m.ready(!0);
                },
                ready: function (e) {
                  (!0 === e ? --m.readyWait : m.isReady) ||
                    ((m.isReady = !0),
                    (!0 !== e && --m.readyWait > 0) ||
                      (q.resolveWith(h, [m]),
                      m.fn.triggerHandler &&
                        (m(h).triggerHandler("ready"), m(h).off("ready"))));
                },
              }),
              (m.ready.promise = function (e) {
                return (
                  q ||
                    ((q = m.Deferred()),
                    "complete" === h.readyState
                      ? setTimeout(m.ready)
                      : (h.addEventListener("DOMContentLoaded", H, !1),
                        r.addEventListener("load", H, !1))),
                  q.promise(e)
                );
              }),
              m.ready.promise();
            var P = (m.access = function (e, t, n, r, o, i, s) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === m.type(n))
                for (a in ((o = !0), n)) m.access(e, t, a, n[a], !0, i, s);
              else if (
                void 0 !== r &&
                ((o = !0),
                m.isFunction(r) || (s = !0),
                c &&
                  (s
                    ? (t.call(e, r), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(m(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
              return o ? e : c ? t.call(e) : l ? t(e[0], n) : i;
            });
            function R() {
              Object.defineProperty((this.cache = {}), 0, {
                get: function () {
                  return {};
                },
              }),
                (this.expando = m.expando + R.uid++);
            }
            (m.acceptData = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            }),
              (R.uid = 1),
              (R.accepts = m.acceptData),
              (R.prototype = {
                key: function (e) {
                  if (!R.accepts(e)) return 0;
                  var t = {},
                    n = e[this.expando];
                  if (!n) {
                    n = R.uid++;
                    try {
                      (t[this.expando] = { value: n }),
                        Object.defineProperties(e, t);
                    } catch (r) {
                      (t[this.expando] = n), m.extend(e, t);
                    }
                  }
                  return this.cache[n] || (this.cache[n] = {}), n;
                },
                set: function (e, t, n) {
                  var r,
                    o = this.key(e),
                    i = this.cache[o];
                  if ("string" == typeof t) i[t] = n;
                  else if (m.isEmptyObject(i)) m.extend(this.cache[o], t);
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
                      : this.get(e, m.camelCase(t))
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
                    m.isArray(t)
                      ? (r = t.concat(t.map(m.camelCase)))
                      : ((o = m.camelCase(t)),
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
                  return !m.isEmptyObject(this.cache[e[this.expando]] || {});
                },
                discard: function (e) {
                  e[this.expando] && delete this.cache[e[this.expando]];
                },
              });
            var F = new R(),
              M = new R(),
              I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              W = /([A-Z])/g;
            function $(e, t, n) {
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
                          ? m.parseJSON(n)
                          : n));
                  } catch (e) {}
                  M.set(e, t, n);
                } else n = void 0;
              return n;
            }
            m.extend({
              hasData: function (e) {
                return M.hasData(e) || F.hasData(e);
              },
              data: function (e, t, n) {
                return M.access(e, t, n);
              },
              removeData: function (e, t) {
                M.remove(e, t);
              },
              _data: function (e, t, n) {
                return F.access(e, t, n);
              },
              _removeData: function (e, t) {
                F.remove(e, t);
              },
            }),
              m.fn.extend({
                data: function (e, t) {
                  var n,
                    r,
                    o,
                    i = this[0],
                    s = i && i.attributes;
                  if (void 0 === e) {
                    if (
                      this.length &&
                      ((o = M.get(i)),
                      1 === i.nodeType && !F.get(i, "hasDataAttrs"))
                    ) {
                      for (n = s.length; n--; )
                        s[n] &&
                          0 === (r = s[n].name).indexOf("data-") &&
                          ((r = m.camelCase(r.slice(5))), $(i, r, o[r]));
                      F.set(i, "hasDataAttrs", !0);
                    }
                    return o;
                  }
                  return "object" == typeof e
                    ? this.each(function () {
                        M.set(this, e);
                      })
                    : P(
                        this,
                        function (t) {
                          var n,
                            r = m.camelCase(e);
                          if (i && void 0 === t)
                            return void 0 !== (n = M.get(i, e)) ||
                              void 0 !== (n = M.get(i, r)) ||
                              void 0 !== (n = $(i, r, void 0))
                              ? n
                              : void 0;
                          this.each(function () {
                            var n = M.get(this, r);
                            M.set(this, r, t),
                              -1 !== e.indexOf("-") &&
                                void 0 !== n &&
                                M.set(this, e, t);
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
                    M.remove(this, e);
                  });
                },
              }),
              m.extend({
                queue: function (e, t, n) {
                  var r;
                  if (e)
                    return (
                      (t = (t || "fx") + "queue"),
                      (r = F.get(e, t)),
                      n &&
                        (!r || m.isArray(n)
                          ? (r = F.access(e, t, m.makeArray(n)))
                          : r.push(n)),
                      r || []
                    );
                },
                dequeue: function (e, t) {
                  t = t || "fx";
                  var n = m.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = m._queueHooks(e, t);
                  "inprogress" === o && ((o = n.shift()), r--),
                    o &&
                      ("fx" === t && n.unshift("inprogress"),
                      delete i.stop,
                      o.call(
                        e,
                        function () {
                          m.dequeue(e, t);
                        },
                        i
                      )),
                    !r && i && i.empty.fire();
                },
                _queueHooks: function (e, t) {
                  var n = t + "queueHooks";
                  return (
                    F.get(e, n) ||
                    F.access(e, n, {
                      empty: m.Callbacks("once memory").add(function () {
                        F.remove(e, [t + "queue", n]);
                      }),
                    })
                  );
                },
              }),
              m.fn.extend({
                queue: function (e, t) {
                  var n = 2;
                  return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                      ? m.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                          var n = m.queue(this, e, t);
                          m._queueHooks(this, e),
                            "fx" === e &&
                              "inprogress" !== n[0] &&
                              m.dequeue(this, e);
                        })
                  );
                },
                dequeue: function (e) {
                  return this.each(function () {
                    m.dequeue(this, e);
                  });
                },
                clearQueue: function (e) {
                  return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                  var n,
                    r = 1,
                    o = m.Deferred(),
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
                    (n = F.get(i[s], e + "queueHooks")) &&
                      n.empty &&
                      (r++, n.empty.add(a));
                  return a(), o.promise(t);
                },
              });
            var B,
              U,
              z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              X = ["Top", "Right", "Bottom", "Left"],
              J = function (e, t) {
                return (
                  (e = t || e),
                  "none" === m.css(e, "display") ||
                    !m.contains(e.ownerDocument, e)
                );
              },
              V = /^(?:checkbox|radio)$/i;
            (B = h
              .createDocumentFragment()
              .appendChild(h.createElement("div"))),
              (U = h.createElement("input")).setAttribute("type", "radio"),
              U.setAttribute("checked", "checked"),
              U.setAttribute("name", "t"),
              B.appendChild(U),
              (d.checkClone = B.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (B.innerHTML = "<textarea>x</textarea>"),
              (d.noCloneChecked = !!B.cloneNode(!0).lastChild.defaultValue);
            var Y = "undefined";
            d.focusinBubbles = "onfocusin" in r;
            var G = /^key/,
              Q = /^(?:mouse|pointer|contextmenu)|click/,
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
            (m.event = {
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
                  g,
                  v = F.get(e);
                if (v)
                  for (
                    n.handler && ((n = (i = n).handler), (o = i.selector)),
                      n.guid || (n.guid = m.guid++),
                      (l = v.events) || (l = v.events = {}),
                      (s = v.handle) ||
                        (s = v.handle =
                          function (t) {
                            return typeof m !== Y &&
                              m.event.triggered !== t.type
                              ? m.event.dispatch.apply(e, arguments)
                              : void 0;
                          }),
                      c = (t = (t || "").match(L) || [""]).length;
                    c--;

                  )
                    (d = g = (a = Z.exec(t[c]) || [])[1]),
                      (h = (a[2] || "").split(".").sort()),
                      d &&
                        ((p = m.event.special[d] || {}),
                        (d = (o ? p.delegateType : p.bindType) || d),
                        (p = m.event.special[d] || {}),
                        (u = m.extend(
                          {
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext:
                              o && m.expr.match.needsContext.test(o),
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
                        (m.event.global[d] = !0));
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
                  g,
                  v = F.hasData(e) && F.get(e);
                if (v && (l = v.events)) {
                  for (c = (t = (t || "").match(L) || [""]).length; c--; )
                    if (
                      ((d = g = (a = Z.exec(t[c]) || [])[1]),
                      (h = (a[2] || "").split(".").sort()),
                      d)
                    ) {
                      for (
                        p = m.event.special[d] || {},
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
                          (!o && g !== u.origType) ||
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
                          m.removeEvent(e, d, v.handle),
                        delete l[d]);
                    } else for (d in l) m.event.remove(e, d + t[c], n, r, !0);
                  m.isEmptyObject(l) &&
                    (delete v.handle, F.remove(e, "events"));
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
                  g = f.call(e, "type") ? e.type : e,
                  v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                  ((s = a = n = n || h),
                  3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !K.test(g + m.event.triggered) &&
                    (g.indexOf(".") >= 0 &&
                      ((v = g.split(".")), (g = v.shift()), v.sort()),
                    (c = g.indexOf(":") < 0 && "on" + g),
                    ((e = e[m.expando]
                      ? e
                      : new m.Event(g, "object" == typeof e && e)).isTrigger = o
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
                    (t = null == t ? [e] : m.makeArray(t, [e])),
                    (p = m.event.special[g] || {}),
                    o || !p.trigger || !1 !== p.trigger.apply(n, t)))
                ) {
                  if (!o && !p.noBubble && !m.isWindow(n)) {
                    for (
                      l = p.delegateType || g,
                        K.test(l + g) || (s = s.parentNode);
                      s;
                      s = s.parentNode
                    )
                      d.push(s), (a = s);
                    a === (n.ownerDocument || h) &&
                      d.push(a.defaultView || a.parentWindow || r);
                  }
                  for (i = 0; (s = d[i++]) && !e.isPropagationStopped(); )
                    (e.type = i > 1 ? l : p.bindType || g),
                      (u =
                        (F.get(s, "events") || {})[e.type] &&
                        F.get(s, "handle")) && u.apply(s, t),
                      (u = c && s[c]) &&
                        u.apply &&
                        m.acceptData(s) &&
                        ((e.result = u.apply(s, t)),
                        !1 === e.result && e.preventDefault());
                  return (
                    (e.type = g),
                    o ||
                      e.isDefaultPrevented() ||
                      (p._default && !1 !== p._default.apply(d.pop(), t)) ||
                      !m.acceptData(n) ||
                      (c &&
                        m.isFunction(n[g]) &&
                        !m.isWindow(n) &&
                        ((a = n[c]) && (n[c] = null),
                        (m.event.triggered = g),
                        n[g](),
                        (m.event.triggered = void 0),
                        a && (n[c] = a))),
                    e.result
                  );
                }
              },
              dispatch: function (e) {
                e = m.event.fix(e);
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = [],
                  l = s.call(arguments),
                  c = (F.get(this, "events") || {})[e.type] || [],
                  u = m.event.special[e.type] || {};
                if (
                  ((l[0] = e),
                  (e.delegateTarget = this),
                  !u.preDispatch || !1 !== u.preDispatch.call(this, e))
                ) {
                  for (
                    a = m.event.handlers.call(this, e, c), t = 0;
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
                            (m.event.special[i.origType] || {}).handle ||
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
                            ? m(o, this).index(l) >= 0
                            : m.find(o, this, null, [l]).length),
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
                if (e[m.expando]) return e;
                var t,
                  n,
                  r,
                  o = e.type,
                  i = e,
                  s = this.fixHooks[o];
                for (
                  s ||
                    (this.fixHooks[o] = s =
                      Q.test(o)
                        ? this.mouseHooks
                        : G.test(o)
                        ? this.keyHooks
                        : {}),
                    r = s.props ? this.props.concat(s.props) : this.props,
                    e = new m.Event(i),
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
                      m.nodeName(this, "input")
                    )
                      return this.click(), !1;
                  },
                  _default: function (e) {
                    return m.nodeName(e.target, "a");
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
                var o = m.extend(new m.Event(), n, {
                  type: e,
                  isSimulated: !0,
                  originalEvent: {},
                });
                r ? m.event.trigger(o, null, t) : m.event.dispatch.call(t, o),
                  o.isDefaultPrevented() && n.preventDefault();
              },
            }),
              (m.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
              }),
              (m.Event = function (e, t) {
                if (!(this instanceof m.Event)) return new m.Event(e, t);
                e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                        ? ee
                        : te))
                  : (this.type = e),
                  t && m.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || m.now()),
                  (this[m.expando] = !0);
              }),
              (m.Event.prototype = {
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
              m.each(
                {
                  mouseenter: "mouseover",
                  mouseleave: "mouseout",
                  pointerenter: "pointerover",
                  pointerleave: "pointerout",
                },
                function (e, t) {
                  m.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                      var n,
                        r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                      return (
                        (o && (o === r || m.contains(r, o))) ||
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
                m.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  var n = function (e) {
                    m.event.simulate(t, e.target, m.event.fix(e), !0);
                  };
                  m.event.special[t] = {
                    setup: function () {
                      var r = this.ownerDocument || this,
                        o = F.access(r, t);
                      o || r.addEventListener(e, n, !0),
                        F.access(r, t, (o || 0) + 1);
                    },
                    teardown: function () {
                      var r = this.ownerDocument || this,
                        o = F.access(r, t) - 1;
                      o
                        ? F.access(r, t, o)
                        : (r.removeEventListener(e, n, !0), F.remove(r, t));
                    },
                  };
                }),
              m.fn.extend({
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
                        return m().off(e), i.apply(this, arguments);
                      }),
                      (r.guid = i.guid || (i.guid = m.guid++))),
                    this.each(function () {
                      m.event.add(this, e, r, n, t);
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
                      m(e.delegateTarget).off(
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
                      m.event.remove(this, e, n, t);
                    })
                  );
                },
                trigger: function (e, t) {
                  return this.each(function () {
                    m.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var n = this[0];
                  if (n) return m.event.trigger(e, t, n, !0);
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
              return m.nodeName(e, "table") &&
                m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
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
            function ge(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"));
            }
            function me(e, t) {
              var n, r, o, i, s, a, l, c;
              if (1 === t.nodeType) {
                if (
                  F.hasData(e) &&
                  ((i = F.access(e)), (s = F.set(t, i)), (c = i.events))
                )
                  for (o in (delete s.handle, (s.events = {}), c))
                    for (n = 0, r = c[o].length; n < r; n++)
                      m.event.add(t, o, c[o][n]);
                M.hasData(e) &&
                  ((a = M.access(e)), (l = m.extend({}, a)), M.set(t, l));
              }
            }
            function ve(e, t) {
              var n = e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
              return void 0 === t || (t && m.nodeName(e, t))
                ? m.merge([e], n)
                : n;
            }
            (pe.optgroup = pe.option),
              (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead),
              (pe.th = pe.td),
              m.extend({
                clone: function (e, t, n) {
                  var r,
                    o,
                    i,
                    s,
                    a,
                    l,
                    c,
                    u = e.cloneNode(!0),
                    p = m.contains(e.ownerDocument, e);
                  if (
                    !(
                      d.noCloneChecked ||
                      (1 !== e.nodeType && 11 !== e.nodeType) ||
                      m.isXMLDoc(e)
                    )
                  )
                    for (s = ve(u), r = 0, o = (i = ve(e)).length; r < o; r++)
                      (a = i[r]),
                        void 0,
                        "input" === (c = (l = s[r]).nodeName.toLowerCase()) &&
                        V.test(a.type)
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
                        me(i[r], s[r]);
                    else me(e, u);
                  return (
                    (s = ve(u, "script")).length > 0 &&
                      ge(s, !p && ve(e, "script")),
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
                      if ("object" === m.type(o))
                        m.merge(p, o.nodeType ? [o] : o);
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
                        m.merge(p, i.childNodes),
                          ((i = u.firstChild).textContent = "");
                      } else p.push(t.createTextNode(o));
                  for (u.textContent = "", f = 0; (o = p[f++]); )
                    if (
                      (!r || -1 === m.inArray(o, r)) &&
                      ((l = m.contains(o.ownerDocument, o)),
                      (i = ve(u.appendChild(o), "script")),
                      l && ge(i),
                      n)
                    )
                      for (c = 0; (o = i[c++]); )
                        le.test(o.type || "") && n.push(o);
                  return u;
                },
                cleanData: function (e) {
                  for (
                    var t, n, r, o, i = m.event.special, s = 0;
                    void 0 !== (n = e[s]);
                    s++
                  ) {
                    if (
                      m.acceptData(n) &&
                      (o = n[F.expando]) &&
                      (t = F.cache[o])
                    ) {
                      if (t.events)
                        for (r in t.events)
                          i[r]
                            ? m.event.remove(n, r)
                            : m.removeEvent(n, r, t.handle);
                      F.cache[o] && delete F.cache[o];
                    }
                    delete M.cache[n[M.expando]];
                  }
                },
              }),
              m.fn.extend({
                text: function (e) {
                  return P(
                    this,
                    function (e) {
                      return void 0 === e
                        ? m.text(this)
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
                    var n, r = e ? m.filter(e, this) : this, o = 0;
                    null != (n = r[o]);
                    o++
                  )
                    t || 1 !== n.nodeType || m.cleanData(ve(n)),
                      n.parentNode &&
                        (t &&
                          m.contains(n.ownerDocument, n) &&
                          ge(ve(n, "script")),
                        n.parentNode.removeChild(n));
                  return this;
                },
                empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                      (m.cleanData(ve(e, !1)), (e.textContent = ""));
                  return this;
                },
                clone: function (e, t) {
                  return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return m.clone(this, e, t);
                    })
                  );
                },
                html: function (e) {
                  return P(
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
                              (m.cleanData(ve(t, !1)), (t.innerHTML = e));
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
                        m.cleanData(ve(this)),
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
                    g = m.isFunction(h);
                  if (
                    g ||
                    (u > 1 &&
                      "string" == typeof h &&
                      !d.checkClone &&
                      ae.test(h))
                  )
                    return this.each(function (n) {
                      var r = p.eq(n);
                      g && (e[0] = h.call(this, n, r.html())), r.domManip(e, t);
                    });
                  if (
                    u &&
                    ((r = (n = m.buildFragment(
                      e,
                      this[0].ownerDocument,
                      !1,
                      this
                    )).firstChild),
                    1 === n.childNodes.length && (n = r),
                    r)
                  ) {
                    for (
                      i = (o = m.map(ve(n, "script"), de)).length;
                      c < u;
                      c++
                    )
                      (s = n),
                        c !== f &&
                          ((s = m.clone(s, !0, !0)),
                          i && m.merge(o, ve(s, "script"))),
                        t.call(this[c], s, c);
                    if (i)
                      for (
                        l = o[o.length - 1].ownerDocument, m.map(o, he), c = 0;
                        c < i;
                        c++
                      )
                        (s = o[c]),
                          le.test(s.type || "") &&
                            !F.access(s, "globalEval") &&
                            m.contains(l, s) &&
                            (s.src
                              ? m._evalUrl && m._evalUrl(s.src)
                              : m.globalEval(s.textContent.replace(ue, "")));
                  }
                  return this;
                },
              }),
              m.each(
                {
                  appendTo: "append",
                  prependTo: "prepend",
                  insertBefore: "before",
                  insertAfter: "after",
                  replaceAll: "replaceWith",
                },
                function (e, t) {
                  m.fn[e] = function (e) {
                    for (
                      var n, r = [], o = m(e), i = o.length - 1, s = 0;
                      s <= i;
                      s++
                    )
                      (n = s === i ? this : this.clone(!0)),
                        m(o[s])[t](n),
                        l.apply(r, n.get());
                    return this.pushStack(r);
                  };
                }
              );
            var ye,
              xe = {};
            function be(e, t) {
              var n,
                o = m(t.createElement(e)).appendTo(t.body),
                i =
                  r.getDefaultComputedStyle &&
                  (n = r.getDefaultComputedStyle(o[0]))
                    ? n.display
                    : m.css(o[0], "display");
              return o.detach(), i;
            }
            function we(e) {
              var t = h,
                n = xe[e];
              return (
                n ||
                  (("none" !== (n = be(e, t)) && n) ||
                    ((t = (ye = (
                      ye || m("<iframe frameborder='0' width='0' height='0'/>")
                    ).appendTo(t.documentElement))[0].contentDocument).write(),
                    t.close(),
                    (n = be(e, t)),
                    ye.detach()),
                  (xe[e] = n)),
                n
              );
            }
            var Ce = /^margin/,
              Te = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
              Se = function (e) {
                return e.ownerDocument.defaultView.opener
                  ? e.ownerDocument.defaultView.getComputedStyle(e, null)
                  : r.getComputedStyle(e, null);
              };
            function ke(e, t, n) {
              var r,
                o,
                i,
                s,
                a = e.style;
              return (
                (n = n || Se(e)) && (s = n.getPropertyValue(t) || n[t]),
                n &&
                  ("" !== s ||
                    m.contains(e.ownerDocument, e) ||
                    (s = m.style(e, t)),
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
            function Ne(e, t) {
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
                  m.extend(d, {
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
              (m.swap = function (e, t, n, r) {
                var o,
                  i,
                  s = {};
                for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
                for (i in ((o = n.apply(e, r || [])), t)) e.style[i] = s[i];
                return o;
              });
            var Ee = /^(none|table(?!-c[ea]).+)/,
              _e = new RegExp("^(" + z + ")(.*)$", "i"),
              je = new RegExp("^([+-])=(" + z + ")", "i"),
              Ae = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
              },
              De = { letterSpacing: "0", fontWeight: "400" },
              qe = ["Webkit", "O", "Moz", "ms"];
            function Le(e, t) {
              if (t in e) return t;
              for (
                var n = t[0].toUpperCase() + t.slice(1), r = t, o = qe.length;
                o--;

              )
                if ((t = qe[o] + n) in e) return t;
              return r;
            }
            function Oe(e, t, n) {
              var r = _e.exec(t);
              return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
            }
            function He(e, t, n, r, o) {
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
                "margin" === n && (s += m.css(e, n + X[i], !0, o)),
                  r
                    ? ("content" === n &&
                        (s -= m.css(e, "padding" + X[i], !0, o)),
                      "margin" !== n &&
                        (s -= m.css(e, "border" + X[i] + "Width", !0, o)))
                    : ((s += m.css(e, "padding" + X[i], !0, o)),
                      "padding" !== n &&
                        (s += m.css(e, "border" + X[i] + "Width", !0, o)));
              return s;
            }
            function Pe(e, t, n) {
              var r = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                i = Se(e),
                s = "border-box" === m.css(e, "boxSizing", !1, i);
              if (o <= 0 || null == o) {
                if (
                  (((o = ke(e, t, i)) < 0 || null == o) && (o = e.style[t]),
                  Te.test(o))
                )
                  return o;
                (r = s && (d.boxSizingReliable() || o === e.style[t])),
                  (o = parseFloat(o) || 0);
              }
              return o + He(e, t, n || (s ? "border" : "content"), r, i) + "px";
            }
            function Re(e, t) {
              for (var n, r, o, i = [], s = 0, a = e.length; s < a; s++)
                (r = e[s]).style &&
                  ((i[s] = F.get(r, "olddisplay")),
                  (n = r.style.display),
                  t
                    ? (i[s] || "none" !== n || (r.style.display = ""),
                      "" === r.style.display &&
                        J(r) &&
                        (i[s] = F.access(r, "olddisplay", we(r.nodeName))))
                    : ((o = J(r)),
                      ("none" === n && o) ||
                        F.set(r, "olddisplay", o ? n : m.css(r, "display"))));
              for (s = 0; s < a; s++)
                (r = e[s]).style &&
                  ((t &&
                    "none" !== r.style.display &&
                    "" !== r.style.display) ||
                    (r.style.display = t ? i[s] || "" : "none"));
              return e;
            }
            function Fe(e, t, n, r, o) {
              return new Fe.prototype.init(e, t, n, r, o);
            }
            m.extend({
              cssHooks: {
                opacity: {
                  get: function (e, t) {
                    if (t) {
                      var n = ke(e, "opacity");
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
                    a = m.camelCase(t),
                    l = e.style;
                  if (
                    ((t = m.cssProps[a] || (m.cssProps[a] = Le(l, a))),
                    (s = m.cssHooks[t] || m.cssHooks[a]),
                    void 0 === n)
                  )
                    return s && "get" in s && void 0 !== (o = s.get(e, !1, r))
                      ? o
                      : l[t];
                  "string" == (i = typeof n) &&
                    (o = je.exec(n)) &&
                    ((n = (o[1] + 1) * o[2] + parseFloat(m.css(e, t))),
                    (i = "number")),
                    null != n &&
                      n == n &&
                      ("number" !== i || m.cssNumber[a] || (n += "px"),
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
                  a = m.camelCase(t);
                return (
                  (t = m.cssProps[a] || (m.cssProps[a] = Le(e.style, a))),
                  (s = m.cssHooks[t] || m.cssHooks[a]) &&
                    "get" in s &&
                    (o = s.get(e, !0, n)),
                  void 0 === o && (o = ke(e, t, r)),
                  "normal" === o && t in De && (o = De[t]),
                  "" === n || n
                    ? ((i = parseFloat(o)),
                      !0 === n || m.isNumeric(i) ? i || 0 : o)
                    : o
                );
              },
            }),
              m.each(["height", "width"], function (e, t) {
                m.cssHooks[t] = {
                  get: function (e, n, r) {
                    if (n)
                      return Ee.test(m.css(e, "display")) && 0 === e.offsetWidth
                        ? m.swap(e, Ae, function () {
                            return Pe(e, t, r);
                          })
                        : Pe(e, t, r);
                  },
                  set: function (e, n, r) {
                    var o = r && Se(e);
                    return Oe(
                      0,
                      n,
                      r
                        ? He(
                            e,
                            t,
                            r,
                            "border-box" === m.css(e, "boxSizing", !1, o),
                            o
                          )
                        : 0
                    );
                  },
                };
              }),
              (m.cssHooks.marginRight = Ne(
                d.reliableMarginRight,
                function (e, t) {
                  if (t)
                    return m.swap(e, { display: "inline-block" }, ke, [
                      e,
                      "marginRight",
                    ]);
                }
              )),
              m.each(
                { margin: "", padding: "", border: "Width" },
                function (e, t) {
                  (m.cssHooks[e + t] = {
                    expand: function (n) {
                      for (
                        var r = 0,
                          o = {},
                          i = "string" == typeof n ? n.split(" ") : [n];
                        r < 4;
                        r++
                      )
                        o[e + X[r] + t] = i[r] || i[r - 2] || i[0];
                      return o;
                    },
                  }),
                    Ce.test(e) || (m.cssHooks[e + t].set = Oe);
                }
              ),
              m.fn.extend({
                css: function (e, t) {
                  return P(
                    this,
                    function (e, t, n) {
                      var r,
                        o,
                        i = {},
                        s = 0;
                      if (m.isArray(t)) {
                        for (r = Se(e), o = t.length; s < o; s++)
                          i[t[s]] = m.css(e, t[s], !1, r);
                        return i;
                      }
                      return void 0 !== n ? m.style(e, t, n) : m.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                  );
                },
                show: function () {
                  return Re(this, !0);
                },
                hide: function () {
                  return Re(this);
                },
                toggle: function (e) {
                  return "boolean" == typeof e
                    ? e
                      ? this.show()
                      : this.hide()
                    : this.each(function () {
                        J(this) ? m(this).show() : m(this).hide();
                      });
                },
              }),
              (m.Tween = Fe),
              (Fe.prototype = {
                constructor: Fe,
                init: function (e, t, n, r, o, i) {
                  (this.elem = e),
                    (this.prop = n),
                    (this.easing = o || "swing"),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = i || (m.cssNumber[n] ? "" : "px"));
                },
                cur: function () {
                  var e = Fe.propHooks[this.prop];
                  return e && e.get
                    ? e.get(this)
                    : Fe.propHooks._default.get(this);
                },
                run: function (e) {
                  var t,
                    n = Fe.propHooks[this.prop];
                  return (
                    this.options.duration
                      ? (this.pos = t =
                          m.easing[this.easing](
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
                    n && n.set ? n.set(this) : Fe.propHooks._default.set(this),
                    this
                  );
                },
              }),
              (Fe.prototype.init.prototype = Fe.prototype),
              (Fe.propHooks = {
                _default: {
                  get: function (e) {
                    var t;
                    return null == e.elem[e.prop] ||
                      (e.elem.style && null != e.elem.style[e.prop])
                      ? (t = m.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0
                      : e.elem[e.prop];
                  },
                  set: function (e) {
                    m.fx.step[e.prop]
                      ? m.fx.step[e.prop](e)
                      : e.elem.style &&
                        (null != e.elem.style[m.cssProps[e.prop]] ||
                          m.cssHooks[e.prop])
                      ? m.style(e.elem, e.prop, e.now + e.unit)
                      : (e.elem[e.prop] = e.now);
                  },
                },
              }),
              (Fe.propHooks.scrollTop = Fe.propHooks.scrollLeft =
                {
                  set: function (e) {
                    e.elem.nodeType &&
                      e.elem.parentNode &&
                      (e.elem[e.prop] = e.now);
                  },
                }),
              (m.easing = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
              }),
              (m.fx = Fe.prototype.init),
              (m.fx.step = {});
            var Me,
              Ie,
              We = /^(?:toggle|show|hide)$/,
              $e = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
              Be = /queueHooks$/,
              Ue = [
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
                    d = e.nodeType && J(e),
                    h = F.get(e, "fxshow");
                  for (r in (n.queue ||
                    (null == (a = m._queueHooks(e, "fx")).unqueued &&
                      ((a.unqueued = 0),
                      (l = a.empty.fire),
                      (a.empty.fire = function () {
                        a.unqueued || l();
                      })),
                    a.unqueued++,
                    u.always(function () {
                      u.always(function () {
                        a.unqueued--, m.queue(e, "fx").length || a.empty.fire();
                      });
                    })),
                  1 === e.nodeType &&
                    ("height" in t || "width" in t) &&
                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    "inline" ===
                      ("none" === (c = m.css(e, "display"))
                        ? F.get(e, "olddisplay") || we(e.nodeName)
                        : c) &&
                      "none" === m.css(e, "float") &&
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
                      p[r] = (h && h[r]) || m.style(e, r);
                    } else c = void 0;
                  if (m.isEmptyObject(p))
                    "inline" === ("none" === c ? we(e.nodeName) : c) &&
                      (f.display = c);
                  else
                    for (r in (h
                      ? "hidden" in h && (d = h.hidden)
                      : (h = F.access(e, "fxshow", {})),
                    i && (h.hidden = !d),
                    d
                      ? m(e).show()
                      : u.done(function () {
                          m(e).hide();
                        }),
                    u.done(function () {
                      var t;
                      for (t in (F.remove(e, "fxshow"), p)) m.style(e, t, p[t]);
                    }),
                    p))
                      (s = Ve(d ? h[r] : 0, r, u)),
                        r in h ||
                          ((h[r] = s.start),
                          d &&
                            ((s.end = s.start),
                            (s.start =
                              "width" === r || "height" === r ? 1 : 0)));
                },
              ],
              ze = {
                "*": [
                  function (e, t) {
                    var n = this.createTween(e, t),
                      r = n.cur(),
                      o = $e.exec(t),
                      i = (o && o[3]) || (m.cssNumber[e] ? "" : "px"),
                      s =
                        (m.cssNumber[e] || ("px" !== i && +r)) &&
                        $e.exec(m.css(n.elem, e)),
                      a = 1,
                      l = 20;
                    if (s && s[3] !== i) {
                      (i = i || s[3]), (o = o || []), (s = +r || 1);
                      do {
                        (s /= a = a || ".5"), m.style(n.elem, e, s + i);
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
            function Xe() {
              return (
                setTimeout(function () {
                  Me = void 0;
                }),
                (Me = m.now())
              );
            }
            function Je(e, t) {
              var n,
                r = 0,
                o = { height: e };
              for (t = t ? 1 : 0; r < 4; r += 2 - t)
                o["margin" + (n = X[r])] = o["padding" + n] = e;
              return t && (o.opacity = o.width = e), o;
            }
            function Ve(e, t, n) {
              for (
                var r, o = (ze[t] || []).concat(ze["*"]), i = 0, s = o.length;
                i < s;
                i++
              )
                if ((r = o[i].call(n, t, e))) return r;
            }
            function Ye(e, t, n) {
              var r,
                o,
                i = 0,
                s = Ue.length,
                a = m.Deferred().always(function () {
                  delete l.elem;
                }),
                l = function () {
                  if (o) return !1;
                  for (
                    var t = Me || Xe(),
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
                  props: m.extend({}, t),
                  opts: m.extend(!0, { specialEasing: {} }, n),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: Me || Xe(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function (t, n) {
                    var r = m.Tween(
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
                      ((o = t[(r = m.camelCase(n))]),
                      (i = e[n]),
                      m.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                      n !== r && ((e[r] = i), delete e[n]),
                      (s = m.cssHooks[r]) && ("expand" in s))
                    )
                      for (n in ((i = s.expand(i)), delete e[r], i))
                        (n in e) || ((e[n] = i[n]), (t[n] = o));
                    else t[r] = o;
                })(u, c.opts.specialEasing);
                i < s;
                i++
              )
                if ((r = Ue[i].call(c, e, u, c.opts))) return r;
              return (
                m.map(u, Ve, c),
                m.isFunction(c.opts.start) && c.opts.start.call(e, c),
                m.fx.timer(
                  m.extend(l, { elem: e, anim: c, queue: c.opts.queue })
                ),
                c
                  .progress(c.opts.progress)
                  .done(c.opts.done, c.opts.complete)
                  .fail(c.opts.fail)
                  .always(c.opts.always)
              );
            }
            (m.Animation = m.extend(Ye, {
              tweener: function (e, t) {
                m.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
                for (var n, r = 0, o = e.length; r < o; r++)
                  (n = e[r]), (ze[n] = ze[n] || []), ze[n].unshift(t);
              },
              prefilter: function (e, t) {
                t ? Ue.unshift(e) : Ue.push(e);
              },
            })),
              (m.speed = function (e, t, n) {
                var r =
                  e && "object" == typeof e
                    ? m.extend({}, e)
                    : {
                        complete: n || (!n && t) || (m.isFunction(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !m.isFunction(t) && t),
                      };
                return (
                  (r.duration = m.fx.off
                    ? 0
                    : "number" == typeof r.duration
                    ? r.duration
                    : r.duration in m.fx.speeds
                    ? m.fx.speeds[r.duration]
                    : m.fx.speeds._default),
                  (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                  (r.old = r.complete),
                  (r.complete = function () {
                    m.isFunction(r.old) && r.old.call(this),
                      r.queue && m.dequeue(this, r.queue);
                  }),
                  r
                );
              }),
              m.fn.extend({
                fadeTo: function (e, t, n, r) {
                  return this.filter(J)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
                },
                animate: function (e, t, n, r) {
                  var o = m.isEmptyObject(e),
                    i = m.speed(t, n, r),
                    s = function () {
                      var t = Ye(this, m.extend({}, e), i);
                      (o || F.get(this, "finish")) && t.stop(!0);
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
                        i = m.timers,
                        s = F.get(this);
                      if (o) s[o] && s[o].stop && r(s[o]);
                      else
                        for (o in s) s[o] && s[o].stop && Be.test(o) && r(s[o]);
                      for (o = i.length; o--; )
                        i[o].elem !== this ||
                          (null != e && i[o].queue !== e) ||
                          (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                      (!t && n) || m.dequeue(this, e);
                    })
                  );
                },
                finish: function (e) {
                  return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                      var t,
                        n = F.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = m.timers,
                        s = r ? r.length : 0;
                      for (
                        n.finish = !0,
                          m.queue(this, e, []),
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
              m.each(["toggle", "show", "hide"], function (e, t) {
                var n = m.fn[t];
                m.fn[t] = function (e, r, o) {
                  return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(Je(t, !0), e, r, o);
                };
              }),
              m.each(
                {
                  slideDown: Je("show"),
                  slideUp: Je("hide"),
                  slideToggle: Je("toggle"),
                  fadeIn: { opacity: "show" },
                  fadeOut: { opacity: "hide" },
                  fadeToggle: { opacity: "toggle" },
                },
                function (e, t) {
                  m.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                  };
                }
              ),
              (m.timers = []),
              (m.fx.tick = function () {
                var e,
                  t = 0,
                  n = m.timers;
                for (Me = m.now(); t < n.length; t++)
                  (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || m.fx.stop(), (Me = void 0);
              }),
              (m.fx.timer = function (e) {
                m.timers.push(e), e() ? m.fx.start() : m.timers.pop();
              }),
              (m.fx.interval = 13),
              (m.fx.start = function () {
                Ie || (Ie = setInterval(m.fx.tick, m.fx.interval));
              }),
              (m.fx.stop = function () {
                clearInterval(Ie), (Ie = null);
              }),
              (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (m.fn.delay = function (e, t) {
                return (
                  (e = (m.fx && m.fx.speeds[e]) || e),
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
              Qe = m.expr.attrHandle;
            m.fn.extend({
              attr: function (e, t) {
                return P(this, m.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                return this.each(function () {
                  m.removeAttr(this, e);
                });
              },
            }),
              m.extend({
                attr: function (e, t, n) {
                  var r,
                    o,
                    i = e.nodeType;
                  if (e && 3 !== i && 8 !== i && 2 !== i)
                    return typeof e.getAttribute === Y
                      ? m.prop(e, t, n)
                      : ((1 === i && m.isXMLDoc(e)) ||
                          ((t = t.toLowerCase()),
                          (r =
                            m.attrHooks[t] ||
                            (m.expr.match.bool.test(t) ? Ge : void 0))),
                        void 0 === n
                          ? r && "get" in r && null !== (o = r.get(e, t))
                            ? o
                            : null == (o = m.find.attr(e, t))
                            ? void 0
                            : o
                          : null !== n
                          ? r && "set" in r && void 0 !== (o = r.set(e, n, t))
                            ? o
                            : (e.setAttribute(t, n + ""), n)
                          : void m.removeAttr(e, t));
                },
                removeAttr: function (e, t) {
                  var n,
                    r,
                    o = 0,
                    i = t && t.match(L);
                  if (i && 1 === e.nodeType)
                    for (; (n = i[o++]); )
                      (r = m.propFix[n] || n),
                        m.expr.match.bool.test(n) && (e[r] = !1),
                        e.removeAttribute(n);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      if (
                        !d.radioValue &&
                        "radio" === t &&
                        m.nodeName(e, "input")
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
                    !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n
                  );
                },
              }),
              m.each(m.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = Qe[t] || m.find.attr;
                Qe[t] = function (e, t, r) {
                  var o, i;
                  return (
                    r ||
                      ((i = Qe[t]),
                      (Qe[t] = o),
                      (o = null != n(e, t, r) ? t.toLowerCase() : null),
                      (Qe[t] = i)),
                    o
                  );
                };
              });
            var Ke = /^(?:input|select|textarea|button)$/i;
            m.fn.extend({
              prop: function (e, t) {
                return P(this, m.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                return this.each(function () {
                  delete this[m.propFix[e] || e];
                });
              },
            }),
              m.extend({
                propFix: { for: "htmlFor", class: "className" },
                prop: function (e, t, n) {
                  var r,
                    o,
                    i = e.nodeType;
                  if (e && 3 !== i && 8 !== i && 2 !== i)
                    return (
                      (1 !== i || !m.isXMLDoc(e)) &&
                        ((t = m.propFix[t] || t), (o = m.propHooks[t])),
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
                (m.propHooks.selected = {
                  get: function (e) {
                    var t = e.parentNode;
                    return (
                      t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                  },
                }),
              m.each(
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
                  m.propFix[this.toLowerCase()] = this;
                }
              );
            var Ze = /[\t\r\n\f]/g;
            m.fn.extend({
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
                if (m.isFunction(e))
                  return this.each(function (t) {
                    m(this).addClass(e.call(this, t, this.className));
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
                      (s = m.trim(r)), n.className !== s && (n.className = s);
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
                if (m.isFunction(e))
                  return this.each(function (t) {
                    m(this).removeClass(e.call(this, t, this.className));
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
                      (s = e ? m.trim(r) : ""),
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
                  : m.isFunction(e)
                  ? this.each(function (n) {
                      m(this).toggleClass(
                        e.call(this, n, this.className, t),
                        t
                      );
                    })
                  : this.each(function () {
                      if ("string" === n)
                        for (
                          var t, r = 0, o = m(this), i = e.match(L) || [];
                          (t = i[r++]);

                        )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (n !== Y && "boolean" !== n) ||
                          (this.className &&
                            F.set(this, "__className__", this.className),
                          (this.className =
                            this.className || !1 === e
                              ? ""
                              : F.get(this, "__className__") || ""));
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
            m.fn.extend({
              val: function (e) {
                var t,
                  n,
                  r,
                  o = this[0];
                return arguments.length
                  ? ((r = m.isFunction(e)),
                    this.each(function (n) {
                      var o;
                      1 === this.nodeType &&
                        (null == (o = r ? e.call(this, n, m(this).val()) : e)
                          ? (o = "")
                          : "number" == typeof o
                          ? (o += "")
                          : m.isArray(o) &&
                            (o = m.map(o, function (e) {
                              return null == e ? "" : e + "";
                            })),
                        ((t =
                          m.valHooks[this.type] ||
                          m.valHooks[this.nodeName.toLowerCase()]) &&
                          "set" in t &&
                          void 0 !== t.set(this, o, "value")) ||
                          (this.value = o));
                    }))
                  : o
                  ? (t =
                      m.valHooks[o.type] ||
                      m.valHooks[o.nodeName.toLowerCase()]) &&
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
              m.extend({
                valHooks: {
                  option: {
                    get: function (e) {
                      var t = m.find.attr(e, "value");
                      return null != t ? t : m.trim(m.text(e));
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
                            !m.nodeName(n.parentNode, "optgroup"))
                        ) {
                          if (((t = m(n).val()), i)) return t;
                          s.push(t);
                        }
                      return s;
                    },
                    set: function (e, t) {
                      for (
                        var n,
                          r,
                          o = e.options,
                          i = m.makeArray(t),
                          s = o.length;
                        s--;

                      )
                        ((r = o[s]).selected = m.inArray(r.value, i) >= 0) &&
                          (n = !0);
                      return n || (e.selectedIndex = -1), i;
                    },
                  },
                },
              }),
              m.each(["radio", "checkbox"], function () {
                (m.valHooks[this] = {
                  set: function (e, t) {
                    if (m.isArray(t))
                      return (e.checked = m.inArray(m(e).val(), t) >= 0);
                  },
                }),
                  d.checkOn ||
                    (m.valHooks[this].get = function (e) {
                      return null === e.getAttribute("value") ? "on" : e.value;
                    });
              }),
              m.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                  " "
                ),
                function (e, t) {
                  m.fn[t] = function (e, n) {
                    return arguments.length > 0
                      ? this.on(t, null, e, n)
                      : this.trigger(t);
                  };
                }
              ),
              m.fn.extend({
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
            var tt = m.now(),
              nt = /\?/;
            (m.parseJSON = function (e) {
              return JSON.parse(e + "");
            }),
              (m.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                  t = new DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                  t = void 0;
                }
                return (
                  (t && !t.getElementsByTagName("parsererror").length) ||
                    m.error("Invalid XML: " + e),
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
                if (m.isFunction(n))
                  for (; (r = i[o++]); )
                    "+" === r[0]
                      ? ((r = r.slice(1) || "*"),
                        (e[r] = e[r] || []).unshift(n))
                      : (e[r] = e[r] || []).push(n);
              };
            }
            function gt(e, t, n, r) {
              var o = {},
                i = e === ut;
              function s(a) {
                var l;
                return (
                  (o[a] = !0),
                  m.each(e[a] || [], function (e, a) {
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
            function mt(e, t) {
              var n,
                r,
                o = m.ajaxSettings.flatOptions || {};
              for (n in t)
                void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
              return r && m.extend(!0, e, r), e;
            }
            m.extend({
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
                  "text json": m.parseJSON,
                  "text xml": m.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? mt(mt(e, m.ajaxSettings), t) : mt(m.ajaxSettings, e);
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
                  u = m.ajaxSetup({}, t),
                  p = u.context || u,
                  f = u.context && (p.nodeType || p.jquery) ? m(p) : m.event,
                  d = m.Deferred(),
                  h = m.Callbacks("once memory"),
                  g = u.statusCode || {},
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
                        if (x < 2) for (t in e) g[t] = [g[t], e[t]];
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
                  (u.dataTypes = m
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
                    (u.data = m.param(u.data, u.traditional)),
                  gt(ct, u, t, w),
                  2 === x)
                )
                  return w;
                for (c in ((l = m.event && u.global) &&
                  0 == m.active++ &&
                  m.event.trigger("ajaxStart"),
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
                  (m.lastModified[r] &&
                    w.setRequestHeader("If-Modified-Since", m.lastModified[r]),
                  m.etag[r] && w.setRequestHeader("If-None-Match", m.etag[r])),
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
                if ((n = gt(ut, u, t, w))) {
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
                            (m.lastModified[r] = C),
                          (C = w.getResponseHeader("etag")) && (m.etag[r] = C)),
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
                    w.statusCode(g),
                    (g = void 0),
                    l &&
                      f.trigger(c ? "ajaxSuccess" : "ajaxError", [
                        w,
                        u,
                        c ? v : y,
                      ]),
                    h.fireWith(p, [w, T]),
                    l &&
                      (f.trigger("ajaxComplete", [w, u]),
                      --m.active || m.event.trigger("ajaxStop")));
                }
                return w;
              },
              getJSON: function (e, t, n) {
                return m.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return m.get(e, void 0, t, "script");
              },
            }),
              m.each(["get", "post"], function (e, t) {
                m[t] = function (e, n, r, o) {
                  return (
                    m.isFunction(n) && ((o = o || r), (r = n), (n = void 0)),
                    m.ajax({
                      url: e,
                      type: t,
                      dataType: o,
                      data: n,
                      success: r,
                    })
                  );
                };
              }),
              (m._evalUrl = function (e) {
                return m.ajax({
                  url: e,
                  type: "GET",
                  dataType: "script",
                  async: !1,
                  global: !1,
                  throws: !0,
                });
              }),
              m.fn.extend({
                wrapAll: function (e) {
                  var t;
                  return m.isFunction(e)
                    ? this.each(function (t) {
                        m(this).wrapAll(e.call(this, t));
                      })
                    : (this[0] &&
                        ((t = m(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                  return m.isFunction(e)
                    ? this.each(function (t) {
                        m(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                        var t = m(this),
                          n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                      });
                },
                wrap: function (e) {
                  var t = m.isFunction(e);
                  return this.each(function (n) {
                    m(this).wrapAll(t ? e.call(this, n) : e);
                  });
                },
                unwrap: function () {
                  return this.parent()
                    .each(function () {
                      m.nodeName(this, "body") ||
                        m(this).replaceWith(this.childNodes);
                    })
                    .end();
                },
              }),
              (m.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0;
              }),
              (m.expr.filters.visible = function (e) {
                return !m.expr.filters.hidden(e);
              });
            var vt = /%20/g,
              yt = /\[\]$/,
              xt = /\r?\n/g,
              bt = /^(?:submit|button|image|reset|file)$/i,
              wt = /^(?:input|select|textarea|keygen)/i;
            function Ct(e, t, n, r) {
              var o;
              if (m.isArray(t))
                m.each(t, function (t, o) {
                  n || yt.test(e)
                    ? r(e, o)
                    : Ct(
                        e + "[" + ("object" == typeof o ? t : "") + "]",
                        o,
                        n,
                        r
                      );
                });
              else if (n || "object" !== m.type(t)) r(e, t);
              else for (o in t) Ct(e + "[" + o + "]", t[o], n, r);
            }
            (m.param = function (e, t) {
              var n,
                r = [],
                o = function (e, t) {
                  (t = m.isFunction(t) ? t() : null == t ? "" : t),
                    (r[r.length] =
                      encodeURIComponent(e) + "=" + encodeURIComponent(t));
                };
              if (
                (void 0 === t &&
                  (t = m.ajaxSettings && m.ajaxSettings.traditional),
                m.isArray(e) || (e.jquery && !m.isPlainObject(e)))
              )
                m.each(e, function () {
                  o(this.name, this.value);
                });
              else for (n in e) Ct(n, e[n], t, o);
              return r.join("&").replace(vt, "+");
            }),
              m.fn.extend({
                serialize: function () {
                  return m.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var e = m.prop(this, "elements");
                    return e ? m.makeArray(e) : this;
                  })
                    .filter(function () {
                      var e = this.type;
                      return (
                        this.name &&
                        !m(this).is(":disabled") &&
                        wt.test(this.nodeName) &&
                        !bt.test(e) &&
                        (this.checked || !V.test(e))
                      );
                    })
                    .map(function (e, t) {
                      var n = m(this).val();
                      return null == n
                        ? null
                        : m.isArray(n)
                        ? m.map(n, function (e) {
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
              (m.ajaxSettings.xhr = function () {
                try {
                  return new XMLHttpRequest();
                } catch (e) {}
              });
            var Tt = 0,
              St = {},
              kt = { 0: 200, 1223: 204 },
              Nt = m.ajaxSettings.xhr();
            r.attachEvent &&
              r.attachEvent("onunload", function () {
                for (var e in St) St[e]();
              }),
              (d.cors = !!Nt && "withCredentials" in Nt),
              (d.ajax = Nt = !!Nt),
              m.ajaxTransport(function (e) {
                var t;
                if (d.cors || (Nt && !e.crossDomain))
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
                            (delete St[s],
                            (t = i.onload = i.onerror = null),
                            "abort" === e
                              ? i.abort()
                              : "error" === e
                              ? r(i.status, i.statusText)
                              : r(
                                  kt[i.status] || i.status,
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
                        (t = St[s] = t("abort"));
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
              m.ajaxSetup({
                accepts: {
                  script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /(?:java|ecma)script/ },
                converters: {
                  "text script": function (e) {
                    return m.globalEval(e), e;
                  },
                },
              }),
              m.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1),
                  e.crossDomain && (e.type = "GET");
              }),
              m.ajaxTransport("script", function (e) {
                var t, n;
                if (e.crossDomain)
                  return {
                    send: function (r, o) {
                      (t = m("<script>")
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
            var Et = [],
              _t = /(=)\?(?=&|$)|\?\?/;
            m.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var e = Et.pop() || m.expando + "_" + tt++;
                return (this[e] = !0), e;
              },
            }),
              m.ajaxPrefilter("json jsonp", function (e, t, n) {
                var o,
                  i,
                  s,
                  a =
                    !1 !== e.jsonp &&
                    (_t.test(e.url)
                      ? "url"
                      : "string" == typeof e.data &&
                        !(e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                        _t.test(e.data) &&
                        "data");
                if (a || "jsonp" === e.dataTypes[0])
                  return (
                    (o = e.jsonpCallback =
                      m.isFunction(e.jsonpCallback)
                        ? e.jsonpCallback()
                        : e.jsonpCallback),
                    a
                      ? (e[a] = e[a].replace(_t, "$1" + o))
                      : !1 !== e.jsonp &&
                        (e.url +=
                          (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                    (e.converters["script json"] = function () {
                      return s || m.error(o + " was not called"), s[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = r[o]),
                    (r[o] = function () {
                      s = arguments;
                    }),
                    n.always(function () {
                      (r[o] = i),
                        e[o] &&
                          ((e.jsonpCallback = t.jsonpCallback), Et.push(o)),
                        s && m.isFunction(i) && i(s[0]),
                        (s = i = void 0);
                    }),
                    "script"
                  );
              }),
              (m.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && ((n = t), (t = !1)), (t = t || h);
                var r = S.exec(e),
                  o = !n && [];
                return r
                  ? [t.createElement(r[1])]
                  : ((r = m.buildFragment([e], t, o)),
                    o && o.length && m(o).remove(),
                    m.merge([], r.childNodes));
              });
            var jt = m.fn.load;
            (m.fn.load = function (e, t, n) {
              if ("string" != typeof e && jt) return jt.apply(this, arguments);
              var r,
                o,
                i,
                s = this,
                a = e.indexOf(" ");
              return (
                a >= 0 && ((r = m.trim(e.slice(a))), (e = e.slice(0, a))),
                m.isFunction(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                s.length > 0 &&
                  m
                    .ajax({ url: e, type: o, dataType: "html", data: t })
                    .done(function (e) {
                      (i = arguments),
                        s.html(
                          r ? m("<div>").append(m.parseHTML(e)).find(r) : e
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
              m.each(
                [
                  "ajaxStart",
                  "ajaxStop",
                  "ajaxComplete",
                  "ajaxError",
                  "ajaxSuccess",
                  "ajaxSend",
                ],
                function (e, t) {
                  m.fn[t] = function (e) {
                    return this.on(t, e);
                  };
                }
              ),
              (m.expr.filters.animated = function (e) {
                return m.grep(m.timers, function (t) {
                  return e === t.elem;
                }).length;
              });
            var At = r.document.documentElement;
            function Dt(e) {
              return m.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
            }
            (m.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  s,
                  a,
                  l,
                  c = m.css(e, "position"),
                  u = m(e),
                  p = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (i = m.css(e, "top")),
                  (l = m.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (i + l).indexOf("auto") > -1
                    ? ((s = (r = u.position()).top), (o = r.left))
                    : ((s = parseFloat(i) || 0), (o = parseFloat(l) || 0)),
                  m.isFunction(t) && (t = t.call(e, n, a)),
                  null != t.top && (p.top = t.top - a.top + s),
                  null != t.left && (p.left = t.left - a.left + o),
                  "using" in t ? t.using.call(e, p) : u.css(p);
              },
            }),
              m.fn.extend({
                offset: function (e) {
                  if (arguments.length)
                    return void 0 === e
                      ? this
                      : this.each(function (t) {
                          m.offset.setOffset(this, e, t);
                        });
                  var t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 },
                    i = r && r.ownerDocument;
                  return i
                    ? ((t = i.documentElement),
                      m.contains(t, r)
                        ? (typeof r.getBoundingClientRect !== Y &&
                            (o = r.getBoundingClientRect()),
                          (n = Dt(i)),
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
                      "fixed" === m.css(n, "position")
                        ? (t = n.getBoundingClientRect())
                        : ((e = this.offsetParent()),
                          (t = this.offset()),
                          m.nodeName(e[0], "html") || (r = e.offset()),
                          (r.top += m.css(e[0], "borderTopWidth", !0)),
                          (r.left += m.css(e[0], "borderLeftWidth", !0))),
                      {
                        top: t.top - r.top - m.css(n, "marginTop", !0),
                        left: t.left - r.left - m.css(n, "marginLeft", !0),
                      }
                    );
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var e = this.offsetParent || At;
                      e &&
                      !m.nodeName(e, "html") &&
                      "static" === m.css(e, "position");

                    )
                      e = e.offsetParent;
                    return e || At;
                  });
                },
              }),
              m.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (e, t) {
                  var n = "pageYOffset" === t;
                  m.fn[e] = function (o) {
                    return P(
                      this,
                      function (e, o, i) {
                        var s = Dt(e);
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
              m.each(["top", "left"], function (e, t) {
                m.cssHooks[t] = Ne(d.pixelPosition, function (e, n) {
                  if (n)
                    return (
                      (n = ke(e, t)), Te.test(n) ? m(e).position()[t] + "px" : n
                    );
                });
              }),
              m.each({ Height: "height", Width: "width" }, function (e, t) {
                m.each(
                  { padding: "inner" + e, content: t, "": "outer" + e },
                  function (n, r) {
                    m.fn[r] = function (r, o) {
                      var i = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                      return P(
                        this,
                        function (t, n, r) {
                          var o;
                          return m.isWindow(t)
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
                            ? m.css(t, n, s)
                            : m.style(t, n, r, s);
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
              (m.fn.size = function () {
                return this.length;
              }),
              (m.fn.andSelf = m.fn.addBack),
              void 0 ===
                (n = function () {
                  return m;
                }.apply(t, [])) || (e.exports = n);
            var qt = r.jQuery,
              Lt = r.$;
            return (
              (m.noConflict = function (e) {
                return (
                  r.$ === m && (r.$ = Lt),
                  e && r.jQuery === m && (r.jQuery = qt),
                  m
                );
              }),
              typeof o === Y && (r.jQuery = r.$ = m),
              m
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
      406: (e, t) => {
        function n(e) {
          for (var t = [], n = 0, r = 0; r < e.length; r++) {
            var o = e[r].weight || 1;
            t.push({ start: n, end: n + o }), (n += o);
          }
          var i,
            s = ((i = n), Math.floor(Math.random() * i));
          for (r = 0; r < t.length; r++)
            if (s >= t[r].start && s < t[r].end) return e[r];
        }
        t.o = function (e) {
          for (
            var t = (function (e) {
                return e.slice(0);
              })(e),
              r = [],
              o = 0;
            o < e.length;
            o++
          ) {
            var i = n(t);
            r.push(i), t.splice(t.indexOf(i), 1);
          }
          return r;
        };
      },
      277: (e, t, n) => {
        var r,
          o,
          i = n(755),
          s = n(182).browsec,
          a = n(817),
          l =
            ((r = s.apiPrefix || "https://d1blmth2c5vbem.cloudfront.net/v1/"),
            (o =
              s.locationApiPrefix ||
              "http://d1blmth2c5vbem.cloudfront.net/v1/"),
            {
              init: function () {
                i.ajaxSetup({
                  tryCount: 0,
                  retryLimit: 1,
                  timeout: 1e4,
                  retry: function () {
                    return (
                      this.tryCount++,
                      this.tryCount <= this.retryLimit && (i.ajax(this), !0)
                    );
                  },
                });
              },
              checkCredentials: function (e, t) {
                try {
                  console.group("checkCredentials");
                  var n = !1;
                  return (
                    i.ajax({
                      type: "POST",
                      url: r + "auth",
                      data: { email: e, password: t },
                      async: !1,
                      success: function (e, t, r) {
                        console.log("Response status: %d", e.status),
                          0 === e.status && (n = !0);
                      },
                      error: function (e, t, n) {
                        if (!this.retry())
                          throw (
                            (a.trackEvent("check_credentials_error", t, n), n)
                          );
                      },
                    }),
                    n
                  );
                } finally {
                  console.groupEnd();
                }
              },
              clearCredentials: function () {
                delete localStorage.userId,
                  delete localStorage.email,
                  delete localStorage.password;
              },
              ipInfo: function (e) {
                var t;
                i.ajax({
                  type: "GET",
                  url:
                    o +
                    "location?locale=" +
                    chrome.runtime.getManifest().current_locale,
                  async: !0,
                  success: function (t, n, r) {
                    e(t);
                  },
                  error: function (e, t, n) {
                    this.retry();
                  },
                  beforeSend: function () {
                    t = Date.now();
                  },
                  complete: function () {
                    var e = Date.now() - t;
                    console.debug("Location request duration %d ms", e);
                  },
                });
              },
              signup: function () {
                try {
                  console.group("Signing up new user");
                  var e = null;
                  return (
                    i.ajax({
                      type: "POST",
                      url: r + "signup",
                      async: !1,
                      success: function (t, n, r) {
                        console.log("Response status: %d", t.status),
                          0 === t.status
                            ? (e = t.result)
                            : a.trackEvent("error_signup", t);
                      },
                      error: function (e, t, n) {
                        this.retry() || a.trackEvent("error_signup", t, n);
                      },
                    }),
                    e
                  );
                } finally {
                  console.groupEnd();
                }
              },
              servers: function (e) {
                var t = !1,
                  n = i.ajax({
                    type: "GET",
                    url: r + "servers",
                    async: !0,
                    success: function (n, r, o) {
                      t
                        ? "function" == typeof e && e("canceled")
                        : "function" == typeof e && e(null, n);
                    },
                    error: function (n, r, o) {
                      if (t)
                        return (
                          console.log(
                            "servers",
                            "request canceled: status:",
                            r,
                            "error:",
                            o
                          ),
                          void ("function" == typeof e && e("canceled"))
                        );
                      var i = { status: r, error: o };
                      console.error("browsec.servers", JSON.stringify(i)),
                        a.trackEvent(
                          "error",
                          "browsec.servers",
                          JSON.stringify(i)
                        ),
                        e(i);
                    },
                  });
                return {
                  cancel: function () {
                    (t = !0), n.abort();
                  },
                };
              },
            });
        e.exports = l;
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
      161: (e, t, n) => {
        var r = n(817),
          o = n(406).o,
          i = n(182).proxy,
          s = n(813),
          a = (function () {
            var e = ["google-analytics.com"],
              t = i.defaultCountry || "nl";
            function a(e, t) {
              return t &&
                Array.isArray(e.alt_ports) &&
                e.alt_ports.indexOf(t) >= 0
                ? t
                : e.port;
            }
            return {
              countryCodes: function (e, t) {
                void 0 === t && (t = this.isIncludeHidden()),
                  s.get(function (n, r) {
                    if (n) return console.error(n), void e([]);
                    var o = r.countries,
                      i = Object.keys(o)
                        .filter(function (e) {
                          return t || !o[e].hidden;
                        })
                        .filter(function (e) {
                          return Array.isArray(o[e].servers);
                        });
                    e(i);
                  });
              },
              isIncludeHidden: function () {
                return (
                  localStorage.includeHidden &&
                  JSON.parse(localStorage.includeHidden)
                );
              },
              setIncludeHidden: function (e) {
                localStorage.includeHidden = JSON.stringify(e);
              },
              isProxySet: function (e) {
                return (
                  "controlled_by_this_extension" == e.levelOfControl &&
                  "pac_script" == e.value.mode
                );
              },
              checkProxySet: function (e) {
                chrome.proxy.settings.get(
                  { incognito: !1 },
                  function (t) {
                    var n = this.isProxySet(t);
                    e(n);
                  }.bind(this)
                );
              },
              setProxySettings: function (n, i) {
                chrome.proxy.settings.get(
                  { incognito: !1 },
                  function (l) {
                    if (
                      void 0 !== l &&
                      "controllable_by_this_extension" != l.levelOfControl &&
                      "controlled_by_this_extension" != l.levelOfControl
                    )
                      console.warn(
                        "Proxy settings levelOfControl is: " + l.levelOfControl
                      ),
                        r.trackEvent(
                          "extension",
                          "alert",
                          "error_unable_change_proxy_settings " +
                            l.levelOfControl
                        ),
                        alert(
                          chrome.i18n.getMessage(
                            "error_unable_change_proxy_settings"
                          )
                        ),
                        "function" == typeof i && i(!1);
                    else {
                      var c =
                        localStorage.altPort && Number(localStorage.altPort);
                      s.get(function (r, s) {
                        if (r) i(!1);
                        else {
                          var l = s.countries,
                            u = l[n];
                          if (
                            (u ||
                              (console.warn(
                                "No servers for country: " +
                                  n +
                                  ", rolling back to default country"
                              ),
                              (u = l[(n = t)])),
                            !u)
                          )
                            return (
                              console.error(
                                "Failed to find any suitable servers, turning off"
                              ),
                              delete localStorage.lastConnected,
                              (localStorage.connected = "off"),
                              void i(!1)
                            );
                          var p = (function (e, t) {
                              for (
                                var n = "", r = o(e.servers), i = 0;
                                i < r.length;
                                i++
                              ) {
                                var s = a((c = r[i]), t);
                                n += "HTTPS " + c.host + ":" + s + "; ";
                              }
                              if (e.backupServers) {
                                var l = o(e.backupServers);
                                for (i = 0; i < l.length; i++) {
                                  var c;
                                  (s = a((c = l[i]), t)),
                                    (n += "HTTPS " + c.host + ":" + s + "; ");
                                }
                              }
                              return console.log("Srv string: " + n), n;
                            })(u, c),
                            f = {
                              mode: "pac_script",
                              pacScript: {
                                data: 'function domainIs(host,domain){return host==domain||dnsDomainIs(host,"."+domain)}function FindProxyForURL(url,host){var config="{0}";var bypass={1};host=host.toLowerCase();if(isPlainHostName(host)||isInNetEx(host,"127.0.0.0/8")||isInNetEx(host,"10.0.0.0/8")||isInNetEx(host,"172.16.0.0/12")||isInNetEx(host,"192.168.0.0/16")||isInNetEx(host,"fc00::/7")||isInNetEx(host,"fe80::/10")){return"DIRECT"}for(var i=0;i<bypass.length;i++){if(domainIs(host,bypass[i])){return"DIRECT"}}return config}'.format(
                                  p,
                                  JSON.stringify(e)
                                ),
                              },
                            };
                          chrome.proxy.settings.set(
                            { scope: "regular", value: f },
                            function () {
                              (localStorage.connected =
                                localStorage.lastConnected =
                                  n),
                                "function" == typeof i && i(!0);
                            }
                          );
                        }
                      });
                    }
                  }.bind(this)
                );
              },
              clearProxySettings: function (e) {
                chrome.proxy.settings.clear({ scope: "regular" }, function () {
                  (localStorage.connected = "off"),
                    "function" == typeof e && e(!0);
                });
              },
              logProxySettings: function () {
                chrome.proxy.settings.get({ incognito: !1 }, function (e) {
                  console.log(JSON.stringify(e));
                });
              },
              onChange: function (e) {
                console.log("Proxy on change: " + JSON.stringify(e)),
                  this.checkProxySet(function (e) {
                    ui.setUiConnectionStatus(e),
                      e || (localStorage.connected = "off");
                  });
              },
              connected: function (e) {
                var t = (e = e || n.g.localStorage).connected;
                return "off" !== t && t;
              },
              lastConnected: function (e) {
                return (e = e || n.g.localStorage).lastConnected || t;
              },
              detectDefaultCountry: function (e) {
                browsec.ipInfo(function (n) {
                  "NA" === n.continent_code || "SA" === n.continent_code
                    ? (t = "us")
                    : "SG" === n.country_code ||
                      "MY" === n.country_code ||
                      "ID" === n.country_code ||
                      "PH" === n.country_code ||
                      "TH" === n.country_code
                    ? (t = "sg")
                    : ("UK" !== n.country_code && "IE" !== n.country_code) ||
                      (t = "uk"),
                    e();
                });
              },
            };
          })();
        e.exports = a;
      },
      813: (e, t, n) => {
        var r = n(817),
          o = n(182).proxy.settings || {};
        function i(e) {
          if ("object" != typeof e || null === e)
            return "settings should be an object";
          if (!e.hasOwnProperty("countries"))
            return 'settings should have a "countries" property';
          var t = e.countries;
          if (0 === Object.keys(t).length)
            return "config should have at least one key (country)";
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              var r,
                o = t[n];
              if (
                !Array.isArray(o.servers) &&
                !Array.isArray(o.premium_servers)
              )
                return "country must have either 'servers' or 'premium_servers' fields set to an array of servers";
              if (Array.isArray(o.servers) && (r = s(o.servers))) return r;
              if (
                Array.isArray(o.premium_servers) &&
                (r = s(o.premium_servers))
              )
                return r;
            }
          return null;
        }
        function s(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if ("string" != typeof n.host)
              return "server must have a 'host' property";
            if ("string" != typeof n.port && "number" != typeof n.port)
              return "server must have a 'port' property";
          }
          return null;
        }
        function a(e) {
          (this.name = "ValidationError"),
            (this.message = e || ""),
            (this.stack = new Error().stack);
        }
        (t.set = function (e, t) {
          var n = i(e);
          if (n) throw new a(n);
          try {
            (localStorage.currentConfig = JSON.stringify(e)),
              "function" == typeof t &&
                setTimeout(function () {
                  t(null);
                }, 0);
          } catch (e) {
            "function" == typeof t &&
              setTimeout(function () {
                t(e);
              }, 0);
          }
        }),
          (a.prototype = Object.create(Error.prototype)),
          (a.prototype.constructor = a),
          (t.get = function (e) {
            var t = localStorage.currentConfig;
            if ("string" == typeof t)
              try {
                var n = JSON.parse(t),
                  s = i(n);
                if (s) throw new a(s);
                setTimeout(function () {
                  e(null, n || o);
                }, 0);
              } catch (t) {
                var l = "n/a";
                chrome.runtime &&
                  chrome.runtime.getManifest() &&
                  (l = chrome.runtime.getManifest().version);
                var c = t.toString();
                try {
                  for (var u = t.stack.split("\n"), p = 0; p < u.length; p++)
                    if (/ at .*\.js:.*/.test(u[p])) {
                      c += u[p];
                      break;
                    }
                } catch (e) {}
                r.trackEvent("error", l, c, 0, !1),
                  console.warn(
                    "invalid current configuration, fall back to default: ",
                    t
                  ),
                  delete localStorage.currentConfig,
                  setTimeout(function () {
                    e(null, o);
                  }, 0);
              }
            else
              setTimeout(function () {
                e(null, o);
              }, 0);
          }),
          (t.clear = function (e) {
            delete localStorage.currentConfig,
              "function" == typeof e && setTimeout(e, 0);
          });
      },
      281: (e, t, n) => {
        var r = n(161),
          o = {
            setUiConnectionStatus: function (e) {
              e
                ? chrome.browserAction.setIcon({
                    path: "images/icon-enabled.png",
                  })
                : chrome.browserAction.setIcon({
                    path: "images/icon-disabled.png",
                  });
            },
            updateUiConnectionStatus: function () {
              r.checkProxySet(
                function (e) {
                  this.setUiConnectionStatus(e);
                }.bind(this)
              );
            },
          };
        e.exports = o;
      },
      16: (e, t, n) => {
        var r = n(974),
          o = 3e5,
          i = 216e5;
        function s() {
          var e,
            t = !1,
            n = setTimeout(function () {
              console.log("retry"), s(), (t = !0), e && e.cancel();
            }, o);
          e = r.start(function (e) {
            e
              ? console.warn(
                  "Error updating severs, retrying in " + o / 6e4 + " minutes",
                  e
                )
              : t
              ? console.error(
                  "Attempting to complete an already-canceled update task"
                )
              : (clearTimeout(n),
                setTimeout(function () {
                  console.log("refresh"), s();
                }, i));
          });
        }
        t.init = function (e) {
          console.log("init"),
            (o = (e = e || {}).retryTimeout || o),
            (i = e.refreshTimeout || i),
            setTimeout(s, 0);
        };
      },
      974: (e, t, n) => {
        var r = n(813),
          o = n(161),
          i = n(277);
        t.start = function (e) {
          var t, n;
          return (
            console.log("update"),
            (n = !1),
            (t = i.servers(function (t, i) {
              t
                ? "function" == typeof e && e(t)
                : n
                ? "function" == typeof e && e("canceled")
                : r.set(i, function (t) {
                    if (t) "function" == typeof e && e(t);
                    else if (n) "function" == typeof e && e("canceled");
                    else if (o.connected(localStorage)) {
                      var r = o.lastConnected(localStorage);
                      o.setProxySettings(r, function (t) {
                        n
                          ? "function" == typeof e && e("canceled")
                          : "function" == typeof e &&
                            (t
                              ? e()
                              : e(
                                  new Error("failed to update proxy settings")
                                ));
                      });
                    } else {
                      if (n)
                        return void ("function" == typeof e && e("canceled"));
                      if ("function" == typeof e) return void e(null);
                    }
                  });
            })),
            {
              cancel: function () {
                (n = !0), t && t.cancel();
              },
            }
          );
        };
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
      var e = n(755);
      n(648);
      var t = (n.g.proxy = n(161)),
        r = (n.g.scheduler = n(16));
      chrome.proxy.settings.onChange.addListener(t.onChange.bind(t));
      var o = (n.g.ui = n(281)),
        i = (n.g.browsec = n(277)),
        s = n(817);
      i.init(),
        chrome.webRequest.onAuthRequired.addListener(
          function (e, n) {
            try {
              if (
                (console.group("onAuthRequired"),
                console.log(e),
                e.isProxy &&
                  "Browsec" == e.realm &&
                  ("postlm.com" == e.challenger.host ||
                    e.challenger.host.endsWith(".postlm.com") ||
                    "postls.com" == e.challenger.host ||
                    e.challenger.host.endsWith(".postls.com")))
              ) {
                var r = localStorage.userId || localStorage.email,
                  o = localStorage.password;
                if (
                  !r ||
                  !o ||
                  (r.indexOf("@") > 0 &&
                    (function (e) {
                      var t = localStorage.authHistory
                        ? JSON.parse(localStorage.authHistory)
                        : {};
                      try {
                        console.group("checkAuthLimitExceeded");
                        var n = t[e.challenger.host];
                        if (n && n.periodStart && n.authRequestsNum) {
                          console.log(
                            "Host history record already exists: %s",
                            JSON.stringify(n)
                          );
                          var r = n.periodStart;
                          if (e.timeStamp - r > 15e3)
                            console.log(
                              "Time frame already finished. Create new row."
                            ),
                              (n.periodStart = e.timeStamp),
                              (n.authRequestsNum = 1);
                          else if (
                            (console.log(
                              "We are still in tracked time frame. Increase auth requests counter"
                            ),
                            n.authRequestsNum++,
                            n.authRequestsNum >= 3)
                          )
                            return (
                              console.log(
                                "Limit exceeded. Return true and clear host auth history."
                              ),
                              delete n.periodStart,
                              delete n.authRequestsNum,
                              s.trackEvent(
                                "auth_request_limit_exceeded",
                                localStorage.userId || localStorage.email
                              ),
                              !0
                            );
                        } else
                          (n = t[e.challenger.host] =
                            { periodStart: e.timeStamp, authRequestsNum: 1 }),
                            console.log(
                              "No host auth history. Create record: %s",
                              JSON.stringify(n)
                            );
                        return !1;
                      } finally {
                        console.log("Save auth history: %O", t),
                          (localStorage.authHistory = JSON.stringify(t)),
                          console.groupEnd();
                      }
                    })(e))
                ) {
                  var a = i.signup();
                  if (!a)
                    return (
                      t.clearProxySettings(),
                      void alert(chrome.i18n.getMessage("signup_error"))
                    );
                  delete localStorage.email,
                    (localStorage.userId = r = a.user_id),
                    (localStorage.password = o = a.password);
                }
                console.log("Authenticate with username '%s'", r),
                  n({ authCredentials: { username: r, password: o } });
              } else n();
            } finally {
              console.groupEnd();
            }
          },
          { urls: ["<all_urls>"] },
          ["asyncBlocking"]
        );
      var a = new RegExp("^HTTP/1.[01] 408");
      chrome.webRequest.onHeadersReceived.addListener(
        function (e) {
          localStorage.connected &&
            "off" != localStorage.connected &&
            a.test(e.statusLine) &&
            s.trackEvent("extension", "http_error", e.statusLine);
        },
        { urls: ["<all_urls>"] }
      ),
        chrome.runtime.onInstalled.addListener(function (n) {
          if (
            (console.log("chrome.runtime.onInstalled", n),
            s.trackEvent(
              "extension",
              n.reason,
              chrome.runtime.getManifest().version
            ),
            "install" == n.reason)
          )
            t.detectDefaultCountry(function () {
              t.setProxySettings(t.lastConnected(), function (t) {
                e.ajax({
                  url: "http://www.google.com/favicon.ico",
                  cache: !1,
                  complete: function (e, t) {
                    console.log("Complete test request: %s", t);
                  },
                });
              });
            });
          else if ("update" == n.reason) {
            var r = n.previousVersion,
              i = chrome.runtime.getManifest().version;
            r <= "2.2.99" && i >= "2.3.0"
              ? "de" === t.connected() && t.setProxySettings("uk")
              : t.connected() &&
                t.setProxySettings(t.lastConnected(), function () {
                  o.updateUiConnectionStatus();
                });
          } else
            t.connected() &&
              t.setProxySettings(t.lastConnected(), function () {
                o.updateUiConnectionStatus();
              });
          o.updateUiConnectionStatus();
        }),
        chrome.proxy.onProxyError.addListener(function (e) {
          t.checkProxySet(function (t) {
            t &&
              (console.error("Proxy on error: " + JSON.stringify(e)),
              s.trackEvent("extension", "proxy_error", JSON.stringify(e)));
          });
        }),
        chrome.runtime.onStartup.addListener(function () {
          console.log("chrome.runtime.onStartup"),
            delete localStorage.lastRedirectOnError,
            o.updateUiConnectionStatus(),
            s.trackEvent(
              "extension",
              "start",
              chrome.runtime.getManifest().version
            );
        }),
        r.init();
    })();
})();
