(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{32:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(26),r=s.n(n),a=(s(32),s(5)),i=s(1);var j=function(e){var t=e.onLogin,s=Object(c.useState)(""),n=Object(a.a)(s,2),r=n[0],j=n[1],o=Object(c.useState)(""),l=Object(a.a)(o,2),b=l[0],u=l[1],h=Object(c.useState)([]),O=Object(a.a)(h,2),d=O[0],m=O[1],p=Object(c.useState)(!1),x=Object(a.a)(p,2),f=x[0],y=x[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(!0),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:b})}).then((function(e){y(!1),e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return m(e.errors)}))}))},children:[Object(i.jsx)("label",{htmlFor:"username"}),Object(i.jsx)("input",{type:"text",id:"username",autoComplete:"off",value:r,placeholder:"Username",onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"password"}),Object(i.jsx)("input",{type:"password",id:"password",autoComplete:"current-password",value:b,placeholder:"Password",onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("button",{variant:"fill",color:"primary",type:"submit",class:"btn btn-primary btn-block btn-large",children:f?"Loading...":"Login"}),Object(i.jsx)("div",{children:d.map((function(e){return Object(i.jsx)("p",{className:"whitey",children:e},e)}))})]})};var o=function(e){var t=e.onLogin,s=Object(c.useState)(""),n=Object(a.a)(s,2),r=n[0],j=n[1],o=Object(c.useState)(""),l=Object(a.a)(o,2),b=l[0],u=l[1],h=Object(c.useState)(""),O=Object(a.a)(h,2),d=O[0],m=O[1],p=Object(c.useState)([]),x=Object(a.a)(p,2),f=x[0],y=x[1],g=Object(c.useState)(!1),v=Object(a.a)(g,2),N=v[0],T=v[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y([]),T(!0),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:b,password_confirmation:d})}).then((function(e){T(!1),e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return y(e.errors)}))}))},children:[Object(i.jsx)("label",{htmlFor:"username"}),Object(i.jsx)("input",{type:"text",id:"username",autoComplete:"off",value:r,placeholder:"Username",onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"password"}),Object(i.jsx)("input",{type:"password",id:"password",value:b,placeholder:"Password",onChange:function(e){return u(e.target.value)},autoComplete:"current-password"}),Object(i.jsx)("label",{htmlFor:"password"}),Object(i.jsx)("input",{type:"password",id:"password_confirmation",placeholder:"Password Confirmation",value:d,onChange:function(e){return m(e.target.value)},autoComplete:"current-password"}),Object(i.jsx)("button",{variant:"fill",color:"primary",type:"submit",class:"btn btn-primary btn-block btn-large",children:N?"Loading...":"Sign Up"}),Object(i.jsx)("div",{children:f.map((function(e){return Object(i.jsx)("p",{className:"whitey",children:e},e)}))})]})};var l=function(e){var t=e.onLogin,s=Object(c.useState)(!0),n=Object(a.a)(s,2),r=n[0],l=n[1];return Object(i.jsxs)("div",{className:"login ",children:[Object(i.jsx)("h1",{children:"Last Minute Tee Times"}),r?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{onLogin:t}),Object(i.jsx)("p",{children:"-------------------------------"}),Object(i.jsxs)("p",{className:"whitey",children:["Don't have an account? \xa0",Object(i.jsx)("button",{onClick:function(){return l(!1)},class:"btn btn-primary btn-block btn-large",children:"Sign Up"})]})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{onLogin:t}),Object(i.jsx)("p",{className:"whitey",children:"----------------------------------------------------------"}),Object(i.jsxs)("p",{className:"whitey",children:["Already have an account? \xa0",Object(i.jsx)("button",{color:"secondary",onClick:function(){return l(!0)},class:"btn btn-primary btn-block btn-large",children:"Log In"})]})]})]})},b=s(9);var u=function(e){e.user;var t=e.setUser;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{display:"inline-block",marginLeft:"15rem",marginRight:"auto",width:"55%"},children:Object(i.jsx)(b.b,{to:"/",className:"sizey",children:"Last Minute Tee Times"})}),Object(i.jsxs)("span",{className:"navB",children:[Object(i.jsx)("button",{className:"navc",children:Object(i.jsx)(b.b,{to:"/myteetimes",children:"My Tee-times"})}),Object(i.jsx)(b.c,{to:"/",children:Object(i.jsx)("button",{className:"navB",variant:"outline",onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&t(null)}))},children:"Logout"})})]})]})},h=s(4);var O=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){fetch("/courses").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(i.jsx)("section",{className:"courses",children:s.map((function(e){return Object(i.jsxs)(b.b,{className:"course",to:"/course/".concat(e.id),children:[Object(i.jsx)("picture",{className:"thumbnail",children:Object(i.jsx)("img",{src:e.img})}),Object(i.jsx)("div",{className:"card-content",children:Object(i.jsxs)("h2",{className:"category category__03",children:[e.name,":"]})}),Object(i.jsx)("footer",{children:Object(i.jsxs)("div",{className:"post-meta",children:[Object(i.jsx)("strong",{children:e.location}),Object(i.jsxs)("span",{className:"comments",children:["(Par: ",e.par,"),"]}),Object(i.jsxs)("span",{className:"comments",children:["(Holes: ",e.holes,"),"]}),Object(i.jsxs)("span",{className:"comments",children:["(length: ",e.length,")"]})]})})]},e.id)}))})};var d=function(e){var t=e.teetime,s=t.players*t.price,n=Object(h.m)(),r=Object(c.useState)([]),j=Object(a.a)(r,2),o=(j[0],j[1]),l=Object(c.useState)(!1),b=Object(a.a)(l,2),u=b[0],O=b[1];return Object(i.jsx)("div",{className:"yay",children:Object(i.jsxs)("span",{children:[Object(i.jsx)("h1",{children:"CONFIRM BOOKING:"}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Date:"})," ",t.date]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Time:"})," ",t.time]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Players:"})," ",t.players]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Holes:"})," ",t.holes]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Price:"})," $",t.price]}),Object(i.jsxs)("h3",{children:["TOTAL: Price($",t.price,") x Players:(",t.players,") = $",s]}),Object(i.jsxs)("button",{onClick:function(){var e={players:t.players,price:t.price,holes:t.holes,time:t.time,date:t.date,course_id:t.course_id,status:"Booked"};O(!0),fetch("/teetimes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.ok?(fetch("/teetimes/".concat(t.id),{method:"DELETE"}),n("/myteetimes")):e.json().then((function(e){return o(e.errors)}))}))},children:[" ",u?"Loading...":"Book Tee Time"]}),Object(i.jsx)("p",{})]})})},m=s(7),p=s(24),x=s(8),f=s(27);var y=function(e){var t=e.user,s=e.bookTime,n=Object(h.o)().id,r=Object(c.useState)([]),j=Object(a.a)(r,2),o=j[0],l=j[1],b=Object(c.useState)([]),u=Object(a.a)(b,2),O=u[0],d=u[1],y=Object(c.useState)(new Date),g=Object(a.a)(y,2),v=g[0],N=g[1],T=Object(c.useState)(!1),w=Object(a.a)(T,2),S=w[0],C=w[1],k=v.toLocaleString().split(",")[0],P=v.toDateString(),L=Object(c.useState)({players:"",price:"",holes:"",time:""}),_=Object(a.a)(L,2),D=_[0],E=_[1];function F(e){e.preventDefault(),E(Object(p.a)(Object(p.a)({},D),{},Object(m.a)({},e.target.name,e.target.value)))}return console.log(o),Object(c.useEffect)((function(){fetch("/teetimes/".concat(n)).then((function(e){e.ok&&e.json().then((function(e){return d(e.filter((function(e){return e.date===k&&"Posted"===e.status})))}))}))}),[v]),console.log(o),Object(i.jsxs)("div",{className:"white",children:[" ",Object(i.jsx)("strong",{children:"Showing Tee Times for:"})," ",P,Object(i.jsxs)("section",{className:"coursess",children:[Object(i.jsx)(f.a,{onChange:function(e){N(e)},value:v,className:"react-calendar"}),Object(i.jsxs)("h1",{className:"posty",children:["Post a Tee Time:",Object(i.jsx)("p",{}),Object(i.jsx)("p",{}),Object(i.jsx)("button",{className:"postyy",onClick:function(){C(!S)},children:"Click Here"})]}),S?Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={players:parseInt(D.players),price:parseInt(D.price),holes:parseInt(D.holes),time:D.time,date:k,course_id:parseInt(n),status:"Posted"};console.log(t),fetch("/teetimes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.ok?e.json().then((function(e){return d([].concat(Object(x.a)(O),[e]))}),E({players:"",price:"",holes:"",time:""})):e.json().then((function(e){return l(e.errors)}))}))},children:[Object(i.jsxs)("label",{children:[" Players: (must be 1 to 4)",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",name:"players",value:D.players,onChange:F})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Price: ",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",name:"price",value:D.price,onChange:F})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Holes: ",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",name:"holes",value:D.holes,onChange:F})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Time: ",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",name:"time",value:D.time,onChange:F})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Date: ",k," "]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",children:"Submit Tee Time"})]}),o.map((function(e){return Object(i.jsx)("p",{children:e},e)}))]}):O.map((function(e){return e.user_id===t.id?Object(i.jsxs)("section",{className:"gray",children:[Object(i.jsx)("div",{className:"card-content",children:Object(i.jsxs)("h2",{className:"categoryy category__03",children:[e.time,":"]})}),Object(i.jsx)("p",{className:"rojo",children:"This Time Belongs to you"}),Object(i.jsxs)("h1",{className:"categoryyy",children:["$",e.price]}),Object(i.jsxs)("footer",{className:"size",children:[Object(i.jsxs)("span",{children:["Player: (",e.players,")"]}),Object(i.jsx)("p",{}),Object(i.jsxs)("span",{children:["Holes: (",e.holes,")"]}),Object(i.jsx)("p",{})]})]},e.id):Object(i.jsxs)("section",{className:"gray",children:[Object(i.jsx)("div",{className:"card-content",children:Object(i.jsxs)("h2",{className:"categoryy category__03",children:[e.time,":"]})}),Object(i.jsxs)("h1",{className:"categoryyy",children:["$",e.price]}),Object(i.jsxs)("footer",{className:"size",children:[Object(i.jsxs)("span",{children:["Player: (",e.players,")"]}),Object(i.jsx)("p",{}),Object(i.jsxs)("span",{children:["Holes: (",e.holes,")"]}),Object(i.jsx)("p",{}),Object(i.jsx)("button",{onClick:function(t){s(e)},children:"Book Now"})]})]},e.id)}))]})]})};var g=function(e){var t=e.user,s=Object(c.useState)([]),n=Object(a.a)(s,2),r=n[0],j=n[1],o=Object(c.useState)(!0),l=Object(a.a)(o,2),b=l[0],u=l[1],O=Object(c.useState)([]),m=Object(a.a)(O,2),p=m[0],x=m[1],f=Object(h.o)().id;return console.log(t),Object(c.useEffect)((function(){fetch("/courses/".concat(f)).then((function(e){e.ok&&e.json().then((function(e){return j(e)}))}))}),[f]),Object(i.jsxs)("div",{className:"white",children:[Object(i.jsxs)("div",{className:"numeral",children:[Object(i.jsx)("picture",{className:"new-thumb",children:Object(i.jsx)("img",{src:r.img})}),Object(i.jsx)("div",{className:"card-content-new",children:Object(i.jsxs)("h2",{className:"category-new category__03",children:[r.name,":"]})}),Object(i.jsx)("footer",{children:Object(i.jsxs)("div",{className:"post-meta",children:[Object(i.jsxs)("strong",{className:"comments-new",children:[r.location,"--"]}),Object(i.jsxs)("span",{className:"comments-new",children:["(Par: ",r.par,"),"]}),Object(i.jsxs)("span",{className:"comments-new",children:["(Holes: ",r.holes,"),"]}),Object(i.jsxs)("span",{className:"comments-new",children:["(length: ",r.length,")"]})]})}),Object(i.jsx)("strong",{className:"comments-new",children:"Description: "})," ",r.description]},r.id),Object(i.jsx)("p",{}),b?Object(i.jsx)(y,{user:t,bookTime:function(e){x(e),u(!1)}}):Object(i.jsx)(d,{teetime:p})]})};var v=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){fetch("/users/time").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(i.jsxs)("div",{className:"white",children:[Object(i.jsxs)("section",{className:"coursess white",children:[Object(i.jsx)("h1",{children:"Posted Tee Times:"}),s.map((function(e){return"Posted"===e.status?Object(i.jsxs)("section",{className:"gray",children:[Object(i.jsx)("div",{className:"card-content",children:Object(i.jsxs)("h2",{className:"categoryy category__03",children:[e.time,":"]})}),Object(i.jsxs)("h1",{className:"categoryyy",children:["$",e.price]}),Object(i.jsxs)("footer",{className:"size",children:[Object(i.jsxs)("span",{children:["Player: (",e.players,")"]}),Object(i.jsx)("p",{}),Object(i.jsxs)("span",{children:["Holes: (",e.holes,")"]}),Object(i.jsx)("p",{}),Object(i.jsxs)("span",{children:["Date: (",e.date,")"]}),Object(i.jsx)("p",{}),Object(i.jsxs)("span",{children:["Course: (",e.course.name,")"]}),Object(i.jsx)("p",{}),Object(i.jsx)("button",{onClick:function(t){return function(e){console.log(e.id),fetch("/teetimes/".concat(e.id),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return n(e)}))}(e)},children:"Unpost Tee Time"})]})]},e.id):null}))]}),Object(i.jsx)("p",{}),Object(i.jsxs)("section",{className:"coursess white",children:[Object(i.jsx)("h1",{children:"Booked Tee Times:"}),s.map((function(e){return"Booked"===e.status?Object(i.jsxs)("section",{className:"gray",children:[Object(i.jsx)("div",{className:"card-content",children:Object(i.jsxs)("h2",{className:"categoryy category__03",children:[e.time,":"]})}),Object(i.jsxs)("h1",{className:"categoryyy",children:["$",e.price]}),Object(i.jsxs)("footer",{className:"size",children:[Object(i.jsxs)("span",{children:["Player: (",e.players,")"]}),Object(i.jsx)("p",{}),Object(i.jsxs)("span",{children:["Holes: (",e.holes,")"]}),Object(i.jsx)("p",{}),Object(i.jsxs)("span",{children:["Date: (",e.date,")"]}),Object(i.jsx)("p",{}),Object(i.jsxs)("span",{children:["Course: (",e.course.name,")"]}),Object(i.jsx)("p",{}),Object(i.jsx)("button",{onClick:function(t){return function(e){console.log(e),fetch("/teetimes/".concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"Posted"})}).then((function(e){return e.json()})).then((function(e){return n(e)}))}(e)},children:"Repost Tee Time"})]})]},e.id):null}))]})]})};var N=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return n(e)}))}))}),[]),s?Object(i.jsxs)("div",{className:"colored",children:[Object(i.jsx)(u,{user:s,setUser:n}),Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{path:"/",element:Object(i.jsx)(O,{})}),Object(i.jsx)(h.a,{path:"/course/:id",element:Object(i.jsx)(g,{user:s})}),Object(i.jsx)(h.a,{path:"/myteetimes",element:Object(i.jsx)(v,{})})]})]}):Object(i.jsx)(l,{onLogin:n})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};r.a.render(Object(i.jsx)(b.a,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),T()}},[[38,1,2]]]);
//# sourceMappingURL=main.5b06a5d6.chunk.js.map