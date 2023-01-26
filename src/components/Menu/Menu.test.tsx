import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeConsumer } from 'styled-components';
import { lightTheme } from '../styles/theme';
import Menu from './Menu';

describe('<Menu />', () => {
  test('should render component', () => {
    ThemeConsumer._currentValue = lightTheme;
    render(<Menu />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
