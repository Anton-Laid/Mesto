export default class Card {

    constructor(item, templateSelector, { handleCardClick }) {
        this._name = item.name;
        this._image = item.link;
        this._link = item.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content
            .querySelector('.photo')
            .cloneNode(true);

        return cardTemplate;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._copyPhotoTemplate = this._element.querySelector('.photo__image');
        this._element.querySelector('.photo__title').textContent = this._name;
        this._cardLike = this._element.querySelector('.photo__like');
        this._cardImage = this._element.querySelector('.photo__image');
        this._cardImage.alt = this._link;
        this._cardImage.src = this._image;

        this._setEventListener();

        return this._element;
    }

    _setEventListener() {
        this._element.querySelector('.photo__removel')
            .addEventListener('click', () => {
                this._handleDeleteCard();
            })
        this._cardLike
            .addEventListener('click', (e) => {
                this._eventButtonLike(e);
            })
        this._copyPhotoTemplate.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        })
    }

    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _eventButtonLike(e) {
        e.target.classList.toggle('photo__like_active');
    }
}