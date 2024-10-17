module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Handles TypeScript files
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './.babelrc.test' }], // Use Babel for JS/TS
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react|react-dom|@testing-library)/)', // Transpile necessary packages
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Alias mapping for imports like "@/components"
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS/SCSS/Less files
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
