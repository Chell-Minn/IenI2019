var diameter = 0

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate (100);
}

function draw() {
  background('lightgrey');
  noStroke();
  if (diameter >= 200)
  {
    fill('yellow');
  }
  else{
      fill('white');
  }
  ellipse(225,225,diameter);
  diameter += 0.00000001;
}
