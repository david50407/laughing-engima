/*! For license information please see LICENSES */
webpackJsonp([3],{"3Rqf":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("nuxt-link",{staticClass:"logo",attrs:{to:t.localePath("index")}},[n("img",{attrs:{src:r("BB76")}})]),n("ul",{staticClass:"pages container"},[n("li",[n("nuxt-link",{attrs:{to:t.localePath("index")}},[t._v(t._s(t.$t("pages.about")))])],1),n("li",[n("nuxt-link",{attrs:{to:t.localePath("schedules")}},[t._v(t._s(t.$t("pages.schedules")))])],1),n("li",[n("nuxt-link",{attrs:{to:t.localePath("directions")}},[t._v(t._s(t.$t("pages.directions")))])],1),n("li",[n("nuxt-link",{attrs:{to:t.localePath("sponsors")}},[t._v(t._s(t.$t("pages.sponsors")))])],1),n("li",[n("nuxt-link",{attrs:{to:t.localePath("staffs")}},[t._v(t._s(t.$t("pages.staffs")))])],1),n("li",[n("a",{attrs:{href:"https://blog.coscup.org",target:"_blank"}},[t._v(t._s(t.$t("pages.blog")))])])]),n("ul",{staticClass:"languages"},[n("li",[n("nuxt-link",{attrs:{to:t.switchLocalePath("en")}},[t._v("En")])],1),n("li",[n("nuxt-link",{attrs:{to:t.switchLocalePath("zh-TW")}},[t._v("繁")])],1)])],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},"3uI8":function(t,e,r){var n=r("tuyt");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("02f7e1d8",n,!1,{sourceMap:!1})},BB76:function(t,e,r){t.exports=r.p+"img/logo-200.c2f9236.png"},GLTl:function(t,e,r){"use strict";var n=r("3Rqf"),o=!1;var i=function(t){o||r("Hyek")},a=r("VU/8")(null,n.a,!1,i,"data-v-0957edea",null);a.options.__file="components/NavBar.vue",e.a=a.exports},Hyek:function(t,e,r){var n=r("xawA");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("4d62f41f",n,!1,{sourceMap:!1})},I8yv:function(t,e,r){(function(t,e){var r;!function(r){!function(n){var o="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=a(r);function a(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===o.Reflect?o.Reflect=r:i=a(o.Reflect,i),function(e){var r=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,o=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",a="function"==typeof Object.create,c={__proto__:[]}instanceof Array,u=!a&&!c,s={create:a?function(){return z(Object.create(null))}:c?function(){return z({__proto__:null})}:function(){return z({})},has:u?function(t,e){return r.call(t,e)}:function(t,e){return e in t},get:u?function(t,e){return r.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},f=Object.getPrototypeOf(Function),l="object"==typeof t&&t.env&&"true"===t.env.REFLECT_METADATA_USE_MAP_POLYFILL,p=l||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,o)},e.prototype.entries=function(){return new r(this._keys,this._values,a)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function o(t,e){return e}function a(t,e){return[t,e]}}():Map,d=l||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new p}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,h=new(l||"function"!=typeof WeakMap?function(){var t=16,e=s.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&s.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?s.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=i(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+c()}while(s.has(e,t));return e[t]=!0,t}function i(t,e){if(!r.call(t,n)){if(!e)return;Object.defineProperty(t,n,{value:s.create()})}return t[n]}function a(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function c(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):a(new Uint8Array(t),t);return a(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}():WeakMap);function y(t,e,r){var n=h.get(t);if(x(n)){if(!r)return;n=new p,h.set(t,n)}var o=n.get(e);if(x(o)){if(!r)return;o=new p,n.set(e,o)}return o}function v(t,e,r){var n=y(e,r,!1);return!x(n)&&!!n.has(t)}function g(t,e,r){var n=y(e,r,!1);if(!x(n))return n.get(t)}function _(t,e,r,n){var o=y(r,n,!0);o.set(t,e)}function b(t,e){var r=[],n=y(t,e,!1);if(x(n))return r;for(var o=n.keys(),a=function(t){var e=A(t,i);if(!E(e))throw new TypeError;var r=e.call(t);if(!k(r))throw new TypeError;return r}(o),c=0;;){var u=M(a);if(!u)return r.length=c,r;var s=u.value;try{r[c]=s}catch(t){try{R(a)}finally{throw t}}c++}}function w(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function x(t){return void 0===t}function m(t){return null===t}function k(t){return"object"==typeof t?null!==t:"function"==typeof t}function j(t,e){switch(w(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=A(t,o);if(void 0!==n){var i=n.call(t,r);if(k(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(E(r)){var n=r.call(t);if(!k(n))return n}var o=t.valueOf;if(E(o)){var n=o.call(t);if(!k(n))return n}}else{var o=t.valueOf;if(E(o)){var n=o.call(t);if(!k(n))return n}var i=t.toString;if(E(i)){var n=i.call(t);if(!k(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function O(t){var e=j(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function P(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function E(t){return"function"==typeof t}function T(t){return"function"==typeof t}function A(t,e){var r=t[e];if(void 0!==r&&null!==r){if(!E(r))throw new TypeError;return r}}function M(t){var e=t.next();return!e.done&&e}function R(t){var e=t.return;e&&e.call(t)}function S(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===f)return e;if(e!==f)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o?e:o===t?e:o}function z(t){return t.__=void 0,delete t.__,t}e("decorate",function(t,e,r,n){if(x(r)){if(!P(t))throw new TypeError;if(!T(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],o=n(e);if(!x(o)&&!m(o)){if(!T(o))throw new TypeError;e=o}}return e}(t,e)}if(!P(t))throw new TypeError;if(!k(e))throw new TypeError;if(!k(n)&&!x(n)&&!m(n))throw new TypeError;return m(n)&&(n=void 0),r=O(r),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=t[o],a=i(e,r,n);if(!x(a)&&!m(a)){if(!k(a))throw new TypeError;n=a}}return n}(t,e,r,n)}),e("metadata",function(t,e){return function(r,n){if(!k(r))throw new TypeError;if(!x(n)&&!function(t){switch(w(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;_(t,e,r,n)}}),e("defineMetadata",function(t,e,r,n){if(!k(r))throw new TypeError;x(n)||(n=O(n));return _(t,e,r,n)}),e("hasMetadata",function(t,e,r){if(!k(e))throw new TypeError;x(r)||(r=O(r));return function t(e,r,n){var o=v(e,r,n);if(o)return!0;var i=S(r);if(!m(i))return t(e,i,n);return!1}(t,e,r)}),e("hasOwnMetadata",function(t,e,r){if(!k(e))throw new TypeError;x(r)||(r=O(r));return v(t,e,r)}),e("getMetadata",function(t,e,r){if(!k(e))throw new TypeError;x(r)||(r=O(r));return function t(e,r,n){var o=v(e,r,n);if(o)return g(e,r,n);var i=S(r);if(!m(i))return t(e,i,n);return}(t,e,r)}),e("getOwnMetadata",function(t,e,r){if(!k(e))throw new TypeError;x(r)||(r=O(r));return g(t,e,r)}),e("getMetadataKeys",function(t,e){if(!k(t))throw new TypeError;x(e)||(e=O(e));return function t(e,r){var n=b(e,r);var o=S(e);if(null===o)return n;var i=t(o,r);if(i.length<=0)return n;if(n.length<=0)return i;var a=new d;var c=[];for(var u=0,s=n;u<s.length;u++){var f=s[u],l=a.has(f);l||(a.add(f),c.push(f))}for(var p=0,h=i;p<h.length;p++){var f=h[p],l=a.has(f);l||(a.add(f),c.push(f))}return c}(t,e)}),e("getOwnMetadataKeys",function(t,e){if(!k(t))throw new TypeError;x(e)||(e=O(e));return b(t,e)}),e("deleteMetadata",function(t,e,r){if(!k(e))throw new TypeError;x(r)||(r=O(r));var n=y(e,r,!1);if(x(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=h.get(e);return o.delete(r),o.size>0||(h.delete(e),!0)})}(i)}()}(r||(r={}))}).call(e,r("W2nU"),r("DuR2"))},J9L1:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:18px;line-height:2em;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}body{background-color:#f5fcf5}a{text-decoration:none;color:#3b9c60}a:focus,a:hover{color:rgba(59,156,96,.4)}ul>li{list-style:none}.container{width:60%;max-width:1280px}",""])},Ma2J:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("jAOv"),o=r("R7nB"),i=!1;var a=function(t){i||(r("qIjZ"),r("3uI8"))},c=r("VU/8")(n.a,o.a,!1,a,"data-v-314f53c6",null);c.options.__file="layouts/default.vue",e.default=c.exports},R7nB:function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavBar"),e("nuxt")],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},"c+8m":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=(n=r("/5sW"))&&"object"==typeof n&&"default"in n?n.default:n,i={__proto__:[]}instanceof Array;var a=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured"];function c(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(a.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){return t[r]=e},configurable:!0})})};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(o[t]=n[t])}),o}(this,t)}});var n=t.__decorators__;n&&(n.forEach(function(t){return t(e)}),delete t.__decorators__);var c=Object.getPrototypeOf(t.prototype),u=c instanceof o?c.constructor:o,s=u.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if("prototype"!==n){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var a,c,u=Object.getOwnPropertyDescriptor(e,n);if(!i){if("cid"===n)return;var s=Object.getOwnPropertyDescriptor(r,n);if(a=u.value,c=typeof a,null!=a&&("object"===c||"function"===c)&&s&&s.value===u.value)return}0,Object.defineProperty(t,n,u)}}})}(s,t,u),s}function u(t){return"function"==typeof t?c(t):function(e){return c(e,t)}}!function(t){t.registerHooks=function(t){a.push.apply(a,t)}}(u||(u={}));var s=u;e.default=s,e.createDecorator=function(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}},e.mixins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.extend({mixins:t})}},jAOv:function(t,e,r){"use strict";var n,o=r("qPzS"),i=(r.n(o),r("GLTl")),a=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e=c([Object(o.Component)({components:{NavBar:i.a}})],e)}(o.Vue);e.a=u},qIjZ:function(t,e,r){var n=r("J9L1");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("68be16d4",n,!1,{sourceMap:!1})},qPzS:function(t,e,r){(function(t,e,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n="default"in r?r.default:r;n.registerHooks(["beforeRouteEnter","beforeRouteLeave","asyncData","fetch","head","middleware","layout","transition","scrollToTop","validate"]);var o=/\B([A-Z])/g,i=function(t){return t.replace(o,"-$1").toLowerCase()};t.Inject=function(t){return r.createDecorator(function(e,r){void 0===e.inject&&(e.inject={}),Array.isArray(e.inject)||(e.inject[r]=t||r)})},t.Provide=function(t){return r.createDecorator(function(e,r){var n=e.provide;if("function"!=typeof n||!n.managed){var o=e.provide;(n=e.provide=function(){var t=Object.create(("function"==typeof o?o.call(this):o)||null);for(var e in n.managed)t[n.managed[e]]=this[e];return t}).managed={}}n.managed[r]=t||r})},t.Model=function(t,e){return void 0===e&&(e={}),function(n,o){Array.isArray(e)||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",n,o)),r.createDecorator(function(r,n){(r.props||(r.props={}))[n]=e,r.model={prop:n,event:t||n}})(n,o)}},t.Prop=function(t){return void 0===t&&(t={}),function(e,n){Array.isArray(t)||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)),r.createDecorator(function(e,r){(e.props||(e.props={}))[r]=t})(e,n)}},t.Watch=function(t,e){void 0===e&&(e={});var n=e.deep,o=void 0!==n&&n,i=e.immediate,a=void 0!==i&&i;return r.createDecorator(function(e,r){"object"!=typeof e.watch&&(e.watch=Object.create(null)),e.watch[t]={handler:r,deep:o,immediate:a}})},t.Emit=function(t){return function(e,r,n){r=i(r);var o=n.value;n.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];!1!==o.apply(this,e)&&this.$emit.apply(this,[t||r].concat(e))}}},t.Off=function(t,e){return function(r,n,o){n=i(n);var a=o.value;o.value=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(!1!==a.apply(this,r))if(e){if("function"!=typeof this[e])throw new TypeError("must be a method name");this.$off(t||n,this[e])}else t?this.$off(t||n):this.$off()}}},t.On=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$on(t||n,e.methods[r])}})},t.Once=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$once(t||n,e.methods[r])}})},t.NextTick=function(t){return function(e,r,n){var o=n.value;n.value=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(!1!==o.apply(this,e)){if("function"!=typeof this[t])throw new TypeError("must be a method name");this.$nextTick(this[t])}}}},t.Component=n,t.Vue=e,Object.defineProperty(t,"__esModule",{value:!0})})(e,r("/5sW"),r("c+8m"),r("I8yv"))},tuyt:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"div[data-v-314f53c6]{padding-top:57.6px;padding-top:3.6rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},xawA:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"nav[data-v-0957edea]{height:57.6px;height:3.6rem;background-color:#fff;-webkit-box-shadow:0 2px 16px hsla(0,0%,80%,.5);box-shadow:0 2px 16px hsla(0,0%,80%,.5);font-size:.9em;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:fixed;left:0;top:0;right:0;z-index:10}.logo[data-v-0957edea],nav[data-v-0957edea]{display:-webkit-box;display:-ms-flexbox;display:flex}.logo[data-v-0957edea]{padding:0 1em;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-right:1px solid #e9e9e9}.logo img[data-v-0957edea]{height:2em;width:2em}.pages[data-v-0957edea]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:0 1em;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.pages li[data-v-0957edea],.pages li a[data-v-0957edea]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex}.pages li a[data-v-0957edea]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#999}.pages li a.nuxt-link-exact-active[data-v-0957edea]{color:#3b9c60;border-top:4px solid transparent;border-bottom:4px solid #3b9c60}.languages[data-v-0957edea]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:0;border-left:1px solid #e9e9e9}.languages[data-v-0957edea],.languages li[data-v-0957edea],.languages li a[data-v-0957edea]{display:-webkit-box;display:-ms-flexbox;display:flex}.languages li a[data-v-0957edea]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .5em;text-align:center}.languages li:first-child a[data-v-0957edea]{padding-left:1em}.languages li:last-child a[data-v-0957edea]{padding-right:1em}",""])}});