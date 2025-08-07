export function logIn (){
    let logIn = document.createElement('div');
    logIn.className = "logIn";

    let bloq1 = document.createElement('div');
    bloq1.className = "bloq1";
    logIn.appendChild(bloq1);

    let arrow = document.createElement('img');
    arrow.className = "arrow";
    arrow.src = "../../assets/iconos/Back-arrow.svg";
    logIn.appendChild(arrow);
    return logIn;
}

