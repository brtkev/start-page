const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const linkSchema = new Schema({
  name: {
  	type: String,
  	trim: true
  },
  url: {
  	type: String,
  	trim: true,
  }
});



module.exports = mongoose.model('Link', linkSchema);