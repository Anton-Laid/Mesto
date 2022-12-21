const buttonOpenPopupUser = document.querySelector('.profile__rectangle'); // кнопка открытия PopupUser
const popupUser = document.querySelector('.popup-user'); // Сам PopupГser окно для имени и профессии
const buttonClosePopupUser = popupUser.querySelector('.popup__buttom-close'); // Крестик закрытия PopupUser
const popupUserInputName = document.querySelector('.popup__type-name'); // 1.inputName PopupUser
const popupUserInputJob = document.querySelector('.popup__type-job'); // 2.inputJob PopupUser
const profileTitle = document.querySelector('.profile__title'); // место куда передается 1.inputName
const profileJob = document.querySelector('.profile__subtitle'); // место куда передается 2.inputJob
const popupUserForm = document.querySelector('.form-user'); // FORMA ОТ PopupUser 
const buttonPlus = document.querySelector('.profile__button'); // кнопка открытия popupFotoAdd
const popupFotoAdd = document.querySelector('.popup-add'); // сам popupFotoAdd Окно для картики
const buttonClosePopupFotoAdd = popupFotoAdd.querySelector('.popup__buttom-close'); // крестик для закрытия popupFotoAdd
const potoContainer = document.querySelector('.photos'); // Место куда добавляются карточки 
const popupFhotoForm = document.querySelector('.form-add'); // FORMA ОТ popupFotoAdd
const popupFotoAddInputImg = document.querySelector('.popup__type-img'); // 1.inputImage popupFotoAdd
const popupFotoAddInputTitle = document.querySelector('.popup__type-title');  // 2.inputTitle popupFotoAdd
const fotoCardAdd = document.querySelector('.popup-foto__images'); // место куда передается 1.inputImage
const popupFotoTitle = document.querySelector('.popup-foto__title'); // место куда передается 2.inputTitle
const submitPopupUser = popupFhotoForm.querySelector('.popup__button'); // SUBMIT для popupFotoAdd
const cardTemplate = document.querySelector('#template').content; // TEMPLATE 
cardTemplate.querySelector('.photo'); // получения всего, что есть в TEMPLATE
const popupImage = document.querySelector('.photo__image'); // Фотография (которую можно увеличить)
const popupFoto = document.querySelector('.popup-foto'); // Сам popupFoto в котором карточка увеличина 
const buttonClosePopupFoto = popupFoto.querySelector('.popup__buttom-close'); // крестик который закрывает popupFoto
const form = document.querySelector('.popup__input');

//<---------------------------------------  import и export ------------------------------------------>

import { initialCards, validationConfig } from './constants.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'

export { popupFoto, fotoCardAdd, popupFotoTitle, openModalWindow }

//<---------------------------------------  вызов Class-ов ---------------------------------->

const editorInputFormValidatorUser = new FormValidator(validationConfig, '.form-user');
const editorInputFormValidatorFotoAdd = new FormValidator(validationConfig, '.form-add');

editorInputFormValidatorUser.enableValidation();
editorInputFormValidatorFotoAdd.enableValidation();

function addInformationCard(name, link, template) {
    const renderCard = new Card(name, link, template);
    const cardPrepend = renderCard.generateCard();
    return cardPrepend;
}

//<---------------------------------------  Создание карточки ---------------------------------->

function addPhotoInTemplate(e) {
    e.preventDefault();
    addCard(addInformationCard(popupFotoAddInputTitle.value, popupFotoAddInputImg.value, '#template'));
    closeModalWindow(popupFotoAdd);
}

initialCards.forEach((item) => { //массив с карточками 
    addCard(addInformationCard(item.name, item.link, '#template'));
});

function addCard(card) {
    potoContainer.prepend(card);
}

//<----------------------------------- Отрытие popup --------------------------------------->

function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened');
    addListener();
}

function closeModalWindow(window) {
    window.classList.remove('popup_opened');
    removeListene();
}

function addListener() {
    document.addEventListener('keydown', closeByEscape);
};

function removeListene() {
    document.removeEventListener('keydown', closeByEscape);
};

//<---------------------------------------  Закрытие target ------------------------------->

function closurePopup(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(evt.currentTarget);
    }
}

//<---------------------------------------  Закрытие Escape -------------------------------->

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

// <------------------------ Обработчики и передача данных картинке --------------------->

function openInputEdit() {
    openModalWindow(popupUser);
    editorInputFormValidatorUser.resetValidation();
    popupUserInputName.value = profileTitle.textContent;
    popupUserInputJob.value = profileJob.textContent;
}

function openInputAddFoto() {
    openModalWindow(popupFotoAdd);
    popupFhotoForm.reset();
    editorInputFormValidatorFotoAdd.resetValidation();
}

// <--------------------------------------- Ивенты ------------------------------------>

buttonOpenPopupUser.addEventListener('click', openInputEdit);

buttonClosePopupUser.addEventListener('click', () => {
    closeModalWindow(popupUser);
});

popupUser.addEventListener('click', closurePopup);//

buttonPlus.addEventListener('click', openInputAddFoto);

buttonClosePopupFotoAdd.addEventListener('click', () => {
    closeModalWindow(popupFotoAdd);
});

// Фото

buttonClosePopupFoto.addEventListener('click', () => {
    closeModalWindow(popupFoto);
});

popupFoto.addEventListener('click', closurePopup); //

popupFotoAdd.addEventListener('click', closurePopup);//

popupUserForm.addEventListener('submit', handleProfileFormSubmit);

// Рендер всех карточек

popupFhotoForm.addEventListener('submit', addPhotoInTemplate);