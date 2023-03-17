var push = document.querySelector('#pushclass')

function abrirmenu() {
  if (push.classList.contains('show') == true) {
    push.removeAttribute('class', 'show')
  } else {
    push.setAttribute('class', 'show')
  }
}
