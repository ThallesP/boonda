import { Module } from "@nestjs/common";
import { AuthModule } from "./infra/auth/AuthModule";
import { HttpModule } from "./infra/http/HttpModule";

@Module({
	imports: [AuthModule, HttpModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
