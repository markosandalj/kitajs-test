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

const streetNumApi = (houseNumber, city, street) =>
    `${domain}/geocodes/detailedcandidates?dataType=HouseNumber&searchValue=${houseNumber}&top=${5}&searchData.settlementId=${city}&searchData.streetId=${street}`

export default class Availability {
    constructor(element) {
        // form elements
        return
        this.availabilityForm = element.querySelector('form')
        this.availabilitySubmitButton = this.availabilityForm.querySelector('.js-submit-button')
        this.availabilityHiddenInputs = [...element.querySelectorAll('input')]
        this.hasRecaptcha = this.availabilitySubmitButton.classList.contains('js-has-recaptcha')

        this.LMIDEl = this.availabilityHiddenInputs.find((input) => input.dataset.fieldType === 'LMID')
        this.streetnumberEL = this.availabilityHiddenInputs.find((input) => input.dataset.fieldType === 'streetNumber')
        this.streetEL = this.availabilityHiddenInputs.find((input) => input.dataset.fieldType === 'street')
        this.cityEL = this.availabilityHiddenInputs.find((input) => input.dataset.fieldType === 'city')

        this.cityInput = this.availabilityForm.querySelector('.content-editable-mjesto')
        this.streetInput = this.availabilityForm.querySelector('.content-editable-street')
        this.numberInput = this.availabilityForm.querySelector('.content-editable-street-number')

        // endpoints
        this.availabilityFormActionCheckAvailabilityUrl = this.availabilityForm.dataset.actionCheckAvailabilityUrl
        this.streetNumberEndpoint = () =>
            streetNumApi(this.streetnumberEL.value, this.cityEL.dataset.id, this.streetEL.dataset.id)

        this.init()
    }

    init() {
        this.setupEvents()
    }

    // error handling

    isContentEditableEmpty(el) {
        return el.innerHTML.trim().length === 0
    }

    setContentEditableError(el) {
        el.classList.add('has-error')
        let error = el.parentNode.querySelector('.error-msg')
        if (!error) {
            error = document.createElement('div')
            error.classList.add('error-msg')
            error.innerHTML = el.dataset.errorMsg
            el.parentNode.appendChild(error)
        }
    }

    checkForErrors() {
        let hasErrors = false
            ;[...this.availabilityForm.querySelectorAll('[contenteditable][required]')].forEach((field) => {
                if (this.isContentEditableEmpty(field)) {
                    this.setContentEditableError(field)
                    hasErrors = true
                }
            })
        this.availabilityForm.classList[hasErrors ? 'add' : 'remove']('with-errors')
        return hasErrors
    }

    // events handling

    setupEvents() {
        this.availabilitySubmitButton.addEventListener('click', this.submitAvailability.bind(this))
    }

    async submitAvailability(element) {
        element.preventDefault()

        if (this.checkForErrors()) {
            return
        }

        const LMIDmissing = this.LMIDEl.value === ''

        if (LMIDmissing) {
            this.availabilitySubmitButton.classList.add('is-loading')

            await fetch(this.streetNumberEndpoint())
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(response)
                })
                .then((data) => {
                    if (data.length && data[0].value === this.streetnumberEL.value) {
                        this.LMIDEl.value = data[0].id
                    }
                })
        }
        const formData = [...this.availabilityHiddenInputs].map((input) => `${input.name}=${input.value}`).join('&')

        this.availabilitySubmitButton.classList.add('is-loading')

        fetch(this.availabilityFormActionCheckAvailabilityUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response)
            })
            .then((data) => {
                if (this.hasRecaptcha) {
                    grecaptcha.execute()
                } else {
                    this.availabilityForm.submit()
                }
            })
            .catch((error) => {
                console.warn(error)
            })
    }

    // helpers
    static createElementFromString(htmlString) {
        const tempContainer = document.createElement('div')
        tempContainer.innerHTML = htmlString.trim()
        return tempContainer.firstChild
    }
}
