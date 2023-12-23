const modulesTitle = document.querySelectorAll(".modules__title");
const modulesItems = document.querySelectorAll(".modules__items");
const modulesArrow = document.querySelectorAll(".modules__arrow");
export function clickModules() {
  modulesTitle.forEach((element, index) => {
    modulesTitle[index].addEventListener("click", () => {
      modulesItems[index].classList.toggle("modules__hidden");
      modulesArrow[index].classList.toggle("modules__arrow__transform");
      modulesTitle[index].classList.toggle("rounded-md");
      console.log(index);
    });
  });
}
