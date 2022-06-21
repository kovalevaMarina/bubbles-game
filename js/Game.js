class Game {
  constructor() {
    this.level = new Level();
    this.health = new Health();
    this.interval = 1000;
  }

  start() {
    this.level.createScore();
    this.level.createLevel();
    this.health.createHealth();
    this.bubbles = [];
    this.intervalStart = setInterval(() => {
      this.bubbles.push(
        new ControlBubble(this.level, this.health, this).init()
      );
    }, this.interval);
  }

  gameOver(winner) {
    let finishField = document.querySelector(".finish-field");
    let fieldGame = document.querySelector(".game-field");
    let btnRestart = document.createElement("button");

    this.bubbles.forEach((bubble) => {
      bubble.destroyBubble();
    });
    clearInterval(this.intervalStart);
    finishField.style.display = "flex";
    fieldGame.style.display = "none";

    let text;
    text = winner
      ? `Congratulations! &#128079; <br> You popped all ${this.level.score} bubbles. <br> You are a Winner!`
      : `Sorry &#128532; <br> You popped ${this.level.score} bubbles...`;

    finishField.innerHTML = text;
    btnRestart.setAttribute("id", "btn");
    btnRestart.textContent = "Restart";
    finishField.append(btnRestart);

    btnRestart.addEventListener("click", () => {
      new Game().start();
      finishField.style.display = "none";
      fieldGame.style.display = "flex";
    });
  }
}
