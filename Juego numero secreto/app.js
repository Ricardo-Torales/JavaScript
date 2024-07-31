
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del numero secreto!');
    asignarTextoElemento('p', 'Escoje un numero del 1 al 10');
    numeroSecreto = guardarNumeroSecreto();
    intentos = 1;

}

condicionesIniciales();



let = numeroSecreto = guardarNumeroSecreto();
console.log(numeroSecreto)
function guardarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}
guardarNumeroSecreto();

function generarNumeroSecreto() {
    return
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez!' : 'veces!'}`);
        reiniciar();
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    console.log(intentos);
    return;
}



function reiniciar(params) {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJuego () {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de números
    // generar el numero aleatorio
    // inicializar numeros de intentos
    condicionesIniciales();
    // deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



