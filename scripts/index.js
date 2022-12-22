const buttonOpenPopupUser = document.querySelector('.profile__rectangle'); // кнопка открытия PopupUser
const popupUser = document.querySelector('.popup-user'); // Сам PopupГser окно для имени и профессии
const buttonClosePopupUser = popupUser.querySelector('.popup__button-close'); // Крестик закрытия PopupUser
const popupUserInputName = document.querySelector('.popup__type-name'); // 1.inputName PopupUser
const popupUserInputJob = document.querySelector('.popup__type-job'); // 2.inputJob PopupUser
const profileTitle = document.querySelector('.profile__title'); // место куда передается 1.inputName
const profileJob = document.querySelector('.profile__subtitle'); // место куда передается 2.inputJob
const popupUserForm = document.querySelector('.form-user'); // FORMA ОТ PopupUser 
const buttonPlus = document.querySelector('.profile__button'); // кнопка открытия popupFhotoAdd
const popupFhotoAdd = document.querySelector('.popup-add'); // сам popupFhotoAdd Окно для картики
const buttonClosePopupFhotoAdd = popupFhotoAdd.querySelector('.popup__button-close'); // крестик для закрытия popupFhotoAdd
const photoContainer = document.querySelector('.photos'); // Место куда добавляются карточки 
const popupFhotoForm = document.querySelector('.form-add'); // FORMA ОТ popupFhotoAdd
const popupFhotoAddInputImg = document.querySelector('.popup__type-img'); // 1.inputImage popupFhotoAdd
const popupFhotoAddInputTitle = document.querySelector('.popup__type-title');  // 2.inputTitle popupFhotoAdd
const fhotoCardAdd = document.querySelector('.popup-foto__images'); // место куда передается 1.inputImage
const popupFhotoTitle = document.querySelector('.popup-foto__title'); // место куда передается 2.inputTitle
const submitPopupUser = popupFhotoForm.querySelector('.popup__button'); // SUBMIT для popupFhotoAdd
const cardTemplate = document.querySelector('#template').content.querySelector('.photo'); // получения всего, что есть в TEMPLATE
const popupImage = document.querySelector('.photo__image'); // Фотография (которую можно увеличить)
const popupFhoto = document.querySelector('.popup-foto'); // Сам popupFoto в котором карточка увеличина 
const buttonClosePopupFhoto = popupFhoto.querySelector('.popup__button-close'); // крестик который закрывает popupFoto
const form = document.querySelector('.popup__input');
const popups = Array.from(document.querySelectorAll('.popup'));

//<-------------------------------------- import и export -------------------------------->

import { initialCards, validationConfig } from './constants.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'

export { popupFhoto, fhotoCardAdd, popupFhotoTitle }

//<---------------------------------------  вызов Class-ов ------------------------------>
// вызов для каждой формы
const editorInputFormValidatorUser = new FormValidator(validationConfig, '.form-user');
const editorInputFormValidatorFotoAdd = new FormValidator(validationConfig, '.form-add');

// чтобы FormValidator заработал, нужно чтобы работал addEventListener, который будет пупускать 
// по стуи цепочку.
editorInputFormValidatorUser.enableValidation();
editorInputFormValidatorFotoAdd.enableValidation();

// через [] создание карточки 
function addInformationCard(name, link, template) {
    const renderCard = new Card(name, link, template, openModalWindow);
    const cardPrepend = renderCard.generateCard();
    return cardPrepend;
}

//<---------------------------------------  Создание карточки --------------------------->
// через попап создание карточки 
function handleSubmitAddCardForm(e) {
    e.preventDefault();
    addCard(addInformationCard(popupFhotoAddInputTitle.value, popupFhotoAddInputImg.value, '#template'));
    closeModalWindow(popupFhotoAdd);
}

initialCards.forEach((item) => { //массив с карточками 
    addCard(addInformationCard(item.name, item.link, '#template'));
});

function addCard(card) {
    photoContainer.prepend(card);
}

//<----------------------------------- Открытие/закрытие popup -------------------------->

function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function closeModalWindow(window) {
    window.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape); // даже не задумался, спасибо) 
}

//<---------------------------------------  Закрытие target ----------------------------->

function handleClosePopupByOverlay(evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
        closeModalWindow(evt.currentTarget); // очень крутая вешь, спасибо! 
    }
}

//<---------------------------------------  Закрытие Escape ----------------------------->

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closeModalWindow(openedPopup);
    }
}

// Передача popup = user

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupUserInputName.value;
    profileJob.textContent = popupUserInputJob.value;
    closeModalWindow(popupUser);
}

// <------------------------ Обработчики и передача данных картинке -------------------->

function openInputEdit() {
    openModalWindow(popupUser);
    editorInputFormValidatorUser.resetValidation();
    popupUserInputName.value = profileTitle.textContent;
    popupUserInputJob.value = profileJob.textContent;
}

function openProfilePopup() {
    openModalWindow(popupFhotoAdd);
    popupFhotoForm.reset();
    editorInputFormValidatorFotoAdd.resetValidation();
}

// <--------------------------------------- Ивенты ------------------------------------>

buttonOpenPopupUser.addEventListener('click', openInputEdit);

buttonClosePopupUser.addEventListener('click', () => {
    closeModalWindow(popupUser);
});

buttonPlus.addEventListener('click', openProfilePopup);

popups.forEach((popup) => {
    popup.addEventListener('click', handleClosePopupByOverlay);
}) // это просто гениально!!!

popupUserForm.addEventListener('submit', handleProfileFormSubmit);

popupFhotoForm.addEventListener('submit', handleSubmitAddCardForm);