import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/Navbar';
import { usePathname } from 'next/navigation';


jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

test('renders NavBar with all links', () => {

  (usePathname as jest.Mock).mockReturnValue('/');

  render(<NavBar />);

  expect(screen.getByText(/Create Article/i)).toBeInTheDocument();
  expect(screen.getByText(/Show Article List/i)).toBeInTheDocument();
  expect(screen.getByText(/Moderation/i)).toBeInTheDocument();
  expect(screen.getByText(/Analyze/i)).toBeInTheDocument();
});

test('highlights active link based on pathname', () => {

  (usePathname as jest.Mock).mockReturnValue('/create-article');

  render(<NavBar />);


  const createLink = screen.getByText(/Create Article/i);
  expect(createLink).toHaveClass('active');

  const showListLink = screen.getByText(/Show Article List/i);
  expect(showListLink).not.toHaveClass('active');
});
