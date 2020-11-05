const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hubbyhelperapp"
);

const giftSeed = [
    {
        name: "Necklace",
        category: "jewelry",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "Earrings",
        category: "jewelry",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "Ring",
        category: "jewelry",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    //Flowers
    {
        name: "Bunch",
        category: "flowers",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "Single",
        category: "flowers",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra"
    },
    //Getaways
    {
        name: "A Day Trip",
        category: "getaways",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "A Weekend Retreat",
        category: "getaways",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "A Weeks Getaway",
        category: "getaways",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    //Consumables
    {
        name: "Make Up",
        category: "consumables",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "Perfume",
        category: "consumables",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "Food/Drink",
        category: "consumables",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    //Clothes
    {
        name: "Tops",
        category: "clothes",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "Bottoms",
        category: "clothes",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "Dress",
        category: "clothes",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    //Shoes
    {
        name: "Sneakers",
        category: "shoes",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "High-heels",
        category: "shoes",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
    {
        name: "Dress Shoes",
        category: "shoes",
        lowestBudget: "budgetLow",
        highestBudget: "budgetUltra",
        date: 
    },
];

db.Gift
    .remove({})
    .then(() => db.Gift.collection.insertMany(giftSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });