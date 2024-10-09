import { render, screen } from '@testing-library/react';
import ArticleCard from '../src/components/ArticleCard';
import { Article } from '../src/components/Article';

test('renders ArticleCard with article details', () => {
  const article: Article = {
    title: 'Test Article',
    authors: 'John Doe',
    source: 'Test Source',
    year_of_publication: 2023,
    doi: '10.1000/testdoi',
    summary: 'This is a test summary',
    status: 'Pending',
  };

  render(<ArticleCard article={article} />);

  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Source/i)).toBeInTheDocument();
  expect(screen.getByText(/2023/i)).toBeInTheDocument();
  expect(screen.getByText(/10.1000\/testdoi/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a test summary/i)).toBeInTheDocument();
  expect(screen.getByText(/Pending/i)).toBeInTheDocument();
});
