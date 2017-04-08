console.log('Hello');
let open = false;
const hamburger = document.getElementById('hamburger');
const spans = document.getElementsByClassName('span');
const navBoxMobs = document.getElementsByClassName('navBoxMob')
const navItemMobs = document.getElementsByClassName('navItemMob')
const hrs = document.getElementsByClassName('hr')

function openMenu() {

  if (open === false) {
    open = true;
  } else {
    open = false;
  }

  if (open) {
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.backgroundColor = '#247BA0';
    }
    for (let i = 0; i < navBoxMobs.length; i++) {
      navBoxMobs[i].style.opacity = '1';
    }
    for (let i = 0; i < navItemMobs.length; i++) {
      navItemMobs[i].style.opacity = '1';
    }

    document.getElementsByClassName('navBarMob')[0].style.height = '410px';
    document.body.hr.style.opacity = '1';
  } else {
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.backgroundColor = 'orange';
    }
    for (let i = 0; i < navBoxMobs.length; i++) {
      navBoxMobs[i].style.opacity = '0';
    }
    for (let i = 0; i < navItemMobs.length; i++) {
      navItemMobs[i].style.opacity = '0';
    }

    document.getElementsByClassName('navBarMob')[0].style.height = '50px';
  }
}

hamburger.addEventListener('click', openMenu);
