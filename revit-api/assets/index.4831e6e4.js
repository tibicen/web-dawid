var mt=(c,n)=>()=>(n||c((n={exports:{}}).exports,n),n.exports);var ro=mt((fo,ss)=>{const dt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function p(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=p(o);fetch(o.href,s)}};dt();function z(){}function $t(c,n){for(const p in n)c[p]=n[p];return c}function lt(c){return c()}function et(){return Object.create(null)}function es(c){c.forEach(lt)}function gt(c){return typeof c=="function"}function ts(c,n){return c!=c?n==n:c!==n||c&&typeof c=="object"||typeof c=="function"}let Yn;function yt(c,n){return Yn||(Yn=document.createElement("a")),Yn.href=n,c===Yn.href}function wt(c){return Object.keys(c).length===0}function ct(c,n,p,e){if(c){const o=it(c,n,p,e);return c[0](o)}}function it(c,n,p,e){return c[1]&&e?$t(p.ctx.slice(),c[1](e(n))):p.ctx}function ut(c,n,p,e){if(c[2]&&e){const o=c[2](e(p));if(n.dirty===void 0)return o;if(typeof o=="object"){const s=[],a=Math.max(n.dirty.length,o.length);for(let l=0;l<a;l+=1)s[l]=n.dirty[l]|o[l];return s}return n.dirty|o}return n.dirty}function rt(c,n,p,e,o,s){if(o){const a=it(n,p,e,s);c.p(a,o)}}function kt(c){if(c.ctx.length>32){const n=[],p=c.ctx.length/32;for(let e=0;e<p;e++)n[e]=-1;return n}return-1}function qs(c,n){c.appendChild(n)}function u(c,n,p){c.insertBefore(n,p||null)}function i(c){c.parentNode.removeChild(c)}function k(c){return document.createElement(c)}function _t(c){return document.createTextNode(c)}function f(){return _t(" ")}function R(c,n,p){p==null?c.removeAttribute(n):c.getAttribute(n)!==p&&c.setAttribute(n,p)}function bt(c){return Array.from(c.childNodes)}let Ks;function Xn(c){Ks=c}const Kn=[],tt=[],Qn=[],at=[],vt=Promise.resolve();let Vs=!1;function ht(){Vs||(Vs=!0,vt.then(ft))}function Zs(c){Qn.push(c)}const Ws=new Set;let Jn=0;function ft(){const c=Ks;do{for(;Jn<Kn.length;){const n=Kn[Jn];Jn++,Xn(n),jt(n.$$)}for(Xn(null),Kn.length=0,Jn=0;tt.length;)tt.pop()();for(let n=0;n<Qn.length;n+=1){const p=Qn[n];Ws.has(p)||(Ws.add(p),p())}Qn.length=0}while(Kn.length);for(;at.length;)at.pop()();Vs=!1,Ws.clear(),Xn(c)}function jt(c){if(c.fragment!==null){c.update(),es(c.before_update);const n=c.dirty;c.dirty=[-1],c.fragment&&c.fragment.p(c.ctx,n),c.after_update.forEach(Zs)}}const ns=new Set;let St;function g(c,n){c&&c.i&&(ns.delete(c),c.i(n))}function y(c,n,p,e){if(c&&c.o){if(ns.has(c))return;ns.add(c),St.c.push(()=>{ns.delete(c),e&&(p&&c.d(1),e())}),c.o(n)}}function b(c){c&&c.c()}function w(c,n,p,e){const{fragment:o,on_mount:s,on_destroy:a,after_update:l}=c.$$;o&&o.m(n,p),e||Zs(()=>{const m=s.map(lt).filter(gt);a?a.push(...m):es(m),c.$$.on_mount=[]}),l.forEach(Zs)}function _(c,n){const p=c.$$;p.fragment!==null&&(es(p.on_destroy),p.fragment&&p.fragment.d(n),p.on_destroy=p.fragment=null,p.ctx=[])}function zt(c,n){c.$$.dirty[0]===-1&&(Kn.push(c),ht(),c.$$.dirty.fill(0)),c.$$.dirty[n/31|0]|=1<<n%31}function as(c,n,p,e,o,s,a,l=[-1]){const m=Ks;Xn(c);const j=c.$$={fragment:null,ctx:null,props:s,update:z,not_equal:o,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(m?m.$$.context:[])),callbacks:et(),dirty:l,skip_bound:!1,root:n.target||m.$$.root};a&&a(j.root);let D=!1;if(j.ctx=p?p(c,n.props||{},(x,N,...H)=>{const $=H.length?H[0]:N;return j.ctx&&o(j.ctx[x],j.ctx[x]=$)&&(!j.skip_bound&&j.bound[x]&&j.bound[x]($),D&&zt(c,x)),N}):[],j.update(),D=!0,es(j.before_update),j.fragment=e?e(j.ctx):!1,n.target){if(n.hydrate){const x=bt(n.target);j.fragment&&j.fragment.l(x),x.forEach(i)}else j.fragment&&j.fragment.c();n.intro&&g(c.$$.fragment),w(c,n.target,n.anchor,n.customElement),ft()}Xn(m)}class os{$destroy(){_(this,1),this.$destroy=z}$on(n,p){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(p),()=>{const o=e.indexOf(p);o!==-1&&e.splice(o,1)}}$set(n){this.$$set&&!wt(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}var Tt=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{},T=function(c){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,e={},o={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function $(d){return d instanceof s?new s(d.type,$(d.content),d.alias):Array.isArray(d)?d.map($):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function($){return Object.prototype.toString.call($).slice(8,-1)},objId:function($){return $.__id||Object.defineProperty($,"__id",{value:++p}),$.__id},clone:function $(d,h){var v,S;switch(h=h||{},o.util.type(d)){case"Object":if(S=o.util.objId(d),h[S])return h[S];for(var E in v={},h[S]=v,d)d.hasOwnProperty(E)&&(v[E]=$(d[E],h));return v;case"Array":return S=o.util.objId(d),h[S]?h[S]:(v=[],h[S]=v,d.forEach(function(I,C){v[C]=$(I,h)}),v);default:return d}},getLanguage:function($){for(;$;){var d=n.exec($.className);if(d)return d[1].toLowerCase();$=$.parentElement}return"none"},setLanguage:function($,d){$.className=$.className.replace(RegExp(n,"gi"),""),$.classList.add("language-"+d)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(v){var $=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if($){var d=document.getElementsByTagName("script");for(var h in d)if(d[h].src==$)return d[h]}return null}},isActive:function($,d,h){for(var v="no-"+d;$;){var S=$.classList;if(S.contains(d))return!0;if(S.contains(v))return!1;$=$.parentElement}return!!h}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function($,d){var h=o.util.clone(o.languages[$]);for(var v in d)h[v]=d[v];return h},insertBefore:function($,d,h,v){var S=(v=v||o.languages)[$],E={};for(var I in S)if(S.hasOwnProperty(I)){if(I==d)for(var C in h)h.hasOwnProperty(C)&&(E[C]=h[C]);h.hasOwnProperty(I)||(E[I]=S[I])}var L=v[$];return v[$]=E,o.languages.DFS(o.languages,function(P,Q){Q===L&&P!=$&&(this[P]=E)}),E},DFS:function $(d,h,v,S){S=S||{};var E=o.util.objId;for(var I in d)if(d.hasOwnProperty(I)){h.call(d,I,d[I],v||I);var C=d[I],L=o.util.type(C);L!=="Object"||S[E(C)]?L!=="Array"||S[E(C)]||(S[E(C)]=!0,$(C,h,I,S)):(S[E(C)]=!0,$(C,h,null,S))}}},plugins:{},highlightAll:function($,d){o.highlightAllUnder(document,$,d)},highlightAllUnder:function($,d,h){var v={callback:h,container:$,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),o.hooks.run("before-all-elements-highlight",v);for(var S,E=0;S=v.elements[E++];)o.highlightElement(S,d===!0,v.callback)},highlightElement:function($,d,h){var v=o.util.getLanguage($),S=o.languages[v];o.util.setLanguage($,v);var E=$.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(E,v);var I={element:$,language:v,grammar:S,code:$.textContent};function C(P){I.highlightedCode=P,o.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,o.hooks.run("after-highlight",I),o.hooks.run("complete",I),h&&h.call(I.element)}if(o.hooks.run("before-sanity-check",I),(E=I.element.parentElement)&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!I.code)return o.hooks.run("complete",I),void(h&&h.call(I.element));if(o.hooks.run("before-highlight",I),I.grammar)if(d&&c.Worker){var L=new Worker(o.filename);L.onmessage=function(P){C(P.data)},L.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else C(o.highlight(I.code,I.grammar,I.language));else C(o.util.encode(I.code))},highlight:function($,d,h){var v={code:$,grammar:d,language:h};if(o.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=o.tokenize(v.code,v.grammar),o.hooks.run("after-tokenize",v),s.stringify(o.util.encode(v.tokens),v.language)},tokenize:function($,d){var h=d.rest;if(h){for(var v in h)d[v]=h[v];delete d.rest}var S=new m;return j(S,S.head,$),l($,S,d,S.head,0),function(E){for(var I=[],C=E.head.next;C!==E.tail;)I.push(C.value),C=C.next;return I}(S)},hooks:{all:{},add:function($,d){var h=o.hooks.all;h[$]=h[$]||[],h[$].push(d)},run:function($,d){var h=o.hooks.all[$];if(h&&h.length)for(var v,S=0;v=h[S++];)v(d)}},Token:s};function s($,d,h,v){this.type=$,this.content=d,this.alias=h,this.length=0|(v||"").length}function a($,d,h,v){$.lastIndex=d;var S=$.exec(h);if(S&&v&&S[1]){var E=S[1].length;S.index+=E,S[0]=S[0].slice(E)}return S}function l($,d,h,v,S,E){for(var I in h)if(h.hasOwnProperty(I)&&h[I]){var C=h[I];C=Array.isArray(C)?C:[C];for(var L=0;L<C.length;++L){if(E&&E.cause==I+","+L)return;var P=C[L],Q=P.inside,V=!!P.lookbehind,Wn=!!P.greedy,Y=P.alias;if(Wn&&!P.pattern.global){var qn=P.pattern.toString().match(/[imsuy]*$/)[0];P.pattern=RegExp(P.pattern.source,qn+"g")}for(var Z=P.pattern||P,F=v.next,G=S;F!==d.tail&&!(E&&G>=E.reach);G+=F.value.length,F=F.next){var K=F.value;if(d.length>$.length)return;if(!(K instanceof s)){var O,nn=1;if(Wn){if(!(O=a(Z,G,$,V))||O.index>=$.length)break;var U=O.index,Vn=O.index+O[0].length,B=G;for(B+=F.value.length;U>=B;)B+=(F=F.next).value.length;if(G=B-=F.value.length,F.value instanceof s)continue;for(var J=F;J!==d.tail&&(B<Vn||typeof J.value=="string");J=J.next)nn++,B+=J.value.length;nn--,K=$.slice(G,B),O.index-=G}else if(!(O=a(Z,0,K,V)))continue;U=O.index;var W=O[0],sn=K.slice(0,U),X=K.slice(U+W.length),en=G+K.length;E&&en>E.reach&&(E.reach=en);var q=F.prev;if(sn&&(q=j(d,q,sn),G+=sn.length),D(d,q,nn),F=j(d,q,new s(I,Q?o.tokenize(W,Q):W,Y,W)),X&&j(d,F,X),nn>1){var tn={cause:I+","+L,reach:en};l($,d,h,F.prev,G,tn),E&&tn.reach>E.reach&&(E.reach=tn.reach)}}}}}}function m(){var $={value:null,prev:null,next:null},d={value:null,prev:$,next:null};$.next=d,this.head=$,this.tail=d,this.length=0}function j($,d,h){var v=d.next,S={value:h,prev:d,next:v};return d.next=S,v.prev=S,$.length++,S}function D($,d,h){for(var v=d.next,S=0;S<h&&v!==$.tail;S++)v=v.next;d.next=v,v.prev=d,$.length-=S}if(c.Prism=o,s.stringify=function $(d,h){if(typeof d=="string")return d;if(Array.isArray(d)){var v="";return d.forEach(function(L){v+=$(L,h)}),v}var S={type:d.type,content:$(d.content,h),tag:"span",classes:["token",d.type],attributes:{},language:h},E=d.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(S.classes,E):S.classes.push(E)),o.hooks.run("wrap",S);var I="";for(var C in S.attributes)I+=" "+C+'="'+(S.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+I+">"+S.content+"</"+S.tag+">"},!c.document)return c.addEventListener&&(o.disableWorkerMessageHandler||c.addEventListener("message",function($){var d=JSON.parse($.data),h=d.language,v=d.code,S=d.immediateClose;c.postMessage(o.highlight(v,o.languages[h],h)),S&&c.close()},!1)),o;var x=o.util.currentScript();function N(){o.manual||o.highlightAll()}if(x&&(o.filename=x.src,x.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var H=document.readyState;H==="loading"||H==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",N):window.requestAnimationFrame?window.requestAnimationFrame(N):window.setTimeout(N,16)}return o}(Tt);typeof ss!="undefined"&&ss.exports&&(ss.exports=T),typeof global!="undefined"&&(global.Prism=T);T.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},T.languages.markup.tag.inside["attr-value"].inside.entity=T.languages.markup.entity,T.languages.markup.doctype.inside["internal-subset"].inside=T.languages.markup,T.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(T.languages.markup.tag,"addInlined",{value:function(c,n){var p={};p["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:T.languages[n]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var e={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};e["language-"+n]={pattern:/[\s\S]+/,inside:T.languages[n]};var o={};o[c]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:e},T.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(T.languages.markup.tag,"addAttribute",{value:function(c,n){T.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+c+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:T.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),T.languages.html=T.languages.markup,T.languages.mathml=T.languages.markup,T.languages.svg=T.languages.markup,T.languages.xml=T.languages.extend("markup",{}),T.languages.ssml=T.languages.xml,T.languages.atom=T.languages.xml,T.languages.rss=T.languages.xml;(function(c){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+n.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var p=c.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))})(T);T.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};T.languages.javascript=T.languages.extend("clike",{"class-name":[T.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),T.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,T.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:T.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:T.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:T.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:T.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:T.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),T.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:T.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),T.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),T.languages.markup&&(T.languages.markup.tag.addInlined("script","javascript"),T.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),T.languages.js=T.languages.javascript;(function(c){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",p={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},e={bash:p,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};c.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:e},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:p}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:e},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:e.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:e.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},p.inside=c.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=e.variable[1].inside,a=0;a<o.length;a++)s[o[a]]=c.languages.bash[o[a]];c.languages.shell=c.languages.bash})(T);T.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},T.languages.python["string-interpolation"].inside.interpolation.inside.rest=T.languages.python,T.languages.py=T.languages.python;(function(c){var n=/[*&][^\s[\]{},]+/,p=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,e="(?:"+p.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+p.source+")?)",o="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"}),s=`"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;function a(l,m){m=(m||"").replace(/m/g,"")+"m";var j=`([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|\\]|\\}|(?:[\r
]\\s*)?#))`.replace(/<<prop>>/g,function(){return e}).replace(/<<value>>/g,function(){return l});return RegExp(j,m)}c.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?
|\r)[ 	]+)\\S[^\r
]*(?:\\2[^\r
]+)*)`.replace(/<<prop>>/g,function(){return e})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\r
?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return e}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:a("false|true","i"),lookbehind:!0,alias:"important"},null:{pattern:a("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:a(s),lookbehind:!0,greedy:!0},number:{pattern:a("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:p,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},c.languages.yml=c.languages.yaml})(T);(function(){if(typeof T!="undefined"&&typeof document!="undefined"){var c="line-numbers",n=/\n(?!$)/g,p=T.plugins.lineNumbers={getLine:function(s,a){if(s.tagName==="PRE"&&s.classList.contains(c)){var l=s.querySelector(".line-numbers-rows");if(l){var m=parseInt(s.getAttribute("data-start"),10)||1,j=m+(l.children.length-1);a<m&&(a=m),a>j&&(a=j);var D=a-m;return l.children[D]}}},resize:function(s){o([s])},assumeViewportIndependence:!0},e=void 0;window.addEventListener("resize",function(){p.assumeViewportIndependence&&e===window.innerWidth||(e=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))}),T.hooks.add("complete",function(s){if(s.code){var a=s.element,l=a.parentNode;if(l&&/pre/i.test(l.nodeName)&&!a.querySelector(".line-numbers-rows")&&T.util.isActive(a,c)){a.classList.remove(c),l.classList.add(c);var m,j=s.code.match(n),D=j?j.length+1:1,x=new Array(D+1).join("<span></span>");(m=document.createElement("span")).setAttribute("aria-hidden","true"),m.className="line-numbers-rows",m.innerHTML=x,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),s.element.appendChild(m),o([l]),T.hooks.run("line-numbers",s)}}}),T.hooks.add("line-numbers",function(s){s.plugins=s.plugins||{},s.plugins.lineNumbers=!0})}function o(s){if((s=s.filter(function(l){var m,j=(m=l,m?window.getComputedStyle?getComputedStyle(m):m.currentStyle||null:null)["white-space"];return j==="pre-wrap"||j==="pre-line"})).length!=0){var a=s.map(function(l){var m=l.querySelector("code"),j=l.querySelector(".line-numbers-rows");if(m&&j){var D=l.querySelector(".line-numbers-sizer"),x=m.textContent.split(n);D||((D=document.createElement("span")).className="line-numbers-sizer",m.appendChild(D)),D.innerHTML="0",D.style.display="block";var N=D.getBoundingClientRect().height;return D.innerHTML="",{element:l,lines:x,lineHeights:[],oneLinerHeight:N,sizer:D}}}).filter(Boolean);a.forEach(function(l){var m=l.sizer,j=l.lines,D=l.lineHeights,x=l.oneLinerHeight;D[j.length-1]=void 0,j.forEach(function(N,H){if(N&&N.length>1){var $=m.appendChild(document.createElement("span"));$.style.display="block",$.textContent=N}else D[H]=x})}),a.forEach(function(l){for(var m=l.sizer,j=l.lineHeights,D=0,x=0;x<j.length;x++)j[x]===void 0&&(j[x]=m.children[D++].getBoundingClientRect().height)}),a.forEach(function(l){var m=l.sizer,j=l.element.querySelector(".line-numbers-rows");m.style.display="none",m.innerHTML="",l.lineHeights.forEach(function(D,x){j.children[x].style.height=D+"px"})})}}})();function At(c){let n;return{c(){n=k("nav"),n.innerHTML=`<a href="#spotkanie-1" class="svelte-f6k7du">Spotkanie 1</a> 
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
    <a href="#program-6" class="svelte-f6k7du">Aktualizuj osie</a>`,R(n,"class","svelte-f6k7du")},m(p,e){u(p,n,e)},p:z,i:z,o:z,d(p){p&&i(n)}}}class Et extends os{constructor(n){super(),as(this,n,null,At,ts,{})}}function It(c){let n,p,e;const o=c[2].default,s=ct(o,c,c[1],null);return{c(){n=k("section"),p=k("div"),s&&s.c(),R(p,"class","center svelte-i9wwgh"),R(n,"id",c[0]),R(n,"class","line-numbers svelte-i9wwgh")},m(a,l){u(a,n,l),qs(n,p),s&&s.m(p,null),e=!0},p(a,[l]){s&&s.p&&(!e||l&2)&&rt(s,o,a,a[1],e?ut(o,a[1],l,null):kt(a[1]),null),(!e||l&1)&&R(n,"id",a[0])},i(a){e||(g(s,a),e=!0)},o(a){y(s,a),e=!1},d(a){a&&i(n),s&&s.d(a)}}}function Ct(c,n,p){let{$$slots:e={},$$scope:o}=n,{id:s}=n;return c.$$set=a=>{"id"in a&&p(0,s=a.id),"$$scope"in a&&p(1,o=a.$$scope)},[s,o,e]}class A extends os{constructor(n){super(),as(this,n,Ct,It,ts,{id:0})}}const Rt=c=>({}),ot=c=>({class:"code svelte-qgcnhp"});function xt(c){let n,p,e,o;const s=c[1].default,a=ct(s,c,c[0],ot);return{c(){n=k("div"),p=k("div"),p.innerHTML=`<div class="button red svelte-qgcnhp"></div> 
        <div class="button yellow svelte-qgcnhp"></div> 
        <div class="button green svelte-qgcnhp"></div>`,e=f(),a&&a.c(),R(p,"class","menu svelte-qgcnhp"),R(n,"class","codeblock line-numbers svelte-qgcnhp")},m(l,m){u(l,n,m),qs(n,p),qs(n,e),a&&a.m(n,null),o=!0},p(l,[m]){a&&a.p&&(!o||m&1)&&rt(a,s,l,l[0],o?ut(s,l[0],m,Rt):kt(l[0]),ot)},i(l){o||(g(a,l),o=!0)},o(l){y(a,l),o=!1},d(l){l&&i(n),a&&a.d(l)}}}function Dt(c,n,p){let{$$slots:e={},$$scope:o}=n;return c.$$set=s=>{"$$scope"in s&&p(0,o=s.$$scope)},[o,e]}class M extends os{constructor(n){super(),as(this,n,Dt,xt,ts,{})}}function Pt(c){let n,p,e,o,s;return{c(){n=k("h1"),n.textContent="Wprowadzenie do API Revita",p=f(),e=k("h2"),e.innerHTML='<a href="https://dawid.huczynski.pl/revit-api" rel="nofollow">dawid.huczynski.pl/revit-api</a>',o=f(),s=k("h3"),s.innerHTML='<a href="dawid.huczynski@gmail.com">dawid.huczynski@gmail.com</a>'},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function Mt(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 1."},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Lt(c){let n,p,e;return{c(){n=k("h2"),n.textContent="Narz\u0119dzia i ustawianie \u015Brodowiska",p=f(),e=k("ul"),e.innerHTML=`<li><strong>Pyrevit</strong> - addon do tworzenia w\u0142asnych dodatk\xF3w oraz ma\u0142y kombajn z narz\u0119dziami: <br/> 
<a href="https://github.com/eirannejad/pyRevit/releases" rel="nofollow">https://github.com/eirannejad/pyRevit/releases</a>  <br/></li> 
<li><strong>RevitPythonShell</strong> - interaktywna konsola Pythona w Revicie: <br/> 
<a href="https://github.com/architecture-building-systems/revitpythonshell/releases" rel="nofollow">https://github.com/architecture-building-systems/revitpythonshell/releases</a></li> 
<li><strong>stubs</strong> - narz\u0119dzie do autouzupe\u0142niania Revitowych komend w VS Code: <br/> 
<a href="https://www.macro4bim.com/post/create-python-stubs" rel="nofollow">https://www.macro4bim.com/post/create-python-stubs</a>  <br/> 
<a href="https://github.com/gtalarico/ironpython-stubs" rel="nofollow">https://github.com/gtalarico/ironpython-stubs</a>  <br/></li> 
<li><strong>RevitLookup</strong> - narz\u0119dzie do podgl\u0105dania parametr\xF3w obiekt\xF3w Revicie: <br/> 
<a href="https://github.com/jeremytammik/RevitLookup" rel="nofollow">https://github.com/jeremytammik/RevitLookup</a></li> 
<li><strong>git</strong> - program do wersjonowania kodu i pracy w zespole, kombajn: <br/> 
<a href="https://git-scm.com/" rel="nofollow">https://git-scm.com/</a></li>`},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function Ft(c){let n,p,e;return{c(){n=k("h2"),n.textContent="Miejsca do szukania wiedzy:",p=f(),e=k("ul"),e.innerHTML=`<li><a href="https://www.revitapidocs.com/" rel="nofollow">https://www.revitapidocs.com/</a></li> 
<li><a href="https://apidocs.co/apps/revit/2021/" rel="nofollow">https://apidocs.co/apps/revit/2021/</a></li> 
<li><a href="https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html" rel="nofollow">https://help.autodesk.com/view/RVT/2022/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html</a></li> 
<li><a href="https://thebuildingcoder.typepad.com/" rel="nofollow">https://thebuildingcoder.typepad.com/</a></li> 
<li><a href="http://wiki.theprovingground.org/revit-api" rel="nofollow">http://wiki.theprovingground.org/revit-api</a></li> 
<li><a href="https://dynamopythonprimer.gitbook.io/" rel="nofollow">https://dynamopythonprimer.gitbook.io/</a></li> 
<li><a href="https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists" rel="nofollow">https://www.youtube.com/channel/UC1Dx-jGyRbvvHzZ8ZyGWF5w/playlists</a></li> 
<li><a href="https://github.com/gtalarico/python-revit-resources" rel="nofollow">https://github.com/gtalarico/python-revit-resources</a></li> 
<li><a href="https://github.com/architecture-building-systems/revitpythonshell" rel="nofollow">https://github.com/architecture-building-systems/revitpythonshell</a></li> 
<li><a href="https://github.com/Amoursol/dynamoPython" rel="nofollow">https://github.com/Amoursol/dynamoPython</a></li> 
<li><a href="https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/" rel="nofollow">https://daren-thomas.gitbooks.io/scripting-autodesk-revit-with-revitpythonshell/content/</a></li>`},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function Gt(c){let n,p=`<code class="language-python"><span class="token comment">#! python3</span>
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Ot(c){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Gt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Spos\xF3b czytania skrypt\xF3w",p=f(),e=k("ul"),e.innerHTML=`<li><code>#! python3</code> - definiuje jakiego j\u0119zyka u\u017Cywa skrypt</li> 
<li><code># -*- coding: utf-8 -*-</code> - definuje zakres znak\xF3w unicode UTF-8 (tu te\u017C s\u0105 polskie znaki)</li>`,o=f(),b(s.$$.fragment)},m(l,m){u(l,n,m),u(l,p,m),u(l,e,m),u(l,o,m),w(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&i(n),l&&i(p),l&&i(e),l&&i(o),_(s,l)}}}function Nt(c){let n,p=`<code class="language-sh">pip install --user pipenv
pipenv install requests
pipenv run python main.py
pipenv shell

</code>`;return{c(){n=k("pre"),R(n,"class","language-sh")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Ht(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Nt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="pipenv",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function Bt(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> sys
sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">'sciezka/do/modulow'</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Ut(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Bt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="U\u017Cywanie bibliotek pythona",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function Wt(c){let n,p,e;return{c(){n=k("h2"),n.textContent="API a wersje pythona",p=f(),e=k("ul"),e.innerHTML=`<li>API Dynamo - zale\u017Cnie od wersji Dynamo IronPython 2.7 / python 3.8</li> 
<li>API RPSHELL (Python) - IronPython 2.7 / python 3.8</li> 
<li>API Macros - IronPython 2.7</li>`},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function qt(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="J\u0119zyk statyczny i dynamiczny",p=f(),e=k("p"),e.textContent="Types - typy (int, float, str, Object, Enum, Element, Id):",o=f(),s=k("ul"),s.innerHTML=`<li>static types</li> 
<li>dynamic types</li>`},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function Vt(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr <span class="token comment"># .NET's Common Language Runtime.</span>

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Zt(c){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Vt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Podstawy API",p=f(),e=k("p"),e.innerHTML=`Kod do skopiowania do skrypt\xF3w Dynamo. NIE KOPIUJCIE TEGO, serio! :D<br/>
s\u0142owo klucz: \u201CMaintnance\u201D`,o=f(),b(s.$$.fragment)},m(l,m){u(l,n,m),u(l,p,m),u(l,e,m),u(l,o,m),w(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&i(n),l&&i(p),l&&i(e),l&&i(o),_(s,l)}}}function Kt(c){let n,p=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">feet_to_meter</span><span class="token punctuation">(</span>feet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> feet <span class="token operator">*</span> <span class="token number">0.3048</span>


<span class="token keyword">def</span> <span class="token function">meter_to_feet</span><span class="token punctuation">(</span>meter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> meter <span class="token operator">/</span> <span class="token number">0.3048</span>


<span class="token keyword">def</span> <span class="token function">sqr_feet_to_meter</span><span class="token punctuation">(</span>sqrfeet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sqrfeet <span class="token operator">*</span> <span class="token number">0.09290304</span>


<span class="token keyword">def</span> <span class="token function">sqr_meter_to_feet</span><span class="token punctuation">(</span>sqrmeter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sqrmeter <span class="token operator">/</span> <span class="token number">0.09290304</span>


</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Xt(c){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Kt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Co ma skarpetka wsp\xF3lnego z Revitem?",p=f(),e=k("p"),e.textContent="jednostki",o=f(),b(s.$$.fragment)},m(l,m){u(l,n,m),u(l,p,m),u(l,e,m),u(l,o,m),w(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&i(n),l&&i(p),l&&i(e),l&&i(o),_(s,l)}}}function Yt(c){let n,p=`<code class="language-python">detail_line <span class="token operator">=</span> UnwrapElement<span class="token punctuation">(</span>IN<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
decimal_feet_length <span class="token operator">=</span> detail_line<span class="token punctuation">.</span>GeometryCurve<span class="token punctuation">.</span>Length
metric_length <span class="token operator">=</span> UnitUtils<span class="token punctuation">.</span>Convert<span class="token punctuation">(</span>
    decimal_feet_length<span class="token punctuation">,</span> 
    DisplayUnitType<span class="token punctuation">.</span>DUT_DECIMAL_FEET<span class="token punctuation">,</span> 
    DisplayUnitType<span class="token punctuation">.</span>DUT_MILLIMETERS<span class="token punctuation">)</span>
OUT <span class="token operator">=</span> metric_length

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Jt(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Yt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Inny spos\xF3b na jednostki",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function Qt(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> os
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function na(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Qt]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Struktura API i przeszukiwanie",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function sa(c){let n,p,e,o,s;return{c(){n=k("h3"),n.innerHTML='<a href="./revit-struktura.html">Autodesk.Revit</a>',p=f(),e=k("p"),e.textContent="U\u017Cyteczne komendy do przegl\u0105dania:",o=f(),s=k("ul"),s.innerHTML=`<li>dir <code>for x in dir(element):print(x)</code></li> 
<li>help(element)</li>`},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function ea(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Podstawowe klasy",p=f(),e=k("h2"),e.textContent="Element.*",o=f(),s=k("div"),s.innerHTML=`<p>ArePhasesModifiable<br/>
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
setElementType<br/></p>`,R(s,"class","trzy-kolumny")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function ta(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Podstawowe klasy",p=f(),e=k("h2"),e.textContent="Wall.*",o=f(),s=k("div"),s.innerHTML=`<p>ArePhasesModifiable<br/>
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
setElementType<br/></p>`,R(s,"class","trzy-kolumny")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function aa(c){let n,p,e;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("ul"),e.innerHTML=`<li>mo\u017Cliwo\u015Bci</li> 
<li>tworzenie interfejsu do skryptu</li> 
<li>ustawianie addin\xF3w pod firm\u0119 (pipeline developera)</li>`},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function oa(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-tab.png" alt="pyrevit-tab"/>',o=f(),s=k("ol"),s.innerHTML=`<li>Tab coloring - koloruje wam zak\u0142adki wg otwartych projekt\xF3w i rodzin. Minify revit UI - chowa wam g\xF3rne zak\u0142adki kt\xF3rych nie u\u017Cywacie np mi zostawia tylko Architecture, Annotate i Modify ( ustawia si\u0119 to klikaj\u0105c na ikonk\u0119 s SHIFTEM)</li> 
<li>Sync Views - synchronizuje widoki np jak zmieniasz cz\u0119sto rzuty (np. sprawdzaj\u0105c szachty) to maj\u0105c w\u0142\u0105czon\u0105 t\u0105 opcj\u0119 zawsze widok l\u0105duje w tym samym miejscu co na poprzednim rzucie (resetuje si\u0119 np w momencie wej\u015Bcia na widok 3d)</li> 
<li>Zaawansowane zaznaczanie - dzia\u0142a jak Pami\u0119\u0107 w kalkulatorze: zaznaczasz par\u0119 obiekt\xF3w dodajesz do pami\u0119ci, zaznaczasz inne dodajesz do pami\u0119ci. potem jak klikniesz MRead to zaznaczone zostan\u0105 wszystkie poprzednio zaznaczone elementy</li> 
<li>Make Pattern - szybko mo\u017Cesz tworzy\u0107 szrafur\u0119 np trawy, kostki, wz\xF3r p\u0142ytek itp.</li> 
<li>Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzaj\u0105ce si\u0119 legendy a potem kopiujesz je na wszystkie inne rysunki i wklejaj\u0105 si\u0119 w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje du\u017Co rysunk\xF3w wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunk\xF3w kt\xF3re przeklejam do tego narz\u0119dzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.</li> 
<li>Duzo u\u0142atwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plik\xF3w.</li> 
<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li> 
<li>Team - wa\u017Cna rzecz do sprawdzania: Who did that? kto stworzy\u0142 elementi kto ostatni go edytowa\u0142.</li> 
<li>Czyszczenie rzeczy kt\xF3re czasami jest zbyt dobre, ale przynajmniej potrafi wyczy\u015Bci\u0107 elementy kt\xF3rych nie czy\u015Bci purge.</li>`},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function pa(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-sheets.png" alt="pyrevit-sheets"/>',o=f(),s=k("ol"),s.innerHTML="<li>Sheets - dla mnie najwygodniejsze jest kopiowanie legend na inne rysunki (PB, PW - na jednym rysunku ustawiasz powtarzaj\u0105ce si\u0119 legendy a potem kopiujesz je na wszystkie inne rysunki i wklejaj\u0105 si\u0119 w tym samym miejscu) Druga to Batch Sheet Maker - na szybko generuje du\u017Co rysunk\xF3w wpisujesz tylko nr rysunku [tab] nazewa rysunku i masz rysunek ( ja do PW mam w pliku tekstowym zestaw rysunk\xF3w kt\xF3re przeklejam do tego narz\u0119dzia na etapie PW i od razu mam przygotowane puste rysunki z numerami i nazwami.</li>",R(s,"start","5")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function la(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-views.png" alt="pyrevit-views"/>',o=f(),s=k("ol"),s.innerHTML="<li>Duzo u\u0142atwien w tym miejscu, najfajniejsze to chyba Kopiowanie view templates do innych otwartych plik\xF3w.</li>",R(s,"start","6")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function ca(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-checks1.png" alt="pyrevit-checks1"/>',o=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",R(s,"start","7")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function ia(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-checks2.png" alt="pyrevit-checks2"/>',o=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",R(s,"start","7")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function ua(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-checks3.png" alt="pyrevit-checks3"/>',o=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",R(s,"start","7")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function ra(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-checks4.png" alt="pyrevit-checks4"/>',o=f(),s=k("ol"),s.innerHTML="<li>Preflight Checks - moje ulubione narz\u0119dzie pokazuje w \u0142adnej graficznej formie \u201Ckondycj\u0119\u201D twojego revitowego pliku i co mo\u017Ce by\u0107 do poprawy.</li>",R(s,"start","7")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function ka(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Pyrevit",p=f(),e=k("p"),e.innerHTML='<img src="./pyrevit-who.png" alt="pyrevit-who"/>',o=f(),s=k("ol"),s.innerHTML="<li>Team - wa\u017Cna rzecz do sprawdzania: Who did that? kto stworzy\u0142 elementi kto ostatni go edytowa\u0142.</li>",R(s,"start","8")},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function fa(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 2."},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function ma(c){let n,p=`<code class="language-python"><span class="token keyword">class</span> <span class="token class-name">Osoba</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function da(c){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[ma]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Klasy",p=f(),e=k("p"),e.textContent="Czym s\u0105 klasy i ich dziedziczenie",o=f(),b(s.$$.fragment)},m(l,m){u(l,n,m),u(l,p,m),u(l,e,m),u(l,o,m),w(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&i(n),l&&i(p),l&&i(e),l&&i(o),_(s,l)}}}function $a(c){let n,p,e;return{c(){n=k("h2"),n.textContent="Pomocne biblioteki Pythona",p=f(),e=k("ul"),e.innerHTML=`<li>math</li> 
<li>itertools</li> 
<li>collections.namedtuple</li> 
<li>pandas</li> 
<li>numpy</li> 
<li>bokeh / plotly</li> 
<li>pillow</li> 
<li>k3d</li>`},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function ga(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitAPI"</span><span class="token punctuation">)</span>
Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB<span class="token punctuation">.</span>Level

clr<span class="token punctuation">.</span>AddReference<span class="token punctuation">(</span><span class="token string">"RevitNodes"</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> Revit
clr<span class="token punctuation">.</span>ImportExtensions<span class="token punctuation">(</span>Revit<span class="token punctuation">.</span>Elements<span class="token punctuation">)</span>
clr<span class="token punctuation">.</span>ImportExtensions<span class="token punctuation">(</span>Revit<span class="token punctuation">.</span>GeometryConversion<span class="token punctuation">)</span>
Revit<span class="token punctuation">.</span>Elements<span class="token punctuation">.</span>Level

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function ya(c){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[ga]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Dynamo",p=f(),e=k("ul"),e.innerHTML=`<li>UnwrapElement</li> 
<li>Transaction a TransactionGroup a TransactionManager</li> 
<li>uidoc.Selection</li> 
<li>pr\xF3ba wyja\u015Bnienia r\xF3\u017Cnic (importowane biblioteki).</li>`,o=f(),b(s.$$.fragment)},m(l,m){u(l,n,m),u(l,p,m),u(l,e,m),u(l,o,m),w(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&i(n),l&&i(p),l&&i(e),l&&i(o),_(s,l)}}}function wa(c){let n,p=`<code class="language-python">input_list_of_numbers <span class="token operator">=</span> IN<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">#Here we take an input</span>
output_list_of_numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">#We create an empty list to output</span>

<span class="token keyword">for</span> number <span class="token keyword">in</span> input_list_of_numbers<span class="token punctuation">:</span> <span class="token comment">#Looping through input</span>
    new_number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">#Adding 1 to each number</span>
    output_list_of_numbers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>new_number<span class="token punctuation">)</span>

OUT <span class="token operator">=</span> output_list_of_numbers <span class="token comment">#Here we output the new '+1' list</span>

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function _a(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[wa]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Dynamo IN-OUT",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function ba(c){let n,p,e;return{c(){n=k("h2"),n.textContent="Revit Python Shell",p=f(),e=k("p"),e.textContent="Interaktywna zabawa"},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function va(c){let n,p=`<code class="language-python">collector <span class="token operator">=</span> FilteredElementCollector<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function ha(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[va]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="FilteredElementCollector",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function ja(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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
</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Sa(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[ja]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="uidoc.Selection",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function za(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Ta(c){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[za]},$$scope:{ctx:c}}}),{c(){n=k("h3"),n.textContent="Filtrowanie + zaznaczanie",p=f(),e=k("p"),e.textContent="Skrypt do wybierania element\xF3w i zanzaczania ich w modelu",o=f(),b(s.$$.fragment)},m(l,m){u(l,n,m),u(l,p,m),u(l,e,m),u(l,o,m),w(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&i(n),l&&i(p),l&&i(e),l&&i(o),_(s,l)}}}function Aa(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 3."},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Ea(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Transaction",p=f(),e=k("p"),e.textContent="Jak dzia\u0142a wprowadzanie zmian w modelu. S\u0105 trzy typy transakcji:",o=f(),s=k("ul"),s.innerHTML=`<li>Transaction</li> 
<li>TransactionGroup</li> 
<li>TransactionManager - Dynamo</li>`},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function Ia(c){let n,p=`<code class="language-python">TransactionManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>EnsureInTransaction<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
zrob_cos<span class="token punctuation">(</span><span class="token punctuation">)</span>
TransactionManager<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>TransactionTaskDone<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Ca(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Ia]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="TransactionManager - Dynamo",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function Ra(c){let n,p=`<code class="language-python">t <span class="token operator">=</span> Transaction<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">'Opis'</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
	zrob_cos<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>RollBack<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>Commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function xa(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Ra]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Transaction",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function Da(c){let n,p=`<code class="language-python">tg <span class="token operator">=</span> TransactionGroup<span class="token punctuation">(</span>doc<span class="token punctuation">,</span> <span class="token string">"&#123;&#125; number assing"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>el_type<span class="token punctuation">)</span><span class="token punctuation">)</span>
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Pa(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Da]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="TransactionGroup",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function Ma(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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
</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function La(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Ma]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Parametry",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function Fa(c){let n,p,e;return{c(){n=k("h2"),n.textContent="Rodzaje parametr\xF3w",p=f(),e=k("ul"),e.innerHTML=`<li>String [str] <code>Nazwa Budynku</code></li> 
<li>Double [float] <code>3.14</code></li> 
<li>Integer [int]  <code>2345</code></li> 
<li>Element - inny obiekt Revitowy (Level)</li> 
<li>BuiltInParameter</li>`},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function Ga(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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
</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function Oa(c){let n,p,e,o,s,a;return s=new M({props:{$$slots:{default:[Ga]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="ParameterMap",p=f(),e=k("p"),e.textContent="Jak wyci\u0105gn\u0105\u0107 informacje o parametrach",o=f(),b(s.$$.fragment)},m(l,m){u(l,n,m),u(l,p,m),u(l,e,m),u(l,o,m),w(s,l,m),a=!0},p(l,m){const j={};m&1&&(j.$$scope={dirty:m,ctx:l}),s.$set(j)},i(l){a||(g(s.$$.fragment,l),a=!0)},o(l){y(s.$$.fragment,l),a=!1},d(l){l&&i(n),l&&i(p),l&&i(e),l&&i(o),_(s,l)}}}function Na(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 4."},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Ha(c){let n,p,e;return{c(){n=k("h2"),n.textContent="W\u0142asna zak\u0142adka w Revicie",p=f(),e=k("p"),e.innerHTML='<img src="./dh-tab.jpg" alt="dh-tab"/>'},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function Ba(c){let n,p,e,o,s;return{c(){n=k("h2"),n.textContent="Przyk\u0142ad od wi\u0119kszego kolegi z bran\u017Cy",p=f(),e=k("p"),e.innerHTML='<a href="https://youtu.be/5Pup98apob4" rel="nofollow">Webinar BIG</a>',o=f(),s=k("p"),s.innerHTML='<img src="./BIG-ribbon.jpg" alt="BIG-ribbon"/>'},m(a,l){u(a,n,l),u(a,p,l),u(a,e,l),u(a,o,l),u(a,s,l)},p:z,d(a){a&&i(n),a&&i(p),a&&i(e),a&&i(o),a&&i(s)}}}function Ua(c){let n,p,e,o;return{c(){n=k("h2"),n.textContent="Struktura folder\xF3w:",p=f(),e=k("img"),yt(e.src,o="folder.svg")||R(e,"src",o),R(e,"alt","")},m(s,a){u(s,n,a),u(s,p,a),u(s,e,a)},p:z,d(s){s&&i(n),s&&i(p),s&&i(e)}}}function Wa(c){let n;return{c(){n=k("h2"),n.textContent="Szybkie uruchamianie"},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function qa(c){let n,p,e;return{c(){n=k("h2"),n.textContent="Views",p=f(),e=k("ul"),e.innerHTML=`<li>View</li> 
<li>FloorView</li> 
<li>Viewport</li>`},m(o,s){u(o,n,s),u(o,p,s),u(o,e,s)},p:z,d(o){o&&i(n),o&&i(p),o&&i(e)}}}function Va(c){let n;return{c(){n=k("h2"),n.textContent="ViewTemplates"},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Za(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 5."},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Ka(c){let n;return{c(){n=k("h2"),n.textContent="Linked documents"},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Xa(c){let n;return{c(){n=k("h1"),n.textContent="Spotkanie 6."},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Ya(c){let n;return{c(){n=k("h2"),n.textContent="Wymiarowanie"},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Ja(c){let n;return{c(){n=k("h1"),n.textContent="Praca wsp\xF3lna:"},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function Qa(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function no(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[Qa]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Narysuj \u015Bcian\u0119",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function so(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function eo(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[so]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Modyfikuj parametry \u015Bciany",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function to(c){let n,p=`<code class="language-python"><span class="token keyword">import</span> clr

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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function ao(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[to]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Zbierz dane ze \u015Bcian",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function oo(c){let n,p=`<code class="language-python"><span class="token keyword">from</span> Autodesk<span class="token punctuation">.</span>Revit<span class="token punctuation">.</span>DB <span class="token keyword">import</span> <span class="token punctuation">(</span>
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

</code>`;return{c(){n=k("pre"),R(n,"class","language-python")},m(e,o){u(e,n,o),n.innerHTML=p},p:z,d(e){e&&i(n)}}}function po(c){let n,p,e,o;return e=new M({props:{$$slots:{default:[oo]},$$scope:{ctx:c}}}),{c(){n=k("h2"),n.textContent="Wstaw rodzin\u0119",p=f(),b(e.$$.fragment)},m(s,a){u(s,n,a),u(s,p,a),w(e,s,a),o=!0},p(s,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),o=!1},d(s){s&&i(n),s&&i(p),_(e,s)}}}function lo(c){let n;return{c(){n=k("h2"),n.textContent="Numeruj parkingi"},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function co(c){let n;return{c(){n=k("h2"),n.textContent="Aktualizuj osie"},m(p,e){u(p,n,e)},p:z,d(p){p&&i(n)}}}function io(c){let n,p,e,o,s,a,l,m,j,D,x,N,H,$,d,h,v,S,E,I,C,L,P,Q,V,Wn,Y,qn,Z,F,G,K,O,nn,U,Vn,B,J,W,sn,X,en,q,tn,an,ps,on,ls,pn,cs,ln,is,cn,us,un,rs,rn,ks,kn,fs,fn,ms,mn,ds,dn,$s,$n,gs,gn,ys,yn,ws,wn,_s,_n,bs,bn,vs,vn,hs,hn,js,jn,Ss,Sn,zs,zn,Ts,Tn,As,An,Es,En,Is,In,Cs,Cn,Rs,Rn,xs,xn,Ds,Dn,Ps,Pn,Ms,Mn,Ls,Ln,Fs,Fn,Gs,Gn,Os,On,Ns,Nn,Hs,Hn,Bs,Bn,Us,Un,Zn;return document.title=n=pt,e=new Et({}),s=new A({props:{$$slots:{default:[Pt]},$$scope:{ctx:c}}}),l=new A({props:{id:"spotkanie-1",$$slots:{default:[Mt]},$$scope:{ctx:c}}}),j=new A({props:{$$slots:{default:[Lt]},$$scope:{ctx:c}}}),x=new A({props:{$$slots:{default:[Ft]},$$scope:{ctx:c}}}),H=new A({props:{$$slots:{default:[Ot]},$$scope:{ctx:c}}}),d=new A({props:{$$slots:{default:[Ht]},$$scope:{ctx:c}}}),v=new A({props:{$$slots:{default:[Ut]},$$scope:{ctx:c}}}),E=new A({props:{$$slots:{default:[Wt]},$$scope:{ctx:c}}}),C=new A({props:{$$slots:{default:[qt]},$$scope:{ctx:c}}}),P=new A({props:{$$slots:{default:[Zt]},$$scope:{ctx:c}}}),V=new A({props:{$$slots:{default:[Xt]},$$scope:{ctx:c}}}),Y=new A({props:{$$slots:{default:[Jt]},$$scope:{ctx:c}}}),Z=new A({props:{$$slots:{default:[na]},$$scope:{ctx:c}}}),G=new A({props:{$$slots:{default:[sa]},$$scope:{ctx:c}}}),O=new A({props:{$$slots:{default:[ea]},$$scope:{ctx:c}}}),U=new A({props:{$$slots:{default:[ta]},$$scope:{ctx:c}}}),B=new A({props:{$$slots:{default:[aa]},$$scope:{ctx:c}}}),W=new A({props:{$$slots:{default:[oa]},$$scope:{ctx:c}}}),X=new A({props:{$$slots:{default:[pa]},$$scope:{ctx:c}}}),q=new A({props:{$$slots:{default:[la]},$$scope:{ctx:c}}}),an=new A({props:{$$slots:{default:[ca]},$$scope:{ctx:c}}}),on=new A({props:{$$slots:{default:[ia]},$$scope:{ctx:c}}}),pn=new A({props:{$$slots:{default:[ua]},$$scope:{ctx:c}}}),ln=new A({props:{$$slots:{default:[ra]},$$scope:{ctx:c}}}),cn=new A({props:{$$slots:{default:[ka]},$$scope:{ctx:c}}}),un=new A({props:{id:"spotkanie-2",$$slots:{default:[fa]},$$scope:{ctx:c}}}),rn=new A({props:{$$slots:{default:[da]},$$scope:{ctx:c}}}),kn=new A({props:{$$slots:{default:[$a]},$$scope:{ctx:c}}}),fn=new A({props:{$$slots:{default:[ya]},$$scope:{ctx:c}}}),mn=new A({props:{$$slots:{default:[_a]},$$scope:{ctx:c}}}),dn=new A({props:{$$slots:{default:[ba]},$$scope:{ctx:c}}}),$n=new A({props:{$$slots:{default:[ha]},$$scope:{ctx:c}}}),gn=new A({props:{$$slots:{default:[Sa]},$$scope:{ctx:c}}}),yn=new A({props:{$$slots:{default:[Ta]},$$scope:{ctx:c}}}),wn=new A({props:{id:"spotkanie-3",$$slots:{default:[Aa]},$$scope:{ctx:c}}}),_n=new A({props:{$$slots:{default:[Ea]},$$scope:{ctx:c}}}),bn=new A({props:{$$slots:{default:[Ca]},$$scope:{ctx:c}}}),vn=new A({props:{$$slots:{default:[xa]},$$scope:{ctx:c}}}),hn=new A({props:{$$slots:{default:[Pa]},$$scope:{ctx:c}}}),jn=new A({props:{$$slots:{default:[La]},$$scope:{ctx:c}}}),Sn=new A({props:{$$slots:{default:[Fa]},$$scope:{ctx:c}}}),zn=new A({props:{$$slots:{default:[Oa]},$$scope:{ctx:c}}}),Tn=new A({props:{id:"spotkanie-4",$$slots:{default:[Na]},$$scope:{ctx:c}}}),An=new A({props:{$$slots:{default:[Ha]},$$scope:{ctx:c}}}),En=new A({props:{$$slots:{default:[Ba]},$$scope:{ctx:c}}}),In=new A({props:{$$slots:{default:[Ua]},$$scope:{ctx:c}}}),Cn=new A({props:{$$slots:{default:[Wa]},$$scope:{ctx:c}}}),Rn=new A({props:{$$slots:{default:[qa]},$$scope:{ctx:c}}}),xn=new A({props:{$$slots:{default:[Va]},$$scope:{ctx:c}}}),Dn=new A({props:{id:"spotkanie-5",$$slots:{default:[Za]},$$scope:{ctx:c}}}),Pn=new A({props:{$$slots:{default:[Ka]},$$scope:{ctx:c}}}),Mn=new A({props:{id:"spotkanie-6",$$slots:{default:[Xa]},$$scope:{ctx:c}}}),Ln=new A({props:{$$slots:{default:[Ya]},$$scope:{ctx:c}}}),Fn=new A({props:{$$slots:{default:[Ja]},$$scope:{ctx:c}}}),Gn=new A({props:{id:"program-1",$$slots:{default:[no]},$$scope:{ctx:c}}}),On=new A({props:{id:"program-2",$$slots:{default:[eo]},$$scope:{ctx:c}}}),Nn=new A({props:{id:"program-3",$$slots:{default:[ao]},$$scope:{ctx:c}}}),Hn=new A({props:{id:"program-4",$$slots:{default:[po]},$$scope:{ctx:c}}}),Bn=new A({props:{id:"program-5",$$slots:{default:[lo]},$$scope:{ctx:c}}}),Un=new A({props:{id:"program-6",$$slots:{default:[co]},$$scope:{ctx:c}}}),{c(){p=f(),b(e.$$.fragment),o=f(),b(s.$$.fragment),a=f(),b(l.$$.fragment),m=f(),b(j.$$.fragment),D=f(),b(x.$$.fragment),N=f(),b(H.$$.fragment),$=f(),b(d.$$.fragment),h=f(),b(v.$$.fragment),S=f(),b(E.$$.fragment),I=f(),b(C.$$.fragment),L=f(),b(P.$$.fragment),Q=f(),b(V.$$.fragment),Wn=f(),b(Y.$$.fragment),qn=f(),b(Z.$$.fragment),F=f(),b(G.$$.fragment),K=f(),b(O.$$.fragment),nn=f(),b(U.$$.fragment),Vn=f(),b(B.$$.fragment),J=f(),b(W.$$.fragment),sn=f(),b(X.$$.fragment),en=f(),b(q.$$.fragment),tn=f(),b(an.$$.fragment),ps=f(),b(on.$$.fragment),ls=f(),b(pn.$$.fragment),cs=f(),b(ln.$$.fragment),is=f(),b(cn.$$.fragment),us=f(),b(un.$$.fragment),rs=f(),b(rn.$$.fragment),ks=f(),b(kn.$$.fragment),fs=f(),b(fn.$$.fragment),ms=f(),b(mn.$$.fragment),ds=f(),b(dn.$$.fragment),$s=f(),b($n.$$.fragment),gs=f(),b(gn.$$.fragment),ys=f(),b(yn.$$.fragment),ws=f(),b(wn.$$.fragment),_s=f(),b(_n.$$.fragment),bs=f(),b(bn.$$.fragment),vs=f(),b(vn.$$.fragment),hs=f(),b(hn.$$.fragment),js=f(),b(jn.$$.fragment),Ss=f(),b(Sn.$$.fragment),zs=f(),b(zn.$$.fragment),Ts=f(),b(Tn.$$.fragment),As=f(),b(An.$$.fragment),Es=f(),b(En.$$.fragment),Is=f(),b(In.$$.fragment),Cs=f(),b(Cn.$$.fragment),Rs=f(),b(Rn.$$.fragment),xs=f(),b(xn.$$.fragment),Ds=f(),b(Dn.$$.fragment),Ps=f(),b(Pn.$$.fragment),Ms=f(),b(Mn.$$.fragment),Ls=f(),b(Ln.$$.fragment),Fs=f(),b(Fn.$$.fragment),Gs=f(),b(Gn.$$.fragment),Os=f(),b(On.$$.fragment),Ns=f(),b(Nn.$$.fragment),Hs=f(),b(Hn.$$.fragment),Bs=f(),b(Bn.$$.fragment),Us=f(),b(Un.$$.fragment)},m(t,r){u(t,p,r),w(e,t,r),u(t,o,r),w(s,t,r),u(t,a,r),w(l,t,r),u(t,m,r),w(j,t,r),u(t,D,r),w(x,t,r),u(t,N,r),w(H,t,r),u(t,$,r),w(d,t,r),u(t,h,r),w(v,t,r),u(t,S,r),w(E,t,r),u(t,I,r),w(C,t,r),u(t,L,r),w(P,t,r),u(t,Q,r),w(V,t,r),u(t,Wn,r),w(Y,t,r),u(t,qn,r),w(Z,t,r),u(t,F,r),w(G,t,r),u(t,K,r),w(O,t,r),u(t,nn,r),w(U,t,r),u(t,Vn,r),w(B,t,r),u(t,J,r),w(W,t,r),u(t,sn,r),w(X,t,r),u(t,en,r),w(q,t,r),u(t,tn,r),w(an,t,r),u(t,ps,r),w(on,t,r),u(t,ls,r),w(pn,t,r),u(t,cs,r),w(ln,t,r),u(t,is,r),w(cn,t,r),u(t,us,r),w(un,t,r),u(t,rs,r),w(rn,t,r),u(t,ks,r),w(kn,t,r),u(t,fs,r),w(fn,t,r),u(t,ms,r),w(mn,t,r),u(t,ds,r),w(dn,t,r),u(t,$s,r),w($n,t,r),u(t,gs,r),w(gn,t,r),u(t,ys,r),w(yn,t,r),u(t,ws,r),w(wn,t,r),u(t,_s,r),w(_n,t,r),u(t,bs,r),w(bn,t,r),u(t,vs,r),w(vn,t,r),u(t,hs,r),w(hn,t,r),u(t,js,r),w(jn,t,r),u(t,Ss,r),w(Sn,t,r),u(t,zs,r),w(zn,t,r),u(t,Ts,r),w(Tn,t,r),u(t,As,r),w(An,t,r),u(t,Es,r),w(En,t,r),u(t,Is,r),w(In,t,r),u(t,Cs,r),w(Cn,t,r),u(t,Rs,r),w(Rn,t,r),u(t,xs,r),w(xn,t,r),u(t,Ds,r),w(Dn,t,r),u(t,Ps,r),w(Pn,t,r),u(t,Ms,r),w(Mn,t,r),u(t,Ls,r),w(Ln,t,r),u(t,Fs,r),w(Fn,t,r),u(t,Gs,r),w(Gn,t,r),u(t,Os,r),w(On,t,r),u(t,Ns,r),w(Nn,t,r),u(t,Hs,r),w(Hn,t,r),u(t,Bs,r),w(Bn,t,r),u(t,Us,r),w(Un,t,r),Zn=!0},p(t,[r]){(!Zn||r&0)&&n!==(n=pt)&&(document.title=n);const Xs={};r&1&&(Xs.$$scope={dirty:r,ctx:t}),s.$set(Xs);const Ys={};r&1&&(Ys.$$scope={dirty:r,ctx:t}),l.$set(Ys);const Js={};r&1&&(Js.$$scope={dirty:r,ctx:t}),j.$set(Js);const Qs={};r&1&&(Qs.$$scope={dirty:r,ctx:t}),x.$set(Qs);const ne={};r&1&&(ne.$$scope={dirty:r,ctx:t}),H.$set(ne);const se={};r&1&&(se.$$scope={dirty:r,ctx:t}),d.$set(se);const ee={};r&1&&(ee.$$scope={dirty:r,ctx:t}),v.$set(ee);const te={};r&1&&(te.$$scope={dirty:r,ctx:t}),E.$set(te);const ae={};r&1&&(ae.$$scope={dirty:r,ctx:t}),C.$set(ae);const oe={};r&1&&(oe.$$scope={dirty:r,ctx:t}),P.$set(oe);const pe={};r&1&&(pe.$$scope={dirty:r,ctx:t}),V.$set(pe);const le={};r&1&&(le.$$scope={dirty:r,ctx:t}),Y.$set(le);const ce={};r&1&&(ce.$$scope={dirty:r,ctx:t}),Z.$set(ce);const ie={};r&1&&(ie.$$scope={dirty:r,ctx:t}),G.$set(ie);const ue={};r&1&&(ue.$$scope={dirty:r,ctx:t}),O.$set(ue);const re={};r&1&&(re.$$scope={dirty:r,ctx:t}),U.$set(re);const ke={};r&1&&(ke.$$scope={dirty:r,ctx:t}),B.$set(ke);const fe={};r&1&&(fe.$$scope={dirty:r,ctx:t}),W.$set(fe);const me={};r&1&&(me.$$scope={dirty:r,ctx:t}),X.$set(me);const de={};r&1&&(de.$$scope={dirty:r,ctx:t}),q.$set(de);const $e={};r&1&&($e.$$scope={dirty:r,ctx:t}),an.$set($e);const ge={};r&1&&(ge.$$scope={dirty:r,ctx:t}),on.$set(ge);const ye={};r&1&&(ye.$$scope={dirty:r,ctx:t}),pn.$set(ye);const we={};r&1&&(we.$$scope={dirty:r,ctx:t}),ln.$set(we);const _e={};r&1&&(_e.$$scope={dirty:r,ctx:t}),cn.$set(_e);const be={};r&1&&(be.$$scope={dirty:r,ctx:t}),un.$set(be);const ve={};r&1&&(ve.$$scope={dirty:r,ctx:t}),rn.$set(ve);const he={};r&1&&(he.$$scope={dirty:r,ctx:t}),kn.$set(he);const je={};r&1&&(je.$$scope={dirty:r,ctx:t}),fn.$set(je);const Se={};r&1&&(Se.$$scope={dirty:r,ctx:t}),mn.$set(Se);const ze={};r&1&&(ze.$$scope={dirty:r,ctx:t}),dn.$set(ze);const Te={};r&1&&(Te.$$scope={dirty:r,ctx:t}),$n.$set(Te);const Ae={};r&1&&(Ae.$$scope={dirty:r,ctx:t}),gn.$set(Ae);const Ee={};r&1&&(Ee.$$scope={dirty:r,ctx:t}),yn.$set(Ee);const Ie={};r&1&&(Ie.$$scope={dirty:r,ctx:t}),wn.$set(Ie);const Ce={};r&1&&(Ce.$$scope={dirty:r,ctx:t}),_n.$set(Ce);const Re={};r&1&&(Re.$$scope={dirty:r,ctx:t}),bn.$set(Re);const xe={};r&1&&(xe.$$scope={dirty:r,ctx:t}),vn.$set(xe);const De={};r&1&&(De.$$scope={dirty:r,ctx:t}),hn.$set(De);const Pe={};r&1&&(Pe.$$scope={dirty:r,ctx:t}),jn.$set(Pe);const Me={};r&1&&(Me.$$scope={dirty:r,ctx:t}),Sn.$set(Me);const Le={};r&1&&(Le.$$scope={dirty:r,ctx:t}),zn.$set(Le);const Fe={};r&1&&(Fe.$$scope={dirty:r,ctx:t}),Tn.$set(Fe);const Ge={};r&1&&(Ge.$$scope={dirty:r,ctx:t}),An.$set(Ge);const Oe={};r&1&&(Oe.$$scope={dirty:r,ctx:t}),En.$set(Oe);const Ne={};r&1&&(Ne.$$scope={dirty:r,ctx:t}),In.$set(Ne);const He={};r&1&&(He.$$scope={dirty:r,ctx:t}),Cn.$set(He);const Be={};r&1&&(Be.$$scope={dirty:r,ctx:t}),Rn.$set(Be);const Ue={};r&1&&(Ue.$$scope={dirty:r,ctx:t}),xn.$set(Ue);const We={};r&1&&(We.$$scope={dirty:r,ctx:t}),Dn.$set(We);const qe={};r&1&&(qe.$$scope={dirty:r,ctx:t}),Pn.$set(qe);const Ve={};r&1&&(Ve.$$scope={dirty:r,ctx:t}),Mn.$set(Ve);const Ze={};r&1&&(Ze.$$scope={dirty:r,ctx:t}),Ln.$set(Ze);const Ke={};r&1&&(Ke.$$scope={dirty:r,ctx:t}),Fn.$set(Ke);const Xe={};r&1&&(Xe.$$scope={dirty:r,ctx:t}),Gn.$set(Xe);const Ye={};r&1&&(Ye.$$scope={dirty:r,ctx:t}),On.$set(Ye);const Je={};r&1&&(Je.$$scope={dirty:r,ctx:t}),Nn.$set(Je);const Qe={};r&1&&(Qe.$$scope={dirty:r,ctx:t}),Hn.$set(Qe);const nt={};r&1&&(nt.$$scope={dirty:r,ctx:t}),Bn.$set(nt);const st={};r&1&&(st.$$scope={dirty:r,ctx:t}),Un.$set(st)},i(t){Zn||(g(e.$$.fragment,t),g(s.$$.fragment,t),g(l.$$.fragment,t),g(j.$$.fragment,t),g(x.$$.fragment,t),g(H.$$.fragment,t),g(d.$$.fragment,t),g(v.$$.fragment,t),g(E.$$.fragment,t),g(C.$$.fragment,t),g(P.$$.fragment,t),g(V.$$.fragment,t),g(Y.$$.fragment,t),g(Z.$$.fragment,t),g(G.$$.fragment,t),g(O.$$.fragment,t),g(U.$$.fragment,t),g(B.$$.fragment,t),g(W.$$.fragment,t),g(X.$$.fragment,t),g(q.$$.fragment,t),g(an.$$.fragment,t),g(on.$$.fragment,t),g(pn.$$.fragment,t),g(ln.$$.fragment,t),g(cn.$$.fragment,t),g(un.$$.fragment,t),g(rn.$$.fragment,t),g(kn.$$.fragment,t),g(fn.$$.fragment,t),g(mn.$$.fragment,t),g(dn.$$.fragment,t),g($n.$$.fragment,t),g(gn.$$.fragment,t),g(yn.$$.fragment,t),g(wn.$$.fragment,t),g(_n.$$.fragment,t),g(bn.$$.fragment,t),g(vn.$$.fragment,t),g(hn.$$.fragment,t),g(jn.$$.fragment,t),g(Sn.$$.fragment,t),g(zn.$$.fragment,t),g(Tn.$$.fragment,t),g(An.$$.fragment,t),g(En.$$.fragment,t),g(In.$$.fragment,t),g(Cn.$$.fragment,t),g(Rn.$$.fragment,t),g(xn.$$.fragment,t),g(Dn.$$.fragment,t),g(Pn.$$.fragment,t),g(Mn.$$.fragment,t),g(Ln.$$.fragment,t),g(Fn.$$.fragment,t),g(Gn.$$.fragment,t),g(On.$$.fragment,t),g(Nn.$$.fragment,t),g(Hn.$$.fragment,t),g(Bn.$$.fragment,t),g(Un.$$.fragment,t),Zn=!0)},o(t){y(e.$$.fragment,t),y(s.$$.fragment,t),y(l.$$.fragment,t),y(j.$$.fragment,t),y(x.$$.fragment,t),y(H.$$.fragment,t),y(d.$$.fragment,t),y(v.$$.fragment,t),y(E.$$.fragment,t),y(C.$$.fragment,t),y(P.$$.fragment,t),y(V.$$.fragment,t),y(Y.$$.fragment,t),y(Z.$$.fragment,t),y(G.$$.fragment,t),y(O.$$.fragment,t),y(U.$$.fragment,t),y(B.$$.fragment,t),y(W.$$.fragment,t),y(X.$$.fragment,t),y(q.$$.fragment,t),y(an.$$.fragment,t),y(on.$$.fragment,t),y(pn.$$.fragment,t),y(ln.$$.fragment,t),y(cn.$$.fragment,t),y(un.$$.fragment,t),y(rn.$$.fragment,t),y(kn.$$.fragment,t),y(fn.$$.fragment,t),y(mn.$$.fragment,t),y(dn.$$.fragment,t),y($n.$$.fragment,t),y(gn.$$.fragment,t),y(yn.$$.fragment,t),y(wn.$$.fragment,t),y(_n.$$.fragment,t),y(bn.$$.fragment,t),y(vn.$$.fragment,t),y(hn.$$.fragment,t),y(jn.$$.fragment,t),y(Sn.$$.fragment,t),y(zn.$$.fragment,t),y(Tn.$$.fragment,t),y(An.$$.fragment,t),y(En.$$.fragment,t),y(In.$$.fragment,t),y(Cn.$$.fragment,t),y(Rn.$$.fragment,t),y(xn.$$.fragment,t),y(Dn.$$.fragment,t),y(Pn.$$.fragment,t),y(Mn.$$.fragment,t),y(Ln.$$.fragment,t),y(Fn.$$.fragment,t),y(Gn.$$.fragment,t),y(On.$$.fragment,t),y(Nn.$$.fragment,t),y(Hn.$$.fragment,t),y(Bn.$$.fragment,t),y(Un.$$.fragment,t),Zn=!1},d(t){t&&i(p),_(e,t),t&&i(o),_(s,t),t&&i(a),_(l,t),t&&i(m),_(j,t),t&&i(D),_(x,t),t&&i(N),_(H,t),t&&i($),_(d,t),t&&i(h),_(v,t),t&&i(S),_(E,t),t&&i(I),_(C,t),t&&i(L),_(P,t),t&&i(Q),_(V,t),t&&i(Wn),_(Y,t),t&&i(qn),_(Z,t),t&&i(F),_(G,t),t&&i(K),_(O,t),t&&i(nn),_(U,t),t&&i(Vn),_(B,t),t&&i(J),_(W,t),t&&i(sn),_(X,t),t&&i(en),_(q,t),t&&i(tn),_(an,t),t&&i(ps),_(on,t),t&&i(ls),_(pn,t),t&&i(cs),_(ln,t),t&&i(is),_(cn,t),t&&i(us),_(un,t),t&&i(rs),_(rn,t),t&&i(ks),_(kn,t),t&&i(fs),_(fn,t),t&&i(ms),_(mn,t),t&&i(ds),_(dn,t),t&&i($s),_($n,t),t&&i(gs),_(gn,t),t&&i(ys),_(yn,t),t&&i(ws),_(wn,t),t&&i(_s),_(_n,t),t&&i(bs),_(bn,t),t&&i(vs),_(vn,t),t&&i(hs),_(hn,t),t&&i(js),_(jn,t),t&&i(Ss),_(Sn,t),t&&i(zs),_(zn,t),t&&i(Ts),_(Tn,t),t&&i(As),_(An,t),t&&i(Es),_(En,t),t&&i(Is),_(In,t),t&&i(Cs),_(Cn,t),t&&i(Rs),_(Rn,t),t&&i(xs),_(xn,t),t&&i(Ds),_(Dn,t),t&&i(Ps),_(Pn,t),t&&i(Ms),_(Mn,t),t&&i(Ls),_(Ln,t),t&&i(Fs),_(Fn,t),t&&i(Gs),_(Gn,t),t&&i(Os),_(On,t),t&&i(Ns),_(Nn,t),t&&i(Hs),_(Hn,t),t&&i(Bs),_(Bn,t),t&&i(Us),_(Un,t)}}}let pt="Revit API";class uo extends os{constructor(n){super(),as(this,n,null,io,ts,{})}}new uo({target:document.getElementById("app")})});export default ro();
