import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from 'cesiumMaterialsManager/store';
import CesiumMaterialsManager from '../CesiumMaterialsManager';

test('renders Materials header', () => {
	render(
		<Provider store={store}>
			<CesiumMaterialsManager />
		</Provider>
	);

	const materialsHeader = screen.getByRole('heading', { level: 2 });

	expect(materialsHeader).toHaveTextContent('Materials');
});
