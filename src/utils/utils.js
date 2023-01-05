const initialCards = [ // Массив для стандартных карточек 
    {
        name: 'Go...',
        link: 'https://images.unsplash.com/photo-1671137513104-89166b4242f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Street',
        link: 'https://images.unsplash.com/photo-1647292344198-85a68d728eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Smoke',
        link: 'https://images.unsplash.com/photo-1536779886223-e970e8019e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Metro',
        link: 'https://images.unsplash.com/photo-1640033907202-e5dc78b9c8a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'New York',
        link: 'https://images.unsplash.com/photo-1498447817931-2edda1605b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Japan',
        link: 'https://images.unsplash.com/photo-1671272043051-f8a68b8e439f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
];

const validationConfig = {
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-active',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error-active',
};

export { initialCards, validationConfig }