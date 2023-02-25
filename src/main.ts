import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BotService } from './bot.singleton.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const botService = app.get(BotService);

  botService.lauch();
}
bootstrap();
