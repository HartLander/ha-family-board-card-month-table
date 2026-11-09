function e(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new r(i,e,a)},o=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:_}=Object,m=globalThis,u=m.trustedTypes,g=u?u.emptyScript:"",f=m.reactiveElementPolyfillSupport,b=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&d(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const r=a?.call(this);n?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...c(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{if(i)e.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of a){const a=document.createElement("style"),n=t.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=i.cssText,e.appendChild(a)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a;const r=n.fromAttribute(t,e.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,t,i,a=!1,n){if(void 0!==e){const r=this.constructor;if(!1===a&&(n=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??y)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,f?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=e=>e,M=$.trustedTypes,D=M?M.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+z,S=`<${A}>`,C=document,P=()=>C.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,F="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,I=/>/g,R=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,H=/"/g,U=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),q=new WeakMap,V=C.createTreeWalker(C,129);function Z(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==D?D.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,a=[];let n,r=2===t?"<svg>":3===t?"<math>":"",s=N;for(let t=0;t<i;t++){const i=e[t];let o,l,d=-1,h=0;for(;h<i.length&&(s.lastIndex=h,l=s.exec(i),null!==l);)h=s.lastIndex,s===N?"!--"===l[1]?s=L:void 0!==l[1]?s=I:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=R):void 0!==l[3]&&(s=R):s===R?">"===l[0]?(s=n??N,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?R:'"'===l[3]?H:B):s===H||s===B?s=R:s===L||s===I?s=N:(s=R,n=void 0);const c=s===R&&e[t+1].startsWith("/>")?" ":"";r+=s===N?i+S:d>=0?(a.push(o),i.slice(0,d)+T+i.slice(d)+z+c):i+z+(-2===d?t:c)}return[Z(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class G{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,r=0;const s=e.length-1,o=this.parts,[l,d]=J(e,t);if(this.el=G.createElement(l,i),V.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=V.nextNode())&&o.length<s;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(T)){const t=d[r++],i=a.getAttribute(e).split(z),s=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?te:"?"===s[1]?ie:"@"===s[1]?ae:ee}),a.removeAttribute(e)}else e.startsWith(z)&&(o.push({type:6,index:n}),a.removeAttribute(e));if(U.test(a.tagName)){const e=a.textContent.split(z),t=e.length-1;if(t>0){a.textContent=M?M.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],P()),V.nextNode(),o.push({type:2,index:++n});a.append(e[t],P())}}}else if(8===a.nodeType)if(a.data===A)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(z,e+1));)o.push({type:7,index:n}),e+=z.length-1}n++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,a){if(t===W)return t;let n=void 0!==a?i._$Co?.[a]:i._$Cl;const r=E(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(t=Y(e,n._$AS(e,t.values),n,a)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??C).importNode(t,!0);V.currentNode=a;let n=V.nextNode(),r=0,s=0,o=i[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new Q(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new ne(n,this,e)),this._$AV.push(t),o=i[++s]}r!==o?.index&&(n=V.nextNode(),r++)}return V.currentNode=C,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),E(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new X(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new G(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(e,t=this,i,a){const n=this.strings;let r=!1;if(void 0===n)e=Y(this,e,t,0),r=!E(e)||e!==this._$AH&&e!==W,r&&(this._$AH=e);else{const a=e;let s,o;for(e=n[0],s=0;s<n.length-1;s++)o=Y(this,a[i+s],t,s),o===W&&(o=this._$AH[s]),r||=!E(o)||o!==this._$AH[s],o===K?e=K:e!==K&&(e+=(o??"")+n[s+1]),this._$AH[s]=o}r&&!a&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class ae extends ee{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??K)===W)return;const i=this._$AH,a=e===K&&i!==K||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==K&&(i===K||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const re=$.litHtmlPolyfillSupport;re?.(G,Q),($.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;let oe=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let n=a._$litPart$;if(void 0===n){const e=i?.renderBefore??null;a._$litPart$=n=new Q(t.insertBefore(P(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};oe._$litElement$=!0,oe.finalized=!0,se.litElementHydrateSupport?.({LitElement:oe});const le=se.litElementPolyfillSupport;le?.({LitElement:oe}),(se.litElementVersions??=[]).push("4.2.2");const de=1;let he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const ce="important",pe=" !"+ce,_e=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends he{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const a=e[i];return null==a?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const a=t[e];if(null!=a){this.ft.add(e);const t="string"==typeof a&&a.endsWith(pe);e.includes("-")||t?i.setProperty(e,t?a.slice(0,-11):a,t?ce:""):i[e]=a}}return W}}),me={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ue=(e=me,t,i)=>{const{kind:a,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,n,e,!0,i)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const n=this[a];t.call(this,i),this.requestUpdate(a,n,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};function ge(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function fe(e){return ge({...e,state:!0,attribute:!1})}function be(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i}function ve(e){return 60*e.getHours()+e.getMinutes()}function ye(e,t){const i=new Date(e);i.setHours(0,0,0,0);const a=new Date(t);return a.setHours(0,0,0,0),Math.round((a.getTime()-i.getTime())/864e5)}function we(e,t,i,a){const n=!e?.start?.dateTime;let r,s;if(n){if(!e?.start?.date)return null;r=new Date(`${e.start.date}T00:00:00`),s=e.end?.date?new Date(`${e.end.date}T00:00:00`):be(r,1)}else r=new Date(e.start.dateTime),s=new Date(e.end?.dateTime??e.start.dateTime);return isNaN(r.getTime())||isNaN(s.getTime())?null:(s.getTime()<=r.getTime()&&(s=n?be(r,1):new Date(r.getTime()+6e4)),{personIdx:t,calendar:i,uid:e.uid,recurrence_id:e.recurrence_id,rrule:e.rrule,summary:e.summary||"Termin",description:e.description,location:e.location,allDay:n,start:r,end:s,color:a,tentative:!1})}function xe(e,t,i){const a=[],n=new Date(e.start);n.setHours(0,0,0,0);const r=new Date(e.end.getTime()-1),s=Math.max(1,ye(n,r)+1);for(let r=0;r<i;r++){const i=be(t,r),o=be(i,1),l=Math.max(e.start.getTime(),i.getTime()),d=Math.min(e.end.getTime(),o.getTime());if(d<=l)continue;const h=e.allDay||l<=i.getTime()?0:ve(new Date(l)),c=e.allDay||d>=o.getTime()?1440:ve(new Date(d)),p=s>1?ye(n,i)+1:void 0;a.push({part:p,parts:s>1?s:void 0,ref:e,personIdx:e.personIdx,day:r,startMin:h,endMin:Math.min(c,1440),title:e.summary,location:e.location,allDay:e.allDay,color:e.color,continuesBefore:e.start.getTime()<i.getTime(),continuesAfter:e.end.getTime()>o.getTime()})}return a}function $e(e){const t=[...e].sort((e,t)=>e.startMin-t.startMin||e.endMin-t.endMin),i=[];let a=[],n=-1,r=0;const s=[],o=()=>{if(a.length){const e=Math.max(...a.map(e=>e.col))+1;a.forEach(t=>{t.cols=e,t.cluster=r;let i=e;for(const e of a)e!==t&&e.col>t.col&&e.startMin<t.endMin&&e.endMin>t.startMin&&(i=Math.min(i,e.col));t.span=Math.max(1,i-t.col)}),r++}a=[]};for(const e of t){a.length&&e.startMin>=n&&(o(),s.length=0);let t=s.findIndex(t=>t<=e.startMin);-1===t?(t=s.length,s.push(e.endMin)):s[t]=e.endMin;const l={...e,col:t,cols:1,span:1,cluster:r};a.push(l),i.push(l),n=1===a.length?e.endMin:Math.max(n,e.endMin)}return o(),i}const ke={board_title:"Family board",day:"Day",week:"Week",month:"Month",month_table:"Month table",agenda:"Agenda",timeline:"Timeline",now:"Now",family:"Family",all_day:"all-day",this_week:"This week",prev_week:"Previous week",next_week:"Next week",prev_month:"Previous month",next_month:"Next month",today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday",open_map:"Map",status_home:"home",status_away:"away",add_event:"Add event",new_event:"New event",event:"Event",edit_event:"Edit event",close:"Close",field_title:"Title",field_all_day:"All-day",field_start:"Start",field_end:"End",field_location:"Location",field_note:"Note",field_calendar:"Calendar",recurring:"Recurring event",recur_this:"This event only",recur_future:"This and following",read_only:"This calendar is read-only.",delete:"Delete",cancel:"Cancel",save:"Save",err_invalid:"Please enter valid times.",err_end_before:"End is before start.",err_end_equal:"End must be after start.",save_failed:"Saving failed.",delete_failed:"Deleting failed.",default_title:"Event",load_error:"Calendar could not be loaded.",err_no_persons:"Please configure at least one person under 'persons'.",no_events:"No events.",more_events:"more events",focus_next:"next",focus_free:"free",until:"until",alert_conflict:"two events at once",alert_gap:"gap between events",alert_empty:"nobody home",task_due:"task due",task_overdue:"task overdue"},Me={en:ke,de:{board_title:"Familienplan",day:"Tag",week:"Woche",month:"Monat",month_table:"Monatstabelle",agenda:"Agenda",timeline:"Zeitstrahl",now:"Jetzt",family:"Familie",all_day:"ganztägig",this_week:"Diese Woche",prev_week:"Vorherige Woche",next_week:"Nächste Woche",prev_month:"Vorheriger Monat",next_month:"Nächster Monat",today:"Heute",tomorrow:"Morgen",yesterday:"Gestern",open_map:"Karte",status_home:"zuhause",status_away:"unterwegs",add_event:"Termin hinzufügen",new_event:"Neuer Termin",event:"Termin",edit_event:"Termin bearbeiten",close:"Schließen",field_title:"Titel",field_all_day:"Ganztägig",field_start:"Start",field_end:"Ende",field_location:"Ort",field_note:"Notiz",field_calendar:"Kalender",recurring:"Wiederkehrender Termin",recur_this:"Nur dieser Termin",recur_future:"Dieser und folgende",read_only:"Dieser Kalender ist schreibgeschützt.",delete:"Löschen",cancel:"Abbrechen",save:"Speichern",err_invalid:"Bitte gültige Zeiten angeben.",err_end_before:"Ende liegt vor dem Start.",err_end_equal:"Ende muss nach dem Start liegen.",save_failed:"Speichern fehlgeschlagen.",delete_failed:"Löschen fehlgeschlagen.",default_title:"Termin",load_error:"Kalender konnte nicht geladen werden.",err_no_persons:"Bitte mindestens eine Person unter 'persons' konfigurieren.",no_events:"Keine Termine.",more_events:"weitere Termine",focus_next:"als Nächstes",focus_free:"frei",until:"bis",alert_conflict:"zwei Termine gleichzeitig",alert_gap:"Lücke zwischen Terminen",alert_empty:"niemand zuhause",task_due:"Aufgabe fällig",task_overdue:"Aufgabe überfällig"}};function De(e){return(e?.locale?.language||navigator?.language||"en").toLowerCase().split("-")[0]}function Te(e,t){const i=De(e);return Me[i]?.[t]??ke[t]??t}function ze(e){return e?.locale?.language||navigator?.language||"en"}function Ae(e){const t=e?.locale?.time_format;if("12"===t)return!0;if("24"===t)return!1;const i=new Intl.DateTimeFormat(ze(e),{hour:"numeric"}).format(new Date(2020,0,1,13));return/\s?[AaPp]\.?[Mm]\.?/.test(i)||/1\s?PM/i.test(i)}function Se(e,t){return new Intl.DateTimeFormat(ze(e),{hour:Ae(e)?"numeric":"2-digit",minute:"2-digit",hour12:Ae(e)}).format(t)}function Ce(e,t){const i=new Date(2020,0,1,0,0,0,0);return i.setMinutes(t),Se(e,i)}function Pe(e,t,i=1){const a=new Intl.DateTimeFormat(ze(e),{weekday:t}),n=Array.from({length:7},(e,t)=>{const i=a.format(new Date(2024,0,7+t));return i.charAt(0).toUpperCase()+i.slice(1)});return Array.from({length:7},(e,t)=>n[(i+t)%7])}function Ee(e,t){const i=t.getTime()-Date.now();if(i<=0)return"";const a=new Intl.RelativeTimeFormat(ze(e),{numeric:"always",style:"short"}),n=Math.round(i/6e4);if(n<60)return a.format(Math.max(1,n),"minute");const r=Math.round(n/60);return r<24?a.format(r,"hour"):a.format(Math.round(r/24),"day")}const Oe=["now","day","timeline","week","month","month_table","agenda"],Fe=["day","timeline","week","month","agenda"],Ne=["#8B7CF6","#34D399","#FBBF24","#FB7185","#22D3EE","#C084FC","#A3E635","#FB923C","#F472B6","#60A5FA"],Le={"clear-night":"weather-night",cloudy:"weather-cloudy",fog:"weather-fog",hail:"weather-hail",lightning:"weather-lightning","lightning-rainy":"weather-lightning-rainy",partlycloudy:"weather-partly-cloudy",pouring:"weather-pouring",rainy:"weather-rainy",snowy:"weather-snowy","snowy-rainy":"weather-snowy-rainy",sunny:"weather-sunny",windy:"weather-windy","windy-variant":"weather-windy-variant",exceptional:"weather-cloudy-alert"},Ie=[[/zahnarzt|dentist|kieferortho/i,"🦷"],[/arzt|doctor|doktor|klinik|hospital|therapie|physio|impf/i,"🩺"],[/geburtstag|geb\.|birthday|jubiläum|jubilaeum|anniversary/i,"🎂"],[/schwimm|swim|hallenbad|baden/i,"🏊"],[/fußball|fussball|soccer|football|training/i,"⚽"],[/sport|gym|fitness|turnen|joggen|laufen|workout/i,"🏃"],[/reit|pferd|pony|horse/i,"🐴"],[/tanz|ballett|dance/i,"🩰"],[/klavier|gitarre|musik|music|chor|singen|band|orchester|instrument/i,"🎵"],[/schule|unterricht|klasse|klassenverbund|school|nachhilfe|lernen|prüfung|pruefung|klausur/i,"🎒"],[/kita|kindergarten|krippe|hort/i,"🧸"],[/frühstück|fruehstueck|breakfast/i,"🥐"],[/mittag|lunch|abendessen|dinner|essen|kochen|restaurant|brunch/i,"🍽️"],[/kaffee|coffee|café|cafe/i,"☕"],[/urlaub|ferien|vacation|holiday|reise|trip|strand|beach/i,"🏖️"],[/flug|flight|airport|flughafen/i,"✈️"],[/zug|bahn|train|abfahrt|ankunft/i,"🚆"],[/kino|film|movie|cinema/i,"🎬"],[/party|feier|fest|celebration/i,"🎉"],[/einkauf|shopping|supermarkt|einkaufen|besorgung/i,"🛒"],[/putz|reinig|cleaning|wäsche|waesche|müll|muell|garbage|trash/i,"🧹"],[/schlaf|nap|ruhezeit|mittagsschlaf/i,"😴"],[/spiel|freispiel|play|angebotszeit/i,"🧸"],[/meeting|besprechung|termin|call|konferenz|conference|office|büro|buero|arbeit|work/i,"💼"],[/friseur|haircut|hairdresser|frisör|frisoer/i,"💇"],[/kirche|church|gottesdienst|messe|religion/i,"⛪"],[/pause|hofpause|break/i,"⏸️"]],Re=/\p{Extended_Pictographic}/u,Be=e=>new Date(e.length<=10?`${e}T23:59:59`:e),He=e=>String(e).padStart(2,"0"),Ue=e=>new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().slice(0,16),je=e=>new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().slice(0,10),We=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t},Ke=(e,t)=>e.color||Ne[t%Ne.length],qe=e=>{let t=0;for(let i=0;i<e.length;i++)t=31*t+e.charCodeAt(i)>>>0;return Ne[t%Ne.length]};function Ve(e){const t=e?.states??{},i=Object.keys(t).filter(e=>e.startsWith("calendar.")),a=e=>e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,""),n=[];for(const e of Object.keys(t)){if(!e.startsWith("person."))continue;const r=e.slice(7),s=t[e].attributes?.friendly_name??r,o=a(r),l=a(s),d=i.filter(e=>{const i=a(e.slice(9)),n=a(t[e].attributes?.friendly_name??"");return i===o||i.includes(o)||l.length>2&&(i.includes(l)||n.includes(l))});if(n.push({name:s,person:e,calendar:1===d.length?d[0]:d.length?d:""}),n.length>=10)break}return n}class Ze extends oe{constructor(){super(...arguments),this._events=[],this._view="day",this._day=((new Date).getDay()+6)%7,this._weekOffset=0,this._monthOffset=0,this._loadError=!1,this._loading=!1,this._fitPx=0,this._hiddenP=[],this._dragStartY=0,this._dragStartX=0,this._dragAxis="y",this._dragPx=1,this._dragGrid=30,this._suppressClick=!1,this._raw=[],this._family=[],this._fetchedKey="",this._tasks={},this._taskSig={},this._forecast={},this._weatherKey="",this._scrolledKey="",this._lastInteract=Date.now(),this._onInteract=()=>{this._lastInteract=Date.now()},this._onVisible=()=>{"hidden"!==document.visibilityState&&this.hass&&this._config&&this._refetch()},this._onKeyDown=e=>{"Escape"===e.key&&this._dialog?(e.stopPropagation(),this._closeDialog()):"Tab"===e.key&&this._dialog&&this._trapTab(e)},this._onLayoutResize=()=>this._measureFit(),this._prevWeek=()=>{this._weekOffset-=1},this._nextWeek=()=>{this._weekOffset+=1},this._thisWeek=()=>{const e=this._homePosition();this._weekOffset=e.week,this._day=e.day},this._prevMonth=()=>{this._monthOffset-=1},this._nextMonth=()=>{this._monthOffset+=1},this._thisMonth=()=>{this._monthOffset=0},this._onDragMove=e=>{if(!this._drag)return;e.preventDefault();const t="x"===this._dragAxis?e.clientX-this._dragStartX:e.clientY-this._dragStartY,i=this._drag.moved||Math.abs(t)>4;this._drag={...this._drag,deltaMin:t/this._dragPx,moved:i}},this._onDragUp=()=>{window.removeEventListener("pointermove",this._onDragMove),window.removeEventListener("pointerup",this._onDragUp);const e=this._drag;e&&(e.moved?(this._suppressClick=!0,this._commitDrag(e)):this._drag=void 0)}}static async getConfigElement(){return await Promise.resolve().then(function(){return rt}),document.createElement("ha-family-board-card-month-table-editor")}static getStubConfig(e){const t=e?Ve(e):[];return{type:"custom:family-board-card-month-table",view:"day",time_grid:30,start_hour:6,end_hour:22,show_weekends:!0,show_now_line:!0,color_by:"person",persons:t.length?t:[{name:"Person 1",person:"",calendar:""},{name:"Person 2",person:"",calendar:""}]}}setConfig(e){if(!e.persons||!Array.isArray(e.persons))throw new Error(this._t("err_no_persons"));this._config=e;const t=this._enabledViews,i=e.view??"day";this._view=t.includes(i)?i:t[0];const a=this._homePosition();this._day=a.day,this._weekOffset=a.week,this._hiddenP=e.persons.map((e,t)=>e.hidden?t:-1).filter(e=>e>=0);const n=Number(e.col_min_width);Number.isFinite(n)&&n>=60?this.style.setProperty("--fb-col-min",`${Math.min(n,400)}px`):this.style.removeProperty("--fb-col-min"),this.toggleAttribute("compact",!0===e.compact),this.toggleAttribute("slim",!0===e.slim_header),this.toggleAttribute("nav-bottom","bottom"===e.navigation_position),this.toggleAttribute("spread-nav","spread"===e.navigation_layout),this.toggleAttribute("equal-views",!0===e.equal_view_buttons);const r=Number(e.event_size);Number.isFinite(r)&&r>=8&&r<=20?(this.style.setProperty("--fb-event-size",`${r}px`),this.style.setProperty("--fb-chip-size",`${Math.max(r-1,8)}px`)):(this.style.removeProperty("--fb-event-size"),this.style.removeProperty("--fb-chip-size"));const s=Number(e.radius);Number.isFinite(s)&&s>=0&&s<=20?(this.style.setProperty("--fb-radius",`${s}px`),this.style.setProperty("--fb-radius-sm",`${Math.max(s-2,2)}px`)):(this.style.removeProperty("--fb-radius"),this.style.removeProperty("--fb-radius-sm"));for(const[t,i,a,n]of[["month_table_font_size","--fb-month-font-size",10,22],["month_table_row_height","--fb-month-row-height",16,96],["month_table_row_padding","--fb-month-row-padding",0,12],["month_table_event_gap","--fb-month-event-gap",0,12],["controls_height","--fb-control-height",28,80],["controls_font_size","--fb-control-font",10,24],["navigation_arrow_width","--fb-arrow-width",28,120],["month_table_marker_font_size","--fb-marker-font",8,22],["month_table_date_width","--fb-date-width",92,280]]){const r=e[t];"number"==typeof r&&Number.isFinite(r)?this.style.setProperty(i,`${Math.max(a,Math.min(r,n))}px`):this.style.removeProperty(i)}const o=Number(e.past_opacity);Number.isFinite(o)&&o>=10&&o<=100?this.style.setProperty("--fb-past-opacity",""+o/100):this.style.removeProperty("--fb-past-opacity"),this.isConnected&&this._startTimer()}get _enabledViews(){const e=this._config?.views,t=Array.isArray(e)?Oe.filter(t=>e.includes(t)):[];if(t.length)return t;const i=this._config?.view;return"now"===i?["now",...Fe]:"month_table"===i?[...Fe.slice(0,4),"month_table","agenda"]:[...Fe]}get _firstDayJs(){return"sunday"===this._config?.first_day?0:1}_todayIndex(){return((new Date).getDay()-this._firstDayJs+7)%7}_weekStart(e){const t=We(e);return t.setDate(t.getDate()-(t.getDay()-this._firstDayJs+7)%7),t}_homePosition(){const e=Math.trunc(Number(this._config?.day_offset??0));if(!Number.isFinite(e)||0===e)return{day:this._todayIndex(),week:0};const t=We(new Date),i=be(t,e),a=ye(this._weekStart(t),this._weekStart(i))/7;return{day:(i.getDay()-this._firstDayJs+7)%7,week:a}}getCardSize(){return 12}_scheduleTick(){const e=6e4-Date.now()%6e4+50;this._tick=window.setTimeout(()=>{this._kioskReturn(),this.requestUpdate(),this._scheduleTick()},e)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._onLayoutResize),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("visibilitychange",this._onVisible),window.addEventListener("focus",this._onVisible),this._startTimer(),this.addEventListener("pointerdown",this._onInteract),this._scheduleTick(),"undefined"!=typeof ResizeObserver&&(this._ro=new ResizeObserver(()=>requestAnimationFrame(()=>this._measureFit())),this._ro.observe(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onLayoutResize),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("visibilitychange",this._onVisible),window.removeEventListener("focus",this._onVisible),this.removeEventListener("pointerdown",this._onInteract),this._stopTimer(),this._tick&&(clearTimeout(this._tick),this._tick=void 0),this._ro?.disconnect(),this._ro=void 0,window.removeEventListener("pointermove",this._onDragMove),window.removeEventListener("pointerup",this._onDragUp)}get _progressOn(){return!1!==this._config?.show_progress}_isCurrent(e){const t=Date.now();return e.ref.start.getTime()<=t&&t<e.ref.end.getTime()}_progressPct(e){const t=e.ref.start.getTime(),i=e.ref.end.getTime();return i<=t?0:Math.min(100,Math.max(0,(Date.now()-t)/(i-t)*100))}_kioskReturn(){const e=Number(this._config?.auto_return??0);if(!Number.isFinite(e)||e<=0)return;if(Date.now()-this._lastInteract<6e4*e)return;if(this._dialog)return;const t=this._config.view??"day",i=this._enabledViews.includes(t)?t:this._enabledViews[0];this._view!==i&&(this._view=i);const a=this._homePosition();this._weekOffset!==a.week&&(this._weekOffset=a.week),0!==this._monthOffset&&(this._monthOffset=0),this._hiddenP.length&&(this._hiddenP=[]),this._day=a.day}_trapTab(e){const t=this.renderRoot,i=t.querySelector(".dialog");if(!i)return;const a=[...i.querySelectorAll('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])')].filter(e=>!e.disabled&&null!==e.offsetParent);if(!a.length)return;const n=a[0],r=a[a.length-1],s=t.activeElement,o=!!s&&i.contains(s);!e.shiftKey||o&&s!==n&&s!==i?e.shiftKey||o&&s!==r||(e.preventDefault(),n.focus()):(e.preventDefault(),r.focus())}_startTimer(){this._stopTimer();const e=this._config?.refresh_interval??300;e>0&&(this._timer=window.setInterval(()=>this._refetch(),1e3*e))}_stopTimer(){this._timer&&(clearInterval(this._timer),this._timer=void 0)}updated(e){(e.has("hass")||e.has("_config"))&&this.hass&&this._config?(this._maybeFetch(),this._maybeFetchWeather(),this._maybeFetchTasks()):(e.has("_view")||e.has("_weekOffset")||e.has("_monthOffset"))&&this.hass&&this._config&&this._maybeFetch(),e.has("_dialog")&&this._manageDialogFocus(e.get("_dialog")),this._measureFit(),this._syncHeaderOffset(),this._maybeScrollToNow()}_syncHeaderOffset(){const e=this.renderRoot?.querySelector(".board"),t=e?.querySelector(".header-row");if(!e||!t)return;const i=`${t.offsetHeight}px`;e.style.getPropertyValue("--fb-head-h")!==i&&e.style.setProperty("--fb-head-h",i)}_footerHeight(){return(this.renderRoot.querySelector(".bottom-nav")?.offsetHeight??0)+("bottom"===this._config.header_position?this.renderRoot.querySelector(".top")?.offsetHeight??0:0)}_measureFit(){const e=this.renderRoot?.querySelector(".switch");if(e&&this._config.equal_view_buttons){const t=[...e.querySelectorAll("button")].map(e=>{const t=document.createRange();t.selectNodeContents(e);const i=getComputedStyle(e);return t.getBoundingClientRect().width+parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}),i=`${Math.ceil(Math.max(0,...t))}px`;e.style.getPropertyValue("--fb-view-button-width")!==i&&e.style.setProperty("--fb-view-button-width",i)}const t=this.renderRoot?.querySelector(".month-table");if(t&&this._config.month_table_fill_height){const e=(this.renderRoot.querySelector(".bottom-nav")?.offsetHeight??0)+("bottom"===this._config.header_position?this.renderRoot.querySelector(".top")?.offsetHeight??0:0),i=`${Math.max(0,window.innerHeight-t.getBoundingClientRect().top-window.scrollY-e-16)}px`;t.style.getPropertyValue("--fb-month-available")!==i&&t.style.setProperty("--fb-month-available",i)}if(this._applyFullHeight(),!this._config?.fit_height||"day"!==this._view)return void(0!==this._fitPx&&(this._fitPx=0));const i=this.renderRoot?.querySelector(".board");if(!i)return;const a=i.querySelector(".header-row"),n=i.querySelector(".allday-row"),r=this._visibleDays.includes(this._day)?this._day:this._visibleDays[0],s=this._dayWindow(r),o=s.endMin-s.startMin;if(o<=0)return;const l=(a?.offsetHeight??0)+(n?.offsetHeight??0),d=i.clientHeight-l-2;if(d<=0)return;const h=Math.min(96,Math.max(40,this._config.hour_height??64))/60,c=Math.max(40/60,Math.min(h,d/o));Math.abs(c-this._fitPx)>.02&&(this._fitPx=c)}_applyFullHeight(){const e=this.renderRoot?.querySelector(".board");if(!e)return;if(!this._config?.full_height)return void(e.style.height&&(e.style.height="",e.style.maxHeight=""));const t=e.getBoundingClientRect().top+window.scrollY,i=`${Math.max(200,Math.round(window.innerHeight-t-this._footerHeight()-16))}px`;e.style.height!==i&&(e.style.height=i,e.style.maxHeight=i)}_maybeScrollToNow(){!1!==this._config?.scroll_to_now&&("day"===this._view?this._scrollDayToNow():"timeline"===this._view?this._scrollTimelineToNow():"agenda"===this._view&&this._scrollAgendaToToday())}_scrollOnce(e){const t=`${this._view}|${this._weekOffset}|${this._day}|${e}`;return t!==this._scrolledKey&&(this._scrolledKey=t,!0)}static _offsetIn(e,t){return t.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop}_scrollDayToNow(){const e=this._visibleDays.includes(this._day)?this._day:this._visibleDays[0];if(!this._isRealToday(e))return;const t=this.renderRoot?.querySelector(".board"),i=this.renderRoot?.querySelector(".nowline");t&&i&&this._scrollOnce(String(this._config?.hour_height))&&requestAnimationFrame(()=>{const e=i.offsetTop-t.clientHeight/3;t.scrollTo({top:Math.max(0,e),behavior:"smooth"})})}_scrollTimelineToNow(){const e=this._visibleDays.includes(this._day)?this._day:this._visibleDays[0];if(!this._isRealToday(e))return;const t=this.renderRoot?.querySelector(".tlwrap"),i=this.renderRoot?.querySelector(".tlnow");t&&i&&this._scrollOnce(String(this._config?.hour_width))&&requestAnimationFrame(()=>{const e=i.getBoundingClientRect().left-t.getBoundingClientRect().left+t.scrollLeft;t.scrollTo({left:Math.max(0,e-t.clientWidth/3),behavior:"smooth"})})}_scrollAgendaToToday(){const e=this._visibleDays.find(e=>this._isRealToday(e));if(void 0===e)return;const t=this.renderRoot?.querySelector(".agenda");if(!t)return;const i=Array.from(t.querySelectorAll(".agenda-day")),a=i.find(t=>Number(t.dataset.day)>=e);a&&this._scrollOnce(String(i.length))&&requestAnimationFrame(()=>{t.scrollTo({top:Math.max(0,Ze._offsetIn(t,a)),behavior:"smooth"})})}_manageDialogFocus(e){this._dialog&&!e?(this._restoreFocus=this.renderRoot?.activeElement,requestAnimationFrame(()=>{const e=this.renderRoot?.querySelector(".dialog"),t=e?.querySelector("input:not([disabled])");(t??e)?.focus()})):!this._dialog&&e&&(this._restoreFocus?.focus?.(),this._restoreFocus=void 0)}_weekBounds(){const e=new Date,t=new Date(e);t.setHours(0,0,0,0),t.setDate(e.getDate()-(e.getDay()-this._firstDayJs+7)%7+7*this._weekOffset);const i=new Date(t);return i.setDate(t.getDate()+7),{monday:t,nextMonday:i}}_monthBounds(){const e=new Date,t=new Date(e.getFullYear(),e.getMonth()+this._monthOffset,1),i=new Date(t.getFullYear(),t.getMonth()+1,1);return{start:t,end:i,numDays:ye(t,i)}}_monthGrid(){const{start:e,numDays:t}=this._monthBounds(),i=(e.getDay()-this._firstDayJs+7)%7;return{gridStart:We(new Date(e.getFullYear(),e.getMonth(),1-i)),weeks:Math.ceil((i+t)/7),month:e.getMonth(),year:e.getFullYear()}}_fetchRange(){if("now"===this._view){const e=We(new Date);return{start:e,end:be(e,8)}}if("month_table"===this._view)return this._monthBounds();if("month"===this._view){const{gridStart:e,weeks:t}=this._monthGrid();return{start:e,end:be(e,7*t)}}const{monday:e,nextMonday:t}=this._weekBounds();return{start:e,end:t}}async _maybeFetch(){const e=this._config.persons.map(e=>this._calsOf(e).join("+")).join(",")+`|${this._familyCals().join("+")}`,t=`${"now"===this._view?`n${je(new Date)}`:"month"===this._view||"month_table"===this._view?`${this._view}${this._monthOffset}`:`w${this._weekOffset}`}|${e}|${JSON.stringify([this._config.hide_patterns,this._config.show_patterns,this._config.replace_patterns,this._config.tentative_patterns,this._config.filter_duplicates,this._config.calendars,this._config.persons.map(e=>e.color)])}`;t!==this._fetchedKey&&(this._fetchedKey=t,await this._fetchEvents())}async _refetch(){this._fetchedKey="",await this._maybeFetch()}_taskEntities(){const e=[];for(const t of this._persons){const i=Array.isArray(t.tasks)?t.tasks:t.tasks?[t.tasks]:[];for(const t of i)t&&!e.includes(t)&&e.push(t)}return e}async _maybeFetchTasks(){const e=this._taskEntities();if(0===e.length)return void(Object.keys(this._tasks).length&&(this._tasks={},this._taskSig={}));const t=e.filter(e=>{const t=this.hass.states[e],i=t?`${t.state}|${t.last_changed}`:"missing";return this._taskSig[e]!==i&&(this._taskSig[e]=i,!0)});if(0===t.length)return;const i={...this._tasks};await Promise.all(t.map(async e=>{try{const t=await this.hass.callWS({type:"todo/item/list",entity_id:e});i[e]=t?.items??[]}catch(t){i[e]=[]}})),this._tasks=i}_tasksFor(e,t){if(this._isOff(e))return[];const i=this._persons[e],a=Array.isArray(i?.tasks)?i.tasks:i?.tasks?[i.tasks]:[];if(0===a.length)return[];const n=We(t),r=be(n,1),s=new Date,o=We(s).getTime()===n.getTime(),l=[];for(const t of a)for(const i of this._tasks[t]??[]){if("needs_action"!==i.status||!i.due)continue;const a=Be(i.due);if(isNaN(a.getTime()))continue;const d=a.getTime()<s.getTime();(a.getTime()>=n.getTime()&&a.getTime()<r.getTime()||d&&o)&&l.push({personIdx:e,entity:t,uid:i.uid,summary:i.summary,due:a,allDayDue:i.due.length<=10,overdue:d})}return l.sort((e,t)=>e.due.getTime()-t.due.getTime())}async _maybeFetchWeather(){const e=this._config.weather_entity;if(!e||!1===this._config.show_weather||!this.hass.states[e])return Object.keys(this._forecast).length&&(this._forecast={}),void(this._weatherKey="");const t=`${e}|${(new Date).toISOString().slice(0,10)}`;if(t!==this._weatherKey){this._weatherKey=t;try{const t=await this.hass.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"daily"},target:{entity_id:e},return_response:!0}),i=t?.response?.[e]?.forecast??[],a={};for(const e of i)e?.datetime&&(a[je(new Date(e.datetime))]={temp:Math.round(e.temperature),low:"number"==typeof e.templow?Math.round(e.templow):void 0,condition:e.condition});this._forecast=a}catch(e){this._forecast={}}}}_weatherChip(e,t="full"){const i=this._forecast[je(e)];if(!i)return K;const a=Le[i.condition]||"weather-cloudy",n=this.hass.config?.unit_system?.temperature??"°",r=void 0===i.low?`${i.temp}${n}`:`${i.temp}${n} / ${i.low}${n}`,s="icon"===t?"":"short"===t?`${i.temp}${n}`:r;return j`<span class="wx ${t}" title="${i.condition} · ${r}">
      <ha-icon icon="mdi:${a}"></ha-icon>${s}
    </span>`}_hidden(e){const t=this._config.hide_patterns;if(!Array.isArray(t)||0===t.length)return!1;const i=e.toLowerCase();return t.some(e=>{const t=String(e).trim().toLowerCase();return t.length>0&&i.includes(t)})}_allowed(e){const t=this._config.show_patterns;if(!Array.isArray(t)||0===t.length)return!0;const i=e.toLowerCase();return t.some(e=>{const t=String(e).trim().toLowerCase();return t.length>0&&i.includes(t)})}_cleanTitle(e){const t=this._config.replace_patterns;if(!Array.isArray(t)||0===t.length)return e;let i=e;for(const e of t){const t=String(e),a=t.indexOf("=>"),n=(a>=0?t.slice(0,a):t).trim(),r=a>=0?t.slice(a+2).trim():"";0!==n.length&&(i=i.split(n).join(r))}return i.replace(/\s{2,}/g," ").trim()||e}_matchesTentative(e){const t=this._config.tentative_patterns;if(!Array.isArray(t)||0===t.length)return!1;const i=e.toLowerCase();return t.some(e=>{const t=String(e).trim().toLowerCase();return t.length>0&&i.includes(t)})}async _fetchEvents(){const{start:e,end:t}=this._fetchRange(),i=e.toISOString(),a=t.toISOString(),n=[];let r=!1;this._loading=!0;const s=new Map,o=e=>(s.has(e)||s.set(e,this.hass.callApi("GET",`calendars/${e}?start=${encodeURIComponent(i)}&end=${encodeURIComponent(a)}`)),s.get(e)),l=[],d=Promise.all(this._familyCals().filter(e=>this.hass.states[e]).map(async e=>{try{const t=await o(e);for(const i of t){const t=we(i,-1,e,this._calMeta(e).color??""),a=this._calMeta(e).title_field;t&&a&&"string"==typeof i[a]&&i[a].trim()&&(t.summary=i[a].trim()),t&&!this._hidden(t.summary)&&this._allowed(t.summary)&&(t.summary=this._cleanTitle(t.summary),l.push(t))}}catch(e){r=!0}}));await Promise.all(this._config.persons.flatMap((e,t)=>{const i=Ke(e,t);return this._calsOf(e).filter(e=>this.hass.states[e]).map(async e=>{try{const a=await o(e);for(const r of a){const a=we(r,t,e,i);if(a){const t=this._calMeta(e).title_field;if(t){const e=r[t];"string"==typeof e&&e.trim()&&(a.summary=e.trim())}}a&&!this._hidden(a.summary)&&this._allowed(a.summary)&&(this._matchesTentative(a.summary)&&(a.tentative=!0),a.summary=this._cleanTitle(a.summary),n.push(a))}}catch(e){r=!0}})}));let h=n;if(this._config.filter_duplicates){const e=new Set;h=n.filter(t=>{const i=`${t.personIdx}|${t.summary}|${t.start.getTime()}|${t.end.getTime()}`;return!e.has(i)&&(e.add(i),!0)})}await d,this._family=l.sort((e,t)=>Number(t.allDay)-Number(e.allDay)||e.start.getTime()-t.start.getTime()),this._raw=h;const{monday:c}=this._weekBounds();this._events="month"===this._view||"month_table"===this._view?[]:h.flatMap(e=>function(e,t){return xe(e,t,7)}(e,c)),this._loadError=r&&0===n.length,this._loading=!1}_familyCals(){const e=this._config.family_calendars;return[...new Set([...Array.isArray(e)?e:e?[e]:[],..."month_table"===this._view?this._markerCals():[]])].filter(Boolean)}_markerCals(){const e=this._config.month_table_marker_calendars;return Array.isArray(e)?e.filter(e=>"string"==typeof e&&!!e):[]}_markersOn(e){const t=this._markerCals(),i=We(e).getTime(),a=be(We(e),1).getTime(),n=new Set;return[...this._raw,...this._family].filter(e=>{if(!t.includes(e.calendar)||e.start.getTime()>=a||e.end.getTime()<=i)return!1;const r=`${e.calendar}|${e.uid||e.summary}|${e.start.getTime()}|${e.end.getTime()}`;return!n.has(r)&&(n.add(r),!0)}).sort((e,i)=>t.indexOf(e.calendar)-t.indexOf(i.calendar)||e.start.getTime()-i.start.getTime())}_markerColor(e){return this._config.month_table_marker_color||this._calMeta(e.calendar).color||e.color||qe(e.calendar)}_dateStyle(e,t){const i=t.length?this._markerColor(t[0]):this._weekendColor(e),a=this._highlightStyle(t.length>0);return{"--fb-date-highlight":i||void 0,background:!i||"background"!==a&&"both"!==a?void 0:`color-mix(in srgb, ${i} 24%, var(--card-background-color, #fff))`,"box-shadow":!i||"line"!==a&&"both"!==a?i&&"underline"===a?`inset 0 -3px ${i}`:void 0:`inset 4px 0 ${i}`}}_highlightStyle(e){const t=e?this._config.month_table_marker_style:this._config.month_table_weekend_style;return t&&["line","background","both","underline"].includes(t)?t:e?"both":"background"}_weekendColor(e){return 6===e.getDay()?this._config.month_table_saturday_color:0===e.getDay()?this._config.month_table_sunday_color:void 0}_rowStyle(e,t){const i=!!this._config.month_table_marker_full_row&&t.length>0,a=i?this._markerColor(t[0]):this._config.month_table_weekend_full_row?this._weekendColor(e):void 0,n=this._highlightStyle(i);return{"--fb-row-highlight":a||void 0,background:!a||"background"!==n&&"both"!==n?void 0:`color-mix(in srgb, ${a} 24%, var(--card-background-color, #fff))`,"box-shadow":a&&"underline"===n?`inset 0 -3px ${a}`:void 0}}_renderMarkers(e){if(!e.length)return K;const t=e.map(e=>e.summary).join(" · ");return"indicator"===this._config.month_table_marker_mode?j`<span class="sr">${t}</span>`:j`<span
      class="date-markers"
      style=${_e({color:this._config.month_table_marker_text_color||void 0})}
    >
      ${e.map(e=>"chip"===this._config.month_table_marker_mode?j`<span
              class="date-marker-chip"
              style=${_e({"--fc":this._markerColor(e)})}
              >${e.summary}</span
            >`:j`<span class="date-marker-text">${e.summary}</span>`)}
    </span>`}_familyOn(e){const t=We(e).getTime(),i=be(We(e),1).getTime(),a=this._config.family_calendars,n=Array.isArray(a)?a:a?[a]:[];return this._family.filter(e=>n.includes(e.calendar)&&e.start.getTime()<i&&e.end.getTime()>t)}_familyChip(e,t){const i=this._calMeta(e.calendar).color||"var(--secondary-text-color)",a=this._calIcon(e.calendar),n=!a&&this._config.auto_icons?this._autoIcon(e.summary):"",r=je(e.start)===je(t),s=!e.allDay&&r?Se(this.hass,e.start):"",o=`${e.summary}${s?`, ${s}`:""} (${this._calLabel(e.calendar)})`;return j`<span class="famchip" style="--fc:${i}" title=${o}>
      ${a?j`<ha-icon .icon=${a}></ha-icon>`:K}${n}${s?j`<b>${s}</b> `:K}<span class="famtext">${e.summary}</span>
    </span>`}_familyBand(e){const t=this._familyOn(e);return t.length?j`<div class="famband" role="list" aria-label=${this._t("family")}>
      ${t.map(t=>j`<span role="listitem">${this._familyChip(t,e)}</span>`)}
    </div>`:K}_calsOf(e){return Array.isArray(e.calendar)?e.calendar.filter(Boolean):e.calendar?[e.calendar]:[]}_writableCals(e){return this._calsOf(e).filter(e=>this._canCreate(e))}_personCanCreate(e){return this._writableCals(e).length>0}_calFeatures(e){if(!e)return 0;const t=this.hass.states[e];return Number(t?.attributes?.supported_features??0)}_canCreate(e){return!!(1&this._calFeatures(e))}_canUpdate(e){return!!(4&this._calFeatures(e))}_canDelete(e){return!!(2&this._calFeatures(e))}get _persons(){return this._config.persons}get _grid(){return this._config.time_grid??30}get _tlPxPerMin(){return Math.min(240,Math.max(48,Number(this._config.hour_width)||96))/60}get _pxPerMin(){if(this._config.fit_height&&this._fitPx>0)return this._fitPx;return Math.min(96,Math.max(40,this._config.hour_height??64))/60}get _startMin(){return 60*(this._config.start_hour??6)}get _endMin(){return 60*(this._config.end_hour??22)}_dayWindow(e){const t=this._startMin,i=this._endMin;if(!1===this._config.trim_hours)return{startMin:t,endMin:i};const a=this._events.filter(t=>t.day===e&&!t.allDay);if(0===a.length)return{startMin:t,endMin:i};let n=Math.min(...a.map(e=>e.startMin)),r=Math.max(...a.map(e=>e.endMin));if(this._isRealToday(e)){const e=new Date,a=60*e.getHours()+e.getMinutes();a>=t&&a<=i&&(n=Math.min(n,a),r=Math.max(r,a))}let s=Math.max(t,60*Math.floor(n/60)),o=Math.min(i,60*Math.ceil(r/60));return o-s<360&&(o=Math.min(i,s+360),s=Math.max(t,o-360)),{startMin:s,endMin:o}}_jsDay(e){return(this._firstDayJs+e)%7}get _visibleDays(){const e=[0,1,2,3,4,5,6];return!1===this._config.show_weekends?e.filter(e=>{const t=this._jsDay(e);return 0!==t&&6!==t}):e}_t(e){return Te(this.hass,e)}_calMeta(e){return e&&this._config.calendars?.[e]||{}}_mapUrl(e){const t=this._config.map_url,i=encodeURIComponent(e);return"string"==typeof t&&t.includes("{location}")?t.replace("{location}",i):`https://www.google.com/maps/search/?api=1&query=${i}`}_calIcon(e){return this._calMeta(e).icon}_calIconEl(e){const t=this._calIcon(e.ref.calendar);return t?j`<ha-icon class="cicon" .icon=${t}></ha-icon>`:K}_calLabel(e){return this._calMeta(e).label??(this.hass.states[e]?.attributes?.friendly_name||e)}_eventColor(e){const t=this._config.color_by;return"location"===t&&e.location?qe(e.location):"calendar"===t&&e.ref.calendar?this._calMeta(e.ref.calendar).color??qe(e.ref.calendar):e.color}_isPast(e){return!1!==this._config.dim_past&&e.ref.end.getTime()<=Date.now()}_relativeDay(e){const t=ye(new Date,e);return 0===t?this._t("today"):1===t?this._t("tomorrow"):-1===t?this._t("yesterday"):null}_isOff(e){return this._hiddenP.includes(e)}_togglePerson(e){this._hiddenP=this._isOff(e)?this._hiddenP.filter(t=>t!==e):[...this._hiddenP,e]}_timedFor(e,t){if(this._isOff(t))return[];const i=this._events.filter(i=>i.day===e&&i.personIdx===t&&!i.allDay&&!this._isBackground(i));return $e(i)}_bgMinMin(){const e=Number(this._config.background_hours??3);return!Number.isFinite(e)||e<=0?0:60*e}_isBackground(e){const t=this._bgMinMin();return t>0&&!e.allDay&&e.endMin-e.startMin>=t}_bgFor(e,t){return this._isOff(t)?[]:this._events.filter(i=>i.day===e&&i.personIdx===t&&!i.allDay&&this._isBackground(i)).sort((e,t)=>t.endMin-t.startMin-(e.endMin-e.startMin))}_maxCols(){const e=Number(this._config.max_columns);return!Number.isFinite(e)||e<1?3:Math.min(Math.round(e),8)}_dayLayout(e,t){const i=this._timedFor(e,t),a=this._maxCols(),n=new Map;for(const e of i){const t=n.get(e.cluster);t?t.push(e):n.set(e.cluster,[e])}const r=[],s=[];for(const e of n.values()){if(e[0].cols<=a){r.push(...e);continue}let t=0,i=1/0,n=-1/0;for(const s of e)s.col<=a-2?r.push({...s,cols:a,span:Math.max(1,Math.min(s.span,a-s.col))}):(t++,i=Math.min(i,s.startMin),n=Math.max(n,s.endMin));t>0&&s.push({col:a-1,cols:a,startMin:i,endMin:n,count:t})}return{events:r,overflows:s}}_evTitle(e){const t=e.parts&&e.parts>1?`${e.title} (${e.part}/${e.parts})`:e.title,i=this._autoIcon(e.title);return i?`${i} ${t}`:t}_autoIcon(e){if(!0!==this._config.auto_icons)return"";if(!e||Re.test(e))return"";const t=this._config.icon_patterns;if(Array.isArray(t)){const i=e.toLowerCase();for(const e of t){const t=String(e),a=t.indexOf("=>");if(a<0)continue;const n=t.slice(0,a).trim().toLowerCase(),r=t.slice(a+2).trim();if(n&&r&&i.includes(n))return r}}for(const[t,i]of Ie)if(t.test(e))return i;return""}_isTentative(e){return!0===e.ref.tentative}_showDayAgenda(e){this._day=e,this._enabledViews.includes("agenda")&&(this._view="agenda")}_openDayView(e){this._day=e,this._enabledViews.includes("day")&&(this._view="day")}_allDayFor(e,t){return this._isOff(t)?[]:this._events.filter(i=>i.day===e&&i.personIdx===t&&i.allDay)}_eventsFor(e,t){return this._isOff(t)?[]:this._events.filter(i=>i.day===e&&i.personIdx===t).sort((e,t)=>Number(t.allDay)-Number(e.allDay)||e.startMin-t.startMin)}_dateForDay(e){const{monday:t}=this._weekBounds();return be(t,e)}_isRealToday(e){return 0===this._weekOffset&&e===this._todayIndex()}_dateLabel(e){return new Intl.DateTimeFormat(this.hass.locale?.language||void 0,{weekday:"long",day:"numeric",month:"long"}).format(e)}_evLabel(e){const t=e.allDay?this._t("all_day"):`${Se(this.hass,e.ref.start)}–${Se(this.hass,e.ref.end)}`,i=this._persons[e.personIdx];return[this._evTitle(e),t,i?this._personName(i,e.personIdx):""].filter(Boolean).join(", ")}_onItemKey(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),this._openEvent(t))}_dayHasEvents(e){return this._persons.some((t,i)=>this._eventsFor(e,i).length>0)}_personName(e,t){return e.name||this.hass.states[e.person??""]?.attributes?.friendly_name||`Person ${t+1}`}_avatar(e,t){const i=Ke(e,t),a=e.person?this.hass.states[e.person]:void 0,n=a?.attributes?.entity_picture,r=this._personName(e,t).slice(0,2).toUpperCase();return n?j`<div
          class="avatar"
          aria-hidden="true"
          style="background-image:url('${n}');box-shadow:0 0 0 2px ${i}55"
        ></div>`:j`<div class="avatar initials" aria-hidden="true" style="background:${i}">
          ${r}
        </div>`}_badges(e){const t=Array.isArray(e.badges)?e.badges.filter(Boolean):[];return 0===t.length?K:j`<div class="pbadges">
      ${t.map(e=>{const t=this.hass.states[e];if(!t)return K;const i=t.attributes?.icon,a=t.attributes?.unit_of_measurement??"";return j`<span
          class="pbadge"
          title=${t.attributes?.friendly_name??e}
          role="button"
          tabindex="0"
          @click=${t=>{t.stopPropagation(),this._moreInfo(e)}}
          @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._moreInfo(e))}}
        >
          ${i?j`<ha-icon .icon=${i}></ha-icon>`:K}
          <span>${t.state}${a}</span>
        </span>`})}
    </div>`}_moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_goToDate(e){const t=e=>{const t=We(e);return t.setDate(t.getDate()-(t.getDay()-this._firstDayJs+7)%7),t},i=ye(t(We(new Date)),t(e))/7;this._weekOffset=i,this._day=(e.getDay()-this._firstDayJs+7)%7,this._view=this._enabledViews.includes("day")?"day":this._view}render(){return this._config&&this.hass?j`
      <ha-card>
        ${"bottom"!==this._config.header_position?this._renderHeader():K}
        ${this._config.show_focus&&"now"!==this._view?this._renderFocus():K}
        ${!this._config.show_alerts||"day"!==this._view&&"timeline"!==this._view?K:this._renderAlerts()}
        ${"now"===this._view?this._renderNow():"day"===this._view?this._renderDay():"timeline"===this._view?this._renderTimeline():"week"===this._view?this._renderWeek():"month"===this._view?this._renderMonth():"month_table"===this._view?this._renderPeopleTable(!0):this._renderAgenda()}
        ${"bottom"===this._config.navigation_position&&"now"!==this._view?j`<div class="weekhead bottom-nav">
                ${"month"===this._view||"month_table"===this._view?this._monthNav(!0):this._weekNav(!0)}
              </div>`:K}
        ${"bottom"===this._config.header_position?this._renderHeader():K}
      </ha-card>
      ${this._dialog?this._renderDialog():K}
    `:K}_renderHeader(){const e=this._config.title??this._t("board_title");return j`
      <div class="top">
        <div class="title">${e}</div>
        ${this._enabledViews.length>1?j`<div
                class="switch"
                role="tablist"
                @keydown=${e=>this._onTabKey(e,this._enabledViews,this._view,e=>this._view=e)}
              >
                ${this._enabledViews.map(e=>j`<button
                      role="tab"
                      aria-selected=${this._view===e}
                      tabindex=${this._view===e?0:-1}
                      class=${this._view===e?"on":""}
                      @click=${()=>this._view=e}
                    >
                      ${this._t(e)}
                    </button>`)}
              </div>`:K}
      </div>
    `}_focusFor(e){const t=Date.now(),i=this._raw.filter(t=>t.personIdx===e&&!t.allDay).sort((e,t)=>e.start.getTime()-t.start.getTime()),a=i.find(e=>e.start.getTime()<=t&&t<e.end.getTime()),n=i.find(e=>e.start.getTime()>t);return{current:a,next:n}}_renderAlerts(){const e=this._visibleDays.includes(this._day)?this._day:this._visibleDays[0],t=this._persons.map((e,t)=>t).filter(e=>!this._isOff(e)),i=this._events.filter(i=>i.day===e&&t.includes(i.personIdx)&&!this._isBackground(i)),a=new Date,n=function(e,t){const i=e.filter(e=>!e.allDay&&e.endMin>e.startMin),a=[];for(const e of t.persons){const n=i.filter(t=>t.personIdx===e).sort((e,t)=>e.startMin-t.startMin||e.endMin-t.endMin);for(let t=0;t<n.length;t++)for(let i=t+1;i<n.length;i++){const r=n[t],s=n[i];if(s.startMin>=r.endMin)break;a.push({kind:"conflict",personIdx:e,startMin:Math.max(r.startMin,s.startMin),endMin:Math.min(r.endMin,s.endMin),titles:[r.title,s.title]})}if(t.gapMin>0){let i=-1,r="";for(const s of n)i>=0&&s.startMin-i>=t.gapMin&&a.push({kind:"gap",personIdx:e,startMin:i,endMin:s.startMin,titles:[r,s.title]}),s.endMin>i&&(i=s.endMin,r=s.title)}}if(t.persons.length>1){const e=new Set;for(const t of i)e.add(t.startMin),e.add(t.endMin);const n=[...e].sort((e,t)=>e-t);let r=null;for(let e=0;e<n.length-1;e++){const s=n[e],o=n[e+1],l=t.persons.filter(e=>i.some(t=>t.personIdx===e&&t.startMin<=s&&t.endMin>=o));l.length===t.persons.length?r&&r.endMin===s?r.endMin=o:(r={kind:"empty",startMin:s,endMin:o,titles:[]},a.push(r)):r=null}}const n=t.nowMin;return a.filter(e=>e.endMin>e.startMin&&(void 0===n||e.endMin>n)).sort((e,t)=>e.startMin-t.startMin||e.endMin-t.endMin)}(i,{persons:t,gapMin:Math.max(0,this._config.gap_min??60),nowMin:this._isRealToday(e)?60*a.getHours()+a.getMinutes():void 0});if(0===n.length)return K;const r={conflict:"⚠️",gap:"⏳",empty:"🏠"};return j`
      <div class="alerts">
        ${n.map(e=>{const t=void 0===e.personIdx?"":this._personName(this._persons[e.personIdx],e.personIdx),i=`${Ce(this.hass,e.startMin)}–${Ce(this.hass,e.endMin)}`;return j`
            <div class="alert a-${e.kind}" title=${e.titles.join(" · ")}>
              <span>${r[e.kind]}</span>
              <span>
                ${t?j`<b>${t}</b> `:K}${this._t(`alert_${e.kind}`)}
                <small>${i}</small>
              </span>
            </div>
          `})}
      </div>
    `}_taskChip(e){const t=e.allDayDue?"":Se(this.hass,e.due),i=e.overdue?this._t("task_overdue"):this._t("task_due");return j`
      <div
        class="taskchip ${e.overdue?"overdue":""}"
        tabindex="0"
        role="button"
        title="${e.summary} · ${i}${t?` ${t}`:""}"
        @click=${()=>this._moreInfo(e.entity)}
        @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._moreInfo(e.entity))}}
      >
        <span class="taskbox">${e.overdue?"!":"✓"}</span>
        <span class="tasktext">${e.summary}</span>
        ${t?j`<span class="tasktime">${t}</span>`:K}
      </div>
    `}_renderFocus(){return j`
      <div class="focus">
        ${this._persons.map((e,t)=>{if(this._isOff(t))return K;const{current:i,next:a}=this._focusFor(t),n=Ke(e,t),r=e=>this._config.auto_icons?this._autoIcon(e.summary):"";return j`
            <div class="fchip" title=${this._personName(e,t)}>
              ${this._avatar(e,t)}
              <div class="fbody">
                <span class="fname">${this._personName(e,t)}</span>
                ${i?j`<span class="fnow">
                        <span class="fdot" style="background:${n}"></span>${r(i)}
                        ${i.summary}
                        <small>${this._t("until")} ${Se(this.hass,i.end)}</small>
                      </span>`:a?j`<span class="fnext">
                          ${this._t("focus_next")}: ${r(a)} ${a.summary}
                          <small>${Ee(this.hass,a.start)}</small>
                        </span>`:j`<span class="ffree">${this._t("focus_free")}</span>`}
              </div>
            </div>
          `})}
      </div>
    `}_allDayToday(e){const t=Date.now();return this._raw.filter(i=>i.personIdx===e&&i.allDay&&i.start.getTime()<=t&&t<i.end.getTime())}_nextLabel(e){if(je(e)===je(new Date))return e.getTime()-Date.now()<36e5?Ee(this.hass,e):Se(this.hass,e);return`${this._relativeDay(e)??Pe(this.hass,"short",0)[e.getDay()]} ${Se(this.hass,e)}`}_renderNow(){const e=new Date,t=new Intl.DateTimeFormat(this.hass.locale?.language||void 0,{weekday:"long",day:"numeric",month:"long"}).format(e),i=e=>this._config.auto_icons?this._autoIcon(e.summary):"";return j`
      <div class="now">
        <div class="nowhead">
          <span class="nowclock">${Se(this.hass,e)}</span>
          <span class="nowdate">${t}</span>
          ${this._weatherChip(e)}
          ${this._loading&&0===this._raw.length?j`<span class="spinner"></span>`:K}
        </div>
        ${this._familyBand(e)}
        <ul class="nowlist">
          ${this._persons.map((t,a)=>{if(this._isOff(a))return K;const{current:n,next:r}=this._focusFor(a),s=Ke(t,a),o=this._personName(t,a),l=t.person?this.hass.states[t.person]:void 0,d=this._allDayToday(a),h=n?Math.min(100,Math.max(0,(e.getTime()-n.start.getTime())/Math.max(1,n.end.getTime()-n.start.getTime())*100)):0;return j`
              <li class="nrow" style="--pc:${s}">
                ${this._avatar(t,a)}
                <div class="nbody">
                  <div class="nname">
                    ${o}${l?j`<span class="nstat">${this._statusLabel(l.state)}</span>`:K}
                  </div>
                  ${d.map(e=>j`<span class="nallday">${i(e)} ${e.summary}</span>`)}
                  ${n?j`<div class="ncur">
                          <span class="ndot" aria-hidden="true"></span>
                          <span class="ntitle">${i(n)} ${n.summary}</span>
                          <span class="nuntil"
                            >${this._t("until")} ${Se(this.hass,n.end)}</span
                          >
                          <div
                            class="nprog"
                            role="progressbar"
                            aria-label=${n.summary}
                            aria-valuenow=${Math.round(h)}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <i style="width:${h}%"></i>
                          </div>
                        </div>`:j`<div class="ncur nfree">${this._t("focus_free")}</div>`}
                  ${r?j`<div class="nnext">
                          ${this._t("focus_next")}: ${i(r)} ${r.summary}
                          <b>${this._nextLabel(r.start)}</b>
                        </div>`:K}
                </div>
              </li>
            `})}
        </ul>
      </div>
    `}_weekNav(e=!1){if(!e&&"bottom"===this._config.navigation_position)return K;const{monday:t}=this._weekBounds();return j`
      <div class="weeknav">
        <button class="nav" aria-label=${this._t("prev_week")} @click=${this._prevWeek}>‹</button>
        <button class="nav-now" @click=${this._thisWeek}>
          ${function(e,t){const i=new Date(t);i.setDate(i.getDate()+6);const a=new Intl.DateTimeFormat(ze(e),{day:"numeric",month:"short"});return`${a.format(t)} – ${a.format(i)}`}(this.hass,t)}
        </button>
        <button class="nav" aria-label=${this._t("next_week")} @click=${this._nextWeek}>›</button>
      </div>
    `}_onTabKey(e,t,i,a){const n=t.length,r=t.indexOf(i),s="ArrowRight"===e.key?(r+1)%n:"ArrowLeft"===e.key?(r-1+n)%n:"Home"===e.key?0:"End"===e.key?n-1:-1;if(s<0||0===n)return;e.preventDefault(),a(t[s]);const o=e.currentTarget;this.updateComplete.then(()=>o.querySelectorAll('[role="tab"]')[s]?.focus())}_renderDayTabs(){const e=Pe(this.hass,"short",this._firstDayJs);return j`
      <div
        class="tabs"
        role="tablist"
        @keydown=${e=>this._onTabKey(e,this._visibleDays,this._day,e=>this._day=e)}
      >
        ${this._visibleDays.map(t=>j`
            <button
              role="tab"
              aria-selected=${t===this._day}
              tabindex=${t===this._day?0:-1}
              class="${t===this._day?"on":""} ${this._isRealToday(t)?"today":""}"
              @click=${()=>this._day=t}
            >
              ${e[t]}
            </button>
          `)}
      </div>
    `}_renderDay(){const e=this._visibleDays.includes(this._day)?this._day:this._visibleDays[0],t=this._pxPerMin,i=60*t,{startMin:a,endMin:n}=this._dayWindow(e),r=(n-a)*t,s=Pe(this.hass,"long",this._firstDayJs),o=[];for(let e=a/60;e<=n/60;e++)o.push(e);const l=new Date,d=Math.max(a,Math.min(n,60*l.getHours()+l.getMinutes())),h=!1!==this._config.show_now_line&&this._isRealToday(e),c=this._dateForDay(e),p=this._persons.some((t,i)=>this._allDayFor(e,i).length>0||this._tasksFor(i,c).length>0);return j`
      <div class="dayhead">
        <span class="dayname">
          ${this._relativeDay(this._dateForDay(e))??s[e]}
          ${this._weatherChip(this._dateForDay(e))}${this._loading&&0===this._raw.length?j`<span class="spinner"></span>`:K}
        </span>
        ${this._config.slim_header?this._renderDayTabs():K} ${this._weekNav()}
      </div>
      ${this._config.slim_header?K:this._renderDayTabs()}
      ${this._loadError?j`<div class="banner">${this._t("load_error")}</div>`:K}
      ${this._familyBand(this._dateForDay(e))}
      <div class="board">
        <div class="header-row">
          <div class="axis-spacer"></div>
          ${this._persons.map((e,t)=>{const i=e.person?this.hass.states[e.person]:void 0,a=this._isOff(t);return j`
              <div
                class="phead ${a?"off":""}"
                role="button"
                tabindex="0"
                title=${this._personName(e,t)}
                aria-pressed=${this._isOff(t)?"false":"true"}
                @click=${()=>this._togglePerson(t)}
                @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._togglePerson(t))}}
              >
                ${this._avatar(e,t)}
                ${a?K:j`<div class="pmeta">
                        <div class="pname">${this._personName(e,t)}</div>
                        <div class="pstatus">
                          ${i?this._statusLabel(i.state):""}
                        </div>
                        ${this._badges(e)}
                      </div>`}
              </div>
            `})}
        </div>
        ${p?j`
                <div class="allday-row">
                  <div class="axis-spacer allday-label">${this._t("all_day")}</div>
                  ${this._persons.map((t,i)=>j`
                      <div class="allday-cell ${this._isOff(i)?"off":""}">
                        ${this._tasksFor(i,c).map(e=>this._taskChip(e))}
                        ${this._allDayFor(e,i).map(e=>{const t=this._eventColor(e),i=this._isTentative(e);return j`
                            <div
                              class="adchip ${i?"tentative":""}"
                              style="border-left:3px ${i?"dashed":"solid"} ${t};background:${t}30;background:color-mix(in srgb, ${t} 22%, var(--card-background-color, #fff))"
                              title="${this._evTitle(e)}"
                              tabindex="0"
                              role="button"
                              @click=${()=>this._openEvent(e)}
                              aria-label=${this._evLabel(e)}
                              @keydown=${t=>this._onItemKey(t,e)}
                            >
                              ${e.continuesBefore?"« ":""}${this._evTitle(e)}${e.continuesAfter?" »":""}
                            </div>
                          `})}
                      </div>
                    `)}
                </div>
              `:K}
        <div class="body" style="height:${r}px">
          <div class="axis">
            ${o.map(e=>j`<div class="hour" style="top:${(60*e-a)*t}px">
                  ${He(e)}:00
                </div>`)}
          </div>
          ${this._persons.map((r,s)=>{const o=this._personCanCreate(r),l=this._dayLayout(e,s);return j`
              <div
                class="col ${o?"creatable":""} ${this._isOff(s)?"off":""}"
                @click=${i=>this._onColClick(i,s,e,t,a)}
                style="background-image:
                  repeating-linear-gradient(var(--fb-row-shade) 0 ${i}px, transparent ${i}px ${2*i}px),
                  repeating-linear-gradient(var(--fb-halfhour) 0 1px, transparent 1px ${i/2}px),
                  repeating-linear-gradient(var(--fb-hourline) 0 1px, transparent 1px ${i}px)"
              >
                ${this._bgFor(e,s).filter(e=>e.endMin>a&&e.startMin<n).map((e,i)=>{const n=(e.startMin-a)*t,r=Math.max((e.endMin-e.startMin)*t-3,16),s=this._eventColor(e),o=this._isTentative(e);return j`
                      <div
                        class="band ${this._isPast(e)?"past":""} ${o?"tentative":""}"
                        tabindex="0"
                        role="button"
                        @click=${t=>{t.stopPropagation(),this._openEvent(e)}}
                        aria-label=${this._evLabel(e)}
                        @keydown=${t=>this._onItemKey(t,e)}
                        style="top:${n+1.5}px;height:${r}px;
                               border:1.5px dashed ${s}55;
                               background:${s}0d;
                               background:repeating-linear-gradient(45deg,
                                 color-mix(in srgb, ${s} 8%, transparent) 0 8px,
                                 transparent 8px 16px)"
                        title="${this._evTitle(e)} · ${Ce(this.hass,e.startMin)}–${Ce(this.hass,e.endMin)}"
                      >
                        <span
                          class="etitle"
                          style="margin-top:${19*i}px;
                                 background:${s}26;
                                 background:color-mix(in srgb, ${s} 16%, var(--card-background-color, #fff))"
                          >${e.continuesBefore?"« ":""}${this._evTitle(e)}${e.continuesAfter?" »":""}</span
                        >
                      </div>
                    `})}
                ${(()=>{let e=-1/0;return l.events.filter(e=>e.endMin>a&&e.startMin<n).map(i=>{const{sMin:n,eMin:r,dragging:s}=this._dragPreview(i);let o=(n-a)*t;const l=Math.max((r-n)*t-3,16),d=this._eventColor(i),h=i.col/i.cols*100,c=(i.span??1)/i.cols*100,p=this._isTentative(i),_=l<24,m=this._draggable(i);return _&&1===i.cols&&!s&&(o=Math.max(o,e+1),e=o+l),j`
                        <div
                          class="event ${this._isPast(i)?"past":""} ${p?"tentative":""} ${_?"slim":""} ${m?"draggable":""} ${s?"dragging":""}"
                          tabindex="0"
                          role="button"
                          @pointerdown=${e=>this._onEventPointerDown(e,i,"move")}
                          @click=${e=>{e.stopPropagation(),this._suppressClick?this._suppressClick=!1:this._openEvent(i)}}
                          aria-label=${this._evLabel(i)}
                          @keydown=${e=>this._onItemKey(e,i)}
                          style="top:${o+1.5}px;height:${l}px;
                               left:calc(${h}% + 2px);width:calc(${c}% - 4px);
                               border-left:3px ${p?"dashed":"solid"} ${d};
                               background:${d}40;
                               background:color-mix(in srgb, ${d} 32%, var(--card-background-color, #fff))"
                          title="${this._evTitle(i)} · ${Ce(this.hass,i.startMin)}–${Ce(this.hass,i.endMin)}"
                        >
                          <span class="etitle"
                            >${this._calIconEl(i)}${i.continuesBefore?"« ":""}${this._evTitle(i)}</span
                          >
                          ${l>32||s?j`<span class="etime"
                                  >${Ce(this.hass,n)}–${Ce(this.hass,r)}</span
                                >`:K}
                          ${this._progressOn&&this._isCurrent(i)&&!s?j`<div class="eprog">
                                  <div style="width:${this._progressPct(i)}%"></div>
                                </div>`:K}
                          ${m&&!_?j`<div
                                  class="rz"
                                  @pointerdown=${e=>this._onEventPointerDown(e,i,"resize")}
                                ></div>`:K}
                        </div>
                      `})})()}
                ${l.overflows.filter(e=>e.endMin>a&&e.startMin<n).map(i=>{const n=(i.startMin-a)*t,r=Math.max((i.endMin-i.startMin)*t-3,16),s=i.col/i.cols*100,o=100/i.cols;return j`
                      <div
                        class="event overflow"
                        tabindex="0"
                        role="button"
                        title="${i.count} ${this._t("more_events")}"
                        @click=${t=>{t.stopPropagation(),this._showDayAgenda(e)}}
                        @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._showDayAgenda(e))}}
                        style="top:${n+1.5}px;height:${r}px;
                               left:calc(${s}% + 2px);width:calc(${o}% - 4px)"
                      >
                        <span class="etitle">+${i.count}</span>
                      </div>
                    `})}
              </div>
            `})}
          ${h?j`<div class="nowline" style="top:${(d-a)*t}px">
                  <span>${Ce(this.hass,d)}</span>
                </div>`:K}
          ${this._loading||this._loadError||this._dayHasEvents(e)?K:j`<div class="empty">${this._t("no_events")}</div>`}
        </div>
      </div>
    `}_renderTimeline(){const e=this._visibleDays.includes(this._day)?this._day:this._visibleDays[0],{startMin:t,endMin:i}=this._dayWindow(e),a=Math.min(240,Math.max(48,Number(this._config.hour_width)||96)),n=a/60,r=(i-t)*n,s=Pe(this.hass,"long",this._firstDayJs),o=[];for(let e=t/60;e<=i/60;e++)o.push(e);const l=new Date,d=60*l.getHours()+l.getMinutes(),h=!1!==this._config.show_now_line&&this._isRealToday(e)&&d>=t&&d<=i;return j`
      <div class="dayhead">
        <span class="dayname">
          ${this._relativeDay(this._dateForDay(e))??s[e]}
          ${this._weatherChip(this._dateForDay(e))}${this._loading&&0===this._raw.length?j`<span class="spinner"></span>`:K}
        </span>
        ${this._config.slim_header?this._renderDayTabs():K} ${this._weekNav()}
      </div>
      ${this._config.slim_header?K:this._renderDayTabs()}
      ${this._loadError?j`<div class="banner">${this._t("load_error")}</div>`:K}
      ${this._familyBand(this._dateForDay(e))}
      <div class="tlwrap">
        <div class="tlgrid" style="min-width:calc(var(--fb-tl-label, 150px) + ${r}px)">
          <div class="tlhead">
            <div class="tlcorner"></div>
            <div class="tlhours" style="width:${r}px">
              ${o.map(e=>j`<span class="tlhour" style="left:${(60*e-t)*n}px"
                    >${He(e)}:00</span
                  >`)}
            </div>
          </div>
          ${this._persons.map((s,o)=>{const l=this._isOff(o),d=l?[]:this._events.filter(t=>t.day===e&&t.personIdx===o),h=$e(d),c=h.length?Math.max(...h.map(e=>e.cols)):1,p=this._personCanCreate(s),_=s.person?this.hass.states[s.person]:void 0;return j`
              <div class="tlrow ${l?"off":""}">
                <div
                  class="tlperson"
                  role="button"
                  tabindex="0"
                  aria-pressed=${this._isOff(o)?"false":"true"}
                  @click=${()=>this._togglePerson(o)}
                  @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._togglePerson(o))}}
                >
                  ${this._avatar(s,o)}
                  <div>
                    <div class="pname">${this._personName(s,o)}</div>
                    <div class="pstatus">${_?this._statusLabel(_.state):""}</div>
                  </div>
                </div>
                <div
                  class="tlcanvas ${p?"creatable":""}"
                  style="width:${r}px;height:${30*c+8}px;
                         background-image:repeating-linear-gradient(90deg, var(--fb-hourline) 0 1px, transparent 1px ${a}px),
                         repeating-linear-gradient(90deg, var(--fb-halfhour) 0 1px, transparent 1px ${a/2}px)"
                  @click=${i=>this._onTimelineClick(i,o,e,n,t)}
                >
                  ${h.filter(e=>e.endMin>t&&e.startMin<i).map(e=>{const a=this._dragPreview(e),r=Math.max(a.sMin,t),s=Math.min(a.eMin,i),o=Math.max((s-r)*n-3,20),l=this._eventColor(e),d=this._isTentative(e),h=e.continuesBefore||e.startMin<t,c=e.continuesAfter||e.endMin>i,p=this._draggable(e);return j`
                        <div
                          class="tlbar ${this._isPast(e)?"past":""} ${d?"tentative":""} ${p?"draggable":""} ${a.dragging?"dragging":""}"
                          tabindex="0"
                          role="button"
                          @pointerdown=${t=>this._onEventPointerDown(t,e,"move","x")}
                          @click=${t=>{t.stopPropagation(),this._suppressClick?this._suppressClick=!1:this._openEvent(e)}}
                          aria-label=${this._evLabel(e)}
                          @keydown=${t=>this._onItemKey(t,e)}
                          style="left:${(r-t)*n+1.5}px;width:${o}px;
                                 top:${30*e.col+4}px;height:${24}px;
                                 border-left:3px ${d?"dashed":"solid"} ${l};
                                 background:${l}40;
                                 background:color-mix(in srgb, ${l} 32%, var(--card-background-color, #fff))"
                          title="${this._evTitle(e)}${e.allDay?` · ${this._t("all_day")}`:` · ${Ce(this.hass,e.startMin)}–${Ce(this.hass,e.endMin)}`}"
                        >
                          <span class="etitle"
                            >${h?"« ":""}${this._evTitle(e)}${c?" »":""}</span
                          >
                          ${!e.allDay&&(o>120||a.dragging)?j`<span class="etime"
                                  >${Ce(this.hass,a.sMin)}–${Ce(this.hass,a.eMin)}</span
                                >`:K}
                          ${p?j`<div
                                  class="rzx"
                                  @pointerdown=${t=>this._onEventPointerDown(t,e,"resize","x")}
                                ></div>`:K}
                        </div>
                      `})}
                </div>
              </div>
            `})}
          ${h?j`<div
                  class="tlnow"
                  style="left:calc(var(--fb-tl-label, 150px) + ${(d-t)*n}px)"
                >
                  <span>${Ce(this.hass,d)}</span>
                </div>`:K}
        </div>
        ${this._loading||this._loadError||this._dayHasEvents(e)?K:j`<div class="empty">${this._t("no_events")}</div>`}
      </div>
    `}_onTimelineClick(e,t,i,a,n){const r=this._persons[t];if(!this._personCanCreate(r))return;const s=e.currentTarget.getBoundingClientRect();let o=n+(e.clientX-s.left)/a;const l=this._grid;o=Math.round(o/l)*l,o=Math.max(0,Math.min(o,1440-l)),this._openCreate(t,i,o)}_renderWeek(){return this._renderPeopleTable()}_renderPeopleTable(e=!1){const t=Pe(this.hass,"short",this._firstDayJs),{start:i,numDays:a}=this._monthBounds(),n=e&&!this._config.month_table_marker_keep_columns?this._markerCals():[],r=(e?this._raw.flatMap(e=>xe(e,i,a)):this._events).filter(e=>!n.includes(e.ref.calendar)),s=t=>e?be(i,t):this._dateForDay(t),o=We(new Date).getTime(),l=e=>s(e).getTime()===o,d=t=>e?this._goToDate(s(t)):this._openDayView(t),h=e?Array.from({length:a},(e,t)=>t).filter(e=>{const t=s(e).getDay();return!1!==this._config.show_weekends||0!==t&&6!==t}):this._visibleDays,c=this._persons.map((e,t)=>({p:e,i:t})).filter(({p:e})=>!this._calsOf(e).length||this._calsOf(e).some(e=>!n.includes(e))).filter(({i:e})=>!0!==this._config.hide_empty_persons||r.some(t=>t.personIdx===e)),p=c.length>0?c:this._persons.map((e,t)=>({p:e,i:t})).filter(({p:e})=>!this._calsOf(e).length||this._calsOf(e).some(e=>!n.includes(e))),_=this._familyCals().length?"118px":"70px",m=e?"max-content":_,u=p.length?`${m} repeat(${p.length}, minmax(110px, 1fr))`:"1fr";return j`
      <div class="weekhead">${e?this._monthNav():this._weekNav()}</div>
      <div
        class="weekwrap ${e?"month-table":""} ${e&&this._config.month_table_fill_height?"fill-month":""} ${e&&this._config.month_table_marker_grow&&"indicator"!==this._config.month_table_marker_mode?"grow-markers":""} ${e&&"indicator"===this._config.month_table_marker_mode?"indicator-only":""} ${e&&this._config.month_table_full_height?"full-month":""} ${e&&this._config.month_table_inline_date?"inline-date":""} ${e&&this._config.month_table_compact_header?"compact-header":""}"
      >
        <div class="weekgrid" style="grid-template-columns:${u}">
          <div class="corner"></div>
          ${p.map(({p:e,i:t})=>j`<div
                class="wphead ${this._isOff(t)?"off":""}"
                role="button"
                tabindex="0"
                aria-pressed=${this._isOff(t)?"false":"true"}
                @click=${()=>this._togglePerson(t)}
                @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._togglePerson(t))}}
              >
                ${this._avatar(e,t)}<span>${this._personName(e,t)}</span>
              </div>`)}
          ${h.map(i=>{const a=e?this._markersOn(s(i)):[],n=e?this._rowStyle(s(i),a):{},o=this._familyOn(s(i)).filter(t=>!e||!this._markerCals().includes(t.calendar));return j`
              <div
                class="wday ${l(i)?"today":""} ${a.length?"has-markers":""}"
                style=${_e(e?this._dateStyle(s(i),a):{})}
                title=${a.length?a.map(e=>e.summary).join(" · "):this._t("day")}
                role="button"
                tabindex="0"
                @click=${()=>d(i)}
                @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),d(i))}}
              >
                <span class="date-main"
                  ><span class="sr">${this._dateLabel(s(i))}:</span> ${e?j`<span class="month-date">
                          <b>${t[(s(i).getDay()-this._firstDayJs+7)%7]}</b>
                          <span
                            >${je(s(i)).slice(8)}.${je(s(i)).slice(5,7)}.</span
                          >
                        </span>`:j`<b>${t[i]}</b>`}${this._weatherChip(s(i),"short")}
                  ${o.length?j`<span class="date-family">${o.map(e=>this._familyChip(e,s(i)))}</span>`:K}</span
                >
                ${e?this._renderMarkers(a):K}
              </div>
              ${p.map(({p:e,i:t})=>{const a=this._personCanCreate(e);return j`
                  <div
                    class="wcell ${l(i)?"today":""} ${a?"creatable":""}"
                    style=${_e(n)}
                    @click=${()=>a&&this._openCreateForDate(t,s(i))}
                  >
                    ${(this._isOff(t)?[]:r.filter(e=>e.day===i&&e.personIdx===t).sort((e,t)=>Number(t.allDay)-Number(e.allDay)||e.startMin-t.startMin)).map(e=>{const t=this._eventColor(e),i=this._isTentative(e);return j`
                        <div
                          class="wchip ${this._isPast(e)?"past":""} ${i?"tentative":""}"
                          style="border-left:2.5px ${i?"dashed":"solid"} ${t};background:${t}30;background:color-mix(in srgb, ${t} 22%, var(--card-background-color, #fff))"
                          title="${this._evTitle(e)}"
                          tabindex="0"
                          role="button"
                          @click=${t=>{t.stopPropagation(),this._openEvent(e)}}
                          aria-label=${this._evLabel(e)}
                          @keydown=${t=>this._onItemKey(t,e)}
                        >
                          <span
                            >${this._calIconEl(e)}${e.continuesBefore?"« ":""}${this._evTitle(e)}</span
                          >
                          ${e.allDay?K:j`<small>${Ce(this.hass,e.startMin)}</small>`}
                        </div>
                      `})}
                  </div>
                `})}
            `})}
        </div>
      </div>
    `}_renderAgenda(){const e=Pe(this.hass,"long",this._firstDayJs),t=new Intl.DateTimeFormat(this.hass.locale?.language||"en",{day:"numeric",month:"short"}),i=e=>{if(!this._config.filter_duplicates)return e;const t=new Set;return e.filter(e=>{const i=`${this._evTitle(e)}|${e.ref.start.getTime()}|${e.ref.end.getTime()}`;return!t.has(i)&&(t.add(i),!0)})},a=this._visibleDays.find(e=>this._isRealToday(e)),n=this._config.hide_past&&void 0!==a?this._visibleDays.filter(e=>e>=a):this._visibleDays,r=n.map(e=>({d:e,items:i(this._events.filter(t=>t.day===e&&!this._isOff(t.personIdx)).sort((e,t)=>Number(t.allDay)-Number(e.allDay)||e.startMin-t.startMin))})).filter(e=>e.items.length>0||this._familyOn(this._dateForDay(e.d)).length>0||this._persons.some((t,i)=>this._tasksFor(i,this._dateForDay(e.d)).length>0));return j`
      <div class="weekhead">${this._weekNav()}</div>
      ${this._loadError?j`<div class="banner">${this._t("load_error")}</div>`:K}
      <div class="agenda">
        ${0===r.length?j`<div class="agenda-empty">
                ${this._loading?j`<span class="spinner"></span>`:this._t("no_events")}
              </div>`:r.map(i=>j`
                  <div class="agenda-day" data-day=${i.d}>
                    <div class="agenda-date ${this._isRealToday(i.d)?"today":""}">
                      ${this._relativeDay(this._dateForDay(i.d))??e[i.d]} ·
                      ${t.format(this._dateForDay(i.d))}
                      ${this._weatherChip(this._dateForDay(i.d))}
                    </div>
                    ${this._familyBand(this._dateForDay(i.d))}
                    ${i.items.map(e=>this._agendaRow(e))}
                    ${this._persons.flatMap((e,t)=>this._tasksFor(t,this._dateForDay(i.d)).map(e=>this._agendaTask(e)))}
                  </div>
                `)}
      </div>
    `}_agendaTask(e){const t=this._persons[e.personIdx],i=Ke(t,e.personIdx);return j`
      <div
        class="agenda-row task ${e.overdue?"overdue":""}"
        tabindex="0"
        role="button"
        @click=${()=>this._moreInfo(e.entity)}
        @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._moreInfo(e.entity))}}
      >
        <span class="agenda-time"
          >${e.allDayDue?this._t("all_day"):Se(this.hass,e.due)}</span
        >
        <span class="agenda-bar" style="background:${i}"></span>
        <span class="agenda-main">
          <span class="agenda-title">${e.overdue?"! ":"✓ "}${e.summary}</span>
          <span class="agenda-meta"
            >${this._personName(t,e.personIdx)} ·
            ${e.overdue?this._t("task_overdue"):this._t("task_due")}</span
          >
        </span>
      </div>
    `}_agendaRow(e){const t=this._eventColor(e),i=this._personName(this._persons[e.personIdx],e.personIdx),a=e.allDay?this._t("all_day"):`${Ce(this.hass,e.startMin)}–${Ce(this.hass,e.endMin)}`,n=this._isCurrent(e),r=this._isTentative(e),s=e.allDay||n||e.continuesBefore?"":Ee(this.hass,e.ref.start);return j`
      <div
        class="agenda-row ${this._isPast(e)?"past":""} ${n?"current":""} ${r?"tentative":""}"
        tabindex="0"
        role="button"
        @click=${()=>this._openEvent(e)}
        @keydown=${t=>this._onItemKey(t,e)}
      >
        <span class="agenda-time">${a}</span>
        <span class="agenda-bar" style="background:${t}"></span>
        <span class="agenda-main">
          <span class="agenda-title"
            >${this._calIconEl(e)}${e.continuesBefore?"« ":""}${this._evTitle(e)}${e.continuesAfter?" »":""}</span
          >
          <span class="agenda-meta">${i}${e.location?` · ${e.location}`:""}</span>
          ${n&&this._progressOn?j`<span class="agenda-prog"
                  ><span style="width:${this._progressPct(e)}%;background:${t}"></span
                ></span>`:K}
        </span>
        ${s?j`<span class="agenda-cd">${s}</span>`:K}
      </div>
    `}_monthNav(e=!1){if(!e&&"bottom"===this._config.navigation_position)return K;const{start:t}=this._monthBounds(),i=new Intl.DateTimeFormat(this.hass.locale?.language||"en",{month:"long",year:"numeric"}).format(t);return j`<div class="weeknav">
      <button class="nav" aria-label=${this._t("prev_month")} @click=${this._prevMonth}>‹</button>
      <button class="nav-now" @click=${this._thisMonth}>${i}</button>
      <button class="nav" aria-label=${this._t("next_month")} @click=${this._nextMonth}>›</button>
    </div>`}_renderMonth(){const{gridStart:e,weeks:t,month:i,year:a}=this._monthGrid(),n=7*t,r=Pe(this.hass,"short",this._firstDayJs),s=new Map;for(const t of this._raw)if(!this._isOff(t.personIdx))for(const i of xe(t,e,n)){const e=s.get(i.day);e?e.push(i):s.set(i.day,[i])}const o=We(new Date).getTime();return j`
      <div class="weekhead">${this._monthNav()}</div>
      ${this._loadError?j`<div class="banner">${this._t("load_error")}</div>`:K}
      <div class="monthwrap">
        <div class="monthhead">${r.map(e=>j`<div class="mhcell">${e}</div>`)}</div>
        <div class="monthgrid">
          ${Array.from({length:n},(t,a)=>{const n=be(e,a),r=n.getMonth()===i,l=n.getTime()===o,d=(s.get(a)||[]).sort((e,t)=>Number(t.allDay)-Number(e.allDay)||e.startMin-t.startMin);return j`
              <div
                class="mcell ${r?"":"out"} ${l?"today":""} ${0===n.getDay()||6===n.getDay()?"wkend":""}"
                role="button"
                tabindex="0"
                @click=${()=>this._goToDate(n)}
                @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._goToDate(n))}}
              >
                <span class="sr">${this._dateLabel(n)}:</span>
                <div class="mtop">
                  <div class="mdate ${l?"today":""}">${n.getDate()}</div>
                  ${this._weatherChip(n,"icon")}
                </div>
                <div class="mchips">
                  ${this._familyOn(n).map(e=>this._familyChip(e,n))}
                  ${d.slice(0,3).map(e=>{const t=this._eventColor(e),i=this._isTentative(e);return j`<div
                      class="mchip ${this._isPast(e)?"past":""} ${i?"tentative":""}"
                      style="background:${t}30;background:color-mix(in srgb, ${t} 22%, var(--card-background-color, #fff));border-left:2px ${i?"dashed":"solid"} ${t}"
                      title="${this._evTitle(e)}"
                      @click=${t=>{t.stopPropagation(),this._openEvent(e)}}
                    >
                      ${e.continuesBefore?"« ":""}${this._evTitle(e)}
                    </div>`})}
                  ${d.length>3?j`<div class="mmore">+${d.length-3}</div>
                          <span class="sr"
                            >${d.slice(3).map(e=>this._evTitle(e)).join(", ")}</span
                          >`:K}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_statusLabel(e){return"home"===e?this._t("status_home"):"not_home"===e?this._t("status_away"):"unknown"===e||"unavailable"===e?"–":e}_onColClick(e,t,i,a,n){const r=this._persons[t];if(!this._personCanCreate(r))return;const s=e.currentTarget.getBoundingClientRect();let o=n+(e.clientY-s.top)/a;const l=this._grid;o=Math.round(o/l)*l,o=Math.max(0,Math.min(o,1440-l)),this._openCreate(t,i,o)}_openCreate(e,t,i){this._openCreateForDate(e,this._dateForDay(t),i)}_openCreateForDate(e,t,i){const a=this._persons[e],n=this._writableCals(a);if(0===n.length)return;const r=We(t),s=i??Math.max(this._startMin,540),o=new Date(r);o.setHours(Math.floor(s/60),s%60,0,0);const l=new Date(o.getTime()+36e5);this._dialog={mode:"create",personIdx:e,calendar:n[0],calendarOptions:n.length>1?n:void 0,canUpdate:!0,canDelete:!1,summary:"",location:"",description:"",allDay:!1,start:Ue(o),end:Ue(l),recurrenceRange:""}}_openEvent(e){const t=e.ref,i=t.calendar,a=this._canUpdate(i)&&!!t.uid,n=this._canDelete(i)&&!!t.uid;this._dialog={mode:"edit",personIdx:t.personIdx,calendar:i,uid:t.uid,recurrence_id:t.recurrence_id,recurring:!(!t.recurrence_id&&!t.rrule),recurrenceRange:"",canUpdate:a,canDelete:n,summary:t.summary,location:t.location??"",description:t.description??"",allDay:t.allDay,start:t.allDay?je(t.start):Ue(t.start),end:t.allDay?je(be(t.end,-1)):Ue(t.end)}}_dlgField(e,t){this._dialog&&(this._dialog={...this._dialog,[e]:t,error:void 0})}_toggleAllDay(e){if(!this._dialog)return;const t=this._dialog;e&&!t.allDay?this._dialog={...t,allDay:e,start:t.start.slice(0,10),end:t.end.slice(0,10),error:void 0}:!e&&t.allDay&&(this._dialog={...t,allDay:e,start:`${t.start}T09:00`,end:`${t.end}T10:00`,error:void 0})}_buildPayload(e){const t={summary:e.summary.trim()||this._t("default_title")};if(e.location.trim()&&(t.location=e.location.trim()),e.description.trim()&&(t.description=e.description.trim()),e.allDay){const i=new Date(`${e.end}T00:00:00`);i.setDate(i.getDate()+1),t.dtstart=e.start,t.dtend=je(i)}else t.dtstart=new Date(e.start).toISOString(),t.dtend=new Date(e.end).toISOString();return t}_validate(e){const t=e.allDay?new Date(`${e.start}T00:00:00`):new Date(e.start),i=e.allDay?new Date(`${e.end}T00:00:00`):new Date(e.end);return isNaN(t.getTime())||isNaN(i.getTime())?this._t("err_invalid"):i.getTime()<t.getTime()?this._t("err_end_before"):e.allDay||i.getTime()!==t.getTime()?null:this._t("err_end_equal")}_dragPreview(e){const t=this._drag;if(!t||t.raw!==e.ref)return{sMin:e.startMin,eMin:e.endMin,dragging:!1};const i=this._dragGrid;if("move"===t.mode){const a=Math.round((e.startMin+t.deltaMin)/i)*i;return{sMin:a,eMin:e.endMin+(a-e.startMin),dragging:!0}}const a=Math.max(i,Math.round((e.endMin-e.startMin+t.deltaMin)/i)*i);return{sMin:e.startMin,eMin:e.startMin+a,dragging:!0}}_draggable(e){return!1!==this._config.drag_drop&&!e.allDay&&!e.ref.rrule&&!!e.ref.uid&&this._canUpdate(e.ref.calendar)&&!e.continuesBefore&&!e.continuesAfter}_onEventPointerDown(e,t,i,a="y"){0===e.button&&this._draggable(t)&&(e.stopPropagation(),this._dragStartY=e.clientY,this._dragStartX=e.clientX,this._dragAxis=a,this._dragPx="x"===a?this._tlPxPerMin:this._pxPerMin,this._dragGrid=this._grid,this._drag={raw:t.ref,mode:i,deltaMin:0,moved:!1,busy:!1},e.target.setPointerCapture?.(e.pointerId),window.addEventListener("pointermove",this._onDragMove),window.addEventListener("pointerup",this._onDragUp))}async _commitDrag(e){const t=e.raw,{start:i,end:a}=function(e,t,i,a,n){const r=Math.max(1,n),s=new Date(e);s.setHours(0,0,0,0);const o=s.getTime(),l=(e.getTime()-o)/6e4,d=(t.getTime()-e.getTime())/6e4;if("move"===a){const e=Math.round((l+i)/r)*r,t=new Date(o+6e4*e);return{start:t,end:new Date(t.getTime()+6e4*d)}}let h=Math.round((d+i)/r)*r;return h<r&&(h=r),{start:e,end:new Date(e.getTime()+6e4*h)}}(t.start,t.end,e.deltaMin,e.mode,this._dragGrid);if(i.getTime()!==t.start.getTime()||a.getTime()!==t.end.getTime()){this._drag={...e,busy:!0};try{const e={summary:t.summary,dtstart:i.toISOString(),dtend:a.toISOString()};t.location&&(e.location=t.location),t.description&&(e.description=t.description),await this.hass.callWS({type:"calendar/event/update",entity_id:t.calendar,uid:t.uid,recurrence_id:t.recurrence_id,recurrence_range:"",event:e}),this._drag=void 0,await this._refetch()}catch(e){this._drag=void 0,this._loadError=!1,await this._refetch()}}else this._drag=void 0}async _saveDialog(){if(!this._dialog)return;const e=this._dialog,t=this._validate(e);if(t)this._dialog={...e,error:t};else{this._dialog={...e,busy:!0,error:void 0};try{const t=this._buildPayload(e);"create"===e.mode?await this.hass.callWS({type:"calendar/event/create",entity_id:e.calendar,event:t}):await this.hass.callWS({type:"calendar/event/update",entity_id:e.calendar,uid:e.uid,recurrence_id:e.recurrence_id,recurrence_range:e.recurring?e.recurrenceRange:"",event:t}),this._dialog=void 0,await this._refetch()}catch(t){this._dialog={...e,busy:!1,error:t?.message||this._t("save_failed")}}}}async _deleteDialog(){if(!this._dialog||!this._dialog.uid)return;const e=this._dialog;this._dialog={...e,busy:!0,error:void 0};try{await this.hass.callWS({type:"calendar/event/delete",entity_id:e.calendar,uid:e.uid,recurrence_id:e.recurrence_id,recurrence_range:e.recurring?e.recurrenceRange:""}),this._dialog=void 0,await this._refetch()}catch(t){this._dialog={...e,busy:!1,error:t?.message||this._t("delete_failed")}}}_closeDialog(){this._dialog=void 0}_renderDialog(){const e=this._dialog,t="edit"===e.mode&&!e.canUpdate,i=this._calLabel(e.calendar),a="create"===e.mode?this._t("new_event"):t?this._t("event"):this._t("edit_event");return j`
      <div
        class="overlay"
        @click=${e=>{e.target===e.currentTarget&&this._closeDialog()}}
      >
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${a} tabindex="-1">
          <div class="dlg-head">
            <span>${a}</span>
            <button class="icon" aria-label=${this._t("close")} @click=${this._closeDialog}>
              ✕
            </button>
          </div>
          ${e.calendarOptions&&e.calendarOptions.length>1?j`<label class="fld">
                  <span>${this._t("field_calendar")}</span>
                  <select
                    .value=${e.calendar}
                    @change=${e=>this._dlgField("calendar",e.target.value)}
                  >
                    ${e.calendarOptions.map(t=>j`<option value=${t} ?selected=${t===e.calendar}>
                          ${this._calLabel(t)}
                        </option>`)}
                  </select>
                </label>`:j`<div class="dlg-cal">${i}</div>`}

          <label class="fld">
            <span>${this._t("field_title")}</span>
            <input
              type="text"
              .value=${e.summary}
              ?disabled=${t}
              autofocus
              @input=${e=>this._dlgField("summary",e.target.value)}
            />
          </label>

          <label class="chk">
            <input
              type="checkbox"
              .checked=${e.allDay}
              ?disabled=${t}
              @change=${e=>this._toggleAllDay(e.target.checked)}
            />
            <span>${this._t("field_all_day")}</span>
          </label>

          <div class="row">
            <label class="fld">
              <span>${this._t("field_start")}</span>
              <input
                type=${e.allDay?"date":"datetime-local"}
                .value=${e.start}
                ?disabled=${t}
                @input=${e=>this._dlgField("start",e.target.value)}
              />
            </label>
            <label class="fld">
              <span>${this._t("field_end")}</span>
              <input
                type=${e.allDay?"date":"datetime-local"}
                .value=${e.end}
                ?disabled=${t}
                @input=${e=>this._dlgField("end",e.target.value)}
              />
            </label>
          </div>

          <label class="fld">
            <span>
              ${this._t("field_location")}
              ${e.location.trim()?j`<a
                      class="maplink"
                      href=${this._mapUrl(e.location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      @click=${e=>e.stopPropagation()}
                      >${this._t("open_map")}</a
                    >`:K}
            </span>
            <input
              type="text"
              .value=${e.location}
              ?disabled=${t}
              @input=${e=>this._dlgField("location",e.target.value)}
            />
          </label>

          <label class="fld">
            <span>${this._t("field_note")}</span>
            <textarea
              rows="2"
              .value=${e.description}
              ?disabled=${t}
              @input=${e=>this._dlgField("description",e.target.value)}
            ></textarea>
          </label>

          ${"edit"===e.mode&&e.recurring&&!t?j`<div class="recur">
                  <span class="recur-label">${this._t("recurring")}</span>
                  <label class="recur-opt">
                    <input
                      type="radio"
                      name="recur"
                      ?checked=${""===e.recurrenceRange}
                      @change=${()=>this._dlgField("recurrenceRange","")}
                    />
                    <span>${this._t("recur_this")}</span>
                  </label>
                  <label class="recur-opt">
                    <input
                      type="radio"
                      name="recur"
                      ?checked=${"THISANDFUTURE"===e.recurrenceRange}
                      @change=${()=>this._dlgField("recurrenceRange","THISANDFUTURE")}
                    />
                    <span>${this._t("recur_future")}</span>
                  </label>
                </div>`:K}
          ${t?j`<div class="ro-note">${this._t("read_only")}</div>`:K}
          ${e.error?j`<div class="dlg-error">${e.error}</div>`:K}

          <div class="dlg-actions">
            ${"edit"===e.mode&&e.canDelete?j`<button class="danger" ?disabled=${e.busy} @click=${this._deleteDialog}>
                    ${this._t("delete")}
                  </button>`:K}
            <span class="spacer"></span>
            <button class="ghost" ?disabled=${e.busy} @click=${this._closeDialog}>
              ${this._t("cancel")}
            </button>
            ${t?K:j`<button class="primary" ?disabled=${e.busy} @click=${this._saveDialog}>
                    ${e.busy?"…":this._t("save")}
                  </button>`}
          </div>
        </div>
      </div>
    `}}Ze.styles=s`
    :host {
      font-family: var(--ha-font-family-body, var(--mdc-typography-font-family, inherit));
      /* grid tokens — theme-aware, calm by default */
      --fb-hourline: var(--divider-color, #8884);
      --fb-halfhour: color-mix(in srgb, var(--divider-color, #8884) 45%, transparent);
      --fb-row-shade: color-mix(in srgb, var(--secondary-text-color, #888) 5%, transparent);
      /* secondary text on tinted event backgrounds: the theme's secondary grey
         drops below a readable contrast there (2.8:1 in dark mode), so derive
         it from the primary text colour instead */
      --fb-soft-text: color-mix(in srgb, var(--primary-text-color, #212121) 85%, transparent);
      /* customization tokens — override via theme or card-mod */
      --fb-accent: var(--primary-color);
      --fb-now-color: var(--error-color, #ff5252);
      --fb-radius: 7px;
      --fb-radius-sm: 5px;
      --fb-avatar-size: 34px;
      --fb-past-opacity: 0.5;
      --fb-title-size: 16px;
      --fb-name-size: 13px;
      --fb-event-size: 11.5px;
      --fb-time-size: 9.5px;
      --fb-chip-size: 10.5px;
    }
    ha-card {
      overflow: hidden;
      color: var(--primary-text-color);
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color);
    }
    /* one-switch compact density */
    :host([compact]) {
      --fb-title-size: 14px;
      --fb-name-size: 11.5px;
      --fb-event-size: 10.5px;
      --fb-time-size: 9px;
      --fb-chip-size: 9.5px;
      --fb-avatar-size: 26px;
      --fb-event-pad: 2px 5px;
      --fb-head-pad: 5px 4px;
      --fb-axis-width: 44px;
    }
    :host([compact]) .top,
    :host([compact]) .dayhead,
    :host([compact]) .weekhead {
      padding: 6px 10px;
    }
    :host([compact]) .tabs {
      margin: 4px 10px 0;
    }
    :host([compact]) .focus {
      padding: 5px 10px;
    }
    :host([compact]) .fchip {
      padding: 4px 8px;
    }
    /* "now / next" glance bar */
    .alerts {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 0 12px 6px;
    }
    .alert {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 9px;
      border-radius: 999px;
      font-size: var(--fb-chip-size, 10.5px);
      line-height: 1.3;
      border: 1px solid var(--divider-color);
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }
    .alert.a-conflict {
      border-color: color-mix(in srgb, var(--error-color, #db4437) 55%, transparent);
      background: color-mix(in srgb, var(--error-color, #db4437) 12%, transparent);
    }
    .alert.a-gap {
      border-color: color-mix(in srgb, var(--warning-color, #ffa600) 60%, transparent);
      background: color-mix(in srgb, var(--warning-color, #ffa600) 14%, transparent);
    }
    .alert small {
      opacity: 0.7;
      margin-left: 3px;
    }
    .focus {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding: 8px 16px;
      border-bottom: 1px solid var(--divider-color);
      scrollbar-width: thin;
    }
    .fchip {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1 1 0;
      min-width: 160px;
      background: var(--secondary-background-color);
      border-radius: 12px;
      padding: 6px 10px;
    }
    .fchip .avatar {
      flex: 0 0 auto;
    }
    .fbody {
      display: flex;
      flex-direction: column;
      min-width: 0;
      line-height: 1.25;
    }
    .fname {
      font-size: 11px;
      color: var(--secondary-text-color);
      font-weight: 600;
    }
    /* block, not flex: on a flex container text-overflow has no effect and a
       chip too narrow for its text would be cut mid-character */
    .fnow,
    .fnext,
    .ffree {
      font-size: 12.5px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .fnow small,
    .fnext small {
      margin-left: 3px;
    }
    .ffree {
      color: var(--secondary-text-color);
      font-weight: 500;
    }
    .fnow small,
    .fnext small {
      color: var(--secondary-text-color);
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }
    .fdot {
      display: inline-block;
      vertical-align: middle;
      width: 8px;
      height: 8px;
      margin-right: 4px;
      border-radius: 50%;
      flex: 0 0 8px;
      animation: fb-pulse 2s ease-out infinite;
    }
    .title {
      font-weight: 600;
      font-size: var(--fb-title-size);
    }
    .switch,
    .tabs {
      display: inline-flex;
      gap: 2px;
      background: var(--secondary-background-color);
      border-radius: 9px;
      padding: 2px;
    }
    /* with many views the toggle may not fit a phone: scroll it, never the card */
    .switch {
      max-width: 100%;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .switch::-webkit-scrollbar {
      display: none;
    }
    .switch button {
      flex: none;
    }
    .switch button,
    .tabs button {
      border: none;
      cursor: pointer;
      background: transparent;
      color: var(--secondary-text-color);
      padding: 5px 12px;
      border-radius: 999px;
      font: inherit;
      font-size: 13px;
      transition:
        background 0.12s ease,
        color 0.12s ease;
    }
    .switch button:hover:not(.on),
    .tabs button:hover:not(.on) {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }
    .switch button.on,
    .tabs button.on {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      font-weight: 600;
      box-shadow: 0 1px 4px color-mix(in srgb, var(--primary-color) 45%, transparent);
    }
    .tabs button.today:not(.on) {
      box-shadow: inset 0 -2px 0 var(--fb-accent);
    }
    .tabs {
      margin: 8px 16px 0;
      flex-wrap: wrap;
    }
    .dayhead,
    .weekhead {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 16px;
      border-bottom: 1px solid var(--divider-color);
      flex-wrap: wrap;
    }
    /* Wrapper only exists for the slim header; normally it must not affect
       layout at all, which is what display: contents buys us. */
    .pmeta {
      display: contents;
    }
    :host([slim]) .pmeta {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 0;
    }
    :host([slim]) .phead {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 7px;
      padding: 5px 6px;
    }
    :host([slim]) .pname,
    :host([slim]) .pstatus {
      text-align: left;
    }
    :host([slim]) .dayhead,
    :host([slim]) .weekhead {
      padding: 5px 12px;
    }
    :host([slim]) .tabs {
      margin: 0;
    }
    .dayname {
      font-weight: 700;
      font-size: 15.5px;
      display: inline-flex;
      align-items: center;
    }
    .weeknav {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .nav,
    .nav-now {
      border: none;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      border-radius: 7px;
      cursor: pointer;
      font: inherit;
      font-size: 13px;
      padding: 5px 10px;
    }
    .nav {
      font-size: 16px;
      line-height: 1;
      padding: 4px 9px;
    }
    .nav-now {
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }
    .banner {
      margin: 8px 16px 0;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12.5px;
      color: var(--text-primary-color, #fff);
      background: var(--error-color, #ff5252);
    }
    .spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 8px;
      vertical-align: middle;
      border: 2px solid var(--divider-color);
      border-top-color: var(--primary-color);
      border-radius: 50%;
      animation: fb-spin 0.7s linear infinite;
    }
    @keyframes fb-spin {
      to {
        transform: rotate(360deg);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .spinner {
        animation-duration: 2s;
      }
    }
    .empty {
      position: absolute;
      top: 0;
      left: var(--fb-axis-width, 56px);
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      font-size: 13px;
      pointer-events: none;
    }
    .board {
      max-height: var(--fb-board-max-height, 58vh);
      overflow: auto;
      margin-top: 8px;
    }
    /* keep header, all-day and body columns pixel-aligned: borders must not
       change box width, or the vertical dividers break between the rows. */
    .axis-spacer,
    .phead,
    .axis,
    .col,
    .allday-cell,
    .allday-label {
      box-sizing: border-box;
    }
    .header-row {
      display: flex;
      position: sticky;
      top: 0;
      z-index: 5;
      background: var(--card-background-color, var(--ha-card-background));
      border-bottom: 1px solid var(--divider-color);
    }
    .axis-spacer {
      width: var(--fb-axis-width, 56px);
      flex: 0 0 var(--fb-axis-width, 56px);
      position: sticky;
      left: 0;
      background: inherit;
    }
    .phead {
      flex: 1 1 0;
      min-width: var(--fb-col-min, 120px);
      padding: var(--fb-head-pad, 10px 6px);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      border-left: 1px solid var(--divider-color);
      position: relative;
    }
    .taskchip {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 3px;
      padding: 2px 6px;
      border-radius: var(--fb-radius-sm, 5px);
      font-size: var(--fb-chip-size, 10.5px);
      line-height: 1.35;
      cursor: pointer;
      border: 1px dashed var(--divider-color);
      color: var(--primary-text-color);
      background: var(--secondary-background-color);
    }
    .taskchip.overdue {
      border-style: solid;
      border-color: color-mix(in srgb, var(--warning-color, #ffa600) 65%, transparent);
      background: color-mix(in srgb, var(--warning-color, #ffa600) 14%, transparent);
    }
    .taskchip .taskbox {
      flex: 0 0 auto;
      width: 12px;
      height: 12px;
      border-radius: 3px;
      border: 1px solid var(--divider-color);
      font-size: 9px;
      line-height: 11px;
      text-align: center;
      opacity: 0.75;
    }
    .taskchip.overdue .taskbox {
      border-color: var(--warning-color, #ffa600);
      color: var(--warning-color, #ffa600);
      font-weight: 700;
      opacity: 1;
    }
    .taskchip .tasktime {
      flex: 0 0 auto;
      margin-left: auto;
      opacity: 0.7;
      font-variant-numeric: tabular-nums;
    }
    .taskchip .tasktext {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /* Sticks right below the person header: the board scrolls to the current
       time on load, and an all-day row inside the scroller would be gone
       before anyone saw it. The offset is the measured header height. */
    .allday-row {
      display: flex;
      position: sticky;
      top: var(--fb-head-h, 0px);
      z-index: 4;
      border-bottom: 1px solid var(--divider-color);
      background: var(--card-background-color, var(--ha-card-background));
    }
    .allday-label {
      font-size: 10px;
      color: var(--secondary-text-color);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 8px;
    }
    .allday-cell {
      flex: 1 1 0;
      min-width: var(--fb-col-min, 120px);
      border-left: 1px solid var(--divider-color);
      padding: 4px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .adchip {
      border-radius: var(--fb-radius-sm);
      padding: 2px 6px;
      font-size: var(--fb-chip-size);
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .avatar {
      width: var(--fb-avatar-size);
      height: var(--fb-avatar-size);
      border-radius: 50%;
      background-size: cover;
      background-position: center;
    }
    .avatar.initials {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #11181f;
      font-weight: 700;
      font-size: 13px;
    }
    .pname {
      font-weight: 600;
      font-size: var(--fb-name-size);
    }
    .pstatus {
      font-size: 10.5px;
      color: var(--secondary-text-color);
    }
    .body {
      display: flex;
      position: relative;
    }
    .axis {
      width: var(--fb-axis-width, 56px);
      flex: 0 0 var(--fb-axis-width, 56px);
      position: sticky;
      left: 0;
      background: var(--card-background-color, var(--ha-card-background));
      z-index: 4;
      border-right: 1px solid var(--divider-color);
    }
    .hour {
      position: absolute;
      right: 8px;
      transform: translateY(-50%);
      font-size: 11px;
      color: var(--secondary-text-color);
      font-variant-numeric: tabular-nums;
    }
    /* first hour label would be clipped by the header above */
    .hour:first-child {
      transform: none;
      margin-top: 1px;
    }
    .col {
      flex: 1 1 0;
      min-width: var(--fb-col-min, 120px);
      position: relative;
      border-left: 1px solid var(--divider-color);
    }
    .col.creatable {
      cursor: copy;
    }
    .event {
      position: absolute;
      border-radius: var(--fb-radius);
      padding: var(--fb-event-pad, 4px 7px);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 2px;
      box-sizing: border-box;
      cursor: pointer;
      z-index: 2;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
      transition:
        box-shadow 0.12s ease,
        transform 0.12s ease;
    }
    .event:hover {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
      transform: translateY(-1px);
      z-index: 4;
    }
    /* long "background" events (OGS, Freispiel …): faint full-width band behind
       the normal event blocks so short lessons keep the full column width. */
    .band {
      position: absolute;
      left: 2px;
      right: 2px;
      border-radius: var(--fb-radius);
      padding: 3px 7px;
      overflow: hidden;
      box-sizing: border-box;
      cursor: pointer;
      z-index: 1;
      display: flex;
      justify-content: flex-end; /* keep label clear of left-aligned event blocks */
      align-items: flex-start;
    }
    .band .etitle {
      max-width: 90%;
      font-weight: 600;
      font-size: 10px;
      color: var(--primary-text-color);
      border-radius: 999px;
      padding: 1px 8px;
    }
    .cicon {
      --mdc-icon-size: 13px;
      width: 13px;
      height: 13px;
      vertical-align: -2px;
      margin-right: 3px;
      opacity: 0.85;
    }
    .event.draggable {
      touch-action: none;
      cursor: grab;
    }
    .event.dragging {
      cursor: grabbing;
      z-index: 20;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
      opacity: 0.94;
      transition: none;
    }
    /* resize grabber at the bottom edge */
    .rz {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 9px;
      cursor: ns-resize;
      touch-action: none;
    }
    .rz::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 2px;
      width: 20px;
      height: 3px;
      transform: translateX(-50%);
      border-radius: 2px;
      background: currentColor;
      opacity: 0;
      transition: opacity 0.12s ease;
    }
    .event.draggable:hover .rz::after {
      opacity: 0.4;
    }
    .event.tentative {
      opacity: 0.72;
      border-style: dashed;
      background-image: repeating-linear-gradient(
        135deg,
        transparent 0 6px,
        rgba(255, 255, 255, 0.06) 6px 12px
      );
    }
    .event.overflow {
      background: var(--secondary-background-color);
      border: 1px dashed var(--divider-color);
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      z-index: 6;
    }
    .event.overflow .etitle {
      font-weight: 700;
    }
    /* very short events (breaks etc.): thin single-line strip drawn on top so
       neighbours' min-height can't cover them */
    .event.slim {
      z-index: 3;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      padding: 0 5px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .event.slim .etitle {
      font-size: calc(var(--fb-event-size) - 1.5px);
      font-weight: 600;
    }
    .event.slim .etime,
    .event.slim .eprog {
      display: none;
    }
    .phead {
      cursor: pointer;
    }
    .phead.off,
    .col.off,
    .allday-cell.off {
      flex: 0 0 48px;
      min-width: 48px;
    }
    .phead.off .avatar,
    .wphead.off .avatar,
    .tlrow.off .avatar {
      opacity: 0.35;
      filter: grayscale(0.8);
    }
    .wphead {
      cursor: pointer;
    }
    .wphead.off span {
      opacity: 0.4;
    }
    .tlperson {
      cursor: pointer;
    }
    .tlrow.off .pname,
    .tlrow.off .pstatus {
      opacity: 0.4;
    }
    .pbadges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3px;
      margin-top: 2px;
    }
    .pbadge {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      font-size: 10px;
      font-weight: 600;
      color: var(--secondary-text-color);
      background: var(--secondary-background-color);
      border-radius: 999px;
      padding: 1px 7px;
      cursor: pointer;
      white-space: nowrap;
    }
    .pbadge ha-icon {
      --mdc-icon-size: 12px;
      width: 12px;
      height: 12px;
      display: inline-flex;
      align-items: center;
    }
    @media (pointer: coarse) {
      .switch button,
      .tabs button {
        padding: 8px 14px;
      }
    }
    /* phones: tighter columns, smaller chrome, everything still scrollable */
    @media (max-width: 600px) {
      .focus {
        flex-wrap: wrap;
        overflow-x: visible;
      }
      .fchip {
        min-width: 140px;
      }
      :host {
        --fb-col-min: 96px;
        --fb-avatar-size: 28px;
        --fb-axis-width: 42px;
        --fb-title-size: 14px;
        --fb-name-size: 11.5px;
        --fb-event-size: 10.5px;
        --fb-chip-size: 10px;
      }
      .top {
        flex-wrap: wrap;
        gap: 6px;
      }
      .switch button {
        padding: 5px 9px;
      }
      .phead {
        padding: 6px 4px;
        gap: 2px;
      }
      .hour {
        font-size: 9.5px;
        right: 4px;
      }
      .weeknav {
        gap: 4px;
      }
      .band .etitle {
        font-size: 9px;
        padding: 1px 6px;
      }
      .pbadge {
        font-size: 9px;
        padding: 1px 5px;
      }
    }
    .wchip,
    .adchip,
    .mchip {
      transition: box-shadow 0.12s ease;
    }
    .wchip:hover,
    .adchip:hover,
    .mchip:hover {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    }
    .agenda-row {
      transition: background 0.12s ease;
    }
    .agenda-row.task .agenda-title {
      font-weight: 600;
    }
    .agenda-row.task.overdue .agenda-title {
      color: var(--warning-color, #ffa600);
    }
    .agenda-row:hover {
      background: var(--secondary-background-color);
    }
    .wchip.tentative,
    .mchip.tentative,
    .adchip.tentative {
      opacity: 0.72;
      border-style: dashed;
    }
    .agenda-row.tentative .agenda-bar {
      opacity: 0.55;
    }
    .agenda-row.tentative .agenda-title {
      font-style: italic;
    }
    .etitle {
      font-size: var(--fb-event-size);
      font-weight: 600;
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .etime {
      font-size: var(--fb-time-size);
      color: var(--fb-soft-text);
      font-variant-numeric: tabular-nums;
    }
    .nowline {
      position: absolute;
      left: var(--fb-axis-width, 56px);
      right: 0;
      border-top: 2px solid var(--fb-now-color);
      z-index: 7;
      pointer-events: none;
    }
    .nowline::after {
      content: "";
      position: absolute;
      left: -3px;
      top: -5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--fb-now-color);
      animation: fb-pulse 2s ease-out infinite;
    }
    @keyframes fb-pulse {
      0%,
      100% {
        box-shadow: 0 0 0 0 color-mix(in srgb, var(--fb-now-color) 40%, transparent);
      }
      50% {
        box-shadow: 0 0 0 7px transparent;
      }
    }
    @keyframes fb-fade {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }
    .board,
    .weekwrap,
    .agenda,
    .monthgrid {
      animation: fb-fade 0.18s ease;
    }
    .board::-webkit-scrollbar,
    .weekwrap::-webkit-scrollbar,
    .agenda::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .board::-webkit-scrollbar-thumb,
    .weekwrap::-webkit-scrollbar-thumb,
    .agenda::-webkit-scrollbar-thumb {
      background: var(--divider-color);
      border-radius: 8px;
    }
    @media (prefers-reduced-motion: reduce) {
      .board,
      .weekwrap,
      .agenda,
      .monthgrid,
      .nowline::after,
      .event {
        animation: none !important;
        transition: none !important;
      }
    }
    .nowline span {
      position: absolute;
      left: -50px;
      top: -8px;
      font-size: 10px;
      font-weight: 600;
      color: var(--text-primary-color, #fff);
      background: var(--fb-now-color);
      padding: 1px 5px;
      border-radius: 5px;
      font-variant-numeric: tabular-nums;
    }
    /* timeline (horizontal) */
    .tlwrap {
      overflow: auto;
      max-height: var(--fb-board-max-height, 58vh);
      margin-top: 8px;
      animation: fb-fade 0.18s ease;
    }
    .tlgrid {
      position: relative;
    }
    .tlhead {
      display: flex;
      position: sticky;
      top: 0;
      z-index: 5;
      background: var(--card-background-color, var(--ha-card-background));
      border-bottom: 1px solid var(--divider-color);
      height: 26px;
    }
    .tlcorner {
      width: var(--fb-tl-label, 150px);
      flex: 0 0 var(--fb-tl-label, 150px);
      position: sticky;
      left: 0;
      background: inherit;
      z-index: 2;
    }
    .tlhours {
      position: relative;
    }
    .tlhour {
      position: absolute;
      top: 5px;
      transform: translateX(-50%);
      font-size: 10.5px;
      color: var(--secondary-text-color);
      font-variant-numeric: tabular-nums;
    }
    /* the outer labels would be half cut off by the scroll box: pull the first
       one inside the grid and hang the last one to the left of its line */
    .tlhour:first-child {
      transform: none;
    }
    .tlhour:last-child {
      transform: translateX(-100%);
    }
    .tlrow {
      display: flex;
      border-bottom: 1px solid var(--divider-color);
    }
    .tlperson {
      width: var(--fb-tl-label, 150px);
      flex: 0 0 var(--fb-tl-label, 150px);
      position: sticky;
      left: 0;
      z-index: 4;
      background: var(--card-background-color, var(--ha-card-background));
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      box-sizing: border-box;
      border-right: 1px solid var(--divider-color);
    }
    .tlperson .pname {
      font-size: 12.5px;
    }
    .tlcanvas {
      position: relative;
      flex: 0 0 auto;
    }
    .tlcanvas.creatable {
      cursor: copy;
    }
    .tlbar {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 7px;
      border-radius: var(--fb-radius);
      overflow: hidden;
      box-sizing: border-box;
      cursor: pointer;
      white-space: nowrap;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
      transition:
        box-shadow 0.12s ease,
        transform 0.12s ease;
    }
    .tlbar.draggable {
      cursor: grab;
      touch-action: pan-y;
    }
    .tlbar.dragging {
      cursor: grabbing;
      z-index: 20;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
      opacity: 0.94;
      transition: none;
    }
    /* resize grabber on the right edge (timeline runs horizontally) */
    .rzx {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 9px;
      cursor: ew-resize;
      touch-action: none;
    }
    .rzx::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 3px;
      transform: translateY(-50%);
      height: 12px;
      width: 2px;
      border-radius: 1px;
      background: currentColor;
      opacity: 0;
      transition: opacity 0.12s ease;
    }
    .tlbar:hover .rzx::after {
      opacity: 0.45;
    }
    .tlbar:hover {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
      transform: translateY(-1px);
      z-index: 3;
    }
    .tlbar.tentative {
      opacity: 0.72;
      border-style: dashed;
    }
    .tlbar .etime {
      flex: 0 0 auto;
    }
    .tlnow {
      position: absolute;
      top: 0;
      bottom: 0;
      border-left: 2px solid var(--fb-now-color);
      z-index: 6;
      pointer-events: none;
    }
    .tlnow span {
      position: absolute;
      top: 2px;
      left: -1px;
      transform: translateX(-50%);
      font-size: 10px;
      font-weight: 600;
      color: var(--text-primary-color, #fff);
      background: var(--fb-now-color);
      padding: 1px 5px;
      border-radius: 5px;
      font-variant-numeric: tabular-nums;
    }
    /* agenda */
    .agenda {
      max-height: 60vh;
      overflow: auto;
      padding: 4px 0 8px;
    }
    .agenda-empty {
      padding: 28px 16px;
      text-align: center;
      color: var(--secondary-text-color);
      font-size: 13px;
    }
    .agenda-day {
      padding: 0 12px;
    }
    .agenda-date {
      position: sticky;
      top: 0;
      z-index: 2;
      background: var(--card-background-color, var(--ha-card-background));
      font-weight: 600;
      font-size: 13px;
      padding: 8px 4px 4px;
      border-bottom: 1px solid var(--divider-color);
    }
    .agenda-date.today {
      color: var(--primary-color);
    }
    .agenda-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 4px;
      cursor: pointer;
      border-bottom: 1px solid var(--divider-color);
    }
    .agenda-row:hover {
      background: var(--secondary-background-color);
    }
    .agenda-time {
      flex: 0 0 auto;
      min-width: var(--fb-date-width, 92px);
      white-space: nowrap;
      font-size: 12px;
      color: var(--secondary-text-color);
      font-variant-numeric: tabular-nums;
    }
    .agenda-bar {
      flex: 0 0 4px;
      align-self: stretch;
      border-radius: 2px;
    }
    .agenda-main {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .agenda-title {
      font-size: 13.5px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .agenda-meta {
      font-size: 11px;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* month */
    .monthwrap {
      overflow: auto;
      max-height: 62vh;
      padding: 0 8px 8px;
    }
    .monthhead {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      position: sticky;
      top: 0;
      z-index: 2;
      background: var(--card-background-color, var(--ha-card-background));
    }
    .mhcell {
      text-align: center;
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color);
      padding: 6px 0;
      border-bottom: 1px solid var(--divider-color);
    }
    .monthgrid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-auto-rows: minmax(64px, 1fr);
    }
    .mcell {
      border-right: 1px solid var(--divider-color);
      border-bottom: 1px solid var(--divider-color);
      padding: 3px;
      cursor: pointer;
      overflow: hidden;
      box-sizing: border-box;
    }
    .mcell:nth-child(7n) {
      border-right: none;
    }
    .mcell.out {
      background: color-mix(in srgb, var(--secondary-text-color, #888) 4%, transparent);
    }
    .mcell.out .mdate {
      opacity: 0.45;
    }
    .mcell:hover {
      background: var(--secondary-background-color);
    }
    .mcell.today {
      background: color-mix(in srgb, var(--fb-accent) 7%, transparent);
      box-shadow: inset 0 0 0 1.5px var(--fb-accent);
    }
    .mcell.wkend:not(.today) {
      background: color-mix(in srgb, var(--secondary-text-color, #888) 3.5%, transparent);
    }
    .mdate {
      font-size: 12px;
      font-weight: 600;
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-variant-numeric: tabular-nums;
    }
    .mdate.today {
      background: var(--fb-accent);
      color: var(--text-primary-color, #fff);
      border-radius: 50%;
    }
    .mchips {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-top: 2px;
    }
    .mchip {
      font-size: 10px;
      font-weight: 600;
      padding: 1px 4px;
      border-radius: 3px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .mmore {
      font-size: 9.5px;
      color: var(--secondary-text-color);
      padding-left: 4px;
    }
    /* text only for screen readers (the visible text stays part of the name) */
    .sr {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
    /* containing block for .sr (the week's .wday already is one: sticky) */
    .mcell {
      position: relative;
    }

    /* shared family calendars: holidays, bin collection … above the people */
    .famband {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 6px;
      padding: 6px 16px;
      border-bottom: 1px solid var(--divider-color);
    }
    .now .famband,
    .agenda .famband {
      padding: 0 0 8px;
      border-bottom: none;
    }
    .agenda .famband {
      padding-top: 6px;
    }
    .famchip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      max-width: 100%;
      min-width: 0;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.3;
      padding: 2px 8px;
      border-radius: 999px;
      border: 1px dashed var(--fc);
      background: color-mix(in srgb, var(--fc) 10%, var(--card-background-color, #fff));
      color: var(--primary-text-color);
    }
    .famchip ha-icon {
      --mdc-icon-size: 14px;
      color: var(--fc);
      flex: none;
    }
    .famchip b {
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }
    .famtext {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .wday .famchip,
    .mchips .famchip {
      font-size: 10px;
      padding: 1px 6px;
      align-self: stretch;
    }
    /* the week's day column is narrow: let a title take two lines there */
    .wday .famchip {
      border-radius: 8px;
      flex-wrap: wrap;
      row-gap: 0;
    }
    .wday .famtext {
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow-wrap: break-word;
      hyphens: auto;
    }
    .wday:has(.famchip) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 3px;
    }

    /* "now" view: large, calm glance for wall tablets and small displays */
    .now {
      padding: 12px 16px 16px;
    }
    .nowhead {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 4px 14px;
      margin-bottom: 12px;
    }
    .nowclock {
      font-size: clamp(32px, 7vw, 56px);
      font-weight: 700;
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .nowdate {
      font-size: clamp(14px, 2.4vw, 18px);
      color: var(--secondary-text-color);
    }
    .nowhead .wx {
      align-self: center;
      margin-left: 0;
    }
    .nowlist {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
      gap: 10px;
    }
    .nrow {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      padding: 12px 14px;
      border-radius: var(--fb-radius);
      background: color-mix(in srgb, var(--pc) 9%, var(--card-background-color, #fff));
      border-left: 4px solid var(--pc);
      min-width: 0;
    }
    .nrow .avatar {
      width: 44px;
      height: 44px;
      flex: none;
      font-size: 15px;
    }
    .nbody {
      min-width: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .nname {
      font-weight: 700;
      font-size: 15px;
      display: flex;
      align-items: baseline;
      gap: 8px;
    }
    .nstat {
      font-weight: 400;
      font-size: 12px;
      color: var(--fb-soft-text);
    }
    .nallday {
      align-self: flex-start;
      font-size: 12px;
      font-weight: 600;
      padding: 1px 8px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--pc) 22%, transparent);
    }
    .ncur {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 2px 8px;
      font-size: clamp(17px, 2.6vw, 22px);
      font-weight: 700;
      line-height: 1.25;
    }
    .ncur .ntitle {
      min-width: 0;
      overflow-wrap: anywhere;
    }
    .ndot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--pc);
      align-self: center;
      flex: none;
    }
    .nuntil {
      font-size: 13px;
      font-weight: 500;
      color: var(--fb-soft-text);
    }
    .nfree {
      color: var(--secondary-text-color);
      font-weight: 500;
    }
    .nprog {
      flex-basis: 100%;
      height: 4px;
      border-radius: 2px;
      background: color-mix(in srgb, var(--pc) 20%, transparent);
      overflow: hidden;
      margin-top: 2px;
    }
    .nprog i {
      display: block;
      height: 100%;
      background: var(--pc);
    }
    .nnext {
      font-size: 14px;
      color: var(--fb-soft-text);
      overflow-wrap: anywhere;
    }
    .nnext b {
      color: var(--primary-text-color);
      font-weight: 600;
      white-space: nowrap;
    }
    /* weather chip */
    .wx {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      font-size: 12px;
      font-weight: 600;
      color: var(--secondary-text-color);
      vertical-align: middle;
      font-variant-numeric: tabular-nums;
      background: var(--secondary-background-color);
      border-radius: 999px;
      padding: 2px 9px 2px 5px;
      margin-left: 6px;
    }
    .wx ha-icon {
      --mdc-icon-size: 18px;
      color: var(--primary-text-color);
    }
    .agenda-date .wx {
      margin-left: 4px;
    }
    .wx.short {
      font-size: 11px;
      padding: 1px 6px 1px 3px;
      margin-left: 4px;
    }
    .wx.short ha-icon {
      --mdc-icon-size: 15px;
    }
    /* the week's day column is narrow: weather goes under the weekday */
    .wday:has(.wx) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 3px;
    }
    .wday .wx.short {
      margin-left: 0;
    }
    .wx.icon {
      background: none;
      padding: 0;
      margin: 0;
    }
    .wx.icon ha-icon {
      --mdc-icon-size: 15px;
      color: var(--secondary-text-color);
    }
    .mtop {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    /* faded past events + map link */
    .past {
      opacity: var(--fb-past-opacity);
    }
    /* progress bar inside a running day event */
    .eprog {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 3px;
      background: var(--divider-color);
    }
    .eprog > div {
      height: 100%;
      background: var(--fb-now-color);
    }
    /* agenda: countdown + running progress */
    .agenda-cd {
      flex: 0 0 auto;
      font-size: 11px;
      font-weight: 600;
      color: var(--primary-color);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .agenda-row.current {
      background: color-mix(in srgb, var(--fb-accent) 6%, transparent);
    }
    .agenda-prog {
      display: block;
      height: 3px;
      margin-top: 4px;
      border-radius: 2px;
      background: var(--divider-color);
      overflow: hidden;
    }
    .agenda-prog > span {
      display: block;
      height: 100%;
    }
    .maplink {
      margin-left: 8px;
      font-size: 11px;
      color: var(--primary-color);
      text-decoration: none;
    }
    .maplink:hover {
      text-decoration: underline;
    }
    /* week */
    .weekwrap {
      overflow: auto;
      max-height: 60vh;
    }
    .month-table.full-month {
      max-height: none;
    }
    .month-table {
      --fb-month-chip-size: max(8px, calc(var(--fb-month-font-size) - 2px));
      --fb-month-time-size: max(8px, calc(var(--fb-month-font-size) - 4px));
      --fb-month-name-size: calc(var(--fb-month-font-size) - 0.5px);
      --fb-month-weather-size: calc(var(--fb-month-font-size) - 1.5px);
    }
    .month-table .wday {
      box-sizing: border-box;
      min-width: var(--fb-date-width, 92px);
      flex-direction: column;
      justify-content: center;
      gap: 2px;
      padding-block: calc(var(--fb-month-row-padding, 4px) * 2);
      font-size: var(--fb-month-font-size, 12.5px);
    }
    .month-date {
      display: flex;
      flex-direction: column;
      align-items: inherit;
      gap: 2px;
      white-space: nowrap;
    }
    .month-table.inline-date .month-date {
      flex-direction: row;
      align-items: baseline;
      gap: 4px;
    }
    .month-table .wcell {
      min-height: var(--fb-month-row-height, 48px);
      padding-block: var(--fb-month-row-padding, 4px);
      gap: var(--fb-month-event-gap, 3px);
    }
    .month-table .wchip {
      padding-block: max(1px, calc(var(--fb-month-row-padding, 4px) - 1px));
    }
    .month-table .wchip span {
      font-size: var(--fb-month-chip-size, var(--fb-chip-size));
    }
    .month-table .wchip small {
      font-size: var(--fb-month-time-size, 8.5px);
    }
    .month-table .wphead {
      font-size: var(--fb-month-name-size, 12px);
    }
    .month-table .wphead > span {
      min-width: 0;
      overflow-wrap: anywhere;
    }
    .month-table .wphead .avatar {
      flex: none;
    }
    .month-table.compact-header .wphead {
      flex-direction: row;
      justify-content: center;
    }
    .month-table.compact-header .wphead .avatar {
      width: 22px;
      height: 22px;
    }
    .month-table .wx.short {
      font-size: var(--fb-month-weather-size, 11px);
    }
    .weekgrid {
      display: grid;
    }
    .corner {
      position: sticky;
      left: 0;
      top: 0;
      z-index: 6;
      background: var(--card-background-color, var(--ha-card-background));
      border-bottom: 1px solid var(--divider-color);
    }
    .wphead {
      position: sticky;
      top: 0;
      z-index: 5;
      background: var(--card-background-color, var(--ha-card-background));
      border-bottom: 1px solid var(--divider-color);
      border-left: 1px solid var(--divider-color);
      padding: 8px 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      font-weight: 600;
    }
    .wphead .avatar {
      width: 28px;
      height: 28px;
    }
    .wday {
      position: sticky;
      left: 0;
      z-index: 4;
      background: var(--card-background-color, var(--ha-card-background));
      border-right: 1px solid var(--divider-color);
      border-bottom: 1px solid var(--divider-color);
      padding: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 12.5px;
    }
    .wcell {
      min-height: 70px;
      border-left: 1px solid var(--divider-color);
      border-bottom: 1px solid var(--divider-color);
      padding: 4px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .wcell.creatable {
      cursor: copy;
    }
    .wday.today,
    .wcell.today {
      background: color-mix(in srgb, var(--fb-accent) 8%, transparent);
    }
    .wchip {
      border-radius: var(--fb-radius-sm);
      padding: 3px 5px;
      display: flex;
      align-items: center;
      gap: 4px;
      overflow: hidden;
      cursor: pointer;
    }
    .wchip span {
      font-size: var(--fb-chip-size);
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .wchip small {
      margin-left: auto;
      font-size: 8.5px;
      color: var(--fb-soft-text);
      font-variant-numeric: tabular-nums;
    }
    /* focus visibility for a11y */
    button:focus-visible,
    .event:focus-visible,
    .wchip:focus-visible,
    .adchip:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 1px;
    }

    /* Optional wall-display controls, scoped to the card chrome. */
    :host([nav-bottom]) .weekhead:empty {
      display: none;
    }
    .bottom-nav {
      border-top: 1px solid var(--divider-color);
    }
    :host([spread-nav]) .weeknav {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      width: 100%;
    }
    :host([spread-nav]) .weeknav > :first-child {
      justify-self: start;
    }
    :host([spread-nav]) .weeknav > :last-child {
      justify-self: end;
    }
    :host([spread-nav]) .weeknav .nav {
      min-width: min(var(--fb-arrow-width, 0px), 100%);
      max-width: 100%;
    }
    :host([equal-views]) .switch {
      display: inline-flex;
    }
    :host([equal-views]) .switch button {
      flex: 0 0 var(--fb-view-button-width, auto);
    }
    .switch button,
    .tabs button,
    .weeknav button {
      min-height: var(--fb-control-height, 0px);
      font-size: var(--fb-control-font, 13px);
      box-sizing: border-box;
      white-space: nowrap;
    }
    .weeknav .nav {
      min-width: var(--fb-arrow-width, 0px);
      font-size: var(--fb-control-font, 16px);
    }
    .month-table.fill-month {
      max-height: none;
    }
    .month-table.fill-month .weekgrid {
      min-height: var(--fb-month-available, 0px);
      grid-template-rows: min-content;
    }
    .date-main {
      display: flex;
      flex-direction: column;
      align-items: inherit;
      gap: 2px;
      max-width: 100%;
      width: 100%;
    }
    .date-family {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      gap: 2px;
      min-width: 0;
      contain: inline-size;
    }
    .wday:has(.famchip) .date-main {
      align-items: flex-start;
    }
    .month-table .wday {
      gap: 0;
    }
    .month-table:not(.indicator-only) .wday.has-markers {
      justify-content: flex-start;
    }
    .date-markers {
      display: block;
      flex: 1 1 0;
      contain: size;
      min-height: 0;
      width: 100%;
      overflow: hidden;
      font-size: var(--fb-marker-font, 11px);
      text-align: left;
    }
    .date-marker-text,
    .date-marker-chip {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 1.3;
    }
    .date-marker-chip {
      border-left: 3px solid var(--fc);
      background: color-mix(in srgb, var(--fc) 22%, transparent);
      border-radius: 3px;
      padding: 1px 3px;
    }
    .month-table.grow-markers .date-markers {
      flex: none;
      contain: inline-size;
    }
    /* dialog */
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99;
      padding: 16px;
    }
    .dialog {
      background: var(--card-background-color, var(--ha-card-background, #fff));
      color: var(--primary-text-color);
      border-radius: 14px;
      padding: 16px;
      width: 100%;
      max-width: 420px;
      max-height: 90vh;
      overflow: auto;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
    }
    .dlg-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      font-size: 16px;
    }
    .dlg-cal {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin: 2px 0 10px;
    }
    .icon {
      border: none;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      font-size: 16px;
    }
    .fld {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-bottom: 10px;
    }
    .fld > span {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    /* Start and end sit side by side only while both actually fit. A flex item
       defaults to min-width: auto, so without the wrap the end field used to be
       pushed out past the dialog edge. How wide a datetime-local control is
       depends on the BROWSER locale (a 12-hour "09:50 AM" needs noticeably more
       room than "09:50"), so the breakpoint cannot be a fixed pixel value -
       min-content lets the browser decide and the row stacks when it must. */
    .row > .fld {
      flex: 1 1 auto;
      min-width: min-content;
    }
    .row .fld {
      flex: 1;
    }
    input,
    textarea,
    select {
      font: inherit;
      font-size: 14px;
      color: var(--primary-text-color);
      background: var(--secondary-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 8px 10px;
      box-sizing: border-box;
      width: 100%;
    }
    input:disabled,
    textarea:disabled {
      opacity: 0.7;
    }
    .recur {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px 12px;
      margin-bottom: 10px;
      padding: 8px 10px;
      border-radius: 8px;
      background: var(--secondary-background-color);
    }
    .recur-label {
      font-size: 12px;
      color: var(--secondary-text-color);
      width: 100%;
    }
    .recur-opt {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      cursor: pointer;
    }
    .recur-opt input {
      width: auto;
    }
    .chk {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      font-size: 13px;
    }
    .chk input {
      width: auto;
    }
    .ro-note {
      font-size: 12px;
      color: var(--secondary-text-color);
      background: var(--secondary-background-color);
      border-radius: 8px;
      padding: 8px 10px;
      margin-bottom: 10px;
    }
    .dlg-error {
      font-size: 12.5px;
      color: var(--error-color, #ff5252);
      margin-bottom: 10px;
    }
    .dlg-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }
    .dlg-actions .spacer {
      flex: 1;
    }
    .dlg-actions button {
      border: none;
      border-radius: 8px;
      padding: 8px 14px;
      cursor: pointer;
      font: inherit;
      font-size: 13px;
      font-weight: 600;
    }
    .primary {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
    }
    .ghost {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }
    .danger {
      background: var(--error-color, #ff5252);
      color: #fff;
    }
    button:disabled {
      opacity: 0.6;
      cursor: default;
    }
  `,e([ge({attribute:!1})],Ze.prototype,"hass",void 0),e([fe()],Ze.prototype,"_config",void 0),e([fe()],Ze.prototype,"_events",void 0),e([fe()],Ze.prototype,"_view",void 0),e([fe()],Ze.prototype,"_day",void 0),e([fe()],Ze.prototype,"_weekOffset",void 0),e([fe()],Ze.prototype,"_monthOffset",void 0),e([fe()],Ze.prototype,"_dialog",void 0),e([fe()],Ze.prototype,"_loadError",void 0),e([fe()],Ze.prototype,"_loading",void 0),e([fe()],Ze.prototype,"_fitPx",void 0),e([fe()],Ze.prototype,"_hiddenP",void 0),e([fe()],Ze.prototype,"_drag",void 0),e([fe()],Ze.prototype,"_family",void 0),e([fe()],Ze.prototype,"_tasks",void 0),e([fe()],Ze.prototype,"_forecast",void 0),customElements.get("family-board-card-month-table")||customElements.define("family-board-card-month-table",Ze),window.customCards=window.customCards||[],window.customCards.push({type:"family-board-card-month-table",name:"Family Board Card – Month Table",description:"Family calendar with a days-by-person month table; can be used alongside the original Family Board Card.",preview:!0,documentationURL:"https://github.com/HartLander/ha-family-board-card-month-table"}),console.info("%c FAMILY-BOARD-CARD-MONTH-TABLE %c v0.31.2-month-table.4 ","background:#5B8CFF;color:#fff;border-radius:3px 0 0 3px","background:#222;color:#fff;border-radius:0 3px 3px 0");const Je={l_month_table_weekend_style:"Weekend highlighting style",l_month_table_marker_style:"Calendar marking style",h_month_table_weekend_style:"Left line, background, both or underline. Default: background.",h_month_table_marker_style:"Default: left line and background. Full-row highlighting extends backgrounds and underlines; the left line stays at the date.",o_highlight_line:"Left line only",o_highlight_background:"Background only",o_highlight_both:"Left line and background",o_highlight_underline:"Underline",l_header_position:"Title and view buttons: position",l_navigation_position:"Month/week navigation: position",l_navigation_layout:"Navigation button arrangement",l_equal_view_buttons:"View buttons: all as wide as the longest label",l_controls_height:"Button minimum height",l_controls_font_size:"Button font size",l_navigation_arrow_width:"Navigation arrow minimum width",l_month_table_fill_height:"Month table: fill available screen height",l_month_table_saturday_color:"Month table: Saturday color",l_month_table_sunday_color:"Month table: Sunday color",l_month_table_weekend_full_row:"Weekend color across the entire day row",l_month_table_marker_full_row:"Marking calendar color across the entire day row",h_month_table_weekend_full_row:"Extends weekend backgrounds and underlines to person cells. Independent of calendar highlighting. Off by default.",h_month_table_marker_full_row:"Extends calendar backgrounds and underlines to person cells. Takes precedence over weekend row colors. Off by default.",l_month_table_marker_calendars:"Month table: calendars marking the date",l_month_table_marker_keep_columns:"Also show marking calendars in person columns",l_month_table_marker_mode:"Date marking: display style",l_month_table_marker_color:"Date marking: custom highlight color",l_month_table_marker_text_color:"Date marking: text color",l_month_table_marker_font_size:"Date marking: font size",l_month_table_marker_grow:"Allow marking text to increase row height",l_month_table_date_width:"Month table: minimum date column width",h_controls_height:"For touch screens, try 44 px. Empty keeps the existing size.",h_month_table_fill_height:"Stretches short months to the bottom of the screen; busy rows may need more space.",h_month_table_marker_calendars:"Any calendar, including ones not assigned to a person. Selected sources mark only the date field.",h_month_table_marker_keep_columns:"Off hides dedicated columns and those events from mixed-calendar columns in this view.",h_month_table_marker_color:"Empty uses the calendar mapping color, then the person color. First selected calendar wins on overlaps.",h_month_table_marker_grow:"Off: text uses spare row space and is clipped when needed; color and tooltip stay visible. On: rows grow to show all text.",h_month_table_date_width:"92–280 px, default 92 px. Adding calendars never widens the date column; larger date fonts still fit.",h_month_table_saturday_color:"Tint for Saturday date fields; calendar markings take precedence.",h_month_table_sunday_color:"Tint for Sunday date fields; calendar markings take precedence.",o_top:"Top",o_bottom:"Bottom",o_nav_compact:"Together",o_nav_spread:"Left arrow / centered date / right arrow",o_marker_text:"Text below the date",o_marker_chip:"Event chip below the date",o_marker_indicator:"Color indicator only",l_title:"Card title",l_refresh_interval:"Auto refresh (sec., 0 = off)",l_view:"Default view",l_views:"Available views (switcher)",l_time_grid:"Time grid",l_start_hour:"Start hour",l_end_hour:"End hour",l_hour_height:"Height per hour",l_hour_width:"Timeline: width per hour",l_fit_height:"Auto-fit: squeeze the day so it fits without scrolling",l_full_height:"Full height: stretch to the bottom of the screen",l_month_table_full_height:"Show the entire month in the month table",l_month_table_inline_date:"Month table: weekday and date on one line",l_month_table_compact_header:"Month table: avatar beside name",l_month_table_font_size:"Month table: font size",l_month_table_row_height:"Month table: minimum row height",l_month_table_row_padding:"Month table: vertical padding",l_month_table_event_gap:"Month table: gap between events",l_trim_hours:"Hide empty hours at the edges",l_col_min_width:"Min. column width per person",l_background_hours:"Show long events as a background band from (hrs.)",l_max_columns:"Max. columns per day",l_first_day:"Week starts on",l_scroll_to_now:"Auto-scroll to now",l_day_offset:"Start on (days from today)",l_slim_header:"Slim header",l_color_by:"Color by",l_show_weekends:"Show weekend",l_show_now_line:"Now line",l_dim_past:"Dim past events",l_show_progress:"Show progress bar",l_hide_patterns:"Hide events",l_show_patterns:"Only show events matching",l_replace_patterns:"Replace titles",l_filter_duplicates:"Merge duplicate events",l_hide_past:"Agenda: hide days that are over",l_tentative_patterns:"Mark as tentative",l_auto_icons:"Auto icons by keyword",l_icon_patterns:"Custom icon rules",l_show_focus:"“Now / next” bar",l_show_alerts:"Day check (double bookings, gaps, nobody home)",l_gap_min:"Flag a gap from (min., 0 = off)",l_drag_drop:"Move events by dragging (day view)",l_family_calendars:"Family calendars",l_weather_entity:"Weather entity",l_show_weather:"Show weather",l_hide_empty_persons:"Week/month table: hide persons without events",l_auto_return:"Return to the start view after idle (min., 0 = off)",l_event_size:"Event font size",l_radius:"Corner radius of the blocks",l_past_opacity:"Opacity of past events",l_name:"Display name",l_person:"Person (avatar & status)",l_calendar:"Calendars (multiple possible)",l_tasks:"Task lists (due items appear on the board)",l_color:"Custom color (hex, optional)",l_badges:"Badges (e.g. battery, sensors)",l_hidden:"Hidden on start",l_compact:"Compact layout",l_map_url:"Map link (template)",h_scroll_to_now:"Day view to the current time, timeline to the now line, agenda to today",h_day_offset:"0 = today, 1 = tomorrow, -1 = yesterday. For a display that should show the day ahead",h_slim_header:"Weekday buttons move up onto the navigation line and the avatar sits next to the name - saves about 40 px",h_hide_patterns:"Text patterns, e.g. “Recess” – matches are hidden",h_show_patterns:"Allow list: only events whose title contains one of the patterns",h_replace_patterns:"e.g. “Homeroom => Lesson” (without => the text is removed)",h_tentative_patterns:"Matches are drawn dashed / translucent",h_filter_duplicates:"The same event in several calendars is shown only once",h_hide_past:"The list starts at today. Paging back to an earlier week still shows everything",h_auto_return:"Kiosk: jumps back to “today” after X minutes without a touch",h_background_hours:"0 = off. Long all-day-ish events (after-school care …) as a subtle band",h_fit_height:"Compresses the day until everything is visible without scrolling",h_full_height:"For panel view / wall tablet",h_month_table_full_height:"Expands the month table to show all rows without an internal vertical scrollbar. The dashboard may still scroll on smaller screens.",h_month_table_inline_date:"e.g. Mon 01.10. Weather stays below; the date column grows if needed",h_month_table_compact_header:"Shorter person headers with the avatar and name side by side",h_month_table_font_size:"Base size for dates and names; event text and times scale with it. Empty keeps existing font settings (dates: 12.5 px)",h_month_table_row_height:"Minimum content height, plus padding. Rows with many events grow as needed. Default: 48 px",h_month_table_row_padding:"Less padding makes date rows and event chips more compact. Default: 4 px",h_month_table_event_gap:"Vertical space between events in a cell. Default: 3 px",h_trim_hours:"Shows only the hours that actually contain events",h_col_min_width:"Below this the board scrolls horizontally",h_family_calendars:"Calendars for everyone – holidays, bin collection, school holidays. Shown above the people, never counted as a double booking",h_weather_entity:"Daily forecast in the header (HA location)",h_auto_icons:"e.g. doctor → 🩺, sport → 🏃, birthday → 🎂 (titles with emoji stay untouched)",h_icon_patterns:"Own rules, e.g. “Grandma => 👵”",h_show_focus:"Compact bar above the views: what is running now / coming next",h_show_alerts:"Chips above the day and timeline views: one person booked twice, an unsupervised window between two events, or everyone out at the same time",h_gap_min:"How long a hole between two of a person's events has to be before it is worth a warning",h_drag_drop:"Writable calendars only; drag to move, bottom edge changes the duration",h_views:"Which switchers appear at the top",h_tasks:"Open tasks due today - and overdue ones - show up as chips. Checking them off stays with your todo app or the Family Task Card",h_badges:"Small chips below the person header; click opens details",h_color:"Leave empty for the palette color",h_hidden:"Column starts collapsed; a click on the header brings it back",h_compact:"Smaller fonts and tighter spacing in a single switch",h_map_url:"{location} is substituted, e.g. https://maps.apple.com/?q={location}",o_person:"Person",o_location:"Location",o_calendar:"Calendar",o_monday:"Monday",o_sunday:"Sunday",g_views:"🗓️ Views",g_layout:"📐 Layout & size",g_filters:"🧹 Filters & clean-up",g_looks:"🎨 Appearance (fine-tuning)",g_kiosk:"🖥️ Kiosk & extras",w_title:"👨‍👩‍👧‍👦 Welcome to the family board!",w_text:"Ready in two clicks – the card detects your family automatically from the person and calendar entities of your Home Assistant.",w_detect:"✨ Step 1: detect persons automatically",w_hint:"Optionally afterwards: pick a profile (below) or fine-tune the settings in the groups. Of course you can also add persons by hand:",w_empty:"＋ Start empty",p_tablet:"🖥️ Wall tablet",p_tablet_title:"Full screen, auto-fit, return to today",p_phone:"📱 Phone",p_phone_title:"Agenda as start view, compact columns",p_reset:"🧩 Default",p_reset_title:"Reset the layout settings",s_persons:"People",s_calendars:"Calendars (color & label)",s_settings:"Settings",b_add_person:"＋ Add person",b_detect:"✨ Detect automatically",b_up:"Move up",b_down:"Move down",b_remove:"Remove",b_auto:"Automatic",ph_label:"Custom label",ph_icon:"Icon, e.g. mdi:school",ph_title_field:"Title from field (e.g. description)",person_n:"Person",cal_hint_1:"Colors apply with “Color by: calendar”, labels in the event dialog. Icon = mdi icon in front of the title. “Title from field” uses e.g.",cal_hint_2:"instead of",cal_hint_3:"as the event title."},Ge={en:Je,de:{l_month_table_weekend_style:"Stil der Wochenend-Markierung",l_month_table_marker_style:"Stil der Kalender-Markierung",h_month_table_weekend_style:"Linie links, Hintergrund, beides oder Linie unten. Standard: Hintergrund.",h_month_table_marker_style:"Standard: Linie links und Hintergrund. Die Zeilenoption erweitert Hintergründe und untere Linien; die linke Linie bleibt am Datum.",o_highlight_line:"Nur Linie links",o_highlight_background:"Nur Hintergrund",o_highlight_both:"Linie links und Hintergrund",o_highlight_underline:"Linie unten",l_header_position:"Titel und Ansichtswechsel: Position",l_navigation_position:"Monats-/Wochennavigation: Position",l_navigation_layout:"Anordnung der Navigationsknöpfe",l_equal_view_buttons:"Ansichtstasten: alle so breit wie die längste Beschriftung",l_controls_height:"Mindesthöhe der Schaltflächen",l_controls_font_size:"Schriftgröße der Schaltflächen",l_navigation_arrow_width:"Mindestbreite der Navigationspfeile",l_month_table_fill_height:"Monatstabelle: verfügbare Bildschirmhöhe ausfüllen",l_month_table_saturday_color:"Monatstabelle: Samstagsfarbe",l_month_table_sunday_color:"Monatstabelle: Sonntagsfarbe",l_month_table_weekend_full_row:"Wochenendfarbe über die gesamte Tageszeile",l_month_table_marker_full_row:"Farbe des Markierungskalenders über die gesamte Tageszeile",h_month_table_weekend_full_row:"Erweitert Wochenend-Hintergründe und untere Linien auf die Personenzellen. Unabhängig von Kalender-Markierungen. Standardmäßig aus.",h_month_table_marker_full_row:"Erweitert Kalender-Hintergründe und untere Linien auf die Personenzellen. Hat Vorrang vor Wochenend-Zeilenfarben. Standardmäßig aus.",l_month_table_marker_calendars:"Monatstabelle: Kalender als Datumsmarkierungen",l_month_table_marker_keep_columns:"Markierungskalender zusätzlich in Personenspalten anzeigen",l_month_table_marker_mode:"Datumsmarkierung: Darstellungsart",l_month_table_marker_color:"Datumsmarkierung: eigene Markierungsfarbe",l_month_table_marker_text_color:"Datumsmarkierung: Textfarbe",l_month_table_marker_font_size:"Datumsmarkierung: Schriftgröße",l_month_table_marker_grow:"Zeilen für Markierungstext vergrößern",l_month_table_date_width:"Monatstabelle: Mindestbreite der Datumsspalte",h_controls_height:"Für Touchscreens z. B. 44 px. Leer behält die bisherige Größe bei.",h_month_table_fill_height:"Streckt kurze Tabellen bis zum Bildschirmende; volle Zeilen dürfen mehr Platz benötigen.",h_month_table_marker_calendars:"Beliebige Kalender, auch ohne Personenzuordnung. Markiert wird nur das Datumsfeld.",h_month_table_marker_keep_columns:"Aus blendet reine Markierungsspalten und deren Termine in gemischten Personenspalten in dieser Ansicht aus.",h_month_table_marker_color:"Leer verwendet die Kalenderfarbe, danach die Personenfarbe. Bei Überschneidungen hat der zuerst ausgewählte Kalender Vorrang.",h_month_table_marker_grow:"Aus: Text nutzt freien Zeilenplatz und wird bei Platzmangel gekürzt; Farbe und Tooltip bleiben sichtbar. An: Zeilen wachsen für den Text mit.",h_month_table_date_width:"92–280 px, Standard 92 px. Kalender verbreitern die Spalte nicht automatisch; größere Datumsschrift passt weiterhin hinein.",h_month_table_saturday_color:"Tönung der Datumsfelder am Samstag; Kalender-Markierungen haben Vorrang.",h_month_table_sunday_color:"Tönung der Datumsfelder am Sonntag; Kalender-Markierungen haben Vorrang.",o_top:"Oben",o_bottom:"Unten",o_nav_compact:"Zusammen",o_nav_spread:"Pfeil links / Datum mittig / Pfeil rechts",o_marker_text:"Text unter dem Datum",o_marker_chip:"Terminblock unter dem Datum",o_marker_indicator:"Nur Farbhinweis",l_title:"Kartentitel",l_refresh_interval:"Auto-Aktualisierung (Sek., 0 = aus)",l_view:"Standardansicht",l_views:"Verfügbare Ansichten (Umschalter)",l_time_grid:"Zeitraster",l_start_hour:"Startstunde",l_end_hour:"Endstunde",l_hour_height:"Höhe pro Stunde",l_hour_width:"Zeitstrahl: Breite pro Stunde",l_fit_height:"Auto-Fit: Tag ohne Scrollen einpassen",l_full_height:"Volle Höhe: bis zum unteren Bildschirmrand",l_month_table_full_height:"In Monatsübersicht ganzen Monat anzeigen",l_month_table_inline_date:"Monatstabelle: Wochentag und Datum in einer Zeile",l_month_table_compact_header:"Monatstabelle: Avatar neben dem Namen",l_month_table_font_size:"Monatstabelle: Schriftgröße",l_month_table_row_height:"Monatstabelle: Mindesthöhe der Zeilen",l_month_table_row_padding:"Monatstabelle: Vertikaler Innenabstand",l_month_table_event_gap:"Monatstabelle: Abstand zwischen Terminen",l_trim_hours:"Leere Randstunden automatisch ausblenden",l_col_min_width:"Min. Spaltenbreite pro Person",l_background_hours:"Lange Termine als Hintergrund-Band ab (Std.)",l_max_columns:"Max. Spalten pro Tag",l_first_day:"Wochenstart",l_scroll_to_now:"Auto-Scroll zu jetzt",l_day_offset:"Beginnt bei (Tage ab heute)",l_slim_header:"Schlanker Kopfbereich",l_color_by:"Einfärben nach",l_show_weekends:"Wochenende anzeigen",l_show_now_line:"Jetzt-Linie",l_dim_past:"Vergangene Termine ausgrauen",l_show_progress:"Fortschrittsbalken anzeigen",l_hide_patterns:"Termine ausblenden",l_show_patterns:"Nur Termine zeigen mit",l_replace_patterns:"Titel ersetzen",l_filter_duplicates:"Doppelte Termine zusammenfassen",l_hide_past:"Agenda: vergangene Tage ausblenden",l_tentative_patterns:"Als vorläufig markieren",l_auto_icons:"Auto-Symbole nach Stichwort",l_icon_patterns:"Eigene Symbol-Regeln",l_show_focus:"„Jetzt / als Nächstes“-Leiste",l_show_alerts:"Tages-Check (Doppelbuchung, Lücken, niemand zuhause)",l_gap_min:"Lücke melden ab (Min., 0 = aus)",l_drag_drop:"Termine per Ziehen verschieben (Tagesansicht)",l_family_calendars:"Familien-Kalender",l_weather_entity:"Wetter-Entität",l_show_weather:"Wetter anzeigen",l_hide_empty_persons:"Woche/Monatstabelle: Personen ohne Termine ausblenden",l_auto_return:"Nach Inaktivität zur Startansicht (Min., 0 = aus)",l_event_size:"Schriftgröße Termine",l_radius:"Ecken-Radius der Blöcke",l_past_opacity:"Deckkraft vergangener Termine",l_name:"Anzeigename",l_person:"Person (Avatar & Status)",l_calendar:"Kalender (mehrere möglich)",l_tasks:"Aufgabenlisten (Fälliges erscheint im Board)",l_color:"Eigene Farbe (Hex, optional)",l_badges:"Badges (z. B. Akku, Sensoren)",l_hidden:"Beim Start ausgeblendet",l_compact:"Kompakte Darstellung",l_map_url:"Karten-Link (Vorlage)",h_scroll_to_now:"Tag zur aktuellen Uhrzeit, Zeitstrahl zur Jetzt-Linie, Agenda zu heute",h_day_offset:"0 = heute, 1 = morgen, -1 = gestern. Für Anzeigen, die den kommenden Tag zeigen sollen",h_slim_header:"Wochentage rutschen auf die Navigationszeile und der Avatar neben den Namen – spart rund 40 px",h_hide_patterns:"Textmuster, z. B. „Hofpause“ – Treffer werden ausgeblendet",h_show_patterns:"Allow-Liste: nur Termine, deren Titel eines der Muster enthält",h_replace_patterns:"z. B. „Klassenverbund => Unterricht“ (ohne => wird der Text entfernt)",h_tentative_patterns:"Treffer werden gestrichelt/transparent dargestellt",h_filter_duplicates:"Gleicher Termin in mehreren Kalendern nur einmal",h_hide_past:"Die Liste beginnt bei heute. Blätterst du in eine frühere Woche, siehst du weiterhin alles",h_auto_return:"Kiosk: springt nach X Minuten ohne Berührung zurück zu „heute“",h_background_hours:"0 = aus. Lange Dauertermine (OGS, Betreuung …) als dezentes Band",h_fit_height:"Staucht den Tag, bis alles ohne Scrollen sichtbar ist",h_full_height:"Für Panel-Ansicht / Wandtablet",h_month_table_full_height:"Zeigt alle Zeilen der Monatstabelle ohne internen vertikalen Scrollbalken. Auf kleineren Bildschirmen kann das Dashboard weiterhin scrollen.",h_month_table_inline_date:"Z. B. Mo 01.10. Wetter bleibt darunter; die Datumsspalte wächst bei Bedarf mit",h_month_table_compact_header:"Flachere Personenüberschriften mit Avatar und Name nebeneinander",h_month_table_font_size:"Grundgröße für Datum und Namen; Termine und Uhrzeiten skalieren mit. Leer behält vorhandene Schriftgrößen bei (Datum: 12,5 px)",h_month_table_row_height:"Mindesthöhe des Inhalts, zuzüglich Innenabstand. Bei vielen Terminen wächst die Zeile mit. Standard: 48 px",h_month_table_row_padding:"Weniger Innenabstand macht Datumszeilen und Terminblöcke kompakter. Standard: 4 px",h_month_table_event_gap:"Vertikaler Abstand zwischen Terminen in einer Zelle. Standard: 3 px",h_trim_hours:"Zeigt nur die Stunden, in denen wirklich Termine liegen",h_col_min_width:"Darunter wird horizontal gescrollt",h_family_calendars:"Kalender für alle – Feiertage, Müllabfuhr, Schulferien. Erscheinen über den Personen und zählen nie als Doppelbuchung",h_weather_entity:"Tages-Vorhersage im Kopf (HA-Standort)",h_auto_icons:"z. B. Arzt → 🩺, Sport → 🏃, Geburtstag → 🎂 (Titel mit Emoji bleiben unberührt)",h_icon_patterns:"eigene Regeln, z. B. „Oma => 👵“",h_show_focus:"Kompakte Leiste über den Ansichten: was läuft jetzt / kommt als Nächstes",h_show_alerts:"Chips über Tages- und Zeitstrahl-Ansicht: eine Person doppelt verplant, eine unbetreute Lücke zwischen zwei Terminen oder alle gleichzeitig unterwegs",h_gap_min:"Ab welcher Länge ein Loch zwischen zwei Terminen einer Person eine Warnung wert ist",h_drag_drop:"Nur bei schreibbaren Kalendern; Ziehen verschiebt, unterer Rand ändert die Dauer",h_views:"Welche Umschalter oben erscheinen",h_tasks:"Heute fällige und überfällige Aufgaben erscheinen als Chips. Abhaken bleibt bei deiner To-do-App bzw. der Family Task Card",h_badges:"Kleine Chips unter dem Personenkopf; Klick öffnet Details",h_color:"Leer lassen für Palettenfarbe",h_hidden:"Spalte startet eingeklappt; ein Klick auf den Kopf holt sie zurück",h_compact:"Kleinere Schriften und engere Abstände in einem Schalter",h_map_url:"{location} wird ersetzt, z. B. https://maps.apple.com/?q={location}",o_person:"Person",o_location:"Ort",o_calendar:"Kalender",o_monday:"Montag",o_sunday:"Sonntag",g_views:"🗓️ Ansichten",g_layout:"📐 Layout & Größe",g_filters:"🧹 Filter & Aufräumen",g_looks:"🎨 Aussehen (Feintuning)",g_kiosk:"🖥️ Kiosk & Extras",w_title:"👨‍👩‍👧‍👦 Willkommen beim Familienplan!",w_text:"In zwei Klicks startklar – die Karte erkennt deine Familie automatisch aus den Personen- und Kalender-Entitäten deines Home Assistant.",w_detect:"✨ Schritt 1: Personen automatisch erkennen",w_hint:"Danach optional: Profil wählen (unten) oder Feinheiten in den Gruppen einstellen. Natürlich kannst du Personen auch von Hand anlegen:",w_empty:"＋ Leer starten",p_tablet:"🖥️ Wandtablet",p_tablet_title:"Vollbild, Auto-Fit, Rückkehr zu heute",p_phone:"📱 Handy",p_phone_title:"Agenda als Startansicht, kompakte Spalten",p_reset:"🧩 Standard",p_reset_title:"Layout-Einstellungen zurücksetzen",s_persons:"Personen",s_calendars:"Kalender (Farbe & Label)",s_settings:"Einstellungen",b_add_person:"＋ Person hinzufügen",b_detect:"✨ Automatisch erkennen",b_up:"Nach oben",b_down:"Nach unten",b_remove:"Entfernen",b_auto:"Automatisch",ph_label:"Eigenes Label",ph_icon:"Symbol, z. B. mdi:school",ph_title_field:"Titel aus Feld (z. B. description)",person_n:"Person",cal_hint_1:"Farben wirken bei „Einfärben nach: Kalender“, Labels im Termin-Dialog. Symbol = mdi-Icon vor dem Titel. „Titel aus Feld“ nutzt z. B.",cal_hint_2:"statt",cal_hint_3:"als Termin-Titel."}};function Ye(e,t){return Ge[e]?.[t]??Je[t]??t}const Xe=["now","day","timeline","week","month","month_table","agenda"],Qe=["day","timeline","week","month","agenda"],et=["month_table_saturday_color","month_table_sunday_color","month_table_marker_color","month_table_marker_text_color"],tt=[{name:"name",selector:{text:{}}},{name:"person",selector:{entity:{filter:{domain:"person"}}}},{name:"calendar",selector:{entity:{filter:{domain:"calendar"},multiple:!0}}},{name:"badges",selector:{entity:{multiple:!0}}},{name:"color",selector:{text:{}}},{name:"hidden",selector:{boolean:{}}}],it={name:"tasks",selector:{entity:{filter:{domain:"todo"},multiple:!0}}},at=(e,t,i)=>({name:"",type:"expandable",title:e,icon:t,schema:i});class nt extends oe{constructor(){super(...arguments),this._t=e=>Ye(this._lang,e),this._label=e=>{const t=`l_${e.name}`,i=Ye(this._lang,t);return i===t?e.name:i},this._helper=e=>{const t=`h_${e.name}`,i=Ye(this._lang,t);return i===t?void 0:i}}setConfig(e){this._config=e}get _persons(){return Array.isArray(this._config.persons)?this._config.persons:[]}get _lang(){return De(this.hass)}_personSchema(){const e=Object.keys(this.hass?.states??{}).some(e=>e.startsWith("todo."));return e?[...tt,it]:tt}_viewOptions(){return Xe.map(e=>({value:e,label:Te(this.hass,e)}))}get _isFresh(){return!this._persons.some(e=>e.name||e.person||e.calendar)&&!this._config.family_calendars?.length&&!this._config.month_table_marker_calendars?.length}get _settingsData(){const e={...this._config,time_grid:String(this._config.time_grid??30)};for(const t of et){const i=this._config[t];"string"==typeof i&&/^#[0-9a-f]{6}$/i.test(i)&&(e[t]=[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)))}return e}_schema(){const e=this._config,t=Array.isArray(e.views)&&e.views.length?e.views:Qe,i=t.includes("day"),a=t.includes("timeline"),n=t.includes("month_table")||"month_table"===e.view,r=t.includes("week")||n,s=[];if((i||a)&&s.push({name:"start_hour",selector:{number:{min:0,max:23,mode:"box"}}},{name:"end_hour",selector:{number:{min:1,max:24,mode:"box"}}},{name:"trim_hours",selector:{boolean:{}}}),i&&s.push({name:"hour_height",selector:{number:{min:40,max:96,step:4,mode:"slider",unit_of_measurement:"px"}}},{name:"fit_height",selector:{boolean:{}}},{name:"col_min_width",selector:{number:{min:60,max:400,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"max_columns",selector:{number:{min:1,max:8,step:1,mode:"slider"}}},{name:"background_hours",selector:{number:{min:0,max:12,step:1,mode:"slider",unit_of_measurement:"h"}}}),a&&s.push({name:"hour_width",selector:{number:{min:48,max:240,step:8,mode:"slider",unit_of_measurement:"px"}}}),s.push({name:"slim_header",selector:{boolean:{}}},{name:"full_height",selector:{boolean:{}}},...["header_position","navigation_position"].map(e=>({name:e,selector:{select:{mode:"dropdown",options:["top","bottom"].map(e=>({value:e,label:this._t(`o_${e}`)}))}}})),{name:"navigation_layout",selector:{select:{mode:"dropdown",options:["compact","spread"].map(e=>({value:e,label:this._t(`o_nav_${e}`)}))}}},{name:"equal_view_buttons",selector:{boolean:{}}},...[{name:"controls_height",min:28,max:80},{name:"controls_font_size",min:10,max:24},{name:"navigation_arrow_width",min:28,max:120}].map(({name:e,...t})=>({name:e,selector:{number:{...t,mode:"slider",unit_of_measurement:"px"}}}))),n){const t=e=>({name:e,selector:{select:{mode:"dropdown",options:["line","background","both","underline"].map(e=>({value:e,label:this._t(`o_highlight_${e}`)}))}}});s.push({name:"month_table_full_height",selector:{boolean:{}}},{name:"month_table_fill_height",selector:{boolean:{}}},{name:"month_table_inline_date",selector:{boolean:{}}},{name:"month_table_compact_header",selector:{boolean:{}}},...[{name:"month_table_font_size",min:10,max:22,step:.5},{name:"month_table_row_height",min:16,max:96,step:1},{name:"month_table_row_padding",min:0,max:12,step:1},{name:"month_table_event_gap",min:0,max:12,step:1},{name:"month_table_date_width",min:92,max:280,step:1}].map(({name:e,...t})=>({name:e,selector:{number:{...t,mode:"slider",unit_of_measurement:"px"}}}))),s.push(...et.slice(0,2).map(e=>({name:e,selector:{color_rgb:{}}})),t("month_table_weekend_style"),{name:"month_table_weekend_full_row",selector:{boolean:{}}},{name:"month_table_marker_calendars",selector:{entity:{filter:{domain:"calendar"},multiple:!0}}},{name:"month_table_marker_keep_columns",selector:{boolean:{}}},{name:"month_table_marker_mode",selector:{select:{mode:"dropdown",options:["text","chip","indicator"].map(e=>({value:e,label:this._t(`o_marker_${e}`)}))}}},{name:"month_table_marker_color",selector:{color_rgb:{}}},t("month_table_marker_style"),{name:"month_table_marker_full_row",selector:{boolean:{}}}),"indicator"!==e.month_table_marker_mode&&s.push({name:"month_table_marker_text_color",selector:{color_rgb:{}}},{name:"month_table_marker_font_size",selector:{number:{min:8,max:22,step:1,mode:"slider",unit_of_measurement:"px"}}},{name:"month_table_marker_grow",selector:{boolean:{}}})}const o=[{name:"auto_return",selector:{number:{min:0,max:60,step:1,mode:"box",unit_of_measurement:"min"}}},{name:"scroll_to_now",selector:{boolean:{}}},{name:"show_now_line",selector:{boolean:{}}},{name:"show_progress",selector:{boolean:{}}},{name:"family_calendars",selector:{entity:{filter:{domain:"calendar"},multiple:!0}}},{name:"weather_entity",selector:{entity:{filter:{domain:"weather"}}}},{name:"map_url",selector:{text:{}}}];return e.weather_entity&&o.push({name:"show_weather",selector:{boolean:{}}}),o.push({name:"refresh_interval",selector:{number:{min:0,max:3600,mode:"box",unit_of_measurement:"s"}}}),[{name:"title",selector:{text:{}}},at(this._t("g_views"),"mdi:calendar-multiselect",[{name:"view",selector:{select:{mode:"dropdown",options:this._viewOptions()}}},{name:"views",selector:{select:{multiple:!0,options:this._viewOptions()}}},{name:"time_grid",selector:{select:{mode:"dropdown",options:[{value:"60",label:"60 min"},{value:"30",label:"30 min"},{value:"15",label:"15 min"}]}}},{name:"first_day",selector:{select:{mode:"dropdown",options:[{value:"monday",label:this._t("o_monday")},{value:"sunday",label:this._t("o_sunday")}]}}},{name:"show_weekends",selector:{boolean:{}}},{name:"day_offset",selector:{number:{min:-14,max:14,step:1,mode:"box",unit_of_measurement:"d"}}}]),at(this._t("g_layout"),"mdi:resize",s),at(this._t("g_filters"),"mdi:broom",[{name:"hide_patterns",selector:{text:{multiple:!0}}},{name:"show_patterns",selector:{text:{multiple:!0}}},{name:"replace_patterns",selector:{text:{multiple:!0}}},{name:"filter_duplicates",selector:{boolean:{}}},...t.includes("agenda")?[{name:"hide_past",selector:{boolean:{}}}]:[],{name:"tentative_patterns",selector:{text:{multiple:!0}}},...r?[{name:"hide_empty_persons",selector:{boolean:{}}}]:[]]),at(this._t("g_looks"),"mdi:palette",[{name:"show_focus",selector:{boolean:{}}},{name:"show_alerts",selector:{boolean:{}}},...e.show_alerts?[{name:"gap_min",selector:{number:{min:0,max:240,step:15,mode:"slider",unit_of_measurement:"min"}}}]:[],{name:"drag_drop",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}},{name:"auto_icons",selector:{boolean:{}}},...e.auto_icons?[{name:"icon_patterns",selector:{text:{multiple:!0}}}]:[],{name:"color_by",selector:{select:{mode:"dropdown",options:[{value:"person",label:this._t("o_person")},{value:"location",label:this._t("o_location")},{value:"calendar",label:this._t("o_calendar")}]}}},{name:"dim_past",selector:{boolean:{}}},{name:"event_size",selector:{number:{min:9,max:16,step:.5,mode:"slider",unit_of_measurement:"px"}}},{name:"radius",selector:{number:{min:0,max:18,step:1,mode:"slider",unit_of_measurement:"px"}}},{name:"past_opacity",selector:{number:{min:10,max:100,step:5,mode:"slider",unit_of_measurement:"%"}}}]),at(this._t("g_kiosk"),"mdi:tablet-dashboard",o)]}_emit(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}_settingsChanged(e){e.stopPropagation();const t={...e.detail.value};for(const e of et){const i=t[e];Array.isArray(i)&&3===i.length&&i.every(e=>"number"==typeof e&&Number.isFinite(e))&&(t[e]="#"+i.map(e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,"0")).join(""))}"string"==typeof t.time_grid&&(t.time_grid=Number(t.time_grid)),this._emit({...this._config,...t,persons:this._persons,...this._config.calendars?{calendars:this._config.calendars}:{}})}_applyPreset(e){const t={...this._config,persons:this._persons},i=e=>e.forEach(e=>delete t[e]);"tablet"===e?Object.assign(t,{view:"day",full_height:!0,fit_height:!0,trim_hours:!0,scroll_to_now:!0,auto_return:5}):"phone"===e?(Object.assign(t,{view:"agenda",col_min_width:96}),i(["full_height","fit_height","auto_return"])):(i(["full_height","fit_height","month_table_full_height","month_table_fill_height","month_table_weekend_full_row","month_table_marker_full_row","month_table_weekend_style","month_table_marker_style","header_position","navigation_position","navigation_layout","equal_view_buttons","controls_height","controls_font_size","navigation_arrow_width","month_table_date_width","month_table_inline_date","month_table_compact_header","month_table_font_size","month_table_row_height","month_table_row_padding","month_table_event_gap","trim_hours","auto_return","col_min_width","hour_height","hour_width","max_columns","background_hours","event_size","radius","past_opacity"]),t.view="day"),this._emit(t)}_personChanged(e,t){t.stopPropagation();const i={...t.detail.value};i.color||delete i.color,Array.isArray(i.badges)&&0===i.badges.length&&delete i.badges,i.hidden||delete i.hidden,Array.isArray(i.calendar)&&(0===i.calendar.length?delete i.calendar:1===i.calendar.length&&(i.calendar=i.calendar[0]));const a=this._persons.map((t,a)=>a===e?i:t);this._emit({...this._config,persons:a})}_personData(e){const t=Array.isArray(e.calendar)?e.calendar:e.calendar?[e.calendar]:[];return{...e,calendar:t}}_setPersonColor(e,t){const i=this._persons.map((i,a)=>{if(a!==e)return i;const n={...i};return t?n.color=t:delete n.color,n});this._emit({...this._config,persons:i})}_addPerson(){const e=[...this._persons,{name:"",person:"",calendar:""}];this._emit({...this._config,persons:e})}_autoDetect(){const e=Ve(this.hass);if(0===e.length)return;const t=new Set(this._persons.map(e=>e.person).filter(Boolean)),i=[...this._persons.filter(e=>e.name||e.person||e.calendar)];for(const a of e)t.has(a.person)||i.push(a);this._emit({...this._config,persons:i})}_removePerson(e){const t=this._persons.filter((t,i)=>i!==e);this._emit({...this._config,persons:t})}_movePerson(e,t){const i=[...this._persons],a=e+t;a<0||a>=i.length||([i[e],i[a]]=[i[a],i[e]],this._emit({...this._config,persons:i}))}_calsUsed(){const e=[];e.push(...this._config.month_table_marker_calendars??[]);for(const t of this._persons){const i=Array.isArray(t.calendar)?t.calendar:t.calendar?[t.calendar]:[];for(const t of i)t&&!e.includes(t)&&e.push(t)}return e}_setCalMeta(e,t){const i={...this._config.calendars??{}},a={...i[e]??{}};for(const e of["color","label","icon","title_field"]){const i=t[e];void 0!==i&&(i?a[e]=i:delete a[e])}0===Object.keys(a).length?delete i[e]:i[e]=a;const n={...this._config,persons:this._persons};0===Object.keys(i).length?delete n.calendars:n.calendars=i,this._emit(n)}_calName(e){return this.hass.states[e]?.attributes?.friendly_name||e}_swatches(e,t){return j`
      <div class="swatches">
        ${Ne.map(i=>j`
            <button
              class="swatch ${e?.toLowerCase()===i?"on":""}"
              style="background:${i}"
              title=${i}
              @click=${()=>t(i)}
            ></button>
          `)}
        <button
          class="swatch none ${e?"":"on"}"
          title=${this._t("b_auto")}
          @click=${()=>t()}
        >
          A
        </button>
      </div>
    `}render(){if(!this._config)return K;if(this._isFresh)return j`
        <div class="wizard">
          <div class="wtitle">${this._t("w_title")}</div>
          <div class="wtext">${this._t("w_text")}</div>
          <button class="wbtn primary" @click=${this._autoDetect}>${this._t("w_detect")}</button>
          <div class="wtext small">${this._t("w_hint")}</div>
          <button class="wbtn" @click=${this._addPerson}>${this._t("w_empty")}</button>
        </div>
      `;const e=this._persons,t=this._calsUsed();return j`
      <div class="presets">
        <button title=${this._t("p_tablet_title")} @click=${()=>this._applyPreset("tablet")}>
          ${this._t("p_tablet")}
        </button>
        <button title=${this._t("p_phone_title")} @click=${()=>this._applyPreset("phone")}>
          ${this._t("p_phone")}
        </button>
        <button title=${this._t("p_reset_title")} @click=${()=>this._applyPreset("reset")}>
          ${this._t("p_reset")}
        </button>
      </div>

      <div class="section-title">${this._t("s_persons")}</div>
      <div class="persons">
        ${e.map((t,i)=>j`
            <div class="person">
              <div class="person-head">
                <span
                  class="pdot"
                  style="background:${t.color||Ne[i%Ne.length]}"
                ></span>
                <span class="pidx">${t.name||`${this._t("person_n")} ${i+1}`}</span>
                <div class="ptools">
                  <button
                    class="icon"
                    title=${this._t("b_up")}
                    ?disabled=${0===i}
                    @click=${()=>this._movePerson(i,-1)}
                  >
                    ↑
                  </button>
                  <button
                    class="icon"
                    title=${this._t("b_down")}
                    ?disabled=${i===e.length-1}
                    @click=${()=>this._movePerson(i,1)}
                  >
                    ↓
                  </button>
                  <button
                    class="icon danger"
                    title=${this._t("b_remove")}
                    @click=${()=>this._removePerson(i)}
                  >
                    ✕
                  </button>
                </div>
              </div>
              ${this._swatches(t.color,e=>this._setPersonColor(i,e))}
              <ha-form
                .hass=${this.hass}
                .data=${this._personData(t)}
                .schema=${this._personSchema()}
                .computeLabel=${this._label}
                .computeHelper=${this._helper}
                @value-changed=${e=>this._personChanged(i,e)}
              ></ha-form>
            </div>
          `)}
        <div class="addrow">
          <button class="add" @click=${this._addPerson}>${this._t("b_add_person")}</button>
          <button class="add detect" @click=${this._autoDetect}>${this._t("b_detect")}</button>
        </div>
      </div>

      ${t.length>1||this._config.calendars?j`
              <div class="section-title">${this._t("s_calendars")}</div>
              <div class="cals">
                ${t.map(e=>{const t=this._config.calendars?.[e]??{};return j`
                    <div class="cal">
                      <div class="cal-head">
                        <span
                          class="pdot"
                          style="background:${t.color||"var(--divider-color)"}"
                        ></span>
                        <span class="cal-name" title=${e}>${this._calName(e)}</span>
                        <input
                          class="cal-label"
                          type="text"
                          placeholder=${this._t("ph_label")}
                          .value=${t.label??""}
                          @change=${t=>this._setCalMeta(e,{label:t.target.value||null})}
                        />
                      </div>
                      ${this._swatches(t.color,t=>this._setCalMeta(e,{color:t??null}))}
                      <div class="cal-extra">
                        <input
                          type="text"
                          placeholder=${this._t("ph_icon")}
                          .value=${t.icon??""}
                          @change=${t=>this._setCalMeta(e,{icon:t.target.value||null})}
                        />
                        <input
                          type="text"
                          placeholder=${this._t("ph_title_field")}
                          .value=${t.title_field??""}
                          @change=${t=>this._setCalMeta(e,{title_field:t.target.value||null})}
                        />
                      </div>
                    </div>
                  `})}
                <div class="hint">
                  ${this._t("cal_hint_1")} <code>description</code> ${this._t("cal_hint_2")}
                  <code>summary</code> ${this._t("cal_hint_3")}
                </div>
              </div>
            `:K}

      <div class="section-title">${this._t("s_settings")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${this._settingsData}
        .schema=${this._schema()}
        .computeLabel=${this._label}
        .computeHelper=${this._helper}
        @value-changed=${this._settingsChanged}
      ></ha-form>
    `}}nt.styles=s`
    .wizard {
      border: 1px dashed var(--divider-color);
      border-radius: 12px;
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: center;
    }
    .wtitle {
      font-size: 17px;
      font-weight: 700;
    }
    .wtext {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }
    .wtext.small {
      font-size: 12px;
    }
    .wbtn {
      border: 1px solid var(--divider-color);
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      border-radius: 10px;
      padding: 12px;
      cursor: pointer;
      font: inherit;
      font-size: 14px;
      font-weight: 600;
    }
    .wbtn.primary {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border: none;
    }
    .presets {
      display: flex;
      gap: 8px;
      margin-bottom: 4px;
    }
    .presets button {
      flex: 1;
      border: 1px solid var(--divider-color);
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      border-radius: 999px;
      padding: 8px 10px;
      cursor: pointer;
      font: inherit;
      font-size: 12.5px;
      font-weight: 600;
    }
    .presets button:hover {
      border-color: var(--primary-color);
    }
    .section-title {
      font-weight: 600;
      font-size: 14px;
      margin: 14px 2px 8px;
    }
    .hint {
      font-size: 12px;
      color: var(--secondary-text-color);
      line-height: 1.4;
      padding: 2px 2px 0;
    }
    .persons,
    .cals {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .person,
    .cal {
      border: 1px solid var(--divider-color);
      border-radius: 10px;
      padding: 8px 10px 6px;
    }
    .person-head,
    .cal-head {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
    }
    .pdot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      flex: 0 0 12px;
    }
    .pidx {
      font-weight: 600;
      font-size: 13px;
      flex: 1;
    }
    .cal-name {
      font-weight: 600;
      font-size: 12.5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cal-extra {
      display: flex;
      gap: 6px;
      margin-top: 2px;
    }
    .cal-extra input {
      flex: 1;
      min-width: 0;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 12px;
      padding: 4px 8px;
    }
    .cal-label {
      margin-left: auto;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 12px;
      padding: 4px 8px;
      width: 130px;
    }
    .ptools {
      display: inline-flex;
      gap: 2px;
    }
    .icon {
      border: none;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      border-radius: 6px;
      width: 26px;
      height: 26px;
      cursor: pointer;
      font-size: 14px;
      line-height: 1;
    }
    .icon:disabled {
      opacity: 0.4;
      cursor: default;
    }
    .icon.danger:hover {
      background: var(--error-color, #ff5252);
      color: #fff;
    }
    .swatches {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin: 2px 0 6px;
    }
    .swatch {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      padding: 0;
    }
    .swatch.on {
      border-color: var(--primary-text-color);
      box-shadow: 0 0 0 2px var(--card-background-color, #fff) inset;
    }
    .swatch.none {
      background: var(--secondary-background-color);
      color: var(--secondary-text-color);
      font-size: 11px;
      font-weight: 700;
      line-height: 1;
    }
    .addrow {
      display: flex;
      gap: 8px;
    }
    .addrow .add {
      flex: 1;
    }
    .add.detect {
      border-style: solid;
    }
    .add {
      border: 1px dashed var(--divider-color);
      background: transparent;
      color: var(--primary-color);
      border-radius: 10px;
      padding: 10px;
      cursor: pointer;
      font: inherit;
      font-size: 13px;
      font-weight: 600;
    }
  `,e([ge({attribute:!1})],nt.prototype,"hass",void 0),e([fe()],nt.prototype,"_config",void 0),customElements.define("ha-family-board-card-month-table-editor",nt);var rt=Object.freeze({__proto__:null,FamilyBoardCardEditor:nt});export{Ne as FALLBACK_COLORS,Ze as FamilyBoardCard,Ve as autoDetectPersons};
