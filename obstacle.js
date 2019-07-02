function preload() {
  bImg = loadImage("background.png");
  char1 = loadImage("char1.png");
  char2 = loadImage("char2.png");
  jet = loadImage("jet.png");
}

class Obstacle {

  constructor() {
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }

  show() {
    ellipseMode(CORNER);
    image(jet, this.x, this.y, this.r, this.r);
  }

  move(){
    this.x -= 15;
  }
}
