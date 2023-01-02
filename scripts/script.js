const spinner = document.querySelector('.spinner-wrapper')
const mainText = document.querySelector('.main-text')
const topText = document.querySelector('.top-text')
const descriptionText = document.querySelector('.description-text-wrapper')
const myTime = document.querySelector('.my-time')

window.addEventListener('load', function() {
    spinner.classList.add('hidden')
    spinner.addEventListener('transitionend', function() {
        document.body.removeChild(spinner)
    })
    mainText.classList.add('transform-back-x')
    topText.classList.add('transform-back-x')
    descriptionText.classList.add('transform-back-x')
    // Gets the current time in the Philippines
    var d = new Date() 
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
    var nd = new Date(utc + (3600000*8))
    var currentDatePhilippines = nd.toLocaleString()
    myTime.textContent = currentDatePhilippines
})

