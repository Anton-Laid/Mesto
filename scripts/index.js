//  Отрытие popup 

function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened');
}

// Закрытие popup close

function closeModalWindow(window) {
    window.classList.remove('popup_opened');
}

// Закрытие popup delete

function closurePopupUser(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupUser);
    }
}

function closurePopupFotoSev(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupFotoSev);
    }
}

function closurePopupUpdateAvatar(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupUpdateAvatar);
    }
}

// Popup Img Open 

function addPhotoWindowPopupUser() {
    openModalWindow(popupUserIncrease);
    addFotoCard.src = img.src;
    popupFotoTitle.textContent = title.textContent;
};

// Передача popup = user

function dataTransfersPopupUser(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closeModalWindow(popupUser);
}

// Обработчик событий  popupTitle

const formSubmitHandlerAddList = (evt) => {
    evt.preventDefault();
    renderCard({ link: popupImg.value, name: popupTitle.value });
    popupImg.value = '';
    popupTitle.value = '';
    closeModalWindow(popupFotoSev);
}

// Обработчик изменения аватарки -------------------------------------->

const popupAboutUser = (evt) => {
    evt.preventDefault();
    changingProfile.src = popupAboutChange.value;
    popupAboutChange.value = '';
    closeModalWindow(popupUpdateAvatar);
}

// Закрытие увеличенной фотки

function collapseIncreaseImages() {
    closeModalWindow(popupUserIncrease);
}

function closureIncreaseImages(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupUserIncrease);
    }
}

buttonLike.addEventListener('click', () => {
    openModalWindow(popupUser);
});

// Удаление карты 

const handleDeleteCard = (event) => {
    event.target.closest('.photo').remove();
}

// Генерация карты 

const generateCard = (nameCart) => {
    const newCard = cardTemplate.cloneNode(true);
    const IncreaseImages = newCard.querySelector('.photo__image');
    const img = newCard.querySelector('.photo__image');
    const titel = newCard.querySelector('.photo__title');
    const cardRemoval = newCard.querySelector('.photo__removel').addEventListener('click', handleDeleteCard)
    const like = newCard.querySelector('.photo__like');

    like.addEventListener('click', (event) => event.target.classList.toggle('photo__like_active'));

    img.src = nameCart.link;
    titel.textContent = nameCart.name;

    IncreaseImages.addEventListener('click', () => {
        openModalWindow(popupUserIncrease);
        addFotoCard.src = nameCart.link;
        popupFotoTitle.textContent = nameCart.name;
    });

    // newCard.scr = nameCart.link;

    return newCard;
}

// Добавление карточки 

const renderCard = (nameCart) => {
    potoContainet.prepend(generateCard(nameCart));
};

// Рендер всех карточек 

formAdd.addEventListener('submit', formSubmitHandlerAddList);

// Рендер карточек 

initialCards.forEach((nameCart) => {
    renderCard(nameCart);
})


// addEventListener

buttonUser.addEventListener('click', () => {
    openModalWindow(popupUser);
});

popupUserClose.addEventListener('click', () => {
    closeModalWindow(popupUser);
});

popupUser.addEventListener('click', closurePopupUser);

contantElement.addEventListener('submit', dataTransfersPopupUser);

buttonPlus.addEventListener('click', () => {
    openModalWindow(popupFotoSev);
});

popupFotoClose.addEventListener('click', () => {
    closeModalWindow(popupFotoSev);
});

popupFotoSev.addEventListener('click', closurePopupFotoSev);

// Фото

closeIncreaseImages.addEventListener('click', collapseIncreaseImages);

popupUserIncrease.addEventListener('click', closureIncreaseImages);

// Изменение фото 

changingProfile.addEventListener('click', () => {
    openModalWindow(popupUpdateAvatar);
});

closePopupUpdateAvatar.addEventListener('click', () => {
    closeModalWindow(popupUpdateAvatar);
})

popupUpdateAvatar.addEventListener('click', closurePopupUpdateAvatar);

formAddAvatar.addEventListener('submit', popupAboutUser);