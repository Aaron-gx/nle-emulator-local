(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d27230d"],
  {
    "03cd": function (e, t, n) {
      "use strict";
      var o, i, a, r, s, l, c, u, d, v, f, p, b, m;
      (n.d(t, "a", function () {
        return v;
      }),
        n.d(t, "b", function () {
          return p;
        }),
        (function (e) {
          ((e["None"] = "未供电"), (e["Abnormal"] = "供电异常"), (e["Normal"] = "供电正常"));
        })(o || (o = {})),
        (function (e) {
          ((e["None"] = "未定义"),
            (e["GND"] = "地线"),
            (e["VS"] = "+VS"),
            (e["Power"] = "适配器信号"),
            (e["Signal_Digital_I"] = "数字信号输入"),
            (e["Signal_Digital_O"] = "数字信号输出"),
            (e["Signal_Digital_IO"] = "数字信号输入/输出"),
            (e["Signal_Analog_P"] = "正模拟信号"),
            (e["Signal_Analog_N"] = "负模拟信号"),
            (e["Signal_485_P"] = "正485信号"),
            (e["Signal_485_N"] = "负485信号"),
            (e["Signal_232"] = "232信号"),
            (e["Signal_RJ45"] = "网口信号"),
            (e["Signal_USB"] = "usb信号"),
            (e["Signal_ZigBee"] = "ZigBee信号"),
            (e["Signal_RFID"] = "RFID频射信号"),
            (e["Signal_NewLab"] = "NewLab八根接线柱信号"),
            (e["Signal_232_RX"] = "RX"),
            (e["Signal_232_TX"] = "TX"),
            (e["Signal_Analog_DC"] = "直流模拟信号"),
            (e["Signal_RFID_Antenna"] = "RFID天线"),
            (e["Signal_RFID_Multiplexer"] = "RFID多路复用器"),
            (e["Signal_RFID_Control"] = "RFID控制器"),
            (e["Signal_RFID_Door"] = "RFID门禁"));
        })(i || (i = {})),
        (function (e) {
          ((e[(e["Unknow"] = 0)] = "Unknow"), (e[(e["Root"] = 1)] = "Root"), (e[(e["Node"] = 2)] = "Node"));
        })(a || (a = {})),
        (function (e) {
          ((e["Error"] = "错误"), (e["Correct"] = "正确"), (e["Abnormal"] = "异常"));
        })(r || (r = {})),
        (function (e) {
          ((e["VerifyData"] = "验证数据"), (e["Screenshot"] = "截图"));
        })(s || (s = {})),
        (function (e) {
          ((e["RealPhysicalDevices"] = "连接真实物理设备"), (e["AndroidPad"] = "安卓平板"));
        })(l || (l = {})),
        (function (e) {
          ((e[(e["Base"] = 0)] = "Base"),
            (e[(e["Validate"] = 1)] = "Validate"),
            (e[(e["Upload"] = 2)] = "Upload"),
            (e[(e["Emulate"] = 3)] = "Emulate"),
            (e[(e["VirtualCOM"] = 4)] = "VirtualCOM"));
        })(c || (c = {})),
        (function (e) {
          ((e["Wired"] = "有线传感器"),
            (e["Wireless"] = "无线传感器"),
            (e["Actuator"] = "继电器"),
            (e["Gatewary"] = "网关"),
            (e["IO"] = "I/0模块"),
            (e["RFID_125K"] = "125K设备(LF)"),
            (e["RFID_ISO_144443_TypeA"] = "14443设备(HF)"),
            (e["RFID_ISO_15693"] = "15693设备(HF)"),
            (e["RFID_ISO_18000_6C"] = "18000设备(UHF)"),
            (e["RFID_Other"] = "其他设备"),
            (e["Terminal"] = "终端"),
            (e["Load"] = "负载"),
            (e["Power"] = "电源"),
            (e["Other"] = "其他外设"),
            (e["NewLabSensor"] = "NewLab传感器"),
            (e["NewLabEmbedded"] = "嵌入式"),
            (e["NewLabRFID"] = "NewLabRFID"));
        })(u || (u = {})),
        (function (e) {
          ((e[(e["None"] = -1)] = "None"),
            (e[(e["Top"] = 0)] = "Top"),
            (e[(e["Right"] = 1)] = "Right"),
            (e[(e["Bottom"] = 2)] = "Bottom"),
            (e[(e["Left"] = 3)] = "Left"));
        })(d || (d = {})),
        (function (e) {
          ((e[(e["RichText"] = 0)] = "RichText"),
            (e[(e["Exercise"] = 1)] = "Exercise"),
            (e[(e["Video"] = 2)] = "Video"),
            (e[(e["Emulator"] = 3)] = "Emulator"),
            (e[(e["Code"] = 4)] = "Code"),
            (e[(e["AppCase"] = 5)] = "AppCase"));
        })(v || (v = {})),
        (function (e) {
          ((e[(e["图文"] = 0)] = "图文"),
            (e[(e["习题"] = 1)] = "习题"),
            (e[(e["视频"] = 2)] = "视频"),
            (e[(e["仿真"] = 3)] = "仿真"),
            (e[(e["编码"] = 4)] = "编码"),
            (e[(e["案例"] = 5)] = "案例"));
        })(f || (f = {})),
        (function (e) {
          ((e[(e["undone"] = 1)] = "undone"), (e[(e["done"] = 2)] = "done"), (e[(e["flag"] = 4)] = "flag"), (e[(e["current"] = 8)] = "current"));
        })(p || (p = {})),
        (function (e) {
          ((e[(e["Old"] = 0)] = "Old"), (e[(e["New"] = 1)] = "New"));
        })(b || (b = {})),
        (function (e) {
          ((e[(e["Channel_11"] = 11)] = "Channel_11"),
            (e[(e["Channel_12"] = 12)] = "Channel_12"),
            (e[(e["Channel_13"] = 13)] = "Channel_13"),
            (e[(e["Channel_14"] = 14)] = "Channel_14"),
            (e[(e["Channel_15"] = 15)] = "Channel_15"),
            (e[(e["Channel_16"] = 16)] = "Channel_16"),
            (e[(e["Channel_17"] = 17)] = "Channel_17"),
            (e[(e["Channel_18"] = 18)] = "Channel_18"),
            (e[(e["Channel_19"] = 19)] = "Channel_19"),
            (e[(e["Channel_20"] = 20)] = "Channel_20"),
            (e[(e["Channel_21"] = 21)] = "Channel_21"),
            (e[(e["Channel_22"] = 22)] = "Channel_22"),
            (e[(e["Channel_23"] = 23)] = "Channel_23"),
            (e[(e["Channel_24"] = 24)] = "Channel_24"),
            (e[(e["Channel_25"] = 25)] = "Channel_25"),
            (e[(e["Channel_26"] = 26)] = "Channel_26"));
        })(m || (m = {})));
    },
    "057f": function (e, t, n) {
      var o = n("fc6a"),
        i = n("241c").f,
        a = {}.toString,
        r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function (e) {
          try {
            return i(e);
          } catch (t) {
            return r.slice();
          }
        };
      e.exports.f = function (e) {
        return r && "[object Window]" == a.call(e) ? s(e) : i(o(e));
      };
    },
    "0abb": function (e, t, n) {
      var o = n("f3eb");
      ("string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals));
      var i = n("499e").default;
      i("9bdabec2", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "3de0": function (e, t, n) {
      "use strict";
      var o = n("0abb"),
        i = n.n(o);
      i.a;
    },
    "451f": function (e, t, n) {
      var o = n("cdc5");
      ("string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals));
      var i = n("499e").default;
      i("6f470f0a", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "535f": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      (n("a4d3"), n("e01a"), n("d28b"), n("99af"), n("0d03"), n("d3b7"), n("25f0"), n("3ca3"), n("498a"), n("ddb0"));
      var o = n("9f12"),
        i = n("53fe"),
        a = n("8b83"),
        r = n("c65a"),
        s = n("9aa6"),
        l = n("c03e"),
        c = n("2fa7"),
        u = n("60a3"),
        d = n("73ec"),
        v = n("70b0"),
        f = (function (e) {
          function t() {
            var e, n;
            Object(o["a"])(this, t);
            for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++) l[u] = arguments[u];
            return (
              (n = Object(a["a"])(this, (e = Object(r["a"])(t)).call.apply(e, [this].concat(l)))),
              Object(c["a"])(Object(s["a"])(n), "counTimerInterval", null),
              Object(c["a"])(Object(s["a"])(n), "countTimer", 0),
              n
            );
          }
          return (
            Object(l["a"])(t, e),
            Object(i["a"])(t, [
              {
                key: "loading",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v["a"].t("lang.加载中").toString(),
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    o = arguments.length > 3 ? arguments[3] : void 0;
                  Object(d["n"])(e, t, n, o);
                },
              },
              {
                key: "msg",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
                    n = arguments.length > 2 ? arguments[2] : void 0;
                  return Object(d["o"])(e, t, n);
                },
              },
              {
                key: "alert",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    o = arguments.length > 3 ? arguments[3] : void 0;
                  Object(d["a"])(e, t, n, o);
                },
              },
              {
                key: "confirm",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v["a"].t("lang.确定").toString(),
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : v["a"].t("lang.取消").toString(),
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    a = arguments.length > 5 ? arguments[5] : void 0,
                    r = arguments.length > 6 ? arguments[6] : void 0;
                  Object(d["d"])(e, t, n, o, i, a, r);
                },
              },
              {
                key: "prompt",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v["a"].t("lang.提示信息").toString(),
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v["a"].t("lang.确定").toString(),
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : v["a"].t("lang.取消").toString(),
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    a = arguments.length > 5 ? arguments[5] : void 0;
                  arguments.length > 6 && arguments[6];
                  Object(d["p"])(e, t, n, o, i, a);
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
                    o = void 0;
                  try {
                    for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                      var r = i.value;
                      if (this.isNullOrEmpty(r)) return !0;
                    }
                  } catch (s) {
                    ((n = !0), (o = s));
                  } finally {
                    try {
                      t || null == a.return || a.return();
                    } finally {
                      if (n) throw o;
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
        })(u["c"]);
    },
    "746f": function (e, t, n) {
      var o = n("428f"),
        i = n("5135"),
        a = n("c032"),
        r = n("9bf2").f;
      e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = {});
        i(t, e) || r(t, e, { value: a.f(e) });
      };
    },
    "9e53": function (e, t, n) {
      "use strict";
      n.r(t);
      var o,
        i = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticStyle: { background: "#262626" } },
            [
              n(
                "el-container",
                [
                  n(
                    "el-container",
                    [
                      n(
                        "el-aside",
                        { attrs: { id: "video-container" } },
                        [
                          n("video-player", {
                            ref: "videoPlayer",
                            staticClass: "video-player vjs-custom-skin",
                            attrs: { playsinline: !0, options: e.playerOptions },
                          }),
                        ],
                        1,
                      ),
                      n(
                        "el-main",
                        { attrs: { id: "video-list-container" } },
                        [
                          n("el-container", [
                            n("div", { staticStyle: { width: "100%" } }, [
                              n("div", { staticClass: "video-list-title" }, [
                                n("span", { staticStyle: { display: "inline-block", "margin-left": "15px", "font-size": "14px", color: "#fff" } }, [
                                  n("i", { staticClass: "el-icon-s-unfold" }),
                                  e._v(" 播放列表"),
                                ]),
                              ]),
                              n(
                                "ul",
                                { staticClass: "el-upload-list el-upload-list--text" },
                                e._l(e.uploadedVideos, function (t) {
                                  return n(
                                    "li",
                                    {
                                      key: t.id,
                                      staticClass: "el-upload-list__item is-success el-list-enter-to",
                                      staticStyle: { "margin-top": "20px", padding: "0 15px", overflow: "hidden" },
                                      on: {
                                        click: function (n) {
                                          return e.selectVideo(t);
                                        },
                                      },
                                    },
                                    [
                                      t.selected
                                        ? n(
                                            "a",
                                            {
                                              staticClass: "el-upload-list__item-name ",
                                              staticStyle: { display: "inline", color: "#409eff" },
                                              attrs: { href: "javascript:void(0)" },
                                            },
                                            [n("i", { staticClass: "el-icon-video-camera", staticStyle: { color: "#409eff" } }), e._v(e._s(t.name) + " ")],
                                          )
                                        : n(
                                            "a",
                                            {
                                              staticClass: "el-upload-list__item-name ",
                                              staticStyle: { display: "inline", color: "#60626" },
                                              attrs: { href: "javascript:void(0)" },
                                            },
                                            [n("i", { staticClass: "el-icon-video-camera ", staticStyle: { color: "#60626" } }), e._v(e._s(t.name) + " ")],
                                          ),
                                    ],
                                  );
                                }),
                                0,
                              ),
                            ]),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  e.debug ? n("el-button", { attrs: { type: "primary" }, on: { click: e.uploadSectionContent } }, [e._v("提交")]) : e._e(),
                ],
                1,
              ),
            ],
            1,
          );
        },
        a = [],
        r = (n("99af"), n("4160"), n("a434"), n("b0c0"), n("159b"), n("96cf"), n("89ba")),
        s = n("9f12"),
        l = n("53fe"),
        c = n("8b83"),
        u = n("c65a"),
        d = n("9aa6"),
        v = n("c03e"),
        f = n("2fa7"),
        p = n("9ab4"),
        b = n("60a3"),
        m = n("535f"),
        g = n("59b9"),
        h = n("482f"),
        j = n("d6d3"),
        y = n.n(j),
        k = (n("fda2"), n("451f"), n("03cd")),
        _ =
          ((o = (function (e) {
            function t() {
              var e, n;
              Object(s["a"])(this, t);
              for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
              return (
                (n = Object(c["a"])(this, (e = Object(u["a"])(t)).call.apply(e, [this].concat(i)))),
                Object(f["a"])(Object(d["a"])(n), "debug", !1),
                Object(f["a"])(Object(d["a"])(n), "config", h["a"]),
                Object(f["a"])(Object(d["a"])(n), "sectionStateId", null),
                Object(f["a"])(Object(d["a"])(n), "sectionId", null),
                Object(f["a"])(Object(d["a"])(n), "duration", 0),
                Object(f["a"])(Object(d["a"])(n), "timerInterval", null),
                Object(f["a"])(Object(d["a"])(n), "id", ""),
                Object(f["a"])(Object(d["a"])(n), "currentVidio", null),
                Object(f["a"])(Object(d["a"])(n), "uploadedVideos", []),
                Object(f["a"])(Object(d["a"])(n), "playerOptions", {
                  playbackRates: [0.7, 1, 1.5, 2],
                  autoplay: !1,
                  muted: !1,
                  loop: !1,
                  preload: "auto",
                  language: "zh-CN",
                  aspectRatio: "16:8",
                  fluid: !0,
                  sources: [],
                  notSupportedMessage: "此视频暂无法播放，请稍后再试",
                  controlBar: { timeDivider: !0, durationDisplay: !0, remainingTimeDisplay: !1, fullscreenToggle: !0 },
                }),
                n
              );
            }
            return (
              Object(v["a"])(t, e),
              Object(l["a"])(t, [
                {
                  key: "created",
                  value: function () {
                    ((this.sectionId = this.$route.query.id), console.log(this.$route.query), console.log(this.sectionId));
                  },
                },
                { key: "init", value: function () {} },
                {
                  key: "mounted",
                  value: function () {
                    var e = this;
                    (this.init(),
                      "undefined" !== typeof this.sectionId &&
                        "" !== this.sectionId &&
                        this.downloadSectionContent(this.sectionId).then(function (t) {
                          e.uploadedVideos[0] && e.selectVideo(e.uploadedVideos[0]);
                        }),
                      this.$nextTick(function () {
                        var e = document.getElementsByClassName("vjs-progress-control")[0];
                        e.onclick = function (e) {
                          console.log();
                        };
                      }));
                  },
                },
                {
                  key: "updated",
                  value: function () {
                    console.log("updated");
                  },
                },
                {
                  key: "arrayRemove",
                  value: function (e, t) {
                    for (var n = 0; n < e.length; n++) {
                      var o = e[n];
                      o === t && e.splice(n, 1);
                    }
                  },
                },
                {
                  key: "selectVideo",
                  value: function (e) {
                    if (this.currentVidio !== e) {
                      ((this.currentVidio = e),
                        this.uploadedVideos.forEach(function (e) {
                          e.selected = !1;
                        }),
                        (this.currentVidio.selected = !0));
                      var t = this.config.web_host + "/api/filemanager/Download/" + this.currentVidio.uniqueName;
                      (console.log("selectVideo", "选中视频", t), (this.playerOptions.sources = [{ type: "video/mp4", src: t }]));
                    }
                  },
                },
                {
                  key: "submitPracticeState",
                  value: (function () {
                    var e = Object(r["a"])(
                      regeneratorRuntime.mark(function e() {
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
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "downloadPracticeState",
                  value: (function () {
                    var e = Object(r["a"])(
                      regeneratorRuntime.mark(function e() {
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
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "downloadSectionContent",
                  value: (function () {
                    var e = Object(r["a"])(
                      regeneratorRuntime.mark(function e(t) {
                        var n,
                          o,
                          i = this;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Object(g["a"])({ url: this.config.web_host + "/api/VideoPractice/GetVideoPracticeBySectionId/".concat(t), method: "GET" })
                                  );
                                case 2:
                                  if (((n = e.sent), console.log("downloadSectionContent", "ret", n), 0 !== n.code)) {
                                    e.next = 14;
                                    break;
                                  }
                                  return (
                                    (this.id = n.data.id),
                                    (o = n.data.videos),
                                    (this.uploadedVideos = []),
                                    o.forEach(function (e) {
                                      i.uploadedVideos.push({
                                        selected: !1,
                                        name: e.name,
                                        uniqueName: e.uniqueName,
                                        storeType: e.storeType,
                                        size: e.size,
                                        extention: e.extension,
                                        id: e.id,
                                      });
                                    }),
                                    this.uploadedVideos.length && this.selectVideo(this.uploadedVideos[0]),
                                    (e.next = 12),
                                    this.downloadPracticeState()
                                  );
                                case 12:
                                  e.next = 15;
                                  break;
                                case 14:
                                  this.$notify.error({ title: "错误", message: "未能加载该章节练习，" + n.message, position: "bottom-right" });
                                case 15:
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
                  key: "submitSection",
                  value: function (e) {
                    return (this.submitPracticeState(), (e.targetType = k["a"].Video), !1);
                  },
                },
                {
                  key: "taskId",
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
          })(m["a"])),
          o);
      _ = Object(p["a"])([Object(b["a"])({ components: { VueVideoPlayer: y.a } })], _);
      var S = _,
        w = S,
        O = (n("3de0"), n("2877")),
        C = Object(O["a"])(w, i, a, !1, null, "66994a41", null);
      t["default"] = C.exports;
    },
    a434: function (e, t, n) {
      "use strict";
      var o = n("23e7"),
        i = n("23cb"),
        a = n("a691"),
        r = n("50c4"),
        s = n("7b0b"),
        l = n("65f0"),
        c = n("8418"),
        u = n("1dde"),
        d = Math.max,
        v = Math.min,
        f = 9007199254740991,
        p = "Maximum allowed length exceeded";
      o(
        { target: "Array", proto: !0, forced: !u("splice") },
        {
          splice: function (e, t) {
            var n,
              o,
              u,
              b,
              m,
              g,
              h = s(this),
              j = r(h.length),
              y = i(e, j),
              k = arguments.length;
            if ((0 === k ? (n = o = 0) : 1 === k ? ((n = 0), (o = j - y)) : ((n = k - 2), (o = v(d(a(t), 0), j - y))), j + n - o > f)) throw TypeError(p);
            for (u = l(h, o), b = 0; b < o; b++) ((m = y + b), m in h && c(u, b, h[m]));
            if (((u.length = o), n < o)) {
              for (b = y; b < j - o; b++) ((m = b + o), (g = b + n), m in h ? (h[g] = h[m]) : delete h[g]);
              for (b = j; b > j - o + n; b--) delete h[b - 1];
            } else if (n > o) for (b = j - o; b > y; b--) ((m = b + o - 1), (g = b + n - 1), m in h ? (h[g] = h[m]) : delete h[g]);
            for (b = 0; b < n; b++) h[b + y] = arguments[b + 2];
            return ((h.length = j - o + n), u);
          },
        },
      );
    },
    a4d3: function (e, t, n) {
      "use strict";
      var o = n("23e7"),
        i = n("da84"),
        a = n("c430"),
        r = n("83ab"),
        s = n("4930"),
        l = n("d039"),
        c = n("5135"),
        u = n("e8b5"),
        d = n("861d"),
        v = n("825a"),
        f = n("7b0b"),
        p = n("fc6a"),
        b = n("c04e"),
        m = n("5c6c"),
        g = n("7c73"),
        h = n("df75"),
        j = n("241c"),
        y = n("057f"),
        k = n("7418"),
        _ = n("06cf"),
        S = n("9bf2"),
        w = n("d1e7"),
        O = n("9112"),
        C = n("6eeb"),
        x = n("5692"),
        I = n("f772"),
        N = n("d012"),
        R = n("90e3"),
        T = n("b622"),
        V = n("c032"),
        D = n("746f"),
        F = n("d44e"),
        P = n("69f3"),
        E = n("b727").forEach,
        A = I("hidden"),
        M = "Symbol",
        B = "prototype",
        L = T("toPrimitive"),
        z = P.set,
        H = P.getterFor(M),
        $ = Object[B],
        U = i.Symbol,
        J = i.JSON,
        G = J && J.stringify,
        q = _.f,
        X = S.f,
        W = y.f,
        K = w.f,
        Y = x("symbols"),
        Z = x("op-symbols"),
        Q = x("string-to-symbol-registry"),
        ee = x("symbol-to-string-registry"),
        te = x("wks"),
        ne = i.QObject,
        oe = !ne || !ne[B] || !ne[B].findChild,
        ie =
          r &&
          l(function () {
            return (
              7 !=
              g(
                X({}, "a", {
                  get: function () {
                    return X(this, "a", { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function (e, t, n) {
                var o = q($, t);
                (o && delete $[t], X(e, t, n), o && e !== $ && X($, t, o));
              }
            : X,
        ae = function (e, t) {
          var n = (Y[e] = g(U[B]));
          return (z(n, { type: M, tag: e, description: t }), r || (n.description = t), n);
        },
        re =
          s && "symbol" == typeof U.iterator
            ? function (e) {
                return "symbol" == typeof e;
              }
            : function (e) {
                return Object(e) instanceof U;
              },
        se = function (e, t, n) {
          (e === $ && se(Z, t, n), v(e));
          var o = b(t, !0);
          return (
            v(n),
            c(Y, o)
              ? (n.enumerable ? (c(e, A) && e[A][o] && (e[A][o] = !1), (n = g(n, { enumerable: m(0, !1) }))) : (c(e, A) || X(e, A, m(1, {})), (e[A][o] = !0)),
                ie(e, o, n))
              : X(e, o, n)
          );
        },
        le = function (e, t) {
          v(e);
          var n = p(t),
            o = h(n).concat(fe(n));
          return (
            E(o, function (t) {
              (r && !ue.call(n, t)) || se(e, t, n[t]);
            }),
            e
          );
        },
        ce = function (e, t) {
          return void 0 === t ? g(e) : le(g(e), t);
        },
        ue = function (e) {
          var t = b(e, !0),
            n = K.call(this, t);
          return !(this === $ && c(Y, t) && !c(Z, t)) && (!(n || !c(this, t) || !c(Y, t) || (c(this, A) && this[A][t])) || n);
        },
        de = function (e, t) {
          var n = p(e),
            o = b(t, !0);
          if (n !== $ || !c(Y, o) || c(Z, o)) {
            var i = q(n, o);
            return (!i || !c(Y, o) || (c(n, A) && n[A][o]) || (i.enumerable = !0), i);
          }
        },
        ve = function (e) {
          var t = W(p(e)),
            n = [];
          return (
            E(t, function (e) {
              c(Y, e) || c(N, e) || n.push(e);
            }),
            n
          );
        },
        fe = function (e) {
          var t = e === $,
            n = W(t ? Z : p(e)),
            o = [];
          return (
            E(n, function (e) {
              !c(Y, e) || (t && !c($, e)) || o.push(Y[e]);
            }),
            o
          );
        };
      (s ||
        ((U = function () {
          if (this instanceof U) throw TypeError("Symbol is not a constructor");
          var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = R(e),
            n = function (e) {
              (this === $ && n.call(Z, e), c(this, A) && c(this[A], t) && (this[A][t] = !1), ie(this, t, m(1, e)));
            };
          return (r && oe && ie($, t, { configurable: !0, set: n }), ae(t, e));
        }),
        C(U[B], "toString", function () {
          return H(this).tag;
        }),
        (w.f = ue),
        (S.f = se),
        (_.f = de),
        (j.f = y.f = ve),
        (k.f = fe),
        r &&
          (X(U[B], "description", {
            configurable: !0,
            get: function () {
              return H(this).description;
            },
          }),
          a || C($, "propertyIsEnumerable", ue, { unsafe: !0 })),
        (V.f = function (e) {
          return ae(T(e), e);
        })),
        o({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: U }),
        E(h(te), function (e) {
          D(e);
        }),
        o(
          { target: M, stat: !0, forced: !s },
          {
            for: function (e) {
              var t = String(e);
              if (c(Q, t)) return Q[t];
              var n = U(t);
              return ((Q[t] = n), (ee[n] = t), n);
            },
            keyFor: function (e) {
              if (!re(e)) throw TypeError(e + " is not a symbol");
              if (c(ee, e)) return ee[e];
            },
            useSetter: function () {
              oe = !0;
            },
            useSimple: function () {
              oe = !1;
            },
          },
        ),
        o({ target: "Object", stat: !0, forced: !s, sham: !r }, { create: ce, defineProperty: se, defineProperties: le, getOwnPropertyDescriptor: de }),
        o({ target: "Object", stat: !0, forced: !s }, { getOwnPropertyNames: ve, getOwnPropertySymbols: fe }),
        o(
          {
            target: "Object",
            stat: !0,
            forced: l(function () {
              k.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (e) {
              return k.f(f(e));
            },
          },
        ),
        J &&
          o(
            {
              target: "JSON",
              stat: !0,
              forced:
                !s ||
                l(function () {
                  var e = U();
                  return "[null]" != G([e]) || "{}" != G({ a: e }) || "{}" != G(Object(e));
                }),
            },
            {
              stringify: function (e) {
                var t,
                  n,
                  o = [e],
                  i = 1;
                while (arguments.length > i) o.push(arguments[i++]);
                if (((n = t = o[1]), (d(t) || void 0 !== e) && !re(e)))
                  return (
                    u(t) ||
                      (t = function (e, t) {
                        if (("function" == typeof n && (t = n.call(this, e, t)), !re(t))) return t;
                      }),
                    (o[1] = t),
                    G.apply(J, o)
                  );
              },
            },
          ),
        U[B][L] || O(U[B], L, U[B].valueOf),
        F(U, M),
        (N[A] = !0));
    },
    c032: function (e, t, n) {
      t.f = n("b622");
    },
    cdc5: function (e, t, n) {
      ((t = e.exports = n("24fb")(!1)),
        t.push([
          e.i,
          ".vjs-custom-skin>.video-js{width:100%;font-family:PingFang SC,Helvetica Neue,Hiragino Sans GB,Segoe UI,Microsoft YaHei,微软雅黑,sans-serif}.video-js.vjs-no-flex .vjs-menu-button-inline,.vjs-custom-skin>.video-js .vjs-menu-button-inline.vjs-slider-active,.vjs-custom-skin>.video-js .vjs-menu-button-inline:focus,.vjs-custom-skin>.video-js .vjs-menu-button-inline:hover{width:10em}.vjs-custom-skin>.video-js .vjs-controls-disabled .vjs-big-play-button{display:none!important}.vjs-custom-skin>.video-js .vjs-control{width:3em}.vjs-custom-skin>.video-js .vjs-control.vjs-live-control{width:auto;padding-left:.5em;letter-spacing:.1em}.vjs-custom-skin>.video-js .vjs-menu-button-inline:before{width:1.5em}.vjs-menu-button-inline .vjs-menu{left:3em}.vjs-custom-skin>.video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button{display:none!important}.vjs-custom-skin>.video-js .vjs-mouse-display:after,.vjs-custom-skin>.video-js .vjs-play-progress:after{padding:0 .4em .3em}.video-js.vjs-ended .vjs-loading-spinner{display:none}.video-js.vjs-ended .vjs-big-play-button{display:block!important}.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started.vjs-custom-skin>.video-js .vjs-big-play-button{display:block}.vjs-custom-skin>.video-js .vjs-big-play-button{top:50%;left:50%;margin-left:-1.5em;margin-top:-1em;background-color:rgba(0,0,0,.45);font-size:3.5em;height:2em!important;line-height:2em!important;margin-top:-1em!important}.video-js:hover .vjs-big-play-button,.vjs-custom-skin>.video-js .vjs-big-play-button:active,.vjs-custom-skin>.video-js .vjs-big-play-button:focus{background-color:rgba(36,131,213,.9)}.vjs-custom-skin>.video-js .vjs-loading-spinner{border-color:rgba(36,131,213,.8)}.vjs-custom-skin>.video-js .vjs-control-bar2{background-color:#000}.vjs-custom-skin>.video-js .vjs-control-bar{color:#fff;font-size:14px}.vjs-custom-skin>.video-js .vjs-play-progress,.vjs-custom-skin>.video-js .vjs-volume-level{background-color:#2483d5}.vjs-custom-skin>.video-js .vjs-play-progress:before{top:-.3em}.vjs-custom-skin>.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.3em}.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu{left:0}.vjs-custom-skin>.video-js .vjs-menu li{padding:0;line-height:2em;font-size:1.1em;font-family:PingFang SC,Helvetica Neue,Hiragino Sans GB,Segoe UI,Microsoft YaHei,微软雅黑,sans-serif}.vjs-custom-skin>.video-js .vjs-mouse-display:after,.vjs-custom-skin>.video-js .vjs-play-progress:after,.vjs-custom-skin>.video-js .vjs-time-tooltip{border-radius:0;font-size:1em;padding:0;width:3em;height:1.5em;line-height:1.5em;top:-3em}.vjs-custom-skin>.video-js .vjs-menu-button-popup .vjs-menu{width:5em;left:-1em}.vjs-custom-skin>.video-js .vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu{left:0}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-play-control{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-time-control{min-width:1em;padding:0;margin:0 .1em;text-align:center;display:block;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-playback-rate .vjs-playback-rate-value{font-size:1.2em;line-height:2.4}.vjs-custom-skin>.video-js .vjs-progress-control.vjs-control{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-volume-menu-button{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-resolution-button{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-resolution-button .vjs-resolution-button-label{display:block;line-height:3em}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-playback-rate{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.vjs-custom-skin>.video-js .vjs-control-bar .vjs-fullscreen-control{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}",
          "",
        ]));
    },
    d28b: function (e, t, n) {
      var o = n("746f");
      o("iterator");
    },
    e01a: function (e, t, n) {
      "use strict";
      var o = n("23e7"),
        i = n("83ab"),
        a = n("da84"),
        r = n("5135"),
        s = n("861d"),
        l = n("9bf2").f,
        c = n("e893"),
        u = a.Symbol;
      if (i && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
        var d = {},
          v = function () {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              t = this instanceof v ? new u(e) : void 0 === e ? u() : u(e);
            return ("" === e && (d[t] = !0), t);
          };
        c(v, u);
        var f = (v.prototype = u.prototype);
        f.constructor = v;
        var p = f.toString,
          b = "Symbol(test)" == String(u("test")),
          m = /^Symbol\((.*)\)[^)]+$/;
        (l(f, "description", {
          configurable: !0,
          get: function () {
            var e = s(this) ? this.valueOf() : this,
              t = p.call(e);
            if (r(d, e)) return "";
            var n = b ? t.slice(7, -1) : t.replace(m, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          o({ global: !0, forced: !0 }, { Symbol: v }));
      }
    },
    f3eb: function (e, t, n) {
      ((t = e.exports = n("24fb")(!1)),
        t.push([
          e.i,
          "#video-container[data-v-66994a41]{width:calc(100vw - 355px)!important;height:calc(100vh - 120px)!important}video[data-v-66994a41]{-o-object-fit:fill;object-fit:fill}.video-list-title[data-v-66994a41]{line-height:60px;height:60px;background:#212121;width:100%}.vjs-big-play-button[data-v-66994a41]{border-radius:51%!important;height:2em!important;width:2em!important}.el-upload-list__item[data-v-66994a41]:hover{background:#000}.clear-select[data-v-66994a41],.selected[data-v-66994a41]{color:#409eff!important;background:transparent}",
          "",
        ]));
    },
  },
]);
