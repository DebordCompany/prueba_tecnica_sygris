const asideButton = document.querySelectorAll(".aside__button");
const asideContent = document.querySelectorAll(".aside__content");
const asideArrow = document.querySelectorAll(".aside__arrow");
export function clickAside() {
  asideButton.forEach((button, index) => {
    asideButton[index].addEventListener("click", () => {
      asideArrow[index].classList.toggle("rotate-90");
      asideContent[index].classList.toggle("hidden");
    });
  });
}
