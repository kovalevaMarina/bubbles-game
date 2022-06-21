class Level {
  constructor() {
    this.numberLvl = 1;
    this.score = 0;
  }

  createScore() {
    this.scoreElem = document.getElementById("score");
    this.scoreElem.innerHTML = `Score: ${this.score}`;
  }

  addScore() {
    this.score++;
    this.scoreElem.innerHTML = `Score: ${this.score}`;
  }

  createLevel() {
    this.levelElem = document.getElementById("level");
    this.levelElem.innerHTML = `Level: ${this.numberLvl}`;
    return this.numberLvl;
  }

  maybeAddLevel() {
    if (this.score % 10 === 0) {
      this.numberLvl++;
      this.levelElem.innerHTML = `Level: ${this.numberLvl}`;
    }
  }
}
