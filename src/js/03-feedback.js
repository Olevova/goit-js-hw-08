const loadash = require("lodash");
const formEl = document.querySelector('form');
const inputEl = document.querySelector("input");
const textEl = document.querySelector("textarea")

const clientInfo = {};

formEl.addEventListener("input", loadash.throttle((event) => {
    console.log(event.currenTarget, event.target);
    if (event.target.nodeName === 'INPUT') {
        const email = event.target.value;
        clientInfo.email = email;
    }

    if (event.target.nodeName === 'TEXTAREA') {
        const massage = event.target.value;
        clientInfo.massage = massage;
    }
    console.log(event);
    console.log(clientInfo);
    return localStorage.setItem("feedback-form-state", JSON.stringify(clientInfo))
}), 500)

const dataValue = JSON.parse(localStorage.getItem("feedback-form-state"));
// inputEl.value = dataValue.email;

console.log(dataValue, textEl, dataValue.email);

if (dataValue) {
    inputEl.value = dataValue.email;
    textEl.value = dataValue.massage;
}