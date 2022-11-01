// Переменные для popup
const aboutElem = document.querySelector('.profile__rectangle');
const popupElem = document.querySelector('.popup');
const popupCloseElem = popupElem.querySelector('.popup__buttom-close');

// Переменные для input
let contantElement = document.querySelector('.popup__contant');
let buttom = document.querySelector('.popup__button');
let nameInput = document.querySelector('.popup__type_name');
let jobInput = document.querySelector('.popup__type_job');
let title = document.querySelector('.profile__title');
let subtitl = document.querySelector('.profile__subtitl');

////////////////////////popup////////////////////////////////

aboutElem.addEventListener('click', () => {
    popupElem.classList.add('popup__opened');
});

popupCloseElem.addEventListener('click', () => {
    popupElem.classList.remove('popup__opened');
});


popupElem.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        popupElem.classList.remove('popup__opened');
    }
})

////////////////////////input////////////////////////////////

function formSubmitHandler(evt) {
    evt.preventDefault();

    title.textContent = nameInput.value;
    subtitl.textContent = jobInput.value;

}
contantElement.addEventListener('submit', formSubmitHandler);

buttom.addEventListener('click', () => {
    popupElem.classList.remove('popup__opened');
});







