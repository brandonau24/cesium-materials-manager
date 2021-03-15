import axios from 'axios';

const baseUrl = 'http://localhost:3000/materials';

const materialsApi = {
	addMaterial: (material) => {
		axios.post(baseUrl, material)
			.then((response) => response.data);
	},
	deleteMaterial: (materialId) => {
		axios.delete(`${baseUrl}/${materialId}`).then((response) => response);
	}
};

export default materialsApi;
