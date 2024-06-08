function atualizarTempo() {
    var agora = new Date();
 
    var horas = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`

    var relogio = document.querySelector(".display");

    relogio.textContent = horas
}

setInterval(atualizarTempo, 1000);