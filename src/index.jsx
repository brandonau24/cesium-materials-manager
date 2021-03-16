import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import regeneratorRuntime from 'regenerator-runtime';

import CesiumMaterialsManager from './CesiumMaterialsManager';
import store from './cesiumMaterialsManager/store';

const container = document.querySelector('#container');

if (module.hot) {
	module.hot.accept('./CesiumMaterialsManager', () => {
		ReactDOM.render(
			<Provider store={store}>
				<CesiumMaterialsManager />
			</Provider>,
			container
		);
	});
}

ReactDOM.render(
	<Provider store={store}>
		<CesiumMaterialsManager />
	</Provider>,
	container
);
