var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("kEUo3");console.log(a);const n=document.querySelector("form"),l=document.querySelector("input"),c=document.querySelector("textarea"),s={};n.addEventListener("input",a.throttle((e=>{if(console.log(e.currenTarget,e.target),"INPUT"===e.target.nodeName){const t=e.target.value;s[e.target.name]=t}if("TEXTAREA"===e.target.nodeName){const t=e.target.value;s[e.target.name]=t}return console.log(e),console.log(s),localStorage.setItem("feedback-form-state",JSON.stringify(s))}),500));const i=JSON.parse(localStorage.getItem("feedback-form-state"));n.addEventListener("submit",(e=>{e.preventDefault(),console.log(i),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),console.log(i,c,i.email),i&&(l.value=i.email,c.value=i.massage);
//# sourceMappingURL=03-feedback.56540dd6.js.map
