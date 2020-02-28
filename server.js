const express = require('express');
const accountRouter = require('./account-router');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountRouter);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;