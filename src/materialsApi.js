import axios from 'axios';

const baseUrl = 'http://localhost:3000/materials';

const materialsApi = {
	addMaterial: (material) => {
		axios.post(baseUrl, material)
			.then((response) => response.data);
	}
};

export default materialsApi;
