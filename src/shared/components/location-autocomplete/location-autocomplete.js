const mapDomainFromCurrUrl = () => {
    if (window.location.href.indexOf('//www.a1.hr') !== -1 || window.location.href.indexOf('//edwww.a1.hr') !== -1) {
        return 'https://secure.a1.hr'
    }
    if (
        window.location.href.indexOf('localhost') !== -1 ||
        window.location.href.indexOf('//a1-homebox-hr') !== -1 ||
        window.location.href.indexOf('//homebox.dev4.netgen.biz') !== -1
    ) {
        return 'https://secure-a1.test3.netgen.biz'
    }
    return 'https://secure-test.a1.hr'
}

const domain = mapDomainFromCurrUrl()

export default class LocationAutocomplete {
    constructor(element) {
        // elements
        this.locationAutocompleteWrapper = element
        this.locationAutocompleteForm = element.closest('form')
        this.locationAutocompleteInputs = element.querySelectorAll('input')
        this.locationAutocompleteInputFields = element.querySelectorAll('.js-form-input')
        this.availabiltyStep2 = this.locationAutocompleteWrapper.querySelector('.location-autocomplete-step-2')
        this.cityInput = this.locationAutocompleteWrapper.querySelector('.content-editable-mjesto')
        this.streetInput = this.locationAutocompleteWrapper.querySelector('.content-editable-street')
        this.numberInput = this.locationAutocompleteWrapper.querySelector('.content-editable-street-number')
        this.labels = this.locationAutocompleteWrapper.querySelectorAll('label')

        this.submitButton = this.locationAutocompleteForm.querySelector('.js-submit-button')

        this.apiCallRange = 5
        this.debounceTime = 350

        // keycodes
        this.enterKeyCode = 13
        this.downArrowKeyCode = 40
        this.upArrowKeyCode = 38
        this.escapeKeyCode = 27

        // state helpers
        this.hiddenInputMap = {}
        this.fieldMap = {}

        this.init()
    }

    init() {
        this.createSuggestionBoxes()
        this.setupEvents()
        this.setupHiddenInputMap()
        this.setupFieldMap()
        this.setupInputDataAttributtes()
        this.handleStepInitialState()
        this.handlePrefilledFields()
        this.setupClearFieldListeners()
    }

    handleStepInitialState() {
        if (this.cityInput.innerHTML.trim().length > 0) {
            this.setShowStep2(true)
        }
    }

    setupHiddenInputMap() {
        Array.from(this.locationAutocompleteInputs).forEach((input) => {
            const key = input.dataset.fieldType ? input.dataset.fieldType.toLowerCase() : input.name
            this.hiddenInputMap[key] = input
        })
    }

    setupFieldMap() {
        const cityApiUrl = (city) =>
            `${domain}/geocodes/detailedcandidates?dataType=Settlement&searchValue=${city}&top=${this.apiCallRange}`

        const streetApiUrl = (street, city, zipcode) =>
            `${domain}/geocodes/detailedcandidates?dataType=Street&searchValue=${street}&top=${this.apiCallRange}&settlementValue=${city}&zipCodeValue=${zipcode}`

        const streetNumApi = (houseNumber, city, street) =>
            `${domain}/geocodes/detailedcandidates?dataType=HouseNumber&searchValue=${houseNumber}&top=${this.apiCallRange}&searchData.settlementId=${city}&searchData.streetId=${street}`

        this.fieldMap = [
            {
                input: this.cityInput,
                clearButton: this.cityInput.closest('.field')?.querySelector('.js-clear-input'),
                type: 'city',
                endpoint: () => cityApiUrl(this.cityInput.innerHTML.trim()),
            },
            {
                input: this.streetInput,
                clearButton: this.streetInput.closest('.field')?.querySelector('.js-clear-input'),
                type: 'street',
                endpoint: () =>
                    streetApiUrl(
                        this.streetInput.innerHTML.trim(),
                        this.hiddenInputMap.city.value,
                        this.hiddenInputMap.postalcode.value
                    ),
            },
            {
                input: this.numberInput,
                clearButton: this.numberInput.closest('.field')?.querySelector('.js-clear-input'),
                type: 'streetnumber',
                endpoint: () =>
                    streetNumApi(
                        this.numberInput.innerHTML.trim(),
                        this.hiddenInputMap.city.getAttribute('data-id'),
                        this.hiddenInputMap.street.getAttribute('data-id')
                    ),
            },
        ]
    }

    setupInputDataAttributtes() {
        this.fieldMap.forEach(({ input, type }) => input.setAttribute('data-type', type))
    }

    handlePrefilledFields() {
        setTimeout(() => {
            const { city, street, streetnumber } = this.hiddenInputMap
            if (city.value) {
                this.cityInput.innerHTML = city.value
                this.setShowStep2(true)
            }
            if (street.value) {
                this.streetInput.innerHTML = street.value
            }
            if (streetnumber.value) {
                this.numberInput.innerHTML = streetnumber.value
            }
        }, 100)
    }

    // UI state

    setShowStep2(bool = true) {
        this.availabiltyStep2.classList.toggle('d-none', !bool)

        if (!bool) {
            ;[this.streetInput, this.numberInput].forEach((input) => {
                this.clearInput(input)
            })
        }
    }

    // suggestions

    createSuggestionBoxes() {
        ;[this.streetInput, this.cityInput, this.numberInput].forEach((input) => {
            const inputParent = input?.parentNode

            inputParent.classList.add('has-suggestions')
            inputParent.appendChild(
                LocationAutocomplete.createElementFromString(
                    `<ul class="suggestions-wrapper hidden" tabindex="0"></ul>`
                )
            )
        })
    }

    createSuggestion(suggestionsWrapper, suggestion) {
        const { value, details, id } = suggestion
        const { zipCode, street, country, settlement, houseNumber, location } = details

        const input = suggestionsWrapper.closest('.field').querySelector('.content-editable')
        const isStreet = input.dataset.type === 'street'
        const isSettlement = input.dataset.type === 'city'

        let label = value

        if (isStreet) {
            label = `${street.value}, ${settlement.value}`
        }

        if (isSettlement) {
            label = `${settlement.value} <small style="color:#888; pointer-events: none;">(${zipCode.value})</small>`
        }

        const suggestionElement = LocationAutocomplete.createElementFromString(
            `<li
                class="suggestion"
                data-id="${id}"
                data-type="${this.getSuggestionType(suggestion)}"
                data-postalcode="${zipCode.value}--${zipCode.id}"
                data-country="${country.value}--${country.id}"
                data-city="${settlement.value}--${settlement.id}"
                ${street?.value ? `data-street="${encodeURI(street.value)}--${street.id}"` : ''}
                ${houseNumber?.value ? `data-streetnumber="${houseNumber.value}"` : ''}
                ${houseNumber?.id ? `data-lmid="${location.id}"` : ''}
                data-value="${encodeURI(value)}"
                tabindex="0">
                    ${label}
            </li>`
        )

        suggestionElement.addEventListener('mousedown', (e) => this.selectSuggestion(input, e.target))
        suggestionsWrapper.appendChild(suggestionElement)
    }

    getSuggestionElements(input) {
        const suggestionsWrapper = input.parentNode.querySelector('.suggestions-wrapper')
        const suggestions = suggestionsWrapper?.querySelectorAll('.suggestion')
        const focusedSuggestion =
            suggestions && Array.from(suggestions).find((suggestion) => suggestion.classList.contains('focused'))

        return {
            suggestionsWrapper,
            suggestions,
            focusedSuggestion,
        }
    }

    setShowSuggestions(input, shouldShow = true) {
        const { suggestionsWrapper } = this.getSuggestionElements(input)
        suggestionsWrapper.classList.toggle('hidden', !shouldShow)
    }

    loadSuggestions(input, suggestions) {
        const { suggestionsWrapper } = this.getSuggestionElements(input)
        this.clearSuggestions(input)
        this.setShowSuggestions(input)

        if (suggestions.length === 0) {
            const suggestionItem = LocationAutocomplete.createElementFromString(
                `<li class="suggestion">Za traženi pojam nema rezultata</li>`
            )
            suggestionsWrapper.appendChild(suggestionItem)
        } else {
            suggestions.forEach((suggestion) => {
                this.createSuggestion(suggestionsWrapper, suggestion)
            })
        }
    }

    clearSuggestions(input) {
        const { suggestionsWrapper, suggestions } = this.getSuggestionElements(input)
        suggestions.forEach((suggestion) => suggestionsWrapper.removeChild(suggestion))
    }

    highlightNextSuggestion(input, direction) {
        const { suggestionsWrapper, focusedSuggestion } = this.getSuggestionElements(input)
        let nextSuggestion
        if (focusedSuggestion) {
            focusedSuggestion.classList.remove('focused')
            nextSuggestion = focusedSuggestion[direction === this.downArrowKeyCode ? 'nextSibling' : 'previousSibling']
            if (!nextSuggestion) {
                nextSuggestion = suggestionsWrapper[direction === this.downArrowKeyCode ? 'firstChild' : 'lastChild']
            }
        } else if (suggestionsWrapper.firstChild) {
            nextSuggestion = suggestionsWrapper.firstChild
        }
        nextSuggestion.classList.add('focused')
    }

    selectSuggestion(input, suggestionElement) {
        this.setShowSuggestions(input, false)
        if (!suggestionElement.dataset.value) return

        input.innerHTML = decodeURI(suggestionElement.dataset.value)
        this.updateHiddenFields(suggestionElement.dataset)

        if (this.suggestionIsOfType(suggestionElement, 'city')) {
            this.setShowStep2()
        }

        this.focusNextInput(input)
    }

    getSuggestionType(suggestion) {
        if (this.suggestionIsOfType(suggestion, 'street')) {
            return 'street'
        }
        if (this.suggestionIsOfType(suggestion, 'city') || this.suggestionIsOfType(suggestion, 'settlement')) {
            return 'city'
        }
        return 'streetnumber'
    }

    suggestionIsOfType(suggestion, type) {
        if (suggestion.dataset) {
            return suggestion.dataset.type === type
        }
        const { value, details } = suggestion
        return details[type] && details[type].value === value
    }
    // error handling

    updateFormErrorStatus() {
        if (this.locationAutocompleteForm) {
            this.locationAutocompleteForm.classList[
                this.locationAutocompleteForm.querySelectorAll('.has-error').length > 0 ? 'add' : 'remove'
            ]('with-errors')
        }

        if (this.cityInput.closest('.field').querySelectorAll('.error-msg').length > 0) {
            this.setShowStep2(false)
        }
    }

    // event handlers

    setupEvents() {
        ;[this.cityInput, this.streetInput, this.numberInput].forEach((input) => {
            input.addEventListener('keydown', (e) => this.handleKeyDown(e))
            input.addEventListener('keyup', (e) => this.handleKeyUp(e))
            input.addEventListener('focus', (e) => this.handleFocus(e))
            input.addEventListener('blur', (e) => this.handleBlur(e))
            input.addEventListener('input', (e) => this.handleChange(e))
        })
        this.labels.forEach((label) => {
            label.addEventListener('click', (e) => this.handleLabelClick(e))
        })
    }

    setupClearFieldListeners() {
        ;[this.cityInput, this.streetInput, this.numberInput].forEach((input) => {
            const { clearButton } = this.fieldMap.filter((field) => field.input === input)[0]
            if (clearButton)
                clearButton.addEventListener('click', (e) => {
                    this.clearInput(input)
                    if (input.dataset.type === 'city') {
                        this.setShowStep2(false)
                    }
                })
        })
    }

    clearInput(input) {
        input.innerHTML = ''
        this.hiddenInputMap[input.dataset.type].value = ''
        this.hiddenInputMap[input.dataset.type].removeAttribute('data-id')

        const { clearButton } = this.fieldMap.filter((field) => field.input === input)[0]

        if (clearButton) clearButton.classList.add('d-none')
    }

    handleLabelClick(e) {
        e.target.parentElement.querySelector('[contenteditable]').focus()
    }

    handleChange(e) {
        if (this.submitButton) {
            this.submitButton.disabled = [this.cityInput, this.streetInput, this.numberInput].some(
                (input) => input.innerText.trim().length <= 0
            )
        }

        if (this.getSuggestionType(e.target) === 'city') {
            this.setShowStep2(false)
        }

        const { clearButton } = this.fieldMap.filter((field) => field.input === e.target)[0]

        if (e.target.innerText.trim().length <= 0) {
            if (clearButton) clearButton.classList.add('d-none')
        } else if (clearButton) clearButton.classList.remove('d-none')
    }

    handleKeyUp(e) {
        if (e.key === 'Esc' || e.key === 'Escape') {
            e.preventDefault()
            this.setShowSuggestions(e.target, false)
        } else if (e.key === 'Down' || e.key === 'ArrowDown') {
            e.preventDefault()
            this.highlightNextSuggestion(e.target, this.downArrowKeyCode)
        } else if (e.key === 'UP' || e.key === 'ArrowUp') {
            e.preventDefault()
            this.highlightNextSuggestion(e.target, this.upArrowKeyCode)
        } else if (e.key === 'Enter') {
            e.preventDefault()
            const { focusedSuggestion, suggestions } = this.getSuggestionElements(e.target)
            if (suggestions.length) {
                this.selectSuggestion(e.target, focusedSuggestion == null ? suggestions[0] : focusedSuggestion)
            }
            this.focusNextInput(e.target)
        } else if (e.key !== 'Tab') {
            if (this.getSuggestionType(e.target) === 'city') {
                this.hiddenInputMap.postalcode.value = ''
            }
            this.hiddenInputMap[this.getSuggestionType(e.target)].value = e.target.innerText.trim()
            this.debounce(() => this.inputHandler(e), this.debounceTime, this.getSuggestionType(e.target))
        }
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
        } else if (e.key === 'Tab') {
            const { suggestionsWrapper } = this.getSuggestionElements(e.target)
            if (!suggestionsWrapper.classList.contains('hidden')) {
                e.preventDefault()
                this.highlightNextSuggestion(e.target, this.downArrowKeyCode)
            }
        } else if (e.shiftKey && e.key === 'Tab') {
            e.preventDefault()
            this.highlightNextSuggestion(e.target, this.upArrowKeyCode)
        }
    }

    handleFocus(e) {
        if (e.target.innerText.trim() !== '') {
            this.setShowSuggestions(e.target)
            this.inputHandler(e)
        }
    }

    handleBlur(e) {
        this.setShowSuggestions(e.target, false)
        const queryLength = e.target.innerText.trim().length

        if (queryLength > 1) {
            if (this.suggestionIsOfType(e.target, 'city')) {
                this.setShowStep2()
            }
        }

        const { suggestions } = this.getSuggestionElements(e.target)

        if (
            suggestions.length &&
            suggestions[0].innerHTML.trim().toLowerCase() === e.target.innerHTML.trim().toLowerCase()
        ) {
            this.selectSuggestion(e.target, suggestions[0])
        }
        this.updateFormErrorStatus()
    }

    inputHandler(event) {
        const inputElement = event.target
        const inputValue = inputElement.innerText.trim()
        const { endpoint } = this.fieldMap.filter((field) => field.input === inputElement)[0]
        if (inputValue !== '') {
            this.getData(endpoint()).then((result) => {
                if (typeof result !== 'undefined' && inputElement === document.activeElement) {
                    this.loadSuggestions(inputElement, result)
                }
            })
        } else {
            this.clearSuggestions(inputElement)
            this.setShowSuggestions(inputElement, false)
        }
    }

    // helpers

    debounceTimeouts = {}

    debounce(func, wait, key) {
        clearTimeout(this.debounceTimeouts[key])
        this.debounceTimeouts[key] = setTimeout(func, wait)
    }

    getData(apiUrl) {
        return fetch(apiUrl).then((response) =>
            response
                .json()
                .then((data) => data)
                .catch((err) => {
                    console.error('Oops!', err)
                })
        )
    }

    focusNextInput(currentInput) {
        const currIndex = Array.from(this.locationAutocompleteInputFields).indexOf(currentInput)
        const nextInput = this.locationAutocompleteInputFields[currIndex + 1]

        if (nextInput) {
            setTimeout(() => {
                nextInput.focus()
            }, 1);
        }
    }

    updateHiddenFields(dataset) {
        const sanitizedDataset = Object.entries(dataset).map(([key, value]) => [key, value.split(',')[0]])

        sanitizedDataset.forEach(([key, value]) => {
            if (this.hiddenInputMap[key]) {
                const [stringValue, idValue] = value.split('--')
                this.hiddenInputMap[key].value = decodeURI(stringValue)
                this.hiddenInputMap[key].setAttribute('data-id', idValue)
            }
        })
    }

    static createElementFromString(htmlString) {
        const tempContainer = document.createElement('div')
        tempContainer.innerHTML = htmlString.trim()
        return tempContainer.firstChild
    }
}
