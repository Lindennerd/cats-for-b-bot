import { Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';

@Injectable({ scope: Scope.DEFAULT })
export class BotService {
  public bot: Telegraf;

  constructor(private config: ConfigService) {
    this.bot = new Telegraf(this.config.getOrThrow('BOT_TOKEN'));
  }

  async lauch() {
    return await this.bot.launch();
  }
}
