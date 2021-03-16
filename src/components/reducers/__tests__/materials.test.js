import reducer from 'reducers/materials';

describe('Materials reducer', () => {
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
});
