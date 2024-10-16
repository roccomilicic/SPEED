import { render, screen, fireEvent } from '@testing-library/react';
import CreateArticleComponent from '../src/components/CreateArticle';
import { useRouter } from 'next/navigation';


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


  const sourceInput = screen.getByPlaceholderText(/Source/i);
  fireEvent.change(sourceInput, { target: { value: 'Test Source' } });
  expect(sourceInput).toHaveValue('Test Source');


  const doiInput = screen.getByPlaceholderText(/DOI/i);
  fireEvent.change(doiInput, { target: { value: '10.1000/testdoi' } });
  expect(doiInput).toHaveValue('10.1000/testdoi');
  

  const yearInput = screen.getByPlaceholderText(/Year of Publication/i);
  fireEvent.change(yearInput, { target: { value: '2023' } });
  expect(yearInput).toHaveValue(2023);


  const ratingSelect = screen.getByLabelText(/Rating/i);
  fireEvent.change(ratingSelect, { target: { value: '5' } });
  expect(ratingSelect).toHaveValue('5');
});

test('displays validation errors on empty submit', () => {
  render(<CreateArticleComponent />);

  const submitButton = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(submitButton);


  expect(screen.getByText(/Title is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Authors are required/i)).toBeInTheDocument();
  expect(screen.getByText(/Source is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Year of Publication is required/i)).toBeInTheDocument();
  expect(screen.getByText(/DOI is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Summary is required/i)).toBeInTheDocument();
});
