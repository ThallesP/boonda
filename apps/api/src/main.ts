import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { writeFile } from "node:fs/promises";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		bodyParser: false,
	});

	app.enableCors({
		origin: "http://localhost:3001",
		credentials: true,
	});

	const config = new DocumentBuilder()
		.setTitle("Boonda API")
		.setDescription("Uploads made easier")
		.setVersion("1.0")
		.build();

	const documentFactory = () => SwaggerModule.createDocument(app, config);

	await writeFile(
		"../../packages/sdk/src/openapi.json",
		JSON.stringify(documentFactory(), null, 2),
	);

	SwaggerModule.setup("api", app, documentFactory);

	await app.listen(process.env.PORT ?? 3000, "0.0.0.0");
}
bootstrap();
