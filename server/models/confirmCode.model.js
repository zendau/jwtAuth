const {Schema, model} = require('mongoose');

const ConfirmCodeSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Users'},
    code: {type: String, required: true},
})

module.exports = model("ConfirmCode", ConfirmCodeSchema)