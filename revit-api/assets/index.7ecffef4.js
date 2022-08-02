var mt=(c,n)=>()=>(n||c((n={exports:{}}).exports,n),n.exports);var $o=mt((wo,ss)=>{const dt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function p(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=p(e);fetch(e.href,s)}};dt();function T(){}function $t(c,n){for(const p in n)c[p]=n[p];return c}function lt(c){return c()}function at(){return Object.create(null)}function as(c){c.forEach(lt)}function yt(c){return typeof c=="function"}function ts(c,n){return c!=c?n==n:c!==n||c&&typeof c=="object"||typeof c=="function"}let Kn;function wt(c,n){return Kn||(Kn=document.createElement("a")),Kn.href=n,c===Kn.href}function gt(c){return Object.keys(c).length===0}function ct(c,n,p,a){if(c){const e=it(c,n,p,a);return c[0](e)}}function it(c,n,p,a){return c[1]&&a?$t(p.ctx.slice(),c[1](a(n))):p.ctx}function ut(c,n,p,a){if(c[2]&&a){const e=c[2](a(p));if(n.dirty===void 0)return e;if(typeof e=="object"){const s=[],o=Math.max(n.dirty.length,e.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|e[l];return s}return n.dirty|e}return n.dirty}function rt(c,n,p,a,e,s){if(e){const o=it(n,p,a,s);c.p(o,e)}}function kt(c){if(c.ctx.length>32){const n=[],p=c.ctx.length/32;for(let a=0;a<p;a++)n[a]=-1;return n}return-1}function Vs(c,n){c.appendChild(n)}function u(c,n,p){c.insertBefore(n,p||null)}function i(c){c.parentNode.removeChild(c)}function k(c){return document.createElement(c)}function bt(c){return document.createTextNode(c)}function f(){return bt(" ")}function I(c,n,p){p==null?c.removeAttribute(n):c.getAttribute(n)!==p&&c.setAttribute(n,p)}function _t(c){return Array.from(c.childNodes)}let Xs;function Yn(c){Xs=c}const Xn=[],tt=[],Qn=[],et=[],vt=Promise.resolve();let qs=!1;function ht(){qs||(qs=!0,vt.then(ft))}function Zs(c){Qn.push(c)}const Ws=new Set;let Jn=0;function ft(){const c=Xs;do{for(;Jn<Xn.length;){const n=Xn[Jn];Jn++,Yn(n),zt(n.$$)}for(Yn(null),Xn.length=0,Jn=0;tt.length;)tt.pop()();for(let n=0;n<Qn.length;n+=1){const p=Qn[n];Ws.has(p)||(Ws.add(p),p())}Qn.length=0}while(Xn.length);for(;et.length;)et.pop()();qs=!1,Ws.clear(),Yn(c)}function zt(c){if(c.fragment!==null){c.update(),as(c.before_update);const n=c.dirty;c.dirty=[-1],c.fragment&&c.fragment.p(c.ctx,n),c.after_update.forEach(Zs)}}const ns=new Set;let jt;function w(c,n){c&&c.i&&(ns.delete(c),c.i(n))}function g(c,n,p,a){if(c&&c.o){if(ns.has(c))return;ns.add(c),jt.c.push(()=>{ns.delete(c),a&&(p&&c.d(1),a())}),c.o(n)}}function v(c){c&&c.c()}function b(c,n,p,a){const{fragment:e,on_mount:s,on_destroy:o,after_update:l}=c.$$;e&&e.m(n,p),a||Zs(()=>{const d=s.map(lt).filter(yt);o?o.push(...d):as(d),c.$$.on_mount=[]}),l.forEach(Zs)}function _(c,n){const p=c.$$;p.fragment!==null&&(as(p.on_destroy),p.fragment&&p.fragment.d(n),p.on_destroy=p.fragment=null,p.ctx=[])}function Tt(c,n){c.$$.dirty[0]===-1&&(Xn.push(c),ht(),c.$$.dirty.fill(0)),c.$$.dirty[n/31|0]|=1<<n%31}function es(c,n,p,a,e,s,o,l=[-1]){const d=Xs;Yn(c);const z=c.$$={fragment:null,ctx:null,props:s,update:T,not_equal:e,bound:at(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:at(),dirty:l,skip_bound:!1,root:n.target||d.$$.root};o&&o(z.root);let D=!1;if(z.ctx=p?p(c,n.props||{},(R,F,...M)=>{const $=M.length?M[0]:F;return z.ctx&&e(z.ctx[R],z.ctx[R]=$)&&(!z.skip_bound&&z.bound[R]&&z.bound[R]($),D&&Tt(c,R)),F}):[],z.update(),D=!0,as(z.before_update),z.fragment=a?a(z.ctx):!1,n.target){if(n.hydrate){const R=_t(n.target);z.fragment&&z.fragment.l(R),R.forEach(i)}else z.fragment&&z.fragment.c();n.intro&&w(c.$$.fragment),b(c,n.target,n.anchor,n.customElement),ft()}Yn(d)}class os{$destroy(){_(this,1),this.$destroy=T}$on(n,p){const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(p),()=>{const e=a.indexOf(p);e!==-1&&a.splice(e,1)}}$set(n){this.$$set&&!gt(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}var St=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{},S=function(c){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,a={},e={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function $(m){return m instanceof s?new s(m.type,$(m.content),m.alias):Array.isArray(m)?m.map($):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function($){return Object.prototype.toString.call($).slice(8,-1)},objId:function($){return $.__id||Object.defineProperty($,"__id",{value:++p}),$.__id},clone:function $(m,y){var h,j;switch(y=y||{},e.util.type(m)){case"Object":if(j=e.util.objId(m),y[j])return y[j];for(var E in h={},y[j]=h,m)m.hasOwnProperty(E)&&(h[E]=$(m[E],y));return h;case"Array":return j=e.util.objId(m),y[j]?y[j]:(h=[],y[j]=h,m.forEach(function(C,x){h[x]=$(C,y)}),h);default:return m}},getLanguage:function($){for(;$;){var m=n.exec($.className);if(m)return m[1].toLowerCase();$=$.parentElement}return"none"},setLanguage:function($,m){$.className=$.className.replace(RegExp(n,"gi"),""),$.classList.add("language-"+m)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(h){var $=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack)||[])[1];if($){var m=document.getElementsByTagName("script");for(var y in m)if(m[y].src==$)return m[y]}return null}},isActive:function($,m,y){for(var h="no-"+m;$;){var j=$.classList;if(j.contains(m))return!0;if(j.contains(h))return!1;$=$.parentElement}return!!y}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function($,m){var y=e.util.clone(e.languages[$]);for(var h in m)y[h]=m[h];return y},insertBefore:function($,m,y,h){var j=(h=h||e.languages)[$],E={};for(var C in j)if(j.hasOwnProperty(C)){if(C==m)for(var x in y)y.hasOwnProperty(x)&&(E[x]=y[x]);y.hasOwnProperty(C)||(E[C]=j[C])}var G=h[$];return h[$]=E,e.languages.DFS(e.languages,function(L,Q){Q===G&&L!=$&&(this[L]=E)}),E},DFS:function $(m,y,h,j){j=j||{};var E=e.util.objId;for(var C in m)if(m.hasOwnProperty(C)){y.call(m,C,m[C],h||C);var x=m[C],G=e.util.type(x);G!=="Object"||j[E(x)]?G!=="Array"||j[E(x)]||(j[E(x)]=!0,$(x,y,C,j)):(j[E(x)]=!0,$(x,y,null,j))}}},plugins:{},highlightAll:function($,m){e.highlightAllUnder(document,$,m)},highlightAllUnder:function($,m,y){var h={callback:y,container:$,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};e.hooks.run("before-highlightall",h),h.elements=Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)),e.hooks.run("before-all-elements-highlight",h);for(var j,E=0;j=h.elements[E++];)e.highlightElement(j,m===!0,h.callback)},highlightElement:function($,m,y){var h=e.util.getLanguage($),j=e.languages[h];e.util.setLanguage($,h);var E=$.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&e.util.setLanguage(E,h);var C={element:$,language:h,grammar:j,code:$.textContent};function x(L){C.highlightedCode=L,e.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,e.hooks.run("after-highlight",C),e.hooks.run("complete",C),y&&y.call(C.element)}if(e.hooks.run("before-sanity-check",C),(E=C.element.parentElement)&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!C.code)return e.hooks.run("complete",C),void(y&&y.call(C.element));if(e.hooks.run("before-highlight",C),C.grammar)if(m&&c.Worker){var G=new Worker(e.filename);G.onmessage=function(L){x(L.data)},G.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else x(e.highlight(C.code,C.grammar,C.language));else x(e.util.encode(C.code))},highlight:function($,m,y){var h={code:$,grammar:m,language:y};if(e.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=e.tokenize(h.code,h.grammar),e.hooks.run("after-tokenize",h),s.stringify(e.util.encode(h.tokens),h.language)},tokenize:function($,m){var y=m.rest;if(y){for(var h in y)m[h]=y[h];delete m.rest}var j=new d;return z(j,j.head,$),l($,j,m,j.head,0),function(E){for(var C=[],x=E.head.next;x!==E.tail;)C.push(x.value),x=x.next;return C}(j)},hooks:{all:{},add:function($,m){var y=e.hooks.all;y[$]=y[$]||[],y[$].push(m)},run:function($,m){var y=e.hooks.all[$];if(y&&y.length)for(var h,j=0;h=y[j++];)h(m)}},Token:s};function s($,m,y,h){this.type=$,this.content=m,this.alias=y,this.length=0|(h||"").length}function o($,m,y,h){$.lastIndex=m;var j=$.exec(y);if(j&&h&&j[1]){var E=j[1].length;j.index+=E,j[0]=j[0].slice(E)}return j}function l($,m,y,h,j,E){for(var C in y)if(y.hasOwnProperty(C)&&y[C]){var x=y[C];x=Array.isArray(x)?x:[x];for(var G=0;G<x.length;++G){if(E&&E.cause==C+","+G)return;var L=x[G],Q=L.inside,q=!!L.lookbehind,Wn=!!L.greedy,K=L.alias;if(Wn&&!L.pattern.global){var Vn=L.pattern.toString().match(/[imsuy]*$/)[0];L.pattern=RegExp(L.pattern.source,Vn+"g")}for(var Z=L.pattern||L,O=h.next,N=j;O!==m.tail&&!(E&&N>=E.reach);N+=O.value.length,O=O.next){var X=O.value;if(m.length>$.length)return;if(!(X instanceof s)){var H,nn=1;if(Wn){if(!(H=o(Z,N,$,q))||H.index>=$.length)break;var U=H.index,qn=H.index+H[0].length,B=N;for(B+=O.value.length;U>=B;)B+=(O=O.next).value.length;if(N=B-=O.value.length,O.value instanceof s)continue;for(var J=O;J!==m.tail&&(B<qn||typeof J.value=="string");J=J.next)nn++,B+=J.value.length;nn--,X=$.slice(N,B),H.index-=N}else if(!(H=o(Z,0,X,q)))continue;U=H.index;var W=H[0],sn=X.slice(0,U),Y=X.slice(U+W.length),an=N+X.length;E&&an>E.reach&&(E.reach=an);var V=O.prev;if(sn&&(V=z(m,V,sn),N+=sn.length),D(m,V,nn),O=z(m,V,new s(C,Q?e.tokenize(W,Q):W,K,W)),Y&&z(m,O,Y),nn>1){var tn={cause:C+","+G,reach:an};l($,m,y,O.prev,N,tn),E&&tn.reach>E.reach&&(E.reach=tn.reach)}}}}}}function d(){var $={value:null,prev:null,next:null},m={value:null,prev:$,next:null};$.next=m,this.head=$,this.tail=m,this.length=0}function z($,m,y){var h=m.next,j={value:y,prev:m,next:h};return m.next=j,h.prev=j,$.length++,j}function D($,m,y){for(var h=m.next,j=0;j<y&&h!==$.tail;j++)h=h.next;m.next=h,h.prev=m,$.length-=j}if(c.Prism=e,s.stringify=function $(m,y){if(typeof m=="string")return m;if(Array.isArray(m)){var h="";return m.forEach(function(G){h+=$(G,y)}),h}var j={type:m.type,content:$(m.content,y),tag:"span",classes:["token",m.type],attributes:{},language:y},E=m.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(j.classes,E):j.classes.push(E)),e.hooks.run("wrap",j);var C="";for(var x in j.attributes)C+=" "+x+'="'+(j.attributes[x]||"").replace(/"/g,"&quot;")+'"';return"<"+j.tag+' class="'+j.classes.join(" ")+'"'+C+">"+j.content+"</"+j.tag+">"},!c.document)return c.addEventListener&&(e.disableWorkerMessageHandler||c.addEventListener("message",function($){var m=JSON.parse($.data),y=m.language,h=m.code,j=m.immediateClose;c.postMessage(e.highlight(h,e.languages[y],y)),j&&c.close()},!1)),e;var R=e.util.currentScript();function F(){e.manual||e.highlightAll()}if(R&&(e.filename=R.src,R.hasAttribute("data-manual")&&(e.manual=!0)),!e.manual){var M=document.readyState;M==="loading"||M==="interactive"&&R&&R.defer?document.addEventListener("DOMContentLoaded",F):window.requestAnimationFrame?window.requestAnimationFrame(F):window.setTimeout(F,16)}return e}(St);typeof ss!="undefined"&&ss.exports&&(ss.exports=S),typeof global!="undefined"&&(global.Prism=S);S.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},S.languages.markup.tag.inside["attr-value"].inside.entity=S.languages.markup.entity,S.languages.markup.doctype.inside["internal-subset"].inside=S.languages.markup,S.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(S.languages.markup.tag,"addInlined",{value:function(c,n){var p={};p["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:S.languages[n]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};a["language-"+n]={pattern:/[\s\S]+/,inside:S.languages[n]};var e={};e[c]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:a},S.languages.insertBefore("markup","cdata",e)}}),Object.defineProperty(S.languages.markup.tag,"addAttribute",{value:function(c,n){S.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+c+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:S.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),S.languages.html=S.languages.markup,S.languages.mathml=S.languages.markup,S.languages.svg=S.languages.markup,S.languages.xml=S.languages.extend("markup",{}),S.languages.ssml=S.languages.xml,S.languages.atom=S.languages.xml,S.languages.rss=S.languages.xml;(function(c){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+n.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var p=c.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))})(S);S.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};S.languages.javascript=S.languages.extend("clike",{"class-name":[S.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),S.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,S.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:S.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:S.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:S.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:S.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:S.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),S.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:S.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),S.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),S.languages.markup&&(S.languages.markup.tag.addInlined("script","javascript"),S.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),S.languages.js=S.languages.javascript;(function(c){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",p={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:p,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};c.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:p}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},p.inside=c.languages.bash;for(var e=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=a.variable[1].inside,o=0;o<e.length;o++)s[e[o]]=c.languages.bash[e[o]];c.languages.shell=c.languages.bash})(S);S.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},S.languages.python["string-interpolation"].inside.interpolation.inside.rest=S.languages.python,S.languages.py=S.languages.python;(function(c){var n=/[*&][^\s[\]{},]+/,p=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+p.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+p.source+")?)",e="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"}),s=`"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;function o(l,d){d=(d||"").replace(/m/g,"")+"m";var z=`([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|\\]|\\}|(?:[\r
]\\s*)?#))`.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return l});return RegExp(z,d)}c.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?
|\r)[ 	]+)\\S[^\r
]*(?:\\2[^\r
]+)*)`.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\r
?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+e+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:o("false|true","i"),lookbehind:!0,alias:"important"},null:{pattern:o("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:o(s),lookbehind:!0,greedy:!0},number:{pattern:o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:p,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},c.languages.yml=c.languages.yaml})(S);(function(){if(typeof S!="undefined"&&typeof document!="undefined"){var c="line-numbers",n=/\n(?!$)/g,p=S.plugins.lineNumbers={getLine:function(s,o){if(s.tagName==="PRE"&&s.classList.contains(c)){var l=s.querySelector(".line-numbers-rows");if(l){var d=parseInt(s.getAttribute("data-start"),10)||1,z=d+(l.children.length-1);o<d&&(o=d),o>z&&(o=z);var D=o-d;return l.children[D]}}},resize:function(s){e([s])},assumeViewportIndependence:!0},a=void 0;window.addEventListener("resize",function(){p.assumeViewportIndependence&&a===window.innerWidth||(a=window.innerWidth,e(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))}),S.hooks.add("complete",function(s){if(s.code){var o=s.element,l=o.parentNode;if(l&&/pre/i.test(l.nodeName)&&!o.querySelector(".line-numbers-rows")&&S.util.isActive(o,c)){o.classList.remove(c),l.classList.add(c);var d,z=s.code.match(n),D=z?z.length+1:1,R=new Array(D+1).join("<span></span>");(d=document.createElement("span")).setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=R,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),s.element.appendChild(d),e([l]),S.hooks.run("line-numbers",s)}}}),S.hooks.add("line-numbers",function(s){s.plugins=s.plugins||{},s.plugins.lineNumbers=!0})}function e(s){if((s=s.filter(function(l){var d,z=(d=l,d?window.getComputedStyle?getComputedStyle(d):d.currentStyle||null:null)["white-space"];return z==="pre-wrap"||z==="pre-line"})).length!=0){var o=s.map(function(l){var d=l.querySelector("code"),z=l.querySelector(".line-numbers-rows");if(d&&z){var D=l.querySelector(".line-numbers-sizer"),R=d.textContent.split(n);D||((D=document.createElement("span")).className="line-numbers-sizer",d.appendChild(D)),D.innerHTML="0",D.style.display="block";var F=D.getBoundingClientRect().height;return D.innerHTML="",{element:l,lines:R,lineHeights:[],oneLinerHeight:F,sizer:D}}}).filter(Boolean);o.forEach(function(l){var d=l.sizer,z=l.lines,D=l.lineHeights,R=l.oneLinerHeight;D[z.length-1]=void 0,z.forEach(function(F,M){if(F&&F.length>1){var $=d.appendChild(document.createElement("span"));$.style.display="block",$.textContent=F}else D[M]=R})}),o.forEach(function(l){for(var d=l.sizer,z=l.lineHeights,D=0,R=0;R<z.length;R++)z[R]===void 0&&(z[R]=d.children[D++].getBoundingClientRect().height)}),o.forEach(function(l){var d=l.sizer,z=l.element.querySelector(".line-numbers-rows");d.style.display="none",d.innerHTML="",l.lineHeights.forEach(function(D,R){z.children[R].style.height=D+"px"})})}}})();function At(c){let n;return{c(){n=k("nav"),n.innerHTML=`<a href="#spotkanie-1" class="svelte-f6k7du">Spotkanie 1</a> 
    <a href="#spotkanie-2" class="svelte-f6k7du">Spotkanie 2</a> 
    <a href="#spotkanie-3" class="svelte-f6k7du">Spotkanie 3</a> 
    <a href="#spotkanie-4" class="svelte-f6k7du">Spotkanie 4</a> 
    <a href="#spotkanie-5" class="svelte-f6k7du">Spotkanie 5</a> 
    <a href="#spotkanie-6" class="svelte-f6k7du">Spotkanie 6</a> 
    <hr class="svelte-f6k7du"/> 
    <a href="#program-1" class="svelte-f6k7du">Narysuj \u015Bcian\u0119</a> 
    <a href="#program-2" class="svelte-f6k7du">Modyfikuj parametry</a> 
    <a href="#program-3" class="svelte-f6k7du">Zbierz dane</a> 
    <a href="#program-4" class="svelte-f6k7du">Wstaw rodzin\u0119</a> 
    <a href="#program-6" class="svelte-f6k7du">Aktualizuj osie</a>`,I(n,"class","svelte-f6k7du")},m(p,a){u(p,n,a)},p:T,i:T,o:T,d(p){p&&i(n)}}}class Et extends os{constructor(n){super(),es(this,n,null,At,ts,{})}}function Ct(c){let n,p,a;const e=c[2].default,s=ct(e,c,c[1],null);return{c(){n=k("section"),p=k("div"),s&&s.c(),I(p,"class","center svelte-9muisq"),I(n,"id",c[0]),I(n,"class","line-numbers svelte-9muisq")},m(o,l){u(o,n,l),Vs(n,p),s&&s.m(p,null),a=!0},p(o,[l]){s&&s.p&&(!a||l&2)&&rt(s,e,o,o[1],a?ut(e,o[1],l,null):kt(o[1]),null),(!a||l&1)&&I(n,"id",o[0])},i(o){a||(w(s,o),a=!0)},o(o){g(s,o),a=!1},d(o){o&&i(n),s&&s.d(o)}}}function It(c,n,p){let{$$slots:a={},$$scope:e}=n,{id:s}=n;return c.$$set=o=>{"id"in o&&p(0,s=o.id),"$$scope"in o&&p(1,e=o.$$scope)},[s,e,a]}class A extends os{constructor(n){super(),es(this,n,It,Ct,ts,{id:0})}}const Rt=c=>({}),ot=c=>({class:"code svelte-1ed3sa5"});function xt(c){let n,p,a,e;const s=c[1].default,o=ct(s,c,c[0],ot);return{c(){n=k("div"),p=k("div"),p.innerHTML=`<div class="button red svelte-1ed3sa5"></div> 
        <div class="button yellow svelte-1ed3sa5"></div> 
        <div class="button green svelte-1ed3sa5"></div>`,a=f(),o&&o.c(),I(p,"class","menu svelte-1ed3sa5"),I(n,"class","codeblock line-numbers svelte-1ed3sa5")},m(l,d){u(l,n,d),Vs(n,p),Vs(n,a),o&&o.m(n,null),e=!0},p(l,[d]){o&&o.p&&(!e||d&1)&&rt(o,s,l,l[0],e?ut(s,l[0],d,Rt):kt(l[0]),ot)},i(l){e||(w(o,l),e=!0)},o(l){g(o,l),e=!1},d(l){l&&i(n),o&&o.d(l)}}}function Dt(c,n,p){let{$$slots:a={},$$scope:e}=n;return c.$$set=s=>{"$$scope"in s&&p(0,e=s.$$scope)},[e,a]}class P extends os{constructor(n){super(),es(this,n,Dt,xt,ts,{})}}function Pt(c){let n,p,a,e,s;return{c(){n=k("h1"),n.textContent="Wprowadzenie do API Revita",p=f(),a=k("h2"),a.innerHTML='<a href="https://dawid.huczynski.pl/revit-api" rel="nofollow">dawid.huczynski.pl/revit-api</a>',e=f(),s=k("h3"),s.innerHTML='<a href="dawid.huczynski@gmail.com">dawid.huczynski@gmail.com</a>'},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function Lt(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 1."},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function Mt(c){let n,p,a;return{c(){n=k("h2"),n.textContent="Narz\u0119dzia i ustawianie \u015Brodowiska",p=f(),a=k("ul"),a.innerHTML=`<li><strong>Pyrevit</strong> - addon do tworzenia w\u0142asnych dodatk\xF3w oraz ma\u0142y kombajn z narz\u0119dziami: <br/> 
<a href="https://github.com/eirannejad/pyRevit/releases" rel="nofollow">https://github.com/eirannejad/pyRevit/releases</a>  <br/></li> 
<li><strong>RevitPythonShell</strong> - interaktywna konsola Pythona w Revicie: <br/> 
<a href="https://github.com/architecture-building-systems/revitpythonshell/releases" rel="nofollow">https://github.com/architecture-building-systems/revitpythonshell/releases</a></li> 
<li><strong>stubs</strong> - narz\u0119dzie do autouzupe\u0142niania Revitowych komend w VS Code: <br/> 
<a href="https://www.macro4bim.com/post/create-python-stubs" rel="nofollow">https://www.macro4bim.com/post/create-python-stubs</a>  <br/> 
<a href="https://github.com/gtalarico/ironpython-stubs" rel="nofollow">https://github.com/gtalarico/ironpython-stubs</a>  <br/></li> 
<li><strong>RevitLookup</strong> - narz\u0119dzie do podgl\u0105dania parametr\xF3w obiekt\xF3w Revicie: <br/> 
<a href="https://github.com/jeremytammik/RevitLookup" rel="nofollow">https://github.com/jeremytammik/RevitLookup</a></li> 
<li><strong>git</strong> - program do wersjonowania kodu i pracy w zespole, kombajn: <br/> 
<a href="https://git-scm.com/" rel="nofollow">https://git-scm.com/</a></li>`},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function Ft(c){let n,p,a;return{c(){n=k("h2"),n.textContent="Miejsca do szukania wiedzy:",p=f(),a=k("ul"),a.innerHTML=`<li><a href="https://www.revitapidocs.com/" rel="nofollow">https://www.revitapidocs.com/</a></li> 
<li><a href="https://apidocs.co/apps/revit/2021/" rel="nofollow">https://apidocs.co/apps/revit/2021/</a></li> 
<li><a href="https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html" rel="nofollow">https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html</a></li> 
<li><a href="https://thebuildingcoder.typepad.com/" rel="nofollow">https://thebuildingcoder.typepad.com/</a></li> 
<li><a href="http://wiki.theprovingground.org/revit-api" rel="nofollow">http://wiki.theprovingground.org/revit-api</a></li> 
<li><a href="https://dynamopythonprimer.gitbook.io/" rel="nofollow">https://dynamopythonprimer.gitbook.io/</a></li> 
<li><a href="https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists" rel="nofollow">https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists</a></li> 
<li><a href="https://github.com/gtalarico/python-revit-resources" rel="nofollow">https://github.com/gtalarico/python-revit-resources</a></li> 
<li><a href="https://github.com/architecture-building-systems/revitpythonshell" rel="nofollow">https://github.com/architecture-building-systems/revitpythonshell</a></li> 
<li><a href="https://github.com/Amoursol/dynamoPython" rel="nofollow">https://github.com/Amoursol/dynamoPython</a></li> 
<li><a href="https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/" rel="nofollow">https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/</a></li>`},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function Gt(c){let n,p=`<code class="language-python"><span class="token comment">#! python3</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">import</span> xyz
<span class="token keyword">import</span> abc
<span class="token keyword">from</span> foo <span class="token keyword">import</span> bar

CONSTANT_X <span class="token operator">=</span> <span class="token number">1</span>
CONSTANT_Y <span class="token operator">=</span> <span class="token boolean">False</span>
CONSTANT_Z <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token keyword">def</span> <span class="token function">something</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> something<span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Ot(c){let n,p,a,e,s,o;return s=new P({props:{$$slots:{default:[Gt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Spos\xF3b czytania skrypt\xF3w",p=f(),a=k("ul"),a.innerHTML=`<li><code>#! python3</code> - definiuje jakiego j\u0119zyka u\u017Cywa skrypt</li> 
<li><code># -*- coding: utf-8 -*-</code> - definuje zakres znak\xF3w unicode UTF-8 (tu te\u017C s\u0105 polskie znaki)</li>`,e=f(),v(s.$$.fragment)},m(l,d){u(l,n,d),u(l,p,d),u(l,a,d),u(l,e,d),b(s,l,d),o=!0},p(l,d){const z={};d&1&&(z.$$scope={dirty:d,ctx:l}),s.$set(z)},i(l){o||(w(s.$$.fragment,l),o=!0)},o(l){g(s.$$.fragment,l),o=!1},d(l){l&&i(n),l&&i(p),l&&i(a),l&&i(e),_(s,l)}}}function Nt(c){let n,p=`<code class="language-sh">pip install --user pipenv
pipenv install requests
pipenv run python main.py
pipenv shell

</code>`;return{c(){n=k("pre"),I(n,"class","language-sh")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Ht(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Nt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="pipenv",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Bt(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> sys
sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">'sciezka/do/modulow'</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Ut(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Bt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="U\u017Cywanie bibliotek pythona",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Wt(c){let n,p,a;return{c(){n=k("h2"),n.textContent="API a wersje pythona",p=f(),a=k("ul"),a.innerHTML=`<li>API Dynamo - zale\u017Cnie od wersji Dynamo IronPython 2.7 / python 3.8</li> 
<li>API RPSHELL (Python) - IronPython 2.7 / python 3.8</li> 
<li>API Macros - IronPython 2.7</li>`},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function Vt(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="J\u0119zyk statyczny i dynamiczny",p=f(),a=k("p"),a.textContent="Types - typy (int, float, str, Object, Enum, Element, Id):",e=f(),s=k("ul"),s.innerHTML=`<li>static types</li> 
<li>dynamic types</li>`},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function qt(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr <span class="token comment"># .NET's Common Language Runtime.</span>

<span class="token comment"># Dodawanie modulow.</span>
<span class="token keyword">import</span> sys
sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">'C:Program Files (x86)IronPython 2.7Lib'</span><span class="token punctuation">)</span>

<span class="token comment"># Dodawanie standarowych typow</span>
<span class="token keyword">import</span> System
<span class="token keyword">from</span> System <span class="token keyword">import</span> Array
<span class="token keyword">from</span> System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment"># Dodawanie standarowych typow Dynamo</span>
clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">'ProtoGeometry'</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>DesignScript<span class="token punctuation">.</span>Geometry <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment"># Dodawanie standardowych typow Dynamo-Revit</span>
clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitNodes"</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> Revit
clr<span class="token punctuation">.</span>ImportExtensions<span class="token punctuation">(</span>Revit<span class="token punctuation">.</span>Elements<span class="token punctuation">)</span>
clr<span class="token punctuation">.</span>ImportExtensions<span class="token punctuation">(</span>Revit<span class="token punctuation">.</span>GeometryConversion<span class="token punctuation">)</span>

<span class="token comment"># Dodanie TransactionManagera i DocumentManagera</span>
clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitServices"</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> RevitServices
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Persistence <span class="token keyword">import</span> DocumentManager 
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Transactions <span class="token keyword">import</span> TransactionManager 

<span class="token comment"># Dodawanie API Revita</span>
clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPIUI"</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> Autodesk 
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>UI <span class="token keyword">import</span> <span class="token operator">*</span>

doc <span class="token operator">=</span> DocumentManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>CurrentDBDocument
uiapp <span class="token operator">=</span> DocumentManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>CurrentUIApplication 
app <span class="token operator">=</span> uiapp<span class="token punctuation">.</span>Application 
uidoc <span class="token operator">=</span> uiapp<span class="token punctuation">.</span>ActiveUIDocument

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Zt(c){let n,p,a,e,s,o;return s=new P({props:{$$slots:{default:[qt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Podstawy API",p=f(),a=k("p"),a.innerHTML=`Kod do skopiowania do skrypt\xF3w Dynamo. NIE KOPIUJCIE TEGO, serio! :D<br/>
s\u0142owo klucz: \u201CMaintnance\u201D`,e=f(),v(s.$$.fragment)},m(l,d){u(l,n,d),u(l,p,d),u(l,a,d),u(l,e,d),b(s,l,d),o=!0},p(l,d){const z={};d&1&&(z.$$scope={dirty:d,ctx:l}),s.$set(z)},i(l){o||(w(s.$$.fragment,l),o=!0)},o(l){g(s.$$.fragment,l),o=!1},d(l){l&&i(n),l&&i(p),l&&i(a),l&&i(e),_(s,l)}}}function Xt(c){let n,p=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">feet_to_meter</span><span class="token punctuation">(</span>feet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> feet <span class="token operator">*</span> <span class="token number">0.3048</span>


<span class="token keyword">def</span> <span class="token function">meter_to_feet</span><span class="token punctuation">(</span>meter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> meter <span class="token operator">/</span> <span class="token number">0.3048</span>


<span class="token keyword">def</span> <span class="token function">sqr_feet_to_meter</span><span class="token punctuation">(</span>sqrfeet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sqrfeet <span class="token operator">*</span> <span class="token number">0.09290304</span>


<span class="token keyword">def</span> <span class="token function">sqr_meter_to_feet</span><span class="token punctuation">(</span>sqrmeter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sqrmeter <span class="token operator">/</span> <span class="token number">0.09290304</span>


</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Yt(c){let n,p,a,e,s,o;return s=new P({props:{$$slots:{default:[Xt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Co ma skarpetka wsp\xF3lnego z Revitem?",p=f(),a=k("p"),a.textContent="jednostki",e=f(),v(s.$$.fragment)},m(l,d){u(l,n,d),u(l,p,d),u(l,a,d),u(l,e,d),b(s,l,d),o=!0},p(l,d){const z={};d&1&&(z.$$scope={dirty:d,ctx:l}),s.$set(z)},i(l){o||(w(s.$$.fragment,l),o=!0)},o(l){g(s.$$.fragment,l),o=!1},d(l){l&&i(n),l&&i(p),l&&i(a),l&&i(e),_(s,l)}}}function Kt(c){let n,p=`<code class="language-python">detail_line <span class="token operator">=</span> UnwrapElement<span class="token punctuation">(</span>IN<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
decimal_feet_length <span class="token operator">=</span> detail_line<span class="token punctuation">.</span>GeometryCurve<span class="token punctuation">.</span>Length
metric_length <span class="token operator">=</span> UnitUtils<span class="token punctuation">.</span>Convert<span class="token punctuation">(</span>
    decimal_feet_length<span class="token punctuation">,</span> 
    DisplayUnitType<span class="token punctuation">.</span>DUT_DECIMAL_FEET<span class="token punctuation">,</span> 
    DisplayUnitType<span class="token punctuation">.</span>DUT_MILLIMETERS<span class="token punctuation">)</span>
OUT <span class="token operator">=</span> metric_length

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Jt(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Kt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Inny spos\xF3b na jednostki",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Qt(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> os
<span class="token keyword">import</span> types

<span class="token keyword">def</span> <span class="token function">walker</span><span class="token punctuation">(</span>lib<span class="token punctuation">,</span> name<span class="token punctuation">,</span> relations<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> limit<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    relations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> lib<span class="token punctuation">.</span>__doc__<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token keyword">if</span> relations <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">else</span> relations
    IGNORE <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">,</span> <span class="token builtin">complex</span><span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">,</span> <span class="token builtin">tuple</span><span class="token punctuation">,</span> <span class="token builtin">range</span><span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">bytes</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> limit <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> relations
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        limit <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">dir</span><span class="token punctuation">(</span>lib<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> x<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">"_"</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                a <span class="token operator">=</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>lib<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token keyword">not</span> <span class="token keyword">in</span> IGNORE <span class="token keyword">and</span> name <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">"OSError"</span><span class="token punctuation">,</span> <span class="token string">"Error"</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    el <span class="token operator">=</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span></span><span class="token string">.</span><span class="token interpolation"><span class="token punctuation">&#123;</span>x<span class="token punctuation">&#125;</span></span><span class="token string">"</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>__doc__<span class="token punctuation">]</span>
                    <span class="token keyword">if</span> el <span class="token keyword">not</span> <span class="token keyword">in</span> relations<span class="token punctuation">:</span>
                        relations<span class="token punctuation">.</span>append<span class="token punctuation">(</span>el<span class="token punctuation">)</span>
                        relations <span class="token operator">=</span> walker<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span></span><span class="token string">.</span><span class="token interpolation"><span class="token punctuation">&#123;</span>x<span class="token punctuation">&#125;</span></span><span class="token string">"</span></span><span class="token punctuation">,</span> relations<span class="token punctuation">,</span> limit<span class="token operator">=</span>limit<span class="token punctuation">)</span>
            <span class="token keyword">except</span><span class="token punctuation">:</span>
                <span class="token keyword">pass</span>
    <span class="token keyword">return</span> relations

<span class="token comment">##############################################################</span>
<span class="token keyword">import</span> plotly<span class="token punctuation">.</span>graph_objects <span class="token keyword">as</span> go
<span class="token keyword">import</span> plotly

relations <span class="token operator">=</span> walker<span class="token punctuation">(</span>plotly<span class="token punctuation">,</span> <span class="token string">"plotly"</span><span class="token punctuation">)</span>
parents<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> helps <span class="token operator">=</span> <span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token operator">*</span>relations<span class="token punctuation">)</span>

fig <span class="token operator">=</span> go<span class="token punctuation">.</span>Figure<span class="token punctuation">(</span>
    go<span class="token punctuation">.</span>Treemap<span class="token punctuation">(</span>
        labels<span class="token operator">=</span>labels<span class="token punctuation">,</span>
        parents<span class="token operator">=</span>parents<span class="token punctuation">,</span>
        <span class="token comment"># values = helps,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

fig<span class="token punctuation">.</span>update_layout<span class="token punctuation">(</span>margin<span class="token operator">=</span><span class="token builtin">dict</span><span class="token punctuation">(</span>t<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">,</span> l<span class="token operator">=</span><span class="token number">25</span><span class="token punctuation">,</span> r<span class="token operator">=</span><span class="token number">25</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
plotly<span class="token punctuation">.</span>offline<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>fig<span class="token punctuation">,</span> filename<span class="token operator">=</span><span class="token string">"./index.html"</span><span class="token punctuation">)</span>
fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function ne(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Qt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Struktura API i przeszukiwanie",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function se(c){let n,p,a,e,s;return{c(){n=k("h3"),n.innerHTML='<a href="./revit-struktura.html">Autodesk.Revit</a>',p=f(),a=k("p"),a.textContent="U\u017Cyteczne komendy do przegl\u0105dania:",e=f(),s=k("ul"),s.innerHTML=`<li>dir <code>for x in dir(element):print(x)</code></li> 
<li>help(element)</li>`},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function ae(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Podstawowe klasy",p=f(),a=k("h2"),a.textContent="Element.*",e=f(),s=k("div"),s.innerHTML=`<p>ArePhasesModifiable<br/>
AssemblyInstanceId<br/> 
<strong>BoundingBox</strong><br/>
CanBeHidden<br/>
CanBeLocked<br/>
CanDeleteSubelement<br/>
CanHaveAnalyticalModel<br/>
CanHaveTypeAssigned<br/> 
<strong>Category</strong><br/> 
<strong>ChangeTypeId</strong><br/>
CreatedPhaseId<br/>
DeleteEntity<br/>
DeleteSubelement<br/>
DeleteSubelements<br/>
DemolishedPhaseId<br/>
DesignOption<br/>
Dispose<br/>
Document<br/>
Equals<br/> 
<strong>Geometry</strong><br/>
GetAnalyticalModel<br/>
GetAnalyticalModelId<br/>
GetChangeTypeAny<br/>
GetChangeTypeElementAddition<br/>
GetChangeTypeElementDeletion<br/>
GetChangeTypeGeometry<br/>
GetChangeTypeParameter<br/></p> 
<p>GetDependentElements<br/>
GetEntity<br/>
GetEntitySchemaGuids<br/>
GetExternalFileReference<br/>
GetExternalResourceReference<br/>
GetExternalResourceReferences<br/>
GetGeneratingElementIds<br/>
GetGeometryObjectFromReference<br/>
GetHashCode<br/>
GetMaterialArea<br/>
GetMaterialIds<br/>
GetMaterialVolume<br/>
GetMonitoredLinkElementIds<br/>
GetMonitoredLocalElementIds<br/>
GetOrderedParameters<br/>
GetParameterFormatOptions<br/>
GetParameters<br/>
GetPhaseStatus<br/>
GetSubelements<br/>
GetType<br/> 
<strong>GetTypeId</strong><br/>
GetValidTypes<br/>
GroupId<br/>
HasPhases<br/> 
<strong>Id</strong><br/>
IsExternalFileReference<br/>
IsHidden<br/></p> 
<p>IsMonitoringLinkElement<br/>
IsMonitoringLocalElement<br/>
IsPhaseCreatedValid<br/>
IsPhaseDemolishedValid<br/>
IsTransient<br/>
IsValidObject<br/>
IsValidType<br/> 
<strong>LevelId</strong><br/> 
<strong>Location</strong><br/> 
<strong>LookupParameter</strong><br/>
MemberwiseClone<br/> 
<strong>Name</strong><br/>
OwnerViewId<br/>
Parameter<br/>
Parameters<br/> 
<strong>ParametersMap</strong><br/>
Pinned<br/>
ReferenceEquals<br/>
RefersToExternalResourceReference<br/>
RefersToExternalResourceReferences<br/>
ReleaseUnmanagedResources<br/>
SetEntity<br/>
ToString<br/>
UniqueId<br/>
VersionGuid<br/>
ViewSpecific<br/>
WorksetId<br/>
getBoundingBox<br/>
setElementType<br/></p>`,I(s,"class","trzy-kolumny")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function te(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Podstawowe klasy",p=f(),a=k("h2"),a.textContent="Wall.*",e=f(),s=k("div"),s.innerHTML=`<p>ArePhasesModifiable<br/>
AssemblyInstanceId<br/> 
<strong>BoundingBox</strong><br/>
CanBeHidden<br/>
CanBeLocked<br/>
CanDeleteSubelement<br/>
CanHaveAnalyticalModel<br/>
CanHaveTypeAssigned<br/> 
<strong>Category</strong><br/> 
<strong>ChangeTypeId</strong><br/> 
<strong>Create</strong><br/>
CreatedPhaseId<br/>
CurtainGrid<br/>
DeleteEntity<br/>
DeleteSubelement<br/>
DeleteSubelements<br/>
DemolishedPhaseId<br/>
DesignOption<br/>
Dispose<br/>
Document<br/>
Equals<br/>
FindInserts<br/>
Flip<br/>
Flipped<br/> 
<strong>Geometry</strong><br/>
GetAnalyticalModel<br/>
GetAnalyticalModelId<br/>
GetChangeTypeAny<br/>
GetChangeTypeElementAddition<br/>
GetChangeTypeElementDeletion<br/>
GetChangeTypeGeometry<br/>
GetChangeTypeParameter<br/></p> 
<p><strong>GetDependentElements</strong><br/>
GetEntity<br/>
GetEntitySchemaGuids<br/>
GetExternalFileReference<br/>
GetExternalResourceReference<br/>
GetExternalResourceReferences<br/> 
<strong>GetGeneratingElementIds</strong><br/>
GetGeometryObjectFromReference<br/>
GetHashCode<br/>
GetMaterialArea<br/>
GetMaterialIds<br/>
GetMaterialVolume<br/>
GetMonitoredLinkElementIds<br/>
GetMonitoredLocalElementIds<br/>
GetOrderedParameters<br/>
GetParameterFormatOptions<br/>
GetParameters<br/>
GetPhaseStatus<br/>
GetStackedWallMemberIds<br/>
GetSubelements<br/>
GetType<br/> 
<strong>GetTypeId</strong><br/>
GetValidTypes<br/>
GroupId<br/>
HasPhases<br/> 
<strong>Id</strong><br/>
IsExternalFileReference<br/>
IsHidden<br/>
IsMonitoringLinkElement<br/>
IsMonitoringLocalElement<br/>
IsPhaseCreatedValid<br/>
IsPhaseDemolishedValid<br/></p> 
<p>IsStackedWall<br/>
IsStackedWallMember<br/>
IsTransient<br/>
IsValidObject<br/>
IsValidType<br/> 
<strong>LevelId</strong><br/> 
<strong>Location</strong><br/> 
<strong>LookupParameter</strong><br/>
MemberwiseClone<br/> 
<strong>Name</strong><br/> 
<strong>Orientation</strong><br/>
OwnerViewId<br/>
Parameter<br/>
Parameters<br/> 
<strong>ParametersMap</strong><br/>
Pinned<br/>
ReferenceEquals<br/>
RefersToExternalResourceReference<br/>
RefersToExternalResourceReferences<br/>
ReleaseUnmanagedResources<br/> 
<strong>SetEntity</strong><br/>
StackedWallOwnerId<br/>
StructuralUsage<br/>
ToString<br/>
UniqueId<br/>
VersionGuid<br/>
ViewSpecific<br/> 
<strong>WallType</strong><br/> 
<strong>Width</strong><br/>
WorksetId<br/>
getBoundingBox<br/>
setElementType<br/></p>`,I(s,"class","trzy-kolumny")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function ee(c){let n,p,a;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("ul"),a.innerHTML=`<li>mo\u017Cliwo\u015Bci</li> 
<li>tworzenie interfejsu do skryptu</li> 
<li>ustawianie addin\xF3w pod firm\u0119 (pipeline developera)</li>`},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function oe(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("p"),a.innerHTML='<img src="./pyrevit-tab.png" alt="pyrevit-tab"/>',e=f(),s=k("ol"),s.innerHTML=`<li>Tab coloring - koloruje wam zak\u0142adki wg otwartych projekt\xF3w i rodzin. Minify revit UI - chowa wam g\xF3rne zak\u0142adki kt\xF3rych nie u\u017Cywacie np mi zostawia tylko Architecture, Annotate i Modify ( ustawia si\u0119 to klikaj\u0105c na ikonk\u0119 s SHIFTEM)</li> 
<li>Sync Views - synchronizuje widoki np jak zmieniasz cz\u0119sto rzuty (np. sprawdzaj\u0105c szachty) to maj\u0105c w\u0142\u0105czon\u0105 t\u0105 opcj\u0119 zawsze widok l\u0105duje w tym samym miejscu co na poprzednim rzucie (resetuje si\u0119 np w momencie wej\u015Bcia na widok 3d)</li> 
<li>Zaawansowane zaznaczanie - dzia\u0142a jak Pami\u0119\u0107 w kalkulatorze: zaznaczasz par\u0119 obiekt\xF3w dodajesz do pami\u0119ci, zaznaczasz inne dodajesz do pami\u0119ci. potem jak klikniesz MRead to zaznaczone zostan\u0105 wszystkie poprzednio zaznaczone elementy</li> 
<li>Make Pattern - szybko mo\u017Cesz tworzy\u0107 szrafur\u0119 np trawy, kostki, wz\xF3r p\u0142ytek itp.</li> 
<li>Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzaj\u0105ce si\u0119 legendy a potem kopiujesz je na wszystkie inne rysunki i wklejaj\u0105 si\u0119 w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje du\u017Co rysunk\xF3w wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunk\xF3w kt\xF3re przeklejam do tego narz\u0119dzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.</li> 
<li>Duzo u\u0142atwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plik\xF3w.</li> 
<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li> 
<li>Team - wa\u017Cna rzecz do sprawdzania: Who did that? kto stworzy\u0142 elementi kto ostatni go edytowa\u0142.</li> 
<li>Czyszczenie rzeczy kt\xF3re czasami jest zbyt dobre, ale przynajmniej potrafi wyczy\u015Bci\u0107 elementy kt\xF3rych nie czy\u015Bci purge.</li>`},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function pe(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("p"),a.innerHTML='<img src="./pyrevit-sheets.png" alt="pyrevit-sheets"/>',e=f(),s=k("ol"),s.innerHTML="<li>Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzaj\u0105ce si\u0119 legendy a potem kopiujesz je na wszystkie inne rysunki i wklejaj\u0105 si\u0119 w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje du\u017Co rysunk\xF3w wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunk\xF3w kt\xF3re przeklejam do tego narz\u0119dzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.</li>",I(s,"start","5")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function le(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("p"),a.innerHTML='<img src="./pyrevit-views.png" alt="pyrevit-views"/>',e=f(),s=k("ol"),s.innerHTML="<li>Duzo u\u0142atwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plik\xF3w.</li>",I(s,"start","6")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function ce(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("p"),a.innerHTML='<img src="./pyrevit-checks1.png" alt="pyrevit-checks1"/>',e=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",I(s,"start","7")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function ie(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("p"),a.innerHTML='<img src="./pyrevit-checks2.png" alt="pyrevit-checks2"/>',e=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",I(s,"start","7")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function ue(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("p"),a.innerHTML='<img src="./pyrevit-checks3.png" alt="pyrevit-checks3"/>',e=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",I(s,"start","7")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function re(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("p"),a.innerHTML='<img src="./pyrevit-checks4.png" alt="pyrevit-checks4"/>',e=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",I(s,"start","7")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function ke(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),a=k("p"),a.innerHTML='<img src="./pyrevit-who.png" alt="pyrevit-who"/>',e=f(),s=k("ol"),s.innerHTML="<li>Team - wa\u017Cna rzecz do sprawdzania: Who did that? kto stworzy\u0142 elementi kto ostatni go edytowa\u0142.</li>",I(s,"start","8")},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function fe(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 2."},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function me(c){let n,p=`<code class="language-python"><span class="token keyword">class</span> <span class="token class-name">Osoba</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> wiek<span class="token punctuation">,</span> wysokosc<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>wiek <span class="token operator">=</span> wiek
        self<span class="token punctuation">.</span>wysoksc <span class="token operator">=</span> wysokosc
        self<span class="token punctuation">.</span>smierc <span class="token operator">=</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>martwy <span class="token operator">=</span> <span class="token boolean">False</span>

    <span class="token keyword">def</span> <span class="token function">umarl</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>smierc <span class="token operator">=</span> self<span class="token punctuation">.</span>wiek
        self<span class="token punctuation">.</span>martwy <span class="token operator">=</span> <span class="token boolean">True</span>


<span class="token keyword">class</span> <span class="token class-name">Kobieta</span><span class="token punctuation">(</span>Osoba<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> wiek<span class="token punctuation">,</span> wysokosc<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>wiek<span class="token punctuation">,</span> wysokosc<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>dzieci <span class="token operator">=</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>ulubione_ksiazki <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>


<span class="token keyword">class</span> <span class="token class-name">Pilotka</span><span class="token punctuation">(</span>Kobieta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> wiek<span class="token punctuation">,</span> wysokosc<span class="token punctuation">,</span> doswiadczenie<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>wiek<span class="token punctuation">,</span> wysokosc<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>doswiadczenie <span class="token operator">=</span> doswiadczenie
        self<span class="token punctuation">.</span>w_powietrzu <span class="token operator">=</span> <span class="token boolean">False</span>
    
    <span class="token keyword">def</span> <span class="token function">startuje</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>w_powietrzu <span class="token operator">=</span> <span class="token boolean">True</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function de(c){let n,p,a,e,s,o;return s=new P({props:{$$slots:{default:[me]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Klasy",p=f(),a=k("p"),a.textContent="Czym s\u0105 klasy i ich dziedziczenie",e=f(),v(s.$$.fragment)},m(l,d){u(l,n,d),u(l,p,d),u(l,a,d),u(l,e,d),b(s,l,d),o=!0},p(l,d){const z={};d&1&&(z.$$scope={dirty:d,ctx:l}),s.$set(z)},i(l){o||(w(s.$$.fragment,l),o=!0)},o(l){g(s.$$.fragment,l),o=!1},d(l){l&&i(n),l&&i(p),l&&i(a),l&&i(e),_(s,l)}}}function $e(c){let n,p,a;return{c(){n=k("h2"),n.textContent="Pomocne biblioteki Pythona",p=f(),a=k("ul"),a.innerHTML=`<li>math</li> 
<li>itertools</li> 
<li>collections.namedtuple</li> 
<li>pandas</li> 
<li>numpy</li> 
<li>bokeh / plotly</li> 
<li>pillow</li> 
<li>k3d</li>`},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function ye(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB<span class="token punctuation">.</span>Level

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitNodes"</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> Revit
clr<span class="token punctuation">.</span>ImportExtensions<span class="token punctuation">(</span>Revit<span class="token punctuation">.</span>Elements<span class="token punctuation">)</span>
clr<span class="token punctuation">.</span>ImportExtensions<span class="token punctuation">(</span>Revit<span class="token punctuation">.</span>GeometryConversion<span class="token punctuation">)</span>
Revit<span class="token punctuation">.</span>Elements<span class="token punctuation">.</span>Level

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function we(c){let n,p,a,e,s,o;return s=new P({props:{$$slots:{default:[ye]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Dynamo",p=f(),a=k("ul"),a.innerHTML=`<li>UnwrapElement</li> 
<li>Transaction a TransactionGroup a TransactionManager</li> 
<li>uidoc.Selection</li> 
<li>pr\xF3ba wyja\u015Bnienia r\xF3\u017Cnic (importowane biblioteki).</li>`,e=f(),v(s.$$.fragment)},m(l,d){u(l,n,d),u(l,p,d),u(l,a,d),u(l,e,d),b(s,l,d),o=!0},p(l,d){const z={};d&1&&(z.$$scope={dirty:d,ctx:l}),s.$set(z)},i(l){o||(w(s.$$.fragment,l),o=!0)},o(l){g(s.$$.fragment,l),o=!1},d(l){l&&i(n),l&&i(p),l&&i(a),l&&i(e),_(s,l)}}}function ge(c){let n,p=`<code class="language-python">input_list_of_numbers <span class="token operator">=</span> IN<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">#Here we take an input</span>
output_list_of_numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">#We create an empty list to output</span>

<span class="token keyword">for</span> number <span class="token keyword">in</span> input_list_of_numbers<span class="token punctuation">:</span> <span class="token comment">#Looping through input</span>
    new_number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">#Adding 1 to each number</span>
    output_list_of_numbers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>new_number<span class="token punctuation">)</span>

OUT <span class="token operator">=</span> output_list_of_numbers <span class="token comment">#Here we output the new '+1' list</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function be(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[ge]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Dynamo IN-OUT",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function _e(c){let n,p,a;return{c(){n=k("h2"),n.textContent="Revit Python Shell",p=f(),a=k("p"),a.textContent="Interaktywna zabawa"},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function ve(c){let n,p=`<code class="language-python">collector <span class="token operator">=</span> FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>

<span class="token comment"># Kategoria</span>
meble_collector <span class="token operator">=</span> collector<span class="token punctuation">.</span>OfCategory<span class="token punctuation">(</span>BuiltInCategory<span class="token punctuation">.</span>OST_Furniture<span class="token punctuation">)</span>

<span class="token comment"># Klasa</span>
sciany_collector <span class="token operator">=</span> collector<span class="token punctuation">.</span>OfClass<span class="token punctuation">(</span>Wall<span class="token punctuation">)</span>

<span class="token comment"># typ czy rzeczywisty obiekt</span>
typy_scian <span class="token operator">=</span> sciany_collector<span class="token punctuation">.</span>WhereElementIsNotElementType<span class="token punctuation">(</span><span class="token punctuation">)</span>
sciany_iterator <span class="token operator">=</span> sciany_collector<span class="token punctuation">.</span>WhereElementIsElementType<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># zamiana z zapytania na list\u0119 obiekt\xF3w</span>
sciany <span class="token operator">=</span> sciany_iterator<span class="token punctuation">.</span>ToElements<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># przyk\u0142\u0105dowy jednolinijkowiec</span>
meble <span class="token operator">=</span> <span class="token punctuation">(</span>FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
                 <span class="token punctuation">.</span>OfCategory<span class="token punctuation">(</span>BuiltInCategory<span class="token punctuation">.</span>OST_Furniture<span class="token punctuation">)</span>
                 <span class="token punctuation">.</span>WhereElementIsNotElementType<span class="token punctuation">(</span><span class="token punctuation">)</span>
                 <span class="token punctuation">.</span>ToElements<span class="token punctuation">(</span><span class="token punctuation">)</span>
                 <span class="token punctuation">)</span>

OUT <span class="token operator">=</span> meble

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function he(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[ve]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="FilteredElementCollector",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function ze(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>

<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
    ElementId<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"System"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic <span class="token keyword">import</span> List

uidoc <span class="token operator">=</span> __revit__<span class="token punctuation">.</span>ActiveUIDocument  <span class="token comment"># type: ignore</span>
doc <span class="token operator">=</span> __revit__<span class="token punctuation">.</span>ActiveUIDocument<span class="token punctuation">.</span>Document  <span class="token comment"># type: ignore</span>


<span class="token keyword">def</span> <span class="token function">select</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> by_id<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> uidoc<span class="token operator">=</span>uidoc<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""select elements in view"""</span>
    elements_by_id <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> by_id<span class="token punctuation">:</span>
        <span class="token keyword">for</span> el <span class="token keyword">in</span> elements<span class="token punctuation">:</span>
            elements_by_id<span class="token punctuation">.</span>append<span class="token punctuation">(</span>el<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        elements_by_id <span class="token operator">=</span> elements
    Icollection <span class="token operator">=</span> List<span class="token punctuation">[</span>ElementId<span class="token punctuation">]</span><span class="token punctuation">(</span>elements_by_id<span class="token punctuation">)</span>
    uidoc<span class="token punctuation">.</span>Selection<span class="token punctuation">.</span>SetElementIds<span class="token punctuation">(</span>Icollection<span class="token punctuation">)</span>
</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function je(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[ze]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="uidoc.Selection",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Te(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>

<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
    ElementId<span class="token punctuation">,</span>
    FilteredElementCollector<span class="token punctuation">,</span>
    BuiltInCategory<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"System"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic <span class="token keyword">import</span> List

<span class="token comment"># Dodanie TransactionManagera i DocumentManagera</span>
clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitServices"</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> RevitServices
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Persistence <span class="token keyword">import</span> DocumentManager

doc <span class="token operator">=</span> DocumentManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>CurrentDBDocument
uidoc <span class="token operator">=</span> DocumentManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>CurrentUIApplication<span class="token punctuation">.</span>ActiveUIDocument

<span class="token keyword">def</span> <span class="token function">select</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> by_id<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> uidoc<span class="token operator">=</span>uidoc<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""select elements in view"""</span>
    elements_by_id <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> by_id<span class="token punctuation">:</span>
        <span class="token keyword">for</span> el <span class="token keyword">in</span> elements<span class="token punctuation">:</span>
            elements_by_id<span class="token punctuation">.</span>append<span class="token punctuation">(</span>el<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        elements_by_id <span class="token operator">=</span> elements
    Icollection <span class="token operator">=</span> List<span class="token punctuation">[</span>ElementId<span class="token punctuation">]</span><span class="token punctuation">(</span>elements_by_id<span class="token punctuation">)</span>
    uidoc<span class="token punctuation">.</span>Selection<span class="token punctuation">.</span>SetElementIds<span class="token punctuation">(</span>Icollection<span class="token punctuation">)</span>

<span class="token comment"># przyk\u0142\u0105dowy jednolinijkowiec</span>
walls <span class="token operator">=</span> <span class="token punctuation">(</span> FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
            <span class="token punctuation">.</span>OfCategory<span class="token punctuation">(</span>BuiltInCategory<span class="token punctuation">.</span>OST_Walls<span class="token punctuation">)</span>
            <span class="token punctuation">.</span>WhereElementIsNotElementType<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span>ToElements<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

wybrane <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> wall <span class="token keyword">in</span> walls<span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token string">"gk"</span> <span class="token keyword">in</span> wall<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Name<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        wybrane<span class="token punctuation">.</span>append<span class="token punctuation">(</span>wall<span class="token punctuation">)</span>

select<span class="token punctuation">(</span>wybrane<span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Se(c){let n,p,a,e,s,o;return s=new P({props:{$$slots:{default:[Te]},$$scope:{ctx:c}}}),{c(){n=k("h3"),n.textContent="Filtrowanie + zaznaczanie",p=f(),a=k("p"),a.textContent="Skrypt do wybierania element\xF3w i zanzaczania ich w modelu",e=f(),v(s.$$.fragment)},m(l,d){u(l,n,d),u(l,p,d),u(l,a,d),u(l,e,d),b(s,l,d),o=!0},p(l,d){const z={};d&1&&(z.$$scope={dirty:d,ctx:l}),s.$set(z)},i(l){o||(w(s.$$.fragment,l),o=!0)},o(l){g(s.$$.fragment,l),o=!1},d(l){l&&i(n),l&&i(p),l&&i(a),l&&i(e),_(s,l)}}}function Ae(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 3."},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function Ee(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Transaction",p=f(),a=k("p"),a.textContent="Jak dzia\u0142a wprowadzanie zmian w modelu. S\u0105 trzy typy transakcji:",e=f(),s=k("ul"),s.innerHTML=`<li>Transaction</li> 
<li>TransactionGroup</li> 
<li>TransactionManager - Dynamo</li>`},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function Ce(c){let n,p=`<code class="language-python">TransactionManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>EnsureInTransaction<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
zrob_cos<span class="token punctuation">(</span><span class="token punctuation">)</span>
TransactionManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>TransactionTaskDone<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Ie(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Ce]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="TransactionManager - Dynamo",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Re(c){let n,p=`<code class="language-python">t <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">'Opis'</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
	zrob_cos<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>RollBack<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function xe(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Re]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Transaction",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function De(c){let n,p=`<code class="language-python">tg <span class="token operator">=</span> TransactionGroup<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">"&#123;&#125; number assing"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>el_type<span class="token punctuation">)</span><span class="token punctuation">)</span>
tg<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>

t <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">"Zmiana 1"</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
zrob_zmiana1<span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

zrob_cos_inneg<span class="token punctuation">(</span><span class="token punctuation">)</span>

t2 <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">"Zmiana 2"</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
zrob_zmiana2<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Scalanie dwoch transakcji</span>
tg<span class="token punctuation">.</span>Assimilate<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Pe(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[De]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="TransactionGroup",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Le(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitServices"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Persistence <span class="token keyword">import</span> DocumentManager

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
  Transaction<span class="token punctuation">,</span>
  UnitUtils<span class="token punctuation">,</span>
  DisplayUnitType
<span class="token punctuation">)</span>

doc <span class="token operator">=</span> DocumentManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>CurrentDBDocument


wall <span class="token operator">=</span> s0 <span class="token comment"># type: ignore</span>
<span class="token comment"># parametr ktory jest liczba</span>
base_offset <span class="token operator">=</span> wall<span class="token punctuation">.</span>LookupParameter<span class="token punctuation">(</span><span class="token string">'Base Offset'</span><span class="token punctuation">)</span>
base_offset<span class="token punctuation">.</span>asDouble<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 0.16404199475065617</span>
base_offset<span class="token punctuation">.</span>AsInteger<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># 0</span>
base_offset<span class="token punctuation">.</span>AsValueString<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># '5.00'</span>
base_offset<span class="token punctuation">.</span>DisplayUnitType <span class="token comment"># Autodesk.Revit.DB.DisplayUnitType.DUT_CENTIMETERS</span>
base_offset_cm <span class="token operator">=</span> UnitUtils<span class="token punctuation">.</span>Convert<span class="token punctuation">(</span>
  base_offset<span class="token punctuation">.</span>AsDouble<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  DisplayUnitType<span class="token punctuation">.</span>DUT_DECIMAL_FEET<span class="token punctuation">,</span> 
  DisplayUnitType<span class="token punctuation">.</span>DUT_CENTIMETERS<span class="token punctuation">)</span>   <span class="token comment"># 5.0</span>


<span class="token comment"># parametr jako inny obiekt</span>
base <span class="token operator">=</span> wall<span class="token punctuation">.</span>LookupParameter<span class="token punctuation">(</span><span class="token string">'Base Constraint'</span><span class="token punctuation">)</span>
base<span class="token punctuation">.</span>asDouble<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 0.0</span>
base<span class="token punctuation">.</span>AsValueString<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># '01-Pietro_Konstrukcja'</span>
base<span class="token punctuation">.</span>AsElementId<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># &lt;Autodesk.Revit.DB.ElementId [221444]></span>
level <span class="token operator">=</span> doc<span class="token punctuation">.</span>GetElement<span class="token punctuation">(</span>base<span class="token punctuation">.</span>AsElementId<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &lt;[Autodesk.Revit.DB.Level]></span>
level<span class="token punctuation">.</span>Name <span class="token comment"># '01-Pietro_Konstrukcja'</span>
level<span class="token punctuation">.</span>Elevation <span class="token comment"># 9.1371391076115476</span>
level<span class="token punctuation">.</span>LookupParameter<span class="token punctuation">(</span><span class="token string">'kolejny parametr'</span><span class="token punctuation">)</span> 
<span class="token comment"># i tak dalej i tak dalej </span>
</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Me(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Le]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Parametry",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Fe(c){let n,p,a;return{c(){n=k("h2"),n.textContent="Rodzaje parametr\xF3w",p=f(),a=k("ul"),a.innerHTML=`<li>String [str] <code>Nazwa Budynku</code></li> 
<li>Double [float] <code>3.14</code></li> 
<li>Integer [int]  <code>2345</code></li> 
<li>Element - inny obiekt Revitowy (Level)</li> 
<li>BuiltInParameter</li>`},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function Ge(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitServices"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Persistence <span class="token keyword">import</span> DocumentManager

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
  Transaction<span class="token punctuation">,</span>
  UnitUtils<span class="token punctuation">,</span>
  DisplayUnitType
<span class="token punctuation">)</span>

doc <span class="token operator">=</span> DocumentManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>CurrentDBDocument


wall <span class="token operator">=</span> s0 <span class="token comment"># type: ignore</span>

nazwy_parametrow <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">.</span>Definition<span class="token punctuation">.</span>Name <span class="token keyword">for</span> x <span class="token keyword">in</span> wall<span class="token punctuation">.</span>ParametersMap<span class="token punctuation">]</span>
nazwy_parametrow_rozszerzone <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">.</span>Definition<span class="token punctuation">.</span>Name <span class="token keyword">for</span> x <span class="token keyword">in</span> wall<span class="token punctuation">.</span>Parameters<span class="token punctuation">]</span>
<span class="token comment"># R\xF3\u017Cnice:</span>
<span class="token comment">#   Type</span>
<span class="token comment">#   Family</span>
<span class="token comment">#   Type Name</span>
<span class="token comment">#   Category</span>
<span class="token comment">#   Design Option</span>
<span class="token comment">#   Family and Type</span>
<span class="token comment">#   Type Id</span>
<span class="token comment">#   Family Name</span>
<span class="token comment">#   Category</span>
</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Oe(c){let n,p,a,e,s,o;return s=new P({props:{$$slots:{default:[Ge]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="ParameterMap",p=f(),a=k("p"),a.textContent="Jak wyci\u0105gn\u0105\u0107 informacje o parametrach",e=f(),v(s.$$.fragment)},m(l,d){u(l,n,d),u(l,p,d),u(l,a,d),u(l,e,d),b(s,l,d),o=!0},p(l,d){const z={};d&1&&(z.$$scope={dirty:d,ctx:l}),s.$set(z)},i(l){o||(w(s.$$.fragment,l),o=!0)},o(l){g(s.$$.fragment,l),o=!1},d(l){l&&i(n),l&&i(p),l&&i(a),l&&i(e),_(s,l)}}}function Ne(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 4."},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function He(c){let n,p,a;return{c(){n=k("h2"),n.textContent="W\u0142asna zak\u0142adka w Revicie",p=f(),a=k("p"),a.innerHTML='<img src="./dh-tab.jpg" alt="dh-tab"/>'},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function Be(c){let n,p,a,e,s;return{c(){n=k("h2"),n.textContent="Przyk\u0142ad od wi\u0119kszego kolegi z bran\u017Cy",p=f(),a=k("p"),a.innerHTML='<a href="https://youtu.be/5Pup98apob4" rel="nofollow">Webinar BIG</a>',e=f(),s=k("p"),s.innerHTML='<img src="./BIG-ribbon.jpg" alt="BIG-ribbon"/>'},m(o,l){u(o,n,l),u(o,p,l),u(o,a,l),u(o,e,l),u(o,s,l)},p:T,d(o){o&&i(n),o&&i(p),o&&i(a),o&&i(e),o&&i(s)}}}function Ue(c){let n,p,a,e;return{c(){n=k("h2"),n.textContent="Struktura folder\xF3w:",p=f(),a=k("img"),wt(a.src,e="folder.svg")||I(a,"src",e),I(a,"alt","")},m(s,o){u(s,n,o),u(s,p,o),u(s,a,o)},p:T,d(s){s&&i(n),s&&i(p),s&&i(a)}}}function We(c){let n;return{c(){n=k("h2"),n.textContent="Szybkie uruchamianie"},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function Ve(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 5."},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function qe(c){let n,p,a;return{c(){n=k("h2"),n.textContent="Views",p=f(),a=k("ul"),a.innerHTML=`<li>View</li> 
<li>FloorView</li> 
<li>Viewport</li>`},m(e,s){u(e,n,s),u(e,p,s),u(e,a,s)},p:T,d(e){e&&i(n),e&&i(p),e&&i(a)}}}function Ze(c){let n;return{c(){n=k("h2"),n.textContent="ViewTemplates"},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function Xe(c){let n,p=`<code class="language-python">lnks <span class="token operator">=</span> FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">.</span>OfClass<span class="token punctuation">(</span>RevitLinkInstance<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> lnks<span class="token punctuation">:</span>
    name <span class="token operator">=</span> i<span class="token punctuation">.</span>Name<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">".rvt"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> name<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">"IS"</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># Filtrujemy linki zeby znalezc wlasciwy</span>
        doclnk <span class="token operator">=</span> i<span class="token punctuation">.</span>GetLinkDocument<span class="token punctuation">(</span><span class="token punctuation">)</span>
        coll <span class="token operator">=</span> <span class="token punctuation">(</span>
            FilteredElementCollector<span class="token punctuation">(</span>doclnk<span class="token punctuation">)</span>
            <span class="token punctuation">.</span>OfCategory<span class="token punctuation">(</span>BuiltInCategory<span class="token punctuation">.</span>OST_GenericModel<span class="token punctuation">)</span>
            <span class="token punctuation">.</span>WhereElementIsNotElementType<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span>ToElements<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">for</span> x <span class="token keyword">in</span> coll<span class="token punctuation">:</span>
            <span class="token keyword">if</span> x<span class="token punctuation">.</span>Symbol<span class="token punctuation">.</span>FamilyName<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">"Nazwa"</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                lvl <span class="token operator">=</span> doclnk<span class="token punctuation">.</span>GetElement<span class="token punctuation">(</span>x<span class="token punctuation">.</span>LevelId<span class="token punctuation">)</span>
                lvl_name <span class="token operator">=</span> lvl<span class="token punctuation">.</span>Name
                elements<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> lvl_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> elements

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Ye(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Xe]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Linked documents",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Ke(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr
clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
    FilteredElementCollector<span class="token punctuation">,</span>
    Transaction<span class="token punctuation">,</span>
    XYZ<span class="token punctuation">,</span>
    Line<span class="token punctuation">,</span>
    Reference<span class="token punctuation">,</span>
    ReferenceArray<span class="token punctuation">,</span>
<span class="token punctuation">)</span>


element<span class="token punctuation">,</span> grid <span class="token operator">=</span> selection 
p <span class="token operator">=</span> el<span class="token punctuation">.</span>GeometryCurve<span class="token punctuation">.</span>GetEndPoint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
p_ref <span class="token operator">=</span> el<span class="token punctuation">.</span>GeometryCurve<span class="token punctuation">.</span>GetEndPointReference<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
proj <span class="token operator">=</span> grid<span class="token punctuation">.</span>Curve<span class="token punctuation">.</span>Project<span class="token punctuation">(</span>p<span class="token punctuation">)</span>
gr_ref <span class="token operator">=</span> Reference<span class="token punctuation">(</span>grid<span class="token punctuation">)</span>

<span class="token comment"># Tworzenie wymiaru</span>
direction <span class="token operator">=</span> grid<span class="token punctuation">.</span>Curve<span class="token punctuation">.</span>Direction
p1 <span class="token operator">=</span> XYZ<span class="token punctuation">(</span>p<span class="token punctuation">.</span>X<span class="token punctuation">,</span> p<span class="token punctuation">.</span>Y<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Add<span class="token punctuation">(</span>direction<span class="token punctuation">.</span>Multiply<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
p2 <span class="token operator">=</span> proj<span class="token punctuation">.</span>XYZPoint<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>direction<span class="token punctuation">.</span>Multiply<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
dimline <span class="token operator">=</span> Line<span class="token punctuation">.</span>CreateBound<span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span> <span class="token comment"># stworzyli\u015Bmy prostopad\u0142\u0105</span>
<span class="token comment"># dimline = dimline.CreateOffset(100, dimline.Direction)</span>

refarr <span class="token operator">=</span> ReferenceArray<span class="token punctuation">(</span><span class="token punctuation">)</span>
refarr<span class="token punctuation">.</span>Append<span class="token punctuation">(</span>p_ref<span class="token punctuation">)</span>
refarr<span class="token punctuation">.</span>Append<span class="token punctuation">(</span>gr_ref<span class="token punctuation">)</span>

t <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">'DEV wymiar'</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
dim <span class="token operator">=</span> doc<span class="token punctuation">.</span>Create<span class="token punctuation">.</span>NewDimension<span class="token punctuation">(</span>doc<span class="token punctuation">.</span>ActiveView<span class="token punctuation">,</span> dimline<span class="token punctuation">,</span> refarr<span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function Je(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[Ke]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Wymiarowanie",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function Qe(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 6."},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function no(c){let n,p=`<code class="language-python">e <span class="token operator">=</span> <span class="token number">0.0001</span> <span class="token comment"># do jakiego zaokr\u0105glenia ma uwa\u017Ca\u0107 liczby za r\xF3wne</span>
x <span class="token operator">=</span> <span class="token number">0.1</span> <span class="token operator">-</span> <span class="token number">0.01</span>
y <span class="token operator">=</span> <span class="token number">0.09</span>

<span class="token keyword">if</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>x <span class="token operator">-</span> y<span class="token punctuation">)</span> <span class="token operator">&lt;</span> e<span class="token punctuation">:</span> <span class="token comment"># abs - czyli liczba bezwzgl\u0119dna</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>
 
</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function so(c){let n,p,a,e,s,o,l,d,z,D,R,F,M,$;return M=new P({props:{$$slots:{default:[no]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Por\xF3wnywanie",p=f(),a=k("h2"),a.textContent="x == y",e=f(),s=k("p"),s.innerHTML=`Por\xF3wnywanie element\xF3w ze sob\u0105 jest proste w przypadku booleans i liczb ca\u0142kowitych.
Problem zaczyna si\u0119 przy zmiennoprzecinkowych <code>float</code>, czyli wi\u0119kszo\u015Bci rzeczy w geometrii 3D i Revicie.`,o=f(),l=k("ol"),l.innerHTML=`<li>Dzia\u0142aj\u0105ce por\xF3wnania:<ul><li>True == False</li> 
<li>1 == 2</li></ul></li> 
<li>Niedzia\u0142aj\u0105ce np. 2.5 == 2.4 + 0.1</li>`,d=f(),z=k("p"),z.innerHTML=`W praktyce najcz\u0119\u015Bciej 2.5 == 2.5 b\u0119dzie si\u0119 zgadza\u0107 i b\u0119dzie dawa\u0107 wynik pozytywny.
Komputer floaty zawsze trzyma w zaokr\u0105gleniu, dlatego czasem przy dzia\u0142aniach okazuje si\u0119, \u017Ce poprawne jest takie r\xF3wnanie:<br/> 
<code>0.1 - 0.01 = 0.0900000000000000003</code>`,D=f(),R=k("p"),R.textContent="Dlatego najcz\u0119\u015Bciej przy por\xF3wnywaniu liczb zmiennoprzecinkowych lub wektor\xF3w lub punkt\xF3w warto doda\u0107 tzw. epsilon.",F=f(),v(M.$$.fragment)},m(m,y){u(m,n,y),u(m,p,y),u(m,a,y),u(m,e,y),u(m,s,y),u(m,o,y),u(m,l,y),u(m,d,y),u(m,z,y),u(m,D,y),u(m,R,y),u(m,F,y),b(M,m,y),$=!0},p(m,y){const h={};y&1&&(h.$$scope={dirty:y,ctx:m}),M.$set(h)},i(m){$||(w(M.$$.fragment,m),$=!0)},o(m){g(M.$$.fragment,m),$=!1},d(m){m&&i(n),m&&i(p),m&&i(a),m&&i(e),m&&i(s),m&&i(o),m&&i(l),m&&i(d),m&&i(z),m&&i(D),m&&i(R),m&&i(F),_(M,m)}}}function ao(c){let n;return{c(){n=k("h1"),n.textContent="Praca wsp\xF3lna:"},m(p,a){u(p,n,a)},p:T,d(p){p&&i(n)}}}function to(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitServices"</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> RevitServices
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Persistence <span class="token keyword">import</span> DocumentManager
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Transactions <span class="token keyword">import</span> TransactionManager

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> Autodesk <span class="token keyword">import</span> Revit
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit <span class="token keyword">import</span> DB<span class="token punctuation">,</span> UI
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
    Wall<span class="token punctuation">,</span>
    Document<span class="token punctuation">,</span>
    Transaction
<span class="token punctuation">)</span>

<span class="token comment"># uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument</span>
<span class="token comment"># doc = DocumentManager.Instance.CurrentDBDocument</span>
uidoc <span class="token operator">=</span> __revit__<span class="token punctuation">.</span>ActiveUIDocument <span class="token comment"># type: ignore</span>
doc <span class="token operator">=</span> __revit__<span class="token punctuation">.</span>ActiveUIDocument<span class="token punctuation">.</span>Document <span class="token comment"># type: ignore</span>

t <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">'Create Wall'</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    Wall<span class="token punctuation">.</span>Create<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> curve<span class="token punctuation">,</span> walltypeid<span class="token punctuation">,</span> levelid<span class="token punctuation">,</span> height<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> flip<span class="token punctuation">,</span> structural<span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>RollBack<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function eo(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[to]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Narysuj \u015Bcian\u0119",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function oo(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitServices"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Persistence <span class="token keyword">import</span> DocumentManager

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
    Transaction<span class="token punctuation">,</span>
    UnitUtils<span class="token punctuation">,</span>
    DisplayUnitType
<span class="token punctuation">)</span>

doc <span class="token operator">=</span> DocumentManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>CurrentDBDocument

wall <span class="token operator">=</span> s0 <span class="token comment"># type: ignore</span>
<span class="token comment"># parametr ktory jest liczba</span>
base_offset <span class="token operator">=</span> wall<span class="token punctuation">.</span>LookupParameter<span class="token punctuation">(</span><span class="token string">'Base Offset'</span><span class="token punctuation">)</span>
new_offset <span class="token operator">=</span> UnitUtils<span class="token punctuation">.</span>Convert<span class="token punctuation">(</span>
    <span class="token number">15</span><span class="token punctuation">,</span> 
    DisplayUnitType<span class="token punctuation">.</span>DUT_CENTIMETERS<span class="token punctuation">,</span>
    DisplayUnitType<span class="token punctuation">.</span>DUT_DECIMAL_FEET<span class="token punctuation">)</span>


t <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">'Modify wall parameter'</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># base_offset.SetValueString('15')</span>
    base_offset<span class="token punctuation">.</span>Set<span class="token punctuation">(</span>new_offset<span class="token punctuation">)</span>
<span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>RollBack<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function po(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[oo]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Modyfikuj parametry \u015Bciany",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function lo(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitServices"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> RevitServices<span class="token punctuation">.</span>Persistence <span class="token keyword">import</span> DocumentManager

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
    BuiltInCategory<span class="token punctuation">,</span>
    FilteredElementCollector
<span class="token punctuation">)</span>

doc <span class="token operator">=</span> DocumentManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>CurrentDBDocument

<span class="token comment"># 1. jedna opcja to u\u017Cy\u0107 zaznaczenia w shellu czyli "selection"</span>
walls <span class="token operator">=</span> selection <span class="token comment"># type: ignore</span>

<span class="token comment"># 2. drug\u0105 opcj\u0105 to wyfiltrowanie wszystkich \u015Bcian</span>
walls <span class="token operator">=</span> <span class="token punctuation">(</span> FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
            <span class="token punctuation">.</span>OfCategory<span class="token punctuation">(</span>BuiltInCategory<span class="token punctuation">.</span>OST_Walls<span class="token punctuation">)</span>
            <span class="token punctuation">.</span>WhereElementIsNotElementType<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span>ToElements<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment"># konterery do kt\xF3rych zbieramy dane</span>
powierzchnie <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
suma <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment"># p\u0119tla przechodzaca przez ka\u017Cd\u0105 scian\u0119</span>
<span class="token keyword">for</span> wall <span class="token keyword">in</span> walls<span class="token punctuation">:</span>
    typ <span class="token operator">=</span> wall<span class="token punctuation">.</span>LookupParameter<span class="token punctuation">(</span><span class="token string">"Family and Type"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AsValueString<span class="token punctuation">(</span><span class="token punctuation">)</span>
    pow_feet <span class="token operator">=</span> wall<span class="token punctuation">.</span>LookupParameter<span class="token punctuation">(</span><span class="token string">"Area"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AsDouble<span class="token punctuation">(</span><span class="token punctuation">)</span>
    pow_m <span class="token operator">=</span> sq_feet_to_meter<span class="token punctuation">(</span>pow_feet<span class="token punctuation">)</span> 
    suma <span class="token operator">+=</span> pow_m
    <span class="token keyword">if</span> powierzchnie<span class="token punctuation">.</span>get<span class="token punctuation">(</span>typ<span class="token punctuation">)</span><span class="token punctuation">:</span>
        powierzchnie<span class="token punctuation">[</span>typ<span class="token punctuation">]</span> <span class="token operator">+=</span> pow_m
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        powierzchnie<span class="token punctuation">[</span>typ<span class="token punctuation">]</span> <span class="token operator">=</span> pow_m

<span class="token comment"># drukowanie wynikow</span>
<span class="token keyword">for</span> typ<span class="token punctuation">,</span> <span class="token builtin">pow</span> <span class="token keyword">in</span> powierzchnie<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'&#123;&#125;: &#123;&#125;m2'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>typ<span class="token punctuation">,</span><span class="token builtin">pow</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Powierzchnia ca\u0142kowita: &#123;&#125;m2'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>suma<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function co(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[lo]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Zbierz dane ze \u015Bcian",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function io(c){let n,p=`<code class="language-python"><span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
    FilteredElementCollector<span class="token punctuation">,</span>
    FamilySymbol<span class="token punctuation">,</span>
    BuiltInCategory<span class="token punctuation">,</span>
    Structure<span class="token punctuation">,</span>
    XYZ<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

wszystkie_rodziny_drzwi <span class="token operator">=</span> <span class="token punctuation">(</span>FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
<span class="token punctuation">.</span>OfClass<span class="token punctuation">(</span>typeof<span class="token punctuation">(</span>FamilySymbol<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span>OfCategory<span class="token punctuation">(</span>BuiltInCategory<span class="token punctuation">.</span>OST_Doors<span class="token punctuation">)</span>
<span class="token punctuation">.</span>ToElements<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

family_symbol <span class="token operator">=</span> wszystkie_rodziny_drzwi<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># wybieramy pierwsza lepsza</span>
active_view <span class="token operator">=</span> doc<span class="token punctuation">.</span>ActiveView
level <span class="token operator">=</span> doc<span class="token punctuation">.</span>GetElement<span class="token punctuation">(</span>active_view<span class="token punctuation">.</span>LevelId<span class="token punctuation">)</span>

location <span class="token operator">=</span> XYZ<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
structural <span class="token operator">=</span> Structure<span class="token punctuation">.</span>StructuralType<span class="token punctuation">.</span>NonStructural

<span class="token comment"># dla zwyk\u0142ych rodzin</span>
nowy_obiekt <span class="token operator">=</span> doc<span class="token punctuation">.</span>Create<span class="token punctuation">.</span>NewFamilyInstance<span class="token punctuation">(</span>
	location <span class="token operator">=</span> location<span class="token punctuation">,</span>
	symbol <span class="token operator">=</span> family_symbol<span class="token punctuation">,</span>
	level <span class="token operator">=</span> level<span class="token punctuation">,</span>
	structuralType <span class="token operator">=</span> structural
<span class="token punctuation">)</span>
<span class="token comment"># dla rodzin hostowych</span>
<span class="token comment"># doc.Create.NewFamilyInstance(</span>
<span class="token comment"># 	location,</span>
<span class="token comment"># 	symbol,</span>
<span class="token comment"># 	host, # opcjonalne dla rodzin z hostami</span>
<span class="token comment">#	level,</span>
<span class="token comment">#	structuralType</span>
<span class="token comment">#)</span>
<span class="token comment"># dla rodzin liniowych</span>
<span class="token comment">#doc.Create.NewFamilyInstance(</span>
<span class="token comment">#	location,</span>
<span class="token comment">#	symbol,</span>
<span class="token comment">#	host, # opcjonalne dla rodzin z hostami</span>
<span class="token comment">#	level,</span>
<span class="token comment">#	structuralType</span>
<span class="token comment">#)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function uo(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[io]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Wstaw rodzin\u0119",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function ro(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
    FilteredElementCollector<span class="token punctuation">,</span>
    Grid<span class="token punctuation">,</span>
    Transaction<span class="token punctuation">,</span>
    ReferenceArray<span class="token punctuation">,</span>
    Reference<span class="token punctuation">,</span>
    Line<span class="token punctuation">,</span>
    XYZ<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

uidoc <span class="token operator">=</span> __revit__<span class="token punctuation">.</span>ActiveUIDocument  <span class="token comment"># type: ignore</span>
doc <span class="token operator">=</span> __revit__<span class="token punctuation">.</span>ActiveUIDocument<span class="token punctuation">.</span>Document  <span class="token comment"># type: ignore</span>

<span class="token comment"># tutaj jest przyk\u0142ad, gdzie dziel\u0119 jedno sformu\u0142owanie </span>
<span class="token comment"># na wiele linii poprzez zamkni\u0119cie je w nawiasy</span>
osie <span class="token operator">=</span> <span class="token punctuation">(</span> FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
    <span class="token punctuation">.</span>OfClass<span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
    <span class="token punctuation">.</span>WhereElementIsNotElementType<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>ToElements<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment"># chcemy podzieli\u0107 osie na grupy w kt\xF3rych s\u0105 one r\xF3wnoleg\u0142e do siebie </span>
grupy <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
<span class="token keyword">for</span> os <span class="token keyword">in</span> osie<span class="token punctuation">:</span>
    direction <span class="token operator">=</span> os<span class="token punctuation">.</span>Curve<span class="token punctuation">.</span>Direction<span class="token punctuation">.</span>ToString<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># "XYZ(-1,0,0)"</span>
    negate <span class="token operator">=</span>    os<span class="token punctuation">.</span>Curve<span class="token punctuation">.</span>Direction<span class="token punctuation">.</span>Negate<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ToString<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># "XYZ(1,0,0)"</span>

    <span class="token comment"># b\u0119dziemy u\u017Cywa\u0107 Direction jako klucza po kt\xF3rym sortujemy</span>
    <span class="token keyword">if</span> grupy<span class="token punctuation">.</span>get<span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">:</span>
        grupy<span class="token punctuation">[</span>direction<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token punctuation">[</span>os<span class="token punctuation">]</span>
    <span class="token keyword">elif</span> grupy<span class="token punctuation">.</span>get<span class="token punctuation">(</span>negate<span class="token punctuation">)</span><span class="token punctuation">:</span>
        grupy<span class="token punctuation">[</span>negate<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token punctuation">[</span>os<span class="token punctuation">]</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        grupy<span class="token punctuation">[</span>direction<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>os<span class="token punctuation">]</span>

t <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">'wymiarowanie osi'</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> k<span class="token punctuation">,</span> osie <span class="token keyword">in</span> grupy<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>osie<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">:</span>
        os1 <span class="token operator">=</span> osie<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        os2 <span class="token operator">=</span> osie<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        p1 <span class="token operator">=</span> os1<span class="token punctuation">.</span>Curve<span class="token punctuation">.</span>GetEndPoint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        p1 <span class="token operator">=</span> XYZ<span class="token punctuation">(</span>p1<span class="token punctuation">.</span>X<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>Y<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        p2 <span class="token operator">=</span> os2<span class="token punctuation">.</span>Curve<span class="token punctuation">.</span>Project<span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">.</span>XYZPoint

        dimline <span class="token operator">=</span> Line<span class="token punctuation">.</span>CreateBound<span class="token punctuation">(</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">)</span>

        refarr <span class="token operator">=</span> ReferenceArray<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> os <span class="token keyword">in</span> osie<span class="token punctuation">:</span>
            ref <span class="token operator">=</span> Reference<span class="token punctuation">(</span>os<span class="token punctuation">)</span>
            refarr<span class="token punctuation">.</span>Append<span class="token punctuation">(</span>ref<span class="token punctuation">)</span>

        dim <span class="token operator">=</span> doc<span class="token punctuation">.</span>Create<span class="token punctuation">.</span>NewDimension<span class="token punctuation">(</span>doc<span class="token punctuation">.</span>ActiveView<span class="token punctuation">,</span> dimline<span class="token punctuation">,</span> refarr<span class="token punctuation">)</span>
    
t<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),I(n,"class","language-python")},m(a,e){u(a,n,e),n.innerHTML=p},p:T,d(a){a&&i(n)}}}function ko(c){let n,p,a,e;return a=new P({props:{$$slots:{default:[ro]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Wymiaruj osie",p=f(),v(a.$$.fragment)},m(s,o){u(s,n,o),u(s,p,o),b(a,s,o),e=!0},p(s,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:s}),a.$set(l)},i(s){e||(w(a.$$.fragment,s),e=!0)},o(s){g(a.$$.fragment,s),e=!1},d(s){s&&i(n),s&&i(p),_(a,s)}}}function fo(c){let n,p,a,e,s,o,l,d,z,D,R,F,M,$,m,y,h,j,E,C,x,G,L,Q,q,Wn,K,Vn,Z,O,N,X,H,nn,U,qn,B,J,W,sn,Y,an,V,tn,en,ps,on,ls,pn,cs,ln,is,cn,us,un,rs,rn,ks,kn,fs,fn,ms,mn,ds,dn,$s,$n,ys,yn,ws,wn,gs,gn,bs,bn,_s,_n,vs,vn,hs,hn,zs,zn,js,jn,Ts,Tn,Ss,Sn,As,An,Es,En,Cs,Cn,Is,In,Rs,Rn,xs,xn,Ds,Dn,Ps,Pn,Ls,Ln,Ms,Mn,Fs,Fn,Gs,Gn,Os,On,Ns,Nn,Hs,Hn,Bs,Bn,Us,Un,Zn;return document.title=n=pt,a=new Et({}),s=new A({props:{$$slots:{default:[Pt]},$$scope:{ctx:c}}}),l=new A({props:{id:"spotkanie-1",$$slots:{default:[Lt]},$$scope:{ctx:c}}}),z=new A({props:{$$slots:{default:[Mt]},$$scope:{ctx:c}}}),R=new A({props:{$$slots:{default:[Ft]},$$scope:{ctx:c}}}),M=new A({props:{$$slots:{default:[Ot]},$$scope:{ctx:c}}}),m=new A({props:{$$slots:{default:[Ht]},$$scope:{ctx:c}}}),h=new A({props:{$$slots:{default:[Ut]},$$scope:{ctx:c}}}),E=new A({props:{$$slots:{default:[Wt]},$$scope:{ctx:c}}}),x=new A({props:{$$slots:{default:[Vt]},$$scope:{ctx:c}}}),L=new A({props:{$$slots:{default:[Zt]},$$scope:{ctx:c}}}),q=new A({props:{$$slots:{default:[Yt]},$$scope:{ctx:c}}}),K=new A({props:{$$slots:{default:[Jt]},$$scope:{ctx:c}}}),Z=new A({props:{$$slots:{default:[ne]},$$scope:{ctx:c}}}),N=new A({props:{$$slots:{default:[se]},$$scope:{ctx:c}}}),H=new A({props:{$$slots:{default:[ae]},$$scope:{ctx:c}}}),U=new A({props:{$$slots:{default:[te]},$$scope:{ctx:c}}}),B=new A({props:{$$slots:{default:[ee]},$$scope:{ctx:c}}}),W=new A({props:{$$slots:{default:[oe]},$$scope:{ctx:c}}}),Y=new A({props:{$$slots:{default:[pe]},$$scope:{ctx:c}}}),V=new A({props:{$$slots:{default:[le]},$$scope:{ctx:c}}}),en=new A({props:{$$slots:{default:[ce]},$$scope:{ctx:c}}}),on=new A({props:{$$slots:{default:[ie]},$$scope:{ctx:c}}}),pn=new A({props:{$$slots:{default:[ue]},$$scope:{ctx:c}}}),ln=new A({props:{$$slots:{default:[re]},$$scope:{ctx:c}}}),cn=new A({props:{$$slots:{default:[ke]},$$scope:{ctx:c}}}),un=new A({props:{id:"spotkanie-2",$$slots:{default:[fe]},$$scope:{ctx:c}}}),rn=new A({props:{$$slots:{default:[de]},$$scope:{ctx:c}}}),kn=new A({props:{$$slots:{default:[$e]},$$scope:{ctx:c}}}),fn=new A({props:{$$slots:{default:[we]},$$scope:{ctx:c}}}),mn=new A({props:{$$slots:{default:[be]},$$scope:{ctx:c}}}),dn=new A({props:{$$slots:{default:[_e]},$$scope:{ctx:c}}}),$n=new A({props:{$$slots:{default:[he]},$$scope:{ctx:c}}}),yn=new A({props:{$$slots:{default:[je]},$$scope:{ctx:c}}}),wn=new A({props:{$$slots:{default:[Se]},$$scope:{ctx:c}}}),gn=new A({props:{id:"spotkanie-3",$$slots:{default:[Ae]},$$scope:{ctx:c}}}),bn=new A({props:{$$slots:{default:[Ee]},$$scope:{ctx:c}}}),_n=new A({props:{$$slots:{default:[Ie]},$$scope:{ctx:c}}}),vn=new A({props:{$$slots:{default:[xe]},$$scope:{ctx:c}}}),hn=new A({props:{$$slots:{default:[Pe]},$$scope:{ctx:c}}}),zn=new A({props:{$$slots:{default:[Me]},$$scope:{ctx:c}}}),jn=new A({props:{$$slots:{default:[Fe]},$$scope:{ctx:c}}}),Tn=new A({props:{$$slots:{default:[Oe]},$$scope:{ctx:c}}}),Sn=new A({props:{id:"spotkanie-4",$$slots:{default:[Ne]},$$scope:{ctx:c}}}),An=new A({props:{$$slots:{default:[He]},$$scope:{ctx:c}}}),En=new A({props:{$$slots:{default:[Be]},$$scope:{ctx:c}}}),Cn=new A({props:{$$slots:{default:[Ue]},$$scope:{ctx:c}}}),In=new A({props:{$$slots:{default:[We]},$$scope:{ctx:c}}}),Rn=new A({props:{id:"spotkanie-5",$$slots:{default:[Ve]},$$scope:{ctx:c}}}),xn=new A({props:{$$slots:{default:[qe]},$$scope:{ctx:c}}}),Dn=new A({props:{$$slots:{default:[Ze]},$$scope:{ctx:c}}}),Pn=new A({props:{$$slots:{default:[Ye]},$$scope:{ctx:c}}}),Ln=new A({props:{$$slots:{default:[Je]},$$scope:{ctx:c}}}),Mn=new A({props:{id:"spotkanie-6",$$slots:{default:[Qe]},$$scope:{ctx:c}}}),Fn=new A({props:{$$slots:{default:[so]},$$scope:{ctx:c}}}),Gn=new A({props:{$$slots:{default:[ao]},$$scope:{ctx:c}}}),On=new A({props:{id:"program-1",$$slots:{default:[eo]},$$scope:{ctx:c}}}),Nn=new A({props:{id:"program-2",$$slots:{default:[po]},$$scope:{ctx:c}}}),Hn=new A({props:{id:"program-3",$$slots:{default:[co]},$$scope:{ctx:c}}}),Bn=new A({props:{id:"program-4",$$slots:{default:[uo]},$$scope:{ctx:c}}}),Un=new A({props:{id:"program-6",$$slots:{default:[ko]},$$scope:{ctx:c}}}),{c(){p=f(),v(a.$$.fragment),e=f(),v(s.$$.fragment),o=f(),v(l.$$.fragment),d=f(),v(z.$$.fragment),D=f(),v(R.$$.fragment),F=f(),v(M.$$.fragment),$=f(),v(m.$$.fragment),y=f(),v(h.$$.fragment),j=f(),v(E.$$.fragment),C=f(),v(x.$$.fragment),G=f(),v(L.$$.fragment),Q=f(),v(q.$$.fragment),Wn=f(),v(K.$$.fragment),Vn=f(),v(Z.$$.fragment),O=f(),v(N.$$.fragment),X=f(),v(H.$$.fragment),nn=f(),v(U.$$.fragment),qn=f(),v(B.$$.fragment),J=f(),v(W.$$.fragment),sn=f(),v(Y.$$.fragment),an=f(),v(V.$$.fragment),tn=f(),v(en.$$.fragment),ps=f(),v(on.$$.fragment),ls=f(),v(pn.$$.fragment),cs=f(),v(ln.$$.fragment),is=f(),v(cn.$$.fragment),us=f(),v(un.$$.fragment),rs=f(),v(rn.$$.fragment),ks=f(),v(kn.$$.fragment),fs=f(),v(fn.$$.fragment),ms=f(),v(mn.$$.fragment),ds=f(),v(dn.$$.fragment),$s=f(),v($n.$$.fragment),ys=f(),v(yn.$$.fragment),ws=f(),v(wn.$$.fragment),gs=f(),v(gn.$$.fragment),bs=f(),v(bn.$$.fragment),_s=f(),v(_n.$$.fragment),vs=f(),v(vn.$$.fragment),hs=f(),v(hn.$$.fragment),zs=f(),v(zn.$$.fragment),js=f(),v(jn.$$.fragment),Ts=f(),v(Tn.$$.fragment),Ss=f(),v(Sn.$$.fragment),As=f(),v(An.$$.fragment),Es=f(),v(En.$$.fragment),Cs=f(),v(Cn.$$.fragment),Is=f(),v(In.$$.fragment),Rs=f(),v(Rn.$$.fragment),xs=f(),v(xn.$$.fragment),Ds=f(),v(Dn.$$.fragment),Ps=f(),v(Pn.$$.fragment),Ls=f(),v(Ln.$$.fragment),Ms=f(),v(Mn.$$.fragment),Fs=f(),v(Fn.$$.fragment),Gs=f(),v(Gn.$$.fragment),Os=f(),v(On.$$.fragment),Ns=f(),v(Nn.$$.fragment),Hs=f(),v(Hn.$$.fragment),Bs=f(),v(Bn.$$.fragment),Us=f(),v(Un.$$.fragment)},m(t,r){u(t,p,r),b(a,t,r),u(t,e,r),b(s,t,r),u(t,o,r),b(l,t,r),u(t,d,r),b(z,t,r),u(t,D,r),b(R,t,r),u(t,F,r),b(M,t,r),u(t,$,r),b(m,t,r),u(t,y,r),b(h,t,r),u(t,j,r),b(E,t,r),u(t,C,r),b(x,t,r),u(t,G,r),b(L,t,r),u(t,Q,r),b(q,t,r),u(t,Wn,r),b(K,t,r),u(t,Vn,r),b(Z,t,r),u(t,O,r),b(N,t,r),u(t,X,r),b(H,t,r),u(t,nn,r),b(U,t,r),u(t,qn,r),b(B,t,r),u(t,J,r),b(W,t,r),u(t,sn,r),b(Y,t,r),u(t,an,r),b(V,t,r),u(t,tn,r),b(en,t,r),u(t,ps,r),b(on,t,r),u(t,ls,r),b(pn,t,r),u(t,cs,r),b(ln,t,r),u(t,is,r),b(cn,t,r),u(t,us,r),b(un,t,r),u(t,rs,r),b(rn,t,r),u(t,ks,r),b(kn,t,r),u(t,fs,r),b(fn,t,r),u(t,ms,r),b(mn,t,r),u(t,ds,r),b(dn,t,r),u(t,$s,r),b($n,t,r),u(t,ys,r),b(yn,t,r),u(t,ws,r),b(wn,t,r),u(t,gs,r),b(gn,t,r),u(t,bs,r),b(bn,t,r),u(t,_s,r),b(_n,t,r),u(t,vs,r),b(vn,t,r),u(t,hs,r),b(hn,t,r),u(t,zs,r),b(zn,t,r),u(t,js,r),b(jn,t,r),u(t,Ts,r),b(Tn,t,r),u(t,Ss,r),b(Sn,t,r),u(t,As,r),b(An,t,r),u(t,Es,r),b(En,t,r),u(t,Cs,r),b(Cn,t,r),u(t,Is,r),b(In,t,r),u(t,Rs,r),b(Rn,t,r),u(t,xs,r),b(xn,t,r),u(t,Ds,r),b(Dn,t,r),u(t,Ps,r),b(Pn,t,r),u(t,Ls,r),b(Ln,t,r),u(t,Ms,r),b(Mn,t,r),u(t,Fs,r),b(Fn,t,r),u(t,Gs,r),b(Gn,t,r),u(t,Os,r),b(On,t,r),u(t,Ns,r),b(Nn,t,r),u(t,Hs,r),b(Hn,t,r),u(t,Bs,r),b(Bn,t,r),u(t,Us,r),b(Un,t,r),Zn=!0},p(t,[r]){(!Zn||r&0)&&n!==(n=pt)&&(document.title=n);const Ys={};r&1&&(Ys.$$scope={dirty:r,ctx:t}),s.$set(Ys);const Ks={};r&1&&(Ks.$$scope={dirty:r,ctx:t}),l.$set(Ks);const Js={};r&1&&(Js.$$scope={dirty:r,ctx:t}),z.$set(Js);const Qs={};r&1&&(Qs.$$scope={dirty:r,ctx:t}),R.$set(Qs);const na={};r&1&&(na.$$scope={dirty:r,ctx:t}),M.$set(na);const sa={};r&1&&(sa.$$scope={dirty:r,ctx:t}),m.$set(sa);const aa={};r&1&&(aa.$$scope={dirty:r,ctx:t}),h.$set(aa);const ta={};r&1&&(ta.$$scope={dirty:r,ctx:t}),E.$set(ta);const ea={};r&1&&(ea.$$scope={dirty:r,ctx:t}),x.$set(ea);const oa={};r&1&&(oa.$$scope={dirty:r,ctx:t}),L.$set(oa);const pa={};r&1&&(pa.$$scope={dirty:r,ctx:t}),q.$set(pa);const la={};r&1&&(la.$$scope={dirty:r,ctx:t}),K.$set(la);const ca={};r&1&&(ca.$$scope={dirty:r,ctx:t}),Z.$set(ca);const ia={};r&1&&(ia.$$scope={dirty:r,ctx:t}),N.$set(ia);const ua={};r&1&&(ua.$$scope={dirty:r,ctx:t}),H.$set(ua);const ra={};r&1&&(ra.$$scope={dirty:r,ctx:t}),U.$set(ra);const ka={};r&1&&(ka.$$scope={dirty:r,ctx:t}),B.$set(ka);const fa={};r&1&&(fa.$$scope={dirty:r,ctx:t}),W.$set(fa);const ma={};r&1&&(ma.$$scope={dirty:r,ctx:t}),Y.$set(ma);const da={};r&1&&(da.$$scope={dirty:r,ctx:t}),V.$set(da);const $a={};r&1&&($a.$$scope={dirty:r,ctx:t}),en.$set($a);const ya={};r&1&&(ya.$$scope={dirty:r,ctx:t}),on.$set(ya);const wa={};r&1&&(wa.$$scope={dirty:r,ctx:t}),pn.$set(wa);const ga={};r&1&&(ga.$$scope={dirty:r,ctx:t}),ln.$set(ga);const ba={};r&1&&(ba.$$scope={dirty:r,ctx:t}),cn.$set(ba);const _a={};r&1&&(_a.$$scope={dirty:r,ctx:t}),un.$set(_a);const va={};r&1&&(va.$$scope={dirty:r,ctx:t}),rn.$set(va);const ha={};r&1&&(ha.$$scope={dirty:r,ctx:t}),kn.$set(ha);const za={};r&1&&(za.$$scope={dirty:r,ctx:t}),fn.$set(za);const ja={};r&1&&(ja.$$scope={dirty:r,ctx:t}),mn.$set(ja);const Ta={};r&1&&(Ta.$$scope={dirty:r,ctx:t}),dn.$set(Ta);const Sa={};r&1&&(Sa.$$scope={dirty:r,ctx:t}),$n.$set(Sa);const Aa={};r&1&&(Aa.$$scope={dirty:r,ctx:t}),yn.$set(Aa);const Ea={};r&1&&(Ea.$$scope={dirty:r,ctx:t}),wn.$set(Ea);const Ca={};r&1&&(Ca.$$scope={dirty:r,ctx:t}),gn.$set(Ca);const Ia={};r&1&&(Ia.$$scope={dirty:r,ctx:t}),bn.$set(Ia);const Ra={};r&1&&(Ra.$$scope={dirty:r,ctx:t}),_n.$set(Ra);const xa={};r&1&&(xa.$$scope={dirty:r,ctx:t}),vn.$set(xa);const Da={};r&1&&(Da.$$scope={dirty:r,ctx:t}),hn.$set(Da);const Pa={};r&1&&(Pa.$$scope={dirty:r,ctx:t}),zn.$set(Pa);const La={};r&1&&(La.$$scope={dirty:r,ctx:t}),jn.$set(La);const Ma={};r&1&&(Ma.$$scope={dirty:r,ctx:t}),Tn.$set(Ma);const Fa={};r&1&&(Fa.$$scope={dirty:r,ctx:t}),Sn.$set(Fa);const Ga={};r&1&&(Ga.$$scope={dirty:r,ctx:t}),An.$set(Ga);const Oa={};r&1&&(Oa.$$scope={dirty:r,ctx:t}),En.$set(Oa);const Na={};r&1&&(Na.$$scope={dirty:r,ctx:t}),Cn.$set(Na);const Ha={};r&1&&(Ha.$$scope={dirty:r,ctx:t}),In.$set(Ha);const Ba={};r&1&&(Ba.$$scope={dirty:r,ctx:t}),Rn.$set(Ba);const Ua={};r&1&&(Ua.$$scope={dirty:r,ctx:t}),xn.$set(Ua);const Wa={};r&1&&(Wa.$$scope={dirty:r,ctx:t}),Dn.$set(Wa);const Va={};r&1&&(Va.$$scope={dirty:r,ctx:t}),Pn.$set(Va);const qa={};r&1&&(qa.$$scope={dirty:r,ctx:t}),Ln.$set(qa);const Za={};r&1&&(Za.$$scope={dirty:r,ctx:t}),Mn.$set(Za);const Xa={};r&1&&(Xa.$$scope={dirty:r,ctx:t}),Fn.$set(Xa);const Ya={};r&1&&(Ya.$$scope={dirty:r,ctx:t}),Gn.$set(Ya);const Ka={};r&1&&(Ka.$$scope={dirty:r,ctx:t}),On.$set(Ka);const Ja={};r&1&&(Ja.$$scope={dirty:r,ctx:t}),Nn.$set(Ja);const Qa={};r&1&&(Qa.$$scope={dirty:r,ctx:t}),Hn.$set(Qa);const nt={};r&1&&(nt.$$scope={dirty:r,ctx:t}),Bn.$set(nt);const st={};r&1&&(st.$$scope={dirty:r,ctx:t}),Un.$set(st)},i(t){Zn||(w(a.$$.fragment,t),w(s.$$.fragment,t),w(l.$$.fragment,t),w(z.$$.fragment,t),w(R.$$.fragment,t),w(M.$$.fragment,t),w(m.$$.fragment,t),w(h.$$.fragment,t),w(E.$$.fragment,t),w(x.$$.fragment,t),w(L.$$.fragment,t),w(q.$$.fragment,t),w(K.$$.fragment,t),w(Z.$$.fragment,t),w(N.$$.fragment,t),w(H.$$.fragment,t),w(U.$$.fragment,t),w(B.$$.fragment,t),w(W.$$.fragment,t),w(Y.$$.fragment,t),w(V.$$.fragment,t),w(en.$$.fragment,t),w(on.$$.fragment,t),w(pn.$$.fragment,t),w(ln.$$.fragment,t),w(cn.$$.fragment,t),w(un.$$.fragment,t),w(rn.$$.fragment,t),w(kn.$$.fragment,t),w(fn.$$.fragment,t),w(mn.$$.fragment,t),w(dn.$$.fragment,t),w($n.$$.fragment,t),w(yn.$$.fragment,t),w(wn.$$.fragment,t),w(gn.$$.fragment,t),w(bn.$$.fragment,t),w(_n.$$.fragment,t),w(vn.$$.fragment,t),w(hn.$$.fragment,t),w(zn.$$.fragment,t),w(jn.$$.fragment,t),w(Tn.$$.fragment,t),w(Sn.$$.fragment,t),w(An.$$.fragment,t),w(En.$$.fragment,t),w(Cn.$$.fragment,t),w(In.$$.fragment,t),w(Rn.$$.fragment,t),w(xn.$$.fragment,t),w(Dn.$$.fragment,t),w(Pn.$$.fragment,t),w(Ln.$$.fragment,t),w(Mn.$$.fragment,t),w(Fn.$$.fragment,t),w(Gn.$$.fragment,t),w(On.$$.fragment,t),w(Nn.$$.fragment,t),w(Hn.$$.fragment,t),w(Bn.$$.fragment,t),w(Un.$$.fragment,t),Zn=!0)},o(t){g(a.$$.fragment,t),g(s.$$.fragment,t),g(l.$$.fragment,t),g(z.$$.fragment,t),g(R.$$.fragment,t),g(M.$$.fragment,t),g(m.$$.fragment,t),g(h.$$.fragment,t),g(E.$$.fragment,t),g(x.$$.fragment,t),g(L.$$.fragment,t),g(q.$$.fragment,t),g(K.$$.fragment,t),g(Z.$$.fragment,t),g(N.$$.fragment,t),g(H.$$.fragment,t),g(U.$$.fragment,t),g(B.$$.fragment,t),g(W.$$.fragment,t),g(Y.$$.fragment,t),g(V.$$.fragment,t),g(en.$$.fragment,t),g(on.$$.fragment,t),g(pn.$$.fragment,t),g(ln.$$.fragment,t),g(cn.$$.fragment,t),g(un.$$.fragment,t),g(rn.$$.fragment,t),g(kn.$$.fragment,t),g(fn.$$.fragment,t),g(mn.$$.fragment,t),g(dn.$$.fragment,t),g($n.$$.fragment,t),g(yn.$$.fragment,t),g(wn.$$.fragment,t),g(gn.$$.fragment,t),g(bn.$$.fragment,t),g(_n.$$.fragment,t),g(vn.$$.fragment,t),g(hn.$$.fragment,t),g(zn.$$.fragment,t),g(jn.$$.fragment,t),g(Tn.$$.fragment,t),g(Sn.$$.fragment,t),g(An.$$.fragment,t),g(En.$$.fragment,t),g(Cn.$$.fragment,t),g(In.$$.fragment,t),g(Rn.$$.fragment,t),g(xn.$$.fragment,t),g(Dn.$$.fragment,t),g(Pn.$$.fragment,t),g(Ln.$$.fragment,t),g(Mn.$$.fragment,t),g(Fn.$$.fragment,t),g(Gn.$$.fragment,t),g(On.$$.fragment,t),g(Nn.$$.fragment,t),g(Hn.$$.fragment,t),g(Bn.$$.fragment,t),g(Un.$$.fragment,t),Zn=!1},d(t){t&&i(p),_(a,t),t&&i(e),_(s,t),t&&i(o),_(l,t),t&&i(d),_(z,t),t&&i(D),_(R,t),t&&i(F),_(M,t),t&&i($),_(m,t),t&&i(y),_(h,t),t&&i(j),_(E,t),t&&i(C),_(x,t),t&&i(G),_(L,t),t&&i(Q),_(q,t),t&&i(Wn),_(K,t),t&&i(Vn),_(Z,t),t&&i(O),_(N,t),t&&i(X),_(H,t),t&&i(nn),_(U,t),t&&i(qn),_(B,t),t&&i(J),_(W,t),t&&i(sn),_(Y,t),t&&i(an),_(V,t),t&&i(tn),_(en,t),t&&i(ps),_(on,t),t&&i(ls),_(pn,t),t&&i(cs),_(ln,t),t&&i(is),_(cn,t),t&&i(us),_(un,t),t&&i(rs),_(rn,t),t&&i(ks),_(kn,t),t&&i(fs),_(fn,t),t&&i(ms),_(mn,t),t&&i(ds),_(dn,t),t&&i($s),_($n,t),t&&i(ys),_(yn,t),t&&i(ws),_(wn,t),t&&i(gs),_(gn,t),t&&i(bs),_(bn,t),t&&i(_s),_(_n,t),t&&i(vs),_(vn,t),t&&i(hs),_(hn,t),t&&i(zs),_(zn,t),t&&i(js),_(jn,t),t&&i(Ts),_(Tn,t),t&&i(Ss),_(Sn,t),t&&i(As),_(An,t),t&&i(Es),_(En,t),t&&i(Cs),_(Cn,t),t&&i(Is),_(In,t),t&&i(Rs),_(Rn,t),t&&i(xs),_(xn,t),t&&i(Ds),_(Dn,t),t&&i(Ps),_(Pn,t),t&&i(Ls),_(Ln,t),t&&i(Ms),_(Mn,t),t&&i(Fs),_(Fn,t),t&&i(Gs),_(Gn,t),t&&i(Os),_(On,t),t&&i(Ns),_(Nn,t),t&&i(Hs),_(Hn,t),t&&i(Bs),_(Bn,t),t&&i(Us),_(Un,t)}}}let pt="Revit API";class mo extends os{constructor(n){super(),es(this,n,null,fo,ts,{})}}new mo({target:document.getElementById("app")})});export default $o();
