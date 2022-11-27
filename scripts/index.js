//  Отрытие popup 

function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened');
}

// Закрытие popup close

function closeModalWindow(window) {
    window.classList.remove('popup_opened');
    removingErrorInputPopup(popup)
}

// Закрытие popup delete

function closurePopupUser(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupUser); // почему все исправил, а это пропутил... Я ответить не могу) 
    }
}

function closurePopupFotoSev(evt) {
    if (evt.target === evt.currentTarget) {
        closeModalWindow(popupFotoSev);
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

const formSubmitHandlerAddList = (event) => {
    event.preventDefault();
    renderCard({ link: popupImg.value, name: popupTitle.value });
    popupImg.value = '';
    popupTitle.value = '';
    closeModalWindow(popupFotoSev);
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

// Закрытие по кнопке Escepe

function keyDownEsc(evt) {
    if (evt.key === 'Escape') {
        closeModalWindow(popupUser);
        closeModalWindow(popupFotoSev);
        closeModalWindow(popupUserIncrease);
    }
}

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

    newCard.scr = nameCart.link;

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

// Закрытие popup Escape-пом

document.addEventListener('keydown', keyDownEsc);



