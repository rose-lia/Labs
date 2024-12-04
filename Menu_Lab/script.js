
const menuButton = document.getElementById("menu-btn")
const menuBox = document.getElementsByClassName("menu-box")[0]
menuButton.addEventListener('click', () => {
    menuBox.classList.toggle('visible')
})

const letterLink = document.getElementsByClassName("letter-link")[0]
const letters = document.getElementsByClassName("letters")[0]
letterLink.addEventListener('click', () => {
    letters.classList.toggle('visible')
    menuBox.classList.toggle('visible')
    numbers.style.display = 'none'
    letters.style.display = 'flex'
})

const numberLink = document.getElementsByClassName("number-link")[0]
const numbers = document.getElementsByClassName("numbers")[0]
numberLink.addEventListener('click', () => {
    numbers.classList.toggle('visible')
    menuBox.classList.toggle('visible')
    letters.style.display = 'none'
    numbers.style.display = 'flex'
})
