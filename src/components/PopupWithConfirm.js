import Popup from "./Popup";

class PopupWithConfirm extends Popup {
    constructor(popup) {
        super(popup)

        this._popupForm = this._popup.querySelector('.form');
        this._submitButton = this._popupForm.querySelector('.popup__button');
        this._popupButtonTextContent = this._submitButton.textContent;
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


}

export default PopupWithConfirm