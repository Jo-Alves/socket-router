module.exports = io => {
    return {
        find: (req, res) => {
            data = [{
                id: 1,
                name: "Valdirene Aparecida Ferreira",
                username: "val100",
                email: "valdireneaparecida@gmail.com",
                role: "admin"
            },
            {
                id: 2,
                name: "Joelmir Rogério Carvalho",
                username: "Jo1000",
                email: "joelmirrogerio@gmail.com",
                role: "admin"
            }]

            io.emit("message", data)
            res.json(data)
        }
    }
}