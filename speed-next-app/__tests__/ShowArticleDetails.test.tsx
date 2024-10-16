import { render, screen, waitFor } from '@testing-library/react';
import ShowArticleDetails from '../src/components/ShowArticleDetails';
import { useParams } from 'next/navigation';

// Mock next/navigation hooks
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(), // Mock push function to simulate navigation
  })),
}));

// Mock fetch function to return the article details
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true, // Simulate a successful response
    json: () =>
      Promise.resolve({
        title: 'Test Article',
        authors: 'Jane Doe',
        source: 'Test Source',
        year_of_publication: 2023,
        doi: '10.1000/testdoi',
        summary: 'This is a test summary',
        status: 'Approved',
      }),
  })
) as jest.Mock;

test('renders ShowArticleDetails with article details', async () => {
  // Mock the useParams hook to return the article ID
  (useParams as jest.Mock).mockReturnValue({ id: '123' });

  // Render the component
  render(<ShowArticleDetails />);

  // Wait for the article details to be fetched and displayed
  await waitFor(() => {
    expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Source/i)).toBeInTheDocument();
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
    expect(screen.getByText(/10.1000\/testdoi/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test summary/i)).toBeInTheDocument();
  });
});
