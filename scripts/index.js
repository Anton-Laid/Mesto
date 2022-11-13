//  Отрытие popup 

function openPopupUser() {
    popupUser.classList.add('popup_opened');
}

function popupFotoSeve() {
    popupFotoSev.classList.add('popup_opened');
}

// Закрытие popup

function clocePopup() {
    popupUser.classList.remove('popup_opened');
}

function closePopupFoto() {
    popupFotoSev.classList.remove('popup_opened');
}

function deletPopupUser(evt) {
    if (evt.target === evt.currentTarget) {
        popupUser.classList.remove('popup_opened');
    }
}

function deletPopupSeveFoto(evt) {
    if (evt.target === evt.currentTarget) {
        popupFotoSev.classList.remove('popup_opened');
    }
}

// Popup Img Open 

function openPopupImages() {
    popupUserIncrease.classList.add('popup_opened');
    addFotoCard.src = img.src;
    popupFotoTitle.textContent = title.textContent;
};

// Передача popup = user

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    popupUser.classList.remove('popup_opened');
}

// Обработчик событий  popupTitle

const formSubmitHandlerAddList = (event) => {
    event.preventDefault();
    renderCard({ link: popupImg.value, name: popupTitle.value });
    popupImg.value = '';
    popupTitle.value = '';

    popupFotoSev.classList.remove('popup_opened');
}

// Рабочий лайк 



function closeopenPopupUserIncrease() {
    popupUserIncrease.classList.remove('popup_opened');
}

function deletopenPopupUserIncrease(evt) {
    if (evt.target === evt.currentTarget) {
        popupUserIncrease.classList.remove('popup_opened');
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

    const like = newCard.querySelector('.photo__like').addEventListener('click', function (event) {
        event.target.classList.toggle('photo__like_active');
    });

    img.src = nameCart.link;
    titel.textContent = nameCart.name;

    IncreaseImages.addEventListener('click', () => {
        popupUserIncrease.classList.add('popup_opened');
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

// Увеличение фото 







// addEventListener

buttomUser.addEventListener('click', openPopupUser);

popupUserClose.addEventListener('click', clocePopup);

popupUser.addEventListener('click', deletPopupUser);

contantElement.addEventListener('submit', formSubmitHandler);

buttonPlus.addEventListener('click', popupFotoSeve);

popupFotoClose.addEventListener('click', closePopupFoto);

popupFotoSev.addEventListener('click', deletPopupSeveFoto);

// Фото

closeIncreaseImages.addEventListener('click', closeopenPopupUserIncrease);

popupUserIncrease.addEventListener('click', deletopenPopupUserIncrease);


