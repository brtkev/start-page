const express = require('express');
const {model} = require('../models/LinkSection.js');
const {model : linkModel} = require('../models/Link.js');

exports.addSection = async (req, res, next) => {
	try {
		const section =  new model(req.body);
		await section.save();
		res.json({
			message: "section saved sucessfully"
		});
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.getSections = async (req, res, next) => {
	try {
		const sections = await model.find({});
		res.json(sections);
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.getSectionById = async (req, res, next) => {
	try {
		const section = await model.find({
			_id: req.params.id
		});
		res.json(section);
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.deleteSection = async (req, res, next) => {
	try {
		const section = await model.findOneAndDelete({
			_id: req.params.id
		});
		res.json(section);
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.updateSection = async (req, res, next) => {
	try {
		const section = await model.findOneAndUpdate({
			_id: req.params.id
		}, req.body, {
			new: true
		});
		res.json(section);
	} catch (error) {
		console.log(error);
		next();
	}
}

exports.insertLink = async (req, res, next) => {
	const link = new linkModel(req.body);
	update = {
		$push: {links: link}
	}
	try {
		const section = await model.findOneAndUpdate({
			_id: req.params.id
		}, update, {
			new: true
		});
		res.json(section);
	} catch (error) {
		console.log(error);
		next();
	}
}