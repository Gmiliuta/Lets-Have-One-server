const mongoose = require('../database');

const Schema = mongoose.Schema;

const barsAddedSchema = new Schema({
  name: {type:String, required:true},
  house_beer_price: {type: Number},
  beers: [{type: String}],
  types: [{type: String}]
});

module.exports = mongoose.model('BarsDataAddedByCust', barsAddedSchema);