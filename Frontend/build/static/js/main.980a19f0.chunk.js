(window["webpackJsonpamazon-frontend"]=window["webpackJsonpamazon-frontend"]||[]).push([[0],{38:function(e,t){},40:function(e,t){},41:function(e,t,n){e.exports=n(69)},46:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),l=(n(46),n(10)),i=n(18),s=n(8),u=n(37),p=n(14);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={user:{}},f=n(38),E=n.n(f),g=Object(s.c)({signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SIGNUP":return d({},e,{user:t.payload});default:return e}},login:E.a}),b=[u.a],y=Object(s.e)(g,{},Object(s.d)(s.a.apply(void 0,b),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),O=n(15),v=n(16),w=n(19),j=n(17),S=n(20),_=n(6),C=n(23),P=n.n(C),N=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(w.a)(this,Object(j.a)(t).call(this,e))).onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state={signupFlag:0},n}return Object(S.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=null,t="";return"COMPANY_ADDED"===this.props.user&&this.state.signupFlag&&(alert("You have registered successfully"),e=r.a.createElement(_.a,{to:"/Login"})),"COMPANY_EXISTS"===this.props.user&&this.state.signupFlag&&(t="Email id is already registered"),r.a.createElement("div",null,e,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-10 col-xl-9 mx-auto"},r.a.createElement("div",{class:"card card-signin flex-row my-5"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title text-center"}," COMPANY SIGN IN"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"email",class:"form-control",name:"companymail",onChange:this.onChange,placeholder:"Email Id",pattern:"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$",title:"Please enter valid email address",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"password",class:"form-control",name:"password",onChange:this.onChange,placeholder:"Password",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",class:"form-control",name:"companyname",onChange:this.onChange,placeholder:"company name",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"text",class:"form-control",name:"companylocation",onChange:this.onChange,placeholder:"company location",required:!0})),r.a.createElement("div",{style:{color:"#ff0000"}},t),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Signup"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Already have an account? ",r.a.createElement(l.b,{to:"/CompanyLogin"},"Login")))))))))}}]),t}(a.Component),D=Object(i.b)((function(e){return{user:e.signup.user}}),{signup:function(e){return function(t){P.a.defaults.withCredentials=!0,P.a.post("".concat("http://localhost:5000","/signup/"),e).then((function(e){return t({type:"USER_SIGNUP",payload:e.data})})).catch((function(e){if(e.response&&e.response.data)return t({type:"USER_SIGNUP",payload:e.response.data})}))}}})(N),z=n(40),I=n.n(z),U=function(e){function t(){return Object(O.a)(this,t),Object(w.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.b,{path:"/Signup",component:D}),r.a.createElement(_.b,{path:"/Login",component:I.a}))}}]),t}(a.Component);var k=function(){return r.a.createElement(i.a,{store:y},r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(U,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.980a19f0.chunk.js.map