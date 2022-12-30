import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._image = this._popup.querySelector('.popup-foto__images');
        this._name = this._popup.querySelector('.popup-foto__title');
    }

    open(item) {
        super.open();
        this._image.textContent = item.name;
        this._image.src = item.link;
        this._image.alt = item.link;
    }
}
