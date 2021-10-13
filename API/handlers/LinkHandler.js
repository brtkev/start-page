const {model} = require('../models/Link.js');
//new link

exports.newLink = async (req, res, next) => {
	const link = new model(req.body);

	try {
		await link.save();
		res.json({
			message: 'link added successfully'
		});
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.getLinks = async (req, res, next) => {

	try {
		const links = await model.find({})
		res.json(links);
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.getLinkById = async (req, res, next) => {
	try {
		const link = await model.findById(req.params.id);
		res.json(link);
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.updateLinkById = async (req, res, next) => {
	try {
		const link = await model.findOneAndUpdate({
			_id: req.params.id
		}, req.body, {
			new: true
		});
		res.json(link);
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.deleteLinkById = async (req, res, next) => {
	try {
		const link = await model.findOneAndDelete({
			_id: req.params.id
		});
		res.json(link);
	} catch (error) {
		console.log(error);
		next()
	}
}