import{S as j,i as F,s as G,k as g,a as B,e as L,U as I,l as v,h as _,c as E,n as w,E as P,b as h,g as S,d as q,q as b,m as A,r as k,M,y as H,z as O,A as z,u as T,B as C}from"../chunks/index.17259807.js";import{a as U,P as J}from"../chunks/Pagination.78eabc18.js";import{p as D,b as K}from"../chunks/config.4fc42ece.js";function N(r){let o,n,m,l,i,u,a,$;return{c(){o=g("h1"),n=b("Oops!"),m=B(),l=g("p"),i=b("Sorry, no posts to show here."),u=B(),a=g("a"),$=b("Back to blog"),this.h()},l(e){o=v(e,"H1",{});var c=A(o);n=k(c,"Oops!"),c.forEach(_),m=E(e),l=v(e,"P",{});var s=A(l);i=k(s,"Sorry, no posts to show here."),s.forEach(_),u=E(e),a=v(e,"A",{href:!0});var f=A(a);$=k(f,"Back to blog"),f.forEach(_),this.h()},h(){w(a,"href","/blog")},m(e,c){h(e,o,c),P(o,n),h(e,m,c),h(e,l,c),P(l,i),h(e,u,c),h(e,a,c),P(a,$)},p:M,i:M,o:M,d(e){e&&_(o),e&&_(m),e&&_(l),e&&_(u),e&&_(a)}}}function Q(r){let o,n,m,l,i,u,a,$,e,c,s,f,d,y;return e=new U({props:{currentPage:r[2],totalPosts:r[3]}}),s=new J({props:{posts:r[4]}}),d=new U({props:{currentPage:r[2],totalPosts:r[3]}}),{c(){o=g("h1"),n=b("Posts "),m=b(r[1]),l=b("–"),i=b(r[0]),u=b(" of "),a=b(r[3]),$=B(),H(e.$$.fragment),c=B(),H(s.$$.fragment),f=B(),H(d.$$.fragment)},l(t){o=v(t,"H1",{});var p=A(o);n=k(p,"Posts "),m=k(p,r[1]),l=k(p,"–"),i=k(p,r[0]),u=k(p," of "),a=k(p,r[3]),p.forEach(_),$=E(t),O(e.$$.fragment,t),c=E(t),O(s.$$.fragment,t),f=E(t),O(d.$$.fragment,t)},m(t,p){h(t,o,p),P(o,n),P(o,m),P(o,l),P(o,i),P(o,u),P(o,a),h(t,$,p),z(e,t,p),h(t,c,p),z(s,t,p),h(t,f,p),z(d,t,p),y=!0},p(t,p){(!y||p&2)&&T(m,t[1]),(!y||p&1)&&T(i,t[0])},i(t){y||(S(e.$$.fragment,t),S(s.$$.fragment,t),S(d.$$.fragment,t),y=!0)},o(t){q(e.$$.fragment,t),q(s.$$.fragment,t),q(d.$$.fragment,t),y=!1},d(t){t&&_(o),t&&_($),C(e,t),t&&_(c),C(s,t),t&&_(f),C(d,t)}}}function R(r){let o,n,m,l,i,u,a;document.title=o="Blog - page "+r[2];const $=[Q,N],e=[];function c(s,f){return s[4].length?0:1}return l=c(r),i=e[l]=$[l](r),{c(){n=g("meta"),m=B(),i.c(),u=L(),this.h()},l(s){const f=I("svelte-19tq2vo",document.head);n=v(f,"META",{"data-key":!0,name:!0,content:!0}),f.forEach(_),m=E(s),i.l(s),u=L(),this.h()},h(){w(n,"data-key","description"),w(n,"name","description"),w(n,"content",K)},m(s,f){P(document.head,n),h(s,m,f),e[l].m(s,f),h(s,u,f),a=!0},p(s,[f]){(!a||f&4)&&o!==(o="Blog - page "+s[2])&&(document.title=o),i.p(s,f)},i(s){a||(S(i),a=!0)},o(s){q(i),a=!1},d(s){_(n),s&&_(m),e[l].d(s),s&&_(u)}}}function V(r,o,n){let m,l,{data:i}=o;const{page:u,totalPosts:a,posts:$}=i;return r.$$set=e=>{"data"in e&&n(5,i=e.data)},n(1,m=u*D-(D-1)||1),n(0,l=Math.min(u*D,a)),[l,m,u,a,$,i]}class Z extends j{constructor(o){super(),F(this,o,V,R,G,{data:5})}}export{Z as component};
