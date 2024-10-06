// AnalysisList.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AnalysisList from '../../components/AnalysisList';

global.fetch = jest.fn();

describe('AnalysisList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display a list of articles ready for analysis', async () => {
    const mockArticles = [
      { id: 1, title: 'Article 1', status: 'Approved' },
      { id: 2, title: 'Article 2', status: 'Approved' },
      { id: 3, title: 'Article 3', status: 'Rejected' },
    ];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockArticles,
    });

    render(<AnalysisList />);

    await waitFor(() => expect(screen.getByText(/Articles Ready for Analysis/i)).toBeInTheDocument());

    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('Article 2')).toBeInTheDocument();
    expect(screen.queryByText('Article 3')).not.toBeInTheDocument();
  });

  it('should update the queue in real-time when new articles are approved', async () => {
    const initialArticles = [{ id: 1, title: 'Article 1', status: 'Approved' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => initialArticles,
    });

    render(<AnalysisList />);

    await waitFor(() => expect(screen.getByText(/Articles Ready for Analysis/i)).toBeInTheDocument());

    const newArticles = [{ id: 2, title: 'Article 2', status: 'Approved' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => newArticles,
    });

    // Simulate fetching new articles (you may need to adjust based on your component logic)
    await waitFor(() => {
      // Simulate a state update
      expect(screen.getByText('Article 2')).toBeInTheDocument();
    });
  });
});
