const hamburger = document.getElementById('link_menu');
const navBar = document.getElementById('nav_bar');
const title = document.getElementById('logo');
const webLink = document.getElementById('portfolio');

function changeIcon(icon) {
  icon.classList.toggle('fa-times');
}
hamburger.addEventListener('click', () => {
  navBar.classList.toggle('show');
  title.style.opacity = '0';
});

function fun() {
  location.reload();
}