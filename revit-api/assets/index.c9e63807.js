var jt=Object.defineProperty;var Le=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable;var Oe=(l,e,t)=>e in l?jt(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,pe=(l,e)=>{for(var t in e||(e={}))Et.call(e,t)&&Oe(l,t,e[t]);if(Le)for(var t of Le(e))Pt.call(e,t)&&Oe(l,t,e[t]);return l};const Gt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};Gt();function B(){}const Bt=l=>l;function ee(l,e){for(const t in e)l[t]=e[t];return l}function bt(l){return l()}function Ue(){return Object.create(null)}function ne(l){l.forEach(bt)}function wt(l){return typeof l=="function"}function j(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}let be;function Ee(l,e){return be||(be=document.createElement("a")),be.href=e,l===be.href}function Mt(l){return Object.keys(l).length===0}function M(l,e,t,r){if(l){const n=kt(l,e,t,r);return l[0](n)}}function kt(l,e,t,r){return l[1]&&r?ee(t.ctx.slice(),l[1](r(e))):t.ctx}function N(l,e,t,r){if(l[2]&&r){const n=l[2](r(t));if(e.dirty===void 0)return n;if(typeof n=="object"){const i=[],s=Math.max(e.dirty.length,n.length);for(let a=0;a<s;a+=1)i[a]=e.dirty[a]|n[a];return i}return e.dirty|n}return e.dirty}function L(l,e,t,r,n,i){if(n){const s=kt(e,t,r,i);l.p(s,n)}}function O(l){if(l.ctx.length>32){const e=[],t=l.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Nt(l){const e={};for(const t in l)t[0]!=="$"&&(e[t]=l[t]);return e}function qe(l,e){const t={};e=new Set(e);for(const r in l)!e.has(r)&&r[0]!=="$"&&(t[r]=l[r]);return t}const yt=typeof window!="undefined";let Lt=yt?()=>window.performance.now():()=>Date.now(),Ge=yt?l=>requestAnimationFrame(l):B;const oe=new Set;function $t(l){oe.forEach(e=>{e.c(l)||(oe.delete(e),e.f())}),oe.size!==0&&Ge($t)}function Ot(l){let e;return oe.size===0&&Ge($t),{promise:new Promise(t=>{oe.add(e={c:l,f:t})}),abort(){oe.delete(e)}}}function H(l,e){l.appendChild(e)}function At(l){if(!l)return document;const e=l.getRootNode?l.getRootNode():l.ownerDocument;return e&&e.host?e:l.ownerDocument}function Ut(l){const e=x("style");return qt(At(l),e),e.sheet}function qt(l,e){H(l.head||l,e)}function b(l,e,t){l.insertBefore(e,t||null)}function _(l){l.parentNode.removeChild(l)}function le(l,e){for(let t=0;t<l.length;t+=1)l[t]&&l[t].d(e)}function x(l){return document.createElement(l)}function Ht(l){return document.createElementNS("http://www.w3.org/2000/svg",l)}function V(l){return document.createTextNode(l)}function F(){return V(" ")}function E(){return V("")}function ze(l,e,t,r){return l.addEventListener(e,t,r),()=>l.removeEventListener(e,t,r)}function z(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function Ft(l){return Array.from(l.childNodes)}function ie(l,e){e=""+e,l.wholeText!==e&&(l.data=e)}function He(l,e,t,r){t===null?l.style.removeProperty(e):l.style.setProperty(e,t,r?"important":"")}function zt(l,e,{bubbles:t=!1,cancelable:r=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(l,t,r,e),n}class Wt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=Ht(t.nodeName):this.e=x(t.nodeName),this.t=t,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}const xe=new Map;let ve=0;function Zt(l){let e=5381,t=l.length;for(;t--;)e=(e<<5)-e^l.charCodeAt(t);return e>>>0}function Vt(l,e){const t={stylesheet:Ut(e),rules:{}};return xe.set(l,t),t}function Fe(l,e,t,r,n,i,s,a=0){const o=16.666/r;let c=`{
`;for(let $=0;$<=1;$+=o){const T=e+(t-e)*i($);c+=$*100+`%{${s(T,1-T)}}
`}const f=c+`100% {${s(t,1-t)}}
}`,g=`__svelte_${Zt(f)}_${a}`,m=At(l),{stylesheet:d,rules:u}=xe.get(m)||Vt(m,l);u[g]||(u[g]=!0,d.insertRule(`@keyframes ${g} ${f}`,d.cssRules.length));const k=l.style.animation||"";return l.style.animation=`${k?`${k}, `:""}${g} ${r}ms linear ${n}ms 1 both`,ve+=1,g}function Qt(l,e){const t=(l.style.animation||"").split(", "),r=t.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),n=t.length-r.length;n&&(l.style.animation=r.join(", "),ve-=n,ve||Kt())}function Kt(){Ge(()=>{ve||(xe.forEach(l=>{const{stylesheet:e}=l;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);l.rules={}}),xe.clear())})}let ge;function me(l){ge=l}function De(){if(!ge)throw new Error("Function called outside component initialization");return ge}function xt(l){De().$$.on_mount.push(l)}function Xt(){const l=De();return(e,t,{cancelable:r=!1}={})=>{const n=l.$$.callbacks[e];if(n){const i=zt(e,t,{cancelable:r});return n.slice().forEach(s=>{s.call(l,i)}),!i.defaultPrevented}return!0}}function Jt(l,e){return De().$$.context.set(l,e),e}function Yt(l){return De().$$.context.get(l)}const he=[],We=[],ye=[],Ze=[],en=Promise.resolve();let Pe=!1;function tn(){Pe||(Pe=!0,en.then(vt))}function Q(l){ye.push(l)}const Re=new Set;let we=0;function vt(){const l=ge;do{for(;we<he.length;){const e=he[we];we++,me(e),nn(e.$$)}for(me(null),he.length=0,we=0;We.length;)We.pop()();for(let e=0;e<ye.length;e+=1){const t=ye[e];Re.has(t)||(Re.add(t),t())}ye.length=0}while(he.length);for(;Ze.length;)Ze.pop()();Pe=!1,Re.clear(),me(l)}function nn(l){if(l.fragment!==null){l.update(),ne(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(Q)}}let de;function rn(){return de||(de=Promise.resolve(),de.then(()=>{de=null})),de}function Se(l,e,t){l.dispatchEvent(zt(`${e?"intro":"outro"}${t}`))}const $e=new Set;let Y;function D(){Y={r:0,c:[],p:Y}}function R(){Y.r||ne(Y.c),Y=Y.p}function p(l,e){l&&l.i&&($e.delete(l),l.i(e))}function h(l,e,t,r){if(l&&l.o){if($e.has(l))return;$e.add(l),Y.c.push(()=>{$e.delete(l),r&&(t&&l.d(1),r())}),l.o(e)}}const ln={duration:0};function Ce(l,e,t,r){let n=e(l,t),i=r?0:1,s=null,a=null,o=null;function c(){o&&Qt(l,o)}function f(m,d){const u=m.b-i;return d*=Math.abs(u),{a:i,b:m.b,d:u,duration:d,start:m.start,end:m.start+d,group:m.group}}function g(m){const{delay:d=0,duration:u=300,easing:k=Bt,tick:$=B,css:T}=n||ln,U={start:Lt()+d,b:m};m||(U.group=Y,Y.r+=1),s||a?a=U:(T&&(c(),o=Fe(l,i,m,u,d,k,T)),m&&$(0,1),s=f(U,u),Q(()=>Se(l,m,"start")),Ot(Z=>{if(a&&Z>a.start&&(s=f(a,u),a=null,Se(l,s.b,"start"),T&&(c(),o=Fe(l,i,s.b,s.duration,0,k,n.css))),s){if(Z>=s.end)$(i=s.b,1-i),Se(l,s.b,"end"),a||(s.b?c():--s.group.r||ne(s.group.c)),s=null;else if(Z>=s.start){const X=Z-s.start;i=s.a+s.d*k(X/s.duration),$(i,1-i)}}return!!(s||a)}))}return{run(m){wt(n)?rn().then(()=>{n=n(),g(m)}):g(m)},end(){c(),s=a=null}}}function ae(l,e){const t={},r={},n={$$scope:1};let i=l.length;for(;i--;){const s=l[i],a=e[i];if(a){for(const o in s)o in a||(r[o]=1);for(const o in a)n[o]||(t[o]=a[o],n[o]=1);l[i]=a}else for(const o in s)n[o]=1}for(const s in r)s in t||(t[s]=void 0);return t}function ce(l){return typeof l=="object"&&l!==null?l:{}}function I(l){l&&l.c()}function v(l,e,t,r){const{fragment:n,on_mount:i,on_destroy:s,after_update:a}=l.$$;n&&n.m(e,t),r||Q(()=>{const o=i.map(bt).filter(wt);s?s.push(...o):ne(o),l.$$.on_mount=[]}),a.forEach(Q)}function C(l,e){const t=l.$$;t.fragment!==null&&(ne(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function sn(l,e){l.$$.dirty[0]===-1&&(he.push(l),tn(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function P(l,e,t,r,n,i,s,a=[-1]){const o=ge;me(l);const c=l.$$={fragment:null,ctx:null,props:i,update:B,not_equal:n,bound:Ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Ue(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=t?t(l,e.props||{},(g,m,...d)=>{const u=d.length?d[0]:m;return c.ctx&&n(c.ctx[g],c.ctx[g]=u)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](u),f&&sn(l,g)),m}):[],c.update(),f=!0,ne(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const g=Ft(e.target);c.fragment&&c.fragment.l(g),g.forEach(_)}else c.fragment&&c.fragment.c();e.intro&&p(l.$$.fragment),v(l,e.target,e.anchor,e.customElement),vt()}me(o)}class G{$destroy(){C(this,1),this.$destroy=B}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}$set(e){this.$$set&&!Mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function on(){const l=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||l(e)},xt(()=>{console.warn=l})}function Ve(l,e,t){const r=l.slice();return r[18]=e[t],r}function Qe(l,e,t){const r=l.slice();return r[18]=e[t],r}function Ke(l,e,t){const r=l.slice();return r[10]=e[t],r}function Xe(l,e,t){const r=l.slice();return r[13]=e[t],r[15]=t,r}function Je(l,e,t){const r=l.slice();return r[16]=e[t],r[15]=t,r}function Ye(l,e,t){const r=l.slice();return r[7]=e[t],r}function an(l){let e,t,r,n;const i=[pn,un,fn],s=[];function a(o,c){return o[0]==="table"?0:o[0]==="list"?1:2}return e=a(l),t=s[e]=i[e](l),{c(){t.c(),r=E()},m(o,c){s[e].m(o,c),b(o,r,c),n=!0},p(o,c){let f=e;e=a(o),e===f?s[e].p(o,c):(D(),h(s[f],1,1,()=>{s[f]=null}),R(),t=s[e],t?t.p(o,c):(t=s[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){h(t),n=!1},d(o){s[e].d(o),o&&_(r)}}}function cn(l){let e,t,r=l[1],n=[];for(let s=0;s<r.length;s+=1)n[s]=lt(Ye(l,r,s));const i=s=>h(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=E()},m(s,a){for(let o=0;o<n.length;o+=1)n[o].m(s,a);b(s,e,a),t=!0},p(s,a){if(a&34){r=s[1];let o;for(o=0;o<r.length;o+=1){const c=Ye(s,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=lt(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(D(),o=r.length;o<n.length;o+=1)i(o);R()}},i(s){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)h(n[a]);t=!1},d(s){le(n,s),s&&_(e)}}}function fn(l){let e,t,r;const n=[l[6]];var i=l[5][l[0]];function s(a){let o={$$slots:{default:[mn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(s(l))),{c(){e&&I(e.$$.fragment),t=E()},m(a,o){e&&v(e,a,o),b(a,t,o),r=!0},p(a,o){const c=o&64?ae(n,[ce(a[6])]):{};if(o&8388706&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5][a[0]])){if(e){D();const f=e;h(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(s(a)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&h(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function un(l){let e,t,r,n;const i=[_n,gn],s=[];function a(o,c){return o[4]?0:1}return e=a(l),t=s[e]=i[e](l),{c(){t.c(),r=E()},m(o,c){s[e].m(o,c),b(o,r,c),n=!0},p(o,c){let f=e;e=a(o),e===f?s[e].p(o,c):(D(),h(s[f],1,1,()=>{s[f]=null}),R(),t=s[e],t?t.p(o,c):(t=s[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){h(t),n=!1},d(o){s[e].d(o),o&&_(r)}}}function pn(l){let e,t,r;var n=l[5].table;function i(s){return{props:{$$slots:{default:[In]},$$scope:{ctx:s}}}}return n&&(e=new n(i(l))),{c(){e&&I(e.$$.fragment),t=E()},m(s,a){e&&v(e,s,a),b(s,t,a),r=!0},p(s,a){const o={};if(a&8388716&&(o.$$scope={dirty:a,ctx:s}),n!==(n=s[5].table)){if(e){D();const c=e;h(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(s)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(s){r||(e&&p(e.$$.fragment,s),r=!0)},o(s){e&&h(e.$$.fragment,s),r=!1},d(s){s&&_(t),e&&C(e,s)}}}function dn(l){let e=l[6].raw+"",t;return{c(){t=V(e)},m(r,n){b(r,t,n)},p(r,n){n&64&&e!==(e=r[6].raw+"")&&ie(t,e)},i:B,o:B,d(r){r&&_(t)}}}function hn(l){let e,t;return e=new se({props:{tokens:l[1],renderers:l[5]}}),{c(){I(e.$$.fragment)},m(r,n){v(e,r,n),t=!0},p(r,n){const i={};n&2&&(i.tokens=r[1]),n&32&&(i.renderers=r[5]),e.$set(i)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){h(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function mn(l){let e,t,r,n;const i=[hn,dn],s=[];function a(o,c){return o[1]?0:1}return e=a(l),t=s[e]=i[e](l),{c(){t.c(),r=E()},m(o,c){s[e].m(o,c),b(o,r,c),n=!0},p(o,c){let f=e;e=a(o),e===f?s[e].p(o,c):(D(),h(s[f],1,1,()=>{s[f]=null}),R(),t=s[e],t?t.p(o,c):(t=s[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){h(t),n=!1},d(o){s[e].d(o),o&&_(r)}}}function gn(l){let e,t,r;const n=[{ordered:l[4]},l[6]];var i=l[5].list;function s(a){let o={$$slots:{default:[wn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(s(l))),{c(){e&&I(e.$$.fragment),t=E()},m(a,o){e&&v(e,a,o),b(a,t,o),r=!0},p(a,o){const c=o&80?ae(n,[o&16&&{ordered:a[4]},o&64&&ce(a[6])]):{};if(o&8388704&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5].list)){if(e){D();const f=e;h(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(s(a)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&h(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function _n(l){let e,t,r;const n=[{ordered:l[4]},l[6]];var i=l[5].list;function s(a){let o={$$slots:{default:[yn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(s(l))),{c(){e&&I(e.$$.fragment),t=E()},m(a,o){e&&v(e,a,o),b(a,t,o),r=!0},p(a,o){const c=o&80?ae(n,[o&16&&{ordered:a[4]},o&64&&ce(a[6])]):{};if(o&8388704&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5].list)){if(e){D();const f=e;h(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(s(a)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&h(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function bn(l){let e,t,r;return e=new se({props:{tokens:l[18].tokens,renderers:l[5]}}),{c(){I(e.$$.fragment),t=F()},m(n,i){v(e,n,i),b(n,t,i),r=!0},p(n,i){const s={};i&64&&(s.tokens=n[18].tokens),i&32&&(s.renderers=n[5]),e.$set(s)},i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){h(e.$$.fragment,n),r=!1},d(n){C(e,n),n&&_(t)}}}function et(l){let e,t,r;const n=[l[18]];var i=l[5].unorderedlistitem||l[5].listitem;function s(a){let o={$$slots:{default:[bn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(s(l))),{c(){e&&I(e.$$.fragment),t=E()},m(a,o){e&&v(e,a,o),b(a,t,o),r=!0},p(a,o){const c=o&64?ae(n,[ce(a[18])]):{};if(o&8388704&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5].unorderedlistitem||a[5].listitem)){if(e){D();const f=e;h(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(s(a)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&h(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function wn(l){let e,t,r=l[6].items,n=[];for(let s=0;s<r.length;s+=1)n[s]=et(Ve(l,r,s));const i=s=>h(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=E()},m(s,a){for(let o=0;o<n.length;o+=1)n[o].m(s,a);b(s,e,a),t=!0},p(s,a){if(a&96){r=s[6].items;let o;for(o=0;o<r.length;o+=1){const c=Ve(s,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=et(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(D(),o=r.length;o<n.length;o+=1)i(o);R()}},i(s){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)h(n[a]);t=!1},d(s){le(n,s),s&&_(e)}}}function kn(l){let e,t,r;return e=new se({props:{tokens:l[18].tokens,renderers:l[5]}}),{c(){I(e.$$.fragment),t=F()},m(n,i){v(e,n,i),b(n,t,i),r=!0},p(n,i){const s={};i&64&&(s.tokens=n[18].tokens),i&32&&(s.renderers=n[5]),e.$set(s)},i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){h(e.$$.fragment,n),r=!1},d(n){C(e,n),n&&_(t)}}}function tt(l){let e,t,r;const n=[l[18]];var i=l[5].orderedlistitem||l[5].listitem;function s(a){let o={$$slots:{default:[kn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(s(l))),{c(){e&&I(e.$$.fragment),t=E()},m(a,o){e&&v(e,a,o),b(a,t,o),r=!0},p(a,o){const c=o&64?ae(n,[ce(a[18])]):{};if(o&8388704&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5].orderedlistitem||a[5].listitem)){if(e){D();const f=e;h(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(s(a)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&h(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function yn(l){let e,t,r=l[6].items,n=[];for(let s=0;s<r.length;s+=1)n[s]=tt(Qe(l,r,s));const i=s=>h(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=E()},m(s,a){for(let o=0;o<n.length;o+=1)n[o].m(s,a);b(s,e,a),t=!0},p(s,a){if(a&96){r=s[6].items;let o;for(o=0;o<r.length;o+=1){const c=Qe(s,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=tt(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(D(),o=r.length;o<n.length;o+=1)i(o);R()}},i(s){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)h(n[a]);t=!1},d(s){le(n,s),s&&_(e)}}}function $n(l){let e,t,r;return e=new se({props:{tokens:l[16].tokens,renderers:l[5]}}),{c(){I(e.$$.fragment),t=F()},m(n,i){v(e,n,i),b(n,t,i),r=!0},p(n,i){const s={};i&4&&(s.tokens=n[16].tokens),i&32&&(s.renderers=n[5]),e.$set(s)},i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){h(e.$$.fragment,n),r=!1},d(n){C(e,n),n&&_(t)}}}function nt(l){let e,t,r;var n=l[5].tablecell;function i(s){return{props:{header:!0,align:s[6].align[s[15]]||"center",$$slots:{default:[$n]},$$scope:{ctx:s}}}}return n&&(e=new n(i(l))),{c(){e&&I(e.$$.fragment),t=E()},m(s,a){e&&v(e,s,a),b(s,t,a),r=!0},p(s,a){const o={};if(a&64&&(o.align=s[6].align[s[15]]||"center"),a&8388644&&(o.$$scope={dirty:a,ctx:s}),n!==(n=s[5].tablecell)){if(e){D();const c=e;h(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(s)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(s){r||(e&&p(e.$$.fragment,s),r=!0)},o(s){e&&h(e.$$.fragment,s),r=!1},d(s){s&&_(t),e&&C(e,s)}}}function An(l){let e,t,r=l[2],n=[];for(let s=0;s<r.length;s+=1)n[s]=nt(Je(l,r,s));const i=s=>h(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=E()},m(s,a){for(let o=0;o<n.length;o+=1)n[o].m(s,a);b(s,e,a),t=!0},p(s,a){if(a&100){r=s[2];let o;for(o=0;o<r.length;o+=1){const c=Je(s,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=nt(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(D(),o=r.length;o<n.length;o+=1)i(o);R()}},i(s){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)h(n[a]);t=!1},d(s){le(n,s),s&&_(e)}}}function zn(l){let e,t,r;var n=l[5].tablerow;function i(s){return{props:{$$slots:{default:[An]},$$scope:{ctx:s}}}}return n&&(e=new n(i(l))),{c(){e&&I(e.$$.fragment),t=E()},m(s,a){e&&v(e,s,a),b(s,t,a),r=!0},p(s,a){const o={};if(a&8388708&&(o.$$scope={dirty:a,ctx:s}),n!==(n=s[5].tablerow)){if(e){D();const c=e;h(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(s)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(s){r||(e&&p(e.$$.fragment,s),r=!0)},o(s){e&&h(e.$$.fragment,s),r=!1},d(s){s&&_(t),e&&C(e,s)}}}function xn(l){let e,t;return e=new se({props:{tokens:l[13].tokens,renderers:l[5]}}),{c(){I(e.$$.fragment)},m(r,n){v(e,r,n),t=!0},p(r,n){const i={};n&8&&(i.tokens=r[13].tokens),n&32&&(i.renderers=r[5]),e.$set(i)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){h(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function rt(l){let e,t,r;var n=l[5].tablecell;function i(s){return{props:{header:!1,align:s[6].align[s[15]]||"center",$$slots:{default:[xn]},$$scope:{ctx:s}}}}return n&&(e=new n(i(l))),{c(){e&&I(e.$$.fragment),t=E()},m(s,a){e&&v(e,s,a),b(s,t,a),r=!0},p(s,a){const o={};if(a&64&&(o.align=s[6].align[s[15]]||"center"),a&8388648&&(o.$$scope={dirty:a,ctx:s}),n!==(n=s[5].tablecell)){if(e){D();const c=e;h(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(s)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(s){r||(e&&p(e.$$.fragment,s),r=!0)},o(s){e&&h(e.$$.fragment,s),r=!1},d(s){s&&_(t),e&&C(e,s)}}}function vn(l){let e,t,r=l[10],n=[];for(let s=0;s<r.length;s+=1)n[s]=rt(Xe(l,r,s));const i=s=>h(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=F()},m(s,a){for(let o=0;o<n.length;o+=1)n[o].m(s,a);b(s,e,a),t=!0},p(s,a){if(a&104){r=s[10];let o;for(o=0;o<r.length;o+=1){const c=Xe(s,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=rt(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(D(),o=r.length;o<n.length;o+=1)i(o);R()}},i(s){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)h(n[a]);t=!1},d(s){le(n,s),s&&_(e)}}}function it(l){let e,t,r;var n=l[5].tablerow;function i(s){return{props:{$$slots:{default:[vn]},$$scope:{ctx:s}}}}return n&&(e=new n(i(l))),{c(){e&&I(e.$$.fragment),t=E()},m(s,a){e&&v(e,s,a),b(s,t,a),r=!0},p(s,a){const o={};if(a&8388712&&(o.$$scope={dirty:a,ctx:s}),n!==(n=s[5].tablerow)){if(e){D();const c=e;h(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(s)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(s){r||(e&&p(e.$$.fragment,s),r=!0)},o(s){e&&h(e.$$.fragment,s),r=!1},d(s){s&&_(t),e&&C(e,s)}}}function Cn(l){let e,t,r=l[3],n=[];for(let s=0;s<r.length;s+=1)n[s]=it(Ke(l,r,s));const i=s=>h(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=E()},m(s,a){for(let o=0;o<n.length;o+=1)n[o].m(s,a);b(s,e,a),t=!0},p(s,a){if(a&104){r=s[3];let o;for(o=0;o<r.length;o+=1){const c=Ke(s,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=it(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(D(),o=r.length;o<n.length;o+=1)i(o);R()}},i(s){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)h(n[a]);t=!1},d(s){le(n,s),s&&_(e)}}}function In(l){let e,t,r,n,i;var s=l[5].tablehead;function a(f){return{props:{$$slots:{default:[zn]},$$scope:{ctx:f}}}}s&&(e=new s(a(l)));var o=l[5].tablebody;function c(f){return{props:{$$slots:{default:[Cn]},$$scope:{ctx:f}}}}return o&&(r=new o(c(l))),{c(){e&&I(e.$$.fragment),t=F(),r&&I(r.$$.fragment),n=E()},m(f,g){e&&v(e,f,g),b(f,t,g),r&&v(r,f,g),b(f,n,g),i=!0},p(f,g){const m={};if(g&8388708&&(m.$$scope={dirty:g,ctx:f}),s!==(s=f[5].tablehead)){if(e){D();const u=e;h(u.$$.fragment,1,0,()=>{C(u,1)}),R()}s?(e=new s(a(f)),I(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else s&&e.$set(m);const d={};if(g&8388712&&(d.$$scope={dirty:g,ctx:f}),o!==(o=f[5].tablebody)){if(r){D();const u=r;h(u.$$.fragment,1,0,()=>{C(u,1)}),R()}o?(r=new o(c(f)),I(r.$$.fragment),p(r.$$.fragment,1),v(r,n.parentNode,n)):r=null}else o&&r.$set(d)},i(f){i||(e&&p(e.$$.fragment,f),r&&p(r.$$.fragment,f),i=!0)},o(f){e&&h(e.$$.fragment,f),r&&h(r.$$.fragment,f),i=!1},d(f){e&&C(e,f),f&&_(t),f&&_(n),r&&C(r,f)}}}function lt(l){let e,t;const r=[l[7],{renderers:l[5]}];let n={};for(let i=0;i<r.length;i+=1)n=ee(n,r[i]);return e=new se({props:n}),{c(){I(e.$$.fragment)},m(i,s){v(e,i,s),t=!0},p(i,s){const a=s&34?ae(r,[s&2&&ce(i[7]),s&32&&{renderers:i[5]}]):{};e.$set(a)},i(i){t||(p(e.$$.fragment,i),t=!0)},o(i){h(e.$$.fragment,i),t=!1},d(i){C(e,i)}}}function Tn(l){let e,t,r,n;const i=[cn,an],s=[];function a(o,c){return o[0]?o[5][o[0]]?1:-1:0}return~(e=a(l))&&(t=s[e]=i[e](l)),{c(){t&&t.c(),r=E()},m(o,c){~e&&s[e].m(o,c),b(o,r,c),n=!0},p(o,[c]){let f=e;e=a(o),e===f?~e&&s[e].p(o,c):(t&&(D(),h(s[f],1,1,()=>{s[f]=null}),R()),~e?(t=s[e],t?t.p(o,c):(t=s[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r)):t=null)},i(o){n||(p(t),n=!0)},o(o){h(t),n=!1},d(o){~e&&s[e].d(o),o&&_(r)}}}function Dn(l,e,t){const r=["type","tokens","header","rows","ordered","renderers"];let n=qe(e,r),{type:i=void 0}=e,{tokens:s=void 0}=e,{header:a=void 0}=e,{rows:o=void 0}=e,{ordered:c=!1}=e,{renderers:f}=e;return on(),l.$$set=g=>{e=ee(ee({},e),Nt(g)),t(6,n=qe(e,r)),"type"in g&&t(0,i=g.type),"tokens"in g&&t(1,s=g.tokens),"header"in g&&t(2,a=g.header),"rows"in g&&t(3,o=g.rows),"ordered"in g&&t(4,c=g.ordered),"renderers"in g&&t(5,f=g.renderers)},[i,s,a,o,c,f,n]}class se extends G{constructor(e){super(),P(this,e,Dn,Tn,j,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}function Ct(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let fe=Ct();function Rn(l){fe=l}const Sn=/[&<>"']/,jn=/[&<>"']/g,En=/[<>"']|&(?!#?\w+;)/,Pn=/[<>"']|&(?!#?\w+;)/g,Gn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},st=l=>Gn[l];function q(l,e){if(e){if(Sn.test(l))return l.replace(jn,st)}else if(En.test(l))return l.replace(Pn,st);return l}const Bn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function It(l){return l.replace(Bn,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Mn=/(^|[^\[])\^/g;function S(l,e){l=typeof l=="string"?l:l.source,e=e||"";const t={replace:(r,n)=>(n=n.source||n,n=n.replace(Mn,"$1"),l=l.replace(r,n),t),getRegex:()=>new RegExp(l,e)};return t}const Nn=/[^\w:]/g,Ln=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ot(l,e,t){if(l){let r;try{r=decodeURIComponent(It(t)).replace(Nn,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!Ln.test(t)&&(t=Hn(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ke={},On=/^[^:]+:\/*[^/]*$/,Un=/^([^:]+:)[\s\S]*$/,qn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Hn(l,e){ke[" "+l]||(On.test(l)?ke[" "+l]=l+"/":ke[" "+l]=Ae(l,"/",!0)),l=ke[" "+l];const t=l.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:l.replace(Un,"$1")+e:e.charAt(0)==="/"?t?e:l.replace(qn,"$1")+e:l+e}const Ie={exec:function(){}};function W(l){let e=1,t,r;for(;e<arguments.length;e++){t=arguments[e];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(l[r]=t[r])}return l}function at(l,e){const t=l.replace(/\|/g,(i,s,a)=>{let o=!1,c=s;for(;--c>=0&&a[c]==="\\";)o=!o;return o?"|":" |"}),r=t.split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function Ae(l,e,t){const r=l.length;if(r===0)return"";let n=0;for(;n<r;){const i=l.charAt(r-n-1);if(i===e&&!t)n++;else if(i!==e&&t)n++;else break}return l.slice(0,r-n)}function Fn(l,e){if(l.indexOf(e[1])===-1)return-1;const t=l.length;let r=0,n=0;for(;n<t;n++)if(l[n]==="\\")n++;else if(l[n]===e[0])r++;else if(l[n]===e[1]&&(r--,r<0))return n;return-1}function Tt(l){l&&l.sanitize&&!l.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ct(l,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=l),e>>=1,l+=l;return t+l}function ft(l,e,t,r){const n=e.href,i=e.title?q(e.title):null,s=l[1].replace(/\\([\[\]])/g,"$1");if(l[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:t,href:n,title:i,text:s,tokens:r.inlineTokens(s,[])};return r.state.inLink=!1,a}return{type:"image",raw:t,href:n,title:i,text:q(s)}}function Wn(l,e){const t=l.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(n=>{const i=n.match(/^\s+/);if(i===null)return n;const[s]=i;return s.length>=r.length?n.slice(r.length):n}).join(`
`)}class Be{constructor(e){this.options=e||fe}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ae(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],n=Wn(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const i=Ae(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const r=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,i,s,a,o,c,f,g,m,d,u,k=t[1].trim();const $=k.length>1,T={type:"list",raw:"",ordered:$,start:$?+k.slice(0,-1):"",loose:!1,items:[]};k=$?`\\d{1,9}\\${k.slice(-1)}`:`\\${k}`,this.options.pedantic&&(k=$?k:"[*+-]");const U=new RegExp(`^( {0,3}${k})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(u=!1,!(!(t=U.exec(e))||this.rules.block.hr.test(e)));){if(r=t[0],e=e.substring(r.length),f=t[2].split(`
`,1)[0],g=e.split(`
`,1)[0],this.options.pedantic?(s=2,d=f.trimLeft()):(s=t[2].search(/[^ ]/),s=s>4?1:s,d=f.slice(s),s+=t[1].length),o=!1,!f&&/^ *$/.test(g)&&(r+=g+`
`,e=e.substring(g.length+1),u=!0),!u){const X=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),J=new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(m=e.split(`
`,1)[0],f=m,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(X.test(f)||J.test(e)));){if(f.search(/[^ ]/)>=s||!f.trim())d+=`
`+f.slice(s);else if(!o)d+=`
`+f;else break;!o&&!f.trim()&&(o=!0),r+=m+`
`,e=e.substring(m.length+1)}}T.loose||(c?T.loose=!0:/\n *\n *$/.test(r)&&(c=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(d),n&&(i=n[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),T.items.push({type:"list_item",raw:r,task:!!n,checked:i,loose:!1,text:d}),T.raw+=r}T.items[T.items.length-1].raw=r.trimRight(),T.items[T.items.length-1].text=d.trimRight(),T.raw=T.raw.trimRight();const Z=T.items.length;for(a=0;a<Z;a++){this.lexer.state.top=!1,T.items[a].tokens=this.lexer.blockTokens(T.items[a].text,[]);const X=T.items[a].tokens.filter(re=>re.type==="space"),J=X.every(re=>{const _e=re.raw.split("");let ue=0;for(const St of _e)if(St===`
`&&(ue+=1),ue>1)return!0;return!1});!T.loose&&X.length&&J&&(T.loose=!0,T.items[a].loose=!0)}return T}}html(e){const t=this.rules.block.html.exec(e);if(t){const r={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):q(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const r=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const r={type:"table",header:at(t[1]).map(n=>({text:n})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];let n=r.align.length,i,s,a,o;for(i=0;i<n;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(n=r.rows.length,i=0;i<n;i++)r.rows[i]=at(r.rows[i],r.header.length).map(c=>({text:c}));for(n=r.header.length,s=0;s<n;s++)r.header[s].tokens=[],this.lexer.inline(r.header[s].text,r.header[s].tokens);for(n=r.rows.length,s=0;s<n;s++)for(o=r.rows[s],a=0;a<o.length;a++)o[a].tokens=[],this.lexer.inline(o[a].text,o[a].tokens);return r}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const r={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(e){const t=this.rules.block.text.exec(e);if(t){const r={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:q(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):q(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=Ae(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=Fn(t[2],"()");if(s>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let n=t[2],i="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);s&&(n=s[1],i=s[3])}else i=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(this.options.pedantic&&!/>$/.test(r)?n=n.slice(1):n=n.slice(1,-1)),ft(t,{href:n&&n.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let n=(r[2]||r[1]).replace(/\s+/g," ");if(n=t[n.toLowerCase()],!n||!n.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return ft(r,n,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(!n||n[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=n[1]||n[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const s=n[0].length-1;let a,o,c=s,f=0;const g=n[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,t=t.slice(-1*e.length+s);(n=g.exec(t))!=null;){if(a=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!a)continue;if(o=a.length,n[3]||n[4]){c+=o;continue}else if((n[5]||n[6])&&s%3&&!((s+o)%3)){f+=o;continue}if(c-=o,c>0)continue;if(o=Math.min(o,o+c+f),Math.min(s,o)%2){const d=e.slice(1,s+n.index+o);return{type:"em",raw:e.slice(0,s+n.index+o+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}const m=e.slice(2,s+n.index+o-1);return{type:"strong",raw:e.slice(0,s+n.index+o+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const n=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return n&&i&&(r=r.substring(1,r.length-1)),r=q(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let n,i;return r[2]==="@"?(n=q(this.options.mangle?t(r[1]):r[1]),i="mailto:"+n):(n=q(r[1]),i=n),{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let n,i;if(r[2]==="@")n=q(this.options.mangle?t(r[0]):r[0]),i="mailto:"+n;else{let s;do s=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(s!==r[0]);n=q(r[0]),r[1]==="www."?i="http://"+n:i=n}return{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let n;return this.lexer.state.inRawBlock?n=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):q(r[0]):r[0]:n=q(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:n}}}}const y={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ie,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};y._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;y._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;y.def=S(y.def).replace("label",y._label).replace("title",y._title).getRegex();y.bullet=/(?:[*+-]|\d{1,9}[.)])/;y.listItemStart=S(/^( *)(bull) */).replace("bull",y.bullet).getRegex();y.list=S(y.list).replace(/bull/g,y.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+y.def.source+")").getRegex();y._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";y._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;y.html=S(y.html,"i").replace("comment",y._comment).replace("tag",y._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();y.paragraph=S(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.blockquote=S(y.blockquote).replace("paragraph",y.paragraph).getRegex();y.normal=W({},y);y.gfm=W({},y.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});y.gfm.table=S(y.gfm.table).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.gfm.paragraph=S(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",y.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.pedantic=W({},y.normal,{html:S(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",y._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ie,paragraph:S(y.normal._paragraph).replace("hr",y.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",y.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const w={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ie,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ie,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};w._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";w.punctuation=S(w.punctuation).replace(/punctuation/g,w._punctuation).getRegex();w.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;w.escapedEmSt=/\\\*|\\_/g;w._comment=S(y._comment).replace("(?:-->|$)","-->").getRegex();w.emStrong.lDelim=S(w.emStrong.lDelim).replace(/punct/g,w._punctuation).getRegex();w.emStrong.rDelimAst=S(w.emStrong.rDelimAst,"g").replace(/punct/g,w._punctuation).getRegex();w.emStrong.rDelimUnd=S(w.emStrong.rDelimUnd,"g").replace(/punct/g,w._punctuation).getRegex();w._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;w._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;w._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;w.autolink=S(w.autolink).replace("scheme",w._scheme).replace("email",w._email).getRegex();w._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;w.tag=S(w.tag).replace("comment",w._comment).replace("attribute",w._attribute).getRegex();w._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;w._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;w._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;w.link=S(w.link).replace("label",w._label).replace("href",w._href).replace("title",w._title).getRegex();w.reflink=S(w.reflink).replace("label",w._label).replace("ref",y._label).getRegex();w.nolink=S(w.nolink).replace("ref",y._label).getRegex();w.reflinkSearch=S(w.reflinkSearch,"g").replace("reflink",w.reflink).replace("nolink",w.nolink).getRegex();w.normal=W({},w);w.pedantic=W({},w.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:S(/^!?\[(label)\]\((.*?)\)/).replace("label",w._label).getRegex(),reflink:S(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",w._label).getRegex()});w.gfm=W({},w.normal,{escape:S(w.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});w.gfm.url=S(w.gfm.url,"i").replace("email",w.gfm._extended_email).getRegex();w.breaks=W({},w.gfm,{br:S(w.br).replace("{2,}","*").getRegex(),text:S(w.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Zn(l){return l.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function ut(l){let e="",t,r;const n=l.length;for(t=0;t<n;t++)r=l.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class K{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||fe,this.options.tokenizer=this.options.tokenizer||new Be,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:y.normal,inline:w.normal};this.options.pedantic?(t.block=y.pedantic,t.inline=w.pedantic):this.options.gfm&&(t.block=y.gfm,this.options.breaks?t.inline=w.breaks:t.inline=w.gfm),this.tokenizer.rules=t}static get rules(){return{block:y,inline:w}}static lex(e,t){return new K(t).lex(e)}static lexInline(e,t){return new K(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,o,c)=>o+"    ".repeat(c.length));let r,n,i,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&(n.type==="paragraph"||n.type==="text")?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&(n.type==="paragraph"||n.type==="text")?(n.raw+=`
`+r.raw,n.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const o=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(f){c=f.call({lexer:this},o),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){n=t[t.length-1],s&&n.type==="paragraph"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),s=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&n.type==="text"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,n,i,s=e,a,o,c;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)f.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+ct("a",a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,a.index)+"["+ct("a",a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(c=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(r=f.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&r.type==="text"&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),n=t[t.length-1],n&&r.type==="text"&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,s,c)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e,ut)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,ut))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const g=e.slice(1);let m;this.options.extensions.startInline.forEach(function(d){m=d.call({lexer:this},g),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(i=e.substring(0,f+1))}if(r=this.tokenizer.inlineText(i,Zn)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(c=r.raw.slice(-1)),o=!0,n=t[t.length-1],n&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}}class Me{constructor(e){this.options=e||fe}code(e,t,r){const n=(t||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,n);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,n?'<pre><code class="'+this.options.langPrefix+q(n,!0)+'">'+(r?e:q(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:q(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,r,n){if(this.options.headerIds){const i=this.options.headerPrefix+n.slug(r);return`<h${t} id="${i}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,r){const n=t?"ol":"ul",i=t&&r!==1?' start="'+r+'"':"";return"<"+n+i+`>
`+e+"</"+n+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(e=ot(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let n='<a href="'+q(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>",n}image(e,t,r){if(e=ot(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let n=`<img src="${e}" alt="${r}"`;return t&&(n+=` title="${t}"`),n+=this.options.xhtml?"/>":">",n}text(e){return e}}class Dt{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Ne{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do n++,r=e+"-"+n;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class te{constructor(e){this.options=e||fe,this.options.renderer=this.options.renderer||new Me,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Dt,this.slugger=new Ne}static parse(e,t){return new te(t).parse(e)}static parseInline(e,t){return new te(t).parseInline(e)}parse(e,t=!0){let r="",n,i,s,a,o,c,f,g,m,d,u,k,$,T,U,Z,X,J,re;const _e=e.length;for(n=0;n<_e;n++){if(d=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(re=this.options.extensions.renderers[d.type].call({parser:this},d),re!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){r+=re||"";continue}switch(d.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(d.tokens),d.depth,It(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(g="",f="",a=d.header.length,i=0;i<a;i++)f+=this.renderer.tablecell(this.parseInline(d.header[i].tokens),{header:!0,align:d.align[i]});for(g+=this.renderer.tablerow(f),m="",a=d.rows.length,i=0;i<a;i++){for(c=d.rows[i],f="",o=c.length,s=0;s<o;s++)f+=this.renderer.tablecell(this.parseInline(c[s].tokens),{header:!1,align:d.align[s]});m+=this.renderer.tablerow(f)}r+=this.renderer.table(g,m);continue}case"blockquote":{m=this.parse(d.tokens),r+=this.renderer.blockquote(m);continue}case"list":{for(u=d.ordered,k=d.start,$=d.loose,a=d.items.length,m="",i=0;i<a;i++)U=d.items[i],Z=U.checked,X=U.task,T="",U.task&&(J=this.renderer.checkbox(Z),$?U.tokens.length>0&&U.tokens[0].type==="paragraph"?(U.tokens[0].text=J+" "+U.tokens[0].text,U.tokens[0].tokens&&U.tokens[0].tokens.length>0&&U.tokens[0].tokens[0].type==="text"&&(U.tokens[0].tokens[0].text=J+" "+U.tokens[0].tokens[0].text)):U.tokens.unshift({type:"text",text:J}):T+=J),T+=this.parse(U.tokens,$),m+=this.renderer.listitem(T,X,Z);r+=this.renderer.list(m,u,k);continue}case"html":{r+=this.renderer.html(d.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(m=d.tokens?this.parseInline(d.tokens):d.text;n+1<_e&&e[n+1].type==="text";)d=e[++n],m+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);r+=t?this.renderer.paragraph(m):m;continue}default:{const ue='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(ue);return}else throw new Error(ue)}}}return r}parseInline(e,t){t=t||this.renderer;let r="",n,i,s;const a=e.length;for(n=0;n<a;n++){if(i=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(s=this.options.extensions.renderers[i.type].call({parser:this},i),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=s||"";continue}switch(i.type){case"escape":{r+=t.text(i.text);break}case"html":{r+=t.html(i.text);break}case"link":{r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{r+=t.image(i.href,i.title,i.text);break}case"strong":{r+=t.strong(this.parseInline(i.tokens,t));break}case"em":{r+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{r+=t.codespan(i.text);break}case"br":{r+=t.br();break}case"del":{r+=t.del(this.parseInline(i.tokens,t));break}case"text":{r+=t.text(i.text);break}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(o);return}else throw new Error(o)}}}return r}}function A(l,e,t){if(typeof l=="undefined"||l===null)throw new Error("marked(): input parameter is undefined or null");if(typeof l!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=W({},A.defaults,e||{}),Tt(e),t){const r=e.highlight;let n;try{n=K.lex(l,e)}catch(a){return t(a)}const i=function(a){let o;if(!a)try{e.walkTokens&&A.walkTokens(n,e.walkTokens),o=te.parse(n,e)}catch(c){a=c}return e.highlight=r,a?t(a):t(null,o)};if(!r||r.length<3||(delete e.highlight,!n.length))return i();let s=0;A.walkTokens(n,function(a){a.type==="code"&&(s++,setTimeout(()=>{r(a.text,a.lang,function(o,c){if(o)return i(o);c!=null&&c!==a.text&&(a.text=c,a.escaped=!0),s--,s===0&&i()})},0))}),s===0&&i();return}try{const r=K.lex(l,e);return e.walkTokens&&A.walkTokens(r,e.walkTokens),te.parse(r,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+q(r.message+"",!0)+"</pre>";throw r}}A.options=A.setOptions=function(l){return W(A.defaults,l),Rn(A.defaults),A};A.getDefaults=Ct;A.defaults=fe;A.use=function(...l){const e=W({},...l),t=A.defaults.extensions||{renderers:{},childTokens:{}};let r;l.forEach(n=>{if(n.extensions&&(r=!0,n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const s=t.renderers?t.renderers[i.name]:null;s?t.renderers[i.name]=function(...a){let o=i.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:t.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)})),n.renderer){const i=A.defaults.renderer||new Me;for(const s in n.renderer){const a=i[s];i[s]=(...o)=>{let c=n.renderer[s].apply(i,o);return c===!1&&(c=a.apply(i,o)),c}}e.renderer=i}if(n.tokenizer){const i=A.defaults.tokenizer||new Be;for(const s in n.tokenizer){const a=i[s];i[s]=(...o)=>{let c=n.tokenizer[s].apply(i,o);return c===!1&&(c=a.apply(i,o)),c}}e.tokenizer=i}if(n.walkTokens){const i=A.defaults.walkTokens;e.walkTokens=function(s){n.walkTokens.call(this,s),i&&i.call(this,s)}}r&&(e.extensions=t),A.setOptions(e)})};A.walkTokens=function(l,e){for(const t of l)switch(e.call(A,t),t.type){case"table":{for(const r of t.header)A.walkTokens(r.tokens,e);for(const r of t.rows)for(const n of r)A.walkTokens(n.tokens,e);break}case"list":{A.walkTokens(t.items,e);break}default:A.defaults.extensions&&A.defaults.extensions.childTokens&&A.defaults.extensions.childTokens[t.type]?A.defaults.extensions.childTokens[t.type].forEach(function(r){A.walkTokens(t[r],e)}):t.tokens&&A.walkTokens(t.tokens,e)}};A.parseInline=function(l,e){if(typeof l=="undefined"||l===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof l!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected");e=W({},A.defaults,e||{}),Tt(e);try{const t=K.lexInline(l,e);return e.walkTokens&&A.walkTokens(t,e.walkTokens),te.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+q(t.message+"",!0)+"</pre>";throw t}};A.Parser=te;A.parser=te.parse;A.Renderer=Me;A.TextRenderer=Dt;A.Lexer=K;A.lexer=K.lex;A.Tokenizer=Be;A.Slugger=Ne;A.parse=A;A.options;A.setOptions;A.use;A.walkTokens;A.parseInline;te.parse;K.lex;const Rt={};function Vn(l){let e;return{c(){e=V(l[1])},m(t,r){b(t,e,r)},p(t,r){r&2&&ie(e,t[1])},i:B,o:B,d(t){t&&_(e)}}}function Qn(l){let e,t;const r=l[5].default,n=M(r,l,l[4],null);return{c(){e=x("h6"),n&&n.c(),z(e,"id",l[2])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&16)&&L(n,r,i,i[4],t?N(r,i[4],s,null):O(i[4]),null),(!t||s&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Kn(l){let e,t;const r=l[5].default,n=M(r,l,l[4],null);return{c(){e=x("h5"),n&&n.c(),z(e,"id",l[2])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&16)&&L(n,r,i,i[4],t?N(r,i[4],s,null):O(i[4]),null),(!t||s&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Xn(l){let e,t;const r=l[5].default,n=M(r,l,l[4],null);return{c(){e=x("h4"),n&&n.c(),z(e,"id",l[2])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&16)&&L(n,r,i,i[4],t?N(r,i[4],s,null):O(i[4]),null),(!t||s&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Jn(l){let e,t;const r=l[5].default,n=M(r,l,l[4],null);return{c(){e=x("h3"),n&&n.c(),z(e,"id",l[2])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&16)&&L(n,r,i,i[4],t?N(r,i[4],s,null):O(i[4]),null),(!t||s&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Yn(l){let e,t;const r=l[5].default,n=M(r,l,l[4],null);return{c(){e=x("h2"),n&&n.c(),z(e,"id",l[2])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&16)&&L(n,r,i,i[4],t?N(r,i[4],s,null):O(i[4]),null),(!t||s&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function er(l){let e,t;const r=l[5].default,n=M(r,l,l[4],null);return{c(){e=x("h1"),n&&n.c(),z(e,"id",l[2])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&16)&&L(n,r,i,i[4],t?N(r,i[4],s,null):O(i[4]),null),(!t||s&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function tr(l){let e,t,r,n;const i=[er,Yn,Jn,Xn,Kn,Qn,Vn],s=[];function a(o,c){return o[0]===1?0:o[0]===2?1:o[0]===3?2:o[0]===4?3:o[0]===5?4:o[0]===6?5:6}return e=a(l),t=s[e]=i[e](l),{c(){t.c(),r=E()},m(o,c){s[e].m(o,c),b(o,r,c),n=!0},p(o,[c]){let f=e;e=a(o),e===f?s[e].p(o,c):(D(),h(s[f],1,1,()=>{s[f]=null}),R(),t=s[e],t?t.p(o,c):(t=s[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){h(t),n=!1},d(o){s[e].d(o),o&&_(r)}}}function nr(l,e,t){let r,{$$slots:n={},$$scope:i}=e,{depth:s}=e,{raw:a}=e,{text:o}=e;const{slug:c,getOptions:f}=Yt(Rt),g=f();return l.$$set=m=>{"depth"in m&&t(0,s=m.depth),"raw"in m&&t(1,a=m.raw),"text"in m&&t(3,o=m.text),"$$scope"in m&&t(4,i=m.$$scope)},l.$$.update=()=>{l.$$.dirty&8&&t(2,r=g.headerIds?g.headerPrefix+c(o):void 0)},[s,a,r,o,i,n]}class rr extends G{constructor(e){super(),P(this,e,nr,tr,j,{depth:0,raw:1,text:3})}}function ir(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("p"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function lr(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class sr extends G{constructor(e){super(),P(this,e,lr,ir,j,{})}}function or(l){let e;const t=l[3].default,r=M(t,l,l[2],null);return{c(){r&&r.c()},m(n,i){r&&r.m(n,i),e=!0},p(n,[i]){r&&r.p&&(!e||i&4)&&L(r,t,n,n[2],e?N(t,n[2],i,null):O(n[2]),null)},i(n){e||(p(r,n),e=!0)},o(n){h(r,n),e=!1},d(n){r&&r.d(n)}}}function ar(l,e,t){let{$$slots:r={},$$scope:n}=e,{text:i}=e,{raw:s}=e;return l.$$set=a=>{"text"in a&&t(0,i=a.text),"raw"in a&&t(1,s=a.raw),"$$scope"in a&&t(2,n=a.$$scope)},[i,s,n,r]}class cr extends G{constructor(e){super(),P(this,e,ar,or,j,{text:0,raw:1})}}function fr(l){let e,t;return{c(){e=x("img"),Ee(e.src,t=l[0])||z(e,"src",t),z(e,"title",l[1]),z(e,"alt",l[2])},m(r,n){b(r,e,n)},p(r,[n]){n&1&&!Ee(e.src,t=r[0])&&z(e,"src",t),n&2&&z(e,"title",r[1]),n&4&&z(e,"alt",r[2])},i:B,o:B,d(r){r&&_(e)}}}function ur(l,e,t){let{href:r=""}=e,{title:n=void 0}=e,{text:i=""}=e;return l.$$set=s=>{"href"in s&&t(0,r=s.href),"title"in s&&t(1,n=s.title),"text"in s&&t(2,i=s.text)},[r,n,i]}class pr extends G{constructor(e){super(),P(this,e,ur,fr,j,{href:0,title:1,text:2})}}function dr(l){let e,t;const r=l[3].default,n=M(r,l,l[2],null);return{c(){e=x("a"),n&&n.c(),z(e,"href",l[0]),z(e,"title",l[1])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&4)&&L(n,r,i,i[2],t?N(r,i[2],s,null):O(i[2]),null),(!t||s&1)&&z(e,"href",i[0]),(!t||s&2)&&z(e,"title",i[1])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function hr(l,e,t){let{$$slots:r={},$$scope:n}=e,{href:i=""}=e,{title:s=void 0}=e;return l.$$set=a=>{"href"in a&&t(0,i=a.href),"title"in a&&t(1,s=a.title),"$$scope"in a&&t(2,n=a.$$scope)},[i,s,n,r]}class mr extends G{constructor(e){super(),P(this,e,hr,dr,j,{href:0,title:1})}}function gr(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("em"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function _r(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class br extends G{constructor(e){super(),P(this,e,_r,gr,j,{})}}function wr(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("del"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function kr(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class yr extends G{constructor(e){super(),P(this,e,kr,wr,j,{})}}function $r(l){let e,t=l[0].replace(/`/g,"")+"",r;return{c(){e=x("code"),r=V(t)},m(n,i){b(n,e,i),H(e,r)},p(n,[i]){i&1&&t!==(t=n[0].replace(/`/g,"")+"")&&ie(r,t)},i:B,o:B,d(n){n&&_(e)}}}function Ar(l,e,t){let{raw:r}=e;return l.$$set=n=>{"raw"in n&&t(0,r=n.raw)},[r]}class zr extends G{constructor(e){super(),P(this,e,Ar,$r,j,{raw:0})}}function xr(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("strong"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function vr(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class Cr extends G{constructor(e){super(),P(this,e,vr,xr,j,{})}}function Ir(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("table"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Tr(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class Dr extends G{constructor(e){super(),P(this,e,Tr,Ir,j,{})}}function Rr(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("thead"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Sr(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class jr extends G{constructor(e){super(),P(this,e,Sr,Rr,j,{})}}function Er(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("tbody"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Pr(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class Gr extends G{constructor(e){super(),P(this,e,Pr,Er,j,{})}}function Br(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("tr"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Mr(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class Nr extends G{constructor(e){super(),P(this,e,Mr,Br,j,{})}}function Lr(l){let e,t;const r=l[3].default,n=M(r,l,l[2],null);return{c(){e=x("td"),n&&n.c(),z(e,"align",l[1])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&4)&&L(n,r,i,i[2],t?N(r,i[2],s,null):O(i[2]),null),(!t||s&2)&&z(e,"align",i[1])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Or(l){let e,t;const r=l[3].default,n=M(r,l,l[2],null);return{c(){e=x("th"),n&&n.c(),z(e,"align",l[1])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&4)&&L(n,r,i,i[2],t?N(r,i[2],s,null):O(i[2]),null),(!t||s&2)&&z(e,"align",i[1])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Ur(l){let e,t,r,n;const i=[Or,Lr],s=[];function a(o,c){return o[0]?0:1}return e=a(l),t=s[e]=i[e](l),{c(){t.c(),r=E()},m(o,c){s[e].m(o,c),b(o,r,c),n=!0},p(o,[c]){let f=e;e=a(o),e===f?s[e].p(o,c):(D(),h(s[f],1,1,()=>{s[f]=null}),R(),t=s[e],t?t.p(o,c):(t=s[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){h(t),n=!1},d(o){s[e].d(o),o&&_(r)}}}function qr(l,e,t){let{$$slots:r={},$$scope:n}=e,{header:i}=e,{align:s}=e;return l.$$set=a=>{"header"in a&&t(0,i=a.header),"align"in a&&t(1,s=a.align),"$$scope"in a&&t(2,n=a.$$scope)},[i,s,n,r]}class Hr extends G{constructor(e){super(),P(this,e,qr,Ur,j,{header:0,align:1})}}function Fr(l){let e,t;const r=l[3].default,n=M(r,l,l[2],null);return{c(){e=x("ul"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&4)&&L(n,r,i,i[2],t?N(r,i[2],s,null):O(i[2]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Wr(l){let e,t;const r=l[3].default,n=M(r,l,l[2],null);return{c(){e=x("ol"),n&&n.c(),z(e,"start",l[1])},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,s){n&&n.p&&(!t||s&4)&&L(n,r,i,i[2],t?N(r,i[2],s,null):O(i[2]),null),(!t||s&2)&&z(e,"start",i[1])},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Zr(l){let e,t,r,n;const i=[Wr,Fr],s=[];function a(o,c){return o[0]?0:1}return e=a(l),t=s[e]=i[e](l),{c(){t.c(),r=E()},m(o,c){s[e].m(o,c),b(o,r,c),n=!0},p(o,[c]){let f=e;e=a(o),e===f?s[e].p(o,c):(D(),h(s[f],1,1,()=>{s[f]=null}),R(),t=s[e],t?t.p(o,c):(t=s[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){h(t),n=!1},d(o){s[e].d(o),o&&_(r)}}}function Vr(l,e,t){let{$$slots:r={},$$scope:n}=e,{ordered:i}=e,{start:s}=e;return l.$$set=a=>{"ordered"in a&&t(0,i=a.ordered),"start"in a&&t(1,s=a.start),"$$scope"in a&&t(2,n=a.$$scope)},[i,s,n,r]}class Qr extends G{constructor(e){super(),P(this,e,Vr,Zr,j,{ordered:0,start:1})}}function Kr(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("li"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Xr(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class Jr extends G{constructor(e){super(),P(this,e,Xr,Kr,j,{})}}function Yr(l){let e;return{c(){e=x("hr")},m(t,r){b(t,e,r)},p:B,i:B,o:B,d(t){t&&_(e)}}}class ei extends G{constructor(e){super(),P(this,e,null,Yr,j,{})}}function ti(l){let e,t;return{c(){e=new Wt(!1),t=E(),e.a=t},m(r,n){e.m(l[0],r,n),b(r,t,n)},p(r,[n]){n&1&&e.p(r[0])},i:B,o:B,d(r){r&&_(t),r&&e.d()}}}function ni(l,e,t){let{text:r}=e;return l.$$set=n=>{"text"in n&&t(0,r=n.text)},[r]}class ri extends G{constructor(e){super(),P(this,e,ni,ti,j,{text:0})}}function ii(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("blockquote"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(e,null),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function li(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class si extends G{constructor(e){super(),P(this,e,li,ii,j,{})}}function oi(l){let e,t,r;return{c(){e=x("pre"),t=x("code"),r=V(l[1]),z(e,"class",l[0])},m(n,i){b(n,e,i),H(e,t),H(t,r)},p(n,[i]){i&2&&ie(r,n[1]),i&1&&z(e,"class",n[0])},i:B,o:B,d(n){n&&_(e)}}}function ai(l,e,t){let{lang:r}=e,{text:n}=e;return l.$$set=i=>{"lang"in i&&t(0,r=i.lang),"text"in i&&t(1,n=i.text)},[r,n]}class ci extends G{constructor(e){super(),P(this,e,ai,oi,j,{lang:0,text:1})}}function fi(l){let e,t;const r=l[1].default,n=M(r,l,l[0],null);return{c(){e=x("br"),n&&n.c()},m(i,s){b(i,e,s),n&&n.m(i,s),t=!0},p(i,[s]){n&&n.p&&(!t||s&1)&&L(n,r,i,i[0],t?N(r,i[0],s,null):O(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){h(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function ui(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class pi extends G{constructor(e){super(),P(this,e,ui,fi,j,{})}}const di={heading:rr,paragraph:sr,text:cr,image:pr,link:mr,em:br,strong:Cr,codespan:zr,del:yr,table:Dr,tablehead:jr,tablebody:Gr,tablerow:Nr,tablecell:Hr,list:Qr,orderedlistitem:null,unorderedlistitem:null,listitem:Jr,hr:ei,html:ri,blockquote:si,code:ci,br:pi},hi={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function mi(l){let e,t;return e=new se({props:{tokens:l[0],renderers:l[1]}}),{c(){I(e.$$.fragment)},m(r,n){v(e,r,n),t=!0},p(r,[n]){const i={};n&1&&(i.tokens=r[0]),n&2&&(i.renderers=r[1]),e.$set(i)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){h(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function gi(l,e,t){let r,n,i,{source:s=""}=e,{renderers:a={}}=e,{options:o={}}=e,{isInline:c=!1}=e;const f=Xt();let g,m,d;return Jt(Rt,{slug:u=>r?r.slug(u):"",getOptions:()=>n}),xt(()=>{t(7,d=!0)}),l.$$set=u=>{"source"in u&&t(2,s=u.source),"renderers"in u&&t(3,a=u.renderers),"options"in u&&t(4,o=u.options),"isInline"in u&&t(5,c=u.isInline)},l.$$.update=()=>{l.$$.dirty&4&&(r=s?new Ne:void 0),l.$$.dirty&16&&t(8,n=pe(pe({},hi),o)),l.$$.dirty&357&&(t(6,m=new K(n)),t(0,g=c?m.inlineTokens(s):m.lex(s)),f("parsed",{tokens:g})),l.$$.dirty&8&&t(1,i=pe(pe({},di),a)),l.$$.dirty&129&&d&&f("parsed",{tokens:g})},[g,i,s,a,o,c,m,d,n]}class _i extends G{constructor(e){super(),P(this,e,gi,mi,j,{source:2,renderers:3,options:4,isInline:5})}}function bi(l){return l<.5?4*l*l*l:.5*Math.pow(2*l-2,3)+1}function Te(l,{delay:e=0,duration:t=400,easing:r=bi,amount:n=5,opacity:i=0}={}){const s=getComputedStyle(l),a=+s.opacity,o=s.filter==="none"?"":s.filter,c=a*(1-i);return{delay:e,duration:t,easing:r,css:(f,g)=>`opacity: ${a-c*g}; filter: ${o} blur(${g*n}px);`}}var wi="/revit-api/assets/logo-dh.ebfbfda1.svg";function pt(l){let e,t,r=l[1]>l[2]&&dt(l);return{c(){r&&r.c(),e=E()},m(n,i){r&&r.m(n,i),b(n,e,i),t=!0},p(n,i){n[1]>n[2]?r?(r.p(n,i),i&6&&p(r,1)):(r=dt(n),r.c(),p(r,1),r.m(e.parentNode,e)):r&&(D(),h(r,1,1,()=>{r=null}),R())},i(n){t||(p(r),t=!0)},o(n){h(r),t=!1},d(n){r&&r.d(n),n&&_(e)}}}function dt(l){let e,t,r,n;return{c(){e=x("p"),t=V(l[0]),z(e,"class","title svelte-lw7png")},m(i,s){b(i,e,s),H(e,t),n=!0},p(i,s){(!n||s&1)&&ie(t,i[0])},i(i){n||(Q(()=>{r||(r=Ce(e,Te,{},!0)),r.run(1)}),n=!0)},o(i){r||(r=Ce(e,Te,{},!1)),r.run(0),n=!1},d(i){i&&_(e),i&&r&&r.end()}}}function ht(l){let e,t,r=l[1]>l[2]&&mt();return{c(){r&&r.c(),e=E()},m(n,i){r&&r.m(n,i),b(n,e,i),t=!0},p(n,i){n[1]>n[2]?r?i&6&&p(r,1):(r=mt(),r.c(),p(r,1),r.m(e.parentNode,e)):r&&(D(),h(r,1,1,()=>{r=null}),R())},i(n){t||(p(r),t=!0)},o(n){h(r),t=!1},d(n){r&&r.d(n),n&&_(e)}}}function mt(l){let e,t,r;return{c(){e=x("footer"),e.textContent="Dawid Huczy\u0144ski",z(e,"class","svelte-lw7png")},m(n,i){b(n,e,i),r=!0},i(n){r||(Q(()=>{t||(t=Ce(e,Te,{},!0)),t.run(1)}),r=!0)},o(n){t||(t=Ce(e,Te,{},!1)),t.run(0),r=!1},d(n){n&&_(e),n&&t&&t.end()}}}function ki(l){let e=!1,t=()=>{e=!1},r,n,i,s,a,o,c,f,g,m;Q(l[3]),Q(l[4]);let d=l[0]&&pt(l),u=l[0]&&ht(l);return{c(){n=x("div"),i=x("img"),a=F(),d&&d.c(),o=F(),u&&u.c(),c=E(),z(i,"class","logo svelte-lw7png"),z(i,"alt",""),Ee(i.src,s=wi)||z(i,"src",s),z(n,"class","baner svelte-lw7png")},m(k,$){b(k,n,$),H(n,i),H(n,a),d&&d.m(n,null),b(k,o,$),u&&u.m(k,$),b(k,c,$),f=!0,g||(m=[ze(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(t,100),l[3]()}),ze(window,"resize",l[4])],g=!0)},p(k,[$]){$&2&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,k[1]),r=setTimeout(t,100)),k[0]?d?(d.p(k,$),$&1&&p(d,1)):(d=pt(k),d.c(),p(d,1),d.m(n,null)):d&&(D(),h(d,1,1,()=>{d=null}),R()),k[0]?u?(u.p(k,$),$&1&&p(u,1)):(u=ht(k),u.c(),p(u,1),u.m(c.parentNode,c)):u&&(D(),h(u,1,1,()=>{u=null}),R())},i(k){f||(p(d),p(u),f=!0)},o(k){h(d),h(u),f=!1},d(k){k&&_(n),d&&d.d(),k&&_(o),u&&u.d(k),k&&_(c),g=!1,ne(m)}}}function yi(l,e,t){let{title:r}=e,n,i;function s(){t(1,n=window.pageYOffset)}function a(){t(2,i=window.innerHeight)}return l.$$set=o=>{"title"in o&&t(0,r=o.title)},[r,n,i,s,a]}class $i extends G{constructor(e){super(),P(this,e,yi,ki,j,{title:0})}}function Ai(l){let e=!1,t=()=>{e=!1},r,n,i,s,a,o,c,f,g,m;return Q(l[5]),Q(l[6]),{c(){n=x("div"),i=x("div"),s=F(),a=x("p"),o=V(l[3]),c=V("/"),f=V(l[0]),z(i,"class","progress svelte-16znpub"),He(i,"width",l[4]+"%"),z(n,"class","bar svelte-16znpub"),z(a,"class","nrstrony svelte-16znpub")},m(d,u){b(d,n,u),H(n,i),b(d,s,u),b(d,a,u),H(a,o),H(a,c),H(a,f),g||(m=[ze(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(t,100),l[5]()}),ze(window,"resize",l[6])],g=!0)},p(d,[u]){u&2&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,d[1]),r=setTimeout(t,100)),u&16&&He(i,"width",d[4]+"%"),u&8&&ie(o,d[3]),u&1&&ie(f,d[0])},i:B,o:B,d(d){d&&_(n),d&&_(s),d&&_(a),g=!1,ne(m)}}}function zi(l,e,t){let r,{iloscSlajdow:n=1}=e,i,s,a=1;function o(){t(1,i=window.pageYOffset)}function c(){t(2,s=window.innerHeight)}return l.$$set=f=>{"iloscSlajdow"in f&&t(0,n=f.iloscSlajdow)},l.$$.update=()=>{l.$$.dirty&7&&t(4,r=i/(s*(n-1))*100),l.$$.dirty&6&&t(3,a=Math.floor(i/s)+1)},[n,i,s,a,r,o,c]}class xi extends G{constructor(e){super(),P(this,e,zi,Ai,j,{iloscSlajdow:0})}}function vi(l){let e;return{c(){e=x("nav"),e.innerHTML=`<a href="#2" class="svelte-8rp04l">Spotkanie 1</a> 
    <a href="#26" class="svelte-8rp04l">Spotkanie 2</a> 
    
    
    
    <a href="#33" class="svelte-8rp04l">Program 1</a> 
    <a href="#34" class="svelte-8rp04l">Program 2</a> 
    <a href="#35" class="svelte-8rp04l">Program 3</a> 
    <a href="#36" class="svelte-8rp04l">Program 4</a> 
    <a href="#37" class="svelte-8rp04l">Program 5</a>`,z(e,"class","svelte-8rp04l")},m(t,r){b(t,e,r)},p:B,i:B,o:B,d(t){t&&_(e)}}}class Ci extends G{constructor(e){super(),P(this,e,null,vi,j,{})}}let Ii=`

# Wprowadzenie do API Revita
## [dawid.huczynski.pl/revit-api](https://dawid.huczynski.pl/revit-api)
### [dawid.huczynski@gmail.com](dawid.huczynski@gmail.com)


---
# Spotkanie 1.

---
## Narz\u0119dzia i ustawianie \u015Brodowiska
- **Pyrevit** - addon do tworzenia w\u0142asnych dodatk\xF3w oraz ma\u0142y kombajn z narz\u0119dziami: <br>
  https://github.com/eirannejad/pyRevit/releases <br>
- **RevitPythonShell** - interaktywna konsola Pythona w Revicie: <br>
  https://github.com/architecture-building-systems/revitpythonshell/releases
- **stubs** - narz\u0119dzie do autouzupe\u0142niania Revitowych komend w VS Code: <br>
  https://www.macro4bim.com/post/create-python-stubs <br>
  https://github.com/gtalarico/ironpython-stubs <br>
- **RevitLookup** - narz\u0119dzie do podgl\u0105dania parametr\xF3w obiekt\xF3w Revicie: <br>
  https://github.com/jeremytammik/RevitLookup
- **git** - program do wersjonowania kodu i pracy w zespole, kombajn: <br>
  https://git-scm.com/

---
## Miejsca do szukania wiedzy:
- https://www.revitapidocs.com/
- https://apidocs.co/apps/revit/2021/
- https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html
- https://thebuildingcoder.typepad.com/
- http://wiki.theprovingground.org/revit-api
- https://dynamopythonprimer.gitbook.io/
- https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists
- https://github.com/gtalarico/python-revit-resources
- https://github.com/architecture-building-systems/revitpythonshell
- https://github.com/Amoursol/dynamoPython
- https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/


 ---
 ## Spos\xF3b czytania skrypt\xF3w
 <iframe
 src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=500&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=%2523%21%2520python3%250A%2523%2520-*-%2520coding%253A%2520utf-8%2520-*-%250Aimport%2520xyz%250Aimport%2520abc%250Afrom%2520foo%2520import%2520bar%250A%250ACONSTANT_X%2520%253D%25201%250ACONSTANT_Y%2520%253D%2520False%250ACONSTANT_Z%2520%253D%2520None%250A%250Adef%2520something%28a%252Cb%252Cc%29%253A%250A%2520%2520return%2520a%252Cb%252Cc%250A%250Adef%2520main%28%29%253A%250A%2520%2520return%2520something%28a%252Cb%252Cc%29%250A%250Aif%2520__name__%2520%253D%253D%2520%2522__main__%2522%253A%250A%2520%2520main%28%29"
 style="width: 900px; height: 459px; border:0; transform: scale(1); overflow:hidden;"
 sandbox="allow-scripts allow-same-origin">
</iframe>

 
---
## pipenv
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=500&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=20px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=pip%2520install%2520--user%2520pipenv%250A%250Apipenv%2520install%2520requests%250A%250Apipenv%2520run%2520python%2520main.py%250A%250Apipenv%2520shell"
  style="width: 800px; height: 332px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---
## U\u017Cywanie bibliotek pythona
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=700&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=20px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520sys%250Asys.path.append%28%27sciezka%252Fdo%252Fmodulow%27%29"
  style="width: 700px; height: 246px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---
## API a wersje pythona
 - API Dynamo - zale\u017Cnie od wersji Dynamo IronPython 2.7 / python 3.8
 - API RPSHELL (Python) - IronPython 2.7 / python 3.8
 - API Macros - IronPython 2.7

---
## J\u0119zyk statyczny i dynamiczny
Types - typy (int, float, str, Object, Enum, Element, Id):
- static types
- dynamic types

---
## Podstawy API
Kod do skopiowania do skrypt\xF3w Dynamo. NIE KOPIUJCIE TEGO, serio! :D<br>
s\u0142owo klucz: "Maintnance"
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=600&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=20px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520clr%2520%2523%2520.NET%27s%2520Common%2520Language%2520Runtime.%250A%250A%2523%2520Dodawanie%2520modulow.%250Aimport%2520sys%250Asys.path.append%28%27C%253A%255CProgram%2520Files%2520%28x86%29%255CIronPython%25202.7%255CLib%27%29%250A%250A%2523%2520Dodawanie%2520standarowych%2520typow%250Aimport%2520System%250Afrom%2520System%2520import%2520Array%250Afrom%2520System.Collections.Generic%2520import%2520*%250A%250A%2523%2520Dodawanie%2520standarowych%2520typow%2520Dynamo%250Aclr.AddReference%28%27ProtoGeometry%27%29%250Afrom%2520Autodesk.DesignScript.Geometry%2520import%2520*%250A%250A%2523%2520Dodawanie%2520standardowych%2520typow%2520Dynamo-Revit%250Aclr.AddReference%28%2522RevitNodes%2522%29%250Aimport%2520Revit%250Aclr.ImportExtensions%28Revit.Elements%29%250Aclr.ImportExtensions%28Revit.GeometryConversion%29%250A%250A%2523%2520Dodanie%2520TransactionManagera%2520i%2520DocumentManagera%250Aclr.AddReference%28%2522RevitServices%2522%29%250Aimport%2520RevitServices%250Afrom%2520RevitServices.Persistence%2520import%2520DocumentManager%2520%250Afrom%2520RevitServices.Transactions%2520import%2520TransactionManager%2520%250A%250A%2523%2520Dodawanie%2520API%2520Revita%250Aclr.AddReference%28%2522RevitAPI%2522%29%250Aclr.AddReference%28%2522RevitAPIUI%2522%29%250A%250Aimport%2520Autodesk%2520%250Afrom%2520Autodesk.Revit.DB%2520import%2520*%250Afrom%2520Autodesk.Revit.UI%2520import%2520*%250A%250Adoc%2520%253D%2520DocumentManager.Instance.CurrentDBDocument%250Auiapp%2520%253D%2520DocumentManager.Instance.CurrentUIApplication%2520%250Aapp%2520%253D%2520uiapp.Application%2520%250Auidoc%2520%253D%2520uiapp.ActiveUIDocument%250A"
  style="width: 800px; height: 965px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>


---
## Co ma skarpetka wsp\xF3lnego z Revitem?
jednostki
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=400&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=20px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=def%2520feet_to_meter%28feet%29%253A%250A%2520%2520%2520%2520return%2520feet%2520*%25200.3048%250A%250A%250Adef%2520meter_to_feet%28meter%29%253A%250A%2520%2520%2520%2520return%2520meter%2520%252F%25200.3048%250A%250A%250Adef%2520sqr_feet_to_meter%28sqrfeet%29%253A%250A%2520%2520%2520%2520return%2520sqrfeet%2520*%25200.09290304%250A%250A%250Adef%2520sqr_meter_to_feet%28sqrmeter%29%253A%250A%2520%2520%2520%2520return%2520sqrmeter%2520%252F%25200.09290304%250A"
  style="width: 900px; height: 402px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---
## Inny spos\xF3b na jednostki
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=800&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=detail_line%2520%253D%2520UnwrapElement%28IN%255B0%255D%29%250Adecimal_feet_length%2520%253D%2520detail_line.GeometryCurve.Length%250Ametric_length%2520%253D%2520UnitUtils.Convert%28decimal_feet_length%252C%2520DisplayUnitType.DUT_DECIMAL_FEET%252C%2520DisplayUnitType.DUT_MILLIMETERS%29%250AOUT%2520%253D%2520metric_length"
  style="width: 900px; height: 210px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---

## Struktura API i przeszukiwanie
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=800&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=20px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520os%250Aimport%2520types%250A%250Adef%2520walker%28lib%252C%2520name%252C%2520relations%253DNone%252C%2520limit%253D2%29%253A%250A%2520%2520%2520%2520relations%2520%253D%2520%255B%255B%2522%2522%252C%2520name%252C%2520lib.__doc__%255D%255D%2520if%2520relations%2520is%2520None%2520else%2520relations%250A%2520%2520%2520%2520IGNORE%2520%253D%2520%255Bstr%252C%2520int%252C%2520float%252C%2520complex%252C%2520list%252C%2520tuple%252C%2520range%252C%2520dict%252C%2520bool%252C%2520bytes%255D%250A%2520%2520%2520%2520if%2520limit%2520%253D%253D%25200%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520relations%250A%2520%2520%2520%2520else%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520limit%2520-%253D%25201%250A%2520%2520%2520%2520for%2520x%2520in%2520dir%28lib%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520not%2520x.startswith%28%2522_%2522%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520try%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520a%2520%253D%2520getattr%28lib%252C%2520x%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520type%28a%29%2520not%2520in%2520IGNORE%2520and%2520name%2520not%2520in%2520%255B%2522OSError%2522%252C%2520%2522Error%2522%255D%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520el%2520%253D%2520%255Bname%252C%2520f%2522%257Bname%257D.%257Bx%257D%2522%252C%2520a.__doc__%255D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520el%2520not%2520in%2520relations%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520relations.append%28el%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520relations%2520%253D%2520walker%28a%252C%2520f%2522%257Bname%257D.%257Bx%257D%2522%252C%2520relations%252C%2520limit%253Dlimit%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520except%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520pass%250A%2520%2520%2520%2520return%2520relations%250A%250A%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%2523%250Aimport%2520plotly.graph_objects%2520as%2520go%250Aimport%2520plotly%250A%250Arelations%2520%253D%2520walker%28plotly%252C%2520%2522plotly%2522%29%250Aparents%252C%2520labels%252C%2520helps%2520%253D%2520zip%28*relations%29%250A%250Afig%2520%253D%2520go.Figure%28%250A%2520%2520%2520%2520go.Treemap%28%250A%2520%2520%2520%2520%2520%2520%2520%2520labels%253Dlabels%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520parents%253Dparents%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2523%2520values%2520%253D%2520helps%252C%250A%2520%2520%2520%2520%29%250A%29%250A%250Afig.update_layout%28margin%253Ddict%28t%253D50%252C%2520l%253D25%252C%2520r%253D25%252C%2520b%253D25%29%29%250Aplotly.offline.plot%28fig%252C%2520filename%253D%2522.%252Findex.html%2522%29%250Afig.show%28%29%250A"
  style="width: 900px; height: 1003px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---
### [Autodesk.Revit](./revit-struktura.html)
U\u017Cyteczne komendy do przegl\u0105dania:
- dir <code>for x in dir(element):print(x)</code>
- help(element)

---
## Podstawowe klasy
## Element.*
<div class='trzy-kolumny'>
  <p>
    ArePhasesModifiable<br>
    AssemblyInstanceId<br>
    <strong>BoundingBox</strong><br>
    CanBeHidden<br>
    CanBeLocked<br>
    CanDeleteSubelement<br>
    CanHaveAnalyticalModel<br>
    CanHaveTypeAssigned<br>
    <strong>Category</strong><br>
    <strong>ChangeTypeId</strong><br>
    CreatedPhaseId<br>
    DeleteEntity<br>
    DeleteSubelement<br>
    DeleteSubelements<br>
    DemolishedPhaseId<br>
    DesignOption<br>
    Dispose<br>
    Document<br>
    Equals<br>
    <strong>Geometry</strong><br>
    GetAnalyticalModel<br>
    GetAnalyticalModelId<br>
    GetChangeTypeAny<br>
    GetChangeTypeElementAddition<br>
    GetChangeTypeElementDeletion<br>
    GetChangeTypeGeometry<br>
    GetChangeTypeParameter<br>
  </p>
  <p>
    GetDependentElements<br>
    GetEntity<br>
    GetEntitySchemaGuids<br>
    GetExternalFileReference<br>
    GetExternalResourceReference<br>
    GetExternalResourceReferences<br>
    GetGeneratingElementIds<br>
    GetGeometryObjectFromReference<br>
    GetHashCode<br>
    GetMaterialArea<br>
    GetMaterialIds<br>
    GetMaterialVolume<br>
    GetMonitoredLinkElementIds<br>
    GetMonitoredLocalElementIds<br>
    GetOrderedParameters<br>
    GetParameterFormatOptions<br>
    GetParameters<br>
    GetPhaseStatus<br>
    GetSubelements<br>
    GetType<br>
    <strong>GetTypeId</strong><br>
    GetValidTypes<br>
    GroupId<br>
    HasPhases<br>
    <strong>Id</strong><br>
    IsExternalFileReference<br>
    IsHidden<br>
  </p>
  <p>
    IsMonitoringLinkElement<br>
    IsMonitoringLocalElement<br>
    IsPhaseCreatedValid<br>
    IsPhaseDemolishedValid<br>
    IsTransient<br>
    IsValidObject<br>
    IsValidType<br>
    <strong>LevelId</strong><br>
    <strong>Location</strong><br>
    <strong>LookupParameter</strong><br>
    MemberwiseClone<br>
    <strong>Name</strong><br>
    OwnerViewId<br>
    Parameter<br>
    Parameters<br>
    <strong>ParametersMap</strong><br>
    Pinned<br>
    ReferenceEquals<br>
    RefersToExternalResourceReference<br>
    RefersToExternalResourceReferences<br>
    ReleaseUnmanagedResources<br>
    SetEntity<br>
    ToString<br>
    UniqueId<br>
    VersionGuid<br>
    ViewSpecific<br>
    WorksetId<br>
    getBoundingBox<br>
    setElementType<br>
  </p>
</div>

---
## Podstawowe klasy
## Wall.*
<div class='trzy-kolumny'>
  <p>
    ArePhasesModifiable<br>
    AssemblyInstanceId<br>
    <strong>BoundingBox</strong><br>
    CanBeHidden<br>
    CanBeLocked<br>
    CanDeleteSubelement<br>
    CanHaveAnalyticalModel<br>
    CanHaveTypeAssigned<br>
    <strong>Category</strong><br>
    <strong>ChangeTypeId</strong><br>
    <strong>Create</strong><br>
    CreatedPhaseId<br>
    CurtainGrid<br>
    DeleteEntity<br>
    DeleteSubelement<br>
    DeleteSubelements<br>
    DemolishedPhaseId<br>
    DesignOption<br>
    Dispose<br>
    Document<br>
    Equals<br>
    FindInserts<br>
    Flip<br>
    Flipped<br>
    <strong>Geometry</strong><br>
    GetAnalyticalModel<br>
    GetAnalyticalModelId<br>
    GetChangeTypeAny<br>
    GetChangeTypeElementAddition<br>
    GetChangeTypeElementDeletion<br>
    GetChangeTypeGeometry<br>
    GetChangeTypeParameter<br>
  </p>
  <p>
    <strong>GetDependentElements</strong><br>
    GetEntity<br>
    GetEntitySchemaGuids<br>
    GetExternalFileReference<br>
    GetExternalResourceReference<br>
    GetExternalResourceReferences<br>
    <strong>GetGeneratingElementIds</strong><br>
    GetGeometryObjectFromReference<br>
    GetHashCode<br>
    GetMaterialArea<br>
    GetMaterialIds<br>
    GetMaterialVolume<br>
    GetMonitoredLinkElementIds<br>
    GetMonitoredLocalElementIds<br>
    GetOrderedParameters<br>
    GetParameterFormatOptions<br>
    GetParameters<br>
    GetPhaseStatus<br>
    GetStackedWallMemberIds<br>
    GetSubelements<br>
    GetType<br>
    <strong>GetTypeId</strong><br>
    GetValidTypes<br>
    GroupId<br>
    HasPhases<br>
    <strong>Id</strong><br>
    IsExternalFileReference<br>
    IsHidden<br>
    IsMonitoringLinkElement<br>
    IsMonitoringLocalElement<br>
    IsPhaseCreatedValid<br>
    IsPhaseDemolishedValid<br>
  </p>
  <p>
    IsStackedWall<br>
    IsStackedWallMember<br>
    IsTransient<br>
    IsValidObject<br>
    IsValidType<br>
    <strong>LevelId</strong><br>
    <strong>Location</strong><br>
    <strong>LookupParameter</strong><br>
    MemberwiseClone<br>
    <strong>Name</strong><br>
    <strong>Orientation</strong><br>
    OwnerViewId<br>
    Parameter<br>
    Parameters<br>
    <strong>ParametersMap</strong><br>
    Pinned<br>
    ReferenceEquals<br>
    RefersToExternalResourceReference<br>
    RefersToExternalResourceReferences<br>
    ReleaseUnmanagedResources<br>
    <strong>SetEntity</strong><br>
    StackedWallOwnerId<br>
    StructuralUsage<br>
    ToString<br>
    UniqueId<br>
    VersionGuid<br>
    ViewSpecific<br>
    <strong>WallType</strong><br>
    <strong>Width</strong><br>
    WorksetId<br>
    getBoundingBox<br>
    setElementType<br>
  </p>
</div>

---
## Pyrevit
- mo\u017Cliwo\u015Bci
- tworzenie interfejsu do skryptu
- ustawianie addin\xF3w pod firm\u0119 (pipeline developera)


---
## Pyrevit

![](./pyrevit-tab.png)

1. Tab coloring - koloruje wam zak\u0142adki wg otwartych projekt\xF3w i rodzin. Minify revit UI - chowa wam g\xF3rne zak\u0142adki kt\xF3rych nie u\u017Cywacie np mi zostawia tylko Architecture, Annotate i Modify ( ustawia si\u0119 to klikaj\u0105c na ikonk\u0119 s SHIFTEM)
2. Sync Views - synchronizuje widoki np jak zmieniasz cz\u0119sto rzuty (np. sprawdzaj\u0105c szachty) to maj\u0105c w\u0142\u0105czon\u0105 t\u0105 opcj\u0119 zawsze widok l\u0105duje w tym samym miejscu co na poprzednim rzucie (resetuje si\u0119 np w momencie wej\u015Bcia na widok 3d)
3. Zaawansowane zaznaczanie - dzia\u0142a jak Pami\u0119\u0107 w kalkulatorze: zaznaczasz par\u0119 obiekt\xF3w dodajesz do pami\u0119ci, zaznaczasz inne dodajesz do pami\u0119ci. potem jak klikniesz MRead to zaznaczone zostan\u0105 wszystkie poprzednio zaznaczone elementy
4. Make Pattern - szybko mo\u017Cesz tworzy\u0107 szrafur\u0119 np trawy, kostki, wz\xF3r p\u0142ytek itp.
5. Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzaj\u0105ce si\u0119 legendy a potem kopiujesz je na wszystkie inne rysunki i wklejaj\u0105 si\u0119 w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje du\u017Co rysunk\xF3w wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunk\xF3w kt\xF3re przeklejam do tego narz\u0119dzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.
6. Duzo u\u0142atwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plik\xF3w.
7. Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie "kondycj\u0119" twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.
8. Team - wa\u017Cna rzecz do sprawdzania: Who did that? kto stworzy\u0142 elementi kto ostatni go edytowa\u0142.
9. Czyszczenie rzeczy kt\xF3re czasami jest zbyt dobre, ale przynajmniej potrafi wyczy\u015Bci\u0107 elementy kt\xF3rych nie czy\u015Bci purge.


---
## Pyrevit

![](./pyrevit-sheets.png)

5. Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzaj\u0105ce si\u0119 legendy a potem kopiujesz je na wszystkie inne rysunki i wklejaj\u0105 si\u0119 w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje du\u017Co rysunk\xF3w wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunk\xF3w kt\xF3re przeklejam do tego narz\u0119dzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.

---
## Pyrevit

![](./pyrevit-views.png)

6. Duzo u\u0142atwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plik\xF3w.
  

---
## Pyrevit

![](./pyrevit-checks1.png)

7. Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie "kondycj\u0119" twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.

---
## Pyrevit

![](./pyrevit-checks2.png)

7. Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie "kondycj\u0119" twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.
  
---
## Pyrevit

![](./pyrevit-checks3.png)

7. Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie "kondycj\u0119" twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.
  
---
## Pyrevit

![](./pyrevit-checks4.png)

7. Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie "kondycj\u0119" twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.
  
---
## Pyrevit

![](./pyrevit-who.png)

8. Team - wa\u017Cna rzecz do sprawdzania: Who did that? kto stworzy\u0142 elementi kto ostatni go edytowa\u0142.

---
# Spotkanie 2


---
## Pomocne biblioteki Pythona
 - math
 - itertools
 - collections.namedtuple
 - pandas
 - numpy
 - bokeh / plotly
 - pillow
 - k3d

 ---
## Dynamo
- UnwrapElement
- Transaction a TransactionGroup a TransactionManager
- uidoc.Selection
- pr\xF3ba wyja\u015Bnienia r\xF3\u017Cnic (importowane biblioteki).

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=577.75&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=true&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520clr%250A%250Aclr.AddReference%28%2522RevitAPI%2522%29%250AAutodesk.Revit.DB.Level%250A%250Aclr.AddReference%28%2522RevitNodes%2522%29%250Aimport%2520Revit%250Aclr.ImportExtensions%28Revit.Elements%29%250Aclr.ImportExtensions%28Revit.GeometryConversion%29%250ARevit.Elements.Level%250A"
  style="width: 489px; height: 325px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---
## Dynamo IN-OUT
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=600&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=input_list_of_numbers%2520%253D%2520IN%255B0%255D%2520%2523Here%2520we%2520take%2520an%2520input%250Aoutput_list_of_numbers%2520%253D%2520%255B%255D%2520%2523We%2520create%2520an%2520empty%2520list%2520to%2520output%250A%250Afor%2520number%2520in%2520input_list_of_numbers%253A%2520%2523Looping%2520through%2520input%250A%2520%2520%2520%2520new_number%2520%253D%2520number%2520%252B%25201%2520%2523Adding%25201%2520to%2520each%2520number%250A%2520%2520%2520%2520output_list_of_numbers.append%28new_number%29%250A%250AOUT%2520%253D%2520output_list_of_numbers%2520%2523Here%2520we%2520output%2520the%2520new%2520%27%252B1%27%2520list%250A"
  style="width: 900px; height: 287px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>



---
## Revit Python Shell
Interaktywna zabawa


---
## FilteredElementCollector
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=577.75&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=true&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=all_furniture%2520%253D%2520FilteredElementCollector%28doc%29%250A%250A%2523%2520Kategoria%250Aall_furniture.OfCategory%28BuiltInCategory.OST_Furniture%29%250A%250A%2523%2520Klasa%250Aall_furniture.OfClass%28Wall%29%250A%250A%2523%2520typ%2520czy%2520rzeczywisty%2520obiekt%250Aall_furniture.WhereElementIsNotElementType%28%29%250Aall_furniture.WhereElementIsElementType%28%29%250A%250A%2523%2520zamiana%2520z%2520zapytania%2520na%2520list%25C4%2599%2520obiekt%25C3%25B3w%250Aall_furniture.ToElements%28%29%250A%250A%2523%2520przyk%25C5%2582%25C4%2585dowy%2520jednolinijkowiec%250Aall_furniture%2520%253D%2520%28FilteredElementCollector%28doc%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.OfCategory%28BuiltInCategory.OST_Furniture%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.WhereElementIsNotElementType%28%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.ToElements%28%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%29%250A%250AOUT%2520%253D%2520all_furniture%250A"
  style="width: 594px; height: 574px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>


---
## uidoc.Selection
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=900&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520clr%250A%250Aclr.AddReference%28%2522RevitAPI%2522%29%250A%250Afrom%2520Autodesk.Revit.DB%2520import%2520%28%250A%2520%2520%2520%2520ElementId%252C%250A%29%250A%250Aclr.AddReference%28%2522System%2522%29%250Afrom%2520System.Collections.Generic%2520import%2520List%250A%250Auidoc%2520%253D%2520__revit__.ActiveUIDocument%2520%2520%2523%2520type%253A%2520ignore%250Adoc%2520%253D%2520__revit__.ActiveUIDocument.Document%2520%2520%2523%2520type%253A%2520ignore%250A%250A%250Adef%2520select%28elements%252C%2520by_id%253DFalse%252C%2520uidoc%253Duidoc%29%253A%250A%2520%2520%2520%2520%2522%2522%2522select%2520elements%2520in%2520view%2522%2522%2522%250A%2520%2520%2520%2520elements_by_id%2520%253D%2520%255B%255D%250A%2520%2520%2520%2520if%2520not%2520by_id%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520for%2520el%2520in%2520elements%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520elements_by_id.append%28el.Id%29%250A%2520%2520%2520%2520else%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520elements_by_id%2520%253D%2520elements%250A%2520%2520%2520%2520Icollection%2520%253D%2520List%255BElementId%255D%28elements_by_id%29%250A%2520%2520%2520%2520uidoc.Selection.SetElementIds%28Icollection%29"
  style="width: 900px; height: 593px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>


---
## Transaction
Jak dzia\u0142a wprowadzanie zmian w modelu. S\u0105 trzy typy transakcji:
- Transaction 
- TransactionGroup
- TransactionManager - Dynamo

---
## TransactionManager - Dynamo
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=634.75&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=TransactionManager.Instance.EnsureInTransaction%28doc%29%250Azrob_cos%28%29%250ATransactionManager.Instance.TransactionTaskDone%28%29%250A"
  style="width: 635px; height: 191px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>



--- 
## Transaction 
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=900&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=t%2520%253D%2520Transaction%28doc%252C%2520%27Opis%27%29%250At.Start%28%29%250Atry%253A%250A%2509zrob_cos%28%29%250Aexcept%253A%250A%2520%2520%2520%2520t.RollBack%28%29%250Aelse%253A%250A%2520%2520%2520%2520t.Commit%28%29%250A"
  style="width: 481px; height: 287px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>



---
## TransactionGroup
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=900&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=tg%2520%253D%2520TransactionGroup%28doc%252C%2520%2522%257B%257D%2520number%2520assing%2522.format%28el_type%29%29%250Atg.Start%28%29%250A%250At%2520%253D%2520Transaction%28doc%252C%2520%2522Zmiana%25201%2522%29%250At.Start%28%29%250Azrob_zmiana1%28%29%250At.Commit%28%29%250A%250Azrob_cos_inneg%28%29%250A%250At2%2520%253D%2520Transaction%28doc%252C%2520%2522Zmiana%25202%2522%29%250At2.Start%28%29%250Azrob_zmiana2%28%29%250At2.Commit%28%29%250A%250A%2523%2520Scalanie%2520dwoch%2520transakcji%250Atg.Assimilate%28%29%250A"
  style="width: 900px; height: 459px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>



---
# Praca wsp\xF3lna:

---
## Program 1

### narysuj \u015Bcian\u0119

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=900&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520clr%250A%250Aclr.AddReference%28%2522RevitServices%2522%29%250Aimport%2520RevitServices%250Afrom%2520RevitServices.Persistence%2520import%2520DocumentManager%250Afrom%2520RevitServices.Transactions%2520import%2520TransactionManager%250A%250Aclr.AddReference%28%2522RevitAPI%2522%29%250Afrom%2520Autodesk%2520import%2520Revit%250Afrom%2520Autodesk.Revit%2520import%2520DB%252C%2520UI%250Afrom%2520Autodesk.Revit.DB%2520import%2520%28%250A%2520%2520%2520%2520Wall%252C%250A%2520%2520%2520%2520Document%252C%250A%2520%2520%2520%2520Transaction%250A%29%250A%250A%2523%2520uidoc%2520%253D%2520DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument%250A%2523%2520doc%2520%253D%2520DocumentManager.Instance.CurrentDBDocument%250Auidoc%2520%253D%2520__revit__.ActiveUIDocument%2520%2523%2520type%253A%2520ignore%250Adoc%2520%253D%2520__revit__.ActiveUIDocument.Document%2520%2523%2520type%253A%2520ignore%250A%250At%2520%253D%2520Transaction%28doc%252C%2520%27Create%2520Wall%27%29%250At.Start%28%29%250Atry%253A%250A%2520%2520%2520%2520Wall.Create%28doc%252C%2520curve%252C%2520walltypeid%252C%2520levelid%252C%2520height%252C%2520offset%252C%2520flip%252C%2520structural%29%250Aexcept%253A%250A%2520%2520%2520%2520t.RollBack%28%29%250Aelse%253A%250A%2520%2520%2520%2520t.Commit%28%29"
  style="width: 900px; height: 666px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---
## Program 2

### modyfikuj parametry

---
## Program 3

### wstaw rodzin\u0119

---
## Program 4

### numeruj parkingi

---
## Program 5

### Aktualizuj osie


`;function gt(l,e,t){const r=l.slice();return r[3]=e[t],r}function _t(l){let e,t,r,n,i,s;r=new _i({props:{source:l[3]}});function a(...o){return l[1](l[3],...o)}return{c(){e=x("section"),t=x("div"),I(r.$$.fragment),n=F(),z(e,"id",i=(l[0].findIndex(a)+1).toString()),z(e,"class","svelte-op1al2")},m(o,c){b(o,e,c),H(e,t),v(r,t,null),H(e,n),s=!0},p(o,c){l=o},i(o){s||(p(r.$$.fragment,o),s=!0)},o(o){h(r.$$.fragment,o),s=!1},d(o){o&&_(e),C(r)}}}function Ti(l){let e,t,r,n,i,s,a,o,c,f;document.title=e=je,r=new $i({props:{title:je}}),i=new Ci({});let g=l[0],m=[];for(let u=0;u<g.length;u+=1)m[u]=_t(gt(l,g,u));const d=u=>h(m[u],1,1,()=>{m[u]=null});return c=new xi({props:{iloscSlajdow:l[0].length}}),{c(){t=F(),I(r.$$.fragment),n=F(),I(i.$$.fragment),s=F(),a=x("main");for(let u=0;u<m.length;u+=1)m[u].c();o=F(),I(c.$$.fragment)},m(u,k){b(u,t,k),v(r,u,k),b(u,n,k),v(i,u,k),b(u,s,k),b(u,a,k);for(let $=0;$<m.length;$+=1)m[$].m(a,null);b(u,o,k),v(c,u,k),f=!0},p(u,[k]){if((!f||k&0)&&e!==(e=je)&&(document.title=e),k&1){g=u[0];let $;for($=0;$<g.length;$+=1){const T=gt(u,g,$);m[$]?(m[$].p(T,k),p(m[$],1)):(m[$]=_t(T),m[$].c(),p(m[$],1),m[$].m(a,null))}for(D(),$=g.length;$<m.length;$+=1)d($);R()}},i(u){if(!f){p(r.$$.fragment,u),p(i.$$.fragment,u);for(let k=0;k<g.length;k+=1)p(m[k]);p(c.$$.fragment,u),f=!0}},o(u){h(r.$$.fragment,u),h(i.$$.fragment,u),m=m.filter(Boolean);for(let k=0;k<m.length;k+=1)h(m[k]);h(c.$$.fragment,u),f=!1},d(u){u&&_(t),C(r,u),u&&_(n),C(i,u),u&&_(s),u&&_(a),le(m,u),u&&_(o),C(c,u)}}}let je="Revit API";function Di(l){let e=Ii.split("---"),t=[];return e.forEach(n=>{let i=n.trim();t.push(i)}),[t,(n,i)=>i==n]}class Ri extends G{constructor(e){super(),P(this,e,Di,Ti,j,{})}}new Ri({target:document.getElementById("app")});
