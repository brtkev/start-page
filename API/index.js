const express = require('express');
const mongoose = require('mongoose');
const { mongodb, port } = require('./config.js');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express()

mongoose.Promise = global.Promise
mongoose.connect(mongodb, {
	useNewUrlParser : true,
	useUnifiedTopology : true,
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());


app.listen( Number(port), () => {
	console.log(`running the server at ${port}`);
	// const googleLink = new Link({name : 'youtube', url: 'https://www.youtube.com/'})
	// let res = googleLink.save();
	// res.then(r => console.log(r))
	// .catch(e => console.log(e));
})