import React from 'react';
import { render, screen } from 'test-utils';
import MaterialListItem from 'components/MaterialsList/MaterialListItem';

test('renders color of material', () => {
	const material = {
		id: '1',
		name: 'Gravel',
		color: 'gray',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-3-15'
	};

	render(<MaterialListItem materialId="1" />, { preloadedState: { materials: [material] } });

	const materialColorElement = screen.getByTestId('material-color');
	expect(materialColorElement).toHaveStyle('color: gray');
	expect(materialColorElement).toHaveClass('circle');
});

test('renders material name', () => {
	const material = {
		id: '1',
		name: 'Gravel',
		color: 'gray',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-3-15'
	};

	render(<MaterialListItem materialId="1" />, { preloadedState: { materials: [material] } });

	expect(screen.getByText(/Gravel/)).toBeVisible();
});

test('renders material volume amount', () => {
	const material = {
		id: '1',
		name: 'Gravel',
		color: 'gray',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-3-15'
	};

	render(<MaterialListItem materialId="1" />, { preloadedState: { materials: [material] } });

	expect(screen.getByText(/1000\sm3/)).toBeVisible();
});

test('material list item is selected and has dark blue background', () => {
	const id = '1';

	const material = {
		id,
		name: 'Gravel',
		color: 'gray',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-3-15'
	};

	render(<MaterialListItem materialId={id} />, {
		preloadedState: {
			currentMaterialId: id,
			materials: [material]
		}
	});

	expect(screen.getByRole('button')).toHaveStyle({
		backgroundColor: '#000042'
	});
});
