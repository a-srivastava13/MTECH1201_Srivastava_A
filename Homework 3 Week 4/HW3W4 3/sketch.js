let x //= random(windowWidth);
let y //= random(windowHeight);
let r = 0//= random(0.01, 0.1);
let c1, c2, c3


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
   //r = random(0.01, 0.05);
    x = random(windowWidth/2);
  y = random(windowHeight/2);
  
}

function draw() {
  c1 = color(random(255), random(255), random(255))
  c2 = color(random(255), random(255), random(255))
  //noStroke();

 
 

  let i = map (1,0,255,0,1);
  c3 = lerpColor(c1,c2,i)



  push();

  
  translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

  translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

   translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

   translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

   translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

   translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

   translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

   translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

   translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

   translate (x, y)

  rotate(r);
  fill(c3);
  ellipse(20,20,25);

  
  

  pop();

  

  r +=  0.01//random(0.01, 0.1)




}
