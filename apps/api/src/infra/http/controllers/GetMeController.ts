import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";
import {
	AuthPayload,
	CurrentAuthenticated,
} from "src/infra/auth/CurrentAuthenticated";

class GetMeResponse {
	@ApiProperty({
		description: "The message of the response",
		example: "Hello, world!",
	})
	message: string;
}

@Controller("/me")
export class GetMeController {
	@ApiOkResponse({
		description: "Get me",
		type: GetMeResponse,
	})
	@Get()
	getMe(@CurrentAuthenticated() user: AuthPayload) {
		return {
			message: "Hello, world!",
			user,
		};
	}
}
