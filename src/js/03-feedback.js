// підключаємо бібліотеку
const loadash = require("lodash");
console.log(loadash);
// дом елементи форми
const formEl = document.querySelector('form');
const inputEl = document.querySelector("input");
const textEl = document.querySelector("textarea")

// створення пустого обєкта для даних, а також слухача , який буде збирати данні та записувати їх в локал сторідж
const clientInfo = {};

formEl.addEventListener("input", loadash.throttle((event) => {
    console.log(event.currenTarget, event.target);
    if (event.target.nodeName === 'INPUT') {
        const email = event.target.value;
        clientInfo[event.target.name] = email;
    }

    if (event.target.nodeName === 'TEXTAREA') {
        const massage = event.target.value;
        clientInfo[event.target.name] = massage;
    }
    console.log(event);
    console.log(clientInfo);
    return localStorage.setItem("feedback-form-state", JSON.stringify(clientInfo))
},500))


// Створення слухача на сабміт

const dataValue = JSON.parse(localStorage.getItem("feedback-form-state"));
// inputEl.value = dataValue.email;

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(dataValue);
    event.currentTarget.reset()
    // inputEl.value = "";
    // textEl.value = "";
    localStorage.removeItem("feedback-form-state");    
})

console.log(dataValue, textEl, dataValue.email);

if (dataValue) {
    inputEl.value = dataValue.email;
    textEl.value = dataValue.massage;
}