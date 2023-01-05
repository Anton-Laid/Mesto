export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
    }

    open() {
        this._popup.classList.add('popup_opened');
        this._handleEscClose();
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._handleEscClose();
    }

    _handleClosePopupByOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    _handleEscClose() {
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                this.close();
            }
        })
    }

    setEventListeners() {
        this._popup.querySelector('.popup__button-close')
            .addEventListener('click', () =>
                this.close()
            )

        this._popup.addEventListener('click', (evt) =>
            this._handleClosePopupByOverlay(evt))
    }
}