function setup() {
    createCanvas(400, 400);
    background(0);  // Fondo negro
    noFill();
    stroke(255);
    strokeWeight(1);
    // Generamos los pétalos
    generatePetals();
    // Generamos el centro de la flor
    generateCenter();
}

function generatePetals() {
    let h = 0;  // Hue del color
    translate(width / 2, height / 2); // Centrar el dibujo
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 18; j++) {
            let c = color(hueToRGB(h), 255, 255); // Color en espacio HSV
            stroke(c);
            rotate(PI / 9); // Rotamos un poco para crear los pétalos
            drawPetal(150 - j * 6);
            h += 0.125; // Aumentamos el tono de color
        }
        rotate(PI / 8); // Vuelta ligera para distribuir los pétalos
    }
}

function generateCenter() {
    push();
    fill(139, 69, 19);  // Color marrón para el centro
    noStroke();
    let phi = radians(137.508);  // Ángulo phi en radianes
    for (let i = 0; i < 200; i++) {
        let r = 4 * sqrt(i);
        let theta = i * phi;
        let x = r * cos(theta);
        let y = r * sin(theta);
        ellipse(x, y, 2, 2);  // Dibujamos cada punto en el centro
    }
    pop();
}

function drawPetal(radius) {
    for (let i = 0; i < 2; i++) {
        ellipse(0, -radius, 150, 90); // Dibujamos los dos semi-pétalos
        rotate(PI); // Giramos 180 grados
    }
}

// Función para convertir el valor HSV a RGB
function hueToRGB(hue) {
    return color(hue * 360, 100, 100);  // Ajustamos la conversión de HSV a RGB
}
