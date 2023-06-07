(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function g(){}const ue=e=>e;function w(e,t){for(const n in t)e[n]=t[n];return e}function ae(e){return e()}function re(){return Object.create(null)}function L(e){e.forEach(ae)}function U(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function qe(e){return Object.keys(e).length===0}function fe(e,...t){if(e==null)return g;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function De(e){let t;return fe(e,n=>t=n)(),t}function ht(e,t,n){e.$$.on_destroy.push(fe(t,n))}function de(e,t,n,r){if(e){const o=me(e,t,n,r);return e[0](o)}}function me(e,t,n,r){return e[1]&&r?w(n.ctx.slice(),e[1](r(t))):n.ctx}function he(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const i=[],c=Math.max(t.dirty.length,o.length);for(let u=0;u<c;u+=1)i[u]=t.dirty[u]|o[u];return i}return t.dirty|o}return t.dirty}function _e(e,t,n,r,o,i){if(o){const c=me(t,n,r,i);e.p(c,o)}}function ge(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function pe(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function P(e,t){const n={};t=new Set(t);for(const r in e)!t.has(r)&&r[0]!=="$"&&(n[r]=e[r]);return n}const ye=typeof window<"u";let be=ye?()=>window.performance.now():()=>Date.now(),Y=ye?e=>requestAnimationFrame(e):g;const x=new Set;function we(e){x.forEach(t=>{t.c(e)||(x.delete(t),t.f())}),x.size!==0&&Y(we)}function ke(e){let t;return x.size===0&&Y(we),{promise:new Promise(n=>{x.add(t={c:e,f:n})}),abort(){x.delete(t)}}}function $(e,t){e.appendChild(t)}function ve(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Fe(e){const t=Z("style");return Ie(ve(e),t),t.sheet}function Ie(e,t){return $(e.head||e,t),t.sheet}function K(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function _t(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Z(e){return document.createElement(e)}function H(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function xe(e){return document.createTextNode(e)}function Me(){return xe(" ")}function Be(){return xe("")}function Ue(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function gt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function q(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:q(e,r,t[r])}function oe(e,t){for(const n in t)q(e,n,t[n])}function Ke(e){return Array.from(e.childNodes)}function pt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function yt(e,t){e.value=t==null?"":t}function Ge(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}const F=new Map;let I=0;function He(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Je(e,t){const n={stylesheet:Fe(t),rules:{}};return F.set(e,n),n}function Le(e,t,n,r,o,i,c,u=0){const s=16.666/r;let l=`{
`;for(let f=0;f<=1;f+=s){const A=t+(n-t)*i(f);l+=f*100+`%{${c(A,1-A)}}
`}const d=l+`100% {${c(n,1-n)}}
}`,a=`__svelte_${He(d)}_${u}`,m=ve(e),{stylesheet:h,rules:_}=F.get(m)||Je(m,e);_[a]||(_[a]=!0,h.insertRule(`@keyframes ${a} ${d}`,h.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${a} ${r}ms linear ${o}ms 1 both`,I+=1,a}function Q(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),o=n.length-r.length;o&&(e.style.animation=r.join(", "),I-=o,I||Qe())}function Qe(){Y(()=>{I||(F.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&E(t)}),F.clear())})}let N;function C(e){N=e}function Ve(){if(!N)throw new Error("Function called outside component initialization");return N}function bt(e){Ve().$$.on_mount.push(e)}function We(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const S=[],se=[],T=[],ie=[],Xe=Promise.resolve();let V=!1;function Ye(){V||(V=!0,Xe.then(Ee))}function O(e){T.push(e)}const J=new Set;let R=0;function Ee(){const e=N;do{for(;R<S.length;){const t=S[R];R++,C(t),Ze(t.$$)}for(C(null),S.length=0,R=0;se.length;)se.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];J.has(n)||(J.add(n),n())}T.length=0}while(S.length);for(;ie.length;)ie.pop()();V=!1,J.clear(),C(e)}function Ze(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}let j;function je(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function M(e,t,n){e.dispatchEvent(Ge(`${t?"intro":"outro"}${n}`))}const z=new Set;let b;function Se(){b={r:0,c:[],p:b}}function Ce(){b.r||L(b.c),b=b.p}function y(e,t){e&&e.i&&(z.delete(e),e.i(t))}function k(e,t,n,r){if(e&&e.o){if(z.has(e))return;z.add(e),b.c.push(()=>{z.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const Ne={duration:0};function wt(e,t,n){let r=t(e,n),o=!1,i,c,u=0;function s(){i&&Q(e,i)}function l(){const{delay:a=0,duration:m=300,easing:h=ue,tick:_=g,css:p}=r||Ne;p&&(i=Le(e,0,1,m,a,h,p,u++)),_(0,1);const f=be()+a,A=f+m;c&&c.abort(),o=!0,O(()=>M(e,!0,"start")),c=ke(G=>{if(o){if(G>=A)return _(1,0),M(e,!0,"end"),s(),o=!1;if(G>=f){const ne=h((G-f)/m);_(ne,1-ne)}}return o})}let d=!1;return{start(){d||(d=!0,Q(e),U(r)?(r=r(),je().then(l)):l())},invalidate(){d=!1},end(){o&&(s(),o=!1)}}}function kt(e,t,n){let r=t(e,n),o=!0,i;const c=b;c.r+=1;function u(){const{delay:s=0,duration:l=300,easing:d=ue,tick:a=g,css:m}=r||Ne;m&&(i=Le(e,1,0,l,s,d,m));const h=be()+s,_=h+l;O(()=>M(e,!1,"start")),ke(p=>{if(o){if(p>=_)return a(0,1),M(e,!1,"end"),--c.r||L(c.c),!1;if(p>=h){const f=d((p-h)/l);a(1-f,f)}}return o})}return U(r)?je().then(()=>{r=r(),u()}):u(),{end(s){s&&r.tick&&r.tick(1,0),o&&(i&&Q(e,i),o=!1)}}}function ee(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const c=e[i],u=t[i];if(u){for(const s in c)s in u||(r[s]=1);for(const s in u)o[s]||(n[s]=u[s],o[s]=1);e[i]=u}else for(const s in c)o[s]=1}for(const c in r)c in n||(n[c]=void 0);return n}function et(e){e&&e.c()}function Oe(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||O(()=>{const c=e.$$.on_mount.map(ae).filter(U);e.$$.on_destroy?e.$$.on_destroy.push(...c):L(c),e.$$.on_mount=[]}),i.forEach(O)}function Ae(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(e,t){e.$$.dirty[0]===-1&&(S.push(e),Ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Re(e,t,n,r,o,i,c,u=[-1]){const s=N;C(e);const l=e.$$={fragment:null,ctx:[],props:i,update:g,not_equal:o,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:re(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};c&&c(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(a,m,...h)=>{const _=h.length?h[0]:m;return l.ctx&&o(l.ctx[a],l.ctx[a]=_)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](_),d&&tt(e,a)),m}):[],l.update(),d=!0,L(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const a=Ke(t.target);l.fragment&&l.fragment.l(a),a.forEach(E)}else l.fragment&&l.fragment.c();t.intro&&y(e.$$.fragment),Oe(e,t.target,t.anchor,t.customElement),Ee()}C(s)}class Te{$destroy(){Ae(this,1),this.$destroy=g}$on(t,n){if(!U(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(e){let t,n,r,o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 64 64"},{id:"close"},e[0],{stroke:"currentColor"},{"stroke-width":"6px"},{fill:"currentColor"},{"stroke-linecap":"square"}],i={};for(let c=0;c<o.length;c+=1)i=w(i,o[c]);return{c(){t=H("svg"),n=H("path"),r=H("path"),q(n,"d","M10.3 56.3 8 54 54 8l2.3 2.3-46 46"),q(r,"d","m54 56.3-46-46L10.3 8l46 46-2.3 2.3"),oe(t,i)},m(c,u){K(c,t,u),$(t,n),$(t,r)},p(c,[u]){oe(t,i=ee(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 64 64"},{id:"close"},u&1&&c[0],{stroke:"currentColor"},{"stroke-width":"6px"},{fill:"currentColor"},{"stroke-linecap":"square"}]))},i:g,o:g,d(c){c&&E(t)}}}function rt(e,t,n){const r=[];let o=P(t,r);return e.$$set=i=>{t=w(w({},t),pe(i)),n(0,o=P(t,r))},[o]}class ot extends Te{constructor(t){super(),Re(this,t,rt,nt,X,{})}}function st(e){let t,n,r;const o=e[8].default,i=de(o,e,e[7],null);let c=[{class:e[2]},e[3],{href:n=e[3].href}],u={};for(let s=0;s<c.length;s+=1)u=w(u,c[s]);return{c(){t=Z("a"),i&&i.c(),D(t,u)},m(s,l){K(s,t,l),i&&i.m(t,null),r=!0},p(s,l){i&&i.p&&(!r||l&128)&&_e(i,o,s,s[7],r?he(o,s[7],l,null):ge(s[7]),null),D(t,u=ee(c,[{class:s[2]},l&8&&s[3],(!r||l&8&&n!==(n=s[3].href))&&{href:n}]))},i(s){r||(y(i,s),r=!0)},o(s){k(i,s),r=!1},d(s){s&&E(t),i&&i.d(s)}}}function it(e){let t,n,r,o,i;const c=e[8].default,u=de(c,e,e[7],null);let s=e[1]&&ce(),l=[{class:e[2]},e[3]],d={};for(let a=0;a<l.length;a+=1)d=w(d,l[a]);return{c(){t=Z("button"),u&&u.c(),n=Me(),s&&s.c(),D(t,d)},m(a,m){K(a,t,m),u&&u.m(t,null),$(t,n),s&&s.m(t,null),t.autofocus&&t.focus(),r=!0,o||(i=Ue(t,"click",e[9]),o=!0)},p(a,m){u&&u.p&&(!r||m&128)&&_e(u,c,a,a[7],r?he(c,a[7],m,null):ge(a[7]),null),a[1]?s?m&2&&y(s,1):(s=ce(),s.c(),y(s,1),s.m(t,null)):s&&(Se(),k(s,1,1,()=>{s=null}),Ce()),D(t,d=ee(l,[{class:a[2]},m&8&&a[3]]))},i(a){r||(y(u,a),y(s),r=!0)},o(a){k(u,a),k(s),r=!1},d(a){a&&E(t),u&&u.d(a),s&&s.d(),o=!1,i()}}}function ce(e){let t,n;return t=new ot({props:{class:"h-3 w-3 opacity-60 group-hover:stroke-white group-hover:opacity-100 transition-[stroke] group-hover:stroke-[12px]"}}),{c(){et(t.$$.fragment)},m(r,o){Oe(t,r,o),n=!0},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){k(t.$$.fragment,r),n=!1},d(r){Ae(t,r)}}}function ct(e){let t,n,r,o;const i=[it,st],c=[];function u(s,l){return s[0]==="button"?0:1}return t=u(e),n=c[t]=i[t](e),{c(){n.c(),r=Be()},m(s,l){c[t].m(s,l),K(s,r,l),o=!0},p(s,[l]){let d=t;t=u(s),t===d?c[t].p(s,l):(Se(),k(c[d],1,1,()=>{c[d]=null}),Ce(),n=c[t],n?n.p(s,l):(n=c[t]=i[t](s),n.c()),y(n,1),n.m(r.parentNode,r))},i(s){o||(y(n),o=!0)},o(s){k(n),o=!1},d(s){c[t].d(s),s&&E(r)}}}const lt="transition-all py-2 px-6 font-bold items-center inline-flex justify-center gap-3 group align-middle relative break-words";function ut(e,t,n){const r=["variant","size","rounded","elementType","canRemove"];let o=P(t,r),{$$slots:i={},$$scope:c}=t;var u;(function(f){f.primary="bg-primary hover:bg-primary-dark text-white",f.secondary="bg-secondary hover:bg-secondary-dark text-white",f["secondary-ghost"]="bg-[white] border-2 border-secondary hover:bg-secondary hover:text-[white] text-secondary",f["secondary-light"]="bg-secondary bg-opacity-10  hover:bg-secondary hover:text-[white] text-secondary",f["mimi-pink"]="text-secondary border-2 border-mimi-pink hover:border-persian-pink bg-mimi-pink bg-opacity-10 border-opacity-80",f.remove="bg-red hover:bg-red-dark text-white",f.label="whitespace-pre flex self-stretch my-[0.25rem] text-text border-2 border-gray hover:border-red hover:text-white hover:bg-red bg-gray-light border-opacity-80 px-8 flex-wrap whitespace-normal break-all",f.ghost="bg-none text-secondary underline underline-offset-2 py-0 hover:text-secondary-dark"})(u||(u={}));var s;(function(f){f.xs="text-xs",f.sm="text-sm",f.md="text-base",f.lg="text-lg",f.xl="text-xl"})(s||(s={}));let{variant:l="primary"}=t,{size:d="md"}=t,{rounded:a=!0}=t,{elementType:m="button"}=t,{canRemove:h=!1}=t;const _=`${lt} ${u[l]} ${s[d]} ${a&&"rounded-3xl"}`;function p(f){We.call(this,e,f)}return e.$$set=f=>{t=w(w({},t),pe(f)),n(3,o=P(t,r)),"variant"in f&&n(4,l=f.variant),"size"in f&&n(5,d=f.size),"rounded"in f&&n(6,a=f.rounded),"elementType"in f&&n(0,m=f.elementType),"canRemove"in f&&n(1,h=f.canRemove),"$$scope"in f&&n(7,c=f.$$scope)},[m,h,_,o,l,d,a,c,i,p]}class vt extends Te{constructor(t){super(),Re(this,t,ut,ct,X,{variant:4,size:5,rounded:6,elementType:0,canRemove:1})}}const v=[];function at(e,t=g){let n;const r=new Set;function o(u){if(X(e,u)&&(e=u,n)){const s=!v.length;for(const l of r)l[1](),v.push(l,e);if(s){for(let l=0;l<v.length;l+=2)v[l][0](v[l+1]);v.length=0}}}function i(u){o(u(e))}function c(u,s=g){const l=[u,s];return r.add(l),r.size===1&&(n=t(o)||g),u(e),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:c}}function ze(e){e.sort(function(t,n){return t.toLowerCase()<n.toLowerCase()?-1:t.toLowerCase()>n.toLowerCase()?1:0})}function ft(e){return e.replace("&","&amp;")}function W(e){return/^-?\d+$/.test(e)}function xt(e,t){var o;const n=(o=e[0])!=null?o:" ",r=t[0];return W(r)?W(n)?!1:le(r):n.toUpperCase()==r.toUpperCase()?!1:le(r)}function le(e){return e.length<1?"":W(e[0])?"0-9":e[0].toUpperCase()}const Pe=async()=>{let e=[];const t=await chrome.storage.sync.get(["blocked"]);return!!t&&t.blocked&&t.blocked.length>0?(e=t.blocked,ze(e)):await chrome.storage.sync.set({blocked:[]}),e},dt=async(e,t)=>{if(!e)return;const n=ft(e);return t.includes(e)||(t.push(n),t.length>0&&ze(t),await te(t)),t},mt=async(e,t)=>{const n=t.indexOf(e);return t.splice(n,1),await te(t),await Pe()},te=async e=>{await chrome.storage.sync.set({blocked:e})},Lt=()=>{confirm("Weet je het zeker? Dit verwijdert alle merken die nu in je lijstje staan.")==!0&&e();async function e(){await chrome.storage.sync.set({blocked:[]})}},B=at([]),Et=async e=>{const t=await $e(),n=await dt(e,t);B.set(n)},jt=async e=>{const t=await mt(e,De(B));B.set(t)},$e=async()=>{const e=await Pe();return B.set(e),e},St=async e=>{await te(e),$e()};export{wt as A,vt as B,ot as C,kt as D,Ae as E,L as F,ht as G,B as H,xe as I,pt as J,St as K,Lt as L,gt as M,bt as N,Et as O,jt as P,$e as Q,_t as R,Te as S,Be as T,xt as U,le as V,Re as a,w as b,H as c,q as d,oe as e,K as f,$ as g,ee as h,ue as i,E as j,P as k,pe as l,Z as m,g as n,Me as o,et as p,Oe as q,yt as r,X as s,Ue as t,y as u,Se as v,at as w,k as x,Ce as y,O as z};