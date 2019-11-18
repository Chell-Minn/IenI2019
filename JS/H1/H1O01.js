function setup() {
  canvas = createCanvas(600,600);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke();
  fill('green');
  ellipse(300,300,400);

  noStroke();
  fill('white')
  ellipse(300,300,300)
  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(200,200,200,200);  
}
