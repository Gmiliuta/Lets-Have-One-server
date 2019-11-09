const mongoose = require('../database');

const Schema = mongoose.Schema;

const beersDetailsSchema = new Schema({
  description: { type: String },
    image: { type: String },
    name: { type: String },
    str: { type: String },
    style: { type: String },
    brewedBy: { type: String },
    rating: { type: String }
});

module.exports = mongoose.model('DetailedBeerData', beersDetailsSchema);