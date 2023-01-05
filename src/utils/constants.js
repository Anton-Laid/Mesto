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
    popupFhoto
}