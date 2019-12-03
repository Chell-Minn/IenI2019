var diameter = 0
var hoogte = 0

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate (100);
}

function draw() {
  background('lightgrey');
  noStroke();
  fill('deepskyblue');
  ellipse(450,450,diameter);
  fill('silver')
  ellipse(0,0,diameter)
  fill('black');
  ellipse(100,hoogte,100);
  hoogte = constrain(hoogte,100,height-50);
  hoogte++; 
  diameter++;
}
