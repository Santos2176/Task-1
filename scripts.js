const menuToggle = document.getElementById('navbar-menu');
const navbarLinks = document.querySelector('.navbar__links');
const body = document.body;

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');

  const menuIcon = menuToggle.querySelector('img');
  //   menuIcon.src = navbarLinks.classList.contains('show')
  //     ? './assets/cross.png'
  //     : './assets/Group.png';

  if (navbarLinks.classList.contains('show')) {
    menuIcon.src = './assets/cross.png';
    body.classList.add('no-scroll');
  } else {
    menuIcon.src = './assets/Group.png';
    body.classList.remove('no-scroll');
  }
});
