// ModerationList.test.tsx
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ModerationList from '../src/components/Moderation';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          _id: '1',
          title: 'Pending Article 1',
          authors: 'Author 1',
          source: 'Source 1',
          year_of_publication: 2023,
          doi: '10.1000/pending1',
          summary: 'Summary 1',
          claim: 'Test Claim',
          evidence: 'Test Evidence',
          rating: '3',
          status: 'Pending',
        },
      ]),
  })
) as jest.Mock;

test('renders ModerationList with no articles pending moderation', async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve([]),
  });

  render(<ModerationList />);

  await waitFor(() => {
    expect(screen.getByText(/There are no articles pending moderation!/i)).toBeInTheDocument();
  });
});

test('renders ModerationList with pending articles', async () => {
  render(<ModerationList />);

  await waitFor(() => {
    expect(screen.getByText(/Pending Article 1/i)).toBeInTheDocument();
  });
});

test('handles article approval', async () => {
  render(<ModerationList />);

  // Wait for the article to be rendered
  await waitFor(() => {
    expect(screen.getByText(/Pending Article 1/i)).toBeInTheDocument();
  });

  // Simulate clicking the "Approve" button
  const approveButton = screen.getByText(/Approve/i);
  fireEvent.click(approveButton);

  // Wait for the fetch call to update the article status
  await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/articles/1'),
      expect.objectContaining({
        method: 'PUT',
        body: JSON.stringify({ status: 'Approved' }),
      })
    );
  });
});
