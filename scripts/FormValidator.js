export default class Validator {
    constructor(data, element) {
        this._Selector = data.Selector; //
        this._inputSelector = data.inputSelector; // инпут
        this._submitButtonSelector = data.submitButtonSelector; // submit кнопка
        this._inactiveButtonClass = data.inactiveButtonClass; // серая кнопка 
        this._inputErrorClass = data.inputErrorClass; // span ошибка
        this._errorClass = data.errorClass; // текс с ошибкой 

        this._element = element

        this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector)); // у нас был попап здесь 
        this._buttonElement = this._element.querySelector(this._submitButtonSelector);
    }

    _showInputError(inputElement, eressage) {
        const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        //errorElement.classList.add(this._errorClass);
        errorElement.textContent = eressage;;
    }

    _hideInputError(inputElement) {
        const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._List.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
    }

    // _removeErrors() {
    //     this._List.forEach(inputElement => {
    //         this._hideInputError(inputElement);
    //     })
    // }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    // _disableSubmitButton() {
    //     this._buttonElement.classList.add(this._submitButtonSelector);
    //     this._buttonElement.disabled = true;
    // }

    // _enableSubmitButton() {
    //     this._buttonElement.classList.remove(this._submitButtonSelector);
    //     this._buttonElement.disabled = false;
    // }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            buttonElement.classList.add(this._element.inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._element.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    }

    enableValidation() {
        this._setEventListeners()
    }
}

