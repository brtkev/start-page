const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	mongodb : process.env.MONGODB_CONNECTION,
	port : process.env.PORT,
	env: process.env.NODE_ENV
}

