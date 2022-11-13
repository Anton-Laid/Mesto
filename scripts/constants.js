// Popup для User окна

const popup = document.querySelector('.popup');

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

const contantElement = document.querySelector('.form');

// Popup для Photo окна

const popupFotoSev = document.querySelector('.popup-add');
const buttonPlus = document.querySelector('.profile__button');
const popupFotoClose = popupFotoSev.querySelector('.popup__buttom-close');

// Фото на сате 


const potoContainet = document.querySelector('.photos');
const formAdd = document.querySelector('.form-add');
const popupTitle = document.querySelector('.popup__type-title');
const popupImg = document.querySelector('.popup__type-img');

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
        name: 'Карелия',
        link: 'https://images.unsplash.com/photo-1668273704734-6cbbf1e02db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Cеверное сияние',
        link: 'https://images.unsplash.com/photo-1482351403047-56c184e23fe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
    },
    {
        name: 'Камчатка',
        link: 'https://images.unsplash.com/photo-1667840555698-b859ff73bd13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
];














// const disclosureFoto = (nameCart) => {
//     const newFoto = cardTemplate.cloneNode(true);

//     const photoTitle = newFoto.querySelector('.photo__title');
//     photoTitle.textContent = nameCart.name;

//     const photo = newFoto.querySelector('.photo__image');
//     photo.scr = nameCart.link;

//     return newFoto;
// }

