// document.getElementById("demo").innerHTML="hello world"
/* document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("demo").innerHTML = "how are you"
    document.getElementById("demo").style.color = "blue"
    document.getElementById("demo").onclick = function () {
        alert("whats up")
    }
}) */
document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementsByClassName("btn1")
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
            this.innerHTML = "Download Started"
        })
    }
})