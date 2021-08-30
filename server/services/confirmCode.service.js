const confirmCodeModel = require("../models/confirmCode.model")
const uuid = require("uuid")


class ConfirmCodeService {

    async createCode(userId) {
        const confirmCode = uuid.v4()

        const codeData = await confirmCodeModel.findOne({user: userId})

        if (codeData) {
            codeData.code = confirmCode
            return await codeData.save()
        }


        const code = await confirmCodeModel.create({
            user: userId,
            code: confirmCode
        })

        return code

    }

    async deleteCode(code) {
        const codeData = await confirmCodeModel.deleteOne({code})
        return codeData;
    }

    async checkCode(code) {
        const codeData = await confirmCodeModel.findOne({code})

        return !!codeData;
    }
}

module.exports = new ConfirmCodeService()