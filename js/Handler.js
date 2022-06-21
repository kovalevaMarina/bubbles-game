class Handler {
  initGame() {
    let fieldGame = document.querySelector(".game-field");
    let btn = document.getElementById("btn");
    let fieldStart = document.querySelector(".start-field");
    btn.addEventListener("click", () => {
      new Game().start();
      fieldGame.style.display = "flex";
      fieldStart.style.display = "none";
    });
  }
}
