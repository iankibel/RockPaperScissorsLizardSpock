/**************************** DOM Calling *****************************/
let puntosUsuario = 0;
let puntosPC = 0;
let btnStart = document.querySelector("#btn-start");
let startRules = document.querySelector("#start-rules")
let instrucciones = document.querySelector("#instrucciones");
let marcador = document.querySelector("#marcador")
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");
let conteendorEleccionUsuario = document.querySelector("#eleccion-usuario");
let conteendorEleccionPC = document.querySelector("#eleccion-computadora");
let botonesArmas = document.querySelectorAll(".arma");
let reiniciar = document.querySelector("#reiniciar")
const buttonRightModal = document.querySelector("#btn-modal")
const rightModal = document.querySelector("#modal-right")
const closeRightModal = document.querySelector("#btn-close")

/**************************** Start game *****************************/
btnStart.addEventListener("click", startGame)

function startGame() {
    startRules.classList.add("disabled")
    btnStart.classList.add("disabled")
    instrucciones.classList.remove("disabled")
    marcador.classList.remove("disabled")
    elegiTuArma.classList.remove("disabled")
    buttonRightModal.classList.remove("disabled")
}

/**************************** Start turn *****************************/
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3)
    let eleccionUsuario = e.currentTarget.id


    /**************************** Weapon value def *****************************/
    switch (eleccionPC) {
        case 0:
            eleccionPC = "rock"
            break;
        case 1:
            eleccionPC = "paper"
            break;
        case 2:
            eleccionPC = "scissors"
            break;
        case 3:
            eleccionPC = "lizard"
            break;
        case 4:
            eleccionPC = "spock"
            break;
    }

    /**************************** Win conditions *****************************/
    if(
        (eleccionUsuario === "rock" && eleccionPC === "scissors") ||
        (eleccionUsuario === "rock" && eleccionPC === "lizard") ||
        (eleccionUsuario === "paper" && eleccionPC === "rock") ||
        (eleccionUsuario === "paper" && eleccionPC === "spock") ||
        (eleccionUsuario === "scissors" && eleccionPC === "paper") ||
        (eleccionUsuario === "scissors" && eleccionPC === "lizard") ||
        (eleccionUsuario === "lizard" && eleccionPC === "paper") ||
        (eleccionUsuario === "lizard" && eleccionPC === "spock") ||
        (eleccionUsuario === "spock" && eleccionPC === "rock") ||
        (eleccionUsuario === "spock" && eleccionPC === "scissors")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "rock" && eleccionUsuario === "scissors") ||
        (eleccionPC === "rock" && eleccionUsuario === "lizard") ||
        (eleccionPC === "paper" && eleccionUsuario === "rock") ||
        (eleccionPC === "paper" && eleccionUsuario === "spock") ||
        (eleccionPC === "scissors" && eleccionUsuario === "paper") ||
        (eleccionPC === "scissors" && eleccionUsuario === "lizard") ||
        (eleccionPC === "lizard" && eleccionUsuario === "paper") ||
        (eleccionPC === "lizard" && eleccionUsuario === "spock") ||
        (eleccionPC === "spock" && eleccionUsuario === "rock") ||
        (eleccionPC === "spock" && eleccionUsuario === "scissors")
    ) {
        ganaPC();
    } else {
        empate();
    }
    mensaje.classList.remove("disabled");
    conteendorEleccionUsuario.innerText = eleccionUsuario;
    conteendorEleccionPC.innerText = eleccionPC;

    /**************************** Limit score *****************************/
    if (puntosPC === 5 || puntosUsuario === 5) {
        if (puntosUsuario === 5) {
            instrucciones.innerText = "Ganaste el juego!🎉"
        }
        if (puntosPC === 5) {
            instrucciones.innerText = "La computadora ganó el juego!😪"
        }
        elegiTuArma.classList.add("disabled")
        reiniciar.classList.remove("disabled")
        reiniciar.addEventListener("click", reiniciarJuego)
    }
}

/**************************** Winner *****************************/
function ganaUsuario() {
    puntosUsuario ++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "You scored!😁"
}

function ganaPC() {
    puntosPC ++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "The computer scored!😥"
}

function empate() {
    contenedorGanaPunto.innerText = "It's a tie!😐"
}

/**************************** Restart *****************************/
function reiniciarJuego() {
    reiniciar.classList.add("disabled")
    elegiTuArma.classList.remove("disabled")
    mensaje.classList.add("disabled")

    puntosUsuario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "First to score 5, wins"
}

/**************************** Help modal *****************************/


buttonRightModal.addEventListener("click", () => {
    rightModal.classList.add("active")
})

closeRightModal.addEventListener("click", () => {
    rightModal.classList.remove("active")
})