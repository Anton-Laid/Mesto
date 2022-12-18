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
const potoContainet = document.querySelector('.photos'); // Место куда добавляются карточки 
const popupFhotoForm = document.querySelector('.form-add'); // FORMA ОТ popupFotoAdd
const popupFotoAddInputImg = document.querySelector('.popup__type-img'); // 1.inputImage popupFotoAdd
const popupFotoAddInputTitle = document.querySelector('.popup__type-title');  // 2.inputTitle popupFotoAdd
const addFotoCard = document.querySelector('.popup-foto__images'); // место куда передается 1.inputImage
const popupFotoTitle = document.querySelector('.popup-foto__title'); // место куда передается 2.inputTitle
const submitPopupUser = popupFhotoForm.querySelector('.popup__button'); // SUBMIT для popupFotoAdd
const cardTemplate = document.querySelector('#template').content; // TEMPLATE 
cardTemplate.querySelector('.photo'); // получения всего, что есть в TEMPLATE
const popupImage = document.querySelector('.photo__image'); // Фотография (которую можно увеличить)
const popupFoto = document.querySelector('.popup-foto'); // Сам popupFoto в котором карточка увеличина 
const battonClosePopupFoto = popupFoto.querySelector('.popup__buttom-close'); // крестик который закрывает popupFoto
const form = document.querySelector('.popup__input');

const initialCards = [ // Массив для стандартных карточек 
    {
        name: 'Go...',
        link: 'https://images.unsplash.com/photo-1671137513104-89166b4242f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Street',
        link: 'https://images.unsplash.com/photo-1647292344198-85a68d728eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Smoke',
        link: 'https://images.unsplash.com/photo-1536779886223-e970e8019e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Metro',
        link: 'https://images.unsplash.com/photo-1640033907202-e5dc78b9c8a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'New York',
        link: 'https://images.unsplash.com/photo-1498447817931-2edda1605b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Japan',
        link: 'https://images.unsplash.com/photo-1671272043051-f8a68b8e439f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
];

const enableValidation = {
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-active',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error-active',
};


//<---------------------------------------  import ------------------------------------------>

import Card from './Card.js'
import FormValidator from './FormValidator.js'

export { popupFoto, addFotoCard, popupFotoTitle, openModalWindow }

//<---------------------------------------  вызов Class-ов ---------------------------------->

const editorInputFormValidatorUser = new FormValidator(enableValidation, '.form-user');
const editorInputFormValidatorFotoAdd = new FormValidator(enableValidation, '.form-add');

editorInputFormValidatorUser.enableValidation();
editorInputFormValidatorFotoAdd.enableValidation();

function addingInformationCard(name, link, template) {
    const renderCard = new Card(name, link, template);
    const cardPrepend = renderCard.generateCard();
    return cardPrepend;
}

function addPhotoInTemplate(e) {
    e.preventDefault();
    addCard(addingInformationCard(popupFotoAddInputTitle.value, popupFotoAddInputImg.value, '#template'));
    closeModalWindow(popupFotoAdd);
}

initialCards.forEach((item) => { //массив с карточками 
    addCard(addingInformationCard(item, item, '#template'));
});

function addCard(card) {
    potoContainet.prepend(card);
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

function closurePopupUser(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupUser);
    }
}

function closurepopupFotoAdd(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupFotoAdd);
    }
}

// Закрытие по кнопке Escepe

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closeModalWindow(openedPopup);
    }
}

//<---------------------------------------  Закрытие Escape -------------------------------->

function closureIncreaseImages(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupFoto);
    }
}

//<--------------------------------- Закрытие открытие -------------------------------->

// Добавление новой карточки  // popupFotoAddInputImg // popupFotoAddInputTitle

// function addCard(card) {
//     potoContainet.prepend(card);
// }

// function addPhotoInTemplate(e) {
//     e.preventDefault();
//     addCard(addingInformationCard(popupFotoAddInputTitle.value, popupFotoAddInputImg.value, '#template'));
//     closeModalWindow(popupFotoAdd);
// }

// initialCards.forEach((item) => { //массив с карточками 
//     addCard(addingInformationCard(item, item, '#template'));
// });

// function addingInformationCard(name, link, template) {
//     const renderCard = new Card(name, link, template);
//     const cardPrepend = renderCard.generateCard();
//     return cardPrepend;
// }

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
    editorInputFormValidatorUser.closeValidForm();
    popupUserInputName.value = profileTitle.textContent;
    popupUserInputJob.value = profileJob.textContent;
}

function openInputAddFoto() {
    openModalWindow(popupFotoAdd);
    popupFhotoForm.reset();
    editorInputFormValidatorFotoAdd.closeValidForm();
    editorInputFormValidatorFotoAdd._toggleButtonState();
}

// <--------------------------------------- Ивенты ------------------------------------>

buttonOpenPopupUser.addEventListener('click', openInputEdit);

buttonClosePopupUser.addEventListener('click', () => {
    closeModalWindow(popupUser);
});

popupUser.addEventListener('click', closurePopupUser);

buttonPlus.addEventListener('click', openInputAddFoto);

buttonClosePopupFotoAdd.addEventListener('click', () => {
    closeModalWindow(popupFotoAdd);
});

// Фото

battonClosePopupFoto.addEventListener('click', () => {
    closeModalWindow(popupFoto);
});

popupFoto.addEventListener('click', closureIncreaseImages);

popupFotoAdd.addEventListener('click', closurepopupFotoAdd);

popupUserForm.addEventListener('submit', handleProfileFormSubmit);

// Рендер всех карточек 

popupFhotoForm.addEventListener('submit', addPhotoInTemplate);