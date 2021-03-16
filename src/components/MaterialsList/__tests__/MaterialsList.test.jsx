import React from 'react';
import { render, screen } from 'test-utils';
import MaterialsList from 'components/MaterialsList/MaterialsList';

test('shows no data case when there are no materials', () => {
	render(<MaterialsList />, {
		initialState: {
			materials: []
		}
	});

	expect(screen.getByText(/No\smaterials/)).toContainHTML('<i>No materials</i>');
});
