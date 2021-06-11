import './index.css';
import Card from '../scripts/components/Card.js';
import SectionCards from '../scripts/components/SectionCards';
import Api from '../scripts/components/Api';
import Filter from "../scripts/components/Filter";

let initialDataCards = [];

const api = new Api

function newCard(cardData) {
    const card = new Card(cardData)
    return card.createCard()
}

const cardsContainer = new SectionCards({
    cards: initialDataCards,
    renderer: (cardData) => cardsContainer.addCard(newCard(cardData))
})

const filter = new Filter(
    {
        handleFilterOn: (inputText) => {
            api.getCardsData()
                .then((res) => {
                    cardsContainer.clear()
                    res.forEach(cardData => {
                        if (cardData.title.toLowerCase().includes(inputText)) cardsContainer.addCard(newCard(cardData))
                    })
                })
                .catch((err) => console.log(err))
        },

        handleFilterOff: () => {
            api.getCardsData()
                .then(res => {
                    cardsContainer.clear()
                    initialDataCards = []
                    res.forEach(cardData => initialDataCards.unshift(cardData))
                    cardsContainer.renderCards()
                })
                .catch((err) => console.log(err))
        }
    })

filter.switchOnFilter()

api.getCardsData()
    .then(res => {
        res.forEach(cardData => initialDataCards.unshift(cardData))
        cardsContainer.renderCards()
    })
    .catch((err) => console.log(err))
