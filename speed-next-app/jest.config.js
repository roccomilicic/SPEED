module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
<<<<<<< HEAD
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
};
=======
    '^.+\\.(ts|tsx)$': 'ts-jest',  // For transforming TypeScript files
    '^.+\\.(js|jsx|mjs|cjs)$': 'babel-jest',  // For transforming JavaScript/JSX files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react|react-dom|@testing-library)/)',  // Transform node_modules except React-related packages
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',  // For handling imports with the "@" alias
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Mock out CSS files for testing
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],  // Setup file for extra configurations
};
>>>>>>> origin/main
