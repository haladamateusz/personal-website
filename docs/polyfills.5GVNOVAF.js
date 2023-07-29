import{a as We,b as qe}from"./chunk-OC64LIZX.js";(function(e){let n=e.performance;function s(A){n&&n.mark&&n.mark(A)}function r(A,h){n&&n.measure&&n.measure(A,h)}s("Zone");let i=e.__Zone_symbol_prefix||"__zone_symbol__";function l(A){return i+A}let m=e[l("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(m||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone}let E=(()=>{let h=class{static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=h.current;for(;t.parent;)t=t.parent;return t}static get current(){return W.zone}static get currentTask(){return ne}static __load_patch(t,_,w=!1){if(oe.hasOwnProperty(t)){if(!w&&m)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){let L="Zone:"+t;s(L),oe[t]=_(e,h,Y),r(L,L)}}get parent(){return this._parent}get name(){return this._name}constructor(t,_){this._parent=t,this._name=_?_.name||"unnamed":"<root>",this._properties=_&&_.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,_)}get(t){let _=this.getZoneWith(t);if(_)return _._properties[t]}getZoneWith(t){let _=this;for(;_;){if(_._properties.hasOwnProperty(t))return _;_=_._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,_){if(typeof t!="function")throw new Error("Expecting function got: "+t);let w=this._zoneDelegate.intercept(this,t,_),L=this;return function(){return L.runGuarded(w,this,arguments,_)}}run(t,_,w,L){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,t,_,w,L)}finally{W=W.parent}}runGuarded(t,_=null,w,L){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,t,_,w,L)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{W=W.parent}}runTask(t,_,w){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(t.state===G&&(t.type===Q||t.type===P))return;let L=t.state!=y;L&&t._transitionTo(y,j),t.runCount++;let a=ne;ne=t,W={parent:W,zone:this};try{t.type==P&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,_,w)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{t.state!==G&&t.state!==d&&(t.type==Q||t.data&&t.data.isPeriodic?L&&t._transitionTo(j,y):(t.runCount=0,this._updateTaskCount(t,-1),L&&t._transitionTo(G,y,G))),W=W.parent,ne=a}}scheduleTask(t){if(t.zone&&t.zone!==this){let w=this;for(;w;){if(w===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);w=w.parent}}t._transitionTo(z,G);let _=[];t._zoneDelegates=_,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(w){throw t._transitionTo(d,z,G),this._zoneDelegate.handleError(this,w),w}return t._zoneDelegates===_&&this._updateTaskCount(t,1),t.state==z&&t._transitionTo(j,z),t}scheduleMicroTask(t,_,w,L){return this.scheduleTask(new p(I,t,_,w,L,void 0))}scheduleMacroTask(t,_,w,L,a){return this.scheduleTask(new p(P,t,_,w,L,a))}scheduleEventTask(t,_,w,L,a){return this.scheduleTask(new p(Q,t,_,w,L,a))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(!(t.state!==j&&t.state!==y)){t._transitionTo(V,j,y);try{this._zoneDelegate.cancelTask(this,t)}catch(_){throw t._transitionTo(d,V),this._zoneDelegate.handleError(this,_),_}return this._updateTaskCount(t,-1),t._transitionTo(G,V),t.runCount=0,t}}_updateTaskCount(t,_){let w=t._zoneDelegates;_==-1&&(t._zoneDelegates=null);for(let L=0;L<w.length;L++)w[L]._updateTaskCount(t.type,_)}},A=h;return(()=>{h.__symbol__=l})(),A})(),b={name:"",onHasTask:(A,h,c,t)=>A.hasTask(c,t),onScheduleTask:(A,h,c,t)=>A.scheduleTask(c,t),onInvokeTask:(A,h,c,t,_,w)=>A.invokeTask(c,t,_,w),onCancelTask:(A,h,c,t)=>A.cancelTask(c,t)};class v{constructor(h,c,t){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=h,this._parentDelegate=c,this._forkZS=t&&(t&&t.onFork?t:c._forkZS),this._forkDlgt=t&&(t.onFork?c:c._forkDlgt),this._forkCurrZone=t&&(t.onFork?this.zone:c._forkCurrZone),this._interceptZS=t&&(t.onIntercept?t:c._interceptZS),this._interceptDlgt=t&&(t.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=t&&(t.onIntercept?this.zone:c._interceptCurrZone),this._invokeZS=t&&(t.onInvoke?t:c._invokeZS),this._invokeDlgt=t&&(t.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=t&&(t.onInvoke?this.zone:c._invokeCurrZone),this._handleErrorZS=t&&(t.onHandleError?t:c._handleErrorZS),this._handleErrorDlgt=t&&(t.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=t&&(t.onHandleError?this.zone:c._handleErrorCurrZone),this._scheduleTaskZS=t&&(t.onScheduleTask?t:c._scheduleTaskZS),this._scheduleTaskDlgt=t&&(t.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=t&&(t.onScheduleTask?this.zone:c._scheduleTaskCurrZone),this._invokeTaskZS=t&&(t.onInvokeTask?t:c._invokeTaskZS),this._invokeTaskDlgt=t&&(t.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=t&&(t.onInvokeTask?this.zone:c._invokeTaskCurrZone),this._cancelTaskZS=t&&(t.onCancelTask?t:c._cancelTaskZS),this._cancelTaskDlgt=t&&(t.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=t&&(t.onCancelTask?this.zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let _=t&&t.onHasTask,w=c&&c._hasTaskZS;(_||w)&&(this._hasTaskZS=_?t:b,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=h,t.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this.zone),t.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this.zone),t.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this.zone))}fork(h,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,h,c):new E(h,c)}intercept(h,c,t){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,h,c,t):c}invoke(h,c,t,_,w){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,h,c,t,_,w):c.apply(t,_)}handleError(h,c){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,h,c):!0}scheduleTask(h,c){let t=c;if(this._scheduleTaskZS)this._hasTaskZS&&t._zoneDelegates.push(this._hasTaskDlgtOwner),t=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,h,c),t||(t=c);else if(c.scheduleFn)c.scheduleFn(c);else if(c.type==I)C(c);else throw new Error("Task is missing scheduleFn.");return t}invokeTask(h,c,t,_){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,h,c,t,_):c.callback.apply(t,_)}cancelTask(h,c){let t;if(this._cancelTaskZS)t=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,h,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");t=c.cancelFn(c)}return t}hasTask(h,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,h,c)}catch(t){this.handleError(h,t)}}_updateTaskCount(h,c){let t=this._taskCounts,_=t[h],w=t[h]=_+c;if(w<0)throw new Error("More tasks executed then were scheduled.");if(_==0||w==0){let L={microTask:t.microTask>0,macroTask:t.macroTask>0,eventTask:t.eventTask>0,change:h};this.hasTask(this.zone,L)}}}class p{constructor(h,c,t,_,w,L){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=h,this.source=c,this.data=_,this.scheduleFn=w,this.cancelFn=L,!t)throw new Error("callback is not defined");this.callback=t;let a=this;h===Q&&_&&_.useG?this.invoke=p.invokeTask:this.invoke=function(){return p.invokeTask.call(e,a,this,arguments)}}static invokeTask(h,c,t){h||(h=this),ee++;try{return h.runCount++,h.zone.runTask(h,c,t)}finally{ee==1&&T(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,z)}_transitionTo(h,c,t){if(this._state===c||this._state===t)this._state=h,h==G&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${h}', expecting state '${c}'${t?" or '"+t+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let M=l("setTimeout"),O=l("Promise"),N=l("then"),U=[],H=!1,K;function X(A){if(K||e[O]&&(K=e[O].resolve(0)),K){let h=K[N];h||(h=K.then),h.call(K,A)}else e[M](A,0)}function C(A){ee===0&&U.length===0&&X(T),A&&U.push(A)}function T(){if(!H){for(H=!0;U.length;){let A=U;U=[];for(let h=0;h<A.length;h++){let c=A[h];try{c.zone.runTask(c,null,null)}catch(t){Y.onUnhandledError(t)}}}Y.microtaskDrainDone(),H=!1}}let J={name:"NO ZONE"},G="notScheduled",z="scheduling",j="scheduled",y="running",V="canceling",d="unknown",I="microTask",P="macroTask",Q="eventTask",oe={},Y={symbol:l,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:C,showUncaughtError:()=>!E[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:X},W={parent:null,zone:new E(null,null)},ne=null,ee=0;function q(){}return r("Zone","Zone"),e.Zone=E})(typeof window<"u"&&window||typeof self<"u"&&self||global);var me=Object.getOwnPropertyDescriptor,Ne=Object.defineProperty,Ie=Object.getPrototypeOf,at=Object.create,lt=Array.prototype.slice,Me="addEventListener",Le="removeEventListener",Se=Zone.__symbol__(Me),De=Zone.__symbol__(Le),ie="true",ce="false",pe=Zone.__symbol__("");function Ae(e,n){return Zone.current.wrap(e,n)}function je(e,n,s,r,i){return Zone.current.scheduleMacroTask(e,n,s,r,i)}var x=Zone.__symbol__,Pe=typeof window<"u",Te=Pe?window:void 0,$=Pe&&Te||typeof self=="object"&&self||global,ut="removeAttribute";function He(e,n){for(let s=e.length-1;s>=0;s--)typeof e[s]=="function"&&(e[s]=Ae(e[s],n+"_"+s));return e}function ft(e,n){let s=e.constructor.name;for(let r=0;r<n.length;r++){let i=n[r],l=e[i];if(l){let m=me(e,i);if(!Je(m))continue;e[i]=(E=>{let b=function(){return E.apply(this,He(arguments,s+"."+i))};return ae(b,E),b})(l)}}}function Je(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var Ke=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in $)&&typeof $.process<"u"&&{}.toString.call($.process)==="[object process]",xe=!we&&!Ke&&!!(Pe&&Te.HTMLElement),Qe=typeof $.process<"u"&&{}.toString.call($.process)==="[object process]"&&!Ke&&!!(Pe&&Te.HTMLElement),be={},Xe=function(e){if(e=e||$.event,!e)return;let n=be[e.type];n||(n=be[e.type]=x("ON_PROPERTY"+e.type));let s=this||e.target||$,r=s[n],i;if(xe&&s===Te&&e.type==="error"){let l=e;i=r&&r.call(this,l.message,l.filename,l.lineno,l.colno,l.error),i===!0&&e.preventDefault()}else i=r&&r.apply(this,arguments),i!=null&&!i&&e.preventDefault();return i};function ze(e,n,s){let r=me(e,n);if(!r&&s&&me(s,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;let i=x("on"+n+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete r.writable,delete r.value;let l=r.get,m=r.set,E=n.slice(2),b=be[E];b||(b=be[E]=x("ON_PROPERTY"+E)),r.set=function(v){let p=this;if(!p&&e===$&&(p=$),!p)return;typeof p[b]=="function"&&p.removeEventListener(E,Xe),m&&m.call(p,null),p[b]=v,typeof v=="function"&&p.addEventListener(E,Xe,!1)},r.get=function(){let v=this;if(!v&&e===$&&(v=$),!v)return null;let p=v[b];if(p)return p;if(l){let M=l.call(this);if(M)return r.set.call(this,M),typeof v[ut]=="function"&&v.removeAttribute(n),M}return null},Ne(e,n,r),e[i]=!0}function et(e,n,s){if(n)for(let r=0;r<n.length;r++)ze(e,"on"+n[r],s);else{let r=[];for(let i in e)i.slice(0,2)=="on"&&r.push(i);for(let i=0;i<r.length;i++)ze(e,r[i],s)}}var re=x("originalInstance");function ge(e){let n=$[e];if(!n)return;$[x(e)]=n,$[e]=function(){let i=He(arguments,e);switch(i.length){case 0:this[re]=new n;break;case 1:this[re]=new n(i[0]);break;case 2:this[re]=new n(i[0],i[1]);break;case 3:this[re]=new n(i[0],i[1],i[2]);break;case 4:this[re]=new n(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},ae($[e],n);let s=new n(function(){}),r;for(r in s)e==="XMLHttpRequest"&&r==="responseBlob"||function(i){typeof s[i]=="function"?$[e].prototype[i]=function(){return this[re][i].apply(this[re],arguments)}:Ne($[e].prototype,i,{set:function(l){typeof l=="function"?(this[re][i]=Ae(l,e+"."+i),ae(this[re][i],l)):this[re][i]=l},get:function(){return this[re][i]}})}(r);for(r in n)r!=="prototype"&&n.hasOwnProperty(r)&&($[e][r]=n[r])}function le(e,n,s){let r=e;for(;r&&!r.hasOwnProperty(n);)r=Ie(r);!r&&e[n]&&(r=e);let i=x(n),l=null;if(r&&(!(l=r[i])||!r.hasOwnProperty(i))){l=r[i]=r[n];let m=r&&me(r,n);if(Je(m)){let E=s(l,i,n);r[n]=function(){return E(this,arguments)},ae(r[n],l)}}return l}function ht(e,n,s){let r=null;function i(l){let m=l.data;return m.args[m.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(m.target,m.args),l}r=le(e,n,l=>function(m,E){let b=s(m,E);return b.cbIdx>=0&&typeof E[b.cbIdx]=="function"?je(b.name,E[b.cbIdx],b,i):l.apply(m,E)})}function ae(e,n){e[x("OriginalDelegate")]=n}var Ye=!1,Ze=!1;function dt(){try{let e=Te.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function _t(){if(Ye)return Ze;Ye=!0;try{let e=Te.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Ze=!0)}catch{}return Ze}Zone.__load_patch("ZoneAwarePromise",(e,n,s)=>{let r=Object.getOwnPropertyDescriptor,i=Object.defineProperty;function l(a){if(a&&a.toString===Object.prototype.toString){let u=a.constructor&&a.constructor.name;return(u||"")+": "+JSON.stringify(a)}return a?a.toString():Object.prototype.toString.call(a)}let m=s.symbol,E=[],b=e[m("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]===!0,v=m("Promise"),p=m("then"),M="__creationTrace__";s.onUnhandledError=a=>{if(s.showUncaughtError()){let u=a&&a.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",a.zone.name,"; Task:",a.task&&a.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(a)}},s.microtaskDrainDone=()=>{for(;E.length;){let a=E.shift();try{a.zone.runGuarded(()=>{throw a.throwOriginal?a.rejection:a})}catch(u){N(u)}}};let O=m("unhandledPromiseRejectionHandler");function N(a){s.onUnhandledError(a);try{let u=n[O];typeof u=="function"&&u.call(this,a)}catch{}}function U(a){return a&&a.then}function H(a){return a}function K(a){return c.reject(a)}let X=m("state"),C=m("value"),T=m("finally"),J=m("parentPromiseValue"),G=m("parentPromiseState"),z="Promise.then",j=null,y=!0,V=!1,d=0;function I(a,u){return o=>{try{Y(a,u,o)}catch(f){Y(a,!1,f)}}}let P=function(){let a=!1;return function(o){return function(){a||(a=!0,o.apply(null,arguments))}}},Q="Promise resolved with itself",oe=m("currentTaskTrace");function Y(a,u,o){let f=P();if(a===o)throw new TypeError(Q);if(a[X]===j){let k=null;try{(typeof o=="object"||typeof o=="function")&&(k=o&&o.then)}catch(R){return f(()=>{Y(a,!1,R)})(),a}if(u!==V&&o instanceof c&&o.hasOwnProperty(X)&&o.hasOwnProperty(C)&&o[X]!==j)ne(o),Y(a,o[X],o[C]);else if(u!==V&&typeof k=="function")try{k.call(o,f(I(a,u)),f(I(a,!1)))}catch(R){f(()=>{Y(a,!1,R)})()}else{a[X]=u;let R=a[C];if(a[C]=o,a[T]===T&&u===y&&(a[X]=a[G],a[C]=a[J]),u===V&&o instanceof Error){let g=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];g&&i(o,oe,{configurable:!0,enumerable:!1,writable:!0,value:g})}for(let g=0;g<R.length;)ee(a,R[g++],R[g++],R[g++],R[g++]);if(R.length==0&&u==V){a[X]=d;let g=o;try{throw new Error("Uncaught (in promise): "+l(o)+(o&&o.stack?`
`+o.stack:""))}catch(S){g=S}b&&(g.throwOriginal=!0),g.rejection=o,g.promise=a,g.zone=n.current,g.task=n.currentTask,E.push(g),s.scheduleMicroTask()}}}return a}let W=m("rejectionHandledHandler");function ne(a){if(a[X]===d){try{let u=n[W];u&&typeof u=="function"&&u.call(this,{rejection:a[C],promise:a})}catch{}a[X]=V;for(let u=0;u<E.length;u++)a===E[u].promise&&E.splice(u,1)}}function ee(a,u,o,f,k){ne(a);let R=a[X],g=R?typeof f=="function"?f:H:typeof k=="function"?k:K;u.scheduleMicroTask(z,()=>{try{let S=a[C],D=!!o&&T===o[T];D&&(o[J]=S,o[G]=R);let Z=u.run(g,void 0,D&&g!==K&&g!==H?[]:[S]);Y(o,!0,Z)}catch(S){Y(o,!1,S)}},o)}let q="function ZoneAwarePromise() { [native code] }",A=function(){},h=e.AggregateError;class c{static toString(){return q}static resolve(u){return Y(new this(null),y,u)}static reject(u){return Y(new this(null),V,u)}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new h([],"All promises were rejected"));let o=[],f=0;try{for(let g of u)f++,o.push(c.resolve(g))}catch{return Promise.reject(new h([],"All promises were rejected"))}if(f===0)return Promise.reject(new h([],"All promises were rejected"));let k=!1,R=[];return new c((g,S)=>{for(let D=0;D<o.length;D++)o[D].then(Z=>{k||(k=!0,g(Z))},Z=>{R.push(Z),f--,f===0&&(k=!0,S(new h(R,"All promises were rejected")))})})}static race(u){let o,f,k=new this((S,D)=>{o=S,f=D});function R(S){o(S)}function g(S){f(S)}for(let S of u)U(S)||(S=this.resolve(S)),S.then(R,g);return k}static all(u){return c.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof c?this:c).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,o){let f,k,R=new this((Z,F)=>{f=Z,k=F}),g=2,S=0,D=[];for(let Z of u){U(Z)||(Z=this.resolve(Z));let F=S;try{Z.then(B=>{D[F]=o?o.thenCallback(B):B,g--,g===0&&f(D)},B=>{o?(D[F]=o.errorCallback(B),g--,g===0&&f(D)):k(B)})}catch(B){k(B)}g++,S++}return g-=2,g===0&&f(D),R}constructor(u){let o=this;if(!(o instanceof c))throw new Error("Must be an instanceof Promise.");o[X]=j,o[C]=[];try{let f=P();u&&u(f(I(o,y)),f(I(o,V)))}catch(f){Y(o,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return c}then(u,o){let f=this.constructor?.[Symbol.species];(!f||typeof f!="function")&&(f=this.constructor||c);let k=new f(A),R=n.current;return this[X]==j?this[C].push(R,k,u,o):ee(this,R,k,u,o),k}catch(u){return this.then(null,u)}finally(u){let o=this.constructor?.[Symbol.species];(!o||typeof o!="function")&&(o=c);let f=new o(A);f[T]=T;let k=n.current;return this[X]==j?this[C].push(k,f,u,u):ee(this,k,f,u,u),f}}c.resolve=c.resolve,c.reject=c.reject,c.race=c.race,c.all=c.all;let t=e[v]=e.Promise;e.Promise=c;let _=m("thenPatched");function w(a){let u=a.prototype,o=r(u,"then");if(o&&(o.writable===!1||!o.configurable))return;let f=u.then;u[p]=f,a.prototype.then=function(k,R){return new c((S,D)=>{f.call(this,S,D)}).then(k,R)},a[_]=!0}s.patchThen=w;function L(a){return function(u,o){let f=a.apply(u,o);if(f instanceof c)return f;let k=f.constructor;return k[_]||w(k),f}}return t&&(w(t),le(e,"fetch",a=>L(a))),Promise[n.__symbol__("uncaughtPromiseErrors")]=E,c});Zone.__load_patch("toString",e=>{let n=Function.prototype.toString,s=x("OriginalDelegate"),r=x("Promise"),i=x("Error"),l=function(){if(typeof this=="function"){let v=this[s];if(v)return typeof v=="function"?n.call(v):Object.prototype.toString.call(v);if(this===Promise){let p=e[r];if(p)return n.call(p)}if(this===Error){let p=e[i];if(p)return n.call(p)}}return n.call(this)};l[s]=n,Function.prototype.toString=l;let m=Object.prototype.toString,E="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?E:m.call(this)}});var _e=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{_e=!1}var Et={useG:!0},te={},tt={},nt=new RegExp("^"+pe+"(\\w+)(true|false)$"),rt=x("propagationStopped");function ot(e,n){let s=(n?n(e):e)+ce,r=(n?n(e):e)+ie,i=pe+s,l=pe+r;te[e]={},te[e][ce]=i,te[e][ie]=l}function Tt(e,n,s,r){let i=r&&r.add||Me,l=r&&r.rm||Le,m=r&&r.listeners||"eventListeners",E=r&&r.rmAll||"removeAllListeners",b=x(i),v="."+i+":",p="prependListener",M="."+p+":",O=function(C,T,J){if(C.isRemoved)return;let G=C.callback;typeof G=="object"&&G.handleEvent&&(C.callback=y=>G.handleEvent(y),C.originalDelegate=G);let z;try{C.invoke(C,T,[J])}catch(y){z=y}let j=C.options;if(j&&typeof j=="object"&&j.once){let y=C.originalDelegate?C.originalDelegate:C.callback;T[l].call(T,J.type,y,j)}return z};function N(C,T,J){if(T=T||e.event,!T)return;let G=C||T.target||e,z=G[te[T.type][J?ie:ce]];if(z){let j=[];if(z.length===1){let y=O(z[0],G,T);y&&j.push(y)}else{let y=z.slice();for(let V=0;V<y.length&&!(T&&T[rt]===!0);V++){let d=O(y[V],G,T);d&&j.push(d)}}if(j.length===1)throw j[0];for(let y=0;y<j.length;y++){let V=j[y];n.nativeScheduleMicroTask(()=>{throw V})}}}let U=function(C){return N(this,C,!1)},H=function(C){return N(this,C,!0)};function K(C,T){if(!C)return!1;let J=!0;T&&T.useG!==void 0&&(J=T.useG);let G=T&&T.vh,z=!0;T&&T.chkDup!==void 0&&(z=T.chkDup);let j=!1;T&&T.rt!==void 0&&(j=T.rt);let y=C;for(;y&&!y.hasOwnProperty(i);)y=Ie(y);if(!y&&C[i]&&(y=C),!y||y[b])return!1;let V=T&&T.eventNameToString,d={},I=y[b]=y[i],P=y[x(l)]=y[l],Q=y[x(m)]=y[m],oe=y[x(E)]=y[E],Y;T&&T.prepend&&(Y=y[x(T.prepend)]=y[T.prepend]);function W(o,f){return!_e&&typeof o=="object"&&o?!!o.capture:!_e||!f?o:typeof o=="boolean"?{capture:o,passive:!0}:o?typeof o=="object"&&o.passive!==!1?qe(We({},o),{passive:!0}):o:{passive:!0}}let ne=function(o){if(!d.isExisting)return I.call(d.target,d.eventName,d.capture?H:U,d.options)},ee=function(o){if(!o.isRemoved){let f=te[o.eventName],k;f&&(k=f[o.capture?ie:ce]);let R=k&&o.target[k];if(R){for(let g=0;g<R.length;g++)if(R[g]===o){R.splice(g,1),o.isRemoved=!0,R.length===0&&(o.allRemoved=!0,o.target[k]=null);break}}}if(o.allRemoved)return P.call(o.target,o.eventName,o.capture?H:U,o.options)},q=function(o){return I.call(d.target,d.eventName,o.invoke,d.options)},A=function(o){return Y.call(d.target,d.eventName,o.invoke,d.options)},h=function(o){return P.call(o.target,o.eventName,o.invoke,o.options)},c=J?ne:q,t=J?ee:h,_=function(o,f){let k=typeof f;return k==="function"&&o.callback===f||k==="object"&&o.originalDelegate===f},w=T&&T.diff?T.diff:_,L=Zone[x("UNPATCHED_EVENTS")],a=e[x("PASSIVE_EVENTS")],u=function(o,f,k,R,g=!1,S=!1){return function(){let D=this||e,Z=arguments[0];T&&T.transferEventName&&(Z=T.transferEventName(Z));let F=arguments[1];if(!F)return o.apply(this,arguments);if(we&&Z==="uncaughtException")return o.apply(this,arguments);let B=!1;if(typeof F!="function"){if(!F.handleEvent)return o.apply(this,arguments);B=!0}if(G&&!G(o,F,D,arguments))return;let ue=_e&&!!a&&a.indexOf(Z)!==-1,se=W(arguments[2],ue);if(L){for(let he=0;he<L.length;he++)if(Z===L[he])return ue?o.call(D,Z,F,se):o.apply(this,arguments)}let Re=se?typeof se=="boolean"?!0:se.capture:!1,Ge=se&&typeof se=="object"?se.once:!1,ct=Zone.current,Ce=te[Z];Ce||(ot(Z,V),Ce=te[Z]);let Ve=Ce[Re?ie:ce],de=D[Ve],Fe=!1;if(de){if(Fe=!0,z){for(let he=0;he<de.length;he++)if(w(de[he],F))return}}else de=D[Ve]=[];let ke,Be=D.constructor.name,Ue=tt[Be];Ue&&(ke=Ue[Z]),ke||(ke=Be+f+(V?V(Z):Z)),d.options=se,Ge&&(d.options.once=!1),d.target=D,d.capture=Re,d.eventName=Z,d.isExisting=Fe;let ye=J?Et:void 0;ye&&(ye.taskData=d);let fe=ct.scheduleEventTask(ke,F,ye,k,R);if(d.target=null,ye&&(ye.taskData=null),Ge&&(se.once=!0),!_e&&typeof fe.options=="boolean"||(fe.options=se),fe.target=D,fe.capture=Re,fe.eventName=Z,B&&(fe.originalDelegate=F),S?de.unshift(fe):de.push(fe),g)return D}};return y[i]=u(I,v,c,t,j),Y&&(y[p]=u(Y,M,A,t,j,!0)),y[l]=function(){let o=this||e,f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));let k=arguments[2],R=k?typeof k=="boolean"?!0:k.capture:!1,g=arguments[1];if(!g)return P.apply(this,arguments);if(G&&!G(P,g,o,arguments))return;let S=te[f],D;S&&(D=S[R?ie:ce]);let Z=D&&o[D];if(Z)for(let F=0;F<Z.length;F++){let B=Z[F];if(w(B,g)){if(Z.splice(F,1),B.isRemoved=!0,Z.length===0&&(B.allRemoved=!0,o[D]=null,typeof f=="string")){let ue=pe+"ON_PROPERTY"+f;o[ue]=null}return B.zone.cancelTask(B),j?o:void 0}}return P.apply(this,arguments)},y[m]=function(){let o=this||e,f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));let k=[],R=st(o,V?V(f):f);for(let g=0;g<R.length;g++){let S=R[g],D=S.originalDelegate?S.originalDelegate:S.callback;k.push(D)}return k},y[E]=function(){let o=this||e,f=arguments[0];if(f){T&&T.transferEventName&&(f=T.transferEventName(f));let k=te[f];if(k){let R=k[ce],g=k[ie],S=o[R],D=o[g];if(S){let Z=S.slice();for(let F=0;F<Z.length;F++){let B=Z[F],ue=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,f,ue,B.options)}}if(D){let Z=D.slice();for(let F=0;F<Z.length;F++){let B=Z[F],ue=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,f,ue,B.options)}}}}else{let k=Object.keys(o);for(let R=0;R<k.length;R++){let g=k[R],S=nt.exec(g),D=S&&S[1];D&&D!=="removeListener"&&this[E].call(this,D)}this[E].call(this,"removeListener")}if(j)return this},ae(y[i],I),ae(y[l],P),oe&&ae(y[E],oe),Q&&ae(y[m],Q),!0}let X=[];for(let C=0;C<s.length;C++)X[C]=K(s[C],r);return X}function st(e,n){if(!n){let l=[];for(let m in e){let E=nt.exec(m),b=E&&E[1];if(b&&(!n||b===n)){let v=e[m];if(v)for(let p=0;p<v.length;p++)l.push(v[p])}}return l}let s=te[n];s||(ot(n),s=te[n]);let r=e[s[ce]],i=e[s[ie]];return r?i?r.concat(i):r.slice():i?i.slice():[]}function yt(e,n){let s=e.Event;s&&s.prototype&&n.patchMethod(s.prototype,"stopImmediatePropagation",r=>function(i,l){i[rt]=!0,r&&r.apply(i,l)})}function mt(e,n,s,r,i){let l=Zone.__symbol__(r);if(n[l])return;let m=n[l]=n[r];n[r]=function(E,b,v){return b&&b.prototype&&i.forEach(function(p){let M=`${s}.${r}::`+p,O=b.prototype;try{if(O.hasOwnProperty(p)){let N=e.ObjectGetOwnPropertyDescriptor(O,p);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,M),e._redefineProperty(b.prototype,p,N)):O[p]&&(O[p]=e.wrapWithCurrentZone(O[p],M))}else O[p]&&(O[p]=e.wrapWithCurrentZone(O[p],M))}catch{}}),m.call(n,E,b,v)},e.attachOriginToPatched(n[r],m)}function it(e,n,s){if(!s||s.length===0)return n;let r=s.filter(l=>l.target===e);if(!r||r.length===0)return n;let i=r[0].ignoreProperties;return n.filter(l=>i.indexOf(l)===-1)}function $e(e,n,s,r){if(!e)return;let i=it(e,n,s);et(e,i,r)}function Oe(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function pt(e,n){if(we&&!Qe||Zone[e.symbol("patchEvents")])return;let s=n.__Zone_ignore_on_properties,r=[];if(xe){let i=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=dt()?[{target:i,ignoreProperties:["error"]}]:[];$e(i,Oe(i),s&&s.concat(l),Ie(i))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<r.length;i++){let l=n[r[i]];l&&l.prototype&&$e(l.prototype,Oe(l.prototype),s)}}Zone.__load_patch("util",(e,n,s)=>{let r=Oe(e);s.patchOnProperties=et,s.patchMethod=le,s.bindArguments=He,s.patchMacroTask=ht;let i=n.__symbol__("BLACK_LISTED_EVENTS"),l=n.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[i]=e[l]),e[i]&&(n[i]=n[l]=e[i]),s.patchEventPrototype=yt,s.patchEventTarget=Tt,s.isIEOrEdge=_t,s.ObjectDefineProperty=Ne,s.ObjectGetOwnPropertyDescriptor=me,s.ObjectCreate=at,s.ArraySlice=lt,s.patchClass=ge,s.wrapWithCurrentZone=Ae,s.filterProperties=it,s.attachOriginToPatched=ae,s._redefineProperty=Object.defineProperty,s.patchCallbacks=mt,s.getGlobalObjects=()=>({globalSources:tt,zoneSymbolEventNames:te,eventNames:r,isBrowser:xe,isMix:Qe,isNode:we,TRUE_STR:ie,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:pe,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Le})});function gt(e,n){n.patchMethod(e,"queueMicrotask",s=>function(r,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}var ve=x("zoneTask");function Ee(e,n,s,r){let i=null,l=null;n+=r,s+=r;let m={};function E(v){let p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=i.apply(e,p.args),v}function b(v){return l.call(e,v.data.handleId)}i=le(e,n,v=>function(p,M){if(typeof M[0]=="function"){let O={isPeriodic:r==="Interval",delay:r==="Timeout"||r==="Interval"?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{O.isPeriodic||(typeof O.handleId=="number"?delete m[O.handleId]:O.handleId&&(O.handleId[ve]=null))}};let U=je(n,M[0],O,E,b);if(!U)return U;let H=U.data.handleId;return typeof H=="number"?m[H]=U:H&&(H[ve]=U),H&&H.ref&&H.unref&&typeof H.ref=="function"&&typeof H.unref=="function"&&(U.ref=H.ref.bind(H),U.unref=H.unref.bind(H)),typeof H=="number"||H?H:U}else return v.apply(e,M)}),l=le(e,s,v=>function(p,M){let O=M[0],N;typeof O=="number"?N=m[O]:(N=O&&O[ve],N||(N=O)),N&&typeof N.type=="string"?N.state!=="notScheduled"&&(N.cancelFn&&N.data.isPeriodic||N.runCount===0)&&(typeof O=="number"?delete m[O]:O&&(O[ve]=null),N.zone.cancelTask(N)):v.apply(e,M)})}function kt(e,n){let{isBrowser:s,isMix:r}=n.getGlobalObjects();if(!s&&!r||!e.customElements||!("customElements"in e))return;let i=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"];n.patchCallbacks(n,e.customElements,"customElements","define",i)}function vt(e,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:s,zoneSymbolEventNames:r,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:m}=n.getGlobalObjects();for(let b=0;b<s.length;b++){let v=s[b],p=v+l,M=v+i,O=m+p,N=m+M;r[v]={},r[v][l]=O,r[v][i]=N}let E=e.EventTarget;if(!(!E||!E.prototype))return n.patchEventTarget(e,n,[E&&E.prototype]),!0}function bt(e,n){n.patchEventPrototype(e,n)}Zone.__load_patch("legacy",e=>{let n=e[Zone.__symbol__("legacyPatch")];n&&n()});Zone.__load_patch("timers",e=>{let n="set",s="clear";Ee(e,n,s,"Timeout"),Ee(e,n,s,"Interval"),Ee(e,n,s,"Immediate")});Zone.__load_patch("requestAnimationFrame",e=>{Ee(e,"request","cancel","AnimationFrame"),Ee(e,"mozRequest","mozCancel","AnimationFrame"),Ee(e,"webkitRequest","webkitCancel","AnimationFrame")});Zone.__load_patch("blocking",(e,n)=>{let s=["alert","prompt","confirm"];for(let r=0;r<s.length;r++){let i=s[r];le(e,i,(l,m,E)=>function(b,v){return n.current.run(l,e,v,E)})}});Zone.__load_patch("EventTarget",(e,n,s)=>{bt(e,s),vt(e,s);let r=e.XMLHttpRequestEventTarget;r&&r.prototype&&s.patchEventTarget(e,s,[r.prototype])});Zone.__load_patch("MutationObserver",(e,n,s)=>{ge("MutationObserver"),ge("WebKitMutationObserver")});Zone.__load_patch("IntersectionObserver",(e,n,s)=>{ge("IntersectionObserver")});Zone.__load_patch("FileReader",(e,n,s)=>{ge("FileReader")});Zone.__load_patch("on_property",(e,n,s)=>{pt(s,e)});Zone.__load_patch("customElements",(e,n,s)=>{kt(e,s)});Zone.__load_patch("XHR",(e,n)=>{b(e);let s=x("xhrTask"),r=x("xhrSync"),i=x("xhrListener"),l=x("xhrScheduled"),m=x("xhrURL"),E=x("xhrErrorBeforeScheduled");function b(v){let p=v.XMLHttpRequest;if(!p)return;let M=p.prototype;function O(d){return d[s]}let N=M[Se],U=M[De];if(!N){let d=v.XMLHttpRequestEventTarget;if(d){let I=d.prototype;N=I[Se],U=I[De]}}let H="readystatechange",K="scheduled";function X(d){let I=d.data,P=I.target;P[l]=!1,P[E]=!1;let Q=P[i];N||(N=P[Se],U=P[De]),Q&&U.call(P,H,Q);let oe=P[i]=()=>{if(P.readyState===P.DONE)if(!I.aborted&&P[l]&&d.state===K){let W=P[n.__symbol__("loadfalse")];if(P.status!==0&&W&&W.length>0){let ne=d.invoke;d.invoke=function(){let ee=P[n.__symbol__("loadfalse")];for(let q=0;q<ee.length;q++)ee[q]===d&&ee.splice(q,1);!I.aborted&&d.state===K&&ne.call(d)},W.push(d)}else d.invoke()}else!I.aborted&&P[l]===!1&&(P[E]=!0)};return N.call(P,H,oe),P[s]||(P[s]=d),y.apply(P,I.args),P[l]=!0,d}function C(){}function T(d){let I=d.data;return I.aborted=!0,V.apply(I.target,I.args)}let J=le(M,"open",()=>function(d,I){return d[r]=I[2]==!1,d[m]=I[1],J.apply(d,I)}),G="XMLHttpRequest.send",z=x("fetchTaskAborting"),j=x("fetchTaskScheduling"),y=le(M,"send",()=>function(d,I){if(n.current[j]===!0||d[r])return y.apply(d,I);{let P={target:d,url:d[m],isPeriodic:!1,args:I,aborted:!1},Q=je(G,C,P,X,T);d&&d[E]===!0&&!P.aborted&&Q.state===K&&Q.invoke()}}),V=le(M,"abort",()=>function(d,I){let P=O(d);if(P&&typeof P.type=="string"){if(P.cancelFn==null||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(n.current[z]===!0)return V.apply(d,I)})}});Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&ft(e.navigator.geolocation,["getCurrentPosition","watchPosition"])});Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function s(r){return function(i){st(e,r).forEach(m=>{let E=e.PromiseRejectionEvent;if(E){let b=new E(r,{promise:i.promise,reason:i.rejection});m.invoke(b)}})}}e.PromiseRejectionEvent&&(n[x("unhandledPromiseRejectionHandler")]=s("unhandledrejection"),n[x("rejectionHandledHandler")]=s("rejectionhandled"))});Zone.__load_patch("queueMicrotask",(e,n,s)=>{gt(e,s)});
