/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '../App';
import { en } from '../locale';

describe('App', () => {
	it('app render title', () => {
		render(<App />);
		expect(screen.getByText(en.title)).toBeInTheDocument();
	});
});
