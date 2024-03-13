import ie, { createContext as ms, useContext as Ss, useState as Oe, useCallback as xe, useEffect as $e, useRef as Le } from "react";
import Rs from "react-dom";
var Un = { exports: {} }, Et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function ys() {
  if (mo)
    return Et;
  mo = 1;
  var t = ie, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, u, d) {
    var p, v = {}, N = null, L = null;
    d !== void 0 && (N = "" + d), u.key !== void 0 && (N = "" + u.key), u.ref !== void 0 && (L = u.ref);
    for (p in u)
      o.call(u, p) && !s.hasOwnProperty(p) && (v[p] = u[p]);
    if (l && l.defaultProps)
      for (p in u = l.defaultProps, u)
        v[p] === void 0 && (v[p] = u[p]);
    return { $$typeof: e, type: l, key: N, ref: L, props: v, _owner: r.current };
  }
  return Et.Fragment = n, Et.jsx = a, Et.jsxs = a, Et;
}
var wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So;
function gs() {
  return So || (So = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ie, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), R = Symbol.iterator, A = "@@iterator";
    function F(i) {
      if (i === null || typeof i != "object")
        return null;
      var m = R && i[R] || i[A];
      return typeof m == "function" ? m : null;
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(i) {
      {
        for (var m = arguments.length, E = new Array(m > 1 ? m - 1 : 0), $ = 1; $ < m; $++)
          E[$ - 1] = arguments[$];
        V("error", i, E);
      }
    }
    function V(i, m, E) {
      {
        var $ = j.ReactDebugCurrentFrame, ee = $.getStackAddendum();
        ee !== "" && (m += "%s", E = E.concat([ee]));
        var oe = E.map(function(Z) {
          return String(Z);
        });
        oe.unshift("Warning: " + m), Function.prototype.apply.call(console[i], console, oe);
      }
    }
    var U = !1, G = !1, q = !1, X = !1, ue = !1, ye;
    ye = Symbol.for("react.module.reference");
    function K(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === o || i === s || ue || i === r || i === d || i === p || X || i === L || U || G || q || typeof i == "object" && i !== null && (i.$$typeof === N || i.$$typeof === v || i.$$typeof === a || i.$$typeof === l || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === ye || i.getModuleId !== void 0));
    }
    function _e(i, m, E) {
      var $ = i.displayName;
      if ($)
        return $;
      var ee = m.displayName || m.name || "";
      return ee !== "" ? E + "(" + ee + ")" : E;
    }
    function Me(i) {
      return i.displayName || "Context";
    }
    function ne(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case r:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var m = i;
            return Me(m) + ".Consumer";
          case a:
            var E = i;
            return Me(E._context) + ".Provider";
          case u:
            return _e(i, i.render, "ForwardRef");
          case v:
            var $ = i.displayName || null;
            return $ !== null ? $ : ne(i.type) || "Memo";
          case N: {
            var ee = i, oe = ee._payload, Z = ee._init;
            try {
              return ne(Z(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, Ve = 0, We, Ie, ze, je, Y, J, h;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function b() {
      {
        if (Ve === 0) {
          We = console.log, Ie = console.info, ze = console.warn, je = console.error, Y = console.group, J = console.groupCollapsed, h = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        Ve++;
      }
    }
    function O() {
      {
        if (Ve--, Ve === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, i, {
              value: We
            }),
            info: de({}, i, {
              value: Ie
            }),
            warn: de({}, i, {
              value: ze
            }),
            error: de({}, i, {
              value: je
            }),
            group: de({}, i, {
              value: Y
            }),
            groupCollapsed: de({}, i, {
              value: J
            }),
            groupEnd: de({}, i, {
              value: h
            })
          });
        }
        Ve < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = j.ReactCurrentDispatcher, z;
    function x(i, m, E) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (ee) {
            var $ = ee.stack.trim().match(/\n( *(at )?)/);
            z = $ && $[1] || "";
          }
        return `
` + z + i;
      }
    }
    var I = !1, te;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      te = new fe();
    }
    function Q(i, m) {
      if (!i || I)
        return "";
      {
        var E = te.get(i);
        if (E !== void 0)
          return E;
      }
      var $;
      I = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = C.current, C.current = null, b();
      try {
        if (m) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Ge) {
              $ = Ge;
            }
            Reflect.construct(i, [], Z);
          } else {
            try {
              Z.call();
            } catch (Ge) {
              $ = Ge;
            }
            i.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            $ = Ge;
          }
          i();
        }
      } catch (Ge) {
        if (Ge && $ && typeof Ge.stack == "string") {
          for (var H = Ge.stack.split(`
`), Te = $.stack.split(`
`), he = H.length - 1, ve = Te.length - 1; he >= 1 && ve >= 0 && H[he] !== Te[ve]; )
            ve--;
          for (; he >= 1 && ve >= 0; he--, ve--)
            if (H[he] !== Te[ve]) {
              if (he !== 1 || ve !== 1)
                do
                  if (he--, ve--, ve < 0 || H[he] !== Te[ve]) {
                    var ke = `
` + H[he].replace(" at new ", " at ");
                    return i.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", i.displayName)), typeof i == "function" && te.set(i, ke), ke;
                  }
                while (he >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        I = !1, C.current = oe, O(), Error.prepareStackTrace = ee;
      }
      var dt = i ? i.displayName || i.name : "", _o = dt ? x(dt) : "";
      return typeof i == "function" && te.set(i, _o), _o;
    }
    function ce(i, m, E) {
      return Q(i, !1);
    }
    function we(i) {
      var m = i.prototype;
      return !!(m && m.isReactComponent);
    }
    function Pe(i, m, E) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Q(i, we(i));
      if (typeof i == "string")
        return x(i);
      switch (i) {
        case d:
          return x("Suspense");
        case p:
          return x("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return ce(i.render);
          case v:
            return Pe(i.type, m, E);
          case N: {
            var $ = i, ee = $._payload, oe = $._init;
            try {
              return Pe(oe(ee), m, E);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, ge = {}, yt = j.ReactDebugCurrentFrame;
    function it(i) {
      if (i) {
        var m = i._owner, E = Pe(i.type, i._source, m ? m.type : null);
        yt.setExtraStackFrame(E);
      } else
        yt.setExtraStackFrame(null);
    }
    function gt(i, m, E, $, ee) {
      {
        var oe = Function.call.bind(me);
        for (var Z in i)
          if (oe(i, Z)) {
            var H = void 0;
            try {
              if (typeof i[Z] != "function") {
                var Te = Error(($ || "React class") + ": " + E + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Te.name = "Invariant Violation", Te;
              }
              H = i[Z](m, Z, $, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (he) {
              H = he;
            }
            H && !(H instanceof Error) && (it(ee), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", E, Z, typeof H), it(null)), H instanceof Error && !(H.message in ge) && (ge[H.message] = !0, it(ee), S("Failed %s type: %s", E, H.message), it(null));
          }
      }
    }
    var Wt = Array.isArray;
    function ct(i) {
      return Wt(i);
    }
    function Nn(i) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, E = m && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return E;
      }
    }
    function bt(i) {
      try {
        return lt(i), !1;
      } catch {
        return !0;
      }
    }
    function lt(i) {
      return "" + i;
    }
    function zt(i) {
      if (bt(i))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nn(i)), lt(i);
    }
    var Xe = j.ReactCurrentOwner, An = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Gt, Tt;
    Tt = {};
    function Kt(i) {
      if (me.call(i, "ref")) {
        var m = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Cn(i) {
      if (me.call(i, "key")) {
        var m = Object.getOwnPropertyDescriptor(i, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Ln(i, m) {
      if (typeof i.ref == "string" && Xe.current && m && Xe.current.stateNode !== m) {
        var E = ne(Xe.current.type);
        Tt[E] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(Xe.current.type), i.ref), Tt[E] = !0);
      }
    }
    function f(i, m) {
      {
        var E = function() {
          jt || (jt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function c(i, m) {
      {
        var E = function() {
          Gt || (Gt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var _ = function(i, m, E, $, ee, oe, Z) {
      var H = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: i,
        key: m,
        ref: E,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(H, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(H, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    };
    function T(i, m, E, $, ee) {
      {
        var oe, Z = {}, H = null, Te = null;
        E !== void 0 && (zt(E), H = "" + E), Cn(m) && (zt(m.key), H = "" + m.key), Kt(m) && (Te = m.ref, Ln(m, ee));
        for (oe in m)
          me.call(m, oe) && !An.hasOwnProperty(oe) && (Z[oe] = m[oe]);
        if (i && i.defaultProps) {
          var he = i.defaultProps;
          for (oe in he)
            Z[oe] === void 0 && (Z[oe] = he[oe]);
        }
        if (H || Te) {
          var ve = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          H && f(Z, ve), Te && c(Z, ve);
        }
        return _(i, H, Te, ee, $, Xe.current, Z);
      }
    }
    var g = j.ReactCurrentOwner, w = j.ReactDebugCurrentFrame;
    function P(i) {
      if (i) {
        var m = i._owner, E = Pe(i.type, i._source, m ? m.type : null);
        w.setExtraStackFrame(E);
      } else
        w.setExtraStackFrame(null);
    }
    var k;
    k = !1;
    function D(i) {
      return typeof i == "object" && i !== null && i.$$typeof === e;
    }
    function W() {
      {
        if (g.current) {
          var i = ne(g.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function ae(i) {
      {
        if (i !== void 0) {
          var m = i.fileName.replace(/^.*[\\\/]/, ""), E = i.lineNumber;
          return `

Check your code at ` + m + ":" + E + ".";
        }
        return "";
      }
    }
    var Re = {};
    function pe(i) {
      {
        var m = W();
        if (!m) {
          var E = typeof i == "string" ? i : i.displayName || i.name;
          E && (m = `

Check the top-level render call using <` + E + ">.");
        }
        return m;
      }
    }
    function be(i, m) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var E = pe(m);
        if (Re[E])
          return;
        Re[E] = !0;
        var $ = "";
        i && i._owner && i._owner !== g.current && ($ = " It was passed a child from " + ne(i._owner.type) + "."), P(i), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, $), P(null);
      }
    }
    function Ne(i, m) {
      {
        if (typeof i != "object")
          return;
        if (ct(i))
          for (var E = 0; E < i.length; E++) {
            var $ = i[E];
            D($) && be($, m);
          }
        else if (D(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var ee = F(i);
          if (typeof ee == "function" && ee !== i.entries)
            for (var oe = ee.call(i), Z; !(Z = oe.next()).done; )
              D(Z.value) && be(Z.value, m);
        }
      }
    }
    function He(i) {
      {
        var m = i.type;
        if (m == null || typeof m == "string")
          return;
        var E;
        if (typeof m == "function")
          E = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === v))
          E = m.propTypes;
        else
          return;
        if (E) {
          var $ = ne(m);
          gt(E, i.props, "prop", $, i);
        } else if (m.PropTypes !== void 0 && !k) {
          k = !0;
          var ee = ne(m);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(i) {
      {
        for (var m = Object.keys(i.props), E = 0; E < m.length; E++) {
          var $ = m[E];
          if ($ !== "children" && $ !== "key") {
            P(i), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), P(null);
            break;
          }
        }
        i.ref !== null && (P(i), S("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function Ye(i, m, E, $, ee, oe) {
      {
        var Z = K(i);
        if (!Z) {
          var H = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (H += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Te = ae(ee);
          Te ? H += Te : H += W();
          var he;
          i === null ? he = "null" : ct(i) ? he = "array" : i !== void 0 && i.$$typeof === e ? (he = "<" + (ne(i.type) || "Unknown") + " />", H = " Did you accidentally export a JSX literal instead of a component?") : he = typeof i, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, H);
        }
        var ve = T(i, m, E, ee, oe);
        if (ve == null)
          return ve;
        if (Z) {
          var ke = m.children;
          if (ke !== void 0)
            if ($)
              if (ct(ke)) {
                for (var dt = 0; dt < ke.length; dt++)
                  Ne(ke[dt], i);
                Object.freeze && Object.freeze(ke);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(ke, i);
        }
        return i === o ? ut(ve) : He(ve), ve;
      }
    }
    function Qe(i, m, E) {
      return Ye(i, m, E, !0);
    }
    function ps(i, m, E) {
      return Ye(i, m, E, !1);
    }
    var vs = ps, _s = Qe;
    wt.Fragment = o, wt.jsx = vs, wt.jsxs = _s;
  }()), wt;
}
process.env.NODE_ENV === "production" ? Un.exports = ys() : Un.exports = gs();
var xn = Un.exports;
function bs(t) {
  const e = new Error(t);
  if (e.stack === void 0)
    try {
      throw e;
    } catch {
    }
  return e;
}
var Ts = bs, M = Ts;
function Es(t) {
  return !!t && typeof t.then == "function";
}
var re = Es;
function ws(t, e) {
  if (t != null)
    return t;
  throw M(e ?? "Got unexpected null or undefined");
}
var le = ws;
function B(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
class on {
  getValue() {
    throw M("BaseLoadable");
  }
  toPromise() {
    throw M("BaseLoadable");
  }
  valueMaybe() {
    throw M("BaseLoadable");
  }
  valueOrThrow() {
    throw M(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw M("BaseLoadable");
  }
  promiseOrThrow() {
    throw M(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw M("BaseLoadable");
  }
  errorOrThrow() {
    throw M(`Loadable expected error, but in "${this.state}" state`);
  }
  is(e) {
    return e.state === this.state && e.contents === this.contents;
  }
  map(e) {
    throw M("BaseLoadable");
  }
}
class Ns extends on {
  constructor(e) {
    super(), B(this, "state", "hasValue"), B(this, "contents", void 0), this.contents = e;
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {
  }
  errorMaybe() {
  }
  map(e) {
    try {
      const n = e(this.contents);
      return re(n) ? tt(n) : pt(n) ? n : Dt(n);
    } catch (n) {
      return re(n) ? (
        // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        // $FlowFixMe[prop-missing]
        tt(n.next(() => this.map(e)))
      ) : rn(n);
    }
  }
}
class As extends on {
  constructor(e) {
    super(), B(this, "state", "hasError"), B(this, "contents", void 0), this.contents = e;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {
  }
  promiseMaybe() {
  }
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(e) {
    return this;
  }
}
class Yo extends on {
  constructor(e) {
    super(), B(this, "state", "loading"), B(this, "contents", void 0), this.contents = e;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {
  }
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {
  }
  map(e) {
    return tt(this.contents.then((n) => {
      const o = e(n);
      if (pt(o)) {
        const r = o;
        switch (r.state) {
          case "hasValue":
            return r.contents;
          case "hasError":
            throw r.contents;
          case "loading":
            return r.contents;
        }
      }
      return o;
    }).catch((n) => {
      if (re(n))
        return n.then(() => this.map(e).contents);
      throw n;
    }));
  }
}
function Dt(t) {
  return Object.freeze(new Ns(t));
}
function rn(t) {
  return Object.freeze(new As(t));
}
function tt(t) {
  return Object.freeze(new Yo(t));
}
function qo() {
  return Object.freeze(new Yo(new Promise(() => {
  })));
}
function Cs(t) {
  return t.every((e) => e.state === "hasValue") ? Dt(t.map((e) => e.contents)) : t.some((e) => e.state === "hasError") ? rn(le(t.find((e) => e.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : tt(Promise.all(t.map((e) => e.contents)));
}
function Zo(t) {
  const n = (Array.isArray(t) ? t : Object.getOwnPropertyNames(t).map((r) => t[r])).map((r) => pt(r) ? r : re(r) ? tt(r) : Dt(r)), o = Cs(n);
  return Array.isArray(t) ? (
    // $FlowIssue[incompatible-return]
    o
  ) : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    // $FlowIssue[incompatible-call]
    o.map((r) => Object.getOwnPropertyNames(t).reduce(
      // $FlowFixMe[invalid-computed-prop]
      (s, a, l) => ({
        ...s,
        [a]: r[l]
      }),
      {}
    ))
  );
}
function pt(t) {
  return t instanceof on;
}
const Ls = {
  of: (t) => re(t) ? tt(t) : pt(t) ? t : Dt(t),
  error: (t) => rn(t),
  // $FlowIssue[incompatible-return]
  loading: () => qo(),
  // $FlowIssue[unclear-type]
  all: Zo,
  isLoadable: pt
};
var rt = {
  loadableWithValue: Dt,
  loadableWithError: rn,
  loadableWithPromise: tt,
  loadableLoading: qo,
  loadableAll: Zo,
  isLoadable: pt,
  RecoilLoadable: Ls
}, Vs = rt.loadableWithValue, Is = rt.loadableWithError, Ps = rt.loadableWithPromise, ks = rt.loadableLoading, Ds = rt.loadableAll, $s = rt.isLoadable, Os = rt.RecoilLoadable, $t = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  loadableWithValue: Vs,
  loadableWithError: Is,
  loadableWithPromise: Ps,
  loadableLoading: ks,
  loadableAll: Ds,
  isLoadable: $s,
  RecoilLoadable: Os
});
const Bn = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  // Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
  RECOIL_GKS_ENABLED: /* @__PURE__ */ new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
};
function Ms(t, e) {
  var n, o;
  const r = (n = process.env[t]) === null || n === void 0 || (o = n.toLowerCase()) === null || o === void 0 ? void 0 : o.trim();
  if (r == null || r === "")
    return;
  if (!["true", "false"].includes(r))
    throw M(`process.env.${t} value must be 'true', 'false', or empty: ${r}`);
  e(r === "true");
}
function Us(t, e) {
  var n;
  const o = (n = process.env[t]) === null || n === void 0 ? void 0 : n.trim();
  o == null || o === "" || e(o.split(/\s*,\s*|\s+/));
}
function xs() {
  var t;
  typeof process > "u" || ((t = process) === null || t === void 0 ? void 0 : t.env) != null && (Ms("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (e) => {
    Bn.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
  }), Us("RECOIL_GKS_ENABLED", (e) => {
    e.forEach((n) => {
      Bn.RECOIL_GKS_ENABLED.add(n);
    });
  }));
}
xs();
var St = Bn;
function sn(t) {
  return St.RECOIL_GKS_ENABLED.has(t);
}
sn.setPass = (t) => {
  St.RECOIL_GKS_ENABLED.add(t);
};
sn.setFail = (t) => {
  St.RECOIL_GKS_ENABLED.delete(t);
};
sn.clear = () => {
  St.RECOIL_GKS_ENABLED.clear();
};
var se = sn;
function Bs(t, e, {
  error: n
} = {}) {
  return process.env.NODE_ENV !== "production" && console.error(t, n), null;
}
var Fs = Bs, Se = Fs, Vn, In, Pn;
const Ws = (
  // flowlint-next-line unclear-type:off
  (Vn = ie.createMutableSource) !== null && Vn !== void 0 ? Vn : ie.unstable_createMutableSource
), Jo = (
  // flowlint-next-line unclear-type:off
  (In = ie.useMutableSource) !== null && In !== void 0 ? In : ie.unstable_useMutableSource
), Zn = (
  // flowlint-next-line unclear-type:off
  (Pn = ie.useSyncExternalStore) !== null && Pn !== void 0 ? Pn : (
    // flowlint-next-line unclear-type:off
    ie.unstable_useSyncExternalStore
  )
);
let Ro = !1;
function zs() {
  var t;
  const {
    ReactCurrentDispatcher: e,
    ReactCurrentOwner: n
  } = (
    /* $FlowFixMe[prop-missing] This workaround was approved as a safer mechanism
     * to detect if the current renderer supports useSyncExternalStore()
     * https://fb.workplace.com/groups/reactjs/posts/9558682330846963/ */
    ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  ), r = ((t = e == null ? void 0 : e.current) !== null && t !== void 0 ? t : n.currentDispatcher).useSyncExternalStore != null;
  return Zn && !r && !Ro && (Ro = !0, Se("A React renderer without React 18+ API support is being used with React 18+.")), r;
}
function js() {
  return se("recoil_transition_support") ? {
    mode: "TRANSITION_SUPPORT",
    early: !0,
    concurrent: !0
  } : se("recoil_sync_external_store") && Zn != null ? {
    mode: "SYNC_EXTERNAL_STORE",
    early: !0,
    concurrent: !1
  } : se("recoil_mutable_source") && Jo != null && typeof window < "u" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE ? se("recoil_suppress_rerender_in_callback") ? {
    mode: "MUTABLE_SOURCE",
    early: !0,
    concurrent: !0
  } : {
    mode: "MUTABLE_SOURCE",
    early: !1,
    concurrent: !1
  } : se("recoil_suppress_rerender_in_callback") ? {
    mode: "LEGACY",
    early: !0,
    concurrent: !1
  } : {
    mode: "LEGACY",
    early: !1,
    concurrent: !1
  };
}
function Gs() {
  return !1;
}
var Rt = {
  createMutableSource: Ws,
  useMutableSource: Jo,
  useSyncExternalStore: Zn,
  currentRendererSupportsUseSyncExternalStore: zs,
  reactMode: js,
  isFastRefreshEnabled: Gs
};
class Jn {
  constructor(e) {
    B(this, "key", void 0), this.key = e;
  }
  toJSON() {
    return {
      key: this.key
    };
  }
}
class Xo extends Jn {
}
class Qo extends Jn {
}
function Ks(t) {
  return t instanceof Xo || t instanceof Qo;
}
var an = {
  AbstractRecoilValue: Jn,
  RecoilState: Xo,
  RecoilValueReadOnly: Qo,
  isRecoilValue: Ks
}, Hs = an.AbstractRecoilValue, Ys = an.RecoilState, qs = an.RecoilValueReadOnly, Zs = an.isRecoilValue, nt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Hs,
  RecoilState: Ys,
  RecoilValueReadOnly: qs,
  isRecoilValue: Zs
});
function Js(t, ...e) {
  let n = 0;
  return t.replace(/%s/g, () => String(e[n++]));
}
var Xs = Js;
function Qs(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const n = Xs.call(null, t, ...e), o = new Error(n);
    o.name = "Expectation Violation", console.error(o);
  }
}
var ea = Qs, cn = ea;
function ta(t, e) {
  return function* () {
    let n = 0;
    for (const o of t)
      yield e(o, n++);
  }();
}
var ln = ta;
const {
  isFastRefreshEnabled: na
} = Rt;
class er {
}
const oa = new er(), ot = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map();
function ra(t) {
  return ln(t, (e) => le(Xn.get(e)));
}
function sa(t) {
  if (ot.has(t)) {
    const e = `Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    process.env.NODE_ENV !== "production" ? na() || cn(e, "recoil") : console.warn(e);
  }
}
function aa(t) {
  St.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && sa(t.key), ot.set(t.key, t);
  const e = t.set == null ? new nt.RecoilValueReadOnly(t.key) : new nt.RecoilState(t.key);
  return Xn.set(t.key, e), e;
}
class tr extends Error {
}
function ia(t) {
  const e = ot.get(t);
  if (e == null)
    throw new tr(`Missing definition for RecoilValue: "${t}""`);
  return e;
}
function ca(t) {
  return ot.get(t);
}
const Qt = /* @__PURE__ */ new Map();
function la(t) {
  var e;
  if (!se("recoil_memory_managament_2020"))
    return;
  const n = ot.get(t);
  if (n != null && (e = n.shouldDeleteConfigOnRelease) !== null && e !== void 0 && e.call(n)) {
    var o;
    ot.delete(t), (o = nr(t)) === null || o === void 0 || o(), Qt.delete(t);
  }
}
function ua(t, e) {
  se("recoil_memory_managament_2020") && (e === void 0 ? Qt.delete(t) : Qt.set(t, e));
}
function nr(t) {
  return Qt.get(t);
}
var Ce = {
  nodes: ot,
  recoilValues: Xn,
  registerNode: aa,
  getNode: ia,
  getNodeMaybe: ca,
  deleteNodeConfigIfPossible: la,
  setConfigDeletionHandler: ua,
  getConfigDeletionHandler: nr,
  recoilValuesForKeys: ra,
  NodeMissingError: tr,
  DefaultValue: er,
  DEFAULT_VALUE: oa
};
function da(t, e) {
  e();
}
var fa = {
  enqueueExecution: da
};
function ha(t, e) {
  return e = { exports: {} }, t(e, e.exports), e.exports;
}
var pa = ha(function(t) {
  var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
    return typeof f;
  } : function(f) {
    return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
  }, n = {}, o = 5, r = Math.pow(2, o), s = r - 1, a = r / 2, l = r / 4, u = {}, d = function(c) {
    return function() {
      return c;
    };
  }, p = n.hash = function(f) {
    var c = typeof f > "u" ? "undefined" : e(f);
    if (c === "number")
      return f;
    c !== "string" && (f += "");
    for (var _ = 0, T = 0, g = f.length; T < g; ++T) {
      var w = f.charCodeAt(T);
      _ = (_ << 5) - _ + w | 0;
    }
    return _;
  }, v = function(c) {
    return c -= c >> 1 & 1431655765, c = (c & 858993459) + (c >> 2 & 858993459), c = c + (c >> 4) & 252645135, c += c >> 8, c += c >> 16, c & 127;
  }, N = function(c, _) {
    return _ >>> c & s;
  }, L = function(c) {
    return 1 << c;
  }, R = function(c, _) {
    return v(c & _ - 1);
  }, A = function(c, _, T, g) {
    var w = g;
    if (!c) {
      var P = g.length;
      w = new Array(P);
      for (var k = 0; k < P; ++k)
        w[k] = g[k];
    }
    return w[_] = T, w;
  }, F = function(c, _, T) {
    var g = T.length - 1, w = 0, P = 0, k = T;
    if (c)
      w = P = _;
    else
      for (k = new Array(g); w < _; )
        k[P++] = T[w++];
    for (++w; w <= g; )
      k[P++] = T[w++];
    return c && (k.length = g), k;
  }, j = function(c, _, T, g) {
    var w = g.length;
    if (c) {
      for (var P = w; P >= _; )
        g[P--] = g[P];
      return g[_] = T, g;
    }
    for (var k = 0, D = 0, W = new Array(w + 1); k < _; )
      W[D++] = g[k++];
    for (W[_] = T; k < w; )
      W[++D] = g[k++];
    return W;
  }, S = 1, V = 2, U = 3, G = 4, q = {
    __hamt_isEmpty: !0
  }, X = function(c) {
    return c === q || c && c.__hamt_isEmpty;
  }, ue = function(c, _, T, g) {
    return {
      type: S,
      edit: c,
      hash: _,
      key: T,
      value: g,
      _modify: ze
    };
  }, ye = function(c, _, T) {
    return {
      type: V,
      edit: c,
      hash: _,
      children: T,
      _modify: je
    };
  }, K = function(c, _, T) {
    return {
      type: U,
      edit: c,
      mask: _,
      children: T,
      _modify: Y
    };
  }, _e = function(c, _, T) {
    return {
      type: G,
      edit: c,
      size: _,
      children: T,
      _modify: J
    };
  }, Me = function(c) {
    return c === q || c.type === S || c.type === V;
  }, ne = function(c, _, T, g, w) {
    for (var P = [], k = g, D = 0, W = 0; k; ++W)
      k & 1 && (P[W] = w[D++]), k >>>= 1;
    return P[_] = T, _e(c, D + 1, P);
  }, de = function(c, _, T, g) {
    for (var w = new Array(_ - 1), P = 0, k = 0, D = 0, W = g.length; D < W; ++D)
      if (D !== T) {
        var ae = g[D];
        ae && !X(ae) && (w[P++] = ae, k |= 1 << D);
      }
    return K(c, k, w);
  }, Ve = function f(c, _, T, g, w, P) {
    if (T === w)
      return ye(c, T, [P, g]);
    var k = N(_, T), D = N(_, w);
    return K(c, L(k) | L(D), k === D ? [f(c, _ + o, T, g, w, P)] : k < D ? [g, P] : [P, g]);
  }, We = function(c, _, T, g, w, P, k, D) {
    for (var W = w.length, ae = 0; ae < W; ++ae) {
      var Re = w[ae];
      if (T(k, Re.key)) {
        var pe = Re.value, be = P(pe);
        return be === pe ? w : be === u ? (--D.value, F(c, ae, w)) : A(c, ae, ue(_, g, k, be), w);
      }
    }
    var Ne = P();
    return Ne === u ? w : (++D.value, A(c, W, ue(_, g, k, Ne), w));
  }, Ie = function(c, _) {
    return c === _.edit;
  }, ze = function(c, _, T, g, w, P, k) {
    if (_(P, this.key)) {
      var D = g(this.value);
      return D === this.value ? this : D === u ? (--k.value, q) : Ie(c, this) ? (this.value = D, this) : ue(c, w, P, D);
    }
    var W = g();
    return W === u ? this : (++k.value, Ve(c, T, this.hash, this, w, ue(c, w, P, W)));
  }, je = function(c, _, T, g, w, P, k) {
    if (w === this.hash) {
      var D = Ie(c, this), W = We(D, c, _, this.hash, this.children, g, P, k);
      return W === this.children ? this : W.length > 1 ? ye(c, this.hash, W) : W[0];
    }
    var ae = g();
    return ae === u ? this : (++k.value, Ve(c, T, this.hash, this, w, ue(c, w, P, ae)));
  }, Y = function(c, _, T, g, w, P, k) {
    var D = this.mask, W = this.children, ae = N(T, w), Re = L(ae), pe = R(D, Re), be = D & Re, Ne = be ? W[pe] : q, He = Ne._modify(c, _, T + o, g, w, P, k);
    if (Ne === He)
      return this;
    var ut = Ie(c, this), Ye = D, Qe = void 0;
    if (be && X(He)) {
      if (Ye &= ~Re, !Ye)
        return q;
      if (W.length <= 2 && Me(W[pe ^ 1]))
        return W[pe ^ 1];
      Qe = F(ut, pe, W);
    } else if (!be && !X(He)) {
      if (W.length >= a)
        return ne(c, ae, He, D, W);
      Ye |= Re, Qe = j(ut, pe, He, W);
    } else
      Qe = A(ut, pe, He, W);
    return ut ? (this.mask = Ye, this.children = Qe, this) : K(c, Ye, Qe);
  }, J = function(c, _, T, g, w, P, k) {
    var D = this.size, W = this.children, ae = N(T, w), Re = W[ae], pe = (Re || q)._modify(c, _, T + o, g, w, P, k);
    if (Re === pe)
      return this;
    var be = Ie(c, this), Ne = void 0;
    if (X(Re) && !X(pe))
      ++D, Ne = A(be, ae, pe, W);
    else if (!X(Re) && X(pe)) {
      if (--D, D <= l)
        return de(c, D, ae, W);
      Ne = A(be, ae, q, W);
    } else
      Ne = A(be, ae, pe, W);
    return be ? (this.size = D, this.children = Ne, this) : _e(c, D, Ne);
  };
  q._modify = function(f, c, _, T, g, w, P) {
    var k = T();
    return k === u ? q : (++P.value, ue(f, g, w, k));
  };
  function h(f, c, _, T, g) {
    this._editable = f, this._edit = c, this._config = _, this._root = T, this._size = g;
  }
  h.prototype.setTree = function(f, c) {
    return this._editable ? (this._root = f, this._size = c, this) : f === this._root ? this : new h(this._editable, this._edit, this._config, f, c);
  };
  var y = n.tryGetHash = function(f, c, _, T) {
    for (var g = T._root, w = 0, P = T._config.keyEq; ; )
      switch (g.type) {
        case S:
          return P(_, g.key) ? g.value : f;
        case V: {
          if (c === g.hash)
            for (var k = g.children, D = 0, W = k.length; D < W; ++D) {
              var ae = k[D];
              if (P(_, ae.key))
                return ae.value;
            }
          return f;
        }
        case U: {
          var Re = N(w, c), pe = L(Re);
          if (g.mask & pe) {
            g = g.children[R(g.mask, pe)], w += o;
            break;
          }
          return f;
        }
        case G: {
          if (g = g.children[N(w, c)], g) {
            w += o;
            break;
          }
          return f;
        }
        default:
          return f;
      }
  };
  h.prototype.tryGetHash = function(f, c, _) {
    return y(f, c, _, this);
  };
  var b = n.tryGet = function(f, c, _) {
    return y(f, _._config.hash(c), c, _);
  };
  h.prototype.tryGet = function(f, c) {
    return b(f, c, this);
  };
  var O = n.getHash = function(f, c, _) {
    return y(void 0, f, c, _);
  };
  h.prototype.getHash = function(f, c) {
    return O(f, c, this);
  }, n.get = function(f, c) {
    return y(void 0, c._config.hash(f), f, c);
  }, h.prototype.get = function(f, c) {
    return b(c, f, this);
  };
  var C = n.has = function(f, c, _) {
    return y(u, f, c, _) !== u;
  };
  h.prototype.hasHash = function(f, c) {
    return C(f, c, this);
  };
  var z = n.has = function(f, c) {
    return C(c._config.hash(f), f, c);
  };
  h.prototype.has = function(f) {
    return z(f, this);
  };
  var x = function(c, _) {
    return c === _;
  };
  n.make = function(f) {
    return new h(0, 0, {
      keyEq: f && f.keyEq || x,
      hash: f && f.hash || p
    }, q, 0);
  }, n.empty = n.make();
  var I = n.isEmpty = function(f) {
    return f && !!X(f._root);
  };
  h.prototype.isEmpty = function() {
    return I(this);
  };
  var te = n.modifyHash = function(f, c, _, T) {
    var g = {
      value: T._size
    }, w = T._root._modify(T._editable ? T._edit : NaN, T._config.keyEq, 0, f, c, _, g);
    return T.setTree(w, g.value);
  };
  h.prototype.modifyHash = function(f, c, _) {
    return te(_, f, c, this);
  };
  var fe = n.modify = function(f, c, _) {
    return te(f, _._config.hash(c), c, _);
  };
  h.prototype.modify = function(f, c) {
    return fe(c, f, this);
  };
  var Q = n.setHash = function(f, c, _, T) {
    return te(d(_), f, c, T);
  };
  h.prototype.setHash = function(f, c, _) {
    return Q(f, c, _, this);
  };
  var ce = n.set = function(f, c, _) {
    return Q(_._config.hash(f), f, c, _);
  };
  h.prototype.set = function(f, c) {
    return ce(f, c, this);
  };
  var we = d(u), Pe = n.removeHash = function(f, c, _) {
    return te(we, f, c, _);
  };
  h.prototype.removeHash = h.prototype.deleteHash = function(f, c) {
    return Pe(f, c, this);
  };
  var me = n.remove = function(f, c) {
    return Pe(c._config.hash(f), f, c);
  };
  h.prototype.remove = h.prototype.delete = function(f) {
    return me(f, this);
  };
  var ge = n.beginMutation = function(f) {
    return new h(f._editable + 1, f._edit + 1, f._config, f._root, f._size);
  };
  h.prototype.beginMutation = function() {
    return ge(this);
  };
  var yt = n.endMutation = function(f) {
    return f._editable = f._editable && f._editable - 1, f;
  };
  h.prototype.endMutation = function() {
    return yt(this);
  };
  var it = n.mutate = function(f, c) {
    var _ = ge(c);
    return f(_), yt(_);
  };
  h.prototype.mutate = function(f) {
    return it(f, this);
  };
  var gt = function(c) {
    return c && Wt(c[0], c[1], c[2], c[3], c[4]);
  }, Wt = function(c, _, T, g, w) {
    for (; T < c; ) {
      var P = _[T++];
      if (P && !X(P))
        return ct(P, g, [c, _, T, g, w]);
    }
    return gt(w);
  }, ct = function(c, _, T) {
    switch (c.type) {
      case S:
        return {
          value: _(c),
          rest: T
        };
      case V:
      case G:
      case U:
        var g = c.children;
        return Wt(g.length, g, 0, _, T);
      default:
        return gt(T);
    }
  }, Nn = {
    done: !0
  };
  function bt(f) {
    this.v = f;
  }
  bt.prototype.next = function() {
    if (!this.v)
      return Nn;
    var f = this.v;
    return this.v = gt(f.rest), f;
  }, bt.prototype[Symbol.iterator] = function() {
    return this;
  };
  var lt = function(c, _) {
    return new bt(ct(c._root, _));
  }, zt = function(c) {
    return [c.key, c.value];
  }, Xe = n.entries = function(f) {
    return lt(f, zt);
  };
  h.prototype.entries = h.prototype[Symbol.iterator] = function() {
    return Xe(this);
  };
  var An = function(c) {
    return c.key;
  }, jt = n.keys = function(f) {
    return lt(f, An);
  };
  h.prototype.keys = function() {
    return jt(this);
  };
  var Gt = function(c) {
    return c.value;
  }, Tt = n.values = h.prototype.values = function(f) {
    return lt(f, Gt);
  };
  h.prototype.values = function() {
    return Tt(this);
  };
  var Kt = n.fold = function(f, c, _) {
    var T = _._root;
    if (T.type === S)
      return f(c, T.value, T.key);
    for (var g = [T.children], w = void 0; w = g.pop(); )
      for (var P = 0, k = w.length; P < k; ) {
        var D = w[P++];
        D && D.type && (D.type === S ? c = f(c, D.value, D.key) : g.push(D.children));
      }
    return c;
  };
  h.prototype.fold = function(f, c) {
    return Kt(f, c, this);
  };
  var Cn = n.forEach = function(f, c) {
    return Kt(function(_, T, g) {
      return f(T, g, c);
    }, null, c);
  };
  h.prototype.forEach = function(f) {
    return Cn(f, this);
  };
  var Ln = n.count = function(f) {
    return f._size;
  };
  h.prototype.count = function() {
    return Ln(this);
  }, Object.defineProperty(h.prototype, "size", {
    get: h.prototype.count
  }), t.exports ? t.exports = n : (void 0).hamt = n;
});
class va {
  constructor(e) {
    B(this, "_map", void 0), this._map = new Map(e == null ? void 0 : e.entries());
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(e) {
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
  set(e, n) {
    return this._map.set(e, n), this;
  }
  delete(e) {
    return this._map.delete(e), this;
  }
  clone() {
    return eo(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Qn {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(e) {
    if (B(this, "_hamt", pa.empty.beginMutation()), e instanceof Qn) {
      const n = e._hamt.endMutation();
      e._hamt = n.beginMutation(), this._hamt = n.beginMutation();
    } else if (e)
      for (const [n, o] of e.entries())
        this._hamt.set(n, o);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(e) {
    return this._hamt.get(e);
  }
  has(e) {
    return this._hamt.has(e);
  }
  set(e, n) {
    return this._hamt.set(e, n), this;
  }
  delete(e) {
    return this._hamt.delete(e), this;
  }
  clone() {
    return eo(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function eo(t) {
  return se("recoil_hamt_2020") ? new Qn(t) : new va(t);
}
var _a = {
  persistentMap: eo
}, ma = _a.persistentMap, Sa = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  persistentMap: ma
});
function Ra(t, ...e) {
  const n = /* @__PURE__ */ new Set();
  e:
    for (const o of t) {
      for (const r of e)
        if (r.has(o))
          continue e;
      n.add(o);
    }
  return n;
}
var It = Ra;
function ya(t, e) {
  const n = /* @__PURE__ */ new Map();
  return t.forEach((o, r) => {
    n.set(r, e(o, r));
  }), n;
}
var en = ya;
function ga() {
  return {
    nodeDeps: /* @__PURE__ */ new Map(),
    nodeToNodeSubscriptions: /* @__PURE__ */ new Map()
  };
}
function ba(t) {
  return {
    nodeDeps: en(t.nodeDeps, (e) => new Set(e)),
    nodeToNodeSubscriptions: en(t.nodeToNodeSubscriptions, (e) => new Set(e))
  };
}
function kn(t, e, n, o) {
  const {
    nodeDeps: r,
    nodeToNodeSubscriptions: s
  } = n, a = r.get(t);
  if (a && o && a !== o.nodeDeps.get(t))
    return;
  r.set(t, e);
  const l = a == null ? e : It(e, a);
  for (const u of l)
    s.has(u) || s.set(u, /* @__PURE__ */ new Set()), le(s.get(u)).add(t);
  if (a) {
    const u = It(a, e);
    for (const d of u) {
      if (!s.has(d))
        return;
      const p = le(s.get(d));
      p.delete(t), p.size === 0 && s.delete(d);
    }
  }
}
function Ta(t, e, n, o) {
  var r, s, a, l;
  const u = n.getState();
  o === u.currentTree.version || o === ((r = u.nextTree) === null || r === void 0 ? void 0 : r.version) || o === ((s = u.previousTree) === null || s === void 0 ? void 0 : s.version) || Se("Tried to save dependencies to a discarded tree");
  const d = n.getGraph(o);
  if (kn(t, e, d), o === ((a = u.previousTree) === null || a === void 0 ? void 0 : a.version)) {
    const v = n.getGraph(u.currentTree.version);
    kn(t, e, v, d);
  }
  if (o === ((l = u.previousTree) === null || l === void 0 ? void 0 : l.version) || o === u.currentTree.version) {
    var p;
    const v = (p = u.nextTree) === null || p === void 0 ? void 0 : p.version;
    if (v !== void 0) {
      const N = n.getGraph(v);
      kn(t, e, N, d);
    }
  }
}
var Ot = {
  cloneGraph: ba,
  graph: ga,
  saveDepsToStore: Ta
};
let Ea = 0;
const wa = () => Ea++;
let Na = 0;
const Aa = () => Na++;
let Ca = 0;
const La = () => Ca++;
var un = {
  getNextTreeStateVersion: wa,
  getNextStoreID: Aa,
  getNextComponentID: La
};
const {
  persistentMap: yo
} = Sa, {
  graph: Va
} = Ot, {
  getNextTreeStateVersion: or
} = un;
function rr() {
  const t = or();
  return {
    version: t,
    stateID: t,
    transactionMetadata: {},
    dirtyAtoms: /* @__PURE__ */ new Set(),
    atomValues: yo(),
    nonvalidatedAtoms: yo()
  };
}
function Ia() {
  const t = rr();
  return {
    currentTree: t,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: /* @__PURE__ */ new Set(),
    knownSelectors: /* @__PURE__ */ new Set(),
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(t.version, Va()),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    nodeCleanupFunctions: /* @__PURE__ */ new Map()
  };
}
var sr = {
  makeEmptyTreeState: rr,
  makeEmptyStoreState: Ia,
  getNextTreeStateVersion: or
};
class ar {
}
function Pa() {
  return new ar();
}
var dn = {
  RetentionZone: ar,
  retentionZone: Pa
};
function ka(t, e) {
  const n = new Set(t);
  return n.add(e), n;
}
function Da(t, e) {
  const n = new Set(t);
  return n.delete(e), n;
}
function $a(t, e, n) {
  const o = new Map(t);
  return o.set(e, n), o;
}
function Oa(t, e, n) {
  const o = new Map(t);
  return o.set(e, n(o.get(e))), o;
}
function Ma(t, e) {
  const n = new Map(t);
  return n.delete(e), n;
}
function Ua(t, e) {
  const n = new Map(t);
  return e.forEach((o) => n.delete(o)), n;
}
var ir = {
  setByAddingToSet: ka,
  setByDeletingFromSet: Da,
  mapBySettingInMap: $a,
  mapByUpdatingInMap: Oa,
  mapByDeletingFromMap: Ma,
  mapByDeletingMultipleFromMap: Ua
};
function* xa(t, e) {
  let n = 0;
  for (const o of t)
    e(o, n++) && (yield o);
}
var to = xa;
function Ba(t, e) {
  return new Proxy(t, {
    // Compute and cache lazy property if not already done.
    get: (o, r) => (!(r in o) && r in e && (o[r] = e[r]()), o[r]),
    // This method allows user to iterate keys as normal
    ownKeys: (o) => Object.keys(o)
  });
}
var cr = Ba;
const {
  getNode: Mt,
  getNodeMaybe: Fa,
  recoilValuesForKeys: go
} = Ce, {
  RetentionZone: bo
} = dn, {
  setByAddingToSet: Wa
} = ir, za = Object.freeze(/* @__PURE__ */ new Set());
class ja extends Error {
}
function Ga(t, e, n) {
  if (!se("recoil_memory_managament_2020"))
    return () => {
    };
  const {
    nodesRetainedByZone: o
  } = t.getState().retention;
  function r(s) {
    let a = o.get(s);
    a || o.set(s, a = /* @__PURE__ */ new Set()), a.add(e);
  }
  if (n instanceof bo)
    r(n);
  else if (Array.isArray(n))
    for (const s of n)
      r(s);
  return () => {
    if (!se("recoil_memory_managament_2020"))
      return;
    const {
      retention: s
    } = t.getState();
    function a(l) {
      const u = s.nodesRetainedByZone.get(l);
      u == null || u.delete(e), u && u.size === 0 && s.nodesRetainedByZone.delete(l);
    }
    if (n instanceof bo)
      a(n);
    else if (Array.isArray(n))
      for (const l of n)
        a(l);
  };
}
function no(t, e, n, o) {
  const r = t.getState();
  if (r.nodeCleanupFunctions.has(n))
    return;
  const s = Mt(n), a = Ga(t, n, s.retainedBy), l = s.init(t, e, o);
  r.nodeCleanupFunctions.set(n, () => {
    l(), a();
  });
}
function Ka(t, e, n) {
  no(t, t.getState().currentTree, e, n);
}
function Ha(t, e) {
  var n;
  const o = t.getState();
  (n = o.nodeCleanupFunctions.get(e)) === null || n === void 0 || n(), o.nodeCleanupFunctions.delete(e);
}
function Ya(t, e, n) {
  return no(t, e, n, "get"), Mt(n).get(t, e);
}
function lr(t, e, n) {
  return Mt(n).peek(t, e);
}
function qa(t, e, n) {
  var o;
  const r = Fa(e);
  return r == null || (o = r.invalidate) === null || o === void 0 || o.call(r, t), {
    ...t,
    atomValues: t.atomValues.clone().delete(e),
    nonvalidatedAtoms: t.nonvalidatedAtoms.clone().set(e, n),
    dirtyAtoms: Wa(t.dirtyAtoms, e)
  };
}
function Za(t, e, n, o) {
  const r = Mt(n);
  if (r.set == null)
    throw new ja(`Attempt to set read-only RecoilValue: ${n}`);
  const s = r.set;
  return no(t, e, n, "set"), s(t, e, o);
}
function Ja(t, e, n) {
  const o = t.getState(), r = t.getGraph(e.version), s = Mt(n).nodeType;
  return cr({
    type: s
  }, {
    // $FlowFixMe[underconstrained-implicit-instantiation]
    loadable: () => lr(t, e, n),
    isActive: () => o.knownAtoms.has(n) || o.knownSelectors.has(n),
    isSet: () => s === "selector" ? !1 : e.atomValues.has(n),
    isModified: () => e.dirtyAtoms.has(n),
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: () => {
      var a;
      return go((a = r.nodeDeps.get(n)) !== null && a !== void 0 ? a : []);
    },
    // Reports all "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: () => {
      var a, l;
      return {
        nodes: go(to(ur(t, e, /* @__PURE__ */ new Set([n])), (u) => u !== n)),
        components: ln((a = (l = o.nodeToComponentSubscriptions.get(n)) === null || l === void 0 ? void 0 : l.values()) !== null && a !== void 0 ? a : [], ([u]) => ({
          name: u
        }))
      };
    }
  });
}
function ur(t, e, n) {
  const o = /* @__PURE__ */ new Set(), r = Array.from(n), s = t.getGraph(e.version);
  for (let l = r.pop(); l; l = r.pop()) {
    var a;
    o.add(l);
    const u = (a = s.nodeToNodeSubscriptions.get(l)) !== null && a !== void 0 ? a : za;
    for (const d of u)
      o.has(d) || r.push(d);
  }
  return o;
}
var Ze = {
  getNodeLoadable: Ya,
  peekNodeLoadable: lr,
  setNodeValue: Za,
  initializeNode: Ka,
  cleanUpNode: Ha,
  setUnvalidatedAtomValue_DEPRECATED: qa,
  peekNodeInfo: Ja,
  getDownstreamNodes: ur
};
let dr = null;
function Xa(t) {
  dr = t;
}
function Qa() {
  var t;
  (t = dr) === null || t === void 0 || t();
}
var fr = {
  setInvalidateMemoizedSnapshot: Xa,
  invalidateMemoizedSnapshot: Qa
};
const {
  getDownstreamNodes: ei,
  getNodeLoadable: hr,
  setNodeValue: ti
} = Ze, {
  getNextComponentID: ni
} = un, {
  getNode: oi,
  getNodeMaybe: pr
} = Ce, {
  DefaultValue: oo
} = Ce, {
  reactMode: ri
} = Rt, {
  AbstractRecoilValue: si,
  RecoilState: ai,
  RecoilValueReadOnly: ii,
  isRecoilValue: ci
} = nt, {
  invalidateMemoizedSnapshot: li
} = fr;
function ui(t, {
  key: e
}, n = t.getState().currentTree) {
  var o, r;
  const s = t.getState();
  n.version === s.currentTree.version || n.version === ((o = s.nextTree) === null || o === void 0 ? void 0 : o.version) || n.version === ((r = s.previousTree) === null || r === void 0 ? void 0 : r.version) || Se("Tried to read from a discarded tree");
  const a = hr(t, n, e);
  return a.state === "loading" && a.contents.catch(() => {
  }), a;
}
function di(t, e) {
  const n = t.clone();
  return e.forEach((o, r) => {
    o.state === "hasValue" && o.contents instanceof oo ? n.delete(r) : n.set(r, o);
  }), n;
}
function fi(t, e, {
  key: n
}, o) {
  if (typeof o == "function") {
    const r = hr(t, e, n);
    if (r.state === "loading") {
      const s = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw Se(s), M(s);
    } else if (r.state === "hasError")
      throw r.contents;
    return o(r.contents);
  } else
    return o;
}
function hi(t, e, n) {
  if (n.type === "set") {
    const {
      recoilValue: r,
      valueOrUpdater: s
    } = n, a = fi(t, e, r, s), l = ti(t, e, r.key, a);
    for (const [u, d] of l.entries())
      Fn(e, u, d);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: {
        key: r
      },
      loadable: s
    } = n;
    Fn(e, r, s);
  } else if (n.type === "markModified") {
    const {
      recoilValue: {
        key: r
      }
    } = n;
    e.dirtyAtoms.add(r);
  } else if (n.type === "setUnvalidated") {
    var o;
    const {
      recoilValue: {
        key: r
      },
      unvalidatedValue: s
    } = n, a = pr(r);
    a == null || (o = a.invalidate) === null || o === void 0 || o.call(a, e), e.atomValues.delete(r), e.nonvalidatedAtoms.set(r, s), e.dirtyAtoms.add(r);
  } else
    Se(`Unknown action ${n.type}`);
}
function Fn(t, e, n) {
  n.state === "hasValue" && n.contents instanceof oo ? t.atomValues.delete(e) : t.atomValues.set(e, n), t.dirtyAtoms.add(e), t.nonvalidatedAtoms.delete(e);
}
function vr(t, e) {
  t.replaceState((n) => {
    const o = _r(n);
    for (const r of e)
      hi(t, o, r);
    return mr(t, o), li(), o;
  });
}
function fn(t, e) {
  if (Pt.length) {
    const n = Pt[Pt.length - 1];
    let o = n.get(t);
    o || n.set(t, o = []), o.push(e);
  } else
    vr(t, [e]);
}
const Pt = [];
function pi() {
  const t = /* @__PURE__ */ new Map();
  return Pt.push(t), () => {
    for (const [n, o] of t)
      vr(n, o);
    Pt.pop() !== t && Se("Incorrect order of batch popping");
  };
}
function _r(t) {
  return {
    ...t,
    atomValues: t.atomValues.clone(),
    nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(t.dirtyAtoms)
  };
}
function mr(t, e) {
  const n = ei(t, e, e.dirtyAtoms);
  for (const s of n) {
    var o, r;
    (o = pr(s)) === null || o === void 0 || (r = o.invalidate) === null || r === void 0 || r.call(o, e);
  }
}
function Sr(t, e, n) {
  fn(t, {
    type: "set",
    recoilValue: e,
    valueOrUpdater: n
  });
}
function vi(t, e, n) {
  if (n instanceof oo)
    return Sr(t, e, n);
  fn(t, {
    type: "setLoadable",
    recoilValue: e,
    loadable: n
  });
}
function _i(t, e) {
  fn(t, {
    type: "markModified",
    recoilValue: e
  });
}
function mi(t, e, n) {
  fn(t, {
    type: "setUnvalidated",
    recoilValue: e,
    unvalidatedValue: n
  });
}
function Si(t, {
  key: e
}, n, o = null) {
  const r = ni(), s = t.getState();
  s.nodeToComponentSubscriptions.has(e) || s.nodeToComponentSubscriptions.set(e, /* @__PURE__ */ new Map()), le(s.nodeToComponentSubscriptions.get(e)).set(r, [o ?? "<not captured>", n]);
  const a = ri();
  if (a.early && (a.mode === "LEGACY" || a.mode === "MUTABLE_SOURCE")) {
    const l = t.getState().nextTree;
    l && l.dirtyAtoms.has(e) && n(l);
  }
  return {
    release: () => {
      const l = t.getState(), u = l.nodeToComponentSubscriptions.get(e);
      if (u === void 0 || !u.has(r)) {
        Se(`Subscription missing at release time for atom ${e}. This is a bug in Recoil.`);
        return;
      }
      u.delete(r), u.size === 0 && l.nodeToComponentSubscriptions.delete(e);
    }
  };
}
function Ri(t, e) {
  var n;
  const {
    currentTree: o
  } = t.getState(), r = oi(e.key);
  (n = r.clearCache) === null || n === void 0 || n.call(r, t, o);
}
var Be = {
  RecoilValueReadOnly: ii,
  AbstractRecoilValue: si,
  RecoilState: ai,
  getRecoilValueAsLoadable: ui,
  setRecoilValue: Sr,
  setRecoilValueLoadable: vi,
  markRecoilValueModified: _i,
  setUnvalidatedRecoilValue: mi,
  subscribeToRecoilValue: Si,
  isRecoilValue: ci,
  applyAtomValueWrites: di,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart: pi,
  writeLoadableToTreeState: Fn,
  invalidateDownstreams: mr,
  copyTreeState: _r,
  refreshRecoilValue: Ri
};
function yi(t, e, n) {
  const o = t.entries();
  let r = o.next();
  for (; !r.done; ) {
    const s = r.value;
    if (e.call(n, s[1], s[0], t))
      return !0;
    r = o.next();
  }
  return !1;
}
var gi = yi;
const {
  cleanUpNode: bi
} = Ze, {
  deleteNodeConfigIfPossible: Ti,
  getNode: Rr
} = Ce, {
  RetentionZone: yr
} = dn, Ei = 12e4, gr = /* @__PURE__ */ new Set();
function br(t, e) {
  const n = t.getState(), o = n.currentTree;
  if (n.nextTree) {
    Se("releaseNodesNowOnCurrentTree should only be called at the end of a batch");
    return;
  }
  const r = /* @__PURE__ */ new Set();
  for (const a of e)
    if (a instanceof yr)
      for (const l of Ci(n, a))
        r.add(l);
    else
      r.add(a);
  const s = wi(t, r);
  for (const a of s)
    Ai(t, o, a);
}
function wi(t, e) {
  const n = t.getState(), o = n.currentTree, r = t.getGraph(o.version), s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  return l(e), s;
  function l(u) {
    const d = /* @__PURE__ */ new Set(), p = Ni(
      t,
      o,
      u,
      s,
      // don't descend into these
      a
      // don't descend into these
    );
    for (const R of p) {
      var v;
      if (Rr(R).retainedBy === "recoilRoot") {
        a.add(R);
        continue;
      }
      if (((v = n.retention.referenceCounts.get(R)) !== null && v !== void 0 ? v : 0) > 0) {
        a.add(R);
        continue;
      }
      if (Tr(R).some((F) => n.retention.referenceCounts.get(F))) {
        a.add(R);
        continue;
      }
      const A = r.nodeToNodeSubscriptions.get(R);
      if (A && gi(A, (F) => a.has(F))) {
        a.add(R);
        continue;
      }
      s.add(R), d.add(R);
    }
    const N = /* @__PURE__ */ new Set();
    for (const R of d)
      for (const A of (L = r.nodeDeps.get(R)) !== null && L !== void 0 ? L : gr) {
        var L;
        s.has(A) || N.add(A);
      }
    N.size && l(N);
  }
}
function Ni(t, e, n, o, r) {
  const s = t.getGraph(e.version), a = [], l = /* @__PURE__ */ new Set();
  for (; n.size > 0; )
    u(le(n.values().next().value));
  return a;
  function u(d) {
    if (o.has(d) || r.has(d)) {
      n.delete(d);
      return;
    }
    if (l.has(d))
      return;
    const p = s.nodeToNodeSubscriptions.get(d);
    if (p)
      for (const v of p)
        u(v);
    l.add(d), n.delete(d), a.push(d);
  }
}
function Ai(t, e, n) {
  if (!se("recoil_memory_managament_2020"))
    return;
  bi(t, n);
  const o = t.getState();
  o.knownAtoms.delete(n), o.knownSelectors.delete(n), o.nodeTransactionSubscriptions.delete(n), o.retention.referenceCounts.delete(n);
  const r = Tr(n);
  for (const u of r) {
    var s;
    (s = o.retention.nodesRetainedByZone.get(u)) === null || s === void 0 || s.delete(n);
  }
  e.atomValues.delete(n), e.dirtyAtoms.delete(n), e.nonvalidatedAtoms.delete(n);
  const a = o.graphsByVersion.get(e.version);
  if (a) {
    const u = a.nodeDeps.get(n);
    if (u !== void 0) {
      a.nodeDeps.delete(n);
      for (const d of u) {
        var l;
        (l = a.nodeToNodeSubscriptions.get(d)) === null || l === void 0 || l.delete(n);
      }
    }
    a.nodeToNodeSubscriptions.delete(n);
  }
  Ti(n);
}
function Ci(t, e) {
  var n;
  return (n = t.retention.nodesRetainedByZone.get(e)) !== null && n !== void 0 ? n : gr;
}
function Tr(t) {
  const e = Rr(t).retainedBy;
  return e === void 0 || e === "components" || e === "recoilRoot" ? [] : e instanceof yr ? [e] : e;
}
function Li(t, e) {
  const n = t.getState();
  n.nextTree ? n.retention.retainablesToCheckForRelease.add(e) : br(t, /* @__PURE__ */ new Set([e]));
}
function Vi(t, e, n) {
  var o;
  if (!se("recoil_memory_managament_2020"))
    return;
  const r = t.getState().retention.referenceCounts, s = ((o = r.get(e)) !== null && o !== void 0 ? o : 0) + n;
  s === 0 ? Er(t, e) : r.set(e, s);
}
function Er(t, e) {
  if (!se("recoil_memory_managament_2020"))
    return;
  t.getState().retention.referenceCounts.delete(e), Li(t, e);
}
function Ii(t) {
  if (!se("recoil_memory_managament_2020"))
    return;
  const e = t.getState();
  br(t, e.retention.retainablesToCheckForRelease), e.retention.retainablesToCheckForRelease.clear();
}
function Pi(t) {
  return t === void 0 ? "recoilRoot" : t;
}
var st = {
  SUSPENSE_TIMEOUT_MS: Ei,
  updateRetainCount: Vi,
  updateRetainCountToZero: Er,
  releaseScheduledRetainablesNow: Ii,
  retainedByOptionWithDefault: Pi
};
const {
  unstable_batchedUpdates: ki
} = Rs;
var Di = {
  unstable_batchedUpdates: ki
};
const {
  unstable_batchedUpdates: $i
} = Di;
var Oi = {
  unstable_batchedUpdates: $i
};
const {
  batchStart: Mi
} = Be, {
  unstable_batchedUpdates: Ui
} = Oi;
let ro = Ui || ((t) => t());
const xi = (t) => {
  ro = t;
}, Bi = () => ro, Fi = (t) => {
  ro(() => {
    let e = () => {
    };
    try {
      e = Mi(), t();
    } finally {
      e();
    }
  });
};
var hn = {
  getBatcher: Bi,
  setBatcher: xi,
  batchUpdates: Fi
};
function* Wi(t) {
  for (const e of t)
    for (const n of e)
      yield n;
}
var wr = Wi;
const Nr = (
  // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  typeof Window > "u" || typeof window > "u"
), zi = (t) => !Nr && // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
(t === window || t instanceof Window), ji = typeof navigator < "u" && navigator.product === "ReactNative";
var Ut = {
  isSSR: Nr,
  isReactNative: ji,
  isWindow: zi
};
function Gi(t, e) {
  let n;
  return (...o) => {
    n || (n = {});
    const r = e(...o);
    return Object.hasOwnProperty.call(n, r) || (n[r] = t(...o)), n[r];
  };
}
function Ki(t, e) {
  let n, o;
  return (...r) => {
    const s = e(...r);
    return n === s || (n = s, o = t(...r)), o;
  };
}
function Hi(t, e) {
  let n, o;
  return [(...a) => {
    const l = e(...a);
    return n === l || (n = l, o = t(...a)), o;
  }, () => {
    n = null;
  }];
}
var Yi = {
  memoizeWithArgsHash: Gi,
  memoizeOneWithArgsHash: Ki,
  memoizeOneWithArgsHashAndInvalidation: Hi
};
const {
  batchUpdates: Wn
} = hn, {
  initializeNode: qi,
  peekNodeInfo: Zi
} = Ze, {
  graph: Ji
} = Ot, {
  getNextStoreID: Xi
} = un, {
  DEFAULT_VALUE: Qi,
  recoilValues: To,
  recoilValuesForKeys: Eo
} = Ce, {
  AbstractRecoilValue: ec,
  getRecoilValueAsLoadable: tc,
  setRecoilValue: wo,
  setUnvalidatedRecoilValue: nc
} = Be, {
  updateRetainCount: Xt
} = st, {
  setInvalidateMemoizedSnapshot: oc
} = fr, {
  getNextTreeStateVersion: rc,
  makeEmptyStoreState: sc
} = sr, {
  isSSR: ac
} = Ut, {
  memoizeOneWithArgsHashAndInvalidation: ic
} = Yi, cc = `
Recoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, do this:

  const release = snapshot.retain();
  try {
    await doSomethingWithSnapshot(snapshot);
  } finally {
    release();
  }

This is currently a DEV-only warning but will become a thrown exception in the next release of Recoil.
`;
class pn {
  // eslint-disable-next-line fb-www/no-uninitialized-properties
  constructor(e, n) {
    B(this, "_store", void 0), B(this, "_refCount", 1), B(this, "getLoadable", (o) => (this.checkRefCount_INTERNAL(), tc(this._store, o))), B(this, "getPromise", (o) => (this.checkRefCount_INTERNAL(), this.getLoadable(o).toPromise())), B(this, "getNodes_UNSTABLE", (o) => {
      if (this.checkRefCount_INTERNAL(), (o == null ? void 0 : o.isModified) === !0) {
        if ((o == null ? void 0 : o.isInitialized) === !1)
          return [];
        const a = this._store.getState().currentTree;
        return Eo(a.dirtyAtoms);
      }
      const r = this._store.getState().knownAtoms, s = this._store.getState().knownSelectors;
      return (o == null ? void 0 : o.isInitialized) == null ? To.values() : o.isInitialized === !0 ? Eo(wr([r, s])) : to(To.values(), ({
        key: a
      }) => !r.has(a) && !s.has(a));
    }), B(this, "getInfo_UNSTABLE", ({
      key: o
    }) => (this.checkRefCount_INTERNAL(), Zi(this._store, this._store.getState().currentTree, o))), B(this, "map", (o) => {
      this.checkRefCount_INTERNAL();
      const r = new zn(this, Wn);
      return o(r), r;
    }), B(this, "asyncMap", async (o) => {
      this.checkRefCount_INTERNAL();
      const r = new zn(this, Wn);
      return r.retain(), await o(r), r.autoRelease_INTERNAL(), r;
    }), this._store = {
      storeID: Xi(),
      parentStoreID: n,
      getState: () => e,
      replaceState: (o) => {
        e.currentTree = o(e.currentTree);
      },
      getGraph: (o) => {
        const r = e.graphsByVersion;
        if (r.has(o))
          return le(r.get(o));
        const s = Ji();
        return r.set(o, s), s;
      },
      subscribeToTransactions: () => ({
        release: () => {
        }
      }),
      addTransactionMetadata: () => {
        throw M("Cannot subscribe to Snapshots");
      }
    };
    for (const o of this._store.getState().knownAtoms)
      qi(this._store, o, "get"), Xt(this._store, o, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    if (this._refCount <= 0) {
      if (process.env.NODE_ENV !== "production")
        throw M("Snapshot has already been released.");
      Se("Attempt to retain() Snapshot that was already released.");
    }
    this._refCount++;
    let e = !1;
    return () => {
      e || (e = !0, this._release());
    };
  }
  /**
   * Release the snapshot on the next tick.  This means the snapshot is retained
   * during the execution of the current function using it.
   */
  autoRelease_INTERNAL() {
    ac || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if (this._refCount--, this._refCount === 0) {
      if (this._store.getState().nodeCleanupFunctions.forEach((e) => e()), this._store.getState().nodeCleanupFunctions.clear(), !se("recoil_memory_managament_2020"))
        return;
    } else
      this._refCount < 0 && process.env.NODE_ENV !== "production" && Se("Snapshot released an extra time.");
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    se("recoil_memory_managament_2020") && this._refCount <= 0 && process.env.NODE_ENV !== "production" && Se(cc);
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID;
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
  // We want to allow the methods to be destructured and used as accessors
  /* eslint-disable fb-www/extra-arrow-initializer */
  /* eslint-enable fb-www/extra-arrow-initializer */
}
function Ar(t, e, n = !1) {
  const o = t.getState(), r = n ? rc() : e.version;
  return {
    // Always clone the TreeState to isolate stores from accidental mutations.
    // For example, reading a selector from a cloned snapshot shouldn't cache
    // in the original treestate which may cause the original to skip
    // initialization of upstream atoms.
    currentTree: {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version: n ? r : e.version,
      stateID: n ? r : e.stateID,
      transactionMetadata: {
        ...e.transactionMetadata
      },
      dirtyAtoms: new Set(e.dirtyAtoms),
      atomValues: e.atomValues.clone(),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone()
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(o.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(o.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(r, t.getGraph(e.version)),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    // FIXME here's a copy
    // Create blank cleanup handlers for atoms so snapshots don't re-run
    // atom effects.
    nodeCleanupFunctions: new Map(ln(o.nodeCleanupFunctions.entries(), ([s]) => [s, () => {
    }]))
  };
}
function lc(t) {
  const e = new pn(sc());
  return t != null ? e.map(t) : e;
}
const [No, Cr] = ic(
  // $FlowFixMe[missing-local-annot]
  (t, e) => {
    var n;
    const o = t.getState(), r = e === "latest" ? (n = o.nextTree) !== null && n !== void 0 ? n : o.currentTree : le(o.previousTree);
    return new pn(Ar(t, r), t.storeID);
  },
  (t, e) => {
    var n, o;
    return String(e) + String(t.storeID) + String((n = t.getState().nextTree) === null || n === void 0 ? void 0 : n.version) + String(t.getState().currentTree.version) + String((o = t.getState().previousTree) === null || o === void 0 ? void 0 : o.version);
  }
);
oc(Cr);
function uc(t, e = "latest") {
  const n = No(t, e);
  return n.isRetained() ? n : (Cr(), No(t, e));
}
class zn extends pn {
  constructor(e, n) {
    super(Ar(e.getStore_INTERNAL(), e.getStore_INTERNAL().getState().currentTree, !0), e.getStoreID()), B(this, "_batch", void 0), B(this, "set", (o, r) => {
      this.checkRefCount_INTERNAL();
      const s = this.getStore_INTERNAL();
      this._batch(() => {
        Xt(s, o.key, 1), wo(this.getStore_INTERNAL(), o, r);
      });
    }), B(this, "reset", (o) => {
      this.checkRefCount_INTERNAL();
      const r = this.getStore_INTERNAL();
      this._batch(() => {
        Xt(r, o.key, 1), wo(this.getStore_INTERNAL(), o, Qi);
      });
    }), B(this, "setUnvalidatedAtomValues_DEPRECATED", (o) => {
      this.checkRefCount_INTERNAL();
      const r = this.getStore_INTERNAL();
      Wn(() => {
        for (const [s, a] of o.entries())
          Xt(r, s, 1), nc(r, new ec(s), a);
      });
    }), this._batch = n;
  }
}
var vn = {
  Snapshot: pn,
  MutableSnapshot: zn,
  freshSnapshot: lc,
  cloneSnapshot: uc
}, dc = vn.Snapshot, fc = vn.MutableSnapshot, hc = vn.freshSnapshot, pc = vn.cloneSnapshot, _n = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Snapshot: dc,
  MutableSnapshot: fc,
  freshSnapshot: hc,
  cloneSnapshot: pc
});
function vc(...t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of t)
    for (const o of n)
      e.add(o);
  return e;
}
var _c = vc;
const {
  useRef: mc
} = ie;
function Sc(t) {
  const e = mc(t);
  return e.current === t && typeof t == "function" && (e.current = t()), e;
}
var Ao = Sc;
const {
  getNextTreeStateVersion: Rc,
  makeEmptyStoreState: Lr
} = sr, {
  cleanUpNode: yc,
  getDownstreamNodes: gc,
  initializeNode: bc,
  setNodeValue: Tc,
  setUnvalidatedAtomValue_DEPRECATED: Ec
} = Ze, {
  graph: wc
} = Ot, {
  cloneGraph: Nc
} = Ot, {
  getNextStoreID: Vr
} = un, {
  createMutableSource: Dn,
  reactMode: Ir
} = Rt, {
  applyAtomValueWrites: Ac
} = Be, {
  releaseScheduledRetainablesNow: Pr
} = st, {
  freshSnapshot: Cc
} = _n, {
  useCallback: Lc,
  useContext: kr,
  useEffect: jn,
  useMemo: Vc,
  useRef: Ic,
  useState: Pc
} = ie;
function Nt() {
  throw M("This component must be used inside a <RecoilRoot> component.");
}
const Dr = Object.freeze({
  storeID: Vr(),
  getState: Nt,
  replaceState: Nt,
  getGraph: Nt,
  subscribeToTransactions: Nt,
  addTransactionMetadata: Nt
});
let Gn = !1;
function Co(t) {
  if (Gn)
    throw M("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
  const e = t.getState();
  if (e.nextTree === null) {
    se("recoil_memory_managament_2020") && se("recoil_release_on_cascading_update_killswitch_2021") && e.commitDepth > 0 && Pr(t);
    const n = e.currentTree.version, o = Rc();
    e.nextTree = {
      ...e.currentTree,
      version: o,
      stateID: o,
      dirtyAtoms: /* @__PURE__ */ new Set(),
      transactionMetadata: {}
    }, e.graphsByVersion.set(o, Nc(le(e.graphsByVersion.get(n))));
  }
}
const $r = ie.createContext({
  current: Dr
}), mn = () => kr($r), Or = ie.createContext(null);
function kc() {
  const t = kr(Or);
  return t == null && cn("Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."), t;
}
function so(t, e, n) {
  const o = gc(t, n, n.dirtyAtoms);
  for (const r of o) {
    const s = e.nodeToComponentSubscriptions.get(r);
    if (s)
      for (const [a, [l, u]] of s)
        u(n);
  }
}
function Mr(t) {
  const e = t.getState(), n = e.currentTree, o = n.dirtyAtoms;
  if (o.size) {
    for (const [r, s] of e.nodeTransactionSubscriptions)
      if (o.has(r))
        for (const [a, l] of s)
          l(t);
    for (const [r, s] of e.transactionSubscriptions)
      s(t);
    (!Ir().early || e.suspendedComponentResolvers.size > 0) && (so(t, e, n), e.suspendedComponentResolvers.forEach((r) => r()), e.suspendedComponentResolvers.clear());
  }
  e.queuedComponentCallbacks_DEPRECATED.forEach((r) => r(n)), e.queuedComponentCallbacks_DEPRECATED.splice(0, e.queuedComponentCallbacks_DEPRECATED.length);
}
function Dc(t) {
  const e = t.getState();
  e.commitDepth++;
  try {
    const {
      nextTree: n
    } = e;
    if (n == null)
      return;
    e.previousTree = e.currentTree, e.currentTree = n, e.nextTree = null, Mr(t), e.previousTree != null ? e.graphsByVersion.delete(e.previousTree.version) : Se("Ended batch with no previous state, which is unexpected", "recoil"), e.previousTree = null, se("recoil_memory_managament_2020") && n == null && Pr(t);
  } finally {
    e.commitDepth--;
  }
}
function $c({
  setNotifyBatcherOfChange: t
}) {
  const e = mn(), [, n] = Pc([]);
  return t(() => n({})), jn(() => (t(() => n({})), () => {
    t(() => {
    });
  }), [t]), jn(() => {
    fa.enqueueExecution("Batcher", () => {
      Dc(e.current);
    });
  }), null;
}
process.env.NODE_ENV !== "production" && typeof window < "u" && !window.$recoilDebugStates && (window.$recoilDebugStates = []);
function Oc(t, e) {
  const n = Lr();
  return e({
    set: (o, r) => {
      const s = n.currentTree, a = Tc(t, s, o.key, r), l = new Set(a.keys()), u = s.nonvalidatedAtoms.clone();
      for (const d of l)
        u.delete(d);
      n.currentTree = {
        ...s,
        dirtyAtoms: _c(s.dirtyAtoms, l),
        atomValues: Ac(s.atomValues, a),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms: u
      };
    },
    setUnvalidatedAtomValues: (o) => {
      o.forEach((r, s) => {
        n.currentTree = Ec(n.currentTree, s, r);
      });
    }
  }), n;
}
function Mc(t) {
  const e = Cc(t), n = e.getStore_INTERNAL().getState();
  return e.retain(), n.nodeCleanupFunctions.forEach((o) => o()), n.nodeCleanupFunctions.clear(), n;
}
let Lo = 0;
function Uc({
  initializeState_DEPRECATED: t,
  initializeState: e,
  store_INTERNAL: n,
  // For use with React "context bridging"
  children: o
}) {
  let r;
  const s = (L) => {
    const R = r.current.graphsByVersion;
    if (R.has(L))
      return le(R.get(L));
    const A = wc();
    return R.set(L, A), A;
  }, a = (L, R) => {
    if (R == null) {
      const {
        transactionSubscriptions: A
      } = v.current.getState(), F = Lo++;
      return A.set(F, L), {
        release: () => {
          A.delete(F);
        }
      };
    } else {
      const {
        nodeTransactionSubscriptions: A
      } = v.current.getState();
      A.has(R) || A.set(R, /* @__PURE__ */ new Map());
      const F = Lo++;
      return le(A.get(R)).set(F, L), {
        release: () => {
          const j = A.get(R);
          j && (j.delete(F), j.size === 0 && A.delete(R));
        }
      };
    }
  }, l = (L) => {
    Co(v.current);
    for (const R of Object.keys(L))
      le(v.current.getState().nextTree).transactionMetadata[R] = L[R];
  }, u = (L) => {
    Co(v.current);
    const R = le(r.current.nextTree);
    let A;
    try {
      Gn = !0, A = L(R);
    } finally {
      Gn = !1;
    }
    A !== R && (process.env.NODE_ENV !== "production" && typeof window < "u" && window.$recoilDebugStates.push(A), r.current.nextTree = A, Ir().early && so(v.current, r.current, A), le(d.current)());
  }, d = Ic(null), p = Lc((L) => {
    d.current = L;
  }, [d]), v = Ao(() => n ?? {
    storeID: Vr(),
    getState: () => r.current,
    replaceState: u,
    getGraph: s,
    subscribeToTransactions: a,
    addTransactionMetadata: l
  });
  n != null && (v.current = n), r = Ao(() => t != null ? Oc(v.current, t) : e != null ? Mc(e) : Lr());
  const N = Vc(() => Dn == null ? void 0 : Dn(r, () => r.current.currentTree.version), [r]);
  return jn(() => {
    const L = v.current;
    for (const R of new Set(L.getState().knownAtoms))
      bc(L, R, "get");
    return () => {
      for (const R of L.getState().knownAtoms)
        yc(L, R);
    };
  }, [v]), /* @__PURE__ */ ie.createElement($r.Provider, {
    value: v
  }, /* @__PURE__ */ ie.createElement(Or.Provider, {
    value: N
  }, /* @__PURE__ */ ie.createElement($c, {
    setNotifyBatcherOfChange: p
  }), o));
}
function xc(t) {
  const {
    override: e,
    ...n
  } = t, o = mn();
  return e === !1 && o.current !== Dr ? t.children : /* @__PURE__ */ ie.createElement(Uc, n);
}
function Bc() {
  return mn().current.storeID;
}
var Ke = {
  RecoilRoot: xc,
  useStoreRef: mn,
  useRecoilMutableSource: kc,
  useRecoilStoreID: Bc,
  notifyComponents_FOR_TESTING: so,
  sendEndOfBatchNotifications_FOR_TESTING: Mr
};
function Fc(t, e) {
  if (t === e)
    return !0;
  if (t.length !== e.length)
    return !1;
  for (let n = 0, o = t.length; n < o; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var Wc = Fc;
const {
  useEffect: zc,
  useRef: jc
} = ie;
function Gc(t) {
  const e = jc();
  return zc(() => {
    e.current = t;
  }), e.current;
}
var Ur = Gc;
const {
  useStoreRef: Kc
} = Ke, {
  SUSPENSE_TIMEOUT_MS: Hc
} = st, {
  updateRetainCount: At
} = st, {
  RetentionZone: Yc
} = dn, {
  useEffect: qc,
  useRef: Zc
} = ie, {
  isSSR: Vo
} = Ut;
function Jc(t) {
  if (se("recoil_memory_managament_2020"))
    return Xc(t);
}
function Xc(t) {
  const n = (Array.isArray(t) ? t : [t]).map((a) => a instanceof Yc ? a : a.key), o = Kc();
  qc(() => {
    if (!se("recoil_memory_managament_2020"))
      return;
    const a = o.current;
    if (r.current && !Vo)
      window.clearTimeout(r.current), r.current = null;
    else
      for (const l of n)
        At(a, l, 1);
    return () => {
      for (const l of n)
        At(a, l, -1);
    };
  }, [o, ...n]);
  const r = Zc(), s = Ur(n);
  if (!Vo && (s === void 0 || !Wc(s, n))) {
    const a = o.current;
    for (const l of n)
      At(a, l, 1);
    if (s)
      for (const l of s)
        At(a, l, -1);
    r.current && window.clearTimeout(r.current), r.current = window.setTimeout(() => {
      r.current = null;
      for (const l of n)
        At(a, l, -1);
    }, Hc);
  }
}
var ao = Jc;
function Qc() {
  return "<component name not available>";
}
var xt = Qc;
const {
  batchUpdates: el
} = hn, {
  DEFAULT_VALUE: xr
} = Ce, {
  currentRendererSupportsUseSyncExternalStore: tl,
  reactMode: at,
  useMutableSource: nl,
  useSyncExternalStore: ol
} = Rt, {
  useRecoilMutableSource: rl,
  useStoreRef: Fe
} = Ke, {
  isRecoilValue: sl
} = nt, {
  AbstractRecoilValue: Kn,
  getRecoilValueAsLoadable: Bt,
  setRecoilValue: tn,
  setUnvalidatedRecoilValue: al,
  subscribeToRecoilValue: vt
} = Be, {
  useCallback: Ae,
  useEffect: _t,
  useMemo: Br,
  useRef: kt,
  useState: io
} = ie, {
  setByAddingToSet: il
} = ir, {
  isSSR: cl
} = Ut;
function co(t, e, n) {
  if (t.state === "hasValue")
    return t.contents;
  throw t.state === "loading" ? new Promise((r) => {
    const s = n.current.getState().suspendedComponentResolvers;
    s.add(r), cl && re(t.contents) && t.contents.finally(() => {
      s.delete(r);
    });
  }) : t.state === "hasError" ? t.contents : M(`Invalid value of loadable atom "${e.key}"`);
}
function Ee(t, e) {
  if (!sl(t))
    throw M(`Invalid argument to ${e}: expected an atom or selector but got ${String(t)}`);
}
function ll() {
  const t = xt(), e = Fe(), [, n] = io([]), o = kt(/* @__PURE__ */ new Set());
  o.current = /* @__PURE__ */ new Set();
  const r = kt(/* @__PURE__ */ new Set()), s = kt(/* @__PURE__ */ new Map()), a = Ae((u) => {
    const d = s.current.get(u);
    d && (d.release(), s.current.delete(u));
  }, [s]), l = Ae((u, d) => {
    s.current.has(d) && n([]);
  }, []);
  return _t(() => {
    const u = e.current;
    It(o.current, r.current).forEach((d) => {
      if (s.current.has(d)) {
        cn(`Double subscription to RecoilValue "${d}"`);
        return;
      }
      const p = vt(u, new Kn(d), (N) => l(N, d), t);
      s.current.set(d, p), u.getState().nextTree ? u.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        l(u.getState(), d);
      }) : l(u.getState(), d);
    }), It(r.current, o.current).forEach((d) => {
      a(d);
    }), r.current = o.current;
  }), _t(() => {
    const u = s.current;
    return It(o.current, new Set(u.keys())).forEach((d) => {
      const p = vt(e.current, new Kn(d), (v) => l(v, d), t);
      u.set(d, p);
    }), () => u.forEach((d, p) => a(p));
  }, [t, e, a, l]), Br(() => {
    function u(R) {
      return process.env.NODE_ENV !== "production" && Ee(R, "useSetRecoilState"), (A) => {
        tn(e.current, R, A);
      };
    }
    function d(R) {
      return process.env.NODE_ENV !== "production" && Ee(R, "useResetRecoilState"), () => tn(e.current, R, xr);
    }
    function p(R) {
      var A;
      process.env.NODE_ENV !== "production" && Ee(R, "useRecoilValueLoadable"), o.current.has(R.key) || (o.current = il(o.current, R.key));
      const F = e.current.getState();
      return Bt(e.current, R, at().early && (A = F.nextTree) !== null && A !== void 0 ? A : F.currentTree);
    }
    function v(R) {
      process.env.NODE_ENV !== "production" && Ee(R, "useRecoilValue");
      const A = p(R);
      return co(A, R, e);
    }
    function N(R) {
      return process.env.NODE_ENV !== "production" && Ee(R, "useRecoilState"), [v(R), u(R)];
    }
    function L(R) {
      return process.env.NODE_ENV !== "production" && Ee(R, "useRecoilStateLoadable"), [p(R), u(R)];
    }
    return {
      getRecoilValue: v,
      getRecoilValueLoadable: p,
      getRecoilState: N,
      getRecoilStateLoadable: L,
      getSetRecoilState: u,
      getResetRecoilState: d
    };
  }, [o, e]);
}
const Ft = {
  current: 0
};
function ul(t) {
  const e = Fe(), n = xt(), o = Ae(() => {
    var l;
    process.env.NODE_ENV !== "production" && Ft.current++;
    const u = e.current, d = u.getState(), p = at().early && (l = d.nextTree) !== null && l !== void 0 ? l : d.currentTree;
    return {
      loadable: Bt(u, t, p),
      key: t.key
    };
  }, [e, t]), r = Ae((l) => {
    let u;
    return () => {
      var d, p;
      const v = l();
      return (d = u) !== null && d !== void 0 && d.loadable.is(v.loadable) && ((p = u) === null || p === void 0 ? void 0 : p.key) === v.key ? u : (u = v, v);
    };
  }, []), s = Br(() => r(o), [o, r]), a = Ae((l) => {
    const u = e.current;
    return vt(u, t, l, n).release;
  }, [e, t, n]);
  return ol(
    a,
    s,
    // getSnapshot()
    s
    // getServerSnapshot() for SSR support
  ).loadable;
}
function dl(t) {
  const e = Fe(), n = Ae(() => {
    var d;
    const p = e.current, v = p.getState(), N = at().early && (d = v.nextTree) !== null && d !== void 0 ? d : v.currentTree;
    return Bt(p, t, N);
  }, [e, t]), o = Ae(() => (process.env.NODE_ENV !== "production" && Ft.current++, n()), [n]), r = xt(), s = Ae((d, p) => {
    const v = e.current;
    return vt(v, t, () => {
      if (!se("recoil_suppress_rerender_in_callback"))
        return p();
      const L = n();
      u.current.is(L) || p(), u.current = L;
    }, r).release;
  }, [e, t, r, n]), a = rl();
  if (a == null)
    throw M("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  const l = nl(a, o, s), u = kt(l);
  return _t(() => {
    u.current = l;
  }), l;
}
function Hn(t) {
  const e = Fe(), n = xt(), o = Ae(() => {
    var u;
    process.env.NODE_ENV !== "production" && Ft.current++;
    const d = e.current, p = d.getState(), v = at().early && (u = p.nextTree) !== null && u !== void 0 ? u : p.currentTree;
    return Bt(d, t, v);
  }, [e, t]), r = Ae(() => ({
    loadable: o(),
    key: t.key
  }), [o, t.key]), s = Ae((u) => {
    const d = r();
    return u.loadable.is(d.loadable) && u.key === d.key ? u : d;
  }, [r]);
  _t(() => {
    const u = vt(e.current, t, (d) => {
      l(s);
    }, n);
    return l(s), u.release;
  }, [n, t, e, s]);
  const [a, l] = io(r);
  return a.key !== t.key ? r().loadable : a.loadable;
}
function fl(t) {
  const e = Fe(), [, n] = io([]), o = xt(), r = Ae(() => {
    var l;
    process.env.NODE_ENV !== "production" && Ft.current++;
    const u = e.current, d = u.getState(), p = at().early && (l = d.nextTree) !== null && l !== void 0 ? l : d.currentTree;
    return Bt(u, t, p);
  }, [e, t]), s = r(), a = kt(s);
  return _t(() => {
    a.current = s;
  }), _t(() => {
    const l = e.current, u = l.getState(), d = vt(l, t, (v) => {
      var N;
      if (!se("recoil_suppress_rerender_in_callback"))
        return n([]);
      const L = r();
      (N = a.current) !== null && N !== void 0 && N.is(L) || n(L), a.current = L;
    }, o);
    if (u.nextTree)
      l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        a.current = null, n([]);
      });
    else {
      var p;
      if (!se("recoil_suppress_rerender_in_callback"))
        return n([]);
      const v = r();
      (p = a.current) !== null && p !== void 0 && p.is(v) || n(v), a.current = v;
    }
    return d.release;
  }, [o, r, t, e]), s;
}
function lo(t) {
  return process.env.NODE_ENV !== "production" && Ee(t, "useRecoilValueLoadable"), se("recoil_memory_managament_2020") && ao(t), {
    TRANSITION_SUPPORT: Hn,
    // Recoil will attemp to detect if `useSyncExternalStore()` is supported with
    // `reactMode()` before calling it.  However, sometimes the host React
    // environment supports it but uses additional React renderers (such as with
    // `react-three-fiber`) which do not.  While this is technically a user issue
    // by using a renderer with React 18+ that doesn't fully support React 18 we
    // don't want to break users if it can be avoided. As the current renderer can
    // change at runtime, we need to dynamically check and fallback if necessary.
    SYNC_EXTERNAL_STORE: tl() ? ul : Hn,
    MUTABLE_SOURCE: dl,
    LEGACY: fl
  }[at().mode](t);
}
function Fr(t) {
  process.env.NODE_ENV !== "production" && Ee(t, "useRecoilValue");
  const e = Fe(), n = lo(t);
  return co(n, t, e);
}
function Sn(t) {
  process.env.NODE_ENV !== "production" && Ee(t, "useSetRecoilState");
  const e = Fe();
  return Ae((n) => {
    tn(e.current, t, n);
  }, [e, t]);
}
function hl(t) {
  process.env.NODE_ENV !== "production" && Ee(t, "useResetRecoilState");
  const e = Fe();
  return Ae(() => {
    tn(e.current, t, xr);
  }, [e, t]);
}
function pl(t) {
  return process.env.NODE_ENV !== "production" && Ee(t, "useRecoilState"), [Fr(t), Sn(t)];
}
function vl(t) {
  return process.env.NODE_ENV !== "production" && Ee(t, "useRecoilStateLoadable"), [lo(t), Sn(t)];
}
function _l() {
  const t = Fe();
  return (e, n = {}) => {
    el(() => {
      t.current.addTransactionMetadata(n), e.forEach((o, r) => al(t.current, new Kn(r), o));
    });
  };
}
function Wr(t) {
  return process.env.NODE_ENV !== "production" && (Ee(t, "useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE"), at().early || Se("Attepmt to use a hook with UNSTABLE_TRANSITION_SUPPORT in a rendering mode incompatible with concurrent rendering.  Try enabling the recoil_sync_external_store or recoil_transition_support GKs.")), se("recoil_memory_managament_2020") && ao(t), Hn(t);
}
function zr(t) {
  process.env.NODE_ENV !== "production" && Ee(t, "useRecoilValue_TRANSITION_SUPPORT_UNSTABLE");
  const e = Fe(), n = Wr(t);
  return co(n, t, e);
}
function ml(t) {
  return process.env.NODE_ENV !== "production" && Ee(t, "useRecoilState_TRANSITION_SUPPORT_UNSTABLE"), [zr(t), Sn(t)];
}
var Sl = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: Ft,
  useRecoilInterface: ll,
  useRecoilState: pl,
  useRecoilStateLoadable: vl,
  useRecoilValue: Fr,
  useRecoilValueLoadable: lo,
  useResetRecoilState: hl,
  useSetRecoilState: Sn,
  useSetUnvalidatedAtomValues: _l,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Wr,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: zr,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: ml
};
function Rl(t, e) {
  const n = /* @__PURE__ */ new Map();
  for (const [o, r] of t)
    e(r, o) && n.set(o, r);
  return n;
}
var yl = Rl;
function gl(t, e) {
  const n = /* @__PURE__ */ new Set();
  for (const o of t)
    e(o) && n.add(o);
  return n;
}
var bl = gl;
function Tl(...t) {
  const e = /* @__PURE__ */ new Map();
  for (let n = 0; n < t.length; n++) {
    const o = t[n].keys();
    let r;
    for (; !(r = o.next()).done; )
      e.set(r.value, t[n].get(r.value));
  }
  return e;
}
var El = Tl;
const {
  batchUpdates: wl
} = hn, {
  DEFAULT_VALUE: Nl,
  getNode: jr,
  nodes: Al
} = Ce, {
  useStoreRef: uo
} = Ke, {
  AbstractRecoilValue: Cl,
  setRecoilValueLoadable: Ll
} = Be, {
  SUSPENSE_TIMEOUT_MS: Vl
} = st, {
  cloneSnapshot: nn
} = _n, {
  useCallback: Rn,
  useEffect: Gr,
  useRef: Io,
  useState: Il
} = ie, {
  isSSR: Po
} = Ut;
function yn(t) {
  const e = uo();
  Gr(() => e.current.subscribeToTransactions(t).release, [t, e]);
}
function ko(t) {
  const e = t.atomValues.toMap(), n = en(yl(e, (o, r) => {
    const a = jr(r).persistence_UNSTABLE;
    return a != null && a.type !== "none" && o.state === "hasValue";
  }), (o) => o.contents);
  return El(t.nonvalidatedAtoms.toMap(), n);
}
function Pl(t) {
  yn(Rn((e) => {
    let n = e.getState().previousTree;
    const o = e.getState().currentTree;
    n || (Se("Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"), n = e.getState().currentTree);
    const r = ko(o), s = ko(n), a = en(Al, (u) => {
      var d, p, v, N;
      return {
        persistence_UNSTABLE: {
          type: (d = (p = u.persistence_UNSTABLE) === null || p === void 0 ? void 0 : p.type) !== null && d !== void 0 ? d : "none",
          backButton: (v = (N = u.persistence_UNSTABLE) === null || N === void 0 ? void 0 : N.backButton) !== null && v !== void 0 ? v : !1
        }
      };
    }), l = bl(o.dirtyAtoms, (u) => r.has(u) || s.has(u));
    t({
      atomValues: r,
      previousAtomValues: s,
      atomInfo: a,
      modifiedAtoms: l,
      transactionMetadata: {
        ...o.transactionMetadata
      }
    });
  }, [t]));
}
function kl(t) {
  yn(Rn((e) => {
    const n = nn(e, "latest"), o = nn(e, "previous");
    t({
      snapshot: n,
      previousSnapshot: o
    });
  }, [t]));
}
function Dl() {
  const t = uo(), [e, n] = Il(() => nn(t.current)), o = Ur(e), r = Io(), s = Io();
  if (yn(Rn((l) => n(nn(l)), [])), Gr(() => {
    const l = e.retain();
    if (r.current && !Po) {
      var u;
      window.clearTimeout(r.current), r.current = null, (u = s.current) === null || u === void 0 || u.call(s), s.current = null;
    }
    return () => {
      window.setTimeout(l, 10);
    };
  }, [e]), o !== e && !Po) {
    if (r.current) {
      var a;
      window.clearTimeout(r.current), r.current = null, (a = s.current) === null || a === void 0 || a.call(s), s.current = null;
    }
    s.current = e.retain(), r.current = window.setTimeout(() => {
      var l;
      r.current = null, (l = s.current) === null || l === void 0 || l.call(s), s.current = null;
    }, Vl);
  }
  return e;
}
function Kr(t, e) {
  var n;
  const o = t.getState(), r = (n = o.nextTree) !== null && n !== void 0 ? n : o.currentTree, s = e.getStore_INTERNAL().getState().currentTree;
  wl(() => {
    const a = /* @__PURE__ */ new Set();
    for (const d of [r.atomValues.keys(), s.atomValues.keys()])
      for (const p of d) {
        var l, u;
        ((l = r.atomValues.get(p)) === null || l === void 0 ? void 0 : l.contents) !== ((u = s.atomValues.get(p)) === null || u === void 0 ? void 0 : u.contents) && jr(p).shouldRestoreFromSnapshots && a.add(p);
      }
    a.forEach((d) => {
      Ll(t, new Cl(d), s.atomValues.has(d) ? le(s.atomValues.get(d)) : Nl);
    }), t.replaceState((d) => ({
      ...d,
      stateID: e.getID()
    }));
  });
}
function $l() {
  const t = uo();
  return Rn((e) => Kr(t.current, e), [t]);
}
var Hr = {
  useRecoilSnapshot: Dl,
  gotoSnapshot: Kr,
  useGotoRecoilSnapshot: $l,
  useRecoilTransactionObserver: kl,
  useTransactionObservation_DEPRECATED: Pl,
  useTransactionSubscription_DEPRECATED: yn
};
const {
  peekNodeInfo: Ol
} = Ze, {
  useStoreRef: Ml
} = Ke;
function Ul() {
  const t = Ml();
  return ({
    key: e
  }) => Ol(t.current, t.current.getState().currentTree, e);
}
var xl = Ul;
const {
  reactMode: Bl
} = Rt, {
  RecoilRoot: Fl,
  useStoreRef: Wl
} = Ke, {
  useMemo: zl
} = ie;
function jl() {
  Bl().mode === "MUTABLE_SOURCE" && console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
  const t = Wl().current;
  return zl(() => {
    function e({
      children: n
    }) {
      return /* @__PURE__ */ ie.createElement(Fl, {
        store_INTERNAL: t
      }, n);
    }
    return e;
  }, [t]);
}
var Gl = jl;
const {
  loadableWithValue: Kl
} = $t, {
  initializeNode: Hl
} = Ze, {
  DEFAULT_VALUE: Yl,
  getNode: ql
} = Ce, {
  copyTreeState: Zl,
  getRecoilValueAsLoadable: Jl,
  invalidateDownstreams: Xl,
  writeLoadableToTreeState: Ql
} = Be;
function Do(t) {
  return ql(t.key).nodeType === "atom";
}
class eu {
  constructor(e, n) {
    B(this, "_store", void 0), B(this, "_treeState", void 0), B(this, "_changes", void 0), B(this, "get", (o) => {
      if (this._changes.has(o.key))
        return this._changes.get(o.key);
      if (!Do(o))
        throw M("Reading selectors within atomicUpdate is not supported");
      const r = Jl(this._store, o, this._treeState);
      if (r.state === "hasValue")
        return r.contents;
      throw r.state === "hasError" ? r.contents : M(`Expected Recoil atom ${o.key} to have a value, but it is in a loading state.`);
    }), B(this, "set", (o, r) => {
      if (!Do(o))
        throw M("Setting selectors within atomicUpdate is not supported");
      if (typeof r == "function") {
        const s = this.get(o);
        this._changes.set(o.key, r(s));
      } else
        Hl(this._store, o.key, "set"), this._changes.set(o.key, r);
    }), B(this, "reset", (o) => {
      this.set(o, Yl);
    }), this._store = e, this._treeState = n, this._changes = /* @__PURE__ */ new Map();
  }
  // Allow destructing
  // eslint-disable-next-line fb-www/extra-arrow-initializer
  newTreeState_INTERNAL() {
    if (this._changes.size === 0)
      return this._treeState;
    const e = Zl(this._treeState);
    for (const [n, o] of this._changes)
      Ql(e, n, Kl(o));
    return Xl(this._store, e), e;
  }
}
function tu(t) {
  return (e) => {
    t.replaceState((n) => {
      const o = new eu(t, n);
      return e(o), o.newTreeState_INTERNAL();
    });
  };
}
var nu = {
  atomicUpdater: tu
}, ou = nu.atomicUpdater, Yr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  atomicUpdater: ou
});
function ru(t, e) {
  if (!t)
    throw new Error(e);
}
var su = ru, Ue = su;
const {
  atomicUpdater: au
} = Yr, {
  batchUpdates: iu
} = hn, {
  DEFAULT_VALUE: cu
} = Ce, {
  useStoreRef: lu
} = Ke, {
  refreshRecoilValue: uu,
  setRecoilValue: $o
} = Be, {
  cloneSnapshot: du
} = _n, {
  gotoSnapshot: fu
} = Hr, {
  useCallback: hu
} = ie;
class qr {
}
const pu = new qr();
function Zr(t, e, n, o) {
  let r = pu, s;
  if (iu(() => {
    const l = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
    if (typeof e != "function")
      throw M(l);
    const u = cr({
      ...o ?? {},
      // flowlint-line unclear-type:off
      // $FlowFixMe[missing-local-annot]
      set: (p, v) => $o(t, p, v),
      // $FlowFixMe[missing-local-annot]
      reset: (p) => $o(t, p, cu),
      // $FlowFixMe[missing-local-annot]
      refresh: (p) => uu(t, p),
      gotoSnapshot: (p) => fu(t, p),
      transact_UNSTABLE: (p) => au(t)(p)
    }, {
      snapshot: () => {
        const p = du(t);
        return s = p.retain(), p;
      }
    }), d = e(u);
    if (typeof d != "function")
      throw M(l);
    r = d(...n);
  }), r instanceof qr && (process.env.NODE_ENV !== "production" ? Ue(!1, "batchUpdates should return immediately") : Ue(!1)), re(r))
    r = r.finally(() => {
      var l;
      (l = s) === null || l === void 0 || l();
    });
  else {
    var a;
    (a = s) === null || a === void 0 || a();
  }
  return r;
}
function vu(t, e) {
  const n = lu();
  return hu(
    // $FlowIssue[incompatible-call]
    (...o) => Zr(n.current, t, o),
    e != null ? [...e, n] : void 0
    // eslint-disable-line fb-www/react-hooks-deps
  );
}
var Jr = {
  recoilCallback: Zr,
  useRecoilCallback: vu
};
const {
  useStoreRef: _u
} = Ke, {
  refreshRecoilValue: mu
} = Be, {
  useCallback: Su
} = ie;
function Ru(t) {
  const e = _u();
  return Su(() => {
    const n = e.current;
    mu(n, t);
  }, [t, e]);
}
var yu = Ru;
const {
  atomicUpdater: gu
} = Yr, {
  useStoreRef: bu
} = Ke, {
  useMemo: Tu
} = ie;
function Eu(t, e) {
  const n = bu();
  return Tu(
    () => (...o) => {
      gu(n.current)((s) => {
        t(s)(...o);
      });
    },
    e != null ? [...e, n] : void 0
    // eslint-disable-line fb-www/react-hooks-deps
  );
}
var wu = Eu;
class Nu {
  constructor(e) {
    B(this, "value", void 0), this.value = e;
  }
}
var Au = {
  WrappedValue: Nu
}, Cu = Au.WrappedValue, Xr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WrappedValue: Cu
});
const {
  isFastRefreshEnabled: Lu
} = Rt;
class Oo extends Error {
}
class Vu {
  // $FlowIssue[unclear-type]
  constructor(e) {
    var n, o, r;
    B(this, "_name", void 0), B(this, "_numLeafs", void 0), B(this, "_root", void 0), B(this, "_onHit", void 0), B(this, "_onSet", void 0), B(this, "_mapNodeValue", void 0), this._name = e == null ? void 0 : e.name, this._numLeafs = 0, this._root = null, this._onHit = (n = e == null ? void 0 : e.onHit) !== null && n !== void 0 ? n : () => {
    }, this._onSet = (o = e == null ? void 0 : e.onSet) !== null && o !== void 0 ? o : () => {
    }, this._mapNodeValue = (r = e == null ? void 0 : e.mapNodeValue) !== null && r !== void 0 ? r : (s) => s;
  }
  size() {
    return this._numLeafs;
  }
  // $FlowIssue[unclear-type]
  root() {
    return this._root;
  }
  get(e, n) {
    var o;
    return (o = this.getLeafNode(e, n)) === null || o === void 0 ? void 0 : o.value;
  }
  getLeafNode(e, n) {
    if (this._root == null)
      return;
    let o = this._root;
    for (; o; ) {
      if (n == null || n.onNodeVisit(o), o.type === "leaf")
        return this._onHit(o), o;
      const r = this._mapNodeValue(e(o.nodeKey));
      o = o.branches.get(r);
    }
  }
  set(e, n, o) {
    const r = () => {
      var s, a, l, u;
      let d, p;
      for (const [F, j] of e) {
        var v, N, L;
        const S = this._root;
        if ((S == null ? void 0 : S.type) === "leaf")
          throw this.invalidCacheError();
        const V = d;
        if (d = V ? V.branches.get(p) : S, d = (v = d) !== null && v !== void 0 ? v : {
          type: "branch",
          nodeKey: F,
          parent: V,
          branches: /* @__PURE__ */ new Map(),
          branchKey: p
        }, d.type !== "branch" || d.nodeKey !== F)
          throw this.invalidCacheError();
        V == null || V.branches.set(p, d), o == null || (N = o.onNodeVisit) === null || N === void 0 || N.call(o, d), p = this._mapNodeValue(j), this._root = (L = this._root) !== null && L !== void 0 ? L : d;
      }
      const R = d ? (s = d) === null || s === void 0 ? void 0 : s.branches.get(p) : this._root;
      if (R != null && (R.type !== "leaf" || R.branchKey !== p))
        throw this.invalidCacheError();
      const A = {
        type: "leaf",
        value: n,
        parent: d,
        branchKey: p
      };
      (a = d) === null || a === void 0 || a.branches.set(p, A), this._root = (l = this._root) !== null && l !== void 0 ? l : A, this._numLeafs++, this._onSet(A), o == null || (u = o.onNodeVisit) === null || u === void 0 || u.call(o, A);
    };
    try {
      r();
    } catch (s) {
      if (s instanceof Oo)
        this.clear(), r();
      else
        throw s;
    }
  }
  // Returns true if leaf was actually deleted from the tree
  delete(e) {
    const n = this.root();
    if (!n)
      return !1;
    if (e === n)
      return this._root = null, this._numLeafs = 0, !0;
    let o = e.parent, r = e.branchKey;
    for (; o; ) {
      var s;
      if (o.branches.delete(r), o === n)
        return o.branches.size === 0 ? (this._root = null, this._numLeafs = 0) : this._numLeafs--, !0;
      if (o.branches.size > 0)
        break;
      r = (s = o) === null || s === void 0 ? void 0 : s.branchKey, o = o.parent;
    }
    for (; o !== n; o = o.parent)
      if (o == null)
        return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    this._numLeafs = 0, this._root = null;
  }
  invalidCacheError() {
    const e = Lu() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw Se(e + (this._name != null ? ` - ${this._name}` : "")), new Oo();
  }
}
var Iu = {
  TreeCache: Vu
}, Pu = Iu.TreeCache, Qr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TreeCache: Pu
});
class ku {
  constructor(e) {
    var n;
    B(this, "_maxSize", void 0), B(this, "_size", void 0), B(this, "_head", void 0), B(this, "_tail", void 0), B(this, "_map", void 0), B(this, "_keyMapper", void 0), this._maxSize = e.maxSize, this._size = 0, this._head = null, this._tail = null, this._map = /* @__PURE__ */ new Map(), this._keyMapper = (n = e.mapKey) !== null && n !== void 0 ? n : (o) => o;
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(e) {
    return this._map.has(this._keyMapper(e));
  }
  get(e) {
    const n = this._keyMapper(e), o = this._map.get(n);
    if (o)
      return this.set(e, o.value), o.value;
  }
  set(e, n) {
    const o = this._keyMapper(e);
    this._map.get(o) && this.delete(e);
    const s = this.head(), a = {
      key: e,
      right: s,
      left: null,
      value: n
    };
    s ? s.left = a : this._tail = a, this._map.set(o, a), this._head = a, this._size++, this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const e = this.tail();
    e && this.delete(e.key);
  }
  delete(e) {
    const n = this._keyMapper(e);
    if (!this._size || !this._map.has(n))
      return;
    const o = le(this._map.get(n)), r = o.right, s = o.left;
    r && (r.left = o.left), s && (s.right = o.right), o === this.head() && (this._head = r), o === this.tail() && (this._tail = s), this._map.delete(n), this._size--;
  }
  clear() {
    this._size = 0, this._head = null, this._tail = null, this._map = /* @__PURE__ */ new Map();
  }
}
var Du = {
  LRUCache: ku
}, $u = Du.LRUCache, es = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  LRUCache: $u
});
const {
  LRUCache: Ou
} = es, {
  TreeCache: Mu
} = Qr;
function Uu({
  name: t,
  maxSize: e,
  mapNodeValue: n = (o) => o
}) {
  const o = new Ou({
    maxSize: e
  }), r = new Mu({
    name: t,
    mapNodeValue: n,
    onHit: (s) => {
      o.set(s, !0);
    },
    onSet: (s) => {
      const a = o.tail();
      o.set(s, !0), a && r.size() > e && r.delete(a.key);
    }
  });
  return r;
}
var Mo = Uu;
const xu = 15;
function De(t, e, n) {
  if (typeof t == "string" && !t.includes('"') && !t.includes("\\"))
    return `"${t}"`;
  switch (typeof t) {
    case "undefined":
      return "";
    case "boolean":
      return t ? "true" : "false";
    case "number":
    case "symbol":
      return String(t);
    case "string":
      return JSON.stringify(t);
    case "function":
      if ((e == null ? void 0 : e.allowFunctions) !== !0)
        throw M("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${t.name})__`;
  }
  if (t === null)
    return "null";
  if (typeof t != "object") {
    var o;
    return (o = JSON.stringify(t)) !== null && o !== void 0 ? o : "";
  }
  if (re(t))
    return "__PROMISE__";
  if (Array.isArray(t))
    return `[${t.map((r, s) => De(r, e, s.toString()))}]`;
  if (typeof t.toJSON == "function")
    return De(t.toJSON(n), e, n);
  if (t instanceof Map) {
    const r = {};
    for (const [s, a] of t)
      r[typeof s == "string" ? s : De(s, e)] = a;
    return De(r, e, n);
  }
  return t instanceof Set ? De(
    // $FlowFixMe[missing-local-annot]
    Array.from(t).sort((r, s) => De(r, e).localeCompare(De(s, e))),
    e,
    n
  ) : Symbol !== void 0 && t[Symbol.iterator] != null && typeof t[Symbol.iterator] == "function" ? De(Array.from(t), e, n) : `{${Object.keys(t).filter((r) => t[r] !== void 0).sort().map((r) => `${De(r, e)}:${De(t[r], e, r)}`).join(",")}}`;
}
function Bu(t, e = {
  allowFunctions: !1
}) {
  if (process.env.NODE_ENV !== "production" && typeof window < "u") {
    const n = window.performance ? window.performance.now() : 0, o = De(t, e), r = window.performance ? window.performance.now() : 0;
    return r - n > xu && (console.groupCollapsed(`Recoil: Spent ${r - n}ms computing a cache key`), console.warn(t, o), console.groupEnd()), o;
  }
  return De(t, e);
}
var gn = Bu;
const {
  TreeCache: Fu
} = Qr, Ht = {
  equality: "reference",
  eviction: "keep-all",
  maxSize: 1 / 0
};
function Wu({
  equality: t = Ht.equality,
  eviction: e = Ht.eviction,
  maxSize: n = Ht.maxSize
} = Ht, o) {
  const r = zu(t);
  return ju(e, n, r, o);
}
function zu(t) {
  switch (t) {
    case "reference":
      return (e) => e;
    case "value":
      return (e) => gn(e);
  }
  throw M(`Unrecognized equality policy ${t}`);
}
function ju(t, e, n, o) {
  switch (t) {
    case "keep-all":
      return new Fu({
        name: o,
        mapNodeValue: n
      });
    case "lru":
      return Mo({
        name: o,
        maxSize: le(e),
        mapNodeValue: n
      });
    case "most-recent":
      return Mo({
        name: o,
        maxSize: 1,
        mapNodeValue: n
      });
  }
  throw M(`Unrecognized eviction policy ${t}`);
}
var Gu = Wu;
function Ku(t) {
  var e, n;
  if (typeof window > "u")
    return !1;
  const r = (n = (t != null ? (e = t.ownerDocument) !== null && e !== void 0 ? e : t : document).defaultView) !== null && n !== void 0 ? n : window;
  return t != null && (typeof r.Node == "function" ? t instanceof r.Node : typeof t == "object" && typeof t.nodeType == "number" && typeof t.nodeName == "string");
}
var Hu = Ku;
const {
  isReactNative: Yu,
  isWindow: qu
} = Ut;
function Zu(t) {
  if (t === null || typeof t != "object")
    return !0;
  switch (typeof t.$$typeof) {
    case "symbol":
      return !0;
    case "number":
      return !0;
  }
  return !!(t["@@__IMMUTABLE_ITERABLE__@@"] != null || t["@@__IMMUTABLE_KEYED__@@"] != null || t["@@__IMMUTABLE_INDEXED__@@"] != null || t["@@__IMMUTABLE_ORDERED__@@"] != null || t["@@__IMMUTABLE_RECORD__@@"] != null || Hu(t) || re(t) || t instanceof Error || ArrayBuffer.isView(t) || !Yu && qu(t));
}
function ts(t) {
  if (!(typeof t != "object" || Zu(t))) {
    Object.freeze(t);
    for (const e in t)
      if (Object.prototype.hasOwnProperty.call(t, e)) {
        const n = t[e];
        typeof n == "object" && n != null && !Object.isFrozen(n) && ts(n);
      }
    Object.seal(t);
  }
}
var Yn = ts;
function Ju(t) {
  return () => null;
}
var Xu = {
  startPerfBlock: Ju
};
const {
  isLoadable: Qu,
  loadableWithError: Yt,
  loadableWithPromise: ed,
  loadableWithValue: $n
} = $t, {
  WrappedValue: ns
} = Xr, {
  getNodeLoadable: qt,
  peekNodeLoadable: td,
  setNodeValue: nd
} = Ze, {
  saveDepsToStore: od
} = Ot, {
  DEFAULT_VALUE: rd,
  getConfigDeletionHandler: sd,
  getNode: ad,
  registerNode: Uo
} = Ce, {
  isRecoilValue: id
} = nt, {
  markRecoilValueModified: xo
} = Be, {
  retainedByOptionWithDefault: cd
} = st, {
  recoilCallback: ld
} = Jr, {
  startPerfBlock: ud
} = Xu;
class os {
}
const Ct = new os(), Lt = [], Zt = /* @__PURE__ */ new Map(), dd = (() => {
  let t = 0;
  return () => t++;
})();
function rs(t) {
  let e = null;
  const {
    key: n,
    get: o,
    cachePolicy_UNSTABLE: r
  } = t, s = t.set != null ? t.set : void 0;
  if (process.env.NODE_ENV !== "production") {
    if (typeof n != "string")
      throw M("A key option with a unique string value must be provided when creating a selector.");
    if (typeof o != "function")
      throw M("Selectors must specify a get callback option to get the selector value.");
  }
  const a = /* @__PURE__ */ new Set(), l = Gu(r ?? {
    equality: "reference",
    eviction: "keep-all"
  }, n), u = cd(t.retainedBy_UNSTABLE), d = /* @__PURE__ */ new Map();
  let p = 0;
  function v() {
    return !se("recoil_memory_managament_2020") || p > 0;
  }
  function N(h) {
    return h.getState().knownSelectors.add(n), p++, () => {
      p--;
    };
  }
  function L() {
    return sd(n) !== void 0 && !v();
  }
  function R(h, y, b, O, C) {
    We(y, O, C), A(h, b);
  }
  function A(h, y) {
    de(h, y) && ne(h), j(y, !0);
  }
  function F(h, y) {
    de(h, y) && (le(K(h)).stateVersions.clear(), j(y, !1));
  }
  function j(h, y) {
    const b = Zt.get(h);
    if (b != null) {
      for (const O of b)
        xo(O, le(e));
      y && Zt.delete(h);
    }
  }
  function S(h, y) {
    let b = Zt.get(y);
    b == null && Zt.set(y, b = /* @__PURE__ */ new Set()), b.add(h);
  }
  function V(h, y, b, O, C, z) {
    return y.then((x) => {
      if (!v())
        throw ne(h), Ct;
      const I = $n(x);
      return R(h, b, C, I, O), x;
    }).catch((x) => {
      if (!v())
        throw ne(h), Ct;
      if (re(x))
        return U(h, x, b, O, C, z);
      const I = Yt(x);
      throw R(h, b, C, I, O), x;
    });
  }
  function U(h, y, b, O, C, z) {
    return y.then((x) => {
      if (!v())
        throw ne(h), Ct;
      z.loadingDepKey != null && z.loadingDepPromise === y ? b.atomValues.set(z.loadingDepKey, $n(x)) : h.getState().knownSelectors.forEach((Q) => {
        b.atomValues.delete(Q);
      });
      const I = X(h, b);
      if (I && I.state !== "loading") {
        if ((de(h, C) || K(h) == null) && A(h, C), I.state === "hasValue")
          return I.contents;
        throw I.contents;
      }
      if (!de(h, C)) {
        const Q = ye(h, b);
        if (Q != null)
          return Q.loadingLoadable.contents;
      }
      const [te, fe] = q(h, b, C);
      if (te.state !== "loading" && R(h, b, C, te, fe), te.state === "hasError")
        throw te.contents;
      return te.contents;
    }).catch((x) => {
      if (x instanceof os)
        throw Ct;
      if (!v())
        throw ne(h), Ct;
      const I = Yt(x);
      throw R(h, b, C, I, O), x;
    });
  }
  function G(h, y, b, O) {
    var C, z, x, I;
    if (de(h, O) || y.version === ((C = h.getState()) === null || C === void 0 || (z = C.currentTree) === null || z === void 0 ? void 0 : z.version) || y.version === ((x = h.getState()) === null || x === void 0 || (I = x.nextTree) === null || I === void 0 ? void 0 : I.version)) {
      var te, fe, Q;
      od(n, b, h, (te = (fe = h.getState()) === null || fe === void 0 || (Q = fe.nextTree) === null || Q === void 0 ? void 0 : Q.version) !== null && te !== void 0 ? te : h.getState().currentTree.version);
    }
    for (const ce of b)
      a.add(ce);
  }
  function q(h, y, b) {
    const O = ud(n);
    let C = !0, z = !0;
    const x = () => {
      O(), z = !1;
    };
    let I, te = !1, fe;
    const Q = {
      loadingDepKey: null,
      loadingDepPromise: null
    }, ce = /* @__PURE__ */ new Map();
    function we({
      key: me
    }) {
      const ge = qt(h, y, me);
      switch (ce.set(me, ge), C || (G(h, y, new Set(ce.keys()), b), F(h, b)), ge.state) {
        case "hasValue":
          return ge.contents;
        case "hasError":
          throw ge.contents;
        case "loading":
          throw Q.loadingDepKey = me, Q.loadingDepPromise = ge.contents, ge.contents;
      }
      throw M("Invalid Loadable state");
    }
    const Pe = (me) => (...ge) => {
      if (z)
        throw M("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
      return e == null && (process.env.NODE_ENV !== "production" ? Ue(!1, "Recoil Value can never be null") : Ue(!1)), ld(
        h,
        me,
        ge,
        {
          node: e
        }
        // flowlint-line unclear-type:off
      );
    };
    try {
      I = o({
        get: we,
        getCallback: Pe
      }), I = id(I) ? we(I) : I, Qu(I) && (I.state === "hasError" && (te = !0), I = I.contents), re(I) ? I = V(h, I, y, ce, b, Q).finally(x) : x(), I = I instanceof ns ? I.value : I;
    } catch (me) {
      I = me, re(I) ? I = U(h, I, y, ce, b, Q).finally(x) : (te = !0, x());
    }
    return te ? fe = Yt(I) : re(I) ? fe = ed(I) : fe = $n(I), C = !1, Me(h, b, ce), G(h, y, new Set(ce.keys()), b), [fe, ce];
  }
  function X(h, y) {
    let b = y.atomValues.get(n);
    if (b != null)
      return b;
    const O = /* @__PURE__ */ new Set();
    try {
      b = l.get((z) => (typeof z != "string" && (process.env.NODE_ENV !== "production" ? Ue(!1, "Cache nodeKey is type string") : Ue(!1)), qt(h, y, z).contents), {
        onNodeVisit: (z) => {
          z.type === "branch" && z.nodeKey !== n && O.add(z.nodeKey);
        }
      });
    } catch (z) {
      throw M(`Problem with cache lookup for selector "${n}": ${z.message}`);
    }
    if (b) {
      var C;
      y.atomValues.set(n, b), G(h, y, O, (C = K(h)) === null || C === void 0 ? void 0 : C.executionID);
    }
    return b;
  }
  function ue(h, y) {
    const b = X(h, y);
    if (b != null)
      return ne(h), b;
    const O = ye(h, y);
    if (O != null) {
      var C;
      return ((C = O.loadingLoadable) === null || C === void 0 ? void 0 : C.state) === "loading" && S(h, O.executionID), O.loadingLoadable;
    }
    const z = dd(), [x, I] = q(h, y, z);
    return x.state === "loading" ? (_e(h, z, x, I, y), S(h, z)) : (ne(h), We(y, x, I)), x;
  }
  function ye(h, y) {
    const b = wr([d.has(h) ? [le(d.get(h))] : [], ln(to(d, ([C]) => C !== h), ([, C]) => C)]);
    function O(C) {
      for (const [z, x] of C)
        if (!qt(h, y, z).is(x))
          return !0;
      return !1;
    }
    for (const C of b) {
      if (
        // If this execution was already checked to be valid with this version
        // of state, then let's use it!
        C.stateVersions.get(y.version) || // If the deps for the execution match our current state, then it's valid
        !O(C.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return C.stateVersions.set(y.version, !0), C;
      C.stateVersions.set(y.version, !1);
    }
  }
  function K(h) {
    return d.get(h);
  }
  function _e(h, y, b, O, C) {
    d.set(h, {
      depValuesDiscoveredSoFarDuringAsyncWork: O,
      executionID: y,
      loadingLoadable: b,
      stateVersions: /* @__PURE__ */ new Map([[C.version, !0]])
    });
  }
  function Me(h, y, b) {
    if (de(h, y)) {
      const O = K(h);
      O != null && (O.depValuesDiscoveredSoFarDuringAsyncWork = b);
    }
  }
  function ne(h) {
    d.delete(h);
  }
  function de(h, y) {
    var b;
    return y === ((b = K(h)) === null || b === void 0 ? void 0 : b.executionID);
  }
  function Ve(h) {
    return Array.from(h.entries()).map(([y, b]) => [y, b.contents]);
  }
  function We(h, y, b) {
    process.env.NODE_ENV !== "production" && y.state !== "loading" && !t.dangerouslyAllowMutability && Yn(y.contents), h.atomValues.set(n, y);
    try {
      l.set(Ve(b), y);
    } catch (O) {
      throw M(`Problem with setting cache for selector "${n}": ${O.message}`);
    }
  }
  function Ie(h) {
    if (Lt.includes(n)) {
      const y = `Recoil selector has circular dependencies: ${Lt.slice(Lt.indexOf(n)).join(" → ")}`;
      return Yt(M(y));
    }
    Lt.push(n);
    try {
      return h();
    } finally {
      Lt.pop();
    }
  }
  function ze(h, y) {
    const b = y.atomValues.get(n);
    return b ?? l.get((O) => {
      var C;
      return typeof O != "string" && (process.env.NODE_ENV !== "production" ? Ue(!1, "Cache nodeKey is type string") : Ue(!1)), (C = td(h, y, O)) === null || C === void 0 ? void 0 : C.contents;
    });
  }
  function je(h, y) {
    return Ie(() => ue(h, y));
  }
  function Y(h) {
    h.atomValues.delete(n);
  }
  function J(h, y) {
    e == null && (process.env.NODE_ENV !== "production" ? Ue(!1, "Recoil Value can never be null") : Ue(!1));
    for (const O of a) {
      var b;
      const C = ad(O);
      (b = C.clearCache) === null || b === void 0 || b.call(C, h, y);
    }
    a.clear(), Y(y), l.clear(), xo(h, e);
  }
  return s != null ? e = Uo({
    key: n,
    nodeType: "selector",
    peek: ze,
    get: je,
    set: (y, b, O) => {
      let C = !1;
      const z = /* @__PURE__ */ new Map();
      function x({
        key: Q
      }) {
        if (C)
          throw M("Recoil: Async selector sets are not currently supported.");
        const ce = qt(y, b, Q);
        if (ce.state === "hasValue")
          return ce.contents;
        if (ce.state === "loading") {
          const we = `Getting value of asynchronous atom or selector "${Q}" in a pending state while setting selector "${n}" is not yet supported.`;
          throw Se(we), M(we);
        } else
          throw ce.contents;
      }
      function I(Q, ce) {
        if (C) {
          const me = "Recoil: Async selector sets are not currently supported.";
          throw Se(me), M(me);
        }
        const we = typeof ce == "function" ? (
          // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
          // flowlint-next-line unclear-type:off
          ce(x(Q))
        ) : ce;
        nd(y, b, Q.key, we).forEach((me, ge) => z.set(ge, me));
      }
      function te(Q) {
        I(Q, rd);
      }
      const fe = s({
        set: I,
        get: x,
        reset: te
      }, O);
      if (fe !== void 0)
        throw re(fe) ? M("Recoil: Async selector sets are not currently supported.") : M("Recoil: selector set should be a void function.");
      return C = !0, z;
    },
    init: N,
    invalidate: Y,
    clearCache: J,
    shouldDeleteConfigOnRelease: L,
    dangerouslyAllowMutability: t.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: u
  }) : e = Uo({
    key: n,
    nodeType: "selector",
    peek: ze,
    get: je,
    init: N,
    invalidate: Y,
    clearCache: J,
    shouldDeleteConfigOnRelease: L,
    dangerouslyAllowMutability: t.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: u
  });
}
rs.value = (t) => new ns(t);
var mt = rs;
const {
  isLoadable: fd,
  loadableWithError: On,
  loadableWithPromise: Mn,
  loadableWithValue: ft
} = $t, {
  WrappedValue: ss
} = Xr, {
  peekNodeInfo: hd
} = Ze, {
  DEFAULT_VALUE: et,
  DefaultValue: qe,
  getConfigDeletionHandler: as,
  registerNode: pd,
  setConfigDeletionHandler: vd
} = Ce, {
  isRecoilValue: _d
} = nt, {
  getRecoilValueAsLoadable: md,
  markRecoilValueModified: Sd,
  setRecoilValue: Bo,
  setRecoilValueLoadable: Rd
} = Be, {
  retainedByOptionWithDefault: yd
} = st, Vt = (t) => t instanceof ss ? t.value : t;
function gd(t) {
  const {
    key: e,
    persistence_UNSTABLE: n
  } = t, o = yd(t.retainedBy_UNSTABLE);
  let r = 0;
  function s(S) {
    return Mn(S.then((V) => (a = ft(V), V)).catch((V) => {
      throw a = On(V), V;
    }));
  }
  let a = re(t.default) ? s(t.default) : fd(t.default) ? t.default.state === "loading" ? s(t.default.contents) : t.default : (
    // $FlowFixMe[incompatible-call]
    ft(Vt(t.default))
  );
  d(a.contents);
  let l;
  const u = /* @__PURE__ */ new Map();
  function d(S) {
    return process.env.NODE_ENV !== "production" && t.dangerouslyAllowMutability !== !0 ? re(S) ? S.then((V) => (Yn(V), V)) : (Yn(S), S) : S;
  }
  function p(S, V) {
    const U = V.then((G) => {
      var q, X;
      return ((X = ((q = S.getState().nextTree) !== null && q !== void 0 ? q : S.getState().currentTree).atomValues.get(e)) === null || X === void 0 ? void 0 : X.contents) === U && Bo(S, j, G), G;
    }).catch((G) => {
      var q, X;
      throw ((X = ((q = S.getState().nextTree) !== null && q !== void 0 ? q : S.getState().currentTree).atomValues.get(e)) === null || X === void 0 ? void 0 : X.contents) === U && Rd(S, j, On(G)), G;
    });
    return U;
  }
  function v(S, V, U) {
    var G;
    r++;
    const q = () => {
      var K;
      r--, (K = u.get(S)) === null || K === void 0 || K.forEach((_e) => _e()), u.delete(S);
    };
    if (S.getState().knownAtoms.add(e), a.state === "loading") {
      const K = () => {
        var _e;
        ((_e = S.getState().nextTree) !== null && _e !== void 0 ? _e : S.getState().currentTree).atomValues.has(e) || Sd(S, j);
      };
      a.contents.finally(K);
    }
    const X = (G = t.effects) !== null && G !== void 0 ? G : t.effects_UNSTABLE;
    if (X != null) {
      let de = function(Y) {
        if (_e && Y.key === e) {
          const J = K;
          return J instanceof qe ? N(S, V) : re(J) ? Mn(J.then((h) => h instanceof qe ? (
            // Cast T to S
            a.toPromise()
          ) : h)) : (
            // $FlowFixMe[incompatible-call]
            ft(J)
          );
        }
        return md(S, Y);
      }, Ve = function(Y) {
        return de(Y).toPromise();
      }, We = function(Y) {
        var J;
        const h = hd(S, (J = S.getState().nextTree) !== null && J !== void 0 ? J : S.getState().currentTree, Y.key);
        return _e && Y.key === e && !(K instanceof qe) ? {
          ...h,
          isSet: !0,
          loadable: de(Y)
        } : h;
      }, K = et, _e = !0, Me = !1, ne = null;
      const Ie = (Y) => (J) => {
        if (_e) {
          const h = de(j), y = h.state === "hasValue" ? h.contents : et;
          K = typeof J == "function" ? (
            // cast to any because we can't restrict T from being a function without losing support for opaque types
            J(y)
          ) : J, re(K) && (K = K.then((b) => (ne = {
            effect: Y,
            value: b
          }, b)));
        } else {
          if (re(J))
            throw M("Setting atoms to async values is not implemented.");
          typeof J != "function" && (ne = {
            effect: Y,
            value: Vt(J)
          }), Bo(S, j, typeof J == "function" ? (h) => {
            const y = Vt(
              // cast to any because we can't restrict T from being a function without losing support for opaque types
              J(h)
              // flowlint-line unclear-type:off
            );
            return ne = {
              effect: Y,
              value: y
            }, y;
          } : Vt(J));
        }
      }, ze = (Y) => () => Ie(Y)(et), je = (Y) => (J) => {
        var h;
        const {
          release: y
        } = S.subscribeToTransactions((b) => {
          var O;
          let {
            currentTree: C,
            previousTree: z
          } = b.getState();
          z || (Se("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"), z = C);
          const x = (O = C.atomValues.get(e)) !== null && O !== void 0 ? O : a;
          if (x.state === "hasValue") {
            var I, te, fe, Q;
            const ce = x.contents, we = (I = z.atomValues.get(e)) !== null && I !== void 0 ? I : a, Pe = we.state === "hasValue" ? we.contents : et;
            ((te = ne) === null || te === void 0 ? void 0 : te.effect) !== Y || ((fe = ne) === null || fe === void 0 ? void 0 : fe.value) !== ce ? J(ce, Pe, !C.atomValues.has(e)) : ((Q = ne) === null || Q === void 0 ? void 0 : Q.effect) === Y && (ne = null);
          }
        }, e);
        u.set(S, [...(h = u.get(S)) !== null && h !== void 0 ? h : [], y]);
      };
      for (const Y of X)
        try {
          const J = Y({
            node: j,
            storeID: S.storeID,
            parentStoreID_UNSTABLE: S.parentStoreID,
            trigger: U,
            setSelf: Ie(Y),
            resetSelf: ze(Y),
            onSet: je(Y),
            getPromise: Ve,
            getLoadable: de,
            getInfo_UNSTABLE: We
          });
          if (J != null) {
            var ue;
            u.set(S, [...(ue = u.get(S)) !== null && ue !== void 0 ? ue : [], J]);
          }
        } catch (J) {
          K = J, Me = !0;
        }
      if (_e = !1, !(K instanceof qe)) {
        var ye;
        const Y = Me ? On(K) : re(K) ? Mn(p(S, K)) : ft(Vt(K));
        d(Y.contents), V.atomValues.set(e, Y), (ye = S.getState().nextTree) === null || ye === void 0 || ye.atomValues.set(e, Y);
      }
    }
    return q;
  }
  function N(S, V) {
    var U, G;
    return (U = (G = V.atomValues.get(e)) !== null && G !== void 0 ? G : l) !== null && U !== void 0 ? U : a;
  }
  function L(S, V) {
    if (V.atomValues.has(e))
      return le(V.atomValues.get(e));
    if (V.nonvalidatedAtoms.has(e)) {
      if (l != null)
        return l;
      if (n == null)
        return cn(`Tried to restore a persisted value for atom ${e} but it has no persistence settings.`), a;
      const U = V.nonvalidatedAtoms.get(e), G = n.validator(U, et);
      return l = G instanceof qe ? a : ft(G), l;
    } else
      return a;
  }
  function R() {
    l = void 0;
  }
  function A(S, V, U) {
    if (V.atomValues.has(e)) {
      const G = le(V.atomValues.get(e));
      if (G.state === "hasValue" && U === G.contents)
        return /* @__PURE__ */ new Map();
    } else if (!V.nonvalidatedAtoms.has(e) && U instanceof qe)
      return /* @__PURE__ */ new Map();
    return d(U), l = void 0, (/* @__PURE__ */ new Map()).set(e, ft(U));
  }
  function F() {
    return as(e) !== void 0 && r <= 0;
  }
  const j = pd({
    key: e,
    nodeType: "atom",
    peek: N,
    get: L,
    set: A,
    init: v,
    invalidate: R,
    shouldDeleteConfigOnRelease: F,
    dangerouslyAllowMutability: t.dangerouslyAllowMutability,
    persistence_UNSTABLE: t.persistence_UNSTABLE ? {
      type: t.persistence_UNSTABLE.type,
      backButton: t.persistence_UNSTABLE.backButton
    } : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: o
  });
  return j;
}
function fo(t) {
  if (process.env.NODE_ENV !== "production" && typeof t.key != "string")
    throw M("A key option with a unique string value must be provided when creating an atom.");
  const {
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...e
  } = t, n = "default" in t ? (
    // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
    t.default
  ) : new Promise(() => {
  });
  return _d(n) ? bd({
    ...e,
    default: n
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
  }) : gd({
    ...e,
    default: n
  });
}
function bd(t) {
  const e = fo({
    ...t,
    default: et,
    persistence_UNSTABLE: t.persistence_UNSTABLE === void 0 ? void 0 : {
      ...t.persistence_UNSTABLE,
      validator: (o) => o instanceof qe ? o : le(t.persistence_UNSTABLE).validator(o, et)
    },
    // TODO Hack for now.
    effects: t.effects,
    // flowlint-line unclear-type: off
    effects_UNSTABLE: t.effects_UNSTABLE
    // flowlint-line unclear-type: off
  }), n = mt({
    key: `${t.key}__withFallback`,
    get: ({
      get: o
    }) => {
      const r = o(e);
      return r instanceof qe ? t.default : r;
    },
    // $FlowFixMe[incompatible-call]
    set: ({
      set: o
    }, r) => o(e, r),
    // This selector does not need to cache as it is a wrapper selector
    // and the selector within the wrapper selector will have a cache
    // option by default
    cachePolicy_UNSTABLE: {
      eviction: "most-recent"
    },
    dangerouslyAllowMutability: t.dangerouslyAllowMutability
  });
  return vd(n.key, as(t.key)), n;
}
fo.value = (t) => new ss(t);
var is = fo;
class Td {
  constructor(e) {
    var n;
    B(this, "_map", void 0), B(this, "_keyMapper", void 0), this._map = /* @__PURE__ */ new Map(), this._keyMapper = (n = e == null ? void 0 : e.mapKey) !== null && n !== void 0 ? n : (o) => o;
  }
  size() {
    return this._map.size;
  }
  has(e) {
    return this._map.has(this._keyMapper(e));
  }
  get(e) {
    return this._map.get(this._keyMapper(e));
  }
  set(e, n) {
    this._map.set(this._keyMapper(e), n);
  }
  delete(e) {
    this._map.delete(this._keyMapper(e));
  }
  clear() {
    this._map.clear();
  }
}
var Ed = {
  MapCache: Td
}, wd = Ed.MapCache, Nd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MapCache: wd
});
const {
  LRUCache: Fo
} = es, {
  MapCache: Ad
} = Nd, Jt = {
  equality: "reference",
  eviction: "none",
  maxSize: 1 / 0
};
function Cd({
  equality: t = Jt.equality,
  eviction: e = Jt.eviction,
  maxSize: n = Jt.maxSize
} = Jt) {
  const o = Ld(t);
  return Vd(e, n, o);
}
function Ld(t) {
  switch (t) {
    case "reference":
      return (e) => e;
    case "value":
      return (e) => gn(e);
  }
  throw M(`Unrecognized equality policy ${t}`);
}
function Vd(t, e, n) {
  switch (t) {
    case "keep-all":
      return new Ad({
        mapKey: n
      });
    case "lru":
      return new Fo({
        mapKey: n,
        maxSize: le(e)
      });
    case "most-recent":
      return new Fo({
        mapKey: n,
        maxSize: 1
      });
  }
  throw M(`Unrecognized eviction policy ${t}`);
}
var cs = Cd;
const {
  setConfigDeletionHandler: Id
} = Ce;
function Pd(t) {
  var e, n;
  const o = cs({
    equality: (e = (n = t.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null && e !== void 0 ? e : "value",
    eviction: "keep-all"
  });
  return (r) => {
    var s, a;
    const l = o.get(r);
    if (l != null)
      return l;
    const {
      cachePolicyForParams_UNSTABLE: u,
      ...d
    } = t, p = "default" in t ? (
      // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
      t.default
    ) : new Promise(() => {
    }), v = is({
      ...d,
      key: `${t.key}__${(s = gn(r)) !== null && s !== void 0 ? s : "void"}`,
      default: typeof p == "function" ? (
        // The default was parameterized
        // Flow doesn't know that T isn't a function, so we need to case to any
        // $FlowIssue[incompatible-use]
        p(r)
      ) : (
        // Default may be a static value, promise, or RecoilValue
        p
      ),
      retainedBy_UNSTABLE: typeof t.retainedBy_UNSTABLE == "function" ? t.retainedBy_UNSTABLE(r) : t.retainedBy_UNSTABLE,
      effects: typeof t.effects == "function" ? t.effects(r) : typeof t.effects_UNSTABLE == "function" ? t.effects_UNSTABLE(r) : (a = t.effects) !== null && a !== void 0 ? a : t.effects_UNSTABLE
      // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: ),
    });
    return o.set(r, v), Id(v.key, () => {
      o.delete(r);
    }), v;
  };
}
var kd = Pd;
const {
  setConfigDeletionHandler: Dd
} = Ce;
let $d = 0;
function Od(t) {
  var e, n;
  const o = cs({
    equality: (e = (n = t.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null && e !== void 0 ? e : "value",
    eviction: "keep-all"
  });
  return (r) => {
    var s;
    let a;
    try {
      a = o.get(r);
    } catch (N) {
      throw M(`Problem with cache lookup for selector ${t.key}: ${N.message}`);
    }
    if (a != null)
      return a;
    const l = `${t.key}__selectorFamily/${(s = gn(r, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: !0
    })) !== null && s !== void 0 ? s : "void"}/${$d++}`, u = (N) => t.get(r)(N), d = t.cachePolicy_UNSTABLE, p = typeof t.retainedBy_UNSTABLE == "function" ? t.retainedBy_UNSTABLE(r) : t.retainedBy_UNSTABLE;
    let v;
    if (t.set != null) {
      const N = t.set;
      v = mt({
        key: l,
        get: u,
        set: (R, A) => N(r)(R, A),
        cachePolicy_UNSTABLE: d,
        dangerouslyAllowMutability: t.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: p
      });
    } else
      v = mt({
        key: l,
        get: u,
        cachePolicy_UNSTABLE: d,
        dangerouslyAllowMutability: t.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: p
      });
    return o.set(r, v), Dd(v.key, () => {
      o.delete(r);
    }), v;
  };
}
var Je = Od;
const Md = Je({
  key: "__constant",
  get: (t) => () => t,
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
function Ud(t) {
  return Md(t);
}
var xd = Ud;
const Bd = Je({
  key: "__error",
  get: (t) => () => {
    throw M(t);
  },
  // TODO Why?
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
function Fd(t) {
  return Bd(t);
}
var Wd = Fd;
function zd(t) {
  return t;
}
var jd = zd;
const {
  loadableWithError: ls,
  loadableWithPromise: us,
  loadableWithValue: ds
} = $t;
function bn(t, e) {
  const n = Array(e.length).fill(void 0), o = Array(e.length).fill(void 0);
  for (const [r, s] of e.entries())
    try {
      n[r] = t(s);
    } catch (a) {
      o[r] = a;
    }
  return [n, o];
}
function Gd(t) {
  return t != null && !re(t);
}
function Tn(t) {
  return Array.isArray(t) ? t : Object.getOwnPropertyNames(t).map((e) => t[e]);
}
function qn(t, e) {
  return Array.isArray(t) ? e : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    Object.getOwnPropertyNames(t).reduce((n, o, r) => ({
      ...n,
      [o]: e[r]
    }), {})
  );
}
function ht(t, e, n) {
  const o = n.map((r, s) => r == null ? ds(e[s]) : re(r) ? us(r) : ls(r));
  return qn(t, o);
}
function Kd(t, e) {
  return e.map((n, o) => (
    /**
     * it's important we use === undefined as opposed to == null, because the
     * resolved value of the async promise could be `null`, in which case we
     * don't want to use syncResults[idx], which would be undefined. If async
     * promise resolves to `undefined`, that's ok because `syncResults[idx]`
     * will also be `undefined`. That's a little hacky, but it works.
     */
    n === void 0 ? t[o] : n
  ));
}
const Hd = Je({
  key: "__waitForNone",
  get: (t) => ({
    get: e
  }) => {
    const n = Tn(t), [o, r] = bn(e, n);
    return ht(t, o, r);
  },
  dangerouslyAllowMutability: !0
}), Yd = Je({
  key: "__waitForAny",
  get: (t) => ({
    get: e
  }) => {
    const n = Tn(t), [o, r] = bn(e, n);
    return r.some((s) => !re(s)) ? ht(t, o, r) : new Promise((s) => {
      for (const [a, l] of r.entries())
        re(l) && l.then((u) => {
          o[a] = u, r[a] = void 0, s(ht(t, o, r));
        }).catch((u) => {
          r[a] = u, s(ht(t, o, r));
        });
    });
  },
  dangerouslyAllowMutability: !0
}), qd = Je({
  key: "__waitForAll",
  get: (t) => ({
    get: e
  }) => {
    const n = Tn(t), [o, r] = bn(e, n);
    if (r.every((a) => a == null))
      return qn(t, o);
    const s = r.find(Gd);
    if (s != null)
      throw s;
    return Promise.all(r).then((a) => qn(t, Kd(o, a)));
  },
  dangerouslyAllowMutability: !0
}), Zd = Je({
  key: "__waitForAllSettled",
  get: (t) => ({
    get: e
  }) => {
    const n = Tn(t), [o, r] = bn(e, n);
    return r.every((s) => !re(s)) ? ht(t, o, r) : Promise.all(r.map((s, a) => re(s) ? s.then((l) => {
      o[a] = l, r[a] = void 0;
    }).catch((l) => {
      o[a] = void 0, r[a] = l;
    }) : null)).then(() => ht(t, o, r));
  },
  dangerouslyAllowMutability: !0
}), Jd = Je({
  key: "__noWait",
  get: (t) => ({
    get: e
  }) => {
    try {
      return mt.value(ds(e(t)));
    } catch (n) {
      return mt.value(re(n) ? us(n) : ls(n));
    }
  },
  dangerouslyAllowMutability: !0
});
var Xd = {
  waitForNone: Hd,
  waitForAny: Yd,
  waitForAll: qd,
  waitForAllSettled: Zd,
  noWait: Jd
};
const {
  RecoilLoadable: Qd
} = $t, {
  DefaultValue: ef
} = Ce, {
  RecoilRoot: tf,
  useRecoilStoreID: nf
} = Ke, {
  isRecoilValue: of
} = nt, {
  retentionZone: rf
} = dn, {
  freshSnapshot: sf
} = _n, {
  useRecoilState: af,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: cf,
  useRecoilStateLoadable: lf,
  useRecoilValue: uf,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: df,
  useRecoilValueLoadable: ff,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: hf,
  useResetRecoilState: pf,
  useSetRecoilState: vf
} = Sl, {
  useGotoRecoilSnapshot: _f,
  useRecoilSnapshot: mf,
  useRecoilTransactionObserver: Sf
} = Hr, {
  useRecoilCallback: Rf
} = Jr, {
  noWait: yf,
  waitForAll: gf,
  waitForAllSettled: bf,
  waitForAny: Tf,
  waitForNone: Ef
} = Xd;
var En = {
  // Types
  DefaultValue: ef,
  isRecoilValue: of,
  RecoilLoadable: Qd,
  // Global Recoil environment settiongs
  RecoilEnv: St,
  // Recoil Root
  RecoilRoot: tf,
  useRecoilStoreID: nf,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: Gl,
  // Atoms/Selectors
  atom: is,
  selector: mt,
  // Convenience Atoms/Selectors
  atomFamily: kd,
  selectorFamily: Je,
  constSelector: xd,
  errorSelector: Wd,
  readOnlySelector: jd,
  // Concurrency Helpers for Atoms/Selectors
  noWait: yf,
  waitForNone: Ef,
  waitForAny: Tf,
  waitForAll: gf,
  waitForAllSettled: bf,
  // Hooks for Atoms/Selectors
  useRecoilValue: uf,
  useRecoilValueLoadable: ff,
  useRecoilState: af,
  useRecoilStateLoadable: lf,
  useSetRecoilState: vf,
  useResetRecoilState: pf,
  useGetRecoilValueInfo_UNSTABLE: xl,
  useRecoilRefresher_UNSTABLE: yu,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: hf,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: df,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: cf,
  // Hooks for complex operations
  useRecoilCallback: Rf,
  useRecoilTransaction_UNSTABLE: wu,
  // Snapshots
  useGotoRecoilSnapshot: _f,
  useRecoilSnapshot: mf,
  useRecoilTransactionObserver_UNSTABLE: Sf,
  snapshot_UNSTABLE: sf,
  // Memory Management
  useRetain: ao,
  retentionZone: rf
}, wf = En.RecoilRoot, Nf = En.atom, Af = En.useRecoilValue, Cf = En.useRecoilCallback;
const ho = ms({
  testData: {},
  callObject: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addTestData: () => {
  }
}), Wo = Nf({
  key: "test-data-state",
  default: {}
}), Lf = ({
  children: t,
  callObject: e
}) => {
  const n = Af(Wo), o = Cf(
    ({ set: r }) => (s, a) => {
      r(Wo, (l) => ({
        ...l,
        [s]: a
      }));
    },
    []
  );
  return /* @__PURE__ */ xn.jsx(ho.Provider, { value: { testData: n, addTestData: o, callObject: e }, children: t });
};
ho.displayName = "DailyTestContext";
const wn = () => Ss(ho), po = {
  RELAY_ONLY: "relay"
};
Object.values(po);
const fs = {
  TWILIO: "https://prod-ks.pluot.blue/tt-150331.json"
}, zo = {
  CONNECTED: "connected",
  FAILED: "failed",
  STOPPED: "stopped"
};
class Vf {
  /**
   * Constructor for the NetworkTester class.
   * @constructor
   * @param {string} natService - The NAT service to use for the connection.
   * @param {string} connectionMode - The connection mode to use for the connection.
   * @param {RTCIceServer[]} iceServers - The array of STUN or TURN servers to use for the connection.
   * @param mediaStream - optional, only needed for Safari
   */
  constructor({
    natService: e,
    connectionMode: n,
    iceServers: o,
    mediaStream: r
  }) {
    this.connectionMode = n, this.mediaStream = r, this.natService = e, this.iceServers = o, this.localPeer = null, this.remotePeer = null, this.constraints = {
      video: {
        deviceId: "default",
        facingMode: "user",
        width: 1280,
        height: 720
      },
      audio: {
        deviceId: "default"
      }
    }, this.offerOptions = {
      offerToReceiveAudio: !0,
      offerToReceiveVideo: !0
    };
  }
  /**
   * Sets up an RTCPeerConnection with the given ICE servers and ice transport policy.
   * @returns {Promise<unknown>} A promise that resolves when the RTCPeerConnection is established.
   */
  async setupRTCPeerConnection() {
    if (!window.RTCPeerConnection)
      return;
    const e = "relay", n = {
      iceServers: this.iceServers,
      iceTransportPolicy: e
    };
    return this.localPeer = new RTCPeerConnection(n), this.remotePeer = new RTCPeerConnection(n), this.localPeer.bufferedIceCandidates = [], this.remotePeer.bufferedIceCandidates = [], this.localPeer.iceCandidates = [], this.setupPeerListeners(), await this.start(), new Promise((o, r) => {
      this.resolve = o, this.reject = r, this.connectionTimeout = window.setTimeout(() => {
        const s = this.getConnectionInfo();
        this.resolve(s);
      }, 15e3), this.flushTimeout = window.setTimeout(() => {
        this.flushIceCandidates(this.localPeer), this.flushIceCandidates(this.remotePeer);
      }, 7500);
    });
  }
  /**
   * Sets up the listeners for the local and remote peers, including
   * handling of ICE candidates and connection state changes.
   */
  setupPeerListeners() {
    this.localPeer && (this.localPeer.onicecandidate = (e) => {
      var n, o, r, s;
      if (!e.candidate || !e.candidate.candidate) {
        this.flushIceCandidates(this.remotePeer);
        return;
      }
      (o = (n = this.localPeer) == null ? void 0 : n.iceCandidates) == null || o.push(e.candidate), (s = (r = this.remotePeer) == null ? void 0 : r.bufferedIceCandidates) == null || s.push(e.candidate);
    }, this.remotePeer && (this.remotePeer.onicecandidate = (e) => {
      var n, o;
      if (!e.candidate || !e.candidate.candidate) {
        this.flushIceCandidates(this.localPeer);
        return;
      }
      (o = (n = this.localPeer) == null ? void 0 : n.bufferedIceCandidates) == null || o.push(e.candidate);
    }, this.localPeer.connectionState ? this.localPeer.onconnectionstatechange = () => {
      var e;
      return this.onConnectionStateChange((e = this.localPeer) == null ? void 0 : e.connectionState);
    } : this.localPeer.oniceconnectionstatechange = (e) => this.onIceConnectionStateChange(e)));
  }
  async start() {
    this.mediaStream && this.addStream(), await this.createOffer(), await this.createAnswer();
  }
  addStream() {
    this.mediaStream && this.mediaStream.getTracks().forEach((e) => {
      var n, o;
      (n = this.localPeer) == null || n.addTrack(e), (o = this.remotePeer) == null || o.addTrack(e);
    });
  }
  flushIceCandidates(e) {
    var n;
    (n = e == null ? void 0 : e.bufferedIceCandidates) == null || n.forEach((o) => e.addIceCandidate(o)), e != null && e.bufferedIceCandidates && (e.bufferedIceCandidates = []);
  }
  async createOffer() {
    var e;
    return (e = this.localPeer) == null ? void 0 : e.createOffer(this.offerOptions).then(async (n) => {
      const o = n;
      return this.setDescription(o, this.localPeer, this.remotePeer);
    });
  }
  async setDescription(e, n, o) {
    await (n == null ? void 0 : n.setLocalDescription(e)), await (o == null ? void 0 : o.setRemoteDescription(e));
  }
  /**
   * Creates an answer to the remote peer's offer and sets it as the local peer's description.
   * @returns {Promise<void>} A promise that resolves once the local peer's description is set.
   */
  async createAnswer() {
    var e;
    try {
      const n = await ((e = this.remotePeer) == null ? void 0 : e.createAnswer(
        this.offerOptions
      ));
      await this.setDescription(
        n,
        this.remotePeer,
        this.localPeer
      );
    } catch {
    }
  }
  /**
   * Returns information about the current WebRTC connection.
   * @returns {Object} An object with `candidates` and `result` properties.
   */
  getConnectionInfo() {
    var s, a, l;
    const e = (s = this.localPeer) == null ? void 0 : s.iceCandidates, n = (a = this.localPeer) == null ? void 0 : a.connectionState, o = (l = this.localPeer) == null ? void 0 : l.iceConnectionState, r = n || o === "connected" ? zo.CONNECTED : zo.FAILED;
    return {
      iceCandidates: e,
      result: r
    };
  }
  /**
   * Handler for RTCPeerConnection's connection state change event.
   * @param {RTCPeerConnectionState|undefined} connectionState - The new connection state.
   * @return {void}
   */
  onConnectionStateChange(e) {
    var n, o;
    if (this.connectionState = e, ((n = this.localPeer) == null ? void 0 : n.connectionState) === "failed" || ((o = this.localPeer) == null ? void 0 : o.connectionState) === "connected") {
      const r = this.getConnectionInfo();
      this.resolve(r), this.stop();
    }
  }
  /**
   * Callback for when the iceConnectionState changes. Used for Firefox, since it doesn't support connectionState, only iceConnectionState.
   * @param {Event} event - The event object containing the state change information.
   */
  onIceConnectionStateChange(e) {
    var o;
    this.event = e;
    const n = (o = this.localPeer) == null ? void 0 : o.iceConnectionState;
    if (n === "failed") {
      const r = this.getConnectionInfo();
      this.resolve(r), this.stop();
    }
    if (n === "connected" || n === "completed") {
      const r = this.getConnectionInfo();
      this.resolve(r), window.clearTimeout(this.connectionTimeout), window.clearTimeout(this.flushTimeout);
    }
  }
  /**
   * Stops the RTCPeerConnections and clears connectionTimeout and flushTimeout timeouts.
   */
  stop() {
    var e, n;
    try {
      (e = this.localPeer) == null || e.close(), (n = this.remotePeer) == null || n.close(), window.clearTimeout(this.connectionTimeout), window.clearTimeout(this.flushTimeout);
    } catch {
    }
  }
}
const vo = () => {
  const { callObject: t } = wn(), [e, n] = Oe([]), o = xe((r) => {
    const s = {
      timestamp: /* @__PURE__ */ new Date(),
      error: r
    };
    n((a) => [...a, s]);
  }, []);
  return $e(() => {
    if (t)
      return t.on("error", o), t.on("nonfatal-error", o), function() {
        t.off("error", o), t.off("nonfatal-error", o);
      };
  }, [o, t]), {
    addError: o,
    errors: e
  };
}, hs = (t, e) => {
  const n = Le(t), o = Le();
  return $e(() => {
    n.current = t;
  }, [t]), $e(() => {
    const r = () => n.current();
    if (typeof e == "number")
      return o.current = window.setTimeout(r, e), () => window.clearTimeout(o == null ? void 0 : o.current);
  }, [e]), o;
}, If = 15, jo = {
  [po.RELAY_ONLY]: {
    result: "",
    iceCandidates: []
  }
}, Kf = () => {
  const { addTestData: t } = wn(), [e, n] = Oe("idle"), o = Le("idle"), r = Le(), [s, a] = Oe(!1), [l, u] = Oe(!1);
  hs(
    () => {
      u(!0);
    },
    s ? null : If * 1e3
  ), $e(() => {
    l && e === "running" && n("stopping");
  }, [l, e]);
  const d = Le(), [p, v] = Oe(
    jo
  ), { addError: N, errors: L } = vo();
  $e(() => {
    Object.keys(p).every(
      (V) => {
        var U;
        return ((U = p[V]) == null ? void 0 : U.result) !== "";
      }
    ) && n("stopping");
  }, [p]);
  const R = xe(() => {
    var V;
    const S = {
      errors: L,
      result: (V = p == null ? void 0 : p[po.RELAY_ONLY]) == null ? void 0 : V.result
    };
    t("network", S);
  }, [t, L, p]);
  $e(() => {
    (async () => {
      var V, U;
      switch (e) {
        case "idle":
          break;
        case "starting":
          const G = (V = r.current) == null ? void 0 : V.getAudioTracks().length, q = (U = r.current) == null ? void 0 : U.getVideoTracks().length;
          G || N(
            "No audio track found: this may affect the network test results in Safari."
          ), q || N(
            "No video track found: this may affect the network test results in Safari."
          ), !q && !G && N(
            "No audio and video tracks found. This may affect the network test results in Safari."
          );
          const ue = await (await fetch(fs.TWILIO)).json(), ye = await Promise.all(
            Object.keys(p).map(
              (K) => A(K, ue, r.current)
            )
          );
          d.current = ye, n("running");
          break;
        case "running":
          break;
        case "stopping":
          d.current && await Promise.all(
            d.current.map((K) => {
              K.stop();
            })
          ), n("finished");
          break;
        case "finished":
          if (o.current === "finished")
            return;
          R(), delete d.current, a(!0), v(jo);
          break;
      }
      o.current = e;
    })();
  }, [N, e, p, R]);
  async function A(S, V, U) {
    const G = new Vf({
      natService: "twilio",
      connectionMode: S,
      iceServers: V,
      mediaStream: U
    });
    return G.setupRTCPeerConnection().then((q) => {
      const X = q;
      v((ue) => ({
        ...ue,
        [S]: {
          result: X.result,
          iceCandidates: X.iceCandidates
        }
      }));
    }), G;
  }
  const F = xe(async (S) => {
    S && (r.current = S), n("starting");
  }, []), j = xe(() => {
    e !== "finished" && n("stopping");
  }, [e]);
  return {
    startNetworkTest: F,
    stopNetworkTest: j,
    networkTestState: e
  };
}, Pf = [
  "af-south-1",
  "ap-northeast-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-south-1",
  "eu-central-1",
  "eu-west-2",
  "sa-east-1",
  "us-east-1",
  "us-west-2"
], kf = async (t) => {
  try {
    const o = (await (await fetch(
      `https://gs.daily.co/rooms/check/test-rooms/${t}`
    )).json()).worker.wssUri;
    return await Df(o), t;
  } catch (e) {
    throw console.error(`[${t}] Caught error:`, e), t;
  }
}, Df = (t, e = 10) => new Promise((n, o) => {
  const r = new WebSocket(t), s = setTimeout(() => {
    r.close(), o(`Connection to ${t} timed out`);
  }, e * 1e3);
  r.addEventListener("open", () => {
    clearTimeout(s), r.close(), n();
  }), r.addEventListener("error", (a) => {
    clearTimeout(s), r.close(), o(`Error connecting to ${t}: ${a}`);
  });
}), $f = () => Pf.map((t) => kf(t)), Of = 10, Go = {
  "eu-central-1": {
    result: ""
  },
  "eu-west-2": {
    result: ""
  },
  "us-east-1": {
    result: ""
  },
  "ap-south-1": {
    result: ""
  },
  "af-south-1": {
    result: ""
  },
  "us-west-2": {
    result: ""
  },
  "ap-southeast-1": {
    result: ""
  },
  "sa-east-1": {
    result: ""
  },
  "ap-northeast-2": {
    result: ""
  },
  "ap-southeast-2": {
    result: ""
  }
}, Hf = () => {
  const { addTestData: t } = wn(), { errors: e } = vo(), [n, o] = Oe("idle"), r = Le("idle"), [s, a] = Oe(!1), [l, u] = Oe(!1);
  hs(
    () => {
      u(!0);
    },
    s ? null : Of * 1e3
  ), $e(() => {
    l && n === "running" && o("stopping");
  }, [l, n]);
  const [d, p] = Oe(Go);
  $e(() => {
    Object.keys(d).every(
      (A) => {
        var F;
        return ((F = d[A]) == null ? void 0 : F.result) !== "";
      }
    ) && o("finished");
  }, [d]);
  const v = xe(() => {
    const R = Object.keys(d).filter(
      (V) => {
        var U;
        return ((U = d[V]) == null ? void 0 : U.result) === "passed";
      }
    ), A = Object.keys(d).filter(
      (V) => {
        var U;
        return ((U = d[V]) == null ? void 0 : U.result) === "failed";
      }
    );
    let F = "";
    const j = Object.values(d).length;
    A.length === j ? F = "failed" : A.length > 0 ? F = "warning" : F = "passed", t("websockets", {
      errors: e,
      failed: A,
      passed: R,
      result: F
    });
  }, [t, e, d]);
  $e(() => {
    (async () => {
      switch (n) {
        case "idle":
          break;
        case "starting":
          $f().forEach((A) => {
            A.then(
              (F) => {
                p((j) => ({
                  ...j,
                  [F]: {
                    result: "passed"
                  }
                }));
              },
              (F) => {
                p((j) => ({
                  ...j,
                  [F]: {
                    result: "failed"
                  }
                }));
              }
            );
          }), o("running");
          break;
        case "running":
          break;
        case "stopping":
          o("finished");
          break;
        case "finished":
          if (r.current === "finished")
            return;
          a(!0), v(), p(Go);
          break;
      }
      r.current = n;
    })();
  }, [v, n]);
  const N = xe(() => {
    o("starting");
  }, []), L = xe(() => {
    n !== "finished" && o("stopping");
  }, [n]);
  return {
    startWebsocketsTest: N,
    stopWebsocketsTest: L,
    websocketsTestState: n
  };
};
class Mf {
  /**
   * Creates a new WebRTC connection object
   * @param {{iceServers: RTCIceServer[] | mediaStream: MediaStream;}} options
   */
  constructor({
    iceServers: e,
    mediaStream: n
  }) {
    this.iceServers = e, this.localPeer = null, this.remotePeer = null, this.mediaStream = n, this.offerOptions = {
      offerToReceiveAudio: !0,
      offerToReceiveVideo: !0
    };
  }
  /**
   * Sets up an RTCPeerConnection for establishing a WebRTC connection
   * @returns {Promise<void>} - A Promise that resolves once the RTCPeerConnection is set up
   */
  async setupRTCPeerConnection() {
    if (!window.RTCPeerConnection)
      return;
    const e = {
      iceServers: this.iceServers,
      iceTransportPolicy: "relay"
    };
    return this.localPeer = new RTCPeerConnection(e), this.remotePeer = new RTCPeerConnection(e), this.localPeer.bufferedIceCandidates = [], this.remotePeer.bufferedIceCandidates = [], this.setupPeerListeners(), await this.start(), new Promise((n, o) => {
      this.connectionEstablished = n, this.connectionFailed = o, this.connectionTimeout = window.setTimeout(this.connectionFailed, 15e3);
    });
  }
  /**
   * Sets up event listeners for the local and remote peers.
   */
  setupPeerListeners() {
    this.localPeer && (this.localPeer.onicecandidate = (e) => {
      var n, o;
      !e.candidate || !e.candidate.candidate ? this.flushIceCandidates(this.remotePeer) : (n = this.remotePeer) != null && n.bufferedIceCandidates ? this.remotePeer.bufferedIceCandidates.push(e.candidate) : (o = this.remotePeer) == null || o.addIceCandidate(e.candidate);
    }, this.remotePeer && (this.remotePeer.onicecandidate = (e) => {
      var n, o;
      !e.candidate || !e.candidate.candidate ? this.flushIceCandidates(this.localPeer) : (n = this.localPeer) != null && n.bufferedIceCandidates ? this.localPeer.bufferedIceCandidates.push(e.candidate) : (o = this.localPeer) == null || o.addIceCandidate(e.candidate);
    }, this.localPeer.connectionState ? this.localPeer.onconnectionstatechange = () => this.onConnectionStateChange() : this.localPeer.oniceconnectionstatechange = () => this.onIceConnectionStateChange()));
  }
  /**
   * Starts the WebRTC connection process by adding the local media stream,
   * creating an offer, creating an answer, and flushing ICE candidates to both peers.
   * @returns {Promise<void>} - A Promise that resolves when the connection process is complete.
   */
  async start() {
    this.mediaStream && this.addStream(), await this.createOffer(), await this.createAnswer(), await this.flushIceCandidates(this.localPeer), await this.flushIceCandidates(this.remotePeer);
  }
  /**
   * Sends any buffered ICE candidates to the specified peer, and clears the buffer.
   *
   * @param {RTCPeerConnectionWithBuffers | null} peer - The peer to send the ICE candidates to.
   * @returns {void} - Returns nothing.
   */
  flushIceCandidates(e) {
    var n;
    (n = e == null ? void 0 : e.bufferedIceCandidates) == null || n.forEach((o) => e.addIceCandidate(o)), e != null && e.bufferedIceCandidates && (e.bufferedIceCandidates = null);
  }
  addStream() {
    this.mediaStream && this.mediaStream.getTracks().forEach((e) => {
      var n, o;
      (n = this.localPeer) == null || n.addTrack(e), (o = this.remotePeer) == null || o.addTrack(e);
    });
  }
  /**
   * Creates an offer to start a WebRTC session, and sets it as the local peer's local session description.
   * @returns {Promise<void>} - Returns a promise that resolves when the local session description has been set.
   */
  createOffer() {
    var e;
    return (e = this.localPeer) == null ? void 0 : e.createOffer(this.offerOptions).then((n) => {
      const o = n;
      return this.setDescription(o, this.localPeer, this.remotePeer);
    });
  }
  async setDescription(e, n, o) {
    await (n == null ? void 0 : n.setLocalDescription(e)), await (o == null ? void 0 : o.setRemoteDescription(e));
  }
  /**
   * Creates an answer to an offer received from the remote peer, and sets it as the remote peer's local session description.
   * @returns {Promise<void>} - Returns a promise that resolves when the remote session description has been set.
   */
  createAnswer() {
    var e;
    return (e = this.remotePeer) == null ? void 0 : e.createAnswer(this.offerOptions).then((n) => {
      const o = n;
      return this.setDescription(o, this.remotePeer, this.localPeer);
    });
  }
  /**
   * Legacy callback function called when the local ICE connection state changes.
   * @returns {void}
   */
  onIceConnectionStateChange() {
    var n;
    const e = (n = this.localPeer) == null ? void 0 : n.iceConnectionState;
    e === "failed" && (this.connectionFailed(), this.stop()), (e === "connected" || e === "completed") && (this.connectionEstablished(), window.clearTimeout(this.connectionTimeout));
  }
  /**
   * Legacy callback function called when the local connection state changes.
   * @returns {void}
   */
  onConnectionStateChange() {
    var n;
    const e = (n = this.localPeer) == null ? void 0 : n.connectionState;
    e === "failed" && (this.connectionFailed(), this.stop()), e === "connected" && (this.connectionEstablished(), window.clearTimeout(this.connectionTimeout));
  }
  /**
   * Stops the WebRTC connection by closing the local and remote peer connections.
   * @returns {void}
   */
  stop() {
    var e, n;
    try {
      (e = this.localPeer) == null || e.close(), (n = this.remotePeer) == null || n.close();
    } catch {
    }
  }
}
class Uf {
  constructor({
    iceServers: e,
    mediaStream: n
  }) {
    this.intervalId = "", this.timeoutId = "", this.roundTripTimes = [], this.iceServers = e, this.mediaStream = n;
  }
  /**
   * Sets up the RTCPeerConnection for the network test
   * @returns {Promise<void>} Resolves when the RTCPeerConnection is successfully set up
   */
  async setupPeerConnection() {
    this.networkTester = new Mf({
      iceServers: this.iceServers,
      mediaStream: this.mediaStream
    }), await this.networkTester.setupRTCPeerConnection(), this.peerConnection = this.networkTester.localPeer;
  }
  /**
   * Set up the peer connection and initialize roundTripTimes array.
   * @returns {Promise<void>} A Promise that resolves when the connection is set up and the array is initialized.
   */
  async startContinuouslySampling() {
    await this.setupPeerConnection(), this.roundTripTimes = [];
  }
  /**
   * Periodically retrieves the current round trip time and returns an object containing the maximum round trip time and packet loss.
   * @returns {{ maxRTT: number, packetLoss: number }}
   */
  async getSample() {
    if (!this.peerConnection)
      throw new Error("You need at peerConnection to continue");
    return await this.getRoundTripTimePeriodically(), {
      maxRTT: this.getMaxRtt(),
      packetLoss: await this.getPacketLoss()
    };
  }
  /**
   * Samples the current round trip time and adds it to the `roundTripTimes` array.
   */
  async getRoundTripTimePeriodically() {
    const e = await this.sampleRoundTripTime();
    e && this.roundTripTimes.push(e);
  }
  /**
   * Samples the current round trip time by retrieving stats from the peer connection.
   * @returns {Promise<number>} A Promise that resolves with the current round trip time in seconds.
   */
  sampleRoundTripTime() {
    var e;
    return (e = this.peerConnection) == null ? void 0 : e.getStats().then((n) => {
      const o = this.mapToObj(n), r = Object.values(o), s = r.filter((a) => a.currentRoundTripTime);
      if (s.length === 0) {
        const a = r.find((l) => typeof l.roundTripTime == "number");
        return a ? a.roundTripTime / 1e3 : 0;
      } else {
        const a = s.find((l) => l.nominated);
        return a ? a.currentRoundTripTime : s[0].currentRoundTripTime;
      }
    });
  }
  /**
   * Retrieves the packet loss percentage from the PeerConnection
   * @returns {Promise<number>} A Promise that resolves with the packet loss percentage as a number between 0 and 100
   */
  async getPacketLoss() {
    var e;
    return (e = this.peerConnection) == null ? void 0 : e.getStats().then((n) => {
      const o = this.mapToObj(n), s = Object.values(o).find((d) => d.kind === "video"), a = s && s.packetsLost ? s.packetsLost : 0, l = s && s.packetsReceived ? s.packetsReceived : 0, u = a + l;
      return l > 0 ? a / u * 100 : 0;
    });
  }
  /**
   * Returns the maximum round trip time from the roundTripTimes array.
   * @returns {number} - The maximum round trip time.
   */
  getMaxRtt() {
    return Math.max(...this.roundTripTimes);
  }
  closeConnection() {
    var e;
    (e = this.networkTester) == null || e.stop();
  }
  /**
   * Stops the network quality sampling process by clearing the interval and timeout, and closing the connection.
   */
  stopSampling() {
    clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.closeConnection();
  }
  /**
   * Convert RTCStatsReport to an object
   * @param {RTCStatsReport} statsReport - The stats report to convert
   * @returns {Object} An object containing the stats report
   */
  mapToObj(e) {
    if (!e.entries)
      return e;
    const n = {};
    return e.forEach((o, r) => {
      n[r] = o;
    }), n;
  }
}
const xf = 1, Bf = 0.7, Ff = 10, Wf = 5, zf = (t) => {
  if (!t)
    return "failed";
  let e = "", n = "";
  return t.maxRTT !== null && t.maxRTT >= xf ? e = "bad" : t.maxRTT !== null && t.maxRTT >= Bf ? e = "warning" : e = "good", t.packetLoss !== null && typeof t.packetLoss < "u" && t.packetLoss >= Ff ? n = "bad" : t.packetLoss !== null && typeof t.packetLoss < "u" && t.packetLoss >= Wf ? n = "warning" : n = "good", e === "good" && n === "good" ? "good" : e === "bad" || n === "bad" ? "bad" : "warning";
}, Ko = {
  maxRTT: null,
  packetLoss: null
}, Ho = "", Yf = () => {
  const { addTestData: t } = wn(), e = Le("idle"), [n, o] = Oe("idle"), r = Le(0), s = Le(), [a, l] = Oe(
    0 - r.current
  ), u = Le(), d = Le(), p = Le(Ko), v = Le(
    Ho
  ), { addError: N, errors: L } = vo();
  $e(() => {
    a < r.current || !a || o("stopping");
  }, [a]);
  const R = xe(() => {
    const j = {
      errors: L,
      result: v.current,
      data: p.current
    };
    t("connection", j);
  }, [t, L]);
  $e(() => ((async () => {
    var S, V, U;
    switch (n) {
      case "idle":
        break;
      case "starting":
        if (!u.current)
          return;
        const G = (S = u.current) == null ? void 0 : S.getAudioTracks().length, q = (V = u.current) == null ? void 0 : V.getVideoTracks().length;
        if (G || N(
          "No audio track found: this may affect the throughput test results."
        ), q || N(
          "No video track found: this may affect the throughput test results."
        ), !q && !G) {
          N(
            "No audio and video tracks found: cannot measure throughput."
          ), o("stopping");
          return;
        }
        const X = fs.TWILIO, ye = await (await fetch(X)).json();
        d.current = new Uf({
          iceServers: ye,
          mediaStream: u.current
        }), await d.current.startContinuouslySampling(), o("running");
        break;
      case "running":
        s.current = setInterval(async () => {
          if (!d.current)
            return;
          const K = await d.current.getSample();
          p.current = K, l((_e) => _e + 1), v.current = zf(K);
        }, 1e3);
        break;
      case "stopping":
        (U = d.current) == null || U.stopSampling(), clearInterval(s.current), r.current = 0, o("finished");
        break;
      case "finished": {
        if (e.current === "finished")
          return;
        R(), delete d.current, p.current = Ko, v.current = Ho, l(0);
        break;
      }
    }
    e.current = n;
  })(), () => {
    clearInterval(s.current);
  }), [N, n, R]);
  const A = xe(
    async (j, S = 15) => {
      u.current = j, r.current = S, o("starting");
    },
    []
  ), F = xe(() => {
    n !== "finished" && o("stopping");
  }, [n]);
  return {
    connectionTestState: n,
    startConnectionTest: A,
    stopConnectionTest: F,
    timeElapsed: a
  };
}, qf = ({
  children: t,
  callObject: e
}) => ($e(() => {
  if (!e || e.isDestroyed())
    return;
  function n() {
    switch (e == null ? void 0 : e.meetingState()) {
      case "left-meeting":
        e.destroy();
        break;
    }
  }
  return n(), e == null || e.on("left-meeting", n), e.startCamera({
    audioSource: !0,
    videoSource: !1
  }), () => {
    e.off("left-meeting", n);
  };
}, [e]), /* @__PURE__ */ xn.jsx(wf, { children: /* @__PURE__ */ xn.jsx(Lf, { callObject: e, children: t }) }));
export {
  qf as DailyTestProvider,
  Yf as useConnectionTest,
  wn as useDailyTest,
  Kf as useNetworkTest,
  Hf as useWebsocketsTest
};
