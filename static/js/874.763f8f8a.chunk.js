"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[874],{7838:function(n,r,e){e.d(r,{Z:function(){return l}});var t,i,o=e(168),a=e(7924),c=(0,a.ZP)("div")(t||(t=(0,o.Z)(["\n  padding: 20px;\n"]))),s=(0,a.ZP)("p")(i||(i=(0,o.Z)(["\n  color: red;\n  font-size: 20px;\n"]))),u=e(2070),d=e(184),l=function(n){var r=n.message;return(0,d.jsx)(u.Z,{children:(0,d.jsx)(c,{children:(0,d.jsx)(s,{children:r})})})}},5515:function(n,r,e){e.d(r,{Z:function(){return d}});var t,i=e(7838),o=e(4137),a=e(168),c=(0,e(7924).ZP)("div")(t||(t=(0,a.Z)(["\n  /* position: fixed; */\n  /* top: 0; */\n  /* left: 0; */\n  /* width: 100vw; */\n  /* height: 100vh; */\n\n  padding: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),s=e(184),u=function(){return(0,s.jsx)(c,{children:(0,s.jsx)(o.iT,{visible:!0,height:"60",width:"60",color:"#a6a2c9",ariaLabel:"oval-loading",wrapperStyle:{},wrapperClass:""})})},d=function(n){var r=n.children,e=n.isLoading,t=n.error,o=void 0===t?null:t;return e?(0,s.jsx)(u,{}):o?(0,s.jsx)(i.Z,{message:o}):(0,s.jsx)(s.Fragment,{children:r})}},5903:function(n,r,e){e.d(r,{Z:function(){return c}});var t,i=e(168),o=(0,e(7924).ZP)("section")(t||(t=(0,i.Z)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n"]))),a=e(184),c=function(n){var r=n.children;return(0,a.jsx)(o,{children:r})}},7874:function(n,r,e){e.r(r),e.d(r,{default:function(){return V}});var t,i,o,a,c,s,u,d,l,p,f,h,x,v=e(1413),m=e(9439),Z=e(168),g=e(1087),j=e(7924),w=(0,j.ZP)("div")(t||(t=(0,Z.Z)(["\n  padding-bottom: 30px;\n  border-bottom: 1px solid gray;\n"]))),b=(0,j.ZP)("h2")(i||(i=(0,Z.Z)(["\n  font-size: 16px;\n"]))),y=(0,j.ZP)("ul")(o||(o=(0,Z.Z)(["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n\n  column-gap: 10px;\n"]))),P=(0,j.ZP)("li")(a||(a=(0,Z.Z)([""]))),_=(0,j.ZP)(g.NavLink)(c||(c=(0,Z.Z)(["\n  padding: 8px 0;\n  color: black;\n  text-decoration: underline;\n  transition: color 300ms ease-in-out;\n  font-size: 16px;\n\n  &.active {\n    color: red;\n  }\n\n  &:hover {\n    color: red;\n  }\n"]))),k=e(184),I=function(n){var r=n.location;return(0,k.jsxs)(w,{children:[(0,k.jsx)(b,{children:"Additional information:"}),(0,k.jsxs)(y,{children:[(0,k.jsx)(P,{children:(0,k.jsx)(_,{to:"cast",state:{from:r},children:"Cast"})}),(0,k.jsx)(P,{children:(0,k.jsx)(_,{to:"reviews",state:{from:r},children:"Reviews"})})]})]})},M=e(4316),z=(0,j.ZP)(g.Link)(s||(s=(0,Z.Z)(["\n  padding-top: 20px;\n  display: inline-flex;\n  align-items: center;\n  column-gap: 10px;\n\n  color: black;\n  transition: color 300ms ease-in-out;\n\n  &:hover {\n    color: red;\n  }\n"]))),J=function(n){var r=n.url;return(0,k.jsxs)(z,{to:r,children:[(0,k.jsx)(M.Wuc,{})," Go back"]})},L=e(2070),Y=e(5515),C=e(5462),N=(0,j.ZP)("div")(u||(u=(0,Z.Z)(["\n  border-bottom: 1px solid gray;\n  padding-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    column-gap: 30px;\n  }\n"]))),S=(0,j.ZP)("img")(d||(d=(0,Z.Z)(["\n  flex-shrink: 0;\n  display: block;\n\n  height: auto;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    width: 30%;\n  }\n"]))),Q=(0,j.ZP)("div")(l||(l=(0,Z.Z)(["\n  flex-grow: 1;\n"]))),W=(0,j.ZP)("h1")(p||(p=(0,Z.Z)(["\n  font-size: 30px;\n  margin-bottom: 20px;\n\n  @media screen and (max-width: 767.98px) {\n    margin-top: 20px;\n  }\n"]))),A=(0,j.ZP)("h2")(f||(f=(0,Z.Z)(["\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 20px;\n"]))),T=(0,j.ZP)("p")(h||(h=(0,Z.Z)([""]))),D=(0,j.ZP)("p")(x||(x=(0,Z.Z)([""]))),O=function(n){var r,e=n.title,t=n.poster_path,i=n.overview,o=n.genres;return(0,k.jsxs)(N,{children:[(0,k.jsx)(S,{src:t?(0,C.o)(t):"".concat("/goit-react-woolf-hw-05-movies","/no-image.png"),alt:e}),(0,k.jsxs)(Q,{children:[(0,k.jsx)(W,{children:e}),(0,k.jsx)(A,{children:"Overview"}),(0,k.jsx)(T,{children:i}),o&&o.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(A,{children:"Genres"}),(0,k.jsx)(D,{children:(null===(r=o[0])||void 0===r?void 0:r.name)&&o.map((function(n){var r=n.name;return(0,k.jsxs)("span",{children:[r,"\xa0"]},r)}))})]})]})]})},U=e(5903),G=e(2791),B=e(7689),F=e(4390),H=function(){var n,r,e,t=(0,G.useState)(null),i=(0,m.Z)(t,2),o=i[0],a=i[1],c=(0,G.useState)(!1),s=(0,m.Z)(c,2),u=s[0],d=s[1],l=(0,G.useState)(null),p=(0,m.Z)(l,2),f=p[0],h=p[1],x=(0,B.UO)().movieId,Z=(0,B.TH)();(0,G.useEffect)((function(){d(!0),h(null),(0,F.Pg)(x).then((function(n){a(n)})).catch((function(n){h(n.message)})).finally((function(){d(!1)}))}),[x]);var g=null!==(n=null===(r=Z.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/";return(0,k.jsxs)("div",{children:[(0,k.jsx)(L.Z,{children:(0,k.jsx)(J,{url:g})}),(0,k.jsxs)(Y.Z,{isLoading:u,error:f,children:[(0,k.jsx)(U.Z,{children:(0,k.jsx)(L.Z,{children:(0,k.jsx)(O,(0,v.Z)({},o))})}),(0,k.jsx)("div",{children:(0,k.jsx)(L.Z,{children:(0,k.jsx)(I,{location:null===(e=Z.state)||void 0===e?void 0:e.from})})})]}),(0,k.jsx)(U.Z,{children:(0,k.jsx)(L.Z,{children:(0,k.jsx)(B.j3,{})})})]})},V=function(){return(0,k.jsx)(H,{})}},4390:function(n,r,e){e.d(r,{IQ:function(){return p},Jh:function(){return f},Pg:function(){return l},Zh:function(){return d},yE:function(){return u}});var t=e(5861),i=e(7757),o=e.n(i),a=e(5294),c=e(6210),s=a.Z.create({baseURL:c._n,headers:{Authorization:"Bearer ".concat(c.LA)},params:{language:"en-US"}}),u=function(){var n=(0,t.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/movie/day");case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie",{params:{include_adult:!1,query:r,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(r));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},6210:function(n,r,e){e.d(r,{LA:function(){return i},MH:function(){return o},_n:function(){return t}});var t="https://api.themoviedb.org/3",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTM2Y2U5NDg4MjY2MWVjZmQ3NWQyYzIyZTg5MDVhYSIsInN1YiI6IjYzMzQ1NmYwZDQ2NTM3MDA4MmFhMzMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Yo7St9bT1yiAwYdr2Wq1_-3d7SD_Cu2hBotpJshr_I",o="https://image.tmdb.org/t/p/w500"},5462:function(n,r,e){e.d(r,{o:function(){return i}});var t=e(6210),i=function(n){return t.MH+n}}}]);
//# sourceMappingURL=874.763f8f8a.chunk.js.map