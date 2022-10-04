const socket = io()
const $viewBtn = document.querySelector("#view")
const $saveBtn = document.querySelector("#save")
const $deleteBtn = document.querySelector("#delete")
const $id = document.querySelector("#id")
const $bt0 = document.querySelector("#bt-0")
const $bt1 = document.querySelector("#bt-1")
const $bt2 = document.querySelector("#bt-2")
const $p = document.querySelector("p")
const url = "http://localhost:3000"
$p.innerHTML = 0

let number = 0

$viewBtn.addEventListener("click", async () => {
    await axios.get(`${url}/user`)
})

$bt0.addEventListener("click", () => {
    number = 0
    $p.innerHTML = number.toString()
})
$bt1.addEventListener("click", () => {
    number = 1
    $p.innerHTML = number.toString()
})
$bt2.addEventListener("click", () => {
    number = 2
    $p.innerHTML = number.toString()
})

$saveBtn.addEventListener("click", async () => {
    await axios.post(`${url}/user`, {
        id: 3,
        name: "Maria Lídia",
        username: "ML1000",
        email: "marialidia@gmail.com",
        role: "admin"
    })
})

$deleteBtn.addEventListener("click", async () => {
    if (!$id.value)
        return alert("Informe o id!")

    $id.focus()
    await axios.delete(`${url}/user/${$id.value}`)
})

socket.on("message", data => {
    if (number === 0)
        return console.log(data)

    person = data.find(({ id }) => id === number)
    console.log(person)
})

socket.on("msg", data => {
    console.log(data)
})