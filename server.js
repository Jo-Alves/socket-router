const path = require("path")
const express = require("express")
const http = require("http")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on("connection", socket => {
    console.log("conectado")
    // socket.on("message", message => {
    //     console.log(message)
    // })
})

const userRouter = require("./app/router/user_router")(io)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "/app/view/")))
app.use("/user", userRouter)

const port = 3000

server.listen(port, () => {
    console.log("Open Server")
})