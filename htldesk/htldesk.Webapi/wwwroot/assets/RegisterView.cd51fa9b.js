import{o as Le,c as je,b,d as L,w as j,v as k,e as ke}from"./index.b68663b7.js";function me(e,t){return function(){return e.apply(t,arguments)}}const{toString:we}=Object.prototype,{getPrototypeOf:Y}=Object,Z=(e=>t=>{const n=we.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>Z(t)===e),z=e=>t=>typeof t===e,{isArray:C}=Array,D=z("undefined");function Me(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ye=T("ArrayBuffer");function He(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ye(e.buffer),t}const Ie=z("string"),N=z("function"),Ee=z("number"),ee=e=>e!==null&&typeof e=="object",qe=e=>e===!0||e===!1,M=e=>{if(Z(e)!=="object")return!1;const t=Y(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Je=T("Date"),ze=T("File"),Ve=T("Blob"),$e=T("FileList"),We=e=>ee(e)&&N(e.pipe),Ke=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||we.call(e)===t||N(e.toString)&&e.toString()===t)},Xe=T("URLSearchParams"),ve=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),C(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Oe=typeof self>"u"?typeof global>"u"?globalThis:global:self,Se=e=>!D(e)&&e!==Oe;function v(){const{caseless:e}=Se(this)&&this||{},t={},n=(r,s)=>{const i=e&&be(t,s)||s;M(t[i])&&M(r)?t[i]=v(t[i],r):M(r)?t[i]=v({},r):C(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&F(arguments[r],n);return t}const Ge=(e,t,n,{allOwnKeys:r}={})=>(F(t,(s,i)=>{n&&N(s)?e[i]=me(s,n):e[i]=s},{allOwnKeys:r}),e),Qe=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ye=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ze=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&Y(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},et=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},tt=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!Ee(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},nt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Y(Uint8Array)),rt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},st=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ot=T("HTMLFormElement"),it=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),at=T("RegExp"),Re=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},ct=e=>{Re(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ut=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return C(e)?r(e):r(String(e).split(t)),n},lt=()=>{},ft=(e,t)=>(e=+e,Number.isFinite(e)?e:t),dt=e=>{const t=new Array(10),n=(r,s)=>{if(ee(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=C(r)?[]:{};return F(r,(o,u)=>{const d=n(o,s+1);!D(d)&&(i[u]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:C,isArrayBuffer:ye,isBuffer:Me,isFormData:Ke,isArrayBufferView:He,isString:Ie,isNumber:Ee,isBoolean:qe,isObject:ee,isPlainObject:M,isUndefined:D,isDate:Je,isFile:ze,isBlob:Ve,isRegExp:at,isFunction:N,isStream:We,isURLSearchParams:Xe,isTypedArray:nt,isFileList:$e,forEach:F,merge:v,extend:Ge,trim:ve,stripBOM:Qe,inherits:Ye,toFlatObject:Ze,kindOf:Z,kindOfTest:T,endsWith:et,toArray:tt,forEachEntry:rt,matchAll:st,isHTMLForm:ot,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:Re,freezeMethods:ct,toObjectSet:ut,toCamelCase:it,noop:lt,toFiniteNumber:ft,findKey:be,global:Oe,isContextDefined:Se,toJSONObject:dt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ae=m.prototype,Te={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Te[e]={value:e}});Object.defineProperties(m,Te);Object.defineProperty(Ae,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Ae);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var pt=typeof self=="object"?self.FormData:window.FormData;const ht=pt;function G(e){return a.isPlainObject(e)||a.isArray(e)}function ge(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ie(e,t,n){return e?e.concat(t).map(function(s,i){return s=ge(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function mt(e){return a.isArray(e)&&!e.some(G)}const wt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function yt(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(ht||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&yt(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,R){let O=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&mt(f)||a.isFileList(f)||a.endsWith(h,"[]")&&(O=a.toArray(f)))return h=ge(h),O.forEach(function(U,Ue){!(a.isUndefined(U)||U===null)&&t.append(o===!0?ie([h],Ue,i):o===null?h:h+"[]",c(U))}),!1}return G(f)?!0:(t.append(ie(R,h,i),c(f)),!1)}const p=[],y=Object.assign(wt,{defaultVisitor:l,convertValue:c,isVisitable:G});function w(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(O,x){(!(a.isUndefined(O)||O===null)&&s.call(t,O,a.isString(x)?x.trim():x,h,y))===!0&&w(O,h?h.concat(x):[x])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function te(e,t){this._pairs=[],e&&V(e,this,t)}const Ne=te.prototype;Ne.append=function(t,n){this._pairs.push([t,n])};Ne.toString=function(t){const n=t?function(r){return t.call(this,r,ae)}:ae;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Et(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xe(e,t,n){if(!t)return e;const r=n&&n.encode||Et,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class bt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ce=bt,Pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ot=typeof URLSearchParams<"u"?URLSearchParams:te,St=FormData,Rt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),At=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Ot,FormData:St,Blob},isStandardBrowserEnv:Rt,isStandardBrowserWebWorkerEnv:At,protocols:["http","https","file","blob","url","data"]};function Tt(e,t){return V(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function gt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Nt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ce(e){function t(n,r,s,i){let o=n[i++];const u=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Nt(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(gt(r),s,n,0)}),n}return null}const xt={"Content-Type":void 0};function Pt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const $={transitional:Pe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ce(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Tt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return V(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Pt(t)):t}],transformResponse:[function(t){const n=this.transitional||$.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){$.headers[t]={}});a.forEach(["post","put","patch"],function(t){$.headers[t]=a.merge(xt)});const ne=$,Ct=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_t=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Ct[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ue=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:a.isArray(e)?e.map(H):String(e)}function Dt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Ft(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function le(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Bt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ut(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,d,c){const l=_(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=H(u))}const o=(u,d)=>a.forEach(u,(c,l)=>i(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Ft(t)?o(_t(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=_(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Dt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_(t),t){const r=a.findKey(this,t);return!!(r&&(!n||le(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=_(o),o){const u=a.findKey(r,o);u&&(!n||le(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=H(s),delete n[i];return}const u=t?Bt(i):String(i).trim();u!==i&&delete n[i],n[u]=H(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ue]=this[ue]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=_(o);r[u]||(Ut(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(W.prototype);a.freezeMethods(W);const A=W;function K(e,t){const n=this||ne,r=t||n,s=A.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function _e(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});const Lt=null;function jt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const kt=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Mt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ht(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function De(e,t){return e&&!Mt(t)?Ht(e,t):t}const It=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function qt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Jt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[i];o||(o=c),n[s]=d,r[s]=c;let p=i,y=0;for(;p!==s;)y+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const w=l&&c-l;return w?Math.round(y*1e3/w):void 0}}function fe(e,t){let n=0;const r=Jt(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,d=r(u),c=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:d||void 0,estimated:d&&o&&c?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const zt=typeof XMLHttpRequest<"u",Vt=zt&&function(e){return new Promise(function(n,r){let s=e.data;const i=A.from(e.headers).normalize(),o=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+f))}const l=De(e.baseURL,e.url);c.open(e.method.toUpperCase(),xe(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const w=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};jt(function(O){n(O),d()},function(O){r(O),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){!c||(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Pe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const w=(e.withCredentials||It(l))&&e.xsrfCookieName&&kt.read(e.xsrfCookieName);w&&i.set(e.xsrfHeaderName,w)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",fe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",fe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=w=>{!c||(r(!w||w.type?new B(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const y=qt(l);if(y&&S.protocols.indexOf(y)===-1){r(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},I={http:Lt,xhr:Vt};a.forEach(I,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $t={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?I[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(I,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:I};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function de(e){return X(e),e.headers=A.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$t.getAdapter(e.adapter||ne.adapter)(e).then(function(r){return X(e),r.data=K.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return _e(r)||(X(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const pe=e=>e instanceof A?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function i(c,l){if(!a.isUndefined(l))return r(void 0,l)}function o(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(c,l)=>s(pe(c),pe(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||s,y=p(e[l],t[l],l);a.isUndefined(y)&&p!==u||(n[l]=y)}),n}const Fe="1.2.1",re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const he={};re.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Fe+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!he[o]&&(he[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function Wt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],d=u===void 0||o(u,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const Q={assertOptions:Wt,validators:re},g=Q.validators;class J{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Q.assertOptions(r,{silentJSONParsing:g.transitional(g.boolean),forcedJSONParsing:g.transitional(g.boolean),clarifyTimeoutError:g.transitional(g.boolean)},!1),s!==void 0&&Q.assertOptions(s,{encode:g.function,serialize:g.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=A.concat(o,i);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,y;if(!d){const f=[de.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),y=f.length,l=Promise.resolve(n);p<y;)l=l.then(f[p++],f[p++]);return l}y=u.length;let w=n;for(p=0;p<y;){const f=u[p++],h=u[p++];try{w=f(w)}catch(R){h.call(this,R);break}}try{l=de.call(this,w)}catch(f){return Promise.reject(f)}for(p=0,y=c.length;p<y;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=P(this.defaults,t);const n=De(t.baseURL,t.url);return xe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(P(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}J.prototype[t]=n(),J.prototype[t+"Form"]=n(!0)});const q=J;class se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new B(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new se(function(s){t=s}),cancel:t}}}const Kt=se;function Xt(e){return function(n){return e.apply(null,n)}}function vt(e){return a.isObject(e)&&e.isAxiosError===!0}function Be(e){const t=new q(e),n=me(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Be(P(e,s))},n}const E=Be(ne);E.Axios=q;E.CanceledError=B;E.CancelToken=Kt;E.isCancel=_e;E.VERSION=Fe;E.toFormData=V;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Xt;E.isAxiosError=vt;E.mergeConfig=P;E.AxiosHeaders=A;E.formToJSON=e=>Ce(a.isHTMLForm(e)?new FormData(e):e);E.default=E;const Gt=E,Qt=b("br",null,null,-1),Yt=b("br",null,null,-1),Zt=b("br",null,null,-1),en=b("br",null,null,-1),tn=b("button",{type:"submit"},"Register",-1),nn={data(){return{email:"",username:"",password:"",passwordConfirmation:""}},methods:{async register(){if(this.password!==this.passwordConfirmation){this.errorMessage="Passwords do not match";return}try{await Gt.post("https://localhost:5001/api/users",{email:this.email,username:this.username,password:this.password})}catch(e){console.error(e),this.errorMessage="Error creating user"}}}},sn=Object.assign(nn,{__name:"RegisterView",setup(e){return(t,n)=>(Le(),je("div",null,[b("form",{onSubmit:n[4]||(n[4]=ke((...r)=>t.register&&t.register(...r),["prevent"]))},[b("label",null,[L(" Email: "),j(b("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>t.email=r),type:"email",required:""},null,512),[[k,t.email]])]),Qt,b("label",null,[L(" Username: "),j(b("input",{"onUpdate:modelValue":n[1]||(n[1]=r=>t.username=r),type:"username",required:""},null,512),[[k,t.username]])]),Yt,b("label",null,[L(" Password: "),j(b("input",{"onUpdate:modelValue":n[2]||(n[2]=r=>t.password=r),type:"password",required:""},null,512),[[k,t.password]])]),Zt,b("label",null,[L(" Confirm Password: "),j(b("input",{"onUpdate:modelValue":n[3]||(n[3]=r=>t.passwordConfirmation=r),type:"password",required:""},null,512),[[k,t.passwordConfirmation]])]),en,tn],32)]))}});export{sn as default};
