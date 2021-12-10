let novoH1 = document.createElement("h1"); // criei um h1 vazio
let listaCursos = document.getElementById("cfbcursos"); // peguei a lista da div
let antigoP = listaCursos.childNodes[3]; // escolhi um elemento da lista
let txtH1 = document.createTextNode(antigoP.innerHTML); // criei um texto para o h1

novoH1.appendChild(txtH1); // adicionei o texto do elemento ao h1
listaCursos.replaceChild(novoH1, antigoP); // troquei o p pelo h1