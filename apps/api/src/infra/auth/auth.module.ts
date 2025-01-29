import { MiddlewareConsumer, Module, type NestModule } from "@nestjs/common";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./better.auth";
import { HttpAdapterHost } from "@nestjs/core";
import { AuthRawMiddleware } from "./auth.raw.middleware";

@Module({})
export class AuthModule implements NestModule {
	constructor(private readonly adapterHost: HttpAdapterHost) {}

	configure(consumer: MiddlewareConsumer) {
		this.adapterHost.httpAdapter.all("/api/auth/*path", toNodeHandler(auth));
		consumer.apply(AuthRawMiddleware).forRoutes("*");
	}
}
