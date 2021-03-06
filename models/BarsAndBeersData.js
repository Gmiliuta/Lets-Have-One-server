const mongoose = require('../database');

const Schema = mongoose.Schema;

const beersSchema = new Schema({
  name: {type:String, required:true},
  house_beer_price: {type: Number},
  beers: [{type: String}],
  types: [{type: String}]
});

module.exports = mongoose.model('BarsAndBeersData', beersSchema);