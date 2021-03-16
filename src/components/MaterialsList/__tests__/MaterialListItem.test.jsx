import React from 'react';
import { render, screen } from '@testing-library/react';
import MaterialListItem from 'components/MaterialsList/MaterialListItem';

test('renders color of material', () => {
	const material = {
		name: 'Gravel',
		color: 'gray',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-3-15'
	};

	render(<MaterialListItem material={material} />);

	const materialColorElement = screen.getByTestId('material-color');
	expect(materialColorElement).toHaveStyle('color: gray');
	expect(materialColorElement).toHaveClass('circle');
});

test('renders material name', () => {
	const material = {
		name: 'Gravel',
		color: 'gray',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-3-15'
	};

	render(<MaterialListItem material={material} />);

	expect(screen.getByText(/Gravel/)).toBeVisible();
});

test('renders material volume amount', () => {
	const material = {
		name: 'Gravel',
		color: 'gray',
		costPerCubicMeter: 0.25,
		volume: 1000,
		deliveryDate: '2021-3-15'
	};

	render(<MaterialListItem material={material} />);

	expect(screen.getByText(/1000\sm3/)).toBeVisible();
});
