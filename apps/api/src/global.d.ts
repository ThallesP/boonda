import type { Request } from "express";

declare module "express" {
	interface Request {
		user?: unknown;
	}
}
