function enableValidation(element) {
    const formList = Array.from(document.querySelectorAll(element.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.form'));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet, element);
        });
    });
}

// Работа с input ошибки 

function showInputError(formElement, inputElement, errorMessage, element) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(element.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(element.errorClass);
}

function removingErrorInputPopup(popup) {
    const removingInput = Array.from(popup.querySelectorAll('.popup__input'))
    removingInput.forEach((inputElement) => {
        hideInputError(popup, inputElement, { inputErrorClass: 'popup__input_type_error' });
    })
}

function hideInputError(formElement, inputElement, element) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(element.inputErrorClass);
    errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement, element) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, element);
    } else {
        hideInputError(formElement, inputElement, element);
    }
};

function setEventListeners(formElement, element) {
    const inputList = Array.from(formElement.querySelectorAll(element.inputSelector));

    const buttonElement = formElement.querySelector(element.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, element);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, element);

            toggleButtonState(inputList, buttonElement, element);
        });
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

function toggleButtonState(inputList, buttonElement, element) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(element.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(element.errorClass);
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