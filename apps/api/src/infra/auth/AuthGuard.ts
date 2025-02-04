import {
	CanActivate,
	ExecutionContext,
	UnauthorizedException,
} from "@nestjs/common";
import { auth } from "./BetterAuth";
import { Request } from "express";

export class AuthGuard implements CanActivate {
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<Request>();

		const headers = new Headers(request.headers as HeadersInit);
		const session = await auth.api
			.getSession({
				headers,
			})
			.catch(() => null);

		if (!session) {
			throw new UnauthorizedException();
		}

		request.user = session.user;

		return true;
	}
}
