const mongoose = require('../database');

const Schema = mongoose.Schema;

const googleMapsSchema = new Schema({
  formatted_address: { type:String },
  geometry: { type: Object },
  icon: { type: String },
  name: { type: String },
  photos: [{ type:Object }],
  place_id: { type: String}
});

module.exports = mongoose.model('GoogleMapsData', googleMapsSchema);