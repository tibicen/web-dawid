import{S as R,i as S,s as F,e as I,c as y,a as T,d as p,b,J as ie,f as H,K,L as q,I as M,B as ne,M as se,k as j,t as B,n as w,g as L,H as m,h as O,N as Q,x as C,j as W,m as J,o as X,u as A,v as Y,r as Z,w as x,O as $,P as G,Q as ve,R as be,T as z,U as re,V as ae,W as Ee,X as oe,Y as ke}from"../chunks/vendor-eb196138.js";function Ie(s){let e,t,l,n;return{c(){e=I("textarea"),this.h()},l(a){e=y(a,"TEXTAREA",{id:!0,class:!0}),T(e).forEach(p),this.h()},h(){b(e,"id",s[1]),b(e,"class",t=""+(ie(s[2].class)+" svelte-ryp01x"))},m(a,i){H(a,e,i),K(e,s[0]),l||(n=q(e,"input",s[3]),l=!0)},p(a,[i]){i&2&&b(e,"id",a[1]),i&4&&t!==(t=""+(ie(a[2].class)+" svelte-ryp01x"))&&b(e,"class",t),i&1&&K(e,a[0])},i:M,o:M,d(a){a&&p(e),l=!1,n()}}}function ye(s,e,t){let{id:l}=e,{value:n=`# Full Name
image:https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
born:
email:
phone:
website:

# Timeline

## Experience

### Position
date
Company Name, address
description/responsibilities


### Position
date
Company Name, address
description/responsibilities


## Experience 2

### Position
date
Company Name, address
description/responsibilities

## Education

### Position
date
Company Name, address
description/responsibilities


# Other

## Skills
-skill one 80%
-skill two 65%

## Languages
-first language - native
-second language - proficient
-third - hobbyist

## Hobby
-Author, Book title
-Country visited
-Game genre
-Some nice info about you to start the chat

# Footer
Legal notice etc etc.`}=e;function a(){n=this.value,t(0,n)}return s.$$set=i=>{t(2,e=ne(ne({},e),se(i))),"id"in i&&t(1,l=i.id),"value"in i&&t(0,n=i.value)},e=se(e),[n,l,e,a]}class Ve extends R{constructor(e){super();S(this,e,ye,Ie,F,{id:1,value:0})}}function Te(s){let e,t;return{c(){e=I("img"),this.h()},l(l){e=y(l,"IMG",{src:!0,alt:!0}),this.h()},h(){Q(e.src,t=s[2])||b(e,"src",t),b(e,"alt","")},m(l,n){H(l,e,n)},p(l,n){n&4&&!Q(e.src,t=l[2])&&b(e,"src",t)},d(l){l&&p(e)}}}function De(s){let e,t;return{c(){e=I("img"),this.h()},l(l){e=y(l,"IMG",{src:!0,alt:!0}),this.h()},h(){Q(e.src,t=s[0])||b(e,"src",t),b(e,"alt","")},m(l,n){H(l,e,n)},p(l,n){n&1&&!Q(e.src,t=l[0])&&b(e,"src",t)},d(l){l&&p(e)}}}function je(s){let e,t,l,n,a,i,u,r;function o(f,d){return f[0]?De:Te}let h=o(s),c=h(s);return{c(){e=I("div"),t=I("div"),c.c(),l=j(),n=I("div"),a=I("h1"),i=B(s[1]),u=j(),r=I("p"),this.h()},l(f){e=y(f,"DIV",{id:!0});var d=T(e);t=y(d,"DIV",{class:!0});var k=T(t);c.l(k),k.forEach(p),l=w(d),n=y(d,"DIV",{contenteditable:!0});var v=T(n);a=y(v,"H1",{});var g=T(a);i=L(g,s[1]),g.forEach(p),u=w(v),r=y(v,"P",{});var E=T(r);E.forEach(p),v.forEach(p),d.forEach(p),this.h()},h(){b(t,"class","profile-picture"),b(n,"contenteditable","false"),b(e,"id","info")},m(f,d){H(f,e,d),m(e,t),c.m(t,null),m(e,l),m(e,n),m(n,a),m(a,i),m(n,u),m(n,r),r.innerHTML=s[3]},p(f,[d]){h===(h=o(f))&&c?c.p(f,d):(c.d(1),c=h(f),c&&(c.c(),c.m(t,null))),d&2&&O(i,f[1]),d&8&&(r.innerHTML=f[3])},i:M,o:M,d(f){f&&p(e),c.d()}}}function we(s,e,t){let{input:l}=e,{avatar:n}=e,a,i,u;return s.$$set=r=>{"input"in r&&t(4,l=r.input),"avatar"in r&&t(0,n=r.avatar)},s.$$.update=()=>{if(s.$$.dirty&24)if(l){let r=l.split(`
`);t(3,u="");for(let o=0;o<r.length;o++){const h=r[o];switch(o){case 0:t(1,a=h.trim());case 1:t(2,i=h.replace("image:","").trim())}o>1&&h&&t(3,u+=h.trim()+"<br>")}}else t(2,i=""),t(1,a="Full Name"),t(3,u="phone:<br>email:<br>born:<br>website:")},[n,a,i,u,l]}class Ne extends R{constructor(e){super();S(this,e,we,je,F,{input:4,avatar:0})}}function He(s){let e,t,l,n,a,i,u,r,o,h,c,f,d;return{c(){e=I("div"),t=I("div"),l=B(s[1]),n=j(),a=I("div"),i=I("h2"),u=B(s[0]),r=j(),o=I("div"),h=B(s[2]),c=j(),f=I("div"),d=B(s[3]),this.h()},l(k){e=y(k,"DIV",{class:!0});var v=T(e);t=y(v,"DIV",{class:!0});var g=T(t);l=L(g,s[1]),g.forEach(p),n=w(v),a=y(v,"DIV",{class:!0});var E=T(a);i=y(E,"H2",{});var V=T(i);u=L(V,s[0]),V.forEach(p),r=w(E),o=y(E,"DIV",{class:!0});var D=T(o);h=L(D,s[2]),D.forEach(p),c=w(E),f=y(E,"DIV",{class:!0});var _=T(f);d=L(_,s[3]),_.forEach(p),E.forEach(p),v.forEach(p),this.h()},h(){b(t,"class","date"),b(o,"class","address"),b(f,"class","description"),b(a,"class","job-info"),b(e,"class","job")},m(k,v){H(k,e,v),m(e,t),m(t,l),m(e,n),m(e,a),m(a,i),m(i,u),m(a,r),m(a,o),m(o,h),m(a,c),m(a,f),m(f,d)},p(k,[v]){v&2&&O(l,k[1]),v&1&&O(u,k[0]),v&4&&O(h,k[2]),v&8&&O(d,k[3])},i:M,o:M,d(k){k&&p(e)}}}function Ce(s,e,t){let{input:l}=e,n,a,i,u;return s.$$set=r=>{"input"in r&&t(4,l=r.input)},s.$$.update=()=>{if(s.$$.dirty&16&&l){t(0,n=""),t(1,a=""),t(2,i=""),t(3,u="");let r=l.trim().split(`
`);for(let o=0;o<r.length;o++){const h=r[o];o==0&&t(0,n=h),o==1&&t(1,a=h.replaceAll("**","")),o==2&&t(2,i=h),o==3&&t(3,u=r[3])}}},[n,a,i,u,l]}class Pe extends R{constructor(e){super();S(this,e,Ce,He,F,{input:4})}}function ue(s,e,t){const l=s.slice();return l[2]=e[t],l}function ce(s,e,t){const l=s.slice();return l[5]=e[t],l}function fe(s){let e,t;return e=new Pe({props:{input:s[5]}}),{c(){W(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,n){X(e,l,n),t=!0},p(l,n){const a={};n&1&&(a.input=l[5]),e.$set(a)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function de(s){let e,t=s[2].name+"",l,n,a,i,u,r=s[2].jobs,o=[];for(let c=0;c<r.length;c+=1)o[c]=fe(ce(s,r,c));const h=c=>A(o[c],1,1,()=>{o[c]=null});return{c(){e=I("div"),l=B(t),n=j(),a=I("div");for(let c=0;c<o.length;c+=1)o[c].c();i=j(),this.h()},l(c){e=y(c,"DIV",{class:!0});var f=T(e);l=L(f,t),f.forEach(p),n=w(c),a=y(c,"DIV",{class:!0});var d=T(a);for(let k=0;k<o.length;k+=1)o[k].l(d);i=w(d),d.forEach(p),this.h()},h(){b(e,"class","timeline-part-title"),b(a,"class","timeline-part")},m(c,f){H(c,e,f),m(e,l),H(c,n,f),H(c,a,f);for(let d=0;d<o.length;d+=1)o[d].m(a,null);m(a,i),u=!0},p(c,f){if((!u||f&1)&&t!==(t=c[2].name+"")&&O(l,t),f&1){r=c[2].jobs;let d;for(d=0;d<r.length;d+=1){const k=ce(c,r,d);o[d]?(o[d].p(k,f),C(o[d],1)):(o[d]=fe(k),o[d].c(),C(o[d],1),o[d].m(a,i))}for(Z(),d=r.length;d<o.length;d+=1)h(d);x()}},i(c){if(!u){for(let f=0;f<r.length;f+=1)C(o[f]);u=!0}},o(c){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)A(o[f]);u=!1},d(c){c&&p(e),c&&p(n),c&&p(a),$(o,c)}}}function Ae(s){let e,t,l=s[0],n=[];for(let i=0;i<l.length;i+=1)n[i]=de(ue(s,l,i));const a=i=>A(n[i],1,1,()=>{n[i]=null});return{c(){e=I("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=y(i,"DIV",{id:!0,contenteditable:!0});var u=T(e);for(let r=0;r<n.length;r+=1)n[r].l(u);u.forEach(p),this.h()},h(){b(e,"id","timeline"),b(e,"contenteditable","false")},m(i,u){H(i,e,u);for(let r=0;r<n.length;r+=1)n[r].m(e,null);t=!0},p(i,[u]){if(u&1){l=i[0];let r;for(r=0;r<l.length;r+=1){const o=ue(i,l,r);n[r]?(n[r].p(o,u),C(n[r],1)):(n[r]=de(o),n[r].c(),C(n[r],1),n[r].m(e,null))}for(Z(),r=l.length;r<n.length;r+=1)a(r);x()}},i(i){if(!t){for(let u=0;u<l.length;u+=1)C(n[u]);t=!0}},o(i){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)A(n[u]);t=!1},d(i){i&&p(e),$(n,i)}}}function Be(s,e,t){let{input:l}=e,n=[];return s.$$set=a=>{"input"in a&&t(1,l=a.input)},s.$$.update=()=>{s.$$.dirty&3&&(l?(t(0,n=[]),l.split(`
## `).slice(1).forEach(i=>{let u=i.split(`
`),r=i.split(`
### `).slice(1),o="";u.length>0&&(o=u[0]),o&&r.length>0&&t(0,n=[...n,{name:o,jobs:r}])})):t(0,n=[{name:"Stage",jobs:[`Position
date
address
description`]}]))},[n,l]}class Le extends R{constructor(e){super();S(this,e,Be,Ae,F,{input:1})}}function he(s,e,t){const l=s.slice();return l[2]=e[t],l}function _e(s){let e,t,l=s[2].name+"",n,a,i,u=s[2].text.replaceAll(`
`,"<br>")+"",r;return{c(){e=I("div"),t=I("h2"),n=B(l),a=j(),i=I("p"),r=j(),this.h()},l(o){e=y(o,"DIV",{class:!0});var h=T(e);t=y(h,"H2",{});var c=T(t);n=L(c,l),c.forEach(p),a=w(h),i=y(h,"P",{});var f=T(i);f.forEach(p),r=w(h),h.forEach(p),this.h()},h(){b(e,"class","other")},m(o,h){H(o,e,h),m(e,t),m(t,n),m(e,a),m(e,i),i.innerHTML=u,m(e,r)},p(o,h){h&1&&l!==(l=o[2].name+"")&&O(n,l),h&1&&u!==(u=o[2].text.replaceAll(`
`,"<br>")+"")&&(i.innerHTML=u)},d(o){o&&p(e)}}}function Me(s){let e,t=s[0],l=[];for(let n=0;n<t.length;n+=1)l[n]=_e(he(s,t,n));return{c(){e=I("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=y(n,"DIV",{id:!0,contenteditable:!0});var a=T(e);for(let i=0;i<l.length;i+=1)l[i].l(a);a.forEach(p),this.h()},h(){b(e,"id","other"),b(e,"contenteditable","false")},m(n,a){H(n,e,a);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(n,[a]){if(a&1){t=n[0];let i;for(i=0;i<t.length;i+=1){const u=he(n,t,i);l[i]?l[i].p(u,a):(l[i]=_e(u),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},i:M,o:M,d(n){n&&p(e),$(l,n)}}}function Oe(s,e,t){let{input:l}=e,n=[];return s.$$set=a=>{"input"in a&&t(1,l=a.input)},s.$$.update=()=>{s.$$.dirty&3&&(l?(t(0,n=[]),l.split(`
## `).slice(1).forEach(i=>{let u=i.split(`
`)[0],r=i.split(`
`).slice(1),o=!1,h="";r.forEach(f=>{if(f[0]=="-")if(o||(o=!0,h+="<ul>"),f=f.slice(1).trim(),f.endsWith("%")){let d=f.split(" ").slice(-1)[0].replace("%",""),k=f.split(" ").slice(0,-1).join(" "),v=`<div class="bar-full"><div class="bar" style="width:${d}%"><div/><div/><div/></div></div>`;h+=`<li class="skill"><p>${k}</p>${v}</li>`}else h+=`<li><p>${f}</p></li>`;else o?(o=!1,h+=`<br>${f}`):h+=f});let c={name:u,text:h};t(0,n=[...n,c])})):t(0,n=[{name:"Skills",text:"description"}]))},[n,l]}class Ue extends R{constructor(e){super();S(this,e,Oe,Me,F,{input:1})}}function Re(s){let e,t,l,n,a,i,u,r,o,h,c,f,d,k,v;return{c(){e=I("nav"),t=I("button"),l=B("Load image"),n=j(),a=I("input"),i=j(),u=I("button"),r=B("Color"),o=j(),h=I("input"),c=j(),f=I("button"),d=B(s[5]),this.h()},l(g){e=y(g,"NAV",{class:!0});var E=T(e);t=y(E,"BUTTON",{class:!0});var V=T(t);l=L(V,"Load image"),V.forEach(p),n=w(E),a=y(E,"INPUT",{style:!0,type:!0,accept:!0,class:!0}),i=w(E),u=y(E,"BUTTON",{style:!0,class:!0});var D=T(u);r=L(D,"Color"),D.forEach(p),o=w(E),h=y(E,"INPUT",{type:!0,style:!0,class:!0}),c=w(E),f=y(E,"BUTTON",{id:!0,class:!0});var _=T(f);d=L(_,s[5]),_.forEach(p),E.forEach(p),this.h()},h(){b(t,"class","svelte-1x1en8l"),G(a,"display","none"),b(a,"type","file"),b(a,"accept",".jpg, .jpeg, .png"),b(a,"class","svelte-1x1en8l"),G(u,"background-color",s[0]),G(u,"color","#ccc"),b(u,"class","svelte-1x1en8l"),b(h,"type","color"),G(h,"display","none"),b(h,"class","svelte-1x1en8l"),b(f,"id","buttonEdit"),b(f,"class","svelte-1x1en8l"),b(e,"class","svelte-1x1en8l")},m(g,E){H(g,e,E),m(e,t),m(t,l),m(e,n),m(e,a),s[9](a),m(e,i),m(e,u),m(u,r),m(e,o),m(e,h),K(h,s[0]),s[12](h),m(e,c),m(e,f),m(f,d),k||(v=[q(t,"click",s[7]),q(a,"change",s[8]),q(u,"click",s[10]),q(h,"input",s[11]),q(f,"click",function(){ve(s[1])&&s[1].apply(this,arguments)})],k=!0)},p(g,[E]){s=g,E&1&&G(u,"background-color",s[0]),E&1&&K(h,s[0]),E&32&&O(d,s[5])},i:M,o:M,d(g){g&&p(e),s[9](null),s[12](null),k=!1,be(v)}}}function Se(s,e,t){let{toggleEdit:l}=e,{loadImage:n}=e,{edit:a}=e,{color:i}=e,u,r,o;const h=()=>{u.click()},c=g=>n(g);function f(g){z[g?"unshift":"push"](()=>{u=g,t(3,u)})}const d=()=>{r.click()};function k(){i=this.value,t(0,i)}function v(g){z[g?"unshift":"push"](()=>{r=g,t(4,r)})}return s.$$set=g=>{"toggleEdit"in g&&t(1,l=g.toggleEdit),"loadImage"in g&&t(2,n=g.loadImage),"edit"in g&&t(6,a=g.edit),"color"in g&&t(0,i=g.color)},s.$$.update=()=>{s.$$.dirty&64&&(a?t(5,o="Preview"):t(5,o="Edit"))},[i,l,n,u,r,o,a,h,c,f,d,k,v]}class Fe extends R{constructor(e){super();S(this,e,Se,Re,F,{toggleEdit:1,loadImage:2,edit:6,color:0})}}const{document:ee}=ke;function me(s){let e,t,l;function n(i){s[11](i)}let a={id:"inputArea"};return s[0]!==void 0&&(a.value=s[0]),e=new Ve({props:a}),z.push(()=>re(e,"value",n)),{c(){W(e.$$.fragment)},l(i){J(e.$$.fragment,i)},m(i,u){X(e,i,u),l=!0},p(i,u){const r={};!t&&u&1&&(t=!0,r.value=i[0],ae(()=>t=!1)),e.$set(r)},i(i){l||(C(e.$$.fragment,i),l=!0)},o(i){A(e.$$.fragment,i),l=!1},d(i){Y(e,i)}}}function pe(s){let e,t;return{c(){e=I("footer"),t=B(s[5])},l(l){e=y(l,"FOOTER",{});var n=T(e);t=L(n,s[5]),n.forEach(p)},m(l,n){H(l,e,n),m(e,t)},p(l,n){n&32&&O(t,l[5])},d(l){l&&p(e)}}}function Ge(s){let e,t,l,n,a,i,u,r,o,h,c,f,d,k,v;ee.title=e=ge;function g(_){s[10](_)}let E={toggleEdit:s[8],loadImage:s[9],edit:s[6]};s[1]!==void 0&&(E.color=s[1]),l=new Fe({props:E}),z.push(()=>re(l,"color",g));let V=s[6]&&me(s);o=new Ne({props:{input:s[2],avatar:s[7]}}),c=new Le({props:{input:s[3]}}),d=new Ue({props:{input:s[4]}});let D=s[5]&&pe(s);return{c(){t=j(),W(l.$$.fragment),a=j(),i=I("div"),V&&V.c(),u=j(),r=I("div"),W(o.$$.fragment),h=j(),W(c.$$.fragment),f=j(),W(d.$$.fragment),k=j(),D&&D.c(),this.h()},l(_){Ee('[data-svelte="svelte-1sv3h"]',ee.head).forEach(p),t=w(_),J(l.$$.fragment,_),a=w(_),i=y(_,"DIV",{id:!0,class:!0});var U=T(i);V&&V.l(U),u=w(U),r=y(U,"DIV",{id:!0,style:!0,class:!0});var P=T(r);J(o.$$.fragment,P),h=w(P),J(c.$$.fragment,P),f=w(P),J(d.$$.fragment,P),k=w(P),D&&D.l(P),P.forEach(p),U.forEach(p),this.h()},h(){b(r,"id","page"),G(r,"--accent-color",s[1]),b(r,"class","svelte-1s847ju"),oe(r,"editorVisible",s[6]),b(i,"id","main"),b(i,"class","svelte-1s847ju")},m(_,N){H(_,t,N),X(l,_,N),H(_,a,N),H(_,i,N),V&&V.m(i,null),m(i,u),m(i,r),X(o,r,null),m(r,h),X(c,r,null),m(r,f),X(d,r,null),m(r,k),D&&D.m(r,null),v=!0},p(_,[N]){(!v||N&0)&&e!==(e=ge)&&(ee.title=e);const U={};N&64&&(U.edit=_[6]),!n&&N&2&&(n=!0,U.color=_[1],ae(()=>n=!1)),l.$set(U),_[6]?V?(V.p(_,N),N&64&&C(V,1)):(V=me(_),V.c(),C(V,1),V.m(i,u)):V&&(Z(),A(V,1,1,()=>{V=null}),x());const P={};N&4&&(P.input=_[2]),N&128&&(P.avatar=_[7]),o.$set(P);const te={};N&8&&(te.input=_[3]),c.$set(te);const le={};N&16&&(le.input=_[4]),d.$set(le),_[5]?D?D.p(_,N):(D=pe(_),D.c(),D.m(r,null)):D&&(D.d(1),D=null),(!v||N&2)&&G(r,"--accent-color",_[1]),N&64&&oe(r,"editorVisible",_[6])},i(_){v||(C(l.$$.fragment,_),C(V),C(o.$$.fragment,_),C(c.$$.fragment,_),C(d.$$.fragment,_),v=!0)},o(_){A(l.$$.fragment,_),A(V),A(o.$$.fragment,_),A(c.$$.fragment,_),A(d.$$.fragment,_),v=!1},d(_){_&&p(t),Y(l,_),_&&p(a),_&&p(i),V&&V.d(),Y(o),Y(c),Y(d),D&&D.d()}}}let ge="CV";function qe(s,e,t){let l,n,a,i,u,r=!0,o="#3c64a0",h;function c(){t(6,r=!r),document.getElementById("buttonEdit").value="Close Curtain"}function f(v){let g=v.target.files[0],E=new FileReader;E.readAsDataURL(g),E.onload=V=>{t(7,h=V.target.result)}}function d(v){o=v,t(1,o)}function k(v){l=v,t(0,l)}return s.$$.update=()=>{if(s.$$.dirty&2&&t(1,o),s.$$.dirty&1&&l){let v=l.split(`
# `);t(2,n=""),t(3,a=""),t(4,i=""),t(5,u="");for(let g=0;g<v.length;g++){const E=v[g];g==0&&t(2,n=E.slice(1).trim()),g==1&&t(3,a=E.trim()),g==2&&t(4,i=E.trim()),g==3&&t(5,u=E.split(`
`).slice(1).join(`
`).trim())}}},[l,o,n,a,i,u,r,h,c,f,d,k]}class Je extends R{constructor(e){super();S(this,e,qe,Ge,F,{})}}export{Je as default};
