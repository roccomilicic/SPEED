// NavBar.test.tsx
import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/Navbar';
import React from 'react';
import '@testing-library/jest-dom'; 
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
    toString: jest.fn()
  }))
}));

jest.mock('../src/components/SearchBar', () => {
  return function MockSearchBar({ placeholder }: { placeholder: string }) {
    return <div data-testid="mock-search-bar">{placeholder}</div>;
  };
});

test('renders NavBar with all links', () => {
  render(<NavBar />);

  expect(screen.getByText(/Create Article/i)).toBeInTheDocument();
  expect(screen.getByText(/Show Article List/i)).toBeInTheDocument();
  expect(screen.getByText(/Moderation/i)).toBeInTheDocument();
  expect(screen.getByText(/Analyze/i)).toBeInTheDocument();
  expect(screen.getByTestId('mock-search-bar')).toBeInTheDocument();
});