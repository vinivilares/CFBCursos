var pontos = 72;
var energia = 40;

if(((pontos >= 30) && (pontos <= 40)) || ((pontos >= 70) && (pontos <= 80) && (energia >= 40))) {
    document.write("Ganhou");
} else {
    document.write("Perdeu");
}