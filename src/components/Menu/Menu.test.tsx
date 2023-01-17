import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Menu from './Menu';
import { GlobalStyles, lightTheme } from '../styles';

describe('<Menu /> test', () => {
  test('should render the component', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Menu toggleTheme={() => null} />
      </ThemeProvider>,
    );

    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toBeDefined();

    fireEvent.click(menuIcon);

    expect(screen.getByText('home')).toBeDefined();
  });
});
