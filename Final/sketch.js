//Andy Srivastava
//Parts of this code is inspired by or modeled after Final Project: Galaxy tutorial
//by obidigc1 https://editor.p5js.org/obidigc1/sketches/iDTfVtIuB

let spaceshipImg
let enemies = [];
let bullets = [];
let score = 0;
let startSelect = 0;

function preload(){
  spaceshipImg = loadImage('spaceship.png')
}
let spaceship;
function setup() {
  createCanvas(windowWidth, windowHeight);
  spaceship = new Spaceship()

  for (let i = 0; i < 20; i ++){
    enemies.push(new Enemy())
  }

  button = createButton("START GAME");
  button.position((width/2 - 50), height - 150);
  button.size(100,50);

  button.mousePressed(start)

}

function draw() {
  background(0);

   textSize(50)
  fill(255)
  textAlign(CENTER)
   text("SPACESHIP", width/2, height/2)


if (startSelect == 1){
  background(0)

  button.hide();


  textSize(50)
  fill(255)
  textAlign(CENTER)
  text("SCORE: " + score, 150, 75)

  spaceship.display();
  spaceship.update();

  for (let enemy of enemies){
    enemy.display();
    enemy.update();
  }

  for (let bullet of bullets){
    bullet.update();
    bullet.display();
    
  }

  for (let i = bullets.length - 1; i >= 0; i --){
    for(let j = enemies.length - 1; j >= 0; j --){
      if (bullets[i].hits(enemies[j])){
        enemies.splice(j,1);
        enemies.push(new Enemy())
        bullets.splice(i,1);
        score += 10;
        break;
      }
    }

  }

  fill (255)
  textSize(50)
  text("LIVES: " + spaceship.lives, windowWidth - 125, 75)

 print(score)
}
  

 

}

function keyPressed (){
  if (key === " "){
    bullets.push(new Bullet(spaceship.xL, height - 20));
  }
}

class Enemy{
  constructor(){
    this.objX = random(width)
    this.objY = 100
    this.objD = random(25,50)
    this.speed = random(2,6)

  }

  display(){
    stroke(255);
    noFill();
    ellipse(this.objX, this.objY, this.objD)
    

  }

  update(){
    this.objY += this.speed;

    if (this.objY > height){
      this.objY = 100;
      this.objD = random(25,50);
      this.objX = random(width);
      this.speed = random(2,4);
    }
  }

}

class Spaceship{
  constructor(){
    this.w = 40
    this.h = 40
    this.xL = width/2
    this.yL = windowHeight - 30
    this.lives = 3
    this.shake = 0
    this.x = 0 
  }
  display(){
  imageMode(CENTER)
  spaceshipImg.resize(this.w, this.h)

  this.x = this.x +random(this.shake, -this.shake);
  image(spaceshipImg, this.xL, this.yL)
  //print(this.lives)
  }

  update(){
    if (keyIsDown(65) || keyIsDown(97)){
      this.xL -= 4

    }

    if (keyIsDown(68) || keyIsDown(100)){
      this.xL += 4

    }
  }
 
}

class Bullet{
  constructor(x,y){
    this.bW = 4;
    this.bH = 10;
    this.x = spaceship.xL - 2.5
    this.y = spaceship.yL - 20
    this.bSpeed = -4
  }

  display(){
    noStroke();
    fill(0,255,0);
    rect(this.x, this.y, this.bW, this.bH)
  }

  update(){
    this.y += this.bSpeed;
    if (this.y < 0){
      bullets.shift();
    }
  }

  hits(enemy){
    return(
      this.x < enemy.objX + enemy.objD/2 &&
      this.x + this.bW > enemy.objX &&
      this.y < enemy.objY + enemy.objD/2 &&
      this.y + this.bH > enemy.objY
    )
  }

}

function start(){
  startSelect = 1;
}
