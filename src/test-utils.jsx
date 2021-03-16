/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import materialsReducer from 'reducers/materials';

function render(
	ui,
	{
		preloadedState,
		store = configureStore({
			reducer: { materials: materialsReducer },
			preloadedState
		}),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
