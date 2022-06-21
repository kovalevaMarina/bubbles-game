class Health {
  constructor() {
    this.numberHealth = 10;
  }

  createHealth() {
    this.healthElem = document.getElementById("health");
    this.healthElem.innerHTML = `&#9829; ${this.numberHealth}`;
    this.healthElem.style.cssText = `
      color: #c14364;
      border-color: #c14364;
    `;
  }

  removeHealth() {
    this.numberHealth--;
    this.healthElem.innerHTML = `&#9829; ${this.numberHealth}`;
  }
}
