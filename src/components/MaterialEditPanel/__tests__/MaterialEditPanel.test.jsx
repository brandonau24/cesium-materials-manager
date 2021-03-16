import React from 'react';
import { render, screen } from 'test-utils';
import MaterialEditPanel from 'components/MaterialEditPanel/MaterialEditPanel';

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
			color: '#333444',
			costPerCubicMeter: 0.25,
			volume: 1000,
			deliveryDate: '2021-03-14'
		},
		{
			id: '3',
			name: 'material',
			color: 'black',
			costPerCubicMeter: 0.25,
			volume: 5000,
			deliveryDate: '2021-03-14'
		}
	]
};

test('renders name field with name filled in', () => {
	render(<MaterialEditPanel materialId="1" />, { preloadedState });

	expect(screen.getByRole('textbox')).toHaveValue('material');
});

test('renders color picker with color picker filled in', () => {
	render(<MaterialEditPanel materialId="2" />, { preloadedState });

	expect(screen.getByLabelText('Color')).toHaveValue('#333444');
});

test('renders volume field with volume amount filled in', () => {
	render(<MaterialEditPanel materialId="3" />, { preloadedState });

	const volumeField = screen.getByLabelText('Volume', { exact: false });
	expect(volumeField).toHaveValue(5000);
	expect(volumeField).toHaveAttribute('min', '0');
});

test('renders date picker with date filled in', () => {
	render(<MaterialEditPanel materialId="1" />, { preloadedState });

	const costField = screen.getByLabelText('Cost', { exact: false });
	expect(costField).toHaveValue(0.25);
	expect(costField).toHaveAttribute('step', '0.1');
	expect(costField).toHaveAttribute('min', '0');
});

test('renders cost per cubic meter field with cost filled in', () => {
	render(<MaterialEditPanel materialId="2" />, { preloadedState });

	const dateField = screen.getByLabelText('Delivery Date');
	expect(dateField).toHaveValue('2021-03-14');
});
