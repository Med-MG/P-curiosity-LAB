let humberguer = (() => {
    let hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    })
})()

$('.typist')
	.typist({
		text: 'Extract Value From Problems'
	})
	.typistPause(2000) // 2 sec
	.typistRemove(30)
    .typistAdd('Extract Value From solutions.')
    .typistPause(2000) // 2 sec
	.typistRemove(30)
	.typistAdd('Inovate and Elevate.');



var navButton = document.querySelector('.navigation__button');
var navMenu = document.querySelector('.navigation__menu');
let hamburger = document.querySelector('.hamburger');
var win = window;

function openMenu(event) {
  
  navButton.classList.toggle('active');
  navMenu.classList.toggle('active');

  event.preventDefault();
  event.stopImmediatePropagation();
}

function closeMenu(event) {
  if (navButton.classList.contains('active')) {
    navButton.classList.remove('active');
	navMenu.classList.remove('active');
	hamburger.classList.remove('is-active');
  }
}
  navButton.addEventListener('click', openMenu, false);

win.addEventListener('click',closeMenu, false);