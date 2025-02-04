module.exports = {
	"boonda-api": {
		input: "./src/openapi.json",
		output: {
			httpClient: "fetch",
			client: "react-query",
			biome: true,
			target: "./src/openapi.ts",
			baseUrl: "http://localhost:3000",
		},
		hooks: {
			afterAllFilesWrite: {
				command: "tsc",
				injectGeneratedDirsAndFiles: false,
			},
		},
	},
};
