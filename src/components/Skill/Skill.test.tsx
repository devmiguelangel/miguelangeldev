import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeConsumer } from 'styled-components';
import Skill from './Skill';
import { lightTheme } from '../styles/theme';

describe('<Skill />', () => {
  beforeEach(() => {
    ThemeConsumer._currentValue = lightTheme;
    render(<Skill />);
  });

  test('should render title', () => {
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
  });

  test('should render box skills', () => {
    expect(screen.getByText(/software/i)).toBeInTheDocument();
    expect(screen.getByText(/database/i)).toBeInTheDocument();
    expect(screen.getByText(/ci .* cd/i)).toBeInTheDocument();
    expect(screen.getByText(/mobile/i)).toBeInTheDocument();
  });
});
