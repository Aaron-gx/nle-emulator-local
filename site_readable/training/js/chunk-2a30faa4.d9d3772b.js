(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2a30faa4"],
  {
    "129f": function (e, t) {
      e.exports =
        Object.is ||
        function (e, t) {
          return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t;
        };
    },
    5964: function (e, t, a) {
      "use strict";
      a.r(t);
      var n,
        r = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "frame-main" },
            [
              a(
                "el-dialog",
                {
                  attrs: {
                    visible: e.showEditDialog,
                    title: "实训编辑",
                    width: "80%",
                    top: "80px",
                    "close-on-click-modal": !1,
                    "destroy-on-close": !0,
                    "append-to-body": !1,
                  },
                  on: {
                    "update:visible": function (t) {
                      e.showEditDialog = t;
                    },
                  },
                },
                [
                  a(
                    "div",
                    { staticStyle: { position: "relative" } },
                    [
                      e.showEditDialog ? a("workspace", { ref: "work", attrs: { options: e.options } }) : e._e(),
                      a("div", { staticClass: "comment", class: { s50: e.collapse } }, [
                        a(
                          "div",
                          {
                            staticClass: "btn",
                            class: { r90: e.collapse },
                            on: {
                              click: function (t) {
                                e.collapse = !e.collapse;
                              },
                            },
                          },
                          [a("i", { staticClass: "el-icon-arrow-down" })],
                        ),
                        a(
                          "div",
                          { class: { hide: e.collapse } },
                          [
                            a("p", { staticStyle: { "text-align": "center", "margin-bottom": "15px" } }, [e._v("实训编辑")]),
                            a(
                              "el-form",
                              { ref: "lessonForm", attrs: { model: e.editForm, "label-width": "70px", "label-position": "left" } },
                              [
                                a(
                                  "el-form-item",
                                  { attrs: { prop: "name", label: "文件名：" } },
                                  [
                                    a("el-input", {
                                      attrs: { maxlength: "30" },
                                      model: {
                                        value: e.editForm.name,
                                        callback: function (t) {
                                          e.$set(e.editForm, "name", t);
                                        },
                                        expression: "editForm.name",
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                                a("el-form-item", { attrs: { label: "说明：" } }, [
                                  a("textarea", {
                                    directives: [{ name: "model", rawName: "v-model", value: e.editForm.description, expression: "editForm.description" }],
                                    attrs: { rows: 6, maxlength: "200" },
                                    domProps: { value: e.editForm.description },
                                    on: {
                                      input: function (t) {
                                        t.target.composing || e.$set(e.editForm, "description", t.target.value);
                                      },
                                    },
                                  }),
                                ]),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ]),
                    ],
                    1,
                  ),
                  a(
                    "span",
                    { staticClass: "dialog-footer", attrs: { slot: "footer" }, slot: "footer" },
                    [
                      a(
                        "el-button",
                        {
                          staticClass: "cancel",
                          staticStyle: { width: "90px" },
                          attrs: { size: "normal", type: "danger-cancel" },
                          on: {
                            click: function (t) {
                              e.showEditDialog = !1;
                            },
                          },
                        },
                        [e._v(" 取 消")],
                      ),
                      a("el-button", { staticClass: "confirm", staticStyle: { width: "90px" }, attrs: { size: "primary" }, on: { click: e.saveEdit } }, [
                        e._v("保 存"),
                      ]),
                    ],
                    1,
                  ),
                ],
              ),
              a(
                "el-dialog",
                {
                  attrs: { width: "50%", title: "添加/编辑实训", top: "10vh", visible: e.showAddDialog, "close-on-click-modal": !1 },
                  on: {
                    "update:visible": function (t) {
                      e.showAddDialog = t;
                    },
                  },
                },
                [
                  a(
                    "el-form",
                    { attrs: { model: e.editForm } },
                    [
                      a(
                        "el-form-item",
                        { attrs: { label: "上传文件：", "label-width": "15%", prop: "originalName", rules: [{ required: !0, message: "文件不能为空" }] } },
                        [a("el-button", { attrs: { type: "primary", icon: "el-icon-circle-plus-outline" }, on: { click: e.add_n2v } }, [e._v("选择文件")])],
                        1,
                      ),
                      a(
                        "el-form-item",
                        { attrs: { label: "实训名称：", "label-width": "15%", prop: "name", rules: [{ required: !0, message: "文件名称不能为空" }] } },
                        [
                          a("el-input", {
                            attrs: { maxlength: "50", type: "name", autocomplete: "off" },
                            model: {
                              value: e.editForm.name,
                              callback: function (t) {
                                e.$set(e.editForm, "name", t);
                              },
                              expression: "editForm.name",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        { attrs: { label: "实训描述：", "label-width": "15%" } },
                        [
                          a("el-input", {
                            attrs: { maxlength: "200", type: "textarea", rows: 3 },
                            model: {
                              value: e.editForm.description,
                              callback: function (t) {
                                e.$set(e.editForm, "description", t);
                              },
                              expression: "editForm.description",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  a(
                    "div",
                    { staticClass: "dialog-footer", attrs: { slot: "footer" }, slot: "footer" },
                    [
                      a(
                        "el-button",
                        {
                          on: {
                            click: function (t) {
                              e.showAddDialog = !1;
                            },
                          },
                        },
                        [e._v("取 消")],
                      ),
                      a("el-button", { attrs: { type: "primary" }, on: { click: e.saveAddFile } }, [e._v("确 定")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a("div", { staticClass: "row-tool pl20 pr20 pt20" }, [
                a(
                  "div",
                  [
                    a("el-button", { attrs: { type: "primary", plain: "", icon: "el-icon-circle-plus-outline" }, on: { click: e.btn_add_emulator } }, [
                      e._v("新增实训"),
                    ]),
                  ],
                  1,
                ),
                a(
                  "div",
                  [
                    a(
                      "el-input",
                      {
                        staticClass: "ml5",
                        staticStyle: { width: "260px" },
                        attrs: { maxlength: "20", size: "large", placeholder: "请输入关键字进行搜索" },
                        model: {
                          value: e.filter.key,
                          callback: function (t) {
                            e.$set(e.filter, "key", t);
                          },
                          expression: "filter.key",
                        },
                      },
                      [a("el-button", { attrs: { slot: "append", icon: "el-icon-search", type: "success" }, on: { click: e.search }, slot: "append" })],
                      1,
                    ),
                    a("el-button", {
                      staticClass: "ml5",
                      staticStyle: { color: "#999" },
                      attrs: { icon: "el-icon-refresh", type: "text", title: "重置搜索条件" },
                      on: { click: e.reset },
                    }),
                  ],
                  1,
                ),
              ]),
              a("el-row", { staticClass: "main-body" }, [
                a(
                  "div",
                  { staticClass: "mt20 p20 fix-table" },
                  [
                    a(
                      "el-table",
                      {
                        directives: [{ name: "loading", rawName: "v-loading", value: e.load, expression: "load" }],
                        ref: "templateTable",
                        attrs: { data: e.dataList, height: "100%", border: "", stripe: "", "header-row-class-name": "tb-header" },
                      },
                      [
                        a("el-table-column", { attrs: { type: "index", width: "50", index: e.indexMethod } }),
                        a("el-table-column", { attrs: { prop: "number", label: "编号", width: "180" } }),
                        a("el-table-column", { attrs: { prop: "name", label: "文件名" } }),
                        a("el-table-column", { attrs: { prop: "description", label: "描述" } }),
                        a("el-table-column", {
                          attrs: { prop: "modifyTime", label: "修改时间", width: "160" },
                          scopedSlots: e._u([
                            {
                              key: "default",
                              fn: function (t) {
                                return [e._v(" " + e._s(e._f("dateFormat")(t.row.modifyTime)) + " ")];
                              },
                            },
                          ]),
                        }),
                        a("el-table-column", {
                          attrs: { prop: "size", label: "大小", width: "140" },
                          scopedSlots: e._u([
                            {
                              key: "default",
                              fn: function (t) {
                                return [e._v(" " + e._s(e._f("sizeConvert")(t.row.size)) + " ")];
                              },
                            },
                          ]),
                        }),
                        a("el-table-column", {
                          attrs: { label: "操作", width: "330" },
                          scopedSlots: e._u([
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  a(
                                    "el-button",
                                    {
                                      attrs: { type: "primary", plain: "", icon: "el-icon-download" },
                                      on: {
                                        click: function (a) {
                                          return e.download(t.$index, t.row);
                                        },
                                      },
                                    },
                                    [e._v(" 下载")],
                                  ),
                                  a(
                                    "el-button",
                                    {
                                      attrs: { type: "primary", plain: "", icon: "el-icon-edit" },
                                      on: {
                                        click: function (a) {
                                          return e.editData(t.row);
                                        },
                                      },
                                    },
                                    [e._v(" 编辑")],
                                  ),
                                  a(
                                    "el-button",
                                    {
                                      attrs: { type: "danger", plain: "", icon: "el-icon-delete" },
                                      on: {
                                        click: function (a) {
                                          return e.deleteFile(t.$index, t.row);
                                        },
                                      },
                                    },
                                    [e._v(" 删除")],
                                  ),
                                ];
                              },
                            },
                          ]),
                        }),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ]),
              a("el-pagination", {
                staticClass: "ml20 mb20",
                attrs: { "page-size": e.pageSize, background: "", layout: "prev, pager, next", total: e.itemsCount, "current-page": e.currentPage },
                on: { "current-change": e.pageTurn },
              }),
            ],
            1,
          );
        },
        i = [],
        o = (a("99af"), a("4de4"), a("0d03"), a("b0c0"), a("d3b7"), a("ac1f"), a("25f0"), a("3ca3"), a("841c"), a("ddb0"), a("2b3d"), a("96cf"), a("89ba")),
        s = a("9f12"),
        c = a("53fe"),
        l = a("8b83"),
        d = a("c65a"),
        u = a("9aa6"),
        p = a("c03e"),
        m = a("2fa7"),
        f = a("9ab4"),
        h = a("60a3"),
        b = a("535f"),
        v = a("73ec"),
        w = a("98ee"),
        g = function e() {
          (Object(s["a"])(this, e),
            Object(m["a"])(this, "id", void 0),
            Object(m["a"])(this, "targetId", void 0),
            Object(m["a"])(this, "number", void 0),
            Object(m["a"])(this, "userId", void 0),
            Object(m["a"])(this, "name", void 0),
            Object(m["a"])(this, "size", void 0),
            Object(m["a"])(this, "description", void 0),
            Object(m["a"])(this, "type", void 0),
            Object(m["a"])(this, "extension", void 0),
            Object(m["a"])(this, "content", void 0),
            Object(m["a"])(this, "modifyTime", void 0));
        },
        x = a("c33c"),
        y =
          ((n = (function (e) {
            function t() {
              var e, a;
              Object(s["a"])(this, t);
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
              return (
                (a = Object(l["a"])(this, (e = Object(d["a"])(t)).call.apply(e, [this].concat(r)))),
                Object(m["a"])(Object(u["a"])(a), "editIndex", -1),
                Object(m["a"])(Object(u["a"])(a), "currentPage", 1),
                Object(m["a"])(Object(u["a"])(a), "pageSize", 10),
                Object(m["a"])(Object(u["a"])(a), "itemsCount", 0),
                Object(m["a"])(Object(u["a"])(a), "load", !1),
                Object(m["a"])(Object(u["a"])(a), "editForm", { id: "", name: "", description: "" }),
                Object(m["a"])(Object(u["a"])(a), "showEditDialog", !1),
                Object(m["a"])(Object(u["a"])(a), "showAddDialog", !1),
                Object(m["a"])(Object(u["a"])(a), "attrWindowId", ""),
                Object(m["a"])(Object(u["a"])(a), "dataList", []),
                Object(m["a"])(Object(u["a"])(a), "collapse", !1),
                Object(m["a"])(Object(u["a"])(a), "comment", !1),
                Object(m["a"])(Object(u["a"])(a), "options", {
                  IsShowHandleTool: !1,
                  IsShowSwitchTip: !1,
                  IsShowDeviceTool: !0,
                  IsShowTab: !1,
                  DefaultXml: "",
                  Remark: "",
                  IsVerifyDesktopHelp: !0,
                }),
                Object(m["a"])(Object(u["a"])(a), "filter", { key: "" }),
                a
              );
            }
            return (
              Object(p["a"])(t, e),
              Object(c["a"])(t, [
                {
                  key: "fakeClick",
                  value: function (e) {
                    var t = document.createEvent("MouseEvents");
                    (t.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(t));
                  },
                },
                {
                  key: "exportRaw",
                  value: function (e, t) {
                    var a = window,
                      n = a.URL || a.webkitURL || a,
                      r = new Blob([new nleEmulatorTools().Base64ToUint8Array(t)]),
                      i = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                    ((i.href = n.createObjectURL(r)), (i.download = e), this.fakeClick(i));
                  },
                },
                { key: "dialogOpend", value: function () {} },
                {
                  key: "deleteFile",
                  value: function (e, t) {
                    var a = this;
                    this.$confirm("是否确定删除实训文件？")
                      .then(
                        (function () {
                          var e = Object(o["a"])(
                            regeneratorRuntime.mark(function e(n) {
                              return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      w["a"].deleteFileContent(t.id).then(function (e) {
                                        e && 0 == e.code && a.search();
                                      });
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      )
                      .catch(function (e) {});
                  },
                },
                {
                  key: "download",
                  value: (function () {
                    var e = Object(o["a"])(
                      regeneratorRuntime.mark(function e(t, a) {
                        var n;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (a.content) {
                                    e.next = 5;
                                    break;
                                  }
                                  return ((e.next = 3), w["a"].getFileContent(a.id));
                                case 3:
                                  ((n = e.sent), n && 0 == n.code && (a.content = n.data.content));
                                case 5:
                                  if (a.content) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (this.msg("仿真包为空！", "error"), e.abrupt("return"));
                                case 8:
                                  this.exportRaw(a.name, a.content);
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    function t(t, a) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "selectFile",
                  value: function (e) {
                    console.log(e);
                  },
                },
                {
                  key: "saveEdit",
                  value: function () {
                    var e = this;
                    ((this.load = !0),
                      this.$refs["work"].GetXml().then(function (t) {
                        ((e.editForm.content = t),
                          (e.editForm.extension = "N2V"),
                          (e.editForm.userId = e.userId),
                          w["a"]
                            .addOrUpdateFileContent(e.editForm)
                            .then(function (t) {
                              (t && 0 == t.code && t.data.length > 0 && (e.msg("更新成功", "success"), e.getEmulatorFilesList()), (e.load = !1));
                            })
                            .catch(function (t) {
                              return (e.load = !1);
                            }),
                          (e.showEditDialog = !1));
                      }));
                  },
                },
                {
                  key: "editData",
                  value: (function () {
                    var e = Object(o["a"])(
                      regeneratorRuntime.mark(function e(t) {
                        var a,
                          n = this;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((this.editForm = t), (this.showEditDialog = !0), (this.collapse = !0), t.content || !t.id)) {
                                    e.next = 13;
                                    break;
                                  }
                                  return ((e.next = 6), w["a"].getFileContent(t.id));
                                case 6:
                                  if (((a = e.sent), !a || 0 != a.code)) {
                                    e.next = 11;
                                    break;
                                  }
                                  ((t.content = a.data.content), (e.next = 13));
                                  break;
                                case 11:
                                  return (this.msg("仿真包打开失败！", "error"), e.abrupt("return"));
                                case 13:
                                  (this,
                                    (this.options.DefaultXml = t.content),
                                    this.$nextTick(function () {
                                      n.$refs["work"].Init();
                                    }));
                                case 16:
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
                  key: "btn_add_emulator",
                  value: function () {
                    ((this.editForm = { id: "", name: "", description: "" }), (this.showAddDialog = !0));
                  },
                },
                {
                  key: "saveAddFile",
                  value: function () {
                    var e = this;
                    ((this.editForm.number = "F" + Object(v["f"])("yy-MMddhhmmssS", new Date())),
                      w["a"]
                        .addOrUpdateFileContent(this.editForm)
                        .then(function (t) {
                          (t &&
                            0 == t.code &&
                            t.data.length > 0 &&
                            (e.msg("添加成功", "success"), e.getEmulatorFilesList(), (e.editForm = { id: "", name: "", description: "" })),
                            (e.load = !1));
                        })
                        .catch(function (t) {
                          return (e.load = !1);
                        }),
                      (this.showAddDialog = !1));
                  },
                },
                {
                  key: "add_n2v",
                  value: function () {
                    var e = this;
                    Object(v["c"])(".N2V", !1, function (t) {
                      var a = new FileReader();
                      (a.readAsArrayBuffer(t[0]),
                        (a.onload = function (a) {
                          var n = a,
                            r = new g();
                          ((r.name = t[0].name),
                            (r.userId = e.userId),
                            (r.size = t[0].size.toString()),
                            (r.content = new nleEmulatorTools().ArrayBufferToBase64(n.target.result)),
                            (r.extension = "N2V"),
                            (e.editForm = r));
                        }));
                    });
                  },
                },
                {
                  key: "pageTurn",
                  value: (function () {
                    var e = Object(o["a"])(
                      regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  ((this.currentPage = t), this.getEmulatorFilesList());
                                case 2:
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
                  key: "indexMethod",
                  value: function (e) {
                    return e + 1 + (this.currentPage - 1) * this.pageSize;
                  },
                },
                {
                  key: "search",
                  value: function () {
                    ((this.currentPage = 1), this.getEmulatorFilesList());
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    ((this.currentPage = 1), (this.filter = { key: "" }), this.getEmulatorFilesList());
                  },
                },
                {
                  key: "getEmulatorFilesList",
                  value: (function () {
                    var e = Object(o["a"])(
                      regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.load = !0),
                                    (e.next = 3),
                                    w["a"].getN2vFilesPage(this.userId, this.currentPage, this.pageSize, this.filter.key)
                                  );
                                case 3:
                                  ((t = e.sent), (this.dataList = t.list), (this.itemsCount = t.page.records), (this.load = !1));
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
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "created",
                  value: (function () {
                    var e = Object(o["a"])(
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.getEmulatorFilesList();
                                case 1:
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
                  key: "userId",
                  get: function () {
                    return this.$store.getters["user/userId"];
                  },
                },
              ]),
              t
            );
          })(b["a"])),
          n);
      y = Object(f["a"])(
        [
          Object(h["a"])({
            components: { workspace: x["default"] },
            filters: {
              dateFormat: function (e) {
                return Object(v["f"])("yyyy/MM/dd hh:mm", new Date(e));
              },
              durationFormat: function (e) {
                return Object(v["g"])(e);
              },
              sizeConvert: function (e) {
                return Object(v["s"])(e);
              },
            },
          }),
        ],
        y,
      );
      var k = y,
        O = k,
        j = (a("76e7"), a("2877")),
        F = Object(j["a"])(O, r, i, !1, null, "e0829dda", null);
      t["default"] = F.exports;
    },
    "76e7": function (e, t, a) {
      "use strict";
      var n = a("f034"),
        r = a.n(n);
      r.a;
    },
    "841c": function (e, t, a) {
      "use strict";
      var n = a("d784"),
        r = a("825a"),
        i = a("1d80"),
        o = a("129f"),
        s = a("14c3");
      n("search", 1, function (e, t, a) {
        return [
          function (t) {
            var a = i(this),
              n = void 0 == t ? void 0 : t[e];
            return void 0 !== n ? n.call(t, a) : new RegExp(t)[e](String(a));
          },
          function (e) {
            var n = a(t, e, this);
            if (n.done) return n.value;
            var i = r(e),
              c = String(this),
              l = i.lastIndex;
            o(l, 0) || (i.lastIndex = 0);
            var d = s(i, c);
            return (o(i.lastIndex, l) || (i.lastIndex = l), null === d ? -1 : d.index);
          },
        ];
      });
    },
    "98ee": function (e, t, a) {
      "use strict";
      (a("99af"), a("96cf"));
      var n = a("89ba"),
        r = a("9f12"),
        i = a("53fe"),
        o = a("482f"),
        s = a("a0f7"),
        c = a("59b9"),
        l = (function () {
          function e() {
            Object(r["a"])(this, e);
          }
          return (
            Object(i["a"])(e, [
              {
                key: "GetUrlByName",
                value: function (e) {
                  return e ? o["a"].web_host + "/api/FileManager/Download/".concat(e) : "";
                },
              },
              {
                key: "getFileContent",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(c["a"])({ url: "".concat(o["a"].web_host, "/api/FileContent/GetFileContentById/").concat(t), method: "GET" })
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
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getFileAddress",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(c["a"])({ url: "".concat(o["a"].web_host, "/api/FileAddress/GetFileAddressById/").concat(t), method: "GET" })
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
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "addOrUpdateFileContent",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(c["a"])({ url: "".concat(o["a"].web_host, "/api/FileContent/AddOrUpdateFileContent"), method: "POST", data: t })
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
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "addOrUpdateFileAddress",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(c["a"])({ url: "".concat(o["a"].web_host, "/api/FileAddress/AddOrUpdateFileAddress"), method: "POST", data: t })
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
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "copyFileAddress",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                console.log(t),
                                (e.next = 3),
                                Object(c["a"])({ url: "".concat(o["a"].web_host, "/api/FileManager/CopyFiles"), method: "POST", data: t })
                              );
                            case 3:
                              return ((a = e.sent), e.abrupt("return", a));
                            case 5:
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
                key: "deleteFile",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (t) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.next = 4),
                                Object(c["a"])({ url: "".concat(o["a"].web_host, "/api/FileManager/DeleteFile"), method: "GET", params: { uniqueName: t } })
                              );
                            case 4:
                              return ((a = e.sent), e.abrupt("return", a));
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
                key: "updateFileContentDes",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t, a, n) {
                      var r;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(c["a"])({
                                  url: "".concat(o["a"].web_host, "/api/FileContent/UpdateFileContentDescript"),
                                  method: "POST",
                                  data: { id: t, name: a, des: n },
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
                  function t(t, a, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "deleteFileContent",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (t) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.next = 4),
                                Object(c["a"])({ url: "".concat(o["a"].web_host, "/api/FileContent/DeleteFileContent/").concat(t), method: "GET" })
                              );
                            case 4:
                              return ((a = e.sent), e.abrupt("return", a));
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
                key: "deleteFileAddress",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (t) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.next = 4),
                                Object(c["a"])({ url: "".concat(o["a"].web_host, "/api/FileAddress/DeleteFileAddress/").concat(t), method: "GET" })
                              );
                            case 4:
                              return ((a = e.sent), e.abrupt("return", a));
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
                key: "getN2vFilesPage",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t, a, n) {
                      var r,
                        i,
                        l,
                        d,
                        u = arguments;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = u.length > 3 && void 0 !== u[3] ? u[3] : ""),
                                (e.next = 3),
                                Object(c["a"])({
                                  url: "".concat(o["a"].web_host, "/api/FileContent/SearchN2vFilesPage"),
                                  method: "GET",
                                  params: { userId: t, index: a, size: n, key: r },
                                })
                              );
                            case 3:
                              return (
                                (i = e.sent),
                                (l = new s["b"]()),
                                (d = new s["a"]()),
                                i &&
                                  0 == i.code &&
                                  ((l.page = i.data.page),
                                  (l.pagesize = i.data.pagesize),
                                  (l.records = i.data.records),
                                  (l.total = i.data.total),
                                  (d.list = i.data.rows)),
                                (d.page = l),
                                e.abrupt("return", d)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, a, n) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getFileAddressPage",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t, a, n) {
                      var r,
                        i,
                        l,
                        d,
                        u,
                        p,
                        m = arguments;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = m.length > 3 && void 0 !== m[3] && m[3]),
                                (i = m.length > 4 && void 0 !== m[4] ? m[4] : ""),
                                (l = m.length > 5 && void 0 !== m[5] ? m[5] : ""),
                                (e.next = 5),
                                Object(c["a"])({
                                  url: "".concat(o["a"].web_host, "/api/FileAddress/SearchFileAddressPage"),
                                  method: "GET",
                                  params: { userId: t, index: a, size: n, isDocument: r, ext: i, key: l },
                                })
                              );
                            case 5:
                              return (
                                (d = e.sent),
                                (u = new s["b"]()),
                                (p = new s["a"]()),
                                d &&
                                  0 == d.code &&
                                  ((u.page = d.data.page),
                                  (u.pagesize = d.data.pagesize),
                                  (u.records = d.data.records),
                                  (u.total = d.data.total),
                                  (p.list = d.data.rows)),
                                (p.page = u),
                                e.abrupt("return", p)
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, a, n) {
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
    b4cb: function (e, t, a) {
      ((t = e.exports = a("24fb")(!1)),
        t.push([
          e.i,
          ".frame-main[data-v-e0829dda]{height:calc(100vh - 60px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:auto;min-width:1200px}.fix-table[data-v-e0829dda]{width:100%;height:calc(100vh - 200px);overflow-y:auto}.main-body[data-v-e0829dda]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.row-tool[data-v-e0829dda]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.template-foot[data-v-e0829dda]{text-align:center}.search-input[data-v-e0829dda]{width:260px;display:inline-block;margin-left:0;margin-right:6px}[data-v-e0829dda] .el-checkbox__inner{z-index:0}[data-v-e0829dda] .el-dialog__footer{text-align:center}[data-v-e0829dda] .el-dialog__header{padding:15px;border-bottom:1px solid #f2f2f2;vertical-align:middle}[data-v-e0829dda] .el-dialog__header /deep/ .el-dialog__headerbtn{top:16px}.foot-button[data-v-e0829dda]{width:160px;margin:0 20px}[data-v-e0829dda] .el-dialog__body{padding-bottom:0}.danger[data-v-e0829dda]{color:#f56c6c}.filter-label[data-v-e0829dda]{display:inline-block;margin-left:12px;margin-right:5px}[data-v-e0829dda] .el-table__row td:first-child .cell,[data-v-e0829dda] .tb-header th:first-child .cell{text-align:center;padding:0}.comment[data-v-e0829dda]{-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1);background-color:#fff;z-index:9999;width:400px;height:270px;border-radius:5px;padding:10px;overflow:hidden;-webkit-transition:width .6s ease-out,height .6s ease-out;transition:width .6s ease-out,height .6s ease-out}.comment[data-v-e0829dda],.comment .btn[data-v-e0829dda]{position:absolute;top:10px;right:10px}.comment .btn[data-v-e0829dda]{border:1px solid #999;width:22px;height:22px;border-radius:20px;text-align:center;padding-top:1px;cursor:pointer;-webkit-transition:-webkit-transform .2s linear;transition:-webkit-transform .2s linear;transition:transform .2s linear;transition:transform .2s linear,-webkit-transform .2s linear}.comment textarea[data-v-e0829dda]{resize:none;padding:8px;margin:10px 0;width:100%;border:1px solid #dcdfe6;border-radius:5px;outline:none}.comment textarea[data-v-e0829dda]:focus{border-color:#409eff}.s50[data-v-e0829dda]{width:43px;height:43px}.r90[data-v-e0829dda]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.hide[data-v-e0829dda]{display:none}.emulator[data-v-e0829dda]{height:calc(100vh - 300px)}",
          "",
        ]));
    },
    f034: function (e, t, a) {
      var n = a("b4cb");
      ("string" === typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals));
      var r = a("499e").default;
      r("5f25ca67", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
