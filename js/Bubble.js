class Bubble {
  constructor(size, x) {
    this.size = size;
    this.x = x;
  }

  createBubble() {
    this.bubble = document.createElement("div");
    this.bubble.className = "bubble";
    this.bubble.style.cssText = `
      position: fixed;
      width: ${this.size}px;
      height: ${this.size}px;
      border-radius: 50%;
      background: rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    }, 0.7);
      top: 0px;
      left: ${this.x}px;`;
    this.wrap = document.querySelector(".wrap");
    this.wrap.prepend(this.bubble);
    return this.bubble;
  }
}
