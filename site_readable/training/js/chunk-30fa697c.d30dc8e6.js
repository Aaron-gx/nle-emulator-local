(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-30fa697c"],
  {
    "057f": function (t, e, n) {
      var r = n("fc6a"),
        a = n("241c").f,
        i = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        c = function (t) {
          try {
            return a(t);
          } catch (e) {
            return o.slice();
          }
        };
      t.exports.f = function (t) {
        return o && "[object Window]" == i.call(t) ? c(t) : a(r(t));
      };
    },
    "3a37": function (t, e, n) {
      ((e = t.exports = n("24fb")(!1)),
        e.push([
          t.i,
          ".main-title[data-v-035b28cc]{z-index:99;background:#313136;padding:0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.main-title>div[data-v-035b28cc]{height:60px;cursor:pointer}.main-title .title-right .right-menu[data-v-035b28cc],.main-title>div[data-v-035b28cc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.main-title .title-right .right-menu[data-v-035b28cc]{color:#ebf3ff}.main-title .title-right .right-menu .top-btn[data-v-035b28cc]{font-size:16px;margin:0 35px 0 5px}.main-title .title-right .right-menu .userName[data-v-035b28cc]{margin:8px}.main-title .title-right .right-menu[data-v-035b28cc] .el-link--inner{color:#fff}",
          "",
        ]));
    },
    "535f": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return g;
      });
      (n("a4d3"), n("e01a"), n("d28b"), n("99af"), n("0d03"), n("d3b7"), n("25f0"), n("3ca3"), n("498a"), n("ddb0"));
      var r = n("9f12"),
        a = n("53fe"),
        i = n("8b83"),
        o = n("c65a"),
        c = n("9aa6"),
        s = n("c03e"),
        l = n("2fa7"),
        u = n("60a3"),
        f = n("73ec"),
        p = n("70b0"),
        g = (function (t) {
          function e() {
            var t, n;
            Object(r["a"])(this, e);
            for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u];
            return (
              (n = Object(i["a"])(this, (t = Object(o["a"])(e)).call.apply(t, [this].concat(s)))),
              Object(l["a"])(Object(c["a"])(n), "counTimerInterval", null),
              Object(l["a"])(Object(c["a"])(n), "countTimer", 0),
              n
            );
          }
          return (
            Object(s["a"])(e, t),
            Object(a["a"])(e, [
              {
                key: "loading",
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p["a"].t("lang.加载中").toString(),
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                  Object(f["n"])(t, e, n, r);
                },
              },
              {
                key: "msg",
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
                    n = arguments.length > 2 ? arguments[2] : void 0;
                  return Object(f["o"])(t, e, n);
                },
              },
              {
                key: "alert",
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0;
                  Object(f["a"])(t, e, n, r);
                },
              },
              {
                key: "confirm",
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p["a"].t("lang.确定").toString(),
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p["a"].t("lang.取消").toString(),
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = arguments.length > 5 ? arguments[5] : void 0,
                    o = arguments.length > 6 ? arguments[6] : void 0;
                  Object(f["d"])(t, e, n, r, a, i, o);
                },
              },
              {
                key: "prompt",
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p["a"].t("lang.确定").toString(),
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p["a"].t("lang.取消").toString(),
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = arguments.length > 5 ? arguments[5] : void 0;
                  arguments.length > 6 && arguments[6];
                  Object(f["p"])(t, e, n, r, a, i);
                },
              },
              {
                key: "isNullOrEmpty",
                value: function (t) {
                  if (!t) return !0;
                  var e = t,
                    n = e.trim();
                  return 0 === n.length;
                },
              },
              {
                key: "anyIsNullOrEmpty",
                value: function (t) {
                  if (!t) return !0;
                  var e = !0,
                    n = !1,
                    r = void 0;
                  try {
                    for (var a, i = t[Symbol.iterator](); !(e = (a = i.next()).done); e = !0) {
                      var o = a.value;
                      if (this.isNullOrEmpty(o)) return !0;
                    }
                  } catch (c) {
                    ((n = !0), (r = c));
                  } finally {
                    try {
                      e || null == i.return || i.return();
                    } finally {
                      if (n) throw r;
                    }
                  }
                  return !1;
                },
              },
              {
                key: "deepClone",
                value: function (t) {
                  var e = JSON.stringify(t),
                    n = JSON.parse(e);
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
                  var t = this;
                  t.counTimerInterval ||
                    (t.counTimerInterval = setInterval(function () {
                      t.countTimer++;
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
                  var t = this;
                  t.counTimerInterval && (clearInterval(t.counTimerInterval), (t.counTimerInterval = null));
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  (console.log("beforeDestroy"), this.stopTimer());
                },
              },
            ]),
            e
          );
        })(u["c"]);
    },
    "746f": function (t, e, n) {
      var r = n("428f"),
        a = n("5135"),
        i = n("c032"),
        o = n("9bf2").f;
      t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = {});
        a(e, t) || o(e, t, { value: i.f(t) });
      };
    },
    "7f94": function (t, e, n) {
      "use strict";
      n.r(e);
      var r,
        a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("el-container", { attrs: { direction: "vertical" } }, [n("ctop"), n("el-main", { staticClass: "main-el" }, [n("router-view")], 1)], 1);
        },
        i = [],
        o = (n("99af"), n("7db0"), n("ac1f"), n("8a79"), n("5319"), n("9f12")),
        c = n("53fe"),
        s = n("8b83"),
        l = n("c65a"),
        u = n("9aa6"),
        f = n("c03e"),
        p = n("2fa7"),
        g = n("9ab4"),
        b = n("60a3"),
        v = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "main-title no-select" }, [
            n("div", { on: { click: t.GoIndex } }, [
              n("img", { attrs: { src: t.window.BASE_URL + "config/pic_logo_NLECloud.png" } }),
              t.config.title
                ? n("h1", { staticStyle: { color: "#ddd", margin: "5px 15px" } }, [t._v(t._s(t.config.title))])
                : n("h1", { staticStyle: { color: "#ddd", margin: "5px 15px" } }, [t._v(t._s(t.$t("lang.物联网仿真实训教学平台")))]),
            ]),
            n("div", { staticClass: "title-right" }, [
              n(
                "div",
                { staticClass: "right-menu" },
                [
                  n("el-avatar", { attrs: { size: 26, src: t.circleUrl } }),
                  n(
                    "el-link",
                    { attrs: { underline: !1, href: "#" } },
                    [
                      n(
                        "el-popover",
                        { attrs: { placement: "top-start", trigger: "hover" } },
                        [
                          n("CRightInfoPanel", { attrs: { userInfo: t.user, userRole: t.userRole, onHomePage: !1 } }),
                          n("el-link", { attrs: { slot: "reference", type: "danger" }, slot: "reference" }, [
                            n("div", { staticClass: "userName", attrs: { title: t.user.name } }, [t._v(" " + t._s(t.user.name) + " ")]),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ]),
          ]);
        },
        d = [],
        h = n("73ec"),
        m = n("482f"),
        y = n("ac74"),
        O =
          ((r = (function (t) {
            function e() {
              var t, n;
              Object(o["a"])(this, e);
              for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
              return (
                (n = Object(s["a"])(this, (t = Object(l["a"])(e)).call.apply(t, [this].concat(a)))),
                Object(p["a"])(Object(u["a"])(n), "circleUrl", "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"),
                Object(p["a"])(Object(u["a"])(n), "window", window),
                n
              );
            }
            return (
              Object(f["a"])(e, t),
              Object(c["a"])(e, [
                {
                  key: "GoIndex",
                  value: function () {
                    this.$router.push("/");
                  },
                },
                {
                  key: "lang",
                  get: function () {
                    return Object(h["k"])("language");
                  },
                },
                {
                  key: "user",
                  get: function () {
                    return this.$store.state.user.user;
                  },
                },
                {
                  key: "userRole",
                  get: function () {
                    return this.$store.getters["user/userRole"];
                  },
                },
                { key: "title", get: function () {} },
                {
                  key: "config",
                  get: function () {
                    return m["a"];
                  },
                },
              ]),
              e
            );
          })(b["c"])),
          r);
      O = Object(g["a"])([Object(b["a"])({ components: { CRightInfoPanel: y["a"] } })], O);
      var j,
        w = O,
        k = w,
        S = (n("c1eb"), n("2877")),
        x = Object(S["a"])(k, v, d, !1, null, "035b28cc", null),
        _ = x.exports,
        $ = n("535f"),
        I =
          ((j = (function (t) {
            function e() {
              var t, n;
              Object(o["a"])(this, e);
              for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
              return (
                (n = Object(s["a"])(this, (t = Object(l["a"])(e)).call.apply(t, [this].concat(a)))),
                Object(p["a"])(Object(u["a"])(n), "roleSettings", m["a"].roleSettings),
                n
              );
            }
            return (
              Object(f["a"])(e, t),
              Object(c["a"])(e, [
                {
                  key: "mounted",
                  value: function () {
                    (console.log(this.userRole),
                      location.href.endsWith("/main") &&
                        ("老师" == this.userRole
                          ? this.$router.replace("/main/teacher/stat")
                          : "学生" == this.userRole
                            ? this.$router.replace("/main/student/home")
                            : "管理员" == this.userRole
                              ? this.$router.replace("/main/admin")
                              : this.$router.replace("/")));
                  },
                },
                {
                  key: "routeDefualt",
                  value: function () {
                    var t = this,
                      e = this.roleSettings.find(function (e) {
                        return e.roleName == t.userRole;
                      });
                    (console.log(e),
                      e
                        ? (console.log("is roleDefault"), this.$router.push({ path: e.defualtPath }))
                        : (console.log("not roleDefault"),
                          this.msg("【".concat(this.userRole, "】页面正在开发中,敬请期待..."), "info"),
                          this.$router.push({ path: "/" })));
                  },
                },
                {
                  key: "userRole",
                  get: function () {
                    return this.$store.getters["user/userRole"];
                  },
                },
              ]),
              e
            );
          })($["a"])),
          j);
      I = Object(g["a"])(
        [
          Object(b["a"])({
            components: { ctop: _ },
            beforeRouteEnter: function (t, e, n) {
              n();
            },
          }),
        ],
        I,
      );
      var R = I,
        T = R,
        P = (n("a67d"), Object(S["a"])(T, a, i, !1, null, "403e5a28", null));
      e["default"] = P.exports;
    },
    "8a79": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        a = n("50c4"),
        i = n("5a34"),
        o = n("1d80"),
        c = n("ab13"),
        s = "".endsWith,
        l = Math.min;
      r(
        { target: "String", proto: !0, forced: !c("endsWith") },
        {
          endsWith: function (t) {
            var e = String(o(this));
            i(t);
            var n = arguments.length > 1 ? arguments[1] : void 0,
              r = a(e.length),
              c = void 0 === n ? r : l(a(n), r),
              u = String(t);
            return s ? s.call(e, u, c) : e.slice(c - u.length, c) === u;
          },
        },
      );
    },
    "934b": function (t, e, n) {
      var r = n("996e");
      ("string" === typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals));
      var a = n("499e").default;
      a("bda5860a", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "996e": function (t, e, n) {
      ((e = t.exports = n("24fb")(!1)), e.push([t.i, ".main-el[data-v-403e5a28]{height:calc(100vh - 60px);overflow:hidden}", ""]));
    },
    a4d3: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        a = n("da84"),
        i = n("c430"),
        o = n("83ab"),
        c = n("4930"),
        s = n("d039"),
        l = n("5135"),
        u = n("e8b5"),
        f = n("861d"),
        p = n("825a"),
        g = n("7b0b"),
        b = n("fc6a"),
        v = n("c04e"),
        d = n("5c6c"),
        h = n("7c73"),
        m = n("df75"),
        y = n("241c"),
        O = n("057f"),
        j = n("7418"),
        w = n("06cf"),
        k = n("9bf2"),
        S = n("d1e7"),
        x = n("9112"),
        _ = n("6eeb"),
        $ = n("5692"),
        I = n("f772"),
        R = n("d012"),
        T = n("90e3"),
        P = n("b622"),
        N = n("c032"),
        C = n("746f"),
        E = n("d44e"),
        z = n("69f3"),
        D = n("b727").forEach,
        J = I("hidden"),
        U = "Symbol",
        A = "prototype",
        M = P("toPrimitive"),
        W = z.set,
        H = z.getterFor(U),
        B = Object[A],
        F = a.Symbol,
        G = a.JSON,
        L = G && G.stringify,
        Q = w.f,
        q = k.f,
        K = O.f,
        V = S.f,
        X = $("symbols"),
        Y = $("op-symbols"),
        Z = $("string-to-symbol-registry"),
        tt = $("symbol-to-string-registry"),
        et = $("wks"),
        nt = a.QObject,
        rt = !nt || !nt[A] || !nt[A].findChild,
        at =
          o &&
          s(function () {
            return (
              7 !=
              h(
                q({}, "a", {
                  get: function () {
                    return q(this, "a", { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function (t, e, n) {
                var r = Q(B, e);
                (r && delete B[e], q(t, e, n), r && t !== B && q(B, e, r));
              }
            : q,
        it = function (t, e) {
          var n = (X[t] = h(F[A]));
          return (W(n, { type: U, tag: t, description: e }), o || (n.description = e), n);
        },
        ot =
          c && "symbol" == typeof F.iterator
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                return Object(t) instanceof F;
              },
        ct = function (t, e, n) {
          (t === B && ct(Y, e, n), p(t));
          var r = v(e, !0);
          return (
            p(n),
            l(X, r)
              ? (n.enumerable ? (l(t, J) && t[J][r] && (t[J][r] = !1), (n = h(n, { enumerable: d(0, !1) }))) : (l(t, J) || q(t, J, d(1, {})), (t[J][r] = !0)),
                at(t, r, n))
              : q(t, r, n)
          );
        },
        st = function (t, e) {
          p(t);
          var n = b(e),
            r = m(n).concat(gt(n));
          return (
            D(r, function (e) {
              (o && !ut.call(n, e)) || ct(t, e, n[e]);
            }),
            t
          );
        },
        lt = function (t, e) {
          return void 0 === e ? h(t) : st(h(t), e);
        },
        ut = function (t) {
          var e = v(t, !0),
            n = V.call(this, e);
          return !(this === B && l(X, e) && !l(Y, e)) && (!(n || !l(this, e) || !l(X, e) || (l(this, J) && this[J][e])) || n);
        },
        ft = function (t, e) {
          var n = b(t),
            r = v(e, !0);
          if (n !== B || !l(X, r) || l(Y, r)) {
            var a = Q(n, r);
            return (!a || !l(X, r) || (l(n, J) && n[J][r]) || (a.enumerable = !0), a);
          }
        },
        pt = function (t) {
          var e = K(b(t)),
            n = [];
          return (
            D(e, function (t) {
              l(X, t) || l(R, t) || n.push(t);
            }),
            n
          );
        },
        gt = function (t) {
          var e = t === B,
            n = K(e ? Y : b(t)),
            r = [];
          return (
            D(n, function (t) {
              !l(X, t) || (e && !l(B, t)) || r.push(X[t]);
            }),
            r
          );
        };
      (c ||
        ((F = function () {
          if (this instanceof F) throw TypeError("Symbol is not a constructor");
          var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = T(t),
            n = function (t) {
              (this === B && n.call(Y, t), l(this, J) && l(this[J], e) && (this[J][e] = !1), at(this, e, d(1, t)));
            };
          return (o && rt && at(B, e, { configurable: !0, set: n }), it(e, t));
        }),
        _(F[A], "toString", function () {
          return H(this).tag;
        }),
        (S.f = ut),
        (k.f = ct),
        (w.f = ft),
        (y.f = O.f = pt),
        (j.f = gt),
        o &&
          (q(F[A], "description", {
            configurable: !0,
            get: function () {
              return H(this).description;
            },
          }),
          i || _(B, "propertyIsEnumerable", ut, { unsafe: !0 })),
        (N.f = function (t) {
          return it(P(t), t);
        })),
        r({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: F }),
        D(m(et), function (t) {
          C(t);
        }),
        r(
          { target: U, stat: !0, forced: !c },
          {
            for: function (t) {
              var e = String(t);
              if (l(Z, e)) return Z[e];
              var n = F(e);
              return ((Z[e] = n), (tt[n] = e), n);
            },
            keyFor: function (t) {
              if (!ot(t)) throw TypeError(t + " is not a symbol");
              if (l(tt, t)) return tt[t];
            },
            useSetter: function () {
              rt = !0;
            },
            useSimple: function () {
              rt = !1;
            },
          },
        ),
        r({ target: "Object", stat: !0, forced: !c, sham: !o }, { create: lt, defineProperty: ct, defineProperties: st, getOwnPropertyDescriptor: ft }),
        r({ target: "Object", stat: !0, forced: !c }, { getOwnPropertyNames: pt, getOwnPropertySymbols: gt }),
        r(
          {
            target: "Object",
            stat: !0,
            forced: s(function () {
              j.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (t) {
              return j.f(g(t));
            },
          },
        ),
        G &&
          r(
            {
              target: "JSON",
              stat: !0,
              forced:
                !c ||
                s(function () {
                  var t = F();
                  return "[null]" != L([t]) || "{}" != L({ a: t }) || "{}" != L(Object(t));
                }),
            },
            {
              stringify: function (t) {
                var e,
                  n,
                  r = [t],
                  a = 1;
                while (arguments.length > a) r.push(arguments[a++]);
                if (((n = e = r[1]), (f(e) || void 0 !== t) && !ot(t)))
                  return (
                    u(e) ||
                      (e = function (t, e) {
                        if (("function" == typeof n && (e = n.call(this, t, e)), !ot(e))) return e;
                      }),
                    (r[1] = e),
                    L.apply(G, r)
                  );
              },
            },
          ),
        F[A][M] || x(F[A], M, F[A].valueOf),
        E(F, U),
        (R[J] = !0));
    },
    a67d: function (t, e, n) {
      "use strict";
      var r = n("934b"),
        a = n.n(r);
      a.a;
    },
    ac74: function (t, e, n) {
      "use strict";
      var r,
        a,
        i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticStyle: { margin: "8px" } }, [
            n("div", { staticStyle: { margin: "8px 8px 24px 8px" } }, [
              n("p", { staticStyle: { margin: "13px 0" } }, [
                n("i", { staticClass: "el-icon-phone" }),
                n("span", [t._v(" " + t._s(t.$t("lang.电话")) + " · ")]),
                n("span", { staticStyle: { "font-weight": "normal" } }, [t._v(t._s(t.userInfo.phone))]),
              ]),
              n("p", { staticStyle: { margin: "13px 0" } }, [
                n("i", { staticClass: "el-icon-user-solid" }),
                n("span", [t._v(" " + t._s(t.$t("lang.姓名")) + " · ")]),
                n("span", { staticStyle: { "font-weight": "normal" } }, [t._v(t._s(t.userInfo.name))]),
              ]),
              n("p", { staticStyle: { margin: "13px 0" } }, [
                n("i", { staticClass: "el-icon-s-custom" }),
                n("span", [t._v(" " + t._s(t.$t("lang.角色")) + " · ")]),
                n("span", { staticStyle: { "font-weight": "normal" } }, [t._v(t._s(t.$t("lang." + t.userRole)))]),
              ]),
            ]),
            n(
              "p",
              { staticStyle: { "margin-top": "15px" } },
              [
                t.onHomePage
                  ? n("el-button", { attrs: { type: "primary", size: "small", plain: "" }, on: { click: t.main } }, [t._v(" " + t._s(t.$t("lang.控制台")))])
                  : n("el-button", { attrs: { type: "primary", size: "small", plain: "" }, on: { click: t.myinfo } }, [t._v(t._s(t.$t("lang.个人中心")))]),
                n("el-button", { attrs: { type: "danger", size: "small", plain: "" }, on: { click: t.loginout } }, [t._v(t._s(t.$t("lang.退出登录")))]),
              ],
              1,
            ),
          ]);
        },
        o = [],
        c = (n("99af"), n("e25e"), n("96cf"), n("89ba")),
        s = n("9f12"),
        l = n("53fe"),
        u = n("8b83"),
        f = n("c65a"),
        p = n("9aa6"),
        g = n("c03e"),
        b = n("2fa7"),
        v = n("9ab4"),
        d = n("60a3"),
        h = n("9157"),
        m = n("482f"),
        y = n("0613"),
        O = n("73ec"),
        j = n("70b0"),
        w =
          ((r = (function (t) {
            function e() {
              var t, n;
              Object(s["a"])(this, e);
              for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
              return (
                (n = Object(u["a"])(this, (t = Object(f["a"])(e)).call.apply(t, [this].concat(a)))),
                Object(b["a"])(Object(p["a"])(n), "userInfo", void 0),
                Object(b["a"])(Object(p["a"])(n), "userRole", void 0),
                Object(b["a"])(Object(p["a"])(n), "onHomePage", void 0),
                Object(b["a"])(Object(p["a"])(n), "myInfoUrl", m["a"].cloud_myinfo),
                Object(b["a"])(Object(p["a"])(n), "totalTime", "0"),
                Object(b["a"])(Object(p["a"])(n), "min", 0),
                Object(b["a"])(Object(p["a"])(n), "sec", 0),
                n
              );
            }
            return (
              Object(g["a"])(e, t),
              Object(l["a"])(e, [
                {
                  key: "loginout",
                  value: (function () {
                    var t = Object(c["a"])(
                      regeneratorRuntime.mark(function t() {
                        var e = this;
                        return regeneratorRuntime.wrap(function (t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                h["b"]
                                  .logout()
                                  .then(function (t) {
                                    t && 200 == t.code
                                      ? (Object(O["r"])("cloud-token", ""),
                                        y["a"].commit("user/logoutUser"),
                                        e.$router.push("/"),
                                        j["b"].running && j["b"].stopRecord())
                                      : e.$message({ message: "退出失败", type: "error" });
                                  })
                                  .catch(function (t) {
                                    e.$message({ message: t, type: "error" });
                                  });
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      }),
                    );
                    function e() {
                      return t.apply(this, arguments);
                    }
                    return e;
                  })(),
                },
                {
                  key: "myinfo",
                  value: (function () {
                    var t = Object(c["a"])(
                      regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  window.open(this.myInfoUrl + "?token=" + Object(O["k"])("cloud-token"));
                                case 1:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                    function e() {
                      return t.apply(this, arguments);
                    }
                    return e;
                  })(),
                },
                {
                  key: "main",
                  value: (function () {
                    var t = Object(c["a"])(
                      regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  this.$router.push("/main");
                                case 1:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                    function e() {
                      return t.apply(this, arguments);
                    }
                    return e;
                  })(),
                },
                {
                  key: "mounted",
                  value: function () {
                    var t = this;
                    setInterval(function (e) {
                      t.totalTime = Object(O["k"])("totalTime");
                      var n = parseInt(Object(O["k"])("remainingTime" + t.userId));
                      ((t.min = (n - (n % 60)) / 60), (t.sec = n % 60));
                    }, 1e3);
                  },
                },
                {
                  key: "userId",
                  get: function () {
                    return this.$store.getters["user/userId"];
                  },
                },
              ]),
              e
            );
          })(d["c"])),
          r);
      (Object(v["a"])(
        [Object(d["b"])(), Object(v["b"])("design:type", "function" === typeof (a = "undefined" !== typeof h["a"] && h["a"]) ? a : Object)],
        w.prototype,
        "userInfo",
        void 0,
      ),
        Object(v["a"])([Object(d["b"])(), Object(v["b"])("design:type", String)], w.prototype, "userRole", void 0),
        Object(v["a"])(
          [
            Object(d["b"])({
              default: function () {
                return !0;
              },
            }),
            Object(v["b"])("design:type", Boolean),
          ],
          w.prototype,
          "onHomePage",
          void 0,
        ),
        (w = Object(v["a"])([d["a"]], w)));
      var k = w,
        S = k,
        x = n("2877"),
        _ = Object(x["a"])(S, i, o, !1, null, null, null);
      e["a"] = _.exports;
    },
    ada0: function (t, e, n) {
      var r = n("3a37");
      ("string" === typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals));
      var a = n("499e").default;
      a("396a8edd", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c032: function (t, e, n) {
      e.f = n("b622");
    },
    c1eb: function (t, e, n) {
      "use strict";
      var r = n("ada0"),
        a = n.n(r);
      a.a;
    },
    d28b: function (t, e, n) {
      var r = n("746f");
      r("iterator");
    },
    e01a: function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        a = n("83ab"),
        i = n("da84"),
        o = n("5135"),
        c = n("861d"),
        s = n("9bf2").f,
        l = n("e893"),
        u = i.Symbol;
      if (a && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
        var f = {},
          p = function () {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              e = this instanceof p ? new u(t) : void 0 === t ? u() : u(t);
            return ("" === t && (f[e] = !0), e);
          };
        l(p, u);
        var g = (p.prototype = u.prototype);
        g.constructor = p;
        var b = g.toString,
          v = "Symbol(test)" == String(u("test")),
          d = /^Symbol\((.*)\)[^)]+$/;
        (s(g, "description", {
          configurable: !0,
          get: function () {
            var t = c(this) ? this.valueOf() : this,
              e = b.call(t);
            if (o(f, t)) return "";
            var n = v ? e.slice(7, -1) : e.replace(d, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          r({ global: !0, forced: !0 }, { Symbol: p }));
      }
    },
  },
]);
