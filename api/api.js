const express = require('express');
const apiServer = express();
const port = 3000;

apiServer.get('/', (request, response) => {
	response.send('hello world');
});

apiServer.listen(port, () => {
	console.log(`API Server is listening on port ${port}`);
})