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

//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const duration = 700; // Продолжительность прокрутки в миллисекундах (например, 1000 миллисекунд = 1 секунда)
      const targetOffset = targetElement.getBoundingClientRect().top;
      const start = window.pageYOffset;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, start + targetOffset * progress);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }
    requestAnimationFrame(scrollAnimation);
}
});
});