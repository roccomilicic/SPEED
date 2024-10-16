// ModerationList.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import ModerationList from '../src/components/Moderation';
import React from 'react';
import '@testing-library/jest-dom'; 
// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true, // Add ok flag to indicate successful response
    json: () =>
      Promise.resolve([
        {
          title: 'Pending Article 1',
          authors: 'Author 1',
          source: 'Source 1',
          year_of_publication: 2023,
          doi: '10.1000/pending1',
          summary: 'Summary 1',
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