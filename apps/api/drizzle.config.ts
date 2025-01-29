import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: ["./src/infra/db/schema.ts", "./src/infra/auth/auth-schema.ts"],
	dialect: "sqlite",
	dbCredentials: {
		url: process.env.DB_FILE_NAME as string,
	},
});
