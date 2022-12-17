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
const formPopupUser = document.querySelector('.form-add'); // FORMA ОТ popupFotoAdd
const form = document.querySelector('.popup');
const popupFotoAddInputImg = document.querySelector('.popup__type-img'); // 1.inputImage popupFotoAdd
const popupFotoAddInputTitle = document.querySelector('.popup__type-title');  // 2.inputTitle popupFotoAdd
const addFotoCard = document.querySelector('.popup-foto__images'); // место куда передается 1.inputImage
const popupFotoTitle = document.querySelector('.popup-foto__title'); // место куда передается 2.inputTitle
const submitPopupUser = formPopupUser.querySelector('.popup__button'); // SUBMIT для popupFotoAdd
const cardTemplate = document.querySelector('#template').content; // TEMPLATE 
cardTemplate.querySelector('.photo'); // получения всего, что есть в TEMPLATE
const popupImage = document.querySelector('.photo__image'); // Фотография (которую можно увеличить)
const popupFoto = document.querySelector('.popup-foto'); // Сам popupFoto в котором карточка увеличина 
const battonClosePopupFoto = popupFoto.querySelector('.popup__buttom-close'); // крестик который закрывает popupFoto

const initialCards = [ // Массив для стандартных карточек 
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
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

// Проганяем [] и передаем все в class Card 
initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardGenerate = card._generateCard();

    document.querySelector('.photos').append(cardGenerate);
})

const editorInputFormValidator = new FormValidator(enableValidation, form);

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

// Popup Img Open 

function addPhotoWindowPopupUser() {
    openModalWindow(popupFoto);
    addFotoCard.src = img.src;
    addFotoCard.alt = img.src;
    popupFotoTitle.textContent = title.textContent;
};

// Передача popup = user

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupUserInputName.value;
    profileJob.textContent = popupUserInputJob.value;
    closeModalWindow(popupUser);
}

// Обработчик событий  popupFotoAddInputTitle

const handleAddFormSubmit = (event) => {
    event.preventDefault();
    popupFotoAddInputImg.value = '';
    popupFotoAddInputTitle.value = '';
    closeModalWindow(popupFotoAdd);
}

// <------------------------ Обработчики и передача данных картинке --------------------->


function openInputEdit() {
    openModalWindow(popupUser);
    // removingErrorInputPopup(popupUser);
    popupUserInputName.value = profileTitle.textContent;
    popupUserInputJob.value = profileJob.textContent;
}

function openInputAddFoto() {
    openModalWindow(popupFotoAdd);
    // removingErrorInputPopup(popupFotoAdd);
    formPopupUser.reset();
    blockButton(submitPopupUser, 'popup__button-active');
}

function blockButton(button, buttonSelectorDisabled) {
    button.classList.add(buttonSelectorDisabled);
    submitPopupUser.disabled = true;
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

formPopupUser.addEventListener('submit', handleAddFormSubmit);