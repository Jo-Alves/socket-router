let data = [{
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

// 3º teste com classe. Mais acertivo

module.exports = io => {
    class Person {
        save(req, res) {
            data.push(req.body)
            io.emit("msg", { msg: "Dado salvo com sucesso." })
            res.status(201).send({})
        }

        find(req, res) {
            io.emit("message", data)
            res.send({})
        }

        delete(req, res) {
            data = data.filter(({ id }) => id !== parseInt(req.params.id))
            io.emit("msg", { msg: "Dado excluido com sucesso." })
            res.status(204).send({})
        }
    }

    return new Person()
}

// 2º teste com class
// class Person {
//     constructor(io) {
//         this._io = io
//     }

//     save = (req, res) => {
//         data.push(req.body)
//         this._io.emit("msg", { msg: "Novos dados inserido com sucesso" })
//         res.status(201).send({})
//     }

//     find = (req, res) => {
//         this._io.emit("message", data)
//         res.send({})
//     }

//     delete = (req, res) => {
//         data = data.filter(({ id }) => id !== parseInt(req.params.id))
//         this._io.emit("msg", { msg: "Dado excluido com sucesso." })
//         res.status(204).send({})
//     }
// }

// module.exports = (io) => {
//     return new Person(io)
// }

// 1º Teste

// module.exports = io => {
//     return {
//         find: (req, res) => {
//             io.emit("message", data)
//             res.json(data)
//         },
//         save: (req, res) => {
//             data.push(req.body)
//             io.emit("msg", { msg: "Novos dados inserido com sucesso" })
//             res.status(201).send({})
//         },
//         delete: (req, res) => {
//             data = data.filter(({ id }) => id !== parseInt(req.params.id))
//             io.emit("msg", { msg: "Dado excluido com sucesso." })
//             res.status(204).send({})
//         }
//     }
// }