var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function r(){r=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i,a,u=Object.create((t&&t.prototype instanceof h?t:h).prototype);return o(u,"_invoke",{value:(i=new T(r||[]),a="suspendedStart",function(t,r){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw r;return j()}for(i.method=t,i.arg=r;;){var o=i.delegate;if(o){var u=function e(t,n){var r=n.method,o=t.iterator[r];if(void 0===o)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=void 0,e(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+r+"' method")),d;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(o,i);if(u){if(u===d)continue;return u}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===a)throw a="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a="executing";var c=f(e,n,i);if("normal"===c.type){if(a=i.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(a="completed",i.method="throw",i.arg=c.arg)}})}),u}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function h(){}function p(){}function v(){}var y={};l(y,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==t&&n.call(g,a)&&(y=g);var b=v.prototype=h.prototype=Object.create(y);function w(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){var r;o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,u){var c=f(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,a,u)},function(e){r("throw",e,a,u)}):t.resolve(s).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,u)})}u(c.arg)}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,o(b,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(k.prototype),l(k.prototype,u,function(){return this}),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(b),l(b,c,"Generator"),l(b,a,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function o(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){n(e);return}u.done?t(c):Promise.resolve(c).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function u(e){o(a,r,i,u,c,"next",e)}function c(e){o(a,r,i,u,c,"throw",e)}u(void 0)})}}function a(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function h(e,t,n){return(h=d()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function p(e){var t="function"==typeof Map?new Map:void 0;return(p=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return h(e,arguments,s(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),f(n,e)})(e)}function v(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var m=void 0!==e&&"[object global]"===({}).toString.call(e);function g(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function b(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function w(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(!isNaN(parseFloat(r))&&isFinite(r)&&Math.floor(r)==r)return"https://vimeo.com/".concat(r);if(b(r))return r.replace("http:","https:");if(t)throw TypeError("“".concat(t,"” is not a valid video id."));throw TypeError("“".concat(r,"” is not a vimeo.com url."))}var E=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"addEventListener",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"removeEventListener",i="string"==typeof t?[t]:t;return i.forEach(function(t){e[r](t,n)}),{cancel:function(){return i.forEach(function(t){return e[o](t,n)})}}},x=void 0!==Array.prototype.indexOf,T="undefined"!=typeof window&&void 0!==window.postMessage;if(!m&&(!x||!T))throw Error("Sorry, the Vimeo Player API is not available in this browser.");var P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw TypeError(n+" method called on incompatible receiver "+typeof e)}function i(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!!t&&t[0]===e&&(delete e[this._id],!0)}),r(e.prototype,"get",function(e){if(n(this,"get"),o(e)){var t=e[this._id];if(t&&t[0]===e)return t[1]}}),r(e.prototype,"has",function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!!t&&t[0]===e}),r(e.prototype,"set",function(e,t){if(n(this,"set"),!o(e))throw TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?i[1]=t:r(e,this._id,[e,t]),this}),r(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:P);var j=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){var t;P[t="Promise"]=P[t]||function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null!=e&&("object"==n||"function"==n)&&(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)(function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}})(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i(function(){var r=new f(n);try{t.call(e,function(){c.apply(r,arguments)},function(){l.apply(r,arguments)})}catch(e){l.call(r,e)}}):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(e){l.call(new f(n),e)}}}function l(e){var t=this;!t.triggered&&(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function s(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function f(e){this.def=e,this.triggered=!1}function d(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new d(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t}),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){c.call(t,e)},function(e){l.call(t,e)})}catch(e){l.call(t,e)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var p=e({},"constructor",h,!1);return h.prototype=p,e(p,"__NPO__",0,!1),e(h,"resolve",function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),e(h,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),e(h,"all",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;s(t,e,function(e,t){i[e]=t,++a===o&&n(i)},r)})}),e(h,"race",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");s(t,e,function(e,t){n(t)},r)})}),h}(),e.exports&&(e.exports=P[t])}),O=new WeakMap;function _(e,t,n){var r=O.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),O.set(e.element,r)}function S(e,t){return(O.get(e.element)||{})[t]||[]}function M(e,t,n){var r=O.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],O.set(e.element,r),!0;var o=r[t].indexOf(n);return -1!==o&&r[t].splice(o,1),O.set(e.element,r),r[t]&&0===r[t].length}function C(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function F(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}var N=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return N.reduce(function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t},t)}function A(e,t){var n=e.html;if(!t)throw TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(r,o){if(!b(e))throw TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404===u.status){o(Error("“".concat(e,"” was not found.")));return}if(403===u.status){o(Error("“".concat(e,"” is not embeddable.")));return}try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code){A(t,n),o(Error("“".concat(e,"” is not embeddable.")));return}r(t)}catch(e){o(e)}},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()})}var I={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1},q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,o,u,h,p=(t=d(),function(){var e,n=s(y);if(t){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return v(e)}(this,e)});function y(e,t){var o,u,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;return a(this,y),l(v(u=p.call(this)),"logger",void 0),l(v(u),"speedAdjustment",0),l(v(u),"adjustSpeed",(o=i(r().mark(function e(t,n){var o;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u.speedAdjustment!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getPlaybackRate();case 4:return e.t0=e.sent,e.t1=u.speedAdjustment,e.t2=e.t0-e.t1,e.t3=n,o=e.t2+e.t3,u.log("New playbackRate:  ".concat(o)),e.next=12,t.setPlaybackRate(o);case 12:u.speedAdjustment=n;case 13:case"end":return e.stop()}},e)})),function(e,t){return o.apply(this,arguments)})),u.logger=s,u.init(t,e,n(n({},I),c)),u}return c(y,[{key:"disconnect",value:function(){this.dispatchEvent(new Event("disconnect"))}},{key:"init",value:(o=i(r().mark(function e(t,n,o){var i,a,u,c=this;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitForTOReadyState(t,"open");case 2:if("viewer"!==o.role){e.next=10;break}return e.next=5,this.updatePlayer(t,n,o);case 5:i=E(t,"change",function(){return c.updatePlayer(t,n,o)}),a=this.maintainPlaybackPosition(t,n,o),this.addEventListener("disconnect",function(){a.cancel(),i.cancel()}),e.next=14;break;case 10:return e.next=12,this.updateTimingObject(t,n);case 12:u=E(n,["seeked","play","pause","ratechange"],function(){return c.updateTimingObject(t,n)},"on","off"),this.addEventListener("disconnect",function(){return u.cancel()});case 14:case"end":return e.stop()}},e,this)})),function(e,t,n){return o.apply(this,arguments)})},{key:"updateTimingObject",value:(u=i(r().mark(function e(t,n){return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n.getCurrentTime();case 3:return e.t1=e.sent,e.next=6,n.getPaused();case 6:if(!e.sent){e.next=10;break}e.t2=0,e.next=13;break;case 10:return e.next=12,n.getPlaybackRate();case 12:e.t2=e.sent;case 13:e.t3=e.t2,e.t4={position:e.t1,velocity:e.t3},e.t0.update.call(e.t0,e.t4);case 16:case"end":return e.stop()}},e)})),function(e,t){return u.apply(this,arguments)})},{key:"updatePlayer",value:(h=i(r().mark(function e(t,n,o){var a,u,c;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=(a=t.query()).position,c=a.velocity,"number"==typeof u&&n.setCurrentTime(u),"number"!=typeof c){e.next=25;break}if(0!==c){e.next=11;break}return e.next=6,n.getPaused();case 6:if(e.t0=e.sent,!1!==e.t0){e.next=9;break}n.pause();case 9:e.next=25;break;case 11:if(!(c>0)){e.next=25;break}return e.next=14,n.getPaused();case 14:if(e.t1=e.sent,!0!==e.t1){e.next=19;break}return e.next=18,n.play().catch(function(){var e=i(r().mark(function e(t){return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NotAllowedError"===t.name&&o.autoPlayMuted)){e.next=5;break}return e.next=3,n.setMuted(!0);case 3:return e.next=5,n.play().catch(function(e){return console.error("Couldn't play the video from TimingSrcConnector. Error:",e)});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 18:this.updatePlayer(t,n,o);case 19:return e.next=21,n.getPlaybackRate();case 21:if(e.t2=e.sent,e.t3=c,!(e.t2!==e.t3)){e.next=25;break}n.setPlaybackRate(c);case 25:case"end":return e.stop()}},e,this)})),function(e,t,n){return h.apply(this,arguments)})},{key:"maintainPlaybackPosition",value:function(e,t,n){var o,a=this,u=n.allowedDrift,c=n.maxAllowedDrift,l=n.minCheckInterval,s=n.maxRateAdjustment,f=n.maxTimeToCatchUp,d=(o=i(r().mark(function n(){var o,i,l,d,h;return r().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=0===e.query().velocity,n.t0){n.next=6;break}return n.next=4,t.getPaused();case 4:n.t1=n.sent,n.t0=!0===n.t1;case 6:if(!n.t0){n.next=8;break}return n.abrupt("return");case 8:return n.t2=e.query().position,n.next=11,t.getCurrentTime();case 11:if(n.t3=n.sent,i=Math.abs(o=n.t2-n.t3),a.log("Drift: ".concat(o)),!(i>c)){n.next=22;break}return n.next=18,a.adjustSpeed(t,0);case 18:t.setCurrentTime(e.query().position),a.log("Resync by currentTime"),n.next=29;break;case 22:if(!(i>u)){n.next=29;break}return h=(l=i/f)<(d=s)?(d-l)/2:d,n.next=28,a.adjustSpeed(t,h*Math.sign(o));case 28:a.log("Resync by playbackRate");case 29:case"end":return n.stop()}},n)})),function(){return o.apply(this,arguments)}),h=setInterval(function(){return d()},1e3*Math.min(f,Math.max(l,c)));return{cancel:function(){return clearInterval(h)}}}},{key:"log",value:function(e){var t;null===(t=this.logger)||void 0===t||t.call(this,"TimingSrcConnector: ".concat(e))}},{key:"waitForTOReadyState",value:function(e,t){return new Promise(function(n){!function r(){e.readyState===t?n():e.addEventListener("readystatechange",r,{once:!0})}()})}}]),y}(p(EventTarget)),V=new WeakMap,W=new WeakMap,D={},z=function(){var e;function t(e){var n,r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,t),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"undefined"!=typeof document&&"string"==typeof e&&(e=document.getElementById(e)),!((n=e)&&1===n.nodeType&&"nodeName"in n&&n.ownerDocument&&n.ownerDocument.defaultView))throw TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var i=e.querySelector("iframe");i&&(e=i)}if("IFRAME"===e.nodeName&&!b(e.getAttribute("src")||""))throw Error("The player element passed isn’t a Vimeo embed.");if(V.has(e))return V.get(e);this._window=e.ownerDocument.defaultView,this.element=e,this.origin="*";var u=new j(function(t,n){if(r._onMessage=function(e){if(b(e.origin)&&r.element.contentWindow===e.source){"*"===r.origin&&(r.origin=e.origin);var o=C(e.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=Error(o.data.message);i.name=o.data.name,n(i);return}var a=o&&"ready"===o.event,u=o&&"ping"===o.method;if(a||u){r.element.setAttribute("data-ready","true"),t();return}!function(e,t){t=C(t);var n,r=[];if(t.event)"error"===t.event&&S(e,t.data.method).forEach(function(n){var r=Error(t.data.message);r.name=t.data.name,n.reject(r),M(e,t.data.method,n)}),r=S(e,"event:".concat(t.event)),n=t.data;else if(t.method){var o=function(e,t){var n=S(e,t);if(n.length<1)return!1;var r=n.shift();return M(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach(function(t){try{if("function"==typeof t){t.call(e,n);return}t.resolve(n)}catch(e){}})}(r,o)}},r._window.addEventListener("message",r._onMessage),"IFRAME"!==r.element.nodeName){var i=L(e,o);R(k(i),i,e).then(function(t){var n,o,i=A(t,e);return r.element=i,r._originalElement=e,n=e,o=O.get(n),O.set(i,o),O.delete(n),V.set(r.element,r),t}).catch(n)}});if(W.set(this,u),V.set(this.element,this),"IFRAME"===this.element.nodeName&&F(this,"ping"),D.isEnabled){var c=function(){return D.exit()};this.fullscreenchangeHandler=function(){D.isFullscreen?_(r,"event:exitFullscreen",c):M(r,"event:exitFullscreen",c),r.ready().then(function(){F(r,"fullscreenchange",D.isFullscreen)})},D.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return c(t,[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new j(function(r,o){return t.ready().then(function(){_(t,e,{resolve:r,reject:o}),F(t,e,n)}).catch(o)})}},{key:"get",value:function(e){var t=this;return new j(function(n,r){return e=g(e,"get"),t.ready().then(function(){_(t,e,{resolve:n,reject:r}),F(t,e)}).catch(r)})}},{key:"set",value:function(e,t){var n=this;return new j(function(r,o){if(e=g(e,"set"),null==t)throw TypeError("There must be a value to set.");return n.ready().then(function(){_(n,e,{resolve:r,reject:o}),F(n,e,t)}).catch(o)})}},{key:"on",value:function(e,t){if(!e)throw TypeError("You must pass an event name.");if(!t)throw TypeError("You must pass a callback function.");if("function"!=typeof t)throw TypeError("The callback must be a function.");0===S(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),_(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw TypeError("The callback must be a function.");M(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=W.get(this)||new j(function(e,t){t(Error("Unknown player. Probably unloaded."))});return j.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return D.isEnabled?D.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return D.isEnabled?D.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return D.isEnabled?j.resolve(D.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new j(function(t){if(W.delete(e),V.delete(e.element),e._originalElement&&(V.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),D.isEnabled&&D.off("fullscreenchange",e.fullscreenchangeHandler),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"getColors",value:function(){return j.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"setColors",value:function(e){if(!Array.isArray(e))return new j(function(e,t){return t(TypeError("Argument must be an array."))});var t=new j(function(e){return e(null)}),n=[e[0]?this.set("colorOne",e[0]):t,e[1]?this.set("colorTwo",e[1]):t,e[2]?this.set("colorThree",e[2]):t,e[3]?this.set("colorFour",e[3]):t];return j.all(n)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getRemotePlaybackAvailability",value:function(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}},{key:"setTimingSrc",value:(e=i(r().mark(function e(t,n){var o,i=this;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw TypeError("A Timing Object must be provided.");case 2:return e.next=4,this.ready();case 4:return o=new q(this,t,n),F(this,"notifyTimingObjectConnect"),o.addEventListener("disconnect",function(){return F(i,"notifyTimingObjectDisconnect")}),e.abrupt("return",o);case 8:case"end":return e.stop()}},e,this)})),function(t,n){return e.apply(this,arguments)})}]),t}();m||(D=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise(function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)})},exit:function(){return new Promise(function(t,r){if(!n.isFullscreen){t();return}var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)})},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return!!document[e.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return!!document[e.fullscreenEnabled]}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=L(e),r=k(t);R(r,t,e).then(function(t){return A(t,e)}).catch(n)}catch(e){n(e)}})}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(t){if(b(t.origin)&&t.data&&"spacechange"===t.data.event){for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",function(t){if(b(t.origin)){var n=C(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;w(i.src)&&a&&new z(i).callMethod("appendVideoMetadata",window.location.href)}}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))};window.addEventListener("message",function(n){if(b(n.origin)){var r=C(n.data);if(r&&"ready"===r.event)for(var o=e.querySelectorAll("iframe"),i=0;i<o.length;i++)!function(){var e=o[i],r=e.contentWindow===n.source;if(w(e.src)&&r){var a=new z(e);a.getVideoId().then(function(e){var t=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);if(t&&t[1]){var n=decodeURI(t[1]);a.setCurrentTime(n)}}).catch(t)}}()}})}}());var U={},G="Expected a function",H=0/0,Y=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,B=/^0o[0-7]+$/i,J=parseInt,X="object"==typeof e&&e&&e.Object===Object&&e,K="object"==typeof self&&self&&self.Object===Object&&self,Z=X||K||Function("return this")(),ee=Object.prototype.toString,et=Math.max,en=Math.min,er=function(){return Z.Date.now()};function eo(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ei(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==ee.call(t))return H;if(eo(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=eo(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Y,"");var r=Q.test(e);return r||B.test(e)?J(e.slice(2),r?2:8):$.test(e)?H:+e}U=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw TypeError(G);return eo(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),function(e,t,n){var r,o,i,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw TypeError(G);function h(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function p(e){var n=e-c,r=e-l;return void 0===c||n>=t||n<0||f&&r>=i}function v(){var e,n,r,o=er();if(p(o))return y(o);u=setTimeout(v,(e=o-c,n=o-l,r=t-e,f?en(r,i-n):r))}function y(e){return(u=void 0,d&&r)?h(e):(r=o=void 0,a)}function m(){var e,n=er(),i=p(n);if(r=arguments,o=this,c=n,i){if(void 0===u)return l=e=c,u=setTimeout(v,t),s?h(e):a;if(f)return u=setTimeout(v,t),h(c)}return void 0===u&&(u=setTimeout(v,t)),a}return t=ei(t)||0,eo(n)&&(s=!!n.leading,i=(f="maxWait"in n)?et(ei(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},m.flush=function(){return void 0===u?a:y(er())},m}(e,t,{leading:r,maxWait:t,trailing:o})};const ea=document.querySelector("#vimeo-player"),eu=new z(ea);eu.on("timeupdate",(function(e){return e&&e.__esModule?e.default:e})(U)(function(e){localStorage.setItem("videoplayer-current-time",e.seconds)},1e3));const ec=localStorage.getItem("videoplayer-current-time")||0;eu.setCurrentTime(ec);
//# sourceMappingURL=02-video.4a72e823.js.map
