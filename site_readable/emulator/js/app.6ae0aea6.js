!(function (e) {
  function n(n) {
    for (var r, a, c = n[0], s = n[1], u = n[2], l = 0, f = []; l < c.length; l++)
      ((a = c[l]), Object.prototype.hasOwnProperty.call(i, a) && i[a] && f.push(i[a][0]), (i[a] = 0));
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (d && d(n); f.length;) f.shift()();
    return (o.push.apply(o, u || []), t());
  }
  function t() {
    for (var e, n = 0; n < o.length; n++) {
      for (var t = o[n], r = !0, c = 1; c < t.length; c++) {
        var s = t[c];
        0 !== i[s] && (r = !1);
      }
      r && (o.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var r = {},
    i = { app: 0 },
    o = [];
  function a(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { i: n, l: !1, exports: {} });
    return (e[n].call(t.exports, t, t.exports, a), (t.l = !0), t.exports);
  }
  ((a.e = function (e) {
    var n = [],
      t = i[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var r = new Promise(function (n, r) {
          t = i[e] = [n, r];
        });
        n.push((t[2] = r));
        var o,
          c = document.createElement("script");
        ((c.charset = "utf-8"),
          (c.timeout = 120),
          a.nc && c.setAttribute("nonce", a.nc),
          (c.src = (function (e) {
            return a.p + "js/" + ({ manifest: "manifest" }[e] || e) + "." + { manifest: "c882d2bd" }[e] + ".js";
          })(e)));
        var s = new Error();
        o = function (n) {
          ((c.onerror = c.onload = null), clearTimeout(u));
          var t = i[e];
          if (0 !== t) {
            if (t) {
              var r = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src;
              ((s.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"), (s.name = "ChunkLoadError"), (s.type = r), (s.request = o), t[1](s));
            }
            i[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          o({ type: "timeout", target: c });
        }, 12e4);
        ((c.onerror = c.onload = o), document.head.appendChild(c));
      }
    return Promise.all(n);
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function (e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (a.r = function (e) {
      ("undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (a.t = function (e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if ((a.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
        for (var r in e)
          a.d(
            t,
            r,
            function (n) {
              return e[n];
            }.bind(null, r),
          );
      return t;
    }),
    (a.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (a.d(n, "a", n), n);
    }),
    (a.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = "/emulator/"),
    (a.oe = function (e) {
      throw e;
    }));
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    s = c.push.bind(c);
  ((c.push = n), (c = c.slice()));
  for (var u = 0; u < c.length; u++) n(c[u]);
  var d = s;
  (o.push([0, "vendor", "styles"]), t());
})({
  0: function (e, n, t) {
    e.exports = t("cd49");
  },
  "03cd": function (e, n, t) {
    "use strict";
    var r, i, o, a, c, s, u, d, l, f, p, h, g, m, v, b, x;
    (t.d(n, "j", function () {
      return r;
    }),
      t.d(n, "g", function () {
        return i;
      }),
      t.d(n, "k", function () {
        return o;
      }),
      t.d(n, "d", function () {
        return a;
      }),
      t.d(n, "b", function () {
        return c;
      }),
      t.d(n, "e", function () {
        return l;
      }),
      t.d(n, "c", function () {
        return f;
      }),
      t.d(n, "i", function () {
        return m;
      }),
      t.d(n, "a", function () {
        return v;
      }),
      t.d(n, "f", function () {
        return b;
      }),
      t.d(n, "h", function () {
        return x;
      }),
      (function (e) {
        ((e.None = "未供电"), (e.Abnormal = "供电异常"), (e.Normal = "供电正常"));
      })(r || (r = {})),
      (function (e) {
        ((e.Metal = "金属"), (e.Plastic = "塑料"), (e.Other = "其他"));
      })(i || (i = {})),
      (function (e) {
        ((e.None = "未定义"),
          (e.GND = "地线"),
          (e.VS = "+VS"),
          (e.Power = "适配器信号"),
          (e.Signal_Digital_I = "数字信号输入"),
          (e.Signal_Digital_O = "数字信号输出"),
          (e.Signal_Digital_IO = "数字信号输入/输出"),
          (e.Signal_Analog_P = "正模拟信号"),
          (e.Signal_Analog_N = "负模拟信号"),
          (e.Signal_485_P = "正485信号"),
          (e.Signal_485_N = "负485信号"),
          (e.Signal_232 = "232信号"),
          (e.Signal_RJ45 = "网口信号"),
          (e.Signal_USB = "usb信号"),
          (e.Signal_ZigBee = "ZigBee信号"),
          (e.Signal_RFID = "RFID频射信号"),
          (e.Signal_NewLab = "NewLab八根接线柱信号"),
          (e.Signal_232_RX = "RX"),
          (e.Signal_232_TX = "TX"),
          (e.Signal_Analog_DC = "直流模拟信号"),
          (e.Signal_RFID_Antenna = "RFID天线"),
          (e.Signal_RFID_Multiplexer = "RFID多路复用器"),
          (e.Signal_RFID_Control = "RFID控制器"),
          (e.Signal_RFID_Door = "RFID门禁"),
          (e.Signal_VCC = "VCC"),
          (e.Signal_RGB_Red = "RGB红灯接口"),
          (e.Signal_RGB_Green = "RGB绿灯接口"),
          (e.Signal_RGB_Blue = "RGB蓝灯接口"),
          (e.Signal_Lora = "Lora信号"),
          (e.Signal_Wigan_P = "韦根正信号"),
          (e.Signal_Wigan_N = "韦根负信号"),
          (e.Signal_RGY_Red = "红灯接口"),
          (e.Signal_RGY_Green = "绿灯接口"),
          (e.Signal_RGY_Yellow = "黄灯接口"),
          (e.Signal_Noise = "噪音信号"),
          (e.Signal_CAN_H = "CAN总线高电平"),
          (e.Signal_CAN_L = "CAN总线低电平"),
          (e.Signal_PROFIBUS_A = "程序总线网络A"),
          (e.Signal_PROFIBUS_B = "程序总线网络B"));
      })(o || (o = {})),
      (function (e) {
        ((e[(e.Unknow = 0)] = "Unknow"), (e[(e.Root = 1)] = "Root"), (e[(e.Node = 2)] = "Node"));
      })(a || (a = {})),
      (function (e) {
        ((e.Error = "错误"), (e.Correct = "正确"), (e.Abnormal = "异常"));
      })(c || (c = {})),
      (function (e) {
        ((e.VerifyData = "验证数据"), (e.Screenshot = "截图"));
      })(s || (s = {})),
      (function (e) {
        ((e.RealPhysicalDevices = "连接真实物理设备"), (e.AndroidPad = "安卓平板"));
      })(u || (u = {})),
      (function (e) {
        ((e[(e.Base = 0)] = "Base"),
          (e[(e.Validate = 1)] = "Validate"),
          (e[(e.Upload = 2)] = "Upload"),
          (e[(e.Emulate = 3)] = "Emulate"),
          (e[(e.VirtualCOM = 4)] = "VirtualCOM"));
      })(d || (d = {})),
      (function (e) {
        ((e.Wired = "有线传感器"),
          (e.Wireless = "无线传感器"),
          (e.Actuator = "继电器"),
          (e.Gatewary = "网关"),
          (e.IO = "I/0模块"),
          (e.RFID_125K = "125K设备(LF)"),
          (e.RFID_ISO_144443_TypeA = "14443设备(HF)"),
          (e.RFID_ISO_15693 = "15693设备(HF)"),
          (e.RFID_ISO_18000_6C = "18000设备(UHF)"),
          (e.RFID_Other = "其他设备"),
          (e.Terminal = "终端"),
          (e.Load = "负载"),
          (e.Load_Wireless = "无线负载"),
          (e.Power = "电源"),
          (e.Power_Socket = "插座"),
          (e.Power_Socket_Wireless = "无线插座"),
          (e.Other = "其他外设"),
          (e.NewLabSensor = "NewLab传感器"),
          (e.NewLabEmbedded = "嵌入式"),
          (e.NewLabRFID = "NewLabRFID"),
          (e.Environment = "环境参数"));
      })(l || (l = {})),
      (function (e) {
        ((e[(e.None = -1)] = "None"), (e[(e.Top = 0)] = "Top"), (e[(e.Right = 1)] = "Right"), (e[(e.Bottom = 2)] = "Bottom"), (e[(e.Left = 3)] = "Left"));
      })(f || (f = {})),
      (function (e) {
        ((e[(e.RichText = 0)] = "RichText"),
          (e[(e.Exercise = 1)] = "Exercise"),
          (e[(e.Video = 2)] = "Video"),
          (e[(e.Emulator = 3)] = "Emulator"),
          (e[(e.Code = 4)] = "Code"),
          (e[(e.AppCase = 5)] = "AppCase"));
      })(p || (p = {})),
      (function (e) {
        ((e[(e["图文"] = 0)] = "图文"),
          (e[(e["习题"] = 1)] = "习题"),
          (e[(e["视频"] = 2)] = "视频"),
          (e[(e["仿真"] = 3)] = "仿真"),
          (e[(e["编码"] = 4)] = "编码"),
          (e[(e["案例"] = 5)] = "案例"));
      })(h || (h = {})),
      (function (e) {
        ((e[(e.undone = 1)] = "undone"), (e[(e.done = 2)] = "done"), (e[(e.flag = 4)] = "flag"), (e[(e.current = 8)] = "current"));
      })(g || (g = {})),
      (function (e) {
        ((e[(e.Old = 0)] = "Old"), (e[(e.New = 1)] = "New"));
      })(m || (m = {})),
      (function (e) {
        ((e[(e.Channel_11 = 11)] = "Channel_11"),
          (e[(e.Channel_12 = 12)] = "Channel_12"),
          (e[(e.Channel_13 = 13)] = "Channel_13"),
          (e[(e.Channel_14 = 14)] = "Channel_14"),
          (e[(e.Channel_15 = 15)] = "Channel_15"),
          (e[(e.Channel_16 = 16)] = "Channel_16"),
          (e[(e.Channel_17 = 17)] = "Channel_17"),
          (e[(e.Channel_18 = 18)] = "Channel_18"),
          (e[(e.Channel_19 = 19)] = "Channel_19"),
          (e[(e.Channel_20 = 20)] = "Channel_20"),
          (e[(e.Channel_21 = 21)] = "Channel_21"),
          (e[(e.Channel_22 = 22)] = "Channel_22"),
          (e[(e.Channel_23 = 23)] = "Channel_23"),
          (e[(e.Channel_24 = 24)] = "Channel_24"),
          (e[(e.Channel_25 = 25)] = "Channel_25"),
          (e[(e.Channel_26 = 26)] = "Channel_26"));
      })(v || (v = {})),
      (function (e) {
        ((e[(e.Channel_0 = 0)] = "Channel_0"),
          (e[(e.Channel_1 = 1)] = "Channel_1"),
          (e[(e.Channel_2 = 2)] = "Channel_2"),
          (e[(e.Channel_3 = 3)] = "Channel_3"),
          (e[(e.Channel_4 = 4)] = "Channel_4"),
          (e[(e.Channel_5 = 5)] = "Channel_5"),
          (e[(e.Channel_6 = 6)] = "Channel_6"),
          (e[(e.Channel_7 = 7)] = "Channel_7"));
      })(b || (b = {})),
      (function (e) {
        ((e[(e.Sucess = 0)] = "Sucess"), (e[(e.Info = 1)] = "Info"), (e[(e.Warm = 2)] = "Warm"), (e[(e.Error = 3)] = "Error"));
      })(x || (x = {})));
  },
  "0613": function (e, n, t) {
    "use strict";
    var r,
      i,
      o,
      a,
      c,
      s,
      u,
      d,
      l,
      f,
      p,
      h,
      g,
      m,
      v,
      b,
      x,
      y,
      w,
      k,
      S,
      C = t("ba4c"),
      R = t.n(C),
      I = t("2f62"),
      O =
        (t("4de4"),
        t("7db0"),
        t("4160"),
        t("caad"),
        t("c975"),
        t("d81d"),
        t("13d5"),
        t("4e82"),
        t("a434"),
        t("0d03"),
        t("b0c0"),
        t("d3b7"),
        t("e25e"),
        t("ac1f"),
        t("25f0"),
        t("2532"),
        t("5319"),
        t("2ca0"),
        t("159b"),
        t("96cf"),
        t("89ba")),
      _ = t("9f12"),
      P = t("51c8"),
      D = t("0f0b"),
      A = t("73ec"),
      N = t("555b"),
      j = t("03cd"),
      T = t("535f"),
      E = t("7cde"),
      L = t("72fa"),
      V = new T.a(),
      B = t("083c"),
      F = new B.Parser(),
      M = function e() {
        (Object(_.a)(this, e),
          (this.source = {}),
          (this.sink = {}),
          (this.sinkpoint = new N.b(0, 0)),
          (this.sourcepoint = new N.b(0, 0)),
          (this.config = { points: [0, 0, 0, 0], stroke: "gray", tension: 0, dash: [10, 5] }));
      },
      H = function e() {
        (Object(_.a)(this, e), (this.x = 0), (this.y = 0), (this.text = ""), (this.show = !1));
      },
      U = function e() {
        (Object(_.a)(this, e),
          (this.id = Object(A.v)()),
          (this.name = "实验1"),
          (this.devices = new Array()),
          (this.connections = new Array()),
          (this.scale = 1),
          (this.isConnect = !1),
          (this.isVerify = !0),
          (this.showPreview = !1),
          (this.img_preview = ""),
          (this.msglist = new Array()),
          (this.isLog = !0),
          (this.width = 2 * window.innerWidth),
          (this.height = 2 * window.innerHeight),
          (this.scene = "0"),
          (this.background = ""),
          (this.selectMsgVal = ""),
          (this.previewWidth = 600),
          (this.previewHeight = (2 * window.innerHeight) / ((2 * window.innerWidth) / 600)),
          (this.previewRectWidth = 0),
          (this.previewRectHeight = 0));
      },
      K = function e(n, t) {
        t[2].includes(n) ||
          (n && n.device && t[0].push(n.device),
          t[2].push(n),
          n &&
            n.connections &&
            n.connections.length > 0 &&
            n.connections.forEach(function (r) {
              if (!t[1].includes(r)) {
                t[1].push(r);
                var i = r.sink.id == n.id ? r.source : r.sink;
                e(i, t);
              }
            }));
      },
      G = function (e) {
        var n = !0,
          t = Z(e, e.currentid),
          r = t
            .filter(function (e) {
              return e.isPowerSupply;
            })
            .sort(function (e, n) {
              return e.deviceKind > n.deviceKind ? 1 : -1;
            });
        (r.forEach(function (e) {
          var t = e.getvs(),
            r = e.getgnd(),
            i = e.getpower();
          if (
            ((e.powerState = j.j.Normal),
            (e.deviceKind != j.e.Wired && e.deviceKind != j.e.Wireless && e.deviceKind != j.e.IO && e.deviceKind != j.e.Other) ||
              (t &&
                r &&
                ((t.connections.length < 1 || r.connections.length < 1) && ((e.powerState = j.j.None), (n = !1)),
                t.connections.forEach(function (t) {
                  var r = t.sink.device.id == e.id ? t.source.device : t.sink.device;
                  (r.voltage != e.voltage && ((e.powerState = j.j.Abnormal), (n = !1)), r.deviceKind != j.e.Power && ((e.powerState = j.j.Abnormal), (n = !1)));
                })),
              i &&
                (i.connections.length < 1 && ((e.powerState = j.j.None), (n = !1)),
                i.connections.forEach(function (t) {
                  (t.sink.device.id == e.id ? t.source.device : t.sink.device).voltage != e.voltage && ((e.powerState = j.j.Abnormal), (n = !1));
                })),
              "Dongle" == e.devKey &&
                e.getconnectors().find(function (e) {
                  return "usb" == e[0];
                })[1].connections.length < 1 &&
                ((e.powerState = j.j.None), (n = !1))),
            e.deviceKind == j.e.NewLabSensor &&
              i &&
              (i.connections.length < 1 && ((e.powerState = j.j.None), (n = !1)),
              i.connections.forEach(function (t) {
                (t.sink.device.id == e.id ? t.source.device : t.sink.device).voltage != e.voltage && ((e.powerState = j.j.Abnormal), (n = !1));
              })),
            e.deviceKind,
            j.e.Terminal,
            (e.deviceKind != j.e.Power_Socket && e.deviceKind != j.e.Power_Socket_Wireless) ||
              (i &&
                (i.connections.length < 1 && ((e.powerState = j.j.None), (e.voltage = 0), (n = !1)),
                i.connections.forEach(function (n) {
                  var t = n.sink.device.id == e.id ? n.source.device : n.sink.device,
                    r = n.sink.device.id == e.id ? n.source : n.sink;
                  t.deviceKind == j.e.Power && r.signalType == j.k.Power ? (e.voltage = t.voltage) : (e.voltage = 0);
                }))),
            e.deviceKind == j.e.Load)
          ) {
            if (
              (i &&
                (i.connections.length < 1 && ((e.powerState = j.j.None), (n = !1)),
                i.connections.forEach(function (t) {
                  var r = t.sink.device.id == e.id ? t.source.device : t.sink.device;
                  r.voltage == e.voltage && [j.e.Power, j.e.Power_Socket, j.e.Power_Socket_Wireless].includes(r.deviceKind)
                    ? ((t.connectionState = j.b.Correct), (t.validateInfo = ""))
                    : ((t.connectionState = j.b.Abnormal), (t.validateInfo = "连线错误，电压或者电源错误"), (e.powerState = j.j.Abnormal), (n = !1));
                })),
              t && r)
            )
              if (t.connections.length > 0 && r.connections.length > 0 && t.connections.length == r.connections.length) {
                var o = [];
                t.connections.forEach(function (t) {
                  var i = (t.source.device.id == e.id ? t.sink : t.source).device;
                  (o.push(i),
                    i.deviceKind == j.e.Power
                      ? i.voltage != e.voltage
                        ? ((t.connectionState = j.b.Abnormal), (t.validateInfo = "连线错误，电压不一致"), (e.powerState = j.j.Abnormal), (n = !1))
                        : 0 ==
                            i
                              .getgnd()
                              .connections.map(function (e) {
                                return e.sink.device.id == i.id ? e.source : e.sink;
                              })
                              .includes(r) && ((e.powerState = j.j.Abnormal), (n = !1))
                      : i.deviceKind == j.e.Actuator && (i.powerState == j.j.Normal || ((e.powerState = j.j.Abnormal), (n = !1))));
                });
              } else ((e.powerState = j.j.Abnormal), (n = !1));
            "load_PushRod" == e.devKey && ((e.powerState = j.j.Normal), (n = !0));
          }
          e.deviceKind == j.e.Gatewary &&
            i &&
            (i.connections.length < 1 && ((e.powerState = j.j.None), (n = !1)),
            i.connections.forEach(function (t) {
              var r = t.sink.device.id == e.id ? t.source.device : t.sink.device;
              (r.voltage == e.voltage && r.deviceKind == j.e.Power) ||
                ((t.connectionState = j.b.Abnormal), (t.validateInfo = "连线错误，电压或者电源错误"), (e.powerState = j.j.Abnormal), (n = !1));
            }));
        }),
          r
            .filter(function (e) {
              return e.deviceKind == j.e.Actuator;
            })
            .forEach(function (e) {
              var t = e.getvs();
              (e.getgnd(), e.getpower(), (e.powerState = j.j.Normal));
              var r = e.getconnectors().find(function (e) {
                return e[1].signalType == j.k.Signal_Digital_O;
              });
              (t &&
                (t.connections.length < 1 && ((e.powerState = j.j.None), (n = !1)),
                t.connections.forEach(function (t) {
                  (t.sink.device.id == e.id ? t.source.device : t.sink.device).voltage != e.voltage && ((e.powerState = j.j.Abnormal), (n = !1));
                })),
                r &&
                  (r[1].connections.length > 0
                    ? r[1].connections.forEach(function (t) {
                        var i = r[1].id == t.sink.id ? t.source.device : t.sink.device;
                        (i.powerState == j.j.Normal && i.voltage == e.voltage) || ((e.powerState = j.j.Abnormal), (n = !1));
                      })
                    : ((e.powerState = j.j.Abnormal), (n = !1))));
            }),
          t
            .filter(function (e) {
              return (
                e.devKey.toUpperCase().startsWith("ZigBee_SigleRelay".toUpperCase()) || e.devKey.toUpperCase().startsWith("ZigBee_DoubleRelay".toUpperCase())
              );
            })
            .forEach(function (e) {
              e.plateType == j.i.Old && e.getpower().connections.length < 1 && ((e.powerState = j.j.None), (n = !1));
            }),
          Y(e).forEach(function (e) {
            e.source.signalType != e.sink.signalType &&
              (e.source.device.deviceKind == j.e.Actuator ||
                e.sink.device.deviceKind == j.e.Actuator ||
                "load_PushRod" == e.source.device.devKey ||
                "load_PushRod" == e.sink.device.devKey ||
                ((e.connectionState = j.b.Error), (e.validateInfo = "连线错误：信号类型不一致"), (n = !1)));
          }),
          t
            .filter(function (e) {
              return 1 == e.isPowerSupply && e.deviceKind == j.e.Terminal;
            })
            .forEach(function (e) {
              var t = e
                .getconnectors()
                .map(function (e) {
                  return e[1];
                })
                .find(function (e) {
                  return e.signalType == j.k.Power && "VS" == e.name;
                });
              if (((e.powerState = j.j.Normal), t && t.connections.length < 1)) ((e.powerState = j.j.None), (n = !1));
              else {
                var r = t.connections[0];
                (r.sink.device.id == e.id ? r.source.device : r.sink.device).voltage != e.voltage && ((e.powerState = j.j.Abnormal), (n = !1));
              }
            }));
        var i = t.filter(function (e) {
            return Object(L.p)(e) && e.IsCoordinator;
          }),
          o = t.filter(function (e) {
            return Object(L.p)(e) && !e.IsCoordinator;
          });
        return (
          i.forEach(function (e) {
            o.forEach(function (n) {
              ((n.IsConnected = !1), n.zigBeeInfo.Channel == e.zigBeeInfo.Channel && n.zigBeeInfo.PandID == e.zigBeeInfo.PandID && (n.IsConnected = !0));
            });
          }),
          t
            .filter(function (e) {
              return Object(L.l)(e);
            })
            .forEach(function (e) {
              e.GetGroupConnectors().forEach(function (e) {
                if (e[0].connections.length > 0 && e[1].connections.length > 0) {
                  var t = e[0].signalType == j.k.GND ? e[1] : e[0],
                    r = e[0].signalType == j.k.GND ? e[0] : e[1],
                    i = t.connections.map(function (e) {
                      return (e.sink.id == t.id ? e.source : e.sink).device;
                    }),
                    o = r.connections.map(function (e) {
                      return (e.sink.id == r.id ? e.source : e.sink).device;
                    }),
                    a = !0;
                  (i.forEach(function (e) {
                    o.forEach(function (n) {
                      e.voltage != n.voltage && (a = !1);
                    });
                  }),
                    a
                      ? (e[0].connections.forEach(function (e) {
                          e.connectionState !== j.b.Error && (e.connectionState = j.b.Correct);
                        }),
                        e[1].connections.forEach(function (e) {
                          e.connectionState !== j.b.Error && (e.connectionState = j.b.Correct);
                        }))
                      : e[0].connections.forEach(function (e) {
                          ((e.connectionState = j.b.Abnormal), (e.validateInfo = "连线错误：电源回路错误,电压错误"), (n = !1));
                        }));
                } else
                  e[0].connections.length > 0 && e[1].connections.length <= 0
                    ? e[0].connections.forEach(function (e) {
                        ((e.connectionState = j.b.Abnormal), (e.validateInfo = "连线错误：电源回路错误,连线缺少"), (n = !1));
                      })
                    : e[0].connections.length <= 0 &&
                      e[1].connections.length > 0 &&
                      e[1].connections.forEach(function (e) {
                        ((e.connectionState = j.b.Error), (e.validateInfo = "连线错误：电源回路错误，连线缺少"), (n = !1));
                      });
              });
            }),
          (n = W(e, n)) &&
            Y(e).forEach(function (e) {
              ((e.connectionState = j.b.Correct), (e.validateInfo = ""));
            }),
          n
        );
      },
      W = function (e, n) {
        return (
          Z(e, e.currentid).forEach(function (e) {
            if (0 == e.onValidate()) return (n = !1);
          }),
          n
        );
      },
      z = (function () {
        var e = Object(O.a)(
          regeneratorRuntime.mark(function e(n) {
            var t, r, i, o, a, c, s, u;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (n) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return ((e.next = 5), F.parseStringPromise(n));
                  case 5:
                    return (
                      (t = e.sent),
                      (r = t.Workbench.DesignerCanvas[0].DesignerItems[0].DesignerItem),
                      (i = new Array()),
                      (o = 0),
                      (a = 0),
                      r &&
                        r.forEach(function (e) {
                          var n = Object(E.b)(e.TypeName[0], parseInt(e.Left[0]), parseInt(e.Top[0]));
                          null != n && (n.deSerialize(e), i.push(n), (o = Math.max(o, n.x)), (a = Math.max(a, n.y)));
                        }),
                      (c = (c = t.Workbench.DesignerCanvas[0].Connections[0].Connection) || []),
                      (s = new Array()),
                      c.forEach(function (e) {
                        var n = i.find(function (n) {
                            return n.id == e.SourceID[0];
                          }),
                          t = i.find(function (n) {
                            return n.id == e.SinkID[0];
                          });
                        if (n && t) {
                          var r,
                            o = e.SourceConnectorName[0].toLowerCase();
                          n.getconnectors().forEach(function (e) {
                            e[0].toLowerCase() == o && (r = e[1]);
                          });
                          var a,
                            c = e.SinkConnectorName[0].toLowerCase();
                          if (
                            (t.getconnectors().forEach(function (e) {
                              e[0].toLowerCase() == c && (a = e[1]);
                            }),
                            !r || !a)
                          )
                            return;
                          var u = "#12b2e2";
                          ((r.signalType != j.k.GND && r.signalType != j.k.None) || (u = "#000000"),
                            (r.signalType != j.k.VS && r.signalType != j.k.Power) || (u = "#ff3b1b"));
                          var d = new P.a(r, a, { dash: [], stroke: u, strokeWidth: 1, points: [], hitStrokeWidth: 4 });
                          ((d.sourcepoint = r.getPositon()),
                            (d.sinkpoint = a.getPositon()),
                            d.sink.connections.push(d),
                            d.source.connections.push(d),
                            (d.config.points = Q({
                              sink: d.sink,
                              source: d.source,
                              sinkpoint: new N.b(d.sinkpoint.x, d.sinkpoint.y),
                              sourcepoint: new N.b(d.sourcepoint.x, d.sourcepoint.y),
                            })),
                            s.push(d));
                        }
                      }),
                      ((u = {
                        id: Object(A.v)(),
                        name: t.Workbench.$.Title,
                        scene: t.Workbench.$.Scene,
                        background: "",
                        devices: i,
                        connections: s,
                        scale: 1,
                        isConnect: !1,
                        isVerify: !0,
                        isLog: !0,
                        showPreview: !1,
                        img_preview: "",
                        msglist: new Array(),
                        width: 2 * window.innerWidth > o + 500 ? 2 * window.innerWidth : o + 500,
                        height: 2 * window.innerHeight > a + 500 ? 2 * window.innerHeight : a + 500,
                        previewWidth: 600,
                        previewHeight: 0,
                        previewRectWidth: 0,
                        previewRectHeight: 0,
                      }).previewHeight = u.height / (u.width / u.previewWidth)),
                      e.abrupt("return", u)
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      q = (function () {
        var e = Object(O.a)(
          regeneratorRuntime.mark(function e(n, t, r) {
            var i, o;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((i = new U()), (n.currentid = i.id), r && (n.nlcanvas = []), n.nlcanvas.push(i), !t)) {
                      e.next = 10;
                      break;
                    }
                    return ((e.next = 8), z(t));
                  case 8:
                    (o = e.sent) &&
                      ((i.name = o.name),
                      (i.devices = o.devices),
                      (i.connections = o.connections),
                      (i.width = o.width),
                      (i.height = o.height),
                      (i.scene = o.scene ? o.scene : "0"));
                  case 10:
                    setTimeout(function () {
                      G(n);
                    }, 1e3);
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (n, t, r) {
          return e.apply(this, arguments);
        };
      })(),
      J = function (e) {
        var n = e.nlcanvas.find(function (n) {
          return n.id == e.currentid;
        });
        if (n) {
          var t = new B.Builder(),
            r = n.devices.map(function (e, n, t) {
              var r = e.serialize(),
                i = e.getconnectors().map(function (e, n, t) {
                  return { Id: e[1].id, ConnectorType: e[1].connectorType, SignalType: e[1].signalType, Name: e[1].name, DeviceId: e[1].device.id };
                });
              return ((r.Nodes.Node = i), r);
            }),
            i = n.connections.map(function (e, n, t) {
              var r = e.source.name,
                i = e.sink.name;
              return {
                SourceID: e.source.device.id,
                SinkID: e.sink.device.id,
                SourceConnectorName: r,
                SinkConnectorName: i,
                ArrowSymbol: "Diamond",
                zIndex: 0,
              };
            }),
            o = {
              Workbench: {
                $: { Title: n.name, Scene: n.scene, UserId: 0 },
                DesignerCanvas: [{ DesignerItems: { DesignerItem: r || [] }, Connections: { Connection: i || [] } }],
                ConnectionDiagrams: [],
                SetBackground: "",
                PreviewImg: "",
              },
            };
          return t.buildObject(o);
        }
      },
      Q = function (e) {
        var n,
          t = new N.b(e.sinkpoint.x, e.sinkpoint.y),
          r = new N.b(e.sourcepoint.x, e.sourcepoint.y),
          i = 15;
        n = 3 * e.sink.index + 3 * e.source.index + 25;
        var o = new N.b(r.x, r.y);
        e.source.connectorOrientation == j.c.Bottom
          ? ((o.y += n), (r.y += i))
          : e.source.connectorOrientation == j.c.Top
            ? ((o.y -= n), (r.y -= i))
            : e.source.connectorOrientation == j.c.Left
              ? ((o.x -= n), (r.x -= i))
              : e.source.connectorOrientation == j.c.Right && ((o.x += n), (r.x += i));
        var a = new N.b(t.x, t.y);
        e.sink.connectorOrientation == j.c.Bottom
          ? ((a.y += n), (t.y += i))
          : e.sink.connectorOrientation == j.c.Top
            ? ((a.y -= n), (t.y -= i))
            : e.sink.connectorOrientation == j.c.Left
              ? ((a.x -= n), (t.x -= i))
              : e.sink.connectorOrientation == j.c.Right && ((a.x += n), (t.x += i));
        var c = new N.b((a.x + o.x) / 2, o.y),
          s = new N.b((a.x + o.x) / 2, a.y);
        return (
          e.source.connectorOrientation == j.c.Left &&
            r.x < t.x &&
            (e.sink.connectorOrientation == j.c.Right ? ((c.x = o.x), (s.x = a.x), (c.y = s.y = (o.y + a.y) / 2)) : (c.x = s.x = o.x)),
          e.source.connectorOrientation == j.c.Right && r.x > t.x && (c.x = s.x = o.x),
          e.sink.connectorOrientation == j.c.Left &&
            t.x < r.x &&
            ((c.x = s.x = a.x), e.source.connectorOrientation == j.c.Right && ((s.y = c.y = c.y - 2 * n), (c.x = o.x))),
          e.sink.connectorOrientation == j.c.Left && t.x > r.x && o.x > c.x && ((o.x = c.x), (a.x = c.x)),
          e.sink.connectorOrientation == j.c.Right && t.x > r.x && (e.source.connectorOrientation == j.c.Left || (c.x = s.x = a.x)),
          e.sink.connectorOrientation == j.c.Right &&
            t.x < r.x &&
            ((c.x = s.x = a.x),
            e.source.connectorOrientation == j.c.Bottom && (o.x = r.x),
            e.source.connectorOrientation == j.c.Right && ((c.y = s.y = a.y), (c.x = s.x = o.x))),
          e.sink.connectorOrientation == j.c.Right && t.x < r.x && a.x > c.x && ((a.x = c.x), (o.x = c.x)),
          e.sink.connectorOrientation == j.c.Right && e.source.connectorOrientation == j.c.Bottom && t.x < r.x && (o.x = o.x),
          e.sink.connectorOrientation == j.c.Left && e.source.connectorOrientation == j.c.Bottom && t.x > r.x && (o.x = r.x),
          e.source.connectorOrientation == j.c.Right && e.sink.connectorOrientation == j.c.Bottom && t.x > r.x && (a.x = t.x),
          [r.x, r.y, o.x, o.y, c.x, c.y, s.x, s.y, a.x, a.y, t.x, t.y]
        );
      },
      Y = function (e) {
        return e.nlcanvas.find(function (n) {
          return n.id == e.currentid;
        }).connections;
      },
      Z = function (e, n) {
        return e.nlcanvas.find(function (e) {
          return e.id == n;
        }).devices;
      },
      $ = function (e) {
        for (var n = Y(e), t = 0; t < n.length; t++) {
          var r = n[t];
          r.isSelected && X(e, r.id);
        }
      },
      X = function (e, n) {
        for (var t = Y(e), r = 0; r < t.length; r++) {
          var i = t[r];
          if (i.id == n) {
            for (var o = i.sink.connections, a = 0; a < o.length; a++) o[a].id == n && (o.splice(a, 1), a--);
            for (var c = i.source.connections, s = 0; s < c.length; s++) c[s].id == n && (c.splice(s, 1), s--);
            (t.splice(r, 1), r--);
          }
        }
      },
      ee = function (e) {
        for (var n = Z(e, e.currentid), t = 0; t < n.length; t++) {
          var r = n[t];
          r.isSelected && (ne(e, r.id), t--);
        }
        n.length > 0 && G(e);
      },
      ne = function (e, n) {
        for (var t = Z(e, e.currentid), r = 0; r < t.length; r++) {
          var i = t[r];
          if (i.id == n) {
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var a = i[o];
                if (a instanceof D.a && a.connections.length > 0)
                  for (var c = 0; c < a.connections.length; c++) {
                    var s = a.connections[c];
                    (X(e, s.id), c--);
                  }
              }
            (t.splice(r, 1), r--);
          }
        }
        t.length > 0 && G(e);
      },
      te = (function () {
        var e = Object(O.a)(
          regeneratorRuntime.mark(function e(n, t) {
            var r;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t) {
                      e.next = 4;
                      break;
                    }
                    return ((e.next = 4), we.dispatch("socketpipe/startEmulator", n.currentid));
                  case 4:
                    ((r = Z(n, n.currentid)),
                      oe(n),
                      r.forEach(function (e) {
                        (e.onStartRun(), (e.isRunning = !0));
                      }));
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (n, t) {
          return e.apply(this, arguments);
        };
      })(),
      re = (function () {
        var e = Object(O.a)(
          regeneratorRuntime.mark(function e(n, t) {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t) {
                      e.next = 4;
                      break;
                    }
                    return ((e.next = 4), we.dispatch("socketpipe/endEmulator", n.currentid));
                  case 4:
                    (oe(n),
                      Z(n, n.currentid).forEach(function (e) {
                        (e.onEndRun(), (e.isRunning = !1));
                      }),
                      oe(n));
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (n, t) {
          return e.apply(this, arguments);
        };
      })(),
      ie = function (e, n) {
        var t = Y(e);
        t.length > 0 &&
          t.forEach(function (e) {
            if (
              !e.source.signalType.toString().includes("RFID") ||
              e.source.device.deviceKind == j.e.RFID_125K ||
              e.source.device.deviceKind == j.e.RFID_ISO_15693
            )
              if (e.source.device.id === n.id) {
                if ("" !== n.connectorId)
                  return void (
                    e.source.id === n.connectorId &&
                    ((e.sourcepoint = new N.b(e.sourcepoint.x + n.x, e.sourcepoint.y + n.y)),
                    (e.config.points = Q({ sink: e.sink, source: e.source, sinkpoint: new N.b(e.sinkpoint.x, e.sinkpoint.y), sourcepoint: e.sourcepoint })))
                  );
                ((e.sourcepoint = new N.b(e.sourcepoint.x + n.x, e.sourcepoint.y + n.y)),
                  (e.config.points = Q({ sink: e.sink, source: e.source, sinkpoint: new N.b(e.sinkpoint.x, e.sinkpoint.y), sourcepoint: e.sourcepoint })));
              } else if (e.sink.device.id === n.id) {
                if ("" !== n.connectorId)
                  return void (
                    e.sink.id === n.connectorId &&
                    ((e.sinkpoint = new N.b(e.sinkpoint.x + n.x, e.sinkpoint.y + n.y)),
                    (e.config.points = Q({ sink: e.sink, source: e.source, sinkpoint: e.sinkpoint, sourcepoint: new N.b(e.sourcepoint.x, e.sourcepoint.y) })))
                  );
                ((e.sinkpoint = new N.b(e.sinkpoint.x + n.x, e.sinkpoint.y + n.y)),
                  (e.config.points = Q({ sink: e.sink, source: e.source, sinkpoint: e.sinkpoint, sourcepoint: new N.b(e.sourcepoint.x, e.sourcepoint.y) })));
              }
          });
      },
      oe = function (e) {
        if (
          e.nlcanvas.find(function (n) {
            return n.id == e.currentid;
          }).isConnect
        ) {
          var n = Z(e, e.currentid),
            t = n.filter(function (e) {
              return 1 == Object(L.n)(e);
            }),
            r = n.filter(function (e) {
              return 1 == Object(L.o)(e);
            }),
            i = function (n, t, r) {
              var i = n,
                o = t,
                a = n.RFIDSignal,
                c = t.RFIDSignal,
                s = new N.b(i.x + i.width / 2, i.y + i.height / 2),
                u = new N.b(o.x + o.width / 2, o.y + o.height / 2),
                d = Y(e),
                l = d.find(function (e) {
                  return (e.sink === c && e.source === a) || (e.sink === a && e.source === c);
                });
              if (r) {
                var f = new P.a(a, c, { dash: [10, 5], stroke: "#0e8edd", strokeWidth: 1, points: [s.x, s.y, u.x, u.y], hitStrokeWidth: 4 });
                ((f.sourcepoint = s), (f.sinkpoint = u), f.sink.connections.push(f), f.source.connections.push(f), void 0 === l || X(e, l.id), d.push(f));
              } else l && X(e, l.id);
            };
          t.forEach(function (e) {
            r.forEach(function (n) {
              var t, r, o, a;
              n.TagModule == e.TagModule &&
                n.ProtocolStandard == e.ProtocolStandard &&
                ((t = e),
                (r = n),
                (o = Math.abs(t.x + t.width / 2 - (r.x + r.width / 2))),
                (a = Math.abs(t.y + t.height / 2 - (r.y + r.height / 2))),
                Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2)) < e.ScanRadius
                  ? (n.ConnectInterrogators.includes(e) || n.ConnectInterrogators.push(e), e.ConnectTags.includes(n) || e.ConnectTags.push(n), i(e, n, !0))
                  : (e.ConnectTags.includes(n) && (e.SelectTag == n && (e.SelectTag = null), (e.ConnectTags = e.ConnectTags.filter(function (e) {}))),
                    n.ConnectInterrogators.includes(e) &&
                      (n.SelectInterrogator == e && (n.SelectInterrogator = null), (n.ConnectInterrogators = n.ConnectInterrogators.filter(function (e) {}))),
                    i(e, n, !1)));
            });
          });
        } else
          Y(e).forEach(function (n) {
            (Object(L.o)(n.source.device) || Object(L.o)(n.sink.device)) && X(e, n.id);
          });
      },
      ae = function (e, n) {
        Z(e, e.currentid).forEach(function (e) {
          var t, r;
          if (e !== n)
            if (((t = e), (r = n).x > t.x + t.width || r.x + r.width < t.x || r.y > t.y + t.height || r.y + r.height < t.y)) {
              if (
                n.collisionDevices.find(function (n) {
                  return n == e;
                })
              ) {
                var i = n.collisionDevices.indexOf(e);
                (n.collisionDevices.splice(i, 1),
                  n.onCollisionLeave(e),
                  (i = e.collisionDevices.indexOf(n)),
                  e.collisionDevices.splice(i, 1),
                  e.onCollisionLeave(n));
              }
            } else
              null ==
                n.collisionDevices.find(function (n) {
                  return n == e;
                }) && (n.collisionDevices.push(e), n.onCollisionEnter(e), e.collisionDevices.push(n), e.onCollisionEnter(n));
        });
      },
      ce = function (e) {
        var n = e.nlcanvas.find(function (n) {
            return n.id == e.currentid;
          }),
          t = e.historyData.find(function (n) {
            return n.id == e.currentid;
          });
        t
          ? (t.data_redo.length > 0 && (t.data_redo = []), t.data_revo.length >= 20 && t.data_revo.shift(), t.data_revo.push(J(e)))
          : e.historyData.push({ id: n.id, data_redo: [], data_revo: [J(e)] });
      },
      se = (function () {
        var e = Object(O.a)(
          regeneratorRuntime.mark(function e(n) {
            var t, r, i, o, a;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = n.nlcanvas.find(function (e) {
                        return e.id == n.currentid;
                      })),
                      !(r = n.historyData.find(function (e) {
                        return e.id == n.currentid;
                      })))
                    ) {
                      e.next = 23;
                      break;
                    }
                    if (!(r.data_revo.length < 1)) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    if ((r.data_redo.length < 1 && r.data_redo.push(J(n)), 1 == r.data_revo.length)) {
                      e.next = 18;
                      break;
                    }
                    return ((i = r.data_revo.pop()), r.data_redo.push(i), (e.next = 13), z(i));
                  case 13:
                    ((o = e.sent), (t.devices = o.devices), (t.connections = o.connections), (e.next = 23));
                    break;
                  case 18:
                    return ((e.next = 20), z(r.data_revo[0]));
                  case 20:
                    ((a = e.sent), (t.devices = a.devices), (t.connections = a.connections));
                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      ue = (function () {
        var e = Object(O.a)(
          regeneratorRuntime.mark(function e(n) {
            var t, r, i, o, a;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = n.nlcanvas.find(function (e) {
                        return e.id == n.currentid;
                      })),
                      !(r = n.historyData.find(function (e) {
                        return e.id == n.currentid;
                      })))
                    ) {
                      e.next = 22;
                      break;
                    }
                    if (!(r.data_redo.length < 1)) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    if (1 != r.data_redo.length) {
                      e.next = 15;
                      break;
                    }
                    return ((e.next = 10), z(r.data_redo[0]));
                  case 10:
                    ((i = e.sent), (t.devices = i.devices), (t.connections = i.connections), (e.next = 22));
                    break;
                  case 15:
                    return ((o = r.data_redo.pop()), r.data_revo.push(o), (e.next = 19), z(o));
                  case 19:
                    ((a = e.sent), (t.devices = a.devices), (t.connections = a.connections));
                  case 22:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      de = function (e, n, t, r, i) {
        return Z(e, e.currentid).filter(function (e) {
          return Object(A.A)(
            [
              { x: n, y: t },
              { x: n + r, y: t },
              { x: n + r, y: t + i },
              { x: n, y: t + i },
            ],
            [
              { x: e.x, y: e.y },
              { x: e.x + e.width, y: e.y },
              { x: e.x + e.width, y: e.y + e.height },
              { x: e.x, y: e.y + e.height },
            ],
          );
        });
      },
      le = function (e, n) {
        var t = { dev: e, connect: n };
        V.$copyText("clipboard_dev:" + JSON.stringify(t)).then(
          function (e) {},
          function (e) {},
        );
      },
      fe = {
        namespaced: !0,
        state: new (function e() {
          (Object(_.a)(this, e),
            (this.nlcanvas = [new U()]),
            (this.currentid = ""),
            (this.userid = ""),
            (this.historyData = new Array()),
            (this.currentHisIndex = 0),
            (this.lineing = !1),
            (this.line = new M()),
            (this.mousetip = new H()),
            (this.copy_dev = new Array()),
            (this.copy_connect = new Array()),
            (this.workspaceBlur = !0),
            (this.devLayerDom = null));
        })(),
        mutations: {
          updatetip: function (e, n) {
            e.mousetip = n;
          },
          delcanvas: function (e, n) {
            for (var t = 0; t < e.nlcanvas.length; t++) n === e.nlcanvas[t].id && e.nlcanvas.splice(t, 1);
            for (var r = 0; r < e.historyData.length; r++) n === e.historyData[r].id && e.historyData.splice(r, 1);
          },
          updatecanvasepreview: function (e, n) {
            var t = e.nlcanvas.find(function (n) {
              return n.id == e.currentid;
            });
            t && (t.img_preview = n);
          },
          addcanvas: function (e) {
            var n = {
              id: Object(A.v)(),
              name: "实验" + (e.nlcanvas.length + 1),
              devices: new Array(),
              connections: new Array(),
              scale: 1,
              isConnect: !1,
              isVerify: !0,
              showPreview: !1,
              img_preview: "",
              msglist: new Array(),
              isLog: !0,
              width: 2 * window.innerWidth,
              height: 2 * window.innerHeight,
              scene: "0",
              background: "",
              selectMsgVal: "",
              previewWidth: 600,
              previewHeight: (2 * window.innerHeight) / ((2 * window.innerWidth) / 600),
              previewRectWidth: 0,
              previewRectHeight: 0,
            };
            (e.nlcanvas.push(n), (e.currentid = n.id));
          },
          adddevice: function (e, n) {
            ce(e);
            for (var t = 0; t < e.nlcanvas.length; t++) {
              var r = e.nlcanvas[t];
              e.currentid === r.id && e.nlcanvas[t].devices.push(n);
            }
          },
          beginlineing: function (e, n) {
            ((e.lineing = !0), (e.line.sourcepoint = n.sourcepoint), (e.line.source = n.source));
          },
          updatelinepoints: function (e, n) {
            var t = new N.b(e.line.sourcepoint.x, e.line.sourcepoint.y),
              r = e.line.source,
              i = (function (e) {
                var n = e.sinkpoint,
                  t = e.sourcepoint,
                  r = new N.b(t.x, t.y);
                (e.source.connectorOrientation == j.c.Bottom
                  ? (r.y += 25)
                  : e.source.connectorOrientation == j.c.Top
                    ? (r.y -= 25)
                    : e.source.connectorOrientation == j.c.Left
                      ? (r.x -= 25)
                      : e.source.connectorOrientation == j.c.Right && (r.x += 25),
                  n.x > t.x ? (n.x -= 20) : (n.x += 20));
                var i = new N.b(n.x, n.y),
                  o = new N.b((i.x + r.x) / 2, r.y),
                  a = new N.b((i.x + r.x) / 2, i.y);
                return (
                  e.source.connectorOrientation == j.c.Left && t.x < n.x && (o.x = a.x = r.x),
                  e.source.connectorOrientation == j.c.Right && t.x > n.x && (o.x = a.x = r.x),
                  [t.x, t.y, r.x, r.y, o.x, o.y, a.x, a.y, i.x, i.y, n.x, n.y]
                );
              })({ sourcepoint: t, sinkpoint: new N.b(n.x, n.y), source: r });
            ((e.line.config.points = i), (e.line.sinkpoint = new N.b(n.x, n.y)));
          },
          updatelinestate: function (e, n) {
            e.lineing = n;
          },
          addline: function (e, n) {
            ce(e);
            var t = Y(e);
            if (
              void 0 ===
              t.find(function (e) {
                return e.sink === n.sink && e.source === n.source;
              })
            ) {
              (n.sink.connections.length + 1 > n.sink.connectLimit && X(e, n.sink.connections[0].id),
                n.source.connections.length + 1 > n.source.connectLimit && X(e, n.source.connections[0].id));
              var r = "#12b2e2";
              (n.source.signalType == j.k.GND && (r = "#000000"), (n.source.signalType != j.k.VS && n.source.signalType != j.k.Power) || (r = "#ff3b1b"));
              var i = new P.a(n.source, n.sink, { dash: [], stroke: r, strokeWidth: 1, points: n.points, hitStrokeWidth: 4 });
              ((i.sourcepoint = n.sourcepoint),
                (i.sinkpoint = n.sinkpoint),
                i.sink.connections.push(i),
                i.source.connections.push(i),
                t.push(i),
                (e.line = { source: null, sink: null, config: { points: [0, 0, 0, 0], stroke: "gray", tension: 0, dash: [10, 5] } }),
                (i.config.points = Q({
                  sink: i.sink,
                  source: i.source,
                  sinkpoint: new N.b(n.sinkpoint.x, n.sinkpoint.y),
                  sourcepoint: new N.b(n.sourcepoint.x, n.sourcepoint.y),
                })),
                (e.lineing = !1));
            }
          },
          delselectedlines: function (e) {
            (Y(e).find(function (e) {
              return e.isSelected;
            }) && ce(e),
              $(e));
          },
          updatelinesbypoint: function (e, n) {
            for (var t = 0; t < e.nlcanvas.length; t++) {
              var r = e.nlcanvas[t];
              if (e.currentid === r.id) {
                var i = e.nlcanvas[t].connections;
                i.length > 0 &&
                  i.forEach(function (e) {
                    if (e.source.device.id === n.id) {
                      if ("" !== n.connectorId) return void (e.source.id === n.connectorId && ((e.config.points[0] = n.x), (e.config.points[1] = n.y)));
                      ((e.config.points[0] += n.x), (e.config.points[1] += n.y));
                    } else if (e.sink.device.id === n.id) {
                      if ("" !== n.connectorId) return void (e.sink.id === n.connectorId && ((e.config.points[2] = n.x), (e.config.points[3] = n.y)));
                      ((e.config.points[2] = n.x), (e.config.points[3] = n.y));
                    }
                  });
              }
            }
          },
          changecurrent: function (e, n) {
            e.currentid != n && (e.currentid = n);
          },
          setuid: function (e, n) {
            e.userid = n;
          },
          setcurdevid: function (e, n) {
            e.curdevid = n;
          },
          changecurrentscale: function (e, n) {
            for (var t = 0; t < e.nlcanvas.length; t++) {
              var r = e.nlcanvas[t];
              e.currentid === r.id && (e.nlcanvas[t].scale = n);
            }
          },
          clearselected: function (e) {
            for (var n = Z(e, e.currentid), t = 0; t < n.length; t++) {
              var r = n[t];
              r.isSelected && (r.isSelected = !1);
            }
            for (var i = Y(e), o = 0; o < i.length; o++) {
              var a = i[o];
              a.isSelected && (a.isSelected = !1);
            }
          },
          deviceselected: function (e, n) {
            var t = Z(e, e.currentid),
              r = t.find(function (e) {
                return e.id == n.deviceId;
              }),
              i = t.filter(function (e) {
                return e.isSelected;
              });
            n.ctrlKey
              ? (r.isSelected = !r.isSelected)
              : i.find(function (e) {
                  return e.id == n.deviceId;
                }) ||
                (t.forEach(function (e) {
                  return (e.isSelected = !1);
                }),
                (r.isSelected = !0));
          },
          selectall: function (e) {
            for (var n = Z(e, e.currentid), t = 0; t < n.length; t++) n[t].isSelected = !0;
            for (var r = Y(e), i = 0; i < r.length; i++) r[i].isSelected = !0;
          },
          moveselect: function (e, n) {
            for (
              var t = Z(e, e.currentid),
                r =
                  (e.nlcanvas.find(function (n) {
                    return n.id == e.currentid;
                  }),
                  0);
              r < t.length;
              r++
            ) {
              var i = t[r];
              i.isSelected && ((i.x += n.x), (i.y += n.y), (n.id = i.id), ie(e, n));
            }
          },
          areadeviceselected: function (e, n) {
            for (var t = Z(e, e.currentid), r = 0; r < t.length; r++) {
              var i = t[r];
              i.x >= n.startX && i.y >= n.startY && i.width + i.x <= n.endX && i.height + i.y <= n.endY ? (i.isSelected = !0) : (i.isSelected = !1);
            }
            for (var o = Y(e), a = 0; a < o.length; a++) {
              for (var c = o[a], s = [], u = [], d = 0; d < c.config.points.length; d += 2) {
                var l = c.config.points[d],
                  f = c.config.points[d + 1];
                s.length < 1
                  ? ((s = [l, f]), (u = [l, f]))
                  : (s[0] >= l && (s[0] = l), s[1] >= f && (s[1] = f), u[0] <= l && (u[0] = l), u[1] <= f && (u[1] = f));
              }
              s[0] >= n.startX && s[1] >= n.startY && u[0] <= n.endX && u[1] <= n.endY ? (c.isSelected = !0) : (c.isSelected = !1);
            }
          },
          updatelines: function (e, n) {
            ie(e, n);
          },
          delselecteddevices: function (e) {
            (ce(e), ee(e));
          },
          delDevciesById: function (e, n) {
            (ce(e), ne(e, n));
          },
          adddevmsg: function (e, n) {
            var t = e.nlcanvas.find(function (n) {
              return n.id == e.currentid;
            });
            if (!t.isLog) return !1;
            (t.msglist.unshift(n), t.msglist.length > 500 && t.msglist.pop());
          },
          updateWorkspaceBlur: function (e, n) {
            e.workspaceBlur = n;
          },
          updateDevLayerDom: function (e, n) {
            e.devLayerDom = n;
          },
          delAllSelected: function (e) {
            (ce(e), $(e), ee(e));
          },
        },
        actions: {
          sendZigbeeData: function (e, n) {
            e.commit;
            var t = e.state,
              r = Z(t, t.currentid),
              i = n.source.device,
              o = r
                .filter(function (e) {
                  return Object(L.p)(e);
                })
                .filter(function (e) {
                  return e.zigBeeInfo.Channel == i.zigBeeInfo.Channel && e.zigBeeInfo.PandID == i.zigBeeInfo.PandID;
                });
            i.IsCoordinator
              ? o.forEach(function (e) {
                  e.IsCoordinator || e.SignalConnector.receivedData(n);
                })
              : o.forEach(function (e) {
                  e.IsCoordinator && e.SignalConnector.receivedData(n);
                });
          },
          sendLoraData: function (e, n) {
            e.commit;
            var t = e.state,
              r = Z(t, t.currentid),
              i = n.source.device,
              o = r
                .filter(function (e) {
                  return Object(L.m)(e);
                })
                .filter(function (e) {
                  return e.loraInfo.Frequency == i.loraInfo.Frequency && e.loraInfo.Bandwidth == i.loraInfo.Bandwidth;
                });
            i.IsLoraMaster
              ? o.forEach(function (e) {
                  e.IsLoraMaster || e.SignalLoraConnector.receivedData(n);
                })
              : o.forEach(function (e) {
                  e.IsLoraMaster && e.SignalLoraConnector.receivedData(n);
                });
          },
          send485Data: function (e, n) {
            (e.commit, e.state);
            var t = [[], [], []];
            (K(n.source, t),
              t[2].forEach(function (e) {
                n.source != e && e.receivedData(n);
              }));
          },
          checkZigbeeState: function (e) {
            (e.commit,
              (function (e) {
                var n = Z(e, e.currentid),
                  t = n.filter(function (e) {
                    return Object(L.p)(e) && e.IsCoordinator;
                  });
                n.filter(function (e) {
                  return Object(L.p)(e) && !e.IsCoordinator;
                }).forEach(function (e) {
                  ((e.IsConnected = !1),
                    t.forEach(function (n) {
                      e.zigBeeInfo.Channel == n.zigBeeInfo.Channel && e.zigBeeInfo.PandID == n.zigBeeInfo.PandID && (e.IsConnected = !0);
                    }));
                });
              })(e.state));
          },
          onRefreshTick: function (e) {
            e.commit;
            var n = e.state;
            Z(n, n.currentid).forEach(function (e) {
              e.onRefreshTick();
            });
          },
          onEndexperiment: function (e, n) {
            e.commit;
            var t = e.state;
            re(t, n);
          },
          onStartexperiment: function (e, n) {
            e.commit;
            var t = e.state;
            te(t, n);
          },
          setEndexperiment: function (e) {
            e.commit;
            var n = e.state;
            ((n.nlcanvas.find(function (e) {
              return e.id == n.currentid;
            }).isConnect = !1),
              re(n, !0));
          },
          getcurrentcanvasToXml: function (e) {
            e.commit;
            var n = e.state;
            return J(n);
          },
          validateCurrent: function (e) {
            e.commit;
            var n = e.state;
            return G(n);
          },
          getCurrentDevices: function (e) {
            e.commit;
            var n = e.state;
            return Z(n, n.currentid);
          },
          importcanvas:
            ((S = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (n.commit, (r = n.state), (e.prev = 1), (e.next = 5), q(r, t.xml, t.single));
                        case 5:
                          (Z(r, r.currentid).forEach(function (e) {
                            ae(r, e);
                          }),
                            (e.next = 13));
                          break;
                        case 9:
                          ((e.prev = 9), (e.t0 = e.catch(1)), V.msg("导入失败！请检查格式", "error"));
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]],
                );
              }),
            )),
            function (e, n) {
              return S.apply(this, arguments);
            }),
          initcanvas:
            ((k = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n.commit, (r = n.state), (e.next = 4), q(r, t, !0));
                      case 4:
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return k.apply(this, arguments);
            }),
          receivedPortData: function (e, n) {
            e.commit;
            var t = e.state,
              r = t.nlcanvas.find(function (e) {
                return e.id == n.eid;
              });
            if (r && (!r || r.isConnect)) {
              var i = Z(t, n.eid).find(function (e) {
                return e.id == n.id;
              });
              i && i.receivedData({ source: null, data: n.data, additional: n });
            }
          },
          tcpStateNotify: function (e, n) {
            e.commit;
            var t = e.state;
            if (
              t.nlcanvas.find(function (e) {
                return e.id == n.eid;
              }).isConnect
            ) {
              var r = Z(t, n.eid).find(function (e) {
                return e.id == n.id;
              });
              r && r.tcpStateNotify(n);
            }
          },
          rfidRefreshConnection: function (e, n) {
            e.commit;
            var t = e.state;
            oe(t);
          },
          collisionDetection: function (e, n) {
            e.commit;
            var t = e.state;
            ae(t, n);
          },
          addHistory: function (e, n) {
            e.commit;
            var t = e.state;
            ce(t);
          },
          eachDevs:
            ((w = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n.commit, n.state, K(t, (r = [[], [], []])), e.abrupt("return", r[0]));
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return w.apply(this, arguments);
            }),
          revocation:
            ((y = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (n.commit, (r = n.state), (e.prev = 1), (e.next = 4), se(r));
                        case 4:
                          (G(r), (e.next = 10));
                          break;
                        case 7:
                          ((e.prev = 7), (e.t0 = e.catch(1)));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 7]],
                );
              }),
            )),
            function (e, n) {
              return y.apply(this, arguments);
            }),
          redo:
            ((x = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n.commit, (r = n.state), (e.next = 3), ue(r));
                      case 3:
                        G(r);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return x.apply(this, arguments);
            }),
          upindex:
            ((b = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n.commit,
                          (r = n.state),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })),
                          (a = r.devLayerDom.getNode().children.filter(function (e) {
                            return e.VueComponent.$vnode.tag.indexOf("vGroup") > -1;
                          })),
                          o.forEach(function (e) {
                            var n = a.find(function (n) {
                              return n.VueComponent.$parent.model.id == e.id;
                            });
                            n.index >= a.length - 1 || (n.moveUp(), n.getStage().batchDraw());
                          }),
                          i.forEach(function (e) {
                            var n = a.find(function (n) {
                              return n.VueComponent.$parent.model.id == e.id;
                            });
                            e.zIndex = n.index;
                          }));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return b.apply(this, arguments);
            }),
          downindex:
            ((v = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n.commit,
                          (r = n.state),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })),
                          (a = r.devLayerDom.getNode().children.filter(function (e) {
                            return e.VueComponent.$vnode.tag.indexOf("vGroup") > -1;
                          })),
                          o.forEach(function (e) {
                            var n = a.find(function (n) {
                              return n.VueComponent.$parent.model.id == e.id;
                            });
                            n.index >= a.length - 1 || (n.moveUp(), n.getStage().batchDraw());
                          }),
                          i.forEach(function (e) {
                            var n = a.find(function (n) {
                              return n.VueComponent.$parent.model.id == e.id;
                            });
                            e.zIndex = n.index;
                          }));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return v.apply(this, arguments);
            }),
          topindex:
            ((m = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n.commit,
                          (r = n.state),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })),
                          (a = r.devLayerDom.getNode().children.filter(function (e) {
                            return e.VueComponent.$vnode.tag.indexOf("vGroup") > -1;
                          })),
                          o.forEach(function (e) {
                            var n = a.find(function (n) {
                              return n.VueComponent.$parent.model.id == e.id;
                            });
                            (n.zIndex(a.length - 1), n.getStage().batchDraw());
                          }),
                          i.forEach(function (e) {
                            var n = a.find(function (n) {
                              return n.VueComponent.$parent.model.id == e.id;
                            });
                            e.zIndex = n.index;
                          }));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return m.apply(this, arguments);
            }),
          bottomindex:
            ((g = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n.commit,
                          (r = n.state),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })),
                          (a = r.devLayerDom.getNode().children.filter(function (e) {
                            return e.VueComponent.$vnode.tag.indexOf("vGroup") > -1;
                          })),
                          o.forEach(function (e) {
                            var n = a.find(function (n) {
                              return n.VueComponent.$parent.model.id == e.id;
                            });
                            (n.moveToBottom(), n.getStage().batchDraw());
                          }),
                          i.forEach(function (e) {
                            var n = a.find(function (n) {
                              return n.VueComponent.$parent.model.id == e.id;
                            });
                            e.zIndex = n.index;
                          }));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return g.apply(this, arguments);
            }),
          leftalign:
            ((h = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          (r = n.state),
                          ce(r),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })) || !(o.length < 2))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        ((a = o.reduce(function (e, n) {
                          return e.x <= n.x ? e : n;
                        })),
                          o.forEach(function (e) {
                            e.id != a.id && (ie(r, { id: e.id, x: a.x - e.x, y: 0, connectorId: "" }), (e.x = a.x));
                          }));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return h.apply(this, arguments);
            }),
          rightalign:
            ((p = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          (r = n.state),
                          ce(r),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })) || !(o.length < 2))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        ((a = o.reduce(function (e, n) {
                          return e.x + e.width >= n.x + n.width ? e : n;
                        })),
                          o.forEach(function (e) {
                            if (a.id != e.id) {
                              var n = a.x + a.width - e.width;
                              (ie(r, { id: e.id, x: n - e.x, y: 0, connectorId: "" }), (e.x = n));
                            }
                          }));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return p.apply(this, arguments);
            }),
          topalign:
            ((f = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          (r = n.state),
                          ce(r),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })) || !(o.length < 2))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        ((a = o.reduce(function (e, n) {
                          return e.y <= n.y ? e : n;
                        }).y),
                          o.forEach(function (e) {
                            (ie(r, { id: e.id, x: 0, y: a - e.y, connectorId: "" }), (e.y = a));
                          }));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return f.apply(this, arguments);
            }),
          bottomalign:
            ((l = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          (r = n.state),
                          ce(r),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })) || !(o.length < 2))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        ((a = o.reduce(function (e, n) {
                          return e.y + e.height >= n.y + n.height ? e : n;
                        })),
                          o.forEach(function (e) {
                            if (a.id != e.id) {
                              var n = a.y + a.height - e.height;
                              (ie(r, { id: e.id, x: 0, y: n - e.y, connectorId: "" }), (e.y = n));
                            }
                          }));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return l.apply(this, arguments);
            }),
          horizontalalign:
            ((d = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a, c, s;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          (r = n.state),
                          ce(r),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })) || !(o.length < 2))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        ((a = o.reduce(function (e, n) {
                          return e.x + e.width <= n.x + n.width ? e : n;
                        })),
                          (c = o.reduce(function (e, n) {
                            return e.x + e.width > n.x + n.width ? e : n;
                          })),
                          (s = (c.x + a.x) / 2),
                          o.forEach(function (e) {
                            var n = s - e.width / 2;
                            (ie(r, { id: e.id, x: n - e.x, y: 0, connectorId: "" }), (e.x = n));
                          }));
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return d.apply(this, arguments);
            }),
          verticalalign:
            ((u = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a, c, s;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          (r = n.state),
                          ce(r),
                          (i = Z(r, r.currentid)),
                          (o = i.filter(function (e) {
                            return e.isSelected;
                          })) || !(o.length < 2))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        ((a = o.reduce(function (e, n) {
                          return e.y <= n.y ? e : n;
                        })),
                          (c = o.reduce(function (e, n) {
                            return e.y + e.height > n.y + n.height ? e : n;
                          })),
                          (s = (a.y + c.y) / 2),
                          o.forEach(function (e) {
                            var n = s - e.height / 2;
                            (ie(r, { id: e.id, x: 0, y: n - e.y, connectorId: "" }), (e.y = n));
                          }));
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return u.apply(this, arguments);
            }),
          copy:
            ((s = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n.commit,
                          (r = n.state),
                          (i = []),
                          t &&
                            t.deviceSelected &&
                            (i = t.deviceSelected.map(function (e, n) {
                              var t = null;
                              try {
                                t = new B.Builder().buildObject(e.serialize());
                              } catch (e) {}
                              return { devKey: e.devKey, x: e.x, y: e.y, id: e.id, settings: t };
                            })),
                          (r.copy_dev = i),
                          (o = []),
                          t &&
                            t.connectSelected &&
                            (o = t.connectSelected.map(function (e) {
                              return {
                                SinkConnectorName: e.sink.name,
                                SinkID: e.sink.device.id,
                                SourceConnectorName: e.source.name,
                                SourceID: e.source.device.id,
                              };
                            })),
                          (r.copy_connect = o),
                          le(r.copy_dev, r.copy_connect));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return s.apply(this, arguments);
            }),
          paste:
            ((c = Object(O.a)(
              regeneratorRuntime.mark(function e(n) {
                var t, r, i, o, a, c, s;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          (t = n.state),
                          ce(t),
                          (r = t.nlcanvas.find(function (e) {
                            return e.id == t.currentid;
                          })).devices.forEach(function (e) {
                            return (e.isSelected = !1);
                          }),
                          (i = t.copy_dev),
                          (o = JSON.parse(JSON.stringify(t.copy_connect))),
                          i && !(i.length < 1))
                        ) {
                          e.next = 11;
                          break;
                        }
                        return ((e.next = 9), navigator.clipboard.readText());
                      case 9:
                        ((a = e.sent), /^clipboard_dev:/.test(a) && ((a = a.replace("clipboard_dev:", "")), (c = JSON.parse(a)), (i = c.dev), (o = c.connect)));
                      case 11:
                        ((s = []),
                          i.forEach(
                            (function () {
                              var e = Object(O.a)(
                                regeneratorRuntime.mark(function e(n) {
                                  var t, i, a, c, u, d;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (n.x += 10),
                                              (n.y += 10),
                                              (t = Object(E.b)(n.devKey, n.x, n.y)),
                                              o.forEach(function (e) {
                                                (e.SinkID == n.id && (e.SinkID = t.id), e.SourceID == n.id && (e.SourceID = t.id));
                                              }),
                                              Object(L.p)(n) &&
                                                ((t.plateType = n.plateType), (t.powerState = n.powerState), (t.isPowerSupply = n.isPowerSupply)),
                                              (e.prev = 5),
                                              (i = t.id),
                                              (a = t.x),
                                              (c = t.y),
                                              (e.next = 11),
                                              F.parseStringPromise(n.settings)
                                            );
                                          case 11:
                                            ((u = e.sent), (d = u.root), t.deSerialize(d), (t.id = i), (t.x = a), (t.y = c), (e.next = 22));
                                            break;
                                          case 19:
                                            ((e.prev = 19), (e.t0 = e.catch(5)));
                                          case 22:
                                            ((t.devName = t.devName + "_" + Object(A.c)(0, 100)), r.devices.push(t), s.push(t));
                                          case 25:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[5, 19]],
                                  );
                                }),
                              );
                              return function (n) {
                                return e.apply(this, arguments);
                              };
                            })(),
                          ),
                          o.forEach(function (e) {
                            var n = r.devices.find(function (n) {
                                return n.id == e.SourceID;
                              }),
                              t = r.devices.find(function (n) {
                                return n.id == e.SinkID;
                              });
                            if (n && t) {
                              var i,
                                o = e.SourceConnectorName.toLowerCase();
                              n.getconnectors().forEach(function (e) {
                                e[0].toLowerCase() == o && (i = e[1]);
                              });
                              var a,
                                c = e.SinkConnectorName.toLowerCase();
                              if (
                                (t.getconnectors().forEach(function (e) {
                                  e[0].toLowerCase() == c && (a = e[1]);
                                }),
                                !i || !a)
                              )
                                return;
                              var s = "#12b2e2";
                              ((i.signalType != j.k.GND && i.signalType != j.k.None) || (s = "#000000"),
                                (i.signalType != j.k.VS && i.signalType != j.k.Power) || (s = "#ff3b1b"));
                              var u = new P.a(i, a, { dash: [], stroke: s, strokeWidth: 1, points: [], hitStrokeWidth: 4, isSelected: !0 });
                              ((u.sourcepoint = i.getPositon()),
                                (u.sinkpoint = a.getPositon()),
                                u.sink.connections.push(u),
                                u.source.connections.push(u),
                                (u.config.points = Q({
                                  sink: u.sink,
                                  source: u.source,
                                  sinkpoint: new N.b(u.sinkpoint.x, u.sinkpoint.y),
                                  sourcepoint: new N.b(u.sourcepoint.x, u.sourcepoint.y),
                                })),
                                r.connections.push(u));
                            }
                          }),
                          setTimeout(function () {
                            s.forEach(function (e) {
                              e.isSelected = !0;
                            });
                          }, 300),
                          setTimeout(function () {
                            G(t);
                          }, 1e3));
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e) {
              return c.apply(this, arguments);
            }),
          clip:
            ((a = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n.commit,
                          (r = n.state),
                          ce(r),
                          (r.copy_dev = t.deviceSelected),
                          r.copy_dev.forEach(function (e) {
                            ne(r, e.id);
                          }),
                          (i = []),
                          t.connectSelected.forEach(function (e) {
                            i.push({
                              SinkConnectorName: e.sink.name,
                              SinkID: e.sink.device.id,
                              SourceConnectorName: e.source.name,
                              SourceID: e.source.device.id,
                            });
                          }),
                          (r.copy_connect = i),
                          le(r.copy_dev, r.copy_connect));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return a.apply(this, arguments);
            }),
          IsConnectedPower:
            ((o = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          n.state,
                          (r = [[], [], []]),
                          K(t.vs, r),
                          (i = r[0].filter(function (e) {
                            return e.deviceKind == j.e.Power;
                          })),
                          (o = [[], [], []]),
                          K(t.gnd, o),
                          (a = o[0].filter(function (e) {
                            return e.deviceKind == j.e.Power;
                          })),
                          1 == i.length && 1 == a.length)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return", null);
                      case 10:
                        if (i[0].id == a[0].id) {
                          e.next = 13;
                          break;
                        }
                        return e.abrupt("return", null);
                      case 13:
                        return e.abrupt("return", i[0]);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return o.apply(this, arguments);
            }),
          IsConnectedVS:
            ((i = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r, i, o, a, c;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.commit,
                          n.state,
                          K(t, (r = [[], [], []])),
                          !(i = r[0]).find(function (e) {
                            return e.deviceKind == j.e.Power;
                          }))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          i.find(function (e) {
                            return e.deviceKind == j.e.Power;
                          }).voltage,
                        );
                      case 6:
                        if (
                          !i.find(function (e) {
                            return e.deviceKind == j.e.Actuator;
                          })
                        ) {
                          e.next = 18;
                          break;
                        }
                        if (
                          ((o = i.find(function (e) {
                            return e.deviceKind == j.e.Actuator;
                          })),
                          (a = r[1].find(function (e) {
                            return e.source.id == t.id || e.sink.id == o.id;
                          })),
                          "VS_2" != (c = a.sink.id == t.id ? a.source : a.sink).name)
                        ) {
                          e.next = 12;
                          break;
                        }
                        return e.abrupt("return", o.voltage);
                      case 12:
                        if ("VS_1" != c.name) {
                          e.next = 18;
                          break;
                        }
                        if (o.powerState != j.j.Normal || 0 != o.powerSwitch) {
                          e.next = 17;
                          break;
                        }
                        return e.abrupt("return", o.voltage);
                      case 17:
                      case 18:
                        return e.abrupt("return", 0);
                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return i.apply(this, arguments);
            }),
          getCrossingDevs:
            ((r = Object(O.a)(
              regeneratorRuntime.mark(function e(n, t) {
                var r;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n.commit, (r = n.state), e.abrupt("return", de(r, t.x, t.y, t.w, t.h)));
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )),
            function (e, n) {
              return r.apply(this, arguments);
            }),
          setLogStatus: function (e) {
            e.commit;
            var n = e.state,
              t = n.nlcanvas.find(function (e) {
                return e.id == n.currentid;
              });
            t.isLog = !t.isLog;
          },
          setPreviewRact: function (e, n) {
            e.commit;
            var t = e.state,
              r = t.nlcanvas.find(function (e) {
                return e.id == t.currentid;
              });
            ((r.previewRectWidth = n.width), (r.previewRectHeight = n.height));
          },
        },
        getters: {
          getcurrentcanvas: function (e) {
            return e.nlcanvas.find(function (n) {
              return n.id == e.currentid;
            });
          },
          getMaxZindex: function (e) {
            var n = Z(e, e.currentid);
            return n.length < 1
              ? 0
              : n.reduce(function (e, n) {
                  return e.zIndex >= n.zIndex ? e : n;
                }).zIndex;
          },
          getuid: function (e) {
            return e.userid;
          },
          getLoraNodeDevices: function (e) {
            var n = "$#STMD,1,1,1,2,",
              t = !1,
              r = !1;
            return (
              Z(e, e.currentid).forEach(function (i) {
                "loraNode" == i.devKey &&
                  i.id == e.curdevid &&
                  i
                    .getconnectors()
                    .map(function (e) {
                      return e[1];
                    })
                    .find(function (e) {
                      return e.signalType == j.k.Signal_485_P && "RS485_1_P" == e.name;
                    })
                    .connections.forEach(function (e) {
                      if ("ADAM4017" == e.sink.device.devKey) {
                        r = !0;
                        for (
                          var i = function (t) {
                              var r = "PVIN" + t.toString(),
                                i = e.sink.device
                                  .getconnectors()
                                  .map(function (e) {
                                    return e[1];
                                  })
                                  .find(function (e) {
                                    return e.signalType == j.k.Signal_Analog_P && e.name == r;
                                  });
                              if (i.connections.length > 0) {
                                var o = i.connections[0];
                                n =
                                  "ADAM4017" == o.sink.device.devKey
                                    ? "humi" == o.source.tip
                                      ? n + (t + 16).toString() + o.source.device.getInfo(2)
                                      : n + (t + 16).toString() + o.source.device.getInfo()
                                    : "humi" == o.sink.tip
                                      ? n + (t + 16).toString() + o.sink.device.getInfo(2)
                                      : n + (t + 16).toString() + o.sink.device.getInfo();
                              }
                            },
                            o = 0;
                          o < 8;
                          o++
                        )
                          i(o);
                      } else if ("ADAM4017" == e.source.device.devKey) {
                        r = !0;
                        for (
                          var a = function (t) {
                              var r = "PVIN" + t.toString(),
                                i = e.source.device
                                  .getconnectors()
                                  .map(function (e) {
                                    return e[1];
                                  })
                                  .find(function (e) {
                                    return e.signalType == j.k.Signal_Analog_P && e.name == r;
                                  });
                              if (i.connections.length > 0) {
                                var o = i.connections[0];
                                n =
                                  "ADAM4017" == o.sink.device.devKey
                                    ? "humi" == o.source.tip
                                      ? n + (t + 16).toString() + o.source.device.getInfo(2)
                                      : n + (t + 16).toString() + o.source.device.getInfo()
                                    : "humi" == o.sink.tip
                                      ? n + (t + 16).toString() + o.sink.device.getInfo(2)
                                      : n + (t + 16).toString() + o.sink.device.getInfo();
                              }
                            },
                            c = 0;
                          c < 8;
                          c++
                        )
                          a(c);
                      } else if ("ADAM4150" == e.sink.device.devKey) {
                        t = !0;
                        for (
                          var s = function (t) {
                              var r = "DO" + t.toString(),
                                i = e.sink.device
                                  .getconnectors()
                                  .map(function (e) {
                                    return e[1];
                                  })
                                  .find(function (e) {
                                    return e.signalType == j.k.Signal_Digital_O && e.name == r;
                                  });
                              if (i.connections.length > 0) {
                                var o = i.connections[0];
                                n =
                                  "ADAM4150" == o.sink.device.devKey
                                    ? n + t.toString() + o.source.device.getInfo()
                                    : n + t.toString() + o.sink.device.getInfo();
                              }
                            },
                            u = 0;
                          u < 7;
                          u++
                        )
                          s(u);
                      } else if ("ADAM4150" == e.source.device.devKey) {
                        t = !0;
                        for (
                          var d = function (t) {
                              var r = "DO" + t.toString(),
                                i = e.source.device
                                  .getconnectors()
                                  .map(function (e) {
                                    return e[1];
                                  })
                                  .find(function (e) {
                                    return e.signalType == j.k.Signal_Digital_O && e.name == r;
                                  });
                              if (i.connections.length > 0) {
                                var o = i.connections[0];
                                n =
                                  "ADAM4150" == o.sink.device.devKey
                                    ? n + t.toString() + o.source.device.getInfo()
                                    : n + t.toString() + o.sink.device.getInfo();
                              }
                            },
                            l = 0;
                          l < 7;
                          l++
                        )
                          d(l);
                      }
                    });
              }),
              r || (n = n.substring(0, 9) + "0" + n.substr(10, n.length)),
              t || (n = n.substring(0, 11) + "0" + n.substr(12, n.length)),
              n.length < 16 && (n += "#"),
              n.replace(/(.*)\|/, "$1#")
            );
          },
          getLoraMasterByLoraNodeMode: function (e) {
            return function (n) {
              var t = Z(e, e.currentid).filter(function (e) {
                return Object(L.m)(e) && e.IsLoraMaster && e.loraInfo.Frequency == n.loraInfo.Frequency && e.loraInfo.Bandwidth == n.loraInfo.Bandwidth;
              });
              return 1 == t.length ? t[0].LoraMasterInfo.Mode : 0;
            };
          },
          getDevsByConnector: function (e) {
            return function (e) {
              var n = [[], [], []];
              return (K(e, n), n[0]);
            };
          },
          getConnectorByConnector: function (e) {
            return function (e) {
              var n = [[], [], []];
              return (K(e, n), n[2]);
            };
          },
        },
      },
      pe = t("4c94"),
      he = t("482f"),
      ge = t("70b0"),
      me = new T.a(),
      ve = pe.d;
    ((ve.on_getPortsResponse = function (e) {
      if (0 == xe.state.phyports.length) xe.state.phyports = e.physicsPort;
      else {
        var n = xe.state.phyports;
        (e.physicsPort.forEach(function (e) {
          n.find(function (n) {
            return n.name == e.name;
          }) || n.push(e);
        }),
          (xe.state.phyports = n));
      }
      if (0 == xe.state.virports.length) xe.state.virports = e.virturePort;
      else {
        var t = xe.state.virports;
        (e.virturePort.forEach(function (e) {
          t.find(function (n) {
            return n.name == e.name;
          }) || t.push(e);
        }),
          (xe.state.virports = t));
      }
      if (0 == xe.state.vrbinds.length)
        xe.state.vrbinds = e.virturePort.map(function (e) {
          var n = new be();
          return ((n.Id = Object(A.v)()), (n.VirtualPort = e.name), (n.PhyicalPort = ""), n);
        });
      else {
        var r = xe.state.vrbinds;
        (e.virturePort.forEach(function (e) {
          if (
            !r.find(function (n) {
              return n.VirtualPort == e.name;
            })
          ) {
            var n = new be();
            ((n.Id = Object(A.v)()), (n.VirtualPort = e.name), (n.PhyicalPort = ""), r.push(n));
          }
        }),
          (xe.state.vrbinds = r));
      }
    }),
      (ve.on_open = function () {
        xe.state.ready = !0;
      }),
      (ve.on_close = function () {
        xe.state.ready = !1;
      }),
      (ve.on_startEmulatorResponse = (function () {
        var e = Object(O.a)(
          regeneratorRuntime.mark(function e(n) {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (0 != n.code) {
                      e.next = 4;
                      break;
                    }
                    (me.msg(ge.a.t("lang.实验开启成功"), "success"), (e.next = 7));
                    break;
                  case 4:
                    return ((e.next = 6), we.dispatch("kcanvas/setEndexperiment"));
                  case 6:
                    me.msg(ge.a.t("lang.实验启动失败") + n.errMsg, "error");
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (n) {
          return e.apply(this, arguments);
        };
      })()),
      (ve.on_endEmulatorResponse = function (e) {
        me.msg(ge.a.t("lang.实验已停止"), "success");
      }),
      (ve.on_getLcoalIPResponse = function (e) {
        xe.state.ips = e;
      }),
      (ve.on_addVirturePortResponse = function (e) {
        (e.virturePort.forEach(function (e) {
          if (
            !xe.state.virports.find(function (n) {
              return e.name == n.name;
            })
          ) {
            xe.state.virports.push(e);
            var n = new be();
            ((n.Id = Object(A.v)()), (n.VirtualPort = e.name), (n.PhyicalPort = ""), xe.state.vrbinds.push(n));
          }
        }),
          me.loading(!1));
      }),
      (ve.on_delVirturePortResponse = function (e) {
        for (
          var n = function (n) {
              var t = xe.state.virports[n];
              e.virturePort.find(function (e) {
                return t.name == e.name;
              }) || xe.state.virports.splice(n, 1);
            },
            t = 0;
          t < xe.state.virports.length;
          t++
        )
          n(t);
        for (
          var r = function (n) {
              var t = xe.state.vrbinds[n];
              e.virturePort.find(function (e) {
                return t.VirtualPort == e.name;
              }) || xe.state.vrbinds.splice(n, 1);
            },
            i = 0;
          i < xe.state.vrbinds.length;
          i++
        )
          r(i);
        me.loading(!1);
      }),
      (ve.on_receivedData = (function () {
        var e = Object(O.a)(
          regeneratorRuntime.mark(function e(n) {
            var t, r, i, o, a;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ("0" == n.type) {
                      e.next = 9;
                      break;
                    }
                    return ((e.next = 5), we.dispatch("kcanvas/receivedPortData", n));
                  case 5:
                    ((t = xe.state.vrbinds.find(function (e) {
                      return e.VirtualPort == n.portName;
                    })) &&
                      t.PhyicalPort &&
                      (((r = new pe.b()).data = n.data),
                      (r.eid = n.eid),
                      (r.id = n.id),
                      (r.portName = t.PhyicalPort),
                      (r.type = "0"),
                      ve.in_sendVirtualData(r)),
                      (e.next = 21));
                    break;
                  case 9:
                    if (
                      !(i = xe.state.vrbinds.find(function (e) {
                        return e.PhyicalPort == n.portName;
                      }))
                    ) {
                      e.next = 21;
                      break;
                    }
                    if (
                      ((o = xe.state.devicebinds.find(function (e) {
                        return e.VirtualPort == i.VirtualPort;
                      })) &&
                        o.VirtualPort &&
                        (((a = new pe.b()).data = n.data),
                        (a.eid = n.eid),
                        (a.id = n.id),
                        (a.portName = o.VirtualPort),
                        (a.type = "1"),
                        ve.in_sendVirtualData(a)),
                      !o)
                    ) {
                      e.next = 21;
                      break;
                    }
                    return (
                      (n.id = o.DeviceId),
                      (n.portName = o.VirtualPort),
                      (n.baudRate = i.BaudRate),
                      (e.next = 21),
                      we.dispatch("kcanvas/receivedPortData", n)
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (n) {
          return e.apply(this, arguments);
        };
      })()),
      (ve.on_tcpStateNotify = function (e) {
        we.dispatch("kcanvas/tcpStateNotify", e);
      }),
      (ve.on_connectError = function (e) {
        "0" == e.type && (xe.state.forbid = !0);
      }),
      (ve.on_getVersionResponse = function (e) {
        xe.state.version = e;
        var n = e;
        he.a.app_socker_compatibility &&
          !he.a.app_socker_compatibility.includes(n) &&
          n &&
          me.alert(
            "您的桌面仿真助手版本（{".concat(n, "}）不兼容当前仿真系统，有可能出现不可预料的问题，请您下载最新的仿真助手！"),
            "提示信息",
            function (e, n) {},
            {
              showCancelButton: !0,
              confirmButtonText: "一键下载",
              cancelButtonText: "取消",
              callback: function (e, n) {
                if ("confirm" == e) {
                  var t = document.createElement("a");
                  ((t.download = "虚拟仿真助手"),
                    (t.style.display = "none"),
                    (t.href = he.a.web_host + "/api/FileManager/Download/NLEEmulatorClientAssistant.exe"),
                    document.body.appendChild(t),
                    t.click(),
                    document.body.removeChild(t));
                }
              },
            },
          );
      }));
    var be = function e() {
        (Object(_.a)(this, e), (this.Id = Object(A.v)()), (this.VirtualPort = ""), (this.PhyicalPort = ""), (this.BaudRate = 9600));
      },
      xe = {
        namespaced: !0,
        state: { ready: !1, forbid: !1, ips: [], help: ve, phyports: [], virports: [], devicebinds: [], vrbinds: [], nlserialserver: [], version: null },
        mutations: {
          selectPort: function (e, n) {
            var t = we.getters["kcanvas/getcurrentcanvas"].id,
              r = e.devicebinds,
              i = r.find(function (e) {
                return e.ConnectName == n.ConnectName && e.DeviceId == n.DeviceId && e.EmulatorId == t;
              });
            (i
              ? ((i.VirtualPort = n.VirtualPort),
                (i.BaudRate = n.BaudRate),
                (i.TcpPort = n.TcpPort),
                (i.CloudAddress = n.CloudAddress),
                (n.CloudPort = n.CloudPort))
              : r.push(n),
              e.virports.forEach(function (e) {
                ((e.use = !1),
                  r.find(function (n) {
                    return n.VirtualPort == e.name;
                  }) && (e.use = !0));
              }));
          },
          deldevbind: function (e, n) {
            for (
              var t = e.devicebinds,
                r = function (r) {
                  var o = t[r];
                  (o.DeviceId == n &&
                    (o.VirtualPort &&
                      e.virports.forEach(function (e) {
                        e.name == o.VirtualPort && (e.use = !1);
                      }),
                    t.splice(r, 1),
                    r--),
                    (i = r));
                },
                i = 0;
              i < t.length;
              i++
            )
              r(i);
          },
          dellabbind: function (e, n) {
            for (
              var t = e.devicebinds,
                r = function (r) {
                  var o = t[r];
                  (o.EmulatorId == n &&
                    (o.VirtualPort &&
                      e.virports.forEach(function (e) {
                        e.name == o.VirtualPort && (e.use = !1);
                      }),
                    t.splice(r, 1),
                    r--),
                    (i = r));
                },
                i = 0;
              i < t.length;
              i++
            )
              r(i);
          },
        },
        actions: {
          initSocketHelp: function () {
            ve.initHelp();
          },
          getPhysicalPorts: function (e) {
            ve.in_getPorts();
          },
          addVirPort: function (e) {
            (me.loading(!0, "创建串口中，请稍后...", !0), ve.in_addVirturePort());
          },
          delVirPort: function (e, n) {
            me.loading(!0, "加载中", !0);
            var t = new pe.a();
            ((t.port = n), ve.in_delVirturePort(t));
          },
          sendPortData: function (e, n) {
            ve.in_sendVirtualData(n);
          },
          startEmulator: function (e, n) {
            e.commit;
            var t = e.state,
              r = new pe.c();
            ((r.eid = n),
              (r.portMap = new Array()),
              t.devicebinds.forEach(function (e) {
                e.EmulatorId == n &&
                  ("" != e.VirtualPort && e.VirtualPort && r.portMap.push({ type: "1", id: e.DeviceId, baudRate: e.BaudRate, port: e.VirtualPort }),
                  "" != e.CloudAddress && e.CloudAddress && r.portMap.push({ type: "3", id: e.DeviceId, cloudAddress: e.CloudAddress, port: e.CloudPort }),
                  0 != e.TcpPort && e.TcpPort && r.portMap.push({ type: "2", id: e.DeviceId, cloudAddress: e.CloudAddress, port: e.TcpPort.toString() }));
              }),
              t.vrbinds.forEach(function (e) {
                "" != e.PhyicalPort && r.portMap.push({ type: "0", id: "", baudRate: e.BaudRate, port: e.PhyicalPort });
              }),
              ve.in_startEmulator(r));
          },
          endEmulator: function (e, n) {
            (e.commit, e.state, ve.in_endEmulator({ eid: n }));
          },
          isVirturePhyCombine: function (e, n) {
            e.commit;
            var t = e.state.vrbinds.find(function (e) {
              return e.VirtualPort == n;
            });
            return !(!t || !t.PhyicalPort);
          },
        },
        getters: {
          vrbinds: function (e) {
            return e.vrbinds;
          },
        },
      },
      ye = xe;
    R.a.use(I.a);
    var we = (n.a = new I.a.Store({
      state: {},
      mutations: {},
      actions: {},
      modules: {
        kcanvas: fe,
        user: {
          namespaced: !0,
          state: { user: { roles: [] }, isLogin: !1, visibleSize: { width: 0, height: 0 } },
          mutations: {
            initUser: function (e, n) {
              ((e.user = n), (e.isLogin = !0));
            },
            initVisibleSize: function (e, n) {
              e.visibleSize = n;
            },
          },
          getters: {
            userId: function (e) {
              return e.user.userId;
            },
            userType: function (e) {
              var n = "未知";
              return (
                e.user.roles.forEach(function (e) {
                  ("学生" != e.roleName && "老师" != e.roleName) || (n = e.roleName);
                }),
                n
              );
            },
            visibleSize: function (e) {
              return e.visibleSize;
            },
          },
          actions: {},
        },
        socketpipe: ye,
      },
    }));
  },
  "068e": function (e, n, t) {
    (e.exports = t("24fb")(!1)).push([
      e.i,
      "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;height:100vh}.el-main{padding:0!important}",
      "",
    ]);
  },
  "0f0b": function (e, n, t) {
    "use strict";
    (t.d(n, "a", function () {
      return u;
    }),
      t("99af"),
      t("4160"),
      t("b0c0"),
      t("159b"));
    var r = t("9f12"),
      i = t("53fe"),
      o = t("73ec"),
      a = t("03cd"),
      c = t("555b"),
      s = t("0613"),
      u = (function () {
        function e(n, t, i, c, s, u, d, l) {
          (Object(r.a)(this, e),
            (this.id = ""),
            (this.name = ""),
            (this.tip = ""),
            (this.index = 0),
            (this.in_hover = !0),
            (this.panelconfig = { x: 0, y: 0 }),
            (this.connectorType = a.d.Node),
            (this.signalType = a.k.None),
            (this.connectorOrientation = a.c.None),
            (this.connections = new Array()),
            (this.device = n),
            (this.name = t),
            (this.signalType = i),
            (this.config = u),
            (this.index = s),
            (this.id = Object(o.v)()),
            (this.connectorOrientation = c),
            (this.tip = d || this.name),
            (this.connectLimit = l >= 0 ? l : 9999));
        }
        return (
          Object(i.a)(e, [
            {
              key: "getPositon",
              value: function () {
                var e = this.device.panelconfig && this.in_hover ? this.device.panelconfig.x : this.panelconfig.x,
                  n = this.device.panelconfig && this.in_hover ? this.device.panelconfig.y : this.panelconfig.y,
                  t = this.device.x + (this.config ? this.config.x : 0) + (this.config ? this.config.width : 0) / 2 + e,
                  r = this.device.y + (this.config ? this.config.y : 0) + (this.config ? this.config.height : 0) / 2 + n;
                return new c.b(t, r);
              },
            },
            {
              key: "receivedData",
              value: function (e) {
                (this.device.receivedData({
                  source: this,
                  tracing: e.source,
                  data: e.data,
                  baudRate: e.baudRate,
                  additional: e.additional,
                  isVP: e.isVP,
                  scanData: e.scanData,
                  sensorValues: e.sensorValues,
                }),
                  null != this.onDataReceived &&
                    this.onDataReceived(this, {
                      source: this,
                      data: e.data,
                      baudRate: e.baudRate,
                      additional: e.additional,
                      isVP: e.isVP,
                      scanData: e.scanData,
                      sensorValues: e.sensorValues,
                    }),
                  this.connections.forEach(function (e) {
                    ((e.showdiamond = !1),
                      setTimeout(function () {
                        e.showdiamond = !0;
                      }, 30));
                  }));
              },
            },
            {
              key: "sendData",
              value: function (e) {
                var n = this;
                this.signalType != a.k.Signal_ZigBee
                  ? this.signalType != a.k.Signal_Lora
                    ? this.signalType != a.k.Signal_485_P
                      ? this.connections.forEach(function (t) {
                          t.sink === n
                            ? t.source.receivedData({
                                source: n,
                                data: e.data,
                                baudRate: e.baudRate,
                                additional: e.additional,
                                isVP: e.isVP,
                                scanData: e.scanData,
                                sensorValues: e.sensorValues,
                              })
                            : t.source === n &&
                              t.sink.receivedData({
                                source: n,
                                data: e.data,
                                baudRate: e.baudRate,
                                additional: e.additional,
                                isVP: e.isVP,
                                scanData: e.scanData,
                                sensorValues: e.sensorValues,
                              });
                        })
                      : s.a.dispatch("kcanvas/send485Data", {
                          source: this,
                          data: e.data,
                          baudRate: e.baudRate,
                          additional: e.additional,
                          scanData: e.scanData,
                          sensorValues: e.sensorValues,
                        })
                    : s.a.dispatch("kcanvas/sendLoraData", {
                        source: this,
                        data: e.data,
                        baudRate: e.baudRate,
                        additional: e.additional,
                        scanData: e.scanData,
                        sensorValues: e.sensorValues,
                      })
                  : s.a.dispatch("kcanvas/sendZigbeeData", {
                      source: this,
                      data: e.data,
                      baudRate: e.baudRate,
                      additional: e.additional,
                      scanData: e.scanData,
                      sensorValues: e.sensorValues,
                    });
              },
            },
          ]),
          e
        );
      })();
  },
  1: function (e, n) {},
  "184e": function (e, n, t) {
    var r = t("068e");
    ("string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals),
      (0, t("499e").default)("67f46ba6", r, !0, { sourceMap: !1, shadowMode: !1 }));
  },
  "19b2": function (e, n, t) {
    "use strict";
    (t.r(n),
      t.d(n, "lang", function () {
        return r;
      }));
    var r = {
      自动检测: "自动检测",
      简体中文: "简体中文",
      英文: "英文",
      空气质量: "空气质量",
      大气压力: "大气压力",
      "485大气压力": "RS485大气压力",
      "PLC 采集器": "PLC 采集器",
      "PLC S7-200": "PLC S7-200",
      "PLC S7-1200": "PLC S7-1200",
      "CAN 网关": "CAN 网关",
      MQTT5GCPE: "MQTT 5G CPE",
      二氧化碳: "二氧化碳",
      噪声: "噪声",
      开关控制: "开关控制",
      应用: "应用",
      地址修改: "地址修改",
      地址设置: "地址设置",
      供电电压: "供电电压",
      振动速度: "振动速度",
      振动幅度: "振动幅度",
      定值: "定值",
      数值: "数值",
      随机值: "随机值",
      随机范围: "随机范围",
      "随机间隔(s)": "随机间隔(s)",
      循环值: "循环值",
      循环范围: "循环范围",
      "循环间隔(s)": "循环间隔(s)",
      循环变量: "循环变量",
      "提示：PAN ID,序列号为2字节 16进制 如: 1A2B": "提示：PAN ID,序列号为2字节 16进制 如: 1A2B",
      "提示：地址为 1字节 16进制 如: 0B": "提示：地址为 1字节 16进制 如: 0B",
      湿度: "湿度",
      温度: "温度",
      浊度: "浊度",
      溶解度: "溶解度",
      流量: "流量",
      流速: "流速",
      温湿度: "温湿度",
      光照: "光照",
      氧气: "氧气",
      PM25: "PM2.5",
      土壤水分: "土壤水分",
      液位: "液位",
      水温: "水温",
      风向: "风向",
      风速: "风速",
      "485风速": "RS485风速",
      "485温振一体": "RS485温振一体",
      "CAN 温湿度": "CAN 温湿度",
      "232氧气": "RS232氧气",
      人体探测: "人体探测",
      火焰: "火焰",
      序列号: "序列号",
      地址码: "地址码",
      正常: "正常",
      警告: "警告",
      火焰探测: "火焰探测",
      "红外对射（副)": "红外对射（副)",
      "红外对射（主）": "红外对射（主）",
      微波开关: "微波开关",
      微波: "微波",
      烟雾: "烟雾",
      微动开关: "微动开关",
      行程开关: "行程开关",
      光幕传感器: "光幕传感器",
      "485二氧化碳": "RS485二氧化碳",
      "485吸顶红外探测器": "RS485吸顶红外探测器",
      "485空气质量": "RS485空气质量",
      "485温湿度": "RS485温湿度",
      "485PH溶液": "RS485PH溶液",
      "485水质浊度": "RS485水质浊度",
      "485光照": "RS485光照",
      "485土壤温湿度": "RS485土壤温湿度",
      "485水质溶解氧": "RS485水质溶解氧",
      "485电磁流量计": "RS485电磁流量计",
      "485GPS": "RS485GPS",
      "485型液位": "RS485型液位",
      "485光合有效辐射表": "RS485光合有效辐射表",
      "485土壤氮磷钾": "RS485土壤氮磷钾",
      温湿度HA: "温湿度HA",
      光照度HA: "光照度HA",
      人体探测器HA: "人体探测器HA",
      烟雾探测器HA: "烟雾探测器HA",
      水浸探测器HA: "水浸探测器HA",
      门磁探测器HA: "门磁探测器HA",
      人体探测器: "人体探测器",
      可燃气体: "可燃气体",
      光照传感器: "光照传感器",
      继电器: "继电器",
      双联继电器: "双联继电器",
      单联继电器: "单联继电器",
      网关: "网关",
      新大陆网关: "newland gateway",
      路由: "路由",
      串口服务器: "串口服务器",
      NewLand串口服务器: "NewLand串口服务器",
      交换机: "交换机",
      ChirpStack网关: "ChirpStack网关",
      MQTT网关: "MQTT网关",
      云终端: "云终端",
      "TiBox-NB200": "TiBox-NB200",
      "钛级-NB200": "钛级-NB200",
      有人410s: "有人410s",
      4017: "4017",
      4150: "4150",
      Lora节点: "Lora节点",
      Lora主节点: "Lora主节点",
      协调器: "协调器",
      四输入: "四输入",
      ZigbeeDongle: "ZigbeeDongle",
      NLE底板: "NLE底板",
      M3: "M3",
      LF射频模块: "LF射频模块",
      "低频（LF）": "低频（LF）",
      射频天线: "射频天线",
      HF射频模块: "HF射频模块",
      "高频（HF）": "高频（HF）",
      UHF射频模块: "UHF射频模块",
      "超高频（UHF）": "超高频（UHF）",
      高频: "读卡器（高频）",
      高频卡: "高频卡",
      高频读卡器: "高频读卡器",
      低频: "低频",
      低频读卡器: "低频读卡器",
      低频卡: "低频卡",
      韦根: "韦根",
      NL超高频: "NL超高频",
      NL超高频读卡器: "NL超高频读卡器",
      超高频: "读卡器（超高频）",
      超高频卡: "超高频卡",
      超高频读卡器: "超高频读卡器",
      PC: "PC",
      "12V电源": "12V电源",
      "24V电源": "24V电源",
      "5V电源": "5V电源",
      通用电源: "通用电源",
      警示灯: "警示灯",
      无线警示灯: "无线警示灯",
      三色灯: "三色灯",
      雾化器: "雾化器",
      通用负载: "通用负载",
      风扇: "风扇",
      灯泡: "灯泡",
      "220V灯泡": "灯泡（220V）",
      水泵: "水泵",
      加热机: "加热机",
      RGB灯带: "RGB灯带",
      RGB灯带控制器: "RGB灯带控制器",
      普通插座: "普通插座",
      空调智能插座: "空调智能插座",
      智能插座HA: "智能插座[HA]",
      插头: "插头",
      排风扇: "排风扇",
      空气净化器: "空气净化器",
      空调: "空调",
      喷水执行器: "喷水执行器",
      水阀控制器: "水阀控制器",
      煤气阀控制器: "煤气阀控制器",
      风机: "风机",
      暖风机: "暖风机",
      喷淋: "喷淋",
      遮阳机: "遮阳机",
      补光灯: "补光灯",
      湿帘: "湿帘",
      电动推杆: "电动推杆",
      接近开关: "接近开关",
      水肥一体机: "水肥一体机",
      LED灯带: "LED灯带",
      二氧化碳控制器: "二氧化碳控制器",
      激光对射: "激光对射",
      小型电磁锁: "小型电磁锁",
      电压电流变送器: "电压电流变送器",
      直流信号隔离变换器: "直流信号隔离变换器",
      摄像头: "摄像头",
      XC40门禁主机: "XC40门禁主机",
      韦根转485: "韦根转485",
      空白容器: "空白容器",
      LED屏: "LED屏",
      "485=232": "485=232",
      "232=USB": "232=USB",
      安卓平板: "安卓平板",
      "125K设备(LF)": "125K设备(LF)",
      "125K控制器": "控制器（125K）",
      "125K门禁": "门禁（125K）",
      "125K读写器": "读写器（125K）",
      RFID125K标签: "RFID125K标签",
      "14443设备(HF)": "14443设备(HF)",
      ISO14443A读写器: "ISO14443A读写器",
      ISO14443TypeA标签: "ISO14443TypeA标签",
      "15693设备(HF)": "15693设备(HF)",
      ISO15693天线: "ISO15693天线",
      ISO15693读写器: "ISO15693读写器",
      ISO15693多路复用器: "ISO15693多路复用器",
      IISO15693标签: "ISO15693标签",
      "18000设备(UHF)": "18000设备(UHF)",
      "ISO18000-6C读写器": "ISO18000-6C读写器",
      "ISO18000-6C标签": "ISO18000-6C标签",
      仿真设备: "仿真设备",
      请输入组件名: "请输入组件名",
      传感器: "传感器",
      有线: "有线",
      无线: "无线",
      采集器: "采集器",
      IO模块: "IO模块",
      RFID: "RFID",
      RFID应用: "RFID应用",
      RFID基础: "RFID基础",
      基础仿真: "基础仿真",
      NewLab: "NewLab",
      其他设备: "其他设备",
      终端: "终端",
      电源: "电源",
      负载: "负载",
      其他外设: "其他外设",
      导入: "导入",
      导出: "导出",
      撤销: "撤销",
      重做: "重做",
      左对齐: "左对齐",
      右对齐: "右对齐",
      上对齐: "上对齐",
      下对齐: "下对齐",
      水平居中: "水平居中",
      垂直居中: "垂直居中",
      置顶: "置顶",
      置底: "置底",
      向上一层: "向上一层",
      向下一层: "向下一层",
      连线验证: "连线验证",
      已开启: "已开启",
      已关闭: "已关闭",
      模拟实验: "模拟实验",
      串口设置: "串口设置",
      虚拟串口: "虚拟串口",
      物理串口: "物理串口",
      波特率: "波特率",
      虚拟串口管理: "虚拟串口管理",
      新建: "新建",
      卸载: "卸载",
      取消: "取消",
      保存: "保存",
      提示: "提示",
      开启模拟实验后以下配置不能修改: "开启模拟实验后以下配置不能修改",
      端口号: "端口号",
      重置: "重置",
      提示信息: "提示信息",
      消息面板: "消息面板",
      有线传感器: "有线传感器",
      无线传感器: "无线传感器",
      "I/O模块": "I/O模块",
      NewLab实训设备: "NewLab实训设备",
      "检测到你尚未安装或者打开桌面仿真助手！串口通信不可使用！你可以": "检测到你尚未安装或者打开桌面仿真助手！串口通信不可使用！你可以",
      打开助手: "打开助手",
      下载助手: "下载助手",
      缩略图: "缩略图",
      任务说明: "任务说明",
      暂停: "暂停",
      启动: "启动",
      请输入设备关键词进行搜索: "请输入设备关键词进行搜索",
      消息类型: "消息类型",
      设备名称: "设备名称",
      全部: "全部",
      信息: "信息",
      错误: "错误",
      时间: "时间",
      描述: "描述",
      数据: "数据",
      暂无: "暂无",
      暂无数据: "暂无数据",
      暂未保存: "暂未保存",
      已保存: "已保存",
      虚拟仿真助手: "虚拟仿真助手",
      实验正在进行中: "实验正在进行中",
      修改仿真包名称: "修改仿真包名称",
      请输入仿真包名称: "请输入仿真包名称",
      确定: "确定",
      "已经存在其他网页或者浏览器连接到本地助手，本应用不支持多个网页同时启动实验":
        "已经存在其他网页或者浏览器连接到本地助手，本应用不支持多个网页同时启动实验",
      "连线存在错误，请检查": "连线存在错误，请检查",
      "仿真桌面助手未连接，不可进行实验": "仿真桌面助手未连接，不可进行实验",
      实验开启中: "实验开启中",
      实验停止中: "实验停止中",
      关闭提示: "关闭提示",
      "实验正在进行！不能操作设备": "实验正在进行！不能操作设备",
      实验开启成功: "实验开启成功",
      实验启动失败: "实验启动失败",
      实验已停止: "实验已停止",
      选择: "选择",
      请选择: "请选择",
      物理串口波特率: "物理串口波特率",
      选择波特率: "选择波特率",
      设置: "设置",
      可充电: "可充电",
      需要电源: "需要电源",
      "提示：当前设备需要依附底版才可以使用，请选择底版类型": "提示：当前设备需要依附底版才可以使用，请选择底版类型",
      选择底板: "选择底板",
      继电器没有供电电源: "继电器没有供电电源",
      继电器没有负载: "继电器没有负载",
      未定义: "未定义",
      名称: "名称",
      背景颜色: "背景颜色",
      宽度: "宽度",
      高度: "高度",
      请输入: "请输入",
      复制: "复制",
      粘贴: "粘贴",
      剪贴: "剪贴",
      删除: "删除",
      上移一层: "上移一层",
      下移一层: "下移一层",
      移至顶层: "移至顶层",
      移至底层: "移至底层",
      全选: "全选",
      Lora连接设置: "Lora连接设置",
      "Zigbee 设置": "Zigbee 设置",
      "485采集地址配置": "485采集地址配置",
      其他配置: "其他配置",
      频率: "频率",
      带宽: "带宽",
      采集间隔: "采集间隔",
      工作模式: "工作模式",
      透传: "透传",
      普通: "普通",
      新增配置: "新增配置",
      删除配置: "删除配置",
      有人: "有人",
      无人: "无人",
      出水口: "出水口",
      "水阀控制器(开)": "水阀控制器(开)",
      "水阀控制器(关)": "水阀控制器(关)",
      GPS初始位置: "GPS初始位置",
      经度: "经度",
      纬度: "纬度",
      步长: "步长",
      土壤温度: "土壤温度",
      土壤湿度: "土壤湿度",
      标签号: "标签号",
      是否加密: "是否加密",
      卡号选择: "卡号选择",
      使用随机卡号: "使用随机卡号",
      使用有序卡号: "使用有序卡号",
      当前固件: "当前固件",
      选择固件: "选择固件",
      选择要烧写的固件: "选择要烧写的固件",
      节点设置: "节点设置",
      采集地址配置: "采集地址配置",
      加载中: "加载中",
      串口号: "串口号",
      网关端口: "网关端口",
      网关地址: "网关地址",
      设备标识: "设备标识",
      网关连接设置: "网关连接设置",
      对接平台: "对接平台",
      叶子设备配置: "叶子设备配置",
      连接设置: "连接设置",
      服务地址: "服务地址",
      服务端口: "服务端口",
      设备配置: "设备配置",
      接入端口: "接入端口",
      云平台地址: "云平台地址",
      用户令牌: "用户令牌",
      "设备访问令牌必须为20位数字或字母的组合！": "设备访问令牌必须为20位数字或字母的组合！",
      "设备标识必须为十六进制数！": "设备标识必须为十六进制数！",
      "485型温湿度": "485型温湿度",
      "485型人体红外": "485型人体红外",
      "485型CO2": "485型CO2",
      "485型光照": "485型光照",
      路由器: "路由器",
      平台地址: "平台地址",
      平台端口: "平台端口",
      云平台连接设置: "云平台连接设置",
      导入本地设备: "导入本地设备",
      "485噪声": "RS485噪声",
      "485型": "RS485型",
      "232型": "232型",
      氮: "氮",
      磷: "磷",
      钾: "钾",
      设备未实现: "设备未实现",
      IP地址: "IP地址",
      子网掩码: "子网掩码",
      传感设备: "传感设备",
      触发设备: "触发设备",
      环境参数: "环境参数",
      实体: "实体",
      模拟: "模拟",
      设置值: "设置值",
      围墙: "围墙",
      人: "人",
      地面: "地面",
      "5G摄像头": "5G摄像头",
      声光报警: "声光报警",
      背景设置: "背景设置",
      碰撞之前: "碰撞之前",
      碰撞之后: "碰撞之后",
      设备宽度: "设备宽度",
      设备高度: "设备高度",
      触发数值: "触发数值",
      MQTTDAM0200: "MQTTDAM0200",
    };
  },
  2: function (e, n) {},
  "482f": function (e, n, t) {
    "use strict";
    var r = window.config;
    n.a = r;
  },
  "4c94": function (e, n, t) {
    "use strict";
    (t.d(n, "c", function () {
      return s;
    }),
      t.d(n, "b", function () {
        return d;
      }),
      t.d(n, "a", function () {
        return l;
      }),
      t("a630"),
      t("caad"),
      t("b0c0"),
      t("2532"),
      t("3ca3"),
      t("96cf"));
    var r = t("89ba"),
      i = t("53fe"),
      o = t("9f12"),
      a = t("482f"),
      c = t("73ec"),
      s = function e() {
        (Object(o.a)(this, e), (this.eid = ""), (this.portMap = new Array()));
      },
      u = function e(n, t) {
        (Object(o.a)(this, e), (this.iKey = ""), (this.data = {}), (this.iKey = n), (this.data = t));
      },
      d = function e() {
        (Object(o.a)(this, e), (this.type = ""), (this.id = ""), (this.eid = ""), (this.portName = ""));
      },
      l = function e() {
        Object(o.a)(this, e);
      },
      f = new ((function () {
        function e() {
          (Object(o.a)(this, e),
            (this.id = Object(c.v)()),
            (this.isConnected = !1),
            (this.serverUrl = a.a.socket_host),
            (this.socket = null),
            (this.on_open = function () {}),
            (this.on_close = function () {}),
            (this.on_message = function () {}),
            (this.on_receivedData = (function () {
              var e = Object(r.a)(
                regeneratorRuntime.mark(function e(n) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })()),
            (this.on_connectError = function (e) {}),
            (this.on_tcpStateNotify = function (e) {}),
            (this.on_getVersionResponse = function (e) {}),
            (this.on_endEmulatorResponse = function (e) {}),
            (this.on_startEmulatorResponse = function (e) {}),
            (this.on_getLcoalIPResponse = function (e) {}),
            (this.on_getPortsResponse = function (e) {}),
            (this.on_downLoadFileResponse = function (e) {}),
            (this.on_runAppCaseResponse = function (e) {}),
            (this.on_addVirturePortResponse = function (e) {}),
            (this.on_delVirturePortResponse = function (e) {}));
        }
        return (
          Object(i.a)(e, [
            {
              key: "in_sendVirtualData",
              value: function (e) {
                e.data = Array.from(e.data);
                var n = JSON.stringify(new u("SendVirtualData", e));
                this.socket.send(n);
              },
            },
            {
              key: "in_endEmulator",
              value: function (e) {
                var n = new u("EndEmulator", e),
                  t = JSON.stringify(n);
                this.socket.send(t);
              },
            },
            {
              key: "in_startEmulator",
              value: function (e) {
                var n = new u("StartEmulator", e),
                  t = JSON.stringify(n);
                this.socket.send(t);
              },
            },
            {
              key: "in_getLcoalIP",
              value: function (e) {
                this.socket.send(JSON.stringify(new u("GetLcoalIP", e)));
              },
            },
            {
              key: "in_getVersion",
              value: function (e) {
                this.socket.send(JSON.stringify(new u("GetVersion", e)));
              },
            },
            {
              key: "in_getPorts",
              value: function (e) {
                this.socket.send(JSON.stringify(new u("GetPorts", e)));
              },
            },
            {
              key: "in_downLoadFile",
              value: function (e) {
                this.socket.send(JSON.stringify(new u("DownloadFile", e)));
              },
            },
            {
              key: "in_runAppCase",
              value: function (e) {
                this.socket.send(JSON.stringify(new u("RunAppCase", e)));
              },
            },
            {
              key: "in_addVirturePort",
              value: function (e) {
                this.socket.send(JSON.stringify(new u("AddVirturePort", e)));
              },
            },
            {
              key: "in_delVirturePort",
              value: function (e) {
                this.socket.send(JSON.stringify(new u("DelVirturePort", e)));
              },
            },
            {
              key: "init",
              value: function (e) {
                var n = this;
                try {
                  this.isConnected || (this.socket = new WebSocket(e || this.serverUrl));
                } catch (e) {}
                ((this.socket.onopen = function (e) {
                  ((n.isConnected = !0), n.on_open(), n.in_getLcoalIP(), n.in_getPorts(), n.in_getVersion());
                }),
                  (this.socket.onclose = function (e) {
                    (n.on_close(), (n.isConnected = !1));
                  }),
                  (this.socket.onmessage = function (e) {
                    n.on_message(e);
                    var t = e.data;
                    if (t.includes("iKey")) {
                      var r = JSON.parse(t);
                      switch (r.iKey) {
                        case "ReceivedData":
                          var i = r.data;
                          (Object(c.z)(i.data) && (i.data = Object(c.o)(i.data)), n.on_receivedData(i));
                          break;
                        case "ConnectError":
                          n.on_connectError(r.data);
                          break;
                        case "GetLcoalIPResponse":
                          n.on_getLcoalIPResponse(r.data);
                          break;
                        case "GetPortsResponse":
                          n.on_getPortsResponse(r.data);
                          break;
                        case "DownloadFileResponse":
                          n.on_downLoadFileResponse(r.data);
                          break;
                        case "RunAppCaseResponse":
                          n.on_runAppCaseResponse(r.data);
                          break;
                        case "AddVirturePortResponse":
                          n.on_addVirturePortResponse(r.data);
                          break;
                        case "DelVirturePortResponse":
                          n.on_delVirturePortResponse(r.data);
                          break;
                        case "StartEmulatorResponse":
                          n.on_startEmulatorResponse(r);
                          break;
                        case "EndEmulatorResponse":
                          n.on_endEmulatorResponse(r.data);
                          break;
                        case "TCPStateNotify":
                          n.on_tcpStateNotify(r.data);
                          break;
                        case "GetVersionResponse":
                          n.on_getVersionResponse(r.data);
                      }
                    }
                  }),
                  (this.socket.onerror = function (e) {}));
              },
            },
            {
              key: "initHelp",
              value: function (e) {
                var n = this;
                (e ? this.init(e) : this.init(this.serverUrl),
                  setInterval(function () {
                    n.isConnected || n.init();
                  }, 3e3));
              },
            },
          ]),
          e
        );
      })())();
    n.d = f;
  },
  "51c8": function (e, n, t) {
    "use strict";
    (t.d(n, "a", function () {
      return a;
    }),
      t("b0c0"));
    var r = t("9f12"),
      i = t("73ec"),
      o = t("03cd"),
      a = function e(n, t, a) {
        (Object(r.a)(this, e),
          (this.id = Object(i.v)()),
          (this.name = ""),
          (this.isSelected = !1),
          (this.connectionState = o.b.Correct),
          (this.validateInfo = ""),
          (this.showdiamond = !0),
          (this.source = n),
          (this.sink = t),
          (this.config = a));
      };
  },
  "535f": function (e, n, t) {
    "use strict";
    (t.d(n, "a", function () {
      return l;
    }),
      t("a4d3"),
      t("e01a"),
      t("d28b"),
      t("0d03"),
      t("d3b7"),
      t("25f0"),
      t("3ca3"),
      t("498a"),
      t("ddb0"));
    var r = t("9f12"),
      i = t("53fe"),
      o = t("8b83"),
      a = t("c65a"),
      c = t("c03e"),
      s = t("60a3"),
      u = t("73ec"),
      d = t("70b0"),
      l = (function (e) {
        function n() {
          var e;
          return (Object(r.a)(this, n), ((e = Object(o.a)(this, Object(a.a)(n).apply(this, arguments))).counTimerInterval = null), (e.countTimer = 0), e);
        }
        return (
          Object(c.a)(n, e),
          Object(i.a)(n, [
            {
              key: "loading",
              value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.a.t("lang.加载中").toString(),
                  t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                  r = arguments.length > 3 ? arguments[3] : void 0;
                Object(u.B)(e, n, t, r);
              },
            },
            {
              key: "msg",
              value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
                  t = arguments.length > 2 ? arguments[2] : void 0;
                Object(u.C)(e, n, t);
              },
            },
            {
              key: "alert",
              value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.a.t("lang.提示信息").toString(),
                  t = arguments.length > 2 ? arguments[2] : void 0,
                  r = arguments.length > 3 ? arguments[3] : void 0;
                Object(u.n)(e, n, t, r);
              },
            },
            {
              key: "confirm",
              value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.a.t("lang.提示信息").toString(),
                  t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.a.t("lang.确定").toString(),
                  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.a.t("lang.取消").toString(),
                  i = arguments.length > 4 ? arguments[4] : void 0,
                  o = arguments.length > 5 ? arguments[5] : void 0,
                  a = arguments.length > 6 ? arguments[6] : void 0;
                Object(u.r)(e, n, t, r, i, o, a);
              },
            },
            {
              key: "prompt",
              value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.a.t("lang.提示信息").toString(),
                  t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.a.t("lang.确定").toString(),
                  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.a.t("lang.取消").toString(),
                  i = arguments.length > 4 ? arguments[4] : void 0,
                  o = arguments.length > 5 ? arguments[5] : void 0,
                  a = arguments.length > 6 ? arguments[6] : void 0;
                Object(u.E)(e, n, t, r, i, o, a);
              },
            },
            {
              key: "isNullOrEmpty",
              value: function (e) {
                return !e || 0 === e.trim().length;
              },
            },
            {
              key: "anyIsNullOrEmpty",
              value: function (e) {
                if (!e) return !0;
                var n = !0,
                  t = !1,
                  r = void 0;
                try {
                  for (var i, o = e[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                    var a = i.value;
                    if (this.isNullOrEmpty(a)) return !0;
                  }
                } catch (e) {
                  ((t = !0), (r = e));
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (t) throw r;
                  }
                }
                return !1;
              },
            },
            {
              key: "deepClone",
              value: function (e) {
                var n = JSON.stringify(e);
                return JSON.parse(n);
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
                this.stopTimer();
              },
            },
          ]),
          n
        );
      })(s.d);
  },
  "555b": function (e, n, t) {
    "use strict";
    (t.d(n, "b", function () {
      return u;
    }),
      t.d(n, "a", function () {
        return d;
      }));
    var r = t("8b83"),
      i = t("c65a"),
      o = t("c03e"),
      a = t("9f12"),
      c = t("535f"),
      s = t("73ec"),
      u = function e(n, t) {
        (Object(a.a)(this, e), (this.id = Object(s.v)()), (this.x = n), (this.y = t));
      },
      d = (function (e) {
        function n() {
          var e;
          return (Object(a.a)(this, n), ((e = Object(r.a)(this, Object(i.a)(n).apply(this, arguments))).id = Object(s.v)()), e);
        }
        return (Object(o.a)(n, e), n);
      })(c.a);
  },
  "59b9": function (e, n, t) {
    "use strict";
    (t("99af"), t("c975"), t("d3b7"), t("0fb7"), t("450d"));
    var r,
      i = t("f529"),
      o = t.n(i),
      a = t("bc3a"),
      c = t.n(a),
      s = t("73ec"),
      u = t("482f");
    ((r = c.a.create({ timeout: 5e4 })).interceptors.request.use(
      function (e) {
        var n = e.headers.Authorization;
        if (!n || -1 == n.indexOf("Basic")) {
          var t;
          ((t = u.a.app_parent_token ? u.a.app_parent_token : Object(s.w)("cloud-token")),
            (e.headers.Authorization = "".concat(u.a.authPrefix, " ").concat(t)));
        }
        return e;
      },
      function (e) {
        Promise.reject(e);
      },
    ),
      r.interceptors.response.use(
        function (e) {
          if (200 === e.status) {
            var n = e.data;
            switch (n.code) {
              case 401:
                o()(n.message);
              case 9999:
                o()("未知错误");
                break;
              case 9e3:
                o()("微服务不可用");
                break;
              case 8e3:
                o()("clinet_id或client_secret参数无效");
                break;
              case 8001:
                o()("客户端没有权限");
                break;
              case 8002:
                o()("提供的Access Grant是无效的、过期的或已撤销的");
                break;
              case 8003:
                o()("无效范围");
                break;
              case 8004:
                (o()("无效token"), (window.location.href = u.a.redirect_uri + "?backUrl=" + window.location.href));
                break;
              case 8005:
                o()("请求不合法");
                break;
              case 8006:
                o()("重定向地址不匹配");
                break;
              case 8007:
                o()("不支持的GrantType");
                break;
              case 8008:
                o()("不支持的ResponseType");
                break;
              case 89999:
                o()("未知异常");
                break;
              default:
                return n;
            }
            return n;
          }
        },
        function (e) {
          return Promise.reject(e);
        },
      ),
      (n.a = r));
  },
  "5cd4": function (e, n, t) {
    e.exports = t.p + "img/iconfont.134ee815.svg";
  },
  "5d46": function (e, n, t) {
    "use strict";
    var r = t("184e");
    t.n(r).a;
  },
  "6b89": function (e, n, t) {
    "use strict";
    (t.r(n),
      t.d(n, "lang", function () {
        return r;
      }));
    var r = {
      自动检测: "Automatic Detection",
      简体中文: "Chinese(Simplified)",
      英文: "English(United States)",
      空气质量: "Air Quality",
      大气压力: "Atmospheric Pressure",
      "485大气压力": "RS485 Atmospheric Pressure",
      二氧化碳: "Carbon Dioxide",
      噪声: "Noise",
      "485噪声": "RS485 Noise",
      开关控制: "Switch Control",
      地址修改: "Address Modify",
      地址设置: "Address Config",
      供电电压: "Voltage",
      振动速度: "Vibration Speed",
      振动幅度: "Vibration Strength",
      定值: "Fix Value",
      数值: "Value",
      随机值: "Random Value",
      随机范围: "Random Range",
      "随机间隔(s)": "Random Interval",
      循环值: "Cyclic Value",
      循环范围: "Cyclic Range",
      "循环间隔(s)": "Cyclic Interval",
      循环变量: "Cyclic Variable",
      "提示：PAN ID,序列号为2字节 16进制 如: 1A2B": "Prompt: Pan ID, serial number is 2-byte hexadecimal, such as 1a2b",
      "提示：地址为 1字节 16进制 如: 0B": "Prompt: the address is 1 byte hexadecimal, such as 0b",
      应用: "Apply",
      湿度: "Humidity",
      温度: "Temperature",
      温湿度: "Humiture",
      浊度: "Turbidity",
      溶解度: "Solubility",
      流量: "Traffic",
      流速: "Velocity",
      光照: "Illumination",
      氧气: "Oxygen",
      PM25: "PM2.5",
      土壤水分: "Soil Moisture ",
      液位: "Liquid Level",
      水温: "Water Temp",
      风向: "Wind Direction",
      风速: "Wind Speed",
      "485风速": "RS485 Wind Speed",
      "485温振一体": "RS485 Temperature Vibration Integrated",
      "232氧气": "RS232 Oxygen",
      "CAN 温湿度": "CAN Humiture",
      火焰: "Flame",
      正常: "Normal",
      警告: "Warn",
      地址码: "Address",
      序列号: "Serial number",
      人体探测: "Human Body Detection",
      火焰探测: "Flame Detection",
      "红外对射（副)": "Active Infrared Intrusion Detector（Slave）",
      "红外对射（主）": "Active Infrared Intrusion Detector（Master）",
      微波开关: "Microwave Switch",
      微波: "Microwave",
      烟雾: "Smoke",
      微动开关: "Limit Switch",
      行程开关: "Travel Switch",
      光幕传感器: "Light Curtain",
      "485二氧化碳": "RS485 Carbon Dioxide",
      "485吸顶红外探测器": "RS485 Ceiling Infrared Detector",
      "485空气质量": "RS485 Air Quality",
      "485温湿度": "RS485 Humiture",
      "485PH溶液": "RS485 PH Solution",
      "485水质浊度": "RS485 Water Turbidity",
      "485光照": "RS485 Illumination",
      "485土壤温湿度": "RS485 Soil Humiture",
      "485水质溶解氧": "RS485 Water Quality Dissolved Oxygen",
      "485电磁流量计": "RS485 Electromagnetic Flowmeter",
      "485GPS": "RS485GPS",
      "485型液位": "RS485 Liquid Level",
      "485光合有效辐射表": "RS485 Photosynthetically Active Radiation",
      "485土壤氮磷钾": "RS485 SoilNPK",
      温湿度HA: "Humiture[Home Assistant]",
      光照度HA: "Illumination[Home Assistant]",
      人体探测器HA: "Human Body Detector[Home Assistant]",
      烟雾探测器HA: "Smoke Detector[Home Assistant]",
      水浸探测器HA: "Water Immersion Detector[Home Assistant]",
      门磁探测器HA: "Door Sensor[Home Assistant]",
      人体探测器: "Human Body Detector",
      可燃气体: "Combustible Gas ",
      光照传感器: "Illumination",
      继电器: "Relay",
      双联继电器: "Double Relay Module",
      单联继电器: "Single Relay Module",
      网关: "Gateway",
      新大陆网关: "Newland Gateway",
      路由: "Router",
      串口服务器: "Serial Server",
      NewLand串口服务器: "Newland Serial Server",
      交换机: "Switch",
      ChirpStack网关: "Chirpstack Gateway",
      MQTT网关: "MQTT Gateway",
      云终端: "Cloud Terminal",
      "TiBox-NB200": "TiBox-NB200",
      "钛级-NB200": "Titanium Grade-NB200",
      有人410s: "Serial Server 410s",
      4017: "4017",
      4150: "4150",
      Lora节点: "Lora Node",
      Lora主节点: "Lora Master Node",
      协调器: "Coordinator",
      四输入: "Four Input",
      ZigbeeDongle: "ZigbeeDongle",
      NLE底板: "NLE Backplane",
      M3: "M3",
      LF射频模块: "LF RF Module",
      "低频（LF）": "Low Frequency (LF)",
      射频天线: "RF Antenna",
      HF射频模块: "HF RF Module",
      "高频（HF）": "High Frequency (HF)",
      UHF射频模块: "UHF RF Module",
      "超高频（UHF）": "Ultra High Frequency (UHF)",
      高频: "HF",
      高频读卡器: "HF Reader",
      高频卡: "HF Card",
      低频: "LF",
      低频读卡器: "LF Reader",
      低频卡: "LF Card",
      韦根: "Wiegen",
      NL超高频: "NL UHF",
      NL超高频读卡器: "NL UHF Reader",
      超高频: "UHF",
      超高频读卡器: "UHF Reader",
      超高频卡: "UHF Card",
      PC: "PC",
      "12V电源": "12V Power Supply",
      "24V电源": "24V Power Supply",
      "5V电源": "5V Power Supply",
      通用电源: "General Power Supply",
      警示灯: "Warning Light",
      无线警示灯: "Wireless Warning Light",
      三色灯: "Stack Light",
      雾化器: "Atomizer",
      通用负载: "General Load",
      风扇: "Fan",
      灯泡: "Light Bulb",
      "220V灯泡": "Light Bulb(220V)",
      水泵: "Water Pump",
      加热机: "Heating Machine",
      RGB灯带: "RGB Light Strip",
      RGB灯带控制器: "RGB Light Strip Controller",
      普通插座: "Ordinary socket",
      空调智能插座: "Air Conditioning Intelligent Socket",
      智能插座HA: "Smart Socket[Home Assistant]",
      插头: "Plug",
      排风扇: "Ventilating Fan",
      空气净化器: "Air Purifier",
      空调: "Air Conditioner",
      喷水执行器: "Water Spray Actuator",
      水阀控制器: "Water Valve Controller",
      煤气阀控制器: "Gas Valve Controller",
      风机: "Draught Fan",
      暖风机: "Air Heater",
      喷淋: "Spray ",
      遮阳机: "Sunshade",
      补光灯: "Fill-in Light",
      湿帘: "Wet Curtain",
      电动推杆: "Linear Actuator",
      接近开关: "Proximity Switch",
      水肥一体机: "Water Fertilizer Integrated Machine",
      LED灯带: "Led Strip",
      二氧化碳控制器: "Carbon Dioxide Valve",
      激光对射: "Laser Beam",
      小型电磁锁: "Small Electromagnetic Lock",
      电压电流变送器: "Current to voltage converter",
      直流信号隔离变换器: "Current signal isolation converter",
      摄像头: "Camera",
      XC40门禁主机: "XC40 Access Control Host",
      韦根转485: "Wiegand To 485",
      空白容器: "Blank Container",
      LED屏: "LED Screen",
      "485=232": "RS485 to RS232",
      "232=USB": "RS232 to USB",
      安卓平板: "Android Pad ",
      "125K设备(LF)": "125K Device(LF)",
      "125K控制器": "125K Control",
      "125K门禁": "125K Door Control",
      "125K读写器": "125K Reader/Writer",
      RFID125K标签: "125K Tag",
      "14443设备(HF)": "14443 Device(HF)",
      ISO14443A读写器: "ISO14443A Reader/Writer",
      ISO14443TypeA标签: "ISO14443TypeA Tag",
      "15693设备(HF)": "15693 Device(HF)",
      ISO15693天线: "ISO15693 Antenna",
      ISO15693读写器: "ISO15693 Reader/Writer",
      ISO15693多路复用器: "ISO15693 Multiplexer",
      IISO15693标签: "ISO15693 Tag",
      "18000设备(UHF)": "18000 Device(UHF)",
      "ISO18000-6C读写器": "ISO18000-6C Reader/Writer",
      "ISO18000-6C标签": "ISO18000-6C Tag",
      仿真设备: "Simulation Device",
      请输入组件名: "Enter Device Name",
      传感器: "Sensor",
      有线: "Wired",
      无线: "Wireless",
      采集器: "Collector",
      IO模块: "IO module",
      RFID: "RFID",
      RFID应用: "RFID Application",
      RFID基础: "RFID Basic",
      基础仿真: "Simulation",
      NewLab: "NewLab",
      其他设备: "Other Devices",
      终端: "Terminal",
      电源: "Power Supply",
      负载: "Load",
      其他外设: "Other Peripherals",
      导入: "Import",
      导出: "Export",
      撤销: "Revoke",
      重做: "Redo",
      左对齐: "Align Left ",
      右对齐: "Align Right",
      上对齐: "Align Up",
      下对齐: "Align Bottom",
      水平居中: "Center Horizontally",
      垂直居中: "Vertical Center",
      置顶: "Topping",
      置底: "Bottom Setting",
      向上一层: "A Layer Of Upward",
      向下一层: "A Layer Of Down",
      连线验证: "Connection Verification",
      已开启: "Opend",
      已关闭: "Closed",
      模拟实验: "Simulation",
      串口设置: "Serial Port Settings",
      虚拟串口: "Virtual Serial Port",
      物理串口: "Physical Serial Port",
      波特率: "Baud Rate",
      虚拟串口管理: "Virtual Serial Port Management",
      新建: "New",
      卸载: "Uninstall",
      取消: "Cancel",
      保存: "Save",
      提示: "Tips",
      开启模拟实验后以下配置不能修改: "After the simulation experiment is started, the following configurations cannot be modified",
      端口号: "Port Number",
      重置: "Reset",
      提示信息: "Prompt Information",
      消息面板: "Message Panel",
      有线传感器: "Wired Sensor",
      无线传感器: "Wireless Sensor",
      "I/O模块": "I/O Module",
      NewLab实训设备: "NewLab Devices",
      "检测到你尚未安装或者打开桌面仿真助手！串口通信不可使用！你可以":
        "Detected that you have not installed or opened the desktop assistant! The serial port communication is unavailable! You can",
      打开助手: "Open",
      下载助手: "Download",
      缩略图: "Thumbnail",
      任务说明: "Task Specification",
      暂停: "Pause",
      启动: "Start",
      请输入设备关键词进行搜索: "plaease enter device keywords to search for the device",
      消息类型: "Message Type",
      全部: "All",
      信息: "Message",
      错误: "Error",
      时间: "Time",
      描述: "Describe",
      数据: "Data",
      设备名称: "Device Name",
      暂无: "Null",
      暂无数据: "No Data",
      暂未保存: "Not Saved",
      已保存: "Saved",
      虚拟仿真助手: "Virtual simulation assistant",
      实验正在进行中: "The experiment is in progress",
      修改仿真包名称: "Modify the simulation package name",
      请输入仿真包名称: "Please enter the simulation package name",
      确定: "Confirm",
      "已经存在其他网页或者浏览器连接到本地助手，本应用不支持多个网页同时启动实验":
        "There are already other web pages or browsers connected to the local assistant, the application does not support multiple web pages to start the experiment at the same time  ",
      "连线存在错误，请检查": "Connection error, please check",
      "仿真桌面助手未连接，不可进行实验": "The simulation desktop assistant is not connected and cannot be tested",
      实验开启中: "The experiment is open",
      实验停止中: "The experiment is stopped.",
      关闭提示: "Close tips",
      "实验正在进行！不能操作设备": "The experiment is underway! Unable to operate equipment",
      实验开启成功: "Experiment opened successfully",
      实验启动失败: "Experiment startup failure",
      实验已停止: "The experiment has been stopped.",
      选择: "Select",
      请选择: "Please Select",
      物理串口波特率: "Baud rate of the physical serial port",
      选择波特率: "Select Baud rate",
      设置: "Setting",
      可充电: "Rechargeable",
      需要电源: "Need the power supply",
      "提示：当前设备需要依附底版才可以使用，请选择底版类型":
        "Note: the current device can only be used if it is attached to the base version, please select the base version type",
      选择底板: "Select the backplane",
      继电器没有供电电源: "The relay has no power supply",
      继电器没有负载: "No load on the relay",
      未定义: "Undefined",
      名称: "Name",
      背景颜色: "Background Color",
      宽度: "Width",
      高度: "Height",
      请输入: "Please enter",
      复制: "Copy",
      粘贴: "Paste",
      剪贴: "Cut",
      删除: "Delete",
      上移一层: "Move up a layer of",
      下移一层: "Down a layer of",
      移至顶层: "Move to the top",
      移至底层: "Move to the bottom",
      全选: "Select all",
      Lora连接设置: "Lora Connection Settings",
      "Zigbee 设置": "Zigbee Settings",
      "485采集地址配置": "485 Collection Address Config",
      其他配置: "Other Config",
      频率: "Frequency",
      带宽: "bandwidth",
      采集间隔: "CollecT Interval",
      工作模式: "Working Mode",
      透传: "Passthrough",
      普通: "Ordinary",
      新增配置: "Add Config",
      删除配置: "Delete Config",
      有人: "Someone",
      无人: "Nobody",
      出水口: "Outlet",
      "水阀控制器(开)": "Open",
      "水阀控制器(关)": "Closed",
      GPS初始位置: "GPS Init",
      经度: "Longitude",
      纬度: "Latitude",
      步长: "Step Length",
      土壤温度: "Soil Temperature",
      土壤湿度: "Soil Humidity",
      标签号: "Label Number",
      是否加密: "Encrypted",
      卡号选择: "Card Number Selection",
      使用随机卡号: "Use Random Card Number",
      使用有序卡号: "Use Orderly Card Number",
      当前固件: "Current Firmware",
      选择固件: "Select Firmware",
      选择要烧写的固件: "Select the firmware to be burned",
      节点设置: "Node Settings",
      采集地址配置: "Collect address configuration",
      加载中: "Loading",
      串口号: "Serial Port",
      网关端口: "Gateway Port",
      网关地址: "Gateway Address",
      设备标识: "Device Id",
      网关连接设置: "Gateway Connection Settings",
      对接平台: "Platform",
      叶子设备配置: "Leaf device configuration",
      连接设置: "Connect Setting",
      服务地址: "Server Address",
      服务端口: "Server Port",
      设备配置: "Device Setting",
      接入端口: "Connect Port",
      云平台地址: "Cloud Platform Address",
      用户令牌: "User Token",
      "设备访问令牌必须为20位数字或字母的组合！": "The device access token must be a combination of 20 digits or letters!",
      "设备标识必须为十六进制数！": "Device ID must be a hexadecimal number!",
      "设备标识必须为36位UUID！（ThingsBoard平台的设备ID）": "The device ID must be a 36 digit UUID! (Device ID of ThingsBoard platform)",
      "485型温湿度": "485 Humiture",
      "485型人体红外": "485 human infrared",
      "485型CO2": "485 Carbon Dioxide",
      "485型光照": "485 Illumination",
      路由器: "Route",
      平台地址: "Platform Address",
      平台端口: "Platform Port",
      云平台连接设置: "Cloud Platform Connect Setting",
      导入本地设备: "Import Local Configuration",
      "CAN 网关": "CAN Gateway",
      "485型": "（485）",
      "232型": "（232）",
      氮: "N",
      磷: "P",
      钾: "K",
      "PLC 采集器": "PLC",
      MQTT5GCPE: "MQTT 5G CPE",
      设备未实现: "Device not implemented",
      IP地址: "IP Adress",
      子网掩码: "Subnet mask",
      环境参数: "Environment",
      产品ID: "产品ID",
      MQTT连接设置: "MQTT连接设置",
      MQTTDAM0200: "MQTTDAM0200",
    };
  },
  "70b0": function (e, n, t) {
    "use strict";
    var r = t("ba4c"),
      i = t.n(r),
      o = t("a925");
    i.a.use(o.a);
    var a = new o.a({ locale: "zh-CN", messages: { "zh-CN": t("19b2"), "en-US": t("6b89") } });
    n.a = a;
  },
  "72fa": function (e, n, t) {
    "use strict";
    (t.d(n, "g", function () {
      return d;
    }),
      t.d(n, "b", function () {
        return l;
      }),
      t.d(n, "q", function () {
        return r;
      }),
      t.d(n, "j", function () {
        return f;
      }),
      t.d(n, "i", function () {
        return p;
      }),
      t.d(n, "a", function () {
        return h;
      }),
      t.d(n, "k", function () {
        return g;
      }),
      t.d(n, "c", function () {
        return m;
      }),
      t.d(n, "p", function () {
        return v;
      }),
      t.d(n, "d", function () {
        return w;
      }),
      t.d(n, "m", function () {
        return k;
      }),
      t.d(n, "n", function () {
        return S;
      }),
      t.d(n, "o", function () {
        return C;
      }),
      t.d(n, "l", function () {
        return R;
      }),
      t.d(n, "f", function () {
        return b;
      }),
      t.d(n, "e", function () {
        return x;
      }),
      t.d(n, "h", function () {
        return y;
      }),
      t("d3b7"),
      t("ddb0"));
    var r,
      i = t("8b83"),
      o = t("c65a"),
      a = t("c03e"),
      c = t("53fe"),
      s = t("9f12"),
      u = t("03cd"),
      d = function e() {
        Object(s.a)(this, e);
      },
      l = (function () {
        function e(n, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "255.255.255.0",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
          (Object(s.a)(this, e),
            (this.ip = "192.168.0.1"),
            (this.mask = "255.255.255.0"),
            (this.gateway = "192.168.0.254"),
            (this.mac = "00:00:00:00:00:00"),
            (this.ip = n),
            (this.gateway = t),
            (this.mask = r),
            (this.mac = i));
        }
        return (
          Object(c.a)(e, [
            {
              key: "CheckNetwork",
              value: function (e) {
                if (this.isRouter && e.isRouter) return !1;
                if (this.isRouter) {
                  if (this.ip == e.gateway && this.mask == e.mask) return !0;
                } else if (e.isRouter && e.ip == this.gateway && this.mask == e.mask) return !0;
                return !1;
              },
            },
            {
              key: "isRouter",
              get: function () {
                return this.ip === this.gateway;
              },
            },
          ]),
          e
        );
      })();
    !(function (e) {
      ((e.RS485 = "RS485"), (e.RS232 = "RS232"), (e.Ethernet = "Ethernet"), (e.CAN = "CAN"), (e.DI = "DI"), (e.DO = "DO"), (e.PROFIBUS = "PROFIBUS"));
    })(r || (r = {}));
    var f = function e() {
        (Object(s.a)(this, e), (this.index = 0), (this.datas = []), (this.values = []));
      },
      p = function e() {
        (Object(s.a)(this, e), (this.messages = []));
      },
      h = function e(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 126750;
        (Object(s.a)(this, e), (this.baudRate = t), (this.identify = n));
      },
      g = function e() {
        (Object(s.a)(this, e), (this.Channel = u.a.Channel_11), (this.PandID = 0), (this.SerialNum = 1234));
      },
      m = (function (e) {
        function n() {
          return (Object(s.a)(this, n), Object(i.a)(this, Object(o.a)(n).call(this)));
        }
        return (
          Object(a.a)(n, function e() {
            (Object(s.a)(this, e), (this.IsCoordinator = !1), (this.IsConnected = !1), (this.zigBeeInfo = new g()));
          }),
          n
        );
      })();
    function v(e) {
      return "zigBeeInfo" in e;
    }
    var b,
      x,
      y,
      w = function e() {
        (Object(s.a)(this, e),
          (this.Channel = u.f.Channel_0),
          (this.PandID = 0),
          (this.SerialNum = 1234),
          (this.Frequency = "868100000"),
          (this.Bandwidth = 125),
          (this.Spreadingfactor = 7),
          (this.Coderate = "3/4"));
      };
    function k(e) {
      return "loraInfo" in e;
    }
    function S(e) {
      return "ScanRadiusUnit" in e;
    }
    function C(e) {
      return "ConnectInterrogators" in e;
    }
    function R(e) {
      return "GetGroupConnectors" in e;
    }
    (!(function (e) {
      ((e[(e.None = 255)] = "None"), (e[(e.M1 = 0)] = "M1"), (e[(e.CPUA = 2)] = "CPUA"), (e[(e.CPUB = 3)] = "CPUB"));
    })(b || (b = {})),
      (function (e) {
        ((e[(e.LF_125K = 1)] = "LF_125K"),
          (e[(e.HF_ISO14443A = 2)] = "HF_ISO14443A"),
          (e[(e.HF_ISO15693 = 3)] = "HF_ISO15693"),
          (e[(e.UHF_ISO18000_6C = 4)] = "UHF_ISO18000_6C"),
          (e[(e.UHF_EPCglobal = 5)] = "UHF_EPCglobal"));
      })(x || (x = {})),
      (function (e) {
        ((e.Real = "Real"), (e.Virtual = "Virtual"), (e.Environment = "Environment"));
      })(y || (y = {})));
  },
  "73ec": function (e, n, t) {
    "use strict";
    (t.d(n, "B", function () {
      return g;
    }),
      t.d(n, "C", function () {
        return m;
      }),
      t.d(n, "n", function () {
        return v;
      }),
      t.d(n, "r", function () {
        return b;
      }),
      t.d(n, "E", function () {
        return x;
      }),
      t.d(n, "H", function () {
        return y;
      }),
      t.d(n, "w", function () {
        return w;
      }),
      t.d(n, "I", function () {
        return k;
      }),
      t.d(n, "y", function () {
        return S;
      }),
      t.d(n, "s", function () {
        return C;
      }),
      t.d(n, "G", function () {
        return R;
      }),
      t.d(n, "x", function () {
        return I;
      }),
      t.d(n, "u", function () {
        return O;
      }),
      t.d(n, "v", function () {
        return _;
      }),
      t.d(n, "c", function () {
        return P;
      }),
      t.d(n, "q", function () {
        return D;
      }),
      t.d(n, "F", function () {
        return T;
      }),
      t.d(n, "D", function () {
        return E;
      }),
      t.d(n, "p", function () {
        return V;
      }),
      t.d(n, "z", function () {
        return B;
      }),
      t.d(n, "l", function () {
        return F;
      }),
      t.d(n, "j", function () {
        return M;
      }),
      t.d(n, "k", function () {
        return H;
      }),
      t.d(n, "m", function () {
        return U;
      }),
      t.d(n, "J", function () {
        return K;
      }),
      t.d(n, "i", function () {
        return G;
      }),
      t.d(n, "K", function () {
        return W;
      }),
      t.d(n, "o", function () {
        return z;
      }),
      t.d(n, "e", function () {
        return q;
      }),
      t.d(n, "g", function () {
        return J;
      }),
      t.d(n, "b", function () {
        return Q;
      }),
      t.d(n, "a", function () {
        return Y;
      }),
      t.d(n, "h", function () {
        return Z;
      }),
      t.d(n, "t", function () {
        return $;
      }),
      t.d(n, "f", function () {
        return X;
      }),
      t.d(n, "d", function () {
        return ee;
      }),
      t.d(n, "A", function () {
        return re;
      }),
      t("99af"),
      t("4160"),
      t("c975"),
      t("a15b"),
      t("d81d"),
      t("13d5"),
      t("fb6a"),
      t("45fc"),
      t("a434"),
      t("ace4"),
      t("0d03"),
      t("b64b"),
      t("d3b7"),
      t("acd8"),
      t("e25e"),
      t("4d63"),
      t("ac1f"),
      t("25f0"),
      t("466d"),
      t("4d90"),
      t("38cf"),
      t("5319"),
      t("841c"),
      t("1276"),
      t("498a"),
      t("5cc6"),
      t("9a8c"),
      t("a975"),
      t("735e"),
      t("c1ac"),
      t("d139"),
      t("3a7b"),
      t("d5d6"),
      t("82f8"),
      t("e91f"),
      t("60bd"),
      t("5f96"),
      t("3280"),
      t("3fcc"),
      t("ca91"),
      t("25a1"),
      t("cd26"),
      t("3c5d"),
      t("2954"),
      t("649e"),
      t("219c"),
      t("170b"),
      t("b39a9"),
      t("72f7"),
      t("159b"));
    var r = t("9f12"),
      i = t("53fe"),
      o = (t("9e1f"), t("450d"), t("6ed5")),
      a = t.n(o),
      c = (t("0fb7"), t("f529")),
      s = t.n(c),
      u = (t("be4f"), t("896a")),
      d = t.n(u),
      l = t("0895"),
      f = t("720d"),
      p = t.n(f),
      h = (t("27ae"), t("70b0"));
    function g(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "加载中",
        t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
      r ? d.a.service(r) : e ? d.a.service({ text: n, lock: t, fullscreen: !0 }) : d.a.service({ text: n, lock: t, fullscreen: !0 }).close();
    }
    function m(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
        t = arguments.length > 2 ? arguments[2] : void 0;
      t ? s()(t) : s()({ showClose: !0, message: e, type: n });
    }
    function v(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.a.t("lang.提示信息").toString(),
        t = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0;
      a.a.alert(e, n, r || { confirmButtonText: h.a.t("lang.确定").toString(), callback: t });
    }
    function b(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.a.t("lang.提示信息").toString(),
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.a.t("lang.确定").toString(),
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.a.t("lang.取消").toString(),
        i = arguments.length > 4 ? arguments[4] : void 0,
        o = arguments.length > 5 ? arguments[5] : void 0,
        c = arguments.length > 6 ? arguments[6] : void 0;
      a.a
        .confirm(e, n, c || { confirmButtonText: t, cancelButtonText: r, type: "warning" })
        .then(i)
        .catch(o);
    }
    function x(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.a.t("lang.提示信息").toString(),
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.a.t("lang.确定").toString(),
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.a.t("lang.取消").toString(),
        i = arguments.length > 4 ? arguments[4] : void 0,
        o = arguments.length > 5 ? arguments[5] : void 0,
        c = arguments.length > 6 ? arguments[6] : void 0;
      a.a
        .prompt(e, n, c || { confirmButtonText: t, cancelButtonText: r, type: "warning" })
        .then(i)
        .catch(o);
    }
    function y(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
      if (t > 0 && "100" !== t) {
        var r = new Date();
        (r.setDate(r.getDate() + t), (document.cookie = e + "=" + escape(n) + (null == t ? "" : ";expires=" + r.toUTCString())));
      }
      if ("100" === t) {
        var i = new Date("2118-01-01 00:00:00");
        document.cookie = e + "=" + escape(n) + (null == t ? "" : ";expires=" + i.toUTCString());
      }
    }
    function w(e) {
      if (document.cookie.length > 0) {
        var n = document.cookie.indexOf(e + "=");
        if (-1 !== n) {
          n = n + e.length + 1;
          var t = document.cookie.indexOf(";", n);
          return (-1 === t && (t = document.cookie.length), unescape(document.cookie.substring(n, t)));
        }
      }
      return "";
    }
    function k(e, n) {
      window.localStorage.setItem(e, JSON.stringify(n));
    }
    function S(e) {
      var n = window.localStorage.getItem(e);
      return null != n ? JSON.parse(n) : null;
    }
    function C(e) {
      return null != window.localStorage.getItem(e);
    }
    function R(e) {
      window.localStorage.removeItem(e);
    }
    function I(e) {
      var n = window.location.href.match(new RegExp("[?&]" + e + "=([^&]+)", "i"));
      return null == n || n.length < 1 ? "" : n[1];
    }
    function O(e, n) {
      var t = {
        "M+": n.getMonth() + 1,
        "d+": n.getDate(),
        "h+": n.getHours(),
        "m+": n.getMinutes(),
        "s+": n.getSeconds(),
        "q+": Math.floor((n.getMonth() + 3) / 3),
        S: n.getMilliseconds(),
      };
      for (var r in (/(y+)/.test(e) && (e = e.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))), t))
        new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? t[r] : ("00" + t[r]).substr(("" + t[r]).length)));
      return e;
    }
    function _() {
      var e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) {
        var t = ((e + 16 * Math.random()) % 16) | 0;
        return ((e = Math.floor(e / 16)), ("x" == n ? t : (3 & t) | 8).toString(16));
      });
    }
    function P(e, n) {
      var t = n - e,
        r = Math.random();
      return e + Math.round(r * t);
    }
    function D() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "*",
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = arguments.length > 2 ? arguments[2] : void 0;
      Object(l.a)({ accept: e, multiple: n }).then(function (e) {
        t(e);
      });
    }
    var A =
        "-----BEGIN RSA PRIVATE KEY-----\nMIICXAIBAAKBgQDgjWIGqVumZIEbkkfGFWLd2Jumzj/hTxfqLBttY84B+OjlnJ4h\nCwo0IqZosjSfnnb0qVvLDHEnkpVZfadHITTdqmpzVnnLxsGN/hp/a9v7vR/vqY9t\n7IqtWQJTU00dFhqDscrE8uIDyrWzwyRsLJ8KkTLu3KlEBRLgJpDFQ/52PQIDAQAB\nAoGBAIukAGiqGv9/krZFonKxS/kvwaPasOj5GaMbaLb/ENYzJwna+o8L4X2IarnC\n0GzOy6TcSOQdSaTVSCENvd/C668fFZBvDUMmhAdv6fRZ8VJ2DC0fujDZ159Jnpnc\nWYu7jlfIashwC207h0P2YNJAmZYrUa1UjgfCh7ty2RUqxI51AkEA828XN0DuScU4\nWb7w29YCN3ShQqsiwU0oNEy4xWYUJ1Z1x/zys2xJ+mwDLWzYf8mcz3q4R7WQeRvv\nc8cQg6dHEwJBAOwkxsIQZIJWGlVCYq/5CEs0LX57nbnDXtTV1+SSOor3Q8jPcVuY\nZC9y0Utlf+ehBJMbIq/kCi1DN0KqzSFqZ28CQGKU3mX12YnuYD+X35pnNEaY6KVD\nALQfNuTXHQxzpj23+cKfYPngJKVREIhYx+QYFXTAUdhYYsVo1rOgLcPi/hkCQGbO\njAmpAVkNC2HbCQP7s3SqPrQ2NTDOsdaPUvKcBwjBJa2jQoLSEavmnN/qTIkXPNqe\nkbdp3FRgUwqfObc2j9kCQGOvHz4+wRq//+CEd/PzC4z41M4JgmJKm8yOS7D4iqbB\nLS8tMligK1KpcmHhnLB3DrAKGdIZGLqA2Ft/yapeWSE=\n-----END RSA PRIVATE KEY-----",
      N =
        "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgjWIGqVumZIEbkkfGFWLd2Jum\nzj/hTxfqLBttY84B+OjlnJ4hCwo0IqZosjSfnnb0qVvLDHEnkpVZfadHITTdqmpz\nVnnLxsGN/hp/a9v7vR/vqY9t7IqtWQJTU00dFhqDscrE8uIDyrWzwyRsLJ8KkTLu\n3KlEBRLgJpDFQ/52PQIDAQAB\n-----END PUBLIC KEY-----",
      j = new p.a({});
    function T(e) {
      return (j.setPublicKey(N), j.encrypt(e));
    }
    function E(e) {
      return (j.setPrivateKey(A), j.decrypt(e));
    }
    var L = t("21a6");
    function V(e, n) {
      var t = new Blob([e]);
      return (L.saveAs(t, n), "");
    }
    function B(e) {
      if ("" === e || "" === e.trim()) return !1;
      try {
        return btoa(atob(e)) == e;
      } catch (e) {
        return !1;
      }
    }
    function F(e) {
      var n = "";
      if (null == e) return "";
      for (var t = 0; t < e.length; t++) n += String.fromCharCode(e[t]);
      return n;
    }
    function M(e) {
      for (var n = new Array(), t = 0; t < e.length; t++) n.push(e[t]);
      return n;
    }
    function H(e) {
      return e.reduce(function (e, n) {
        return e + n.toString(16).padStart(2, "0");
      }, "");
    }
    function U(e) {
      return new Uint8Array(
        e.match(/.{1,2}/g).map(function (e) {
          return parseInt(e, 16);
        }),
      );
    }
    function K(e) {
      for (var n = [], t = 0, r = e.length; t < r; ++t) n.push(e.charCodeAt(t));
      return new Uint8Array(n);
    }
    function G(e, n, t, r) {
      var i = e.split(n),
        o = "number" == typeof t ? t : -1;
      if (void 0 === r ? t : r) for (var a = i.length - 1; a > -1; a--) 0 === i[a].length && i.splice(a, 1);
      return i.slice(0, o);
    }
    function W(e) {
      for (var n = "", t = new Uint8Array(e), r = t.byteLength, i = 0; i < r; i++) n += String.fromCharCode(t[i]);
      return window.btoa(n);
    }
    function z(e) {
      for (
        var n = (e + "=".repeat((4 - (e.length % 4)) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), t = window.atob(n), r = new Uint8Array(t.length), i = 0;
        i < t.length;
        ++i
      )
        r[i] = t.charCodeAt(i);
      return r;
    }
    function q(e) {
      return "NaN" != parseFloat(e).toString();
    }
    function J(e, n, t, r, i) {
      var o = Math.PI;
      if (i > 0) {
        var a = (e - t) * Math.cos((-i * o) / 180) - (n - r) * Math.sin((-i * o) / 180) + t,
          c = (e - t) * Math.sin((-i * o) / 180) + (n - r) * Math.cos((-i * o) / 180) + r;
        return [Math.round(a), Math.round(c)];
      }
      var s = (e - t) * Math.cos((-i * o) / 180) - (n - r) * Math.sin((-i * o) / 180) + t,
        u = (e - t) * Math.sin((-i * o) / 180) + (n - r) * Math.cos((-i * o) / 180) + r;
      return [Math.round(s), Math.round(u)];
    }
    var Q = (function () {
        function e() {
          Object(r.a)(this, e);
        }
        return (
          Object(i.a)(e, null, [
            {
              key: "ByteToString",
              value: function (e) {
                return (e %= 256) > 15 ? e.toString(16) : "0" + e.toString(16);
              },
            },
            {
              key: "BytesToString",
              value: function (e) {
                var n = this,
                  t = "";
                return (
                  e.forEach(function (e) {
                    t += n.ByteToString(e);
                  }),
                  t
                );
              },
            },
            {
              key: "BytesToStringFormat",
              value: function (e) {
                var n = this,
                  t = "";
                return (
                  e.forEach(function (e) {
                    t += n.ByteToString(e) + "-";
                  }),
                  t.substring(0, t.length - 1)
                );
              },
            },
            {
              key: "StringToByte",
              value: function (e) {
                return parseInt(e, 16) % 256;
              },
            },
            {
              key: "StringToBytes",
              value: function (e) {
                for (var n = new Uint8Array(e.length / 2), t = 0; t < e.length; t += 2) n[t / 2] = this.StringToByte(e.substring(t, t + 2));
                return n;
              },
            },
            {
              key: "ConvertDataTimeLong",
              value: function (e) {
                return e.getTime();
              },
            },
            {
              key: "ConvertLongDateTime",
              value: function (e) {
                return new Date(e);
              },
            },
          ]),
          e
        );
      })(),
      Y = (function () {
        function e() {
          Object(r.a)(this, e);
        }
        return (
          Object(i.a)(e, null, [
            {
              key: "SubByte",
              value: function (e, n, t) {
                return n + t > e.length ? e.subarray(n, e.length) : e.subarray(n, n + t);
              },
            },
            {
              key: "ByteArrayCompare",
              value: function (e, n) {
                if (null == e || null == n || e.length != n.length) return !1;
                for (var t = 0; t < e.length; t++) if (e[t] != n[t]) return !1;
                return !0;
              },
            },
          ]),
          e
        );
      })();
    function Z(e, n) {
      var t = [];
      return (
        e.forEach(function (e) {
          var r = n(e);
          null != r && t.push(r);
        }),
        t
      );
    }
    function $(e) {
      var n = e.join(",").split(",");
      return new Uint8Array(n);
    }
    function X(e, n, t) {
      return new Array(n - e.length + 1).join(t || "") + e;
    }
    function ee(e) {
      var n = window.location.search;
      if ((n = n.substr(1) || window.location.hash.split("?")[1])) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
          r = n.match(t);
        return null != r ? decodeURIComponent(r[2]) : null;
      }
    }
    function ne(e, n) {
      var t = (e[0].x - n[0].x) * (e[1].y - n[0].y) - (e[0].y - n[0].y) * (e[1].x - n[0].x),
        r = (e[0].x - n[1].x) * (e[1].y - n[1].y) - (e[0].y - n[1].y) * (e[1].x - n[1].x);
      if (t * r >= 0) return !1;
      var i = (n[0].x - e[0].x) * (n[1].y - e[0].y) - (n[0].y - e[0].y) * (n[1].x - e[0].x);
      return !(i * (i + t - r) >= 0);
    }
    function te(e, n) {
      var t,
        r,
        i = n.length,
        o = 0,
        a = e;
      t = n[0];
      for (var c = 1; c <= i; ++c) {
        if (a.x == t.x && a.y == t.y) return !0;
        if (((r = n[c % i]), a.y < Math.min(t.y, r.y) || a.y > Math.max(t.y, r.y))) t = r;
        else {
          if (a.y > Math.min(t.y, r.y) && a.y < Math.max(t.y, r.y)) {
            if (a.x <= Math.max(t.x, r.x)) {
              if (t.y == r.y && a.x >= Math.min(t.x, r.x)) return !0;
              if (t.x == r.x) {
                if (t.x == a.x) return !0;
                ++o;
              } else {
                var s = ((a.y - t.y) * (r.x - t.x)) / (r.y - t.y) + t.x;
                if (Math.abs(a.x - s) < 2e-10) return !0;
                a.x < s && ++o;
              }
            }
          } else if (a.y == r.y && a.x <= r.x) {
            var u = n[(c + 1) % i];
            a.y >= Math.min(t.y, u.y) && a.y <= Math.max(t.y, u.y) ? ++o : (o += 2);
          }
          t = r;
        }
      }
      return o % 2 != 0;
    }
    function re(e, n) {
      return (
        (function (e, n) {
          for (var t = 0, r = e.length; t < r; t++)
            for (var i = 0, o = n.length; i < o; i++) if (ne([e[t], e[t === r - 1 ? 0 : t + 1]], [n[i], n[i === o - 1 ? 0 : i + 1]])) return !0;
          return !1;
        })(e, n) ||
        (function (e, n) {
          var t,
            r = !1;
          return (
            (t = e.some(function (e) {
              return te(e, n);
            })) ||
              (r = n.some(function (n) {
                return te(n, e);
              })),
            t || r
          );
        })(e, n)
      );
    }
  },
  "764b8": function (e, n, t) {
    var r = t("e139");
    ("string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals),
      (0, t("499e").default)("a5b555bc", r, !0, { sourceMap: !1, shadowMode: !1 }));
  },
  7957: function (e, n, t) {
    e.exports = t.p + "fonts/iconfont.75b99fef.eot";
  },
  "7cde": function (e, n, t) {
    "use strict";
    (t.d(n, "a", function () {
      return o;
    }),
      t.d(n, "b", function () {
        return a;
      }),
      t("7db0"));
    var r = t("c3c5"),
      i = (t("98db"), []);
    function o(e) {
      return function (n) {
        null ==
          i.find(function (n) {
            return n[0] == e;
          }) && i.push([e, n]);
      };
    }
    function a(e) {
      var n = e.toLowerCase(),
        t = i.find(function (e) {
          return e[0].toLowerCase() == n;
        });
      if (null != t) {
        for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++) a[c - 1] = arguments[c];
        return Object(r.a)(t[1], a);
      }
      return null;
    }
  },
  "8a55": function (e, n, t) {
    e.exports = t.p + "fonts/iconfont.dec42474.woff";
  },
  9157: function (e, n, t) {
    "use strict";
    (t("c975"), t("a15b"), t("d81d"), t("b0c0"), t("ac1f"), t("5319"), t("96cf"));
    var r = t("89ba"),
      i = t("53fe"),
      o = t("9f12"),
      a = t("482f"),
      c = t("59b9"),
      s = t("0613"),
      u = t("8b83"),
      d = t("c65a"),
      l = t("c03e"),
      f = t("a0f7"),
      p = function e() {
        (Object(o.a)(this, e),
          (this.Address = ""),
          (this.Birthday = ""),
          (this.City = ""),
          (this.CollegeName = ""),
          (this.ContactName = ""),
          (this.ContactPhone = ""),
          (this.Email = ""),
          (this.Kind = ""),
          (this.Province = ""),
          (this.StuNo = ""),
          (this.authorities = []));
      },
      h =
        (new ((function (e) {
          function n() {
            return (Object(o.a)(this, n), Object(u.a)(this, Object(d.a)(n).apply(this, arguments)));
          }
          var t, a;
          return (
            Object(l.a)(n, e),
            Object(i.a)(n, [
              {
                key: "AddOrUpdate",
                value:
                  ((a = Object(r.a)(
                    regeneratorRuntime.mark(function e(n) {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), this.WebPost("/api/NLEUser/AddOrUpdateNLEUser", n));
                              case 2:
                                return ((t = e.sent), e.abrupt("return", t));
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: "GetEentity",
                value:
                  ((t = Object(r.a)(
                    regeneratorRuntime.mark(function e(n) {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), this.WebGet("/api/NLEUser/GetNLEUser/".concat(n), {}));
                              case 2:
                                return ((t = e.sent), e.abrupt("return", t));
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            n
          );
        })(f.b))(),
        t("73ec")),
      g = new ((function () {
        function e() {
          Object(o.a)(this, e);
        }
        var n, t, u, d, l;
        return (
          Object(i.a)(e, [
            {
              key: "tokenValid",
              value:
                ((l = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), Object(c.a)({ url: "".concat(a.a.uua_host, "/user"), method: "POST" }));
                          case 2:
                            return ((n = e.sent), e.abrupt("return", 200 === n.code));
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return l.apply(this, arguments);
                }),
            },
            {
              key: "getUserInfo",
              value:
                ((d = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n, t;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), Object(c.a)({ url: "".concat(a.a.uua_host, "/user"), method: "POST" }));
                          case 2:
                            return (
                              (n = e.sent),
                              ((t = n.data.userAuthentication.principal).authorities = n.data.authorities),
                              (t.roles = t.authorities.map(function (e) {
                                return { id: e.authority, roleName: 33 == e.authority ? "老师" : "学生" };
                              })),
                              e.abrupt("return", t)
                            );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return d.apply(this, arguments);
                }),
            },
            {
              key: "logout",
              value:
                ((u = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), Object(c.a)({ url: "".concat(a.a.uua_host, "/exit"), method: "GET" }));
                          case 2:
                            (e.sent, Object(h.H)("cloud-token", ""), location.reload());
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return u.apply(this, arguments);
                }),
            },
            {
              key: "redirectLogin",
              value: function () {
                window.location.href = a.a.redirect_uri + "?backUrl=" + window.location.href;
              },
            },
            {
              key: "redirectRegister",
              value: function () {
                window.location.href = a.a.redirect_register + "?backUrl=" + window.location.href;
              },
            },
            {
              key: "initStore",
              value:
                ((t = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n, t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("" == Object(h.w)("cloud-token")) {
                                e.next = 25;
                                break;
                              }
                              return ((e.next = 3), this.tokenValid());
                            case 3:
                              if (!e.sent) {
                                e.next = 25;
                                break;
                              }
                              return ((e.next = 6), this.getUserInfo());
                            case 6:
                              ((n = e.sent),
                                ((t = new p()).Name = n.name),
                                (t.UserName = n.userName),
                                (t.UserId = n.userId),
                                (t.Avatar = n.avatar),
                                (t.Birthday = n.birthday),
                                (t.City = n.city),
                                (t.CollegeId = n.collegeId),
                                (t.CollegeKind = n.collegeKind),
                                (t.CollegeName = n.collegeName),
                                (t.ContactPhone = n.contactPhone),
                                (t.ContactName = n.contactName),
                                (t.Email = n.email),
                                (t.Kind = n.kind),
                                (t.Sex = n.sex),
                                (t.StuNo = n.stuNo),
                                n.roles &&
                                  n.roles.length &&
                                  (t.Role = n.roles
                                    .map(function (e, n) {
                                      return e.roleName;
                                    })
                                    .join(".")),
                                s.a.commit("user/initUser", n));
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "initToken",
              value:
                ((n = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                "" != (n = Object(h.x)("token")) &&
                                  (Object(h.H)("cloud-token", n), location.replace(location.href.substring(0, location.href.indexOf("token") - 1))),
                                (e.next = 4),
                                this.initStore()
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "loginValid",
              value: function () {
                s.a.state.user.isLogin || this.redirectLogin();
              },
            },
            {
              key: "validRight",
              value: function (e) {
                return (s.a.getters["user/userType"], !0);
              },
            },
          ]),
          e
        );
      })())(),
      m = new ((function () {
        function e() {
          Object(o.a)(this, e);
        }
        var n, t, u, d, l;
        return (
          Object(i.a)(e, [
            {
              key: "tokenValid",
              value:
                ((l = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), Object(c.a)({ url: "".concat(a.a.cloud_host, "/upms/auth/tokenValid"), method: "POST" }));
                          case 2:
                            return ((n = e.sent), e.abrupt("return", "0" != n.data.status));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return l.apply(this, arguments);
                }),
            },
            {
              key: "getUserInfo",
              value:
                ((d = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), Object(c.a)({ url: "".concat(a.a.cloud_host, "/upms/my/userInfo"), method: "POST" }));
                          case 2:
                            return ((n = e.sent), e.abrupt("return", n.data));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return d.apply(this, arguments);
                }),
            },
            {
              key: "logout",
              value:
                ((u = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), Object(c.a)({ url: "".concat(a.a.cloud_host, "/upms/auth/exit"), method: "POST" }));
                          case 2:
                            (e.sent, Object(h.H)("cloud-token", ""), location.reload());
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return u.apply(this, arguments);
                }),
            },
            {
              key: "redirectLogin",
              value: function () {
                window.location.href = a.a.redirect_uri + "?backUrl=" + window.location.href;
              },
            },
            {
              key: "redirectRegister",
              value: function () {
                window.location.href = a.a.redirect_register + "?backUrl=" + window.location.href;
              },
            },
            {
              key: "initStore",
              value:
                ((t = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n, t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("" == Object(h.w)("cloud-token")) {
                                e.next = 31;
                                break;
                              }
                              return ((e.next = 5), this.tokenValid());
                            case 5:
                              if (!e.sent) {
                                e.next = 31;
                                break;
                              }
                              return ((e.next = 10), this.getUserInfo());
                            case 10:
                              ((n = e.sent),
                                ((t = new p()).Name = n.name),
                                (t.UserName = n.userName),
                                (t.UserId = n.userId),
                                (t.Avatar = n.avatar),
                                (t.Birthday = n.birthday),
                                (t.City = n.city),
                                (t.CollegeId = n.collegeId),
                                (t.CollegeKind = n.collegeKind),
                                (t.CollegeName = n.collegeName),
                                (t.ContactPhone = n.contactPhone),
                                (t.ContactName = n.contactName),
                                (t.Email = n.email),
                                (t.Kind = n.kind),
                                (t.Sex = n.sex),
                                (t.StuNo = n.stuNo),
                                n.roles.length &&
                                  (t.Role = n.roles
                                    .map(function (e, n) {
                                      return e.roleName;
                                    })
                                    .join(".")),
                                s.a.commit("user/initUser", n));
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "initToken",
              value:
                ((n = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                "" != (n = Object(h.x)("token")) &&
                                  (Object(h.H)("cloud-token", n), location.replace(location.href.substring(0, location.href.indexOf("token") - 1))),
                                (e.next = 5),
                                this.initStore()
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "loginValid",
              value: function () {
                s.a.state.user.isLogin || this.redirectLogin();
              },
            },
            {
              key: "validRight",
              value: function (e) {
                return (s.a.getters["user/userType"], !0);
              },
            },
          ]),
          e
        );
      })())(),
      v = null;
    switch (a.a.platName) {
      case "official":
        v = g;
        break;
      case "training":
        v = m;
    }
    n.a = v;
  },
  a0f7: function (e, n, t) {
    "use strict";
    (t.d(n, "a", function () {
      return s;
    }),
      t.d(n, "b", function () {
        return u;
      }),
      t("96cf"));
    var r = t("89ba"),
      i = t("53fe"),
      o = (t("8b83"), t("c65a"), t("c03e"), t("9f12")),
      a = t("59b9"),
      c = t("482f"),
      s = function e() {
        (Object(o.a)(this, e), (this.msg = ""), (this.message = ""));
      },
      u = (function () {
        function e() {
          (Object(o.a)(this, e), (this.cloud_host = c.a.cloud_host), (this.web_host = c.a.web_host));
        }
        var n, t, s, u, d;
        return (
          Object(i.a)(e, [
            {
              key: "CloudGet",
              value:
                ((d = Object(r.a)(
                  regeneratorRuntime.mark(function e(n) {
                    var t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return ((e.next = 2), Object(a.a)({ url: "".concat(this.cloud_host + n), method: "get" }));
                            case 2:
                              return ((t = e.sent), e.abrupt("return", t));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e) {
                  return d.apply(this, arguments);
                }),
            },
            {
              key: "CloudPost",
              value:
                ((u = Object(r.a)(
                  regeneratorRuntime.mark(function e(n, t) {
                    var r;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return ((e.next = 2), Object(a.a)({ url: "".concat(this.cloud_host + n), method: "post", data: t }));
                            case 2:
                              return ((r = e.sent), e.abrupt("return", r));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, n) {
                  return u.apply(this, arguments);
                }),
            },
            {
              key: "WebGet",
              value:
                ((s = Object(r.a)(
                  regeneratorRuntime.mark(function e(n, t) {
                    var r;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(a.a)({ url: "".concat(this.web_host + n), method: "get", params: t, headers: { "Content-Type": "application/json" } })
                              );
                            case 2:
                              return ((r = e.sent), e.abrupt("return", r));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, n) {
                  return s.apply(this, arguments);
                }),
            },
            {
              key: "WebPost",
              value:
                ((t = Object(r.a)(
                  regeneratorRuntime.mark(function e(n, t) {
                    var r;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(a.a)({ url: "".concat(this.web_host + n), method: "post", data: t, headers: { "Content-Type": "application/json" } })
                              );
                            case 2:
                              return ((r = e.sent), e.abrupt("return", r));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, n) {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "WebPostForm",
              value:
                ((n = Object(r.a)(
                  regeneratorRuntime.mark(function e(n, t) {
                    var r;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return ((e.next = 2), Object(a.a)({ url: "".concat(this.web_host + n), method: "post", data: t }));
                            case 2:
                              return ((r = e.sent), e.abrupt("return", r));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, t) {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "GetFormData",
              value: function (e) {
                var n = new FormData();
                for (var t in e) n.append(t, e[t]);
                return n;
              },
            },
          ]),
          e
        );
      })();
  },
  ba66: function (e, n, t) {
    (e.exports = t("24fb")(!1)).push([e.i, "a{text-decoration:none}html *{font-family:Microsoft YaHei}", ""]);
  },
  cc57: function (e, n, t) {
    var r = t("ba66");
    ("string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals),
      (0, t("499e").default)("73d4f360", r, !0, { sourceMap: !1, shadowMode: !1 }));
  },
  cd49: function (e, n, t) {
    "use strict";
    (t.r(n), t("2ca0"), t("5e32"), t("450d"));
    var r = t("6721"),
      i = t.n(r),
      o = (t("3db2"), t("58b8")),
      a = t.n(o),
      c = (t("a586"), t("7464")),
      s = t.n(c),
      u = (t("d4df"), t("7fc1")),
      d = t.n(u),
      l = (t("c526"), t("1599")),
      f = t.n(l),
      p = (t("560b"), t("dcdc")),
      h = t.n(p),
      g = (t("3c52"), t("0d7b")),
      m = t.n(g),
      v = (t("a7cc"), t("df33")),
      b = t.n(v),
      x = (t("9c49"), t("6640")),
      y = t.n(x),
      w = (t("d2ac"), t("95b0")),
      k = t.n(w),
      S = (t("e3ea"), t("7bc3")),
      C = t.n(S),
      R = (t("f225"), t("89a9")),
      I = t.n(R),
      O = (t("425f"), t("4105")),
      _ = t.n(O),
      P = (t("eca7"), t("3787")),
      D = t.n(P),
      A = (t("06f1"), t("6ac9")),
      N = t.n(A),
      j = (t("a673"), t("7b31")),
      T = t.n(j),
      E = (t("b8e0"), t("a4c4")),
      L = t.n(E),
      V = (t("9d4c"), t("e450")),
      B = t.n(V),
      F = (t("1f1a"), t("4e4b")),
      M = t.n(F),
      H = (t("fe07"), t("6ac5")),
      U = t.n(H),
      K = (t("b5d8"), t("f494")),
      G = t.n(K),
      W = (t("016f"), t("486c")),
      z = t.n(W),
      q = (t("6611"), t("e772")),
      J = t.n(q),
      Q = (t("0c67"), t("299c")),
      Y = t.n(Q),
      Z = (t("34db"), t("3803")),
      $ = t.n(Z),
      X = (t("5466"), t("ecdf")),
      ee = t.n(X),
      ne = (t("4ca3"), t("443e")),
      te = t.n(ne),
      re = (t("a769"), t("5cc3")),
      ie = t.n(re),
      oe = (t("e612"), t("dd87")),
      ae = t.n(oe),
      ce = (t("e960"), t("b35b")),
      se = t.n(ce),
      ue = (t("fd71"), t("a447")),
      de = t.n(ue),
      le = (t("075a"), t("72aa")),
      fe = t.n(le),
      pe = (t("38a0"), t("ad41")),
      he = t.n(pe),
      ge = (t("b5c2"), t("20cf")),
      me = t.n(ge),
      ve = (t("10cb"), t("f3ad")),
      be = t.n(ve),
      xe = (t("de31"), t("c69e")),
      ye = t.n(xe),
      we = (t("bdc7"), t("aa2f")),
      ke = t.n(we),
      Se = (t("cbb5"), t("8bbc")),
      Ce = t.n(Se),
      Re = (t("be4f"), t("896a")),
      Ie = t.n(Re),
      Oe = (t("bd49"), t("18ff")),
      _e = t.n(Oe),
      Pe = (t("960d"), t("defb")),
      De = t.n(Pe),
      Ae = (t("ce18"), t("f58e")),
      Ne = t.n(Ae),
      je = (t("cb70"), t("b370")),
      Te = t.n(je),
      Ee = (t("920a"), t("4f0c")),
      Le = t.n(Ee),
      Ve = (t("7a0f"), t("0f6c")),
      Be = t.n(Ve),
      Fe = (t("f4f9"), t("c2cc")),
      Me = t.n(Fe),
      He = (t("1951"), t("eedf")),
      Ue = t.n(He),
      Ke = (t("adec"), t("3d2d")),
      Ge = t.n(Ke),
      We = (t("915d"), t("e04d")),
      ze = t.n(We),
      qe = (t("e260"), t("e6cf"), t("cca6"), t("a79d"), t("ba4c")),
      Je = t.n(qe),
      Qe = t("9f12"),
      Ye = t("53fe"),
      Ze = t("8b83"),
      $e = t("c65a"),
      Xe = t("c03e"),
      en = t("9ab4"),
      nn = t("60a3"),
      tn = t("73ec"),
      rn = (function (e) {
        function n() {
          return (Object(Qe.a)(this, n), Object(Ze.a)(this, Object($e.a)(n).apply(this, arguments)));
        }
        return (
          Object(Xe.a)(n, e),
          Object(Ye.a)(n, [
            {
              key: "created",
              value: function () {
                var e = this;
                (Object(tn.s)("lang") && Object(tn.G)("lang"),
                  Object(tn.s)("invoker_language") && Object(tn.G)("invoker_language"),
                  this.langConfig(),
                  setInterval(function () {
                    e.langConfig();
                  }, 1e3));
              },
            },
            {
              key: "langConfig",
              value: function () {
                var e = Object(tn.s)("invoker_language") ? Object(tn.y)("invoker_language") : Object(tn.y)("language");
                if ((null == e && ((e = "auto"), Object(tn.I)("language", e)), "auto" == e)) {
                  var n = navigator.language || (Array.isArray(navigator.languages) && navigator.languages.length && navigator.languages[0]) || "zh-CN";
                  ((n = n.startsWith("zh") ? "zh-CN" : "en-US"), this.$i18n.locale != n && (this.$i18n.locale = n));
                } else this.$i18n.locale != e && (this.$i18n.locale = e);
              },
            },
          ]),
          n
        );
      })(nn.d),
      on = (rn = en.a([Object(nn.a)({ components: {} })], rn)),
      an = (t("5d46"), t("2877")),
      cn = Object(an.a)(
        on,
        function () {
          var e = this.$createElement,
            n = this._self._c || e;
          return n("div", { attrs: { id: "app" } }, [n("router-view")], 1);
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports,
      sn = t("8c4f"),
      un =
        (t("99af"),
        t("d3b7"),
        [].concat(
          [
            {
              path: "/",
              name: "home",
              permission: "",
              meta: { title: "首页" },
              component: function () {
                return t.e("manifest").then(t.bind(null, "6511"));
              },
            },
            {
              path: "/login",
              name: "login",
              permission: "",
              meta: { title: "登录" },
              component: function () {
                return t.e("manifest").then(t.bind(null, "dd7b"));
              },
            },
            {
              path: "/about",
              name: "about",
              permission: "",
              meta: { title: "关于" },
              component: function () {
                return t.e("manifest").then(t.bind(null, "754b"));
              },
            },
            {
              path: "/simulation",
              name: "simulation",
              permission: "",
              meta: { title: "实验室" },
              component: function () {
                return Promise.all([t.e("vendor"), t.e("manifest")]).then(t.bind(null, "78dd"));
              },
            },
            {
              path: "/rfidsimtion",
              name: "rfidsimtion",
              permission: "",
              meta: { title: "RFID实验室" },
              component: function () {
                return Promise.all([t.e("vendor"), t.e("manifest")]).then(t.bind(null, "91b9"));
              },
            },
          ],
          [
            {
              path: "/main",
              name: "main",
              permission: "",
              meta: { title: "个人中心" },
              icon: "&#xe68a;",
              component: function () {
                return t.e("manifest").then(t.bind(null, "7f94"));
              },
              children: [
                {
                  path: "simulation",
                  permission: "",
                  meta: { title: "实验室" },
                  name: "main_simulation",
                  component: function () {
                    return Promise.all([t.e("vendor"), t.e("manifest")]).then(t.bind(null, "78dd"));
                  },
                },
                {
                  path: "rfidsimtion",
                  permission: "",
                  meta: { title: "RFID实验室" },
                  name: "main_rfidsimtion",
                  component: function () {
                    return Promise.all([t.e("vendor"), t.e("manifest")]).then(t.bind(null, "91b9"));
                  },
                },
              ],
            },
          ],
        ));
    Je.a.use(sn.a);
    var dn = new sn.a({ mode: "history", base: "/emulator/", routes: un }),
      ln = t("0613"),
      fn = (t("7371"), t("38ef"), t("0fae"), t("7591")),
      pn = t.n(fn),
      hn = t("a925"),
      gn = t("70b0"),
      mn = (t("764b8"), t("cc57"), t("2fe1")),
      vn = t("d842"),
      bn = t.n(vn),
      xn = (t("2ba8"), t("e5d9")),
      yn = t("4eb5"),
      wn = t.n(yn),
      kn = t("9157"),
      Sn = t("482f");
    (t("3a10"),
      Je.a.use(hn.a),
      (Je.a.prototype.$layer = bn()(Je.a)),
      Je.a.use(xn.a),
      Je.a.use(pn.a),
      (Je.a.config.productionTip = !1),
      Je.a.use(ze.a),
      Je.a.use(Ge.a),
      Je.a.use(Ue.a),
      Je.a.use(Me.a),
      Je.a.use(Be.a),
      Je.a.use(Le.a),
      Je.a.use(Te.a),
      Je.a.use(Ne.a),
      Je.a.use(De.a),
      Je.a.use(_e.a),
      Je.a.use(Ie.a),
      Je.a.use(Ce.a),
      Je.a.use(ke.a),
      Je.a.use(ye.a),
      Je.a.use(be.a),
      Je.a.use(me.a),
      Je.a.use(he.a),
      Je.a.use(fe.a),
      Je.a.use(de.a),
      Je.a.use(se.a),
      Je.a.use(ae.a),
      Je.a.use(ie.a),
      Je.a.use(te.a),
      Je.a.use(ee.a),
      Je.a.use($.a),
      Je.a.use(Y.a),
      Je.a.use(J.a),
      Je.a.use(z.a),
      Je.a.use(G.a),
      Je.a.use(U.a),
      Je.a.use(M.a),
      Je.a.use(B.a),
      Je.a.use(L.a),
      Je.a.use(T.a),
      Je.a.use(N.a),
      Je.a.use(D.a),
      Je.a.use(_.a),
      Je.a.use(I.a),
      Je.a.use(C.a),
      Je.a.use(k.a),
      Je.a.use(y.a),
      Je.a.use(b.a),
      Je.a.use(m.a),
      Je.a.use(h.a),
      Je.a.use(f.a),
      Je.a.use(d.a),
      Je.a.use(s.a),
      Je.a.use(a.a),
      Je.a.use(i.a),
      (wn.a.config.autoSetContainer = !0),
      Je.a.use(wn.a),
      window.parent &&
        (window.addEventListener(
          "message",
          function (e) {
            e.origin;
            var n = e.data;
            (e.source,
              n.appid == Sn.a.app_id &&
                "SetToken" === n.method &&
                ((Sn.a.app_parent_token = n.parameter), window.parent.postMessage({ appid: Sn.a.app_id, method: n.method }, "*")));
          },
          !1,
        ),
        window.parent.postMessage({ appid: Sn.a.app_id, method: "readysetToken" }, "*")),
      kn.a.initToken().then(function (e) {
        (mn.b.registerHooks(["beforeRouteEnter", "beforeRouteLeave", "beforeRouteUpdate"]),
          dn.beforeEach(function (e, n, t) {
            (e.path.startsWith("/main") && kn.a.loginValid(), t());
          }),
          dn.afterEach(function (e, n) {}),
          (Je.a.config.devtools = !1),
          new Je.a({
            router: dn,
            store: ln.a,
            i18n: gn.a,
            render: function (e) {
              return e(cn);
            },
          }).$mount("#app"));
      }),
      Je.a.directive("debounce", {
        bind: function (e, n) {
          var t,
            r = n.value;
          (r || (r = 2e3),
            e.addEventListener(
              "click",
              function (e) {
                t
                  ? e && e.stopImmediatePropagation()
                  : (t = setTimeout(function () {
                      t = null;
                    }, r));
              },
              !0,
            ));
        },
      }));
  },
  e139: function (e, n, t) {
    (e.exports = t("24fb")(!1)).push([
      e.i,
      '.fl{float:left}.fr{float:right}.clearfix:after{content:"";display:block;height:0;clear:both;visibility:hidden}.clearfix{zoom:1}.tac{text-align:center!important}.tal{text-align:left!important}.tar{text-align:right!important}.f0{font-size:0}.f7{font-size:7px}.f8{font-size:8px}.f9{font-size:9px}.f10{font-size:10px}.f11{font-size:11px}.f12{font-size:12px}.f13{font-size:13px}.f14{font-size:14px!important}.f15{font-size:15px!important}.f16{font-size:16px!important}.f17{font-size:17px}.f18{font-size:18px}.f19{font-size:19px}.f20{font-size:20px}.f22{font-size:22px}.f24{font-size:24px}.f25{font-size:25px}.f30{font-size:30px}.f40{font-size:40px}.fw-b{font-weight:700}.line-h-1-6{line-height:1.6}.mtauto{margin:auto!important}.mt0{margin-top:0}.mb0{margin-bottom:0}.ml0{margin-left:0}.mr0{margin-right:0}.m0{margin:0}.pt0{padding-top:0}.pb0{padding-bottom:0}.pl0{padding-left:0}.pr0{padding-right:0}.p0{padding:0}.mt1{margin-top:1px}.mb1{margin-bottom:1px}.ml1{margin-left:1px}.mr1{margin-right:1px}.m1{margin:1px}.pt1{padding-top:1px}.pb1{padding-bottom:1px}.pl1{padding-left:1px}.pr1{padding-right:1px}.p1{padding:1px}.mt3{margin-top:3px}.mb3{margin-bottom:3px}.ml3{margin-left:3px}.mr3{margin-right:3px}.m3{margin:3px}.pt3{padding-top:3px}.pb3{padding-bottom:3px}.pl3{padding-left:3px}.pr3{padding-right:3px}.p3{padding:3px}.mt5{margin-top:5px}.mb5{margin-bottom:5px}.ml5{margin-left:5px}.mr5{margin-right:5px}.m5{margin:5px}.pt5{padding-top:5px}.pb5{padding-bottom:5px}.pl5{padding-left:5px}.pr5{padding-right:5px}.p5{padding:5px}.mt8{margin-top:8px}.mb8{margin-bottom:8px}.ml8{margin-left:8px}.mr8{margin-right:8px}.m8{margin:8px}.pt8{padding-top:8px}.pb8{padding-bottom:8px}.pl8{padding-left:8px}.pr8{padding-right:8px}.p8{padding:8px}.mt10{margin-top:10px}.mb10{margin-bottom:10px}.ml10{margin-left:10px}.mr10{margin-right:10px}.m10{margin:10px}.pt10{padding-top:10px}.pb10{padding-bottom:10px}.pl10{padding-left:10px}.pr10{padding-right:10px}.p10{padding:10px}.mt12{margin-top:12px}.mb12{margin-bottom:12px}.ml12{margin-left:12px}.mr12{margin-right:12px}.m12{margin:12px}.pt12{padding-top:12px}.pb12{padding-bottom:12px}.pl12{padding-left:12px}.pr12{padding-right:12px}.p12{padding:12px}.mt15{margin-top:15px}.mb15{margin-bottom:15px}.ml15{margin-left:15px}.mr15{margin-right:15px}.m15{margin:15px}.pt15{padding-top:15px}.pb15{padding-bottom:15px}.pl15{padding-left:15px}.pr15{padding-right:15px}.p15{padding:15px}.mt20{margin-top:20px}.mb20{margin-bottom:20px}.ml20{margin-left:20px}.mr20{margin-right:20px}.m20{margin:20px}.pt20{padding-top:20px}.pb20{padding-bottom:20px}.pl20{padding-left:20px}.pr20{padding-right:20px}.p20{padding:20px}.mt25{margin-top:25px}.mb25{margin-bottom:25px}.ml25{margin-left:25px}.mr25{margin-right:25px}.m25{margin:25px}.pt25{padding-top:25px}.pb25{padding-bottom:25px}.pl25{padding-left:25px}.pr25{padding-right:25px}.p25{padding:25px}.mt30{margin-top:30px}.mb30{margin-bottom:30px}.ml30{margin-left:30px}.mr30{margin-right:30px}.m30{margin:30px}.pt30{padding-top:30px}.pb30{padding-bottom:30px}.pl30{padding-left:30px}.pr30{padding-right:30px}.p30{padding:30px}.mt35{margin-top:35px}.mb35{margin-bottom:35px}.ml35{margin-left:35px}.mr35{margin-right:35px}.m35{margin:35px}.pt35{padding-top:35px}.pb35{padding-bottom:35px}.pl35{padding-left:35px}.pr35{padding-right:35px}.p35{padding:35px}.mt40{margin-top:40px}.mb40{margin-bottom:40px}.ml40{margin-left:40px}.mr40{margin-right:40px}.m40{margin:40px}.pt40{padding-top:40px}.pb40{padding-bottom:40px}.pl40{padding-left:40px}.pr40{padding-right:40px}.p40{padding:40px}.mt45{margin-top:45px}.mb45{margin-bottom:45px}.ml45{margin-left:45px}.mr45{margin-right:45px}.m45{margin:45px}.pt45{padding-top:45px}.pb45{padding-bottom:45px}.pl45{padding-left:45px}.pr45{padding-right:45px}.p45{padding:45px}.mt48{margin-top:48px}.mb48{margin-bottom:48px}.ml48{margin-left:48px}.mr48{margin-right:48px}.m48{margin:48px}.pt48{padding-top:48px}.pb48{padding-bottom:48px}.pl48{padding-left:48px}.pr48{padding-right:48px}.p48{padding:48px}.mt50{margin-top:50px}.mb50{margin-bottom:50px}.ml50{margin-left:50px}.mr50{margin-right:50px}.m50{margin:50px}.pt50{padding-top:50px}.pb50{padding-bottom:50px}.pl50{padding-left:50px}.pr50{padding-right:50px}.p50{padding:50px}.mt60{margin-top:60px}.mb60{margin-bottom:60px}.ml60{margin-left:60px}.mr60{margin-right:60px}.m60{margin:60px}.pt60{padding-top:60px}.pb60{padding-bottom:60px}.pl60{padding-left:60px}.pr60{padding-right:60px}.p60{padding:60px}.mt120{margin-top:120px}.mb120{margin-bottom:120px}.ml120{margin-left:120px}.mr120{margin-right:120px}.m120{margin:120px}.pt120{padding-top:120px}.pb120{padding-bottom:120px}.pl120{padding-left:120px}.pr120{padding-right:120px}.p120{padding:120px}.c000{color:#000!important}.c333{color:#333!important}.c555{color:#555!important}.c666{color:#666!important}.c777{color:#777!important}.c999{color:#999!important}.caaa{color:#aaa!important}.cccc{color:#ccc!important}.cfff{color:#fff!important}.cred{color:#c20207!important}.c707070{color:#707070!important}.c0c0c0{color:silver!important}.b2b2b2{color:#b2b2b2!important}.e51d1d{color:#e51d1d!important}.f6b20f{color:#f6b20f!important}.fff45c{color:#fff45c!important}.ffd9d9{color:#ffd9d9!important}.ff0000{color:red!important}.c2b84ff{color:#2b84ff!important}.c8f96a8{color:#8f96a8!important}.bc29a5fb{background-color:#29a5fb!important}.bc929eaa{background-color:#929eaa!important}.bcfff{background:#fff!important}.bg-f1f3f4{background:#f1f3f4!important}.bg-c2d6ff{background:#c2d6ff!important}.bg-ebebeb{background:#ebebeb!important}.bgca1313{background:#ca1313!important}.bg-orange{background:#f08300!important}.bg-green{background:#53bf48!important}.bg-blue{background:#3b55e6!important}.bg-gray{background:#dcdddd!important}.bg-red{background:#c20207!important}.bg-white{background:#fff!important}.bgebf3ff{background-color:#ebf3ff!important}.bg0ecb8f{background-color:#0ecb8f!important}.bgeef9f8{background-color:#eef9f8!important}.bgfff3f1{background-color:#fff3f1!important}.postion-abs-0{position:absolute;top:0;left:0}.bd-gray{border:1px solid #f3ebeb}.postion-rel-0{position:relative;top:0;left:0}.nle-col{min-height:10px}.w200{width:200px}.w100{width:100%!important}.no-select{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}',
      "",
    ]);
  },
  f591: function (e, n, t) {
    e.exports = t.p + "fonts/iconfont.aeadb32e.ttf";
  },
});
