// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RouteVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RouteVault/i);
    expect(titleElement).toBeInTheDocument();
});
