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
var noHit = true;


function preload() {
  bImg = loadImage("background.png");
  char1 = loadImage("char1.png");
  char2 = loadImage("char2.png");
  jet = loadImage("jet.png");
  myFont = loadFont("PixelFJVerdana12pt.ttf");

}

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  //canvas.parent('p5Container');
  resetSketch();
}

  function resetSketch() {
    obstacle = new Obstacle();
    player = new Player();
    score = new Score();
    cLine = new Line();
    gOver = new Gameover();
    count = 0;

  }

function keyPressed() {
    if (key == " ") {
      player.jump();
  }
}

function draw() {
  createCanvas(window.innerWidth, window.innerHeight);


  background(bImg);
  score.show();
  player.show();
  player.move();
  cLine.show();

  cLine.y = window.innerHeight - 25;
  player.r = window.innerWidth / 12;
  obstacle.r = window.innerWidth / 16;
  score.t = textSize(window.innerWidth / 25);
  score.cText = text(count, player.x, player.y);

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      player.jump();
    }
}
  if (cycles != 50) {
    cycles++;
  }

  else if (cycles == 50) {
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
      gOver.show();
      noLoop();
    }
  }
}
