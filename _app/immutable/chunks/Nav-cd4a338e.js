import{S as U,i as F,s as J,k as f,a as b,l as h,m as u,c as M,h as n,n as t,N as z,b as B,G as c,B as C,K as O,q as P,r as Q,u as R}from"./index-5cf732b6.js";function G(d){let e,l,i,a;return{c(){e=f("li"),l=f("a"),i=f("img"),this.h()},l(s){e=h(s,"LI",{class:!0});var r=u(e);l=h(r,"A",{href:!0,class:!0});var g=u(l);i=h(g,"IMG",{alt:!0,src:!0,class:!0}),g.forEach(n),r.forEach(n),this.h()},h(){t(i,"alt","Logo"),O(i.src,a="/svg/logo-dh.svg")||t(i,"src",a),t(i,"class","svelte-jld698"),t(l,"href","/#start"),t(l,"class","nav-link logo active svelte-jld698"),t(e,"class","svelte-jld698")},m(s,r){B(s,e,r),c(e,l),c(l,i)},d(s){s&&n(e)}}}function S(d){let e,l,i;return{c(){e=f("div"),l=f("a"),i=P(d[1]),this.h()},l(a){e=h(a,"DIV",{class:!0});var s=u(e);l=h(s,"A",{href:!0,class:!0});var r=u(l);i=Q(r,d[1]),r.forEach(n),s.forEach(n),this.h()},h(){t(l,"href",d[2]),t(l,"class","tt svelte-jld698"),t(e,"class","submenu svelte-jld698"),z(e,"title",d[1])},m(a,s){B(a,e,s),c(e,l),c(l,i)},p(a,s){s&2&&R(i,a[1]),s&4&&t(l,"href",a[2]),s&2&&z(e,"title",a[1])},d(a){a&&n(e)}}}function W(d){let e,l,i,a,s,r,g,p,A,k,j,I,E,L,H,v=d[0]&&G(),o=d[1]&&S(d);return{c(){e=f("nav"),l=f("ul"),v&&v.c(),i=b(),a=f("li"),s=f("a"),r=b(),g=f("li"),p=f("a"),A=b(),k=f("li"),j=f("a"),I=b(),E=f("li"),L=f("a"),H=b(),o&&o.c(),this.h()},l(_){e=h(_,"NAV",{id:!0,class:!0});var w=u(e);l=h(w,"UL",{class:!0});var m=u(l);v&&v.l(m),i=M(m),a=h(m,"LI",{class:!0});var N=u(a);s=h(N,"A",{href:!0,class:!0});var x=u(s);x.forEach(n),N.forEach(n),r=M(m),g=h(m,"LI",{class:!0});var T=u(g);p=h(T,"A",{href:!0,class:!0});var y=u(p);y.forEach(n),T.forEach(n),A=M(m),k=h(m,"LI",{class:!0});var V=u(k);j=h(V,"A",{href:!0,class:!0});var D=u(j);D.forEach(n),V.forEach(n),I=M(m),E=h(m,"LI",{class:!0});var q=u(E);L=h(q,"A",{href:!0,class:!0});var K=u(L);K.forEach(n),q.forEach(n),m.forEach(n),H=M(w),o&&o.l(w),w.forEach(n),this.h()},h(){t(s,"href","/#portfolio"),t(s,"class","nav-link svelte-jld698"),t(a,"class","svelte-jld698"),t(p,"href","/#about"),t(p,"class","nav-link svelte-jld698"),t(g,"class","svelte-jld698"),t(j,"href","/#contact"),t(j,"class","nav-link svelte-jld698"),t(k,"class","svelte-jld698"),t(L,"href","/blog"),t(L,"class","nav-link svelte-jld698"),t(E,"class","svelte-jld698"),t(l,"class","svelte-jld698"),t(e,"id","nav"),t(e,"class","svelte-jld698"),z(e,"top",d[0])},m(_,w){B(_,e,w),c(e,l),v&&v.m(l,null),c(l,i),c(l,a),c(a,s),s.innerHTML=X,c(l,r),c(l,g),c(g,p),p.innerHTML=Y,c(l,A),c(l,k),c(k,j),j.innerHTML=Z,c(l,I),c(l,E),c(E,L),L.innerHTML=$,c(e,H),o&&o.m(e,null)},p(_,[w]){_[0]?v||(v=G(),v.c(),v.m(l,i)):v&&(v.d(1),v=null),_[1]?o?o.p(_,w):(o=S(_),o.c(),o.m(e,null)):o&&(o.d(1),o=null),w&1&&z(e,"top",_[0])},i:C,o:C,d(_){_&&n(e),v&&v.d(),o&&o.d()}}}let X='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.59 4.59C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-1.41-1.41z" /></svg>',Y='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" /></svg>',Z='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" /></svg>',$='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20.39 7.1023-3.4925-3.4925 1.146-1.146c0.30923-0.30923 0.69122-0.46385 1.146-0.46385 0.45475 0 0.83674 0.15462 1.146 0.46385l1.2005 1.2005c0.30923 0.30923 0.46385 0.69122 0.46385 1.146 0 0.45475-0.15462 0.83674-0.46385 1.146zm-1.146 1.146-13.752 13.752h-3.4925v-3.4925l13.752-13.752z" /></svg>';function ee(d,e,l){let{top:i=!0}=e,{title:a=!1}=e,{link:s=""}=e;return d.$$set=r=>{"top"in r&&l(0,i=r.top),"title"in r&&l(1,a=r.title),"link"in r&&l(2,s=r.link)},[i,a,s]}class se extends U{constructor(e){super(),F(this,e,ee,W,J,{top:0,title:1,link:2})}}export{se as N};
