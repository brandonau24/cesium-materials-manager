import reducer from 'reducers/currentMaterialId';

test('changing current material id from initial state', () => {
	const newState = reducer(null, {
		type: 'currentMaterialId/change',
		payload: 'id'
	});

	expect(newState).toBe('id');
});

test('changing current material id from modified state', () => {
	const newState = reducer('id', {
		type: 'currentMaterialId/change',
		payload: 'new-id'
	});

	expect(newState).toBe('new-id');
});
