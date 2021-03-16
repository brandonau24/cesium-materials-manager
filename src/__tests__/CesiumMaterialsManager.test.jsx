import React from 'react';
import { render, screen } from 'test-utils';
import CesiumMaterialsManager from '../CesiumMaterialsManager';

test('renders Materials header', () => {
	render(<CesiumMaterialsManager />);

	const materialsHeader = screen.getByRole('heading', { level: 2 });

	expect(materialsHeader).toHaveTextContent('Materials');
});
