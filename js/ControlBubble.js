class ControlBubble {
  constructor(level) {
    this.level = level;
    this.size = 100;
    this.speed = 5;
    this.interval = 50;
  }

  init() {
    this.generateBubble();
    this.moveBubble();
  }

  generateBubble() {
    let bubbleInit = new Bubble(this.size, this.generateX());
    this.bubble = bubbleInit.createBubble();
    this.bubble.addEventListener("click", () => {
      this.destroyBubble();
      this.level.addScore();
    });
  }

  generateX() {
    return Math.ceil(Math.random() * window.innerWidth) - this.size;
  }

  destroyBubble() {
    this.bubble.remove();
    delete this;
  }

  moveBubble() {
    let y = 0;
    this.moveInterval = setInterval(() => {
      y += this.speed;
      this.bubble.style.top = `${y}px`;
      if (y > window.innerHeight - this.size) {
        clearInterval(this.moveInterval);
        this.destroyBubble();
      }
    }, this.interval);
  }
}
