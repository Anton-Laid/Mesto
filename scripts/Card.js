import { popupFoto, addFotoCard, popupFotoTitle, openModalWindow } from './index.js'

export default class Card {
    /**
     * 
     * @param {Это все эелементы [] name, link} data 
     * @param {#template который мы находим в _getTemplate() 
     * и капируем } templateSelector 
     * все передаем внуть class и больше негде нам в проекте не нужно это) 
     * чтобы создавался новый {} прописываем this. (<-- грубо говоря). 
     */
    constructor(name, link, templateSelector) {
        this._name = name;
        this._image = link;
        this._link = link;
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
    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.photo__title').textContent = this._name;
        this._element.querySelector('.photo__image').alt = this._link;
        this._element.querySelector('.photo__image').src = this._image;

        this._setEventListener();

        return this._element;
    }

    _setEventListener() {
        this._element.querySelector('.photo__removel')
            .addEventListener('click', () => {
                this._handleDeleteCard();
            })
        this._element.querySelector('.photo__like')
            .addEventListener('click', (evt) => {
                this._eventButtonLike(evt)
            })
        this._element.querySelector('.photo__image')
            .addEventListener('click', () => {
                this._handleOpenPopup();
            });
    }

    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _eventButtonLike(evt) {
        evt.target.classList.toggle('photo__like_active');
    }

    //<------------------------ Передача данных popupImage --------------------------------->

    _handleOpenPopup() {
        popupFotoTitle.textContent = this._name;
        addFotoCard.alt = this._link;
        addFotoCard.src = this._image;
        openModalWindow(popupFoto);
    }
}

