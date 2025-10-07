let col1, col2, col3, col4, col5, col6, col7, col8, col9, col10
let x = 100, y = 100;
let r = 0;
let r2 = 0
let r3 = 0
let r4 = 0
let r5 = 0
let r6 = 0
let r7 = 0
let r8 = 0
let r9 = 0
let d = 150;
let xV = 2, yV = 1;
s = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  col1 = color('#f5bb27');
  col2 = color('#7d746f');
  col3 = color('#f74fec');
  col4 = color('#1a0eeb');
  col5 = color('#7a0d0d');
  col6 = color('#a17a5f');
  col7 = color('#bd6424');
  col8 = color('#7adafa');
  col9 = color('#252b78');
  col10 = color('#79798a');
  angleMode (DEGREES)
  ellipseMode(CENTER)
  

  noStroke();
}

function draw() {
  background(0);  

  
   var galaxy = {
    locationX : random(width),
    locationY : random(height),
    size : random(1,6)
  }
  // if (s <= 600){
  fill(255)
  ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size)
  //   s += 1
  // }


 
 fill(col1)
  ellipse(windowWidth/2, windowHeight/2,d)

  push();
    translate(windowWidth/2, windowHeight/2)
    
  
  rotate(r);
   
    fill(col2);
    ellipse(100, 100, 25)
 
  rotate(r2);
   
    fill(col3);
    ellipse(150,150, 30)

  rotate(r3);

    fill(col4);
    ellipse(200,200, 35)

  rotate(r4);

    fill(col5);
    ellipse(250,250, 25)
 pop();

x += xV
y += yV
r += 0.01
r2 += 0.03
r3 += 0.05
r4 += 0.02


}
