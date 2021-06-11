export default class SectionCards {
    constructor({cards, renderer}) {
        this._cardsContainerSelector = '.cards'
        this._cards = cards;
        this._renderer = renderer
        this._container = document.querySelector(this._cardsContainerSelector)
    }

    addCard(card) {
        this._container.prepend(card)
    }

    clear() {
        this._container.innerHTML = `<template class="template"><li class="card"><a href="#" class="card__link"><div class="card__inner-img"><img class="card__img" src="#" alt=""><div class="card__label"><p class="card__label-caption"></p></div></div><article class="card__inner-text"><h2 class="card__title"></h2><p class="card__text card__text_type_address"></p><p class="card__text">New Properties for Sale from<span class="card__text-price">£214,999</span></p><p class=" card__text">Shared Ownership Available</p></article></a></li></template>`
    }

    renderCards() {
        this._cards.forEach(card => this._renderer(card))
    }
}