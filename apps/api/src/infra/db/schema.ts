import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const filesTable = sqliteTable("files", {
	id: text("id").primaryKey(),
	name: text("name"),
	size: int("size"),
	createdAt: text("created_at"),
	updatedAt: text("updated_at"),
});
