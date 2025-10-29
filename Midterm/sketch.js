//Andy Srivastava
//Spaceship Game

let button
let startSelect = 0;

let spaceship;
let xL;
let yL;
let lives;

let speed = [];
let objX = [];
let objY = [];
let objD = [];

let hit = false;


function preload() {
  spaceship = loadImage('spaceship.png')
  explosion = loadImage('explosion.gif')

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  button = createButton("START GAME");
  button.position((width/2)- 50, height - 150);
  button.size(100,20)

  button.mousePressed(start)

  
  xL = width / 2
  yL = windowHeight - 30
  
  gO = createGraphics(windowWidth, windowHeight)
  gO.background = (0);
  
  lives = 3;
  
  populateArray();
}

let pHit = false
let animation = false

function draw() {
   background(0);
   hit = false;

  if (startSelect === 1){
    
    button.hide();

    if (lives > 0){
    move();
    displaySpaceship(xL, yL)
    fill(255);
    textAlign(CENTER)
    textSize(50)
    text("LIVES: " + lives, width / 2, 50)
    for (let i = 0; i < 30; i++) {
      obstacle(objX[i], objY[i], objD[i])
      moveObstacle(i);
    }
  }
  
  keyPressed();

  if (hit == true && pHit == false) {
    lives -= 1;
    animation = true;
    setTimeout(500, switchanimate)
  }

  gameOver();
  
  pHit = hit
  }
  
 
}

function populateArray(){
   for (let i = 0; i < 30; i++) {
    objX[i] = random(width)
    objY[i] = random(height);
    objD[i] = random(25, 50)
    speed[i] = random(2, 6);
  }
}

function switchanimate(){
  animation = false
}

function obstacle(x, y, d) {
  stroke(255);
  noFill();
  ellipse(x, y, d)

  if (dist(xL, yL, x, y) < d / 2) {
    hit = true;
    explodeShip(xL, yL)
  }
}

function displaySpaceship(x, y) {
  imageMode(CENTER)
  spaceship.resize(40, 40)
  image(spaceship, x, y)
}

function explodeShip(x, y) {
  imageMode(CENTER);
  explosion.resize(45, 45);
  image(explosion, x, y);
}

function moveObstacle(i) {
  if (objY[i] > height) {
    objY[i] = 0
    objX[i] = random(width);
  }
  else {
    objY[i] += speed[i]
  }
}

function move() {
  if (keyIsDown(LEFT_ARROW) === true) {
    xL -= 4;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    xL += 4;
  }
}

function gameOver() {
  if (lives == 0) {
    imageMode(CENTER)
    textSize(50)
    fill(255)
    image(gO, windowWidth / 2, windowHeight /2)
    textAlign(CENTER)
    text('GAME OVER', windowWidth / 2, windowHeight / 2)
    text('Press Space to Restart', windowWidth / 2, (windowHeight / 2) + 50)
  }
}


function keyPressed() {
  if (keyCode === 32) {
    lives = 3;
    xL = width/2
    yL = height - 30
  }
}

function start(){
  startSelect = 1;
}

