import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BotService } from './bot.singleton.service';
import { CatsApiService } from './cats-api/cats-api.service';
import { commands } from './commands';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [CatsApiService, BotService, ...commands],
})
export class AppModule {}
