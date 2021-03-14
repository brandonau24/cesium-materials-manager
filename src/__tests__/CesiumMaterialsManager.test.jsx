import React from 'react';
import { render, screen } from '@testing-library/react';
import CesiumMaterialsManager from '../CesiumMaterialsManager';

test('renders Materials header', () => {
	render(<CesiumMaterialsManager />);

	const materialsHeader = screen.getByRole('heading', { level: 2 });

	expect(materialsHeader).toHaveTextContent('Materials');
});
