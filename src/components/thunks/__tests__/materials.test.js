import {
	addMaterialThunk, deleteMaterialThunk, modifyMaterialThunk, getMaterialsThunk
} from 'thunks/materials';
import materialsApi from 'materialsApi';
import store from 'cesiumMaterialsManager/store';

test('add material', () => {
	const payload = {
		name: 'material',
		color: 'black',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-03-14'
	};

	materialsApi.addMaterial = jest.fn().mockResolvedValueOnce({
		...payload,
		id: 'id'
	});

	return store.dispatch(addMaterialThunk(payload)).then(() => {
		expect(materialsApi.addMaterial).toBeCalledWith(payload);
		expect(materialsApi.addMaterial).toBeCalledTimes(1);

		expect(store.getState()).toEqual({
			materials: [
				{
					...payload,
					id: 'id'
				}
			]
		});
	});
});

test('delete material on server', () => {
	materialsApi.deleteMaterial = jest.fn();

	return store.dispatch(deleteMaterialThunk('id')).then(() => {
		expect(materialsApi.deleteMaterial).toHaveBeenCalledTimes(1);
		expect(materialsApi.deleteMaterial).toHaveBeenCalledWith('id');
	});
});

test('modify material on server', () => {
	const material = {
		name: 'material',
		color: 'black',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-03-14',
		id: 'id'
	};

	materialsApi.modifyMaterial = jest.fn();

	store.dispatch(modifyMaterialThunk(material)).then(() => {
		expect(materialsApi.modifyMaterial).toHaveBeenCalledWith(material);
	});
});

test('modify material on server', () => {
	const material = {
		name: 'material',
		color: 'black',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-03-14',
		id: 'id'
	};

	materialsApi.modifyMaterial = jest.fn();

	store.dispatch(modifyMaterialThunk(material)).then(() => {
		expect(materialsApi.modifyMaterial).toHaveBeenCalledWith(material);
	});
});

test('get all materials', () => {
	const materials = [
		{
			name: 'material',
			color: 'black',
			costPerCubicMeter: 0.25,
			volume: 1000,
			deliveryDate: '2021-03-14',
			id: 'id'
		},
		{
			name: 'material',
			color: 'black',
			costPerCubicMeter: 0.25,
			volume: 1000,
			deliveryDate: '2021-03-14',
			id: 'id'
		},
		{
			name: 'material',
			color: 'black',
			costPerCubicMeter: 0.25,
			volume: 1000,
			deliveryDate: '2021-03-14',
			id: 'id'
		}
	];

	materialsApi.getMaterials = jest.fn().mockResolvedValueOnce(materials);

	return store.dispatch(getMaterialsThunk()).then(() => {
		expect(materialsApi.getMaterials).toBeCalledTimes(1);
		expect(store.getState()).toEqual({
			materials
		});
	});
});
