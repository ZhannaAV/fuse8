export default class Api {
    constructor() {
        this._url = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes'
    }

    getCardsData() {
        return fetch(this._url)
            .then(res => {
                if (res.ok) return res.json()
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }
}