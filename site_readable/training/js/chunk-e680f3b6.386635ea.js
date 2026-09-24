(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-e680f3b6"],
  {
    "057f": function (e, t, n) {
      var r = n("fc6a"),
        a = n("241c").f,
        u = {}.toString,
        i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        o = function (e) {
          try {
            return a(e);
          } catch (t) {
            return i.slice();
          }
        };
      e.exports.f = function (e) {
        return i && "[object Window]" == u.call(e) ? o(e) : a(r(e));
      };
    },
    "535f": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      (n("a4d3"), n("e01a"), n("d28b"), n("99af"), n("0d03"), n("d3b7"), n("25f0"), n("3ca3"), n("498a"), n("ddb0"));
      var r = n("9f12"),
        a = n("53fe"),
        u = n("8b83"),
        i = n("c65a"),
        o = n("9aa6"),
        c = n("c03e"),
        s = n("2fa7"),
        l = n("60a3"),
        p = n("73ec"),
        f = n("70b0"),
        d = (function (e) {
          function t() {
            var e, n;
            Object(r["a"])(this, t);
            for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++) c[l] = arguments[l];
            return (
              (n = Object(u["a"])(this, (e = Object(i["a"])(t)).call.apply(e, [this].concat(c)))),
              Object(s["a"])(Object(o["a"])(n), "counTimerInterval", null),
              Object(s["a"])(Object(o["a"])(n), "countTimer", 0),
              n
            );
          }
          return (
            Object(c["a"])(t, e),
            Object(a["a"])(t, [
              {
                key: "loading",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f["a"].t("lang.加载中").toString(),
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                  Object(p["n"])(e, t, n, r);
                },
              },
              {
                key: "msg",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
                    n = arguments.length > 2 ? arguments[2] : void 0;
                  return Object(p["o"])(e, t, n);
                },
              },
              {
                key: "alert",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0;
                  Object(p["a"])(e, t, n, r);
                },
              },
              {
                key: "confirm",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f["a"].t("lang.确定").toString(),
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f["a"].t("lang.取消").toString(),
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    u = arguments.length > 5 ? arguments[5] : void 0,
                    i = arguments.length > 6 ? arguments[6] : void 0;
                  Object(p["d"])(e, t, n, r, a, u, i);
                },
              },
              {
                key: "prompt",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f["a"].t("lang.确定").toString(),
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f["a"].t("lang.取消").toString(),
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    u = arguments.length > 5 ? arguments[5] : void 0;
                  arguments.length > 6 && arguments[6];
                  Object(p["p"])(e, t, n, r, a, u);
                },
              },
              {
                key: "isNullOrEmpty",
                value: function (e) {
                  if (!e) return !0;
                  var t = e,
                    n = t.trim();
                  return 0 === n.length;
                },
              },
              {
                key: "anyIsNullOrEmpty",
                value: function (e) {
                  if (!e) return !0;
                  var t = !0,
                    n = !1,
                    r = void 0;
                  try {
                    for (var a, u = e[Symbol.iterator](); !(t = (a = u.next()).done); t = !0) {
                      var i = a.value;
                      if (this.isNullOrEmpty(i)) return !0;
                    }
                  } catch (o) {
                    ((n = !0), (r = o));
                  } finally {
                    try {
                      t || null == u.return || u.return();
                    } finally {
                      if (n) throw r;
                    }
                  }
                  return !1;
                },
              },
              {
                key: "deepClone",
                value: function (e) {
                  var t = JSON.stringify(e),
                    n = JSON.parse(t);
                  return n;
                },
              },
              {
                key: "resetTimer",
                value: function () {
                  this.countTimer = 0;
                },
              },
              {
                key: "startTimer",
                value: function () {
                  var e = this;
                  e.counTimerInterval ||
                    (e.counTimerInterval = setInterval(function () {
                      e.countTimer++;
                    }, 1e3));
                },
              },
              {
                key: "stopTimer",
                value: function () {
                  (this.pauseTimer(), this.resetTimer());
                },
              },
              {
                key: "pauseTimer",
                value: function () {
                  var e = this;
                  e.counTimerInterval && (clearInterval(e.counTimerInterval), (e.counTimerInterval = null));
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  (console.log("beforeDestroy"), this.stopTimer());
                },
              },
            ]),
            t
          );
        })(l["c"]);
    },
    "746f": function (e, t, n) {
      var r = n("428f"),
        a = n("5135"),
        u = n("c032"),
        i = n("9bf2").f;
      e.exports = function (e) {
        var t = r.Symbol || (r.Symbol = {});
        a(t, e) || i(t, e, { value: u.f(e) });
      };
    },
    a4d3: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("da84"),
        u = n("c430"),
        i = n("83ab"),
        o = n("4930"),
        c = n("d039"),
        s = n("5135"),
        l = n("e8b5"),
        p = n("861d"),
        f = n("825a"),
        d = n("7b0b"),
        h = n("fc6a"),
        b = n("c04e"),
        m = n("5c6c"),
        v = n("7c73"),
        g = n("df75"),
        y = n("241c"),
        k = n("057f"),
        T = n("7418"),
        w = n("06cf"),
        O = n("9bf2"),
        j = n("d1e7"),
        x = n("9112"),
        S = n("6eeb"),
        R = n("5692"),
        I = n("f772"),
        C = n("d012"),
        P = n("90e3"),
        G = n("b622"),
        E = n("c032"),
        _ = n("746f"),
        N = n("d44e"),
        D = n("69f3"),
        A = n("b727").forEach,
        J = I("hidden"),
        z = "Symbol",
        B = "prototype",
        U = G("toPrimitive"),
        F = D.set,
        H = D.getterFor(z),
        W = Object[B],
        $ = a.Symbol,
        L = a.JSON,
        Q = L && L.stringify,
        q = w.f,
        K = O.f,
        M = k.f,
        V = j.f,
        X = R("symbols"),
        Y = R("op-symbols"),
        Z = R("string-to-symbol-registry"),
        ee = R("symbol-to-string-registry"),
        te = R("wks"),
        ne = a.QObject,
        re = !ne || !ne[B] || !ne[B].findChild,
        ae =
          i &&
          c(function () {
            return (
              7 !=
              v(
                K({}, "a", {
                  get: function () {
                    return K(this, "a", { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function (e, t, n) {
                var r = q(W, t);
                (r && delete W[t], K(e, t, n), r && e !== W && K(W, t, r));
              }
            : K,
        ue = function (e, t) {
          var n = (X[e] = v($[B]));
          return (F(n, { type: z, tag: e, description: t }), i || (n.description = t), n);
        },
        ie =
          o && "symbol" == typeof $.iterator
            ? function (e) {
                return "symbol" == typeof e;
              }
            : function (e) {
                return Object(e) instanceof $;
              },
        oe = function (e, t, n) {
          (e === W && oe(Y, t, n), f(e));
          var r = b(t, !0);
          return (
            f(n),
            s(X, r)
              ? (n.enumerable ? (s(e, J) && e[J][r] && (e[J][r] = !1), (n = v(n, { enumerable: m(0, !1) }))) : (s(e, J) || K(e, J, m(1, {})), (e[J][r] = !0)),
                ae(e, r, n))
              : K(e, r, n)
          );
        },
        ce = function (e, t) {
          f(e);
          var n = h(t),
            r = g(n).concat(de(n));
          return (
            A(r, function (t) {
              (i && !le.call(n, t)) || oe(e, t, n[t]);
            }),
            e
          );
        },
        se = function (e, t) {
          return void 0 === t ? v(e) : ce(v(e), t);
        },
        le = function (e) {
          var t = b(e, !0),
            n = V.call(this, t);
          return !(this === W && s(X, t) && !s(Y, t)) && (!(n || !s(this, t) || !s(X, t) || (s(this, J) && this[J][t])) || n);
        },
        pe = function (e, t) {
          var n = h(e),
            r = b(t, !0);
          if (n !== W || !s(X, r) || s(Y, r)) {
            var a = q(n, r);
            return (!a || !s(X, r) || (s(n, J) && n[J][r]) || (a.enumerable = !0), a);
          }
        },
        fe = function (e) {
          var t = M(h(e)),
            n = [];
          return (
            A(t, function (e) {
              s(X, e) || s(C, e) || n.push(e);
            }),
            n
          );
        },
        de = function (e) {
          var t = e === W,
            n = M(t ? Y : h(e)),
            r = [];
          return (
            A(n, function (e) {
              !s(X, e) || (t && !s(W, e)) || r.push(X[e]);
            }),
            r
          );
        };
      (o ||
        (($ = function () {
          if (this instanceof $) throw TypeError("Symbol is not a constructor");
          var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = P(e),
            n = function (e) {
              (this === W && n.call(Y, e), s(this, J) && s(this[J], t) && (this[J][t] = !1), ae(this, t, m(1, e)));
            };
          return (i && re && ae(W, t, { configurable: !0, set: n }), ue(t, e));
        }),
        S($[B], "toString", function () {
          return H(this).tag;
        }),
        (j.f = le),
        (O.f = oe),
        (w.f = pe),
        (y.f = k.f = fe),
        (T.f = de),
        i &&
          (K($[B], "description", {
            configurable: !0,
            get: function () {
              return H(this).description;
            },
          }),
          u || S(W, "propertyIsEnumerable", le, { unsafe: !0 })),
        (E.f = function (e) {
          return ue(G(e), e);
        })),
        r({ global: !0, wrap: !0, forced: !o, sham: !o }, { Symbol: $ }),
        A(g(te), function (e) {
          _(e);
        }),
        r(
          { target: z, stat: !0, forced: !o },
          {
            for: function (e) {
              var t = String(e);
              if (s(Z, t)) return Z[t];
              var n = $(t);
              return ((Z[t] = n), (ee[n] = t), n);
            },
            keyFor: function (e) {
              if (!ie(e)) throw TypeError(e + " is not a symbol");
              if (s(ee, e)) return ee[e];
            },
            useSetter: function () {
              re = !0;
            },
            useSimple: function () {
              re = !1;
            },
          },
        ),
        r({ target: "Object", stat: !0, forced: !o, sham: !i }, { create: se, defineProperty: oe, defineProperties: ce, getOwnPropertyDescriptor: pe }),
        r({ target: "Object", stat: !0, forced: !o }, { getOwnPropertyNames: fe, getOwnPropertySymbols: de }),
        r(
          {
            target: "Object",
            stat: !0,
            forced: c(function () {
              T.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (e) {
              return T.f(d(e));
            },
          },
        ),
        L &&
          r(
            {
              target: "JSON",
              stat: !0,
              forced:
                !o ||
                c(function () {
                  var e = $();
                  return "[null]" != Q([e]) || "{}" != Q({ a: e }) || "{}" != Q(Object(e));
                }),
            },
            {
              stringify: function (e) {
                var t,
                  n,
                  r = [e],
                  a = 1;
                while (arguments.length > a) r.push(arguments[a++]);
                if (((n = t = r[1]), (p(t) || void 0 !== e) && !ie(e)))
                  return (
                    l(t) ||
                      (t = function (e, t) {
                        if (("function" == typeof n && (t = n.call(this, e, t)), !ie(t))) return t;
                      }),
                    (r[1] = t),
                    Q.apply(L, r)
                  );
              },
            },
          ),
        $[B][U] || x($[B], U, $[B].valueOf),
        N($, z),
        (C[J] = !0));
    },
    a678: function (e, t, n) {
      "use strict";
      (n("99af"), n("4160"), n("159b"), n("96cf"));
      var r = n("89ba"),
        a = n("9f12"),
        u = n("53fe"),
        i = n("8b83"),
        o = n("c65a"),
        c = n("9aa6"),
        s = n("c03e"),
        l = n("2fa7"),
        p = n("59b9"),
        f = n("482f"),
        d = n("a0f7"),
        h = n("0613"),
        b = (function (e) {
          function t() {
            var e, n;
            Object(a["a"])(this, t);
            for (var r = arguments.length, u = new Array(r), s = 0; s < r; s++) u[s] = arguments[s];
            return (
              (n = Object(i["a"])(this, (e = Object(o["a"])(t)).call.apply(e, [this].concat(u)))),
              Object(l["a"])(Object(c["a"])(n), "pageSize", 10),
              Object(l["a"])(Object(c["a"])(n), "itemsCount", 0),
              n
            );
          }
          return (
            Object(s["a"])(t, e),
            Object(u["a"])(t, [
              {
                key: "ListByPage",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((t.userId = this.userId), (e.next = 3), this.WebGet("/api/Task/GetTaskPage", t));
                              case 3:
                                return (
                                  (n = e.sent),
                                  (r = new d["a"]()),
                                  n && 0 == n.code ? ((r.status = !0), (r.list = n.data.rows), (r.page = n.data)) : ((r.status = !1), (r.msg = n.msg)),
                                  e.abrupt("return", r)
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getTaskPage",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Object(p["a"])({
                                    url: "".concat(f["a"].web_host, "/api/Task/GetTaskPage"),
                                    method: "GET",
                                    params: { page: t, rows: this.pageSize, userId: this.userId },
                                  })
                                );
                              case 2:
                                return (
                                  (n = e.sent),
                                  (r = []),
                                  "undefined" !== typeof n &&
                                    0 === n.code &&
                                    ((this.itemsCount = n.data.records),
                                    n.data.rows.forEach(function (e) {
                                      r.push(e);
                                    })),
                                  e.abrupt("return", r)
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "GetItemsCount",
                value: function () {
                  return this.itemsCount;
                },
              },
              {
                key: "GetTask",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return (
                                (e.next = 4),
                                Object(p["a"])({
                                  url: "".concat(f["a"].web_host, "/api/Task/GetTask/").concat(t),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                })
                              );
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "addTask",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t, n) {
                      var r;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(p["a"])({
                                  url: "".concat(f["a"].web_host, "/api/Task/AddTask"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: { task: t, students: n },
                                })
                              );
                            case 2:
                              return ((r = e.sent), e.abrupt("return", r));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "editTask",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t, n) {
                      var r;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(p["a"])({
                                  url: "".concat(f["a"].web_host, "/api/Task/EditTask"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: { task: t, students: n },
                                })
                              );
                            case 2:
                              return ((r = e.sent), e.abrupt("return", r));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "deleteTask",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return (
                                (e.next = 4),
                                Object(p["a"])({
                                  url: "".concat(f["a"].web_host, "/api/Task/DeleteTask/").concat(t),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                })
                              );
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "bacthDeleteTask",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 1)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return ((e.next = 4), Object(p["a"])({ url: "".concat(f["a"].web_host, "/api/Task/BatchDeleteTask"), method: "POST", data: t }));
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "calculateTaskResult",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return (
                                (e.next = 4),
                                Object(p["a"])({
                                  url: "".concat(f["a"].web_host, "/api/Task/calculateTaskResult"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { id: t },
                                })
                              );
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "checkCalculateTaskResult",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return (
                                (e.next = 4),
                                Object(p["a"])({
                                  url: "".concat(f["a"].web_host, "/api/Task/checkCalculateTaskResult"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { id: t },
                                })
                              );
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "GetTaskPublishState",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return (
                                (e.next = 4),
                                Object(p["a"])({
                                  url: "".concat(f["a"].web_host, "/api/TaskRecord/GetTaskPublishState"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { id: t },
                                })
                              );
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "userId",
                get: function () {
                  return h["a"].getters["user/userId"];
                },
              },
            ]),
            t
          );
        })(d["e"]);
      t["a"] = new b();
    },
    c032: function (e, t, n) {
      t.f = n("b622");
    },
    d28b: function (e, t, n) {
      var r = n("746f");
      r("iterator");
    },
    e01a: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        a = n("83ab"),
        u = n("da84"),
        i = n("5135"),
        o = n("861d"),
        c = n("9bf2").f,
        s = n("e893"),
        l = u.Symbol;
      if (a && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
        var p = {},
          f = function () {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              t = this instanceof f ? new l(e) : void 0 === e ? l() : l(e);
            return ("" === e && (p[t] = !0), t);
          };
        s(f, l);
        var d = (f.prototype = l.prototype);
        d.constructor = f;
        var h = d.toString,
          b = "Symbol(test)" == String(l("test")),
          m = /^Symbol\((.*)\)[^)]+$/;
        (c(d, "description", {
          configurable: !0,
          get: function () {
            var e = o(this) ? this.valueOf() : this,
              t = h.call(e);
            if (i(p, e)) return "";
            var n = b ? t.slice(7, -1) : t.replace(m, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          r({ global: !0, forced: !0 }, { Symbol: f }));
      }
    },
    e9bd: function (e, t, n) {
      "use strict";
      n("96cf");
      var r = n("89ba"),
        a = n("9f12"),
        u = n("53fe"),
        i = n("2fa7"),
        o = n("59b9"),
        c = n("482f"),
        s = n("a0f7"),
        l = (function () {
          function e() {
            (Object(a["a"])(this, e), Object(i["a"])(this, "pageSize", 10), Object(i["a"])(this, "itemsCount", 0));
          }
          return (
            Object(u["a"])(e, [
              {
                key: "getTasktemplatePage",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t, n, r, a, u, i) {
                      var l, p;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/GetTaskTemplatePage"),
                                  method: "GET",
                                  params: { collegeId: t, teacherId: n, pageIndex: r, size: a, key: u, lessonId: i },
                                })
                              );
                            case 2:
                              return (
                                (l = e.sent),
                                (p = new s["a"]()),
                                l && 0 == l.code ? ((p.status = !0), (p.list = l.data.rows), (p.page = l.data)) : ((p.status = !1), (p.msg = l.msg)),
                                e.abrupt("return", p)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, n, r, a, u, i) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getTasktemplatePageByTeacherId",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t, n, r, a, u, i) {
                      var l, p;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/GetTaskTemplatePageByTeacherId"),
                                  method: "GET",
                                  params: { collegeId: t, teacherId: n, pageIndex: r, size: a, key: u, lessonId: i },
                                })
                              );
                            case 2:
                              return (
                                (l = e.sent),
                                (p = new s["a"]()),
                                l && 0 == l.code ? ((p.status = !0), (p.list = l.data.rows), (p.page = l.data)) : ((p.status = !1), (p.msg = l.msg)),
                                e.abrupt("return", p)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, n, r, a, u, i) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "GetItemsCount",
                value: function () {
                  return this.itemsCount;
                },
              },
              {
                key: "GetTasktemplate",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return (
                                (e.next = 4),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/GetTaskTemplate"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { id: t },
                                })
                              );
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getAllTasktemplateInfo",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t, n) {
                      var r;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/GetAllTaskTemplateInfo"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { teacherId: t, collegeId: n },
                                })
                              );
                            case 2:
                              return ((r = e.sent), e.abrupt("return", r));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "addOrUpdateTemplateHead",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/AddOrUpdateTemplateHead"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: t,
                                })
                              );
                            case 2:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "addOrUpdataTemplateSections",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t, n, r) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/AddOrUpdateTemplateSections"),
                                  headers: { "Content-Type": "application/json-patch+json" },
                                  method: "POST",
                                  data: { templateId: t, sections: n, deleteIds: r },
                                })
                              );
                            case 2:
                              return ((a = e.sent), e.abrupt("return", a));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, n, r) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "deleteTasktemplate",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return (
                                (e.next = 4),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/DeleteTaskTemplate"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { id: t },
                                })
                              );
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "bacthDeleteTasktemplate",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 1)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 2:
                              return (
                                (e.next = 4),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/BacthDeleteTaskTemplate"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: t,
                                })
                              );
                            case 4:
                              return ((n = e.sent), e.abrupt("return", n));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "copyTasktemplateToTeacher",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t, n, r) {
                      var a,
                        u,
                        i = arguments;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((a = i.length > 3 && void 0 !== i[3] ? i[3] : ""), t && !(t.length < 1) && n)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 3:
                              return (
                                (e.next = 5),
                                Object(o["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/CopyTemplate"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: { ids: t, teacherId: n, teacherName: r, nameSuffix: a },
                                })
                              );
                            case 5:
                              return ((u = e.sent), e.abrupt("return", u));
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, n, r) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            e
          );
        })();
      t["a"] = new l();
    },
  },
]);
