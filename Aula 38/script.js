function relogio() {
    var data = new Date(); // cria data
    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    // se o tempo for menor que 10, recebe um 0 antes do digito
    if (hor < 10) {
        hor = '0' + hor;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (seg < 10) {
        seg = '0' + seg;
    }
    
    var horas = hor + ':' + min + ':' + seg; // formata hora

    document.getElementById("rel").value = horas; // exibe as horas no input 
}

var tempo = setInterval(relogio, 1000); // atualiza a cada 1000 ms