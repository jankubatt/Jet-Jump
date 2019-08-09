
class Score {

  show() {
    noStroke();
    fill(255);
    this.t = textSize(window.innerWidth / 25);
    textFont(myFont);
    textAlign(CENTER);
    this.cText = text(count, player.x, player.y);
  }
}
