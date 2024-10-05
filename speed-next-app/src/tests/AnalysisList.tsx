import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AnalysisList from '../components/AnalysisList';
import '@testing-library/jest-dom/extend-expect';

// Mocking the ArticleCard component
jest.mock('./ArticleCard', () => ({ article }: { article: any }) => (
  <div data-testid="article-card">{article.title}</div>
));

// Mocking the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { _id: '1', title: 'Article 1', status: 'Approved' },
      { _id: '2', title: 'Article 2', status: 'Pending' },
      { _id: '3', title: 'Article 3', status: 'Approved' },
    ]),
  })
) as jest.Mock;

describe('AnalysisList Component', () => {

  test('renders loading state initially', () => {
    render(<AnalysisList />);
    expect(screen.getByText('Loading articles...')).toBeInTheDocument();
  });

  test('fetches and displays only approved articles', async () => {
    render(<AnalysisList />);

    // Ensure loading is displayed initially
    expect(screen.getByText('Loading articles...')).toBeInTheDocument();

    // Wait for the articles to be fetched and rendered
    await waitFor(() => {
      expect(screen.queryByText('Loading articles...')).not.toBeInTheDocument();
    });

    // Check that only the articles with "Approved" status are rendered
    expect(screen.getByTestId('article-card')).toHaveTextContent('Article 1');
    expect(screen.getByTestId('article-card')).toHaveTextContent('Article 3');

    // Ensure articles with non-approved status are not rendered
    expect(screen.queryByText('Article 2')).not.toBeInTheDocument();
  });

  test('shows message when no articles are approved', async () => {
    // Mock fetch to return no approved articles
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ _id: '1', title: 'Article 1', status: 'Pending' }]),
      })
    );

    render(<AnalysisList />);

    // Wait for the articles to be fetched and the state to update
    await waitFor(() => {
      expect(screen.queryByText('Loading articles...')).not.toBeInTheDocument();
    });

    // Check that the message for no articles ready for analysis is displayed
    expect(screen.getByText('There are no articles ready for analysis!')).toBeInTheDocument();
  });

  test('shows error message when API fails', async () => {
    // Mock fetch to simulate an error
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to fetch articles.'))
    );

    render(<AnalysisList />);

    // Wait for the error to be handled
    await waitFor(() => {
      expect(screen.queryByText('Loading articles...')).not.toBeInTheDocument();
    });

    // Ensure error message is displayed
    expect(screen.getByText('Failed to fetch articles.')).toBeInTheDocument();
  });
});
