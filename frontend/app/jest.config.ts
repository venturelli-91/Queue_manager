module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
	},
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
