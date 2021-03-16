import React from 'react';
import { render, screen } from 'test-utils';
import CesiumMaterialsManager from '../CesiumMaterialsManager';

test('renders Materials header', () => {
	render(<CesiumMaterialsManager />, { initialState: { materials: [] } });

	const materialsHeader = screen.getByRole('heading', { level: 2 });

	expect(materialsHeader).toHaveTextContent('Materials');
});

test('display a cost of 0 when there are no materials', () => {
	render(<CesiumMaterialsManager />, { initialState: { materials: [] } });

	expect(screen.getByText(/\$0\.00/)).toBeVisible();
});
