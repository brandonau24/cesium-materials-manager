import React from 'react';
import { render, screen } from 'test-utils';
import CesiumMaterialsManager from '../CesiumMaterialsManager';

test('renders Materials header', () => {
	render(<CesiumMaterialsManager />, { preloadedState: { materials: [] } });

	const materialsHeader = screen.getByRole('heading', { level: 2 });

	expect(materialsHeader).toHaveTextContent('Materials');
});

test('display a cost of 0 when there are no materials', () => {
	render(<CesiumMaterialsManager />, { preloadedState: { materials: [] } });

	expect(screen.getByText(/Total\sCost:\s\$0\.00/)).toBeVisible();
});

test('displays total cost of materials', () => {
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

	render(<CesiumMaterialsManager />, { preloadedState });

	expect(screen.getByText(/\$750\.00/)).toBeVisible();
});
