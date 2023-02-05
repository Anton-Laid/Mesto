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
    validationConfig,
    avatarImage,
    buttonUpdateImagePopup,
    popupAvatar,
    api,
    popupDeleteCard,
} from '../utils/constants.js';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import { Section } from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm';

//<--------------------------------- API ------------------------------------>

api.getInfoUser()
    .then((data) => {
        inputValues.setUserInfo(data.name, data.about, data.avatar);
        inputValues.getAvatar(data.avatar);
        userId = data
    })
    .catch(err => {
        console.log(err);
    })

//<--------------------------------- передача имени и описания  -------------------->

const inputValues = new UserInfo({
    name: '.profile__title',
    job: '.profile__subtitle',
    avatar: '.profile__avatar-image'
});

const popupOpenProfile = new PopupWithForm(popupUser, {
    submitForm: ({ name, profession }) => {
        loadingUser.renderLoadingSave(true)
        api.getRedactProfile({ name, profession })
            .then(data => {
                inputValues.setUserInfo(data.name, data.about);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                loadingUser.renderLoadingSave(false)
            })
    },
});

//<--------------------------------- renderCards ------------------------------------>

function generateCard(item, template) {
    const card = new Card(item, template, {
        handleCardClick: (link, name) => {
            openPopupFoto.open(link, name);
        },
        handleDeleteClick: (data) => {
            loadingDeleteCard.open()
            loadingDeleteCard.setSubmitAction(() => {
                api.deleteCard(data._id)
                    .then(() => {
                        card.handleDeleteCard();
                        loadingDeleteCard.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
        },
        likeCard: (id) => {
            api.addLike(id._id)
                .then((data) => {
                    card.likesAdd()
                    card.sumLike(data.likes.length);
                });
        },
        dislikeCard: (id) => {
            api.removeLike(id._id)
                .then((data) => {
                    card.likesDel()
                    card.sumLike(data.likes.length);
                });
        }
    }, userId)

    const addCard = card.generateCard();

    return addCard;
}



//<-------------------------- появление стандартных карточек ------------------------>

api.getCardsList()
    .then((res) => {
        addAllCard(res)
    })
    .catch(err => {
        console.log(err);
    })

const addAllCard = (item) => {
    const cardList = new Section({
        items: item,
        renderer: (item) => cardList.addItem(generateCard(item, '#template'))
    }, photoContainer);

    cardList.renderCard();
}

//<--------------------------------- открытие карточки  ----------------------------->

export const openPopupFoto = new PopupWithImage(popupFhoto);

//<--------------------------------- передача url и title  ------------------------>

const openAddFoto = new PopupWithForm(popupFhotoAdd, {
    submitForm: ({ popuoTitle, popuoImage }) => {
        loadingFhotoAdd.renderLoadingCreate(true)
        api
            .getNewCard(popuoTitle, popuoImage)
            .then((res) => {
                const container = document.querySelector('.photos')
                container.prepend(generateCard(res, '#template'));
                openAddFoto.close();
            })
            .catch((err) => {
                console.log(err.status);
            })
            .finally(() => {
                loadingFhotoAdd.renderLoadingCreate(false)
            })
    },
});

//<--------------------------------- передача изменение аватарки ------------------------>

const openAvatarImage = new PopupWithForm(popupAvatar, {
    submitForm: ({ inputAvatar }) => {
        loadingAvatar.renderLoadingSave(true)
        api.getAvatarUser({ inputAvatar })
            .then((data) => {
                avatarImage.src = data.avatar;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                loadingAvatar.renderLoadingSave(false)
            })
    },
});

const loadingDeleteCard = new PopupWithConfirm(popupDeleteCard);
const loadingUser = new PopupWithConfirm(popupUser);
const loadingAvatar = new PopupWithConfirm(popupAvatar);
const loadingFhotoAdd = new PopupWithConfirm(popupFhotoAdd);


//<--------------------------------- ивенты попапов ------------------------------->

openAvatarImage.setEventListeners();
openAddFoto.setEventListeners();
popupOpenProfile.setEventListeners();
loadingDeleteCard.setEventListeners();
openPopupFoto.setEventListeners();

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

let userId

//<--------------------------------- валидация inputs  ---------------------------->

const validFormUser = new FormValidator(validationConfig, '.form-user');
const validFormPhoto = new FormValidator(validationConfig, '.form-add');
const validFormAvatar = new FormValidator(validationConfig, '.form-avatar')

validFormUser.enableValidation();
validFormPhoto.enableValidation();
validFormAvatar.enableValidation();