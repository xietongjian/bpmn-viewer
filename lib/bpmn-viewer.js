var Vu = Object.defineProperty;
var Uu = (e, t, n) => t in e ? Vu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var b = (e, t, n) => Uu(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as Ot, computed as Z, reactive as fr, ref as oe, getCurrentInstance as Hu, cloneVNode as qa, openBlock as F, createElementBlock as X, normalizeClass as pe, renderSlot as Pe, defineComponent as Ee, normalizeStyle as ot, createElementVNode as U, toRef as Ss, resolveComponent as Oe, createBlock as ye, createCommentVNode as ve, toRefs as di, provide as Wa, onMounted as bt, onUpdated as pr, watch as Ge, onBeforeUnmount as Pn, readonly as qu, onDeactivated as Wu, createVNode as H, Fragment as vt, Teleport as Ga, mergeProps as Kn, Transition as po, withDirectives as pt, vShow as ht, nextTick as er, withCtx as ae, createTextVNode as Ve, toDisplayString as le, withModifiers as ho, onUnmounted as Ka, TransitionGroup as Gu, isVNode as Ku, render as tr, shallowRef as ni, unref as N, h as _s, renderList as nr, isRef as Yu, createStaticVNode as Ya } from "vue";
import Xa from "bpmn-js/lib/NavigatedViewer";
import { is as D, getBusinessObject as $e, isAny as an } from "bpmn-js/lib/util/ModelUtil";
import { isAny as Xu } from "bpmn-js/lib/features/modeling/util/ModelingUtil";
import Ju from "bpmn-js/lib/draw/BpmnRenderer";
import { getDi as Cs, getStrokeColor as me, getFillColor as Ae, getSemantic as Ai, isThrowEvent as Zu, isTypedEvent as dt, black as ks } from "bpmn-js/lib/draw/BpmnRenderUtil";
import { rotate as Qu } from "diagram-js/lib/util/SvgTransformUtil";
import e0 from "bpmn-js/lib/draw/PathMap";
import t0 from "bpmn-js-i18n-zh/lib/bpmn-js";
import n0 from "diagram-js-grid-bg";
import { useI18n as Bn } from "vue-i18n";
import { getPlaneIdFromShape as i0 } from "bpmn-js/lib/util/DrilldownUtil";
import { escapeHTML as r0 } from "diagram-js/lib/util/EscapeUtil";
import o0 from "bpmn-js/lib/features/modeling";
const fi = Object.prototype.toString;
function Ro(e) {
  return fi.call(e) === "[object Array]";
}
function Ts(e) {
  return fi.call(e) === "[object Boolean]";
}
const As = (e) => fi.call(e) === "[object Promise]";
function hr(e) {
  return fi.call(e) === "[object String]";
}
function Dt(e) {
  return fi.call(e) === "[object Number]" && e === e;
}
function s0(e) {
  return e === void 0;
}
function Tt(e) {
  return typeof e == "function";
}
const xn = Symbol("ArcoConfigProvider"), Oi = {
  formatYear: "YYYY 年",
  formatMonth: "YYYY 年 MM 月",
  today: "今天",
  view: {
    month: "月",
    year: "年",
    week: "周",
    day: "日"
  },
  month: {
    long: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    },
    short: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    }
  },
  week: {
    long: {
      self: "周",
      monday: "周一",
      tuesday: "周二",
      wednesday: "周三",
      thursday: "周四",
      friday: "周五",
      saturday: "周六",
      sunday: "周日"
    },
    short: {
      self: "周",
      monday: "一",
      tuesday: "二",
      wednesday: "三",
      thursday: "四",
      friday: "五",
      saturday: "六",
      sunday: "日"
    }
  }
}, a0 = {
  locale: "zh-CN",
  empty: {
    description: "暂无数据"
  },
  drawer: {
    okText: "确定",
    cancelText: "取消"
  },
  popconfirm: {
    okText: "确定",
    cancelText: "取消"
  },
  modal: {
    okText: "确定",
    cancelText: "取消"
  },
  pagination: {
    goto: "前往",
    page: "页",
    countPerPage: "条/页",
    total: "共 {0} 条"
  },
  table: {
    okText: "确定",
    resetText: "重置"
  },
  upload: {
    start: "开始",
    cancel: "取消",
    delete: "删除",
    retry: "点击重试",
    buttonText: "点击上传",
    preview: "预览",
    drag: "点击或拖拽文件到此处上传",
    dragHover: "释放文件并开始上传",
    error: "上传失败"
  },
  calendar: Oi,
  datePicker: {
    view: Oi.view,
    month: Oi.month,
    week: Oi.week,
    placeholder: {
      date: "请选择日期",
      week: "请选择周",
      month: "请选择月份",
      year: "请选择年份",
      quarter: "请选择季度",
      time: "请选择时间"
    },
    rangePlaceholder: {
      date: ["开始日期", "结束日期"],
      week: ["开始周", "结束周"],
      month: ["开始月份", "结束月份"],
      year: ["开始年份", "结束年份"],
      quarter: ["开始季度", "结束季度"],
      time: ["开始时间", "结束时间"]
    },
    selectTime: "选择时间",
    today: "今天",
    now: "此刻",
    ok: "确定"
  },
  image: {
    loading: "加载中"
  },
  imagePreview: {
    fullScreen: "全屏",
    rotateRight: "向右旋转",
    rotateLeft: "向左旋转",
    zoomIn: "放大",
    zoomOut: "缩小",
    originalSize: "原始尺寸"
  },
  typography: {
    copied: "已复制",
    copy: "复制",
    expand: "展开",
    collapse: "折叠",
    edit: "编辑"
  },
  form: {
    validateMessages: {
      required: "#{field} 是必填项",
      type: {
        string: "#{field} 不是合法的文本类型",
        number: "#{field} 不是合法的数字类型",
        boolean: "#{field} 不是合法的布尔类型",
        array: "#{field} 不是合法的数组类型",
        object: "#{field} 不是合法的对象类型",
        url: "#{field} 不是合法的 url 地址",
        email: "#{field} 不是合法的邮箱地址",
        ip: "#{field} 不是合法的 IP 地址"
      },
      number: {
        min: "`#{value}` 小于最小值 `#{min}`",
        max: "`#{value}` 大于最大值 `#{max}`",
        equal: "`#{value}` 不等于 `#{equal}`",
        range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
        positive: "`#{value}` 不是正数",
        negative: "`#{value}` 不是负数"
      },
      array: {
        length: "`#{field}` 个数不等于 #{length}",
        minLength: "`#{field}` 个数最少为 #{minLength}",
        maxLength: "`#{field}` 个数最多为 #{maxLength}",
        includes: "#{field} 不包含 #{includes}",
        deepEqual: "#{field} 不等于 #{deepEqual}",
        empty: "`#{field}` 不是空数组"
      },
      string: {
        minLength: "字符数最少为 #{minLength}",
        maxLength: "字符数最多为 #{maxLength}",
        length: "字符数必须是 #{length}",
        match: "`#{value}` 不符合模式 #{pattern}",
        uppercase: "`#{value}` 必须全大写",
        lowercase: "`#{value}` 必须全小写"
      },
      object: {
        deepEqual: "`#{field}` 不等于期望值",
        hasKeys: "`#{field}` 不包含必须字段",
        empty: "`#{field}` 不是对象"
      },
      boolean: {
        true: "期望是 `true`",
        false: "期望是 `false`"
      }
    }
  },
  colorPicker: {
    history: "最近使用颜色",
    preset: "系统预设颜色",
    empty: "暂无"
  }
}, l0 = oe("zh-CN"), c0 = fr({
  "zh-CN": a0
}), u0 = () => {
  const e = Ot(xn, void 0), t = Z(
    () => {
      var r;
      return (r = e == null ? void 0 : e.locale) != null ? r : c0[l0.value];
    }
  ), n = Z(() => t.value.locale);
  return {
    i18nMessage: t,
    locale: n,
    t: (r, ...o) => {
      const s = r.split(".");
      let a = t.value;
      for (const l of s) {
        if (!a[l])
          return r;
        a = a[l];
      }
      return hr(a) && o.length > 0 ? a.replace(/{(\d+)}/g, (l, d) => {
        var c;
        return (c = o[d]) != null ? c : l;
      }) : a;
    }
  };
}, d0 = "A", f0 = "arco", mo = "$arco", fn = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : d0;
}, pn = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[mo] = {
    ...(n = e.config.globalProperties[mo]) != null ? n : {},
    classPrefix: t.classPrefix
  });
}, Re = (e) => {
  var t, n, i;
  const r = Hu(), o = Ot(xn, void 0), s = (i = (n = o == null ? void 0 : o.prefixCls) != null ? n : (t = r == null ? void 0 : r.appContext.config.globalProperties[mo]) == null ? void 0 : t.classPrefix) != null ? i : f0;
  return e ? `${s}-${e}` : s;
};
var Ja = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var i = -1;
    return t.some(function(r, o) {
      return r[0] === n ? (i = o, !0) : !1;
    }), i;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var i = e(this.__entries__, n), r = this.__entries__[i];
        return r && r[1];
      }, t.prototype.set = function(n, i) {
        var r = e(this.__entries__, n);
        ~r ? this.__entries__[r][1] = i : this.__entries__.push([n, i]);
      }, t.prototype.delete = function(n) {
        var i = this.__entries__, r = e(i, n);
        ~r && i.splice(r, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, i) {
        i === void 0 && (i = null);
        for (var r = 0, o = this.__entries__; r < o.length; r++) {
          var s = o[r];
          n.call(i, s[1], s[0]);
        }
      }, t;
    }()
  );
}(), vo = typeof window < "u" && typeof document < "u" && window.document === document, ir = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), p0 = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ir) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), h0 = 2;
function m0(e, t) {
  var n = !1, i = !1, r = 0;
  function o() {
    n && (n = !1, e()), i && a();
  }
  function s() {
    p0(o);
  }
  function a() {
    var l = Date.now();
    if (n) {
      if (l - r < h0)
        return;
      i = !0;
    } else
      n = !0, i = !1, setTimeout(s, t);
    r = l;
  }
  return a;
}
var v0 = 20, g0 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], y0 = typeof MutationObserver < "u", b0 = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = m0(this.refresh.bind(this), v0);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, i = n.indexOf(t);
      ~i && n.splice(i, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !vo || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), y0 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !vo || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, i = n === void 0 ? "" : n, r = g0.some(function(o) {
        return !!~i.indexOf(o);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Za = function(e, t) {
  for (var n = 0, i = Object.keys(t); n < i.length; n++) {
    var r = i[n];
    Object.defineProperty(e, r, {
      value: t[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Cn = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || ir;
}, Qa = mr(0, 0, 0, 0);
function rr(e) {
  return parseFloat(e) || 0;
}
function Os(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(i, r) {
    var o = e["border-" + r + "-width"];
    return i + rr(o);
  }, 0);
}
function E0(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, i = 0, r = t; i < r.length; i++) {
    var o = r[i], s = e["padding-" + o];
    n[o] = rr(s);
  }
  return n;
}
function w0(e) {
  var t = e.getBBox();
  return mr(0, 0, t.width, t.height);
}
function S0(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Qa;
  var i = Cn(e).getComputedStyle(e), r = E0(i), o = r.left + r.right, s = r.top + r.bottom, a = rr(i.width), l = rr(i.height);
  if (i.boxSizing === "border-box" && (Math.round(a + o) !== t && (a -= Os(i, "left", "right") + o), Math.round(l + s) !== n && (l -= Os(i, "top", "bottom") + s)), !C0(e)) {
    var d = Math.round(a + o) - t, c = Math.round(l + s) - n;
    Math.abs(d) !== 1 && (a -= d), Math.abs(c) !== 1 && (l -= c);
  }
  return mr(r.left, r.top, a, l);
}
var _0 = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Cn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Cn(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function C0(e) {
  return e === Cn(e).document.documentElement;
}
function k0(e) {
  return vo ? _0(e) ? w0(e) : S0(e) : Qa;
}
function T0(e) {
  var t = e.x, n = e.y, i = e.width, r = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(o.prototype);
  return Za(s, {
    x: t,
    y: n,
    width: i,
    height: r,
    top: n,
    right: t + i,
    bottom: r + n,
    left: t
  }), s;
}
function mr(e, t, n, i) {
  return { x: e, y: t, width: n, height: i };
}
var A0 = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = mr(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = k0(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), O0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var i = T0(n);
      Za(this, { target: t, contentRect: i });
    }
    return e;
  }()
), D0 = (
  /** @class */
  function() {
    function e(t, n, i) {
      if (this.activeObservations_ = [], this.observations_ = new Ja(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = i;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Cn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new A0(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Cn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(i) {
          return new O0(i.target, i.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), el = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ja(), tl = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = b0.getInstance(), i = new D0(t, n, this);
      el.set(this, i);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  tl.prototype[e] = function() {
    var t;
    return (t = el.get(this))[e].apply(t, arguments);
  };
});
var nl = function() {
  return typeof ir.ResizeObserver < "u" ? ir.ResizeObserver : tl;
}();
const Fo = (e) => !!(e && e.shapeFlag & 1), Mo = (e, t) => !!(e && e.shapeFlag & 6), il = (e, t) => !!(e && e.shapeFlag & 16), P0 = (e, t) => !!(e && e.shapeFlag & 32), zi = (e) => {
  var t, n;
  if (e)
    for (const i of e) {
      if (Fo(i) || Mo(i))
        return i;
      if (il(i, i.children)) {
        const r = zi(i.children);
        if (r)
          return r;
      } else if (P0(i, i.children)) {
        const r = (n = (t = i.children).default) == null ? void 0 : n.call(t);
        if (r) {
          const o = zi(r);
          if (o)
            return o;
        }
      } else if (Ro(i)) {
        const r = zi(i);
        if (r)
          return r;
      }
    }
}, B0 = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, rl = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      if (Fo(i) || Mo(i)) {
        const o = Tt(t) ? t(i) : t;
        return e[n] = qa(i, o, !0), !0;
      }
      const r = ol(i);
      if (r && r.length > 0 && rl(r, t))
        return !0;
    }
  return !1;
}, ol = (e) => {
  if (il(e, e.children))
    return e.children;
  if (Ro(e))
    return e;
}, sl = (e) => {
  var t, n;
  if (Fo(e))
    return e.el;
  if (Mo(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const i = sl(e.component.subTree);
      if (i)
        return i;
    }
  } else {
    const i = ol(e);
    return al(i);
  }
}, al = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = sl(t);
      if (n)
        return n;
    }
}, Yn = (e) => {
  if (e)
    return Tt(e) ? e : () => e;
}, ll = typeof window > "u" ? global : window, x0 = ll.requestAnimationFrame, Ds = ll.cancelAnimationFrame;
function Ps(e) {
  let t = 0;
  const n = (...i) => {
    t && Ds(t), t = x0(() => {
      e(...i), t = 0;
    });
  };
  return n.cancel = () => {
    Ds(t), t = 0;
  }, n;
}
const No = () => {
}, cl = () => {
  const { body: e } = document, t = document.documentElement;
  let n;
  try {
    n = (window.top || window.self || window).document.body;
  } catch {
  }
  return {
    height: Math.max(
      e.scrollHeight,
      e.offsetHeight,
      t.clientHeight,
      t.scrollHeight,
      t.offsetHeight,
      (n == null ? void 0 : n.scrollHeight) || 0,
      (n == null ? void 0 : n.clientHeight) || 0
    ),
    width: Math.max(
      e.scrollWidth,
      e.offsetWidth,
      t.clientWidth,
      t.scrollWidth,
      t.offsetWidth,
      (n == null ? void 0 : n.scrollWidth) || 0,
      (n == null ? void 0 : n.clientWidth) || 0
    )
  };
}, Lo = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), nn = Lo ? No : (e, t, n, i = !1) => {
  e.addEventListener(
    t,
    n,
    i
  );
}, ii = Lo ? No : (e, t, n, i = !1) => {
  e.removeEventListener(
    t,
    n,
    i
  );
}, I0 = (e, t) => {
  if (!e || !t)
    return !1;
  let n = t;
  for (; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}, ul = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t;
}, $0 = (e, t) => {
  var n;
  return Lo ? No() : (n = document.querySelector(e)) != null ? n : void 0;
}, go = (e, t) => {
  if (hr(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return $0(n);
  }
  return e;
}, R0 = (e) => e.tagName === "BODY" ? document.documentElement.scrollHeight > window.innerHeight : e.scrollHeight > e.offsetHeight, F0 = (e) => e.tagName === "BODY" ? window.innerWidth - cl().width : e.offsetWidth - e.clientWidth;
var Ke = (e, t) => {
  for (const [n, i] of t)
    e[n] = i;
  return e;
};
const M0 = Ee({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    return {
      prefixCls: Re("icon-hover")
    };
  }
});
function N0(e, t, n, i, r, o) {
  return F(), X("span", {
    class: pe([
      e.prefixCls,
      {
        [`${e.prefix}-icon-hover`]: e.prefix,
        [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
        [`${e.prefixCls}-disabled`]: e.disabled
      }
    ])
  }, [
    Pe(e.$slots, "default")
  ], 2);
}
var jo = /* @__PURE__ */ Ke(M0, [["render", N0]]);
const L0 = Ee({
  name: "IconClose",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { emit: t }) {
    const n = Re("icon"), i = Z(() => [n, `${n}-close`, { [`${n}-spin`]: e.spin }]), r = Z(() => {
      const s = {};
      return e.size && (s.fontSize = Dt(e.size) ? `${e.size}px` : e.size), e.rotate && (s.transform = `rotate(${e.rotate}deg)`), s;
    });
    return {
      cls: i,
      innerStyle: r,
      onClick: (s) => {
        t("click", s);
      }
    };
  }
}), j0 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
function z0(e, t, n, i, r, o) {
  return F(), X("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: pe(e.cls),
    style: ot(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
  }, t[1] || (t[1] = [
    U("path", { d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142" }, null, -1)
  ]), 14, j0);
}
var Dr = /* @__PURE__ */ Ke(L0, [["render", z0]]);
const zo = Object.assign(Dr, {
  install: (e, t) => {
    var n;
    const i = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(i + Dr.name, Dr);
  }
}), V0 = Ee({
  name: "IconInfoCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { emit: t }) {
    const n = Re("icon"), i = Z(() => [n, `${n}-info-circle-fill`, { [`${n}-spin`]: e.spin }]), r = Z(() => {
      const s = {};
      return e.size && (s.fontSize = Dt(e.size) ? `${e.size}px` : e.size), e.rotate && (s.transform = `rotate(${e.rotate}deg)`), s;
    });
    return {
      cls: i,
      innerStyle: r,
      onClick: (s) => {
        t("click", s);
      }
    };
  }
}), U0 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
function H0(e, t, n, i, r, o) {
  return F(), X("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: pe(e.cls),
    style: ot(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
  }, t[1] || (t[1] = [
    U("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
      fill: "currentColor",
      stroke: "none"
    }, null, -1)
  ]), 14, U0);
}
var Pr = /* @__PURE__ */ Ke(V0, [["render", H0]]);
const dl = Object.assign(Pr, {
  install: (e, t) => {
    var n;
    const i = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(i + Pr.name, Pr);
  }
}), q0 = Ee({
  name: "IconCheckCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { emit: t }) {
    const n = Re("icon"), i = Z(() => [n, `${n}-check-circle-fill`, { [`${n}-spin`]: e.spin }]), r = Z(() => {
      const s = {};
      return e.size && (s.fontSize = Dt(e.size) ? `${e.size}px` : e.size), e.rotate && (s.transform = `rotate(${e.rotate}deg)`), s;
    });
    return {
      cls: i,
      innerStyle: r,
      onClick: (s) => {
        t("click", s);
      }
    };
  }
}), W0 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
function G0(e, t, n, i, r, o) {
  return F(), X("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: pe(e.cls),
    style: ot(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
  }, t[1] || (t[1] = [
    U("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
      fill: "currentColor",
      stroke: "none"
    }, null, -1)
  ]), 14, W0);
}
var Br = /* @__PURE__ */ Ke(q0, [["render", G0]]);
const fl = Object.assign(Br, {
  install: (e, t) => {
    var n;
    const i = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(i + Br.name, Br);
  }
}), K0 = Ee({
  name: "IconExclamationCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { emit: t }) {
    const n = Re("icon"), i = Z(() => [n, `${n}-exclamation-circle-fill`, { [`${n}-spin`]: e.spin }]), r = Z(() => {
      const s = {};
      return e.size && (s.fontSize = Dt(e.size) ? `${e.size}px` : e.size), e.rotate && (s.transform = `rotate(${e.rotate}deg)`), s;
    });
    return {
      cls: i,
      innerStyle: r,
      onClick: (s) => {
        t("click", s);
      }
    };
  }
}), Y0 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
function X0(e, t, n, i, r, o) {
  return F(), X("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: pe(e.cls),
    style: ot(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
  }, t[1] || (t[1] = [
    U("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
      fill: "currentColor",
      stroke: "none"
    }, null, -1)
  ]), 14, Y0);
}
var xr = /* @__PURE__ */ Ke(K0, [["render", X0]]);
const pl = Object.assign(xr, {
  install: (e, t) => {
    var n;
    const i = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(i + xr.name, xr);
  }
}), J0 = Ee({
  name: "IconCloseCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { emit: t }) {
    const n = Re("icon"), i = Z(() => [n, `${n}-close-circle-fill`, { [`${n}-spin`]: e.spin }]), r = Z(() => {
      const s = {};
      return e.size && (s.fontSize = Dt(e.size) ? `${e.size}px` : e.size), e.rotate && (s.transform = `rotate(${e.rotate}deg)`), s;
    });
    return {
      cls: i,
      innerStyle: r,
      onClick: (s) => {
        t("click", s);
      }
    };
  }
}), Z0 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
function Q0(e, t, n, i, r, o) {
  return F(), X("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: pe(e.cls),
    style: ot(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
  }, t[1] || (t[1] = [
    U("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
      fill: "currentColor",
      stroke: "none"
    }, null, -1)
  ]), 14, Z0);
}
var Ir = /* @__PURE__ */ Ke(J0, [["render", Q0]]);
const hl = Object.assign(Ir, {
  install: (e, t) => {
    var n;
    const i = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(i + Ir.name, Ir);
  }
}), ml = ["info", "success", "warning", "error"], ed = Ee({
  name: "IconLoading",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { emit: t }) {
    const n = Re("icon"), i = Z(() => [n, `${n}-loading`, { [`${n}-spin`]: e.spin }]), r = Z(() => {
      const s = {};
      return e.size && (s.fontSize = Dt(e.size) ? `${e.size}px` : e.size), e.rotate && (s.transform = `rotate(${e.rotate}deg)`), s;
    });
    return {
      cls: i,
      innerStyle: r,
      onClick: (s) => {
        t("click", s);
      }
    };
  }
}), td = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
function nd(e, t, n, i, r, o) {
  return F(), X("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: pe(e.cls),
    style: ot(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
  }, t[1] || (t[1] = [
    U("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" }, null, -1)
  ]), 14, td);
}
var $r = /* @__PURE__ */ Ke(ed, [["render", nd]]);
const pi = Object.assign($r, {
  install: (e, t) => {
    var n;
    const i = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(i + $r.name, $r);
  }
}), vl = (e, t) => {
  const n = { ...e };
  for (const i of t)
    i in n && delete n[i];
  return n;
}, id = Symbol(
  "ArcoFormItemContext"
), rd = ({
  size: e,
  disabled: t,
  error: n,
  uninject: i
} = {}) => {
  const r = i ? {} : Ot(id, {}), o = Z(() => {
    var c;
    return (c = e == null ? void 0 : e.value) != null ? c : r.size;
  }), s = Z(
    () => (t == null ? void 0 : t.value) || r.disabled
  ), a = Z(() => (n == null ? void 0 : n.value) || r.error), l = Ss(r, "feedback"), d = Ss(r, "eventHandlers");
  return {
    formItemCtx: r,
    mergedSize: o,
    mergedDisabled: s,
    mergedError: a,
    feedback: l,
    eventHandlers: d
  };
}, gl = (e, { defaultValue: t = "medium" } = {}) => {
  const n = Ot(xn, void 0);
  return {
    mergedSize: Z(
      () => {
        var r, o;
        return (o = (r = e == null ? void 0 : e.value) != null ? r : n == null ? void 0 : n.size) != null ? o : t;
      }
    )
  };
}, yl = Symbol("ArcoButtonGroup"), od = Ee({
  name: "Button",
  components: {
    IconLoading: pi
  },
  props: {
    type: {
      type: String
    },
    shape: {
      type: String
    },
    status: {
      type: String
    },
    size: {
      type: String
    },
    long: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean
    },
    htmlType: {
      type: String,
      default: "button"
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    href: String
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { emit: t }) {
    const { size: n, disabled: i } = di(e), r = Re("btn"), o = Ot(yl, void 0), s = Z(() => {
      var E;
      return (E = n.value) != null ? E : o == null ? void 0 : o.size;
    }), a = Z(
      () => !!(i.value || o != null && o.disabled)
    ), { mergedSize: l, mergedDisabled: d } = rd({
      size: s,
      disabled: a
    }), { mergedSize: c } = gl(l), u = Z(() => {
      var E, h, g, C, m, _;
      return [
        r,
        `${r}-${(h = (E = e.type) != null ? E : o == null ? void 0 : o.type) != null ? h : "secondary"}`,
        `${r}-shape-${(C = (g = e.shape) != null ? g : o == null ? void 0 : o.shape) != null ? C : "square"}`,
        `${r}-size-${c.value}`,
        `${r}-status-${(_ = (m = e.status) != null ? m : o == null ? void 0 : o.status) != null ? _ : "normal"}`,
        {
          [`${r}-long`]: e.long,
          [`${r}-loading`]: e.loading,
          [`${r}-disabled`]: d.value,
          [`${r}-link`]: hr(e.href)
        }
      ];
    });
    return {
      prefixCls: r,
      cls: u,
      mergedDisabled: d,
      handleClick: (E) => {
        if (e.disabled || e.loading) {
          E.preventDefault();
          return;
        }
        t("click", E);
      }
    };
  }
}), sd = ["href"], ad = ["type", "disabled", "autofocus"];
function ld(e, t, n, i, r, o) {
  const s = Oe("icon-loading");
  return e.href ? (F(), X("a", {
    key: 0,
    class: pe([
      e.cls,
      { [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default }
    ]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [
    e.loading || e.$slots.icon ? (F(), X("span", {
      key: 0,
      class: pe(`${e.prefixCls}-icon`)
    }, [
      e.loading ? (F(), ye(s, {
        key: 0,
        spin: ""
      })) : Pe(e.$slots, "icon", { key: 1 })
    ], 2)) : ve("v-if", !0),
    Pe(e.$slots, "default")
  ], 10, sd)) : (F(), X("button", {
    key: 1,
    class: pe([
      e.cls,
      { [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default }
    ]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    autofocus: e.autofocus,
    onClick: t[1] || (t[1] = (...a) => e.handleClick && e.handleClick(...a))
  }, [
    e.loading || e.$slots.icon ? (F(), X("span", {
      key: 0,
      class: pe(`${e.prefixCls}-icon`)
    }, [
      e.loading ? (F(), ye(s, {
        key: 0,
        spin: !0
      })) : Pe(e.$slots, "icon", { key: 1 })
    ], 2)) : ve("v-if", !0),
    Pe(e.$slots, "default")
  ], 10, ad));
}
var Rr = /* @__PURE__ */ Ke(od, [["render", ld]]);
const cd = Ee({
  name: "ButtonGroup",
  props: {
    type: {
      type: String
    },
    status: {
      type: String
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const { type: t, size: n, status: i, disabled: r, shape: o } = di(e), s = Re("btn-group");
    return Wa(
      yl,
      fr({
        type: t,
        size: n,
        shape: o,
        status: i,
        disabled: r
      })
    ), {
      prefixCls: s
    };
  }
});
function ud(e, t, n, i, r, o) {
  return F(), X("div", {
    class: pe(e.prefixCls)
  }, [
    Pe(e.$slots, "default")
  ], 2);
}
var Vi = /* @__PURE__ */ Ke(cd, [["render", ud]]);
const ft = Object.assign(Rr, {
  Group: Vi,
  install: (e, t) => {
    pn(e, t);
    const n = fn(t);
    e.component(n + Rr.name, Rr), e.component(n + Vi.name, Vi);
  }
}), dd = () => {
  const { height: e, width: t } = cl();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, Bs = (e, t) => {
  var n, i;
  const r = e.getBoundingClientRect();
  return {
    top: r.top,
    bottom: r.bottom,
    left: r.left,
    right: r.right,
    scrollTop: r.top - t.top,
    scrollBottom: r.bottom - t.top,
    scrollLeft: r.left - t.left,
    scrollRight: r.right - t.left,
    width: (n = e.offsetWidth) != null ? n : e.clientWidth,
    height: (i = e.offsetHeight) != null ? i : e.clientHeight
  };
}, fd = (e) => {
  switch (e) {
    case "top":
    case "tl":
    case "tr":
      return "top";
    case "bottom":
    case "bl":
    case "br":
      return "bottom";
    case "left":
    case "lt":
    case "lb":
      return "left";
    case "right":
    case "rt":
    case "rb":
      return "right";
    default:
      return "top";
  }
}, Di = (e, t) => {
  switch (t) {
    case "top":
      switch (e) {
        case "bottom":
          return "top";
        case "bl":
          return "tl";
        case "br":
          return "tr";
        default:
          return e;
      }
    case "bottom":
      switch (e) {
        case "top":
          return "bottom";
        case "tl":
          return "bl";
        case "tr":
          return "br";
        default:
          return e;
      }
    case "left":
      switch (e) {
        case "right":
          return "left";
        case "rt":
          return "lt";
        case "rb":
          return "lb";
        default:
          return e;
      }
    case "right":
      switch (e) {
        case "left":
          return "right";
        case "lt":
          return "rt";
        case "lb":
          return "rb";
        default:
          return e;
      }
    default:
      return e;
  }
}, pd = (e, t, {
  containerRect: n,
  triggerRect: i,
  popupRect: r,
  offset: o,
  translate: s
}) => {
  const a = fd(e), l = dd(), d = {
    top: n.top + t.top,
    bottom: l.height - (n.top + t.top + r.height),
    left: n.left + t.left,
    right: l.width - (n.left + t.left + r.width)
  };
  let c = e;
  if (a === "top" && d.top < 0)
    if (i.top > r.height)
      t.top = -n.top;
    else {
      const u = Gn("bottom", i, r, {
        offset: o,
        translate: s
      });
      l.height - (n.top + u.top + r.height) > 0 && (c = Di(e, "bottom"), t.top = u.top);
    }
  if (a === "bottom" && d.bottom < 0)
    if (l.height - i.bottom > r.height)
      t.top = -n.top + (l.height - r.height);
    else {
      const u = Gn("top", i, r, {
        offset: o,
        translate: s
      });
      n.top + u.top > 0 && (c = Di(e, "top"), t.top = u.top);
    }
  if (a === "left" && d.left < 0)
    if (i.left > r.width)
      t.left = -n.left;
    else {
      const u = Gn("right", i, r, {
        offset: o,
        translate: s
      });
      l.width - (n.left + u.left + r.width) > 0 && (c = Di(e, "right"), t.left = u.left);
    }
  if (a === "right" && d.right < 0)
    if (l.width - i.right > r.width)
      t.left = -n.left + (l.width - r.width);
    else {
      const u = Gn("left", i, r, {
        offset: o,
        translate: s
      });
      n.left + u.left > 0 && (c = Di(e, "left"), t.left = u.left);
    }
  return (a === "top" || a === "bottom") && (d.left < 0 ? t.left = -n.left : d.right < 0 && (t.left = -n.left + (l.width - r.width))), (a === "left" || a === "right") && (d.top < 0 ? t.top = -n.top : d.bottom < 0 && (t.top = -n.top + (l.height - r.height))), {
    popupPosition: t,
    position: c
  };
}, Gn = (e, t, n, {
  offset: i = 0,
  translate: r = [0, 0]
} = {}) => {
  var o;
  const s = (o = Ro(r) ? r : r[e]) != null ? o : [0, 0];
  switch (e) {
    case "top":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + s[0],
        top: t.scrollTop - n.height - i + s[1]
      };
    case "tl":
      return {
        left: t.scrollLeft + s[0],
        top: t.scrollTop - n.height - i + s[1]
      };
    case "tr":
      return {
        left: t.scrollRight - n.width + s[0],
        top: t.scrollTop - n.height - i + s[1]
      };
    case "bottom":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + s[0],
        top: t.scrollBottom + i + s[1]
      };
    case "bl":
      return {
        left: t.scrollLeft + s[0],
        top: t.scrollBottom + i + s[1]
      };
    case "br":
      return {
        left: t.scrollRight - n.width + s[0],
        top: t.scrollBottom + i + s[1]
      };
    case "left":
      return {
        left: t.scrollLeft - n.width - i + s[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + s[1]
      };
    case "lt":
      return {
        left: t.scrollLeft - n.width - i + s[0],
        top: t.scrollTop + s[1]
      };
    case "lb":
      return {
        left: t.scrollLeft - n.width - i + s[0],
        top: t.scrollBottom - n.height + s[1]
      };
    case "right":
      return {
        left: t.scrollRight + i + s[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + s[1]
      };
    case "rt":
      return {
        left: t.scrollRight + i + s[0],
        top: t.scrollTop + s[1]
      };
    case "rb":
      return {
        left: t.scrollRight + i + s[0],
        top: t.scrollBottom - n.height + s[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
}, hd = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, md = (e, t, n, i, {
  offset: r = 0,
  translate: o = [0, 0],
  customStyle: s = {},
  autoFitPosition: a = !1
} = {}) => {
  let l = e, d = Gn(e, n, i, {
    offset: r,
    translate: o
  });
  if (a) {
    const u = pd(e, d, {
      containerRect: t,
      popupRect: i,
      triggerRect: n,
      offset: r,
      translate: o
    });
    d = u.popupPosition, l = u.position;
  }
  return {
    style: {
      left: `${d.left}px`,
      top: `${d.top}px`,
      ...s
    },
    position: l
  };
}, vd = (e, t, n, {
  customStyle: i = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let o = Math.abs(
      t.scrollLeft + t.width / 2 - n.scrollLeft
    );
    return o > n.width - 8 && (t.width > n.width ? o = n.width / 2 : o = n.width - 8), ["top", "tl", "tr"].includes(e) ? {
      left: `${o}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)",
      ...i
    } : {
      left: `${o}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)",
      ...i
    };
  }
  let r = Math.abs(
    t.scrollTop + t.height / 2 - n.scrollTop
  );
  return r > n.height - 8 && (t.height > n.height ? r = n.height / 2 : r = n.height - 8), ["left", "lt", "lb"].includes(e) ? {
    top: `${r}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)",
    ...i
  } : {
    top: `${r}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)",
    ...i
  };
}, gd = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, xs = (e) => {
  var t;
  const n = [];
  let i = e;
  for (; i && i !== document.documentElement; )
    gd(i) && n.push(i), i = (t = i.parentElement) != null ? t : void 0;
  return n;
}, bl = () => {
  const e = {}, t = oe(), n = () => {
    const i = al(e.value);
    i !== t.value && (t.value = i);
  };
  return bt(() => n()), pr(() => n()), {
    children: e,
    firstElement: t
  };
};
var Is = Ee({
  name: "ResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: [
    "resize"
  ],
  setup(e, { emit: t, slots: n }) {
    const { children: i, firstElement: r } = bl();
    let o;
    const s = (l) => {
      l && (o = new nl((d) => {
        const c = d[0];
        t("resize", c);
      }), o.observe(l));
    }, a = () => {
      o && (o.disconnect(), o = null);
    };
    return Ge(r, (l) => {
      o && a(), l && s(l);
    }), Pn(() => {
      o && a();
    }), () => {
      var l;
      return i.value = (l = n.default) == null ? void 0 : l.call(n), i.value;
    };
  }
});
function yd(e, t) {
  const n = oe(e[t]);
  return pr(() => {
    const i = e[t];
    n.value !== i && (n.value = i);
  }), n;
}
const $s = Symbol("ArcoTrigger"), bd = 1e3, Ed = 5e3, wd = 1;
class Sd {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || Ed : Array.from(this.popupStack.popup).pop() || bd) + wd, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const Fr = new Sd();
function Vo(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const i = oe(0), r = () => {
    i.value = Fr.add(e);
  }, o = () => {
    Fr.delete(i.value, e);
  }, s = () => e === "dialog" ? Fr.isLastDialog(i.value) : !1;
  return Ge(
    () => t == null ? void 0 : t.value,
    (a) => {
      a ? r() : o();
    },
    {
      immediate: !0
    }
  ), n && (bt(() => {
    r();
  }), Pn(() => {
    o();
  })), {
    zIndex: qu(i),
    open: r,
    close: o,
    isLastDialog: s
  };
}
const _d = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new nl((o) => {
        const s = o[0];
        Tt(t) && t(s);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var El = Ee({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = oe(!1);
    return bt(() => n.value = !0), () => {
      var i;
      return n.value ? (i = t.default) == null ? void 0 : i.call(t) : null;
    };
  }
});
const wl = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: i
}) => {
  const r = oe(e.value), o = oe(), s = () => {
    const a = go(e.value), l = a ? e.value : n, d = a ?? (i ? document.documentElement : go(n));
    l !== r.value && (r.value = l), d !== o.value && (o.value = d);
  };
  return bt(() => s()), Ge(t, (a) => {
    r.value !== e.value && a && s();
  }), {
    teleportContainer: r,
    containerRef: o
  };
}, Cd = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var Mr = Ee({
  name: "Trigger",
  inheritAttrs: !1,
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "bottom"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    popupOffset: {
      type: Number,
      default: 0
    },
    popupTranslate: {
      type: [Array, Object]
    },
    showArrow: {
      type: Boolean,
      default: !1
    },
    alignPoint: {
      type: Boolean,
      default: !1
    },
    popupHoverStay: {
      type: Boolean,
      default: !0
    },
    blurToClose: {
      type: Boolean,
      default: !0
    },
    clickToClose: {
      type: Boolean,
      default: !0
    },
    clickOutsideToClose: {
      type: Boolean,
      default: !0
    },
    unmountOnClose: {
      type: Boolean,
      default: !0
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    animationName: {
      type: String,
      default: "fade-in"
    },
    duration: {
      type: [Number, Object]
    },
    mouseEnterDelay: {
      type: Number,
      default: 100
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    },
    focusDelay: {
      type: Number,
      default: 0
    },
    autoFitPopupWidth: {
      type: Boolean,
      default: !1
    },
    autoFitPopupMinWidth: {
      type: Boolean,
      default: !1
    },
    autoFixPosition: {
      type: Boolean,
      default: !0
    },
    popupContainer: {
      type: [String, Object]
    },
    updateAtScroll: {
      type: Boolean,
      default: !1
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: !1
    },
    hideEmpty: {
      type: Boolean,
      default: !1
    },
    openedClass: {
      type: [String, Array, Object]
    },
    autoFitPosition: {
      type: Boolean,
      default: !0
    },
    renderToBody: {
      type: Boolean,
      default: !0
    },
    preventFocus: {
      type: Boolean,
      default: !1
    },
    scrollToClose: {
      type: Boolean,
      default: !1
    },
    scrollToCloseDistance: {
      type: Number,
      default: 0
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0,
    show: () => !0,
    hide: () => !0,
    resize: () => !0
  },
  setup(e, {
    emit: t,
    slots: n,
    attrs: i
  }) {
    const {
      popupContainer: r
    } = di(e), o = Re("trigger"), s = Z(() => vl(i, Cd)), a = Ot(xn, void 0), l = Z(() => [].concat(e.trigger)), d = /* @__PURE__ */ new Set(), c = Ot($s, void 0), {
      children: u,
      firstElement: f
    } = bl(), E = oe(), h = oe(e.defaultPopupVisible), g = oe(e.position), C = oe({}), m = oe({}), _ = oe({}), O = oe(), p = oe({
      top: 0,
      left: 0
    });
    let R = null, T = null;
    const I = Z(() => {
      var j;
      return (j = e.popupVisible) != null ? j : h.value;
    }), {
      teleportContainer: q,
      containerRef: K
    } = wl({
      popupContainer: r,
      visible: I,
      documentContainer: !0
    }), {
      zIndex: G
    } = Vo("popup", {
      visible: I
    });
    let Y = 0, P = !1, M = !1;
    const S = () => {
      Y && (window.clearTimeout(Y), Y = 0);
    }, v = (j) => {
      if (e.alignPoint) {
        const {
          pageX: ne,
          pageY: Le
        } = j;
        p.value = {
          top: Le,
          left: ne
        };
      }
    }, w = () => {
      if (!f.value || !E.value || !K.value)
        return;
      const j = K.value.getBoundingClientRect(), ne = e.alignPoint ? {
        top: p.value.top,
        bottom: p.value.top,
        left: p.value.left,
        right: p.value.left,
        scrollTop: p.value.top,
        scrollBottom: p.value.top,
        scrollLeft: p.value.left,
        scrollRight: p.value.left,
        width: 0,
        height: 0
      } : Bs(f.value, j), Le = () => Bs(E.value, j), $t = Le(), {
        style: St,
        position: Rt
      } = md(e.position, j, ne, $t, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (m.value = {
        transformOrigin: hd(Rt)
      }), e.autoFitPopupMinWidth ? St.minWidth = `${ne.width}px` : e.autoFitPopupWidth && (St.width = `${ne.width}px`), g.value !== Rt && (g.value = Rt), C.value = St, e.showArrow && er(() => {
        _.value = vd(Rt, ne, Le(), {
          customStyle: e.arrowStyle
        });
      });
    }, k = (j, ne) => {
      if (j === I.value && Y === 0)
        return;
      const Le = () => {
        h.value = j, t("update:popupVisible", j), t("popupVisibleChange", j), j && er(() => {
          w();
        });
      };
      j || (R = null, T = null), ne ? (S(), j !== I.value && (Y = window.setTimeout(Le, ne))) : Le();
    }, x = (j) => {
      var ne;
      (ne = i.onClick) == null || ne.call(i, j), !(e.disabled || I.value && !e.clickToClose) && (l.value.includes("click") ? (v(j), k(!I.value)) : l.value.includes("contextMenu") && I.value && k(!1));
    }, B = (j) => {
      var ne;
      (ne = i.onMouseenter) == null || ne.call(i, j), !(e.disabled || !l.value.includes("hover")) && (v(j), k(!0, e.mouseEnterDelay));
    }, ie = (j) => {
      c == null || c.onMouseenter(j), B(j);
    }, ue = (j) => {
      var ne;
      (ne = i.onMouseleave) == null || ne.call(i, j), !(e.disabled || !l.value.includes("hover")) && k(!1, e.mouseLeaveDelay);
    }, te = (j) => {
      c == null || c.onMouseleave(j), ue(j);
    }, de = (j) => {
      var ne;
      (ne = i.onFocusin) == null || ne.call(i, j), !(e.disabled || !l.value.includes("focus")) && k(!0, e.focusDelay);
    }, _e = (j) => {
      var ne;
      (ne = i.onFocusout) == null || ne.call(i, j), !(e.disabled || !l.value.includes("focus")) && e.blurToClose && k(!1);
    }, Q = (j) => {
      var ne;
      (ne = i.onContextmenu) == null || ne.call(i, j), !(e.disabled || !l.value.includes("contextMenu") || I.value && !e.clickToClose) && (v(j), k(!I.value), j.preventDefault());
    };
    Wa($s, fr({
      onMouseenter: ie,
      onMouseleave: te,
      addChildRef: (j) => {
        d.add(j), c == null || c.addChildRef(j);
      },
      removeChildRef: (j) => {
        d.delete(j), c == null || c.removeChildRef(j);
      }
    }));
    const $ = () => {
      ii(document.documentElement, "mousedown", ee), P = !1;
    }, L = yd(n, "content"), V = Z(() => {
      var j;
      return e.hideEmpty && B0((j = L.value) == null ? void 0 : j.call(L));
    }), ee = (j) => {
      var ne, Le, $t;
      if (!((ne = f.value) != null && ne.contains(j.target) || (Le = E.value) != null && Le.contains(j.target))) {
        for (const St of d)
          if (($t = St.value) != null && $t.contains(j.target))
            return;
        $(), k(!1);
      }
    }, ge = (j, ne) => {
      const [Le, $t] = j, {
        scrollTop: St,
        scrollLeft: Rt
      } = ne;
      return Math.abs(St - Le) >= e.scrollToCloseDistance || Math.abs(Rt - $t) >= e.scrollToCloseDistance;
    }, he = Ps((j) => {
      if (I.value)
        if (e.scrollToClose || a != null && a.scrollToClose) {
          const ne = j.target;
          R || (R = [ne.scrollTop, ne.scrollLeft]), ge(R, ne) ? k(!1) : w();
        } else
          w();
    }), Ce = () => {
      ii(window, "scroll", je), M = !1;
    }, je = Ps((j) => {
      const ne = j.target.documentElement;
      T || (T = [ne.scrollTop, ne.scrollLeft]), ge(T, ne) && (k(!1), Ce());
    }), Ne = () => {
      I.value && w();
    }, Ie = () => {
      Ne(), t("resize");
    }, J = (j) => {
      e.preventFocus && j.preventDefault();
    };
    c == null || c.addChildRef(E);
    const Te = Z(() => I.value ? e.openedClass : void 0);
    let Se;
    Ge(I, (j) => {
      if (e.clickOutsideToClose && (!j && P ? $() : j && !P && (nn(document.documentElement, "mousedown", ee), P = !0)), (e.scrollToClose || a != null && a.scrollToClose) && (nn(window, "scroll", je), M = !0), e.updateAtScroll || a != null && a.updateAtScroll) {
        if (j) {
          Se = xs(f.value);
          for (const ne of Se)
            ne.addEventListener("scroll", he);
        } else if (Se) {
          for (const ne of Se)
            ne.removeEventListener("scroll", he);
          Se = void 0;
        }
      }
      j && (He.value = !0);
    }), Ge(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      I.value && w();
    });
    const {
      createResizeObserver: xe,
      destroyResizeObserver: nt
    } = _d({
      elementRef: K,
      onResize: Ne
    });
    bt(() => {
      if (xe(), I.value && (w(), e.clickOutsideToClose && !P && (nn(document.documentElement, "mousedown", ee), P = !0), e.updateAtScroll || a != null && a.updateAtScroll)) {
        Se = xs(f.value);
        for (const j of Se)
          j.addEventListener("scroll", he);
      }
    }), pr(() => {
      I.value && w();
    }), Wu(() => {
      k(!1);
    }), Pn(() => {
      if (c == null || c.removeChildRef(E), nt(), P && $(), M && Ce(), Se) {
        for (const j of Se)
          j.removeEventListener("scroll", he);
        Se = void 0;
      }
    });
    const He = oe(I.value), Fe = oe(!1), wt = () => {
      Fe.value = !0;
    }, xt = () => {
      Fe.value = !1, I.value && t("show");
    }, It = () => {
      Fe.value = !1, I.value || (He.value = !1, t("hide"));
    };
    return () => {
      var j, ne;
      return u.value = (ne = (j = n.default) == null ? void 0 : j.call(n)) != null ? ne : [], rl(u.value, {
        class: Te.value,
        onClick: x,
        onMouseenter: B,
        onMouseleave: ue,
        onFocusin: de,
        onFocusout: _e,
        onContextmenu: Q
      }), H(vt, null, [e.autoFixPosition ? H(Is, {
        onResize: Ie
      }, {
        default: () => [u.value]
      }) : u.value, H(El, null, {
        default: () => [H(Ga, {
          to: q.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || I.value || He.value) && !V.value && H(Is, {
            onResize: Ne
          }, {
            default: () => [H("div", Kn({
              ref: E,
              class: [`${o}-popup`, `${o}-position-${g.value}`],
              style: {
                ...C.value,
                zIndex: G.value,
                pointerEvents: Fe.value ? "none" : "auto"
              },
              "trigger-placement": g.value,
              onMouseenter: ie,
              onMouseleave: te,
              onMousedown: J
            }, s.value), [H(po, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: wt,
              onAfterEnter: xt,
              onBeforeLeave: wt,
              onAfterLeave: It
            }, {
              default: () => {
                var Le;
                return [pt(H("div", {
                  class: `${o}-popup-wrapper`,
                  style: m.value
                }, [H("div", {
                  class: [`${o}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(Le = n.content) == null ? void 0 : Le.call(n)]), e.showArrow && H("div", {
                  ref: O,
                  class: [`${o}-arrow`, e.arrowClass],
                  style: _.value
                }, null)]), [[ht, I.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const kd = Object.assign(Mr, {
  install: (e, t) => {
    pn(e, t);
    const n = fn(t);
    e.component(n + Mr.name, Mr);
  }
}), Td = 5;
var Ad = Ee({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(e) {
    const t = Re("dot-loading");
    return () => {
      const n = e.size ? {
        width: `${e.size}px`,
        height: `${e.size}px`
      } : {};
      return H("div", {
        class: t,
        style: {
          width: e.size ? `${e.size * 7}px` : void 0,
          height: e.size ? `${e.size}px` : void 0
        }
      }, [Array(Td).fill(1).map((i, r) => H("div", {
        class: `${t}-item`,
        key: r,
        style: n
      }, null))]);
    };
  }
}), Nr = Ee({
  name: "Spin",
  props: {
    size: {
      type: Number
    },
    loading: Boolean,
    dot: Boolean,
    tip: String,
    hideIcon: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = Re("spin"), i = Ot(xn, void 0), r = Z(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), o = () => {
      if (t.icon) {
        const a = zi(t.icon());
        if (a)
          return qa(a, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? H(Ad, {
        size: e.size
      }, null) : i != null && i.slots.loading ? i.slots.loading() : H(pi, {
        spin: !0,
        size: e.size
      }, null);
    }, s = () => {
      var a, l, d;
      const c = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, u = !!((a = t.tip) != null ? a : e.tip);
      return H(vt, null, [!e.hideIcon && H("div", {
        class: `${n}-icon`,
        style: c
      }, [o()]), u && H("div", {
        class: `${n}-tip`
      }, [(d = (l = t.tip) == null ? void 0 : l.call(t)) != null ? d : e.tip])]);
    };
    return () => H("div", {
      class: r.value
    }, [t.default ? H(vt, null, [t.default(), e.loading && H("div", {
      class: `${n}-mask`
    }, [H("div", {
      class: `${n}-mask-icon`
    }, [s()])])]) : s()]);
  }
});
const Uo = Object.assign(Nr, {
  install: (e, t) => {
    pn(e, t);
    const n = fn(t);
    e.component(n + Nr.name, Nr);
  }
}), Od = {
  ESC: "Escape"
}, Dd = Ee({
  name: "Popover",
  components: {
    Trigger: kd
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    title: String,
    content: String,
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "top"
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0
  },
  setup(e, { emit: t }) {
    const n = Re("popover"), i = oe(e.defaultPopupVisible), r = Z(
      () => {
        var l;
        return (l = e.popupVisible) != null ? l : i.value;
      }
    ), o = (l) => {
      i.value = l, t("update:popupVisible", l), t("popupVisibleChange", l);
    }, s = Z(() => [
      `${n}-popup-content`,
      e.contentClass
    ]), a = Z(() => [
      `${n}-popup-arrow`,
      e.arrowClass
    ]);
    return {
      prefixCls: n,
      computedPopupVisible: r,
      contentCls: s,
      arrowCls: a,
      handlePopupVisibleChange: o
    };
  }
});
function Pd(e, t, n, i, r, o) {
  const s = Oe("trigger");
  return F(), ye(s, {
    class: pe(e.prefixCls),
    trigger: e.trigger,
    position: e.position,
    "popup-visible": e.computedPopupVisible,
    "popup-offset": 10,
    "content-class": e.contentCls,
    "content-style": e.contentStyle,
    "arrow-class": e.arrowCls,
    "arrow-style": e.arrowStyle,
    "show-arrow": "",
    "popup-container": e.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    onPopupVisibleChange: e.handlePopupVisibleChange
  }, {
    content: ae(() => [
      e.title || e.$slots.title ? (F(), X("div", {
        key: 0,
        class: pe(`${e.prefixCls}-title`)
      }, [
        Pe(e.$slots, "title", {}, () => [
          Ve(le(e.title), 1)
        ])
      ], 2)) : ve("v-if", !0),
      U("div", {
        class: pe(`${e.prefixCls}-content`)
      }, [
        Pe(e.$slots, "content", {}, () => [
          Ve(le(e.content), 1)
        ])
      ], 2)
    ]),
    default: ae(() => [
      Pe(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Lr = /* @__PURE__ */ Ke(Dd, [["render", Pd]]);
const Jt = Object.assign(Lr, {
  install: (e, t) => {
    pn(e, t);
    const n = fn(t);
    e.component(n + Lr.name, Lr);
  }
}), Rs = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray"
], Bd = Ee({
  name: "Tag",
  components: {
    IconHover: jo,
    IconClose: zo,
    IconLoading: pi
  },
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !1
    },
    checkable: {
      type: Boolean,
      default: !1
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: !0
    },
    nowrap: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:visible": (e) => !0,
    "update:checked": (e) => !0,
    close: (e) => !0,
    check: (e, t) => !0
  },
  setup(e, { emit: t }) {
    const { size: n } = di(e), i = Re("tag"), r = Z(
      () => e.color && Rs.includes(e.color)
    ), o = Z(
      () => e.color && !Rs.includes(e.color)
    ), s = oe(e.defaultVisible), a = oe(e.defaultChecked), l = Z(() => {
      var _;
      return (_ = e.visible) != null ? _ : s.value;
    }), d = Z(
      () => {
        var _;
        return e.checkable ? (_ = e.checked) != null ? _ : a.value : !0;
      }
    ), { mergedSize: c } = gl(n), u = Z(() => c.value === "mini" ? "small" : c.value), f = (_) => {
      s.value = !1, t("update:visible", !1), t("close", _);
    }, E = (_) => {
      if (e.checkable) {
        const O = !d.value;
        a.value = O, t("update:checked", O), t("check", O, _);
      }
    }, h = Ot(xn, void 0), g = Z(() => {
      var _;
      return (_ = h == null ? void 0 : h.rtl) != null ? _ : !1;
    }), C = Z(() => [
      i,
      `${i}-size-${u.value}`,
      {
        [`${i}-loading`]: e.loading,
        [`${i}-hide`]: !l.value,
        [`${i}-${e.color}`]: r.value,
        [`${i}-bordered`]: e.bordered,
        [`${i}-checkable`]: e.checkable,
        [`${i}-checked`]: d.value,
        [`${i}-custom-color`]: o.value,
        [`${i}-rtl`]: g.value
      }
    ]), m = Z(() => {
      if (o.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: i,
      cls: C,
      style: m,
      computedVisible: l,
      computedChecked: d,
      handleClick: E,
      handleClose: f
    };
  }
});
function xd(e, t, n, i, r, o) {
  const s = Oe("icon-close"), a = Oe("icon-hover"), l = Oe("icon-loading");
  return e.computedVisible ? (F(), X("span", {
    key: 0,
    class: pe(e.cls),
    style: ot(e.style),
    onClick: t[0] || (t[0] = (...d) => e.handleClick && e.handleClick(...d))
  }, [
    e.$slots.icon ? (F(), X("span", {
      key: 0,
      class: pe(`${e.prefixCls}-icon`)
    }, [
      Pe(e.$slots, "icon")
    ], 2)) : ve("v-if", !0),
    e.nowrap ? (F(), X("span", {
      key: 1,
      class: pe(`${e.prefixCls}-text`)
    }, [
      Pe(e.$slots, "default")
    ], 2)) : Pe(e.$slots, "default", { key: 2 }),
    e.closable ? (F(), ye(a, {
      key: 3,
      role: "button",
      "aria-label": "Close",
      prefix: e.prefixCls,
      class: pe(`${e.prefixCls}-close-btn`),
      onClick: ho(e.handleClose, ["stop"])
    }, {
      default: ae(() => [
        Pe(e.$slots, "close-icon", {}, () => [
          H(s)
        ])
      ]),
      _: 3
    }, 8, ["prefix", "class", "onClick"])) : ve("v-if", !0),
    e.loading ? (F(), X("span", {
      key: 4,
      class: pe(`${e.prefixCls}-loading-icon`)
    }, [
      H(l)
    ], 2)) : ve("v-if", !0)
  ], 6)) : ve("v-if", !0);
}
var jr = /* @__PURE__ */ Ke(Bd, [["render", xd]]);
const ri = Object.assign(jr, {
  install: (e, t) => {
    pn(e, t);
    const n = fn(t);
    e.component(n + jr.name, jr);
  }
});
function Id(e, t, n) {
  return Z(() => !!(e[n] || t[n]));
}
const $d = Ee({
  name: "IconLink",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { emit: t }) {
    const n = Re("icon"), i = Z(() => [n, `${n}-link`, { [`${n}-spin`]: e.spin }]), r = Z(() => {
      const s = {};
      return e.size && (s.fontSize = Dt(e.size) ? `${e.size}px` : e.size), e.rotate && (s.transform = `rotate(${e.rotate}deg)`), s;
    });
    return {
      cls: i,
      innerStyle: r,
      onClick: (s) => {
        t("click", s);
      }
    };
  }
}), Rd = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
function Fd(e, t, n, i, r, o) {
  return F(), X("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: pe(e.cls),
    style: ot(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
  }, t[1] || (t[1] = [
    U("path", { d: "m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485" }, null, -1)
  ]), 14, Rd);
}
var zr = /* @__PURE__ */ Ke($d, [["render", Fd]]);
const Md = Object.assign(zr, {
  install: (e, t) => {
    var n;
    const i = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(i + zr.name, zr);
  }
}), Nd = Ee({
  name: "Link",
  components: { IconLink: Md, IconLoading: pi },
  props: {
    href: String,
    status: {
      type: String,
      default: "normal"
    },
    hoverable: {
      type: Boolean,
      default: !0
    },
    icon: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, { slots: t, emit: n }) {
    const i = Re("link"), r = Id(e, t, "icon"), o = (a) => {
      if (e.disabled || e.loading) {
        a.preventDefault();
        return;
      }
      n("click", a);
    };
    return {
      cls: Z(() => [
        i,
        `${i}-status-${e.status}`,
        {
          [`${i}-disabled`]: e.disabled,
          [`${i}-loading`]: e.loading,
          [`${i}-hoverless`]: !e.hoverable,
          [`${i}-with-icon`]: e.loading || r.value
        }
      ]),
      prefixCls: i,
      showIcon: r,
      handleClick: o
    };
  }
}), Ld = ["href"];
function jd(e, t, n, i, r, o) {
  const s = Oe("icon-loading"), a = Oe("icon-link");
  return F(), X("a", {
    href: e.disabled ? void 0 : e.href,
    class: pe(e.cls),
    onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    e.loading || e.showIcon ? (F(), X("span", {
      key: 0,
      class: pe(`${e.prefixCls}-icon`)
    }, [
      e.loading ? (F(), ye(s, { key: 0 })) : Pe(e.$slots, "icon", { key: 1 }, () => [
        H(a)
      ])
    ], 2)) : ve("v-if", !0),
    Pe(e.$slots, "default")
  ], 10, Ld);
}
var Vr = /* @__PURE__ */ Ke(Nd, [["render", jd]]);
const zd = Object.assign(Vr, {
  install: (e, t) => {
    pn(e, t);
    const n = fn(t);
    e.component(n + Vr.name, Vr);
  }
}), Vd = (e) => {
  const t = oe(!1), n = {
    overflow: "",
    width: "",
    boxSizing: ""
  };
  return {
    setOverflowHidden: () => {
      if (e.value) {
        const o = e.value;
        if (!t.value && o.style.overflow !== "hidden") {
          const s = F0(o);
          (s > 0 || R0(o)) && (n.overflow = o.style.overflow, n.width = o.style.width, n.boxSizing = o.style.boxSizing, o.style.overflow = "hidden", o.style.width = `${o.offsetWidth - s}px`, o.style.boxSizing = "border-box", t.value = !0);
        }
      }
    },
    resetOverflow: () => {
      if (e.value && t.value) {
        const o = e.value;
        o.style.overflow = n.overflow, o.style.width = n.width, o.style.boxSizing = n.boxSizing, t.value = !1;
      }
    }
  };
}, Ud = Ee({
  name: "Message",
  components: {
    AIconHover: jo,
    IconInfoCircleFill: dl,
    IconCheckCircleFill: fl,
    IconExclamationCircleFill: pl,
    IconCloseCircleFill: hl,
    IconClose: zo,
    IconLoading: pi
  },
  props: {
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: !1
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 3e3
    },
    resetOnUpdate: {
      type: Boolean,
      default: !1
    },
    resetOnHover: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = Re("message");
    let i = 0;
    const r = () => {
      t("close");
    }, o = () => {
      e.duration > 0 && (i = window.setTimeout(r, e.duration));
    }, s = () => {
      i && (window.clearTimeout(i), i = 0);
    };
    return bt(() => {
      o();
    }), pr(() => {
      e.resetOnUpdate && (s(), o());
    }), Ka(() => {
      s();
    }), {
      handleMouseEnter: () => {
        e.resetOnHover && s();
      },
      handleMouseLeave: () => {
        e.resetOnHover && o();
      },
      prefixCls: n,
      handleClose: r
    };
  }
});
function Hd(e, t, n, i, r, o) {
  const s = Oe("icon-info-circle-fill"), a = Oe("icon-check-circle-fill"), l = Oe("icon-exclamation-circle-fill"), d = Oe("icon-close-circle-fill"), c = Oe("icon-loading"), u = Oe("icon-close"), f = Oe("a-icon-hover");
  return F(), X("li", {
    role: "alert",
    class: pe([
      e.prefixCls,
      `${e.prefixCls}-${e.type}`,
      { [`${e.prefixCls}-closable`]: e.closable }
    ]),
    onMouseenter: t[1] || (t[1] = (...E) => e.handleMouseEnter && e.handleMouseEnter(...E)),
    onMouseleave: t[2] || (t[2] = (...E) => e.handleMouseLeave && e.handleMouseLeave(...E))
  }, [
    e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (F(), X("span", {
      key: 0,
      class: pe(`${e.prefixCls}-icon`)
    }, [
      Pe(e.$slots, "icon", {}, () => [
        e.type === "info" ? (F(), ye(s, { key: 0 })) : e.type === "success" ? (F(), ye(a, { key: 1 })) : e.type === "warning" ? (F(), ye(l, { key: 2 })) : e.type === "error" ? (F(), ye(d, { key: 3 })) : e.type === "loading" ? (F(), ye(c, { key: 4 })) : ve("v-if", !0)
      ])
    ], 2)) : ve("v-if", !0),
    U("span", {
      class: pe(`${e.prefixCls}-content`)
    }, [
      Pe(e.$slots, "default")
    ], 2),
    e.closable ? (F(), X("span", {
      key: 1,
      class: pe(`${e.prefixCls}-close-btn`),
      onClick: t[0] || (t[0] = (...E) => e.handleClose && e.handleClose(...E))
    }, [
      H(f, null, {
        default: ae(() => [
          H(u)
        ]),
        _: 1
      })
    ], 2)) : ve("v-if", !0)
  ], 34);
}
var qd = /* @__PURE__ */ Ke(Ud, [["render", Hd]]);
function Wd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ku(e);
}
var Gd = Ee({
  name: "MessageList",
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: "top"
    }
  },
  emits: ["close", "afterClose"],
  setup(e, t) {
    const n = Re("message-list"), {
      zIndex: i
    } = Vo("message", {
      runOnMounted: !0
    });
    return () => {
      let r;
      return H(Gu, {
        class: [n, `${n}-${e.position}`],
        name: "fade-message",
        tag: "ul",
        style: {
          zIndex: i.value
        },
        onAfterLeave: () => t.emit("afterClose")
      }, Wd(r = e.messages.map((o) => {
        const s = {
          default: Yn(o.content),
          icon: Yn(o.icon)
        };
        return H(qd, {
          key: o.id,
          type: o.type,
          duration: o.duration,
          closable: o.closable,
          resetOnUpdate: o.resetOnUpdate,
          resetOnHover: o.resetOnHover,
          onClose: () => t.emit("close", o.id)
        }, s);
      })) ? r : {
        default: () => [r]
      });
    };
  }
});
class Kd {
  constructor(t, n) {
    this.messageCount = 0, this.add = (o) => {
      var s;
      this.messageCount++;
      const a = (s = o.id) != null ? s : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(a))
        return this.update(a, o);
      const l = fr({ id: a, ...o });
      return this.messages.value.push(l), this.messageIds.add(a), {
        close: () => this.remove(a)
      };
    }, this.update = (o, s) => {
      for (let a = 0; a < this.messages.value.length; a++)
        if (this.messages.value[a].id === o) {
          const l = !s0(s.duration);
          Object.assign(this.messages.value[a], { ...s, id: o, resetOnUpdate: l });
          break;
        }
      return {
        close: () => this.remove(o)
      };
    }, this.remove = (o) => {
      for (let s = 0; s < this.messages.value.length; s++) {
        const a = this.messages.value[s];
        if (a.id === o) {
          Tt(a.onClose) && a.onClose(o), this.messages.value.splice(s, 1), this.messageIds.delete(o);
          break;
        }
      }
    }, this.clear = () => {
      this.messages.value.splice(0);
    }, this.destroy = () => {
      this.messages.value.length === 0 && this.container && (tr(null, this.container), document.body.removeChild(this.container), this.container = null, Sn[this.position] = void 0);
    };
    const { position: i = "top" } = t;
    this.container = ul("message"), this.messageIds = /* @__PURE__ */ new Set(), this.messages = oe([]), this.position = i;
    const r = H(Gd, {
      messages: this.messages.value,
      position: i,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    (n ?? Lt._context) && (r.appContext = n ?? Lt._context), tr(r, this.container), document.body.appendChild(this.container);
  }
}
const Sn = {}, Sl = [...ml, "loading", "normal"], Ui = Sl.reduce((e, t) => (e[t] = (n, i) => {
  hr(n) && (n = { content: n });
  const r = { type: t, ...n }, { position: o = "top" } = r;
  return Sn[o] || (Sn[o] = new Kd(r, i)), Sn[o].add(r);
}, e), {});
Ui.clear = (e) => {
  var t;
  e ? (t = Sn[e]) == null || t.clear() : Object.values(Sn).forEach((n) => n == null ? void 0 : n.clear());
};
const Lt = {
  ...Ui,
  install: (e) => {
    const t = {
      clear: Ui.clear
    };
    for (const n of Sl)
      t[n] = (i, r = e._context) => Ui[n](i, r);
    e.config.globalProperties.$message = t;
  },
  _context: null
}, Yd = ({
  modalRef: e,
  wrapperRef: t,
  draggable: n,
  alignCenter: i
}) => {
  const r = oe(!1), o = oe([0, 0]), s = oe([0, 0]), a = oe(), l = oe([0, 0]), d = oe([0, 0]), c = () => {
    var h, g, C;
    if (t.value && e.value) {
      const { top: m, left: _ } = t.value.getBoundingClientRect(), { clientWidth: O, clientHeight: p } = t.value, { top: R, left: T, width: I, height: q } = e.value.getBoundingClientRect(), K = i.value ? 0 : (h = e.value) == null ? void 0 : h.offsetTop, G = T - _, Y = R - m - K;
      (G !== ((g = s.value) == null ? void 0 : g[0]) || Y !== ((C = s.value) == null ? void 0 : C[1])) && (s.value = [G, Y]);
      const P = O > I ? O - I : 0, M = p > q ? p - q - K : 0;
      (P !== d.value[0] || M !== d.value[1]) && (d.value = [P, M]), K && (l.value = [0, 0 - K]);
    }
  }, u = (h) => {
    n.value && (h.preventDefault(), r.value = !0, c(), o.value = [h.x, h.y], nn(window, "mousemove", f), nn(window, "mouseup", E), nn(window, "contextmenu", E));
  }, f = (h) => {
    if (r.value) {
      const g = h.x - o.value[0], C = h.y - o.value[1];
      let m = s.value[0] + g, _ = s.value[1] + C;
      m < l.value[0] && (m = l.value[0]), m > d.value[0] && (m = d.value[0]), _ < l.value[1] && (_ = l.value[1]), _ > d.value[1] && (_ = d.value[1]), a.value = [m, _];
    }
  }, E = () => {
    r.value = !1, ii(window, "mousemove", f), ii(window, "mouseup", E);
  };
  return {
    position: a,
    handleMoveDown: u
  };
};
var Xd = Ee({
  name: "Modal",
  components: {
    ClientOnly: El,
    ArcoButton: ft,
    IconHover: jo,
    IconClose: zo,
    IconInfoCircleFill: dl,
    IconCheckCircleFill: fl,
    IconExclamationCircleFill: pl,
    IconCloseCircleFill: hl
  },
  inheritAttrs: !1,
  props: {
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !1
    },
    width: {
      type: [Number, String]
    },
    top: {
      type: [Number, String]
    },
    mask: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String
    },
    titleAlign: {
      type: String,
      default: "center"
    },
    alignCenter: {
      type: Boolean,
      default: !0
    },
    unmountOnClose: Boolean,
    maskClosable: {
      type: Boolean,
      default: !0
    },
    hideCancel: {
      type: Boolean,
      default: !1
    },
    simple: {
      type: Boolean,
      default: (e) => e.notice
    },
    closable: {
      type: Boolean,
      default: !0
    },
    okText: String,
    cancelText: String,
    okLoading: {
      type: Boolean,
      default: !1
    },
    okButtonProps: {
      type: Object
    },
    cancelButtonProps: {
      type: Object
    },
    footer: {
      type: Boolean,
      default: !0
    },
    renderToBody: {
      type: Boolean,
      default: !0
    },
    popupContainer: {
      type: [String, Object],
      default: "body"
    },
    maskStyle: {
      type: Object
    },
    modalClass: {
      type: [String, Array]
    },
    modalStyle: {
      type: Object
    },
    onBeforeOk: {
      type: Function
    },
    onBeforeCancel: {
      type: Function
    },
    escToClose: {
      type: Boolean,
      default: !0
    },
    draggable: {
      type: Boolean,
      default: !1
    },
    fullscreen: {
      type: Boolean,
      default: !1
    },
    maskAnimationName: {
      type: String,
      default: (e) => e.fullscreen ? "fade-in-standard" : "fade-modal"
    },
    modalAnimationName: {
      type: String,
      default: (e) => e.fullscreen ? "zoom-in" : "zoom-modal"
    },
    bodyClass: {
      type: [String, Array]
    },
    bodyStyle: {
      type: [String, Object, Array]
    },
    messageType: {
      type: String
    },
    hideTitle: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:visible": (e) => !0,
    ok: (e) => !0,
    cancel: (e) => !0,
    open: () => !0,
    close: () => !0,
    beforeOpen: () => !0,
    beforeClose: () => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      fullscreen: n,
      popupContainer: i,
      alignCenter: r
    } = di(e), o = Re("modal"), {
      t: s
    } = u0(), a = oe(), l = oe(), d = oe(e.defaultVisible), c = Z(() => {
      var Q;
      return (Q = e.visible) != null ? Q : d.value;
    }), u = oe(!1), f = Z(() => e.okLoading || u.value), E = Z(() => e.draggable && !e.fullscreen), {
      teleportContainer: h,
      containerRef: g
    } = wl({
      popupContainer: i,
      visible: c
    }), C = oe(c.value), m = Z(() => e.okText || s("modal.okText")), _ = Z(() => e.cancelText || s("modal.cancelText")), {
      zIndex: O,
      isLastDialog: p
    } = Vo("dialog", {
      visible: c
    });
    let R = !1;
    const T = (Q) => {
      e.escToClose && Q.key === Od.ESC && p() && S(Q);
    }, I = () => {
      e.escToClose && !R && (R = !0, nn(document.documentElement, "keydown", T));
    }, q = () => {
      R = !1, ii(document.documentElement, "keydown", T);
    };
    let K = 0;
    const {
      position: G,
      handleMoveDown: Y
    } = Yd({
      wrapperRef: a,
      modalRef: l,
      draggable: E,
      alignCenter: r
    }), P = () => {
      K++, u.value && (u.value = !1), d.value = !1, t("update:visible", !1);
    }, M = async (Q) => {
      const we = K, se = await new Promise(
        async ($) => {
          var L;
          if (Tt(e.onBeforeOk)) {
            let V = e.onBeforeOk((ee = !0) => $(ee));
            if ((As(V) || !Ts(V)) && (u.value = !0), As(V))
              try {
                V = (L = await V) != null ? L : !0;
              } catch (ee) {
                throw V = !1, ee;
              }
            Ts(V) && $(V);
          } else
            $(!0);
        }
      );
      we === K && (se ? (t("ok", Q), P()) : u.value && (u.value = !1));
    }, S = (Q) => {
      var we;
      let se = !0;
      Tt(e.onBeforeCancel) && (se = (we = e.onBeforeCancel()) != null ? we : !1), se && (t("cancel", Q), P());
    }, v = oe(!1), w = (Q) => {
      Q.target === a.value && (v.value = !0);
    }, k = (Q) => {
      e.mask && e.maskClosable && v.value && S(Q);
    }, x = () => {
      c.value && (!I0(a.value, document.activeElement) && document.activeElement instanceof HTMLElement && document.activeElement.blur(), t("open"));
    }, B = () => {
      c.value || (E.value && (G.value = void 0), C.value = !1, ue(), t("close"));
    }, {
      setOverflowHidden: ie,
      resetOverflow: ue
    } = Vd(g);
    bt(() => {
      g.value = go(e.popupContainer), c.value && (ie(), e.escToClose && I());
    }), Pn(() => {
      ue(), q();
    }), Ge(c, (Q) => {
      d.value !== Q && (d.value = Q), Q ? (t("beforeOpen"), C.value = !0, v.value = !1, ie(), I()) : (t("beforeClose"), q());
    }), Ge(n, () => {
      G.value && (G.value = void 0);
    });
    const te = Z(() => [`${o}-wrapper`, {
      [`${o}-wrapper-align-center`]: e.alignCenter && !e.fullscreen,
      [`${o}-wrapper-moved`]: !!G.value
    }]), de = Z(() => [`${o}`, e.modalClass, {
      [`${o}-simple`]: e.simple,
      [`${o}-draggable`]: E.value,
      [`${o}-fullscreen`]: e.fullscreen
    }]), _e = Z(() => {
      var Q;
      const we = {
        ...(Q = e.modalStyle) != null ? Q : {}
      };
      return e.width && !e.fullscreen && (we.width = Dt(e.width) ? `${e.width}px` : e.width), !e.alignCenter && e.top && (we.top = Dt(e.top) ? `${e.top}px` : e.top), G.value && (we.transform = `translate(${G.value[0]}px, ${G.value[1]}px)`), we;
    });
    return {
      prefixCls: o,
      mounted: C,
      computedVisible: c,
      containerRef: g,
      wrapperRef: a,
      mergedModalStyle: _e,
      okDisplayText: m,
      cancelDisplayText: _,
      zIndex: O,
      handleOk: M,
      handleCancel: S,
      handleMaskClick: k,
      handleMaskMouseDown: w,
      handleOpen: x,
      handleClose: B,
      mergedOkLoading: f,
      modalRef: l,
      wrapperCls: te,
      modalCls: de,
      teleportContainer: h,
      handleMoveDown: Y
    };
  }
});
function Jd(e, t, n, i, r, o) {
  const s = Oe("icon-info-circle-fill"), a = Oe("icon-check-circle-fill"), l = Oe("icon-exclamation-circle-fill"), d = Oe("icon-close-circle-fill"), c = Oe("icon-close"), u = Oe("icon-hover"), f = Oe("arco-button"), E = Oe("client-only");
  return F(), ye(E, null, {
    default: ae(() => [
      (F(), ye(Ga, {
        to: e.teleportContainer,
        disabled: !e.renderToBody
      }, [
        !e.unmountOnClose || e.computedVisible || e.mounted ? pt((F(), X("div", Kn({
          key: 0,
          class: `${e.prefixCls}-container`,
          style: { zIndex: e.zIndex }
        }, e.$attrs), [
          H(po, {
            name: e.maskAnimationName,
            appear: ""
          }, {
            default: ae(() => [
              e.mask ? pt((F(), X("div", {
                key: 0,
                ref: "maskRef",
                class: pe(`${e.prefixCls}-mask`),
                style: ot(e.maskStyle)
              }, null, 6)), [
                [ht, e.computedVisible]
              ]) : ve("v-if", !0)
            ]),
            _: 1
          }, 8, ["name"]),
          U("div", {
            ref: "wrapperRef",
            class: pe(e.wrapperCls),
            onClick: t[2] || (t[2] = ho((...h) => e.handleMaskClick && e.handleMaskClick(...h), ["self"])),
            onMousedown: t[3] || (t[3] = ho((...h) => e.handleMaskMouseDown && e.handleMaskMouseDown(...h), ["self"]))
          }, [
            H(po, {
              name: e.modalAnimationName,
              appear: "",
              onAfterEnter: e.handleOpen,
              onAfterLeave: e.handleClose,
              persisted: ""
            }, {
              default: ae(() => [
                pt(U("div", {
                  ref: "modalRef",
                  class: pe(e.modalCls),
                  style: ot(e.mergedModalStyle)
                }, [
                  !e.hideTitle && (e.$slots.title || e.title || e.closable) ? (F(), X("div", {
                    key: 0,
                    class: pe(`${e.prefixCls}-header`),
                    onMousedown: t[1] || (t[1] = (...h) => e.handleMoveDown && e.handleMoveDown(...h))
                  }, [
                    e.$slots.title || e.title ? (F(), X("div", {
                      key: 0,
                      class: pe([
                        `${e.prefixCls}-title`,
                        `${e.prefixCls}-title-align-${e.titleAlign}`
                      ])
                    }, [
                      e.messageType ? (F(), X("div", {
                        key: 0,
                        class: pe(`${e.prefixCls}-title-icon`)
                      }, [
                        e.messageType === "info" ? (F(), ye(s, { key: 0 })) : ve("v-if", !0),
                        e.messageType === "success" ? (F(), ye(a, { key: 1 })) : ve("v-if", !0),
                        e.messageType === "warning" ? (F(), ye(l, { key: 2 })) : ve("v-if", !0),
                        e.messageType === "error" ? (F(), ye(d, { key: 3 })) : ve("v-if", !0)
                      ], 2)) : ve("v-if", !0),
                      Pe(e.$slots, "title", {}, () => [
                        Ve(le(e.title), 1)
                      ])
                    ], 2)) : ve("v-if", !0),
                    !e.simple && e.closable ? (F(), X("div", {
                      key: 1,
                      tabindex: "-1",
                      role: "button",
                      "aria-label": "Close",
                      class: pe(`${e.prefixCls}-close-btn`),
                      onClick: t[0] || (t[0] = (...h) => e.handleCancel && e.handleCancel(...h))
                    }, [
                      H(u, null, {
                        default: ae(() => [
                          H(c)
                        ]),
                        _: 1
                      })
                    ], 2)) : ve("v-if", !0)
                  ], 34)) : ve("v-if", !0),
                  U("div", {
                    class: pe([`${e.prefixCls}-body`, e.bodyClass]),
                    style: ot(e.bodyStyle)
                  }, [
                    Pe(e.$slots, "default")
                  ], 6),
                  e.footer ? (F(), X("div", {
                    key: 1,
                    class: pe(`${e.prefixCls}-footer`)
                  }, [
                    Pe(e.$slots, "footer", {}, () => [
                      e.hideCancel ? ve("v-if", !0) : (F(), ye(f, Kn({ key: 0 }, e.cancelButtonProps, { onClick: e.handleCancel }), {
                        default: ae(() => [
                          Ve(le(e.cancelDisplayText), 1)
                        ]),
                        _: 1
                      }, 16, ["onClick"])),
                      H(f, Kn({ type: "primary" }, e.okButtonProps, {
                        loading: e.mergedOkLoading,
                        onClick: e.handleOk
                      }), {
                        default: ae(() => [
                          Ve(le(e.okDisplayText), 1)
                        ]),
                        _: 1
                      }, 16, ["loading", "onClick"])
                    ])
                  ], 2)) : ve("v-if", !0)
                ], 6), [
                  [ht, e.computedVisible]
                ])
              ]),
              _: 3
            }, 8, ["name", "onAfterEnter", "onAfterLeave"])
          ], 34)
        ], 16)), [
          [ht, e.computedVisible || e.mounted]
        ]) : ve("v-if", !0)
      ], 8, ["to", "disabled"]))
    ]),
    _: 3
  });
}
var Hi = /* @__PURE__ */ Ke(Xd, [["render", Jd]]);
const Ur = (e, t) => {
  let n = ul("modal");
  const i = () => {
    d.component && (d.component.props.visible = !1), Tt(e.onOk) && e.onOk();
  }, r = () => {
    d.component && (d.component.props.visible = !1), Tt(e.onCancel) && e.onCancel();
  }, o = async () => {
    await er(), n && (tr(null, n), document.body.removeChild(n)), n = null, Tt(e.onClose) && e.onClose();
  }, s = () => {
    d.component && (d.component.props.visible = !1);
  }, a = (c) => {
    d.component && Object.entries(c).forEach(([u, f]) => {
      d.component.props[u] = f;
    });
  }, d = H(Hi, {
    ...{
      visible: !0,
      renderToBody: !1,
      unmountOnClose: !0,
      onOk: i,
      onCancel: r,
      onClose: o
    },
    ...vl(e, ["content", "title", "footer", "visible", "unmountOnClose", "onOk", "onCancel", "onClose"]),
    footer: typeof e.footer == "boolean" ? e.footer : void 0
  }, {
    default: Yn(e.content),
    title: Yn(e.title),
    footer: typeof e.footer != "boolean" ? Yn(e.footer) : void 0
  });
  return (t ?? yo._context) && (d.appContext = t ?? yo._context), tr(d, n), document.body.appendChild(n), {
    close: s,
    update: a
  };
}, Hr = {
  open: Ur,
  confirm: (e, t) => {
    const n = {
      simple: !0,
      messageType: "warning",
      ...e
    };
    return Ur(n, t);
  },
  ...ml.reduce((e, t) => (e[t] = (n, i) => {
    const r = {
      simple: !0,
      hideCancel: !0,
      messageType: t,
      ...n
    };
    return Ur(r, i);
  }, e), {})
}, yo = Object.assign(Hi, {
  ...Hr,
  install: (e, t) => {
    pn(e, t);
    const n = fn(t);
    e.component(n + Hi.name, Hi);
    const i = {};
    for (const r of Object.keys(Hr))
      i[r] = (o, s = e._context) => Hr[r](o, s);
    e.config.globalProperties.$modal = i;
  },
  _context: null
});
function Zd(e, t) {
  if (e.ownerDocument !== t.ownerDocument)
    try {
      return t.ownerDocument.importNode(e, !0);
    } catch {
    }
  return e;
}
function bo(e, t) {
  return t.appendChild(Zd(e, t));
}
function Ln(e, t) {
  return bo(t, e), e;
}
var Eo = 2, _l = {
  "alignment-baseline": 1,
  "baseline-shift": 1,
  clip: 1,
  "clip-path": 1,
  "clip-rule": 1,
  color: 1,
  "color-interpolation": 1,
  "color-interpolation-filters": 1,
  "color-profile": 1,
  "color-rendering": 1,
  cursor: 1,
  direction: 1,
  display: 1,
  "dominant-baseline": 1,
  "enable-background": 1,
  fill: 1,
  "fill-opacity": 1,
  "fill-rule": 1,
  filter: 1,
  "flood-color": 1,
  "flood-opacity": 1,
  font: 1,
  "font-family": 1,
  "font-size": Eo,
  "font-size-adjust": 1,
  "font-stretch": 1,
  "font-style": 1,
  "font-variant": 1,
  "font-weight": 1,
  "glyph-orientation-horizontal": 1,
  "glyph-orientation-vertical": 1,
  "image-rendering": 1,
  kerning: 1,
  "letter-spacing": 1,
  "lighting-color": 1,
  marker: 1,
  "marker-end": 1,
  "marker-mid": 1,
  "marker-start": 1,
  mask: 1,
  opacity: 1,
  overflow: 1,
  "pointer-events": 1,
  "shape-rendering": 1,
  "stop-color": 1,
  "stop-opacity": 1,
  stroke: 1,
  "stroke-dasharray": 1,
  "stroke-dashoffset": 1,
  "stroke-linecap": 1,
  "stroke-linejoin": 1,
  "stroke-miterlimit": 1,
  "stroke-opacity": 1,
  "stroke-width": Eo,
  "text-anchor": 1,
  "text-decoration": 1,
  "text-rendering": 1,
  "unicode-bidi": 1,
  visibility: 1,
  "word-spacing": 1,
  "writing-mode": 1
};
function Qd(e, t) {
  return _l[t] ? e.style[t] : e.getAttributeNS(null, t);
}
function Cl(e, t, n) {
  var i = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), r = _l[i];
  r ? (r === Eo && typeof n == "number" && (n = String(n) + "px"), e.style[i] = n) : e.setAttributeNS(null, t, n);
}
function ef(e, t) {
  var n = Object.keys(t), i, r;
  for (i = 0, r; r = n[i]; i++)
    Cl(e, r, t[r]);
}
function qi(e, t, n) {
  if (typeof t == "string")
    if (n !== void 0)
      Cl(e, t, n);
    else
      return Qd(e, t);
  else
    ef(e, t);
  return e;
}
var Ho = {
  svg: "http://www.w3.org/2000/svg"
}, Fs = '<svg xmlns="' + Ho.svg + '"';
function tf(e) {
  var t = !1;
  e.substring(0, 4) === "<svg" ? e.indexOf(Ho.svg) === -1 && (e = Fs + e.substring(4)) : (e = Fs + ">" + e + "</svg>", t = !0);
  var n = nf(e);
  if (!t)
    return n;
  for (var i = document.createDocumentFragment(), r = n.firstChild; r.firstChild; )
    i.appendChild(r.firstChild);
  return i;
}
function nf(e) {
  var t;
  return t = new DOMParser(), t.async = !1, t.parseFromString(e, "text/xml");
}
function Ct(e, t) {
  var n;
  return e = e.trim(), e.charAt(0) === "<" ? (n = tf(e).firstChild, n = document.importNode(n, !0)) : n = document.createElementNS(Ho.svg, e), t && qi(n, t), n;
}
function rf(e) {
  var t = e.parentNode;
  return t && t.removeChild(e), e;
}
const qo = Object.prototype.toString, of = Object.prototype.hasOwnProperty;
function sf(e) {
  return e === void 0;
}
function af(e) {
  return e == null;
}
function lf(e) {
  return qo.call(e) === "[object Array]";
}
function cf(e) {
  return qo.call(e) === "[object Object]";
}
function uf(e) {
  const t = qo.call(e);
  return t === "[object Function]" || t === "[object AsyncFunction]" || t === "[object GeneratorFunction]" || t === "[object AsyncGeneratorFunction]" || t === "[object Proxy]";
}
function df(e, t) {
  return !af(e) && of.call(e, t);
}
function ff(e, t) {
  const n = mf(t);
  let i;
  return pf(e, function(r, o) {
    if (n(r, o))
      return i = r, !1;
  }), i;
}
function pf(e, t) {
  let n, i;
  if (sf(e))
    return;
  const r = lf(e) ? gf : vf;
  for (let o in e)
    if (df(e, o) && (n = e[o], i = t(n, r(o)), i === !1))
      return n;
}
function hf(e, t) {
  return !!ff(e, t);
}
function mf(e) {
  return uf(e) ? e : (t) => t === e;
}
function vf(e) {
  return e;
}
function gf(e) {
  return Number(e);
}
function yf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qr = { exports: {} }, Ms;
function bf() {
  if (Ms) return qr.exports;
  Ms = 1;
  var e = qr.exports = function(t, n) {
    if (n || (n = 16), t === void 0 && (t = 128), t <= 0) return "0";
    for (var i = Math.log(Math.pow(2, t)) / Math.log(n), r = 2; i === 1 / 0; r *= 2)
      i = Math.log(Math.pow(2, t / r)) / Math.log(n) * r;
    for (var o = i - Math.floor(i), s = "", r = 0; r < Math.floor(i); r++) {
      var a = Math.floor(Math.random() * n).toString(n);
      s = a + s;
    }
    if (o) {
      var l = Math.pow(n, o), a = Math.floor(Math.random() * l).toString(n);
      s = a + s;
    }
    var d = parseInt(s, n);
    return d !== 1 / 0 && d >= Math.pow(2, t) ? e(t, n) : s;
  };
  return e.rack = function(t, n, i) {
    var r = function(s) {
      var a = 0;
      do {
        if (a++ > 10)
          if (i) t += i;
          else throw new Error("too many ID collisions, use more bits");
        var l = e(t, n);
      } while (Object.hasOwnProperty.call(o, l));
      return o[l] = s, l;
    }, o = r.hats = {};
    return r.get = function(s) {
      return r.hats[s];
    }, r.set = function(s, a) {
      return r.hats[s] = a, r;
    }, r.bits = t || 128, r.base = n || 16, r;
  }, qr.exports;
}
var Ef = bf(), wf = /* @__PURE__ */ yf(Ef);
function Pt(e) {
  if (!(this instanceof Pt))
    return new Pt(e);
  e = e || [128, 36, 1], this._seed = e.length ? wf.rack(e[0], e[1], e[2]) : e;
}
Pt.prototype.next = function(e) {
  return this._seed(e || !0);
};
Pt.prototype.nextPrefixed = function(e, t) {
  var n;
  do
    n = e + this.next(!0);
  while (this.assigned(n));
  return this.claim(n, t), n;
};
Pt.prototype.claim = function(e, t) {
  this._seed.set(e, t || !0);
};
Pt.prototype.assigned = function(e) {
  return this._seed.get(e) || !1;
};
Pt.prototype.unclaim = function(e) {
  delete this._seed.hats[e];
};
Pt.prototype.clear = function() {
  var e = this._seed.hats, t;
  for (t in e)
    this.unclaim(t);
};
function Sf(e) {
  if (!e)
    return;
  const t = e.get("extensionElements");
  if (t)
    return t.get("values");
}
function vr(e, t) {
  const n = Sf(e);
  return !n || !n.length ? [] : t ? n.filter((i) => D(i, t)) : n;
}
function gr(e, t) {
  return vr(e, `flowable:${t}`);
}
const Ft = {
  Activity: "var(--color-activity)",
  StartEvent: "var(--color-start-event)",
  EndEvent: "var(--color-end-event)",
  BoundaryEvent: "var(--color-boundary-event)",
  CatchEvent: "var(--color-catch-event)",
  Gateway: "var(--color-gateway)",
  Group: "var(--color-element)",
  default: "var(--color-element)"
}, _f = {
  Connection: "var(--color-connection)"
}, Pi = 0.95, Cf = 1, Ns = 3, kf = 0.8;
class Tf extends Ju {
  constructor(n, i, r, o, s, a, l) {
    super(n, i, r, o, s, a, l);
    b(this, "_overrideColor");
    const d = this.handlers, c = n && n.defaultFillColor, u = n && n.defaultStrokeColor;
    this._overrideColor = (n == null ? void 0 : n.overrideColor) || !1;
    function f(S) {
      return r.computeStyle(S, ["no-fill"], {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: ks,
        strokeWidth: 2
      });
    }
    function E(S) {
      return r.computeStyle(S, {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: ks,
        strokeWidth: 2,
        fill: "white"
      });
    }
    function h(S, v, w) {
      w = f(w);
      const k = Ct("path", { ...w, d: v });
      return Ln(S, k), k;
    }
    function g(S, v, w) {
      const k = Ct("text", w);
      return k.innerHTML = v, Ln(S, k), k;
    }
    function C(S, v, w, k, x) {
      cf(k) && (x = k, k = 0), k = k || 0, x = E(x);
      const B = v / 2, ie = w / 2, ue = Ct("circle", {
        cx: B,
        cy: ie,
        r: Math.round((v + w) / 4 - k),
        ...x
      });
      return Ln(S, ue), ue;
    }
    function m(S, v, w, k) {
      const x = v / 2, B = w / 2, ue = [
        { x, y: 0 },
        { x: v, y: B },
        { x, y: w },
        { x: 0, y: B }
      ].map(function(de) {
        return de.x + "," + de.y;
      }).join(" ");
      k = E(k);
      const te = Ct("polygon", {
        ...k,
        points: ue
      });
      return Ln(S, te), te;
    }
    function _(S, v, w = {}) {
      return m(S, v.width, v.height, {
        fill: Ae(v, c, w.fill),
        fillOpacity: Pi,
        stroke: me(v, u, w.stroke)
      });
    }
    const O = {
      "bpmn:MessageEventDefinition": function(S, v, w = {}, k) {
        const x = o.getScaledPath("EVENT_MESSAGE", {
          xScaleFactor: 0.9,
          yScaleFactor: 0.9,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.235,
            my: 0.315
          }
        }), B = k ? me(v, u, w.stroke) : Ae(v, c, w.fill), ie = k ? Ae(v, c, w.fill) : me(v, u, w.stroke);
        return h(S, x, {
          fill: B,
          stroke: ie,
          strokeWidth: 1
        });
      },
      "bpmn:TimerEventDefinition": function(S, v, w = {}) {
        const k = C(S, v.width, v.height, 0.2 * v.height, {
          fill: Ae(v, c, w.fill),
          stroke: me(v, u, w.stroke),
          strokeWidth: 2
        }), x = o.getScaledPath("EVENT_TIMER_WH", {
          xScaleFactor: 0.75,
          yScaleFactor: 0.75,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.5,
            my: 0.5
          }
        });
        h(S, x, {
          stroke: me(v, u, w.stroke),
          strokeWidth: 2
        });
        for (let B = 0; B < 12; B++) {
          const ie = o.getScaledPath("EVENT_TIMER_LINE", {
            xScaleFactor: 0.75,
            yScaleFactor: 0.75,
            containerWidth: v.width,
            containerHeight: v.height,
            position: {
              mx: 0.5,
              my: 0.5
            }
          }), ue = v.width / 2, te = v.height / 2;
          h(S, ie, {
            strokeWidth: 1,
            stroke: me(v, u, w.stroke),
            transform: "rotate(" + B * 30 + "," + te + "," + ue + ")"
          });
        }
        return k;
      },
      "bpmn:EscalationEventDefinition": function(S, v, w = {}, k) {
        const x = o.getScaledPath("EVENT_ESCALATION", {
          xScaleFactor: 1,
          yScaleFactor: 1,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.5,
            my: 0.2
          }
        }), B = k ? me(v, u, w.stroke) : Ae(v, c, w.fill);
        return h(S, x, {
          fill: B,
          stroke: me(v, u, w.stroke),
          strokeWidth: 1
        });
      },
      "bpmn:ConditionalEventDefinition": function(S, v, w = {}) {
        const k = o.getScaledPath("EVENT_CONDITIONAL", {
          xScaleFactor: 1,
          yScaleFactor: 1,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.5,
            my: 0.222
          }
        });
        return h(S, k, {
          fill: Ae(v, c, w.fill),
          stroke: me(v, u, w.stroke),
          strokeWidth: 1
        });
      },
      "bpmn:LinkEventDefinition": function(S, v, w = {}, k) {
        const x = o.getScaledPath("EVENT_LINK", {
          xScaleFactor: 1,
          yScaleFactor: 1,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.57,
            my: 0.263
          }
        }), B = k ? me(v, u, w.stroke) : Ae(v, c, w.fill);
        return h(S, x, {
          fill: B,
          stroke: me(v, u, w.stroke),
          strokeWidth: 1
        });
      },
      "bpmn:ErrorEventDefinition": function(S, v, w = {}, k) {
        const x = o.getScaledPath("EVENT_ERROR", {
          xScaleFactor: 1.1,
          yScaleFactor: 1.1,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.2,
            my: 0.722
          }
        }), B = k ? me(v, u, w.stroke) : Ae(v, c, w.fill);
        return h(S, x, {
          fill: B,
          stroke: me(v, u, w.stroke),
          strokeWidth: 1
        });
      },
      "bpmn:CancelEventDefinition": function(S, v, w = {}, k) {
        const x = o.getScaledPath("EVENT_CANCEL_45_THIN", {
          xScaleFactor: 1,
          yScaleFactor: 1,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.6724,
            my: -0.0347
          }
        }), B = k ? me(v, u, w.stroke) : "none", ie = h(S, x, {
          fill: B,
          stroke: me(v, u, w.stroke),
          strokeWidth: 1
        });
        return Qu(ie, 45), ie;
      },
      "bpmn:CompensateEventDefinition": function(S, v, w = {}, k) {
        const x = o.getScaledPath("EVENT_COMPENSATION", {
          xScaleFactor: 1,
          yScaleFactor: 1,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.22,
            my: 0.5
          }
        }), B = k ? me(v, u, w.stroke) : Ae(v, c, w.fill);
        return h(S, x, {
          fill: B,
          stroke: me(v, u, w.stroke),
          strokeWidth: 1
        });
      },
      "bpmn:SignalEventDefinition": function(S, v, w = {}, k) {
        const x = o.getScaledPath("EVENT_SIGNAL", {
          xScaleFactor: 0.9,
          yScaleFactor: 0.9,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.5,
            my: 0.2
          }
        }), B = k ? me(v, u, w.stroke) : Ae(v, c, w.fill);
        return h(S, x, {
          strokeWidth: 1,
          fill: B,
          stroke: me(v, u, w.stroke)
        });
      },
      "bpmn:MultipleEventDefinition": function(S, v, w = {}, k) {
        const x = o.getScaledPath("EVENT_MULTIPLE", {
          xScaleFactor: 1.1,
          yScaleFactor: 1.1,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.222,
            my: 0.36
          }
        }), { stroke: B } = w, ie = k ? me(v, u, B) : Ae(v, c, w.fill);
        return h(S, x, {
          fill: ie,
          stroke: B,
          strokeWidth: 1
        });
      },
      "bpmn:ParallelMultipleEventDefinition": function(S, v, w = {}) {
        const k = o.getScaledPath("EVENT_PARALLEL_MULTIPLE", {
          xScaleFactor: 1.2,
          yScaleFactor: 1.2,
          containerWidth: v.width,
          containerHeight: v.height,
          position: {
            mx: 0.458,
            my: 0.194
          }
        });
        return h(S, k, {
          fill: Ae(v, c, w.fill),
          stroke: me(v, u, w.stroke),
          strokeWidth: 1
        });
      },
      "bpmn:TerminateEventDefinition": function(S, v, w = {}) {
        return C(S, v.width, v.height, 8, {
          fill: me(v, u, w.stroke),
          stroke: me(v, u, w.stroke),
          strokeWidth: 4
        });
      }
    };
    function p(S, v, w = {}) {
      const k = Ai(S), x = Zu(k), B = (ue, ...te) => {
        const de = S.width / 2, _e = S.height / 2, Q = Ct("g", {
          transform: `translate(${de}, ${_e}) scale(${kf}) translate(${-de}, ${-_e})`
        });
        return Ln(v, Q), ue(Q, S, w, ...te);
      };
      if (gr(
        k,
        "VariableListenerEventDefinition"
      ).length)
        return B(O["bpmn:MultipleEventDefinition"], x);
      if (k.get("eventDefinitions") && k.get("eventDefinitions").length > 1) {
        if (k.get("parallelMultiple"))
          return B(
            O["bpmn:ParallelMultipleEventDefinition"],
            x
          );
        if (D(S, "bpmn:EndEvent"))
          return B(O["bpmn:MultipleEventDefinition"], x);
      }
      return dt(k, "bpmn:MessageEventDefinition") ? B(O["bpmn:MessageEventDefinition"], x) : dt(k, "bpmn:TimerEventDefinition") ? B(O["bpmn:TimerEventDefinition"], x) : dt(k, "bpmn:ConditionalEventDefinition") ? B(O["bpmn:ConditionalEventDefinition"], x) : dt(k, "bpmn:SignalEventDefinition") ? B(O["bpmn:SignalEventDefinition"], x) : dt(k, "bpmn:EscalationEventDefinition") ? B(O["bpmn:EscalationEventDefinition"], x) : dt(k, "bpmn:LinkEventDefinition") ? B(O["bpmn:LinkEventDefinition"], x) : dt(k, "bpmn:ErrorEventDefinition") ? B(O["bpmn:ErrorEventDefinition"], x) : dt(k, "bpmn:CancelEventDefinition") ? B(O["bpmn:CancelEventDefinition"], x) : dt(k, "bpmn:CompensateEventDefinition") ? B(O["bpmn:CompensateEventDefinition"], x) : dt(k, "bpmn:TerminateEventDefinition") ? B(O["bpmn:TerminateEventDefinition"], x) : null;
    }
    const R = (S, v, w = {}) => {
      w = Mt(w, ["fill", "stroke"]);
      const k = d["bpmn:Task"](S, v, w), x = v.businessObject.get("type"), B = {
        class: "custom-service",
        fill: me(v, c, w.stroke),
        stroke: me(v, u, w.stroke),
        strokeWidth: 0
      }, ie = Ct("g", { class: "custom-node-marker" });
      switch (S.insertBefore(ie, null), x) {
        case "ai":
          const ue = o.getStaticPath("SERVICE_AI");
          h(S, ue, B);
          break;
        case "shell":
          const te = o.getStaticPath("SERVICE_SHELL");
          h(S, te, B);
          break;
        case "copy":
          const de = o.getStaticPath("SERVICE_COPY");
          h(S, de, B);
          break;
        case "camel":
          const _e = o.getStaticPath("SERVICE_CAMEL");
          h(S, _e, B);
          break;
        case "dmn":
          const Q = o.getStaticPath("SERVICE_DMN");
          h(S, Q, B);
          break;
        case "dmnservice":
          const we = o.getStaticPath("SERVICE_DECISION_SERVICE");
          h(S, we, B);
          break;
        case "http":
          const se = o.getStaticPath("SERVICE_HTTP_1");
          h(S, se, B);
          const $ = o.getStaticPath("SERVICE_HTTP_2");
          h(S, $, B);
          break;
        case "ws":
          const L = o.getStaticPath("SERVICE_WS_1");
          h(S, L, B);
          const V = o.getStaticPath("SERVICE_WS_2");
          h(S, V, B);
          break;
        case "email":
          const ee = o.getStaticPath("SERVICE_MAIL_1");
          h(S, ee, B);
          const ge = o.getStaticPath("SERVICE_MAIL_2");
          h(S, ge, B);
          break;
        case "mq":
          const he = o.getStaticPath("SERVICE_MQ_1");
          h(S, he, B);
          const Ce = o.getStaticPath("SERVICE_MQ_2");
          h(S, Ce, B);
          break;
        case "mqtt":
          const je = o.getStaticPath("SERVICE_MQTT");
          h(S, je, B);
          break;
        case "mcp":
          const Ne = o.getStaticPath("SERVICE_MCP1");
          h(S, Ne, B);
          const Ie = o.getStaticPath("SERVICE_MCP2");
          h(S, Ie, B);
          break;
        case "sc":
          const J = o.getStaticPath("SERVICE_SC_1");
          h(S, J, B);
          const Te = o.getStaticPath("SERVICE_SC_2");
          h(S, Te, B);
          break;
        case "sql":
          const Se = o.getStaticPath("SERVICE_DB_1");
          h(S, Se, B);
          const xe = o.getStaticPath("SERVICE_DB_2");
          h(S, xe, B);
          const nt = o.getStaticPath("SERVICE_DB_3");
          h(S, nt, B);
          break;
        case "dubbo":
          const He = o.getStaticPath("SERVICE_SC_1");
          h(S, He, B);
          const Fe = o.getStaticPath("SERVICE_SC_2");
          h(S, Fe, {
            ...B,
            transform: "scale(0.8 0.8) translate(4 0)"
          }), g(S, "dubbo", { ...B, x: 8, y: 17, fontSize: 4 });
          break;
        case "rest":
          const wt = o.getStaticPath("SERVICE_REST_1");
          h(S, wt, B);
          const xt = o.getStaticPath("SERVICE_REST_2");
          h(S, xt, B);
          break;
        default:
          C(S, 10, 10, 0, {
            fill: Ae(v, c, w.fill),
            stroke: "none",
            transform: "translate(6, 6)"
          });
          const It = o.getScaledPath("TASK_TYPE_SERVICE", {
            abspos: {
              x: 12,
              y: 18
            }
          });
          h(S, It, {
            fill: Ae(v, c, w.fill),
            stroke: me(v, u, w.stroke),
            strokeWidth: 1
          }), C(S, 10, 10, 0, {
            fill: Ae(v, c, w.fill),
            stroke: "none",
            transform: "translate(11, 10)"
          });
          const j = o.getScaledPath("TASK_TYPE_SERVICE", {
            abspos: {
              x: 17,
              y: 22
            }
          });
          h(S, j, {
            fill: Ae(v, c, w.fill),
            stroke: me(v, u, w.stroke),
            strokeWidth: 1
          });
      }
      return k;
    }, T = (S, v, w = {}) => {
      const { renderIcon: k = !0 } = w;
      w = Mt(w, ["fill", "stroke"]), Ai(v).get("isInterrupting") === !1 && (w = {
        ...w,
        strokeDasharray: "6"
      });
      const B = C(S, v.width, v.height, {
        fillOpacity: Pi,
        ...w,
        fill: Ae(v, c, w.fill),
        stroke: me(v, u, w.stroke)
      });
      return k && p(v, S, w), B;
    }, I = (S, v, w = {}) => {
      const { renderIcon: k = !0 } = w;
      w = Mt(w, ["fill", "stroke"]);
      const x = Ai(v), B = x.get("cancelActivity");
      w = {
        strokeWidth: 1.5,
        fill: Ae(v, c, w.fill),
        fillOpacity: Cf,
        stroke: me(v, u, w.stroke)
      }, B === !1 && (w.strokeDasharray = "6");
      const ie = C(S, v.width, v.height, w);
      return C(S, v.width, v.height, Ns, {
        ...w,
        fill: "none"
      }), k && p(v, S, w), ie;
    }, q = (S, v, w = {}) => {
      const { renderIcon: k = !0 } = w;
      w = Mt(w, ["fill", "stroke"]);
      const x = C(S, v.width, v.height, {
        fillOpacity: Pi,
        ...w,
        fill: Ae(v, c, w.fill),
        stroke: me(v, u, w.stroke),
        strokeWidth: 1.5
      });
      return C(S, v.width, v.height, Ns, {
        fill: "none",
        stroke: me(v, u, w.stroke),
        strokeWidth: 1.5
      }), k && p(v, S, w), x;
    }, K = (S, v, w = {}) => {
      const { renderIcon: k = !0 } = w;
      w = Mt(w, ["fill", "stroke"]);
      const x = C(S, v.width, v.height, {
        fillOpacity: Pi,
        ...w,
        fill: Ae(v, c, w.fill),
        stroke: me(v, u, w.stroke),
        strokeWidth: 4
      });
      return k && p(v, S, w), x;
    }, G = (S, v) => {
      const w = S.width / 2, k = S.height / 2;
      return `translate(${w}, ${k}) scale(${v}) translate(${-w}, ${-k})`;
    }, Y = (S) => (v, w, k = {}) => {
      k = Mt(k, ["fill", "stroke"]);
      const x = _(v, w, k), B = me(w, u, k.stroke), ie = o.getScaledPath(S.pathId, {
        xScaleFactor: S.xScaleFactor,
        yScaleFactor: S.yScaleFactor,
        containerWidth: w.width,
        containerHeight: w.height,
        position: S.position
      });
      return h(v, ie, {
        fill: B,
        stroke: B,
        strokeWidth: 1,
        transform: G(w, S.markerScale)
      }), x;
    }, P = (S, v, w = {}) => {
      w = Mt(w, ["fill", "stroke"]);
      const k = _(S, v, w);
      return C(S, v.width, v.height, v.height * 0.24, {
        fill: Ae(v, c, w.fill),
        stroke: me(v, u, w.stroke),
        strokeWidth: 2.5,
        transform: G(v, 0.6)
      }), k;
    }, M = (S, v, w = {}) => {
      w = Mt(w, ["fill", "stroke"]);
      const k = Ai(v), x = _(S, v, w), B = me(v, u, w.stroke), ie = G(v, 0.5);
      C(S, v.width, v.height, v.height * 0.2, {
        fill: Ae(v, "none", w.fill),
        stroke: B,
        strokeWidth: 1,
        transform: ie
      });
      const ue = k.get("eventGatewayType"), te = !!k.get("instantiate");
      if (ue === "Parallel") {
        const de = o.getScaledPath("GATEWAY_PARALLEL", {
          xScaleFactor: 0.4,
          yScaleFactor: 0.4,
          containerWidth: v.width,
          containerHeight: v.height,
          position: { mx: 0.474, my: 0.296 }
        });
        h(S, de, {
          fill: "none",
          stroke: B,
          strokeWidth: 1,
          transform: ie
        });
      } else if (ue === "Exclusive") {
        te || C(S, v.width, v.height, v.height * 0.26, {
          fill: "none",
          stroke: B,
          strokeWidth: 1,
          transform: ie
        });
        const de = o.getScaledPath("GATEWAY_EVENT_BASED", {
          xScaleFactor: 0.18,
          yScaleFactor: 0.18,
          containerWidth: v.width,
          containerHeight: v.height,
          position: { mx: 0.36, my: 0.44 }
        });
        h(S, de, {
          fill: "none",
          stroke: B,
          strokeWidth: 2,
          transform: ie
        });
      }
      return x;
    };
    this.handlers["bpmn:ServiceTask"] = R, this.handlers["bpmn:StartEvent"] = T, this.handlers["bpmn:EndEvent"] = K, this.handlers["bpmn:BoundaryEvent"] = I, this.handlers["bpmn:IntermediateEvent"] = q, this.handlers["bpmn:ExclusiveGateway"] = Y({
      pathId: "GATEWAY_EXCLUSIVE",
      xScaleFactor: 0.4,
      yScaleFactor: 0.4,
      position: { mx: 0.32, my: 0.3 },
      markerScale: 0.6
    }), this.handlers["bpmn:ParallelGateway"] = Y({
      pathId: "GATEWAY_PARALLEL",
      xScaleFactor: 0.6,
      yScaleFactor: 0.6,
      position: { mx: 0.46, my: 0.2 },
      markerScale: 0.4
    }), this.handlers["bpmn:InclusiveGateway"] = P, this.handlers["bpmn:ComplexGateway"] = Y({
      pathId: "GATEWAY_COMPLEX",
      xScaleFactor: 0.5,
      yScaleFactor: 0.5,
      position: { mx: 0.46, my: 0.26 },
      markerScale: 0.5
    }), this.handlers["bpmn:EventBasedGateway"] = M;
  }
  drawShape(n, i, r = {}) {
    let o, s = "var(--color-bg-5)";
    if (!this._overrideColor) {
      const a = Cs(i);
      o = a.get("color:border-color") || a.get("bioc:stroke"), s = a.get("color:background-color") || a.get("bioc:fill") || "var(--color-bg-5)";
    }
    return D(i, "bpmn:Activity") ? (r = { stroke: o || Ft.Activity, fill: s, ...r }, super.drawShape(n, i, r)) : D(i, "bpmn:StartEvent") ? (r = { stroke: o || Ft.StartEvent, fill: s, ...r }, super.drawShape(n, i, r)) : D(i, "bpmn:EndEvent") ? (r = { stroke: o || Ft.EndEvent, fill: s, ...r }, super.drawShape(n, i, r)) : D(i, "bpmn:BoundaryEvent") ? (r = { stroke: o || Ft.BoundaryEvent, fill: s, ...r }, super.drawShape(n, i, r)) : D(i, "bpmn:CatchEvent") || D(i, "bpmn:ThrowEvent") ? (r = { stroke: o || Ft.CatchEvent, fill: s, ...r }, super.drawShape(n, i, r)) : D(i, "bpmn:Gateway") ? (r = { stroke: o || Ft.Gateway, fill: s, ...r }, super.drawShape(n, i, r)) : D(i, "bpmn:Group") ? (r = { stroke: o || Ft.Group, fill: "none", ...r }, super.drawShape(n, i, r)) : super.drawShape(n, i, {
      stroke: o || Ft.default,
      fill: s,
      ...r
    });
  }
  drawConnection(n, i, r = {}) {
    let o;
    if (!this._overrideColor) {
      const s = Cs(i);
      o = s.get("color:border-color") || s.get("bioc:stroke");
    }
    return Xu(i, ["bpmn:SequenceFlow", "bpmn:MessageFlow", "bpmn:Association"]) ? (r = { stroke: o || _f.Connection, ...r }, super.drawConnection(n, i, r)) : super.drawConnection(n, i, r);
  }
}
function Mt(e, t = []) {
  return t.reduce((n, i) => (e[i] && (n[i] = e[i]), n), {});
}
class Af extends e0 {
  constructor() {
    super(), this.pathMap.EVENT_CANCEL_45_THIN = {
      d: "m {mx},{my} -{e.x1},0 0,{e.x0} {e.x1},0 0,{e.y1} {e.x0},0 0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z",
      height: 36,
      width: 36,
      heightElements: [2.5, 8.5],
      widthElements: [2.5, 8.5]
    }, this.pathMap.SERVICE_SHELL = {
      d: "m26.02111,22.35561l-20.79771,0c-0.67287,0 -1.22339,-0.59 -1.22339,-1.31112l0,-15.73338c0,-0.72111 0.55053,-1.31112 1.22339,-1.31112l20.79771,0c0.67287,0 1.22339,0.59 1.22339,1.31112l0,15.73338c0,0.72111 -0.55053,1.31112 -1.22339,1.31112zm-18.85252,-11.09203c-0.19574,0 -0.39149,0.07867 -0.53829,0.236c-0.29361,0.31467 -0.29361,0.83911 0,1.15378l2.78934,2.98934l-2.75264,2.95001c-0.29361,0.31467 -0.29361,0.83911 0,1.15378s0.78297,0.31467 1.07659,0l3.29093,-3.5269c0.29361,-0.31467 0.29361,-0.83911 0,-1.15378l-3.32763,-3.56623c-0.14681,-0.15733 -0.34255,-0.236 -0.53829,-0.236zm10.75364,0l-6.20261,0c-0.41595,0 -0.7585,0.36711 -0.7585,0.81289s0.34255,0.81289 0.7585,0.81289l6.20261,0c0.41595,0 0.7585,-0.36711 0.7585,-0.81289s-0.34255,-0.81289 -0.7585,-0.81289z"
    }, this.pathMap.SERVICE_COPY = {
      d: "m22.25426,4.36071c0.32142,-0.1 0.65571,-0.1 0.97713,0c0.78428,0.25 1.20856,1.05002 1.00284,1.81254l-0.02571,0.0875l-5.82421,16.98784c-0.12857,0.37501 -0.41142,0.68751 -0.77142,0.87502c-0.73285,0.36251 -1.61998,0.0875 -2.0314,-0.58751l-0.05143,-0.0875l-3.65138,-7.10014l-7.30276,-3.55007c-0.29571,-0.15 -0.53999,-0.37501 -0.69428,-0.67501l-0.05143,-0.1l-0.03857,-0.1c-0.25714,-0.76252 0.14143,-1.57503 0.88713,-1.87504l0.09,-0.0375s17.48549,-5.65011 17.48549,-5.65011zm-0.59142,3.62507l-7.99704,7.77515l3.20139,6.22512l4.79565,-14.00028zm-1.18284,-1.15002l-14.41267,4.67509l6.40277,3.11256l8.0099,-7.77515l0,0l0,-0.0125z"
    }, this.pathMap.SERVICE_CAMEL = {
      d: "m21.65023,16.92556c-0.04825,-0.2448 -0.08444,-0.476 -0.13269,-0.7208c-0.10856,-0.5168 -0.21712,-1.0336 -0.32569,-1.5504c0,-0.0408 -0.03619,-0.0816 -0.06031,-0.136c-0.16887,0.4216 -0.10856,0.8296 -0.02412,1.2376c0.10856,0.5168 0.27744,1.0064 0.49456,1.4824c0.07237,0.1496 0.0965,0.3536 0.07237,0.5304c-0.06031,0.7888 -0.15681,1.564 -0.21712,2.35281c-0.01206,0.1496 0.01206,0.3128 0.04825,0.4624c0.0965,0.3944 0.06031,0.8024 0,1.1968c-0.03619,0.1768 -0.10856,0.2992 -0.27744,0.2856c-0.39806,-0.0544 -0.78406,-0.1224 -1.20625,-0.1904c0.08444,-0.2448 0.25331,-0.2856 0.39806,-0.2584c0.25331,0.0408 0.34981,-0.1224 0.39806,-0.3264c0.07237,-0.2992 0.14475,-0.5984 0.15681,-0.8976c0.03619,-0.8568 0.02412,-1.7272 -0.21712,-2.55681c-0.04825,-0.1768 -0.0965,-0.3536 -0.193,-0.5168c-0.20506,-0.3536 -0.27744,-0.748 -0.34981,-1.156c-0.03619,-0.204 -0.12062,-0.3944 -0.20506,-0.5848c-0.02412,-0.0544 -0.10856,-0.1224 -0.15681,-0.1224c-0.04825,0 -0.10856,0.1088 -0.10856,0.1768c-0.01206,0.2448 -0.03619,0.4896 -0.01206,0.7344c0.01206,0.2584 0.04825,0.5168 0.08444,0.7616c0.03619,0.2584 0.07237,0.5168 0.14475,0.7616c0.06031,0.2176 0.04825,0.3944 -0.03619,0.5984l-1.26656,2.74721c-0.07237,0.1496 -0.12062,0.3128 -0.16887,0.4624c-0.12062,0.3944 -0.37394,0.5848 -0.73581,0.612c-0.22919,0.0136 -0.45837,0 -0.68756,-0.0408c-0.08444,0 -0.15681,-0.1224 -0.22919,-0.1768c0.06031,-0.0816 0.10856,-0.1904 0.193,-0.2584c0.07237,-0.0544 0.16887,-0.0816 0.26537,-0.1088c0.36187,-0.0544 0.61519,-0.3128 0.74787,-0.6528c0.21712,-0.5304 0.39806,-1.0744 0.56694,-1.6184c0.0965,-0.2992 0.16887,-0.5984 0.24125,-0.9112c0.0965,-0.5032 -0.03619,-0.9792 -0.15681,-1.4416c-0.07237,-0.2856 -0.07237,-0.5304 0.01206,-0.8024c0.04825,-0.1768 0.04825,-0.408 -0.02412,-0.5712c-0.2895,-0.6664 -0.579,-1.3464 -0.74787,-2.0808c0,-0.0136 -0.02412,-0.0408 -0.04825,-0.0544c-0.04825,0.0408 -0.10856,0.0544 -0.16887,0.0952c-0.56694,0.3672 -1.14594,0.6664 -1.76112,0.884c-0.13269,0.0408 -0.24125,0.1224 -0.37394,0.1904c-0.07237,0.0408 -0.14475,0.0544 -0.21712,0.068c-0.90469,0.0544 -1.80937,0.0816 -2.68994,-0.2448c-0.13269,-0.0544 -0.26537,-0.068 -0.39806,-0.1088c-0.20506,-0.0544 -0.32569,0.0408 -0.32569,0.272c0,0.6936 0.04825,1.3736 0.20506,2.0536c0.12062,0.5168 0.20506,1.0336 0.20506,1.564c0,0.3808 0.10856,0.7616 0.16887,1.1424l0.31362,1.9448c0.03619,0.2448 -0.12062,0.5032 -0.37394,0.544c-0.21712,0.0408 -0.44631,0.0272 -0.66344,0.0408c-0.12062,0 -0.25331,-0.0136 -0.37394,-0.0272c-0.14475,0 -0.193,-0.068 -0.13269,-0.2312c0.07237,-0.1904 0.20506,-0.2856 0.37394,-0.3264c0.33775,-0.0816 0.41012,-0.1904 0.42219,-0.5848c0,-0.612 -0.06031,-1.224 -0.21712,-1.8088c-0.08444,-0.2856 -0.22919,-0.5576 -0.34981,-0.8296c-0.02412,0 -0.03619,0 -0.06031,0.0136c-0.01206,0.1088 -0.03619,0.2176 -0.02412,0.3128c0.03619,0.544 0.08444,1.0744 0.12062,1.6184c0.02412,0.3128 0.03619,0.6256 0.04825,0.9384c0,0.1768 -0.04825,0.2856 -0.22919,0.3128c-0.37394,0.0544 -0.73581,0.1224 -1.12181,0.1768c-0.07237,0 -0.20506,-0.0544 -0.22919,-0.136c-0.04825,-0.136 0.04825,-0.2312 0.16887,-0.272c0.02412,0 0.06031,-0.0136 0.08444,-0.0272c0.26537,-0.1224 0.50662,-0.2856 0.53075,-0.6664c0.02412,-0.544 0.08444,-1.0744 0.10856,-1.6184c0,-0.1632 -0.02412,-0.34 -0.08444,-0.476c-0.193,-0.4488 -0.24125,-0.9112 -0.13269,-1.3872c0.08444,-0.34 0.08444,-0.68 0.01206,-1.02c-0.01206,-0.0816 0,-0.1632 -0.01206,-0.2448c-0.02412,-0.1768 -0.03619,-0.3672 -0.10856,-0.5032c-0.193,-0.34 -0.32569,-0.7072 -0.386,-1.1016c-0.02412,-0.1768 -0.10856,-0.3264 -0.22919,-0.4352c-0.16887,-0.1632 -0.31362,-0.3808 -0.49456,-0.5304c-0.13269,-0.0952 -0.31362,-0.1496 -0.47044,-0.1632c-0.06031,0 -0.16887,0.1224 -0.18094,0.2176c-0.02412,0.1496 -0.08444,0.204 -0.20506,0.2176c-0.37394,0.068 -0.71169,-0.0408 -1.07356,-0.1224c-0.65137,-0.1632 -1.13387,-0.6528 -1.59225,-1.1152c-0.37394,-0.3808 -0.49456,-0.952 -0.59106,-1.5096c-0.06031,-0.3672 -0.13269,-0.7344 -0.15681,-1.1152c-0.01206,-0.3264 0.03619,-0.6664 0.04825,-1.0064c0.01206,-0.204 0.02412,-0.408 0.01206,-0.612c0,-0.0816 -0.08444,-0.1632 -0.14475,-0.2176c-0.27744,-0.1904 -0.54281,-0.4216 -0.89262,-0.4352c-0.15681,0 -0.2895,-0.2448 -0.22919,-0.5032c0.04825,-0.2584 0.10856,-0.5168 0.24125,-0.7344c0.07237,-0.136 0.26537,-0.2176 0.41012,-0.2584c0.34981,-0.068 0.68756,-0.1496 1.01325,-0.3128c0.33775,-0.1632 0.66344,-0.1904 0.965,0.136c0.15681,0.1632 0.37394,0.2176 0.59106,0.1768c0.08444,0 0.193,0.0544 0.27744,0.0952c0.02412,0 0.02412,0.1088 0,0.1496c-0.10856,0.2176 -0.10856,0.3672 0.03619,0.5304c0.37394,0.4216 0.45837,0.9384 0.45837,1.5096c0,0.2856 0,0.5848 0.03619,0.8704c0.02412,0.2992 0.13269,0.3672 0.386,0.2856c0.68756,-0.1904 1.19419,-0.6936 1.55606,-1.3464c0.37394,-0.6528 0.69962,-1.3464 1.03737,-2.0264c0.193,-0.3808 0.36187,-0.7616 0.55487,-1.1288c0.07237,-0.136 0.13269,-0.2584 0.22919,-0.3808c0.24125,-0.34 0.55487,-0.4624 0.85644,-0.34c0.31362,0.1224 0.53075,0.4896 0.51869,0.8976c0,0.1224 -0.01206,0.2584 -0.03619,0.3808c-0.04825,0.2448 0,0.4352 0.0965,0.6528c0.13269,0.34 0.26537,0.6936 0.37394,1.0472c0.0965,0.2584 0.16887,0.5304 0.39806,0.6936c0.10856,0.0816 0.25331,0.1088 0.37394,0.136c0.13269,0.0136 0.24125,-0.0816 0.24125,-0.2312c0,-0.6392 0.21712,-1.2104 0.33775,-1.8088c0.04825,-0.272 0.04825,-0.5576 0.0965,-0.8296c0.0965,-0.4624 0.37394,-0.7208 0.772,-0.8024c0.36187,-0.0816 0.65137,0.068 0.90469,0.3944c0.14475,0.1904 0.31362,0.3672 0.51869,0.4624c0.65137,0.3536 1.10975,0.9112 1.41131,1.6184c0.16887,0.3944 0.34981,0.8024 0.4825,1.2104c0.0965,0.2584 0.13269,0.544 0.16887,0.8296c0.04825,0.3536 0.20506,0.5576 0.51869,0.6664c0.47044,0.1632 0.85644,0.4624 1.13387,0.9248c0.15681,0.2584 0.21712,0.5576 0.21712,0.8704c0,0.5848 0.08444,1.1424 0.193,1.7136c0.07237,0.3944 0.07237,0.816 0.10856,1.224c0.07237,0.8432 0.14475,1.6728 0.21712,2.51601c0,0.0816 0,0.1768 0.01206,0.2448c-0.03619,0 -0.06031,0.0136 -0.0965,0.0136l0,0l0.02412,0.0544z"
    }, this.pathMap.SERVICE_DMN = {
      d: "m4.01314,5.18141l0,16.14588c0,0.66057 0.55194,1.19411 1.2353,1.19411l16.70281,0c0.68336,0 1.2353,-0.53354 1.2353,-1.19411l0,-16.13317c0,-0.66057 -0.55194,-1.19411 -1.2353,-1.19411l-16.71595,0c-0.68336,0 -1.2353,0.53354 -1.2353,1.19411l0,0l0.01314,-0.0127zm5.99251,16.17128l-4.38925,0c-0.22341,0 -0.40739,-0.17785 -0.40739,-0.3938l0,-3.0869l4.7835,0l0,3.468l0,0l0.01314,0.0127zm0,-4.624l-4.79664,0l0,-3.468l4.7835,0l0,3.468l0,0l0.01314,0zm5.99251,4.624l-4.7835,0l0,-3.468l4.7835,0l0,3.468zm0,-4.624l-4.7835,0l0,-3.468l4.7835,0l0,3.468zm5.57198,4.624l-4.38925,0l0,-3.468l4.7835,0l0,3.0869c0,0.21596 -0.18398,0.3938 -0.40739,0.3938l0,0l0.01314,-0.0127zm0.40739,-4.6367l-4.7835,0l0,-3.468l4.7835,0l0,3.468zm0,-4.624l-4.7835,0l0,-3.468l-1.19587,0l0,3.468l-4.7835,0l0,-3.468l-1.19587,0l0,3.468l-4.80978,0l0,-3.0869c0,-0.21596 0.18398,-0.3938 0.40739,-0.3938l15.95375,0c0.22341,0 0.40739,0.17785 0.40739,0.3938l0,3.0869z"
    }, this.pathMap.SERVICE_DECISION_SERVICE = {
      d: "M7.5 3.5H20.5C21.05 3.5 21.5 3.95 21.5 4.5V7.5C21.5 8.05 21.05 8.5 20.5 8.5H7.5C6.95 8.5 6.5 8.05 6.5 7.5V4.5C6.5 3.95 6.95 3.5 7.5 3.5ZM7.5 4.5V7.5H20.5V4.5H7.5ZM7.6 4.6H10.1C10.266 4.6 10.4 4.734 10.4 4.9V7.1C10.4 7.266 10.266 7.4 10.1 7.4H7.6C7.434 7.4 7.3 7.266 7.3 7.1V4.9C7.3 4.734 7.434 4.6 7.6 4.6ZM7.3 5.75V5.95H10.4V5.75H7.3ZM8.45 5.95V7.4H8.65V5.95H8.45ZM4.5 17.5H11.5C12.05 17.5 12.5 17.95 12.5 18.5V21.5C12.5 22.05 12.05 22.5 11.5 22.5H4.5C3.95 22.5 3.5 22.05 3.5 21.5V18.5C3.5 17.95 3.95 17.5 4.5 17.5ZM4.5 18.5V21.5H11.5V18.5H4.5ZM5.1 18.8H7.6C7.766 18.8 7.9 18.934 7.9 19.1V21.3C7.9 21.466 7.766 21.6 7.6 21.6H5.1C4.934 21.6 4.8 21.466 4.8 21.3V19.1C4.8 18.934 4.934 18.8 5.1 18.8ZM4.8 19.95V20.15H7.9V19.95H4.8ZM5.95 20.15V21.6H6.15V20.15H5.95ZM16.5 17.5H23.5C24.05 17.5 24.5 17.95 24.5 18.5V21.5C24.5 22.05 24.05 22.5 23.5 22.5H16.5C15.95 22.5 15.5 22.05 15.5 21.5V18.5C15.5 17.95 15.95 17.5 16.5 17.5ZM16.5 18.5V21.5H23.5V18.5H16.5ZM17.1 18.8H19.6C19.766 18.8 19.9 18.934 19.9 19.1V21.3C19.9 21.466 19.766 21.6 19.6 21.6H17.1C16.934 21.6 16.8 21.466 16.8 21.3V19.1C16.8 18.934 16.934 18.8 17.1 18.8ZM16.8 19.95V20.15H19.9V19.95H16.8ZM17.95 20.15V21.6H18.15V20.15H17.95ZM8 9.3L8.8 10.7H8.3V17.5H7.7V10.7H7.2ZM20 9.3L20.8 10.7H20.3V17.5H19.7V10.7H19.2Z"
    }, this.pathMap.SERVICE_HTTP_1 = {
      d: "m13.86478,4.01167c-5.441,0 -9.85295,4.31949 -9.86478,9.74804c0,5.38185 4.36463,9.75972 9.85295,9.77139c5.45283,0 9.86478,-4.30782 9.90026,-9.75972c-0.02366,-5.4052 -4.40012,-9.77139 -9.88843,-9.77139l0,0.01167zm-6.30447,8.62731c0.20108,-0.17511 0.3785,-0.37358 0.60324,-0.53702c0.28388,-0.21014 0.6269,-0.29186 0.96992,-0.29186l2.79147,0c0.48496,0 0.91078,-0.18679 1.28928,-0.4553c0.41399,-0.30353 0.82798,-0.59539 1.24197,-0.88725c0.43765,-0.30353 0.87529,-0.61874 1.31294,-0.9106c0.03548,-0.02335 0.0828,-0.05837 0.13011,-0.07005c0,0 0.01183,0.02335 0.02366,0.02335c-0.04731,0.05837 -0.10645,0.11674 -0.1656,0.16344c-1.53767,1.52933 -3.08718,3.04699 -4.62485,4.56465c-0.04731,0.0467 -0.09463,0.08172 -0.14194,0.10507c-0.63873,0.21014 -1.15917,0.57204 -1.62047,1.03901l-0.05914,0.05837s-0.02366,0.01167 -0.04731,0.03502l-0.28388,-0.42027c-0.48496,-0.71213 -0.95809,-1.42426 -1.44305,-2.1364c-0.0828,-0.11674 -0.07097,-0.18679 0.02366,-0.28018l0,0zm9.77015,-0.94562c-0.43765,0.61874 -0.87529,1.23748 -1.32477,1.85621c-0.10645,0.14009 -0.22474,0.26851 -0.31936,0.4086c-0.28388,0.42027 -0.40216,0.88725 -0.40216,1.38924l0,2.56835c0,0.47865 -0.1656,0.88725 -0.50862,1.2258c-0.11828,0.11674 -0.24839,0.23349 -0.35485,0.3619c-0.05914,0.07005 -0.10645,0.07005 -0.18925,0.01167c-0.63873,-0.42027 -1.27745,-0.84055 -1.92801,-1.2725c-0.23657,-0.16344 -0.47313,-0.31521 -0.7097,-0.46697c0.22474,-0.25683 0.44947,-0.49032 0.63873,-0.75883c0.17742,-0.26851 0.30753,-0.57204 0.4613,-0.8639c0.04731,-0.10507 0.10645,-0.21014 0.18925,-0.29186c1.56133,-1.55268 3.12266,-3.09369 4.68399,-4.64637c0.02366,-0.02335 0.04731,-0.0467 0.07097,-0.07005c0,0 0.02366,0.01167 0.03548,0.02335c-0.11828,0.16344 -0.23657,0.33855 -0.34302,0.50199l0,0l0,0.02335zm2.03446,-2.98862c-0.26022,0.44362 -0.55593,0.87557 -0.82798,1.30752c-0.4613,0.72381 -1.12369,1.2725 -1.72693,1.86789c-1.34842,1.34254 -2.69685,2.67341 -4.04527,4.01596c-0.04731,0.0467 -0.07097,0.09339 -0.09463,0.15177c-0.20108,0.66544 -0.6269,1.19078 -1.11186,1.66943c-0.13011,0.12842 -0.27205,0.25683 -0.40216,0.39693c-0.07097,0.08172 -0.13011,0.07005 -0.18925,0s-0.13011,-0.14009 -0.20108,-0.22181c-0.0828,0.08172 -0.15377,0.15177 -0.22474,0.22181c-0.11828,0.11674 -0.21291,0.15177 -0.36668,0.05837c-0.15377,-0.10507 -0.28388,-0.24516 -0.42582,-0.3619c-0.02366,-0.02335 -0.03548,-0.0467 -0.07097,-0.09339c-0.0828,0.07005 -0.15377,0.12842 -0.23657,0.19846c-0.10645,0.08172 -0.22474,0.16344 -0.34302,0.24516c-0.05914,0.03502 -0.14194,0.03502 -0.22474,0.03502c0,-0.07005 0,-0.16344 0.02366,-0.22181c0.10645,-0.16344 0.22474,-0.31521 0.33119,-0.46697c0.02366,-0.03502 0.05914,-0.07005 0.10645,-0.11674c-0.04731,-0.03502 -0.09463,-0.07005 -0.13011,-0.10507c-0.11828,-0.14009 -0.23657,-0.26851 -0.34302,-0.42027c-0.07097,-0.10507 -0.04731,-0.21014 0.04731,-0.30353c0.0828,-0.07005 0.1656,-0.12842 0.26022,-0.19846l0,-0.08172c-0.0828,-0.07005 -0.17742,-0.12842 -0.24839,-0.21014c-0.02366,-0.02335 -0.02366,-0.10507 0,-0.12842c0.48496,-0.47865 0.9226,-0.98064 1.53767,-1.29585c0.1656,-0.08172 0.34302,-0.14009 0.50862,-0.22181c0.0828,-0.0467 0.18925,-0.08172 0.24839,-0.15177c1.72693,-1.70445 3.46568,-3.42057 5.19261,-5.12502c0.27205,-0.25683 0.59141,-0.4553 0.89895,-0.67711c0.42582,-0.30353 0.85164,-0.61874 1.36025,-0.78218c0.20108,-0.07005 0.40216,-0.11674 0.61507,-0.11674s0.30753,0.12842 0.30753,0.33855c0.01183,0.28018 -0.09463,0.54869 -0.22474,0.78218l0,0l0,0.01167z"
    }, this.pathMap.SERVICE_HTTP_2 = {
      d: "m12.86,5.75s-0.08,0.03 -0.09,0.06c-0.06,0.12 -0.11,0.24 -0.18,0.38c0.23,-0.02 0.43,0 0.58,0.16c0.16,0.16 0.19,0.36 0.18,0.57c0.03,0 0.04,0 0.05,0c0.08,-0.03 0.14,-0.06 0.22,-0.1c0.16,-0.07 0.19,-0.14 0.18,-0.31c-0.05,-0.49 -0.45,-0.81 -0.94,-0.75l0,-0.01z"
    }, this.pathMap.SERVICE_WS_1 = {
      d: "m23.00814,16.21811c0,-0.40507 0.32065,-0.55788 0.64129,-0.55788c0.75485,0 0.77267,0.55788 0.77267,1.00419l1.05992,0.00728c0,-0.73495 -0.22935,-2.02536 -1.92388,-2.02536c-0.91518,0 -1.74129,0.55788 -1.74129,1.51841c0,2.40617 2.6342,1.7731 2.6342,3.0635c0,0.48026 -0.34291,0.70827 -0.93967,0.70827c-0.68805,0 -0.91518,-0.58214 -0.91518,-1.03815l-1.12226,0c0,1.59603 1.00647,2.15149 2.26679,2.15149c1.03097,0 1.83258,-0.70827 1.83258,-1.64454c0,-2.78214 -2.56517,-1.69548 -2.56517,-3.18721zm-3.6763,2.38192l-0.97753,-3.95369l-1.28036,0l-0.97975,3.95369l-0.76822,-3.95369l-1.11781,0l1.30485,6.40595l1.2336,0l1.02429,-4.60375l1.04878,4.60375l1.16457,0l1.30485,-6.40595l-1.11781,0l-0.83947,3.95369l0.00001,0z"
    }, this.pathMap.SERVICE_WS_2 = {
      d: "m14.63788,22.47019s-0.40199,0.0244 -0.61901,0.0244c-2.28368,0 -3.19864,-3.67442 -3.50691,-5.19201l3.17151,0c0.07152,-0.35622 0.19236,-0.82223 0.3354,-1.10769l-3.71407,0c-0.21702,-1.6347 -0.22442,-3.13765 -0.00986,-4.77236l7.30977,-0.00976c0.07152,0.63924 0.10358,1.22237 0.10358,1.86161c0.36006,-0.07075 0.64614,-0.15615 1.0062,-0.22691c0,-0.56849 -0.05672,-1.06866 -0.12824,-1.63714l3.71161,0c0.19976,0.6856 0.46364,1.73474 0.46364,2.41546c0,0.05124 0.01233,0.02684 0.85577,0.71976c0.05919,-5.36768 -3.86451,-10.2352 -9.64524,-10.2352c-5.31956,0.00732 -9.65018,4.46737 -9.65018,9.60083c0,5.97765 5.40341,10.17908 11.30252,9.452c-0.54749,-0.3611 -0.77931,-0.48797 -0.98648,-0.89299l0,0zm7.32703,-12.01141l-3.50938,0c-0.28608,-1.67374 -0.93468,-3.47923 -2.02967,-4.81384c2.38973,0.6856 4.65369,2.51061 5.53905,4.81384zm-8.05949,-5.12614c2.33548,0 3.0926,3.45971 3.51924,5.12614l-6.98916,0c0.33293,-1.63226 1.25036,-5.12614 3.46992,-5.12614zm-2.46372,0.3123c-0.66341,0.81003 -1.10978,1.65178 -1.46738,2.61797c-0.14057,0.38306 -0.67327,2.19587 -0.67327,2.19587l-3.45512,0c0.86809,-2.26419 3.18138,-4.28927 5.59577,-4.81384l0,0zm-6.24191,8.21256c-0.03946,-0.99058 0.21702,-2.0446 0.36006,-2.4667l3.7412,0c-0.21702,1.61763 -0.24169,3.21573 -0.02466,4.83335l-3.71654,0c-0.14304,-0.42453 -0.32307,-1.21749 -0.36006,-2.36666l0,0zm0.72013,3.44752l3.43046,0c0.28608,1.6713 0.94455,3.42312 2.03707,4.75772c-2.41686,-0.59044 -4.52298,-2.54721 -5.46753,-4.75772z"
    }, this.pathMap.SERVICE_MAIL_1 = {
      d: "m22.07399,10.40053l0,-3.48738c0,-0.74889 -0.60144,-1.36366 -1.35882,-1.36366l-4.70017,0l-1.62613,-1.30777c-0.47893,-0.32415 -1.10265,-0.32415 -1.57044,0.01118l-1.54816,1.28541l-4.38831,0c-0.74624,0 -1.35882,0.60359 -1.35882,1.36366l0,3.45385l-1.04696,0.87185l0,9.4897c0,0.74889 0.60144,1.36366 1.35882,1.36366l15.92712,0c0.74624,0 1.35882,-0.60359 1.35882,-1.36366l0,-9.47852l-1.04696,-0.83831l0.00001,-0.00001zm-0.90217,1.93371l-7.37326,3.05146l-7.37326,-3.05146l0,-5.42109c0,-0.25708 0.20048,-0.45828 0.45665,-0.45828l13.83321,0c0.25617,0 0.45665,0.2012 0.45665,0.45828c0,0 0,5.42109 0,5.42109l0.00001,0z"
    }, this.pathMap.SERVICE_MAIL_2 = {
      d: "m13.71,8c-0.78,0 -1.43,0.24 -1.95,0.71c-0.5,0.46 -0.76,1.01 -0.76,1.65s0.22,1.12 0.65,1.51c0.47,0.42 1.11,0.63 1.91,0.63c0.7,0 1.33,-0.19 1.9,-0.56l-0.2,-0.27c-0.49,0.33 -1.05,0.49 -1.68,0.49s-1.06,-0.16 -1.41,-0.48c-0.36,-0.33 -0.54,-0.78 -0.54,-1.35s0.19,-1.04 0.56,-1.42c0.4,-0.41 0.91,-0.61 1.52,-0.61c0.56,0 1.01,0.14 1.38,0.43c0.38,0.3 0.58,0.69 0.58,1.18c0,0.35 -0.11,0.66 -0.33,0.94c-0.23,0.3 -0.51,0.46 -0.84,0.46c-0.09,0 -0.14,-0.04 -0.14,-0.13c0,-0.12 0.11,-0.56 0.31,-1.32c0.13,-0.43 0.23,-0.76 0.31,-0.97l-0.57,0l-0.03,0.06c-0.1,-0.09 -0.27,-0.14 -0.49,-0.14c-0.41,0 -0.77,0.18 -1.1,0.54c-0.39,0.43 -0.58,0.91 -0.58,1.45s0.27,0.84 0.8,0.84c0.35,0 0.6,-0.09 0.76,-0.26c0.03,-0.15 0.05,-0.2 0.05,-0.15c0,0.29 0.19,0.44 0.57,0.44c0.51,0 0.93,-0.19 1.27,-0.56c0.28,-0.33 0.43,-0.71 0.43,-1.16c0,-0.55 -0.2,-1 -0.59,-1.35c-0.44,-0.39 -1.03,-0.59 -1.76,-0.59l-0.01,0l-0.02,-0.01zm0.18,2.49c-0.23,0.56 -0.5,0.83 -0.81,0.83c-0.14,0 -0.21,-0.13 -0.21,-0.39c0,-0.39 0.09,-0.78 0.28,-1.16c0.22,-0.45 0.48,-0.67 0.76,-0.67c0.18,0 0.27,0.12 0.27,0.36s-0.09,0.59 -0.28,1.04l0,0l-0.01,-0.01z"
    }, this.pathMap.SERVICE_MQ_1 = {
      d: "m20.50197,5.06155c-4.36488,-3.06447 -10.22662,1.28779 -12.69472,3.21948c-0.13712,0.10732 0,0.31002 0.13712,0.2504c2.57094,-1.25202 8.72976,-3.88722 11.50637,-1.71705c2.2967,1.7886 1.83965,5.69967 1.70253,7.08285c-0.01143,0.10732 0.12569,0.15501 0.1714,0.05962c0.73129,-1.37126 2.92516,-5.77121 -0.8227,-8.8953zm-1.8168,11.69743c-2.57094,1.25202 -8.72976,3.88722 -11.50637,1.71705c-2.2967,-1.7886 -1.83965,-5.69967 -1.70253,-7.08285c0.01143,-0.10732 -0.12569,-0.14309 -0.1714,-0.05962c-0.73129,1.37126 -2.92516,5.77121 0.8227,8.8953c4.36488,3.07639 10.22662,-1.28779 12.69472,-3.21948c0.13712,-0.10732 0,-0.31002 -0.14854,-0.2504l0.01143,0z"
    }, this.pathMap.SERVICE_MQ_2 = {
      d: "m7.56012,10.65829l0,4.83454c0,0.3223 -0.05385,0.51124 -0.16154,0.57792c-0.09693,0.04446 -0.28001,0.08891 -0.56002,0.12225l0,0.45567l1.96007,0l0,-0.46678c-0.28001,-0.02223 -0.46309,-0.06668 -0.57079,-0.13337c-0.09693,-0.06668 -0.14,-0.25562 -0.14,-0.56681l0,-4.89011l1.69083,6.04596l0.37694,0l1.69083,-6.03485l0,4.86789c0,0.3223 -0.05385,0.52235 -0.16154,0.58904c-0.07539,0.04446 -0.26924,0.08891 -0.57079,0.12225l0,0.45567l2.12161,0l0,-0.46678c-0.31232,-0.03334 -0.50617,-0.06668 -0.59233,-0.13337c-0.09693,-0.06668 -0.14,-0.26673 -0.14,-0.56681l0,-4.83454c0,-0.3223 0.05385,-0.51124 0.17231,-0.58904c0.09693,-0.06668 0.29078,-0.11114 0.57079,-0.13337l0,-0.46678l-1.60467,0l-1.58313,5.6792l-1.5939,-5.6792l-1.65852,0l0,0.45567c0.33386,0.03334 0.52771,0.0778 0.6031,0.13337c0.09693,0.06668 0.14,0.26673 0.14,0.58904l0,0.02223l0.01077,0.01111zm10.98499,4.92346c-0.25847,0 -0.4954,-0.25562 -0.67848,-0.75574c0.71079,-0.73352 1.06619,-1.81157 1.06619,-3.22303c0,-1.15585 -0.2477,-2.10053 -0.75387,-2.84516c-0.44155,-0.65572 -0.9908,-0.97802 -1.64775,-0.97802s-1.2062,0.3223 -1.65852,0.97802c-0.4954,0.74463 -0.7431,1.68931 -0.7431,2.84516s0.2477,2.14498 0.7431,2.8785c0.44155,0.64461 0.9908,0.96691 1.64775,0.96691c0.32309,0 0.6031,-0.08891 0.8508,-0.25562c0.25847,0.68906 0.6031,1.03359 1.01234,1.03359c0.32309,0 0.6031,-0.23339 0.86157,-0.71129l-0.20462,-0.37787c-0.19385,0.27785 -0.3554,0.42233 -0.4954,0.42233l0,0l0,0.02223zm-1.54005,-0.74463c-0.14,0.06668 -0.28001,0.10003 -0.42001,0.10003c-0.40924,0 -0.61387,-0.25562 -0.61387,-0.74463c0,-0.20005 0.04308,-0.36676 0.14,-0.50013c0.08616,-0.12225 0.19385,-0.18894 0.30155,-0.18894c0.28001,0 0.54925,0.42233 0.80772,1.26698c0,-0.02223 -0.07539,0 -0.20462,0.06668l0,0l-0.01077,0zm0.66772,-0.60015c-0.15077,-0.4001 -0.28001,-0.70018 -0.38771,-0.88911c-0.22616,-0.36676 -0.4954,-0.54458 -0.79695,-0.54458c-0.28001,0 -0.50617,0.13337 -0.68925,0.4001c-0.16154,0.23339 -0.2477,0.51124 -0.2477,0.85577c0,0.21116 0.04308,0.4001 0.09693,0.56681c-0.52771,-0.57792 -0.79695,-1.57817 -0.79695,-3.00075c0,-0.9558 0.15077,-1.73377 0.44155,-2.3228c0.31232,-0.64461 0.72156,-0.96691 1.24927,-0.96691c0.40924,0 0.76464,0.21116 1.05542,0.64461c0.42001,0.60015 0.62464,1.48926 0.62464,2.65622s-0.18308,2.06718 -0.54925,2.61177l0,0l0,-0.01111z"
    }, this.pathMap.SERVICE_SC_1 = {
      d: "m14.79685,19.26627l-5.42773,0c-2.11549,0 -3.71117,-1.00376 -4.73869,-2.93505c-0.24177,-0.45741 -0.36265,-0.97835 -0.49563,-1.47388c-0.09671,-0.35576 -0.14506,-0.73694 -0.13297,-1.0927c0.03627,-1.70258 0.65278,-3.12564 1.89789,-4.24375c0.70113,-0.62259 1.49897,-0.99106 2.38143,-1.19435c0.16924,-0.03812 0.3143,-0.20329 0.43519,-0.33035c0.58025,-0.648 1.12423,-1.35953 1.74074,-1.96941c0.55607,-0.54635 1.2572,-0.88941 1.97042,-1.19435c1.19676,-0.52094 2.42979,-0.55906 3.66281,-0.39388c1.31765,0.17788 2.52649,0.74965 3.49357,1.728c1.29347,1.15623 1.97042,2.46494 2.29681,3.29082c0.08462,0.15247 0.21759,0.31765 0.36265,0.39388c1.2572,0.62259 2.09131,1.62635 2.55067,3.01129c0.29012,0.88941 0.33848,1.79153 0.1088,2.66823c-0.35057,1.39764 -1.12423,2.50305 -2.38143,3.18917c-0.74949,0.40659 -1.53524,0.58447 -2.38143,0.57176c-1.7891,-0.02541 -3.55402,0 -5.34311,0l0,0l0,-0.02541zm-0.02418,-0.92753l5.52444,0c0.50772,0 0.99126,-0.08894 1.46271,-0.29223c1.80119,-0.76235 2.80453,-2.87152 2.24846,-4.82822c-0.35057,-1.23247 -1.10005,-2.13458 -2.24846,-2.63011c-0.27804,-0.11435 -0.51981,-0.30494 -0.61651,-0.60988c-0.27804,-0.97835 -0.83411,-1.76611 -1.48688,-2.50305c-0.95499,-1.10541 -2.11549,-1.82964 -3.49357,-2.10917c-1.55942,-0.31765 -3.0463,-0.05082 -4.42439,0.81317c-0.99126,0.62259 -1.74074,1.49929 -2.38143,2.47764c-0.25386,0.38118 -0.56816,0.55906 -0.99126,0.60988c-0.26595,0.03812 -0.54398,0.10165 -0.78575,0.216c-1.52315,0.72423 -2.42979,1.98211 -2.68365,3.6974c-0.15715,1.06729 0.08462,2.10917 0.65278,3.01129c0.89455,1.42306 2.15175,2.1727 3.79579,2.14729c1.80119,-0.01271 3.61446,0 5.42773,0l0.01209,0l-0.01209,0z"
    }, this.pathMap.SERVICE_SC_2 = {
      d: "m17.77926,6.98091c0.13362,0.41985 0.2806,0.78179 0.34741,1.14374c0.25388,1.14374 0.46767,2.30195 0.36078,3.48912c-0.13362,1.40433 -0.60129,2.62046 -1.87069,3.21404c-0.44095,0.20269 -0.92198,0.36194 -1.38966,0.3909c-1.02888,0.05791 -2.05776,0.01448 -3.11337,-0.04343c0.24052,-0.10134 0.48104,-0.21716 0.72155,-0.28955c2.00431,-0.59358 3.36725,-1.99792 4.2625,-3.99584c0.1069,-0.24612 0.33405,-0.55015 0.12026,-0.92657c-0.09353,0.1303 -0.17371,0.23164 -0.24052,0.34746c-0.68147,1.28851 -1.6569,2.27299 -2.85949,2.95344c-0.60129,0.33299 -1.28276,0.5212 -1.9375,0.76732c-0.36078,0.1303 -0.74828,0.17373 -1.09569,0.30403c-0.92198,0.33299 -1.37629,-0.17373 -1.53664,-1.04239c-0.2806,-1.54911 0.36078,-2.73628 1.61681,-3.35882c0.52112,-0.2606 1.1625,-0.28955 1.75043,-0.3909c0.65474,-0.11582 1.32285,-0.11582 1.95086,-0.30403c1.09569,-0.31851 1.99095,-0.99896 2.68578,-1.96896c0.05345,-0.07239 0.12026,-0.14478 0.21379,-0.27508l0.01336,-0.01448zm-7.88363,8.80242c-0.20043,-0.01448 -0.3875,-0.1303 -0.33405,-0.34746c0.02672,-0.14478 0.21379,-0.31851 0.34741,-0.34746c0.21379,-0.05791 0.29397,0.14478 0.29397,0.37642s-0.09353,0.34746 -0.30733,0.33299l0,0l0,-0.01448z"
    }, this.pathMap.SERVICE_REST_1 = {
      d: "m23.73344,12.53547c-0.0373,-0.43299 -0.41027,-0.75136 -0.82055,-0.71315l-0.90757,0.07641c-0.42271,0.0382 -0.88271,-0.26743 -1.04433,-0.66221l-0.63406,-1.26075c-0.22379,-0.35658 -0.19892,-0.91691 0.0746,-1.24802l0.59676,-0.71315c0.27352,-0.33111 0.23622,-0.82777 -0.09946,-1.0952l-1.16866,-1.00605c-0.32325,-0.28017 -0.79568,-0.24196 -1.0692,0.08914c0,0 0,0 0,0l-0.59676,0.71315c-0.27352,0.33111 -0.80811,0.45846 -1.19352,0.2929l-1.31785,-0.42025c-0.41027,-0.08914 -0.77082,-0.52213 -0.80811,-0.94238l-0.0746,-0.92965c-0.0373,-0.43299 -0.41027,-0.75136 -0.82055,-0.71315l-1.51677,0.12735c-0.42271,0.0382 -0.73352,0.40752 -0.69622,0.8405l0.0746,0.92965c0.0373,0.43299 -0.26108,0.90418 -0.64649,1.06973l-1.23082,0.64948c-0.34811,0.24196 -0.89514,0.20376 -1.21839,-0.07641l-0.69622,-0.59854c-0.32325,-0.28017 -0.79568,-0.24196 -1.0692,0.08914c0,0 0,0 0,0l-0.98217,1.19708c-0.27352,0.33111 -0.23622,0.81503 0.08703,1.0952l0.69622,0.61127c0.32325,0.28017 0.44757,0.82777 0.28595,1.22255l-0.41027,1.3499c-0.08703,0.42025 -0.50973,0.78956 -0.92001,0.82777l-0.90757,0.07641c-0.42271,0.0382 -0.73352,0.40752 -0.69622,0.8405l0.12433,1.55365c0.0373,0.43299 0.39784,0.75136 0.82055,0.71315l0.90757,-0.07641c0.42271,-0.0382 0.88271,0.26743 1.04433,0.66221l0.63406,1.26075c0.22379,0.35658 0.19892,0.91691 -0.0746,1.24802l-0.59676,0.71315c-0.27352,0.33111 -0.23622,0.81503 0.08703,1.0952l1.16866,1.00605c0.32325,0.28017 0.79568,0.24196 1.0692,-0.10188l0.59676,-0.71315c0.27352,-0.33111 0.80811,-0.45846 1.19352,-0.2929l1.31785,0.43299c0.41027,0.10188 0.77082,0.52213 0.80811,0.94238l0.0746,0.92965c0.0373,0.43299 0.39784,0.75136 0.82055,0.71315l1.51677,-0.12735c0.42271,-0.0382 0.73352,-0.42025 0.69622,-0.8405l-0.0746,-0.92965c-0.0373,-0.43299 0.26108,-0.90418 0.64649,-1.06973l1.23082,-0.64948c0.34811,-0.24196 0.89514,-0.20376 1.21839,0.07641l0.69622,0.61127c0.32325,0.28017 0.80811,0.24196 1.0692,-0.10188l0.98217,-1.19708c0.27352,-0.33111 0.23622,-0.82777 -0.09946,-1.0952l-0.69622,-0.61127c-0.32325,-0.28017 -0.44757,-0.82777 -0.28595,-1.22255l0.42271,-1.3499c0.09946,-0.42025 0.50973,-0.78956 0.92001,-0.82777l0.90757,-0.07641c0.42271,-0.0382 0.73352,-0.42025 0.69622,-0.8405l-0.12433,-1.56639l0,0l0.01243,0.01273zm-9.39898,6.6476c-2.72272,0.22923 -5.10977,-1.83382 -5.33355,-4.62276c-0.22379,-2.78894 1.79028,-5.23403 4.513,-5.46326s5.10977,1.83382 5.33355,4.62276c0.22379,2.78894 -1.79028,5.23403 -4.513,5.46326z"
    }, this.pathMap.SERVICE_REST_2 = {
      d: "m10.47533,13.3295c0.15872,0 0.24691,-0.07245 0.24691,-0.21736l0,-0.6883l0.75835,0.85132s0.10582,0.05434 0.194,0.05434c0.14109,0 0.22927,-0.07245 0.24691,-0.21736c0,-0.05434 -0.01764,-0.10868 -0.07054,-0.12679l-0.56435,-0.57962c0.38799,-0.07245 0.59963,-0.2717 0.61726,-0.59773c0,-0.47094 -0.28218,-0.70641 -0.84653,-0.70641l-0.59963,0c-0.15872,0 -0.24691,0.07245 -0.24691,0.25358l0,1.75697c0,0.14491 0.08818,0.21736 0.24691,0.21736l0,0l0.01764,0zm0.24691,-1.7932l0.33509,0c0.194,0 0.29981,0.10868 0.31745,0.28981c0,0.16302 -0.10582,0.25358 -0.31745,0.2717l-0.33509,0l0,-0.56151zm2.83941,1.57584c0,-0.12679 -0.08818,-0.19924 -0.22927,-0.19924l-0.61726,0l0,-0.47094l0.54672,0c0.15872,0 0.22927,-0.07245 0.24691,-0.21736c-0.01764,-0.12679 -0.10582,-0.21736 -0.24691,-0.21736l-0.54672,0l0,-0.45283l0.59963,0c0.14109,0 0.22927,-0.07245 0.22927,-0.21736s-0.08818,-0.19924 -0.22927,-0.19924l-0.84653,0c-0.15872,0 -0.24691,0.09057 -0.24691,0.2717l0,1.73886c0,0.14491 0.08818,0.21736 0.24691,0.23547l0.86417,0c0.14109,0 0.22927,-0.07245 0.22927,-0.21736l0,-0.03623l0,-0.01811zm0.98762,-0.19924s-0.194,-0.01811 -0.33509,-0.07245c-0.07054,-0.01811 -0.15872,-0.03623 -0.22927,-0.03623c-0.14109,0 -0.21163,0.07245 -0.21163,0.21736c0,0.21736 0.28218,0.30792 0.81126,0.32604c0.54672,-0.01811 0.8289,-0.25358 0.86417,-0.70641c0,-0.32604 -0.24691,-0.56151 -0.75835,-0.70641c-0.24691,-0.07245 -0.37036,-0.14491 -0.37036,-0.23547c0,-0.12679 0.10582,-0.19924 0.28218,-0.19924c0.07054,0 0.15872,0 0.26454,0.03623c0.08818,0.01811 0.14109,0.03623 0.194,0.03623c0.14109,0 0.21163,-0.09057 0.22927,-0.23547c-0.01764,-0.18113 -0.24691,-0.28981 -0.67017,-0.30792c-0.51145,0.03623 -0.79362,0.2717 -0.8289,0.70641c0,0.28981 0.22927,0.47094 0.68781,0.59773c0.28218,0.07245 0.42327,0.16302 0.42327,0.2717c0,0.16302 -0.12345,0.25358 -0.33509,0.2717l0,0l-0.01764,0.03623zm2.04578,-1.39471l0.37036,0c0.14109,0 0.21163,-0.07245 0.22927,-0.21736c0,-0.12679 -0.08818,-0.19924 -0.22927,-0.19924l-1.25216,0c-0.12345,0 -0.194,0.07245 -0.194,0.19924c0,0.14491 0.07054,0.21736 0.194,0.21736l0.37036,0l0,1.57584c0,0.14491 0.08818,0.21736 0.24691,0.21736s0.24691,-0.07245 0.26454,-0.21736l0,-1.57584zm-4.62065,2.57207c-0.12345,-0.28981 -0.33509,-0.43472 -0.6349,-0.43472c-0.28218,0 -0.47617,0.16302 -0.59963,0.43472l-1.16398,2.8981l0,0.05434s-0.01764,0.10868 -0.01764,0.14491c0,0.23547 0.14109,0.32604 0.38799,0.32604c0.21163,0 0.35272,-0.07245 0.42327,-0.25358l0.17636,-0.50717l1.58725,0l0.15872,0.50717c0.07054,0.16302 0.21163,0.25358 0.42327,0.25358c0.24691,0 0.38799,-0.10868 0.38799,-0.32604c0,-0.05434 0,-0.12679 -0.03527,-0.19924l-1.11107,-2.8981l0.01764,0zm-1.16398,1.93811l0.54672,-1.53962l0.52908,1.53962s-1.0758,0 -1.0758,0zm4.03866,-2.30037l-1.02289,0c-0.26454,0 -0.40563,0.14491 -0.42327,0.4166l0,3.00678c0,0.25358 0.15872,0.38038 0.42327,0.38038s0.40563,-0.12679 0.42327,-0.38038l0,-0.86943l0.6349,0c0.89944,-0.05434 1.35798,-0.47094 1.42852,-1.26792c-0.05291,-0.79698 -0.54672,-1.21358 -1.44616,-1.26792l0,0l-0.01764,-0.01811zm-0.01764,1.82943l-0.58199,0l0,-1.12301l0.58199,0c0.37036,0 0.56435,0.19924 0.58199,0.56151c-0.03527,0.34415 -0.22927,0.52528 -0.58199,0.56151l0,0zm2.1516,-1.88377c-0.26454,0 -0.40563,0.14491 -0.42327,0.4166l0,3.04301c0,0.25358 0.15872,0.38038 0.42327,0.38038s0.40563,-0.12679 0.42327,-0.38038l0,-3.04301c0,-0.25358 -0.15872,-0.39849 -0.42327,-0.4166z"
    }, this.pathMap.SERVICE_DB_1 = {
      d: "m4.22941,21.952l1.52269,-0.07918c0.03301,0.20316 0.10076,0.35833 0.20152,0.46392c0.1659,0.17196 0.40043,0.25835 0.70705,0.25835c0.22932,0 0.40478,-0.04479 0.52812,-0.13118c0.12335,-0.08878 0.18589,-0.19116 0.18589,-0.30714c0,-0.10958 -0.05906,-0.20876 -0.1772,-0.29514c-0.11726,-0.08719 -0.39088,-0.16877 -0.8191,-0.24635c-0.70271,-0.12958 -1.20304,-0.30154 -1.50184,-0.5151c-0.30141,-0.21516 -0.45255,-0.48791 -0.45255,-0.82064c0,-0.21836 0.07644,-0.42472 0.23106,-0.61828c0.15462,-0.19436 0.38653,-0.34714 0.69663,-0.45832s0.73398,-0.16717 1.27426,-0.16717c0.66102,0 1.16655,0.10078 1.51313,0.30314c0.34745,0.20156 0.55418,0.52391 0.62106,0.96382l-1.50966,0.07199c-0.03908,-0.19116 -0.12422,-0.32954 -0.2519,-0.41672s-0.30575,-0.13037 -0.5316,-0.13037c-0.18675,0 -0.3266,0.03279 -0.42128,0.09679a0.31097,0.28634 0 0 0 -0.14071,0.23676c0,0.06719 0.03822,0.12797 0.11639,0.18156c0.0747,0.05599 0.2545,0.10798 0.53681,0.15757c0.69924,0.12318 1.20044,0.24795 1.50358,0.37433c0.30315,0.12717 0.5229,0.28314 0.66102,0.47111c0.13811,0.18796 0.20673,0.39753 0.20673,0.62868c0,0.27355 -0.09207,0.52391 -0.27535,0.75346a1.69902,1.5645 0 0 1 -0.77047,0.5231c-0.33007,0.11837 -0.74615,0.17836 -1.24733,0.17836c-0.88078,0 -1.49142,-0.13917 -1.83105,-0.41752a1.70249,1.56771 0 0 1 -0.57589,-1.0598m10.10725,0.78465c0.20065,0.11278 0.33094,0.18476 0.39262,0.21356c0.0912,0.04239 0.21542,0.09278 0.3709,0.14797l-0.44561,0.73666a5.38109,4.95507 0 0 1 -0.6645,-0.31754a5.89271,5.42618 0 0 1 -0.4595,-0.27595c-0.35353,0.12477 -0.79566,0.18716 -1.32811,0.18716c-0.78783,0 -1.40803,-0.16717 -1.86319,-0.5039c-0.53681,-0.39753 -0.80608,-0.95662 -0.80608,-1.67808c0,-0.69907 0.2354,-1.24217 0.70532,-1.62929c0.46993,-0.38793 1.1266,-0.58149 1.97003,-0.58149c0.85993,0 1.52443,0.18877 1.99174,0.5687c0.46731,0.37833 0.70184,0.91983 0.70184,1.6253c0,0.62788 -0.18849,1.13019 -0.56547,1.50691m-1.22649,-0.67268c0.12682,-0.18716 0.1911,-0.46791 0.1911,-0.84064c0,-0.42872 -0.09729,-0.73506 -0.29186,-0.91823c-0.19457,-0.18396 -0.4621,-0.27515 -0.80434,-0.27515c-0.31792,0 -0.57589,0.09359 -0.77394,0.28075c-0.19804,0.18796 -0.2962,0.48071 -0.2962,0.87824c0,0.46311 0.09555,0.78865 0.28925,0.97662c0.1937,0.18716 0.45863,0.28075 0.79566,0.28075c0.10858,0 0.21108,-0.008 0.30749,-0.02559c-0.13464,-0.10718 -0.34658,-0.20636 -0.6367,-0.30235l0.25103,-0.47111c0.14158,0.0208 0.2519,0.04719 0.33094,0.07759c0.07818,0.0304 0.23192,0.11198 0.46124,0.24395c0.05385,0.0304 0.11292,0.06239 0.17633,0.09518m2.6545,-2.95624l1.60087,0l0,3.2026l2.49815,0l0,1.04621l-4.09901,0l0,-4.2488l0,0l-0.00001,0zm-10.66665,-9.67019l19.10962,0l0,1.5997l-19.10962,0l0,-1.5997zm13.02929,-3.1994l3.47447,0l0,1.5997l-3.47447,0l0,-1.5997zm0,6.3988l3.47447,0l0,1.5997l-3.47447,0l0,-1.5997z"
    }, this.pathMap.SERVICE_DB_2 = {
      d: "m23.56012,4.22238l-18.64632,0a0.84755,0.74416 0 0 0 -0.84755,0.74416l0,12.65081l1.69512,0l0,-11.90664l16.9512,0l0,16.37163l-0.84841,0l0,1.48833l1.69596,0a0.84755,0.74416 0 0 0 0.84755,-0.74416l0,-17.85996a0.84755,0.74416 0 0 0 -0.84755,-0.74416"
    }, this.pathMap.SERVICE_DB_3 = {
      d: "m4.49867,17.06941l19.65831,0l0,-1.49066l-19.65831,0l0,1.49066z"
    }, this.pathMap.SERVICE_AI = {
      d: "M19.5764 4.0874l-.2276.5502c-.3887.9385-1.1142 1.6879-2.0259 2.0936l-.646.2874c-.3692.1645-.3692.702 0 .8666l.6838.3041c.8889.3954 1.6013 1.1183 1.9968 2.0259l.2224.5089c.1624.3728.6778.3728.8402 0l.2224-.5089c.3956-.9076 1.108-1.6305 1.9968-2.0259l.6829-.3041c.3697-.1644.3697-.7022 0-.8666l-.6451-.2874c-.9118-.4056-1.6372-1.155-2.0259-2.0936l-.2276-.5502c-.1589-.3832-.6884-.3832-.8473 0ZM7.8983 14.6 10.1 9.0963 12.3017 14.6H7.8983ZM20.9 12.8H19.1v8.1h1.8V12.8Zm-4.1396 8.1L11 6.5H9.2L3.4396 20.9H5.3785l1.8-4.5h5.843l1.8 4.5h1.9389Z"
    }, this.pathMap.SERVICE_MQTT = {
      d: "M5.134 5.009c8.231 1.112 14.745 7.626 15.857 15.857a1 1 0 01-1.982.268c-.992-7.34-6.804-13.151-14.143-14.143a1 1 0 01.268-1.982m.065 9.16a8.51 8.51 0 016.631 6.632A1 1 0 0110.85 22H5a1 1 0 01-1-1v-5.85a1 1 0 011.2-.98m-.04-4.496A13.51 13.51 0 0116.328 20.84a1 1 0 01-1.975.318A11.51 11.51 0 004.841 11.646a1 1 0 01.318-1.974M6 16.499v3.5h3.501A6.52 6.52 0 006 16.5M19.999 5a1 1 0 011 1v4.007l-.012.157a1 1 0 01-1.774.46 22.6 22.6 0 00-3.83-3.832 1 1 0 01.616-1.786z"
    }, this.pathMap.SERVICE_MCP1 = {
      d: "m21.97 13.84c.66-.66 1.02-1.53 1.02-2.46s-.36-1.8-1.02-2.46l-.04-.04c-.66-.66-1.53-1.02-2.46-1.02-.17 0-.34.03-.51.05.02-.17.05-.33.05-.51 0-.93-.36-1.8-1.02-2.46s-1.53-1.02-2.46-1.02-1.8.36-2.46 1.02L5.2 12.81c-.27.27-.27.71 0 .98s.71.27.98 0l7.87-7.87c.39-.39.92-.61 1.47-.61s1.08.22 1.47.61.61.92.61 1.48-.22 1.08-.61 1.48l-5.86 5.86-.08.08c-.27.27-.27.71 0 .98.14.14.31.2.49.2s.36-.07.49-.2l5.94-5.94c.39-.39.92-.61 1.48-.61s1.08.22 1.47.61l.04.04c.39.39.61.92.61 1.47s-.22 1.08-.61 1.48l-7.11 7.11c-.63.63-.63 1.66 0 2.29l1.46 1.46c.14.14.31.2.49.2s.36-.07.49-.2c.27-.27.27-.71 0-.98l-1.46-1.46c-.09-.09-.09-.24 0-.33l7.11-7.11Z"
    }, this.pathMap.SERVICE_MCP2 = {
      d: "m19.97 11.84-5.82 5.82c-.68.68-1.57 1.02-2.46 1.02s-1.78-.34-2.46-1.02c-1.36-1.36-1.36-3.56 0-4.92l5.82-5.82c.27-.27.71-.27.98 0 .27.27.27.71 0 .98l-5.82 5.82c-.81.81-.81 2.14 0 2.95.81.81 2.14.81 2.95 0l5.82-5.82c.27-.27.71-.27.98 0 .27.27.27.71 0 .98Z"
    };
  }
  getStaticPath(t) {
    var n;
    return ((n = this.pathMap[t]) == null ? void 0 : n.d) || "";
  }
}
const Of = {
  bpmnRenderer: ["type", Tf],
  pathMap: ["type", Af]
}, Df = {
  "Copy Service Task": "抄送任务",
  "Camel Service Task": "骆驼任务",
  "Sc Service Task": "微服务任务",
  "Dubbo Service Task": "Dubbo 任务",
  "Rest Service Task": "Rest 任务",
  "Dmn Service Task": "决策任务",
  "Decision Service Task": "决策服务",
  "Ai Service Task": "AI 任务",
  "Http Service Task": "Http 任务",
  "Web Service Task": "Web Service 任务",
  "Sql Service Task": "SQL 任务",
  "Mq Service Task": "消息任务",
  "Mqtt Service Task": "MQTT 任务",
  "Mcp Service Task": "Mcp 任务",
  "Email Service Task": "邮件任务",
  "Shell Service Task": "Shell 任务",
  "Call activity": "调用活动",
  "Sub-process": "子流程",
  "Event sub-process": "事件子流程",
  "Sub-process (collapsed)": "子流程(折叠)",
  "Sub-process (expanded)": "子流程(展开)",
  "Ad-hoc": "临时子流程",
  "Create expanded sub-process": "创建子流程(折叠)",
  "Horizontal expanded pool/participant": "水平泳道(展开)",
  "Vertical expanded pool/participant": "垂直泳道(展开)",
  "Variable start event": "参数开始事件",
  "Variable start event (non-interrupting)": "参数开始事件(非中断)",
  "Variable boundary event": "参数边界事件",
  "Variable boundary event (non-interrupting)": "参数边界事件(非中断)",
  "Variable intermediate catch event": "中间参数捕获事件",
  "Terminate end event": "终止结束事件",
  Transaction: "事务子流程",
  "Boundary event": "边界事件",
  "Expanded pool/participant": "泳道（展开）",
  "Create element": "创建元素",
  "Append element": "追加元素",
  "Create user task": "创建用户任务",
  "Append user task": "追加用户任务",
  "Append compensation service task": "追加补偿服务任务",
  "Set as the default flow": "设为默认流",
  "Add text annotation": "添加文本注释",
  "Connect to other element": "连接到其他元素",
  Gateways: "网关",
  Tasks: "任务",
  "Sub-processes": "子流程",
  Events: "事件",
  Data: "数据对象",
  Participants: "协助",
  Delete: "删除元素",
  //   token simulation
  "Simulation Log": "模拟日志",
  "No Entries": "暂无数据",
  Started: "已启动",
  Finished: "已结束",
  "Process started": "流程启动",
  "SubProcess started": "子流程启动",
  "Process finished": "流程结束",
  "SubProcess finished": "子流程结束",
  "Process canceled": "流程取消",
  "SubProcess canceled": "子流程取消",
  "Intermediate event": "中间事件",
  "Reset Simulation": "重置状态",
  "Play/Pause Simulation": "继续/暂停",
  "Play Simulation": "开始模拟",
  "Pause Simulation": "暂停模拟",
  "Toggle Simulation Log": "模拟日志",
  "Show Simulation Log": "显示日志",
  "Hide Simulation Log": "隐藏日志",
  "The high-contrast path connection represents the current flow path": "高对比色路径连线代表当前流转路径",
  Close: "关闭",
  Play: "播放",
  Pause: "暂停",
  Reset: "重置",
  Restart: "重新开始",
  "Simulation Started": "模拟已启动",
  "Simulation Paused": "模拟已暂停",
  "Simulation Reset": "模拟已重置",
  "Simulation Resumed": "模拟已恢复",
  Process: "流程",
  SubProcess: "子流程",
  started: "已启动",
  finished: "已完成",
  canceled: "已取消",
  "Start Event": "开始事件",
  "End Event": "结束事件",
  "Intermediate Event": "中间事件",
  "Boundary Event": "边界事件",
  Task: "任务",
  "User Task": "用户任务",
  "Service Task": "服务任务",
  "Send Task": "发送任务",
  "Receive Task": "接收任务",
  "Manual Task": "手动任务",
  "Script Task": "脚本任务",
  "Business Rule Task": "业务规则任务",
  "Call Activity": "调用活动",
  "Exclusive Gateway": "排他网关",
  "Parallel Gateway": "并行网关",
  "Inclusive Gateway": "包容网关",
  CC: "抄送人",
  Assignee: "分配人",
  "Assignee Users": "分配人员",
  "Assignee Groups": "分配角色",
  "Candidate Users": "候选人员",
  "Candidate Groups": "候选角色",
  Specify: "指定人",
  Candidate: "候选人",
  Starter: "发起人"
}, kl = "__flowable-designer__";
function Pf(e) {
  const t = window.localStorage.getItem(`${kl}${e}`);
  return t ? JSON.parse(t) : null;
}
function Wo(e, t) {
  window.localStorage.setItem(`${kl}${e}`, JSON.stringify(t || ""));
}
function Bf(e, t) {
  return t = t || {}, Pf("local-lang") !== "en_US" && (e = Df[e] || t0[e] || e), e.replace(/{([^}]+)}/g, function(n, i) {
    return t[i] || "{" + i + "}";
  });
}
const xf = [
  {
    translate: ["value", Bf]
  }
], If = "Flowable", $f = "http://flowable.org/bpmn", Rf = "flowable", Ff = {
  tagAlias: "lowerCase"
}, Mf = [], Nf = [
  {
    name: "Definitions",
    isAbstract: !0,
    extends: [
      "bpmn:Definitions"
    ],
    properties: [
      {
        name: "diagramRelationId",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "InOutBinding",
    superClass: [
      "Element"
    ],
    isAbstract: !0,
    properties: [
      {
        name: "source",
        isAttr: !0,
        type: "String"
      },
      {
        name: "sourceExpression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "target",
        isAttr: !0,
        type: "String"
      },
      {
        name: "businessKey",
        isAttr: !0,
        type: "String"
      },
      {
        name: "local",
        isAttr: !0,
        type: "Boolean",
        default: !1
      },
      {
        name: "variables",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "In",
    superClass: [
      "InOutBinding"
    ],
    meta: {
      allowedIn: [
        "bpmn:CallActivity",
        "bpmn:SignalEventDefinition"
      ]
    }
  },
  {
    name: "Out",
    superClass: [
      "InOutBinding"
    ],
    meta: {
      allowedIn: [
        "bpmn:CallActivity"
      ]
    }
  },
  {
    name: "AsyncCapable",
    isAbstract: !0,
    extends: [
      "bpmn:Activity",
      "bpmn:Gateway",
      "bpmn:Event"
    ],
    properties: [
      {
        name: "async",
        isAttr: !0,
        type: "Boolean",
        default: !1
      },
      {
        name: "asyncBefore",
        isAttr: !0,
        type: "Boolean",
        default: !1
      },
      {
        name: "asyncAfter",
        isAttr: !0,
        type: "Boolean",
        default: !1
      },
      {
        name: "asyncLeave",
        isAttr: !0,
        type: "Boolean",
        default: !1
      },
      {
        name: "exclusive",
        isAttr: !0,
        type: "Boolean",
        default: !0
      }
    ]
  },
  {
    name: "Scope",
    extends: [
      "bpmn:Signal"
    ],
    properties: [
      {
        name: "scope",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "ErrorEventDefinitionExtension",
    isAbstract: !0,
    extends: [
      "bpmn:ErrorEventDefinition"
    ],
    properties: [
      {
        name: "errorCodeVariable",
        isAttr: !0,
        type: "String"
      },
      {
        name: "errorMessageVariable",
        isAttr: !0,
        type: "String"
      },
      {
        name: "errorVariableLocalScope",
        isAttr: !0,
        type: "Boolean"
      },
      {
        name: "errorVariableTransient",
        isAttr: !0,
        type: "Boolean"
      }
    ]
  },
  {
    name: "ErrorEventDefinition",
    superClass: [
      "bpmn:ErrorEventDefinition",
      "Element"
    ],
    properties: [
      {
        name: "expression",
        isAttr: !0,
        type: "String"
      }
    ],
    meta: {
      allowedIn: [
        "bpmn:ServiceTask"
      ]
    }
  },
  {
    name: "Error",
    isAbstract: !0,
    extends: [
      "bpmn:Error"
    ],
    properties: [
      {
        name: "flowable:errorMessage",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "FormSupported",
    isAbstract: !0,
    extends: [
      "bpmn:StartEvent",
      "bpmn:UserTask"
    ],
    properties: [
      {
        name: "formKey",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "Initiator",
    isAbstract: !0,
    extends: [
      "bpmn:StartEvent"
    ],
    properties: [
      {
        name: "initiator",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "ScriptTask",
    isAbstract: !0,
    extends: [
      "bpmn:ScriptTask"
    ],
    properties: [
      {
        name: "resultVariable",
        isAttr: !0,
        type: "String"
      },
      {
        name: "autoStoreVariables",
        isAttr: !0,
        type: "Boolean"
      },
      {
        name: "resource",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "Process",
    isAbstract: !0,
    extends: [
      "bpmn:Process"
    ],
    properties: [
      {
        name: "candidateStarterGroups",
        isAttr: !0,
        type: "String"
      },
      {
        name: "candidateStarterUsers",
        isAttr: !0,
        type: "String"
      },
      {
        name: "isEagerExecutionFetching",
        isAttr: !0,
        type: "Boolean",
        default: !1
      }
    ]
  },
  {
    name: "FormalExpression",
    isAbstract: !0,
    extends: [
      "bpmn:FormalExpression"
    ],
    properties: [
      {
        name: "resource",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "Assignable",
    extends: [
      "bpmn:UserTask"
    ],
    properties: [
      {
        name: "assignee",
        isAttr: !0,
        type: "String"
      },
      {
        name: "candidateUsers",
        isAttr: !0,
        type: "String"
      },
      {
        name: "candidateGroups",
        isAttr: !0,
        type: "String"
      },
      {
        name: "dueDate",
        isAttr: !0,
        type: "String"
      },
      {
        name: "businessCalendarName",
        isAttr: !0,
        type: "String"
      },
      {
        name: "expireMsgType",
        isAttr: !0,
        type: "String"
      },
      {
        name: "expireMsgReceiver",
        isAttr: !0,
        type: "String"
      },
      {
        name: "intervalHours",
        isAttr: !0,
        type: "String"
      },
      {
        name: "maxTimes",
        isAttr: !0,
        type: "String"
      },
      {
        name: "priority",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "CallActivity",
    extends: [
      "bpmn:CallActivity"
    ],
    properties: [
      {
        name: "inheritVariables",
        isAttr: !0,
        type: "Boolean"
      },
      {
        name: "calledElementType",
        isAttr: !0,
        type: "String"
      },
      {
        name: "processInstanceName",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "ServiceTaskLike",
    extends: [
      "bpmn:ServiceTask",
      "bpmn:BusinessRuleTask",
      "bpmn:SendTask",
      "bpmn:MessageEventDefinition"
    ],
    properties: [
      {
        name: "expression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "class",
        isAttr: !0,
        type: "String"
      },
      {
        name: "delegateExpression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "resultVariable",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "DmnCapable",
    extends: [
      "bpmn:BusinessRuleTask"
    ],
    properties: [
      {
        name: "decisionRef",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "ExternalCapable",
    extends: [
      "flowable:ServiceTaskLike"
    ],
    properties: [
      {
        name: "type",
        isAttr: !0,
        type: "String"
      },
      {
        name: "topic",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "TaskPriorized",
    extends: [
      "bpmn:Process",
      "flowable:ExternalCapable"
    ],
    properties: [
      {
        name: "taskPriority",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "Properties",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "*"
      ]
    },
    properties: [
      {
        name: "values",
        type: "Property",
        isMany: !0
      }
    ]
  },
  {
    name: "Property",
    superClass: [
      "Element"
    ],
    properties: [
      {
        name: "id",
        type: "String",
        isAttr: !0
      },
      {
        name: "name",
        type: "String",
        isAttr: !0
      },
      {
        name: "value",
        type: "String",
        isAttr: !0
      }
    ]
  },
  {
    name: "Connector",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "flowable:ServiceTaskLike"
      ]
    },
    properties: [
      {
        name: "inputOutput",
        type: "InputOutput"
      },
      {
        name: "connectorId",
        type: "String"
      }
    ]
  },
  {
    name: "InputOutput",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:FlowNode",
        "flowable:Connector"
      ]
    },
    properties: [
      {
        name: "inputOutput",
        type: "InputOutput"
      },
      {
        name: "connectorId",
        type: "String"
      },
      {
        name: "inputParameters",
        isMany: !0,
        type: "InputParameter"
      },
      {
        name: "outputParameters",
        isMany: !0,
        type: "OutputParameter"
      }
    ]
  },
  {
    name: "InputOutputParameter",
    properties: [
      {
        name: "name",
        isAttr: !0,
        type: "String"
      },
      {
        name: "value",
        isBody: !0,
        type: "String"
      },
      {
        name: "definition",
        type: "InputOutputParameterDefinition"
      }
    ]
  },
  {
    name: "InputOutputParameterDefinition",
    isAbstract: !0
  },
  {
    name: "List",
    superClass: [
      "InputOutputParameterDefinition"
    ],
    properties: [
      {
        name: "items",
        isMany: !0,
        type: "InputOutputParameterDefinition"
      }
    ]
  },
  {
    name: "Map",
    superClass: [
      "InputOutputParameterDefinition"
    ],
    properties: [
      {
        name: "entries",
        isMany: !0,
        type: "Entry"
      }
    ]
  },
  {
    name: "Entry",
    properties: [
      {
        name: "key",
        isAttr: !0,
        type: "String"
      },
      {
        name: "value",
        isBody: !0,
        type: "String"
      },
      {
        name: "definition",
        type: "InputOutputParameterDefinition"
      }
    ]
  },
  {
    name: "Value",
    superClass: [
      "Element"
    ],
    properties: [
      {
        name: "id",
        isAttr: !0,
        type: "String"
      },
      {
        name: "name",
        isAttr: !0,
        type: "String"
      },
      {
        name: "value",
        isBody: !0,
        type: "String"
      }
    ]
  },
  {
    name: "Script",
    superClass: [
      "InputOutputParameterDefinition"
    ],
    properties: [
      {
        name: "scriptFormat",
        isAttr: !0,
        type: "String"
      },
      {
        name: "resource",
        isAttr: !0,
        type: "String"
      },
      {
        name: "value",
        isBody: !0,
        type: "String"
      }
    ]
  },
  {
    name: "Field",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "flowable:ServiceTaskLike",
        "flowable:ExecutionListener",
        "flowable:TaskListener"
      ]
    },
    properties: [
      {
        name: "name",
        isAttr: !0,
        type: "String"
      },
      {
        name: "expression",
        type: "String"
      },
      {
        name: "stringValue",
        isAttr: !0,
        type: "String"
      },
      {
        name: "string",
        type: "String"
      }
    ]
  },
  {
    name: "InputParameter",
    superClass: [
      "InputOutputParameter"
    ]
  },
  {
    name: "OutputParameter",
    superClass: [
      "InputOutputParameter"
    ]
  },
  {
    name: "Collectable",
    isAbstract: !0,
    extends: [
      "bpmn:MultiInstanceLoopCharacteristics"
    ],
    superClass: [
      "flowable:AsyncCapable"
    ],
    properties: [
      {
        name: "collection",
        isAttr: !0,
        type: "String"
      },
      {
        name: "elementVariable",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "FailedJobRetryTimeCycle",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "flowable:AsyncCapable",
        "bpmn:MultiInstanceLoopCharacteristics"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "String"
      }
    ]
  },
  {
    name: "ExecutionListener",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:Task",
        "bpmn:ServiceTask",
        "bpmn:UserTask",
        "bpmn:BusinessRuleTask",
        "bpmn:ScriptTask",
        "bpmn:ReceiveTask",
        "bpmn:ManualTask",
        "bpmn:ExclusiveGateway",
        "bpmn:SequenceFlow",
        "bpmn:ParallelGateway",
        "bpmn:InclusiveGateway",
        "bpmn:EventBasedGateway",
        "bpmn:StartEvent",
        "bpmn:IntermediateCatchEvent",
        "bpmn:IntermediateThrowEvent",
        "bpmn:EndEvent",
        "bpmn:BoundaryEvent",
        "bpmn:CallActivity",
        "bpmn:SubProcess",
        "bpmn:Process"
      ]
    },
    properties: [
      {
        name: "expression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "class",
        isAttr: !0,
        type: "String"
      },
      {
        name: "delegateExpression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "onTransaction",
        isAttr: !0,
        type: "String"
      },
      {
        name: "event",
        isAttr: !0,
        type: "String"
      },
      {
        name: "script",
        type: "Script"
      },
      {
        name: "fields",
        type: "Field",
        isMany: !0
      }
    ]
  },
  {
    name: "TaskListener",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "expression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "class",
        isAttr: !0,
        type: "String"
      },
      {
        name: "delegateExpression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "event",
        isAttr: !0,
        type: "String"
      },
      {
        name: "script",
        type: "Script"
      },
      {
        name: "fields",
        type: "Field",
        isMany: !0
      },
      {
        name: "id",
        type: "String",
        isAttr: !0
      },
      {
        name: "eventDefinitions",
        type: "bpmn:TimerEventDefinition",
        isMany: !0
      }
    ]
  },
  {
    name: "EventListener",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:Process"
      ]
    },
    properties: [
      {
        name: "events",
        isAttr: !0,
        type: "String"
      },
      {
        name: "expression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "class",
        isAttr: !0,
        type: "String"
      },
      {
        name: "delegateExpression",
        isAttr: !0,
        type: "String"
      },
      {
        name: "throwEvent",
        isAttr: !0,
        type: "String"
      },
      {
        name: "entityType",
        isAttr: !0,
        type: "String"
      },
      {
        name: "signalName",
        isAttr: !0,
        type: "String"
      },
      {
        name: "errorCode",
        isAttr: !0,
        type: "String"
      },
      {
        name: "messageName",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "FormProperty",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:StartEvent",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "id",
        type: "String",
        isAttr: !0
      },
      {
        name: "name",
        type: "String",
        isAttr: !0
      },
      {
        name: "type",
        type: "String",
        isAttr: !0
      },
      {
        name: "required",
        type: "String",
        isAttr: !0
      },
      {
        name: "readable",
        type: "String",
        isAttr: !0
      },
      {
        name: "writable",
        type: "String",
        isAttr: !0
      },
      {
        name: "variable",
        type: "String",
        isAttr: !0
      },
      {
        name: "expression",
        type: "String",
        isAttr: !0
      },
      {
        name: "datePattern",
        type: "String",
        isAttr: !0
      },
      {
        name: "default",
        type: "String",
        isAttr: !0
      },
      {
        name: "values",
        type: "Value",
        isMany: !0
      }
    ]
  },
  {
    name: "FormData",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:StartEvent",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "fields",
        type: "FormField",
        isMany: !0
      },
      {
        name: "businessKey",
        type: "String",
        isAttr: !0
      }
    ]
  },
  {
    name: "FormField",
    superClass: [
      "Element"
    ],
    properties: [
      {
        name: "id",
        type: "String",
        isAttr: !0
      },
      {
        name: "label",
        type: "String",
        isAttr: !0
      },
      {
        name: "type",
        type: "String",
        isAttr: !0
      },
      {
        name: "datePattern",
        type: "String",
        isAttr: !0
      },
      {
        name: "defaultValue",
        type: "String",
        isAttr: !0
      },
      {
        name: "properties",
        type: "Properties"
      },
      {
        name: "validation",
        type: "Validation"
      },
      {
        name: "values",
        type: "Value",
        isMany: !0
      }
    ]
  },
  {
    name: "Validation",
    superClass: [
      "Element"
    ],
    properties: [
      {
        name: "constraints",
        type: "Constraint",
        isMany: !0
      }
    ]
  },
  {
    name: "Constraint",
    superClass: [
      "Element"
    ],
    properties: [
      {
        name: "name",
        type: "String",
        isAttr: !0
      },
      {
        name: "config",
        type: "String",
        isAttr: !0
      }
    ]
  },
  {
    name: "ConditionalEventDefinitionExtension",
    isAbstract: !0,
    extends: [
      "bpmn:ConditionalEventDefinition"
    ],
    properties: [
      {
        name: "variableName",
        isAttr: !0,
        type: "String"
      },
      {
        name: "variableEvents",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "AssigneeType",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "MultiCompletionCondition",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:Activity"
      ]
    },
    properties: [
      {
        name: "type",
        type: "String",
        isAttr: !0
      },
      {
        name: "conditionType",
        type: "String",
        isAttr: !0
      },
      {
        name: "num",
        type: "Number",
        isAttr: !0
      },
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "IdmAssignee",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "IdmCandidateUsers",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask",
        "bpmn:Process"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "IdmCandidateGroups",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask",
        "bpmn:Process"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "NextSequenceFlow",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "NextUser",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "ModelBpmnExtension",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "ProcessNameExp",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:Process"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "Localization",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "*"
      ]
    },
    properties: [
      {
        name: "locale",
        type: "String",
        isAttr: !0
      },
      {
        name: "name",
        type: "String",
        isAttr: !0
      }
    ]
  },
  {
    name: "NodeFormExp",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:Event",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "NodeFormType",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:Event",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "StaticAssigneeVariables",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:Event",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "MultiInstanceVariables",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "*"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "ServiceTask",
    extends: [
      "bpmn:ServiceTask"
    ],
    properties: [
      {
        name: "parallelInSameTransaction",
        type: "Boolean",
        isAttr: !0
      }
    ]
  },
  {
    name: "TimeDate",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:BoundaryEvent",
        "bpmn:TimerEventDefinition",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "String"
      }
    ]
  },
  {
    name: "BoundaryEvent",
    extends: [
      "bpmn:BoundaryEvent"
    ],
    properties: [
      {
        name: "timerEventDefinition",
        isBody: !0,
        type: "flowable:TimerEventDefinition"
      },
      {
        name: "cancelActivity",
        isAttr: !0,
        type: "Boolean",
        redefines: "bpmn:BoundaryEvent#cancelActivity"
      }
    ]
  },
  {
    name: "TimerEventDefinition",
    superClass: [
      "TimerEventDefinition"
    ],
    meta: {
      allowedIn: [
        "bpmn:BoundaryEvent",
        "bpmn:TimerEventDefinition",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "String"
      },
      {
        name: "businessCalendarName",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "TimeDuration",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:BoundaryEvent",
        "bpmn:TimerEventDefinition",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "String"
      }
    ]
  },
  {
    name: "TimeCycle",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:BoundaryEvent",
        "bpmn:TimerEventDefinition",
        "flowable:endDate",
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "String"
      },
      {
        name: "endDate",
        isAttr: !0,
        type: "String"
      }
    ]
  },
  {
    name: "SkipUserTask",
    extends: [
      "bpmn:UserTask"
    ],
    properties: [
      {
        name: "skipExpression",
        type: "String",
        isAttr: !0
      }
    ]
  },
  {
    name: "TransferToUsers",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:ServiceTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "AuthPoint",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "bpmn:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        type: "String",
        isBody: !0
      }
    ]
  },
  {
    name: "FormFieldValidation",
    extends: [
      "bpmn:UserTask",
      "bpmn:StartEvent"
    ],
    properties: [
      {
        name: "formFieldValidation",
        type: "String",
        isAttr: !0
      }
    ]
  },
  {
    name: "DataObject",
    extends: [
      "bpmn:DataObject"
    ],
    meta: {
      allowedIn: [
        "bpmn:Process",
        "bpmn:SubProcess"
      ]
    },
    properties: [
      {
        name: "itemSubjectRef",
        type: "String",
        isAttr: !0,
        redefines: "bpmn:DataObject#itemSubjectRef"
      }
    ]
  },
  {
    name: "InterruptingStartEvent",
    extends: [
      "bpmn:StartEvent"
    ],
    properties: [
      {
        name: "isInterrupting",
        isAttr: !0,
        type: "Boolean",
        redefines: "bpmn:StartEvent#isInterrupting"
      }
    ]
  },
  {
    name: "VariableListenerEventDefinition",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "*"
      ]
    },
    properties: [
      {
        name: "variableName",
        type: "String",
        isAttr: !0
      },
      {
        name: "variableChangeType",
        type: "String",
        isAttr: !0
      }
    ]
  },
  {
    name: "TerminateEventDefinition",
    extends: [
      "bpmn:TerminateEventDefinition"
    ],
    properties: [
      {
        name: "terminateAll",
        isAttr: !0,
        type: "Boolean"
      }
    ]
  },
  {
    name: "AdHoc",
    extends: [
      "bpmn:AdHocSubProcess"
    ],
    properties: [
      {
        name: "cancelRemainingInstances",
        isAttr: !0,
        type: "Boolean",
        redefines: "bpmn:AdHocSubProcess#cancelRemainingInstances"
      }
    ]
  },
  {
    name: "MaxTimes",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "flowable:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "Number"
      }
    ]
  },
  {
    name: "IntervalHours",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "flowable:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "Number"
      }
    ]
  },
  {
    name: "ExpireMsgType",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "flowable:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "String"
      }
    ]
  },
  {
    name: "OperateType",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "flowable:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "String"
      }
    ]
  },
  {
    name: "ExpireMsgReceiver",
    superClass: [
      "Element"
    ],
    meta: {
      allowedIn: [
        "flowable:UserTask"
      ]
    },
    properties: [
      {
        name: "body",
        isBody: !0,
        type: "String"
      }
    ]
  }
], Lf = [], Tl = {
  name: If,
  uri: $f,
  prefix: Rf,
  xml: Ff,
  associations: Mf,
  types: Nf,
  emumerations: Lf
}, Al = [Of, xf, n0], De = {
  legend: [1, "<fieldset>", "</fieldset>"],
  tr: [2, "<table><tbody>", "</tbody></table>"],
  col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
  _default: [0, "", ""]
};
De.td = De.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
De.option = De.optgroup = [1, '<select multiple="multiple">', "</select>"];
De.thead = De.tbody = De.colgroup = De.caption = De.tfoot = [1, "<table>", "</table>"];
De.polyline = De.ellipse = De.polygon = De.circle = De.text = De.line = De.path = De.rect = De.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"];
function rt(e, t = globalThis.document) {
  var d;
  if (typeof e != "string")
    throw new TypeError("String expected");
  const n = /^<!--(.*?)-->$/s.exec(e);
  if (n)
    return t.createComment(n[1]);
  const i = (d = /<([\w:]+)/.exec(e)) == null ? void 0 : d[1];
  if (!i)
    return t.createTextNode(e);
  if (e = e.trim(), i === "body") {
    const c = t.createElement("html");
    c.innerHTML = e;
    const { lastChild: u } = c;
    return u.remove(), u;
  }
  let [r, o, s] = Object.hasOwn(De, i) ? De[i] : De._default, a = t.createElement("div");
  for (a.innerHTML = o + e + s; r--; )
    a = a.lastChild;
  if (a.firstChild === a.lastChild) {
    const { firstChild: c } = a;
    return c.remove(), c;
  }
  const l = t.createDocumentFragment();
  return l.append(...a.childNodes), l;
}
function jf(e, t) {
  return t.forEach(function(n) {
    n && typeof n != "string" && !Array.isArray(n) && Object.keys(n).forEach(function(i) {
      if (i !== "default" && !(i in e)) {
        var r = Object.getOwnPropertyDescriptor(n, i);
        Object.defineProperty(e, i, r.get ? r : {
          enumerable: !0,
          get: function() {
            return n[i];
          }
        });
      }
    });
  }), Object.freeze(e);
}
const zf = Object.prototype.toString;
function fe(e) {
  return new zt(e);
}
function zt(e) {
  if (!e || !e.nodeType)
    throw new Error("A DOM element reference is required");
  this.el = e, this.list = e.classList;
}
zt.prototype.add = function(e) {
  return this.list.add(e), this;
};
zt.prototype.remove = function(e) {
  return zf.call(e) == "[object RegExp]" ? this.removeMatching(e) : (this.list.remove(e), this);
};
zt.prototype.removeMatching = function(e) {
  const t = this.array();
  for (let n = 0; n < t.length; n++)
    e.test(t[n]) && this.remove(t[n]);
  return this;
};
zt.prototype.toggle = function(e, t) {
  return typeof t < "u" ? t !== this.list.toggle(e, t) && this.list.toggle(e) : this.list.toggle(e), this;
};
zt.prototype.array = function() {
  return Array.from(this.list);
};
zt.prototype.has = zt.prototype.contains = function(e) {
  return this.list.contains(e);
};
function Vf(e) {
  for (var t; t = e.firstChild; )
    e.removeChild(t);
  return e;
}
function Uf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bi = {}, Ls;
function Hf() {
  if (Ls) return Bi;
  Ls = 1;
  var e, t, n;
  function i() {
    e = window.addEventListener ? "addEventListener" : "attachEvent", t = window.removeEventListener ? "removeEventListener" : "detachEvent", n = e !== "addEventListener" ? "on" : "";
  }
  return Bi.bind = function(r, o, s, a) {
    return e || i(), r[e](n + o, s, a || !1), s;
  }, Bi.unbind = function(r, o, s, a) {
    return t || i(), r[t](n + o, s, a || !1), s;
  }, Bi;
}
var Ol = Hf(), qf = /* @__PURE__ */ Uf(Ol), kt = /* @__PURE__ */ jf({
  __proto__: null,
  default: qf
}, [Ol]);
function We(e, t) {
  return t = t || document, t.querySelector(e);
}
function Dl(e, t) {
  return t = t || document, t.querySelectorAll(e);
}
const Ye = "tokenSimulation.toggleMode", or = "tokenSimulation.playSimulation", Go = "tokenSimulation.pauseSimulation", ut = "tokenSimulation.resetSimulation", Wf = "tokenSimulation.animationCreated", wo = "tokenSimulation.simulator.elementChanged", At = "tokenSimulation.simulator.destroyScope", Ko = "tokenSimulation.simulator.scopeChanged", hn = "tokenSimulation.simulator.createScope", yr = "tokenSimulation.scopeFilterChanged", br = "tokenSimulation.simulator.trace", jn = "tokenSimulation.simulator.tick", Gf = "tokenSimulation.simulator.configChanged", Pl = "tokenSimulation.simulator.reset", Bl = "tokenSimulation.simulationFinished";
class xl {
  constructor(t, n) {
    b(this, "_active", !1);
    b(this, "_canvasParent");
    this._eventBus = t, this._canvas = n, this._eventBus.on("diagram.init", () => {
      this._canvasParent = this._canvas.getContainer().parentNode;
    }), this._eventBus.on("import.parse.start", () => {
      this._active && (this.toggleMode(!1), this._eventBus.once("import.done", () => {
        this.toggleMode(!0);
      }));
    });
  }
  toggleMode(t = !this._active) {
    t !== this._active && (this._canvasParent && (t ? fe(this._canvasParent).add("simulation") : fe(this._canvasParent).remove("simulation")), this._eventBus.fire(Ye, {
      active: t
    }), this._active = t);
  }
}
b(xl, "$inject", ["eventBus", "canvas"]);
const Kf = {
  __init__: ["toggleMode"],
  toggleMode: ["type", xl]
}, Yo = 1, Il = 2, $l = 4, Rl = 8, Yf = 16, Xf = 32, Jf = 64, Zf = 128, Qf = 256, ep = 512, tp = Yo | Il | $l, np = Yo | Rl, ce = Object.freeze({
  ACTIVATED: Yo,
  RUNNING: Il,
  ENDING: $l,
  ENDED: Rl,
  DESTROYED: Yf,
  FAILED: Xf,
  TERMINATED: Jf,
  CANCELED: Zf,
  COMPLETED: Qf,
  COMPENSABLE: ep,
  ACTIVE: tp,
  NOT_DEAD: np
}), hi = {};
function Kt(e, t) {
  throw new Error(`illegal transition: ${e.name} -> ${t}`);
}
function Yt(e, t) {
  return e === hi ? t : e;
}
class tt {
  constructor(t, n, i = {}) {
    b(this, "name");
    b(this, "traits");
    b(this, "_start");
    b(this, "_compensable");
    b(this, "_cancel");
    b(this, "_complete");
    b(this, "_destroy");
    b(this, "_fail");
    b(this, "_terminate");
    this.name = t, this.traits = n, this.setTransitions(i);
  }
  setTransitions({
    start: t,
    cancel: n,
    complete: i,
    destroy: r,
    fail: o,
    terminate: s,
    compensable: a
  }) {
    this._start = Yt(t, this), this._compensable = Yt(a, this), this._cancel = Yt(n, this), this._complete = Yt(i, this), this._destroy = Yt(r, this), this._fail = Yt(o, this), this._terminate = Yt(s, this);
  }
  hasTrait(t) {
    return (this.traits & t) !== 0;
  }
  complete() {
    return this._complete || Kt(this, "complete");
  }
  destroy() {
    return this._destroy || Kt(this, "destroy");
  }
  cancel() {
    return this._cancel || Kt(this, "cancel");
  }
  fail() {
    return this._fail || Kt(this, "fail");
  }
  terminate() {
    return this._terminate || Kt(this, "terminate");
  }
  compensable() {
    return this._compensable || Kt(this, "compensable");
  }
  start() {
    return this._start || Kt(this, "start");
  }
}
const Er = new tt("failed", ce.DESTROYED | ce.FAILED), wr = new tt(
  "terminated",
  ce.DESTROYED | ce.TERMINATED | ce.COMPLETED
), Xo = new tt("completed", ce.DESTROYED | ce.COMPLETED), Ht = new tt(
  "terminating",
  ce.ENDING | ce.TERMINATED | ce.COMPLETED,
  {
    destroy: wr
  }
), In = new tt(
  "canceling",
  ce.ENDING | ce.FAILED | ce.CANCELED,
  {
    destroy: Er,
    complete: hi,
    terminate: Ht
  }
), Jo = new tt("completing", ce.ENDING | ce.COMPLETED, {
  destroy: Xo,
  cancel: In,
  terminate: Ht
}), Fl = new tt("failing", ce.ENDING | ce.FAILED, {
  cancel: In,
  complete: Jo,
  destroy: Er,
  terminate: Ht
}), Zo = new tt(
  "compensable:completed",
  ce.ENDED | ce.COMPLETED
), Ml = new tt(
  "compensable:completing",
  ce.ENDING | ce.COMPLETED,
  {
    destroy: Zo,
    terminate: Ht,
    compensable: hi
  }
), Nl = new tt(
  "compensable:failing",
  ce.ENDING | ce.FAILED,
  {
    complete: Ml,
    terminate: Ht,
    destroy: Er
  }
);
Zo.setTransitions({
  cancel: In,
  fail: Nl,
  destroy: Xo,
  compensable: hi
});
const ip = new tt(
  "compensable:running",
  ce.RUNNING | ce.COMPENSABLE,
  {
    cancel: In,
    complete: Ml,
    compensable: hi,
    destroy: Zo,
    fail: Nl,
    terminate: Ht
  }
), Ll = new tt("running", ce.RUNNING, {
  cancel: In,
  complete: Jo,
  compensable: ip,
  destroy: wr,
  fail: Fl,
  terminate: Ht
}), rp = new tt("activated", ce.ACTIVATED, {
  start: Ll,
  destroy: wr
}), op = Object.freeze({
  ACTIVATED: rp,
  RUNNING: Ll,
  CANCELING: In,
  COMPLETING: Jo,
  COMPLETED: Xo,
  FAILING: Fl,
  FAILED: Er,
  TERMINATING: Ht,
  TERMINATED: wr
});
class sp {
  /**
   * @param {string} id - 唯一标识符
   * @param {any} element - 对应的 BPMN 元素
   * @param {Scope} [parent=null] - 父作用域
   * @param {Scope} [initiator=null] - 发起者作用域
   */
  constructor(t, n, i = null, r = null) {
    b(this, "id");
    b(this, "element");
    b(this, "parent");
    b(this, "initiator");
    b(this, "subscriptions");
    b(this, "children");
    b(this, "state");
    // 这些属性在特定状态转换时会被设置 (Set during transitions)
    b(this, "failInitiator");
    b(this, "cancelInitiator");
    b(this, "terminateInitiator");
    b(this, "destroyInitiator");
    this.id = t, this.element = n, this.parent = i, this.initiator = r, this.subscriptions = /* @__PURE__ */ new Set(), this.children = [], this.state = op.ACTIVATED;
  }
  /**
   * 是否正在运行
   * (Is the scope running)
   */
  get running() {
    return this.hasTrait(ce.RUNNING);
  }
  /**
   * 是否已销毁
   * (Is the scope destroyed)
   */
  get destroyed() {
    return this.hasTrait(ce.DESTROYED);
  }
  /**
   * 是否已完成
   * (Is the scope completed)
   */
  get completed() {
    return this.hasTrait(ce.COMPLETED);
  }
  /**
   * 是否已取消
   * (Is the scope canceled)
   */
  get canceled() {
    return this.hasTrait(ce.CANCELED);
  }
  /**
   * 是否已失败
   * (Is the scope failed)
   */
  get failed() {
    return this.hasTrait(ce.FAILED);
  }
  /**
   * 是否处于活跃状态
   * (Is the scope active)
   */
  get active() {
    return this.hasTrait(ce.ACTIVE);
  }
  /**
   * 检查是否具有某个特征
   * (Check if has trait)
   *
   * @param {number} trait
   * @return {boolean}
   */
  hasTrait(t) {
    return this.state.hasTrait(t);
  }
  /**
   * 启动作用域
   * (Start the scope)
   *
   * @return {Scope}
   */
  start() {
    return this.state = this.state.start(), this;
  }
  /**
   * 使该作用域可被补偿
   * (Make this scope compensable)
   *
   * @return {Scope}
   */
  compensable() {
    return this.state = this.state.compensable(), this;
  }
  /**
   * @param {Scope | null} initiator
   *
   * @return {Scope}
   */
  fail(t) {
    return this.failed || (this.state = this.state.fail(), this.failInitiator = t), this;
  }
  cancel(t) {
    return this.canceled || (this.state = this.state.cancel(), this.cancelInitiator = t), this;
  }
  /**
   * 终止作用域
   * (Terminate the scope)
   *
   * @param {Scope | null} initiator
   *
   * @return {Scope}
   */
  terminate(t) {
    return this.state = this.state.terminate(), this.terminateInitiator = t, this;
  }
  /**
   * 完成作用域
   * (Complete the scope)
   *
   * @return {Scope}
   */
  complete() {
    return this.state = this.state.complete(), this;
  }
  /**
   * 销毁作用域
   * (Destroy the scope)
   *
   * @param {Scope | null} initiator
   *
   * @return {Scope}
   */
  destroy(t) {
    return this.state = this.state.destroy(), this.destroyInitiator = t, this;
  }
  /**
   * 获取子 Token 数量
   * (Get number of child tokens)
   *
   * @return {number}
   */
  getTokens() {
    return this.children.filter((t) => !t.destroyed).length;
  }
  /**
   * 获取指定元素的子 Token 数量
   * (Get number of child tokens by element)
   *
   * @param {any} element
   *
   * @return {number}
   */
  getTokensByElement(t) {
    return this.children.filter((n) => !n.destroyed && n.element === t).length;
  }
}
function En(e, t) {
  const n = [];
  for (const i of e)
    t(i) && n.push(i);
  return n;
}
function js(e, t) {
  for (const n of e)
    if (t(n))
      return n;
  return null;
}
function So(e, t) {
  const n = ["type", "name", "iref"].every((r) => !(r in e) || e[r] === t[r]), i = !t.ref && (t.type === "error" || t.type === "escalation");
  return n && (i || jl(e, t));
}
function jl(e, t) {
  const n = "ref";
  return !(n in e) || e[n] === t[n];
}
function Xn(e) {
  return e.filter((t) => D(t, "bpmn:SequenceFlow"));
}
function Wr(e) {
  return D(e, "bpmn:MessageFlow");
}
function Qt(e) {
  return D(e, "bpmn:SequenceFlow");
}
function Qo(e) {
  return es(e) && Sr(e, "bpmn:LinkEventDefinition");
}
function ap(e) {
  return D(e, "bpmn:IntermediateThrowEvent") && Sr(e, "bpmn:LinkEventDefinition");
}
function sr(e) {
  return es(e) && Sr(e, "bpmn:CompensateEventDefinition");
}
function zl(e) {
  return D(e, "bpmn:Activity") && $e(e).isForCompensation;
}
function es(e) {
  return (D(e, "bpmn:CatchEvent") || D(e, "bpmn:ReceiveTask")) && !mi(e);
}
function xi(e) {
  return D(e, "bpmn:BoundaryEvent") && !mi(e);
}
function Vl(e) {
  return jt(e) && !Sr(e);
}
function ar(e) {
  return !(mi(e) || !en(e, [
    "bpmn:Activity",
    "bpmn:IntermediateCatchEvent",
    "bpmn:IntermediateThrowEvent",
    "bpmn:Gateway",
    "bpmn:EndEvent"
  ]) || Qo(e) || e.incoming.find(Qt) || zl(e) || Vt(e));
}
function jt(e) {
  return D(e, "bpmn:StartEvent") && !mi(e);
}
function mi(e) {
  return !!e.labelTarget;
}
function Vt(e) {
  return $e(e).triggeredByEvent;
}
function Ul(e) {
  return D(e, "bpmn:StartEvent") && $e(e).isInterrupting || D(e, "bpmn:BoundaryEvent") && $e(e).cancelActivity;
}
function en(e, t) {
  return t.some((n) => D(e, n));
}
function Sr(e, t) {
  return hf($e(e).eventDefinitions, (n) => t ? D(n, t) : !0);
}
function rn(e, t) {
  if (e.children && e.children.length !== 0)
    return e.children;
  if (D(e, "bpmn:SubProcess") && !e.di.isExpanded) {
    const n = i0(e);
    if (!n)
      return [];
    const i = t.get(n);
    return i ? i.children : [];
  }
  return [];
}
class lp {
  signal(t) {
    console.log("ignored #signal", t.element);
  }
  exit(t) {
    console.log("ignored #exit", t.element);
  }
  enter(t) {
    console.log("ignored #enter", t.element);
  }
}
class Hl {
  constructor(t, n, i) {
    b(this, "ids");
    b(this, "configuration", {});
    b(this, "behaviors", {});
    b(this, "noopBehavior", new lp());
    b(this, "changedElements", /* @__PURE__ */ new Set());
    b(this, "jobs", []);
    b(this, "scopes", /* @__PURE__ */ new Set());
    b(this, "subscriptions", /* @__PURE__ */ new Set());
    b(this, "_injector");
    this.injector = t, this.eventBus = n, this.elementRegistry = i, this.ids = t.get("scopeIds", !1) || new Pt([32, 36]), this._injector = t, this.on(jn, () => {
      for (const r of this.changedElements)
        this.emit(wo, {
          element: r
        });
      this.changedElements.clear();
    });
  }
  /**
   * 将任务加入队列
   */
  queue(t, n) {
    if (this.jobs.push([n, t]), this.jobs.length !== 1)
      return;
    let i;
    for (; i = this.jobs[0]; ) {
      const [r, o] = i;
      o.destroyed || r(), this.jobs.shift();
    }
    this.emit(jn);
  }
  getBehavior(t) {
    return this.behaviors[t.type] || this.noopBehavior;
  }
  /**
   * 发送信号以推进流程
   */
  signal(t) {
    const {
      element: n,
      parentScope: i,
      initiator: r = null,
      scope: o = this.initializeScope({
        element: n,
        parent: i,
        initiator: r
      })
    } = t;
    return this.queue(o, () => {
      o.running || o.start(), this.trace("signal", {
        ...t,
        scope: o
      }), this.getBehavior(n).signal({
        ...t,
        scope: o
      }), o.parent && this.scopeChanged(o.parent);
    }), o;
  }
  /**
   * 进入某个元素 (激活)
   */
  enter(t) {
    const { element: n, scope: i, initiator: r = i } = t, o = this.initializeScope({
      element: n,
      parent: i || null,
      initiator: r || null
    });
    return this.queue(o, () => {
      o.running || o.start(), this.trace("enter", t), this.getBehavior(n).enter({
        ...t,
        initiator: r,
        scope: o
      }), o.parent && this.scopeChanged(o.parent);
    }), o;
  }
  /**
   * 离开某个元素 (完成)
   */
  exit(t) {
    const { element: n, scope: i, initiator: r = i } = t;
    i && this.queue(i, () => {
      this.trace("exit", t), this.getBehavior(n).exit({
        ...t,
        initiator: r
      }), i.running && i.complete(), this.destroyScope(i, r || null), i.parent && this.scopeChanged(i.parent);
    });
  }
  /**
   * 触发事件 (尝试消费事件订阅)
   */
  trigger(t) {
    const { event: n, initiator: i, scope: r } = t, o = this.getEvent(n), s = r.subscriptions;
    let a = En(
      s,
      (f) => So(o, f.event)
    );
    if (o.type === "error" || o.type === "escalation") {
      const f = En(
        a,
        (E) => jl(o, E.event)
      );
      (a.every((E) => E.event.boundary) && f.some(
        (E) => E.event.boundary
      ) || f.some((E) => !E.event.boundary)) && (a = f);
    }
    const l = a.filter(
      (f) => !f.event.interrupting
    ), d = a.filter(
      (f) => f.event.interrupting
    );
    if (!d.length)
      return l.map((f) => f.triggerFn(i || null)).flat();
    const c = d.find((f) => !f.event.boundary) || d[0], u = En(
      s,
      (f) => f.event.persistent || this.isRethrow(f.event, c.event)
    );
    return s.forEach((f) => {
      u.includes(f) || f.remove();
    }), [c.triggerFn(i || null)].flat().filter((f) => f);
  }
  /**
   * 订阅事件
   */
  subscribe(t, n, i) {
    const r = this.getEvent(n), o = r.element, s = {
      scope: t,
      event: r,
      element: o,
      triggerFn: i,
      remove: () => {
        this.unsubscribe(s);
      }
    };
    return this.subscriptions.add(s), t.subscriptions.add(s), o && this.elementChanged(o), s;
  }
  unsubscribe(t) {
    const { scope: n, event: i } = t;
    this.subscriptions.delete(t), n.subscriptions.delete(t), i.element && this.elementChanged(i.element);
  }
  createInternalRef(t) {
    return D(t, "bpmn:StartEvent") || D(t, "bpmn:IntermediateCatchEvent") || D(t, "bpmn:ReceiveTask") || this.isSpecialBoundaryEvent(t) ? $e(t).name || t.id : null;
  }
  getNoneEvent(t) {
    return {
      element: t,
      interrupting: !1,
      boundary: !1,
      iref: t.id,
      type: "none"
    };
  }
  getEvent(t) {
    if (!t.businessObject)
      return t;
    const n = Ul(t), i = xi(t), r = this.createInternalRef(t), o = {
      element: t,
      interrupting: n,
      boundary: i,
      ...r ? { iref: r } : {}
    }, s = this.getEventDefinitions(t)[0];
    if (!s)
      return {
        ...o,
        type: this.isImplicitMessageCatch(t) ? "message" : "none"
      };
    if (D(s, "bpmn:LinkEventDefinition"))
      return {
        ...o,
        type: "link",
        name: s.name
      };
    if (D(s, "bpmn:SignalEventDefinition"))
      return {
        ...o,
        type: "signal",
        ref: s.signalRef
      };
    if (D(s, "bpmn:TimerEventDefinition"))
      return {
        ...o,
        type: "timer"
      };
    if (D(s, "bpmn:ConditionalEventDefinition"))
      return {
        ...o,
        type: "condition"
      };
    if (D(s, "bpmn:EscalationEventDefinition"))
      return {
        ...o,
        type: "escalation",
        ref: s.escalationRef
      };
    if (D(s, "bpmn:CancelEventDefinition"))
      return {
        ...o,
        type: "cancel"
      };
    if (D(s, "bpmn:ErrorEventDefinition"))
      return {
        ...o,
        type: "error",
        ref: s.errorRef
      };
    if (D(s, "bpmn:MessageEventDefinition"))
      return {
        ...o,
        type: "message",
        ref: s.messageRef
      };
    if (D(s, "bpmn:CompensateEventDefinition")) {
      let a = s.activityRef && this.elementRegistry.get(s.activityRef.id);
      return a || (jt(t) && Vt(t.parent) ? a = t.parent.parent : xi(t) ? a = t.host : a = t.parent), {
        ...o,
        type: "compensate",
        ref: a,
        persistent: !0
      };
    }
    throw new Error("unknown event definition");
  }
  createScope(t, n = !0) {
    const { element: i, parent: r = null, initiator: o = null } = t;
    n && this.trace("createScope", {
      element: i,
      scope: r
    });
    const s = new sp(this.ids.next(), i, r, o);
    return r && r.children.push(s), this.scopes.add(s), n && this.emit(hn, {
      scope: s
    }), this.elementChanged(i), r && this.elementChanged(r.element), s;
  }
  subscriptionFilter(t) {
    if (typeof t == "function")
      return t;
    const { event: n, element: i, scope: r } = t, o = t.elements || i && [i], s = n && this.getEvent(n);
    return (a) => (!s || So(s, a.event)) && (!o || o.includes(a.element)) && (!r || r === a.scope);
  }
  scopeSubscriptionFilter(t) {
    const n = typeof t == "function" ? t : this.subscriptionFilter(t);
    return (i) => Array.from(i.subscriptions).some(n);
  }
  scopeFilter(t) {
    if (typeof t == "function")
      return t;
    const { element: n, waitsOnElement: i, parent: r, trait: o = ce.RUNNING, subscribedTo: s } = t, a = s ? this.scopeSubscriptionFilter(s) : () => !0;
    return (l) => (!n || l.element === n) && (!r || l.parent === r) && (!i || l.getTokensByElement(i) > 0) && l.hasTrait(o) && a(l);
  }
  findSubscriptions(t) {
    return En(this.subscriptions, this.subscriptionFilter(t));
  }
  findSubscription(t) {
    return js(this.subscriptions, this.subscriptionFilter(t));
  }
  findScopes(t) {
    return En(this.scopes, this.scopeFilter(t));
  }
  findScope(t) {
    return js(this.scopes, this.scopeFilter(t));
  }
  destroyScope(t, n = null, i = !1) {
    if (!t.destroyed) {
      t.destroy(n);
      for (const r of t.subscriptions) {
        const o = r.event.traits || ce.ACTIVE;
        t.hasTrait(o) || this.unsubscribe(r);
      }
      if (t.destroyed) {
        for (const r of t.children)
          r.destroyed || this.destroyScope(r, n, i);
        this.trace("destroyScope", {
          element: t.element,
          scope: t
        }), this.scopes.delete(t), this.emit(At, {
          scope: t,
          forced: i
        });
      }
      this.elementChanged(t.element), t.parent && this.elementChanged(t.parent.element);
    }
  }
  trace(t, n) {
    this.emit(br, {
      ...n,
      action: t
    });
  }
  elementChanged(t) {
    this.changedElements.add(t), this.jobs.length || this.emit(jn);
  }
  scopeChanged(t) {
    this.emit(Ko, {
      scope: t
    });
  }
  emit(t, n = {}) {
    return this.eventBus.fire(t, n);
  }
  on(t, n) {
    this.eventBus.on(t, n);
  }
  off(t, n) {
    this.eventBus.off(t, n);
  }
  setConfig(t, n) {
    const i = this.getConfig(t);
    this.configuration[t.id || t] = {
      ...i,
      ...n
    }, this.emit(Gf, {
      element: t,
      config: this.configuration[t.id || t]
    }), this.elementChanged(t);
  }
  // 设置网关的激活 outgoing
  setGatewayActiveOutgoingByFlowIds(t) {
    const n = this._injector.get("elementRegistry"), i = this._injector.get("exclusiveGatewaySettings"), r = new Set(t), o = n.filter(
      (s) => D(s, "bpmn:ExclusiveGateway") || D(s, "bpmn:InclusiveGateway")
    );
    console.log(`找到 ${o.length} 个网关`), o.forEach((s) => {
      const a = s.outgoing.filter(
        (u) => D(u, "bpmn:SequenceFlow")
      );
      if (a.length < 2) {
        console.log(
          `网关 ${s.id} 只有 ${a.length} 个出口，跳过`
        );
        return;
      }
      const l = a.filter((u) => r.has(u.id)), d = D(s, "bpmn:ExclusiveGateway"), c = D(s, "bpmn:InclusiveGateway");
      if (d)
        if (l.length > 0) {
          const u = l[0];
          console.log(
            `设置排他网关 ${s.id} 的激活出口为: ${u.id}`
          ), i.setSequenceFlowTo(s, u), l.length > 1 && console.warn(
            `排他网关 ${s.id} 在 flowIds 中有多个出口 [${l.map((f) => f.id).join(", ")}]，仅激活第一个: ${u.id}`
          );
        } else
          console.log(`排他网关 ${s.id} 没有匹配的出口，保持默认配置`);
      else c && (l.length > 0 ? (console.log(
        `设置包容网关 ${s.id} 的激活出口为: [${l.map((u) => u.id).join(", ")}]`
      ), this.setConfig(s, {
        activeOutgoing: l
      }), a.forEach((u) => {
        const f = this._injector.get("canvas");
        l.includes(u) ? f.addMarker(u, "token-simulation-gateway-selected") : f.removeMarker(u, "token-simulation-gateway-selected");
      })) : console.log(
        `包容网关 ${s.id} 没有匹配的出口，保持默认配置（全部激活）`
      ));
    }), console.log("网关激活出口设置完成");
  }
  /**
   * 直接解析模拟流转路径（不依赖动画）
   * - list: 节点顺序（包含重复节点，便于表达回环）
   * - messages: 解析日志
   * - errors: 解析错误
   */
  async getSimulationPath(t = {}) {
    const n = Number.isFinite(t.maxLoopCount) ? Math.max(1, Math.floor(t.maxLoopCount)) : 2, i = Math.min(2, n), r = {
      list: [],
      messages: [],
      errors: [],
      maxLoopCount: i,
      reachedEndNode: !1,
      errorSet: /* @__PURE__ */ new Set(),
      flowVisitCount: /* @__PURE__ */ new Map(),
      started: !1,
      aborted: !1
    }, o = "__SIMULATION_PATH_LOOP_ABORT__", s = this.eventBus, a = this.createSilentEventBus();
    this.eventBus = a, this.on(jn, () => {
      for (const u of this.changedElements)
        this.emit(wo, {
          element: u,
          silentPathSimulation: !0
        });
      this.changedElements.clear();
    });
    const l = (u, f) => {
      const E = f == null ? void 0 : f.element;
      u !== "exit" || !this.isPathNodeElement(E) || (r.list.push(E), r.messages.push(`经过节点: ${this.describeElement(E)}`), D(E, "bpmn:EndEvent") && (r.reachedEndNode = !0));
    }, d = this.trace;
    this.trace = (u, f) => {
      l(u, f);
    };
    const c = this.patchBehaviorsForPathSimulation(r, o);
    try {
      this.reset();
      const u = this.findScopes((g) => !g.parent && !g.destroyed);
      u.length || this.pushSimulationError(r, "没有找到可解析的流程根节点（Process/Participant）");
      for (const g of u)
        this.startPathSimulationForRootScope(g, r);
      r.started || this.pushSimulationError(r, "没有找到开始节点"), await Promise.resolve();
      const f = this.findScopes((g) => !g.destroyed), E = f.filter((g) => !g.parent), h = f.length > 0 && f.length === E.length && E.every((g) => g.children.length === 0);
      if (r.reachedEndNode || this.pushSimulationError(r, "没有结束节点，或无法到达结束节点"), r.started && !h && !r.aborted) {
        const g = f.filter((m) => m.parent), C = g.length > 0 ? g.slice(0, 5).map((m) => this.describeElement(m.element)).join(", ") : "无可识别等待节点";
        this.pushSimulationError(r, `模拟未自然结束，存在等待中的流转: ${C}`);
      }
    } catch (u) {
      u && u.message === o ? r.aborted = !0 : this.pushSimulationError(r, `路径解析异常: ${(u == null ? void 0 : u.message) || String(u)}`);
    } finally {
      this.trace = d, c(), this.eventBus = s, this.changedElements.clear();
    }
    return {
      list: r.list,
      messages: r.messages,
      errors: r.errors
    };
  }
  initializeRootScopes() {
    const t = [];
    return this.elementRegistry.forEach((n) => {
      if (!en(n, ["bpmn:Process", "bpmn:Participant"]))
        return;
      const i = this.createScope(
        {
          element: n
        },
        !1
      );
      t.push(i);
      const r = n.children.filter(jt), o = n.children.filter(ar);
      for (const s of r) {
        const a = {
          ...this.getEvent(s),
          interrupting: !1
        };
        this.subscribe(i, a, (l) => {
          if (this.findScopes((c) => c.running).length > 0) {
            this.reset();
            const c = this.findScope((u) => u.element === n);
            if (c)
              return this.signal({
                element: n,
                startEvent: s,
                initiator: l,
                scope: c
              });
          }
          return this.signal({
            element: n,
            startEvent: s,
            initiator: l
          });
        });
      }
      if (!r.length)
        for (const s of o) {
          const a = this.getNoneEvent(s);
          this.subscribe(i, a, (l) => {
            if (this.findScopes((c) => c.running).length > 0) {
              this.reset();
              const c = this.findScope((u) => u.element === n);
              if (c)
                return this.signal({
                  element: n,
                  initiator: l,
                  scope: c
                });
            }
            return this.signal({
              element: n,
              initiator: l
            });
          });
        }
    }), t;
  }
  initializeScope(t) {
    const { element: n } = t, i = this.createScope(t), { attachers: r = [] } = n, o = rn(n, this.elementRegistry);
    for (const s of o)
      if (Vt(s)) {
        const a = rn(s, this.elementRegistry).filter(
          (l) => jt(l) && !sr(l)
        );
        for (const l of a)
          this.subscribe(i, l, (d) => this.signal({
            element: s,
            parentScope: i,
            startEvent: l,
            initiator: d
          }));
      }
    for (const s of r)
      xi(s) && !sr(s) && this.subscribe(i, s, (a) => this.signal({
        element: s,
        parentScope: i.parent,
        hostScope: i,
        initiator: a
      }));
    return i;
  }
  getConfig(t) {
    return this.configuration[t.id || t] || {};
  }
  waitForScopes(t, n) {
    if (!n.length)
      return;
    const i = {
      type: "all-completed",
      persistent: !1
    }, r = new Set(n), o = (s) => {
      r.delete(s.scope), r.size === 0 && (this.off(At, o), this.trigger({
        scope: t,
        event: i
      }));
    };
    return this.on(At, o), i;
  }
  waitAtElement(t, n = !0) {
    this.setConfig(t, {
      wait: n
    });
  }
  reset() {
    for (const t of this.scopes)
      this.destroyScope(t, null, !0);
    this.jobs.length = 0;
    for (const t of this.initializeRootScopes())
      this.scopes.add(t);
    this.emit(jn), this.emit(Pl);
  }
  registerBehavior(t, n) {
    this.behaviors[t] = n;
  }
  isRethrow(t, n) {
    return t.boundary && !n.boundary;
  }
  startPathSimulationForRootScope(t, n) {
    const i = t.element, r = i.children || rn(i, this.elementRegistry), o = r.filter((a) => jt(a));
    if (o.length) {
      for (const a of o)
        n.started = !0, this.signal({
          element: i,
          startEvent: a,
          scope: t
        });
      return;
    }
    r.filter((a) => ar(a)).length && (n.started = !0, this.signal({
      element: i,
      scope: t
    }));
  }
  patchBehaviorsForPathSimulation(t, n) {
    var a, l, d, c;
    const i = [], r = this.behaviors["bpmn:SequenceFlow"];
    if (r) {
      const u = (a = r.enter) == null ? void 0 : a.bind(r), f = (l = r.exit) == null ? void 0 : l.bind(r);
      r.enter = (E) => {
        this.exit(E);
      }, r.exit = (E) => {
        var m, _;
        const h = E == null ? void 0 : E.element, g = (h == null ? void 0 : h.id) || `${((m = h == null ? void 0 : h.source) == null ? void 0 : m.id) || "unknown"}->${((_ = h == null ? void 0 : h.target) == null ? void 0 : _.id) || "unknown"}`, C = t.flowVisitCount.get(g) || 0;
        if (C >= t.maxLoopCount)
          throw this.pushSimulationError(
            t,
            `检测到多次回环路径: ${g}（最多允许 ${t.maxLoopCount} 次）`
          ), t.aborted = !0, new Error(n);
        return t.flowVisitCount.set(g, C + 1), t.messages.push(
          `经过连线: ${g}（第 ${C + 1}/${t.maxLoopCount} 次）`
        ), this.validateLaneTransition(h, t), f ? f(E) : void 0;
      }, i.push(() => {
        u && (r.enter = u), f && (r.exit = f);
      });
    }
    const o = this.behaviors["bpmn:MessageFlow"];
    if (o) {
      const u = (d = o.signal) == null ? void 0 : d.bind(o);
      o.signal = (f) => {
        this.exit(f);
      }, i.push(() => {
        u && (o.signal = u);
      });
    }
    const s = this.behaviors["bpmn:EventBasedGateway"];
    if (s) {
      const u = (c = s.enter) == null ? void 0 : c.bind(s);
      s.enter = (f) => {
        u == null || u(f);
        const { element: E, scope: h } = f, g = h == null ? void 0 : h.parent;
        if (!g || !(E != null && E.outgoing))
          return;
        const C = E.outgoing.map((R) => R == null ? void 0 : R.target).filter((R) => en(R, ["bpmn:IntermediateCatchEvent", "bpmn:ReceiveTask"]));
        if (!C.length)
          return;
        const m = C.map(
          (R) => this.findSubscription({
            scope: g,
            element: R
          })
        ).filter((R) => !!R);
        if (!m.length)
          return;
        const { activeOutgoing: _ } = this.getConfig(E), O = (_ == null ? void 0 : _.target) || _, p = m.find((R) => R.element === O) || m[0];
        t.messages.push(
          `事件网关 ${this.describeElement(E)} 自动选择出口: ${this.describeElement(p.element)}`
        ), p.triggerFn(h);
      }, i.push(() => {
        u && (s.enter = u);
      });
    }
    return () => {
      i.forEach((u) => u());
    };
  }
  validateLaneTransition(t, n) {
    if (!t)
      return;
    const i = this.getAncestorByType(t.source, "bpmn:Lane"), r = this.getAncestorByType(t.target, "bpmn:Lane");
    i && r && i !== r && this.pushSimulationError(
      n,
      `泳道间异常流转: ${t.id || "unknown-flow"} (${i.id} -> ${r.id})`
    );
  }
  getAncestorByType(t, n) {
    let i = t;
    for (; i; ) {
      if (D(i, n))
        return i;
      i = i.parent;
    }
    return null;
  }
  describeElement(t) {
    if (!t)
      return "unknown";
    const n = $e(t).name, i = n ? `${n}` : t.type;
    return `${t.id}(${i})`;
  }
  isPathNodeElement(t) {
    return !(!t || mi(t) || en(t, [
      "bpmn:SequenceFlow",
      "bpmn:MessageFlow",
      "bpmn:Association",
      "bpmn:Process",
      "bpmn:Participant",
      "bpmn:Lane"
    ]));
  }
  pushSimulationError(t, n) {
    t.errorSet.has(n) || (t.errorSet.add(n), t.errors.push(n));
  }
  createSilentEventBus() {
    const t = /* @__PURE__ */ new Map(), n = (i) => Array.isArray(i) ? i : [i];
    return {
      on: (i, r) => {
        for (const o of n(i)) {
          const s = t.get(o) || /* @__PURE__ */ new Set();
          s.add(r), t.set(o, s);
        }
      },
      off: (i, r) => {
        for (const o of n(i)) {
          const s = t.get(o);
          s && (s.delete(r), s.size || t.delete(o));
        }
      },
      fire: (i, r = {}) => {
        const o = t.get(i);
        if (!o)
          return r;
        for (const s of o)
          s(r);
        return r;
      }
    };
  }
  isImplicitMessageCatch(t) {
    return D(t, "bpmn:ReceiveTask") || t.incoming && t.incoming.some((n) => D(n, "bpmn:MessageFlow"));
  }
  isSpecialBoundaryEvent(t) {
    if (!xi(t))
      return !1;
    const n = this.getEventDefinitions(t);
    return !n[0] || en(n[0], ["bpmn:ConditionalEventDefinition", "bpmn:TimerEventDefinition"]);
  }
  getEventDefinitions(t) {
    return t.businessObject.get("eventDefinitions") || [];
  }
}
b(Hl, "$inject", ["injector", "eventBus", "elementRegistry"]);
class ql {
  constructor(t, n) {
    b(this, "_simulator");
    b(this, "_activityBehavior");
    this._simulator = t, this._activityBehavior = n, t.registerBehavior("bpmn:StartEvent", this);
  }
  signal(t) {
    this._simulator.exit(t);
  }
  exit(t) {
    this._activityBehavior.exit(t);
  }
}
b(ql, "$inject", ["simulator", "activityBehavior"]);
class Wl {
  constructor(t, n, i) {
    b(this, "_intermediateThrowEventBehavior");
    b(this, "_scopeBehavior");
    this._intermediateThrowEventBehavior = i, this._scopeBehavior = n, t.registerBehavior("bpmn:EndEvent", this);
  }
  enter(t) {
    this._intermediateThrowEventBehavior.enter(t);
  }
  signal(t) {
    this._intermediateThrowEventBehavior.signal(t);
  }
  exit(t) {
    const { scope: n } = t;
    this._scopeBehavior.tryExit(n.parent, n);
  }
}
b(Wl, "$inject", ["simulator", "scopeBehavior", "intermediateThrowEventBehavior"]);
class Gl {
  constructor(t, n, i) {
    b(this, "_simulator");
    b(this, "_activityBehavior");
    b(this, "_scopeBehavior");
    this._simulator = t, this._activityBehavior = n, this._scopeBehavior = i, t.registerBehavior("bpmn:BoundaryEvent", this);
  }
  signal(t) {
    const {
      element: n,
      scope: i,
      hostScope: r = this._simulator.findScope({
        parent: i.parent,
        element: n.host
      })
    } = t;
    if (!r)
      throw new Error("host scope not found");
    if ($e(n).cancelActivity) {
      this._scopeBehavior.interrupt(r, i);
      const s = this._scopeBehavior.tryExit(r, i);
      if (s) {
        const a = this._simulator.subscribe(r, s, (l) => (a.remove(), this._simulator.exit(t)));
        return;
      }
    }
    this._simulator.exit(t);
  }
  exit(t) {
    this._activityBehavior.exit(t);
  }
}
b(Gl, "$inject", ["simulator", "activityBehavior", "scopeBehavior"]);
class Kl {
  constructor(t, n) {
    b(this, "_simulator");
    b(this, "_activityBehavior");
    this._simulator = t, this._activityBehavior = n, t.registerBehavior("bpmn:IntermediateCatchEvent", this), t.registerBehavior("bpmn:ReceiveTask", this);
  }
  signal(t) {
    return this._simulator.exit(t);
  }
  enter(t) {
    return this._simulator.signal(t);
  }
  exit(t) {
    this._activityBehavior.exit(t);
  }
}
b(Kl, "$inject", ["simulator", "activityBehavior"]);
class Yl {
  constructor(t, n, i) {
    b(this, "_simulator");
    b(this, "_activityBehavior");
    b(this, "_eventBehaviors");
    this._simulator = t, this._activityBehavior = n, this._eventBehaviors = i, t.registerBehavior("bpmn:IntermediateThrowEvent", this), t.registerBehavior("bpmn:SendTask", this);
  }
  enter(t) {
    const { element: n } = t, i = this._eventBehaviors.get(n);
    if (i) {
      const r = i(t);
      if (r)
        return this._activityBehavior.signalOnEvent(t, r);
    }
    this._activityBehavior.enter(t);
  }
  signal(t) {
    this._activityBehavior.signal(t);
  }
  exit(t) {
    this._activityBehavior.exit(t);
  }
}
b(Yl, "$inject", ["simulator", "activityBehavior", "eventBehaviors"]);
class Xl {
  constructor(t, n) {
    b(this, "_simulator");
    b(this, "_scopeBehavior");
    this._scopeBehavior = n, this._simulator = t, t.registerBehavior("bpmn:ExclusiveGateway", this);
  }
  enter(t) {
    this._simulator.exit(t);
  }
  exit(t) {
    const { element: n, scope: i } = t, r = Xn(n.outgoing);
    if (r.length === 1)
      return this._simulator.enter({
        element: r[0],
        scope: i.parent
      });
    const { activeOutgoing: o } = this._simulator.getConfig(n);
    let s = r.find((a) => a === o);
    return s || (n.businessObject.default && (s = r.find((a) => a.id === n.businessObject.default.id)), s || (s = r[0])), s ? this._simulator.enter({
      element: s,
      scope: i.parent
    }) : this._scopeBehavior.tryExit(i.parent, i);
  }
}
b(Xl, "$inject", ["simulator", "scopeBehavior"]);
class Jl {
  constructor(t, n) {
    b(this, "_simulator");
    b(this, "_activityBehavior");
    this._simulator = t, this._activityBehavior = n, t.registerBehavior("bpmn:ParallelGateway", this);
  }
  enter(t) {
    const { scope: n } = t, i = this._findJoiningScopes(t);
    if (i.length) {
      for (const r of i)
        r !== n && this._simulator.destroyScope(r.complete(), n);
      this._simulator.exit(t);
    }
  }
  /**
   * Find scopes that will be joined by this transition.
   *
   * @param {Object} enterContext
   * @return {Scope[]} scopes joined by this transition
   */
  _findJoiningScopes(t) {
    const { scope: n, element: i } = t, r = Xn(i.incoming), { parent: o } = n, s = this._simulator.findScopes({
      parent: o,
      element: i
    }), a = r.map((l) => s.find((d) => d.initiator.element === l)).filter((l) => l);
    return a.length === r.length ? a : [];
  }
  exit(t) {
    this._activityBehavior.exit(t);
  }
}
b(Jl, "$inject", ["simulator", "activityBehavior"]);
class Zl {
  constructor(t) {
    b(this, "_simulator");
    this._simulator = t, t.registerBehavior("bpmn:EventBasedGateway", this);
  }
  enter(t) {
    const { element: n, scope: i } = t, r = i.parent, s = cp(n).map(
      (a) => this._simulator.subscribe(r, a, (l) => (s.forEach((d) => d.remove()), this._simulator.destroyScope(i, l), this._simulator.signal({
        element: a,
        parentScope: r,
        initiator: l
      })))
    );
  }
}
b(Zl, "$inject", ["simulator"]);
function cp(e) {
  return e.outgoing.map((t) => t.target).filter((t) => en(t, ["bpmn:IntermediateCatchEvent", "bpmn:ReceiveTask"]));
}
function ts(e, t) {
  return ($e(e).eventDefinitions || []).find(
    (r) => D(r, t)
  );
}
function up(e, t) {
  return !!ts(e, t);
}
class Ql {
  constructor(t, n) {
    b(this, "_simulator");
    b(this, "_activityBehavior");
    this._simulator = t, this._activityBehavior = n, t.registerBehavior("bpmn:InclusiveGateway", this);
  }
  enter(t) {
    this._tryJoin(t);
  }
  exit(t) {
    const { element: n, scope: i } = t, r = Xn(n.outgoing);
    if (r.length > 1) {
      const { activeOutgoing: o = [] } = this._simulator.getConfig(n);
      o.length || o.push(...r);
      for (const s of o)
        this._simulator.enter({
          element: s,
          scope: i.parent
        });
    } else
      this._activityBehavior.exit(t);
  }
  _tryJoin(t) {
    var n = t.exclude || [];
    const { scope: i, element: r } = t, { parent: o } = i, s = Xn(r.incoming), a = this._simulator.findScopes({
      parent: o,
      element: r
    }).filter((C) => !n.includes(C)), l = s.filter(
      (C) => !a.find((m) => m.initiator.element === C)
    ), d = s.filter(
      (C) => a.find((m) => m.initiator.element === C)
    ), f = this._getRemainingScopes(t).filter(
      (C) => l.some((m) => this._canReachElement(t, C.element, m))
    ).filter(
      (C) => !d.some((m) => this._canReachElement(t, C.element, m))
    );
    if (f.length || this._join(t, d, a, n), this._simulator.findScopes({
      parent: o,
      element: r
    }).filter((C) => !n.includes(C))[0] !== i)
      return;
    const h = this._simulator.waitForScopes(i, f), g = this._simulator.subscribe(i, h, () => {
      g.remove(), this._tryJoin(t);
    });
  }
  /**
   * Get scopes that may potentially be waited for,
   * in the context of an inclusive gateway.
   *
   * @param {object} context
   * @return {object[]}
   */
  _getRemainingScopes(t) {
    const { scope: n, element: i } = t, { parent: r } = n;
    return this._simulator.findScopes(
      (o) => o.parent === r && o.element !== i
    );
  }
  /**
   * Activates the inclusive gateway join.
   *
   * @param {object} context
   * @param {object[]} incomingFlowsWithToken
   * @param {object[]} gatewayScopes
   * @param {object[]} exclude
   *
   * @return {object[]} scopes
   */
  _join(t, n, i, r) {
    const { scope: o } = t, s = n.map(
      (l) => i.find((d) => d.initiator.element === l)
    );
    for (const l of s)
      l !== o && this._simulator.destroyScope(l.complete(), o);
    this._simulator.exit(t), r.push(o);
    const a = i.filter((l) => !s.includes(l));
    a.length && this._tryJoin({
      initiator: a[0].initiator,
      element: a[0].element,
      scope: a[0],
      exclude: r
    });
  }
  /**
   * Return true if the target element can be reached
   * from the current element, searching the execution
   * graph backwards.
   *
   * @param {object[]} context
   * @param {object} targetElement
   * @param {object} currentElement
   * @param {Set<object>} traversed
   *
   * @return {boolean}
   */
  _canReachElement(t, n, i, r = /* @__PURE__ */ new Set()) {
    return t.element === i || r.has(i) ? !1 : (r.add(i), n === i ? !0 : Qt(i) ? this._canReachElement(t, n, i.source, r) : Qo(i) ? dp(
      i.parent.children,
      ec(i)
    ).some(
      (a) => this._canReachElement(t, n, a, r)
    ) : Xn(i.incoming).some(
      (s) => this._canReachElement(t, n, s, r)
    ));
  }
}
b(Ql, "$inject", ["simulator", "activityBehavior"]);
function ec(e) {
  return ts(e, "bpmn:LinkEventDefinition").name;
}
function dp(e, t) {
  return e.filter((n) => ap(n) && ec(n) === t);
}
class tc {
  constructor(t, n, i) {
    this._simulator = t, this._scopeBehavior = n, this._transactionBehavior = i;
    const r = [
      "bpmn:BusinessRuleTask",
      "bpmn:CallActivity",
      "bpmn:ManualTask",
      "bpmn:ScriptTask",
      "bpmn:ServiceTask",
      "bpmn:Task",
      "bpmn:UserTask"
    ];
    for (const o of r)
      t.registerBehavior(o, this);
  }
  signal(t) {
    const n = this._triggerMessages(t);
    if (n)
      return this.signalOnEvent(t, n);
    this._simulator.exit(t);
  }
  enter(t) {
    const { element: n } = t, i = this.waitAtElement(n);
    if (i)
      return this.signalOnEvent(t, i);
    const r = this._triggerMessages(t);
    if (r)
      return this.signalOnEvent(t, r);
    this._simulator.exit(t);
  }
  exit(t) {
    const { element: n, scope: i } = t, r = i.parent, o = i.active && !i.failed;
    o && !Vt(n) && this._transactionBehavior.registerCompensation(i);
    const s = o ? n.outgoing.filter(Qt) : [];
    s.forEach(
      (a) => this._simulator.enter({
        element: a,
        scope: r
      })
    ), s.length === 0 && this._scopeBehavior.tryExit(r, i);
  }
  signalOnEvent(t, n) {
    const { scope: i, element: r } = t, o = this._simulator.subscribe(i, n, (s) => (o.remove(), this._simulator.signal({
      scope: i,
      element: r,
      initiator: s
    })));
  }
  waitAtElement(t) {
    return this._simulator.getConfig(t).wait && {
      element: t,
      type: "continue",
      interrupting: !1,
      boundary: !1
    };
  }
  _getMessageContexts(t, n = null) {
    const i = n ? (o) => o.referencePoint.x > n.x : () => !0, r = (o, s) => o.referencePoint.x - s.referencePoint.x;
    return [
      ...t.incoming.filter(Wr).map((o) => ({
        incoming: o,
        referencePoint: this.last(o.waypoints)
      })),
      ...t.outgoing.filter(Wr).map((o) => ({
        outgoing: o,
        referencePoint: this.first(o.waypoints)
      }))
    ].sort(r).filter(i);
  }
  _triggerMessages(t) {
    const { element: n, initiator: i, scope: r } = t;
    let o = r.messageContexts;
    o || (o = r.messageContexts = this._getMessageContexts(n));
    const s = i && i.element;
    if (!(Wr(s) && r.expectedIncoming !== s))
      for (; o.length; ) {
        const { incoming: a, outgoing: l } = o.shift();
        if (a) {
          if (!i) continue;
          return r.expectedIncoming = a, {
            element: n,
            type: "message",
            name: a.id,
            interrupting: !1,
            boundary: !1
          };
        }
        this._simulator.signal({ element: l });
      }
  }
  first(t) {
    return t && t[0];
  }
  last(t) {
    return t && t[t.length - 1];
  }
}
b(tc, "$inject", ["simulator", "scopeBehavior", "transactionBehavior"]);
class nc {
  constructor(t, n, i, r, o) {
    b(this, "_simulator");
    b(this, "_activityBehavior");
    b(this, "_scopeBehavior");
    b(this, "_transactionBehavior");
    b(this, "_elementRegistry");
    this._simulator = t, this._activityBehavior = n, this._scopeBehavior = i, this._transactionBehavior = r, this._elementRegistry = o, t.registerBehavior("bpmn:SubProcess", this), t.registerBehavior("bpmn:Transaction", this), t.registerBehavior("bpmn:AdHocSubProcess", this);
  }
  signal(t) {
    this._start(t);
  }
  enter(t) {
    const { element: n } = t, i = this._activityBehavior.waitAtElement(n);
    if (i)
      return this._activityBehavior.signalOnEvent(t, i);
    this._start(t);
  }
  exit(t) {
    const { scope: n } = t, i = n.parent;
    i.failInitiator === n && i.complete(), this._activityBehavior.exit(t);
  }
  _start(t) {
    const { element: n, startEvent: i, scope: r } = t, o = r.parent;
    if (Vt(n)) {
      if (!i)
        throw new Error("missing <startEvent>: required for event sub-process");
    } else if (i)
      throw new Error("unexpected <startEvent>: not allowed for sub-process");
    if (o.destroyed)
      return;
    fp(n) && this._transactionBehavior.setup(t), i && Ul(i) && this._scopeBehavior.interrupt(o, r);
    const s = this._findStarts(n, i);
    for (const a of s)
      jt(a) ? this._simulator.signal({
        element: a,
        parentScope: r,
        initiator: r
      }) : this._simulator.enter({
        element: a,
        scope: r,
        initiator: r
      });
    s.length || this._simulator.exit(t);
  }
  _findStarts(t, n) {
    const i = n ? (r) => n === r : (r) => Vl(r);
    return rn(t, this._elementRegistry).filter(
      (r) => i(r) || ar(r)
    );
  }
}
b(nc, "$inject", [
  "simulator",
  "activityBehavior",
  "scopeBehavior",
  "transactionBehavior",
  "elementRegistry"
]);
function fp(e) {
  return D(e, "bpmn:Transaction");
}
const Gr = {
  type: "cancel",
  interrupting: !0,
  boundary: !1,
  persistent: !0
};
class ic {
  constructor(t, n, i) {
    b(this, "_simulator");
    b(this, "_scopeBehavior");
    b(this, "_elementRegistry");
    this._simulator = t, this._scopeBehavior = n, this._elementRegistry = i;
  }
  setup(t) {
    const { scope: n } = t, i = this._simulator.subscribe(n, Gr, (s) => (i.remove(), this.cancel({
      scope: n,
      initiator: s
    }))), r = {
      type: "compensate",
      ref: n.element,
      persistent: !0,
      traits: ce.NOT_DEAD
    }, o = this._simulator.subscribe(
      n,
      r,
      (s) => n.canceled ? (o.remove(), this.compensate({
        scope: n,
        element: n.element,
        initiator: s
      })) : this._simulator.trigger({
        event: Gr,
        scope: n
      })
    );
  }
  cancel(t) {
    const { scope: n, initiator: i } = t;
    if (!n.destroyed)
      return n.cancel(i), this._simulator.trigger({
        event: {
          type: "compensate",
          ref: n.element
        },
        initiator: i,
        scope: n
      }), this._simulator.trigger({
        scope: n,
        initiator: i,
        event: Gr
      });
  }
  registerCompensation(t) {
    const { element: n } = t, r = rn(n, this._elementRegistry).filter(Vt).map(
      (a) => rn(a, this._elementRegistry).find(
        (l) => jt(l) && sr(l)
      )
    ).filter((a) => a), o = n.attachers.filter(sr);
    if (!r.length && !o.length)
      return;
    const s = this.findTransactionScope(t);
    D(s.element, "bpmn:Transaction") || this.makeCompensable(s);
    for (const a of r) {
      const l = {
        element: a,
        type: "compensate",
        persistent: !0,
        interrupting: !0,
        ref: n,
        traits: ce.NOT_DEAD
      }, d = a.parent, c = this._simulator.subscribe(t, l, (u) => (c.remove(), this._simulator.signal({
        initiator: u,
        element: d,
        startEvent: a,
        parentScope: t
      })));
    }
    for (const a of o) {
      const l = {
        element: a,
        type: "compensate",
        persistent: !0,
        ref: n,
        traits: ce.NOT_DEAD
      }, d = a.outgoing.map((u) => u.target).find(zl);
      if (!d)
        continue;
      const c = this._simulator.subscribe(
        s,
        l,
        (u) => (c.remove(), this._simulator.enter({
          initiator: u,
          element: d,
          scope: s
        }))
      );
    }
  }
  makeCompensable(t) {
    if (t.hasTrait(ce.COMPENSABLE) || !t.parent)
      return;
    const n = {
      type: "compensate",
      ref: t.element,
      interrupting: !0,
      persistent: !0,
      traits: ce.NOT_DEAD
    };
    t.compensable();
    const i = this._simulator.subscribe(t, n, (s) => (i.remove(), t.fail(s), this.compensate({
      scope: t,
      element: t.element,
      initiator: s
    }), this._scopeBehavior.tryExit(t, s), t)), r = t.parent;
    if (!r)
      return;
    const o = this._simulator.subscribe(r, n, (s) => (o.remove(), this._simulator.trigger({
      scope: t,
      event: n,
      initiator: s
    })));
    this.makeCompensable(r);
  }
  findTransactionScope(t) {
    let n = t;
    for (; n; ) {
      const i = n.element;
      if (D(i, "bpmn:SubProcess") && !Vt(i) || en(i, ["bpmn:Transaction", "bpmn:Process", "bpmn:Participant"]))
        return n;
      n = n.parent;
    }
    throw pp(t);
  }
  compensate(t) {
    const { scope: n, element: i } = t, r = En(
      n.subscriptions,
      (a) => So({ type: "compensate" }, a.event)
    ), o = r.filter(
      (a) => a.event.ref === i
    ), s = r.filter(
      (a) => a.event.ref !== i
    );
    for (const a of o)
      this._scopeBehavior.preExit(n, (l) => this._simulator.trigger(a));
    for (const a of s.reverse())
      this._scopeBehavior.preExit(n, (l) => this._simulator.trigger(a));
  }
}
b(ic, "$inject", ["simulator", "scopeBehavior", "elementRegistry"]);
function pp(e) {
  throw new Error(`no transaction context for <${e.id}>`);
}
class ns {
  constructor(t, n) {
    b(this, "_simulator");
    b(this, "_scopeBehavior");
    this._simulator = t, this._scopeBehavior = n, t.registerBehavior("bpmn:SequenceFlow", this);
  }
  enter(t) {
    this._simulator.exit(t);
  }
  exit(t) {
    const { element: n, scope: i } = t;
    this._simulator.enter({
      initiator: i,
      element: n.target,
      scope: i.parent
    });
  }
}
b(ns, "$inject", ["simulator", "scopeBehavior"]);
class is {
  constructor(t) {
    b(this, "_simulator");
    this._simulator = t, t.registerBehavior("bpmn:MessageFlow", this);
  }
  signal(t) {
    this._simulator.exit(t);
  }
  exit(t) {
    const { element: n, scope: i } = t, r = n.target, o = es(r) ? r : {
      type: "message",
      element: n,
      name: n.id
    }, s = this._simulator.findSubscription({
      event: o,
      elements: [r, r.parent]
    });
    s && this._simulator.trigger({
      event: o,
      initiator: i,
      scope: s.scope
    });
  }
}
b(is, "$inject", ["simulator"]);
class rc {
  constructor(t, n, i) {
    b(this, "_simulator");
    b(this, "_elementRegistry");
    b(this, "_scopeBehavior");
    this._simulator = t, this._elementRegistry = n, this._scopeBehavior = i;
  }
  get(t) {
    const i = Object.entries({
      "bpmn:LinkEventDefinition": (r) => {
        const { element: o, scope: s } = r, a = zs(o), l = s.parent, d = l.element, u = rn(d, this._elementRegistry).filter(
          (f) => Qo(f) && zs(f).name === a.name
        );
        for (const f of u)
          this._simulator.signal({
            element: f,
            parentScope: l,
            initiator: s
          });
      },
      "bpmn:SignalEventDefinition": (r) => {
        const { element: o, scope: s } = r, a = this._simulator.findSubscriptions({
          event: o
        }), l = /* @__PURE__ */ new Set();
        for (const d of a) {
          const c = d.scope;
          l.has(c) || (l.add(c), this._simulator.trigger({
            event: o,
            scope: c,
            initiator: s
          }));
        }
      },
      "bpmn:EscalationEventDefinition": (r) => {
        const { element: o, scope: s } = r, a = this._simulator.findScopes({
          subscribedTo: {
            event: o
          },
          trait: ce.ACTIVE
        });
        let l = s;
        for (; l = l.parent; )
          if (a.includes(l)) {
            this._simulator.trigger({
              event: o,
              scope: l,
              initiator: s
            });
            break;
          }
      },
      "bpmn:ErrorEventDefinition": (r) => {
        const { element: o, scope: s } = r, a = this._simulator.findScopes({
          subscribedTo: {
            event: o
          },
          trait: ce.ACTIVE
        });
        let l = s;
        for (; l = l.parent; )
          if (a.includes(l)) {
            this._simulator.trigger({
              event: o,
              scope: l,
              initiator: s
            });
            break;
          }
      },
      "bpmn:TerminateEventDefinition": (r) => {
        const { scope: o } = r;
        this._scopeBehavior.terminate(o.parent, o);
      },
      "bpmn:CancelEventDefinition": (r) => {
        const { scope: o, element: s } = r;
        this._simulator.trigger({
          event: s,
          initiator: o,
          scope: Vs(o)
        });
      },
      "bpmn:CompensateEventDefinition": (r) => {
        const { scope: o, element: s } = r;
        return this._simulator.waitForScopes(
          o,
          this._simulator.trigger({
            event: s,
            scope: Vs(o)
          })
        );
      }
    }).find((r) => up(t, r[0]));
    return i && i[1];
  }
}
b(rc, "$inject", ["simulator", "elementRegistry", "scopeBehavior"]);
function zs(e) {
  return ts(e, "bpmn:LinkEventDefinition");
}
function Vs(e) {
  for (; Vt(e.parent.element); )
    e = e.parent;
  return e.parent;
}
const Us = {
  type: "pre-exit",
  persistent: !0,
  interrupting: !0,
  boundary: !1
}, Kr = {
  type: "exit",
  interrupting: !0,
  boundary: !1,
  persistent: !0
};
class oc {
  constructor(t) {
    b(this, "_simulator");
    this._simulator = t;
  }
  /**
   * Is the given scope finished?
   *
   * @param {Scope}  scope
   * @param {Scope|Function} [excludeScope=null]
   *
   * @return {boolean}
   */
  isFinished(t, n = null) {
    const i = Hs(n);
    return t.children.every((r) => r.destroyed || r.completed || i(r));
  }
  /**
   * Destroy all scope children.
   *
   * @param {Scope} scope
   * @param {Scope} initiator
   * @param {Scope|Function} [excludeScope=null]
   */
  destroyChildren(t, n, i = null) {
    const r = Hs(i);
    t.children.filter((o) => !o.destroyed && !r(o)).map((o) => {
      this._simulator.destroyScope(o, n);
    });
  }
  terminate(t, n) {
    this.destroyChildren(t, n), t.terminate(n), this.tryExit(t, n);
  }
  interrupt(t, n) {
    this.destroyChildren(t, n, n), t.fail(n);
  }
  tryExit(t, n) {
    if (!t)
      throw new Error("missing <scope>");
    if (n || (n = t), !this.isFinished(t, n))
      return Kr;
    const i = this._simulator.findSubscriptions({
      event: Us,
      scope: t
    });
    for (const r of i) {
      const { event: o, scope: s } = r;
      if (this._simulator.trigger({
        event: o,
        scope: s,
        initiator: n
      }).length)
        return Kr;
    }
    this._simulator.trigger({
      event: Kr,
      scope: t,
      initiator: n
    }), this.exit({
      scope: t,
      initiator: n
    });
  }
  exit(t) {
    const { scope: n, initiator: i } = t;
    if (!i)
      throw new Error("missing <initiator>");
    this._simulator.exit({
      element: n.element,
      scope: n,
      initiator: i
    });
  }
  preExit(t, n) {
    const i = this._simulator.subscribe(t, Us, (r) => (i.remove(), n(r)));
    return i;
  }
}
b(oc, "$inject", ["simulator"]);
function Hs(e) {
  return typeof e == "function" ? e : (t) => t === e;
}
class sc {
  constructor(t, n) {
    b(this, "_simulator");
    b(this, "_scopeBehavior");
    this._simulator = t, this._scopeBehavior = n, t.registerBehavior("bpmn:Process", this), t.registerBehavior("bpmn:Participant", this);
  }
  signal(t) {
    const {
      element: n,
      startEvent: i,
      startNodes: r = this._findStarts(n, i),
      scope: o
    } = t;
    if (!r.length)
      throw new Error("missing <startNodes> or <startEvent>");
    for (const s of r)
      jt(s) ? this._simulator.signal({
        element: s,
        parentScope: o
      }) : this._simulator.enter({
        element: s,
        scope: o
      });
  }
  exit(t) {
    const { scope: n, initiator: i } = t;
    this._scopeBehavior.destroyChildren(n, i);
  }
  _findStarts(t, n) {
    const i = n ? (r) => n === r : (r) => Vl(r);
    return t.children.filter((r) => i(r) || ar(r));
  }
}
b(sc, "$inject", ["simulator", "scopeBehavior"]);
const hp = {
  __init__: [
    "startEventBehavior",
    "endEventBehavior",
    "boundaryEventBehavior",
    "intermediateCatchEventBehavior",
    "intermediateThrowEventBehavior",
    "exclusiveGatewayBehavior",
    "parallelGatewayBehavior",
    "eventBasedGatewayBehavior",
    "inclusiveGatewayBehavior",
    "subProcessBehavior",
    "sequenceFlowBehavior",
    "messageFlowBehavior",
    "processBehavior"
  ],
  startEventBehavior: ["type", ql],
  endEventBehavior: ["type", Wl],
  boundaryEventBehavior: ["type", Gl],
  intermediateCatchEventBehavior: ["type", Kl],
  intermediateThrowEventBehavior: ["type", Yl],
  exclusiveGatewayBehavior: ["type", Xl],
  parallelGatewayBehavior: ["type", Jl],
  eventBasedGatewayBehavior: ["type", Zl],
  inclusiveGatewayBehavior: ["type", Ql],
  activityBehavior: ["type", tc],
  subProcessBehavior: ["type", nc],
  sequenceFlowBehavior: ["type", ns],
  messageFlowBehavior: ["type", is],
  eventBehaviors: ["type", rc],
  scopeBehavior: ["type", oc],
  processBehavior: ["type", sc],
  transactionBehavior: ["type", ic]
}, mp = 5e3, ac = {
  __depends__: [hp],
  __init__: [
    [
      "eventBus",
      "simulator",
      function(e, t) {
        e.on([Ye, ut], mp, () => {
          t.reset();
        });
      }
    ]
  ],
  simulator: ["type", Hl]
};
class lc extends is {
  constructor(n, i) {
    super(n.get("simulator"));
    b(this, "_animation");
    this._animation = i;
  }
  signal(n) {
    const { element: i, scope: r } = n;
    this._animation.animate(i, r, () => {
      super.signal(n);
    });
  }
}
b(lc, "$inject", ["injector", "animation"]);
class cc extends ns {
  constructor(n, i) {
    super(n.get("simulator"), n.get("scopeBehavior"));
    b(this, "_animation");
    this._animation = i;
  }
  enter(n) {
    const { element: i, scope: r } = n;
    this._animation.animate(i, r, () => {
      super.enter(n);
    });
  }
}
b(cc, "$inject", ["injector", "animation"]);
const vp = {
  sequenceFlowBehavior: ["type", cc],
  messageFlowBehavior: ["type", lc]
}, qs = (e) => !0;
class uc {
  constructor(t, n) {
    b(this, "_eventBus");
    b(this, "_simulator");
    b(this, "_filter");
    b(this, "_scope");
    this._eventBus = t, this._simulator = n, this._filter = qs;
    const i = this;
    t.on([Ye, ut], function() {
      i._filter = qs;
    }), t.on(At, function(r) {
      const { scope: o } = r;
      i._scope === o && o.parent && i.toggle(o.parent);
    }), t.on(hn, function(r) {
      const { scope: o } = r;
      !o.parent && i._scope && !Ws(i._scope, o) && i.toggle(null);
    });
  }
  /**
   * 切换过滤特定的作用域
   * (Toggle filtering for specific scope)
   *
   * @param {Scope} [scope] - 目标作用域，若为空则清除过滤
   */
  toggle(t) {
    const n = this._scope !== t;
    this._scope = n ? t : null, this._filter = this._scope ? (i) => Ws(this._scope, i) : (i) => !0, this._eventBus.fire(yr, {
      filter: this._filter,
      scope: this._scope
    });
  }
  /**
   * 检查作用域是否显示
   * (Check if scope is shown)
   *
   * @param {Scope|String} scope
   * @return {Boolean}
   */
  isShown(t) {
    return typeof t == "string" && (t = this._simulator.findScope((n) => n.id === t)), t && this._filter(t);
  }
  isFocused(t) {
    var i;
    const n = t.id || t;
    return ((i = this._scope) == null ? void 0 : i.id) === n;
  }
  findScope(t) {
    return this._simulator.findScopes(t).filter((n) => this.isShown(n))[0];
  }
}
b(uc, "$inject", ["eventBus", "simulator"]);
function Ws(e, t) {
  do
    if (e === t)
      return !0;
  while (t = t.parent);
  return !1;
}
const vi = {
  scopeFilter: ["type", uc]
}, dc = getComputedStyle(document.documentElement), gp = dc.getPropertyValue("--token-simulation-green-base-44"), yp = dc.getPropertyValue("--token-simulation-white");
function bp() {
}
function Ep(e, t) {
  return t.length === 2 ? Cp : e === 1 ? Sp : e === t.length - 1 ? _p : wp;
}
const wp = function(e) {
  return e;
}, Sp = function(e) {
  return -Math.cos(e * Math.PI / 2) + 1;
}, _p = function(e) {
  return Math.sin(e * Math.PI / 2);
}, Cp = function(e) {
  return -Math.cos(e * Math.PI) / 2 + 0.5;
}, Zt = 20;
class fc {
  constructor(t, n, i, r) {
    b(this, "_eventBus");
    b(this, "_scopeFilter");
    b(this, "_canvas");
    b(this, "_randomize");
    b(this, "_animations");
    this._eventBus = i, this._scopeFilter = r, this._canvas = n, this._randomize = t && t.randomize !== !1, this._animations = /* @__PURE__ */ new Set(), i.on(["diagram.destroy", ut], () => {
      this.clearAnimations();
    }), i.on(Go, () => {
      this.pause();
    }), i.on(or, () => {
      this.play();
    }), i.on(yr, (o) => {
      this.each((s) => {
        this._scopeFilter.isShown(s.scope) ? s.show() : s.hide();
      });
    }), i.on(At, (o) => {
      const { scope: s } = o;
      this.clearAnimations(s);
    });
  }
  /**
   * 播放动画
   * (Animate token flow)
   *
   * @param {Connection} connection - 连线
   * @param {Scope} scope - 作用域
   * @param {Function} done - 完成回调
   */
  animate(t, n, i) {
    this.createAnimation(t, n, i);
  }
  pause() {
    this.each((t) => t.pause());
  }
  play() {
    this.each((t) => t.play());
  }
  each(t) {
    this._animations.forEach(t);
  }
  /**
   * 创建动画实例
   * (Create animation instance)
   *
   * @param {Connection} connection - 连线
   * @param {Scope} scope - 作用域
   * @param {Function} done - 完成回调
   *
   * @return {TokenAnimation} 动画实例
   */
  createAnimation(t, n, i = bp) {
    const r = this._getGroup(n);
    if (!r)
      return;
    const o = this._createTokenGfx(r, n), s = new kp(
      o,
      t.waypoints,
      this._randomize,
      () => {
        this._clearAnimation(s), i();
      }
    );
    return s.setSpeed(1), this._scopeFilter.isShown(n) || s.hide(), s.scope = n, s.element = t, this._animations.add(s), this._eventBus.fire(Wf, {
      animation: s
    }), s.play(), s;
  }
  // Remove setAnimationSpeed and getAnimationSpeed
  clearAnimations(t) {
    this.each((n) => {
      (!t || n.scope === t) && this._clearAnimation(n);
    });
  }
  _clearAnimation(t) {
    t.remove(), this._animations.delete(t);
  }
  _createTokenGfx(t, n) {
    const i = Ct(this._getTokenSVG(n).trim());
    return bo(i, t);
  }
  _getTokenSVG(t) {
    const n = gp, i = yp;
    return `
      <g class="bts-token">
        <circle
          class="bts-circle"
          r="${Zt / 2}"
          cx="${Zt / 2}"
          cy="${Zt / 2}"
          fill="${n}"
        />
        <path
          class="bts-icon"
          transform="translate(${Zt / 2 - 4}, ${Zt / 2 - 5})"
          d="M0 0 L8 5 L0 10 Z"
          fill="${i}"
        />
      </g>
    `;
  }
  _getGroup(t) {
    var n = this._canvas, i, r;
    "findRoot" in n ? (r = n.findRoot(t.element), i = n._findPlaneForRoot(r).layer) : i = We(".viewport", n._svg);
    var o = We(".bts-animation-tokens", i);
    return o || (o = Ct('<g class="bts-animation-tokens" />'), bo(o, i)), o;
  }
}
b(fc, "$inject", ["config.animation", "canvas", "eventBus", "scopeFilter"]);
class kp {
  constructor(t, n, i, r) {
    b(this, "gfx");
    b(this, "waypoints");
    b(this, "done");
    b(this, "randomize");
    b(this, "scope");
    b(this, "element");
    b(this, "_paused", !0);
    b(this, "_t", 0);
    b(this, "_parts", []);
    b(this, "_scheduled", !1);
    b(this, "_speed", 1);
    b(this, "_path");
    this.gfx = t, this.waypoints = n, this.done = r, this.randomize = i, this._paused = !0, this._t = 0, this._parts = [], this.create();
  }
  /**
   * 暂停动画
   * (Pause animation)
   */
  pause() {
    this._paused = !0;
  }
  /**
   * 播放动画
   * (Play animation)
   */
  play() {
    this._paused && (this._paused = !1, this.tick(0)), this.schedule();
  }
  /**
   * 调度动画帧
   * (Schedule animation frame)
   */
  schedule() {
    if (this._paused || this._scheduled)
      return;
    const t = Date.now();
    this._scheduled = !0, requestAnimationFrame(() => {
      this._scheduled = !1, !this._paused && (this.tick((Date.now() - t) * this._speed), this.schedule());
    });
  }
  /**
   * 动画帧处理
   * (Animation tick)
   *
   * @param {number} tElapsed - 逝去的时间
   */
  tick(t) {
    const n = this._t = this._t + t, i = this._parts, r = i[i.length - 1].endTime;
    if (n >= r) {
      const u = i[i.length - 1].endLength, f = this._path.getPointAtLength(u);
      return this.move(f.x, f.y), this.completed();
    }
    const o = i.find((c) => c.startTime <= n && c.endTime > n);
    if (!o)
      return this.completed();
    const s = n - o.startTime, a = o.length * o.easing(s / o.duration), l = o.startLength + a, d = this._path.getPointAtLength(l);
    this.move(d.x, d.y);
  }
  move(t, n) {
    qi(this.gfx, "transform", `translate(${t}, ${n})`);
  }
  /**
   * 创建 SVG 路径和动画参数
   * (Create SVG path and animation parameters)
   */
  create() {
    const t = this.waypoints, n = t.reduce((s, a, l) => {
      const d = t[l - 1];
      if (d) {
        const c = s[s.length - 1], u = c && c.endLength || 0, f = Op(d, a);
        s.push({
          startLength: u,
          endLength: u + f,
          length: f,
          easing: Ep(l, t)
        });
      }
      return s;
    }, []), i = n.reduce(function(s, a) {
      return s + a.length;
    }, 0), r = t.reduce((s, a, l) => {
      const d = a.x - Zt / 2, c = a.y - Zt / 2;
      return s.push([l > 0 ? "L" : "M", d, c]), s;
    }, []).flat().join(" "), o = Tp(i, this.randomize);
    this._parts = n.reduce((s, a, l) => {
      const d = o / i * a.length, c = l > 0 ? s[l - 1].endTime : 0, u = c + d;
      return [
        ...s,
        {
          ...a,
          startTime: c,
          endTime: u,
          duration: d
        }
      ];
    }, []), this._path = Ct(`<path d="${r}" />`), this._t = 0;
  }
  show() {
    qi(this.gfx, "display", "");
  }
  hide() {
    qi(this.gfx, "display", "none");
  }
  completed() {
    this.done();
  }
  remove() {
    this.pause(), rf(this.gfx);
  }
  setSpeed(t) {
    this._speed = t;
  }
}
function Tp(e, t = !1) {
  const n = Math.log(e) * (t ? Ap(250, 300) : 250), i = e * 1.2;
  return n + i;
}
function Ap(e, t) {
  return e + Math.floor(Math.random() * (t - e));
}
function Op(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
const Dp = {
  __depends__: [ac, vp, vi],
  animation: ["type", fc]
};
function Et(e, t, n = "") {
  return `<svg ${t ? `class="${t}" ` : ""}viewBox="0 0 24 24" ${n}>${e}</svg>`;
}
function Gs(e = void 0) {
  return Et('<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>', e);
}
function pc(e = void 0) {
  return Et('<path d="M8 5v14l11-7z"/>', e);
}
function hc(e = void 0) {
  return Et('<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>', e);
}
function _o(e = void 0) {
  return Et(
    '<path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>',
    e
  );
}
function Pp(e = void 0) {
  return Et(
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',
    e
  );
}
function Co(e = void 0) {
  return Et(
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
    e
  );
}
function Bp(e = void 0) {
  return Et(
    '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>',
    e
  );
}
function xp(e = void 0) {
  return Et(
    '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
    e
  );
}
function Ip(e = void 0) {
  return xp(e);
}
function Ks(e = void 0) {
  return Et('<path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/>', e);
}
function $p(e = void 0) {
  return Et(
    '<path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/><path d="M0 0h24v24H0z" fill="none"/>',
    e
  );
}
class mc {
  constructor(t, n, i, r) {
    b(this, "_active", !1);
    const o = this;
    t.on(Ye, function(s) {
      o._active = s.active;
    }), t.on(At, function(s) {
      const { scope: a, forced: l } = s;
      if (!o._active || l)
        return;
      const { destroyInitiator: d, element: c } = a;
      !a.completed || !d || !["bpmn:Process", "bpmn:Participant"].includes(c.type) || i.addElementNotification(d.element, {
        type: "success",
        icon: Co(),
        text: r("Finished"),
        i18nKey: "Finished",
        scope: a
      });
    });
  }
}
b(mc, "$inject", ["eventBus", "simulator", "elementNotifications", "translate"]);
const Rp = -15, Fp = 15;
class vc {
  constructor(t, n) {
    b(this, "_overlays");
    this._overlays = t;
    const i = this;
    n.on([ut, hn, Ye], function() {
      i.clear();
    });
  }
  /**
   * 添加元素通知
   * (Add element notification)
   *
   * @param {Element} element
   * @param {Object} options
   */
  addElementNotification(t, n) {
    const { text: i, type: r = "info", icon: o, ttl: s = 2e3 } = n, a = rt(`
      <div class="bts-element-notification ${r}">
        ${o ? `<span class="bts-icon">${o}</span>` : ""}
        <span class="bts-text">${i}</span>
      </div>
    `), l = this._overlays.add(t, "bts-element-notification", {
      position: {
        top: Rp,
        right: Fp
      },
      show: {
        minZoom: 0.5
      },
      html: a
    });
    s !== -1 && setTimeout(() => {
      this._overlays.remove(l);
    }, s);
  }
  /**
   * 清除所有通知
   * (Clear notifications)
   */
  clear() {
    this._overlays.remove({ type: "bts-element-notification" });
  }
}
b(vc, "$inject", ["overlays", "eventBus"]);
const gc = {
  __init__: ["elementNotifications"],
  elementNotifications: ["type", vc]
}, Mp = 2e3;
class yc {
  constructor(t, n, i, r) {
    b(this, "container");
    b(this, "_interceptors", []);
    this._eventBus = t, this._canvas = n, this._scopeFilter = i, this._translate = r;
    try {
      this._init();
    } catch (o) {
      console.error("Notifications init failed", o);
    }
    this._eventBus.on(["i18n.changed", "simpleTokenSimulation.config.changed"], () => {
      this._updateTexts();
    });
  }
  registerInterceptor(t) {
    this._interceptors.push(t);
  }
  _init() {
    this.container = rt('<div class="bts-notifications"></div>'), this._canvas.getContainer().appendChild(this.container);
  }
  _updateTexts() {
    if (!this.container) return;
    const t = this.container.querySelectorAll(
      ".bts-notification .bts-text[data-i18n-key]"
    );
    for (const n of Array.from(t)) {
      const i = n, r = i.dataset.i18nKey;
      if (r) {
        const o = this._translate(r);
        i.textContent = o, i.title = o;
      }
    }
  }
  /**
   * 显示通知
   * (Show notification)
   */
  showNotification(t) {
    for (const h of this._interceptors) {
      const g = h(t);
      if (g === !1) return;
      g && (t = g);
    }
    const {
      text: n,
      type: i = "info",
      icon: r,
      scope: o,
      ttl: s = Mp,
      i18nKey: a,
      details: l
    } = t;
    if (o && !this._scopeFilter.isShown(o) || !this.container) return;
    this.clear();
    const d = r || "", c = d.startsWith("<") ? d : `<i class="${d}"></i>`, u = o && o.colors, f = u ? `style="color: ${u.auxiliary}; background: ${u.primary}"` : "", E = rt(`
      <div class="bts-notification ${i}">
        <span class="bts-icon">${c}</span>
        <span class="bts-text" title="${n}" ${a ? `data-i18n-key="${a}"` : ""}>${n}${l || ""}</span>
        ${t.slot ? `<span class="bts-scope bts-slot" ${f}>${t.slot}</span>` : ""}
      </div>
    `);
    this.container.appendChild(E), setTimeout(() => {
      E.classList.add("hidden"), setTimeout(() => {
        E.parentNode && E.remove();
      }, 500);
    }, s);
  }
  /**
   * 清除所有通知
   * (Clear all notifications)
   */
  clear() {
    if (this.container)
      for (; this.container.children.length; )
        this.container.children[0].remove();
  }
}
b(yc, "$inject", ["eventBus", "canvas", "scopeFilter", "translate"]);
const $n = {
  __depends__: [vi],
  notifications: ["type", yc]
}, Np = {
  __depends__: [gc, $n],
  __init__: ["simulationState"],
  simulationState: ["type", mc]
};
class bc {
  constructor(t, n, i) {
    b(this, "_eventBus");
    b(this, "_canvas");
    b(this, "_scopeFilter");
    b(this, "_highlight");
    b(this, "_container");
    this._eventBus = t, this._canvas = n, this._scopeFilter = i, this._highlight = null, this._init();
    const r = this;
    t.on(Ye, function(o) {
      o.active ? fe(r._container).remove("hidden") : (fe(r._container).add("hidden"), Vf(r._container), r.unhighlightScope());
    }), t.on(yr, function(o) {
      const s = r.getScopeElements();
      for (const a of s) {
        const l = a.dataset.scopeId;
        l && (fe(a).toggle("inactive", !r._scopeFilter.isShown(l)), fe(a).toggle("focussed", r._scopeFilter.isFocused(l)));
      }
    }), t.on(hn, function(o) {
      r.addScope(o.scope);
    }), t.on(At, function(o) {
      r.removeScope(o.scope);
    }), t.on(Ko, function(o) {
      r.updateScope(o.scope);
    }), t.on(ut, function() {
      r.removeAllInstances();
    });
  }
  _init() {
    this._container = rt('<div class="bts-scopes hidden"></div>'), this._canvas.getContainer().appendChild(this._container);
  }
  addScope(t) {
    const n = ["bpmn:Process", "bpmn:SubProcess", "bpmn:Participant"], { element: i } = t;
    if (!an(i, n))
      return;
    const r = rt(`
      <div data-scope-id="${t.id}" class="bts-scope"
           title="Focus process instance ${t.id}">
        ${t.getTokens()}
      </div>
    `);
    kt.bind(r, "click", () => {
      this._scopeFilter.toggle(t);
    }), kt.bind(r, "mouseenter", () => {
      this.highlightScope(i);
    }), kt.bind(r, "mouseleave", () => {
      this.unhighlightScope();
    }), this._scopeFilter.isShown(t) || fe(r).add("inactive"), fe(r).toggle("focussed", this._scopeFilter.isFocused(t)), this._container.appendChild(r);
  }
  getScopeElements() {
    return Dl("[data-scope-id]", this._container);
  }
  getScopeElement(t) {
    return We(`[data-scope-id="${t.id}"]`, this._container);
  }
  updateScope(t) {
    const n = this.getScopeElement(t);
    n && (n.textContent = t.getTokens());
  }
  removeScope(t) {
    const n = this.getScopeElement(t);
    n && n.remove();
  }
  removeAllInstances() {
    this._container.innerHTML = "";
  }
  highlightScope(t) {
    this.unhighlightScope(), this._highlight = t, this._canvas.addMarker(t, "token-simulation-scope-highlight"), t.parent || fe(this._canvas.getContainer()).add("highlight");
  }
  unhighlightScope() {
    if (!this._highlight)
      return;
    const t = this._highlight;
    this._canvas.removeMarker(t, "token-simulation-scope-highlight"), t.parent || fe(this._canvas.getContainer()).remove("highlight"), this._highlight = null;
  }
}
b(bc, "$inject", ["eventBus", "canvas", "scopeFilter"]);
const Lp = {
  __depends__: [vi],
  __init__: ["showScopes"],
  showScopes: ["type", bc]
}, jp = {
  copy: "fbpmn-icon-copy-service-task",
  sc: "fbpmn-icon-sc-service-task",
  dubbo: "fbpmn-icon-dubbo-service-task",
  dmn: "fbpmn-icon-dmn-service-task",
  dmnservice: "fbpmn-icon-decision-service-task",
  ai: "fbpmn-icon-ai-service-task",
  mq: "fbpmn-icon-mq-service-task",
  mqtt: "fbpmn-icon-mqtt-service-task",
  mcp: "fbpmn-icon-mcp-service-task",
  rest: "fbpmn-icon-rest-service-task",
  http: "fbpmn-icon-http-service-task",
  email: "fbpmn-icon-mail-service-task",
  camel: "fbpmn-icon-camel-service-task",
  shell: "ibpmn-icon-shell-service-task",
  ws: "ibpmn-icon-ws-service-task"
}, zp = {
  copy: "Copy Service Task",
  sc: "Sc Service Task",
  dubbo: "Dubbo Service Task",
  dmn: "Dmn Service Task",
  dmnservice: "Decision Service Task",
  ai: "Ai Service Task",
  mq: "Mq Service Task",
  mqtt: "Mqtt Service Task",
  mcp: "Mcp Service Task",
  rest: "Rest Service Task",
  http: "Http Service Task",
  email: "Email Service Task",
  camel: "Camel Service Task",
  shell: "Shell Service Task",
  ws: "Web Service Task",
  sql: "SQL Service Task"
};
function Ec(e) {
  return qt(e, "bpmn:ErrorEventDefinition");
}
function wc(e) {
  if (!e)
    return;
  if (typeof e.get("timeDate") < "u")
    return "timeDate";
  if (typeof e.get("timeCycle") < "u")
    return "timeCycle";
  if (typeof e.get("timeDuration") < "u")
    return "timeDuration";
}
function Sc(e) {
  return qt(e, "bpmn:TimerEventDefinition");
}
function qt(e, t) {
  return ($e(e).get("eventDefinitions") || []).find((r) => D(r, t));
}
function _c(e) {
  return D(e, "bpmn:ReceiveTask") ? $e(e) : qt(e, "bpmn:MessageEventDefinition");
}
function Cc(e) {
  return qt(e, "bpmn:SignalEventDefinition");
}
function kn(e) {
  return qt(e, "bpmn:ConditionalEventDefinition");
}
function kc(e) {
  return qt(e, "bpmn:EscalationEventDefinition");
}
function Vp(e) {
  return qt(e, "bpmn:CompensateEventDefinition");
}
function Up(e) {
  return qt(e, "bpmn:TerminateEventDefinition");
}
function rs(e) {
  return vr(
    $e(e),
    "flowable:VariableListenerEventDefinition"
  )[0];
}
function Hp(e) {
  return gr(e, "Field");
}
function zn(e, t) {
  const n = gr(e, t);
  return n && n.length > 0 ? n[0] : void 0;
}
function Ii(e, t, n = {}) {
  const i = Hp(e), r = t.reduce((s, a) => {
    const [l, d = "string"] = a.split(".");
    return s[l] = d, s;
  }, {}), o = {};
  for (const s of i) {
    const a = s.name;
    if (r[a]) {
      const l = n[a];
      if (l)
        o[a] = l(s);
      else {
        const d = r[a];
        o[a] = s[d];
      }
    }
  }
  return o;
}
function Ys(e) {
  return e && e.body || "";
}
function qp(e) {
  const t = e.businessObject;
  if (D(t, "bpmn:SequenceFlow"))
    return t.conditionExpression;
  if (kn(t))
    return kn(t).condition;
}
function Wp(e, t) {
  const n = $e(e), i = [];
  if (D(e, "bpmn:ServiceTask")) {
    const u = n.type;
    if (!u)
      return "";
    switch (u) {
      case "http": {
        const f = Ii(n, ["requestUrl", "requestMethod"]);
        f.requestMethod && i.push(`Method: ${f.requestMethod}`), f.requestUrl && i.push(`URL: ${f.requestUrl}`);
        break;
      }
      case "email": {
        const f = Ii(n, ["to.expression", "subject", "html.expression"]);
        f.to && i.push(`To: ${f.to}`), f.subject && i.push(`Subject: ${f.subject}`);
        break;
      }
      case "ws":
      case "sc":
      case "dubbo":
      case "rest":
      case "sql": {
        const f = Ii(n, ["apiName"]);
        f.apiName && i.push(`API: ${f.apiName}`);
        break;
      }
      case "copy": {
        const f = zn(n, "TransferToUsers"), E = f && f.body;
        if (E)
          try {
            const h = JSON.parse(E).map((g) => g.name).join(",");
            i.push(`${t("CC")}: ${h}`);
          } catch {
            i.push(`${t("CC")}: ${E}`);
          }
        break;
      }
      case "dmn": {
        const f = Ii(n, ["decisionTableReferenceName"]);
        f.decisionTableReferenceName && i.push(`DMN: ${f.decisionTableReferenceName}`);
        break;
      }
    }
  }
  if (D(e, "bpmn:ScriptTask") && n.scriptFormat && i.push(`Format: ${n.scriptFormat}`), D(e, "bpmn:UserTask")) {
    if (n.assignee === "${starterCode}")
      i.push(`${t("Assignee")}: ${t("Starter")}`);
    else {
      const g = zn(n, "StaticAssigneeVariables"), C = zn(n, "IdmAssignee");
      let m = "";
      if (g && g.body)
        try {
          const _ = JSON.parse(g.body);
          Array.isArray(_) && _.length > 0 && (m = _.map((O) => O.name || O.value).join(","));
        } catch (_) {
          console.error("Parse StaticAssigneeVariables failed", _);
        }
      else if (C && C.body)
        try {
          const _ = JSON.parse(C.body);
          Array.isArray(_) && _.length > 0 && (m = _.map((O) => O.name || O.code || O.username).join(","));
        } catch (_) {
          console.error("Parse IdmAssignee failed", _);
        }
      m && i.push(`${t("Assignee")}: ${m}`);
    }
    const u = zn(n, "IdmCandidateUsers");
    let f = "";
    if (u && u.body)
      try {
        const g = JSON.parse(u.body);
        Array.isArray(g) && g.length > 0 && (f = g.map((C) => C.name || C.username || C.code || C.value).join(","));
      } catch (g) {
        console.error("Parse IdmCandidateUsers failed", g);
      }
    f && i.push(`${t("Candidate Users")}: ${f}`);
    const E = zn(n, "IdmCandidateGroups");
    let h = "";
    if (E && E.body)
      try {
        const g = JSON.parse(E.body);
        Array.isArray(g) && g.length > 0 && (h = g.map((C) => C.name || C.sn).join(","));
      } catch (g) {
        console.error("Parse IdmCandidateGroups failed", g);
      }
    h && i.push(`${t("Candidate Groups")}: ${h}`);
  }
  if (D(e, "bpmn:CallActivity") && n.calledElement && i.push(`Called: ${n.calledElement}`), D(e, "bpmn:SequenceFlow")) {
    const u = qp(e), f = u && u.body;
    f && i.push(`Cond: ${f}`);
  }
  const r = Ec(e);
  if (r) {
    const u = r.errorRef;
    u && u.name && i.push(`Error: ${u.name}`);
  }
  const o = Cc(e);
  if (o) {
    const u = o.signalRef;
    u && u.name && i.push(`Signal: ${u.name}`);
  }
  const s = _c(e);
  if (s) {
    const u = s.messageRef;
    u && u.name && i.push(`Message: ${u.name}`);
  }
  const a = kc(e);
  if (a) {
    const u = a.escalationRef;
    u && u.name && i.push(`Escalation: ${u.name}`);
  }
  const l = Sc(e);
  if (l) {
    const u = wc(l);
    if (u) {
      const f = Ys(l[u]);
      f && i.push(`Timer: ${f}`);
    }
  }
  const d = rs(e);
  d && d.variableName && i.push(`Var: ${d.variableName}`);
  const c = kn(e);
  if (c) {
    const u = Ys(c.condition);
    u && i.push(`Condition: ${u}`);
  }
  return i.length > 0 ? i.map(
    (u) => `<span class="bts-detail">${u}</span>`
  ).join("") : "";
}
const Gp = Pp();
function Yr(e) {
  const t = e && e.businessObject.name;
  return t && r0(t);
}
function Xr(e, t) {
  const n = ko(e);
  return n === "none" ? "bpmn-icon-intermediate-event-none" : `bpmn-icon-intermediate-event-${t}-${n}`;
}
function ko(e) {
  const t = $e(e), n = gr(
    t,
    "VariableListenerEventDefinition"
  );
  if (n && n.length)
    return "multiple";
  if (t.get("eventDefinitions").length === 0)
    return "none";
  const i = t.eventDefinitions[0];
  return D(i, "bpmn:MessageEventDefinition") ? "message" : D(i, "bpmn:TimerEventDefinition") ? "timer" : D(i, "bpmn:SignalEventDefinition") ? "signal" : D(i, "bpmn:ErrorEventDefinition") ? "error" : D(i, "bpmn:EscalationEventDefinition") ? "escalation" : D(i, "bpmn:CompensateEventDefinition") ? "compensation" : D(i, "bpmn:ConditionalEventDefinition") ? "condition" : D(i, "bpmn:LinkEventDefinition") ? "link" : D(i, "bpmn:CancelEventDefinition") ? "cancel" : D(i, "bpmn:TerminateEventDefinition") ? "terminate" : "none";
}
class Tc {
  constructor(t, n, i, r, o, s, a, l) {
    b(this, "_notifications");
    b(this, "_tokenSimulationPalette");
    b(this, "_canvas");
    b(this, "_eventBus");
    b(this, "_scopeFilter");
    b(this, "_translate");
    b(this, "_showLabel");
    b(this, "_container");
    b(this, "_placeholder");
    b(this, "_content");
    b(this, "_close");
    b(this, "_icon");
    b(this, "paletteEntry");
    b(this, "_interceptors", []);
    this._notifications = n, this._tokenSimulationPalette = i, this._canvas = r, this._eventBus = t, this._scopeFilter = o, this._translate = a;
    const d = l || {};
    this._showLabel = d.showLabel !== !1, this._init();
    const c = this;
    t.on(yr, function(u) {
      const f = Dl(".bts-entry[data-scope-id]", c._container);
      for (const E of f) {
        const h = E.dataset.scopeId;
        fe(E).toggle("inactive", !c._scopeFilter.isShown(h));
      }
    }), t.on(At, function(u) {
      const { scope: f, forced: E } = u;
      if (E)
        return;
      const { element: h } = f, g = f.completed;
      if (!an(h, ["bpmn:Process", "bpmn:Participant", "bpmn:SubProcess"]))
        return;
      const _ = `${D(h, "bpmn:SubProcess") ? Yr(h) || c._translate("SubProcess") : c._translate("Process")} ${g ? c._translate("finished") : c._translate("canceled")}`;
      c.log({
        text: _,
        icon: g ? Co() : Bp(),
        scope: f,
        scopeElement: h
      });
    }), t.on(hn, function(u) {
      const { scope: f } = u, { element: E } = f;
      if (!an(E, ["bpmn:Process", "bpmn:Participant", "bpmn:SubProcess"]))
        return;
      const C = `${D(E, "bpmn:SubProcess") ? Yr(E) || c._translate("SubProcess") : c._translate("Process")} ${c._translate("started")}`;
      c.log({
        text: C,
        icon: Co(),
        scope: f,
        scopeElement: E
      });
    }), t.on(br, function(u) {
      const { action: f, scope: E, element: h } = u;
      if (f !== "exit")
        return;
      const g = E.parent, C = Yr(h), m = Wp(h, c._translate);
      if (D(h, "bpmn:ServiceTask")) {
        const _ = h.businessObject.type;
        return c.log({
          text: C || _ && zp[_] || c._translate("Service Task"),
          icon: _ && jp[_] || "bpmn-icon-service",
          scope: g,
          details: m,
          element: h
        });
      }
      if (D(h, "bpmn:UserTask"))
        return c.log({
          text: C || c._translate("User Task"),
          icon: "bpmn-icon-user",
          scope: g,
          details: m,
          element: h
        });
      if (D(h, "bpmn:CallActivity"))
        return c.log({
          text: C || c._translate("Call Activity"),
          icon: "bpmn-icon-call-activity",
          scope: g,
          details: m,
          element: h
        });
      if (D(h, "bpmn:ScriptTask"))
        return c.log({
          text: C || c._translate("Script Task"),
          icon: "bpmn-icon-script",
          scope: g,
          details: m,
          element: h
        });
      if (D(h, "bpmn:BusinessRuleTask"))
        return c.log({
          text: C || c._translate("Business Rule Task"),
          icon: "bpmn-icon-business-rule",
          scope: g,
          element: h
        });
      if (D(h, "bpmn:ManualTask"))
        return c.log({
          text: C || c._translate("Manual Task"),
          icon: "bpmn-icon-manual-task",
          scope: g,
          element: h
        });
      if (D(h, "bpmn:ReceiveTask"))
        return c.log({
          text: C || c._translate("Receive Task"),
          icon: "bpmn-icon-receive",
          scope: g,
          element: h
        });
      if (D(h, "bpmn:SendTask"))
        return c.log({
          text: C || c._translate("Send Task"),
          icon: "bpmn-icon-send",
          scope: g,
          element: h
        });
      if (D(h, "bpmn:Task"))
        return c.log({
          text: C || c._translate("Task"),
          icon: "bpmn-icon-task",
          scope: g,
          element: h
        });
      if (D(h, "bpmn:ExclusiveGateway"))
        return c.log({
          text: C || c._translate("Exclusive Gateway"),
          icon: "bpmn-icon-gateway-xor",
          scope: g,
          element: h
        });
      if (D(h, "bpmn:ParallelGateway"))
        return c.log({
          text: C || c._translate("Parallel Gateway"),
          icon: "bpmn-icon-gateway-parallel",
          scope: g,
          element: h
        });
      if (D(h, "bpmn:InclusiveGateway"))
        return c.log({
          text: C || c._translate("Inclusive Gateway"),
          icon: "bpmn-icon-gateway-or",
          scope: g,
          element: h
        });
      if (D(h, "bpmn:StartEvent"))
        return c.log({
          text: C || c._translate("Start Event"),
          icon: `bpmn-icon-start-event-${ko(h)}`,
          scope: g,
          details: m
        });
      if (D(h, "bpmn:IntermediateCatchEvent"))
        return c.log({
          text: C || c._translate("Intermediate Event"),
          icon: Xr(h, "catch"),
          scope: g,
          details: m,
          element: h
        });
      if (D(h, "bpmn:IntermediateThrowEvent"))
        return c.log({
          text: C || c._translate("Intermediate Event"),
          icon: Xr(h, "throw"),
          scope: g,
          details: m,
          element: h
        });
      if (D(h, "bpmn:BoundaryEvent"))
        return c.log({
          text: C || c._translate("Boundary Event"),
          icon: Xr(h, "catch"),
          scope: g,
          details: m,
          element: h
        });
      if (D(h, "bpmn:EndEvent"))
        return c.log({
          text: C || c._translate("End Event"),
          icon: `bpmn-icon-end-event-${ko(h)}`,
          scope: g,
          details: m,
          element: h
        });
    }), t.on(Ye, function(u) {
      c.clear(), u.active ? c.toggle(!0) : c.toggle(!1);
    }), t.on(ut, function() {
      c.clear();
    }), t.on(["i18n.changed", "simpleTokenSimulation.config.changed"], function() {
      c._updateTexts();
    });
  }
  registerInterceptor(t) {
    this._interceptors.push(t);
  }
  /**
   * 更新界面文本 (i18n)
   * (Update UI texts)
   */
  _updateTexts() {
    if (this.paletteEntry) {
      const t = this.paletteEntry.querySelector(".bts-text");
      t && (t.textContent = this._translate("Simulation Log")), this.paletteEntry.title = this._translate("Toggle Simulation Log");
    }
    if (this._container) {
      const t = We(".bts-header .bts-title", this._container);
      t && (t.textContent = this._translate("Simulation Log"));
      const n = We(".bts-close", this._container);
      n && n.setAttribute("aria-label", this._translate("Close")), this._placeholder && (this._placeholder.textContent = this._translate("No Entries"));
    }
  }
  /**
   * 初始化日志界面
   * (Initialize Log UI)
   */
  _init() {
    this._container = rt(`
      <div class="bts-log hidden djs-scrollable">
        <div class="bts-header">
          ${Ks("bts-log-icon")}
          <span class="bts-title">${this._translate("Simulation Log")}</span>
          <button class="bts-close" title="${this._translate("Close Log")}" aria-label="${this._translate("Close")}">
            ${Ip("bts-log-icon")}
          </button>
        </div>
        <div class="bts-content">
          <p class="bts-entry placeholder">${this._translate("No Entries")}</p>
        </div>
      </div>
    `), this._placeholder = We(".bts-entry.placeholder", this._container), this._content = We(".bts-content", this._container), kt.bind(this._container, "mousedown", (n) => {
      n.stopPropagation();
    }), kt.bind(this._container, "wheel", (n) => {
      n.stopPropagation();
    }), this._close = We(".bts-close", this._container), kt.bind(this._close, "click", () => {
      this.toggle(!1);
    }), this._icon = We(".bts-log-icon", this._container), this._canvas.getContainer().appendChild(this._container);
    const t = this._showLabel ? `<span class="bts-text">${this._translate("Simulation Log")}</span>` : "";
    this.paletteEntry = rt(`
      <div class="bts-entry" title="${this._translate("Toggle Simulation Log")}">
        <span class="bts-icon bts-icon-log">${Ks()}</span>
        <span class="bts-icon bts-icon-log-slash hidden">${$p()}</span>
        ${t}
      </div>
    `), kt.bind(this.paletteEntry, "click", () => {
      this.toggle();
    }), this._tokenSimulationPalette.addEntry(this.paletteEntry, 3);
  }
  /**
   * 检查日志面板是否显示
   * (Check if log is shown)
   *
   * @return {Boolean}
   */
  isShown() {
    const t = this._container;
    return !fe(t).has("hidden");
  }
  /**
   * 切换日志面板显示状态
   * (Toggle log visibility)
   *
   * @param {Boolean} [shown] - 目标状态
   */
  toggle(t = !this.isShown()) {
    const n = this._container, i = this.paletteEntry;
    if (t) {
      if (fe(n).remove("hidden"), i) {
        fe(i).add("active");
        const r = We(".bts-icon-log", i), o = We(".bts-icon-log-slash", i), s = We(".bts-text", i);
        r && fe(r).add("hidden"), o && fe(o).remove("hidden"), s && (s.textContent = this._translate("Hide Simulation Log")), i.title = this._translate("Hide Simulation Log");
      }
    } else if (fe(n).add("hidden"), i) {
      fe(i).remove("active");
      const r = We(".bts-icon-log", i), o = We(".bts-icon-log-slash", i), s = We(".bts-text", i);
      r && fe(r).remove("hidden"), o && fe(o).add("hidden"), s && (s.textContent = this._translate("Show Simulation Log")), i.title = this._translate("Show Simulation Log");
    }
  }
  /**
   * 记录日志条目
   * (Log an entry)
   *
   * @param {Object} options - 日志选项
   * @param {String} options.text - 文本内容
   * @param {String} [options.type='info'] - 类型
   * @param {String} [options.icon] - 图标
   * @param {Scope} [options.scope] - 相关作用域
   */
  log(t) {
    for (const h of this._interceptors) {
      const g = h(t);
      if (g === !1) return;
      g && (t = g);
    }
    const { text: n, type: i = "info", icon: r = Gp, scope: o, details: s } = t, a = this._content;
    fe(this._placeholder).add("hidden"), this.isShown() || this._notifications.showNotification(t);
    const l = r.startsWith("<") ? r : `<i class="${r}"></i>`, d = !!r, c = !!s, u = !!t.slot, f = rt(`
      <div class="bts-entry bts-timeline-entry ${i} ${o && this._scopeFilter.isShown(o) ? "" : "inactive"}" ${o ? `data-scope-id="${o.id}"` : ""}>
        <div class="bts-timeline-node">
          <span class="bts-timeline-dot"></span>
          <span class="bts-timeline-line"></span>
        </div>
        <div class="bts-timeline-body">
          <div class="bts-timeline-row bts-timeline-title">
            ${d ? `<span class="bts-icon">${l}</span>` : ""}
            <span class="bts-text" title="${n}">${n}</span>
          </div>
          ${c ? `<div class="bts-timeline-row bts-timeline-details">${s}</div>` : ""}
          ${u ? `<div class="bts-timeline-row bts-timeline-slot"><div class="bts-slot-scroll">${t.slot}</div></div>` : ""}
        </div>
      </div>
    `), E = Math.abs(a.clientHeight + a.scrollTop - a.scrollHeight) < 2;
    a.appendChild(f), a.childElementCount > 100 && a.removeChild(a.firstChild), E && (a.scrollTop = a.scrollHeight);
  }
  /**
   * 清空日志
   * (Clear log)
   */
  clear() {
    for (; this._content.firstChild; )
      this._content.removeChild(this._content.firstChild);
    this._placeholder = rt(
      `<p class="bts-entry placeholder">${this._translate("No Entries")}</p>`
    ), this._content.appendChild(this._placeholder);
  }
}
b(Tc, "$inject", [
  "eventBus",
  "notifications",
  "tokenSimulationPalette",
  "canvas",
  "scopeFilter",
  "simulator",
  "translate",
  "config.simpleTokenSimulation"
]);
const Kp = {
  __depends__: [$n, vi],
  __init__: ["log"],
  log: ["type", Tc]
}, Yp = ["bpmn:ComplexGateway"];
function Xp(e) {
  return e.labelTarget;
}
class Ac {
  constructor(t, n, i, r, o) {
    b(this, "_eventBus");
    b(this, "_elementRegistry");
    b(this, "_elementNotifications");
    b(this, "_notifications");
    b(this, "_canvasParent");
    b(this, "_unsupportedElements", []);
    this._eventBus = t, this._elementRegistry = n, this._elementNotifications = o, this._notifications = r, this._canvasParent = i.getContainer().parentNode;
    const s = this;
    t.on(Ye, function(a) {
      a.active ? s.enable() : s.clear();
    });
  }
  getUnsupportedElements() {
    return this._unsupportedElements;
  }
  enable() {
    const t = [];
    this._elementRegistry.forEach((n) => {
      Xp(n) || an(n, Yp) && (this.showWarning(n), t.push(n));
    }), t.length && this._notifications.showNotification({
      text: "Found unsupported elements",
      icon: Gs(),
      type: "warning",
      ttl: 5e3
    }), this._unsupportedElements = t;
  }
  clear() {
    fe(this._canvasParent).remove("warning");
  }
  showWarning(t) {
    this._elementNotifications.addElementNotification(t, {
      type: "warning",
      icon: Gs(),
      text: "Not supported"
    });
  }
}
b(Ac, "$inject", [
  "eventBus",
  "elementRegistry",
  "canvas",
  "notifications",
  "elementNotifications"
]);
const Jp = {
  __depends__: [gc, $n],
  __init__: ["elementSupport"],
  elementSupport: ["type", Ac]
}, Zp = pc(), Qp = hc(), Xs = 1500;
class Oc {
  constructor(t, n, i, r, o, s, a) {
    b(this, "_eventBus");
    b(this, "_notifications");
    b(this, "_translate");
    b(this, "_simulator");
    b(this, "_elementRegistry");
    b(this, "_resetSimulation");
    b(this, "_canvasParent");
    /** 是否处于激活态（模拟模式开启中） */
    b(this, "_isActive", !1);
    /** 是否处于暂停态 */
    b(this, "_isPaused", !0);
    /** 模拟是否已启动过（用于完成检测） */
    b(this, "_hasStarted", !1);
    /** 模拟是否已完成 */
    b(this, "_isFinished", !1);
    /** 防止 play → triggerStart → SCOPE_CREATE → play 递归 */
    b(this, "_isStarting", !1);
    this._eventBus = t, this._notifications = n, this._translate = r, this._simulator = o, this._elementRegistry = s, this._resetSimulation = a, this._canvasParent = i.getContainer().parentNode, t.on(hn, Xs, () => {
      this._hasStarted = !0, this._isFinished = !1, this._activate(), this._isPaused && (this._isPaused = !1, fe(this._canvasParent).remove("paused"), this._eventBus.fire(or));
    }), t.on([ut, Ye], 1e4, () => {
      this._deactivate();
    }), t.on(br, Xs, () => {
      this._isActive && this.play();
    }), t.on([Ko, At], () => {
      setTimeout(() => this._checkFinished(), 0);
    });
  }
  // ─── 公开 API ────────────────────────────────────
  /**
   * 播放按钮点击的统一入口
   * 内部转交 toggle()，依靠其内部强大的 play() 将自动分发重启、启动或是恢复动画。
   */
  playOrToggle() {
    this.toggle();
  }
  /**
   * 切换暂停/播放状态
   */
  toggle() {
    this._isPaused || this._isFinished ? this.play() : this.pause();
  }
  /**
   * 播放/恢复模拟
   *
   * 可直接调用，会自动激活模拟状态。
   * 若模拟未启动则自动触发启动；若已在播放中则跳过。
   */
  play() {
    if (this._activate(), (!this._hasStarted || this._isFinished) && !this._isStarting) {
      this._isStarting = !0;
      try {
        this._isFinished ? this.restart() : this.triggerStart();
      } finally {
        this._isStarting = !1;
      }
      return;
    }
    this._isPaused && (fe(this._canvasParent).remove("paused"), this._eventBus.fire(or), this._notifications.showNotification({
      text: this._translate("Simulation Resumed"),
      i18nKey: "Simulation Resumed",
      icon: Zp
    }), this._isPaused = !1);
  }
  /**
   * 暂停模拟
   *
   * 仅在已激活且正在播放时生效。
   */
  pause() {
    !this._isActive || this._isPaused || (fe(this._canvasParent).add("paused"), this._eventBus.fire(Go), this._notifications.showNotification({
      text: this._translate("Simulation Paused"),
      i18nKey: "Simulation Paused",
      icon: Qp
    }), this._isPaused = !0);
  }
  /**
   * 触发启动（自动寻找第一个开始事件）
   */
  triggerStart() {
    const t = this._elementRegistry.filter((n) => D(n, "bpmn:StartEvent") && (D(n.parent, "bpmn:Process") || D(n.parent, "bpmn:Participant")));
    if (t.length) {
      const n = t[0], i = this._simulator.findSubscriptions({ element: n });
      i.length && this._simulator.trigger({
        event: i[0].event,
        scope: i[0].scope
      });
    }
  }
  /**
   * 重启模拟（先重置再启动）
   */
  restart() {
    this._resetSimulation.resetSimulation(), setTimeout(() => {
      this.triggerStart();
    }, 100);
  }
  /**
   * 模拟是否已完成
   */
  get isFinished() {
    return this._isFinished;
  }
  // ─── 私有方法 ────────────────────────────────────
  /**
   * 激活模拟状态
   */
  _activate() {
    this._isActive = !0;
  }
  /**
   * 停用模拟状态并重置所有标记
   */
  _deactivate() {
    this._isActive = !1, this._isPaused = !0, this._hasStarted = !1, this._isFinished = !1, fe(this._canvasParent).remove("paused");
  }
  /**
   * 检测模拟是否已完成
   *
   * 完成条件：
   * 1. 存在运行中的 scope
   * 2. 所有运行中的 scope 都是根 scope（无活跃的子任务）
   * 3. 所有根 scope 没有子节点
   */
  _checkFinished() {
    if (!this._hasStarted)
      return;
    const t = this._simulator.findScopes((r) => !r.destroyed), n = t.filter((r) => !r.parent);
    t.length > 0 && t.length === n.length && n.every((r) => r.children.length === 0) && (this._isFinished = !0, this._hasStarted = !1, this._eventBus.fire(Bl));
  }
}
b(Oc, "$inject", [
  "eventBus",
  "notifications",
  "canvas",
  "translate",
  "simulator",
  "elementRegistry",
  "resetSimulation"
]);
class Dc {
  constructor(t, n, i, r) {
    b(this, "_eventBus");
    b(this, "_notifications");
    b(this, "_translate");
    b(this, "_showLabel");
    b(this, "_active", !1);
    this._eventBus = t, this._notifications = n, this._translate = i;
    const o = r || {};
    this._showLabel = o.showLabel !== !1, t.on(Ye, (s) => {
      this._active = s.active, this._active || this._eventBus.fire(ut);
    });
  }
  /**
   * 重置模拟
   * (Reset simulation)
   */
  resetSimulation() {
    this._eventBus.fire(ut), this._notifications.showNotification({
      text: this._translate("Simulation Reset"),
      i18nKey: "Simulation Reset",
      icon: _o()
    });
  }
}
b(Dc, "$inject", ["eventBus", "notifications", "translate", "config.simpleTokenSimulation"]);
const Pc = {
  __depends__: [$n],
  __init__: ["resetSimulation"],
  resetSimulation: ["type", Dc]
}, e1 = {
  __depends__: [$n, Pc],
  __init__: ["pauseSimulation"],
  pauseSimulation: ["type", Oc]
};
function t1(e, t) {
  var n = e.outgoing.filter(Wi), i = n.indexOf(t || e.sequenceFlow);
  return n[i + 1] ? n[i + 1] : n[0];
}
function Wi(e) {
  return D(e, "bpmn:SequenceFlow");
}
class Bc {
  constructor(t, n, i, r) {
    b(this, "_elementRegistry");
    b(this, "_canvas");
    b(this, "_simulator");
    this._elementRegistry = n, this._canvas = i, this._simulator = r;
    const o = this;
    t.on(Ye, function(s) {
      s.active ? o.setSequenceFlowsDefault() : o.resetSequenceFlows();
    });
  }
  setSequenceFlowsDefault() {
    const t = this._elementRegistry.filter((n) => D(n, "bpmn:ExclusiveGateway"));
    for (const n of t)
      this.setSequenceFlow(n);
  }
  resetSequenceFlows() {
    this._elementRegistry.filter((n) => D(n, "bpmn:ExclusiveGateway")).forEach((n) => {
      n.outgoing.filter(Wi).length && this.resetSequenceFlow(n);
    });
  }
  resetSequenceFlow(t) {
    this._simulator.setConfig(t, { activeOutgoing: void 0 });
  }
  setSequenceFlow(t) {
    const n = t.outgoing.filter(Wi);
    if (n.length < 2)
      return;
    const { activeOutgoing: i } = this._simulator.getConfig(t);
    let r;
    if (i)
      r = t1(t, i);
    else {
      const o = t.businessObject.default;
      o && (r = n.find((s) => s.businessObject === o)), r || (r = n[0]);
    }
    this._simulator.setConfig(t, { activeOutgoing: r }), t.outgoing.forEach((o) => {
      o === r ? this._canvas.addMarker(o, "token-simulation-gateway-selected") : this._canvas.removeMarker(o, "token-simulation-gateway-selected");
    });
  }
  setSequenceFlowTo(t, n) {
    if (!t.outgoing.filter(Wi).includes(n))
      throw new Error("flow is not outgoing from gateway");
    this._simulator.setConfig(t, { activeOutgoing: n }), t.outgoing.forEach((r) => {
      r === n ? this._canvas.addMarker(r, "token-simulation-gateway-selected") : this._canvas.removeMarker(r, "token-simulation-gateway-selected");
    });
  }
}
b(Bc, "$inject", ["eventBus", "elementRegistry", "canvas", "simulator"]);
const n1 = {
  __depends__: [],
  exclusiveGatewaySettings: ["type", Bc]
};
class xc {
  constructor(t, n, i, r) {
    b(this, "_elementRegistry");
    b(this, "_canvas");
    b(this, "_simulator");
    this._elementRegistry = n, this._canvas = i, this._simulator = r;
    const o = this;
    t.on(Ye, function(s) {
      s.active ? o.setDefaults() : o.reset();
    });
  }
  setDefaults() {
    this._elementRegistry.filter((n) => D(n, "bpmn:InclusiveGateway")).forEach((n) => {
      n.outgoing.filter(Qt).length > 1 && this._setGatewayDefaults(n);
    });
  }
  reset() {
    this._elementRegistry.filter((n) => D(n, "bpmn:InclusiveGateway")).forEach((n) => {
      n.outgoing.filter(Qt).length > 1 && this._resetGateway(n);
    });
  }
  toggleSequenceFlow(t, n) {
    const i = this._getActiveOutgoing(t), r = Ic(t), o = i1(t);
    let s;
    i.includes(n) ? s = r1(i, n) : s = i.concat(n), s.length || (r ? s = [r] : s = [o.find((a) => a !== n)]), this._setActiveOutgoing(t, s);
  }
  _getActiveOutgoing(t) {
    const { activeOutgoing: n } = this._simulator.getConfig(t);
    return n;
  }
  _setActiveOutgoing(t, n) {
    this._simulator.setConfig(t, { activeOutgoing: n }), t.outgoing.filter(Qt).forEach((r) => {
      !n || n.includes(r) ? this._canvas.addMarker(r, "token-simulation-gateway-selected") : this._canvas.removeMarker(r, "token-simulation-gateway-selected");
    });
  }
  _setGatewayDefaults(t) {
    const n = t.outgoing.filter(Qt);
    this._setActiveOutgoing(t, n);
  }
  _resetGateway(t) {
    this._simulator.setConfig(t, { activeOutgoing: void 0 });
  }
}
b(xc, "$inject", ["eventBus", "elementRegistry", "canvas", "simulator"]);
function Ic(e) {
  const t = $e(e).default;
  if (t)
    return e.outgoing.find((n) => $e(n) === t);
}
function i1(e) {
  const t = Ic(e);
  return e.outgoing.filter((n) => $e(n) !== t);
}
function r1(e, t) {
  return e.filter((n) => n !== t);
}
const o1 = {
  __depends__: [],
  inclusiveGatewaySettings: ["type", xc]
};
class $c {
  constructor(t, n, i, r, o, s) {
    b(this, "_eventBus");
    b(this, "_canvas");
    b(this, "_translate");
    b(this, "_pauseSimulation");
    b(this, "_resetSimulation");
    b(this, "_showLabel");
    b(this, "entries", []);
    b(this, "container");
    b(this, "playEntry");
    b(this, "resetEntry");
    this._eventBus = t, this._canvas = n, this._translate = i, this._pauseSimulation = r, this._resetSimulation = o;
    const a = s || {};
    this._showLabel = a.showLabel !== !1, this._init(), t.on(Ye, (l) => {
      l.active ? fe(this.container).remove("hidden") : (fe(this.container).add("hidden"), this._togglePlayPause(!1));
    }), t.on(or, () => {
      this._togglePlayPause(!0);
    }), t.on(Go, () => {
      this._togglePlayPause(!1);
    }), t.on(ut, () => {
      this._setSimulationFinished(!1), this._togglePlayPause(!1);
    }), t.on(hn, () => {
      this._setSimulationFinished(!1), this._togglePlayPause(!0);
    }), t.on(Bl, () => {
      this._setSimulationFinished(!0);
    }), t.on(["i18n.changed", "simpleTokenSimulation.config.changed"], () => {
      this._updateTexts();
    });
  }
  // ─── 初始化 ────────────────────────────────────
  /**
   * 初始化 Palette DOM
   */
  _init() {
    this.container = rt('<div class="bts-palette hidden"></div>');
    const t = this._showLabel ? `<span class="bts-text">${this._translate("Play")}</span>` : "";
    this.playEntry = rt(`
      <div class="bts-entry" title="${this._translate("Play/Pause Simulation")}">
        <span class="bts-icon bts-icon-start">${pc()}</span>
        <span class="bts-icon bts-icon-pause hidden">${hc()}</span>
        <span class="bts-icon bts-icon-restart hidden">${_o()}</span>
        ${t}
      </div>
    `), kt.bind(this.playEntry, "click", () => {
      this._pauseSimulation.playOrToggle();
    }), this.addEntry(this.playEntry, 1);
    const n = this._showLabel ? `<span class="bts-text">${this._translate("Reset")}</span>` : "";
    this.resetEntry = rt(`
      <div class="bts-entry" title="${this._translate("Reset Simulation")}">
        <span class="bts-icon bts-icon-reset">${_o()}</span>
        ${n}
      </div>
    `), kt.bind(this.resetEntry, "click", () => {
      this._resetSimulation.resetSimulation();
    }), this.addEntry(this.resetEntry, 2), this._canvas.getContainer().appendChild(this.container), this._eventBus.fire("simpleTokenSimulation.palette.created", {
      palette: this
    });
  }
  addEntry(t, n) {
    var i = 0;
    this.entries.forEach(function(r) {
      n >= r.index && i++;
    }), this.container.insertBefore(t, this.container.childNodes[i]), this.entries.push({
      entry: t,
      index: n
    });
  }
  // ─── UI 更新（私有） ─────────────────────────────
  /**
   * 切换播放/暂停图标状态
   */
  _togglePlayPause(t) {
    const n = this.playEntry.querySelector(".bts-icon-start"), i = this.playEntry.querySelector(".bts-icon-pause"), r = this.playEntry.querySelector(".bts-icon-restart"), o = this.playEntry.querySelector(".bts-text");
    r && fe(r).add("hidden"), t ? (n && fe(n).add("hidden"), i && fe(i).remove("hidden"), o && (o.textContent = this._translate("Pause"))) : (n && fe(n).remove("hidden"), i && fe(i).add("hidden"), o && (o.textContent = this._translate("Play")));
  }
  /**
   * 设置模拟结束状态的图标
   */
  _setSimulationFinished(t) {
    const n = this.playEntry.querySelector(".bts-icon-start"), i = this.playEntry.querySelector(".bts-icon-pause"), r = this.playEntry.querySelector(".bts-icon-restart"), o = this.playEntry.querySelector(".bts-text");
    t && (n && fe(n).add("hidden"), i && fe(i).add("hidden"), r && fe(r).remove("hidden"), o && (o.textContent = this._translate("Restart")));
  }
  /**
   * 更新文本（多语言切换时调用）
   */
  _updateTexts() {
    if (this.playEntry) {
      const t = this.playEntry.querySelector(".bts-text"), n = this.playEntry.querySelector(".bts-icon-pause"), i = this.playEntry.querySelector(".bts-icon-restart"), r = n && !fe(n).has("hidden"), o = i && !fe(i).has("hidden");
      t && (o ? t.textContent = this._translate("Restart") : t.textContent = r ? this._translate("Pause") : this._translate("Play")), this.playEntry.title = this._translate("Play/Pause/Restart Simulation");
    }
    if (this.resetEntry) {
      const t = this.resetEntry.querySelector(".bts-text");
      t && (t.textContent = this._translate("Reset")), this.resetEntry.title = this._translate("Reset Simulation");
    }
  }
}
b($c, "$inject", [
  "eventBus",
  "canvas",
  "translate",
  "pauseSimulation",
  "resetSimulation",
  "config.simpleTokenSimulation"
]);
const s1 = {
  __init__: ["tokenSimulationPalette"],
  tokenSimulationPalette: ["type", $c]
}, Js = "token-simulation-path-prediction";
class Rc {
  constructor(t, n, i, r) {
    b(this, "_eventBus");
    b(this, "_elementRegistry");
    b(this, "_canvas");
    b(this, "_simulator");
    b(this, "_isActive", !1);
    b(this, "_highlightedElements", /* @__PURE__ */ new Set());
    this._eventBus = t, this._elementRegistry = n, this._canvas = i, this._simulator = r;
    const o = this;
    t.on(Ye, function(s) {
      o._isActive = s.active, o._isActive ? o.highlightPaths() : o.clearHighlights();
    }), t.on(wo, function(s) {
      o._isActive && a1(s.element) && o.highlightPaths();
    });
  }
  /**
   * 计算并高亮预测路径
   * (Calculate and highlight predicted paths)
   */
  highlightPaths() {
    this.clearHighlights();
    const n = [...this._elementRegistry.filter((r) => D(r, "bpmn:StartEvent") && !D(r.parent, "bpmn:SubProcess"))], i = /* @__PURE__ */ new Set();
    for (; n.length; ) {
      const r = n.shift();
      if (i.has(r))
        continue;
      i.add(r), this.highlight(r);
      const o = this.getOutgoingFlows(r);
      if (D(r, "bpmn:SubProcess")) {
        const a = (r.children || []).filter((l) => D(l, "bpmn:StartEvent"));
        for (const l of a)
          i.has(l) || n.push(l);
      }
      for (const s of o)
        i.has(s) || (i.add(s), this.highlight(s), s.target && n.push(s.target));
    }
  }
  /**
   * 获取元素的有效输出路径
   * (Get active outgoing flows)
   *
   * @param {Element} element
   * @return {Array<SequenceFlow>}
   */
  getOutgoingFlows(t) {
    if (D(t, "bpmn:SequenceFlow"))
      return [];
    if (D(t, "bpmn:ExclusiveGateway")) {
      const n = this._simulator.getConfig(t);
      if (n.activeOutgoing)
        return [n.activeOutgoing];
      const i = t.businessObject.default;
      if (i) {
        const o = t.outgoing.find((s) => s.businessObject === i);
        if (o)
          return [o];
      }
      const r = t.outgoing.find((o) => D(o, "bpmn:SequenceFlow"));
      return r ? [r] : [];
    }
    if (D(t, "bpmn:InclusiveGateway")) {
      const n = this._simulator.getConfig(t);
      return n.activeOutgoing ? Array.isArray(n.activeOutgoing) ? n.activeOutgoing : [n.activeOutgoing] : t.outgoing.filter((i) => D(i, "bpmn:SequenceFlow"));
    }
    return t.outgoing.filter((n) => D(n, "bpmn:SequenceFlow"));
  }
  /**
   * 高亮元素
   * (Highlight element)
   *
   * @param {Element} element
   */
  highlight(t) {
    this._canvas.addMarker(t, Js), this._highlightedElements.add(t);
  }
  /**
   * 清除所有高亮
   * (Clear all highlights)
   */
  clearHighlights() {
    for (const t of this._highlightedElements)
      this._canvas.removeMarker(t, Js);
    this._highlightedElements.clear();
  }
}
b(Rc, "$inject", ["eventBus", "elementRegistry", "canvas", "simulator"]);
function a1(e) {
  return D(e, "bpmn:Gateway");
}
const l1 = {
  __init__: ["pathHighlighter"],
  pathHighlighter: ["type", Rc]
}, Jr = "token-simulation-active", Zr = "token-simulation-visited";
class Fc {
  constructor(t, n) {
    b(this, "_canvas");
    b(this, "_highlightedElements", /* @__PURE__ */ new Set());
    this._canvas = n, this._init(t);
  }
  _init(t) {
    const n = this;
    t.on(br, function(r) {
      const { element: o, action: s } = r;
      o && (s === "enter" ? (n._canvas.addMarker(o, Jr), n._canvas.removeMarker(o, Zr), n._highlightedElements.add(o)) : s === "exit" && (n._canvas.removeMarker(o, Jr), n._canvas.addMarker(o, Zr), n._highlightedElements.add(o)));
    });
    const i = [Pl, ut, Ye];
    t.on(i, function() {
      n._highlightedElements.forEach((r) => {
        n._canvas.removeMarker(r, Jr), n._canvas.removeMarker(r, Zr);
      }), n._highlightedElements.clear();
    });
  }
}
b(Fc, "$inject", ["eventBus", "canvas"]);
const c1 = {
  __init__: ["elementHighlight"],
  elementHighlight: ["type", Fc]
}, u1 = {
  __depends__: [
    ac,
    Dp,
    vi,
    Np,
    Lp,
    Kp,
    $n,
    Jp,
    e1,
    Pc,
    n1,
    o1,
    s1,
    l1,
    c1
  ]
}, d1 = {
  __depends__: [u1, Kf]
};
function f1() {
  return document.body.getAttribute("arco-theme") === "dark" ? "dark" : "light";
}
function Zs(e) {
  return document.body.setAttribute("arco-theme", e), document.documentElement.setAttribute("arco-theme", e), e;
}
function os(e) {
  return Zs(e || (f1() === "dark" ? "light" : "dark"));
}
const Yg = /* @__PURE__ */ Ee({
  name: "BpmnMocker",
  __name: "index",
  props: {
    xml: {
      type: String,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    theme: {
      type: String,
      default: "light"
    },
    local: {
      type: String,
      default: "zh_CN"
    }
  },
  emits: ["mocker-init", "mocker-destroy"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { locale: o } = Bn(), s = oe(void 0), a = ni(), l = () => {
      a.value = new Xa({
        container: s.value,
        moddleExtensions: {
          flowable: Tl
        },
        additionalModules: [d1, ...Al],
        bpmnRenderer: {
          // overrideColor: true
        },
        gridLine: { gridLineOpacity: 0.1, gridLineStroke: 1 }
      }), a.value.get("log").registerInterceptor(h), r("mocker-init", a.value);
    }, d = () => {
      var T, I;
      (T = a.value) == null || T.clear(), (I = a.value) == null || I.destroy(), a.value = void 0, r("mocker-destroy", a.value);
    }, c = async (T) => {
      var I, q, K, G;
      try {
        a.value || l(), await ((I = a.value) == null ? void 0 : I.importXML(T)), (q = a.value) == null || q.get("canvas").zoom("fit-viewport", "center");
        const Y = (K = a.value) == null ? void 0 : K.get("toggleMode");
        !Y._active && Y.toggleMode(!0);
        const P = (G = a.value) == null ? void 0 : G.get("eventBus");
        P == null || P.fire("tokenSimulation.resetSimulation");
      } catch (Y) {
        console.error(Y);
      }
    }, u = (T) => {
      if (!a.value.get("elementRegistry")) return;
      a.value.get("simulator").setGatewayActiveOutgoingByFlowIds(T);
    }, f = oe({}), E = (T) => {
      f.value = { ...T };
    }, h = (T) => {
      const { element: I } = T;
      if (I && I.type === "bpmn:UserTask") {
        const q = f.value[I.id];
        q != null && q.length ? T.slot = q.map((K) => `<span class="arco-tag arco-tag-size-medium arco-tag-green arco-tag-checked">${K}</span>`).join("") : $e(I).assignee !== "${initiator}" && (T.type = "warning");
      }
      return T;
    }, g = (T) => os(T), C = (T) => {
      var I;
      T ? o.value = T : o.value = o.value === "zh_CN" ? "en_US" : "zh_CN", Wo("local-lang", o.value), (I = a.value) == null || I.get("eventBus").fire("i18n.changed");
    }, m = () => {
      var T;
      (T = a.value) == null || T.get("canvas").zoom("fit-viewport", "auto");
    }, _ = () => {
      var T;
      ((T = a.value) == null ? void 0 : T.get("pauseSimulation")).play();
    }, O = () => {
      var T;
      ((T = a.value) == null ? void 0 : T.get("pauseSimulation")).pause();
    }, p = () => {
      var T;
      ((T = a.value) == null ? void 0 : T.get("resetSimulation")).resetSimulation();
    }, R = () => {
      var T;
      return ((T = a.value) == null ? void 0 : T.get("simulator")).getSimulationPath();
    };
    return bt(() => {
      l(), i.xml && c(i.xml);
    }), Pn(() => d()), Ge(() => i.local, C, { immediate: !0 }), Ge(() => i.theme, g, { immediate: !0 }), t({
      createNewProcess: c,
      setSequenceFlows: u,
      setTaskUserInfos: E,
      getSimulationPath: R,
      toggleLang: C,
      toggleTheme: g,
      resetViewport: m,
      playMock: _,
      pauseMock: O,
      resetMock: p
    }), (T, I) => (F(), ye(N(Uo), {
      style: { width: "100%", height: "100%" },
      loading: e.loading
    }, {
      default: ae(() => [
        U("div", {
          ref_key: "canvasEl",
          ref: s,
          class: "bpmn-mocker"
        }, null, 512)
      ]),
      _: 1
    }, 8, ["loading"]));
  }
});
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = (e, t) => ({ size: n, strokeWidth: i = 2, absoluteStrokeWidth: r, color: o, class: s, ...a }, { attrs: l, slots: d }) => _s(
  "svg",
  {
    ...$i,
    width: n || $i.width,
    height: n || $i.height,
    stroke: o || $i.stroke,
    "stroke-width": r ? Number(i) * 24 / Number(n) : i,
    ...l,
    class: ["lucide", `lucide-${p1(e)}`],
    ...a
  },
  [...t.map((c) => _s(...c)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = Rn("CircleCheckBigIcon", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = Rn("Clock4Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = Rn("DownloadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = Rn("FullscreenIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1", key: "vys8me" }]
]);
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = Rn("ZoomInIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
/**
 * @license lucide-vue-next v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = Rn("ZoomOutIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
function Qs(e, t, n) {
  const i = encodeURIComponent(n);
  return {
    filename: `${t}.${e.toLowerCase()}`,
    href: `data:application/${e === "svg" ? "text/xml" : "bpmn20-xml"};charset=UTF-8,${i}`,
    data: n
  };
}
function Qr(e, t) {
  if (e && t) {
    const n = document.createElement("a");
    n.download = t, n.href = e, n.click(), e.startsWith("blob:") && window.setTimeout(() => URL.revokeObjectURL(e), 0);
  }
}
function ea(e, t = {}) {
  const n = /var\(--([^)]+)\)/g, i = t.root || document.querySelector(t.fallbackRootSelector || ".djs-container.djs-parent") || document.body, r = window.getComputedStyle(i);
  return e.replace(n, (o, s) => s.includes("color-bg") ? "none" : r.getPropertyValue(`--${s}`) || o);
}
function E1(e) {
  const t = {
    svg: null,
    mimetype: "image/png",
    quality: 0.92,
    width: "auto",
    height: "auto",
    outputFormat: "base64"
  };
  for (const n in e)
    t[n] = e[n];
  return new Promise(function(n) {
    let i;
    if (typeof t.svg == "string") {
      const d = document.createElement("div");
      d.style.display = "none", d.innerHTML = t.svg, i = d.firstElementChild;
    } else
      i = t.svg;
    const r = document.createElement("canvas"), o = r.getContext("2d"), s = new XMLSerializer().serializeToString(i), a = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(s))), l = new Image();
    l.onload = function() {
      let d, c;
      t.width === "auto" && t.height !== "auto" ? d = l.width / l.height * t.height : t.width === "auto" ? d = l.naturalWidth : d = t.width, t.height === "auto" && t.width !== "auto" ? c = l.height / l.width * t.width : t.height === "auto" ? c = l.naturalHeight : c = t.height, r.width = d, r.height = c, o.drawImage(l, 0, 0, d, c), e.outputFormat == "blob" ? r.toBlob(
        function(u) {
          n(u);
        },
        t.mimetype,
        t.quality
      ) : n(r.toDataURL(t.mimetype, t.quality));
    }, l.src = a;
  });
}
const _n = document.documentElement;
let eo = _n.querySelector("head");
const ta = document.createElement("style");
let na = !1, Vn = !1, Gi = "requestFullscreen", Ki = "exitFullscreen", Jn = "fullscreenElement", Zn = "fullscreenchange";
function Mc(e) {
  return e instanceof HTMLElement ? e : _n;
}
function Fn() {
  return na ? Vn : (na = !0, "webkitRequestFullScreen" in _n ? (Gi = "webkitRequestFullScreen", Ki = "webkitExitFullscreen", Jn = "webkitFullscreenElement", Zn = "webkitfullscreenchange", Vn = !0) : "msRequestFullscreen" in _n ? (Gi = "msRequestFullscreen", Ki = "msExitFullscreen", Jn = "msFullscreenElement", Zn = "MSFullscreenChange", Vn = !0) : "mozRequestFullScreen" in _n ? (Gi = "mozRequestFullScreen", Ki = "mozCancelFullScreen", Jn = "mozFullScreenElement", Zn = "mozfullscreenchange", Vn = !0) : (console.error("当前浏览器不支持 Fullscreen API !"), Vn = !1));
}
function w1(e, t) {
  if (Fn())
    return Mc(e)[Gi]();
}
function S1() {
  if (Fn())
    return _n.contains(ta) && (eo == null || eo.removeChild(ta)), document[Ki]();
}
function _1(e) {
  return Fn() ? Mc(e) === document[Jn] : !1;
}
function ia(e, t) {
  return Fn() ? _1(e) ? (S1(), !1) : (w1(e), !0) : !1;
}
function C1(e) {
  if (!Fn())
    return;
  const t = () => {
    e(!!document[Jn]);
  };
  return window.addEventListener(Zn, t), () => {
    window.removeEventListener(Zn, t);
  };
}
const k1 = {
  id: "bpmn-viewer__wrap",
  class: "bpmn-viewer"
}, T1 = {
  key: 0,
  class: "bpmn-viewer__toolbar"
}, A1 = { style: { "text-align": "center", display: "inline-block", width: "40px" } }, O1 = { class: "button-list_column" }, D1 = /* @__PURE__ */ Ee({
  name: "BpmnViewer",
  __name: "index",
  props: {
    xml: {
      type: String,
      default: void 0
    },
    theme: {
      type: String,
      default: "light"
    },
    local: {
      type: String,
      default: "zh_CN"
    },
    translatePrefix: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    },
    toolbar: {
      type: Boolean,
      default: !0
    },
    inPreset: {
      type: Boolean,
      default: !1
    },
    fullElement: {
      type: Object
    },
    showDownload: {
      type: Boolean,
      default: !1
    },
    fileName: {
      type: String,
      default: ""
    }
  },
  emits: ["viewer-init", "viewer-destroy", "element-hover"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { locale: o, t: s } = Bn(), a = oe(void 0), l = ni();
    let d;
    const c = {
      opacity: 0.5,
      fill: "#C5E2C9",
      stroke: "#219260"
    }, u = {
      opacity: 0.8,
      fill: "#ffffff",
      stroke: "#2948ff"
    }, f = {
      opacity: 0.8,
      fill: "#FAFAFA",
      // 接近白色的淡灰色
      stroke: "#2948ff"
      // 浅灰色描边
    }, E = /* @__PURE__ */ new Map(), h = () => {
      l.value = new Xa({
        container: a.value,
        moddleExtensions: {
          flowable: Tl
        },
        additionalModules: [o0, ...Al],
        gridLine: { gridLineOpacity: 0.1, gridLineStroke: 1 }
      }), l.value.on("element.hover", ({ element: $, gfx: L }) => {
        r("element-hover", $, L);
      }), l.value.on("canvas.viewbox.changed", ({ viewbox: $ }) => {
        d && window.cancelAnimationFrame(d), d = window.requestAnimationFrame(() => {
          x.value = $.scale || 1, d = void 0;
        });
      }), r("viewer-init", l.value);
    }, g = () => {
      const $ = l.value;
      $ && (r("viewer-destroy", $), d && (window.cancelAnimationFrame(d), d = void 0), $.clear(), $.destroy(), l.value = void 0, E.clear());
    }, C = () => l.value, m = ($) => $ ? i.translatePrefix + $ : "-", _ = async ($) => {
      var L, V;
      try {
        l.value || h(), q(), await ((L = l.value) == null ? void 0 : L.importXML($)), (V = l.value) == null || V.get("canvas").zoom("fit-viewport", "center");
      } catch (ee) {
        console.error(ee);
      }
    }, O = ($) => {
      var V;
      const L = (V = l.value) == null ? void 0 : V.get("elementRegistry");
      return L ? $.map((ee) => L.get(ee)).filter((ee) => !!ee) : [];
    }, p = ($, L, V) => {
      var he, Ce;
      const ee = (he = l.value) == null ? void 0 : he.get("canvas"), ge = O($);
      if (!(!ee || !ge.length)) {
        V && ((Ce = l.value) == null || Ce.get("modeling").setColor(ge, V));
        for (const je of ge)
          for (const Ne of L)
            R(ee, je, Ne);
      }
    }, R = ($, L, V) => {
      $.addMarker(L, V);
      const ee = E.get(L.id) || /* @__PURE__ */ new Set();
      ee.add(V), E.set(L.id, ee);
    }, T = ($) => {
      var L;
      return typeof $ != "string" ? $ : (L = l.value) == null ? void 0 : L.get("elementRegistry").get($);
    }, I = ($, L) => {
      var ee;
      const V = T($);
      return V ? !!((ee = l.value) != null && ee.get("canvas").hasMarker(V, L)) : !1;
    }, q = () => {
      var V, ee;
      const $ = (V = l.value) == null ? void 0 : V.get("elementRegistry"), L = (ee = l.value) == null ? void 0 : ee.get("canvas");
      !$ || !L || (E.forEach((ge, he) => {
        const Ce = $.get(he);
        Ce && ge.forEach((je) => L.removeMarker(Ce, je));
      }), E.clear());
    }, K = ($) => {
      p($, ["on-viewer", "on-passed"], c);
    }, G = ($) => {
      p($, ["on-viewer", "on-future"], f);
    }, Y = ($) => I($, "on-passed"), P = ($) => {
      p($, ["on-viewer", "on-active"], u);
    }, M = ($) => I($, "on-active"), S = ($) => {
      const L = l.value.get("canvas");
      for (const V of O($)) {
        const ee = V.type.split(":")[1];
        R(L, V, ee), R(L, V, "on-processing"), R(L, V, "on-viewer");
      }
    }, v = ($) => I($, "on-processing"), w = ($) => {
      if (!i.inPreset)
        return os($);
    }, k = ($) => {
      var L;
      i.inPreset || ($ ? o.value = $ : o.value = o.value === "zh_CN" ? "en_US" : "zh_CN", Wo("local-lang", o.value), (L = l.value) == null || L.get("eventBus").fire("i18n.changed"));
    }, x = oe(1), B = ($) => {
      const L = l.value.get("canvas");
      $ === "fit-viewport" ? L.zoom("fit-viewport", "center") : L.zoom($, { x: 0, y: 0 });
    }, ie = ($) => {
      x.value = Math.floor(x.value * 100 - 0.1 * 100) / 100, B(x.value);
    }, ue = ($) => {
      x.value = Math.floor(x.value * 100 + 0.1 * 100) / 100, B(x.value);
    }, te = oe(Fn()), de = oe(!1), _e = () => {
      i.inPreset ? ia(
        i.fullElement || document.querySelector("#bpmn-viewer__wrap")
      ) : ia(document.querySelector("#bpmn-viewer__wrap"));
    };
    C1(($) => {
      de.value = $;
    });
    const Q = () => {
      var V, ee, ge;
      const $ = l.value.get("elementRegistry");
      let L = (V = $.find((he) => he.type === "bpmn:Process")) == null ? void 0 : V.businessObject;
      return L || (L = (ge = (ee = $.find((he) => he.type === "bpmn:Participant")) == null ? void 0 : ee.businessObject) == null ? void 0 : ge.processRef), (L == null ? void 0 : L.name) || (L == null ? void 0 : L.id) || "diagram";
    }, we = async ($, L) => {
      try {
        const V = L || i.fileName || Q();
        if ($ === "xml" || $ === "bpmn") {
          const { error: ee, xml: ge } = await l.value.saveXML({ format: !0 });
          ee && console.error(`[Process Designer Warn ]: ${ee.message || ee}`);
          const { href: he, filename: Ce } = Qs($.toUpperCase(), V, ge);
          Qr(he, Ce);
        } else if ($ === "svg") {
          const { svg: ee } = await l.value.saveSVG(), ge = ea(ee), { href: he, filename: Ce } = Qs("SVG", V, ge);
          Qr(he, Ce);
        } else
          se(V);
      } catch (V) {
        console.error(`[Process Designer Warn ]: ${V.message || V}`);
      }
    }, se = async ($) => {
      const { svg: L } = await l.value.saveSVG(), V = ea(L), ee = await E1({ svg: V, outputFormat: "blob" });
      ee instanceof Blob && Qr(URL.createObjectURL(ee), `${$}.png`);
    };
    return bt(() => {
      h(), i.xml && _(i.xml);
    }), Pn(() => g()), Ge(() => i.theme, w, { immediate: !0 }), Ge(() => i.local, k, { immediate: !0 }), t({
      createNewProcess: _,
      setPassedNodes: K,
      setFutureNodes: G,
      setActiveNodes: P,
      setProcessingMarker: S,
      resetViewerMarkers: q,
      isPassedNode: Y,
      isActiveNode: M,
      isProcessingNode: v,
      getModeler: C,
      toggleLang: k,
      toggleTheme: w,
      downloadProcess: we,
      downloadProcessAsPng: se
    }), ($, L) => (F(), X("div", k1, [
      e.toolbar ? (F(), X("div", T1, [
        H(N(Vi), { size: "mini" }, {
          default: ae(() => [
            H(N(Jt), {
              position: "bl",
              "popup-container": "#bpmn-viewer__wrap"
            }, {
              content: ae(() => [
                Ve(le(N(s)(m("zoomOut"))), 1)
              ]),
              default: ae(() => [
                H(N(ft), {
                  onClick: L[0] || (L[0] = (V) => ie())
                }, {
                  default: ae(() => [
                    H(N(b1), { size: 16 })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            H(N(Jt), {
              position: "bl",
              "popup-container": "#bpmn-viewer__wrap"
            }, {
              content: ae(() => [
                Ve(le(N(s)(m("zoomReset"))), 1)
              ]),
              default: ae(() => [
                H(N(ft), {
                  onClick: L[1] || (L[1] = (V) => B("fit-viewport"))
                }, {
                  default: ae(() => [
                    U("span", A1, le(Math.floor(x.value * 10) * 10 + "%"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            H(N(Jt), {
              position: "bl",
              "popup-container": "#bpmn-viewer__wrap"
            }, {
              content: ae(() => [
                Ve(le(N(s)(m("zoomIn"))), 1)
              ]),
              default: ae(() => [
                H(N(ft), {
                  onClick: L[2] || (L[2] = (V) => ue())
                }, {
                  default: ae(() => [
                    H(N(y1), { size: 16 })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            e.showDownload ? (F(), ye(N(Jt), {
              key: 0,
              position: "bl",
              "popup-container": "#bpmn-viewer__wrap"
            }, {
              content: ae(() => [
                U("div", O1, [
                  H(N(ft), {
                    onClick: L[3] || (L[3] = (V) => we("bpmn"))
                  }, {
                    default: ae(() => [
                      Ve(le(N(s)(m("exportAsBPMN"))), 1)
                    ]),
                    _: 1
                  }),
                  H(N(ft), {
                    onClick: L[4] || (L[4] = (V) => we("xml"))
                  }, {
                    default: ae(() => [
                      Ve(le(N(s)(m("exportAsXML"))), 1)
                    ]),
                    _: 1
                  }),
                  H(N(ft), {
                    onClick: L[5] || (L[5] = (V) => we("svg"))
                  }, {
                    default: ae(() => [
                      Ve(le(N(s)(m("exportAsSVG"))), 1)
                    ]),
                    _: 1
                  }),
                  H(N(ft), {
                    onClick: L[6] || (L[6] = (V) => we("png"))
                  }, {
                    default: ae(() => [
                      Ve(le(N(s)(m("exportAsPNG"))), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              default: ae(() => [
                H(N(ft), null, {
                  default: ae(() => [
                    H(N(v1), { size: 16 })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : ve("", !0),
            te.value ? (F(), ye(N(Jt), {
              key: 1,
              position: "bl",
              "popup-container": "#bpmn-viewer__wrap"
            }, {
              content: ae(() => [
                Ve(le(de.value ? N(s)(m("notFullscreen")) : N(s)(m("onFullscreen"))), 1)
              ]),
              default: ae(() => [
                H(N(ft), {
                  class: pe({ "is-unable": de.value }),
                  onClick: L[7] || (L[7] = (V) => _e())
                }, {
                  default: ae(() => [
                    H(N(g1), {
                      name: "Fullscreen",
                      size: 16
                    })
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })) : ve("", !0)
          ]),
          _: 1
        })
      ])) : ve("", !0),
      H(N(Uo), {
        style: { width: "100%", height: "100%" },
        loading: e.loading
      }, {
        default: ae(() => [
          U("div", {
            ref_key: "canvasEl",
            ref: a,
            class: "bpmn-viewer__canvas"
          }, null, 512)
        ]),
        _: 1
      }, 8, ["loading"])
    ]));
  }
});
var Xe = "top", at = "bottom", lt = "right", Je = "left", ss = "auto", gi = [Xe, at, lt, Je], Tn = "start", oi = "end", P1 = "clippingParents", Nc = "viewport", Un = "popper", B1 = "reference", ra = /* @__PURE__ */ gi.reduce(function(e, t) {
  return e.concat([t + "-" + Tn, t + "-" + oi]);
}, []), Lc = /* @__PURE__ */ [].concat(gi, [ss]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Tn, t + "-" + oi]);
}, []), x1 = "beforeRead", I1 = "read", $1 = "afterRead", R1 = "beforeMain", F1 = "main", M1 = "afterMain", N1 = "beforeWrite", L1 = "write", j1 = "afterWrite", z1 = [x1, I1, $1, R1, F1, M1, N1, L1, j1];
function yt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ln(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function st(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function as(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function V1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var i = t.styles[n] || {}, r = t.attributes[n] || {}, o = t.elements[n];
    !st(o) || !yt(o) || (Object.assign(o.style, i), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? o.removeAttribute(s) : o.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function U1(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var r = t.elements[i], o = t.attributes[i] || {}, s = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : n[i]), a = s.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !st(r) || !yt(r) || (Object.assign(r.style, a), Object.keys(o).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const jc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: V1,
  effect: U1,
  requires: ["computeStyles"]
};
function gt(e) {
  return e.split("-")[0];
}
var on = Math.max, lr = Math.min, An = Math.round;
function To() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function zc() {
  return !/^((?!chrome|android).)*safari/i.test(To());
}
function On(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var i = e.getBoundingClientRect(), r = 1, o = 1;
  t && st(e) && (r = e.offsetWidth > 0 && An(i.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && An(i.height) / e.offsetHeight || 1);
  var s = ln(e) ? et(e) : window, a = s.visualViewport, l = !zc() && n, d = (i.left + (l && a ? a.offsetLeft : 0)) / r, c = (i.top + (l && a ? a.offsetTop : 0)) / o, u = i.width / r, f = i.height / o;
  return {
    width: u,
    height: f,
    top: c,
    right: d + u,
    bottom: c + f,
    left: d,
    x: d,
    y: c
  };
}
function ls(e) {
  var t = On(e), n = e.offsetWidth, i = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: i
  };
}
function Vc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && as(n)) {
    var i = t;
    do {
      if (i && e.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Bt(e) {
  return et(e).getComputedStyle(e);
}
function H1(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
function Wt(e) {
  return ((ln(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function _r(e) {
  return yt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (as(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Wt(e)
  );
}
function oa(e) {
  return !st(e) || // https://github.com/popperjs/popper-core/issues/837
  Bt(e).position === "fixed" ? null : e.offsetParent;
}
function q1(e) {
  var t = /firefox/i.test(To()), n = /Trident/i.test(To());
  if (n && st(e)) {
    var i = Bt(e);
    if (i.position === "fixed")
      return null;
  }
  var r = _r(e);
  for (as(r) && (r = r.host); st(r) && ["html", "body"].indexOf(yt(r)) < 0; ) {
    var o = Bt(r);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function yi(e) {
  for (var t = et(e), n = oa(e); n && H1(n) && Bt(n).position === "static"; )
    n = oa(n);
  return n && (yt(n) === "html" || yt(n) === "body" && Bt(n).position === "static") ? t : n || q1(e) || t;
}
function cs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qn(e, t, n) {
  return on(e, lr(t, n));
}
function W1(e, t, n) {
  var i = Qn(e, t, n);
  return i > n ? n : i;
}
function Uc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Hc(e) {
  return Object.assign({}, Uc(), e);
}
function qc(e, t) {
  return t.reduce(function(n, i) {
    return n[i] = e, n;
  }, {});
}
var G1 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Hc(typeof t != "number" ? t : qc(t, gi));
};
function K1(e) {
  var t, n = e.state, i = e.name, r = e.options, o = n.elements.arrow, s = n.modifiersData.popperOffsets, a = gt(n.placement), l = cs(a), d = [Je, lt].indexOf(a) >= 0, c = d ? "height" : "width";
  if (!(!o || !s)) {
    var u = G1(r.padding, n), f = ls(o), E = l === "y" ? Xe : Je, h = l === "y" ? at : lt, g = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c], C = s[l] - n.rects.reference[l], m = yi(o), _ = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, O = g / 2 - C / 2, p = u[E], R = _ - f[c] - u[h], T = _ / 2 - f[c] / 2 + O, I = Qn(p, T, R), q = l;
    n.modifiersData[i] = (t = {}, t[q] = I, t.centerOffset = I - T, t);
  }
}
function Y1(e) {
  var t = e.state, n = e.options, i = n.element, r = i === void 0 ? "[data-popper-arrow]" : i;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Vc(t.elements.popper, r) && (t.elements.arrow = r));
}
const X1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: K1,
  effect: Y1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Dn(e) {
  return e.split("-")[1];
}
var J1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Z1(e, t) {
  var n = e.x, i = e.y, r = t.devicePixelRatio || 1;
  return {
    x: An(n * r) / r || 0,
    y: An(i * r) / r || 0
  };
}
function sa(e) {
  var t, n = e.popper, i = e.popperRect, r = e.placement, o = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, u = e.isFixed, f = s.x, E = f === void 0 ? 0 : f, h = s.y, g = h === void 0 ? 0 : h, C = typeof c == "function" ? c({
    x: E,
    y: g
  }) : {
    x: E,
    y: g
  };
  E = C.x, g = C.y;
  var m = s.hasOwnProperty("x"), _ = s.hasOwnProperty("y"), O = Je, p = Xe, R = window;
  if (d) {
    var T = yi(n), I = "clientHeight", q = "clientWidth";
    if (T === et(n) && (T = Wt(n), Bt(T).position !== "static" && a === "absolute" && (I = "scrollHeight", q = "scrollWidth")), T = T, r === Xe || (r === Je || r === lt) && o === oi) {
      p = at;
      var K = u && T === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[I]
      );
      g -= K - i.height, g *= l ? 1 : -1;
    }
    if (r === Je || (r === Xe || r === at) && o === oi) {
      O = lt;
      var G = u && T === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[q]
      );
      E -= G - i.width, E *= l ? 1 : -1;
    }
  }
  var Y = Object.assign({
    position: a
  }, d && J1), P = c === !0 ? Z1({
    x: E,
    y: g
  }, et(n)) : {
    x: E,
    y: g
  };
  if (E = P.x, g = P.y, l) {
    var M;
    return Object.assign({}, Y, (M = {}, M[p] = _ ? "0" : "", M[O] = m ? "0" : "", M.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + g + "px)" : "translate3d(" + E + "px, " + g + "px, 0)", M));
  }
  return Object.assign({}, Y, (t = {}, t[p] = _ ? g + "px" : "", t[O] = m ? E + "px" : "", t.transform = "", t));
}
function Q1(e) {
  var t = e.state, n = e.options, i = n.gpuAcceleration, r = i === void 0 ? !0 : i, o = n.adaptive, s = o === void 0 ? !0 : o, a = n.roundOffsets, l = a === void 0 ? !0 : a, d = {
    placement: gt(t.placement),
    variation: Dn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, sa(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, sa(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const eh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Q1,
  data: {}
};
var Ri = {
  passive: !0
};
function th(e) {
  var t = e.state, n = e.instance, i = e.options, r = i.scroll, o = r === void 0 ? !0 : r, s = i.resize, a = s === void 0 ? !0 : s, l = et(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && d.forEach(function(c) {
    c.addEventListener("scroll", n.update, Ri);
  }), a && l.addEventListener("resize", n.update, Ri), function() {
    o && d.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Ri);
    }), a && l.removeEventListener("resize", n.update, Ri);
  };
}
const nh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: th,
  data: {}
};
var ih = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ih[t];
  });
}
var rh = {
  start: "end",
  end: "start"
};
function aa(e) {
  return e.replace(/start|end/g, function(t) {
    return rh[t];
  });
}
function us(e) {
  var t = et(e), n = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: i
  };
}
function ds(e) {
  return On(Wt(e)).left + us(e).scrollLeft;
}
function oh(e, t) {
  var n = et(e), i = Wt(e), r = n.visualViewport, o = i.clientWidth, s = i.clientHeight, a = 0, l = 0;
  if (r) {
    o = r.width, s = r.height;
    var d = zc();
    (d || !d && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a + ds(e),
    y: l
  };
}
function sh(e) {
  var t, n = Wt(e), i = us(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, o = on(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = on(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -i.scrollLeft + ds(e), l = -i.scrollTop;
  return Bt(r || n).direction === "rtl" && (a += on(n.clientWidth, r ? r.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function fs(e) {
  var t = Bt(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + i);
}
function Wc(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : st(e) && fs(e) ? e : Wc(_r(e));
}
function ei(e, t) {
  var n;
  t === void 0 && (t = []);
  var i = Wc(e), r = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = et(i), s = r ? [o].concat(o.visualViewport || [], fs(i) ? i : []) : i, a = t.concat(s);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(ei(_r(s)))
  );
}
function Ao(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ah(e, t) {
  var n = On(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function la(e, t, n) {
  return t === Nc ? Ao(oh(e, n)) : ln(t) ? ah(t, n) : Ao(sh(Wt(e)));
}
function lh(e) {
  var t = ei(_r(e)), n = ["absolute", "fixed"].indexOf(Bt(e).position) >= 0, i = n && st(e) ? yi(e) : e;
  return ln(i) ? t.filter(function(r) {
    return ln(r) && Vc(r, i) && yt(r) !== "body";
  }) : [];
}
function ch(e, t, n, i) {
  var r = t === "clippingParents" ? lh(e) : [].concat(t), o = [].concat(r, [n]), s = o[0], a = o.reduce(function(l, d) {
    var c = la(e, d, i);
    return l.top = on(c.top, l.top), l.right = lr(c.right, l.right), l.bottom = lr(c.bottom, l.bottom), l.left = on(c.left, l.left), l;
  }, la(e, s, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Gc(e) {
  var t = e.reference, n = e.element, i = e.placement, r = i ? gt(i) : null, o = i ? Dn(i) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case Xe:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case at:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case lt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Je:
      l = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var d = r ? cs(r) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (o) {
      case Tn:
        l[d] = l[d] - (t[c] / 2 - n[c] / 2);
        break;
      case oi:
        l[d] = l[d] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function si(e, t) {
  t === void 0 && (t = {});
  var n = t, i = n.placement, r = i === void 0 ? e.placement : i, o = n.strategy, s = o === void 0 ? e.strategy : o, a = n.boundary, l = a === void 0 ? P1 : a, d = n.rootBoundary, c = d === void 0 ? Nc : d, u = n.elementContext, f = u === void 0 ? Un : u, E = n.altBoundary, h = E === void 0 ? !1 : E, g = n.padding, C = g === void 0 ? 0 : g, m = Hc(typeof C != "number" ? C : qc(C, gi)), _ = f === Un ? B1 : Un, O = e.rects.popper, p = e.elements[h ? _ : f], R = ch(ln(p) ? p : p.contextElement || Wt(e.elements.popper), l, c, s), T = On(e.elements.reference), I = Gc({
    reference: T,
    element: O,
    placement: r
  }), q = Ao(Object.assign({}, O, I)), K = f === Un ? q : T, G = {
    top: R.top - K.top + m.top,
    bottom: K.bottom - R.bottom + m.bottom,
    left: R.left - K.left + m.left,
    right: K.right - R.right + m.right
  }, Y = e.modifiersData.offset;
  if (f === Un && Y) {
    var P = Y[r];
    Object.keys(G).forEach(function(M) {
      var S = [lt, at].indexOf(M) >= 0 ? 1 : -1, v = [Xe, at].indexOf(M) >= 0 ? "y" : "x";
      G[M] += P[v] * S;
    });
  }
  return G;
}
function uh(e, t) {
  t === void 0 && (t = {});
  var n = t, i = n.placement, r = n.boundary, o = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, d = l === void 0 ? Lc : l, c = Dn(i), u = c ? a ? ra : ra.filter(function(h) {
    return Dn(h) === c;
  }) : gi, f = u.filter(function(h) {
    return d.indexOf(h) >= 0;
  });
  f.length === 0 && (f = u);
  var E = f.reduce(function(h, g) {
    return h[g] = si(e, {
      placement: g,
      boundary: r,
      rootBoundary: o,
      padding: s
    })[gt(g)], h;
  }, {});
  return Object.keys(E).sort(function(h, g) {
    return E[h] - E[g];
  });
}
function dh(e) {
  if (gt(e) === ss)
    return [];
  var t = Yi(e);
  return [aa(e), t, aa(t)];
}
function fh(e) {
  var t = e.state, n = e.options, i = e.name;
  if (!t.modifiersData[i]._skip) {
    for (var r = n.mainAxis, o = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, d = n.padding, c = n.boundary, u = n.rootBoundary, f = n.altBoundary, E = n.flipVariations, h = E === void 0 ? !0 : E, g = n.allowedAutoPlacements, C = t.options.placement, m = gt(C), _ = m === C, O = l || (_ || !h ? [Yi(C)] : dh(C)), p = [C].concat(O).reduce(function(_e, Q) {
      return _e.concat(gt(Q) === ss ? uh(t, {
        placement: Q,
        boundary: c,
        rootBoundary: u,
        padding: d,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : Q);
    }, []), R = t.rects.reference, T = t.rects.popper, I = /* @__PURE__ */ new Map(), q = !0, K = p[0], G = 0; G < p.length; G++) {
      var Y = p[G], P = gt(Y), M = Dn(Y) === Tn, S = [Xe, at].indexOf(P) >= 0, v = S ? "width" : "height", w = si(t, {
        placement: Y,
        boundary: c,
        rootBoundary: u,
        altBoundary: f,
        padding: d
      }), k = S ? M ? lt : Je : M ? at : Xe;
      R[v] > T[v] && (k = Yi(k));
      var x = Yi(k), B = [];
      if (o && B.push(w[P] <= 0), a && B.push(w[k] <= 0, w[x] <= 0), B.every(function(_e) {
        return _e;
      })) {
        K = Y, q = !1;
        break;
      }
      I.set(Y, B);
    }
    if (q)
      for (var ie = h ? 3 : 1, ue = function(Q) {
        var we = p.find(function(se) {
          var $ = I.get(se);
          if ($)
            return $.slice(0, Q).every(function(L) {
              return L;
            });
        });
        if (we)
          return K = we, "break";
      }, te = ie; te > 0; te--) {
        var de = ue(te);
        if (de === "break") break;
      }
    t.placement !== K && (t.modifiersData[i]._skip = !0, t.placement = K, t.reset = !0);
  }
}
const ph = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ca(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function ua(e) {
  return [Xe, lt, at, Je].some(function(t) {
    return e[t] >= 0;
  });
}
function hh(e) {
  var t = e.state, n = e.name, i = t.rects.reference, r = t.rects.popper, o = t.modifiersData.preventOverflow, s = si(t, {
    elementContext: "reference"
  }), a = si(t, {
    altBoundary: !0
  }), l = ca(s, i), d = ca(a, r, o), c = ua(l), u = ua(d);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": u
  });
}
const mh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hh
};
function vh(e, t, n) {
  var i = gt(e), r = [Je, Xe].indexOf(i) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = o[0], a = o[1];
  return s = s || 0, a = (a || 0) * r, [Je, lt].indexOf(i) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function gh(e) {
  var t = e.state, n = e.options, i = e.name, r = n.offset, o = r === void 0 ? [0, 0] : r, s = Lc.reduce(function(c, u) {
    return c[u] = vh(u, t.rects, o), c;
  }, {}), a = s[t.placement], l = a.x, d = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[i] = s;
}
const yh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: gh
};
function bh(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Gc({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Eh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bh,
  data: {}
};
function wh(e) {
  return e === "x" ? "y" : "x";
}
function Sh(e) {
  var t = e.state, n = e.options, i = e.name, r = n.mainAxis, o = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, d = n.rootBoundary, c = n.altBoundary, u = n.padding, f = n.tether, E = f === void 0 ? !0 : f, h = n.tetherOffset, g = h === void 0 ? 0 : h, C = si(t, {
    boundary: l,
    rootBoundary: d,
    padding: u,
    altBoundary: c
  }), m = gt(t.placement), _ = Dn(t.placement), O = !_, p = cs(m), R = wh(p), T = t.modifiersData.popperOffsets, I = t.rects.reference, q = t.rects.popper, K = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, G = typeof K == "number" ? {
    mainAxis: K,
    altAxis: K
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, K), Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, P = {
    x: 0,
    y: 0
  };
  if (T) {
    if (o) {
      var M, S = p === "y" ? Xe : Je, v = p === "y" ? at : lt, w = p === "y" ? "height" : "width", k = T[p], x = k + C[S], B = k - C[v], ie = E ? -q[w] / 2 : 0, ue = _ === Tn ? I[w] : q[w], te = _ === Tn ? -q[w] : -I[w], de = t.elements.arrow, _e = E && de ? ls(de) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Uc(), we = Q[S], se = Q[v], $ = Qn(0, I[w], _e[w]), L = O ? I[w] / 2 - ie - $ - we - G.mainAxis : ue - $ - we - G.mainAxis, V = O ? -I[w] / 2 + ie + $ + se + G.mainAxis : te + $ + se + G.mainAxis, ee = t.elements.arrow && yi(t.elements.arrow), ge = ee ? p === "y" ? ee.clientTop || 0 : ee.clientLeft || 0 : 0, he = (M = Y == null ? void 0 : Y[p]) != null ? M : 0, Ce = k + L - he - ge, je = k + V - he, Ne = Qn(E ? lr(x, Ce) : x, k, E ? on(B, je) : B);
      T[p] = Ne, P[p] = Ne - k;
    }
    if (a) {
      var Ie, J = p === "x" ? Xe : Je, Te = p === "x" ? at : lt, Se = T[R], xe = R === "y" ? "height" : "width", nt = Se + C[J], He = Se - C[Te], Fe = [Xe, Je].indexOf(m) !== -1, wt = (Ie = Y == null ? void 0 : Y[R]) != null ? Ie : 0, xt = Fe ? nt : Se - I[xe] - q[xe] - wt + G.altAxis, It = Fe ? Se + I[xe] + q[xe] - wt - G.altAxis : He, j = E && Fe ? W1(xt, Se, It) : Qn(E ? xt : nt, Se, E ? It : He);
      T[R] = j, P[R] = j - Se;
    }
    t.modifiersData[i] = P;
  }
}
const _h = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Sh,
  requiresIfExists: ["offset"]
};
function Ch(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function kh(e) {
  return e === et(e) || !st(e) ? us(e) : Ch(e);
}
function Th(e) {
  var t = e.getBoundingClientRect(), n = An(t.width) / e.offsetWidth || 1, i = An(t.height) / e.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function Ah(e, t, n) {
  n === void 0 && (n = !1);
  var i = st(t), r = st(t) && Th(t), o = Wt(t), s = On(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (i || !i && !n) && ((yt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  fs(o)) && (a = kh(t)), st(t) ? (l = On(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = ds(o))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Oh(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function r(o) {
    n.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && r(l);
      }
    }), i.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || r(o);
  }), i;
}
function Dh(e) {
  var t = Oh(e);
  return z1.reduce(function(n, i) {
    return n.concat(t.filter(function(r) {
      return r.phase === i;
    }));
  }, []);
}
function Ph(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Bh(e) {
  var t = e.reduce(function(n, i) {
    var r = n[i.name];
    return n[i.name] = r ? Object.assign({}, r, i, {
      options: Object.assign({}, r.options, i.options),
      data: Object.assign({}, r.data, i.data)
    }) : i, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var da = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function fa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function xh(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, i = n === void 0 ? [] : n, r = t.defaultOptions, o = r === void 0 ? da : r;
  return function(a, l, d) {
    d === void 0 && (d = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, da, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, u = [], f = !1, E = {
      state: c,
      setOptions: function(m) {
        var _ = typeof m == "function" ? m(c.options) : m;
        g(), c.options = Object.assign({}, o, c.options, _), c.scrollParents = {
          reference: ln(a) ? ei(a) : a.contextElement ? ei(a.contextElement) : [],
          popper: ei(l)
        };
        var O = Dh(Bh([].concat(i, c.options.modifiers)));
        return c.orderedModifiers = O.filter(function(p) {
          return p.enabled;
        }), h(), E.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, _ = m.reference, O = m.popper;
          if (fa(_, O)) {
            c.rects = {
              reference: Ah(_, yi(O), c.options.strategy === "fixed"),
              popper: ls(O)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(G) {
              return c.modifiersData[G.name] = Object.assign({}, G.data);
            });
            for (var p = 0; p < c.orderedModifiers.length; p++) {
              if (c.reset === !0) {
                c.reset = !1, p = -1;
                continue;
              }
              var R = c.orderedModifiers[p], T = R.fn, I = R.options, q = I === void 0 ? {} : I, K = R.name;
              typeof T == "function" && (c = T({
                state: c,
                options: q,
                name: K,
                instance: E
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ph(function() {
        return new Promise(function(C) {
          E.forceUpdate(), C(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!fa(a, l))
      return E;
    E.setOptions(d).then(function(C) {
      !f && d.onFirstUpdate && d.onFirstUpdate(C);
    });
    function h() {
      c.orderedModifiers.forEach(function(C) {
        var m = C.name, _ = C.options, O = _ === void 0 ? {} : _, p = C.effect;
        if (typeof p == "function") {
          var R = p({
            state: c,
            name: m,
            instance: E,
            options: O
          }), T = function() {
          };
          u.push(R || T);
        }
      });
    }
    function g() {
      u.forEach(function(C) {
        return C();
      }), u = [];
    }
    return E;
  };
}
var Ih = [nh, Eh, eh, jc, yh, ph, _h, X1, mh], $h = /* @__PURE__ */ xh({
  defaultModifiers: Ih
}), Rh = "tippy-box", Kc = "tippy-content", Fh = "tippy-backdrop", Yc = "tippy-arrow", Xc = "tippy-svg-arrow", Xt = {
  passive: !0,
  capture: !0
}, Jc = function() {
  return document.body;
};
function Mh(e, t) {
  return {}.hasOwnProperty.call(e, t);
}
function to(e, t, n) {
  if (Array.isArray(e)) {
    var i = e[t];
    return i ?? (Array.isArray(n) ? n[t] : n);
  }
  return e;
}
function ps(e, t) {
  var n = {}.toString.call(e);
  return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1;
}
function Zc(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function pa(e, t) {
  if (t === 0)
    return e;
  var n;
  return function(i) {
    clearTimeout(n), n = setTimeout(function() {
      e(i);
    }, t);
  };
}
function Nh(e, t) {
  var n = Object.assign({}, e);
  return t.forEach(function(i) {
    delete n[i];
  }), n;
}
function Lh(e) {
  return e.split(/\s+/).filter(Boolean);
}
function wn(e) {
  return [].concat(e);
}
function ha(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function jh(e) {
  return e.filter(function(t, n) {
    return e.indexOf(t) === n;
  });
}
function zh(e) {
  return e.split("-")[0];
}
function cr(e) {
  return [].slice.call(e);
}
function ma(e) {
  return Object.keys(e).reduce(function(t, n) {
    return e[n] !== void 0 && (t[n] = e[n]), t;
  }, {});
}
function ti() {
  return document.createElement("div");
}
function ai(e) {
  return ["Element", "Fragment"].some(function(t) {
    return ps(e, t);
  });
}
function Vh(e) {
  return ps(e, "NodeList");
}
function Qc(e) {
  return ps(e, "MouseEvent");
}
function Uh(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function Hh(e) {
  return ai(e) ? [e] : Vh(e) ? cr(e) : Array.isArray(e) ? e : cr(document.querySelectorAll(e));
}
function no(e, t) {
  e.forEach(function(n) {
    n && (n.style.transitionDuration = t + "ms");
  });
}
function va(e, t) {
  e.forEach(function(n) {
    n && n.setAttribute("data-state", t);
  });
}
function eu(e) {
  var t, n = wn(e), i = n[0];
  return i != null && (t = i.ownerDocument) != null && t.body ? i.ownerDocument : document;
}
function qh(e, t) {
  var n = t.clientX, i = t.clientY;
  return e.every(function(r) {
    var o = r.popperRect, s = r.popperState, a = r.props, l = a.interactiveBorder, d = zh(s.placement), c = s.modifiersData.offset;
    if (!c)
      return !0;
    var u = d === "bottom" ? c.top.y : 0, f = d === "top" ? c.bottom.y : 0, E = d === "right" ? c.left.x : 0, h = d === "left" ? c.right.x : 0, g = o.top - i + u > l, C = i - o.bottom - f > l, m = o.left - n + E > l, _ = n - o.right - h > l;
    return g || C || m || _;
  });
}
function io(e, t, n) {
  var i = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(r) {
    e[i](r, n);
  });
}
function ga(e, t) {
  for (var n = t; n; ) {
    var i;
    if (e.contains(n))
      return !0;
    n = n.getRootNode == null || (i = n.getRootNode()) == null ? void 0 : i.host;
  }
  return !1;
}
var mt = {
  isTouch: !1
}, ya = 0;
function Wh() {
  mt.isTouch || (mt.isTouch = !0, window.performance && document.addEventListener("mousemove", tu));
}
function tu() {
  var e = performance.now();
  e - ya < 20 && (mt.isTouch = !1, document.removeEventListener("mousemove", tu)), ya = e;
}
function Gh() {
  var e = document.activeElement;
  if (Uh(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function Kh() {
  document.addEventListener("touchstart", Wh, Xt), window.addEventListener("blur", Gh);
}
var Yh = typeof window < "u" && typeof document < "u", Xh = Yh ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function yn(e) {
  var t = e === "destroy" ? "n already-" : " ";
  return [e + "() was called on a" + t + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function ba(e) {
  var t = /[ \t]{2,}/g, n = /^[ \t]*/gm;
  return e.replace(t, " ").replace(n, "").trim();
}
function Jh(e) {
  return ba(`
  %ctippy.js

  %c` + ba(e) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function nu(e) {
  return [
    Jh(e),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var li;
process.env.NODE_ENV !== "production" && Zh();
function Zh() {
  li = /* @__PURE__ */ new Set();
}
function _t(e, t) {
  if (e && !li.has(t)) {
    var n;
    li.add(t), (n = console).warn.apply(n, nu(t));
  }
}
function Oo(e, t) {
  if (e && !li.has(t)) {
    var n;
    li.add(t), (n = console).error.apply(n, nu(t));
  }
}
function Qh(e) {
  var t = !e, n = Object.prototype.toString.call(e) === "[object Object]" && !e.addEventListener;
  Oo(t, ["tippy() was passed", "`" + String(e) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Oo(n, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var iu = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, em = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Qe = Object.assign({
  appendTo: Jc,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, iu, em), tm = Object.keys(Qe), nm = function(t) {
  process.env.NODE_ENV !== "production" && ou(t, []);
  var n = Object.keys(t);
  n.forEach(function(i) {
    Qe[i] = t[i];
  });
};
function ru(e) {
  var t = e.plugins || [], n = t.reduce(function(i, r) {
    var o = r.name, s = r.defaultValue;
    if (o) {
      var a;
      i[o] = e[o] !== void 0 ? e[o] : (a = Qe[o]) != null ? a : s;
    }
    return i;
  }, {});
  return Object.assign({}, e, n);
}
function im(e, t) {
  var n = t ? Object.keys(ru(Object.assign({}, Qe, {
    plugins: t
  }))) : tm, i = n.reduce(function(r, o) {
    var s = (e.getAttribute("data-tippy-" + o) || "").trim();
    if (!s)
      return r;
    if (o === "content")
      r[o] = s;
    else
      try {
        r[o] = JSON.parse(s);
      } catch {
        r[o] = s;
      }
    return r;
  }, {});
  return i;
}
function Ea(e, t) {
  var n = Object.assign({}, t, {
    content: Zc(t.content, [e])
  }, t.ignoreAttributes ? {} : im(e, t.plugins));
  return n.aria = Object.assign({}, Qe.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
  }, n;
}
function ou(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = []);
  var n = Object.keys(e);
  n.forEach(function(i) {
    var r = Nh(Qe, Object.keys(iu)), o = !Mh(r, i);
    o && (o = t.filter(function(s) {
      return s.name === i;
    }).length === 0), _t(o, ["`" + i + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var rm = function() {
  return "innerHTML";
};
function Do(e, t) {
  e[rm()] = t;
}
function wa(e) {
  var t = ti();
  return e === !0 ? t.className = Yc : (t.className = Xc, ai(e) ? t.appendChild(e) : Do(t, e)), t;
}
function Sa(e, t) {
  ai(t.content) ? (Do(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Do(e, t.content) : e.textContent = t.content);
}
function Po(e) {
  var t = e.firstElementChild, n = cr(t.children);
  return {
    box: t,
    content: n.find(function(i) {
      return i.classList.contains(Kc);
    }),
    arrow: n.find(function(i) {
      return i.classList.contains(Yc) || i.classList.contains(Xc);
    }),
    backdrop: n.find(function(i) {
      return i.classList.contains(Fh);
    })
  };
}
function su(e) {
  var t = ti(), n = ti();
  n.className = Rh, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var i = ti();
  i.className = Kc, i.setAttribute("data-state", "hidden"), Sa(i, e.props), t.appendChild(n), n.appendChild(i), r(e.props, e.props);
  function r(o, s) {
    var a = Po(t), l = a.box, d = a.content, c = a.arrow;
    s.theme ? l.setAttribute("data-theme", s.theme) : l.removeAttribute("data-theme"), typeof s.animation == "string" ? l.setAttribute("data-animation", s.animation) : l.removeAttribute("data-animation"), s.inertia ? l.setAttribute("data-inertia", "") : l.removeAttribute("data-inertia"), l.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? l.setAttribute("role", s.role) : l.removeAttribute("role"), (o.content !== s.content || o.allowHTML !== s.allowHTML) && Sa(d, e.props), s.arrow ? c ? o.arrow !== s.arrow && (l.removeChild(c), l.appendChild(wa(s.arrow))) : l.appendChild(wa(s.arrow)) : c && l.removeChild(c);
  }
  return {
    popper: t,
    onUpdate: r
  };
}
su.$$tippy = !0;
var om = 1, Fi = [], ro = [];
function sm(e, t) {
  var n = Ea(e, Object.assign({}, Qe, ru(ma(t)))), i, r, o, s = !1, a = !1, l = !1, d = !1, c, u, f, E = [], h = pa(Ce, n.interactiveDebounce), g, C = om++, m = null, _ = jh(n.plugins), O = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, p = {
    // properties
    id: C,
    reference: e,
    popper: ti(),
    popperInstance: m,
    props: n,
    state: O,
    plugins: _,
    // methods
    clearDelayTimeouts: xt,
    setProps: It,
    setContent: j,
    show: ne,
    hide: Le,
    hideWithInteractivity: $t,
    enable: Fe,
    disable: wt,
    unmount: St,
    destroy: Rt
  };
  if (!n.render)
    return process.env.NODE_ENV !== "production" && Oo(!0, "render() function has not been supplied."), p;
  var R = n.render(p), T = R.popper, I = R.onUpdate;
  T.setAttribute("data-tippy-root", ""), T.id = "tippy-" + p.id, p.popper = T, e._tippy = p, T._tippy = p;
  var q = _.map(function(A) {
    return A.fn(p);
  }), K = e.hasAttribute("aria-expanded");
  return ee(), ie(), k(), x("onCreate", [p]), n.showOnCreate && nt(), T.addEventListener("mouseenter", function() {
    p.props.interactive && p.state.isVisible && p.clearDelayTimeouts();
  }), T.addEventListener("mouseleave", function() {
    p.props.interactive && p.props.trigger.indexOf("mouseenter") >= 0 && S().addEventListener("mousemove", h);
  }), p;
  function G() {
    var A = p.props.touch;
    return Array.isArray(A) ? A : [A, 0];
  }
  function Y() {
    return G()[0] === "hold";
  }
  function P() {
    var A;
    return !!((A = p.props.render) != null && A.$$tippy);
  }
  function M() {
    return g || e;
  }
  function S() {
    var A = M().parentNode;
    return A ? eu(A) : document;
  }
  function v() {
    return Po(T);
  }
  function w(A) {
    return p.state.isMounted && !p.state.isVisible || mt.isTouch || c && c.type === "focus" ? 0 : to(p.props.delay, A ? 0 : 1, Qe.delay);
  }
  function k(A) {
    A === void 0 && (A = !1), T.style.pointerEvents = p.props.interactive && !A ? "" : "none", T.style.zIndex = "" + p.props.zIndex;
  }
  function x(A, W, re) {
    if (re === void 0 && (re = !0), q.forEach(function(be) {
      be[A] && be[A].apply(be, W);
    }), re) {
      var ke;
      (ke = p.props)[A].apply(ke, W);
    }
  }
  function B() {
    var A = p.props.aria;
    if (A.content) {
      var W = "aria-" + A.content, re = T.id, ke = wn(p.props.triggerTarget || e);
      ke.forEach(function(be) {
        var qe = be.getAttribute(W);
        if (p.state.isVisible)
          be.setAttribute(W, qe ? qe + " " + re : re);
        else {
          var it = qe && qe.replace(re, "").trim();
          it ? be.setAttribute(W, it) : be.removeAttribute(W);
        }
      });
    }
  }
  function ie() {
    if (!(K || !p.props.aria.expanded)) {
      var A = wn(p.props.triggerTarget || e);
      A.forEach(function(W) {
        p.props.interactive ? W.setAttribute("aria-expanded", p.state.isVisible && W === M() ? "true" : "false") : W.removeAttribute("aria-expanded");
      });
    }
  }
  function ue() {
    S().removeEventListener("mousemove", h), Fi = Fi.filter(function(A) {
      return A !== h;
    });
  }
  function te(A) {
    if (!(mt.isTouch && (l || A.type === "mousedown"))) {
      var W = A.composedPath && A.composedPath()[0] || A.target;
      if (!(p.props.interactive && ga(T, W))) {
        if (wn(p.props.triggerTarget || e).some(function(re) {
          return ga(re, W);
        })) {
          if (mt.isTouch || p.state.isVisible && p.props.trigger.indexOf("click") >= 0)
            return;
        } else
          x("onClickOutside", [p, A]);
        p.props.hideOnClick === !0 && (p.clearDelayTimeouts(), p.hide(), a = !0, setTimeout(function() {
          a = !1;
        }), p.state.isMounted || we());
      }
    }
  }
  function de() {
    l = !0;
  }
  function _e() {
    l = !1;
  }
  function Q() {
    var A = S();
    A.addEventListener("mousedown", te, !0), A.addEventListener("touchend", te, Xt), A.addEventListener("touchstart", _e, Xt), A.addEventListener("touchmove", de, Xt);
  }
  function we() {
    var A = S();
    A.removeEventListener("mousedown", te, !0), A.removeEventListener("touchend", te, Xt), A.removeEventListener("touchstart", _e, Xt), A.removeEventListener("touchmove", de, Xt);
  }
  function se(A, W) {
    L(A, function() {
      !p.state.isVisible && T.parentNode && T.parentNode.contains(T) && W();
    });
  }
  function $(A, W) {
    L(A, W);
  }
  function L(A, W) {
    var re = v().box;
    function ke(be) {
      be.target === re && (io(re, "remove", ke), W());
    }
    if (A === 0)
      return W();
    io(re, "remove", u), io(re, "add", ke), u = ke;
  }
  function V(A, W, re) {
    re === void 0 && (re = !1);
    var ke = wn(p.props.triggerTarget || e);
    ke.forEach(function(be) {
      be.addEventListener(A, W, re), E.push({
        node: be,
        eventType: A,
        handler: W,
        options: re
      });
    });
  }
  function ee() {
    Y() && (V("touchstart", he, {
      passive: !0
    }), V("touchend", je, {
      passive: !0
    })), Lh(p.props.trigger).forEach(function(A) {
      if (A !== "manual")
        switch (V(A, he), A) {
          case "mouseenter":
            V("mouseleave", je);
            break;
          case "focus":
            V(Xh ? "focusout" : "blur", Ne);
            break;
          case "focusin":
            V("focusout", Ne);
            break;
        }
    });
  }
  function ge() {
    E.forEach(function(A) {
      var W = A.node, re = A.eventType, ke = A.handler, be = A.options;
      W.removeEventListener(re, ke, be);
    }), E = [];
  }
  function he(A) {
    var W, re = !1;
    if (!(!p.state.isEnabled || Ie(A) || a)) {
      var ke = ((W = c) == null ? void 0 : W.type) === "focus";
      c = A, g = A.currentTarget, ie(), !p.state.isVisible && Qc(A) && Fi.forEach(function(be) {
        return be(A);
      }), A.type === "click" && (p.props.trigger.indexOf("mouseenter") < 0 || s) && p.props.hideOnClick !== !1 && p.state.isVisible ? re = !0 : nt(A), A.type === "click" && (s = !re), re && !ke && He(A);
    }
  }
  function Ce(A) {
    var W = A.target, re = M().contains(W) || T.contains(W);
    if (!(A.type === "mousemove" && re)) {
      var ke = xe().concat(T).map(function(be) {
        var qe, it = be._tippy, vn = (qe = it.popperInstance) == null ? void 0 : qe.state;
        return vn ? {
          popperRect: be.getBoundingClientRect(),
          popperState: vn,
          props: n
        } : null;
      }).filter(Boolean);
      qh(ke, A) && (ue(), He(A));
    }
  }
  function je(A) {
    var W = Ie(A) || p.props.trigger.indexOf("click") >= 0 && s;
    if (!W) {
      if (p.props.interactive) {
        p.hideWithInteractivity(A);
        return;
      }
      He(A);
    }
  }
  function Ne(A) {
    p.props.trigger.indexOf("focusin") < 0 && A.target !== M() || p.props.interactive && A.relatedTarget && T.contains(A.relatedTarget) || He(A);
  }
  function Ie(A) {
    return mt.isTouch ? Y() !== A.type.indexOf("touch") >= 0 : !1;
  }
  function J() {
    Te();
    var A = p.props, W = A.popperOptions, re = A.placement, ke = A.offset, be = A.getReferenceClientRect, qe = A.moveTransition, it = P() ? Po(T).arrow : null, vn = be ? {
      getBoundingClientRect: be,
      contextElement: be.contextElement || M()
    } : e, ws = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(ki) {
        var gn = ki.state;
        if (P()) {
          var zu = v(), Or = zu.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Ti) {
            Ti === "placement" ? Or.setAttribute("data-placement", gn.placement) : gn.attributes.popper["data-popper-" + Ti] ? Or.setAttribute("data-" + Ti, "") : Or.removeAttribute("data-" + Ti);
          }), gn.attributes.popper = {};
        }
      }
    }, Gt = [{
      name: "offset",
      options: {
        offset: ke
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !qe
      }
    }, ws];
    P() && it && Gt.push({
      name: "arrow",
      options: {
        element: it,
        padding: 3
      }
    }), Gt.push.apply(Gt, (W == null ? void 0 : W.modifiers) || []), p.popperInstance = $h(vn, T, Object.assign({}, W, {
      placement: re,
      onFirstUpdate: f,
      modifiers: Gt
    }));
  }
  function Te() {
    p.popperInstance && (p.popperInstance.destroy(), p.popperInstance = null);
  }
  function Se() {
    var A = p.props.appendTo, W, re = M();
    p.props.interactive && A === Jc || A === "parent" ? W = re.parentNode : W = Zc(A, [re]), W.contains(T) || W.appendChild(T), p.state.isMounted = !0, J(), process.env.NODE_ENV !== "production" && _t(p.props.interactive && A === Qe.appendTo && re.nextElementSibling !== T, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function xe() {
    return cr(T.querySelectorAll("[data-tippy-root]"));
  }
  function nt(A) {
    p.clearDelayTimeouts(), A && x("onTrigger", [p, A]), Q();
    var W = w(!0), re = G(), ke = re[0], be = re[1];
    mt.isTouch && ke === "hold" && be && (W = be), W ? i = setTimeout(function() {
      p.show();
    }, W) : p.show();
  }
  function He(A) {
    if (p.clearDelayTimeouts(), x("onUntrigger", [p, A]), !p.state.isVisible) {
      we();
      return;
    }
    if (!(p.props.trigger.indexOf("mouseenter") >= 0 && p.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(A.type) >= 0 && s)) {
      var W = w(!1);
      W ? r = setTimeout(function() {
        p.state.isVisible && p.hide();
      }, W) : o = requestAnimationFrame(function() {
        p.hide();
      });
    }
  }
  function Fe() {
    p.state.isEnabled = !0;
  }
  function wt() {
    p.hide(), p.state.isEnabled = !1;
  }
  function xt() {
    clearTimeout(i), clearTimeout(r), cancelAnimationFrame(o);
  }
  function It(A) {
    if (process.env.NODE_ENV !== "production" && _t(p.state.isDestroyed, yn("setProps")), !p.state.isDestroyed) {
      x("onBeforeUpdate", [p, A]), ge();
      var W = p.props, re = Ea(e, Object.assign({}, W, ma(A), {
        ignoreAttributes: !0
      }));
      p.props = re, ee(), W.interactiveDebounce !== re.interactiveDebounce && (ue(), h = pa(Ce, re.interactiveDebounce)), W.triggerTarget && !re.triggerTarget ? wn(W.triggerTarget).forEach(function(ke) {
        ke.removeAttribute("aria-expanded");
      }) : re.triggerTarget && e.removeAttribute("aria-expanded"), ie(), k(), I && I(W, re), p.popperInstance && (J(), xe().forEach(function(ke) {
        requestAnimationFrame(ke._tippy.popperInstance.forceUpdate);
      })), x("onAfterUpdate", [p, A]);
    }
  }
  function j(A) {
    p.setProps({
      content: A
    });
  }
  function ne() {
    process.env.NODE_ENV !== "production" && _t(p.state.isDestroyed, yn("show"));
    var A = p.state.isVisible, W = p.state.isDestroyed, re = !p.state.isEnabled, ke = mt.isTouch && !p.props.touch, be = to(p.props.duration, 0, Qe.duration);
    if (!(A || W || re || ke) && !M().hasAttribute("disabled") && (x("onShow", [p], !1), p.props.onShow(p) !== !1)) {
      if (p.state.isVisible = !0, P() && (T.style.visibility = "visible"), k(), Q(), p.state.isMounted || (T.style.transition = "none"), P()) {
        var qe = v(), it = qe.box, vn = qe.content;
        no([it, vn], 0);
      }
      f = function() {
        var Gt;
        if (!(!p.state.isVisible || d)) {
          if (d = !0, T.offsetHeight, T.style.transition = p.props.moveTransition, P() && p.props.animation) {
            var Ar = v(), ki = Ar.box, gn = Ar.content;
            no([ki, gn], be), va([ki, gn], "visible");
          }
          B(), ie(), ha(ro, p), (Gt = p.popperInstance) == null || Gt.forceUpdate(), x("onMount", [p]), p.props.animation && P() && $(be, function() {
            p.state.isShown = !0, x("onShown", [p]);
          });
        }
      }, Se();
    }
  }
  function Le() {
    process.env.NODE_ENV !== "production" && _t(p.state.isDestroyed, yn("hide"));
    var A = !p.state.isVisible, W = p.state.isDestroyed, re = !p.state.isEnabled, ke = to(p.props.duration, 1, Qe.duration);
    if (!(A || W || re) && (x("onHide", [p], !1), p.props.onHide(p) !== !1)) {
      if (p.state.isVisible = !1, p.state.isShown = !1, d = !1, s = !1, P() && (T.style.visibility = "hidden"), ue(), we(), k(!0), P()) {
        var be = v(), qe = be.box, it = be.content;
        p.props.animation && (no([qe, it], ke), va([qe, it], "hidden"));
      }
      B(), ie(), p.props.animation ? P() && se(ke, p.unmount) : p.unmount();
    }
  }
  function $t(A) {
    process.env.NODE_ENV !== "production" && _t(p.state.isDestroyed, yn("hideWithInteractivity")), S().addEventListener("mousemove", h), ha(Fi, h), h(A);
  }
  function St() {
    process.env.NODE_ENV !== "production" && _t(p.state.isDestroyed, yn("unmount")), p.state.isVisible && p.hide(), p.state.isMounted && (Te(), xe().forEach(function(A) {
      A._tippy.unmount();
    }), T.parentNode && T.parentNode.removeChild(T), ro = ro.filter(function(A) {
      return A !== p;
    }), p.state.isMounted = !1, x("onHidden", [p]));
  }
  function Rt() {
    process.env.NODE_ENV !== "production" && _t(p.state.isDestroyed, yn("destroy")), !p.state.isDestroyed && (p.clearDelayTimeouts(), p.unmount(), ge(), delete e._tippy, p.state.isDestroyed = !0, x("onDestroy", [p]));
  }
}
function bi(e, t) {
  t === void 0 && (t = {});
  var n = Qe.plugins.concat(t.plugins || []);
  process.env.NODE_ENV !== "production" && (Qh(e), ou(t, n)), Kh();
  var i = Object.assign({}, t, {
    plugins: n
  }), r = Hh(e);
  if (process.env.NODE_ENV !== "production") {
    var o = ai(i.content), s = r.length > 1;
    _t(o && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var a = r.reduce(function(l, d) {
    var c = d && sm(d, i);
    return c && l.push(c), l;
  }, []);
  return ai(e) ? a[0] : a;
}
bi.defaultProps = Qe;
bi.setDefaultProps = nm;
bi.currentInput = mt;
Object.assign({}, jc, {
  effect: function(t) {
    var n = t.state, i = {
      popper: {
        position: n.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(n.elements.popper.style, i.popper), n.styles = i, n.elements.arrow && Object.assign(n.elements.arrow.style, i.arrow);
  }
});
var Bo = {
  clientX: 0,
  clientY: 0
}, Mi = [];
function au(e) {
  var t = e.clientX, n = e.clientY;
  Bo = {
    clientX: t,
    clientY: n
  };
}
function am(e) {
  e.addEventListener("mousemove", au);
}
function lm(e) {
  e.removeEventListener("mousemove", au);
}
var cm = {
  name: "followCursor",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference, i = eu(t.props.triggerTarget || n), r = !1, o = !1, s = !0, a = t.props;
    function l() {
      return t.props.followCursor === "initial" && t.state.isVisible;
    }
    function d() {
      i.addEventListener("mousemove", f);
    }
    function c() {
      i.removeEventListener("mousemove", f);
    }
    function u() {
      r = !0, t.setProps({
        getReferenceClientRect: null
      }), r = !1;
    }
    function f(g) {
      var C = g.target ? n.contains(g.target) : !0, m = t.props.followCursor, _ = g.clientX, O = g.clientY, p = n.getBoundingClientRect(), R = _ - p.left, T = O - p.top;
      (C || !t.props.interactive) && t.setProps({
        // @ts-ignore - unneeded DOMRect properties
        getReferenceClientRect: function() {
          var q = n.getBoundingClientRect(), K = _, G = O;
          m === "initial" && (K = q.left + R, G = q.top + T);
          var Y = m === "horizontal" ? q.top : G, P = m === "vertical" ? q.right : K, M = m === "horizontal" ? q.bottom : G, S = m === "vertical" ? q.left : K;
          return {
            width: P - S,
            height: M - Y,
            top: Y,
            right: P,
            bottom: M,
            left: S
          };
        }
      });
    }
    function E() {
      t.props.followCursor && (Mi.push({
        instance: t,
        doc: i
      }), am(i));
    }
    function h() {
      Mi = Mi.filter(function(g) {
        return g.instance !== t;
      }), Mi.filter(function(g) {
        return g.doc === i;
      }).length === 0 && lm(i);
    }
    return {
      onCreate: E,
      onDestroy: h,
      onBeforeUpdate: function() {
        a = t.props;
      },
      onAfterUpdate: function(C, m) {
        var _ = m.followCursor;
        r || _ !== void 0 && a.followCursor !== _ && (h(), _ ? (E(), t.state.isMounted && !o && !l() && d()) : (c(), u()));
      },
      onMount: function() {
        t.props.followCursor && !o && (s && (f(Bo), s = !1), l() || d());
      },
      onTrigger: function(C, m) {
        Qc(m) && (Bo = {
          clientX: m.clientX,
          clientY: m.clientY
        }), o = m.type === "focus";
      },
      onHidden: function() {
        t.props.followCursor && (u(), c(), s = !0);
      }
    };
  }
};
bi.setDefaultProps({
  render: su
});
const um = /* @__PURE__ */ Ee({
  __name: "TippyPopover",
  props: {
    target: {
      type: [String, Object],
      default: ""
    },
    selectorParent: {
      type: Object,
      default: () => window.document
    },
    appendTo: {
      type: [Boolean, Object],
      default: !0
    },
    theme: {
      type: String,
      default: "default"
    },
    arrow: {
      type: [Boolean, String],
      default: !0
    },
    delay: {
      type: [Number, Array],
      default: 0
    },
    duration: {
      type: [Number, Array],
      default: () => [300, 250]
    },
    followCursor: {
      type: [String, Boolean],
      default: !1
    },
    hideOnClick: {
      type: [String, Boolean],
      default: !0
    },
    inertia: {
      type: Boolean,
      default: !1
    },
    interactive: {
      type: Boolean,
      default: !0
    },
    interactiveBorder: {
      type: Number,
      default: 2
    },
    interactiveDebounce: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: [Number, Boolean],
      default: 350
    },
    offset: {
      type: Array,
      default: () => [0, 0]
    },
    zIndex: {
      type: Number,
      default: 800
    },
    placement: {
      type: String,
      default: "top"
    },
    animation: {
      type: [String, Boolean],
      default: "scale"
    },
    trigger: {
      type: String,
      default: "mouseenter click"
    },
    triggerTarget: {
      type: [Object, Array],
      default: null
    }
  },
  setup(e) {
    const t = e, n = ni(null), i = ni(null), r = () => {
      const s = {
        ignoreAttributes: !0,
        allowHTML: !1,
        showOnCreate: !1
        // sticky: false
      };
      return s.appendTo = t.appendTo === !0 ? () => document.body : t.appendTo || "parent", s.arrow = t.arrow, s.theme = t.theme, s.delay = t.delay, s.duration = t.duration, s.hideOnClick = t.hideOnClick, s.followCursor = t.followCursor, s.inertia = t.inertia, s.interactive = t.interactive, s.interactiveBorder = t.interactiveBorder, s.interactiveDebounce = t.interactiveDebounce, s.maxWidth = t.maxWidth, s.zIndex = t.zIndex, s.offset = t.offset, s.placement = t.placement, s.animation = t.animation, s.trigger = t.trigger, s.triggerTarget = t.triggerTarget, s;
    }, o = () => {
      if (!t.target)
        return console.warn("Tippy target can not be null");
      const s = typeof t.target == "string" ? t.selectorParent.querySelector(t.target) : t.target, a = r();
      s && (i.value = bi(s, {
        ...a,
        content: n.value,
        plugins: [cm]
      }));
    };
    return bt(() => {
      o();
    }), Ka(() => {
      i.value && (Array.isArray(i.value) ? i.value.forEach((s) => {
        s.unmount(), s.destroy();
      }) : (i.value.unmount(), i.value.destroy()));
    }), Ge(() => t.target, o), (s, a) => (F(), X("div", {
      ref_key: "tippyWrapper",
      ref: n,
      class: "tippy-wrapper"
    }, [
      Pe(s.$slots, "default")
    ], 512));
  }
}), dm = (e) => Object.prototype.toString.call(e);
function fm(e) {
  return dm(e).slice(8, -1).toLowerCase();
}
const pm = Array.isArray || ((e) => fm(e) === "array"), hm = { class: "node-details-info" }, mm = { class: "details_header" }, vm = { class: "details_label" }, gm = { class: "details_value" }, ym = { key: 1 }, bm = /* @__PURE__ */ Ee({
  __name: "CommonNode",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    },
    translatePrefix: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, { t: n } = Bn(), i = (r, o) => r ? `${t.translatePrefix}${o || ""}${r}` : "-";
    return (r, o) => {
      var s;
      return F(), X("div", hm, [
        U("div", mm, le((s = e.nodeInfo.i18n) != null && s.includes("header") ? N(n)(e.nodeInfo.header) : e.nodeInfo.header), 1),
        (F(!0), X(vt, null, nr(e.nodeInfo.attrs, (a) => {
          var l, d, c, u, f, E;
          return F(), X(vt, { key: a }, [
            U("div", vm, le(N(n)(i(a, e.nodeInfo.prefix))), 1),
            U("div", gm, [
              (l = e.nodeInfo.tags) != null && l[a] ? (F(), X(vt, { key: 0 }, [
                N(pm)((d = e.nodeInfo.values) == null ? void 0 : d[a]) ? (F(!0), X(vt, { key: 0 }, nr(e.nodeInfo.values[a], (h) => {
                  var g;
                  return F(), ye(N(ri), {
                    key: h,
                    size: "small",
                    color: ((g = e.nodeInfo.tags) == null ? void 0 : g[a]) || "arcoblue"
                  }, {
                    default: ae(() => [
                      Ve(le(h || "-"), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128)) : (F(), ye(N(ri), {
                  key: 1,
                  size: "small",
                  color: ((c = e.nodeInfo.tags) == null ? void 0 : c[a]) || "arcoblue"
                }, {
                  default: ae(() => {
                    var h, g, C;
                    return [
                      Ve(le((h = e.nodeInfo.i18n) != null && h.includes(a) ? N(n)(i((g = e.nodeInfo.values) == null ? void 0 : g[a])) : ((C = e.nodeInfo.values) == null ? void 0 : C[a]) || "-"), 1)
                    ];
                  }),
                  _: 2
                }, 1032, ["color"]))
              ], 64)) : (F(), X("span", ym, le((u = e.nodeInfo.i18n) != null && u.includes(a) ? N(n)(i((f = e.nodeInfo.values) == null ? void 0 : f[a])) : ((E = e.nodeInfo.values) == null ? void 0 : E[a]) || "-"), 1))
            ])
          ], 64);
        }), 128))
      ]);
    };
  }
}), Em = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, wm = {}, Sm = {
  focusable: "false",
  "data-icon": "partition",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
function _m(e, t) {
  return F(), X("svg", Sm, [...t[0] || (t[0] = [
    U("path", { d: "M640.6 429.8h257.1c7.9 0 14.3-6.4 14.3-14.3V158.3c0-7.9-6.4-14.3-14.3-14.3H640.6c-7.9 0-14.3 6.4-14.3 14.3v92.9H490.6c-3.9 0-7.1 3.2-7.1 7.1v221.5h-85.7v-96.5c0-7.9-6.4-14.3-14.3-14.3H126.3c-7.9 0-14.3 6.4-14.3 14.3v257.2c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3V544h85.7v221.5c0 3.9 3.2 7.1 7.1 7.1h135.7v92.9c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3v-257c0-7.9-6.4-14.3-14.3-14.3h-257c-7.9 0-14.3 6.4-14.3 14.3v100h-78.6v-393h78.6v100c0 7.9 6.4 14.3 14.3 14.3zm53.5-217.9h150V362h-150V211.9zM329.9 587h-150V437h150v150zm364.2 75.1h150v150.1h-150V662.1z" }, null, -1)
  ])]);
}
const Cm = /* @__PURE__ */ Em(wm, [["render", _m]]), km = { class: "node-details-info" }, Tm = { class: "details_header" }, Am = { class: "details_label" }, Om = { class: "details_value flex items-center" }, Dm = { class: "details_label" }, Pm = { class: "details_value" }, Bm = { class: "child-process-viewer" }, xm = /* @__PURE__ */ Ee({
  __name: "CallActivity",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    },
    translatePrefix: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "light"
    },
    local: {
      type: String,
      default: "zh_CN"
    },
    toolbar: {
      type: Boolean,
      default: !0
    },
    showDownload: {
      type: Boolean,
      default: !1
    },
    fileName: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, { t: n } = Bn(), i = oe(!1), r = (o) => o ? t.translatePrefix + o : "-";
    return (o, s) => {
      const a = Cm, l = Ig;
      return F(), X("div", km, [
        U("div", Tm, le(e.nodeInfo.name), 1),
        U("div", Am, le(N(n)(r("calledInstance"))), 1),
        U("div", Om, [
          H(N(ri), { color: "arcoblue" }, {
            default: ae(() => [
              U("span", null, le(e.nodeInfo.modelName || "-"), 1)
            ]),
            _: 1
          }),
          H(N(Jt), {
            style: { zIndex: 9999 },
            "render-to-body": !0
          }, {
            content: ae(() => [...s[2] || (s[2] = [
              U("span", null, "查看流程图", -1)
            ])]),
            default: ae(() => [
              H(N(zd), {
                style: { "margin-left": "0.5rem" },
                onClick: s[0] || (s[0] = (d) => i.value = !0)
              }, {
                default: ae(() => [
                  H(a)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        U("div", Dm, le(N(n)(r("inheritVariables"))), 1),
        U("div", Pm, le(e.nodeInfo.inheritVariables || "-"), 1),
        H(N(yo), {
          visible: N(i),
          "onUpdate:visible": s[1] || (s[1] = (d) => Yu(i) ? i.value = d : null),
          title: e.nodeInfo.modelName,
          footer: !1,
          "modal-style": {
            zIndex: 9999,
            width: "60vw",
            maxWidth: "960px",
            padding: "0"
          },
          "body-style": {
            width: "60vw",
            maxWidth: "960px",
            height: "40vh",
            maxHeight: "640px",
            position: "relative",
            padding: "0"
          },
          "title-align": "start",
          draggable: ""
        }, {
          default: ae(() => [
            U("div", Bm, [
              N(i) ? (F(), ye(l, {
                key: 0,
                toolbar: !1,
                local: e.local,
                "file-name": e.fileName,
                "translate-prefix": e.translatePrefix,
                theme: e.theme,
                "proc-inst-id": e.nodeInfo.instanceId,
                "model-key": e.nodeInfo.modelKey
              }, null, 8, ["local", "file-name", "translate-prefix", "theme", "proc-inst-id", "model-key"])) : ve("", !0)
            ])
          ]),
          _: 1
        }, 8, ["visible", "title"])
      ]);
    };
  }
}), Im = ["width", "height", "stroke-width", "stroke"], $m = /* @__PURE__ */ Ee({
  name: "GenderFemale",
  __name: "GenderFemale",
  props: {
    size: {
      type: Number,
      default: 16
    },
    stroke: {
      type: Number,
      default: 2
    },
    color: {
      type: String,
      default: "#2c3e50"
    }
  },
  setup(e) {
    return (t, n) => (F(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      class: "icon icon-tabler icon-tabler-gender-female",
      width: e.size,
      height: e.size,
      viewBox: "0 0 24 24",
      "stroke-width": e.stroke,
      stroke: e.color,
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [...n[0] || (n[0] = [
      U("path", { d: "M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, null, -1),
      U("path", { d: "M12 14v7" }, null, -1),
      U("path", { d: "M9 18h6" }, null, -1)
    ])], 8, Im));
  }
}), Rm = ["width", "height", "stroke-width", "stroke"], Fm = /* @__PURE__ */ Ee({
  name: "GenderMale",
  __name: "GenderMale",
  props: {
    size: {
      type: Number,
      default: 16
    },
    stroke: {
      type: Number,
      default: 2
    },
    color: {
      type: String,
      default: "#2c3e50"
    }
  },
  setup(e) {
    return (t, n) => (F(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      class: "icon icon-tabler icon-tabler-gender-male",
      width: e.size,
      height: e.size,
      viewBox: "0 0 24 24",
      "stroke-width": e.stroke,
      stroke: e.color,
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [...n[0] || (n[0] = [
      U("path", { d: "M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, null, -1),
      U("path", { d: "M19 5l-5.4 5.4" }, null, -1),
      U("path", { d: "M19 5h-5" }, null, -1),
      U("path", { d: "M19 5v5" }, null, -1)
    ])], 8, Rm));
  }
}), Mm = {
  class: "icon-image",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  width: "72",
  height: "72"
}, Nm = /* @__PURE__ */ Ee({
  name: "EmptyFemaleImage",
  __name: "EmptyFemaleImage",
  setup(e) {
    return (t, n) => (F(), X("svg", Mm, [...n[0] || (n[0] = [
      Ya('<path d="M288.921053 707.654248c-152.288409 12.659309-99.539384-170.917798-51.367801-420.713709C268.191292 68.17078 384.956012 0.707734 515.144851 0.81047c154.674158 0.125566 213.530243 78.695472 262.47805 305.124741 64.118431 367.428176 100.977683 417.152208-17.1226 417.015227-102.005039-0.125566-471.579248-15.29619-471.579248-15.29619z"></path><path d="M73.689965 1023.269436l50.374691-320.295365 260.994091-81.161126h233.803403l281.061779 81.172541 50.386106 320.28395H73.689965z" fill="#AAD5DC"></path><path d="M618.816489 622.543509l280.513857 81.046975L949.499565 1022.561702H74.55751l50.16922-318.982633 260.446168-81.046975h233.643591m0.205472-1.472544h-234.008874L123.402582 702.403318 72.82242 1024h878.35516l-50.591577-321.596682-281.621118-81.332353z"></path><path d="M591.100707 1019.125766H415.468486l-46.721869-387.724165 71.127282-25.729561 137.094955-2.054712 70.625019 31.311528-56.493166 384.19691zM667.958353 265.640024c68.992665-29.416628 96.936749 101.171739 5.262346 153.030388z" fill="#FFCFB5"></path><path d="M585.016476 815.640782H425.194123l7.419794-206.841014-20.958063-131.22761 173.91996 4.006688-12.145631 110.440774 11.586293 223.621162z" fill="#FFCFB5"></path><path d="M677.763895 329.564399c1.141507-100.635231-39.096604-173.577509-39.096604-173.577508l-60.168818 11.98582a496.407018 496.407018 0 0 1-81.378013 9.200544 496.270038 496.270038 0 0 1-81.378012-9.200544l-60.180234-11.98582s-40.181036 72.942278-39.085189 173.577508l-1.141507 92.81591c0 68.17078 101.046173 155.244911 181.739282 155.244911 59.244198 0 181.727867-87.062716 181.727866-155.244911z" fill="#FFE7D9"></path><path d="M320.632109 269.361336c-68.98125-29.428043-96.925334 101.171739-5.25093 153.018973z" fill="#FFCFB5"></path><path d="M515.144851 91.526007c-27.944084 83.158763-124.230174 172.961095-167.801485 177.835329s-71.54964-4.269235-71.54964-4.269235S337.811785 61.287495 515.144851 91.526007z"></path><path d="M445.307471 133.796c9.942523 95.190244 227.833322 186.659176 234.008874 180.848907 20.421555-78.821038 55.831093-7.648095 55.831092-7.648095l-54.4727-202.046686-122.483668-49.084788h-67.953894"></path><path d="M416.119145 1018.383787l-28.537668-236.919715c23.423717 24.348338 90.612802 33.103694 141.980604 33.103694 44.233385 0 80.932825-5.97008 93.101286-14.976568l-32.190489 218.792589z" fill="#FFFFFF"></path><path d="M388.563173 783.484538c10.638842 10.068089 29.302477 18.001561 55.557131 23.629189 24.451074 5.239516 54.792322 8.127528 85.430362 8.127528 43.445745 0 78.558491-5.467817 92.11959-14.131853l-31.836622 216.543821H416.769804L388.563173 783.484538m-1.997637-4.234989l28.90295 239.933293h175.643636s28.537667-194.227365 32.544356-221.38381c-10.684503 10.033844-50.032239 15.981094-94.105812 15.981094-57.075335 0-122.209707-10.079504-142.98513-34.519162z"></path><path d="M370.538782 631.401601l-79.871224 26.905313-3.789802 120.942635h41.710655l-32.453035 39.758678 72.611241 199.535371 48.514034 0.582168-46.721869-387.724165zM647.593873 634.928856l85.670078 24.565225 27.202105 79.996789-54.415625 22.088155 54.415625 17.670524-103.431922 238.951597-65.933427 0.92462 56.493166-384.19691z" fill="#A6D3DB"></path>', 12)
    ])]));
  }
}), Lm = {
  class: "icon-image",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  width: "72",
  height: "72"
}, jm = /* @__PURE__ */ Ee({
  name: "EmptyMaleImage",
  __name: "EmptyMaleImage",
  setup(e) {
    return (t, n) => (F(), X("svg", Lm, [...n[0] || (n[0] = [
      Ya('<path d="M384.177143 618.594286l-263.142857 81.828571L70.131429 1024h883.737142l-50.902857-323.577143-283.337143-81.828571H384.177143z" fill="#262626"></path><path d="M422.828571 493.2h160.8v185.554286h-160.8z" fill="#EAA063"></path><path d="M734.52 196.205714c0 131.165714 11.725714 212.102857-225.771429 210.788572-230.011429-1.268571-249.222857-79.622857-249.222857-210.788572S380.828571 0 511.994286 0s222.525714 65.04 222.525714 196.205714z" fill="#834B12"></path><path d="M678.771429 325.302857c1.142857-101.257143-39.325714-174.64-39.325715-174.64l-60.571428 12.057143a500.48 500.48 0 0 1-81.874286 9.257143 500.571429 500.571429 0 0 1-81.885714-9.257143l-60.571429-12.057143s-40.377143 73.382857-39.325714 174.64l-1.142857 93.382857c0 68.571429 50.491429 80.354286 103.348571 116.068572 27.428571 18.491429 47.92 35.737143 79.508572 40.114285 31.577143-4.377143 52.114286-21.622857 79.497142-40.114285 52.857143-35.714286 103.348571-47.474286 103.348572-116.068572z" fill="#FFBF82"></path><path d="M319.457143 264.731429c-69.382857-29.554286-97.531429 101.794286-5.291429 153.954285zM670.714286 255.577143c69.417143-29.611429 97.531429 101.794286 5.291428 153.954286z" fill="#EAA063"></path><path d="M385.514286 625.382857l116.388571 49.577143 116.502857-49.622857-106.468571 316.24-126.422857-316.194286z" fill="#FFFFFF"></path><path d="M617.171429 626.662857l-105.291429 312.777143-125.017143-312.674286 114.445714 48.754286 0.582858 0.24 0.582857-0.24 114.697143-48.857143m2.445714-2.651428l-117.714286 50.148571-117.714286-50.148571 127.805715 319.737142 107.622857-319.702857z"></path><path d="M479.068571 935.611429l11.108572-235.988572h26.857143l11.108571 235.988572h-49.074286z" fill="#B292CB"></path><path d="M516.634286 700.022857l11.074285 235.188572h-48.217142l11.062857-235.188572h26.08m0.777143-0.8H489.788571l-11.142857 236.8h49.92l-11.154285-236.845714z"></path><path d="M484.52 735.177143a11.828571 11.828571 0 0 1-11.428571-8.937143l-7.268572-28.742857a11.828571 11.828571 0 0 1 11.428572-14.731429h49.28a11.828571 11.828571 0 0 1 11.428571 14.731429L530.702857 726.24a11.851429 11.851429 0 0 1-11.485714 8.937143z" fill="#B292CB"></path><path d="M526.531429 683.177143a11.428571 11.428571 0 0 1 11.085714 14.24l-7.268572 28.731428a11.428571 11.428571 0 0 1-11.085714 8.64h-34.742857a11.428571 11.428571 0 0 1-11.085714-8.64l-7.268572-28.731428a11.428571 11.428571 0 0 1 11.085715-14.24h49.28m0-0.811429h-49.28a12.24 12.24 0 0 0-11.862858 15.245715l7.257143 28.742857a12.24 12.24 0 0 0 11.874286 9.234285h34.742857a12.24 12.24 0 0 0 11.874286-9.234285l7.268571-28.742857a12.251429 12.251429 0 0 0-11.874285-15.245715z"></path><path d="M415.845714 583.931429l86.057143 94.822857-68.502857 60.262857-49.222857-120.422857 31.668571-34.662857z" fill="#FFFFFF"></path><path d="M587.948571 583.931429l-86.045714 94.822857 68.491429 60.262857 49.234285-120.422857-31.68-34.662857z" fill="#FFFFFF"></path><path d="M380.36 619.782857l-58.742857 18.285714 17.268571 94.194286 91.085715 44.685714-87.188572 36.16 169.668572 144.445715a5.028571 5.028571 0 0 0 7.885714-5.782857z" fill="#676568"></path><path d="M623.468571 619.714286l76.137143 21.977143a4.251429 4.251429 0 0 1 3.062857 4.08v128.228571a4.251429 4.251429 0 0 1-2.068571 3.645714l-92.4 55.097143a4.251429 4.251429 0 0 0 0.548571 7.565714l72.24 29.954286a4.251429 4.251429 0 0 1 0.8 7.405714L489.434286 1011.714286a4.24 4.24 0 0 1-6.422857-4.891429l135.28-384.445714a4.228571 4.228571 0 0 1 5.177142-2.662857z" fill="#676568"></path>', 15)
    ])]));
  }
}), zm = { class: "node-details-info" }, Vm = { class: "details_header" }, Um = { class: "details_label" }, Hm = { class: "details_value" }, qm = { style: { "padding-right": "8px" } }, Wm = { class: "person-information-grid" }, Gm = { class: "details_special" }, Km = { class: "header-person-img" }, Ym = ["src"], Xm = { class: "details_label" }, Jm = {
  class: "details_value",
  style: { display: "inline-flex", "align-items": "center" }
}, Zm = { class: "details_label" }, Qm = { class: "details_value" }, e2 = { class: "details_label" }, t2 = { class: "details_value" }, n2 = { class: "details_label" }, i2 = { class: "details_value long" }, r2 = { class: "details_label" }, o2 = { class: "details_value long" }, s2 = { key: 1 }, a2 = { class: "details_label" }, l2 = { class: "details_value" }, c2 = /* @__PURE__ */ Ee({
  name: "UserTask",
  __name: "UserTask",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    },
    translatePrefix: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, { t: n } = Bn(), i = {
      processing: "arcoblue",
      finish: "green",
      pending: "orangered"
    }, r = (a) => a ? t.translatePrefix + a : "-", o = Z(() => t.nodeInfo.status !== "pending"), s = Z(() => t.nodeInfo.status === "finish");
    return (a, l) => {
      var E, h;
      const d = jm, c = Nm, u = Fm, f = $m;
      return F(), X("div", zm, [
        U("div", Vm, le(e.nodeInfo.name), 1),
        U("div", Um, le(N(n)(r("approver"))), 1),
        U("div", Hm, [
          U("div", {
            class: "approval-user-list",
            style: ot({ "--approval-num": (E = e.nodeInfo.approvalVos) == null ? void 0 : E.length })
          }, [
            (h = e.nodeInfo.approvalVos) != null && h.length ? (F(!0), X(vt, { key: 0 }, nr(e.nodeInfo.approvalVos, (g) => (F(), ye(N(Jt), {
              key: g.code,
              position: "bottom",
              style: { zIndex: 9999 },
              "render-to-body": !0,
              title: N(n)(r("Personnel information"))
            }, {
              content: ae(() => [
                U("div", Wm, [
                  U("div", Gm, [
                    U("div", Km, [
                      g.headImg ? (F(), X("img", {
                        key: 0,
                        src: g.headImg,
                        alt: "image"
                      }, null, 8, Ym)) : ve("", !0),
                      !g.headImg && g.sex === 1 ? (F(), ye(d, { key: 1 })) : ve("", !0),
                      !g.headImg && g.sex === 2 ? (F(), ye(c, { key: 2 })) : ve("", !0)
                    ])
                  ]),
                  U("div", Xm, le(N(n)(r("Person name"))), 1),
                  U("div", Jm, [
                    U("span", null, le(g.name), 1),
                    g.sex === 1 ? (F(), ye(u, {
                      key: 0,
                      color: "#0099FF"
                    })) : ve("", !0),
                    g.sex === 2 ? (F(), ye(f, {
                      key: 1,
                      color: "#FF99CC"
                    })) : ve("", !0)
                  ]),
                  U("div", Zm, le(N(n)(r("Job number"))), 1),
                  U("div", Qm, le(g.code), 1),
                  U("div", e2, le(N(n)(r("Mobile phone"))), 1),
                  U("div", t2, le(g.mobile || "-"), 1),
                  U("div", n2, le(N(n)(r("Mail"))), 1),
                  U("div", i2, le(g.email || "-"), 1),
                  U("div", r2, le(N(n)(r("Affiliation"))), 1),
                  U("div", o2, le(`${g.companyName || "-"}${g.deptName ? " - " + g.deptName : ""}`), 1)
                ])
              ]),
              default: ae(() => [
                H(N(ri), {
                  size: "small",
                  color: g.status ? "arcoblue" : "orangered"
                }, {
                  default: ae(() => [
                    U("span", qm, le(g.name), 1),
                    g.status ? (F(), ye(N(h1), {
                      key: 0,
                      size: 12
                    })) : (F(), ye(N(m1), {
                      key: 1,
                      size: 12
                    }))
                  ]),
                  _: 2
                }, 1032, ["color"])
              ]),
              _: 2
            }, 1032, ["title"]))), 128)) : (F(), X("span", s2, "-"))
          ], 4)
        ]),
        U("div", a2, le(N(n)(r("statusName"))), 1),
        U("div", l2, [
          H(N(ri), {
            color: i[e.nodeInfo.status] || "arcoblue"
          }, {
            default: ae(() => [
              Ve(le(e.nodeInfo.statusName || "-"), 1)
            ]),
            _: 1
          }, 8, ["color"])
        ]),
        pt(U("div", { class: "details_label" }, le(N(n)(r("startDate"))), 513), [
          [ht, N(o)]
        ]),
        pt(U("div", { class: "details_value" }, le(e.nodeInfo.startDate || "-"), 513), [
          [ht, N(o)]
        ]),
        pt(U("div", { class: "details_label" }, le(N(n)(r("endDate"))), 513), [
          [ht, N(s)]
        ]),
        pt(U("div", { class: "details_value" }, le(e.nodeInfo.status === "processing" ? "-" : e.nodeInfo.endDate || "-"), 513), [
          [ht, N(s)]
        ]),
        pt(U("div", { class: "details_label" }, le(N(n)(r("duration"))), 513), [
          [ht, N(s)]
        ]),
        pt(U("div", { class: "details_value" }, le(e.nodeInfo.status === "processing" ? "-" : e.nodeInfo.duration || "-"), 513), [
          [ht, N(s)]
        ])
      ]);
    };
  }
});
function lu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: u2 } = Object.prototype, { getPrototypeOf: Ut } = Object, { iterator: Ei, toStringTag: cu } = Symbol, ci = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), uu = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), du = (e, t, n) => e === Object.prototype || !n && t === null, d2 = (e) => {
  if (!Object.isExtensible(e))
    return !1;
  const t = Object.getOwnPropertyNames(e);
  return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((n) => {
    if (uu(n))
      return !1;
    const i = Object.getOwnPropertyDescriptor(e, n);
    return !!i && i.configurable && i.writable === !0;
  });
}, ui = (e, t) => {
  let n = e;
  const i = [];
  for (; n != null; ) {
    if (i.indexOf(n) !== -1)
      return !1;
    i.push(n);
    const r = Ut(n);
    if (du(n, r, n === e))
      return !1;
    if (ci(n, t))
      return !0;
    n = r;
  }
  return !1;
}, f2 = (e, t) => e != null && ui(e, t) ? e[t] : void 0, p2 = (e) => {
  if (e == null || typeof e != "object" && typeof e != "function")
    return e;
  const t = Ut(e);
  if (t === null && d2(e))
    return e;
  const n = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), r = [];
  let o = e;
  for (; o != null && r.indexOf(o) === -1; ) {
    r.push(o);
    const s = o === e ? t : Ut(o);
    if (du(o, s, o === e))
      break;
    const a = Object.getOwnPropertyNames(o);
    Object.getOwnPropertySymbols && a.push(...Object.getOwnPropertySymbols(o));
    for (const l of a)
      uu(l) || ci(i, l) || (n[l] = e[l], i[l] = !0);
    o = s;
  }
  return n;
}, hs = /* @__PURE__ */ ((e) => (t) => {
  const n = u2.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ct = (e) => (e = e.toLowerCase(), (t) => hs(t) === e), Cr = (e) => (t) => typeof t === e, { isArray: cn } = Array, un = Cr("undefined");
function Mn(e) {
  return e !== null && !un(e) && e.constructor !== null && !un(e.constructor) && Ze(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fu = ct("ArrayBuffer");
function h2(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fu(e.buffer), t;
}
const m2 = Cr("string"), Ze = Cr("function"), pu = Cr("number"), Nn = (e) => e !== null && typeof e == "object", v2 = (e) => e === !0 || e === !1, Xi = (e) => {
  if (!Nn(e))
    return !1;
  const t = Ut(e);
  return (t === null || t === Object.prototype || Ut(t) === null) && // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
  // evidence the value is tagged/iterable, while ignoring members reachable
  // only through shared or terminal prototype boundaries.
  !ui(e, cu) && !ui(e, Ei);
}, g2 = (e) => {
  if (!Nn(e) || Mn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, y2 = ct("Date"), b2 = ct("File"), E2 = (e) => !!(e && typeof e.uri < "u"), w2 = (e) => e && typeof e.getParts < "u", S2 = ct("Blob"), _2 = ct("FileList"), C2 = ct("Set"), k2 = (e) => Nn(e) && Ze(e.pipe);
function T2() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const _a = T2(), Ca = typeof _a.FormData < "u" ? _a.FormData : void 0, A2 = (e) => {
  if (!e) return !1;
  if (Ca && e instanceof Ca) return !0;
  const t = Ut(e);
  if (!t || t === Object.prototype || !Ze(e.append)) return !1;
  const n = hs(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && Ze(e.toString) && e.toString() === "[object FormData]";
}, O2 = ct("URLSearchParams"), [D2, P2, B2, x2] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ct), I2 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let i, r;
  if (typeof e != "object" && (e = [e]), cn(e))
    for (i = 0, r = e.length; i < r; i++)
      t.call(null, e[i], i, e);
  else {
    if (Mn(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let a;
    for (i = 0; i < s; i++)
      a = o[i], t.call(null, e[a], a, e);
  }
}
function hu(e, t) {
  if (Mn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let i = n.length, r;
  for (; i-- > 0; )
    if (r = n[i], t === r.toLowerCase())
      return r;
  return null;
}
const tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, mu = (e) => !un(e) && e !== tn;
function xo(...e) {
  const { caseless: t, skipUndefined: n } = mu(this) && this || {}, i = {}, r = (o, s) => {
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    const a = t && typeof s == "string" && hu(i, s) || s, l = ci(i, a) ? i[a] : void 0;
    Xi(l) && Xi(o) ? i[a] = xo(l, o) : Xi(o) ? i[a] = xo({}, o) : cn(o) ? i[a] = o.slice() : (!n || !un(o)) && (i[a] = o);
  };
  for (let o = 0, s = e.length; o < s; o++) {
    const a = e[o];
    if (!a || Mn(a) || (wi(a, r), typeof a != "object" || cn(a)))
      continue;
    const l = Object.getOwnPropertySymbols(a);
    for (let d = 0; d < l.length; d++) {
      const c = l[d];
      q2.call(a, c) && r(a[c], c);
    }
  }
  return i;
}
const $2 = (e, t, n, { allOwnKeys: i } = {}) => (wi(
  t,
  (r, o) => {
    n && Ze(r) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: lu(r, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      __proto__: null,
      value: r,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: i }
), e), R2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), F2 = (e, t, n, i) => {
  e.prototype = Object.create(t.prototype, i), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, M2 = (e, t, n, i) => {
  let r, o, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      s = r[o], (!i || i(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && Ut(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, N2 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const i = e.indexOf(t, n);
  return i !== -1 && i === n;
}, L2 = (e) => {
  if (!e) return null;
  if (cn(e)) return e;
  let t = e.length;
  if (!pu(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, j2 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ut(Uint8Array)), z2 = (e, t) => {
  const i = (e && e[Ei]).call(e);
  let r;
  for (; (r = i.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, V2 = (e, t) => {
  let n;
  const i = [];
  for (; (n = e.exec(t)) !== null; )
    i.push(n);
  return i;
}, U2 = ct("HTMLFormElement"), H2 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, i, r) {
  return i.toUpperCase() + r;
}), { propertyIsEnumerable: q2 } = Object.prototype, W2 = ct("RegExp"), vu = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), i = {};
  wi(n, (r, o) => {
    let s;
    (s = t(r, o, e)) !== !1 && (i[o] = s || r);
  }), Object.defineProperties(e, i);
}, G2 = (e) => {
  vu(e, (t, n) => {
    if (Ze(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const i = e[n];
    if (Ze(i)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, K2 = (e, t) => {
  const n = {}, i = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return cn(e) ? i(e) : i(String(e).split(t)), n;
}, Y2 = () => {
}, X2 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function J2(e) {
  return !!(e && Ze(e.append) && e[cu] === "FormData" && e[Ei]);
}
const Z2 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (i) => {
    if (Nn(i)) {
      if (t.has(i))
        return;
      if (Mn(i))
        return i;
      if (!("toJSON" in i)) {
        t.add(i);
        let r;
        if (C2(i)) {
          r = [];
          for (const o of i) {
            const s = n(o);
            !un(s) && r.push(s);
          }
        } else
          r = cn(i) ? [] : {}, wi(i, (o, s) => {
            const a = n(o);
            !un(a) && (r[s] = a);
          });
        return t.delete(i), r;
      }
    }
    return i;
  };
  return n(e);
}, Q2 = ct("AsyncFunction"), ev = (e) => e && (Nn(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), gu = ((e, t) => e ? setImmediate : t ? ((n, i) => (tn.addEventListener(
  "message",
  ({ source: r, data: o }) => {
    r === tn && o === n && i.length && i.shift()();
  },
  !1
), (r) => {
  i.push(r), tn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Ze(tn.postMessage)), tv = typeof queueMicrotask < "u" ? queueMicrotask.bind(tn) : typeof process < "u" && process.nextTick || gu, yu = (e) => e != null && Ze(e[Ei]), nv = (e) => e != null && ui(e, Ei) && yu(e), y = {
  isArray: cn,
  isArrayBuffer: fu,
  isBuffer: Mn,
  isFormData: A2,
  isArrayBufferView: h2,
  isString: m2,
  isNumber: pu,
  isBoolean: v2,
  isObject: Nn,
  isPlainObject: Xi,
  isEmptyObject: g2,
  isReadableStream: D2,
  isRequest: P2,
  isResponse: B2,
  isHeaders: x2,
  isUndefined: un,
  isDate: y2,
  isFile: b2,
  isReactNativeBlob: E2,
  isReactNative: w2,
  isBlob: S2,
  isRegExp: W2,
  isFunction: Ze,
  isStream: k2,
  isURLSearchParams: O2,
  isTypedArray: j2,
  isFileList: _2,
  forEach: wi,
  merge: xo,
  extend: $2,
  trim: I2,
  stripBOM: R2,
  inherits: F2,
  toFlatObject: M2,
  kindOf: hs,
  kindOfTest: ct,
  endsWith: N2,
  toArray: L2,
  forEachEntry: z2,
  matchAll: V2,
  isHTMLForm: U2,
  hasOwnProperty: ci,
  hasOwnProp: ci,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: ui,
  getSafeProp: f2,
  toSafeFlatObject: p2,
  reduceDescriptors: vu,
  freezeMethods: G2,
  toObjectSet: K2,
  toCamelCase: H2,
  noop: Y2,
  toFiniteNumber: X2,
  findKey: hu,
  global: tn,
  isContextDefined: mu,
  isSpecCompliantForm: J2,
  toJSONObject: Z2,
  isAsyncFn: Q2,
  isThenable: ev,
  setImmediate: gu,
  asap: tv,
  isIterable: yu,
  isSafeIterable: nv
}, iv = y.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), rv = (e) => {
  const t = {};
  let n, i, r;
  return e && e.split(`
`).forEach(function(s) {
    r = s.indexOf(":"), n = s.substring(0, r).trim().toLowerCase(), i = s.substring(r + 1).trim();
    const a = y.hasOwnProp(t, n);
    !n || a && y.hasOwnProp(iv, n) || (n === "set-cookie" ? a ? t[n].push(i) : t[n] = [i] : t[n] = a ? t[n] + ", " + i : i);
  }), t;
};
function ov(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const i = e.charCodeAt(t);
    if (i !== 9 && i !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const i = e.charCodeAt(n - 1);
    if (i !== 9 && i !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const sv = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), av = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function ms(e, t) {
  return y.isArray(e) ? e.map((n) => ms(n, t)) : ov(String(e).replace(t, ""));
}
const lv = (e) => ms(e, sv), cv = (e) => ms(e, av);
function bu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return y.forEach(e.toJSON(), (n, i) => {
    t[i] = cv(n);
  }), t;
}
const ka = Symbol("internals");
function Hn(e) {
  return e && String(e).trim().toLowerCase();
}
function Ji(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Ji) : lv(String(e));
}
function uv(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = n.exec(e); )
    t[i[1]] = i[2];
  return t;
}
const dv = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function oo(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const i = e.charCodeAt(t);
    if (i !== 9 && i !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const i = e.charCodeAt(n - 1);
    if (i !== 9 && i !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
function fv(e) {
  const t = e.length - 1;
  if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34)
    return e;
  let n = "";
  for (let i = 1; i < t; i++) {
    const r = e.charCodeAt(i);
    if (r === 34 || r === 92 && (i += 1, i >= t))
      return e;
    n += e[i];
  }
  return n;
}
function pv(e) {
  const t = /* @__PURE__ */ Object.create(null), n = String(e);
  let i = 0, r = !1, o = !1;
  function s(a) {
    const l = oo(n.slice(i, a)), d = l.indexOf("=");
    if (d < 1)
      return;
    const c = oo(l.slice(0, d));
    if (!dv.test(c))
      return;
    const u = c.toLowerCase();
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return;
    const f = oo(l.slice(d + 1));
    t[u] = fv(f);
  }
  for (let a = 0; a < n.length; a++) {
    const l = n.charCodeAt(a);
    r ? o ? o = !1 : l === 92 ? o = !0 : l === 34 && (r = !1) : l === 34 ? r = !0 : (l === 44 || l === 59) && (s(a), i = a + 1);
  }
  return s(n.length), t;
}
const hv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function so(e, t, n, i, r) {
  if (y.isFunction(i))
    return i.call(this, t, n);
  if (r && (t = n), !!y.isString(t)) {
    if (y.isString(i))
      return t.indexOf(i) !== -1;
    if (y.isRegExp(i))
      return i.test(t);
  }
}
function mv(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, i) => n.toUpperCase() + i);
}
function vv(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(r, o, s) {
        return this[i].call(this, t, r, o, s);
      },
      configurable: !0
    });
  });
}
let Ue = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, i) {
    const r = this;
    function o(a, l, d) {
      const c = Hn(l);
      if (!c)
        return;
      const u = y.findKey(r, c);
      (!u || r[u] === void 0 || d === !0 || d === void 0 && r[u] !== !1) && (r[u || l] = Ji(a));
    }
    const s = (a, l) => y.forEach(a, (d, c) => o(d, c, l));
    if (y.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (y.isString(t) && (t = t.trim()) && !hv(t))
      s(rv(t), n);
    else if (y.isObject(t) && y.isSafeIterable(t)) {
      let a = /* @__PURE__ */ Object.create(null), l, d;
      for (const c of t) {
        if (!y.isArray(c))
          throw new TypeError("Object iterator must return a key-value pair");
        d = c[0], y.hasOwnProp(a, d) ? (l = a[d], a[d] = y.isArray(l) ? [...l, c[1]] : [l, c[1]]) : a[d] = c[1];
      }
      s(a, n);
    } else
      t != null && o(n, t, i);
    return this;
  }
  get(t, n) {
    if (t = Hn(t), t) {
      const i = y.findKey(this, t);
      if (i) {
        const r = this[i];
        if (!n)
          return r;
        if (n === !0)
          return uv(r);
        if (y.isFunction(n))
          return n.call(this, r, i);
        if (y.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Hn(t), t) {
      const i = y.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!n || so(this, this[i], i, n)));
    }
    return !1;
  }
  delete(t, n) {
    const i = this;
    let r = !1;
    function o(s) {
      if (s = Hn(s), s) {
        const a = y.findKey(i, s);
        a && (!n || so(i, i[a], a, n)) && (delete i[a], r = !0);
      }
    }
    return y.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let i = n.length, r = !1;
    for (; i--; ) {
      const o = n[i];
      (!t || so(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, i = {};
    return y.forEach(this, (r, o) => {
      const s = y.findKey(i, o);
      if (s) {
        n[s] = Ji(r), delete n[o];
        return;
      }
      const a = t ? mv(o) : String(o).trim();
      a !== o && delete n[o], n[a] = Ji(r), i[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (i, r) => {
      i != null && i !== !1 && (n[r] = t && y.isArray(i) ? i.join(", ") : i);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    const t = this.get("set-cookie");
    return y.isArray(t) ? t : t == null || t === !1 ? [] : [t];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static parseParameters(t) {
    return pv(t);
  }
  static concat(t, ...n) {
    const i = new this(t);
    return n.forEach((r) => i.set(r)), i;
  }
  static accessor(t) {
    const i = (this[ka] = this[ka] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(s) {
      const a = Hn(s);
      i[a] || (vv(r, s), i[a] = !0);
    }
    return y.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Ue.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
y.reduceDescriptors(Ue.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[n] = i;
    }
  };
});
y.freezeMethods(Ue);
const ur = "[REDACTED ****]";
function gv(e) {
  if (y.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (y.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function yv(e, t) {
  const n = new Set(t.map((o) => String(o).toLowerCase())), i = [], r = (o) => {
    if (o === null || typeof o != "object" || y.isBuffer(o)) return o;
    if (i.indexOf(o) !== -1) return;
    o instanceof Ue && (o = o.toJSON()), i.push(o);
    let s;
    if (y.isArray(o))
      s = [], o.forEach((a, l) => {
        const d = r(a);
        y.isUndefined(d) || (s[l] = d);
      });
    else {
      if (!y.isPlainObject(o) && gv(o))
        return i.pop(), o;
      s = /* @__PURE__ */ Object.create(null);
      for (const [a, l] of Object.entries(o)) {
        const d = n.has(a.toLowerCase()) ? ur : r(l);
        y.isUndefined(d) || (s[a] = d);
      }
    }
    return i.pop(), s;
  };
  return r(e);
}
function Ta(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function bv(e) {
  return e.errors.map((n) => {
    try {
      return n && n.message ? Ta(n.message) : Ta(n);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
let z = class Eu extends Error {
  static from(t, n, i, r, o, s) {
    let a = t.message;
    !a && y.isArray(t.errors) && t.errors.length && (a = bv(t));
    const l = new Eu(a, n || t.code, i, r, o);
    return Object.defineProperty(l, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), l.name = t.name, t.status != null && l.status == null && (l.status = t.status), s && Object.assign(l, s), l;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, i, r, o) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), i && (this.config = i), r && (this.request = r), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    const t = this.config, n = t && y.hasOwnProp(t, "redact") ? t.redact : void 0, i = y.isArray(n) && n.length > 0 ? yv(t, n) : y.toJSONObject(t);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: i,
      code: this.code,
      status: this.status
    };
  }
};
z.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
z.ERR_BAD_OPTION = "ERR_BAD_OPTION";
z.ECONNABORTED = "ECONNABORTED";
z.ETIMEDOUT = "ETIMEDOUT";
z.ECONNREFUSED = "ECONNREFUSED";
z.ERR_NETWORK = "ERR_NETWORK";
z.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
z.ERR_DEPRECATED = "ERR_DEPRECATED";
z.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
z.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
z.ERR_CANCELED = "ERR_CANCELED";
z.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
z.ERR_INVALID_URL = "ERR_INVALID_URL";
z.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Ev = null, wu = 100;
function Io(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Su(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ao(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = Su(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function wv(e) {
  return y.isArray(e) && !e.some(Io);
}
const Sv = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function kr(e, t, n) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData();
  const i = (_, O) => {
    const p = y.getSafeProp(n, _);
    return y.isUndefined(p) ? O : p;
  }, r = i("metaTokens", !0), o = i("visitor") || g, s = i("dots", !1), a = i("indexes", !1), l = i("Blob") || typeof Blob < "u" && Blob, d = i("maxDepth", wu), c = l && y.isSpecCompliantForm(t), u = [];
  if (!y.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(_) {
    if (_ === null) return "";
    if (y.isDate(_))
      return _.toISOString();
    if (y.isBoolean(_))
      return _.toString();
    if (!c && y.isBlob(_))
      throw new z("Blob is not supported. Use a Buffer instead.");
    if (y.isArrayBuffer(_) || y.isTypedArray(_)) {
      if (c && typeof l == "function")
        return new l([_]);
      throw new z(
        "Blob is not supported. Use a Buffer instead.",
        z.ERR_NOT_SUPPORT
      );
    }
    return _;
  }
  function E(_) {
    if (_ > d)
      throw new z(
        "Object is too deeply nested (" + _ + " levels). Max depth: " + d,
        z.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function h(_, O) {
    if (d === 1 / 0)
      return JSON.stringify(_);
    const p = [];
    return JSON.stringify(_, function(T, I) {
      if (!y.isObject(I))
        return I;
      for (; p.length && p[p.length - 1] !== this; )
        p.pop();
      return p.push(I), E(O + p.length - 1), I;
    });
  }
  function g(_, O, p) {
    let R = _;
    if (y.isReactNative(t) && y.isReactNativeBlob(_))
      return t.append(ao(p, O, s), f(_)), !1;
    if (_ && !p && typeof _ == "object") {
      if (y.endsWith(O, "{}"))
        O = r ? O : O.slice(0, -2), _ = h(_, 1);
      else if (y.isArray(_) && wv(_) || (y.isFileList(_) || y.endsWith(O, "[]")) && (R = y.toArray(_)))
        return O = Su(O), R.forEach(function(I, q) {
          !(y.isUndefined(I) || I === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ao([O], q, s) : a === null ? O : O + "[]",
            f(I)
          );
        }), !1;
    }
    return Io(_) ? !0 : (t.append(ao(p, O, s), f(_)), !1);
  }
  const C = Object.assign(Sv, {
    defaultVisitor: g,
    convertValue: f,
    isVisitable: Io
  });
  function m(_, O, p = 0) {
    if (!y.isUndefined(_)) {
      if (E(p), u.indexOf(_) !== -1)
        throw new Error("Circular reference detected in " + O.join("."));
      u.push(_), y.forEach(_, function(T, I) {
        (!(y.isUndefined(T) || T === null) && o.call(t, T, y.isString(I) ? I.trim() : I, O, C)) === !0 && m(T, O ? O.concat(I) : [I], p + 1);
      }), u.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Aa(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(i) {
    return t[i];
  });
}
function vs(e, t) {
  this._pairs = [], e && kr(e, this, t);
}
const _u = vs.prototype;
_u.append = function(t, n) {
  this._pairs.push([t, n]);
};
_u.toString = function(t) {
  const n = t ? (i) => t.call(this, i, Aa) : Aa;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function _v(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Cu(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const i = y.isFunction(n) ? {
    serialize: n
  } : n, r = y.getSafeProp(i, "encode") || _v, o = y.getSafeProp(i, "serialize");
  let s;
  if (o ? s = o(t, i) : s = y.isURLSearchParams(t) ? t.toString() : new vs(t, i).toString(r), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
const qn = Symbol("internals");
function ku(e) {
  return e ? e.length : 0;
}
function Oa(e) {
  if (e)
    for (; e.length && e[e.length - 1] === null; )
      e.pop();
}
function Wn(e, t) {
  const n = e.handlers, i = ku(n);
  n !== t.handlersRef ? (t.handlersRef = n, t.handlerEntries.clear()) : i !== t.handlersLength && (i ? t.handlerEntries.forEach(function(o, s) {
    n[o.index] !== o.handler && t.handlerEntries.delete(s);
  }) : t.handlerEntries.clear()), t.handlersLength = i;
}
class Da {
  constructor() {
    this.handlers = [], this[qn] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: /* @__PURE__ */ new Map(),
      iterationDepth: 0,
      nextId: 0
    };
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, i) {
    const r = {
      fulfilled: t,
      rejected: n,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }, o = this[qn];
    this.handlers == null && (this.handlers = []), Wn(this, o);
    const s = o.nextId++;
    return this.handlers.push(r), o.handlerEntries.set(s, {
      handler: r,
      index: this.handlers.length - 1
    }), o.handlersLength = this.handlers.length, s;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    const n = this[qn];
    Wn(this, n);
    const i = n.handlerEntries.get(t);
    if (i) {
      if (n.handlerEntries.delete(t), this.handlers[i.index] !== i.handler)
        return;
      this.handlers[i.index] = null, n.iterationDepth || (Oa(this.handlers), n.handlersLength = this.handlers.length);
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = [], Wn(this, this[qn]));
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    const n = this[qn];
    Wn(this, n), n.iterationDepth++;
    try {
      y.forEach(this.handlers, function(r) {
        r !== null && t(r);
      });
    } finally {
      --n.iterationDepth || (Wn(this, n), Oa(this.handlers), n.handlersLength = ku(this.handlers));
    }
  }
}
const gs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, Cv = typeof URLSearchParams < "u" ? URLSearchParams : vs, kv = typeof FormData < "u" ? FormData : null, Tv = typeof Blob < "u" ? Blob : null, Av = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cv,
    FormData: kv,
    Blob: Tv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ys = typeof window < "u" && typeof document < "u", $o = typeof navigator == "object" && navigator || void 0, Ov = ys && (!$o || ["ReactNative", "NativeScript", "NS"].indexOf($o.product) < 0), Dv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Pv = ys && window.location.href || "http://localhost", Bv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ys,
  hasStandardBrowserEnv: Ov,
  hasStandardBrowserWebWorkerEnv: Dv,
  navigator: $o,
  origin: Pv
}, Symbol.toStringTag, { value: "Module" })), Me = {
  ...Bv,
  ...Av
};
function xv(e, t) {
  return kr(e, new Me.classes.URLSearchParams(), {
    visitor: function(n, i, r, o) {
      return Me.isNode && y.isBuffer(n) ? (this.append(i, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Pa = wu;
function Tu(e) {
  if (e > Pa)
    throw new z(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Pa,
      z.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function Iv(e) {
  const t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g;
  let i;
  for (; (i = n.exec(e)) !== null; )
    Tu(t.length), t.push(i[0] === "[]" ? "" : i[1] || i[0]);
  return t;
}
function $v(e) {
  const t = {}, n = Object.keys(e);
  let i;
  const r = n.length;
  let o;
  for (i = 0; i < r; i++)
    o = n[i], t[o] = e[o];
  return t;
}
function Au(e) {
  function t(n, i, r, o) {
    Tu(o);
    let s = n[o++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), l = o >= n.length;
    return s = !s && y.isArray(r) ? r.length : s, l ? (y.hasOwnProp(r, s) ? r[s] = y.isArray(r[s]) ? r[s].concat(i) : [r[s], i] : r[s] = i, !a) : ((!y.hasOwnProp(r, s) || !y.isObject(r[s])) && (r[s] = []), t(n, i, r[s], o) && y.isArray(r[s]) && (r[s] = $v(r[s])), !a);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return y.forEachEntry(e, (i, r) => {
      t(Iv(i), r, n, 0);
    }), n;
  }
  return null;
}
const Ou = Object.freeze([
  "get",
  "delete",
  "head",
  "options",
  "post",
  "put",
  "patch",
  "purge",
  "link",
  "unlink",
  "query"
]), bn = (e, t) => e != null && y.hasOwnProp(e, t) ? e[t] : void 0;
function Rv(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (n || JSON.stringify)(e);
}
const Si = {
  transitional: gs,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const i = n.getContentType() || "", r = i.indexOf("application/json") > -1, o = y.isObject(t);
      if (o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
        return r ? JSON.stringify(Au(t)) : t;
      if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t) || y.isReadableStream(t))
        return t;
      if (y.isArrayBufferView(t))
        return t.buffer;
      if (y.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (o) {
        const l = bn(this, "formSerializer");
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return xv(t, l).toString();
        if ((a = y.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
          const d = bn(this, "env"), c = d && d.FormData;
          return kr(
            a ? { "files[]": t } : t,
            c && new c(),
            l
          );
        }
      }
      return o || r ? (n.setContentType("application/json", !1), Rv(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = bn(this, "transitional") || Si.transitional, i = n && n.forcedJSONParsing, r = bn(this, "responseType"), o = r === "json";
      if (y.isResponse(t) || y.isReadableStream(t))
        return t;
      if (t && y.isString(t) && (i && !r || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, bn(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError" ? z.from(l, z.ERR_BAD_RESPONSE, this, null, bn(this, "response")) : l;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Me.classes.FormData,
    Blob: Me.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
y.forEach(Ou, (e) => {
  Si.headers[e] = {};
});
function lo(e, t) {
  const n = this || Si, i = t || n, r = Ue.from(i.headers);
  let o = i.data;
  return y.forEach(e, function(a) {
    o = a.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function Du(e) {
  return !!(e && e.__CANCEL__);
}
let _i = class extends z {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, i) {
    super(t ?? "canceled", z.ERR_CANCELED, n, i), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Pu(e, t, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status) ? e(n) : t(new z(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? z.ERR_BAD_REQUEST : z.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
const Fv = /[\t\n\r]/g;
function Bu(e) {
  if (typeof e != "string")
    return e;
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t).replace(Fv, "");
}
function co(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Mv(e, t) {
  e = e || 10;
  const n = new Array(e), i = new Array(e);
  let r = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const d = Date.now(), c = i[o];
    s || (s = d), n[r] = l, i[r] = d;
    let u = o, f = 0;
    for (; u !== r; )
      f += n[u++], u = u % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), d - s < t)
      return;
    const E = c && d - c;
    return E ? Math.round(f * 1e3 / E) : void 0;
  };
}
function Nv(e, t) {
  let n = 0, i = 1e3 / t, r, o;
  const s = (c, u = Date.now()) => {
    n = u, r = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), f = u - n;
    f >= i ? s(c, u) : (r = c, o || (o = setTimeout(() => {
      o = null, s(r);
    }, i - f)));
  }, () => r && s(r), (...c) => s(c)];
}
const dr = (e, t, n = 3) => {
  let i = 0;
  const r = Mv(50, 250);
  return Nv((o) => {
    if (!o || !y.isNumber(o.loaded))
      return;
    const s = o.loaded, a = o.lengthComputable ? o.total : void 0, l = Math.max(0, a != null ? Math.min(s, a) : s), d = Math.max(0, l - i), c = r(d);
    i = Math.max(i, l);
    const u = {
      loaded: l,
      total: a,
      progress: a ? l / a : void 0,
      bytes: d,
      rate: c || void 0,
      estimated: c && a ? (a - l) / c : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(u);
  }, n);
}, Ba = (e, t) => {
  const n = e != null;
  return [
    (i) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: i
    }),
    t[1]
  ];
}, xa = (e, t = y.asap) => (...n) => t(() => e(...n)), Lv = Me.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Me.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Me.origin),
  Me.navigator && /(msie|trident)/i.test(Me.navigator.userAgent)
) : () => !0, jv = Me.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, i, r, o, s) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      y.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), y.isString(i) && a.push(`path=${i}`), y.isString(r) && a.push(`domain=${r}`), o === !0 && a.push("secure"), y.isString(s) && a.push(`SameSite=${s}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const i = t[n].replace(/^\s+/, ""), r = i.indexOf("=");
        if (r !== -1 && i.slice(0, r) === e)
          try {
            return decodeURIComponent(i.slice(r + 1));
          } catch {
            return i.slice(r + 1);
          }
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function zv(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vv(e, t) {
  if (!t)
    return e;
  let n = e.length;
  for (; n > 0 && e.charCodeAt(n - 1) === 47; )
    n--;
  return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
const Uv = /^https?:(?!\/\/)/i;
function Hv(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, n, i = "") => `${n}${i}${ur}`);
}
function qv(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${ur}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${ur}`
  );
  return n === -1 ? r : `${r}#${Hv(t.slice(n + 1))}`;
}
function Ia(e, t) {
  if (typeof e == "string") {
    const n = Bu(e);
    if (Uv.test(n))
      throw new z(
        `Invalid URL ${JSON.stringify(qv(n))}: missing "//" after protocol`,
        z.ERR_INVALID_URL,
        t
      );
  }
}
function xu(e, t, n, i) {
  Ia(t, i);
  let r = !zv(t);
  return e && (r || n === !1) ? (Ia(e, i), Vv(e, t)) : t;
}
const $a = (e) => e instanceof Ue ? { ...e } : e, Wv = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
  Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  )
) : Object.keys(e);
function dn(e, t) {
  e = e || {}, t = t || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function i(c, u, f, E) {
    return y.isPlainObject(c) && y.isPlainObject(u) ? y.merge.call({ caseless: E }, c, u) : y.isPlainObject(u) ? y.merge({}, u) : y.isArray(u) ? u.slice() : u;
  }
  function r(c, u, f, E) {
    if (y.isUndefined(u)) {
      if (!y.isUndefined(c))
        return i(void 0, c, f, E);
    } else return i(c, u, f, E);
  }
  function o(c, u) {
    if (!y.isUndefined(u))
      return i(void 0, u);
  }
  function s(c, u) {
    if (y.isUndefined(u)) {
      if (!y.isUndefined(c))
        return i(void 0, c);
    } else return i(void 0, u);
  }
  function a(c) {
    const u = y.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!y.isUndefined(u))
      if (y.isPlainObject(u)) {
        if (y.hasOwnProp(u, c))
          return u[c];
      } else
        return;
    const f = y.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (y.isPlainObject(f) && y.hasOwnProp(f, c))
      return f[c];
  }
  function l(c, u, f) {
    if (y.hasOwnProp(t, f))
      return i(c, u);
    if (y.hasOwnProp(e, f))
      return i(void 0, c);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutErrorMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    allowedSocketPaths: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (c, u, f) => r($a(c), $a(u), f, !0)
  };
  return y.forEach(Wv({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const f = y.hasOwnProp(d, u) ? d[u] : r, E = y.hasOwnProp(e, u) ? e[u] : void 0, h = y.hasOwnProp(t, u) ? t[u] : void 0, g = f(E, h, u);
    y.isUndefined(g) && f !== l || (n[u] = g);
  }), y.hasOwnProp(t, "validateStatus") && y.isUndefined(t.validateStatus) && a("validateStatusUndefinedResolves") === !1 && (y.hasOwnProp(e, "validateStatus") ? n.validateStatus = i(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const Gv = ["content-type", "content-length"];
function Kv(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([i, r]) => {
    Gv.includes(i.toLowerCase()) && e.set(i, r);
  });
}
const Yv = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Iu(e) {
  const t = dn({}, e), n = (f) => y.hasOwnProp(t, f) ? t[f] : void 0, i = n("data");
  let r = n("withXSRFToken");
  const o = n("xsrfHeaderName"), s = n("xsrfCookieName");
  let a = n("headers");
  const l = n("auth"), d = n("baseURL"), c = n("allowAbsoluteUrls"), u = n("url");
  if (t.headers = a = Ue.from(a), t.url = Cu(
    xu(d, u, c, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const f = y.getSafeProp(l, "username") || "", E = y.getSafeProp(l, "password") || "";
    try {
      a.set(
        "Authorization",
        "Basic " + btoa(f + ":" + (E ? Yv(E) : ""))
      );
    } catch (h) {
      throw z.from(h, z.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (y.isFormData(i)) {
    const f = y.getSafeProp(i, "getHeaders");
    Me.hasStandardBrowserEnv || Me.hasStandardBrowserWebWorkerEnv || y.isReactNative(i) ? a.setContentType(void 0) : y.isFunction(f) && Kv(a, f.call(i), n("formDataHeaderPolicy"));
  }
  if (Me.hasStandardBrowserEnv && (y.isFunction(r) && (r = r(t)), r === !0 || r == null && Lv(t.url))) {
    const E = o && s && jv.read(s);
    E && a.set(o, E);
  }
  return t;
}
const Xv = typeof XMLHttpRequest < "u", Jv = Xv && function(e) {
  return new Promise(function(n, i) {
    const r = Iu(e);
    let o = r.data;
    const s = Ue.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: d } = r, c, u, f, E, h, g;
    function C() {
      E && E(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(c), r.signal && r.signal.removeEventListener("abort", c);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function _(p) {
      if (!m)
        return;
      if (m.status === 0 && (co(Bu(r.url)) || co(Me.origin)) !== "file" && !(m.responseURL && m.responseURL.startsWith("file:"))) {
        i(new z("Request aborted", z.ECONNABORTED, e, m)), C(), m = null;
        return;
      }
      try {
        p ? g && g(p) : h && h();
      } catch (q) {
        setTimeout(() => {
          throw q;
        });
      }
      if (!m)
        return;
      const R = Ue.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), I = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: R,
        config: e,
        request: m
      };
      Pu(
        function(K) {
          n(K), C();
        },
        function(K) {
          i(K), C();
        },
        I
      ), m = null;
    }
    "onloadend" in m ? m.onloadend = _ : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.startsWith("file:")) || setTimeout(_);
    }, m.onabort = function() {
      m && (i(new z("Request aborted", z.ECONNABORTED, e, m)), C(), m = null);
    }, m.onerror = function(R) {
      const T = R && R.message ? R.message : "Network Error", I = new z(T, z.ERR_NETWORK, e, m);
      I.event = R || null, i(I), C(), m = null;
    }, m.ontimeout = function() {
      let R = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const T = r.transitional || gs;
      r.timeoutErrorMessage && (R = r.timeoutErrorMessage), i(
        new z(
          R,
          T.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
          e,
          m
        )
      ), C(), m = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in m && y.forEach(bu(s), function(R, T) {
      m.setRequestHeader(T, R);
    }), y.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), a && a !== "json" && (m.responseType = r.responseType), d && ([f, h, g] = dr(
      d,
      !0
    ), m.addEventListener("progress", f)), l && m.upload && ([u, E] = dr(l), m.upload.addEventListener("progress", u), m.upload.addEventListener("loadend", E)), (r.cancelToken || r.signal) && (c = (p) => {
      m && (i(!p || p.type ? new _i(null, e, m) : p), m.abort(), C(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(c), r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
    const O = co(r.url);
    if (O && !Me.protocols.includes(O)) {
      i(
        new z(
          "Unsupported protocol " + O + ":",
          z.ERR_BAD_REQUEST,
          e
        )
      ), C();
      return;
    }
    m.send(o || null);
  });
}, Zv = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let i = !1;
  const r = function(l) {
    if (!i) {
      i = !0, s();
      const d = l instanceof Error ? l : this.reason;
      n.abort(
        d instanceof z ? d : new _i(d instanceof Error ? d.message : d)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, r(new z(`timeout of ${t}ms exceeded`, z.ETIMEDOUT));
  }, t);
  const s = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(r) : l.removeEventListener("abort", r);
    }), e = null);
  };
  e.forEach((l) => {
    if (!i) {
      if (l.aborted) {
        r.call(l);
        return;
      }
      l.addEventListener("abort", r, { once: !0 });
    }
  });
  const { signal: a } = n;
  return a.unsubscribe = () => y.asap(s), a;
}, Qv = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let i = 0, r;
  for (; i < n; )
    r = i + t, yield e.slice(i, r), i = r;
}, eg = async function* (e, t) {
  for await (const n of tg(e))
    yield* Qv(n, t);
}, tg = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: i } = await t.read();
      if (n)
        break;
      yield i;
    }
  } finally {
    await t.cancel();
  }
}, Ra = (e, t, n, i) => {
  const r = eg(e, t);
  let o = 0, s, a = (l) => {
    s || (s = !0, i && i(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: d, value: c } = await r.next();
          if (d) {
            a(), l.close();
            return;
          }
          let u = c.byteLength;
          if (n) {
            let f = o += u;
            n(f);
          }
          l.enqueue(new Uint8Array(c));
        } catch (d) {
          throw a(d), d;
        }
      },
      cancel(l) {
        return a(l), r.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Fa = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, $u = (e, t, n) => t + 2 < n && Fa(e.charCodeAt(t + 1)) && Fa(e.charCodeAt(t + 2)), Ma = (e) => e <= 57 ? e - 48 : (e & 223) - 55, ng = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, ig = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, rg = (e) => {
  const t = Math.floor(e / 4), n = e % 4;
  return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, og = (e) => {
  const t = e.length;
  let n = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, sg = (e) => {
  const t = e.length;
  let n = 0, i = 0, r = !1;
  for (let o = 0; o < t; o++) {
    let s = e.charCodeAt(o);
    if (s === 37 && $u(e, o, t) && (s = Ma(e.charCodeAt(o + 1)) * 16 + Ma(e.charCodeAt(o + 2)), o += 2), !ig(s)) {
      if (s === 61) {
        i++;
        continue;
      }
      if (!ng(s) || i > 0) {
        r = !0;
        continue;
      }
      n++;
    }
  }
  return r || i > 2 || i > 0 && (n + i) % 4 !== 0 || n % 4 === 1 ? og(e) : rg(n);
}, ag = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const n = e.indexOf(",");
  if (n < 0) return 0;
  const i = e.slice(5, n), r = e.slice(n + 1);
  if (/;base64/i.test(i))
    return t(r);
  let s = 0;
  for (let a = 0, l = r.length; a < l; a++) {
    const d = r.charCodeAt(a);
    if (d === 37 && $u(r, a, l))
      s += 1, a += 2;
    else if (d < 128)
      s += 1;
    else if (d < 2048)
      s += 2;
    else if (d >= 55296 && d <= 56319 && a + 1 < l) {
      const c = r.charCodeAt(a + 1);
      c >= 56320 && c <= 57343 ? (s += 4, a++) : s += 3;
    } else
      s += 3;
  }
  return s;
};
function lg(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return ag(
    t === -1 ? e : e.slice(0, t),
    sg
  );
}
const bs = "1.20.0", Na = 64 * 1024, cg = {
  cache: "default",
  redirect: "follow",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  integrity: "",
  keepalive: !1,
  priority: "auto",
  window: null
}, { isFunction: Ni } = y, ug = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), La = (e) => {
  if (!y.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, ja = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, dg = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, fg = (e) => {
  const t = y.global !== void 0 && y.global !== null ? y.global : globalThis, { ReadableStream: n, TextEncoder: i } = t;
  e = y.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: r, Request: o, Response: s } = e, a = r ? Ni(r) : typeof fetch == "function", l = Ni(o), d = Ni(s);
  if (!a)
    return !1;
  const c = a && Ni(n), u = a && (typeof i == "function" ? /* @__PURE__ */ ((m) => (_) => m.encode(_))(new i()) : async (m) => new Uint8Array(await new o(m).arrayBuffer())), f = l && c && ja(() => {
    let m = !1;
    const _ = new o(Me.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }), O = _.headers.has("Content-Type");
    return _.body != null && _.body.cancel(), m && !O;
  }), E = d && c && ja(() => y.isReadableStream(new s("").body)), h = {
    stream: E && ((m) => m.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !h[m] && (h[m] = (_, O) => {
      let p = _ && _[m];
      if (p)
        return p.call(_);
      throw new z(
        `Response type '${m}' is not supported`,
        z.ERR_NOT_SUPPORT,
        O
      );
    });
  });
  const g = async (m) => {
    if (m == null)
      return 0;
    if (y.isBlob(m))
      return m.size;
    if (y.isSpecCompliantForm(m))
      return (await new o(Me.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (y.isArrayBufferView(m) || y.isArrayBuffer(m))
      return m.byteLength;
    if (y.isURLSearchParams(m) && (m = m + ""), y.isString(m))
      return (await u(m)).byteLength;
  }, C = async (m, _) => {
    const O = y.toFiniteNumber(m.getContentLength());
    return O ?? g(_);
  };
  return async (m) => {
    let {
      url: _,
      method: O,
      data: p,
      signal: R,
      cancelToken: T,
      timeout: I,
      onDownloadProgress: q,
      onUploadProgress: K,
      responseType: G,
      headers: Y,
      withCredentials: P = "same-origin",
      fetchOptions: M,
      maxContentLength: S,
      maxBodyLength: v,
      maxRedirects: w
    } = Iu(m);
    const k = y.isNumber(S) && S > -1, x = y.isNumber(v) && v > -1, B = (se) => y.hasOwnProp(m, se) ? m[se] : void 0;
    let ie = r || fetch;
    G = G ? (G + "").toLowerCase() : "text";
    let ue = Zv(
      [R, T && T.toAbortSignal()],
      I
    ), te = null;
    const de = ue && ue.unsubscribe && (() => {
      ue.unsubscribe();
    });
    let _e, Q = null;
    const we = () => new z(
      "Request body larger than maxBodyLength limit",
      z.ERR_BAD_REQUEST,
      m,
      te
    );
    try {
      let se;
      const $ = B("auth");
      if ($) {
        const J = y.getSafeProp($, "username") || "", Te = y.getSafeProp($, "password") || "";
        se = {
          username: J,
          password: Te
        };
      }
      if (dg(_)) {
        const J = new URL(_, Me.origin);
        if (!se && (J.username || J.password)) {
          const Te = La(J.username), Se = La(J.password);
          se = {
            username: Te,
            password: Se
          };
        }
        (J.username || J.password) && (J.username = "", J.password = "", _ = J.href);
      }
      if (se && (Y.delete("authorization"), Y.set(
        "Authorization",
        "Basic " + btoa(ug((se.username || "") + ":" + (se.password || "")))
      )), k && typeof _ == "string" && _.startsWith("data:") && lg(_) > S)
        throw new z(
          "maxContentLength size of " + S + " exceeded",
          z.ERR_BAD_RESPONSE,
          m,
          te
        );
      if (x && O !== "get" && O !== "head") {
        const J = await g(p);
        if (typeof J == "number" && isFinite(J) && (_e = J, J > v))
          throw we();
      }
      const L = x && (y.isReadableStream(p) || y.isStream(p)), V = (J, Te, Se) => Ra(
        J,
        Na,
        (xe) => {
          if (x && xe > v)
            throw Q = we();
          Te && Te(xe);
        },
        Se
      );
      if (f && O !== "get" && O !== "head" && (K || L)) {
        if (_e = _e ?? await C(Y, p), _e !== 0 || L) {
          let J = new o(_, {
            method: "POST",
            body: p,
            duplex: "half"
          }), Te;
          if (y.isFormData(p) && (Te = J.headers.get("content-type")) && Y.setContentType(Te), J.body) {
            const [Se, xe] = K && Ba(
              _e,
              dr(xa(K))
            ) || [];
            p = V(J.body, Se, xe);
          }
        }
      } else if (L && !l && c && O !== "get" && O !== "head")
        p = V(p);
      else if (L && l && !f && O !== "get" && O !== "head")
        throw new z(
          "Stream request bodies are not supported by the current fetch implementation",
          z.ERR_NOT_SUPPORT,
          m,
          te
        );
      y.isString(P) || (P = P ? "include" : "omit");
      const ee = l && "credentials" in o.prototype;
      if (y.isFormData(p)) {
        const J = Y.getContentType();
        J && /^multipart\/form-data/i.test(J) && !/boundary=/i.test(J) && Y.delete("content-type");
      }
      Y.set("User-Agent", "axios/" + bs, !1);
      const ge = M == null ? M : Object.assign(/* @__PURE__ */ Object.create(null), M);
      ge && (delete ge.body, delete ge.headers, delete ge.method, delete ge.signal, delete ge.duplex, delete ge.credentials);
      const he = Object.assign(/* @__PURE__ */ Object.create(null), ge, {
        signal: ue,
        method: O.toUpperCase(),
        headers: bu(Y.normalize()),
        body: p,
        duplex: "half",
        credentials: ee ? P : void 0
      });
      l && (y.forEach(cg, (J, Te) => {
        he[Te] === void 0 && (he[Te] = J);
      }), he.signal === void 0 && (he.signal = null), he.body === void 0 && (he.body = null)), w === 0 && (he.redirect = "manual", ge && (ge.redirect = "manual")), te = l && new o(_, he);
      let Ce = await (l ? ie(te, ge) : ie(_, he));
      const je = Ue.from(Ce.headers);
      if (k) {
        const J = y.toFiniteNumber(je.getContentLength());
        if (J != null && J > S)
          throw new z(
            "maxContentLength size of " + S + " exceeded",
            z.ERR_BAD_RESPONSE,
            m,
            te
          );
      }
      const Ne = E && (G === "stream" || G === "response");
      if (E && Ce.body && (q || k || Ne && de)) {
        const J = {};
        ["status", "statusText", "headers"].forEach((Fe) => {
          J[Fe] = Ce[Fe];
        });
        const Te = y.toFiniteNumber(je.getContentLength()), [Se, xe] = q && Ba(
          Te,
          dr(xa(q), !0)
        ) || [];
        let nt = 0;
        const He = (Fe) => {
          if (k && (nt = Fe, nt > S))
            throw new z(
              "maxContentLength size of " + S + " exceeded",
              z.ERR_BAD_RESPONSE,
              m,
              te
            );
          Se && Se(Fe);
        };
        Ce = new s(
          Ra(Ce.body, Na, He, () => {
            xe && xe(), de && de();
          }),
          J
        );
      }
      G = G || "text";
      let Ie = await h[y.findKey(h, G) || "text"](
        Ce,
        m
      );
      if (k && !E && !Ne) {
        let J;
        if (Ie != null && (typeof Ie.byteLength == "number" ? J = Ie.byteLength : typeof Ie.size == "number" ? J = Ie.size : typeof Ie == "string" && (J = typeof i == "function" ? new i().encode(Ie).byteLength : Ie.length)), typeof J == "number" && J > S)
          throw new z(
            "maxContentLength size of " + S + " exceeded",
            z.ERR_BAD_RESPONSE,
            m,
            te
          );
      }
      return !Ne && de && de(), await new Promise((J, Te) => {
        Pu(J, Te, {
          data: Ie,
          headers: Ue.from(Ce.headers),
          status: Ce.status,
          statusText: Ce.statusText,
          config: m,
          request: te
        });
      });
    } catch (se) {
      if (de && de(), ue && ue.aborted && ue.reason instanceof z) {
        const $ = ue.reason;
        throw $.config = m, te && ($.request = te), se !== $ && Object.defineProperty($, "cause", {
          __proto__: null,
          value: se,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), $;
      }
      if (Q)
        throw te && !Q.request && (Q.request = te), Q;
      if (se instanceof z)
        throw te && !se.request && (se.request = te), se;
      if (se && se.name === "TypeError" && /Load failed|fetch/i.test(se.message)) {
        const $ = new z(
          "Network Error",
          z.ERR_NETWORK,
          m,
          te,
          se && se.response
        );
        throw Object.defineProperty($, "cause", {
          __proto__: null,
          value: se.cause || se,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), $;
      }
      throw z.from(se, se && se.code, m, te, se && se.response);
    }
  };
}, pg = /* @__PURE__ */ new Map(), Ru = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: i, Response: r } = t, o = [i, r, n];
  let s = o.length, a = s, l, d, c = pg;
  for (; a--; )
    l = o[a], d = c.get(l), d === void 0 && c.set(l, d = a ? /* @__PURE__ */ new Map() : fg(t)), c = d;
  return d;
};
Ru();
const Es = {
  http: Ev,
  xhr: Jv,
  fetch: {
    get: Ru
  }
};
y.forEach(Es, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const za = (e) => `- ${e}`, hg = (e) => y.isFunction(e) || e === null || e === !1;
function mg(e, t) {
  e = y.isArray(e) ? e : [e];
  const { length: n } = e;
  let i, r;
  const o = {};
  for (let s = 0; s < n; s++) {
    i = e[s];
    let a;
    if (r = i, !hg(i) && (r = Es[(a = String(i)).toLowerCase()], r === void 0))
      throw new z(`Unknown adapter '${a}'`);
    if (r && (y.isFunction(r) || (r = r.get(t))))
      break;
    o[a || "#" + s] = r;
  }
  if (!r) {
    const s = Object.entries(o).map(
      ([l, d]) => `adapter ${l} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? s.length > 1 ? `since :
` + s.map(za).join(`
`) : " " + za(s[0]) : "as no adapter specified";
    throw new z(
      "There is no suitable adapter to dispatch the request " + a,
      z.ERR_NOT_SUPPORT
    );
  }
  return r;
}
const Fu = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: mg,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Es
};
function uo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new _i(null, e);
}
function fo(e) {
  const t = y.toSafeFlatObject(e);
  return uo(t), t.headers = Ue.from(y.getSafeProp(t, "headers")), t.data = lo.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Fu.getAdapter(t.adapter || Si.adapter, t)(t).then(
    function(r) {
      uo(t), t.response = r;
      try {
        r.data = lo.call(t, t.transformResponse, r);
      } finally {
        delete t.response;
      }
      return r.headers = Ue.from(r.headers), r;
    },
    function(r) {
      if (!Du(r) && (uo(t), r && r.response)) {
        t.response = r.response;
        try {
          r.response.data = lo.call(
            t,
            t.transformResponse,
            r.response
          );
        } finally {
          delete t.response;
        }
        r.response.headers = Ue.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const Tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Tr[e] = function(i) {
    return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Va = {};
Tr.transitional = function(t, n, i) {
  function r(o, s) {
    return "[Axios v" + bs + "] Transitional option '" + o + "'" + s + (i ? ". " + i : "");
  }
  return (o, s, a) => {
    if (t === !1)
      throw new z(
        r(s, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return n && !Va[s] && (Va[s] = !0, console.warn(
      r(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, a) : !0;
  };
};
Tr.spelling = function(t) {
  return (n, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function vg(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let r = i.length;
  for (; r-- > 0; ) {
    const o = i[r], s = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (s) {
      const a = e[o], l = a === void 0 || s(a, o, e);
      if (l !== !0)
        throw new z(
          "option " + o + " must be " + l,
          z.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new z("Unknown option " + o, z.ERR_BAD_OPTION);
  }
}
const Zi = {
  assertOptions: vg,
  validators: Tr
}, ze = Zi.validators;
let sn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Da(),
      response: new Da()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (i) {
      if (i instanceof Error)
        try {
          let r = {};
          Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
          const o = r.stack;
          let s = "";
          if (typeof o == "string") {
            const a = o.indexOf(`
`);
            s = a === -1 ? "" : o.slice(a + 1);
          }
          if (!i.stack)
            i.stack = s;
          else if (s) {
            const a = s.indexOf(`
`), l = a === -1 ? -1 : s.indexOf(`
`, a + 1), d = l === -1 ? "" : s.slice(l + 1);
            String(i.stack).endsWith(d) || (i.stack += `
` + s);
          }
        } catch {
        }
      throw i;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = dn(this.defaults, n);
    const { transitional: i, paramsSerializer: r, headers: o } = n;
    i !== void 0 && Zi.assertOptions(
      i,
      {
        silentJSONParsing: ze.transitional(ze.boolean),
        forcedJSONParsing: ze.transitional(ze.boolean),
        clarifyTimeoutError: ze.transitional(ze.boolean),
        legacyInterceptorReqResOrdering: ze.transitional(ze.boolean),
        advertiseZstdAcceptEncoding: ze.transitional(ze.boolean),
        validateStatusUndefinedResolves: ze.transitional(ze.boolean)
      },
      !1
    ), r != null && (y.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : Zi.assertOptions(
      r,
      {
        encode: ze.function,
        serialize: ze.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Zi.assertOptions(
      n,
      {
        baseUrl: ze.spelling("baseURL"),
        withXsrfToken: ze.spelling("withXSRFToken")
      },
      !0
    ), n.method = (y.getSafeProp(n, "method") || y.getSafeProp(this.defaults, "method") || "get").toLowerCase();
    let s = o && y.merge(o.common, o[n.method]);
    o && y.forEach(Ou.concat("common"), (h) => {
      delete o[h];
    }), n.headers = Ue.concat(s, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      l = l && g.synchronous;
      const C = n.transitional || gs;
      C && C.legacyInterceptorReqResOrdering ? a.unshift(g.fulfilled, g.rejected) : a.push(g.fulfilled, g.rejected);
    });
    const d = [];
    this.interceptors.response.forEach(function(g) {
      d.push(g.fulfilled, g.rejected);
    });
    let c, u = 0, f;
    if (!l) {
      const h = [fo.bind(this), void 0];
      for (h.unshift(...a), h.push(...d), f = h.length, c = Promise.resolve(n); u < f; )
        c = c.then(h[u++], h[u++]);
      return c;
    }
    f = a.length;
    let E = n;
    for (; u < f; ) {
      const h = a[u++], g = a[u++];
      try {
        E = h ? h(E) : E;
      } catch (C) {
        if (!g) {
          c = Promise.reject(C);
          break;
        }
        try {
          const m = g.call(this, C);
          y.isThenable(m) && (c = Promise.resolve(m).then(
            () => fo.call(this, E)
          ));
        } catch (m) {
          c = Promise.reject(m);
        }
        break;
      }
    }
    if (!c)
      try {
        c = fo.call(this, E);
      } catch (h) {
        c = Promise.reject(h);
      }
    for (u = 0, f = d.length; u < f; )
      c = c.then(d[u++], d[u++]);
    return c;
  }
  getUri(t) {
    t = dn(this.defaults, t);
    const n = xu(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Cu(n, t.params, t.paramsSerializer);
  }
};
y.forEach(["delete", "get", "head", "options"], function(t) {
  sn.prototype[t] = function(n, i) {
    return this.request(
      dn(i || {}, {
        method: t,
        url: n,
        data: i && y.hasOwnProp(i, "data") ? i.data : void 0
      })
    );
  };
});
y.forEach(["post", "put", "patch", "query"], function(t) {
  function n(i) {
    return function(o, s, a) {
      return this.request(
        dn(a || {}, {
          method: t,
          headers: i ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: s
        })
      );
    };
  }
  sn.prototype[t] = n(), t !== "query" && (sn.prototype[t + "Form"] = n(!0));
});
let gg = class Mu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const i = this;
    this.promise.then((r) => {
      if (!i._listeners) return;
      let o = i._listeners.length;
      for (; o-- > 0; )
        i._listeners[o](r);
      i._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const s = new Promise((a) => {
        i.subscribe(a), o = a;
      }).then(r);
      return s.cancel = function() {
        i.unsubscribe(o);
      }, s;
    }, t(function(o, s, a) {
      i.reason || (i.reason = new _i(o, s, a), n(i.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (i) => {
      t.abort(i);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Mu(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function yg(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function bg(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Qi = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  /**
   * @deprecated Use `ContentTooLarge` instead.
   */
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  /**
   * @deprecated Use `UnprocessableContent` instead.
   */
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Qi).forEach(([e, t]) => {
  Qi[t] === void 0 && (Qi[t] = e);
});
function Nu(e) {
  const t = new sn(e), n = lu(sn.prototype.request, t);
  return y.extend(n, sn.prototype, t, { allOwnKeys: !0 }), y.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return Nu(dn(e, r));
  }, n;
}
const Be = Nu(Si);
Be.Axios = sn;
Be.CanceledError = _i;
Be.CancelToken = gg;
Be.isCancel = Du;
Be.VERSION = bs;
Be.toFormData = kr;
Be.AxiosError = z;
Be.Cancel = Be.CanceledError;
Be.all = function(t) {
  return Promise.all(t);
};
Be.spread = yg;
Be.isAxiosError = bg;
Be.mergeConfig = dn;
Be.AxiosHeaders = Ue;
Be.formToJSON = (e) => Au(y.isHTMLForm(e) ? new FormData(e) : e);
Be.getAdapter = Fu.getAdapter;
Be.HttpStatusCode = Qi;
Be.default = Be;
const {
  Axios: Qg,
  AxiosError: e4,
  CanceledError: t4,
  isCancel: n4,
  CancelToken: i4,
  VERSION: r4,
  all: o4,
  Cancel: s4,
  isAxiosError: a4,
  spread: l4,
  toFormData: c4,
  AxiosHeaders: u4,
  HttpStatusCode: d4,
  formToJSON: f4,
  getAdapter: p4,
  mergeConfig: h4,
  create: m4
} = Be, mn = Be.create({
  baseURL: "/",
  timeout: 100 * 1e3,
  withCredentials: !0,
  headers: {
    common: {
      "X-Requested-With": "XMLHttpRequest"
    },
    post: {
      "Content-Type": "application/json;charset=utf-8"
    }
  }
});
mn.interceptors.request.use(
  (e) => {
    if (window.__bpmnRequestInterceptor && typeof window.__bpmnRequestInterceptor == "function")
      return window.__bpmnRequestInterceptor(e);
    try {
      if (parent.window) {
        const t = parent.window.localStorage.getItem("authorizationKey"), n = parent.window.localStorage.getItem("authorizationValue");
        parent.window.localStorage.getItem("flowtoken"), e.headers.flowtoken = parent.window.localStorage.getItem("flowtoken"), e.headers[t] = n;
      } else
        console.error("只在在流程中心用iframe打开，才能获取token!");
    } catch (t) {
      console.error("获取父窗口的token失败，开始读取本地 token！" + t), e.headers.flowtoken = localStorage.getItem("flowtoken");
      const n = window.localStorage.getItem("authorizationKey");
      e.headers[n] = window.localStorage.getItem("authorizationValue");
    }
    return e;
  },
  (e) => Promise.reject(e)
);
mn.interceptors.response.use(
  (e) => {
    const { isShowGlobalMessage: t = !0 } = e.config;
    if (window.__bpmnResponseInterceptor && typeof window.__bpmnResponseInterceptor == "function")
      return window.__bpmnResponseInterceptor(e);
    if (e && e.status == 200) {
      const n = e.data.code, i = e.data.msg;
      return n === "100" ? Promise.resolve(e.data) : n == 400 ? Promise.reject(i) : n === "101" ? (t && Lt.error(i), Promise.reject(i)) : Promise.reject(e.data);
    } else
      return Promise.reject(e == null ? void 0 : e.data);
  },
  (e) => Promise.reject(e)
);
const Eg = "", Li = Eg + "/flow/query", Ci = {
  /**
   * 获取高亮线和节点
   */
  GetHighLightedNodeVoByProcessInstanceId: Li + "/getHighLightedNodeVoByProcessInstanceId",
  /**
   * 查询节点信息
   */
  GetOneActivityVoByProcessInstanceIdAndActivityId: Li + "/getOneActivityVoByProcessInstanceIdAndActivityId",
  /**
   * 根据ModelKey查询模板信息
   */
  GetBpmnByModelKey: Li + "/getBpmnByModelKey",
  /**
   * 根据ModelKey查询模板信息
   */
  GetBpmnByDefId: Li + "/getBpmnByDefId",
  /**
   * 查询调用任务绑定 xml
   */
  GetCallActivityProcessInstance: "/flow/bpmnDesigner/prod/api/getCallActivityProcessInstanceIdByRootProcessInstanceId"
};
function wg(e) {
  return mn({
    method: "GET",
    url: `${Ci.GetHighLightedNodeVoByProcessInstanceId}/${e}`,
    params: {}
  });
}
function Sg(e) {
  return mn({
    method: "GET",
    url: `${Ci.GetOneActivityVoByProcessInstanceIdAndActivityId}/${e.procInstId}/${e.elementId}`,
    params: {}
  });
}
function _g(e) {
  return mn({
    method: "GET",
    url: `${Ci.GetBpmnByModelKey}/${e}`,
    params: {}
  });
}
function Cg(e) {
  return mn({
    method: "GET",
    url: `${Ci.GetBpmnByDefId}/${e}`,
    params: {}
  });
}
function kg(e, t) {
  return mn({
    method: "GET",
    url: `${Ci.GetCallActivityProcessInstance}/${e}/${t}`,
    params: {}
  });
}
function Tg(e) {
  return vr(e, "flowable:Field");
}
function Ag(e, t) {
  return vr(e).find((n) => D(n, t));
}
function Nt(e, t, n = {}) {
  const i = Tg(e), r = t.reduce((s, a) => {
    const [l, d = "string"] = a.split(".");
    return s[l] = d, s;
  }, {}), o = {};
  for (const s of i) {
    const a = s.get("name");
    if (r[a]) {
      const l = n[a];
      l ? o[a] = l(s) : o[a] = s.get(r[a]);
    }
  }
  return o;
}
const Og = ["bpmn:UserTask", "bpmn:CallActivity"], Lu = [
  "bpmn:ServiceTask",
  "bpmn:SequenceFlow",
  "bpmn:ScriptTask",
  // 'bpmn:CallActivity',
  "bpmn:StartEvent",
  "bpmn:EndEvent",
  "bpmn:IntermediateThrowEvent",
  "bpmn:IntermediateCatchEvent"
], Ua = (e) => e.type !== "label" && an(e, Og), Ha = (e) => e.type === "label" ? !1 : D(e, "bpmn:SequenceFlow") ? ju(e) : an(e, [
  "bpmn:EndEvent",
  "bpmn:StartEvent",
  "bpmn:IntermediateThrowEvent",
  "bpmn:IntermediateCatchEvent"
]) ? !Bg(e) : an(e, Lu), Dg = {
  "bpmn:ServiceTask": (e) => {
    var d;
    const t = e.businessObject, n = t.get("name"), i = n || e.type.replace(/bpmn:|flowable:/, ""), r = ["nodeType"], o = {
      nodeType: e.type
    }, s = {}, a = [];
    n || a.push("header");
    const l = t.get("type");
    if (l)
      switch (r.push("serviceType"), a.push("serviceType"), o.serviceType = l, s.serviceType = "arcoblue", l) {
        case "ws":
        case "sc":
        case "dubbo":
        case "rest":
        case "sql":
          return r.push("apiName"), Object.assign(o, Nt(t, ["apiName"])), { loading: !1, header: i, attrs: r, values: o, tags: s, i18n: a };
        case "ai":
          return r.push("content", "outputVariableName", "flag"), Object.assign(o, Nt(t, ["content", "outputVariableName", "flag"])), { loading: !1, prefix: "ai-", header: i, attrs: r, values: o, tags: s, i18n: a };
        case "mqtt":
          return r.push("topic", "payload"), Object.assign(o, Nt(t, ["topic", "payload"])), { loading: !1, prefix: "mqtt-", header: i, attrs: r, values: o, tags: s, i18n: a };
        case "mcp":
          return r.push("clientName", "toolName", "outputVariableName", "flag"), Object.assign(
            o,
            Nt(t, ["clientName", "toolName", "outputVariableName", "flag"])
          ), { loading: !1, prefix: "mcp-", header: i, attrs: r, values: o, tags: s, i18n: a };
        case "copy":
          r.push("transferToUserNos", "content"), Object.assign(o, Nt(t, ["transferToUserNos", "content"]));
          const c = Ag(t, "flowable:TransferToUsers"), u = c == null ? void 0 : c.get("body");
          return u && (o.transferToUserNos = (d = JSON.parse(u)) == null ? void 0 : d.map((f) => f.name)), s.transferToUserNos = "arcoblue", { loading: !1, header: i, attrs: r, values: o, tags: s, i18n: a };
        case "http":
          return r.push("requestUrl", "requestMethod"), Object.assign(o, Nt(t, ["requestUrl", "requestMethod"])), { loading: !1, header: i, attrs: r, values: o, tags: s, i18n: a };
        case "dmn":
          return r.push("decisionTableReferenceName"), Object.assign(o, Nt(t, ["decisionTableReferenceName"])), s.decisionTableReferenceName = "arcoblue", { loading: !1, header: i, attrs: r, values: o, tags: s, i18n: a };
        case "email":
          return r.push("mailTo", "subject", "mailContent"), Object.assign(
            o,
            Nt(t, ["to.expression", "subject", "html.expression"])
          ), { loading: !1, header: i, attrs: r, values: o, tags: s, i18n: a };
      }
    return { loading: !1, header: i, attrs: r, values: o, tags: s, i18n: a };
  },
  "bpmn:ScriptTask": (e) => {
    const t = e.businessObject, n = t.get("name"), i = n || e.type.replace("bpmn:", ""), r = ["scriptFormat"], o = {
      scriptFormat: t.scriptFormat
    }, s = {}, a = [];
    return n || a.push("header"), { loading: !1, header: i, attrs: r, values: o, tags: s, i18n: a };
  },
  // 'bpmn:CallActivity': (element: BpmnElement) => {
  //   const nodeBo = element.businessObject
  //   const nodeName = nodeBo.get('name')
  //   const header = nodeName || element.type.replace('bpmn:', '')
  //   const attrs: string[] = ['calledInstance', 'inheritVariables']
  //   const values: Record<string, string> = {
  //     calledInstance: nodeBo.get('processInstanceName'),
  //     inheritVariables: nodeBo.get('inheritVariables') || 'false'
  //   }
  //   const tags: Record<string, string> = { calledInstance: 'arcoblue' }
  //   const i18n: string[] = ['inheritVariables']
  //
  //   if (!nodeName) {
  //     i18n.push('header')
  //   }
  //
  //   return { loading: false, header, attrs, values, tags, i18n }
  // },
  "bpmn:SequenceFlow": (e) => {
    const n = e.businessObject.get("name"), i = n || e.type.replace("bpmn:", ""), r = ["condition"], o = ju(e), s = {
      condition: o == null ? void 0 : o.get("body")
    }, a = {}, l = [];
    return n || l.push("header"), { loading: !1, header: i, attrs: r, values: s, tags: a, i18n: l };
  },
  "bpmn:StartEvent": ji,
  "bpmn:EndEvent": ji,
  "bpmn:IntermediateThrowEvent": ji,
  "bpmn:IntermediateCatchEvent": ji
};
function ji(e) {
  var _, O, p, R, T;
  const n = e.businessObject.get("name"), i = !1, r = n || e.type.replace("bpmn:", ""), o = ["eventDefinition"], s = {}, a = { eventDefinition: "arcoblue" }, l = ["eventDefinition"];
  n || l.push("header");
  const d = Ec(e);
  if (d)
    return o.push("eventDefinitionName"), s.eventDefinition = "Error", s.eventDefinitionName = ((_ = d.get("errorRef")) == null ? void 0 : _.name) || "-", { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  const c = Cc(e);
  if (c)
    return o.push("eventDefinitionName"), s.eventDefinition = "Signal", s.eventDefinitionName = ((O = c.get("signalRef")) == null ? void 0 : O.name) || "-", { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  const u = _c(e);
  if (u)
    return o.push("eventDefinitionName"), s.eventDefinition = "Message", s.eventDefinitionName = ((p = u.get("messageRef")) == null ? void 0 : p.name) || "-", { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  const f = kc(e);
  if (f)
    return o.push("eventDefinitionName"), s.eventDefinition = "Escalation", s.eventDefinitionName = ((R = f.get("escalationRef")) == null ? void 0 : R.name) || "-", { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  if (Vp(e))
    return s.eventDefinition = "Compensate", { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  if (Up(e))
    return o.push("terminateAll"), s.eventDefinition = "Terminate", s.terminateAll = f.terminateAll || "-", { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  const g = rs(e);
  if (g)
    return o.push("variableName", "variableChangeType"), l.push("variableChangeType"), s.eventDefinition = "VariableListener", s.variableName = g.get("variableName") || "-", s.variableChangeType = `var-${g.get("variableChangeType") || "-"}`, { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  const C = kn(e);
  if (C)
    return o.push("conditionExpression"), s.eventDefinition = "Conditional", s.conditionExpression = ((T = C.get("condition")) == null ? void 0 : T.body) || "-", { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  const m = Sc(e);
  if (m) {
    s.eventDefinition = "Timer", o.push("timerDefinitionType", "timerEventDefValue"), l.push("timerDefinitionType");
    const I = wc(m) || "";
    return s.timerDefinitionType = I, s.timerEventDefValue = I ? Pg(m.get(I)) : "-", { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
  }
  return { loading: i, i18n: l, header: r, attrs: o, values: s, tags: a };
}
function Pg(e) {
  return e && e.get("body") || "";
}
function Bg(e) {
  return rs(e) ? !1 : !e.businessObject.eventDefinitions || !e.businessObject.eventDefinitions.length;
}
function ju(e) {
  const t = $e(e);
  if (D(t, "bpmn:SequenceFlow"))
    return t.get("conditionExpression");
  if (kn(t))
    return kn(t).get("condition");
}
const xg = {
  key: 0,
  class: "node-details_wrap"
}, Ig = /* @__PURE__ */ Ee({
  name: "BpmnPresetViewer",
  __name: "index",
  props: {
    // 运行时实例 Id
    procInstId: {
      type: String,
      default: ""
    },
    // 流程的模型 Key
    modelKey: {
      type: String,
      default: ""
    },
    // 流程的模型定义 ID
    defId: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "light"
    },
    local: {
      type: String,
      default: "zh_CN"
    },
    translatePrefix: {
      type: String,
      default: ""
    },
    toolbar: {
      type: Boolean,
      default: !0
    },
    showDownload: {
      type: Boolean,
      default: !1
    },
    fileName: {
      type: String,
      default: ""
    }
  },
  emits: ["viewer-init", "element-hover", "data-change"],
  setup(e, { expose: t, emit: n }) {
    const i = n, r = e, { locale: o, t: s } = Bn(), a = oe(), l = oe(), d = ni(), c = oe(!1), u = oe([]), f = oe({}), E = oe(), h = (P) => {
      E.value = os(P);
    }, g = (P) => {
      var M;
      P ? o.value = P : o.value = o.value === "zh_CN" ? "en_US" : "zh_CN", Wo("local-lang", o.value), (M = d.value) == null || M.get("eventBus").fire("i18n.changed");
    }, C = (P) => (d.value = P) && i("viewer-init", P), m = () => {
      var S;
      const P = (S = d.value) == null ? void 0 : S.get("elementRegistry");
      if (!P) {
        u.value = [];
        return;
      }
      const M = [];
      P.forEach((v) => {
        if (Ha(v)) {
          M.push({ id: v.id, type: v.type });
          return;
        }
        if (Ua(v)) {
          if (v.type === "bpmn:UserTask") {
            r.procInstId && M.push({ id: v.id, type: v.type });
            return;
          }
          M.push({ id: v.id, type: v.type });
        }
      }), u.value = M;
    };
    async function _(P) {
      f.value[P.id] = {
        type: "CallActivity",
        loading: !0,
        custom: !0
      };
      const M = P.businessObject, S = M.calledElement;
      if (!S)
        return;
      const v = M.name, w = M.processInstanceName, k = M.inheritVariables ? "是" : "否";
      if (r.procInstId && (l.value.isActiveNode(P) || l.value.isPassedNode(P))) {
        const { data: x, success: B } = await kg(
          r.procInstId,
          S
        );
        if (B && x) {
          f.value[P.id] = {
            type: "CallActivity",
            loading: !1,
            instanceId: x,
            name: v,
            inheritVariables: k,
            modelName: w,
            custom: !0
          };
          return;
        }
      }
      f.value[P.id] = {
        type: "CallActivity",
        loading: !1,
        name: v,
        modelKey: S,
        inheritVariables: k,
        modelName: w,
        custom: !0
      };
    }
    async function O(P) {
      if (!r.procInstId)
        return;
      f.value[P] = {
        type: "UserTask",
        loading: !0,
        custom: !0
      };
      const { data: M = {} } = await Sg({
        procInstId: r.procInstId,
        elementId: P
      });
      f.value[P] = {
        type: "UserTask",
        loading: !1,
        custom: !0,
        ...M
      };
    }
    async function p(P) {
      const { type: M, id: S } = P;
      try {
        M === "bpmn:UserTask" && await O(S), M === "bpmn:CallActivity" && await _(P);
      } catch (v) {
        Lt.error((v == null ? void 0 : v.message) || "请求失败");
      } finally {
        f.value[S].loading = !1;
      }
    }
    function R(P) {
      if (!f.value[P.id]) {
        if (Ua(P))
          return f.value[P.id] = { loading: !0 }, p(P);
        if (Ha(P)) {
          for (const M of Lu)
            if (D(P, M)) {
              f.value[P.id] = Dg[M](P);
              return;
            }
        }
      }
    }
    async function T(P, M, S) {
      var v;
      if ((v = d.value) == null || v.clear(), !P && !M && !S) {
        Lt.error("modelKey和procInstId和procDefId不能同时为空！");
        return;
      }
      try {
        if (await er(), u.value = [], f.value = {}, c.value = !0, M) {
          await I(M);
          return;
        }
        if (S) {
          await K(S);
          return;
        }
        await q(P);
      } finally {
        c.value = !1;
      }
    }
    async function I(P) {
      var w;
      const { data: M, success: S, msg: v } = await wg(P);
      if (S) {
        const {
          activeActivityIds: k = [],
          hisActiveActivityIds: x = [],
          modelXml: B,
          highLightedFlows: ie = [],
          noHighLightedFlows: ue = []
        } = M || {};
        if (!B) return;
        await ((w = l.value) == null ? void 0 : w.createNewProcess(B)), setTimeout(() => {
          var te, de, _e, Q;
          (te = l.value) == null || te.setPassedNodes([...ie, ...x]), ue && ((de = l.value) == null || de.setFutureNodes([...ue])), k && ((_e = l.value) == null || _e.setActiveNodes([...k])), k && ((Q = l.value) == null || Q.setProcessingMarker([...k])), m();
        }, 100);
      } else
        Lt.error(v);
      return i("data-change", M), M;
    }
    async function q(P) {
      var w;
      const { data: M, success: S, msg: v } = await _g(P);
      if (S) {
        const { modelXml: k } = M || {};
        if (!k) return;
        await ((w = l.value) == null ? void 0 : w.createNewProcess(k)), m();
      } else
        Lt.error(v);
      i("data-change", M);
    }
    async function K(P) {
      var w;
      const { data: M, success: S, msg: v } = await Cg(P);
      if (S) {
        const { modelXml: k } = M || {};
        if (!k) return;
        await ((w = l.value) == null ? void 0 : w.createNewProcess(k)), m();
      } else
        Lt.error(v);
      i("data-change", M);
    }
    return Ge(
      () => r.local,
      (P) => g(P),
      { immediate: !0 }
    ), Ge(
      () => r.theme,
      (P) => h(P),
      { immediate: !0 }
    ), Ge(
      () => ({ procInstId: r.procInstId, modelKey: r.modelKey, defId: r.defId }),
      ({ procInstId: P, modelKey: M, defId: S }) => T(M, P, S),
      { immediate: !0 }
    ), t({ reloadViewerXML: T, downloadProcess: async (P, M) => {
      var S;
      (S = l.value) == null || S.downloadProcess(P, M);
    }, toggleTheme: h, toggleLang: g, downloadProcessAsPng: async (P) => {
      var M;
      (M = l.value) == null || M.downloadProcessAsPng(P);
    } }), (P, M) => {
      const S = c2, v = xm, w = bm, k = um;
      return F(), X("div", {
        ref_key: "viewerWrapper",
        ref: a,
        class: "bpmn-preset-viewer"
      }, [
        H(D1, {
          ref_key: "viewer",
          ref: l,
          loading: N(c),
          theme: e.theme,
          local: e.local,
          "translate-prefix": e.translatePrefix,
          "show-download": e.showDownload,
          toolbar: e.toolbar,
          "file-name": e.fileName,
          "full-element": N(a),
          "in-preset": "",
          onViewerInit: C,
          onViewerDestroy: C,
          onElementHover: R
        }, null, 8, ["loading", "theme", "local", "translate-prefix", "show-download", "toolbar", "file-name", "full-element"]),
        (F(!0), X(vt, null, nr(N(u), (x) => (F(), ye(k, {
          key: x.id,
          "selector-parent": N(l).$el,
          "append-to": N(a),
          offset: [0, 10],
          "z-index": 8888,
          "max-width": 1e3,
          target: `[data-element-id=${x.id}]`,
          "follow-cursor": x.type === "bpmn:SequenceFlow" ? "initial" : !1
        }, {
          default: ae(() => [
            H(N(Uo), {
              loading: N(f)[x.id] && N(f)[x.id].loading
            }, {
              default: ae(() => [
                N(f)[x.id] ? (F(), X("div", xg, [
                  N(f)[x.id].custom ? (F(), X(vt, { key: 0 }, [
                    N(f)[x.id].type === "UserTask" ? (F(), ye(S, {
                      key: 0,
                      "node-info": N(f)[x.id],
                      "translate-prefix": e.translatePrefix
                    }, null, 8, ["node-info", "translate-prefix"])) : ve("", !0),
                    N(f)[x.id].type === "CallActivity" ? (F(), ye(v, Kn({
                      key: 1,
                      ref_for: !0
                    }, r, {
                      theme: N(E),
                      "node-info": N(f)[x.id]
                    }), null, 16, ["theme", "node-info"])) : ve("", !0)
                  ], 64)) : (F(), ye(w, {
                    key: 1,
                    "node-info": N(f)[x.id],
                    "translate-prefix": e.translatePrefix
                  }, null, 8, ["node-info", "translate-prefix"]))
                ])) : ve("", !0)
              ]),
              _: 2
            }, 1032, ["loading"])
          ]),
          _: 2
        }, 1032, ["selector-parent", "append-to", "target", "follow-cursor"]))), 128))
      ], 512);
    };
  }
});
export {
  Yg as BpmnMocker,
  Ig as BpmnPresetViewer,
  D1 as BpmnViewer,
  um as TippyPopover
};
