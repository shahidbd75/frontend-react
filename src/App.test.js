import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fifa World Cup 2022 text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Fifa World Cup 2022/i);
  expect(headerElement).toBeInTheDocument();
});
