const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      collectCoverage: false,
      coverageDirectory: 'coverage',
      coverageReporters: ['clover', 'json', 'lcov', 'text'],
      collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/__tests__/**',
        '!**/*.spec.{ts,tsx}',
        '!**/node_modules/**',
        '!**/public/**',
      ],
    },
  },
};
