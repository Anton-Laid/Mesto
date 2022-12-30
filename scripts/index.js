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
//const popups = Array.from(document.querySelectorAll('.popup'));

//<-------------------------------------- import и export -------------------------------->

import { initialCards, validationConfig } from './constants.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'
import Popup from './Popup.js';
import { Section } from './Section.js';
import PopupWithImage from './PopupWithImage.js';

export { popupFhoto, fhotoCardAdd, popupFhotoTitle };

//<---------------------------------------  вызов Class-ов ------------------------------>
// вызов для каждой формы
const editorInputFormValidatorUser = new FormValidator(validationConfig, '.form-user');
const editorInputFormValidatorFotoAdd = new FormValidator(validationConfig, '.form-add');

const interactionWithPopupUser = new Popup(popupUser);
const interactionWithPopupPhoto = new Popup(popupFhotoAdd);
//const interactionWithPopupPhotoSev = new Popup(popupFhoto);


const renderTemplate = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item.name, item.link, '#template', openModalWindow)
        const cardSubmit = card.generateCard();
        renderTemplate.addItem(cardSubmit);
    }
},
    photoContainer
);

renderTemplate.renderCard();

const popupWithImage = new PopupWithImage(popupFhoto);
popupWithImage.setEventListeners() // не помогло

popupImage.addEventListener('click', () => {
    popupWithImage.open(); // и это тоже 
})

// чтобы FormValidator заработал, нужно чтобы работал addEventListener, который будет пупускать 
// по стуи цепочку.
editorInputFormValidatorUser.enableValidation();
editorInputFormValidatorFotoAdd.enableValidation();

//<---------------------------------------  Создание карточки --------------------------->

// через попап создание карточки 
function handleSubmitAddCardForm(e) {
    e.preventDefault();
    addCard(addInformationCard(popupFhotoAddInputTitle.value, popupFhotoAddInputImg.value, '#template'));
    interactionWithPopupPhoto.close();
}

//<----------------------------------- Открытие/закрытие popup -------------------------->

function openModalWindow(modalWindow) { } // чтобы у валидации небыло ошибки 

function closeModalWindow(window) { } // чтобы у валидации небыло ошибки 

// Передача popup = user

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupUserInputName.value;
    profileJob.textContent = popupUserInputJob.value;
    interactionWithPopupUser.close();
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

buttonOpenPopupUser.addEventListener('click', () =>
    interactionWithPopupUser.setEventListeners()
)

buttonPlus.addEventListener('click', () => {
    interactionWithPopupPhoto.setEventListeners()
    console.log('photo');
})

buttonOpenPopupUser.addEventListener('click', () => {
    openInputEdit();
    interactionWithPopupUser.open() // открыть UserPopup
    console.log('user');

})

buttonPlus.addEventListener('click', () => {
    openProfilePopup()
    interactionWithPopupPhoto.open()
})

// popupImage.addEventListener('click', () => {
//     popupWithImage.open(popupFhoto);
//     console.log('popupFoto');
// })


popupUserForm.addEventListener('submit', handleProfileFormSubmit);

popupFhotoForm.addEventListener('submit', handleSubmitAddCardForm);