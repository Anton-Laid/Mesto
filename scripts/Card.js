import { popupFoto, addFotoCard, popupFotoTitle } from './index.js'

export default class Card {
    /**
     * 
     * @param {Это все эелементы [] name, link} data 
     * @param {#template который мы находим в _getTemplate() 
     * и капируем } templateSelector 
     * все передаем внуть class и больше негде нам в проекте не нужно это) 
     * чтобы создавался новый {} прописываем this. (<-- грубо говоря). 
     */
    constructor(data, templateSelector) {
        this._name = data.name;
        this._image = data.link;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }
    /**
     * 1. ищим template и капируем его 
     * 2. @retur возращаем  
     */

    _getTemplate() {
        const cardTemplate = document.querySelector('#template').content
            .querySelector('.photo')
            .cloneNode(true);

        return cardTemplate;
    }

    /**
     * 1. создаем переменную this._element 
     * 2. Передаем все из [] 
     * @returns возращает в новую карточку все значения []
     */
    _generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.photo__title').textContent = this._name;
        this._element.querySelector('.photo__image').alt = this._link;
        this._element.querySelector('.photo__image').src = this._image;

        // const buttonCloseCard =
        this._element.querySelector('.photo__removel')

            .addEventListener('click', () => this._handleDeleteCard());
        // const buttonLike =
        this._element.querySelector('.photo__like')
            .addEventListener('click', () => this._eventButtonLike());

        // const image =
        this._element.querySelector('.photo__image')
            .addEventListener('click', () => {
                this._handleOpenPopup();
            });

        return this._element;
    }

    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _eventButtonLike() {
        //const buttonLikeToggle = 
        this._element.querySelector('.photo__like')
            .classList.toggle('photo__like_active'); // надо менять 
    }

    //<------------------------ Передача данных popupImage --------------------------------->

    _handleOpenPopup() {
        popupFoto.classList.add('popup_opened');
        addFotoCard.src = this._image;
        popupFotoTitle.textContent = this._name;
    }
}

