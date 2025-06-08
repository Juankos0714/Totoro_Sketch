const colorCieloSuperior = '#a2d2ff';
const colorCieloInferior = '#bde0fe';
const colorHierba = '#73a942';
const colorTotoroCuerpo = '#9c9c9c';
const colorTotoroPanza = '#f5f0e1';
const colorHoja = '#7cb342';
const colorNegroIntenso = '#212529';
const colorBlancoOjos = '#ffffff';
const colorNariz = '#2d3436';
const colorSombra = '#636e72';

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(colorCieloSuperior), color(colorCieloInferior), inter);
    stroke(c);
    line(0, i, width, i);
  }

  noStroke();
  fill(colorHierba);
  ellipse(width / 2, height * 1.2, width * 1.5, height);
  
  stroke(color(colorHoja));
  strokeWeight(2);
  for (let i = 0; i < width; i += 50) {
    let grassHeight = random(20, 40);
    line(i, height - grassHeight, i, height);
    line(i + 10, height - grassHeight * 0.8, i + 10, height);
    line(i + 25, height - grassHeight * 0.6, i + 25, height);
  }

  let cx = width / 2;
  let cy = height / 2 + 20;

  noStroke();
  fill(color(colorSombra + '40'));
  ellipse(cx + 10, cy + 200, 300, 50);

  strokeWeight(3);
  stroke(colorNegroIntenso);
  fill(colorTotoroCuerpo);
  
  ellipse(cx, cy, 280, 320);

  fill(colorTotoroCuerpo);
  stroke(colorNegroIntenso);
  strokeWeight(3);
  
  ellipse(cx - 65, cy - 120, 50, 80);
  ellipse(cx + 65, cy - 120, 50, 80);

  fill(color(colorTotoroCuerpo).levels.map(x => Math.min(255, x * 1.3)));
  noStroke();
  ellipse(cx - 65, cy - 115, 25, 45);
  ellipse(cx + 65, cy - 115, 25, 45);

  noStroke();
  fill(colorTotoroPanza);
  ellipse(cx, cy + 20, 180, 200);

  fill(colorTotoroCuerpo);
  
  let chevronY = cy - 20;
  for (let i = -2; i <= 2; i++) {
    let xPos = cx + i * 18;
    triangle(xPos - 6, chevronY, xPos + 6, chevronY, xPos, chevronY - 10);
  }
  
  chevronY += 20;
  for (let i = -1; i <= 1; i++) {
    let xPos = cx + i * 18;
    triangle(xPos - 5, chevronY, xPos + 5, chevronY, xPos, chevronY - 8);
  }
  
  chevronY += 18;
  triangle(cx - 4, chevronY, cx + 4, chevronY, cx, chevronY - 6);

  fill(colorBlancoOjos);
  stroke(colorNegroIntenso);
  strokeWeight(2);
  ellipse(cx - 35, cy - 50, 50, 45);
  ellipse(cx + 35, cy - 50, 50, 45);

  fill(colorNegroIntenso);
  noStroke();
  ellipse(cx - 30, cy - 45, 18, 18);
  ellipse(cx + 40, cy - 45, 18, 18);
  
  fill(colorBlancoOjos);
  ellipse(cx - 26, cy - 48, 5, 5);
  ellipse(cx + 44, cy - 48, 5, 5);

  fill(colorNegroIntenso);
  noStroke();
  ellipse(cx, cy - 20, 6, 4);
  
  stroke(colorNegroIntenso);
  strokeWeight(2);
  noFill();
  arc(cx, cy - 12, 12, 6, 0, PI);

  strokeWeight(2);
  line(cx - 90, cy - 25, cx - 55, cy - 30);
  line(cx - 88, cy - 15, cx - 55, cy - 18);
  line(cx - 85, cy - 5, cx - 55, cy - 6);
  line(cx + 90, cy - 25, cx + 55, cy - 30);
  line(cx + 88, cy - 15, cx + 55, cy - 18);
  line(cx + 85, cy - 5, cx + 55, cy - 6);

  strokeWeight(3);
  stroke(colorNegroIntenso);
  fill(colorTotoroCuerpo);
  
  ellipse(cx - 120, cy + 30, 40, 100);
  ellipse(cx + 120, cy + 30, 40, 100);

  fill(colorHoja);
  stroke(colorNegroIntenso);
  strokeWeight(2);
  
  push();
  translate(cx, cy - 140);
  rotate(-0.1);
  
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(15, -25);
  curveVertex(25, -40);
  curveVertex(20, -55);
  curveVertex(5, -50);
  curveVertex(-10, -35);
  curveVertex(-5, -15);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  
  stroke(color(colorHoja).levels.map(x => x * 0.6));
  strokeWeight(1);
  line(5, -10, 10, -35);
  
  pop();

  dibujarSusuwatari(width * 0.15, height * 0.65, frameCount * 0.01);
  dibujarSusuwatari(width * 0.88, height * 0.35, frameCount * 0.008);
  dibujarSusuwatari(width * 0.12, height * 0.25, frameCount * 0.012);
}

function dibujarSusuwatari(x, y, tiempo = 0) {
  push(); 
  translate(x, y); 

  stroke(colorNegroIntenso);
  strokeWeight(1.5);
  for (let i = 0; i < 40; i++) {
    let angulo = (i / 40) * TWO_PI + sin(tiempo + i * 0.1) * 0.3;
    let longitud = 20 + sin(tiempo * 2 + i * 0.2) * 6;
    let finX = cos(angulo) * longitud;
    let finY = sin(angulo) * longitud;
    line(0, 0, finX, finY);
  }

  noStroke();
  fill(colorNegroIntenso);
  ellipse(0, 0, 40, 40);

  fill(colorBlancoOjos);
  ellipse(-8 + sin(tiempo) * 1.5, 2, 16, 16);
  ellipse(10 + sin(tiempo) * 1.5, 2, 16, 16);

  fill(colorNegroIntenso);
  ellipse(-6 + sin(tiempo) * 1.5, 4, 6, 6);
  ellipse(12 + sin(tiempo) * 1.5, 4, 6, 6);
  
  fill(colorBlancoOjos);
  ellipse(-4 + sin(tiempo) * 1.5, 2, 2, 2);
  ellipse(14 + sin(tiempo) * 1.5, 2, 2, 2);
  
  pop(); 
}
