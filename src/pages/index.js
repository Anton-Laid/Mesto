import '../pages/index.css';

import {
    buttonOpenPopupUser,
    popupUserInputName,
    popupUserInputJob,
    buttonPlus,
    photoContainer,
    popupFhoto,
    popupUser,
    popupFhotoAdd,
    initialCards,
    validationConfig,
    avatarImage,
    buttonUpdateImagePopup,
    popupAvatar,
} from '../utils/constants.js';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import { Section } from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';

//<--------------------------------- API ------------------------------------>

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-58',
    headers: {
        authorization: '7799ba30-cb0c-4e3e-9e29-b1e6d91978b5',
        'Content-Type': 'application/json',
    }
})

api.getInfoUser()
    .then((data) => {
        inputValues.setUserInfo(data.name, data.about);
        updateAvatar(data)
        // transferUserId(data._id)
    })

//<--------------------------------- передача имени и описания  -------------------->

const inputValues = new UserInfo({
    name: '.profile__title',
    job: '.profile__subtitle'
});

const popupOpenProfile = new PopupWithForm(popupUser, {
    submitForm: ({ name, profession }) => {
        api.getRedactProfile({ name, profession })
            .then(data => {
                inputValues.setUserInfo(data.name, data.about);
            })
    },
});


function updateAvatar(data) {
    avatarImage.src = data.avatar;
}


//<--------------------------------- renderCards ------------------------------------>

const cardList = new Section({
    items: initialCards,
    renderer: (item) => cardList.addItem(generateCard(item, '#template'))
}, photoContainer);

cardList.renderCard();

function generateCard(item, template) {
    const card = new Card(item, template, {
        handleCardClick: (link, name) => {
            openPopupFoto.open(link, name);
        }
    })
    const addCard = card.generateCard();

    return addCard;
}

//<--------------------------------- открытие карточки  ----------------------------->

const openPopupFoto = new PopupWithImage(popupFhoto);


//<--------------------------------- добавление новые карточки ---------------------->

function createInstanceCard(name, link, templateSelector) {
    return generateCard({ name, link }, templateSelector);
}

//<--------------------------------- передача url и title  ------------------------>

const openAddFoto = new PopupWithForm(popupFhotoAdd, {
    submitForm: ({ popuoTitle, popuoImage }) => {
        cardList.addItem(createInstanceCard(popuoTitle, popuoImage, '#template'));
    },
});

//<--------------------------------- передача изменение аватарки ------------------------>

const openAvatarImage = new PopupWithForm(popupAvatar, {
    submitForm: ({ inputAvatar }) => {
        api.getAvatarUser({ inputAvatar })
            .then((data) => {
                avatarImage.src = data.avatar;
            })
    },
});

//<--------------------------------- ивенты попапов ------------------------------->

openAvatarImage.setEventListeners();
openAddFoto.setEventListeners();
popupOpenProfile.setEventListeners();

//<--------------------------------- evt на bt  ----------------------------------->

buttonOpenPopupUser.addEventListener('click', () => {
    popupOpenProfile.open();
    const inputList = inputValues.getUserInfo();
    popupUserInputName.value = inputList.name;
    popupUserInputJob.value = inputList.profession;
    validFormUser.resetValidation();
})

buttonPlus.addEventListener('click', () => {
    openAddFoto.open();
    validFormPhoto.resetValidation();
})

buttonUpdateImagePopup.addEventListener('click', () => {
    openAvatarImage.open()
    validFormAvatar.resetValidation();
})

openPopupFoto.setEventListeners();


//<--------------------------------- валидация inputs  ---------------------------->

const validFormUser = new FormValidator(validationConfig, '.form-user');
const validFormPhoto = new FormValidator(validationConfig, '.form-add');
const validFormAvatar = new FormValidator(validationConfig, '.form-avatar')

validFormUser.enableValidation();
validFormPhoto.enableValidation();
validFormAvatar.enableValidation();