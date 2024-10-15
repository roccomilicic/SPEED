// jest.setup.js
import '@testing-library/jest-dom';

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock window.history.pushState
Object.defineProperty(window, 'history', {
  writable: true,
  value: { pushState: jest.fn() },
});