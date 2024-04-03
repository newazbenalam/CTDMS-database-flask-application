/*!
 * sweetalert2 v11.0.11
 * Released under the MIT License. https://sweetalert2.github.io/
 */
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t()
}(this, function() {
  "use strict";
  const l = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer"
  })
    , t = "SweetAlert2:"
    , o = e=>e.charAt(0).toUpperCase() + e.slice(1)
    , a = e=>Array.prototype.slice.call(e)
    , s = e=>{
      console.warn("".concat(t, " ").concat("object" == typeof e ? e.join(" ") : e))
  }
    , r = e=>{
      console.error("".concat(t, " ").concat(e))
  }
    , n = []
    , i = (e,t)=>{
      t = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'),
      n.includes(t) || (n.push(t),
      s(t))
  }
    , c = e=>"function" == typeof e ? e() : e
    , u = e=>e && "function" == typeof e.toPromise
    , d = e=>u(e) ? e.toPromise() : Promise.resolve(e)
    , p = e=>e && Promise.resolve(e) === e
    , m = e=>e instanceof Element || (e=>"object" == typeof e && e.jquery)(e);
  var e = e=>{
      const t = {};
      for (const n in e)
          t[e[n]] = "swal2-" + e[n];
      return t
  }
  ;
  const h = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"])
    , g = e(["success", "warning", "info", "question", "error"])
    , b = ()=>document.body.querySelector(".".concat(h.container))
    , f = e=>{
      const t = b();
      return t ? t.querySelector(e) : null
  }
    , y = e=>f(".".concat(e))
    , v = ()=>y(h.popup)
    , w = ()=>y(h.icon)
    , C = ()=>y(h.title)
    , k = ()=>y(h["html-container"])
    , A = ()=>y(h.image)
    , B = ()=>y(h["progress-steps"])
    , x = ()=>y(h["validation-message"])
    , P = ()=>f(".".concat(h.actions, " .").concat(h.confirm))
    , E = ()=>f(".".concat(h.actions, " .").concat(h.deny));
  const S = ()=>f(".".concat(h.loader))
    , O = ()=>f(".".concat(h.actions, " .").concat(h.cancel))
    , T = ()=>y(h.actions)
    , L = ()=>y(h.footer)
    , j = ()=>y(h["timer-progress-bar"])
    , D = ()=>y(h.close)
    , I = ()=>{
      const e = a(v().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>(e = parseInt(e.getAttribute("tabindex")),
      (t = parseInt(t.getAttribute("tabindex"))) < e ? 1 : e < t ? -1 : 0));
      var t = a(v().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e=>"-1" !== e.getAttribute("tabindex"));
      return (t=>{
          const n = [];
          for (let e = 0; e < t.length; e++)
              -1 === n.indexOf(t[e]) && n.push(t[e]);
          return n
      }
      )(e.concat(t)).filter(e=>G(e))
  }
    , M = ()=>!q() && !document.body.classList.contains(h["no-backdrop"])
    , q = ()=>document.body.classList.contains(h["toast-shown"]);
  const H = {
      previousBodyPadding: null
  }
    , V = (t,e)=>{
      if (t.textContent = "",
      e) {
          const n = new DOMParser
            , o = n.parseFromString(e, "text/html");
          a(o.querySelector("head").childNodes).forEach(e=>{
              t.appendChild(e)
          }
          ),
          a(o.querySelector("body").childNodes).forEach(e=>{
              t.appendChild(e)
          }
          )
      }
  }
    , N = (t,e)=>{
      if (!e)
          return !1;
      var n = e.split(/\s+/);
      for (let e = 0; e < n.length; e++)
          if (!t.classList.contains(n[e]))
              return !1;
      return !0
  }
    , U = (e,t,n)=>{
      var o, i;
      if (o = e,
      i = t,
      a(o.classList).forEach(e=>{
          Object.values(h).includes(e) || Object.values(g).includes(e) || Object.values(i.showClass).includes(e) || o.classList.remove(e)
      }
      ),
      t.customClass && t.customClass[n]) {
          if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach)
              return s("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
          W(e, t.customClass[n])
      }
  }
    , F = (e,t)=>{
      if (!t)
          return null;
      switch (t) {
      case "select":
      case "textarea":
      case "file":
          return K(e, h[t]);
      case "checkbox":
          return e.querySelector(".".concat(h.checkbox, " input"));
      case "radio":
          return e.querySelector(".".concat(h.radio, " input:checked")) || e.querySelector(".".concat(h.radio, " input:first-child"));
      case "range":
          return e.querySelector(".".concat(h.range, " input"));
      default:
          return K(e, h.input)
      }
  }
    , R = e=>{
      var t;
      e.focus(),
      "file" !== e.type && (t = e.value,
      e.value = "",
      e.value = t)
  }
    , z = (e,t,n)=>{
      e && t && (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(t=>{
          e.forEach ? e.forEach(e=>{
              n ? e.classList.add(t) : e.classList.remove(t)
          }
          ) : n ? e.classList.add(t) : e.classList.remove(t)
      }
      )
  }
    , W = (e,t)=>{
      z(e, t, !0)
  }
    , _ = (e,t)=>{
      z(e, t, !1)
  }
    , K = (t,n)=>{
      for (let e = 0; e < t.childNodes.length; e++)
          if (N(t.childNodes[e], n))
              return t.childNodes[e]
  }
    , Y = (e,t,n)=>{
      (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t)
  }
    , Z = (e,t="flex")=>{
      e.style.display = t
  }
    , J = e=>{
      e.style.display = "none"
  }
    , $ = (e,t,n,o)=>{
      const i = e.querySelector(t);
      i && (i.style[n] = o)
  }
    , X = (e,t,n)=>{
      t ? Z(e, n) : J(e)
  }
    , G = e=>!(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length))
    , Q = ()=>!G(P()) && !G(E()) && !G(O())
    , ee = e=>!!(e.scrollHeight > e.clientHeight)
    , te = e=>{
      const t = window.getComputedStyle(e);
      var n = parseFloat(t.getPropertyValue("animation-duration") || "0")
        , e = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return 0 < n || 0 < e
  }
    , ne = (e,t=!1)=>{
      const n = j();
      G(n) && (t && (n.style.transition = "none",
      n.style.width = "100%"),
      setTimeout(()=>{
          n.style.transition = "width ".concat(e / 1e3, "s linear"),
          n.style.width = "0%"
      }
      , 10))
  }
    , oe = ()=>"undefined" == typeof window || "undefined" == typeof document
    , ie = '\n <div aria-labelledby="'.concat(h.title, '" aria-describedby="').concat(h["html-container"], '" class="').concat(h.popup, '" tabindex="-1">\n   <button type="button" class="').concat(h.close, '"></button>\n   <ul class="').concat(h["progress-steps"], '"></ul>\n   <div class="').concat(h.icon, '"></div>\n   <img class="').concat(h.image, '" />\n   <h2 class="').concat(h.title, '" id="').concat(h.title, '"></h2>\n   <div class="').concat(h["html-container"], '"></div>\n   <input class="').concat(h.input, '" />\n   <input type="file" class="').concat(h.file, '" />\n   <div class="').concat(h.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(h.select, '"></select>\n   <div class="').concat(h.radio, '"></div>\n   <label for="').concat(h.checkbox, '" class="').concat(h.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(h.label, '"></span>\n   </label>\n   <textarea class="').concat(h.textarea, '"></textarea>\n   <div class="').concat(h["validation-message"], '" id="').concat(h["validation-message"], '"></div>\n   <div class="').concat(h.actions, '">\n     <div class="').concat(h.loader, '"></div>\n     <button type="button" class="').concat(h.confirm, '"></button>\n     <button type="button" class="').concat(h.deny, '"></button>\n     <button type="button" class="').concat(h.cancel, '"></button>\n   </div>\n   <div class="').concat(h.footer, '"></div>\n   <div class="').concat(h["timer-progress-bar-container"], '">\n     <div class="').concat(h["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, "")
    , ae = ()=>{
      cn.isVisible() && cn.resetValidationMessage()
  }
    , se = e=>{
      var t = (()=>{
          const e = b();
          return !!e && (e.remove(),
          _([document.documentElement, document.body], [h["no-backdrop"], h["toast-shown"], h["has-column"]]),
          !0)
      }
      )();
      if (oe())
          r("SweetAlert2 requires document to initialize");
      else {
          const n = document.createElement("div");
          n.className = h.container,
          t && W(n, h["no-transition"]),
          V(n, ie);
          const o = "string" == typeof (t = e.target) ? document.querySelector(t) : t;
          o.appendChild(n),
          (e=>{
              const t = v();
              t.setAttribute("role", e.toast ? "alert" : "dialog"),
              t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
              e.toast || t.setAttribute("aria-modal", "true")
          }
          )(e),
          e = o,
          "rtl" === window.getComputedStyle(e).direction && W(b(), h.rtl),
          (()=>{
              const e = v()
                , t = K(e, h.input)
                , n = K(e, h.file)
                , o = e.querySelector(".".concat(h.range, " input"))
                , i = e.querySelector(".".concat(h.range, " output"))
                , a = K(e, h.select)
                , s = e.querySelector(".".concat(h.checkbox, " input"))
                , r = K(e, h.textarea);
              t.oninput = ae,
              n.onchange = ae,
              a.onchange = ae,
              s.onchange = ae,
              r.oninput = ae,
              o.oninput = ()=>{
                  ae(),
                  i.value = o.value
              }
              ,
              o.onchange = ()=>{
                  ae(),
                  o.nextSibling.value = o.value
              }
          }
          )()
      }
  }
    , re = (e,t)=>{
      e instanceof HTMLElement ? t.appendChild(e) : "object" == typeof e ? ce(e, t) : e && V(t, e)
  }
    , ce = (e,t)=>{
      e.jquery ? le(t, e) : V(t, e.toString())
  }
    , le = (t,n)=>{
      if (t.textContent = "",
      0 in n)
          for (let e = 0; e in n; e++)
              t.appendChild(n[e].cloneNode(!0));
      else
          t.appendChild(n.cloneNode(!0))
  }
    , ue = (()=>{
      if (oe())
          return !1;
      var e = document.createElement("div")
        , t = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend"
      };
      for (const n in t)
          if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n])
              return t[n];
      return !1
  }
  )()
    , de = (e,t)=>{
      const n = T();
      var o = S()
        , i = P()
        , a = E()
        , s = O();
      t.showConfirmButton || t.showDenyButton || t.showCancelButton || J(n),
      U(n, t, "actions"),
      pe(i, "confirm", t),
      pe(a, "deny", t),
      pe(s, "cancel", t),
      function(e, t, n, o) {
          if (!o.buttonsStyling)
              return _([e, t, n], h.styled);
          W([e, t, n], h.styled),
          o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor,
          W(e, h["default-outline"]));
          o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor,
          W(t, h["default-outline"]));
          o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor,
          W(n, h["default-outline"]))
      }(i, a, s, t),
      t.reverseButtons && (n.insertBefore(s, o),
      n.insertBefore(a, o),
      n.insertBefore(i, o)),
      V(o, t.loaderHtml),
      U(o, t, "loader")
  }
  ;
  function pe(e, t, n) {
      X(e, n["show".concat(o(t), "Button")], "inline-block"),
      V(e, n["".concat(t, "ButtonText")]),
      e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]),
      e.className = h[t],
      U(e, n, "".concat(t, "Button")),
      W(e, n["".concat(t, "ButtonClass")])
  }
  const me = (e,t)=>{
      var n, o, i = b();
      i && (o = i,
      "string" == typeof (n = t.backdrop) ? o.style.background = n : n || W([document.documentElement, document.body], h["no-backdrop"]),
      !t.backdrop && t.allowOutsideClick && s('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),
      o = i,
      (n = t.position)in h ? W(o, h[n]) : (s('The "position" parameter is not valid, defaulting to "center"'),
      W(o, h.center)),
      n = i,
      !(o = t.grow) || "string" != typeof o || (o = "grow-".concat(o))in h && W(n, h[o]),
      U(i, t, "container"))
  }
  ;
  var he = {
      promise: new WeakMap,
      innerParams: new WeakMap,
      domCache: new WeakMap
  };
  const ge = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
    , be = e=>{
      if (!ke[e.input])
          return r('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
      var t = Ce(e.input);
      const n = ke[e.input](t, e);
      Z(n),
      setTimeout(()=>{
          R(n)
      }
      )
  }
    , fe = (e,t)=>{
      const n = F(v(), e);
      if (n) {
          (t=>{
              for (let e = 0; e < t.attributes.length; e++) {
                  var n = t.attributes[e].name;
                  ["type", "value", "style"].includes(n) || t.removeAttribute(n)
              }
          }
          )(n);
          for (const o in t)
              n.setAttribute(o, t[o])
      }
  }
    , ye = e=>{
      var t = Ce(e.input);
      e.customClass && W(t, e.customClass.input)
  }
    , ve = (e,t)=>{
      e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
  }
    , we = (e,t,n)=>{
      if (n.inputLabel) {
          e.id = h.input;
          const i = document.createElement("label");
          var o = h["input-label"];
          i.setAttribute("for", e.id),
          i.className = o,
          W(i, n.customClass.inputLabel),
          i.innerText = n.inputLabel,
          t.insertAdjacentElement("beforebegin", i)
      }
  }
    , Ce = e=>{
      e = h[e] || h.input;
      return K(v(), e)
  }
    , ke = {};
  ke.text = ke.email = ke.password = ke.number = ke.tel = ke.url = (e,t)=>("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : p(t.inputValue) || s('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')),
  we(e, e, t),
  ve(e, t),
  e.type = t.input,
  e),
  ke.file = (e,t)=>(we(e, e, t),
  ve(e, t),
  e),
  ke.range = (e,t)=>{
      const n = e.querySelector("input")
        , o = e.querySelector("output");
      return n.value = t.inputValue,
      n.type = t.input,
      o.value = t.inputValue,
      we(n, e, t),
      e
  }
  ,
  ke.select = (e,t)=>{
      if (e.textContent = "",
      t.inputPlaceholder) {
          const n = document.createElement("option");
          V(n, t.inputPlaceholder),
          n.value = "",
          n.disabled = !0,
          n.selected = !0,
          e.appendChild(n)
      }
      return we(e, e, t),
      e
  }
  ,
  ke.radio = e=>(e.textContent = "",
  e),
  ke.checkbox = (e,t)=>{
      const n = F(v(), "checkbox");
      n.value = 1,
      n.id = h.checkbox,
      n.checked = Boolean(t.inputValue);
      var o = e.querySelector("span");
      return V(o, t.inputPlaceholder),
      e
  }
  ,
  ke.textarea = (t,e)=>{
      t.value = e.inputValue,
      ve(t, e),
      we(t, t, e);
      if ("MutationObserver"in window) {
          const n = parseInt(window.getComputedStyle(v()).width);
          new MutationObserver(()=>{
              var e, e = t.offsetWidth + (e = t,
              parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
              e > n ? v().style.width = "".concat(e, "px") : v().style.width = null
          }
          ).observe(t, {
              attributes: !0,
              attributeFilter: ["style"]
          })
      }
      return t
  }
  ;
  const Ae = (e,t)=>{
      const n = k();
      U(n, t, "htmlContainer"),
      t.html ? (re(t.html, n),
      Z(n, "block")) : t.text ? (n.textContent = t.text,
      Z(n, "block")) : J(n),
      ((e,o)=>{
          const i = v();
          e = he.innerParams.get(e);
          const a = !e || o.input !== e.input;
          ge.forEach(e=>{
              var t = h[e];
              const n = K(i, t);
              fe(e, o.inputAttributes),
              n.className = t,
              a && J(n)
          }
          ),
          o.input && (a && be(o),
          ye(o))
      }
      )(e, t)
  }
    , Be = (e,t)=>{
      for (const n in g)
          t.icon !== n && _(e, g[n]);
      W(e, g[t.icon]),
      Ee(e, t),
      xe(),
      U(e, t, "icon")
  }
    , xe = ()=>{
      const e = v();
      var t = window.getComputedStyle(e).getPropertyValue("background-color");
      const n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
      for (let e = 0; e < n.length; e++)
          n[e].style.backgroundColor = t
  }
    , Pe = (e,t)=>{
      var n;
      e.textContent = "",
      t.iconHtml ? V(e, Se(t.iconHtml)) : "success" === t.icon ? V(e, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === t.icon ? V(e, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : (n = {
          question: "?",
          warning: "!",
          info: "i"
      },
      V(e, Se(n[t.icon])))
  }
    , Ee = (e,t)=>{
      if (t.iconColor) {
          e.style.color = t.iconColor,
          e.style.borderColor = t.iconColor;
          for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
              $(e, n, "backgroundColor", t.iconColor);
          $(e, ".swal2-success-ring", "borderColor", t.iconColor)
      }
  }
    , Se = e=>'<div class="'.concat(h["icon-content"], '">').concat(e, "</div>")
    , Oe = (e,o)=>{
      const i = B();
      if (!o.progressSteps || 0 === o.progressSteps.length)
          return J(i);
      Z(i),
      i.textContent = "",
      o.currentProgressStep >= o.progressSteps.length && s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
      o.progressSteps.forEach((e,t)=>{
          var n, e = (n = e,
          e = document.createElement("li"),
          W(e, h["progress-step"]),
          V(e, n),
          e);
          i.appendChild(e),
          t === o.currentProgressStep && W(e, h["active-progress-step"]),
          t !== o.progressSteps.length - 1 && (t = (e=>{
              const t = document.createElement("li");
              return W(t, h["progress-step-line"]),
              e.progressStepsDistance && (t.style.width = e.progressStepsDistance),
              t
          }
          )(o),
          i.appendChild(t))
      }
      )
  }
    , Te = (e,t)=>{
      e.className = "".concat(h.popup, " ").concat(G(e) ? t.showClass.popup : ""),
      t.toast ? (W([document.documentElement, document.body], h["toast-shown"]),
      W(e, h.toast)) : W(e, h.modal),
      U(e, t, "popup"),
      "string" == typeof t.customClass && W(e, t.customClass),
      t.icon && W(e, h["icon-".concat(t.icon)])
  }
    , Le = (e,t)=>{
      var n, o, i;
      (e=>{
          var t = b();
          const n = v();
          e.toast ? (Y(t, "width", e.width),
          n.style.width = "100%",
          n.insertBefore(S(), w())) : Y(n, "width", e.width),
          Y(n, "padding", e.padding),
          e.background && (n.style.background = e.background),
          J(x()),
          Te(n, e)
      }
      )(t),
      me(0, t),
      Oe(0, t),
      i = e,
      n = t,
      o = he.innerParams.get(i),
      i = w(),
      o && n.icon === o.icon ? (Pe(i, n),
      Be(i, n)) : n.icon || n.iconHtml ? n.icon && -1 === Object.keys(g).indexOf(n.icon) ? (r('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(n.icon, '"')),
      J(i)) : (Z(i),
      Pe(i, n),
      Be(i, n),
      W(i, n.showClass.icon)) : J(i),
      (e=>{
          const t = A();
          if (!e.imageUrl)
              return J(t);
          Z(t, ""),
          t.setAttribute("src", e.imageUrl),
          t.setAttribute("alt", e.imageAlt),
          Y(t, "width", e.imageWidth),
          Y(t, "height", e.imageHeight),
          t.className = h.image,
          U(t, e, "image")
      }
      )(t),
      (e=>{
          const t = C();
          X(t, e.title || e.titleText, "block"),
          e.title && re(e.title, t),
          e.titleText && (t.innerText = e.titleText),
          U(t, e, "title")
      }
      )(t),
      (e=>{
          const t = D();
          V(t, e.closeButtonHtml),
          U(t, e, "closeButton"),
          X(t, e.showCloseButton),
          t.setAttribute("aria-label", e.closeButtonAriaLabel)
      }
      )(t),
      Ae(e, t),
      de(0, t),
      i = t,
      e = L(),
      X(e, i.footer),
      i.footer && re(i.footer, e),
      U(e, i, "footer"),
      "function" == typeof t.didRender && t.didRender(v())
  }
  ;
  const je = ()=>P() && P().click();
  const De = e=>{
      let t = v();
      t || cn.fire(),
      t = v();
      var n = S();
      q() ? J(w()) : Ie(t, e),
      Z(n),
      t.setAttribute("data-loading", !0),
      t.setAttribute("aria-busy", !0),
      t.focus()
  }
    , Ie = (e,t)=>{
      var n = T();
      const o = S();
      !t && G(P()) && (t = P()),
      Z(n),
      t && (J(t),
      o.setAttribute("data-button-to-replace", t.className)),
      o.parentNode.insertBefore(o, t),
      W([e, n], h.loading)
  }
    , Me = {}
    , qe = o=>new Promise(e=>{
      if (!o)
          return e();
      var t = window.scrollX
        , n = window.scrollY;
      Me.restoreFocusTimeout = setTimeout(()=>{
          Me.previousActiveElement && Me.previousActiveElement.focus ? (Me.previousActiveElement.focus(),
          Me.previousActiveElement = null) : document.body && document.body.focus(),
          e()
      }
      , 100),
      window.scrollTo(t, n)
  }
  );
  const He = ()=>{
      if (Me.timeout)
          return (()=>{
              const e = j();
              var t = parseInt(window.getComputedStyle(e).width);
              e.style.removeProperty("transition"),
              e.style.width = "100%";
              var n = parseInt(window.getComputedStyle(e).width)
                , n = parseInt(t / n * 100);
              e.style.removeProperty("transition"),
              e.style.width = "".concat(n, "%")
          }
          )(),
          Me.timeout.stop()
  }
    , Ve = ()=>{
      if (Me.timeout) {
          var e = Me.timeout.start();
          return ne(e),
          e
      }
  }
  ;
  let Ne = !1;
  const Ue = {};
  const Fe = t=>{
      for (let e = t.target; e && e !== document; e = e.parentNode)
          for (const o in Ue) {
              var n = e.getAttribute(o);
              if (n)
                  return void Ue[o].fire({
                      template: n
                  })
          }
  }
    , Re = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show"
      },
      hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide"
      },
      customClass: {},
      target: "body",
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0
  }
    , ze = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"]
    , We = {}
    , _e = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"]
    , Ke = e=>Object.prototype.hasOwnProperty.call(Re, e);
  const Ye = e=>We[e]
    , Ze = e=>{
      for (const o in e)
          n = o,
          Ke(n) || s('Unknown parameter "'.concat(n, '"')),
          e.toast && (t = o,
          _e.includes(t) && s('The parameter "'.concat(t, '" is incompatible with toasts'))),
          t = o,
          Ye(t) && i(t, Ye(t));
      var t, n
  }
  ;
  var Je = Object.freeze({
      isValidParameter: Ke,
      isUpdatableParameter: e=>-1 !== ze.indexOf(e),
      isDeprecatedParameter: Ye,
      argsToParams: n=>{
          const o = {};
          return "object" != typeof n[0] || m(n[0]) ? ["title", "html", "icon"].forEach((e,t)=>{
              t = n[t];
              "string" == typeof t || m(t) ? o[e] = t : void 0 !== t && r("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(typeof t))
          }
          ) : Object.assign(o, n[0]),
          o
      }
      ,
      isVisible: ()=>G(v()),
      clickConfirm: je,
      clickDeny: ()=>E() && E().click(),
      clickCancel: ()=>O() && O().click(),
      getContainer: b,
      getPopup: v,
      getTitle: C,
      getHtmlContainer: k,
      getImage: A,
      getIcon: w,
      getInputLabel: ()=>y(h["input-label"]),
      getCloseButton: D,
      getActions: T,
      getConfirmButton: P,
      getDenyButton: E,
      getCancelButton: O,
      getLoader: S,
      getFooter: L,
      getTimerProgressBar: j,
      getFocusableElements: I,
      getValidationMessage: x,
      isLoading: ()=>v().hasAttribute("data-loading"),
      fire: function(...e) {
          return new this(...e)
      },
      mixin: function(n) {
          class e extends this {
              _main(e, t) {
                  return super._main(e, Object.assign({}, n, t))
              }
          }
          return e
      },
      showLoading: De,
      enableLoading: De,
      getTimerLeft: ()=>Me.timeout && Me.timeout.getTimerLeft(),
      stopTimer: He,
      resumeTimer: Ve,
      toggleTimer: ()=>{
          var e = Me.timeout;
          return e && (e.running ? He : Ve)()
      }
      ,
      increaseTimer: e=>{
          if (Me.timeout) {
              e = Me.timeout.increase(e);
              return ne(e, !0),
              e
          }
      }
      ,
      isTimerRunning: ()=>Me.timeout && Me.timeout.isRunning(),
      bindClickHandler: function(e="data-swal-template") {
          Ue[e] = this,
          Ne || (document.body.addEventListener("click", Fe),
          Ne = !0)
      }
  });
  function $e() {
      var e = he.innerParams.get(this);
      if (e) {
          const t = he.domCache.get(this);
          J(t.loader),
          q() ? e.icon && Z(w()) : (e=>{
              const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
              if (t.length)
                  Z(t[0], "inline-block");
              else if (Q())
                  J(e.actions)
          }
          )(t),
          _([t.popup, t.actions], h.loading),
          t.popup.removeAttribute("aria-busy"),
          t.popup.removeAttribute("data-loading"),
          t.confirmButton.disabled = !1,
          t.denyButton.disabled = !1,
          t.cancelButton.disabled = !1
      }
  }
  const Xe = ()=>{
      null === H.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (H.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
      document.body.style.paddingRight = "".concat(H.previousBodyPadding + (()=>{
          const e = document.createElement("div");
          e.className = h["scrollbar-measure"],
          document.body.appendChild(e);
          var t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e),
          t
      }
      )(), "px"))
  }
    , Ge = ()=>{
      navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || v().scrollHeight > window.innerHeight - 44 && (b().style.paddingBottom = "".concat(44, "px"))
  }
    , Qe = ()=>{
      const e = b();
      let t;
      e.ontouchstart = e=>{
          t = et(e)
      }
      ,
      e.ontouchmove = e=>{
          t && (e.preventDefault(),
          e.stopPropagation())
      }
  }
    , et = e=>{
      var t = e.target
        , n = b();
      return !tt(e) && !nt(e) && (t === n || !(ee(n) || "INPUT" === t.tagName || ee(k()) && k().contains(t)))
  }
    , tt = e=>e.touches && e.touches.length && "stylus" === e.touches[0].touchType
    , nt = e=>e.touches && 1 < e.touches.length;
  var ot = {
      swalPromiseResolve: new WeakMap
  };
  function it(e, t, n, o) {
      q() ? rt(e, o) : (qe(n).then(()=>rt(e, o)),
      Me.keydownTarget.removeEventListener("keydown", Me.keydownHandler, {
          capture: Me.keydownListenerCapture
      }),
      Me.keydownHandlerAdded = !1),
      t.parentNode && t.remove(),
      M() && (null !== H.previousBodyPadding && (document.body.style.paddingRight = "".concat(H.previousBodyPadding, "px"),
      H.previousBodyPadding = null),
      N(document.body, h.iosfix) && (t = parseInt(document.body.style.top, 10),
      _(document.body, h.iosfix),
      document.body.style.top = "",
      document.body.scrollTop = -1 * t),
      (()=>{
          const e = a(document.body.children);
          e.forEach(e=>{
              e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")),
              e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
          }
          )
      }
      )()),
      _([document.documentElement, document.body], [h.shown, h["height-auto"], h["no-backdrop"], h["toast-shown"]])
  }
  function at(e) {
      var t = v();
      if (t) {
          e = void 0 !== (o = e) ? Object.assign({
              isConfirmed: !1,
              isDenied: !1,
              isDismissed: !1
          }, o) : {
              isConfirmed: !1,
              isDenied: !1,
              isDismissed: !0
          };
          var n = he.innerParams.get(this);
          if (n && !N(t, n.hideClass.popup)) {
              const i = ot.swalPromiseResolve.get(this);
              _(t, n.showClass.popup),
              W(t, n.hideClass.popup);
              var o = b();
              _(o, n.showClass.backdrop),
              W(o, n.hideClass.backdrop),
              ((e,t,n)=>{
                  const o = b()
                    , i = ue && te(t);
                  if (typeof n.willClose === "function")
                      n.willClose(t);
                  if (i)
                      st(e, t, o, n.returnFocus, n.didClose);
                  else
                      it(e, o, n.returnFocus, n.didClose)
              }
              )(this, t, n),
              i(e)
          }
      }
  }
  const st = (e,t,n,o,i)=>{
      Me.swalCloseEventFinishedCallback = it.bind(null, e, n, o, i),
      t.addEventListener(ue, function(e) {
          e.target === t && (Me.swalCloseEventFinishedCallback(),
          delete Me.swalCloseEventFinishedCallback)
      })
  }
    , rt = (e,t)=>{
      setTimeout(()=>{
          "function" == typeof t && t.bind(e.params)(),
          e._destroy()
      }
      )
  }
  ;
  function ct(e, t, n) {
      const o = he.domCache.get(e);
      t.forEach(e=>{
          o[e].disabled = n
      }
      )
  }
  function lt(e, t) {
      if (!e)
          return !1;
      if ("radio" === e.type) {
          const n = e.parentNode.parentNode
            , o = n.querySelectorAll("input");
          for (let e = 0; e < o.length; e++)
              o[e].disabled = t
      } else
          e.disabled = t
  }
  class ut {
      constructor(e, t) {
          this.callback = e,
          this.remaining = t,
          this.running = !1,
          this.start()
      }
      start() {
          return this.running || (this.running = !0,
          this.started = new Date,
          this.id = setTimeout(this.callback, this.remaining)),
          this.remaining
      }
      stop() {
          return this.running && (this.running = !1,
          clearTimeout(this.id),
          this.remaining -= new Date - this.started),
          this.remaining
      }
      increase(e) {
          var t = this.running;
          return t && this.stop(),
          this.remaining += e,
          t && this.start(),
          this.remaining
      }
      getTimerLeft() {
          return this.running && (this.stop(),
          this.start()),
          this.remaining
      }
      isRunning() {
          return this.running
      }
  }
  var dt = {
      email: (e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
      url: (e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
  };
  function pt(e) {
      var t, n;
      (t = e).inputValidator || Object.keys(dt).forEach(e=>{
          t.input === e && (t.inputValidator = dt[e])
      }
      ),
      e.showLoaderOnConfirm && !e.preConfirm && s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
      (n = e).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (s('Target parameter is not valid, defaulting to "body"'),
      n.target = "body"),
      "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")),
      se(e)
  }
  const mt = ["swal-title", "swal-html", "swal-footer"]
    , ht = e=>{
      e = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
      if (!e)
          return {};
      e = e.content;
      return Ct(e),
      Object.assign(gt(e), bt(e), ft(e), yt(e), vt(e), wt(e, mt))
  }
    , gt = e=>{
      const o = {};
      return a(e.querySelectorAll("swal-param")).forEach(e=>{
          kt(e, ["name", "value"]);
          var t = e.getAttribute("name");
          let n = e.getAttribute("value");
          "boolean" == typeof Re[t] && "false" === n && (n = !1),
          "object" == typeof Re[t] && (n = JSON.parse(n)),
          o[t] = n
      }
      ),
      o
  }
    , bt = e=>{
      const n = {};
      return a(e.querySelectorAll("swal-button")).forEach(e=>{
          kt(e, ["type", "color", "aria-label"]);
          var t = e.getAttribute("type");
          n["".concat(t, "ButtonText")] = e.innerHTML,
          n["show".concat(o(t), "Button")] = !0,
          e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")),
          e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label"))
      }
      ),
      n
  }
    , ft = e=>{
      const t = {}
        , n = e.querySelector("swal-image");
      return n && (kt(n, ["src", "width", "height", "alt"]),
      n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")),
      n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")),
      n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")),
      n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))),
      t
  }
    , yt = e=>{
      const t = {}
        , n = e.querySelector("swal-icon");
      return n && (kt(n, ["type", "color"]),
      n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
      n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
      t.iconHtml = n.innerHTML),
      t
  }
    , vt = e=>{
      const n = {}
        , t = e.querySelector("swal-input");
      t && (kt(t, ["type", "label", "placeholder", "value"]),
      n.input = t.getAttribute("type") || "text",
      t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")),
      t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")),
      t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
      e = e.querySelectorAll("swal-input-option");
      return e.length && (n.inputOptions = {},
      a(e).forEach(e=>{
          kt(e, ["value"]);
          var t = e.getAttribute("value")
            , e = e.innerHTML;
          n.inputOptions[t] = e
      }
      )),
      n
  }
    , wt = (e,t)=>{
      const n = {};
      for (const o in t) {
          const i = t[o]
            , a = e.querySelector(i);
          a && (kt(a, []),
          n[i.replace(/^swal-/, "")] = a.innerHTML.trim())
      }
      return n
  }
    , Ct = e=>{
      const t = mt.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
      a(e.children).forEach(e=>{
          e = e.tagName.toLowerCase();
          -1 === t.indexOf(e) && s("Unrecognized element <".concat(e, ">"))
      }
      )
  }
    , kt = (t,n)=>{
      a(t.attributes).forEach(e=>{
          -1 === n.indexOf(e.name) && s(['Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")])
      }
      )
  }
    , At = e=>{
      const t = b()
        , n = v();
      "function" == typeof e.willOpen && e.willOpen(n);
      var o = window.getComputedStyle(document.body).overflowY;
      Et(t, n, e),
      setTimeout(()=>{
          xt(t, n)
      }
      , 10),
      M() && (Pt(t, e.scrollbarPadding, o),
      (()=>{
          const e = a(document.body.children);
          e.forEach(e=>{
              e === b() || e.contains(b()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")),
              e.setAttribute("aria-hidden", "true"))
          }
          )
      }
      )()),
      q() || Me.previousActiveElement || (Me.previousActiveElement = document.activeElement),
      "function" == typeof e.didOpen && setTimeout(()=>e.didOpen(n)),
      _(t, h["no-transition"])
  }
    , Bt = e=>{
      const t = v();
      if (e.target === t) {
          const n = b();
          t.removeEventListener(ue, Bt),
          n.style.overflowY = "auto"
      }
  }
    , xt = (e,t)=>{
      ue && te(t) ? (e.style.overflowY = "hidden",
      t.addEventListener(ue, Bt)) : e.style.overflowY = "auto"
  }
    , Pt = (e,t,n)=>{
      var o;
      (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !N(document.body, h.iosfix) && (o = document.body.scrollTop,
      document.body.style.top = "".concat(-1 * o, "px"),
      W(document.body, h.iosfix),
      Qe(),
      Ge()),
      t && "hidden" !== n && Xe(),
      setTimeout(()=>{
          e.scrollTop = 0
      }
      )
  }
    , Et = (e,t,n)=>{
      W(e, n.showClass.backdrop),
      t.style.setProperty("opacity", "0", "important"),
      Z(t, "grid"),
      setTimeout(()=>{
          W(t, n.showClass.popup),
          t.style.removeProperty("opacity")
      }
      , 10),
      W([document.documentElement, document.body], h.shown),
      n.heightAuto && n.backdrop && !n.toast && W([document.documentElement, document.body], h["height-auto"])
  }
    , St = e=>e.checked ? 1 : 0
    , Ot = e=>e.checked ? e.value : null
    , Tt = e=>e.files.length ? null !== e.getAttribute("multiple") ? e.files : e.files[0] : null
    , Lt = (t,n)=>{
      const o = v()
        , i = e=>Dt[n.input](o, It(e), n);
      u(n.inputOptions) || p(n.inputOptions) ? (De(P()),
      d(n.inputOptions).then(e=>{
          t.hideLoading(),
          i(e)
      }
      )) : "object" == typeof n.inputOptions ? i(n.inputOptions) : r("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))
  }
    , jt = (t,n)=>{
      const o = t.getInput();
      J(o),
      d(n.inputValue).then(e=>{
          o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e),
          Z(o),
          o.focus(),
          t.hideLoading()
      }
      ).catch(e=>{
          r("Error in inputValue promise: ".concat(e)),
          o.value = "",
          Z(o),
          o.focus(),
          t.hideLoading()
      }
      )
  }
    , Dt = {
      select: (e,t,i)=>{
          const a = K(e, h.select)
            , s = (e,t,n)=>{
              const o = document.createElement("option");
              o.value = n,
              V(o, t),
              o.selected = Mt(n, i.inputValue),
              e.appendChild(o)
          }
          ;
          t.forEach(e=>{
              var t = e[0];
              const n = e[1];
              if (Array.isArray(n)) {
                  const o = document.createElement("optgroup");
                  o.label = t,
                  o.disabled = !1,
                  a.appendChild(o),
                  n.forEach(e=>s(o, e[1], e[0]))
              } else
                  s(a, n, t)
          }
          ),
          a.focus()
      }
      ,
      radio: (e,t,a)=>{
          const s = K(e, h.radio);
          t.forEach(e=>{
              var t = e[0]
                , e = e[1];
              const n = document.createElement("input")
                , o = document.createElement("label");
              n.type = "radio",
              n.name = h.radio,
              n.value = t,
              Mt(t, a.inputValue) && (n.checked = !0);
              const i = document.createElement("span");
              V(i, e),
              i.className = h.label,
              o.appendChild(n),
              o.appendChild(i),
              s.appendChild(o)
          }
          );
          const n = s.querySelectorAll("input");
          n.length && n[0].focus()
      }
  }
    , It = n=>{
      const o = [];
      return "undefined" != typeof Map && n instanceof Map ? n.forEach((e,t)=>{
          let n = e;
          "object" == typeof n && (n = It(n)),
          o.push([t, n])
      }
      ) : Object.keys(n).forEach(e=>{
          let t = n[e];
          "object" == typeof t && (t = It(t)),
          o.push([e, t])
      }
      ),
      o
  }
    , Mt = (e,t)=>t && t.toString() === e.toString()
    , qt = (e,t,n)=>{
      var o = ((e,t)=>{
          const n = e.getInput();
          if (!n)
              return null;
          switch (t.input) {
          case "checkbox":
              return St(n);
          case "radio":
              return Ot(n);
          case "file":
              return Tt(n);
          default:
              return t.inputAutoTrim ? n.value.trim() : n.value
          }
      }
      )(e, t);
      t.inputValidator ? Ht(e, t, o, n) : e.getInput().checkValidity() ? ("deny" === n ? Vt : Ut)(e, t, o) : (e.enableButtons(),
      e.showValidationMessage(t.validationMessage))
  }
    , Ht = (t,n,o,i)=>{
      t.disableInput();
      const e = Promise.resolve().then(()=>d(n.inputValidator(o, n.validationMessage)));
      e.then(e=>{
          t.enableButtons(),
          t.enableInput(),
          e ? t.showValidationMessage(e) : ("deny" === i ? Vt : Ut)(t, n, o)
      }
      )
  }
    , Vt = (t,e,n)=>{
      if (e.showLoaderOnDeny && De(E()),
      e.preDeny) {
          const o = Promise.resolve().then(()=>d(e.preDeny(n, e.validationMessage)));
          o.then(e=>{
              !1 === e ? t.hideLoading() : t.closePopup({
                  isDenied: !0,
                  value: void 0 === e ? n : e
              })
          }
          )
      } else
          t.closePopup({
              isDenied: !0,
              value: n
          })
  }
    , Nt = (e,t)=>{
      e.closePopup({
          isConfirmed: !0,
          value: t
      })
  }
    , Ut = (t,e,n)=>{
      if (e.showLoaderOnConfirm && De(),
      e.preConfirm) {
          t.resetValidationMessage();
          const o = Promise.resolve().then(()=>d(e.preConfirm(n, e.validationMessage)));
          o.then(e=>{
              G(x()) || !1 === e ? t.hideLoading() : Nt(t, void 0 === e ? n : e)
          }
          )
      } else
          Nt(t, n)
  }
    , Ft = (e,t,n)=>{
      const o = I();
      if (o.length)
          return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1),
          o[t].focus();
      v().focus()
  }
    , Rt = ["ArrowRight", "ArrowDown"]
    , zt = ["ArrowLeft", "ArrowUp"]
    , Wt = (e,t,n)=>{
      var o = he.innerParams.get(e);
      o && (o.stopKeydownPropagation && t.stopPropagation(),
      "Enter" === t.key ? _t(e, t, o) : "Tab" === t.key ? Kt(t, o) : [...Rt, ...zt].includes(t.key) ? Yt(t.key) : "Escape" === t.key && Zt(t, o, n))
  }
    , _t = (e,t,n)=>{
      t.isComposing || t.target && e.getInput() && t.target.outerHTML === e.getInput().outerHTML && (["textarea", "file"].includes(n.input) || (je(),
      t.preventDefault()))
  }
    , Kt = (e,t)=>{
      var n = e.target
        , o = I();
      let i = -1;
      for (let e = 0; e < o.length; e++)
          if (n === o[e]) {
              i = e;
              break
          }
      e.shiftKey ? Ft(0, i, -1) : Ft(0, i, 1),
      e.stopPropagation(),
      e.preventDefault()
  }
    , Yt = e=>{
      const t = P()
        , n = E()
        , o = O();
      if ([t, n, o].includes(document.activeElement)) {
          e = Rt.includes(e) ? "nextElementSibling" : "previousElementSibling";
          const i = document.activeElement[e];
          i && i.focus()
      }
  }
    , Zt = (e,t,n)=>{
      c(t.allowEscapeKey) && (e.preventDefault(),
      n(l.esc))
  }
    , Jt = (t,e,n)=>{
      e.popup.onclick = ()=>{
          var e = he.innerParams.get(t);
          e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || e.timer || e.input || n(l.close)
      }
  }
  ;
  let $t = !1;
  const Xt = t=>{
      t.popup.onmousedown = ()=>{
          t.container.onmouseup = function(e) {
              t.container.onmouseup = void 0,
              e.target === t.container && ($t = !0)
          }
      }
  }
    , Gt = t=>{
      t.container.onmousedown = ()=>{
          t.popup.onmouseup = function(e) {
              t.popup.onmouseup = void 0,
              e.target !== t.popup && !t.popup.contains(e.target) || ($t = !0)
          }
      }
  }
    , Qt = (n,o,i)=>{
      o.container.onclick = e=>{
          var t = he.innerParams.get(n);
          $t ? $t = !1 : e.target === o.container && c(t.allowOutsideClick) && i(l.backdrop)
      }
  }
  ;
  const en = (e,t,n)=>{
      var o = j();
      J(o),
      t.timer && (e.timeout = new ut(()=>{
          n("timer"),
          delete e.timeout
      }
      ,t.timer),
      t.timerProgressBar && (Z(o),
      setTimeout(()=>{
          e.timeout && e.timeout.running && ne(t.timer)
      }
      )))
  }
    , tn = (e,t)=>{
      if (!t.toast)
          return c(t.allowEnterKey) ? void (nn(e, t) || Ft(0, -1, 1)) : on()
  }
    , nn = (e,t)=>t.focusDeny && G(e.denyButton) ? (e.denyButton.focus(),
  !0) : t.focusCancel && G(e.cancelButton) ? (e.cancelButton.focus(),
  !0) : !(!t.focusConfirm || !G(e.confirmButton)) && (e.confirmButton.focus(),
  !0)
    , on = ()=>{
      document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
  }
  ;
  const an = e=>{
      for (const t in e)
          e[t] = new WeakMap
  }
  ;
  e = Object.freeze({
      hideLoading: $e,
      disableLoading: $e,
      getInput: function(e) {
          var t = he.innerParams.get(e || this);
          return (e = he.domCache.get(e || this)) ? F(e.popup, t.input) : null
      },
      close: at,
      closePopup: at,
      closeModal: at,
      closeToast: at,
      enableButtons: function() {
          ct(this, ["confirmButton", "denyButton", "cancelButton"], !1)
      },
      disableButtons: function() {
          ct(this, ["confirmButton", "denyButton", "cancelButton"], !0)
      },
      enableInput: function() {
          return lt(this.getInput(), !1)
      },
      disableInput: function() {
          return lt(this.getInput(), !0)
      },
      showValidationMessage: function(e) {
          const t = he.domCache.get(this);
          var n = he.innerParams.get(this);
          V(t.validationMessage, e),
          t.validationMessage.className = h["validation-message"],
          n.customClass && n.customClass.validationMessage && W(t.validationMessage, n.customClass.validationMessage),
          Z(t.validationMessage);
          const o = this.getInput();
          o && (o.setAttribute("aria-invalid", !0),
          o.setAttribute("aria-describedBy", h["validation-message"]),
          R(o),
          W(o, h.inputerror))
      },
      resetValidationMessage: function() {
          var e = he.domCache.get(this);
          e.validationMessage && J(e.validationMessage);
          const t = this.getInput();
          t && (t.removeAttribute("aria-invalid"),
          t.removeAttribute("aria-describedBy"),
          _(t, h.inputerror))
      },
      getProgressSteps: function() {
          return he.domCache.get(this).progressSteps
      },
      _main: function(e, t={}) {
          Ze(Object.assign({}, t, e)),
          Me.currentInstance && Me.currentInstance._destroy(),
          Me.currentInstance = this,
          pt(e = ((e,t)=>{
              const n = ht(e)
                , o = Object.assign({}, Re, t, n, e);
              return o.showClass = Object.assign({}, Re.showClass, o.showClass),
              o.hideClass = Object.assign({}, Re.hideClass, o.hideClass),
              o
          }
          )(e, t)),
          Object.freeze(e),
          Me.timeout && (Me.timeout.stop(),
          delete Me.timeout),
          clearTimeout(Me.restoreFocusTimeout);
          var s, r, c, t = (e=>{
              const t = {
                  popup: v(),
                  container: b(),
                  actions: T(),
                  confirmButton: P(),
                  denyButton: E(),
                  cancelButton: O(),
                  loader: S(),
                  closeButton: D(),
                  validationMessage: x(),
                  progressSteps: B()
              };
              return he.domCache.set(e, t),
              t
          }
          )(this);
          return Le(this, e),
          he.innerParams.set(this, e),
          s = this,
          r = t,
          c = e,
          new Promise(e=>{
              const t = e=>{
                  s.closePopup({
                      isDismissed: !0,
                      dismiss: e
                  })
              }
              ;
              var n, o, i, a;
              ot.swalPromiseResolve.set(s, e),
              r.confirmButton.onclick = ()=>((e,t)=>{
                  e.disableButtons(),
                  t.input ? qt(e, t, "confirm") : Ut(e, t, !0)
              }
              )(s, c),
              r.denyButton.onclick = ()=>((e,t)=>{
                  e.disableButtons(),
                  t.returnInputValueOnDeny ? qt(e, t, "deny") : Vt(e, t, !1)
              }
              )(s, c),
              r.cancelButton.onclick = ()=>((e,t)=>{
                  e.disableButtons(),
                  t(l.cancel)
              }
              )(s, t),
              r.closeButton.onclick = ()=>t(l.close),
              n = s,
              a = r,
              e = t,
              he.innerParams.get(n).toast ? Jt(n, a, e) : (Xt(a),
              Gt(a),
              Qt(n, a, e)),
              o = s,
              a = Me,
              e = c,
              i = t,
              a.keydownTarget && a.keydownHandlerAdded && (a.keydownTarget.removeEventListener("keydown", a.keydownHandler, {
                  capture: a.keydownListenerCapture
              }),
              a.keydownHandlerAdded = !1),
              e.toast || (a.keydownHandler = e=>Wt(o, e, i),
              a.keydownTarget = e.keydownListenerCapture ? window : v(),
              a.keydownListenerCapture = e.keydownListenerCapture,
              a.keydownTarget.addEventListener("keydown", a.keydownHandler, {
                  capture: a.keydownListenerCapture
              }),
              a.keydownHandlerAdded = !0),
              e = s,
              "select" === (a = c).input || "radio" === a.input ? Lt(e, a) : ["text", "email", "number", "tel", "textarea"].includes(a.input) && (u(a.inputValue) || p(a.inputValue)) && jt(e, a),
              At(c),
              en(Me, c, t),
              tn(r, c),
              setTimeout(()=>{
                  r.container.scrollTop = 0
              }
              )
          }
          )
      },
      update: function(t) {
          var e = v()
            , n = he.innerParams.get(this);
          if (!e || N(e, n.hideClass.popup))
              return s("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          const o = {};
          Object.keys(t).forEach(e=>{
              cn.isUpdatableParameter(e) ? o[e] = t[e] : s('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
          }
          ),
          n = Object.assign({}, n, o),
          Le(this, n),
          he.innerParams.set(this, n),
          Object.defineProperties(this, {
              params: {
                  value: Object.assign({}, this.params, t),
                  writable: !1,
                  enumerable: !0
              }
          })
      },
      _destroy: function() {
          var e = he.domCache.get(this);
          const t = he.innerParams.get(this);
          t && (e.popup && Me.swalCloseEventFinishedCallback && (Me.swalCloseEventFinishedCallback(),
          delete Me.swalCloseEventFinishedCallback),
          Me.deferDisposalTimer && (clearTimeout(Me.deferDisposalTimer),
          delete Me.deferDisposalTimer),
          "function" == typeof t.didDestroy && t.didDestroy(),
          delete this.params,
          delete Me.keydownHandler,
          delete Me.keydownTarget,
          an(he),
          an(ot))
      }
  });
  let sn;
  class rn {
      constructor(...e) {
          "undefined" != typeof window && (sn = this,
          e = Object.freeze(this.constructor.argsToParams(e)),
          Object.defineProperties(this, {
              params: {
                  value: e,
                  writable: !1,
                  enumerable: !0,
                  configurable: !0
              }
          }),
          e = this._main(this.params),
          he.promise.set(this, e))
      }
      then(e) {
          const t = he.promise.get(this);
          return t.then(e)
      }
      finally(e) {
          const t = he.promise.get(this);
          return t.finally(e)
      }
  }
  Object.assign(rn.prototype, e),
  Object.assign(rn, Je),
  Object.keys(e).forEach(t=>{
      rn[t] = function(...e) {
          if (sn)
              return sn[t](...e)
      }
  }
  ),
  rn.DismissReason = l,
  rn.version = "11.0.11";
  const cn = rn;
  return cn.default = cn,
  cn
}),
void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
