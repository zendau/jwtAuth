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

        try {
            const {email, password} = req.body

            const userData = await UserService.login(email, password)
            res.cookie('JWTRefreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json(userData)
        }catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {JWTRefreshToken} = req.cookies
            const userData = await UserService.refresh(JWTRefreshToken)
            res.cookie('JWTRefreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
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

    async logoutUser(req, res, next) {
        try {
            const {JWTRefreshToken} = req.cookies

            const resLogout = await UserService.logout(JWTRefreshToken)

            res.clearCookie("JWTRefreshToken")


            return res.json(resLogout)

        }catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const {userId, newEmail} = req.body
            await UserService.updateUserData(userId, newEmail)
            return res.send("OK")
        }catch (e) {
            next(e)
        }
    }

    async saveNewUserData(req, res, next) {
        try {
            const {userId, code,  newEmail, newPassword} = req.body
            const newUserData = await UserService.saveNewUserData(userId, code, newEmail, newPassword)
            res.cookie('JWTRefreshToken', newUserData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(newUserData)
        }catch (e) {
            next(e)
        }
    }

}

module.exports = new UserController()