const buttonOpenPopupUser = document.querySelector('.profile__rectangle'); // кнопка открытия PopupUser
const popupUser = document.querySelector('.popup-user'); // Сам PopupГser окно для имени и профессии
//const buttonClosePopupUser = popupUser.querySelector('.popup__button-close'); // Крестик закрытия PopupUser
const popupUserInputName = document.querySelector('.popup__type-name'); // 1.inputName PopupUser
const popupUserInputJob = document.querySelector('.popup__type-job'); // 2.inputJob PopupUser
const profileTitle = document.querySelector('.profile__title'); // место куда передается 1.inputName
const profileJob = document.querySelector('.profile__subtitle'); // место куда передается 2.inputJob
const popupUserForm = document.querySelector('.form-user'); // FORMA ОТ PopupUser 
const buttonPlus = document.querySelector('.profile__button'); // кнопка открытия popupFhotoAdd
const popupFhotoAdd = document.querySelector('.popup-add'); // сам popupFhotoAdd Окно для картики
//const buttonClosePopupFhotoAdd = popupFhotoAdd.querySelector('.popup__button-close'); // крестик для закрытия popupFhotoAdd
const photoContainer = document.querySelector('.photos'); // Место куда добавляются карточки 
const popupFhotoForm = document.querySelector('.form-add'); // FORMA ОТ popupFhotoAdd
//const popupFhotoAddInputImg = document.querySelector('.popup__type-img'); // 1.inputImage popupFhotoAdd
//const popupFhotoAddInputTitle = document.querySelector('.popup__type-title');  // 2.inputTitle popupFhotoAdd
const fhotoCardAdd = document.querySelector('.popup-foto__images'); // место куда передается 1.inputImage
const popupFhotoTitle = document.querySelector('.popup-foto__title'); // место куда передается 2.inputTitle
//const submitPopupUser = popupFhotoForm.querySelector('.popup__button'); // SUBMIT для popupFhotoAdd
//const cardTemplate = document.querySelector('#template').content.querySelector('.photo'); // получения всего, что есть в TEMPLATE
//const popupImage = document.querySelector('.photo__image'); // Фотография (которую можно увеличить)
const popupFhoto = document.querySelector('.popup-foto'); // Сам popupFoto в котором карточка увеличина 
//const buttonClosePopupFhoto = popupFhoto.querySelector('.popup__button-close'); // крестик который закрывает popupFoto
//const form = document.querySelector('.popup__input');

const initialCards = [ // Массив для стандартных карточек 
    {
        name: 'Go...',
        link: 'https://images.unsplash.com/photo-1671137513104-89166b4242f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

    },
    {
        name: 'Street',
        link: 'https://images.unsplash.com/photo-1647292344198-85a68d728eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {
        name: 'Smoke',
        link: 'https://images.unsplash.com/photo-1536779886223-e970e8019e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {
        name: 'Metro',
        link: 'https://images.unsplash.com/photo-1640033907202-e5dc78b9c8a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {
        name: 'New York',
        link: 'https://images.unsplash.com/photo-1498447817931-2edda1605b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        name: 'Japan',
        link: 'https://images.unsplash.com/photo-1671272043051-f8a68b8e439f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    }
];

const validationConfig = {
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-active',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error-active',
};

export {
    buttonOpenPopupUser,
    popupUser,
    popupUserInputName,
    popupUserInputJob,
    profileTitle,
    profileJob,
    popupUserForm,
    buttonPlus,
    popupFhotoAdd,
    photoContainer,
    popupFhotoForm,
    fhotoCardAdd,
    popupFhotoTitle,
    popupFhoto,
    initialCards,
    validationConfig
}
