"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_updatable-content_ts-ui_packages_hydro-analytics_hydro-analytics_ts"],{64611:(e,t,n)=>{let o,r,a;n.d(t,{M:()=>s,T:()=>c});var i=n(14840),l=n(58700);function s(e,t=!1,n=!1){return!n&&c(e)||function(e,t){let n=d(e);return!(null===n||t&&n===e)&&(!(n!==e||!(0,l.sw)(n))||(!(!e.contains(n)||m(n))||a instanceof Element&&e.contains(a)&&!!a.closest("details[open] > summary")))}(e,t)||function(e){return e.matches(":active:enabled")||e.contains(r)}(e)||function(e){return!(!e.closest(".is-dirty")&&!e.querySelector(".is-dirty"))}(e)}function c(e){for(let t of e.querySelectorAll("input, textarea"))if((t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&u(t))return!0;return!1}function u(e){if(e instanceof HTMLInputElement&&("checkbox"===e.type||"radio"===e.type)){if(e.checked!==e.defaultChecked)return!0}else if(e.value!==e.defaultValue)return!0;return!1}function d(e){return o instanceof Element?o:e&&e.ownerDocument&&e.ownerDocument.activeElement?e.ownerDocument.activeElement:null}document.addEventListener("mousedown",(function(e){r=e.target}),!0),document.addEventListener("mouseup",(function(e){r=null,a=e.target}),!0),document.addEventListener("contextmenu",(function(e){r=null,a=e.target}),!0),document.addEventListener("dragend",(function(){r=null}),!0);let f="a[href], button";function m(e){if(e instanceof i.Z)return!0;let t=e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement,n=e.parentElement?.classList.contains("task-list-item");if(t&&n)return!0;if(!(a instanceof Element))return!1;let o=e.closest(f);return!!o&&o===a.closest(f)}},9302:(e,t,n)=>{let o,r;n.d(t,{lO:()=>m,qA:()=>f,y0:()=>l});let a=[],i=0;function l(){return o}function s(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(e){return 0}}function c(){return s()-1+i}function u(e){o=e;let t=location.href;a[c()]={url:t,state:o},a.length=s(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function d(){return(new Date).getTime()}function f(e,t,n){i=0;let o={_id:d(),...e};history.pushState(o,t,n),u(o)}function m(e,t,n){let o={...l(),...e};history.replaceState(o,t,n),u(o)}o=function(){let e={_id:(new Date).getTime(),...history.state};return u(e),e}(),window.addEventListener("popstate",(function(e){let t=e.state;if(!t||!t._id&&!t.turbo?.restorationIdentifier)return;let n=t.turbo?.restorationIdentifier;a[c()-1]?.state?.turbo?.restorationIdentifier===n?i--:i++,u(t)}),!0),window.addEventListener("turbo:visit",(e=>{e instanceof CustomEvent&&(r=e.detail.action)})),window.addEventListener("turbo:load",(()=>{"restore"!==r&&(i=0,m(history.state,"",""))})),window.addEventListener("hashchange",(function(){if(s()>a.length){let e={_id:d()};history.replaceState(e,"",location.href),u(e)}}),!0),window.addEventListener("pageshow",(()=>{a=[],i=0}))},22971:(e,t,n)=>{n.d(t,{H5:()=>d,Of:()=>p,x0:()=>m,z8:()=>f});var o=n(64611),r=n(36071),a=n(5875),i=n(67525),l=n(96776),s=n(9302);let c=new WeakMap,u={};function d(){for(let e of Object.keys(u))delete u[e];let e=history.state||{};e.staleRecords=u,(0,s.lO)(e,"",location.href),window.location.reload()}function f(){if(Object.keys(u).length>0){let e=history.state||{};e.staleRecords=u,(0,s.lO)(e,"",location.href)}}async function m(e){if(c.get(e))return;let t=e.hasAttribute("data-retain-focus"),n=e.getAttribute("data-url");if(!n)throw Error("could not get url");let r=new AbortController;c.set(e,r);try{let a=await fetch(n,{signal:r.signal,headers:{Accept:"text/html","X-Requested-With":"XMLHttpRequest"}});if(!a.ok)return;let i=await a.text();return(0,o.M)(e,t)?void console.warn("Failed to update content with interactions",e):(u[n]=i,h(e,i,t))}catch{}finally{c.delete(e)}}async function p(e,t,n=!1){c.get(e)?.abort();let o=e.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");return!n&&o&&o===e&&(u[o.getAttribute("data-url")||""]=t),h(e,t)}function h(e,t,n=!1){return(0,l._8)(document,(()=>{let o=(0,i.r)(document,t.trim()),r=n&&e.ownerDocument&&e===e.ownerDocument.activeElement?o.querySelector("*"):null,l=Array.from(e.querySelectorAll("details[open][id]")).map((e=>e.id));for(let t of("DETAILS"===e.tagName&&e.id&&e.hasAttribute("open")&&l.push(e.id),e.querySelectorAll(".js-updatable-content-preserve-scroll-position"))){let e=t.getAttribute("data-updatable-content-scroll-position-id")||"";b.set(e,t.scrollTop)}for(let e of l){let t=o.querySelector(`#${e}`);t&&t.setAttribute("open","")}(0,a.nn)(e,o),r instanceof HTMLElement&&r.focus()}))}let b=new Map;(0,r.N7)(".js-updatable-content-preserve-scroll-position",{constructor:HTMLElement,add(e){let t=e.getAttribute("data-updatable-content-scroll-position-id");if(!t)return;let n=b.get(t);null!=n&&(e.scrollTop=n)}})},58700:(e,t,n)=>{n.d(t,{Bt:()=>a,DN:()=>l,KL:()=>u,Se:()=>i,qC:()=>d,sw:()=>s});var o=n(5582);function r(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function a(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,o.j)(t)),r(e,"submit",!0)&&e.submit()}function i(e,t){if("boolean"==typeof t){if(!(e instanceof HTMLInputElement))throw TypeError("only checkboxes can be set to boolean value");e.checked=t}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}r(e,"change",!1)}function l(e,t){for(let n in t){let o=t[n],r=e.elements.namedItem(n);(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement)&&(r.value=o)}}function s(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function c(e){return new URLSearchParams(e)}function u(e,t){let n=new URLSearchParams(e.search),o=c(t);for(let[e,t]of o)n.append(e,t);return n.toString()}function d(e){return c(new FormData(e)).toString()}},5582:(e,t,n)=>{function o(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=r(t);if(e.name){let o=e.matches("input[type=submit]")?"Submit":"",r=e.value||o;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=r}else n&&n.remove()}function r(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>o,u:()=>r})},95253:(e,t,n)=>{let o;n.d(t,{Y:()=>f,q:()=>m});var r=n(88149),a=n(86058),i=n(44544),l=n(71643);let{getItem:s}=(0,i.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,r.n)("octolytics");delete e.baseContext,o=new a.R(e)}catch(e){}function d(e){let t=(0,r.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");if(n){let e=JSON.parse(atob(n.content));Object.assign(t,e)}let o=new URLSearchParams(window.location.search);for(let[e,n]of o)u.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,l.B)().toString(),Object.assign(t,e)}function f(e){o?.sendPageView(d(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,r=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(r[e]=`${n}`);o&&(d(r),o.sendEvent(e||"unknown",d(r)))}},5875:(e,t,n)=>{n.d(t,{j1:()=>a,jI:()=>l,nn:()=>i});var o=n(39492);function r(e){return{getNodeKey:()=>null,onBeforeElUpdated:(t,n)=>{if("TURBO-FRAME"===n.tagName||n.matches(".js-task-list-field, .contains-task-list")||"false"===n.getAttribute("data-morpheus-enabled"))return t.replaceWith(n),!1;if(t.hasAttribute("data-catalyst")&&n.setAttribute("data-catalyst",t.getAttribute("data-catalyst")||""),t.hasAttribute("data-morpheus-ignore")){let e=(t.getAttribute("data-morpheus-ignore")||"").trim().split(/\s+/);for(let o of e)t.hasAttribute(o)?n.setAttribute(o,t.getAttribute(o)||""):n.removeAttribute(o)}return e?.keepInputValues&&(n instanceof HTMLInputElement&&n.type===t.type||n instanceof HTMLTextAreaElement)&&(n instanceof HTMLInputElement&&("checkbox"===n.type||"radio"===n.type)?n.checked=t.checked:n.value=t.value),!0},onBeforeElChildrenUpdated:(e,t)=>{for(let n of[...e.childNodes,...t.childNodes])n.nodeType===Node.COMMENT_NODE&&n.remove();return!0},onElUpdated:e=>{e.connectedCallback&&queueMicrotask((()=>{e.disconnectedCallback?.(),e.connectedCallback?.()}))}}}function a(e){let t=e.closest("[data-morpheus-enabled]");return null!=t&&"false"!==t.getAttribute("data-morpheus-enabled")}function i(e,t,n){if("string"==typeof t){let e=document.createElement("template");e.innerHTML=t,t=e.content}if(a(e))if(t instanceof DocumentFragment){let a=Array.from(t.children);a.length?((0,o.Z)(e,a[0],r(n)),e.after(...a.slice(1))):e.replaceWith(t)}else(0,o.Z)(e,t,r(n));else e.replaceWith(t)}function l(e,t,n){if(!a(e))return void(e.innerHTML=t);let i="",l="";e.firstChild?.nodeType===Node.TEXT_NODE&&(i=e.firstChild.nodeValue?.match(/^\s+/)?.[0]||""),e.lastChild?.nodeType===Node.TEXT_NODE&&(l=e.lastChild.nodeValue?.match(/\s+$/)?.[0]||"");let s=e.cloneNode(!1);s.innerHTML=`${i}${t.trim()}${l}`,(0,o.Z)(e,s,r(n))}}}]);