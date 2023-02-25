import { Injectable, OnModuleInit, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';

@Injectable({ scope: Scope.DEFAULT })
export class BotService implements OnModuleInit {
  public bot: Telegraf;

  constructor(private config: ConfigService) {
    this.bot = new Telegraf(this.config.getOrThrow('BOT_TOKEN'));
  }
  onModuleInit() {
    this.bot.telegram.setMyCommands([
      { command: 'start', description: 'Início' },
      { command: 'gacos', description: 'Ver gacos' },
      { command: 'dias', description: 'A quantos dias estamos juntos?' },
      { command: 'amor', description: 'o quanto eu te amo?' },
    ]);
  }

  async lauch() {
    return await this.bot.launch();
  }
}
