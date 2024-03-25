import{s as P,n as k,h as N}from"./scheduler.a117fe6f.js";import{S as V,i as z,g as H,s as b,r as v,h as I,j as S,c as $,u as w,f as c,k as p,a as _,x as B,v as y,d as m,t as h,w as E,m as A,n as J,F as q,o as K,e as g,p as D,b as F,C as L,H as M,E as Q}from"./index.5faa0350.js";import{e as O}from"./each.e59479a4.js";import{G as R}from"./Grid.ad131ecc.js";import{I as C}from"./Image.52ee59b6.js";/* empty css                                              */function T(s,t,n){const l=s.slice();return l[4]=t[n],l}function W(s){let t,n;return{c(){t=H("h2"),n=A(s[0]),this.h()},l(l){t=I(l,"H2",{class:!0});var e=S(t);n=J(e,s[0]),e.forEach(c),this.h()},h(){p(t,"class","svelte-1ak9eck"),q(t,"titlecenter",s[3])},m(l,e){_(l,t,e),B(t,n)},p(l,e){e&1&&K(n,l[0]),e&8&&q(t,"titlecenter",l[3])},d(l){l&&c(t)}}}function U(s){let t,n,l;return t=new C({props:{cover:s[1]+"/"+s[4]}}),{c(){v(t.$$.fragment),n=b()},l(e){w(t.$$.fragment,e),n=$(e)},m(e,a){y(t,e,a),_(e,n,a),l=!0},p(e,a){const r={};a&6&&(r.cover=e[1]+"/"+e[4]),t.$set(r)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){e&&c(n),E(t,e)}}}function X(s){let t,n,l;return t=new C({props:{cover:s[1]+"/"+s[4],klasa:"symmetry"}}),{c(){v(t.$$.fragment),n=b()},l(e){w(t.$$.fragment,e),n=$(e)},m(e,a){y(t,e,a),_(e,n,a),l=!0},p(e,a){const r={};a&6&&(r.cover=e[1]+"/"+e[4]),t.$set(r)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){e&&c(n),E(t,e)}}}function Y(s){let t,n,l;return t=new C({props:{cover:s[1]+"/"+s[4],klasa:"panorama"}}),{c(){v(t.$$.fragment),n=b()},l(e){w(t.$$.fragment,e),n=$(e)},m(e,a){y(t,e,a),_(e,n,a),l=!0},p(e,a){const r={};a&6&&(r.cover=e[1]+"/"+e[4]),t.$set(r)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){e&&c(n),E(t,e)}}}function Z(s){let t,n=s[4]+"",l;return{c(){t=new M(!1),l=g(),this.h()},l(e){t=Q(e,!1),l=g(),this.h()},h(){t.a=l},m(e,a){t.m(n,e,a),_(e,l,a)},p(e,a){a&4&&n!==(n=e[4]+"")&&t.p(n)},i:k,o:k,d(e){e&&(c(l),t.d())}}}function x(s){let t,n;return{c(){t=H("video"),this.h()},l(l){t=I(l,"VIDEO",{prelaod:!0,src:!0,type:!0,class:!0}),S(t).forEach(c),this.h()},h(){t.controls=!0,t.autoplay=!0,p(t,"prelaod",""),t.loop=!0,N(t.src,n=s[1]+"/"+s[4])||p(t,"src",n),p(t,"type","video/webm"),p(t,"class","svelte-1ak9eck")},m(l,e){_(l,t,e)},p(l,e){e&6&&!N(t.src,n=l[1]+"/"+l[4])&&p(t,"src",n)},i:k,o:k,d(l){l&&c(t)}}}function j(s){let t,n,l,e,a,r;const i=[x,Z,Y,X,U],o=[];function d(f,u){return u&4&&(t=null),u&4&&(n=null),t==null&&(t=!!f[4].endsWith(".webm")),t?0:(n==null&&(n=!!f[4].endsWith("</iframe>")),n?1:f[0]==="Panoramas"?2:f[0]==="Symmetry"?3:4)}return l=d(s,-1),e=o[l]=i[l](s),{c(){e.c(),a=g()},l(f){e.l(f),a=g()},m(f,u){o[l].m(f,u),_(f,a,u),r=!0},p(f,u){let G=l;l=d(f,u),l===G?o[l].p(f,u):(D(),h(o[G],1,1,()=>{o[G]=null}),F(),e=o[l],e?e.p(f,u):(e=o[l]=i[l](f),e.c()),m(e,1),e.m(a.parentNode,a))},i(f){r||(m(e),r=!0)},o(f){h(e),r=!1},d(f){f&&c(a),o[l].d(f)}}}function ee(s){let t,n,l=O(s[2]),e=[];for(let r=0;r<l.length;r+=1)e[r]=j(T(s,l,r));const a=r=>h(e[r],1,1,()=>{e[r]=null});return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=g()},l(r){for(let i=0;i<e.length;i+=1)e[i].l(r);t=g()},m(r,i){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(r,i);_(r,t,i),n=!0},p(r,i){if(i&7){l=O(r[2]);let o;for(o=0;o<l.length;o+=1){const d=T(r,l,o);e[o]?(e[o].p(d,i),m(e[o],1)):(e[o]=j(d),e[o].c(),m(e[o],1),e[o].m(t.parentNode,t))}for(D(),o=l.length;o<e.length;o+=1)a(o);F()}},i(r){if(!n){for(let i=0;i<l.length;i+=1)m(e[i]);n=!0}},o(r){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)h(e[i]);n=!1},d(r){r&&c(t),L(e,r)}}}function te(s){let t,n,l,e,a=s[0]&&W(s);return l=new R({props:{kwadraty:!0,$$slots:{default:[ee]},$$scope:{ctx:s}}}),{c(){t=H("section"),a&&a.c(),n=b(),v(l.$$.fragment),this.h()},l(r){t=I(r,"SECTION",{class:!0});var i=S(t);a&&a.l(i),n=$(i),w(l.$$.fragment,i),i.forEach(c),this.h()},h(){p(t,"class","svelte-1ak9eck")},m(r,i){_(r,t,i),a&&a.m(t,null),B(t,n),y(l,t,null),e=!0},p(r,[i]){r[0]?a?a.p(r,i):(a=W(r),a.c(),a.m(t,n)):a&&(a.d(1),a=null);const o={};i&135&&(o.$$scope={dirty:i,ctx:r}),l.$set(o)},i(r){e||(m(l.$$.fragment,r),e=!0)},o(r){h(l.$$.fragment,r),e=!1},d(r){r&&c(t),a&&a.d(),E(l)}}}function le(s,t,n){let{title:l=""}=t,{path:e=""}=t,{images:a}=t,{titlecenter:r}=t;return s.$$set=i=>{"title"in i&&n(0,l=i.title),"path"in i&&n(1,e=i.path),"images"in i&&n(2,a=i.images),"titlecenter"in i&&n(3,r=i.titlecenter)},[l,e,a,r]}class fe extends V{constructor(t){super(),z(this,t,le,te,P,{title:0,path:1,images:2,titlecenter:3})}}export{fe as G};
