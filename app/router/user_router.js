const router = require("express").Router();

module.exports = io => {
    const User = require("../controller/user_controller")(io)

    router.get("/", User.find)
    return router
}