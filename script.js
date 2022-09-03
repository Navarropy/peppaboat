let currentItem = 0;
let nextOfTheNextItem = currentItem + 2;
let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider_slides");
let counter = document.querySelector(".counter__wrapper");

function defineCurrent(currentItem) {
  let activeItems = document.querySelectorAll(".slide");
  activeItems.forEach((item) => {
    item.classList.remove("nextOfTheNextItem");
    item.classList.remove("nextItem");
    item.classList.remove("currentItem");
  });

  selectorItems.forEach((selector) => {
    selector.classList.remove("--active");
  });

  listLength = slides.length - 1;

  if (currentItem > listLength) {
    currentItem = 0;
  }

  if (currentItem < 0) {
    currentItem = listLength;
  }

  nextItem = currentItem + 1;
  if (nextItem > listLength) {
    nextItem = 0;
  }

  nextOfTheNextItem = nextItem + 1;
  if (nextOfTheNextItem > listLength) {
    nextOfTheNextItem = 0;
  }

  console.log(currentItem, nextItem, nextOfTheNextItem);

  slides[nextItem].classList.add("nextItem");
  slides[nextOfTheNextItem].classList.add("nextOfTheNextItem");
  slides[currentItem].classList.add("currentItem");

  selectorItems[currentItem].classList.add("--active");
}

slides.forEach((item, i) => {
  let countItem = document.createElement("div");
  countItem.classList.add("counter__wrapper__item");
  countItem.setAttribute("item", i);
  counter.append(countItem);
});

let selectorItems = document.querySelectorAll(".counter__wrapper__item");

selectorItems.forEach((item, i) => {
  let slideItem;
  slideItem = slides[i];

  let selectorIndex = parseInt(item.getAttribute("item"));
  slideItem.setAttribute("item", i);
  item.addEventListener("click", () => {
    defineCurrent(selectorIndex);
  });
});

defineCurrent(0);
