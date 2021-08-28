const userModel = require("../models/user.model")
const ApiError = require("../exceprions/api.error");
const bcrypt = require("bcrypt")
const uuid = require("uuid")

const UserDto = require("../dtos/user.dto")
const TokenService = require("../services/token.service")

class UserService {

    async registration(email, password) {
        const candidate = await userModel.findOne({email})

        if (candidate) {
            throw ApiError.BadRequest("user is already registered")
        }

        const hashPass = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT))
        const activateLink = uuid.v4()

        const user = await userModel.create({
            email,
            password: hashPass,
            activationLink: activateLink

        })

        const userDto = new UserDto(user)

        const tokens = TokenService.generateTokens(userDto)
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, userDto}
    }

    async login(email, password) {
        const user = await userModel.findOne({email})

        if (!user) {
            throw ApiError.BadRequest("user is not found")
        }

        const passwordEquals = await bcrypt.compare(password, user.password)

        if (!passwordEquals) {
            throw ApiError.BadRequest("wrong password")
        }

        const userDto = new UserDto(user)

        const tokens = TokenService.generateTokens(userDto)
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, userDto}
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = TokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await TokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({...userDto});

        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        const users = await userModel.find();

        const userDto = users.map(user => new UserDto(user))

        return userDto;
    }

    async logout(token) {

        if (!token) {
            throw ApiError.UnauthorizedError();
        }

        const res = await TokenService.removeToken(token)

        if (res.ok !== 1) {
            throw ApiError.UnauthorizedError();
        }

        return res

    }

}

module.exports = new UserService()