import { Module } from "@nestjs/common";
import { GetMeController } from "./controllers/GetMeController";

@Module({
	controllers: [GetMeController],
})
export class HttpModule {}
