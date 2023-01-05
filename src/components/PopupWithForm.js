import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popup, { submitForm }) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.form')
        this._inputList = this._form.querySelectorAll('.popup__input');
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
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}
