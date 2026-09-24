(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-704d6c4d"],
  {
    "08f3": function (t, e, n) {
      "use strict";
      n.r(e);
      var a,
        i,
        r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticStyle: { background: "#f2f2f2", height: "calc(100vh - 120px)" } },
            [
              n(
                "split-pane",
                { attrs: { "min-percent": 0, "default-percent": 33, "max-percent": 100, split: "vertical" }, on: { resize: function (t) {} } },
                [
                  n("template", { slot: "area2" }, [
                    n(
                      "div",
                      { staticStyle: { height: "calc(100vh - 120px)", width: "100%" } },
                      [n("workspace", { ref: "workspace", attrs: { options: t.options } })],
                      1,
                    ),
                  ]),
                  n("template", { slot: "area1" }, [
                    n("div", [
                      n("h1", { staticStyle: { "font-size": "1.2em", padding: "12px 0", margin: "0 12px 12px 12px", "border-bottom": "1px solid #ddd" } }, [
                        t._v(t._s(t.$t("lang.任务说明"))),
                      ]),
                      n("p", {
                        staticStyle: { margin: "12px", overflow: "auto", height: "calc(100vh - 184px)" },
                        domProps: { innerHTML: t._s(t.model.remark) },
                      }),
                    ]),
                  ]),
                ],
                2,
              ),
            ],
            1,
          );
        },
        c = [],
        s = (n("99af"), n("7db0"), n("0d03"), n("d3b7"), n("25f0"), n("96cf"), n("89ba")),
        o = n("9f12"),
        u = n("53fe"),
        d = n("8b83"),
        p = n("c65a"),
        l = n("9aa6"),
        h = n("c03e"),
        b = n("2fa7"),
        f = n("9ab4"),
        m = n("60a3"),
        v = n("535f"),
        j = n("c33c"),
        O = n("aa5a"),
        g = n("f2b9"),
        w = n("4a80"),
        k = n("52cf"),
        y = n("03cd"),
        x = n("4aea"),
        S = n.n(x),
        I =
          ((a = (function (t) {
            function e() {
              var t, n;
              Object(o["a"])(this, e);
              for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r];
              return (
                (n = Object(d["a"])(this, (t = Object(p["a"])(e)).call.apply(t, [this].concat(i)))),
                Object(b["a"])(Object(l["a"])(n), "model", new O["a"]()),
                Object(b["a"])(Object(l["a"])(n), "options", new g["b"]()),
                Object(b["a"])(Object(l["a"])(n), "input", null),
                Object(b["a"])(Object(l["a"])(n), "load", !0),
                Object(b["a"])(Object(l["a"])(n), "initSuccess", !1),
                Object(b["a"])(Object(l["a"])(n), "lastData", ""),
                n
              );
            }
            return (
              Object(h["a"])(e, t),
              Object(u["a"])(e, [
                {
                  key: "downloadPracticeState",
                  value: (function () {
                    var t = Object(s["a"])(
                      regeneratorRuntime.mark(function t() {
                        var e,
                          n,
                          a,
                          i,
                          r = this;
                        return regeneratorRuntime.wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (((e = this.$route.query.id.toString()), "" == e)) {
                                    t.next = 22;
                                    break;
                                  }
                                  return ((t.next = 4), O["b"].GetByGetEmulatorPracticeBySectionId(e));
                                case 4:
                                  if (((n = t.sent), !n.status)) {
                                    t.next = 21;
                                    break;
                                  }
                                  return (
                                    (this.load = !1),
                                    (this.model = n.data),
                                    (this.options.Mode = g["a"].Task),
                                    (this.options.IsShowTab = !1),
                                    (this.options.DefaultXml = this.model.packageXml),
                                    (this.options.Remark = this.model.remark),
                                    (t.next = 14),
                                    w["a"].getSectionStateList(this.record.id, this.stuid, e)
                                  );
                                case 14:
                                  ((t.t0 = function (t) {
                                    return t.targetId == r.model.sectionId;
                                  }),
                                    (a = t.sent.find(t.t0)),
                                    a && ((this.input = a), a.content && "" != a.content && (this.options.DefaultXml = a.content.toString())),
                                    (i = this.$refs.workspace),
                                    i.Init().then(function (t) {
                                      i.GetUnencryptedXml().then(function (t) {
                                        t && ((r.initSuccess = !0), (r.lastData = t));
                                      });
                                    }),
                                    (t.next = 22));
                                  break;
                                case 21:
                                  this.msg(n.msg, "error");
                                case 22:
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
                  key: "submitPracticeState",
                  value: (function () {
                    var t = Object(s["a"])(
                      regeneratorRuntime.mark(function t(e) {
                        var n;
                        return regeneratorRuntime.wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (null == this.input && (this.input = k["a"].noState()), (t.next = 3), this.$refs.workspace.GetXml());
                                case 3:
                                  return ((n = t.sent), (e.content = n), t.abrupt("return", e));
                                case 6:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                    function e(e) {
                      return t.apply(this, arguments);
                    }
                    return e;
                  })(),
                },
                {
                  key: "mounted",
                  value: (function () {
                    var t = Object(s["a"])(
                      regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return ((t.next = 2), this.downloadPracticeState());
                                case 2:
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
                  key: "submitSection",
                  value: (function () {
                    var t = Object(s["a"])(
                      regeneratorRuntime.mark(function t(e) {
                        var n, a, i;
                        return regeneratorRuntime.wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (((e.targetType = y["a"].Emulator), null == this.input && (this.input = k["a"].noState()), this.initSuccess)) {
                                    t.next = 4;
                                    break;
                                  }
                                  return t.abrupt("return", !1);
                                case 4:
                                  return ((n = this.$refs.workspace), (t.next = 7), n.GetUnencryptedXml());
                                case 7:
                                  return ((a = t.sent), (i = this.lastData != a), (this.lastData = a), (t.next = 12), n.GetXml());
                                case 12:
                                  return ((e.content = t.sent), t.abrupt("return", i));
                                case 14:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                    function e(e) {
                      return t.apply(this, arguments);
                    }
                    return e;
                  })(),
                },
                {
                  key: "stuid",
                  get: function () {
                    return this.$store.getters["user/userId"];
                  },
                },
                {
                  key: "record",
                  get: function () {
                    return this.$store.state.task.info;
                  },
                },
              ]),
              e
            );
          })(v["a"])),
          a);
      (Object(f["a"])(
        [
          Object(m["d"])("record"),
          Object(f["b"])("design:type", Function),
          Object(f["b"])("design:paramtypes", []),
          Object(f["b"])("design:returntype", "function" === typeof (i = "undefined" !== typeof Promise && Promise) ? i : Object),
        ],
        I.prototype,
        "downloadPracticeState",
        null,
      ),
        (I = Object(f["a"])([Object(m["a"])({ components: { splitPane: S.a, workspace: j["default"] } })], I)));
      var R = I,
        T = R,
        D = (n("b71f"), n("2877")),
        P = Object(D["a"])(T, r, c, !1, null, "0d1ba97e", null);
      e["default"] = P.exports;
    },
    "359f": function (t, e, n) {
      var a = n("9057");
      ("string" === typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals));
      var i = n("499e").default;
      i("5e37dd4c", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "52cf": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      n("0d03");
      var a = n("9f12"),
        i = n("53fe"),
        r = n("2fa7"),
        c = (function () {
          function t() {
            (Object(a["a"])(this, t),
              Object(r["a"])(this, "id", void 0),
              Object(r["a"])(this, "sectionId", void 0),
              Object(r["a"])(this, "taskRecordId", void 0),
              Object(r["a"])(this, "studentId", void 0),
              Object(r["a"])(this, "targetId", void 0),
              Object(r["a"])(this, "targetType", void 0),
              Object(r["a"])(this, "duration", void 0),
              Object(r["a"])(this, "content", void 0),
              Object(r["a"])(this, "comment", void 0),
              Object(r["a"])(this, "score", void 0),
              Object(r["a"])(this, "autoScore", void 0),
              Object(r["a"])(this, "submitTime", void 0),
              Object(r["a"])(this, "tag", void 0),
              Object(r["a"])(this, "isFinished", void 0),
              Object(r["a"])(this, "lastTime", void 0),
              Object(r["a"])(this, "lastDuration", void 0));
          }
          return (
            Object(i["a"])(t, null, [
              {
                key: "noState",
                value: function () {
                  return {
                    id: "",
                    sectionId: "",
                    taskRecordId: "",
                    studentId: "",
                    targetId: "",
                    targetType: -1,
                    duration: 0,
                    content: "",
                    comment: "",
                    score: 0,
                    autoScore: 0,
                    tag: 0,
                    submitTime: new Date("2020/1/1"),
                    isFinished: !1,
                    lastTime: new Date().getTime(),
                    lastDuration: 0,
                  };
                },
              },
            ]),
            t
          );
        })();
    },
    9057: function (t, e, n) {
      ((e = t.exports = n("24fb")(!1)), e.push([t.i, ".nl-container[data-v-0d1ba97e]{height:calc(100vh - 120px);width:100%}", ""]));
    },
    b71f: function (t, e, n) {
      "use strict";
      var a = n("359f"),
        i = n.n(a);
      i.a;
    },
  },
]);
