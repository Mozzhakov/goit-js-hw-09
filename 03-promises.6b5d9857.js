var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");function r(e,t){new Promise(((n,o)=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})})).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}function l(e){return Number(e)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements,n=l(t.delay.value),o=l(t.step.value),i=l(t.amount.value);let a=0,s=n;setTimeout((()=>{r(a,s);const e=setInterval((()=>{a+=1,s+=o,a===i&&clearInterval(e),r(a,s)}),o)}),n)}));
//# sourceMappingURL=03-promises.6b5d9857.js.map
