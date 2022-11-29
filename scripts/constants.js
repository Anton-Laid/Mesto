const buttonUser = document.querySelector('.profile__rectangle');

//  открытие попапов
const popupUser = document.querySelector('.popup-user');
// закрытие крестиком попапа
const popupUserClose = popupUser.querySelector('.popup__buttom-close');

// Передача данных User

const popupName = document.querySelector('.popup__type-name');
const popupJob = document.querySelector('.popup__type-job');

// Куда передаем 

const profileTitle = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const contantElement = document.querySelector('.form-user');

// Popup для Photo окна

const buttonPlus = document.querySelector('.profile__button');
const popupFotoSev = document.querySelector('.popup-add');
const popupFotoClose = popupFotoSev.querySelector('.popup__buttom-close');

// Фото на сате 


const potoContainet = document.querySelector('.photos');
const formAdd = document.querySelector('.form-add');
const popupTitle = document.querySelector('.popup__type-title');
const popupImg = document.querySelector('.popup__type-img');

const buttonElement = formAdd?.querySelector('.popup__button');

const cardTemplate = document.querySelector('#template').content;

cardTemplate.querySelector('.photo');

const IncreaseImages = document.querySelector('.photo__image');

const popupUserIncrease = document.querySelector('.popup-foto');

const closeIncreaseImages = popupUserIncrease.querySelector('.popup__buttom-close');

// Передача картинке горы 

const addFotoCard = document.querySelector('.popup-foto__images');

const popupFotoTitle = document.querySelector('.popup-foto__title');

// Массив для стандартных карточек 

const initialCards = [
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

