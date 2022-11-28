//  Отрытие popup 

function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened');
    addListener();
}

// Закрытие popup close

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

// Popup Img Open 

function addPhotoWindowPopupUser() {
    openModalWindow(popupUserIncrease);
    addFotoCard.src = img.src;
    addFotoCard.alt = img.src;
    popupFotoTitle.textContent = title.textContent;
};

// Передача popup = user

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closeModalWindow(popupUser);
}

// Обработчик событий  popupTitle

const handleAddFormSubmit = (event) => {
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
    img.alt = nameCart.name;
    titel.textContent = nameCart.name;

    IncreaseImages.addEventListener('click', () => {
        openModalWindow(popupUserIncrease);
        addFotoCard.src = nameCart.link;
        addFotoCard.alt = nameCart.name;
        popupFotoTitle.textContent = nameCart.name;
    });

    return newCard;
}

// Добавление карточки 

const renderCard = (nameCart) => {
    potoContainet.prepend(generateCard(nameCart));
};

// Рендер всех карточек 

formAdd.addEventListener('submit', handleAddFormSubmit);

// Рендер карточек 

initialCards.forEach((nameCart) => {
    renderCard(nameCart);
})

function openEdit() {
    openModalWindow(popupUser);
    removingErrorInputPopup(popupUser);
    popupName.value = profileTitle.textContent;
    popupJob.value = profileJob.textContent;
}

function openAddFoto() {
    openModalWindow(popupFotoSev);
    removingErrorInputPopup(popupFotoSev);
    formAdd.reset();
    blockButton(buttonElement, 'popup__button-active');
}

function blockButton(button, buttonSelectorDisabled) {
    button.classList.add(buttonSelectorDisabled);
    buttonElement.disabled = true;
}

// addEventListener

buttonUser.addEventListener('click', openEdit);

popupUserClose.addEventListener('click', () => {
    closeModalWindow(popupUser);
});

popupUser.addEventListener('click', closurePopupUser);

contantElement.addEventListener('submit', handleProfileFormSubmit);

buttonPlus.addEventListener('click', openAddFoto);

popupFotoClose.addEventListener('click', () => {
    closeModalWindow(popupFotoSev);
});

// popupFotoSev.addEventListener('click', () => {
//     closeModalWindow(popupFotoSev);
// });



// Фото

closeIncreaseImages.addEventListener('click', collapseIncreaseImages);

popupUserIncrease.addEventListener('click', closureIncreaseImages);

popupFotoSev.addEventListener('click', closurePopupFotoSev);


// Закрытие по кнопке Escepe

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closeModalWindow(openedPopup);
    }
}

