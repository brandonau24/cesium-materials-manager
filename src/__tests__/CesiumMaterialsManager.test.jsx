import React from 'react';
// import userEvent from '@testing-library/user-event';
import { render, screen } from 'test-utils';
import materialsApi from 'materialsApi';
import CesiumMaterialsManager from '../CesiumMaterialsManager';

const materials = [
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
];

beforeEach(() => {
	materialsApi.getMaterials = jest.fn().mockResolvedValueOnce(materials);
});

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
	const preloadedState = { materials };

	render(<CesiumMaterialsManager />, { preloadedState });

	expect(screen.getByText(/\$750\.00/)).toBeVisible();
});

test('gets all materials when component renders', () => {
	render(<CesiumMaterialsManager />);

	return screen.findAllByTestId('material-list-item').then((buttons) => {
		expect(buttons.length).toBe(3);
	});
});

// test('add material', () => {
// 	render(<CesiumMaterialsManager />);

// 	materialsApi.getMaterials = jest.fn().mockResolvedValueOnce([]);
// 	materialsApi.addMaterial = jest.fn().mockResolvedValueOnce({
// 		id: '1',
// 		name: '',
// 		color: 'black',
// 		costPerCubicMeter: 0,
// 		volume: 0,
// 		deliveryDate: '2021-03-14'
// 	});

// 	userEvent.click(screen.getByText(/Add/));

// 	const materialListItem = screen.getByTestId('material-list-item');
// 	expect(materialListItem.length).toBe(1);
// 	expect(materialListItem).toBeVisible();
// });
