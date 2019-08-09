
class Gameover {
  constructor() {
    noStroke();
    fill(255);
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);

  }
  show(){
      text("Game Over", window.innerWidth / 2, 200);
      textSize(25);
      text("Press F5 to restart", window.innerWidth / 2, 275);

  }
}
