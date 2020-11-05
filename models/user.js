let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    giftCollection: []
}, { timestamps: true });

mongoose.model('User', UserSchema);