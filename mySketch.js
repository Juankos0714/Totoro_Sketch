const colorCieloSuperior = '#a2d2ff';
const colorCieloInferior = '#bde0fe';
const colorHierba = '#73a942';
const colorTotoroCuerpo = '#8a8a8a';
const colorTotoroPanza = '#f6f3e7';
const colorHoja = '#588157';
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
  let cy = height / 2 + 40;

  noStroke();
  fill(color(colorSombra + '40'));
  ellipse(cx + 10, cy + 270, 280, 60);

  strokeWeight(3);
  stroke(colorNegroIntenso);
  fill(colorTotoroCuerpo);

  beginShape();
  curveVertex(cx, cy + 250); 
  curveVertex(cx, cy + 250); 
  curveVertex(cx - 140, cy + 200);
  curveVertex(cx - 160, cy + 50);
  curveVertex(cx - 150, cy - 50); 
  curveVertex(cx - 90, cy - 140);
  curveVertex(cx - 75, cy - 170);
  curveVertex(cx - 45, cy - 185);
  curveVertex(cx - 35, cy - 160);
  curveVertex(cx, cy - 165);
  curveVertex(cx + 35, cy - 160);
  curveVertex(cx + 45, cy - 185);
  curveVertex(cx + 75, cy - 170);
  curveVertex(cx + 90, cy - 140);
  curveVertex(cx + 150, cy - 50);
  curveVertex(cx + 160, cy + 50);
  curveVertex(cx + 140, cy + 200);
  curveVertex(cx, cy + 250); 
  curveVertex(cx, cy + 250); 
  endShape(CLOSE);
  
  beginShape();
  curveVertex(cx - 110, cy + 160);
  curveVertex(cx - 110, cy + 160);
  curveVertex(cx - 170, cy + 120);
  curveVertex(cx - 180, cy + 60);
  curveVertex(cx - 160, cy + 10);
  curveVertex(cx - 130, cy - 30);
  curveVertex(cx - 85, cy - 20);
  curveVertex(cx - 110, cy + 160);
  curveVertex(cx - 110, cy + 160);
  endShape();
  
  beginShape();
  curveVertex(cx + 110, cy + 160);
  curveVertex(cx + 110, cy + 160);
  curveVertex(cx + 170, cy + 120);
  curveVertex(cx + 180, cy + 60);
  curveVertex(cx + 160, cy + 10);
  curveVertex(cx + 130, cy - 30);
  curveVertex(cx + 85, cy - 20);
  curveVertex(cx + 110, cy + 160);
  curveVertex(cx + 110, cy + 160);
  endShape();

  noStroke();
  fill(colorTotoroPanza);
  ellipse(cx, cy + 60, 220, 240);

  fill(colorTotoroCuerpo);
  let chevronY = cy - 10;
  
  for (let i = -2; i <= 2; i++) {
    let xPos = cx + i * 20;
    triangle(xPos - 8, chevronY, xPos + 8, chevronY, xPos, chevronY - 12);
  }
  
  chevronY += 25;
  for (let i = -1; i <= 1; i++) {
    let xPos = cx + i * 20;
    triangle(xPos - 7, chevronY, xPos + 7, chevronY, xPos, chevronY - 10);
  }
  
  chevronY += 20;
  triangle(cx - 5, chevronY, cx + 5, chevronY, cx, chevronY - 8);

  fill(colorBlancoOjos);
  stroke(colorNegroIntenso);
  strokeWeight(2);
  ellipse(cx - 40, cy - 75, 45, 40);
  ellipse(cx + 40, cy - 75, 45, 40);

  fill(colorNegroIntenso);
  noStroke();
  ellipse(cx - 35, cy - 72, 16, 16);
  ellipse(cx + 45, cy - 72, 16, 16);
  
  fill(colorBlancoOjos);
  ellipse(cx - 32, cy - 75, 4, 4);
  ellipse(cx + 48, cy - 75, 4, 4);

  fill(colorNariz);
  noStroke();
  ellipse(cx, cy - 45, 8, 6);
  
  stroke(colorNegroIntenso);
  strokeWeight(2);
  noFill();
  arc(cx, cy - 35, 15, 8, 0, PI);

  strokeWeight(2);
  line(cx - 120, cy - 35, cx - 65, cy - 40);
  line(cx - 118, cy - 25, cx - 65, cy - 25);
  line(cx - 115, cy - 15, cx - 65, cy - 10);
  line(cx + 120, cy - 35, cx + 65, cy - 40);
  line(cx + 118, cy - 25, cx + 65, cy - 25);
  line(cx + 115, cy - 15, cx + 65, cy - 10);

  strokeWeight(3);
  line(cx - 155, cy + 75, cx - 145, cy + 88);
  line(cx - 145, cy + 80, cx - 135, cy + 93);
  line(cx - 135, cy + 85, cx - 125, cy + 98);
  line(cx + 155, cy + 75, cx + 145, cy + 88);
  line(cx + 145, cy + 80, cx + 135, cy + 93);
  line(cx + 135, cy + 85, cx + 125, cy + 98);

  fill(colorTotoroCuerpo);
  stroke(colorNegroIntenso);
  strokeWeight(3);
  
  beginShape();
  curveVertex(cx - 50, cy - 150);
  curveVertex(cx - 50, cy - 150);
  curveVertex(cx - 30, cy - 190);
  curveVertex(cx - 15, cy - 200);
  curveVertex(cx - 5, cy - 195);
  curveVertex(cx - 10, cy - 180);
  curveVertex(cx - 25, cy - 160);
  curveVertex(cx - 50, cy - 150);
  curveVertex(cx - 50, cy - 150);
  endShape();
  
  beginShape();
  curveVertex(cx + 50, cy - 150);
  curveVertex(cx + 50, cy - 150);
  curveVertex(cx + 30, cy - 190);
  curveVertex(cx + 15, cy - 200);
  curveVertex(cx + 5, cy - 195);
  curveVertex(cx + 10, cy - 180);
  curveVertex(cx + 25, cy - 160);
  curveVertex(cx + 50, cy - 150);
  curveVertex(cx + 50, cy - 150);
  endShape();

  fill(colorHoja);
  stroke(colorNegroIntenso);
  strokeWeight(2);
  beginShape();
  curveVertex(cx + 5, cy - 160);
  curveVertex(cx + 5, cy - 160);
  curveVertex(cx + 35, cy - 185);
  curveVertex(cx + 45, cy - 205);
  curveVertex(cx + 25, cy - 220);
  curveVertex(cx + 5, cy - 210);
  curveVertex(cx - 5, cy - 190);
  curveVertex(cx + 5, cy - 160);
  curveVertex(cx + 5, cy - 160);
  endShape();
  
  stroke(color(colorHoja).levels.map(x => x * 0.7));
  strokeWeight(1);
  line(cx + 15, cy - 180, cx + 20, cy - 200);

  dibujarSusuwatari(width * 0.15, height * 0.65, frameCount * 0.01);
  dibujarSusuwatari(width * 0.88, height * 0.35, frameCount * 0.008);
  dibujarSusuwatari(width * 0.12, height * 0.25, frameCount * 0.012);
}

function dibujarSusuwatari(x, y, tiempo = 0) {
  push(); 
  translate(x, y); 

  stroke(colorNegroIntenso);
  strokeWeight(1.5);
  for (let i = 0; i < 60; i++) {
    let angulo = (i / 60) * TWO_PI + sin(tiempo + i * 0.1) * 0.3;
    let longitud = 25 + sin(tiempo * 2 + i * 0.2) * 8;
    let finX = cos(angulo) * longitud;
    let finY = sin(angulo) * longitud;
    line(0, 0, finX, finY);
  }

  noStroke();
  fill(colorNegroIntenso);
  ellipse(0, 0, 50, 50);

  fill(colorBlancoOjos);
  ellipse(-10 + sin(tiempo) * 2, 2, 20, 20);
  ellipse(12 + sin(tiempo) * 2, 2, 20, 20);

  fill(colorNegroIntenso);
  ellipse(-8 + sin(tiempo) * 2, 4, 8, 8);
  ellipse(14 + sin(tiempo) * 2, 4, 8, 8);
  
  fill(colorBlancoOjos);
  ellipse(-6 + sin(tiempo) * 2, 2, 2, 2);
  ellipse(16 + sin(tiempo) * 2, 2, 2, 2);
  
  pop(); 
}