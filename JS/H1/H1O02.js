function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  triangle(0,225,450,450,450,0);
  fill('purple');
  triangle(450,225,0,450,0,0);
  strokeWeight(5);
  stroke("pink")
  fill("darkred")
  beginShape();
  vertex(225,115)
  vertex(300,225)
  vertex(225,3350)
  vertex(0,225)
}
