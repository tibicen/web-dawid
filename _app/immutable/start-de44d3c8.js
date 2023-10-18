import{S as nt,i as at,s as rt,a as ot,e as N,c as it,b as M,g as Z,t as U,d as Q,f as V,h as C,j as st,o as Oe,k as lt,l as ct,m as ft,n as Ee,p as J,q as ut,r as pt,u as dt,v as G,w as H,x as oe,y as K,z,A as pe}from"./chunks/index-5cf732b6.js";import{S as et,I as W,g as ze,f as Je,a as ke,b as de,s as X,i as We,c as he,P as Ye,d as ht,e as _t,h as mt}from"./chunks/singletons-ca1e47c6.js";import{_ as D}from"./chunks/preload-helper-41c905a7.js";import{R as Xe,H as Se}from"./chunks/control-f5b05b5f.js";function gt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function yt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(r,e){const n=new URL(r);for(const i of bt){let a=n[i];Object.defineProperty(n,i,{get(){return e(),a},enumerable:!0,configurable:!0})}return Et(n),n}function Et(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function Rt(r){return r.replace(/\/$/,"")+kt}function $t(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Te(r)),_e(r,e));const ae=new Map;function Lt(r,e){const n=Te(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:a,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ae.set(n,{body:a,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,d))}return _e(r,e)}function It(r,e,n){if(ae.size>0){const i=Te(r,n),a=ae.get(i);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);ae.delete(i)}}return _e(e,n)}function Te(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${$t(e.body)}"]`),i}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Pt(r).map(i=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return Re(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return Re(String.fromCharCode(...u.slice(2).split("-").map(A=>parseInt(A,16))));const g=Ot.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,P,k,F]=g;return e.push({name:k,matcher:F,optional:!!v,rest:!!P,chained:P?p===1&&t[0]==="":!1}),P?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Re(u)}).join("")}).join("")}/?$`),params:e}}function At(r){return!/^\([^)]+\)$/.test(r)}function Pt(r){return r.slice(1).split("/").filter(At)}function Tt(r,e,n){const i={},a=r.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=a[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let p=a.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)a[p]=a[p-1],p-=1;continue}return}i[f.name]=u}}if(!d)return i}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,n,i){const a=new Set(e);return Object.entries(n).map(([f,[u,p,g]])=>{const{pattern:v,params:P}=St(f),k={id:f,exec:F=>{const A=v.exec(F);if(A)return Tt(A,P,i)},errors:[1,...g||[]].map(F=>r[F]),layouts:[0,...p||[]].map(t),leaf:d(u)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function d(f){const u=f<0;return u&&(f=~f),[u,r[f]]}function t(f){return f===void 0?f:[a.has(f),r[f]]}}function Dt(r){let e,n,i;var a=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=G(a,d(r))),{c(){e&&H(e.$$.fragment),n=N()},l(t){e&&oe(e.$$.fragment,t),n=N()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),a!==(a=t[0][0])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=G(a,d(t)),H(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function Nt(r){let e,n,i;var a=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return a&&(e=G(a,d(r))),{c(){e&&H(e.$$.fragment),n=N()},l(t){e&&oe(e.$$.fragment,t),n=N()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][0])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=G(a,d(t)),H(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function Ut(r){let e,n,i;var a=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=G(a,d(r))),{c(){e&&H(e.$$.fragment),n=N()},l(t){e&&oe(e.$$.fragment,t),n=N()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),a!==(a=t[0][1])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=G(a,d(t)),H(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function Vt(r){let e,n,i;var a=r[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return a&&(e=G(a,d(r))),{c(){e&&H(e.$$.fragment),n=N()},l(t){e&&oe(e.$$.fragment,t),n=N()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][1])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=G(a,d(t)),H(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function qt(r){let e,n,i;var a=r[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=G(a,d(r))),{c(){e&&H(e.$$.fragment),n=N()},l(t){e&&oe(e.$$.fragment,t),n=N()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),a!==(a=t[0][2])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=G(a,d(t)),H(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function Ct(r){let e,n,i,a;const d=[Vt,Ut],t=[];function f(u,p){return u[0][2]?0:1}return e=f(r),n=t[e]=d[e](r),{c(){n.c(),i=N()},l(u){n.l(u),i=N()},m(u,p){t[e].m(u,p),M(u,i,p),a=!0},p(u,p){let g=e;e=f(u),e===g?t[e].p(u,p):(Z(),U(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),V(n,1),n.m(i.parentNode,i))},i(u){a||(V(n),a=!0)},o(u){U(n),a=!1},d(u){t[e].d(u),u&&C(i)}}}function Ze(r){let e,n=r[6]&&Qe(r);return{c(){e=lt("div"),n&&n.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ft(e);n&&n.l(a),a.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),J(e,"position","absolute"),J(e,"left","0"),J(e,"top","0"),J(e,"clip","rect(0 0 0 0)"),J(e,"clip-path","inset(50%)"),J(e,"overflow","hidden"),J(e,"white-space","nowrap"),J(e,"width","1px"),J(e,"height","1px")},m(i,a){M(i,e,a),n&&n.m(e,null)},p(i,a){i[6]?n?n.p(i,a):(n=Qe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&C(e),n&&n.d()}}}function Qe(r){let e;return{c(){e=ut(r[7])},l(n){e=pt(n,r[7])},m(n,i){M(n,e,i)},p(n,i){i&128&&dt(e,n[7])},d(n){n&&C(e)}}}function Ft(r){let e,n,i,a,d;const t=[Nt,Dt],f=[];function u(g,v){return g[0][1]?0:1}e=u(r),n=f[e]=t[e](r);let p=r[5]&&Ze(r);return{c(){n.c(),i=ot(),p&&p.c(),a=N()},l(g){n.l(g),i=it(g),p&&p.l(g),a=N()},m(g,v){f[e].m(g,v),M(g,i,v),p&&p.m(g,v),M(g,a,v),d=!0},p(g,[v]){let P=e;e=u(g),e===P?f[e].p(g,v):(Z(),U(f[P],1,1,()=>{f[P]=null}),Q(),n=f[e],n?n.p(g,v):(n=f[e]=t[e](g),n.c()),V(n,1),n.m(i.parentNode,i)),g[5]?p?p.p(g,v):(p=Ze(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){d||(V(n),d=!0)},o(g){U(n),d=!1},d(g){f[e].d(g),g&&C(i),p&&p.d(g),g&&C(a)}}}function Bt(r,e,n){let{stores:i}=e,{page:a}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;st(i.page.notify);let g=!1,v=!1,P=null;return Oe(()=>{const k=i.page.subscribe(()=>{g&&(n(6,v=!0),n(7,P=document.title||"untitled page"))});return n(5,g=!0),k}),r.$$set=k=>{"stores"in k&&n(8,i=k.stores),"page"in k&&n(9,a=k.page),"components"in k&&n(0,d=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,u=k.data_1),"data_2"in k&&n(4,p=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(a)},[d,t,f,u,p,g,v,P,i,a]}class Mt extends nt{constructor(e){super(),at(this,e,Bt,Ft,rt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Gt={},me=[()=>D(()=>import("./chunks/0-6549f13f.js"),["./chunks/0-6549f13f.js","./chunks/_layout-cbc6a3fd.js","./chunks/index-dc735eee.js","./chunks/control-f5b05b5f.js","./components/layout.svelte-958a1762.js","./chunks/index-5cf732b6.js"],import.meta.url),()=>D(()=>import("./chunks/1-463cd88a.js"),["./chunks/1-463cd88a.js","./components/error.svelte-a3eb12c5.js","./chunks/index-5cf732b6.js","./chunks/stores-92482488.js","./chunks/singletons-ca1e47c6.js"],import.meta.url),()=>D(()=>import("./chunks/2-6721b2ab.js"),["./chunks/2-6721b2ab.js","./chunks/_layout-ed77219c.js","./components/layout.svelte-958a1762.js","./chunks/index-5cf732b6.js"],import.meta.url),()=>D(()=>import("./chunks/3-2f9cec31.js"),["./chunks/3-2f9cec31.js","./components/pages/_page.svelte-d1538cec.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./chunks/Card-3455c28c.js","./assets/Card-90472076.css","./assets/_page-8c24f0c1.css"],import.meta.url),()=>D(()=>import("./chunks/4-9757d8e9.js"),["./chunks/4-9757d8e9.js","./chunks/_page-290f38fd.js","./chunks/001-revit-project-startup-b0279d60.js","./chunks/index-5cf732b6.js","./chunks/002-dwg2rvt-f7dc55a7.js","./chunks/003-point-clouds-in-architecture-27c11cd0.js","./chunks/004-ifc-analysis-openifcshell-0350c471.js","./chunks/test-75b4ef36.js","./chunks/index-dc735eee.js","./chunks/control-f5b05b5f.js","./chunks/formatDate-f375c276.js","./chunks/stores-92482488.js","./chunks/singletons-ca1e47c6.js","./components/pages/blog/_page.svelte-a36b0cc9.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./assets/_page-218a8ac1.css"],import.meta.url),()=>D(()=>import("./chunks/5-85e57afc.js"),["./chunks/5-85e57afc.js","./chunks/_page-50c75215.js","./chunks/preload-helper-41c905a7.js","./chunks/dynamic-import-helper-be004503.js","./chunks/index-dc735eee.js","./chunks/control-f5b05b5f.js","./components/pages/blog/_slug_/_page.svelte-49a3c99e.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./chunks/formatDate-f375c276.js","./chunks/stores-92482488.js","./chunks/singletons-ca1e47c6.js","./assets/_page-d7be49ec.css"],import.meta.url),()=>D(()=>import("./chunks/6-c620da87.js"),["./chunks/6-c620da87.js","./components/pages/code/_page.svx-220d401a.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./assets/_page-5b442fce.css"],import.meta.url),()=>D(()=>import("./chunks/7-58efb84d.js"),["./chunks/7-58efb84d.js","./components/pages/graphic/_page.svelte-3702cdd7.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./chunks/Gallery-5c3f73f7.js","./chunks/Grid-528a4930.js","./assets/Grid-19b51f8b.css","./chunks/Image-e102a7de.js","./assets/Image-3f43ee0d.css","./assets/Gallery-46f452bf.css","./assets/_page-3674aadf.css"],import.meta.url),()=>D(()=>import("./chunks/8-1bea3692.js"),["./chunks/8-1bea3692.js","./components/pages/lectures/_page.svelte-010d7c26.js","./chunks/index-5cf732b6.js","./assets/_page-bea4cded.css"],import.meta.url),()=>D(()=>import("./chunks/9-26ea9fec.js"),["./chunks/9-26ea9fec.js","./chunks/_page-c455a45e.js","./chunks/preload-helper-41c905a7.js","./chunks/dynamic-import-helper-be004503.js","./chunks/index-dc735eee.js","./chunks/control-f5b05b5f.js","./components/pages/lectures/_slug_/_page.svelte-688eb02c.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./assets/_page-37769e9d.css"],import.meta.url),()=>D(()=>import("./chunks/10-b39391ed.js"),["./chunks/10-b39391ed.js","./components/pages/motion-picture/_page.svelte-a9248132.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./assets/_page-9953be98.css","./assets/Grid-19b51f8b.css","./assets/Image-3f43ee0d.css","./assets/Gallery-46f452bf.css"],import.meta.url),()=>D(()=>import("./chunks/11-5ba4e9fe.js"),["./chunks/11-5ba4e9fe.js","./components/pages/photography/_page.svelte-0adb2812.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./chunks/Gallery-5c3f73f7.js","./chunks/Grid-528a4930.js","./assets/Grid-19b51f8b.css","./chunks/Image-e102a7de.js","./assets/Image-3f43ee0d.css","./assets/Gallery-46f452bf.css","./assets/_page-3674aadf.css"],import.meta.url),()=>D(()=>import("./chunks/12-12698173.js"),["./chunks/12-12698173.js","./components/pages/projects/_page.svelte-8463a792.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./chunks/Card-3455c28c.js","./assets/Card-90472076.css","./chunks/Grid-528a4930.js","./assets/Grid-19b51f8b.css","./assets/_page-e9c73af1.css"],import.meta.url),()=>D(()=>import("./chunks/13-33abf961.js"),["./chunks/13-33abf961.js","./chunks/_page-19dbf08b.js","./chunks/preload-helper-41c905a7.js","./chunks/dynamic-import-helper-be004503.js","./chunks/index-dc735eee.js","./chunks/control-f5b05b5f.js","./chunks/formatDate-f375c276.js","./chunks/stores-92482488.js","./chunks/index-5cf732b6.js","./chunks/singletons-ca1e47c6.js","./components/pages/projects/_slug_/_page.svelte-4adffe95.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./chunks/Grid-528a4930.js","./assets/Grid-19b51f8b.css","./chunks/Image-e102a7de.js","./assets/Image-3f43ee0d.css","./assets/_page-17f2bca3.css","./assets/Card-90472076.css"],import.meta.url),()=>D(()=>import("./chunks/14-dde859d3.js"),["./chunks/14-dde859d3.js","./components/pages/sketchbook/_page.svelte-722492c4.js","./chunks/index-5cf732b6.js","./chunks/Nav-cd4a338e.js","./assets/Nav-4ff2e076.css","./chunks/Gallery-5c3f73f7.js","./chunks/Grid-528a4930.js","./assets/Grid-19b51f8b.css","./chunks/Image-e102a7de.js","./assets/Image-3f43ee0d.css","./assets/Gallery-46f452bf.css","./assets/_page-3674aadf.css"],import.meta.url)],Ht=[],Kt={"/":[3],"/blog":[4],"/blog/[slug]":[5,[2]],"/code":[6],"/graphic":[7],"/lectures":[8],"/lectures/[slug]":[9],"/motion-picture":[10],"/photography":[11],"/projects":[-13],"/projects/[slug]":[13],"/sketchbook":[14]},zt={handleError:({error:r})=>{console.error(r)}};async function Jt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,a])=>[i,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(a,d=!1){if(a===Wt)return;if(a===Xt)return NaN;if(a===Zt)return 1/0;if(a===Qt)return-1/0;if(a===xt)return-0;if(d)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const u=new Set;n[a]=u;for(let v=1;v<t.length;v+=1)u.add(i(t[v]));break;case"Map":const p=new Map;n[a]=p;for(let v=1;v<t.length;v+=2)p.set(i(t[v]),i(t[v+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let v=1;v<t.length;v+=2)g[t[v]]=i(t[v+1]);break}else{const f=new Array(t.length);n[a]=f;for(let u=0;u<t.length;u+=1){const p=t[u];p!==Yt&&(f[u]=i(p))}}else{const f={};n[a]=f;for(const u in t){const p=t[u];f[u]=i(p)}}return n[a]}return i(0)}const $e=jt(me,Ht,Kt,Gt),Ae=me[0],Pe=me[1];Ae();Pe();let re={};try{re=JSON.parse(sessionStorage[et])}catch{}function Le(r){re[r]=he()}function tn({target:r,base:e}){var Ge;const n=document.documentElement,i=[];let a=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,p=!0,g=!1,v=!1,P=!1,k=!1,F,A=(Ge=history.state)==null?void 0:Ge[W];A||(A=Date.now(),history.replaceState({...history.state,[W]:A},"",location.href));const ge=re[A];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let Y,je,ie;async function De(){ie=ie||Promise.resolve(),await ie,ie=null;const o=new URL(location.href),s=ce(o,!0);a=null,await Ue(s,o,[])}async function we(o,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:h={},invalidateAll:_=!1},m,b){return typeof o=="string"&&(o=new URL(o,ze(document))),fe({url:o,scroll:s?he():null,keepfocus:l,redirect_chain:m,details:{state:h,replaceState:c},nav_token:b,accepted:()=>{_&&(k=!0)},blocked:()=>{},type:"goto"})}async function Ne(o){const s=ce(o,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);return a={id:s.id,promise:Ce(s).then(c=>(c.type==="loaded"&&c.state.error&&(a=null),c))},a.promise}async function se(...o){const c=$e.filter(l=>o.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(c)}async function Ue(o,s,c,l,h={},_){var b,y;je=h;let m=o&&await Ce(o);if(m||(m=await Me(s,{id:null},await ne(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(o==null?void 0:o.url)||s,je!==h)return!1;if(m.type==="redirect")if(c.length>10||c.includes(s.pathname))m=await le({status:500,error:await ne(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return we(new URL(m.location,s).href,{},[...c,s.pathname],h),!1;else((y=(b=m.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await X.updated.check()&&await ue(s);if(i.length=0,k=!1,g=!0,l&&l.details){const{details:w}=l,$=w.replaceState?0:1;w.state[W]=A+=$,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(a=null,u?(t=m.state,m.props.page&&(m.props.page.url=s),F.$set(m.props)):Ve(m),l){const{scroll:w,keepfocus:$}=l;if($||Ie(),await pe(),p){const L=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await pe();p=!0,m.props.page&&(Y=m.props.page),_&&_(),g=!1}function Ve(o){var l;t=o.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),Y=o.props.page,F=new Mt({target:r,props:{...o.props,stores:X},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(h=>h(c)),u=!0}async function ee({url:o,params:s,branch:c,status:l,error:h,route:_,form:m}){const b=c.filter(Boolean);let y="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(y=I.slash);o.pathname=gt(o.pathname,y),o.search=o.search;const w={type:"loaded",state:{url:o,params:s,branch:c,error:h,route:_},props:{components:b.map(I=>I.node.component)}};m!==void 0&&(w.props.form=m);let $={},L=!Y;for(let I=0;I<b.length;I+=1){const E=b[I];$={...$,...E.data},(L||!t.branch.some(j=>j===E))&&(w.props[`data_${I}`]=$,L=L||Object.keys(E.data??{}).length>0)}return L||(L=Object.keys(Y.data).length!==Object.keys($).length),(!t.url||o.href!==t.url.href||t.error!==h||m!==void 0||L)&&(w.props.page={error:h,params:s,route:_,status:l,url:new URL(o),form:m??null,data:L?$:Y.data}),w}async function ye({loader:o,parent:s,url:c,params:l,route:h,server_data_node:_}){var w,$,L;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await o();if((w=y.universal)!=null&&w.load){let B=function(...E){for(const j of E){const{href:q}=new URL(j,c);b.dependencies.add(q)}};const I={route:{get id(){return b.route=!0,h.id}},params:new Proxy(l,{get:(E,j)=>(b.params.add(j),E[j])}),data:(_==null?void 0:_.data)??null,url:vt(c,()=>{b.url=!0}),async fetch(E,j){let q;E instanceof Request?(q=E.url,j={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...j}):q=E;const R=new URL(q,c).href;return B(R),u?It(q,R,j):Lt(q,j)},setHeaders:()=>{},depends:B,parent(){return b.parent=!0,s()}};m=await y.universal.load.call(null,I)??null,m=m?await Jt(m):null}return{node:y,loader:o,server:_,universal:($=y.universal)!=null&&$.load?{type:"data",data:m,uses:b}:null,data:m??(_==null?void 0:_.data)??null,slash:((L=y.universal)==null?void 0:L.trailingSlash)??(_==null?void 0:_.slash)}}function qe(o,s,c,l,h){if(k)return!0;if(!l)return!1;if(l.parent&&o||l.route&&s||l.url&&c)return!0;for(const _ of l.params)if(h[_]!==t.params[_])return!0;for(const _ of l.dependencies)if(i.some(m=>m(new URL(_))))return!0;return!1}function be(o,s){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?s??null:null}async function Ce({id:o,invalidating:s,url:c,params:l,route:h}){if((a==null?void 0:a.id)===o)return a.promise;const{errors:_,layouts:m,leaf:b}=h,y=[...m,b];_.forEach(R=>R==null?void 0:R().catch(()=>{})),y.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const $=t.url?o!==t.url.pathname+t.url.search:!1,L=t.route?o!==t.route.id:!1,B=y.reduce((R,S,T)=>{var te;const O=t.branch[T],x=!!(S!=null&&S[0])&&((O==null?void 0:O.loader)!==S[1]||qe(R.some(Boolean),L,$,(te=O.server)==null?void 0:te.uses,l));return R.push(x),R},[]);if(B.some(Boolean)){try{w=await xe(c,B)}catch(R){return le({status:500,error:await ne(R,{url:c,params:l,route:{id:h.id}}),url:c,route:h})}if(w.type==="redirect")return w}const I=w==null?void 0:w.nodes;let E=!1;const j=y.map(async(R,S)=>{var te;if(!R)return;const T=t.branch[S],O=I==null?void 0:I[S];if((!O||O.type==="skip")&&R[1]===(T==null?void 0:T.loader)&&!qe(E,L,$,(te=T.universal)==null?void 0:te.uses,l))return T;if(E=!0,(O==null?void 0:O.type)==="error")throw O;return ye({loader:R[1],url:c,params:l,route:h,parent:async()=>{var Ke;const He={};for(let ve=0;ve<S;ve+=1)Object.assign(He,(Ke=await j[ve])==null?void 0:Ke.data);return He},server_data_node:be(O===void 0&&R[0]?{type:"skip"}:O??null,T==null?void 0:T.server)})});for(const R of j)R.catch(()=>{});const q=[];for(let R=0;R<y.length;R+=1)if(y[R])try{q.push(await j[R])}catch(S){if(S instanceof Xe)return{type:"redirect",location:S.location};let T=500,O;I!=null&&I.includes(S)?(T=S.status??T,O=S.error):S instanceof Se?(T=S.status,O=S.body):O=await ne(S,{params:l,url:c,route:{id:h.id}});const x=await Fe(R,q,_);return x?await ee({url:c,params:l,branch:q.slice(0,x.idx).concat(x.node),status:T,error:O,route:h}):await Me(c,{id:h.id},O,T)}else q.push(void 0);return await ee({url:c,params:l,branch:q,status:200,error:null,route:h,form:s?void 0:null})}async function Fe(o,s,c){for(;o--;)if(c[o]){let l=o;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[o](),loader:c[o],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:o,error:s,url:c,route:l}){const h={},_=await Ae();let m=null;if(_.server)try{const w=await xe(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ue(c)}const b=await ye({loader:Ae,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:be(m)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await ee({url:c,params:h,branch:[b,y],status:o,error:s,route:null})}function ce(o,s){if(We(o,e))return;const c=wt(o.pathname.slice(e.length)||"/");for(const l of $e){const h=l.exec(c);if(h)return{id:o.pathname+o.search,invalidating:s,route:l,params:yt(h),url:o}}}function Be({url:o,type:s,intent:c,delta:l}){var b,y;let h=!1;const _={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:o},willUnload:!c,type:s};l!==void 0&&(_.delta=l);const m={..._,cancel:()=>{h=!0}};return v||d.before_navigate.forEach(w=>w(m)),h?null:_}async function fe({url:o,scroll:s,keepfocus:c,redirect_chain:l,details:h,type:_,delta:m,nav_token:b,accepted:y,blocked:w}){const $=ce(o,!1),L=Be({url:o,type:_,delta:m,intent:$});if(!L){w();return}Le(A),y(),v=!0,u&&X.navigating.set(L),await Ue($,o,l,{scroll:s,keepfocus:c,details:h},b,()=>{v=!1,d.after_navigate.forEach(B=>B(L)),X.navigating.set(null)})}async function Me(o,s,c,l){return o.origin===location.origin&&o.pathname===location.pathname&&!f?await le({status:l,error:c,url:o,route:s}):await ue(o)}function ue(o){return location.href=o.href,new Promise(()=>{})}function tt(){let o;n.addEventListener("mousemove",_=>{const m=_.target;clearTimeout(o),o=setTimeout(()=>{l(m,2)},20)});function s(_){l(_.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(_=>{for(const m of _)m.isIntersecting&&(se(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(_,m){const b=Je(_,n);if(!b)return;const{url:y,external:w}=ke(b,e);if(w)return;const $=de(b);$.reload||(m<=$.preload_data?Ne(y):m<=$.preload_code&&se(y.pathname))}function h(){c.disconnect();for(const _ of n.querySelectorAll("a")){const{url:m,external:b}=ke(_,e);if(b)continue;const y=de(_);y.reload||(y.preload_code===Ye.viewport&&c.observe(_),y.preload_code===Ye.eager&&se(m.pathname))}}d.after_navigate.push(h),h()}return{after_navigate:o=>{Oe(()=>(d.after_navigate.push(o),()=>{const s=d.after_navigate.indexOf(o);d.after_navigate.splice(s,1)}))},before_navigate:o=>{Oe(()=>(d.before_navigate.push(o),()=>{const s=d.before_navigate.indexOf(o);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(o,s={})=>we(o,s,[]),invalidate:o=>{if(typeof o=="function")i.push(o);else{const{href:s}=new URL(o,location.href);i.push(c=>c.href===s)}return De()},invalidateAll:()=>(k=!0,De()),preload_data:async o=>{const s=new URL(o,ze(document));await Ne(s)},preload_code:se,apply_action:async o=>{if(o.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const h=await Fe(t.branch.length,c,l.errors);if(h){const _=await ee({url:s,params:t.params,branch:c.slice(0,h.idx).concat(h.node),status:o.status??500,error:o.error,route:l});t=_.state,F.$set(_.props),pe().then(Ie)}}else if(o.type==="redirect")we(o.location,{invalidateAll:!0},[]);else{const s={form:o.data,page:{...Y,form:o.data,status:o.status}};F.$set(s),o.type==="success"&&pe().then(Ie)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!v){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(_=>_(h))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(A);try{sessionStorage[et]=JSON.stringify(re)}catch{}}}),(o=navigator.connection)!=null&&o.saveData||tt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=Je(s.composedPath()[0],n);if(!c)return;const{url:l,external:h,has:_}=ke(c,e),m=de(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||_.download)return;if(h||m.reload){Be({url:l,type:"link"})||s.preventDefault(),v=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){P=!0,Le(A),t.url=l,X.page.set({...Y,url:l}),X.page.notify();return}fe({url:l,scroll:m.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{var y;if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const _=new URL(((y=s.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(_,e))return;const{noscroll:m,reload:b}=de(s.target);b||(s.preventDefault(),s.stopPropagation(),_.search=new URLSearchParams(new FormData(s.target)).toString(),fe({url:_,scroll:m?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[W]){if(s.state[W]===A)return;const l=s.state[W]-A;fe({url:new URL(location.href),scroll:re[s.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=s.state[W]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{P&&(P=!1,history.replaceState({...history.state,[W]:++A},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&X.navigating.set(null)})},_hydrate:async({status:o=200,error:s,node_ids:c,params:l,route:h,data:_,form:m})=>{f=!0;const b=new URL(location.href);({params:l={},route:h={id:null}}=ce(b,!1)||{});let y;try{const w=c.map(async($,L)=>{const B=_[L];return ye({loader:me[$],url:b,params:l,route:h,parent:async()=>{const I={};for(let E=0;E<L;E+=1)Object.assign(I,(await w[E]).data);return I},server_data_node:be(B)})});y=await ee({url:b,params:l,branch:await Promise.all(w),status:o,error:s,form:m,route:$e.find(({id:$})=>$===h.id)??null})}catch(w){if(w instanceof Xe){await ue(new URL(w.location,location.href));return}y=await le({status:w instanceof Se?w.status:500,error:await ne(w,{url:b,params:l,route:h}),url:b,route:h})}Ve(y)}}}async function xe(r,e){var d;const n=new URL(r);n.pathname=Rt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await _e(n.href),a=await i.json();if(!i.ok)throw new Error(a);return(d=a.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function ne(r,e){return r instanceof Se?r.body:zt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ie(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function sn({env:r,hydrate:e,paths:n,target:i,version:a}){ht(n),mt(a);const d=tn({target:i,base:n.base});_t({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{sn as start};