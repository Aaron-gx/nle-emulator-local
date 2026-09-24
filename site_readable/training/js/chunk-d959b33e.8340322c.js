(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-d959b33e"],
  {
    "6c3a": function (e, a, t) {
      "use strict";
      t.r(a);
      var s,
        n = function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t(
            "el-container",
            {
              directives: [{ name: "loading", rawName: "v-loading", value: e.loadingtag, expression: "loadingtag" }],
              staticClass: "nl-container",
              attrs: { "element-loading-text": "加载中" },
            },
            [t("iframe", { staticClass: "ifm", attrs: { id: "iframe_commonStored", onload: "loadingtag=false", src: e.url } })],
          );
        },
        o = [],
        c = (t("99af"), t("7db0"), t("b0c0"), t("9f12")),
        i = t("53fe"),
        r = t("8b83"),
        l = t("c65a"),
        u = t("9aa6"),
        d = t("c03e"),
        f = t("2fa7"),
        g = t("9ab4"),
        m = t("60a3"),
        p = t("535f"),
        h = t("482f"),
        b = t("2d35"),
        v =
          ((s = (function (e) {
            function a() {
              var e, t;
              Object(c["a"])(this, a);
              for (var s = arguments.length, n = new Array(s), o = 0; o < s; o++) n[o] = arguments[o];
              return (
                (t = Object(r["a"])(this, (e = Object(l["a"])(a)).call.apply(e, [this].concat(n)))),
                Object(f["a"])(Object(u["a"])(t), "url", "".concat(h["a"].emulator_host, "/rfidsimtion?savetype=1")),
                Object(f["a"])(Object(u["a"])(t), "loadingtag", !0),
                Object(f["a"])(Object(u["a"])(t), "classId", ""),
                Object(f["a"])(Object(u["a"])(t), "className", ""),
                Object(f["a"])(Object(u["a"])(t), "uploadIng", !1),
                t
              );
            }
            return (
              Object(d["a"])(a, e),
              Object(i["a"])(a, [
                {
                  key: "created",
                  value: function () {
                    var e = this;
                    b["a"]
                      .ListAllStudent()
                      .then(function (a) {
                        console.log(a.list[0]);
                        var t = a.list.find(function (a) {
                          return a.userId == e.user.userId;
                        });
                        t && ((e.classId = t.classId), (e.className = t.className));
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                  },
                },
                {
                  key: "mounted",
                  value: function () {
                    var e = this;
                    ((document.getElementById("iframe_commonStored").onload = function () {
                      e.loadingtag = !1;
                    }),
                      window.addEventListener("message", this.uploadExpData));
                  },
                },
                {
                  key: "uploadExpData",
                  value: function (e) {
                    var a = this;
                    if ((console.info(e), e.data && "expData" === e.data.type)) {
                      if (this.uploadIng) return;
                      ((this.uploadIng = !0),
                        setTimeout(function () {
                          a.uploadIng = !1;
                        }, 2e3));
                      var t = this.user,
                        s = JSON.parse(e.data.value),
                        n = {
                          studentId: t.userId,
                          studentName: t.name,
                          studentNo: t.phone,
                          classId: this.classId,
                          className: this.className,
                          experimentName: s.type,
                          experimentResult: e.data.value,
                        };
                      (console.log(n),
                        b["a"]
                          .addExpRecord(n)
                          .then(function (e) {
                            (console.log(e),
                              e.status ? a.$message({ type: "success", message: "保存成功！" }) : a.$message({ type: "error", message: "保存失败:" + e.msg }));
                          })
                          .catch(function (e) {
                            console.log(e);
                          }));
                    }
                  },
                },
                {
                  key: "beforeDestroy",
                  value: function () {
                    window.removeEventListener("message", this.uploadExpData);
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
              ]),
              a
            );
          })(p["a"])),
          s);
      v = Object(g["a"])([Object(m["a"])({})], v);
      var O = v,
        j = O,
        y = (t("aaef"), t("2877")),
        w = Object(y["a"])(j, n, o, !1, null, "a5f87a04", null);
      a["default"] = w.exports;
    },
    aaef: function (e, a, t) {
      "use strict";
      var s = t("b225"),
        n = t.n(s);
      n.a;
    },
    b225: function (e, a, t) {
      var s = t("b6c0");
      ("string" === typeof s && (s = [[e.i, s, ""]]), s.locals && (e.exports = s.locals));
      var n = t("499e").default;
      n("554917da", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b6c0: function (e, a, t) {
      ((a = e.exports = t("24fb")(!1)),
        a.push([e.i, ".nl-container[data-v-a5f87a04]{height:calc(100vh - 60px);width:100%}.ifm[data-v-a5f87a04]{width:100%;height:100%;border:none}", ""]));
    },
  },
]);
