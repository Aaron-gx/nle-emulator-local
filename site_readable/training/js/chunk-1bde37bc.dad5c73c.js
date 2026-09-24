(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-1bde37bc"],
  {
    "0109": function (A, e, t) {
      var r = t("94ab");
      ("string" === typeof r && (r = [[A.i, r, ""]]), r.locals && (A.exports = r.locals));
      var n = t("499e").default;
      n("248002ca", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "03cd": function (A, e, t) {
      "use strict";
      var r, n, s, a, o, i, B, c, u, l, g, w, Q, f;
      (t.d(e, "a", function () {
        return l;
      }),
        t.d(e, "b", function () {
          return w;
        }),
        (function (A) {
          ((A["None"] = "未供电"), (A["Abnormal"] = "供电异常"), (A["Normal"] = "供电正常"));
        })(r || (r = {})),
        (function (A) {
          ((A["None"] = "未定义"),
            (A["GND"] = "地线"),
            (A["VS"] = "+VS"),
            (A["Power"] = "适配器信号"),
            (A["Signal_Digital_I"] = "数字信号输入"),
            (A["Signal_Digital_O"] = "数字信号输出"),
            (A["Signal_Digital_IO"] = "数字信号输入/输出"),
            (A["Signal_Analog_P"] = "正模拟信号"),
            (A["Signal_Analog_N"] = "负模拟信号"),
            (A["Signal_485_P"] = "正485信号"),
            (A["Signal_485_N"] = "负485信号"),
            (A["Signal_232"] = "232信号"),
            (A["Signal_RJ45"] = "网口信号"),
            (A["Signal_USB"] = "usb信号"),
            (A["Signal_ZigBee"] = "ZigBee信号"),
            (A["Signal_RFID"] = "RFID频射信号"),
            (A["Signal_NewLab"] = "NewLab八根接线柱信号"),
            (A["Signal_232_RX"] = "RX"),
            (A["Signal_232_TX"] = "TX"),
            (A["Signal_Analog_DC"] = "直流模拟信号"),
            (A["Signal_RFID_Antenna"] = "RFID天线"),
            (A["Signal_RFID_Multiplexer"] = "RFID多路复用器"),
            (A["Signal_RFID_Control"] = "RFID控制器"),
            (A["Signal_RFID_Door"] = "RFID门禁"));
        })(n || (n = {})),
        (function (A) {
          ((A[(A["Unknow"] = 0)] = "Unknow"), (A[(A["Root"] = 1)] = "Root"), (A[(A["Node"] = 2)] = "Node"));
        })(s || (s = {})),
        (function (A) {
          ((A["Error"] = "错误"), (A["Correct"] = "正确"), (A["Abnormal"] = "异常"));
        })(a || (a = {})),
        (function (A) {
          ((A["VerifyData"] = "验证数据"), (A["Screenshot"] = "截图"));
        })(o || (o = {})),
        (function (A) {
          ((A["RealPhysicalDevices"] = "连接真实物理设备"), (A["AndroidPad"] = "安卓平板"));
        })(i || (i = {})),
        (function (A) {
          ((A[(A["Base"] = 0)] = "Base"),
            (A[(A["Validate"] = 1)] = "Validate"),
            (A[(A["Upload"] = 2)] = "Upload"),
            (A[(A["Emulate"] = 3)] = "Emulate"),
            (A[(A["VirtualCOM"] = 4)] = "VirtualCOM"));
        })(B || (B = {})),
        (function (A) {
          ((A["Wired"] = "有线传感器"),
            (A["Wireless"] = "无线传感器"),
            (A["Actuator"] = "继电器"),
            (A["Gatewary"] = "网关"),
            (A["IO"] = "I/0模块"),
            (A["RFID_125K"] = "125K设备(LF)"),
            (A["RFID_ISO_144443_TypeA"] = "14443设备(HF)"),
            (A["RFID_ISO_15693"] = "15693设备(HF)"),
            (A["RFID_ISO_18000_6C"] = "18000设备(UHF)"),
            (A["RFID_Other"] = "其他设备"),
            (A["Terminal"] = "终端"),
            (A["Load"] = "负载"),
            (A["Power"] = "电源"),
            (A["Other"] = "其他外设"),
            (A["NewLabSensor"] = "NewLab传感器"),
            (A["NewLabEmbedded"] = "嵌入式"),
            (A["NewLabRFID"] = "NewLabRFID"));
        })(c || (c = {})),
        (function (A) {
          ((A[(A["None"] = -1)] = "None"),
            (A[(A["Top"] = 0)] = "Top"),
            (A[(A["Right"] = 1)] = "Right"),
            (A[(A["Bottom"] = 2)] = "Bottom"),
            (A[(A["Left"] = 3)] = "Left"));
        })(u || (u = {})),
        (function (A) {
          ((A[(A["RichText"] = 0)] = "RichText"),
            (A[(A["Exercise"] = 1)] = "Exercise"),
            (A[(A["Video"] = 2)] = "Video"),
            (A[(A["Emulator"] = 3)] = "Emulator"),
            (A[(A["Code"] = 4)] = "Code"),
            (A[(A["AppCase"] = 5)] = "AppCase"));
        })(l || (l = {})),
        (function (A) {
          ((A[(A["图文"] = 0)] = "图文"),
            (A[(A["习题"] = 1)] = "习题"),
            (A[(A["视频"] = 2)] = "视频"),
            (A[(A["仿真"] = 3)] = "仿真"),
            (A[(A["编码"] = 4)] = "编码"),
            (A[(A["案例"] = 5)] = "案例"));
        })(g || (g = {})),
        (function (A) {
          ((A[(A["undone"] = 1)] = "undone"), (A[(A["done"] = 2)] = "done"), (A[(A["flag"] = 4)] = "flag"), (A[(A["current"] = 8)] = "current"));
        })(w || (w = {})),
        (function (A) {
          ((A[(A["Old"] = 0)] = "Old"), (A[(A["New"] = 1)] = "New"));
        })(Q || (Q = {})),
        (function (A) {
          ((A[(A["Channel_11"] = 11)] = "Channel_11"),
            (A[(A["Channel_12"] = 12)] = "Channel_12"),
            (A[(A["Channel_13"] = 13)] = "Channel_13"),
            (A[(A["Channel_14"] = 14)] = "Channel_14"),
            (A[(A["Channel_15"] = 15)] = "Channel_15"),
            (A[(A["Channel_16"] = 16)] = "Channel_16"),
            (A[(A["Channel_17"] = 17)] = "Channel_17"),
            (A[(A["Channel_18"] = 18)] = "Channel_18"),
            (A[(A["Channel_19"] = 19)] = "Channel_19"),
            (A[(A["Channel_20"] = 20)] = "Channel_20"),
            (A[(A["Channel_21"] = 21)] = "Channel_21"),
            (A[(A["Channel_22"] = 22)] = "Channel_22"),
            (A[(A["Channel_23"] = 23)] = "Channel_23"),
            (A[(A["Channel_24"] = 24)] = "Channel_24"),
            (A[(A["Channel_25"] = 25)] = "Channel_25"),
            (A[(A["Channel_26"] = 26)] = "Channel_26"));
        })(f || (f = {})));
    },
    "057f": function (A, e, t) {
      var r = t("fc6a"),
        n = t("241c").f,
        s = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        o = function (A) {
          try {
            return n(A);
          } catch (e) {
            return a.slice();
          }
        };
      A.exports.f = function (A) {
        return a && "[object Window]" == s.call(A) ? o(A) : n(r(A));
      };
    },
    "0767": function (A, e, t) {
      ((e = A.exports = t("24fb")(!1)), e.push([A.i, ".frame-detial{height:calc(100vh - 60px);width:calc(100vw - 40px);overflow-y:auto}", ""]));
    },
    "0c5c": function (A, e) {
      A.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAwElEQVQoU2NkIAEwgtR++/77PzF6wIoPHzv9v6O3H796RkYGsOIPH7/+j0/LZPjy9StODZrqahDFIGdcvnqNoaqhCatiFhYWhvkzpiIU////n6GmsYXh0tWrGBrcnJ0YcjPSEIpBKl68fMmQmpOPopiPj49h8ewZDExMTKiKQaoWLlvGsGb9JriGguwMBmcHBzAfI+g+f/nCEJuczvD3318GGSkphukT++AasYbzvoOHGSZMncbQ39HGoKykCFcMAIp9Un6uaLRBAAAAAElFTkSuQmCC";
    },
    "0ed3": function (A, e, t) {
      var r = t("2594");
      ("string" === typeof r && (r = [[A.i, r, ""]]), r.locals && (A.exports = r.locals));
      var n = t("499e").default;
      n("fe29441c", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1b4e": function (A, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return a;
      });
      var r = t("9f12"),
        n = t("2fa7"),
        s = t("52cf"),
        a = function A() {
          (Object(r["a"])(this, A),
            Object(n["a"])(this, "id", void 0),
            Object(n["a"])(this, "sectionName", void 0),
            Object(n["a"])(this, "sectionScore", void 0),
            Object(n["a"])(this, "sequence", void 0),
            Object(n["a"])(this, "templateId", void 0),
            Object(n["a"])(this, "parentId", void 0),
            Object(n["a"])(this, "hasContent", void 0),
            Object(n["a"])(this, "title", void 0),
            Object(n["a"])(this, "duration", void 0),
            Object(n["a"])(this, "score", void 0),
            Object(n["a"])(this, "comment", void 0),
            Object(n["a"])(this, "taskType", void 0),
            Object(n["a"])(this, "content", void 0),
            Object(n["a"])(this, "children", void 0),
            Object(n["a"])(this, "show", void 0),
            Object(n["a"])(this, "upload", void 0),
            Object(n["a"])(this, "state", void 0),
            Object(n["a"])(this, "chardata", void 0),
            Object(n["a"])(this, "complatecount", void 0),
            (this.title = "t"),
            (this.duration = 0),
            (this.children = []),
            (this.show = !1),
            (this.upload = !1),
            (this.state = new s["a"]()));
        };
    },
    "1d98": function (A, e, t) {
      var r = t("2c4b");
      ("string" === typeof r && (r = [[A.i, r, ""]]), r.locals && (A.exports = r.locals));
      var n = t("499e").default;
      n("2ea720b0", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    2594: function (A, e, t) {
      e = A.exports = t("24fb")(!1);
      var r = t("1de5"),
        n = r(t("fb5a")),
        s = r(t("ca97"));
      e.push([
        A.i,
        '.priview[data-v-f2fa69c2],[data-v-f2fa69c2] .stat-info{display:none}.active1[data-v-f2fa69c2]{color:#646e75!important;font-weight:700}.active2[data-v-f2fa69c2]{color:#207bf8!important;font-weight:700}.single-line[data-v-f2fa69c2]{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:98px}.content[data-v-f2fa69c2]{text-align:center}.fixed-r[data-v-f2fa69c2]{position:fixed;margin:auto;right:50px;top:0;bottom:0;padding:0}.anchor[data-v-f2fa69c2]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:2px solid #eaeaea;padding-left:20px}.anchor i[data-v-f2fa69c2]{height:1px;text-align:left;display:block}.anchor i[data-v-f2fa69c2]:before{background:#d1d1d1;margin:0 0 8px -26px}.anchor .a-p[data-v-f2fa69c2]:before,.anchor i[data-v-f2fa69c2]:before{content:"";-webkit-transform:rotate(45deg);transform:rotate(45deg);display:inline-block;height:9px;width:9px}.anchor .a-p[data-v-f2fa69c2]:before{background:#fff;border:2px solid #d1d1d1;margin:4px 37px 4px -28px;position:absolute}.anchor .a-p[data-v-f2fa69c2]{color:#646e75;font-size:14px;margin:12px 0}.anchor .a-c[data-v-f2fa69c2],.anchor .a-p[data-v-f2fa69c2]{text-align:left;width:120px;cursor:pointer}.anchor .a-c[data-v-f2fa69c2]{color:#999;font-size:12px;margin:8px 0}.tran90[data-v-f2fa69c2]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.page[data-v-f2fa69c2]{background-image:url(' +
          n +
          ');background-repeat:no-repeat;padding:70px;margin-top:36px;width:987px;min-height:1396px;display:inline-block;text-align:left;-webkit-box-shadow:0 0 38px 0 rgba(0,0,0,.17);box-shadow:0 0 38px 0 rgba(0,0,0,.17);border-radius:4px}.page .head[data-v-f2fa69c2]{color:#fff;margin-bottom:90px}.page .head h1[data-v-f2fa69c2]{font-size:40px;font-weight:700}.page .head .head-bottom[data-v-f2fa69c2]{margin-top:16px;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.page h3[data-v-f2fa69c2]{height:26px;font-size:20px;font-weight:700;color:#333;line-height:26px;margin-top:45px}.page .line[data-v-f2fa69c2]{width:843px;height:1px;margin-top:18px;background:#ededed;position:relative;display:block}.page .line[data-v-f2fa69c2]:before{content:"";display:block;position:absolute;top:-1px;width:38px;height:3px;background:#333}.page .base-info[data-v-f2fa69c2]{margin-top:42px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.page .base-info[data-v-f2fa69c2],.page .base-info .info-item[data-v-f2fa69c2]{display:-webkit-box;display:-ms-flexbox;display:flex}.page .base-info .info-item[data-v-f2fa69c2]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:15px;color:#848f99}.page .base-info .info-item img[data-v-f2fa69c2]{margin-right:2px}.page .base-info .info-item span[data-v-f2fa69c2]{color:#000;margin-left:16px}.page .sec-c[data-v-f2fa69c2]{width:843px;height:52px;line-height:52px;background:#f6f7fb;padding:0 15px;margin:25px 0 18px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer}.page .sec-c .sec-c-name[data-v-f2fa69c2]{font-size:16px;font-weight:700;color:#666}.page .sec-c .sec-c-name span[data-v-f2fa69c2]{margin-left:8px;font-weight:400;font-size:16px;color:#989898}.page .comment[data-v-f2fa69c2]{display:-webkit-box;display:-ms-flexbox;display:flex;width:843px}.page .comment img[data-v-f2fa69c2]{width:48px;height:48px;margin-right:12px}.page .comment p[data-v-f2fa69c2]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;background:#fbf8f6;color:#b5896b;font-size:14px;line-height:25px;padding:8px 19px;border-radius:4px}.sec-content .exer .ques[data-v-f2fa69c2]{word-wrap:break-word;font-size:16px;color:#333;margin:14px 0}.sec-content .exer .ques>span[data-v-f2fa69c2]{margin-right:16px;font-weight:700}.sec-content .exer .e-top[data-v-f2fa69c2]{font-size:14px;color:#888;line-height:30px;border-radius:16px;background:#efefef;max-width:850px;padding:0 20px;display:inline-block;margin-right:16px;word-wrap:break-word;word-break:break-all;white-space:pre-wrap!important}.sec-content .exer .ans[data-v-f2fa69c2]{font-size:14px;margin:14px 0;color:#666}.sec-content .exer .ans-s[data-v-f2fa69c2]:before{content:"";display:inline-block;margin:0 16px -4px 0;border-radius:9px;width:18px;height:18px;border:1px solid #ccc}.sec-content .exer .ans-s.stu-s[data-v-f2fa69c2]{color:#207bf8}.sec-content .exer .ans-s.stu-s[data-v-f2fa69c2]:before{content:"";display:inline-block;margin:0 16px -4px 0;border-radius:10px;width:10px;height:10px;border:5px solid #207bf8}.sec-content .exer .ans-m[data-v-f2fa69c2]:before{content:"";display:inline-block;margin:0 16px -4px 0;width:18px;height:18px;border:1px solid #ccc}.sec-content .exer .ans-m.stu-m[data-v-f2fa69c2]{color:#207bf8}.sec-content .exer .ans-m.stu-m[data-v-f2fa69c2]:before{content:"";display:inline-block;margin:0 16px -4px 0;width:10px;height:10px;border:5px double #207bf8}.sec-content .file[data-v-f2fa69c2]{height:25px;font-size:14px;color:#333;line-height:25px;margin:14px 0}.sec-content .file[data-v-f2fa69c2]:before{content:url(' +
          s +
          ");margin-right:9px;vertical-align:-10%}.chart[data-v-f2fa69c2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.chart .s-left[data-v-f2fa69c2]{margin-top:20px;width:320px;height:260px;overflow:hidden}.chart .s-right[data-v-f2fa69c2]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;border-left:1px solid #dadada;margin:20px 0;padding-left:38px}.chart .s-right .s-value[data-v-f2fa69c2]{display:inline-block;text-align:center;vertical-align:top}.chart .s-right ul[data-v-f2fa69c2]{float:right;text-align:right}.chart .s-right ul .sec-name[data-v-f2fa69c2]{text-align:left;width:110px;margin-bottom:-2px}.chart .s-right ul .pro[data-v-f2fa69c2]{width:146px;margin-left:5px;display:inline-block}.chart .s-right ul .sec-score[data-v-f2fa69c2]{font-size:16px;color:#ffa613;width:35px;text-align:right;display:inline-block}",
        "",
      ]);
    },
    "2c4b": function (A, e, t) {
      ((e = A.exports = t("24fb")(!1)),
        e.push([
          A.i,
          ".mark-container{margin:0}.stat-info{padding:12px;display:block;margin:0;background:#f5f7fa}.stat-info .time-val{color:green;margin-left:10px}.file-item{overflow:hidden;font-size:14px;margin:12px 8px;border:1px solid #ddd;padding:8px 8px}.file-item strong{display:block;margin:8px 0}.CodeMirror{border:1px solid #eee;height:auto}",
          "",
        ]));
    },
    "46d6": function (A, e) {
      A.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABYElEQVQ4T62TO0sDQRSF7xmSiFaCDxDEQixcZZn4yG5h4Q+w8Q/YSRCCdjam0sJWMFgEhGBr7z9IUBclGzFJJRaxMYWNRDDJzpXdxnV9bZZMe2e+e885d0B9OghyrHI9zeATMKeMhXnbX7+sVE3BKBKwaUrtzF/zQKVKZTyOgTVmJYjEKrHaEMC+Im58bYRpYt4DocDgElioDt4vVqRseqBru35MxNtRVArgMCW1rAey7GqeCekoICLkzKS244Fuqg9TcNpjUUAOuk1D1xv9nahv0n4BqZiA4ZfrEOmsuBBI8tOjMKDnp9j96ER3yY29V5DvPh4NOTtj3dUPiCkbGcTg3ZGhRO6l1XEXNJCuL/5/zG4leHCyQ2/rDAT8cWcLDULeTGpbll27ZaLF77sWDsSIx3W0nWEFVfx5YcOBXononAjLRCz/BV2VaxmAjlzBvXwTAIqJM6acO+3p4V9NPgDYjbATEhfmXAAAAABJRU5ErkJggg==";
    },
    "4a80": function (A, e, t) {
      "use strict";
      (t("99af"), t("4160"), t("159b"), t("96cf"));
      var r = t("89ba"),
        n = t("9f12"),
        s = t("53fe"),
        a = t("59b9"),
        o = t("482f"),
        i = (function () {
          function A() {
            Object(n["a"])(this, A);
          }
          return (
            Object(s["a"])(A, [
              {
                key: "getSectionStateByTargetId",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t, r;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (e) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", null);
                            case 2:
                              return (
                                (A.next = 4),
                                Object(a["a"])({ url: "".concat(o["a"].web_host, "/api/SectionState/GetSectionStateByTargetId/").concat(e), method: "GET" })
                              );
                            case 4:
                              return ((t = A.sent), (r = null), t && 0 === t.code && (r = t.data), A.abrupt("return", r));
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "getSectionStateList",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e, t, r) {
                      var n, s;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (e && t && r) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", []);
                            case 2:
                              return (
                                (A.next = 4),
                                Object(a["a"])({
                                  url: "".concat(o["a"].web_host, "/api/SectionState/GetSectionStateList"),
                                  method: "GET",
                                  params: { recordId: e, stuId: t, sectionId: r },
                                })
                              );
                            case 4:
                              return (
                                (n = A.sent),
                                (s = []),
                                n &&
                                  0 === n.code &&
                                  n.data.forEach(function (A) {
                                    s.push(A);
                                  }),
                                A.abrupt("return", s)
                              );
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e, t, r) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "getTaskAllStateList",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e, t) {
                      var r, n;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (e && t) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", []);
                            case 2:
                              return (
                                (A.next = 4),
                                Object(a["a"])({
                                  url: "".concat(o["a"].web_host, "/api/SectionState/GetTaskAllStateList"),
                                  method: "GET",
                                  params: { recordId: e, stuId: t },
                                })
                              );
                            case 4:
                              return (
                                (r = A.sent),
                                (n = []),
                                r &&
                                  0 === r.code &&
                                  r.data.forEach(function (A) {
                                    n.push(A);
                                  }),
                                A.abrupt("return", n)
                              );
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e, t) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "getTaskSectionStateList",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e, t) {
                      var r, n;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (e && t) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", []);
                            case 2:
                              return (
                                (A.next = 4),
                                Object(a["a"])({
                                  url: "".concat(o["a"].web_host, "/api/SectionState/GetTaskSectionStateList"),
                                  method: "GET",
                                  params: { recordId: e, stuId: t },
                                })
                              );
                            case 4:
                              return (
                                (r = A.sent),
                                (n = []),
                                r &&
                                  0 === r.code &&
                                  r.data.forEach(function (A) {
                                    n.push(A);
                                  }),
                                A.abrupt("return", n)
                              );
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e, t) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "getSectionState",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t, r;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (((t = null), e)) {
                                A.next = 3;
                                break;
                              }
                              return A.abrupt("return", t);
                            case 3:
                              return (
                                (A.next = 5),
                                Object(a["a"])({ url: "".concat(o["a"].web_host, "/api/SectionState/GetSectionState/").concat(e), method: "GET" })
                              );
                            case 5:
                              return ((r = A.sent), r && 0 === r.code && (t = r.data), A.abrupt("return", t));
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "addOrUpdateSectionState",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (e) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", null);
                            case 2:
                              return (
                                (A.next = 4),
                                Object(a["a"])({ url: "".concat(o["a"].web_host, "/api/SectionState/AddOrUpdateSectionState"), method: "POST", data: e })
                              );
                            case 4:
                              if (((t = A.sent), "undefined" === typeof t)) {
                                A.next = 7;
                                break;
                              }
                              return A.abrupt("return", t);
                            case 7:
                              return A.abrupt("return", null);
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
            ]),
            A
          );
        })();
      e["a"] = new i();
    },
    "535f": function (A, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return g;
      });
      (t("a4d3"), t("e01a"), t("d28b"), t("99af"), t("0d03"), t("d3b7"), t("25f0"), t("3ca3"), t("498a"), t("ddb0"));
      var r = t("9f12"),
        n = t("53fe"),
        s = t("8b83"),
        a = t("c65a"),
        o = t("9aa6"),
        i = t("c03e"),
        B = t("2fa7"),
        c = t("60a3"),
        u = t("73ec"),
        l = t("70b0"),
        g = (function (A) {
          function e() {
            var A, t;
            Object(r["a"])(this, e);
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
            return (
              (t = Object(s["a"])(this, (A = Object(a["a"])(e)).call.apply(A, [this].concat(i)))),
              Object(B["a"])(Object(o["a"])(t), "counTimerInterval", null),
              Object(B["a"])(Object(o["a"])(t), "countTimer", 0),
              t
            );
          }
          return (
            Object(i["a"])(e, A),
            Object(n["a"])(e, [
              {
                key: "loading",
                value: function (A) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l["a"].t("lang.加载中").toString(),
                    t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                  Object(u["n"])(A, e, t, r);
                },
              },
              {
                key: "msg",
                value: function (A) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
                    t = arguments.length > 2 ? arguments[2] : void 0;
                  return Object(u["o"])(A, e, t);
                },
              },
              {
                key: "alert",
                value: function (A) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l["a"].t("lang.提示信息").toString(),
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0;
                  Object(u["a"])(A, e, t, r);
                },
              },
              {
                key: "confirm",
                value: function (A) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l["a"].t("lang.提示信息").toString(),
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l["a"].t("lang.确定").toString(),
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l["a"].t("lang.取消").toString(),
                    n = arguments.length > 4 ? arguments[4] : void 0,
                    s = arguments.length > 5 ? arguments[5] : void 0,
                    a = arguments.length > 6 ? arguments[6] : void 0;
                  Object(u["d"])(A, e, t, r, n, s, a);
                },
              },
              {
                key: "prompt",
                value: function (A) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l["a"].t("lang.提示信息").toString(),
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l["a"].t("lang.确定").toString(),
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l["a"].t("lang.取消").toString(),
                    n = arguments.length > 4 ? arguments[4] : void 0,
                    s = arguments.length > 5 ? arguments[5] : void 0;
                  arguments.length > 6 && arguments[6];
                  Object(u["p"])(A, e, t, r, n, s);
                },
              },
              {
                key: "isNullOrEmpty",
                value: function (A) {
                  if (!A) return !0;
                  var e = A,
                    t = e.trim();
                  return 0 === t.length;
                },
              },
              {
                key: "anyIsNullOrEmpty",
                value: function (A) {
                  if (!A) return !0;
                  var e = !0,
                    t = !1,
                    r = void 0;
                  try {
                    for (var n, s = A[Symbol.iterator](); !(e = (n = s.next()).done); e = !0) {
                      var a = n.value;
                      if (this.isNullOrEmpty(a)) return !0;
                    }
                  } catch (o) {
                    ((t = !0), (r = o));
                  } finally {
                    try {
                      e || null == s.return || s.return();
                    } finally {
                      if (t) throw r;
                    }
                  }
                  return !1;
                },
              },
              {
                key: "deepClone",
                value: function (A) {
                  var e = JSON.stringify(A),
                    t = JSON.parse(e);
                  return t;
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
                  var A = this;
                  A.counTimerInterval ||
                    (A.counTimerInterval = setInterval(function () {
                      A.countTimer++;
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
                  var A = this;
                  A.counTimerInterval && (clearInterval(A.counTimerInterval), (A.counTimerInterval = null));
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
        })(c["c"]);
    },
    "537b": function (A, e) {
      A.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABs0lEQVQ4T62TMUgbURjH//+XmHRwcHArOEiHnsFcUppLcLE4tEOHLkI765RSQXCU0lLcDE6lU1aHFoRAIUOlQx2EC1K9tncKARcXKTQIKgrJ3VcutVHbO+6EvOV7vPf/ft+f732P6NNinzgIBIkIG5bzAmSZ4KiIHACoGrpWIekGFQ8EmdvOOxDlfxMIvDdyY89igcyv3+8zkWz4roISRPCwlB9bDyhy/ci0nEUIlsJ7JyvFXGYhEtTYcd4I8DIcxLfFnDYXCTItewrCz2EgRU4XdG0tEuQLTMupQfDkPxixYWS1ByQlFsi27dRxWy0DMkNgEMAZiNVbaM/run4a69V80ea33fGEK2UqPBbBCMCfVPIJHVaNe9qXSJDv5MRVFXh4DkgipE81d0BmJzKZ1tX73qxsbcmAm9z7CMijqG9D0pZzTBaL2q+/2h7I3LZfg3wVBblMVB+M3N2n10DNZjPdOm0fAhiKCwIgSnXuFLLZfT+n66ixY2cE/HEDSFcq5HTpYqa6oHq9mR6+7c54npdWSvkzIv5SCvJn60d1EbufX8BEJ+WdreXz+aOeo5s6CdL/BvENmRPDT3URAAAAAElFTkSuQmCC";
    },
    5748: function (A, e, t) {
      "use strict";
      var r = t("0ed3"),
        n = t.n(r);
      n.a;
    },
    6622: function (A, e) {
      A.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACIklEQVQ4T62UT2gTURDGv9nEtLQFQUT0IAixttlid6VNttaC5CKCCCrFg2DAg+BJvPoXi9arF8GL4J+LYCkUD57E5GJJ1oJ5yu42RRFE0IMIQhXaJPvJrgmYsAs5OIfHe/NmfgzfzHuC/2QSx3EcZ+h3XZujcBaAUGQpMZi6PplO/4zKiQQVi0wObPOKIGb+TRLAzhqZaRFpdsMiQRXlFkA8jqxWcN4y9Ae9garuEwBno0CayELWyJzuCWQrb5HkqRj9lixTP9kTqKy8y0LeiRH1Rs7Ub/UEUurDjg3W1whu7Ur4RamPThnGl55AQdDKu9qJJv2nIPuDswAbAAs5c+xZz+1vBy47zl6trp3R4CcoiUeWMfopbu462k9SbOUcEUnOZsdHLgTzQjJRKpUkn883SGpv1Op90RILk/uHX4mI3waHoBDw3rsEHxcB7Al8SdlycMIYLtvKfQlKf87MzNhva1lK0w6Tic+apt1d/zFyL5+XRgiqqNWroH+7o2zypnVgbK5cdRcFMmiZmaMV5V0BOd8RJ5i3DP1aCLKV95zk8c7nIK+DKirKLZMYmDL1cVt5JZKHu0AvLEM/1qrIXQEx0SVkI9Ho295Mbq4J0Le5LrtTQ/53AqnOOFGWmTH/gqruVwA7uzuiAQUf4ZsT0eQcfT6M6No3y9R3tUE1QNKBgi0LNyKyTHI6kLa1P9S6l3CywGD5aJn6vtj/KG5e4vx/AGyo1hN6O61oAAAAAElFTkSuQmCC";
    },
    "72c0": function (A, e, t) {
      var r = t("0767");
      ("string" === typeof r && (r = [[A.i, r, ""]]), r.locals && (A.exports = r.locals));
      var n = t("499e").default;
      n("222d4978", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "746f": function (A, e, t) {
      var r = t("428f"),
        n = t("5135"),
        s = t("c032"),
        a = t("9bf2").f;
      A.exports = function (A) {
        var e = r.Symbol || (r.Symbol = {});
        n(e, A) || a(e, A, { value: s.f(A) });
      };
    },
    "82fd": function (A, e, t) {
      "use strict";
      var r = t("72c0"),
        n = t.n(r);
      n.a;
    },
    "94ab": function (A, e, t) {
      ((e = A.exports = t("24fb")(!1)),
        e.push([
          A.i,
          ".cm-s-dracula.CodeMirror,.cm-s-dracula .CodeMirror-gutters{background-color:#282a36!important;color:#f8f8f2!important;border:none}.cm-s-dracula .CodeMirror-gutters{color:#282a36}.cm-s-dracula .CodeMirror-cursor{border-left:thin solid #f8f8f0}.cm-s-dracula .CodeMirror-linenumber{color:#6d8a88}.cm-s-dracula .CodeMirror-selected{background:hsla(0,0%,100%,.1)}.cm-s-dracula .CodeMirror-line::selection,.cm-s-dracula .CodeMirror-line>span::selection,.cm-s-dracula .CodeMirror-line>span>span::selection{background:hsla(0,0%,100%,.1)}.cm-s-dracula .CodeMirror-line::-moz-selection,.cm-s-dracula .CodeMirror-line>span::-moz-selection,.cm-s-dracula .CodeMirror-line>span>span::-moz-selection{background:hsla(0,0%,100%,.1)}.cm-s-dracula span.cm-comment{color:#6272a4}.cm-s-dracula span.cm-string,.cm-s-dracula span.cm-string-2{color:#f1fa8c}.cm-s-dracula span.cm-number{color:#bd93f9}.cm-s-dracula span.cm-variable{color:#50fa7b}.cm-s-dracula span.cm-variable-2{color:#fff}.cm-s-dracula span.cm-def{color:#50fa7b}.cm-s-dracula span.cm-keyword,.cm-s-dracula span.cm-operator{color:#ff79c6}.cm-s-dracula span.cm-atom{color:#bd93f9}.cm-s-dracula span.cm-meta{color:#f8f8f2}.cm-s-dracula span.cm-tag{color:#ff79c6}.cm-s-dracula span.cm-attribute,.cm-s-dracula span.cm-qualifier{color:#50fa7b}.cm-s-dracula span.cm-property{color:#66d9ef}.cm-s-dracula span.cm-builtin{color:#50fa7b}.cm-s-dracula span.cm-type,.cm-s-dracula span.cm-variable-3{color:#ffb86c}.cm-s-dracula .CodeMirror-activeline-background{background:hsla(0,0%,100%,.1)}.cm-s-dracula .CodeMirror-matchingbracket{text-decoration:underline;color:#fff!important}",
          "",
        ]));
    },
    "9f83": function (A, e, t) {
      "use strict";
      t.r(e);
      var r,
        n = function () {
          var A = this,
            e = A.$createElement,
            t = A._self._c || e;
          return t("div", { staticClass: "frame-detial" }, [t("commentreport", { attrs: { id: A.recordId } }), t("br"), t("br"), t("br")], 1);
        },
        s = [],
        a = (t("99af"), t("9f12")),
        o = t("53fe"),
        i = t("8b83"),
        B = t("c65a"),
        c = t("9aa6"),
        u = t("c03e"),
        l = t("2fa7"),
        g = t("9ab4"),
        w = t("60a3"),
        Q = function () {
          var A = this,
            e = A.$createElement,
            r = A._self._c || e;
          return r(
            "div",
            { staticClass: "content" },
            [
              r(
                "el-button",
                {
                  staticStyle: { position: "fixed", bottom: "30px", right: "30px", "z-index": "100000" },
                  attrs: { icon: "el-icon-download\n", plain: "" },
                  on: { click: A.generateImages },
                },
                [A._v("下载报告")],
              ),
              r(
                "div",
                { staticClass: "page" },
                [
                  r("div", { staticClass: "head" }, [
                    r("h1", [A._v("评分报告")]),
                    r("div", { staticClass: "head-bottom" }, [
                      r("p", [A._v("任务名称：" + A._s(A.record.name))]),
                      r("p", [A._v("任务编号：" + A._s(A.record.taskNumber))]),
                    ]),
                  ]),
                  r("h3", [A._v("基本信息")]),
                  r("i", { staticClass: "line" }),
                  r("div", { staticClass: "base-info" }, [
                    r("div", { staticClass: "info-item" }, [
                      r("img", { attrs: { src: t("537b"), alt: "" } }),
                      A._v(" 学生姓名"),
                      r("span", [A._v(A._s(A.record.studentName))]),
                    ]),
                    r("div", { staticClass: "info-item" }, [
                      r("img", { attrs: { src: t("d175"), alt: "" } }),
                      A._v(" 学生学号 "),
                      r("span", [A._v(A._s(A.record.studentNumber))]),
                    ]),
                    r("div", { staticClass: "info-item" }, [
                      r("img", { attrs: { src: t("6622"), alt: "" } }),
                      A._v(" 指导老师 "),
                      r("span", [A._v(A._s(A.record.teacherName))]),
                    ]),
                    r("div", { staticClass: "info-item" }, [
                      r("img", { attrs: { src: t("46d6") } }),
                      A._v(" 点评日期 "),
                      r("span", [A._v(A._s(A._f("format")(A.record.publishTime)))]),
                    ]),
                  ]),
                  r("h3", [A._v("评分汇总")]),
                  r("i", { staticClass: "line" }),
                  r("div", { staticClass: "chart" }, [
                    r("div", { staticClass: "s-left" }, [
                      r("p", [r("ve-ring", { attrs: { data: A.ringData, settings: A.ringSettings, extend: A.ringExtend } })], 1),
                    ]),
                    r("div", { staticClass: "s-right" }, [
                      r("div", { staticClass: "s-value" }, [
                        r("p", { staticStyle: { "font-size": "20px", "font-weight": "400", color: "#333" } }, [
                          r("span", { staticStyle: { "font-size": "56px", "font-weight": "400", color: "#FFA613" } }, [A._v(A._s(A.record.score))]),
                          A._v("分"),
                        ]),
                        r("p", { staticStyle: { "font-size": "12px", color: "#505D6F" } }, [A._v("点评总得分")]),
                        r("p", { staticStyle: { "font-size": "12px", color: "#9AA1A9" } }, [A._v("（总分：" + A._s(A.templateData.totalPoints) + "分）")]),
                      ]),
                      r(
                        "ul",
                        A._l(A.sectionList, function (e, t) {
                          return r("li", { key: t, staticStyle: { margin: "8px 0", "font-size": "12px", color: "#666" } }, [
                            r("span", { staticClass: "sec-name single-line" }, [A._v(A._s(e.sectionName))]),
                            r(
                              "div",
                              { staticClass: "pro" },
                              [
                                r("el-progress", {
                                  attrs: { "show-text": !1, "stroke-width": 10, color: A.colors[t % 6], percentage: (e.state.score / e.score) * 100 },
                                }),
                              ],
                              1,
                            ),
                            r("span", { staticClass: "sec-score" }, [A._v(A._s(e.state.score))]),
                            r("span", [A._v("分")]),
                          ]);
                        }),
                        0,
                      ),
                    ]),
                  ]),
                  r("p", { staticStyle: { "text-align": "right", "font-size": "14px", color: "#333" } }, [A._v("满分章节数：" + A._s(A.fullMark))]),
                  A._l(A.templateData.sections, function (e, n) {
                    return r(
                      "div",
                      { key: n, attrs: { id: "i-" + e.id } },
                      [
                        r("h3", { staticClass: "single-line" }, [A._v(A._s(e.sectionName))]),
                        r("i", { staticClass: "line" }),
                        A._l(e.children, function (e, n) {
                          return r("div", { key: n, attrs: { id: "i-" + e.id } }, [
                            r(
                              "div",
                              {
                                staticClass: "sec-c no-select",
                                on: {
                                  click: function (t) {
                                    return A.sectionClick(e);
                                  },
                                },
                              },
                              [
                                r("div", [
                                  r("p", { staticClass: "sec-c-name" }, [
                                    A._v(" " + A._s(e.sectionName) + " "),
                                    r("span", [
                                      A._v("（耗时：" + A._s(Math.ceil(e.state.duration / 60)) + "min "),
                                      r("i", { staticStyle: { margin: "10px" } }),
                                      A._v(" 本节分值：" + A._s(e.score) + "分）"),
                                    ]),
                                  ]),
                                ]),
                                r("div", { staticStyle: { "font-size": "20px" } }, [
                                  r("span", { staticStyle: { color: "#FFA613", "font-weight": "bold", "margin-right": "2px" } }, [A._v(A._s(e.state.score))]),
                                  r("span", [A._v("分")]),
                                  r("img", { class: { tran90: !e.show }, staticStyle: { margin: "0 0 2px 8px" }, attrs: { src: t("0c5c") } }),
                                ]),
                              ],
                            ),
                            r("div", { directives: [{ name: "show", rawName: "v-show", value: e.show, expression: "child.show" }] }, [
                              r("div", { staticClass: "sec-content" }, [
                                0 == e.taskType
                                  ? r(
                                      "div",
                                      A._l(e.data, function (e, t) {
                                        return r("div", { key: t }, [r("p", { staticClass: "file" }, [A._v(A._s(e))])]);
                                      }),
                                      0,
                                    )
                                  : A._e(),
                                1 == e.taskType
                                  ? r(
                                      "div",
                                      A._l(e.data, function (e, t) {
                                        return r("div", { key: e.id, staticClass: "exer" }, [
                                          r("p", { staticClass: "ques" }, [r("span", [A._v(A._s(t + 1))]), A._v(A._s(e.question))]),
                                          1 == e.type
                                            ? r("div", [
                                                r("span", { staticClass: "e-top" }, [A._v(A._s(e.score) + "分")]),
                                                r("span", { staticClass: "e-top" }, [A._v("正确答案 " + A._s("A" == e.answer ? "正确" : "错误"))]),
                                                r("p", { staticClass: "ans ans-s", class: { "stu-s": "A" == e.state.content } }, [A._v("正确")]),
                                                r("p", { staticClass: "ans ans-s", class: { "stu-s": "B" == e.state.content } }, [A._v("错误")]),
                                              ])
                                            : A._e(),
                                          2 == e.type
                                            ? r("div", [
                                                r("span", { staticClass: "e-top" }, [A._v(A._s(e.score) + "分")]),
                                                r("span", { staticClass: "e-top" }, [A._v("正确答案 " + A._s(e.answer))]),
                                                r("p", { staticClass: "ques", staticStyle: { color: "#207bf8" } }, [
                                                  A._v("学生答案：" + A._s(e.state.content)),
                                                ]),
                                              ])
                                            : A._e(),
                                          3 == e.type
                                            ? r("div", [
                                                r("span", { staticClass: "e-top" }, [A._v(A._s(e.score) + "分")]),
                                                r("span", { staticClass: "e-top" }, [A._v("正确答案 " + A._s(e.answer))]),
                                                r("p", { staticClass: "ans ans-s", class: { "stu-s": "A" == e.state.content } }, [
                                                  A._v("A：" + A._s(e.optionA)),
                                                ]),
                                                r("p", { staticClass: "ans ans-s", class: { "stu-s": "B" == e.state.content } }, [
                                                  A._v("B：" + A._s(e.optionB)),
                                                ]),
                                                r("p", { staticClass: "ans ans-s", class: { "stu-s": "C" == e.state.content } }, [
                                                  A._v("C：" + A._s(e.optionC)),
                                                ]),
                                                r("p", { staticClass: "ans ans-s", class: { "stu-s": "D" == e.state.content } }, [
                                                  A._v("D：" + A._s(e.optionD)),
                                                ]),
                                              ])
                                            : A._e(),
                                          4 == e.type
                                            ? r("div", [
                                                r("span", { staticClass: "e-top" }, [A._v(A._s(e.score) + "分")]),
                                                r("span", { staticClass: "e-top" }, [A._v("正确答案 " + A._s(e.answer))]),
                                                r("p", { staticClass: "ans ans-m", class: { "stu-m": -1 != e.state.content.indexOf("A") } }, [
                                                  A._v("A：" + A._s(e.optionA)),
                                                ]),
                                                r("p", { staticClass: "ans ans-m", class: { "stu-m": -1 != e.state.content.indexOf("B") } }, [
                                                  A._v("B：" + A._s(e.optionB)),
                                                ]),
                                                r("p", { staticClass: "ans ans-m", class: { "stu-m": -1 != e.state.content.indexOf("C") } }, [
                                                  A._v("C：" + A._s(e.optionC)),
                                                ]),
                                                r("p", { staticClass: "ans ans-m", class: { "stu-m": -1 != e.state.content.indexOf("D") } }, [
                                                  A._v("D：" + A._s(e.optionD)),
                                                ]),
                                                e.optionE
                                                  ? r("p", { staticClass: "ans ans-m", class: { "stu-m": -1 != e.state.content.indexOf("E") } }, [
                                                      A._v(" E：" + A._s(e.optionE)),
                                                    ])
                                                  : A._e(),
                                              ])
                                            : A._e(),
                                        ]);
                                      }),
                                      0,
                                    )
                                  : A._e(),
                                2 == e.taskType
                                  ? r(
                                      "div",
                                      A._l(e.data, function (e, t) {
                                        return r("div", { key: t }, [r("p", { staticClass: "file" }, [A._v(A._s(e))])]);
                                      }),
                                      0,
                                    )
                                  : A._e(),
                                3 == e.taskType
                                  ? r(
                                      "div",
                                      A._l(e.data, function (t, n) {
                                        return r("div", { key: n }, [
                                          r("p", { staticClass: "file" }, [A._v(A._s(t))]),
                                          r(
                                            "div",
                                            { staticStyle: { margin: "0 0 20px 0" } },
                                            [
                                              r(
                                                "el-table",
                                                { attrs: { data: JSON.parse(e.state.socreDetail), border: "" } },
                                                [
                                                  r("el-table-column", { attrs: { prop: "ItemName", label: "评分项", width: "100" } }),
                                                  r("el-table-column", { attrs: { prop: "Total", label: "分值", width: "60" } }),
                                                  r("el-table-column", { attrs: { prop: "Socre", label: "得分", width: "60" } }),
                                                  r("el-table-column", { attrs: { prop: "Deduct", label: "扣分", width: "60" } }),
                                                  r("el-table-column", {
                                                    attrs: { label: "扣分原因" },
                                                    scopedSlots: A._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function (e) {
                                                            return [r("pre", { staticStyle: { overflow: "auto" } }, [A._v(A._s(e.row.Remarks))])];
                                                          },
                                                        },
                                                      ],
                                                      null,
                                                      !0,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          ),
                                        ]);
                                      }),
                                      0,
                                    )
                                  : A._e(),
                                4 == e.taskType
                                  ? r("div", [r("codemark", { attrs: { actived: 4 == e.taskType, currentSection: e, taskRecord: A.record } })], 1)
                                  : A._e(),
                                5 == e.taskType
                                  ? r(
                                      "div",
                                      A._l(e.data, function (e, t) {
                                        return r("div", { key: t }, [r("p", { staticClass: "file" }, [A._v(A._s(e))])]);
                                      }),
                                      0,
                                    )
                                  : A._e(),
                              ]),
                              r("div", { staticClass: "comment" }, [
                                r("img", { attrs: { src: t("b618") } }),
                                r("p", [A._v("老师点评：" + A._s(e.state.comment))]),
                              ]),
                            ]),
                          ]);
                        }),
                      ],
                      2,
                    );
                  }),
                ],
                2,
              ),
              r("div", { staticClass: "priview" }),
              r("div", { staticClass: "fixed-r" }, [
                r("div", { staticClass: "anchor no-select" }, [
                  r("i"),
                  r("br"),
                  r(
                    "ul",
                    A._l(A.templateData.sections, function (e) {
                      return r("li", { key: e.id, staticClass: "a-p" }, [
                        r(
                          "p",
                          {
                            staticClass: "single-line",
                            class: { active1: A.active == e.id },
                            on: {
                              click: function (t) {
                                return A.jumpTo(e.id);
                              },
                            },
                          },
                          [A._v(A._s(e.sectionName))],
                        ),
                        r(
                          "ul",
                          A._l(e.children, function (e) {
                            return r("li", { key: e.id }, [
                              r(
                                "p",
                                {
                                  staticClass: "a-c single-line",
                                  class: { active2: A.active == e.id },
                                  on: {
                                    click: function (t) {
                                      return A.jumpTo(e.id);
                                    },
                                  },
                                },
                                [A._v(" " + A._s(e.sectionName) + " ")],
                              ),
                            ]);
                          }),
                          0,
                        ),
                      ]);
                    }),
                    0,
                  ),
                  r("i"),
                ]),
              ]),
            ],
            1,
          );
        },
        f = [],
        d = (t("4de4"), t("4160"), t("0d03"), t("b0c0"), t("159b"), t("96cf"), t("89ba")),
        C = t("284c"),
        h = t("f3fd"),
        F = t("03cd"),
        U = t("d82f"),
        p = t("59b9"),
        H = t("482f"),
        v = (function () {
          function A() {
            Object(a["a"])(this, A);
          }
          return (
            Object(o["a"])(A, [
              {
                key: "GetFileNamesBySectionId",
                value: (function () {
                  var A = Object(d["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (!("undefined" === typeof e || e.length < 32)) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", "");
                            case 2:
                              return (
                                (A.next = 4),
                                Object(p["a"])({ url: "".concat(H["a"].web_host, "/api/DocumentPractice/GetFileNamesBySectionId/").concat(e), method: "GET" })
                              );
                            case 4:
                              if (((t = A.sent), 0 != t.code)) {
                                A.next = 7;
                                break;
                              }
                              return A.abrupt("return", t.data);
                            case 7:
                              return A.abrupt("return", []);
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
            ]),
            A
          );
        })(),
        b = new v(),
        y = (function () {
          function A() {
            Object(a["a"])(this, A);
          }
          return (
            Object(o["a"])(A, [
              {
                key: "GetFileNamesBySectionId",
                value: (function () {
                  var A = Object(d["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (!("undefined" === typeof e || e.length < 32)) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", "");
                            case 2:
                              return (
                                (A.next = 4),
                                Object(p["a"])({ url: "".concat(H["a"].web_host, "/api/AppCasePractice/GetFileNamesBySectionId/").concat(e), method: "GET" })
                              );
                            case 4:
                              if (((t = A.sent), 0 != t.code)) {
                                A.next = 7;
                                break;
                              }
                              return A.abrupt("return", t.data);
                            case 7:
                              return A.abrupt("return", []);
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
            ]),
            A
          );
        })(),
        m = new y(),
        E = t("edf7"),
        I = t("aa5a"),
        L = t("c18d"),
        x = t("f699"),
        D = t("73ec"),
        K = t("f6d3"),
        O = t("c0e9"),
        P = t.n(O),
        T =
          ((r = (function (A) {
            function e() {
              var A, t;
              Object(a["a"])(this, e);
              for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
              return (
                (t = Object(i["a"])(this, (A = Object(B["a"])(e)).call.apply(A, [this].concat(n)))),
                Object(l["a"])(Object(c["a"])(t), "id", void 0),
                Object(l["a"])(Object(c["a"])(t), "templateData", new h["a"]("")),
                Object(l["a"])(Object(c["a"])(t), "sectionList", []),
                Object(l["a"])(Object(c["a"])(t), "links", []),
                Object(l["a"])(Object(c["a"])(t), "active", ""),
                Object(l["a"])(Object(c["a"])(t), "interval", void 0),
                Object(l["a"])(Object(c["a"])(t), "fullMark", 0),
                Object(l["a"])(Object(c["a"])(t), "record", new x["a"]()),
                Object(l["a"])(Object(c["a"])(t), "colors", ["#2D99FF", "#826AF9", "#2BD8C4", "#EC6640", "#FFA613", "#83CFFF", "#F7D2FF"]),
                Object(l["a"])(Object(c["a"])(t), "ringSettings", { radius: [66, 96], offsetY: 120 }),
                Object(l["a"])(Object(c["a"])(t), "ringExtend", {
                  color: ["#2D99FF", "#826AF9", "#2BD8C4", "#EC6640", "#FFA613", "#83CFFF", "#F7D2FF"],
                  series: { labelLine: { show: !0 } },
                  legend: { show: !1 },
                }),
                Object(l["a"])(Object(c["a"])(t), "ringData", { columns: ["名称", "耗时"], rows: [] }),
                t
              );
            }
            return (
              Object(u["a"])(e, A),
              Object(o["a"])(e, [
                {
                  key: "destroyed",
                  value: function () {
                    clearInterval(this.interval);
                  },
                },
                {
                  key: "mounted",
                  value: function () {
                    var A = this;
                    this.id &&
                      (this.handleScroll(),
                      U["a"].GetTaskRecordCompleteInfo(this.id).then(function (e) {
                        (0 === e.code &&
                          ((A.templateData = e.data.taskTemplateDto),
                          (A.record = e.data.taskRecordDto),
                          A.templateData.sections.forEach(function (e) {
                            var t;
                            (A.links.push(e.id),
                              e.children.forEach(function (e) {
                                (A.links.push(e.id), w["c"].set(e, "loaded", !1), w["c"].set(e, "show", !1));
                                var t = {};
                                (w["c"].set(e, "data", t), A.ringData.rows.push({ 名称: e.sectionName, 耗时: Math.ceil(e.state.duration / 60) }));
                              }),
                              (t = A.sectionList).push.apply(t, Object(C["a"])(e.children)));
                          })),
                          A.getFullMark());
                      }));
                  },
                },
                {
                  key: "getFullMark",
                  value: function () {
                    this.sectionList &&
                      (this.fullMark = this.sectionList.filter(function (A) {
                        return 0 != A.score && A.state.score == A.score;
                      }).length);
                  },
                },
                {
                  key: "handleScroll",
                  value: function () {
                    var A = this;
                    this.interval = setInterval(function () {
                      var e = 200,
                        t = A.active;
                      (A.links.forEach(function (r) {
                        var n = Math.abs(document.querySelector("#i-" + r).getBoundingClientRect().top + 60);
                        if (n < 100) return ((A.active = r), void (t = r));
                        n < e && ((e = n), (t = r));
                      }),
                        (A.active = t));
                    }, 1e3);
                  },
                },
                {
                  key: "jumpTo",
                  value: function (A) {
                    (document.querySelector("#i-" + A).scrollIntoView(!0), (this.active = A));
                  },
                },
                {
                  key: "sectionClick",
                  value: (function () {
                    var A = Object(d["a"])(
                      regeneratorRuntime.mark(function A(e) {
                        return regeneratorRuntime.wrap(
                          function (A) {
                            while (1)
                              switch ((A.prev = A.next)) {
                                case 0:
                                  if (e.loaded) {
                                    A.next = 27;
                                    break;
                                  }
                                  ((e.loaded = !0),
                                    (A.t0 = e.taskType),
                                    (A.next =
                                      A.t0 === F["a"].RichText
                                        ? 5
                                        : A.t0 === F["a"].Exercise
                                          ? 9
                                          : A.t0 === F["a"].Video
                                            ? 13
                                            : A.t0 === F["a"].Emulator
                                              ? 17
                                              : A.t0 === F["a"].Code
                                                ? 21
                                                : A.t0 === F["a"].AppCase
                                                  ? 22
                                                  : 26));
                                  break;
                                case 5:
                                  return ((A.next = 7), b.GetFileNamesBySectionId(e.id));
                                case 7:
                                  return ((e.data = A.sent), A.abrupt("break", 27));
                                case 9:
                                  return ((A.next = 11), L["a"].getExerciseWithState(this.record.id, e.id));
                                case 11:
                                  return ((e.data = A.sent), A.abrupt("break", 27));
                                case 13:
                                  return ((A.next = 15), E["a"].GetFileNamesBySectionId(e.id));
                                case 15:
                                  return ((e.data = A.sent), A.abrupt("break", 27));
                                case 17:
                                  return ((A.next = 19), I["b"].GetFileNamesBySectionId(e.id));
                                case 19:
                                  return ((e.data = A.sent), A.abrupt("break", 27));
                                case 21:
                                  return A.abrupt("break", 27);
                                case 22:
                                  return ((A.next = 24), m.GetFileNamesBySectionId(e.id));
                                case 24:
                                  return ((e.data = A.sent), A.abrupt("break", 27));
                                case 26:
                                  return A.abrupt("break", 27);
                                case 27:
                                  e.show = !e.show;
                                case 28:
                                case "end":
                                  return A.stop();
                              }
                          },
                          A,
                          this,
                        );
                      }),
                    );
                    function e(e) {
                      return A.apply(this, arguments);
                    }
                    return e;
                  })(),
                },
                {
                  key: "generateImages",
                  value: function () {
                    var A = this,
                      e = document.querySelector(".page"),
                      t = e.style.boxShadow;
                    ((e.style.boxShadow = "unset"),
                      (e.style.border = "1px solid rgba(0, 0, 0, 0.17)"),
                      P()(e).then(function (r) {
                        var n = r.toDataURL("image/png"),
                          s = document.createElement("img");
                        ((s.src = n), document.querySelector(".priview").appendChild(s));
                        var a = document.createElement("a");
                        ((a.href = n),
                          (a.download = "评分报告（".concat(A.record.studentName, " - ").concat(A.record.name, " - ").concat(A.record.taskNumber, "）")),
                          a.click(),
                          (e.style.boxShadow = t),
                          (e.style.border = "unset"));
                      }));
                  },
                },
              ]),
              e
            );
          })(w["c"])),
          r);
      (Object(g["a"])([Object(w["b"])(), Object(g["b"])("design:type", String)], T.prototype, "id", void 0),
        (T = Object(g["a"])(
          [
            Object(w["a"])({
              components: { codemark: K["a"] },
              filters: {
                format: function (A) {
                  return Object(D["f"])("yyyy/MM/dd", new Date(A));
                },
              },
            }),
          ],
          T,
        )));
      var X,
        G = T,
        N = G,
        k = (t("5748"), t("2877")),
        M = Object(k["a"])(N, Q, f, !1, null, "f2fa69c2", null),
        S = M.exports,
        V =
          ((X = (function (A) {
            function e() {
              var A, t;
              Object(a["a"])(this, e);
              for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
              return (
                (t = Object(i["a"])(this, (A = Object(B["a"])(e)).call.apply(A, [this].concat(n)))),
                Object(l["a"])(Object(c["a"])(t), "recordId", ""),
                t
              );
            }
            return (
              Object(u["a"])(e, A),
              Object(o["a"])(e, [
                {
                  key: "created",
                  value: function () {
                    this.recordId = this.$route.query.id;
                  },
                },
              ]),
              e
            );
          })(w["c"])),
          X);
      V = Object(g["a"])([Object(w["a"])({ components: { commentreport: S } })], V);
      var R = V,
        j = R,
        z = (t("82fd"), Object(k["a"])(j, n, s, !1, null, null, null));
      e["default"] = z.exports;
    },
    a4d3: function (A, e, t) {
      "use strict";
      var r = t("23e7"),
        n = t("da84"),
        s = t("c430"),
        a = t("83ab"),
        o = t("4930"),
        i = t("d039"),
        B = t("5135"),
        c = t("e8b5"),
        u = t("861d"),
        l = t("825a"),
        g = t("7b0b"),
        w = t("fc6a"),
        Q = t("c04e"),
        f = t("5c6c"),
        d = t("7c73"),
        C = t("df75"),
        h = t("241c"),
        F = t("057f"),
        U = t("7418"),
        p = t("06cf"),
        H = t("9bf2"),
        v = t("d1e7"),
        b = t("9112"),
        y = t("6eeb"),
        m = t("5692"),
        E = t("f772"),
        I = t("d012"),
        L = t("90e3"),
        x = t("b622"),
        D = t("c032"),
        K = t("746f"),
        O = t("d44e"),
        P = t("69f3"),
        T = t("b727").forEach,
        X = E("hidden"),
        G = "Symbol",
        N = "prototype",
        k = x("toPrimitive"),
        M = P.set,
        S = P.getterFor(G),
        V = Object[N],
        R = n.Symbol,
        j = n.JSON,
        z = j && j.stringify,
        Z = p.f,
        J = H.f,
        W = F.f,
        Y = v.f,
        q = m("symbols"),
        _ = m("op-symbols"),
        $ = m("string-to-symbol-registry"),
        AA = m("symbol-to-string-registry"),
        eA = m("wks"),
        tA = n.QObject,
        rA = !tA || !tA[N] || !tA[N].findChild,
        nA =
          a &&
          i(function () {
            return (
              7 !=
              d(
                J({}, "a", {
                  get: function () {
                    return J(this, "a", { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function (A, e, t) {
                var r = Z(V, e);
                (r && delete V[e], J(A, e, t), r && A !== V && J(V, e, r));
              }
            : J,
        sA = function (A, e) {
          var t = (q[A] = d(R[N]));
          return (M(t, { type: G, tag: A, description: e }), a || (t.description = e), t);
        },
        aA =
          o && "symbol" == typeof R.iterator
            ? function (A) {
                return "symbol" == typeof A;
              }
            : function (A) {
                return Object(A) instanceof R;
              },
        oA = function (A, e, t) {
          (A === V && oA(_, e, t), l(A));
          var r = Q(e, !0);
          return (
            l(t),
            B(q, r)
              ? (t.enumerable ? (B(A, X) && A[X][r] && (A[X][r] = !1), (t = d(t, { enumerable: f(0, !1) }))) : (B(A, X) || J(A, X, f(1, {})), (A[X][r] = !0)),
                nA(A, r, t))
              : J(A, r, t)
          );
        },
        iA = function (A, e) {
          l(A);
          var t = w(e),
            r = C(t).concat(gA(t));
          return (
            T(r, function (e) {
              (a && !cA.call(t, e)) || oA(A, e, t[e]);
            }),
            A
          );
        },
        BA = function (A, e) {
          return void 0 === e ? d(A) : iA(d(A), e);
        },
        cA = function (A) {
          var e = Q(A, !0),
            t = Y.call(this, e);
          return !(this === V && B(q, e) && !B(_, e)) && (!(t || !B(this, e) || !B(q, e) || (B(this, X) && this[X][e])) || t);
        },
        uA = function (A, e) {
          var t = w(A),
            r = Q(e, !0);
          if (t !== V || !B(q, r) || B(_, r)) {
            var n = Z(t, r);
            return (!n || !B(q, r) || (B(t, X) && t[X][r]) || (n.enumerable = !0), n);
          }
        },
        lA = function (A) {
          var e = W(w(A)),
            t = [];
          return (
            T(e, function (A) {
              B(q, A) || B(I, A) || t.push(A);
            }),
            t
          );
        },
        gA = function (A) {
          var e = A === V,
            t = W(e ? _ : w(A)),
            r = [];
          return (
            T(t, function (A) {
              !B(q, A) || (e && !B(V, A)) || r.push(q[A]);
            }),
            r
          );
        };
      (o ||
        ((R = function () {
          if (this instanceof R) throw TypeError("Symbol is not a constructor");
          var A = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = L(A),
            t = function (A) {
              (this === V && t.call(_, A), B(this, X) && B(this[X], e) && (this[X][e] = !1), nA(this, e, f(1, A)));
            };
          return (a && rA && nA(V, e, { configurable: !0, set: t }), sA(e, A));
        }),
        y(R[N], "toString", function () {
          return S(this).tag;
        }),
        (v.f = cA),
        (H.f = oA),
        (p.f = uA),
        (h.f = F.f = lA),
        (U.f = gA),
        a &&
          (J(R[N], "description", {
            configurable: !0,
            get: function () {
              return S(this).description;
            },
          }),
          s || y(V, "propertyIsEnumerable", cA, { unsafe: !0 })),
        (D.f = function (A) {
          return sA(x(A), A);
        })),
        r({ global: !0, wrap: !0, forced: !o, sham: !o }, { Symbol: R }),
        T(C(eA), function (A) {
          K(A);
        }),
        r(
          { target: G, stat: !0, forced: !o },
          {
            for: function (A) {
              var e = String(A);
              if (B($, e)) return $[e];
              var t = R(e);
              return (($[e] = t), (AA[t] = e), t);
            },
            keyFor: function (A) {
              if (!aA(A)) throw TypeError(A + " is not a symbol");
              if (B(AA, A)) return AA[A];
            },
            useSetter: function () {
              rA = !0;
            },
            useSimple: function () {
              rA = !1;
            },
          },
        ),
        r({ target: "Object", stat: !0, forced: !o, sham: !a }, { create: BA, defineProperty: oA, defineProperties: iA, getOwnPropertyDescriptor: uA }),
        r({ target: "Object", stat: !0, forced: !o }, { getOwnPropertyNames: lA, getOwnPropertySymbols: gA }),
        r(
          {
            target: "Object",
            stat: !0,
            forced: i(function () {
              U.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (A) {
              return U.f(g(A));
            },
          },
        ),
        j &&
          r(
            {
              target: "JSON",
              stat: !0,
              forced:
                !o ||
                i(function () {
                  var A = R();
                  return "[null]" != z([A]) || "{}" != z({ a: A }) || "{}" != z(Object(A));
                }),
            },
            {
              stringify: function (A) {
                var e,
                  t,
                  r = [A],
                  n = 1;
                while (arguments.length > n) r.push(arguments[n++]);
                if (((t = e = r[1]), (u(e) || void 0 !== A) && !aA(A)))
                  return (
                    c(e) ||
                      (e = function (A, e) {
                        if (("function" == typeof t && (e = t.call(this, A, e)), !aA(e))) return e;
                      }),
                    (r[1] = e),
                    z.apply(j, r)
                  );
              },
            },
          ),
        R[N][k] || b(R[N], k, R[N].valueOf),
        O(R, G),
        (I[X] = !0));
    },
    aa5a: function (A, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return w;
      });
      (t("99af"), t("4160"), t("159b"), t("96cf"));
      var r = t("89ba"),
        n = t("53fe"),
        s = t("8b83"),
        a = t("c65a"),
        o = t("9aa6"),
        i = t("c03e"),
        B = t("9f12"),
        c = t("2fa7"),
        u = t("59b9"),
        l = t("482f"),
        g = t("a0f7"),
        w = function A() {
          (Object(B["a"])(this, A),
            Object(c["a"])(this, "id", ""),
            Object(c["a"])(this, "sectionId", ""),
            Object(c["a"])(this, "packageXml", ""),
            Object(c["a"])(this, "packageXmlName", ""),
            Object(c["a"])(this, "packageXmlAnsewer", ""),
            Object(c["a"])(this, "packageXmlAnsewerName", ""),
            Object(c["a"])(this, "remark", ""),
            Object(c["a"])(this, "thumb", ""),
            Object(c["a"])(this, "emulatorId", ""));
        },
        Q = (function (A) {
          function e() {
            var A, t;
            Object(B["a"])(this, e);
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
            return (
              (t = Object(s["a"])(this, (A = Object(a["a"])(e)).call.apply(A, [this].concat(n)))),
              Object(c["a"])(Object(o["a"])(t), "pageSize", 10),
              Object(c["a"])(Object(o["a"])(t), "itemsCount", 10),
              t
            );
          }
          return (
            Object(i["a"])(e, A),
            Object(n["a"])(e, [
              {
                key: "AddOrUpdate",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function (A) {
                          while (1)
                            switch ((A.prev = A.next)) {
                              case 0:
                                return ((A.next = 2), this.WebPost("/api/EmulatorPractice/AddOrUpdateEmulatorPractice", e));
                              case 2:
                                return (
                                  (t = A.sent),
                                  (r = new g["d"]()),
                                  0 == t.code ? ((r.status = !0), (r.data = t.data)) : ((r.status = !1), (r.msg = t.msg)),
                                  A.abrupt("return", r)
                                );
                              case 6:
                              case "end":
                                return A.stop();
                            }
                        },
                        A,
                        this,
                      );
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "GetEentity",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function (A) {
                          while (1)
                            switch ((A.prev = A.next)) {
                              case 0:
                                return ((A.next = 2), this.WebGet("/api/EmulatorPractice/GetEmulatorPractice/".concat(e), {}));
                              case 2:
                                return (
                                  (t = A.sent),
                                  (r = new g["d"]()),
                                  0 == t.code ? ((r.status = !0), (r.data = t.data)) : ((r.status = !1), (r.msg = t.msg)),
                                  A.abrupt("return", r)
                                );
                              case 6:
                              case "end":
                                return A.stop();
                            }
                        },
                        A,
                        this,
                      );
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "GetByGetEmulatorPracticeBySectionId",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function (A) {
                          while (1)
                            switch ((A.prev = A.next)) {
                              case 0:
                                return ((A.next = 2), this.WebGet("/api/EmulatorPractice/GetEmulatorPracticeBySectionId/".concat(e), {}));
                              case 2:
                                return (
                                  (t = A.sent),
                                  (r = new g["d"]()),
                                  0 == t.code ? ((r.status = !0), (r.data = t.data)) : ((r.status = !1), (r.msg = t.msg)),
                                  A.abrupt("return", r)
                                );
                              case 6:
                              case "end":
                                return A.stop();
                            }
                        },
                        A,
                        this,
                      );
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "EmulatorXmlToObj",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function (A) {
                          while (1)
                            switch ((A.prev = A.next)) {
                              case 0:
                                return ((A.next = 2), this.WebPost("/api/EmulatorPractice/EmulatorXmlToObj", { xml: e }));
                              case 2:
                                return (
                                  (t = A.sent),
                                  console.log("response", t),
                                  (r = new g["d"]()),
                                  0 == t.code ? ((r.status = !0), (r.data = t.data)) : ((r.status = !1), (r.msg = t.msg)),
                                  A.abrupt("return", r)
                                );
                              case 7:
                              case "end":
                                return A.stop();
                            }
                        },
                        A,
                        this,
                      );
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "GetItemsCount",
                value: function () {
                  return this.itemsCount;
                },
              },
              {
                key: "GetPageFromStorage",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A() {
                      var e,
                        t,
                        r,
                        n,
                        s,
                        a = arguments;
                      return regeneratorRuntime.wrap(
                        function (A) {
                          while (1)
                            switch ((A.prev = A.next)) {
                              case 0:
                                return (
                                  (e = a.length > 0 && void 0 !== a[0] ? a[0] : 1),
                                  (t = a.length > 1 && void 0 !== a[1] ? a[1] : 10),
                                  (r = a.length > 2 ? a[2] : void 0),
                                  (A.next = 5),
                                  Object(u["a"])({
                                    url: "".concat(l["a"].web_host, "/api/EmulatorPractice/GetPageFromStorage"),
                                    method: "GET",
                                    params: { pageIndex: e, size: t, key: r },
                                  })
                                );
                              case 5:
                                return (
                                  (n = A.sent),
                                  (s = []),
                                  "undefined" !== typeof n &&
                                    0 === n.code &&
                                    ((this.itemsCount = n.data.records),
                                    n.data.rows.forEach(function (A) {
                                      s.push(A);
                                    })),
                                  A.abrupt("return", s)
                                );
                              case 9:
                              case "end":
                                return A.stop();
                            }
                        },
                        A,
                        this,
                      );
                    }),
                  );
                  function e() {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "AddOrUpdateEmulatorPractice",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              return (
                                (A.next = 2),
                                Object(u["a"])({
                                  url: "".concat(l["a"].web_host, "/api/EmulatorPractice/AddOrUpdateEmulatorPractice"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: e,
                                })
                              );
                            case 2:
                              return ((t = A.sent), A.abrupt("return", t));
                            case 4:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "deleteEmulatorPractice",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (!("undefined" === typeof e || e.length < 32)) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", null);
                            case 2:
                              return (
                                (A.next = 4),
                                Object(u["a"])({
                                  url: "".concat(l["a"].web_host, "/api/EmulatorPractice/DeleteEmulatorPractice/").concat(e),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                })
                              );
                            case 4:
                              return ((t = A.sent), A.abrupt("return", t));
                            case 6:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "GetFileNamesBySectionId",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (!("undefined" === typeof e || e.length < 32)) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", "");
                            case 2:
                              return (
                                (A.next = 4),
                                Object(u["a"])({ url: "".concat(l["a"].web_host, "/api/EmulatorPractice/GetFileNamesBySectionId/").concat(e), method: "GET" })
                              );
                            case 4:
                              if (((t = A.sent), 0 != t.code)) {
                                A.next = 7;
                                break;
                              }
                              return A.abrupt("return", t.data);
                            case 7:
                              return A.abrupt("return", []);
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
            ]),
            e
          );
        })(g["e"]);
      e["b"] = new Q();
    },
    b618: function (A, e) {
      A.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAM10lEQVRoQ71aeXQURRr/VfX0zGQScomQREhQEyAYs6AhRFxFJPueuqKgICAIIigiSKIglxq5VORWUAFFlENF8ETBXVkR16cQ2AcCmpAEySE5TMg9yfR0d9W+6mRiQqYzw7Hbf+RlZqq++n5V3/H7vmqCy/BwzrvoOga7OUthjPTinMdxkFAGdBLiKVBHwKsJIbmU8lNWQg9KEvYTQv641OXJxQrgnIerDGPcOn9IYzyZMU54szAzoa1/p5RwCyWZVolslSk+IIRUXowuFwyAcx7ZqGGWqrMpGuOBFyzgPC0FKAslTlmiGwIsWEEIKbkQIH6vzzmXFQ3pis4yNMaDfE0khIA0D+Ic4OJPB08zkHqbRBfZLFhDCFH9AeJLD0MG5zzW6eYfKTrrZzaBUAJwhrLiMuT+egoFp/NRXVltzA8ND0XMtT0Q16cXukZ1BQgFZ+aAZIkeDbKSBwgheb5A+ASgaHyYS2Pv6YwHexMmdrmxsQHffP419uzajbysXKiqCkopxCk0bwAYY5BlGbHxcbhrxFD87d47EBDggNnBSJTU2i10gs1CPusIRIcA3Dp/rMGtv8E4JG9CKCU48PW/8PrLr6G0uASSJLUobbaoMCVd1xERFYlp82Zg0B1DwExOgxLoDqv0hFUiG83kmQJoUp6tZ5x7HaOpClYvWIGvdu2GxeIVn6/Th6bp+PuIoXhqwSxYZJvX8ZQQ7rDSx81AeFVOmE2jqu8y23nV7ULGk/Nx6MBPoBL1qWhHA5jOMGDQTVi09iXIVrsJCOgBsjTCmzm1A+By8TgF7IipzVOORekZ2L9n3yUr79FWgBh8Vyoy1iwCZ96NQviEDTTJbie5rVG2GS1CpVPlh9wa6+fVYSnB7g8/wcrnl0KyWC5p58+frGsaZi6ei6Gj7zONUM3RaUDrENsGgEvnzzgVfZmZY1RVVGDCXWPQ4Gy4rMp7hDkCHXhvzwcI69zZq3wReANt0my7RJZ7BrToKjJsrcJydMaDvM2WJIL1y1/HBxu3gEoX57S+UDNdx5jHxuPxZ6ZB173nCYmS+mAb7enJ2C0AGlS+slHVnzbbfbfiwoOpI1BdWeVLj0v6PTQ8DO/v2wWrzbtDC1gBsrTKIZOZYiFDX0HMahVWqDMeaLb6scwjSH9oGiwXaft2uxWNjYrPPKFpGtZsfR19k5NMN0KixBlso9GCABoA3DqfVqfo60xpAiHY9OoGbH9zMwi98LApSRTDhw3Bjo/+AfG/1SqjV88eOH4ipx0gzhjGTp2ISWlTTPmTOIVONmm6VSKvGzrXu9lBt8YGmEG2WAjmPDYTh777qfnM/hyp68z4ILKyoAWM6e3oQffuEchYMA2TJj4LWbagR4+rMPrBu7HwhXUGGAGq5eHAgNtuwisbV0LTzPmS1UIPBVlpChHFSI3CSgWf7wjAlPsn4dTJLGOIh1n2jr8GkVGdkZOfj7LyCjgCAtAvIR59E/uACh7UvH5k5JVIHnA9Xlq6AUd+PgFHoB1DhgyEs6oRNtmG/d8ewtmzZQZ/Ek+vhHhs+HhThwBEPRFioxFE43xUbaP+YUeeJ05g0r0TcDq7KYcEBTmw6MU0ZJ/Jww8Hj+DOIbfi2h4xcDqd+O7HTBQUncWiueno1rULODgqa2ox/+VVCA8JQeqtAxESEoyCwt+xd//3uK5XHCaOGYn5c1fhcOYJw6Su7R2HTZ+/1yEAoUewVRpNGlR9daPK0ztida0BCCK2as08HD75MywSxZOTHgKFMJ+m7RYh9nRhEeYvWYHlC+ci0B6A6fMXYs6MKegb3xsiVBqPWJBSbN35OXLyzmDqww/i/uEzDPPzB0BTNCJrSL3C9ig6u9NfAFZZwisrn8LHe/dhRcbsFjPx6OSx2qO/ZOGjL/YiNCQYNyZeh9RbBgrba9KdtAJMKRateQMpNyRi1YubUVnj9BuATaJ7SZ2i56o6j/XHhHKzchATEYZrb4jB6BHD0De+V7NCwOHjp6C4VdycdL2hKJEkzHh2MWpq67B5zcvGhgu3OH7qN1RU1uC2lH5NMRxAfnEJVq3biOqCGmSfLkFcn55+mZBMSR6pdbFyjTHvubt5AWFCE4eOR2rPYIwcnIi09/+JtcsWIyggwBhRUFKG+ybPN3j+trUvICHuaoPorX1nOyoqK7HwmTQwTUN5VQ3ueWQOnM5GbFw2Byl9+7QEhYdnzMbq0an49MAJ7MupxebdW3z6gIXSClLtYi7GmHcy3grA3AlT8fywBCORpX/wDdYtW4zAZgDZZ4ow5okMozB5a/kcJCfGG76w9p1tOFdZiQXNAIpKyzF88jyomoaVz09H6s1NyUr4z8Nps7FqVCqga1j82Uksfe9NnwAopYr/AMZPxXPDmwAs338cI++/B317N5mQiDTv7twDl6Li0QfvgUWUkxJF+nNLUFNbj7dXvyR6Q4bj7tj9Lc6WlWP6hPthbc7qBSWlWLF2A5bcMxCq240ln57E0i1+ArgQE7o9thPuG3Qd8oMiseOrfVieMQcicxq6GTUwILi9eE6cysXWnZ8hNDgYA5NvwOCb+hs+LIp/QmhLNBIn9eKrb+LGhHgkyU58vP8Evs2r89+E6lx6rsr8dOJfc3BFsB3vblmK7V/sNUrJdmGUUvxWdBZzlyzHygXz4HDYMW3uQsxPexyJvXsaxX1LJCIE2z7+HNm5v2H21EcwbvRTKD3nvDAnrlfZHkX1HUYfHzkZ2cd/NerY1cvSMXDQALy1fSeOnfjVSE49orvB2dCIn44cxW/5RZifNgU9ul1lKFt27hwWr3oDnTuH45YBSQgJ7oSzxaXY9/2PiO4WhbTJ440kOX7SAqMx0DuxD9bvfLtDHxAB2SbTvX4lMioRvLpoJT7btsuw47vvSEHGwqeMMFj8RzkO/JiJwt+L4XAEIOkvCUjqmwCJtCV9gqgc+yUbh/5zDLV19YiK6IJbU/obIIUPrV+3BZu2fAUCgmHjRiAtYyaYSU3Q5HfNiUzT+Khad8dUQkwoLizCxKHjIEo/h92KXR+tQHiryknYtpGnPI0ekayas67ICX9+35zIWrVSGhucGDlqJirO1Rql6ubd2xAV3b2j1GT8ZlAJf8icGCzY5t5Pv8SKZ182zGjcqFSkz3rUa/3KFDfqD/wA5Uy+sZDt6hgEDboF1GZtp5QAvmXzTrz2xk4jws16cR7uHH63aa/II6CFzIkvfNHpVpOQdfwkNr/2Nk5n5WD5S9ORkNiUjFo/RvOqqgpK3hkjxttjr4EUHua1mCkqKMS09BWIjr0GE2dMRnxigk/lxVotdFp88FXQnK+gqI9VtwrN7UJQXTGstg7zoKkpuBUFzqCukGyBkK2yaR3cboPOL2j8KSnNtOCqC3L177DLktG09e/hUBQVSkgUqM20ijUV1a6kFCN9FfUdKcY5A6kphU2th8Uim5ednEFTVbgkB3hoBAi98N6S16LeCEs+2ir+7CzXNXBnFVB6Cla7A9QiG/yB6SrcrgaQLrFAYBiIRZhcx/cFZuuZtlXEBF+NLX9AEMLBcg/CXVcNXXMbUySLFdZOoaBxKTDpFfsj2oBs2thqPgW53s0Pqbr31qKvVWpdDCe/OY1BKTJs1j+LFlHAKArHtz8oSLgzDmEB/vpK2xV9thaNU/DR3PUGotHNkH2OoaJeR+G2TIwa0wURkW0bU6UlLuz48A9Ej01GWKCE3uEEnQIk0wuOdpGPktpgG73x/Fubi2qve4QL9pl/shw/n3Yi8PoocJ2jcPthXBlKMWJcJGS5aadVlWHXthKUVzNEj+0PIhHUHvsdfbrZ0Ts5yicIcdHhd3vdo5yvCw5BhIqyz+HrTT8jLCkaYf1jwHWGou2HoTndCA6V0TO+KUTmZDlRW63CEmhFdwMARdXhAlRmFuC2MdehV1KEKYiLuuBoC8L7FVN1eQM+WXMYultHWP+2APSGpgtGT6fCc1cmOeQ2AKoOFxqnMXTqDegaE9LOOi/piskjzeyS76uNR1GcV2VEQzMA7ezYCwBxkuGRQRg+oz8E6/U8l+WSzyNMOLZG+A7PNWvx6Sp8uf5oUzuR8UsCIMicoM23j+2D2H4RRqi0SvSozMmo829jvAUQn9esnkmei2435xlfvnUsqCiroqm/cxkACFO7olsnPPD0gHorIZf/ors1cpGx//1l3qwzWZVTSgpqAoX3hSfHtHFijw/4MiHhxKKQjowJccbEhW8YNCz2f/eqwfnKCAJ47IfiMflZ5Q8pV4YkSz0jiK6JKJQJ1qC1vGbw5wkC1GFB97HJkCwUek4pt5XXZPaIv3Jr379G/f9e9vBmh6IoKqvXB5fVsZTC/bm9XDVKnKtRC63+o8F43Sa0i6POHmCptofYcqMHx53q2oke7BokXfLrNprLNfS/ttxRrIPe0HMAAAAASUVORK5CYII=";
    },
    c032: function (A, e, t) {
      e.f = t("b622");
    },
    c0e9: function (A, e, t) {
      /*!
       * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
       * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
       * Released under MIT License
       */
      (function (e, t) {
        A.exports = t();
      })(0, function () {
        "use strict";
        /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var A = function (e, t) {
          return (
            (A =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (A, e) {
                  A.__proto__ = e;
                }) ||
              function (A, e) {
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t]);
              }),
            A(e, t)
          );
        };
        function e(e, t) {
          if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
          function r() {
            this.constructor = e;
          }
          (A(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
        }
        var t = function () {
          return (
            (t =
              Object.assign ||
              function (A) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                  for (var n in ((e = arguments[t]), e)) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
                return A;
              }),
            t.apply(this, arguments)
          );
        };
        function r(A, e, t, r) {
          function n(A) {
            return A instanceof t
              ? A
              : new t(function (e) {
                  e(A);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function a(A) {
              try {
                i(r.next(A));
              } catch (je) {
                s(je);
              }
            }
            function o(A) {
              try {
                i(r["throw"](A));
              } catch (je) {
                s(je);
              }
            }
            function i(A) {
              A.done ? t(A.value) : n(A.value).then(a, o);
            }
            i((r = r.apply(A, e || [])).next());
          });
        }
        function n(A, e) {
          var t,
            r,
            n,
            s,
            a = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: o(0), throw: o(1), return: o(2) }),
            "function" === typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function o(A) {
            return function (e) {
              return i([A, e]);
            };
          }
          function i(s) {
            if (t) throw new TypeError("Generator is already executing.");
            while (a)
              try {
                if (
                  ((t = 1),
                  r && (n = 2 & s[0] ? r["return"] : s[0] ? r["throw"] || ((n = r["return"]) && n.call(r), 0) : r.next) && !(n = n.call(r, s[1])).done)
                )
                  return n;
                switch (((r = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return (a.label++, { value: s[1], done: !1 });
                  case 5:
                    (a.label++, (r = s[1]), (s = [0]));
                    continue;
                  case 7:
                    ((s = a.ops.pop()), a.trys.pop());
                    continue;
                  default:
                    if (((n = a.trys), !(n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0]))) {
                      a = 0;
                      continue;
                    }
                    if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                      a.label = s[1];
                      break;
                    }
                    if (6 === s[0] && a.label < n[1]) {
                      ((a.label = n[1]), (n = s));
                      break;
                    }
                    if (n && a.label < n[2]) {
                      ((a.label = n[2]), a.ops.push(s));
                      break;
                    }
                    (n[2] && a.ops.pop(), a.trys.pop());
                    continue;
                }
                s = e.call(A, a);
              } catch (je) {
                ((s = [6, je]), (r = 0));
              } finally {
                t = n = 0;
              }
            if (5 & s[0]) throw s[1];
            return { value: s[0] ? s[1] : void 0, done: !0 };
          }
        }
        function s(A, e, t) {
          if (t || 2 === arguments.length)
            for (var r, n = 0, s = e.length; n < s; n++) (!r && n in e) || (r || (r = Array.prototype.slice.call(e, 0, n)), (r[n] = e[n]));
          return A.concat(r || e);
        }
        for (
          var a = (function () {
              function A(A, e, t, r) {
                ((this.left = A), (this.top = e), (this.width = t), (this.height = r));
              }
              return (
                (A.prototype.add = function (e, t, r, n) {
                  return new A(this.left + e, this.top + t, this.width + r, this.height + n);
                }),
                (A.fromClientRect = function (e, t) {
                  return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
                }),
                (A.fromDOMRectList = function (e, t) {
                  var r = Array.from(t).find(function (A) {
                    return 0 !== A.width;
                  });
                  return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
                }),
                (A.EMPTY = new A(0, 0, 0, 0)),
                A
              );
            })(),
            o = function (A, e) {
              return a.fromClientRect(A, e.getBoundingClientRect());
            },
            i = function (A) {
              var e = A.body,
                t = A.documentElement;
              if (!e || !t) throw new Error("Unable to get document size");
              var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)),
                n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
              return new a(0, 0, r, n);
            },
            B = function (A) {
              var e = [],
                t = 0,
                r = A.length;
              while (t < r) {
                var n = A.charCodeAt(t++);
                if (n >= 55296 && n <= 56319 && t < r) {
                  var s = A.charCodeAt(t++);
                  56320 === (64512 & s) ? e.push(((1023 & n) << 10) + (1023 & s) + 65536) : (e.push(n), t--);
                } else e.push(n);
              }
              return e;
            },
            c = function () {
              for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
              if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
              var t = A.length;
              if (!t) return "";
              var r = [],
                n = -1,
                s = "";
              while (++n < t) {
                var a = A[n];
                (a <= 65535 ? r.push(a) : ((a -= 65536), r.push(55296 + (a >> 10), (a % 1024) + 56320)),
                  (n + 1 === t || r.length > 16384) && ((s += String.fromCharCode.apply(String, r)), (r.length = 0)));
              }
              return s;
            },
            u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            l = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256),
            g = 0;
          g < u.length;
          g++
        )
          l[u.charCodeAt(g)] = g;
        for (
          var w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Q = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), f = 0;
          f < w.length;
          f++
        )
          Q[w.charCodeAt(f)] = f;
        for (
          var d = function (A) {
              var e,
                t,
                r,
                n,
                s,
                a = 0.75 * A.length,
                o = A.length,
                i = 0;
              "=" === A[A.length - 1] && (a--, "=" === A[A.length - 2] && a--);
              var B =
                  "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint8Array.prototype.slice
                    ? new ArrayBuffer(a)
                    : new Array(a),
                c = Array.isArray(B) ? B : new Uint8Array(B);
              for (e = 0; e < o; e += 4)
                ((t = Q[A.charCodeAt(e)]),
                  (r = Q[A.charCodeAt(e + 1)]),
                  (n = Q[A.charCodeAt(e + 2)]),
                  (s = Q[A.charCodeAt(e + 3)]),
                  (c[i++] = (t << 2) | (r >> 4)),
                  (c[i++] = ((15 & r) << 4) | (n >> 2)),
                  (c[i++] = ((3 & n) << 6) | (63 & s)));
              return B;
            },
            C = function (A) {
              for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push((A[r + 1] << 8) | A[r]);
              return t;
            },
            h = function (A) {
              for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
              return t;
            },
            F = 5,
            U = 11,
            p = 2,
            H = U - F,
            v = 65536 >> F,
            b = 1 << F,
            y = b - 1,
            m = 1024 >> F,
            E = v + m,
            I = E,
            L = 32,
            x = I + L,
            D = 65536 >> U,
            K = 1 << H,
            O = K - 1,
            P = function (A, e, t) {
              return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
            },
            T = function (A, e, t) {
              return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
            },
            X = function (A, e) {
              var t = d(A),
                r = Array.isArray(t) ? h(t) : new Uint32Array(t),
                n = Array.isArray(t) ? C(t) : new Uint16Array(t),
                s = 24,
                a = P(n, s / 2, r[4] / 2),
                o = 2 === r[5] ? P(n, (s + r[4]) / 2) : T(r, Math.ceil((s + r[4]) / 4));
              return new G(r[0], r[1], r[2], r[3], a, o);
            },
            G = (function () {
              function A(A, e, t, r, n, s) {
                ((this.initialValue = A), (this.errorValue = e), (this.highStart = t), (this.highValueIndex = r), (this.index = n), (this.data = s));
              }
              return (
                (A.prototype.get = function (A) {
                  var e;
                  if (A >= 0) {
                    if (A < 55296 || (A > 56319 && A <= 65535)) return ((e = this.index[A >> F]), (e = (e << p) + (A & y)), this.data[e]);
                    if (A <= 65535) return ((e = this.index[v + ((A - 55296) >> F)]), (e = (e << p) + (A & y)), this.data[e]);
                    if (A < this.highStart)
                      return ((e = x - D + (A >> U)), (e = this.index[e]), (e += (A >> F) & O), (e = this.index[e]), (e = (e << p) + (A & y)), this.data[e]);
                    if (A <= 1114111) return this.data[this.highValueIndex];
                  }
                  return this.errorValue;
                }),
                A
              );
            })(),
            N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            k = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256),
            M = 0;
          M < N.length;
          M++
        )
          k[N.charCodeAt(M)] = M;
        var S =
            "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
          V = 50,
          R = 1,
          j = 2,
          z = 3,
          Z = 4,
          J = 5,
          W = 7,
          Y = 8,
          q = 9,
          _ = 10,
          $ = 11,
          AA = 12,
          eA = 13,
          tA = 14,
          rA = 15,
          nA = 16,
          sA = 17,
          aA = 18,
          oA = 19,
          iA = 20,
          BA = 21,
          cA = 22,
          uA = 23,
          lA = 24,
          gA = 25,
          wA = 26,
          QA = 27,
          fA = 28,
          dA = 29,
          CA = 30,
          hA = 31,
          FA = 32,
          UA = 33,
          pA = 34,
          HA = 35,
          vA = 36,
          bA = 37,
          yA = 38,
          mA = 39,
          EA = 40,
          IA = 41,
          LA = 42,
          xA = 43,
          DA = [9001, 65288],
          KA = "!",
          OA = "×",
          PA = "÷",
          TA = X(S),
          XA = [CA, vA],
          GA = [R, j, z, J],
          NA = [_, Y],
          kA = [QA, wA],
          MA = GA.concat(NA),
          SA = [yA, mA, EA, pA, HA],
          VA = [rA, eA],
          RA = function (A, e) {
            void 0 === e && (e = "strict");
            var t = [],
              r = [],
              n = [];
            return (
              A.forEach(function (A, s) {
                var a = TA.get(A);
                if (
                  (a > V ? (n.push(!0), (a -= V)) : n.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A))
                )
                  return (r.push(s), t.push(nA));
                if (a === Z || a === $) {
                  if (0 === s) return (r.push(s), t.push(CA));
                  var o = t[s - 1];
                  return -1 === MA.indexOf(o) ? (r.push(r[s - 1]), t.push(o)) : (r.push(s), t.push(CA));
                }
                return (
                  r.push(s),
                  a === hA
                    ? t.push("strict" === e ? BA : bA)
                    : a === LA
                      ? t.push(CA)
                      : a === dA
                        ? t.push(CA)
                        : a === xA
                          ? (A >= 131072 && A <= 196605) || (A >= 196608 && A <= 262141)
                            ? t.push(bA)
                            : t.push(CA)
                          : void t.push(a)
                );
              }),
              [r, t, n]
            );
          },
          jA = function (A, e, t, r) {
            var n = r[t];
            if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n) {
              var s = t;
              while (s <= r.length) {
                s++;
                var a = r[s];
                if (a === e) return !0;
                if (a !== _) break;
              }
            }
            if (n === _) {
              s = t;
              while (s > 0) {
                s--;
                var o = r[s];
                if (Array.isArray(A) ? -1 !== A.indexOf(o) : A === o) {
                  var i = t;
                  while (i <= r.length) {
                    i++;
                    a = r[i];
                    if (a === e) return !0;
                    if (a !== _) break;
                  }
                }
                if (o !== _) break;
              }
            }
            return !1;
          },
          zA = function (A, e) {
            var t = A;
            while (t >= 0) {
              var r = e[t];
              if (r !== _) return r;
              t--;
            }
            return 0;
          },
          ZA = function (A, e, t, r, n) {
            if (0 === t[r]) return OA;
            var s = r - 1;
            if (Array.isArray(n) && !0 === n[s]) return OA;
            var a = s - 1,
              o = s + 1,
              i = e[s],
              B = a >= 0 ? e[a] : 0,
              c = e[o];
            if (i === j && c === z) return OA;
            if (-1 !== GA.indexOf(i)) return KA;
            if (-1 !== GA.indexOf(c)) return OA;
            if (-1 !== NA.indexOf(c)) return OA;
            if (zA(s, e) === Y) return PA;
            if (TA.get(A[s]) === $) return OA;
            if ((i === FA || i === UA) && TA.get(A[o]) === $) return OA;
            if (i === W || c === W) return OA;
            if (i === q) return OA;
            if (-1 === [_, eA, rA].indexOf(i) && c === q) return OA;
            if (-1 !== [sA, aA, oA, lA, fA].indexOf(c)) return OA;
            if (zA(s, e) === cA) return OA;
            if (jA(uA, cA, s, e)) return OA;
            if (jA([sA, aA], BA, s, e)) return OA;
            if (jA(AA, AA, s, e)) return OA;
            if (i === _) return PA;
            if (i === uA || c === uA) return OA;
            if (c === nA || i === nA) return PA;
            if (-1 !== [eA, rA, BA].indexOf(c) || i === tA) return OA;
            if (B === vA && -1 !== VA.indexOf(i)) return OA;
            if (i === fA && c === vA) return OA;
            if (c === iA) return OA;
            if ((-1 !== XA.indexOf(c) && i === gA) || (-1 !== XA.indexOf(i) && c === gA)) return OA;
            if ((i === QA && -1 !== [bA, FA, UA].indexOf(c)) || (-1 !== [bA, FA, UA].indexOf(i) && c === wA)) return OA;
            if ((-1 !== XA.indexOf(i) && -1 !== kA.indexOf(c)) || (-1 !== kA.indexOf(i) && -1 !== XA.indexOf(c))) return OA;
            if (
              (-1 !== [QA, wA].indexOf(i) && (c === gA || (-1 !== [cA, rA].indexOf(c) && e[o + 1] === gA))) ||
              (-1 !== [cA, rA].indexOf(i) && c === gA) ||
              (i === gA && -1 !== [gA, fA, lA].indexOf(c))
            )
              return OA;
            if (-1 !== [gA, fA, lA, sA, aA].indexOf(c)) {
              var u = s;
              while (u >= 0) {
                var l = e[u];
                if (l === gA) return OA;
                if (-1 === [fA, lA].indexOf(l)) break;
                u--;
              }
            }
            if (-1 !== [QA, wA].indexOf(c)) {
              u = -1 !== [sA, aA].indexOf(i) ? a : s;
              while (u >= 0) {
                l = e[u];
                if (l === gA) return OA;
                if (-1 === [fA, lA].indexOf(l)) break;
                u--;
              }
            }
            if (
              (yA === i && -1 !== [yA, mA, pA, HA].indexOf(c)) ||
              (-1 !== [mA, pA].indexOf(i) && -1 !== [mA, EA].indexOf(c)) ||
              (-1 !== [EA, HA].indexOf(i) && c === EA)
            )
              return OA;
            if ((-1 !== SA.indexOf(i) && -1 !== [iA, wA].indexOf(c)) || (-1 !== SA.indexOf(c) && i === QA)) return OA;
            if (-1 !== XA.indexOf(i) && -1 !== XA.indexOf(c)) return OA;
            if (i === lA && -1 !== XA.indexOf(c)) return OA;
            if ((-1 !== XA.concat(gA).indexOf(i) && c === cA && -1 === DA.indexOf(A[o])) || (-1 !== XA.concat(gA).indexOf(c) && i === aA)) return OA;
            if (i === IA && c === IA) {
              var g = t[s],
                w = 1;
              while (g > 0) {
                if ((g--, e[g] !== IA)) break;
                w++;
              }
              if (w % 2 !== 0) return OA;
            }
            return i === FA && c === UA ? OA : PA;
          },
          JA = function (A, e) {
            e || (e = { lineBreak: "normal", wordBreak: "normal" });
            var t = RA(A, e.lineBreak),
              r = t[0],
              n = t[1],
              s = t[2];
            ("break-all" !== e.wordBreak && "break-word" !== e.wordBreak) ||
              (n = n.map(function (A) {
                return -1 !== [gA, CA, LA].indexOf(A) ? bA : A;
              }));
            var a =
              "keep-all" === e.wordBreak
                ? s.map(function (e, t) {
                    return e && A[t] >= 19968 && A[t] <= 40959;
                  })
                : void 0;
            return [r, n, a];
          },
          WA = (function () {
            function A(A, e, t, r) {
              ((this.codePoints = A), (this.required = e === KA), (this.start = t), (this.end = r));
            }
            return (
              (A.prototype.slice = function () {
                return c.apply(void 0, this.codePoints.slice(this.start, this.end));
              }),
              A
            );
          })(),
          YA = function (A, e) {
            var t = B(A),
              r = JA(t, e),
              n = r[0],
              s = r[1],
              a = r[2],
              o = t.length,
              i = 0,
              c = 0;
            return {
              next: function () {
                if (c >= o) return { done: !0, value: null };
                var A = OA;
                while (c < o && (A = ZA(t, s, n, ++c, a)) === OA);
                if (A !== OA || c === o) {
                  var e = new WA(t, A, i, c);
                  return ((i = c), { value: e, done: !1 });
                }
                return { done: !0, value: null };
              },
            };
          },
          qA = 1,
          _A = 2,
          $A = 4,
          Ae = 8,
          ee = 10,
          te = 47,
          re = 92,
          ne = 9,
          se = 32,
          ae = 34,
          oe = 61,
          ie = 35,
          Be = 36,
          ce = 37,
          ue = 39,
          le = 40,
          ge = 41,
          we = 95,
          Qe = 45,
          fe = 33,
          de = 60,
          Ce = 62,
          he = 64,
          Fe = 91,
          Ue = 93,
          pe = 61,
          He = 123,
          ve = 63,
          be = 125,
          ye = 124,
          me = 126,
          Ee = 128,
          Ie = 65533,
          Le = 42,
          xe = 43,
          De = 44,
          Ke = 58,
          Oe = 59,
          Pe = 46,
          Te = 0,
          Xe = 8,
          Ge = 11,
          Ne = 14,
          ke = 31,
          Me = 127,
          Se = -1,
          Ve = 48,
          Re = 97,
          je = 101,
          ze = 102,
          Ze = 117,
          Je = 122,
          We = 65,
          Ye = 69,
          qe = 70,
          _e = 85,
          $e = 90,
          At = function (A) {
            return A >= Ve && A <= 57;
          },
          et = function (A) {
            return A >= 55296 && A <= 57343;
          },
          tt = function (A) {
            return At(A) || (A >= We && A <= qe) || (A >= Re && A <= ze);
          },
          rt = function (A) {
            return A >= Re && A <= Je;
          },
          nt = function (A) {
            return A >= We && A <= $e;
          },
          st = function (A) {
            return rt(A) || nt(A);
          },
          at = function (A) {
            return A >= Ee;
          },
          ot = function (A) {
            return A === ee || A === ne || A === se;
          },
          it = function (A) {
            return st(A) || at(A) || A === we;
          },
          Bt = function (A) {
            return it(A) || At(A) || A === Qe;
          },
          ct = function (A) {
            return (A >= Te && A <= Xe) || A === Ge || (A >= Ne && A <= ke) || A === Me;
          },
          ut = function (A, e) {
            return A === re && e !== ee;
          },
          lt = function (A, e, t) {
            return A === Qe ? it(e) || ut(e, t) : !!it(A) || !(A !== re || !ut(A, e));
          },
          gt = function (A, e, t) {
            return A === xe || A === Qe ? !!At(e) || (e === Pe && At(t)) : At(A === Pe ? e : A);
          },
          wt = function (A) {
            var e = 0,
              t = 1;
            (A[e] !== xe && A[e] !== Qe) || (A[e] === Qe && (t = -1), e++);
            var r = [];
            while (At(A[e])) r.push(A[e++]);
            var n = r.length ? parseInt(c.apply(void 0, r), 10) : 0;
            A[e] === Pe && e++;
            var s = [];
            while (At(A[e])) s.push(A[e++]);
            var a = s.length,
              o = a ? parseInt(c.apply(void 0, s), 10) : 0;
            (A[e] !== Ye && A[e] !== je) || e++;
            var i = 1;
            (A[e] !== xe && A[e] !== Qe) || (A[e] === Qe && (i = -1), e++);
            var B = [];
            while (At(A[e])) B.push(A[e++]);
            var u = B.length ? parseInt(c.apply(void 0, B), 10) : 0;
            return t * (n + o * Math.pow(10, -a)) * Math.pow(10, i * u);
          },
          Qt = { type: 2 },
          ft = { type: 3 },
          dt = { type: 4 },
          Ct = { type: 13 },
          ht = { type: 8 },
          Ft = { type: 21 },
          Ut = { type: 9 },
          pt = { type: 10 },
          Ht = { type: 11 },
          vt = { type: 12 },
          bt = { type: 14 },
          yt = { type: 23 },
          mt = { type: 1 },
          Et = { type: 25 },
          It = { type: 24 },
          Lt = { type: 26 },
          xt = { type: 27 },
          Dt = { type: 28 },
          Kt = { type: 29 },
          Ot = { type: 31 },
          Pt = { type: 32 },
          Tt = (function () {
            function A() {
              this._value = [];
            }
            return (
              (A.prototype.write = function (A) {
                this._value = this._value.concat(B(A));
              }),
              (A.prototype.read = function () {
                var A = [],
                  e = this.consumeToken();
                while (e !== Pt) (A.push(e), (e = this.consumeToken()));
                return A;
              }),
              (A.prototype.consumeToken = function () {
                var A = this.consumeCodePoint();
                switch (A) {
                  case ae:
                    return this.consumeStringToken(ae);
                  case ie:
                    var e = this.peekCodePoint(0),
                      t = this.peekCodePoint(1),
                      r = this.peekCodePoint(2);
                    if (Bt(e) || ut(t, r)) {
                      var n = lt(e, t, r) ? _A : qA,
                        s = this.consumeName();
                      return { type: 5, value: s, flags: n };
                    }
                    break;
                  case Be:
                    if (this.peekCodePoint(0) === oe) return (this.consumeCodePoint(), Ct);
                    break;
                  case ue:
                    return this.consumeStringToken(ue);
                  case le:
                    return Qt;
                  case ge:
                    return ft;
                  case Le:
                    if (this.peekCodePoint(0) === oe) return (this.consumeCodePoint(), bt);
                    break;
                  case xe:
                    if (gt(A, this.peekCodePoint(0), this.peekCodePoint(1))) return (this.reconsumeCodePoint(A), this.consumeNumericToken());
                    break;
                  case De:
                    return dt;
                  case Qe:
                    var a = A,
                      o = this.peekCodePoint(0),
                      i = this.peekCodePoint(1);
                    if (gt(a, o, i)) return (this.reconsumeCodePoint(A), this.consumeNumericToken());
                    if (lt(a, o, i)) return (this.reconsumeCodePoint(A), this.consumeIdentLikeToken());
                    if (o === Qe && i === Ce) return (this.consumeCodePoint(), this.consumeCodePoint(), It);
                    break;
                  case Pe:
                    if (gt(A, this.peekCodePoint(0), this.peekCodePoint(1))) return (this.reconsumeCodePoint(A), this.consumeNumericToken());
                    break;
                  case te:
                    if (this.peekCodePoint(0) === Le) {
                      this.consumeCodePoint();
                      while (1) {
                        var B = this.consumeCodePoint();
                        if (B === Le && ((B = this.consumeCodePoint()), B === te)) return this.consumeToken();
                        if (B === Se) return this.consumeToken();
                      }
                    }
                    break;
                  case Ke:
                    return Lt;
                  case Oe:
                    return xt;
                  case de:
                    if (this.peekCodePoint(0) === fe && this.peekCodePoint(1) === Qe && this.peekCodePoint(2) === Qe)
                      return (this.consumeCodePoint(), this.consumeCodePoint(), Et);
                    break;
                  case he:
                    var u = this.peekCodePoint(0),
                      l = this.peekCodePoint(1),
                      g = this.peekCodePoint(2);
                    if (lt(u, l, g)) {
                      s = this.consumeName();
                      return { type: 7, value: s };
                    }
                    break;
                  case Fe:
                    return Dt;
                  case re:
                    if (ut(A, this.peekCodePoint(0))) return (this.reconsumeCodePoint(A), this.consumeIdentLikeToken());
                    break;
                  case Ue:
                    return Kt;
                  case pe:
                    if (this.peekCodePoint(0) === oe) return (this.consumeCodePoint(), ht);
                    break;
                  case He:
                    return Ht;
                  case be:
                    return vt;
                  case Ze:
                  case _e:
                    var w = this.peekCodePoint(0),
                      Q = this.peekCodePoint(1);
                    return (
                      w !== xe || (!tt(Q) && Q !== ve) || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
                      this.reconsumeCodePoint(A),
                      this.consumeIdentLikeToken()
                    );
                  case ye:
                    if (this.peekCodePoint(0) === oe) return (this.consumeCodePoint(), Ut);
                    if (this.peekCodePoint(0) === ye) return (this.consumeCodePoint(), Ft);
                    break;
                  case me:
                    if (this.peekCodePoint(0) === oe) return (this.consumeCodePoint(), pt);
                    break;
                  case Se:
                    return Pt;
                }
                return ot(A)
                  ? (this.consumeWhiteSpace(), Ot)
                  : At(A)
                    ? (this.reconsumeCodePoint(A), this.consumeNumericToken())
                    : it(A)
                      ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken())
                      : { type: 6, value: c(A) };
              }),
              (A.prototype.consumeCodePoint = function () {
                var A = this._value.shift();
                return "undefined" === typeof A ? -1 : A;
              }),
              (A.prototype.reconsumeCodePoint = function (A) {
                this._value.unshift(A);
              }),
              (A.prototype.peekCodePoint = function (A) {
                return A >= this._value.length ? -1 : this._value[A];
              }),
              (A.prototype.consumeUnicodeRangeToken = function () {
                var A = [],
                  e = this.consumeCodePoint();
                while (tt(e) && A.length < 6) (A.push(e), (e = this.consumeCodePoint()));
                var t = !1;
                while (e === ve && A.length < 6) (A.push(e), (e = this.consumeCodePoint()), (t = !0));
                if (t) {
                  var r = parseInt(
                      c.apply(
                        void 0,
                        A.map(function (A) {
                          return A === ve ? Ve : A;
                        }),
                      ),
                      16,
                    ),
                    n = parseInt(
                      c.apply(
                        void 0,
                        A.map(function (A) {
                          return A === ve ? qe : A;
                        }),
                      ),
                      16,
                    );
                  return { type: 30, start: r, end: n };
                }
                var s = parseInt(c.apply(void 0, A), 16);
                if (this.peekCodePoint(0) === Qe && tt(this.peekCodePoint(1))) {
                  (this.consumeCodePoint(), (e = this.consumeCodePoint()));
                  var a = [];
                  while (tt(e) && a.length < 6) (a.push(e), (e = this.consumeCodePoint()));
                  n = parseInt(c.apply(void 0, a), 16);
                  return { type: 30, start: s, end: n };
                }
                return { type: 30, start: s, end: s };
              }),
              (A.prototype.consumeIdentLikeToken = function () {
                var A = this.consumeName();
                return "url" === A.toLowerCase() && this.peekCodePoint(0) === le
                  ? (this.consumeCodePoint(), this.consumeUrlToken())
                  : this.peekCodePoint(0) === le
                    ? (this.consumeCodePoint(), { type: 19, value: A })
                    : { type: 20, value: A };
              }),
              (A.prototype.consumeUrlToken = function () {
                var A = [];
                if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === Se)) return { type: 22, value: "" };
                var e = this.peekCodePoint(0);
                if (e === ue || e === ae) {
                  var t = this.consumeStringToken(this.consumeCodePoint());
                  return 0 === t.type && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Se || this.peekCodePoint(0) === ge)
                    ? (this.consumeCodePoint(), { type: 22, value: t.value })
                    : (this.consumeBadUrlRemnants(), yt);
                }
                while (1) {
                  var r = this.consumeCodePoint();
                  if (r === Se || r === ge) return { type: 22, value: c.apply(void 0, A) };
                  if (ot(r))
                    return (
                      this.consumeWhiteSpace(),
                      this.peekCodePoint(0) === Se || this.peekCodePoint(0) === ge
                        ? (this.consumeCodePoint(), { type: 22, value: c.apply(void 0, A) })
                        : (this.consumeBadUrlRemnants(), yt)
                    );
                  if (r === ae || r === ue || r === le || ct(r)) return (this.consumeBadUrlRemnants(), yt);
                  if (r === re) {
                    if (!ut(r, this.peekCodePoint(0))) return (this.consumeBadUrlRemnants(), yt);
                    A.push(this.consumeEscapedCodePoint());
                  } else A.push(r);
                }
              }),
              (A.prototype.consumeWhiteSpace = function () {
                while (ot(this.peekCodePoint(0))) this.consumeCodePoint();
              }),
              (A.prototype.consumeBadUrlRemnants = function () {
                while (1) {
                  var A = this.consumeCodePoint();
                  if (A === ge || A === Se) return;
                  ut(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
                }
              }),
              (A.prototype.consumeStringSlice = function (A) {
                var e = 5e4,
                  t = "";
                while (A > 0) {
                  var r = Math.min(e, A);
                  ((t += c.apply(void 0, this._value.splice(0, r))), (A -= r));
                }
                return (this._value.shift(), t);
              }),
              (A.prototype.consumeStringToken = function (A) {
                var e = "",
                  t = 0;
                do {
                  var r = this._value[t];
                  if (r === Se || void 0 === r || r === A) return ((e += this.consumeStringSlice(t)), { type: 0, value: e });
                  if (r === ee) return (this._value.splice(0, t), mt);
                  if (r === re) {
                    var n = this._value[t + 1];
                    n !== Se &&
                      void 0 !== n &&
                      (n === ee
                        ? ((e += this.consumeStringSlice(t)), (t = -1), this._value.shift())
                        : ut(r, n) && ((e += this.consumeStringSlice(t)), (e += c(this.consumeEscapedCodePoint())), (t = -1)));
                  }
                  t++;
                } while (1);
              }),
              (A.prototype.consumeNumber = function () {
                var A = [],
                  e = $A,
                  t = this.peekCodePoint(0);
                (t !== xe && t !== Qe) || A.push(this.consumeCodePoint());
                while (At(this.peekCodePoint(0))) A.push(this.consumeCodePoint());
                t = this.peekCodePoint(0);
                var r = this.peekCodePoint(1);
                if (t === Pe && At(r)) {
                  (A.push(this.consumeCodePoint(), this.consumeCodePoint()), (e = Ae));
                  while (At(this.peekCodePoint(0))) A.push(this.consumeCodePoint());
                }
                ((t = this.peekCodePoint(0)), (r = this.peekCodePoint(1)));
                var n = this.peekCodePoint(2);
                if ((t === Ye || t === je) && (((r === xe || r === Qe) && At(n)) || At(r))) {
                  (A.push(this.consumeCodePoint(), this.consumeCodePoint()), (e = Ae));
                  while (At(this.peekCodePoint(0))) A.push(this.consumeCodePoint());
                }
                return [wt(A), e];
              }),
              (A.prototype.consumeNumericToken = function () {
                var A = this.consumeNumber(),
                  e = A[0],
                  t = A[1],
                  r = this.peekCodePoint(0),
                  n = this.peekCodePoint(1),
                  s = this.peekCodePoint(2);
                if (lt(r, n, s)) {
                  var a = this.consumeName();
                  return { type: 15, number: e, flags: t, unit: a };
                }
                return r === ce ? (this.consumeCodePoint(), { type: 16, number: e, flags: t }) : { type: 17, number: e, flags: t };
              }),
              (A.prototype.consumeEscapedCodePoint = function () {
                var A = this.consumeCodePoint();
                if (tt(A)) {
                  var e = c(A);
                  while (tt(this.peekCodePoint(0)) && e.length < 6) e += c(this.consumeCodePoint());
                  ot(this.peekCodePoint(0)) && this.consumeCodePoint();
                  var t = parseInt(e, 16);
                  return 0 === t || et(t) || t > 1114111 ? Ie : t;
                }
                return A === Se ? Ie : A;
              }),
              (A.prototype.consumeName = function () {
                var A = "";
                while (1) {
                  var e = this.consumeCodePoint();
                  if (Bt(e)) A += c(e);
                  else {
                    if (!ut(e, this.peekCodePoint(0))) return (this.reconsumeCodePoint(e), A);
                    A += c(this.consumeEscapedCodePoint());
                  }
                }
              }),
              A
            );
          })(),
          Xt = (function () {
            function A(A) {
              this._tokens = A;
            }
            return (
              (A.create = function (e) {
                var t = new Tt();
                return (t.write(e), new A(t.read()));
              }),
              (A.parseValue = function (e) {
                return A.create(e).parseComponentValue();
              }),
              (A.parseValues = function (e) {
                return A.create(e).parseComponentValues();
              }),
              (A.prototype.parseComponentValue = function () {
                var A = this.consumeToken();
                while (31 === A.type) A = this.consumeToken();
                if (32 === A.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                this.reconsumeToken(A);
                var e = this.consumeComponentValue();
                do {
                  A = this.consumeToken();
                } while (31 === A.type);
                if (32 === A.type) return e;
                throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
              }),
              (A.prototype.parseComponentValues = function () {
                var A = [];
                while (1) {
                  var e = this.consumeComponentValue();
                  if (32 === e.type) return A;
                  (A.push(e), A.push());
                }
              }),
              (A.prototype.consumeComponentValue = function () {
                var A = this.consumeToken();
                switch (A.type) {
                  case 11:
                  case 28:
                  case 2:
                    return this.consumeSimpleBlock(A.type);
                  case 19:
                    return this.consumeFunction(A);
                }
                return A;
              }),
              (A.prototype.consumeSimpleBlock = function (A) {
                var e = { type: A, values: [] },
                  t = this.consumeToken();
                while (1) {
                  if (32 === t.type || zt(t, A)) return e;
                  (this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), (t = this.consumeToken()));
                }
              }),
              (A.prototype.consumeFunction = function (A) {
                var e = { name: A.value, values: [], type: 18 };
                while (1) {
                  var t = this.consumeToken();
                  if (32 === t.type || 3 === t.type) return e;
                  (this.reconsumeToken(t), e.values.push(this.consumeComponentValue()));
                }
              }),
              (A.prototype.consumeToken = function () {
                var A = this._tokens.shift();
                return "undefined" === typeof A ? Pt : A;
              }),
              (A.prototype.reconsumeToken = function (A) {
                this._tokens.unshift(A);
              }),
              A
            );
          })(),
          Gt = function (A) {
            return 15 === A.type;
          },
          Nt = function (A) {
            return 17 === A.type;
          },
          kt = function (A) {
            return 20 === A.type;
          },
          Mt = function (A) {
            return 0 === A.type;
          },
          St = function (A, e) {
            return kt(A) && A.value === e;
          },
          Vt = function (A) {
            return 31 !== A.type;
          },
          Rt = function (A) {
            return 31 !== A.type && 4 !== A.type;
          },
          jt = function (A) {
            var e = [],
              t = [];
            return (
              A.forEach(function (A) {
                if (4 === A.type) {
                  if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
                  return (e.push(t), void (t = []));
                }
                31 !== A.type && t.push(A);
              }),
              t.length && e.push(t),
              e
            );
          },
          zt = function (A, e) {
            return (11 === e && 12 === A.type) || (28 === e && 29 === A.type) || (2 === e && 3 === A.type);
          },
          Zt = function (A) {
            return 17 === A.type || 15 === A.type;
          },
          Jt = function (A) {
            return 16 === A.type || Zt(A);
          },
          Wt = function (A) {
            return A.length > 1 ? [A[0], A[1]] : [A[0]];
          },
          Yt = { type: 17, number: 0, flags: $A },
          qt = { type: 16, number: 50, flags: $A },
          _t = { type: 16, number: 100, flags: $A },
          $t = function (A, e, t) {
            var r = A[0],
              n = A[1];
            return [Ar(r, e), Ar("undefined" !== typeof n ? n : r, t)];
          },
          Ar = function (A, e) {
            if (16 === A.type) return (A.number / 100) * e;
            if (Gt(A))
              switch (A.unit) {
                case "rem":
                case "em":
                  return 16 * A.number;
                case "px":
                default:
                  return A.number;
              }
            return A.number;
          },
          er = "deg",
          tr = "grad",
          rr = "rad",
          nr = "turn",
          sr = {
            name: "angle",
            parse: function (A, e) {
              if (15 === e.type)
                switch (e.unit) {
                  case er:
                    return (Math.PI * e.number) / 180;
                  case tr:
                    return (Math.PI / 200) * e.number;
                  case rr:
                    return e.number;
                  case nr:
                    return 2 * Math.PI * e.number;
                }
              throw new Error("Unsupported angle type");
            },
          },
          ar = function (A) {
            return 15 === A.type && (A.unit === er || A.unit === tr || A.unit === rr || A.unit === nr);
          },
          or = function (A) {
            var e = A.filter(kt)
              .map(function (A) {
                return A.value;
              })
              .join(" ");
            switch (e) {
              case "to bottom right":
              case "to right bottom":
              case "left top":
              case "top left":
                return [Yt, Yt];
              case "to top":
              case "bottom":
                return ir(0);
              case "to bottom left":
              case "to left bottom":
              case "right top":
              case "top right":
                return [Yt, _t];
              case "to right":
              case "left":
                return ir(90);
              case "to top left":
              case "to left top":
              case "right bottom":
              case "bottom right":
                return [_t, _t];
              case "to bottom":
              case "top":
                return ir(180);
              case "to top right":
              case "to right top":
              case "left bottom":
              case "bottom left":
                return [_t, Yt];
              case "to left":
              case "right":
                return ir(270);
            }
            return 0;
          },
          ir = function (A) {
            return (Math.PI * A) / 180;
          },
          Br = {
            name: "color",
            parse: function (A, e) {
              if (18 === e.type) {
                var t = dr[e.name];
                if ("undefined" === typeof t) throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
                return t(A, e.values);
              }
              if (5 === e.type) {
                if (3 === e.value.length) {
                  var r = e.value.substring(0, 1),
                    n = e.value.substring(1, 2),
                    s = e.value.substring(2, 3);
                  return lr(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
                }
                if (4 === e.value.length) {
                  ((r = e.value.substring(0, 1)), (n = e.value.substring(1, 2)), (s = e.value.substring(2, 3)));
                  var a = e.value.substring(3, 4);
                  return lr(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(a + a, 16) / 255);
                }
                if (6 === e.value.length) {
                  ((r = e.value.substring(0, 2)), (n = e.value.substring(2, 4)), (s = e.value.substring(4, 6)));
                  return lr(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
                }
                if (8 === e.value.length) {
                  ((r = e.value.substring(0, 2)), (n = e.value.substring(2, 4)), (s = e.value.substring(4, 6)), (a = e.value.substring(6, 8)));
                  return lr(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(a, 16) / 255);
                }
              }
              if (20 === e.type) {
                var o = hr[e.value.toUpperCase()];
                if ("undefined" !== typeof o) return o;
              }
              return hr.TRANSPARENT;
            },
          },
          cr = function (A) {
            return 0 === (255 & A);
          },
          ur = function (A) {
            var e = 255 & A,
              t = 255 & (A >> 8),
              r = 255 & (A >> 16),
              n = 255 & (A >> 24);
            return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
          },
          lr = function (A, e, t, r) {
            return ((A << 24) | (e << 16) | (t << 8) | (Math.round(255 * r) << 0)) >>> 0;
          },
          gr = function (A, e) {
            if (17 === A.type) return A.number;
            if (16 === A.type) {
              var t = 3 === e ? 1 : 255;
              return 3 === e ? (A.number / 100) * t : Math.round((A.number / 100) * t);
            }
            return 0;
          },
          wr = function (A, e) {
            var t = e.filter(Rt);
            if (3 === t.length) {
              var r = t.map(gr),
                n = r[0],
                s = r[1],
                a = r[2];
              return lr(n, s, a, 1);
            }
            if (4 === t.length) {
              var o = t.map(gr),
                i = ((n = o[0]), (s = o[1]), (a = o[2]), o[3]);
              return lr(n, s, a, i);
            }
            return 0;
          };
        function Qr(A, e, t) {
          return (t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 0.5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A);
        }
        var fr = function (A, e) {
            var t = e.filter(Rt),
              r = t[0],
              n = t[1],
              s = t[2],
              a = t[3],
              o = (17 === r.type ? ir(r.number) : sr.parse(A, r)) / (2 * Math.PI),
              i = Jt(n) ? n.number / 100 : 0,
              B = Jt(s) ? s.number / 100 : 0,
              c = "undefined" !== typeof a && Jt(a) ? Ar(a, 1) : 1;
            if (0 === i) return lr(255 * B, 255 * B, 255 * B, 1);
            var u = B <= 0.5 ? B * (i + 1) : B + i - B * i,
              l = 2 * B - u,
              g = Qr(l, u, o + 1 / 3),
              w = Qr(l, u, o),
              Q = Qr(l, u, o - 1 / 3);
            return lr(255 * g, 255 * w, 255 * Q, c);
          },
          dr = { hsl: fr, hsla: fr, rgb: wr, rgba: wr },
          Cr = function (A, e) {
            return Br.parse(A, Xt.create(e).parseComponentValue());
          },
          hr = {
            ALICEBLUE: 4042850303,
            ANTIQUEWHITE: 4209760255,
            AQUA: 16777215,
            AQUAMARINE: 2147472639,
            AZURE: 4043309055,
            BEIGE: 4126530815,
            BISQUE: 4293182719,
            BLACK: 255,
            BLANCHEDALMOND: 4293643775,
            BLUE: 65535,
            BLUEVIOLET: 2318131967,
            BROWN: 2771004159,
            BURLYWOOD: 3736635391,
            CADETBLUE: 1604231423,
            CHARTREUSE: 2147418367,
            CHOCOLATE: 3530104575,
            CORAL: 4286533887,
            CORNFLOWERBLUE: 1687547391,
            CORNSILK: 4294499583,
            CRIMSON: 3692313855,
            CYAN: 16777215,
            DARKBLUE: 35839,
            DARKCYAN: 9145343,
            DARKGOLDENROD: 3095837695,
            DARKGRAY: 2846468607,
            DARKGREEN: 6553855,
            DARKGREY: 2846468607,
            DARKKHAKI: 3182914559,
            DARKMAGENTA: 2332068863,
            DARKOLIVEGREEN: 1433087999,
            DARKORANGE: 4287365375,
            DARKORCHID: 2570243327,
            DARKRED: 2332033279,
            DARKSALMON: 3918953215,
            DARKSEAGREEN: 2411499519,
            DARKSLATEBLUE: 1211993087,
            DARKSLATEGRAY: 793726975,
            DARKSLATEGREY: 793726975,
            DARKTURQUOISE: 13554175,
            DARKVIOLET: 2483082239,
            DEEPPINK: 4279538687,
            DEEPSKYBLUE: 12582911,
            DIMGRAY: 1768516095,
            DIMGREY: 1768516095,
            DODGERBLUE: 512819199,
            FIREBRICK: 2988581631,
            FLORALWHITE: 4294635775,
            FORESTGREEN: 579543807,
            FUCHSIA: 4278255615,
            GAINSBORO: 3705462015,
            GHOSTWHITE: 4177068031,
            GOLD: 4292280575,
            GOLDENROD: 3668254975,
            GRAY: 2155905279,
            GREEN: 8388863,
            GREENYELLOW: 2919182335,
            GREY: 2155905279,
            HONEYDEW: 4043305215,
            HOTPINK: 4285117695,
            INDIANRED: 3445382399,
            INDIGO: 1258324735,
            IVORY: 4294963455,
            KHAKI: 4041641215,
            LAVENDER: 3873897215,
            LAVENDERBLUSH: 4293981695,
            LAWNGREEN: 2096890111,
            LEMONCHIFFON: 4294626815,
            LIGHTBLUE: 2916673279,
            LIGHTCORAL: 4034953471,
            LIGHTCYAN: 3774873599,
            LIGHTGOLDENRODYELLOW: 4210742015,
            LIGHTGRAY: 3553874943,
            LIGHTGREEN: 2431553791,
            LIGHTGREY: 3553874943,
            LIGHTPINK: 4290167295,
            LIGHTSALMON: 4288707327,
            LIGHTSEAGREEN: 548580095,
            LIGHTSKYBLUE: 2278488831,
            LIGHTSLATEGRAY: 2005441023,
            LIGHTSLATEGREY: 2005441023,
            LIGHTSTEELBLUE: 2965692159,
            LIGHTYELLOW: 4294959359,
            LIME: 16711935,
            LIMEGREEN: 852308735,
            LINEN: 4210091775,
            MAGENTA: 4278255615,
            MAROON: 2147483903,
            MEDIUMAQUAMARINE: 1724754687,
            MEDIUMBLUE: 52735,
            MEDIUMORCHID: 3126187007,
            MEDIUMPURPLE: 2473647103,
            MEDIUMSEAGREEN: 1018393087,
            MEDIUMSLATEBLUE: 2070474495,
            MEDIUMSPRINGGREEN: 16423679,
            MEDIUMTURQUOISE: 1221709055,
            MEDIUMVIOLETRED: 3340076543,
            MIDNIGHTBLUE: 421097727,
            MINTCREAM: 4127193855,
            MISTYROSE: 4293190143,
            MOCCASIN: 4293178879,
            NAVAJOWHITE: 4292783615,
            NAVY: 33023,
            OLDLACE: 4260751103,
            OLIVE: 2155872511,
            OLIVEDRAB: 1804477439,
            ORANGE: 4289003775,
            ORANGERED: 4282712319,
            ORCHID: 3664828159,
            PALEGOLDENROD: 4008225535,
            PALEGREEN: 2566625535,
            PALETURQUOISE: 2951671551,
            PALEVIOLETRED: 3681588223,
            PAPAYAWHIP: 4293907967,
            PEACHPUFF: 4292524543,
            PERU: 3448061951,
            PINK: 4290825215,
            PLUM: 3718307327,
            POWDERBLUE: 2967529215,
            PURPLE: 2147516671,
            REBECCAPURPLE: 1714657791,
            RED: 4278190335,
            ROSYBROWN: 3163525119,
            ROYALBLUE: 1097458175,
            SADDLEBROWN: 2336560127,
            SALMON: 4202722047,
            SANDYBROWN: 4104413439,
            SEAGREEN: 780883967,
            SEASHELL: 4294307583,
            SIENNA: 2689740287,
            SILVER: 3233857791,
            SKYBLUE: 2278484991,
            SLATEBLUE: 1784335871,
            SLATEGRAY: 1887473919,
            SLATEGREY: 1887473919,
            SNOW: 4294638335,
            SPRINGGREEN: 16744447,
            STEELBLUE: 1182971135,
            TAN: 3535047935,
            TEAL: 8421631,
            THISTLE: 3636451583,
            TOMATO: 4284696575,
            TRANSPARENT: 0,
            TURQUOISE: 1088475391,
            VIOLET: 4001558271,
            WHEAT: 4125012991,
            WHITE: 4294967295,
            WHITESMOKE: 4126537215,
            YELLOW: 4294902015,
            YELLOWGREEN: 2597139199,
          },
          Fr = {
            name: "background-clip",
            initialValue: "border-box",
            prefix: !1,
            type: 1,
            parse: function (A, e) {
              return e.map(function (A) {
                if (kt(A))
                  switch (A.value) {
                    case "padding-box":
                      return 1;
                    case "content-box":
                      return 2;
                  }
                return 0;
              });
            },
          },
          Ur = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
          pr = function (A, e) {
            var t = Br.parse(A, e[0]),
              r = e[1];
            return r && Jt(r) ? { color: t, stop: r } : { color: t, stop: null };
          },
          Hr = function (A, e) {
            var t = A[0],
              r = A[A.length - 1];
            (null === t.stop && (t.stop = Yt), null === r.stop && (r.stop = _t));
            for (var n = [], s = 0, a = 0; a < A.length; a++) {
              var o = A[a].stop;
              if (null !== o) {
                var i = Ar(o, e);
                (i > s ? n.push(i) : n.push(s), (s = i));
              } else n.push(null);
            }
            var B = null;
            for (a = 0; a < n.length; a++) {
              var c = n[a];
              if (null === c) null === B && (B = a);
              else if (null !== B) {
                for (var u = a - B, l = n[B - 1], g = (c - l) / (u + 1), w = 1; w <= u; w++) n[B + w - 1] = g * w;
                B = null;
              }
            }
            return A.map(function (A, t) {
              var r = A.color;
              return { color: r, stop: Math.max(Math.min(1, n[t] / e), 0) };
            });
          },
          vr = function (A, e, t) {
            var r = e / 2,
              n = t / 2,
              s = Ar(A[0], e) - r,
              a = n - Ar(A[1], t);
            return (Math.atan2(a, s) + 2 * Math.PI) % (2 * Math.PI);
          },
          br = function (A, e, t) {
            var r = "number" === typeof A ? A : vr(A, e, t),
              n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
              s = e / 2,
              a = t / 2,
              o = n / 2,
              i = Math.sin(r - Math.PI / 2) * o,
              B = Math.cos(r - Math.PI / 2) * o;
            return [n, s - B, s + B, a - i, a + i];
          },
          yr = function (A, e) {
            return Math.sqrt(A * A + e * e);
          },
          mr = function (A, e, t, r, n) {
            var s = [
              [0, 0],
              [0, e],
              [A, 0],
              [A, e],
            ];
            return s.reduce(
              function (A, e) {
                var s = e[0],
                  a = e[1],
                  o = yr(t - s, r - a);
                return (n ? o < A.optimumDistance : o > A.optimumDistance) ? { optimumCorner: e, optimumDistance: o } : A;
              },
              { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null },
            ).optimumCorner;
          },
          Er = function (A, e, t, r, n) {
            var s = 0,
              a = 0;
            switch (A.size) {
              case 0:
                0 === A.shape
                  ? (s = a = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)))
                  : 1 === A.shape && ((s = Math.min(Math.abs(e), Math.abs(e - r))), (a = Math.min(Math.abs(t), Math.abs(t - n))));
                break;
              case 2:
                if (0 === A.shape) s = a = Math.min(yr(e, t), yr(e, t - n), yr(e - r, t), yr(e - r, t - n));
                else if (1 === A.shape) {
                  var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)),
                    i = mr(r, n, e, t, !0),
                    B = i[0],
                    c = i[1];
                  ((s = yr(B - e, (c - t) / o)), (a = o * s));
                }
                break;
              case 1:
                0 === A.shape
                  ? (s = a = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)))
                  : 1 === A.shape && ((s = Math.max(Math.abs(e), Math.abs(e - r))), (a = Math.max(Math.abs(t), Math.abs(t - n))));
                break;
              case 3:
                if (0 === A.shape) s = a = Math.max(yr(e, t), yr(e, t - n), yr(e - r, t), yr(e - r, t - n));
                else if (1 === A.shape) {
                  o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r));
                  var u = mr(r, n, e, t, !1);
                  ((B = u[0]), (c = u[1]));
                  ((s = yr(B - e, (c - t) / o)), (a = o * s));
                }
                break;
            }
            return (Array.isArray(A.size) && ((s = Ar(A.size[0], r)), (a = 2 === A.size.length ? Ar(A.size[1], n) : s)), [s, a]);
          },
          Ir = function (A, e) {
            var t = ir(180),
              r = [];
            return (
              jt(e).forEach(function (e, n) {
                if (0 === n) {
                  var s = e[0];
                  if (20 === s.type && "to" === s.value) return void (t = or(e));
                  if (ar(s)) return void (t = sr.parse(A, s));
                }
                var a = pr(A, e);
                r.push(a);
              }),
              { angle: t, stops: r, type: 1 }
            );
          },
          Lr = function (A, e) {
            var t = ir(180),
              r = [];
            return (
              jt(e).forEach(function (e, n) {
                if (0 === n) {
                  var s = e[0];
                  if (20 === s.type && -1 !== ["top", "left", "right", "bottom"].indexOf(s.value)) return void (t = or(e));
                  if (ar(s)) return void (t = (sr.parse(A, s) + ir(270)) % ir(360));
                }
                var a = pr(A, e);
                r.push(a);
              }),
              { angle: t, stops: r, type: 1 }
            );
          },
          xr = function (A, e) {
            var t = ir(180),
              r = [],
              n = 1,
              s = 0,
              a = 3,
              o = [];
            return (
              jt(e).forEach(function (e, t) {
                var s = e[0];
                if (0 === t) {
                  if (kt(s) && "linear" === s.value) return void (n = 1);
                  if (kt(s) && "radial" === s.value) return void (n = 2);
                }
                if (18 === s.type)
                  if ("from" === s.name) {
                    var a = Br.parse(A, s.values[0]);
                    r.push({ stop: Yt, color: a });
                  } else if ("to" === s.name) {
                    a = Br.parse(A, s.values[0]);
                    r.push({ stop: _t, color: a });
                  } else if ("color-stop" === s.name) {
                    var o = s.values.filter(Rt);
                    if (2 === o.length) {
                      a = Br.parse(A, o[1]);
                      var i = o[0];
                      Nt(i) && r.push({ stop: { type: 16, number: 100 * i.number, flags: i.flags }, color: a });
                    }
                  }
              }),
              1 === n ? { angle: (t + ir(180)) % ir(360), stops: r, type: n } : { size: a, shape: s, stops: r, position: o, type: n }
            );
          },
          Dr = "closest-side",
          Kr = "farthest-side",
          Or = "closest-corner",
          Pr = "farthest-corner",
          Tr = "circle",
          Xr = "ellipse",
          Gr = "cover",
          Nr = "contain",
          kr = function (A, e) {
            var t = 0,
              r = 3,
              n = [],
              s = [];
            return (
              jt(e).forEach(function (e, a) {
                var o = !0;
                if (0 === a) {
                  var i = !1;
                  o = e.reduce(function (A, e) {
                    if (i)
                      if (kt(e))
                        switch (e.value) {
                          case "center":
                            return (s.push(qt), A);
                          case "top":
                          case "left":
                            return (s.push(Yt), A);
                          case "right":
                          case "bottom":
                            return (s.push(_t), A);
                        }
                      else (Jt(e) || Zt(e)) && s.push(e);
                    else if (kt(e))
                      switch (e.value) {
                        case Tr:
                          return ((t = 0), !1);
                        case Xr:
                          return ((t = 1), !1);
                        case "at":
                          return ((i = !0), !1);
                        case Dr:
                          return ((r = 0), !1);
                        case Gr:
                        case Kr:
                          return ((r = 1), !1);
                        case Nr:
                        case Or:
                          return ((r = 2), !1);
                        case Pr:
                          return ((r = 3), !1);
                      }
                    else if (Zt(e) || Jt(e)) return (Array.isArray(r) || (r = []), r.push(e), !1);
                    return A;
                  }, o);
                }
                if (o) {
                  var B = pr(A, e);
                  n.push(B);
                }
              }),
              { size: r, shape: t, stops: n, position: s, type: 2 }
            );
          },
          Mr = function (A, e) {
            var t = 0,
              r = 3,
              n = [],
              s = [];
            return (
              jt(e).forEach(function (e, a) {
                var o = !0;
                if (
                  (0 === a
                    ? (o = e.reduce(function (A, e) {
                        if (kt(e))
                          switch (e.value) {
                            case "center":
                              return (s.push(qt), !1);
                            case "top":
                            case "left":
                              return (s.push(Yt), !1);
                            case "right":
                            case "bottom":
                              return (s.push(_t), !1);
                          }
                        else if (Jt(e) || Zt(e)) return (s.push(e), !1);
                        return A;
                      }, o))
                    : 1 === a &&
                      (o = e.reduce(function (A, e) {
                        if (kt(e))
                          switch (e.value) {
                            case Tr:
                              return ((t = 0), !1);
                            case Xr:
                              return ((t = 1), !1);
                            case Nr:
                            case Dr:
                              return ((r = 0), !1);
                            case Kr:
                              return ((r = 1), !1);
                            case Or:
                              return ((r = 2), !1);
                            case Gr:
                            case Pr:
                              return ((r = 3), !1);
                          }
                        else if (Zt(e) || Jt(e)) return (Array.isArray(r) || (r = []), r.push(e), !1);
                        return A;
                      }, o)),
                  o)
                ) {
                  var i = pr(A, e);
                  n.push(i);
                }
              }),
              { size: r, shape: t, stops: n, position: s, type: 2 }
            );
          },
          Sr = function (A) {
            return 1 === A.type;
          },
          Vr = function (A) {
            return 2 === A.type;
          },
          Rr = {
            name: "image",
            parse: function (A, e) {
              if (22 === e.type) {
                var t = { url: e.value, type: 0 };
                return (A.cache.addImage(e.value), t);
              }
              if (18 === e.type) {
                var r = Zr[e.name];
                if ("undefined" === typeof r) throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
                return r(A, e.values);
              }
              throw new Error("Unsupported image type " + e.type);
            },
          };
        function jr(A) {
          return !(20 === A.type && "none" === A.value) && (18 !== A.type || !!Zr[A.name]);
        }
        var zr,
          Zr = {
            "linear-gradient": Ir,
            "-moz-linear-gradient": Lr,
            "-ms-linear-gradient": Lr,
            "-o-linear-gradient": Lr,
            "-webkit-linear-gradient": Lr,
            "radial-gradient": kr,
            "-moz-radial-gradient": Mr,
            "-ms-radial-gradient": Mr,
            "-o-radial-gradient": Mr,
            "-webkit-radial-gradient": Mr,
            "-webkit-gradient": xr,
          },
          Jr = {
            name: "background-image",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function (A, e) {
              if (0 === e.length) return [];
              var t = e[0];
              return 20 === t.type && "none" === t.value
                ? []
                : e
                    .filter(function (A) {
                      return Rt(A) && jr(A);
                    })
                    .map(function (e) {
                      return Rr.parse(A, e);
                    });
            },
          },
          Wr = {
            name: "background-origin",
            initialValue: "border-box",
            prefix: !1,
            type: 1,
            parse: function (A, e) {
              return e.map(function (A) {
                if (kt(A))
                  switch (A.value) {
                    case "padding-box":
                      return 1;
                    case "content-box":
                      return 2;
                  }
                return 0;
              });
            },
          },
          Yr = {
            name: "background-position",
            initialValue: "0% 0%",
            type: 1,
            prefix: !1,
            parse: function (A, e) {
              return jt(e)
                .map(function (A) {
                  return A.filter(Jt);
                })
                .map(Wt);
            },
          },
          qr = {
            name: "background-repeat",
            initialValue: "repeat",
            prefix: !1,
            type: 1,
            parse: function (A, e) {
              return jt(e)
                .map(function (A) {
                  return A.filter(kt)
                    .map(function (A) {
                      return A.value;
                    })
                    .join(" ");
                })
                .map(_r);
            },
          },
          _r = function (A) {
            switch (A) {
              case "no-repeat":
                return 1;
              case "repeat-x":
              case "repeat no-repeat":
                return 2;
              case "repeat-y":
              case "no-repeat repeat":
                return 3;
              case "repeat":
              default:
                return 0;
            }
          };
        (function (A) {
          ((A["AUTO"] = "auto"), (A["CONTAIN"] = "contain"), (A["COVER"] = "cover"));
        })(zr || (zr = {}));
        var $r,
          An = {
            name: "background-size",
            initialValue: "0",
            prefix: !1,
            type: 1,
            parse: function (A, e) {
              return jt(e).map(function (A) {
                return A.filter(en);
              });
            },
          },
          en = function (A) {
            return kt(A) || Jt(A);
          },
          tn = function (A) {
            return { name: "border-" + A + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
          },
          rn = tn("top"),
          nn = tn("right"),
          sn = tn("bottom"),
          an = tn("left"),
          on = function (A) {
            return {
              name: "border-radius-" + A,
              initialValue: "0 0",
              prefix: !1,
              type: 1,
              parse: function (A, e) {
                return Wt(e.filter(Jt));
              },
            };
          },
          Bn = on("top-left"),
          cn = on("top-right"),
          un = on("bottom-right"),
          ln = on("bottom-left"),
          gn = function (A) {
            return {
              name: "border-" + A + "-style",
              initialValue: "solid",
              prefix: !1,
              type: 2,
              parse: function (A, e) {
                switch (e) {
                  case "none":
                    return 0;
                  case "dashed":
                    return 2;
                  case "dotted":
                    return 3;
                  case "double":
                    return 4;
                }
                return 1;
              },
            };
          },
          wn = gn("top"),
          Qn = gn("right"),
          fn = gn("bottom"),
          dn = gn("left"),
          Cn = function (A) {
            return {
              name: "border-" + A + "-width",
              initialValue: "0",
              type: 0,
              prefix: !1,
              parse: function (A, e) {
                return Gt(e) ? e.number : 0;
              },
            };
          },
          hn = Cn("top"),
          Fn = Cn("right"),
          Un = Cn("bottom"),
          pn = Cn("left"),
          Hn = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
          vn = {
            name: "direction",
            initialValue: "ltr",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "rtl":
                  return 1;
                case "ltr":
                default:
                  return 0;
              }
            },
          },
          bn = {
            name: "display",
            initialValue: "inline-block",
            prefix: !1,
            type: 1,
            parse: function (A, e) {
              return e.filter(kt).reduce(function (A, e) {
                return A | yn(e.value);
              }, 0);
            },
          },
          yn = function (A) {
            switch (A) {
              case "block":
              case "-webkit-box":
                return 2;
              case "inline":
                return 4;
              case "run-in":
                return 8;
              case "flow":
                return 16;
              case "flow-root":
                return 32;
              case "table":
                return 64;
              case "flex":
              case "-webkit-flex":
                return 128;
              case "grid":
              case "-ms-grid":
                return 256;
              case "ruby":
                return 512;
              case "subgrid":
                return 1024;
              case "list-item":
                return 2048;
              case "table-row-group":
                return 4096;
              case "table-header-group":
                return 8192;
              case "table-footer-group":
                return 16384;
              case "table-row":
                return 32768;
              case "table-cell":
                return 65536;
              case "table-column-group":
                return 131072;
              case "table-column":
                return 262144;
              case "table-caption":
                return 524288;
              case "ruby-base":
                return 1048576;
              case "ruby-text":
                return 2097152;
              case "ruby-base-container":
                return 4194304;
              case "ruby-text-container":
                return 8388608;
              case "contents":
                return 16777216;
              case "inline-block":
                return 33554432;
              case "inline-list-item":
                return 67108864;
              case "inline-table":
                return 134217728;
              case "inline-flex":
                return 268435456;
              case "inline-grid":
                return 536870912;
            }
            return 0;
          },
          mn = {
            name: "float",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "left":
                  return 1;
                case "right":
                  return 2;
                case "inline-start":
                  return 3;
                case "inline-end":
                  return 4;
              }
              return 0;
            },
          },
          En = {
            name: "letter-spacing",
            initialValue: "0",
            prefix: !1,
            type: 0,
            parse: function (A, e) {
              return 20 === e.type && "normal" === e.value ? 0 : 17 === e.type ? e.number : 15 === e.type ? e.number : 0;
            },
          };
        (function (A) {
          ((A["NORMAL"] = "normal"), (A["STRICT"] = "strict"));
        })($r || ($r = {}));
        var In,
          Ln = {
            name: "line-break",
            initialValue: "normal",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "strict":
                  return $r.STRICT;
                case "normal":
                default:
                  return $r.NORMAL;
              }
            },
          },
          xn = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
          Dn = function (A, e) {
            return kt(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : Jt(A) ? Ar(A, e) : e;
          },
          Kn = {
            name: "list-style-image",
            initialValue: "none",
            type: 0,
            prefix: !1,
            parse: function (A, e) {
              return 20 === e.type && "none" === e.value ? null : Rr.parse(A, e);
            },
          },
          On = {
            name: "list-style-position",
            initialValue: "outside",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "inside":
                  return 0;
                case "outside":
                default:
                  return 1;
              }
            },
          },
          Pn = {
            name: "list-style-type",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "disc":
                  return 0;
                case "circle":
                  return 1;
                case "square":
                  return 2;
                case "decimal":
                  return 3;
                case "cjk-decimal":
                  return 4;
                case "decimal-leading-zero":
                  return 5;
                case "lower-roman":
                  return 6;
                case "upper-roman":
                  return 7;
                case "lower-greek":
                  return 8;
                case "lower-alpha":
                  return 9;
                case "upper-alpha":
                  return 10;
                case "arabic-indic":
                  return 11;
                case "armenian":
                  return 12;
                case "bengali":
                  return 13;
                case "cambodian":
                  return 14;
                case "cjk-earthly-branch":
                  return 15;
                case "cjk-heavenly-stem":
                  return 16;
                case "cjk-ideographic":
                  return 17;
                case "devanagari":
                  return 18;
                case "ethiopic-numeric":
                  return 19;
                case "georgian":
                  return 20;
                case "gujarati":
                  return 21;
                case "gurmukhi":
                  return 22;
                case "hebrew":
                  return 22;
                case "hiragana":
                  return 23;
                case "hiragana-iroha":
                  return 24;
                case "japanese-formal":
                  return 25;
                case "japanese-informal":
                  return 26;
                case "kannada":
                  return 27;
                case "katakana":
                  return 28;
                case "katakana-iroha":
                  return 29;
                case "khmer":
                  return 30;
                case "korean-hangul-formal":
                  return 31;
                case "korean-hanja-formal":
                  return 32;
                case "korean-hanja-informal":
                  return 33;
                case "lao":
                  return 34;
                case "lower-armenian":
                  return 35;
                case "malayalam":
                  return 36;
                case "mongolian":
                  return 37;
                case "myanmar":
                  return 38;
                case "oriya":
                  return 39;
                case "persian":
                  return 40;
                case "simp-chinese-formal":
                  return 41;
                case "simp-chinese-informal":
                  return 42;
                case "tamil":
                  return 43;
                case "telugu":
                  return 44;
                case "thai":
                  return 45;
                case "tibetan":
                  return 46;
                case "trad-chinese-formal":
                  return 47;
                case "trad-chinese-informal":
                  return 48;
                case "upper-armenian":
                  return 49;
                case "disclosure-open":
                  return 50;
                case "disclosure-closed":
                  return 51;
                case "none":
                default:
                  return -1;
              }
            },
          },
          Tn = function (A) {
            return { name: "margin-" + A, initialValue: "0", prefix: !1, type: 4 };
          },
          Xn = Tn("top"),
          Gn = Tn("right"),
          Nn = Tn("bottom"),
          kn = Tn("left"),
          Mn = {
            name: "overflow",
            initialValue: "visible",
            prefix: !1,
            type: 1,
            parse: function (A, e) {
              return e.filter(kt).map(function (A) {
                switch (A.value) {
                  case "hidden":
                    return 1;
                  case "scroll":
                    return 2;
                  case "clip":
                    return 3;
                  case "auto":
                    return 4;
                  case "visible":
                  default:
                    return 0;
                }
              });
            },
          },
          Sn = {
            name: "overflow-wrap",
            initialValue: "normal",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "break-word":
                  return "break-word";
                case "normal":
                default:
                  return "normal";
              }
            },
          },
          Vn = function (A) {
            return { name: "padding-" + A, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
          },
          Rn = Vn("top"),
          jn = Vn("right"),
          zn = Vn("bottom"),
          Zn = Vn("left"),
          Jn = {
            name: "text-align",
            initialValue: "left",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "right":
                  return 2;
                case "center":
                case "justify":
                  return 1;
                case "left":
                default:
                  return 0;
              }
            },
          },
          Wn = {
            name: "position",
            initialValue: "static",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "relative":
                  return 1;
                case "absolute":
                  return 2;
                case "fixed":
                  return 3;
                case "sticky":
                  return 4;
              }
              return 0;
            },
          },
          Yn = {
            name: "text-shadow",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function (A, e) {
              return 1 === e.length && St(e[0], "none")
                ? []
                : jt(e).map(function (e) {
                    for (var t = { color: hr.TRANSPARENT, offsetX: Yt, offsetY: Yt, blur: Yt }, r = 0, n = 0; n < e.length; n++) {
                      var s = e[n];
                      Zt(s) ? (0 === r ? (t.offsetX = s) : 1 === r ? (t.offsetY = s) : (t.blur = s), r++) : (t.color = Br.parse(A, s));
                    }
                    return t;
                  });
            },
          },
          qn = {
            name: "text-transform",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "uppercase":
                  return 2;
                case "lowercase":
                  return 1;
                case "capitalize":
                  return 3;
              }
              return 0;
            },
          },
          _n = {
            name: "transform",
            initialValue: "none",
            prefix: !0,
            type: 0,
            parse: function (A, e) {
              if (20 === e.type && "none" === e.value) return null;
              if (18 === e.type) {
                var t = es[e.name];
                if ("undefined" === typeof t) throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
                return t(e.values);
              }
              return null;
            },
          },
          $n = function (A) {
            var e = A.filter(function (A) {
              return 17 === A.type;
            }).map(function (A) {
              return A.number;
            });
            return 6 === e.length ? e : null;
          },
          As = function (A) {
            var e = A.filter(function (A) {
                return 17 === A.type;
              }).map(function (A) {
                return A.number;
              }),
              t = e[0],
              r = e[1];
            (e[2], e[3]);
            var n = e[4],
              s = e[5];
            (e[6], e[7], e[8], e[9], e[10], e[11]);
            var a = e[12],
              o = e[13];
            return (e[14], e[15], 16 === e.length ? [t, r, n, s, a, o] : null);
          },
          es = { matrix: $n, matrix3d: As },
          ts = { type: 16, number: 50, flags: $A },
          rs = [ts, ts],
          ns = {
            name: "transform-origin",
            initialValue: "50% 50%",
            prefix: !0,
            type: 1,
            parse: function (A, e) {
              var t = e.filter(Jt);
              return 2 !== t.length ? rs : [t[0], t[1]];
            },
          },
          ss = {
            name: "visible",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function (A, e) {
              switch (e) {
                case "hidden":
                  return 1;
                case "collapse":
                  return 2;
                case "visible":
                default:
                  return 0;
              }
            },
          };
        (function (A) {
          ((A["NORMAL"] = "normal"), (A["BREAK_ALL"] = "break-all"), (A["KEEP_ALL"] = "keep-all"));
        })(In || (In = {}));
        for (
          var as = {
              name: "word-break",
              initialValue: "normal",
              prefix: !1,
              type: 2,
              parse: function (A, e) {
                switch (e) {
                  case "break-all":
                    return In.BREAK_ALL;
                  case "keep-all":
                    return In.KEEP_ALL;
                  case "normal":
                  default:
                    return In.NORMAL;
                }
              },
            },
            os = {
              name: "z-index",
              initialValue: "auto",
              prefix: !1,
              type: 0,
              parse: function (A, e) {
                if (20 === e.type) return { auto: !0, order: 0 };
                if (Nt(e)) return { auto: !1, order: e.number };
                throw new Error("Invalid z-index number parsed");
              },
            },
            is = {
              name: "time",
              parse: function (A, e) {
                if (15 === e.type)
                  switch (e.unit.toLowerCase()) {
                    case "s":
                      return 1e3 * e.number;
                    case "ms":
                      return e.number;
                  }
                throw new Error("Unsupported time type");
              },
            },
            Bs = {
              name: "opacity",
              initialValue: "1",
              type: 0,
              prefix: !1,
              parse: function (A, e) {
                return Nt(e) ? e.number : 1;
              },
            },
            cs = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
            us = {
              name: "text-decoration-line",
              initialValue: "none",
              prefix: !1,
              type: 1,
              parse: function (A, e) {
                return e
                  .filter(kt)
                  .map(function (A) {
                    switch (A.value) {
                      case "underline":
                        return 1;
                      case "overline":
                        return 2;
                      case "line-through":
                        return 3;
                      case "none":
                        return 4;
                    }
                    return 0;
                  })
                  .filter(function (A) {
                    return 0 !== A;
                  });
              },
            },
            ls = {
              name: "font-family",
              initialValue: "",
              prefix: !1,
              type: 1,
              parse: function (A, e) {
                var t = [],
                  r = [];
                return (
                  e.forEach(function (A) {
                    switch (A.type) {
                      case 20:
                      case 0:
                        t.push(A.value);
                        break;
                      case 17:
                        t.push(A.number.toString());
                        break;
                      case 4:
                        (r.push(t.join(" ")), (t.length = 0));
                        break;
                    }
                  }),
                  t.length && r.push(t.join(" ")),
                  r.map(function (A) {
                    return -1 === A.indexOf(" ") ? A : "'" + A + "'";
                  })
                );
              },
            },
            gs = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" },
            ws = {
              name: "font-weight",
              initialValue: "normal",
              type: 0,
              prefix: !1,
              parse: function (A, e) {
                if (Nt(e)) return e.number;
                if (kt(e))
                  switch (e.value) {
                    case "bold":
                      return 700;
                    case "normal":
                    default:
                      return 400;
                  }
                return 400;
              },
            },
            Qs = {
              name: "font-variant",
              initialValue: "none",
              type: 1,
              prefix: !1,
              parse: function (A, e) {
                return e.filter(kt).map(function (A) {
                  return A.value;
                });
              },
            },
            fs = {
              name: "font-style",
              initialValue: "normal",
              prefix: !1,
              type: 2,
              parse: function (A, e) {
                switch (e) {
                  case "oblique":
                    return "oblique";
                  case "italic":
                    return "italic";
                  case "normal":
                  default:
                    return "normal";
                }
              },
            },
            ds = function (A, e) {
              return 0 !== (A & e);
            },
            Cs = {
              name: "content",
              initialValue: "none",
              type: 1,
              prefix: !1,
              parse: function (A, e) {
                if (0 === e.length) return [];
                var t = e[0];
                return 20 === t.type && "none" === t.value ? [] : e;
              },
            },
            hs = {
              name: "counter-increment",
              initialValue: "none",
              prefix: !0,
              type: 1,
              parse: function (A, e) {
                if (0 === e.length) return null;
                var t = e[0];
                if (20 === t.type && "none" === t.value) return null;
                for (var r = [], n = e.filter(Vt), s = 0; s < n.length; s++) {
                  var a = n[s],
                    o = n[s + 1];
                  if (20 === a.type) {
                    var i = o && Nt(o) ? o.number : 1;
                    r.push({ counter: a.value, increment: i });
                  }
                }
                return r;
              },
            },
            Fs = {
              name: "counter-reset",
              initialValue: "none",
              prefix: !0,
              type: 1,
              parse: function (A, e) {
                if (0 === e.length) return [];
                for (var t = [], r = e.filter(Vt), n = 0; n < r.length; n++) {
                  var s = r[n],
                    a = r[n + 1];
                  if (kt(s) && "none" !== s.value) {
                    var o = a && Nt(a) ? a.number : 0;
                    t.push({ counter: s.value, reset: o });
                  }
                }
                return t;
              },
            },
            Us = {
              name: "duration",
              initialValue: "0s",
              prefix: !1,
              type: 1,
              parse: function (A, e) {
                return e.filter(Gt).map(function (e) {
                  return is.parse(A, e);
                });
              },
            },
            ps = {
              name: "quotes",
              initialValue: "none",
              prefix: !0,
              type: 1,
              parse: function (A, e) {
                if (0 === e.length) return null;
                var t = e[0];
                if (20 === t.type && "none" === t.value) return null;
                var r = [],
                  n = e.filter(Mt);
                if (n.length % 2 !== 0) return null;
                for (var s = 0; s < n.length; s += 2) {
                  var a = n[s].value,
                    o = n[s + 1].value;
                  r.push({ open: a, close: o });
                }
                return r;
              },
            },
            Hs = function (A, e, t) {
              if (!A) return "";
              var r = A[Math.min(e, A.length - 1)];
              return r ? (t ? r.open : r.close) : "";
            },
            vs = {
              name: "box-shadow",
              initialValue: "none",
              type: 1,
              prefix: !1,
              parse: function (A, e) {
                return 1 === e.length && St(e[0], "none")
                  ? []
                  : jt(e).map(function (e) {
                      for (var t = { color: 255, offsetX: Yt, offsetY: Yt, blur: Yt, spread: Yt, inset: !1 }, r = 0, n = 0; n < e.length; n++) {
                        var s = e[n];
                        St(s, "inset")
                          ? (t.inset = !0)
                          : Zt(s)
                            ? (0 === r ? (t.offsetX = s) : 1 === r ? (t.offsetY = s) : 2 === r ? (t.blur = s) : (t.spread = s), r++)
                            : (t.color = Br.parse(A, s));
                      }
                      return t;
                    });
              },
            },
            bs = {
              name: "paint-order",
              initialValue: "normal",
              prefix: !1,
              type: 1,
              parse: function (A, e) {
                var t = [0, 1, 2],
                  r = [];
                return (
                  e.filter(kt).forEach(function (A) {
                    switch (A.value) {
                      case "stroke":
                        r.push(1);
                        break;
                      case "fill":
                        r.push(0);
                        break;
                      case "markers":
                        r.push(2);
                        break;
                    }
                  }),
                  t.forEach(function (A) {
                    -1 === r.indexOf(A) && r.push(A);
                  }),
                  r
                );
              },
            },
            ys = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" },
            ms = {
              name: "-webkit-text-stroke-width",
              initialValue: "0",
              type: 0,
              prefix: !1,
              parse: function (A, e) {
                return Gt(e) ? e.number : 0;
              },
            },
            Es = (function () {
              function A(A, e) {
                var t, r;
                ((this.animationDuration = xs(A, Us, e.animationDuration)),
                  (this.backgroundClip = xs(A, Fr, e.backgroundClip)),
                  (this.backgroundColor = xs(A, Ur, e.backgroundColor)),
                  (this.backgroundImage = xs(A, Jr, e.backgroundImage)),
                  (this.backgroundOrigin = xs(A, Wr, e.backgroundOrigin)),
                  (this.backgroundPosition = xs(A, Yr, e.backgroundPosition)),
                  (this.backgroundRepeat = xs(A, qr, e.backgroundRepeat)),
                  (this.backgroundSize = xs(A, An, e.backgroundSize)),
                  (this.borderTopColor = xs(A, rn, e.borderTopColor)),
                  (this.borderRightColor = xs(A, nn, e.borderRightColor)),
                  (this.borderBottomColor = xs(A, sn, e.borderBottomColor)),
                  (this.borderLeftColor = xs(A, an, e.borderLeftColor)),
                  (this.borderTopLeftRadius = xs(A, Bn, e.borderTopLeftRadius)),
                  (this.borderTopRightRadius = xs(A, cn, e.borderTopRightRadius)),
                  (this.borderBottomRightRadius = xs(A, un, e.borderBottomRightRadius)),
                  (this.borderBottomLeftRadius = xs(A, ln, e.borderBottomLeftRadius)),
                  (this.borderTopStyle = xs(A, wn, e.borderTopStyle)),
                  (this.borderRightStyle = xs(A, Qn, e.borderRightStyle)),
                  (this.borderBottomStyle = xs(A, fn, e.borderBottomStyle)),
                  (this.borderLeftStyle = xs(A, dn, e.borderLeftStyle)),
                  (this.borderTopWidth = xs(A, hn, e.borderTopWidth)),
                  (this.borderRightWidth = xs(A, Fn, e.borderRightWidth)),
                  (this.borderBottomWidth = xs(A, Un, e.borderBottomWidth)),
                  (this.borderLeftWidth = xs(A, pn, e.borderLeftWidth)),
                  (this.boxShadow = xs(A, vs, e.boxShadow)),
                  (this.color = xs(A, Hn, e.color)),
                  (this.direction = xs(A, vn, e.direction)),
                  (this.display = xs(A, bn, e.display)),
                  (this.float = xs(A, mn, e.cssFloat)),
                  (this.fontFamily = xs(A, ls, e.fontFamily)),
                  (this.fontSize = xs(A, gs, e.fontSize)),
                  (this.fontStyle = xs(A, fs, e.fontStyle)),
                  (this.fontVariant = xs(A, Qs, e.fontVariant)),
                  (this.fontWeight = xs(A, ws, e.fontWeight)),
                  (this.letterSpacing = xs(A, En, e.letterSpacing)),
                  (this.lineBreak = xs(A, Ln, e.lineBreak)),
                  (this.lineHeight = xs(A, xn, e.lineHeight)),
                  (this.listStyleImage = xs(A, Kn, e.listStyleImage)),
                  (this.listStylePosition = xs(A, On, e.listStylePosition)),
                  (this.listStyleType = xs(A, Pn, e.listStyleType)),
                  (this.marginTop = xs(A, Xn, e.marginTop)),
                  (this.marginRight = xs(A, Gn, e.marginRight)),
                  (this.marginBottom = xs(A, Nn, e.marginBottom)),
                  (this.marginLeft = xs(A, kn, e.marginLeft)),
                  (this.opacity = xs(A, Bs, e.opacity)));
                var n = xs(A, Mn, e.overflow);
                ((this.overflowX = n[0]),
                  (this.overflowY = n[n.length > 1 ? 1 : 0]),
                  (this.overflowWrap = xs(A, Sn, e.overflowWrap)),
                  (this.paddingTop = xs(A, Rn, e.paddingTop)),
                  (this.paddingRight = xs(A, jn, e.paddingRight)),
                  (this.paddingBottom = xs(A, zn, e.paddingBottom)),
                  (this.paddingLeft = xs(A, Zn, e.paddingLeft)),
                  (this.paintOrder = xs(A, bs, e.paintOrder)),
                  (this.position = xs(A, Wn, e.position)),
                  (this.textAlign = xs(A, Jn, e.textAlign)),
                  (this.textDecorationColor = xs(A, cs, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color)),
                  (this.textDecorationLine = xs(A, us, null !== (r = e.textDecorationLine) && void 0 !== r ? r : e.textDecoration)),
                  (this.textShadow = xs(A, Yn, e.textShadow)),
                  (this.textTransform = xs(A, qn, e.textTransform)),
                  (this.transform = xs(A, _n, e.transform)),
                  (this.transformOrigin = xs(A, ns, e.transformOrigin)),
                  (this.visibility = xs(A, ss, e.visibility)),
                  (this.webkitTextStrokeColor = xs(A, ys, e.webkitTextStrokeColor)),
                  (this.webkitTextStrokeWidth = xs(A, ms, e.webkitTextStrokeWidth)),
                  (this.wordBreak = xs(A, as, e.wordBreak)),
                  (this.zIndex = xs(A, os, e.zIndex)));
              }
              return (
                (A.prototype.isVisible = function () {
                  return this.display > 0 && this.opacity > 0 && 0 === this.visibility;
                }),
                (A.prototype.isTransparent = function () {
                  return cr(this.backgroundColor);
                }),
                (A.prototype.isTransformed = function () {
                  return null !== this.transform;
                }),
                (A.prototype.isPositioned = function () {
                  return 0 !== this.position;
                }),
                (A.prototype.isPositionedWithZIndex = function () {
                  return this.isPositioned() && !this.zIndex.auto;
                }),
                (A.prototype.isFloating = function () {
                  return 0 !== this.float;
                }),
                (A.prototype.isInlineLevel = function () {
                  return (
                    ds(this.display, 4) ||
                    ds(this.display, 33554432) ||
                    ds(this.display, 268435456) ||
                    ds(this.display, 536870912) ||
                    ds(this.display, 67108864) ||
                    ds(this.display, 134217728)
                  );
                }),
                A
              );
            })(),
            Is = (function () {
              function A(A, e) {
                ((this.content = xs(A, Cs, e.content)), (this.quotes = xs(A, ps, e.quotes)));
              }
              return A;
            })(),
            Ls = (function () {
              function A(A, e) {
                ((this.counterIncrement = xs(A, hs, e.counterIncrement)), (this.counterReset = xs(A, Fs, e.counterReset)));
              }
              return A;
            })(),
            xs = function (A, e, t) {
              var r = new Tt(),
                n = null !== t && "undefined" !== typeof t ? t.toString() : e.initialValue;
              r.write(n);
              var s = new Xt(r.read());
              switch (e.type) {
                case 2:
                  var a = s.parseComponentValue();
                  return e.parse(A, kt(a) ? a.value : e.initialValue);
                case 0:
                  return e.parse(A, s.parseComponentValue());
                case 1:
                  return e.parse(A, s.parseComponentValues());
                case 4:
                  return s.parseComponentValue();
                case 3:
                  switch (e.format) {
                    case "angle":
                      return sr.parse(A, s.parseComponentValue());
                    case "color":
                      return Br.parse(A, s.parseComponentValue());
                    case "image":
                      return Rr.parse(A, s.parseComponentValue());
                    case "length":
                      var o = s.parseComponentValue();
                      return Zt(o) ? o : Yt;
                    case "length-percentage":
                      var i = s.parseComponentValue();
                      return Jt(i) ? i : Yt;
                    case "time":
                      return is.parse(A, s.parseComponentValue());
                  }
                  break;
              }
            },
            Ds = "data-html2canvas-debug",
            Ks = function (A) {
              var e = A.getAttribute(Ds);
              switch (e) {
                case "all":
                  return 1;
                case "clone":
                  return 2;
                case "parse":
                  return 3;
                case "render":
                  return 4;
                default:
                  return 0;
              }
            },
            Os = function (A, e) {
              var t = Ks(A);
              return 1 === t || e === t;
            },
            Ps = (function () {
              function A(A, e) {
                ((this.context = A),
                  (this.textNodes = []),
                  (this.elements = []),
                  (this.flags = 0),
                  Os(e, 3),
                  (this.styles = new Es(A, window.getComputedStyle(e, null))),
                  Lo(e) &&
                    (this.styles.animationDuration.some(function (A) {
                      return A > 0;
                    }) && (e.style.animationDuration = "0s"),
                    null !== this.styles.transform && (e.style.transform = "none")),
                  (this.bounds = o(this.context, e)),
                  Os(e, 4) && (this.flags |= 16));
              }
              return A;
            })(),
            Ts =
              "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
            Xs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            Gs = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256),
            Ns = 0;
          Ns < Xs.length;
          Ns++
        )
          Gs[Xs.charCodeAt(Ns)] = Ns;
        for (
          var ks = function (A) {
              var e,
                t,
                r,
                n,
                s,
                a = 0.75 * A.length,
                o = A.length,
                i = 0;
              "=" === A[A.length - 1] && (a--, "=" === A[A.length - 2] && a--);
              var B =
                  "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint8Array.prototype.slice
                    ? new ArrayBuffer(a)
                    : new Array(a),
                c = Array.isArray(B) ? B : new Uint8Array(B);
              for (e = 0; e < o; e += 4)
                ((t = Gs[A.charCodeAt(e)]),
                  (r = Gs[A.charCodeAt(e + 1)]),
                  (n = Gs[A.charCodeAt(e + 2)]),
                  (s = Gs[A.charCodeAt(e + 3)]),
                  (c[i++] = (t << 2) | (r >> 4)),
                  (c[i++] = ((15 & r) << 4) | (n >> 2)),
                  (c[i++] = ((3 & n) << 6) | (63 & s)));
              return B;
            },
            Ms = function (A) {
              for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push((A[r + 1] << 8) | A[r]);
              return t;
            },
            Ss = function (A) {
              for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
              return t;
            },
            Vs = 5,
            Rs = 11,
            js = 2,
            zs = Rs - Vs,
            Zs = 65536 >> Vs,
            Js = 1 << Vs,
            Ws = Js - 1,
            Ys = 1024 >> Vs,
            qs = Zs + Ys,
            _s = qs,
            $s = 32,
            Aa = _s + $s,
            ea = 65536 >> Rs,
            ta = 1 << zs,
            ra = ta - 1,
            na = function (A, e, t) {
              return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
            },
            sa = function (A, e, t) {
              return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
            },
            aa = function (A, e) {
              var t = ks(A),
                r = Array.isArray(t) ? Ss(t) : new Uint32Array(t),
                n = Array.isArray(t) ? Ms(t) : new Uint16Array(t),
                s = 24,
                a = na(n, s / 2, r[4] / 2),
                o = 2 === r[5] ? na(n, (s + r[4]) / 2) : sa(r, Math.ceil((s + r[4]) / 4));
              return new oa(r[0], r[1], r[2], r[3], a, o);
            },
            oa = (function () {
              function A(A, e, t, r, n, s) {
                ((this.initialValue = A), (this.errorValue = e), (this.highStart = t), (this.highValueIndex = r), (this.index = n), (this.data = s));
              }
              return (
                (A.prototype.get = function (A) {
                  var e;
                  if (A >= 0) {
                    if (A < 55296 || (A > 56319 && A <= 65535)) return ((e = this.index[A >> Vs]), (e = (e << js) + (A & Ws)), this.data[e]);
                    if (A <= 65535) return ((e = this.index[Zs + ((A - 55296) >> Vs)]), (e = (e << js) + (A & Ws)), this.data[e]);
                    if (A < this.highStart)
                      return (
                        (e = Aa - ea + (A >> Rs)),
                        (e = this.index[e]),
                        (e += (A >> Vs) & ra),
                        (e = this.index[e]),
                        (e = (e << js) + (A & Ws)),
                        this.data[e]
                      );
                    if (A <= 1114111) return this.data[this.highValueIndex];
                  }
                  return this.errorValue;
                }),
                A
              );
            })(),
            ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            Ba = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256),
            ca = 0;
          ca < ia.length;
          ca++
        )
          Ba[ia.charCodeAt(ca)] = ca;
        var ua,
          la = 1,
          ga = 2,
          wa = 3,
          Qa = 4,
          fa = 5,
          da = 7,
          Ca = 8,
          ha = 9,
          Fa = 10,
          Ua = 11,
          pa = 12,
          Ha = 13,
          va = 14,
          ba = 15,
          ya = function (A) {
            var e = [],
              t = 0,
              r = A.length;
            while (t < r) {
              var n = A.charCodeAt(t++);
              if (n >= 55296 && n <= 56319 && t < r) {
                var s = A.charCodeAt(t++);
                56320 === (64512 & s) ? e.push(((1023 & n) << 10) + (1023 & s) + 65536) : (e.push(n), t--);
              } else e.push(n);
            }
            return e;
          },
          ma = function () {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
            var t = A.length;
            if (!t) return "";
            var r = [],
              n = -1,
              s = "";
            while (++n < t) {
              var a = A[n];
              (a <= 65535 ? r.push(a) : ((a -= 65536), r.push(55296 + (a >> 10), (a % 1024) + 56320)),
                (n + 1 === t || r.length > 16384) && ((s += String.fromCharCode.apply(String, r)), (r.length = 0)));
            }
            return s;
          },
          Ea = aa(Ts),
          Ia = "×",
          La = "÷",
          xa = function (A) {
            return Ea.get(A);
          },
          Da = function (A, e, t) {
            var r = t - 2,
              n = e[r],
              s = e[t - 1],
              a = e[t];
            if (s === ga && a === wa) return Ia;
            if (s === ga || s === wa || s === Qa) return La;
            if (a === ga || a === wa || a === Qa) return La;
            if (s === Ca && -1 !== [Ca, ha, Ua, pa].indexOf(a)) return Ia;
            if ((s === Ua || s === ha) && (a === ha || a === Fa)) return Ia;
            if ((s === pa || s === Fa) && a === Fa) return Ia;
            if (a === Ha || a === fa) return Ia;
            if (a === da) return Ia;
            if (s === la) return Ia;
            if (s === Ha && a === va) {
              while (n === fa) n = e[--r];
              if (n === va) return Ia;
            }
            if (s === ba && a === ba) {
              var o = 0;
              while (n === ba) (o++, (n = e[--r]));
              if (o % 2 === 0) return Ia;
            }
            return La;
          },
          Ka = function (A) {
            var e = ya(A),
              t = e.length,
              r = 0,
              n = 0,
              s = e.map(xa);
            return {
              next: function () {
                if (r >= t) return { done: !0, value: null };
                var A = Ia;
                while (r < t && (A = Da(e, s, ++r)) === Ia);
                if (A !== Ia || r === t) {
                  var a = ma.apply(null, e.slice(n, r));
                  return ((n = r), { value: a, done: !1 });
                }
                return { done: !0, value: null };
              },
            };
          },
          Oa = function (A) {
            var e,
              t = Ka(A),
              r = [];
            while (!(e = t.next()).done) e.value && r.push(e.value.slice());
            return r;
          },
          Pa = function (A) {
            var e = 123;
            if (A.createRange) {
              var t = A.createRange();
              if (t.getBoundingClientRect) {
                var r = A.createElement("boundtest");
                ((r.style.height = e + "px"), (r.style.display = "block"), A.body.appendChild(r), t.selectNode(r));
                var n = t.getBoundingClientRect(),
                  s = Math.round(n.height);
                if ((A.body.removeChild(r), s === e)) return !0;
              }
            }
            return !1;
          },
          Ta = function (A) {
            var e = A.createElement("boundtest");
            ((e.style.width = "50px"),
              (e.style.display = "block"),
              (e.style.fontSize = "12px"),
              (e.style.letterSpacing = "0px"),
              (e.style.wordSpacing = "0px"),
              A.body.appendChild(e));
            var t = A.createRange();
            e.innerHTML = "function" === typeof "".repeat ? "&#128104;".repeat(10) : "";
            var r = e.firstChild,
              n = B(r.data).map(function (A) {
                return c(A);
              }),
              s = 0,
              a = {},
              o = n.every(function (A, e) {
                (t.setStart(r, s), t.setEnd(r, s + A.length));
                var n = t.getBoundingClientRect();
                s += A.length;
                var o = n.x > a.x || n.y > a.y;
                return ((a = n), 0 === e || o);
              });
            return (A.body.removeChild(e), o);
          },
          Xa = function () {
            return "undefined" !== typeof new Image().crossOrigin;
          },
          Ga = function () {
            return "string" === typeof new XMLHttpRequest().responseType;
          },
          Na = function (A) {
            var e = new Image(),
              t = A.createElement("canvas"),
              r = t.getContext("2d");
            if (!r) return !1;
            e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
            try {
              (r.drawImage(e, 0, 0), t.toDataURL());
            } catch (je) {
              return !1;
            }
            return !0;
          },
          ka = function (A) {
            return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3];
          },
          Ma = function (A) {
            var e = A.createElement("canvas"),
              t = 100;
            ((e.width = t), (e.height = t));
            var r = e.getContext("2d");
            if (!r) return Promise.reject(!1);
            ((r.fillStyle = "rgb(0, 255, 0)"), r.fillRect(0, 0, t, t));
            var n = new Image(),
              s = e.toDataURL();
            n.src = s;
            var a = Sa(t, t, 0, 0, n);
            return (
              (r.fillStyle = "red"),
              r.fillRect(0, 0, t, t),
              Va(a)
                .then(function (e) {
                  r.drawImage(e, 0, 0);
                  var n = r.getImageData(0, 0, t, t).data;
                  ((r.fillStyle = "red"), r.fillRect(0, 0, t, t));
                  var a = A.createElement("div");
                  return ((a.style.backgroundImage = "url(" + s + ")"), (a.style.height = t + "px"), ka(n) ? Va(Sa(t, t, 0, 0, a)) : Promise.reject(!1));
                })
                .then(function (A) {
                  return (r.drawImage(A, 0, 0), ka(r.getImageData(0, 0, t, t).data));
                })
                .catch(function () {
                  return !1;
                })
            );
          },
          Sa = function (A, e, t, r, n) {
            var s = "http://www.w3.org/2000/svg",
              a = document.createElementNS(s, "svg"),
              o = document.createElementNS(s, "foreignObject");
            return (
              a.setAttributeNS(null, "width", A.toString()),
              a.setAttributeNS(null, "height", e.toString()),
              o.setAttributeNS(null, "width", "100%"),
              o.setAttributeNS(null, "height", "100%"),
              o.setAttributeNS(null, "x", t.toString()),
              o.setAttributeNS(null, "y", r.toString()),
              o.setAttributeNS(null, "externalResourcesRequired", "true"),
              a.appendChild(o),
              o.appendChild(n),
              a
            );
          },
          Va = function (A) {
            return new Promise(function (e, t) {
              var r = new Image();
              ((r.onload = function () {
                return e(r);
              }),
                (r.onerror = t),
                (r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A))));
            });
          },
          Ra = {
            get SUPPORT_RANGE_BOUNDS() {
              var A = Pa(document);
              return (Object.defineProperty(Ra, "SUPPORT_RANGE_BOUNDS", { value: A }), A);
            },
            get SUPPORT_WORD_BREAKING() {
              var A = Ra.SUPPORT_RANGE_BOUNDS && Ta(document);
              return (Object.defineProperty(Ra, "SUPPORT_WORD_BREAKING", { value: A }), A);
            },
            get SUPPORT_SVG_DRAWING() {
              var A = Na(document);
              return (Object.defineProperty(Ra, "SUPPORT_SVG_DRAWING", { value: A }), A);
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
              var A = "function" === typeof Array.from && "function" === typeof window.fetch ? Ma(document) : Promise.resolve(!1);
              return (Object.defineProperty(Ra, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A);
            },
            get SUPPORT_CORS_IMAGES() {
              var A = Xa();
              return (Object.defineProperty(Ra, "SUPPORT_CORS_IMAGES", { value: A }), A);
            },
            get SUPPORT_RESPONSE_TYPE() {
              var A = Ga();
              return (Object.defineProperty(Ra, "SUPPORT_RESPONSE_TYPE", { value: A }), A);
            },
            get SUPPORT_CORS_XHR() {
              var A = "withCredentials" in new XMLHttpRequest();
              return (Object.defineProperty(Ra, "SUPPORT_CORS_XHR", { value: A }), A);
            },
            get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
              var A = !("undefined" === typeof Intl || !Intl.Segmenter);
              return (Object.defineProperty(Ra, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A);
            },
          },
          ja = (function () {
            function A(A, e) {
              ((this.text = A), (this.bounds = e));
            }
            return A;
          })(),
          za = function (A, e, t, r) {
            var n = qa(e, t),
              s = [],
              o = 0;
            return (
              n.forEach(function (e) {
                if (t.textDecorationLine.length || e.trim().length > 0)
                  if (Ra.SUPPORT_RANGE_BOUNDS) {
                    var n = Ja(r, o, e.length).getClientRects();
                    if (n.length > 1) {
                      var i = Wa(e),
                        B = 0;
                      i.forEach(function (e) {
                        (s.push(new ja(e, a.fromDOMRectList(A, Ja(r, B + o, e.length).getClientRects()))), (B += e.length));
                      });
                    } else s.push(new ja(e, a.fromDOMRectList(A, n)));
                  } else {
                    var c = r.splitText(e.length);
                    (s.push(new ja(e, Za(A, r))), (r = c));
                  }
                else Ra.SUPPORT_RANGE_BOUNDS || (r = r.splitText(e.length));
                o += e.length;
              }),
              s
            );
          },
          Za = function (A, e) {
            var t = e.ownerDocument;
            if (t) {
              var r = t.createElement("html2canvaswrapper");
              r.appendChild(e.cloneNode(!0));
              var n = e.parentNode;
              if (n) {
                n.replaceChild(r, e);
                var s = o(A, r);
                return (r.firstChild && n.replaceChild(r.firstChild, r), s);
              }
            }
            return a.EMPTY;
          },
          Ja = function (A, e, t) {
            var r = A.ownerDocument;
            if (!r) throw new Error("Node has no owner document");
            var n = r.createRange();
            return (n.setStart(A, e), n.setEnd(A, e + t), n);
          },
          Wa = function (A) {
            if (Ra.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
              var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
              return Array.from(e.segment(A)).map(function (A) {
                return A.segment;
              });
            }
            return Oa(A);
          },
          Ya = function (A, e) {
            if (Ra.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
              var t = new Intl.Segmenter(void 0, { granularity: "word" });
              return Array.from(t.segment(A)).map(function (A) {
                return A.segment;
              });
            }
            return $a(A, e);
          },
          qa = function (A, e) {
            return 0 !== e.letterSpacing ? Wa(A) : Ya(A, e);
          },
          _a = [32, 160, 4961, 65792, 65793, 4153, 4241],
          $a = function (A, e) {
            var t,
              r = YA(A, { lineBreak: e.lineBreak, wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak }),
              n = [],
              s = function () {
                if (t.value) {
                  var A = t.value.slice(),
                    e = B(A),
                    r = "";
                  (e.forEach(function (A) {
                    -1 === _a.indexOf(A) ? (r += c(A)) : (r.length && n.push(r), n.push(c(A)), (r = ""));
                  }),
                    r.length && n.push(r));
                }
              };
            while (!(t = r.next()).done) s();
            return n;
          },
          Ao = (function () {
            function A(A, e, t) {
              ((this.text = eo(e.data, t.textTransform)), (this.textBounds = za(A, this.text, t, e)));
            }
            return A;
          })(),
          eo = function (A, e) {
            switch (e) {
              case 1:
                return A.toLowerCase();
              case 3:
                return A.replace(to, ro);
              case 2:
                return A.toUpperCase();
              default:
                return A;
            }
          },
          to = /(^|\s|:|-|\(|\))([a-z])/g,
          ro = function (A, e, t) {
            return A.length > 0 ? e + t.toUpperCase() : A;
          },
          no = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              return (
                (r.src = t.currentSrc || t.src),
                (r.intrinsicWidth = t.naturalWidth),
                (r.intrinsicHeight = t.naturalHeight),
                r.context.cache.addImage(r.src),
                r
              );
            }
            return (e(t, A), t);
          })(Ps),
          so = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              return ((r.canvas = t), (r.intrinsicWidth = t.width), (r.intrinsicHeight = t.height), r);
            }
            return (e(t, A), t);
          })(Ps),
          ao = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this,
                n = new XMLSerializer(),
                s = o(e, t);
              return (
                t.setAttribute("width", s.width + "px"),
                t.setAttribute("height", s.height + "px"),
                (r.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(t))),
                (r.intrinsicWidth = t.width.baseVal.value),
                (r.intrinsicHeight = t.height.baseVal.value),
                r.context.cache.addImage(r.svg),
                r
              );
            }
            return (e(t, A), t);
          })(Ps),
          oo = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              return ((r.value = t.value), r);
            }
            return (e(t, A), t);
          })(Ps),
          io = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              return ((r.start = t.start), (r.reversed = "boolean" === typeof t.reversed && !0 === t.reversed), r);
            }
            return (e(t, A), t);
          })(Ps),
          Bo = [{ type: 15, flags: 0, unit: "px", number: 3 }],
          co = [{ type: 16, flags: 0, number: 50 }],
          uo = function (A) {
            return A.width > A.height
              ? new a(A.left + (A.width - A.height) / 2, A.top, A.height, A.height)
              : A.width < A.height
                ? new a(A.left, A.top + (A.height - A.width) / 2, A.width, A.width)
                : A;
          },
          lo = function (A) {
            var e = A.type === Qo ? new Array(A.value.length + 1).join("•") : A.value;
            return 0 === e.length ? A.placeholder || "" : e;
          },
          go = "checkbox",
          wo = "radio",
          Qo = "password",
          fo = 707406591,
          Co = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              switch (
                ((r.type = t.type.toLowerCase()),
                (r.checked = t.checked),
                (r.value = lo(t)),
                (r.type !== go && r.type !== wo) ||
                  ((r.styles.backgroundColor = 3739148031),
                  (r.styles.borderTopColor = r.styles.borderRightColor = r.styles.borderBottomColor = r.styles.borderLeftColor = 2779096575),
                  (r.styles.borderTopWidth = r.styles.borderRightWidth = r.styles.borderBottomWidth = r.styles.borderLeftWidth = 1),
                  (r.styles.borderTopStyle = r.styles.borderRightStyle = r.styles.borderBottomStyle = r.styles.borderLeftStyle = 1),
                  (r.styles.backgroundClip = [0]),
                  (r.styles.backgroundOrigin = [0]),
                  (r.bounds = uo(r.bounds))),
                r.type)
              ) {
                case go:
                  r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = Bo;
                  break;
                case wo:
                  r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = co;
                  break;
              }
              return r;
            }
            return (e(t, A), t);
          })(Ps),
          ho = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this,
                n = t.options[t.selectedIndex || 0];
              return ((r.value = (n && n.text) || ""), r);
            }
            return (e(t, A), t);
          })(Ps),
          Fo = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              return ((r.value = t.value), r);
            }
            return (e(t, A), t);
          })(Ps),
          Uo = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              ((r.src = t.src),
                (r.width = parseInt(t.width, 10) || 0),
                (r.height = parseInt(t.height, 10) || 0),
                (r.backgroundColor = r.styles.backgroundColor));
              try {
                if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
                  r.tree = bo(e, t.contentWindow.document.documentElement);
                  var n = t.contentWindow.document.documentElement
                      ? Cr(e, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor)
                      : hr.TRANSPARENT,
                    s = t.contentWindow.document.body ? Cr(e, getComputedStyle(t.contentWindow.document.body).backgroundColor) : hr.TRANSPARENT;
                  r.backgroundColor = cr(n) ? (cr(s) ? r.styles.backgroundColor : s) : n;
                }
              } catch (je) {}
              return r;
            }
            return (e(t, A), t);
          })(Ps),
          po = ["OL", "UL", "MENU"],
          Ho = function (A, e, t, r) {
            for (var n = e.firstChild, s = void 0; n; n = s)
              if (((s = n.nextSibling), Eo(n) && n.data.trim().length > 0)) t.textNodes.push(new Ao(A, n, t.styles));
              else if (Io(n))
                if (zo(n) && n.assignedNodes)
                  n.assignedNodes().forEach(function (e) {
                    return Ho(A, e, t, r);
                  });
                else {
                  var a = vo(A, n);
                  a.styles.isVisible() &&
                    (yo(n, a, r) ? (a.flags |= 4) : mo(a.styles) && (a.flags |= 2),
                    -1 !== po.indexOf(n.tagName) && (a.flags |= 8),
                    t.elements.push(a),
                    n.slot,
                    n.shadowRoot ? Ho(A, n.shadowRoot, a, r) : Ro(n) || To(n) || jo(n) || Ho(A, n, a, r));
                }
          },
          vo = function (A, e) {
            return ko(e)
              ? new no(A, e)
              : Go(e)
                ? new so(A, e)
                : To(e)
                  ? new ao(A, e)
                  : Do(e)
                    ? new oo(A, e)
                    : Ko(e)
                      ? new io(A, e)
                      : Oo(e)
                        ? new Co(A, e)
                        : jo(e)
                          ? new ho(A, e)
                          : Ro(e)
                            ? new Fo(A, e)
                            : Mo(e)
                              ? new Uo(A, e)
                              : new Ps(A, e);
          },
          bo = function (A, e) {
            var t = vo(A, e);
            return ((t.flags |= 4), Ho(A, e, t, t), t);
          },
          yo = function (A, e, t) {
            return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || (Xo(A) && t.styles.isTransparent());
          },
          mo = function (A) {
            return A.isPositioned() || A.isFloating();
          },
          Eo = function (A) {
            return A.nodeType === Node.TEXT_NODE;
          },
          Io = function (A) {
            return A.nodeType === Node.ELEMENT_NODE;
          },
          Lo = function (A) {
            return Io(A) && "undefined" !== typeof A.style && !xo(A);
          },
          xo = function (A) {
            return "object" === typeof A.className;
          },
          Do = function (A) {
            return "LI" === A.tagName;
          },
          Ko = function (A) {
            return "OL" === A.tagName;
          },
          Oo = function (A) {
            return "INPUT" === A.tagName;
          },
          Po = function (A) {
            return "HTML" === A.tagName;
          },
          To = function (A) {
            return "svg" === A.tagName;
          },
          Xo = function (A) {
            return "BODY" === A.tagName;
          },
          Go = function (A) {
            return "CANVAS" === A.tagName;
          },
          No = function (A) {
            return "VIDEO" === A.tagName;
          },
          ko = function (A) {
            return "IMG" === A.tagName;
          },
          Mo = function (A) {
            return "IFRAME" === A.tagName;
          },
          So = function (A) {
            return "STYLE" === A.tagName;
          },
          Vo = function (A) {
            return "SCRIPT" === A.tagName;
          },
          Ro = function (A) {
            return "TEXTAREA" === A.tagName;
          },
          jo = function (A) {
            return "SELECT" === A.tagName;
          },
          zo = function (A) {
            return "SLOT" === A.tagName;
          },
          Zo = function (A) {
            return A.tagName.indexOf("-") > 0;
          },
          Jo = (function () {
            function A() {
              this.counters = {};
            }
            return (
              (A.prototype.getCounterValue = function (A) {
                var e = this.counters[A];
                return e && e.length ? e[e.length - 1] : 1;
              }),
              (A.prototype.getCounterValues = function (A) {
                var e = this.counters[A];
                return e || [];
              }),
              (A.prototype.pop = function (A) {
                var e = this;
                A.forEach(function (A) {
                  return e.counters[A].pop();
                });
              }),
              (A.prototype.parse = function (A) {
                var e = this,
                  t = A.counterIncrement,
                  r = A.counterReset,
                  n = !0;
                null !== t &&
                  t.forEach(function (A) {
                    var t = e.counters[A.counter];
                    t && 0 !== A.increment && ((n = !1), t.length || t.push(1), (t[Math.max(0, t.length - 1)] += A.increment));
                  });
                var s = [];
                return (
                  n &&
                    r.forEach(function (A) {
                      var t = e.counters[A.counter];
                      (s.push(A.counter), t || (t = e.counters[A.counter] = []), t.push(A.reset));
                    }),
                  s
                );
              }),
              A
            );
          })(),
          Wo = {
            integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
          },
          Yo = {
            integers: [
              9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3,
              2, 1,
            ],
            values: [
              "Ք",
              "Փ",
              "Ւ",
              "Ց",
              "Ր",
              "Տ",
              "Վ",
              "Ս",
              "Ռ",
              "Ջ",
              "Պ",
              "Չ",
              "Ո",
              "Շ",
              "Ն",
              "Յ",
              "Մ",
              "Ճ",
              "Ղ",
              "Ձ",
              "Հ",
              "Կ",
              "Ծ",
              "Խ",
              "Լ",
              "Ի",
              "Ժ",
              "Թ",
              "Ը",
              "Է",
              "Զ",
              "Ե",
              "Դ",
              "Գ",
              "Բ",
              "Ա",
            ],
          },
          qo = {
            integers: [
              1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3,
              2, 1,
            ],
            values: [
              "י׳",
              "ט׳",
              "ח׳",
              "ז׳",
              "ו׳",
              "ה׳",
              "ד׳",
              "ג׳",
              "ב׳",
              "א׳",
              "ת",
              "ש",
              "ר",
              "ק",
              "צ",
              "פ",
              "ע",
              "ס",
              "נ",
              "מ",
              "ל",
              "כ",
              "יט",
              "יח",
              "יז",
              "טז",
              "טו",
              "י",
              "ט",
              "ח",
              "ז",
              "ו",
              "ה",
              "ד",
              "ג",
              "ב",
              "א",
            ],
          },
          _o = {
            integers: [
              1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5,
              4, 3, 2, 1,
            ],
            values: [
              "ჵ",
              "ჰ",
              "ჯ",
              "ჴ",
              "ხ",
              "ჭ",
              "წ",
              "ძ",
              "ც",
              "ჩ",
              "შ",
              "ყ",
              "ღ",
              "ქ",
              "ფ",
              "ჳ",
              "ტ",
              "ს",
              "რ",
              "ჟ",
              "პ",
              "ო",
              "ჲ",
              "ნ",
              "მ",
              "ლ",
              "კ",
              "ი",
              "თ",
              "ჱ",
              "ზ",
              "ვ",
              "ე",
              "დ",
              "გ",
              "ბ",
              "ა",
            ],
          },
          $o = function (A, e, t, r, n, s) {
            return A < e || A > t
              ? li(A, n, s.length > 0)
              : r.integers.reduce(function (e, t, n) {
                  while (A >= t) ((A -= t), (e += r.values[n]));
                  return e;
                }, "") + s;
          },
          Ai = function (A, e, t, r) {
            var n = "";
            do {
              (t || A--, (n = r(A) + n), (A /= e));
            } while (A * e >= e);
            return n;
          },
          ei = function (A, e, t, r, n) {
            var s = t - e + 1;
            return (
              (A < 0 ? "-" : "") +
              (Ai(Math.abs(A), s, r, function (A) {
                return c(Math.floor(A % s) + e);
              }) +
                n)
            );
          },
          ti = function (A, e, t) {
            void 0 === t && (t = ". ");
            var r = e.length;
            return (
              Ai(Math.abs(A), r, !1, function (A) {
                return e[Math.floor(A % r)];
              }) + t
            );
          },
          ri = 1,
          ni = 2,
          si = 4,
          ai = 8,
          oi = function (A, e, t, r, n, s) {
            if (A < -9999 || A > 9999) return li(A, 4, n.length > 0);
            var a = Math.abs(A),
              o = n;
            if (0 === a) return e[0] + o;
            for (var i = 0; a > 0 && i <= 4; i++) {
              var B = a % 10;
              (0 === B && ds(s, ri) && "" !== o
                ? (o = e[B] + o)
                : B > 1 ||
                    (1 === B && 0 === i) ||
                    (1 === B && 1 === i && ds(s, ni)) ||
                    (1 === B && 1 === i && ds(s, si) && A > 100) ||
                    (1 === B && i > 1 && ds(s, ai))
                  ? (o = e[B] + (i > 0 ? t[i - 1] : "") + o)
                  : 1 === B && i > 0 && (o = t[i - 1] + o),
                (a = Math.floor(a / 10)));
            }
            return (A < 0 ? r : "") + o;
          },
          ii = "十百千萬",
          Bi = "拾佰仟萬",
          ci = "マイナス",
          ui = "마이너스",
          li = function (A, e, t) {
            var r = t ? ". " : "",
              n = t ? "、" : "",
              s = t ? ", " : "",
              a = t ? " " : "";
            switch (e) {
              case 0:
                return "•" + a;
              case 1:
                return "◦" + a;
              case 2:
                return "◾" + a;
              case 5:
                var o = ei(A, 48, 57, !0, r);
                return o.length < 4 ? "0" + o : o;
              case 4:
                return ti(A, "〇一二三四五六七八九", n);
              case 6:
                return $o(A, 1, 3999, Wo, 3, r).toLowerCase();
              case 7:
                return $o(A, 1, 3999, Wo, 3, r);
              case 8:
                return ei(A, 945, 969, !1, r);
              case 9:
                return ei(A, 97, 122, !1, r);
              case 10:
                return ei(A, 65, 90, !1, r);
              case 11:
                return ei(A, 1632, 1641, !0, r);
              case 12:
              case 49:
                return $o(A, 1, 9999, Yo, 3, r);
              case 35:
                return $o(A, 1, 9999, Yo, 3, r).toLowerCase();
              case 13:
                return ei(A, 2534, 2543, !0, r);
              case 14:
              case 30:
                return ei(A, 6112, 6121, !0, r);
              case 15:
                return ti(A, "子丑寅卯辰巳午未申酉戌亥", n);
              case 16:
                return ti(A, "甲乙丙丁戊己庚辛壬癸", n);
              case 17:
              case 48:
                return oi(A, "零一二三四五六七八九", ii, "負", n, ni | si | ai);
              case 47:
                return oi(A, "零壹貳參肆伍陸柒捌玖", Bi, "負", n, ri | ni | si | ai);
              case 42:
                return oi(A, "零一二三四五六七八九", ii, "负", n, ni | si | ai);
              case 41:
                return oi(A, "零壹贰叁肆伍陆柒捌玖", Bi, "负", n, ri | ni | si | ai);
              case 26:
                return oi(A, "〇一二三四五六七八九", "十百千万", ci, n, 0);
              case 25:
                return oi(A, "零壱弐参四伍六七八九", "拾百千万", ci, n, ri | ni | si);
              case 31:
                return oi(A, "영일이삼사오육칠팔구", "십백천만", ui, s, ri | ni | si);
              case 33:
                return oi(A, "零一二三四五六七八九", "十百千萬", ui, s, 0);
              case 32:
                return oi(A, "零壹貳參四五六七八九", "拾百千", ui, s, ri | ni | si);
              case 18:
                return ei(A, 2406, 2415, !0, r);
              case 20:
                return $o(A, 1, 19999, _o, 3, r);
              case 21:
                return ei(A, 2790, 2799, !0, r);
              case 22:
                return ei(A, 2662, 2671, !0, r);
              case 22:
                return $o(A, 1, 10999, qo, 3, r);
              case 23:
                return ti(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
              case 24:
                return ti(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
              case 27:
                return ei(A, 3302, 3311, !0, r);
              case 28:
                return ti(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
              case 29:
                return ti(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
              case 34:
                return ei(A, 3792, 3801, !0, r);
              case 37:
                return ei(A, 6160, 6169, !0, r);
              case 38:
                return ei(A, 4160, 4169, !0, r);
              case 39:
                return ei(A, 2918, 2927, !0, r);
              case 40:
                return ei(A, 1776, 1785, !0, r);
              case 43:
                return ei(A, 3046, 3055, !0, r);
              case 44:
                return ei(A, 3174, 3183, !0, r);
              case 45:
                return ei(A, 3664, 3673, !0, r);
              case 46:
                return ei(A, 3872, 3881, !0, r);
              case 3:
              default:
                return ei(A, 48, 57, !0, r);
            }
          },
          gi = "data-html2canvas-ignore",
          wi = (function () {
            function A(A, e, t) {
              if (
                ((this.context = A),
                (this.options = t),
                (this.scrolledElements = []),
                (this.referenceElement = e),
                (this.counters = new Jo()),
                (this.quoteDepth = 0),
                !e.ownerDocument)
              )
                throw new Error("Cloned element does not have an owner document");
              this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1);
            }
            return (
              (A.prototype.toIFrame = function (A, e) {
                var t = this,
                  s = fi(A, e);
                if (!s.contentWindow) return Promise.reject("Unable to find iframe window");
                var a = A.defaultView.pageXOffset,
                  o = A.defaultView.pageYOffset,
                  i = s.contentWindow,
                  B = i.document,
                  c = hi(s).then(function () {
                    return r(t, void 0, void 0, function () {
                      var A, t;
                      return n(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return (
                              this.scrolledElements.forEach(vi),
                              i &&
                                (i.scrollTo(e.left, e.top),
                                !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                                  (i.scrollY === e.top && i.scrollX === e.left) ||
                                  (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                                  (this.context.windowBounds = this.context.windowBounds.add(i.scrollX - e.left, i.scrollY - e.top, 0, 0)))),
                              (A = this.options.onclone),
                              (t = this.clonedReferenceElement),
                              "undefined" === typeof t
                                ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")]
                                : B.fonts && B.fonts.ready
                                  ? [4, B.fonts.ready]
                                  : [3, 2]
                            );
                          case 1:
                            (r.sent(), (r.label = 2));
                          case 2:
                            return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Ci(B)] : [3, 4];
                          case 3:
                            (r.sent(), (r.label = 4));
                          case 4:
                            return "function" === typeof A
                              ? [
                                  2,
                                  Promise.resolve()
                                    .then(function () {
                                      return A(B, t);
                                    })
                                    .then(function () {
                                      return s;
                                    }),
                                ]
                              : [2, s];
                        }
                      });
                    });
                  });
                return (
                  B.open(),
                  B.write(pi(document.doctype) + "<html></html>"),
                  Hi(this.referenceElement.ownerDocument, a, o),
                  B.replaceChild(B.adoptNode(this.documentElement), B.documentElement),
                  B.close(),
                  c
                );
              }),
              (A.prototype.createElementClone = function (A) {
                if ((Os(A, 2), Go(A))) return this.createCanvasClone(A);
                if (No(A)) return this.createVideoClone(A);
                if (So(A)) return this.createStyleClone(A);
                var e = A.cloneNode(!1);
                return (
                  ko(e) &&
                    (ko(A) && A.currentSrc && A.currentSrc !== A.src && ((e.src = A.currentSrc), (e.srcset = "")),
                    "lazy" === e.loading && (e.loading = "eager")),
                  Zo(e) ? this.createCustomElementClone(e) : e
                );
              }),
              (A.prototype.createCustomElementClone = function (A) {
                var e = document.createElement("html2canvascustomelement");
                return (Ui(A.style, e), e);
              }),
              (A.prototype.createStyleClone = function (A) {
                try {
                  var e = A.sheet;
                  if (e && e.cssRules) {
                    var t = [].slice.call(e.cssRules, 0).reduce(function (A, e) {
                        return e && "string" === typeof e.cssText ? A + e.cssText : A;
                      }, ""),
                      r = A.cloneNode(!1);
                    return ((r.textContent = t), r);
                  }
                } catch (je) {
                  if ((this.context.logger.error("Unable to access cssRules property", je), "SecurityError" !== je.name)) throw je;
                }
                return A.cloneNode(!1);
              }),
              (A.prototype.createCanvasClone = function (A) {
                var e;
                if (this.options.inlineImages && A.ownerDocument) {
                  var t = A.ownerDocument.createElement("img");
                  try {
                    return ((t.src = A.toDataURL()), t);
                  } catch (je) {
                    this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
                  }
                }
                var r = A.cloneNode(!1);
                try {
                  ((r.width = A.width), (r.height = A.height));
                  var n = A.getContext("2d"),
                    s = r.getContext("2d");
                  if (s)
                    if (!this.options.allowTaint && n) s.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0);
                    else {
                      var a = null !== (e = A.getContext("webgl2")) && void 0 !== e ? e : A.getContext("webgl");
                      if (a) {
                        var o = a.getContextAttributes();
                        !1 === (null === o || void 0 === o ? void 0 : o.preserveDrawingBuffer) &&
                          this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
                      }
                      s.drawImage(A, 0, 0);
                    }
                  return r;
                } catch (je) {
                  this.context.logger.info("Unable to clone canvas as it is tainted", A);
                }
                return r;
              }),
              (A.prototype.createVideoClone = function (A) {
                var e = A.ownerDocument.createElement("canvas");
                ((e.width = A.offsetWidth), (e.height = A.offsetHeight));
                var t = e.getContext("2d");
                try {
                  return (t && (t.drawImage(A, 0, 0, e.width, e.height), this.options.allowTaint || t.getImageData(0, 0, e.width, e.height)), e);
                } catch (je) {
                  this.context.logger.info("Unable to clone video as it is tainted", A);
                }
                var r = A.ownerDocument.createElement("canvas");
                return ((r.width = A.offsetWidth), (r.height = A.offsetHeight), r);
              }),
              (A.prototype.appendChildNode = function (A, e, t) {
                (Io(e) && (Vo(e) || e.hasAttribute(gi) || ("function" === typeof this.options.ignoreElements && this.options.ignoreElements(e)))) ||
                  (this.options.copyStyles && Io(e) && So(e)) ||
                  A.appendChild(this.cloneNode(e, t));
              }),
              (A.prototype.cloneChildNodes = function (A, e, t) {
                for (var r = this, n = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; n; n = n.nextSibling)
                  if (Io(n) && zo(n) && "function" === typeof n.assignedNodes) {
                    var s = n.assignedNodes();
                    s.length &&
                      s.forEach(function (A) {
                        return r.appendChildNode(e, A, t);
                      });
                  } else this.appendChildNode(e, n, t);
              }),
              (A.prototype.cloneNode = function (A, e) {
                if (Eo(A)) return document.createTextNode(A.data);
                if (!A.ownerDocument) return A.cloneNode(!1);
                var t = A.ownerDocument.defaultView;
                if (t && Io(A) && (Lo(A) || xo(A))) {
                  var r = this.createElementClone(A);
                  r.style.transitionProperty = "none";
                  var n = t.getComputedStyle(A),
                    s = t.getComputedStyle(A, ":before"),
                    a = t.getComputedStyle(A, ":after");
                  (this.referenceElement === A && Lo(r) && (this.clonedReferenceElement = r), Xo(r) && Li(r));
                  var o = this.counters.parse(new Ls(this.context, n)),
                    i = this.resolvePseudoContent(A, r, s, ua.BEFORE);
                  (Zo(A) && (e = !0), No(A) || this.cloneChildNodes(A, r, e), i && r.insertBefore(i, r.firstChild));
                  var B = this.resolvePseudoContent(A, r, a, ua.AFTER);
                  return (
                    B && r.appendChild(B),
                    this.counters.pop(o),
                    ((n && (this.options.copyStyles || xo(A)) && !Mo(A)) || e) && Ui(n, r),
                    (0 === A.scrollTop && 0 === A.scrollLeft) || this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]),
                    (Ro(A) || jo(A)) && (Ro(r) || jo(r)) && (r.value = A.value),
                    r
                  );
                }
                return A.cloneNode(!1);
              }),
              (A.prototype.resolvePseudoContent = function (A, e, t, r) {
                var n = this;
                if (t) {
                  var s = t.content,
                    a = e.ownerDocument;
                  if (a && s && "none" !== s && "-moz-alt-content" !== s && "none" !== t.display) {
                    this.counters.parse(new Ls(this.context, t));
                    var o = new Is(this.context, t),
                      i = a.createElement("html2canvaspseudoelement");
                    (Ui(t, i),
                      o.content.forEach(function (e) {
                        if (0 === e.type) i.appendChild(a.createTextNode(e.value));
                        else if (22 === e.type) {
                          var t = a.createElement("img");
                          ((t.src = e.value), (t.style.opacity = "1"), i.appendChild(t));
                        } else if (18 === e.type) {
                          if ("attr" === e.name) {
                            var r = e.values.filter(kt);
                            r.length && i.appendChild(a.createTextNode(A.getAttribute(r[0].value) || ""));
                          } else if ("counter" === e.name) {
                            var s = e.values.filter(Rt),
                              B = s[0],
                              c = s[1];
                            if (B && kt(B)) {
                              var u = n.counters.getCounterValue(B.value),
                                l = c && kt(c) ? Pn.parse(n.context, c.value) : 3;
                              i.appendChild(a.createTextNode(li(u, l, !1)));
                            }
                          } else if ("counters" === e.name) {
                            var g = e.values.filter(Rt),
                              w = ((B = g[0]), g[1]);
                            c = g[2];
                            if (B && kt(B)) {
                              var Q = n.counters.getCounterValues(B.value),
                                f = c && kt(c) ? Pn.parse(n.context, c.value) : 3,
                                d = w && 0 === w.type ? w.value : "",
                                C = Q.map(function (A) {
                                  return li(A, f, !1);
                                }).join(d);
                              i.appendChild(a.createTextNode(C));
                            }
                          }
                        } else if (20 === e.type)
                          switch (e.value) {
                            case "open-quote":
                              i.appendChild(a.createTextNode(Hs(o.quotes, n.quoteDepth++, !0)));
                              break;
                            case "close-quote":
                              i.appendChild(a.createTextNode(Hs(o.quotes, --n.quoteDepth, !1)));
                              break;
                            default:
                              i.appendChild(a.createTextNode(e.value));
                          }
                      }),
                      (i.className = mi + " " + Ei));
                    var B = r === ua.BEFORE ? " " + mi : " " + Ei;
                    return (xo(e) ? (e.className.baseValue += B) : (e.className += B), i);
                  }
                }
              }),
              (A.destroy = function (A) {
                return !!A.parentNode && (A.parentNode.removeChild(A), !0);
              }),
              A
            );
          })();
        (function (A) {
          ((A[(A["BEFORE"] = 0)] = "BEFORE"), (A[(A["AFTER"] = 1)] = "AFTER"));
        })(ua || (ua = {}));
        var Qi,
          fi = function (A, e) {
            var t = A.createElement("iframe");
            return (
              (t.className = "html2canvas-container"),
              (t.style.visibility = "hidden"),
              (t.style.position = "fixed"),
              (t.style.left = "-10000px"),
              (t.style.top = "0px"),
              (t.style.border = "0"),
              (t.width = e.width.toString()),
              (t.height = e.height.toString()),
              (t.scrolling = "no"),
              t.setAttribute(gi, "true"),
              A.body.appendChild(t),
              t
            );
          },
          di = function (A) {
            return new Promise(function (e) {
              A.complete ? e() : A.src ? ((A.onload = e), (A.onerror = e)) : e();
            });
          },
          Ci = function (A) {
            return Promise.all([].slice.call(A.images, 0).map(di));
          },
          hi = function (A) {
            return new Promise(function (e, t) {
              var r = A.contentWindow;
              if (!r) return t("No window assigned for iframe");
              var n = r.document;
              r.onload = A.onload = function () {
                r.onload = A.onload = null;
                var t = setInterval(function () {
                  n.body.childNodes.length > 0 && "complete" === n.readyState && (clearInterval(t), e(A));
                }, 50);
              };
            });
          },
          Fi = ["all", "d", "content"],
          Ui = function (A, e) {
            for (var t = A.length - 1; t >= 0; t--) {
              var r = A.item(t);
              -1 === Fi.indexOf(r) && e.style.setProperty(r, A.getPropertyValue(r));
            }
            return e;
          },
          pi = function (A) {
            var e = "";
            return (
              A &&
                ((e += "<!DOCTYPE "),
                A.name && (e += A.name),
                A.internalSubset && (e += A.internalSubset),
                A.publicId && (e += '"' + A.publicId + '"'),
                A.systemId && (e += '"' + A.systemId + '"'),
                (e += ">")),
              e
            );
          },
          Hi = function (A, e, t) {
            A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
          },
          vi = function (A) {
            var e = A[0],
              t = A[1],
              r = A[2];
            ((e.scrollLeft = t), (e.scrollTop = r));
          },
          bi = ":before",
          yi = ":after",
          mi = "___html2canvas___pseudoelement_before",
          Ei = "___html2canvas___pseudoelement_after",
          Ii = '{\n    content: "" !important;\n    display: none !important;\n}',
          Li = function (A) {
            xi(A, "." + mi + bi + Ii + "\n         ." + Ei + yi + Ii);
          },
          xi = function (A, e) {
            var t = A.ownerDocument;
            if (t) {
              var r = t.createElement("style");
              ((r.textContent = e), A.appendChild(r));
            }
          },
          Di = (function () {
            function A() {}
            return (
              (A.getOrigin = function (e) {
                var t = A._link;
                return t ? ((t.href = e), (t.href = t.href), t.protocol + t.hostname + t.port) : "about:blank";
              }),
              (A.isSameOrigin = function (e) {
                return A.getOrigin(e) === A._origin;
              }),
              (A.setContext = function (e) {
                ((A._link = e.document.createElement("a")), (A._origin = A.getOrigin(e.location.href)));
              }),
              (A._origin = "about:blank"),
              A
            );
          })(),
          Ki = (function () {
            function A(A, e) {
              ((this.context = A), (this._options = e), (this._cache = {}));
            }
            return (
              (A.prototype.addImage = function (A) {
                var e = Promise.resolve();
                return this.has(A) ? e : ki(A) || Xi(A) ? ((this._cache[A] = this.loadImage(A)).catch(function () {}), e) : e;
              }),
              (A.prototype.match = function (A) {
                return this._cache[A];
              }),
              (A.prototype.loadImage = function (A) {
                return r(this, void 0, void 0, function () {
                  var e,
                    t,
                    r,
                    s,
                    a = this;
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (e = Di.isSameOrigin(A)),
                          (t = !Gi(A) && !0 === this._options.useCORS && Ra.SUPPORT_CORS_IMAGES && !e),
                          (r = !Gi(A) && !e && !ki(A) && "string" === typeof this._options.proxy && Ra.SUPPORT_CORS_XHR && !t),
                          e || !1 !== this._options.allowTaint || Gi(A) || ki(A) || r || t ? ((s = A), r ? [4, this.proxy(s)] : [3, 2]) : [2]
                        );
                      case 1:
                        ((s = n.sent()), (n.label = 2));
                      case 2:
                        return (
                          this.context.logger.debug("Added image " + A.substring(0, 256)),
                          [
                            4,
                            new Promise(function (A, e) {
                              var r = new Image();
                              ((r.onload = function () {
                                return A(r);
                              }),
                                (r.onerror = e),
                                (Ni(s) || t) && (r.crossOrigin = "anonymous"),
                                (r.src = s),
                                !0 === r.complete &&
                                  setTimeout(function () {
                                    return A(r);
                                  }, 500),
                                a._options.imageTimeout > 0 &&
                                  setTimeout(function () {
                                    return e("Timed out (" + a._options.imageTimeout + "ms) loading image");
                                  }, a._options.imageTimeout));
                            }),
                          ]
                        );
                      case 3:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              (A.prototype.has = function (A) {
                return "undefined" !== typeof this._cache[A];
              }),
              (A.prototype.keys = function () {
                return Promise.resolve(Object.keys(this._cache));
              }),
              (A.prototype.proxy = function (A) {
                var e = this,
                  t = this._options.proxy;
                if (!t) throw new Error("No proxy defined");
                var r = A.substring(0, 256);
                return new Promise(function (n, s) {
                  var a = Ra.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                    o = new XMLHttpRequest();
                  ((o.onload = function () {
                    if (200 === o.status)
                      if ("text" === a) n(o.response);
                      else {
                        var A = new FileReader();
                        (A.addEventListener(
                          "load",
                          function () {
                            return n(A.result);
                          },
                          !1,
                        ),
                          A.addEventListener(
                            "error",
                            function (A) {
                              return s(A);
                            },
                            !1,
                          ),
                          A.readAsDataURL(o.response));
                      }
                    else s("Failed to proxy resource " + r + " with status code " + o.status);
                  }),
                    (o.onerror = s));
                  var i = t.indexOf("?") > -1 ? "&" : "?";
                  if (
                    (o.open("GET", "" + t + i + "url=" + encodeURIComponent(A) + "&responseType=" + a),
                    "text" !== a && o instanceof XMLHttpRequest && (o.responseType = a),
                    e._options.imageTimeout)
                  ) {
                    var B = e._options.imageTimeout;
                    ((o.timeout = B),
                      (o.ontimeout = function () {
                        return s("Timed out (" + B + "ms) proxying " + r);
                      }));
                  }
                  o.send();
                });
              }),
              A
            );
          })(),
          Oi = /^data:image\/svg\+xml/i,
          Pi = /^data:image\/.*;base64,/i,
          Ti = /^data:image\/.*/i,
          Xi = function (A) {
            return Ra.SUPPORT_SVG_DRAWING || !Mi(A);
          },
          Gi = function (A) {
            return Ti.test(A);
          },
          Ni = function (A) {
            return Pi.test(A);
          },
          ki = function (A) {
            return "blob" === A.substr(0, 4);
          },
          Mi = function (A) {
            return "svg" === A.substr(-3).toLowerCase() || Oi.test(A);
          },
          Si = (function () {
            function A(A, e) {
              ((this.type = 0), (this.x = A), (this.y = e));
            }
            return (
              (A.prototype.add = function (e, t) {
                return new A(this.x + e, this.y + t);
              }),
              A
            );
          })(),
          Vi = function (A, e, t) {
            return new Si(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
          },
          Ri = (function () {
            function A(A, e, t, r) {
              ((this.type = 1), (this.start = A), (this.startControl = e), (this.endControl = t), (this.end = r));
            }
            return (
              (A.prototype.subdivide = function (e, t) {
                var r = Vi(this.start, this.startControl, e),
                  n = Vi(this.startControl, this.endControl, e),
                  s = Vi(this.endControl, this.end, e),
                  a = Vi(r, n, e),
                  o = Vi(n, s, e),
                  i = Vi(a, o, e);
                return t ? new A(this.start, r, a, i) : new A(i, o, s, this.end);
              }),
              (A.prototype.add = function (e, t) {
                return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
              }),
              (A.prototype.reverse = function () {
                return new A(this.end, this.endControl, this.startControl, this.start);
              }),
              A
            );
          })(),
          ji = function (A) {
            return 1 === A.type;
          },
          zi = (function () {
            function A(A) {
              var e = A.styles,
                t = A.bounds,
                r = $t(e.borderTopLeftRadius, t.width, t.height),
                n = r[0],
                s = r[1],
                a = $t(e.borderTopRightRadius, t.width, t.height),
                o = a[0],
                i = a[1],
                B = $t(e.borderBottomRightRadius, t.width, t.height),
                c = B[0],
                u = B[1],
                l = $t(e.borderBottomLeftRadius, t.width, t.height),
                g = l[0],
                w = l[1],
                Q = [];
              (Q.push((n + o) / t.width), Q.push((g + c) / t.width), Q.push((s + w) / t.height), Q.push((i + u) / t.height));
              var f = Math.max.apply(Math, Q);
              f > 1 && ((n /= f), (s /= f), (o /= f), (i /= f), (c /= f), (u /= f), (g /= f), (w /= f));
              var d = t.width - o,
                C = t.height - u,
                h = t.width - c,
                F = t.height - w,
                U = e.borderTopWidth,
                p = e.borderRightWidth,
                H = e.borderBottomWidth,
                v = e.borderLeftWidth,
                b = Ar(e.paddingTop, A.bounds.width),
                y = Ar(e.paddingRight, A.bounds.width),
                m = Ar(e.paddingBottom, A.bounds.width),
                E = Ar(e.paddingLeft, A.bounds.width);
              ((this.topLeftBorderDoubleOuterBox =
                n > 0 || s > 0 ? Zi(t.left + v / 3, t.top + U / 3, n - v / 3, s - U / 3, Qi.TOP_LEFT) : new Si(t.left + v / 3, t.top + U / 3)),
                (this.topRightBorderDoubleOuterBox =
                  n > 0 || s > 0 ? Zi(t.left + d, t.top + U / 3, o - p / 3, i - U / 3, Qi.TOP_RIGHT) : new Si(t.left + t.width - p / 3, t.top + U / 3)),
                (this.bottomRightBorderDoubleOuterBox =
                  c > 0 || u > 0
                    ? Zi(t.left + h, t.top + C, c - p / 3, u - H / 3, Qi.BOTTOM_RIGHT)
                    : new Si(t.left + t.width - p / 3, t.top + t.height - H / 3)),
                (this.bottomLeftBorderDoubleOuterBox =
                  g > 0 || w > 0 ? Zi(t.left + v / 3, t.top + F, g - v / 3, w - H / 3, Qi.BOTTOM_LEFT) : new Si(t.left + v / 3, t.top + t.height - H / 3)),
                (this.topLeftBorderDoubleInnerBox =
                  n > 0 || s > 0
                    ? Zi(t.left + (2 * v) / 3, t.top + (2 * U) / 3, n - (2 * v) / 3, s - (2 * U) / 3, Qi.TOP_LEFT)
                    : new Si(t.left + (2 * v) / 3, t.top + (2 * U) / 3)),
                (this.topRightBorderDoubleInnerBox =
                  n > 0 || s > 0
                    ? Zi(t.left + d, t.top + (2 * U) / 3, o - (2 * p) / 3, i - (2 * U) / 3, Qi.TOP_RIGHT)
                    : new Si(t.left + t.width - (2 * p) / 3, t.top + (2 * U) / 3)),
                (this.bottomRightBorderDoubleInnerBox =
                  c > 0 || u > 0
                    ? Zi(t.left + h, t.top + C, c - (2 * p) / 3, u - (2 * H) / 3, Qi.BOTTOM_RIGHT)
                    : new Si(t.left + t.width - (2 * p) / 3, t.top + t.height - (2 * H) / 3)),
                (this.bottomLeftBorderDoubleInnerBox =
                  g > 0 || w > 0
                    ? Zi(t.left + (2 * v) / 3, t.top + F, g - (2 * v) / 3, w - (2 * H) / 3, Qi.BOTTOM_LEFT)
                    : new Si(t.left + (2 * v) / 3, t.top + t.height - (2 * H) / 3)),
                (this.topLeftBorderStroke =
                  n > 0 || s > 0 ? Zi(t.left + v / 2, t.top + U / 2, n - v / 2, s - U / 2, Qi.TOP_LEFT) : new Si(t.left + v / 2, t.top + U / 2)),
                (this.topRightBorderStroke =
                  n > 0 || s > 0 ? Zi(t.left + d, t.top + U / 2, o - p / 2, i - U / 2, Qi.TOP_RIGHT) : new Si(t.left + t.width - p / 2, t.top + U / 2)),
                (this.bottomRightBorderStroke =
                  c > 0 || u > 0
                    ? Zi(t.left + h, t.top + C, c - p / 2, u - H / 2, Qi.BOTTOM_RIGHT)
                    : new Si(t.left + t.width - p / 2, t.top + t.height - H / 2)),
                (this.bottomLeftBorderStroke =
                  g > 0 || w > 0 ? Zi(t.left + v / 2, t.top + F, g - v / 2, w - H / 2, Qi.BOTTOM_LEFT) : new Si(t.left + v / 2, t.top + t.height - H / 2)),
                (this.topLeftBorderBox = n > 0 || s > 0 ? Zi(t.left, t.top, n, s, Qi.TOP_LEFT) : new Si(t.left, t.top)),
                (this.topRightBorderBox = o > 0 || i > 0 ? Zi(t.left + d, t.top, o, i, Qi.TOP_RIGHT) : new Si(t.left + t.width, t.top)),
                (this.bottomRightBorderBox = c > 0 || u > 0 ? Zi(t.left + h, t.top + C, c, u, Qi.BOTTOM_RIGHT) : new Si(t.left + t.width, t.top + t.height)),
                (this.bottomLeftBorderBox = g > 0 || w > 0 ? Zi(t.left, t.top + F, g, w, Qi.BOTTOM_LEFT) : new Si(t.left, t.top + t.height)),
                (this.topLeftPaddingBox =
                  n > 0 || s > 0 ? Zi(t.left + v, t.top + U, Math.max(0, n - v), Math.max(0, s - U), Qi.TOP_LEFT) : new Si(t.left + v, t.top + U)),
                (this.topRightPaddingBox =
                  o > 0 || i > 0
                    ? Zi(t.left + Math.min(d, t.width - p), t.top + U, d > t.width + p ? 0 : Math.max(0, o - p), Math.max(0, i - U), Qi.TOP_RIGHT)
                    : new Si(t.left + t.width - p, t.top + U)),
                (this.bottomRightPaddingBox =
                  c > 0 || u > 0
                    ? Zi(t.left + Math.min(h, t.width - v), t.top + Math.min(C, t.height - H), Math.max(0, c - p), Math.max(0, u - H), Qi.BOTTOM_RIGHT)
                    : new Si(t.left + t.width - p, t.top + t.height - H)),
                (this.bottomLeftPaddingBox =
                  g > 0 || w > 0
                    ? Zi(t.left + v, t.top + Math.min(F, t.height - H), Math.max(0, g - v), Math.max(0, w - H), Qi.BOTTOM_LEFT)
                    : new Si(t.left + v, t.top + t.height - H)),
                (this.topLeftContentBox =
                  n > 0 || s > 0
                    ? Zi(t.left + v + E, t.top + U + b, Math.max(0, n - (v + E)), Math.max(0, s - (U + b)), Qi.TOP_LEFT)
                    : new Si(t.left + v + E, t.top + U + b)),
                (this.topRightContentBox =
                  o > 0 || i > 0
                    ? Zi(t.left + Math.min(d, t.width + v + E), t.top + U + b, d > t.width + v + E ? 0 : o - v + E, i - (U + b), Qi.TOP_RIGHT)
                    : new Si(t.left + t.width - (p + y), t.top + U + b)),
                (this.bottomRightContentBox =
                  c > 0 || u > 0
                    ? Zi(t.left + Math.min(h, t.width - (v + E)), t.top + Math.min(C, t.height + U + b), Math.max(0, c - (p + y)), u - (H + m), Qi.BOTTOM_RIGHT)
                    : new Si(t.left + t.width - (p + y), t.top + t.height - (H + m))),
                (this.bottomLeftContentBox =
                  g > 0 || w > 0
                    ? Zi(t.left + v + E, t.top + F, Math.max(0, g - (v + E)), w - (H + m), Qi.BOTTOM_LEFT)
                    : new Si(t.left + v + E, t.top + t.height - (H + m))));
            }
            return A;
          })();
        (function (A) {
          ((A[(A["TOP_LEFT"] = 0)] = "TOP_LEFT"),
            (A[(A["TOP_RIGHT"] = 1)] = "TOP_RIGHT"),
            (A[(A["BOTTOM_RIGHT"] = 2)] = "BOTTOM_RIGHT"),
            (A[(A["BOTTOM_LEFT"] = 3)] = "BOTTOM_LEFT"));
        })(Qi || (Qi = {}));
        var Zi = function (A, e, t, r, n) {
            var s = ((Math.sqrt(2) - 1) / 3) * 4,
              a = t * s,
              o = r * s,
              i = A + t,
              B = e + r;
            switch (n) {
              case Qi.TOP_LEFT:
                return new Ri(new Si(A, B), new Si(A, B - o), new Si(i - a, e), new Si(i, e));
              case Qi.TOP_RIGHT:
                return new Ri(new Si(A, e), new Si(A + a, e), new Si(i, B - o), new Si(i, B));
              case Qi.BOTTOM_RIGHT:
                return new Ri(new Si(i, e), new Si(i, e + o), new Si(A + a, B), new Si(A, B));
              case Qi.BOTTOM_LEFT:
              default:
                return new Ri(new Si(i, B), new Si(i - a, B), new Si(A, e + o), new Si(A, e));
            }
          },
          Ji = function (A) {
            return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
          },
          Wi = function (A) {
            return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox];
          },
          Yi = function (A) {
            return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox];
          },
          qi = (function () {
            function A(A, e, t) {
              ((this.offsetX = A), (this.offsetY = e), (this.matrix = t), (this.type = 0), (this.target = 6));
            }
            return A;
          })(),
          _i = (function () {
            function A(A, e) {
              ((this.path = A), (this.target = e), (this.type = 1));
            }
            return A;
          })(),
          $i = (function () {
            function A(A) {
              ((this.opacity = A), (this.type = 2), (this.target = 6));
            }
            return A;
          })(),
          AB = function (A) {
            return 0 === A.type;
          },
          eB = function (A) {
            return 1 === A.type;
          },
          tB = function (A) {
            return 2 === A.type;
          },
          rB = function (A, e) {
            return (
              A.length === e.length &&
              A.some(function (A, t) {
                return A === e[t];
              })
            );
          },
          nB = function (A, e, t, r, n) {
            return A.map(function (A, s) {
              switch (s) {
                case 0:
                  return A.add(e, t);
                case 1:
                  return A.add(e + r, t);
                case 2:
                  return A.add(e + r, t + n);
                case 3:
                  return A.add(e, t + n);
              }
              return A;
            });
          },
          sB = (function () {
            function A(A) {
              ((this.element = A),
                (this.inlineLevel = []),
                (this.nonInlineLevel = []),
                (this.negativeZIndex = []),
                (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
                (this.positiveZIndex = []),
                (this.nonPositionedFloats = []),
                (this.nonPositionedInlineLevel = []));
            }
            return A;
          })(),
          aB = (function () {
            function A(A, e) {
              if (
                ((this.container = A),
                (this.parent = e),
                (this.effects = []),
                (this.curves = new zi(this.container)),
                this.container.styles.opacity < 1 && this.effects.push(new $i(this.container.styles.opacity)),
                null !== this.container.styles.transform)
              ) {
                var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number,
                  r = this.container.bounds.top + this.container.styles.transformOrigin[1].number,
                  n = this.container.styles.transform;
                this.effects.push(new qi(t, r, n));
              }
              if (0 !== this.container.styles.overflowX) {
                var s = Ji(this.curves),
                  a = Yi(this.curves);
                rB(s, a) ? this.effects.push(new _i(s, 6)) : (this.effects.push(new _i(s, 2)), this.effects.push(new _i(a, 4)));
              }
            }
            return (
              (A.prototype.getEffects = function (A) {
                var e = -1 === [2, 3].indexOf(this.container.styles.position),
                  t = this.parent,
                  r = this.effects.slice(0);
                while (t) {
                  var n = t.effects.filter(function (A) {
                    return !eB(A);
                  });
                  if (e || 0 !== t.container.styles.position || !t.parent) {
                    if ((r.unshift.apply(r, n), (e = -1 === [2, 3].indexOf(t.container.styles.position)), 0 !== t.container.styles.overflowX)) {
                      var s = Ji(t.curves),
                        a = Yi(t.curves);
                      rB(s, a) || r.unshift(new _i(a, 6));
                    }
                  } else r.unshift.apply(r, n);
                  t = t.parent;
                }
                return r.filter(function (e) {
                  return ds(e.target, A);
                });
              }),
              A
            );
          })(),
          oB = function (A, e, t, r) {
            A.container.elements.forEach(function (n) {
              var s = ds(n.flags, 4),
                a = ds(n.flags, 2),
                o = new aB(n, A);
              ds(n.styles.display, 2048) && r.push(o);
              var i = ds(n.flags, 8) ? [] : r;
              if (s || a) {
                var B = s || n.styles.isPositioned() ? t : e,
                  c = new sB(o);
                if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
                  var u = n.styles.zIndex.order;
                  if (u < 0) {
                    var l = 0;
                    (B.negativeZIndex.some(function (A, e) {
                      return u > A.element.container.styles.zIndex.order ? ((l = e), !1) : l > 0;
                    }),
                      B.negativeZIndex.splice(l, 0, c));
                  } else if (u > 0) {
                    var g = 0;
                    (B.positiveZIndex.some(function (A, e) {
                      return u >= A.element.container.styles.zIndex.order ? ((g = e + 1), !1) : g > 0;
                    }),
                      B.positiveZIndex.splice(g, 0, c));
                  } else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
                } else n.styles.isFloating() ? B.nonPositionedFloats.push(c) : B.nonPositionedInlineLevel.push(c);
                oB(o, c, s ? c : t, i);
              } else (n.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o), oB(o, e, t, i));
              ds(n.flags, 8) && iB(n, i);
            });
          },
          iB = function (A, e) {
            for (var t = A instanceof io ? A.start : 1, r = A instanceof io && A.reversed, n = 0; n < e.length; n++) {
              var s = e[n];
              (s.container instanceof oo && "number" === typeof s.container.value && 0 !== s.container.value && (t = s.container.value),
                (s.listValue = li(t, s.container.styles.listStyleType, !0)),
                (t += r ? -1 : 1));
            }
          },
          BB = function (A) {
            var e = new aB(A, null),
              t = new sB(e),
              r = [];
            return (oB(e, t, t, r), iB(e.container, r), t);
          },
          cB = function (A, e) {
            switch (e) {
              case 0:
                return QB(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
              case 1:
                return QB(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
              case 2:
                return QB(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
              case 3:
              default:
                return QB(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
            }
          },
          uB = function (A, e) {
            switch (e) {
              case 0:
                return QB(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
              case 1:
                return QB(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
              case 2:
                return QB(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
              case 3:
              default:
                return QB(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
            }
          },
          lB = function (A, e) {
            switch (e) {
              case 0:
                return QB(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
              case 1:
                return QB(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
              case 2:
                return QB(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
              case 3:
              default:
                return QB(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
            }
          },
          gB = function (A, e) {
            switch (e) {
              case 0:
                return wB(A.topLeftBorderStroke, A.topRightBorderStroke);
              case 1:
                return wB(A.topRightBorderStroke, A.bottomRightBorderStroke);
              case 2:
                return wB(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
              case 3:
              default:
                return wB(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
            }
          },
          wB = function (A, e) {
            var t = [];
            return (ji(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), ji(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t);
          },
          QB = function (A, e, t, r) {
            var n = [];
            return (
              ji(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A),
              ji(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t),
              ji(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r),
              ji(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e),
              n
            );
          },
          fB = function (A) {
            var e = A.bounds,
              t = A.styles;
            return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
          },
          dB = function (A) {
            var e = A.styles,
              t = A.bounds,
              r = Ar(e.paddingLeft, t.width),
              n = Ar(e.paddingRight, t.width),
              s = Ar(e.paddingTop, t.width),
              a = Ar(e.paddingBottom, t.width);
            return t.add(
              r + e.borderLeftWidth,
              s + e.borderTopWidth,
              -(e.borderRightWidth + e.borderLeftWidth + r + n),
              -(e.borderTopWidth + e.borderBottomWidth + s + a),
            );
          },
          CB = function (A, e) {
            return 0 === A ? e.bounds : 2 === A ? dB(e) : fB(e);
          },
          hB = function (A, e) {
            return 0 === A ? e.bounds : 2 === A ? dB(e) : fB(e);
          },
          FB = function (A, e, t) {
            var r = CB(vB(A.styles.backgroundOrigin, e), A),
              n = hB(vB(A.styles.backgroundClip, e), A),
              s = HB(vB(A.styles.backgroundSize, e), t, r),
              a = s[0],
              o = s[1],
              i = $t(vB(A.styles.backgroundPosition, e), r.width - a, r.height - o),
              B = bB(vB(A.styles.backgroundRepeat, e), i, s, r, n),
              c = Math.round(r.left + i[0]),
              u = Math.round(r.top + i[1]);
            return [B, c, u, a, o];
          },
          UB = function (A) {
            return kt(A) && A.value === zr.AUTO;
          },
          pB = function (A) {
            return "number" === typeof A;
          },
          HB = function (A, e, t) {
            var r = e[0],
              n = e[1],
              s = e[2],
              a = A[0],
              o = A[1];
            if (!a) return [0, 0];
            if (Jt(a) && o && Jt(o)) return [Ar(a, t.width), Ar(o, t.height)];
            var i = pB(s);
            if (kt(a) && (a.value === zr.CONTAIN || a.value === zr.COVER)) {
              if (pB(s)) {
                var B = t.width / t.height;
                return B < s !== (a.value === zr.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
              }
              return [t.width, t.height];
            }
            var c = pB(r),
              u = pB(n),
              l = c || u;
            if (UB(a) && (!o || UB(o))) {
              if (c && u) return [r, n];
              if (!i && !l) return [t.width, t.height];
              if (l && i) {
                var g = c ? r : n * s,
                  w = u ? n : r / s;
                return [g, w];
              }
              var Q = c ? r : t.width,
                f = u ? n : t.height;
              return [Q, f];
            }
            if (i) {
              var d = 0,
                C = 0;
              return (Jt(a) ? (d = Ar(a, t.width)) : Jt(o) && (C = Ar(o, t.height)), UB(a) ? (d = C * s) : (o && !UB(o)) || (C = d / s), [d, C]);
            }
            var h = null,
              F = null;
            if (
              (Jt(a) ? (h = Ar(a, t.width)) : o && Jt(o) && (F = Ar(o, t.height)),
              null === h || (o && !UB(o)) || (F = c && u ? (h / r) * n : t.height),
              null !== F && UB(a) && (h = c && u ? (F / n) * r : t.width),
              null !== h && null !== F)
            )
              return [h, F];
            throw new Error("Unable to calculate background-size for element");
          },
          vB = function (A, e) {
            var t = A[e];
            return "undefined" === typeof t ? A[0] : t;
          },
          bB = function (A, e, t, r, n) {
            var s = e[0],
              a = e[1],
              o = t[0],
              i = t[1];
            switch (A) {
              case 2:
                return [
                  new Si(Math.round(r.left), Math.round(r.top + a)),
                  new Si(Math.round(r.left + r.width), Math.round(r.top + a)),
                  new Si(Math.round(r.left + r.width), Math.round(i + r.top + a)),
                  new Si(Math.round(r.left), Math.round(i + r.top + a)),
                ];
              case 3:
                return [
                  new Si(Math.round(r.left + s), Math.round(r.top)),
                  new Si(Math.round(r.left + s + o), Math.round(r.top)),
                  new Si(Math.round(r.left + s + o), Math.round(r.height + r.top)),
                  new Si(Math.round(r.left + s), Math.round(r.height + r.top)),
                ];
              case 1:
                return [
                  new Si(Math.round(r.left + s), Math.round(r.top + a)),
                  new Si(Math.round(r.left + s + o), Math.round(r.top + a)),
                  new Si(Math.round(r.left + s + o), Math.round(r.top + a + i)),
                  new Si(Math.round(r.left + s), Math.round(r.top + a + i)),
                ];
              default:
                return [
                  new Si(Math.round(n.left), Math.round(n.top)),
                  new Si(Math.round(n.left + n.width), Math.round(n.top)),
                  new Si(Math.round(n.left + n.width), Math.round(n.height + n.top)),
                  new Si(Math.round(n.left), Math.round(n.height + n.top)),
                ];
            }
          },
          yB = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          mB = "Hidden Text",
          EB = (function () {
            function A(A) {
              ((this._data = {}), (this._document = A));
            }
            return (
              (A.prototype.parseMetrics = function (A, e) {
                var t = this._document.createElement("div"),
                  r = this._document.createElement("img"),
                  n = this._document.createElement("span"),
                  s = this._document.body;
                ((t.style.visibility = "hidden"),
                  (t.style.fontFamily = A),
                  (t.style.fontSize = e),
                  (t.style.margin = "0"),
                  (t.style.padding = "0"),
                  (t.style.whiteSpace = "nowrap"),
                  s.appendChild(t),
                  (r.src = yB),
                  (r.width = 1),
                  (r.height = 1),
                  (r.style.margin = "0"),
                  (r.style.padding = "0"),
                  (r.style.verticalAlign = "baseline"),
                  (n.style.fontFamily = A),
                  (n.style.fontSize = e),
                  (n.style.margin = "0"),
                  (n.style.padding = "0"),
                  n.appendChild(this._document.createTextNode(mB)),
                  t.appendChild(n),
                  t.appendChild(r));
                var a = r.offsetTop - n.offsetTop + 2;
                (t.removeChild(n), t.appendChild(this._document.createTextNode(mB)), (t.style.lineHeight = "normal"), (r.style.verticalAlign = "super"));
                var o = r.offsetTop - t.offsetTop + 2;
                return (s.removeChild(t), { baseline: a, middle: o });
              }),
              (A.prototype.getMetrics = function (A, e) {
                var t = A + " " + e;
                return ("undefined" === typeof this._data[t] && (this._data[t] = this.parseMetrics(A, e)), this._data[t]);
              }),
              A
            );
          })(),
          IB = (function () {
            function A(A, e) {
              ((this.context = A), (this.options = e));
            }
            return A;
          })(),
          LB = 1e4,
          xB = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              return (
                (r._activeEffects = []),
                (r.canvas = t.canvas ? t.canvas : document.createElement("canvas")),
                (r.ctx = r.canvas.getContext("2d")),
                t.canvas ||
                  ((r.canvas.width = Math.floor(t.width * t.scale)),
                  (r.canvas.height = Math.floor(t.height * t.scale)),
                  (r.canvas.style.width = t.width + "px"),
                  (r.canvas.style.height = t.height + "px")),
                (r.fontMetrics = new EB(document)),
                r.ctx.scale(r.options.scale, r.options.scale),
                r.ctx.translate(-t.x, -t.y),
                (r.ctx.textBaseline = "bottom"),
                (r._activeEffects = []),
                r.context.logger.debug("Canvas renderer initialized (" + t.width + "x" + t.height + ") with scale " + t.scale),
                r
              );
            }
            return (
              e(t, A),
              (t.prototype.applyEffects = function (A) {
                var e = this;
                while (this._activeEffects.length) this.popEffect();
                A.forEach(function (A) {
                  return e.applyEffect(A);
                });
              }),
              (t.prototype.applyEffect = function (A) {
                (this.ctx.save(),
                  tB(A) && (this.ctx.globalAlpha = A.opacity),
                  AB(A) &&
                    (this.ctx.translate(A.offsetX, A.offsetY),
                    this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]),
                    this.ctx.translate(-A.offsetX, -A.offsetY)),
                  eB(A) && (this.path(A.path), this.ctx.clip()),
                  this._activeEffects.push(A));
              }),
              (t.prototype.popEffect = function () {
                (this._activeEffects.pop(), this.ctx.restore());
              }),
              (t.prototype.renderStack = function (A) {
                return r(this, void 0, void 0, function () {
                  var e;
                  return n(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return ((e = A.element.container.styles), e.isVisible() ? [4, this.renderStackContent(A)] : [3, 2]);
                      case 1:
                        (t.sent(), (t.label = 2));
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.renderNode = function (A) {
                return r(this, void 0, void 0, function () {
                  return n(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (ds(A.container.flags, 16), A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3]);
                      case 1:
                        return (e.sent(), [4, this.renderNodeContent(A)]);
                      case 2:
                        (e.sent(), (e.label = 3));
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.renderTextWithLetterSpacing = function (A, e, t) {
                var r = this;
                if (0 === e) this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + t);
                else {
                  var n = Wa(A.text);
                  n.reduce(function (e, n) {
                    return (r.ctx.fillText(n, e, A.bounds.top + t), e + r.ctx.measureText(n).width);
                  }, A.bounds.left);
                }
              }),
              (t.prototype.createFontStyle = function (A) {
                var e = A.fontVariant
                    .filter(function (A) {
                      return "normal" === A || "small-caps" === A;
                    })
                    .join(""),
                  t = TB(A.fontFamily).join(", "),
                  r = Gt(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
                return [[A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r];
              }),
              (t.prototype.renderTextNode = function (A, e) {
                return r(this, void 0, void 0, function () {
                  var t,
                    r,
                    s,
                    a,
                    o,
                    i,
                    B,
                    c,
                    u = this;
                  return n(this, function (n) {
                    return (
                      (t = this.createFontStyle(e)),
                      (r = t[0]),
                      (s = t[1]),
                      (a = t[2]),
                      (this.ctx.font = r),
                      (this.ctx.direction = 1 === e.direction ? "rtl" : "ltr"),
                      (this.ctx.textAlign = "left"),
                      (this.ctx.textBaseline = "alphabetic"),
                      (o = this.fontMetrics.getMetrics(s, a)),
                      (i = o.baseline),
                      (B = o.middle),
                      (c = e.paintOrder),
                      A.textBounds.forEach(function (A) {
                        c.forEach(function (t) {
                          switch (t) {
                            case 0:
                              ((u.ctx.fillStyle = ur(e.color)), u.renderTextWithLetterSpacing(A, e.letterSpacing, i));
                              var r = e.textShadow;
                              (r.length &&
                                A.text.trim().length &&
                                (r
                                  .slice(0)
                                  .reverse()
                                  .forEach(function (t) {
                                    ((u.ctx.shadowColor = ur(t.color)),
                                      (u.ctx.shadowOffsetX = t.offsetX.number * u.options.scale),
                                      (u.ctx.shadowOffsetY = t.offsetY.number * u.options.scale),
                                      (u.ctx.shadowBlur = t.blur.number),
                                      u.renderTextWithLetterSpacing(A, e.letterSpacing, i));
                                  }),
                                (u.ctx.shadowColor = ""),
                                (u.ctx.shadowOffsetX = 0),
                                (u.ctx.shadowOffsetY = 0),
                                (u.ctx.shadowBlur = 0)),
                                e.textDecorationLine.length &&
                                  ((u.ctx.fillStyle = ur(e.textDecorationColor || e.color)),
                                  e.textDecorationLine.forEach(function (e) {
                                    switch (e) {
                                      case 1:
                                        u.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + i), A.bounds.width, 1);
                                        break;
                                      case 2:
                                        u.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                                        break;
                                      case 3:
                                        u.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + B), A.bounds.width, 1);
                                        break;
                                    }
                                  })));
                              break;
                            case 1:
                              (e.webkitTextStrokeWidth &&
                                A.text.trim().length &&
                                ((u.ctx.strokeStyle = ur(e.webkitTextStrokeColor)),
                                (u.ctx.lineWidth = e.webkitTextStrokeWidth),
                                (u.ctx.lineJoin = window.chrome ? "miter" : "round"),
                                u.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + i)),
                                (u.ctx.strokeStyle = ""),
                                (u.ctx.lineWidth = 0),
                                (u.ctx.lineJoin = "miter"));
                              break;
                          }
                        });
                      }),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.renderReplacedElement = function (A, e, t) {
                if (t && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
                  var r = dB(A),
                    n = Yi(e);
                  (this.path(n),
                    this.ctx.save(),
                    this.ctx.clip(),
                    this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height),
                    this.ctx.restore());
                }
              }),
              (t.prototype.renderNodeContent = function (A) {
                return r(this, void 0, void 0, function () {
                  var e, r, s, o, i, B, c, u, l, g, w, Q, f, d, C, h, F, U, p;
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        (this.applyEffects(A.getEffects(4)), (e = A.container), (r = A.curves), (s = e.styles), (o = 0), (i = e.textNodes), (n.label = 1));
                      case 1:
                        return o < i.length ? ((B = i[o]), [4, this.renderTextNode(B, s)]) : [3, 4];
                      case 2:
                        (n.sent(), (n.label = 3));
                      case 3:
                        return (o++, [3, 1]);
                      case 4:
                        if (!(e instanceof no)) return [3, 8];
                        n.label = 5;
                      case 5:
                        return (n.trys.push([5, 7, , 8]), [4, this.context.cache.match(e.src)]);
                      case 6:
                        return ((h = n.sent()), this.renderReplacedElement(e, r, h), [3, 8]);
                      case 7:
                        return (n.sent(), this.context.logger.error("Error loading image " + e.src), [3, 8]);
                      case 8:
                        if ((e instanceof so && this.renderReplacedElement(e, r, e.canvas), !(e instanceof ao))) return [3, 12];
                        n.label = 9;
                      case 9:
                        return (n.trys.push([9, 11, , 12]), [4, this.context.cache.match(e.svg)]);
                      case 10:
                        return ((h = n.sent()), this.renderReplacedElement(e, r, h), [3, 12]);
                      case 11:
                        return (n.sent(), this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)), [3, 12]);
                      case 12:
                        return e instanceof Uo && e.tree
                          ? ((c = new t(this.context, {
                              scale: this.options.scale,
                              backgroundColor: e.backgroundColor,
                              x: 0,
                              y: 0,
                              width: e.width,
                              height: e.height,
                            })),
                            [4, c.render(e.tree)])
                          : [3, 14];
                      case 13:
                        ((u = n.sent()),
                          e.width && e.height && this.ctx.drawImage(u, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height),
                          (n.label = 14));
                      case 14:
                        if (
                          (e instanceof Co &&
                            ((l = Math.min(e.bounds.width, e.bounds.height)),
                            e.type === go
                              ? e.checked &&
                                (this.ctx.save(),
                                this.path([
                                  new Si(e.bounds.left + 0.39363 * l, e.bounds.top + 0.79 * l),
                                  new Si(e.bounds.left + 0.16 * l, e.bounds.top + 0.5549 * l),
                                  new Si(e.bounds.left + 0.27347 * l, e.bounds.top + 0.44071 * l),
                                  new Si(e.bounds.left + 0.39694 * l, e.bounds.top + 0.5649 * l),
                                  new Si(e.bounds.left + 0.72983 * l, e.bounds.top + 0.23 * l),
                                  new Si(e.bounds.left + 0.84 * l, e.bounds.top + 0.34085 * l),
                                  new Si(e.bounds.left + 0.39363 * l, e.bounds.top + 0.79 * l),
                                ]),
                                (this.ctx.fillStyle = ur(fo)),
                                this.ctx.fill(),
                                this.ctx.restore())
                              : e.type === wo &&
                                e.checked &&
                                (this.ctx.save(),
                                this.ctx.beginPath(),
                                this.ctx.arc(e.bounds.left + l / 2, e.bounds.top + l / 2, l / 4, 0, 2 * Math.PI, !0),
                                (this.ctx.fillStyle = ur(fo)),
                                this.ctx.fill(),
                                this.ctx.restore())),
                          DB(e) && e.value.length)
                        ) {
                          switch (
                            ((g = this.createFontStyle(s)),
                            (U = g[0]),
                            (w = g[1]),
                            (Q = this.fontMetrics.getMetrics(U, w).baseline),
                            (this.ctx.font = U),
                            (this.ctx.fillStyle = ur(s.color)),
                            (this.ctx.textBaseline = "alphabetic"),
                            (this.ctx.textAlign = OB(e.styles.textAlign)),
                            (p = dB(e)),
                            (f = 0),
                            e.styles.textAlign)
                          ) {
                            case 1:
                              f += p.width / 2;
                              break;
                            case 2:
                              f += p.width;
                              break;
                          }
                          ((d = p.add(f, 0, 0, -p.height / 2 + 1)),
                            this.ctx.save(),
                            this.path([
                              new Si(p.left, p.top),
                              new Si(p.left + p.width, p.top),
                              new Si(p.left + p.width, p.top + p.height),
                              new Si(p.left, p.top + p.height),
                            ]),
                            this.ctx.clip(),
                            this.renderTextWithLetterSpacing(new ja(e.value, d), s.letterSpacing, Q),
                            this.ctx.restore(),
                            (this.ctx.textBaseline = "alphabetic"),
                            (this.ctx.textAlign = "left"));
                        }
                        if (!ds(e.styles.display, 2048)) return [3, 20];
                        if (null === e.styles.listStyleImage) return [3, 19];
                        if (((C = e.styles.listStyleImage), 0 !== C.type)) return [3, 18];
                        ((h = void 0), (F = C.url), (n.label = 15));
                      case 15:
                        return (n.trys.push([15, 17, , 18]), [4, this.context.cache.match(F)]);
                      case 16:
                        return ((h = n.sent()), this.ctx.drawImage(h, e.bounds.left - (h.width + 10), e.bounds.top), [3, 18]);
                      case 17:
                        return (n.sent(), this.context.logger.error("Error loading list-style-image " + F), [3, 18]);
                      case 18:
                        return [3, 20];
                      case 19:
                        (A.listValue &&
                          -1 !== e.styles.listStyleType &&
                          ((U = this.createFontStyle(s)[0]),
                          (this.ctx.font = U),
                          (this.ctx.fillStyle = ur(s.color)),
                          (this.ctx.textBaseline = "middle"),
                          (this.ctx.textAlign = "right"),
                          (p = new a(
                            e.bounds.left,
                            e.bounds.top + Ar(e.styles.paddingTop, e.bounds.width),
                            e.bounds.width,
                            Dn(s.lineHeight, s.fontSize.number) / 2 + 1,
                          )),
                          this.renderTextWithLetterSpacing(new ja(A.listValue, p), s.letterSpacing, Dn(s.lineHeight, s.fontSize.number) / 2 + 2),
                          (this.ctx.textBaseline = "bottom"),
                          (this.ctx.textAlign = "left")),
                          (n.label = 20));
                      case 20:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.renderStackContent = function (A) {
                return r(this, void 0, void 0, function () {
                  var e, t, r, s, a, o, i, B, c, u, l, g, w, Q, f;
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (ds(A.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(A.element)]);
                      case 1:
                        (n.sent(), (e = 0), (t = A.negativeZIndex), (n.label = 2));
                      case 2:
                        return e < t.length ? ((f = t[e]), [4, this.renderStack(f)]) : [3, 5];
                      case 3:
                        (n.sent(), (n.label = 4));
                      case 4:
                        return (e++, [3, 2]);
                      case 5:
                        return [4, this.renderNodeContent(A.element)];
                      case 6:
                        (n.sent(), (r = 0), (s = A.nonInlineLevel), (n.label = 7));
                      case 7:
                        return r < s.length ? ((f = s[r]), [4, this.renderNode(f)]) : [3, 10];
                      case 8:
                        (n.sent(), (n.label = 9));
                      case 9:
                        return (r++, [3, 7]);
                      case 10:
                        ((a = 0), (o = A.nonPositionedFloats), (n.label = 11));
                      case 11:
                        return a < o.length ? ((f = o[a]), [4, this.renderStack(f)]) : [3, 14];
                      case 12:
                        (n.sent(), (n.label = 13));
                      case 13:
                        return (a++, [3, 11]);
                      case 14:
                        ((i = 0), (B = A.nonPositionedInlineLevel), (n.label = 15));
                      case 15:
                        return i < B.length ? ((f = B[i]), [4, this.renderStack(f)]) : [3, 18];
                      case 16:
                        (n.sent(), (n.label = 17));
                      case 17:
                        return (i++, [3, 15]);
                      case 18:
                        ((c = 0), (u = A.inlineLevel), (n.label = 19));
                      case 19:
                        return c < u.length ? ((f = u[c]), [4, this.renderNode(f)]) : [3, 22];
                      case 20:
                        (n.sent(), (n.label = 21));
                      case 21:
                        return (c++, [3, 19]);
                      case 22:
                        ((l = 0), (g = A.zeroOrAutoZIndexOrTransformedOrOpacity), (n.label = 23));
                      case 23:
                        return l < g.length ? ((f = g[l]), [4, this.renderStack(f)]) : [3, 26];
                      case 24:
                        (n.sent(), (n.label = 25));
                      case 25:
                        return (l++, [3, 23]);
                      case 26:
                        ((w = 0), (Q = A.positiveZIndex), (n.label = 27));
                      case 27:
                        return w < Q.length ? ((f = Q[w]), [4, this.renderStack(f)]) : [3, 30];
                      case 28:
                        (n.sent(), (n.label = 29));
                      case 29:
                        return (w++, [3, 27]);
                      case 30:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.mask = function (A) {
                (this.ctx.beginPath(),
                  this.ctx.moveTo(0, 0),
                  this.ctx.lineTo(this.canvas.width, 0),
                  this.ctx.lineTo(this.canvas.width, this.canvas.height),
                  this.ctx.lineTo(0, this.canvas.height),
                  this.ctx.lineTo(0, 0),
                  this.formatPath(A.slice(0).reverse()),
                  this.ctx.closePath());
              }),
              (t.prototype.path = function (A) {
                (this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath());
              }),
              (t.prototype.formatPath = function (A) {
                var e = this;
                A.forEach(function (A, t) {
                  var r = ji(A) ? A.start : A;
                  (0 === t ? e.ctx.moveTo(r.x, r.y) : e.ctx.lineTo(r.x, r.y),
                    ji(A) && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y));
                });
              }),
              (t.prototype.renderRepeat = function (A, e, t, r) {
                (this.path(A), (this.ctx.fillStyle = e), this.ctx.translate(t, r), this.ctx.fill(), this.ctx.translate(-t, -r));
              }),
              (t.prototype.resizeImage = function (A, e, t) {
                var r;
                if (A.width === e && A.height === t) return A;
                var n = null !== (r = this.canvas.ownerDocument) && void 0 !== r ? r : document,
                  s = n.createElement("canvas");
                ((s.width = Math.max(1, e)), (s.height = Math.max(1, t)));
                var a = s.getContext("2d");
                return (a.drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), s);
              }),
              (t.prototype.renderBackgroundImage = function (A) {
                return r(this, void 0, void 0, function () {
                  var e, t, r, s, a, o;
                  return n(this, function (i) {
                    switch (i.label) {
                      case 0:
                        ((e = A.styles.backgroundImage.length - 1),
                          (t = function (t) {
                            var s, a, o, i, B, c, u, l, g, w, Q, f, d, C, h, F, U, p, H, v, b, y, m, E, I, L, x, D, K, O, P;
                            return n(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  if (0 !== t.type) return [3, 5];
                                  ((s = void 0), (a = t.url), (n.label = 1));
                                case 1:
                                  return (n.trys.push([1, 3, , 4]), [4, r.context.cache.match(a)]);
                                case 2:
                                  return ((s = n.sent()), [3, 4]);
                                case 3:
                                  return (n.sent(), r.context.logger.error("Error loading background-image " + a), [3, 4]);
                                case 4:
                                  return (
                                    s &&
                                      ((o = FB(A, e, [s.width, s.height, s.width / s.height])),
                                      (F = o[0]),
                                      (y = o[1]),
                                      (m = o[2]),
                                      (H = o[3]),
                                      (v = o[4]),
                                      (C = r.ctx.createPattern(r.resizeImage(s, H, v), "repeat")),
                                      r.renderRepeat(F, C, y, m)),
                                    [3, 6]
                                  );
                                case 5:
                                  (Sr(t)
                                    ? ((i = FB(A, e, [null, null, null])),
                                      (F = i[0]),
                                      (y = i[1]),
                                      (m = i[2]),
                                      (H = i[3]),
                                      (v = i[4]),
                                      (B = br(t.angle, H, v)),
                                      (c = B[0]),
                                      (u = B[1]),
                                      (l = B[2]),
                                      (g = B[3]),
                                      (w = B[4]),
                                      (Q = document.createElement("canvas")),
                                      (Q.width = H),
                                      (Q.height = v),
                                      (f = Q.getContext("2d")),
                                      (d = f.createLinearGradient(u, g, l, w)),
                                      Hr(t.stops, c).forEach(function (A) {
                                        return d.addColorStop(A.stop, ur(A.color));
                                      }),
                                      (f.fillStyle = d),
                                      f.fillRect(0, 0, H, v),
                                      H > 0 && v > 0 && ((C = r.ctx.createPattern(Q, "repeat")), r.renderRepeat(F, C, y, m)))
                                    : Vr(t) &&
                                      ((h = FB(A, e, [null, null, null])),
                                      (F = h[0]),
                                      (U = h[1]),
                                      (p = h[2]),
                                      (H = h[3]),
                                      (v = h[4]),
                                      (b = 0 === t.position.length ? [qt] : t.position),
                                      (y = Ar(b[0], H)),
                                      (m = Ar(b[b.length - 1], v)),
                                      (E = Er(t, y, m, H, v)),
                                      (I = E[0]),
                                      (L = E[1]),
                                      I > 0 &&
                                        L > 0 &&
                                        ((x = r.ctx.createRadialGradient(U + y, p + m, 0, U + y, p + m, I)),
                                        Hr(t.stops, 2 * I).forEach(function (A) {
                                          return x.addColorStop(A.stop, ur(A.color));
                                        }),
                                        r.path(F),
                                        (r.ctx.fillStyle = x),
                                        I !== L
                                          ? ((D = A.bounds.left + 0.5 * A.bounds.width),
                                            (K = A.bounds.top + 0.5 * A.bounds.height),
                                            (O = L / I),
                                            (P = 1 / O),
                                            r.ctx.save(),
                                            r.ctx.translate(D, K),
                                            r.ctx.transform(1, 0, 0, O, 0, 0),
                                            r.ctx.translate(-D, -K),
                                            r.ctx.fillRect(U, P * (p - K) + K, H, v * P),
                                            r.ctx.restore())
                                          : r.ctx.fill())),
                                    (n.label = 6));
                                case 6:
                                  return (e--, [2]);
                              }
                            });
                          }),
                          (r = this),
                          (s = 0),
                          (a = A.styles.backgroundImage.slice(0).reverse()),
                          (i.label = 1));
                      case 1:
                        return s < a.length ? ((o = a[s]), [5, t(o)]) : [3, 4];
                      case 2:
                        (i.sent(), (i.label = 3));
                      case 3:
                        return (s++, [3, 1]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.renderSolidBorder = function (A, e, t) {
                return r(this, void 0, void 0, function () {
                  return n(this, function (r) {
                    return (this.path(cB(t, e)), (this.ctx.fillStyle = ur(A)), this.ctx.fill(), [2]);
                  });
                });
              }),
              (t.prototype.renderDoubleBorder = function (A, e, t, s) {
                return r(this, void 0, void 0, function () {
                  var r, a;
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return e < 3 ? [4, this.renderSolidBorder(A, t, s)] : [3, 2];
                      case 1:
                        return (n.sent(), [2]);
                      case 2:
                        return (
                          (r = uB(s, t)),
                          this.path(r),
                          (this.ctx.fillStyle = ur(A)),
                          this.ctx.fill(),
                          (a = lB(s, t)),
                          this.path(a),
                          this.ctx.fill(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.renderNodeBackgroundAndBorders = function (A) {
                return r(this, void 0, void 0, function () {
                  var e,
                    t,
                    r,
                    s,
                    a,
                    o,
                    i,
                    B,
                    c = this;
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          this.applyEffects(A.getEffects(2)),
                          (e = A.container.styles),
                          (t = !cr(e.backgroundColor) || e.backgroundImage.length),
                          (r = [
                            { style: e.borderTopStyle, color: e.borderTopColor, width: e.borderTopWidth },
                            { style: e.borderRightStyle, color: e.borderRightColor, width: e.borderRightWidth },
                            { style: e.borderBottomStyle, color: e.borderBottomColor, width: e.borderBottomWidth },
                            { style: e.borderLeftStyle, color: e.borderLeftColor, width: e.borderLeftWidth },
                          ]),
                          (s = KB(vB(e.backgroundClip, 0), A.curves)),
                          t || e.boxShadow.length
                            ? (this.ctx.save(),
                              this.path(s),
                              this.ctx.clip(),
                              cr(e.backgroundColor) || ((this.ctx.fillStyle = ur(e.backgroundColor)), this.ctx.fill()),
                              [4, this.renderBackgroundImage(A.container)])
                            : [3, 2]
                        );
                      case 1:
                        (n.sent(),
                          this.ctx.restore(),
                          e.boxShadow
                            .slice(0)
                            .reverse()
                            .forEach(function (e) {
                              c.ctx.save();
                              var t = Ji(A.curves),
                                r = e.inset ? 0 : LB,
                                n = nB(
                                  t,
                                  -r + (e.inset ? 1 : -1) * e.spread.number,
                                  (e.inset ? 1 : -1) * e.spread.number,
                                  e.spread.number * (e.inset ? -2 : 2),
                                  e.spread.number * (e.inset ? -2 : 2),
                                );
                              (e.inset ? (c.path(t), c.ctx.clip(), c.mask(n)) : (c.mask(t), c.ctx.clip(), c.path(n)),
                                (c.ctx.shadowOffsetX = e.offsetX.number + r),
                                (c.ctx.shadowOffsetY = e.offsetY.number),
                                (c.ctx.shadowColor = ur(e.color)),
                                (c.ctx.shadowBlur = e.blur.number),
                                (c.ctx.fillStyle = e.inset ? ur(e.color) : "rgba(0,0,0,1)"),
                                c.ctx.fill(),
                                c.ctx.restore());
                            }),
                          (n.label = 2));
                      case 2:
                        ((a = 0), (o = 0), (i = r), (n.label = 3));
                      case 3:
                        return o < i.length
                          ? ((B = i[o]),
                            0 !== B.style && !cr(B.color) && B.width > 0
                              ? 2 !== B.style
                                ? [3, 5]
                                : [4, this.renderDashedDottedBorder(B.color, B.width, a, A.curves, 2)]
                              : [3, 11])
                          : [3, 13];
                      case 4:
                        return (n.sent(), [3, 11]);
                      case 5:
                        return 3 !== B.style ? [3, 7] : [4, this.renderDashedDottedBorder(B.color, B.width, a, A.curves, 3)];
                      case 6:
                        return (n.sent(), [3, 11]);
                      case 7:
                        return 4 !== B.style ? [3, 9] : [4, this.renderDoubleBorder(B.color, B.width, a, A.curves)];
                      case 8:
                        return (n.sent(), [3, 11]);
                      case 9:
                        return [4, this.renderSolidBorder(B.color, a, A.curves)];
                      case 10:
                        (n.sent(), (n.label = 11));
                      case 11:
                        (a++, (n.label = 12));
                      case 12:
                        return (o++, [3, 3]);
                      case 13:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.renderDashedDottedBorder = function (A, e, t, s, a) {
                return r(this, void 0, void 0, function () {
                  var r, o, i, B, c, u, l, g, w, Q, f, d, C, h, F, U;
                  return n(this, function (n) {
                    return (
                      this.ctx.save(),
                      (r = gB(s, t)),
                      (o = cB(s, t)),
                      2 === a && (this.path(o), this.ctx.clip()),
                      ji(o[0]) ? ((i = o[0].start.x), (B = o[0].start.y)) : ((i = o[0].x), (B = o[0].y)),
                      ji(o[1]) ? ((c = o[1].end.x), (u = o[1].end.y)) : ((c = o[1].x), (u = o[1].y)),
                      (l = 0 === t || 2 === t ? Math.abs(i - c) : Math.abs(B - u)),
                      this.ctx.beginPath(),
                      3 === a ? this.formatPath(r) : this.formatPath(o.slice(0, 2)),
                      (g = e < 3 ? 3 * e : 2 * e),
                      (w = e < 3 ? 2 * e : e),
                      3 === a && ((g = e), (w = e)),
                      (Q = !0),
                      l <= 2 * g
                        ? (Q = !1)
                        : l <= 2 * g + w
                          ? ((f = l / (2 * g + w)), (g *= f), (w *= f))
                          : ((d = Math.floor((l + w) / (g + w))),
                            (C = (l - d * g) / (d - 1)),
                            (h = (l - (d + 1) * g) / d),
                            (w = h <= 0 || Math.abs(w - C) < Math.abs(w - h) ? C : h)),
                      Q && (3 === a ? this.ctx.setLineDash([0, g + w]) : this.ctx.setLineDash([g, w])),
                      3 === a ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = e)) : (this.ctx.lineWidth = 2 * e + 1.1),
                      (this.ctx.strokeStyle = ur(A)),
                      this.ctx.stroke(),
                      this.ctx.setLineDash([]),
                      2 === a &&
                        (ji(o[0]) &&
                          ((F = o[3]),
                          (U = o[0]),
                          this.ctx.beginPath(),
                          this.formatPath([new Si(F.end.x, F.end.y), new Si(U.start.x, U.start.y)]),
                          this.ctx.stroke()),
                        ji(o[1]) &&
                          ((F = o[1]),
                          (U = o[2]),
                          this.ctx.beginPath(),
                          this.formatPath([new Si(F.end.x, F.end.y), new Si(U.start.x, U.start.y)]),
                          this.ctx.stroke())),
                      this.ctx.restore(),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.render = function (A) {
                return r(this, void 0, void 0, function () {
                  var e;
                  return n(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          this.options.backgroundColor &&
                            ((this.ctx.fillStyle = ur(this.options.backgroundColor)),
                            this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                          (e = BB(A)),
                          [4, this.renderStack(e)]
                        );
                      case 1:
                        return (t.sent(), this.applyEffects([]), [2, this.canvas]);
                    }
                  });
                });
              }),
              t
            );
          })(IB),
          DB = function (A) {
            return A instanceof Fo || A instanceof ho || (A instanceof Co && A.type !== wo && A.type !== go);
          },
          KB = function (A, e) {
            switch (A) {
              case 0:
                return Ji(e);
              case 2:
                return Wi(e);
              case 1:
              default:
                return Yi(e);
            }
          },
          OB = function (A) {
            switch (A) {
              case 1:
                return "center";
              case 2:
                return "right";
              case 0:
              default:
                return "left";
            }
          },
          PB = ["-apple-system", "system-ui"],
          TB = function (A) {
            return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
              ? A.filter(function (A) {
                  return -1 === PB.indexOf(A);
                })
              : A;
          },
          XB = (function (A) {
            function t(e, t) {
              var r = A.call(this, e, t) || this;
              return (
                (r.canvas = t.canvas ? t.canvas : document.createElement("canvas")),
                (r.ctx = r.canvas.getContext("2d")),
                (r.options = t),
                (r.canvas.width = Math.floor(t.width * t.scale)),
                (r.canvas.height = Math.floor(t.height * t.scale)),
                (r.canvas.style.width = t.width + "px"),
                (r.canvas.style.height = t.height + "px"),
                r.ctx.scale(r.options.scale, r.options.scale),
                r.ctx.translate(-t.x, -t.y),
                r.context.logger.debug(
                  "EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale,
                ),
                r
              );
            }
            return (
              e(t, A),
              (t.prototype.render = function (A) {
                return r(this, void 0, void 0, function () {
                  var e, t;
                  return n(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (e = Sa(
                            this.options.width * this.options.scale,
                            this.options.height * this.options.scale,
                            this.options.scale,
                            this.options.scale,
                            A,
                          )),
                          [4, GB(e)]
                        );
                      case 1:
                        return (
                          (t = r.sent()),
                          this.options.backgroundColor &&
                            ((this.ctx.fillStyle = ur(this.options.backgroundColor)),
                            this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                          this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                          [2, this.canvas]
                        );
                    }
                  });
                });
              }),
              t
            );
          })(IB),
          GB = function (A) {
            return new Promise(function (e, t) {
              var r = new Image();
              ((r.onload = function () {
                e(r);
              }),
                (r.onerror = t),
                (r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A))));
            });
          },
          NB = (function () {
            function A(A) {
              var e = A.id,
                t = A.enabled;
              ((this.id = e), (this.enabled = t), (this.start = Date.now()));
            }
            return (
              (A.prototype.debug = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled &&
                  ("undefined" !== typeof window && window.console && "function" === typeof console.debug
                    ? console.debug.apply(console, s([this.id, this.getTime() + "ms"], A))
                    : this.info.apply(this, A));
              }),
              (A.prototype.getTime = function () {
                return Date.now() - this.start;
              }),
              (A.prototype.info = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled &&
                  "undefined" !== typeof window &&
                  window.console &&
                  "function" === typeof console.info &&
                  console.info.apply(console, s([this.id, this.getTime() + "ms"], A));
              }),
              (A.prototype.warn = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled &&
                  ("undefined" !== typeof window && window.console && "function" === typeof console.warn
                    ? console.warn.apply(console, s([this.id, this.getTime() + "ms"], A))
                    : this.info.apply(this, A));
              }),
              (A.prototype.error = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled &&
                  ("undefined" !== typeof window && window.console && "function" === typeof console.error
                    ? console.error.apply(console, s([this.id, this.getTime() + "ms"], A))
                    : this.info.apply(this, A));
              }),
              (A.instances = {}),
              A
            );
          })(),
          kB = (function () {
            function A(e, t) {
              var r;
              ((this.windowBounds = t),
                (this.instanceName = "#" + A.instanceCount++),
                (this.logger = new NB({ id: this.instanceName, enabled: e.logging })),
                (this.cache = null !== (r = e.cache) && void 0 !== r ? r : new Ki(this, e)));
            }
            return ((A.instanceCount = 1), A);
          })(),
          MB = function (A, e) {
            return (void 0 === e && (e = {}), SB(A, e));
          };
        "undefined" !== typeof window && Di.setContext(window);
        var SB = function (A, e) {
            return r(void 0, void 0, void 0, function () {
              var r, s, B, c, u, l, g, w, Q, f, d, C, h, F, U, p, H, v, b, y, m, E, I, L, x, D, K, O, P, T, X, G, N, k, M, S, V, R, j;
              return n(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!A || "object" !== typeof A) return [2, Promise.reject("Invalid element provided as first argument")];
                    if (((r = A.ownerDocument), !r)) throw new Error("Element is not attached to a Document");
                    if (((s = r.defaultView), !s)) throw new Error("Document is not attached to a Window");
                    return (
                      (B = {
                        allowTaint: null !== (I = e.allowTaint) && void 0 !== I && I,
                        imageTimeout: null !== (L = e.imageTimeout) && void 0 !== L ? L : 15e3,
                        proxy: e.proxy,
                        useCORS: null !== (x = e.useCORS) && void 0 !== x && x,
                      }),
                      (c = t({ logging: null === (D = e.logging) || void 0 === D || D, cache: e.cache }, B)),
                      (u = {
                        windowWidth: null !== (K = e.windowWidth) && void 0 !== K ? K : s.innerWidth,
                        windowHeight: null !== (O = e.windowHeight) && void 0 !== O ? O : s.innerHeight,
                        scrollX: null !== (P = e.scrollX) && void 0 !== P ? P : s.pageXOffset,
                        scrollY: null !== (T = e.scrollY) && void 0 !== T ? T : s.pageYOffset,
                      }),
                      (l = new a(u.scrollX, u.scrollY, u.windowWidth, u.windowHeight)),
                      (g = new kB(c, l)),
                      (w = null !== (X = e.foreignObjectRendering) && void 0 !== X && X),
                      (Q = {
                        allowTaint: null !== (G = e.allowTaint) && void 0 !== G && G,
                        onclone: e.onclone,
                        ignoreElements: e.ignoreElements,
                        inlineImages: w,
                        copyStyles: w,
                      }),
                      g.logger.debug("Starting document clone with size " + l.width + "x" + l.height + " scrolled to " + -l.left + "," + -l.top),
                      (f = new wi(g, A, Q)),
                      (d = f.clonedReferenceElement),
                      d ? [4, f.toIFrame(r, l)] : [2, Promise.reject("Unable to find element in cloned iframe")]
                    );
                  case 1:
                    return (
                      (C = n.sent()),
                      (h = Xo(d) || Po(d) ? i(d.ownerDocument) : o(g, d)),
                      (F = h.width),
                      (U = h.height),
                      (p = h.left),
                      (H = h.top),
                      (v = VB(g, d, e.backgroundColor)),
                      (b = {
                        canvas: e.canvas,
                        backgroundColor: v,
                        scale: null !== (k = null !== (N = e.scale) && void 0 !== N ? N : s.devicePixelRatio) && void 0 !== k ? k : 1,
                        x: (null !== (M = e.x) && void 0 !== M ? M : 0) + p,
                        y: (null !== (S = e.y) && void 0 !== S ? S : 0) + H,
                        width: null !== (V = e.width) && void 0 !== V ? V : Math.ceil(F),
                        height: null !== (R = e.height) && void 0 !== R ? R : Math.ceil(U),
                      }),
                      w ? (g.logger.debug("Document cloned, using foreign object rendering"), (E = new XB(g, b)), [4, E.render(d)]) : [3, 3]
                    );
                  case 2:
                    return ((y = n.sent()), [3, 5]);
                  case 3:
                    return (
                      g.logger.debug("Document cloned, element located at " + p + "," + H + " with size " + F + "x" + U + " using computed rendering"),
                      g.logger.debug("Starting DOM parsing"),
                      (m = bo(g, d)),
                      v === m.styles.backgroundColor && (m.styles.backgroundColor = hr.TRANSPARENT),
                      g.logger.debug("Starting renderer for element at " + b.x + "," + b.y + " with size " + b.width + "x" + b.height),
                      (E = new xB(g, b)),
                      [4, E.render(m)]
                    );
                  case 4:
                    ((y = n.sent()), (n.label = 5));
                  case 5:
                    return (
                      (null === (j = e.removeContainer) || void 0 === j || j) &&
                        (wi.destroy(C) || g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                      g.logger.debug("Finished rendering"),
                      [2, y]
                    );
                }
              });
            });
          },
          VB = function (A, e, t) {
            var r = e.ownerDocument,
              n = r.documentElement ? Cr(A, getComputedStyle(r.documentElement).backgroundColor) : hr.TRANSPARENT,
              s = r.body ? Cr(A, getComputedStyle(r.body).backgroundColor) : hr.TRANSPARENT,
              a = "string" === typeof t ? Cr(A, t) : null === t ? hr.TRANSPARENT : 4294967295;
            return e === r.documentElement ? (cr(n) ? (cr(s) ? a : s) : n) : a;
          };
        return MB;
      });
    },
    ca97: function (A, e) {
      A.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAqElEQVQ4T+3TOw6BYRCF4QetKHRutUItRG8J7IMF6LRKhSXQ6C0ArUrtEoVErZCQX34hIvIlWlPNnOSdmZzMJFDGGFnkcPCMVKwfkY7lDdoJjDDDBFuUXsBi3LSBTqzv0IzAaNoAi0Bwjm4o2EMVZwSDKyRxQT8UzGONGoaYYhmyauRHAXtkcEUlFHwx+Z7W/+C7Jc/6d3O+Hfmnua3HkX97q0/gKXqrG76jSYtlrX9lAAAAAElFTkSuQmCC";
    },
    d175: function (A, e) {
      A.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABTUlEQVQ4T63UzyvDYRwH8Pf7+c6mnF2ERDE/2rLYUk6LAwcXtZub/AP+BSl/wco/4MphThRJqNn6Hsbi7kC5UCa+z1tbKJvx3fo+5/fz6vN8+nweIqDDgBwED1265fQ7lYHU6atKsUKDnWRs9Liar1WUz5f6vRBvAYR9IV8hotIRMUOJaPSuBp0VSgvGcL8l5DNMai4ZHz+sQefFq0USub8gAc8hh8vWOPeEwnrzsgISxmB+OjZ24BsiUDTEqgfuQXaLNAOS1tuCZM0aHOUEbRqwry0IwJNxuCTPPhAIW3IbwlSzih5JFOt7JYtuELHfetgMOgGZrb9gwEEru9EKdEOiYQwk9ADI+IYkXRtjdhueJvUCWPkXunDLacgetjOQP3rkum7XK8IFScOtYlZ2dmZy4vR7+6tYBZGUrPW1tI7jwLN6ScVHjkgqsG/kAxuDmxMJ0SpCAAAAAElFTkSuQmCC";
    },
    d28b: function (A, e, t) {
      var r = t("746f");
      r("iterator");
    },
    e01a: function (A, e, t) {
      "use strict";
      var r = t("23e7"),
        n = t("83ab"),
        s = t("da84"),
        a = t("5135"),
        o = t("861d"),
        i = t("9bf2").f,
        B = t("e893"),
        c = s.Symbol;
      if (n && "function" == typeof c && (!("description" in c.prototype) || void 0 !== c().description)) {
        var u = {},
          l = function () {
            var A = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              e = this instanceof l ? new c(A) : void 0 === A ? c() : c(A);
            return ("" === A && (u[e] = !0), e);
          };
        B(l, c);
        var g = (l.prototype = c.prototype);
        g.constructor = l;
        var w = g.toString,
          Q = "Symbol(test)" == String(c("test")),
          f = /^Symbol\((.*)\)[^)]+$/;
        (i(g, "description", {
          configurable: !0,
          get: function () {
            var A = o(this) ? this.valueOf() : this,
              e = w.call(A);
            if (a(u, A)) return "";
            var t = Q ? e.slice(7, -1) : e.replace(f, "$1");
            return "" === t ? void 0 : t;
          },
        }),
          r({ global: !0, forced: !0 }, { Symbol: l }));
      }
    },
    e6e1: function (A, e, t) {
      "use strict";
      var r = t("1d98"),
        n = t.n(r);
      n.a;
    },
    edf7: function (A, e, t) {
      "use strict";
      (t("99af"), t("96cf"));
      var r = t("89ba"),
        n = t("9f12"),
        s = t("53fe"),
        a = t("59b9"),
        o = t("482f"),
        i = (function () {
          function A() {
            Object(n["a"])(this, A);
          }
          return (
            Object(s["a"])(A, [
              {
                key: "GetFileNamesBySectionId",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (!("undefined" === typeof e || e.length < 32)) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", "");
                            case 2:
                              return (
                                (A.next = 4),
                                Object(a["a"])({ url: "".concat(o["a"].web_host, "/api/VideoPractice/GetFileNamesBySectionId/").concat(e), method: "GET" })
                              );
                            case 4:
                              if (((t = A.sent), 0 != t.code)) {
                                A.next = 7;
                                break;
                              }
                              return A.abrupt("return", t.data);
                            case 7:
                              return A.abrupt("return", []);
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: "GetVideoPracticeBySectionId",
                value: (function () {
                  var A = Object(r["a"])(
                    regeneratorRuntime.mark(function A(e) {
                      var t;
                      return regeneratorRuntime.wrap(function (A) {
                        while (1)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (!("undefined" === typeof e || e.length < 32)) {
                                A.next = 2;
                                break;
                              }
                              return A.abrupt("return", null);
                            case 2:
                              return (
                                (A.next = 4),
                                Object(a["a"])({ url: o["a"].web_host + "/api/VideoPractice/GetVideoPracticeBySectionId/".concat(e), method: "GET" })
                              );
                            case 4:
                              return ((t = A.sent), A.abrupt("return", t));
                            case 6:
                            case "end":
                              return A.stop();
                          }
                      }, A);
                    }),
                  );
                  function e(e) {
                    return A.apply(this, arguments);
                  }
                  return e;
                })(),
              },
            ]),
            A
          );
        })();
      e["a"] = new i();
    },
    f699: function (A, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return s;
      });
      var r = t("9f12"),
        n = t("2fa7"),
        s = function A() {
          (Object(r["a"])(this, A),
            Object(n["a"])(this, "id", void 0),
            Object(n["a"])(this, "name", void 0),
            Object(n["a"])(this, "taskId", void 0),
            Object(n["a"])(this, "taskNumber", void 0),
            Object(n["a"])(this, "templateIamge", void 0),
            Object(n["a"])(this, "templateId", void 0),
            Object(n["a"])(this, "templateName", void 0),
            Object(n["a"])(this, "studentId", void 0),
            Object(n["a"])(this, "studentName", void 0),
            Object(n["a"])(this, "studentNumber", void 0),
            Object(n["a"])(this, "classId", void 0),
            Object(n["a"])(this, "className", void 0),
            Object(n["a"])(this, "teacherId", void 0),
            Object(n["a"])(this, "teacherName", void 0),
            Object(n["a"])(this, "progress", void 0),
            Object(n["a"])(this, "score", void 0),
            Object(n["a"])(this, "publicScore", void 0),
            Object(n["a"])(this, "autoScore", void 0),
            Object(n["a"])(this, "duration", void 0),
            Object(n["a"])(this, "timeLeft", void 0),
            Object(n["a"])(this, "completed", void 0),
            Object(n["a"])(this, "publishTime", void 0),
            Object(n["a"])(this, "completionTime", void 0),
            Object(n["a"])(this, "teacherCommnet", void 0),
            Object(n["a"])(this, "sectionCount", void 0),
            Object(n["a"])(this, "sectionFinishedCount", void 0),
            Object(n["a"])(this, "limitTime", void 0),
            Object(n["a"])(this, "limitStartTime", void 0),
            Object(n["a"])(this, "limitEndTime", void 0),
            Object(n["a"])(this, "autoSubmit", void 0),
            Object(n["a"])(this, "caculate", void 0),
            Object(n["a"])(this, "serverTime", void 0),
            Object(n["a"])(this, "studentAvatar", void 0),
            Object(n["a"])(this, "checked", !0),
            Object(n["a"])(this, "exOrderRand", void 0),
            Object(n["a"])(this, "exOptionsOrderRand", void 0),
            Object(n["a"])(this, "hide", void 0),
            Object(n["a"])(this, "scoreDisplay", void 0),
            Object(n["a"])(this, "mode", void 0),
            Object(n["a"])(this, "hideReport", void 0));
        };
      new s();
    },
    f6d3: function (A, e, t) {
      "use strict";
      var r,
        n,
        s,
        a = function () {
          var A = this,
            e = A.$createElement,
            t = A._self._c || e;
          return t("div", { staticClass: "mark-container" }, [
            t("div", { staticClass: "stat-info" }, [A._v(" 代码列表 ")]),
            t(
              "ul",
              A._l(A.codeFiles, function (e) {
                return t("li", { key: e.id, staticClass: "file-item", attrs: { id: e.id } }, [
                  t(
                    "div",
                    [
                      t("strong", [A._v(A._s(e.name) + " "), t("span", [A._v(" （学生答案） ")])]),
                      t("codemirror", {
                        attrs: { options: A.cmOptions },
                        model: {
                          value: e.answer,
                          callback: function (t) {
                            A.$set(e, "answer", t);
                          },
                          expression: "cfile.answer",
                        },
                      }),
                      t("strong", [A._v(A._s(e.name) + " "), t("span", [A._v(" （参考答案） ")])]),
                      t("codemirror", {
                        attrs: { options: A.cmOptions },
                        model: {
                          value: e.content,
                          callback: function (t) {
                            A.$set(e, "content", t);
                          },
                          expression: "cfile.content",
                        },
                      }),
                    ],
                    1,
                  ),
                ]);
              }),
              0,
            ),
            t("div"),
          ]);
        },
        o = [],
        i = (t("a4d3"), t("e01a"), t("99af"), t("4de4"), t("4160"), t("b0c0"), t("ac1f"), t("159b"), t("96cf"), t("89ba")),
        B = t("9f12"),
        c = t("53fe"),
        u = t("8b83"),
        l = t("c65a"),
        g = t("9aa6"),
        w = t("c03e"),
        Q = t("2fa7"),
        f = t("9ab4"),
        d = t("60a3"),
        C = t("535f"),
        h = t("59b9"),
        F = t("482f"),
        U = t("f699"),
        p = t("1b4e"),
        H = t("4a80"),
        v = t("52cf"),
        b =
          (t("4895"),
          t("cbc8"),
          t("aedd"),
          t("164b"),
          t("4ba6"),
          t("db91"),
          t("f9d4"),
          t("8c2e"),
          t("0109"),
          (r = (function (A) {
            function e() {
              var A, t;
              Object(B["a"])(this, e);
              for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
              return (
                (t = Object(u["a"])(this, (A = Object(l["a"])(e)).call.apply(A, [this].concat(n)))),
                Object(Q["a"])(Object(g["a"])(t), "config", F["a"]),
                Object(Q["a"])(Object(g["a"])(t), "load", !1),
                Object(Q["a"])(Object(g["a"])(t), "taskRecord", void 0),
                Object(Q["a"])(Object(g["a"])(t), "currentSection", void 0),
                Object(Q["a"])(Object(g["a"])(t), "actived", void 0),
                Object(Q["a"])(Object(g["a"])(t), "cmOptions", {
                  mode: "text/x-csharp",
                  theme: "dracula",
                  tabSize: 4,
                  lineNumbers: !0,
                  smartIndent: !0,
                  indentUnit: 4,
                  indentWithTabs: !0,
                  lineWrapping: !0,
                  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
                  foldGutter: !0,
                  autofocus: !1,
                  matchBrackets: !0,
                  autoCloseBrackets: !0,
                  styleActiveLine: !0,
                  readOnly: !0,
                }),
                Object(Q["a"])(Object(g["a"])(t), "codeFiles", []),
                t
              );
            }
            return (
              Object(w["a"])(e, A),
              Object(c["a"])(e, [
                {
                  key: "currentSectionChange",
                  value: function () {
                    (console.log("currentSectionChange", this.currentSection),
                      this.init(),
                      "undefined" !== typeof this.currentSection && "" !== this.currentSection.id && this.downloadSectionContent(this.currentSection.id));
                  },
                },
                { key: "created", value: function () {} },
                { key: "init", value: function () {} },
                {
                  key: "mounted",
                  value: function () {
                    (this.init(),
                      "undefined" !== typeof this.currentSection && "" !== this.currentSection.id && this.downloadSectionContent(this.currentSection.id));
                  },
                },
                {
                  key: "updated",
                  value: function () {
                    console.log("updated");
                  },
                },
                {
                  key: "downloadPracticeState",
                  value: (function () {
                    var A = Object(i["a"])(
                      regeneratorRuntime.mark(function A() {
                        var e,
                          t,
                          r = this;
                        return regeneratorRuntime.wrap(
                          function (A) {
                            while (1)
                              switch ((A.prev = A.next)) {
                                case 0:
                                  return ((A.next = 2), H["a"].getSectionStateList(this.taskRecord.id, this.taskRecord.studentId, this.currentSection.id));
                                case 2:
                                  if (((e = A.sent), !(e && e.length > 0))) {
                                    A.next = 8;
                                    break;
                                  }
                                  if (e[0].content) {
                                    A.next = 6;
                                    break;
                                  }
                                  return A.abrupt("return");
                                case 6:
                                  ((t = JSON.parse(e[0].content)),
                                    t.forEach(function (A) {
                                      r.codeFiles.forEach(function (e) {
                                        if (A.description === e.description) {
                                          ((e.answer = A.content), console.log(A.content));
                                          var t = /###答题区开始!!!请勿删除或修改本行###([\s\S.\n]*?)###答题区结束!!!请勿删除或修改本行###/g.exec(A.content);
                                          (t && t.length > 1 && (e.shortAnswer = t[1]),
                                            (t = /###答题区开始!!!请勿删除或修改本行###([\s\S.\n]*?)###答题区结束!!!请勿删除或修改本行###/g.exec(e.content)),
                                            t && t.length > 1 && (e.shortContent = t[1]));
                                        }
                                      });
                                    }));
                                case 8:
                                case "end":
                                  return A.stop();
                              }
                          },
                          A,
                          this,
                        );
                      }),
                    );
                    function e() {
                      return A.apply(this, arguments);
                    }
                    return e;
                  })(),
                },
                {
                  key: "utf8ToBase64",
                  value: function (A) {
                    try {
                      return btoa(unescape(encodeURIComponent(A)));
                    } catch (e) {
                      return null;
                    }
                  },
                },
                {
                  key: "base64ToUtf8",
                  value: function (A) {
                    try {
                      return decodeURIComponent(escape(atob(A)));
                    } catch (e) {
                      return null;
                    }
                  },
                },
                {
                  key: "downloadSectionContent",
                  value: (function () {
                    var A = Object(i["a"])(
                      regeneratorRuntime.mark(function A(e) {
                        var t, r;
                        return regeneratorRuntime.wrap(
                          function (A) {
                            while (1)
                              switch ((A.prev = A.next)) {
                                case 0:
                                  return (
                                    (t = this),
                                    (t.codeFiles = []),
                                    (A.next = 4),
                                    Object(h["a"])({ url: this.config.web_host + "/api/CodePractice/GetCodePracticeBySectionId/".concat(e), method: "GET" })
                                  );
                                case 4:
                                  ((r = A.sent),
                                    console.log("downloadSectionContent", "ret", r),
                                    0 === r.code
                                      ? (r.data.codeFiles
                                          .filter(function (A) {
                                            return 1 === A.type;
                                          })
                                          .forEach(function (A, e, r) {
                                            return (
                                              t.codeFiles.push({
                                                id: A.id,
                                                content: (A.content = t.base64ToUtf8(A.content)),
                                                size: A.size,
                                                name: A.name,
                                                description: A.description,
                                                answer: "",
                                                shortAnswer: "",
                                                shortContent: "",
                                                raw: A.content,
                                              }),
                                              !0
                                            );
                                          }),
                                        this.downloadPracticeState())
                                      : this.$notify.error({ title: "错误", message: "未能加载该章节练习，" + e + r.message, position: "bottom-right" }));
                                case 7:
                                case "end":
                                  return A.stop();
                              }
                          },
                          A,
                          this,
                        );
                      }),
                    );
                    function e(e) {
                      return A.apply(this, arguments);
                    }
                    return e;
                  })(),
                },
              ]),
              e
            );
          })(C["a"])),
          r);
      (Object(f["a"])(
        [Object(d["b"])(), Object(f["b"])("design:type", "function" === typeof (n = "undefined" !== typeof U["a"] && U["a"]) ? n : Object)],
        b.prototype,
        "taskRecord",
        void 0,
      ),
        Object(f["a"])(
          [
            Object(d["b"])({ default: v["a"].noState() }),
            Object(f["b"])("design:type", "function" === typeof (s = "undefined" !== typeof p["a"] && p["a"]) ? s : Object),
          ],
          b.prototype,
          "currentSection",
          void 0,
        ),
        Object(f["a"])([Object(d["b"])({ default: !1 }), Object(f["b"])("design:type", Boolean)], b.prototype, "actived", void 0),
        Object(f["a"])(
          [
            Object(d["d"])("currentSection"),
            Object(f["b"])("design:type", Function),
            Object(f["b"])("design:paramtypes", []),
            Object(f["b"])("design:returntype", void 0),
          ],
          b.prototype,
          "currentSectionChange",
          null,
        ),
        (b = Object(f["a"])([d["a"]], b)));
      var y = b,
        m = y,
        E = (t("e6e1"), t("2877")),
        I = Object(E["a"])(m, a, o, !1, null, null, null);
      e["a"] = I.exports;
    },
    fb5a: function (A, e) {
      A.exports =
        "data:image/png;base64,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";
    },
  },
]);
