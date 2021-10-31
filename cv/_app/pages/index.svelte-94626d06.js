import{S,i as U,s as F,e as E,c as k,a as V,d as p,b as v,J as ie,f as H,K as Y,L as X,I as M,B as ne,M as se,k as w,t as B,n as N,g as C,H as g,h as O,N as K,x as P,j as G,m as q,o as W,u as L,v as J,r as Q,w as z,O as Z,P as x,Q as ve,R as be,T as $,U as re,V as ae,W as Ee,X as oe,Y as ke}from"../chunks/vendor-eb196138.js";function Ie(s){let e,t,l,n;return{c(){e=E("textarea"),this.h()},l(a){e=k(a,"TEXTAREA",{id:!0,class:!0}),V(e).forEach(p),this.h()},h(){v(e,"id",s[1]),v(e,"class",t=""+(ie(s[2].class)+" svelte-ryp01x"))},m(a,i){H(a,e,i),Y(e,s[0]),l||(n=X(e,"input",s[3]),l=!0)},p(a,[i]){i&2&&v(e,"id",a[1]),i&4&&t!==(t=""+(ie(a[2].class)+" svelte-ryp01x"))&&v(e,"class",t),i&1&&Y(e,a[0])},i:M,o:M,d(a){a&&p(e),l=!1,n()}}}function Ve(s,e,t){let{id:l}=e,{value:n=`# Full Name
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
Legal notice etc etc.`}=e;function a(){n=this.value,t(0,n)}return s.$$set=i=>{t(2,e=ne(ne({},e),se(i))),"id"in i&&t(1,l=i.id),"value"in i&&t(0,n=i.value)},e=se(e),[n,l,e,a]}class ye extends S{constructor(e){super();U(this,e,Ve,Ie,F,{id:1,value:0})}}function De(s){let e,t;return{c(){e=E("img"),this.h()},l(l){e=k(l,"IMG",{src:!0,alt:!0}),this.h()},h(){K(e.src,t=s[2])||v(e,"src",t),v(e,"alt","")},m(l,n){H(l,e,n)},p(l,n){n&4&&!K(e.src,t=l[2])&&v(e,"src",t)},d(l){l&&p(e)}}}function Te(s){let e,t;return{c(){e=E("img"),this.h()},l(l){e=k(l,"IMG",{src:!0,alt:!0}),this.h()},h(){K(e.src,t=s[0])||v(e,"src",t),v(e,"alt","")},m(l,n){H(l,e,n)},p(l,n){n&1&&!K(e.src,t=l[0])&&v(e,"src",t)},d(l){l&&p(e)}}}function je(s){let e,t,l,n,a,i,f,r;function o(d,u){return d[0]?Te:De}let h=o(s),c=h(s);return{c(){e=E("div"),t=E("div"),c.c(),l=w(),n=E("div"),a=E("h1"),i=B(s[1]),f=w(),r=E("p"),this.h()},l(d){e=k(d,"DIV",{id:!0});var u=V(e);t=k(u,"DIV",{class:!0});var m=V(t);c.l(m),m.forEach(p),l=N(u),n=k(u,"DIV",{contenteditable:!0});var b=V(n);a=k(b,"H1",{});var y=V(a);i=C(y,s[1]),y.forEach(p),f=N(b),r=k(b,"P",{});var D=V(r);D.forEach(p),b.forEach(p),u.forEach(p),this.h()},h(){v(t,"class","profile-picture"),v(n,"contenteditable","false"),v(e,"id","info")},m(d,u){H(d,e,u),g(e,t),c.m(t,null),g(e,l),g(e,n),g(n,a),g(a,i),g(n,f),g(n,r),r.innerHTML=s[3]},p(d,[u]){h===(h=o(d))&&c?c.p(d,u):(c.d(1),c=h(d),c&&(c.c(),c.m(t,null))),u&2&&O(i,d[1]),u&8&&(r.innerHTML=d[3])},i:M,o:M,d(d){d&&p(e),c.d()}}}function we(s,e,t){let{input:l}=e,{avatar:n}=e,a,i,f;return s.$$set=r=>{"input"in r&&t(4,l=r.input),"avatar"in r&&t(0,n=r.avatar)},s.$$.update=()=>{if(s.$$.dirty&24)if(l){let r=l.split(`
`);t(3,f="");for(let o=0;o<r.length;o++){const h=r[o];switch(o){case 0:t(1,a=h.trim());case 1:t(2,i=h.replace("image:","").trim())}o>1&&h&&t(3,f+=h.trim()+"<br>")}}else t(2,i=""),t(1,a="Full Name"),t(3,f="phone:<br>email:<br>born:<br>website:")},[n,a,i,f,l]}class Ne extends S{constructor(e){super();U(this,e,we,je,F,{input:4,avatar:0})}}function He(s){let e,t,l,n,a,i,f,r,o,h,c,d,u;return{c(){e=E("div"),t=E("div"),l=B(s[1]),n=w(),a=E("div"),i=E("h2"),f=B(s[0]),r=w(),o=E("div"),h=B(s[2]),c=w(),d=E("div"),u=B(s[3]),this.h()},l(m){e=k(m,"DIV",{class:!0});var b=V(e);t=k(b,"DIV",{class:!0});var y=V(t);l=C(y,s[1]),y.forEach(p),n=N(b),a=k(b,"DIV",{class:!0});var D=V(a);i=k(D,"H2",{});var I=V(i);f=C(I,s[0]),I.forEach(p),r=N(D),o=k(D,"DIV",{class:!0});var T=V(o);h=C(T,s[2]),T.forEach(p),c=N(D),d=k(D,"DIV",{class:!0});var _=V(d);u=C(_,s[3]),_.forEach(p),D.forEach(p),b.forEach(p),this.h()},h(){v(t,"class","date"),v(o,"class","address"),v(d,"class","description"),v(a,"class","job-info"),v(e,"class","job")},m(m,b){H(m,e,b),g(e,t),g(t,l),g(e,n),g(e,a),g(a,i),g(i,f),g(a,r),g(a,o),g(o,h),g(a,c),g(a,d),g(d,u)},p(m,[b]){b&2&&O(l,m[1]),b&1&&O(f,m[0]),b&4&&O(h,m[2]),b&8&&O(u,m[3])},i:M,o:M,d(m){m&&p(e)}}}function Pe(s,e,t){let{input:l}=e,n,a,i,f;return s.$$set=r=>{"input"in r&&t(4,l=r.input)},s.$$.update=()=>{if(s.$$.dirty&16&&l){t(0,n=""),t(1,a=""),t(2,i=""),t(3,f="");let r=l.trim().split(`
`);for(let o=0;o<r.length;o++){const h=r[o];o==0&&t(0,n=h),o==1&&t(1,a=h.replaceAll("**","")),o==2&&t(2,i=h),o==3&&t(3,f=r[3])}}},[n,a,i,f,l]}class Ae extends S{constructor(e){super();U(this,e,Pe,He,F,{input:4})}}function fe(s,e,t){const l=s.slice();return l[2]=e[t],l}function ue(s,e,t){const l=s.slice();return l[5]=e[t],l}function ce(s){let e,t;return e=new Ae({props:{input:s[5]}}),{c(){G(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,n){W(e,l,n),t=!0},p(l,n){const a={};n&1&&(a.input=l[5]),e.$set(a)},i(l){t||(P(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function de(s){let e,t=s[2].name+"",l,n,a,i,f,r=s[2].jobs,o=[];for(let c=0;c<r.length;c+=1)o[c]=ce(ue(s,r,c));const h=c=>L(o[c],1,1,()=>{o[c]=null});return{c(){e=E("div"),l=B(t),n=w(),a=E("div");for(let c=0;c<o.length;c+=1)o[c].c();i=w(),this.h()},l(c){e=k(c,"DIV",{class:!0});var d=V(e);l=C(d,t),d.forEach(p),n=N(c),a=k(c,"DIV",{class:!0});var u=V(a);for(let m=0;m<o.length;m+=1)o[m].l(u);i=N(u),u.forEach(p),this.h()},h(){v(e,"class","timeline-part-title"),v(a,"class","timeline-part")},m(c,d){H(c,e,d),g(e,l),H(c,n,d),H(c,a,d);for(let u=0;u<o.length;u+=1)o[u].m(a,null);g(a,i),f=!0},p(c,d){if((!f||d&1)&&t!==(t=c[2].name+"")&&O(l,t),d&1){r=c[2].jobs;let u;for(u=0;u<r.length;u+=1){const m=ue(c,r,u);o[u]?(o[u].p(m,d),P(o[u],1)):(o[u]=ce(m),o[u].c(),P(o[u],1),o[u].m(a,i))}for(Q(),u=r.length;u<o.length;u+=1)h(u);z()}},i(c){if(!f){for(let d=0;d<r.length;d+=1)P(o[d]);f=!0}},o(c){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)L(o[d]);f=!1},d(c){c&&p(e),c&&p(n),c&&p(a),Z(o,c)}}}function Le(s){let e,t,l=s[0],n=[];for(let i=0;i<l.length;i+=1)n[i]=de(fe(s,l,i));const a=i=>L(n[i],1,1,()=>{n[i]=null});return{c(){e=E("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=k(i,"DIV",{id:!0,contenteditable:!0});var f=V(e);for(let r=0;r<n.length;r+=1)n[r].l(f);f.forEach(p),this.h()},h(){v(e,"id","timeline"),v(e,"contenteditable","false")},m(i,f){H(i,e,f);for(let r=0;r<n.length;r+=1)n[r].m(e,null);t=!0},p(i,[f]){if(f&1){l=i[0];let r;for(r=0;r<l.length;r+=1){const o=fe(i,l,r);n[r]?(n[r].p(o,f),P(n[r],1)):(n[r]=de(o),n[r].c(),P(n[r],1),n[r].m(e,null))}for(Q(),r=l.length;r<n.length;r+=1)a(r);z()}},i(i){if(!t){for(let f=0;f<l.length;f+=1)P(n[f]);t=!0}},o(i){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)L(n[f]);t=!1},d(i){i&&p(e),Z(n,i)}}}function Me(s,e,t){let{input:l}=e,n=[];return s.$$set=a=>{"input"in a&&t(1,l=a.input)},s.$$.update=()=>{s.$$.dirty&3&&(l?(t(0,n=[]),l.split(`
## `).slice(1).forEach(i=>{let f=i.split(`
`),r=i.split(`
### `).slice(1),o="";f.length>0&&(o=f[0]),o&&r.length>0&&t(0,n=[...n,{name:o,jobs:r}])})):t(0,n=[{name:"Stage",jobs:[`Position
date
address
description`]}]))},[n,l]}class Be extends S{constructor(e){super();U(this,e,Me,Le,F,{input:1})}}function he(s,e,t){const l=s.slice();return l[2]=e[t],l}function _e(s){let e,t,l=s[2].name+"",n,a,i,f=s[2].text.replaceAll(`
`,"<br>")+"",r;return{c(){e=E("div"),t=E("h2"),n=B(l),a=w(),i=E("p"),r=w(),this.h()},l(o){e=k(o,"DIV",{class:!0});var h=V(e);t=k(h,"H2",{});var c=V(t);n=C(c,l),c.forEach(p),a=N(h),i=k(h,"P",{});var d=V(i);d.forEach(p),r=N(h),h.forEach(p),this.h()},h(){v(e,"class","other")},m(o,h){H(o,e,h),g(e,t),g(t,n),g(e,a),g(e,i),i.innerHTML=f,g(e,r)},p(o,h){h&1&&l!==(l=o[2].name+"")&&O(n,l),h&1&&f!==(f=o[2].text.replaceAll(`
`,"<br>")+"")&&(i.innerHTML=f)},d(o){o&&p(e)}}}function Ce(s){let e,t=s[0],l=[];for(let n=0;n<t.length;n+=1)l[n]=_e(he(s,t,n));return{c(){e=E("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=k(n,"DIV",{id:!0,contenteditable:!0});var a=V(e);for(let i=0;i<l.length;i+=1)l[i].l(a);a.forEach(p),this.h()},h(){v(e,"id","other"),v(e,"contenteditable","false")},m(n,a){H(n,e,a);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(n,[a]){if(a&1){t=n[0];let i;for(i=0;i<t.length;i+=1){const f=he(n,t,i);l[i]?l[i].p(f,a):(l[i]=_e(f),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},i:M,o:M,d(n){n&&p(e),Z(l,n)}}}function Oe(s,e,t){let{input:l}=e,n=[];return s.$$set=a=>{"input"in a&&t(1,l=a.input)},s.$$.update=()=>{s.$$.dirty&3&&(l?(t(0,n=[]),l.split(`
## `).slice(1).forEach(i=>{let f=i.split(`
`)[0],r=i.split(`
`).slice(1),o=!1,h="";r.forEach(d=>{if(d[0]=="-")if(o||(o=!0,h+="<ul>"),d=d.slice(1).trim(),d.endsWith("%")){let u=d.split(" ").slice(-1)[0].replace("%",""),m=d.split(" ").slice(0,-1).join(" "),b=`<div class="bar-full"><div class="bar" style="width:${u}%"><div/><div/><div/></div></div>`;h+=`<li class="skill"><p>${m}</p>${b}</li>`}else h+=`<li><p>${d}</p></li>`;else o?(o=!1,h+=`<br>${d}`):h+=d});let c={name:f,text:h};t(0,n=[...n,c])})):t(0,n=[{name:"Skills",text:"description"}]))},[n,l]}class Re extends S{constructor(e){super();U(this,e,Oe,Ce,F,{input:1})}}function Se(s){let e,t,l,n,a,i,f,r,o,h,c,d;return{c(){e=E("nav"),t=E("button"),l=B("Load image"),n=w(),a=E("input"),i=w(),f=E("input"),r=w(),o=E("button"),h=B(s[4]),this.h()},l(u){e=k(u,"NAV",{class:!0});var m=V(e);t=k(m,"BUTTON",{class:!0});var b=V(t);l=C(b,"Load image"),b.forEach(p),n=N(m),a=k(m,"INPUT",{style:!0,type:!0,accept:!0,class:!0}),i=N(m),f=k(m,"INPUT",{type:!0,class:!0}),r=N(m),o=k(m,"BUTTON",{id:!0,class:!0});var y=V(o);h=C(y,s[4]),y.forEach(p),m.forEach(p),this.h()},h(){v(t,"class","svelte-1x1en8l"),x(a,"display","none"),v(a,"type","file"),v(a,"accept",".jpg, .jpeg, .png"),v(a,"class","svelte-1x1en8l"),v(f,"type","color"),v(f,"class","svelte-1x1en8l"),v(o,"id","buttonEdit"),v(o,"class","svelte-1x1en8l"),v(e,"class","svelte-1x1en8l")},m(u,m){H(u,e,m),g(e,t),g(t,l),g(e,n),g(e,a),s[8](a),g(e,i),g(e,f),Y(f,s[0]),g(e,r),g(e,o),g(o,h),c||(d=[X(t,"click",s[6]),X(a,"change",s[7]),X(f,"input",s[9]),X(o,"click",function(){ve(s[1])&&s[1].apply(this,arguments)})],c=!0)},p(u,[m]){s=u,m&1&&Y(f,s[0]),m&16&&O(h,s[4])},i:M,o:M,d(u){u&&p(e),s[8](null),c=!1,be(d)}}}function Ue(s,e,t){let{toggleEdit:l}=e,{loadImage:n}=e,{edit:a}=e,{color:i}=e,f,r;const o=()=>{f.click()},h=u=>n(u);function c(u){$[u?"unshift":"push"](()=>{f=u,t(3,f)})}function d(){i=this.value,t(0,i)}return s.$$set=u=>{"toggleEdit"in u&&t(1,l=u.toggleEdit),"loadImage"in u&&t(2,n=u.loadImage),"edit"in u&&t(5,a=u.edit),"color"in u&&t(0,i=u.color)},s.$$.update=()=>{s.$$.dirty&32&&(a?t(4,r="Preview"):t(4,r="Edit"))},[i,l,n,f,r,a,o,h,c,d]}class Fe extends S{constructor(e){super();U(this,e,Ue,Se,F,{toggleEdit:1,loadImage:2,edit:5,color:0})}}const{document:ee}=ke;function me(s){let e,t,l;function n(i){s[11](i)}let a={id:"inputArea"};return s[0]!==void 0&&(a.value=s[0]),e=new ye({props:a}),$.push(()=>re(e,"value",n)),{c(){G(e.$$.fragment)},l(i){q(e.$$.fragment,i)},m(i,f){W(e,i,f),l=!0},p(i,f){const r={};!t&&f&1&&(t=!0,r.value=i[0],ae(()=>t=!1)),e.$set(r)},i(i){l||(P(e.$$.fragment,i),l=!0)},o(i){L(e.$$.fragment,i),l=!1},d(i){J(e,i)}}}function pe(s){let e,t;return{c(){e=E("footer"),t=B(s[5])},l(l){e=k(l,"FOOTER",{});var n=V(e);t=C(n,s[5]),n.forEach(p)},m(l,n){H(l,e,n),g(e,t)},p(l,n){n&32&&O(t,l[5])},d(l){l&&p(e)}}}function Ge(s){let e,t,l,n,a,i,f,r,o,h,c,d,u,m,b;ee.title=e=ge;function y(_){s[10](_)}let D={toggleEdit:s[8],loadImage:s[9],edit:s[6]};s[1]!==void 0&&(D.color=s[1]),l=new Fe({props:D}),$.push(()=>re(l,"color",y));let I=s[6]&&me(s);o=new Ne({props:{input:s[2],avatar:s[7]}}),c=new Be({props:{input:s[3]}}),u=new Re({props:{input:s[4]}});let T=s[5]&&pe(s);return{c(){t=w(),G(l.$$.fragment),a=w(),i=E("div"),I&&I.c(),f=w(),r=E("div"),G(o.$$.fragment),h=w(),G(c.$$.fragment),d=w(),G(u.$$.fragment),m=w(),T&&T.c(),this.h()},l(_){Ee('[data-svelte="svelte-1sv3h"]',ee.head).forEach(p),t=N(_),q(l.$$.fragment,_),a=N(_),i=k(_,"DIV",{id:!0,class:!0});var R=V(i);I&&I.l(R),f=N(R),r=k(R,"DIV",{id:!0,style:!0,class:!0});var A=V(r);q(o.$$.fragment,A),h=N(A),q(c.$$.fragment,A),d=N(A),q(u.$$.fragment,A),m=N(A),T&&T.l(A),A.forEach(p),R.forEach(p),this.h()},h(){v(r,"id","page"),x(r,"--accent-color",s[1]),v(r,"class","svelte-1s847ju"),oe(r,"editorVisible",s[6]),v(i,"id","main"),v(i,"class","svelte-1s847ju")},m(_,j){H(_,t,j),W(l,_,j),H(_,a,j),H(_,i,j),I&&I.m(i,null),g(i,f),g(i,r),W(o,r,null),g(r,h),W(c,r,null),g(r,d),W(u,r,null),g(r,m),T&&T.m(r,null),b=!0},p(_,[j]){(!b||j&0)&&e!==(e=ge)&&(ee.title=e);const R={};j&64&&(R.edit=_[6]),!n&&j&2&&(n=!0,R.color=_[1],ae(()=>n=!1)),l.$set(R),_[6]?I?(I.p(_,j),j&64&&P(I,1)):(I=me(_),I.c(),P(I,1),I.m(i,f)):I&&(Q(),L(I,1,1,()=>{I=null}),z());const A={};j&4&&(A.input=_[2]),j&128&&(A.avatar=_[7]),o.$set(A);const te={};j&8&&(te.input=_[3]),c.$set(te);const le={};j&16&&(le.input=_[4]),u.$set(le),_[5]?T?T.p(_,j):(T=pe(_),T.c(),T.m(r,null)):T&&(T.d(1),T=null),(!b||j&2)&&x(r,"--accent-color",_[1]),j&64&&oe(r,"editorVisible",_[6])},i(_){b||(P(l.$$.fragment,_),P(I),P(o.$$.fragment,_),P(c.$$.fragment,_),P(u.$$.fragment,_),b=!0)},o(_){L(l.$$.fragment,_),L(I),L(o.$$.fragment,_),L(c.$$.fragment,_),L(u.$$.fragment,_),b=!1},d(_){_&&p(t),J(l,_),_&&p(a),_&&p(i),I&&I.d(),J(o),J(c),J(u),T&&T.d()}}}let ge="CV";function qe(s,e,t){let l,n,a,i,f,r=!0,o="#3c64a0",h;function c(){t(6,r=!r),document.getElementById("buttonEdit").value="Close Curtain"}function d(b){let y=b.target.files[0],D=new FileReader;D.readAsDataURL(y),D.onload=I=>{t(7,h=I.target.result)}}function u(b){o=b,t(1,o)}function m(b){l=b,t(0,l)}return s.$$.update=()=>{if(s.$$.dirty&2&&t(1,o),s.$$.dirty&1&&l){let b=l.split(`
# `);t(2,n=""),t(3,a=""),t(4,i=""),t(5,f="");for(let y=0;y<b.length;y++){const D=b[y];y==0&&t(2,n=D.slice(1).trim()),y==1&&t(3,a=D.trim()),y==2&&t(4,i=D.trim()),y==3&&t(5,f=D.split(`
`).slice(1).join(`
`).trim())}}},[l,o,n,a,i,f,r,h,c,d,u,m]}class Je extends S{constructor(e){super();U(this,e,qe,Ge,F,{})}}export{Je as default};
