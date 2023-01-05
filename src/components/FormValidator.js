export default class FormValidator {
    /**
     * @param {*есть массив validationConfig из которого мы вытаскиваем все данные } data 
     * @param {*forma из которой мы будем узнавать validity} element 
     */
    constructor(data, element) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;

        /**
         * this._element - является формой в которой есть inputs, btn и т.д. 
         * this._inputList - Array.from создает новый эеземпляр из [] объекта -> qsAll (находим все инпуты)
         * this._buttonSubmit - находим кнопку
         */
        this._element = document.querySelector(element);
        this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
        this._buttonSubmit = this._element.querySelector(this._submitButtonSelector);
    }

    /**
     * 1. перебераем [] forEach, разделяем на элементы и на кажый input ставим Evt 
     * 2. если взаимодействуем, то это input отдаем this._checkInputValidity(formElement);
     * 3. также запускаем this._toggleButtonState();
     * 4. _ мы не пишем, т.к. это f() понадобится в не classa 
     */
    enableValidation() {
        this._inputList.forEach((formElement) => {
            formElement.addEventListener('input', () => {
                this._checkInputValidity(formElement);
                this._toggleButtonState();
            })
        })
    }

    /**
     * @param {сам input} inputElement 
     * @param {сообщение от ошибке из браузера} errorMessage 
     */
    _showInputError(inputElement, errorMessage) {
        const errorEelment = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorEelment.textContent = errorMessage;
        errorEelment.classList.add(this._errorClass);
    }

    /** 
     * @param {сам input} inputElement 
     * удаляем ошибку и чистим поле.
     */
    _hideInputError(inputElement) {
        const errorEelment = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorEelment.textContent = '';
        errorEelment.classList.remove(this._errorClass);
    }

    /**
     * @param {сам input} inputElement 
     * 1. Если input имеет значение valid true, то запускаем showInputError, если false, то hideInputError
     */
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    /**
     * @returns 1. смотрим в input сам input, устраивает он нас или нет 
     * @returns 2. если input отрицательный, то возращаем валидность этого инпута
     */
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    /**
     * дублируется код, создали f() которая это исправляет 
     */
    _disableSubmitButton() {
        this._buttonSubmit.classList.remove(this._inactiveButtonClass);
    }

    /**
     *  если hasInvalidInput() возращает в input ошибка, то дообавляем серую кнопу и отключаем,
     *  чтобы не сработал Enter
     *  если hasInvalidInput() возращает в input без ошибки, то возращаем стандартную кнопку 
     */
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonSubmit.classList.add(this._inactiveButtonClass);
            this._buttonSubmit.disabled = true;
        } else {
            this._disableSubmitButton();
            this._buttonSubmit.disabled = false;
        }
    };

    /** 1. Перебераем input и все элементы отдаем f() hideInputError(которая удаляет ошибку)
     *  2. проверяем состояние кнопки f() toggleButtonState
     */
    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
        this._toggleButtonState();
    }
}