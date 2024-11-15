function qv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function fm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var dm = { exports: {} },
  aa = {},
  pm = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vo = Symbol.for("react.element"),
  Jv = Symbol.for("react.portal"),
  e1 = Symbol.for("react.fragment"),
  t1 = Symbol.for("react.strict_mode"),
  n1 = Symbol.for("react.profiler"),
  r1 = Symbol.for("react.provider"),
  i1 = Symbol.for("react.context"),
  o1 = Symbol.for("react.forward_ref"),
  s1 = Symbol.for("react.suspense"),
  a1 = Symbol.for("react.memo"),
  l1 = Symbol.for("react.lazy"),
  ad = Symbol.iterator;
function u1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ad && e[ad]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mm = Object.assign,
  gm = {};
function ii(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gm),
    (this.updater = n || hm);
}
ii.prototype.isReactComponent = {};
ii.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ii.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ym() {}
ym.prototype = ii.prototype;
function vc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gm),
    (this.updater = n || hm);
}
var xc = (vc.prototype = new ym());
xc.constructor = vc;
mm(xc, ii.prototype);
xc.isPureReactComponent = !0;
var ld = Array.isArray,
  vm = Object.prototype.hasOwnProperty,
  wc = { current: null },
  xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      vm.call(t, r) && !xm.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: vo,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: wc.current,
  };
}
function c1(e, t) {
  return {
    $$typeof: vo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vo;
}
function f1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ud = /\/+/g;
function tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? f1("" + e.key)
    : t.toString(36);
}
function os(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case vo:
          case Jv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + tl(s, 0) : r),
      ld(i)
        ? ((n = ""),
          e != null && (n = e.replace(ud, "$&/") + "/"),
          os(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Sc(i) &&
            (i = c1(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ud, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ld(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + tl(o, a);
      s += os(o, t, n, l, i);
    }
  else if (((l = u1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + tl(o, a++)), (s += os(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function No(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    os(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function d1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  ss = { transition: null },
  p1 = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: ss,
    ReactCurrentOwner: wc,
  };
function Sm() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: No,
  forEach: function (e, t, n) {
    No(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      No(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      No(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = ii;
z.Fragment = e1;
z.Profiler = n1;
z.PureComponent = vc;
z.StrictMode = t1;
z.Suspense = s1;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p1;
z.act = Sm;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = mm({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = wc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      vm.call(t, l) &&
        !xm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: vo, type: e.type, key: i, ref: o, props: r, _owner: s };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: i1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: r1, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = wm;
z.createFactory = function (e) {
  var t = wm.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: o1, render: e };
};
z.isValidElement = Sc;
z.lazy = function (e) {
  return { $$typeof: l1, _payload: { _status: -1, _result: e }, _init: d1 };
};
z.memo = function (e, t) {
  return { $$typeof: a1, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = ss.transition;
  ss.transition = {};
  try {
    e();
  } finally {
    ss.transition = t;
  }
};
z.unstable_act = Sm;
z.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Be.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
z.useId = function () {
  return Be.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Be.current.useRef(e);
};
z.useState = function (e) {
  return Be.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Be.current.useTransition();
};
z.version = "18.3.1";
pm.exports = z;
var P = pm.exports;
const xr = fm(P),
  Ql = qv({ __proto__: null, default: xr }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h1 = P,
  m1 = Symbol.for("react.element"),
  g1 = Symbol.for("react.fragment"),
  y1 = Object.prototype.hasOwnProperty,
  v1 = h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  x1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) y1.call(t, r) && !x1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: m1,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: v1.current,
  };
}
aa.Fragment = g1;
aa.jsx = Cm;
aa.jsxs = Cm;
dm.exports = aa;
var C = dm.exports,
  km = { exports: {} },
  st = {},
  Tm = { exports: {} },
  Pm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, O) {
    var $ = A.length;
    A.push(O);
    e: for (; 0 < $; ) {
      var te = ($ - 1) >>> 1,
        pe = A[te];
      if (0 < i(pe, O)) (A[te] = O), (A[$] = pe), ($ = te);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var O = A[0],
      $ = A.pop();
    if ($ !== O) {
      A[0] = $;
      e: for (var te = 0, pe = A.length, Rt = pe >>> 1; te < Rt; ) {
        var Te = 2 * (te + 1) - 1,
          un = A[Te],
          At = Te + 1,
          cr = A[At];
        if (0 > i(un, $))
          At < pe && 0 > i(cr, un)
            ? ((A[te] = cr), (A[At] = $), (te = At))
            : ((A[te] = un), (A[Te] = $), (te = Te));
        else if (At < pe && 0 > i(cr, $)) (A[te] = cr), (A[At] = $), (te = At);
        else break e;
      }
    }
    return O;
  }
  function i(A, O) {
    var $ = A.sortIndex - O.sortIndex;
    return $ !== 0 ? $ : A.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    y = !1,
    v = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(A) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= A)
        r(u), (O.sortIndex = O.expirationTime), t(l, O);
      else break;
      O = n(u);
    }
  }
  function w(A) {
    if (((x = !1), m(A), !v))
      if (n(l) !== null) (v = !0), B(k);
      else {
        var O = n(u);
        O !== null && U(w, O.startTime - A);
      }
  }
  function k(A, O) {
    (v = !1), x && ((x = !1), h(b), (b = -1)), (y = !0);
    var $ = d;
    try {
      for (
        m(O), f = n(l);
        f !== null && (!(f.expirationTime > O) || (A && !M()));

      ) {
        var te = f.callback;
        if (typeof te == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var pe = te(f.expirationTime <= O);
          (O = e.unstable_now()),
            typeof pe == "function" ? (f.callback = pe) : f === n(l) && r(l),
            m(O);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Rt = !0;
      else {
        var Te = n(u);
        Te !== null && U(w, Te.startTime - O), (Rt = !1);
      }
      return Rt;
    } finally {
      (f = null), (d = $), (y = !1);
    }
  }
  var E = !1,
    T = null,
    b = -1,
    N = 5,
    g = -1;
  function M() {
    return !(e.unstable_now() - g < N);
  }
  function j() {
    if (T !== null) {
      var A = e.unstable_now();
      g = A;
      var O = !0;
      try {
        O = T(!0, A);
      } finally {
        O ? _() : ((E = !1), (T = null));
      }
    } else E = !1;
  }
  var _;
  if (typeof p == "function")
    _ = function () {
      p(j);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      V = F.port2;
    (F.port1.onmessage = j),
      (_ = function () {
        V.postMessage(null);
      });
  } else
    _ = function () {
      S(j, 0);
    };
  function B(A) {
    (T = A), E || ((E = !0), _());
  }
  function U(A, O) {
    b = S(function () {
      A(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), B(k));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = d;
      }
      var $ = d;
      d = O;
      try {
        return A();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, O) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var $ = d;
      d = A;
      try {
        return O();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (A, O, $) {
      var te = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? te + $ : te))
          : ($ = te),
        A)
      ) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return (
        (pe = $ + pe),
        (A = {
          id: c++,
          callback: O,
          priorityLevel: A,
          startTime: $,
          expirationTime: pe,
          sortIndex: -1,
        }),
        $ > te
          ? ((A.sortIndex = $),
            t(u, A),
            n(l) === null &&
              A === n(u) &&
              (x ? (h(b), (b = -1)) : (x = !0), U(w, $ - te)))
          : ((A.sortIndex = pe), t(l, A), v || y || ((v = !0), B(k))),
        A
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (A) {
      var O = d;
      return function () {
        var $ = d;
        d = O;
        try {
          return A.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    });
})(Pm);
Tm.exports = Pm;
var w1 = Tm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var S1 = P,
  it = w1;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Em = new Set(),
  Wi = {};
function ar(e, t) {
  Hr(e, t), Hr(e + "Capture", t);
}
function Hr(e, t) {
  for (Wi[e] = t, e = 0; e < t.length; e++) Em.add(t[e]);
}
var nn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  C1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  cd = {},
  fd = {};
function k1(e) {
  return Xl.call(fd, e)
    ? !0
    : Xl.call(cd, e)
    ? !1
    : C1.test(e)
    ? (fd[e] = !0)
    : ((cd[e] = !0), !1);
}
function T1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function P1(e, t, n, r) {
  if (t === null || typeof t > "u" || T1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ae[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ae[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ae[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ae[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ae[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ae[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cc = /[\-:]([a-z])/g;
function kc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cc, kc);
    Ae[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cc, kc);
    Ae[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cc, kc);
  Ae[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ae[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ae[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tc(e, t, n, r) {
  var i = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (P1(t, n, i, r) && (n = null),
    r || i === null
      ? k1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ln = S1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Do = Symbol.for("react.element"),
  wr = Symbol.for("react.portal"),
  Sr = Symbol.for("react.fragment"),
  Pc = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  bm = Symbol.for("react.provider"),
  Rm = Symbol.for("react.context"),
  Ec = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  Jl = Symbol.for("react.suspense_list"),
  bc = Symbol.for("react.memo"),
  dn = Symbol.for("react.lazy"),
  Am = Symbol.for("react.offscreen"),
  dd = Symbol.iterator;
function ui(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dd && e[dd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var le = Object.assign,
  nl;
function wi(e) {
  if (nl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      nl = (t && t[1]) || "";
    }
  return (
    `
` +
    nl +
    e
  );
}
var rl = !1;
function il(e, t) {
  if (!e || rl) return "";
  rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (rl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wi(e) : "";
}
function E1(e) {
  switch (e.tag) {
    case 5:
      return wi(e.type);
    case 16:
      return wi("Lazy");
    case 13:
      return wi("Suspense");
    case 19:
      return wi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = il(e.type, !1)), e;
    case 11:
      return (e = il(e.type.render, !1)), e;
    case 1:
      return (e = il(e.type, !0)), e;
    default:
      return "";
  }
}
function eu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sr:
      return "Fragment";
    case wr:
      return "Portal";
    case Zl:
      return "Profiler";
    case Pc:
      return "StrictMode";
    case ql:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rm:
        return (e.displayName || "Context") + ".Consumer";
      case bm:
        return (e._context.displayName || "Context") + ".Provider";
      case Ec:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bc:
        return (
          (t = e.displayName || null), t !== null ? t : eu(e.type) || "Memo"
        );
      case dn:
        (t = e._payload), (e = e._init);
        try {
          return eu(e(t));
        } catch {}
    }
  return null;
}
function b1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return eu(t);
    case 8:
      return t === Pc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function bn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function R1(e) {
  var t = Mm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function jo(e) {
  e._valueTracker || (e._valueTracker = R1(e));
}
function Lm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Mm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ps(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tu(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = bn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Nm(e, t) {
  (t = t.checked), t != null && Tc(e, "checked", t, !1);
}
function nu(e, t) {
  Nm(e, t);
  var n = bn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ru(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ru(e, t.type, bn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ru(e, t, n) {
  (t !== "number" || Ps(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Si = Array.isArray;
function _r(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + bn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function iu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function md(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Si(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: bn(n) };
}
function Dm(e, t) {
  var n = bn(t.value),
    r = bn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function gd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ou(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? jm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Oo,
  Om = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Oo = Oo || document.createElement("div"),
          Oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Oo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  A1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mi).forEach(function (e) {
  A1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mi[t] = Mi[e]);
  });
});
function Im(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mi.hasOwnProperty(e) && Mi[e])
    ? ("" + t).trim()
    : t + "px";
}
function _m(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Im(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var M1 = le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function su(e, t) {
  if (t) {
    if (M1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function au(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var lu = null;
function Rc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uu = null,
  Vr = null,
  $r = null;
function yd(e) {
  if ((e = So(e))) {
    if (typeof uu != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = da(t)), uu(e.stateNode, e.type, t));
  }
}
function Vm(e) {
  Vr ? ($r ? $r.push(e) : ($r = [e])) : (Vr = e);
}
function $m() {
  if (Vr) {
    var e = Vr,
      t = $r;
    if ((($r = Vr = null), yd(e), t)) for (e = 0; e < t.length; e++) yd(t[e]);
  }
}
function Fm(e, t) {
  return e(t);
}
function Bm() {}
var ol = !1;
function zm(e, t, n) {
  if (ol) return e(t, n);
  ol = !0;
  try {
    return Fm(e, t, n);
  } finally {
    (ol = !1), (Vr !== null || $r !== null) && (Bm(), $m());
  }
}
function Ki(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = da(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var cu = !1;
if (nn)
  try {
    var ci = {};
    Object.defineProperty(ci, "passive", {
      get: function () {
        cu = !0;
      },
    }),
      window.addEventListener("test", ci, ci),
      window.removeEventListener("test", ci, ci);
  } catch {
    cu = !1;
  }
function L1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Li = !1,
  Es = null,
  bs = !1,
  fu = null,
  N1 = {
    onError: function (e) {
      (Li = !0), (Es = e);
    },
  };
function D1(e, t, n, r, i, o, s, a, l) {
  (Li = !1), (Es = null), L1.apply(N1, arguments);
}
function j1(e, t, n, r, i, o, s, a, l) {
  if ((D1.apply(this, arguments), Li)) {
    if (Li) {
      var u = Es;
      (Li = !1), (Es = null);
    } else throw Error(L(198));
    bs || ((bs = !0), (fu = u));
  }
}
function lr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Um(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function vd(e) {
  if (lr(e) !== e) throw Error(L(188));
}
function O1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = lr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return vd(i), e;
        if (o === r) return vd(i), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Wm(e) {
  return (e = O1(e)), e !== null ? Hm(e) : null;
}
function Hm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Km = it.unstable_scheduleCallback,
  xd = it.unstable_cancelCallback,
  I1 = it.unstable_shouldYield,
  _1 = it.unstable_requestPaint,
  me = it.unstable_now,
  V1 = it.unstable_getCurrentPriorityLevel,
  Ac = it.unstable_ImmediatePriority,
  Gm = it.unstable_UserBlockingPriority,
  Rs = it.unstable_NormalPriority,
  $1 = it.unstable_LowPriority,
  Ym = it.unstable_IdlePriority,
  la = null,
  Vt = null;
function F1(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function")
    try {
      Vt.onCommitFiberRoot(la, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : U1,
  B1 = Math.log,
  z1 = Math.LN2;
function U1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((B1(e) / z1) | 0)) | 0;
}
var Io = 64,
  _o = 4194304;
function Ci(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function As(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Ci(a)) : ((o &= s), o !== 0 && (r = Ci(o)));
  } else (s = n & ~i), s !== 0 ? (r = Ci(s)) : o !== 0 && (r = Ci(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Pt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function W1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function H1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Pt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = W1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function du(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qm() {
  var e = Io;
  return (Io <<= 1), !(Io & 4194240) && (Io = 64), e;
}
function sl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pt(t)),
    (e[t] = n);
}
function K1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Pt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Mc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var G = 0;
function Xm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zm,
  Lc,
  qm,
  Jm,
  e0,
  pu = !1,
  Vo = [],
  xn = null,
  wn = null,
  Sn = null,
  Gi = new Map(),
  Yi = new Map(),
  hn = [],
  G1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xn = null;
      break;
    case "dragenter":
    case "dragleave":
      wn = null;
      break;
    case "mouseover":
    case "mouseout":
      Sn = null;
      break;
    case "pointerover":
    case "pointerout":
      Gi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yi.delete(t.pointerId);
  }
}
function fi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = So(t)), t !== null && Lc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Y1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (xn = fi(xn, e, t, n, r, i)), !0;
    case "dragenter":
      return (wn = fi(wn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Sn = fi(Sn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Gi.set(o, fi(Gi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Yi.set(o, fi(Yi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function t0(e) {
  var t = Kn(e.target);
  if (t !== null) {
    var n = lr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Um(n)), t !== null)) {
          (e.blockedOn = t),
            e0(e.priority, function () {
              qm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function as(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (lu = r), n.target.dispatchEvent(r), (lu = null);
    } else return (t = So(n)), t !== null && Lc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Sd(e, t, n) {
  as(e) && n.delete(t);
}
function Q1() {
  (pu = !1),
    xn !== null && as(xn) && (xn = null),
    wn !== null && as(wn) && (wn = null),
    Sn !== null && as(Sn) && (Sn = null),
    Gi.forEach(Sd),
    Yi.forEach(Sd);
}
function di(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pu ||
      ((pu = !0),
      it.unstable_scheduleCallback(it.unstable_NormalPriority, Q1)));
}
function Qi(e) {
  function t(i) {
    return di(i, e);
  }
  if (0 < Vo.length) {
    di(Vo[0], e);
    for (var n = 1; n < Vo.length; n++) {
      var r = Vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xn !== null && di(xn, e),
      wn !== null && di(wn, e),
      Sn !== null && di(Sn, e),
      Gi.forEach(t),
      Yi.forEach(t),
      n = 0;
    n < hn.length;
    n++
  )
    (r = hn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null); )
    t0(n), n.blockedOn === null && hn.shift();
}
var Fr = ln.ReactCurrentBatchConfig,
  Ms = !0;
function X1(e, t, n, r) {
  var i = G,
    o = Fr.transition;
  Fr.transition = null;
  try {
    (G = 1), Nc(e, t, n, r);
  } finally {
    (G = i), (Fr.transition = o);
  }
}
function Z1(e, t, n, r) {
  var i = G,
    o = Fr.transition;
  Fr.transition = null;
  try {
    (G = 4), Nc(e, t, n, r);
  } finally {
    (G = i), (Fr.transition = o);
  }
}
function Nc(e, t, n, r) {
  if (Ms) {
    var i = hu(e, t, n, r);
    if (i === null) gl(e, t, r, Ls, n), wd(e, r);
    else if (Y1(i, e, t, n, r)) r.stopPropagation();
    else if ((wd(e, r), t & 4 && -1 < G1.indexOf(e))) {
      for (; i !== null; ) {
        var o = So(i);
        if (
          (o !== null && Zm(o),
          (o = hu(e, t, n, r)),
          o === null && gl(e, t, r, Ls, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else gl(e, t, r, null, n);
  }
}
var Ls = null;
function hu(e, t, n, r) {
  if (((Ls = null), (e = Rc(r)), (e = Kn(e)), e !== null))
    if (((t = lr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Um(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ls = e), null;
}
function n0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (V1()) {
        case Ac:
          return 1;
        case Gm:
          return 4;
        case Rs:
        case $1:
          return 16;
        case Ym:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null,
  Dc = null,
  ls = null;
function r0() {
  if (ls) return ls;
  var e,
    t = Dc,
    n = t.length,
    r,
    i = "value" in gn ? gn.value : gn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (ls = i.slice(e, 1 < r ? 1 - r : void 0));
}
function us(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $o() {
  return !0;
}
function Cd() {
  return !1;
}
function at(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? $o
        : Cd),
      (this.isPropagationStopped = Cd),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = $o));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $o));
      },
      persist: function () {},
      isPersistent: $o,
    }),
    t
  );
}
var oi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jc = at(oi),
  wo = le({}, oi, { view: 0, detail: 0 }),
  q1 = at(wo),
  al,
  ll,
  pi,
  ua = le({}, wo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Oc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pi &&
            (pi && e.type === "mousemove"
              ? ((al = e.screenX - pi.screenX), (ll = e.screenY - pi.screenY))
              : (ll = al = 0),
            (pi = e)),
          al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ll;
    },
  }),
  kd = at(ua),
  J1 = le({}, ua, { dataTransfer: 0 }),
  ex = at(J1),
  tx = le({}, wo, { relatedTarget: 0 }),
  ul = at(tx),
  nx = le({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rx = at(nx),
  ix = le({}, oi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ox = at(ix),
  sx = le({}, oi, { data: 0 }),
  Td = at(sx),
  ax = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  lx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ux = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ux[e]) ? !!t[e] : !1;
}
function Oc() {
  return cx;
}
var fx = le({}, wo, {
    key: function (e) {
      if (e.key) {
        var t = ax[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = us(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Oc,
    charCode: function (e) {
      return e.type === "keypress" ? us(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? us(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dx = at(fx),
  px = le({}, ua, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pd = at(px),
  hx = le({}, wo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Oc,
  }),
  mx = at(hx),
  gx = le({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yx = at(gx),
  vx = le({}, ua, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xx = at(vx),
  wx = [9, 13, 27, 32],
  Ic = nn && "CompositionEvent" in window,
  Ni = null;
nn && "documentMode" in document && (Ni = document.documentMode);
var Sx = nn && "TextEvent" in window && !Ni,
  i0 = nn && (!Ic || (Ni && 8 < Ni && 11 >= Ni)),
  Ed = " ",
  bd = !1;
function o0(e, t) {
  switch (e) {
    case "keyup":
      return wx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function s0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cr = !1;
function Cx(e, t) {
  switch (e) {
    case "compositionend":
      return s0(t);
    case "keypress":
      return t.which !== 32 ? null : ((bd = !0), Ed);
    case "textInput":
      return (e = t.data), e === Ed && bd ? null : e;
    default:
      return null;
  }
}
function kx(e, t) {
  if (Cr)
    return e === "compositionend" || (!Ic && o0(e, t))
      ? ((e = r0()), (ls = Dc = gn = null), (Cr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return i0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Rd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tx[e.type] : t === "textarea";
}
function a0(e, t, n, r) {
  Vm(r),
    (t = Ns(t, "onChange")),
    0 < t.length &&
      ((n = new jc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Di = null,
  Xi = null;
function Px(e) {
  v0(e, 0);
}
function ca(e) {
  var t = Pr(e);
  if (Lm(t)) return e;
}
function Ex(e, t) {
  if (e === "change") return t;
}
var l0 = !1;
if (nn) {
  var cl;
  if (nn) {
    var fl = "oninput" in document;
    if (!fl) {
      var Ad = document.createElement("div");
      Ad.setAttribute("oninput", "return;"),
        (fl = typeof Ad.oninput == "function");
    }
    cl = fl;
  } else cl = !1;
  l0 = cl && (!document.documentMode || 9 < document.documentMode);
}
function Md() {
  Di && (Di.detachEvent("onpropertychange", u0), (Xi = Di = null));
}
function u0(e) {
  if (e.propertyName === "value" && ca(Xi)) {
    var t = [];
    a0(t, Xi, e, Rc(e)), zm(Px, t);
  }
}
function bx(e, t, n) {
  e === "focusin"
    ? (Md(), (Di = t), (Xi = n), Di.attachEvent("onpropertychange", u0))
    : e === "focusout" && Md();
}
function Rx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ca(Xi);
}
function Ax(e, t) {
  if (e === "click") return ca(t);
}
function Mx(e, t) {
  if (e === "input" || e === "change") return ca(t);
}
function Lx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bt = typeof Object.is == "function" ? Object.is : Lx;
function Zi(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Xl.call(t, i) || !bt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ld(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nd(e, t) {
  var n = Ld(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ld(n);
  }
}
function c0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? c0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function f0() {
  for (var e = window, t = Ps(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ps(e.document);
  }
  return t;
}
function _c(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Nx(e) {
  var t = f0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    c0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _c(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Nd(n, o));
        var s = Nd(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dx = nn && "documentMode" in document && 11 >= document.documentMode,
  kr = null,
  mu = null,
  ji = null,
  gu = !1;
function Dd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gu ||
    kr == null ||
    kr !== Ps(r) ||
    ((r = kr),
    "selectionStart" in r && _c(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ji && Zi(ji, r)) ||
      ((ji = r),
      (r = Ns(mu, "onSelect")),
      0 < r.length &&
        ((t = new jc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kr))));
}
function Fo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tr = {
    animationend: Fo("Animation", "AnimationEnd"),
    animationiteration: Fo("Animation", "AnimationIteration"),
    animationstart: Fo("Animation", "AnimationStart"),
    transitionend: Fo("Transition", "TransitionEnd"),
  },
  dl = {},
  d0 = {};
nn &&
  ((d0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tr.animationend.animation,
    delete Tr.animationiteration.animation,
    delete Tr.animationstart.animation),
  "TransitionEvent" in window || delete Tr.transitionend.transition);
function fa(e) {
  if (dl[e]) return dl[e];
  if (!Tr[e]) return e;
  var t = Tr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in d0) return (dl[e] = t[n]);
  return e;
}
var p0 = fa("animationend"),
  h0 = fa("animationiteration"),
  m0 = fa("animationstart"),
  g0 = fa("transitionend"),
  y0 = new Map(),
  jd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dn(e, t) {
  y0.set(e, t), ar(t, [e]);
}
for (var pl = 0; pl < jd.length; pl++) {
  var hl = jd[pl],
    jx = hl.toLowerCase(),
    Ox = hl[0].toUpperCase() + hl.slice(1);
  Dn(jx, "on" + Ox);
}
Dn(p0, "onAnimationEnd");
Dn(h0, "onAnimationIteration");
Dn(m0, "onAnimationStart");
Dn("dblclick", "onDoubleClick");
Dn("focusin", "onFocus");
Dn("focusout", "onBlur");
Dn(g0, "onTransitionEnd");
Hr("onMouseEnter", ["mouseout", "mouseover"]);
Hr("onMouseLeave", ["mouseout", "mouseover"]);
Hr("onPointerEnter", ["pointerout", "pointerover"]);
Hr("onPointerLeave", ["pointerout", "pointerover"]);
ar(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ar(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ar(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ar(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ar(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ki =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ix = new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));
function Od(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), j1(r, t, void 0, e), (e.currentTarget = null);
}
function v0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Od(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Od(i, a, u), (o = l);
        }
    }
  }
  if (bs) throw ((e = fu), (bs = !1), (fu = null), e);
}
function J(e, t) {
  var n = t[Su];
  n === void 0 && (n = t[Su] = new Set());
  var r = e + "__bubble";
  n.has(r) || (x0(t, e, 2, !1), n.add(r));
}
function ml(e, t, n) {
  var r = 0;
  t && (r |= 4), x0(n, e, r, t);
}
var Bo = "_reactListening" + Math.random().toString(36).slice(2);
function qi(e) {
  if (!e[Bo]) {
    (e[Bo] = !0),
      Em.forEach(function (n) {
        n !== "selectionchange" && (Ix.has(n) || ml(n, !1, e), ml(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bo] || ((t[Bo] = !0), ml("selectionchange", !1, t));
  }
}
function x0(e, t, n, r) {
  switch (n0(t)) {
    case 1:
      var i = X1;
      break;
    case 4:
      i = Z1;
      break;
    default:
      i = Nc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !cu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function gl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Kn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  zm(function () {
    var u = o,
      c = Rc(n),
      f = [];
    e: {
      var d = y0.get(e);
      if (d !== void 0) {
        var y = jc,
          v = e;
        switch (e) {
          case "keypress":
            if (us(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = dx;
            break;
          case "focusin":
            (v = "focus"), (y = ul);
            break;
          case "focusout":
            (v = "blur"), (y = ul);
            break;
          case "beforeblur":
          case "afterblur":
            y = ul;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = kd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ex;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = mx;
            break;
          case p0:
          case h0:
          case m0:
            y = rx;
            break;
          case g0:
            y = yx;
            break;
          case "scroll":
            y = q1;
            break;
          case "wheel":
            y = xx;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = ox;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Pd;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          h = x ? (d !== null ? d + "Capture" : null) : d;
        x = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              h !== null && ((w = Ki(p, h)), w != null && x.push(Ji(p, w, m)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((d = new y(d, v, null, n, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          d &&
            n !== lu &&
            (v = n.relatedTarget || n.fromElement) &&
            (Kn(v) || v[rn]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Kn(v) : null),
              v !== null &&
                ((S = lr(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = kd),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Pd),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (S = y == null ? d : Pr(y)),
            (m = v == null ? d : Pr(v)),
            (d = new x(w, p + "leave", y, n, c)),
            (d.target = S),
            (d.relatedTarget = m),
            (w = null),
            Kn(c) === u &&
              ((x = new x(h, p + "enter", v, n, c)),
              (x.target = m),
              (x.relatedTarget = S),
              (w = x)),
            (S = w),
            y && v)
          )
            t: {
              for (x = y, h = v, p = 0, m = x; m; m = fr(m)) p++;
              for (m = 0, w = h; w; w = fr(w)) m++;
              for (; 0 < p - m; ) (x = fr(x)), p--;
              for (; 0 < m - p; ) (h = fr(h)), m--;
              for (; p--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = fr(x)), (h = fr(h));
              }
              x = null;
            }
          else x = null;
          y !== null && Id(f, d, y, x, !1),
            v !== null && S !== null && Id(f, S, v, x, !0);
        }
      }
      e: {
        if (
          ((d = u ? Pr(u) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === "select" || (y === "input" && d.type === "file"))
        )
          var k = Ex;
        else if (Rd(d))
          if (l0) k = Mx;
          else {
            k = Rx;
            var E = bx;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (k = Ax);
        if (k && (k = k(e, u))) {
          a0(f, k, n, c);
          break e;
        }
        E && E(e, d, u),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            ru(d, "number", d.value);
      }
      switch (((E = u ? Pr(u) : window), e)) {
        case "focusin":
          (Rd(E) || E.contentEditable === "true") &&
            ((kr = E), (mu = u), (ji = null));
          break;
        case "focusout":
          ji = mu = kr = null;
          break;
        case "mousedown":
          gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gu = !1), Dd(f, n, c);
          break;
        case "selectionchange":
          if (Dx) break;
        case "keydown":
        case "keyup":
          Dd(f, n, c);
      }
      var T;
      if (Ic)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        Cr
          ? o0(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (i0 &&
          n.locale !== "ko" &&
          (Cr || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && Cr && (T = r0())
            : ((gn = c),
              (Dc = "value" in gn ? gn.value : gn.textContent),
              (Cr = !0))),
        (E = Ns(u, b)),
        0 < E.length &&
          ((b = new Td(b, e, null, n, c)),
          f.push({ event: b, listeners: E }),
          T ? (b.data = T) : ((T = s0(n)), T !== null && (b.data = T)))),
        (T = Sx ? Cx(e, n) : kx(e, n)) &&
          ((u = Ns(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Td("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    v0(f, t);
  });
}
function Ji(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ns(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ki(e, n)),
      o != null && r.unshift(Ji(e, o, i)),
      (o = Ki(e, t)),
      o != null && r.push(Ji(e, o, i))),
      (e = e.return);
  }
  return r;
}
function fr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Id(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Ki(n, o)), l != null && s.unshift(Ji(n, l, a)))
        : i || ((l = Ki(n, o)), l != null && s.push(Ji(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _x = /\r\n?/g,
  Vx = /\u0000|\uFFFD/g;
function _d(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _x,
      `
`
    )
    .replace(Vx, "");
}
function zo(e, t, n) {
  if (((t = _d(t)), _d(e) !== t && n)) throw Error(L(425));
}
function Ds() {}
var yu = null,
  vu = null;
function xu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wu = typeof setTimeout == "function" ? setTimeout : void 0,
  $x = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vd = typeof Promise == "function" ? Promise : void 0,
  Fx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vd < "u"
      ? function (e) {
          return Vd.resolve(null).then(e).catch(Bx);
        }
      : wu;
function Bx(e) {
  setTimeout(function () {
    throw e;
  });
}
function yl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Qi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Qi(t);
}
function Cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $d(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var si = Math.random().toString(36).slice(2),
  It = "__reactFiber$" + si,
  eo = "__reactProps$" + si,
  rn = "__reactContainer$" + si,
  Su = "__reactEvents$" + si,
  zx = "__reactListeners$" + si,
  Ux = "__reactHandles$" + si;
function Kn(e) {
  var t = e[It];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rn] || n[It])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $d(e); e !== null; ) {
          if ((n = e[It])) return n;
          e = $d(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function So(e) {
  return (
    (e = e[It] || e[rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function da(e) {
  return e[eo] || null;
}
var Cu = [],
  Er = -1;
function jn(e) {
  return { current: e };
}
function ee(e) {
  0 > Er || ((e.current = Cu[Er]), (Cu[Er] = null), Er--);
}
function q(e, t) {
  Er++, (Cu[Er] = e.current), (e.current = t);
}
var Rn = {},
  _e = jn(Rn),
  Ge = jn(!1),
  Jn = Rn;
function Kr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function js() {
  ee(Ge), ee(_e);
}
function Fd(e, t, n) {
  if (_e.current !== Rn) throw Error(L(168));
  q(_e, t), q(Ge, n);
}
function w0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, b1(e) || "Unknown", i));
  return le({}, n, r);
}
function Os(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rn),
    (Jn = _e.current),
    q(_e, e),
    q(Ge, Ge.current),
    !0
  );
}
function Bd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = w0(e, t, Jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(Ge),
      ee(_e),
      q(_e, e))
    : ee(Ge),
    q(Ge, n);
}
var Kt = null,
  pa = !1,
  vl = !1;
function S0(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function Wx(e) {
  (pa = !0), S0(e);
}
function On() {
  if (!vl && Kt !== null) {
    vl = !0;
    var e = 0,
      t = G;
    try {
      var n = Kt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Kt = null), (pa = !1);
    } catch (i) {
      throw (Kt !== null && (Kt = Kt.slice(e + 1)), Km(Ac, On), i);
    } finally {
      (G = t), (vl = !1);
    }
  }
  return null;
}
var br = [],
  Rr = 0,
  Is = null,
  _s = 0,
  ct = [],
  ft = 0,
  er = null,
  Gt = 1,
  Yt = "";
function Fn(e, t) {
  (br[Rr++] = _s), (br[Rr++] = Is), (Is = e), (_s = t);
}
function C0(e, t, n) {
  (ct[ft++] = Gt), (ct[ft++] = Yt), (ct[ft++] = er), (er = e);
  var r = Gt;
  e = Yt;
  var i = 32 - Pt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Pt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Gt = (1 << (32 - Pt(t) + i)) | (n << i) | r),
      (Yt = o + e);
  } else (Gt = (1 << o) | (n << i) | r), (Yt = e);
}
function Vc(e) {
  e.return !== null && (Fn(e, 1), C0(e, 1, 0));
}
function $c(e) {
  for (; e === Is; )
    (Is = br[--Rr]), (br[Rr] = null), (_s = br[--Rr]), (br[Rr] = null);
  for (; e === er; )
    (er = ct[--ft]),
      (ct[ft] = null),
      (Yt = ct[--ft]),
      (ct[ft] = null),
      (Gt = ct[--ft]),
      (ct[ft] = null);
}
var tt = null,
  et = null,
  re = !1,
  Tt = null;
function k0(e, t) {
  var n = pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = er !== null ? { id: Gt, overflow: Yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ku(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tu(e) {
  if (re) {
    var t = et;
    if (t) {
      var n = t;
      if (!zd(e, t)) {
        if (ku(e)) throw Error(L(418));
        t = Cn(n.nextSibling);
        var r = tt;
        t && zd(e, t)
          ? k0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (tt = e));
      }
    } else {
      if (ku(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (tt = e);
    }
  }
}
function Ud(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function Uo(e) {
  if (e !== tt) return !1;
  if (!re) return Ud(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xu(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (ku(e)) throw (T0(), Error(L(418)));
    for (; t; ) k0(e, t), (t = Cn(t.nextSibling));
  }
  if ((Ud(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function T0() {
  for (var e = et; e; ) e = Cn(e.nextSibling);
}
function Gr() {
  (et = tt = null), (re = !1);
}
function Fc(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
var Hx = ln.ReactCurrentBatchConfig;
function hi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Wo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wd(e) {
  var t = e._init;
  return t(e._payload);
}
function P0(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = En(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, m, w) {
    return p === null || p.tag !== 6
      ? ((p = Pl(m, h.mode, w)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function l(h, p, m, w) {
    var k = m.type;
    return k === Sr
      ? c(h, p, m.props.children, w, m.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === dn &&
            Wd(k) === p.type))
      ? ((w = i(p, m.props)), (w.ref = hi(h, p, m)), (w.return = h), w)
      : ((w = gs(m.type, m.key, m.props, null, h.mode, w)),
        (w.ref = hi(h, p, m)),
        (w.return = h),
        w);
  }
  function u(h, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = El(m, h.mode, w)), (p.return = h), p)
      : ((p = i(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, w, k) {
    return p === null || p.tag !== 7
      ? ((p = Zn(m, h.mode, w, k)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function f(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Pl("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Do:
          return (
            (m = gs(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = hi(h, null, p)),
            (m.return = h),
            m
          );
        case wr:
          return (p = El(p, h.mode, m)), (p.return = h), p;
        case dn:
          var w = p._init;
          return f(h, w(p._payload), m);
      }
      if (Si(p) || ui(p))
        return (p = Zn(p, h.mode, m, null)), (p.return = h), p;
      Wo(h, p);
    }
    return null;
  }
  function d(h, p, m, w) {
    var k = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return k !== null ? null : a(h, p, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Do:
          return m.key === k ? l(h, p, m, w) : null;
        case wr:
          return m.key === k ? u(h, p, m, w) : null;
        case dn:
          return (k = m._init), d(h, p, k(m._payload), w);
      }
      if (Si(m) || ui(m)) return k !== null ? null : c(h, p, m, w, null);
      Wo(h, m);
    }
    return null;
  }
  function y(h, p, m, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(m) || null), a(p, h, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Do:
          return (h = h.get(w.key === null ? m : w.key) || null), l(p, h, w, k);
        case wr:
          return (h = h.get(w.key === null ? m : w.key) || null), u(p, h, w, k);
        case dn:
          var E = w._init;
          return y(h, p, m, E(w._payload), k);
      }
      if (Si(w) || ui(w)) return (h = h.get(m) || null), c(p, h, w, k, null);
      Wo(p, w);
    }
    return null;
  }
  function v(h, p, m, w) {
    for (
      var k = null, E = null, T = p, b = (p = 0), N = null;
      T !== null && b < m.length;
      b++
    ) {
      T.index > b ? ((N = T), (T = null)) : (N = T.sibling);
      var g = d(h, T, m[b], w);
      if (g === null) {
        T === null && (T = N);
        break;
      }
      e && T && g.alternate === null && t(h, T),
        (p = o(g, p, b)),
        E === null ? (k = g) : (E.sibling = g),
        (E = g),
        (T = N);
    }
    if (b === m.length) return n(h, T), re && Fn(h, b), k;
    if (T === null) {
      for (; b < m.length; b++)
        (T = f(h, m[b], w)),
          T !== null &&
            ((p = o(T, p, b)), E === null ? (k = T) : (E.sibling = T), (E = T));
      return re && Fn(h, b), k;
    }
    for (T = r(h, T); b < m.length; b++)
      (N = y(T, h, b, m[b], w)),
        N !== null &&
          (e && N.alternate !== null && T.delete(N.key === null ? b : N.key),
          (p = o(N, p, b)),
          E === null ? (k = N) : (E.sibling = N),
          (E = N));
    return (
      e &&
        T.forEach(function (M) {
          return t(h, M);
        }),
      re && Fn(h, b),
      k
    );
  }
  function x(h, p, m, w) {
    var k = ui(m);
    if (typeof k != "function") throw Error(L(150));
    if (((m = k.call(m)), m == null)) throw Error(L(151));
    for (
      var E = (k = null), T = p, b = (p = 0), N = null, g = m.next();
      T !== null && !g.done;
      b++, g = m.next()
    ) {
      T.index > b ? ((N = T), (T = null)) : (N = T.sibling);
      var M = d(h, T, g.value, w);
      if (M === null) {
        T === null && (T = N);
        break;
      }
      e && T && M.alternate === null && t(h, T),
        (p = o(M, p, b)),
        E === null ? (k = M) : (E.sibling = M),
        (E = M),
        (T = N);
    }
    if (g.done) return n(h, T), re && Fn(h, b), k;
    if (T === null) {
      for (; !g.done; b++, g = m.next())
        (g = f(h, g.value, w)),
          g !== null &&
            ((p = o(g, p, b)), E === null ? (k = g) : (E.sibling = g), (E = g));
      return re && Fn(h, b), k;
    }
    for (T = r(h, T); !g.done; b++, g = m.next())
      (g = y(T, h, b, g.value, w)),
        g !== null &&
          (e && g.alternate !== null && T.delete(g.key === null ? b : g.key),
          (p = o(g, p, b)),
          E === null ? (k = g) : (E.sibling = g),
          (E = g));
    return (
      e &&
        T.forEach(function (j) {
          return t(h, j);
        }),
      re && Fn(h, b),
      k
    );
  }
  function S(h, p, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Sr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Do:
          e: {
            for (var k = m.key, E = p; E !== null; ) {
              if (E.key === k) {
                if (((k = m.type), k === Sr)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (p = i(E, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === dn &&
                    Wd(k) === E.type)
                ) {
                  n(h, E.sibling),
                    (p = i(E, m.props)),
                    (p.ref = hi(h, E, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            m.type === Sr
              ? ((p = Zn(m.props.children, h.mode, w, m.key)),
                (p.return = h),
                (h = p))
              : ((w = gs(m.type, m.key, m.props, null, h.mode, w)),
                (w.ref = hi(h, p, m)),
                (w.return = h),
                (h = w));
          }
          return s(h);
        case wr:
          e: {
            for (E = m.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = El(m, h.mode, w)), (p.return = h), (h = p);
          }
          return s(h);
        case dn:
          return (E = m._init), S(h, p, E(m._payload), w);
      }
      if (Si(m)) return v(h, p, m, w);
      if (ui(m)) return x(h, p, m, w);
      Wo(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = Pl(m, h.mode, w)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return S;
}
var Yr = P0(!0),
  E0 = P0(!1),
  Vs = jn(null),
  $s = null,
  Ar = null,
  Bc = null;
function zc() {
  Bc = Ar = $s = null;
}
function Uc(e) {
  var t = Vs.current;
  ee(Vs), (e._currentValue = t);
}
function Pu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Br(e, t) {
  ($s = e),
    (Bc = Ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (Bc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ar === null)) {
      if ($s === null) throw Error(L(308));
      (Ar = e), ($s.dependencies = { lanes: 0, firstContext: e });
    } else Ar = Ar.next = e;
  return t;
}
var Gn = null;
function Wc(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
function b0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Wc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    on(e, r)
  );
}
function on(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var pn = !1;
function Hc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function R0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      on(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Wc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    on(e, n)
  );
}
function cs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Mc(e, n);
  }
}
function Hd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fs(e, t, n, r) {
  var i = e.updateQueue;
  pn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        y = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((d = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (d = typeof v == "function" ? v.call(y, f, d) : v),
                d == null)
              )
                break e;
              f = le({}, f, d);
              break e;
            case 2:
              pn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (y = {
          eventTime: y,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = f)) : (c = c.next = y),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (nr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Kd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var Co = {},
  $t = jn(Co),
  to = jn(Co),
  no = jn(Co);
function Yn(e) {
  if (e === Co) throw Error(L(174));
  return e;
}
function Kc(e, t) {
  switch ((q(no, t), q(to, e), q($t, Co), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ou(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ou(t, e));
  }
  ee($t), q($t, t);
}
function Qr() {
  ee($t), ee(to), ee(no);
}
function A0(e) {
  Yn(no.current);
  var t = Yn($t.current),
    n = ou(t, e.type);
  t !== n && (q(to, e), q($t, n));
}
function Gc(e) {
  to.current === e && (ee($t), ee(to));
}
var oe = jn(0);
function Bs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xl = [];
function Yc() {
  for (var e = 0; e < xl.length; e++)
    xl[e]._workInProgressVersionPrimary = null;
  xl.length = 0;
}
var fs = ln.ReactCurrentDispatcher,
  wl = ln.ReactCurrentBatchConfig,
  tr = 0,
  ae = null,
  xe = null,
  Se = null,
  zs = !1,
  Oi = !1,
  ro = 0,
  Kx = 0;
function Me() {
  throw Error(L(321));
}
function Qc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bt(e[n], t[n])) return !1;
  return !0;
}
function Xc(e, t, n, r, i, o) {
  if (
    ((tr = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fs.current = e === null || e.memoizedState === null ? Xx : Zx),
    (e = n(r, i)),
    Oi)
  ) {
    o = 0;
    do {
      if (((Oi = !1), (ro = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Se = xe = null),
        (t.updateQueue = null),
        (fs.current = qx),
        (e = n(r, i));
    } while (Oi);
  }
  if (
    ((fs.current = Us),
    (t = xe !== null && xe.next !== null),
    (tr = 0),
    (Se = xe = ae = null),
    (zs = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Zc() {
  var e = ro !== 0;
  return (ro = 0), e;
}
function Dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (ae.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function gt() {
  if (xe === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Se === null ? ae.memoizedState : Se.next;
  if (t !== null) (Se = t), (xe = e);
  else {
    if (e === null) throw Error(L(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      Se === null ? (ae.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function io(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sl(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = xe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((tr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (ae.lanes |= c),
          (nr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      bt(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ae.lanes |= o), (nr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cl(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    bt(o, t.memoizedState) || (Ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function M0() {}
function L0(e, t) {
  var n = ae,
    r = gt(),
    i = t(),
    o = !bt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ke = !0)),
    (r = r.queue),
    qc(j0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      oo(9, D0.bind(null, n, r, i, t), void 0, null),
      Ce === null)
    )
      throw Error(L(349));
    tr & 30 || N0(n, t, i);
  }
  return i;
}
function N0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function D0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), O0(t) && I0(e);
}
function j0(e, t, n) {
  return n(function () {
    O0(t) && I0(e);
  });
}
function O0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function I0(e) {
  var t = on(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function Gd(e) {
  var t = Dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: io,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qx.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function oo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _0() {
  return gt().memoizedState;
}
function ds(e, t, n, r) {
  var i = Dt();
  (ae.flags |= e),
    (i.memoizedState = oo(1 | t, n, void 0, r === void 0 ? null : r));
}
function ha(e, t, n, r) {
  var i = gt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (xe !== null) {
    var s = xe.memoizedState;
    if (((o = s.destroy), r !== null && Qc(r, s.deps))) {
      i.memoizedState = oo(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (i.memoizedState = oo(1 | t, n, o, r));
}
function Yd(e, t) {
  return ds(8390656, 8, e, t);
}
function qc(e, t) {
  return ha(2048, 8, e, t);
}
function V0(e, t) {
  return ha(4, 2, e, t);
}
function $0(e, t) {
  return ha(4, 4, e, t);
}
function F0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function B0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ha(4, 4, F0.bind(null, t, e), n)
  );
}
function Jc() {}
function z0(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function U0(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function W0(e, t, n) {
  return tr & 21
    ? (bt(n, t) || ((n = Qm()), (ae.lanes |= n), (nr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function Gx(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = wl.transition;
  wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (wl.transition = r);
  }
}
function H0() {
  return gt().memoizedState;
}
function Yx(e, t, n) {
  var r = Pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    K0(e))
  )
    G0(t, n);
  else if (((n = b0(e, t, n, r)), n !== null)) {
    var i = Fe();
    Et(n, e, r, i), Y0(n, t, r);
  }
}
function Qx(e, t, n) {
  var r = Pn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (K0(e)) G0(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), bt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Wc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = b0(e, t, i, r)),
      n !== null && ((i = Fe()), Et(n, e, r, i), Y0(n, t, r));
  }
}
function K0(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function G0(e, t) {
  Oi = zs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Y0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Mc(e, n);
  }
}
var Us = {
    readContext: mt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  Xx = {
    readContext: mt,
    useCallback: function (e, t) {
      return (Dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: Yd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ds(4194308, 4, F0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ds(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ds(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yx.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Gd,
    useDebugValue: Jc,
    useDeferredValue: function (e) {
      return (Dt().memoizedState = e);
    },
    useTransition: function () {
      var e = Gd(!1),
        t = e[0];
      return (e = Gx.bind(null, e[1])), (Dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        i = Dt();
      if (re) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(L(349));
        tr & 30 || N0(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Yd(j0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        oo(9, D0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Dt(),
        t = Ce.identifierPrefix;
      if (re) {
        var n = Yt,
          r = Gt;
        (n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ro++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zx = {
    readContext: mt,
    useCallback: z0,
    useContext: mt,
    useEffect: qc,
    useImperativeHandle: B0,
    useInsertionEffect: V0,
    useLayoutEffect: $0,
    useMemo: U0,
    useReducer: Sl,
    useRef: _0,
    useState: function () {
      return Sl(io);
    },
    useDebugValue: Jc,
    useDeferredValue: function (e) {
      var t = gt();
      return W0(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Sl(io)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: M0,
    useSyncExternalStore: L0,
    useId: H0,
    unstable_isNewReconciler: !1,
  },
  qx = {
    readContext: mt,
    useCallback: z0,
    useContext: mt,
    useEffect: qc,
    useImperativeHandle: B0,
    useInsertionEffect: V0,
    useLayoutEffect: $0,
    useMemo: U0,
    useReducer: Cl,
    useRef: _0,
    useState: function () {
      return Cl(io);
    },
    useDebugValue: Jc,
    useDeferredValue: function (e) {
      var t = gt();
      return xe === null ? (t.memoizedState = e) : W0(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(io)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: M0,
    useSyncExternalStore: L0,
    useId: H0,
    unstable_isNewReconciler: !1,
  };
function St(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Eu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ma = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = Pn(e),
      o = Xt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = kn(e, o, i)),
      t !== null && (Et(t, e, i, r), cs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = Pn(e),
      o = Xt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = kn(e, o, i)),
      t !== null && (Et(t, e, i, r), cs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = Pn(e),
      i = Xt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = kn(e, i, r)),
      t !== null && (Et(t, e, r, n), cs(t, e, r));
  },
};
function Qd(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zi(n, r) || !Zi(i, o)
      : !0
  );
}
function Q0(e, t, n) {
  var r = !1,
    i = Rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = mt(o))
      : ((i = Ye(t) ? Jn : _e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Kr(e, i) : Rn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ma),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Xd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ma.enqueueReplaceState(t, t.state, null);
}
function bu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Hc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = mt(o))
    : ((o = Ye(t) ? Jn : _e.current), (i.context = Kr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Eu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ma.enqueueReplaceState(i, i.state, null),
      Fs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += E1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ru(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jx = typeof WeakMap == "function" ? WeakMap : Map;
function X0(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Hs || ((Hs = !0), (Vu = r)), Ru(e, t);
    }),
    n
  );
}
function Z0(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ru(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ru(e, t),
          typeof r != "function" &&
            (Tn === null ? (Tn = new Set([this])) : Tn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Zd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jx();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = pw.bind(null, e, t, n)), t.then(e, e));
}
function qd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Jd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xt(-1, 1)), (t.tag = 2), kn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ew = ln.ReactCurrentOwner,
  Ke = !1;
function $e(e, t, n, r) {
  t.child = e === null ? E0(t, null, n, r) : Yr(t, e.child, n, r);
}
function ep(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Br(t, i),
    (r = Xc(e, t, n, r, o, i)),
    (n = Zc()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        sn(e, t, i))
      : (re && n && Vc(t), (t.flags |= 1), $e(e, t, r, i), t.child)
  );
}
function tp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !lf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), q0(e, t, o, r, i))
      : ((e = gs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zi), n(s, r) && e.ref === t.ref)
    )
      return sn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = En(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function q0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zi(o, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return (t.lanes = e.lanes), sn(e, t, i);
  }
  return Au(e, t, n, r, i);
}
function J0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(Lr, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(Lr, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        q(Lr, qe),
        (qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(Lr, qe),
      (qe |= r);
  return $e(e, t, i, n), t.child;
}
function eg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Au(e, t, n, r, i) {
  var o = Ye(n) ? Jn : _e.current;
  return (
    (o = Kr(t, o)),
    Br(t, i),
    (n = Xc(e, t, n, r, o, i)),
    (r = Zc()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        sn(e, t, i))
      : (re && r && Vc(t), (t.flags |= 1), $e(e, t, n, i), t.child)
  );
}
function np(e, t, n, r, i) {
  if (Ye(n)) {
    var o = !0;
    Os(t);
  } else o = !1;
  if ((Br(t, i), t.stateNode === null))
    ps(e, t), Q0(t, n, r), bu(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mt(u))
      : ((u = Ye(n) ? Jn : _e.current), (u = Kr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Xd(t, s, r, u)),
      (pn = !1);
    var d = t.memoizedState;
    (s.state = d),
      Fs(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ge.current || pn
        ? (typeof c == "function" && (Eu(t, n, c, r), (l = t.memoizedState)),
          (a = pn || Qd(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      R0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : St(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = mt(l))
        : ((l = Ye(n) ? Jn : _e.current), (l = Kr(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Xd(t, s, r, l)),
      (pn = !1),
      (d = t.memoizedState),
      (s.state = d),
      Fs(t, r, s, i);
    var v = t.memoizedState;
    a !== f || d !== v || Ge.current || pn
      ? (typeof y == "function" && (Eu(t, n, y, r), (v = t.memoizedState)),
        (u = pn || Qd(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Mu(e, t, n, r, o, i);
}
function Mu(e, t, n, r, i, o) {
  eg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Bd(t, n, !1), sn(e, t, o);
  (r = t.stateNode), (ew.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Yr(t, e.child, null, o)), (t.child = Yr(t, null, a, o)))
      : $e(e, t, a, o),
    (t.memoizedState = r.state),
    i && Bd(t, n, !0),
    t.child
  );
}
function tg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fd(e, t.context, !1),
    Kc(e, t.containerInfo);
}
function rp(e, t, n, r, i) {
  return Gr(), Fc(i), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ng(e, t, n) {
  var r = t.pendingProps,
    i = oe.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    q(oe, i & 1),
    e === null)
  )
    return (
      Tu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = va(s, r, 0, null)),
              (e = Zn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Nu(n)),
              (t.memoizedState = Lu),
              e)
            : ef(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return tw(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = En(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = En(a, o)) : ((o = Zn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Nu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Lu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = En(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ef(e, t) {
  return (
    (t = va({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ho(e, t, n, r) {
  return (
    r !== null && Fc(r),
    Yr(t, e.child, null, n),
    (e = ef(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tw(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = kl(Error(L(422)))), Ho(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = va({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Zn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Yr(t, e.child, null, s),
        (t.child.memoizedState = Nu(s)),
        (t.memoizedState = Lu),
        o);
  if (!(t.mode & 1)) return Ho(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(L(419))), (r = kl(o, r, void 0)), Ho(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ke || a)) {
    if (((r = Ce), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), on(e, i), Et(r, e, i, -1));
    }
    return af(), (r = kl(Error(L(421)))), Ho(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (et = Cn(i.nextSibling)),
      (tt = t),
      (re = !0),
      (Tt = null),
      e !== null &&
        ((ct[ft++] = Gt),
        (ct[ft++] = Yt),
        (ct[ft++] = er),
        (Gt = e.id),
        (Yt = e.overflow),
        (er = t)),
      (t = ef(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ip(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pu(e.return, t, n);
}
function Tl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function rg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if (($e(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ip(e, n, t);
        else if (e.tag === 19) ip(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Bs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Tl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Bs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Tl(t, !0, n, null, o);
        break;
      case "together":
        Tl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ps(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function sn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (nr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = En(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = En(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nw(e, t, n) {
  switch (t.tag) {
    case 3:
      tg(t), Gr();
      break;
    case 5:
      A0(t);
      break;
    case 1:
      Ye(t.type) && Os(t);
      break;
    case 4:
      Kc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      q(Vs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ng(e, t, n)
          : (q(oe, oe.current & 1),
            (e = sn(e, t, n)),
            e !== null ? e.sibling : null);
      q(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        q(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), J0(e, t, n);
  }
  return sn(e, t, n);
}
var ig, Du, og, sg;
ig = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Du = function () {};
og = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Yn($t.current);
    var o = null;
    switch (n) {
      case "input":
        (i = tu(e, i)), (r = tu(e, r)), (o = []);
        break;
      case "select":
        (i = le({}, i, { value: void 0 })),
          (r = le({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = iu(e, i)), (r = iu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ds);
    }
    su(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Wi.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Wi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && J("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
sg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mi(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rw(e, t, n) {
  var r = t.pendingProps;
  switch (($c(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return Ye(t.type) && js(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qr(),
        ee(Ge),
        ee(_e),
        Yc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Uo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tt !== null && (Bu(Tt), (Tt = null)))),
        Du(e, t),
        Le(t),
        null
      );
    case 5:
      Gc(t);
      var i = Yn(no.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        og(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Le(t), null;
        }
        if (((e = Yn($t.current)), Uo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[It] = t), (r[eo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ki.length; i++) J(ki[i], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              pd(r, o), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              md(r, o), J("invalid", r);
          }
          su(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      zo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      zo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Wi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              jo(r), hd(r, o, !0);
              break;
            case "textarea":
              jo(r), gd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ds);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = jm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[It] = t),
            (e[eo] = r),
            ig(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = au(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ki.length; i++) J(ki[i], e);
                i = r;
                break;
              case "source":
                J("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (i = r);
                break;
              case "details":
                J("toggle", e), (i = r);
                break;
              case "input":
                pd(e, r), (i = tu(e, r)), J("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = le({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                md(e, r), (i = iu(e, r)), J("invalid", e);
                break;
              default:
                i = r;
            }
            su(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? _m(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Om(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Hi(e, l)
                    : typeof l == "number" && Hi(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Wi.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && J("scroll", e)
                      : l != null && Tc(e, o, l, s));
              }
            switch (n) {
              case "input":
                jo(e), hd(e, r, !1);
                break;
              case "textarea":
                jo(e), gd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + bn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? _r(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      _r(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ds);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) sg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Yn(no.current)), Yn($t.current), Uo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[It] = t),
            (o = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                zo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[It] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (ee(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && et !== null && t.mode & 1 && !(t.flags & 128))
          T0(), Gr(), (t.flags |= 98560), (o = !1);
        else if (((o = Uo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[It] = t;
          } else
            Gr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else Tt !== null && (Bu(Tt), (Tt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? we === 0 && (we = 3) : af())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        Qr(), Du(e, t), e === null && qi(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return Uc(t.type._context), Le(t), null;
    case 17:
      return Ye(t.type) && js(), Le(t), null;
    case 19:
      if ((ee(oe), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) mi(o, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    mi(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            me() > Zr &&
            ((t.flags |= 128), (r = !0), mi(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !re)
            )
              return Le(t), null;
          } else
            2 * me() - o.renderingStartTime > Zr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mi(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = me()),
          (t.sibling = null),
          (n = oe.current),
          q(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        sf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function iw(e, t) {
  switch (($c(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && js(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qr(),
        ee(Ge),
        ee(_e),
        Yc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Gc(t), null;
    case 13:
      if (
        (ee(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Gr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ee(oe), null;
    case 4:
      return Qr(), null;
    case 10:
      return Uc(t.type._context), null;
    case 22:
    case 23:
      return sf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ko = !1,
  je = !1,
  ow = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Mr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function ju(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var op = !1;
function sw(e, t) {
  if (((yu = Ms), (e = f0()), _c(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (d = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vu = { focusedElem: e, selectionRange: n }, Ms = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    S = v.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : St(t.type, x),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (w) {
          de(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (v = op), (op = !1), v;
}
function Ii(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ju(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ga(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ou(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ag(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ag(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[It], delete t[eo], delete t[Su], delete t[zx], delete t[Ux])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function lg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || lg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ds));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Iu(e, t, n), e = e.sibling; e !== null; ) Iu(e, t, n), (e = e.sibling);
}
function _u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_u(e, t, n), e = e.sibling; e !== null; ) _u(e, t, n), (e = e.sibling);
}
var Pe = null,
  kt = !1;
function cn(e, t, n) {
  for (n = n.child; n !== null; ) ug(e, t, n), (n = n.sibling);
}
function ug(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function")
    try {
      Vt.onCommitFiberUnmount(la, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Mr(n, t);
    case 6:
      var r = Pe,
        i = kt;
      (Pe = null),
        cn(e, t, n),
        (Pe = r),
        (kt = i),
        Pe !== null &&
          (kt
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (kt
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? yl(e.parentNode, n)
              : e.nodeType === 1 && yl(e, n),
            Qi(e))
          : yl(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (i = kt),
        (Pe = n.stateNode.containerInfo),
        (kt = !0),
        cn(e, t, n),
        (Pe = r),
        (kt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && ju(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      cn(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (Mr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          de(n, t, a);
        }
      cn(e, t, n);
      break;
    case 21:
      cn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), cn(e, t, n), (je = r))
        : cn(e, t, n);
      break;
    default:
      cn(e, t, n);
  }
}
function ap(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ow()),
      t.forEach(function (r) {
        var i = mw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Pe = a.stateNode), (kt = !1);
              break e;
            case 3:
              (Pe = a.stateNode.containerInfo), (kt = !0);
              break e;
            case 4:
              (Pe = a.stateNode.containerInfo), (kt = !0);
              break e;
          }
          a = a.return;
        }
        if (Pe === null) throw Error(L(160));
        ug(o, s, i), (Pe = null), (kt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        de(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cg(t, e), (t = t.sibling);
}
function cg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((wt(t, e), Mt(e), r & 4)) {
        try {
          Ii(3, e, e.return), ga(3, e);
        } catch (x) {
          de(e, e.return, x);
        }
        try {
          Ii(5, e, e.return);
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 1:
      wt(t, e), Mt(e), r & 512 && n !== null && Mr(n, n.return);
      break;
    case 5:
      if (
        (wt(t, e),
        Mt(e),
        r & 512 && n !== null && Mr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Hi(i, "");
        } catch (x) {
          de(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Nm(i, o),
              au(a, s);
            var u = au(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? _m(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Om(i, f)
                : c === "children"
                ? Hi(i, f)
                : Tc(i, c, f, u);
            }
            switch (a) {
              case "input":
                nu(i, o);
                break;
              case "textarea":
                Dm(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? _r(i, !!o.multiple, y, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? _r(i, !!o.multiple, o.defaultValue, !0)
                      : _r(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[eo] = o;
          } catch (x) {
            de(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((wt(t, e), Mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (wt(t, e), Mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qi(t.containerInfo);
        } catch (x) {
          de(e, e.return, x);
        }
      break;
    case 4:
      wt(t, e), Mt(e);
      break;
    case 13:
      wt(t, e),
        Mt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (rf = me())),
        r & 4 && ap(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || c), wt(t, e), (je = u)) : wt(t, e),
        Mt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (f = D = c; D !== null; ) {
              switch (((d = D), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, d, d.return);
                  break;
                case 1:
                  Mr(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      de(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Mr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    up(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (D = y)) : up(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Im("display", s)));
              } catch (x) {
                de(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                de(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      wt(t, e), Mt(e), r & 4 && ap(e);
      break;
    case 21:
      break;
    default:
      wt(t, e), Mt(e);
  }
}
function Mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Hi(i, ""), (r.flags &= -33));
          var o = sp(e);
          _u(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = sp(e);
          Iu(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      de(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function aw(e, t, n) {
  (D = e), fg(e);
}
function fg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ko;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || je;
        a = Ko;
        var u = je;
        if (((Ko = s), (je = l) && !u))
          for (D = i; D !== null; )
            (s = D),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? cp(i)
                : l !== null
                ? ((l.return = s), (D = l))
                : cp(i);
        for (; o !== null; ) (D = o), fg(o), (o = o.sibling);
        (D = i), (Ko = a), (je = u);
      }
      lp(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (D = o)) : lp(e);
  }
}
function lp(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || ga(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : St(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Kd(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Kd(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Qi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        je || (t.flags & 512 && Ou(t));
      } catch (d) {
        de(t, t.return, d);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function up(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function cp(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ga(4, t);
          } catch (l) {
            de(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              de(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ou(t);
          } catch (l) {
            de(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ou(t);
          } catch (l) {
            de(t, s, l);
          }
      }
    } catch (l) {
      de(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var lw = Math.ceil,
  Ws = ln.ReactCurrentDispatcher,
  tf = ln.ReactCurrentOwner,
  ht = ln.ReactCurrentBatchConfig,
  W = 0,
  Ce = null,
  ve = null,
  Re = 0,
  qe = 0,
  Lr = jn(0),
  we = 0,
  so = null,
  nr = 0,
  ya = 0,
  nf = 0,
  _i = null,
  He = null,
  rf = 0,
  Zr = 1 / 0,
  Ht = null,
  Hs = !1,
  Vu = null,
  Tn = null,
  Go = !1,
  yn = null,
  Ks = 0,
  Vi = 0,
  $u = null,
  hs = -1,
  ms = 0;
function Fe() {
  return W & 6 ? me() : hs !== -1 ? hs : (hs = me());
}
function Pn(e) {
  return e.mode & 1
    ? W & 2 && Re !== 0
      ? Re & -Re
      : Hx.transition !== null
      ? (ms === 0 && (ms = Qm()), ms)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : n0(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < Vi) throw ((Vi = 0), ($u = null), Error(L(185)));
  xo(e, n, r),
    (!(W & 2) || e !== Ce) &&
      (e === Ce && (!(W & 2) && (ya |= n), we === 4 && mn(e, Re)),
      Qe(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((Zr = me() + 500), pa && On()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  H1(e, t);
  var r = As(e, e === Ce ? Re : 0);
  if (r === 0)
    n !== null && xd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xd(n), t === 1))
      e.tag === 0 ? Wx(fp.bind(null, e)) : S0(fp.bind(null, e)),
        Fx(function () {
          !(W & 6) && On();
        }),
        (n = null);
    else {
      switch (Xm(r)) {
        case 1:
          n = Ac;
          break;
        case 4:
          n = Gm;
          break;
        case 16:
          n = Rs;
          break;
        case 536870912:
          n = Ym;
          break;
        default:
          n = Rs;
      }
      n = xg(n, dg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function dg(e, t) {
  if (((hs = -1), (ms = 0), W & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (zr() && e.callbackNode !== n) return null;
  var r = As(e, e === Ce ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Gs(e, r);
  else {
    t = r;
    var i = W;
    W |= 2;
    var o = hg();
    (Ce !== e || Re !== t) && ((Ht = null), (Zr = me() + 500), Xn(e, t));
    do
      try {
        fw();
        break;
      } catch (a) {
        pg(e, a);
      }
    while (!0);
    zc(),
      (Ws.current = o),
      (W = i),
      ve !== null ? (t = 0) : ((Ce = null), (Re = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = du(e)), i !== 0 && ((r = i), (t = Fu(e, i)))), t === 1)
    )
      throw ((n = so), Xn(e, 0), mn(e, r), Qe(e, me()), n);
    if (t === 6) mn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !uw(i) &&
          ((t = Gs(e, r)),
          t === 2 && ((o = du(e)), o !== 0 && ((r = o), (t = Fu(e, o)))),
          t === 1))
      )
        throw ((n = so), Xn(e, 0), mn(e, r), Qe(e, me()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Bn(e, He, Ht);
          break;
        case 3:
          if (
            (mn(e, r), (r & 130023424) === r && ((t = rf + 500 - me()), 10 < t))
          ) {
            if (As(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = wu(Bn.bind(null, e, He, Ht), t);
            break;
          }
          Bn(e, He, Ht);
          break;
        case 4:
          if ((mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Pt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * lw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wu(Bn.bind(null, e, He, Ht), r);
            break;
          }
          Bn(e, He, Ht);
          break;
        case 5:
          Bn(e, He, Ht);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Qe(e, me()), e.callbackNode === n ? dg.bind(null, e) : null;
}
function Fu(e, t) {
  var n = _i;
  return (
    e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256),
    (e = Gs(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && Bu(t)),
    e
  );
}
function Bu(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function uw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!bt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mn(e, t) {
  for (
    t &= ~nf,
      t &= ~ya,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fp(e) {
  if (W & 6) throw Error(L(327));
  zr();
  var t = As(e, 0);
  if (!(t & 1)) return Qe(e, me()), null;
  var n = Gs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = du(e);
    r !== 0 && ((t = r), (n = Fu(e, r)));
  }
  if (n === 1) throw ((n = so), Xn(e, 0), mn(e, t), Qe(e, me()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bn(e, He, Ht),
    Qe(e, me()),
    null
  );
}
function of(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((Zr = me() + 500), pa && On());
  }
}
function rr(e) {
  yn !== null && yn.tag === 0 && !(W & 6) && zr();
  var t = W;
  W |= 1;
  var n = ht.transition,
    r = G;
  try {
    if (((ht.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (ht.transition = n), (W = t), !(W & 6) && On();
  }
}
function sf() {
  (qe = Lr.current), ee(Lr);
}
function Xn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $x(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch (($c(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && js();
          break;
        case 3:
          Qr(), ee(Ge), ee(_e), Yc();
          break;
        case 5:
          Gc(r);
          break;
        case 4:
          Qr();
          break;
        case 13:
          ee(oe);
          break;
        case 19:
          ee(oe);
          break;
        case 10:
          Uc(r.type._context);
          break;
        case 22:
        case 23:
          sf();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ve = e = En(e.current, null)),
    (Re = qe = t),
    (we = 0),
    (so = null),
    (nf = ya = nr = 0),
    (He = _i = null),
    Gn !== null)
  ) {
    for (t = 0; t < Gn.length; t++)
      if (((n = Gn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Gn = null;
  }
  return e;
}
function pg(e, t) {
  do {
    var n = ve;
    try {
      if ((zc(), (fs.current = Us), zs)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        zs = !1;
      }
      if (
        ((tr = 0),
        (Se = xe = ae = null),
        (Oi = !1),
        (ro = 0),
        (tf.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (so = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Re),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = qd(s);
          if (y !== null) {
            (y.flags &= -257),
              Jd(y, s, a, o, t),
              y.mode & 1 && Zd(o, u, t),
              (t = y),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Zd(o, u, t), af();
              break e;
            }
            l = Error(L(426));
          }
        } else if (re && a.mode & 1) {
          var S = qd(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Jd(S, s, a, o, t),
              Fc(Xr(l, a));
            break e;
          }
        }
        (o = l = Xr(l, a)),
          we !== 4 && (we = 2),
          _i === null ? (_i = [o]) : _i.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = X0(o, l, t);
              Hd(o, h);
              break e;
            case 1:
              a = l;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Tn === null || !Tn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Z0(o, a, t);
                Hd(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      gg(n);
    } catch (k) {
      (t = k), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hg() {
  var e = Ws.current;
  return (Ws.current = Us), e === null ? Us : e;
}
function af() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ce === null || (!(nr & 268435455) && !(ya & 268435455)) || mn(Ce, Re);
}
function Gs(e, t) {
  var n = W;
  W |= 2;
  var r = hg();
  (Ce !== e || Re !== t) && ((Ht = null), Xn(e, t));
  do
    try {
      cw();
      break;
    } catch (i) {
      pg(e, i);
    }
  while (!0);
  if ((zc(), (W = n), (Ws.current = r), ve !== null)) throw Error(L(261));
  return (Ce = null), (Re = 0), we;
}
function cw() {
  for (; ve !== null; ) mg(ve);
}
function fw() {
  for (; ve !== null && !I1(); ) mg(ve);
}
function mg(e) {
  var t = vg(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? gg(e) : (ve = t),
    (tf.current = null);
}
function gg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = iw(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    } else if (((n = rw(n, t, qe)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Bn(e, t, n) {
  var r = G,
    i = ht.transition;
  try {
    (ht.transition = null), (G = 1), dw(e, t, n, r);
  } finally {
    (ht.transition = i), (G = r);
  }
  return null;
}
function dw(e, t, n, r) {
  do zr();
  while (yn !== null);
  if (W & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (K1(e, o),
    e === Ce && ((ve = Ce = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Go ||
      ((Go = !0),
      xg(Rs, function () {
        return zr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ht.transition), (ht.transition = null);
    var s = G;
    G = 1;
    var a = W;
    (W |= 4),
      (tf.current = null),
      sw(e, n),
      cg(n, e),
      Nx(vu),
      (Ms = !!yu),
      (vu = yu = null),
      (e.current = n),
      aw(n),
      _1(),
      (W = a),
      (G = s),
      (ht.transition = o);
  } else e.current = n;
  if (
    (Go && ((Go = !1), (yn = e), (Ks = i)),
    (o = e.pendingLanes),
    o === 0 && (Tn = null),
    F1(n.stateNode),
    Qe(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Hs) throw ((Hs = !1), (e = Vu), (Vu = null), e);
  return (
    Ks & 1 && e.tag !== 0 && zr(),
    (o = e.pendingLanes),
    o & 1 ? (e === $u ? Vi++ : ((Vi = 0), ($u = e))) : (Vi = 0),
    On(),
    null
  );
}
function zr() {
  if (yn !== null) {
    var e = Xm(Ks),
      t = ht.transition,
      n = G;
    try {
      if (((ht.transition = null), (G = 16 > e ? 16 : e), yn === null))
        var r = !1;
      else {
        if (((e = yn), (yn = null), (Ks = 0), W & 6)) throw Error(L(331));
        var i = W;
        for (W |= 4, D = e.current; D !== null; ) {
          var o = D,
            s = o.child;
          if (D.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (D = f);
                  else
                    for (; D !== null; ) {
                      c = D;
                      var d = c.sibling,
                        y = c.return;
                      if ((ag(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = y), (D = d);
                        break;
                      }
                      D = y;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var S = x.sibling;
                    (x.sibling = null), (x = S);
                  } while (x !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (D = s);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ii(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (D = h);
                break e;
              }
              D = o.return;
            }
        }
        var p = e.current;
        for (D = p; D !== null; ) {
          s = D;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (D = m);
          else
            e: for (s = p; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ga(9, a);
                  }
                } catch (k) {
                  de(a, a.return, k);
                }
              if (a === s) {
                D = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (D = w);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((W = i), On(), Vt && typeof Vt.onPostCommitFiberRoot == "function")
        )
          try {
            Vt.onPostCommitFiberRoot(la, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (ht.transition = t);
    }
  }
  return !1;
}
function dp(e, t, n) {
  (t = Xr(n, t)),
    (t = X0(e, t, 1)),
    (e = kn(e, t, 1)),
    (t = Fe()),
    e !== null && (xo(e, 1, t), Qe(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) dp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Tn === null || !Tn.has(r)))
        ) {
          (e = Xr(n, e)),
            (e = Z0(t, e, 1)),
            (t = kn(t, e, 1)),
            (e = Fe()),
            t !== null && (xo(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Re & n) === n &&
      (we === 4 || (we === 3 && (Re & 130023424) === Re && 500 > me() - rf)
        ? Xn(e, 0)
        : (nf |= n)),
    Qe(e, t);
}
function yg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _o), (_o <<= 1), !(_o & 130023424) && (_o = 4194304))
      : (t = 1));
  var n = Fe();
  (e = on(e, t)), e !== null && (xo(e, t, n), Qe(e, n));
}
function hw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yg(e, n);
}
function mw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), yg(e, n);
}
var vg;
vg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), nw(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else (Ke = !1), re && t.flags & 1048576 && C0(t, _s, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ps(e, t), (e = t.pendingProps);
      var i = Kr(t, _e.current);
      Br(t, n), (i = Xc(null, t, r, e, i, n));
      var o = Zc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((o = !0), Os(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Hc(t),
            (i.updater = ma),
            (t.stateNode = i),
            (i._reactInternals = t),
            bu(t, r, e, n),
            (t = Mu(null, t, r, !0, o, n)))
          : ((t.tag = 0), re && o && Vc(t), $e(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ps(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = yw(r)),
          (e = St(r, e)),
          i)
        ) {
          case 0:
            t = Au(null, t, r, e, n);
            break e;
          case 1:
            t = np(null, t, r, e, n);
            break e;
          case 11:
            t = ep(null, t, r, e, n);
            break e;
          case 14:
            t = tp(null, t, r, St(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : St(r, i)),
        Au(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : St(r, i)),
        np(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((tg(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          R0(e, t),
          Fs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Xr(Error(L(423)), t)), (t = rp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Xr(Error(L(424)), t)), (t = rp(e, t, r, n, i));
            break e;
          } else
            for (
              et = Cn(t.stateNode.containerInfo.firstChild),
                tt = t,
                re = !0,
                Tt = null,
                n = E0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gr(), r === i)) {
            t = sn(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        A0(t),
        e === null && Tu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        xu(r, i) ? (s = null) : o !== null && xu(r, o) && (t.flags |= 32),
        eg(e, t),
        $e(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Tu(t), null;
    case 13:
      return ng(e, t, n);
    case 4:
      return (
        Kc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : St(r, i)),
        ep(e, t, r, i, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          q(Vs, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (bt(o.value, s)) {
            if (o.children === i.children && !Ge.current) {
              t = sn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Xt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Pu(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Pu(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        $e(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Br(t, n),
        (i = mt(i)),
        (r = r(i)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = St(r, t.pendingProps)),
        (i = St(r.type, i)),
        tp(e, t, r, i, n)
      );
    case 15:
      return q0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : St(r, i)),
        ps(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), Os(t)) : (e = !1),
        Br(t, n),
        Q0(t, r, i),
        bu(t, r, i, n),
        Mu(null, t, r, !0, e, n)
      );
    case 19:
      return rg(e, t, n);
    case 22:
      return J0(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function xg(e, t) {
  return Km(e, t);
}
function gw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function pt(e, t, n, r) {
  return new gw(e, t, n, r);
}
function lf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yw(e) {
  if (typeof e == "function") return lf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ec)) return 11;
    if (e === bc) return 14;
  }
  return 2;
}
function En(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gs(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) lf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Sr:
        return Zn(n.children, i, o, t);
      case Pc:
        (s = 8), (i |= 8);
        break;
      case Zl:
        return (
          (e = pt(12, n, t, i | 2)), (e.elementType = Zl), (e.lanes = o), e
        );
      case ql:
        return (e = pt(13, n, t, i)), (e.elementType = ql), (e.lanes = o), e;
      case Jl:
        return (e = pt(19, n, t, i)), (e.elementType = Jl), (e.lanes = o), e;
      case Am:
        return va(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case bm:
              s = 10;
              break e;
            case Rm:
              s = 9;
              break e;
            case Ec:
              s = 11;
              break e;
            case bc:
              s = 14;
              break e;
            case dn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Zn(e, t, n, r) {
  return (e = pt(7, e, r, t)), (e.lanes = n), e;
}
function va(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = Am),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pl(e, t, n) {
  return (e = pt(6, e, null, t)), (e.lanes = n), e;
}
function El(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vw(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = sl(0)),
    (this.expirationTimes = sl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = sl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function uf(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new vw(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = pt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hc(o),
    e
  );
}
function xw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wg(e) {
  if (!e) return Rn;
  e = e._reactInternals;
  e: {
    if (lr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return w0(e, n, t);
  }
  return t;
}
function Sg(e, t, n, r, i, o, s, a, l) {
  return (
    (e = uf(n, r, !0, e, i, o, s, a, l)),
    (e.context = wg(null)),
    (n = e.current),
    (r = Fe()),
    (i = Pn(n)),
    (o = Xt(r, i)),
    (o.callback = t ?? null),
    kn(n, o, i),
    (e.current.lanes = i),
    xo(e, i, r),
    Qe(e, r),
    e
  );
}
function xa(e, t, n, r) {
  var i = t.current,
    o = Fe(),
    s = Pn(i);
  return (
    (n = wg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kn(i, t, s)),
    e !== null && (Et(e, i, s, o), cs(e, i, s)),
    s
  );
}
function Ys(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cf(e, t) {
  pp(e, t), (e = e.alternate) && pp(e, t);
}
function ww() {
  return null;
}
var Cg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ff(e) {
  this._internalRoot = e;
}
wa.prototype.render = ff.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  xa(e, t, null, null);
};
wa.prototype.unmount = ff.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rr(function () {
      xa(null, e, null, null);
    }),
      (t[rn] = null);
  }
};
function wa(e) {
  this._internalRoot = e;
}
wa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
    hn.splice(n, 0, e), n === 0 && t0(e);
  }
};
function df(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hp() {}
function Sw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Ys(s);
        o.call(u);
      };
    }
    var s = Sg(t, r, e, 0, null, !1, !1, "", hp);
    return (
      (e._reactRootContainer = s),
      (e[rn] = s.current),
      qi(e.nodeType === 8 ? e.parentNode : e),
      rr(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ys(l);
      a.call(u);
    };
  }
  var l = uf(e, 0, !1, null, null, !1, !1, "", hp);
  return (
    (e._reactRootContainer = l),
    (e[rn] = l.current),
    qi(e.nodeType === 8 ? e.parentNode : e),
    rr(function () {
      xa(t, l, n, r);
    }),
    l
  );
}
function Ca(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ys(s);
        a.call(l);
      };
    }
    xa(t, s, e, i);
  } else s = Sw(n, t, e, i, r);
  return Ys(s);
}
Zm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ci(t.pendingLanes);
        n !== 0 &&
          (Mc(t, n | 1), Qe(t, me()), !(W & 6) && ((Zr = me() + 500), On()));
      }
      break;
    case 13:
      rr(function () {
        var r = on(e, 1);
        if (r !== null) {
          var i = Fe();
          Et(r, e, 1, i);
        }
      }),
        cf(e, 1);
  }
};
Lc = function (e) {
  if (e.tag === 13) {
    var t = on(e, 134217728);
    if (t !== null) {
      var n = Fe();
      Et(t, e, 134217728, n);
    }
    cf(e, 134217728);
  }
};
qm = function (e) {
  if (e.tag === 13) {
    var t = Pn(e),
      n = on(e, t);
    if (n !== null) {
      var r = Fe();
      Et(n, e, t, r);
    }
    cf(e, t);
  }
};
Jm = function () {
  return G;
};
e0 = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
uu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((nu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = da(r);
            if (!i) throw Error(L(90));
            Lm(r), nu(r, i);
          }
        }
      }
      break;
    case "textarea":
      Dm(e, n);
      break;
    case "select":
      (t = n.value), t != null && _r(e, !!n.multiple, t, !1);
  }
};
Fm = of;
Bm = rr;
var Cw = { usingClientEntryPoint: !1, Events: [So, Pr, da, Vm, $m, of] },
  gi = {
    findFiberByHostInstance: Kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  kw = {
    bundleType: gi.bundleType,
    version: gi.version,
    rendererPackageName: gi.rendererPackageName,
    rendererConfig: gi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ln.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gi.findFiberByHostInstance || ww,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yo.isDisabled && Yo.supportsFiber)
    try {
      (la = Yo.inject(kw)), (Vt = Yo);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cw;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!df(t)) throw Error(L(200));
  return xw(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!df(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = Cg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = uf(e, 1, !1, null, null, n, !1, r, i)),
    (e[rn] = t.current),
    qi(e.nodeType === 8 ? e.parentNode : e),
    new ff(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Wm(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return rr(e);
};
st.hydrate = function (e, t, n) {
  if (!Sa(t)) throw Error(L(200));
  return Ca(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!df(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Cg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Sg(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[rn] = t.current),
    qi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new wa(t);
};
st.render = function (e, t, n) {
  if (!Sa(t)) throw Error(L(200));
  return Ca(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!Sa(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (rr(function () {
        Ca(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rn] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = of;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sa(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Ca(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function kg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kg);
    } catch (e) {
      console.error(e);
    }
}
kg(), (km.exports = st);
var pf = km.exports;
const Qo = fm(pf);
var Tg,
  mp = pf;
(Tg = mp.createRoot), mp.hydrateRoot;
function Tw(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function ao(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const zu = (e) => Array.isArray(e);
function Pg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function lo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function gp(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function hf(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = gp(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = gp(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function ka(e, t, n) {
  const r = e.getProps();
  return hf(r, t, n !== void 0 ? n : r.custom, e);
}
const mf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  gf = ["initial", ...mf],
  ko = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  In = new Set(ko),
  Zt = (e) => e * 1e3,
  qt = (e) => e / 1e3,
  Pw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Ew = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  bw = { type: "keyframes", duration: 0.8 },
  Rw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Aw = (e, { keyframes: t }) =>
    t.length > 2
      ? bw
      : In.has(e)
      ? e.startsWith("scale")
        ? Ew(t[1])
        : Pw
      : Rw;
function yf(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Mw = { skipAnimations: !1, useManualTiming: !1 },
  Lw = (e) => e !== null;
function Ta(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Lw),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const Ie = (e) => e;
function Nw(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    o.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const y = f && r ? t : n;
      return c && o.add(u), y.has(u) || y.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const Xo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Dw = 40;
function Eg(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Xo.reduce((h, p) => ((h[p] = Nw(o)), h), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    y = () => {
      const h = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, Dw), 1)),
        (i.timestamp = h),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(y);
    };
  return {
    schedule: Xo.reduce((h, p) => {
      const m = s[p];
      return (h[p] = (w, k = !1, E = !1) => (n || v(), m.schedule(w, k, E))), h;
    }, {}),
    cancel: (h) => {
      for (let p = 0; p < Xo.length; p++) s[Xo[p]].cancel(h);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: Y,
    cancel: An,
    state: Ee,
    steps: bl,
  } = Eg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0),
  bg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  jw = 1e-7,
  Ow = 12;
function Iw(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = bg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > jw && ++a < Ow);
  return s;
}
function To(e, t, n, r) {
  if (e === t && n === r) return Ie;
  const i = (o) => Iw(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : bg(i(o), t, r));
}
const Rg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Ag = (e) => (t) => 1 - e(1 - t),
  Mg = To(0.33, 1.53, 0.69, 0.99),
  vf = Ag(Mg),
  Lg = Rg(vf),
  Ng = (e) =>
    (e *= 2) < 1 ? 0.5 * vf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  xf = (e) => 1 - Math.sin(Math.acos(e)),
  Dg = Ag(xf),
  jg = Rg(xf),
  Og = (e) => /^0[^.\s]+$/u.test(e);
function _w(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Og(e)
    : !0;
}
let Uu = Ie;
const Ig = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  _g = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Vg = _g("--"),
  Vw = _g("var(--"),
  wf = (e) => (Vw(e) ? $w.test(e.split("/*")[0].trim()) : !1),
  $w =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Fw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Bw(e) {
  const t = Fw.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function $g(e, t, n = 1) {
  const [r, i] = Bw(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Ig(s) ? parseFloat(s) : s;
  }
  return wf(i) ? $g(i, t, n + 1) : i;
}
const Mn = (e, t, n) => (n > t ? t : n < e ? e : n),
  ai = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  uo = { ...ai, transform: (e) => Mn(0, 1, e) },
  Zo = { ...ai, default: 1 },
  Po = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  fn = Po("deg"),
  Ft = Po("%"),
  I = Po("px"),
  zw = Po("vh"),
  Uw = Po("vw"),
  yp = {
    ...Ft,
    parse: (e) => Ft.parse(e) / 100,
    transform: (e) => Ft.transform(e * 100),
  },
  Ww = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  vp = (e) => e === ai || e === I,
  xp = (e, t) => parseFloat(e.split(", ")[t]),
  wp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return xp(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? xp(o[1], e) : 0;
      }
    },
  Hw = new Set(["x", "y", "z"]),
  Kw = ko.filter((e) => !Hw.has(e));
function Gw(e) {
  const t = [];
  return (
    Kw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const qr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: wp(4, 13),
  y: wp(5, 14),
};
qr.translateX = qr.x;
qr.translateY = qr.y;
const Fg = (e) => (t) => t.test(e),
  Yw = { test: (e) => e === "auto", parse: (e) => e },
  Bg = [ai, I, Ft, fn, Uw, zw, Yw],
  Sp = (e) => Bg.find(Fg(e)),
  qn = new Set();
let Wu = !1,
  Hu = !1;
function zg() {
  if (Hu) {
    const e = Array.from(qn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Gw(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Hu = !1), (Wu = !1), qn.forEach((e) => e.complete()), qn.clear();
}
function Ug() {
  qn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Hu = !0);
  });
}
function Qw() {
  Ug(), zg();
}
class Sf {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (qn.add(this), Wu || ((Wu = !0), Y.read(Ug), Y.resolveKeyframes(zg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      qn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), qn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const $i = (e) => Math.round(e * 1e5) / 1e5,
  Cf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Xw(e) {
  return e == null;
}
const Zw =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  kf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Zw.test(n) && n.startsWith(e)) ||
      (t && !Xw(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Wg = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(Cf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  qw = (e) => Mn(0, 255, e),
  Rl = { ...ai, transform: (e) => Math.round(qw(e)) },
  Qn = {
    test: kf("rgb", "red"),
    parse: Wg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Rl.transform(e) +
      ", " +
      Rl.transform(t) +
      ", " +
      Rl.transform(n) +
      ", " +
      $i(uo.transform(r)) +
      ")",
  };
function Jw(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ku = { test: kf("#"), parse: Jw, transform: Qn.transform },
  Nr = {
    test: kf("hsl", "hue"),
    parse: Wg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ft.transform($i(t)) +
      ", " +
      Ft.transform($i(n)) +
      ", " +
      $i(uo.transform(r)) +
      ")",
  },
  De = {
    test: (e) => Qn.test(e) || Ku.test(e) || Nr.test(e),
    parse: (e) =>
      Qn.test(e) ? Qn.parse(e) : Nr.test(e) ? Nr.parse(e) : Ku.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Qn.transform(e)
        : Nr.transform(e),
  },
  eS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function tS(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Cf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(eS)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Hg = "number",
  Kg = "color",
  nS = "var",
  rS = "var(",
  Cp = "${}",
  iS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function co(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      iS,
      (l) => (
        De.test(l)
          ? (r.color.push(o), i.push(Kg), n.push(De.parse(l)))
          : l.startsWith(rS)
          ? (r.var.push(o), i.push(nS), n.push(l))
          : (r.number.push(o), i.push(Hg), n.push(parseFloat(l))),
        ++o,
        Cp
      )
    )
    .split(Cp);
  return { values: n, split: a, indexes: r, types: i };
}
function Gg(e) {
  return co(e).values;
}
function Yg(e) {
  const { split: t, types: n } = co(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Hg
          ? (o += $i(i[s]))
          : a === Kg
          ? (o += De.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const oS = (e) => (typeof e == "number" ? 0 : e);
function sS(e) {
  const t = Gg(e);
  return Yg(e)(t.map(oS));
}
const Ln = {
    test: tS,
    parse: Gg,
    createTransformer: Yg,
    getAnimatableNone: sS,
  },
  aS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function lS(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Cf) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = aS.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const uS = /\b([a-z-]*)\(.*?\)/gu,
  Gu = {
    ...Ln,
    getAnimatableNone: (e) => {
      const t = e.match(uS);
      return t ? t.map(lS).join(" ") : e;
    },
  },
  cS = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    backgroundPositionX: I,
    backgroundPositionY: I,
  },
  fS = {
    rotate: fn,
    rotateX: fn,
    rotateY: fn,
    rotateZ: fn,
    scale: Zo,
    scaleX: Zo,
    scaleY: Zo,
    scaleZ: Zo,
    skew: fn,
    skewX: fn,
    skewY: fn,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: uo,
    originX: yp,
    originY: yp,
    originZ: I,
  },
  kp = { ...ai, transform: Math.round },
  Tf = {
    ...cS,
    ...fS,
    zIndex: kp,
    size: I,
    fillOpacity: uo,
    strokeOpacity: uo,
    numOctaves: kp,
  },
  dS = {
    ...Tf,
    color: De,
    backgroundColor: De,
    outlineColor: De,
    fill: De,
    stroke: De,
    borderColor: De,
    borderTopColor: De,
    borderRightColor: De,
    borderBottomColor: De,
    borderLeftColor: De,
    filter: Gu,
    WebkitFilter: Gu,
  },
  Pf = (e) => dS[e];
function Qg(e, t) {
  let n = Pf(e);
  return (
    n !== Gu && (n = Ln), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const pS = new Set(["auto", "none", "0"]);
function hS(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !pS.has(o) && co(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = Qg(n, i);
}
class Xg extends Sf {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), wf(u))) {
        const c = $g(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Ww.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Sp(i),
      a = Sp(o);
    if (s !== a)
      if (vp(s) && vp(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) _w(t[i]) && r.push(i);
    r.length && hS(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = qr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = qr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ef(e) {
  return typeof e == "function";
}
let ys;
function mS() {
  ys = void 0;
}
const Bt = {
    now: () => (
      ys === void 0 &&
        Bt.set(
          Ee.isProcessing || Mw.useManualTiming
            ? Ee.timestamp
            : performance.now()
        ),
      ys
    ),
    set: (e) => {
      (ys = e), queueMicrotask(mS);
    },
  },
  Tp = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Ln.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function gS(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function yS(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Tp(i, t),
    a = Tp(o, t);
  return !s || !a ? !1 : gS(e) || ((n === "spring" || Ef(n)) && r);
}
const vS = 40;
class Zg {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Bt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > vS
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Qw(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Bt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !yS(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Ta(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function qg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const xS = 5;
function Jg(e, t, n) {
  const r = Math.max(t - xS, 0);
  return qg(n - e(r), t - r);
}
const Al = 0.001,
  wS = 0.01,
  SS = 10,
  CS = 0.05,
  kS = 1;
function TS({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = Mn(CS, kS, s)),
    (e = Mn(wS, SS, qt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            y = Yu(u, s),
            v = Math.exp(-f);
          return Al - (d / y) * v;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            y = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = Yu(Math.pow(u, 2), s);
          return ((-i(u) + Al > 0 ? -1 : 1) * ((d - y) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Al + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = ES(i, o, a);
  if (((e = Zt(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const PS = 12;
function ES(e, t, n) {
  let r = n;
  for (let i = 1; i < PS; i++) r = r - e(r) / t(r);
  return r;
}
function Yu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const bS = ["duration", "bounce"],
  RS = ["stiffness", "damping", "mass"];
function Pp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function AS(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Pp(e, RS) && Pp(e, bS)) {
    const n = TS(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function ey({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = AS({ ...r, velocity: -qt(r.velocity || 0) }),
    y = f || 0,
    v = l / (2 * Math.sqrt(a * u)),
    x = o - i,
    S = qt(Math.sqrt(a / u)),
    h = Math.abs(x) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let p;
  if (v < 1) {
    const m = Yu(S, v);
    p = (w) => {
      const k = Math.exp(-v * S * w);
      return (
        o - k * (((y + v * S * x) / m) * Math.sin(m * w) + x * Math.cos(m * w))
      );
    };
  } else if (v === 1) p = (m) => o - Math.exp(-S * m) * (x + (y + S * x) * m);
  else {
    const m = S * Math.sqrt(v * v - 1);
    p = (w) => {
      const k = Math.exp(-v * S * w),
        E = Math.min(m * w, 300);
      return (
        o - (k * ((y + v * S * x) * Math.sinh(E) + m * x * Math.cosh(E))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (m) => {
      const w = p(m);
      if (d) s.done = m >= c;
      else {
        let k = 0;
        v < 1 && (k = m === 0 ? Zt(y) : Jg(p, m, w));
        const E = Math.abs(k) <= n,
          T = Math.abs(o - w) <= t;
        s.done = E && T;
      }
      return (s.value = s.done ? o : w), s;
    },
  };
}
function Ep({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    y = (b) => (a !== void 0 && b < a) || (l !== void 0 && b > l),
    v = (b) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - b) < Math.abs(l - b)
        ? a
        : l;
  let x = n * t;
  const S = f + x,
    h = s === void 0 ? S : s(S);
  h !== S && (x = h - f);
  const p = (b) => -x * Math.exp(-b / r),
    m = (b) => h + p(b),
    w = (b) => {
      const N = p(b),
        g = m(b);
      (d.done = Math.abs(N) <= u), (d.value = d.done ? h : g);
    };
  let k, E;
  const T = (b) => {
    y(d.value) &&
      ((k = b),
      (E = ey({
        keyframes: [d.value, v(d.value)],
        velocity: Jg(m, b, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (b) => {
        let N = !1;
        return (
          !E && k === void 0 && ((N = !0), w(b), T(b)),
          k !== void 0 && b >= k ? E.next(b - k) : (!N && w(b), d)
        );
      },
    }
  );
}
const MS = To(0.42, 0, 1, 1),
  LS = To(0, 0, 0.58, 1),
  ty = To(0.42, 0, 0.58, 1),
  NS = (e) => Array.isArray(e) && typeof e[0] != "number",
  bf = (e) => Array.isArray(e) && typeof e[0] == "number",
  bp = {
    linear: Ie,
    easeIn: MS,
    easeInOut: ty,
    easeOut: LS,
    circIn: xf,
    circInOut: jg,
    circOut: Dg,
    backIn: vf,
    backInOut: Lg,
    backOut: Mg,
    anticipate: Ng,
  },
  Rp = (e) => {
    if (bf(e)) {
      Uu(e.length === 4);
      const [t, n, r, i] = e;
      return To(t, n, r, i);
    } else if (typeof e == "string") return Uu(bp[e] !== void 0), bp[e];
    return e;
  },
  DS = (e, t) => (n) => t(e(n)),
  Jt = (...e) => e.reduce(DS),
  Jr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  se = (e, t, n) => e + (t - e) * n;
function Ml(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function jS({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Ml(l, a, e + 1 / 3)), (o = Ml(l, a, e)), (s = Ml(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Qs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ll = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  OS = [Ku, Qn, Nr],
  IS = (e) => OS.find((t) => t.test(e));
function Ap(e) {
  const t = IS(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Nr && (n = jS(n)), n;
}
const Mp = (e, t) => {
    const n = Ap(e),
      r = Ap(t);
    if (!n || !r) return Qs(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = Ll(n.red, r.red, o)),
      (i.green = Ll(n.green, r.green, o)),
      (i.blue = Ll(n.blue, r.blue, o)),
      (i.alpha = se(n.alpha, r.alpha, o)),
      Qn.transform(i)
    );
  },
  Qu = new Set(["none", "hidden"]);
function _S(e, t) {
  return Qu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function VS(e, t) {
  return (n) => se(e, t, n);
}
function Rf(e) {
  return typeof e == "number"
    ? VS
    : typeof e == "string"
    ? wf(e)
      ? Qs
      : De.test(e)
      ? Mp
      : BS
    : Array.isArray(e)
    ? ny
    : typeof e == "object"
    ? De.test(e)
      ? Mp
      : $S
    : Qs;
}
function ny(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Rf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function $S(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Rf(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function FS(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const BS = (e, t) => {
  const n = Ln.createTransformer(t),
    r = co(e),
    i = co(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Qu.has(e) && !i.values.length) || (Qu.has(t) && !r.values.length)
      ? _S(e, t)
      : Jt(ny(FS(r, i), i.values), n)
    : Qs(e, t);
};
function ry(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? se(e, t, n)
    : Rf(e)(e, t);
}
function zS(e, t, n) {
  const r = [],
    i = n || ry,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ie : t;
      a = Jt(l, a);
    }
    r.push(a);
  }
  return r;
}
function US(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Uu(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = zS(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Jr(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(Mn(e[0], e[o - 1], u)) : l;
}
function WS(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Jr(0, t, r);
    e.push(se(n, 1, i));
  }
}
function HS(e) {
  const t = [0];
  return WS(t, e.length - 1), t;
}
function KS(e, t) {
  return e.map((n) => n * t);
}
function GS(e, t) {
  return e.map(() => t || ty).splice(0, e.length - 1);
}
function Xs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = NS(r) ? r.map(Rp) : Rp(r),
    o = { done: !1, value: t[0] },
    s = KS(n && n.length === t.length ? n : HS(t), e),
    a = US(s, t, { ease: Array.isArray(i) ? i : GS(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const Lp = 2e4;
function YS(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Lp; ) (t += n), (r = e.next(t));
  return t >= Lp ? 1 / 0 : t;
}
const QS = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Y.update(t, !0),
      stop: () => An(t),
      now: () => (Ee.isProcessing ? Ee.timestamp : Bt.now()),
    };
  },
  XS = { decay: Ep, inertia: Ep, tween: Xs, keyframes: Xs, spring: ey },
  ZS = (e) => e / 100;
class Af extends Zg {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || Sf,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(o, a, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = Ef(n) ? n : XS[n] || Xs;
    let l, u;
    a !== Xs &&
      typeof t[0] != "number" &&
      ((l = Jt(ZS, ry(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = YS(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      y = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: b } = this.options;
      return { done: !0, value: b[b.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: y,
      repeatType: v,
      repeatDelay: x,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const h = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? h < 0 : h > c;
    (this.currentTime = Math.max(h, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      w = o;
    if (y) {
      const b = Math.min(this.currentTime, c) / f;
      let N = Math.floor(b),
        g = b % 1;
      !g && b >= 1 && (g = 1),
        g === 1 && N--,
        (N = Math.min(N, y + 1)),
        !!(N % 2) &&
          (v === "reverse"
            ? ((g = 1 - g), x && (g -= x / f))
            : v === "mirror" && (w = s)),
        (m = Mn(0, 1, g) * f);
    }
    const k = p ? { done: !1, value: l[0] } : w.next(m);
    a && (k.value = a(k.value));
    let { done: E } = k;
    !p &&
      u !== null &&
      (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      T && i !== void 0 && (k.value = Ta(l, this.options, i)),
      S && S(k.value),
      T && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? qt(t.calculatedDuration) : 0;
  }
  get time() {
    return qt(this.currentTime);
  }
  set time(t) {
    (t = Zt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = qt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = QS, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const iy = new Set(["opacity", "clipPath", "filter", "transform"]),
  qS = 10,
  JS = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / qS), 2);
    for (let i = 0; i < r; i++) n += e(Jr(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function Mf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const e2 = { linearEasing: void 0 };
function t2(e, t) {
  const n = Mf(e);
  return () => {
    var r;
    return (r = e2[t]) !== null && r !== void 0 ? r : n();
  };
}
const Zs = t2(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function oy(e) {
  return !!(
    (typeof e == "function" && Zs()) ||
    !e ||
    (typeof e == "string" && (e in Xu || Zs())) ||
    bf(e) ||
    (Array.isArray(e) && e.every(oy))
  );
}
const Ti = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Xu = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ti([0, 0.65, 0.55, 1]),
    circOut: Ti([0.55, 0, 1, 0.45]),
    backIn: Ti([0.31, 0.01, 0.66, -0.59]),
    backOut: Ti([0.33, 1.53, 0.69, 0.99]),
  };
function sy(e, t) {
  if (e)
    return typeof e == "function" && Zs()
      ? JS(e, t)
      : bf(e)
      ? Ti(e)
      : Array.isArray(e)
      ? e.map((n) => sy(n, t) || Xu.easeOut)
      : Xu[e];
}
function n2(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = sy(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Np(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const r2 = Mf(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  qs = 10,
  i2 = 2e4;
function o2(e) {
  return Ef(e.type) || e.type === "spring" || !oy(e.ease);
}
function s2(e, t) {
  const n = new Af({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < i2; ) (r = n.sample(o)), i.push(r.value), (o += qs);
  return { times: void 0, keyframes: i, duration: o - qs, ease: "linear" };
}
const ay = { anticipate: Ng, backInOut: Lg, circInOut: jg };
function a2(e) {
  return e in ay;
}
class Dp extends Zg {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new Xg(
      o,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && Zs() && a2(s) && (s = ay[s]), o2(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: y,
          motionValue: v,
          element: x,
          ...S
        } = this.options,
        h = s2(t, S);
      (t = h.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = h.duration),
        (o = h.times),
        (s = h.ease),
        (a = "keyframes");
    }
    const f = n2(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Np(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Ta(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return qt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return qt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Zt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ie;
      const { animation: r } = n;
      Np(r, t);
    }
    return Ie;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...y
        } = this.options,
        v = new Af({
          ...y,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        x = Zt(this.time);
      u.setWithVelocity(v.sample(x - qs).value, v.sample(x).value, qs);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    return (
      r2() &&
      r &&
      iy.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const l2 = Mf(() => window.ScrollTimeline !== void 0);
class u2 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      l2() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function c2({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Lf =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      const a = yf(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Zt(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      c2(a) || (c = { ...c, ...Aw(e, c) }),
        c.duration && (c.duration = Zt(c.duration)),
        c.repeatDelay && (c.repeatDelay = Zt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !o && t.get() !== void 0)
      ) {
        const d = Ta(c.keyframes, a);
        if (d !== void 0)
          return (
            Y.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new u2([])
          );
      }
      return !o && Dp.supports(c) ? new Dp(c) : new Af(c);
    },
  f2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  d2 = (e) => (zu(e) ? e[e.length - 1] || 0 : e);
function Nf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Df(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class jf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Nf(this.subscriptions, t), () => Df(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const jp = 30,
  p2 = (e) => !isNaN(parseFloat(e));
class h2 {
  constructor(t, n = {}) {
    (this.version = "11.11.9"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = Bt.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Bt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = p2(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new jf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Y.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Bt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > jp
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, jp);
    return qg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function fo(e, t) {
  return new h2(e, t);
}
function m2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fo(n));
}
function g2(e, t) {
  const n = ka(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = d2(o[s]);
    m2(e, s, a);
  }
}
const Pa = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  y2 = "framerAppearId",
  ly = "data-" + Pa(y2);
function uy(e) {
  return e.props[ly];
}
const Oe = (e) => !!(e && e.getVelocity);
function v2(e) {
  return !!(Oe(e) && e.add);
}
function Zu(e, t) {
  if (!e.applyWillChange) return;
  const n = e.getValue("willChange");
  if (v2(n)) return n.add(t);
}
function x2({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function cy(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      y = l[f];
    if (y === void 0 || (c && x2(c, f))) continue;
    const v = { delay: n, ...yf(s || {}, f) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const h = uy(e);
      if (h) {
        const p = window.MotionHandoffAnimation(h, f, Y);
        p !== null && ((v.startTime = p), (x = !0));
      }
    }
    Zu(e, f),
      d.start(
        Lf(f, d, y, e.shouldReduceMotion && In.has(f) ? { type: !1 } : v, e, x)
      );
    const S = d.animation;
    S && u.push(S);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        Y.update(() => {
          a && g2(e, a);
        });
      }),
    u
  );
}
function qu(e, t, n = {}) {
  var r;
  const i = ka(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(cy(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return w2(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function w2(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(S2)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            qu(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function S2(e, t) {
  return e.sortNodePosition(t);
}
function C2(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => qu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = qu(e, t, n);
  else {
    const i = typeof t == "function" ? ka(e, t, n.custom) : t;
    r = Promise.all(cy(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const k2 = gf.length;
function fy(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? fy(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < k2; n++) {
    const r = gf[n],
      i = e.props[r];
    (lo(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const T2 = [...mf].reverse(),
  P2 = mf.length;
function E2(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => C2(e, n, r)));
}
function b2(e) {
  let t = E2(e),
    n = Op(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = ka(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: y, transitionEnd: v, ...x } = d;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = fy(e.parent) || {},
      f = [],
      d = new Set();
    let y = {},
      v = 1 / 0;
    for (let S = 0; S < P2; S++) {
      const h = T2[S],
        p = n[h],
        m = u[h] !== void 0 ? u[h] : c[h],
        w = lo(m),
        k = h === l ? p.isActive : null;
      k === !1 && (v = S);
      let E = m === c[h] && m !== u[h] && w;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && k === null) ||
          (!m && !p.prevProp) ||
          ao(m) ||
          typeof m == "boolean")
      )
        continue;
      const T = R2(p.prevProp, m);
      let b = T || (h === l && p.isActive && !E && w) || (S > v && w),
        N = !1;
      const g = Array.isArray(m) ? m : [m];
      let M = g.reduce(i(h), {});
      k === !1 && (M = {});
      const { prevResolvedValues: j = {} } = p,
        _ = { ...j, ...M },
        F = (U) => {
          (b = !0),
            d.has(U) && ((N = !0), d.delete(U)),
            (p.needsAnimating[U] = !0);
          const A = e.getValue(U);
          A && (A.liveStyle = !1);
        };
      for (const U in _) {
        const A = M[U],
          O = j[U];
        if (y.hasOwnProperty(U)) continue;
        let $ = !1;
        zu(A) && zu(O) ? ($ = !Pg(A, O)) : ($ = A !== O),
          $
            ? A != null
              ? F(U)
              : d.add(U)
            : A !== void 0 && d.has(U)
            ? F(U)
            : (p.protectedKeys[U] = !0);
      }
      (p.prevProp = m),
        (p.prevResolvedValues = M),
        p.isActive && (y = { ...y, ...M }),
        r && e.blockInitialAnimation && (b = !1),
        b &&
          (!(E && T) || N) &&
          f.push(...g.map((U) => ({ animation: U, options: { type: h } })));
    }
    if (d.size) {
      const S = {};
      d.forEach((h) => {
        const p = e.getBaseTarget(h),
          m = e.getValue(h);
        m && (m.liveStyle = !0), (S[h] = p ?? null);
      }),
        f.push({ animation: S });
    }
    let x = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var y;
        return (y = d.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Op()), (r = !0);
    },
  };
}
function R2(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Pg(t, e) : !1;
}
function $n(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Op() {
  return {
    animate: $n(!0),
    whileInView: $n(),
    whileHover: $n(),
    whileTap: $n(),
    whileDrag: $n(),
    whileFocus: $n(),
    exit: $n(),
  };
}
class _n {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class A2 extends _n {
  constructor(t) {
    super(t), t.animationState || (t.animationState = b2(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ao(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let M2 = 0;
class L2 extends _n {
  constructor() {
    super(...arguments), (this.id = M2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const N2 = { animation: { Feature: A2 }, exit: { Feature: L2 } },
  dy = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Ea(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const D2 = (e) => (t) => dy(t) && e(t, Ea(t));
function Qt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function en(e, t, n, r) {
  return Qt(e, t, D2(n), r);
}
const Ip = (e, t) => Math.abs(e - t);
function j2(e, t) {
  const n = Ip(e.x, t.x),
    r = Ip(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class py {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Dl(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          y = j2(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !y) return;
        const { point: v } = f,
          { timestamp: x } = Ee;
        this.history.push({ ...v, timestamp: x });
        const { onStart: S, onMove: h } = this.handlers;
        d ||
          (S && S(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Nl(d, this.transformPagePoint)),
          Y.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = Dl(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Nl(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(f, S), v && v(f, S);
      }),
      !dy(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Ea(t),
      a = Nl(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Ee;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Dl(a, this.history)),
      (this.removeListeners = Jt(
        en(this.contextWindow, "pointermove", this.handlePointerMove),
        en(this.contextWindow, "pointerup", this.handlePointerUp),
        en(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), An(this.updatePoint);
  }
}
function Nl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function _p(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Dl({ point: e }, t) {
  return {
    point: e,
    delta: _p(e, hy(t)),
    offset: _p(e, O2(t)),
    velocity: I2(t, 0.1),
  };
}
function O2(e) {
  return e[0];
}
function hy(e) {
  return e[e.length - 1];
}
function I2(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = hy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Zt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = qt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function my(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Vp = my("dragHorizontal"),
  $p = my("dragVertical");
function gy(e) {
  let t = !1;
  if (e === "y") t = $p();
  else if (e === "x") t = Vp();
  else {
    const n = Vp(),
      r = $p();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function yy() {
  const e = gy(!0);
  return e ? (e(), !1) : !0;
}
function Dr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const vy = 1e-4,
  _2 = 1 - vy,
  V2 = 1 + vy,
  xy = 0.01,
  $2 = 0 - xy,
  F2 = 0 + xy;
function ot(e) {
  return e.max - e.min;
}
function B2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Fp(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = se(t.min, t.max, e.origin)),
    (e.scale = ot(n) / ot(t)),
    (e.translate = se(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= _2 && e.scale <= V2) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= $2 && e.translate <= F2) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Fi(e, t, n, r) {
  Fp(e.x, t.x, n.x, r ? r.originX : void 0),
    Fp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Bp(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + ot(t));
}
function z2(e, t, n) {
  Bp(e.x, t.x, n.x), Bp(e.y, t.y, n.y);
}
function zp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + ot(t));
}
function Bi(e, t, n) {
  zp(e.x, t.x, n.x), zp(e.y, t.y, n.y);
}
function U2(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Up(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function W2(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Up(e.x, n, i), y: Up(e.y, t, r) };
}
function Wp(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function H2(e, t) {
  return { x: Wp(e.x, t.x), y: Wp(e.y, t.y) };
}
function K2(e, t) {
  let n = 0.5;
  const r = ot(e),
    i = ot(t);
  return (
    i > r
      ? (n = Jr(t.min, t.max - r, e.min))
      : r > i && (n = Jr(e.min, e.max - i, t.min)),
    Mn(0, 1, n)
  );
}
function G2(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ju = 0.35;
function Y2(e = Ju) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ju),
    { x: Hp(e, "left", "right"), y: Hp(e, "top", "bottom") }
  );
}
function Hp(e, t, n) {
  return { min: Kp(e, t), max: Kp(e, n) };
}
function Kp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Gp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  jr = () => ({ x: Gp(), y: Gp() }),
  Yp = () => ({ min: 0, max: 0 }),
  he = () => ({ x: Yp(), y: Yp() });
function ut(e) {
  return [e("x"), e("y")];
}
function wy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Q2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function X2(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function jl(e) {
  return e === void 0 || e === 1;
}
function ec({ scale: e, scaleX: t, scaleY: n }) {
  return !jl(e) || !jl(t) || !jl(n);
}
function zn(e) {
  return (
    ec(e) ||
    Sy(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Sy(e) {
  return Qp(e.x) || Qp(e.y);
}
function Qp(e) {
  return e && e !== "0%";
}
function Js(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Xp(e, t, n, r, i) {
  return i !== void 0 && (e = Js(e, i, r)), Js(e, n, r) + t;
}
function tc(e, t = 0, n = 1, r, i) {
  (e.min = Xp(e.min, t, n, r, i)), (e.max = Xp(e.max, t, n, r, i));
}
function Cy(e, { x: t, y: n }) {
  tc(e.x, t.translate, t.scale, t.originPoint),
    tc(e.y, n.translate, n.scale, n.originPoint);
}
const Zp = 0.999999999999,
  qp = 1.0000000000001;
function Z2(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Ir(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Cy(e, s)),
      r && zn(o.latestValues) && Ir(e, o.latestValues));
  }
  t.x < qp && t.x > Zp && (t.x = 1), t.y < qp && t.y > Zp && (t.y = 1);
}
function Or(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Jp(e, t, n, r, i = 0.5) {
  const o = se(e.min, e.max, i);
  tc(e, t, n, o, r);
}
function Ir(e, t) {
  Jp(e.x, t.x, t.scaleX, t.scale, t.originX),
    Jp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ky(e, t) {
  return wy(X2(e.getBoundingClientRect(), t));
}
function q2(e, t, n) {
  const r = ky(e, n),
    { scroll: i } = t;
  return i && (Or(r.x, i.offset.x), Or(r.y, i.offset.y)), r;
}
const Ty = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  J2 = new WeakMap();
class eC {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = he()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ea(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          d &&
          !y &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = gy(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ut((S) => {
            let h = this.getAxisMotionValue(S).get() || 0;
            if (Ft.test(h)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const m = p.layout.layoutBox[S];
                m && (h = ot(m) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[S] = h;
          }),
          v && Y.postRender(() => v(c, f)),
          Zu(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: S } = f;
        if (y && this.currentDirection === null) {
          (this.currentDirection = tC(S)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, S),
          this.updateAxis("y", f.point, S),
          this.visualElement.render(),
          x && x(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        ut((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new py(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Ty(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && Y.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !qo(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = U2(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Dr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = W2(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = Y2(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ut((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = G2(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Dr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = q2(r, i.root, this.visualElement.getTransformPagePoint());
    let s = H2(i.layout.layoutBox, o);
    if (n) {
      const a = n(Q2(s));
      (this.hasMutatedConstraints = !!a), a && (s = wy(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = ut((c) => {
        if (!qo(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Zu(this.visualElement, t), r.start(Lf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ut((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ut((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ut((n) => {
      const { drag: r } = this.getProps();
      if (!qo(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - se(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Dr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ut((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = K2({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ut((s) => {
        if (!qo(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(se(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    J2.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = en(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Dr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      Y.read(r);
    const s = Qt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ut((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Ju,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function qo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function tC(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class nC extends _n {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ie),
      (this.removeListeners = Ie),
      (this.controls = new eC(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ie);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const eh = (e) => (t, n) => {
  e && Y.postRender(() => e(t, n));
};
class rC extends _n {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ie);
  }
  onPointerDown(t) {
    this.session = new py(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ty(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: eh(t),
      onStart: eh(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && Y.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = en(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Of = P.createContext(null);
function iC() {
  const e = P.useContext(Of);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = P.useId();
  P.useEffect(() => r(i), []);
  const o = P.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const Py = P.createContext({}),
  Ey = P.createContext({}),
  vs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function th(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const yi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const n = th(e, t.target.x),
        r = th(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  oC = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ln.parse(e);
      if (i.length > 5) return r;
      const o = Ln.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = se(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  ea = {};
function sC(e) {
  Object.assign(ea, e);
}
const { schedule: If, cancel: A5 } = Eg(queueMicrotask, !1);
class aC extends P.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    sC(lC),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (vs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              Y.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      If.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function by(e) {
  const [t, n] = iC(),
    r = P.useContext(Py);
  return C.jsx(aC, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: P.useContext(Ey),
    isPresent: t,
    safeToRemove: n,
  });
}
const lC = {
    borderRadius: {
      ...yi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: yi,
    borderTopRightRadius: yi,
    borderBottomLeftRadius: yi,
    borderBottomRightRadius: yi,
    boxShadow: oC,
  },
  Ry = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  uC = Ry.length,
  nh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  rh = (e) => typeof e == "number" || I.test(e);
function cC(e, t, n, r, i, o) {
  i
    ? ((e.opacity = se(0, n.opacity !== void 0 ? n.opacity : 1, fC(r))),
      (e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, dC(r))))
    : o &&
      (e.opacity = se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < uC; s++) {
    const a = `border${Ry[s]}Radius`;
    let l = ih(t, a),
      u = ih(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || rh(l) === rh(u)
        ? ((e[a] = Math.max(se(nh(l), nh(u), r), 0)),
          (Ft.test(u) || Ft.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r));
}
function ih(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const fC = Ay(0, 0.5, Dg),
  dC = Ay(0.5, 0.95, Ie);
function Ay(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Jr(e, t, r)));
}
function oh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function lt(e, t) {
  oh(e.x, t.x), oh(e.y, t.y);
}
function sh(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function ah(e, t, n, r, i) {
  return (
    (e -= t), (e = Js(e, 1 / n, r)), i !== void 0 && (e = Js(e, 1 / i, r)), e
  );
}
function pC(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Ft.test(t) &&
      ((t = parseFloat(t)), (t = se(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = se(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = ah(e.min, t, n, a, i)),
    (e.max = ah(e.max, t, n, a, i));
}
function lh(e, t, [n, r, i], o, s) {
  pC(e, t[n], t[r], t[i], t.scale, o, s);
}
const hC = ["x", "scaleX", "originX"],
  mC = ["y", "scaleY", "originY"];
function uh(e, t, n, r) {
  lh(e.x, t, hC, n ? n.x : void 0, r ? r.x : void 0),
    lh(e.y, t, mC, n ? n.y : void 0, r ? r.y : void 0);
}
function ch(e) {
  return e.translate === 0 && e.scale === 1;
}
function My(e) {
  return ch(e.x) && ch(e.y);
}
function fh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function gC(e, t) {
  return fh(e.x, t.x) && fh(e.y, t.y);
}
function dh(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Ly(e, t) {
  return dh(e.x, t.x) && dh(e.y, t.y);
}
function ph(e) {
  return ot(e.x) / ot(e.y);
}
function hh(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class yC {
  constructor() {
    this.members = [];
  }
  add(t) {
    Nf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Df(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vC(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: y,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const xC = (e, t) => e.depth - t.depth;
class wC {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Nf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Df(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(xC),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function xs(e) {
  const t = Oe(e) ? e.get() : e;
  return f2(t) ? t.toValue() : t;
}
function SC(e, t) {
  const n = Bt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (An(r), e(o - t));
    };
  return Y.read(r, !0), () => An(r);
}
function CC(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function kC(e, t, n) {
  const r = Oe(e) ? e : fo(e);
  return r.start(Lf("", r, t, n)), r.animation;
}
const Un = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Pi = typeof window < "u" && window.MotionDebug !== void 0,
  Ol = ["", "X", "Y", "Z"],
  TC = { visibility: "hidden" },
  mh = 1e3;
let PC = 0;
function Il(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ny(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = uy(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Y, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ny(r);
}
function Dy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = PC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Pi &&
              (Un.totalNodes =
                Un.resolvedTargetDeltas =
                Un.recalculatedProjection =
                  0),
            this.nodes.forEach(RC),
            this.nodes.forEach(DC),
            this.nodes.forEach(jC),
            this.nodes.forEach(AC),
            Pi && window.MotionDebug.record(Un);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new wC());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new jf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = CC(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = SC(d, 250)),
            vs.hasAnimatedSinceResize &&
              ((vs.hasAnimatedSinceResize = !1), this.nodes.forEach(yh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || $C,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: h } =
                  c.getProps(),
                p = !this.targetLayout || !Ly(this.targetLayout, v) || y,
                m = !d && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const w = { ...yf(x, "layout"), onPlay: S, onComplete: h };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || yh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        An(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(OC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Ny(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gh);
        return;
      }
      this.isUpdating || this.nodes.forEach(LC),
        (this.isUpdating = !1),
        this.nodes.forEach(NC),
        this.nodes.forEach(EC),
        this.nodes.forEach(bC),
        this.clearAllSnapshots();
      const a = Bt.now();
      (Ee.delta = Mn(0, 1e3 / 60, a - Ee.timestamp)),
        (Ee.timestamp = a),
        (Ee.isProcessing = !0),
        bl.update.process(Ee),
        bl.preRender.process(Ee),
        bl.render.process(Ee),
        (Ee.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), If.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(MC), this.sharedNodes.forEach(IC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Y.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Y.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = he()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !My(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || zn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        FC(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return he();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(BC)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Or(l.x, c.offset.x), Or(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = he();
      if (
        (lt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && lt(l, s), Or(l.x, f.offset.x), Or(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = he();
      lt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Ir(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          zn(c.latestValues) && Ir(l, c.latestValues);
      }
      return zn(this.latestValues) && Ir(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = he();
      lt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !zn(u.latestValues)) continue;
        ec(u.latestValues) && u.updateSnapshot();
        const c = he(),
          f = u.measurePageBox();
        lt(c, f),
          uh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return zn(this.latestValues) && uh(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Ee.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = he()),
              (this.relativeTargetOrigin = he()),
              Bi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              lt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = he()), (this.targetWithTransforms = he())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                z2(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : lt(this.target, this.layout.layoutBox),
                Cy(this.target, this.targetDelta))
              : lt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = he()),
                (this.relativeTargetOrigin = he()),
                Bi(this.relativeTargetOrigin, this.target, y.target),
                lt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Pi && Un.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ec(this.parent.latestValues) ||
          Sy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ee.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      lt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        y = this.treeScale.y;
      Z2(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = he()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (sh(this.prevProjectionDelta.x, this.projectionDelta.x),
          sh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Fi(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== y ||
          !hh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Pi && Un.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = jr()),
        (this.projectionDelta = jr()),
        (this.projectionDeltaWithTransform = jr());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = jr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = he(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        S = this.getStack(),
        h = !S || S.members.length <= 1,
        p = !!(x && !h && this.options.crossfade === !0 && !this.path.some(VC));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        vh(f.x, s.x, k),
          vh(f.y, s.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Bi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            _C(this.relativeTarget, this.relativeTargetOrigin, d, k),
            m && gC(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = he()),
            lt(m, this.relativeTarget)),
          x &&
            ((this.animationValues = c), cC(c, u, this.latestValues, k, p, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (An(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Y.update(() => {
          (vs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = kC(0, mh, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(mh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          jy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || he();
          const f = ot(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = ot(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        lt(a, l),
          Ir(a, c),
          Fi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new yC()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Il("z", s, u, this.animationValues);
      for (let c = 0; c < Ol.length; c++)
        Il(`rotate${Ol[c]}`, s, u, this.animationValues),
          Il(`skew${Ol[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return TC;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = xs(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = xs(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !zn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = vC(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: y, y: v } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const x in ea) {
        if (d[x] === void 0) continue;
        const { correct: S, applyTo: h } = ea[x],
          p = u.transform === "none" ? d[x] : S(d[x], f);
        if (h) {
          const m = h.length;
          for (let w = 0; w < m; w++) u[h[w]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? xs(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(gh),
        this.root.sharedNodes.clear();
    }
  };
}
function EC(e) {
  e.updateLayout();
}
function bC(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? ut((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            y = ot(d);
          (d.min = r[f].min), (d.max = d.min + y);
        })
      : jy(o, n.layoutBox, r) &&
        ut((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            y = ot(r[f]);
          (d.max = d.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y));
        });
    const a = jr();
    Fi(a, r, n.layoutBox);
    const l = jr();
    s ? Fi(l, e.applyTransform(i, !0), n.measuredBox) : Fi(l, r, n.layoutBox);
    const u = !My(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: y } = f;
        if (d && y) {
          const v = he();
          Bi(v, n.layoutBox, d.layoutBox);
          const x = he();
          Bi(x, r, y.layoutBox),
            Ly(v, x) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function RC(e) {
  Pi && Un.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function AC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function MC(e) {
  e.clearSnapshot();
}
function gh(e) {
  e.clearMeasurements();
}
function LC(e) {
  e.isLayoutDirty = !1;
}
function NC(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function yh(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function DC(e) {
  e.resolveTargetDelta();
}
function jC(e) {
  e.calcProjection();
}
function OC(e) {
  e.resetSkewAndRotation();
}
function IC(e) {
  e.removeLeadSnapshot();
}
function vh(e, t, n) {
  (e.translate = se(t.translate, 0, n)),
    (e.scale = se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function xh(e, t, n, r) {
  (e.min = se(t.min, n.min, r)), (e.max = se(t.max, n.max, r));
}
function _C(e, t, n, r) {
  xh(e.x, t.x, n.x, r), xh(e.y, t.y, n.y, r);
}
function VC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const $C = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  wh = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Sh = wh("applewebkit/") && !wh("chrome/") ? Math.round : Ie;
function Ch(e) {
  (e.min = Sh(e.min)), (e.max = Sh(e.max));
}
function FC(e) {
  Ch(e.x), Ch(e.y);
}
function jy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !B2(ph(t), ph(n), 0.2))
  );
}
function BC(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const zC = Dy({
    attachResizeListener: (e, t) => Qt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  _l = { current: void 0 },
  Oy = Dy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!_l.current) {
        const e = new zC({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (_l.current = e);
      }
      return _l.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  UC = {
    pan: { Feature: rC },
    drag: { Feature: nC, ProjectionNode: Oy, MeasureLayout: by },
  };
function kh(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || yy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && Y.postRender(() => l(o, s));
    };
  return en(e.current, n, i, { passive: !e.getProps()[r] });
}
class WC extends _n {
  mount() {
    this.unmount = Jt(kh(this.node, !0), kh(this.node, !1));
  }
  unmount() {}
}
class HC extends _n {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Jt(
      Qt(this.node.current, "focus", () => this.onFocus()),
      Qt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Iy = (e, t) => (t ? (e === t ? !0 : Iy(e, t.parentElement)) : !1);
function Vl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ea(n));
}
class KC extends _n {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ie),
      (this.removeEndListeners = Ie),
      (this.removeAccessibleListeners = Ie),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = en(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !Iy(this.node.current, a.target) ? c : u;
              d && Y.update(() => d(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = en(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Jt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Vl("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Y.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Qt(this.node.current, "keyup", s)),
              Vl("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Qt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Vl("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Qt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Jt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Y.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !yy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Y.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = en(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Qt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Jt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const nc = new WeakMap(),
  $l = new WeakMap(),
  GC = (e) => {
    const t = nc.get(e.target);
    t && t(e);
  },
  YC = (e) => {
    e.forEach(GC);
  };
function QC({ root: e, ...t }) {
  const n = e || document;
  $l.has(n) || $l.set(n, {});
  const r = $l.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(YC, { root: e, ...t })), r[i];
}
function XC(e, t, n) {
  const r = QC(t);
  return (
    nc.set(e, n),
    r.observe(e),
    () => {
      nc.delete(e), r.unobserve(e);
    }
  );
}
const ZC = { some: 0, all: 1 };
class qC extends _n {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : ZC[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return XC(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(JC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function JC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const ek = {
    inView: { Feature: qC },
    tap: { Feature: KC },
    focus: { Feature: HC },
    hover: { Feature: WC },
  },
  tk = { layout: { ProjectionNode: Oy, MeasureLayout: by } },
  _y = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ba = P.createContext({}),
  _f = typeof window < "u",
  nk = _f ? P.useLayoutEffect : P.useEffect,
  Vy = P.createContext({ strict: !1 });
function rk(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = P.useContext(ba),
    l = P.useContext(Vy),
    u = P.useContext(Of),
    c = P.useContext(_y).reducedMotion,
    f = P.useRef();
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    y = P.useContext(Ey);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    ik(f.current, n, i, y),
    P.useInsertionEffect(() => {
      d && d.update(n, u);
    });
  const v = n[ly],
    x = P.useRef(
      !!v &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, v)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, v))
    );
  return (
    nk(() => {
      d &&
        ((window.MotionIsMounted = !0),
        d.updateFeatures(),
        If.render(d.render),
        x.current && d.animationState && d.animationState.animateChanges());
    }),
    P.useEffect(() => {
      d &&
        (!x.current && d.animationState && d.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var S;
            (S = window.MotionHandoffMarkAsComplete) === null ||
              S === void 0 ||
              S.call(window, v);
          }),
          (x.current = !1)));
    }),
    d
  );
}
function ik(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : $y(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Dr(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function $y(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : $y(e.parent);
}
function ok(e, t, n) {
  return P.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Dr(n) && (n.current = r));
    },
    [t]
  );
}
function Ra(e) {
  return ao(e.animate) || gf.some((t) => lo(e[t]));
}
function Fy(e) {
  return !!(Ra(e) || e.variants);
}
function sk(e, t) {
  if (Ra(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || lo(n) ? n : void 0,
      animate: lo(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function ak(e) {
  const { initial: t, animate: n } = sk(e, P.useContext(ba));
  return P.useMemo(() => ({ initial: t, animate: n }), [Th(t), Th(n)]);
}
function Th(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ph = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ei = {};
for (const e in Ph) ei[e] = { isEnabled: (t) => Ph[e].some((n) => !!t[n]) };
function lk(e) {
  for (const t in e) ei[t] = { ...ei[t], ...e[t] };
}
const uk = Symbol.for("motionComponentSymbol");
function ck({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && lk(e);
  function o(a, l) {
    let u;
    const c = { ...P.useContext(_y), ...a, layoutId: fk(a) },
      { isStatic: f } = c,
      d = ak(a),
      y = r(a, f);
    if (!f && _f) {
      dk();
      const v = pk(c);
      (u = v.MeasureLayout),
        (d.visualElement = rk(i, y, c, t, v.ProjectionNode));
    }
    return C.jsxs(ba.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? C.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, a, ok(y, d.visualElement, l), y, f, d.visualElement),
      ],
    });
  }
  const s = P.forwardRef(o);
  return (s[uk] = i), s;
}
function fk({ layoutId: e }) {
  const t = P.useContext(Py).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function dk(e, t) {
  P.useContext(Vy).strict;
}
function pk(e) {
  const { drag: t, layout: n } = ei;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const hk = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Vf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(hk.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function By(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const zy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Uy(e, t, n, r) {
  By(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(zy.has(i) ? i : Pa(i), t.attrs[i]);
}
function Wy(e, { layout: t, layoutId: n }) {
  return (
    In.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ea[e] || e === "opacity"))
  );
}
function $f(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (Oe(i[s]) ||
      (t.style && Oe(t.style[s])) ||
      Wy(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
  );
}
function Hy(e, t, n) {
  const r = $f(e, t, n);
  for (const i in e)
    if (Oe(e[i]) || Oe(t[i])) {
      const o =
        ko.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function mk(e) {
  const t = P.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function gk(e) {
  if (In.has(e)) return "transform";
  if (iy.has(e)) return Pa(e);
}
function yk(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  o,
  s,
  a
) {
  const l = { latestValues: vk(i, o, s, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(i, u, l)), l;
}
const Ky = (e) => (t, n) => {
  const r = P.useContext(ba),
    i = P.useContext(Of),
    o = () => yk(e, t, r, i, n);
  return n ? o() : mk(o);
};
function Eh(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const o = hf(e, r[i]);
    if (o) {
      const { transitionEnd: s, transition: a, ...l } = o;
      n(l, s);
    }
  }
}
function vk(e, t, n, r, i) {
  var o;
  const s = {},
    a = new Set(),
    l =
      r &&
      ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) ===
        void 0,
    u = i(e, {});
  for (const S in u) s[S] = xs(u[S]);
  let { initial: c, animate: f } = e;
  const d = Ra(e),
    y = Fy(e);
  t &&
    y &&
    !d &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), f === void 0 && (f = t.animate));
  let v = n ? n.initial === !1 : !1;
  v = v || c === !1;
  const x = v ? f : c;
  return (
    x &&
      typeof x != "boolean" &&
      !ao(x) &&
      Eh(e, x, (S, h) => {
        for (const p in S) {
          let m = S[p];
          if (Array.isArray(m)) {
            const w = v ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (s[p] = m);
        }
        for (const p in h) s[p] = h[p];
      }),
    l &&
      (f &&
        c !== !1 &&
        !ao(f) &&
        Eh(e, f, (S) => {
          for (const h in S) {
            const p = gk(h);
            p && a.add(p);
          }
        }),
      a.size && (s.willChange = Array.from(a).join(","))),
    s
  );
}
const Ff = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Gy = () => ({ ...Ff(), attrs: {} }),
  Yy = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  xk = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  wk = ko.length;
function Sk(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < wk; o++) {
    const s = ko[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Yy(a, Tf[s]);
      if (!l) {
        i = !1;
        const c = xk[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Bf(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (In.has(l)) {
      s = !0;
      continue;
    } else if (Vg(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Yy(u, Tf[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = Sk(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function bh(e, t, n) {
  return typeof e == "string" ? e : I.transform(t + n * e);
}
function Ck(e, t, n) {
  const r = bh(t, e.x, e.width),
    i = bh(n, e.y, e.height);
  return `${r} ${i}`;
}
const kk = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Tk = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Pk(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? kk : Tk;
  e[o.offset] = I.transform(-r);
  const s = I.transform(t),
    a = I.transform(n);
  e[o.array] = `${s} ${a}`;
}
function zf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f
) {
  if ((Bf(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: y, dimensions: v } = e;
  d.transform && (v && (y.transform = d.transform), delete d.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = Ck(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && Pk(d, s, a, l, !1);
}
const Uf = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  Ek = {
    useVisualState: Ky({
      scrapeMotionValuesFromProps: Hy,
      createRenderState: Gy,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Y.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Y.render(() => {
            zf(n, r, Uf(t.tagName), e.transformTemplate), Uy(t, n);
          });
      },
    }),
  },
  bk = {
    useVisualState: Ky({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: $f,
      createRenderState: Ff,
    }),
  };
function Qy(e, t, n) {
  for (const r in t) !Oe(t[r]) && !Wy(r, n) && (e[r] = t[r]);
}
function Rk({ transformTemplate: e }, t) {
  return P.useMemo(() => {
    const n = Ff();
    return Bf(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Ak(e, t) {
  const n = e.style || {},
    r = {};
  return Qy(r, n, e), Object.assign(r, Rk(e, t)), r;
}
function Mk(e, t) {
  const n = {},
    r = Ak(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const Lk = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ta(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Lk.has(e)
  );
}
let Xy = (e) => !ta(e);
function Nk(e) {
  e && (Xy = (t) => (t.startsWith("on") ? !ta(t) : e(t)));
}
try {
  Nk(require("@emotion/is-prop-valid").default);
} catch {}
function Dk(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Xy(i) ||
        (n === !0 && ta(i)) ||
        (!t && !ta(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function jk(e, t, n, r) {
  const i = P.useMemo(() => {
    const o = Gy();
    return (
      zf(o, t, Uf(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Qy(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Ok(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (Vf(n) ? jk : Mk)(r, o, s, n),
      u = Dk(r, typeof n == "string", e),
      c = n !== P.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = P.useMemo(() => (Oe(f) ? f.get() : f), [f]);
    return P.createElement(n, { ...c, children: d });
  };
}
function Ik(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Vf(r) ? Ek : bk),
      preloadedFeatures: e,
      useRender: Ok(i),
      createVisualElement: t,
      Component: r,
    };
    return ck(s);
  };
}
const rc = { current: null },
  Zy = { current: !1 };
function _k() {
  if (((Zy.current = !0), !!_f))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (rc.current = e.matches);
      e.addListener(t), t();
    } else rc.current = !1;
}
function Vk(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (Oe(i)) e.addValue(r, i);
    else if (Oe(o)) e.addValue(r, fo(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, fo(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Rh = new WeakMap(),
  $k = [...Bg, De, Ln],
  Fk = (e) => $k.find(Fg(e)),
  Ah = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class Bk {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Sf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = Bt.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), Y.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Ra(n)),
      (this.isVariantNode = Fy(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const d in f) {
      const y = f[d];
      l[d] !== void 0 && Oe(y) && y.set(l[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Rh.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Zy.current || _k(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : rc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Rh.delete(this.current),
      this.projection && this.projection.unmount(),
      An(this.notifyUpdate),
      An(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = In.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && Y.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in ei) {
      const n = ei[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : he();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Ah.length; r++) {
      const i = Ah[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = Vk(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = fo(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Ig(i) || Og(i))
          ? (i = parseFloat(i))
          : !Fk(i) && Ln.test(n) && (i = Qg(t, n)),
        this.setBaseTarget(t, Oe(i) ? i.get() : i)),
      Oe(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = hf(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Oe(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new jf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class qy extends Bk {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Xg);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function zk(e) {
  return window.getComputedStyle(e);
}
class Uk extends qy {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = By);
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const r = Pf(n);
      return (r && r.default) || 0;
    } else {
      const r = zk(t),
        i = (Vg(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ky(t, n);
  }
  build(t, n, r) {
    Bf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return $f(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Oe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class Wk extends qy {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = he);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const r = Pf(n);
      return (r && r.default) || 0;
    }
    return (n = zy.has(n) ? n : Pa(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Hy(t, n, r);
  }
  build(t, n, r) {
    zf(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Uy(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Uf(t.tagName)), super.mount(t);
  }
}
const Hk = (e, t) =>
    Vf(e) ? new Wk(t) : new Uk(t, { allowProjection: e !== P.Fragment }),
  Kk = Ik({ ...N2, ...ek, ...UC, ...tk }, Hk),
  tn = Tw(Kk);
var ws = {},
  Jy;
Object.defineProperty(ws, "__esModule", { value: !0 });
var Ei = C,
  Nt = P,
  Ct = function () {
    return (
      (Ct =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      Ct.apply(this, arguments)
    );
  };
function Gk(e, t) {
  var n, r;
  switch (t.type) {
    case "TYPE":
      return Ct(Ct({}, e), {
        speed: t.speed,
        text:
          (n = t.payload) === null || n === void 0
            ? void 0
            : n.substring(0, e.text.length + 1),
      });
    case "DELAY":
      return Ct(Ct({}, e), { speed: t.payload });
    case "DELETE":
      return Ct(Ct({}, e), {
        speed: t.speed,
        text:
          (r = t.payload) === null || r === void 0
            ? void 0
            : r.substring(0, e.text.length - 1),
      });
    case "COUNT":
      return Ct(Ct({}, e), { count: e.count + 1 });
    default:
      return e;
  }
}
var Mh = function (e) {
    var t = e.words,
      n = t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
      r = e.loop,
      i = r === void 0 ? 1 : r,
      o = e.typeSpeed,
      s = o === void 0 ? 80 : o,
      a = e.deleteSpeed,
      l = a === void 0 ? 50 : a,
      u = e.delaySpeed,
      c = u === void 0 ? 1500 : u,
      f = e.onLoopDone,
      d = e.onType,
      y = e.onDelete,
      v = e.onDelay,
      x = Nt.useReducer(Gk, { speed: s, text: "", count: 0 }),
      S = x[0],
      h = S.speed,
      p = S.text,
      m = S.count,
      w = x[1],
      k = Nt.useRef(0),
      E = Nt.useRef(!1),
      T = Nt.useRef(!1),
      b = Nt.useRef(!1),
      N = Nt.useRef(!1),
      g = Nt.useCallback(
        function () {
          var M = m % n.length,
            j = n[M];
          T.current
            ? (w({ type: "DELETE", payload: j, speed: l }),
              p === "" && ((T.current = !1), w({ type: "COUNT" })))
            : (w({ type: "TYPE", payload: j, speed: s }),
              (b.current = !0),
              p === j &&
                (w({ type: "DELAY", payload: c }),
                (b.current = !1),
                (N.current = !0),
                setTimeout(function () {
                  (N.current = !1), (T.current = !0);
                }, c),
                i > 0 &&
                  ((k.current += 1),
                  k.current / n.length === i &&
                    ((N.current = !1), (E.current = !0))))),
            b.current && d && d(k.current),
            T.current && y && y(),
            N.current && v && v();
        },
        [m, c, l, i, s, n, p, d, y, v]
      );
    return (
      Nt.useEffect(
        function () {
          var M = setTimeout(g, h);
          return (
            E.current && clearTimeout(M),
            function () {
              return clearTimeout(M);
            }
          );
        },
        [g, h]
      ),
      Nt.useEffect(
        function () {
          f && E.current && f();
        },
        [f]
      ),
      [
        p,
        {
          isType: b.current,
          isDelay: N.current,
          isDelete: T.current,
          isDone: E.current,
        },
      ]
    );
  },
  Yk = "styles-module_blinkingCursor__yugAC",
  Qk = "styles-module_blinking__9VXRT";
(function (e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (typeof document < "u") {
    var r = document.head || document.getElementsByTagName("head")[0],
      i = document.createElement("style");
    (i.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(i, r.firstChild)
        : r.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e));
  }
})(
  ".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}"
);
var Lh = Nt.memo(function (e) {
  var t = e.cursorBlinking,
    n = t === void 0 || t,
    r = e.cursorStyle,
    i = r === void 0 ? "|" : r,
    o = e.cursorColor,
    s = o === void 0 ? "inherit" : o;
  return Ei.jsx(
    "span",
    Ct(
      {
        style: { color: s },
        className: "".concat(Yk, " ").concat(n ? Qk : ""),
      },
      { children: i }
    )
  );
});
(ws.Cursor = Lh),
  (Jy = ws.Typewriter =
    function (e) {
      var t = e.words,
        n =
          t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
        r = e.loop,
        i = r === void 0 ? 1 : r,
        o = e.typeSpeed,
        s = o === void 0 ? 80 : o,
        a = e.deleteSpeed,
        l = a === void 0 ? 50 : a,
        u = e.delaySpeed,
        c = u === void 0 ? 1500 : u,
        f = e.cursor,
        d = f !== void 0 && f,
        y = e.cursorStyle,
        v = y === void 0 ? "|" : y,
        x = e.cursorColor,
        S = x === void 0 ? "inherit" : x,
        h = e.cursorBlinking,
        p = h === void 0 || h,
        m = e.onLoopDone,
        w = e.onType,
        k = e.onDelay,
        E = e.onDelete,
        T = Mh({
          words: n,
          loop: i,
          typeSpeed: s,
          deleteSpeed: l,
          delaySpeed: c,
          onLoopDone: m,
          onType: w,
          onDelay: k,
          onDelete: E,
        })[0];
      return Ei.jsxs(Ei.Fragment, {
        children: [
          Ei.jsx("span", { children: T }),
          d &&
            Ei.jsx(Lh, { cursorStyle: v, cursorColor: S, cursorBlinking: p }),
        ],
      });
    }),
  (ws.useTypewriter = Mh);
var ic = new Map(),
  Jo = new WeakMap(),
  Nh = 0,
  Xk = void 0;
function Zk(e) {
  return e
    ? (Jo.has(e) || ((Nh += 1), Jo.set(e, Nh.toString())), Jo.get(e))
    : "0";
}
function qk(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? Zk(e.root) : e[t]}`)
    .toString();
}
function Jk(e) {
  const t = qk(e);
  let n = ic.get(t);
  if (!n) {
    const r = new Map();
    let i;
    const o = new IntersectionObserver((s) => {
      s.forEach((a) => {
        var l;
        const u = a.isIntersecting && i.some((c) => a.intersectionRatio >= c);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u),
          (l = r.get(a.target)) == null ||
            l.forEach((c) => {
              c(u, a);
            });
      });
    }, e);
    (i =
      o.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: o, elements: r }),
      ic.set(t, n);
  }
  return n;
}
function eT(e, t, n = {}, r = Xk) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const l = e.getBoundingClientRect();
    return (
      t(r, {
        isIntersecting: r,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: l,
        intersectionRect: l,
        rootBounds: l,
      }),
      () => {}
    );
  }
  const { id: i, observer: o, elements: s } = Jk(n),
    a = s.get(e) || [];
  return (
    s.has(e) || s.set(e, a),
    a.push(t),
    o.observe(e),
    function () {
      a.splice(a.indexOf(t), 1),
        a.length === 0 && (s.delete(e), o.unobserve(e)),
        s.size === 0 && (o.disconnect(), ic.delete(i));
    }
  );
}
function Aa({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: o,
  skip: s,
  initialInView: a,
  fallbackInView: l,
  onChange: u,
} = {}) {
  var c;
  const [f, d] = P.useState(null),
    y = P.useRef(),
    [v, x] = P.useState({ inView: !!a, entry: void 0 });
  (y.current = u),
    P.useEffect(() => {
      if (s || !f) return;
      let m;
      return (
        (m = eT(
          f,
          (w, k) => {
            x({ inView: w, entry: k }),
              y.current && y.current(w, k),
              k.isIntersecting && o && m && (m(), (m = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          l
        )),
        () => {
          m && m();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, f, i, r, o, s, n, l, t]);
  const S = (c = v.entry) == null ? void 0 : c.target,
    h = P.useRef();
  !f &&
    S &&
    !o &&
    !s &&
    h.current !== S &&
    ((h.current = S), x({ inView: !!a, entry: void 0 }));
  const p = [d, v.inView, v.entry];
  return (p.ref = p[0]), (p.inView = p[1]), (p.entry = p[2]), p;
}
const po = { black: "#000", white: "#fff" },
  dr = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  pr = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  hr = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  mr = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  gr = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  vi = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  tT = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function ir(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    t.forEach((r) => n.searchParams.append("args[]", r)),
    `Minified MUI error #${e}; visit ${n} for the full message.`
  );
}
const Ma = "$$material";
function oc() {
  return (
    (oc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oc.apply(null, arguments)
  );
}
function ev(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var nT =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  rT = ev(function (e) {
    return (
      nT.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  iT = !1;
function oT(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function sT(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var aT = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !iT : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(sT(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = oT(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var i;
          return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ne = "-ms-",
  na = "-moz-",
  H = "-webkit-",
  tv = "comm",
  Wf = "rule",
  Hf = "decl",
  lT = "@import",
  nv = "@keyframes",
  uT = "@layer",
  cT = Math.abs,
  La = String.fromCharCode,
  fT = Object.assign;
function dT(e, t) {
  return be(e, 0) ^ 45
    ? (((((((t << 2) ^ be(e, 0)) << 2) ^ be(e, 1)) << 2) ^ be(e, 2)) << 2) ^
        be(e, 3)
    : 0;
}
function rv(e) {
  return e.trim();
}
function pT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, n) {
  return e.replace(t, n);
}
function sc(e, t) {
  return e.indexOf(t);
}
function be(e, t) {
  return e.charCodeAt(t) | 0;
}
function ho(e, t, n) {
  return e.slice(t, n);
}
function jt(e) {
  return e.length;
}
function Kf(e) {
  return e.length;
}
function es(e, t) {
  return t.push(e), e;
}
function hT(e, t) {
  return e.map(t).join("");
}
var Na = 1,
  ti = 1,
  iv = 0,
  Xe = 0,
  ye = 0,
  li = "";
function Da(e, t, n, r, i, o, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Na,
    column: ti,
    length: s,
    return: "",
  };
}
function xi(e, t) {
  return fT(Da("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mT() {
  return ye;
}
function gT() {
  return (
    (ye = Xe > 0 ? be(li, --Xe) : 0), ti--, ye === 10 && ((ti = 1), Na--), ye
  );
}
function nt() {
  return (
    (ye = Xe < iv ? be(li, Xe++) : 0), ti++, ye === 10 && ((ti = 1), Na++), ye
  );
}
function zt() {
  return be(li, Xe);
}
function Ss() {
  return Xe;
}
function Eo(e, t) {
  return ho(li, e, t);
}
function mo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ov(e) {
  return (Na = ti = 1), (iv = jt((li = e))), (Xe = 0), [];
}
function sv(e) {
  return (li = ""), e;
}
function Cs(e) {
  return rv(Eo(Xe - 1, ac(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yT(e) {
  for (; (ye = zt()) && ye < 33; ) nt();
  return mo(e) > 2 || mo(ye) > 3 ? "" : " ";
}
function vT(e, t) {
  for (
    ;
    --t &&
    nt() &&
    !(ye < 48 || ye > 102 || (ye > 57 && ye < 65) || (ye > 70 && ye < 97));

  );
  return Eo(e, Ss() + (t < 6 && zt() == 32 && nt() == 32));
}
function ac(e) {
  for (; nt(); )
    switch (ye) {
      case e:
        return Xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ac(ye);
        break;
      case 40:
        e === 41 && ac(e);
        break;
      case 92:
        nt();
        break;
    }
  return Xe;
}
function xT(e, t) {
  for (; nt() && e + ye !== 57; ) if (e + ye === 84 && zt() === 47) break;
  return "/*" + Eo(t, Xe - 1) + "*" + La(e === 47 ? e : nt());
}
function wT(e) {
  for (; !mo(zt()); ) nt();
  return Eo(e, Xe);
}
function ST(e) {
  return sv(ks("", null, null, null, [""], (e = ov(e)), 0, [0], e));
}
function ks(e, t, n, r, i, o, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      y = 0,
      v = 0,
      x = 1,
      S = 1,
      h = 1,
      p = 0,
      m = "",
      w = i,
      k = o,
      E = r,
      T = m;
    S;

  )
    switch (((v = p), (p = nt()))) {
      case 40:
        if (v != 108 && be(T, f - 1) == 58) {
          sc((T += K(Cs(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Cs(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += yT(v);
        break;
      case 92:
        T += vT(Ss() - 1, 7);
        continue;
      case 47:
        switch (zt()) {
          case 42:
          case 47:
            es(CT(xT(nt(), Ss()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * x:
        a[u++] = jt(T) * h;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            h == -1 && (T = K(T, /\f/g, "")),
              y > 0 &&
                jt(T) - f &&
                es(
                  y > 32
                    ? jh(T + ";", r, n, f - 1)
                    : jh(K(T, " ", "") + ";", r, n, f - 2),
                  l
                );
            break;
          case 59:
            T += ";";
          default:
            if (
              (es((E = Dh(T, t, n, u, c, i, a, m, (w = []), (k = []), f)), o),
              p === 123)
            )
              if (c === 0) ks(T, t, E, E, w, o, f, a, k);
              else
                switch (d === 99 && be(T, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ks(
                      e,
                      E,
                      E,
                      r && es(Dh(e, E, E, 0, 0, i, a, m, i, (w = []), f), k),
                      i,
                      k,
                      f,
                      a,
                      r ? w : k
                    );
                    break;
                  default:
                    ks(T, E, E, E, [""], k, 0, a, k);
                }
        }
        (u = c = y = 0), (x = h = 1), (m = T = ""), (f = s);
        break;
      case 58:
        (f = 1 + jt(T)), (y = v);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && gT() == 125) continue;
        }
        switch (((T += La(p)), p * x)) {
          case 38:
            h = c > 0 ? 1 : ((T += "\f"), -1);
            break;
          case 44:
            (a[u++] = (jt(T) - 1) * h), (h = 1);
            break;
          case 64:
            zt() === 45 && (T += Cs(nt())),
              (d = zt()),
              (c = f = jt((m = T += wT(Ss())))),
              p++;
            break;
          case 45:
            v === 45 && jt(T) == 2 && (x = 0);
        }
    }
  return o;
}
function Dh(e, t, n, r, i, o, s, a, l, u, c) {
  for (
    var f = i - 1, d = i === 0 ? o : [""], y = Kf(d), v = 0, x = 0, S = 0;
    v < r;
    ++v
  )
    for (var h = 0, p = ho(e, f + 1, (f = cT((x = s[v])))), m = e; h < y; ++h)
      (m = rv(x > 0 ? d[h] + " " + p : K(p, /&\f/g, d[h]))) && (l[S++] = m);
  return Da(e, t, n, i === 0 ? Wf : a, l, u, c);
}
function CT(e, t, n) {
  return Da(e, t, n, tv, La(mT()), ho(e, 2, -2), 0);
}
function jh(e, t, n, r) {
  return Da(e, t, n, Hf, ho(e, 0, r), ho(e, r + 1, -1), r);
}
function Ur(e, t) {
  for (var n = "", r = Kf(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function kT(e, t, n, r) {
  switch (e.type) {
    case uT:
      if (e.children.length) break;
    case lT:
    case Hf:
      return (e.return = e.return || e.value);
    case tv:
      return "";
    case nv:
      return (e.return = e.value + "{" + Ur(e.children, r) + "}");
    case Wf:
      e.value = e.props.join(",");
  }
  return jt((n = Ur(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function TT(e) {
  var t = Kf(e);
  return function (n, r, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, i, o) || "";
    return s;
  };
}
function PT(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var ET = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = zt()), i === 38 && o === 12 && (n[r] = 1), !mo(o);

    )
      nt();
    return Eo(t, Xe);
  },
  bT = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (mo(i)) {
        case 0:
          i === 38 && zt() === 12 && (n[r] = 1), (t[r] += ET(Xe - 1, n, r));
          break;
        case 2:
          t[r] += Cs(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = zt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += La(i);
      }
    while ((i = nt()));
    return t;
  },
  RT = function (t, n) {
    return sv(bT(ov(t), n));
  },
  Oh = new WeakMap(),
  AT = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Oh.get(r)) &&
        !i
      ) {
        Oh.set(t, !0);
        for (
          var o = [], s = RT(n, o), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = o[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  MT = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function av(e, t) {
  switch (dT(e, t)) {
    case 5103:
      return H + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return H + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return H + e + na + e + Ne + e + e;
    case 6828:
    case 4268:
      return H + e + Ne + e + e;
    case 6165:
      return H + e + Ne + "flex-" + e + e;
    case 5187:
      return (
        H + e + K(e, /(\w+).+(:[^]+)/, H + "box-$1$2" + Ne + "flex-$1$2") + e
      );
    case 5443:
      return H + e + Ne + "flex-item-" + K(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        H +
        e +
        Ne +
        "flex-line-pack" +
        K(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return H + e + Ne + K(e, "shrink", "negative") + e;
    case 5292:
      return H + e + Ne + K(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        H +
        "box-" +
        K(e, "-grow", "") +
        H +
        e +
        Ne +
        K(e, "grow", "positive") +
        e
      );
    case 4554:
      return H + K(e, /([^-])(transform)/g, "$1" + H + "$2") + e;
    case 6187:
      return (
        K(K(K(e, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return (
        K(
          K(e, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + Ne + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        H +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, H + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (jt(e) - 1 - t > 6)
        switch (be(e, t + 1)) {
          case 109:
            if (be(e, t + 4) !== 45) break;
          case 102:
            return (
              K(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  H +
                  "$2-$3$1" +
                  na +
                  (be(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~sc(e, "stretch")
              ? av(K(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (be(e, t + 1) !== 115) break;
    case 6444:
      switch (be(e, jt(e) - 3 - (~sc(e, "!important") && 10))) {
        case 107:
          return K(e, ":", ":" + H) + e;
        case 101:
          return (
            K(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                H +
                (be(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                H +
                "$2$3$1" +
                Ne +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (be(e, t + 11)) {
        case 114:
          return H + e + Ne + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return H + e + Ne + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return H + e + Ne + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return H + e + Ne + e + e;
  }
  return e;
}
var LT = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Hf:
          t.return = av(t.value, t.length);
          break;
        case nv:
          return Ur([xi(t, { value: K(t.value, "@", "@" + H) })], i);
        case Wf:
          if (t.length)
            return hT(t.props, function (o) {
              switch (pT(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ur(
                    [xi(t, { props: [K(o, /:(read-\w+)/, ":" + na + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return Ur(
                    [
                      xi(t, {
                        props: [K(o, /:(plac\w+)/, ":" + H + "input-$1")],
                      }),
                      xi(t, { props: [K(o, /:(plac\w+)/, ":" + na + "$1")] }),
                      xi(t, { props: [K(o, /:(plac\w+)/, Ne + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  NT = [LT],
  DT = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (x) {
        var S = x.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(x), x.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || NT,
      o = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (x) {
          for (
            var S = x.getAttribute("data-emotion").split(" "), h = 1;
            h < S.length;
            h++
          )
            o[S[h]] = !0;
          a.push(x);
        }
      );
    var l,
      u = [AT, MT];
    {
      var c,
        f = [
          kT,
          PT(function (x) {
            c.insert(x);
          }),
        ],
        d = TT(u.concat(i, f)),
        y = function (S) {
          return Ur(ST(S), d);
        };
      l = function (S, h, p, m) {
        (c = p),
          y(S ? S + "{" + h.styles + "}" : h.styles),
          m && (v.inserted[h.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new aT({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return v.sheet.hydrate(a), v;
  },
  jT = !0;
function OT(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
    }),
    r
  );
}
var lv = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || jT === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  IT = function (t, n, r) {
    lv(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function _T(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var VT = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  $T = !1,
  FT = /[A-Z]|^ms/g,
  BT = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  uv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ih = function (t) {
    return t != null && typeof t != "boolean";
  },
  Fl = ev(function (e) {
    return uv(e) ? e : e.replace(FT, "-$&").toLowerCase();
  }),
  _h = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(BT, function (r, i, o) {
            return (Ot = { name: i, styles: o, next: Ot }), i;
          });
    }
    return VT[t] !== 1 && !uv(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  zT =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function go(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return (Ot = { name: i.name, styles: i.styles, next: Ot }), i.name;
      var o = n;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (Ot = { name: s.name, styles: s.styles, next: Ot }), (s = s.next);
        var a = o.styles + ";";
        return a;
      }
      return UT(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ot,
          u = n(e);
        return (Ot = l), go(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function UT(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += go(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += o + "{" + t[a] + "}")
          : Ih(a) && (r += Fl(o) + ":" + _h(o, a) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && $T) throw new Error(zT);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            Ih(s[l]) && (r += Fl(o) + ":" + _h(o, s[l]) + ";");
        else {
          var u = go(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              r += Fl(o) + ":" + u + ";";
              break;
            }
            default:
              r += o + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Vh = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ot;
function cv(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    i = "";
  Ot = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) (r = !1), (i += go(n, t, o));
  else {
    var s = o;
    i += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((i += go(n, t, e[a])), r)) {
      var l = o;
      i += l[a];
    }
  Vh.lastIndex = 0;
  for (var u = "", c; (c = Vh.exec(i)) !== null; ) u += "-" + c[1];
  var f = _T(i) + u;
  return { name: f, styles: i, next: Ot };
}
var WT = function (t) {
    return t();
  },
  HT = Ql.useInsertionEffect ? Ql.useInsertionEffect : !1,
  KT = HT || WT,
  fv = P.createContext(typeof HTMLElement < "u" ? DT({ key: "css" }) : null);
fv.Provider;
var GT = function (t) {
    return P.forwardRef(function (n, r) {
      var i = P.useContext(fv);
      return t(n, i, r);
    });
  },
  dv = P.createContext({}),
  YT = rT,
  QT = function (t) {
    return t !== "theme";
  },
  $h = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? YT : QT;
  },
  Fh = function (t, n, r) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (s) {
              return t.__emotion_forwardProp(s) && o(s);
            }
          : o;
    }
    return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
  },
  XT = !1,
  ZT = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      lv(n, r, i),
      KT(function () {
        return IT(n, r, i);
      }),
      null
    );
  },
  qT = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      s;
    n !== void 0 && ((o = n.label), (s = n.target));
    var a = Fh(t, n, r),
      l = a || $h(i),
      u = !l("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && f.push("label:" + o + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, y = 1; y < d; y++) f.push(c[y], c[0][y]);
      }
      var v = GT(function (x, S, h) {
        var p = (u && x.as) || i,
          m = "",
          w = [],
          k = x;
        if (x.theme == null) {
          k = {};
          for (var E in x) k[E] = x[E];
          k.theme = P.useContext(dv);
        }
        typeof x.className == "string"
          ? (m = OT(S.registered, w, x.className))
          : x.className != null && (m = x.className + " ");
        var T = cv(f.concat(w), S.registered, k);
        (m += S.key + "-" + T.name), s !== void 0 && (m += " " + s);
        var b = u && a === void 0 ? $h(p) : l,
          N = {};
        for (var g in x) (u && g === "as") || (b(g) && (N[g] = x[g]));
        return (
          (N.className = m),
          h && (N.ref = h),
          P.createElement(
            P.Fragment,
            null,
            P.createElement(ZT, {
              cache: S,
              serialized: T,
              isStringTag: typeof p == "string",
            }),
            P.createElement(p, N)
          )
        );
      });
      return (
        (v.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = i),
        (v.__emotion_styles = f),
        (v.__emotion_forwardProp = a),
        Object.defineProperty(v, "toString", {
          value: function () {
            return s === void 0 && XT ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (v.withComponent = function (x, S) {
          return e(x, oc({}, n, S, { shouldForwardProp: Fh(v, S, !0) })).apply(
            void 0,
            f
          );
        }),
        v
      );
    };
  },
  JT = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  lc = qT.bind();
JT.forEach(function (e) {
  lc[e] = lc(e);
});
/**
 * @mui/styled-engine v6.1.5
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function pv(e, t) {
  return lc(e, t);
}
function eP(e, t) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
}
const Bh = [];
function zh(e) {
  return (Bh[0] = e), cv(Bh);
}
function _t(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function hv(e) {
  if (!_t(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = hv(e[n]);
    }),
    t
  );
}
function rt(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e;
  return (
    _t(e) &&
      _t(t) &&
      Object.keys(t).forEach((i) => {
        _t(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && _t(e[i])
          ? (r[i] = rt(e[i], t[i], n))
          : n.clone
          ? (r[i] = _t(t[i]) ? hv(t[i]) : t[i])
          : (r[i] = t[i]);
      }),
    r
  );
}
const tP = (e) => {
  const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
  return (
    t.sort((n, r) => n.val - r.val),
    t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
  );
};
function nP(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
      ...i
    } = e,
    o = tP(t),
    s = Object.keys(o);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - r / 100
    }${n})`;
  }
  function u(d, y) {
    const v = s.indexOf(y);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${n}) and (max-width:${
      (v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : y) - r / 100
    }${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const y = s.indexOf(d);
    return y === 0
      ? a(s[1])
      : y === s.length - 1
      ? l(s[y])
      : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: o,
    up: a,
    down: l,
    between: u,
    only: c,
    not: f,
    unit: n,
    ...i,
  };
}
function rP(e, t) {
  if (!e.containerQueries) return t;
  const n = Object.keys(t)
    .filter((r) => r.startsWith("@container"))
    .sort((r, i) => {
      var s, a;
      const o = /min-width:\s*([0-9.]+)/;
      return (
        +(((s = r.match(o)) == null ? void 0 : s[1]) || 0) -
        +(((a = i.match(o)) == null ? void 0 : a[1]) || 0)
      );
    });
  return n.length
    ? n.reduce(
        (r, i) => {
          const o = t[i];
          return delete r[i], (r[i] = o), r;
        },
        { ...t }
      )
    : t;
}
function iP(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
  );
}
function oP(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, i] = n,
    o = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(o);
}
function sP(e) {
  const t = (o, s) => o.replace("@media", s ? `@container ${s}` : "@container");
  function n(o, s) {
    (o.up = (...a) => t(e.breakpoints.up(...a), s)),
      (o.down = (...a) => t(e.breakpoints.down(...a), s)),
      (o.between = (...a) => t(e.breakpoints.between(...a), s)),
      (o.only = (...a) => t(e.breakpoints.only(...a), s)),
      (o.not = (...a) => {
        const l = t(e.breakpoints.not(...a), s);
        return l.includes("not all and")
          ? l
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : l;
      });
  }
  const r = {},
    i = (o) => (n(r, o), r);
  return n(i), { ...e, containerQueries: i };
}
const aP = { borderRadius: 4 };
function zi(e, t) {
  return t ? rt(e, t, { clone: !1 }) : e;
}
const ja = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Uh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${ja[e]}px)`,
  },
  lP = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == "number" ? t : ja[t] || t;
        return (
          typeof n == "number" && (n = `${n}px`),
          e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        );
      },
    }),
  };
function an(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Uh;
    return t.reduce((s, a, l) => ((s[o.up(o.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Uh;
    return Object.keys(t).reduce((s, a) => {
      if (iP(o.keys, a)) {
        const l = oP(r.containerQueries ? r : lP, a);
        l && (s[l] = n(t[a], a));
      } else if (Object.keys(o.values || ja).includes(a)) {
        const l = o.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function uP(e = {}) {
  var n;
  return (
    ((n = e.keys) == null
      ? void 0
      : n.reduce((r, i) => {
          const o = e.up(i);
          return (r[o] = {}), r;
        }, {})) || {}
  );
}
function cP(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function ke(e) {
  if (typeof e != "string") throw new Error(ir(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Oa(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, i) => (r && r[i] != null ? r[i] : null), e);
}
function ra(e, t, n, r = n) {
  let i;
  return (
    typeof e == "function"
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = Oa(e, n) || r),
    t && (i = t(i, r, e)),
    i
  );
}
function ge(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Oa(l, r) || {};
      return an(s, a, (f) => {
        let d = ra(u, i, f);
        return (
          f === d &&
            typeof f == "string" &&
            (d = ra(u, i, `${t}${f === "default" ? "" : ke(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function fP(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const dP = { m: "margin", p: "padding" },
  pP = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Wh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  hP = fP((e) => {
    if (e.length > 2)
      if (Wh[e]) e = Wh[e];
      else return [e];
    const [t, n] = e.split(""),
      r = dP[t],
      i = pP[n] || "";
    return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
  }),
  Gf = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Yf = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Gf, ...Yf];
function bo(e, t, n, r) {
  const i = Oa(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string"
    ? (o) =>
        typeof o == "string"
          ? o
          : typeof i == "string"
          ? `calc(${o} * ${i})`
          : i * o
    : Array.isArray(i)
    ? (o) => {
        if (typeof o == "string") return o;
        const s = Math.abs(o),
          a = i[s];
        return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
      }
    : typeof i == "function"
    ? i
    : () => {};
}
function Qf(e) {
  return bo(e, "spacing", 8);
}
function Ro(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function mP(e, t) {
  return (n) => e.reduce((r, i) => ((r[i] = Ro(t, n)), r), {});
}
function gP(e, t, n, r) {
  if (!t.includes(n)) return null;
  const i = hP(n),
    o = mP(i, r),
    s = e[n];
  return an(e, s, o);
}
function mv(e, t) {
  const n = Qf(e.theme);
  return Object.keys(e)
    .map((r) => gP(e, t, r, n))
    .reduce(zi, {});
}
function ce(e) {
  return mv(e, Gf);
}
ce.propTypes = {};
ce.filterProps = Gf;
function fe(e) {
  return mv(e, Yf);
}
fe.propTypes = {};
fe.filterProps = Yf;
function gv(e = 8, t = Qf({ spacing: e })) {
  if (e.mui) return e;
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((o) => {
        const s = t(o);
        return typeof s == "number" ? `${s}px` : s;
      })
      .join(" ");
  return (n.mui = !0), n;
}
function Ia(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach((o) => {
          r[o] = i;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((i, o) => (t[o] ? zi(i, t[o](r)) : i), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  );
}
function dt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function yt(e, t) {
  return ge({ prop: e, themeKey: "borders", transform: t });
}
const yP = yt("border", dt),
  vP = yt("borderTop", dt),
  xP = yt("borderRight", dt),
  wP = yt("borderBottom", dt),
  SP = yt("borderLeft", dt),
  CP = yt("borderColor"),
  kP = yt("borderTopColor"),
  TP = yt("borderRightColor"),
  PP = yt("borderBottomColor"),
  EP = yt("borderLeftColor"),
  bP = yt("outline", dt),
  RP = yt("outlineColor"),
  _a = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = bo(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Ro(t, r) });
      return an(e, e.borderRadius, n);
    }
    return null;
  };
_a.propTypes = {};
_a.filterProps = ["borderRadius"];
Ia(yP, vP, xP, wP, SP, CP, kP, TP, PP, EP, _a, bP, RP);
const Va = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = bo(e.theme, "spacing", 8),
      n = (r) => ({ gap: Ro(t, r) });
    return an(e, e.gap, n);
  }
  return null;
};
Va.propTypes = {};
Va.filterProps = ["gap"];
const $a = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = bo(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Ro(t, r) });
    return an(e, e.columnGap, n);
  }
  return null;
};
$a.propTypes = {};
$a.filterProps = ["columnGap"];
const Fa = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = bo(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Ro(t, r) });
    return an(e, e.rowGap, n);
  }
  return null;
};
Fa.propTypes = {};
Fa.filterProps = ["rowGap"];
const AP = ge({ prop: "gridColumn" }),
  MP = ge({ prop: "gridRow" }),
  LP = ge({ prop: "gridAutoFlow" }),
  NP = ge({ prop: "gridAutoColumns" }),
  DP = ge({ prop: "gridAutoRows" }),
  jP = ge({ prop: "gridTemplateColumns" }),
  OP = ge({ prop: "gridTemplateRows" }),
  IP = ge({ prop: "gridTemplateAreas" }),
  _P = ge({ prop: "gridArea" });
Ia(Va, $a, Fa, AP, MP, LP, NP, DP, jP, OP, IP, _P);
function Wr(e, t) {
  return t === "grey" ? t : e;
}
const VP = ge({ prop: "color", themeKey: "palette", transform: Wr }),
  $P = ge({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Wr,
  }),
  FP = ge({ prop: "backgroundColor", themeKey: "palette", transform: Wr });
Ia(VP, $P, FP);
function Je(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const BP = ge({ prop: "width", transform: Je }),
  Xf = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var i, o, s, a, l;
        const r =
          ((s =
            (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null
              ? void 0
              : o.values) == null
            ? void 0
            : s[n]) || ja[n];
        return r
          ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null
              ? void 0
              : l.unit) !== "px"
            ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
            : { maxWidth: r }
          : { maxWidth: Je(n) };
      };
      return an(e, e.maxWidth, t);
    }
    return null;
  };
Xf.filterProps = ["maxWidth"];
const zP = ge({ prop: "minWidth", transform: Je }),
  UP = ge({ prop: "height", transform: Je }),
  WP = ge({ prop: "maxHeight", transform: Je }),
  HP = ge({ prop: "minHeight", transform: Je });
ge({ prop: "size", cssProperty: "width", transform: Je });
ge({ prop: "size", cssProperty: "height", transform: Je });
const KP = ge({ prop: "boxSizing" });
Ia(BP, Xf, zP, UP, WP, HP, KP);
const Ao = {
  border: { themeKey: "borders", transform: dt },
  borderTop: { themeKey: "borders", transform: dt },
  borderRight: { themeKey: "borders", transform: dt },
  borderBottom: { themeKey: "borders", transform: dt },
  borderLeft: { themeKey: "borders", transform: dt },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: dt },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: _a },
  color: { themeKey: "palette", transform: Wr },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Wr,
  },
  backgroundColor: { themeKey: "palette", transform: Wr },
  p: { style: fe },
  pt: { style: fe },
  pr: { style: fe },
  pb: { style: fe },
  pl: { style: fe },
  px: { style: fe },
  py: { style: fe },
  padding: { style: fe },
  paddingTop: { style: fe },
  paddingRight: { style: fe },
  paddingBottom: { style: fe },
  paddingLeft: { style: fe },
  paddingX: { style: fe },
  paddingY: { style: fe },
  paddingInline: { style: fe },
  paddingInlineStart: { style: fe },
  paddingInlineEnd: { style: fe },
  paddingBlock: { style: fe },
  paddingBlockStart: { style: fe },
  paddingBlockEnd: { style: fe },
  m: { style: ce },
  mt: { style: ce },
  mr: { style: ce },
  mb: { style: ce },
  ml: { style: ce },
  mx: { style: ce },
  my: { style: ce },
  margin: { style: ce },
  marginTop: { style: ce },
  marginRight: { style: ce },
  marginBottom: { style: ce },
  marginLeft: { style: ce },
  marginX: { style: ce },
  marginY: { style: ce },
  marginInline: { style: ce },
  marginInlineStart: { style: ce },
  marginInlineEnd: { style: ce },
  marginBlock: { style: ce },
  marginBlockStart: { style: ce },
  marginBlockEnd: { style: ce },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Va },
  rowGap: { style: Fa },
  columnGap: { style: $a },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: Je },
  maxWidth: { style: Xf },
  minWidth: { transform: Je },
  height: { transform: Je },
  maxHeight: { transform: Je },
  minHeight: { transform: Je },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function GP(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function YP(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function QP() {
  function e(n, r, i, o) {
    const s = { [n]: r, theme: i },
      a = o[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const d = Oa(i, u) || {};
    return f
      ? f(s)
      : an(s, r, (v) => {
          let x = ra(d, c, v);
          return (
            v === x &&
              typeof v == "string" &&
              (x = ra(d, c, `${n}${v === "default" ? "" : ke(v)}`, v)),
            l === !1 ? x : { [l]: x }
          );
        });
  }
  function t(n) {
    const { sx: r, theme: i = {} } = n || {};
    if (!r) return null;
    const o = i.unstable_sxConfig ?? Ao;
    function s(a) {
      let l = a;
      if (typeof a == "function") l = a(i);
      else if (typeof a != "object") return a;
      if (!l) return null;
      const u = uP(i.breakpoints),
        c = Object.keys(u);
      let f = u;
      return (
        Object.keys(l).forEach((d) => {
          const y = YP(l[d], i);
          if (y != null)
            if (typeof y == "object")
              if (o[d]) f = zi(f, e(d, y, i, o));
              else {
                const v = an({ theme: i }, y, (x) => ({ [d]: x }));
                GP(v, y) ? (f[d] = t({ sx: y, theme: i })) : (f = zi(f, v));
              }
            else f = zi(f, e(d, y, i, o));
        }),
        rP(i, cP(c, f))
      );
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const or = QP();
or.filterProps = ["sx"];
function XP(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (
      !((r = n.colorSchemes) != null && r[e]) ||
      typeof n.getColorSchemeSelector != "function"
    )
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&"
      ? t
      : ((i.includes("data-") || i.includes(".")) &&
          (i = `*:where(${i.replace(/\s*&$/, "")}) &`),
        { [i]: t });
  }
  return n.palette.mode === e ? t : {};
}
function Ba(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: i,
      shape: o = {},
      ...s
    } = e,
    a = nP(n),
    l = gv(i);
  let u = rt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...r },
      spacing: l,
      shape: { ...aP, ...o },
    },
    s
  );
  return (
    (u = sP(u)),
    (u.applyStyles = XP),
    (u = t.reduce((c, f) => rt(c, f), u)),
    (u.unstable_sxConfig = {
      ...Ao,
      ...(s == null ? void 0 : s.unstable_sxConfig),
    }),
    (u.unstable_sx = function (f) {
      return or({ sx: f, theme: this });
    }),
    u
  );
}
function ZP(e) {
  return Object.keys(e).length === 0;
}
function yv(e = null) {
  const t = P.useContext(dv);
  return !t || ZP(t) ? e : t;
}
const qP = Ba();
function Zf(e = qP) {
  return yv(e);
}
const JP = (e) => {
  var r;
  const t = { systemProps: {}, otherProps: {} },
    n =
      ((r = e == null ? void 0 : e.theme) == null
        ? void 0
        : r.unstable_sxConfig) ?? Ao;
  return (
    Object.keys(e).forEach((i) => {
      n[i] ? (t.systemProps[i] = e[i]) : (t.otherProps[i] = e[i]);
    }),
    t
  );
};
function vv(e) {
  const { sx: t, ...n } = e,
    { systemProps: r, otherProps: i } = JP(n);
  let o;
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == "function"
      ? (o = (...s) => {
          const a = t(...s);
          return _t(a) ? { ...r, ...a } : r;
        })
      : (o = { ...r, ...t }),
    { ...i, sx: o }
  );
}
const Hh = (e) => e,
  eE = () => {
    let e = Hh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Hh;
      },
    };
  },
  xv = eE();
function wv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = wv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ie() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = wv(e)) && (r && (r += " "), (r += t));
  return r;
}
function tE(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: i,
    } = e,
    o = pv("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(or);
  return P.forwardRef(function (l, u) {
    const c = Zf(n),
      { className: f, component: d = "div", ...y } = vv(l);
    return C.jsx(o, {
      as: d,
      ref: u,
      className: ie(f, i ? i(r) : r),
      theme: (t && c[t]) || c,
      ...y,
    });
  });
}
const nE = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function Ve(e, t, n = "Mui") {
  const r = nE[t];
  return r ? `${n}-${r}` : `${xv.generate(e)}-${t}`;
}
function Ue(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((i) => {
      r[i] = Ve(e, i, n);
    }),
    r
  );
}
function Sv(e) {
  const { variants: t, ...n } = e,
    r = { variants: t, style: zh(n), isProcessed: !0 };
  return (
    r.style === n ||
      (t &&
        t.forEach((i) => {
          typeof i.style != "function" && (i.style = zh(i.style));
        })),
    r
  );
}
const rE = Ba();
function Bl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function iE(e) {
  return e ? (t, n) => n[e] : null;
}
function oE(e, t, n) {
  e.theme = aE(e.theme) ? n : e.theme[t] || e.theme;
}
function Ts(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n)) return n.flatMap((r) => Ts(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed) r = n.style;
    else {
      const { variants: i, ...o } = n;
      r = o;
    }
    return Cv(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Cv(e, t, n = []) {
  var i;
  let r;
  e: for (let o = 0; o < t.length; o += 1) {
    const s = t[o];
    if (typeof s.props == "function") {
      if (
        (r ?? (r = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !s.props(r))
      )
        continue;
    } else
      for (const a in s.props)
        if (
          e[a] !== s.props[a] &&
          ((i = e.ownerState) == null ? void 0 : i[a]) !== s.props[a]
        )
          continue e;
    typeof s.style == "function"
      ? (r ?? (r = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        n.push(s.style(r)))
      : n.push(s.style);
  }
  return n;
}
function kv(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = rE,
    rootShouldForwardProp: r = Bl,
    slotShouldForwardProp: i = Bl,
  } = e;
  function o(a) {
    oE(a, t, n);
  }
  return (a, l = {}) => {
    eP(a, (k) => k.filter((E) => E !== or));
    const {
        name: u,
        slot: c,
        skipVariantsResolver: f,
        skipSx: d,
        overridesResolver: y = iE(uE(c)),
        ...v
      } = l,
      x = f !== void 0 ? f : (c && c !== "Root" && c !== "root") || !1,
      S = d || !1;
    let h = Bl;
    c === "Root" || c === "root"
      ? (h = r)
      : c
      ? (h = i)
      : lE(a) && (h = void 0);
    const p = pv(a, { shouldForwardProp: h, label: sE(), ...v }),
      m = (k) => {
        if (typeof k == "function" && k.__emotion_real !== k)
          return function (T) {
            return Ts(T, k);
          };
        if (_t(k)) {
          const E = Sv(k);
          return E.variants
            ? function (b) {
                return Ts(b, E);
              }
            : E.style;
        }
        return k;
      },
      w = (...k) => {
        const E = [],
          T = k.map(m),
          b = [];
        if (
          (E.push(o),
          u &&
            y &&
            b.push(function (j) {
              var B, U;
              const F =
                (U = (B = j.theme.components) == null ? void 0 : B[u]) == null
                  ? void 0
                  : U.styleOverrides;
              if (!F) return null;
              const V = {};
              for (const A in F) V[A] = Ts(j, F[A]);
              return y(j, V);
            }),
          u &&
            !x &&
            b.push(function (j) {
              var V, B;
              const _ = j.theme,
                F =
                  (B =
                    (V = _ == null ? void 0 : _.components) == null
                      ? void 0
                      : V[u]) == null
                    ? void 0
                    : B.variants;
              return F ? Cv(j, F) : null;
            }),
          S || b.push(or),
          Array.isArray(T[0]))
        ) {
          const M = T.shift(),
            j = new Array(E.length).fill(""),
            _ = new Array(b.length).fill("");
          let F;
          (F = [...j, ...M, ..._]),
            (F.raw = [...j, ...M.raw, ..._]),
            E.unshift(F);
        }
        const N = [...E, ...T, ...b],
          g = p(...N);
        return a.muiName && (g.muiName = a.muiName), g;
      };
    return p.withConfig && (w.withConfig = p.withConfig), w;
  };
}
function sE(e, t) {
  return void 0;
}
function aE(e) {
  for (const t in e) return !1;
  return !0;
}
function lE(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function uE(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const cE = kv();
function ia(e, t) {
  const n = { ...t };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const i = r;
      if (i === "components" || i === "slots") n[i] = { ...e[i], ...n[i] };
      else if (i === "componentsProps" || i === "slotProps") {
        const o = e[i],
          s = t[i];
        if (!s) n[i] = o || {};
        else if (!o) n[i] = s;
        else {
          n[i] = { ...s };
          for (const a in o)
            if (Object.prototype.hasOwnProperty.call(o, a)) {
              const l = a;
              n[i][l] = ia(o[l], s[l]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function Tv(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : ia(t.components[n].defaultProps, r);
}
function Pv({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = Zf(n);
  return r && (i = i[r] || i), Tv({ theme: i, name: t, props: e });
}
const oa = typeof window < "u" ? P.useLayoutEffect : P.useEffect;
function fE(e, t, n, r, i) {
  const [o, s] = P.useState(() =>
    i && n ? n(e).matches : r ? r(e).matches : t
  );
  return (
    oa(() => {
      if (!n) return;
      const a = n(e),
        l = () => {
          s(a.matches);
        };
      return (
        l(),
        a.addEventListener("change", l),
        () => {
          a.removeEventListener("change", l);
        }
      );
    }, [e, n]),
    o
  );
}
const dE = { ...Ql },
  Ev = dE.useSyncExternalStore;
function pE(e, t, n, r, i) {
  const o = P.useCallback(() => t, [t]),
    s = P.useMemo(() => {
      if (i && n) return () => n(e).matches;
      if (r !== null) {
        const { matches: c } = r(e);
        return () => c;
      }
      return o;
    }, [o, e, r, i, n]),
    [a, l] = P.useMemo(() => {
      if (n === null) return [o, () => () => {}];
      const c = n(e);
      return [
        () => c.matches,
        (f) => (
          c.addEventListener("change", f),
          () => {
            c.removeEventListener("change", f);
          }
        ),
      ];
    }, [o, n, e]);
  return Ev(l, a, s);
}
function hE(e, t = {}) {
  const n = yv(),
    r = typeof window < "u" && typeof window.matchMedia < "u",
    {
      defaultMatches: i = !1,
      matchMedia: o = r ? window.matchMedia : null,
      ssrMatchMedia: s = null,
      noSsr: a = !1,
    } = Tv({ name: "MuiUseMediaQuery", props: t, theme: n });
  let l = typeof e == "function" ? e(n) : e;
  return (
    (l = l.replace(/^@media( ?)/m, "")),
    (Ev !== void 0 ? pE : fE)(l, i, o, s, a)
  );
}
function mE(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function qf(e, t = 0, n = 1) {
  return mE(e, t, n);
}
function gE(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, i) =>
            i < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Nn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Nn(gE(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(ir(9, e));
  let r = e.substring(t + 1, e.length - 1),
    i;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        i
      ))
    )
      throw new Error(ir(10, i));
  } else r = r.split(",");
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: i }
  );
}
const yE = (e) => {
    const t = Nn(e);
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes("hsl") && r !== 0 ? `${n}%` : n))
      .join(" ");
  },
  bi = (e, t) => {
    try {
      return yE(e);
    } catch {
      return e;
    }
  };
function za(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.includes("rgb")
      ? (r = r.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.includes("color") ? (r = `${n} ${r.join(" ")}`) : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function bv(e) {
  e = Nn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    s = (u, c = (u + n / 30) % 12) =>
      i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), za({ type: a, values: l })
  );
}
function uc(e) {
  e = Nn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Nn(bv(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function vE(e, t) {
  const n = uc(e),
    r = uc(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function cc(e, t) {
  return (
    (e = Nn(e)),
    (t = qf(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    za(e)
  );
}
function ts(e, t, n) {
  try {
    return cc(e, t);
  } catch {
    return e;
  }
}
function Jf(e, t) {
  if (((e = Nn(e)), (t = qf(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return za(e);
}
function X(e, t, n) {
  try {
    return Jf(e, t);
  } catch {
    return e;
  }
}
function ed(e, t) {
  if (((e = Nn(e)), (t = qf(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return za(e);
}
function Z(e, t, n) {
  try {
    return ed(e, t);
  } catch {
    return e;
  }
}
function xE(e, t = 0.15) {
  return uc(e) > 0.5 ? Jf(e, t) : ed(e, t);
}
function ns(e, t, n) {
  try {
    return xE(e, t);
  } catch {
    return e;
  }
}
function Kh(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...i) {
            t.apply(this, i), n.apply(this, i);
          },
    () => {}
  );
}
function wE(e, t = 166) {
  let n;
  function r(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(n), (n = setTimeout(o, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function SE(e, t) {
  var n, r, i;
  return (
    P.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((i =
          (r = (n = e.type) == null ? void 0 : n._payload) == null
            ? void 0
            : r.value) == null
          ? void 0
          : i.muiName)
    ) !== -1
  );
}
function sr(e) {
  return (e && e.ownerDocument) || document;
}
function ni(e) {
  return sr(e).defaultView || window;
}
function fc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Gh(e) {
  const t = P.useRef(e);
  return (
    oa(() => {
      t.current = e;
    }),
    P.useRef((...n) => (0, t.current)(...n)).current
  );
}
function ur(...e) {
  return P.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              fc(n, t);
            });
          },
    e
  );
}
function CE(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function We(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const o = e[i];
    let s = "",
      a = !0;
    for (let l = 0; l < o.length; l += 1) {
      const u = o[l];
      u &&
        ((s += (a === !0 ? "" : " ") + t(u)),
        (a = !1),
        n && n[u] && (s += " " + n[u]));
    }
    r[i] = s;
  }
  return r;
}
function kE(e) {
  return typeof e == "string";
}
function TE(e, t, n) {
  return e === void 0 || kE(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...n } };
}
function Rv(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function Yh(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function PE(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o,
  } = e;
  if (!t) {
    const y = ie(
        n == null ? void 0 : n.className,
        o,
        i == null ? void 0 : i.className,
        r == null ? void 0 : r.className
      ),
      v = {
        ...(n == null ? void 0 : n.style),
        ...(i == null ? void 0 : i.style),
        ...(r == null ? void 0 : r.style),
      },
      x = { ...n, ...i, ...r };
    return (
      y.length > 0 && (x.className = y),
      Object.keys(v).length > 0 && (x.style = v),
      { props: x, internalRef: void 0 }
    );
  }
  const s = Rv({ ...i, ...r }),
    a = Yh(r),
    l = Yh(i),
    u = t(s),
    c = ie(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      o,
      i == null ? void 0 : i.className,
      r == null ? void 0 : r.className
    ),
    f = {
      ...(u == null ? void 0 : u.style),
      ...(n == null ? void 0 : n.style),
      ...(i == null ? void 0 : i.style),
      ...(r == null ? void 0 : r.style),
    },
    d = { ...u, ...n, ...l, ...a };
  return (
    c.length > 0 && (d.className = c),
    Object.keys(f).length > 0 && (d.style = f),
    { props: d, internalRef: u.ref }
  );
}
function EE(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ua(e) {
  var t;
  return parseInt(P.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
const bE = P.createContext(),
  RE = () => P.useContext(bE) ?? !1,
  AE = P.createContext(void 0);
function ME(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const i = t.components[n];
  return i.defaultProps
    ? ia(i.defaultProps, r)
    : !i.styleOverrides && !i.variants
    ? ia(i, r)
    : r;
}
function LE({ props: e, name: t }) {
  const n = P.useContext(AE);
  return ME({ props: e, name: t, theme: { components: n } });
}
const Qh = { theme: void 0 };
function NE(e) {
  let t, n;
  return function (i) {
    let o = t;
    return (
      (o === void 0 || i.theme !== n) &&
        ((Qh.theme = i.theme), (o = Sv(e(Qh))), (t = o), (n = i.theme)),
      o
    );
  };
}
function DE(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const i = r[0];
    return typeof i == "string" &&
      !i.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})`
      : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Xh = (e, t, n, r = []) => {
    let i = e;
    t.forEach((o, s) => {
      s === t.length - 1
        ? Array.isArray(i)
          ? (i[Number(o)] = n)
          : i && typeof i == "object" && (i[o] = n)
        : i &&
          typeof i == "object" &&
          (i[o] || (i[o] = r.includes(o) ? [] : {}), (i = i[o]));
    });
  },
  jE = (e, t, n) => {
    function r(i, o = [], s = []) {
      Object.entries(i).forEach(([a, l]) => {
        (!n || (n && !n([...o, a]))) &&
          l != null &&
          (typeof l == "object" && Object.keys(l).length > 0
            ? r(l, [...o, a], Array.isArray(l) ? [...s, a] : s)
            : t([...o, a], l, s));
      });
    }
    r(e);
  },
  OE = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
          e.includes(r)
        ) || e[e.length - 1].toLowerCase().includes("opacity")
        ? t
        : `${t}px`
      : t;
function zl(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    i = {},
    o = {},
    s = {};
  return (
    jE(
      e,
      (a, l, u) => {
        if (
          (typeof l == "string" || typeof l == "number") &&
          (!r || !r(a, l))
        ) {
          const c = `--${n ? `${n}-` : ""}${a.join("-")}`,
            f = OE(a, l);
          Object.assign(i, { [c]: f }),
            Xh(o, a, `var(${c})`, u),
            Xh(s, a, `var(${c}, ${f})`, u);
        }
      },
      (a) => a[0] === "vars"
    ),
    { css: i, vars: o, varsWithDefaults: s }
  );
}
function IE(e, t = {}) {
  const {
      getSelector: n = S,
      disableCssColorScheme: r,
      colorSchemeSelector: i,
    } = t,
    {
      colorSchemes: o = {},
      components: s,
      defaultColorScheme: a = "light",
      ...l
    } = e,
    { vars: u, css: c, varsWithDefaults: f } = zl(l, t);
  let d = f;
  const y = {},
    { [a]: v, ...x } = o;
  if (
    (Object.entries(x || {}).forEach(([m, w]) => {
      const { vars: k, css: E, varsWithDefaults: T } = zl(w, t);
      (d = rt(d, T)), (y[m] = { css: E, vars: k });
    }),
    v)
  ) {
    const { css: m, vars: w, varsWithDefaults: k } = zl(v, t);
    (d = rt(d, k)), (y[a] = { css: m, vars: w });
  }
  function S(m, w) {
    var E, T;
    let k = i;
    if (
      (i === "class" && (k = ".%s"),
      i === "data" && (k = "[data-%s]"),
      i != null &&
        i.startsWith("data-") &&
        !i.includes("%s") &&
        (k = `[${i}="%s"]`),
      m)
    ) {
      if (k === "media")
        return e.defaultColorScheme === m
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((T = (E = o[m]) == null ? void 0 : E.palette) == null
                  ? void 0
                  : T.mode) || m
              })`]: { ":root": w },
            };
      if (k)
        return e.defaultColorScheme === m
          ? `:root, ${k.replace("%s", String(m))}`
          : k.replace("%s", String(m));
    }
    return ":root";
  }
  return {
    vars: d,
    generateThemeVars: () => {
      let m = { ...u };
      return (
        Object.entries(y).forEach(([, { vars: w }]) => {
          m = rt(m, w);
        }),
        m
      );
    },
    generateStyleSheets: () => {
      var b, N;
      const m = [],
        w = e.defaultColorScheme || "light";
      function k(g, M) {
        Object.keys(M).length &&
          m.push(typeof g == "string" ? { [g]: { ...M } } : g);
      }
      k(n(void 0, { ...c }), c);
      const { [w]: E, ...T } = y;
      if (E) {
        const { css: g } = E,
          M =
            (N = (b = o[w]) == null ? void 0 : b.palette) == null
              ? void 0
              : N.mode,
          j = !r && M ? { colorScheme: M, ...g } : { ...g };
        k(n(w, { ...j }), j);
      }
      return (
        Object.entries(T).forEach(([g, { css: M }]) => {
          var F, V;
          const j =
              (V = (F = o[g]) == null ? void 0 : F.palette) == null
                ? void 0
                : V.mode,
            _ = !r && j ? { colorScheme: j, ...M } : { ...M };
          k(n(g, { ..._ }), _);
        }),
        m
      );
    },
  };
}
function _E(e) {
  return function (n) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${n})`
      : e
      ? e.startsWith("data-") && !e.includes("%s")
        ? `[${e}="${n}"] &`
        : e === "class"
        ? `.${n} &`
        : e === "data"
        ? `[data-${n}] &`
        : `${e.replace("%s", n)} &`
      : "&";
  };
}
const VE = Ba(),
  $E = cE("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${ke(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  FE = (e) => Pv({ props: e, name: "MuiContainer", defaultTheme: VE }),
  BE = (e, t) => {
    const n = (l) => Ve(t, l),
      { classes: r, fixed: i, disableGutters: o, maxWidth: s } = e,
      a = {
        root: [
          "root",
          s && `maxWidth${ke(String(s))}`,
          i && "fixed",
          o && "disableGutters",
        ],
      };
    return We(a, n, r);
  };
function zE(e = {}) {
  const {
      createStyledComponent: t = $E,
      useThemeProps: n = FE,
      componentName: r = "MuiContainer",
    } = e,
    i = t(
      ({ theme: s, ownerState: a }) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        ...(!a.disableGutters && {
          paddingLeft: s.spacing(2),
          paddingRight: s.spacing(2),
          [s.breakpoints.up("sm")]: {
            paddingLeft: s.spacing(3),
            paddingRight: s.spacing(3),
          },
        }),
      }),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, u) => {
          const c = u,
            f = s.breakpoints.values[c];
          return (
            f !== 0 &&
              (l[s.breakpoints.up(c)] = {
                maxWidth: `${f}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) => ({
        ...(a.maxWidth === "xs" && {
          [s.breakpoints.up("xs")]: {
            maxWidth: Math.max(s.breakpoints.values.xs, 444),
          },
        }),
        ...(a.maxWidth &&
          a.maxWidth !== "xs" && {
            [s.breakpoints.up(a.maxWidth)]: {
              maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                s.breakpoints.unit
              }`,
            },
          }),
      })
    );
  return P.forwardRef(function (a, l) {
    const u = n(a),
      {
        className: c,
        component: f = "div",
        disableGutters: d = !1,
        fixed: y = !1,
        maxWidth: v = "lg",
        classes: x,
        ...S
      } = u,
      h = { ...u, component: f, disableGutters: d, fixed: y, maxWidth: v },
      p = BE(h, r);
    return C.jsx(i, {
      as: f,
      ownerState: h,
      className: ie(p.root, c),
      ref: l,
      ...S,
    });
  });
}
function Av() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: po.white, default: po.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const UE = Av();
function Mv() {
  return {
    text: {
      primary: po.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: po.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const Zh = Mv();
function qh(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = ed(e.main, i))
      : t === "dark" && (e.dark = Jf(e.main, o)));
}
function WE(e = "light") {
  return e === "dark"
    ? { main: hr[200], light: hr[50], dark: hr[400] }
    : { main: hr[700], light: hr[400], dark: hr[800] };
}
function HE(e = "light") {
  return e === "dark"
    ? { main: pr[200], light: pr[50], dark: pr[400] }
    : { main: pr[500], light: pr[300], dark: pr[700] };
}
function KE(e = "light") {
  return e === "dark"
    ? { main: dr[500], light: dr[300], dark: dr[700] }
    : { main: dr[700], light: dr[400], dark: dr[800] };
}
function GE(e = "light") {
  return e === "dark"
    ? { main: mr[400], light: mr[300], dark: mr[700] }
    : { main: mr[700], light: mr[500], dark: mr[900] };
}
function YE(e = "light") {
  return e === "dark"
    ? { main: gr[400], light: gr[300], dark: gr[700] }
    : { main: gr[800], light: gr[500], dark: gr[900] };
}
function QE(e = "light") {
  return e === "dark"
    ? { main: vi[400], light: vi[300], dark: vi[700] }
    : { main: "#ed6c02", light: vi[500], dark: vi[900] };
}
function td(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
      ...i
    } = e,
    o = e.primary || WE(t),
    s = e.secondary || HE(t),
    a = e.error || KE(t),
    l = e.info || GE(t),
    u = e.success || YE(t),
    c = e.warning || QE(t);
  function f(x) {
    return vE(x, Zh.text.primary) >= n ? Zh.text.primary : UE.text.primary;
  }
  const d = ({
    color: x,
    name: S,
    mainShade: h = 500,
    lightShade: p = 300,
    darkShade: m = 700,
  }) => {
    if (
      ((x = { ...x }),
      !x.main && x[h] && (x.main = x[h]),
      !x.hasOwnProperty("main"))
    )
      throw new Error(ir(11, S ? ` (${S})` : "", h));
    if (typeof x.main != "string")
      throw new Error(ir(12, S ? ` (${S})` : "", JSON.stringify(x.main)));
    return (
      qh(x, "light", p, r),
      qh(x, "dark", m, r),
      x.contrastText || (x.contrastText = f(x.main)),
      x
    );
  };
  let y;
  return (
    t === "light" ? (y = Av()) : t === "dark" && (y = Mv()),
    rt(
      {
        common: { ...po },
        mode: t,
        primary: d({ color: o, name: "primary" }),
        secondary: d({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: a, name: "error" }),
        warning: d({ color: c, name: "warning" }),
        info: d({ color: l, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: tT,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
        ...y,
      },
      i
    )
  );
}
function XE(e) {
  const t = {};
  return (
    Object.entries(e).forEach((r) => {
      const [i, o] = r;
      typeof o == "object" &&
        (t[i] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${
          o.fontVariant ? `${o.fontVariant} ` : ""
        }${o.fontWeight ? `${o.fontWeight} ` : ""}${
          o.fontStretch ? `${o.fontStretch} ` : ""
        }${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${
          o.fontFamily || ""
        }`);
    }),
    t
  );
}
function ZE(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function qE(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Jh = { textTransform: "uppercase" },
  em = '"Roboto", "Helvetica", "Arial", sans-serif';
function JE(e, t) {
  const {
      fontFamily: n = em,
      fontSize: r = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: l = 16,
      allVariants: u,
      pxToRem: c,
      ...f
    } = typeof t == "function" ? t(e) : t,
    d = r / 14,
    y = c || ((S) => `${(S / l) * d}rem`),
    v = (S, h, p, m, w) => ({
      fontFamily: n,
      fontWeight: S,
      fontSize: y(h),
      lineHeight: p,
      ...(n === em ? { letterSpacing: `${qE(m / h)}em` } : {}),
      ...w,
      ...u,
    }),
    x = {
      h1: v(i, 96, 1.167, -1.5),
      h2: v(i, 60, 1.2, -0.5),
      h3: v(o, 48, 1.167, 0),
      h4: v(o, 34, 1.235, 0.25),
      h5: v(o, 24, 1.334, 0),
      h6: v(s, 20, 1.6, 0.15),
      subtitle1: v(o, 16, 1.75, 0.15),
      subtitle2: v(s, 14, 1.57, 0.1),
      body1: v(o, 16, 1.5, 0.15),
      body2: v(o, 14, 1.43, 0.15),
      button: v(s, 14, 1.75, 0.4, Jh),
      caption: v(o, 12, 1.66, 0.4),
      overline: v(o, 12, 2.66, 1, Jh),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return rt(
    {
      htmlFontSize: l,
      pxToRem: y,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: i,
      fontWeightRegular: o,
      fontWeightMedium: s,
      fontWeightBold: a,
      ...x,
    },
    f,
    { clone: !1 }
  );
}
const e3 = 0.2,
  t3 = 0.14,
  n3 = 0.12;
function ne(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${e3})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${t3})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${n3})`,
  ].join(",");
}
const r3 = [
    "none",
    ne(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ne(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ne(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ne(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ne(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ne(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ne(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ne(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ne(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ne(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ne(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ne(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ne(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ne(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ne(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ne(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ne(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ne(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ne(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ne(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ne(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ne(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ne(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ne(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  i3 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  o3 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function tm(e) {
  return `${Math.round(e)}ms`;
}
function s3(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function a3(e) {
  const t = { ...i3, ...e.easing },
    n = { ...o3, ...e.duration };
  return {
    getAutoHeightDuration: s3,
    create: (i = ["all"], o = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...u
      } = o;
      return (Array.isArray(i) ? i : [i])
        .map(
          (c) =>
            `${c} ${typeof s == "string" ? s : tm(s)} ${a} ${
              typeof l == "string" ? l : tm(l)
            }`
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: n,
  };
}
const l3 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function u3(e) {
  return (
    _t(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function Lv(e = {}) {
  const t = { ...e };
  function n(r) {
    const i = Object.entries(r);
    for (let o = 0; o < i.length; o++) {
      const [s, a] = i[o];
      !u3(a) || s.startsWith("unstable_")
        ? delete r[s]
        : _t(a) && ((r[s] = { ...a }), n(r[s]));
    }
  }
  return (
    n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function dc(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: o = {},
    transitions: s = {},
    typography: a = {},
    shape: l,
    ...u
  } = e;
  if (e.vars) throw new Error(ir(20));
  const c = td(o),
    f = Ba(e);
  let d = rt(f, {
    mixins: ZE(f.breakpoints, r),
    palette: c,
    shadows: r3.slice(),
    typography: JE(c, a),
    transitions: a3(s),
    zIndex: { ...l3 },
  });
  return (
    (d = rt(d, u)),
    (d = t.reduce((y, v) => rt(y, v), d)),
    (d.unstable_sxConfig = {
      ...Ao,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (d.unstable_sx = function (v) {
      return or({ sx: v, theme: this });
    }),
    (d.toRuntimeSource = Lv),
    d
  );
}
function pc(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const c3 = [...Array(25)].map((e, t) => {
  if (t === 0) return "none";
  const n = pc(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Nv(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function Dv(e) {
  return e === "dark" ? c3 : [];
}
function f3(e) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...i } = e,
    o = td(t);
  return {
    palette: o,
    opacity: { ...Nv(o.mode), ...n },
    overlays: r || Dv(o.mode),
    ...i,
  };
}
function d3(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const p3 = (e) => [
    ...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  h3 = (e) => (t, n) => {
    const r = e.rootSelector || ":root",
      i = e.colorSchemeSelector;
    let o = i;
    if (
      (i === "class" && (o = ".%s"),
      i === "data" && (o = "[data-%s]"),
      i != null &&
        i.startsWith("data-") &&
        !i.includes("%s") &&
        (o = `[${i}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const s = {};
        return (
          p3(e.cssVarPrefix).forEach((a) => {
            (s[a] = n[a]), delete n[a];
          }),
          o === "media"
            ? { [r]: n, "@media (prefers-color-scheme: dark)": { [r]: s } }
            : o
            ? { [o.replace("%s", t)]: s, [`${r}, ${o.replace("%s", t)}`]: n }
            : { [r]: { ...n, ...s } }
        );
      }
      if (o && o !== "media") return `${r}, ${o.replace("%s", String(t))}`;
    } else if (t) {
      if (o === "media")
        return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } };
      if (o) return o.replace("%s", String(t));
    }
    return r;
  };
function m3(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function R(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Ri(e) {
  return !e || !e.startsWith("hsl") ? e : bv(e);
}
function Wt(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = bi(
      Ri(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function g3(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
    ? e
    : "8px";
}
const Lt = (e) => {
    try {
      return e();
    } catch {}
  },
  y3 = (e = "mui") => DE(e);
function Ul(e, t, n, r) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = f3({
      ...t,
      palette: { mode: i, ...(t == null ? void 0 : t.palette) },
    });
    return;
  }
  const { palette: o, ...s } = dc({
    ...n,
    palette: { mode: i, ...(t == null ? void 0 : t.palette) },
  });
  return (
    (e[r] = {
      ...t,
      palette: o,
      opacity: { ...Nv(i), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || Dv(i),
    }),
    s
  );
}
function v3(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: i = !1,
      cssVarPrefix: o = "mui",
      shouldSkipGeneratingVar: s = d3,
      colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
      rootSelector: l = ":root",
      ...u
    } = e,
    c = Object.keys(n)[0],
    f = r || (n.light && c !== "light" ? "light" : c),
    d = y3(o),
    { [f]: y, light: v, dark: x, ...S } = n,
    h = { ...S };
  let p = y;
  if (
    (((f === "dark" && !("dark" in n)) || (f === "light" && !("light" in n))) &&
      (p = !0),
    !p)
  )
    throw new Error(ir(21, f));
  const m = Ul(h, p, u, f);
  v && !h.light && Ul(h, v, void 0, "light"),
    x && !h.dark && Ul(h, x, void 0, "dark");
  let w = {
    defaultColorScheme: f,
    ...m,
    cssVarPrefix: o,
    colorSchemeSelector: a,
    rootSelector: l,
    getCssVar: d,
    colorSchemes: h,
    font: { ...XE(m.typography), ...m.font },
    spacing: g3(u.spacing),
  };
  Object.keys(w.colorSchemes).forEach((N) => {
    const g = w.colorSchemes[N].palette,
      M = (j) => {
        const _ = j.split("-"),
          F = _[1],
          V = _[2];
        return d(j, g[F][V]);
      };
    if (
      (g.mode === "light" &&
        (R(g.common, "background", "#fff"),
        R(g.common, "onBackground", "#000")),
      g.mode === "dark" &&
        (R(g.common, "background", "#000"),
        R(g.common, "onBackground", "#fff")),
      m3(g, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      g.mode === "light")
    ) {
      R(g.Alert, "errorColor", X(g.error.light, 0.6)),
        R(g.Alert, "infoColor", X(g.info.light, 0.6)),
        R(g.Alert, "successColor", X(g.success.light, 0.6)),
        R(g.Alert, "warningColor", X(g.warning.light, 0.6)),
        R(g.Alert, "errorFilledBg", M("palette-error-main")),
        R(g.Alert, "infoFilledBg", M("palette-info-main")),
        R(g.Alert, "successFilledBg", M("palette-success-main")),
        R(g.Alert, "warningFilledBg", M("palette-warning-main")),
        R(
          g.Alert,
          "errorFilledColor",
          Lt(() => g.getContrastText(g.error.main))
        ),
        R(
          g.Alert,
          "infoFilledColor",
          Lt(() => g.getContrastText(g.info.main))
        ),
        R(
          g.Alert,
          "successFilledColor",
          Lt(() => g.getContrastText(g.success.main))
        ),
        R(
          g.Alert,
          "warningFilledColor",
          Lt(() => g.getContrastText(g.warning.main))
        ),
        R(g.Alert, "errorStandardBg", Z(g.error.light, 0.9)),
        R(g.Alert, "infoStandardBg", Z(g.info.light, 0.9)),
        R(g.Alert, "successStandardBg", Z(g.success.light, 0.9)),
        R(g.Alert, "warningStandardBg", Z(g.warning.light, 0.9)),
        R(g.Alert, "errorIconColor", M("palette-error-main")),
        R(g.Alert, "infoIconColor", M("palette-info-main")),
        R(g.Alert, "successIconColor", M("palette-success-main")),
        R(g.Alert, "warningIconColor", M("palette-warning-main")),
        R(g.AppBar, "defaultBg", M("palette-grey-100")),
        R(g.Avatar, "defaultBg", M("palette-grey-400")),
        R(g.Button, "inheritContainedBg", M("palette-grey-300")),
        R(g.Button, "inheritContainedHoverBg", M("palette-grey-A100")),
        R(g.Chip, "defaultBorder", M("palette-grey-400")),
        R(g.Chip, "defaultAvatarColor", M("palette-grey-700")),
        R(g.Chip, "defaultIconColor", M("palette-grey-700")),
        R(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        R(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        R(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        R(g.LinearProgress, "primaryBg", Z(g.primary.main, 0.62)),
        R(g.LinearProgress, "secondaryBg", Z(g.secondary.main, 0.62)),
        R(g.LinearProgress, "errorBg", Z(g.error.main, 0.62)),
        R(g.LinearProgress, "infoBg", Z(g.info.main, 0.62)),
        R(g.LinearProgress, "successBg", Z(g.success.main, 0.62)),
        R(g.LinearProgress, "warningBg", Z(g.warning.main, 0.62)),
        R(g.Skeleton, "bg", `rgba(${M("palette-text-primaryChannel")} / 0.11)`),
        R(g.Slider, "primaryTrack", Z(g.primary.main, 0.62)),
        R(g.Slider, "secondaryTrack", Z(g.secondary.main, 0.62)),
        R(g.Slider, "errorTrack", Z(g.error.main, 0.62)),
        R(g.Slider, "infoTrack", Z(g.info.main, 0.62)),
        R(g.Slider, "successTrack", Z(g.success.main, 0.62)),
        R(g.Slider, "warningTrack", Z(g.warning.main, 0.62));
      const j = ns(g.background.default, 0.8);
      R(g.SnackbarContent, "bg", j),
        R(
          g.SnackbarContent,
          "color",
          Lt(() => g.getContrastText(j))
        ),
        R(g.SpeedDialAction, "fabHoverBg", ns(g.background.paper, 0.15)),
        R(g.StepConnector, "border", M("palette-grey-400")),
        R(g.StepContent, "border", M("palette-grey-400")),
        R(g.Switch, "defaultColor", M("palette-common-white")),
        R(g.Switch, "defaultDisabledColor", M("palette-grey-100")),
        R(g.Switch, "primaryDisabledColor", Z(g.primary.main, 0.62)),
        R(g.Switch, "secondaryDisabledColor", Z(g.secondary.main, 0.62)),
        R(g.Switch, "errorDisabledColor", Z(g.error.main, 0.62)),
        R(g.Switch, "infoDisabledColor", Z(g.info.main, 0.62)),
        R(g.Switch, "successDisabledColor", Z(g.success.main, 0.62)),
        R(g.Switch, "warningDisabledColor", Z(g.warning.main, 0.62)),
        R(g.TableCell, "border", Z(ts(g.divider, 1), 0.88)),
        R(g.Tooltip, "bg", ts(g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      R(g.Alert, "errorColor", Z(g.error.light, 0.6)),
        R(g.Alert, "infoColor", Z(g.info.light, 0.6)),
        R(g.Alert, "successColor", Z(g.success.light, 0.6)),
        R(g.Alert, "warningColor", Z(g.warning.light, 0.6)),
        R(g.Alert, "errorFilledBg", M("palette-error-dark")),
        R(g.Alert, "infoFilledBg", M("palette-info-dark")),
        R(g.Alert, "successFilledBg", M("palette-success-dark")),
        R(g.Alert, "warningFilledBg", M("palette-warning-dark")),
        R(
          g.Alert,
          "errorFilledColor",
          Lt(() => g.getContrastText(g.error.dark))
        ),
        R(
          g.Alert,
          "infoFilledColor",
          Lt(() => g.getContrastText(g.info.dark))
        ),
        R(
          g.Alert,
          "successFilledColor",
          Lt(() => g.getContrastText(g.success.dark))
        ),
        R(
          g.Alert,
          "warningFilledColor",
          Lt(() => g.getContrastText(g.warning.dark))
        ),
        R(g.Alert, "errorStandardBg", X(g.error.light, 0.9)),
        R(g.Alert, "infoStandardBg", X(g.info.light, 0.9)),
        R(g.Alert, "successStandardBg", X(g.success.light, 0.9)),
        R(g.Alert, "warningStandardBg", X(g.warning.light, 0.9)),
        R(g.Alert, "errorIconColor", M("palette-error-main")),
        R(g.Alert, "infoIconColor", M("palette-info-main")),
        R(g.Alert, "successIconColor", M("palette-success-main")),
        R(g.Alert, "warningIconColor", M("palette-warning-main")),
        R(g.AppBar, "defaultBg", M("palette-grey-900")),
        R(g.AppBar, "darkBg", M("palette-background-paper")),
        R(g.AppBar, "darkColor", M("palette-text-primary")),
        R(g.Avatar, "defaultBg", M("palette-grey-600")),
        R(g.Button, "inheritContainedBg", M("palette-grey-800")),
        R(g.Button, "inheritContainedHoverBg", M("palette-grey-700")),
        R(g.Chip, "defaultBorder", M("palette-grey-700")),
        R(g.Chip, "defaultAvatarColor", M("palette-grey-300")),
        R(g.Chip, "defaultIconColor", M("palette-grey-300")),
        R(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        R(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        R(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        R(g.LinearProgress, "primaryBg", X(g.primary.main, 0.5)),
        R(g.LinearProgress, "secondaryBg", X(g.secondary.main, 0.5)),
        R(g.LinearProgress, "errorBg", X(g.error.main, 0.5)),
        R(g.LinearProgress, "infoBg", X(g.info.main, 0.5)),
        R(g.LinearProgress, "successBg", X(g.success.main, 0.5)),
        R(g.LinearProgress, "warningBg", X(g.warning.main, 0.5)),
        R(g.Skeleton, "bg", `rgba(${M("palette-text-primaryChannel")} / 0.13)`),
        R(g.Slider, "primaryTrack", X(g.primary.main, 0.5)),
        R(g.Slider, "secondaryTrack", X(g.secondary.main, 0.5)),
        R(g.Slider, "errorTrack", X(g.error.main, 0.5)),
        R(g.Slider, "infoTrack", X(g.info.main, 0.5)),
        R(g.Slider, "successTrack", X(g.success.main, 0.5)),
        R(g.Slider, "warningTrack", X(g.warning.main, 0.5));
      const j = ns(g.background.default, 0.98);
      R(g.SnackbarContent, "bg", j),
        R(
          g.SnackbarContent,
          "color",
          Lt(() => g.getContrastText(j))
        ),
        R(g.SpeedDialAction, "fabHoverBg", ns(g.background.paper, 0.15)),
        R(g.StepConnector, "border", M("palette-grey-600")),
        R(g.StepContent, "border", M("palette-grey-600")),
        R(g.Switch, "defaultColor", M("palette-grey-300")),
        R(g.Switch, "defaultDisabledColor", M("palette-grey-600")),
        R(g.Switch, "primaryDisabledColor", X(g.primary.main, 0.55)),
        R(g.Switch, "secondaryDisabledColor", X(g.secondary.main, 0.55)),
        R(g.Switch, "errorDisabledColor", X(g.error.main, 0.55)),
        R(g.Switch, "infoDisabledColor", X(g.info.main, 0.55)),
        R(g.Switch, "successDisabledColor", X(g.success.main, 0.55)),
        R(g.Switch, "warningDisabledColor", X(g.warning.main, 0.55)),
        R(g.TableCell, "border", X(ts(g.divider, 1), 0.68)),
        R(g.Tooltip, "bg", ts(g.grey[700], 0.92));
    }
    Wt(g.background, "default"),
      Wt(g.background, "paper"),
      Wt(g.common, "background"),
      Wt(g.common, "onBackground"),
      Wt(g, "divider"),
      Object.keys(g).forEach((j) => {
        const _ = g[j];
        _ &&
          typeof _ == "object" &&
          (_.main && R(g[j], "mainChannel", bi(Ri(_.main))),
          _.light && R(g[j], "lightChannel", bi(Ri(_.light))),
          _.dark && R(g[j], "darkChannel", bi(Ri(_.dark))),
          _.contrastText &&
            R(g[j], "contrastTextChannel", bi(Ri(_.contrastText))),
          j === "text" && (Wt(g[j], "primary"), Wt(g[j], "secondary")),
          j === "action" &&
            (_.active && Wt(g[j], "active"),
            _.selected && Wt(g[j], "selected")));
      });
  }),
    (w = t.reduce((N, g) => rt(N, g), w));
  const k = {
      prefix: o,
      disableCssColorScheme: i,
      shouldSkipGeneratingVar: s,
      getSelector: h3(w),
    },
    { vars: E, generateThemeVars: T, generateStyleSheets: b } = IE(w, k);
  return (
    (w.vars = E),
    Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([N, g]) => {
      w[N] = g;
    }),
    (w.generateThemeVars = T),
    (w.generateStyleSheets = b),
    (w.generateSpacing = function () {
      return gv(u.spacing, Qf(this));
    }),
    (w.getColorSchemeSelector = _E(a)),
    (w.spacing = w.generateSpacing()),
    (w.shouldSkipGeneratingVar = s),
    (w.unstable_sxConfig = {
      ...Ao,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (w.unstable_sx = function (g) {
      return or({ sx: g, theme: this });
    }),
    (w.toRuntimeSource = Lv),
    w
  );
}
function nm(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = {
      ...(n !== !0 && n),
      palette: td({ ...(n === !0 ? {} : n.palette), mode: t }),
    });
}
function jv(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: i = n ? void 0 : { light: !0 },
      defaultColorScheme: o = n == null ? void 0 : n.mode,
      ...s
    } = e,
    a = o || "light",
    l = i == null ? void 0 : i[a],
    u = {
      ...i,
      ...(n
        ? { [a]: { ...(typeof l != "boolean" && l), palette: n } }
        : void 0),
    };
  if (r === !1) {
    if (!("colorSchemes" in e)) return dc(e, ...t);
    let c = n;
    "palette" in e ||
      (u[a] &&
        (u[a] !== !0
          ? (c = u[a].palette)
          : a === "dark" && (c = { mode: "dark" })));
    const f = dc({ ...e, palette: c }, ...t);
    return (
      (f.defaultColorScheme = a),
      (f.colorSchemes = u),
      f.palette.mode === "light" &&
        ((f.colorSchemes.light = {
          ...(u.light !== !0 && u.light),
          palette: f.palette,
        }),
        nm(f, "dark", u.dark)),
      f.palette.mode === "dark" &&
        ((f.colorSchemes.dark = {
          ...(u.dark !== !0 && u.dark),
          palette: f.palette,
        }),
        nm(f, "light", u.light)),
      f
    );
  }
  return (
    !n && !("light" in u) && a === "light" && (u.light = !0),
    v3(
      {
        ...s,
        colorSchemes: u,
        defaultColorScheme: a,
        ...(typeof r != "boolean" && r),
      },
      ...t
    )
  );
}
const nd = jv();
function Mo() {
  const e = Zf(nd);
  return e[Ma] || e;
}
function x3({ props: e, name: t }) {
  return Pv({ props: e, name: t, defaultTheme: nd, themeId: Ma });
}
function w3(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ov = (e) => w3(e) && e !== "classes",
  ue = kv({ themeId: Ma, defaultTheme: nd, rootShouldForwardProp: Ov });
function S3() {
  return vv;
}
const vt = NE;
function Ze(e) {
  return LE(e);
}
function C3(e) {
  return Ve("MuiSvgIcon", e);
}
Ue("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const k3 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      i = {
        root: ["root", t !== "inherit" && `color${ke(t)}`, `fontSize${ke(n)}`],
      };
    return We(i, C3, r);
  },
  T3 = ue("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${ke(n.color)}`],
        t[`fontSize${ke(n.fontSize)}`],
      ];
    },
  })(
    vt(({ theme: e }) => {
      var t, n, r, i, o, s, a, l, u, c, f, d, y, v;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (i = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : i.call(t, "fill", {
                duration:
                  (r =
                    (n = (e.vars ?? e).transitions) == null
                      ? void 0
                      : n.duration) == null
                    ? void 0
                    : r.shorter,
              }),
        variants: [
          { props: (x) => !x.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((s = (o = e.typography) == null ? void 0 : o.pxToRem) == null
                  ? void 0
                  : s.call(o, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null
                  ? void 0
                  : l.call(a, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : c.call(u, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, x]) => x && x.main)
            .map(([x]) => {
              var S, h;
              return {
                props: { color: x },
                style: {
                  color:
                    (h = (S = (e.vars ?? e).palette) == null ? void 0 : S[x]) ==
                    null
                      ? void 0
                      : h.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (d = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) ==
                null
                  ? void 0
                  : d.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (v = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) ==
                null
                  ? void 0
                  : v.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  yo = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiSvgIcon" }),
      {
        children: i,
        className: o,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: f,
        viewBox: d = "0 0 24 24",
        ...y
      } = r,
      v = P.isValidElement(i) && i.type === "svg",
      x = {
        ...r,
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: d,
        hasSvgAsChild: v,
      },
      S = {};
    c || (S.viewBox = d);
    const h = k3(x);
    return C.jsxs(T3, {
      as: a,
      className: ie(h.root, o),
      focusable: "false",
      color: u,
      "aria-hidden": f ? void 0 : !0,
      role: f ? "img" : void 0,
      ref: n,
      ...S,
      ...y,
      ...(v && i.props),
      ownerState: x,
      children: [
        v ? i.props.children : i,
        f ? C.jsx("title", { children: f }) : null,
      ],
    });
  });
yo && (yo.muiName = "SvgIcon");
function Iv(e, t) {
  function n(r, i) {
    return C.jsx(yo, { "data-testid": `${t}Icon`, ref: i, ...r, children: e });
  }
  return (n.muiName = yo.muiName), P.memo(P.forwardRef(n));
}
var Q = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rd = Symbol.for("react.element"),
  id = Symbol.for("react.portal"),
  Wa = Symbol.for("react.fragment"),
  Ha = Symbol.for("react.strict_mode"),
  Ka = Symbol.for("react.profiler"),
  Ga = Symbol.for("react.provider"),
  Ya = Symbol.for("react.context"),
  P3 = Symbol.for("react.server_context"),
  Qa = Symbol.for("react.forward_ref"),
  Xa = Symbol.for("react.suspense"),
  Za = Symbol.for("react.suspense_list"),
  qa = Symbol.for("react.memo"),
  Ja = Symbol.for("react.lazy"),
  E3 = Symbol.for("react.offscreen"),
  _v;
_v = Symbol.for("react.module.reference");
function xt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rd:
        switch (((e = e.type), e)) {
          case Wa:
          case Ka:
          case Ha:
          case Xa:
          case Za:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case P3:
              case Ya:
              case Qa:
              case Ja:
              case qa:
              case Ga:
                return e;
              default:
                return t;
            }
        }
      case id:
        return t;
    }
  }
}
Q.ContextConsumer = Ya;
Q.ContextProvider = Ga;
Q.Element = rd;
Q.ForwardRef = Qa;
Q.Fragment = Wa;
Q.Lazy = Ja;
Q.Memo = qa;
Q.Portal = id;
Q.Profiler = Ka;
Q.StrictMode = Ha;
Q.Suspense = Xa;
Q.SuspenseList = Za;
Q.isAsyncMode = function () {
  return !1;
};
Q.isConcurrentMode = function () {
  return !1;
};
Q.isContextConsumer = function (e) {
  return xt(e) === Ya;
};
Q.isContextProvider = function (e) {
  return xt(e) === Ga;
};
Q.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === rd;
};
Q.isForwardRef = function (e) {
  return xt(e) === Qa;
};
Q.isFragment = function (e) {
  return xt(e) === Wa;
};
Q.isLazy = function (e) {
  return xt(e) === Ja;
};
Q.isMemo = function (e) {
  return xt(e) === qa;
};
Q.isPortal = function (e) {
  return xt(e) === id;
};
Q.isProfiler = function (e) {
  return xt(e) === Ka;
};
Q.isStrictMode = function (e) {
  return xt(e) === Ha;
};
Q.isSuspense = function (e) {
  return xt(e) === Xa;
};
Q.isSuspenseList = function (e) {
  return xt(e) === Za;
};
Q.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wa ||
    e === Ka ||
    e === Ha ||
    e === Xa ||
    e === Za ||
    e === E3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ja ||
        e.$$typeof === qa ||
        e.$$typeof === Ga ||
        e.$$typeof === Ya ||
        e.$$typeof === Qa ||
        e.$$typeof === _v ||
        e.getModuleId !== void 0))
  );
};
Q.typeOf = xt;
function b3(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function hc(e, t) {
  return (
    (hc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    hc(e, t)
  );
}
function R3(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    hc(e, t);
}
const rm = { disabled: !1 },
  Vv = xr.createContext(null);
var A3 = function (t) {
    return t.scrollTop;
  },
  Ai = "unmounted",
  Wn = "exited",
  Hn = "entering",
  vr = "entered",
  mc = "exiting",
  Ut = (function (e) {
    R3(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var s = i,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (o.appearStatus = null),
        r.in
          ? a
            ? ((l = Wn), (o.appearStatus = Hn))
            : (l = vr)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = Ai)
          : (l = Wn),
        (o.state = { status: l }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (i, o) {
      var s = i.in;
      return s && o.status === Ai ? { status: Wn } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var o = null;
        if (i !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Hn && s !== vr && (o = Hn)
            : (s === Hn || s === vr) && (o = mc);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          o,
          s,
          a;
        return (
          (o = s = a = i),
          i != null &&
            typeof i != "number" &&
            ((o = i.exit),
            (s = i.enter),
            (a = i.appear !== void 0 ? i.appear : s)),
          { exit: o, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (i, o) {
        if ((i === void 0 && (i = !1), o !== null))
          if ((this.cancelNextCallback(), o === Hn)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Qo.findDOMNode(this);
              s && A3(s);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Wn &&
            this.setState({ status: Ai });
      }),
      (n.performEnter = function (i) {
        var o = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : i,
          l = this.props.nodeRef ? [a] : [Qo.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          f = this.getTimeouts(),
          d = a ? f.appear : f.enter;
        if ((!i && !s) || rm.disabled) {
          this.safeSetState({ status: vr }, function () {
            o.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Hn }, function () {
            o.props.onEntering(u, c),
              o.onTransitionEnd(d, function () {
                o.safeSetState({ status: vr }, function () {
                  o.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          o = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Qo.findDOMNode(this);
        if (!o || rm.disabled) {
          this.safeSetState({ status: Wn }, function () {
            i.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: mc }, function () {
            i.props.onExiting(a),
              i.onTransitionEnd(s.exit, function () {
                i.safeSetState({ status: Wn }, function () {
                  i.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, o) {
        (o = this.setNextCallback(o)), this.setState(i, o);
      }),
      (n.setNextCallback = function (i) {
        var o = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (o.nextCallback = null), i(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, o) {
        this.setNextCallback(o);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Qo.findDOMNode(this),
          a = i == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === Ai) return null;
        var o = this.props,
          s = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var a = b3(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return xr.createElement(
          Vv.Provider,
          { value: null },
          typeof s == "function"
            ? s(i, a)
            : xr.cloneElement(xr.Children.only(s), a)
        );
      }),
      t
    );
  })(xr.Component);
Ut.contextType = Vv;
Ut.propTypes = {};
function yr() {}
Ut.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yr,
  onEntering: yr,
  onEntered: yr,
  onExit: yr,
  onExiting: yr,
  onExited: yr,
};
Ut.UNMOUNTED = Ai;
Ut.EXITED = Wn;
Ut.ENTERING = Hn;
Ut.ENTERED = vr;
Ut.EXITING = mc;
const $v = (e) => e.scrollTop;
function sa(e, t) {
  const { timeout: n, easing: r, style: i = {} } = e;
  return {
    duration:
      i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing:
      i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay,
  };
}
function M3(e) {
  return Ve("MuiPaper", e);
}
Ue("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const L3 = (e) => {
    const { square: t, elevation: n, variant: r, classes: i } = e,
      o = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return We(o, M3, i);
  },
  N3 = ue("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(
    vt(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: t }) => !t.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    }))
  ),
  Fv = P.forwardRef(function (t, n) {
    var y;
    const r = Ze({ props: t, name: "MuiPaper" }),
      i = Mo(),
      {
        className: o,
        component: s = "div",
        elevation: a = 1,
        square: l = !1,
        variant: u = "elevation",
        ...c
      } = r,
      f = { ...r, component: s, elevation: a, square: l, variant: u },
      d = L3(f);
    return C.jsx(N3, {
      as: s,
      ownerState: f,
      className: ie(d.root, o),
      ref: n,
      ...c,
      style: {
        ...(u === "elevation" && {
          "--Paper-shadow": (i.vars || i).shadows[a],
          ...(i.vars && {
            "--Paper-overlay": (y = i.vars.overlays) == null ? void 0 : y[a],
          }),
          ...(!i.vars &&
            i.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${cc("#fff", pc(a))}, ${cc(
                "#fff",
                pc(a)
              )})`,
            }),
        }),
        ...c.style,
      },
    });
  });
function ri(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: i,
      externalForwardedProps: o,
      getSlotOwnerState: s,
      internalForwardedProps: a,
      ...l
    } = t,
    {
      component: u,
      slots: c = { [e]: void 0 },
      slotProps: f = { [e]: void 0 },
      ...d
    } = o,
    y = c[e] || r,
    v = EE(f[e], i),
    {
      props: { component: x, ...S },
      internalRef: h,
    } = PE({
      className: n,
      ...l,
      externalForwardedProps: e === "root" ? d : void 0,
      externalSlotProps: v,
    }),
    p = ur(h, v == null ? void 0 : v.ref, t.ref),
    m = s ? s(S) : {},
    w = { ...i, ...m },
    k = e === "root" ? x || u : x,
    E = TE(
      y,
      {
        ...(e === "root" && !u && !c[e] && a),
        ...(e !== "root" && !c[e] && a),
        ...S,
        ...(k && { as: k }),
        ref: p,
      },
      w
    );
  return (
    Object.keys(m).forEach((T) => {
      delete E[T];
    }),
    [y, E]
  );
}
function D3(e) {
  return typeof e.main == "string";
}
function j3(e, t = []) {
  if (!D3(e)) return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string") return !1;
  return !0;
}
function O3(e = []) {
  return ([, t]) => t && j3(t, e);
}
function I3(e) {
  return Ve("MuiTypography", e);
}
Ue("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const _3 = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  V3 = S3(),
  $3 = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: i,
        variant: o,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          o,
          e.align !== "inherit" && `align${ke(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          i && "paragraph",
        ],
      };
    return We(a, I3, s);
  },
  F3 = ue("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${ke(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(
    vt(({ theme: e }) => {
      var t;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(e.typography)
            .filter(([n, r]) => n !== "inherit" && r && typeof r == "object")
            .map(([n, r]) => ({ props: { variant: n }, style: r })),
          ...Object.entries(e.palette)
            .filter(O3())
            .map(([n]) => ({
              props: { color: n },
              style: { color: (e.vars || e).palette[n].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, n]) => typeof n == "string")
            .map(([n]) => ({
              props: { color: `text${ke(n)}` },
              style: { color: (e.vars || e).palette.text[n] },
            })),
          {
            props: ({ ownerState: n }) => n.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: n }) => n.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: n }) => n.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: n }) => n.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    })
  ),
  im = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  gc = P.forwardRef(function (t, n) {
    const { color: r, ...i } = Ze({ props: t, name: "MuiTypography" }),
      o = !_3[r],
      s = V3({ ...i, ...(o && { color: r }) }),
      {
        align: a = "inherit",
        className: l,
        component: u,
        gutterBottom: c = !1,
        noWrap: f = !1,
        paragraph: d = !1,
        variant: y = "body1",
        variantMapping: v = im,
        ...x
      } = s,
      S = {
        ...s,
        align: a,
        color: r,
        className: l,
        component: u,
        gutterBottom: c,
        noWrap: f,
        paragraph: d,
        variant: y,
        variantMapping: v,
      },
      h = u || (d ? "p" : v[y] || im[y]) || "span",
      p = $3(S);
    return C.jsx(F3, {
      as: h,
      ref: n,
      className: ie(p.root, l),
      ...x,
      ownerState: S,
      style: {
        ...(a !== "inherit" && { "--Typography-textAlign": a }),
        ...x.style,
      },
    });
  });
function B3(e) {
  return typeof e == "function" ? e() : e;
}
const z3 = P.forwardRef(function (t, n) {
    const { children: r, container: i, disablePortal: o = !1 } = t,
      [s, a] = P.useState(null),
      l = ur(P.isValidElement(r) ? Ua(r) : null, n);
    if (
      (oa(() => {
        o || a(B3(i) || document.body);
      }, [i, o]),
      oa(() => {
        if (s && !o)
          return (
            fc(n, s),
            () => {
              fc(n, null);
            }
          );
      }, [n, s, o]),
      o)
    ) {
      if (P.isValidElement(r)) {
        const u = { ref: l };
        return P.cloneElement(r, u);
      }
      return C.jsx(P.Fragment, { children: r });
    }
    return C.jsx(P.Fragment, { children: s && pf.createPortal(r, s) });
  }),
  U3 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  W3 = P.forwardRef(function (t, n) {
    const r = Mo(),
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: o,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: f,
        onEntering: d,
        onExit: y,
        onExited: v,
        onExiting: x,
        style: S,
        timeout: h = i,
        TransitionComponent: p = Ut,
        ...m
      } = t,
      w = P.useRef(null),
      k = ur(w, Ua(a), n),
      E = (F) => (V) => {
        if (F) {
          const B = w.current;
          V === void 0 ? F(B) : F(B, V);
        }
      },
      T = E(d),
      b = E((F, V) => {
        $v(F);
        const B = sa({ style: S, timeout: h, easing: l }, { mode: "enter" });
        (F.style.webkitTransition = r.transitions.create("opacity", B)),
          (F.style.transition = r.transitions.create("opacity", B)),
          c && c(F, V);
      }),
      N = E(f),
      g = E(x),
      M = E((F) => {
        const V = sa({ style: S, timeout: h, easing: l }, { mode: "exit" });
        (F.style.webkitTransition = r.transitions.create("opacity", V)),
          (F.style.transition = r.transitions.create("opacity", V)),
          y && y(F);
      }),
      j = E(v),
      _ = (F) => {
        o && o(w.current, F);
      };
    return C.jsx(p, {
      appear: s,
      in: u,
      nodeRef: w,
      onEnter: b,
      onEntered: N,
      onEntering: T,
      onExit: M,
      onExited: j,
      onExiting: g,
      addEndListener: _,
      timeout: h,
      ...m,
      children: (F, V) =>
        P.cloneElement(a, {
          style: {
            opacity: 0,
            visibility: F === "exited" && !u ? "hidden" : void 0,
            ...U3[F],
            ...S,
            ...a.props.style,
          },
          ref: k,
          ...V,
        }),
    });
  });
function H3(e) {
  return Ve("MuiBackdrop", e);
}
Ue("MuiBackdrop", ["root", "invisible"]);
const K3 = (e) => {
    const { ownerState: t, ...n } = e;
    return n;
  },
  G3 = (e) => {
    const { classes: t, invisible: n } = e;
    return We({ root: ["root", n && "invisible"] }, H3, t);
  },
  Y3 = ue("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  Q3 = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiBackdrop" }),
      {
        children: i,
        className: o,
        component: s = "div",
        invisible: a = !1,
        open: l,
        components: u = {},
        componentsProps: c = {},
        slotProps: f = {},
        slots: d = {},
        TransitionComponent: y,
        transitionDuration: v,
        ...x
      } = r,
      S = { ...r, component: s, invisible: a },
      h = G3(S),
      p = { transition: y, root: u.Root, ...d },
      m = { ...c, ...f },
      w = { slots: p, slotProps: m },
      [k, E] = ri("root", {
        elementType: Y3,
        externalForwardedProps: w,
        className: ie(h.root, o),
        ownerState: S,
      }),
      [T, b] = ri("transition", {
        elementType: W3,
        externalForwardedProps: w,
        ownerState: S,
      }),
      N = K3(b);
    return C.jsx(T, {
      in: l,
      timeout: v,
      ...x,
      ...N,
      children: C.jsx(k, {
        "aria-hidden": !0,
        ...E,
        classes: h,
        ref: n,
        children: i,
      }),
    });
  }),
  X3 = Ue("MuiBox", ["root"]),
  Z3 = jv(),
  om = tE({
    themeId: Ma,
    defaultTheme: Z3,
    defaultClassName: X3.root,
    generateClassName: xv.generate,
  }),
  q3 = zE({
    createStyledComponent: ue("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${ke(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => x3({ props: e, name: "MuiContainer" }),
  });
function J3(e) {
  const t = sr(e);
  return t.body === e
    ? ni(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Ui(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function sm(e) {
  return parseInt(ni(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function eb(e) {
  const n = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK",
    ].includes(e.tagName),
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function am(e, t, n, r, i) {
  const o = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !o.includes(s),
      l = !eb(s);
    a && l && Ui(s, i);
  });
}
function Wl(e, t) {
  let n = -1;
  return e.some((r, i) => (t(r) ? ((n = i), !0) : !1)), n;
}
function tb(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (J3(r)) {
      const s = CE(ni(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${sm(r) + s}px`);
      const a = sr(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${sm(l) + s}px`);
      });
    }
    let o;
    if (r.parentNode instanceof DocumentFragment) o = sr(r).body;
    else {
      const s = r.parentElement,
        a = ni(r);
      o =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: o.style.overflow, property: "overflow", el: o },
      { value: o.style.overflowX, property: "overflow-x", el: o },
      { value: o.style.overflowY, property: "overflow-y", el: o }
    ),
      (o.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: o, el: s, property: a }) => {
      o ? s.style.setProperty(a, o) : s.style.removeProperty(a);
    });
  };
}
function nb(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class rb {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && Ui(t.modalRef, !1);
    const i = nb(n);
    am(n, t.mount, t.modalRef, i, !0);
    const o = Wl(this.containers, (s) => s.container === n);
    return o !== -1
      ? (this.containers[o].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: i,
        }),
        r);
  }
  mount(t, n) {
    const r = Wl(this.containers, (o) => o.modals.includes(t)),
      i = this.containers[r];
    i.restore || (i.restore = tb(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const i = Wl(this.containers, (s) => s.modals.includes(t)),
      o = this.containers[i];
    if (
      (o.modals.splice(o.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      o.modals.length === 0)
    )
      o.restore && o.restore(),
        t.modalRef && Ui(t.modalRef, n),
        am(o.container, t.mount, t.modalRef, o.hiddenSiblings, !1),
        this.containers.splice(i, 1);
    else {
      const s = o.modals[o.modals.length - 1];
      s.modalRef && Ui(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const ib = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function ob(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function sb(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function ab(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    sb(e)
  );
}
function lb(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(ib)).forEach((r, i) => {
      const o = ob(r);
      o === -1 ||
        !ab(r) ||
        (o === 0
          ? t.push(r)
          : n.push({ documentOrder: i, tabIndex: o, node: r }));
    }),
    n
      .sort((r, i) =>
        r.tabIndex === i.tabIndex
          ? r.documentOrder - i.documentOrder
          : r.tabIndex - i.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function ub() {
  return !0;
}
function cb(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: i = !1,
      getTabbable: o = lb,
      isEnabled: s = ub,
      open: a,
    } = e,
    l = P.useRef(!1),
    u = P.useRef(null),
    c = P.useRef(null),
    f = P.useRef(null),
    d = P.useRef(null),
    y = P.useRef(!1),
    v = P.useRef(null),
    x = ur(Ua(t), v),
    S = P.useRef(null);
  P.useEffect(() => {
    !a || !v.current || (y.current = !n);
  }, [n, a]),
    P.useEffect(() => {
      if (!a || !v.current) return;
      const m = sr(v.current);
      return (
        v.current.contains(m.activeElement) ||
          (v.current.hasAttribute("tabIndex") ||
            v.current.setAttribute("tabIndex", "-1"),
          y.current && v.current.focus()),
        () => {
          i ||
            (f.current &&
              f.current.focus &&
              ((l.current = !0), f.current.focus()),
            (f.current = null));
        }
      );
    }, [a]),
    P.useEffect(() => {
      if (!a || !v.current) return;
      const m = sr(v.current),
        w = (T) => {
          (S.current = T),
            !(r || !s() || T.key !== "Tab") &&
              m.activeElement === v.current &&
              T.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        k = () => {
          var N, g;
          const T = v.current;
          if (T === null) return;
          if (!m.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            T.contains(m.activeElement) ||
            (r &&
              m.activeElement !== u.current &&
              m.activeElement !== c.current)
          )
            return;
          if (m.activeElement !== d.current) d.current = null;
          else if (d.current !== null) return;
          if (!y.current) return;
          let b = [];
          if (
            ((m.activeElement === u.current || m.activeElement === c.current) &&
              (b = o(v.current)),
            b.length > 0)
          ) {
            const M = !!(
                (N = S.current) != null &&
                N.shiftKey &&
                ((g = S.current) == null ? void 0 : g.key) === "Tab"
              ),
              j = b[0],
              _ = b[b.length - 1];
            typeof j != "string" &&
              typeof _ != "string" &&
              (M ? _.focus() : j.focus());
          } else T.focus();
        };
      m.addEventListener("focusin", k), m.addEventListener("keydown", w, !0);
      const E = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && k();
      }, 50);
      return () => {
        clearInterval(E),
          m.removeEventListener("focusin", k),
          m.removeEventListener("keydown", w, !0);
      };
    }, [n, r, i, s, a, o]);
  const h = (m) => {
      f.current === null && (f.current = m.relatedTarget),
        (y.current = !0),
        (d.current = m.target);
      const w = t.props.onFocus;
      w && w(m);
    },
    p = (m) => {
      f.current === null && (f.current = m.relatedTarget), (y.current = !0);
    };
  return C.jsxs(P.Fragment, {
    children: [
      C.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: p,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      P.cloneElement(t, { ref: x, onFocus: h }),
      C.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: p,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function fb(e) {
  return typeof e == "function" ? e() : e;
}
function db(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const rs = new rb();
function pb(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      closeAfterTransition: i = !1,
      onTransitionEnter: o,
      onTransitionExited: s,
      children: a,
      onClose: l,
      open: u,
      rootRef: c,
    } = e,
    f = P.useRef({}),
    d = P.useRef(null),
    y = P.useRef(null),
    v = ur(y, c),
    [x, S] = P.useState(!u),
    h = db(a);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const m = () => sr(d.current),
    w = () => (
      (f.current.modalRef = y.current), (f.current.mount = d.current), f.current
    ),
    k = () => {
      rs.mount(w(), { disableScrollLock: r }),
        y.current && (y.current.scrollTop = 0);
    },
    E = Gh(() => {
      const V = fb(t) || m().body;
      rs.add(w(), V), y.current && k();
    }),
    T = () => rs.isTopModal(w()),
    b = Gh((V) => {
      (d.current = V), V && (u && T() ? k() : y.current && Ui(y.current, p));
    }),
    N = P.useCallback(() => {
      rs.remove(w(), p);
    }, [p]);
  P.useEffect(
    () => () => {
      N();
    },
    [N]
  ),
    P.useEffect(() => {
      u ? E() : (!h || !i) && N();
    }, [u, N, h, i, E]);
  const g = (V) => (B) => {
      var U;
      (U = V.onKeyDown) == null || U.call(V, B),
        !(B.key !== "Escape" || B.which === 229 || !T()) &&
          (n || (B.stopPropagation(), l && l(B, "escapeKeyDown")));
    },
    M = (V) => (B) => {
      var U;
      (U = V.onClick) == null || U.call(V, B),
        B.target === B.currentTarget && l && l(B, "backdropClick");
    };
  return {
    getRootProps: (V = {}) => {
      const B = Rv(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const U = { ...B, ...V };
      return { role: "presentation", ...U, onKeyDown: g(U), ref: v };
    },
    getBackdropProps: (V = {}) => {
      const B = V;
      return { "aria-hidden": !0, ...B, onClick: M(B), open: u };
    },
    getTransitionProps: () => {
      const V = () => {
          S(!1), o && o();
        },
        B = () => {
          S(!0), s && s(), i && N();
        };
      return {
        onEnter: Kh(V, a == null ? void 0 : a.props.onEnter),
        onExited: Kh(B, a == null ? void 0 : a.props.onExited),
      };
    },
    rootRef: v,
    portalRef: b,
    isTopModal: T,
    exited: x,
    hasTransition: h,
  };
}
function hb(e) {
  return Ve("MuiModal", e);
}
Ue("MuiModal", ["root", "hidden", "backdrop"]);
const mb = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return We(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      hb,
      r
    );
  },
  gb = ue("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(
    vt(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: t }) => !t.open && t.exited,
          style: { visibility: "hidden" },
        },
      ],
    }))
  ),
  yb = ue(Q3, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  vb = P.forwardRef(function (t, n) {
    const r = Ze({ name: "MuiModal", props: t }),
      {
        BackdropComponent: i = yb,
        BackdropProps: o,
        classes: s,
        className: a,
        closeAfterTransition: l = !1,
        children: u,
        container: c,
        component: f,
        components: d = {},
        componentsProps: y = {},
        disableAutoFocus: v = !1,
        disableEnforceFocus: x = !1,
        disableEscapeKeyDown: S = !1,
        disablePortal: h = !1,
        disableRestoreFocus: p = !1,
        disableScrollLock: m = !1,
        hideBackdrop: w = !1,
        keepMounted: k = !1,
        onBackdropClick: E,
        onClose: T,
        onTransitionEnter: b,
        onTransitionExited: N,
        open: g,
        slotProps: M = {},
        slots: j = {},
        theme: _,
        ...F
      } = r,
      V = {
        ...r,
        closeAfterTransition: l,
        disableAutoFocus: v,
        disableEnforceFocus: x,
        disableEscapeKeyDown: S,
        disablePortal: h,
        disableRestoreFocus: p,
        disableScrollLock: m,
        hideBackdrop: w,
        keepMounted: k,
      },
      {
        getRootProps: B,
        getBackdropProps: U,
        getTransitionProps: A,
        portalRef: O,
        isTopModal: $,
        exited: te,
        hasTransition: pe,
      } = pb({ ...V, rootRef: n }),
      Rt = { ...V, exited: te },
      Te = mb(Rt),
      un = {};
    if ((u.props.tabIndex === void 0 && (un.tabIndex = "-1"), pe)) {
      const { onEnter: Vn, onExited: Lo } = A();
      (un.onEnter = Vn), (un.onExited = Lo);
    }
    const At = {
        ...F,
        slots: { root: d.Root, backdrop: d.Backdrop, ...j },
        slotProps: { ...y, ...M },
      },
      [cr, Qv] = ri("root", {
        elementType: gb,
        externalForwardedProps: At,
        getSlotProps: B,
        additionalProps: { ref: n, as: f },
        ownerState: Rt,
        className: ie(
          a,
          Te == null ? void 0 : Te.root,
          !Rt.open && Rt.exited && (Te == null ? void 0 : Te.hidden)
        ),
      }),
      [Xv, sd] = ri("backdrop", {
        elementType: i,
        externalForwardedProps: At,
        additionalProps: o,
        getSlotProps: (Vn) =>
          U({
            ...Vn,
            onClick: (Lo) => {
              E && E(Lo), Vn != null && Vn.onClick && Vn.onClick(Lo);
            },
          }),
        className: ie(
          o == null ? void 0 : o.className,
          Te == null ? void 0 : Te.backdrop
        ),
        ownerState: Rt,
      }),
      Zv = ur(o == null ? void 0 : o.ref, sd.ref);
    return !k && !g && (!pe || te)
      ? null
      : C.jsx(z3, {
          ref: O,
          container: c,
          disablePortal: h,
          children: C.jsxs(cr, {
            ...Qv,
            children: [
              !w && i ? C.jsx(Xv, { ...sd, ref: Zv }) : null,
              C.jsx(cb, {
                disableEnforceFocus: x,
                disableAutoFocus: v,
                disableRestoreFocus: p,
                isEnabled: $,
                open: g,
                children: P.cloneElement(u, un),
              }),
            ],
          }),
        });
  });
function xb(e, t, n) {
  const r = t.getBoundingClientRect(),
    i = n && n.getBoundingClientRect(),
    o = ni(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const u = o.getComputedStyle(t);
    s =
      u.getPropertyValue("-webkit-transform") ||
      u.getPropertyValue("transform");
  }
  let a = 0,
    l = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    (a = parseInt(u[4], 10)), (l = parseInt(u[5], 10));
  }
  return e === "left"
    ? i
      ? `translateX(${i.right + a - r.left}px)`
      : `translateX(${o.innerWidth + a - r.left}px)`
    : e === "right"
    ? i
      ? `translateX(-${r.right - i.left - a}px)`
      : `translateX(-${r.left + r.width - a}px)`
    : e === "up"
    ? i
      ? `translateY(${i.bottom + l - r.top}px)`
      : `translateY(${o.innerHeight + l - r.top}px)`
    : i
    ? `translateY(-${r.top - i.top + r.height - l}px)`
    : `translateY(-${r.top + r.height - l}px)`;
}
function wb(e) {
  return typeof e == "function" ? e() : e;
}
function is(e, t, n) {
  const r = wb(n),
    i = xb(e, t, r);
  i && ((t.style.webkitTransform = i), (t.style.transform = i));
}
const Sb = P.forwardRef(function (t, n) {
  const r = Mo(),
    i = {
      enter: r.transitions.easing.easeOut,
      exit: r.transitions.easing.sharp,
    },
    o = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen,
    },
    {
      addEndListener: s,
      appear: a = !0,
      children: l,
      container: u,
      direction: c = "down",
      easing: f = i,
      in: d,
      onEnter: y,
      onEntered: v,
      onEntering: x,
      onExit: S,
      onExited: h,
      onExiting: p,
      style: m,
      timeout: w = o,
      TransitionComponent: k = Ut,
      ...E
    } = t,
    T = P.useRef(null),
    b = ur(Ua(l), T, n),
    N = (A) => (O) => {
      A && (O === void 0 ? A(T.current) : A(T.current, O));
    },
    g = N((A, O) => {
      is(c, A, u), $v(A), y && y(A, O);
    }),
    M = N((A, O) => {
      const $ = sa({ timeout: w, style: m, easing: f }, { mode: "enter" });
      (A.style.webkitTransition = r.transitions.create("-webkit-transform", {
        ...$,
      })),
        (A.style.transition = r.transitions.create("transform", { ...$ })),
        (A.style.webkitTransform = "none"),
        (A.style.transform = "none"),
        x && x(A, O);
    }),
    j = N(v),
    _ = N(p),
    F = N((A) => {
      const O = sa({ timeout: w, style: m, easing: f }, { mode: "exit" });
      (A.style.webkitTransition = r.transitions.create("-webkit-transform", O)),
        (A.style.transition = r.transitions.create("transform", O)),
        is(c, A, u),
        S && S(A);
    }),
    V = N((A) => {
      (A.style.webkitTransition = ""), (A.style.transition = ""), h && h(A);
    }),
    B = (A) => {
      s && s(T.current, A);
    },
    U = P.useCallback(() => {
      T.current && is(c, T.current, u);
    }, [c, u]);
  return (
    P.useEffect(() => {
      if (d || c === "down" || c === "right") return;
      const A = wE(() => {
          T.current && is(c, T.current, u);
        }),
        O = ni(T.current);
      return (
        O.addEventListener("resize", A),
        () => {
          A.clear(), O.removeEventListener("resize", A);
        }
      );
    }, [c, d, u]),
    P.useEffect(() => {
      d || U();
    }, [d, U]),
    C.jsx(k, {
      nodeRef: T,
      onEnter: g,
      onEntered: j,
      onEntering: M,
      onExit: F,
      onExited: V,
      onExiting: _,
      addEndListener: B,
      appear: a,
      in: d,
      timeout: w,
      ...E,
      children: (A, O) =>
        P.cloneElement(l, {
          ref: b,
          style: {
            visibility: A === "exited" && !d ? "hidden" : void 0,
            ...m,
            ...l.props.style,
          },
          ...O,
        }),
    })
  );
});
function Cb(e) {
  return Ve("MuiDrawer", e);
}
Ue("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const Bv = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      (n.variant === "permanent" || n.variant === "persistent") && t.docked,
      t.modal,
    ];
  },
  kb = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      i = {
        root: ["root"],
        docked: [(r === "permanent" || r === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${ke(n)}`,
          r !== "temporary" && `paperAnchorDocked${ke(n)}`,
        ],
      };
    return We(i, Cb, t);
  },
  Tb = ue(vb, { name: "MuiDrawer", slot: "Root", overridesResolver: Bv })(
    vt(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer }))
  ),
  lm = ue("div", {
    shouldForwardProp: Ov,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: Bv,
  })({ flex: "0 0 auto" }),
  Pb = ue(Fv, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`paperAnchor${ke(n.anchor)}`],
        n.variant !== "temporary" && t[`paperAnchorDocked${ke(n.anchor)}`],
      ];
    },
  })(
    vt(({ theme: e }) => ({
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      flex: "1 0 auto",
      zIndex: (e.vars || e).zIndex.drawer,
      WebkitOverflowScrolling: "touch",
      position: "fixed",
      top: 0,
      outline: 0,
      variants: [
        { props: { anchor: "left" }, style: { left: 0 } },
        {
          props: { anchor: "top" },
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: "auto",
            maxHeight: "100%",
          },
        },
        { props: { anchor: "right" }, style: { right: 0 } },
        {
          props: { anchor: "bottom" },
          style: {
            top: "auto",
            left: 0,
            bottom: 0,
            right: 0,
            height: "auto",
            maxHeight: "100%",
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "left" && t.variant !== "temporary",
          style: { borderRight: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "top" && t.variant !== "temporary",
          style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "right" && t.variant !== "temporary",
          style: { borderLeft: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "bottom" && t.variant !== "temporary",
          style: { borderTop: `1px solid ${(e.vars || e).palette.divider}` },
        },
      ],
    }))
  ),
  zv = { left: "right", right: "left", top: "down", bottom: "up" };
function Eb(e) {
  return ["left", "right"].includes(e);
}
function bb({ direction: e }, t) {
  return e === "rtl" && Eb(t) ? zv[t] : t;
}
const Rb = P.forwardRef(function (t, n) {
  const r = Ze({ props: t, name: "MuiDrawer" }),
    i = Mo(),
    o = RE(),
    s = {
      enter: i.transitions.duration.enteringScreen,
      exit: i.transitions.duration.leavingScreen,
    },
    {
      anchor: a = "left",
      BackdropProps: l,
      children: u,
      className: c,
      elevation: f = 16,
      hideBackdrop: d = !1,
      ModalProps: { BackdropProps: y, ...v } = {},
      onClose: x,
      open: S = !1,
      PaperProps: h = {},
      SlideProps: p,
      TransitionComponent: m = Sb,
      transitionDuration: w = s,
      variant: k = "temporary",
      ...E
    } = r,
    T = P.useRef(!1);
  P.useEffect(() => {
    T.current = !0;
  }, []);
  const b = bb({ direction: o ? "rtl" : "ltr" }, a),
    g = { ...r, anchor: a, elevation: f, open: S, variant: k, ...E },
    M = kb(g),
    j = C.jsx(Pb, {
      elevation: k === "temporary" ? f : 0,
      square: !0,
      ...h,
      className: ie(M.paper, h.className),
      ownerState: g,
      children: u,
    });
  if (k === "permanent")
    return C.jsx(lm, {
      className: ie(M.root, M.docked, c),
      ownerState: g,
      ref: n,
      ...E,
      children: j,
    });
  const _ = C.jsx(m, {
    in: S,
    direction: zv[b],
    timeout: w,
    appear: T.current,
    ...p,
    children: j,
  });
  return k === "persistent"
    ? C.jsx(lm, {
        className: ie(M.root, M.docked, c),
        ownerState: g,
        ref: n,
        ...E,
        children: _,
      })
    : C.jsx(Tb, {
        BackdropProps: { ...l, ...y, transitionDuration: w },
        className: ie(M.root, M.modal, c),
        open: S,
        ownerState: g,
        onClose: x,
        hideBackdrop: d,
        ref: n,
        ...E,
        ...v,
        children: _,
      });
});
function Ab(e) {
  return Ve("MuiImageList", e);
}
Ue("MuiImageList", ["root", "masonry", "quilted", "standard", "woven"]);
const Uv = P.createContext({}),
  Mb = (e) => {
    const { classes: t, variant: n } = e;
    return We({ root: ["root", n] }, Ab, t);
  },
  Lb = ue("ul", {
    name: "MuiImageList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant]];
    },
  })({
    display: "grid",
    overflowY: "auto",
    listStyle: "none",
    padding: 0,
    WebkitOverflowScrolling: "touch",
    variants: [{ props: { variant: "masonry" }, style: { display: "block" } }],
  }),
  Nb = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiImageList" }),
      {
        children: i,
        className: o,
        cols: s = 2,
        component: a = "ul",
        rowHeight: l = "auto",
        gap: u = 4,
        style: c,
        variant: f = "standard",
        ...d
      } = r,
      y = P.useMemo(() => ({ rowHeight: l, gap: u, variant: f }), [l, u, f]),
      v =
        f === "masonry"
          ? { columnCount: s, columnGap: u, ...c }
          : { gridTemplateColumns: `repeat(${s}, 1fr)`, gap: u, ...c },
      x = { ...r, component: a, gap: u, rowHeight: l, variant: f },
      S = Mb(x);
    return C.jsx(Lb, {
      as: a,
      className: ie(S.root, S[f], o),
      ref: n,
      style: v,
      ownerState: x,
      ...d,
      children: C.jsx(Uv.Provider, { value: y, children: i }),
    });
  });
function Db(e) {
  return Ve("MuiImageListItem", e);
}
const Hl = Ue("MuiImageListItem", [
    "root",
    "img",
    "standard",
    "woven",
    "masonry",
    "quilted",
  ]),
  jb = (e) => {
    const { classes: t, variant: n } = e;
    return We({ root: ["root", n], img: ["img"] }, Db, t);
  },
  Ob = ue("li", {
    name: "MuiImageListItem",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [{ [`& .${Hl.img}`]: t.img }, t.root, t[n.variant]];
    },
  })({
    display: "block",
    position: "relative",
    [`& .${Hl.img}`]: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      display: "block",
    },
    variants: [
      {
        props: { variant: "standard" },
        style: { display: "flex", flexDirection: "column" },
      },
      {
        props: { variant: "woven" },
        style: {
          height: "100%",
          alignSelf: "center",
          "&:nth-of-type(even)": { height: "70%" },
        },
      },
      {
        props: { variant: "standard" },
        style: { [`& .${Hl.img}`]: { height: "auto", flexGrow: 1 } },
      },
    ],
  }),
  Ib = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiImageListItem" }),
      {
        children: i,
        className: o,
        cols: s = 1,
        component: a = "li",
        rows: l = 1,
        style: u,
        ...c
      } = r,
      { rowHeight: f = "auto", gap: d, variant: y } = P.useContext(Uv);
    let v = "auto";
    y === "woven" ? (v = void 0) : f !== "auto" && (v = f * l + d * (l - 1));
    const x = {
        ...r,
        cols: s,
        component: a,
        gap: d,
        rowHeight: f,
        rows: l,
        variant: y,
      },
      S = jb(x);
    return C.jsx(Ob, {
      as: a,
      className: ie(S.root, S[y], o),
      ref: n,
      style: {
        height: v,
        gridColumnEnd: y !== "masonry" ? `span ${s}` : void 0,
        gridRowEnd: y !== "masonry" ? `span ${l}` : void 0,
        marginBottom: y === "masonry" ? d : void 0,
        breakInside: y === "masonry" ? "avoid" : void 0,
        ...u,
      },
      ownerState: x,
      ...c,
      children: P.Children.map(i, (h) =>
        P.isValidElement(h)
          ? h.type === "img" || SE(h, ["Image"])
            ? P.cloneElement(h, { className: ie(S.img, h.props.className) })
            : h
          : null
      ),
    });
  }),
  el = P.createContext({}),
  od = P.createContext({});
function _b(e) {
  return Ve("MuiStep", e);
}
Ue("MuiStep", [
  "root",
  "horizontal",
  "vertical",
  "alternativeLabel",
  "completed",
]);
const Vb = (e) => {
    const { classes: t, orientation: n, alternativeLabel: r, completed: i } = e;
    return We(
      { root: ["root", n, r && "alternativeLabel", i && "completed"] },
      _b,
      t
    );
  },
  $b = ue("div", {
    name: "MuiStep",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.alternativeLabel && t.alternativeLabel,
        n.completed && t.completed,
      ];
    },
  })({
    variants: [
      {
        props: { orientation: "horizontal" },
        style: { paddingLeft: 8, paddingRight: 8 },
      },
      {
        props: { alternativeLabel: !0 },
        style: { flex: 1, position: "relative" },
      },
    ],
  }),
  Fb = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiStep" }),
      {
        active: i,
        children: o,
        className: s,
        component: a = "div",
        completed: l,
        disabled: u,
        expanded: c = !1,
        index: f,
        last: d,
        ...y
      } = r,
      {
        activeStep: v,
        connector: x,
        alternativeLabel: S,
        orientation: h,
        nonLinear: p,
      } = P.useContext(el);
    let [m = !1, w = !1, k = !1] = [i, l, u];
    v === f
      ? (m = i !== void 0 ? i : !0)
      : !p && v > f
      ? (w = l !== void 0 ? l : !0)
      : !p && v < f && (k = u !== void 0 ? u : !0);
    const E = P.useMemo(
        () => ({
          index: f,
          last: d,
          expanded: c,
          icon: f + 1,
          active: m,
          completed: w,
          disabled: k,
        }),
        [f, d, c, m, w, k]
      ),
      T = {
        ...r,
        active: m,
        orientation: h,
        alternativeLabel: S,
        completed: w,
        disabled: k,
        expanded: c,
        component: a,
      },
      b = Vb(T),
      N = C.jsxs($b, {
        as: a,
        className: ie(b.root, s),
        ref: n,
        ownerState: T,
        ...y,
        children: [x && S && f !== 0 ? x : null, o],
      });
    return C.jsx(od.Provider, {
      value: E,
      children:
        x && !S && f !== 0 ? C.jsxs(P.Fragment, { children: [x, N] }) : N,
    });
  }),
  Bb = Iv(
    C.jsx("path", {
      d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z",
    }),
    "CheckCircle"
  ),
  zb = Iv(
    C.jsx("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }),
    "Warning"
  );
function Ub(e) {
  return Ve("MuiStepIcon", e);
}
const Kl = Ue("MuiStepIcon", ["root", "active", "completed", "error", "text"]);
var um;
const Wb = (e) => {
    const { classes: t, active: n, completed: r, error: i } = e;
    return We(
      {
        root: ["root", n && "active", r && "completed", i && "error"],
        text: ["text"],
      },
      Ub,
      t
    );
  },
  Gl = ue(yo, {
    name: "MuiStepIcon",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(
    vt(({ theme: e }) => ({
      display: "block",
      transition: e.transitions.create("color", {
        duration: e.transitions.duration.shortest,
      }),
      color: (e.vars || e).palette.text.disabled,
      [`&.${Kl.completed}`]: { color: (e.vars || e).palette.primary.main },
      [`&.${Kl.active}`]: { color: (e.vars || e).palette.primary.main },
      [`&.${Kl.error}`]: { color: (e.vars || e).palette.error.main },
    }))
  ),
  Hb = ue("text", {
    name: "MuiStepIcon",
    slot: "Text",
    overridesResolver: (e, t) => t.text,
  })(
    vt(({ theme: e }) => ({
      fill: (e.vars || e).palette.primary.contrastText,
      fontSize: e.typography.caption.fontSize,
      fontFamily: e.typography.fontFamily,
    }))
  ),
  Kb = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiStepIcon" }),
      {
        active: i = !1,
        className: o,
        completed: s = !1,
        error: a = !1,
        icon: l,
        ...u
      } = r,
      c = { ...r, active: i, completed: s, error: a },
      f = Wb(c);
    if (typeof l == "number" || typeof l == "string") {
      const d = ie(o, f.root);
      return a
        ? C.jsx(Gl, { as: zb, className: d, ref: n, ownerState: c, ...u })
        : s
        ? C.jsx(Gl, { as: Bb, className: d, ref: n, ownerState: c, ...u })
        : C.jsxs(Gl, {
            className: d,
            ref: n,
            ownerState: c,
            ...u,
            children: [
              um || (um = C.jsx("circle", { cx: "12", cy: "12", r: "12" })),
              C.jsx(Hb, {
                className: f.text,
                x: "12",
                y: "12",
                textAnchor: "middle",
                dominantBaseline: "central",
                ownerState: c,
                children: l,
              }),
            ],
          });
    }
    return l;
  });
function Gb(e) {
  return Ve("MuiStepLabel", e);
}
const vn = Ue("MuiStepLabel", [
    "root",
    "horizontal",
    "vertical",
    "label",
    "active",
    "completed",
    "error",
    "disabled",
    "iconContainer",
    "alternativeLabel",
    "labelContainer",
  ]),
  Yb = (e) => {
    const {
      classes: t,
      orientation: n,
      active: r,
      completed: i,
      error: o,
      disabled: s,
      alternativeLabel: a,
    } = e;
    return We(
      {
        root: [
          "root",
          n,
          o && "error",
          s && "disabled",
          a && "alternativeLabel",
        ],
        label: [
          "label",
          r && "active",
          i && "completed",
          o && "error",
          s && "disabled",
          a && "alternativeLabel",
        ],
        iconContainer: [
          "iconContainer",
          r && "active",
          i && "completed",
          o && "error",
          s && "disabled",
          a && "alternativeLabel",
        ],
        labelContainer: ["labelContainer", a && "alternativeLabel"],
      },
      Gb,
      t
    );
  },
  Qb = ue("span", {
    name: "MuiStepLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.orientation]];
    },
  })({
    display: "flex",
    alignItems: "center",
    [`&.${vn.alternativeLabel}`]: { flexDirection: "column" },
    [`&.${vn.disabled}`]: { cursor: "default" },
    variants: [
      {
        props: { orientation: "vertical" },
        style: { textAlign: "left", padding: "8px 0" },
      },
    ],
  }),
  Xb = ue("span", {
    name: "MuiStepLabel",
    slot: "Label",
    overridesResolver: (e, t) => t.label,
  })(
    vt(({ theme: e }) => ({
      ...e.typography.body2,
      display: "block",
      transition: e.transitions.create("color", {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${vn.active}`]: {
        color: (e.vars || e).palette.text.primary,
        fontWeight: 500,
      },
      [`&.${vn.completed}`]: {
        color: (e.vars || e).palette.text.primary,
        fontWeight: 500,
      },
      [`&.${vn.alternativeLabel}`]: { marginTop: 16 },
      [`&.${vn.error}`]: { color: (e.vars || e).palette.error.main },
    }))
  ),
  Zb = ue("span", {
    name: "MuiStepLabel",
    slot: "IconContainer",
    overridesResolver: (e, t) => t.iconContainer,
  })({
    flexShrink: 0,
    display: "flex",
    paddingRight: 8,
    [`&.${vn.alternativeLabel}`]: { paddingRight: 0 },
  }),
  qb = ue("span", {
    name: "MuiStepLabel",
    slot: "LabelContainer",
    overridesResolver: (e, t) => t.labelContainer,
  })(
    vt(({ theme: e }) => ({
      width: "100%",
      color: (e.vars || e).palette.text.secondary,
      [`&.${vn.alternativeLabel}`]: { textAlign: "center" },
    }))
  ),
  yc = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiStepLabel" }),
      {
        children: i,
        className: o,
        componentsProps: s = {},
        error: a = !1,
        icon: l,
        optional: u,
        slots: c = {},
        slotProps: f = {},
        StepIconComponent: d,
        StepIconProps: y,
        ...v
      } = r,
      { alternativeLabel: x, orientation: S } = P.useContext(el),
      { active: h, disabled: p, completed: m, icon: w } = P.useContext(od),
      k = l || w;
    let E = d;
    k && !E && (E = Kb);
    const T = {
        ...r,
        active: h,
        alternativeLabel: x,
        completed: m,
        disabled: p,
        error: a,
        orientation: S,
      },
      b = Yb(T),
      N = { slots: c, slotProps: { stepIcon: y, ...s, ...f } },
      [g, M] = ri("label", {
        elementType: Xb,
        externalForwardedProps: N,
        ownerState: T,
      }),
      [j, _] = ri("stepIcon", {
        elementType: E,
        externalForwardedProps: N,
        ownerState: T,
      });
    return C.jsxs(Qb, {
      className: ie(b.root, o),
      ref: n,
      ownerState: T,
      ...v,
      children: [
        k || j
          ? C.jsx(Zb, {
              className: b.iconContainer,
              ownerState: T,
              children: C.jsx(j, {
                completed: m,
                active: h,
                error: a,
                icon: k,
                ..._,
              }),
            })
          : null,
        C.jsxs(qb, {
          className: b.labelContainer,
          ownerState: T,
          children: [
            i
              ? C.jsx(g, {
                  ...M,
                  className: ie(b.label, M == null ? void 0 : M.className),
                  children: i,
                })
              : null,
            u,
          ],
        }),
      ],
    });
  });
yc && (yc.muiName = "StepLabel");
function Jb(e) {
  return Ve("MuiStepConnector", e);
}
Ue("MuiStepConnector", [
  "root",
  "horizontal",
  "vertical",
  "alternativeLabel",
  "active",
  "completed",
  "disabled",
  "line",
  "lineHorizontal",
  "lineVertical",
]);
const e5 = (e) => {
    const {
        classes: t,
        orientation: n,
        alternativeLabel: r,
        active: i,
        completed: o,
        disabled: s,
      } = e,
      a = {
        root: [
          "root",
          n,
          r && "alternativeLabel",
          i && "active",
          o && "completed",
          s && "disabled",
        ],
        line: ["line", `line${ke(n)}`],
      };
    return We(a, Jb, t);
  },
  t5 = ue("div", {
    name: "MuiStepConnector",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.alternativeLabel && t.alternativeLabel,
        n.completed && t.completed,
      ];
    },
  })({
    flex: "1 1 auto",
    variants: [
      { props: { orientation: "vertical" }, style: { marginLeft: 12 } },
      {
        props: { alternativeLabel: !0 },
        style: {
          position: "absolute",
          top: 12,
          left: "calc(-50% + 20px)",
          right: "calc(50% + 20px)",
        },
      },
    ],
  }),
  n5 = ue("span", {
    name: "MuiStepConnector",
    slot: "Line",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.line, t[`line${ke(n.orientation)}`]];
    },
  })(
    vt(({ theme: e }) => {
      const t =
        e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[600];
      return {
        display: "block",
        borderColor: e.vars ? e.vars.palette.StepConnector.border : t,
        variants: [
          {
            props: { orientation: "horizontal" },
            style: { borderTopStyle: "solid", borderTopWidth: 1 },
          },
          {
            props: { orientation: "vertical" },
            style: {
              borderLeftStyle: "solid",
              borderLeftWidth: 1,
              minHeight: 24,
            },
          },
        ],
      };
    })
  ),
  r5 = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiStepConnector" }),
      { className: i, ...o } = r,
      { alternativeLabel: s, orientation: a = "horizontal" } = P.useContext(el),
      { active: l, disabled: u, completed: c } = P.useContext(od),
      f = {
        ...r,
        alternativeLabel: s,
        orientation: a,
        active: l,
        completed: c,
        disabled: u,
      },
      d = e5(f);
    return C.jsx(t5, {
      className: ie(d.root, i),
      ref: n,
      ownerState: f,
      ...o,
      children: C.jsx(n5, { className: d.line, ownerState: f }),
    });
  });
function i5(e) {
  return Ve("MuiStepper", e);
}
Ue("MuiStepper", [
  "root",
  "horizontal",
  "vertical",
  "nonLinear",
  "alternativeLabel",
]);
const o5 = (e) => {
    const { orientation: t, nonLinear: n, alternativeLabel: r, classes: i } = e;
    return We(
      { root: ["root", t, n && "nonLinear", r && "alternativeLabel"] },
      i5,
      i
    );
  },
  s5 = ue("div", {
    name: "MuiStepper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.alternativeLabel && t.alternativeLabel,
        n.nonLinear && t.nonLinear,
      ];
    },
  })({
    display: "flex",
    variants: [
      {
        props: { orientation: "horizontal" },
        style: { flexDirection: "row", alignItems: "center" },
      },
      {
        props: { orientation: "vertical" },
        style: { flexDirection: "column" },
      },
      { props: { alternativeLabel: !0 }, style: { alignItems: "flex-start" } },
    ],
  }),
  a5 = C.jsx(r5, {}),
  l5 = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiStepper" }),
      {
        activeStep: i = 0,
        alternativeLabel: o = !1,
        children: s,
        className: a,
        component: l = "div",
        connector: u = a5,
        nonLinear: c = !1,
        orientation: f = "horizontal",
        ...d
      } = r,
      y = {
        ...r,
        nonLinear: c,
        alternativeLabel: o,
        orientation: f,
        component: l,
      },
      v = o5(y),
      x = P.Children.toArray(s).filter(Boolean),
      S = x.map((p, m) =>
        P.cloneElement(p, { index: m, last: m + 1 === x.length, ...p.props })
      ),
      h = P.useMemo(
        () => ({
          activeStep: i,
          alternativeLabel: o,
          connector: u,
          nonLinear: c,
          orientation: f,
        }),
        [i, o, u, c, f]
      );
    return C.jsx(el.Provider, {
      value: h,
      children: C.jsx(s5, {
        as: l,
        ownerState: y,
        className: ie(v.root, a),
        ref: n,
        ...d,
        children: S,
      }),
    });
  });
function u5(e) {
  return Ve("MuiToolbar", e);
}
Ue("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const c5 = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return We({ root: ["root", !n && "gutters", r] }, u5, t);
  },
  f5 = ue("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    vt(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up("sm")]: {
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: e.mixins.toolbar },
      ],
    }))
  ),
  d5 = P.forwardRef(function (t, n) {
    const r = Ze({ props: t, name: "MuiToolbar" }),
      {
        className: i,
        component: o = "div",
        disableGutters: s = !1,
        variant: a = "regular",
        ...l
      } = r,
      u = { ...r, component: o, disableGutters: s, variant: a },
      c = c5(u);
    return C.jsx(f5, {
      as: o,
      className: ie(c.root, i),
      ref: n,
      ownerState: u,
      ...l,
    });
  }),
  p5 = () => {
    const [e, t] = P.useState(!1),
      n = Mo(),
      r = hE(n.breakpoints.down("sm")),
      i = (y) => () => {
        t(y);
      },
      { ref: o, inView: s } = Aa({ triggerOnce: !0, threshold: 0.1 }),
      [a, l] = P.useState([!1, !1, !1, !1]),
      u = (y) => {
        const v = [...a];
        (v[y] = !0), l(v);
      },
      c = (y) => {
        const v = [...a];
        (v[y] = !1), l(v);
      },
      f = (y) => {
        const v = [...a];
        (v[y] = !v[y]), l(v);
      },
      d = C.jsxs("div", {
        role: "presentation",
        onClick: i(!1),
        onKeyDown: i(!1),
        className: "w-64 p-4",
        children: [
          C.jsx(d5, {}),
          C.jsx(gc, {
            variant: "h6",
            className: "mb-4",
            children: "Navigation",
          }),
          C.jsx("ul", {
            className: "list-none p-0",
            children: ["About", "Roadmap", "Motivation", "Contact"].map(
              (y, v) =>
                C.jsx(
                  "li",
                  {
                    onClick: () => f(v),
                    onMouseEnter: () => u(v),
                    onMouseLeave: () => c(v),
                    className: `lg:text-white transition-transform duration-300 ${
                      a[v] ? "underline font-bold" : "font-normal no-underline"
                    }`,
                    children: C.jsx("a", {
                      href: `#${y.toLowerCase()}`,
                      className: "lg:text-white",
                      children: y,
                    }),
                  },
                  v
                )
            ),
          }),
        ],
      });
    return C.jsxs(C.Fragment, {
      children: [
        C.jsx(tn.div, {
          id: "homeHead",
          children: C.jsx("div", {
            className:
              "flex items-center absolute top-5 left-0 right-0 md:justify-center",
            children: C.jsxs("nav", {
              className:
                "text-white md:font-normal md:justify-center absolute md:right-auto right-0 p-4",
              children: [
                r &&
                  C.jsx("button", {
                    onClick: i(!e),
                    className: "p-2",
                    children: C.jsx("svg", {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: e ? "black" : "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: C.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: e
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16",
                      }),
                    }),
                  }),
                C.jsx("ul", {
                  className: "hidden md:flex space-x-4",
                  children: ["About", "Roadmap", "Motivation", "Contact"].map(
                    (y, v) =>
                      C.jsx(
                        "li",
                        {
                          onClick: () => f(v),
                          onMouseEnter: () => u(v),
                          onMouseLeave: () => c(v),
                          className: `text-white transition-transform duration-300 ${
                            a[v] ? "scale-125 font-bold" : "scale-100"
                          }`,
                          children: C.jsx("a", {
                            href: `#${y.toLowerCase()}`,
                            className: "lg:text-white",
                            children: y,
                          }),
                        },
                        v
                      )
                  ),
                }),
              ],
            }),
          }),
        }),
        C.jsx(Rb, { anchor: "right", open: e, onClose: i(!1), children: d }),
        C.jsx(tn.div, {
          ref: o,
          initial: { opacity: 0, y: 10 },
          animate: s ? { opacity: 1, y: 0 } : {},
          transition: { duration: 2 },
          children: C.jsx("div", {
            className:
              "flex items-center justify-center min-h-screen font-bold text-white",
            children: C.jsxs("div", {
              className: "text-center",
              children: [
                C.jsxs("div", {
                  className: "font-bold font-olga text-3xl lg:text-7xl",
                  children: [
                    C.jsxs("span", {
                      className:
                        "font-bold text font-olga text-3xl lg:text-7xl",
                      children: ["HELLO I'M", " "],
                    }),
                    C.jsx("span", {
                      className: "text-blue-500 ridho ms-3",
                      children: C.jsx(Jy, {
                        words: ["RIDHO", "BUDI", "MUTA'ALI"],
                        loop: 0,
                        cursor: "|",
                        typeSpeed: 100,
                        deleteSpeed: 80,
                        delaySpeed: 1e3,
                      }),
                    }),
                  ],
                }),
                C.jsx("h4", {
                  className:
                    "font-bold mt-2 text font-glaci text-2xl lg:text-4xl",
                  style: { letterSpacing: "10px" },
                  children: "Website Developer",
                }),
                C.jsx("p", {
                  className: "mt-2 text",
                  children: "Welcome to my portfolio website",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Wv = "./html--Hmv_5Fl.png",
  Hv = "./css-BCV-QtMT.png",
  Kv = "./boot-Bl6RBbM4.png",
  Gv = "./tail-BXjFzf0E.png",
  Yv = "./react-Bad0Uk4M.png",
  h5 = "./Ridho-DY03Xijl.png",
  m5 = () => {
    const { ref: e, inView: t } = Aa({ triggerOnce: !0, threshold: 0.1 }),
      n = {
        animate: {
          rotate: [0, 360],
          transition: { repeat: 1 / 0, duration: 4, ease: "linear" },
        },
      };
    return C.jsx("div", {
      id: "about",
      className: "container mx-auto",
      children: C.jsxs("div", {
        className:
          "justify-center items-center min-h-screen font-bold text-white",
        children: [
          C.jsx("div", {
            className:
              "font-bold font-olga text-end me-52 text-4xl pt-20 text-yellow-500",
            children: "About Me",
          }),
          C.jsx("div", { className: "mt-2 h-1 me-52 ms-auto bg-white w-10" }),
          C.jsx("div", {
            className: "mt-2 h-1 me-56 hidden lg:block ms-auto bg-white w-10",
          }),
          C.jsxs("div", {
            className:
              "grid lg:grid-flow-col md:mt-44 lg:mt-14 pb-14 mt-14 lg:grid-cols-2",
            children: [
              C.jsx("div", {
                className: "ms-2 me-2",
                children: C.jsx(tn.div, {
                  ref: e,
                  initial: { opacity: 0, y: -40 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 2 },
                  children: C.jsx("img", {
                    src: h5,
                    className:
                      "lg:w-[300px] w-[200px] h-[200px] lg:ms-44 mx-auto lg:mx-0 lg:h-[300px]",
                    alt: "",
                  }),
                }),
              }),
              C.jsx("div", {
                children: C.jsxs(tn.div, {
                  ref: e,
                  initial: { opacity: 0, y: 40 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 1 },
                  children: [
                    C.jsx("p", {
                      className:
                        "text-center font-medium lg:pt-24 pt-8 lg:me-20 ms-2 me-2",
                      children: `"Hi, my name is Ridho. I'm a student at a vocational school in Semarang, Indonesia. Although I’m just starting out, I’ve already developed a strong passion for programming. I love exploring new coding languages and building projects that challenge my creativity. I’m excited to deepen my knowledge and skills in this field and see where it takes me in the future!",`,
                    }),
                    C.jsxs("div", {
                      className: "flex mt-5 justify-center space-x-4",
                      children: [
                        C.jsx("img", {
                          src: Wv,
                          alt: "",
                          className: "w-7 h-7 mt-2",
                        }),
                        C.jsx("img", {
                          src: Hv,
                          alt: "",
                          className: "w-7 h-7 mt-2",
                        }),
                        C.jsx("img", {
                          src: Kv,
                          alt: "",
                          className: "w-10 h-10",
                        }),
                        C.jsx("img", {
                          src: Gv,
                          alt: "",
                          className: "w-10 h-10",
                        }),
                        C.jsx(tn.img, {
                          src: Yv,
                          alt: "React Logo",
                          className: "w-10 h-10",
                          variants: n,
                          animate: "animate",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  g5 = "/assets/PHP-DFHV-jPM.png",
  y5 = "/assets/Laravel-UCNUYE5D.png",
  Yl = [
    { label: "HTML", img: Wv },
    { label: "CSS", img: Hv },
    { label: "Bootstrap", img: Kv },
    { label: "Tailwind", img: Gv },
    { label: "React", img: Yv },
    { label: "PHP", img: g5 },
    { label: "Laravel", img: y5 },
    {
      label: "Keep Learning",
      img: "https://img.icons8.com/?size=100&id=BrizSRFozOKB&format=png&color=000000",
    },
  ],
  cm = [0, 1, 2, 3, 4],
  v5 = () => {
    const { ref: e, inView: t } = Aa({ triggerOnce: !0, threshold: 0 }),
      n = {
        animate: {
          rotate: [0, 360],
          transition: { repeat: 1 / 0, duration: 4, ease: "linear" },
        },
      },
      [r, i] = P.useState([!1, !1]),
      o = (a) => {
        const l = [...r];
        (l[a] = !0), i(l);
      },
      s = (a) => {
        const l = [...r];
        (l[a] = !1), i(l);
      };
    return C.jsx(C.Fragment, {
      children: C.jsxs("div", {
        className: "grid lg:grid-flow-col lg:grid-cols-3",
        children: [
          C.jsx("div", {
            className: "mx-auto hidden lg:block",
            children: C.jsx("a", {
              href: "https://www.w3schools.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: C.jsxs("div", {
                className: "pb-40 ms-20 mt-24",
                style: {
                  backgroundColor: r[0] ? "rgb(234 179 8)" : "#1c1c1c",
                  color: r[0] ? "#1c1c1c" : "#fff",
                  boxShadow: r[0]
                    ? "0 2px 10px #1c1c1c"
                    : "0 2px 10px rgb(234 179 8)",
                  transition: "background-color 0.3s",
                },
                onMouseEnter: () => o(0),
                onMouseLeave: () => s(0),
                children: [
                  C.jsx("div", {
                    className:
                      "font-medium font-glaci ps-3 pe-3 text-center text-2xl pt-10",
                    children: "My learning place ✍",
                  }),
                  C.jsx("p", {
                    className: "text-center m-8 mt-20 text-wrap",
                    children:
                      "I often find myself learning programming on my own through various online resources rather than relying solely on my school curriculum. It’s this self-taught approach that has fueled my passion and allowed me to explore diverse coding challenges.",
                  }),
                  C.jsx("p", {
                    className: "text-center text-3xl",
                    children: "💻💻💻",
                  }),
                ],
              }),
            }),
          }),
          C.jsx("div", {
            children: C.jsx(q3, {
              maxWidth: "md",
              sx: { display: "grid", placeItems: "center" },
              children: C.jsxs(Fv, {
                elevation: 3,
                sx: {
                  backgroundColor: "#1c1c1c",
                  boxShadow: "0 2px 15px rgb(234 179 8)",
                },
                className: "shadow-xl shadow-yellow-500 pb-4 ",
                children: [
                  C.jsxs(om, {
                    className: "text-center text-white mb-8",
                    children: [
                      C.jsx("div", {
                        className:
                          "font-bold font-olga text-center text-4xl pt-10 text-yellow-500",
                        children: "My Learning Roadmap",
                      }),
                      C.jsx("div", {
                        className: "h-1 bg-white w-80 mx-auto mb-4",
                      }),
                    ],
                  }),
                  C.jsx(tn.div, {
                    ref: e,
                    initial: { opacity: 0, x: 20 },
                    animate: t ? { opacity: 1, x: 0 } : {},
                    transition: { duration: 1 },
                    className: "flex items-center",
                    children: C.jsx(om, {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      children: C.jsx(l5, {
                        activeStep: Yl.length - 1,
                        orientation: "vertical",
                        sx: { width: "100%", marginLeft: "15px" },
                        children: Yl.map((a, l) =>
                          C.jsx(
                            Fb,
                            {
                              completed: cm.includes(l),
                              children: C.jsx(yc, {
                                children: C.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    a.label === "React"
                                      ? C.jsx(tn.img, {
                                          src: a.img,
                                          alt: a.label,
                                          className: "w-8 h-8 mr-2",
                                          variants: n,
                                          animate: "animate",
                                        })
                                      : C.jsx("img", {
                                          src: a.img,
                                          alt: a.label,
                                          className: `mr-2 ${
                                            a.label === "PHP" ||
                                            a.label === "Laravel"
                                              ? "w-16 h-10"
                                              : "w-8 h-8"
                                          }`,
                                        }),
                                    C.jsx(gc, {
                                      variant: "body1",
                                      className: "text-white",
                                      children: a.label,
                                    }),
                                  ],
                                }),
                              }),
                            },
                            l
                          )
                        ),
                      }),
                    }),
                  }),
                  C.jsx(gc, {
                    variant: "h6",
                    className: "mt-4 text-white text-center",
                    children: cm.length === Yl.length && "Keep going!",
                  }),
                ],
              }),
            }),
          }),
          C.jsx("div", {
            className: "mx-auto hidden lg:block",
            children: C.jsx("a", {
              href: "https://www.youtube.com/results?search_query=learning+programming+language+playlist",
              target: "_blank",
              rel: "noopener noreferrer",
              children: C.jsxs("div", {
                className: "pb-40 me-20 mt-24",
                style: {
                  backgroundColor: r[1] ? "rgb(234 179 8)" : "#1c1c1c",
                  color: r[1] ? "#1c1c1c" : "#fff",
                  boxShadow: r[1]
                    ? "0 2px 10px #1c1c1c"
                    : "0 2px 10px rgb(234 179 8)",
                  transition: "background-color 0.3s",
                },
                onMouseEnter: () => o(1),
                onMouseLeave: () => s(1),
                children: [
                  C.jsx("div", {
                    className:
                      "font-medium font-glaci ps-3 pe-3 text-center text-2xl pt-10",
                    children: "My Goal 🎯",
                  }),
                  C.jsx("p", {
                    className: "text-center m-8 mt-16 text-wrap",
                    children:
                      "My goal is to become a skilled full stack developer and to gain extensive knowledge in the world of programming. With expertise across various technologies, I aim to create innovative and impactful solutions while continuously deepening my knowledge and skills in this field.",
                  }),
                  C.jsx("p", {
                    className: "text-center text-3xl",
                    children: "✨✨✨",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  };
function x5(e, t, n = 1, r = 1) {
  return {
    src: `${e}?w=${t * r}&h=${t * n}&fit=crop&auto=format`,
    srcSet: `${e}?w=${t * r}&h=${t * n}&fit=crop&auto=format&dpr=2 2x`,
  };
}
function w5() {
  const e = [
      {
        img: "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlfGVufDB8fDB8fHww",
        title: "Breakfast",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1669917784338-3030eb863b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5Ym9hcmR8ZW58MHwxfDB8fHww",
        title: "laptop",
      },
      {
        img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
        title: "keyboard",
      },
      {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        cols: 2,
      },
    ],
    { ref: t, inView: n } = Aa({ triggerOnce: !0, threshold: 0.1 });
  return C.jsxs("div", {
    className: "container mx-auto p-4",
    children: [
      C.jsx("div", {
        className:
          "font-bold text-center lg:text-start lg:ms-14 font-olga text-4xl pt-24 text-yellow-500",
        children: "Motivation",
      }),
      C.jsx("div", {
        className: "mt-2 mx-auto lg:mx-0 h-1 lg:ms-14 bg-white w-80",
      }),
      C.jsxs("div", {
        className: "grid lg:grid-flow-col lg:grid-cols-2 mt-14",
        children: [
          C.jsx("div", {
            className: "lg:ms-14",
            children: C.jsx(tn.div, {
              ref: t,
              initial: { opacity: 0, x: -40 },
              animate: n ? { opacity: 1, x: 0 } : {},
              transition: { duration: 2.3 },
              children: C.jsxs("p", {
                className:
                  "font-medium text-center lg:text-left text-white mt-10 me-3",
                children: [
                  `"Hey, remember! Limitations in your device aren't the end, but the start of your creativity. Focus on your own learning journey without comparing yourself to others. Every effort and experiment is a step toward progress. Keep creating, because you have incredible potential!" `,
                  C.jsx("br", {}),
                  " ",
                  C.jsx("br", {}),
                  " ",
                  C.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "DON'T GIVE UP TO IMPROVE YOURSELF! 🎇",
                  }),
                ],
              }),
            }),
          }),
          C.jsx("div", {
            className: "flex justify-center items-center mt-4",
            children: C.jsx(tn.div, {
              ref: t,
              initial: { opacity: 0 },
              animate: n ? { opacity: 1 } : {},
              transition: { duration: 2.2 },
              children: C.jsx(Nb, {
                sx: { width: "100%", height: "auto" },
                variant: "quilted",
                cols: 4,
                rowHeight: 121,
                children: e.map((r) =>
                  C.jsx(
                    Ib,
                    {
                      cols: r.cols || 1,
                      rows: r.rows || 1,
                      children: C.jsx("img", {
                        ...x5(r.img, 121, r.rows, r.cols),
                        alt: r.title,
                        loading: "lazy",
                        className: "rounded-lg shadow-lg bg-cover bg-fixed",
                      }),
                    },
                    r.img
                  )
                ),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
const S5 = () =>
    C.jsx(C.Fragment, {
      children: C.jsx("div", {
        className:
          "flex items-center justify-center min-h-screen font-bold text-white",
        children: C.jsxs("div", {
          className: "text-center",
          children: [
            C.jsx("div", {
              className: "font-bold font-olga text-3xl lg:text-7xl",
              children: C.jsx("span", {
                className: "font-bold textt font-olga text-3xl lg:text-7xl",
                children: "GOOd BYE!",
              }),
            }),
            C.jsx("p", {
              className: "mt-2 text-3xl textt font-glaci",
              children: "Thanks for visit my portfolio website",
            }),
          ],
        }),
      }),
    }),
  C5 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%20rgb(234%20179%208)'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-brand-x'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M4%204l11.733%2016h4.267l-11.733%20-16z'%20/%3e%3cpath%20d='M4%2020l6.768%20-6.768m2.46%20-2.46l6.772%20-6.772'%20/%3e%3c/svg%3e",
  k5 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='%20rgb(234%20179%208)'%20class='bi%20bi-instagram'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M8%200C5.829%200%205.556.01%204.703.048%203.85.088%203.269.222%202.76.42a3.9%203.9%200%200%200-1.417.923A3.9%203.9%200%200%200%20.42%202.76C.222%203.268.087%203.85.048%204.7.01%205.555%200%205.827%200%208.001c0%202.172.01%202.444.048%203.297.04.852.174%201.433.372%201.942.205.526.478.972.923%201.417.444.445.89.719%201.416.923.51.198%201.09.333%201.942.372C5.555%2015.99%205.827%2016%208%2016s2.444-.01%203.298-.048c.851-.04%201.434-.174%201.943-.372a3.9%203.9%200%200%200%201.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99%2010.445%2016%2010.173%2016%208s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9%203.9%200%200%200-.923-1.417A3.9%203.9%200%200%200%2013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01%2010.172%200%207.998%200zm-.717%201.442h.718c2.136%200%202.389.007%203.232.046.78.035%201.204.166%201.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275%201.485.039.843.047%201.096.047%203.231s-.008%202.389-.047%203.232c-.035.78-.166%201.203-.275%201.485a2.5%202.5%200%200%201-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5%202.5%200%200%201-.92-.598%202.5%202.5%200%200%201-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24%201.485-.276.738-.034%201.024-.044%202.515-.045zm4.988%201.328a.96.96%200%201%200%200%201.92.96.96%200%200%200%200-1.92m-4.27%201.122a4.109%204.109%200%201%200%200%208.217%204.109%204.109%200%200%200%200-8.217m0%201.441a2.667%202.667%200%201%201%200%205.334%202.667%202.667%200%200%201%200-5.334'/%3e%3c/svg%3e",
  T5 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='%20rgb(234%20179%208)'%20class='bi%20bi-tiktok'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M9%200h1.98c.144.715.54%201.617%201.235%202.512C12.895%203.389%2013.797%204%2015%204v2c-1.753%200-3.07-.814-4-1.829V11a5%205%200%201%201-5-5v2a3%203%200%201%200%203%203z'/%3e%3c/svg%3e",
  P5 =
    "data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%20fill='%20rgb(234%20179%208)'%3e%3cpath%20d='M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39%20c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2%20c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975%20c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714%20c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999%20c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6%20c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5%20c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999%20c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689%20c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33%20c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25%20C2,35.164,8.63,43.804,17.791,46.836z'/%3e%3c/svg%3e",
  E5 = "./laptop-BOGUgsST.jpg",
  b5 = () => {
    const [e, t] = P.useState([!1, !1, !1, !1]),
      n = (i) => {
        const o = [...e];
        (o[i] = !0), t(o);
      },
      r = (i) => {
        const o = [...e];
        (o[i] = !1), t(o);
      };
    return C.jsx(C.Fragment, {
      children: C.jsxs("div", {
        className: "container p-4 text-white",
        children: [
          C.jsx("div", {
            className:
              "font-bold text-center lg:text-start lg:ms-14 font-olga text-4xl pt-24 text-yellow-500",
            children: "Get In Touch",
          }),
          C.jsx("div", {
            className: "mt-2 mx-auto lg:mx-0 h-1 lg:ms-14 bg-white w-10",
          }),
          C.jsx("div", {
            className:
              "mt-2 mx-auto lg:mx-0 h-1 lg:ms-20 hidden lg:block bg-white w-10",
          }),
          C.jsxs("div", {
            className:
              "grid lg:grid-flow-col md:mt-44 lg:mt-14 mt-14 lg:grid-cols-2",
            children: [
              C.jsxs("div", {
                className: "ms-14 me-2",
                children: [
                  C.jsx("p", {
                    className: "text-2xl text-yellow-500 font-serif",
                    children: "Address: JL.Jangli Gabeng, Semarang. Indonesia",
                  }),
                  C.jsx("p", { children: "+6285770715562" }),
                  C.jsx("p", { children: "Email : mutaalibudi@gmail.com" }),
                  C.jsxs("p", {
                    className: "",
                    children: [
                      "© Copyright ",
                      new Date().getFullYear(),
                      " Ridho. All rights reserved.",
                    ],
                  }),
                  C.jsxs("div", {
                    className: "flex space-x-4 mt-5",
                    children: [
                      C.jsx("a", {
                        href: "https://www.instagram.com/ridhz_kun?igsh=aDUwcmNjem44dnVi",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: C.jsx("img", {
                          src: k5,
                          alt: "",
                          style: {
                            width: "28px",
                            height: "28px",
                            marginTop: "8px",
                            transition: "transform 0.3s",
                            transform: e[0] ? "scale(1.5)" : "scale(1)",
                          },
                          onMouseEnter: () => n(0),
                          onMouseLeave: () => r(0),
                        }),
                      }),
                      C.jsx("a", {
                        href: "https://www.tiktok.com/@ridzzkun?_t=8okAMRisxGB&_r=1",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: C.jsx("img", {
                          src: T5,
                          alt: "",
                          style: {
                            width: "28px",
                            height: "28px",
                            marginTop: "8px",
                            transition: "transform 0.3s",
                            transform: e[1] ? "scale(1.5)" : "scale(1)",
                          },
                          onMouseEnter: () => n(1),
                          onMouseLeave: () => r(1),
                        }),
                      }),
                      C.jsx("a", {
                        href: "https://x.com/@ridz_ecto",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: C.jsx("img", {
                          src: C5,
                          alt: "",
                          style: {
                            width: "28px",
                            height: "28px",
                            marginTop: "8px",
                            transition: "transform 0.3s",
                            transform: e[2] ? "scale(1.5)" : "scale(1)",
                          },
                          onMouseEnter: () => n(2),
                          onMouseLeave: () => r(2),
                        }),
                      }),
                      C.jsx("a", {
                        href: "https://github.com/Ridz-web",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: C.jsx("img", {
                          src: P5,
                          alt: "",
                          style: {
                            width: "28px",
                            height: "28px",
                            marginTop: "8px",
                            transition: "transform 0.3s",
                            transform: e[3] ? "scale(1.5)" : "scale(1)",
                          },
                          onMouseEnter: () => n(3),
                          onMouseLeave: () => r(3),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              C.jsx("div", {
                className: "flex items-center justify-center",
                children: C.jsx("img", {
                  width: "300px",
                  height: "280px",
                  className: "rounded-md lg:-mt-8 mt-28 shadow-xl",
                  src: E5,
                  alt: "",
                  style: { transition: "transform 0.3s" },
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
function R5() {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx("div", {
        className:
          "bg-cover bg-fixed bg-[url('./assets/Header/HeaderBG.jpg')] h-[100vh]",
        children: C.jsx("div", {
          className: "bg-black bg-opacity-30 ",
          children: C.jsx(p5, {}),
        }),
      }),
      C.jsx("div", {
        id: "about",
        className: "bg-zinc-800 h-[110vh]",
        children: C.jsx(m5, {}),
      }),
      C.jsx("div", {
        id: "roadmap",
        className: "bg-zinc-700 bg-cover bg-fixed h-[114vh] pt-6",
        children: C.jsx(v5, {}),
      }),
      C.jsx("div", {
        id: "motivation",
        className: "bg-zinc-800 h-[110vh]  border-white border-b-4",
        children: C.jsx(w5, {}),
      }),
      C.jsx("div", {
        className:
          "bg-[url('./assets/Contact/layer-base.png')] h-[100vh]  bg-fixed bg-cover",
        children: C.jsx(S5, {}),
      }),
      C.jsx("div", {
        id: "contact",
        className: "bg-zinc-800 lg:h-[80vh] h-[110vh] border-white border-t-4",
        children: C.jsx(b5, {}),
      }),
    ],
  });
}
Tg(document.getElementById("root")).render(
  C.jsx(P.StrictMode, { children: C.jsx(R5, {}) })
);
