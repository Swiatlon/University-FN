/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  reporters: ['default', ['jest-ctrf-json-reporter', { outputFile: 'jest-result.json', outputDir: 'jest-result' }]],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '^contract/(.*)$': '<rootDir>/src/contract/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^configs/(.*)$': '<rootDir>/src/configs/$1',
    '^contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^i18n/(.*)$': '<rootDir>/src/i18n/$1',
    '^layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^redux/(.*)$': '<rootDir>/src/redux/$1',
    '^routes/(.*)$': '<rootDir>/src/routes/$1',
    '^theme/(.*)$': '<rootDir>/src/theme/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};
