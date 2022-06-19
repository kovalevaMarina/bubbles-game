class Game {
  constructor() {
    this.level = new Level();
    this.interval = 1000;
  }

  start() {
    this.level.createScore();
    this.bubbles = [];
    this.intervalStart = setInterval(() => {
      this.bubbles.push(new ControlBubble(this.level).init());
    }, this.interval);
  }

  gameOver() {
    this.bubbles.forEach((bubble) => bubble.destroyBubble());
    clearInterval(this.intervalStart);
  }
}
