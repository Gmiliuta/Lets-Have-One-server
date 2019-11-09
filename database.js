require("dotenv").config();


const mongoose = require('mongoose');

mongoose.connect(process.env.MONDGODB, {
  useNewUrlParser:true,
  useUnifiedTopology: true
}, () => {
  console.log('Mongoose server is running');
})

module.exports = mongoose;