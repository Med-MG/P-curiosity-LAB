let paraInfo, btnMore;

document.querySelector('.aboutUs__para--span') ? paraInfo = document.querySelector('.aboutUs__para--span') : null;
document.querySelector('.btnMore') ?  btnMore = document.querySelector('.btnMore') : null;



btnMore.addEventListener('click',AbMore)
function AbMore (){
    paraInfo.style.display='block';
    btnMore.style.display='none';
}