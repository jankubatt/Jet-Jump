let player;
let obstacle;
let score;
let bImg;
let char1;
let char2;
let jet;
let count = 0;
let obstacles = [];
let cLine;
let myFont;
let cycles = 0;
let gOver;

function preload() {
  bImg = loadImage("background.png");
  char1 = loadImage("char1.png");
  char2 = loadImage("char2.png");
  jet = loadImage("jet.png");
  myFont = loadFont("PixelFJVerdana12pt.ttf");
}

function setup() {
  createCanvas(1000,500);
  obstacle = new Obstacle();
  player = new Player();
  score = new Score();
  cLine = new Line();
  gOver = new Gameover();

  obstacles.push(new Obstacle());
}

function keyPressed() {
    if (key == " ") {
      player.jump();
  }
}

function draw() {

  background(bImg);
  score.show();
  player.show();
  player.move();
  cLine.show();

  if (cycles != 100) {
    cycles++;
  }

  else if (cycles == 100) {
    cycles = 0;
    if (random(1) < 0.5){
        obstacles.push(new Obstacle());
      }
  }


  for (let t of obstacles) {
    t.show();
    t.move();

    if(cLine.hits(t)) {
        count++;
    }

    if(player.hits(t)) {
      console.log("Game Over");
      noLoop();
      gOver.show();
    }
  }
}
