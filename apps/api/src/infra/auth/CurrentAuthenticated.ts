import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export type AuthPayload = {
	id: string;
	email: string;
};

export const CurrentAuthenticated = createParamDecorator(
	(data: unknown, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest();
		return request.user as AuthPayload;
	},
);
