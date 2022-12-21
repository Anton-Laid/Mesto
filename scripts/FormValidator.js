export default class FormValidator {
    constructor(data, element) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;

        this._element = document.querySelector(element);
        this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
        this._buttonSubmit = this._element.querySelector(this._submitButtonSelector);
    }

    enableValidation() {
        this._inputList.forEach((formElement) => {
            formElement.addEventListener('input', () => {
                this._checkInputValidity(formElement);
                this._toggleButtonState();
            })
        })
    }

    _showInputError(inputElement, errorMessage) {
        const errorEelment = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorEelment.textContent = errorMessage;
        errorEelment.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorEelment = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorEelment.textContent = '';
        errorEelment.classList.remove(this._errorClass);
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _disableSubmitButton() {
        this._buttonSubmit.classList.remove(this._inactiveButtonClass);
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonSubmit.classList.add(this._inactiveButtonClass);
            this._buttonSubmit.disabled = true;
        } else {
            this._disableSubmitButton();
            this._buttonSubmit.disabled = false;
        }
    };

    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
        this._disableSubmitButton();
    }
}