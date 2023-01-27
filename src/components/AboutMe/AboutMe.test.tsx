import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeConsumer } from 'styled-components';
import { lightTheme } from '../styles/theme';
import AboutMe from './AboutMe';

describe('<AboutMe />', () => {
  beforeEach(() => {
    ThemeConsumer._currentValue = lightTheme;
    render(<AboutMe />);
  });

  test('should render title', () => {
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });

  test('should render photo', () => {
    expect(screen.getByAltText(/snapshot/i)).toBeInTheDocument();
  });

  test('should render CV link', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
