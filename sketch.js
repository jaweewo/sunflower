function setup() {
    createCanvas(400, 400);
    background(255);

    // Dibujamos el girasol en el centro
    drawSunflower(width / 2, height / 2);
}

function drawSunflower(x, y) {
    let petalCount = 25;  // Más pétalos
    let petalLength = 90;  // Longitud de los pétalos
    let petalWidth = 40;   // Ancho de los pétalos

    // Dibujamos el centro del girasol (más detallado)
    drawCenter(x, y);

    // Dibujamos los pétalos
    for (let i = 0; i < petalCount; i++) {
        let angle = map(i, 0, petalCount, 0, TWO_PI);
        let petalX = x + cos(angle) * 30;
        let petalY = y + sin(angle) * 30;

        drawPetal(petalX, petalY, angle, petalLength, petalWidth);
    }

    // Dibujamos el tallo
    drawStem(x, y + 20, 120, 15);
}

function drawCenter(x, y) {
    noStroke();
    fill(150, 75, 0); // Color marrón del centro
    ellipse(x, y, 60, 60);  // Centro grande

    // Detalles del centro (textura)
    fill(100, 50, 0);
    for (let i = 0; i < 40; i++) {
        let angle = random(TWO_PI);
        let r = random(25, 30);
        let px = x + cos(angle) * r;
        let py = y + sin(angle) * r;
        ellipse(px, py, random(4, 6), random(4, 6));  // Crear una textura más orgánica
    }
}

function drawPetal(x, y, angle, length, width) {
    push();
    translate(x, y);
    rotate(angle);
    fill(255, 204, 0);  // Color amarillo brillante
    noStroke();
    ellipse(0, 0, width, length);
    pop();
}

function drawStem(x, y, length, width) {
    fill(34, 139, 34);  // Color verde para el tallo
    noStroke();
    rect(x - width / 2, y, width, length);  // Tallo rectangular
}
