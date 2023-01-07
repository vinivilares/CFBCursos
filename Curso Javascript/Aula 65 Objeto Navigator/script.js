var painel;

function localizar(position) {
    var coordenadas = position.coords;
    painel.innerHTML += "Localização Lat: " + coordenadas.latitude + " - " + "Lon: " + coordenadas.longitude + "<hr>";
}

function verifica() {
    painel = document.getElementById("painel");
    painel.innerHTML = "Nome do Browser: " + window.navigator.appName + "<hr>";
    painel.innerHTML += "Versão do Browser: " + window.navigator.appVersion + "<hr>";
    painel.innerHTML += "Cookies: " + window.navigator.cookieEnabled + "<hr>";
    window.navigator.geolocation.getCurrentPosition(localizar) + "<hr>";
    painel.innerHTML += "Idioma: " + window.navigator.language + "<hr>";
    painel.innerHTML += "Online: " + window.navigator.onLine + "<hr>";
    painel.innerHTML += "Sistema Operacional: " + window.navigator.platform + "<hr>";
    painel.innerHTML += "Engine: " + window.navigator.product + "<hr>";
    painel.innerHTML += "Agente: " + window.navigator.userAgent + "<hr>";
}

window.addEventListener("load", verifica);