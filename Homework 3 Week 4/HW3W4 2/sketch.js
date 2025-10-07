let t = 3
let r = 0
let r1 = 0
let col

function setup() {
  createCanvas(720, 400);

  col = color("#c95038")


  angleMode(DEGREES);

  

}

function draw() {
  background(255);
  ellipse(360, 200, 200);

  for (let angle = 0; angle <= 360; angle += 30){
    push();
    translate (width/2, height/2);
    rotate(angle)

    // stroke (angle+100,100,100);
    // strokeWeight(0);
    // line(0,0,100,0);

    strokeWeight(1);
    text(t, 85, 0);
    
    // if (t<= 12){
    //   t += 1
    // }

    

    if(t <= 12){
      
      t += 1

    }

  

    else{
      t = 1
    }

    // for some reason when i have t<= 11 all the 
    //numbers cycle instead of being static and i cant figure 
    //out why
    

    pop();

   

  }

   translate (width/2, height/2);
    rotate (r1)
    stroke (col);
    strokeWeight(5);
    line(0,0,60,0);

    r1 += 0.1
  


    rotate (r)
    stroke (0);
    strokeWeight(3);
    line(0,0,80,0);

    r += 0.15

 

}
