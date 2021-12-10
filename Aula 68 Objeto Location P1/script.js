let aux = location.hash;
let dados = aux.split('#');
let v1 = dados[1];
let v2 = dados[2];

document.write("<hr>");
document.write("Propriedade hash: ");
document.write(v1 + ' ' + v2);
document.write("<hr>");

document.write("Propriedade hostnome: ");
let hostname = location.hostname;
document.write(hostname + "<hr>");

document.write("Propriedade href: ");
let href = location.href;
// let href = location.href = "https://www.google.com/";
document.write(href + "<hr>");

document.write("Propriedade origin: ");
let origem = location.origin; // Protocolo, hostname, porta
document.write(origem + "<hr>");

document.write("Propriedade pathname: ");
let path = location.pathname; // Caminho após o protocolo https://www.google.com/
document.write(path + "<hr>");

document.write("Propriedade pathname: ");
let porta = location.port;
document.write(porta + "<hr>");

document.write("Propriedade pathname: ");
let protocolo = location.protocol;
document.write(protocolo + "<hr>");

// aux2 = location.search;
// dados2 = aux2.split('?');
// v3 = dados2[1].split('=')[1];
// document.write(v3);
