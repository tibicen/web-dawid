var Et=Object.defineProperty;var Le=Object.getOwnPropertySymbols;var jt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable;var Ue=(s,e,t)=>e in s?Et(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,pe=(s,e)=>{for(var t in e||(e={}))jt.call(e,t)&&Ue(s,t,e[t]);if(Le)for(var t of Le(e))Pt.call(e,t)&&Ue(s,t,e[t]);return s};const Bt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};Bt();function M(){}const Mt=s=>s;function ee(s,e){for(const t in e)s[t]=e[t];return s}function wt(s){return s()}function Oe(){return Object.create(null)}function ne(s){s.forEach(wt)}function bt(s){return typeof s=="function"}function E(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let we;function je(s,e){return we||(we=document.createElement("a")),we.href=e,s===we.href}function Gt(s){return Object.keys(s).length===0}function G(s,e,t,r){if(s){const n=kt(s,e,t,r);return s[0](n)}}function kt(s,e,t,r){return s[1]&&r?ee(t.ctx.slice(),s[1](r(e))):t.ctx}function N(s,e,t,r){if(s[2]&&r){const n=s[2](r(t));if(e.dirty===void 0)return n;if(typeof n=="object"){const i=[],l=Math.max(e.dirty.length,n.length);for(let a=0;a<l;a+=1)i[a]=e.dirty[a]|n[a];return i}return e.dirty|n}return e.dirty}function L(s,e,t,r,n,i){if(n){const l=kt(e,t,r,i);s.p(l,n)}}function U(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Nt(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function He(s,e){const t={};e=new Set(e);for(const r in s)!e.has(r)&&r[0]!=="$"&&(t[r]=s[r]);return t}const At=typeof window!="undefined";let Lt=At?()=>window.performance.now():()=>Date.now(),Be=At?s=>requestAnimationFrame(s):M;const oe=new Set;function yt(s){oe.forEach(e=>{e.c(s)||(oe.delete(e),e.f())}),oe.size!==0&&Be(yt)}function Ut(s){let e;return oe.size===0&&Be(yt),{promise:new Promise(t=>{oe.add(e={c:s,f:t})}),abort(){oe.delete(e)}}}function q(s,e){s.appendChild(e)}function $t(s){if(!s)return document;const e=s.getRootNode?s.getRootNode():s.ownerDocument;return e&&e.host?e:s.ownerDocument}function Ot(s){const e=x("style");return Ht($t(s),e),e.sheet}function Ht(s,e){q(s.head||s,e)}function w(s,e,t){s.insertBefore(e,t||null)}function _(s){s.parentNode.removeChild(s)}function se(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function x(s){return document.createElement(s)}function qt(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function V(s){return document.createTextNode(s)}function F(){return V(" ")}function j(){return V("")}function ze(s,e,t,r){return s.addEventListener(e,t,r),()=>s.removeEventListener(e,t,r)}function z(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function Ft(s){return Array.from(s.childNodes)}function ie(s,e){e=""+e,s.wholeText!==e&&(s.data=e)}function qe(s,e,t,r){t===null?s.style.removeProperty(e):s.style.setProperty(e,t,r?"important":"")}function zt(s,e,{bubbles:t=!1,cancelable:r=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(s,t,r,e),n}class Wt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=qt(t.nodeName):this.e=x(t.nodeName),this.t=t,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)w(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}const xe=new Map;let ve=0;function Zt(s){let e=5381,t=s.length;for(;t--;)e=(e<<5)-e^s.charCodeAt(t);return e>>>0}function Vt(s,e){const t={stylesheet:Ot(e),rules:{}};return xe.set(s,t),t}function Fe(s,e,t,r,n,i,l,a=0){const o=16.666/r;let c=`{
`;for(let y=0;y<=1;y+=o){const I=e+(t-e)*i(y);c+=y*100+`%{${l(I,1-I)}}
`}const f=c+`100% {${l(t,1-t)}}
}`,g=`__svelte_${Zt(f)}_${a}`,h=$t(s),{stylesheet:d,rules:u}=xe.get(h)||Vt(h,s);u[g]||(u[g]=!0,d.insertRule(`@keyframes ${g} ${f}`,d.cssRules.length));const k=s.style.animation||"";return s.style.animation=`${k?`${k}, `:""}${g} ${r}ms linear ${n}ms 1 both`,ve+=1,g}function Qt(s,e){const t=(s.style.animation||"").split(", "),r=t.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),n=t.length-r.length;n&&(s.style.animation=r.join(", "),ve-=n,ve||Kt())}function Kt(){Be(()=>{ve||(xe.forEach(s=>{const{stylesheet:e}=s;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);s.rules={}}),xe.clear())})}let ge;function he(s){ge=s}function Te(){if(!ge)throw new Error("Function called outside component initialization");return ge}function xt(s){Te().$$.on_mount.push(s)}function Xt(){const s=Te();return(e,t,{cancelable:r=!1}={})=>{const n=s.$$.callbacks[e];if(n){const i=zt(e,t,{cancelable:r});return n.slice().forEach(l=>{l.call(s,i)}),!i.defaultPrevented}return!0}}function Jt(s,e){return Te().$$.context.set(s,e),e}function Yt(s){return Te().$$.context.get(s)}const me=[],We=[],Ae=[],Ze=[],en=Promise.resolve();let Pe=!1;function tn(){Pe||(Pe=!0,en.then(vt))}function Q(s){Ae.push(s)}const Re=new Set;let be=0;function vt(){const s=ge;do{for(;be<me.length;){const e=me[be];be++,he(e),nn(e.$$)}for(he(null),me.length=0,be=0;We.length;)We.pop()();for(let e=0;e<Ae.length;e+=1){const t=Ae[e];Re.has(t)||(Re.add(t),t())}Ae.length=0}while(me.length);for(;Ze.length;)Ze.pop()();Pe=!1,Re.clear(),he(s)}function nn(s){if(s.fragment!==null){s.update(),ne(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(Q)}}let de;function rn(){return de||(de=Promise.resolve(),de.then(()=>{de=null})),de}function Se(s,e,t){s.dispatchEvent(zt(`${e?"intro":"outro"}${t}`))}const ye=new Set;let Y;function T(){Y={r:0,c:[],p:Y}}function R(){Y.r||ne(Y.c),Y=Y.p}function p(s,e){s&&s.i&&(ye.delete(s),s.i(e))}function m(s,e,t,r){if(s&&s.o){if(ye.has(s))return;ye.add(s),Y.c.push(()=>{ye.delete(s),r&&(t&&s.d(1),r())}),s.o(e)}}const sn={duration:0};function Ce(s,e,t,r){let n=e(s,t),i=r?0:1,l=null,a=null,o=null;function c(){o&&Qt(s,o)}function f(h,d){const u=h.b-i;return d*=Math.abs(u),{a:i,b:h.b,d:u,duration:d,start:h.start,end:h.start+d,group:h.group}}function g(h){const{delay:d=0,duration:u=300,easing:k=Mt,tick:y=M,css:I}=n||sn,O={start:Lt()+d,b:h};h||(O.group=Y,Y.r+=1),l||a?a=O:(I&&(c(),o=Fe(s,i,h,u,d,k,I)),h&&y(0,1),l=f(O,u),Q(()=>Se(s,h,"start")),Ut(Z=>{if(a&&Z>a.start&&(l=f(a,u),a=null,Se(s,l.b,"start"),I&&(c(),o=Fe(s,i,l.b,l.duration,0,k,n.css))),l){if(Z>=l.end)y(i=l.b,1-i),Se(s,l.b,"end"),a||(l.b?c():--l.group.r||ne(l.group.c)),l=null;else if(Z>=l.start){const X=Z-l.start;i=l.a+l.d*k(X/l.duration),y(i,1-i)}}return!!(l||a)}))}return{run(h){bt(n)?rn().then(()=>{n=n(),g(h)}):g(h)},end(){c(),l=a=null}}}function ae(s,e){const t={},r={},n={$$scope:1};let i=s.length;for(;i--;){const l=s[i],a=e[i];if(a){for(const o in l)o in a||(r[o]=1);for(const o in a)n[o]||(t[o]=a[o],n[o]=1);s[i]=a}else for(const o in l)n[o]=1}for(const l in r)l in t||(t[l]=void 0);return t}function ce(s){return typeof s=="object"&&s!==null?s:{}}function D(s){s&&s.c()}function v(s,e,t,r){const{fragment:n,on_mount:i,on_destroy:l,after_update:a}=s.$$;n&&n.m(e,t),r||Q(()=>{const o=i.map(wt).filter(bt);l?l.push(...o):ne(o),s.$$.on_mount=[]}),a.forEach(Q)}function C(s,e){const t=s.$$;t.fragment!==null&&(ne(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ln(s,e){s.$$.dirty[0]===-1&&(me.push(s),tn(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function P(s,e,t,r,n,i,l,a=[-1]){const o=ge;he(s);const c=s.$$={fragment:null,ctx:null,props:i,update:M,not_equal:n,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Oe(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};l&&l(c.root);let f=!1;if(c.ctx=t?t(s,e.props||{},(g,h,...d)=>{const u=d.length?d[0]:h;return c.ctx&&n(c.ctx[g],c.ctx[g]=u)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](u),f&&ln(s,g)),h}):[],c.update(),f=!0,ne(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const g=Ft(e.target);c.fragment&&c.fragment.l(g),g.forEach(_)}else c.fragment&&c.fragment.c();e.intro&&p(s.$$.fragment),v(s,e.target,e.anchor,e.customElement),vt()}he(o)}class B{$destroy(){C(this,1),this.$destroy=M}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}$set(e){this.$$set&&!Gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function on(){const s=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||s(e)},xt(()=>{console.warn=s})}function Ve(s,e,t){const r=s.slice();return r[18]=e[t],r}function Qe(s,e,t){const r=s.slice();return r[18]=e[t],r}function Ke(s,e,t){const r=s.slice();return r[10]=e[t],r}function Xe(s,e,t){const r=s.slice();return r[13]=e[t],r[15]=t,r}function Je(s,e,t){const r=s.slice();return r[16]=e[t],r[15]=t,r}function Ye(s,e,t){const r=s.slice();return r[7]=e[t],r}function an(s){let e,t,r,n;const i=[pn,un,fn],l=[];function a(o,c){return o[0]==="table"?0:o[0]==="list"?1:2}return e=a(s),t=l[e]=i[e](s),{c(){t.c(),r=j()},m(o,c){l[e].m(o,c),w(o,r,c),n=!0},p(o,c){let f=e;e=a(o),e===f?l[e].p(o,c):(T(),m(l[f],1,1,()=>{l[f]=null}),R(),t=l[e],t?t.p(o,c):(t=l[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){m(t),n=!1},d(o){l[e].d(o),o&&_(r)}}}function cn(s){let e,t,r=s[1],n=[];for(let l=0;l<r.length;l+=1)n[l]=st(Ye(s,r,l));const i=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=j()},m(l,a){for(let o=0;o<n.length;o+=1)n[o].m(l,a);w(l,e,a),t=!0},p(l,a){if(a&34){r=l[1];let o;for(o=0;o<r.length;o+=1){const c=Ye(l,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=st(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(T(),o=r.length;o<n.length;o+=1)i(o);R()}},i(l){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)m(n[a]);t=!1},d(l){se(n,l),l&&_(e)}}}function fn(s){let e,t,r;const n=[s[6]];var i=s[5][s[0]];function l(a){let o={$$slots:{default:[hn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(l(s))),{c(){e&&D(e.$$.fragment),t=j()},m(a,o){e&&v(e,a,o),w(a,t,o),r=!0},p(a,o){const c=o&64?ae(n,[ce(a[6])]):{};if(o&8388706&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5][a[0]])){if(e){T();const f=e;m(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(l(a)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&m(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function un(s){let e,t,r,n;const i=[_n,gn],l=[];function a(o,c){return o[4]?0:1}return e=a(s),t=l[e]=i[e](s),{c(){t.c(),r=j()},m(o,c){l[e].m(o,c),w(o,r,c),n=!0},p(o,c){let f=e;e=a(o),e===f?l[e].p(o,c):(T(),m(l[f],1,1,()=>{l[f]=null}),R(),t=l[e],t?t.p(o,c):(t=l[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){m(t),n=!1},d(o){l[e].d(o),o&&_(r)}}}function pn(s){let e,t,r;var n=s[5].table;function i(l){return{props:{$$slots:{default:[Dn]},$$scope:{ctx:l}}}}return n&&(e=new n(i(s))),{c(){e&&D(e.$$.fragment),t=j()},m(l,a){e&&v(e,l,a),w(l,t,a),r=!0},p(l,a){const o={};if(a&8388716&&(o.$$scope={dirty:a,ctx:l}),n!==(n=l[5].table)){if(e){T();const c=e;m(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(l)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(l){r||(e&&p(e.$$.fragment,l),r=!0)},o(l){e&&m(e.$$.fragment,l),r=!1},d(l){l&&_(t),e&&C(e,l)}}}function dn(s){let e=s[6].raw+"",t;return{c(){t=V(e)},m(r,n){w(r,t,n)},p(r,n){n&64&&e!==(e=r[6].raw+"")&&ie(t,e)},i:M,o:M,d(r){r&&_(t)}}}function mn(s){let e,t;return e=new le({props:{tokens:s[1],renderers:s[5]}}),{c(){D(e.$$.fragment)},m(r,n){v(e,r,n),t=!0},p(r,n){const i={};n&2&&(i.tokens=r[1]),n&32&&(i.renderers=r[5]),e.$set(i)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){m(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function hn(s){let e,t,r,n;const i=[mn,dn],l=[];function a(o,c){return o[1]?0:1}return e=a(s),t=l[e]=i[e](s),{c(){t.c(),r=j()},m(o,c){l[e].m(o,c),w(o,r,c),n=!0},p(o,c){let f=e;e=a(o),e===f?l[e].p(o,c):(T(),m(l[f],1,1,()=>{l[f]=null}),R(),t=l[e],t?t.p(o,c):(t=l[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){m(t),n=!1},d(o){l[e].d(o),o&&_(r)}}}function gn(s){let e,t,r;const n=[{ordered:s[4]},s[6]];var i=s[5].list;function l(a){let o={$$slots:{default:[bn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(l(s))),{c(){e&&D(e.$$.fragment),t=j()},m(a,o){e&&v(e,a,o),w(a,t,o),r=!0},p(a,o){const c=o&80?ae(n,[o&16&&{ordered:a[4]},o&64&&ce(a[6])]):{};if(o&8388704&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5].list)){if(e){T();const f=e;m(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(l(a)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&m(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function _n(s){let e,t,r;const n=[{ordered:s[4]},s[6]];var i=s[5].list;function l(a){let o={$$slots:{default:[An]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(l(s))),{c(){e&&D(e.$$.fragment),t=j()},m(a,o){e&&v(e,a,o),w(a,t,o),r=!0},p(a,o){const c=o&80?ae(n,[o&16&&{ordered:a[4]},o&64&&ce(a[6])]):{};if(o&8388704&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5].list)){if(e){T();const f=e;m(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(l(a)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&m(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function wn(s){let e,t,r;return e=new le({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){D(e.$$.fragment),t=F()},m(n,i){v(e,n,i),w(n,t,i),r=!0},p(n,i){const l={};i&64&&(l.tokens=n[18].tokens),i&32&&(l.renderers=n[5]),e.$set(l)},i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){C(e,n),n&&_(t)}}}function et(s){let e,t,r;const n=[s[18]];var i=s[5].unorderedlistitem||s[5].listitem;function l(a){let o={$$slots:{default:[wn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(l(s))),{c(){e&&D(e.$$.fragment),t=j()},m(a,o){e&&v(e,a,o),w(a,t,o),r=!0},p(a,o){const c=o&64?ae(n,[ce(a[18])]):{};if(o&8388704&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5].unorderedlistitem||a[5].listitem)){if(e){T();const f=e;m(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(l(a)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&m(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function bn(s){let e,t,r=s[6].items,n=[];for(let l=0;l<r.length;l+=1)n[l]=et(Ve(s,r,l));const i=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=j()},m(l,a){for(let o=0;o<n.length;o+=1)n[o].m(l,a);w(l,e,a),t=!0},p(l,a){if(a&96){r=l[6].items;let o;for(o=0;o<r.length;o+=1){const c=Ve(l,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=et(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(T(),o=r.length;o<n.length;o+=1)i(o);R()}},i(l){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)m(n[a]);t=!1},d(l){se(n,l),l&&_(e)}}}function kn(s){let e,t,r;return e=new le({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){D(e.$$.fragment),t=F()},m(n,i){v(e,n,i),w(n,t,i),r=!0},p(n,i){const l={};i&64&&(l.tokens=n[18].tokens),i&32&&(l.renderers=n[5]),e.$set(l)},i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){C(e,n),n&&_(t)}}}function tt(s){let e,t,r;const n=[s[18]];var i=s[5].orderedlistitem||s[5].listitem;function l(a){let o={$$slots:{default:[kn]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)o=ee(o,n[c]);return{props:o}}return i&&(e=new i(l(s))),{c(){e&&D(e.$$.fragment),t=j()},m(a,o){e&&v(e,a,o),w(a,t,o),r=!0},p(a,o){const c=o&64?ae(n,[ce(a[18])]):{};if(o&8388704&&(c.$$scope={dirty:o,ctx:a}),i!==(i=a[5].orderedlistitem||a[5].listitem)){if(e){T();const f=e;m(f.$$.fragment,1,0,()=>{C(f,1)}),R()}i?(e=new i(l(a)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&p(e.$$.fragment,a),r=!0)},o(a){e&&m(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&C(e,a)}}}function An(s){let e,t,r=s[6].items,n=[];for(let l=0;l<r.length;l+=1)n[l]=tt(Qe(s,r,l));const i=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=j()},m(l,a){for(let o=0;o<n.length;o+=1)n[o].m(l,a);w(l,e,a),t=!0},p(l,a){if(a&96){r=l[6].items;let o;for(o=0;o<r.length;o+=1){const c=Qe(l,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=tt(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(T(),o=r.length;o<n.length;o+=1)i(o);R()}},i(l){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)m(n[a]);t=!1},d(l){se(n,l),l&&_(e)}}}function yn(s){let e,t,r;return e=new le({props:{tokens:s[16].tokens,renderers:s[5]}}),{c(){D(e.$$.fragment),t=F()},m(n,i){v(e,n,i),w(n,t,i),r=!0},p(n,i){const l={};i&4&&(l.tokens=n[16].tokens),i&32&&(l.renderers=n[5]),e.$set(l)},i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){C(e,n),n&&_(t)}}}function nt(s){let e,t,r;var n=s[5].tablecell;function i(l){return{props:{header:!0,align:l[6].align[l[15]]||"center",$$slots:{default:[yn]},$$scope:{ctx:l}}}}return n&&(e=new n(i(s))),{c(){e&&D(e.$$.fragment),t=j()},m(l,a){e&&v(e,l,a),w(l,t,a),r=!0},p(l,a){const o={};if(a&64&&(o.align=l[6].align[l[15]]||"center"),a&8388644&&(o.$$scope={dirty:a,ctx:l}),n!==(n=l[5].tablecell)){if(e){T();const c=e;m(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(l)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(l){r||(e&&p(e.$$.fragment,l),r=!0)},o(l){e&&m(e.$$.fragment,l),r=!1},d(l){l&&_(t),e&&C(e,l)}}}function $n(s){let e,t,r=s[2],n=[];for(let l=0;l<r.length;l+=1)n[l]=nt(Je(s,r,l));const i=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=j()},m(l,a){for(let o=0;o<n.length;o+=1)n[o].m(l,a);w(l,e,a),t=!0},p(l,a){if(a&100){r=l[2];let o;for(o=0;o<r.length;o+=1){const c=Je(l,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=nt(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(T(),o=r.length;o<n.length;o+=1)i(o);R()}},i(l){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)m(n[a]);t=!1},d(l){se(n,l),l&&_(e)}}}function zn(s){let e,t,r;var n=s[5].tablerow;function i(l){return{props:{$$slots:{default:[$n]},$$scope:{ctx:l}}}}return n&&(e=new n(i(s))),{c(){e&&D(e.$$.fragment),t=j()},m(l,a){e&&v(e,l,a),w(l,t,a),r=!0},p(l,a){const o={};if(a&8388708&&(o.$$scope={dirty:a,ctx:l}),n!==(n=l[5].tablerow)){if(e){T();const c=e;m(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(l)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(l){r||(e&&p(e.$$.fragment,l),r=!0)},o(l){e&&m(e.$$.fragment,l),r=!1},d(l){l&&_(t),e&&C(e,l)}}}function xn(s){let e,t;return e=new le({props:{tokens:s[13].tokens,renderers:s[5]}}),{c(){D(e.$$.fragment)},m(r,n){v(e,r,n),t=!0},p(r,n){const i={};n&8&&(i.tokens=r[13].tokens),n&32&&(i.renderers=r[5]),e.$set(i)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){m(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function rt(s){let e,t,r;var n=s[5].tablecell;function i(l){return{props:{header:!1,align:l[6].align[l[15]]||"center",$$slots:{default:[xn]},$$scope:{ctx:l}}}}return n&&(e=new n(i(s))),{c(){e&&D(e.$$.fragment),t=j()},m(l,a){e&&v(e,l,a),w(l,t,a),r=!0},p(l,a){const o={};if(a&64&&(o.align=l[6].align[l[15]]||"center"),a&8388648&&(o.$$scope={dirty:a,ctx:l}),n!==(n=l[5].tablecell)){if(e){T();const c=e;m(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(l)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(l){r||(e&&p(e.$$.fragment,l),r=!0)},o(l){e&&m(e.$$.fragment,l),r=!1},d(l){l&&_(t),e&&C(e,l)}}}function vn(s){let e,t,r=s[10],n=[];for(let l=0;l<r.length;l+=1)n[l]=rt(Xe(s,r,l));const i=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=F()},m(l,a){for(let o=0;o<n.length;o+=1)n[o].m(l,a);w(l,e,a),t=!0},p(l,a){if(a&104){r=l[10];let o;for(o=0;o<r.length;o+=1){const c=Xe(l,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=rt(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(T(),o=r.length;o<n.length;o+=1)i(o);R()}},i(l){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)m(n[a]);t=!1},d(l){se(n,l),l&&_(e)}}}function it(s){let e,t,r;var n=s[5].tablerow;function i(l){return{props:{$$slots:{default:[vn]},$$scope:{ctx:l}}}}return n&&(e=new n(i(s))),{c(){e&&D(e.$$.fragment),t=j()},m(l,a){e&&v(e,l,a),w(l,t,a),r=!0},p(l,a){const o={};if(a&8388712&&(o.$$scope={dirty:a,ctx:l}),n!==(n=l[5].tablerow)){if(e){T();const c=e;m(c.$$.fragment,1,0,()=>{C(c,1)}),R()}n?(e=new n(i(l)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else n&&e.$set(o)},i(l){r||(e&&p(e.$$.fragment,l),r=!0)},o(l){e&&m(e.$$.fragment,l),r=!1},d(l){l&&_(t),e&&C(e,l)}}}function Cn(s){let e,t,r=s[3],n=[];for(let l=0;l<r.length;l+=1)n[l]=it(Ke(s,r,l));const i=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=j()},m(l,a){for(let o=0;o<n.length;o+=1)n[o].m(l,a);w(l,e,a),t=!0},p(l,a){if(a&104){r=l[3];let o;for(o=0;o<r.length;o+=1){const c=Ke(l,r,o);n[o]?(n[o].p(c,a),p(n[o],1)):(n[o]=it(c),n[o].c(),p(n[o],1),n[o].m(e.parentNode,e))}for(T(),o=r.length;o<n.length;o+=1)i(o);R()}},i(l){if(!t){for(let a=0;a<r.length;a+=1)p(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)m(n[a]);t=!1},d(l){se(n,l),l&&_(e)}}}function Dn(s){let e,t,r,n,i;var l=s[5].tablehead;function a(f){return{props:{$$slots:{default:[zn]},$$scope:{ctx:f}}}}l&&(e=new l(a(s)));var o=s[5].tablebody;function c(f){return{props:{$$slots:{default:[Cn]},$$scope:{ctx:f}}}}return o&&(r=new o(c(s))),{c(){e&&D(e.$$.fragment),t=F(),r&&D(r.$$.fragment),n=j()},m(f,g){e&&v(e,f,g),w(f,t,g),r&&v(r,f,g),w(f,n,g),i=!0},p(f,g){const h={};if(g&8388708&&(h.$$scope={dirty:g,ctx:f}),l!==(l=f[5].tablehead)){if(e){T();const u=e;m(u.$$.fragment,1,0,()=>{C(u,1)}),R()}l?(e=new l(a(f)),D(e.$$.fragment),p(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}else l&&e.$set(h);const d={};if(g&8388712&&(d.$$scope={dirty:g,ctx:f}),o!==(o=f[5].tablebody)){if(r){T();const u=r;m(u.$$.fragment,1,0,()=>{C(u,1)}),R()}o?(r=new o(c(f)),D(r.$$.fragment),p(r.$$.fragment,1),v(r,n.parentNode,n)):r=null}else o&&r.$set(d)},i(f){i||(e&&p(e.$$.fragment,f),r&&p(r.$$.fragment,f),i=!0)},o(f){e&&m(e.$$.fragment,f),r&&m(r.$$.fragment,f),i=!1},d(f){e&&C(e,f),f&&_(t),f&&_(n),r&&C(r,f)}}}function st(s){let e,t;const r=[s[7],{renderers:s[5]}];let n={};for(let i=0;i<r.length;i+=1)n=ee(n,r[i]);return e=new le({props:n}),{c(){D(e.$$.fragment)},m(i,l){v(e,i,l),t=!0},p(i,l){const a=l&34?ae(r,[l&2&&ce(i[7]),l&32&&{renderers:i[5]}]):{};e.$set(a)},i(i){t||(p(e.$$.fragment,i),t=!0)},o(i){m(e.$$.fragment,i),t=!1},d(i){C(e,i)}}}function In(s){let e,t,r,n;const i=[cn,an],l=[];function a(o,c){return o[0]?o[5][o[0]]?1:-1:0}return~(e=a(s))&&(t=l[e]=i[e](s)),{c(){t&&t.c(),r=j()},m(o,c){~e&&l[e].m(o,c),w(o,r,c),n=!0},p(o,[c]){let f=e;e=a(o),e===f?~e&&l[e].p(o,c):(t&&(T(),m(l[f],1,1,()=>{l[f]=null}),R()),~e?(t=l[e],t?t.p(o,c):(t=l[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r)):t=null)},i(o){n||(p(t),n=!0)},o(o){m(t),n=!1},d(o){~e&&l[e].d(o),o&&_(r)}}}function Tn(s,e,t){const r=["type","tokens","header","rows","ordered","renderers"];let n=He(e,r),{type:i=void 0}=e,{tokens:l=void 0}=e,{header:a=void 0}=e,{rows:o=void 0}=e,{ordered:c=!1}=e,{renderers:f}=e;return on(),s.$$set=g=>{e=ee(ee({},e),Nt(g)),t(6,n=He(e,r)),"type"in g&&t(0,i=g.type),"tokens"in g&&t(1,l=g.tokens),"header"in g&&t(2,a=g.header),"rows"in g&&t(3,o=g.rows),"ordered"in g&&t(4,c=g.ordered),"renderers"in g&&t(5,f=g.renderers)},[i,l,a,o,c,f,n]}class le extends B{constructor(e){super(),P(this,e,Tn,In,E,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}function Ct(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let fe=Ct();function Rn(s){fe=s}const Sn=/[&<>"']/,En=/[&<>"']/g,jn=/[<>"']|&(?!#?\w+;)/,Pn=/[<>"']|&(?!#?\w+;)/g,Bn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lt=s=>Bn[s];function H(s,e){if(e){if(Sn.test(s))return s.replace(En,lt)}else if(jn.test(s))return s.replace(Pn,lt);return s}const Mn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Dt(s){return s.replace(Mn,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Gn=/(^|[^\[])\^/g;function S(s,e){s=typeof s=="string"?s:s.source,e=e||"";const t={replace:(r,n)=>(n=n.source||n,n=n.replace(Gn,"$1"),s=s.replace(r,n),t),getRegex:()=>new RegExp(s,e)};return t}const Nn=/[^\w:]/g,Ln=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ot(s,e,t){if(s){let r;try{r=decodeURIComponent(Dt(t)).replace(Nn,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!Ln.test(t)&&(t=qn(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ke={},Un=/^[^:]+:\/*[^/]*$/,On=/^([^:]+:)[\s\S]*$/,Hn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function qn(s,e){ke[" "+s]||(Un.test(s)?ke[" "+s]=s+"/":ke[" "+s]=$e(s,"/",!0)),s=ke[" "+s];const t=s.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:s.replace(On,"$1")+e:e.charAt(0)==="/"?t?e:s.replace(Hn,"$1")+e:s+e}const De={exec:function(){}};function W(s){let e=1,t,r;for(;e<arguments.length;e++){t=arguments[e];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s}function at(s,e){const t=s.replace(/\|/g,(i,l,a)=>{let o=!1,c=l;for(;--c>=0&&a[c]==="\\";)o=!o;return o?"|":" |"}),r=t.split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function $e(s,e,t){const r=s.length;if(r===0)return"";let n=0;for(;n<r;){const i=s.charAt(r-n-1);if(i===e&&!t)n++;else if(i!==e&&t)n++;else break}return s.slice(0,r-n)}function Fn(s,e){if(s.indexOf(e[1])===-1)return-1;const t=s.length;let r=0,n=0;for(;n<t;n++)if(s[n]==="\\")n++;else if(s[n]===e[0])r++;else if(s[n]===e[1]&&(r--,r<0))return n;return-1}function It(s){s&&s.sanitize&&!s.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ct(s,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=s),e>>=1,s+=s;return t+s}function ft(s,e,t,r){const n=e.href,i=e.title?H(e.title):null,l=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:t,href:n,title:i,text:l,tokens:r.inlineTokens(l,[])};return r.state.inLink=!1,a}return{type:"image",raw:t,href:n,title:i,text:H(l)}}function Wn(s,e){const t=s.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(n=>{const i=n.match(/^\s+/);if(i===null)return n;const[l]=i;return l.length>=r.length?n.slice(r.length):n}).join(`
`)}class Me{constructor(e){this.options=e||fe}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:$e(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],n=Wn(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const i=$e(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const r=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,i,l,a,o,c,f,g,h,d,u,k=t[1].trim();const y=k.length>1,I={type:"list",raw:"",ordered:y,start:y?+k.slice(0,-1):"",loose:!1,items:[]};k=y?`\\d{1,9}\\${k.slice(-1)}`:`\\${k}`,this.options.pedantic&&(k=y?k:"[*+-]");const O=new RegExp(`^( {0,3}${k})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(u=!1,!(!(t=O.exec(e))||this.rules.block.hr.test(e)));){if(r=t[0],e=e.substring(r.length),f=t[2].split(`
`,1)[0],g=e.split(`
`,1)[0],this.options.pedantic?(l=2,d=f.trimLeft()):(l=t[2].search(/[^ ]/),l=l>4?1:l,d=f.slice(l),l+=t[1].length),o=!1,!f&&/^ *$/.test(g)&&(r+=g+`
`,e=e.substring(g.length+1),u=!0),!u){const X=new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),J=new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(h=e.split(`
`,1)[0],f=h,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(X.test(f)||J.test(e)));){if(f.search(/[^ ]/)>=l||!f.trim())d+=`
`+f.slice(l);else if(!o)d+=`
`+f;else break;!o&&!f.trim()&&(o=!0),r+=h+`
`,e=e.substring(h.length+1)}}I.loose||(c?I.loose=!0:/\n *\n *$/.test(r)&&(c=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(d),n&&(i=n[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),I.items.push({type:"list_item",raw:r,task:!!n,checked:i,loose:!1,text:d}),I.raw+=r}I.items[I.items.length-1].raw=r.trimRight(),I.items[I.items.length-1].text=d.trimRight(),I.raw=I.raw.trimRight();const Z=I.items.length;for(a=0;a<Z;a++){this.lexer.state.top=!1,I.items[a].tokens=this.lexer.blockTokens(I.items[a].text,[]);const X=I.items[a].tokens.filter(re=>re.type==="space"),J=X.every(re=>{const _e=re.raw.split("");let ue=0;for(const St of _e)if(St===`
`&&(ue+=1),ue>1)return!0;return!1});!I.loose&&X.length&&J&&(I.loose=!0,I.items[a].loose=!0)}return I}}html(e){const t=this.rules.block.html.exec(e);if(t){const r={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):H(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const r=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const r={type:"table",header:at(t[1]).map(n=>({text:n})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];let n=r.align.length,i,l,a,o;for(i=0;i<n;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(n=r.rows.length,i=0;i<n;i++)r.rows[i]=at(r.rows[i],r.header.length).map(c=>({text:c}));for(n=r.header.length,l=0;l<n;l++)r.header[l].tokens=[],this.lexer.inline(r.header[l].text,r.header[l].tokens);for(n=r.rows.length,l=0;l<n;l++)for(o=r.rows[l],a=0;a<o.length;a++)o[a].tokens=[],this.lexer.inline(o[a].text,o[a].tokens);return r}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const r={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(e){const t=this.rules.block.text.exec(e);if(t){const r={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:H(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):H(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const l=$e(r.slice(0,-1),"\\");if((r.length-l.length)%2===0)return}else{const l=Fn(t[2],"()");if(l>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let n=t[2],i="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);l&&(n=l[1],i=l[3])}else i=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(this.options.pedantic&&!/>$/.test(r)?n=n.slice(1):n=n.slice(1,-1)),ft(t,{href:n&&n.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let n=(r[2]||r[1]).replace(/\s+/g," ");if(n=t[n.toLowerCase()],!n||!n.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return ft(r,n,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(!n||n[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=n[1]||n[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const l=n[0].length-1;let a,o,c=l,f=0;const g=n[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,t=t.slice(-1*e.length+l);(n=g.exec(t))!=null;){if(a=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!a)continue;if(o=a.length,n[3]||n[4]){c+=o;continue}else if((n[5]||n[6])&&l%3&&!((l+o)%3)){f+=o;continue}if(c-=o,c>0)continue;if(o=Math.min(o,o+c+f),Math.min(l,o)%2){const d=e.slice(1,l+n.index+o);return{type:"em",raw:e.slice(0,l+n.index+o+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}const h=e.slice(2,l+n.index+o-1);return{type:"strong",raw:e.slice(0,l+n.index+o+1),text:h,tokens:this.lexer.inlineTokens(h,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const n=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return n&&i&&(r=r.substring(1,r.length-1)),r=H(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let n,i;return r[2]==="@"?(n=H(this.options.mangle?t(r[1]):r[1]),i="mailto:"+n):(n=H(r[1]),i=n),{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let n,i;if(r[2]==="@")n=H(this.options.mangle?t(r[0]):r[0]),i="mailto:"+n;else{let l;do l=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(l!==r[0]);n=H(r[0]),r[1]==="www."?i="http://"+n:i=n}return{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let n;return this.lexer.state.inRawBlock?n=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):H(r[0]):r[0]:n=H(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:n}}}}const A={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:De,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};A._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;A._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;A.def=S(A.def).replace("label",A._label).replace("title",A._title).getRegex();A.bullet=/(?:[*+-]|\d{1,9}[.)])/;A.listItemStart=S(/^( *)(bull) */).replace("bull",A.bullet).getRegex();A.list=S(A.list).replace(/bull/g,A.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+A.def.source+")").getRegex();A._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";A._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;A.html=S(A.html,"i").replace("comment",A._comment).replace("tag",A._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();A.paragraph=S(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex();A.blockquote=S(A.blockquote).replace("paragraph",A.paragraph).getRegex();A.normal=W({},A);A.gfm=W({},A.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});A.gfm.table=S(A.gfm.table).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex();A.gfm.paragraph=S(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",A.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex();A.pedantic=W({},A.normal,{html:S(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",A._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:De,paragraph:S(A.normal._paragraph).replace("hr",A.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",A.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const b={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:De,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:De,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};b._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";b.punctuation=S(b.punctuation).replace(/punctuation/g,b._punctuation).getRegex();b.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;b.escapedEmSt=/\\\*|\\_/g;b._comment=S(A._comment).replace("(?:-->|$)","-->").getRegex();b.emStrong.lDelim=S(b.emStrong.lDelim).replace(/punct/g,b._punctuation).getRegex();b.emStrong.rDelimAst=S(b.emStrong.rDelimAst,"g").replace(/punct/g,b._punctuation).getRegex();b.emStrong.rDelimUnd=S(b.emStrong.rDelimUnd,"g").replace(/punct/g,b._punctuation).getRegex();b._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;b._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;b._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;b.autolink=S(b.autolink).replace("scheme",b._scheme).replace("email",b._email).getRegex();b._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;b.tag=S(b.tag).replace("comment",b._comment).replace("attribute",b._attribute).getRegex();b._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;b._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;b._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;b.link=S(b.link).replace("label",b._label).replace("href",b._href).replace("title",b._title).getRegex();b.reflink=S(b.reflink).replace("label",b._label).replace("ref",A._label).getRegex();b.nolink=S(b.nolink).replace("ref",A._label).getRegex();b.reflinkSearch=S(b.reflinkSearch,"g").replace("reflink",b.reflink).replace("nolink",b.nolink).getRegex();b.normal=W({},b);b.pedantic=W({},b.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:S(/^!?\[(label)\]\((.*?)\)/).replace("label",b._label).getRegex(),reflink:S(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",b._label).getRegex()});b.gfm=W({},b.normal,{escape:S(b.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});b.gfm.url=S(b.gfm.url,"i").replace("email",b.gfm._extended_email).getRegex();b.breaks=W({},b.gfm,{br:S(b.br).replace("{2,}","*").getRegex(),text:S(b.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Zn(s){return s.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function ut(s){let e="",t,r;const n=s.length;for(t=0;t<n;t++)r=s.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class K{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||fe,this.options.tokenizer=this.options.tokenizer||new Me,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:A.normal,inline:b.normal};this.options.pedantic?(t.block=A.pedantic,t.inline=b.pedantic):this.options.gfm&&(t.block=A.gfm,this.options.breaks?t.inline=b.breaks:t.inline=b.gfm),this.tokenizer.rules=t}static get rules(){return{block:A,inline:b}}static lex(e,t){return new K(t).lex(e)}static lexInline(e,t){return new K(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,o,c)=>o+"    ".repeat(c.length));let r,n,i,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&(n.type==="paragraph"||n.type==="text")?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&(n.type==="paragraph"||n.type==="text")?(n.raw+=`
`+r.raw,n.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const o=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(f){c=f.call({lexer:this},o),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){n=t[t.length-1],l&&n.type==="paragraph"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),l=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&n.type==="text"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,n,i,l=e,a,o,c;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)f.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,a.index)+"["+ct("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,a.index)+"["+ct("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(l))!=null;)l=l.slice(0,a.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(c=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(r=f.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&r.type==="text"&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),n=t[t.length-1],n&&r.type==="text"&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,l,c)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e,ut)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,ut))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const g=e.slice(1);let h;this.options.extensions.startInline.forEach(function(d){h=d.call({lexer:this},g),typeof h=="number"&&h>=0&&(f=Math.min(f,h))}),f<1/0&&f>=0&&(i=e.substring(0,f+1))}if(r=this.tokenizer.inlineText(i,Zn)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(c=r.raw.slice(-1)),o=!0,n=t[t.length-1],n&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}}class Ge{constructor(e){this.options=e||fe}code(e,t,r){const n=(t||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,n);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,n?'<pre><code class="'+this.options.langPrefix+H(n,!0)+'">'+(r?e:H(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:H(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(e=ot(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let n='<a href="'+H(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>",n}image(e,t,r){if(e=ot(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let n=`<img src="${e}" alt="${r}"`;return t&&(n+=` title="${t}"`),n+=this.options.xhtml?"/>":">",n}text(e){return e}}class Tt{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Ne{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do n++,r=e+"-"+n;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class te{constructor(e){this.options=e||fe,this.options.renderer=this.options.renderer||new Ge,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Tt,this.slugger=new Ne}static parse(e,t){return new te(t).parse(e)}static parseInline(e,t){return new te(t).parseInline(e)}parse(e,t=!0){let r="",n,i,l,a,o,c,f,g,h,d,u,k,y,I,O,Z,X,J,re;const _e=e.length;for(n=0;n<_e;n++){if(d=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(re=this.options.extensions.renderers[d.type].call({parser:this},d),re!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){r+=re||"";continue}switch(d.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Dt(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(g="",f="",a=d.header.length,i=0;i<a;i++)f+=this.renderer.tablecell(this.parseInline(d.header[i].tokens),{header:!0,align:d.align[i]});for(g+=this.renderer.tablerow(f),h="",a=d.rows.length,i=0;i<a;i++){for(c=d.rows[i],f="",o=c.length,l=0;l<o;l++)f+=this.renderer.tablecell(this.parseInline(c[l].tokens),{header:!1,align:d.align[l]});h+=this.renderer.tablerow(f)}r+=this.renderer.table(g,h);continue}case"blockquote":{h=this.parse(d.tokens),r+=this.renderer.blockquote(h);continue}case"list":{for(u=d.ordered,k=d.start,y=d.loose,a=d.items.length,h="",i=0;i<a;i++)O=d.items[i],Z=O.checked,X=O.task,I="",O.task&&(J=this.renderer.checkbox(Z),y?O.tokens.length>0&&O.tokens[0].type==="paragraph"?(O.tokens[0].text=J+" "+O.tokens[0].text,O.tokens[0].tokens&&O.tokens[0].tokens.length>0&&O.tokens[0].tokens[0].type==="text"&&(O.tokens[0].tokens[0].text=J+" "+O.tokens[0].tokens[0].text)):O.tokens.unshift({type:"text",text:J}):I+=J),I+=this.parse(O.tokens,y),h+=this.renderer.listitem(I,X,Z);r+=this.renderer.list(h,u,k);continue}case"html":{r+=this.renderer.html(d.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(h=d.tokens?this.parseInline(d.tokens):d.text;n+1<_e&&e[n+1].type==="text";)d=e[++n],h+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);r+=t?this.renderer.paragraph(h):h;continue}default:{const ue='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(ue);return}else throw new Error(ue)}}}return r}parseInline(e,t){t=t||this.renderer;let r="",n,i,l;const a=e.length;for(n=0;n<a;n++){if(i=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(l=this.options.extensions.renderers[i.type].call({parser:this},i),l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=l||"";continue}switch(i.type){case"escape":{r+=t.text(i.text);break}case"html":{r+=t.html(i.text);break}case"link":{r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{r+=t.image(i.href,i.title,i.text);break}case"strong":{r+=t.strong(this.parseInline(i.tokens,t));break}case"em":{r+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{r+=t.codespan(i.text);break}case"br":{r+=t.br();break}case"del":{r+=t.del(this.parseInline(i.tokens,t));break}case"text":{r+=t.text(i.text);break}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(o);return}else throw new Error(o)}}}return r}}function $(s,e,t){if(typeof s=="undefined"||s===null)throw new Error("marked(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=W({},$.defaults,e||{}),It(e),t){const r=e.highlight;let n;try{n=K.lex(s,e)}catch(a){return t(a)}const i=function(a){let o;if(!a)try{e.walkTokens&&$.walkTokens(n,e.walkTokens),o=te.parse(n,e)}catch(c){a=c}return e.highlight=r,a?t(a):t(null,o)};if(!r||r.length<3||(delete e.highlight,!n.length))return i();let l=0;$.walkTokens(n,function(a){a.type==="code"&&(l++,setTimeout(()=>{r(a.text,a.lang,function(o,c){if(o)return i(o);c!=null&&c!==a.text&&(a.text=c,a.escaped=!0),l--,l===0&&i()})},0))}),l===0&&i();return}try{const r=K.lex(s,e);return e.walkTokens&&$.walkTokens(r,e.walkTokens),te.parse(r,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+H(r.message+"",!0)+"</pre>";throw r}}$.options=$.setOptions=function(s){return W($.defaults,s),Rn($.defaults),$};$.getDefaults=Ct;$.defaults=fe;$.use=function(...s){const e=W({},...s),t=$.defaults.extensions||{renderers:{},childTokens:{}};let r;s.forEach(n=>{if(n.extensions&&(r=!0,n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const l=t.renderers?t.renderers[i.name]:null;l?t.renderers[i.name]=function(...a){let o=i.renderer.apply(this,a);return o===!1&&(o=l.apply(this,a)),o}:t.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)})),n.renderer){const i=$.defaults.renderer||new Ge;for(const l in n.renderer){const a=i[l];i[l]=(...o)=>{let c=n.renderer[l].apply(i,o);return c===!1&&(c=a.apply(i,o)),c}}e.renderer=i}if(n.tokenizer){const i=$.defaults.tokenizer||new Me;for(const l in n.tokenizer){const a=i[l];i[l]=(...o)=>{let c=n.tokenizer[l].apply(i,o);return c===!1&&(c=a.apply(i,o)),c}}e.tokenizer=i}if(n.walkTokens){const i=$.defaults.walkTokens;e.walkTokens=function(l){n.walkTokens.call(this,l),i&&i.call(this,l)}}r&&(e.extensions=t),$.setOptions(e)})};$.walkTokens=function(s,e){for(const t of s)switch(e.call($,t),t.type){case"table":{for(const r of t.header)$.walkTokens(r.tokens,e);for(const r of t.rows)for(const n of r)$.walkTokens(n.tokens,e);break}case"list":{$.walkTokens(t.items,e);break}default:$.defaults.extensions&&$.defaults.extensions.childTokens&&$.defaults.extensions.childTokens[t.type]?$.defaults.extensions.childTokens[t.type].forEach(function(r){$.walkTokens(t[r],e)}):t.tokens&&$.walkTokens(t.tokens,e)}};$.parseInline=function(s,e){if(typeof s=="undefined"||s===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");e=W({},$.defaults,e||{}),It(e);try{const t=K.lexInline(s,e);return e.walkTokens&&$.walkTokens(t,e.walkTokens),te.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+H(t.message+"",!0)+"</pre>";throw t}};$.Parser=te;$.parser=te.parse;$.Renderer=Ge;$.TextRenderer=Tt;$.Lexer=K;$.lexer=K.lex;$.Tokenizer=Me;$.Slugger=Ne;$.parse=$;$.options;$.setOptions;$.use;$.walkTokens;$.parseInline;te.parse;K.lex;const Rt={};function Vn(s){let e;return{c(){e=V(s[1])},m(t,r){w(t,e,r)},p(t,r){r&2&&ie(e,t[1])},i:M,o:M,d(t){t&&_(e)}}}function Qn(s){let e,t;const r=s[5].default,n=G(r,s,s[4],null);return{c(){e=x("h6"),n&&n.c(),z(e,"id",s[2])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&16)&&L(n,r,i,i[4],t?N(r,i[4],l,null):U(i[4]),null),(!t||l&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Kn(s){let e,t;const r=s[5].default,n=G(r,s,s[4],null);return{c(){e=x("h5"),n&&n.c(),z(e,"id",s[2])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&16)&&L(n,r,i,i[4],t?N(r,i[4],l,null):U(i[4]),null),(!t||l&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Xn(s){let e,t;const r=s[5].default,n=G(r,s,s[4],null);return{c(){e=x("h4"),n&&n.c(),z(e,"id",s[2])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&16)&&L(n,r,i,i[4],t?N(r,i[4],l,null):U(i[4]),null),(!t||l&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Jn(s){let e,t;const r=s[5].default,n=G(r,s,s[4],null);return{c(){e=x("h3"),n&&n.c(),z(e,"id",s[2])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&16)&&L(n,r,i,i[4],t?N(r,i[4],l,null):U(i[4]),null),(!t||l&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Yn(s){let e,t;const r=s[5].default,n=G(r,s,s[4],null);return{c(){e=x("h2"),n&&n.c(),z(e,"id",s[2])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&16)&&L(n,r,i,i[4],t?N(r,i[4],l,null):U(i[4]),null),(!t||l&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function e2(s){let e,t;const r=s[5].default,n=G(r,s,s[4],null);return{c(){e=x("h1"),n&&n.c(),z(e,"id",s[2])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&16)&&L(n,r,i,i[4],t?N(r,i[4],l,null):U(i[4]),null),(!t||l&4)&&z(e,"id",i[2])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function t2(s){let e,t,r,n;const i=[e2,Yn,Jn,Xn,Kn,Qn,Vn],l=[];function a(o,c){return o[0]===1?0:o[0]===2?1:o[0]===3?2:o[0]===4?3:o[0]===5?4:o[0]===6?5:6}return e=a(s),t=l[e]=i[e](s),{c(){t.c(),r=j()},m(o,c){l[e].m(o,c),w(o,r,c),n=!0},p(o,[c]){let f=e;e=a(o),e===f?l[e].p(o,c):(T(),m(l[f],1,1,()=>{l[f]=null}),R(),t=l[e],t?t.p(o,c):(t=l[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){m(t),n=!1},d(o){l[e].d(o),o&&_(r)}}}function n2(s,e,t){let r,{$$slots:n={},$$scope:i}=e,{depth:l}=e,{raw:a}=e,{text:o}=e;const{slug:c,getOptions:f}=Yt(Rt),g=f();return s.$$set=h=>{"depth"in h&&t(0,l=h.depth),"raw"in h&&t(1,a=h.raw),"text"in h&&t(3,o=h.text),"$$scope"in h&&t(4,i=h.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(2,r=g.headerIds?g.headerPrefix+c(o):void 0)},[l,a,r,o,i,n]}class r2 extends B{constructor(e){super(),P(this,e,n2,t2,E,{depth:0,raw:1,text:3})}}function i2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("p"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function s2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class l2 extends B{constructor(e){super(),P(this,e,s2,i2,E,{})}}function o2(s){let e;const t=s[3].default,r=G(t,s,s[2],null);return{c(){r&&r.c()},m(n,i){r&&r.m(n,i),e=!0},p(n,[i]){r&&r.p&&(!e||i&4)&&L(r,t,n,n[2],e?N(t,n[2],i,null):U(n[2]),null)},i(n){e||(p(r,n),e=!0)},o(n){m(r,n),e=!1},d(n){r&&r.d(n)}}}function a2(s,e,t){let{$$slots:r={},$$scope:n}=e,{text:i}=e,{raw:l}=e;return s.$$set=a=>{"text"in a&&t(0,i=a.text),"raw"in a&&t(1,l=a.raw),"$$scope"in a&&t(2,n=a.$$scope)},[i,l,n,r]}class c2 extends B{constructor(e){super(),P(this,e,a2,o2,E,{text:0,raw:1})}}function f2(s){let e,t;return{c(){e=x("img"),je(e.src,t=s[0])||z(e,"src",t),z(e,"title",s[1]),z(e,"alt",s[2])},m(r,n){w(r,e,n)},p(r,[n]){n&1&&!je(e.src,t=r[0])&&z(e,"src",t),n&2&&z(e,"title",r[1]),n&4&&z(e,"alt",r[2])},i:M,o:M,d(r){r&&_(e)}}}function u2(s,e,t){let{href:r=""}=e,{title:n=void 0}=e,{text:i=""}=e;return s.$$set=l=>{"href"in l&&t(0,r=l.href),"title"in l&&t(1,n=l.title),"text"in l&&t(2,i=l.text)},[r,n,i]}class p2 extends B{constructor(e){super(),P(this,e,u2,f2,E,{href:0,title:1,text:2})}}function d2(s){let e,t;const r=s[3].default,n=G(r,s,s[2],null);return{c(){e=x("a"),n&&n.c(),z(e,"href",s[0]),z(e,"title",s[1])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&4)&&L(n,r,i,i[2],t?N(r,i[2],l,null):U(i[2]),null),(!t||l&1)&&z(e,"href",i[0]),(!t||l&2)&&z(e,"title",i[1])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function m2(s,e,t){let{$$slots:r={},$$scope:n}=e,{href:i=""}=e,{title:l=void 0}=e;return s.$$set=a=>{"href"in a&&t(0,i=a.href),"title"in a&&t(1,l=a.title),"$$scope"in a&&t(2,n=a.$$scope)},[i,l,n,r]}class h2 extends B{constructor(e){super(),P(this,e,m2,d2,E,{href:0,title:1})}}function g2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("em"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function _2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class w2 extends B{constructor(e){super(),P(this,e,_2,g2,E,{})}}function b2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("del"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function k2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class A2 extends B{constructor(e){super(),P(this,e,k2,b2,E,{})}}function y2(s){let e,t=s[0].replace(/`/g,"")+"",r;return{c(){e=x("code"),r=V(t)},m(n,i){w(n,e,i),q(e,r)},p(n,[i]){i&1&&t!==(t=n[0].replace(/`/g,"")+"")&&ie(r,t)},i:M,o:M,d(n){n&&_(e)}}}function $2(s,e,t){let{raw:r}=e;return s.$$set=n=>{"raw"in n&&t(0,r=n.raw)},[r]}class z2 extends B{constructor(e){super(),P(this,e,$2,y2,E,{raw:0})}}function x2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("strong"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function v2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class C2 extends B{constructor(e){super(),P(this,e,v2,x2,E,{})}}function D2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("table"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function I2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class T2 extends B{constructor(e){super(),P(this,e,I2,D2,E,{})}}function R2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("thead"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function S2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class E2 extends B{constructor(e){super(),P(this,e,S2,R2,E,{})}}function j2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("tbody"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function P2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class B2 extends B{constructor(e){super(),P(this,e,P2,j2,E,{})}}function M2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("tr"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function G2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class N2 extends B{constructor(e){super(),P(this,e,G2,M2,E,{})}}function L2(s){let e,t;const r=s[3].default,n=G(r,s,s[2],null);return{c(){e=x("td"),n&&n.c(),z(e,"align",s[1])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&4)&&L(n,r,i,i[2],t?N(r,i[2],l,null):U(i[2]),null),(!t||l&2)&&z(e,"align",i[1])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function U2(s){let e,t;const r=s[3].default,n=G(r,s,s[2],null);return{c(){e=x("th"),n&&n.c(),z(e,"align",s[1])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&4)&&L(n,r,i,i[2],t?N(r,i[2],l,null):U(i[2]),null),(!t||l&2)&&z(e,"align",i[1])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function O2(s){let e,t,r,n;const i=[U2,L2],l=[];function a(o,c){return o[0]?0:1}return e=a(s),t=l[e]=i[e](s),{c(){t.c(),r=j()},m(o,c){l[e].m(o,c),w(o,r,c),n=!0},p(o,[c]){let f=e;e=a(o),e===f?l[e].p(o,c):(T(),m(l[f],1,1,()=>{l[f]=null}),R(),t=l[e],t?t.p(o,c):(t=l[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){m(t),n=!1},d(o){l[e].d(o),o&&_(r)}}}function H2(s,e,t){let{$$slots:r={},$$scope:n}=e,{header:i}=e,{align:l}=e;return s.$$set=a=>{"header"in a&&t(0,i=a.header),"align"in a&&t(1,l=a.align),"$$scope"in a&&t(2,n=a.$$scope)},[i,l,n,r]}class q2 extends B{constructor(e){super(),P(this,e,H2,O2,E,{header:0,align:1})}}function F2(s){let e,t;const r=s[3].default,n=G(r,s,s[2],null);return{c(){e=x("ul"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&4)&&L(n,r,i,i[2],t?N(r,i[2],l,null):U(i[2]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function W2(s){let e,t;const r=s[3].default,n=G(r,s,s[2],null);return{c(){e=x("ol"),n&&n.c(),z(e,"start",s[1])},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,l){n&&n.p&&(!t||l&4)&&L(n,r,i,i[2],t?N(r,i[2],l,null):U(i[2]),null),(!t||l&2)&&z(e,"start",i[1])},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function Z2(s){let e,t,r,n;const i=[W2,F2],l=[];function a(o,c){return o[0]?0:1}return e=a(s),t=l[e]=i[e](s),{c(){t.c(),r=j()},m(o,c){l[e].m(o,c),w(o,r,c),n=!0},p(o,[c]){let f=e;e=a(o),e===f?l[e].p(o,c):(T(),m(l[f],1,1,()=>{l[f]=null}),R(),t=l[e],t?t.p(o,c):(t=l[e]=i[e](o),t.c()),p(t,1),t.m(r.parentNode,r))},i(o){n||(p(t),n=!0)},o(o){m(t),n=!1},d(o){l[e].d(o),o&&_(r)}}}function V2(s,e,t){let{$$slots:r={},$$scope:n}=e,{ordered:i}=e,{start:l}=e;return s.$$set=a=>{"ordered"in a&&t(0,i=a.ordered),"start"in a&&t(1,l=a.start),"$$scope"in a&&t(2,n=a.$$scope)},[i,l,n,r]}class Q2 extends B{constructor(e){super(),P(this,e,V2,Z2,E,{ordered:0,start:1})}}function K2(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("li"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function X2(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class J2 extends B{constructor(e){super(),P(this,e,X2,K2,E,{})}}function Y2(s){let e;return{c(){e=x("hr")},m(t,r){w(t,e,r)},p:M,i:M,o:M,d(t){t&&_(e)}}}class er extends B{constructor(e){super(),P(this,e,null,Y2,E,{})}}function tr(s){let e,t;return{c(){e=new Wt(!1),t=j(),e.a=t},m(r,n){e.m(s[0],r,n),w(r,t,n)},p(r,[n]){n&1&&e.p(r[0])},i:M,o:M,d(r){r&&_(t),r&&e.d()}}}function nr(s,e,t){let{text:r}=e;return s.$$set=n=>{"text"in n&&t(0,r=n.text)},[r]}class rr extends B{constructor(e){super(),P(this,e,nr,tr,E,{text:0})}}function ir(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("blockquote"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(e,null),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function sr(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class lr extends B{constructor(e){super(),P(this,e,sr,ir,E,{})}}function or(s){let e,t,r;return{c(){e=x("pre"),t=x("code"),r=V(s[1]),z(e,"class",s[0])},m(n,i){w(n,e,i),q(e,t),q(t,r)},p(n,[i]){i&2&&ie(r,n[1]),i&1&&z(e,"class",n[0])},i:M,o:M,d(n){n&&_(e)}}}function ar(s,e,t){let{lang:r}=e,{text:n}=e;return s.$$set=i=>{"lang"in i&&t(0,r=i.lang),"text"in i&&t(1,n=i.text)},[r,n]}class cr extends B{constructor(e){super(),P(this,e,ar,or,E,{lang:0,text:1})}}function fr(s){let e,t;const r=s[1].default,n=G(r,s,s[0],null);return{c(){e=x("br"),n&&n.c()},m(i,l){w(i,e,l),n&&n.m(i,l),t=!0},p(i,[l]){n&&n.p&&(!t||l&1)&&L(n,r,i,i[0],t?N(r,i[0],l,null):U(i[0]),null)},i(i){t||(p(n,i),t=!0)},o(i){m(n,i),t=!1},d(i){i&&_(e),n&&n.d(i)}}}function ur(s,e,t){let{$$slots:r={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,r]}class pr extends B{constructor(e){super(),P(this,e,ur,fr,E,{})}}const dr={heading:r2,paragraph:l2,text:c2,image:p2,link:h2,em:w2,strong:C2,codespan:z2,del:A2,table:T2,tablehead:E2,tablebody:B2,tablerow:N2,tablecell:q2,list:Q2,orderedlistitem:null,unorderedlistitem:null,listitem:J2,hr:er,html:rr,blockquote:lr,code:cr,br:pr},mr={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function hr(s){let e,t;return e=new le({props:{tokens:s[0],renderers:s[1]}}),{c(){D(e.$$.fragment)},m(r,n){v(e,r,n),t=!0},p(r,[n]){const i={};n&1&&(i.tokens=r[0]),n&2&&(i.renderers=r[1]),e.$set(i)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){m(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function gr(s,e,t){let r,n,i,{source:l=""}=e,{renderers:a={}}=e,{options:o={}}=e,{isInline:c=!1}=e;const f=Xt();let g,h,d;return Jt(Rt,{slug:u=>r?r.slug(u):"",getOptions:()=>n}),xt(()=>{t(7,d=!0)}),s.$$set=u=>{"source"in u&&t(2,l=u.source),"renderers"in u&&t(3,a=u.renderers),"options"in u&&t(4,o=u.options),"isInline"in u&&t(5,c=u.isInline)},s.$$.update=()=>{s.$$.dirty&4&&(r=l?new Ne:void 0),s.$$.dirty&16&&t(8,n=pe(pe({},mr),o)),s.$$.dirty&357&&(t(6,h=new K(n)),t(0,g=c?h.inlineTokens(l):h.lex(l)),f("parsed",{tokens:g})),s.$$.dirty&8&&t(1,i=pe(pe({},dr),a)),s.$$.dirty&129&&d&&f("parsed",{tokens:g})},[g,i,l,a,o,c,h,d,n]}class _r extends B{constructor(e){super(),P(this,e,gr,hr,E,{source:2,renderers:3,options:4,isInline:5})}}function wr(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function Ie(s,{delay:e=0,duration:t=400,easing:r=wr,amount:n=5,opacity:i=0}={}){const l=getComputedStyle(s),a=+l.opacity,o=l.filter==="none"?"":l.filter,c=a*(1-i);return{delay:e,duration:t,easing:r,css:(f,g)=>`opacity: ${a-c*g}; filter: ${o} blur(${g*n}px);`}}var br="/revit-api/assets/logo-dh.ebfbfda1.svg";function pt(s){let e,t,r=s[1]>s[2]&&dt(s);return{c(){r&&r.c(),e=j()},m(n,i){r&&r.m(n,i),w(n,e,i),t=!0},p(n,i){n[1]>n[2]?r?(r.p(n,i),i&6&&p(r,1)):(r=dt(n),r.c(),p(r,1),r.m(e.parentNode,e)):r&&(T(),m(r,1,1,()=>{r=null}),R())},i(n){t||(p(r),t=!0)},o(n){m(r),t=!1},d(n){r&&r.d(n),n&&_(e)}}}function dt(s){let e,t,r,n;return{c(){e=x("p"),t=V(s[0]),z(e,"class","title svelte-lw7png")},m(i,l){w(i,e,l),q(e,t),n=!0},p(i,l){(!n||l&1)&&ie(t,i[0])},i(i){n||(Q(()=>{r||(r=Ce(e,Ie,{},!0)),r.run(1)}),n=!0)},o(i){r||(r=Ce(e,Ie,{},!1)),r.run(0),n=!1},d(i){i&&_(e),i&&r&&r.end()}}}function mt(s){let e,t,r=s[1]>s[2]&&ht();return{c(){r&&r.c(),e=j()},m(n,i){r&&r.m(n,i),w(n,e,i),t=!0},p(n,i){n[1]>n[2]?r?i&6&&p(r,1):(r=ht(),r.c(),p(r,1),r.m(e.parentNode,e)):r&&(T(),m(r,1,1,()=>{r=null}),R())},i(n){t||(p(r),t=!0)},o(n){m(r),t=!1},d(n){r&&r.d(n),n&&_(e)}}}function ht(s){let e,t,r;return{c(){e=x("footer"),e.textContent="Dawid Huczy\u0144ski",z(e,"class","svelte-lw7png")},m(n,i){w(n,e,i),r=!0},i(n){r||(Q(()=>{t||(t=Ce(e,Ie,{},!0)),t.run(1)}),r=!0)},o(n){t||(t=Ce(e,Ie,{},!1)),t.run(0),r=!1},d(n){n&&_(e),n&&t&&t.end()}}}function kr(s){let e=!1,t=()=>{e=!1},r,n,i,l,a,o,c,f,g,h;Q(s[3]),Q(s[4]);let d=s[0]&&pt(s),u=s[0]&&mt(s);return{c(){n=x("div"),i=x("img"),a=F(),d&&d.c(),o=F(),u&&u.c(),c=j(),z(i,"class","logo svelte-lw7png"),z(i,"alt",""),je(i.src,l=br)||z(i,"src",l),z(n,"class","baner svelte-lw7png")},m(k,y){w(k,n,y),q(n,i),q(n,a),d&&d.m(n,null),w(k,o,y),u&&u.m(k,y),w(k,c,y),f=!0,g||(h=[ze(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(t,100),s[3]()}),ze(window,"resize",s[4])],g=!0)},p(k,[y]){y&2&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,k[1]),r=setTimeout(t,100)),k[0]?d?(d.p(k,y),y&1&&p(d,1)):(d=pt(k),d.c(),p(d,1),d.m(n,null)):d&&(T(),m(d,1,1,()=>{d=null}),R()),k[0]?u?(u.p(k,y),y&1&&p(u,1)):(u=mt(k),u.c(),p(u,1),u.m(c.parentNode,c)):u&&(T(),m(u,1,1,()=>{u=null}),R())},i(k){f||(p(d),p(u),f=!0)},o(k){m(d),m(u),f=!1},d(k){k&&_(n),d&&d.d(),k&&_(o),u&&u.d(k),k&&_(c),g=!1,ne(h)}}}function Ar(s,e,t){let{title:r}=e,n,i;function l(){t(1,n=window.pageYOffset)}function a(){t(2,i=window.innerHeight)}return s.$$set=o=>{"title"in o&&t(0,r=o.title)},[r,n,i,l,a]}class yr extends B{constructor(e){super(),P(this,e,Ar,kr,E,{title:0})}}function $r(s){let e=!1,t=()=>{e=!1},r,n,i,l,a,o,c,f,g,h;return Q(s[5]),Q(s[6]),{c(){n=x("div"),i=x("div"),l=F(),a=x("p"),o=V(s[3]),c=V("/"),f=V(s[0]),z(i,"class","progress svelte-16znpub"),qe(i,"width",s[4]+"%"),z(n,"class","bar svelte-16znpub"),z(a,"class","nrstrony svelte-16znpub")},m(d,u){w(d,n,u),q(n,i),w(d,l,u),w(d,a,u),q(a,o),q(a,c),q(a,f),g||(h=[ze(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(t,100),s[5]()}),ze(window,"resize",s[6])],g=!0)},p(d,[u]){u&2&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,d[1]),r=setTimeout(t,100)),u&16&&qe(i,"width",d[4]+"%"),u&8&&ie(o,d[3]),u&1&&ie(f,d[0])},i:M,o:M,d(d){d&&_(n),d&&_(l),d&&_(a),g=!1,ne(h)}}}function zr(s,e,t){let r,{iloscSlajdow:n=1}=e,i,l,a=1;function o(){t(1,i=window.pageYOffset)}function c(){t(2,l=window.innerHeight)}return s.$$set=f=>{"iloscSlajdow"in f&&t(0,n=f.iloscSlajdow)},s.$$.update=()=>{s.$$.dirty&7&&t(4,r=i/(l*(n-1))*100),s.$$.dirty&6&&t(3,a=Math.floor(i/l)+1)},[n,i,l,a,r,o,c]}class xr extends B{constructor(e){super(),P(this,e,zr,$r,E,{iloscSlajdow:0})}}function vr(s){let e;return{c(){e=x("nav"),e.innerHTML=`<a href="#2" class="svelte-f6k7du">Spotkanie 1</a> 
    <a href="#26" class="svelte-f6k7du">Spotkanie 2</a> 
    <a href="#35" class="svelte-f6k7du">Spotkanie 3</a> 
    
    
    <hr class="svelte-f6k7du"/> 
    <a href="#46" class="svelte-f6k7du">Program 1</a> 
    <a href="#47" class="svelte-f6k7du">Program 2</a> 
    <a href="#48" class="svelte-f6k7du">Program 3</a> 
    <a href="#49" class="svelte-f6k7du">Program 4</a> 
    <a href="#50" class="svelte-f6k7du">Program 5</a>`,z(e,"class","svelte-f6k7du")},m(t,r){w(t,e,r)},p:M,i:M,o:M,d(t){t&&_(e)}}}class Cr extends B{constructor(e){super(),P(this,e,null,vr,E,{})}}let Dr=`

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
# Spotkanie 2.

---
## Klasy
Czym s\u0105 klasy i ich dziedziczenie
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=800&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=class%2520Osoba%28%29%253A%250A%2520%2520%2520%2520def%2520__init__%28self%252C%2520wiek%252C%2520wysokosc%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520self.wiek%2520%253D%2520wiek%250A%2520%2520%2520%2520%2520%2520%2520%2520self.wysoksc%2520%253D%2520wysokosc%250A%2520%2520%2520%2520%2520%2520%2520%2520self.smierc%2520%253D%2520None%250A%2520%2520%2520%2520%2520%2520%2520%2520self.martwy%2520%253D%2520False%250A%250A%2520%2520%2520%2520def%2520umarl%28self%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520self.smierc%2520%253D%2520self.wiek%250A%2520%2520%2520%2520%2520%2520%2520%2520self.martwy%2520%253D%2520True%250A%250A%250Aclass%2520Kobieta%28Osoba%29%253A%250A%2520%2520%2520%2520def%2520__init__%28self%252C%2520wiek%252C%2520wysokosc%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520super%28%29.__init__%28wiek%252C%2520wysokosc%29%250A%2520%2520%2520%2520%2520%2520%2520%2520self.dzieci%2520%253D%2520None%250A%2520%2520%2520%2520%2520%2520%2520%2520self.ulubione_ksiazki%2520%253D%2520%255B%255D%250A%250A%250Aclass%2520Pilotka%28Kobieta%29%253A%250A%2520%2520%2520%2520def%2520__init__%28self%252C%2520wiek%252C%2520wysokosc%252C%2520doswiadczenie%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520super%28%29.__init__%28wiek%252C%2520wysokosc%29%250A%2520%2520%2520%2520%2520%2520%2520%2520self.doswiadczenie%2520%253D%2520doswiadczenie%250A%2520%2520%2520%2520%2520%2520%2520%2520self.w_powietrzu%2520%253D%2520False%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520def%2520startuje%28%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520self.w_powietrzu%2520%253D%2520True%250A"
  style="width: 800px; height: 651px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>


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
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=800&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=collector%2520%253D%2520FilteredElementCollector%28doc%29%250A%250A%2523%2520Kategoria%250Ameble_collector%2520%253D%2520collector.OfCategory%28BuiltInCategory.OST_Furniture%29%250A%250A%2523%2520Klasa%250Asciany_collector%2520%253D%2520collector.OfClass%28Wall%29%250A%250A%2523%2520typ%2520czy%2520rzeczywisty%2520obiekt%250Atypy_scian%2520%253D%2520sciany_collector.WhereElementIsNotElementType%28%29%250Asciany_iterator%2520%253D%2520sciany_collector.WhereElementIsElementType%28%29%250A%250A%2523%2520zamiana%2520z%2520zapytania%2520na%2520list%25C4%2599%2520obiekt%25C3%25B3w%250Asciany%2520%253D%2520sciany_iterator.ToElements%28%29%250A%250A%2523%2520przyk%25C5%2582%25C4%2585dowy%2520jednolinijkowiec%250Ameble%2520%253D%2520%28FilteredElementCollector%28doc%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.OfCategory%28BuiltInCategory.OST_Furniture%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.WhereElementIsNotElementType%28%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.ToElements%28%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%29%250A%250AOUT%2520%253D%2520meble%250A"
  style="width: 800px; height: 574px; border:0; transform: scale(1); overflow:hidden;"
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
### Filtrowanie + zaznaczanie
Skrypt do wybierania element\xF3w i zanzaczania ich w modelu
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=800&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520clr%250A%250Aclr.AddReference%28%2522RevitAPI%2522%29%250A%250Afrom%2520Autodesk.Revit.DB%2520import%2520%28%250A%2520%2520%2520%2520ElementId%252C%250A%2520%2520%2520%2520FilteredElementCollector%252C%250A%2520%2520%2520%2520BuiltInCategory%252C%250A%29%250A%250Aclr.AddReference%28%2522System%2522%29%250Afrom%2520System.Collections.Generic%2520import%2520List%250A%250A%2523%2520Dodanie%2520TransactionManagera%2520i%2520DocumentManagera%250Aclr.AddReference%28%2522RevitServices%2522%29%250Aimport%2520RevitServices%250Afrom%2520RevitServices.Persistence%2520import%2520DocumentManager%250A%250Adoc%2520%253D%2520DocumentManager.Instance.CurrentDBDocument%250Auidoc%2520%253D%2520DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument%250A%250A%250Adef%2520select%28elements%252C%2520by_id%253DFalse%252C%2520uidoc%253Duidoc%29%253A%250A%2520%2520%2520%2520%2522%2522%2522select%2520elements%2520in%2520view%2522%2522%2522%250A%2520%2520%2520%2520elements_by_id%2520%253D%2520%255B%255D%250A%2520%2520%2520%2520if%2520not%2520by_id%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520for%2520el%2520in%2520elements%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520elements_by_id.append%28el.Id%29%250A%2520%2520%2520%2520else%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520elements_by_id%2520%253D%2520elements%250A%2520%2520%2520%2520Icollection%2520%253D%2520List%255BElementId%255D%28elements_by_id%29%250A%2520%2520%2520%2520uidoc.Selection.SetElementIds%28Icollection%29%250A%250A%250A%2523%2520przyk%25C5%2582%25C4%2585dowy%2520jednolinijkowiec%250Awalls%2520%253D%2520FilteredElementCollector%28doc%29.OfCategory%28BuiltInCategory.OST_Walls%29.WhereElementIsNotElementType%28%29.ToElements%28%29%250A%250A%250Awybrane%2520%253D%2520%255B%255D%250Afor%2520wall%2520in%2520walls%253A%250A%2520%2520%2520%2520if%2520%2522gk%2522%2520in%2520wall.Category.Name.lower%28%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520wybrane.append%28wall%29%250A%250A%250Aselect%28wybrane%29%250A"
  style="width: 800px; height: 1034px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---
# Spotkanie 3.

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
## W\u0142asna zak\u0142adka w Revicie
![](./dh-tab.jpg)


---
## Przyk\u0142ad od wi\u0119kszego kolegi z bran\u017Cy
[Webinar BIG](https://youtu.be/5Pup98apob4)

![](./BIG-ribbon.jpg)

---
## Parametry
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=900&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520clr%250A%250Aclr.AddReference%28%2522RevitServices%2522%29%250Afrom%2520RevitServices.Persistence%2520import%2520DocumentManager%250A%250Aclr.AddReference%28%2522RevitAPI%2522%29%250Afrom%2520Autodesk.Revit.DB%2520import%2520%28%250A%2520%2520Transaction%252C%250A%2520%2520UnitUtils%252C%250A%2520%2520DisplayUnitType%250A%29%250A%250Adoc%2520%253D%2520DocumentManager.Instance.CurrentDBDocument%250A%250A%250Awall%2520%253D%2520s0%2520%2523%2520type%253A%2520ignore%250A%2523%2520parametr%2520ktory%2520jest%2520liczba%250Abase_offset%2520%253D%2520wall.LookupParameter%28%27Base%2520Offset%27%29%250Abase_offset.asDouble%28%29%2520%2520%2520%2520%2520%2520%2523%25200.16404199475065617%250Abase_offset.AsInteger%28%29%2520%2520%2520%2520%2520%2523%25200%250Abase_offset.AsValueString%28%29%2520%2523%2520%275.00%27%250Abase_offset.DisplayUnitType%2520%2523%2520Autodesk.Revit.DB.DisplayUnitType.DUT_CENTIMETERS%250Abase_offset_cm%2520%253D%2520UnitUtils.Convert%28%250A%2520%2520base_offset.AsDouble%28%29%252C%2520%250A%2520%2520DisplayUnitType.DUT_DECIMAL_FEET%252C%2520%250A%2520%2520DisplayUnitType.DUT_CENTIMETERS%29%2520%2520%2520%2523%25205.0%250A%250A%250A%2523%2520parametr%2520jako%2520inny%2520obiekt%250Abase%2520%253D%2520wall.LookupParameter%28%27Base%2520Constraint%27%29%250Abase.asDouble%28%29%2520%2520%2520%2520%2520%2520%2523%25200.0%250Abase.AsValueString%28%29%2520%2523%2520%2701-Pietro_Konstrukcja%27%250Abase.AsElementId%28%29%2520%2520%2520%2523%2520%253CAutodesk.Revit.DB.ElementId%2520%255B221444%255D%253E%250Alevel%2520%253D%2520doc.GetElement%28base.AsElementId%28%29%29%2520%2523%2520%253C%255BAutodesk.Revit.DB.Level%255D%253E%250Alevel.Name%2520%2523%2520%2701-Pietro_Konstrukcja%27%250Alevel.Elevation%2520%2523%25209.1371391076115476%250Alevel.LookupParameter%28%27kolejny%2520parametr%27%29%2520%250A%2523%2520i%2520tak%2520dalej%2520i%2520tak%2520dalej%2520"
  style="width: 900px; height: 838px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

---
## Rodzaje parametr\xF3w
- String [str] \`\`'Nazwa Budynku'\`\`
- Double [float] \`\`3.14\`\`
- Integer [int]  \`\`2345\`\`
- Element - inny obiekt Revitowy (Level)
- BuiltInParameter

---
## ParameterMap
Jak wyci\u0105gn\u0105\u0107 informacje o parametrach
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=900&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520clr%250A%250Aclr.AddReference%28%2522RevitServices%2522%29%250Afrom%2520RevitServices.Persistence%2520import%2520DocumentManager%250A%250Aclr.AddReference%28%2522RevitAPI%2522%29%250Afrom%2520Autodesk.Revit.DB%2520import%2520%28%250A%2520%2520Transaction%252C%250A%2520%2520UnitUtils%252C%250A%2520%2520DisplayUnitType%250A%29%250A%250Adoc%2520%253D%2520DocumentManager.Instance.CurrentDBDocument%250A%250A%250Awall%2520%253D%2520s0%2520%2523%2520type%253A%2520ignore%250A%250Anazwy_parametrow%2520%253D%2520%255Bx.Definition.Name%2520for%2520x%2520in%2520wall.ParametersMap%255D%250Anazwy_parametrow_rozszerzone%2520%253D%2520%255Bx.Definition.Name%2520for%2520x%2520in%2520wall.Parameters%255D%250A%2523%2520R%25C3%25B3%25C5%25BCnice%253A%250A%2523%2520%2520%2520Type%250A%2523%2520%2520%2520Family%250A%2523%2520%2520%2520Type%2520Name%250A%2523%2520%2520%2520Category%250A%2523%2520%2520%2520Design%2520Option%250A%2523%2520%2520%2520Family%2520and%2520Type%250A%2523%2520%2520%2520Type%2520Id%250A%2523%2520%2520%2520Family%2520Name%250A%2523%2520%2520%2520Category"
  style="width: 900px; height: 666px; border:0; transform: scale(1); overflow:hidden;"
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
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28249%2C249%2C249%2C0%29&t=monokai&wt=none&l=python&width=900&ds=false&dsyoff=12px&dsblur=16px&wc=true&wa=false&pv=20px&ph=24px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520clr%250A%250Aclr.AddReference%28%2522RevitServices%2522%29%250Afrom%2520RevitServices.Persistence%2520import%2520DocumentManager%250A%250Aclr.AddReference%28%2522RevitAPI%2522%29%250Afrom%2520Autodesk.Revit.DB%2520import%2520%28%250A%2520%2520Transaction%252C%250A%2520%2520UnitUtils%252C%250A%2520%2520DisplayUnitType%250A%29%250A%250Adoc%2520%253D%2520DocumentManager.Instance.CurrentDBDocument%250A%250Awall%2520%253D%2520s0%2520%2523%2520type%253A%2520ignore%250A%2523%2520parametr%2520ktory%2520jest%2520liczba%250Abase_offset%2520%253D%2520wall.LookupParameter%28%27Base%2520Offset%27%29%250Anew_offset%2520%253D%2520UnitUtils.Convert%28%250A%2520%252015%252C%2520%250A%2520%2520DisplayUnitType.DUT_CENTIMETERS%252C%250A%2520%2520DisplayUnitType.DUT_DECIMAL_FEET%29%250A%250A%250At%2520%253D%2520Transaction%28doc%252C%2520%27Modify%2520wall%2520parameter%27%29%250At.Start%28%29%250Atry%253A%250A%2520%2520%2520%2520%2523%2520base_offset.SetValueString%28%2715%27%29%250A%2520%2520%2520%2520base_offset.Set%28new_offset%29%250Aexcept%2520ValueError%253A%250A%2520%2520%2520%2520t.RollBack%28%29%250Aelse%253A%250A%2520%2520%2520%2520t.Commit%28%29%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%250A"
  style="width: 900px; height: 764px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>


---
## Program 3

### wstaw rodzin\u0119

---
## Program 4

### numeruj parkingi

---
## Program 5

### Aktualizuj osie


`;function gt(s,e,t){const r=s.slice();return r[3]=e[t],r}function _t(s){let e,t,r,n,i,l;r=new _r({props:{source:s[3]}});function a(...o){return s[1](s[3],...o)}return{c(){e=x("section"),t=x("div"),D(r.$$.fragment),n=F(),z(e,"id",i=(s[0].findIndex(a)+1).toString()),z(e,"class","svelte-op1al2")},m(o,c){w(o,e,c),q(e,t),v(r,t,null),q(e,n),l=!0},p(o,c){s=o},i(o){l||(p(r.$$.fragment,o),l=!0)},o(o){m(r.$$.fragment,o),l=!1},d(o){o&&_(e),C(r)}}}function Ir(s){let e,t,r,n,i,l,a,o,c,f;document.title=e=Ee,r=new yr({props:{title:Ee}}),i=new Cr({});let g=s[0],h=[];for(let u=0;u<g.length;u+=1)h[u]=_t(gt(s,g,u));const d=u=>m(h[u],1,1,()=>{h[u]=null});return c=new xr({props:{iloscSlajdow:s[0].length}}),{c(){t=F(),D(r.$$.fragment),n=F(),D(i.$$.fragment),l=F(),a=x("main");for(let u=0;u<h.length;u+=1)h[u].c();o=F(),D(c.$$.fragment)},m(u,k){w(u,t,k),v(r,u,k),w(u,n,k),v(i,u,k),w(u,l,k),w(u,a,k);for(let y=0;y<h.length;y+=1)h[y].m(a,null);w(u,o,k),v(c,u,k),f=!0},p(u,[k]){if((!f||k&0)&&e!==(e=Ee)&&(document.title=e),k&1){g=u[0];let y;for(y=0;y<g.length;y+=1){const I=gt(u,g,y);h[y]?(h[y].p(I,k),p(h[y],1)):(h[y]=_t(I),h[y].c(),p(h[y],1),h[y].m(a,null))}for(T(),y=g.length;y<h.length;y+=1)d(y);R()}},i(u){if(!f){p(r.$$.fragment,u),p(i.$$.fragment,u);for(let k=0;k<g.length;k+=1)p(h[k]);p(c.$$.fragment,u),f=!0}},o(u){m(r.$$.fragment,u),m(i.$$.fragment,u),h=h.filter(Boolean);for(let k=0;k<h.length;k+=1)m(h[k]);m(c.$$.fragment,u),f=!1},d(u){u&&_(t),C(r,u),u&&_(n),C(i,u),u&&_(l),u&&_(a),se(h,u),u&&_(o),C(c,u)}}}let Ee="Revit API";function Tr(s){let e=Dr.split("---"),t=[];return e.forEach(n=>{let i=n.trim();t.push(i)}),[t,(n,i)=>i==n]}class Rr extends B{constructor(e){super(),P(this,e,Tr,Ir,E,{})}}new Rr({target:document.getElementById("app")});
