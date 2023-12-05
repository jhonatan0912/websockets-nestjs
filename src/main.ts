import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WebSocketGateway } from '@nestjs/websockets';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // CORS
  app.enableCors();
}
bootstrap();
