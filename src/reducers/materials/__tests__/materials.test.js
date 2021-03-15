import store from 'cesiumMaterialsManager/store';
import materialsApi from 'materialsApi';
import reducer, { addMaterialThunk, deleteMaterialThunk } from 'reducers/materials'

describe('Materials reducer', () => {
	test('adding material', () => {
		const payload = {
			name: 'material',
			color: 'black',
			costPerCubicMeter: 0.25,
			volume: 1000,
			deliveryDate: '2021-03-14'
		};

		materialsApi.addMaterial = jest.fn().mockReturnValueOnce({
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

	test('delete material', () => {
		const initialState = [
			{
				name: 'material',
				color: 'black',
				costPerCubicMeter: 0.25,
				volume: 1000,
				deliveryDate: '2021-03-14',
				id: 'id'
			}
		];

		const action = {
			type: 'materials/delete',
			payload: 'id'
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual([]);
	});

	test('delete material on server', () => {
		materialsApi.deleteMaterial = jest.fn();

		return store.dispatch(deleteMaterialThunk('id')).then(() => {
			expect(materialsApi.deleteMaterial).toHaveBeenCalledTimes(1);
			expect(materialsApi.deleteMaterial).toHaveBeenCalledWith('id');
		});
	});

	test('modify material', () => {
		const material = {
			name: 'material',
			color: 'black',
			costPerCubicMeter: 0.25,
			volume: 1000,
			deliveryDate: '2021-03-14',
			id: 'id'
		};

		const modifiedMaterial = {
			...material,
			color: 'green',
			volume: 10000
		};

		const initialState = [material];

		const action = {
			type: 'materials/modify',
			payload: modifiedMaterial
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual([modifiedMaterial]);
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

		const modifiedMaterial = {
			...material,
			color: 'green',
			volume: 10000
		};

		const intial
	});
});
