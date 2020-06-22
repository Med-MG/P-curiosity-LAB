//* ::::::::::: Offer section :::::::::
//* ::::::::::::::::: DOM ::::::::::::::

// document.querySelector('.titles__title1') ? btnRural = document.querySelector('.titles__title1') : null;
// document.querySelector('.titles__title2') ? btnIdea = document.querySelector('.titles__title2') : null;
// document.querySelector('.titles__title3') ? btnBusiness = document.querySelector('.titles__title3') : null;
// document.querySelector('.titles__title4') ? btnSci = document.querySelector('.titles__title4') : null;
// document.querySelector('.rural') ? rural = document.querySelector('.rural') : null;
// document.querySelector('.idea') ? idea = document.querySelector('.idea') : null;
// document.querySelector('.business') ? business = document.querySelector('.business') : null;
// document.querySelector('.scientifics') ? document.querySelector('.scientifics') : null;
// document.querySelector('.animation') ? animateBox = document.querySelector('.animation') : null;

const btnRural = document.querySelector('.titles__title1')
const btnIdea = document.querySelector('.titles__title2')
const btnBusiness = document.querySelector('.titles__title3')
const btnSci = document.querySelector('.titles__title4')
const rural = document.querySelector('.rural')
const idea = document.querySelector('.idea')
const business = document.querySelector('.business')
const sci = document.querySelector('.scientifics')
const animateBox = document.querySelector('.animation')

//* ::::::::::::::::: DOM ::::::::::::::

//* ::::::::::::::::: EVENTS ::::::::::::::
if(btnRural !== null)
btnRural.addEventListener('click',fRural);
if(btnIdea !== null)
btnIdea.addEventListener('click',fIdea);
if(btnBusiness !== null)
btnBusiness.addEventListener('click',fBusiness);
if(btnSci !== null)
btnSci.addEventListener('click',fSci);

function fRural(){
    rural.style.display = 'grid'
    idea.style.display ='none'
    business.style.display ='none'
    sci.style.display ='none'
    btnSci.classList.remove('active')
    btnBusiness.classList.remove('active')
    btnIdea.classList.remove('active')
    btnRural.classList.add('active')
}

function fIdea(){
    rural.style.display = 'none'
    idea.style.display ='grid'
    business.style.display ='none'
    sci.style.display ='none'
    btnSci.classList.remove('active')
    btnBusiness.classList.remove('active')
    btnIdea.classList.add('active')
    btnRural.classList.remove('active')
}

function fBusiness(){
    rural.style.display = 'none'
    idea.style.display ='none'
    business.style.display ='grid'
    sci.style.display ='none'
    btnSci.classList.remove('active')
    btnBusiness.classList.add('active')
    btnIdea.classList.remove('active')
    btnRural.classList.remove('active')
}

function fSci(){
    rural.style.display = 'none'
    idea.style.display ='none'
    business.style.display ='none'
    sci.style.display ='grid'
    btnSci.classList.add('active')
    btnBusiness.classList.remove('active')
    btnIdea.classList.remove('active')
    btnRural.classList.remove('active')
}


