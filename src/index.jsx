import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CesiumMaterialsManager from './CesiumMaterialsManager';
import store from './cesiumMaterialsManager/store';

const container = document.querySelector('#container');

ReactDOM.render(
	<Provider store={store}>
		<CesiumMaterialsManager />
	</Provider>,
	container
);
