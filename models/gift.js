const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: {},
  lowestBudget: String,
  highestBudget: String,
  selectedBudget: String,
  date: { type: Date, default: Date.now },
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});



const Gift = mongoose.model("Gift", giftSchema);

module.exports = Gift;

/*
create a way of linking users and gifts by using a user email and attaching it to a specfic gift when posted to their account

*/