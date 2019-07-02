class Line {

  constructor() {
    this.x = 1;
    this.y = 399;
    this.w = 1;
    this.h = 1;
  }

  show() {
    fill(0);
    rect(this.x, this.y, this.w, this.h);
  }

  hits(obstacle) {
    return collideRectRect(this.x,this.y,this.w,this.h,obstacle.x,obstacle.y,obstacle.r,obstacle.r);
  }
}
