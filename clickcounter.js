const buttons = document.querySelectorAll("div.numbers button");
// console.log(buttons);
// console.log(buttons.dataset);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentClicks = parseInt(button.dataset.clicks);
    button.dataset.clicks = currentClicks + 1;
  });
});
