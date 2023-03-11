var push = document.querySelector('#pushclass')
var icon = document.querySelector('.simbolo')

function abrirmenu() {
  if (push.classList.contains('show') == true) {
    push.removeAttribute('class')
    icon.innerHTML = ' close '
  } else {
    push.setAttribute('class', 'show')
    icon.innerHTML = ' menu '
  }
}
