const spinner = document.querySelector('.spinner-wrapper')
const mainText = document.querySelector('.main-text')

window.addEventListener('load', function() {
    spinner.classList.add('hidden')
    spinner.addEventListener('transitionend', function() {
        document.body.removeChild(spinner)
    })
    mainText.classList.add('transform-back-x')
})