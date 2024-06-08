function atualizarTempo() {
    var agora = new Date();
 
    var horas = `${corrigirHora(agora.getHours())}:${corrigirHora(agora.getMinutes())}:${corrigirHora(agora.getSeconds())}`

    var relogio = document.querySelector(".display");

    relogio.textContent = horas
}

function corrigirHora(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
} 

setInterval(atualizarTempo, 1000);
