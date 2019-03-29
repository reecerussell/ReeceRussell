module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}},l=!0;try{e[a].call(r.exports,r,r.exports,n),l=!1}finally{l&&delete t[a]}return r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/1vX":function(e,t){},"0iUn":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},1:function(e,t,n){e.exports=n("RNiq")},"5Yp1":function(e,t,n){"use strict";var a=n("0iUn"),r=n("sLSF"),l=n("MI3g"),c=n("a7VT"),o=n("AT/M"),i=n("Tit0"),u=n("cDcd"),s=n.n(u),m=(n("q4sD"),n("aTiY"),n("oL/c")),f=n("U7sd"),p=n.n(f),d=(n("nbBp"),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={path:null},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=location.pathname;"/"!==e[0]&&(e="/"+e.toLowerCase()),console.log("Path:",e),this.setState({path:e})}},{key:"render",value:function(){return s.a.createElement("nav",{className:"nav"},s.a.createElement("ul",null,s.a.createElement("li",{className:"/"===this.state.path?"active":""},s.a.createElement("a",{href:"/"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/reecerussell"},"Github")),s.a.createElement("li",{className:"/projects"===this.state.path?"active":""},s.a.createElement("a",{href:"/projects"},"Projects"))))}}]),t}(s.a.Component)),E=(n("gBr/"),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"container",style:{backgroundColor:"black",color:"white"}},s.a.createElement(m.Row,null,s.a.createElement(m.Col,{md:"6"},s.a.createElement("p",null,"Copyright © ",(new Date).getFullYear(),", Reece Russell")),s.a.createElement(m.Col,{md:"6"},s.a.createElement("p",{className:"email"},s.a.createElement("a",{href:"mailto:me@reece-russell.co.uk?Subject=Talk%20to%20me"},"me@reece-russell.co.uk")))))}}]),t}(s.a.Component));n.d(t,"a",function(){return b});var b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).getTitle=n.getTitle.bind(Object(o.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"getTitle",value:function(){var e=this.props.title;switch(e){case"":case null:case void 0:return"Reece Russell / Software Developer";default:return e+" / Reece Russell / Software Developer"}}},{key:"render",value:function(){var e=this.getTitle();return s.a.createElement("div",{className:"background"},s.a.createElement(m.Container,null,s.a.createElement(p.a,null,s.a.createElement("title",null,e)),s.a.createElement(m.Row,null,s.a.createElement(m.Col,null,s.a.createElement(d,null))),this.props.children),s.a.createElement(E,null))}}]),t}(s.a.Component)},"AT/M":function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},Bhuq:function(e,t,n){e.exports=n("/+oN")},DLZN:function(e,t){},KQ42:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n("0iUn"),r=n("sLSF"),l=n("MI3g"),c=n("a7VT"),o=n("Tit0"),i=n("cDcd"),u=n.n(i),s=n("oL/c"),m=(n("/1vX"),function(e){function t(e){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(s.Row,{style:{padding:"50px 0"}},u.a.createElement(s.Col,{md:"6"},u.a.createElement("h4",null,"Projects"),u.a.createElement("ul",null,u.a.createElement("li",null,"Google"),u.a.createElement("li",null,"Microsoft"),u.a.createElement("li",null,"Apple"),u.a.createElement("li",null,"Amazon"))),u.a.createElement(s.Col,{md:"6"},u.a.createElement("h4",null,"Experience"),u.a.createElement("ul",{className:"list"},u.a.createElement("li",{className:"list-item"},u.a.createElement("h5",null,u.a.createElement("b",null,"Prominent Media"))))),u.a.createElement(s.Col,{md:"6"},u.a.createElement("h4",null,"Education"),u.a.createElement(s.Row,null,u.a.createElement(s.Col,{sm:"4"},u.a.createElement("strong",{className:"text-muted"},"2019 - PRESENT")),u.a.createElement(s.Col,{sm:"8"},u.a.createElement("h4",null,"Software Language"),u.a.createElement("span",null,"Level 4 Diploma"))),u.a.createElement(s.Row,null,u.a.createElement(s.Col,{sm:"4"},u.a.createElement("strong",{className:"text-muted"},"2019 - PRESENT")),u.a.createElement(s.Col,{sm:"8"},u.a.createElement("h4",null,"Software Development Methodologies"),u.a.createElement("span",null,"Level 4 Diploma"))),u.a.createElement(s.Row,null,u.a.createElement(s.Col,{sm:"4"},u.a.createElement("strong",{className:"text-muted"},"2019 - PRESENT")),u.a.createElement(s.Col,{sm:"8"},u.a.createElement("h4",null,"Microsoft Technical Associate"),u.a.createElement("span",null,"HTML5, CSS & JS")))),u.a.createElement(s.Col,{md:"6"},u.a.createElement("h4",null,"Skills"),u.a.createElement(s.Row,null,u.a.createElement(s.Col,{sm:"4"},u.a.createElement("h6",null,"Frontend"),u.a.createElement("ul",null,u.a.createElement("li",null,"HTML5"),u.a.createElement("li",null,"CSS/SCSS"),u.a.createElement("li",null,"JavaScript"))),u.a.createElement(s.Col,{sm:"4"},u.a.createElement("h6",null,"Backend"),u.a.createElement("ul",null,u.a.createElement("li",null,"C#.NET"),u.a.createElement("li",null,"MySQL/MSSQL"),u.a.createElement("li",null,"RESTFUL"))),u.a.createElement(s.Col,{sm:"4"},u.a.createElement("h6",null,"Other"),u.a.createElement("ul",null,u.a.createElement("li",null,"Git"))))))}}]),t}(u.a.Component))},L72W:function(e,t){},MI3g:function(e,t,n){"use strict";var a=n("XVgq"),r=n.n(a),l=n("Z7t5"),c=n.n(l);function o(e){return(o="function"==typeof c.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":typeof e})(e)}function i(e){return(i="function"==typeof c.a&&"symbol"===o(r.a)?function(e){return o(e)}:function(e){return e&&"function"==typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":o(e)})(e)}var u=n("AT/M");function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?Object(u.a)(e):t}n.d(t,"a",function(){return s})},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),l=n("MI3g"),c=n("a7VT"),o=n("Tit0"),i=n("cDcd"),u=n.n(i),s=n("KQ42"),m=n("5Yp1"),f=n("oL/c"),p=n("AT/M"),d=(n("L72W"),[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut dolor lobortis, aliquam sapien vel, commodo purus. Mauris gravida sapien ut lectus dictum, quis egestas ex dictum. Vivamus a nunc suscipit, auctor urna nec, bibendum est. Ut dictum, lacus at bibendum venenatis, dui risus scelerisque sapien, ac commodo turpis neque a sem.",from:{name:"Mark",company:"Smarterworkspace"},id:1},{text:"Lorem ipsum dolor sit amet, consectetur adius dictum, quis egestas ex dictum. Vivamus a nunc suscipit, auctor urna nec, bibendum est. Ut dictum, lacus at bibendum venenatis, dui risus scelerisque sapien, ac commodo turpis neque a sem.",from:{name:"Mark",company:"Thames Water"},id:2},{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut dolor lobortis, aliquam sapien vel, commodo purus. Mauris gravida sapien ut lectus dictum, quis egestas ex dictum. Vivamus a nunc suscipit, auctor urna nec, bibendum est. Ut dictum, lacus at bibendum venenatis, dui risus scelerisque sapien, ac commodo turpis neque a sem.",from:{name:"Mark",company:"Umbrella"},id:3}]),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={activeIndex:0,loading:!1},n.next=n.next.bind(Object(p.a)(n)),n.previous=n.previous.bind(Object(p.a)(n)),n.goToIndex=n.goToIndex.bind(Object(p.a)(n)),n.onExiting=n.onExiting.bind(Object(p.a)(n)),n.onExited=n.onExited.bind(Object(p.a)(n)),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===d.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?d.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=d.map(function(t){return u.a.createElement(f.CarouselItem,{onExiting:e.onExiting,onExited:e.onExited,key:t.id},u.a.createElement(f.Row,{className:"text-center"},u.a.createElement(f.Col,{md:{size:"6",offset:"3"}},u.a.createElement("p",{style:{fontSize:"14px"}},t.text),u.a.createElement("p",{className:"small"},u.a.createElement("b",null,t.from.name)," @ ",t.from.company))))}),a=!0===this.state.loading?u.a.createElement(f.Spinner,{color:"dark"}):u.a.createElement("div",null,u.a.createElement(f.Carousel,{activeIndex:t,next:this.next,previous:this.previous,interval:5e3},n),u.a.createElement(f.CarouselIndicators,{className:"indicators",items:d,activeIndex:t,onClickHandler:this.goToIndex}));return u.a.createElement(f.Row,{className:"testimonials"},u.a.createElement(f.Col,null,a))}}]),t}(u.a.Component),b=(n("DLZN"),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(f.Row,{id:"about"},u.a.createElement(f.Col,null,u.a.createElement("h4",null,"About me"),u.a.createElement("div",{className:"tab"}),u.a.createElement("p",{className:"text-justify"},"I am an apprentice software developer at a small company called Prominent Media while studying software development. My primary focus is on ASP.NET web applications, working with C# and SQL. From time to time, I explore the realms of Xamarin and working with web sockets and restful APIs. However, ASP.NET Core is my current obsession.")))}}]),t}(u.a.Component)),h=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(f.Row,null,u.a.createElement(f.Col,null,u.a.createElement("h3",null,"Skills"),u.a.createElement("div",{className:"tab"}),u.a.createElement(f.Row,null,u.a.createElement(f.Col,{md:"4"},u.a.createElement("h4",null,"Frontend"),u.a.createElement("ul",null,u.a.createElement("li",null,"HTML5"),u.a.createElement("li",null,"CSS/SCSS"),u.a.createElement("li",null,"JavaScript"))),u.a.createElement(f.Col,{md:"4"},u.a.createElement("h4",null,"Backend"),u.a.createElement("ul",null,u.a.createElement("li",null,"C#.NET"),u.a.createElement("li",null,"MySQL/MSSQL"),u.a.createElement("li",null,"RESTFUL"))),u.a.createElement(f.Col,{md:"4"},u.a.createElement("h4",null,"Other"),u.a.createElement("ul",null,u.a.createElement("li",null,"Git"),u.a.createElement("li",null,"Xamarin <3"))))))}}]),t}(u.a.Component);n.d(t,"default",function(){return v});var v=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(m.a,null,u.a.createElement(f.Row,{style:{padding:"75px 0",borderBottom:"dotted 1px #000"}},u.a.createElement(f.Col,{md:"4"},u.a.createElement("img",{src:"https://theweeklyminute.files.wordpress.com/2014/06/dsc05899.jpg",style:{position:"relative",height:300}})),u.a.createElement(f.Col,{md:"8"},u.a.createElement("h1",{className:"display-4"},"Hi,"),u.a.createElement(f.Row,null,u.a.createElement(f.Col,{md:"7"},u.a.createElement("p",null,"Welcome to my portfoli! I am a software developer, based in Milton Keynes."))),u.a.createElement(f.Row,null,u.a.createElement(f.Col,{sm:"7"},u.a.createElement("div",{className:"tab"}),u.a.createElement("p",null,"At the moment I am engaged to ASP.NET Core microservices and exploring GO.",u.a.createElement("br",null),"This is my first online portfolio. Feel feel to look around and let me know what you think!")),u.a.createElement(f.Col,{sm:"5"},u.a.createElement("div",{className:"tab"}),u.a.createElement("p",null,"Just a side note, I am an apprentice software developer, working at ",u.a.createElement("a",{href:"http://prominentmedia.com"},"Prominent Media"),"."))))),u.a.createElement(b,null),u.a.createElement(h,null),u.a.createElement(E,null),u.a.createElement(s.a,null))}}]),t}(u.a.Component)},SqZg:function(e,t,n){e.exports=n("o5io")},TRZx:function(e,t,n){e.exports=n("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},Tit0:function(e,t,n){"use strict";var a=n("SqZg"),r=n.n(a),l=n("TRZx"),c=n.n(l);function o(e,t){return(o=c.a||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",function(){return i})},U7sd:function(e,t){e.exports=require("next-server/head")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,n){e.exports=n("gHn/")},Z7t5:function(e,t,n){e.exports=n("vqFK")},a7VT:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("Bhuq"),r=n.n(a),l=n("TRZx"),c=n.n(l);function o(e){return(o=c.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},aTiY:function(e,t){},cDcd:function(e,t){e.exports=require("react")},"gBr/":function(e,t){},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,n){e.exports=n("TUA0")},nbBp:function(e,t){},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oL/c":function(e,t){e.exports=require("reactstrap")},q4sD:function(e,t){},sLSF:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("hfKm"),r=n.n(a);function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),r()(e,a.key,a)}}function c(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});