import { MiddlewareConsumer, Module, type NestModule } from "@nestjs/common";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./BetterAuth";
import { APP_GUARD, HttpAdapterHost } from "@nestjs/core";
import { AuthRawBodyMiddleware } from "./AuthRawBodyMiddleware";
import { AuthGuard } from "./AuthGuard";

@Module({
	providers: [
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
	],
})
export class AuthModule implements NestModule {
	constructor(private readonly adapterHost: HttpAdapterHost) {}

	configure(consumer: MiddlewareConsumer) {
		this.adapterHost.httpAdapter.all("/api/auth/*path", toNodeHandler(auth));
		consumer.apply(AuthRawBodyMiddleware).forRoutes("*");
	}
}
