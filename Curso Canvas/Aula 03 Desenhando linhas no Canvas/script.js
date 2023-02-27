function desenha() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  // Indica onde a linha começa (x, y)
  ctx.moveTo(0, 0);

  // Indica a direção que a linha ira movimentar (x, y)
  ctx.lineTo(250, 250);
  ctx.lineTo(400, 250);
  ctx.lineTo(400, 100);

  ctx.moveTo(250, 250);
  ctx.lineTo(200, 300);

  // Renderiza a linha
  ctx.stroke();
}