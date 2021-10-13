const express = require('express');
const { newLink, getLinks, getLinkById, updateLinkById, deleteLinkById } = require('../handlers/LinkHandler.js');


const router = express.Router();
module.exports = function() {

	// add new Link on POST
	router.post('/link',
		newLink
	);

	router.get('/link',
		getLinks
	);

	router.get('/link/:id', getLinkById);

	router.put('/link/:id', updateLinkById );

	router.delete('/link/:id', deleteLinkById);

	return router;
};