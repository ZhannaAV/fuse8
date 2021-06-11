export default class Card {
    constructor({card, template}) {
        this.title = card;
        this.template = template;
    }

_createCardTeml(){
        return document.querySelector('.template')
}
}