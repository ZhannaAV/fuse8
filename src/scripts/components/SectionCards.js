export default class SectionCards {
    constructor({cards, renderer}) {
        this._cardsContainerSelector = '.cards'
        this._cards = cards;
        this._renderer = renderer
        this._container = document.querySelector(this._cardsContainerSelector)
    }

    addCard(card){
        this._container.prepend(card)
    }

    renderCards(){
        this._cards.forEach(card => this._renderer(card))
    }
}