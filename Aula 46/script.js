var texto = document.getElementById("txt").innerHTML;

// Modificadores
// Adicionar duas barras e depois o modificador
// i = Busca sem case-sensitive, ou seja, não diferencia letras maiúsculas de minúsculas
// g = Diz ao método para encotrar todas as ocorrências da palavra e não parar na primeira encontrada, cada ocorrência é armazenada em uma posição do array
// m = Pesquisa normal sem armazenar em forma de array

var res = texto.match(/\w/ig);

document.write(res + " : " + res.length + "<br>");

document.write(res[1]);