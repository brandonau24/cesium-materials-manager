const express = require('express');
const { v4: uuidv4 } = require('uuid');

const apiServer = express();
apiServer.use(express.json());

const port = 3000;
const basePath = '/materials';

let materials = [];

apiServer.get(basePath, (request, response) => {
	response.json(materials);
});

apiServer.put(`${basePath}/:id`, (request, response) => {
	const materialId = request.params.id;
	const materialIndex = materials.findIndex((material) => material.id === materialId);

	if (materialIndex >= 0) {
		const materialToBeUpdated = materials[materialIndex];

		materials[materialIndex] = {
			...materialToBeUpdated,
			...request.body
		};

		response.sendStatus(204);
	} else {
		response.send(404, `Material with id ${materialId} was not found`);
	}
});

apiServer.post(basePath, (request, response) => {
	const newMaterial = {
		...request.body,
		id: uuidv4()
	};

	materials.push(newMaterial);

	response.status(201).json(newMaterial);
});

apiServer.delete(`${basePath}/:id`, (request, response) => {
	const materialToDelete = request.params.id;
	materials = materials.filter((material) => material.id !== materialToDelete);

	response.sendStatus(204);
});

apiServer.listen(port, () => {
	console.log(`API Server is listening on port ${port}`);
});
