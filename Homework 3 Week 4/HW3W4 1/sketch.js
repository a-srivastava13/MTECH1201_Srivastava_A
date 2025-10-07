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


function setup() {
  createCanvas(800, 800);
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

  noStroke();
}

function draw() {
  background(0);
  let i = map(x, 0, width,0,1);
  let j = map(y,0,height,0,1);

 fill(col1)
  ellipse(windowWidth/2, windowHeight/2,d)

  //push()
  
  //rotate(r);
  // translate((25), (10));
    fill(col2);
    ellipse(400,475, 25)
 // pop();

  //push()
  
  //rotate(r2);
  // translate((25), (10));
    fill(col3);
    ellipse(425,525, 30)
 // pop();

  //push()
  
  //rotate(r3);
  // translate((25), (10));
    fill(col4);
    ellipse(450,575, 35)
 // pop();

  //push()
  
  //rotate(r);
  // translate((25), (10));
    fill(col2);
    ellipse(475,625, 25)
 // pop();

x += xV
y += yV
r += 0.01


}
