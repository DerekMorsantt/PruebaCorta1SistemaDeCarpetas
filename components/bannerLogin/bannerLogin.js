import { logIn } from "../logIn/logIn.js";
import { register } from "../register/register.js";

export function login (){
    let login = document.createElement('div');
    login.className = "login";

    let span = document.createElement('span');
    span.className = "span"
    span.textContent = "Geeta.";
    login.appendChild(span);

    let span1 = document.createElement('span');
    span1.className = "span1";
    span1.textContent = "Create your fashion in your own way";
    login.appendChild(span1);
    
    let span2 = document.createElement('span');
    span2.className = "span2";
    span2.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    login.appendChild(span2);

    let btn1 = document.createElement('div');
    btn1.addEventListener('click',()=>{
        login.classList.add("ocultar");
        document.body.appendChild(logIn());
    });
    
    btn1.className = "btn1";
    btn1.textContent = "LOG IN";
    login.appendChild(btn1);

    let span3 = document.createElement('span');
    span3.className = "span3";
    span3.textContent = "--  OR  --";
    login.appendChild(span3);

    let btn2 = document.createElement('div');
        btn2.addEventListener('click',()=>{
        login.classList.add("ocultar");
        document.body.appendChild(register());
    });

    btn2.className = "btn2";
    btn2.textContent = "REGISTER";
    login.appendChild(btn2);
    
    return login;
}

