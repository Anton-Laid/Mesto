const aboutElem = document.querySelector('.profile__rectangle');
const popupElem = document.querySelector('.popup');
const popupCloseElem = popupElem.querySelector('.popup__buttom-close');



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
////////////////////////////////////////////////////////

// Находим форму в DOM
let contantElement = document.querySelector('.popup__form');

let buttom = document.querySelector('.popup__button');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__data_name');
let jobInput = document.querySelector('.popup__data_about');

let title = document.querySelector('.profile__title');
let subtitl = document.querySelector('.profile__subtitl');


function formSubmitHandler(evt) {
    evt.preventDefault();

    title.textContent = nameInput.value;
    subtitl.textContent = jobInput.value;

}
contantElement.addEventListener('submit', formSubmitHandler);

buttom.addEventListener('click', () => {
    popupElem.classList.remove('popup__opened');
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»





