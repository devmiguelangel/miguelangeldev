import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('<AboutMe />', () => {
  beforeAll(() => {
    render(<AboutMe />);
  });

  test('should render title', () => {
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });

  test('should render photo', () => {
    expect(screen.getByAltText('my-photo')).toBeInTheDocument();
  });
});
