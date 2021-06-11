import './index.css';
import Card from '../scripts/components/Card.js';
import SectionCards from '../scripts/components/SectionCards';
import Api from '../scripts/components/Api';

let initialDataCards = [];

const api = new Api

const cardsContainer = new SectionCards({
    cards: initialDataCards,
    renderer: (cardData) => cardsContainer.addCard(newCard(cardData))
})

function newCard (cardData) {
const card = new Card(cardData)
    return card.createCard()
}

api.getCardsData()
    .then(res =>{
        res.forEach(cardData => initialDataCards.unshift(cardData))
        cardsContainer.renderCards()
    })

