const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    giftCollection: [{ type: Schema.Types.ObjectId, ref: 'Gift' }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User