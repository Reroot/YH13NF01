(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"214P":function(t,e,n){"use strict";n.d(e,"q",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"o",(function(){return u})),n.d(e,"n",(function(){return c})),n.d(e,"r",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"j",(function(){return p})),n.d(e,"i",(function(){return m})),n.d(e,"f",(function(){return h})),n.d(e,"t",(function(){return v})),n.d(e,"l",(function(){return E})),n.d(e,"m",(function(){return b})),n.d(e,"u",(function(){return g})),n.d(e,"p",(function(){return y})),n.d(e,"s",(function(){return N})),n.d(e,"g",(function(){return S})),n.d(e,"a",(function(){return O}));n("DW2E");var r={time:750,align:{top:0}},i={className:"ui-btn-line-primary"},a={className:"confirm-button ui-btn-line"},s={TAB_TEST_OUTPUT:"tab_test_output",TAB_TEST_INPUT:"tab_test_input",TAB_NONE:"tab_none"},o={CUSTOM:"custom",ALL:"all"},u=100,c=10,l=["pre","code","samp","kbd"],d="focus",f="blur",p="copy",m="context",h=[p,"cut","paste"],v=3,E={TAB_INDEX:{html:0,css:1,javascript:2},TAB_LIST:["question.design.html","question.design.css","question.design.js"],LANGUAGES:["html","css","javascript"],FILE_EXTENSIONS:{html:"html",css:"css",javascript:"js"}},b=500,g=100,y=3e3,N={MIN_TEXT_FIELD_LENGTH:20,MIN_TEXT_OVERFLOW:5,BLANK_SPACE_REGEX:/\{\s*blank\s*\}/gim},S={COUNTDOWN:"test:countdown"},O=Object.freeze(["php","swift","csharp"])},"7t3P":function(t,e,n){"use strict";n.r(e);n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("pVnL"),i=n.n(r),a=(n("2Spj"),n("bWfx"),n("V+eJ"),n("lwsE")),s=n.n(a),o=n("W8MJ"),u=n.n(o),c=n("a1gu"),l=n.n(c),d=n("Nsbk"),f=n.n(d),p=n("PJYZ"),m=n.n(p),h=n("7W2i"),v=n.n(h),E=n("lSNA"),b=n.n(E),g=n("cDcd"),y=n.n(g),N=n("GEYT"),S=n.n(N),O=n("sEfC"),_=n.n(O),T=n("OEX3"),w=(n("f3/d"),n("a1Th"),n("h7Nl"),n("o0o1")),q=n.n(w),I=(n("VRzm"),n("ls82"),n("yXPU")),P=n.n(I),k=n("KYPV"),C=n("TSYQ"),D=n.n(C),L=n("9kay"),R=n("qs1k"),A=n("3L6z"),j=n("HfZf"),V=n("hCwR"),U=n("VZjc"),x=n("bSd7"),M=n("ADy/"),Q=n("nAXo"),W=n("viIQ");n("nnL2");function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(n,!0).forEach((function(e){b()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var J,B={status:M.b.NONE,showStatus:!1},X=function(t){function e(t){var n;s()(this,e),n=l()(this,f()(e).call(this,t)),b()(m()(n),"timer",null),b()(m()(n),"state",F({},B)),b()(m()(n),"RESET_VALUE",void 0),b()(m()(n),"onSuccess",n.setStatus.bind(m()(n),M.b.SUCCESS,!1)),b()(m()(n),"onError",n.setStatus.bind(m()(n),M.b.ERROR)),b()(m()(n),"handleClear",function(){var t=P()(q.a.mark((function t(e,r){var i;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.props.questionData.uniqueId,n.setStatus(M.b.CLEARING),e(i,n.RESET_VALUE),t.next=5,Promise.resolve();case 5:return t.abrupt("return",r());case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),b()(m()(n),"handleSubmit",(function(t){var e=n.props,r=e.questionData,i=r.uniqueId,a=r.type;return(0,e.saveAnswer)({qid:i,qtype:a,answer:Object(W.l)(t,{questionType:a,questionId:i})},n.onSuccess,n.onError)}));var r=n.props,i=r.questionData.type,a=r.t;return n.RESET_VALUE=x.e[i],J=Object(M.c)(a),n}return v()(e,t),u()(e,[{key:"componentDidUpdate",value:function(t){t.questionData.uniqueId!==this.props.questionData.uniqueId&&(this.clearTimer(),this.setState(F({},B)))}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"mapPropsToValues",value:function(t){var e=t.questionData,n=t.submissionData,r=n?n.answer:this.RESET_VALUE;if(e.type===x.b.MULTIPLE_MCQ&&"string"==typeof r)try{r=JSON.parse(r)}catch(t){r=this.RESET_VALUE}return b()({},e.uniqueId,r)}},{key:"getStatus",value:function(){var t=this.state.status;return F({className:t},J[t])}},{key:"setStatus",value:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!1===n?this.setState({status:t},(function(){e.clearTimer(),e.timer=setTimeout((function(){e.setState({status:M.b.NONE,showStatus:n})}),2e3)})):(this.clearTimer(),this.setState({showStatus:n,status:t}))}},{key:"clearTimer",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"shouldDisableClearSelection",value:function(t,e,n){if(n)return!0;switch(e){case x.b.MCQ:return t===this.RESET_VALUE;case x.b.MULTIPLE_MCQ:return!(!t||0!==t.length);default:return!1}}},{key:"renderStatus",value:function(){var t=this.state.showStatus,e=this.getStatus(),n=e.className,r=e.message,i=e.icon;return y.a.createElement("div",{className:D()("solution__status-message","solution__status-message--".concat(n),{"solution__status-message--hidden":!t})},y.a.createElement("span",{className:"d-flex align-items-center solution__status-message__text"},y.a.createElement("i",{className:i}),r))}},{key:"renderOptionLabel",value:function(t,e){return e?y.a.createElement(j.a,{className:"candidate-rich-text",html:t}):t}},{key:"renderField",value:function(t,e){var n=this,r=this.props.questionData,a=r.uniqueId,s=r.type,o=r.options,u=r.richtext;if(!o)return null;var c={name:a,list:o.map((function(t,e){return{label:n.renderOptionLabel(t,Object(Q.a)(u)),value:(e+1).toString()}})),theme:"theme-m",disabled:e,onChange:function(){var e=P()(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setStatus(M.b.SAVING),e.next=3,Promise.resolve();case 3:return e.abrupt("return",t());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};return s===x.b.MCQ?y.a.createElement(R.a,i()({className:"ui-radio--bordered"},c)):s===x.b.MULTIPLE_MCQ?y.a.createElement(A.a,i()({componentClassName:"ui-checkbox--bordered"},c)):void 0}},{key:"render",value:function(){var t=this,e=this.props,n=e.questionData,r=e.questionIds,i=e.t,a=n.name,s=n.uniqueId,o=n.question,u=n.type,c=(r.indexOf(s)+1).toString();return y.a.createElement(g.Fragment,null,y.a.createElement(V.a,{number:c,title:a}),y.a.createElement(U.a,{instructionHTML:o,questionId:s}),y.a.createElement(k.c,{enableReinitialize:!0,initialValues:this.mapPropsToValues(this.props),mapPropsToValues:this.mapPropsToValues,onSubmit:this.handleSubmit},(function(e){var n=e.values,r=e.isSubmitting,a=e.setFieldValue,o=e.submitForm;return y.a.createElement(k.b,null,y.a.createElement("div",{className:"solution solution--mcq"},y.a.createElement("section",{className:"solution__heading"},y.a.createElement("div",{className:"solution__directive"},y.a.createElement(L.b,{i18nKey:"question.mcq.pick_option",count:u===x.b.MULTIPLE_MCQ?2:1,t:i},"Pick ",y.a.createElement("strong",null,"ONE")," option"))),y.a.createElement("section",{className:"solution__body"},y.a.createElement("div",{className:D()("d-flex solution__options-list",{disabled:r})},t.renderField(o,r)),y.a.createElement(T.f,{type:"button",className:"solution__clear-selection",disabled:t.shouldDisableClearSelection(n[s],u,r),onClick:t.handleClear.bind(t,a,o)},i("actions.clear_selection")),t.renderStatus())))})))}}]),e}(g.PureComponent),H=n("jNdJ"),K=n("QgMK"),Z=n("214P");n("ASRN");function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var Y={rootMargin:"0% 0% -60%",threshold:.75},$=function(t){function e(t){var n;return s()(this,e),n=l()(this,f()(e).call(this,t)),b()(m()(n),"questionRefs",void 0),b()(m()(n),"scrollWrapper",void 0),b()(m()(n),"scrolling",void 0),b()(m()(n),"questionId",void 0),b()(m()(n),"updateUrl",_()(n.props.navigateToPath,500)),b()(m()(n),"handleNavigateToNextPath",(function(){(0,n.props.navigateToPath)()})),n.questionRefs={},n.scrollWrapper=y.a.createRef(),n}return v()(e,t),u()(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.groupData,n=t.questionData.uniqueId;e.indexOf(n)<1||this.scrollQuestionIntoView(n)}},{key:"componentDidUpdate",value:function(){this.scrolling=!1;var t=this.props.questionData.uniqueId;t!==this.questionId&&this.scrollQuestionIntoView(t)}},{key:"getQuestionRef",value:function(t){var e=this.questionRefs;return e[t]||(e[t]=y.a.createRef()),e[t]}},{key:"handleIntersection",value:function(t,e){if(this.questionId=t,!this.scrolling&&e.isIntersecting){var n=this.props.testId;this.updateUrl(Object(K.b)("/".concat(n,"/questions/").concat(t)))}}},{key:"scrollQuestionIntoView",value:function(t){var e=this;if(this.questionRefs[t]){var n=this.questionRefs[t].current;if(n){var r=this.props.scrollElementIntoView;this.scrolling=!0,r(n,Z.q,(function(t){"complete"===t&&(e.scrolling=!1)}))}}}},{key:"renderMCQs",value:function(){var t=this,e=this.props,n=e.questionsData,r=e.submissions,a=void 0===r?{}:r,s=e.groupData,o=e.saveAnswer,u=e.navigateToPath,c=e.questionIds,l=e.attemptId,d=e.t,f=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(n,!0).forEach((function(e){b()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({root:this.scrollWrapper.current},Y);return s.map((function(e){return y.a.createElement("div",{key:e,ref:t.getQuestionRef(e)},y.a.createElement(H.a,i()({onChange:t.handleIntersection.bind(t,e)},f),y.a.createElement("div",{className:"grouped-mcq__hook"})),y.a.createElement(X,{submissionData:a[e]||null,questionData:n[e],saveAnswer:o,navigateToPath:u,questionIds:c,attemptId:l,t:d}))}))}},{key:"render",value:function(){var t=this.props.t;return y.a.createElement("div",{ref:this.scrollWrapper,className:"grouped-mcq__scroll-window"},this.renderMCQs(),y.a.createElement("section",{className:"grouped-mcq__actions"},y.a.createElement(T.c,{type:"button",onClick:this.handleNavigateToNextPath},t("actions.continue"))))}}]),e}(g.PureComponent);b()($,"defaultProps",{scrollElementIntoView:S.a});e.default=$},"ADy/":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o}));var r=n("lSNA"),i=n.n(r),a={LOADING:"loading",LOADED:"loaded",ERROR:"error"},s={NONE:"none",SAVING:"saving",CLEARING:"clearing",SUCCESS:"success",ERROR:"error"};function o(t){var e;return e={},i()(e,s.NONE,{message:"",icon:""}),i()(e,s.SAVING,{message:t("actions.".concat(s.SAVING)),icon:"ui-icon-circle"}),i()(e,s.CLEARING,{message:t("actions.".concat(s.CLEARING)),icon:"ui-icon-circle"}),i()(e,s.SUCCESS,{message:t("actions.".concat(s.SUCCESS)),icon:"ui-icon-check-circle"}),i()(e,s.ERROR,{message:t("actions.".concat(s.ERROR)),icon:"ui-icon-cross-circle"}),e}},ASRN:function(t,e,n){},EwJO:function(t,e,n){},QIyF:function(t,e,n){var r=n("Kz5y");t.exports=function(){return r.Date.now()}},VZjc:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("cDcd"),i=n.n(r),a=n("eEux");function s(t){var e=t.instructionHTML,n=t.questionId;return i.a.createElement("section",{className:"question-view__instruction"},i.a.createElement(a.a,{id:"".concat(n,"-instruction"),className:"candidate-rich-text",html:e}))}},eEux:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("lwsE"),i=n.n(r),a=n("W8MJ"),s=n.n(a),o=n("a1gu"),u=n.n(o),c=n("Nsbk"),l=n.n(c),d=n("PJYZ"),f=n.n(d),p=n("7W2i"),m=n.n(p),h=n("lSNA"),v=n.n(h),E=n("cDcd"),b=n.n(E),g=n("HfZf"),y=function(t){function e(){var t,n;i()(this,e);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=u()(this,(t=l()(e)).call.apply(t,[this].concat(a))),v()(f()(n),"handleLinkClick",(function(t){var e=n.props.onClick;e&&e(t);var r=t.target;"a"===r.tagName.toLowerCase()&&(t.preventDefault(),window.open(r.href,"_blank"))})),n}return m()(e,t),s()(e,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.html,r=t.className,i={onClick:this.handleLinkClick};r&&(i.className=r);var a={html:n};return e&&(a.id=e),b.a.createElement("div",i,b.a.createElement(g.a,a))}}]),e}(E.PureComponent);v()(y,"defaultProps",{className:""})},hCwR:function(t,e,n){"use strict";var r=n("cDcd"),i=n.n(r);n("EwJO");e.a=function(t){var e=t.number,n=t.title;return i.a.createElement("section",null,i.a.createElement("h1",{className:"question-view__title"},"".concat(e,". ").concat(n)))}},nnL2:function(t,e,n){},sEfC:function(t,e,n){var r=n("GoyQ"),i=n("QIyF"),a=n("tLB3"),s="Expected a function",o=Math.max,u=Math.min;t.exports=function(t,e,n){var c,l,d,f,p,m,h=0,v=!1,E=!1,b=!0;if("function"!=typeof t)throw new TypeError(s);function g(e){var n=c,r=l;return c=l=void 0,h=e,f=t.apply(r,n)}function y(t){var n=t-m;return void 0===m||n>=e||n<0||E&&t-h>=d}function N(){var t=i();if(y(t))return S(t);p=setTimeout(N,function(t){var n=e-(t-m);return E?u(n,d-(t-h)):n}(t))}function S(t){return p=void 0,b&&c?g(t):(c=l=void 0,f)}function O(){var t=i(),n=y(t);if(c=arguments,l=this,m=t,n){if(void 0===p)return function(t){return h=t,p=setTimeout(N,e),v?g(t):f}(m);if(E)return clearTimeout(p),p=setTimeout(N,e),g(m)}return void 0===p&&(p=setTimeout(N,e)),f}return e=a(e)||0,r(n)&&(v=!!n.leading,d=(E="maxWait"in n)?o(a(n.maxWait)||0,e):d,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==p&&clearTimeout(p),h=0,c=m=l=p=void 0},O.flush=function(){return void 0===p?f:S(i())},O}}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/mcq_question_view-02924235.js.map