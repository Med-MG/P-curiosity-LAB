const paraInfo = document.querySelector('.aboutUs__para--span')
const btnMore = document.querySelector('.btnMore')



btnMore.addEventListener('click',AbMore)
function AbMore (){
    paraInfo.style.display='block';
    btnMore.style.display='none';
}