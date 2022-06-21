class ControlBubble {
  constructor(level, health, game) {
    this.level = level;
    this.health = health;
    this.game = game;
    this.size = 100 / Number(`1.${this.level.createLevel()}`);
    this.speed = 3 * this.level.createLevel();
    this.interval = 50;
  }

  init() {
    this.generateBubble();
    this.moveBubble();
    return this;
  }

  generateBubble() {
    let bubbleInit = new Bubble(this.size, this.generateX());
    this.bubble = bubbleInit.createBubble();
    this.bubble.addEventListener("click", () => {
      this.destroyBubble();
      this.level.addScore();
      this.level.maybeAddLevel();
      if (this.level.score === 40) {
        this.game.gameOver(true);
      }
    });
  }

  generateX() {
    return Math.ceil(Math.random() * window.innerWidth) - this.size;
  }

  destroyBubble() {
    this.bubble.remove();
    clearInterval(this.moveInterval);
    delete this;
  }

  moveBubble() {
    let y = 0;
    this.moveInterval = setInterval(() => {
      y += this.speed;
      this.bubble.style.top = `${y}px`;
      if (y > window.innerHeight - this.size) {
        clearInterval(this.moveInterval);
        this.health.removeHealth();
        if (this.health.numberHealth === 0) {
          this.game.gameOver(false);
          return;
        }
        this.destroyBubble();
      }
    }, this.interval);
  }
}
