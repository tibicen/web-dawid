var mt=(i,n)=>()=>(n||i((n={exports:{}}).exports,n),n.exports);var ro=mt((ko,ss)=>{const dt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function p(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=p(o);fetch(o.href,s)}};dt();function T(){}function $t(i,n){for(const p in n)i[p]=n[p];return i}function lt(i){return i()}function et(){return Object.create(null)}function es(i){i.forEach(lt)}function gt(i){return typeof i=="function"}function ts(i,n){return i!=i?n==n:i!==n||i&&typeof i=="object"||typeof i=="function"}let Yn;function yt(i,n){return Yn||(Yn=document.createElement("a")),Yn.href=n,i===Yn.href}function _t(i){return Object.keys(i).length===0}function it(i,n,p,e){if(i){const o=ct(i,n,p,e);return i[0](o)}}function ct(i,n,p,e){return i[1]&&e?$t(p.ctx.slice(),i[1](e(n))):p.ctx}function rt(i,n,p,e){if(i[2]&&e){const o=i[2](e(p));if(n.dirty===void 0)return o;if(typeof o=="object"){const s=[],a=Math.max(n.dirty.length,o.length);for(let l=0;l<a;l+=1)s[l]=n.dirty[l]|o[l];return s}return n.dirty|o}return n.dirty}function ut(i,n,p,e,o,s){if(o){const a=ct(n,p,e,s);i.p(a,o)}}function kt(i){if(i.ctx.length>32){const n=[],p=i.ctx.length/32;for(let e=0;e<p;e++)n[e]=-1;return n}return-1}function qs(i,n){i.appendChild(n)}function r(i,n,p){i.insertBefore(n,p||null)}function c(i){i.parentNode.removeChild(i)}function k(i){return document.createElement(i)}function bt(i){return document.createTextNode(i)}function f(){return bt(" ")}function R(i,n,p){p==null?i.removeAttribute(n):i.getAttribute(n)!==p&&i.setAttribute(n,p)}function wt(i){return Array.from(i.childNodes)}let Ks;function Xn(i){Ks=i}const Kn=[],tt=[],Qn=[],at=[],vt=Promise.resolve();let Vs=!1;function ht(){Vs||(Vs=!0,vt.then(ft))}function Zs(i){Qn.push(i)}const Ws=new Set;let Jn=0;function ft(){const i=Ks;do{for(;Jn<Kn.length;){const n=Kn[Jn];Jn++,Xn(n),jt(n.$$)}for(Xn(null),Kn.length=0,Jn=0;tt.length;)tt.pop()();for(let n=0;n<Qn.length;n+=1){const p=Qn[n];Ws.has(p)||(Ws.add(p),p())}Qn.length=0}while(Kn.length);for(;at.length;)at.pop()();Vs=!1,Ws.clear(),Xn(i)}function jt(i){if(i.fragment!==null){i.update(),es(i.before_update);const n=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,n),i.after_update.forEach(Zs)}}const ns=new Set;let St;function g(i,n){i&&i.i&&(ns.delete(i),i.i(n))}function y(i,n,p,e){if(i&&i.o){if(ns.has(i))return;ns.add(i),St.c.push(()=>{ns.delete(i),e&&(p&&i.d(1),e())}),i.o(n)}}function w(i){i&&i.c()}function _(i,n,p,e){const{fragment:o,on_mount:s,on_destroy:a,after_update:l}=i.$$;o&&o.m(n,p),e||Zs(()=>{const m=s.map(lt).filter(gt);a?a.push(...m):es(m),i.$$.on_mount=[]}),l.forEach(Zs)}function b(i,n){const p=i.$$;p.fragment!==null&&(es(p.on_destroy),p.fragment&&p.fragment.d(n),p.on_destroy=p.fragment=null,p.ctx=[])}function Tt(i,n){i.$$.dirty[0]===-1&&(Kn.push(i),ht(),i.$$.dirty.fill(0)),i.$$.dirty[n/31|0]|=1<<n%31}function as(i,n,p,e,o,s,a,l=[-1]){const m=Ks;Xn(i);const j=i.$$={fragment:null,ctx:null,props:s,update:T,not_equal:o,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(m?m.$$.context:[])),callbacks:et(),dirty:l,skip_bound:!1,root:n.target||m.$$.root};a&&a(j.root);let D=!1;if(j.ctx=p?p(i,n.props||{},(x,H,...N)=>{const $=N.length?N[0]:H;return j.ctx&&o(j.ctx[x],j.ctx[x]=$)&&(!j.skip_bound&&j.bound[x]&&j.bound[x]($),D&&Tt(i,x)),H}):[],j.update(),D=!0,es(j.before_update),j.fragment=e?e(j.ctx):!1,n.target){if(n.hydrate){const x=wt(n.target);j.fragment&&j.fragment.l(x),x.forEach(c)}else j.fragment&&j.fragment.c();n.intro&&g(i.$$.fragment),_(i,n.target,n.anchor,n.customElement),ft()}Xn(m)}class os{$destroy(){b(this,1),this.$destroy=T}$on(n,p){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(p),()=>{const o=e.indexOf(p);o!==-1&&e.splice(o,1)}}$set(n){this.$$set&&!_t(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}var zt=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{},z=function(i){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,e={},o={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function $(d){return d instanceof s?new s(d.type,$(d.content),d.alias):Array.isArray(d)?d.map($):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function($){return Object.prototype.toString.call($).slice(8,-1)},objId:function($){return $.__id||Object.defineProperty($,"__id",{value:++p}),$.__id},clone:function $(d,h){var v,S;switch(h=h||{},o.util.type(d)){case"Object":if(S=o.util.objId(d),h[S])return h[S];for(var E in v={},h[S]=v,d)d.hasOwnProperty(E)&&(v[E]=$(d[E],h));return v;case"Array":return S=o.util.objId(d),h[S]?h[S]:(v=[],h[S]=v,d.forEach(function(I,C){v[C]=$(I,h)}),v);default:return d}},getLanguage:function($){for(;$;){var d=n.exec($.className);if(d)return d[1].toLowerCase();$=$.parentElement}return"none"},setLanguage:function($,d){$.className=$.className.replace(RegExp(n,"gi"),""),$.classList.add("language-"+d)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(v){var $=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if($){var d=document.getElementsByTagName("script");for(var h in d)if(d[h].src==$)return d[h]}return null}},isActive:function($,d,h){for(var v="no-"+d;$;){var S=$.classList;if(S.contains(d))return!0;if(S.contains(v))return!1;$=$.parentElement}return!!h}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function($,d){var h=o.util.clone(o.languages[$]);for(var v in d)h[v]=d[v];return h},insertBefore:function($,d,h,v){var S=(v=v||o.languages)[$],E={};for(var I in S)if(S.hasOwnProperty(I)){if(I==d)for(var C in h)h.hasOwnProperty(C)&&(E[C]=h[C]);h.hasOwnProperty(I)||(E[I]=S[I])}var L=v[$];return v[$]=E,o.languages.DFS(o.languages,function(P,Q){Q===L&&P!=$&&(this[P]=E)}),E},DFS:function $(d,h,v,S){S=S||{};var E=o.util.objId;for(var I in d)if(d.hasOwnProperty(I)){h.call(d,I,d[I],v||I);var C=d[I],L=o.util.type(C);L!=="Object"||S[E(C)]?L!=="Array"||S[E(C)]||(S[E(C)]=!0,$(C,h,I,S)):(S[E(C)]=!0,$(C,h,null,S))}}},plugins:{},highlightAll:function($,d){o.highlightAllUnder(document,$,d)},highlightAllUnder:function($,d,h){var v={callback:h,container:$,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),o.hooks.run("before-all-elements-highlight",v);for(var S,E=0;S=v.elements[E++];)o.highlightElement(S,d===!0,v.callback)},highlightElement:function($,d,h){var v=o.util.getLanguage($),S=o.languages[v];o.util.setLanguage($,v);var E=$.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(E,v);var I={element:$,language:v,grammar:S,code:$.textContent};function C(P){I.highlightedCode=P,o.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,o.hooks.run("after-highlight",I),o.hooks.run("complete",I),h&&h.call(I.element)}if(o.hooks.run("before-sanity-check",I),(E=I.element.parentElement)&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!I.code)return o.hooks.run("complete",I),void(h&&h.call(I.element));if(o.hooks.run("before-highlight",I),I.grammar)if(d&&i.Worker){var L=new Worker(o.filename);L.onmessage=function(P){C(P.data)},L.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else C(o.highlight(I.code,I.grammar,I.language));else C(o.util.encode(I.code))},highlight:function($,d,h){var v={code:$,grammar:d,language:h};if(o.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=o.tokenize(v.code,v.grammar),o.hooks.run("after-tokenize",v),s.stringify(o.util.encode(v.tokens),v.language)},tokenize:function($,d){var h=d.rest;if(h){for(var v in h)d[v]=h[v];delete d.rest}var S=new m;return j(S,S.head,$),l($,S,d,S.head,0),function(E){for(var I=[],C=E.head.next;C!==E.tail;)I.push(C.value),C=C.next;return I}(S)},hooks:{all:{},add:function($,d){var h=o.hooks.all;h[$]=h[$]||[],h[$].push(d)},run:function($,d){var h=o.hooks.all[$];if(h&&h.length)for(var v,S=0;v=h[S++];)v(d)}},Token:s};function s($,d,h,v){this.type=$,this.content=d,this.alias=h,this.length=0|(v||"").length}function a($,d,h,v){$.lastIndex=d;var S=$.exec(h);if(S&&v&&S[1]){var E=S[1].length;S.index+=E,S[0]=S[0].slice(E)}return S}function l($,d,h,v,S,E){for(var I in h)if(h.hasOwnProperty(I)&&h[I]){var C=h[I];C=Array.isArray(C)?C:[C];for(var L=0;L<C.length;++L){if(E&&E.cause==I+","+L)return;var P=C[L],Q=P.inside,V=!!P.lookbehind,Wn=!!P.greedy,Y=P.alias;if(Wn&&!P.pattern.global){var qn=P.pattern.toString().match(/[imsuy]*$/)[0];P.pattern=RegExp(P.pattern.source,qn+"g")}for(var Z=P.pattern||P,F=v.next,G=S;F!==d.tail&&!(E&&G>=E.reach);G+=F.value.length,F=F.next){var K=F.value;if(d.length>$.length)return;if(!(K instanceof s)){var O,nn=1;if(Wn){if(!(O=a(Z,G,$,V))||O.index>=$.length)break;var U=O.index,Vn=O.index+O[0].length,B=G;for(B+=F.value.length;U>=B;)B+=(F=F.next).value.length;if(G=B-=F.value.length,F.value instanceof s)continue;for(var J=F;J!==d.tail&&(B<Vn||typeof J.value=="string");J=J.next)nn++,B+=J.value.length;nn--,K=$.slice(G,B),O.index-=G}else if(!(O=a(Z,0,K,V)))continue;U=O.index;var W=O[0],sn=K.slice(0,U),X=K.slice(U+W.length),en=G+K.length;E&&en>E.reach&&(E.reach=en);var q=F.prev;if(sn&&(q=j(d,q,sn),G+=sn.length),D(d,q,nn),F=j(d,q,new s(I,Q?o.tokenize(W,Q):W,Y,W)),X&&j(d,F,X),nn>1){var tn={cause:I+","+L,reach:en};l($,d,h,F.prev,G,tn),E&&tn.reach>E.reach&&(E.reach=tn.reach)}}}}}}function m(){var $={value:null,prev:null,next:null},d={value:null,prev:$,next:null};$.next=d,this.head=$,this.tail=d,this.length=0}function j($,d,h){var v=d.next,S={value:h,prev:d,next:v};return d.next=S,v.prev=S,$.length++,S}function D($,d,h){for(var v=d.next,S=0;S<h&&v!==$.tail;S++)v=v.next;d.next=v,v.prev=d,$.length-=S}if(i.Prism=o,s.stringify=function $(d,h){if(typeof d=="string")return d;if(Array.isArray(d)){var v="";return d.forEach(function(L){v+=$(L,h)}),v}var S={type:d.type,content:$(d.content,h),tag:"span",classes:["token",d.type],attributes:{},language:h},E=d.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(S.classes,E):S.classes.push(E)),o.hooks.run("wrap",S);var I="";for(var C in S.attributes)I+=" "+C+'="'+(S.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+I+">"+S.content+"</"+S.tag+">"},!i.document)return i.addEventListener&&(o.disableWorkerMessageHandler||i.addEventListener("message",function($){var d=JSON.parse($.data),h=d.language,v=d.code,S=d.immediateClose;i.postMessage(o.highlight(v,o.languages[h],h)),S&&i.close()},!1)),o;var x=o.util.currentScript();function H(){o.manual||o.highlightAll()}if(x&&(o.filename=x.src,x.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var N=document.readyState;N==="loading"||N==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",H):window.requestAnimationFrame?window.requestAnimationFrame(H):window.setTimeout(H,16)}return o}(zt);typeof ss!="undefined"&&ss.exports&&(ss.exports=z),typeof global!="undefined"&&(global.Prism=z);z.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},z.languages.markup.tag.inside["attr-value"].inside.entity=z.languages.markup.entity,z.languages.markup.doctype.inside["internal-subset"].inside=z.languages.markup,z.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(z.languages.markup.tag,"addInlined",{value:function(i,n){var p={};p["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:z.languages[n]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var e={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};e["language-"+n]={pattern:/[\s\S]+/,inside:z.languages[n]};var o={};o[i]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:e},z.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(z.languages.markup.tag,"addAttribute",{value:function(i,n){z.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+i+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:z.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),z.languages.html=z.languages.markup,z.languages.mathml=z.languages.markup,z.languages.svg=z.languages.markup,z.languages.xml=z.languages.extend("markup",{}),z.languages.ssml=z.languages.xml,z.languages.atom=z.languages.xml,z.languages.rss=z.languages.xml;(function(i){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+n.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var p=i.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))})(z);z.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};z.languages.javascript=z.languages.extend("clike",{"class-name":[z.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),z.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,z.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:z.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:z.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:z.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:z.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:z.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),z.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:z.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),z.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),z.languages.markup&&(z.languages.markup.tag.addInlined("script","javascript"),z.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),z.languages.js=z.languages.javascript;(function(i){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",p={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},e={bash:p,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};i.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:e},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:p}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:e},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:e.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:e.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},p.inside=i.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=e.variable[1].inside,a=0;a<o.length;a++)s[o[a]]=i.languages.bash[o[a]];i.languages.shell=i.languages.bash})(z);z.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},z.languages.python["string-interpolation"].inside.interpolation.inside.rest=z.languages.python,z.languages.py=z.languages.python;(function(i){var n=/[*&][^\s[\]{},]+/,p=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,e="(?:"+p.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+p.source+")?)",o="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"}),s=`"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;function a(l,m){m=(m||"").replace(/m/g,"")+"m";var j=`([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|\\]|\\}|(?:[\r
]\\s*)?#))`.replace(/<<prop>>/g,function(){return e}).replace(/<<value>>/g,function(){return l});return RegExp(j,m)}i.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?
|\r)[ 	]+)\\S[^\r
]*(?:\\2[^\r
]+)*)`.replace(/<<prop>>/g,function(){return e})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\r
?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return e}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:a("false|true","i"),lookbehind:!0,alias:"important"},null:{pattern:a("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:a(s),lookbehind:!0,greedy:!0},number:{pattern:a("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:p,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},i.languages.yml=i.languages.yaml})(z);(function(){if(typeof z!="undefined"&&typeof document!="undefined"){var i="line-numbers",n=/\n(?!$)/g,p=z.plugins.lineNumbers={getLine:function(s,a){if(s.tagName==="PRE"&&s.classList.contains(i)){var l=s.querySelector(".line-numbers-rows");if(l){var m=parseInt(s.getAttribute("data-start"),10)||1,j=m+(l.children.length-1);a<m&&(a=m),a>j&&(a=j);var D=a-m;return l.children[D]}}},resize:function(s){o([s])},assumeViewportIndependence:!0},e=void 0;window.addEventListener("resize",function(){p.assumeViewportIndependence&&e===window.innerWidth||(e=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))}),z.hooks.add("complete",function(s){if(s.code){var a=s.element,l=a.parentNode;if(l&&/pre/i.test(l.nodeName)&&!a.querySelector(".line-numbers-rows")&&z.util.isActive(a,i)){a.classList.remove(i),l.classList.add(i);var m,j=s.code.match(n),D=j?j.length+1:1,x=new Array(D+1).join("<span></span>");(m=document.createElement("span")).setAttribute("aria-hidden","true"),m.className="line-numbers-rows",m.innerHTML=x,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),s.element.appendChild(m),o([l]),z.hooks.run("line-numbers",s)}}}),z.hooks.add("line-numbers",function(s){s.plugins=s.plugins||{},s.plugins.lineNumbers=!0})}function o(s){if((s=s.filter(function(l){var m,j=(m=l,m?window.getComputedStyle?getComputedStyle(m):m.currentStyle||null:null)["white-space"];return j==="pre-wrap"||j==="pre-line"})).length!=0){var a=s.map(function(l){var m=l.querySelector("code"),j=l.querySelector(".line-numbers-rows");if(m&&j){var D=l.querySelector(".line-numbers-sizer"),x=m.textContent.split(n);D||((D=document.createElement("span")).className="line-numbers-sizer",m.appendChild(D)),D.innerHTML="0",D.style.display="block";var H=D.getBoundingClientRect().height;return D.innerHTML="",{element:l,lines:x,lineHeights:[],oneLinerHeight:H,sizer:D}}}).filter(Boolean);a.forEach(function(l){var m=l.sizer,j=l.lines,D=l.lineHeights,x=l.oneLinerHeight;D[j.length-1]=void 0,j.forEach(function(H,N){if(H&&H.length>1){var $=m.appendChild(document.createElement("span"));$.style.display="block",$.textContent=H}else D[N]=x})}),a.forEach(function(l){for(var m=l.sizer,j=l.lineHeights,D=0,x=0;x<j.length;x++)j[x]===void 0&&(j[x]=m.children[D++].getBoundingClientRect().height)}),a.forEach(function(l){var m=l.sizer,j=l.element.querySelector(".line-numbers-rows");m.style.display="none",m.innerHTML="",l.lineHeights.forEach(function(D,x){j.children[x].style.height=D+"px"})})}}})();function At(i){let n;return{c(){n=k("nav"),n.innerHTML=`<a href="#spotkanie-1" class="svelte-f6k7du">Spotkanie 1</a> 
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
    <a href="#program-5" class="svelte-f6k7du">Numeruj parkingi</a> 
    <a href="#program-6" class="svelte-f6k7du">Aktualizuj osie</a>`,R(n,"class","svelte-f6k7du")},m(p,e){r(p,n,e)},p:T,i:T,o:T,d(p){p&&c(n)}}}class Et extends os{constructor(n){super(),as(this,n,null,At,ts,{})}}function It(i){let n,p,e;const o=i[2].default,s=it(o,i,i[1],null);return{c(){n=k("section"),p=k("div"),s&&s.c(),R(p,"class","center svelte-i9wwgh"),R(n,"id",i[0]),R(n,"class","line-numbers svelte-i9wwgh")},m(a,l){r(a,n,l),qs(n,p),s&&s.m(p,null),e=!0},p(a,[l]){s&&s.p&&(!e||l&2)&&ut(s,o,a,a[1],e?rt(o,a[1],l,null):kt(a[1]),null),(!e||l&1)&&R(n,"id",a[0])},i(a){e||(g(s,a),e=!0)},o(a){y(s,a),e=!1},d(a){a&&c(n),s&&s.d(a)}}}function Ct(i,n,p){let{$$slots:e={},$$scope:o}=n,{id:s}=n;return i.$$set=a=>{"id"in a&&p(0,s=a.id),"$$scope"in a&&p(1,o=a.$$scope)},[s,o,e]}class A extends os{constructor(n){super(),as(this,n,Ct,It,ts,{id:0})}}const Rt=i=>({}),ot=i=>({class:"code svelte-qgcnhp"});function xt(i){let n,p,e,o;const s=i[1].default,a=it(s,i,i[0],ot);return{c(){n=k("div"),p=k("div"),p.innerHTML=`<div class="button red svelte-qgcnhp"></div> 
        <div class="button yellow svelte-qgcnhp"></div> 
        <div class="button green svelte-qgcnhp"></div>`,e=f(),a&&a.c(),R(p,"class","menu svelte-qgcnhp"),R(n,"class","codeblock line-numbers svelte-qgcnhp")},m(l,m){r(l,n,m),qs(n,p),qs(n,e),a&&a.m(n,null),o=!0},p(l,[m]){a&&a.p&&(!o||m&1)&&ut(a,s,l,l[0],o?rt(s,l[0],m,Rt):kt(l[0]),ot)},i(l){o||(g(a,l),o=!0)},o(l){y(a,l),o=!1},d(l){l&&c(n),a&&a.d(l)}}}function Dt(i,n,p){let{$$slots:e={},$$scope:o}=n;return i.$$set=s=>{"$$scope"in s&&p(0,o=s.$$scope)},[o,e]}class M extends os{constructor(n){super(),as(this,n,Dt,xt,ts,{})}}function Pt(i){let n,p,e,o,s;return{c(){n=k("h1"),n.textContent="Wprowadzenie do API Revita",p=f(),e=k("h2"),e.innerHTML='<a href="https://dawid.huczynski.pl/revit-api" rel="nofollow">dawid.huczynski.pl/revit-api</a>',o=f(),s=k("h3"),s.innerHTML='<a href="dawid.huczynski@gmail.com">dawid.huczynski@gmail.com</a>'},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function Mt(i){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 1."},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Lt(i){let n,p,e;return{c(){n=k("h2"),n.textContent="Narz\u0119dzia i ustawianie \u015Brodowiska",p=f(),e=k("ul"),e.innerHTML=`<li><strong>Pyrevit</strong> - addon do tworzenia w\u0142asnych dodatk\xF3w oraz ma\u0142y kombajn z narz\u0119dziami: <br/> 
<a href="https://github.com/eirannejad/pyRevit/releases" rel="nofollow">https://github.com/eirannejad/pyRevit/releases</a>  <br/></li> 
<li><strong>RevitPythonShell</strong> - interaktywna konsola Pythona w Revicie: <br/> 
<a href="https://github.com/architecture-building-systems/revitpythonshell/releases" rel="nofollow">https://github.com/architecture-building-systems/revitpythonshell/releases</a></li> 
<li><strong>stubs</strong> - narz\u0119dzie do autouzupe\u0142niania Revitowych komend w VS Code: <br/> 
<a href="https://www.macro4bim.com/post/create-python-stubs" rel="nofollow">https://www.macro4bim.com/post/create-python-stubs</a>  <br/> 
<a href="https://github.com/gtalarico/ironpython-stubs" rel="nofollow">https://github.com/gtalarico/ironpython-stubs</a>  <br/></li> 
<li><strong>RevitLookup</strong> - narz\u0119dzie do podgl\u0105dania parametr\xF3w obiekt\xF3w Revicie: <br/> 
<a href="https://github.com/jeremytammik/RevitLookup" rel="nofollow">https://github.com/jeremytammik/RevitLookup</a></li> 
<li><strong>git</strong> - program do wersjonowania kodu i pracy w zespole, kombajn: <br/> 
<a href="https://git-scm.com/" rel="nofollow">https://git-scm.com/</a></li>`},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function Ft(i){let n,p,e;return{c(){n=k("h2"),n.textContent="Miejsca do szukania wiedzy:",p=f(),e=k("ul"),e.innerHTML=`<li><a href="https://www.revitapidocs.com/" rel="nofollow">https://www.revitapidocs.com/</a></li> 
<li><a href="https://apidocs.co/apps/revit/2021/" rel="nofollow">https://apidocs.co/apps/revit/2021/</a></li> 
<li><a href="https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html" rel="nofollow">https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html</a></li> 
<li><a href="https://thebuildingcoder.typepad.com/" rel="nofollow">https://thebuildingcoder.typepad.com/</a></li> 
<li><a href="http://wiki.theprovingground.org/revit-api" rel="nofollow">http://wiki.theprovingground.org/revit-api</a></li> 
<li><a href="https://dynamopythonprimer.gitbook.io/" rel="nofollow">https://dynamopythonprimer.gitbook.io/</a></li> 
<li><a href="https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists" rel="nofollow">https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists</a></li> 
<li><a href="https://github.com/gtalarico/python-revit-resources" rel="nofollow">https://github.com/gtalarico/python-revit-resources</a></li> 
<li><a href="https://github.com/architecture-building-systems/revitpythonshell" rel="nofollow">https://github.com/architecture-building-systems/revitpythonshell</a></li> 
<li><a href="https://github.com/Amoursol/dynamoPython" rel="nofollow">https://github.com/Amoursol/dynamoPython</a></li> 
<li><a href="https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/" rel="nofollow">https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/</a></li>`},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function Gt(i){let n,p=`<code class="language-python"><span class="token comment">#! python3</span>
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Ot(i){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Gt]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Spos\xF3b czytania skrypt\xF3w",p=f(),e=k("ul"),e.innerHTML=`<li><code>#! python3</code> - definiuje jakiego j\u0119zyka u\u017Cywa skrypt</li> 
<li><code># -*- coding: utf-8 -*-</code> - definuje zakres znak\xF3w unicode UTF-8 (tu te\u017C s\u0105 polskie znaki)</li>`,o=f(),w(s.$$.fragment)},m(l,m){r(l,n,m),r(l,p,m),r(l,e,m),r(l,o,m),_(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&c(n),l&&c(p),l&&c(e),l&&c(o),b(s,l)}}}function Ht(i){let n,p=`<code class="language-sh">pip install --user pipenv
pipenv install requests
pipenv run python main.py
pipenv shell

</code>`;return{c(){n=k("pre"),R(n,"class","language-sh")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Nt(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Ht]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="pipenv",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function Bt(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> sys
sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">'sciezka/do/modulow'</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Ut(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Bt]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="U\u017Cywanie bibliotek pythona",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function Wt(i){let n,p,e;return{c(){n=k("h2"),n.textContent="API a wersje pythona",p=f(),e=k("ul"),e.innerHTML=`<li>API Dynamo - zale\u017Cnie od wersji Dynamo IronPython 2.7 / python 3.8</li> 
<li>API RPSHELL (Python) - IronPython 2.7 / python 3.8</li> 
<li>API Macros - IronPython 2.7</li>`},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function qt(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="J\u0119zyk statyczny i dynamiczny",p=f(),e=k("p"),e.textContent="Types - typy (int, float, str, Object, Enum, Element, Id):",o=f(),s=k("ul"),s.innerHTML=`<li>static types</li> 
<li>dynamic types</li>`},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function Vt(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr <span class="token comment"># .NET's Common Language Runtime.</span>

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Zt(i){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Vt]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Podstawy API",p=f(),e=k("p"),e.innerHTML=`Kod do skopiowania do skrypt\xF3w Dynamo. NIE KOPIUJCIE TEGO, serio! :D<br/>
s\u0142owo klucz: \u201CMaintnance\u201D`,o=f(),w(s.$$.fragment)},m(l,m){r(l,n,m),r(l,p,m),r(l,e,m),r(l,o,m),_(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&c(n),l&&c(p),l&&c(e),l&&c(o),b(s,l)}}}function Kt(i){let n,p=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">feet_to_meter</span><span class="token punctuation">(</span>feet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> feet <span class="token operator">*</span> <span class="token number">0.3048</span>


<span class="token keyword">def</span> <span class="token function">meter_to_feet</span><span class="token punctuation">(</span>meter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> meter <span class="token operator">/</span> <span class="token number">0.3048</span>


<span class="token keyword">def</span> <span class="token function">sqr_feet_to_meter</span><span class="token punctuation">(</span>sqrfeet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sqrfeet <span class="token operator">*</span> <span class="token number">0.09290304</span>


<span class="token keyword">def</span> <span class="token function">sqr_meter_to_feet</span><span class="token punctuation">(</span>sqrmeter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sqrmeter <span class="token operator">/</span> <span class="token number">0.09290304</span>


</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Xt(i){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Kt]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Co ma skarpetka wsp\xF3lnego z Revitem?",p=f(),e=k("p"),e.textContent="jednostki",o=f(),w(s.$$.fragment)},m(l,m){r(l,n,m),r(l,p,m),r(l,e,m),r(l,o,m),_(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&c(n),l&&c(p),l&&c(e),l&&c(o),b(s,l)}}}function Yt(i){let n,p=`<code class="language-python">detail_line <span class="token operator">=</span> UnwrapElement<span class="token punctuation">(</span>IN<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
decimal_feet_length <span class="token operator">=</span> detail_line<span class="token punctuation">.</span>GeometryCurve<span class="token punctuation">.</span>Length
metric_length <span class="token operator">=</span> UnitUtils<span class="token punctuation">.</span>Convert<span class="token punctuation">(</span>
    decimal_feet_length<span class="token punctuation">,</span> 
    DisplayUnitType<span class="token punctuation">.</span>DUT_DECIMAL_FEET<span class="token punctuation">,</span> 
    DisplayUnitType<span class="token punctuation">.</span>DUT_MILLIMETERS<span class="token punctuation">)</span>
OUT <span class="token operator">=</span> metric_length

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Jt(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Yt]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Inny spos\xF3b na jednostki",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function Qt(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> os
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function na(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Qt]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Struktura API i przeszukiwanie",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function sa(i){let n,p,e,o,s;return{c(){n=k("h3"),n.innerHTML='<a href="./revit-struktura.html">Autodesk.Revit</a>',p=f(),e=k("p"),e.textContent="U\u017Cyteczne komendy do przegl\u0105dania:",o=f(),s=k("ul"),s.innerHTML=`<li>dir <code>for x in dir(element):print(x)</code></li> 
<li>help(element)</li>`},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function ea(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Podstawowe klasy",p=f(),e=k("h2"),e.textContent="Element.*",o=f(),s=k("div"),s.innerHTML=`<p>ArePhasesModifiable<br/>
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
setElementType<br/></p>`,R(s,"class","trzy-kolumny")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function ta(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Podstawowe klasy",p=f(),e=k("h2"),e.textContent="Wall.*",o=f(),s=k("div"),s.innerHTML=`<p>ArePhasesModifiable<br/>
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
setElementType<br/></p>`,R(s,"class","trzy-kolumny")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function aa(i){let n,p,e;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("ul"),e.innerHTML=`<li>mo\u017Cliwo\u015Bci</li> 
<li>tworzenie interfejsu do skryptu</li> 
<li>ustawianie addin\xF3w pod firm\u0119 (pipeline developera)</li>`},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function oa(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-tab.png" alt="pyrevit-tab"/>',o=f(),s=k("ol"),s.innerHTML=`<li>Tab coloring - koloruje wam zak\u0142adki wg otwartych projekt\xF3w i rodzin. Minify revit UI - chowa wam g\xF3rne zak\u0142adki kt\xF3rych nie u\u017Cywacie np mi zostawia tylko Architecture, Annotate i Modify ( ustawia si\u0119 to klikaj\u0105c na ikonk\u0119 s SHIFTEM)</li> 
<li>Sync Views - synchronizuje widoki np jak zmieniasz cz\u0119sto rzuty (np. sprawdzaj\u0105c szachty) to maj\u0105c w\u0142\u0105czon\u0105 t\u0105 opcj\u0119 zawsze widok l\u0105duje w tym samym miejscu co na poprzednim rzucie (resetuje si\u0119 np w momencie wej\u015Bcia na widok 3d)</li> 
<li>Zaawansowane zaznaczanie - dzia\u0142a jak Pami\u0119\u0107 w kalkulatorze: zaznaczasz par\u0119 obiekt\xF3w dodajesz do pami\u0119ci, zaznaczasz inne dodajesz do pami\u0119ci. potem jak klikniesz MRead to zaznaczone zostan\u0105 wszystkie poprzednio zaznaczone elementy</li> 
<li>Make Pattern - szybko mo\u017Cesz tworzy\u0107 szrafur\u0119 np trawy, kostki, wz\xF3r p\u0142ytek itp.</li> 
<li>Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzaj\u0105ce si\u0119 legendy a potem kopiujesz je na wszystkie inne rysunki i wklejaj\u0105 si\u0119 w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje du\u017Co rysunk\xF3w wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunk\xF3w kt\xF3re przeklejam do tego narz\u0119dzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.</li> 
<li>Duzo u\u0142atwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plik\xF3w.</li> 
<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li> 
<li>Team - wa\u017Cna rzecz do sprawdzania: Who did that? kto stworzy\u0142 elementi kto ostatni go edytowa\u0142.</li> 
<li>Czyszczenie rzeczy kt\xF3re czasami jest zbyt dobre, ale przynajmniej potrafi wyczy\u015Bci\u0107 elementy kt\xF3rych nie czy\u015Bci purge.</li>`},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function pa(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-sheets.png" alt="pyrevit-sheets"/>',o=f(),s=k("ol"),s.innerHTML="<li>Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzaj\u0105ce si\u0119 legendy a potem kopiujesz je na wszystkie inne rysunki i wklejaj\u0105 si\u0119 w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje du\u017Co rysunk\xF3w wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunk\xF3w kt\xF3re przeklejam do tego narz\u0119dzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.</li>",R(s,"start","5")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function la(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-views.png" alt="pyrevit-views"/>',o=f(),s=k("ol"),s.innerHTML="<li>Duzo u\u0142atwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plik\xF3w.</li>",R(s,"start","6")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function ia(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-checks1.png" alt="pyrevit-checks1"/>',o=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",R(s,"start","7")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function ca(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-checks2.png" alt="pyrevit-checks2"/>',o=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",R(s,"start","7")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function ra(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-checks3.png" alt="pyrevit-checks3"/>',o=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",R(s,"start","7")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function ua(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-checks4.png" alt="pyrevit-checks4"/>',o=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",R(s,"start","7")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function ka(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-who.png" alt="pyrevit-who"/>',o=f(),s=k("ol"),s.innerHTML="<li>Team - wa\u017Cna rzecz do sprawdzania: Who did that? kto stworzy\u0142 elementi kto ostatni go edytowa\u0142.</li>",R(s,"start","8")},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function fa(i){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 2."},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function ma(i){let n,p=`<code class="language-python"><span class="token keyword">class</span> <span class="token class-name">Osoba</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function da(i){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[ma]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Klasy",p=f(),e=k("p"),e.textContent="Czym s\u0105 klasy i ich dziedziczenie",o=f(),w(s.$$.fragment)},m(l,m){r(l,n,m),r(l,p,m),r(l,e,m),r(l,o,m),_(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&c(n),l&&c(p),l&&c(e),l&&c(o),b(s,l)}}}function $a(i){let n,p,e;return{c(){n=k("h2"),n.textContent="Pomocne biblioteki Pythona",p=f(),e=k("ul"),e.innerHTML=`<li>math</li> 
<li>itertools</li> 
<li>collections.namedtuple</li> 
<li>pandas</li> 
<li>numpy</li> 
<li>bokeh / plotly</li> 
<li>pillow</li> 
<li>k3d</li>`},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function ga(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB<span class="token punctuation">.</span>Level

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitNodes"</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> Revit
clr<span class="token punctuation">.</span>ImportExtensions<span class="token punctuation">(</span>Revit<span class="token punctuation">.</span>Elements<span class="token punctuation">)</span>
clr<span class="token punctuation">.</span>ImportExtensions<span class="token punctuation">(</span>Revit<span class="token punctuation">.</span>GeometryConversion<span class="token punctuation">)</span>
Revit<span class="token punctuation">.</span>Elements<span class="token punctuation">.</span>Level

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function ya(i){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[ga]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Dynamo",p=f(),e=k("ul"),e.innerHTML=`<li>UnwrapElement</li> 
<li>Transaction a TransactionGroup a TransactionManager</li> 
<li>uidoc.Selection</li> 
<li>pr\xF3ba wyja\u015Bnienia r\xF3\u017Cnic (importowane biblioteki).</li>`,o=f(),w(s.$$.fragment)},m(l,m){r(l,n,m),r(l,p,m),r(l,e,m),r(l,o,m),_(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&c(n),l&&c(p),l&&c(e),l&&c(o),b(s,l)}}}function _a(i){let n,p=`<code class="language-python">input_list_of_numbers <span class="token operator">=</span> IN<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">#Here we take an input</span>
output_list_of_numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">#We create an empty list to output</span>

<span class="token keyword">for</span> number <span class="token keyword">in</span> input_list_of_numbers<span class="token punctuation">:</span> <span class="token comment">#Looping through input</span>
    new_number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">#Adding 1 to each number</span>
    output_list_of_numbers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>new_number<span class="token punctuation">)</span>

OUT <span class="token operator">=</span> output_list_of_numbers <span class="token comment">#Here we output the new '+1' list</span>

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function ba(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[_a]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Dynamo IN-OUT",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function wa(i){let n,p,e;return{c(){n=k("h2"),n.textContent="Revit Python Shell",p=f(),e=k("p"),e.textContent="Interaktywna zabawa"},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function va(i){let n,p=`<code class="language-python">collector <span class="token operator">=</span> FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function ha(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[va]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="FilteredElementCollector",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function ja(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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
</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Sa(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[ja]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="uidoc.Selection",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function Ta(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function za(i){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Ta]},$$scope:{ctx:i}}}),{c(){n=k("h3"),n.textContent="Filtrowanie + zaznaczanie",p=f(),e=k("p"),e.textContent="Skrypt do wybierania element\xF3w i zanzaczania ich w modelu",o=f(),w(s.$$.fragment)},m(l,m){r(l,n,m),r(l,p,m),r(l,e,m),r(l,o,m),_(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&c(n),l&&c(p),l&&c(e),l&&c(o),b(s,l)}}}function Aa(i){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 3."},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Ea(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Transaction",p=f(),e=k("p"),e.textContent="Jak dzia\u0142a wprowadzanie zmian w modelu. S\u0105 trzy typy transakcji:",o=f(),s=k("ul"),s.innerHTML=`<li>Transaction</li> 
<li>TransactionGroup</li> 
<li>TransactionManager - Dynamo</li>`},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function Ia(i){let n,p=`<code class="language-python">TransactionManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>EnsureInTransaction<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
zrob_cos<span class="token punctuation">(</span><span class="token punctuation">)</span>
TransactionManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>TransactionTaskDone<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Ca(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Ia]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="TransactionManager - Dynamo",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function Ra(i){let n,p=`<code class="language-python">t <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">'Opis'</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
	zrob_cos<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>RollBack<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function xa(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Ra]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Transaction",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function Da(i){let n,p=`<code class="language-python">tg <span class="token operator">=</span> TransactionGroup<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">"&#123;&#125; number assing"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>el_type<span class="token punctuation">)</span><span class="token punctuation">)</span>
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Pa(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Da]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="TransactionGroup",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function Ma(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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
</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function La(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Ma]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Parametry",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function Fa(i){let n,p,e;return{c(){n=k("h2"),n.textContent="Rodzaje parametr\xF3w",p=f(),e=k("ul"),e.innerHTML=`<li>String [str] <code>Nazwa Budynku</code></li> 
<li>Double [float] <code>3.14</code></li> 
<li>Integer [int]  <code>2345</code></li> 
<li>Element - inny obiekt Revitowy (Level)</li> 
<li>BuiltInParameter</li>`},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function Ga(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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
</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function Oa(i){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Ga]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="ParameterMap",p=f(),e=k("p"),e.textContent="Jak wyci\u0105gn\u0105\u0107 informacje o parametrach",o=f(),w(s.$$.fragment)},m(l,m){r(l,n,m),r(l,p,m),r(l,e,m),r(l,o,m),_(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&c(n),l&&c(p),l&&c(e),l&&c(o),b(s,l)}}}function Ha(i){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 4."},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Na(i){let n,p,e;return{c(){n=k("h2"),n.textContent="W\u0142asna zak\u0142adka w Revicie",p=f(),e=k("p"),e.innerHTML='<img src="./dh-tab.jpg" alt="dh-tab"/>'},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function Ba(i){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Przyk\u0142ad od wi\u0119kszego kolegi z bran\u017Cy",p=f(),e=k("p"),e.innerHTML='<a href="https://youtu.be/5Pup98apob4" rel="nofollow">Webinar BIG</a>',o=f(),s=k("p"),s.innerHTML='<img src="./BIG-ribbon.jpg" alt="BIG-ribbon"/>'},m(a,l){r(a,n,l),r(a,p,l),r(a,e,l),r(a,o,l),r(a,s,l)},p:T,d(a){a&&c(n),a&&c(p),a&&c(e),a&&c(o),a&&c(s)}}}function Ua(i){let n,p,e,o;return{c(){n=k("h2"),n.textContent="Struktura folder\xF3w:",p=f(),e=k("img"),yt(e.src,o="folder.svg")||R(e,"src",o),R(e,"alt","")},m(s,a){r(s,n,a),r(s,p,a),r(s,e,a)},p:T,d(s){s&&c(n),s&&c(p),s&&c(e)}}}function Wa(i){let n;return{c(){n=k("h2"),n.textContent="Szybkie uruchamianie"},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function qa(i){let n,p,e;return{c(){n=k("h2"),n.textContent="Views",p=f(),e=k("ul"),e.innerHTML=`<li>View</li> 
<li>FloorView</li> 
<li>Viewport</li>`},m(o,s){r(o,n,s),r(o,p,s),r(o,e,s)},p:T,d(o){o&&c(n),o&&c(p),o&&c(e)}}}function Va(i){let n;return{c(){n=k("h2"),n.textContent="ViewTemplates"},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Za(i){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 5."},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Ka(i){let n;return{c(){n=k("h2"),n.textContent="Linked documents"},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Xa(i){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 6."},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Ya(i){let n;return{c(){n=k("h2"),n.textContent="Wymiarowanie"},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Ja(i){let n;return{c(){n=k("h1"),n.textContent="Praca wsp\xF3lna:"},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function Qa(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function no(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[Qa]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Narysuj \u015Bcian\u0119",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function so(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function eo(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[so]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Modyfikuj parametry \u015Bciany",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function to(i){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){r(e,n,o),n.innerHTML=p},p:T,d(e){e&&c(n)}}}function ao(i){let n,p,e,o;return e=new M({props:{$$slots:{default:[to]},$$scope:{ctx:i}}}),{c(){n=k("h2"),n.textContent="Zbierz dane ze \u015Bcian",p=f(),w(e.$$.fragment)},m(s,a){r(s,n,a),r(s,p,a),_(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&c(n),s&&c(p),b(e,s)}}}function oo(i){let n;return{c(){n=k("h2"),n.textContent="Wstaw rodzin\u0119"},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function po(i){let n;return{c(){n=k("h2"),n.textContent="Numeruj parkingi"},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function lo(i){let n;return{c(){n=k("h2"),n.textContent="Aktualizuj osie"},m(p,e){r(p,n,e)},p:T,d(p){p&&c(n)}}}function io(i){let n,p,e,o,s,a,l,m,j,D,x,H,N,$,d,h,v,S,E,I,C,L,P,Q,V,Wn,Y,qn,Z,F,G,K,O,nn,U,Vn,B,J,W,sn,X,en,q,tn,an,ps,on,ls,pn,is,ln,cs,cn,rs,rn,us,un,ks,kn,fs,fn,ms,mn,ds,dn,$s,$n,gs,gn,ys,yn,_s,_n,bs,bn,ws,wn,vs,vn,hs,hn,js,jn,Ss,Sn,Ts,Tn,zs,zn,As,An,Es,En,Is,In,Cs,Cn,Rs,Rn,xs,xn,Ds,Dn,Ps,Pn,Ms,Mn,Ls,Ln,Fs,Fn,Gs,Gn,Os,On,Hs,Hn,Ns,Nn,Bs,Bn,Us,Un,Zn;return document.title=n=pt,e=new Et({}),s=new A({props:{$$slots:{default:[Pt]},$$scope:{ctx:i}}}),l=new A({props:{id:"spotkanie-1",$$slots:{default:[Mt]},$$scope:{ctx:i}}}),j=new A({props:{$$slots:{default:[Lt]},$$scope:{ctx:i}}}),x=new A({props:{$$slots:{default:[Ft]},$$scope:{ctx:i}}}),N=new A({props:{$$slots:{default:[Ot]},$$scope:{ctx:i}}}),d=new A({props:{$$slots:{default:[Nt]},$$scope:{ctx:i}}}),v=new A({props:{$$slots:{default:[Ut]},$$scope:{ctx:i}}}),E=new A({props:{$$slots:{default:[Wt]},$$scope:{ctx:i}}}),C=new A({props:{$$slots:{default:[qt]},$$scope:{ctx:i}}}),P=new A({props:{$$slots:{default:[Zt]},$$scope:{ctx:i}}}),V=new A({props:{$$slots:{default:[Xt]},$$scope:{ctx:i}}}),Y=new A({props:{$$slots:{default:[Jt]},$$scope:{ctx:i}}}),Z=new A({props:{$$slots:{default:[na]},$$scope:{ctx:i}}}),G=new A({props:{$$slots:{default:[sa]},$$scope:{ctx:i}}}),O=new A({props:{$$slots:{default:[ea]},$$scope:{ctx:i}}}),U=new A({props:{$$slots:{default:[ta]},$$scope:{ctx:i}}}),B=new A({props:{$$slots:{default:[aa]},$$scope:{ctx:i}}}),W=new A({props:{$$slots:{default:[oa]},$$scope:{ctx:i}}}),X=new A({props:{$$slots:{default:[pa]},$$scope:{ctx:i}}}),q=new A({props:{$$slots:{default:[la]},$$scope:{ctx:i}}}),an=new A({props:{$$slots:{default:[ia]},$$scope:{ctx:i}}}),on=new A({props:{$$slots:{default:[ca]},$$scope:{ctx:i}}}),pn=new A({props:{$$slots:{default:[ra]},$$scope:{ctx:i}}}),ln=new A({props:{$$slots:{default:[ua]},$$scope:{ctx:i}}}),cn=new A({props:{$$slots:{default:[ka]},$$scope:{ctx:i}}}),rn=new A({props:{id:"spotkanie-2",$$slots:{default:[fa]},$$scope:{ctx:i}}}),un=new A({props:{$$slots:{default:[da]},$$scope:{ctx:i}}}),kn=new A({props:{$$slots:{default:[$a]},$$scope:{ctx:i}}}),fn=new A({props:{$$slots:{default:[ya]},$$scope:{ctx:i}}}),mn=new A({props:{$$slots:{default:[ba]},$$scope:{ctx:i}}}),dn=new A({props:{$$slots:{default:[wa]},$$scope:{ctx:i}}}),$n=new A({props:{$$slots:{default:[ha]},$$scope:{ctx:i}}}),gn=new A({props:{$$slots:{default:[Sa]},$$scope:{ctx:i}}}),yn=new A({props:{$$slots:{default:[za]},$$scope:{ctx:i}}}),_n=new A({props:{id:"spotkanie-3",$$slots:{default:[Aa]},$$scope:{ctx:i}}}),bn=new A({props:{$$slots:{default:[Ea]},$$scope:{ctx:i}}}),wn=new A({props:{$$slots:{default:[Ca]},$$scope:{ctx:i}}}),vn=new A({props:{$$slots:{default:[xa]},$$scope:{ctx:i}}}),hn=new A({props:{$$slots:{default:[Pa]},$$scope:{ctx:i}}}),jn=new A({props:{$$slots:{default:[La]},$$scope:{ctx:i}}}),Sn=new A({props:{$$slots:{default:[Fa]},$$scope:{ctx:i}}}),Tn=new A({props:{$$slots:{default:[Oa]},$$scope:{ctx:i}}}),zn=new A({props:{id:"spotkanie-4",$$slots:{default:[Ha]},$$scope:{ctx:i}}}),An=new A({props:{$$slots:{default:[Na]},$$scope:{ctx:i}}}),En=new A({props:{$$slots:{default:[Ba]},$$scope:{ctx:i}}}),In=new A({props:{$$slots:{default:[Ua]},$$scope:{ctx:i}}}),Cn=new A({props:{$$slots:{default:[Wa]},$$scope:{ctx:i}}}),Rn=new A({props:{$$slots:{default:[qa]},$$scope:{ctx:i}}}),xn=new A({props:{$$slots:{default:[Va]},$$scope:{ctx:i}}}),Dn=new A({props:{id:"spotkanie-5",$$slots:{default:[Za]},$$scope:{ctx:i}}}),Pn=new A({props:{$$slots:{default:[Ka]},$$scope:{ctx:i}}}),Mn=new A({props:{id:"spotkanie-6",$$slots:{default:[Xa]},$$scope:{ctx:i}}}),Ln=new A({props:{$$slots:{default:[Ya]},$$scope:{ctx:i}}}),Fn=new A({props:{$$slots:{default:[Ja]},$$scope:{ctx:i}}}),Gn=new A({props:{id:"program-1",$$slots:{default:[no]},$$scope:{ctx:i}}}),On=new A({props:{id:"program-2",$$slots:{default:[eo]},$$scope:{ctx:i}}}),Hn=new A({props:{id:"program-3",$$slots:{default:[ao]},$$scope:{ctx:i}}}),Nn=new A({props:{id:"program-4",$$slots:{default:[oo]},$$scope:{ctx:i}}}),Bn=new A({props:{id:"program-5",$$slots:{default:[po]},$$scope:{ctx:i}}}),Un=new A({props:{id:"program-6",$$slots:{default:[lo]},$$scope:{ctx:i}}}),{c(){p=f(),w(e.$$.fragment),o=f(),w(s.$$.fragment),a=f(),w(l.$$.fragment),m=f(),w(j.$$.fragment),D=f(),w(x.$$.fragment),H=f(),w(N.$$.fragment),$=f(),w(d.$$.fragment),h=f(),w(v.$$.fragment),S=f(),w(E.$$.fragment),I=f(),w(C.$$.fragment),L=f(),w(P.$$.fragment),Q=f(),w(V.$$.fragment),Wn=f(),w(Y.$$.fragment),qn=f(),w(Z.$$.fragment),F=f(),w(G.$$.fragment),K=f(),w(O.$$.fragment),nn=f(),w(U.$$.fragment),Vn=f(),w(B.$$.fragment),J=f(),w(W.$$.fragment),sn=f(),w(X.$$.fragment),en=f(),w(q.$$.fragment),tn=f(),w(an.$$.fragment),ps=f(),w(on.$$.fragment),ls=f(),w(pn.$$.fragment),is=f(),w(ln.$$.fragment),cs=f(),w(cn.$$.fragment),rs=f(),w(rn.$$.fragment),us=f(),w(un.$$.fragment),ks=f(),w(kn.$$.fragment),fs=f(),w(fn.$$.fragment),ms=f(),w(mn.$$.fragment),ds=f(),w(dn.$$.fragment),$s=f(),w($n.$$.fragment),gs=f(),w(gn.$$.fragment),ys=f(),w(yn.$$.fragment),_s=f(),w(_n.$$.fragment),bs=f(),w(bn.$$.fragment),ws=f(),w(wn.$$.fragment),vs=f(),w(vn.$$.fragment),hs=f(),w(hn.$$.fragment),js=f(),w(jn.$$.fragment),Ss=f(),w(Sn.$$.fragment),Ts=f(),w(Tn.$$.fragment),zs=f(),w(zn.$$.fragment),As=f(),w(An.$$.fragment),Es=f(),w(En.$$.fragment),Is=f(),w(In.$$.fragment),Cs=f(),w(Cn.$$.fragment),Rs=f(),w(Rn.$$.fragment),xs=f(),w(xn.$$.fragment),Ds=f(),w(Dn.$$.fragment),Ps=f(),w(Pn.$$.fragment),Ms=f(),w(Mn.$$.fragment),Ls=f(),w(Ln.$$.fragment),Fs=f(),w(Fn.$$.fragment),Gs=f(),w(Gn.$$.fragment),Os=f(),w(On.$$.fragment),Hs=f(),w(Hn.$$.fragment),Ns=f(),w(Nn.$$.fragment),Bs=f(),w(Bn.$$.fragment),Us=f(),w(Un.$$.fragment)},m(t,u){r(t,p,u),_(e,t,u),r(t,o,u),_(s,t,u),r(t,a,u),_(l,t,u),r(t,m,u),_(j,t,u),r(t,D,u),_(x,t,u),r(t,H,u),_(N,t,u),r(t,$,u),_(d,t,u),r(t,h,u),_(v,t,u),r(t,S,u),_(E,t,u),r(t,I,u),_(C,t,u),r(t,L,u),_(P,t,u),r(t,Q,u),_(V,t,u),r(t,Wn,u),_(Y,t,u),r(t,qn,u),_(Z,t,u),r(t,F,u),_(G,t,u),r(t,K,u),_(O,t,u),r(t,nn,u),_(U,t,u),r(t,Vn,u),_(B,t,u),r(t,J,u),_(W,t,u),r(t,sn,u),_(X,t,u),r(t,en,u),_(q,t,u),r(t,tn,u),_(an,t,u),r(t,ps,u),_(on,t,u),r(t,ls,u),_(pn,t,u),r(t,is,u),_(ln,t,u),r(t,cs,u),_(cn,t,u),r(t,rs,u),_(rn,t,u),r(t,us,u),_(un,t,u),r(t,ks,u),_(kn,t,u),r(t,fs,u),_(fn,t,u),r(t,ms,u),_(mn,t,u),r(t,ds,u),_(dn,t,u),r(t,$s,u),_($n,t,u),r(t,gs,u),_(gn,t,u),r(t,ys,u),_(yn,t,u),r(t,_s,u),_(_n,t,u),r(t,bs,u),_(bn,t,u),r(t,ws,u),_(wn,t,u),r(t,vs,u),_(vn,t,u),r(t,hs,u),_(hn,t,u),r(t,js,u),_(jn,t,u),r(t,Ss,u),_(Sn,t,u),r(t,Ts,u),_(Tn,t,u),r(t,zs,u),_(zn,t,u),r(t,As,u),_(An,t,u),r(t,Es,u),_(En,t,u),r(t,Is,u),_(In,t,u),r(t,Cs,u),_(Cn,t,u),r(t,Rs,u),_(Rn,t,u),r(t,xs,u),_(xn,t,u),r(t,Ds,u),_(Dn,t,u),r(t,Ps,u),_(Pn,t,u),r(t,Ms,u),_(Mn,t,u),r(t,Ls,u),_(Ln,t,u),r(t,Fs,u),_(Fn,t,u),r(t,Gs,u),_(Gn,t,u),r(t,Os,u),_(On,t,u),r(t,Hs,u),_(Hn,t,u),r(t,Ns,u),_(Nn,t,u),r(t,Bs,u),_(Bn,t,u),r(t,Us,u),_(Un,t,u),Zn=!0},p(t,[u]){(!Zn||u&0)&&n!==(n=pt)&&(document.title=n);const Xs={};u&1&&(Xs.$$scope={dirty:u,ctx:t}),s.$set(Xs);const Ys={};u&1&&(Ys.$$scope={dirty:u,ctx:t}),l.$set(Ys);const Js={};u&1&&(Js.$$scope={dirty:u,ctx:t}),j.$set(Js);const Qs={};u&1&&(Qs.$$scope={dirty:u,ctx:t}),x.$set(Qs);const ne={};u&1&&(ne.$$scope={dirty:u,ctx:t}),N.$set(ne);const se={};u&1&&(se.$$scope={dirty:u,ctx:t}),d.$set(se);const ee={};u&1&&(ee.$$scope={dirty:u,ctx:t}),v.$set(ee);const te={};u&1&&(te.$$scope={dirty:u,ctx:t}),E.$set(te);const ae={};u&1&&(ae.$$scope={dirty:u,ctx:t}),C.$set(ae);const oe={};u&1&&(oe.$$scope={dirty:u,ctx:t}),P.$set(oe);const pe={};u&1&&(pe.$$scope={dirty:u,ctx:t}),V.$set(pe);const le={};u&1&&(le.$$scope={dirty:u,ctx:t}),Y.$set(le);const ie={};u&1&&(ie.$$scope={dirty:u,ctx:t}),Z.$set(ie);const ce={};u&1&&(ce.$$scope={dirty:u,ctx:t}),G.$set(ce);const re={};u&1&&(re.$$scope={dirty:u,ctx:t}),O.$set(re);const ue={};u&1&&(ue.$$scope={dirty:u,ctx:t}),U.$set(ue);const ke={};u&1&&(ke.$$scope={dirty:u,ctx:t}),B.$set(ke);const fe={};u&1&&(fe.$$scope={dirty:u,ctx:t}),W.$set(fe);const me={};u&1&&(me.$$scope={dirty:u,ctx:t}),X.$set(me);const de={};u&1&&(de.$$scope={dirty:u,ctx:t}),q.$set(de);const $e={};u&1&&($e.$$scope={dirty:u,ctx:t}),an.$set($e);const ge={};u&1&&(ge.$$scope={dirty:u,ctx:t}),on.$set(ge);const ye={};u&1&&(ye.$$scope={dirty:u,ctx:t}),pn.$set(ye);const _e={};u&1&&(_e.$$scope={dirty:u,ctx:t}),ln.$set(_e);const be={};u&1&&(be.$$scope={dirty:u,ctx:t}),cn.$set(be);const we={};u&1&&(we.$$scope={dirty:u,ctx:t}),rn.$set(we);const ve={};u&1&&(ve.$$scope={dirty:u,ctx:t}),un.$set(ve);const he={};u&1&&(he.$$scope={dirty:u,ctx:t}),kn.$set(he);const je={};u&1&&(je.$$scope={dirty:u,ctx:t}),fn.$set(je);const Se={};u&1&&(Se.$$scope={dirty:u,ctx:t}),mn.$set(Se);const Te={};u&1&&(Te.$$scope={dirty:u,ctx:t}),dn.$set(Te);const ze={};u&1&&(ze.$$scope={dirty:u,ctx:t}),$n.$set(ze);const Ae={};u&1&&(Ae.$$scope={dirty:u,ctx:t}),gn.$set(Ae);const Ee={};u&1&&(Ee.$$scope={dirty:u,ctx:t}),yn.$set(Ee);const Ie={};u&1&&(Ie.$$scope={dirty:u,ctx:t}),_n.$set(Ie);const Ce={};u&1&&(Ce.$$scope={dirty:u,ctx:t}),bn.$set(Ce);const Re={};u&1&&(Re.$$scope={dirty:u,ctx:t}),wn.$set(Re);const xe={};u&1&&(xe.$$scope={dirty:u,ctx:t}),vn.$set(xe);const De={};u&1&&(De.$$scope={dirty:u,ctx:t}),hn.$set(De);const Pe={};u&1&&(Pe.$$scope={dirty:u,ctx:t}),jn.$set(Pe);const Me={};u&1&&(Me.$$scope={dirty:u,ctx:t}),Sn.$set(Me);const Le={};u&1&&(Le.$$scope={dirty:u,ctx:t}),Tn.$set(Le);const Fe={};u&1&&(Fe.$$scope={dirty:u,ctx:t}),zn.$set(Fe);const Ge={};u&1&&(Ge.$$scope={dirty:u,ctx:t}),An.$set(Ge);const Oe={};u&1&&(Oe.$$scope={dirty:u,ctx:t}),En.$set(Oe);const He={};u&1&&(He.$$scope={dirty:u,ctx:t}),In.$set(He);const Ne={};u&1&&(Ne.$$scope={dirty:u,ctx:t}),Cn.$set(Ne);const Be={};u&1&&(Be.$$scope={dirty:u,ctx:t}),Rn.$set(Be);const Ue={};u&1&&(Ue.$$scope={dirty:u,ctx:t}),xn.$set(Ue);const We={};u&1&&(We.$$scope={dirty:u,ctx:t}),Dn.$set(We);const qe={};u&1&&(qe.$$scope={dirty:u,ctx:t}),Pn.$set(qe);const Ve={};u&1&&(Ve.$$scope={dirty:u,ctx:t}),Mn.$set(Ve);const Ze={};u&1&&(Ze.$$scope={dirty:u,ctx:t}),Ln.$set(Ze);const Ke={};u&1&&(Ke.$$scope={dirty:u,ctx:t}),Fn.$set(Ke);const Xe={};u&1&&(Xe.$$scope={dirty:u,ctx:t}),Gn.$set(Xe);const Ye={};u&1&&(Ye.$$scope={dirty:u,ctx:t}),On.$set(Ye);const Je={};u&1&&(Je.$$scope={dirty:u,ctx:t}),Hn.$set(Je);const Qe={};u&1&&(Qe.$$scope={dirty:u,ctx:t}),Nn.$set(Qe);const nt={};u&1&&(nt.$$scope={dirty:u,ctx:t}),Bn.$set(nt);const st={};u&1&&(st.$$scope={dirty:u,ctx:t}),Un.$set(st)},i(t){Zn||(g(e.$$.fragment,t),g(s.$$.fragment,t),g(l.$$.fragment,t),g(j.$$.fragment,t),g(x.$$.fragment,t),g(N.$$.fragment,t),g(d.$$.fragment,t),g(v.$$.fragment,t),g(E.$$.fragment,t),g(C.$$.fragment,t),g(P.$$.fragment,t),g(V.$$.fragment,t),g(Y.$$.fragment,t),g(Z.$$.fragment,t),g(G.$$.fragment,t),g(O.$$.fragment,t),g(U.$$.fragment,t),g(B.$$.fragment,t),g(W.$$.fragment,t),g(X.$$.fragment,t),g(q.$$.fragment,t),g(an.$$.fragment,t),g(on.$$.fragment,t),g(pn.$$.fragment,t),g(ln.$$.fragment,t),g(cn.$$.fragment,t),g(rn.$$.fragment,t),g(un.$$.fragment,t),g(kn.$$.fragment,t),g(fn.$$.fragment,t),g(mn.$$.fragment,t),g(dn.$$.fragment,t),g($n.$$.fragment,t),g(gn.$$.fragment,t),g(yn.$$.fragment,t),g(_n.$$.fragment,t),g(bn.$$.fragment,t),g(wn.$$.fragment,t),g(vn.$$.fragment,t),g(hn.$$.fragment,t),g(jn.$$.fragment,t),g(Sn.$$.fragment,t),g(Tn.$$.fragment,t),g(zn.$$.fragment,t),g(An.$$.fragment,t),g(En.$$.fragment,t),g(In.$$.fragment,t),g(Cn.$$.fragment,t),g(Rn.$$.fragment,t),g(xn.$$.fragment,t),g(Dn.$$.fragment,t),g(Pn.$$.fragment,t),g(Mn.$$.fragment,t),g(Ln.$$.fragment,t),g(Fn.$$.fragment,t),g(Gn.$$.fragment,t),g(On.$$.fragment,t),g(Hn.$$.fragment,t),g(Nn.$$.fragment,t),g(Bn.$$.fragment,t),g(Un.$$.fragment,t),Zn=!0)},o(t){y(e.$$.fragment,t),y(s.$$.fragment,t),y(l.$$.fragment,t),y(j.$$.fragment,t),y(x.$$.fragment,t),y(N.$$.fragment,t),y(d.$$.fragment,t),y(v.$$.fragment,t),y(E.$$.fragment,t),y(C.$$.fragment,t),y(P.$$.fragment,t),y(V.$$.fragment,t),y(Y.$$.fragment,t),y(Z.$$.fragment,t),y(G.$$.fragment,t),y(O.$$.fragment,t),y(U.$$.fragment,t),y(B.$$.fragment,t),y(W.$$.fragment,t),y(X.$$.fragment,t),y(q.$$.fragment,t),y(an.$$.fragment,t),y(on.$$.fragment,t),y(pn.$$.fragment,t),y(ln.$$.fragment,t),y(cn.$$.fragment,t),y(rn.$$.fragment,t),y(un.$$.fragment,t),y(kn.$$.fragment,t),y(fn.$$.fragment,t),y(mn.$$.fragment,t),y(dn.$$.fragment,t),y($n.$$.fragment,t),y(gn.$$.fragment,t),y(yn.$$.fragment,t),y(_n.$$.fragment,t),y(bn.$$.fragment,t),y(wn.$$.fragment,t),y(vn.$$.fragment,t),y(hn.$$.fragment,t),y(jn.$$.fragment,t),y(Sn.$$.fragment,t),y(Tn.$$.fragment,t),y(zn.$$.fragment,t),y(An.$$.fragment,t),y(En.$$.fragment,t),y(In.$$.fragment,t),y(Cn.$$.fragment,t),y(Rn.$$.fragment,t),y(xn.$$.fragment,t),y(Dn.$$.fragment,t),y(Pn.$$.fragment,t),y(Mn.$$.fragment,t),y(Ln.$$.fragment,t),y(Fn.$$.fragment,t),y(Gn.$$.fragment,t),y(On.$$.fragment,t),y(Hn.$$.fragment,t),y(Nn.$$.fragment,t),y(Bn.$$.fragment,t),y(Un.$$.fragment,t),Zn=!1},d(t){t&&c(p),b(e,t),t&&c(o),b(s,t),t&&c(a),b(l,t),t&&c(m),b(j,t),t&&c(D),b(x,t),t&&c(H),b(N,t),t&&c($),b(d,t),t&&c(h),b(v,t),t&&c(S),b(E,t),t&&c(I),b(C,t),t&&c(L),b(P,t),t&&c(Q),b(V,t),t&&c(Wn),b(Y,t),t&&c(qn),b(Z,t),t&&c(F),b(G,t),t&&c(K),b(O,t),t&&c(nn),b(U,t),t&&c(Vn),b(B,t),t&&c(J),b(W,t),t&&c(sn),b(X,t),t&&c(en),b(q,t),t&&c(tn),b(an,t),t&&c(ps),b(on,t),t&&c(ls),b(pn,t),t&&c(is),b(ln,t),t&&c(cs),b(cn,t),t&&c(rs),b(rn,t),t&&c(us),b(un,t),t&&c(ks),b(kn,t),t&&c(fs),b(fn,t),t&&c(ms),b(mn,t),t&&c(ds),b(dn,t),t&&c($s),b($n,t),t&&c(gs),b(gn,t),t&&c(ys),b(yn,t),t&&c(_s),b(_n,t),t&&c(bs),b(bn,t),t&&c(ws),b(wn,t),t&&c(vs),b(vn,t),t&&c(hs),b(hn,t),t&&c(js),b(jn,t),t&&c(Ss),b(Sn,t),t&&c(Ts),b(Tn,t),t&&c(zs),b(zn,t),t&&c(As),b(An,t),t&&c(Es),b(En,t),t&&c(Is),b(In,t),t&&c(Cs),b(Cn,t),t&&c(Rs),b(Rn,t),t&&c(xs),b(xn,t),t&&c(Ds),b(Dn,t),t&&c(Ps),b(Pn,t),t&&c(Ms),b(Mn,t),t&&c(Ls),b(Ln,t),t&&c(Fs),b(Fn,t),t&&c(Gs),b(Gn,t),t&&c(Os),b(On,t),t&&c(Hs),b(Hn,t),t&&c(Ns),b(Nn,t),t&&c(Bs),b(Bn,t),t&&c(Us),b(Un,t)}}}let pt="Revit API";class co extends os{constructor(n){super(),as(this,n,null,io,ts,{})}}new co({target:document.getElementById("app")})});export default ro();
