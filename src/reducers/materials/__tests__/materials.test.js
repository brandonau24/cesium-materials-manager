import store from 'cesiumMaterialsManager/store';
import materialsApi from 'materialsApi';
import reducer, { addMaterialThunk } from 'reducers/materials'

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
});
