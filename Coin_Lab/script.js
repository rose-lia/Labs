
const coinForm = document.getElementById("coin-form")


coinForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const coinCount = +document.getElementById("coin-count").value
    const coinType = document.getElementById("coin-type").value

    for (let i = 0; i < coinCount; i++) {
        const coin = document.createElement("div")
        coin.className = "coin"
        coin.classList.add(coinType)
        if (coinType == "penny") coin.innerText = "penny"
        if (coinType == "nickel") coin.innerText = "nickel"
        if (coinType == "dime") coin.innerText = "dime"
        if (coinType == "quarter") coin.innerText = "quarter"
        coin.onclick = () => coin.remove()
        document.body.appendChild(coin)
    }

    // create a div element
    // append the div element to the body
})