
const main = () => {
    const growMeEl = document.getElementById("grow-me")
    growMeEl.classList.add("big")
    const shrinkMeEl = document.getElementById("shrink-me")
    shrinkMeEl.classList.remove("big")
    const listItems = document.querySelectorAll("li")
    listItems.forEach(liElement => console.log(liElement.innerText))
    const linkEl = document.getElementsByClassName("link")[0]
    linkEl.setAttribute("href", "https://www.example.com")
    linkEl.innerText = "somewhere"
    const hideMeEl = document.getElementById("hide-me")
    hideMeEl.style.display = "none"
    const showMeEl = document.getElementById("show-me")
    showMeEl.style.display = "block"
    const nameInput = document.getElementById("name")
    const welcomeEl = document.getElementsByTagName("h1")[0]
    console.log(welcomeEl)
    const name = nameInput.value
    console.log(name)
    welcomeEl.innerText = `Welcome ${name}`
}
