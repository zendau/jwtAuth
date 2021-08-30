const Router = require('express').Router
const UserController = require('../controllers/user.controller')
const router = new Router()

const authMiddleware = require("../middlewares/auth.middleware")

router.post("/registration", UserController.registration)
router.post("/login", UserController.login)
router.get("/refresh", UserController.refresh)
router.get("/all", authMiddleware, UserController.allUsers)
router.get("/logout", UserController.logoutUser)

router.post("/update", UserController.update)
router.put("/saveNewData", UserController.saveNewUserData)



module.exports = router