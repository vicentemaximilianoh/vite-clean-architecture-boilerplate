/* eslint-disable import/no-unresolved */
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('should render', () => {
    render(<App />);
    expect(1).toBeTruthy();
  });
});
