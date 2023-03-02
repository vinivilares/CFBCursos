const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let dx = 0; // direção x
let dy = 0; // direção y
let px = 0; // posição x
let py = 0; // posição y
let rectW = 50;
let rectH = 50;
let canvasW = 500;
let canvasH = 500;

function desenha() {
  ctx.clearRect(0, 0, canvasW, canvasH);
  ctx.fillStyle = "#f00";

  ctx.lineWidth = 3; // largura do contorno
  ctx.strokeStyle = "000"; // cor do contorno

  ctx.fillRect(px, py, rectW, rectH);
  ctx.strokeRect(px, py, rectW, rectH); // Renderizando o contorno

  px += dx;
  py += dy;

  // Mover para a direita no topo
  if (px <= 0 && py <= 0) {
    dx = 1;
    dy = 0;
  }

  // Mover para baixo na direita
  if (px + rectW >= canvasW && py <= 0) {
    dx = 0;
    dy = 1;
  }

  // Mover para a esquerda embaixo
  if (px + rectW >= canvasW && py + rectH >= canvasH) {
    dx = -1;
    dy = 0;
  }

  // Mover para cima na esquerda
  if (px <= 0 && py + rectH >= canvasH) {
    dx = 0;
    dy = -1;
  }

  requestAnimationFrame(desenha);
}

desenha();
