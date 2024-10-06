module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript
    testEnvironment: 'jsdom', // Use jsdom for React components
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Adjust if necessary
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // Handle CSS imports
    },
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest to transform TypeScript files
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  };
  