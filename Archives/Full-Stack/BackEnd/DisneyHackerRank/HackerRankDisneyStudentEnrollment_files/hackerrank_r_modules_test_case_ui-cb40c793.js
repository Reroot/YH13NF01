(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"19lX":function(e,t,a){},"2hSz":function(e,t,a){},"3N0A":function(e,t,a){"use strict";var n=a("lwsE"),s=a.n(n),r=a("W8MJ"),i=a.n(r),l=a("a1gu"),c=a.n(l),o=a("Nsbk"),u=a.n(o),d=a("PJYZ"),m=a.n(d),p=a("7W2i"),T=a.n(p),E=a("lSNA"),h=a.n(E),v=a("cDcd"),g=a("faye"),f=a.n(g),C=a("0e0P"),b=a("TXrv"),S=function(e){function t(e){var a;s()(this,t),a=c()(this,u()(t).call(this,e)),h()(m()(a),"node",void 0);var n=e.isAppMounted,r=e.target;return a.node=null,a.state={targetIsAvailable:n&&!!Object(b.b)(r)},a}return T()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.checkTargetAvailability()}},{key:"componentDidUpdate",value:function(){this.checkTargetAvailability()}},{key:"componentWillUnmount",value:function(){var e=this.node;e&&e.parentNode.removeChild(e)}},{key:"checkTargetAvailability",value:function(){var e=this.props.target;!this.state.targetIsAvailable&&Object(b.b)(e)&&this.setState({targetIsAvailable:!0})}},{key:"renderPortal",value:function(){var e=this.props,t=e.target,a=e.createContainer,n=e.children,s=Object(b.b)(t),r=s;return a&&((r=this.node)||((r=document.createElement("div")).setAttribute("class","portal-wrapper"),s.appendChild(r),this.node=r)),r?f.a.createPortal(n,r):0}},{key:"render",value:function(){return this.state.targetIsAvailable?this.renderPortal():null}}]),t}(v.Component);h()(S,"defaultProps",{target:"body",createContainer:!0}),t.a=Object(C.a)(S)},SnPP:function(e,t,a){},Ssa9:function(e,t,a){},TXrv:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return l}));a("91GP");var n=a("lSNA"),s=a.n(n);function r(e){return"string"==typeof e?document.querySelector(e):e}function i(e,t,a){var n="string"==typeof t?s()({},t,a):t;Object.assign(e.style,n)}function l(e){var t=document.body,a=document.documentElement,n=t.scrollTop||a.scrollTop,s=t.scrollLeft||a.scrollLeft,r=e.getBoundingClientRect();return{top:r.top+n,left:r.left+s}}},bXsG:function(e,t,a){},keBQ:function(e,t,a){"use strict";var n=a("QbLZ"),s=a.n(n),r=a("jo6Y"),i=a.n(r),l=a("cDcd"),c=a.n(l),o=a("TSYQ"),u=a.n(o);a("bXsG");function d(e){var t=e.value,a=e.shine,n=e.theme;return c.a.createElement("div",{className:"ui-progress-bar progress-bar ".concat(n)},c.a.createElement("div",{className:u()("progress-filler",{"inverted-shine":a}),style:{width:t+"%"}}))}d.defaultProps={shine:!1,value:0,theme:"theme-default"};var m,p,T,E=d,h=(a("KKXr"),a("Vd3H"),a("bWfx"),a("J4zp")),v=a.n(h),g=a("lSNA"),f=a.n(g),C=(a("a1Th"),a("h7Nl"),a("Btvt"),a("Z2Ku"),a("L9s1"),a("Wwog")),b=a("TP7S"),S=a.n(b),k=a("6qam"),_=a.n(k),N=[62,152,24,30],y={STDIN:"stdIn",STDOUT:"stdOut",EXPECTED_OUTPUT:"expectedOutput",COMPILER_MESSAGE:"compilerMessage",CUSTOM_CHECKER_MESSAGE:"customCheckerMessage",STDOUT_DEBUG:"stdOutDebug",STDERR:"stdErr",LEXICAL_PENALTY:"lexicalPenalty",SCORE:"score"},M=(m={},f()(m,y.STDIN,"stdin"),f()(m,y.STDOUT,"stdout"),f()(m,y.EXPECTED_OUTPUT,"expected-output"),f()(m,y.COMPILER_MESSAGE,"compiler-message"),f()(m,y.CUSTOM_CHECKER_MESSAGE,"custom-checker-message"),f()(m,y.STDOUT_DEBUG,"debug-output"),f()(m,y.STDERR,"stderr"),f()(m,y.LEXICAL_PENALTY,"lexical-penalty"),f()(m,y.SCORE,"score"),m),D=(p={},f()(p,y.STDIN,"Input (stdin)"),f()(p,y.STDOUT,"Your Output (stdout)"),f()(p,y.EXPECTED_OUTPUT,"Expected Output"),f()(p,y.COMPILER_MESSAGE,"Compiler Message"),f()(p,y.CUSTOM_CHECKER_MESSAGE,"Custom Checker Error Message"),f()(p,y.STDOUT_DEBUG,"Debug output"),f()(p,y.STDERR,"Error (stderr)"),f()(p,y.LEXICAL_PENALTY,"Restricted Keywords Used"),f()(p,y.SCORE,"Score"),f()(p,"RUN_AS_CUSTOM_INPUT","Run as Custom Input"),p),U=(T={},f()(T,y.STDOUT,"Output hidden"),f()(T,y.COMPILER_MESSAGE,{TLE:"Your code did not execute within the time limits"}),T),w="Hidden test cases are used to evaluate if your code can handle different scenarios, including corner cases",O="Use print or log statements to debug why your hidden test cases are failing. ".concat(w,".");function A(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n="",s="";return 1===e?(n="check-circle",s="success"):-1===e?(n="loading",s="info"):(s="error",a?n=N.includes(t)?"time":"cross":(n="loading",s="info")),{statusIcon:n,statusClass:s}}function L(e,t){var a,n=t.stdIn,s=t.stdOut,r=t.expectedOutput,i=t.compilerMessage,l=t.customCheckerMessage,c=t.stdOutDebug,o=t.stdErr,u=t.lexicalPenalty,d=t.score,m=void 0===d?"":d,p=t.signal,T=N.includes(p)?U[y.COMPILER_MESSAGE].TLE:i,E=(a={},f()(a,y.STDIN,[n]),f()(a,y.STDOUT,[s,!s]),f()(a,y.EXPECTED_OUTPUT,[r,!r]),f()(a,y.COMPILER_MESSAGE,[T]),f()(a,y.CUSTOM_CHECKER_MESSAGE,[l]),f()(a,y.STDOUT_DEBUG,[c]),f()(a,y.STDERR,[o]),f()(a,y.LEXICAL_PENALTY,[u]),f()(a,y.SCORE,[m.toString()]),a),h=v()(E[e],2),g=h[0],C=h[1],b=void 0!==C&&C;return{className:M[e],label:D[e],value:g,noResponse:b}}var x=Object(C.a)((function(e){return function(e){return e.map((function(e,t){return s()({},e,{originalIndex:I(e,t),title:P(e,t)})}))}(e).sort((function(e,t){return e.status===t.status?e.originalIndex-t.originalIndex:e.status-t.status}))}));function I(e,t){return e.hasOwnProperty("id")&&e.id>=0?e.id:t}function P(e,t){return e.hasOwnProperty("id")&&e.id>=0?"Sample Test case ".concat(t):"Test case ".concat(t)}function R(e,t){return[M[y.STDIN],M[y.EXPECTED_OUTPUT]].includes(e)&&!t}function H(e){return"submit"===e?"SubmitCode":"RunCode"}a("2hSz");var G=function(e){var t=e.progress,a=e.maxLimit,n=e.liveMessage,s=function(e,t){return e/t*100}(t,a);return c.a.createElement("div",{className:"tc-progress-wrapper"},c.a.createElement("span",{className:"status-progress"},n),c.a.createElement(E,{value:s,shine:!0}))},X=a("bIS8"),B=a("wqqT"),F=a("61np"),Y=function(e){var t=e.isLiveStatus,a=e.statusClass,n=e.statusIcon,r=e.title,l=e.isSample,o=e.hiddenTestCaseHelpText,u=i()(e,["isLiveStatus","statusClass","statusIcon","title","isSample","hiddenTestCaseHelpText"]),d="loading"===n;return c.a.createElement("div",s()({className:"testcase-tab-item tab-item-color-".concat(a," testcase-item")},u),t&&d?c.a.createElement(B.a,{diameter:20}):c.a.createElement("i",{className:"ui-icon-".concat(n)}),c.a.createElement("span",{className:"ui-icon-label tab-item-label"},r),!d&&!l&&c.a.createElement(F.a,{content:o,className:"testcase-tab-item__lock-icon-tooltip"},c.a.createElement("span",null,c.a.createElement(X.LockIcon,null))))};Y.defaultProps={isSample:!1,hiddenTestCaseHelpText:w};var j=Y,K=(a("19lX"),function(e){var t=e.testcaseStatus,a=e.signal,n=e.progress,s=e.maxLimit,r=e.totalCount,i=e.liveMessage,o=e.isCustomTestcase;return c.a.createElement(l.Fragment,null,c.a.createElement(G,{progress:n,maxLimit:s,className:"tc-progress",liveMessage:i}),!o&&function(e,t,a){for(var n=[],s=0;s<a;s++){var r=A(e&&e.length?e[s]:-1,t&&t.length?t[s]:0),i=r.statusClass,l=r.statusIcon,o="Test case ".concat(s);n.push(c.a.createElement(j,{isLiveStatus:!0,statusClass:i,statusIcon:l,title:o,key:s}))}return c.a.createElement("div",{className:"tc-live-status d-flex flex-column flex-wrap align-content-start"},n)}(t,a,r))}),J=(a("2Spj"),a("lwsE")),W=a.n(J),Z=a("W8MJ"),z=a.n(Z),Q=a("a1gu"),q=a.n(Q),V=a("Nsbk"),$=a.n(V),ee=a("PJYZ"),te=a.n(ee),ae=a("7W2i"),ne=a.n(ae),se=a("vN+2"),re=a.n(se),ie=(a("FDph"),a("sUjY"),a("OEX3")),le=a("z5MK");a("rvZc"),a("Ssa9");var ce=function(e){var t=e.content,a=e.renderFooter;return c.a.createElement("ul",{className:"lines-container"},function(e){return e.endsWith("\n")&&(e=e.substring(0,e.length-1)),e.split("\n").map((function(e,t){return c.a.createElement("li",{className:"d-flex lines-container__line",key:t},c.a.createElement("span",{className:"lines-container__content-wrapper"},c.a.createElement("pre",{className:"lines-container__content"},e)))}))}(t),"function"==typeof a&&a())},oe=(a("0JVZ"),a("SnPP"),function(e){function t(){var e,a,n;W()(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return q()(a,(n=a=q()(this,(e=$()(t)).call.apply(e,[this].concat(i))),a.state={activeTab:0,testcases:[]},a.getActiveTestcase=function(){var e=a.state;return e.testcases[e.activeTab]},a.renderDownloadLink=function(e){var t=a.props,n=t.handleDownload,r=t.showLineNumbers,i=e.isDataTruncated,o=e.showDownload,u=e.downloadLinkDownAttrs,d=e.className,m=e.testcaseIndex;return c.a.createElement(l.Fragment,null,i&&o&&(r?c.a.createElement("li",{className:"d-flex lines-container__line full-testcase",key:"download_fulltestcase"},c.a.createElement(ie.b,s()({role:"link"},u,{className:"d-flex align-items-center justify-content-end lines-container__link full-testcase__link text-link cursor-pointer",onClick:n.bind(te()(a),d,m)}),"Download to view the full testcase")):c.a.createElement(ie.b,s()({role:"link"},u,{className:"d-flex align-items-center justify-content-start text-link cursor-pointer download_link",onClick:n.bind(te()(a),d,m)}),"Download to view the full testcase")))},a.onTabClick=function(e){var t=a.props.fetchTestcase;a.setState({activeTab:e},(function(){var e=a.getActiveTestcase().originalIndex;"function"==typeof t&&t(e)}))},a.renderTabItem=function(e,t){var n=a.props,r=n.type,i=n.isCustomTestcase,l=n.analyticsAttributes,o=n.hiddenTestCaseHelpSubText;if(!("compile"===r)||!i){var u=a.state.testcases,d=a.getActiveTestcase().originalIndex,m=s()({},l,{"data-analytics":"TestCaseResultsTab","data-attr1":H(r),"data-attr5":d}),p=function(e,t){var a=t[e];return A(a.status,a.signal,a.checkerProcessed)}(t,u),T=p.statusClass,E=p.statusIcon,h=u[t].title,v=u[t].isSample;return c.a.createElement(j,s()({statusClass:T,statusIcon:E,title:h},m,{isSample:v,hiddenTestCaseHelpText:o}))}},n))}return ne()(t,e),z()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.shouldUnlockHiddenTestcase,a=e.getHiddenTestcases,n=e.fetchTestcase,s=e.type;(t&&"function"==typeof a&&a(),"submit"===s&&"function"==typeof n)&&n(this.getActiveTestcase().originalIndex)}},{key:"getRunTestCaseButtonText",value:function(e){var t=D.RUN_AS_CUSTOM_INPUT;return this.props.isCustomTestcase||e!==y.STDIN?null:t}},{key:"renderLabel",value:function(e,t){var a=function(e){var t=e.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("");return"render".concat(t,"Label")}(t),n=this.getActiveTestcase()[a];return"function"==typeof n?n():e}},{key:"renderTLETooltip",value:function(){var e=c.a.createElement("span",{className:"compiler-message__tooltip"},"Your code did not execute within the time limits. Please optimize your code. For more information on execution time limits, refer to the"," ",c.a.createElement("a",{className:"compiler-message__link",href:"https://www.hackerrank.com/environment",target:"_blank"},"environment")," ","page");return c.a.createElement(F.a,{align:"bottom",content:e},c.a.createElement("span",{className:"compiler-message__tooltip_label",role:"tab",tabIndex:0},c.a.createElement(X.InfoIcon,{className:"compiler-message__info"})))}},{key:"renderCompilerMessageContent",value:function(e,t){return c.a.createElement("pre",{className:"compiler-message__content"},c.a.createElement("code",{className:"bold"},e),t)}},{key:"renderCompilerMessage",value:function(e,t,a){var n=this.props.showLineNumbers,s=t===D[y.STDOUT]&&e===U[y.STDOUT];return t===D[y.COMPILER_MESSAGE]?e!==U[y.COMPILER_MESSAGE].TLE?this.renderCompilerMessageContent(e):this.renderCompilerMessageContent(e,this.renderTLETooltip()):c.a.createElement(l.Fragment,null,n&&!s?c.a.createElement(ce,{content:e,renderFooter:this.renderDownloadLink.bind(this,a)}):c.a.createElement(l.Fragment,null,this.renderCompilerMessageContent(e),this.renderDownloadLink(a)))}},{key:"renderCompileFieldLabelLinks",value:function(e,t,a,n){var r=this.props,i=r.showRunTestCaseButton,o=r.handleDownload,u=r.handleRunTestCase,d=r.isCustomTestcase,m=s()({},a,{"data-attr6":"right"}),p=this.getRunTestCaseButtonText(e),T=R(t,d),E=this.getActiveTestcase().originalIndex,h=!n&&i&&p;return c.a.createElement("span",{className:"compile-field-label__links"},h&&c.a.createElement(l.Fragment,null,c.a.createElement(ie.b,{role:"link",className:"text-link cursor-pointer",onClick:u.bind(this,E),"data-automation":"compile-field-label-run-test"},p),!d&&c.a.createElement("span",{className:"divider"},"|")),T&&c.a.createElement(ie.b,s()({role:"link"},m,{className:"text-link cursor-pointer",onClick:o.bind(this,t,E),"data-automation":"compile-field-label-download"}),"Download"))}},{key:"renderRunTimeSingleMessage",value:function(e,t){var a=this.props,n=a.isCustomTestcase,r=a.analyticsAttributes,i=a.type,l=a.defaultTextForOutput,o=a.showLineNumbers,d=e.className,m=e.label,p=e.value,T=e.noResponse,E=R(d,n),h=this.getActiveTestcase().originalIndex,v=p.includes("{-truncated-}"),g=s()({},r,{"data-analytics":"DownloadTestcase","data-attr1":H(i),"data-attr4":d,"data-attr7":h}),f={isDataTruncated:v,showDownload:E,downloadLinkDownAttrs:s()({},g,{"data-attr6":"down"}),className:d,testcaseIndex:h};return c.a.createElement("div",{key:m,className:u()(d,"run-time-message flex-display",{"run-time-message__line-numbers":o})},c.a.createElement("div",{className:"d-flex compile-field-label"},this.renderLabel(m,d),this.renderCompileFieldLabelLinks(t,d,g,v)),p&&c.a.createElement("div",{className:"compile-output-message"},this.renderCompilerMessage(p,m,f)),T&&c.a.createElement("pre",{className:"compile-output-message no-response"},c.a.createElement("code",{className:"bold"},l)))}},{key:"renderRunTimeMessages",value:function(){var e=this,t=this.getActiveTestcase(),a=[y.COMPILER_MESSAGE,y.STDERR,y.STDIN,y.STDOUT,y.EXPECTED_OUTPUT,y.CUSTOM_CHECKER_MESSAGE,y.STDOUT_DEBUG,y.LEXICAL_PENALTY,y.SCORE].map((function(a){if(s=a,r=t[a],i=[y.STDOUT,y.EXPECTED_OUTPUT],!S()(r)&&!_()(r)&&(i.includes(s)&&"string"==typeof r||r)){var n=L(a,t);return e.renderRunTimeSingleMessage(n,a)}var s,r,i;return null}));return c.a.createElement("div",{className:"d-flex flex-column flex-wrap compilation-time-response"},a)}},{key:"renderTestcaseContent",value:function(){return c.a.createElement("div",{className:u()("tab-pane-content")},this.renderRunTimeMessages())}},{key:"renderLoadingContent",value:function(){return c.a.createElement("div",{className:"bold loading-testcase text-align-center align-self-center"},"Loading testcase ...")}},{key:"renderUnlockMessageContent",value:function(){var e=this.props,t=e.unlockTestcaseMessage,a=e.handleUnlock,n=e.analyticsAttributes,r=e.unlockButtonText,i=this.getActiveTestcase(),l=i.originalIndex,o=i.unlockingTestCase,u=i.unlockError,d=s()({},n,{"data-analytics":"UnlockTestCase","data-attr1":"SubmitCode","data-attr5":l});return c.a.createElement("div",{className:"unlock-block"},c.a.createElement("div",{className:"unlock-heading"},c.a.createElement("i",{className:"ui-icon-lock"}),c.a.createElement("span",{className:"ui-icon-label"},"Hidden Test Case")),c.a.createElement("div",{className:u?"unlock-error":"unlock-cost"},u||t),c.a.createElement(ie.f,s()({},d,{className:"ui-btn-line hovered",loading:!!o,onClick:a.bind(this,l)}),r))}},{key:"renderUnlockMessage",value:function(){var e=this.getActiveTestcase(),t=L(y.COMPILER_MESSAGE,e),a=L(y.STDOUT_DEBUG,e);return c.a.createElement("div",{className:"unlock-wrapper"},t.value&&this.renderRunTimeSingleMessage(t,y.COMPILER_MESSAGE),a.value&&this.renderRunTimeSingleMessage(a,y.STDOUT_DEBUG),this.renderUnlockMessageContent())}},{key:"renderHiddenTestcaseContent",value:function(){var e=this.props.hiddenTestCaseHelpText;return c.a.createElement("div",{className:"hidden-testcase-wrapper"},this.renderRunTimeMessages(),c.a.createElement("div",{className:"hidden-testcase-wrapper__content"},c.a.createElement("i",{className:"ui-icon-lock"}),c.a.createElement("span",{className:"ui-icon-label"},"Hidden Test Case"),c.a.createElement("span",{className:"hidden-testcase-wrapper__content__help-text"},e)))}},{key:"renderTabsContent",value:function(){var e=this.props,t=e.type,a=e.shouldUnlockHiddenTestcase,n=this.state.activeTab,s=this.getActiveTestcase(),r="";return"compile"===t?r=this.renderTestcaseContent():"submit"===t&&(r=s.purchased?s.loadData?this.renderLoadingContent():s.isSample?this.renderTestcaseContent():this.renderHiddenTestcaseContent():a?this.renderUnlockMessage():this.renderHiddenTestcaseContent()),c.a.createElement(le.a.Content,{key:n,className:"tab-content d-flex"},r)}},{key:"render",value:function(){var e=this.state,t=e.activeTab,a=e.testcases,n="".concat(a.length," Testcases"),s={tabList:a,renderItem:this.renderTabItem,activeTab:t,dropdownTitle:n,onTabClick:this.onTabClick};return this.getActiveTestcase()?c.a.createElement(le.a,{layout:"vertical",className:"testcases-result-wrapper theme-m",enableA11y:!0},c.a.createElement(le.a.List,s),this.renderTabsContent()):null}}],[{key:"getDerivedStateFromProps",value:function(e){return{testcases:x(e.testcases)}}}]),t}(l.Component));oe.defaultProps={handleDownload:re.a,shouldUnlockHiddenTestcase:!1,handleUnlock:re.a,unlockTestcaseMessage:"Unlock this testcase for 5 hackos",defaultTextForOutput:"~ no response on stdout ~",unlockButtonText:"Unlock",showRunTestCaseButton:!1,hiddenTestCaseHelpText:O,hiddenTestCaseHelpSubText:w};var ue=oe,de=(a("lMQ/"),function(e){var t=e.liveStatus,a=e.statusCode,n=e.analyticsAttributes,r=e.bingChallenge,l=e.isCustomTestcase,o=e.fetchTestcase,u=e.testcases,d=e.getHiddenTestcases,m=e.handleDownload,p=e.handleUnlock,T=e.unlockTestcaseMessage,E=e.shouldUnlockHiddenTestcase,h=e.type,v=i()(e,["liveStatus","statusCode","analyticsAttributes","bingChallenge","isCustomTestcase","fetchTestcase","testcases","getHiddenTestcases","handleDownload","handleUnlock","unlockTestcaseMessage","shouldUnlockHiddenTestcase","type"]);return c.a.createElement("div",{className:"testcase-wrapper theme-m"},1===a?c.a.createElement(ue,s()({analyticsAttributes:n,bingChallenge:r,isCustomTestcase:l,fetchTestcase:o,layout:"vertical",testcases:u,getHiddenTestcases:d,handleDownload:m,handleUnlock:p,unlockTestcaseMessage:T,shouldUnlockHiddenTestcase:E,type:h},v)):c.a.createElement("div",{className:"tc-live-status-wrapper"},c.a.createElement(K,s()({},t,{isCustomTestcase:l}))))});de.defaultProps={statusCode:0};t.a=de},"lMQ/":function(e,t,a){}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/hackerrank_r_modules~test_case_ui-cb40c793.js.map