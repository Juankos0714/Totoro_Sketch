const colorCieloSuperior = '#a2d2ff';
const colorCieloInferior = '#bde0fe';
const colorHierba = '#73a942';
const colorTotoroCuerpo = '#8a8a8a';
const colorTotoroPanza = '#f6f3e7';
const colorHoja = '#588157';
const colorNegroIntenso = '#212529';
const colorBlancoOjos = '#ffffff';

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

  let cx = width / 2;
  let cy = height / 2 + 40;

  strokeWeight(2);
  stroke(colorNegroIntenso);
  fill(colorTotoroCuerpo);


  beginShape();
  curveVertex(cx, cy + 250); 
  curveVertex(cx, cy + 250); 
  curveVertex(cx - 150, cy + 180);
  curveVertex(cx - 150, cy); 
  curveVertex(cx - 80, cy - 150);
  curveVertex(cx - 70, cy - 180);
  curveVertex(cx - 40, cy - 190);
  curveVertex(cx - 30, cy - 150);
  curveVertex(cx, cy - 160);
  curveVertex(cx + 30, cy - 150);
  curveVertex(cx + 40, cy - 190);
  curveVertex(cx + 70, cy - 180);
  curveVertex(cx + 80, cy - 150);
  curveVertex(cx + 150, cy);
  curveVertex(cx + 150, cy + 180);
  curveVertex(cx, cy + 250); 
  curveVertex(cx, cy + 250); 
  endShape(CLOSE);
  
  beginShape();
  curveVertex(cx - 100, cy + 150);
  curveVertex(cx - 100, cy + 150);
  curveVertex(cx - 160, cy + 100);
  curveVertex(cx - 130, cy - 20);
  curveVertex(cx - 80, cy - 10);
  curveVertex(cx - 100, cy + 150);
  curveVertex(cx - 100, cy + 150);
  endShape();
  beginShape();
  curveVertex(cx + 100, cy + 150);
  curveVertex(cx + 100, cy + 150);
  curveVertex(cx + 160, cy + 100);
  curveVertex(cx + 130, cy - 20);
  curveVertex(cx + 80, cy - 10);
  curveVertex(cx + 100, cy + 150);
  curveVertex(cx + 100, cy + 150);
  endShape();


  noStroke();
  fill(colorTotoroPanza);
  ellipse(cx, cy + 50, 200, 220);

  fill(colorTotoroCuerpo);
  let chevronY = cy - 5;
  triangle(cx - 35, chevronY, cx - 25, chevronY, cx - 30, chevronY - 10);
  triangle(cx - 15, chevronY, cx - 5, chevronY, cx - 10, chevronY - 10);
  triangle(cx + 5, chevronY, cx + 15, chevronY, cx + 10, chevronY - 10);
  triangle(cx + 25, chevronY, cx + 35, chevronY, cx + 30, chevronY - 10);
  
  chevronY += 20;
  triangle(cx - 25, chevronY, cx - 15, chevronY, cx - 20, chevronY - 10);
  triangle(cx - 5, chevronY, cx + 5, chevronY, cx, chevronY - 10);
  triangle(cx + 15, chevronY, cx + 25, chevronY, cx + 20, chevronY - 10);

  fill(colorBlancoOjos);
  stroke(colorNegroIntenso);
  strokeWeight(1.5);
  ellipse(cx - 35, cy - 70, 35, 35);
  ellipse(cx + 35, cy - 70, 35, 35);

  fill(colorNegroIntenso);
  noStroke();
  ellipse(cx - 32, cy - 68, 12, 12);
  ellipse(cx + 38, cy - 68, 12, 12);

  stroke(colorNegroIntenso);
  strokeWeight(2);
  line(cx - 10, cy - 50, cx + 10, cy - 50);

  strokeWeight(1.5);
  line(cx - 110, cy - 30, cx - 60, cy - 35);
  line(cx - 110, cy - 20, cx - 60, cy - 20);
  line(cx - 110, cy - 10, cx - 60, cy - 5);
  line(cx + 110, cy - 30, cx + 60, cy - 35);
  line(cx + 110, cy - 20, cx + 60, cy - 20);
  line(cx + 110, cy - 10, cx + 60, cy - 5);

  stroke(colorNegroIntenso);
  strokeWeight(2.5);
  line(cx - 148, cy + 65, cx - 142, cy + 75);
  line(cx - 138, cy + 70, cx - 132, cy + 80);
  line(cx + 148, cy + 65, cx + 142, cy + 75);
  line(cx + 138, cy + 70, cx + 132, cy + 80);


  fill(colorHoja);
  stroke(colorNegroIntenso);
  strokeWeight(2);
  beginShape();
  curveVertex(cx, cy - 150);
  curveVertex(cx, cy - 150);
  curveVertex(cx + 40, cy - 180);
  curveVertex(cx + 10, cy - 220);
  curveVertex(cx - 15, cy - 180);
  curveVertex(cx, cy - 150);
  curveVertex(cx, cy - 150);
  endShape();

  dibujarSusuwatari(width * 0.2, height * 0.6);
  dibujarSusuwatari(width * 0.85, height * 0.4);
}

function dibujarSusuwatari(x, y) {
  push(); 
  translate(x, y); 

  stroke(colorNegroIntenso);
  strokeWeight(1.5);
  for (let i = 0; i < 50; i++) {
    let angulo = random(TWO_PI);
    let longitud = random(20, 35);
    let finX = cos(angulo) * longitud;
    let finY = sin(angulo) * longitud;
    line(0, 0, finX, finY);
  }

  noStroke();
  fill(colorNegroIntenso);
  ellipse(0, 0, 45, 45);

  fill(colorBlancoOjos);
  ellipse(-8, 2, 18, 18);
  ellipse(10, 2, 18, 18);

  fill(colorNegroIntenso);
  ellipse(-6, 3, 6, 6);
  ellipse(12, 3, 6, 6);
  
  pop(); 
}