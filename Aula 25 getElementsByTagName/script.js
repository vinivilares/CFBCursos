// Retorna um vetor

/* var tagsP = document.getElementsByTagName('p')

for (var i = 0; i < tagsP.length; i++) {
    tagsP[i].style.color = "#f00"
} */

var tags = document.getElementsByTagName('*')

tags[9].innerHTML = "NOVO TEXTO"
tags[9].style.color = "#f00"