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

// Работа с inputs 



// Работа с inputs popupUser


const formInput = contantElement.querySelector('.popup__input');
console.log(formInput.id);

const formError = contantElement.querySelector(`.${form - name.id}-error`);

const formInputAdd = popupFotoSev.querySelector('.popup__input');

console.log(formInputAdd.id);

//const formErrorImg = contantElement.querySelector(`.${form - title.id}-error`);

function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error-active');
}

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('form__input-error-active');
    errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
        });
    });
};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form__user'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
}

enableValidation();


document.addEventListener('keydown', keyDownEsc);

function keyDownEsc(evt) {
    if (evt.key === 'Escape') {
        closeModalWindow(popupUser);
        closeModalWindow(popupFotoSev);
    }
}

