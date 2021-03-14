const express = require('express');
const apiServer = express();
const port = 3000;

const basePath = '/materials'

const materials = [];

apiServer.get(basePath, (request, response) => {
	response.send(materials);
});

apiServer.listen(port, () => {
	console.log(`API Server is listening on port ${port}`);
})