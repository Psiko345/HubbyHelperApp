const mongoose = require("mongoose");
const db = require("../models");
const dotenv = require("dotenv");

dotenv.config();

const mongoUrl = process.env.MONGODB_URI ||
    "mongodb://localhost/hubbyhelperapp";
console.log(mongoUrl);
mongoose.connect(mongoUrl);

const userSeed = [
    {
        username: "Test1",
        email: "test1@test.com",
        giftCollection: [
            {
                name: "Earrings",
                category: "Jewelry",
                price: 500,
            },
            {
                name: "Sneakers",
                category: "Shoes",
                price: 1000,
            },
            {
                name: "Ring",
                category: "Jewelry",
                price: 1000,
            }
        ]
    },
    {
        username: "Test2",
        email: "test2@test.com",
        giftCollection: []
    },
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });