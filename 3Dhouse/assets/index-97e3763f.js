(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function cc(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function zs(i){if(De(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=ht(n)?Rp(n):zs(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ht(i))return i;if(it(i))return i}}const Lp=/;(?![^(]*\))/g,Pp=/:([^]+)/,Dp=/\/\*.*?\*\//gs;function Rp(i){const e={};return i.replace(Dp,"").split(Lp).forEach(t=>{if(t){const n=t.split(Pp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function uc(i){let e="";if(ht(i))e=i;else if(De(i))for(let t=0;t<i.length;t++){const n=uc(i[t]);n&&(e+=n+" ")}else if(it(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fp=cc(Ip);function ih(i){return!!i||i===""}const Op=i=>ht(i)?i:i==null?"":De(i)||it(i)&&(i.toString===ah||!Oe(i.toString))?JSON.stringify(i,rh,2):String(i),rh=(i,e)=>e&&e.__v_isRef?rh(i,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:sh(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!De(e)&&!lh(e)?String(e):e,Je={},Vr=[],En=()=>{},Np=()=>!1,zp=/^on[^a-z]/,sa=i=>zp.test(i),fc=i=>i.startsWith("onUpdate:"),Pt=Object.assign,hc=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Up=Object.prototype.hasOwnProperty,Ge=(i,e)=>Up.call(i,e),De=Array.isArray,Gr=i=>oa(i)==="[object Map]",sh=i=>oa(i)==="[object Set]",Oe=i=>typeof i=="function",ht=i=>typeof i=="string",dc=i=>typeof i=="symbol",it=i=>i!==null&&typeof i=="object",oh=i=>it(i)&&Oe(i.then)&&Oe(i.catch),ah=Object.prototype.toString,oa=i=>ah.call(i),Bp=i=>oa(i).slice(8,-1),lh=i=>oa(i)==="[object Object]",pc=i=>ht(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,No=cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},kp=/-(\w)/g,Zr=aa(i=>i.replace(kp,(e,t)=>t?t.toUpperCase():"")),Vp=/\B([A-Z])/g,fs=aa(i=>i.replace(Vp,"-$1").toLowerCase()),ch=aa(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ea=aa(i=>i?`on${ch(i)}`:""),Us=(i,e)=>!Object.is(i,e),Ca=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},qo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},uh=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Qc;const Gp=()=>Qc||(Qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Dn;class Hp{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Dn,!e&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Dn;try{return Dn=this,e()}finally{Dn=t}}}on(){Dn=this}off(){Dn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Wp(i,e=Dn){e&&e.active&&e.effects.push(i)}const mc=i=>{const e=new Set(i);return e.w=0,e.n=0,e},fh=i=>(i.w&Ci)>0,hh=i=>(i.n&Ci)>0,Xp=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Ci},qp=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];fh(r)&&!hh(r)?r.delete(i):e[t++]=r,r.w&=~Ci,r.n&=~Ci}e.length=t}},Tl=new WeakMap;let Ts=0,Ci=1;const El=30;let Mn;const tr=Symbol(""),Cl=Symbol("");class gc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Wp(this,n)}run(){if(!this.active)return this.fn();let e=Mn,t=Mi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mn,Mn=this,Mi=!0,Ci=1<<++Ts,Ts<=El?Xp(this):eu(this),this.fn()}finally{Ts<=El&&qp(this),Ci=1<<--Ts,Mn=this.parent,Mi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mn===this?this.deferStop=!0:this.active&&(eu(this),this.onStop&&this.onStop(),this.active=!1)}}function eu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Mi=!0;const dh=[];function hs(){dh.push(Mi),Mi=!1}function ds(){const i=dh.pop();Mi=i===void 0?!0:i}function en(i,e,t){if(Mi&&Mn){let n=Tl.get(i);n||Tl.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=mc()),ph(r)}}function ph(i,e){let t=!1;Ts<=El?hh(i)||(i.n|=Ci,t=!fh(i)):t=!i.has(Mn),t&&(i.add(Mn),Mn.deps.push(i))}function ii(i,e,t,n,r,s){const o=Tl.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&De(i)){const l=uh(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":De(i)?pc(t)&&a.push(o.get("length")):(a.push(o.get(tr)),Gr(i)&&a.push(o.get(Cl)));break;case"delete":De(i)||(a.push(o.get(tr)),Gr(i)&&a.push(o.get(Cl)));break;case"set":Gr(i)&&a.push(o.get(tr));break}if(a.length===1)a[0]&&Al(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Al(mc(l))}}function Al(i,e){const t=De(i)?i:[...i];for(const n of t)n.computed&&tu(n);for(const n of t)n.computed||tu(n)}function tu(i,e){(i!==Mn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Yp=cc("__proto__,__v_isRef,__isVue"),mh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(dc)),jp=_c(),$p=_c(!1,!0),Zp=_c(!0),nu=Kp();function Kp(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Xe(this);for(let s=0,o=this.length;s<o;s++)en(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Xe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){hs();const n=Xe(this)[e].apply(this,t);return ds(),n}}),i}function _c(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?dm:yh:e?vh:xh).get(n))return n;const o=De(n);if(!i&&o&&Ge(nu,r))return Reflect.get(nu,r,s);const a=Reflect.get(n,r,s);return(dc(r)?mh.has(r):Yp(r))||(i||en(n,"get",r),e)?a:At(a)?o&&pc(r)?a:a.value:it(a)?i?Mh(a):ca(a):a}}const Jp=gh(),Qp=gh(!0);function gh(i=!1){return function(t,n,r,s){let o=t[n];if(Kr(o)&&At(o)&&!At(r))return!1;if(!i&&(!Yo(r)&&!Kr(r)&&(o=Xe(o),r=Xe(r)),!De(t)&&At(o)&&!At(r)))return o.value=r,!0;const a=De(t)&&pc(n)?Number(n)<t.length:Ge(t,n),l=Reflect.set(t,n,r,s);return t===Xe(s)&&(a?Us(r,o)&&ii(t,"set",n,r):ii(t,"add",n,r)),l}}function em(i,e){const t=Ge(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&ii(i,"delete",e,void 0),n}function tm(i,e){const t=Reflect.has(i,e);return(!dc(e)||!mh.has(e))&&en(i,"has",e),t}function nm(i){return en(i,"iterate",De(i)?"length":tr),Reflect.ownKeys(i)}const _h={get:jp,set:Jp,deleteProperty:em,has:tm,ownKeys:nm},im={get:Zp,set(i,e){return!0},deleteProperty(i,e){return!0}},rm=Pt({},_h,{get:$p,set:Qp}),xc=i=>i,la=i=>Reflect.getPrototypeOf(i);function io(i,e,t=!1,n=!1){i=i.__v_raw;const r=Xe(i),s=Xe(e);t||(e!==s&&en(r,"get",e),en(r,"get",s));const{has:o}=la(r),a=n?xc:t?Mc:Bs;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function ro(i,e=!1){const t=this.__v_raw,n=Xe(t),r=Xe(i);return e||(i!==r&&en(n,"has",i),en(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function so(i,e=!1){return i=i.__v_raw,!e&&en(Xe(i),"iterate",tr),Reflect.get(i,"size",i)}function iu(i){i=Xe(i);const e=Xe(this);return la(e).has.call(e,i)||(e.add(i),ii(e,"add",i,i)),this}function ru(i,e){e=Xe(e);const t=Xe(this),{has:n,get:r}=la(t);let s=n.call(t,i);s||(i=Xe(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Us(e,o)&&ii(t,"set",i,e):ii(t,"add",i,e),this}function su(i){const e=Xe(this),{has:t,get:n}=la(e);let r=t.call(e,i);r||(i=Xe(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&ii(e,"delete",i,void 0),s}function ou(){const i=Xe(this),e=i.size!==0,t=i.clear();return e&&ii(i,"clear",void 0,void 0),t}function oo(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Xe(o),l=e?xc:i?Mc:Bs;return!i&&en(a,"iterate",tr),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function ao(i,e,t){return function(...n){const r=this.__v_raw,s=Xe(r),o=Gr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?xc:e?Mc:Bs;return!e&&en(s,"iterate",l?Cl:tr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ai(i){return function(...e){return i==="delete"?!1:this}}function sm(){const i={get(s){return io(this,s)},get size(){return so(this)},has:ro,add:iu,set:ru,delete:su,clear:ou,forEach:oo(!1,!1)},e={get(s){return io(this,s,!1,!0)},get size(){return so(this)},has:ro,add:iu,set:ru,delete:su,clear:ou,forEach:oo(!1,!0)},t={get(s){return io(this,s,!0)},get size(){return so(this,!0)},has(s){return ro.call(this,s,!0)},add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear"),forEach:oo(!0,!1)},n={get(s){return io(this,s,!0,!0)},get size(){return so(this,!0)},has(s){return ro.call(this,s,!0)},add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=ao(s,!1,!1),t[s]=ao(s,!0,!1),e[s]=ao(s,!1,!0),n[s]=ao(s,!0,!0)}),[i,t,e,n]}const[om,am,lm,cm]=sm();function vc(i,e){const t=e?i?cm:lm:i?am:om;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ge(t,r)&&r in n?t:n,r,s)}const um={get:vc(!1,!1)},fm={get:vc(!1,!0)},hm={get:vc(!0,!1)},xh=new WeakMap,vh=new WeakMap,yh=new WeakMap,dm=new WeakMap;function pm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mm(i){return i.__v_skip||!Object.isExtensible(i)?0:pm(Bp(i))}function ca(i){return Kr(i)?i:yc(i,!1,_h,um,xh)}function gm(i){return yc(i,!1,rm,fm,vh)}function Mh(i){return yc(i,!0,im,hm,yh)}function yc(i,e,t,n,r){if(!it(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=mm(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Hr(i){return Kr(i)?Hr(i.__v_raw):!!(i&&i.__v_isReactive)}function Kr(i){return!!(i&&i.__v_isReadonly)}function Yo(i){return!!(i&&i.__v_isShallow)}function bh(i){return Hr(i)||Kr(i)}function Xe(i){const e=i&&i.__v_raw;return e?Xe(e):i}function Sh(i){return qo(i,"__v_skip",!0),i}const Bs=i=>it(i)?ca(i):i,Mc=i=>it(i)?Mh(i):i;function wh(i){Mi&&Mn&&(i=Xe(i),ph(i.dep||(i.dep=mc())))}function Th(i,e){i=Xe(i),i.dep&&Al(i.dep)}function At(i){return!!(i&&i.__v_isRef===!0)}function Aa(i){return _m(i,!1)}function _m(i,e){return At(i)?i:new xm(i,e)}class xm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Xe(e),this._value=t?e:Bs(e)}get value(){return wh(this),this._value}set value(e){const t=this.__v_isShallow||Yo(e)||Kr(e);e=t?e:Xe(e),Us(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Bs(e),Th(this))}}function zo(i){return At(i)?i.value:i}const vm={get:(i,e,t)=>zo(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Eh(i){return Hr(i)?i:new Proxy(i,vm)}var Ch;class ym{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ch]=!1,this._dirty=!0,this.effect=new gc(e,()=>{this._dirty||(this._dirty=!0,Th(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Xe(this);return wh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ch="__v_isReadonly";function Mm(i,e,t=!1){let n,r;const s=Oe(i);return s?(n=i,r=En):(n=i.get,r=i.set),new ym(n,r,s||!r,t)}function bi(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){ua(s,e,t)}return r}function pn(i,e,t,n){if(Oe(i)){const s=bi(i,e,t,n);return s&&oh(s)&&s.catch(o=>{ua(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(pn(i[s],e,t,n));return r}function ua(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){bi(l,null,10,[i,o,a]);return}}bm(i,t,r,n)}function bm(i,e,t,n=!0){console.error(i)}let ks=!1,Ll=!1;const Et=[];let Nn=0;const Wr=[];let Zn=null,ji=0;const Ah=Promise.resolve();let bc=null;function Sm(i){const e=bc||Ah;return i?e.then(this?i.bind(this):i):e}function wm(i){let e=Nn+1,t=Et.length;for(;e<t;){const n=e+t>>>1;Vs(Et[n])<i?e=n+1:t=n}return e}function Sc(i){(!Et.length||!Et.includes(i,ks&&i.allowRecurse?Nn+1:Nn))&&(i.id==null?Et.push(i):Et.splice(wm(i.id),0,i),Lh())}function Lh(){!ks&&!Ll&&(Ll=!0,bc=Ah.then(Dh))}function Tm(i){const e=Et.indexOf(i);e>Nn&&Et.splice(e,1)}function Em(i){De(i)?Wr.push(...i):(!Zn||!Zn.includes(i,i.allowRecurse?ji+1:ji))&&Wr.push(i),Lh()}function au(i,e=ks?Nn+1:0){for(;e<Et.length;e++){const t=Et[e];t&&t.pre&&(Et.splice(e,1),e--,t())}}function Ph(i){if(Wr.length){const e=[...new Set(Wr)];if(Wr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Zn.sort((t,n)=>Vs(t)-Vs(n)),ji=0;ji<Zn.length;ji++)Zn[ji]();Zn=null,ji=0}}const Vs=i=>i.id==null?1/0:i.id,Cm=(i,e)=>{const t=Vs(i)-Vs(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Dh(i){Ll=!1,ks=!0,Et.sort(Cm);const e=En;try{for(Nn=0;Nn<Et.length;Nn++){const t=Et[Nn];t&&t.active!==!1&&bi(t,null,14)}}finally{Nn=0,Et.length=0,Ph(),ks=!1,bc=null,(Et.length||Wr.length)&&Dh()}}function Am(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Je;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||Je;h&&(r=t.map(m=>ht(m)?m.trim():m)),f&&(r=t.map(uh))}let a,l=n[a=Ea(e)]||n[a=Ea(Zr(e))];!l&&s&&(l=n[a=Ea(fs(e))]),l&&pn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,pn(c,i,6,r)}}function Rh(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Oe(i)){const l=c=>{const u=Rh(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(it(i)&&n.set(i,null),null):(De(s)?s.forEach(l=>o[l]=null):Pt(o,s),it(i)&&n.set(i,o),o)}function fa(i,e){return!i||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(i,e[0].toLowerCase()+e.slice(1))||Ge(i,fs(e))||Ge(i,e))}let wn=null,Ih=null;function jo(i){const e=wn;return wn=i,Ih=i&&i.type.__scopeId||null,e}function Lm(i,e=wn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&gu(-1);const s=jo(e);let o;try{o=i(...r)}finally{jo(s),n._d&&gu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function La(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:d}=i;let p,g;const S=jo(i);try{if(t.shapeFlag&4){const b=r||n;p=Fn(u.call(b,b,f,s,m,h,_)),g=l}else{const b=e;p=Fn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),g=e.props?l:Pm(l)}}catch(b){Rs.length=0,ua(b,i,1),p=ti(Cn)}let M=p;if(g&&d!==!1){const b=Object.keys(g),{shapeFlag:y}=M;b.length&&y&7&&(o&&b.some(fc)&&(g=Dm(g,o)),M=Ai(M,g))}return t.dirs&&(M=Ai(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),p=M,jo(S),p}const Pm=i=>{let e;for(const t in i)(t==="class"||t==="style"||sa(t))&&((e||(e={}))[t]=i[t]);return e},Dm=(i,e)=>{const t={};for(const n in i)(!fc(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Rm(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?lu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!fa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?lu(n,o,c):!0:!!o;return!1}function lu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!fa(t,s))return!0}return!1}function Im({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Fm=i=>i.__isSuspense;function Om(i,e){e&&e.pendingBranch?De(i)?e.effects.push(...i):e.effects.push(i):Em(i)}function Nm(i,e){if(bt){let t=bt.provides;const n=bt.parent&&bt.parent.provides;n===t&&(t=bt.provides=Object.create(n)),t[i]=e}}function Uo(i,e,t=!1){const n=bt||wn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Oe(e)?e.call(n.proxy):e}}const lo={};function Pa(i,e,t){return Fh(i,e,t)}function Fh(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=Je){const a=bt;let l,c=!1,u=!1;if(At(i)?(l=()=>i.value,c=Yo(i)):Hr(i)?(l=()=>i,n=!0):De(i)?(u=!0,c=i.some(M=>Hr(M)||Yo(M)),l=()=>i.map(M=>{if(At(M))return M.value;if(Hr(M))return Nr(M);if(Oe(M))return bi(M,a,2)})):Oe(i)?e?l=()=>bi(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),pn(i,a,3,[h])}:l=En,e&&n){const M=l;l=()=>Nr(M())}let f,h=M=>{f=g.onStop=()=>{bi(M,a,4)}},m;if(Hs)if(h=En,e?t&&pn(e,a,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const M=Og();m=M.__watcherHandles||(M.__watcherHandles=[])}else return En;let _=u?new Array(i.length).fill(lo):lo;const d=()=>{if(g.active)if(e){const M=g.run();(n||c||(u?M.some((b,y)=>Us(b,_[y])):Us(M,_)))&&(f&&f(),pn(e,a,3,[M,_===lo?void 0:u&&_[0]===lo?[]:_,h]),_=M)}else g.run()};d.allowRecurse=!!e;let p;r==="sync"?p=d:r==="post"?p=()=>zt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),p=()=>Sc(d));const g=new gc(l,p);e?t?d():_=g.run():r==="post"?zt(g.run.bind(g),a&&a.suspense):g.run();const S=()=>{g.stop(),a&&a.scope&&hc(a.scope.effects,g)};return m&&m.push(S),S}function zm(i,e,t){const n=this.proxy,r=ht(i)?i.includes(".")?Oh(n,i):()=>n[i]:i.bind(n,n);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=bt;Jr(this);const a=Fh(r,s.bind(n),t);return o?Jr(o):nr(),a}function Oh(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Nr(i,e){if(!it(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),At(i))Nr(i.value,e);else if(De(i))for(let t=0;t<i.length;t++)Nr(i[t],e);else if(sh(i)||Gr(i))i.forEach(t=>{Nr(t,e)});else if(lh(i))for(const t in i)Nr(i[t],e);return i}function Um(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wc(()=>{i.isMounted=!0}),Bh(()=>{i.isUnmounting=!0}),i}const sn=[Function,Array],Bm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},setup(i,{slots:e}){const t=Cg(),n=Um();let r;return()=>{const s=e.default&&zh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==Cn){o=d;break}}const a=Xe(i),{mode:l}=a;if(n.isLeaving)return Da(o);const c=cu(o);if(!c)return Da(o);const u=Pl(c,a,n,t);Dl(c,u);const f=t.subTree,h=f&&cu(f);let m=!1;const{getTransitionKey:_}=c.type;if(_){const d=_();r===void 0?r=d:d!==r&&(r=d,m=!0)}if(h&&h.type!==Cn&&(!$i(c,h)||m)){const d=Pl(h,a,n,t);if(Dl(h,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Da(o);l==="in-out"&&c.type!==Cn&&(d.delayLeave=(p,g,S)=>{const M=Nh(n,h);M[String(h.key)]=h,p._leaveCb=()=>{g(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},km=Bm;function Nh(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Pl(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:d,onAppear:p,onAfterAppear:g,onAppearCancelled:S}=e,M=String(i.key),b=Nh(t,i),y=(x,T)=>{x&&pn(x,n,9,T)},A=(x,T)=>{const D=T[1];y(x,T),De(x)?x.every(B=>B.length<=1)&&D():x.length<=1&&D()},P={mode:s,persisted:o,beforeEnter(x){let T=a;if(!t.isMounted)if(r)T=d||a;else return;x._leaveCb&&x._leaveCb(!0);const D=b[M];D&&$i(i,D)&&D.el._leaveCb&&D.el._leaveCb(),y(T,[x])},enter(x){let T=l,D=c,B=u;if(!t.isMounted)if(r)T=p||l,D=g||c,B=S||u;else return;let se=!1;const z=x._enterCb=I=>{se||(se=!0,I?y(B,[x]):y(D,[x]),P.delayedLeave&&P.delayedLeave(),x._enterCb=void 0)};T?A(T,[x,z]):z()},leave(x,T){const D=String(i.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return T();y(f,[x]);let B=!1;const se=x._leaveCb=z=>{B||(B=!0,T(),z?y(_,[x]):y(m,[x]),x._leaveCb=void 0,b[D]===i&&delete b[D])};b[D]=i,h?A(h,[x,se]):se()},clone(x){return Pl(x,e,t,n)}};return P}function Da(i){if(ha(i))return i=Ai(i),i.children=null,i}function cu(i){return ha(i)?i.children?i.children[0]:void 0:i}function Dl(i,e){i.shapeFlag&6&&i.component?Dl(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function zh(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===yn?(o.patchFlag&128&&r++,n=n.concat(zh(o.children,e,a))):(e||o.type!==Cn)&&n.push(a!=null?Ai(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const Bo=i=>!!i.type.__asyncLoader,ha=i=>i.type.__isKeepAlive;function Vm(i,e){Uh(i,"a",e)}function Gm(i,e){Uh(i,"da",e)}function Uh(i,e,t=bt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(da(e,n,t),t){let r=t.parent;for(;r&&r.parent;)ha(r.parent.vnode)&&Hm(n,e,t,r),r=r.parent}}function Hm(i,e,t,n){const r=da(e,i,n,!0);kh(()=>{hc(n[e],r)},t)}function da(i,e,t=bt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;hs(),Jr(t);const a=pn(e,t,i,o);return nr(),ds(),a});return n?r.unshift(s):r.push(s),s}}const oi=i=>(e,t=bt)=>(!Hs||i==="sp")&&da(i,(...n)=>e(...n),t),Wm=oi("bm"),wc=oi("m"),Xm=oi("bu"),qm=oi("u"),Bh=oi("bum"),kh=oi("um"),Ym=oi("sp"),jm=oi("rtg"),$m=oi("rtc");function Zm(i,e=bt){da("ec",i,e)}function zi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(hs(),pn(l,t,8,[i.el,a,i,e]),ds())}}const Km=Symbol();function Jm(i,e,t,n){let r;const s=t&&t[n];if(De(i)||ht(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(it(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}const Rl=i=>i?Kh(i)?Ac(i)||i.proxy:Rl(i.parent):null,Ds=Pt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Rl(i.parent),$root:i=>Rl(i.root),$emit:i=>i.emit,$options:i=>Tc(i),$forceUpdate:i=>i.f||(i.f=()=>Sc(i.update)),$nextTick:i=>i.n||(i.n=Sm.bind(i.proxy)),$watch:i=>zm.bind(i)}),Ra=(i,e)=>i!==Je&&!i.__isScriptSetup&&Ge(i,e),Qm={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ra(n,e))return o[e]=1,n[e];if(r!==Je&&Ge(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Ge(c,e))return o[e]=3,s[e];if(t!==Je&&Ge(t,e))return o[e]=4,t[e];Il&&(o[e]=0)}}const u=Ds[e];let f,h;if(u)return e==="$attrs"&&en(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Je&&Ge(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ge(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Ra(r,e)?(r[e]=t,!0):n!==Je&&Ge(n,e)?(n[e]=t,!0):Ge(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Je&&Ge(i,o)||Ra(e,o)||(a=s[0])&&Ge(a,o)||Ge(n,o)||Ge(Ds,o)||Ge(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ge(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Il=!0;function eg(i){const e=Tc(i),t=i.proxy,n=i.ctx;Il=!1,e.beforeCreate&&uu(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:d,deactivated:p,beforeDestroy:g,beforeUnmount:S,destroyed:M,unmounted:b,render:y,renderTracked:A,renderTriggered:P,errorCaptured:x,serverPrefetch:T,expose:D,inheritAttrs:B,components:se,directives:z,filters:I}=e;if(c&&tg(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const X in o){const U=o[X];Oe(U)&&(n[X]=U.bind(t))}if(r){const X=r.call(t,t);it(X)&&(i.data=ca(X))}if(Il=!0,s)for(const X in s){const U=s[X],oe=Oe(U)?U.bind(t,t):Oe(U.get)?U.get.bind(t,t):En,re=!Oe(U)&&Oe(U.set)?U.set.bind(t):En,G=Ig({get:oe,set:re});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>G.value,set:H=>G.value=H})}if(a)for(const X in a)Vh(a[X],n,t,X);if(l){const X=Oe(l)?l.call(t):l;Reflect.ownKeys(X).forEach(U=>{Nm(U,X[U])})}u&&uu(u,i,"c");function Y(X,U){De(U)?U.forEach(oe=>X(oe.bind(t))):U&&X(U.bind(t))}if(Y(Wm,f),Y(wc,h),Y(Xm,m),Y(qm,_),Y(Vm,d),Y(Gm,p),Y(Zm,x),Y($m,A),Y(jm,P),Y(Bh,S),Y(kh,b),Y(Ym,T),De(D))if(D.length){const X=i.exposed||(i.exposed={});D.forEach(U=>{Object.defineProperty(X,U,{get:()=>t[U],set:oe=>t[U]=oe})})}else i.exposed||(i.exposed={});y&&i.render===En&&(i.render=y),B!=null&&(i.inheritAttrs=B),se&&(i.components=se),z&&(i.directives=z)}function tg(i,e,t=En,n=!1){De(i)&&(i=Fl(i));for(const r in i){const s=i[r];let o;it(s)?"default"in s?o=Uo(s.from||r,s.default,!0):o=Uo(s.from||r):o=Uo(s),At(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function uu(i,e,t){pn(De(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Vh(i,e,t,n){const r=n.includes(".")?Oh(t,n):()=>t[n];if(ht(i)){const s=e[i];Oe(s)&&Pa(r,s)}else if(Oe(i))Pa(r,i.bind(t));else if(it(i))if(De(i))i.forEach(s=>Vh(s,e,t,n));else{const s=Oe(i.handler)?i.handler.bind(t):e[i.handler];Oe(s)&&Pa(r,s,i)}}function Tc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>$o(l,c,o,!0)),$o(l,e,o)),it(e)&&s.set(e,l),l}function $o(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&$o(i,s,t,!0),r&&r.forEach(o=>$o(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=ng[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const ng={data:fu,props:Wi,emits:Wi,methods:Wi,computed:Wi,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Wi,directives:Wi,watch:rg,provide:fu,inject:ig};function fu(i,e){return e?i?function(){return Pt(Oe(i)?i.call(this,this):i,Oe(e)?e.call(this,this):e)}:e:i}function ig(i,e){return Wi(Fl(i),Fl(e))}function Fl(i){if(De(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ft(i,e){return i?[...new Set([].concat(i,e))]:e}function Wi(i,e){return i?Pt(Pt(Object.create(null),i),e):e}function rg(i,e){if(!i)return e;if(!e)return i;const t=Pt(Object.create(null),i);for(const n in e)t[n]=Ft(i[n],e[n]);return t}function sg(i,e,t,n=!1){const r={},s={};qo(s,ma,1),i.propsDefaults=Object.create(null),Gh(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:gm(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function og(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Xe(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(fa(i.emitsOptions,h))continue;const m=e[h];if(l)if(Ge(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=Zr(h);r[_]=Ol(l,a,_,m,i,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Gh(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ge(e,f)&&((u=fs(f))===f||!Ge(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ol(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ge(e,f))&&(delete s[f],c=!0)}c&&ii(i,"set","$attrs")}function Gh(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(No(l))continue;const c=e[l];let u;r&&Ge(r,u=Zr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:fa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Xe(t),c=a||Je;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ol(r,l,f,c[f],i,!Ge(c,f))}}return o}function Ol(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ge(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Oe(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Jr(r),n=c[t]=l.call(null,e),nr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===fs(t))&&(n=!0))}return n}function Hh(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Oe(i)){const u=f=>{l=!0;const[h,m]=Hh(f,e,!0);Pt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return it(i)&&n.set(i,Vr),Vr;if(De(s))for(let u=0;u<s.length;u++){const f=Zr(s[u]);hu(f)&&(o[f]=Je)}else if(s)for(const u in s){const f=Zr(u);if(hu(f)){const h=s[u],m=o[f]=De(h)||Oe(h)?{type:h}:Object.assign({},h);if(m){const _=mu(Boolean,m.type),d=mu(String,m.type);m[0]=_>-1,m[1]=d<0||_<d,(_>-1||Ge(m,"default"))&&a.push(f)}}}const c=[o,a];return it(i)&&n.set(i,c),c}function hu(i){return i[0]!=="$"}function du(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function pu(i,e){return du(i)===du(e)}function mu(i,e){return De(e)?e.findIndex(t=>pu(t,i)):Oe(e)&&pu(e,i)?0:-1}const Wh=i=>i[0]==="_"||i==="$stable",Ec=i=>De(i)?i.map(Fn):[Fn(i)],ag=(i,e,t)=>{if(e._n)return e;const n=Lm((...r)=>Ec(e(...r)),t);return n._c=!1,n},Xh=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Wh(r))continue;const s=i[r];if(Oe(s))e[r]=ag(r,s,n);else if(s!=null){const o=Ec(s);e[r]=()=>o}}},qh=(i,e)=>{const t=Ec(e);i.slots.default=()=>t},lg=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Xe(e),qo(e,"_",t)):Xh(e,i.slots={})}else i.slots={},e&&qh(i,e);qo(i.slots,ma,1)},cg=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Je;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Pt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Xh(e,r)),o=e}else e&&(qh(i,e),o={default:1});if(s)for(const a in r)!Wh(a)&&!(a in o)&&delete r[a]};function Yh(){return{app:null,config:{isNativeTag:Np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ug=0;function fg(i,e){return function(n,r=null){Oe(n)||(n=Object.assign({},n)),r!=null&&!it(r)&&(r=null);const s=Yh(),o=new Set;let a=!1;const l=s.app={_uid:ug++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Ng,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...u)):Oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ti(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ac(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Nl(i,e,t,n,r=!1){if(De(i)){i.forEach((h,m)=>Nl(h,e&&(De(e)?e[m]:e),t,n,r));return}if(Bo(n)&&!r)return;const s=n.shapeFlag&4?Ac(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Je?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ht(c)?(u[c]=null,Ge(f,c)&&(f[c]=null)):At(c)&&(c.value=null)),Oe(l))bi(l,a,12,[o,u]);else{const h=ht(l),m=At(l);if(h||m){const _=()=>{if(i.f){const d=h?Ge(f,l)?f[l]:u[l]:l.value;r?De(d)&&hc(d,s):De(d)?d.includes(s)||d.push(s):h?(u[l]=[s],Ge(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Ge(f,l)&&(f[l]=o)):m&&(l.value=o,i.k&&(u[i.k]=o))};o?(_.id=-1,zt(_,t)):_()}}}const zt=Om;function hg(i){return dg(i)}function dg(i,e){const t=Gp();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=En,insertStaticContent:_}=i,d=(C,L,V,Q=null,J=null,ce=null,fe=!1,ne=null,pe=!!L.dynamicChildren)=>{if(C===L)return;C&&!$i(C,L)&&(Q=Ie(C),H(C,J,ce,!0),C=null),L.patchFlag===-2&&(pe=!1,L.dynamicChildren=null);const{type:ie,ref:w,shapeFlag:v}=L;switch(ie){case pa:p(C,L,V,Q);break;case Cn:g(C,L,V,Q);break;case Ia:C==null&&S(L,V,Q,fe);break;case yn:se(C,L,V,Q,J,ce,fe,ne,pe);break;default:v&1?y(C,L,V,Q,J,ce,fe,ne,pe):v&6?z(C,L,V,Q,J,ce,fe,ne,pe):(v&64||v&128)&&ie.process(C,L,V,Q,J,ce,fe,ne,pe,Ee)}w!=null&&J&&Nl(w,C&&C.ref,ce,L||C,!L)},p=(C,L,V,Q)=>{if(C==null)n(L.el=a(L.children),V,Q);else{const J=L.el=C.el;L.children!==C.children&&c(J,L.children)}},g=(C,L,V,Q)=>{C==null?n(L.el=l(L.children||""),V,Q):L.el=C.el},S=(C,L,V,Q)=>{[C.el,C.anchor]=_(C.children,L,V,Q,C.el,C.anchor)},M=({el:C,anchor:L},V,Q)=>{let J;for(;C&&C!==L;)J=h(C),n(C,V,Q),C=J;n(L,V,Q)},b=({el:C,anchor:L})=>{let V;for(;C&&C!==L;)V=h(C),r(C),C=V;r(L)},y=(C,L,V,Q,J,ce,fe,ne,pe)=>{fe=fe||L.type==="svg",C==null?A(L,V,Q,J,ce,fe,ne,pe):T(C,L,J,ce,fe,ne,pe)},A=(C,L,V,Q,J,ce,fe,ne)=>{let pe,ie;const{type:w,props:v,shapeFlag:F,transition:q,dirs:ee}=C;if(pe=C.el=o(C.type,ce,v&&v.is,v),F&8?u(pe,C.children):F&16&&x(C.children,pe,null,Q,J,ce&&w!=="foreignObject",fe,ne),ee&&zi(C,null,Q,"created"),v){for(const _e in v)_e!=="value"&&!No(_e)&&s(pe,_e,null,v[_e],ce,C.children,Q,J,j);"value"in v&&s(pe,"value",null,v.value),(ie=v.onVnodeBeforeMount)&&Pn(ie,Q,C)}P(pe,C,C.scopeId,fe,Q),ee&&zi(C,null,Q,"beforeMount");const ue=(!J||J&&!J.pendingBranch)&&q&&!q.persisted;ue&&q.beforeEnter(pe),n(pe,L,V),((ie=v&&v.onVnodeMounted)||ue||ee)&&zt(()=>{ie&&Pn(ie,Q,C),ue&&q.enter(pe),ee&&zi(C,null,Q,"mounted")},J)},P=(C,L,V,Q,J)=>{if(V&&m(C,V),Q)for(let ce=0;ce<Q.length;ce++)m(C,Q[ce]);if(J){let ce=J.subTree;if(L===ce){const fe=J.vnode;P(C,fe,fe.scopeId,fe.slotScopeIds,J.parent)}}},x=(C,L,V,Q,J,ce,fe,ne,pe=0)=>{for(let ie=pe;ie<C.length;ie++){const w=C[ie]=ne?gi(C[ie]):Fn(C[ie]);d(null,w,L,V,Q,J,ce,fe,ne)}},T=(C,L,V,Q,J,ce,fe)=>{const ne=L.el=C.el;let{patchFlag:pe,dynamicChildren:ie,dirs:w}=L;pe|=C.patchFlag&16;const v=C.props||Je,F=L.props||Je;let q;V&&Ui(V,!1),(q=F.onVnodeBeforeUpdate)&&Pn(q,V,L,C),w&&zi(L,C,V,"beforeUpdate"),V&&Ui(V,!0);const ee=J&&L.type!=="foreignObject";if(ie?D(C.dynamicChildren,ie,ne,V,Q,ee,ce):fe||U(C,L,ne,null,V,Q,ee,ce,!1),pe>0){if(pe&16)B(ne,L,v,F,V,Q,J);else if(pe&2&&v.class!==F.class&&s(ne,"class",null,F.class,J),pe&4&&s(ne,"style",v.style,F.style,J),pe&8){const ue=L.dynamicProps;for(let _e=0;_e<ue.length;_e++){const de=ue[_e],$=v[de],Se=F[de];(Se!==$||de==="value")&&s(ne,de,$,Se,J,C.children,V,Q,j)}}pe&1&&C.children!==L.children&&u(ne,L.children)}else!fe&&ie==null&&B(ne,L,v,F,V,Q,J);((q=F.onVnodeUpdated)||w)&&zt(()=>{q&&Pn(q,V,L,C),w&&zi(L,C,V,"updated")},Q)},D=(C,L,V,Q,J,ce,fe)=>{for(let ne=0;ne<L.length;ne++){const pe=C[ne],ie=L[ne],w=pe.el&&(pe.type===yn||!$i(pe,ie)||pe.shapeFlag&70)?f(pe.el):V;d(pe,ie,w,null,Q,J,ce,fe,!0)}},B=(C,L,V,Q,J,ce,fe)=>{if(V!==Q){if(V!==Je)for(const ne in V)!No(ne)&&!(ne in Q)&&s(C,ne,V[ne],null,fe,L.children,J,ce,j);for(const ne in Q){if(No(ne))continue;const pe=Q[ne],ie=V[ne];pe!==ie&&ne!=="value"&&s(C,ne,ie,pe,fe,L.children,J,ce,j)}"value"in Q&&s(C,"value",V.value,Q.value)}},se=(C,L,V,Q,J,ce,fe,ne,pe)=>{const ie=L.el=C?C.el:a(""),w=L.anchor=C?C.anchor:a("");let{patchFlag:v,dynamicChildren:F,slotScopeIds:q}=L;q&&(ne=ne?ne.concat(q):q),C==null?(n(ie,V,Q),n(w,V,Q),x(L.children,V,w,J,ce,fe,ne,pe)):v>0&&v&64&&F&&C.dynamicChildren?(D(C.dynamicChildren,F,V,J,ce,fe,ne),(L.key!=null||J&&L===J.subTree)&&jh(C,L,!0)):U(C,L,V,w,J,ce,fe,ne,pe)},z=(C,L,V,Q,J,ce,fe,ne,pe)=>{L.slotScopeIds=ne,C==null?L.shapeFlag&512?J.ctx.activate(L,V,Q,fe,pe):I(L,V,Q,J,ce,fe,pe):W(C,L,pe)},I=(C,L,V,Q,J,ce,fe)=>{const ne=C.component=Eg(C,Q,J);if(ha(C)&&(ne.ctx.renderer=Ee),Ag(ne),ne.asyncDep){if(J&&J.registerDep(ne,Y),!C.el){const pe=ne.subTree=ti(Cn);g(null,pe,L,V)}return}Y(ne,C,L,V,J,ce,fe)},W=(C,L,V)=>{const Q=L.component=C.component;if(Rm(C,L,V))if(Q.asyncDep&&!Q.asyncResolved){X(Q,L,V);return}else Q.next=L,Tm(Q.update),Q.update();else L.el=C.el,Q.vnode=L},Y=(C,L,V,Q,J,ce,fe)=>{const ne=()=>{if(C.isMounted){let{next:w,bu:v,u:F,parent:q,vnode:ee}=C,ue=w,_e;Ui(C,!1),w?(w.el=ee.el,X(C,w,fe)):w=ee,v&&Ca(v),(_e=w.props&&w.props.onVnodeBeforeUpdate)&&Pn(_e,q,w,ee),Ui(C,!0);const de=La(C),$=C.subTree;C.subTree=de,d($,de,f($.el),Ie($),C,J,ce),w.el=de.el,ue===null&&Im(C,de.el),F&&zt(F,J),(_e=w.props&&w.props.onVnodeUpdated)&&zt(()=>Pn(_e,q,w,ee),J)}else{let w;const{el:v,props:F}=L,{bm:q,m:ee,parent:ue}=C,_e=Bo(L);if(Ui(C,!1),q&&Ca(q),!_e&&(w=F&&F.onVnodeBeforeMount)&&Pn(w,ue,L),Ui(C,!0),v&&He){const de=()=>{C.subTree=La(C),He(v,C.subTree,C,J,null)};_e?L.type.__asyncLoader().then(()=>!C.isUnmounted&&de()):de()}else{const de=C.subTree=La(C);d(null,de,V,Q,C,J,ce),L.el=de.el}if(ee&&zt(ee,J),!_e&&(w=F&&F.onVnodeMounted)){const de=L;zt(()=>Pn(w,ue,de),J)}(L.shapeFlag&256||ue&&Bo(ue.vnode)&&ue.vnode.shapeFlag&256)&&C.a&&zt(C.a,J),C.isMounted=!0,L=V=Q=null}},pe=C.effect=new gc(ne,()=>Sc(ie),C.scope),ie=C.update=()=>pe.run();ie.id=C.uid,Ui(C,!0),ie()},X=(C,L,V)=>{L.component=C;const Q=C.vnode.props;C.vnode=L,C.next=null,og(C,L.props,Q,V),cg(C,L.children,V),hs(),au(),ds()},U=(C,L,V,Q,J,ce,fe,ne,pe=!1)=>{const ie=C&&C.children,w=C?C.shapeFlag:0,v=L.children,{patchFlag:F,shapeFlag:q}=L;if(F>0){if(F&128){re(ie,v,V,Q,J,ce,fe,ne,pe);return}else if(F&256){oe(ie,v,V,Q,J,ce,fe,ne,pe);return}}q&8?(w&16&&j(ie,J,ce),v!==ie&&u(V,v)):w&16?q&16?re(ie,v,V,Q,J,ce,fe,ne,pe):j(ie,J,ce,!0):(w&8&&u(V,""),q&16&&x(v,V,Q,J,ce,fe,ne,pe))},oe=(C,L,V,Q,J,ce,fe,ne,pe)=>{C=C||Vr,L=L||Vr;const ie=C.length,w=L.length,v=Math.min(ie,w);let F;for(F=0;F<v;F++){const q=L[F]=pe?gi(L[F]):Fn(L[F]);d(C[F],q,V,null,J,ce,fe,ne,pe)}ie>w?j(C,J,ce,!0,!1,v):x(L,V,Q,J,ce,fe,ne,pe,v)},re=(C,L,V,Q,J,ce,fe,ne,pe)=>{let ie=0;const w=L.length;let v=C.length-1,F=w-1;for(;ie<=v&&ie<=F;){const q=C[ie],ee=L[ie]=pe?gi(L[ie]):Fn(L[ie]);if($i(q,ee))d(q,ee,V,null,J,ce,fe,ne,pe);else break;ie++}for(;ie<=v&&ie<=F;){const q=C[v],ee=L[F]=pe?gi(L[F]):Fn(L[F]);if($i(q,ee))d(q,ee,V,null,J,ce,fe,ne,pe);else break;v--,F--}if(ie>v){if(ie<=F){const q=F+1,ee=q<w?L[q].el:Q;for(;ie<=F;)d(null,L[ie]=pe?gi(L[ie]):Fn(L[ie]),V,ee,J,ce,fe,ne,pe),ie++}}else if(ie>F)for(;ie<=v;)H(C[ie],J,ce,!0),ie++;else{const q=ie,ee=ie,ue=new Map;for(ie=ee;ie<=F;ie++){const xe=L[ie]=pe?gi(L[ie]):Fn(L[ie]);xe.key!=null&&ue.set(xe.key,ie)}let _e,de=0;const $=F-ee+1;let Se=!1,Ae=0;const Me=new Array($);for(ie=0;ie<$;ie++)Me[ie]=0;for(ie=q;ie<=v;ie++){const xe=C[ie];if(de>=$){H(xe,J,ce,!0);continue}let Le;if(xe.key!=null)Le=ue.get(xe.key);else for(_e=ee;_e<=F;_e++)if(Me[_e-ee]===0&&$i(xe,L[_e])){Le=_e;break}Le===void 0?H(xe,J,ce,!0):(Me[Le-ee]=ie+1,Le>=Ae?Ae=Le:Se=!0,d(xe,L[Le],V,null,J,ce,fe,ne,pe),de++)}const Te=Se?pg(Me):Vr;for(_e=Te.length-1,ie=$-1;ie>=0;ie--){const xe=ee+ie,Le=L[xe],je=xe+1<w?L[xe+1].el:Q;Me[ie]===0?d(null,Le,V,je,J,ce,fe,ne,pe):Se&&(_e<0||ie!==Te[_e]?G(Le,V,je,2):_e--)}}},G=(C,L,V,Q,J=null)=>{const{el:ce,type:fe,transition:ne,children:pe,shapeFlag:ie}=C;if(ie&6){G(C.component.subTree,L,V,Q);return}if(ie&128){C.suspense.move(L,V,Q);return}if(ie&64){fe.move(C,L,V,Ee);return}if(fe===yn){n(ce,L,V);for(let v=0;v<pe.length;v++)G(pe[v],L,V,Q);n(C.anchor,L,V);return}if(fe===Ia){M(C,L,V);return}if(Q!==2&&ie&1&&ne)if(Q===0)ne.beforeEnter(ce),n(ce,L,V),zt(()=>ne.enter(ce),J);else{const{leave:v,delayLeave:F,afterLeave:q}=ne,ee=()=>n(ce,L,V),ue=()=>{v(ce,()=>{ee(),q&&q()})};F?F(ce,ee,ue):ue()}else n(ce,L,V)},H=(C,L,V,Q=!1,J=!1)=>{const{type:ce,props:fe,ref:ne,children:pe,dynamicChildren:ie,shapeFlag:w,patchFlag:v,dirs:F}=C;if(ne!=null&&Nl(ne,null,V,C,!0),w&256){L.ctx.deactivate(C);return}const q=w&1&&F,ee=!Bo(C);let ue;if(ee&&(ue=fe&&fe.onVnodeBeforeUnmount)&&Pn(ue,L,C),w&6)me(C.component,V,Q);else{if(w&128){C.suspense.unmount(V,Q);return}q&&zi(C,null,L,"beforeUnmount"),w&64?C.type.remove(C,L,V,J,Ee,Q):ie&&(ce!==yn||v>0&&v&64)?j(ie,L,V,!1,!0):(ce===yn&&v&384||!J&&w&16)&&j(pe,L,V),Q&&ae(C)}(ee&&(ue=fe&&fe.onVnodeUnmounted)||q)&&zt(()=>{ue&&Pn(ue,L,C),q&&zi(C,null,L,"unmounted")},V)},ae=C=>{const{type:L,el:V,anchor:Q,transition:J}=C;if(L===yn){le(V,Q);return}if(L===Ia){b(C);return}const ce=()=>{r(V),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(C.shapeFlag&1&&J&&!J.persisted){const{leave:fe,delayLeave:ne}=J,pe=()=>fe(V,ce);ne?ne(C.el,ce,pe):pe()}else ce()},le=(C,L)=>{let V;for(;C!==L;)V=h(C),r(C),C=V;r(L)},me=(C,L,V)=>{const{bum:Q,scope:J,update:ce,subTree:fe,um:ne}=C;Q&&Ca(Q),J.stop(),ce&&(ce.active=!1,H(fe,C,L,V)),ne&&zt(ne,L),zt(()=>{C.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},j=(C,L,V,Q=!1,J=!1,ce=0)=>{for(let fe=ce;fe<C.length;fe++)H(C[fe],L,V,Q,J)},Ie=C=>C.shapeFlag&6?Ie(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el),be=(C,L,V)=>{C==null?L._vnode&&H(L._vnode,null,null,!0):d(L._vnode||null,C,L,null,null,null,V),au(),Ph(),L._vnode=C},Ee={p:d,um:H,m:G,r:ae,mt:I,mc:x,pc:U,pbc:D,n:Ie,o:i};let ye,He;return e&&([ye,He]=e(Ee)),{render:be,hydrate:ye,createApp:fg(be,ye)}}function Ui({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function jh(i,e,t=!1){const n=i.children,r=e.children;if(De(n)&&De(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=gi(r[s]),a.el=o.el),t||jh(o,a)),a.type===pa&&(a.el=o.el)}}function pg(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const mg=i=>i.__isTeleport,yn=Symbol(void 0),pa=Symbol(void 0),Cn=Symbol(void 0),Ia=Symbol(void 0),Rs=[];let Tn=null;function Es(i=!1){Rs.push(Tn=i?null:[])}function gg(){Rs.pop(),Tn=Rs[Rs.length-1]||null}let Gs=1;function gu(i){Gs+=i}function $h(i){return i.dynamicChildren=Gs>0?Tn||Vr:null,gg(),Gs>0&&Tn&&Tn.push(i),i}function co(i,e,t,n,r,s){return $h(zr(i,e,t,n,r,s,!0))}function _g(i,e,t,n,r){return $h(ti(i,e,t,n,r,!0))}function xg(i){return i?i.__v_isVNode===!0:!1}function $i(i,e){return i.type===e.type&&i.key===e.key}const ma="__vInternal",Zh=({key:i})=>i??null,ko=({ref:i,ref_key:e,ref_for:t})=>i!=null?ht(i)||At(i)||Oe(i)?{i:wn,r:i,k:e,f:!!t}:i:null;function zr(i,e=null,t=null,n=0,r=null,s=i===yn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Zh(e),ref:e&&ko(e),scopeId:Ih,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:wn};return a?(Cc(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),Gs>0&&!o&&Tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tn.push(l),l}const ti=vg;function vg(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Km)&&(i=Cn),xg(i)){const a=Ai(i,e,!0);return t&&Cc(a,t),Gs>0&&!s&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(i)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(Rg(i)&&(i=i.__vccOpts),e){e=yg(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=uc(a)),it(l)&&(bh(l)&&!De(l)&&(l=Pt({},l)),e.style=zs(l))}const o=ht(i)?1:Fm(i)?128:mg(i)?64:it(i)?4:Oe(i)?2:0;return zr(i,e,t,n,r,o,s,!0)}function yg(i){return i?bh(i)||ma in i?Pt({},i):i:null}function Ai(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Sg(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Zh(a),ref:e&&e.ref?t&&r?De(r)?r.concat(ko(e)):[r,ko(e)]:ko(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==yn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ai(i.ssContent),ssFallback:i.ssFallback&&Ai(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function Mg(i=" ",e=0){return ti(pa,null,i,e)}function bg(i="",e=!1){return e?(Es(),_g(Cn,null,i)):ti(Cn,null,i)}function Fn(i){return i==null||typeof i=="boolean"?ti(Cn):De(i)?ti(yn,null,i.slice()):typeof i=="object"?gi(i):ti(pa,null,String(i))}function gi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ai(i)}function Cc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Cc(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ma in e)?e._ctx=wn:r===3&&wn&&(wn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:wn},t=32):(e=String(e),n&64?(t=16,e=[Mg(e)]):t=8);i.children=e,i.shapeFlag|=t}function Sg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=uc([e.class,n.class]));else if(r==="style")e.style=zs([e.style,n.style]);else if(sa(r)){const s=e[r],o=n[r];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Pn(i,e,t,n=null){pn(i,e,7,[t,n])}const wg=Yh();let Tg=0;function Eg(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||wg,s={uid:Tg++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hh(n,r),emitsOptions:Rh(n,r),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:n.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Am.bind(null,s),i.ce&&i.ce(s),s}let bt=null;const Cg=()=>bt||wn,Jr=i=>{bt=i,i.scope.on()},nr=()=>{bt&&bt.scope.off(),bt=null};function Kh(i){return i.vnode.shapeFlag&4}let Hs=!1;function Ag(i,e=!1){Hs=e;const{props:t,children:n}=i.vnode,r=Kh(i);sg(i,t,r,e),lg(i,n);const s=r?Lg(i,e):void 0;return Hs=!1,s}function Lg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Sh(new Proxy(i.ctx,Qm));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?Dg(i):null;Jr(i),hs();const s=bi(n,i,0,[i.props,r]);if(ds(),nr(),oh(s)){if(s.then(nr,nr),e)return s.then(o=>{_u(i,o,e)}).catch(o=>{ua(o,i,0)});i.asyncDep=s}else _u(i,s,e)}else Jh(i,e)}function _u(i,e,t){Oe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:it(e)&&(i.setupState=Eh(e)),Jh(i,t)}let xu;function Jh(i,e,t){const n=i.type;if(!i.render){if(!e&&xu&&!n.render){const r=n.template||Tc(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Pt(Pt({isCustomElement:s,delimiters:a},o),l);n.render=xu(r,c)}}i.render=n.render||En}Jr(i),hs(),eg(i),ds(),nr()}function Pg(i){return new Proxy(i.attrs,{get(e,t){return en(i,"get","$attrs"),e[t]}})}function Dg(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Pg(i))},slots:i.slots,emit:i.emit,expose:e}}function Ac(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Eh(Sh(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ds)return Ds[t](i)},has(e,t){return t in e||t in Ds}}))}function Rg(i){return Oe(i)&&"__vccOpts"in i}const Ig=(i,e)=>Mm(i,e,Hs),Fg=Symbol(""),Og=()=>Uo(Fg),Ng="3.2.45",zg="http://www.w3.org/2000/svg",Zi=typeof document<"u"?document:null,vu=Zi&&Zi.createElement("template"),Ug={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Zi.createElementNS(zg,i):Zi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Zi.createTextNode(i),createComment:i=>Zi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Zi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{vu.innerHTML=n?`<svg>${i}</svg>`:i;const a=vu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Bg(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function kg(i,e,t){const n=i.style,r=ht(t);if(t&&!r){for(const s in t)zl(n,s,t[s]);if(e&&!ht(e))for(const s in e)t[s]==null&&zl(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const yu=/\s*!important$/;function zl(i,e,t){if(De(t))t.forEach(n=>zl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Vg(i,e);yu.test(t)?i.setProperty(fs(n),t.replace(yu,""),"important"):i[n]=t}}const Mu=["Webkit","Moz","ms"],Fa={};function Vg(i,e){const t=Fa[e];if(t)return t;let n=Zr(e);if(n!=="filter"&&n in i)return Fa[e]=n;n=ch(n);for(let r=0;r<Mu.length;r++){const s=Mu[r]+n;if(s in i)return Fa[e]=s}return e}const bu="http://www.w3.org/1999/xlink";function Gg(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(bu,e.slice(6,e.length)):i.setAttributeNS(bu,e,t);else{const s=Fp(e);t==null||s&&!ih(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function Hg(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=ih(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function Wg(i,e,t,n){i.addEventListener(e,t,n)}function Xg(i,e,t,n){i.removeEventListener(e,t,n)}function qg(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Yg(e);if(n){const c=s[e]=Zg(n,r);Wg(i,a,c,l)}else o&&(Xg(i,a,o,l),s[e]=void 0)}}const Su=/(?:Once|Passive|Capture)$/;function Yg(i){let e;if(Su.test(i)){e={};let n;for(;n=i.match(Su);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):fs(i.slice(2)),e]}let Oa=0;const jg=Promise.resolve(),$g=()=>Oa||(jg.then(()=>Oa=0),Oa=Date.now());function Zg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;pn(Kg(n,t.value),e,5,[n])};return t.value=i,t.attached=$g(),t}function Kg(i,e){if(De(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const wu=/^on[a-z]/,Jg=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?Bg(i,n,r):e==="style"?kg(i,t,n):sa(e)?fc(e)||qg(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qg(i,e,n,r))?Hg(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Gg(i,e,n,r))};function Qg(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&wu.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||wu.test(e)&&ht(t)?!1:e in i}const e_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};km.props;const t_=Pt({patchProp:Jg},Ug);let Tu;function n_(){return Tu||(Tu=hg(t_))}const i_=(...i)=>{const e=n_().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=r_(n);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function r_(i){return ht(i)?document.querySelector(i):i}const Lc="147",s_=0,Eu=1,o_=2,Qh=1,a_=2,Cs=3,Qr=0,mn=1,Qn=2,Si=0,Xr=1,Cu=2,Au=3,Lu=4,l_=5,Or=100,c_=101,u_=102,Pu=103,Du=104,f_=200,h_=201,d_=202,p_=203,ed=204,td=205,m_=206,g_=207,__=208,x_=209,v_=210,y_=0,M_=1,b_=2,Ul=3,S_=4,w_=5,T_=6,E_=7,nd=0,C_=1,A_=2,ni=0,L_=1,P_=2,D_=3,R_=4,I_=5,id=300,es=301,ts=302,Bl=303,kl=304,ga=306,Vl=1e3,bn=1001,Gl=1002,Ut=1003,Ru=1004,Iu=1005,cn=1006,F_=1007,_a=1008,cr=1009,O_=1010,N_=1011,rd=1012,z_=1013,Ji=1014,Qi=1015,Ws=1016,U_=1017,B_=1018,qr=1020,k_=1021,V_=1022,Sn=1023,G_=1024,H_=1025,ir=1026,ns=1027,W_=1028,X_=1029,q_=1030,Y_=1031,j_=1033,Na=33776,za=33777,Ua=33778,Ba=33779,Fu=35840,Ou=35841,Nu=35842,zu=35843,$_=36196,Uu=37492,Bu=37496,ku=37808,Vu=37809,Gu=37810,Hu=37811,Wu=37812,Xu=37813,qu=37814,Yu=37815,ju=37816,$u=37817,Zu=37818,Ku=37819,Ju=37820,Qu=37821,ef=36492,ur=3e3,et=3001,Z_=3200,K_=3201,J_=0,Q_=1,In="srgb",Xs="srgb-linear",ka=7680,e0=519,Hl=35044,tf="300 es",Wl=1035;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,nf=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function t0(i,e){return(i%e+e)%e}function Ga(i,e,t){return(1-t)*i+t*e}function rf(i){return(i&i-1)===0&&i!==0}function Xl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],_=n[8],d=r[0],p=r[3],g=r[6],S=r[1],M=r[4],b=r[7],y=r[2],A=r[5],P=r[8];return s[0]=o*d+a*S+l*y,s[3]=o*p+a*M+l*A,s[6]=o*g+a*b+l*P,s[1]=c*d+u*S+f*y,s[4]=c*p+u*M+f*A,s[7]=c*g+u*b+f*P,s[2]=h*d+m*S+_*y,s[5]=h*p+m*M+_*A,s[8]=h*g+m*b+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,_=t*f+n*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=f*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=h*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Jt;function sd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Wa={[In]:{[Xs]:rr},[Xs]:{[In]:Vo}},Rt={legacyMode:!0,get workingColorSpace(){return Xs},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Wa[e]&&Wa[e][t]!==void 0){const n=Wa[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},_n={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function fo(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=t0(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xa(o,s,e+1/3),this.g=Xa(o,s,e),this.b=Xa(o,s,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=In){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Rt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Rt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Rt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Rt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=In){const n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Rt.fromWorkingColorSpace(fo(this,ut),e),Zt(ut.r*255,0,255)<<16^Zt(ut.g*255,0,255)<<8^Zt(ut.b*255,0,255)<<0}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(fo(this,ut),t);const n=ut.r,r=ut.g,s=ut.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(fo(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=In){return Rt.fromWorkingColorSpace(fo(this,ut),e),e!==In?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(_n),_n.h+=e,_n.s+=t,_n.l+=n,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(uo);const n=Ga(_n.h,uo.h,t),r=Ga(_n.s,uo.s,t),s=Ga(_n.l,uo.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Qe.NAMES=od;let gr;class ad{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gr===void 0&&(gr=qs("canvas")),gr.width=e.width,gr.height=e.height;const n=gr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ld{constructor(e=null){this.isSource=!0,this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qa(r[o].image)):s.push(qa(r[o]))}else s=qa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ad.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n0=0;class Nt extends ps{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=bn,r=bn,s=cn,o=_a,a=Sn,l=cr,c=Nt.DEFAULT_ANISOTROPY,u=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=wi(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vl:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vl:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=id;Nt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(m+1)/2,y=(g+1)/2,A=(u+h)/4,P=(f+d)/4,x=(_+p)/4;return M>b&&M>y?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=P/n):b>y?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=A/r,s=x/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=P/s,r=x/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-d)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fr extends ps{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Nt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cd extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==_){let p=1-a;const g=l*h+c*m+u*_+f*d,S=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const y=Math.sqrt(M),A=Math.atan2(y,g*S);p=Math.sin(p*A)/y,a=Math.sin(a*A)/y}const b=a*S;if(l=l*p+h*b,c=c*p+m*b,u=u*p+_*b,f=f*p+d*b,p===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-a*m,e[t+2]=c*_+u*m+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new O,sf=new Qs;class eo{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Bi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Bi)}else n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox),ja.applyMatrix4(e.matrixWorld),this.union(ja);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),ho.subVectors(this.max,_s),_r.subVectors(e.a,_s),xr.subVectors(e.b,_s),vr.subVectors(e.c,_s),li.subVectors(xr,_r),ci.subVectors(vr,xr),ki.subVectors(_r,vr);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-ki.z,ki.y,li.z,0,-li.x,ci.z,0,-ci.x,ki.z,0,-ki.x,-li.y,li.x,0,-ci.y,ci.x,0,-ki.y,ki.x,0];return!$a(t,_r,xr,vr,ho)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,_r,xr,vr,ho))?!1:(po.crossVectors(li,ci),t=[po.x,po.y,po.z],$a(t,_r,xr,vr,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new O,new O,new O,new O,new O,new O,new O,new O],Bi=new O,ja=new eo,_r=new O,xr=new O,vr=new O,li=new O,ci=new O,ki=new O,_s=new O,ho=new O,po=new O,Vi=new O;function $a(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Vi.fromArray(i,s);const a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const r0=new eo,xs=new O,Za=new O;class Pc{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):r0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Za)),this.expandByPoint(xs.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new O,Ka=new O,mo=new O,ui=new O,Ja=new O,go=new O,Qa=new O;class ud{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.direction).multiplyScalar(t).add(this.origin),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ka.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Ka);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=ui.dot(this.direction),l=-ui.dot(mo),c=ui.lengthSq(),u=Math.abs(1-o*o);let f,h,m,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const d=1/u;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(mo).multiplyScalar(h).add(Ka),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){Ja.subVectors(t,e),go.subVectors(n,e),Qa.crossVectors(Ja,go);let o=this.direction.dot(Qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const l=a*this.direction.dot(go.crossVectors(ui,go));if(l<0)return null;const c=a*this.direction.dot(Ja.cross(ui));if(c<0||l+c>o)return null;const u=-a*ui.dot(Qa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,f,h,m,_,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=m,g[7]=_,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,_=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,d=c*f;t[0]=h+d*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,_=a*u,d=a*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=_*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,o0)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),fi.crossVectors(n,Yt),fi.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),fi.crossVectors(n,Yt)),fi.normalize(),_o.crossVectors(Yt,fi),r[0]=fi.x,r[4]=_o.x,r[8]=Yt.x,r[1]=fi.y,r[5]=_o.y,r[9]=Yt.y,r[2]=fi.z,r[6]=_o.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],_=n[2],d=n[6],p=n[10],g=n[14],S=n[3],M=n[7],b=n[11],y=n[15],A=r[0],P=r[4],x=r[8],T=r[12],D=r[1],B=r[5],se=r[9],z=r[13],I=r[2],W=r[6],Y=r[10],X=r[14],U=r[3],oe=r[7],re=r[11],G=r[15];return s[0]=o*A+a*D+l*I+c*U,s[4]=o*P+a*B+l*W+c*oe,s[8]=o*x+a*se+l*Y+c*re,s[12]=o*T+a*z+l*X+c*G,s[1]=u*A+f*D+h*I+m*U,s[5]=u*P+f*B+h*W+m*oe,s[9]=u*x+f*se+h*Y+m*re,s[13]=u*T+f*z+h*X+m*G,s[2]=_*A+d*D+p*I+g*U,s[6]=_*P+d*B+p*W+g*oe,s[10]=_*x+d*se+p*Y+g*re,s[14]=_*T+d*z+p*X+g*G,s[3]=S*A+M*D+b*I+y*U,s[7]=S*P+M*B+b*W+y*oe,s[11]=S*x+M*se+b*Y+y*re,s[15]=S*T+M*z+b*X+y*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],d=e[7],p=e[11],g=e[15];return _*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*m-n*l*m)+d*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*u-n*c*u)+g*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],d=e[13],p=e[14],g=e[15],S=f*p*c-d*h*c+d*l*m-a*p*m-f*l*g+a*h*g,M=_*h*c-u*p*c-_*l*m+o*p*m+u*l*g-o*h*g,b=u*d*c-_*f*c+_*a*m-o*d*m-u*a*g+o*f*g,y=_*f*l-u*d*l-_*a*h+o*d*h+u*a*p-o*f*p,A=t*S+n*M+r*b+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=S*P,e[1]=(d*h*s-f*p*s-d*r*m+n*p*m+f*r*g-n*h*g)*P,e[2]=(a*p*s-d*l*s+d*r*c-n*p*c-a*r*g+n*l*g)*P,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*m-n*l*m)*P,e[4]=M*P,e[5]=(u*p*s-_*h*s+_*r*m-t*p*m-u*r*g+t*h*g)*P,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*g-t*l*g)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*P,e[8]=b*P,e[9]=(_*f*s-u*d*s-_*n*m+t*d*m+u*n*g-t*f*g)*P,e[10]=(o*d*s-_*a*s+_*n*c-t*d*c-o*n*g+t*a*g)*P,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*m-t*a*m)*P,e[12]=y*P,e[13]=(u*d*r-_*f*r+_*n*h-t*d*h-u*n*p+t*f*p)*P,e[14]=(_*a*r-o*d*r-_*n*l+t*d*l+o*n*p-t*a*p)*P,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,_=s*f,d=o*u,p=o*f,g=a*f,S=l*c,M=l*u,b=l*f,y=n.x,A=n.y,P=n.z;return r[0]=(1-(d+g))*y,r[1]=(m+b)*y,r[2]=(_-M)*y,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(h+g))*A,r[6]=(p+S)*A,r[7]=0,r[8]=(_+M)*P,r[9]=(p-S)*P,r[10]=(1-(h+d))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const o=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/o,f=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),f=(t+e)*l,h=(n+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yr=new O,xn=new vt,s0=new O(0,0,0),o0=new O(1,1,1),fi=new O,_o=new O,Yt=new O,of=new vt,af=new Qs;class Bn{constructor(e=0,t=0,n=0,r=Bn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Bn.DefaultOrder="XYZ";Bn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a0=0;const lf=new O,Mr=new Qs,Yn=new vt,xo=new O,vs=new O,l0=new O,c0=new Qs,cf=new O(1,0,0),uf=new O(0,1,0),ff=new O(0,0,1),u0={type:"added"},hf={type:"removed"};class kt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DefaultUp.clone();const e=new O,t=new Bn,n=new Qs,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Jt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=kt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kt.DefaultMatrixWorldAutoUpdate,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(cf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(ff,e)}translateOnAxis(e,t){return lf.copy(e).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(ff,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(vs,xo,this.up):Yn.lookAt(xo,vs,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(u0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}kt.DefaultUp=new O(0,1,0);kt.DefaultMatrixAutoUpdate=!0;kt.DefaultMatrixWorldAutoUpdate=!0;const vn=new O,jn=new O,el=new O,$n=new O,br=new O,Sr=new O,df=new O,tl=new O,nl=new O,il=new O;class zn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vn.subVectors(r,t),jn.subVectors(n,t),el.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(jn),l=vn.dot(el),c=jn.dot(jn),u=jn.dot(el),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,$n),l.set(0,0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),jn.subVectors(e,t),vn.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),vn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return zn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;br.subVectors(r,n),Sr.subVectors(s,n),tl.subVectors(e,n);const l=br.dot(tl),c=Sr.dot(tl);if(l<=0&&c<=0)return t.copy(n);nl.subVectors(e,r);const u=br.dot(nl),f=Sr.dot(nl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(br,o);il.subVectors(e,s);const m=br.dot(il),_=Sr.dot(il);if(_>=0&&m<=_)return t.copy(s);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Sr,a);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return df.subVectors(s,r),a=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(df,a);const g=1/(p+d+h);return o=d*g,a=h*g,t.copy(n).addScaledVector(br,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let f0=0;class to extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Xr,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==Qr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Is extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new O,vo=new Ue;class An{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Hl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fd extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hd extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sr extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let h0=0;const on=new vt,rl=new kt,wr=new O,jt=new eo,ys=new eo,xt=new O;class Di extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?hd:fd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(jt.min,ys.min),jt.expandByPoint(xt),xt.addVectors(jt.max,ys.max),jt.expandByPoint(xt)):(jt.expandByPoint(ys.min),jt.expandByPoint(ys.max))}jt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(wr.fromBufferAttribute(e,c),xt.add(wr)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new O,u[D]=new O;const f=new O,h=new O,m=new O,_=new Ue,d=new Ue,p=new Ue,g=new O,S=new O;function M(D,B,se){f.fromArray(r,D*3),h.fromArray(r,B*3),m.fromArray(r,se*3),_.fromArray(o,D*2),d.fromArray(o,B*2),p.fromArray(o,se*2),h.sub(f),m.sub(f),d.sub(_),p.sub(_);const z=1/(d.x*p.y-p.x*d.y);isFinite(z)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(z),S.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(z),c[D].add(g),c[B].add(g),c[se].add(g),u[D].add(S),u[B].add(S),u[se].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,B=b.length;D<B;++D){const se=b[D],z=se.start,I=se.count;for(let W=z,Y=z+I;W<Y;W+=3)M(n[W+0],n[W+1],n[W+2])}const y=new O,A=new O,P=new O,x=new O;function T(D){P.fromArray(s,D*3),x.copy(P);const B=c[D];y.copy(B),y.sub(P.multiplyScalar(P.dot(B))).normalize(),A.crossVectors(x,B);const z=A.dot(u[D])<0?-1:1;l[D*4]=y.x,l[D*4+1]=y.y,l[D*4+2]=y.z,l[D*4+3]=z}for(let D=0,B=b.length;D<B;++D){const se=b[D],z=se.start,I=se.count;for(let W=z,Y=z+I;W<Y;W+=3)T(n[W+0]),T(n[W+1]),T(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let g=0;g<u;g++)h[_++]=c[m++]}return new An(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const pf=new vt,Tr=new ud,sl=new Pc,hi=new O,di=new O,pi=new O,ol=new O,al=new O,ll=new O,yo=new O,Mo=new O,bo=new O,So=new Ue,wo=new Ue,To=new Ue,cl=new O,Eo=new O;class kn extends kt{constructor(e=new Di,t=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),e.ray.intersectsSphere(sl)===!1)||(pf.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(pf),n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,p=m.length;d<p;d++){const g=m[d],S=r[g.materialIndex],M=Math.max(g.start,_.start),b=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let y=M,A=b;y<A;y+=3){const P=a.getX(y),x=a.getX(y+1),T=a.getX(y+2);o=Co(this,S,e,Tr,l,c,u,f,h,P,x,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const d=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let g=d,S=p;g<S;g+=3){const M=a.getX(g),b=a.getX(g+1),y=a.getX(g+2);o=Co(this,r,e,Tr,l,c,u,f,h,M,b,y),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,p=m.length;d<p;d++){const g=m[d],S=r[g.materialIndex],M=Math.max(g.start,_.start),b=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let y=M,A=b;y<A;y+=3){const P=y,x=y+1,T=y+2;o=Co(this,S,e,Tr,l,c,u,f,h,P,x,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const d=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let g=d,S=p;g<S;g+=3){const M=g,b=g+1,y=g+2;o=Co(this,r,e,Tr,l,c,u,f,h,M,b,y),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function d0(i,e,t,n,r,s,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==Qn,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:i}}function Co(i,e,t,n,r,s,o,a,l,c,u,f){hi.fromBufferAttribute(r,c),di.fromBufferAttribute(r,u),pi.fromBufferAttribute(r,f);const h=i.morphTargetInfluences;if(s&&h){yo.set(0,0,0),Mo.set(0,0,0),bo.set(0,0,0);for(let _=0,d=s.length;_<d;_++){const p=h[_],g=s[_];p!==0&&(ol.fromBufferAttribute(g,c),al.fromBufferAttribute(g,u),ll.fromBufferAttribute(g,f),o?(yo.addScaledVector(ol,p),Mo.addScaledVector(al,p),bo.addScaledVector(ll,p)):(yo.addScaledVector(ol.sub(hi),p),Mo.addScaledVector(al.sub(di),p),bo.addScaledVector(ll.sub(pi),p)))}hi.add(yo),di.add(Mo),pi.add(bo)}i.isSkinnedMesh&&(i.boneTransform(c,hi),i.boneTransform(u,di),i.boneTransform(f,pi));const m=d0(i,e,t,n,hi,di,pi,cl);if(m){a&&(So.fromBufferAttribute(a,c),wo.fromBufferAttribute(a,u),To.fromBufferAttribute(a,f),m.uv=zn.getUV(cl,hi,di,pi,So,wo,To,new Ue)),l&&(So.fromBufferAttribute(l,c),wo.fromBufferAttribute(l,u),To.fromBufferAttribute(l,f),m.uv2=zn.getUV(cl,hi,di,pi,So,wo,To,new Ue));const _={a:c,b:u,c:f,normal:new O,materialIndex:0};zn.getNormal(hi,di,pi,_.normal),m.face=_}return m}class hr extends Di{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new sr(c,3)),this.setAttribute("normal",new sr(u,3)),this.setAttribute("uv",new sr(f,2));function _(d,p,g,S,M,b,y,A,P,x,T){const D=b/P,B=y/x,se=b/2,z=y/2,I=A/2,W=P+1,Y=x+1;let X=0,U=0;const oe=new O;for(let re=0;re<Y;re++){const G=re*B-z;for(let H=0;H<W;H++){const ae=H*D-se;oe[d]=ae*S,oe[p]=G*M,oe[g]=I,c.push(oe.x,oe.y,oe.z),oe[d]=0,oe[p]=0,oe[g]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(H/P),f.push(1-re/x),X+=1}}for(let re=0;re<x;re++)for(let G=0;G<P;G++){const H=h+G+W*re,ae=h+G+W*(re+1),le=h+(G+1)+W*(re+1),me=h+(G+1)+W*re;l.push(H,ae,me),l.push(ae,le,me),U+=6}a.addGroup(m,U,T),m+=U,h+=X}}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const r in n)e[r]=n[r]}return e}function p0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dd(i){return i.getRenderTarget()===null&&i.outputEncoding===et?In:Xs}const m0={clone:is,merge:Ot};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends pd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nf*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Va*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Er=-90,Cr=1;class x0 extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new un(Er,Cr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new un(Er,Cr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new un(Er,Cr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new un(Er,Cr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new un(Er,Cr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new un(Er,Cr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ni,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class md extends Nt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new md(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hr(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Si});s.uniforms.tEquirect.value=t;const o=new kn(r,s),a=t.minFilter;return t.minFilter===_a&&(t.minFilter=cn),new x0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ul=new O,y0=new O,M0=new Jt;class Xi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ul.subVectors(n,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ul),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||M0.getNormalMatrix(e),r=this.coplanarPoint(ul).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Pc,Ao=new O;class gd{constructor(e=new Xi,t=new Xi,n=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],_=n[10],d=n[11],p=n[12],g=n[13],S=n[14],M=n[15];return t[0].setComponents(a-r,f-l,d-h,M-p).normalize(),t[1].setComponents(a+r,f+l,d+h,M+p).normalize(),t[2].setComponents(a+s,f+c,d+m,M+g).normalize(),t[3].setComponents(a-s,f-c,d-m,M-g).normalize(),t[4].setComponents(a-o,f-u,d-_,M-S).normalize(),t[5].setComponents(a+o,f+u,d+_,M+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function b0(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;i.bindBuffer(f,c),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Rc extends Di{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],_=[],d=[],p=[];for(let g=0;g<u;g++){const S=g*h-o;for(let M=0;M<c;M++){const b=M*f-s;_.push(b,-S,0),d.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){const M=S+c*g,b=S+c*(g+1),y=S+1+c*(g+1),A=S+1+c*g;m.push(M,b,A),m.push(b,y,A)}this.setIndex(m),this.setAttribute("position",new sr(_,3)),this.setAttribute("normal",new sr(d,3)),this.setAttribute("uv",new sr(p,2))}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0="vec3 transformed = vec3( position );",P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,R0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,G0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,xx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,zx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nv=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,iv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,pv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_v=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,xv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Av=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:S0,alphamap_pars_fragment:w0,alphatest_fragment:T0,alphatest_pars_fragment:E0,aomap_fragment:C0,aomap_pars_fragment:A0,begin_vertex:L0,beginnormal_vertex:P0,bsdfs:D0,iridescence_fragment:R0,bumpmap_pars_fragment:I0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:O0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:z0,color_fragment:U0,color_pars_fragment:B0,color_pars_vertex:k0,color_vertex:V0,common:G0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:j0,encodings_fragment:$0,encodings_pars_fragment:Z0,envmap_fragment:K0,envmap_common_pars_fragment:J0,envmap_pars_fragment:Q0,envmap_pars_vertex:ex,envmap_physical_pars_fragment:hx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ox,lightmap_fragment:ax,lightmap_pars_fragment:lx,lights_lambert_fragment:cx,lights_lambert_pars_fragment:ux,lights_pars_begin:fx,lights_toon_fragment:dx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:gx,lights_physical_fragment:_x,lights_physical_pars_fragment:xx,lights_fragment_begin:vx,lights_fragment_maps:yx,lights_fragment_end:Mx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Tx,map_fragment:Ex,map_pars_fragment:Cx,map_particle_fragment:Ax,map_particle_pars_fragment:Lx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Dx,morphcolor_vertex:Rx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Fx,morphtarget_vertex:Ox,normal_fragment_begin:Nx,normal_fragment_maps:zx,normal_pars_fragment:Ux,normal_pars_vertex:Bx,normal_vertex:kx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,output_fragment:qx,packing:Yx,premultiplied_alpha_fragment:jx,project_vertex:$x,dithering_fragment:Zx,dithering_pars_fragment:Kx,roughnessmap_fragment:Jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:ev,shadowmap_pars_vertex:tv,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:rv,skinning_pars_vertex:sv,skinning_vertex:ov,skinnormal_vertex:av,specularmap_fragment:lv,specularmap_pars_fragment:cv,tonemapping_fragment:uv,tonemapping_pars_fragment:fv,transmission_fragment:hv,transmission_pars_fragment:dv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:gv,uv2_pars_fragment:_v,uv2_pars_vertex:xv,uv2_vertex:vv,worldpos_vertex:yv,background_vert:Mv,background_frag:bv,backgroundCube_vert:Sv,backgroundCube_frag:wv,cube_vert:Tv,cube_frag:Ev,depth_vert:Cv,depth_frag:Av,distanceRGBA_vert:Lv,distanceRGBA_frag:Pv,equirect_vert:Dv,equirect_frag:Rv,linedashed_vert:Iv,linedashed_frag:Fv,meshbasic_vert:Ov,meshbasic_frag:Nv,meshlambert_vert:zv,meshlambert_frag:Uv,meshmatcap_vert:Bv,meshmatcap_frag:kv,meshnormal_vert:Vv,meshnormal_frag:Gv,meshphong_vert:Hv,meshphong_frag:Wv,meshphysical_vert:Xv,meshphysical_frag:qv,meshtoon_vert:Yv,meshtoon_frag:jv,points_vert:$v,points_frag:Zv,shadow_vert:Kv,shadow_frag:Jv,sprite_vert:Qv,sprite_frag:ey},ge={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Jt},uv2Transform:{value:new Jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}}},On={basic:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ot([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ot([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ot([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ot([ge.points,ge.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ot([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ot([ge.common,ge.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ot([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ot([ge.sprite,ge.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Ot([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Ot([ge.lights,ge.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};On.physical={uniforms:Ot([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Lo={r:0,b:0,g:0};function ty(i,e,t,n,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(p,g){let S=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?t:e).get(M));const b=i.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?d(a,l):M&&M.isColor&&(d(M,1),S=!0),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ga)?(u===void 0&&(u=new kn(new hr(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:is(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,(f!==M||h!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new kn(new Rc(2,2),new dr({name:"BackgroundMaterial",uniforms:is(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,g){p.getRGB(Lo,dd(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:_}}function ny(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(I,W,Y,X,U){let oe=!1;if(o){const re=d(X,Y,W);c!==re&&(c=re,m(c.object)),oe=g(I,X,Y,U),oe&&S(I,X,Y,U)}else{const re=W.wireframe===!0;(c.geometry!==X.id||c.program!==Y.id||c.wireframe!==re)&&(c.geometry=X.id,c.program=Y.id,c.wireframe=re,oe=!0)}U!==null&&t.update(U,34963),(oe||u)&&(u=!1,x(I,W,Y,X),U!==null&&i.bindBuffer(34963,t.get(U).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?i.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?i.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function d(I,W,Y){const X=Y.wireframe===!0;let U=a[I.id];U===void 0&&(U={},a[I.id]=U);let oe=U[W.id];oe===void 0&&(oe={},U[W.id]=oe);let re=oe[X];return re===void 0&&(re=p(h()),oe[X]=re),re}function p(I){const W=[],Y=[],X=[];for(let U=0;U<r;U++)W[U]=0,Y[U]=0,X[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:X,object:I,attributes:{},index:null}}function g(I,W,Y,X){const U=c.attributes,oe=W.attributes;let re=0;const G=Y.getAttributes();for(const H in G)if(G[H].location>=0){const le=U[H];let me=oe[H];if(me===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;re++}return c.attributesNum!==re||c.index!==X}function S(I,W,Y,X){const U={},oe=W.attributes;let re=0;const G=Y.getAttributes();for(const H in G)if(G[H].location>=0){let le=oe[H];le===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(le=I.instanceColor));const me={};me.attribute=le,le&&le.data&&(me.data=le.data),U[H]=me,re++}c.attributes=U,c.attributesNum=re,c.index=X}function M(){const I=c.newAttributes;for(let W=0,Y=I.length;W<Y;W++)I[W]=0}function b(I){y(I,0)}function y(I,W){const Y=c.newAttributes,X=c.enabledAttributes,U=c.attributeDivisors;Y[I]=1,X[I]===0&&(i.enableVertexAttribArray(I),X[I]=1),U[I]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),U[I]=W)}function A(){const I=c.newAttributes,W=c.enabledAttributes;for(let Y=0,X=W.length;Y<X;Y++)W[Y]!==I[Y]&&(i.disableVertexAttribArray(Y),W[Y]=0)}function P(I,W,Y,X,U,oe){n.isWebGL2===!0&&(Y===5124||Y===5125)?i.vertexAttribIPointer(I,W,Y,U,oe):i.vertexAttribPointer(I,W,Y,X,U,oe)}function x(I,W,Y,X){if(n.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const U=X.attributes,oe=Y.getAttributes(),re=W.defaultAttributeValues;for(const G in oe){const H=oe[G];if(H.location>=0){let ae=U[G];if(ae===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ae!==void 0){const le=ae.normalized,me=ae.itemSize,j=t.get(ae);if(j===void 0)continue;const Ie=j.buffer,be=j.type,Ee=j.bytesPerElement;if(ae.isInterleavedBufferAttribute){const ye=ae.data,He=ye.stride,C=ae.offset;if(ye.isInstancedInterleavedBuffer){for(let L=0;L<H.locationSize;L++)y(H.location+L,ye.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let L=0;L<H.locationSize;L++)b(H.location+L);i.bindBuffer(34962,Ie);for(let L=0;L<H.locationSize;L++)P(H.location+L,me/H.locationSize,be,le,He*Ee,(C+me/H.locationSize*L)*Ee)}else{if(ae.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)y(H.location+ye,ae.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<H.locationSize;ye++)b(H.location+ye);i.bindBuffer(34962,Ie);for(let ye=0;ye<H.locationSize;ye++)P(H.location+ye,me/H.locationSize,be,le,me*Ee,me/H.locationSize*ye*Ee)}}else if(re!==void 0){const le=re[G];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}A()}function T(){se();for(const I in a){const W=a[I];for(const Y in W){const X=W[Y];for(const U in X)_(X[U].object),delete X[U];delete W[Y]}delete a[I]}}function D(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const Y in W){const X=W[Y];for(const U in X)_(X[U].object),delete X[U];delete W[Y]}delete a[I.id]}function B(I){for(const W in a){const Y=a[W];if(Y[I.id]===void 0)continue;const X=Y[I.id];for(const U in X)_(X[U].object),delete X[U];delete Y[I.id]}}function se(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:se,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:b,disableUnusedAttributes:A}}function iy(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function ry(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),m=i.getParameter(3379),_=i.getParameter(34076),d=i.getParameter(34921),p=i.getParameter(36347),g=i.getParameter(36348),S=i.getParameter(36349),M=h>0,b=o||e.has("OES_texture_float"),y=M&&b,A=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:A}}function sy(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Xi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const _=f.length!==0||h||n!==0||r;return r=h,t=u(f,m,0),n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const _=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,M=S*4;let b=g.clippingState||null;l.value=b,b=u(_,h,M,m);for(let y=0;y!==M;++y)b[y]=t[y];g.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,_){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const g=m+d*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,b=m;M!==d;++M,b+=4)o.copy(f[M]).applyMatrix4(S,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function oy(i){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=es:a===kl&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Bl||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new v0(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ay extends pd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ur=4,mf=[.125,.215,.35,.446,.526,.582],Ki=20,fl=new ay,gf=new Qe;let hl=null;const qi=(1+Math.sqrt(5))/2,Lr=1/qi,_f=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,qi,Lr),new O(0,qi,-Lr),new O(Lr,0,qi),new O(-Lr,0,qi),new O(qi,Lr,0),new O(-qi,Lr,0)];class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){hl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl),e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ws,format:Sn,encoding:ur,depthBuffer:!1},r=vf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(s)),this._blurMaterial=cy(s,e,t)}return r}_compileMaterial(e){const t=new kn(this._lodPlanes[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,n,r){const a=new un(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(gf),u.toneMapping=ni,u.autoClear=!1;const m=new Is({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new kn(new hr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(gf),d=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):S===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const M=this._cubeSize;Po(r,S*M,g>2?M:0,M,M),u.setRenderTarget(r),d&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_f[(r-1)%_f.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),d=s/_,p=isFinite(s)?1+Math.floor(u*d):Ki;p>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ki}`);const g=[];let S=0;for(let P=0;P<Ki;++P){const x=P/d,T=Math.exp(-x*x/2);g.push(T),P===0?S+=T:P<p&&(S+=2*T)}for(let P=0;P<g.length;P++)g[P]=g[P]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-n;const b=this._sizeLods[r],y=3*b*(r>M-Ur?r-M+Ur:0),A=4*(this._cubeSize-b);Po(t,y,A,3*b,2*b),l.setRenderTarget(t),l.render(f,fl)}}function ly(i){const e=[],t=[],n=[];let r=i;const s=i-Ur+1+mf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ur?l=mf[o-i+Ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,d=3,p=2,g=1,S=new Float32Array(d*_*m),M=new Float32Array(p*_*m),b=new Float32Array(g*_*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,x=A>2?0:-1,T=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];S.set(T,d*_*A),M.set(h,p*_*A);const D=[A,A,A,A,A,A];b.set(D,g*_*A)}const y=new Di;y.setAttribute("position",new An(S,d)),y.setAttribute("uv",new An(M,p)),y.setAttribute("faceIndex",new An(b,g)),e.push(y),r>Ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vf(i,e,t){const n=new fr(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cy(i,e,t){const n=new Float32Array(Ki),r=new O(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function yf(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Mf(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===kl,u=l===es||l===ts;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new xf(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new xf(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function hy(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const m=f.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let M=0,b=S.length;M<b;M+=3){const y=S[M+0],A=S[M+1],P=S[M+2];h.push(y,A,A,P,P,y)}}else{const S=_.array;d=_.version;for(let M=0,b=S.length/3-1;M<b;M+=3){const y=M+0,A=M+1,P=M+2;h.push(y,A,A,P,P,y)}}const p=new(sd(h)?hd:fd)(h,1);p.version=d;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function dy(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){i.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let d,p;if(r)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,h*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function py(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function my(i,e){return i[0]-e[0]}function gy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _y(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let g=s.get(u);if(g===void 0||g.count!==p){let Y=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var _=Y;g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;b===!0&&(D=1),y===!0&&(D=2),A===!0&&(D=3);let B=u.attributes.position.count*D,se=1;B>e.maxTextureSize&&(se=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*se*4*p),I=new cd(z,B,se,p);I.type=Qi,I.needsUpdate=!0;const W=D*4;for(let X=0;X<p;X++){const U=P[X],oe=x[X],re=T[X],G=B*se*4*X;for(let H=0;H<U.count;H++){const ae=H*W;b===!0&&(o.fromBufferAttribute(U,H),z[G+ae+0]=o.x,z[G+ae+1]=o.y,z[G+ae+2]=o.z,z[G+ae+3]=0),y===!0&&(o.fromBufferAttribute(oe,H),z[G+ae+4]=o.x,z[G+ae+5]=o.y,z[G+ae+6]=o.z,z[G+ae+7]=0),A===!0&&(o.fromBufferAttribute(re,H),z[G+ae+8]=o.x,z[G+ae+9]=o.y,z[G+ae+10]=o.z,z[G+ae+11]=re.itemSize===4?o.w:1)}}g={count:p,texture:I,size:new Ue(B,se)},s.set(u,g),u.addEventListener("dispose",Y)}let S=0;for(let b=0;b<m.length;b++)S+=m[b];const M=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",m),h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const A=p[y];A[0]=y,A[1]=m[y]}p.sort(gy);for(let y=0;y<8;y++)y<d&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(my);const g=u.morphAttributes.position,S=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const A=a[y],P=A[0],x=A[1];P!==Number.MAX_SAFE_INTEGER&&x?(g&&u.getAttribute("morphTarget"+y)!==g[P]&&u.setAttribute("morphTarget"+y,g[P]),S&&u.getAttribute("morphNormal"+y)!==S[P]&&u.setAttribute("morphNormal"+y,S[P]),r[y]=x,M+=x):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),S&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const b=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function xy(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const xd=new Nt,vd=new cd,yd=new i0,Md=new md,bf=[],Sf=[],wf=new Float32Array(16),Tf=new Float32Array(9),Ef=new Float32Array(4);function ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bf[r];if(s===void 0&&(s=new Float32Array(r),bf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xa(i,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Sy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Ef.set(n),i.uniformMatrix2fv(this.addr,!1,Ef),pt(t,n)}}function wy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),pt(t,n)}}function Ty(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;wf.set(n),i.uniformMatrix4fv(this.addr,!1,wf),pt(t,n)}}function Ey(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Py(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Ry(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Fy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||xd,r)}function Oy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yd,r)}function Ny(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Md,r)}function zy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vd,r)}function Uy(i){switch(i){case 5126:return vy;case 35664:return yy;case 35665:return My;case 35666:return by;case 35674:return Sy;case 35675:return wy;case 35676:return Ty;case 5124:case 35670:return Ey;case 35667:case 35671:return Cy;case 35668:case 35672:return Ay;case 35669:case 35673:return Ly;case 5125:return Py;case 36294:return Dy;case 36295:return Ry;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return zy}}function By(i,e){i.uniform1fv(this.addr,e)}function ky(i,e){const t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function Vy(i,e){const t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function Gy(i,e){const t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function Hy(i,e){const t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wy(i,e){const t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xy(i,e){const t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qy(i,e){i.uniform1iv(this.addr,e)}function Yy(i,e){i.uniform2iv(this.addr,e)}function jy(i,e){i.uniform3iv(this.addr,e)}function $y(i,e){i.uniform4iv(this.addr,e)}function Zy(i,e){i.uniform1uiv(this.addr,e)}function Ky(i,e){i.uniform2uiv(this.addr,e)}function Jy(i,e){i.uniform3uiv(this.addr,e)}function Qy(i,e){i.uniform4uiv(this.addr,e)}function eM(i,e,t){const n=this.cache,r=e.length,s=xa(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xd,s[o])}function tM(i,e,t){const n=this.cache,r=e.length,s=xa(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||yd,s[o])}function nM(i,e,t){const n=this.cache,r=e.length,s=xa(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Md,s[o])}function iM(i,e,t){const n=this.cache,r=e.length,s=xa(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vd,s[o])}function rM(i){switch(i){case 5126:return By;case 35664:return ky;case 35665:return Vy;case 35666:return Gy;case 35674:return Hy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return jy;case 35669:case 35673:return $y;case 5125:return Zy;case 36294:return Ky;case 36295:return Jy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Uy(t.type)}}class oM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rM(t.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function Cf(i,e){i.seq.push(e),i.map[e.id]=e}function lM(i,e,t){const n=i.name,r=n.length;for(dl.lastIndex=0;;){const s=dl.exec(n),o=dl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cf(t,c===void 0?new sM(a,i,e):new oM(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new aM(a),Cf(t,f)),t=f}}}class Go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);lM(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Af(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let cM=0;function uM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function fM(i){switch(i){case ur:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Lf(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uM(i.getShaderSource(e),o)}else return r}function hM(i,e){const t=fM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dM(i,e){let t;switch(e){case L_:t="Linear";break;case P_:t="Reinhard";break;case D_:t="OptimizedCineon";break;case R_:t="ACESFilmic";break;case I_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function mM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function As(i){return i!==""}function Pf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(_M,xM)}function xM(i,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ql(t)}const vM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(i){return i.replace(vM,yM)}function yM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function If(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cs&&(e="SHADOWMAP_TYPE_VSM"),e}function bM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function wM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case C_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function TM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function EM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=MM(t),c=bM(t),u=SM(t),f=wM(t),h=TM(t),m=t.isWebGL2?"":pM(t),_=mM(s),d=r.createProgram();let p,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(As).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(As).join(`
`),g.length>0&&(g+=`
`)):(p=[If(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),g=[m,If(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Re.tonemapping_pars_fragment:"",t.toneMapping!==ni?dM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,hM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=ql(o),o=Pf(o,t),o=Df(o,t),a=ql(a),a=Pf(a,t),a=Df(a,t),o=Rf(o),a=Rf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=S+p+o,b=S+g+a,y=Af(r,35633,M),A=Af(r,35632,b);if(r.attachShader(d,y),r.attachShader(d,A),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const T=r.getProgramInfoLog(d).trim(),D=r.getShaderInfoLog(y).trim(),B=r.getShaderInfoLog(A).trim();let se=!0,z=!0;if(r.getProgramParameter(d,35714)===!1){se=!1;const I=Lf(r,y,"vertex"),W=Lf(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+I+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||B==="")&&(z=!1);z&&(this.diagnostics={runnable:se,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:g}})}r.deleteShader(y),r.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new Go(r,d)),P};let x;return this.getAttributes=function(){return x===void 0&&(x=gM(r,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=A,this}let CM=0;class AM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new LM(e),t.set(e,n)),n}}class LM{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}}function PM(i,e,t,n,r,s,o){const a=new Dc,l=new AM,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,D,B,se){const z=B.fog,I=se.geometry,W=x.isMeshStandardMaterial?B.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),X=Y&&Y.mapping===ga?Y.image.height:null,U=_[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const oe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,re=oe!==void 0?oe.length:0;let G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let H,ae,le,me;if(U){const He=On[U];H=He.vertexShader,ae=He.fragmentShader}else H=x.vertexShader,ae=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);const j=i.getRenderTarget(),Ie=x.alphaTest>0,be=x.clearcoat>0,Ee=x.iridescence>0;return{isWebGL2:u,shaderID:U,shaderName:x.type,vertexShader:H,fragmentShader:ae,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:se.isInstancedMesh===!0,instancingColor:se.isInstancedMesh===!0&&se.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j===null?i.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:ur,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:X,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Q_,tangentSpaceNormalMap:x.normalMapType===J_,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===et,clearcoat:be,clearcoatMap:be&&!!x.clearcoatMap,clearcoatRoughnessMap:be&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!x.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!x.iridescenceMap,iridescenceThicknessMap:Ee&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Xr,alphaMap:!!x.alphaMap,alphaTest:Ie,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:se.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:G,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:ni,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===mn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(T,x),S(T,x),T.push(i.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),x.push(a.mask)}function M(x){const T=_[x.type];let D;if(T){const B=On[T];D=m0.clone(B.uniforms)}else D=x.uniforms;return D}function b(x,T){let D;for(let B=0,se=c.length;B<se;B++){const z=c[B];if(z.cacheKey===T){D=z,++D.usedTimes;break}}return D===void 0&&(D=new EM(i,T,x,s),c.push(D)),D}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:P}}function DM(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function RM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Of(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,m,_,d,p){let g=i[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:d,group:p},i[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=d,g.group=p),e++,g}function a(f,h,m,_,d,p){const g=o(f,h,m,_,d,p);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(f,h,m,_,d,p){const g=o(f,h,m,_,d,p);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||RM),n.length>1&&n.sort(h||Ff),r.length>1&&r.sort(h||Ff)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function IM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Of,i.set(n,[o])):r>=s.length?(o=new Of,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function FM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Qe};break;case"SpotLight":t={position:new O,direction:new O,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function OM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let NM=0;function zM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function UM(i,e){const t=new FM,n=OM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new vt,a=new vt;function l(u,f){let h=0,m=0,_=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let d=0,p=0,g=0,S=0,M=0,b=0,y=0,A=0,P=0,x=0;u.sort(zM);const T=f!==!0?Math.PI:1;for(let B=0,se=u.length;B<se;B++){const z=u[B],I=z.color,W=z.intensity,Y=z.distance,X=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=I.r*W*T,m+=I.g*W*T,_+=I.b*W*T;else if(z.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(z.sh.coefficients[U],W);else if(z.isDirectionalLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const oe=z.shadow,re=n.get(z);re.shadowBias=oe.bias,re.shadowNormalBias=oe.normalBias,re.shadowRadius=oe.radius,re.shadowMapSize=oe.mapSize,r.directionalShadow[d]=re,r.directionalShadowMap[d]=X,r.directionalShadowMatrix[d]=z.shadow.matrix,b++}r.directional[d]=U,d++}else if(z.isSpotLight){const U=t.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(I).multiplyScalar(W*T),U.distance=Y,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,r.spot[g]=U;const oe=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,oe.updateMatrices(z),z.castShadow&&x++),r.spotLightMatrix[g]=oe.matrix,z.castShadow){const re=n.get(z);re.shadowBias=oe.bias,re.shadowNormalBias=oe.normalBias,re.shadowRadius=oe.radius,re.shadowMapSize=oe.mapSize,r.spotShadow[g]=re,r.spotShadowMap[g]=X,A++}g++}else if(z.isRectAreaLight){const U=t.get(z);U.color.copy(I).multiplyScalar(W),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=U,S++}else if(z.isPointLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*T),U.distance=z.distance,U.decay=z.decay,z.castShadow){const oe=z.shadow,re=n.get(z);re.shadowBias=oe.bias,re.shadowNormalBias=oe.normalBias,re.shadowRadius=oe.radius,re.shadowMapSize=oe.mapSize,re.shadowCameraNear=oe.camera.near,re.shadowCameraFar=oe.camera.far,r.pointShadow[p]=re,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=z.shadow.matrix,y++}r.point[p]=U,p++}else if(z.isHemisphereLight){const U=t.get(z);U.skyColor.copy(z.color).multiplyScalar(W*T),U.groundColor.copy(z.groundColor).multiplyScalar(W*T),r.hemi[M]=U,M++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const D=r.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==g||D.rectAreaLength!==S||D.hemiLength!==M||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==A||D.numSpotMaps!==P)&&(r.directional.length=d,r.spot.length=g,r.rectArea.length=S,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=A+P-x,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=x,D.directionalLength=d,D.pointLength=p,D.spotLength=g,D.rectAreaLength=S,D.hemiLength=M,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=A,D.numSpotMaps=P,r.version=NM++)}function c(u,f){let h=0,m=0,_=0,d=0,p=0;const g=f.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){const b=u[S];if(b.isDirectionalLight){const y=r.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(b.isSpotLight){const y=r.spot[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const y=r.rectArea[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(b.isPointLight){const y=r.point[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function Nf(i,e){const t=new UM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function BM(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Nf(i,e),t.set(s,[l])):o>=a.length?(l=new Nf(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class kM extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VM extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WM(i,e,t){let n=new gd;const r=new Ue,s=new Ue,o=new St,a=new kM({depthPacking:K_}),l=new VM,c={},u=t.maxTextureSize,f={0:mn,1:Qr,2:Qn},h=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:GM,fragmentShader:HM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Di;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new kn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh,this.render=function(b,y,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Si),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let B=0,se=b.length;B<se;B++){const z=b[B],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const W=I.getFrameExtents();if(r.multiply(W),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,I.mapSize.y=s.y)),I.map===null){const X=this.type!==Cs?{minFilter:Ut,magFilter:Ut}:{};I.map=new fr(r.x,r.y,X),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const Y=I.getViewportCount();for(let X=0;X<Y;X++){const U=I.getViewport(X);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),D.viewport(o),I.updateMatrices(z,X),n=I.getFrustum(),M(y,A,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===Cs&&g(I,A),I.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(P,x,T)};function g(b,y){const A=e.update(d);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new fr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,A,h,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,A,m,d,null)}function S(b,y,A,P,x,T){let D=null;const B=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0?D=B:D=A.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const se=D.uuid,z=y.uuid;let I=c[se];I===void 0&&(I={},c[se]=I);let W=I[z];W===void 0&&(W=D.clone(),I[z]=W),D=W}return D.visible=y.visible,D.wireframe=y.wireframe,T===Cs?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:f[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=P,D.farDistance=x),D}function M(b,y,A,P,x){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Cs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const B=e.update(b),se=b.material;if(Array.isArray(se)){const z=B.groups;for(let I=0,W=z.length;I<W;I++){const Y=z[I],X=se[Y.materialIndex];if(X&&X.visible){const U=S(b,X,P,A.near,A.far,x);i.renderBufferDirect(A,null,B,U,b,Y)}}}else if(se.visible){const z=S(b,se,P,A.near,A.far,x);i.renderBufferDirect(A,null,B,z,b,null)}}const D=b.children;for(let B=0,se=D.length;B<se;B++)M(D[B],y,A,P,x)}}function XM(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const K=new St;let he=null;const ve=new St(0,0,0,0);return{setMask:function(we){he!==we&&!R&&(i.colorMask(we,we,we,we),he=we)},setLocked:function(we){R=we},setClear:function(we,qe,gt,wt,Ii){Ii===!0&&(we*=wt,qe*=wt,gt*=wt),K.set(we,qe,gt,wt),ve.equals(K)===!1&&(i.clearColor(we,qe,gt,wt),ve.copy(K))},reset:function(){R=!1,he=null,ve.set(-1,0,0,0)}}}function s(){let R=!1,K=null,he=null,ve=null;return{setTest:function(we){we?Ie(2929):be(2929)},setMask:function(we){K!==we&&!R&&(i.depthMask(we),K=we)},setFunc:function(we){if(he!==we){switch(we){case y_:i.depthFunc(512);break;case M_:i.depthFunc(519);break;case b_:i.depthFunc(513);break;case Ul:i.depthFunc(515);break;case S_:i.depthFunc(514);break;case w_:i.depthFunc(518);break;case T_:i.depthFunc(516);break;case E_:i.depthFunc(517);break;default:i.depthFunc(515)}he=we}},setLocked:function(we){R=we},setClear:function(we){ve!==we&&(i.clearDepth(we),ve=we)},reset:function(){R=!1,K=null,he=null,ve=null}}}function o(){let R=!1,K=null,he=null,ve=null,we=null,qe=null,gt=null,wt=null,Ii=null;return{setTest:function(Ke){R||(Ke?Ie(2960):be(2960))},setMask:function(Ke){K!==Ke&&!R&&(i.stencilMask(Ke),K=Ke)},setFunc:function(Ke,Hn,rn){(he!==Ke||ve!==Hn||we!==rn)&&(i.stencilFunc(Ke,Hn,rn),he=Ke,ve=Hn,we=rn)},setOp:function(Ke,Hn,rn){(qe!==Ke||gt!==Hn||wt!==rn)&&(i.stencilOp(Ke,Hn,rn),qe=Ke,gt=Hn,wt=rn)},setLocked:function(Ke){R=Ke},setClear:function(Ke){Ii!==Ke&&(i.clearStencil(Ke),Ii=Ke)},reset:function(){R=!1,K=null,he=null,ve=null,we=null,qe=null,gt=null,wt=null,Ii=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,d=[],p=null,g=!1,S=null,M=null,b=null,y=null,A=null,P=null,x=null,T=!1,D=null,B=null,se=null,z=null,I=null;const W=i.getParameter(35661);let Y=!1,X=0;const U=i.getParameter(7938);U.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=X>=1):U.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=X>=2);let oe=null,re={};const G=i.getParameter(3088),H=i.getParameter(2978),ae=new St().fromArray(G),le=new St().fromArray(H);function me(R,K,he){const ve=new Uint8Array(4),we=i.createTexture();i.bindTexture(R,we),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let qe=0;qe<he;qe++)i.texImage2D(K+qe,0,6408,1,1,0,6408,5121,ve);return we}const j={};j[3553]=me(3553,3553,1),j[34067]=me(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(2929),l.setFunc(Ul),J(!1),ce(Eu),Ie(2884),V(Si);function Ie(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function be(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Ee(R,K){return m[R]!==K?(i.bindFramebuffer(R,K),m[R]=K,n&&(R===36009&&(m[36160]=K),R===36160&&(m[36009]=K)),!0):!1}function ye(R,K){let he=d,ve=!1;if(R)if(he=_.get(K),he===void 0&&(he=[],_.set(K,he)),R.isWebGLMultipleRenderTargets){const we=R.texture;if(he.length!==we.length||he[0]!==36064){for(let qe=0,gt=we.length;qe<gt;qe++)he[qe]=36064+qe;he.length=we.length,ve=!0}}else he[0]!==36064&&(he[0]=36064,ve=!0);else he[0]!==1029&&(he[0]=1029,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function He(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const C={[Or]:32774,[c_]:32778,[u_]:32779};if(n)C[Pu]=32775,C[Du]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(C[Pu]=R.MIN_EXT,C[Du]=R.MAX_EXT)}const L={[f_]:0,[h_]:1,[d_]:768,[ed]:770,[v_]:776,[__]:774,[m_]:772,[p_]:769,[td]:771,[x_]:775,[g_]:773};function V(R,K,he,ve,we,qe,gt,wt){if(R===Si){g===!0&&(be(3042),g=!1);return}if(g===!1&&(Ie(3042),g=!0),R!==l_){if(R!==S||wt!==T){if((M!==Or||A!==Or)&&(i.blendEquation(32774),M=Or,A=Or),wt)switch(R){case Xr:i.blendFuncSeparate(1,771,1,771);break;case Cu:i.blendFunc(1,1);break;case Au:i.blendFuncSeparate(0,769,0,1);break;case Lu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Xr:i.blendFuncSeparate(770,771,1,771);break;case Cu:i.blendFunc(770,1);break;case Au:i.blendFuncSeparate(0,769,0,1);break;case Lu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,y=null,P=null,x=null,S=R,T=wt}return}we=we||K,qe=qe||he,gt=gt||ve,(K!==M||we!==A)&&(i.blendEquationSeparate(C[K],C[we]),M=K,A=we),(he!==b||ve!==y||qe!==P||gt!==x)&&(i.blendFuncSeparate(L[he],L[ve],L[qe],L[gt]),b=he,y=ve,P=qe,x=gt),S=R,T=!1}function Q(R,K){R.side===Qn?be(2884):Ie(2884);let he=R.side===mn;K&&(he=!he),J(he),R.blending===Xr&&R.transparent===!1?V(Si):V(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ve=R.stencilWrite;c.setTest(ve),ve&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ie(32926):be(32926)}function J(R){D!==R&&(R?i.frontFace(2304):i.frontFace(2305),D=R)}function ce(R){R!==s_?(Ie(2884),R!==B&&(R===Eu?i.cullFace(1029):R===o_?i.cullFace(1028):i.cullFace(1032))):be(2884),B=R}function fe(R){R!==se&&(Y&&i.lineWidth(R),se=R)}function ne(R,K,he){R?(Ie(32823),(z!==K||I!==he)&&(i.polygonOffset(K,he),z=K,I=he)):be(32823)}function pe(R){R?Ie(3089):be(3089)}function ie(R){R===void 0&&(R=33984+W-1),oe!==R&&(i.activeTexture(R),oe=R)}function w(R,K,he){he===void 0&&(oe===null?he=33984+W-1:he=oe);let ve=re[he];ve===void 0&&(ve={type:void 0,texture:void 0},re[he]=ve),(ve.type!==R||ve.texture!==K)&&(oe!==he&&(i.activeTexture(he),oe=he),i.bindTexture(R,K||j[R]),ve.type=R,ve.texture=K)}function v(){const R=re[oe];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(R){ae.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ae.copy(R))}function xe(R){le.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),le.copy(R))}function Le(R,K){let he=f.get(K);he===void 0&&(he=new WeakMap,f.set(K,he));let ve=he.get(R);ve===void 0&&(ve=i.getUniformBlockIndex(K,R.name),he.set(R,ve))}function je(R,K){const ve=f.get(K).get(R);u.get(R)!==ve&&(i.uniformBlockBinding(K,ve,R.__bindingPointIndex),u.set(R,ve))}function mt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,re={},m={},_=new WeakMap,d=[],p=null,g=!1,S=null,M=null,b=null,y=null,A=null,P=null,x=null,T=!1,D=null,B=null,se=null,z=null,I=null,ae.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:be,bindFramebuffer:Ee,drawBuffers:ye,useProgram:He,setBlending:V,setMaterial:Q,setFlipSided:J,setCullFace:ce,setLineWidth:fe,setPolygonOffset:ne,setScissorTest:pe,activeTexture:ie,bindTexture:w,unbindTexture:v,compressedTexImage2D:F,compressedTexImage3D:q,texImage2D:Ae,texImage3D:Me,updateUBOMapping:Le,uniformBlockBinding:je,texStorage2D:$,texStorage3D:Se,texSubImage2D:ee,texSubImage3D:ue,compressedTexSubImage2D:_e,compressedTexSubImage3D:de,scissor:Te,viewport:xe,reset:mt}}function qM(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,v){return g?new OffscreenCanvas(w,v):qs("canvas")}function M(w,v,F,q){let ee=1;if((w.width>q||w.height>q)&&(ee=q/Math.max(w.width,w.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ue=v?Xl:Math.floor,_e=ue(ee*w.width),de=ue(ee*w.height);d===void 0&&(d=S(_e,de));const $=F?S(_e,de):d;return $.width=_e,$.height=de,$.getContext("2d").drawImage(w,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+de+")."),$}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return rf(w.width)&&rf(w.height)}function y(w){return a?!1:w.wrapS!==bn||w.wrapT!==bn||w.minFilter!==Ut&&w.minFilter!==cn}function A(w,v){return w.generateMipmaps&&v&&w.minFilter!==Ut&&w.minFilter!==cn}function P(w){i.generateMipmap(w)}function x(w,v,F,q,ee=!1){if(a===!1)return v;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue=v;return v===6403&&(F===5126&&(ue=33326),F===5131&&(ue=33325),F===5121&&(ue=33321)),v===33319&&(F===5126&&(ue=33328),F===5131&&(ue=33327),F===5121&&(ue=33323)),v===6408&&(F===5126&&(ue=34836),F===5131&&(ue=34842),F===5121&&(ue=q===et&&ee===!1?35907:32856),F===32819&&(ue=32854),F===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function T(w,v,F){return A(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Ut&&w.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function D(w){return w===Ut||w===Ru||w===Iu?9728:9729}function B(w){const v=w.target;v.removeEventListener("dispose",B),z(v),v.isVideoTexture&&_.delete(v)}function se(w){const v=w.target;v.removeEventListener("dispose",se),W(v)}function z(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,q=p.get(F);if(q){const ee=q[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(w),Object.keys(q).length===0&&p.delete(F)}n.remove(w)}function I(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const F=w.source,q=p.get(F);delete q[v.__cacheKey],o.memory.textures--}function W(w){const v=w.texture,F=n.get(w),q=n.get(v);if(q.__webglTexture!==void 0&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)i.deleteFramebuffer(F.__webglFramebuffer[ee]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ee]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,ue=v.length;ee<ue;ee++){const _e=n.get(v[ee]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(v[ee])}n.remove(v),n.remove(w)}let Y=0;function X(){Y=0}function U(){const w=Y;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Y+=1,w}function oe(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.encoding),v.join()}function re(w,v){const F=n.get(w);if(w.isVideoTexture&&pe(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(F,w,v);return}}t.bindTexture(3553,F.__webglTexture,33984+v)}function G(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){be(F,w,v);return}t.bindTexture(35866,F.__webglTexture,33984+v)}function H(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){be(F,w,v);return}t.bindTexture(32879,F.__webglTexture,33984+v)}function ae(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Ee(F,w,v);return}t.bindTexture(34067,F.__webglTexture,33984+v)}const le={[Vl]:10497,[bn]:33071,[Gl]:33648},me={[Ut]:9728,[Ru]:9984,[Iu]:9986,[cn]:9729,[F_]:9985,[_a]:9987};function j(w,v,F){if(F?(i.texParameteri(w,10242,le[v.wrapS]),i.texParameteri(w,10243,le[v.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,le[v.wrapR]),i.texParameteri(w,10240,me[v.magFilter]),i.texParameteri(w,10241,me[v.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(v.wrapS!==bn||v.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,D(v.magFilter)),i.texParameteri(w,10241,D(v.minFilter)),v.minFilter!==Ut&&v.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(v.type===Qi&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ws&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(w,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Ie(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",B));const q=v.source;let ee=p.get(q);ee===void 0&&(ee={},p.set(q,ee));const ue=oe(v);if(ue!==w.__cacheKey){ee[ue]===void 0&&(ee[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[ue].usedTimes++;const _e=ee[w.__cacheKey];_e!==void 0&&(ee[w.__cacheKey].usedTimes--,_e.usedTimes===0&&I(v)),w.__cacheKey=ue,w.__webglTexture=ee[ue].texture}return F}function be(w,v,F){let q=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=35866),v.isData3DTexture&&(q=32879);const ee=Ie(w,v),ue=v.source;t.bindTexture(q,w.__webglTexture,33984+F);const _e=n.get(ue);if(ue.version!==_e.__version||ee===!0){t.activeTexture(33984+F),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const de=y(v)&&b(v.image)===!1;let $=M(v.image,de,!1,u);$=ie(v,$);const Se=b($)||a,Ae=s.convert(v.format,v.encoding);let Me=s.convert(v.type),Te=x(v.internalFormat,Ae,Me,v.encoding,v.isVideoTexture);j(q,v,Se);let xe;const Le=v.mipmaps,je=a&&v.isVideoTexture!==!0,mt=_e.__version===void 0||ee===!0,R=T(v,$,Se);if(v.isDepthTexture)Te=6402,a?v.type===Qi?Te=36012:v.type===Ji?Te=33190:v.type===qr?Te=35056:Te=33189:v.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ir&&Te===6402&&v.type!==rd&&v.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ji,Me=s.convert(v.type)),v.format===ns&&Te===6402&&(Te=34041,v.type!==qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=qr,Me=s.convert(v.type))),mt&&(je?t.texStorage2D(3553,1,Te,$.width,$.height):t.texImage2D(3553,0,Te,$.width,$.height,0,Ae,Me,null));else if(v.isDataTexture)if(Le.length>0&&Se){je&&mt&&t.texStorage2D(3553,R,Te,Le[0].width,Le[0].height);for(let K=0,he=Le.length;K<he;K++)xe=Le[K],je?t.texSubImage2D(3553,K,0,0,xe.width,xe.height,Ae,Me,xe.data):t.texImage2D(3553,K,Te,xe.width,xe.height,0,Ae,Me,xe.data);v.generateMipmaps=!1}else je?(mt&&t.texStorage2D(3553,R,Te,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,Ae,Me,$.data)):t.texImage2D(3553,0,Te,$.width,$.height,0,Ae,Me,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&mt&&t.texStorage3D(35866,R,Te,Le[0].width,Le[0].height,$.depth);for(let K=0,he=Le.length;K<he;K++)xe=Le[K],v.format!==Sn?Ae!==null?je?t.compressedTexSubImage3D(35866,K,0,0,0,xe.width,xe.height,$.depth,Ae,xe.data,0,0):t.compressedTexImage3D(35866,K,Te,xe.width,xe.height,$.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(35866,K,0,0,0,xe.width,xe.height,$.depth,Ae,Me,xe.data):t.texImage3D(35866,K,Te,xe.width,xe.height,$.depth,0,Ae,Me,xe.data)}else{je&&mt&&t.texStorage2D(3553,R,Te,Le[0].width,Le[0].height);for(let K=0,he=Le.length;K<he;K++)xe=Le[K],v.format!==Sn?Ae!==null?je?t.compressedTexSubImage2D(3553,K,0,0,xe.width,xe.height,Ae,xe.data):t.compressedTexImage2D(3553,K,Te,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,K,0,0,xe.width,xe.height,Ae,Me,xe.data):t.texImage2D(3553,K,Te,xe.width,xe.height,0,Ae,Me,xe.data)}else if(v.isDataArrayTexture)je?(mt&&t.texStorage3D(35866,R,Te,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,Ae,Me,$.data)):t.texImage3D(35866,0,Te,$.width,$.height,$.depth,0,Ae,Me,$.data);else if(v.isData3DTexture)je?(mt&&t.texStorage3D(32879,R,Te,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,Ae,Me,$.data)):t.texImage3D(32879,0,Te,$.width,$.height,$.depth,0,Ae,Me,$.data);else if(v.isFramebufferTexture){if(mt)if(je)t.texStorage2D(3553,R,Te,$.width,$.height);else{let K=$.width,he=$.height;for(let ve=0;ve<R;ve++)t.texImage2D(3553,ve,Te,K,he,0,Ae,Me,null),K>>=1,he>>=1}}else if(Le.length>0&&Se){je&&mt&&t.texStorage2D(3553,R,Te,Le[0].width,Le[0].height);for(let K=0,he=Le.length;K<he;K++)xe=Le[K],je?t.texSubImage2D(3553,K,0,0,Ae,Me,xe):t.texImage2D(3553,K,Te,Ae,Me,xe);v.generateMipmaps=!1}else je?(mt&&t.texStorage2D(3553,R,Te,$.width,$.height),t.texSubImage2D(3553,0,0,0,Ae,Me,$)):t.texImage2D(3553,0,Te,Ae,Me,$);A(v,Se)&&P(q),_e.__version=ue.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ee(w,v,F){if(v.image.length!==6)return;const q=Ie(w,v),ee=v.source;t.bindTexture(34067,w.__webglTexture,33984+F);const ue=n.get(ee);if(ee.version!==ue.__version||q===!0){t.activeTexture(33984+F),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const _e=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,$=[];for(let K=0;K<6;K++)!_e&&!de?$[K]=M(v.image[K],!1,!0,c):$[K]=de?v.image[K].image:v.image[K],$[K]=ie(v,$[K]);const Se=$[0],Ae=b(Se)||a,Me=s.convert(v.format,v.encoding),Te=s.convert(v.type),xe=x(v.internalFormat,Me,Te,v.encoding),Le=a&&v.isVideoTexture!==!0,je=ue.__version===void 0||q===!0;let mt=T(v,Se,Ae);j(34067,v,Ae);let R;if(_e){Le&&je&&t.texStorage2D(34067,mt,xe,Se.width,Se.height);for(let K=0;K<6;K++){R=$[K].mipmaps;for(let he=0;he<R.length;he++){const ve=R[he];v.format!==Sn?Me!==null?Le?t.compressedTexSubImage2D(34069+K,he,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(34069+K,he,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+K,he,0,0,ve.width,ve.height,Me,Te,ve.data):t.texImage2D(34069+K,he,xe,ve.width,ve.height,0,Me,Te,ve.data)}}}else{R=v.mipmaps,Le&&je&&(R.length>0&&mt++,t.texStorage2D(34067,mt,xe,$[0].width,$[0].height));for(let K=0;K<6;K++)if(de){Le?t.texSubImage2D(34069+K,0,0,0,$[K].width,$[K].height,Me,Te,$[K].data):t.texImage2D(34069+K,0,xe,$[K].width,$[K].height,0,Me,Te,$[K].data);for(let he=0;he<R.length;he++){const we=R[he].image[K].image;Le?t.texSubImage2D(34069+K,he+1,0,0,we.width,we.height,Me,Te,we.data):t.texImage2D(34069+K,he+1,xe,we.width,we.height,0,Me,Te,we.data)}}else{Le?t.texSubImage2D(34069+K,0,0,0,Me,Te,$[K]):t.texImage2D(34069+K,0,xe,Me,Te,$[K]);for(let he=0;he<R.length;he++){const ve=R[he];Le?t.texSubImage2D(34069+K,he+1,0,0,Me,Te,ve.image[K]):t.texImage2D(34069+K,he+1,xe,Me,Te,ve.image[K])}}}A(v,Ae)&&P(34067),ue.__version=ee.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ye(w,v,F,q,ee){const ue=s.convert(F.format,F.encoding),_e=s.convert(F.type),de=x(F.internalFormat,ue,_e,F.encoding);n.get(v).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,de,v.width,v.height,v.depth,0,ue,_e,null):t.texImage2D(ee,0,de,v.width,v.height,0,ue,_e,null)),t.bindFramebuffer(36160,w),ne(v)?h.framebufferTexture2DMultisampleEXT(36160,q,ee,n.get(F).__webglTexture,0,fe(v)):(ee===3553||ee>=34069&&ee<=34074)&&i.framebufferTexture2D(36160,q,ee,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(w,v,F){if(i.bindRenderbuffer(36161,w),v.depthBuffer&&!v.stencilBuffer){let q=33189;if(F||ne(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Qi?q=36012:ee.type===Ji&&(q=33190));const ue=fe(v);ne(v)?h.renderbufferStorageMultisampleEXT(36161,ue,q,v.width,v.height):i.renderbufferStorageMultisample(36161,ue,q,v.width,v.height)}else i.renderbufferStorage(36161,q,v.width,v.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(v.depthBuffer&&v.stencilBuffer){const q=fe(v);F&&ne(v)===!1?i.renderbufferStorageMultisample(36161,q,35056,v.width,v.height):ne(v)?h.renderbufferStorageMultisampleEXT(36161,q,35056,v.width,v.height):i.renderbufferStorage(36161,34041,v.width,v.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<q.length;ee++){const ue=q[ee],_e=s.convert(ue.format,ue.encoding),de=s.convert(ue.type),$=x(ue.internalFormat,_e,de,ue.encoding),Se=fe(v);F&&ne(v)===!1?i.renderbufferStorageMultisample(36161,Se,$,v.width,v.height):ne(v)?h.renderbufferStorageMultisampleEXT(36161,Se,$,v.width,v.height):i.renderbufferStorage(36161,$,v.width,v.height)}}i.bindRenderbuffer(36161,null)}function C(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),re(v.depthTexture,0);const q=n.get(v.depthTexture).__webglTexture,ee=fe(v);if(v.depthTexture.format===ir)ne(v)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,ee):i.framebufferTexture2D(36160,36096,3553,q,0);else if(v.depthTexture.format===ns)ne(v)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,ee):i.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function L(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");C(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]=i.createRenderbuffer(),He(v.__webglDepthbuffer[q],w,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),He(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function V(w,v,F){const q=n.get(w);v!==void 0&&ye(q.__webglFramebuffer,w,w.texture,36064,3553),F!==void 0&&L(w)}function Q(w){const v=w.texture,F=n.get(w),q=n.get(v);w.addEventListener("dispose",se),w.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,ue=w.isWebGLMultipleRenderTargets===!0,_e=b(w)||a;if(ee){F.__webglFramebuffer=[];for(let de=0;de<6;de++)F.__webglFramebuffer[de]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),ue)if(r.drawBuffers){const de=w.texture;for(let $=0,Se=de.length;$<Se;$++){const Ae=n.get(de[$]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ne(w)===!1){const de=ue?v:[v];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let $=0;$<de.length;$++){const Se=de[$];F.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[$]);const Ae=s.convert(Se.format,Se.encoding),Me=s.convert(Se.type),Te=x(Se.internalFormat,Ae,Me,Se.encoding,w.isXRRenderTarget===!0),xe=fe(w);i.renderbufferStorageMultisample(36161,xe,Te,w.width,w.height),i.framebufferRenderbuffer(36160,36064+$,36161,F.__webglColorRenderbuffer[$])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),He(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,q.__webglTexture),j(34067,v,_e);for(let de=0;de<6;de++)ye(F.__webglFramebuffer[de],w,v,36064,34069+de);A(v,_e)&&P(34067),t.unbindTexture()}else if(ue){const de=w.texture;for(let $=0,Se=de.length;$<Se;$++){const Ae=de[$],Me=n.get(Ae);t.bindTexture(3553,Me.__webglTexture),j(3553,Ae,_e),ye(F.__webglFramebuffer,w,Ae,36064+$,3553),A(Ae,_e)&&P(3553)}t.unbindTexture()}else{let de=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?de=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,q.__webglTexture),j(de,v,_e),ye(F.__webglFramebuffer,w,v,36064,de),A(v,_e)&&P(de),t.unbindTexture()}w.depthBuffer&&L(w)}function J(w){const v=b(w)||a,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let q=0,ee=F.length;q<ee;q++){const ue=F[q];if(A(ue,v)){const _e=w.isWebGLCubeRenderTarget?34067:3553,de=n.get(ue).__webglTexture;t.bindTexture(_e,de),P(_e),t.unbindTexture()}}}function ce(w){if(a&&w.samples>0&&ne(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,q=w.height;let ee=16384;const ue=[],_e=w.stencilBuffer?33306:36096,de=n.get(w),$=w.isWebGLMultipleRenderTargets===!0;if($)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){ue.push(36064+Se),w.depthBuffer&&ue.push(_e);const Ae=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ae===!1&&(w.depthBuffer&&(ee|=256),w.stencilBuffer&&(ee|=1024)),$&&i.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[Se]),Ae===!0&&(i.invalidateFramebuffer(36008,[_e]),i.invalidateFramebuffer(36009,[_e])),$){const Me=n.get(v[Se]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Me,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,ee,9728),m&&i.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Se,36161,de.__webglColorRenderbuffer[Se]);const Ae=n.get(v[Se]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Se,3553,Ae,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function fe(w){return Math.min(f,w.samples)}function ne(w){const v=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pe(w){const v=o.render.frame;_.get(w)!==v&&(_.set(w,v),w.update())}function ie(w,v){const F=w.encoding,q=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Wl||F!==ur&&(F===et?a===!1?e.has("EXT_sRGB")===!0&&q===Sn?(w.format=Wl,w.minFilter=cn,w.generateMipmaps=!1):v=ad.sRGBToLinear(v):(q!==Sn||ee!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),v}this.allocateTextureUnit=U,this.resetTextureUnits=X,this.setTexture2D=re,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=V,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ne}function YM(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===cr)return 5121;if(s===U_)return 32819;if(s===B_)return 32820;if(s===O_)return 5120;if(s===N_)return 5122;if(s===rd)return 5123;if(s===z_)return 5124;if(s===Ji)return 5125;if(s===Qi)return 5126;if(s===Ws)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===k_)return 6406;if(s===Sn)return 6408;if(s===G_)return 6409;if(s===H_)return 6410;if(s===ir)return 6402;if(s===ns)return 34041;if(s===V_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Wl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===W_)return 6403;if(s===X_)return 36244;if(s===q_)return 33319;if(s===Y_)return 33320;if(s===j_)return 36249;if(s===Na||s===za||s===Ua||s===Ba)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Na)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Na)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fu||s===Ou||s===Nu||s===zu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Fu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ou)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uu||s===Bu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Uu)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ku||s===Vu||s===Gu||s===Hu||s===Wu||s===Xu||s===qu||s===Yu||s===ju||s===$u||s===Zu||s===Ku||s===Ju||s===Qu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ku)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ju)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$u)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ku)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ju)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ef)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ef)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===qr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class jM extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Do extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),g=this._getHandJoint(c,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($M)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Do;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ZM extends Nt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:ir,u!==ir&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=Ji),n===void 0&&u===ns&&(n=qr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}class KM extends ps{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const _=t.getContextAttributes();let d=null,p=null;const g=[],S=[],M=new Set,b=new Map,y=new un;y.layers.enable(1),y.viewport=new St;const A=new un;A.layers.enable(2),A.viewport=new St;const P=[y,A],x=new jM;x.layers.enable(1),x.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let H=g[G];return H===void 0&&(H=new pl,g[G]=H),H.getTargetRaySpace()},this.getControllerGrip=function(G){let H=g[G];return H===void 0&&(H=new pl,g[G]=H),H.getGripSpace()},this.getHand=function(G){let H=g[G];return H===void 0&&(H=new pl,g[G]=H),H.getHandSpace()};function B(G){const H=S.indexOf(G.inputSource);if(H===-1)return;const ae=g[H];ae!==void 0&&ae.dispatchEvent({type:G.type,data:G.inputSource})}function se(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",z);for(let G=0;G<g.length;G++){const H=S[G];H!==null&&(S[G]=null,g[G].disconnect(H))}T=null,D=null,e.setRenderTarget(d),h=null,f=null,u=null,r=null,p=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",se),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:h}),p=new fr(h.framebufferWidth,h.framebufferHeight,{format:Sn,type:cr,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let H=null,ae=null,le=null;_.depth&&(le=_.stencil?35056:33190,H=_.stencil?ns:ir,ae=_.stencil?qr:Ji);const me={colorFormat:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(me),r.updateRenderState({layers:[f]}),p=new fr(f.textureWidth,f.textureHeight,{format:Sn,type:cr,depthTexture:new ZM(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const j=e.properties.get(p);j.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(G){for(let H=0;H<G.removed.length;H++){const ae=G.removed[H],le=S.indexOf(ae);le>=0&&(S[le]=null,g[le].disconnect(ae))}for(let H=0;H<G.added.length;H++){const ae=G.added[H];let le=S.indexOf(ae);if(le===-1){for(let j=0;j<g.length;j++)if(j>=S.length){S.push(ae),le=j;break}else if(S[j]===null){S[j]=ae,le=j;break}if(le===-1)break}const me=g[le];me&&me.connect(ae)}}const I=new O,W=new O;function Y(G,H,ae){I.setFromMatrixPosition(H.matrixWorld),W.setFromMatrixPosition(ae.matrixWorld);const le=I.distanceTo(W),me=H.projectionMatrix.elements,j=ae.projectionMatrix.elements,Ie=me[14]/(me[10]-1),be=me[14]/(me[10]+1),Ee=(me[9]+1)/me[5],ye=(me[9]-1)/me[5],He=(me[8]-1)/me[0],C=(j[8]+1)/j[0],L=Ie*He,V=Ie*C,Q=le/(-He+C),J=Q*-He;H.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(J),G.translateZ(Q),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const ce=Ie+Q,fe=be+Q,ne=L-J,pe=V+(le-J),ie=Ee*be/fe*ce,w=ye*be/fe*ce;G.projectionMatrix.makePerspective(ne,pe,ie,w,ce,fe)}function X(G,H){H===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(H.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;x.near=A.near=y.near=G.near,x.far=A.far=y.far=G.far,(T!==x.near||D!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,D=x.far);const H=G.parent,ae=x.cameras;X(x,H);for(let me=0;me<ae.length;me++)X(ae[me],H);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),G.matrix.copy(x.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const le=G.children;for(let me=0,j=le.length;me<j;me++)le[me].updateMatrixWorld(!0);ae.length===2?Y(x,y,A):x.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.getPlanes=function(){return M};let U=null;function oe(G,H){if(c=H.getViewerPose(l||o),m=H,c!==null){const ae=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let le=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let me=0;me<ae.length;me++){const j=ae[me];let Ie=null;if(h!==null)Ie=h.getViewport(j);else{const Ee=u.getViewSubImage(f,j);Ie=Ee.viewport,me===0&&(e.setRenderTargetTextures(p,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(p))}let be=P[me];be===void 0&&(be=new un,be.layers.enable(me),be.viewport=new St,P[me]=be),be.matrix.fromArray(j.transform.matrix),be.projectionMatrix.fromArray(j.projectionMatrix),be.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),me===0&&x.matrix.copy(be.matrix),le===!0&&x.cameras.push(be)}}for(let ae=0;ae<g.length;ae++){const le=S[ae],me=g[ae];le!==null&&me!==void 0&&me.update(le,H,l||o)}if(U&&U(G,H),H.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let ae=null;for(const le of M)H.detectedPlanes.has(le)||(ae===null&&(ae=[]),ae.push(le));if(ae!==null)for(const le of ae)M.delete(le),b.delete(le),n.dispatchEvent({type:"planeremoved",data:le});for(const le of H.detectedPlanes)if(!M.has(le))M.add(le),b.set(le,H.lastChangedTime),n.dispatchEvent({type:"planeadded",data:le});else{const me=b.get(le);le.lastChangedTime>me&&(b.set(le,le.lastChangedTime),n.dispatchEvent({type:"planechanged",data:le}))}}m=null}const re=new _d;re.setAnimationLoop(oe),this.setAnimationLoop=function(G){U=G},this.dispose=function(){}}}function JM(i,e){function t(d,p){p.color.getRGB(d.fogColor.value,dd(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,g,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,M)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,g,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===mn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===mn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uv2Transform.value.copy(M.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,g,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===mn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function QM(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(S,M){const b=M.program;n.uniformBlockBinding(S,b)}function c(S,M){let b=r[S.id];b===void 0&&(_(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",p));const y=M.program;n.updateUBOMapping(S,y);const A=e.render.frame;s[S.id]!==A&&(h(S),s[S.id]=A)}function u(S){const M=f();S.__bindingPointIndex=M;const b=i.createBuffer(),y=S.__size,A=S.usage;return i.bindBuffer(35345,b),i.bufferData(35345,y,A),i.bindBuffer(35345,null),i.bindBufferBase(35345,M,b),b}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const M=r[S.id],b=S.uniforms,y=S.__cache;i.bindBuffer(35345,M);for(let A=0,P=b.length;A<P;A++){const x=b[A];if(m(x,A,y)===!0){const T=x.value,D=x.__offset;typeof T=="number"?(x.__data[0]=T,i.bufferSubData(35345,D,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):T.toArray(x.__data),i.bufferSubData(35345,D,x.__data))}}i.bindBuffer(35345,null)}function m(S,M,b){const y=S.value;if(b[M]===void 0)return typeof y=="number"?b[M]=y:b[M]=y.clone(),!0;if(typeof y=="number"){if(b[M]!==y)return b[M]=y,!0}else{const A=b[M];if(A.equals(y)===!1)return A.copy(y),!0}return!1}function _(S){const M=S.uniforms;let b=0;const y=16;let A=0;for(let P=0,x=M.length;P<x;P++){const T=M[P],D=d(T);if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,P>0){A=b%y;const B=y-A;A!==0&&B-D.boundary<0&&(b+=y-A,T.__offset=b)}b+=D.storage}return A=b%y,A>0&&(b+=y-A),S.__size=b,S.__cache={},this}function d(S){const M=S.value,b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function p(S){const M=S.target;M.removeEventListener("dispose",p);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}function eb(){const i=qs("canvas");return i.style.display="block",i}function bd(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:eb(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ur,this.physicallyCorrectLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const d=this;let p=!1,g=0,S=0,M=null,b=-1,y=null;const A=new St,P=new St;let x=null,T=e.width,D=e.height,B=1,se=null,z=null;const I=new St(0,0,T,D),W=new St(0,0,T,D);let Y=!1;const X=new gd;let U=!1,oe=!1,re=null;const G=new vt,H=new Ue,ae=new O,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return M===null?B:1}let j=t;function Ie(E,k){for(let Z=0;Z<E.length;Z++){const N=E[Z],te=e.getContext(N,k);if(te!==null)return te}return null}try{const E={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Le,!1),j===null){const k=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&k.shift(),j=Ie(k,E),j===null)throw Ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let be,Ee,ye,He,C,L,V,Q,J,ce,fe,ne,pe,ie,w,v,F,q,ee,ue,_e,de,$,Se;function Ae(){be=new fy(j),Ee=new ry(j,be,i),be.init(Ee),de=new YM(j,be,Ee),ye=new XM(j,be,Ee),He=new py,C=new DM,L=new qM(j,be,ye,C,Ee,de,He),V=new oy(d),Q=new uy(d),J=new b0(j,Ee),$=new ny(j,be,J,Ee),ce=new hy(j,J,He,$),fe=new xy(j,ce,J,He),ee=new _y(j,Ee,L),v=new sy(C),ne=new PM(d,V,Q,be,Ee,$,v),pe=new JM(d,C),ie=new IM,w=new BM(be,Ee),q=new ty(d,V,Q,ye,fe,u,o),F=new WM(d,fe,Ee),Se=new QM(j,He,Ee,ye),ue=new iy(j,be,He,Ee),_e=new dy(j,be,He,Ee),He.programs=ne.programs,d.capabilities=Ee,d.extensions=be,d.properties=C,d.renderLists=ie,d.shadowMap=F,d.state=ye,d.info=He}Ae();const Me=new KM(d,j);this.xr=Me,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const E=be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(T,D,!1))},this.getSize=function(E){return E.set(T,D)},this.setSize=function(E,k,Z){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,D=k,e.width=Math.floor(E*B),e.height=Math.floor(k*B),Z!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(T*B,D*B).floor()},this.setDrawingBufferSize=function(E,k,Z){T=E,D=k,B=Z,e.width=Math.floor(E*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,k,Z,N){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,k,Z,N),ye.viewport(A.copy(I).multiplyScalar(B).floor())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,k,Z,N){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,k,Z,N),ye.scissor(P.copy(W).multiplyScalar(B).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){ye.setScissorTest(Y=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(E=!0,k=!0,Z=!0){let N=0;E&&(N|=16384),k&&(N|=256),Z&&(N|=1024),j.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),ie.dispose(),w.dispose(),C.dispose(),V.dispose(),Q.dispose(),fe.dispose(),$.dispose(),Se.dispose(),ne.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ve),Me.removeEventListener("sessionend",we),re&&(re.dispose(),re=null),qe.stop()};function Te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=He.autoReset,k=F.enabled,Z=F.autoUpdate,N=F.needsUpdate,te=F.type;Ae(),He.autoReset=E,F.enabled=k,F.autoUpdate=Z,F.needsUpdate=N,F.type=te}function Le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){const k=E.target;k.removeEventListener("dispose",je),mt(k)}function mt(E){R(E),C.remove(E)}function R(E){const k=C.get(E).programs;k!==void 0&&(k.forEach(function(Z){ne.releaseProgram(Z)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Z,N,te,Ce){k===null&&(k=le);const Pe=te.isMesh&&te.matrixWorld.determinant()<0,Fe=Tp(E,k,Z,N,te);ye.setMaterial(N,Pe);let Ne=Z.index,We=1;N.wireframe===!0&&(Ne=ce.getWireframeAttribute(Z),We=2);const Be=Z.drawRange,ke=Z.attributes.position;let ot=Be.start*We,Xt=(Be.start+Be.count)*We;Ce!==null&&(ot=Math.max(ot,Ce.start*We),Xt=Math.min(Xt,(Ce.start+Ce.count)*We)),Ne!==null?(ot=Math.max(ot,0),Xt=Math.min(Xt,Ne.count)):ke!=null&&(ot=Math.max(ot,0),Xt=Math.min(Xt,ke.count));const Wn=Xt-ot;if(Wn<0||Wn===1/0)return;$.setup(te,N,Fe,Z,Ne);let Fi,at=ue;if(Ne!==null&&(Fi=J.get(Ne),at=_e,at.setIndex(Fi)),te.isMesh)N.wireframe===!0?(ye.setLineWidth(N.wireframeLinewidth*me()),at.setMode(1)):at.setMode(4);else if(te.isLine){let Ve=N.linewidth;Ve===void 0&&(Ve=1),ye.setLineWidth(Ve*me()),te.isLineSegments?at.setMode(1):te.isLineLoop?at.setMode(2):at.setMode(3)}else te.isPoints?at.setMode(0):te.isSprite&&at.setMode(4);if(te.isInstancedMesh)at.renderInstances(ot,Wn,te.count);else if(Z.isInstancedBufferGeometry){const Ve=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ba=Math.min(Z.instanceCount,Ve);at.renderInstances(ot,Wn,ba)}else at.render(ot,Wn)},this.compile=function(E,k){function Z(N,te,Ce){N.transparent===!0&&N.side===Qn?(N.side=mn,N.needsUpdate=!0,rn(N,te,Ce),N.side=Qr,N.needsUpdate=!0,rn(N,te,Ce),N.side=Qn):rn(N,te,Ce)}h=w.get(E),h.init(),_.push(h),E.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(d.physicallyCorrectLights),E.traverse(function(N){const te=N.material;if(te)if(Array.isArray(te))for(let Ce=0;Ce<te.length;Ce++){const Pe=te[Ce];Z(Pe,E,N)}else Z(te,E,N)}),_.pop(),h=null};let K=null;function he(E){K&&K(E)}function ve(){qe.stop()}function we(){qe.start()}const qe=new _d;qe.setAnimationLoop(he),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(E){K=E,Me.setAnimationLoop(E),E===null?qe.stop():qe.start()},Me.addEventListener("sessionstart",ve),Me.addEventListener("sessionend",we),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(k),k=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,k,M),h=w.get(E,_.length),h.init(),_.push(h),G.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X.setFromProjectionMatrix(G),oe=this.localClippingEnabled,U=v.init(this.clippingPlanes,oe,k),f=ie.get(E,m.length),f.init(),m.push(f),gt(E,k,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(se,z),U===!0&&v.beginShadows();const Z=h.state.shadowsArray;if(F.render(Z,E,k),U===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(f,E),h.setupLights(d.physicallyCorrectLights),k.isArrayCamera){const N=k.cameras;for(let te=0,Ce=N.length;te<Ce;te++){const Pe=N[te];wt(f,E,Pe,Pe.viewport)}}else wt(f,E,k);M!==null&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(d,E,k),$.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function gt(E,k,Z,N){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){N&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const Pe=fe.update(E),Fe=E.material;Fe.visible&&f.push(E,Pe,Fe,Z,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==He.render.frame&&(E.skeleton.update(),E.skeleton.frame=He.render.frame),!E.frustumCulled||X.intersectsObject(E))){N&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const Pe=fe.update(E),Fe=E.material;if(Array.isArray(Fe)){const Ne=Pe.groups;for(let We=0,Be=Ne.length;We<Be;We++){const ke=Ne[We],ot=Fe[ke.materialIndex];ot&&ot.visible&&f.push(E,Pe,ot,Z,ae.z,ke)}}else Fe.visible&&f.push(E,Pe,Fe,Z,ae.z,null)}}const Ce=E.children;for(let Pe=0,Fe=Ce.length;Pe<Fe;Pe++)gt(Ce[Pe],k,Z,N)}function wt(E,k,Z,N){const te=E.opaque,Ce=E.transmissive,Pe=E.transparent;h.setupLightsView(Z),Ce.length>0&&Ii(te,k,Z),N&&ye.viewport(A.copy(N)),te.length>0&&Ke(te,k,Z),Ce.length>0&&Ke(Ce,k,Z),Pe.length>0&&Ke(Pe,k,Z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ii(E,k,Z){const N=Ee.isWebGL2;re===null&&(re=new fr(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Ws:cr,minFilter:_a,samples:N&&s===!0?4:0})),d.getDrawingBufferSize(H),N?re.setSize(H.x,H.y):re.setSize(Xl(H.x),Xl(H.y));const te=d.getRenderTarget();d.setRenderTarget(re),d.clear();const Ce=d.toneMapping;d.toneMapping=ni,Ke(E,k,Z),d.toneMapping=Ce,L.updateMultisampleRenderTarget(re),L.updateRenderTargetMipmap(re),d.setRenderTarget(te)}function Ke(E,k,Z){const N=k.isScene===!0?k.overrideMaterial:null;for(let te=0,Ce=E.length;te<Ce;te++){const Pe=E[te],Fe=Pe.object,Ne=Pe.geometry,We=N===null?Pe.material:N,Be=Pe.group;Fe.layers.test(Z.layers)&&Hn(Fe,k,Z,Ne,We,Be)}}function Hn(E,k,Z,N,te,Ce){E.onBeforeRender(d,k,Z,N,te,Ce),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),te.onBeforeRender(d,k,Z,N,E,Ce),te.transparent===!0&&te.side===Qn?(te.side=mn,te.needsUpdate=!0,d.renderBufferDirect(Z,k,N,te,E,Ce),te.side=Qr,te.needsUpdate=!0,d.renderBufferDirect(Z,k,N,te,E,Ce),te.side=Qn):d.renderBufferDirect(Z,k,N,te,E,Ce),E.onAfterRender(d,k,Z,N,te,Ce)}function rn(E,k,Z){k.isScene!==!0&&(k=le);const N=C.get(E),te=h.state.lights,Ce=h.state.shadowsArray,Pe=te.state.version,Fe=ne.getParameters(E,te.state,Ce,k,Z),Ne=ne.getProgramCacheKey(Fe);let We=N.programs;N.environment=E.isMeshStandardMaterial?k.environment:null,N.fog=k.fog,N.envMap=(E.isMeshStandardMaterial?Q:V).get(E.envMap||N.environment),We===void 0&&(E.addEventListener("dispose",je),We=new Map,N.programs=We);let Be=We.get(Ne);if(Be!==void 0){if(N.currentProgram===Be&&N.lightsStateVersion===Pe)return Zc(E,Fe),Be}else Fe.uniforms=ne.getUniforms(E),E.onBuild(Z,Fe,d),E.onBeforeCompile(Fe,d),Be=ne.acquireProgram(Fe,Ne),We.set(Ne,Be),N.uniforms=Fe.uniforms;const ke=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=v.uniform),Zc(E,Fe),N.needsLights=Cp(E),N.lightsStateVersion=Pe,N.needsLights&&(ke.ambientLightColor.value=te.state.ambient,ke.lightProbe.value=te.state.probe,ke.directionalLights.value=te.state.directional,ke.directionalLightShadows.value=te.state.directionalShadow,ke.spotLights.value=te.state.spot,ke.spotLightShadows.value=te.state.spotShadow,ke.rectAreaLights.value=te.state.rectArea,ke.ltc_1.value=te.state.rectAreaLTC1,ke.ltc_2.value=te.state.rectAreaLTC2,ke.pointLights.value=te.state.point,ke.pointLightShadows.value=te.state.pointShadow,ke.hemisphereLights.value=te.state.hemi,ke.directionalShadowMap.value=te.state.directionalShadowMap,ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ke.spotShadowMap.value=te.state.spotShadowMap,ke.spotLightMatrix.value=te.state.spotLightMatrix,ke.spotLightMap.value=te.state.spotLightMap,ke.pointShadowMap.value=te.state.pointShadowMap,ke.pointShadowMatrix.value=te.state.pointShadowMatrix);const ot=Be.getUniforms(),Xt=Go.seqWithValue(ot.seq,ke);return N.currentProgram=Be,N.uniformsList=Xt,Be}function Zc(E,k){const Z=C.get(E);Z.outputEncoding=k.outputEncoding,Z.instancing=k.instancing,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Tp(E,k,Z,N,te){k.isScene!==!0&&(k=le),L.resetTextureUnits();const Ce=k.fog,Pe=N.isMeshStandardMaterial?k.environment:null,Fe=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:ur,Ne=(N.isMeshStandardMaterial?Q:V).get(N.envMap||Pe),We=N.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Be=!!N.normalMap&&!!Z.attributes.tangent,ke=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,Xt=!!Z.morphAttributes.color,Wn=N.toneMapped?d.toneMapping:ni,Fi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=Fi!==void 0?Fi.length:0,Ve=C.get(N),ba=h.state.lights;if(U===!0&&(oe===!0||E!==y)){const qt=E===y&&N.id===b;v.setState(N,E,qt)}let _t=!1;N.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ba.state.version||Ve.outputEncoding!==Fe||te.isInstancedMesh&&Ve.instancing===!1||!te.isInstancedMesh&&Ve.instancing===!0||te.isSkinnedMesh&&Ve.skinning===!1||!te.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ne||N.fog===!0&&Ve.fog!==Ce||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==v.numPlanes||Ve.numIntersection!==v.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==Be||Ve.morphTargets!==ke||Ve.morphNormals!==ot||Ve.morphColors!==Xt||Ve.toneMapping!==Wn||Ee.isWebGL2===!0&&Ve.morphTargetsCount!==at)&&(_t=!0):(_t=!0,Ve.__version=N.version);let Oi=Ve.currentProgram;_t===!0&&(Oi=rn(N,k,te));let Kc=!1,gs=!1,Sa=!1;const Dt=Oi.getUniforms(),Ni=Ve.uniforms;if(ye.useProgram(Oi.program)&&(Kc=!0,gs=!0,Sa=!0),N.id!==b&&(b=N.id,gs=!0),Kc||y!==E){if(Dt.setValue(j,"projectionMatrix",E.projectionMatrix),Ee.logarithmicDepthBuffer&&Dt.setValue(j,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,gs=!0,Sa=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const qt=Dt.map.cameraPosition;qt!==void 0&&qt.setValue(j,ae.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Dt.setValue(j,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||te.isSkinnedMesh)&&Dt.setValue(j,"viewMatrix",E.matrixWorldInverse)}if(te.isSkinnedMesh){Dt.setOptional(j,te,"bindMatrix"),Dt.setOptional(j,te,"bindMatrixInverse");const qt=te.skeleton;qt&&(Ee.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Dt.setValue(j,"boneTexture",qt.boneTexture,L),Dt.setValue(j,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wa=Z.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&Ee.isWebGL2===!0)&&ee.update(te,Z,N,Oi),(gs||Ve.receiveShadow!==te.receiveShadow)&&(Ve.receiveShadow=te.receiveShadow,Dt.setValue(j,"receiveShadow",te.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ni.envMap.value=Ne,Ni.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),gs&&(Dt.setValue(j,"toneMappingExposure",d.toneMappingExposure),Ve.needsLights&&Ep(Ni,Sa),Ce&&N.fog===!0&&pe.refreshFogUniforms(Ni,Ce),pe.refreshMaterialUniforms(Ni,N,B,D,re),Go.upload(j,Ve.uniformsList,Ni,L)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Go.upload(j,Ve.uniformsList,Ni,L),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Dt.setValue(j,"center",te.center),Dt.setValue(j,"modelViewMatrix",te.modelViewMatrix),Dt.setValue(j,"normalMatrix",te.normalMatrix),Dt.setValue(j,"modelMatrix",te.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const qt=N.uniformsGroups;for(let Ta=0,Ap=qt.length;Ta<Ap;Ta++)if(Ee.isWebGL2){const Jc=qt[Ta];Se.update(Jc,Oi),Se.bind(Jc,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function Ep(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Cp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,k,Z){C.get(E.texture).__webglTexture=k,C.get(E.depthTexture).__webglTexture=Z;const N=C.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=Z===void 0,N.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const Z=C.get(E);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,Z=0){M=E,g=k,S=Z;let N=!0,te=null,Ce=!1,Pe=!1;if(E){const Ne=C.get(E);Ne.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),N=!1):Ne.__webglFramebuffer===void 0?L.setupRenderTarget(E):Ne.__hasExternalTextures&&L.rebindTextures(E,C.get(E.texture).__webglTexture,C.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Be=C.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(te=Be[k],Ce=!0):Ee.isWebGL2&&E.samples>0&&L.useMultisampledRTT(E)===!1?te=C.get(E).__webglMultisampledFramebuffer:te=Be,A.copy(E.viewport),P.copy(E.scissor),x=E.scissorTest}else A.copy(I).multiplyScalar(B).floor(),P.copy(W).multiplyScalar(B).floor(),x=Y;if(ye.bindFramebuffer(36160,te)&&Ee.drawBuffers&&N&&ye.drawBuffers(E,te),ye.viewport(A),ye.scissor(P),ye.setScissorTest(x),Ce){const Ne=C.get(E.texture);j.framebufferTexture2D(36160,36064,34069+k,Ne.__webglTexture,Z)}else if(Pe){const Ne=C.get(E.texture),We=k||0;j.framebufferTextureLayer(36160,36064,Ne.__webglTexture,Z||0,We)}b=-1},this.readRenderTargetPixels=function(E,k,Z,N,te,Ce,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){ye.bindFramebuffer(36160,Fe);try{const Ne=E.texture,We=Ne.format,Be=Ne.type;if(We!==Sn&&de.convert(We)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Be===Ws&&(be.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&be.has("EXT_color_buffer_float"));if(Be!==cr&&de.convert(Be)!==j.getParameter(35738)&&!(Be===Qi&&(Ee.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-N&&Z>=0&&Z<=E.height-te&&j.readPixels(k,Z,N,te,de.convert(We),de.convert(Be),Ce)}finally{const Ne=M!==null?C.get(M).__webglFramebuffer:null;ye.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(E,k,Z=0){const N=Math.pow(2,-Z),te=Math.floor(k.image.width*N),Ce=Math.floor(k.image.height*N);L.setTexture2D(k,0),j.copyTexSubImage2D(3553,Z,0,0,E.x,E.y,te,Ce),ye.unbindTexture()},this.copyTextureToTexture=function(E,k,Z,N=0){const te=k.image.width,Ce=k.image.height,Pe=de.convert(Z.format),Fe=de.convert(Z.type);L.setTexture2D(Z,0),j.pixelStorei(37440,Z.flipY),j.pixelStorei(37441,Z.premultiplyAlpha),j.pixelStorei(3317,Z.unpackAlignment),k.isDataTexture?j.texSubImage2D(3553,N,E.x,E.y,te,Ce,Pe,Fe,k.image.data):k.isCompressedTexture?j.compressedTexSubImage2D(3553,N,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Pe,k.mipmaps[0].data):j.texSubImage2D(3553,N,E.x,E.y,Pe,Fe,k.image),N===0&&Z.generateMipmaps&&j.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(E,k,Z,N,te=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=E.max.x-E.min.x+1,Pe=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,Ne=de.convert(N.format),We=de.convert(N.type);let Be;if(N.isData3DTexture)L.setTexture3D(N,0),Be=32879;else if(N.isDataArrayTexture)L.setTexture2DArray(N,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,N.flipY),j.pixelStorei(37441,N.premultiplyAlpha),j.pixelStorei(3317,N.unpackAlignment);const ke=j.getParameter(3314),ot=j.getParameter(32878),Xt=j.getParameter(3316),Wn=j.getParameter(3315),Fi=j.getParameter(32877),at=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;j.pixelStorei(3314,at.width),j.pixelStorei(32878,at.height),j.pixelStorei(3316,E.min.x),j.pixelStorei(3315,E.min.y),j.pixelStorei(32877,E.min.z),Z.isDataTexture||Z.isData3DTexture?j.texSubImage3D(Be,te,k.x,k.y,k.z,Ce,Pe,Fe,Ne,We,at.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Be,te,k.x,k.y,k.z,Ce,Pe,Fe,Ne,at.data)):j.texSubImage3D(Be,te,k.x,k.y,k.z,Ce,Pe,Fe,Ne,We,at),j.pixelStorei(3314,ke),j.pixelStorei(32878,ot),j.pixelStorei(3316,Xt),j.pixelStorei(3315,Wn),j.pixelStorei(32877,Fi),te===0&&N.generateMipmaps&&j.generateMipmap(Be),ye.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){g=0,S=0,M=null,ye.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class tb extends bd{}tb.prototype.isWebGL1Renderer=!0;class nb extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ib{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new O;class Zo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sd extends to{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Pr;const Ms=new O,Dr=new O,Rr=new O,Ir=new Ue,bs=new Ue,wd=new vt,Ro=new O,Ss=new O,Io=new O,zf=new Ue,ml=new Ue,Uf=new Ue;class rb extends kt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new Di;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ib(t,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new Zo(n,3,0,!1)),Pr.setAttribute("uv",new Zo(n,2,3,!1))}this.geometry=Pr,this.material=e!==void 0?e:new Sd,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dr.setFromMatrixScale(this.matrixWorld),wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Rr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Fo(Ro.set(-.5,-.5,0),Rr,o,Dr,r,s),Fo(Ss.set(.5,-.5,0),Rr,o,Dr,r,s),Fo(Io.set(.5,.5,0),Rr,o,Dr,r,s),zf.set(0,0),ml.set(1,0),Uf.set(1,1);let a=e.ray.intersectTriangle(Ro,Ss,Io,!1,Ms);if(a===null&&(Fo(Ss.set(-.5,.5,0),Rr,o,Dr,r,s),ml.set(0,1),a=e.ray.intersectTriangle(Ro,Io,Ss,!1,Ms),a===null))return;const l=e.ray.origin.distanceTo(Ms);l<e.near||l>e.far||t.push({distance:l,point:Ms.clone(),uv:zn.getUV(Ms,Ro,Ss,Io,zf,ml,Uf,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fo(i,e,t,n,r,s){Ir.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(bs.x=s*Ir.x-r*Ir.y,bs.y=r*Ir.x+s*Ir.y):bs.copy(Ir),i.copy(e),i.x+=bs.x,i.y+=bs.y,i.applyMatrix4(wd)}class sb extends Nt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Bf={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ob{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Td=new ob;class Ed{constructor(e){this.manager=e!==void 0?e:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class ab extends Ed{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=qs("img");function l(){u(),Bf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class lb extends Ed{constructor(e){super(e)}load(e,t,n,r){const s=new Nt,o=new ab(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class cb{constructor(e,t,n=0,r=1/0){this.ray=new ud(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Yl(e,this,n,t),n.sort(kf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Yl(e[r],this,n,t);return n.sort(kf),n}}function kf(i,e){return i.distance-e.distance}function Yl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Yl(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);function Kn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Cd(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var Qt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rs={duration:.5,overwrite:!1,delay:0},Fc,Vt,ct,fn=1e8,Ye=1/fn,jl=Math.PI*2,ub=jl/4,fb=0,Ad=Math.sqrt,hb=Math.cos,db=Math.sin,yt=function(e){return typeof e=="string"},rt=function(e){return typeof e=="function"},ri=function(e){return typeof e=="number"},Oc=function(e){return typeof e>"u"},Gn=function(e){return typeof e=="object"},Gt=function(e){return e!==!1},Ld=function(){return typeof window<"u"},Oo=function(e){return rt(e)||yt(e)},Pd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Lt=Array.isArray,$l=/(?:-?\.?\d|\.)+/gi,Dd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rd=/[+-]=-?[.\d]+/,Id=/[^,'"\[\]\s]+/gi,pb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,ln,Zl,Nc,tn={},Ko={},Fd,Od=function(e){return(Ko=pr(e,tn))&&nn},zc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Jo=function(e,t){return!t&&console.warn(e)},Nd=function(e,t){return e&&(tn[e]=t)&&Ko&&(Ko[e]=t)||tn},Ys=function(){return 0},mb={suppressEvents:!0,isStart:!0,kill:!1},Ho={suppressEvents:!0,kill:!1},gb={suppressEvents:!0},Uc={},Ti=[],Kl={},zd,$t={},_l={},Vf=30,Wo=[],Bc="",kc=function(e){var t=e[0],n,r;if(Gn(t)||rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Wo.length;r--&&!Wo[r].targetTest(t););n=Wo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new sp(e[r],n)))||e.splice(r,1);return e},or=function(e){return e._gsap||kc(hn(e))[0]._gsap},Ud=function(e,t,n){return(n=e[t])&&rt(n)?e[t]():Oc(n)&&e.getAttribute&&e.getAttribute(t)||n},Ht=function(e,t){return(e=e.split(",")).forEach(t)||e},st=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Yr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},_b=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Qo=function(){var e=Ti.length,t=Ti.slice(0),n,r;for(Kl={},Ti.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Bd=function(e,t,n,r){Ti.length&&Qo(),e.render(t,n,r||Vt&&t<0&&(e._initted||e._startAt)),Ti.length&&Qo()},kd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Id).length<2?t:yt(e)?e.trim():e},Vd=function(e){return e},gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xb=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},pr=function(e,t){for(var n in t)e[n]=t[n];return e},Gf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ea=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Fs=function(e){var t=e.parent||tt,n=e.keyframes?xb(Lt(e.keyframes)):gn;if(Gt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vb=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Gd=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},va=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Li=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ar=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jl=function(e,t,n,r){return e._startAt&&(Vt?e._startAt.revert(Ho):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Mb=function i(e){return!e||e._ts&&i(e.parent)},Hf=function(e){return e._repeat?ss(e._tTime,e=e.duration()+e._rDelay)*e:0},ss=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ta=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ya=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ye)||0))},Ma=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ya(e),n._dirty||ar(n,e)),e},Hd=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ta(e.rawTime(),t),(!t._dur||no(0,t.totalDuration(),n)-t._tTime>Ye)&&t.render(n,!0)),ar(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ye}},Un=function(e,t,n,r){return t.parent&&Li(t),t._start=Mt((ri(n)?n:n||e!==tt?an(e,n,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gd(e,t,"_first","_last",e._sort?"_start":0),Ql(t)||(e._recent=t),r||Hd(e,t),e._ts<0&&Ma(e,e._tTime),e},Wd=function(e,t){return(tn.ScrollTrigger||zc("scrollTrigger",t))&&tn.ScrollTrigger.create(t,e)},Xd=function(e,t,n,r,s){if(Gc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&zd!==Kt.frame)return Ti.push(e),e._lazy=[s,r],1},bb=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ql=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Sb=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&bb(e)&&!(!e._initted&&Ql(e))||(e._ts<0||e._dp._ts<0)&&!Ql(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=no(0,e._tDur,t),u=ss(l,a),e._yoyo&&u&1&&(o=1-o),u!==ss(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Vt||r||e._zTime===Ye||!t&&e._zTime){if(!e._initted&&Xd(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ye:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Jl(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Li(e,1),!n&&!Vt&&(dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wb=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},os=function(e,t,n,r){var s=e._repeat,o=Mt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Mt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ma(e,e._tTime=e._tDur*a),e.parent&&ya(e),n||ar(e.parent,e),e},Wf=function(e){return e instanceof Bt?ar(e):os(e,e._dur)},Tb={_start:0,endTime:Ys,totalDuration:Ys},an=function i(e,t,n){var r=e.labels,s=e._recent||Tb,o=e.duration()>=fn?s.endTime(!1):e._dur,a,l,c;return yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Lt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Os=function(e,t,n){var r=ri(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Gt(l.vars.inherit)&&l.parent;o.immediateRender=Gt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ft(t[0],o,t[s+1])},Ri=function(e,t){return e||e===0?t(e):t},no=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!yt(e)||!(t=pb.exec(e))?"":t[1]},Eb=function(e,t,n){return Ri(n,function(r){return no(e,t,r)})},ec=[].slice,qd=function(e,t){return e&&Gn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gn(e[0]))&&!e.nodeType&&e!==ln},Cb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return yt(r)&&!t||qd(r,1)?(s=n).push.apply(s,hn(r)):n.push(r)})||n},hn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):yt(e)&&!n&&(Zl||!as())?ec.call((t||Nc).querySelectorAll(e),0):Lt(e)?Cb(e,n):qd(e)?ec.call(e,0):e?[e]:[]},tc=function(e){return e=hn(e)[0]||Jo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hn(t,n.querySelectorAll?n:n===e?Jo("Invalid scope")||Nc.createElement("div"):e)}},Yd=function(e){return e.sort(function(){return .5-Math.random()})},jd=function(e){if(rt(e))return e;var t=Gn(e)?e:{each:e},n=lr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return yt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,m,_){var d=(_||t).length,p=o[d],g,S,M,b,y,A,P,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,fn])[1],!T){for(P=-fn;P<(P=_[T++].getBoundingClientRect().left)&&T<d;);T--}for(p=o[d]=[],g=l?Math.min(T,d)*u-.5:r%T,S=T===fn?0:l?d*f/T-.5:r/T|0,P=0,x=fn,A=0;A<d;A++)M=A%T-g,b=S-(A/T|0),p[A]=y=c?Math.abs(c==="y"?b:M):Ad(M*M+b*b),y>P&&(P=y),y<x&&(x=y);r==="random"&&Yd(p),p.max=P-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(r==="edges"?-1:1),p.b=d<0?s-d:s,p.u=Ct(t.amount||t.each)||0,n=n&&d<0?np(n):n}return d=(p[h]-p.min)/p.max||0,Mt(p.b+(n?n(d):d)*p.v)+p.u}},nc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Mt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ri(n)?0:Ct(n))}},$d=function(e,t){var n=Lt(e),r,s;return!n&&Gn(e)&&(r=n=e.radius||fn,e.values?(e=hn(e.values),(s=!ri(e[0]))&&(r*=r)):e=nc(e.increment)),Ri(t,n?rt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fn,u=0,f=e.length,h,m;f--;)s?(h=e[f].x-a,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||ri(o)?u:u+Ct(o)}:nc(e))},Zd=function(e,t,n,r){return Ri(Lt(e)?!t:n===!0?!!(n=0):!r,function(){return Lt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Ab=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Lb=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},Pb=function(e,t,n){return Jd(e,t,0,1,n)},Kd=function(e,t,n){return Ri(n,function(r){return e[~~t(r)]})},Db=function i(e,t,n){var r=t-e;return Lt(e)?Kd(e,i(0,e.length),t):Ri(n,function(s){return(r+(s-e)%r)%r+e})},Rb=function i(e,t,n){var r=t-e,s=r*2;return Lt(e)?Kd(e,i(0,e.length-1),t):Ri(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},js=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Id:$l),n+=e.substr(t,r-t)+Zd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Jd=function(e,t,n,r,s){var o=t-e,a=r-n;return Ri(s,function(l){return n+((l-e)/o*a||0)})},Ib=function i(e,t,n,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=yt(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Lt(e)&&!Lt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(_){_*=f;var d=Math.min(h,~~_);return u[d](_-d)},n=t}else r||(e=pr(Lt(e)?[]:{},e));if(!u){for(l in t)Vc.call(a,e,l,"get",t[l]);s=function(_){return Xc(_,a)||(o?e.p:e)}}}return Ri(n,s)},Xf=function(e,t,n){var r=e.labels,s=fn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},dn=function(e,t,n){var r=e.vars,s=r[t],o=ct,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ti.length&&Qo(),a&&(ct=a),u=l?s.apply(c,l):s.call(c),ct=o,u},Ls=function(e){return Li(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&dn(e,"onInterrupt"),e},kr,Fb=function(e){e=!e.name&&e.default||e;var t=e.name,n=rt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ys,render:Xc,add:Vc,kill:Zb,modifier:$b,rawVars:0},o={targetTest:0,get:0,getSetter:Wc,aliases:{},register:0};if(as(),e!==r){if($t[t])return;gn(r,gn(ea(e,s),o)),pr(r.prototype,pr(s,ea(e,o))),$t[r.prop=t]=r,e.targetTest&&(Wo.push(r),Uc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Nd(t,r),e.register&&e.register(nn,r,Wt)},$e=255,Ps={aqua:[0,$e,$e],lime:[0,$e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$e],navy:[0,0,128],white:[$e,$e,$e],olive:[128,128,0],yellow:[$e,$e,0],orange:[$e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$e,0,0],pink:[$e,192,203],cyan:[0,$e,$e],transparent:[$e,$e,$e,0]},xl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*$e+.5|0},Qd=function(e,t,n){var r=e?ri(e)?[e>>16,e>>8&$e,e&$e]:0:Ps.black,s,o,a,l,c,u,f,h,m,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ps[e])r=Ps[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&$e,r&$e,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&$e,e&$e]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match($l),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=xl(l+1/3,s,o),r[1]=xl(l,s,o),r[2]=xl(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Dd),n&&r.length<4&&(r[3]=1),r}else r=e.match($l)||Ps.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/$e,o=r[1]/$e,a=r[2]/$e,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},ep=function(e){var t=[],n=[],r=-1;return e.split(Ei).forEach(function(s){var o=s.match(Br)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},qf=function(e,t,n){var r="",s=(e+r).match(Ei),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Qd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=ep(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ei,"1").split(Br),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ei),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Ei=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ps)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Ob=/hsl[a]?\(/,tp=function(e){var t=e.join(" "),n;if(Ei.lastIndex=0,Ei.test(t))return n=Ob.test(t),e[1]=qf(e[1],n),e[0]=qf(e[0],n,ep(e[1])),!0},$s,Kt=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,m,_=function d(p){var g=i()-r,S=p===!0,M,b,y,A;if(g>e&&(n+=g-t),r+=g,y=r-n,M=y-o,(M>0||S)&&(A=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,o+=M+(M>=s?4:s-M),b=1),S||(l=c(d)),b)for(m=0;m<a.length;m++)a[m](y,h,A,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Fd&&(!Zl&&Ld()&&(ln=Zl=window,Nc=ln.document||{},tn.gsap=nn,(ln.gsapVersions||(ln.gsapVersions=[])).push(nn.version),Od(Ko||ln.GreenSockGlobals||!ln.gsap&&ln||{}),u=ln.requestAnimationFrame),l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},$s=1,_(2))},sleep:function(){(u?ln.cancelAnimationFrame:clearTimeout)(l),$s=0,c=Ys},lagSmoothing:function(p,g){e=p||1/Ye,t=Math.min(g,e,0)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,g,S){var M=g?function(b,y,A,P){p(b,y,A,P),f.remove(M)}:p;return f.remove(p),a[S?"unshift":"push"](M),as(),M},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&m>=g&&m--},_listeners:a},f}(),as=function(){return!$s&&Kt.wake()},ze={},Nb=/^[\d.\-M][\d.\-,\s]/,zb=/["']/g,Ub=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(zb,"").trim():+c,r=l.substr(a+1).trim();return t},Bb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},kb=function(e){var t=(e+"").split("("),n=ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ub(t[1])]:Bb(e).split(",").map(kd)):ze._CE&&Nb.test(e)?ze._CE("",e):n},np=function(e){return function(t){return 1-e(1-t)}},ip=function i(e,t){for(var n=e._first,r;n;)n instanceof Bt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},lr=function(e,t){return e&&(rt(e)?e:ze[e]||kb(e))||t},mr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Ht(e,function(a){ze[a]=tn[a]=s,ze[o=a.toLowerCase()]=n;for(var l in s)ze[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ze[a+"."+l]=s[l]}),s},rp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vl=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/jl*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*db((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:rp(a);return s=jl/s,l.config=function(c,u){return i(e,c,u)},l},yl=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:rp(n);return r.config=function(s){return i(e,s)},r};Ht("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;mr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ze.Linear.easeNone=ze.none=ze.Linear.easeIn;mr("Elastic",vl("in"),vl("out"),vl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};mr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);mr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});mr("Circ",function(i){return-(Ad(1-i*i)-1)});mr("Sine",function(i){return i===1?1:-hb(i*ub)+1});mr("Back",yl("in"),yl("out"),yl());ze.SteppedEase=ze.steps=tn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ye;return function(a){return((r*no(0,o,a)|0)+s)*n}}};rs.ease=ze["quad.out"];Ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Bc+=i+","+i+"Params,"});var sp=function(e,t){this.id=fb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ud,this.set=t?t.getSetter:Wc},ls=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,os(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),$s||Kt.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(as(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ma(this,n),!s._dp||s.parent||Hd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hf(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hf(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ss(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ta(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ye?0:this._rts,this.totalTime(no(-this._delay,this._tDur,r),!0),ya(this),yb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(as(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Un(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ta(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gb);var r=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Wf(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(an(this,n),Gt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Gt(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ye)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=rt(n)?n:Vd,a=function(){var c=r.then;r.then=null,rt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Ls(this)},i}();gn(ls.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var Bt=function(i){Cd(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gt(n.sortChildren),tt&&Un(n.parent||tt,Kn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Wd(Kn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Os(0,arguments,this),this},t.from=function(r,s,o){return Os(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Os(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ft(r,s,an(this,o),1),this},t.call=function(r,s,o){return Un(this,ft.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ft(r,o,an(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Fs(o).immediateRender=Gt(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Fs(a).immediateRender=Gt(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Mt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,m,_,d,p,g,S,M,b,y,A,P;if(this!==tt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,b=this._start,M=this._ts,g=!M,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=Mt(u%p),u===l?(d=this._repeat,h=c):(d=~~(u/p),d&&d===u/p&&(h=c,d--),h>c&&(h=c)),y=ss(this._tTime,p),!a&&this._tTime&&y!==d&&(y=d),A&&d&1&&(h=c-h,P=1),d!==y&&!this._lock){var x=A&&y&1,T=x===(A&&d&1);if(d<y&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(P?0:Mt(d*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;ip(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=wb(this,Mt(a),Mt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&(dn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,o),h!==this._time||!this._ts&&!g){S=0,_&&(u+=this._zTime=-Ye);break}}m=_}else{m=this._last;for(var D=r<0?r:h;m;){if(_=m._prev,(m._act||D<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,s,o||Vt&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!g){S=0,_&&(u+=this._zTime=D?-Ye:Ye);break}}m=_}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-Ye)._zTime=h>=a?1:-1,this._ts))return this._start=b,ya(this),this.render(r,s,o);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Li(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(dn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ri(s)||(s=an(this,s,r)),!(r instanceof ls)){if(Lt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(yt(r))return this.addLabel(r,s);if(rt(r))r=ft.delayedCall(0,r);else return this}return this!==r?Un(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ft?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return yt(r)?this.removeLabel(r):rt(r)?this.killTweensOf(r):(va(this,r),r===this._recent&&(this._recent=this._last),ar(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(Kt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=an(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=ft.delayedCall(0,s||Ys,o);return a.data="isPause",this._hasPause=1,Un(this,a,an(this,r))},t.removePause=function(r){var s=this._first;for(r=an(this,r);s;)s._start===r&&s.data==="isPause"&&Li(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=hn(r),l=this._first,c=ri(s),u;l;)l instanceof ft?_b(l._targets,a)&&(c?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=an(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,_=ft.to(o,gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ye,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&os(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,gn({startAt:{time:an(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Xf(this,an(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Xf(this,an(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ye)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ar(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ar(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=fn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Un(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;os(o,o===tt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(tt._ts&&(Bd(tt,ta(r,tt)),zd=Kt.frame),Kt.frame>=Vf){Vf+=Qt.autoSleep||120;var s=tt._first;if((!s||!s._ts)&&Qt.autoSleep&&Kt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kt.sleep()}}},e}(ls);gn(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vb=function(e,t,n,r,s,o,a){var l=new Wt(this._pt,e,t,0,1,fp,null,s),c=0,u=0,f,h,m,_,d,p,g,S;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=js(r)),o&&(S=[n,r],o(S,e,t),n=S[0],r=S[1]),h=n.match(gl)||[];f=gl.exec(r);)_=f[0],d=r.substring(c,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:_.charAt(1)==="="?Yr(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=gl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Rd.test(r)||g)&&(l.e=0),this._pt=l,l},Vc=function(e,t,n,r,s,o,a,l,c,u){rt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:rt(f)?c?e[t.indexOf("set")||!rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=rt(f)?c?qb:cp:Hc,_;if(yt(r)&&(~r.indexOf("random(")&&(r=js(r)),r.charAt(1)==="="&&(_=Yr(h,r)+(Ct(h)||0),(_||_===0)&&(r=_))),!u||h!==r||ic)return!isNaN(h*r)&&r!==""?(_=new Wt(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?jb:up,0,m),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&zc(t,r),Vb.call(this,e,t,h,r,m,l||Qt.stringFilter,c))},Gb=function(e,t,n,r,s){if(rt(e)&&(e=Ns(e,s,t,n,r)),!Gn(e)||e.style&&e.nodeType||Lt(e)||Pd(e))return yt(e)?Ns(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ns(e[a],s,t,n,r);return o},op=function(e,t,n,r,s,o){var a,l,c,u;if($t[e]&&(a=new $t[e]).init(s,a.rawVars?t[e]:Gb(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Wt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==kr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},xi,ic,Gc=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,f=r.callbackScope,h=r.runBackwards,m=r.yoyoEase,_=r.keyframes,d=r.autoRevert,p=e._dur,g=e._startAt,S=e._targets,M=e.parent,b=M&&M.data==="nested"?M.vars.targets:S,y=e._overwrite==="auto"&&!Fc,A=e.timeline,P,x,T,D,B,se,z,I,W,Y,X,U,oe;if(A&&(!_||!s)&&(s="none"),e._ease=lr(s,rs.ease),e._yEase=m?np(lr(m===!0?s:m,rs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!r.runBackwards,!A||_&&!r.stagger){if(I=S[0]?or(S[0]).harness:0,U=I&&r[I.prop],P=ea(r,Uc),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&p?Ho:mb),g._lazy=0),o){if(Li(e._startAt=ft.set(S,gn({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:Gt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,t<0&&(Vt||!a&&!d)&&e._startAt.revert(Ho),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!g){if(t&&(a=!1),T=gn({overwrite:!1,data:"isFromStart",lazy:a&&Gt(l),immediateRender:a,stagger:0,parent:M},P),U&&(T[I.prop]=U),Li(e._startAt=ft.set(S,T)),e._startAt._dp=0,t<0&&(Vt?e._startAt.revert(Ho):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ye,Ye);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Gt(l)||l&&!p,x=0;x<S.length;x++){if(B=S[x],z=B._gsap||kc(S)[x]._gsap,e._ptLookup[x]=Y={},Kl[z.id]&&Ti.length&&Qo(),X=b===S?x:b.indexOf(B),I&&(W=new I).init(B,U||P,e,X,b)!==!1&&(e._pt=D=new Wt(e._pt,B,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(re){Y[re]=D}),W.priority&&(se=1)),!I||U)for(T in P)$t[T]&&(W=op(T,P,e,X,B,b))?W.priority&&(se=1):Y[T]=D=Vc.call(e,B,T,"get",P[T],X,b,0,r.stringFilter);e._op&&e._op[x]&&e.kill(B,e._op[x]),y&&e._pt&&(xi=e,tt.killTweensOf(B,Y,e.globalTime(t)),oe=!e.parent,xi=0),e._pt&&l&&(Kl[z.id]=1)}se&&hp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,_&&t<=0&&A.render(fn,!0,!0)},Hb=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ic=1,e.vars[t]="+=0",Gc(e,a),ic=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=st(n)+Ct(u.e)),u.b&&(u.b=c.s+Ct(u.b))},Wb=function(e,t){var n=e[0]?or(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=pr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Xb=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Lt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ns=function(e,t,n,r,s){return rt(e)?e.call(t,n,r,s):yt(e)&&~e.indexOf("random(")?js(e):e},ap=Bc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lp={};Ht(ap+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return lp[i]=1});var ft=function(i){Cd(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Fs(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,d=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,S=r.parent||tt,M=(Lt(n)||Pd(n)?ri(n[0]):"length"in r)?[n]:hn(n),b,y,A,P,x,T,D,B;if(a._targets=M.length?kc(M):Jo("GSAP target "+n+" not found. https://greensock.com",!Qt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,_||h||Oo(c)||Oo(u)){if(r=a.vars,b=a.timeline=new Bt({data:"nested",defaults:d||{},targets:S&&S.data==="nested"?S.vars.targets:M}),b.kill(),b.parent=b._dp=Kn(a),b._start=0,h||Oo(c)||Oo(u)){if(P=M.length,D=h&&jd(h),Gn(h))for(x in h)~ap.indexOf(x)&&(B||(B={}),B[x]=h[x]);for(y=0;y<P;y++)A=ea(r,lp),A.stagger=0,g&&(A.yoyoEase=g),B&&pr(A,B),T=M[y],A.duration=+Ns(c,Kn(a),y,T,M),A.delay=(+Ns(u,Kn(a),y,T,M)||0)-a._delay,!h&&P===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),b.to(T,A,D?D(y,T,M):0),b._ease=ze.none;b.duration()?c=u=0:a.timeline=0}else if(_){Fs(gn(b.vars.defaults,{ease:"none"})),b._ease=lr(_.ease||r.ease||"none");var se=0,z,I,W;if(Lt(_))_.forEach(function(Y){return b.to(M,Y,">")}),b.duration();else{A={};for(x in _)x==="ease"||x==="easeEach"||Xb(x,_[x],A,_.easeEach);for(x in A)for(z=A[x].sort(function(Y,X){return Y.t-X.t}),se=0,y=0;y<z.length;y++)I=z[y],W={ease:I.e,duration:(I.t-(y?z[y-1].t:0))/100*c},W[x]=I.v,b.to(M,W,se),se+=W.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return m===!0&&!Fc&&(xi=Kn(a),tt.killTweensOf(M),xi=0),Un(S,Kn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!_&&a._start===Mt(S._time)&&Gt(f)&&Mb(Kn(a))&&S.data!=="nested")&&(a._tTime=-Ye,a.render(Math.max(0,-u)||0)),p&&Wd(Kn(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Ye&&!u?l:r<Ye?0:r,h,m,_,d,p,g,S,M,b;if(!c)Sb(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,M=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+r,s,o);if(h=Mt(f%d),f===l?(_=this._repeat,h=c):(_=~~(f/d),_&&_===f/d&&(h=c,_--),h>c&&(h=c)),g=this._yoyo&&_&1,g&&(b=this._yEase,h=c-h),p=ss(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;_!==p&&(M&&this._yEase&&ip(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(Mt(d*_),!0).invalidate()._lock=0))}if(!this._initted){if(Xd(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(b||this._ease)(h/c),this._from&&(this.ratio=S=1-S),h&&!a&&!s&&(dn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;M&&M.render(r<0?r:!h&&g?-Ye:M._dur*M._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Jl(this,r,s,o),dn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Jl(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Li(this,1),!s&&!(u&&!a)&&(f||a||g)&&(dn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){$s||Kt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Gc(this,l),c=this._ease(l/this._dur),Hb(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Ma(this,0),this.parent||Gd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ls(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xi&&xi.vars.overwrite!==!0)._first||Ls(this),this.parent&&o!==this.timeline.totalDuration()&&os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?hn(r):a,c=this._ptLookup,u=this._pt,f,h,m,_,d,p,g;if((!s||s==="all")&&vb(a,l))return s==="all"&&(this._pt=0),Ls(this);for(f=this._op=this._op||[],s!=="all"&&(yt(s)&&(d={},Ht(s,function(S){return d[S]=1}),s=d),s=Wb(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],s==="all"?(f[g]=s,_=h,m={}):(m=f[g]=f[g]||{},_=s);for(d in _)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&va(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Ls(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Os(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Os(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return tt.killTweensOf(r,s,o)},e}(ls);gn(ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ht("staggerTo,staggerFrom,staggerFromTo",function(i){ft[i]=function(){var e=new Bt,t=ec.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Hc=function(e,t,n){return e[t]=n},cp=function(e,t,n){return e[t](n)},qb=function(e,t,n,r){return e[t](r.fp,n)},Yb=function(e,t,n){return e.setAttribute(t,n)},Wc=function(e,t){return rt(e[t])?cp:Oc(e[t])&&e.setAttribute?Yb:Hc},up=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},fp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Xc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},$b=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Zb=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?va(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Kb=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},hp=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Wt=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||up,this.d=l||this,this.set=c||Hc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Kb,this.m=n,this.mt=s,this.tween=r},i}();Ht(Bc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Uc[i]=1});tn.TweenMax=tn.TweenLite=ft;tn.TimelineLite=tn.TimelineMax=Bt;tt=new Bt({sortChildren:!1,defaults:rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qt.stringFilter=tp;var cs=[],Xo={},Jb=[],Yf=0,Ml=function(e){return(Xo[e]||Jb).map(function(t){return t()})},rc=function(){var e=Date.now(),t=[];e-Yf>2&&(Ml("matchMediaInit"),cs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ln.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ml("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Yf=e,Ml("matchMedia"))},dp=function(){function i(t,n){this.selector=n&&tc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){rt(n)&&(s=r,r=n,n=rt);var o=this,a=function(){var c=ct,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=tc(s)),ct=o,f=r.apply(o,arguments),rt(f)&&o._r.push(f),ct=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===rt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=ct;ct=null,n(this),ct=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof ft&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ls)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=cs.indexOf(this);~a&&cs.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),Qb=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Gn(n)||(n={matches:n});var o=new dp(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=ln.matchMedia(n[c]),l&&(cs.indexOf(o)<0&&cs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(rc):l.addEventListener("change",rc)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),na={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Fb(r)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,n,r){yt(e)&&(e=hn(e)[0]);var s=or(e||{}).get,o=n?Vd:kd;return n==="native"&&(n=""),e&&(t?o(($t[t]&&$t[t].get||s)(e,t,n,r)):function(a,l,c){return o(($t[a]&&$t[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hn(e),e.length>1){var r=e.map(function(u){return nn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=$t[t],a=or(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;kr._pt=0,f.init(e,n?u+n:u,kr,0,[e]),f.render(1,f),kr._pt&&Xc(1,kr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=nn.to(e,pr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=lr(e.ease,rs.ease)),Gf(rs,e||{})},config:function(e){return Gf(Qt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!$t[a]&&!tn[a]&&Jo(t+" effect requires "+a+" plugin.")}),_l[t]=function(a,l,c){return n(hn(a),gn(l||{},s),c)},o&&(Bt.prototype[t]=function(a,l,c){return this.add(_l[t](a,Gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ze[e]=lr(t)},parseEase:function(e,t){return arguments.length?lr(e,t):ze},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bt(e),r,s;for(n.smoothChildTiming=Gt(e.smoothChildTiming),tt.remove(n),n._dp=0,n._time=n._tTime=tt._time,r=tt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof ft&&r.vars.onComplete===r._targets[0]))&&Un(n,r,r._start-r._delay),r=s;return Un(tt,n,0),n},context:function(e,t){return e?new dp(e,t):ct},matchMedia:function(e){return new Qb(e)},matchMediaRefresh:function(){return cs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||rc()},addEventListener:function(e,t){var n=Xo[e]||(Xo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Db,wrapYoyo:Rb,distribute:jd,random:Zd,snap:$d,normalize:Pb,getUnit:Ct,clamp:Eb,splitColor:Qd,toArray:hn,selector:tc,mapRange:Jd,pipe:Ab,unitize:Lb,interpolate:Ib,shuffle:Yd},install:Od,effects:_l,ticker:Kt,updateRoot:Bt.updateRoot,plugins:$t,globalTimeline:tt,core:{PropTween:Wt,globals:Nd,Tween:ft,Timeline:Bt,Animation:ls,getCache:or,_removeLinkedListItem:va,reverting:function(){return Vt},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return Fc=e}}};Ht("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return na[i]=ft[i]});Kt.add(Bt.updateRoot);kr=na.to({},{duration:0});var eS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},tS=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=eS(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},bl=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(yt(s)&&(l={},Ht(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}tS(a,s)}}}},nn=na.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},bl("roundProps",nc),bl("modifiers"),bl("snap",$d))||na;ft.version=Bt.version=nn.version="3.11.3";Fd=1;Ld()&&as();ze.Power0;ze.Power1;ze.Power2;ze.Power3;ze.Power4;ze.Linear;ze.Quad;ze.Cubic;ze.Quart;ze.Quint;ze.Strong;ze.Elastic;ze.Back;ze.SteppedEase;ze.Bounce;ze.Sine;ze.Expo;ze.Circ;var jf,vi,jr,qc,er,$f,Yc,nS=function(){return typeof window<"u"},si={},Yi=180/Math.PI,$r=Math.PI/180,Fr=Math.atan2,Zf=1e8,jc=/([A-Z])/g,iS=/(left|right|width|margin|padding|x)/i,rS=/[\s,\(]\S/,ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},aS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},lS=function(e,t,n){return e.style[t]=n},cS=function(e,t,n){return e.style.setProperty(t,n)},uS=function(e,t,n){return e._gsap[t]=n},fS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hS=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},dS=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},nt="transform",Ln=nt+"Origin",pS=function(e,t){var n=this,r=this.target,s=r.style;if(e in si){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ei[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Jn(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Jn(r,e)),this.props.indexOf(nt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ln,t,"")),e=nt}(s||t)&&this.props.push(e,t,s[e])},gp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},mS=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(jc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yc(),s&&!s.isStart&&!n[nt]&&(gp(n),r.uncache=1)}},_p=function(e,t){var n={target:e,props:[],revert:mS,save:pS};return t&&t.split(",").forEach(function(r){return n.save(r)}),n},xp,oc=function(e,t){var n=vi.createElementNS?vi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vi.createElement(e);return n.style?n:vi.createElement(e)},Vn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(jc,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,us(t)||t,1)||""},Kf="O,Moz,ms,Ms,Webkit".split(","),us=function(e,t,n){var r=t||er,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Kf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Kf[o]:"")+e},ac=function(){nS()&&window.document&&(jf=window,vi=jf.document,jr=vi.documentElement,er=oc("div")||{style:{}},oc("div"),nt=us(nt),Ln=nt+"Origin",er.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xp=!!us("perspective"),Yc=nn.core.reverting,qc=1)},Sl=function i(e){var t=oc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(jr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),jr.removeChild(t),this.style.cssText=s,o},Jf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},vp=function(e){var t;try{t=e.getBBox()}catch{t=Sl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Sl||(t=Sl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Jf(e,["x","cx","x1"])||0,y:+Jf(e,["y","cy","y1"])||0,width:0,height:0}:t},yp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vp(e))},Zs=function(e,t){if(t){var n=e.style;t in si&&t!==Ln&&(t=nt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(jc,"-$1").toLowerCase())):n.removeAttribute(t)}},yi=function(e,t,n,r,s,o){var a=new Wt(e._pt,t,n,0,1,o?mp:pp);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Qf={deg:1,rad:1,turn:1},gS={grid:1,flex:1},Pi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=er.style,l=iS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",m=r==="%",_,d,p,g;return r===o||!s||Qf[r]||Qf[o]?s:(o!=="px"&&!h&&(s=i(e,t,n,"px")),g=e.getCTM&&yp(e),(m||o==="%")&&(si[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],st(m?s/_*f:s/100*_)):(a[l?"width":"height"]=f+(h?o:r),d=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===vi||!d.appendChild)&&(d=vi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Kt.time&&!p.uncache?st(s/p.width*f):((m||o==="%")&&!gS[Vn(d,"display")]&&(a.position=Vn(e,"position")),d===e&&(a.position="static"),d.appendChild(er),_=er[u],d.removeChild(er),a.position="absolute",l&&m&&(p=or(d),p.time=Kt.time,p.width=d[u]),st(h?_*s/f:_&&s?f/_*s:0))))},Jn=function(e,t,n,r){var s;return qc||ac(),t in ei&&t!=="transform"&&(t=ei[t],~t.indexOf(",")&&(t=t.split(",")[0])),si[t]&&t!=="transform"?(s=Js(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ra(Vn(e,Ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ia[t]&&ia[t](e,t,n)||Vn(e,t)||Ud(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Pi(e,t,s,n)+n:s},_S=function(e,t,n,r){if(!n||n==="none"){var s=us(t,e,1),o=s&&Vn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Vn(e,"borderTopColor"))}var a=new Wt(this._pt,e.style,t,0,1,fp),l=0,c=0,u,f,h,m,_,d,p,g,S,M,b,y;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=Vn(e,t)||r,e.style[t]=n),u=[n,r],tp(u),n=u[0],r=u[1],h=n.match(Br)||[],y=r.match(Br)||[],y.length){for(;f=Br.exec(r);)p=f[0],S=r.substring(l,f.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(d=h[c++]||"")&&(m=parseFloat(d)||0,b=d.substr((m+"").length),p.charAt(1)==="="&&(p=Yr(m,p)+b),g=parseFloat(p),M=p.substr((g+"").length),l=Br.lastIndex-M.length,M||(M=M||Qt.units[t]||b,l===r.length&&(r+=M,a.e+=M)),b!==M&&(m=Pi(e,t,d,M)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?mp:pp;return Rd.test(r)&&(a.e=0),this._pt=a,a},eh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=eh[n]||n,t[1]=eh[r]||r,t.join(" ")},vS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],si[a]&&(l=1,a=a==="transformOrigin"?Ln:nt),Zs(n,a);l&&(Zs(n,nt),o&&(o.svg&&n.removeAttribute("transform"),Js(n,1),o.uncache=1,gp(r)))}},ia={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Wt(e._pt,t,n,0,0,vS);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ks=[1,0,0,1,0,0],Mp={},bp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},th=function(e){var t=Vn(e,nt);return bp(t)?Ks:t.substr(7).match(Dd).map(st)},$c=function(e,t){var n=e._gsap||or(e),r=e.style,s=th(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ks:s):(s===Ks&&!e.offsetParent&&e!==jr&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,jr.appendChild(e)),s=th(e),l?r.display=l:Zs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):jr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lc=function(e,t,n,r,s,o){var a=e._gsap,l=s||$c(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,m=l[0],_=l[1],d=l[2],p=l[3],g=l[4],S=l[5],M=t.split(" "),b=parseFloat(M[0])||0,y=parseFloat(M[1])||0,A,P,x,T;n?l!==Ks&&(P=m*p-_*d)&&(x=b*(p/P)+y*(-d/P)+(d*S-p*g)/P,T=b*(-_/P)+y*(m/P)-(m*S-_*g)/P,b=x,y=T):(A=vp(e),b=A.x+(~M[0].indexOf("%")?b/100*A.width:b),y=A.y+(~(M[1]||M[0]).indexOf("%")?y/100*A.height:y)),r||r!==!1&&a.smooth?(g=b-c,S=y-u,a.xOffset=f+(g*m+S*d)-g,a.yOffset=h+(g*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=y,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Ln]="0px 0px",o&&(yi(o,a,"xOrigin",c,b),yi(o,a,"yOrigin",u,y),yi(o,a,"xOffset",f,a.xOffset),yi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+y)},Js=function(e,t){var n=e._gsap||new sp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Vn(e,Ln)||"0",u,f,h,m,_,d,p,g,S,M,b,y,A,P,x,T,D,B,se,z,I,W,Y,X,U,oe,re,G,H,ae,le,me;return u=f=h=d=p=g=S=M=b=0,m=_=1,n.svg=!!(e.getCTM&&yp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),r.scale=r.rotate=r.translate="none"),P=$c(e,n.svg),n.svg&&(n.uncache?(U=e.getBBox(),c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),lc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,P)),y=n.xOrigin||0,A=n.yOrigin||0,P!==Ks&&(B=P[0],se=P[1],z=P[2],I=P[3],u=W=P[4],f=Y=P[5],P.length===6?(m=Math.sqrt(B*B+se*se),_=Math.sqrt(I*I+z*z),d=B||se?Fr(se,B)*Yi:0,S=z||I?Fr(z,I)*Yi+d:0,S&&(_*=Math.abs(Math.cos(S*$r))),n.svg&&(u-=y-(y*B+A*z),f-=A-(y*se+A*I))):(me=P[6],ae=P[7],re=P[8],G=P[9],H=P[10],le=P[11],u=P[12],f=P[13],h=P[14],x=Fr(me,H),p=x*Yi,x&&(T=Math.cos(-x),D=Math.sin(-x),X=W*T+re*D,U=Y*T+G*D,oe=me*T+H*D,re=W*-D+re*T,G=Y*-D+G*T,H=me*-D+H*T,le=ae*-D+le*T,W=X,Y=U,me=oe),x=Fr(-z,H),g=x*Yi,x&&(T=Math.cos(-x),D=Math.sin(-x),X=B*T-re*D,U=se*T-G*D,oe=z*T-H*D,le=I*D+le*T,B=X,se=U,z=oe),x=Fr(se,B),d=x*Yi,x&&(T=Math.cos(x),D=Math.sin(x),X=B*T+se*D,U=W*T+Y*D,se=se*T-B*D,Y=Y*T-W*D,B=X,W=U),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,g=180-g),m=st(Math.sqrt(B*B+se*se+z*z)),_=st(Math.sqrt(Y*Y+me*me)),x=Fr(W,Y),S=Math.abs(x)>2e-4?x*Yi:0,b=le?1/(le<0?-le:le):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!bp(Vn(e,nt)),X&&e.setAttribute("transform",X))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(m*=-1,S+=d<=0?180:-180,d+=d<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=st(m),n.scaleY=st(_),n.rotation=st(d)+a,n.rotationX=st(p)+a,n.rotationY=st(g)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Ln]=ra(c)),n.xOffset=n.yOffset=0,n.force3D=Qt.force3D,n.renderTransform=n.svg?MS:xp?Sp:yS,n.uncache=0,n},ra=function(e){return(e=e.split(" "))[0]+" "+e[1]},wl=function(e,t,n){var r=Ct(t);return st(parseFloat(t)+parseFloat(Pi(e,"x",n+"px",r)))+r},yS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Sp(e,t)},Gi="0deg",ws="0px",Hi=") ",Sp=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,_=n.scaleX,d=n.scaleY,p=n.transformPerspective,g=n.force3D,S=n.target,M=n.zOrigin,b="",y=g==="auto"&&e&&e!==1||g===!0;if(M&&(f!==Gi||u!==Gi)){var A=parseFloat(u)*$r,P=Math.sin(A),x=Math.cos(A),T;A=parseFloat(f)*$r,T=Math.cos(A),o=wl(S,o,P*T*-M),a=wl(S,a,-Math.sin(A)*-M),l=wl(S,l,x*T*-M+M)}p!==ws&&(b+="perspective("+p+Hi),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(y||o!==ws||a!==ws||l!==ws)&&(b+=l!==ws||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Hi),c!==Gi&&(b+="rotate("+c+Hi),u!==Gi&&(b+="rotateY("+u+Hi),f!==Gi&&(b+="rotateX("+f+Hi),(h!==Gi||m!==Gi)&&(b+="skew("+h+", "+m+Hi),(_!==1||d!==1)&&(b+="scale("+_+", "+d+Hi),S.style[nt]=b||"translate(0, 0)"},MS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,_=n.xOrigin,d=n.yOrigin,p=n.xOffset,g=n.yOffset,S=n.forceCSS,M=parseFloat(o),b=parseFloat(a),y,A,P,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$r,c*=$r,y=Math.cos(l)*f,A=Math.sin(l)*f,P=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=$r,T=Math.tan(c-u),T=Math.sqrt(1+T*T),P*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,A*=T)),y=st(y),A=st(A),P=st(P),x=st(x)):(y=f,x=h,A=P=0),(M&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(M=Pi(m,"x",o,"px"),b=Pi(m,"y",a,"px")),(_||d||p||g)&&(M=st(M+_-(_*y+d*P)+p),b=st(b+d-(_*A+d*x)+g)),(r||s)&&(T=m.getBBox(),M=st(M+r/100*T.width),b=st(b+s/100*T.height)),T="matrix("+y+","+A+","+P+","+x+","+M+","+b+")",m.setAttribute("transform",T),S&&(m.style[nt]=T)},bS=function(e,t,n,r,s){var o=360,a=yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Yi:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Zf)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Zf)%o-~~(c/o)*o)),e._pt=h=new Wt(e._pt,t,n,r,c,sS),h.e=u,h.u="deg",e._props.push(n),h},nh=function(e,t){for(var n in t)e[n]=t[n];return e},SS=function(e,t,n){var r=nh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,m,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[nt]=t,a=Js(n,1),Zs(n,nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nt],o[nt]=t,a=Js(n,1),o[nt]=c);for(l in si)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=Ct(c),_=Ct(u),f=m!==_?Pi(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Wt(e._pt,a,l,f,h-f,sc),e._pt.u=_||0,e._props.push(l));nh(a,r)};Ht("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});ia[e>1?"border"+i:i]=function(a,l,c,u,f){var h,m;if(arguments.length<4)return h=o.map(function(_){return Jn(a,_,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},o.forEach(function(_,d){return m[_]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,m,f)}});var wp={name:"css",register:ac,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,m,_,d,p,g,S,M,b,y,A,P,x;qc||ac(),this.styles=this.styles||_p(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!($t[d]&&op(d,t,n,r,e,s)))){if(m=typeof u,_=ia[d],m==="function"&&(u=u.call(n,r,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=js(u)),_)_(this,e,d,u,n)&&(P=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Ei.lastIndex=0,Ei.test(c)||(p=Ct(c),g=Ct(u)),g?p!==g&&(c=Pi(e,d,c,g)+g):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,d),o.push(d),x.push(d,0,a[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,r,e,s):l[d],yt(c)&&~c.indexOf("random(")&&(c=js(c)),Ct(c+"")||(c+=Qt.units[d]||Ct(Jn(e,d))||""),(c+"").charAt(1)==="="&&(c=Jn(e,d))):c=Jn(e,d),h=parseFloat(c),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),d in ei&&(d==="autoAlpha"&&(h===1&&Jn(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),yi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=ei[d],~d.indexOf(",")&&(d=d.split(",")[0]))),M=d in si,M){if(this.styles.save(d),b||(y=e._gsap,y.renderTransform&&!t.parseTransform||Js(e,t.parseTransform),A=t.smoothOrigin!==!1&&y.smooth,b=this._pt=new Wt(this._pt,a,nt,0,1,y.renderTransform,y,0,-1),b.dep=1),d==="scale")this._pt=new Wt(this._pt,y,"scaleY",h,(S?Yr(h,S+f):f)-h||0,sc),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(Ln,0,a[Ln]),u=xS(u),y.svg?lc(e,u,0,A,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==y.zOrigin&&yi(this,y,"zOrigin",y.zOrigin,g),yi(this,a,d,ra(c),ra(u)));continue}else if(d==="svgOrigin"){lc(e,u,1,A,0,this);continue}else if(d in Mp){bS(this,y,d,h,S?Yr(h,S+u):u);continue}else if(d==="smoothOrigin"){yi(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){SS(this,u,e);continue}}else d in a||(d=us(d)||d);if(M||(f||f===0)&&(h||h===0)&&!rS.test(u)&&d in a)p=(c+"").substr((h+"").length),f||(f=0),g=Ct(u)||(d in Qt.units?Qt.units[d]:p),p!==g&&(h=Pi(e,d,c,g)),this._pt=new Wt(this._pt,M?y:a,d,h,(S?Yr(h,S+f):f)-h,!M&&(g==="px"||d==="zIndex")&&t.autoRound!==!1?aS:sc),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=oS);else if(d in a)_S.call(this,e,d,c,S?S+u:u);else if(d in e)this.add(e,d,c||e[d],S?S+u:u,r,s);else{zc(d,u);continue}M||(d in a?x.push(d,0,a[d]):x.push(d,1,c||e[d])),o.push(d)}}P&&hp(this)},render:function(e,t){if(t.tween._time||!Yc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Jn,aliases:ei,getSetter:function(e,t,n){var r=ei[t];return r&&r.indexOf(",")<0&&(t=r),t in si&&t!==Ln&&(e._gsap.x||Jn(e,"x"))?n&&$f===n?t==="scale"?fS:uS:($f=n||{})&&(t==="scale"?hS:dS):e.style&&!Oc(e.style[t])?lS:~t.indexOf("-")?cS:Wc(e,t)},core:{_removeProperty:Zs,_getMatrix:$c}};nn.utils.checkPrefix=us;nn.core.getStyleSaver=_p;(function(i,e,t,n){var r=Ht(i+","+e+","+t,function(s){si[s]=1});Ht(e,function(s){Qt.units[s]="deg",Mp[s]=1}),ei[r[13]]=i+","+e,Ht(n,function(s){var o=s.split(":");ei[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Qt.units[i]="px"});nn.registerPlugin(wp);var Rn=nn.registerPlugin(wp)||nn;Rn.core.Tween;class mi{constructor(e,t="helloworld",n=new O(0,0,0),r=new Bn(0,0,0)){this.fns=[];const s=document.createElement("canvas");s.width=1024,s.height=1024;const o=s.getContext("2d");this.context=o,o.fillStyle="rgba(100,100,100,1)",o.fillRect(0,256,1024,512),o.textAlign="center",o.textBaseline="middle",o.font="bold 200px Arial",o.fillStyle="rgba(255,255,255,1)",o.fillText(t,s.width/2,s.height/2);let a=new sb(s);const l=new Sd({map:a,color:16777215,alphaMap:a,side:Qn,transparent:!0});this.mesh=new rb(l),this.mesh.scale.set(.5,.5,.5),this.mesh.position.copy(n),this.raycaster=new cb,this.mouse=new Ue,window.addEventListener("click",c=>{this.mouse.x=c.clientX/window.innerWidth*2-1,this.mouse.y=-(c.clientY/window.innerHeight*2-1),this.raycaster.setFromCamera(this.mouse,e),c.mesh=this.mesh,c.spriteCanvas=this,this.raycaster.intersectObject(this.mesh).length>0&&this.fns.forEach(f=>{f(c)})})}onClick(e){this.fns.push(e)}}const wS={key:0,class:"mask"},TS={id:"progress"},ES={class:"step"},CS={__name:"App",setup(i){let e=ca({loadtxt:"资源加载中。。。".split("")}),t=Aa(null),n=Aa(0);const r=new nb,s=new un(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.set(0,0,0);const o=new bd;o.setSize(window.innerWidth,window.innerHeight);const a=Aa(null),l=()=>{o.render(r,s),requestAnimationFrame(l)},c=new hr(10,10,10);c.scale(1,1,-1);const u=new Is({color:65280}),f=new kn(c,u);r.add(f),wc(()=>{let d=0,p="./img/livingroom/",g=new O(0,0,0);new _("客厅",d,p,g);let S=new O(-5,0,-10),M=3,b="./img/kitchen",y=new Bn(0,-Math.PI/2,0);new _("厨房",M,b,S,y);const A=new mi(s,"厨房",new O(-1,0,-3));r.add(A.mesh),A.onClick(()=>{console.log("厨房"),Rn.to(s.position,{x:S.x,y:S.y,z:S.z,duration:1}),h("厨房")});const P=new mi(s,"客厅",new O(-4,0,-6));r.add(P.mesh),P.onClick(()=>{console.log("客厅"),Rn.to(s.position,{x:g.x,y:g.y,z:g.z,duration:1}),h("客厅")});let x=new O(0,0,15),T=8,D="./img/balcony",B=new Bn(0,Math.PI/16,0);new _("阳台",T,D,x,B);const se=new mi(s,"阳台",new O(0,0,3));r.add(se.mesh),se.onClick(()=>{console.log("阳台"),Rn.to(s.position,{x:x.x,y:x.y,z:x.z,duration:1}),h("阳台")});const z=new mi(s,"客厅",new O(-1,0,11));r.add(z.mesh),z.onClick(()=>{console.log("客厅"),Rn.to(s.position,{x:g.x,y:g.y,z:g.z,duration:1}),h("客厅")});let I=new O(-15,0,0),W=9,Y="./img/corridor",X=new Bn(0,-Math.PI+Math.PI/16,0);new _("走廊",W,Y,I,X);const U=new mi(s,"走廊",new O(-4,0,.5));r.add(U.mesh),U.onClick(()=>{console.log("走廊"),Rn.to(s.position,{x:I.x,y:I.y,z:I.z,duration:1}),h("走廊")});const oe=new mi(s,"客厅",new O(-11,0,0));r.add(oe.mesh),oe.onClick(()=>{console.log("客厅"),Rn.to(s.position,{x:g.x,y:g.y,z:g.z,duration:1}),h("客厅")});let re=new O(-25,0,2),G=18,H="./img/bedroom";new _("主卧",G,H,re);const ae=new mi(s,"主卧",new O(-19,0,2));r.add(ae.mesh),ae.onClick(()=>{console.log("主卧"),Rn.to(s.position,{x:re.x,y:re.y,z:re.z,duration:1}),h("主卧")});const le=new mi(s,"走廊",new O(-23,0,-2));r.add(le.mesh),le.onClick(()=>{console.log("走廊"),Rn.to(s.position,{x:I.x,y:I.y,z:I.z,duration:1}),h("走廊")}),a.value.appendChild(o.domElement),l(),m()});function h(d){let p={客厅:[100,110],厨房:[180,190],阳台:[50,50],卧室:[160,40],走廊:[150,90]};p[d]&&Rn.to(t.value,{duration:1,x:p[d][0],y:p[d][1],ease:"power3.inOut"})}function m(){let d=!1;window.addEventListener("mousedown",()=>{d=!0},!1),window.addEventListener("mouseup",()=>{d=!1},!1),window.addEventListener("mousemove",g=>{d&&(s.rotation.y+=g.movementX/window.innerWidth*Math.PI)},!1);let p;window.addEventListener("touchstart",g=>{p=g.targetTouches[0].clientX,d=!0},!1),window.addEventListener("touchend",()=>{d=!1},!1),window.addEventListener("touchmove",g=>{if(d){let S=g.targetTouches[0].clientX-p;s.rotation.y+=S/window.innerWidth*Math.PI,p=g.targetTouches[0].clientX}},!1)}class _{constructor(p,g,S,M=new O(0,0,0),b=new Bn(0,0,0)){this.name=p;const y=new hr(10,10,10);y.scale(1,1,-1);var A=[`${g}_l`,`${g}_r`,`${g}_u`,`${g}_d`,`${g}_b`,`${g}_f`],P=[];A.forEach(T=>{let D=new lb().load(`./${S}/${T}.jpg`);T===`${g}_u`||T===`${g}_d`?(D.rotation=Math.PI,D.center=new Ue(.5,.5),P.push(new Is({map:D}))):P.push(new Is({map:D}))});const x=new kn(y,P);x.position.copy(M),x.rotation.copy(b),r.add(x),Td.onProgress=function(T,D,B){console.log(T,D,B),n.value=new Number(D/B*100).toFixed(2)}}}return(d,p)=>(Es(),co("div",null,[zr("div",{class:"container",ref_key:"container",ref:a},null,512),zo(n)!=100?(Es(),co("div",wS,[zr("div",TS,[zr("span",{style:zs({width:zo(n)+"%"})},null,4)]),zr("div",ES,[(Es(!0),co(yn,null,Jm(zo(e).loadtxt,(g,S)=>(Es(),co("span",{style:zs({"--i":S})},Op(g),5))),256))])])):bg("",!0)]))}};i_(CS).mount("#app");
