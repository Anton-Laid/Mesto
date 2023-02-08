import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(popup) {
        super(popup)

        this._popupForm = this._popup.querySelector('.form');
        this._submitButton = this._popupForm.querySelector('.popup__button');
    }

    setEventListeners() {
        super.setEventListeners()

        this._popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleSubmitCallback()
        });
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action
    }

    close() {
        super.close()
    }
}