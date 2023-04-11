/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import { en } from '../locale';

describe('App', () => {
	it('app render title', () => {
		render(<App />);
		expect(screen.getByText(en.title)).toBeInTheDocument();
	});

	it('switch between baskets', async () => {
		const app = render(<App />);
		const checkbox = app.container.querySelector('#basket_2');

		userEvent.click(checkbox!);
		expect(await screen.findByText('65.15')).toBeInTheDocument();
	});
});
