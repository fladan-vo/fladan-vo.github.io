import{S as T,i as U,s as j,k as p,q as y,a as L,l as f,m as c,r as S,h as s,c as P,n as N,b as m,E as o,u as O,M as R,J as w}from"../chunks/index.17259807.js";import{d as z}from"../chunks/singletons.9ebacc2b.js";const B=()=>{const r=z;return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},updated:r.updated}},D={subscribe(r){return B().page.subscribe(r)}};function F(r){let a,l=r[0].status+"",i,_,n,v=r[0].error.message+"",$,g,u,E,H,M,k,b,d,h,q;return{c(){a=p("h2"),i=y(l),_=L(),n=p("p"),$=y(v),g=L(),u=p("p"),E=p("strong"),H=y("Sorry!"),M=y(" Maybe try one of these links?"),k=L(),b=p("ul"),d=p("li"),h=p("a"),q=y("Home"),this.h()},l(e){a=f(e,"H2",{});var t=c(a);i=S(t,l),t.forEach(s),_=P(e),n=f(e,"P",{class:!0});var A=c(n);$=S(A,v),A.forEach(s),g=P(e),u=f(e,"P",{});var x=c(u);E=f(x,"STRONG",{});var C=c(E);H=S(C,"Sorry!"),C.forEach(s),M=S(x," Maybe try one of these links?"),x.forEach(s),k=P(e),b=f(e,"UL",{});var G=c(b);d=f(G,"LI",{});var I=c(d);h=f(I,"A",{href:!0});var J=c(h);q=S(J,"Home"),J.forEach(s),I.forEach(s),G.forEach(s),this.h()},h(){N(n,"class","subhead"),N(h,"href","/")},m(e,t){m(e,a,t),o(a,i),m(e,_,t),m(e,n,t),o(n,$),m(e,g,t),m(e,u,t),o(u,E),o(E,H),o(u,M),m(e,k,t),m(e,b,t),o(b,d),o(d,h),o(h,q)},p(e,[t]){t&1&&l!==(l=e[0].status+"")&&O(i,l),t&1&&v!==(v=e[0].error.message+"")&&O($,v)},i:R,o:R,d(e){e&&s(a),e&&s(_),e&&s(n),e&&s(g),e&&s(u),e&&s(k),e&&s(b)}}}function K(r,a,l){let i;return w(r,D,_=>l(0,i=_)),[i]}let W=class extends T{constructor(a){super(),U(this,a,K,F,j,{})}};export{W as component};
