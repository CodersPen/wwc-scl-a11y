const signUpForm3Alert = document.querySelector('#sign-up-form-3-alert')
const signUpForm3Submit = document.querySelector('#sign-up-form-3')

signUpForm3Submit.addEventListener('click', () => {
    signUpForm3Alert.innerHTML = 'Los campos de email, nombre y contraseña son obligatorios'
    signUpForm3Alert.focus()
})

const accordionButtons = document.querySelectorAll('#aria-examples-accordion li button')

accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener('click', (event) => {
        const allSpans = document.querySelectorAll('#aria-examples-accordion span.answer')
        const allButtons = document.querySelectorAll('#aria-examples-accordion button')
        const currentSpanId = event.currentTarget.getAttribute('aria-controls')
        const currentSpan = document.querySelector('#' + currentSpanId)
    
        allSpans.forEach((span) => {
            span.setAttribute('aria-hidden', 'true')
        })
    
        allButtons.forEach((button) => {
            button.setAttribute('aria-expanded', 'false')
        })

        event.currentTarget.setAttribute('aria-expanded', 'true')
        currentSpan.setAttribute('aria-hidden', 'false')
    })
})
