// Переменные для input
const aboutElem = document.querySelector('.profile__rectangle');
const popupElem = document.querySelector('.popup');
const popupCloseElem = popupElem.querySelector('.popup__buttom-close');

// Переменные для pupup

let contantElement = document.querySelector('.popup__form');
let buttom = document.querySelector('.popup__button');
let nameInput = document.querySelector('.popup__type-name');
let jobInput = document.querySelector('.popup__type-job');
let title = document.querySelector('.profile__title');
let subtitl = document.querySelector('.profile__subtitle');

//  input

aboutElem.addEventListener('click', () => {
    popupElem.classList.add('popup_opened');
});

popupCloseElem.addEventListener('click', () => {
    popupElem.classList.remove('popup_opened');
});


popupElem.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        popupElem.classList.remove('popup_opened');
    }
})

//  pupup

function formSubmitHandler(evt) {
    evt.preventDefault();

    title.textContent = nameInput.value;
    subtitl.textContent = jobInput.value;

}
contantElement.addEventListener('submit', formSubmitHandler);

buttom.addEventListener('click', () => {
    popupElem.classList.remove('popup_opened');
});
