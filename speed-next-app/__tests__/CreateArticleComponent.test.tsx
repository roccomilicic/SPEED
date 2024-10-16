import { render, screen, fireEvent } from '@testing-library/react';
import CreateArticleComponent from '../src/components/CreateArticle';
import { useRouter } from 'next/navigation';
import React from 'react';
import '@testing-library/jest-dom'; 
// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: mockPush,
});

test('renders CreateArticleComponent and allows user input', () => {
  render(<CreateArticleComponent />);

  const titleInput = screen.getByPlaceholderText(/Title of the Article/i);
  fireEvent.change(titleInput, { target: { value: 'New Article' } });
  expect(titleInput).toHaveValue('New Article');

  const authorInput = screen.getByPlaceholderText(/Authors/i);
  fireEvent.change(authorInput, { target: { value: 'John Doe' } });
  expect(authorInput).toHaveValue('John Doe');
});

test('displays validation errors on empty submit', () => {
  render(<CreateArticleComponent />);

  const submitButton = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(submitButton);

  expect(screen.getByText(/Title is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Authors are required/i)).toBeInTheDocument();
});
