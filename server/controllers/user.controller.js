const UserService = require("../services/user.service")

class UserController {

    async registration(req, res, next) {


        try {
            const {email, password} = req.body
            const data = await UserService.registration(email, password)

            res.cookie("JWTRefreshToken", data.refreshToken, {httpOnly: true, maxAge: 30*24*60*60*1000})
            res.json(data)
        }catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body

        const data = await UserService.login(email, password)
        try {
            res.json(data)
        }catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await UserService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e)
        }
    }

    async allUsers(req, res, next) {
        try {
            const users = await UserService.getAllUsers()
            return res.json(users)
        }catch (e) {
            next(e)
        }
    }

}

module.exports = new UserController()