(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-ea31d1aa"],
  {
    "0109": function (e, t, n) {
      var o = n("94ab");
      ("string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals));
      var a = n("499e").default;
      a("248002ca", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1ebf": function (e, t, n) {
      "use strict";
      var o = n("83ec"),
        a = n.n(o);
      a.a;
    },
    2532: function (e, t, n) {
      "use strict";
      var o = n("23e7"),
        a = n("5a34"),
        r = n("1d80"),
        s = n("ab13");
      o(
        { target: "String", proto: !0, forced: !s("includes") },
        {
          includes: function (e) {
            return !!~String(r(this)).indexOf(a(e), arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    "4c94": function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return u;
        }));
      (n("a630"), n("caad"), n("b0c0"), n("2532"), n("3ca3"));
      var o = n("53fe"),
        a = n("9f12"),
        r = n("2fa7"),
        s = n("482f"),
        c = n("73ec"),
        i = function e(t, n) {
          (Object(a["a"])(this, e), Object(r["a"])(this, "iKey", ""), Object(r["a"])(this, "data", {}), (this.iKey = t), (this.data = n));
        },
        l = function e() {
          (Object(a["a"])(this, e), Object(r["a"])(this, "file", void 0), Object(r["a"])(this, "url", void 0), Object(r["a"])(this, "alwaysload", !0));
        },
        u = function e() {
          (Object(a["a"])(this, e), Object(r["a"])(this, "app", void 0), Object(r["a"])(this, "closeExit", !1));
        },
        d = (function () {
          function e(t) {
            var n = this;
            (Object(a["a"])(this, e),
              Object(r["a"])(this, "id", Object(c["i"])()),
              Object(r["a"])(this, "isConnected", !1),
              Object(r["a"])(this, "serverUrl", s["a"].socket_host),
              Object(r["a"])(this, "socket", null),
              Object(r["a"])(this, "on_open", function () {
                console.log("on_open");
              }),
              Object(r["a"])(this, "on_close", function () {
                console.log("on_close");
              }),
              Object(r["a"])(this, "on_message", function () {
                console.log("on_message");
              }),
              Object(r["a"])(this, "on_receivedData", function (e) {
                console.log("on_receivedData");
              }),
              Object(r["a"])(this, "on_connectError", function (e) {
                console.log("on_connectError");
              }),
              Object(r["a"])(this, "on_tcpStateNotify", function (e) {
                console.log("on_tcpStateNotify");
              }),
              Object(r["a"])(this, "on_endEmulatorResponse", function (e) {
                console.log("on_endEmulatorResponse");
              }),
              Object(r["a"])(this, "on_startEmulatorResponse", function (e) {
                console.log("on_startEmulatorResponse");
              }),
              Object(r["a"])(this, "on_getLcoalIPResponse", function (e) {
                console.log("on_getLcoalIPResponse");
              }),
              Object(r["a"])(this, "on_getPortsResponse", function (e) {
                console.log("on_getPortsResponse");
              }),
              Object(r["a"])(this, "on_downLoadFileResponse", function (e) {
                console.log("on_downLoadFileResponse");
              }),
              Object(r["a"])(this, "on_runAppCaseResponse", function (e) {
                console.log("on_runAppCaseResponse");
              }),
              Object(r["a"])(this, "on_addVirturePortResponse", function (e) {
                console.log("on_addVirturePortResponse");
              }),
              Object(r["a"])(this, "on_delVirturePortResponse", function (e) {
                console.log("on_delVirturePortResponse");
              }),
              t ? this.init(t) : this.init(this.serverUrl),
              setInterval(function () {
                n.isConnected || n.init();
              }, 1e4));
          }
          return (
            Object(o["a"])(e, [
              {
                key: "in_sendVirtualData",
                value: function (e) {
                  e.data = Array.from(e.data);
                  var t = JSON.stringify(new i("SendVirtualData", e));
                  (this.socket.send(t), console.log("in_sendVirtualData"));
                },
              },
              {
                key: "in_endEmulator",
                value: function (e) {
                  (this.socket.send(JSON.stringify(new i("EndEmulator", e))), console.log("in_endEmulator"));
                },
              },
              {
                key: "in_startEmulator",
                value: function (e) {
                  (this.socket.send(JSON.stringify(new i("StartEmulator", e))), console.log("in_startEmulator"));
                },
              },
              {
                key: "in_getLcoalIP",
                value: function (e) {
                  (this.socket.send(JSON.stringify(new i("GetLcoalIP", e))), console.log("in_getLcoalIP"));
                },
              },
              {
                key: "in_getPorts",
                value: function (e) {
                  (this.socket.send(JSON.stringify(new i("GetPorts", e))), console.log("in_getPortsr"));
                },
              },
              {
                key: "in_downLoadFile",
                value: function (e) {
                  (this.socket.send(JSON.stringify(new i("DownloadFile", e))), console.log("in_visualtDeviceWrite"));
                },
              },
              {
                key: "in_runAppCase",
                value: function (e) {
                  (this.socket.send(JSON.stringify(new i("RunAppCase", e))), console.log("in_runAppCase"));
                },
              },
              {
                key: "in_addVirturePort",
                value: function (e) {
                  (this.socket.send(JSON.stringify(new i("AddVirturePort", e))), console.log("in_addVirturePort"));
                },
              },
              {
                key: "in_delVirturePort",
                value: function (e) {
                  (this.socket.send(JSON.stringify(new i("DelVirturePort", e))), console.log("in_delVirturePort"));
                },
              },
              {
                key: "init",
                value: function (e) {
                  var t = this;
                  console.log("init", e, this.serverUrl);
                  try {
                    this.socket = new WebSocket(e || this.serverUrl);
                  } catch (n) {
                    console.log(n);
                  }
                  ((this.socket.onopen = function (e) {
                    (console.log("连接打开", e), (t.isConnected = !0), t.on_open(), t.in_getLcoalIP(), t.in_getPorts());
                  }),
                    (this.socket.onclose = function (e) {
                      (console.log("连接关闭", e), t.on_close(), (t.isConnected = !1));
                    }),
                    (this.socket.onmessage = function (e) {
                      t.on_message(e);
                      var n = e.data;
                      if (n && n.includes("iKey")) {
                        var o = JSON.parse(n);
                        switch (o.iKey) {
                          case "ReceivedData":
                            var a = o.data;
                            (Object(c["m"])(a.data) && (a.data = Object(c["b"])(a.data)), t.on_receivedData(a));
                            break;
                          case "ConnectError":
                            t.on_connectError(o.data);
                            break;
                          case "GetLcoalIPResponse":
                            t.on_getLcoalIPResponse(o.data);
                            break;
                          case "GetPortsResponse":
                            t.on_getPortsResponse(o.data);
                            break;
                          case "DownloadFileResponse":
                            t.on_downLoadFileResponse(o.data);
                            break;
                          case "RunAppCaseResponse":
                            t.on_runAppCaseResponse(o.data);
                            break;
                          case "AddVirturePortResponse":
                            t.on_addVirturePortResponse(o.data);
                            break;
                          case "DelVirturePortResponse":
                            t.on_delVirturePortResponse(o.data);
                            break;
                          case "StartEmulatorResponse":
                            t.on_startEmulatorResponse(o);
                            break;
                          case "EndEmulatorResponse":
                            t.on_endEmulatorResponse(o.data);
                            break;
                          case "TCPStateNotify":
                            t.on_tcpStateNotify(o.data);
                            break;
                          default:
                            break;
                        }
                      } else console.log("数据格式错误");
                    }),
                    (this.socket.onerror = function (e) {
                      console.log("连接失败", e);
                    }));
                },
              },
            ]),
            e
          );
        })(),
        p = new d(s["a"].socket_host);
      t["c"] = p;
    },
    "736e": function (e, t, n) {
      "use strict";
      n.r(t);
      var o,
        a,
        r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticStyle: { background: "#f2f2f2", height: "calc(100vh - 120px)" } },
            [
              n(
                "split-pane",
                { attrs: { "min-percent": 0, "default-percent": 33, "max-percent": 100, split: "vertical" }, on: { resize: function (e) {} } },
                [
                  n("template", { slot: "area1" }, [
                    n(
                      "div",
                      [
                        e.submitEmulators.length > 1
                          ? n(
                              "el-select",
                              {
                                staticStyle: { margin: "0x", width: "95%", display: "block" },
                                attrs: { value: e.currentEmulaotor.id },
                                on: { change: e.selectEmulaotor },
                              },
                              e._l(e.submitEmulators, function (e) {
                                return n("el-option", { key: e.id, attrs: { label: e.sectionName, value: e.id } });
                              }),
                              1,
                            )
                          : e._e(),
                        n("h1", { staticStyle: { "font-size": "1.2em", padding: "12px 0", margin: "0 12px 12px 12px", "border-bottom": "1px solid #ddd" } }, [
                          e._v(e._s(e.$t("lang.任务说明"))),
                        ]),
                        n("div", {
                          staticStyle: { margin: "12px", overflow: "auto", height: "calc(100vh - 190px)" },
                          domProps: { innerHTML: e._s(e.codeHint) },
                        }),
                      ],
                      1,
                    ),
                  ]),
                  n(
                    "template",
                    { slot: "area2" },
                    [
                      n(
                        "split-pane",
                        { attrs: { "max-percent": 100, "default-percent": 50, split: "vertical" } },
                        [
                          n("template", { slot: "area1" }, [
                            n(
                              "div",
                              [
                                n(
                                  "el-tabs",
                                  {
                                    attrs: { id: "codeTab", type: "border-card", "before-leave": e.handleTabBeforeLeave },
                                    on: { "tab-click": e.handleTabClick, "tab-add": e.handleTabAdd },
                                  },
                                  e._l(e.codeFiles, function (t) {
                                    return n(
                                      "el-tab-pane",
                                      { key: t.id, attrs: { label: t.name } },
                                      [
                                        n("codemirror", {
                                          ref: t.id,
                                          refInFor: !0,
                                          attrs: { options: e.cmOptions },
                                          model: {
                                            value: t.content,
                                            callback: function (n) {
                                              e.$set(t, "content", n);
                                            },
                                            expression: "codefile.content",
                                          },
                                        }),
                                        n(
                                          "el-button",
                                          {
                                            staticStyle: { margin: "8px", background: "black", color: "gray" },
                                            attrs: { type: "info" },
                                            on: { click: e.reset },
                                          },
                                          [e._v(e._s(e.$t("lang.重置代码")) + " ")],
                                        ),
                                        n(
                                          "el-button",
                                          {
                                            staticStyle: { margin: "8px", float: "right", background: "#1481b8", "border-color": "#1481b8" },
                                            attrs: { type: "primary", disabled: !e.runAppFinish || !e.sockethelp.isConnected },
                                            on: { click: e.run },
                                          },
                                          [
                                            e._v(e._s(e.$t("lang.运行")) + " "),
                                            e.sockethelp.isConnected
                                              ? e._e()
                                              : n("el-popover", { attrs: { placement: "top-start", trigger: "hover" } }, [
                                                  n(
                                                    "p",
                                                    [
                                                      e._v("{{$t('lang.检测到未打开桌面助手')}, "),
                                                      n("el-button", { attrs: { type: "text" }, on: { click: e.openHelper } }, [
                                                        e._v(" " + e._s(e.$t("lang.点击开启"))),
                                                      ]),
                                                    ],
                                                    1,
                                                  ),
                                                  n("i", { staticClass: "el-icon-question", attrs: { slot: "reference" }, slot: "reference" }),
                                                ]),
                                          ],
                                          1,
                                        ),
                                      ],
                                      1,
                                    );
                                  }),
                                  1,
                                ),
                              ],
                              1,
                            ),
                          ]),
                          n(
                            "template",
                            { slot: "area2" },
                            [
                              n(
                                "div",
                                { staticStyle: { height: "calc(100vh - 120px)", width: "100%" } },
                                [n("workspace", { ref: "workspace", attrs: { options: e.options } })],
                                1,
                              ),
                              n(
                                "el-drawer",
                                {
                                  attrs: { size: "20%", "show-close": !0, modal: !0, "close-on-press-escape": !0, visible: e.proces, "with-header": !0 },
                                  on: {
                                    "update:visible": function (t) {
                                      e.proces = t;
                                    },
                                  },
                                },
                                [
                                  n("div", { staticStyle: { margin: "8px", "word-wrap": "break-word", "white-space": "normal" } }, [
                                    n("div", { attrs: { slot: "title" }, slot: "title" }, [
                                      n("h1", { staticStyle: { "font-size": "1.5em", color: "black", margin: "15px 8px" } }, [e._v("运行过程")]),
                                    ]),
                                    n(
                                      "pre",
                                      { staticStyle: { margin: "1em 0.5em", "white-space": "pre-wrap", "word-wrap": "break-word", overflow: "hidden" } },
                                      [e._v(e._s(e.result))],
                                    ),
                                  ]),
                                ],
                              ),
                            ],
                            1,
                          ),
                        ],
                        2,
                      ),
                    ],
                    1,
                  ),
                ],
                2,
              ),
            ],
            1,
          );
        },
        s = [],
        c = (n("a4d3"), n("e01a"), n("99af"), n("4de4"), n("7db0"), n("4160"), n("0d03"), n("b0c0"), n("d3b7"), n("25f0"), n("159b"), n("96cf"), n("89ba")),
        i = n("9f12"),
        l = n("53fe"),
        u = n("8b83"),
        d = n("c65a"),
        p = n("9aa6"),
        f = n("c03e"),
        b = n("2fa7"),
        h = n("9ab4"),
        m = n("60a3"),
        g = n("535f"),
        k = n("59b9"),
        v = n("482f"),
        y = n("4aea"),
        O = n.n(y),
        j = n("c33c"),
        _ = n("4c94"),
        w = (n("4895"), n("cbc8"), n("aedd"), n("164b"), n("4ba6"), n("db91"), n("f9d4"), n("8c2e"), n("0109"), n("03cd")),
        E = n("f2b9"),
        S = n("aa5a"),
        R = n("4a80"),
        C =
          ((o = (function (e) {
            function t() {
              var e, n;
              Object(i["a"])(this, t);
              for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++) a[r] = arguments[r];
              return (
                (n = Object(u["a"])(this, (e = Object(d["a"])(t)).call.apply(e, [this].concat(a)))),
                Object(b["a"])(Object(p["a"])(n), "config", v["a"]),
                Object(b["a"])(Object(p["a"])(n), "sectionStateId", ""),
                Object(b["a"])(Object(p["a"])(n), "load", !1),
                Object(b["a"])(Object(p["a"])(n), "submitEmulators", []),
                Object(b["a"])(Object(p["a"])(n), "currentEmulaotor", { id: "" }),
                Object(b["a"])(Object(p["a"])(n), "lastData", ""),
                Object(b["a"])(Object(p["a"])(n), "options", new E["b"]()),
                Object(b["a"])(Object(p["a"])(n), "sectionId", ""),
                Object(b["a"])(Object(p["a"])(n), "codePracticeId", ""),
                Object(b["a"])(Object(p["a"])(n), "sockethelp", _["c"]),
                Object(b["a"])(Object(p["a"])(n), "lang", "text/x-java"),
                Object(b["a"])(Object(p["a"])(n), "runFail", !1),
                Object(b["a"])(Object(p["a"])(n), "codeHint", ""),
                Object(b["a"])(Object(p["a"])(n), "codeFilesBackUp", []),
                Object(b["a"])(Object(p["a"])(n), "codeFiles", []),
                Object(b["a"])(Object(p["a"])(n), "libFiles", []),
                Object(b["a"])(Object(p["a"])(n), "result", "输出结果成功"),
                Object(b["a"])(Object(p["a"])(n), "proces", !1),
                Object(b["a"])(Object(p["a"])(n), "initSuccess", !1),
                Object(b["a"])(Object(p["a"])(n), "runAppFinish", !0),
                Object(b["a"])(Object(p["a"])(n), "cmOptions", {
                  mode: n.lang,
                  theme: "dracula",
                  tabSize: 4,
                  lineNumbers: !0,
                  smartIndent: !0,
                  indentUnit: 4,
                  indentWithTabs: !0,
                  lineWrapping: !0,
                  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
                  foldGutter: !0,
                  autofocus: !0,
                  matchBrackets: !0,
                  autoCloseBrackets: !0,
                  styleActiveLine: !0,
                  readOnly: !1,
                }),
                n
              );
            }
            return (
              Object(f["a"])(t, e),
              Object(l["a"])(t, [
                {
                  key: "created",
                  value: function () {
                    ((this.sectionId = this.$route.query.id),
                      console.log(this.$route.query),
                      console.log(this.sectionId),
                      (this.options.IsShowHandleTool = !1),
                      (this.options.IsShowDeviceTool = !1),
                      (this.options.IsShowTab = !1));
                  },
                },
                { key: "init", value: function () {} },
                {
                  key: "mounted",
                  value: function () {
                    (this.init(), "undefined" !== typeof this.sectionId && "" !== this.sectionId && this.downloadSectionContent(this.sectionId));
                  },
                },
                {
                  key: "updated",
                  value: function () {
                    var e = this;
                    (console.log("updated"), e.refelshCodeMirror());
                  },
                },
                {
                  key: "refelshCodeMirror",
                  value: function () {
                    var e = this;
                    e.codeFiles.length === e.codeFilesBackUp.length &&
                      e.codeFilesBackUp.forEach(function (t, n, o) {
                        return (e.$refs[t.id][0].refresh(), !0);
                      });
                  },
                },
                { key: "getCodeFiles", value: function (e, t) {} },
                { key: "handleGridResize", value: function () {} },
                {
                  key: "handleTabClick",
                  value: function (e, t) {
                    (console.log("tabClick", e), this.refelshCodeMirror());
                  },
                },
                { key: "handleTabAdd", value: function (e, t) {} },
                { key: "handleTabBeforeLeave", value: function (e, t) {} },
                {
                  key: "selectEmulaotor",
                  value: (function () {
                    var e = Object(c["a"])(
                      regeneratorRuntime.mark(function e(t) {
                        var n, o, a, r, s;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((n = this.submitEmulators.find(function (e) {
                                      return e.id === t;
                                    })),
                                    null == n || this.currentEmulaotor === n)
                                  ) {
                                    e.next = 30;
                                    break;
                                  }
                                  return (
                                    (this.load = !0),
                                    (this.currentEmulaotor = n),
                                    (this.options.Mode = E["a"].Task),
                                    (this.options.Remark = ""),
                                    (this.options.DefaultXml = ""),
                                    (e.next = 9),
                                    S["b"].GetByGetEmulatorPracticeBySectionId(this.currentEmulaotor.id)
                                  );
                                case 9:
                                  if (((o = e.sent), !o.status)) {
                                    e.next = 26;
                                    break;
                                  }
                                  if (!o.data) {
                                    e.next = 23;
                                    break;
                                  }
                                  return (
                                    (a = o.data),
                                    console.log("selectEmulaotor", "emulatorSection", a),
                                    (this.options.DefaultXml = a.packageXml),
                                    (this.options.Remark = a.remark),
                                    (e.next = 18),
                                    R["a"].getSectionStateList(this.taskRecordId, this.studentId, this.currentEmulaotor.id)
                                  );
                                case 18:
                                  ((r = e.sent),
                                    (s = r.find(function (e) {
                                      return e.targetId == a.sectionId;
                                    })),
                                    s && s.content && (this.options.DefaultXml = s.content.toString()),
                                    (e.next = 24));
                                  break;
                                case 23:
                                  this.msg("未设置仿真包", "error");
                                case 24:
                                  e.next = 27;
                                  break;
                                case 26:
                                  this.msg(o.msg, "error");
                                case 27:
                                  (this.$refs.workspace.Init(), (this.load = !1), console.log("selectEmulaotor", "currentEmulaotor", this.currentEmulaotor));
                                case 30:
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
                  key: "openHelper",
                  value: function () {
                    var e = document.createElement("a");
                    ((e.target = "helper"), (e.href = "NLEEmulatorBS://"), e.click());
                  },
                },
                {
                  key: "utf8ToBase64",
                  value: function (e) {
                    try {
                      return btoa(unescape(encodeURIComponent(e)));
                    } catch (t) {
                      return null;
                    }
                  },
                },
                {
                  key: "base64ToUtf8",
                  value: function (e) {
                    try {
                      return decodeURIComponent(escape(atob(e)));
                    } catch (t) {
                      return null;
                    }
                  },
                },
                { key: "setData", value: function (e) {} },
                {
                  key: "fileDecoder",
                  value: function (e) {
                    var t = this;
                    t.codeFiles.push({
                      id: e.id,
                      content: t.base64ToUtf8(e.content),
                      size: e.size,
                      name: e.name,
                      raw: e.content,
                      type: e.type,
                      description: e.description,
                    });
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    var e = this;
                    ((e.codeFiles = []),
                      e.codeFilesBackUp.forEach(function (t, n, o) {
                        return (e.fileDecoder(t), !0);
                      }));
                  },
                },
                {
                  key: "submitSection",
                  value: function (e) {
                    if (((e.targetType = w["a"].Code), !this.initSuccess)) return !1;
                    var t = [];
                    (this.codeFiles.forEach(function (e) {
                      t.push({ id: e.id, name: e.name, content: e.content, type: e.type, description: e.description });
                    }),
                      (e.content = JSON.stringify(t)),
                      console.log(e.content),
                      console.log(this.lastData));
                    var n = e.content != this.lastData;
                    return ((this.lastData = e.content), n);
                  },
                },
                {
                  key: "submitPracticeState",
                  value: (function () {
                    var e = Object(c["a"])(
                      regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
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
                  key: "downloadPracticeState",
                  value: (function () {
                    var e = Object(c["a"])(
                      regeneratorRuntime.mark(function e() {
                        var t,
                          n,
                          o,
                          a = this;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.next = 2), R["a"].getSectionStateList(this.taskRecordId, this.studentId, this.sectionId));
                                case 2:
                                  if (((t = e.sent), console.log("downloadPracticeState", "states", t), (this.initSuccess = !0), !(t && t.length > 0))) {
                                    e.next = 14;
                                    break;
                                  }
                                  if (((this.sectionStateId = t[0].id), t[0].content)) {
                                    e.next = 9;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 9:
                                  ((n = JSON.parse(t[0].content)),
                                    n.forEach(function (e) {
                                      a.codeFiles.forEach(function (t) {
                                        e.id === t.id && (t.content = e.content);
                                      });
                                    }),
                                    (o = []),
                                    this.codeFiles.forEach(function (e) {
                                      o.push({ id: e.id, name: e.name, content: e.content, type: e.type, description: e.description });
                                    }),
                                    (this.lastData = JSON.stringify(o)));
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "initEmulator",
                  value: function () {
                    var e = this;
                    ((this.submitEmulators = []),
                      this.template.sections.forEach(function (t) {
                        t &&
                          t.children &&
                          t.children.forEach(function (t) {
                            3 === t.taskType && e.submitEmulators.push(t);
                          });
                      }),
                      this.submitEmulators.length > 0 && this.selectEmulaotor(this.submitEmulators[0].id));
                  },
                },
                {
                  key: "downloadSectionContent",
                  value: (function () {
                    var e = Object(c["a"])(
                      regeneratorRuntime.mark(function e(t) {
                        var n, o, a;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = this),
                                    (e.next = 3),
                                    Object(k["a"])({ url: this.config.web_host + "/api/CodePractice/GetCodePracticeBySectionId/".concat(t), method: "GET" })
                                  );
                                case 3:
                                  ((o = e.sent),
                                    console.log("downloadSectionContent", "ret", o),
                                    0 === o.code
                                      ? ((n.sectionId = t),
                                        (n.lang = o.data.language),
                                        (n.codeHint = o.data.hint),
                                        (n.libFiles = o.data.libs),
                                        (a = JSON.stringify(
                                          o.data.codeFiles.filter(function (e) {
                                            return 0 === e.type;
                                          }),
                                        )),
                                        (n.codeFilesBackUp = JSON.parse(a)),
                                        o.data.codeFiles
                                          .filter(function (e) {
                                            return 0 === e.type;
                                          })
                                          .forEach(function (e, t, o) {
                                            return (n.fileDecoder(e), !0);
                                          }),
                                        this.initEmulator(),
                                        this.downloadPracticeState())
                                      : this.$notify.error({ title: "错误", message: "未能加载该章节练习，" + t + o.message, position: "bottom-right" }));
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
                  key: "run",
                  value: (function () {
                    var e = Object(c["a"])(
                      regeneratorRuntime.mark(function e() {
                        var t, n, o, a, r, s, c;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = this),
                                    (n = []),
                                    t.codeFiles.forEach(function (e, t, o) {
                                      return (n.push({ name: e.name, content: e.content }), !0);
                                    }),
                                    (o = {
                                      studentId: t.studentId,
                                      taskId: t.taskRecordId,
                                      secontionId: t.sectionId,
                                      language: t.lang,
                                      dependences: t.libFiles,
                                      codes: n,
                                    }),
                                    console.log("run", "dto", o),
                                    (t.result = ""),
                                    (t.proces = !0),
                                    (t.result += "开始上传代码...\r\n"),
                                    (t.result += "开始编译代码...\r\n"),
                                    console.log("run", "url", this.config.compile_host + "/api/Compile"),
                                    (e.next = 12),
                                    k["a"].post(this.config.compile_host + "/api/Compile", o)
                                  );
                                case 12:
                                  ((a = e.sent),
                                    0 === a.code
                                      ? ((t.result += "编译成功\r\n"),
                                        (t.result += "开始下载应用...\r\n"),
                                        (t.runAppFinish = !1),
                                        console.log("run", "res", a.data),
                                        (r = a.data),
                                        (s = t.config.compile_host + "/api/Compile?fileName=" + a.data),
                                        (c = new _["a"]()),
                                        (c.file = r),
                                        (c.url = s),
                                        console.log("run", r, s),
                                        _["c"].in_downLoadFile(c),
                                        (_["c"].on_downLoadFileResponse = function (e) {
                                          if (((t.runAppFinish = !0), e.done)) {
                                            (console.log("run", "下载成功"), (t.result += "下载成功...\r\n"));
                                            var n = new _["b"]();
                                            ((n.app = r),
                                              (n.closeExit = !0),
                                              _["c"].in_runAppCase(n),
                                              (_["c"].on_runAppCaseResponse = function (e) {
                                                e.success
                                                  ? (console.log("run", "启动成功"),
                                                    (t.result += "启动成功...\r\n"),
                                                    (t.result += "运行结果：" + e.msg + "...\r\n"))
                                                  : (t.result += "启动失败：" + e.msg + "\r\n");
                                              }));
                                          } else t.result += "下载应用出错：" + e.msg + "\r\n";
                                        }))
                                      : -1 === a.code
                                        ? ((t.result += "编译失败:\r\n"), (t.result += a.message + "\r\n"))
                                        : -2 === a.code && ((t.result += "服务器异常:\r\n"), (t.result += a.message + "\r\n")));
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "template",
                  get: function () {
                    return this.$store.state.task.template;
                  },
                },
                {
                  key: "taskRecordId",
                  get: function () {
                    return this.$store.state.task.info.id;
                  },
                },
                {
                  key: "studentId",
                  get: function () {
                    return this.$store.getters["user/userId"];
                  },
                },
              ]),
              t
            );
          })(g["a"])),
          o);
      (Object(h["a"])(
        [
          Object(m["d"])("codeFiles"),
          Object(h["b"])("design:type", Function),
          Object(h["b"])("design:paramtypes", [Object, Object]),
          Object(h["b"])("design:returntype", void 0),
        ],
        C.prototype,
        "getCodeFiles",
        null,
      ),
        Object(h["a"])(
          [
            Object(m["d"])("taskRecordId"),
            Object(h["b"])("design:type", Function),
            Object(h["b"])("design:paramtypes", []),
            Object(h["b"])("design:returntype", "function" === typeof (a = "undefined" !== typeof Promise && Promise) ? a : Object),
          ],
          C.prototype,
          "downloadPracticeState",
          null,
        ),
        Object(h["a"])(
          [
            Object(m["d"])("template"),
            Object(h["b"])("design:type", Function),
            Object(h["b"])("design:paramtypes", []),
            Object(h["b"])("design:returntype", void 0),
          ],
          C.prototype,
          "initEmulator",
          null,
        ),
        (C = Object(h["a"])([Object(m["a"])({ components: { splitPane: O.a, workspace: j["default"] } })], C)));
      var x = C,
        I = x,
        P = (n("1ebf"), n("2877")),
        F = Object(P["a"])(I, r, s, !1, null, null, null);
      t["default"] = F.exports;
    },
    "83ec": function (e, t, n) {
      var o = n("b93e");
      ("string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals));
      var a = n("499e").default;
      a("1c88bf1e", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "94ab": function (e, t, n) {
      ((t = e.exports = n("24fb")(!1)),
        t.push([
          e.i,
          ".cm-s-dracula.CodeMirror,.cm-s-dracula .CodeMirror-gutters{background-color:#282a36!important;color:#f8f8f2!important;border:none}.cm-s-dracula .CodeMirror-gutters{color:#282a36}.cm-s-dracula .CodeMirror-cursor{border-left:thin solid #f8f8f0}.cm-s-dracula .CodeMirror-linenumber{color:#6d8a88}.cm-s-dracula .CodeMirror-selected{background:hsla(0,0%,100%,.1)}.cm-s-dracula .CodeMirror-line::selection,.cm-s-dracula .CodeMirror-line>span::selection,.cm-s-dracula .CodeMirror-line>span>span::selection{background:hsla(0,0%,100%,.1)}.cm-s-dracula .CodeMirror-line::-moz-selection,.cm-s-dracula .CodeMirror-line>span::-moz-selection,.cm-s-dracula .CodeMirror-line>span>span::-moz-selection{background:hsla(0,0%,100%,.1)}.cm-s-dracula span.cm-comment{color:#6272a4}.cm-s-dracula span.cm-string,.cm-s-dracula span.cm-string-2{color:#f1fa8c}.cm-s-dracula span.cm-number{color:#bd93f9}.cm-s-dracula span.cm-variable{color:#50fa7b}.cm-s-dracula span.cm-variable-2{color:#fff}.cm-s-dracula span.cm-def{color:#50fa7b}.cm-s-dracula span.cm-keyword,.cm-s-dracula span.cm-operator{color:#ff79c6}.cm-s-dracula span.cm-atom{color:#bd93f9}.cm-s-dracula span.cm-meta{color:#f8f8f2}.cm-s-dracula span.cm-tag{color:#ff79c6}.cm-s-dracula span.cm-attribute,.cm-s-dracula span.cm-qualifier{color:#50fa7b}.cm-s-dracula span.cm-property{color:#66d9ef}.cm-s-dracula span.cm-builtin{color:#50fa7b}.cm-s-dracula span.cm-type,.cm-s-dracula span.cm-variable-3{color:#ffb86c}.cm-s-dracula .CodeMirror-activeline-background{background:hsla(0,0%,100%,.1)}.cm-s-dracula .CodeMirror-matchingbracket{text-decoration:underline;color:#fff!important}",
          "",
        ]));
    },
    a630: function (e, t, n) {
      var o = n("23e7"),
        a = n("4df4"),
        r = n("1c7e"),
        s = !r(function (e) {
          Array.from(e);
        });
      o({ target: "Array", stat: !0, forced: s }, { from: a });
    },
    b93e: function (e, t, n) {
      ((t = e.exports = n("24fb")(!1)),
        t.push([
          e.i,
          "#codeTab .el-tabs__content{padding:0;background:#000}#leftcolum{margin:3px}#leftcolum>.el-container{margin-top:20px}.aside-label{text-align:right;line-height:35px}.CodeMirror{height:calc(100vh - 217px);font-size:14px;line-height:150%}",
          "",
        ]));
    },
    caad: function (e, t, n) {
      "use strict";
      var o = n("23e7"),
        a = n("4d64").includes,
        r = n("44d2");
      (o(
        { target: "Array", proto: !0 },
        {
          includes: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      ),
        r("includes"));
    },
  },
]);
