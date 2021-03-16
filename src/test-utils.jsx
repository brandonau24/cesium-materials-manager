/* eslint-disable */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import store from 'cesiumMaterialsManager/store';
import { Provider } from 'react-redux';

function render(
	ui,
	{
		initialState,
		appStore = store,
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={appStore}>{children}</Provider>;
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
