let paraInfo, btnMore;

paraInfo = document.querySelector('.aboutUs__para--span')
btnMore = document.querySelector('.btnMore')


if(btnMore !== null){
    btnMore.addEventListener('click',AbMore);
}

function AbMore (){
    paraInfo.style.display='block';
    btnMore.style.display='none';
}