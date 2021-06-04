var nota = 80;

// Aprovado com louvor  >= 95
// Aprovado             >= 60
// Recuperação          >= 40 && < 60
// Reprovado            < 40
// Reprovado com louvor < 20

if (nota >= 60) {
    res = "Aprovado";
    if (nota >= 95) {
        if (nota == 100) {
            res += " com excelencia";
        } else {
            res += " com louvor";
        }
    } else {
        res += " com nota normal";
    }
} else if (nota >= 40) {
    res = "Recuperação";
} else {
    res = "Reprovado"
    if (nota >=20) {
        res += " por nota baixa";
    } else {
        res += " com louvor";
    }
}

document.write(res);