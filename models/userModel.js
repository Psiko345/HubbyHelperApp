const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    giftCollection: [{
        name: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String },
        price: Number,
        date: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User