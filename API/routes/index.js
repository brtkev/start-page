const express = require('express');
const { newLink, getLinks, getLinkById, updateLinkById, deleteLinkById } = require('../handlers/LinkHandler.js');
const LinkSectionHandler = require('../handlers/LinkSectionHandler.js');


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

	//section
	router.post('/section', LinkSectionHandler.addSection);
	router.get('/section', LinkSectionHandler.getSections);
	router.get('/section/:id', LinkSectionHandler.getSectionById);
	router.put('/section/:id', LinkSectionHandler.updateSection);
	router.put('/section/insertLink/:id', LinkSectionHandler.insertLink);
	router.delete('/section/:id', LinkSectionHandler.deleteSection);


	return router;
};