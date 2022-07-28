
const password = document.querySelector("#password")
const icone = document.querySelector(".icone")
const iconeImage = document.querySelector(".icone img")

icone.addEventListener("click", showPassword)

function showPassword() {
    
    if(password.type === "password") {
        password.type = "text"
        iconeImage.src = "img/private.png"
    }
    else {
        password.type = "password"
        iconeImage.src = "img/view.png"
    }
    
}