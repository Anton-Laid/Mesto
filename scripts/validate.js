// Работа с input ошибки 

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

function removingErrorInputPopup(popup) {
    const removingInput = Array.from(popup.querySelectorAll('.popup__input'));
    removingInput.forEach((inputElement) => {
        inputElement.classList.remove('.popup__input_type_error') 
    })
}

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    const buttonElement = formElement.querySelector('.popup__button');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);

            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup')); /// form__user было
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.form'));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        });
    });
}

enableValidation();

// Оключение кнопки. 

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button-active');
    } else {
        buttonElement.classList.remove('popup__button-active');
    }
};

enableValidation({
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-active',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error-active',
});