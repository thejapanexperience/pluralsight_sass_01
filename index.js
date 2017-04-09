console.log('Hello');
const body = document.getElementById('body');

// Big modal
let bigModalOpen = false;
const bigModalOpenButton = document.getElementById('bigModalOpenButton')
const bigModalCloseButton = document.getElementById('bigModalCloseButton')
const bigModal = document.getElementById('bigModal')
function toggleBigModal() {
  if (bigModalOpen === false) {
    bigModalOpen = true;
  } else {
    bigModalOpen = false;
  }
  if (bigModalOpen) {
    bigModal.style.visibility = 'visible';
    body.style.overflow = 'hidden';

  } else {
    bigModal.style.visibility = 'hidden';
    body.style.overflow = 'auto';
  }
}
bigModalOpenButton.addEventListener('click', toggleBigModal);
bigModalCloseButton.addEventListener('click', toggleBigModal);

// Small modal
let smallModalOpen = false;
const smallModalOpenButton = document.getElementById('smallModalOpenButton')
const smallModalCloseButton = document.getElementById('smallModalCloseButton')
const smallModal = document.getElementById('smallModal')
function toggleSmallModal() {
  if (smallModalOpen === false) {
    smallModalOpen = true;
  } else {
    smallModalOpen = false;
  }
  if (smallModalOpen) {
    smallModal.style.visibility = 'visible';

  } else {
    smallModal.style.visibility = 'hidden';
  }
}
smallModalOpenButton.addEventListener('click', toggleSmallModal);
smallModalCloseButton.addEventListener('click', toggleSmallModal);

// Hamburger and Mobile Menu
let hamburgerOpen = false;
const hamburger = document.getElementById('hamburger');
const spans = document.getElementsByClassName('span');
const navBoxMobs = document.getElementsByClassName('navBoxMob')
const navItemMobs = document.getElementsByClassName('navItemMob')
const hrs = document.getElementsByClassName('hr')

function toggleMenu() {
  if (hamburgerOpen === false) {
    hamburgerOpen = true;
  } else {
    hamburgerOpen = false;
  }
  if (hamburgerOpen) {
    for (let i = 0; i < navBoxMobs.length; i++) {
      navBoxMobs[i].style.opacity = '1';
    }
    for (let i = 0; i < navItemMobs.length; i++) {
      navItemMobs[i].style.opacity = '1';
    }

    document.getElementsByClassName('navBarMob')[0].style.height = '300px';
  } else {
    for (let i = 0; i < navBoxMobs.length; i++) {
      navBoxMobs[i].style.opacity = '0';
    }
    for (let i = 0; i < navItemMobs.length; i++) {
      navItemMobs[i].style.opacity = '0';
    }

    document.getElementsByClassName('navBarMob')[0].style.height = '49px';
  }
}

hamburger.addEventListener('click', toggleMenu);
