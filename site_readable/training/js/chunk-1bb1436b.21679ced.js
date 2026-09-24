(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-1bb1436b"],
  {
    1734: function (e, t, a) {
      var i = a("9709");
      ("string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals));
      var n = a("499e").default;
      n("b262b3f0", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1b4e": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var i = a("9f12"),
        n = a("2fa7"),
        o = a("52cf"),
        r = function e() {
          (Object(i["a"])(this, e),
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
            (this.state = new o["a"]()));
        };
    },
    "2ff2": function (e, t, a) {
      "use strict";
      var i,
        n,
        o = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            [
              a(
                "el-form",
                { staticClass: "section-form", attrs: { "label-width": "100px" } },
                [
                  a(
                    "el-form-item",
                    { attrs: { label: "选择语言：" } },
                    [
                      a(
                        "el-select",
                        {
                          staticStyle: { width: "245px" },
                          attrs: { disabled: e.disabled, placeholder: "请选择语言" },
                          on: { change: e.onLangChange },
                          model: {
                            value: e.cmOptions.mode,
                            callback: function (t) {
                              e.$set(e.cmOptions, "mode", t);
                            },
                            expression: "cmOptions.mode",
                          },
                        },
                        e._l(e.modeOptions, function (e) {
                          return a("el-option", { key: e.value, attrs: { label: e.label, value: e.value } });
                        }),
                        1,
                      ),
                    ],
                    1,
                  ),
                  a(
                    "el-form-item",
                    { attrs: { label: "编码题目：" } },
                    [
                      e.disabled
                        ? e._e()
                        : a(
                            "el-upload",
                            {
                              ref: "codeupload",
                              attrs: {
                                action: e.config.web_host + "/api/FileManager/Upload",
                                "on-change": e.handleCodechange,
                                "on-exceed": e.handleCodeExceed,
                                "on-preview": e.handleCodePreview,
                                "before-upload": e.handlebeforeupload,
                                "on-remove": e.handleCodeRemove,
                                accept: e.accept,
                                "auto-upload": !1,
                                multiple: "",
                              },
                            },
                            [
                              a("el-button", { attrs: { slot: "trigger", type: "primary" }, slot: "trigger" }, [e._v("选取题目文件")]),
                              a(
                                "div",
                                { staticStyle: { "margin-top": "8px", "margin-right": "8px" }, attrs: { slot: "tip" }, slot: "tip" },
                                [
                                  a("el-alert", { attrs: { type: "info", closable: !1 } }, [
                                    a(
                                      "p",
                                      [
                                        e._v(" * 请添加小于500Kb的"),
                                        a("strong", { staticStyle: { color: "green" } }, [e._v('"代码片段"')]),
                                        e._v("文件作为"),
                                        a("strong", [e._v('"题目"')]),
                                        e._v(" "),
                                        a("br"),
                                        e._v(" * 编码类型 "),
                                        a(
                                          "el-popover",
                                          {
                                            attrs: {
                                              width: "280",
                                              placement: "top-start",
                                              trigger: "hover",
                                              content: "提示：上传文件后请先预览，如果预览时出现中文乱码，请尝试切换下面的编码后重新上传文件",
                                            },
                                          },
                                          [a("i", { staticClass: "el-icon-question", attrs: { slot: "reference" }, slot: "reference" })],
                                        ),
                                        a(
                                          "span",
                                          { staticStyle: { "margin-top": "10px", "margin-left": "0px" } },
                                          [
                                            a(
                                              "el-radio",
                                              {
                                                attrs: { size: "mini", label: "gb2312" },
                                                model: {
                                                  value: e.encode,
                                                  callback: function (t) {
                                                    e.encode = t;
                                                  },
                                                  expression: "encode",
                                                },
                                              },
                                              [e._v("GB2312")],
                                            ),
                                            a(
                                              "el-radio",
                                              {
                                                attrs: { size: "mini", label: "utf-8" },
                                                model: {
                                                  value: e.encode,
                                                  callback: function (t) {
                                                    e.encode = t;
                                                  },
                                                  expression: "encode",
                                                },
                                              },
                                              [e._v("UTF-8")],
                                            ),
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
                            ],
                            1,
                          ),
                      a(
                        "ul",
                        { staticClass: "el-upload-list el-upload-list--text" },
                        e._l(
                          e.uploadedcodeFiles.filter(function (e) {
                            return 0 === e.type;
                          }),
                          function (t) {
                            return a(
                              "li",
                              {
                                key: t.uid,
                                staticClass: "el-upload-list__item is-success el-list-enter-to",
                                on: {
                                  click: function (a) {
                                    return e.displaycodeAfterRead(t.uid);
                                  },
                                },
                              },
                              [
                                a(
                                  "a",
                                  { staticClass: "el-upload-list__item-name", staticStyle: { display: "inline" }, attrs: { href: "javascript:void(0)" } },
                                  [a("i", { staticClass: "el-icon-document" }), e._v(e._s(t.name) + " ")],
                                ),
                                a("i", {
                                  staticClass: "el-icon-download",
                                  staticStyle: { position: "absolute", top: "5px", right: "40px", cursor: "pointer" },
                                  on: {
                                    click: function (a) {
                                      return (a.stopPropagation(), a.preventDefault(), e.downloadcodeFile(t));
                                    },
                                  },
                                }),
                                e.disabled
                                  ? e._e()
                                  : a(
                                      "span",
                                      {
                                        on: {
                                          click: function (e) {
                                            (e.stopPropagation(), e.preventDefault());
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "el-popconfirm",
                                          {
                                            attrs: { placement: "right", title: "确定删除吗？" },
                                            on: {
                                              confirm: function (a) {
                                                return e.delUploadedcodeFiles(t.uid);
                                              },
                                            },
                                          },
                                          [
                                            a("i", {
                                              staticClass: "el-icon-close",
                                              staticStyle: { position: "absolute", top: "5px", right: "15px", display: "inline-block" },
                                              attrs: { slot: "reference" },
                                              slot: "reference",
                                            }),
                                          ],
                                        ),
                                      ],
                                      1,
                                    ),
                              ],
                            );
                          },
                        ),
                        0,
                      ),
                    ],
                    1,
                  ),
                  a(
                    "el-form-item",
                    { attrs: { label: "编码答案：" } },
                    [
                      e.disabled
                        ? e._e()
                        : a(
                            "el-upload",
                            {
                              ref: "codeupload2",
                              attrs: {
                                action: e.config.web_host + "/api/FileManager/Upload",
                                "on-change": e.handleCode2change,
                                "on-exceed": e.handleCode2Exceed,
                                "on-preview": e.handleCode2Preview,
                                "before-upload": e.handlebeforeupload,
                                "on-remove": e.handleCode2Remove,
                                accept: e.accept,
                                "auto-upload": !1,
                                multiple: "",
                              },
                            },
                            [
                              a("el-button", { attrs: { slot: "trigger", type: "primary" }, slot: "trigger" }, [e._v("选取答案文件")]),
                              a(
                                "div",
                                { staticStyle: { "margin-top": "8px", "margin-right": "8px" }, attrs: { slot: "tip" }, slot: "tip" },
                                [
                                  a("el-alert", { attrs: { type: "info", closable: !1 } }, [
                                    a(
                                      "p",
                                      [
                                        e._v(" * 请添加小于500Kb的"),
                                        a("strong", { staticStyle: { color: "green" } }, [e._v('"完整代码"')]),
                                        e._v("文件作为"),
                                        a("strong", [e._v('"答案"')]),
                                        e._v(" "),
                                        a("br"),
                                        e._v(" * 编码类型 "),
                                        a(
                                          "el-popover",
                                          {
                                            attrs: {
                                              width: "280",
                                              placement: "top-start",
                                              trigger: "hover",
                                              content: "提示：上传文件后请先预览，如果预览时出现中文乱码，请尝试切换下面的编码后重新上传文件",
                                            },
                                          },
                                          [a("i", { staticClass: "el-icon-question", attrs: { slot: "reference" }, slot: "reference" })],
                                        ),
                                        a(
                                          "span",
                                          { staticStyle: { "margin-top": "10px", "margin-left": "0px" } },
                                          [
                                            a(
                                              "el-radio",
                                              {
                                                attrs: { size: "mini", label: "gb2312" },
                                                model: {
                                                  value: e.encode,
                                                  callback: function (t) {
                                                    e.encode = t;
                                                  },
                                                  expression: "encode",
                                                },
                                              },
                                              [e._v("GB2312")],
                                            ),
                                            a(
                                              "el-radio",
                                              {
                                                attrs: { size: "mini", label: "utf-8" },
                                                model: {
                                                  value: e.encode,
                                                  callback: function (t) {
                                                    e.encode = t;
                                                  },
                                                  expression: "encode",
                                                },
                                              },
                                              [e._v("UTF-8")],
                                            ),
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
                            ],
                            1,
                          ),
                      a(
                        "ul",
                        { staticClass: "el-upload-list el-upload-list--text" },
                        e._l(
                          e.uploadedcodeFiles.filter(function (e) {
                            return 1 === e.type;
                          }),
                          function (t) {
                            return a(
                              "li",
                              {
                                key: t.uid,
                                staticClass: "el-upload-list__item is-success el-list-enter-to",
                                on: {
                                  click: function (a) {
                                    return e.displaycodeAfterRead(t.uid);
                                  },
                                },
                              },
                              [
                                a(
                                  "a",
                                  { staticClass: "el-upload-list__item-name", staticStyle: { display: "inline" }, attrs: { href: "javascript:void(0)" } },
                                  [a("i", { staticClass: "el-icon-document" }), e._v(e._s(t.name) + " ")],
                                ),
                                a("i", {
                                  staticClass: "el-icon-download",
                                  staticStyle: { position: "absolute", top: "5px", right: "40px", cursor: "pointer" },
                                  on: {
                                    click: function (a) {
                                      return (a.stopPropagation(), a.preventDefault(), e.downloadcodeFile(t));
                                    },
                                  },
                                }),
                                e.disabled
                                  ? e._e()
                                  : a(
                                      "span",
                                      {
                                        on: {
                                          click: function (e) {
                                            (e.stopPropagation(), e.preventDefault());
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "el-popconfirm",
                                          {
                                            attrs: { placement: "right", title: "确定删除吗？" },
                                            on: {
                                              confirm: function (a) {
                                                return e.delUploadedcodeFiles(t.uid);
                                              },
                                            },
                                          },
                                          [
                                            a("i", {
                                              staticClass: "el-icon-close",
                                              staticStyle: { position: "absolute", top: "5px", right: "15px", display: "inline-block" },
                                              attrs: { slot: "reference" },
                                              slot: "reference",
                                            }),
                                          ],
                                        ),
                                      ],
                                      1,
                                    ),
                              ],
                            );
                          },
                        ),
                        0,
                      ),
                    ],
                    1,
                  ),
                  a(
                    "el-form-item",
                    { attrs: { label: "编码依赖：" } },
                    [
                      e.disabled
                        ? e._e()
                        : a(
                            "el-upload",
                            {
                              ref: "libupload",
                              attrs: {
                                action: e.config.compile_host + "/api/Dependence",
                                "on-change": e.handleRefLibchange,
                                accept: e.deAccept,
                                "on-preview": e.handleRefLibPreview,
                                "before-upload": e.handlebeforeupload2,
                                "on-remove": e.handleRefLibRemove,
                                "auto-upload": !0,
                                multiple: "",
                              },
                            },
                            [
                              a("el-button", { attrs: { slot: "trigger", type: "primary" }, slot: "trigger" }, [e._v("选取依赖文件")]),
                              a(
                                "div",
                                { staticStyle: { "margin-top": "8px", "margin-right": "8px" }, attrs: { slot: "tip" }, slot: "tip" },
                                [a("el-alert", { attrs: { type: "info", closable: !1 } }, [a("p", [e._v("* 请添加小于1M的文件")])])],
                                1,
                              ),
                            ],
                            1,
                          ),
                      a(
                        "ul",
                        { staticClass: "el-upload-list el-upload-list--text" },
                        e._l(e.uploadedlibFiles, function (t) {
                          return a("li", { key: t.id, staticClass: "el-upload-list__item is-success el-list-enter-to" }, [
                            a("a", { staticClass: "el-upload-list__item-name", staticStyle: { display: "inline" }, attrs: { href: "javascript:void(0)" } }, [
                              a("i", { staticClass: "el-icon-document" }),
                              e._v(e._s(t.name) + " "),
                            ]),
                            a("i", {
                              staticClass: "el-icon-download",
                              staticStyle: { position: "absolute", top: "5px", right: "40px", cursor: "pointer" },
                              on: {
                                click: function (a) {
                                  return (a.stopPropagation(), a.preventDefault(), e.downloadLibFile(t));
                                },
                              },
                            }),
                            e.disabled
                              ? e._e()
                              : a(
                                  "span",
                                  {
                                    on: {
                                      click: function (e) {
                                        (e.stopPropagation(), e.preventDefault());
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "el-popconfirm",
                                      {
                                        attrs: { placement: "right", title: "确定删除吗？" },
                                        on: {
                                          confirm: function (a) {
                                            return e.delUploadedlibFiles(t.id);
                                          },
                                        },
                                      },
                                      [
                                        a("i", {
                                          staticClass: "el-icon-close",
                                          staticStyle: { position: "absolute", top: "5px", right: "15px", display: "inline-block" },
                                          attrs: { slot: "reference" },
                                          slot: "reference",
                                        }),
                                      ],
                                    ),
                                  ],
                                  1,
                                ),
                          ]);
                        }),
                        0,
                      ),
                    ],
                    1,
                  ),
                  a(
                    "el-form-item",
                    { attrs: { label: "编码说明：" } },
                    [
                      a("quill-editor", {
                        ref: "myQuillEditor",
                        staticClass: "editor",
                        attrs: { options: e.editorOption, disabled: e.disabled },
                        on: {
                          change: function (t) {
                            e.dataChanged = !0;
                          },
                        },
                        model: {
                          value: e.codeHint,
                          callback: function (t) {
                            e.codeHint = t;
                          },
                          expression: "codeHint",
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "el-dialog",
                {
                  attrs: {
                    title: e.codefile ? e.codefile.name : "",
                    top: "10vh",
                    visible: e.dialogPreview,
                    "destroy-on-close": !0,
                    "close-on-click-modal": !1,
                  },
                  on: {
                    "update:visible": function (t) {
                      e.dialogPreview = t;
                    },
                  },
                },
                [
                  a(
                    "div",
                    [
                      a("codemirror", {
                        attrs: { options: e.cmOptions },
                        model: {
                          value: e.codefile.content,
                          callback: function (t) {
                            e.$set(e.codefile, "content", t);
                          },
                          expression: "codefile.content",
                        },
                      }),
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
                              e.dialogPreview = !1;
                            },
                          },
                        },
                        [e._v("关 闭")],
                      ),
                    ],
                    1,
                  ),
                ],
              ),
            ],
            1,
          );
        },
        r = [],
        s =
          (a("a4d3"),
          a("e01a"),
          a("d28b"),
          a("99af"),
          a("4de4"),
          a("7db0"),
          a("c975"),
          a("baa5"),
          a("a434"),
          a("0d03"),
          a("b0c0"),
          a("d3b7"),
          a("25f0"),
          a("3ca3"),
          a("ddb0"),
          a("2b3d"),
          a("96cf"),
          a("89ba")),
        c = a("9f12"),
        l = a("53fe"),
        d = a("8b83"),
        u = a("c65a"),
        p = a("9aa6"),
        h = a("c03e"),
        b = a("2fa7"),
        f = a("9ab4"),
        v = a("60a3"),
        m = a("535f"),
        g = a("482f"),
        y =
          (a("4ba6"),
          a("db91"),
          a("f9d4"),
          a("4895"),
          a("cbc8"),
          a("aedd"),
          a("164b"),
          a("8c2e"),
          function e() {
            (Object(c["a"])(this, e),
              Object(b["a"])(this, "id", void 0),
              Object(b["a"])(this, "targetId", void 0),
              Object(b["a"])(this, "name", void 0),
              Object(b["a"])(this, "size", void 0),
              Object(b["a"])(this, "description", void 0),
              Object(b["a"])(this, "type", void 0),
              Object(b["a"])(this, "extension", void 0),
              Object(b["a"])(this, "content", void 0));
          }),
        O = function e() {
          (Object(c["a"])(this, e),
            Object(b["a"])(this, "id", void 0),
            Object(b["a"])(this, "targetId", void 0),
            Object(b["a"])(this, "name", void 0),
            Object(b["a"])(this, "description", void 0),
            Object(b["a"])(this, "type", void 0),
            Object(b["a"])(this, "extension", void 0),
            Object(b["a"])(this, "size", void 0),
            Object(b["a"])(this, "duration", void 0),
            Object(b["a"])(this, "isPublic", void 0),
            Object(b["a"])(this, "storeType", void 0),
            Object(b["a"])(this, "address", void 0));
        },
        j = function e() {
          (Object(c["a"])(this, e),
            Object(b["a"])(this, "id", void 0),
            Object(b["a"])(this, "sectionId", void 0),
            Object(b["a"])(this, "language", void 0),
            Object(b["a"])(this, "name", void 0),
            Object(b["a"])(this, "filesCount", void 0),
            Object(b["a"])(this, "size", void 0),
            Object(b["a"])(this, "hint", void 0),
            Object(b["a"])(this, "codeFiles", void 0),
            Object(b["a"])(this, "libs", void 0));
        },
        k = a("59b9"),
        w = (function () {
          function e() {
            Object(c["a"])(this, e);
          }
          return (
            Object(l["a"])(e, [
              {
                key: "GetCodePracticeById",
                value: (function () {
                  var e = Object(s["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "");
                            case 2:
                              return (
                                (e.next = 4),
                                Object(k["a"])({ url: "".concat(g["a"].web_host, "/api/CodePractice/GetCodePractice/").concat(t), method: "GET" })
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
                key: "GetCodePracticeBySectionId",
                value: (function () {
                  var e = Object(s["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "");
                            case 2:
                              return (
                                (e.next = 4),
                                Object(k["a"])({ url: "".concat(g["a"].web_host, "/api/CodePractice/GetCodePracticeBySectionID/").concat(t), method: "GET" })
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
                key: "addOrEditCodePractice",
                value: (function () {
                  var e = Object(s["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(k["a"])({ url: "".concat(g["a"].web_host, "/api/CodePractice/AddOrUpdateCodePractice"), method: "POST", data: t })
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
                key: "GetFileNamesBySectionId",
                value: (function () {
                  var e = Object(s["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!("undefined" === typeof t || t.length < 32)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "");
                            case 2:
                              return (
                                (e.next = 4),
                                Object(k["a"])({ url: "".concat(g["a"].web_host, "/api/CodePractice/GetFileNamesBySectionId/").concat(t), method: "GET" })
                              );
                            case 4:
                              if (((a = e.sent), 0 != a.code)) {
                                e.next = 7;
                                break;
                              }
                              return e.abrupt("return", a.data);
                            case 7:
                              return e.abrupt("return", []);
                            case 8:
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
            ]),
            e
          );
        })(),
        C = new w(),
        x = a("1b4e"),
        R =
          ((i = (function (e) {
            function t() {
              var e, a;
              Object(c["a"])(this, t);
              for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
              return (
                (a = Object(d["a"])(this, (e = Object(u["a"])(t)).call.apply(e, [this].concat(n)))),
                Object(b["a"])(Object(p["a"])(a), "config", g["a"]),
                Object(b["a"])(Object(p["a"])(a), "actived", void 0),
                Object(b["a"])(Object(p["a"])(a), "sectionId", void 0),
                Object(b["a"])(Object(p["a"])(a), "disabled", void 0),
                Object(b["a"])(Object(p["a"])(a), "section", void 0),
                Object(b["a"])(Object(p["a"])(a), "id", void 0),
                Object(b["a"])(Object(p["a"])(a), "dialogPreview", !1),
                Object(b["a"])(Object(p["a"])(a), "firstLoaded", !0),
                Object(b["a"])(Object(p["a"])(a), "encode", "gb2312"),
                Object(b["a"])(Object(p["a"])(a), "dataChanged", !1),
                Object(b["a"])(Object(p["a"])(a), "modeOptions", [
                  { value: "text/x-csharp", label: "C#", ext: ".cs", dependenceExt: ".dll" },
                  { value: "text/x-c++", label: "C++", ext: ".h , .cpp", dependenceExt: ".lib" },
                  { value: "text/x-c", label: "C", ext: ".h  , .c", dependenceExt: ".lib" },
                  { value: "text/x-java", label: "Java", ext: ".java", dependenceExt: ".jar" },
                  { value: "text/x-android", label: "Android", ext: ".java", dependenceExt: ".jar" },
                ]),
                Object(b["a"])(Object(p["a"])(a), "accept", a.modeOptions[0].ext),
                Object(b["a"])(Object(p["a"])(a), "deAccept", a.modeOptions[0].dependenceExt),
                Object(b["a"])(Object(p["a"])(a), "cmOptions", {
                  mode: a.modeOptions[0].value,
                  theme: "base16-dark",
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
                Object(b["a"])(Object(p["a"])(a), "codeHint", ""),
                Object(b["a"])(Object(p["a"])(a), "editorOption", {
                  theme: "snow",
                  placeholder: "请输入编码说明...",
                  modules: {
                    toolbar: {
                      container: [
                        ["bold", "italic", "underline", "strike"],
                        ["blockquote", "code-block"],
                        [{ header: 1 }, { header: 2 }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ script: "sub" }, { script: "super" }],
                        [{ indent: "-1" }, { indent: "+1" }],
                        [{ size: ["small", !1, "large", "huge"] }],
                        [{ header: [1, 2, 3, 4, 5, 6, !1] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ["clean"],
                        ["link", "image"],
                      ],
                    },
                  },
                }),
                Object(b["a"])(Object(p["a"])(a), "codefileList", []),
                Object(b["a"])(Object(p["a"])(a), "codefileList2", []),
                Object(b["a"])(Object(p["a"])(a), "codefile", { uid: "", name: "", content: "" }),
                Object(b["a"])(Object(p["a"])(a), "uploadedfilesCallback", {}),
                Object(b["a"])(Object(p["a"])(a), "addedcodeFiles", []),
                Object(b["a"])(Object(p["a"])(a), "addedlibFiles", []),
                Object(b["a"])(Object(p["a"])(a), "uploadedcodeFiles", []),
                Object(b["a"])(Object(p["a"])(a), "uploadedlibFiles", []),
                a
              );
            }
            return (
              Object(h["a"])(t, e),
              Object(l["a"])(t, [
                {
                  key: "onLangChange",
                  value: function (e) {
                    var t = this.modeOptions.find(function (t) {
                      return t.value == e;
                    });
                    t && ((this.accept = t.ext), (this.deAccept = t.dependenceExt));
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    e.displaycode(null);
                  },
                },
                {
                  key: "mounted",
                  value: function () {
                    (this.init(), this.firstLoaded && this.actived && this.sectionId && this.downloadSectionContent(this.sectionId), (this.dataChanged = !1));
                  },
                },
                {
                  key: "displaycode",
                  value: function (e) {
                    if (e) {
                      var t = this,
                        a = new FileReader();
                      (a.readAsText(e.raw, this.encode),
                        (t.codefile.name = e.name),
                        (t.codefile.uid = e.uid),
                        (a.onload = function () {
                          t.codefile.content = this.result;
                        }));
                    } else
                      ((this.codefile.uid = ""),
                        (this.codefile.name = "代码预览"),
                        (this.codefile.content = "/* ### 提示：此处仅用于预览编码文件的内容 ###*/"));
                  },
                },
                {
                  key: "downloadLibFile",
                  value: function (e) {
                    console.log("downloadLibFile", "下载依赖", e);
                    try {
                      var t = document.createElement("iframe");
                      ((t.src = this.config.compile_host + "/api/Dependence/Download?fileName=" + e.address),
                        (t.style.display = "none"),
                        document.body.appendChild(t));
                    } catch (a) {}
                  },
                },
                {
                  key: "arrayRemove",
                  value: function (e, t) {
                    for (var a = 0; a < e.length; a++) {
                      var i = e[a];
                      i === t && e.splice(a, 1);
                    }
                  },
                },
                {
                  key: "downloadcodeFile",
                  value: function (e) {
                    (console.log("downloadcodeFile", "下载代码", this.base64ToUtf8(e.raw)), this.doSave(this.base64ToUtf8(e.raw), "text/latex", e.name));
                  },
                },
                {
                  key: "doSave",
                  value: function (e, t, a) {
                    var i;
                    "function" === typeof window.Blob && (i = new Blob([e], { type: t }));
                    var n = window.URL,
                      o = n.createObjectURL(i),
                      r = document.createElement("a");
                    if ("download" in r) {
                      ((r.style.visibility = "hidden"), (r.href = o), (r.download = a), document.body.appendChild(r));
                      var s = document.createEvent("MouseEvents");
                      (s.initEvent("click", !0, !0), r.dispatchEvent(s), document.body.removeChild(r));
                    } else location.href = o;
                  },
                },
                {
                  key: "utf8ToBase64",
                  value: function (e) {
                    return btoa(unescape(encodeURIComponent(e)));
                  },
                },
                {
                  key: "base64ToUtf8",
                  value: function (e) {
                    return decodeURIComponent(escape(atob(e)));
                  },
                },
                {
                  key: "handleCodeRemove",
                  value: function (e, t) {
                    ((this.dataChanged = !0),
                      console.log("handleCodeRemove:", e, t),
                      this.codefile.uid === e.uid && this.displaycode(null),
                      this.arrayRemove(this.addedcodeFiles, e));
                  },
                },
                {
                  key: "handleCodechange",
                  value: function (e, t) {
                    ((this.dataChanged = !0),
                      console.log("handleCodechange:", e, t),
                      "ready" === e.status && ((this.codefileList = t), (e.type = 0), this.addedcodeFiles.push(e), this.displaycode(e)));
                  },
                },
                {
                  key: "handleCodeExceed",
                  value: function (e, t) {
                    ((this.dataChanged = !0), console.log("handleCodeExceed:", e, t));
                  },
                },
                {
                  key: "handleCodePreview",
                  value: function (e) {
                    (console.log("handleCodePreview:", e), (this.dialogPreview = !0), this.displaycode(e));
                  },
                },
                {
                  key: "handleCodeSuccess",
                  value: function (e, t, a) {
                    console.log("handleCodeSuccess:", e, t, a);
                  },
                },
                {
                  key: "handleCodeError",
                  value: function (e, t, a) {
                    console.log("handleCodeError:", e, t, a);
                  },
                },
                {
                  key: "handleCode2Remove",
                  value: function (e, t) {
                    ((this.dataChanged = !0),
                      console.log("handleCodeRemove:", e, t),
                      this.codefile.uid === e.uid && this.displaycode(null),
                      this.arrayRemove(this.addedcodeFiles, e));
                  },
                },
                {
                  key: "handleCode2change",
                  value: function (e, t) {
                    ((this.dataChanged = !0),
                      console.log("handleCodechange:", e, t),
                      "ready" === e.status && ((this.codefileList2 = t), (e.type = 1), this.addedcodeFiles.push(e), this.displaycode(e)));
                  },
                },
                {
                  key: "handleCode2Exceed",
                  value: function (e, t) {
                    ((this.dataChanged = !0), console.log("handleCodeExceed:", e, t));
                  },
                },
                {
                  key: "handleCode2Preview",
                  value: function (e) {
                    (console.log("handleCodePreview:", e), (this.dialogPreview = !0), this.displaycode(e));
                  },
                },
                {
                  key: "handlebeforeupload",
                  value: function (e) {
                    if ((console.log("handlebeforeupload", e), e.size > 512e3)) return (this.msg("上传文件不能大于500K", "warning"), !1);
                    var t = e.name.lastIndexOf("."),
                      a = e.name.substr(t + 1),
                      i = ["cs"];
                    return -1 === i.indexOf(a.toLowerCase()) ? (this.msg("文件类型错误，无法上传", "warning"), !1) : void 0;
                  },
                },
                {
                  key: "handlebeforeupload2",
                  value: function (e) {
                    if (e.size > 1048576) return (this.msg("上传文件不能大于1M", "warning"), !1);
                    var t = e.name.lastIndexOf("."),
                      a = e.name.substr(t + 1),
                      i = ["exe", "dll", "lib"];
                    return -1 === i.indexOf(a.toLowerCase()) ? (this.msg("文件类型错误，无法上传", "warning"), !1) : void 0;
                  },
                },
                {
                  key: "handleCode2Success",
                  value: function (e, t, a) {
                    console.log("handleCodeSuccess:", e, t, a);
                  },
                },
                {
                  key: "handleCode2Error",
                  value: function (e, t, a) {
                    console.log("handleCodeError:", e, t, a);
                  },
                },
                {
                  key: "handleRefLibchange",
                  value: function (e, t) {
                    ((this.dataChanged = !0),
                      console.log("handleRefLibchange", e, t),
                      "ready" === e.status
                        ? this.addedlibFiles.push(e)
                        : "success" === e.status
                          ? 0 === e.response.code
                            ? (this.arrayRemove(t, e),
                              this.arrayRemove(this.addedlibFiles, e),
                              this.uploadedlibFiles.push({
                                id: e.response.data.uniqueName,
                                storeType: e.response.data.storeType,
                                address: e.response.data.uniqueName,
                                name: e.response.data.name,
                                size: e.response.data.size,
                              }))
                            : this.$emit("uploadFailed", "依赖文件上传失败, code = " + e.response.code)
                          : this.$emit("uploadFailed", "依赖文件上传失败, status = " + e.status),
                      0 === this.addedcodeFiles.length &&
                        0 === this.addedlibFiles.length &&
                        this.uploadedfilesCallback &&
                        (console.log("handleRefLibchange:uploadedfilesCallback"), this.clearCodeFiles(), this.uploadedfilesCallback()));
                  },
                },
                {
                  key: "handleRefLibRemove",
                  value: function (e, t) {
                    ((this.dataChanged = !0), console.log("handleRefLibRemove", e, t), this.arrayRemove(this.addedlibFiles, e));
                  },
                },
                {
                  key: "handleRefLibPreview",
                  value: function (e) {
                    console.log("handleRefLibPreview", e);
                  },
                },
                {
                  key: "readAllCodeFile",
                  value: function () {
                    for (var e = 0; e < this.addedcodeFiles.length; e++) {
                      var t = this.addedcodeFiles[e];
                      this.readCodeFile(t);
                    }
                  },
                },
                {
                  key: "readCodeFile",
                  value: function (e) {
                    var t = this,
                      a = new FileReader();
                    (a.readAsText(e.raw, this.encode),
                      (a.onload = function () {
                        (t.arrayRemove(t.addedcodeFiles, e),
                          t.uploadedcodeFiles.push({ uid: e.uid, name: e.name, size: e.size, type: e.type, raw: t.utf8ToBase64(this.result) }),
                          0 === t.addedcodeFiles.length &&
                            0 === t.addedlibFiles.length &&
                            t.uploadedfilesCallback &&
                            (t.clearCodeFiles(), t.uploadedfilesCallback()));
                      }));
                  },
                },
                {
                  key: "displaycodeAfterRead",
                  value: function (e) {
                    var t = this;
                    this.dialogPreview = !0;
                    new FileReader();
                    for (var a = 0; a < this.uploadedcodeFiles.length; a++) {
                      var i = this.uploadedcodeFiles[a];
                      i.uid === e && (t.codefile.content = this.base64ToUtf8(i.raw));
                    }
                  },
                },
                {
                  key: "delUploadedcodeFiles",
                  value: function (e) {
                    this.dataChanged = !0;
                    for (var t = 0; t < this.uploadedcodeFiles.length; t++) {
                      var a = this.uploadedcodeFiles[t];
                      a.uid === e && this.uploadedcodeFiles.splice(t, 1);
                    }
                  },
                },
                {
                  key: "delUploadedlibFiles",
                  value: function (e) {
                    this.dataChanged = !0;
                    for (var t = 0; t < this.uploadedlibFiles.length; t++) {
                      var a = this.uploadedlibFiles[t];
                      a.id === e && this.uploadedlibFiles.splice(t, 1);
                    }
                  },
                },
                {
                  key: "clearCodeFiles",
                  value: function () {
                    while (this.codefileList.length > 0) this.arrayRemove(this.codefileList, this.codefileList[0]);
                    while (this.codefileList2.length > 0) this.arrayRemove(this.codefileList2, this.codefileList2[0]);
                  },
                },
                {
                  key: "changeCodeHint",
                  value: function (e) {
                    console.log(e);
                  },
                },
                {
                  key: "uploadFiles",
                  value: function (e) {
                    if (
                      (console.log("uploadFiles", e),
                      (this.uploadedfilesCallback = e),
                      0 === this.addedcodeFiles.length && 0 === this.addedlibFiles.length && this.uploadedfilesCallback)
                    )
                      (this.clearCodeFiles(), this.uploadedfilesCallback());
                    else {
                      this.$refs.codeupload;
                      var t = this.$refs.libupload;
                      (t.submit(), this.readAllCodeFile());
                    }
                  },
                },
                {
                  key: "setData",
                  value: function (e) {
                    this.cmOptions.mode = e.lang;
                    var t = this.modeOptions.find(function (t) {
                      return t.value == e.lang;
                    });
                    (t && ((this.accept = t.ext), (this.deAccept = t.dependenceExt)),
                      (this.uploadedcodeFiles = e.codefiles),
                      (this.uploadedlibFiles = e.libfiles),
                      (this.codeHint = e.hint));
                  },
                },
                {
                  key: "getData",
                  value: function () {
                    this.displaycode(null);
                    var e = { lang: this.cmOptions.mode, codefiles: this.uploadedcodeFiles, libfiles: this.uploadedlibFiles, hint: this.codeHint };
                    return (console.log("getData", e), e);
                  },
                },
                {
                  key: "submit",
                  value: (function () {
                    var e = Object(s["a"])(
                      regeneratorRuntime.mark(function e(t) {
                        var a, i, n, o, r, s, c, l, d, u, p, h, b, f, v, m, g, k, w, x, R, I, A, T, F, S, G, E, z;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((a = this),
                                    (i = a.getData()),
                                    0 !=
                                      i.codefiles.filter(function (e) {
                                        return 0 == e.type;
                                      }).length)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (this.$emit("uploadFailed", "题目文件不能为空"), e.abrupt("return"));
                                case 5:
                                  if (
                                    i.codefiles.filter(function (e) {
                                      return 0 == e.type;
                                    }).length ==
                                    i.codefiles.filter(function (e) {
                                      return 1 == e.type;
                                    }).length
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (this.$emit("uploadFailed", "题目文件与答案文件数量不一致"), e.abrupt("return"));
                                case 8:
                                  for (
                                    console.log("submit", "data", i),
                                      n = new j(),
                                      n.id = this.id,
                                      n.sectionId = t,
                                      n.language = i.lang,
                                      n.name = i.lang,
                                      n.hint = i.hint,
                                      n.size = 0,
                                      n.filesCount = 0,
                                      o = [],
                                      r = 0,
                                      s = !0,
                                      c = !1,
                                      l = void 0,
                                      e.prev = 22,
                                      d = i.codefiles
                                        .filter(function (e) {
                                          return 0 === e.type;
                                        })
                                        [Symbol.iterator]();
                                    !(s = (u = d.next()).done);
                                    s = !0
                                  )
                                    ((p = u.value),
                                      (h = new y()),
                                      (h.name = p.name),
                                      (h.size = p.size),
                                      (h.content = p.raw),
                                      (h.type = p.type),
                                      (h.description = (r++).toString()),
                                      o.push(h),
                                      (n.filesCount += 1),
                                      (n.size += h.size));
                                  e.next = 30;
                                  break;
                                case 26:
                                  ((e.prev = 26), (e.t0 = e["catch"](22)), (c = !0), (l = e.t0));
                                case 30:
                                  ((e.prev = 30), (e.prev = 31), s || null == d.return || d.return());
                                case 33:
                                  if (((e.prev = 33), !c)) {
                                    e.next = 36;
                                    break;
                                  }
                                  throw l;
                                case 36:
                                  return e.finish(33);
                                case 37:
                                  return e.finish(30);
                                case 38:
                                  for (
                                    r = 0,
                                      b = !0,
                                      f = !1,
                                      v = void 0,
                                      e.prev = 42,
                                      m = i.codefiles
                                        .filter(function (e) {
                                          return 1 === e.type;
                                        })
                                        [Symbol.iterator]();
                                    !(b = (g = m.next()).done);
                                    b = !0
                                  )
                                    ((k = g.value),
                                      (w = new y()),
                                      (w.name = k.name),
                                      (w.size = k.size),
                                      (w.content = k.raw),
                                      (w.type = k.type),
                                      (w.description = (r++).toString()),
                                      o.push(w),
                                      (n.filesCount += 1),
                                      (n.size += w.size));
                                  e.next = 50;
                                  break;
                                case 46:
                                  ((e.prev = 46), (e.t1 = e["catch"](42)), (f = !0), (v = e.t1));
                                case 50:
                                  ((e.prev = 50), (e.prev = 51), b || null == m.return || m.return());
                                case 53:
                                  if (((e.prev = 53), !f)) {
                                    e.next = 56;
                                    break;
                                  }
                                  throw v;
                                case 56:
                                  return e.finish(53);
                                case 57:
                                  return e.finish(50);
                                case 58:
                                  for (
                                    n.codeFiles = o, x = [], R = !0, I = !1, A = void 0, e.prev = 63, T = i.libfiles[Symbol.iterator]();
                                    !(R = (F = T.next()).done);
                                    R = !0
                                  )
                                    ((S = F.value),
                                      (G = new O()),
                                      (G.name = S.name),
                                      (G.size = S.size),
                                      (G.address = S.address),
                                      x.push(G),
                                      (n.filesCount += 1),
                                      (n.size += G.size));
                                  e.next = 71;
                                  break;
                                case 67:
                                  ((e.prev = 67), (e.t2 = e["catch"](63)), (I = !0), (A = e.t2));
                                case 71:
                                  ((e.prev = 71), (e.prev = 72), R || null == T.return || T.return());
                                case 74:
                                  if (((e.prev = 74), !I)) {
                                    e.next = 77;
                                    break;
                                  }
                                  throw A;
                                case 77:
                                  return e.finish(74);
                                case 78:
                                  return e.finish(71);
                                case 79:
                                  return ((n.libs = x), console.log("submit", "practice", n), (e.next = 83), C.addOrEditCodePractice(n));
                                case 83:
                                  return (
                                    (E = e.sent),
                                    (z = this.$parent),
                                    console.log(z),
                                    E && 0 === E.code
                                      ? ((this.dataChanged = !1), this.$emit("uploadSuccess", "编码题上传成功"))
                                      : this.$emit("uploadFailed", "编码题上传失败"),
                                    e.abrupt("return", E)
                                  );
                                case 88:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [
                            [22, 26, 30, 38],
                            [31, , 33, 37],
                            [42, 46, 50, 58],
                            [51, , 53, 57],
                            [63, 67, 71, 79],
                            [72, , 74, 78],
                          ],
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
                  key: "onActived",
                  value: function (e) {
                    (console.log("code", this.firstLoaded, this.actived, e),
                      this.firstLoaded && this.actived && this.sectionId && this.downloadSectionContent(this.sectionId));
                  },
                },
                {
                  key: "checkSectionContent",
                  value: function () {
                    var e = this.addedcodeFiles.concat(this.uploadedcodeFiles);
                    (console.log("checkSectionContent", e),
                      0 !=
                      e.filter(function (e) {
                        return 0 == e.type;
                      }).length
                        ? e.filter(function (e) {
                            return 0 == e.type;
                          }).length ==
                            e.filter(function (e) {
                              return 1 == e.type;
                            }).length || this.$emit("scetionCheckout", this.section, "请保持题目文件与答案文件数量一致")
                        : this.$emit("scetionCheckout", this.section, "请至少上传一个题目代码文件"));
                  },
                },
                {
                  key: "uploadSectionContent",
                  value: function () {
                    var e = this;
                    if (this.sectionId && this.firstLoaded) this.$emit("uploadSuccess", "");
                    else {
                      var t = this;
                      this.dataChanged
                        ? this.uploadFiles(
                            Object(s["a"])(
                              regeneratorRuntime.mark(function a() {
                                return regeneratorRuntime.wrap(function (a) {
                                  while (1)
                                    switch ((a.prev = a.next)) {
                                      case 0:
                                        t.submit(t.sectionId)
                                          .then(function (t) {
                                            t && 0 == t.code
                                              ? ((e.dataChanged = !1), e.$emit("uploadSuccess", "编码题保存成功！"))
                                              : e.$emit("uploadFailed", "编码题保存失败！");
                                          })
                                          .catch(function (t) {
                                            e.$emit("uploadFailed", "编码题保存失败" + t);
                                          });
                                      case 1:
                                      case "end":
                                        return a.stop();
                                    }
                                }, a);
                              }),
                            ),
                          )
                        : this.$emit("uploadSuccess", "");
                    }
                  },
                },
                {
                  key: "sectionIdChanged",
                  value: function (e) {
                    this.id = "";
                  },
                },
                {
                  key: "downloadSectionContent",
                  value: (function () {
                    var e = Object(s["a"])(
                      regeneratorRuntime.mark(function e(t) {
                        var a, i, n, o, r, s, c, l, d, u, p, h, b, f, v;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return ((e.next = 2), C.GetCodePracticeBySectionId(t));
                                case 2:
                                  if (((a = e.sent), (this.firstLoaded = !1), console.log("ret", a), !a || 0 !== a.code)) {
                                    e.next = 48;
                                    break;
                                  }
                                  for (
                                    this.id = a.data.id, i = [], n = !0, o = !1, r = void 0, e.prev = 11, s = a.data.codeFiles[Symbol.iterator]();
                                    !(n = (c = s.next()).done);
                                    n = !0
                                  )
                                    ((l = c.value),
                                      i.push({ uid: l.id, name: l.name, size: l.size, type: l.type, description: l.description, raw: l.content }));
                                  e.next = 19;
                                  break;
                                case 15:
                                  ((e.prev = 15), (e.t0 = e["catch"](11)), (o = !0), (r = e.t0));
                                case 19:
                                  ((e.prev = 19), (e.prev = 20), n || null == s.return || s.return());
                                case 22:
                                  if (((e.prev = 22), !o)) {
                                    e.next = 25;
                                    break;
                                  }
                                  throw r;
                                case 25:
                                  return e.finish(22);
                                case 26:
                                  return e.finish(19);
                                case 27:
                                  for (d = [], u = !0, p = !1, h = void 0, e.prev = 31, b = a.data.libs[Symbol.iterator](); !(u = (f = b.next()).done); u = !0)
                                    ((v = f.value), d.push({ uid: v.id, name: v.name, size: v.size, address: v.address, storeType: v.storeType }));
                                  e.next = 39;
                                  break;
                                case 35:
                                  ((e.prev = 35), (e.t1 = e["catch"](31)), (p = !0), (h = e.t1));
                                case 39:
                                  ((e.prev = 39), (e.prev = 40), u || null == b.return || b.return());
                                case 42:
                                  if (((e.prev = 42), !p)) {
                                    e.next = 45;
                                    break;
                                  }
                                  throw h;
                                case 45:
                                  return e.finish(42);
                                case 46:
                                  return e.finish(39);
                                case 47:
                                  this.setData({ lang: a.data.language, hint: a.data.hint, codefiles: i, libfiles: d });
                                case 48:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [
                            [11, 15, 19, 27],
                            [20, , 22, 26],
                            [31, 35, 39, 47],
                            [40, , 42, 46],
                          ],
                        );
                      }),
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
              ]),
              t
            );
          })(m["a"])),
          i);
      (Object(f["a"])([Object(v["b"])(), Object(f["b"])("design:type", Boolean)], R.prototype, "actived", void 0),
        Object(f["a"])([Object(v["b"])(), Object(f["b"])("design:type", String)], R.prototype, "sectionId", void 0),
        Object(f["a"])([Object(v["b"])(), Object(f["b"])("design:type", Boolean)], R.prototype, "disabled", void 0),
        Object(f["a"])(
          [Object(v["b"])(), Object(f["b"])("design:type", "function" === typeof (n = "undefined" !== typeof x["a"] && x["a"]) ? n : Object)],
          R.prototype,
          "section",
          void 0,
        ),
        Object(f["a"])(
          [
            Object(v["d"])("actived"),
            Object(f["b"])("design:type", Function),
            Object(f["b"])("design:paramtypes", [Object]),
            Object(f["b"])("design:returntype", void 0),
          ],
          R.prototype,
          "onActived",
          null,
        ),
        Object(f["a"])(
          [
            Object(v["d"])("sectionId"),
            Object(f["b"])("design:type", Function),
            Object(f["b"])("design:paramtypes", [Object]),
            Object(f["b"])("design:returntype", void 0),
          ],
          R.prototype,
          "sectionIdChanged",
          null,
        ),
        (R = Object(f["a"])([v["a"]], R)));
      var I = R,
        A = I,
        T = (a("e565"), a("2877")),
        F = Object(T["a"])(A, o, r, !1, null, null, null);
      t["a"] = F.exports;
    },
    9577: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI5QkY5NUY0MzFCNDExRUE5OTI5QjkwOUE1Qzc0OUM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI5QkY5NUY1MzFCNDExRUE5OTI5QjkwOUE1Qzc0OUM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjlCRjk1RjIzMUI0MTFFQTk5MjlCOTA5QTVDNzQ5QzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjlCRjk1RjMzMUI0MTFFQTk5MjlCOTA5QTVDNzQ5QzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz50kKqeAAAAlUlEQVR42mIM3PLfk4GBYS4QSzKQBp4DcTITmZoZoHrmMpGpGW4IEwmKXwNxPhD/RBZkIUGzIxBfBeL/QDwJJsFEomZtIK5FlmQiUfN+IBYl1gCCmvEZ8IoYzfgMaCZGM75Y6AFiRmiAieILJGQDGLHIT8aj9z+6Af/JSYpMDBQCJmiuIhe8ABmQAmKQofkpKDsDBBgAMwoiC/GxRwgAAAAASUVORK5CYII=";
    },
    9709: function (e, t, a) {
      ((t = e.exports = a("24fb")(!1)),
        t.push([
          e.i,
          ".el-radio{margin-right:10px}.el-radio__label{padding-left:5px}.vue-codemirror{height:100%}.CodeMirror{height:420px;font-size:14px;line-height:150%}.editor{line-height:normal!important}.ql-editor{height:380px}",
          "",
        ]));
    },
    a434: function (e, t, a) {
      "use strict";
      var i = a("23e7"),
        n = a("23cb"),
        o = a("a691"),
        r = a("50c4"),
        s = a("7b0b"),
        c = a("65f0"),
        l = a("8418"),
        d = a("1dde"),
        u = Math.max,
        p = Math.min,
        h = 9007199254740991,
        b = "Maximum allowed length exceeded";
      i(
        { target: "Array", proto: !0, forced: !d("splice") },
        {
          splice: function (e, t) {
            var a,
              i,
              d,
              f,
              v,
              m,
              g = s(this),
              y = r(g.length),
              O = n(e, y),
              j = arguments.length;
            if ((0 === j ? (a = i = 0) : 1 === j ? ((a = 0), (i = y - O)) : ((a = j - 2), (i = p(u(o(t), 0), y - O))), y + a - i > h)) throw TypeError(b);
            for (d = c(g, i), f = 0; f < i; f++) ((v = O + f), v in g && l(d, f, g[v]));
            if (((d.length = i), a < i)) {
              for (f = O; f < y - i; f++) ((v = f + i), (m = f + a), v in g ? (g[m] = g[v]) : delete g[m]);
              for (f = y; f > y - i + a; f--) delete g[f - 1];
            } else if (a > i) for (f = y - i; f > O; f--) ((v = f + i - 1), (m = f + a - 1), v in g ? (g[m] = g[v]) : delete g[m]);
            for (f = 0; f < a; f++) g[f + O] = arguments[f + 2];
            return ((g.length = y - i + a), d);
          },
        },
      );
    },
    baa5: function (e, t, a) {
      var i = a("23e7"),
        n = a("e58c");
      i({ target: "Array", proto: !0, forced: n !== [].lastIndexOf }, { lastIndexOf: n });
    },
    e111: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI5NjI0MjZDMzFCNDExRUE5RkQ0RTE1RUFEQkUxRjc2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI5NjI0MjZEMzFCNDExRUE5RkQ0RTE1RUFEQkUxRjc2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mjk2MjQyNkEzMUI0MTFFQTlGRDRFMTVFQURCRTFGNzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mjk2MjQyNkIzMUI0MTFFQTlGRDRFMTVFQURCRTFGNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zeY4eAAAAW0lEQVR42mL8PdfSk4GBYS4QSzKQBp4DcTIj0IBnZGiGG8JEgWYQkGRBE2CE0v+R2NjAfxiDiYFCwILLZDQ2TkB1F4yGwZANg+cUOOAFyIAUEIMMzU9B2RkgwAAdrxiLz56wQwAAAABJRU5ErkJggg==";
    },
    e565: function (e, t, a) {
      "use strict";
      var i = a("1734"),
        n = a.n(i);
      n.a;
    },
    e9bd: function (e, t, a) {
      "use strict";
      a("96cf");
      var i = a("89ba"),
        n = a("9f12"),
        o = a("53fe"),
        r = a("2fa7"),
        s = a("59b9"),
        c = a("482f"),
        l = a("a0f7"),
        d = (function () {
          function e() {
            (Object(n["a"])(this, e), Object(r["a"])(this, "pageSize", 10), Object(r["a"])(this, "itemsCount", 0));
          }
          return (
            Object(o["a"])(e, [
              {
                key: "getTasktemplatePage",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t, a, i, n, o, r) {
                      var d, u;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/GetTaskTemplatePage"),
                                  method: "GET",
                                  params: { collegeId: t, teacherId: a, pageIndex: i, size: n, key: o, lessonId: r },
                                })
                              );
                            case 2:
                              return (
                                (d = e.sent),
                                (u = new l["a"]()),
                                d && 0 == d.code ? ((u.status = !0), (u.list = d.data.rows), (u.page = d.data)) : ((u.status = !1), (u.msg = d.msg)),
                                e.abrupt("return", u)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, a, i, n, o, r) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "getTasktemplatePageByTeacherId",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t, a, i, n, o, r) {
                      var d, u;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/GetTaskTemplatePageByTeacherId"),
                                  method: "GET",
                                  params: { collegeId: t, teacherId: a, pageIndex: i, size: n, key: o, lessonId: r },
                                })
                              );
                            case 2:
                              return (
                                (d = e.sent),
                                (u = new l["a"]()),
                                d && 0 == d.code ? ((u.status = !0), (u.list = d.data.rows), (u.page = d.data)) : ((u.status = !1), (u.msg = d.msg)),
                                e.abrupt("return", u)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, a, i, n, o, r) {
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
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
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
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/GetTaskTemplate"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { id: t },
                                })
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
                key: "getAllTasktemplateInfo",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t, a) {
                      var i;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/GetAllTaskTemplateInfo"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { teacherId: t, collegeId: a },
                                })
                              );
                            case 2:
                              return ((i = e.sent), e.abrupt("return", i));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, a) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "addOrUpdateTemplateHead",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/AddOrUpdateTemplateHead"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: t,
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
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "addOrUpdataTemplateSections",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t, a, i) {
                      var n;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/AddOrUpdateTemplateSections"),
                                  headers: { "Content-Type": "application/json-patch+json" },
                                  method: "POST",
                                  data: { templateId: t, sections: a, deleteIds: i },
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
                  function t(t, a, i) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "deleteTasktemplate",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
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
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/DeleteTaskTemplate"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "GET",
                                  params: { id: t },
                                })
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
                key: "bacthDeleteTasktemplate",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var a;
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
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/BacthDeleteTaskTemplate"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: t,
                                })
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
                key: "copyTasktemplateToTeacher",
                value: (function () {
                  var e = Object(i["a"])(
                    regeneratorRuntime.mark(function e(t, a, i) {
                      var n,
                        o,
                        r = arguments;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((n = r.length > 3 && void 0 !== r[3] ? r[3] : ""), t && !(t.length < 1) && a)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 3:
                              return (
                                (e.next = 5),
                                Object(s["a"])({
                                  url: "".concat(c["a"].web_host, "/api/TaskTemplate/CopyTemplate"),
                                  headers: { "Content-Type": "application/json" },
                                  method: "POST",
                                  data: { ids: t, teacherId: a, teacherName: i, nameSuffix: n },
                                })
                              );
                            case 5:
                              return ((o = e.sent), e.abrupt("return", o));
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t, a, i) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            e
          );
        })();
      t["a"] = new d();
    },
  },
]);
