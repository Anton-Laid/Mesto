// Popup для User окна
const buttomUser = document.querySelector('.profile__rectangle');

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
        name: 'Foto',
        link: 'https://images.unsplash.com/photo-1667922327147-767f3a1c20ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Челябинская область',
        link: 'https://images.unsplash.com/photo-1668005060615-ce4811dae7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1576753092415-f4c74e4edc99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
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
    {
        name: 'New York',
        link: 'https://images.unsplash.com/photo-1569112749402-52cf70d0c172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    },
    {
        name: 'Paris',
        link: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    },
    {
        name: 'Japan',
        link: 'https://images.unsplash.com/photo-1580427331730-b38f8dc1f355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
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

