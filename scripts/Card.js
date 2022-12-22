import { popupFhoto, fhotoCardAdd, popupFhotoTitle } from './index.js'

export default class Card {
    /**
     * @param {Это все эелементы [] name, link} data 
     * @param {#template который мы находим в _getTemplate() 
     * и капируем } templateSelector 
     * все передаем внуть class и больше негде нам в проекте не нужно это) 
     * чтобы создавался новый {} прописываем this. (<-- грубо говоря). 
     */

    constructor(name, link, templateSelector, openModalWindow) {
        this._name = name;
        this._image = link;
        this._link = link;
        this._templateSelector = templateSelector;
        this._openModalWindow = openModalWindow;
    }

    /**
     * 1. ищим template и капируем его 
     * 2. @retur возращаем  
     */
    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content
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
        this._cardImage
            .addEventListener('click', () => {
                this._handleOpenPopup();
            });
    }

    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _eventButtonLike(e) {
        e.target.classList.toggle('photo__like_active');
    }

    //<------------------------ Передача данных popupImage --------------------------------->

    _handleOpenPopup() {
        popupFhotoTitle.textContent = this._name;
        fhotoCardAdd.alt = this._link;
        fhotoCardAdd.src = this._image;
        this._openModalWindow(popupFhoto);
    }
}