import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/Navbar';
import { useSearchParams, usePathname } from 'next/navigation';

// Mocking useSearchParams and usePathname from Next.js
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

describe('NavBar', () => {
  beforeEach(() => {
    // Reset mocks before each test
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(''),  // Mock the behavior of getting the "search" param
      toString: jest.fn().mockReturnValue(''),
    });
    
    (usePathname as jest.Mock).mockReturnValue('/');  // Mock the pathname to be '/'
  });

  test('renders NavBar with all links', () => {
    render(<NavBar />);

    // Check for presence of navigation buttons
    expect(screen.getByText(/Create Article/i)).toBeInTheDocument();
    expect(screen.getByText(/Show Article List/i)).toBeInTheDocument();
    expect(screen.getByText(/Moderation/i)).toBeInTheDocument();
    expect(screen.getByText(/Analyze/i)).toBeInTheDocument();
  });

  test('renders search input when not on create-article page', () => {
    render(<NavBar />);
    
    // Check if search input exists (it shouldn't be on the "/create-article" page)
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
  });
});
