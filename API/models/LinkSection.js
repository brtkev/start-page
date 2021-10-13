const mongoose = require('mongoose');
const { schema } = require('./Link.js');
const Schema = mongoose.Schema;
const sectionSchema = new Schema({
	name: {type: String,trim: true},
	links:[schema]
});

module.exports = {
	schema : sectionSchema,
	model : mongoose.model('LinkSection', sectionSchema)
} 