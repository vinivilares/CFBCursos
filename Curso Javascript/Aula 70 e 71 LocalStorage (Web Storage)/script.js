// // Verifica se o browser suporta localStorage
// if (typeof (Storage) != "undefined") {
//     if (localStorage.visitas) {
//         localStorage.visitas = Number(localStorage.visitas) + 1;
//     } else {
//         localStorage.setItem("visitas", "1");
//         // localStorage.visitas = 1;        
//     }
//     document.write("Visitas: " + localStorage.visitas);

// } else {
//     document.write("Sem suporte a Web Storage!");
// }

// localStorage.setItem("canal", "CFBCursos");
// localStorage.removeItem("canal", "CFBCursos");
// var vCanal = localStorage.getItem("canal");
// var vCanal = localStorage.canal;
// document.write(vCanal);

var vcorf, vcort, vnome;

// Verifica se o browser suporta localStorage
if (localStorage.nome) {
    vcorf = localStorage.corf;
    vcort = localStorage.cort;
    vnome = localStorage.nome;
    defineCor(1, vcorf);
    defineCor(2, vcort);
    document.getElementById("painel").innerHTML = "Bem vindo " + vnome;
}

function gravar() {
    var form = document.getElementById("fconf");
    vnome = document.getElementById("fnome").value;
    localStorage.corf = vcorf;
    localStorage.cort = vcort;
    localStorage.nome = vnome;
    form.style.display = "none"
}

function defineCor(op, cor) {
    if (op == 1) {
        document.body.style.backgroundColor = cor;
        vcorf = cor;
    } else {
        document.body.style.color = cor;
        vcort = cor;
    }
}

function mostraConf() {
    var form = document.getElementById("fconf");
    form.style.display = "block"
}