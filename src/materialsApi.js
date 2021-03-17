import axios from 'axios';

const baseUrl = 'http://localhost:3000/materials';

const materialsApi = {
	addMaterial: (material) => axios.post(baseUrl, material).then((response) => response.data),
	deleteMaterial: (materialId) => axios.delete(`${baseUrl}/${materialId}`).then(() => materialId),
	modifyMaterial: (material) => axios.put(`${baseUrl}/${material.id}`, material).then((response) => response),
	getMaterials: () => axios.get(baseUrl).then((response) => response.data)
};

export default materialsApi;
