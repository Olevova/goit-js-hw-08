!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a=o("1WSnx");console.log(a);var n=document.querySelector("form"),l=document.querySelector("input"),i=document.querySelector("textarea"),u={};n.addEventListener("input",a.throttle((function(e){if(console.log(e.currenTarget,e.target),"INPUT"===e.target.nodeName){var t=e.target.value;u[e.target.name]=t}if("TEXTAREA"===e.target.nodeName){var r=e.target.value;u[e.target.name]=r}return console.log(e),console.log(u),localStorage.setItem("feedback-form-state",JSON.stringify(u))}),500));var c=JSON.parse(localStorage.getItem("feedback-form-state"));n.addEventListener("submit",(function(e){e.preventDefault(),console.log(c),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),console.log(c,i,c.email),c&&(l.value=c.email,i.value=c.massage)}();
//# sourceMappingURL=03-feedback.ef75fa51.js.map
