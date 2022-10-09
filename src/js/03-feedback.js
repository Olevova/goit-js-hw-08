console.log("rrrrr");
const my = document.querySelector('form')
console.log(my);
console.log("ffffff")

const clientInfo = { email:null, massage:null};

my.addEventListener("input", (event) => {
    
    if(event.target.nodeName === 'INPUT') {
        const email = event.target.value;
        clientInfo.email = email;

    };
    event.target.nodeName === 'TEXTAREA'
    const massage = event.target.value;
    clientInfo.massage = massage;


   

    console.log(clientInfo);
    return localStorage.setItem("feedback-form-state", JSON.stringify(clientInfo))
})