(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"0JVZ":function(e,n,t){},FDph:function(e,n,t){t("Z2Ku"),e.exports=t("g3g5").Array.includes},TP7S:function(e,n){e.exports=function(e){return void 0===e}},dvg7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t("cDcd"),u=a(i),c=a(t("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handle=function(e){if("touchend"===e.type&&(t.isTouch=!0),"click"!==e.type||!t.isTouch){var n=t.props.onClickOutside,r=t.container;r&&!r.contains(e.target)&&n(e)}},t.getContainer=t.getContainer.bind(t),t.isTouch=!1,t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"getContainer",value:function(e){this.container=e}},{key:"render",value:function(){var e=this.props,n=e.children,t=(e.onClickOutside,function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["children","onClickOutside"]));return u.default.createElement("div",r({},t,{ref:this.getContainer}),n)}},{key:"componentDidMount",value:function(){document.addEventListener("touchend",this.handle,!0),document.addEventListener("click",this.handle,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("touchend",this.handle,!0),document.removeEventListener("click",this.handle,!0)}}]),n}(i.Component);s.propTypes={onClickOutside:c.default.func.isRequired},n.default=s},mGWK:function(e,n,t){"use strict";var r=t("XKFU"),o=t("aCFj"),i=t("RYi7"),u=t("ne8i"),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(a||!t("LyE8")(c)),"Array",{lastIndexOf:function(e){if(a)return c.apply(this,arguments)||0;var n=o(this),t=u(n.length),r=t-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=t+r);r>=0;r--)if(r in n&&n[r]===e)return r||0;return-1}})},sUjY:function(e,n,t){t("L9s1"),e.exports=t("g3g5").String.includes}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/hackerrank_r_vendors~test_case_ui-2bab64ff.js.map