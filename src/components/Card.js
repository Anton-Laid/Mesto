export default class Card {

    constructor(item, templateSelector, { handleCardClick, handleDeleteClick, likeCard, dislikeCard }, userId) {
        this._name = item.name;
        this._image = item.link;
        this._item = item;
        this._userId = userId;
        this._likeCard = likeCard;
        this._dislikeCard = dislikeCard;
        this._arrayCardLikes = item.likes;

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

        this.title = this._element.querySelector('.photo__title')
        this._cardLike = this._element.querySelector('.photo__like');
        this._cardImage = this._element.querySelector('.photo__image');
        this._remove = this._element.querySelector('.photo__removel');
        this._likeContainer = this._element.querySelector('.photo__like-sum');

        this.title.textContent = this._name;
        this._cardImage.alt = this._image;
        this._cardImage.src = this._image;
        this._likeContainer.textContent = this._arrayCardLikes.length;

        this._setEventListener();
        this._displayMyLike();
        this._displayMyUrn()

        return this._element;
    }

    _displayMyLike() {
        if (this._arrayCardLikes.some((item) => item._id == this._userId._id)) {
            this.likesAdd(this._item);
        } else {
            this.likesDel(this._item);
        }
    }

    _displayMyUrn() {
        if (this._item.owner._id === this._userId._id) {
            this._remove.classList.add('photo__removel-active');
        }
    }

    _handeLikeCard() {
        if (this.isLiked) {
            this._dislikeCard(this._item);
        } else {
            this._likeCard(this._item);
        }
    }

    likesAdd() {
        this.isLiked = true;
        this._cardLike.classList.add('photo__like_active')
    }

    likesDel() {
        this.isLiked = false;
        this._cardLike.classList.remove('photo__like_active')
    }

    sumLike(likesLength) {
        this._likeContainer.textContent = likesLength;
    }

    _setEventListener() {
        this._remove
            .addEventListener('click', () => {
                this._handleDeleteClick(this._item)
            })
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._image)
        })
        this._cardLike
            .addEventListener('click', () => {
                this._handeLikeCard()
            })
    }

    handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }
}
