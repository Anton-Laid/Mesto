import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popup, { submitForm }) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.form')
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submit = this._form.querySelector('.popup__button');
        this._buttonTextContent = this._submit.textContent;
    }

    _getInputValues() {
        this._newValues = {}
        this._inputList.forEach(inputElement => {
            this._newValues[inputElement.name] = inputElement.value;
        })

        return this._newValues
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitForm(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    loadingSubmit(isLoading) {
        isLoading
            ? this._submit.textContent = 'Сохранение...'
            : this._submit.textContent = this._buttonTextContent;
    }
}
