function preload() {
  bImg = loadImage("background.png");
  char1 = loadImage("char1.png");
  char2 = loadImage("char2.png");
  jet = loadImage("jet.png");
}

class Player {

  constructor(){
    this.r = 100;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1.5;
  }
  show() {
    if (this.vy < 0) {
      image(char2, this.x, this.y, this.r, this.r);
    }
    else {
      image(char1, this.x, this.y, this.r, this.r);
    }
}

    hits(obstacle) {
      ellipseMode(CORNER);
      return collideCircleCircle(this.x,this.y,this.r / 2,obstacle.x,obstacle.y,obstacle.r / 2);
    }


  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  jump(){
    if (this.y == height - this.r) {
      this.vy = -25;
    }
  }
}
