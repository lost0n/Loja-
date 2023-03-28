var push = document.querySelector('#pushclass')
var menu = document.querySelector('.simbolo')

function abrirmenu() {
  if (push.classList.contains('show') == true) {
    push.removeAttribute('class', 'show')
    menu.innerHTML = ' close '
  } else {
    push.setAttribute('class', 'show')
    menu.innerHTML = ' menu '
  }
}
