var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("kEUo3");const n=document.querySelector("form"),l=document.querySelector("input"),i=document.querySelector("textarea"),s={};n.addEventListener("input",a.throttle((e=>{if(console.log(e.currenTarget,e.target),"INPUT"===e.target.nodeName){const t=e.target.value;s.email=t}if("TEXTAREA"===e.target.nodeName){const t=e.target.value;s.massage=t}return console.log(e),console.log(s),localStorage.setItem("feedback-form-state",JSON.stringify(s))})),500);const c=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(c,i,c.email),c&&(l.value=c.email,i.value=c.massage);
//# sourceMappingURL=03-feedback.434b23d6.js.map
