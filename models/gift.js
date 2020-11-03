const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftSchema = new Schema({
  name: { type: String, required: true },
  categoryType: { type: String, required: true },
  lowestBudget: String,
  HighestBudget: String,
});

const Gift = mongoose.model("Gift", giftSchema);

module.exports = Gift;
