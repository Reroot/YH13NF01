(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0e0P":function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var o=n("lwsE"),r=n.n(o),i=n("W8MJ"),a=n.n(i),s=n("a1gu"),u=n.n(s),c=n("Nsbk"),l=n.n(c),f=n("PJYZ"),p=n.n(f),d=n("7W2i"),v=n.n(d),h=n("pVnL"),m=n.n(h),y=n("lSNA"),g=n.n(y),w=n("cDcd"),b=n.n(w),D=n("eOGF");function E(t){return function(e){function n(){var t,e;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=u()(this,(t=l()(n)).call.apply(t,[this].concat(i))),g()(p()(e),"state",{isAppMounted:!!Object(D.i)()}),e}return v()(n,e),a()(n,[{key:"componentDidMount",value:function(){this.setAppMounted()}},{key:"setAppMounted",value:function(){this.state.isAppMounted||this.setState({isAppMounted:!0})}},{key:"render",value:function(){var e=this.props,n=this.state.isAppMounted;return b.a.createElement(t,m()({},e,{isAppMounted:n}))}}]),n}(b.a.Component)}},"214P":function(t,e,n){"use strict";n.d(e,"q",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"o",(function(){return u})),n.d(e,"n",(function(){return c})),n.d(e,"r",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"j",(function(){return d})),n.d(e,"i",(function(){return v})),n.d(e,"f",(function(){return h})),n.d(e,"t",(function(){return m})),n.d(e,"l",(function(){return y})),n.d(e,"m",(function(){return g})),n.d(e,"u",(function(){return w})),n.d(e,"p",(function(){return b})),n.d(e,"s",(function(){return D})),n.d(e,"g",(function(){return E})),n.d(e,"a",(function(){return T}));n("DW2E");var o={time:750,align:{top:0}},r={className:"ui-btn-line-primary"},i={className:"confirm-button ui-btn-line"},a={TAB_TEST_OUTPUT:"tab_test_output",TAB_TEST_INPUT:"tab_test_input",TAB_NONE:"tab_none"},s={CUSTOM:"custom",ALL:"all"},u=100,c=10,l=["pre","code","samp","kbd"],f="focus",p="blur",d="copy",v="context",h=[d,"cut","paste"],m=3,y={TAB_INDEX:{html:0,css:1,javascript:2},TAB_LIST:["question.design.html","question.design.css","question.design.js"],LANGUAGES:["html","css","javascript"],FILE_EXTENSIONS:{html:"html",css:"css",javascript:"js"}},g=500,w=100,b=3e3,D={MIN_TEXT_FIELD_LENGTH:20,MIN_TEXT_OVERFLOW:5,BLANK_SPACE_REGEX:/\{\s*blank\s*\}/gim},E={COUNTDOWN:"test:countdown"},T=Object.freeze(["php","swift","csharp"])},"6mS8":function(t,e,n){},WfZi:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var o=n("cDcd"),r=Object(o.createContext)(),i=r.Provider,a=r.Consumer},ZY3w:function(t,e,n){},aFCz:function(t,e,n){"use strict";n.r(e);n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var o=n("pVnL"),r=n.n(o),i=(n("V+eJ"),n("lwsE")),a=n.n(i),s=n("W8MJ"),u=n.n(s),c=n("a1gu"),l=n.n(c),f=n("Nsbk"),p=n.n(f),d=n("PJYZ"),v=n.n(d),h=n("7W2i"),m=n.n(h),y=n("lSNA"),g=n.n(y),w=n("cDcd"),b=n.n(w),D=n("/MKj"),E=n("eHHv"),T=n("9kay"),C=n("f0wr"),A=n("EfbJ"),L=n("WfZi"),k=n("vN+2"),O=n.n(k),N=n("MGin"),P=n("TSYQ"),_=n.n(P),S=n("ovno"),q=n("214P"),x=function(t){function e(t){var n;return a()(this,e),n=l()(this,p()(e).call(this,t)),g()(v()(n),"state",void 0),g()(v()(n),"forceLeave",void 0),g()(v()(n),"nextRoute",void 0),g()(v()(n),"unregisterRouterLeaveHook",void 0),g()(v()(n),"onBeforeUnload",(function(t){if(!n.forceLeave&&n.props.isDirty()){var e=n.props.confirmationMessage;return t.returnValue=e,e}})),g()(v()(n),"routerWillLeave",(function(t){return n.forceLeave?(n.forceLeave=!1,!0):!(!t.state||!t.state.skipRouteLeaveHook)||(!n.props.isDirty()||(n.nextRoute=t,n.setState({showDialog:!0}),!1))})),g()(v()(n),"closeDialog",(function(){n.setState({showDialog:!1})})),g()(v()(n),"onNavigateAway",(function(){var t=n.props.router;n.forceLeave=!0,t.push(n.nextRoute||window.location)})),g()(v()(n),"closeAndNavigateAway",(function(){(0,n.props.onNavigateAway)(),n.closeDialog(),n.onNavigateAway()})),g()(v()(n),"onStay",(function(){(0,n.props.onStay)(),n.closeDialog()})),n.state={showDialog:!1},n.forceLeave=!1,n.nextRoute=null,n}return m()(e,t),u()(e,[{key:"componentDidMount",value:function(){var t=this.props.router,e=t.routes,n=t.setRouteLeaveHook,o=e.slice(-1)[0];this.unregisterRouterLeaveHook=n(o,this.routerWillLeave),window.addEventListener("beforeunload",this.onBeforeUnload)}},{key:"componentWillUnmount",value:function(){this.unregisterRouterLeaveHook&&this.unregisterRouterLeaveHook(),window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"renderNavigationDialog",value:function(){var t=this.props,e=t.confirmationMessage,n=t.title,o=t.className,r=t.stayText,i=t.confirmText;return b.a.createElement(S.a,{key:"route-capture-alert",open:!0,size:"small",title:n,closeEnabled:!0,overlayClose:!0,theme:"theme-m",modalClass:_()("confirm-dialog",o),cancelText:r,confirmText:i,onClose:this.closeDialog,onCancel:this.onStay,onConfirm:this.closeAndNavigateAway,cancelBtnProps:q.b,confirmBtnProps:q.e},b.a.createElement("div",null,e))}},{key:"render",value:function(){var t=this.state.showDialog;return b.a.createElement(w.Fragment,null,this.props.children,t&&this.renderNavigationDialog())}}]),e}(w.Component);g()(x,"defaultProps",{onStay:O.a,onNavigateAway:O.a});var j=Object(N.withRouter)(x),I=n("ayy4"),M=(n("Z2Ku"),n("L9s1"),n("2Spj"),n("dZ+Y"),n("cDf5")),U=n.n(M),B=n("RIqP"),Q=n.n(B);function R(t){if(!t)return null;if(t.hasChildNodes())return t.firstChild;for(;null!==t.nextSibling;)t=t.parentNode;return t.nextSibling}function W(){if(window.getSelection){var t=window.getSelection();if(!t.isCollapsed)return function(t){var e=t.startContainer,n=t.endContainer;if(e===n)return[e];for(var o=[];e&&e!==n;)e=R(e),o.push(e);for(e=t.startContainer;e&&e!==t.commonAncestorContainer;)o.unshift(e),e=e.parentNode;return o}(t.getRangeAt(0))}return[]}var G=10;var H=n("6454"),F=n("bSd7"),J=n("sSFG"),V=n("QgMK"),Y=n("viIQ"),Z=n("QfwD");n("6mS8");function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}n.d(e,"mapStateToProps",(function(){return $})),n.d(e,"mapDispatchToProps",(function(){return tt})),n.d(e,"PureBaseQuestion",(function(){return z}));var X,z=function(t){function e(t){var n;return a()(this,e),n=l()(this,p()(e).call(this,t)),g()(v()(n),"answerDirty",!1),g()(v()(n),"toastElement",void 0),g()(v()(n),"currentTimeLeft",void 0),g()(v()(n),"setAnswerToPing",(function(t){(0,n.props.lifecycleContext.setQuestionData)({type:n.getQuestionData().type,answer:t})})),g()(v()(n),"handleCountdown",(function(t){var e=t.currentTimeLeft;n.currentTimeLeft=e})),g()(v()(n),"navigateToPath",(function(t){var e=n.props.appUtil.goto;return e("string"==typeof t?t:n.getNextPath())})),g()(v()(n),"saveAnswer",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.onSuccess,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.onError,r=n.props,i=r.saveAnswer,a=r.attemptId;return i(a,t).then((function(){n.answerDirty=!1,e.apply(void 0,arguments)}),o)})),g()(v()(n),"onSuccess",(function(t){var e,o=n.props.t,r=t.error;if(r)return e="string"==typeof r?r:o("save_answer_error"),void n.showErrorToast(e);n.navigateToPath()})),g()(v()(n),"onError",(function(t){var e=n.props.t;n.showErrorToast(e("save_answer_error")),console.error(t)})),g()(v()(n),"showToast",(function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(n,!0).forEach((function(e){g()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({type:"basic",duration:J.c},t);n.toastElement?n.toastElement.update(e):(n.toastElement=new C.a(e),n.toastElement.show())})),g()(v()(n),"showErrorToast",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J.d;n.showToast({type:"error_strong",message:t,duration:e})})),g()(v()(n),"markAnswerDirty",(function(){n.answerDirty=!0})),g()(v()(n),"resetDirty",(function(){n.answerDirty=!1})),g()(v()(n),"isAnswerDirty",(function(){var t=n.props,e=t.attemptDone,o=t.attemptTimeLeft;return n.answerDirty&&!Object(Z.h)(e,o)})),n.currentTimeLeft=t.sections.currentSectionTimeLeft,n}return m()(e,t),u()(e,[{key:"componentDidMount",value:function(){Z.c.on(q.g.COUNTDOWN,this.handleCountdown)}},{key:"componentDidUpdate",value:function(t){var e=t.appUtil.params.questionId,n=t.sections.currentSection,o=this.props,r=o.appUtil.params.questionId,i=o.sections.currentSection;r!==e&&this.resetAnswerData(),i!==n&&this.currentTimeLeft<=0&&(this.answerDirty=!1)}},{key:"componentWillUnmount",value:function(){this.resetAnswerData(),Z.c.off(q.g.COUNTDOWN,this.handleCountdown),this.toastElement&&this.toastElement.hide()}},{key:"resetAnswerData",value:function(){(0,this.props.lifecycleContext.setQuestionData)(null)}},{key:"getQuestionData",value:function(){var t=this.props,e=t.appUtil.params.questionId;return t.questionsData[e]}},{key:"getNextPath",value:function(){var t=this.props,e=t.appUtil.params.testId,n=t.questionIds,o=t.sections,r=o.currentSection,i=o.items,a=this.getQuestionData(),s=a.nextqid,u=void 0===s?null:s;if(!u){var c=n;-1!==r&&(c=i[r-1].questionList);var l=c.indexOf(a.uniqueId);-1!==l&&l!==n.length-1&&(u=c[l+1])}return u?Object(V.b)("/".concat(e,"/questions/").concat(u)):Object(V.b)("/".concat(e,"/questions"))}},{key:"renderQuestionComponent",value:function(){var t,e=this.props,n=e.appUtil.params,o=n.questionId,i=n.testId,a=e.sections,s=a.items,u=a.mcqGroups,c=e.questionsData,l=e.questionIds,f=e.submissions,p=void 0===f?{}:f,d=e.test,v=e.attemptId,h=e.t,m=e.CurrentQuestionComponent,y=this.getQuestionData();if(!m)return b.a.createElement("div",null,"This question type (".concat(y.type,") is not supported"));var g=l.indexOf(o)+1,w={markAnswerDirty:this.markAnswerDirty,navigateToPath:this.navigateToPath,saveAnswer:this.saveAnswer,submissionData:p[o],setAnswerToPing:this.setAnswerToPing,showToast:this.showToast,showErrorToast:this.showErrorToast,questionData:y,questionIds:l,questionId:o,questionNumber:g,attemptId:v,t:h},D=h("statements.navigate_anyway_answer_not_saved");switch(y.type){case F.b.MCQ:case F.b.MULTIPLE_MCQ:t={questionsData:c,submissions:p,groupData:Object(Y.a)({questionIds:l,questionId:o,mcqGroups:u,sections:s}),testId:i};break;case F.b.SUDORANK:t={testId:i};break;case F.b.CODING:case F.b.APPROX:case F.b.DATABASE:t={key:o,test:d,activityLogger:this.props.lifecycleContext.activityLogger};break;case F.b.FILE_UPLOAD:D=h("statements.navigate_anyway_file_not_uploaded");break;case F.b.SUBJECTIVE:case F.b.DIAGRAM:t={key:o,cancelLogger:this.props.lifecycleContext.cancelLogger,resetDirty:this.resetDirty};break;case F.b.FULLSTACK:t={key:o}}return b.a.createElement(j,{title:h("statements.unsaved_changes_title"),confirmationMessage:D,isDirty:this.isAnswerDirty,confirmText:h("actions.navigate_away"),stayText:h("actions.stay"),onNavigateAway:this.resetDirty},b.a.createElement(m,r()({},w,t)))}},{key:"render",value:function(){var t=this.props.handleContextMenu,e=this.getQuestionData();return e?b.a.createElement("div",{className:"question-view question-view--".concat(Object(Y.d)(e.type)),onContextMenu:t},this.renderQuestionComponent()):null}}]),e}(w.Component),$=function(t){var e=t.candidate,n=e.questions,o=n.ids,r=n.dataMap,i=n.submissions,a=e.attempt;return{questionsData:r,submissions:i,questionIds:o,attemptId:a.id,attemptTimeLeft:a.timeLeft,attemptDone:a.done,sections:e.sections,test:t.test}},tt=function(t){return{saveAnswer:function(e,n){return t(Object(H.saveAnswer)(e,n))}}};e.default=Object(E.a)(Object(D.connect)($,tt),Object(T.c)(["questionview","common"]),Object(I.a)("BaseQuestion should be used inside TestLifecycleConsumer",L.a,"lifecycleContext"),A.a,(X=[".question-view__title",".question-view__instruction"],function(t){return function(e){function n(t){var e;return a()(this,n),e=l()(this,p()(n).call(this,t)),g()(v()(e),"toast",void 0),g()(v()(e),"handleCopyEvent",void 0),g()(v()(e),"handleContextMenu",void 0),e.handleCopyEvent=e.handleDocumentEvent.bind(v()(e),!1),e.handleContextMenu=e.handleDocumentEvent.bind(v()(e),!0),e}return m()(n,e),u()(n,[{key:"componentDidMount",value:function(){var t=this;q.f.forEach((function(e){document.addEventListener(e,t.handleCopyEvent)}))}},{key:"componentWillUnmount",value:function(){var t=this;q.f.forEach((function(e){document.removeEventListener(e,t.handleCopyEvent)})),this.toast&&this.toast.hide()}},{key:"showToast",value:function(t){var e=this.props.t,n=t===q.j?e("copy_paste_disabled"):e("right_click_disabled"),o={type:"error_strong",message:b.a.createElement("strong",null,n),duration:G,placement:"topLeft"};this.toast?this.toast.update(o):(this.toast=new C.a(o),this.toast.show())}},{key:"cancelEvent",value:function(t,e){return t.preventDefault(),t.stopPropagation(),this.showToast(e),!1}},{key:"handleDocumentEvent",value:function(t,e){var n=this.props.enableContextMenu;if(!t||!n){if(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W;if(!t.length)return!1;var n=e(),o=n.length;if(!o)return!1;var r=[];if(t.forEach((function(t){var e=Array.prototype.slice.call(document.querySelectorAll(t));r.push.apply(r,Q()(e))})),!r.length)return!1;var i=function(t){var e=n[t];if(!r.some((function(t){return t.contains(e)})))return"continue";var i=e;e.nodeType===q.t&&(i=e.parentNode);var a=i.tagName.toLowerCase();return 1===o&&q.r.includes(a)?"break":{v:!0}};t:for(var a=0;a<o;a++){var s=i(a);switch(s){case"continue":continue;case"break":break t;default:if("object"===U()(s))return s.v}}return!1}(X))return this.cancelEvent(e,t?q.i:q.j);var o=e.target;if(t&&function(t,e){if(!t.length)return!1;for(var n=0;n<t.length;n++)if(e.closest(t[n]))return!0;return!1}(X,o)){var r=o.tagName.toLowerCase();if(!q.r.includes(r))return this.cancelEvent(e,q.i)}this.toast&&this.toast.hide()}}},{key:"render",value:function(){return b.a.createElement(t,r()({},this.props,{handleContextMenu:this.handleContextMenu}))}}]),n}(w.Component)}))(z)},ayy4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("lSNA"),r=n.n(o),i=n("eHHv");function a(t,e,n){return Object(i.b)(e,(function(e){if(!e)throw new Error(t);return r()({},n,e)}))}},ovno:function(t,e,n){"use strict";var o=n("pVnL"),r=n.n(o),i=n("QILm"),a=n.n(i),s=n("cDcd"),u=n("TSYQ"),c=n.n(u),l=n("O766"),f=n("OEX3");n("ZY3w");function p(t){var e=t.confirmText,n=t.cancelText,o=t.onConfirm,i=t.onCancel,u=t.inProgress,p=t.children,d=t.cancelBtnProps,v=t.confirmBtnProps,h=a()(t,["confirmText","cancelText","onConfirm","onCancel","inProgress","children","cancelBtnProps","confirmBtnProps"]),m="theme-m"===h.theme?"ui-btn-secondary":"ui-btn-default";return s.createElement(l.a,r()({modalClass:"confirm-dialog"},h),p,s.createElement("div",{className:"confirm-button-group"},n&&s.createElement(f.f,r()({className:c()("cancel-button",m),disabled:!!u,loading:"cancel"===u,onClick:i},d),n),e&&s.createElement(f.f,r()({className:"ui-btn-primary confirm-button",disabled:!!u,loading:!0===u||"confirm"===u},v,{onClick:o}),e)))}p.defaultProps={theme:"theme-m",confirmText:"Yes",cancelText:"No",cancelBtnProps:{},confirmBtnProps:{}},e.a=p}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/basequestion-69614f60.js.map