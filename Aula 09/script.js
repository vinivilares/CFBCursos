var nota = 60;

// Aprovado     >= 60
// Recuperação  >= 40 && < 60
// Reprovado    < 40

if (nota >= 60) {
    res = "Aprovado";
} else if (nota >= 40) {
    res = "Recuperação";
} else {
    res = "Reprovado"
}

document.write(res);