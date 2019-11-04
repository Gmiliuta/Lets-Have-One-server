const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Gmiliuta:LpSSvnbXy7RXeFd@letshaveonecluster-x30gt.mongodb.net/Lets_Have_One_DB?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology: true
}, () => {
  console.log('Mongoose server is running');
})

module.exports = mongoose;