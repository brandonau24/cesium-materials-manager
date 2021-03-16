import React from 'react';
import { render, screen } from 'test-utils';
import MaterialsList from 'components/MaterialsList/MaterialsList';

test('shows no data case when there are no materials', () => {
	render(<MaterialsList />, {
		preloadedState: {
			materials: []
		}
	});

	expect(screen.getByText(/No\smaterials/)).toContainHTML('<i>No materials</i>');
});

test('shows material list items when there are materials', () => {
	const preloadedState = {
		materials: [
			{
				id: '1',
				name: 'material',
				color: 'black',
				costPerCubicMeter: 0.25,
				volume: 1000,
				deliveryDate: '2021-03-14'
			},
			{
				id: '2',
				name: 'material',
				color: 'black',
				costPerCubicMeter: 0.25,
				volume: 1000,
				deliveryDate: '2021-03-14'
			},
			{
				id: '3',
				name: 'material',
				color: 'black',
				costPerCubicMeter: 0.25,
				volume: 1000,
				deliveryDate: '2021-03-14'
			}
		]
	};

	render(<MaterialsList />, { preloadedState });

	return screen.findAllByRole('button').then((materialListItems) => {
		expect(materialListItems.length).toBe(3);
	});
});
