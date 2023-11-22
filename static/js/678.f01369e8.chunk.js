"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[678],{409:function(e,n,t){t.d(n,{Hx:function(){return v},PQ:function(){return d},Tg:function(){return u},Y5:function(){return l},bI:function(){return o}});var r=t(861),a=t(757),i=t.n(a),s=t(294),c="bbc7a6a5746daf74b8073dd6ff8b49f7";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},678:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(861),a=t(683),i=t(439),s=t(757),c=t.n(s),u=t(689),o=t(87),l=t(791),d=t(128),v="BackLink_BackLink__64hbi",p=t(184),f=function(e){var n=e.to,t=e.children;return(0,p.jsxs)(o.rU,{className:v,to:n,children:[(0,p.jsx)(d.jTe,{size:"24"}),t]})},h=t(883),x=t(409),_=t(686),g=t.n(_),m="MovieDetails_MainDetails__OW0AD",j="MovieDetails_Box__AXGFq",w="MovieDetails_Image__V6K1r",k="MovieDetails_GenresList__V+NBJ",b="MovieDetails_Title__dmr4s",y="MovieDetails_OriginalTitle__HvjJe",Z="MovieDetails_AdditionalLinks__h5-5N",N=function(){var e,n,t,s=(0,u.UO)().movieId,d=(0,l.useState)(null),v=(0,i.Z)(d,2),_=v[0],N=v[1],S=(0,l.useState)(!1),U=(0,i.Z)(S,2),D=U[0],M=U[1],T=(0,u.TH)(),L=null!==(e=null===(n=(0,l.useRef)((0,a.Z)({},T)).current)||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";if((0,l.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),e.next=4,(0,x.Y5)(s);case 4:if(0!==(n=e.sent).length){e.next=8;break}return g().Notify.warning("Sorry, details about this movie are not available."),e.abrupt("return");case 8:N(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),g().Notify.failure("Ooops... Something went wrong! Please, try again.");case 14:return e.prev=14,M(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),_){var O=_.title,A=_.poster_path,B=_.original_title,G=_.release_date,q=_.vote_average,C=_.overview,H=_.genres;return(0,p.jsxs)("main",{children:[(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)(f,{to:L,children:"Go back"}),D&&(0,p.jsx)(h.a,{}),_&&(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{className:w,src:A?"https://image.tmdb.org/t/p/w500".concat(A):"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/original.png",alt:B})}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h1",{className:b,children:[O," (",G.slice(0,4),")"]}),O!==B&&(0,p.jsx)("p",{className:y,children:B}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*q),"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:C||"This movie has no overview yet."}),(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("ul",{className:k,children:0!==H.length?H.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)})):"No genres assigned."})]})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:Z,children:[(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,p.jsx)(l.Suspense,{fallback:(0,p.jsx)(h.a,{}),children:(0,p.jsx)(u.j3,{})})]})]})}}}}]);
//# sourceMappingURL=678.f01369e8.chunk.js.map