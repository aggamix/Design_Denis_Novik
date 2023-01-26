const btnRU = document.querySelector('.btn__ru');
const btnENG = document.querySelector('.btn__eng');
const btnMobRU = document.querySelector('.btn-mobile__ru');
const btnMobENG = document.querySelector('.btn-mobile__eng');

btnRU.addEventListener('click', selectionRu);
btnENG.addEventListener('click', selectionENG);
btnMobRU.addEventListener('click', selectionMobRu);
btnMobENG.addEventListener('click', selectionMobENG);

function selectionRu(){
    btnRU.classList.toggle('active__lng');
    btnENG.classList.toggle('active__lng');
    btnMobRU.classList.toggle('active__lng');
    btnMobENG.classList.toggle('active__lng');
}

function selectionENG(){
    btnENG.classList.toggle('active__lng');
    btnRU.classList.toggle('active__lng');
    btnMobENG.classList.toggle('active__lng');
    btnMobRU.classList.toggle('active__lng');
}

function selectionMobRu(){
    btnMobRU.classList.toggle('active__lng');
    btnMobENG.classList.toggle('active__lng');
    btnRU.classList.toggle('active__lng');
    btnENG.classList.toggle('active__lng');
}

function selectionMobENG(){
    btnMobENG.classList.toggle('active__lng');
    btnMobRU.classList.toggle('active__lng');
    btnENG.classList.toggle('active__lng');
    btnRU.classList.toggle('active__lng');
}