export default class Filter {
    constructor({handleFilterOn, handleFilterOff}) {
        this._input = document.querySelector('.filter__input')
        this._handleFilterOn = handleFilterOn
        this._handleFilterOff = handleFilterOff
    }

    _addListener() {
        this._input.addEventListener('input', (evt) => this._checkIssue(evt))
    }

    _checkIssue(evt) {
        this._inputText = evt.target.value
        if (this._inputText.length > 3) this._handleFilterOn(this._inputText.toLowerCase())
        if (this._inputText.length === 0) this._handleFilterOff()
    }

    switchOnFilter() {
        this._addListener()
    }


}