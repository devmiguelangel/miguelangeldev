import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('<Home /> test', () => {
  test('should render title name', () => {
    render(<Home />);

    expect(screen.getByText(/miguel angel/i)).toBeDefined();
  });

  test('should render title career', () => {
    render(<Home />);

    expect(screen.getByText(/software engineer/i)).toBeDefined();
  });
});
