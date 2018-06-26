!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.loggout=t():e.loggout=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n={level:e.LEVELS.error,prefix:function(t){var n=Date.now();switch(t){case e.LEVELS.silly:return"SILLY - "+n+":";case e.LEVELS.debug:return"DEBUG - "+n+":";case e.LEVELS.verbose:return"LOG - "+n+":";case e.LEVELS.info:return"INFO - "+n+":";case e.LEVELS.warn:return"WARN - "+n+":";case e.LEVELS.error:return"ERROR - "+n+":";default:return""}}};this.opts=r({},n,t),this.timer=new i.default(function(){}),this.LEVEL_NAMES={10:"silly",20:"debug",30:"verbose",40:"info",50:"warn",60:"error"}}return o(e,[{key:"isLoggable",value:function(e){return this.level<=e}},{key:"write",value:function(e,t){if(!this.isLoggable(e))return!1;var n,r,o=this.LEVEL_NAMES[e],i=this.prefix(e);console[o]?(n=console)[o].apply(n,[i].concat(u(t))):(r=console).log.apply(r,[i].concat(u(t)));return!0}},{key:"silly",value:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.write(e.LEVELS.silly,n)}},{key:"debug",value:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.write(e.LEVELS.debug,n)}},{key:"verbose",value:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.write(e.LEVELS.verbose,n)}},{key:"info",value:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.write(e.LEVELS.info,n)}},{key:"warn",value:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.write(e.LEVELS.warn,n)}},{key:"error",value:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.write(e.LEVELS.error,n)}},{key:"time",value:function(e,t){return this.timer.meth=e,this.timer.message=t,this.timer.exec(),!0}},{key:"level",get:function(){return this.opts.level},set:function(e){this.opts.level=e}},{key:"prefix",get:function(){return this.opts.prefix}}],[{key:"factory",value:function(t){return new e(t)}},{key:"LEVELS",get:function(){return{silly:10,debug:20,verbose:30,info:40,warn:50,error:60}}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.meth=t,this.message=n,this.startTime=null,this.endTime=null}return r(e,[{key:"start",value:function(){return console.time?console.time(this.msg):this.startTime=(new Date).getTime(),!0}},{key:"end",value:function(){return console.timeEnd?console.timeEnd(this.msg):(this.endTime=(new Date).getTime(),console.log(this.msg,this.endTime-this.startTime)),!0}},{key:"exec",value:function(){return this.start(),this.meth(),this.end(),!0}},{key:"msg",get:function(){return this.message||this.meth.name||"TIMER"}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$html=document.querySelector(".js-test__"+t),this.onClick=n}return r(e,[{key:"onClick",value:function(){}},{key:"init",value:function(){this.$html.addEventListener("click",this.onClick)}}],[{key:"factory",value:function(t,n){return new e(t,n).init()}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(0)),i=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loggout=t}return r(e,[{key:"init",value:function(){var e=this;i.default.factory("silly",function(){e.loggout.silly("test silly")}),i.default.factory("debug",function(){e.loggout.debug("test debug")}),i.default.factory("info",function(){e.loggout.info("test info")}),i.default.factory("verbose",function(){e.loggout.verbose("test verbose")}),i.default.factory("warn",function(){e.loggout.warn("test warn","warny")}),i.default.factory("error",function(){e.loggout.error("test error")}),i.default.factory("timer",function(){e.loggout.time(function(){for(var t=0,n=1;n<=1e6;n+=1)t+=n;e.loggout.verbose(t)})}),i.default.factory("prefix",function(){new o.default({level:o.default.LEVELS.debug,prefix:function(e){return"LOGG("+e+"):"}}).error("test prefix")})}}]),e}();t.default=a},function(e,t,n){"use strict";var r=i(n(0)),o=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}!function(e,t){"loading"===e.readyState?e.addEventListener("DOMContentLoaded",t):t()}(document,function(){var e=r.default.factory({level:r.default.LEVELS.debug});new o.default(e).init()})}])});