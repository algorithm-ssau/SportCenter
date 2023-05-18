import { render, screen } from '@testing-library/react';
import Trainers from './Trainers';

test('renders learn react link', () => {
  render(<Trainers />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
