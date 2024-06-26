!function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : (e.AnchorJS = t(),
  e.anchors = new e.AnchorJS)
}(this, function() {
  "use strict";
  function e(e) {
      function t(e) {
          e.icon = e.hasOwnProperty("icon") ? e.icon : "",
          e.visible = e.hasOwnProperty("visible") ? e.visible : "hover",
          e.placement = e.hasOwnProperty("placement") ? e.placement : "right",
          e.class = e.hasOwnProperty("class") ? e.class : "",
          e.truncate = e.hasOwnProperty("truncate") ? Math.floor(e.truncate) : 64
      }
      function n(e) {
          var t;
          if ("string" == typeof e || e instanceof String)
              t = [].slice.call(document.querySelectorAll(e));
          else {
              if (!(Array.isArray(e) || e instanceof NodeList))
                  throw new Error("The selector provided to AnchorJS was invalid.");
              t = [].slice.call(e)
          }
          return t
      }
      function r() {
          if (null === document.head.querySelector("style.anchorjs")) {
              var e, t = document.createElement("style");
              t.className = "anchorjs",
              t.appendChild(document.createTextNode("")),
              e = document.head.querySelector('[rel="stylesheet"], style'),
              void 0 === e ? document.head.appendChild(t) : document.head.insertBefore(t, e),
              t.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }", t.sheet.cssRules.length),
              t.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }", t.sheet.cssRules.length),
              t.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }", t.sheet.cssRules.length),
              t.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }', t.sheet.cssRules.length)
          }
      }
      this.options = e || {},
      this.elements = [],
      t(this.options),
      this.isTouchDevice = function() {
          return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
      }
      ,
      this.add = function(e) {
          var i, o, a, s, l, c, u, h, d, f, A, p, g = [];
          if (t(this.options),
          p = this.options.visible,
          "touch" === p && (p = this.isTouchDevice() ? "always" : "hover"),
          e || (e = "h1, h2, h3, h4, h5, h6"),
          i = n(e),
          0 === i.length)
              return !1;
          for (r(),
          o = document.querySelectorAll("[id]"),
          a = [].map.call(o, function(e) {
              return e.id
          }),
          l = 0; l < i.length; l++)
              if (this.hasAnchorJSLink(i[l]))
                  g.push(l);
              else {
                  if (i[l].hasAttribute("id"))
                      s = i[l].getAttribute("id");
                  else {
                      h = this.urlify(i[l].textContent),
                      d = h,
                      u = 0;
                      do {
                          void 0 !== c && (d = h + "-" + u),
                          c = a.indexOf(d),
                          u += 1
                      } while (-1 !== c);
                      c = void 0,
                      a.push(d),
                      i[l].setAttribute("id", d),
                      s = d
                  }
                  f = s.replace(/-/g, " "),
                  A = document.createElement("a"),
                  A.className = "anchorjs-link " + this.options.class,
                  A.href = "#" + s,
                  A.setAttribute("aria-label", "Anchor link for: " + f),
                  A.setAttribute("data-anchorjs-icon", this.options.icon),
                  "always" === p && (A.style.opacity = "1"),
                  "" === this.options.icon && (A.style.font = "1em/1 anchorjs-icons",
                  "left" === this.options.placement && (A.style.lineHeight = "inherit")),
                  "left" === this.options.placement ? (A.style.position = "absolute",
                  A.style.marginLeft = "-1em",
                  A.style.paddingRight = "0.5em",
                  i[l].insertBefore(A, i[l].firstChild)) : (A.style.paddingLeft = "0.375em",
                  i[l].appendChild(A))
              }
          for (l = 0; l < g.length; l++)
              i.splice(g[l] - l, 1);
          return this.elements = this.elements.concat(i),
          this
      }
      ,
      this.remove = function(e) {
          for (var t, r, i = n(e), o = 0; o < i.length; o++)
              (r = i[o].querySelector(".anchorjs-link")) && (t = this.elements.indexOf(i[o]),
              -1 !== t && this.elements.splice(t, 1),
              i[o].removeChild(r));
          return this
      }
      ,
      this.removeAll = function() {
          this.remove(this.elements)
      }
      ,
      this.urlify = function(e) {
          return this.options.truncate || t(this.options),
          e.trim().replace(/\'/gi, "").replace(/[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase()
      }
      ,
      this.hasAnchorJSLink = function(e) {
          var t = e.firstChild && (" " + e.firstChild.className + " ").indexOf(" anchorjs-link ") > -1
            , n = e.lastChild && (" " + e.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
          return t || n || !1
      }
  }
  return e
}),
function(e) {
  if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
  else if ("function" == typeof define && define.amd)
      define([], e);
  else {
      var t;
      t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
      t.Clipboard = e()
  }
}(function() {
  var e;
  return function e(t, n, r) {
      function i(a, s) {
          if (!n[a]) {
              if (!t[a]) {
                  var l = "function" == typeof require && require;
                  if (!s && l)
                      return l(a, !0);
                  if (o)
                      return o(a, !0);
                  var c = new Error("Cannot find module '" + a + "'");
                  throw c.code = "MODULE_NOT_FOUND",
                  c
              }
              var u = n[a] = {
                  exports: {}
              };
              t[a][0].call(u.exports, function(e) {
                  var n = t[a][1][e];
                  return i(n ? n : e)
              }, u, u.exports, e, t, n, r)
          }
          return n[a].exports
      }
      for (var o = "function" == typeof require && require, a = 0; a < r.length; a++)
          i(r[a]);
      return i
  }({
      1: [function(e, t, n) {
          function r(e, t) {
              for (; e && e.nodeType !== i; ) {
                  if (e.matches(t))
                      return e;
                  e = e.parentNode
              }
          }
          var i = 9;
          if ("undefined" != typeof Element && !Element.prototype.matches) {
              var o = Element.prototype;
              o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
          }
          t.exports = r
      }
      , {}],
      2: [function(e, t, n) {
          function r(e, t, n, r, o) {
              var a = i.apply(this, arguments);
              return e.addEventListener(n, a, o),
              {
                  destroy: function() {
                      e.removeEventListener(n, a, o)
                  }
              }
          }
          function i(e, t, n, r) {
              return function(n) {
                  n.delegateTarget = o(n.target, t),
                  n.delegateTarget && r.call(e, n)
              }
          }
          var o = e("./closest");
          t.exports = r
      }
      , {
          "./closest": 1
      }],
      3: [function(e, t, n) {
          n.node = function(e) {
              return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
          }
          ,
          n.nodeList = function(e) {
              var t = Object.prototype.toString.call(e);
              return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length"in e && (0 === e.length || n.node(e[0]))
          }
          ,
          n.string = function(e) {
              return "string" == typeof e || e instanceof String
          }
          ,
          n.fn = function(e) {
              return "[object Function]" === Object.prototype.toString.call(e)
          }
      }
      , {}],
      4: [function(e, t, n) {
          function r(e, t, n) {
              if (!e && !t && !n)
                  throw new Error("Missing required arguments");
              if (!s.string(t))
                  throw new TypeError("Second argument must be a String");
              if (!s.fn(n))
                  throw new TypeError("Third argument must be a Function");
              if (s.node(e))
                  return i(e, t, n);
              if (s.nodeList(e))
                  return o(e, t, n);
              if (s.string(e))
                  return a(e, t, n);
              throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
          }
          function i(e, t, n) {
              return e.addEventListener(t, n),
              {
                  destroy: function() {
                      e.removeEventListener(t, n)
                  }
              }
          }
          function o(e, t, n) {
              return Array.prototype.forEach.call(e, function(e) {
                  e.addEventListener(t, n)
              }),
              {
                  destroy: function() {
                      Array.prototype.forEach.call(e, function(e) {
                          e.removeEventListener(t, n)
                      })
                  }
              }
          }
          function a(e, t, n) {
              return l(document.body, e, t, n)
          }
          var s = e("./is")
            , l = e("delegate");
          t.exports = r
      }
      , {
          "./is": 3,
          delegate: 2
      }],
      5: [function(e, t, n) {
          function r(e) {
              var t;
              if ("SELECT" === e.nodeName)
                  e.focus(),
                  t = e.value;
              else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                  var n = e.hasAttribute("readonly");
                  n || e.setAttribute("readonly", ""),
                  e.select(),
                  e.setSelectionRange(0, e.value.length),
                  n || e.removeAttribute("readonly"),
                  t = e.value
              } else {
                  e.hasAttribute("contenteditable") && e.focus();
                  var r = window.getSelection()
                    , i = document.createRange();
                  i.selectNodeContents(e),
                  r.removeAllRanges(),
                  r.addRange(i),
                  t = r.toString()
              }
              return t
          }
          t.exports = r
      }
      , {}],
      6: [function(e, t, n) {
          function r() {}
          r.prototype = {
              on: function(e, t, n) {
                  var r = this.e || (this.e = {});
                  return (r[e] || (r[e] = [])).push({
                      fn: t,
                      ctx: n
                  }),
                  this
              },
              once: function(e, t, n) {
                  function r() {
                      i.off(e, r),
                      t.apply(n, arguments)
                  }
                  var i = this;
                  return r._ = t,
                  this.on(e, r, n)
              },
              emit: function(e) {
                  var t = [].slice.call(arguments, 1)
                    , n = ((this.e || (this.e = {}))[e] || []).slice()
                    , r = 0
                    , i = n.length;
                  for (r; r < i; r++)
                      n[r].fn.apply(n[r].ctx, t);
                  return this
              },
              off: function(e, t) {
                  var n = this.e || (this.e = {})
                    , r = n[e]
                    , i = [];
                  if (r && t)
                      for (var o = 0, a = r.length; o < a; o++)
                          r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                  return i.length ? n[e] = i : delete n[e],
                  this
              }
          },
          t.exports = r
      }
      , {}],
      7: [function(t, n, r) {
          !function(i, o) {
              if ("function" == typeof e && e.amd)
                  e(["module", "select"], o);
              else if (void 0 !== r)
                  o(n, t("select"));
              else {
                  var a = {
                      exports: {}
                  };
                  o(a, i.select),
                  i.clipboardAction = a.exports
              }
          }(this, function(e, t) {
              "use strict";
              function n(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }
              var r = function(e) {
                  return e && e.__esModule ? e : {
                      default: e
                  }
              }(t)
                , i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
                , o = function() {
                  function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          r.enumerable = r.enumerable || !1,
                          r.configurable = !0,
                          "value"in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r)
                      }
                  }
                  return function(t, n, r) {
                      return n && e(t.prototype, n),
                      r && e(t, r),
                      t
                  }
              }()
                , a = function() {
                  function e(t) {
                      n(this, e),
                      this.resolveOptions(t),
                      this.initSelection()
                  }
                  return o(e, [{
                      key: "resolveOptions",
                      value: function() {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                          this.action = e.action,
                          this.emitter = e.emitter,
                          this.target = e.target,
                          this.text = e.text,
                          this.trigger = e.trigger,
                          this.selectedText = ""
                      }
                  }, {
                      key: "initSelection",
                      value: function() {
                          this.text ? this.selectFake() : this.target && this.selectTarget()
                      }
                  }, {
                      key: "selectFake",
                      value: function() {
                          var e = this
                            , t = "rtl" == document.documentElement.getAttribute("dir");
                          this.removeFake(),
                          this.fakeHandlerCallback = function() {
                              return e.removeFake()
                          }
                          ,
                          this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0,
                          this.fakeElem = document.createElement("textarea"),
                          this.fakeElem.style.fontSize = "12pt",
                          this.fakeElem.style.border = "0",
                          this.fakeElem.style.padding = "0",
                          this.fakeElem.style.margin = "0",
                          this.fakeElem.style.position = "absolute",
                          this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                          var n = window.pageYOffset || document.documentElement.scrollTop;
                          this.fakeElem.style.top = n + "px",
                          this.fakeElem.setAttribute("readonly", ""),
                          this.fakeElem.value = this.text,
                          document.body.appendChild(this.fakeElem),
                          this.selectedText = (0,
                          r.default)(this.fakeElem),
                          this.copyText()
                      }
                  }, {
                      key: "removeFake",
                      value: function() {
                          this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback),
                          this.fakeHandler = null,
                          this.fakeHandlerCallback = null),
                          this.fakeElem && (document.body.removeChild(this.fakeElem),
                          this.fakeElem = null)
                      }
                  }, {
                      key: "selectTarget",
                      value: function() {
                          this.selectedText = (0,
                          r.default)(this.target),
                          this.copyText()
                      }
                  }, {
                      key: "copyText",
                      value: function() {
                          var e = void 0;
                          try {
                              e = document.execCommand(this.action)
                          } catch (t) {
                              e = !1
                          }
                          this.handleResult(e)
                      }
                  }, {
                      key: "handleResult",
                      value: function(e) {
                          this.emitter.emit(e ? "success" : "error", {
                              action: this.action,
                              text: this.selectedText,
                              trigger: this.trigger,
                              clearSelection: this.clearSelection.bind(this)
                          })
                      }
                  }, {
                      key: "clearSelection",
                      value: function() {
                          this.target && this.target.blur(),
                          window.getSelection().removeAllRanges()
                      }
                  }, {
                      key: "destroy",
                      value: function() {
                          this.removeFake()
                      }
                  }, {
                      key: "action",
                      set: function() {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                          if (this._action = e,
                          "copy" !== this._action && "cut" !== this._action)
                              throw new Error('Invalid "action" value, use either "copy" or "cut"')
                      },
                      get: function() {
                          return this._action
                      }
                  }, {
                      key: "target",
                      set: function(e) {
                          if (void 0 !== e) {
                              if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType)
                                  throw new Error('Invalid "target" value, use a valid Element');
                              if ("copy" === this.action && e.hasAttribute("disabled"))
                                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                              if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                  throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                              this._target = e
                          }
                      },
                      get: function() {
                          return this._target
                      }
                  }]),
                  e
              }();
              e.exports = a
          })
      }
      , {
          select: 5
      }],
      8: [function(t, n, r) {
          !function(i, o) {
              if ("function" == typeof e && e.amd)
                  e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], o);
              else if (void 0 !== r)
                  o(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
              else {
                  var a = {
                      exports: {}
                  };
                  o(a, i.clipboardAction, i.tinyEmitter, i.goodListener),
                  i.clipboard = a.exports
              }
          }(this, function(e, t, n, r) {
              "use strict";
              function i(e) {
                  return e && e.__esModule ? e : {
                      default: e
                  }
              }
              function o(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }
              function a(e, t) {
                  if (!e)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return !t || "object" != typeof t && "function" != typeof t ? e : t
              }
              function s(e, t) {
                  if ("function" != typeof t && null !== t)
                      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                  e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                      }
                  }),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
              }
              function l(e, t) {
                  var n = "data-clipboard-" + e;
                  if (t.hasAttribute(n))
                      return t.getAttribute(n)
              }
              var c = i(t)
                , u = i(n)
                , h = i(r)
                , d = function() {
                  function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          r.enumerable = r.enumerable || !1,
                          r.configurable = !0,
                          "value"in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r)
                      }
                  }
                  return function(t, n, r) {
                      return n && e(t.prototype, n),
                      r && e(t, r),
                      t
                  }
              }()
                , f = function(e) {
                  function t(e, n) {
                      o(this, t);
                      var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                      return r.resolveOptions(n),
                      r.listenClick(e),
                      r
                  }
                  return s(t, e),
                  d(t, [{
                      key: "resolveOptions",
                      value: function() {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                          this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                          this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                          this.text = "function" == typeof e.text ? e.text : this.defaultText
                      }
                  }, {
                      key: "listenClick",
                      value: function(e) {
                          var t = this;
                          this.listener = (0,
                          h.default)(e, "click", function(e) {
                              return t.onClick(e)
                          })
                      }
                  }, {
                      key: "onClick",
                      value: function(e) {
                          var t = e.delegateTarget || e.currentTarget;
                          this.clipboardAction && (this.clipboardAction = null),
                          this.clipboardAction = new c.default({
                              action: this.action(t),
                              target: this.target(t),
                              text: this.text(t),
                              trigger: t,
                              emitter: this
                          })
                      }
                  }, {
                      key: "defaultAction",
                      value: function(e) {
                          return l("action", e)
                      }
                  }, {
                      key: "defaultTarget",
                      value: function(e) {
                          var t = l("target", e);
                          if (t)
                              return document.querySelector(t)
                      }
                  }, {
                      key: "defaultText",
                      value: function(e) {
                          return l("text", e)
                      }
                  }, {
                      key: "destroy",
                      value: function() {
                          this.listener.destroy(),
                          this.clipboardAction && (this.clipboardAction.destroy(),
                          this.clipboardAction = null)
                      }
                  }], [{
                      key: "isSupported",
                      value: function() {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                            , t = "string" == typeof e ? [e] : e
                            , n = !!document.queryCommandSupported;
                          return t.forEach(function(e) {
                              n = n && !!document.queryCommandSupported(e)
                          }),
                          n
                      }
                  }]),
                  t
              }(u.default);
              e.exports = f
          })
      }
      , {
          "./clipboard-action": 7,
          "good-listener": 4,
          "tiny-emitter": 6
      }]
  }, {}, [8])(8)
}),
/*!

Holder - client side image placeholders
Version 2.9.4+cabil
© 2016 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function(e) {
  if (e.document) {
      var t = e.document;
      t.querySelectorAll || (t.querySelectorAll = function(n) {
          var r, i = t.createElement("style"), o = [];
          for (t.documentElement.firstChild.appendChild(i),
          t._qsa = [],
          i.styleSheet.cssText = n + "{x-qsa:expression(document._qsa && document._qsa.push(this))}",
          e.scrollBy(0, 0),
          i.parentNode.removeChild(i); t._qsa.length; )
              r = t._qsa.shift(),
              r.style.removeAttribute("x-qsa"),
              o.push(r);
          return t._qsa = null,
          o
      }
      ),
      t.querySelector || (t.querySelector = function(e) {
          var n = t.querySelectorAll(e);
          return n.length ? n[0] : null
      }
      ),
      t.getElementsByClassName || (t.getElementsByClassName = function(e) {
          return e = String(e).replace(/^|\s+/g, "."),
          t.querySelectorAll(e)
      }
      ),
      Object.keys || (Object.keys = function(e) {
          if (e !== Object(e))
              throw TypeError("Object.keys called on non-object");
          var t, n = [];
          for (t in e)
              Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
          return n
      }
      ),
      Array.prototype.forEach || (Array.prototype.forEach = function(e) {
          if (void 0 === this || null === this)
              throw TypeError();
          var t = Object(this)
            , n = t.length >>> 0;
          if ("function" != typeof e)
              throw TypeError();
          var r, i = arguments[1];
          for (r = 0; r < n; r++)
              r in t && e.call(i, t[r], r, t)
      }
      ),
      function(e) {
          var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          e.atob = e.atob || function(e) {
              e = String(e);
              var n, r = 0, i = [], o = 0, a = 0;
              if (e = e.replace(/\s/g, ""),
              e.length % 4 == 0 && (e = e.replace(/=+$/, "")),
              e.length % 4 == 1)
                  throw Error("InvalidCharacterError");
              if (/[^+\/0-9A-Za-z]/.test(e))
                  throw Error("InvalidCharacterError");
              for (; r < e.length; )
                  n = t.indexOf(e.charAt(r)),
                  o = o << 6 | n,
                  a += 6,
                  24 === a && (i.push(String.fromCharCode(o >> 16 & 255)),
                  i.push(String.fromCharCode(o >> 8 & 255)),
                  i.push(String.fromCharCode(255 & o)),
                  a = 0,
                  o = 0),
                  r += 1;
              return 12 === a ? (o >>= 4,
              i.push(String.fromCharCode(255 & o))) : 18 === a && (o >>= 2,
              i.push(String.fromCharCode(o >> 8 & 255)),
              i.push(String.fromCharCode(255 & o))),
              i.join("")
          }
          ,
          e.btoa = e.btoa || function(e) {
              e = String(e);
              var n, r, i, o, a, s, l, c = 0, u = [];
              if (/[^\x00-\xFF]/.test(e))
                  throw Error("InvalidCharacterError");
              for (; c < e.length; )
                  n = e.charCodeAt(c++),
                  r = e.charCodeAt(c++),
                  i = e.charCodeAt(c++),
                  o = n >> 2,
                  a = (3 & n) << 4 | r >> 4,
                  s = (15 & r) << 2 | i >> 6,
                  l = 63 & i,
                  c === e.length + 2 ? (s = 64,
                  l = 64) : c === e.length + 1 && (l = 64),
                  u.push(t.charAt(o), t.charAt(a), t.charAt(s), t.charAt(l));
              return u.join("")
          }
      }(e),
      Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function(e) {
          var t = this.__proto__ || this.constructor.prototype;
          return e in this && (!(e in t) || t[e] !== this[e])
      }
      ),
      function() {
          if ("performance"in e == 0 && (e.performance = {}),
          Date.now = Date.now || function() {
              return (new Date).getTime()
          }
          ,
          "now"in e.performance == 0) {
              var t = Date.now();
              performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart),
              e.performance.now = function() {
                  return Date.now() - t
              }
          }
      }(),
      e.requestAnimationFrame || (e.webkitRequestAnimationFrame && e.webkitCancelAnimationFrame ? function(e) {
          e.requestAnimationFrame = function(t) {
              return webkitRequestAnimationFrame(function() {
                  t(e.performance.now())
              })
          }
          ,
          e.cancelAnimationFrame = e.webkitCancelAnimationFrame
      }(e) : e.mozRequestAnimationFrame && e.mozCancelAnimationFrame ? function(e) {
          e.requestAnimationFrame = function(t) {
              return mozRequestAnimationFrame(function() {
                  t(e.performance.now())
              })
          }
          ,
          e.cancelAnimationFrame = e.mozCancelAnimationFrame
      }(e) : function(e) {
          e.requestAnimationFrame = function(t) {
              return e.setTimeout(t, 1e3 / 60)
          }
          ,
          e.cancelAnimationFrame = e.clearTimeout
      }(e))
  }
}(this),
function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Holder = t() : e.Holder = t()
}(this, function() {
  return function(e) {
      function t(r) {
          if (n[r])
              return n[r].exports;
          var i = n[r] = {
              exports: {},
              id: r,
              loaded: !1
          };
          return e[r].call(i.exports, i, i.exports, t),
          i.loaded = !0,
          i.exports
      }
      var n = {};
      return t.m = e,
      t.c = n,
      t.p = "",
      t(0)
  }([function(e, t, n) {
      e.exports = n(1)
  }
  , function(e, t, n) {
      (function(t) {
          function r(e, t, n, r) {
              var a = i(n.substr(n.lastIndexOf(e.domain)), e);
              a && o({
                  mode: null,
                  el: r,
                  flags: a,
                  engineSettings: t
              })
          }
          function i(e, t) {
              var n = {
                  theme: S(O.settings.themes.gray, null),
                  stylesheets: t.stylesheets,
                  instanceOptions: t
              }
                , r = e.indexOf("?")
                , i = [e];
              r !== -1 && (i = [e.slice(0, r), e.slice(r + 1)]);
              var o = i[0].split("/");
              n.holderURL = e;
              var a = o[1]
                , s = a.match(/([\d]+p?)x([\d]+p?)/);
              if (!s)
                  return !1;
              if (n.fluid = a.indexOf("p") !== -1,
              n.dimensions = {
                  width: s[1].replace("p", "%"),
                  height: s[2].replace("p", "%")
              },
              2 === i.length) {
                  var l = g.parse(i[1]);
                  if (v.truthy(l.ratio)) {
                      n.fluid = !0;
                      var c = parseFloat(n.dimensions.width.replace("%", ""))
                        , u = parseFloat(n.dimensions.height.replace("%", ""));
                      u = Math.floor(u / c * 100),
                      c = 100,
                      n.dimensions.width = c + "%",
                      n.dimensions.height = u + "%"
                  }
                  if (n.auto = v.truthy(l.auto),
                  l.bg && (n.theme.bg = v.parseColor(l.bg)),
                  l.fg && (n.theme.fg = v.parseColor(l.fg)),
                  l.bg && !l.fg && (n.autoFg = !0),
                  l.theme && n.instanceOptions.themes.hasOwnProperty(l.theme) && (n.theme = S(n.instanceOptions.themes[l.theme], null)),
                  l.text && (n.text = l.text),
                  l.textmode && (n.textmode = l.textmode),
                  l.size && (n.size = l.size),
                  l.font && (n.font = l.font),
                  l.align && (n.align = l.align),
                  l.lineWrap && (n.lineWrap = l.lineWrap),
                  n.nowrap = v.truthy(l.nowrap),
                  n.outline = v.truthy(l.outline),
                  v.truthy(l.random)) {
                      O.vars.cache.themeKeys = O.vars.cache.themeKeys || Object.keys(n.instanceOptions.themes);
                      var h = O.vars.cache.themeKeys[0 | Math.random() * O.vars.cache.themeKeys.length];
                      n.theme = S(n.instanceOptions.themes[h], null)
                  }
              }
              return n
          }
          function o(e) {
              var t = e.mode
                , n = e.el
                , r = e.flags
                , i = e.engineSettings
                , o = r.dimensions
                , s = r.theme
                , l = o.width + "x" + o.height;
              t = null == t ? r.fluid ? "fluid" : "image" : t;
              if (null != r.text && (s.text = r.text,
              "object" === n.nodeName.toLowerCase())) {
                  for (var h = s.text.split("\\n"), d = 0; d < h.length; d++)
                      h[d] = v.encodeHtmlEntity(h[d]);
                  s.text = h.join("\\n")
              }
              if (s.text) {
                  var f = s.text.match(/holder_([a-z]+)/g);
                  null !== f && f.forEach(function(e) {
                      "holder_dimensions" === e && (s.text = s.text.replace(e, l))
                  })
              }
              var A = r.holderURL
                , p = S(i, null);
              if (r.font && (s.font = r.font,
              !p.noFontFallback && "img" === n.nodeName.toLowerCase() && O.setup.supportsCanvas && "svg" === p.renderer && (p = S(p, {
                  renderer: "canvas"
              }))),
              r.font && "canvas" == p.renderer && (p.reRender = !0),
              "background" == t)
                  null == n.getAttribute("data-background-src") && b.setAttr(n, {
                      "data-background-src": A
                  });
              else {
                  var g = {};
                  g[O.vars.dataAttr] = A,
                  b.setAttr(n, g)
              }
              r.theme = s,
              n.holderData = {
                  flags: r,
                  engineSettings: p
              },
              "image" != t && "fluid" != t || b.setAttr(n, {
                  alt: s.text ? s.text + " [" + l + "]" : l
              });
              var m = {
                  mode: t,
                  el: n,
                  holderSettings: {
                      dimensions: o,
                      theme: s,
                      flags: r
                  },
                  engineSettings: p
              };
              "image" == t ? (r.auto || (n.style.width = o.width + "px",
              n.style.height = o.height + "px"),
              "html" == p.renderer ? n.style.backgroundColor = s.bg : (a(m),
              "exact" == r.textmode && (n.holderData.resizeUpdate = !0,
              O.vars.resizableImages.push(n),
              c(n)))) : "background" == t && "html" != p.renderer ? a(m) : "fluid" == t && (n.holderData.resizeUpdate = !0,
              "%" == o.height.slice(-1) ? n.style.height = o.height : null != r.auto && r.auto || (n.style.height = o.height + "px"),
              "%" == o.width.slice(-1) ? n.style.width = o.width : null != r.auto && r.auto || (n.style.width = o.width + "px"),
              "inline" != n.style.display && "" !== n.style.display && "none" != n.style.display || (n.style.display = "block"),
              u(n),
              "html" == p.renderer ? n.style.backgroundColor = s.bg : (O.vars.resizableImages.push(n),
              c(n)))
          }
          function a(e) {
              function n() {
                  var t = null;
                  switch (l.renderer) {
                  case "canvas":
                      t = C(u, e);
                      break;
                  case "svg":
                      t = E(u, e);
                      break;
                  default:
                      throw "Holder: invalid renderer: " + l.renderer
                  }
                  return t
              }
              var r = null
                , i = e.mode
                , o = e.el
                , a = e.holderSettings
                , l = e.engineSettings;
              switch (l.renderer) {
              case "svg":
                  if (!O.setup.supportsSVG)
                      return;
                  break;
              case "canvas":
                  if (!O.setup.supportsCanvas)
                      return;
                  break;
              default:
                  return
              }
              var c = {
                  width: a.dimensions.width,
                  height: a.dimensions.height,
                  theme: a.theme,
                  flags: a.flags
              }
                , u = s(c);
              if (null == (r = n()))
                  throw "Holder: couldn't render placeholder";
              "background" == i ? (o.style.backgroundImage = "url(" + r + ")",
              l.noBackgroundSize || (o.style.backgroundSize = c.width + "px " + c.height + "px")) : ("img" === o.nodeName.toLowerCase() ? b.setAttr(o, {
                  src: r
              }) : "object" === o.nodeName.toLowerCase() && b.setAttr(o, {
                  data: r,
                  type: "image/svg+xml"
              }),
              l.reRender && t.setTimeout(function() {
                  var e = n();
                  if (null == e)
                      throw "Holder: couldn't render placeholder";
                  "img" === o.nodeName.toLowerCase() ? b.setAttr(o, {
                      src: e
                  }) : "object" === o.nodeName.toLowerCase() && b.setAttr(o, {
                      data: e,
                      type: "image/svg+xml"
                  })
              }, 150)),
              b.setAttr(o, {
                  "data-holder-rendered": !0
              })
          }
          function s(e) {
              function t(e, t, n, r) {
                  t.width = n,
                  t.height = r,
                  e.width = Math.max(e.width, t.width),
                  e.height += t.height
              }
              var n = O.defaults.size;
              switch (parseFloat(e.theme.size) ? n = e.theme.size : parseFloat(e.flags.size) && (n = e.flags.size),
              e.font = {
                  family: e.theme.font ? e.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
                  size: l(e.width, e.height, n, O.defaults.scale),
                  units: e.theme.units ? e.theme.units : O.defaults.units,
                  weight: e.theme.fontweight ? e.theme.fontweight : "bold"
              },
              e.text = e.theme.text || Math.floor(e.width) + "x" + Math.floor(e.height),
              e.noWrap = e.theme.nowrap || e.flags.nowrap,
              e.align = e.theme.align || e.flags.align || "center",
              e.flags.textmode) {
              case "literal":
                  e.text = e.flags.dimensions.width + "x" + e.flags.dimensions.height;
                  break;
              case "exact":
                  if (!e.flags.exactDimensions)
                      break;
                  e.text = Math.floor(e.flags.exactDimensions.width) + "x" + Math.floor(e.flags.exactDimensions.height)
              }
              var r = e.flags.lineWrap || O.setup.lineWrapRatio
                , i = e.width * r
                , o = i
                , a = new m({
                  width: e.width,
                  height: e.height
              })
                , s = a.Shape
                , c = new s.Rect("holderBg",{
                  fill: e.theme.bg
              });
              if (c.resize(e.width, e.height),
              a.root.add(c),
              e.flags.outline) {
                  var u = new w(c.properties.fill);
                  u = u.lighten(u.lighterThan("7f7f7f") ? -.1 : .1),
                  c.properties.outline = {
                      fill: u.toHex(!0),
                      width: 2
                  }
              }
              var h = e.theme.fg;
              if (e.flags.autoFg) {
                  var d = new w(c.properties.fill)
                    , f = new w("fff")
                    , A = new w("000",{
                      alpha: .285714
                  });
                  h = d.blendAlpha(d.lighterThan("7f7f7f") ? A : f).toHex(!0)
              }
              var p = new s.Group("holderTextGroup",{
                  text: e.text,
                  align: e.align,
                  font: e.font,
                  fill: h
              });
              p.moveTo(null, null, 1),
              a.root.add(p);
              var g = p.textPositionData = M(a);
              if (!g)
                  throw "Holder: staging fallback not supported yet.";
              p.properties.leading = g.boundingBox.height;
              var v = null
                , y = null;
              if (g.lineCount > 1) {
                  var b, x = 0, E = 0, C = 0;
                  y = new s.Group("line" + C),
                  "left" !== e.align && "right" !== e.align || (o = e.width * (1 - 2 * (1 - r)));
                  for (var S = 0; S < g.words.length; S++) {
                      var k = g.words[S];
                      v = new s.Text(k.text);
                      var T = "\\n" == k.text;
                      !e.noWrap && (x + k.width >= o || T === !0) && (t(p, y, x, p.properties.leading),
                      p.add(y),
                      x = 0,
                      E += p.properties.leading,
                      C += 1,
                      y = new s.Group("line" + C),
                      y.y = E),
                      T !== !0 && (v.moveTo(x, 0),
                      x += g.spaceWidth + k.width,
                      y.add(v))
                  }
                  if (t(p, y, x, p.properties.leading),
                  p.add(y),
                  "left" === e.align)
                      p.moveTo(e.width - i, null, null);
                  else if ("right" === e.align) {
                      for (b in p.children)
                          y = p.children[b],
                          y.moveTo(e.width - y.width, null, null);
                      p.moveTo(0 - (e.width - i), null, null)
                  } else {
                      for (b in p.children)
                          y = p.children[b],
                          y.moveTo((p.width - y.width) / 2, null, null);
                      p.moveTo((e.width - p.width) / 2, null, null)
                  }
                  p.moveTo(null, (e.height - p.height) / 2, null),
                  (e.height - p.height) / 2 < 0 && p.moveTo(null, 0, null)
              } else
                  v = new s.Text(e.text),
                  y = new s.Group("line0"),
                  y.add(v),
                  p.add(y),
                  "left" === e.align ? p.moveTo(e.width - i, null, null) : "right" === e.align ? p.moveTo(0 - (e.width - i), null, null) : p.moveTo((e.width - g.boundingBox.width) / 2, null, null),
                  p.moveTo(null, (e.height - g.boundingBox.height) / 2, null);
              return a
          }
          function l(e, t, n, r) {
              var i = parseInt(e, 10)
                , o = parseInt(t, 10)
                , a = Math.max(i, o)
                , s = Math.min(i, o)
                , l = .8 * Math.min(s, a * r);
              return Math.round(Math.max(n, l))
          }
          function c(e) {
              var t;
              t = null == e || null == e.nodeType ? O.vars.resizableImages : [e];
              for (var n = 0, r = t.length; n < r; n++) {
                  var i = t[n];
                  if (i.holderData) {
                      var o = i.holderData.flags
                        , s = k(i);
                      if (s) {
                          if (!i.holderData.resizeUpdate)
                              continue;
                          if (o.fluid && o.auto) {
                              var l = i.holderData.fluidConfig;
                              switch (l.mode) {
                              case "width":
                                  s.height = s.width / l.ratio;
                                  break;
                              case "height":
                                  s.width = s.height * l.ratio
                              }
                          }
                          var c = {
                              mode: "image",
                              holderSettings: {
                                  dimensions: s,
                                  theme: o.theme,
                                  flags: o
                              },
                              el: i,
                              engineSettings: i.holderData.engineSettings
                          };
                          "exact" == o.textmode && (o.exactDimensions = s,
                          c.holderSettings.dimensions = o.dimensions),
                          a(c)
                      } else
                          d(i)
                  }
              }
          }
          function u(e) {
              if (e.holderData) {
                  var t = k(e);
                  if (t) {
                      var n = e.holderData.flags
                        , r = {
                          fluidHeight: "%" == n.dimensions.height.slice(-1),
                          fluidWidth: "%" == n.dimensions.width.slice(-1),
                          mode: null,
                          initialDimensions: t
                      };
                      r.fluidWidth && !r.fluidHeight ? (r.mode = "width",
                      r.ratio = r.initialDimensions.width / parseFloat(n.dimensions.height)) : !r.fluidWidth && r.fluidHeight && (r.mode = "height",
                      r.ratio = parseFloat(n.dimensions.width) / r.initialDimensions.height),
                      e.holderData.fluidConfig = r
                  } else
                      d(e)
              }
          }
          function h() {
              var e, n = [];
              Object.keys(O.vars.invisibleImages).forEach(function(t) {
                  e = O.vars.invisibleImages[t],
                  k(e) && "img" == e.nodeName.toLowerCase() && (n.push(e),
                  delete O.vars.invisibleImages[t])
              }),
              n.length && j.run({
                  images: n
              }),
              setTimeout(function() {
                  t.requestAnimationFrame(h)
              }, 10)
          }
          function d(e) {
              e.holderData.invisibleId || (O.vars.invisibleId += 1,
              O.vars.invisibleImages["i" + O.vars.invisibleId] = e,
              e.holderData.invisibleId = O.vars.invisibleId)
          }
          function f(e) {
              O.vars.debounceTimer || e.call(this),
              O.vars.debounceTimer && t.clearTimeout(O.vars.debounceTimer),
              O.vars.debounceTimer = t.setTimeout(function() {
                  O.vars.debounceTimer = null,
                  e.call(this)
              }, O.setup.debounce)
          }
          function A() {
              f(function() {
                  c(null)
              })
          }
          var p = n(2)
            , g = n(3)
            , m = n(6)
            , v = n(7)
            , y = n(8)
            , b = n(9)
            , w = n(10)
            , x = n(11)
            , E = n(12)
            , C = n(15)
            , S = v.extend
            , k = v.dimensionCheck
            , T = x.svg_ns
            , j = {
              version: x.version,
              addTheme: function(e, t) {
                  return null != e && null != t && (O.settings.themes[e] = t),
                  delete O.vars.cache.themeKeys,
                  this
              },
              addImage: function(e, t) {
                  return b.getNodeArray(t).forEach(function(t) {
                      var n = b.newEl("img")
                        , r = {};
                      r[O.setup.dataAttr] = e,
                      b.setAttr(n, r),
                      t.appendChild(n)
                  }),
                  this
              },
              setResizeUpdate: function(e, t) {
                  e.holderData && (e.holderData.resizeUpdate = !!t,
                  e.holderData.resizeUpdate && c(e))
              },
              run: function(e) {
                  e = e || {};
                  var n = {}
                    , a = S(O.settings, e);
                  O.vars.preempted = !0,
                  O.vars.dataAttr = a.dataAttr || O.setup.dataAttr,
                  n.renderer = a.renderer ? a.renderer : O.setup.renderer,
                  O.setup.renderers.join(",").indexOf(n.renderer) === -1 && (n.renderer = O.setup.supportsSVG ? "svg" : O.setup.supportsCanvas ? "canvas" : "html");
                  var s = b.getNodeArray(a.images)
                    , l = b.getNodeArray(a.bgnodes)
                    , c = b.getNodeArray(a.stylenodes)
                    , u = b.getNodeArray(a.objects);
                  return n.stylesheets = [],
                  n.svgXMLStylesheet = !0,
                  n.noFontFallback = !!a.noFontFallback,
                  n.noBackgroundSize = !!a.noBackgroundSize,
                  c.forEach(function(e) {
                      if (e.attributes.rel && e.attributes.href && "stylesheet" == e.attributes.rel.value) {
                          var t = e.attributes.href.value
                            , r = b.newEl("a");
                          r.href = t;
                          var i = r.protocol + "//" + r.host + r.pathname + r.search;
                          n.stylesheets.push(i)
                      }
                  }),
                  l.forEach(function(e) {
                      if (t.getComputedStyle) {
                          var r = t.getComputedStyle(e, null).getPropertyValue("background-image")
                            , s = e.getAttribute("data-background-src")
                            , l = s || r
                            , c = null
                            , u = a.domain + "/"
                            , h = l.indexOf(u);
                          if (0 === h)
                              c = l;
                          else if (1 === h && "?" === l[0])
                              c = l.slice(1);
                          else {
                              var d = l.substr(h).match(/([^\"]*)"?\)/);
                              if (null !== d)
                                  c = d[1];
                              else if (0 === l.indexOf("url("))
                                  throw "Holder: unable to parse background URL: " + l
                          }
                          if (c) {
                              var f = i(c, a);
                              f && o({
                                  mode: "background",
                                  el: e,
                                  flags: f,
                                  engineSettings: n
                              })
                          }
                      }
                  }),
                  u.forEach(function(e) {
                      var t = {};
                      try {
                          t.data = e.getAttribute("data"),
                          t.dataSrc = e.getAttribute(O.vars.dataAttr)
                      } catch (e) {}
                      var i = null != t.data && 0 === t.data.indexOf(a.domain)
                        , o = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain);
                      i ? r(a, n, t.data, e) : o && r(a, n, t.dataSrc, e)
                  }),
                  s.forEach(function(e) {
                      var t = {};
                      try {
                          t.src = e.getAttribute("src"),
                          t.dataSrc = e.getAttribute(O.vars.dataAttr),
                          t.rendered = e.getAttribute("data-holder-rendered")
                      } catch (e) {}
                      var i = null != t.src
                        , o = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain)
                        , s = null != t.rendered && "true" == t.rendered;
                      i ? 0 === t.src.indexOf(a.domain) ? r(a, n, t.src, e) : o && (s ? r(a, n, t.dataSrc, e) : function(e, t, n, i, o) {
                          v.imageExists(e, function(e) {
                              e || r(t, n, i, o)
                          })
                      }(t.src, a, n, t.dataSrc, e)) : o && r(a, n, t.dataSrc, e)
                  }),
                  this
              }
          }
            , O = {
              settings: {
                  domain: "holder.js",
                  images: "img",
                  objects: "object",
                  bgnodes: "body .holderjs",
                  stylenodes: "head link.holderjs",
                  themes: {
                      gray: {
                          bg: "#EEEEEE",
                          fg: "#AAAAAA"
                      },
                      social: {
                          bg: "#3a5a97",
                          fg: "#FFFFFF"
                      },
                      industrial: {
                          bg: "#434A52",
                          fg: "#C2F200"
                      },
                      sky: {
                          bg: "#0D8FDB",
                          fg: "#FFFFFF"
                      },
                      vine: {
                          bg: "#39DBAC",
                          fg: "#1E292C"
                      },
                      lava: {
                          bg: "#F8591A",
                          fg: "#1C2846"
                      }
                  }
              },
              defaults: {
                  size: 10,
                  units: "pt",
                  scale: 1 / 16
              }
          }
            , M = function() {
              var e = null
                , t = null
                , n = null;
              return function(r) {
                  var i = r.root;
                  if (O.setup.supportsSVG) {
                      var o = !1;
                      null != e && e.parentNode === document.body || (o = !0),
                      e = y.initSVG(e, i.properties.width, i.properties.height),
                      e.style.display = "block",
                      o && (t = b.newEl("text", T),
                      n = function(e) {
                          return document.createTextNode(e)
                      }(null),
                      b.setAttr(t, {
                          x: 0
                      }),
                      t.appendChild(n),
                      e.appendChild(t),
                      document.body.appendChild(e),
                      e.style.visibility = "hidden",
                      e.style.position = "absolute",
                      e.style.top = "-100%",
                      e.style.left = "-100%");
                      var a = i.children.holderTextGroup
                        , s = a.properties;
                      b.setAttr(t, {
                          y: s.font.size,
                          style: v.cssProps({
                              "font-weight": s.font.weight,
                              "font-size": s.font.size + s.font.units,
                              "font-family": s.font.family
                          })
                      }),
                      n.nodeValue = s.text;
                      var l = t.getBBox()
                        , c = Math.ceil(l.width / i.properties.width)
                        , u = s.text.split(" ")
                        , h = s.text.match(/\\n/g);
                      c += null == h ? 0 : h.length,
                      n.nodeValue = s.text.replace(/[ ]+/g, "");
                      var d = t.getComputedTextLength()
                        , f = l.width - d
                        , A = Math.round(f / Math.max(1, u.length - 1))
                        , p = [];
                      if (c > 1) {
                          n.nodeValue = "";
                          for (var g = 0; g < u.length; g++)
                              if (0 !== u[g].length) {
                                  n.nodeValue = v.decodeHtmlEntity(u[g]);
                                  var m = t.getBBox();
                                  p.push({
                                      text: u[g],
                                      width: m.width
                                  })
                              }
                      }
                      return e.style.display = "none",
                      {
                          spaceWidth: A,
                          lineCount: c,
                          boundingBox: l,
                          words: p
                      }
                  }
                  return !1
              }
          }();
          for (var D in O.flags)
              O.flags.hasOwnProperty(D) && (O.flags[D].match = function(e) {
                  return e.match(this.regex)
              }
              );
          O.setup = {
              renderer: "html",
              debounce: 100,
              ratio: 1,
              supportsCanvas: !1,
              supportsSVG: !1,
              lineWrapRatio: .9,
              dataAttr: "data-src",
              renderers: ["html", "canvas", "svg"]
          },
          O.vars = {
              preempted: !1,
              resizableImages: [],
              invisibleImages: {},
              invisibleId: 0,
              visibilityCheckStarted: !1,
              debounceTimer: null,
              cache: {}
          },
          function() {
              var e = b.newEl("canvas");
              e.getContext && e.toDataURL("image/png").indexOf("data:image/png") != -1 && (O.setup.renderer = "canvas",
              O.setup.supportsCanvas = !0),
              document.createElementNS && document.createElementNS(T, "svg").createSVGRect && (O.setup.renderer = "svg",
              O.setup.supportsSVG = !0)
          }(),
          function() {
              O.vars.visibilityCheckStarted || (t.requestAnimationFrame(h),
              O.vars.visibilityCheckStarted = !0)
          }(),
          p && p(function() {
              O.vars.preempted || j.run(),
              t.addEventListener ? (t.addEventListener("resize", A, !1),
              t.addEventListener("orientationchange", A, !1)) : t.attachEvent("onresize", A),
              "object" == typeof t.Turbolinks && t.document.addEventListener("page:change", function() {
                  j.run()
              })
          }),
          e.exports = j
      }
      ).call(t, function() {
          return this
      }())
  }
  , function(e, t) {
      e.exports = "undefined" != typeof window && function(e) {
          function t(e) {
              if (!w) {
                  if (!a.body)
                      return i(t);
                  for (w = !0; e = x.shift(); )
                      i(e)
              }
          }
          function n(e) {
              (y || e.type === l || a[d] === h) && (r(),
              t())
          }
          function r() {
              y ? (a[v](g, n, c),
              e[v](l, n, c)) : (a[A](m, n),
              e[A](u, n))
          }
          function i(e, t) {
              setTimeout(e, +t >= 0 ? t : 1)
          }
          function o(e) {
              w ? i(e) : x.push(e)
          }
          null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function e() {
              document.removeEventListener("DOMContentLoaded", e, !1),
              document.readyState = "complete"
          }, !1),
          document.readyState = "loading");
          var a = e.document
            , s = a.documentElement
            , l = "load"
            , c = !1
            , u = "on" + l
            , h = "complete"
            , d = "readyState"
            , f = "attachEvent"
            , A = "detachEvent"
            , p = "addEventListener"
            , g = "DOMContentLoaded"
            , m = "onreadystatechange"
            , v = "removeEventListener"
            , y = p in a
            , b = c
            , w = c
            , x = [];
          if (a[d] === h)
              i(t);
          else if (y)
              a[p](g, n, c),
              e[p](l, n, c);
          else {
              a[f](m, n),
              e[f](u, n);
              try {
                  b = null == e.frameElement && s
              } catch (e) {}
              b && b.doScroll && function e() {
                  if (!w) {
                      try {
                          b.doScroll("left")
                      } catch (t) {
                          return i(e, 50)
                      }
                      r(),
                      t()
                  }
              }()
          }
          return o.version = "1.4.0",
          o.isReady = function() {
              return w
          }
          ,
          o
      }(window)
  }
  , function(e, t, n) {
      var r = encodeURIComponent
        , i = decodeURIComponent
        , o = n(4)
        , a = n(5)
        , s = /(\w+)\[(\d+)\]/
        , l = /\w+\.\w+/;
      t.parse = function(e) {
          if ("string" != typeof e)
              return {};
          if ("" === (e = o(e)))
              return {};
          "?" === e.charAt(0) && (e = e.slice(1));
          for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
              var a, c, u, h = n[r].split("="), d = i(h[0]);
              if (a = s.exec(d))
                  t[a[1]] = t[a[1]] || [],
                  t[a[1]][a[2]] = i(h[1]);
              else if (a = l.test(d)) {
                  for (a = d.split("."),
                  c = t; a.length; )
                      if (u = a.shift(),
                      u.length) {
                          if (c[u]) {
                              if (c[u] && "object" != typeof c[u])
                                  break
                          } else
                              c[u] = {};
                          a.length || (c[u] = i(h[1])),
                          c = c[u]
                      }
              } else
                  t[h[0]] = null == h[1] ? "" : i(h[1])
          }
          return t
      }
      ,
      t.stringify = function(e) {
          if (!e)
              return "";
          var t = [];
          for (var n in e) {
              var i = e[n];
              if ("array" != a(i))
                  t.push(r(n) + "=" + r(e[n]));
              else
                  for (var o = 0; o < i.length; ++o)
                      t.push(r(n + "[" + o + "]") + "=" + r(i[o]))
          }
          return t.join("&")
      }
  }
  , function(e, t) {
      function n(e) {
          return e.replace(/^\s*|\s*$/g, "")
      }
      t = e.exports = n,
      t.left = function(e) {
          return e.replace(/^\s*/, "")
      }
      ,
      t.right = function(e) {
          return e.replace(/\s*$/, "")
      }
  }
  , function(e, t) {
      function n(e) {
          return !(null == e || !(e._isBuffer || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)))
      }
      var r = Object.prototype.toString;
      e.exports = function(e) {
          switch (r.call(e)) {
          case "[object Date]":
              return "date";
          case "[object RegExp]":
              return "regexp";
          case "[object Arguments]":
              return "arguments";
          case "[object Array]":
              return "array";
          case "[object Error]":
              return "error"
          }
          return null === e ? "null" : void 0 === e ? "undefined" : e !== e ? "nan" : e && 1 === e.nodeType ? "element" : n(e) ? "buffer" : typeof (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e))
      }
  }
  , function(e, t) {
      var n = function(e) {
          function t(e, t) {
              for (var n in t)
                  e[n] = t[n];
              return e
          }
          var n = 1
            , r = function(e) {
              n++,
              this.parent = null,
              this.children = {},
              this.id = n,
              this.name = "n" + n,
              void 0 !== e && (this.name = e),
              this.x = this.y = this.z = 0,
              this.width = this.height = 0
          };
          r.prototype.resize = function(e, t) {
              null != e && (this.width = e),
              null != t && (this.height = t)
          }
          ,
          r.prototype.moveTo = function(e, t, n) {
              this.x = null != e ? e : this.x,
              this.y = null != t ? t : this.y,
              this.z = null != n ? n : this.z
          }
          ,
          r.prototype.add = function(e) {
              var t = e.name;
              if (void 0 !== this.children[t])
                  throw "SceneGraph: child already exists: " + t;
              this.children[t] = e,
              e.parent = this
          }
          ;
          var i = function() {
              r.call(this, "root"),
              this.properties = e
          };
          i.prototype = new r;
          var o = function(e, n) {
              if (r.call(this, e),
              this.properties = {
                  fill: "#000000"
              },
              void 0 !== n)
                  t(this.properties, n);
              else if (void 0 !== e && "string" != typeof e)
                  throw "SceneGraph: invalid node name"
          };
          o.prototype = new r;
          var a = function() {
              o.apply(this, arguments),
              this.type = "group"
          };
          a.prototype = new o;
          var s = function() {
              o.apply(this, arguments),
              this.type = "rect"
          };
          s.prototype = new o;
          var l = function(e) {
              o.call(this),
              this.type = "text",
              this.properties.text = e
          };
          l.prototype = new o;
          var c = new i;
          return this.Shape = {
              Rect: s,
              Text: l,
              Group: a
          },
          this.root = c,
          this
      };
      e.exports = n
  }
  , function(e, t) {
      (function(e) {
          t.extend = function(e, t) {
              var n = {};
              for (var r in e)
                  e.hasOwnProperty(r) && (n[r] = e[r]);
              if (null != t)
                  for (var i in t)
                      t.hasOwnProperty(i) && (n[i] = t[i]);
              return n
          }
          ,
          t.cssProps = function(e) {
              var t = [];
              for (var n in e)
                  e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
              return t.join(";")
          }
          ,
          t.encodeHtmlEntity = function(e) {
              for (var t = [], n = 0, r = e.length - 1; r >= 0; r--)
                  n = e.charCodeAt(r),
                  n > 128 ? t.unshift(["&#", n, ";"].join("")) : t.unshift(e[r]);
              return t.join("")
          }
          ,
          t.imageExists = function(e, t) {
              var n = new Image;
              n.onerror = function() {
                  t.call(this, !1)
              }
              ,
              n.onload = function() {
                  t.call(this, !0)
              }
              ,
              n.src = e
          }
          ,
          t.decodeHtmlEntity = function(e) {
              return e.replace(/&#(\d+);/g, function(e, t) {
                  return String.fromCharCode(t)
              })
          }
          ,
          t.dimensionCheck = function(e) {
              var t = {
                  height: e.clientHeight,
                  width: e.clientWidth
              };
              return !(!t.height || !t.width) && t
          }
          ,
          t.truthy = function(e) {
              return "string" == typeof e ? "true" === e || "yes" === e || "1" === e || "on" === e || "✓" === e : !!e
          }
          ,
          t.parseColor = function(e) {
              var t, n = e.match(/(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i);
              return null !== n ? (t = n[1] || n[2],
              "#" !== t[0] ? "#" + t : t) : (n = e.match(/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/),
              null !== n ? t = "rgb(" + n.slice(1).join(",") + ")" : (n = e.match(/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/),
              null !== n ? t = "rgba(" + n.slice(1).join(",") + ")" : null))
          }
          ,
          t.canvasRatio = function() {
              var t = 1
                , n = 1;
              if (e.document) {
                  var r = e.document.createElement("canvas");
                  if (r.getContext) {
                      var i = r.getContext("2d");
                      t = e.devicePixelRatio || 1,
                      n = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1
                  }
              }
              return t / n
          }
      }
      ).call(t, function() {
          return this
      }())
  }
  , function(e, t, n) {
      (function(e) {
          var r = n(9)
            , i = "http://www.w3.org/2000/svg";
          t.initSVG = function(e, t, n) {
              var o, a, s = !1;
              e && e.querySelector ? null === (a = e.querySelector("style")) && (s = !0) : (e = r.newEl("svg", i),
              s = !0),
              s && (o = r.newEl("defs", i),
              a = r.newEl("style", i),
              r.setAttr(a, {
                  type: "text/css"
              }),
              o.appendChild(a),
              e.appendChild(o)),
              e.webkitMatchesSelector && e.setAttribute("xmlns", i);
              for (var l = 0; l < e.childNodes.length; l++)
                  8 === e.childNodes[l].nodeType && e.removeChild(e.childNodes[l]);
              for (; a.childNodes.length; )
                  a.removeChild(a.childNodes[0]);
              return r.setAttr(e, {
                  width: t,
                  height: n,
                  viewBox: "0 0 " + t + " " + n,
                  preserveAspectRatio: "none"
              }),
              e
          }
          ,
          t.svgStringToDataURI = function() {
              return function(t, n) {
                  return n ? "data:image/svg+xml;charset=UTF-8;base64," + btoa(e.unescape(encodeURIComponent(t))) : "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(t)
              }
          }(),
          t.serializeSVG = function(t, n) {
              if (e.XMLSerializer) {
                  var i = new XMLSerializer
                    , o = ""
                    , a = n.stylesheets;
                  if (n.svgXMLStylesheet) {
                      for (var s = r.createXML(), l = a.length - 1; l >= 0; l--) {
                          var c = s.createProcessingInstruction("xml-stylesheet", 'href="' + a[l] + '" rel="stylesheet"');
                          s.insertBefore(c, s.firstChild)
                      }
                      s.removeChild(s.documentElement),
                      o = i.serializeToString(s)
                  }
                  var u = i.serializeToString(t);
                  return u = u.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"),
                  o + u
              }
          }
      }
      ).call(t, function() {
          return this
      }())
  }
  , function(e, t) {
      (function(e) {
          t.newEl = function(t, n) {
              if (e.document)
                  return null == n ? e.document.createElement(t) : e.document.createElementNS(n, t)
          }
          ,
          t.setAttr = function(e, t) {
              for (var n in t)
                  e.setAttribute(n, t[n])
          }
          ,
          t.createXML = function() {
              if (e.DOMParser)
                  return (new DOMParser).parseFromString("<xml />", "application/xml")
          }
          ,
          t.getNodeArray = function(t) {
              var n = null;
              return "string" == typeof t ? n = document.querySelectorAll(t) : e.NodeList && t instanceof e.NodeList ? n = t : e.Node && t instanceof e.Node ? n = [t] : e.HTMLCollection && t instanceof e.HTMLCollection ? n = t : t instanceof Array ? n = t : null === t && (n = []),
              n = Array.prototype.slice.call(n)
          }
      }
      ).call(t, function() {
          return this
      }())
  }
  , function(e, t) {
      var n = function(e, t) {
          "string" == typeof e && (this.original = e,
          "#" === e.charAt(0) && (e = e.slice(1)),
          /[^a-f0-9]+/i.test(e) || (3 === e.length && (e = e.replace(/./g, "$&$&")),
          6 === e.length && (this.alpha = 1,
          t && t.alpha && (this.alpha = t.alpha),
          this.set(parseInt(e, 16)))))
      };
      n.rgb2hex = function(e, t, n) {
          function r(e) {
              var t = (0 | e).toString(16);
              return e < 16 && (t = "0" + t),
              t
          }
          return [e, t, n].map(r).join("")
      }
      ,
      n.hsl2rgb = function(e, t, n) {
          var r = e / 60
            , i = (1 - Math.abs(2 * n - 1)) * t
            , o = i * (1 - Math.abs(parseInt(r) % 2 - 1))
            , a = n - i / 2
            , s = 0
            , l = 0
            , c = 0;
          return r >= 0 && r < 1 ? (s = i,
          l = o) : r >= 1 && r < 2 ? (s = o,
          l = i) : r >= 2 && r < 3 ? (l = i,
          c = o) : r >= 3 && r < 4 ? (l = o,
          c = i) : r >= 4 && r < 5 ? (s = o,
          c = i) : r >= 5 && r < 6 && (s = i,
          c = o),
          s += a,
          l += a,
          c += a,
          s = parseInt(255 * s),
          l = parseInt(255 * l),
          c = parseInt(255 * c),
          [s, l, c]
      }
      ,
      n.prototype.set = function(e) {
          this.raw = e;
          var t = (16711680 & this.raw) >> 16
            , n = (65280 & this.raw) >> 8
            , r = 255 & this.raw
            , i = .2126 * t + .7152 * n + .0722 * r
            , o = -.09991 * t - .33609 * n + .436 * r
            , a = .615 * t - .55861 * n - .05639 * r;
          return this.rgb = {
              r: t,
              g: n,
              b: r
          },
          this.yuv = {
              y: i,
              u: o,
              v: a
          },
          this
      }
      ,
      n.prototype.lighten = function(e) {
          var t = Math.min(1, Math.max(0, Math.abs(e))) * (e < 0 ? -1 : 1)
            , r = 255 * t | 0
            , i = Math.min(255, Math.max(0, this.rgb.r + r))
            , o = Math.min(255, Math.max(0, this.rgb.g + r))
            , a = Math.min(255, Math.max(0, this.rgb.b + r));
          return new n(n.rgb2hex(i, o, a))
      }
      ,
      n.prototype.toHex = function(e) {
          return (e ? "#" : "") + this.raw.toString(16)
      }
      ,
      n.prototype.lighterThan = function(e) {
          return e instanceof n || (e = new n(e)),
          this.yuv.y > e.yuv.y
      }
      ,
      n.prototype.blendAlpha = function(e) {
          e instanceof n || (e = new n(e));
          var t = e
            , r = this
            , i = t.alpha * t.rgb.r + (1 - t.alpha) * r.rgb.r
            , o = t.alpha * t.rgb.g + (1 - t.alpha) * r.rgb.g
            , a = t.alpha * t.rgb.b + (1 - t.alpha) * r.rgb.b;
          return new n(n.rgb2hex(i, o, a))
      }
      ,
      e.exports = n
  }
  , function(e, t) {
      e.exports = {
          version: "2.9.4",
          svg_ns: "http://www.w3.org/2000/svg"
      }
  }
  , function(e, t, n) {
      function r(e, t) {
          return h.element({
              tag: t,
              width: e.width,
              height: e.height,
              fill: e.properties.fill
          })
      }
      function i(e) {
          return c.cssProps({
              fill: e.fill,
              "font-weight": e.font.weight,
              "font-family": e.font.family + ", monospace",
              "font-size": e.font.size + e.font.units
          })
      }
      function o(e, t, n) {
          var r = n / 2;
          return ["M", r, r, "H", e - r, "V", t - r, "H", r, "V", 0, "M", 0, r, "L", e, t - r, "M", 0, t - r, "L", e, r].join(" ")
      }
      var a = n(13)
        , s = n(8)
        , l = n(11)
        , c = n(7)
        , u = l.svg_ns
        , h = {
          element: function(e) {
              var t = e.tag
                , n = e.content || "";
              return delete e.tag,
              delete e.content,
              [t, n, e]
          }
      };
      e.exports = function(e, t) {
          var n = t.engineSettings
            , l = n.stylesheets
            , c = l.map(function(e) {
              return '<?xml-stylesheet rel="stylesheet" href="' + e + '"?>'
          }).join("\n")
            , d = "holder_" + Number(new Date).toString(16)
            , f = e.root
            , A = f.children.holderTextGroup
            , p = "#" + d + " text { " + i(A.properties) + " } ";
          A.y += .8 * A.textPositionData.boundingBox.height;
          var g = [];
          Object.keys(A.children).forEach(function(e) {
              var t = A.children[e];
              Object.keys(t.children).forEach(function(e) {
                  var n = t.children[e]
                    , r = A.x + t.x + n.x
                    , i = A.y + t.y + n.y
                    , o = h.element({
                      tag: "text",
                      content: n.properties.text,
                      x: r,
                      y: i
                  });
                  g.push(o)
              })
          });
          var m = h.element({
              tag: "g",
              content: g
          })
            , v = null;
          if (f.children.holderBg.properties.outline) {
              var y = f.children.holderBg.properties.outline;
              v = h.element({
                  tag: "path",
                  d: o(f.children.holderBg.width, f.children.holderBg.height, y.width),
                  "stroke-width": y.width,
                  stroke: y.fill,
                  fill: "none"
              })
          }
          var b = r(f.children.holderBg, "rect")
            , w = [];
          w.push(b),
          y && w.push(v),
          w.push(m);
          var x = h.element({
              tag: "g",
              id: d,
              content: w
          })
            , E = h.element({
              tag: "style",
              content: p,
              type: "text/css"
          })
            , C = h.element({
              tag: "defs",
              content: E
          })
            , S = h.element({
              tag: "svg",
              content: [C, x],
              width: f.properties.width,
              height: f.properties.height,
              xmlns: u,
              viewBox: [0, 0, f.properties.width, f.properties.height].join(" "),
              preserveAspectRatio: "none"
          })
            , k = a(S);
          return k = c + k[0],
          s.svgStringToDataURI(k, "background" === t.mode)
      }
  }
  , function(e, t, n) {
      n(14),
      e.exports = function e(t, n, r) {
          "use strict";
          function i(e, t) {
              if (null !== t && t !== !1 && void 0 !== t)
                  return "string" != typeof t && "object" != typeof t ? String(t) : t
          }
          var o, a, s, l, c = 1, u = !0;
          if (r = r || {},
          "string" == typeof t[0])
              t[0] = function(e) {
                  var t = e.match(/^[\w-]+/)
                    , n = {
                      tag: t ? t[0] : "div",
                      attr: {},
                      children: []
                  }
                    , i = e.match(/#([\w-]+)/)
                    , o = e.match(/\$([\w-]+)/)
                    , a = e.match(/\.[\w-]+/g);
                  return i && (n.attr.id = i[1],
                  r[i[1]] = n),
                  o && (r[o[1]] = n),
                  a && (n.attr.class = a.join(" ").replace(/\./g, "")),
                  e.match(/&$/g) && (u = !1),
                  n
              }(t[0]);
          else {
              if (!Array.isArray(t[0]))
                  throw new Error("First element of array must be a string, or an array and not " + JSON.stringify(t[0]));
              c = 0
          }
          for (; c < t.length; c++) {
              if (t[c] === !1 || null === t[c]) {
                  t[0] = !1;
                  break
              }
              if (void 0 !== t[c] && t[c] !== !0)
                  if ("string" == typeof t[c])
                      u && (t[c] = function(e) {
                          return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                      }(t[c])),
                      t[0].children.push(t[c]);
                  else if ("number" == typeof t[c])
                      t[0].children.push(t[c]);
                  else if (Array.isArray(t[c])) {
                      if (Array.isArray(t[c][0])) {
                          if (t[c].reverse().forEach(function(e) {
                              t.splice(c + 1, 0, e)
                          }),
                          0 !== c)
                              continue;
                          c++
                      }
                      e(t[c], n, r),
                      t[c][0] && t[0].children.push(t[c][0])
                  } else if ("function" == typeof t[c])
                      s = t[c];
                  else {
                      if ("object" != typeof t[c])
                          throw new TypeError('"' + t[c] + '" is not allowed as a value.');
                      for (a in t[c])
                          t[c].hasOwnProperty(a) && null !== t[c][a] && t[c][a] !== !1 && ("style" === a && "object" == typeof t[c][a] ? t[0].attr[a] = JSON.stringify(t[c][a], i).slice(2, -2).replace(/","/g, ";").replace(/":"/g, ":").replace(/\\"/g, "'") : t[0].attr[a] = t[c][a])
                  }
          }
          if (t[0] !== !1) {
              o = "<" + t[0].tag;
              for (l in t[0].attr)
                  t[0].attr.hasOwnProperty(l) && (o += " " + l + '="' + function(e) {
                      return e || 0 === e ? String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;") : ""
                  }(t[0].attr[l]) + '"');
              o += ">",
              t[0].children.forEach(function(e) {
                  o += e
              }),
              o += "</" + t[0].tag + ">",
              t[0] = o
          }
          return r[0] = t[0],
          s && s(t[0]),
          r
      }
  }
  , function(e, t) {
      "use strict";
      function n(e) {
          var t = "" + e
            , n = r.exec(t);
          if (!n)
              return t;
          var i, o = "", a = 0, s = 0;
          for (a = n.index; a < t.length; a++) {
              switch (t.charCodeAt(a)) {
              case 34:
                  i = "&quot;";
                  break;
              case 38:
                  i = "&amp;";
                  break;
              case 39:
                  i = "&#39;";
                  break;
              case 60:
                  i = "&lt;";
                  break;
              case 62:
                  i = "&gt;";
                  break;
              default:
                  continue
              }
              s !== a && (o += t.substring(s, a)),
              s = a + 1,
              o += i
          }
          return s !== a ? o + t.substring(s, a) : o
      }
      var r = /["'&<>]/;
      e.exports = n
  }
  , function(e, t, n) {
      var r = n(9)
        , i = n(7);
      e.exports = function() {
          var e = r.newEl("canvas")
            , t = null;
          return function(n) {
              null == t && (t = e.getContext("2d"));
              var r = i.canvasRatio()
                , o = n.root;
              e.width = r * o.properties.width,
              e.height = r * o.properties.height,
              t.textBaseline = "middle";
              var a = o.children.holderBg
                , s = r * a.width
                , l = r * a.height;
              t.fillStyle = a.properties.fill,
              t.fillRect(0, 0, s, l),
              a.properties.outline && (t.strokeStyle = a.properties.outline.fill,
              t.lineWidth = a.properties.outline.width,
              t.moveTo(1, 1),
              t.lineTo(s - 1, 1),
              t.lineTo(s - 1, l - 1),
              t.lineTo(1, l - 1),
              t.lineTo(1, 1),
              t.moveTo(0, 1),
              t.lineTo(s, l - 1),
              t.moveTo(0, l - 1),
              t.lineTo(s, 1),
              t.stroke());
              var c = o.children.holderTextGroup;
              t.font = c.properties.font.weight + " " + r * c.properties.font.size + c.properties.font.units + " " + c.properties.font.family + ", monospace",
              t.fillStyle = c.properties.fill;
              for (var u in c.children) {
                  var h = c.children[u];
                  for (var d in h.children) {
                      var f = h.children[d]
                        , A = r * (c.x + h.x + f.x)
                        , p = r * (c.y + h.y + f.y + c.properties.leading / 2);
                      t.fillText(f.properties.text, A, p)
                  }
              }
              return e.toDataURL("image/png")
          }
      }()
  }
  ])
}),
function(e, t) {
  t && (Holder = e.Holder)
}(this, "undefined" != typeof Meteor && "undefined" != typeof Package),
/*!
* JavaScript for Bootstrap's docs (https://getbootstrap.com)
* Copyright 2011-2017 The Bootstrap Authors
* Copyright 2011-2017 Twitter, Inc.
* Licensed under the Creative Commons Attribution 3.0 Unported License. For
* details, see https://creativecommons.org/licenses/by/3.0/.
*/
function(e) {
  "use strict";
  e(function() {
      e(".tooltip-demo").tooltip({
          selector: '[data-toggle="tooltip"]',
          container: "body"
      }),
      e('[data-toggle="popover"]').popover(),
      e(".tooltip-test").tooltip(),
      e(".popover-test").popover(),
      e('.bd-example-indeterminate [type="checkbox"]').prop("indeterminate", !0),
      e('.bd-content [href="#"]').click(function(e) {
          e.preventDefault()
      }),
      e("#exampleModal").on("show.bs.modal", function(t) {
          var n = e(t.relatedTarget)
            , r = n.data("whatever")
            , i = e(this);
          i.find(".modal-title").text("New message to " + r),
          i.find(".modal-body input").val(r)
      }),
      e(".bd-toggle-animated-progress").on("click", function() {
          e(this).siblings(".progress").find(".progress-bar-striped").toggleClass("progress-bar-animated")
      }),
      e(".highlight").each(function() {
          e(this).before('<div class="bd-clipboard"><span class="btn-clipboard" title="Copy to clipboard">Copy</span></div>'),
          e(".btn-clipboard").tooltip()
      });
      var t = new Clipboard(".btn-clipboard",{
          target: function(e) {
              return e.parentNode.nextElementSibling
          }
      });
      t.on("success", function(t) {
          e(t.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle"),
          t.clearSelection()
      }),
      t.on("error", function(t) {
          var n = /Mac/i.test(navigator.userAgent) ? "⌘" : "Ctrl-"
            , r = "Press " + n + "C to copy";
          e(t.trigger).attr("title", r).tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle")
      })
  })
}(jQuery),
function() {
  "use strict";
  anchors.options.placement = "left",
  anchors.add(".bd-content > h1, .bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5")
}();
