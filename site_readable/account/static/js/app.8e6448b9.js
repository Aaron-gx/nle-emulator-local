(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app"],
  {
    0: function (t, e, n) {
      t.exports = n("56d7");
    },
    "027e": function (t, e, n) {},
    "094d": function (t, e, n) {
      "use strict";
      n("895e");
    },
    "0f80": function (t, e, n) {
      "use strict";
      var r = function () {
          var t = this,
            e = t._self._c;
          return e(
            "footer",
            { directives: [{ name: "show", rawName: "v-show", value: t.showEnterpiseInfo, expression: "showEnterpiseInfo" }], staticClass: "foot-cont" },
            [e("span", [t._v("Copyright 2019-2021 NLECloud 京 ICP备15057567号")])],
          );
        },
        i = [],
        o = {
          data: function () {
            return { showEnterpiseInfo: SHOW_ENTERPRISE_INFO };
          },
        },
        a = o,
        s = (n("1eb1"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "1e15f8de", null);
      e["a"] = u.exports;
    },
    "0f9a": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = { rights: [] },
        i = {
          setRights: function (t, e) {
            t.rights = e;
          },
        },
        o = {};
      e["default"] = { namespaced: !0, state: r, mutations: i, actions: o };
    },
    1: function (t, e) {},
    "1eb1": function (t, e, n) {
      "use strict";
      n("f27f");
    },
    "2fcd": function (t, e, n) {},
    3495: function (t, e, n) {},
    "433e": function (t, e, n) {},
    "456d": function (t, e, n) {
      "use strict";
      n("d606");
    },
    5458: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "lang", function () {
          return r;
        }));
      var r = {
        登录教育云: "登录教育云",
        没有账号: "没有账号",
        免费注册: "免费注册",
        请输入手机号: "请输入手机号",
        请输入登录密码: "请输入登录密码",
        记住用户: "记住用户",
        忘记密码: "忘记密码",
        登录: "登录",
        "请按住滑块，拖动到最右边": "请按住滑块，拖动到最右边",
        密码长度在6到16位: "密码长度在 6 到 16 位",
        验证通过: "验证通过",
        教育云: "教育云",
        通行证: "通行证",
      };
    },
    "56d7": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {};
      (n.r(r),
        n.d(r, "save", function () {
          return A;
        }),
        n.d(r, "saveJson", function () {
          return L;
        }),
        n.d(r, "get", function () {
          return R;
        }),
        n.d(r, "getJson", function () {
          return E;
        }),
        n.d(r, "saveToken", function () {
          return I;
        }),
        n.d(r, "getToken", function () {
          return N;
        }),
        n.d(r, "delItem", function () {
          return B;
        }));
      var i = {};
      (n.r(i),
        n.d(i, "getRegistCode", function () {
          return Nt;
        }),
        n.d(i, "login", function () {
          return Bt;
        }),
        n.d(i, "regist", function () {
          return Dt;
        }),
        n.d(i, "checkPhone", function () {
          return Mt;
        }),
        n.d(i, "getChcekCode", function () {
          return jt;
        }),
        n.d(i, "codeCheck", function () {
          return Ft;
        }),
        n.d(i, "resetPwd", function () {
          return Ht;
        }),
        n.d(i, "verifyToken", function () {
          return qt;
        }),
        n.d(i, "logout", function () {
          return zt;
        }),
        n.d(i, "addApp", function () {
          return Wt;
        }),
        n.d(i, "getAppList", function () {
          return Gt;
        }),
        n.d(i, "delApp", function () {
          return Yt;
        }),
        n.d(i, "updateApp", function () {
          return Xt;
        }),
        n.d(i, "addPermission", function () {
          return Jt;
        }),
        n.d(i, "updatePermission", function () {
          return Qt;
        }),
        n.d(i, "getPermissionList", function () {
          return Vt;
        }),
        n.d(i, "getPermissionTree", function () {
          return Zt;
        }),
        n.d(i, "delPermission", function () {
          return Kt;
        }),
        n.d(i, "addRole", function () {
          return te;
        }),
        n.d(i, "updateRole", function () {
          return ee;
        }),
        n.d(i, "getRoleList", function () {
          return ne;
        }),
        n.d(i, "delRoles", function () {
          return re;
        }),
        n.d(i, "importUsers", function () {
          return ie;
        }),
        n.d(i, "addUser", function () {
          return oe;
        }),
        n.d(i, "getUserList", function () {
          return ae;
        }),
        n.d(i, "delUsers", function () {
          return se;
        }),
        n.d(i, "updateUserStatus", function () {
          return ue;
        }),
        n.d(i, "detailUser", function () {
          return ce;
        }),
        n.d(i, "resetUserPwd", function () {
          return le;
        }),
        n.d(i, "getUserDetail", function () {
          return de;
        }),
        n.d(i, "updateInfo", function () {
          return fe;
        }),
        n.d(i, "getUserRole", function () {
          return ge;
        }),
        n.d(i, "addUserRole", function () {
          return he;
        }),
        n.d(i, "getRolePermissionLeaf", function () {
          return me;
        }),
        n.d(i, "getRolePermission", function () {
          return pe;
        }),
        n.d(i, "addRolePermission", function () {
          return ve;
        }),
        n.d(i, "getUserPermissionLeaf", function () {
          return be;
        }),
        n.d(i, "getUserPermission", function () {
          return ye;
        }),
        n.d(i, "addUserPermission", function () {
          return we;
        }),
        n.d(i, "queryRegionList", function () {
          return Ce;
        }),
        n.d(i, "querySchoolList", function () {
          return ke;
        }),
        n.d(i, "queryAllRegion", function () {
          return Te;
        }),
        n.d(i, "queryCityByRegionId", function () {
          return Se;
        }),
        n.d(i, "updatePwd", function () {
          return Oe;
        }),
        n.d(i, "getCheckCode", function () {
          return xe;
        }),
        n.d(i, "updateEmail", function () {
          return Pe;
        }),
        n.d(i, "getSecurityStatus", function () {
          return _e;
        }),
        n.d(i, "getWeiXinUrl", function () {
          return Ue;
        }),
        n.d(i, "getForgetpwdCode", function () {
          return $e;
        }),
        n.d(i, "findPwdCheck", function () {
          return Ae;
        }),
        n.d(i, "resetLoginPwd", function () {
          return Le;
        }),
        n.d(i, "addSchool", function () {
          return Re;
        }),
        n.d(i, "delSchool", function () {
          return Ee;
        }),
        n.d(i, "getSchoolList", function () {
          return Ie;
        }),
        n.d(i, "importSchools", function () {
          return Ne;
        }),
        n.d(i, "ListByPage", function () {
          return Be;
        }),
        n.d(i, "save", function () {
          return De;
        }),
        n.d(i, "edit", function () {
          return Me;
        }),
        n.d(i, "queryAllSchool", function () {
          return je;
        }),
        n.d(i, "ListStuByPage", function () {
          return Fe;
        }),
        n.d(i, "AddStudentList", function () {
          return He;
        }),
        n.d(i, "deleteStudent", function () {
          return qe;
        }),
        n.d(i, "saveStudent", function () {
          return ze;
        }),
        n.d(i, "editStudent", function () {
          return We;
        }));
      var o = {};
      (n.r(o),
        n.d(o, "clone", function () {
          return Ye;
        }),
        n.d(o, "arrayRemoveOne", function () {
          return Xe;
        }),
        n.d(o, "isEmptyObject", function () {
          return Je;
        }),
        n.d(o, "compress", function () {
          return Qe;
        }),
        n.d(o, "coolingElement", function () {
          return Ve;
        }),
        n.d(o, "initMap", function () {
          return Ze;
        }),
        n.d(o, "getLocal", function () {
          return Ke;
        }),
        n.d(o, "getNowFormatDate", function () {
          return tn;
        }),
        n.d(o, "timeDif", function () {
          return en;
        }),
        n.d(o, "formatDate", function () {
          return nn;
        }),
        n.d(o, "timestampToDate", function () {
          return rn;
        }),
        n.d(o, "getQueryString", function () {
          return on;
        }),
        n.d(o, "throttle", function () {
          return an;
        }),
        n.d(o, "throttle2", function () {
          return sn;
        }),
        n.d(o, "HTMLDecode", function () {
          return un;
        }),
        n.d(o, "setCookie", function () {
          return cn;
        }),
        n.d(o, "getCookie", function () {
          return ln;
        }),
        n.d(o, "delCookie", function () {
          return fn;
        }),
        n.d(o, "cookieToObj", function () {
          return dn;
        }),
        n.d(o, "imgLoaded", function () {
          return gn;
        }),
        n.d(o, "addBodyFix", function () {
          return hn;
        }),
        n.d(o, "removeBodyFix", function () {
          return mn;
        }),
        n.d(o, "updateUrl", function () {
          return pn;
        }),
        n.d(o, "urlAddQuery", function () {
          return vn;
        }),
        n.d(o, "randomStr", function () {
          return bn;
        }),
        n.d(o, "remoteLoad", function () {
          return yn;
        }),
        n.d(o, "isFireFox", function () {
          return wn;
        }),
        n.d(o, "isIE", function () {
          return Cn;
        }),
        n.d(o, "getBowerTabEvtKey", function () {
          return kn;
        }),
        n.d(o, "delayToggle", function () {
          return Tn;
        }),
        n.d(o, "cloneToTarget", function () {
          return Sn;
        }));
      var a = {};
      (n.r(a),
        n.d(a, "formatDate", function () {
          return On;
        }));
      (n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("d81d"), n("b64b"), n("4de4"), n("d3b7"));
      var s = n("2b0e"),
        u = function () {
          var t = this,
            e = t._self._c;
          return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
        },
        c = [],
        l =
          (n("ac1f"),
          n("466d"),
          n("4d63"),
          n("c607"),
          n("2c3e"),
          n("25f0"),
          n("5319"),
          n("e9c4"),
          n("2ca0"),
          {
            name: "App",
            components: {},
            data: function () {},
            created: function () {
              var t = this;
              (window.localStorage.getItem("lang") && window.localStorage.removeItem("lang"),
                this.langConfig(),
                setInterval(function () {
                  t.langConfig();
                }, 1e3));
              var e = "",
                n = window.location.href.match(new RegExp("[?&]token=([^&]+)", "i"));
              ((e = null == n || n.length < 1 ? "" : n[1]), (e = e.replace(/[^0-9a-zA-Z]/g, "")), "" != e && window.localStorage.setItem("auth", e));
            },
            methods: {
              langConfig: function () {
                var t = JSON.parse(window.localStorage.getItem("language"));
                if ((null == t && ((t = "auto"), window.localStorage.setItem("language", JSON.stringify(t))), "auto" == t)) {
                  var e = navigator.language || (Array.isArray(navigator.languages) && navigator.languages.length && navigator.languages[0]) || "zh-CN";
                  ((e = e.startsWith("zh") ? "zh-CN" : "en-US"), this.$i18n.locale != e && (this.$i18n.locale = e));
                } else this.$i18n.locale != t && (this.$i18n.locale = t);
                console.log("语言语言1", this.$i18n.locale, t, navigator.language);
              },
            },
          }),
        d = l,
        f = (n("094d"), n("2877")),
        g = Object(f["a"])(d, u, c, !1, null, null, null),
        h = g.exports,
        m = (n("3ca3"), n("ddb0"), n("841c"), n("8c4f")),
        p =
          (n("b0c0"),
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "about" },
              [
                e("ec-header"),
                e("div", { staticClass: "main-wrapper" }, [
                  e("div", { staticClass: "sidebar-cont", class: { "hide-side": t.hideSide } }, [
                    e("div", { staticClass: "sb-title" }, [
                      e("div", { staticClass: "l-btn" }),
                      e("div", { staticClass: "r-btn", on: { click: t.toggleSidebar } }),
                    ]),
                    e(
                      "ul",
                      { staticClass: "sb-list" },
                      t._l(t.showList, function (n, r) {
                        return e(
                          "li",
                          {
                            key: r,
                            staticClass: "sb-item",
                            class: { active: n.routeName === t.curRoute },
                            on: {
                              click: function (e) {
                                return t.goPage(n.routeName);
                              },
                            },
                          },
                          [e("span", { staticClass: "sb-icon" }, [e("i", { class: n.icon })]), t._v(" " + t._s(n.name) + " ")],
                        );
                      }),
                      0,
                    ),
                  ]),
                  e(
                    "div",
                    { staticClass: "main-container", class: { "main-unfold": t.hideSide } },
                    [e("h4", { staticClass: "main-title" }, [t._v(t._s(t.curPageName))]), e("router-view", { key: t.path })],
                    1,
                  ),
                ]),
                e("ec-footer"),
              ],
              1,
            );
          }),
        v = [],
        b =
          (n("14d9"),
          n("7db0"),
          function () {
            var t = this,
              e = t._self._c;
            return e("header", { staticClass: "hd-container" }, [
              e("div", { staticClass: "hd-cont" }, [
                e(
                  "div",
                  { staticClass: "l-part" },
                  [
                    e("router-link", { staticClass: "l-logo", attrs: { to: "/" } }, [
                      e("img", { attrs: { src: t.baseUrl + "js/pic_logo.png" } }),
                      e("h1", { staticStyle: { color: "#eee", "font-size": "24px", margin: "0 0 0 12px" } }, [
                        t._v(t._s(t.systemTitle ? t.systemTitle : t.$t("lang.通行证"))),
                      ]),
                    ]),
                  ],
                  1,
                ),
                e("div", { staticClass: "user-tag" }, [
                  t._m(0),
                  e("div", { staticClass: "user-info" }, [e("span", [t._v(t._s(t.name))]), e("i", { staticClass: "el-icon-caret-bottom" })]),
                  e("div", { staticClass: "user-spinner" }, [
                    e("ul", { staticClass: "sp-list" }, [
                      e(
                        "li",
                        { staticClass: "list-item" },
                        [e("i", { staticClass: "el-icon-document" }), e("router-link", { attrs: { to: "/my/info" } }, [e("span", [t._v("基本资料")])])],
                        1,
                      ),
                      e(
                        "li",
                        { staticClass: "list-item" },
                        [e("i", { staticClass: "el-icon-setting" }), e("router-link", { attrs: { to: "/my/security" } }, [e("span", [t._v("安全设置")])])],
                        1,
                      ),
                    ]),
                    e("div", { staticClass: "sp-foot", on: { click: t.logOut } }, [t._v("退出登录")]),
                  ]),
                ]),
                t.showApplist
                  ? e(
                      "ul",
                      { staticClass: "r-part" },
                      t._l(t.appList, function (n, r) {
                        return e("li", { key: r, staticClass: "r-item" }, [
                          e("a", { attrs: { href: n.url } }, [e("i", { staticClass: "iconfont" }), t._v(t._s(n.name) + " ")]),
                        ]);
                      }),
                      0,
                    )
                  : t._e(),
              ]),
            ]);
          }),
        y = [
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "user-head" }, [e("img", { attrs: { src: n("e13a") } })]);
          },
        ],
        w = {
          data: function () {
            return { name: "", appList: [], systemTitle: TITLE, showApplist: Show_APPLIST, baseUrl: window.BASE_URL };
          },
          props: {},
          created: function () {
            var t,
              e = this,
              n = location.href;
            (-1 != n.indexOf("token") && (t = n.substring(n.indexOf("token") + 6)),
              t
                ? (this.$storage.saveToken(t),
                  this.$request
                    .verifyToken()
                    .then(function (t) {
                      if (200 == t.code) {
                        var r = [];
                        if (t.data.rights.length > 0)
                          for (var i = 0; i < t.data.rights.length; i++)
                            (r.push(t.data.rights[i].url),
                              null == t.data.rights[i].pId && -1 == t.data.rights[i].url.indexOf(window.location.host) && e.appList.push(t.data.rights[i]));
                        (e.$storage.save("rights", r),
                          t.data.name ? (e.name = t.data.name) : (e.name = t.data.phone),
                          (window.location.href = n.substring(0, n.indexOf("?token"))));
                      }
                    })
                    .catch(function (t) {
                      (console.log(t), e.$message({ type: "error", message: t.msg || t.Msg || t.message }));
                    }))
                : ((t = this.$storage.getToken()),
                  t
                    ? this.$request
                        .verifyToken()
                        .then(function (t) {
                          if (200 == t.code) {
                            if (t.data.rights.length > 0)
                              for (var n = 0; n < t.data.rights.length; n++)
                                null == t.data.rights[n].pId && -1 == t.data.rights[n].url.indexOf(window.location.host) && e.appList.push(t.data.rights[n]);
                            t.data.name ? (e.name = t.data.name) : (e.name = t.data.phone);
                          }
                        })
                        .catch(function (t) {
                          e.$message({ type: "error", message: t.msg || t.Msg || t.message });
                        })
                    : AUTH_LOGIN_URL
                      ? (window.location.href = decodeURIComponent(AUTH_LOGIN_URL + "?backUrl=" + n))
                      : -1 == location.href.indexOf("/my/info") && -1 == location.href.indexOf("/my/security") && this.$router.push({ name: "login" })));
          },
          methods: {
            logOut: function () {
              var t = this,
                e = location.href,
                n = this.$storage.getToken();
              n
                ? this.$request.logout().then(function (n) {
                    (t.$storage.delItem("auth"),
                      AUTH_LOGIN_URL ? (window.location.href = decodeURIComponent(AUTH_LOGIN_URL + "?backUrl=" + e)) : t.$router.push({ name: "login" }));
                  })
                : AUTH_LOGIN_URL
                  ? (window.location.href = decodeURIComponent(AUTH_LOGIN_URL + "?backUrl=" + e))
                  : this.$router.push({ name: "login" });
            },
          },
        },
        C = w,
        k = (n("e0b2"), Object(f["a"])(C, b, y, !1, null, "5e333f4a", null)),
        T = k.exports,
        S = n("0f80"),
        O = {
          name: "SystemLayout",
          components: { EcHeader: T, EcFooter: S["a"] },
          data: function () {
            return {
              sidebarList: [
                { name: "用户管理", routeName: "user", icon: "el-icon-user", uri: "/user/get" },
                { name: "角色管理", routeName: "role", icon: "el-icon-help", uri: "/role/get" },
                { name: "权限管理", routeName: "permission", icon: "el-icon-coordinate", uri: "/right/get" },
                { name: "应用管理", routeName: "app", icon: "el-icon-mobile-phone\n", uri: "/app/get" },
                { name: "学校管理", routeName: "school", icon: "el-icon-school\n", uri: "/school/get" },
                { name: "班级管理", routeName: "class", icon: "el-icon-house\n", uri: "/class/getListByCollegeId" },
                { name: "学生管理", routeName: "student", icon: "el-icon-reading\n", uri: "/student/getStudentList" },
              ],
              hideSide: !1,
              rights: [],
              showList: [],
            };
          },
          computed: {
            path: function () {
              return this.$route.path;
            },
            curRoute: function () {
              return this.$route.name;
            },
          },
          watch: {
            curRoute: function (t) {
              this.getCurPageName(t);
            },
          },
          created: function () {
            var t = this,
              e = this.$storage.getToken();
            e &&
              this.$request
                .verifyToken()
                .then(function (e) {
                  if (200 == e.code && e.data.rights) {
                    t.rights = e.data.rights;
                    for (var n = 0; n < t.sidebarList.length; n++)
                      for (var r = 0; r < t.rights.length; r++)
                        if (t.sidebarList[n].uri === t.rights[r].url) {
                          t.showList.push(t.sidebarList[n]);
                          break;
                        }
                  }
                })
                .catch(function (e) {
                  8004 != e.code && t.$message({ type: "error", message: e.msg || e.Msg || e.message });
                });
            var n = this.$route.name;
            this.getCurPageName(n);
          },
          methods: {
            goPage: function (t) {
              this.$route.name !== t && this.$router.push({ name: t });
            },
            toggleSidebar: function () {
              this.hideSide = !this.hideSide;
            },
            curRouteName: function (t) {
              this.curPageName = "info" === t ? "基本资料" : "security" === t ? "安全设置" : "";
            },
            getCurPageName: function (t) {
              var e = this.sidebarList.find(function (e) {
                return e.routeName === t;
              });
              e ? (this.curPageName = e.name) : this.curRouteName(t);
            },
          },
        },
        x = O,
        P = (n("9266"), Object(f["a"])(x, p, v, !1, null, "d6fc5368", null)),
        _ = P.exports,
        U = n("4328"),
        $ = n.n(U);
      function A(t, e) {
        localStorage.getItem(t) != e && localStorage.setItem(t, e);
      }
      function L(t, e) {
        localStorage.setItem(t, $.a.stringify(e));
      }
      function R(t) {
        var e = localStorage.getItem(t);
        return e || "";
      }
      function E(t) {
        var e = localStorage.getItem(t);
        return e ? $.a.parse(e) : "";
      }
      function I(t) {
        t && localStorage.setItem("auth", t);
      }
      function N() {
        return localStorage.getItem("auth") || "";
      }
      function B(t) {
        localStorage.removeItem(t);
      }
      var D = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { class: "zh-CN" == this.$i18n.locale ? "login-container" : "login-container-en" },
            [
              e("login-header", { attrs: { title: t.systemTitle, showLinks: !1 } }),
              e("div", { staticClass: "login-cont" }, [
                e(
                  "div",
                  { staticClass: "login-r" },
                  [
                    e("h1", [t._v(t._s(t.$t("lang.登录")) + " " + t._s(t.plateName ? t.plateName : t.$t("lang.教育云")))]),
                    e(
                      "el-form",
                      { ref: "loginForm", staticClass: "login-form", attrs: { model: t.form, rules: t.rules } },
                      [
                        e(
                          "el-form-item",
                          { attrs: { prop: "username" } },
                          [
                            e("el-input", {
                              attrs: { name: "username", placeholder: t.$t("lang.请输入手机号") },
                              model: {
                                value: t.form.username,
                                callback: function (e) {
                                  t.$set(t.form, "username", e);
                                },
                                expression: "form.username",
                              },
                            }),
                            e("div", { staticClass: "login-icon" }),
                          ],
                          1,
                        ),
                        e(
                          "el-form-item",
                          { attrs: { prop: "password" } },
                          [
                            e("el-input", {
                              attrs: { name: "password", type: "password", placeholder: t.$t("lang.请输入登录密码"), "show-password": "" },
                              model: {
                                value: t.form.password,
                                callback: function (e) {
                                  t.$set(t.form, "password", e);
                                },
                                expression: "form.password",
                              },
                            }),
                            e("div", { staticClass: "login-icon login-icon1" }),
                          ],
                          1,
                        ),
                        e(
                          "el-form-item",
                          { attrs: { prop: "checkTag" } },
                          [
                            e("drag-switch", {
                              attrs: {
                                height: 48,
                                width: 400,
                                radius: 24,
                                "active-color": "#18cca8",
                                "font-color": "#a3b0cc",
                                "inactive-color": "",
                                successText: t.$t("lang.验证通过"),
                                defaultText: t.$t("lang.请按住滑块，拖动到最右边"),
                              },
                              on: {
                                change: function (e) {
                                  return t.passTagChange("checkTag");
                                },
                              },
                              model: {
                                value: t.form.checkTag,
                                callback: function (e) {
                                  t.$set(t.form, "checkTag", e);
                                },
                                expression: "form.checkTag",
                              },
                            }),
                          ],
                          1,
                        ),
                        e(
                          "div",
                          { staticClass: "login-fun-line" },
                          [
                            e("el-checkbox", {
                              attrs: { label: t.$t("lang.记住用户"), name: "type" },
                              model: {
                                value: t.remember,
                                callback: function (e) {
                                  t.remember = e;
                                },
                                expression: "remember",
                              },
                            }),
                            e("div", { staticClass: "login-fun-group" }),
                          ],
                          1,
                        ),
                        e(
                          "el-form-item",
                          [
                            e(
                              "el-button",
                              {
                                staticClass: "login-btn",
                                attrs: { type: "primary", disabled: !t.form.checkTag, loading: t.loading },
                                on: { click: t.startLogin },
                              },
                              [t._v(t._s(t.$t("lang.登录")))],
                            ),
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
              e(
                "el-dropdown",
                { staticClass: "langsel", on: { command: t.langClick } },
                [
                  e("span", { staticClass: "el-dropdown-link" }, [
                    t._v(" " + t._s(t.langDisplay)),
                    e("i", { staticClass: "el-icon-arrow-down el-icon--right" }),
                  ]),
                  e(
                    "el-dropdown-menu",
                    { attrs: { slot: "dropdown" }, slot: "dropdown" },
                    [
                      e("el-dropdown-item", { attrs: { command: "auto" } }, [t._v("自动检测 | Automatic Detection")]),
                      e("el-dropdown-item", { attrs: { command: "zh-CN" } }, [t._v("简体中文 | Chinese (Simplified)")]),
                      e("el-dropdown-item", { attrs: { command: "en-US" } }, [t._v("美式英语 | English (United States)")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e("ec-footer"),
            ],
            1,
          );
        },
        M = [],
        j =
          (n("d9e2"),
          n("13d5"),
          function () {
            var t = this,
              e = t._self._c;
            return e("header", { staticClass: "hd-container" }, [
              e("div", { staticClass: "hd-cont" }, [
                e("div", { staticClass: "l-part" }, [
                  e("img", { attrs: { src: t.baseUrl + "js/pic_logo.png" } }),
                  e("h1", { staticStyle: { color: "#eee", "font-size": "24px", margin: "0 0 0 18px" } }, [
                    t._v(t._s(t.systemTitle ? t.systemTitle : t.$t("lang.通行证"))),
                  ]),
                ]),
                t.isLogin && t.enableRegister
                  ? e(
                      "div",
                      { staticClass: "l-part r-part" },
                      [
                        e("span", [t._v(t._s(t.$t("lang.没有账号")) + ", ")]),
                        e("router-link", { staticClass: "l-logo", attrs: { to: t.registerUrl } }, [t._v(t._s(t.$t("lang.免费注册")))]),
                      ],
                      1,
                    )
                  : t._e(),
                t.isRegister
                  ? e(
                      "div",
                      { staticClass: "l-part r-part" },
                      [e("span", [t._v("已有账号, ")]), e("router-link", { staticClass: "l-logo", attrs: { to: t.loginUrl } }, [t._v("立即登录")])],
                      1,
                    )
                  : t._e(),
              ]),
            ]);
          }),
        F = [],
        H = {
          data: function () {
            return { loginUrl: "/login", registerUrl: "/register", systemTitle: TITLE, baseUrl: window.BASE_URL };
          },
          props: { title: { type: String, default: "登录" }, showLinks: { type: Boolean, default: !0 } },
          created: function () {
            var t = location.href;
            -1 != t.indexOf("backUrl") &&
              ((this.loginUrl = this.loginUrl + "?backUrl=" + t.substring(t.indexOf("backUrl") + 8)),
              (this.registerUrl = this.registerUrl + "?backUrl=" + t.substring(t.indexOf("backUrl") + 8)));
          },
          computed: {
            isLogin: function () {
              return -1 != this.$route.path.indexOf("login");
            },
            enableRegister: function () {
              return SHOW_REGISTER;
            },
            isRegister: function () {
              return -1 != this.$route.path.indexOf("register");
            },
            lang: function () {
              return window.localStorage.getItem("lang");
            },
          },
        },
        q = H,
        z = (n("a6ab"), Object(f["a"])(q, j, F, !1, null, "92eac464", null)),
        W = z.exports,
        G = (n("6821"), n("bacc")),
        Y = n("a925");
      s["default"].use(Y["a"]);
      var X = new Y["a"]({ locale: "zh-CN", messages: { "zh-CN": n("5458"), "en-US": n("be80") } }),
        J = X,
        Q = {
          name: "Home",
          components: { DragSwitch: G["a"], LoginHeader: W, EcFooter: S["a"] },
          data: function () {
            var t = this,
              e = function (e, n, r) {
                t.form.checkTag ? r() : r(new Error("请先通过验证！"));
              };
            return {
              form: { username: "", password: "", checkTag: !1 },
              loading: !1,
              remember: !1,
              rules: {
                username: [{ required: !0, message: J.t("lang.请输入手机号"), trigger: "blur" }],
                password: [
                  { required: !0, message: J.t("lang.请输入登录密码"), trigger: "blur" },
                  { min: 6, max: 16, message: J.t("lang.密码长度在6到16位"), trigger: "blur" },
                ],
                checkTag: [{ validator: e, trigger: "change" }],
              },
              backUrl: void 0,
              otherQuery: {},
              langDisplay: "",
              systemTitle: TITLE,
              plateName: PLATE_NAME,
            };
          },
          watch: {},
          created: function () {
            var t = this,
              e = location.href;
            if (
              (-1 != e.indexOf("backUrl") && (this.backUrl = e.substring(e.indexOf("backUrl") + 8)),
              (this.form.username = this.getQueryString("username")),
              (this.form.password = this.getQueryString("password")),
              this.form.username && this.form.password)
            )
              this.startLogin(!0);
            else {
              var n = this.$storage.getToken();
              (n &&
                this.$request
                  .verifyToken()
                  .then(function (e) {
                    if ((console.log(e), 200 == e.code))
                      if (t.backUrl) {
                        var r = t.backUrl.indexOf("http") < 0 ? "http://" + t.backUrl : t.backUrl,
                          i = n,
                          o = "";
                        ((o = r.indexOf("?") > 0 ? "&token=" + i : "?token=" + i), (window.location.href = decodeURIComponent(r) + o));
                      } else t.$router.push({ name: "home" });
                  })
                  .catch(function (e) {
                    (console.log(e),
                      (t.loading = !1),
                      8004 == e.code ? t.$storage.delItem("auth") : t.$message({ type: "error", message: e.msg || e.Msg || e.message || "登录失败！" }));
                  }),
                this.$storage.get("username") && ((this.form.username = this.$storage.get("username").replace(/(^\"*)|(\"*$)/g, "")), (this.remember = !0)));
            }
          },
          mounted: function () {
            var t = JSON.parse(window.localStorage.getItem("language"));
            (this.langConfig(t), console.log("语言语言2", this.$i18n.locale, t, navigator.language));
          },
          methods: {
            langClick: function (t) {
              (this.langConfig(t), window.localStorage.setItem("language", JSON.stringify(t)));
            },
            langConfig: function (t) {
              if ("auto" == t) {
                var e = navigator.language || (Array.isArray(navigator.languages) && navigator.languages.length && navigator.languages[0]) || "zh-CN";
                ((e = e.startsWith("zh") ? "zh-CN" : "en-US"), (this.$i18n.locale = e));
              } else this.$i18n.locale = t;
              ("zh-CN" == t && (this.langDisplay = "简体中文"),
                "en-US" == t && (this.langDisplay = "English (United States)"),
                "auto" == t && (this.langDisplay = "zh-CN" == this.$i18n.locale ? "自动检测" : "Automatic Detection"));
            },
            startLogin: function (t) {
              var e = this;
              t
                ? this.login()
                : this.$refs.loginForm.validate(function (t) {
                    t ? e.login() : console.log("验证失败");
                  });
            },
            login: function () {
              var t = this;
              this.loading = !0;
              var e = {};
              ((e.phone = this.form.username),
                (e.password = this.form.password),
                (e.grant_type = "password"),
                this.$request
                  .login(e)
                  .then(function (e) {
                    ((t.loading = !1), t.remember ? t.memorizationUser() : t.removeMemorizeUser());
                    var n = e.data.access_token;
                    (t.$storage.saveToken(n),
                      t.$request
                        .verifyToken()
                        .then(function (e) {
                          if ((console.log(e), 200 == e.code)) {
                            var r = [];
                            if (e.data.rights.length > 0) for (var i = 0; i < e.data.rights.length; i++) r.push(e.data.rights[i].url);
                            t.$storage.save("rights", r);
                          }
                          if (t.backUrl) {
                            var o = t.backUrl.indexOf("http") < 0 ? "http://" + t.backUrl : t.backUrl,
                              a = n,
                              s = "";
                            ((s = o.indexOf("?") > 0 ? "&token=" + a : "?token=" + a), (window.location.href = decodeURIComponent(o) + s));
                          } else t.$router.push({ name: "home" });
                        })
                        .catch(function (e) {
                          (console.log(e), t.$message({ type: "error", message: e.msg || e.Msg || e.message || "登录失败！" }));
                        }));
                  })
                  .catch(function (e) {
                    ((t.loading = !1), t.$message({ type: "error", message: e.msg || e.Msg || e.message || "登录失败！" }));
                  }));
            },
            getQueryString: function (t) {
              var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                n = window.location.search.substr(1).match(e),
                r = "";
              return (null != n && (r = decodeURIComponent(n[2])), (e = null), (n = null), null == r || "" == r || "undefined" == r ? "" : r);
            },
            memorizationUser: function () {
              this.$storage.save("username", this.form.username);
            },
            removeMemorizeUser: function () {
              this.$storage.get("username") && this.$storage.delItem("username");
            },
            getOtherQuery: function (t) {
              return Object.keys(t).reduce(function (e, n) {
                return ("redirect" !== n && (e[n] = t[n]), e);
              }, {});
            },
            passTagChange: function (t) {
              this.$refs.loginForm.validateField(t);
            },
          },
        },
        V = Q,
        Z = (n("62e0"), Object(f["a"])(V, D, M, !1, null, "5d403b8b", null)),
        K = Z.exports,
        tt = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "login-container" },
            [
              e("login-header-online", { attrs: { title: "登录", showLinks: !1 } }),
              e("div", { staticClass: "body-cont" }, [
                e("div", { staticClass: "block-1" }, [
                  e("div", { staticClass: "login-cont" }, [
                    e(
                      "div",
                      { staticClass: "login-r" },
                      [
                        e("h1", [t._v("用户登录")]),
                        e(
                          "el-form",
                          { ref: "loginForm", staticClass: "login-form", attrs: { model: t.form, rules: t.rules } },
                          [
                            e(
                              "el-form-item",
                              { attrs: { prop: "username" } },
                              [
                                e("el-input", {
                                  attrs: { name: "username", placeholder: "请输入手机号" },
                                  model: {
                                    value: t.form.username,
                                    callback: function (e) {
                                      t.$set(t.form, "username", e);
                                    },
                                    expression: "form.username",
                                  },
                                }),
                                e("div", { staticClass: "login-icon" }),
                              ],
                              1,
                            ),
                            e(
                              "el-form-item",
                              { attrs: { prop: "password" } },
                              [
                                e("el-input", {
                                  attrs: { name: "password", type: "password", placeholder: "请输入登录密码", "show-password": "" },
                                  model: {
                                    value: t.form.password,
                                    callback: function (e) {
                                      t.$set(t.form, "password", e);
                                    },
                                    expression: "form.password",
                                  },
                                }),
                                e("div", { staticClass: "login-icon login-icon1" }),
                              ],
                              1,
                            ),
                            e(
                              "el-form-item",
                              { attrs: { prop: "checkTag" } },
                              [
                                e("drag-switch", {
                                  attrs: { height: 48, width: 400, radius: 4, "active-color": "#18cca8", "font-color": "#a3b0cc", "inactive-color": "" },
                                  on: {
                                    change: function (e) {
                                      return t.passTagChange("checkTag");
                                    },
                                  },
                                  model: {
                                    value: t.form.checkTag,
                                    callback: function (e) {
                                      t.$set(t.form, "checkTag", e);
                                    },
                                    expression: "form.checkTag",
                                  },
                                }),
                              ],
                              1,
                            ),
                            e(
                              "div",
                              { staticClass: "login-fun-line" },
                              [
                                e("el-checkbox", {
                                  attrs: { label: "记住用户", name: "type" },
                                  model: {
                                    value: t.remember,
                                    callback: function (e) {
                                      t.remember = e;
                                    },
                                    expression: "remember",
                                  },
                                }),
                              ],
                              1,
                            ),
                            e(
                              "el-form-item",
                              [
                                e(
                                  "el-button",
                                  {
                                    staticClass: "login-btn",
                                    attrs: { type: "primary", disabled: !t.form.checkTag, loading: t.loading },
                                    on: { click: t.startLogin },
                                  },
                                  [t._v("登录")],
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                        t._m(0),
                      ],
                      1,
                    ),
                  ]),
                ]),
                t._m(1),
              ]),
              t._m(2),
            ],
            1,
          );
        },
        et = [
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "try-msg" }, [t._v("平台试用为邀请制，需要试用账号的老师请联系邮箱："), e("br"), t._v("aiot_newland@163.com")]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "block-2" }, [e("img", { attrs: { src: n("e4dd") } })]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "foot-cont" }, [e("span", [t._v("Copyright 2019-2021 NLECloud 京 ICP备15057567号")])]);
          },
        ],
        nt = function () {
          var t = this;
          t._self._c;
          return t._m(0);
        },
        rt = [
          function () {
            var t = this,
              e = t._self._c;
            return e("header", { staticClass: "hd-container" }, [
              e("div", { staticClass: "hd-cont" }, [
                e("div", { staticClass: "l-part" }, [e("img", { attrs: { src: n("f3f7") } }), e("span", { staticClass: "login-title" }, [t._v("| 用户登录")])]),
              ]),
            ]);
          },
        ],
        it = {
          data: function () {
            return { loginUrl: "/login", registerUrl: "/register" };
          },
          props: { title: { type: String, default: "登录" }, showLinks: { type: Boolean, default: !0 } },
          created: function () {
            var t = location.href;
            -1 != t.indexOf("backUrl") &&
              ((this.loginUrl = this.loginUrl + "?backUrl=" + t.substring(t.indexOf("backUrl") + 8)),
              (this.registerUrl = this.registerUrl + "?backUrl=" + t.substring(t.indexOf("backUrl") + 8)));
          },
          computed: {
            isLogin: function () {
              return -1 != this.$route.path.indexOf("login");
            },
            isRegister: function () {
              return -1 != this.$route.path.indexOf("register");
            },
          },
        },
        ot = it,
        at = (n("8201"), Object(f["a"])(ot, nt, rt, !1, null, "20dacc61", null)),
        st = at.exports,
        ut = {
          name: "Home",
          components: { DragSwitch: G["a"], LoginHeaderOnline: st },
          data: function () {
            var t = this,
              e = function (e, n, r) {
                t.form.checkTag ? r() : r(new Error("请先通过验证！"));
              };
            return {
              form: { username: "", password: "", checkTag: !1 },
              loading: !1,
              remember: !1,
              rules: {
                username: [{ required: !0, message: "请输入手机号！", trigger: "blur" }],
                password: [
                  { required: !0, message: "请输入登录密码！", trigger: "blur" },
                  { min: 6, max: 16, message: "密码长度在 6 到 16 位", trigger: "blur" },
                ],
                checkTag: [{ validator: e, trigger: "change" }],
              },
              backUrl: void 0,
              otherQuery: {},
            };
          },
          watch: {},
          created: function () {
            var t = this,
              e = location.href;
            -1 != e.indexOf("backUrl") && (this.backUrl = e.substring(e.indexOf("backUrl") + 8));
            var n = this.$storage.getToken();
            (n &&
              this.$request
                .verifyToken()
                .then(function (e) {
                  if ((console.log(e), 200 == e.code))
                    if (t.backUrl) {
                      var r = t.backUrl.indexOf("http") < 0 ? "http://" + t.backUrl : t.backUrl,
                        i = n,
                        o = "";
                      ((o = r.indexOf("?") > 0 ? "&token=" + i : "?token=" + i), (window.location.href = decodeURIComponent(r) + o));
                    } else t.$router.push({ name: "home" });
                })
                .catch(function (e) {
                  (console.log(e),
                    (t.loading = !1),
                    8004 == e.code ? t.$storage.delItem("auth") : t.$message({ type: "error", message: e.msg || e.Msg || e.message || "登录失败！" }));
                }),
              this.$storage.get("username") && ((this.form.username = this.$storage.get("username")), (this.remember = !0)));
          },
          methods: {
            startLogin: function () {
              var t = this;
              this.$refs.loginForm.validate(function (e) {
                if (e) {
                  t.loading = !0;
                  var n = {};
                  ((n.phone = t.form.username),
                    (n.password = t.form.password),
                    (n.grant_type = "password"),
                    t.$request
                      .login(n)
                      .then(function (e) {
                        ((t.loading = !1), t.remember ? t.memorizationUser() : t.removeMemorizeUser());
                        var n = e.data.access_token;
                        (t.$storage.saveToken(n),
                          t.$request
                            .verifyToken()
                            .then(function (e) {
                              if ((console.log(e), 200 == e.code)) {
                                var r = [];
                                if (e.data.rights.length > 0) for (var i = 0; i < e.data.rights.length; i++) r.push(e.data.rights[i].url);
                                t.$storage.save("rights", r);
                              }
                              if (t.backUrl) {
                                var o = t.backUrl.indexOf("http") < 0 ? "http://" + t.backUrl : t.backUrl,
                                  a = n,
                                  s = "";
                                ((s = o.indexOf("?") > 0 ? "&token=" + a : "?token=" + a), (window.location.href = decodeURIComponent(o) + s));
                              } else t.$router.push({ name: "home" });
                            })
                            .catch(function (e) {
                              (console.log(e), t.$message({ type: "error", message: e.msg || e.Msg || e.message || "登录失败！" }));
                            }));
                      })
                      .catch(function (e) {
                        ((t.loading = !1), t.$message({ type: "error", message: e.msg || e.Msg || e.message || "登录失败！" }));
                      }));
                } else console.log("验证失败");
              });
            },
            memorizationUser: function () {
              this.$storage.save("username", this.form.username);
            },
            removeMemorizeUser: function () {
              this.$storage.get("username") && this.$storage.delItem("username");
            },
            getOtherQuery: function (t) {
              return Object.keys(t).reduce(function (e, n) {
                return ("redirect" !== n && (e[n] = t[n]), e);
              }, {});
            },
            passTagChange: function (t) {
              this.$refs.loginForm.validateField(t);
            },
          },
        },
        ct = ut,
        lt = (n("80e0"), Object(f["a"])(ct, tt, et, !1, null, "300e3a78", null)),
        dt = lt.exports;
      s["default"].use(m["a"]);
      var ft = K;
      if (-1 != location.href.indexOf("login"))
        "login_online" == pt("style") ? ((ft = dt), A("login_style", "login_online")) : ((ft = K), A("login_style", "login"));
      else {
        var gt = R("login_style");
        gt && (ft = "login_online" === gt ? dt : K);
      }
      var ht = [
          { path: "/", name: "home", redirect: "/my/info" },
          {
            path: "/about",
            name: "about",
            component: function () {
              return n.e("about").then(n.bind(null, "0c99"));
            },
          },
          { path: "/login", name: "login", component: ft },
          {
            path: "/register",
            name: "register",
            component: function () {
              return n.e("about").then(n.bind(null, "0c99"));
            },
          },
          {
            path: "/forgetPwd",
            name: "forgetPwd",
            component: function () {
              return n.e("chunk-04f9250e").then(n.bind(null, "1319"));
            },
          },
          {
            path: "/resetPwd",
            name: "resetPwd",
            component: function () {
              return n.e("chunk-9ace3262").then(n.bind(null, "50c0"));
            },
          },
          {
            path: "/my",
            name: "my",
            component: _,
            redirect: "/my/info",
            children: [
              {
                path: "info",
                name: "info",
                component: function () {
                  return Promise.all([n.e("chunk-a532eac8"), n.e("chunk-6d9dc162")]).then(n.bind(null, "48d3"));
                },
              },
              {
                path: "security",
                name: "security",
                component: function () {
                  return Promise.all([n.e("chunk-a532eac8"), n.e("chunk-7ebbdf20")]).then(n.bind(null, "6758"));
                },
              },
            ],
          },
          {
            path: "/system",
            name: "system",
            component: _,
            redirect: "/system/user",
            children: [
              {
                path: "app",
                name: "app",
                component: function () {
                  return n.e("chunk-fc2bd364").then(n.bind(null, "efea"));
                },
              },
              {
                path: "permission",
                name: "permission",
                component: function () {
                  return n.e("chunk-d44d1ebc").then(n.bind(null, "0eb1"));
                },
              },
              {
                path: "role",
                name: "role",
                component: function () {
                  return n.e("chunk-70f870f9").then(n.bind(null, "f982"));
                },
              },
              {
                path: "user",
                name: "user",
                component: function () {
                  return Promise.all([n.e("chunk-2a3f7720"), n.e("chunk-a532eac8"), n.e("chunk-4d8b8dbb")]).then(n.bind(null, "b979"));
                },
              },
              {
                path: "school",
                name: "school",
                component: function () {
                  return Promise.all([n.e("chunk-2a3f7720"), n.e("chunk-5e9c9452")]).then(n.bind(null, "6ab2"));
                },
              },
              {
                path: "class",
                name: "class",
                component: function () {
                  return n.e("chunk-2b2c295f").then(n.bind(null, "ed2c"));
                },
              },
              {
                path: "student",
                name: "student",
                component: function () {
                  return Promise.all([n.e("chunk-2a3f7720"), n.e("chunk-3636d4ec")]).then(n.bind(null, "7b4e"));
                },
              },
            ],
          },
        ],
        mt = new m["a"]({ mode: "history", base: "/account/", routes: ht });
      function pt(t) {
        for (var e = window.location.search.substring(1), n = e.split("&"), r = 0; r < n.length; r++) {
          var i = n[r].split("=");
          if (i[0] == t) return i[1];
        }
        return null;
      }
      var vt = mt,
        bt = n("2f62");
      s["default"].use(bt["a"]);
      var yt = n("c653"),
        wt = yt.keys().reduce(function (t, e) {
          var n = e.replace(/^\.\/(.*)\.\w+$/, "$1"),
            r = yt(e);
          return ((t[n] = r.default), t);
        }, {}),
        Ct = new bt["a"].Store({ modules: wt }),
        kt = Ct,
        Tt = n("5c96"),
        St = n.n(Tt),
        Ot =
          (n("caad"),
          n("2532"),
          function (t, e) {
            var n,
              r = e.value,
              i = R("rights").split(",");
            (i && (n = i.includes(r)), !n && t.parentNode.removeChild(t));
          }),
        xt = Ot,
        Pt = function (t, e) {
          var n,
            r = e.value,
            i = R("rights").split(",");
          (i && (n = i.includes(r)),
            n || ("ec-switch" == t.getAttribute("class") ? t.firstChild.setAttribute("disabled", "disabled") : t.classList.add("disabled-tag")));
        },
        _t = Pt,
        Ut = function (t) {
          (t.directive("auth", { inserted: xt }), t.directive("disAuth", { inserted: _t }));
        },
        $t = n("bc3a"),
        At = n.n($t),
        Lt = At.a.create({
          baseURL: GATEWAY_URL || "http://192.168.68.122:9030",
          timeout: 1e4,
          headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        });
      (Lt.interceptors.request.use(
        function (t) {
          var e = N();
          return (e && (t.headers["Authorization"] = "Bearer " + e), t);
        },
        function (t) {
          return (console.log(t), Promise.reject(t));
        },
      ),
        Lt.interceptors.response.use(
          function (t) {
            var e = t.data;
            if (200 === t.status && !e.code) return t;
            if (200 != e.code) {
              if (8004 === e.code) {
                (N() && B("auth"),
                  AUTH_LOGIN_URL
                    ? (window.location.href = decodeURIComponent(AUTH_LOGIN_URL + "?backUrl=" + window.location.href))
                    : -1 === location.href.indexOf("login") && -1 === location.href.indexOf("register") && vt.push({ path: "/login" }));
                var n = new Error("用户登录状态过期");
                return ((n.code = e.code), Promise.reject(n));
              }
              if (9e3 === e.code) {
                var r = new Error("服务正忙，请稍后再试");
                return ((r.code = e.code), Promise.reject(r));
              }
              var i = new Error(e.msg || "Error");
              return ((i.code = e.code), Promise.reject(i));
            }
            return e;
          },
          function (t) {
            return (console.log("err" + t), Promise.reject(t));
          },
        ));
      var Rt = Lt,
        Et = At.a.create({
          baseURL: GATEWAY_URL || "http://192.168.68.122:9030",
          timeout: 1e4,
          headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
          auth: { username: "upms", password: "123456" },
        });
      (Et.interceptors.request.use(
        function (t) {
          return t;
        },
        function (t) {
          return (console.log(t), Promise.reject(t));
        },
      ),
        Et.interceptors.response.use(
          function (t) {
            var e = t.data;
            if (200 === t.status && !e.code) return t;
            if (200 != e.code) {
              if (8004 === e.code) {
                (N() && B("auth"),
                  AUTH_LOGIN_URL
                    ? (window.location.href = decodeURIComponent(AUTH_LOGIN_URL + "?backUrl=" + window.location.href))
                    : -1 === location.href.indexOf("login") && -1 === location.href.indexOf("register") && vt.push({ path: "/login" }));
                var n = new Error("用户未登录");
                return ((n.code = e.code), Promise.reject(n));
              }
              if (9e3 === e.code) {
                var r = new Error("服务正忙，请稍后再试");
                return ((r.code = e.code), Promise.reject(r));
              }
              var i = new Error(e.msg || "Error");
              return ((i.code = e.code), Promise.reject(i));
            }
            return e;
          },
          function (t) {
            return (console.log("err" + t), Promise.reject(t));
          },
        ));
      var It = Et;
      function Nt(t) {
        return Rt({ url: "/upms/auth/getRegistCode", method: "POST", data: $.a.stringify(t) });
      }
      function Bt(t) {
        return It({ url: "/upms/auth/token", method: "POST", data: $.a.stringify(t) });
      }
      function Dt(t) {
        return It({ url: "/upms/auth/register", method: "POST", data: $.a.stringify(t) });
      }
      function Mt(t) {
        return Rt({ url: "/upms/auth/findForgetpwd", method: "POST", data: $.a.stringify(t) });
      }
      function jt(t) {
        return Rt({ url: "/upms/auth/getForgetpwdCode", method: "POST", data: $.a.stringify(t) });
      }
      function Ft(t) {
        return Rt({ url: "/upms/auth/findPwdCheck", method: "POST", data: $.a.stringify(t) });
      }
      function Ht(t) {
        return Rt({ url: "/upms/auth/resetLoginPwd", method: "POST", data: $.a.stringify(t) });
      }
      function qt() {
        return Rt({ url: "/upms/my/userInfo", method: "POST" });
      }
      function zt() {
        return Rt({ url: "/upms/auth/exit", method: "POST" });
      }
      function Wt(t) {
        return Rt({ url: "/upms/app/save", method: "POST", data: $.a.stringify(t) });
      }
      function Gt(t) {
        return Rt({ url: "/upms/app/get", method: "POST", data: $.a.stringify(t) });
      }
      function Yt(t) {
        return Rt({ url: "/upms/app/delete", method: "POST", data: $.a.stringify(t) });
      }
      function Xt(t) {
        return Rt({ url: "/upms/app/update", method: "POST", data: $.a.stringify(t) });
      }
      function Jt(t) {
        return Rt({ url: "/upms/right/save", method: "POST", data: $.a.stringify(t) });
      }
      function Qt(t) {
        return Rt({ url: "/upms/right/update", method: "POST", data: $.a.stringify(t) });
      }
      function Vt(t) {
        return Rt({ url: "/upms/right/get", method: "POST", data: $.a.stringify(t) });
      }
      function Zt() {
        return Rt({ url: "/upms/right/getTree", method: "POST" });
      }
      function Kt(t) {
        return Rt({ url: "/upms/right/delete", method: "POST", data: $.a.stringify(t) });
      }
      function te(t) {
        return Rt({ url: "/upms/role/save", method: "POST", data: $.a.stringify(t) });
      }
      function ee(t) {
        return Rt({ url: "/upms/role/update", method: "POST", data: $.a.stringify(t) });
      }
      function ne(t) {
        return Rt({ url: "/upms/role/get", method: "POST", data: $.a.stringify(t) });
      }
      function re(t) {
        return Rt({ url: "/upms/role/delete", method: "POST", data: $.a.stringify(t) });
      }
      function ie(t) {
        return Rt({ headers: { "Content-Type": "application/json" }, url: "/upms/user/importUsers", method: "POST", data: t });
      }
      function oe(t) {
        return Rt({ url: "/upms/user/save", method: "POST", data: $.a.stringify(t) });
      }
      function ae(t) {
        return Rt({ url: "/upms/user/get", method: "POST", data: $.a.stringify(t) });
      }
      function se(t) {
        return Rt({ url: "/upms/user/delete", method: "POST", data: t });
      }
      function ue(t) {
        return Rt({ url: "/upms/user/updateStatus", method: "POST", data: $.a.stringify(t) });
      }
      function ce(t) {
        return Rt({ url: "/upms/user/findDetailById", method: "POST", data: $.a.stringify(t) });
      }
      function le(t) {
        return Rt({ url: "/upms/user/resetUserPwd", method: "POST", data: $.a.stringify(t) });
      }
      function de() {
        return Rt({ url: "/upms/my/detail", method: "POST" });
      }
      function fe(t) {
        return Rt({ url: "/upms/my/updateInfo", method: "POST", data: $.a.stringify(t) });
      }
      function ge(t) {
        return Rt({ url: "/upms/user/role/list", method: "POST", data: $.a.stringify(t) });
      }
      function he(t) {
        return Rt({ url: "/upms/user/role/save", method: "POST", data: $.a.stringify(t) });
      }
      function me(t) {
        return Rt({ url: "/upms/role/right/getLeaf", method: "POST", data: $.a.stringify(t) });
      }
      function pe(t) {
        return Rt({ url: "/upms/role/right/get", method: "POST", data: $.a.stringify(t) });
      }
      function ve(t) {
        return Rt({ url: "/upms/role/right/save", method: "POST", data: $.a.stringify(t) });
      }
      function be(t) {
        return Rt({ url: "/upms/user/right/getLeaf", method: "POST", data: $.a.stringify(t) });
      }
      function ye(t) {
        return Rt({ url: "/upms/user/right/get", method: "POST", data: $.a.stringify(t) });
      }
      function we(t) {
        return Rt({ url: "/upms/user/right/save", method: "POST", data: $.a.stringify(t) });
      }
      function Ce(t) {
        return Rt({ url: "/upms/school/queryRegionList", method: "POST", data: $.a.stringify(t) });
      }
      function ke(t) {
        return Rt({ url: "/upms/school/querySchoolList", method: "POST", data: $.a.stringify(t) });
      }
      function Te() {
        return Rt({ url: "/upms/region/queryAllRegion", method: "POST" });
      }
      function Se(t) {
        return Rt({ url: "/upms/region/queryCityByRegionId", method: "POST", data: $.a.stringify(t) });
      }
      function Oe(t) {
        return Rt({ url: "/upms/my/security/updatePwd", method: "POST", data: $.a.stringify(t) });
      }
      function xe(t) {
        return Rt({ url: "/upms/my/getEmailCode", method: "POST", data: $.a.stringify(t) });
      }
      function Pe(t) {
        return Rt({ url: "/upms/my/bindEmail", method: "POST", data: $.a.stringify(t) });
      }
      function _e() {
        return Rt({ url: "/upms/my/security/detail", method: "POST" });
      }
      function Ue() {
        return Rt({ url: "/upms/my/bindWeixin", method: "POST" });
      }
      function $e(t) {
        return Rt({ url: "/upms/auth/getForgetpwdCode", method: "POST", data: $.a.stringify(t) });
      }
      function Ae(t) {
        return Rt({ url: "/upms/auth/findPwdCheck", method: "POST", data: $.a.stringify(t) });
      }
      function Le(t) {
        return Rt({ url: "/upms/auth/resetLoginPwd", method: "POST", data: $.a.stringify(t) });
      }
      function Re(t) {
        return Rt({ url: "/upms/school/save", method: "POST", data: $.a.stringify(t) });
      }
      function Ee(t) {
        return Rt({ url: "/upms/school/delete", method: "POST", data: $.a.stringify(t) });
      }
      function Ie(t) {
        return Rt({ url: "/upms/school/get", method: "POST", data: $.a.stringify(t) });
      }
      function Ne(t) {
        return Rt({ headers: { "Content-Type": "application/json" }, url: "/upms/school/importSchools", method: "POST", data: t });
      }
      function Be(t) {
        return Rt({ url: "/upms/class/getListByCollegeId", method: "POST", data: $.a.stringify(t) });
      }
      function De(t) {
        return Rt({ url: "/upms/class/save", method: "POST", data: $.a.stringify(t) });
      }
      function Me(t) {
        return Rt({ url: "/upms/class/edit", method: "POST", data: $.a.stringify(t) });
      }
      function je() {
        return Rt({ url: "/upms/class/queryAllSchool", method: "GET" });
      }
      function Fe(t) {
        return Rt({ url: "/upms/student/getStudentList", method: "POST", data: $.a.stringify(t) });
      }
      function He(t) {
        return Rt({ url: "/upms/student/importStus", method: "POST", data: $.a.stringify(t) });
      }
      function qe(t) {
        return Rt({ url: "/upms/student/del", method: "POST", data: $.a.stringify(t) });
      }
      function ze(t) {
        return Rt({ url: "/upms/student/save", method: "POST", data: $.a.stringify(t) });
      }
      function We(t) {
        return Rt({ url: "/upms/student/edit", method: "POST", data: $.a.stringify(t) });
      }
      var Ge = n("53ca");
      (n("a434"), n("00b4"), n("1276"));
      function Ye(t, e, n) {
        for (var r in ((e = e || {}), t))
          t[r] && "object" === Object(Ge["a"])(t[r]) && r !== n ? ((e[r] = t[r].constructor === Array ? [] : {}), Ye(t[r], e[r])) : (e[r] = t[r]);
        return e;
      }
      function Xe(t, e, n) {
        for (var r = 0; r < t.length; r++) if (t[r][e] === n) return (t.splice(r, 1), !0);
        return !1;
      }
      function Je(t) {
        if (t instanceof Array) return !(t.length > 0);
        for (var e in t) return !1;
        return !0;
      }
      function Qe(t, e) {
        var n = new window.Image(),
          r = 640,
          i = 0.6;
        ((n.onload = function () {
          var t = document.createElement("canvas"),
            o = t.getContext("2d");
          (n.width > r && ((n.height *= r / n.width), (n.width = r)),
            (t.width = n.width),
            (t.height = n.height),
            o.clearRect(0, 0, t.width, t.height),
            o.drawImage(n, 0, 0, n.width, n.height));
          var a = t.toDataURL("image/jpeg", i);
          "function" === typeof e && e(a);
        }),
          (n.src = t));
      }
      function Ve(t, e) {
        ((e = e || 1e3),
          "string" === typeof t && (t = document.getElementById(t)),
          (t.disabled = !0),
          setTimeout(function () {
            t.disabled = !1;
          }, e));
      }
      function Ze(t) {
        return new Promise(function (e, n) {
          var r = document.createElement("script");
          ((r.type = "text/javascript"),
            (r.src = "http://api.map.baidu.com/getscript?v=2.0&ak=" + t + "&services=&t=" + new Date().getTime()),
            (r.onload = function (t) {
              e(window.BMap, t);
            }),
            (r.onerror = function (t) {
              n(t);
            }),
            document.head.appendChild(r));
        });
      }
      function Ke() {
        return new Promise(function (t, e) {
          exports.initMap("tzAcIFZ5xCoRwm63NcBGfoVB").then(
            function (e) {
              var n = new e.Geolocation(),
                r = new e.Geocoder();
              n.getCurrentPosition(
                function (e) {
                  r.getLocation(e.point, function (e) {
                    var n = e.addressComponents;
                    ((n.point = e.point), t(n));
                  });
                },
                function (t) {
                  console.error("getCurrentPosition失败：", t);
                },
              );
            },
            function (t) {
              console.error("initMap失败：", t);
            },
          );
        });
      }
      function tn() {
        var t = new Date(),
          e = "-",
          n = ":",
          r = t.getFullYear(),
          i = t.getMonth() + 1,
          o = t.getDate(),
          a = t.getHours(),
          s = t.getMinutes(),
          u = t.getSeconds();
        (i >= 1 && i <= 9 && (i = "0" + i),
          o >= 0 && o <= 9 && (o = "0" + o),
          a >= 0 && a <= 9 && (a = "0" + a),
          s >= 0 && s <= 9 && (s = "0" + s),
          u >= 0 && u <= 9 && (u = "0" + u));
        var c = r + e + i + e + o + " " + a + n + s + n + u;
        return c;
      }
      function en(t, e) {
        (t instanceof Date ||
          ((t = t.replace(/-/g, function () {
            return "/";
          })),
          (t = new Date(t))),
          e instanceof Date ||
            ((e = e.replace(/-/g, function () {
              return "/";
            })),
            (e = new Date(e))));
        var n = e.getTime() - t.getTime(),
          r = Math.floor(n / 864e5),
          i = n % 864e5,
          o = Math.floor(i / 36e5),
          a = i % 36e5,
          s = Math.floor(a / 6e4),
          u = a % 6e4,
          c = Math.round(u / 1e3);
        return { days: r, hours: o, minutes: s, seconds: c };
      }
      function nn(t, e) {
        var n = {
          "M+": t.getMonth() + 1,
          "d+": t.getDate(),
          "h+": t.getHours(),
          "m+": t.getMinutes(),
          "s+": t.getSeconds(),
          "q+": Math.floor((t.getMonth() + 3) / 3),
          "S+": t.getMilliseconds(),
        };
        for (var r in (/(y+)/i.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), n))
          new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
        return e;
      }
      function rn(t, e) {
        if (!t || "" == t) return "";
        e = e || "yyyy-MM-dd hh:mm:ss";
        var n = new Date();
        n.setTime(1e3 * t);
        var r = nn(n, e);
        return r;
      }
      function on(t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
          n = window.location.search.substr(1).match(e);
        return null != n ? unescape(n[2]) : null;
      }
      function an(t, e, n) {
        var r;
        return function () {
          var i = this,
            o = arguments,
            a = function () {
              ((r = null), n || t.apply(i, o));
            },
            s = n && !r;
          (clearTimeout(r), (r = setTimeout(a, e)), s && t.apply(i, o));
        };
      }
      function sn(t, e, n) {
        var r;
        return function () {
          var i = this,
            o = arguments,
            a = function () {
              ((r = null), n || t.apply(i, o));
            },
            s = n && !r;
          (r || (r = setTimeout(a, e)), s && t.apply(i, o));
        };
      }
      function un(t) {
        var e = document.createElement("div");
        e.innerHTML = t || "";
        var n = e.innerText || e.textContent;
        return ((e = null), n);
      }
      function cn(t, e, n) {
        var r = t + "=" + escape(e) + "; path=/";
        if (((n = n || 8760), n > 0)) {
          var i = new Date();
          (i.setTime(i.getTime + 3600 * n * 1e3), (r = r + "; expire=" + i.toGMTString()));
        }
        document.cookie = r;
      }
      function ln(t) {
        for (var e = document.cookie, n = e.split("; "), r = 0; r < n.length; r++) {
          var i = n[r].indexOf(t);
          if (0 === i) return n[r].substring(t.length + 1);
        }
        return "";
      }
      function dn(t) {
        if (t) {
          var e = t.split(/[=|&]/);
          if (!(e.length <= 1)) {
            e[0] || e.shift();
            for (var n = {}, r = 0, i = e.length; r < i; r += 2) n[e[r]] = e[r + 1] || "";
            return n;
          }
        }
      }
      function fn(t) {
        var e = new Date();
        e.setTime(e.getTime() - 1);
        var n = ln(t);
        null != n && (document.cookie = t + "=" + n + "; path=/;expires=" + e.toGMTString());
      }
      function gn(t) {
        return new Promise(function (e, n) {
          var r = new window.Image();
          ((r.onload = function () {
            e(r);
          }),
            (r.onerror = function () {
              n();
            }),
            (r.src = t));
        });
      }
      function hn() {
        ((document.body.style.overflow = "hidden"),
          (document.body.style.height = "100%"),
          (document.getElementsByTagName("html")[0].style.overflow = "hidden"),
          (document.getElementsByTagName("html")[0].style.height = "100%"));
      }
      function mn() {
        ((document.body.style.overflow = "auto"),
          (document.body.style.height = "auto"),
          (document.getElementsByTagName("html")[0].style.overflow = "auto"),
          (document.getElementsByTagName("html")[0].style.height = "auto"));
      }
      function pn(t, e) {
        var n = (e || "t") + "=",
          r = new RegExp(n + "\\d+"),
          i = +new Date();
        if (t.indexOf(n) > -1) return t.replace(r, n + i);
        if (t.indexOf("?") > -1) {
          var o = t.split("?");
          return o[1] ? o[0] + "?" + n + i + "&" + o[1] : o[0] + "?" + n + i;
        }
        return t.indexOf("#") > -1 ? t.split("#")[0] + "?" + n + i + window.location.hash : t + "?" + n + i;
      }
      function vn(t, e, n) {
        var r = "",
          i = new RegExp("(^|)" + e + "=([^&]*)(|$)"),
          o = e + "=" + n;
        return ((r = null != t.match(i) ? t.replace(i, o) : t.match("[\\?]") ? t + "&" + o : t + "?" + o), r);
      }
      function bn(t) {
        var e = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        if (!t || t < 1) throw new Error('arguement "length" error');
        for (var n = parseInt(t), r = "", i = 0; i < n; i++) r += e[Math.floor(26 * Math.random())];
        return r;
      }
      function yn(t, e) {
        return n(t);
        function n(t) {
          var n = document.createElement("script");
          document.body.appendChild(n);
          var i = new Promise(function (t, i) {
            (n.addEventListener(
              "load",
              function (i) {
                (r(n), e || t(i));
              },
              !1,
            ),
              n.addEventListener(
                "error",
                function (t) {
                  (r(n), i(t));
                },
                !1,
              ),
              e &&
                (window.____callback____ = function () {
                  (t(), (window.____callback____ = null));
                }));
          });
          return (e && (t += "&callback=____callback____"), (n.src = t), i);
        }
        function r(t) {
          document.body.removeChild(t);
        }
      }
      function wn() {
        return navigator.userAgent.indexOf("Firefox") >= 0;
      }
      function Cn() {
        return !!window.ActiveXObject || "ActiveXObject" in window;
      }
      function kn() {
        var t = "",
          e = "";
        return (
          "undefined" !== typeof document.hidden
            ? ((t = "hidden"), (e = "visibilitychange"))
            : "undefined" !== typeof document.mozHidden
              ? ((t = "mozHidden"), (e = "mozvisibilitychange"))
              : "undefined" !== typeof document.msHidden
                ? ((t = "msHidden"), (e = "msvisibilitychange"))
                : "undefined" !== typeof document.webkitHidden && ((t = "webkitHidden"), (e = "webkitvisibilitychange")),
          { hideKey: t, evtKey: e }
        );
      }
      function Tn(t, e) {
        var n = this;
        setTimeout(function () {
          n[t] = !n[t];
        }, e || 1e3);
      }
      function Sn(t, e) {
        if ("object" !== Object(Ge["a"])(e)) throw new Error("Parameters type error");
        for (var n in e) void 0 !== t[n] && (e[n] = t[n]);
        return e;
      }
      function On(t, e) {
        var n;
        if (!t) return "";
        n = new Date(t);
        var r = {
          "M+": n.getMonth() + 1,
          "d+": n.getDate(),
          "h+": n.getHours(),
          "m+": n.getMinutes(),
          "s+": n.getSeconds(),
          "q+": Math.floor((n.getMonth() + 3) / 3),
          "S+": n.getMilliseconds(),
        };
        for (var i in (/(y+)/i.test(e) && (e = e.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))), r))
          new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? r[i] : ("00" + r[i]).substr(("" + r[i]).length)));
        return e;
      }
      (n("b0b6"), n("c898"), n("3495"));
      (n("f05c"), s["default"].use(Y["a"]));
      var xn = n("3eba");
      (n("94b1"), n("ef97"), n("07e6"), n("627c"), n("007d"), n("d28f"));
      var Pn = n("db3f");
      (Pn.regist(s["default"]),
        Object.keys(a).map(function (t) {
          return s["default"].filter(t, a[t]);
        }),
        s["default"].use(St.a),
        s["default"].use(Ut),
        (s["default"].config.productionTip = !1),
        (s["default"].prototype.$request = i),
        (s["default"].prototype.$utils = o),
        (s["default"].prototype.$storage = r),
        (s["default"].prototype.$echarts = xn),
        (s["default"].prototype.$messageBox = St.a.MessageBox),
        new s["default"]({
          router: vt,
          store: kt,
          i18n: J,
          render: function (t) {
            return t(h);
          },
        }).$mount("#app"));
    },
    "5d14": function (t, e, n) {
      "use strict";
      n("ab20");
    },
    "62e0": function (t, e, n) {
      "use strict";
      n("7949");
    },
    7949: function (t, e, n) {},
    "80e0": function (t, e, n) {
      "use strict";
      n("027e");
    },
    8201: function (t, e, n) {
      "use strict";
      n("433e");
    },
    8225: function (t, e, n) {},
    "895e": function (t, e, n) {},
    9266: function (t, e, n) {
      "use strict";
      n("2fcd");
    },
    9787: function (t, e, n) {},
    a6ab: function (t, e, n) {
      "use strict";
      n("9787");
    },
    ab20: function (t, e, n) {},
    b0b6: function (t, e, n) {},
    bacc: function (t, e, n) {
      "use strict";
      n("b0c0");
      var r = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "ne-drag-switch",
              style: {
                height: t.height + "px",
                width: t.width + "px",
                backgroundColor: t.inactiveColor,
                borderRadius: t.radius + "px",
                borderColor: t.checked ? t.activeColor : t.bdColor,
              },
            },
            [
              e("input", {
                ref: "input",
                staticClass: "input-hide",
                attrs: { type: "checkbox", name: t.name, "true-value": t.activeValue, "false-value": t.inactiveValue },
              }),
              e("div", {
                staticClass: "ne-drag-progress",
                class: { "ne-transition": t.reseting },
                style: {
                  backgroundColor: t.startDragX ? t.dragBGColor : t.activeColor,
                  width: t.progressWidth + "px",
                  borderColor: t.startDragX ? t.dragColor : t.checked ? t.activeColor : t.bdColor,
                  borderRadius: t.radius + "px",
                },
              }),
              e("span", { staticClass: "ne-drag-hint", style: { color: t.checked ? "#fff" : t.fontColor, lineHeight: t.height - 2 + "px" } }, [
                t._v(t._s(t.isPass ? t.successText : t.defaultText)),
              ]),
              e(
                "span",
                {
                  staticClass: "ne-drag-tag",
                  class: { "ne-transition": t.reseting },
                  style: {
                    left: t.dragTagLeft + "px",
                    borderRadius: t.radius + "px",
                    width: t.height + "px",
                    backgroundColor: t.startDragX ? t.dragColor : "",
                    borderColor: t.startDragX ? t.dragColor : t.checked ? "transparent" : t.bdColor,
                  },
                  on: {
                    mousedown: function (e) {
                      return t.startDrag(e);
                    },
                  },
                },
                [
                  t.isPass
                    ? e("i", { staticClass: "el-icon-check", style: { color: t.activeColor } })
                    : e("i", { staticClass: "el-icon-d-arrow-right", style: { color: t.startDragX ? "#fff" : "" } }),
                ],
              ),
            ],
          );
        },
        i = [],
        o =
          (n("a9e3"),
          n("ac1f"),
          n("a15b"),
          n("d81d"),
          n("14d9"),
          {
            name: "NLDragSwitch",
            props: {
              value: { type: [Boolean, Number, String], default: !1 },
              height: { type: Number, default: 40 },
              width: { type: Number, default: 320 },
              radius: { type: Number, default: 0 },
              activeColor: { type: String, default: "#2b84ff" },
              inactiveColor: { type: String, default: "#d8d8d8" },
              dragColor: { type: String, default: "rgb(43,132,225)" },
              fontColor: { type: String, default: "#666" },
              bdColor: { type: String, default: "#B6C1D8" },
              name: { type: String, default: "" },
              activeValue: { type: [Boolean, Number, String], default: !0 },
              inactiveValue: { type: [Boolean, Number, String], default: !1 },
              validateEvent: { type: Boolean, default: !0 },
              defaultText: { type: String, default: "请按住滑块，拖动到最右边" },
              successText: { type: String, default: "验证通过" },
            },
            data: function () {
              return { progressWidth: 0, startDragX: "", reseting: !1, isPass: !1 };
            },
            computed: {
              checked: function () {
                return this.value === this.activeValue;
              },
              dragTagLeft: function () {
                return this.progressWidth > 0 ? this.progressWidth - this.height : -1;
              },
              dragBGColor: function () {
                var t = this.dragColor;
                if (t) {
                  if (t.indexOf("rgb") >= 0) {
                    var e = /\((.+)\)/.exec(t)[1].split(",");
                    return 3 === e.length ? "rgba(" + e.join() + ", 0.3)" : "rgba(" + e.join() + ", " + 0.3 * parseFloat(e[3]) + ")";
                  }
                  var n = /(\w+)/.exec(t)[1];
                  if (3 == n.length) {
                    var r = n.split("");
                    ((r = r.map(function (t) {
                      return t + "" + t;
                    })),
                      (n = r.join()));
                  }
                  (console.log(t), console.log(/(\w+)/.exec(t)));
                  var i = this.splitColor2Rgb(n);
                  return i ? (console.log("rgba(" + i.join() + ",0.3)"), "rgba(" + i.join() + ",0.3)") : this.activeColor;
                }
                return this.activeColor;
              },
            },
            watch: {
              checked: function () {
                this.validateEvent && (console.log(this.value), this.$emit("el.form.change", [this.value]));
              },
            },
            methods: {
              startDrag: function (t) {
                this.isPass ||
                  ((this.startDragX = t.screenX), document.addEventListener("mousemove", this.dragTag), document.addEventListener("mouseup", this.dragEnd));
              },
              dragTag: function () {
                var t = event.screenX;
                if (!(t <= this.startDragX)) {
                  var e = t - this.startDragX;
                  (e >= this.width - 50 && ((e = this.width - 50), this.checkPass()), (this.progressWidth = e + this.height));
                }
              },
              dragEnd: function () {
                (document.removeEventListener("mousemove", this.dragTag),
                  document.removeEventListener("mouseup", this.dragEnd),
                  this.disposeReset(),
                  (this.startDragX = ""));
              },
              disposeReset: function () {
                var t = this;
                !this.isPass &&
                  this.progressWidth < this.width &&
                  ((this.reseting = !0),
                  (this.isPass = !1),
                  this.$nextTick(function () {
                    ((t.progressWidth = 0),
                      setTimeout(function () {
                        t.reseting = !1;
                      }, 300));
                  }));
              },
              checkPass: function () {
                ((this.isPass = !0), this.dragEnd(), this.handleChange());
              },
              handleChange: function () {
                var t = this,
                  e = this.checked ? this.inactiveValue : this.activeValue;
                (this.$emit("input", e),
                  this.$emit("change", e),
                  this.$nextTick(function () {
                    t.$refs.input.checked = t.checked;
                  }));
              },
              splitColor2Rgb: function (t) {
                if ((console.log(t), t.length < 6)) return !1;
                for (var e = [], n = 0; n < 6; n += 2) e.push(t[n] + t[n + 1]);
                return (
                  console.log(e),
                  e.map(function (t) {
                    var e = t.toUpperCase(),
                      n = 0;
                    return ((n += 16 * (e.charCodeAt(0) - 45)), (n += e.charCodeAt(0) - 45), n);
                  })
                );
              },
              resetDrag: function () {
                var t = this;
                ((this.reseting = !0),
                  (this.isPass = !1),
                  this.$nextTick(function () {
                    ((t.progressWidth = 0),
                      setTimeout(function () {
                        t.reseting = !1;
                      }, 300));
                  }),
                  (this.startDragX = ""));
                var e = this.checked ? this.inactiveValue : this.activeValue;
                (this.$emit("input", e),
                  this.$emit("change", e),
                  this.$nextTick(function () {
                    t.$refs.input.checked = t.checked;
                  }));
              },
            },
          }),
        a = o,
        s = (n("5d14"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "1f39c8e5", null);
      e["a"] = u.exports;
    },
    be80: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "lang", function () {
          return r;
        }));
      var r = {
        登录教育云: "Login",
        没有账号: "No Account",
        免费注册: "Free registration",
        请输入手机号: "enter your mobile phone number",
        请输入登录密码: "enter your login password",
        记住用户: "Remember that the user",
        忘记密码: "Forgot password",
        登录: "Login",
        "请按住滑块，拖动到最右边": "hold down the slider and drag to the far right",
        密码长度在6到16位: "The password contains 6 to 16 characters",
        验证通过: "Verification Success",
        教育云: "",
        通行证: "Pass",
      };
    },
    c653: function (t, e, n) {
      var r = { "./user.js": "0f9a" };
      function i(t) {
        var e = o(t);
        return n(e);
      }
      function o(t) {
        if (!n.o(r, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return r[t];
      }
      ((i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = o),
        (t.exports = i),
        (i.id = "c653"));
    },
    c898: function (t, e, n) {},
    d606: function (t, e, n) {},
    db3f: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "regist", function () {
          return l;
        }));
      n("b0c0");
      var r = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "ec-switch", on: { click: t.toggleSwitch } }, [
            e("input", { ref: "checkbox", staticClass: "ec-hide", attrs: { type: "checkbox", name: t.name, disabled: t.disabled } }),
            e("div", { staticClass: "ec-switch-in", style: { width: t.width + "px", backgroundColor: t.calcBgColor(t.curColor) } }, [
              e(
                "span",
                { staticClass: "ec-switch-icon", style: { backgroundColor: t.isOn ? t.activeColor : t.inactiveColor, left: t.isOn ? 0 : t.width - 16 + "px" } },
                [e("i", { staticClass: "iconfont", class: { "icon-tick": t.isOn, "icon-ico_cross": !t.isOn } })],
              ),
            ]),
            e("span", { staticClass: "ec-text", style: { color: t.isOn ? t.textActive : t.textInactive } }, [
              t._v(t._s(t.isOn ? t.activeText : t.inactiveText)),
            ]),
          ]);
        },
        i = [],
        o =
          (n("a9e3"),
          n("498a"),
          n("ac1f"),
          n("466d"),
          n("a434"),
          n("d81d"),
          {
            name: "ec-switch",
            props: {
              value: { type: [String, Boolean, Number], default: !1 },
              disabled: { type: Boolean, default: !1 },
              width: { type: Number, default: 30 },
              "active-text": { type: String, default: "启用" },
              "inactive-text": { type: String, default: "禁用" },
              "active-value": { type: [String, Boolean, Number], default: !0 },
              "inactive-value": { type: [String, Boolean, Number], default: !1 },
              "active-color": { type: String, default: "#2B84FF" },
              "inactive-color": { type: String, default: "#FF5011" },
              "active-text-color": { type: String, default: "" },
              "inactive-text-color": { type: String, default: "" },
              name: { type: String, default: "" },
            },
            data: function () {
              return { isCooling: !1 };
            },
            computed: {
              textActive: function () {
                return this.activeTextColor || this.activeColor;
              },
              textInactive: function () {
                return this.inactiveTextColor || this.inactiveColor;
              },
              isOn: function () {
                return !!this.value;
              },
              curColor: function () {
                return this.isOn ? this.activeColor : this.inactiveColor;
              },
            },
            watch: {
              value: function (t) {
                this.$refs.checkbox.checked = !t;
              },
            },
            filters: {},
            methods: {
              toggleSwitch: function () {
                var t = this;
                if (!this.disabled && !this.isCooling) {
                  ((this.isCooling = !0),
                    setTimeout(function () {
                      t.isCooling = !1;
                    }, 800));
                  var e = this.value ? this.inactiveValue : this.activeValue;
                  (this.$emit("input", e), this.$emit("change", e));
                }
              },
              calcBgColor: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.7;
                t = t.trim().toLowerCase();
                var n = [],
                  r = 1;
                if (0 === t.indexOf("#")) {
                  t = t.substring(1);
                  for (var i = 0; i < t.length; i++)
                    if (3 === t.length) n[i] = t[i] + t[i];
                    else {
                      var o = parseInt(i / 2);
                      n[Math.ceil(o)] ? (n[Math.ceil(o)] += t[i]) : (n[Math.ceil(o)] = t[i]);
                    }
                  for (var a = 0; a < n.length; a++) {
                    var s = n[a],
                      u = 0,
                      c = s.charCodeAt(0),
                      l = s.charCodeAt(1);
                    ((u = c > 57 ? 16 * (c - 87) : 16 * (c - 48)), (u += l > 57 ? l - 87 : l - 48), (n[a] = u));
                  }
                } else {
                  if (0 !== t.indexOf("rgb")) return "#ddd";
                  var d = t.match(/(\d|\.)+/g);
                  (4 === d.length ? ((r = parseFloat(d[3])), (n = d.splice(0, 3))) : (n = d),
                    (n = n.map(function (t) {
                      return parseInt(t);
                    })));
                }
                return 1 != r
                  ? "rgba(" + (n[0] + (255 - n[0]) * e) + ", " + (n[1] + (255 - n[1]) * e) + ", " + (n[2] + (255 - n[2]) * e) + "," + (r + (1 - r) * e) + ")"
                  : "rgb(" + (n[0] + (255 - n[0]) * e) + ", " + (n[1] + (255 - n[1]) * e) + ", " + (n[2] + (255 - n[2]) * e) + ")";
              },
            },
          }),
        a = o,
        s = (n("456d"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "06f2a042", null),
        c = u.exports;
      function l(t) {
        t.component("nl-switch", c);
      }
    },
    e0b2: function (t, e, n) {
      "use strict";
      n("8225");
    },
    e13a: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJ0lEQVRYha2XXWiOYRjHf3sx5mM+wiiJ5ruMHFiWE82BhpAUao6cOqBk+WgOSJaykiOcYRQmIWTJCdJa65Vss6Wc2Ew+Nl9t2XTp/9Tt8T7Pc7+v93/yvs9z39f1v57rvr7ugt7+YTwxHlgPrAGWA3OBiRL9ArwBWoFHwB3gq49aHwPmAQeAHcA4T2O/AQ3ASaAzVwPGAEeBvUBhaO0D8Ar4aDqAKcBCYFpo3wBQD9QCP7MxoBS4JlcHeA1cABqBjgijFwBbgN3yXAA7mm2ZvJHJgBXAXaBEz91ADXAR+BVBHMYIYBdwwtHTA1QBLXEGmNVPHFc+BHYCvZ7EYZiey8BavTc9Fa4nUo5AkdwekF+VxbmSB4RV0oV0XxfXPwZYwC3T/3ty4eB/kAcYlK4Hei4T1x8ER1CqqB6ls1qa8OW2flDutOi+DxyXbBTs618oJsyoJXYUgQdqRI5yPo7cCtFzYDswW5G/B2gGZsXI9Uo34qoJPDABeKciY6m2OCbaRwJdIs6EG8DWGCMsO9oU7FasZqYUJEGFO5+QaitjyA0bgdEx66b7nP4bZ5UZUOlsaIwRJoEcubYkYc9N539lSlFpeK8jiEMqYd0HHeIylKWUAYb2PCj3RZv2lZoBxXr45CE8lCcDPuu3OFuXdiesD6tDesMM6NPmyR5CzxzrM+Gx5yAScPWllNeonyfBqt7hiD2WYoc8vzzg6jID0nqY7mnEWY1cYdSqkyZhvrgMaTOgyRHY7KHAOll5hvcVHrJhjqZwKbY+vSihGu4H6jK8H5JhzTGyKaW7leLvwAx70Q9c0QZbqI4QngPciiAPlD/VEU2N2FPtjGo2tPZHteMyp1rZQLoPOAKMjfk6F5Ypx4AzGkzRuaej2rFlwmn9L9H8V6jW26rZzpfcMAk4BbwENklXg9Mn6oOxzJ0Ji5TnQW9oV68vyII4Cm+dRmZeWKUYSBxK843YoRQtrEsYrXJFj3T/dTfI1Atsbl/tFKh8IC2dLWFdUc2oUzld50RxLhiQjvKoO2I2l1O7oPhmwg/gkshjh5xsr+cbQtdzSzeD5b17Pb/t1RWB39DE06da3yNPAAAAAElFTkSuQmCC";
    },
    e4dd: function (t, e, n) {
      t.exports = n.p + "static/img/pic_support_login.5547281f.png";
    },
    f05c: function (t, e, n) {},
    f27f: function (t, e, n) {},
    f3f7: function (t, e, n) {
      t.exports = n.p + "static/img/pic_logo_aiot_white.8ac79b1e.png";
    },
  },
  [[0, "runtime", "chunk-elementUI", "chunk-libs"]],
]);
