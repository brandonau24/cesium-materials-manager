import axios from 'axios';

const baseUrl = 'http://localhost:3000/materials';

const materialsApi = {
	addMaterial: (material) => {
		axios.post(baseUrl, material)
			.then((response) => response.data);
	},
	deleteMaterial: (materialId) => {
		axios.delete(`${baseUrl}/${materialId}`).then((response) => response);
	},
	modifyMaterial: (material) => {
		axios.put(`${baseUrl}/${material.id}`).then((response) => response);
	},
	getMaterials: () => {
		axios.get(baseUrl).then((response) => response.data);
	}
};

export default materialsApi;
