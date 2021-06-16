export default class Card {
    price;

    constructor(cardData) {
        this._template = '.template';
        this._title = cardData.title;
        this._address = cardData.address;
        this._type = cardData.type;
        this._price = cardData.price;
        this._id = cardData.id;
        this._cardTypes = {
            IndependentLiving: "card__label_type_independ",
            SupportAvailable: "card__label_type_support"
        }
    }

    _createCardTeml() {
        return document.querySelector(this._template).content.cloneNode(true)
    }

    _formatPrice() {
        this._price = Number.prototype.toFixed.call(parseFloat(this._price) || 0, 2)
        this._price = this._price.replace(/(\D)/g, ",")
        this._price = this._price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
        return '£ ' + this._price;
    }

    createCard() {
        this._card = this._createCardTeml();
        this._card.querySelector('.card__title').textContent = this._title;
        this._card.querySelector('.card__text_type_address').textContent = this._address;
        this._card.querySelector('.card__text-price').textContent = this._formatPrice();
        this._card.querySelector('.card__img').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
        this._card.querySelector('.card__img').alt = 'arkhyz';
        this._card.querySelector('.card__label-caption').textContent = this._type
        this._card.querySelector('.card__label').classList.add(this._cardTypes[this._type])
        this._card.querySelector('.card__link').href = `https://603e38c548171b0017b2ecf7.mockapi.io/homes/details/${this._id}`
        return this._card
    }


}