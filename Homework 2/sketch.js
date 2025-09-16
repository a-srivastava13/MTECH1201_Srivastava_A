
let c,c1,c2;
let bg;

function setup() {
  createCanvas(800,500);
  bg  = color(random(255), random(255), random(255))
  background(bg);
  c1 = color(random(255), random(255), random(255))
  c2 = color(random(255), random(255), random(255))
  text("Press 'c' to clear the canvas", 250,50)
}

function draw() {
  let x = mouseX;
  let y = mouseY;

  let i = map(x,0,width,0,1);

  c = lerpColor(c1,c2,i);

  // stroke(c);
  // strokeWeight(4);
  // line(pmouseX,pmouseY,mouseX,mouseY);
  
}

function mouseDragged(){
  stroke(c);
  strokeWeight(random(1,5));
  line(pmouseX,pmouseY,mouseX,mouseY);
  
}

function keyPressed(){
  console.log(key);
  if (key == 'c'){
    background(bg)
    text("Press 'c' to clear the canvas", 250,50)
  }
    

}