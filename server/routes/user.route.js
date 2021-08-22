const Router = require('express').Router
const UserController = require('../controllers/user.controller')
const router = new Router()

const authMiddleware = require("../middlewares/auth.middleware")


router.post("/registration", UserController.registration)
router.post("/login", UserController.login)

router.get("/refresh", UserController.refresh)

router.get("/all", authMiddleware, UserController.allUsers)

router.get("/test", (req, res) => {
    console.log(req.headers)
    res.status(401).json({"ok":"test"})
})

module.exports = router