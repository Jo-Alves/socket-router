const socket = io()
const $view = document.querySelector("#view")
const $bt1 = document.querySelector("#bt-1")
const $bt2 = document.querySelector("#bt-2")
const $p = document.querySelector("p")
let number = 0
$view.addEventListener("click", () => {
    axios.get("http://localhost:3000/user")
})

$bt1.addEventListener("click", () => {
    number = 1
    $p.innerHTML = number.toString()
})
$bt2.addEventListener("click", () => {
    number = 2
    $p.innerHTML = number.toString()
})

socket.on("message", data => {
    person = data.filter(({ id }) => id === number)
    console.log(person[0])
})