import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('<Menu />', () => {
  test('should render component', () => {
    render(<Menu />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
