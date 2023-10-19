document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("load-more");
  const rect = document.getElementById("card-container");

  button.addEventListener("click", () => {
    toggleTwoClasses(rect, "is-visible", "is-hidden", 500);
  });
});

function toggleTwoClasses(element, first, second, timeOfAnimation) {
  if (!element.classList.contains(first)) {
  element.classList.add(first);
  element.classList.remove(second);
  } else {
  element.classList.add(second);
  window.setTimeout(function() {
  element.classList.remove(first);
  },timeOfAnimation);
  }
}

//Burger Menu
let burgerMenu = document.querySelector('.burger-menu-unactive');
let menu = document.querySelector('.navbar-burger-unactive');
  
burgerMenu.onclick = function() {
  burgerMenu.classList.toggle('burger-menu-active');
  menu.classList.toggle('navbar-burger-active');
};

