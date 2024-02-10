"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[960],{7838:function(n,t,r){r.d(t,{Z:function(){return d}});var e,i,o=r(168),a=r(7924),u=(0,a.ZP)("div")(e||(e=(0,o.Z)(["\n  padding: 20px;\n"]))),c=(0,a.ZP)("p")(i||(i=(0,o.Z)(["\n  color: red;\n  font-size: 20px;\n"]))),s=r(2070),f=r(184),d=function(n){var t=n.message;return(0,f.jsx)(s.Z,{children:(0,f.jsx)(u,{children:(0,f.jsx)(c,{children:t})})})}},9956:function(n,t,r){r.d(t,{X:function(){return u},l:function(){return c}});var e,i,o=r(168),a=r(7924),u=(0,a.ZP)("h1")(e||(e=(0,o.Z)([""]))),c=(0,a.ZP)("div")(i||(i=(0,o.Z)(["\n  margin-top: 20px;\n"])))},5515:function(n,t,r){r.d(t,{Z:function(){return f}});var e,i=r(7838),o=r(4137),a=r(168),u=(0,r(7924).ZP)("div")(e||(e=(0,a.Z)(["\n  /* position: fixed; */\n  /* top: 0; */\n  /* left: 0; */\n  /* width: 100vw; */\n  /* height: 100vh; */\n\n  padding: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),c=r(184),s=function(){return(0,c.jsx)(u,{children:(0,c.jsx)(o.iT,{visible:!0,height:"60",width:"60",color:"#a6a2c9",ariaLabel:"oval-loading",wrapperStyle:{},wrapperClass:""})})},f=function(n){var t=n.children,r=n.isLoading,e=n.error,o=void 0===e?null:e;return r?(0,c.jsx)(s,{}):o?(0,c.jsx)(i.Z,{message:o}):(0,c.jsx)(c.Fragment,{children:t})}},9049:function(n,t,r){r.d(t,{Z:function(){return x}});var e,i,o,a=r(168),u=r(7924),c=r(1087),s=(0,u.ZP)("ul")(e||(e=(0,a.Z)(["\n  padding-left: 30px;\n"]))),f=(0,u.ZP)("li")(i||(i=(0,a.Z)(["\n  border-bottom: 1px solid lightgray;\n"]))),d=(0,u.ZP)(c.Link)(o||(o=(0,a.Z)(["\n  display: block;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  color: gray;\n\n  transition: color 300ms ease-in-out;\n\n  &:hover {\n    color: red;\n  }\n"]))),l=r(7689),p=r(184),h=function(n){var t=n.title,r=n.href,e=(0,l.TH)();return(0,p.jsx)(d,{to:r,state:{from:e},children:t})},x=function(n){var t=n.list;return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.title;return(0,p.jsx)(f,{children:(0,p.jsx)(h,{href:"/movies/".concat(t),title:r})},t)}))})}},5903:function(n,t,r){r.d(t,{Z:function(){return u}});var e,i=r(168),o=(0,r(7924).ZP)("section")(e||(e=(0,i.Z)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n"]))),a=r(184),u=function(n){var t=n.children;return(0,a.jsx)(o,{children:t})}},3960:function(n,t,r){r.r(t),r.d(t,{default:function(){return I}});var e,i,o,a=r(9439),u=r(2070),c=r(9049),s=r(5903),f=r(5515),d=r(7838),l=r(9956),p=r(2791),h=r(1087),x=r(4390),v=r(168),Z=r(7924),g=(0,Z.ZP)("form")(e||(e=(0,v.Z)(["\n  display: flex;\n"]))),m=(0,Z.ZP)("input")(i||(i=(0,v.Z)(["\n  font-size: 20px;\n  padding: 8px 20px;\n  border: 1px solid gray;\n  outline: none;\n"]))),y=(0,Z.ZP)("button")(o||(o=(0,v.Z)(["\n  padding: 0 12px;\n  display: block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid gray;\n  border-left: none;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.03);\n  }\n"]))),j=r(4330),b=r(184),w=function(n){var t=n.onSubmit;return(0,b.jsxs)(g,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),t(n.target.elements.searchMovie.value)},children:[(0,b.jsx)(m,{type:"text",name:"searchMovie"}),(0,b.jsx)(y,{type:"submit",children:(0,b.jsx)(j.FKI,{size:16})})]})},_=function(){var n=(0,p.useState)(null),t=(0,a.Z)(n,2),r=t[0],e=t[1],i=(0,p.useState)(null),o=(0,a.Z)(i,2),v=o[0],Z=o[1],g=(0,p.useState)(!1),m=(0,a.Z)(g,2),y=m[0],j=m[1],_=(0,h.useSearchParams)(),I=(0,a.Z)(_,2),M=I[0],P=I[1],k=M.get("query");(0,p.useEffect)((function(){j(!0),Z(null),(0,x.Zh)(k).then((function(n){var t=n.results;e(t)})).catch((function(n){Z(n.message)})).finally((function(){j(!1)}))}),[k]);if(r)return(0,b.jsx)(s.Z,{children:(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(w,{onSubmit:function(n){P(""===n?{}:{query:n})}}),k&&(0,b.jsx)(f.Z,{isLoading:y,error:v,children:(0,b.jsx)(l.l,{children:r.length>0?(0,b.jsx)(c.Z,{list:r}):(0,b.jsx)(d.Z,{message:"Found nothing"})})})]})})},I=function(){return(0,b.jsx)(_,{})}},4390:function(n,t,r){r.d(t,{IQ:function(){return l},Jh:function(){return p},Pg:function(){return d},Zh:function(){return f},yE:function(){return s}});var e=r(5861),i=r(7757),o=r.n(i),a=r(5294),u=r(6210),c=a.Z.create({baseURL:u._n,headers:{Authorization:"Bearer ".concat(u.LA)},params:{language:"en-US"}}),s=function(){var n=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{include_adult:!1,query:t,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6210:function(n,t,r){r.d(t,{LA:function(){return i},MH:function(){return o},_n:function(){return e}});var e="https://api.themoviedb.org/3",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTM2Y2U5NDg4MjY2MWVjZmQ3NWQyYzIyZTg5MDVhYSIsInN1YiI6IjYzMzQ1NmYwZDQ2NTM3MDA4MmFhMzMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Yo7St9bT1yiAwYdr2Wq1_-3d7SD_Cu2hBotpJshr_I",o="https://image.tmdb.org/t/p/w500"}}]);
//# sourceMappingURL=960.b14dde0a.chunk.js.map