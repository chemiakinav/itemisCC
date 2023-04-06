/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	moduleDirectories: ['src', 'node_modules'],
	modulePathIgnorePatterns: ['<rootDir>/dist/'],
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.ts',
	},
};
