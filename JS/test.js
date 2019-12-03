function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('steelblue');
  ellipse(450,450,200);
  fill('deepskyblue');
  ellipse(100,100,100);
}