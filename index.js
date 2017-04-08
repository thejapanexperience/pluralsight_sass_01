console.log('Hello');

let open = false;

const hamburger = document.getElementById('hamburger');
var spans = document.getElementsByClassName("span");

function openMenu() {
  console.log('in openMenu');
  if (open == false){
    open = true;
  };
  if (open) {
    for (var i = 0; i < spans.length; i++) {
      spans[i].style.backgroundColor = 'purple'
    } else {
        for (var i = 0; i < spans.length; i++) {
          spans[i].style.backgroundColor = 'orange'
        };
    }
  }
}

hamburger.addEventListener('click', openMenu);
