import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  test('should render title name', () => {
    render(<Home />);

    expect(screen.getByText(/miguel angel/i)).toBeInTheDocument();
  });

  test('should render title position', () => {
    render(<Home />);

    expect(screen.getByText(/software engineer/i)).toBeInTheDocument();
  });
});
