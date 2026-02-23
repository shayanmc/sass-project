const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

// function scrollHeader() {
//   const nav = document.getElementById('header')
//   if(this.scrollY >= 1) nav.classList.add('scroll-header'); else nav.classList('header')
// }
function scrollHeader() {
  const nav = document.getElementById('header');
  if (window.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);
