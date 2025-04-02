function setup() {
    createCanvas(400, 400);
    background(255);  // Fondo blanco

    drawSunflower(width / 2, height / 2);
}

function drawSunflower(x, y) {
    let petalCount = 20;  // Número de pétalos
    let petalLength = 80;  // Longitud del pétalo
    let petalWidth = 30;   // Ancho del pétalo

    // Dibujar el centro del girasol
    fill(150, 75, 0);  // Color marrón
    noStroke();
    ellipse(x, y, 60, 60);

    // Dibujar los pétalos
    for (let i = 0; i < petalCount; i++) {
        let angle = map(i, 0, petalCount, 0, TWO_PI);
        let petalX = x + cos(angle) * 60;
        let petalY = y + sin(angle) * 60;

        drawPetal(petalX, petalY, angle, petalLength, petalWidth);
    }
}

function drawPetal(x, y, angle, length, width) {
    push();
    translate(x, y);
    rotate(angle);
    fill(255, 204, 0);  // Color amarillo
    noStroke();
    ellipse(0, 0, width, length);
    pop();
}
