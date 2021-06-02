var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;

function preCarregamento() {
    var s = 1;
    for (var i = 0; i < 5; i++) {
        imgs[i] = new Image();
        imgs[i].src = "images/s" +s+ ".jpg";
        s++;
    }
}

function carregarImg(img) {
    slider.style.backgroundImage = "url('"+imgs[img].src+"')";
}

function iniciar() {
    preCarregamento();
    imgAtual = 0;
    maxImg = imgs.length-1;
    slider = document.getElementById("dvslider");
    carregarImg(imgAtual);
    tempoTroca = 3000;
    tmp = setInterval(troca, tempoTroca);
}

function troca() {
    imgAtual++;
    if (imgAtual > maxImg) {
        imgAtual = 0;
    }
    carregarImg(imgAtual);
}

window.addEventListener("load", iniciar);