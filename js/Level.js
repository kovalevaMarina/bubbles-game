class Level {
  constructor() {
    this.number = 1;
    this.score = 0;
  }

  initScore() {
    this.createScore();
    this.addScore();
  }

  createScore() {
    this.scoreElem = document.getElementById("score");
    this.scoreElem.innerHTML = this.score;
  }

  addScore() {
    this.score++;
    this.scoreElem.innerHTML = this.score;
  }
}
