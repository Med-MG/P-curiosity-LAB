// let humberguer = (() => {
//     let hamburger = document.querySelector('.hamburger');
//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('is-active');
//     })
// })()

// $('.typist')
// 	.typist({
// 		text: 'Extract Value From Problems'
// 	})
// 	.typistPause(2000) // 2 sec
// 	.typistRemove(30)
//     .typistAdd('Extract Value From solutions.')
//     .typistPause(2000) // 2 sec
// 	.typistRemove(30)
// 	.typistAdd('Inovate and Elevate.');



// var navButton = document.querySelector('.navigation__button');
// var navMenu = document.querySelector('.navigation__menu');
// let hamburger = document.querySelector('.hamburger');
// var win = window;

// function openMenu(event) {
  
//   navButton.classList.toggle('active');
//   navMenu.classList.toggle('active');

//   event.preventDefault();
//   event.stopImmediatePropagation();
// }

// function closeMenu(event) {
//   if (navButton.classList.contains('active')) {
//     navButton.classList.remove('active');
// 	navMenu.classList.remove('active');
// 	hamburger.classList.remove('is-active');
//   }
// }
//   navButton.addEventListener('click', openMenu, false);

// win.addEventListener('click',closeMenu, false);



//Events Toggles

let DOMstrings = {
  item1: '.events__item--1',
  item2: '.events__item--2',
  item3: '.events__item--3',
  eimg: '.events__display-img',
  elocation: '.event-location',
  edate: '.event-date'
}

let firstitem = document.querySelector(DOMstrings.item1);
let seconditem = document.querySelector(DOMstrings.item2);
let thirstitem = document.querySelector(DOMstrings.item3);
let elocation = document.querySelector(DOMstrings.elocation);
let eimg = document.querySelector(DOMstrings.eimg);
let edate = document.querySelector(DOMstrings.edate);

let data = {
  item1: {
    img: 'images/um6pevent.jpg',
    location: 'University Med 6, benguerir Maroc',
    date: '24 January, 2021',
  },
  item2: {
    img: 'images/cafeevent.jpg',
    location: 'Youcode, youssoufia Maroc',
    date: '25 October, 2020',
  },
  item3: {
    img: 'images/annual.jpg',
    location: '1337, benguerir Maroc',
    date: '18 December, 2020',
  }
}

let events = (() => {
  let display_event = (img, location, date) =>{
    elocation.innerHTML = `${location}`;
    date.innerHTML = `${date}`;
    eimg.src = `${img}`;
  }
  if(firstitem === null){
    return;
  }
  firstitem.addEventListener('click', (e) => {
    
    firstitem.classList.add('event-active');
    seconditem.classList.remove('event-active');
    thirstitem.classList.remove('event-active');

    display_event(data.item1.img, data.item1.location, data.item1.location);
  });
  seconditem.addEventListener('click', (e) => {
    firstitem.classList.remove('event-active');
    seconditem.classList.add('event-active');
    thirstitem.classList.remove('event-active');

    display_event(data.item2.img, data.item2.location, data.item2.location);
  });
  thirstitem.addEventListener('click', (e) => {
    firstitem.classList.remove('event-active');
    seconditem.classList.remove('event-active');
    thirstitem.classList.add('event-active');

    display_event(data.item3.img, data.item3.location, data.item3.location);
  });


})()