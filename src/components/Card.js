export default class Card {

    constructor(item, templateSelector, { handleCardClick, handleDeleteClick }, userId) {
        this._name = item.name;
        this._image = item.link;
        this._link = item.link;
        this._id = item;
        this._userId = userId;

        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
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
        this._remove = this._element.querySelector('.photo__removel');

        this._setEventListener();

        if (this._id.owner._id === this._userId._id) {
            this._remove.classList.add('photo__removel-active');
        }

        return this._element;
    }

    _setEventListener() {
        this._remove
            .addEventListener('click', () => {
                this._handleDeleteClick(this._id)
            })
        this._cardLike
            .addEventListener('click', (e) => {
                this._eventButtonLike(e);
            })
        this._copyPhotoTemplate.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        })
    }

    handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _eventButtonLike(e) {
        e.target.classList.toggle('photo__like_active');
    }
}