module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // 处理 TypeScript 文件
    '^.+\\.(js|jsx)$': 'babel-jest', // 处理 JavaScript 和 JSX 文件
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@testing-library|react|react-dom)/)', // 忽略 node_modules 中的模块转换，除了指定的库
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
