import{S as O,i as z,s as A,w as D,a as E,k as m,x as G,c as b,l as d,m as v,h as u,n as w,y as H,b as P,G as f,f as T,t as V,z as j,O as F,q as $,r as y,B as J}from"../../../chunks/index-5cf732b6.js";import{N as K}from"../../../chunks/Nav-cd4a338e.js";function C(i,e,n){const s=i.slice();return s[2]=e[n],s}function I(i){let e,n,s=i[2].title+"",o,r,_,l=i[2].summary+"",t,c,a,h,S=i[2].date+"",k,x;return{c(){e=m("a"),n=m("h2"),o=$(s),r=E(),_=m("p"),t=$(l),c=E(),a=m("p"),h=$("posted on "),k=$(S),x=E(),this.h()},l(g){e=d(g,"A",{href:!0,class:!0});var p=v(e);n=d(p,"H2",{});var q=v(n);o=y(q,s),q.forEach(u),r=b(p),_=d(p,"P",{});var B=v(_);t=y(B,l),B.forEach(u),c=b(p),a=d(p,"P",{});var N=v(a);h=y(N,"posted on "),k=y(N,S),N.forEach(u),x=b(p),p.forEach(u),this.h()},h(){w(e,"href",`blog/${i[2].slug}`),w(e,"class","svelte-o9rpw5")},m(g,p){P(g,e,p),f(e,n),f(n,o),f(e,r),f(e,_),f(_,t),f(e,c),f(e,a),f(a,h),f(a,k),f(e,x)},p:J,d(g){g&&u(e)}}}function L(i){let e,n,s,o,r;e=new K({props:{title:"Blog"}});let _=i[0],l=[];for(let t=0;t<_.length;t+=1)l[t]=I(C(i,_,t));return{c(){D(e.$$.fragment),n=E(),s=m("section"),o=m("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){G(e.$$.fragment,t),n=b(t),s=d(t,"SECTION",{class:!0});var c=v(s);o=d(c,"DIV",{class:!0});var a=v(o);for(let h=0;h<l.length;h+=1)l[h].l(a);a.forEach(u),c.forEach(u),this.h()},h(){w(o,"class","grid svelte-o9rpw5"),w(s,"class","one-column")},m(t,c){H(e,t,c),P(t,n,c),P(t,s,c),f(s,o);for(let a=0;a<l.length;a+=1)l[a].m(o,null);r=!0},p(t,[c]){if(c&1){_=t[0];let a;for(a=0;a<_.length;a+=1){const h=C(t,_,a);l[a]?l[a].p(h,c):(l[a]=I(h),l[a].c(),l[a].m(o,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=_.length}},i(t){r||(T(e.$$.fragment,t),r=!0)},o(t){V(e.$$.fragment,t),r=!1},d(t){j(e,t),t&&u(n),t&&u(s),F(l,t)}}}function M(i,e,n){let{data:s}=e,o=s.posts.filter(r=>r);return i.$$set=r=>{"data"in r&&n(1,s=r.data)},[o,s]}class U extends O{constructor(e){super(),z(this,e,M,L,A,{data:1})}}export{U as default};
