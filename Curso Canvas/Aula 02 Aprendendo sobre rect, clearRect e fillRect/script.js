function desenha() {
  /** @type {HTMLCanvasElement} */

  let px = 50;
  let py = 50;

  let canvas = document.getElementById("desenho1");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "#00f";

  ctx.rect(px, py, 200, 200);
  ctx.fill();

  ctx.clearRect(50, 50, 100, 100);
}
