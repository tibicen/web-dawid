import{S as D,i as F,s as H,e as w,k as M,t as j,c as b,a as y,m as q,h as C,d as h,b as _,g as E,J as g,j as J,n as z,L as S,r as v,x as R,y as V,z as $,p as k,C as A,q as G,O as L,l as I,o as P}from"../chunks/index-e5ced12e.js";import{N as K}from"../chunks/Nav-d64573cd.js";/* empty css                                                   *//* empty css                                                    *//* empty css                                                      */function U(c){let e,s;return{c(){e=w("iframe"),this.h()},l(t){e=b(t,"IFRAME",{title:!0,src:!0,seamless:!0,frameborder:!0,class:!0}),y(e).forEach(h),this.h()},h(){_(e,"title",c[0]),S(e.src,s=c[2])||_(e,"src",s),e.allowFullscreen=!0,_(e,"seamless",""),_(e,"frameborder","0"),_(e,"class","svelte-1i3qz1v")},m(t,f){E(t,e,f)},p(t,f){f&1&&_(e,"title",t[0]),f&4&&!S(e.src,s=t[2])&&_(e,"src",s)},d(t){t&&h(e)}}}function W(c){let e,s;return{c(){e=w("video"),this.h()},l(t){e=b(t,"VIDEO",{src:!0}),y(e).forEach(h),this.h()},h(){S(e.src,s="")||_(e,"src",s)},m(t,f){E(t,e,f)},p:z,d(t){t&&h(e)}}}function X(c){let e,s,t,f,m,n,d,l;function i(a,r){if(r&4&&(s=null),r&4&&(t=null),s==null&&(s=!!a[2].endsWith(".webm")),s)return W;if(t==null&&(t=!!a[2].startsWith("https://www.youtube.com/embed/")),t)return U}let u=i(c,-1),o=u&&u(c);return{c(){e=w("section"),o&&o.c(),f=M(),m=w("h2"),n=j(c[0]),d=M(),l=w("p"),this.h()},l(a){e=b(a,"SECTION",{class:!0});var r=y(e);o&&o.l(r),f=q(r),m=b(r,"H2",{class:!0});var p=y(m);n=C(p,c[0]),p.forEach(h),d=q(r),l=b(r,"P",{});var Q=y(l);Q.forEach(h),r.forEach(h),this.h()},h(){_(m,"class","svelte-1i3qz1v"),_(e,"class","svelte-1i3qz1v")},m(a,r){E(a,e,r),o&&o.m(e,null),g(e,f),g(e,m),g(m,n),g(e,d),g(e,l),l.innerHTML=c[1]},p(a,[r]){u===(u=i(a,r))&&o?o.p(a,r):(o&&o.d(1),o=u&&u(a),o&&(o.c(),o.m(e,f))),r&1&&J(n,a[0]),r&2&&(l.innerHTML=a[1])},i:z,o:z,d(a){a&&h(e),o&&o.d()}}}function Y(c,e,s){let{title:t}=e,{description:f}=e,{video:m}=e;return c.$$set=n=>{"title"in n&&s(0,t=n.title),"description"in n&&s(1,f=n.description),"video"in n&&s(2,m=n.video)},[t,f,m]}class Z extends D{constructor(e){super(),F(this,e,Y,X,H,{title:0,description:1,video:2})}}function N(c,e,s){const t=c.slice();return t[1]=e[s][0],t[2]=e[s][1],t}function O(c,e,s){const t=c.slice();return t[5]=e[s][0],t[6]=e[s][1],t[7]=e[s][2],t}function B(c){let e,s;return e=new Z({props:{title:c[5],description:c[6],video:c[7]}}),{c(){R(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,f){$(e,t,f),s=!0},p:z,i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function T(c){let e,s,t=c[1]+"",f,m,n,d,l=c[2],i=[];for(let o=0;o<l.length;o+=1)i[o]=B(O(c,l,o));const u=o=>k(i[o],1,1,()=>{i[o]=null});return{c(){e=w("section"),s=w("h2"),f=j(t),m=M();for(let o=0;o<i.length;o+=1)i[o].c();n=M(),this.h()},l(o){e=b(o,"SECTION",{class:!0});var a=y(e);s=b(a,"H2",{class:!0});var r=y(s);f=C(r,t),r.forEach(h),m=q(a);for(let p=0;p<i.length;p+=1)i[p].l(a);n=q(a),a.forEach(h),this.h()},h(){_(s,"class","svelte-11uoz0i"),_(e,"class","svelte-11uoz0i")},m(o,a){E(o,e,a),g(e,s),g(s,f),g(e,m);for(let r=0;r<i.length;r+=1)i[r].m(e,null);g(e,n),d=!0},p(o,a){if(a&1){l=o[2];let r;for(r=0;r<l.length;r+=1){const p=O(o,l,r);i[r]?(i[r].p(p,a),v(i[r],1)):(i[r]=B(p),i[r].c(),v(i[r],1),i[r].m(e,n))}for(P(),r=l.length;r<i.length;r+=1)u(r);G()}},i(o){if(!d){for(let a=0;a<l.length;a+=1)v(i[a]);d=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)k(i[a]);d=!1},d(o){o&&h(e),L(i,o)}}}function x(c){let e,s,t,f;e=new K({props:{title:"Motion Picture"}});let m=Object.entries(c[0]),n=[];for(let l=0;l<m.length;l+=1)n[l]=T(N(c,m,l));const d=l=>k(n[l],1,1,()=>{n[l]=null});return{c(){R(e.$$.fragment),s=M();for(let l=0;l<n.length;l+=1)n[l].c();t=I()},l(l){V(e.$$.fragment,l),s=q(l);for(let i=0;i<n.length;i+=1)n[i].l(l);t=I()},m(l,i){$(e,l,i),E(l,s,i);for(let u=0;u<n.length;u+=1)n[u].m(l,i);E(l,t,i),f=!0},p(l,[i]){if(i&1){m=Object.entries(l[0]);let u;for(u=0;u<m.length;u+=1){const o=N(l,m,u);n[u]?(n[u].p(o,i),v(n[u],1)):(n[u]=T(o),n[u].c(),v(n[u],1),n[u].m(t.parentNode,t))}for(P(),u=m.length;u<n.length;u+=1)d(u);G()}},i(l){if(!f){v(e.$$.fragment,l);for(let i=0;i<m.length;i+=1)v(n[i]);f=!0}},o(l){k(e.$$.fragment,l),n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)k(n[i]);f=!1},d(l){A(e,l),l&&h(s),L(n,l),l&&h(t)}}}function ee(c){return[{Experiments:[["Make It Real","Radical Notions' music video","https://www.youtube.com/embed/pmNevQJ6GB8"],["Daylight simulation","","https://www.youtube.com/embed/koyMn6GnZqA"],["Smoke Shader","","https://www.youtube.com/embed/qvhYTov4et8"],["Single Family House animation","","https://www.youtube.com/embed/KuOMnfdnQeM"],["Daylight simulation","","https://www.youtube.com/embed/BByMKApdfOs"],["Interior daylight simulation","","https://www.youtube.com/embed/v4oU3dsVgXM"],["Grass test","","https://www.youtube.com/embed/ISQMb-oD5FU"],["Diploma project","","https://www.youtube.com/embed/SX3bfg0TEnY"]],Moments:[["Islandia","","https://www.youtube.com/embed/FZ_SllRNinI"]]}]}class ne extends D{constructor(e){super(),F(this,e,ee,x,H,{})}}export{ne as default};
