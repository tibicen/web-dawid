import{s as G,n as q}from"../chunks/scheduler.a117fe6f.js";import{S as B,i as C,r as k,s as _,g as O,e as g,u as x,c as $,h as S,k as A,v as z,a as f,d as b,b as P,t as u,f as w,w as j,C as R,p as T}from"../chunks/index.5faa0350.js";import{e as v}from"../chunks/each.e59479a4.js";import{N as V}from"../chunks/Nav.10ebddd8.js";import{G as D}from"../chunks/Gallery.7c45fc9d.js";function y(o,r,l){const n=o.slice();return n[1]=r[l][0],n[2]=r[l][1],n}function d(o){let r,l;return r=new D({props:{title:o[1],images:o[2],path:F,titlecenter:!0}}),{c(){k(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,p){z(r,n,p),l=!0},p:q,i(n){l||(b(r.$$.fragment,n),l=!0)},o(n){u(r.$$.fragment,n),l=!1},d(n){j(r,n)}}}function E(o){let r,l,n,p,c,m;r=new V({props:{title:"Graphics"}});let i=v(Object.entries(o[0])),t=[];for(let e=0;e<i.length;e+=1)t[e]=d(y(o,i,e));const N=e=>u(t[e],1,1,()=>{t[e]=null});return{c(){k(r.$$.fragment),l=_(),n=O("br"),p=_();for(let e=0;e<t.length;e+=1)t[e].c();c=g(),this.h()},l(e){x(r.$$.fragment,e),l=$(e),n=S(e,"BR",{class:!0}),p=$(e);for(let s=0;s<t.length;s+=1)t[s].l(e);c=g(),this.h()},h(){A(n,"class","svelte-ujw3q0")},m(e,s){z(r,e,s),f(e,l,s),f(e,n,s),f(e,p,s);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,s);f(e,c,s),m=!0},p(e,[s]){if(s&1){i=v(Object.entries(e[0]));let a;for(a=0;a<i.length;a+=1){const h=y(e,i,a);t[a]?(t[a].p(h,s),b(t[a],1)):(t[a]=d(h),t[a].c(),b(t[a],1),t[a].m(c.parentNode,c))}for(T(),a=i.length;a<t.length;a+=1)N(a);P()}},i(e){if(!m){b(r.$$.fragment,e);for(let s=0;s<i.length;s+=1)b(t[s]);m=!0}},o(e){u(r.$$.fragment,e),t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)u(t[s]);m=!1},d(e){e&&(w(l),w(n),w(p),w(c)),j(r,e),R(t,e)}}}let F="/images/graphic";function H(o){return[{"Architectural Visualisation":["arch-1719-final-0003.webp","bf2-000.webp","bf2-003.webp","rewitalizacja-foyer.webp","high-five-001.webp","nafta-002.webp","dabki-001.webp","dabki-005.webp","dabki-008.webp","oawa1.webp","oawa4.webp","single-family-house-1.webp","single-family-house-3.webp","single-family-house-4.webp","wabrzych0.webp","wabrzych3.webp","architecture.webp","arch-1.webp","exterior-architecture.webp","pers_wnetrze.webp","pers_wnetrze2.webp","arch-jednorodzinka.webp"],Nature:["mountain-forest_24227633940_o.webp","environment-test.webp","environment-test2.webp","grass-lightning-test.webp"],Tests:["tests-003.webp","tests-004.webp","tests-005.webp","tests-001.webp","tests-002.webp","volumetrics-blender-1.webp","volumetrics-blender-2.webp","volumetrics-blender-3.webp","volumetrics-blender-axonometry-1.webp","volumetrics-blender-axonometry-2.webp","volumetrics-blender-axonometry-3.webp"]}]}class Q extends B{constructor(r){super(),C(this,r,H,E,G,{})}}export{Q as component};
