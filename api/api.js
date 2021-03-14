const express = require('express');
const { v4: uuidv4 } = require('uuid');

const apiServer = express();
const port = 3000;
const basePath = '/materials'

const materials = [];

apiServer.get(basePath, (request, response) => {
	response.send(materials);
});

apiServer.post(basePath, (request, response) => {
	const newMaterial = {
		...request,
		id: uuidv4()
	}

	materials.push(newMaterial);

	response.status(201).send(newMaterial);
});

apiServer.listen(port, () => {
	console.log(`API Server is listening on port ${port}`);
})