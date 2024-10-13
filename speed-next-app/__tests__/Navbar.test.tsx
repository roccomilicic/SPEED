// NavBar.test.tsx
import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/Navbar';
// import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/')
}));

test('renders NavBar with all links', () => {
  render(<NavBar />);

  expect(screen.getByText(/Create Article/i)).toBeInTheDocument();
  expect(screen.getByText(/Show Article List/i)).toBeInTheDocument();
  expect(screen.getByText(/Moderation/i)).toBeInTheDocument();
});