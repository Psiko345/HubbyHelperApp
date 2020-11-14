// const mongoose = require("mongoose");
// const db = require("../models");

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/hubbyhelperapp"
// );

// const giftSeed = [
//     {
//         name: "Necklace",
//         category: "jewelry",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "Earrings",
//         category: "jewelry",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "Ring",
//         category: "jewelry",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     //Flowers
//     {
//         name: "Bunch",
//         category: "flowers",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "Single",
//         category: "flowers",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra"
//     },
//     //Getaways
//     {
//         name: "A Day Trip",
//         category: "getaways",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "A Weekend Retreat",
//         category: "getaways",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "A Weeks Getaway",
//         category: "getaways",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     //Consumables
//     {
//         name: "Make Up",
//         category: "consumables",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "Perfume",
//         category: "consumables",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "Food/Drink",
//         category: "consumables",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     //Clothes
//     {
//         name: "Tops",
//         category: "clothes",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "Bottoms",
//         category: "clothes",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "Dress",
//         category: "clothes",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     //Shoes
//     {
//         name: "Sneakers",
//         category: "shoes",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "High-heels",
//         category: "shoes",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
//     {
//         name: "Dress Shoes",
//         category: "shoes",
//         lowestBudget: "budgetLow",
//         highestBudget: "budgetUltra",
//     },
// ];

// db.Gift
//     .remove({})
//     .then(() => db.Gift.collection.insertMany(giftSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });


