import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Input } from 'telegraf';
import { BotService } from '../bot.singleton.service';
import { CatsApiService } from '../cats-api/cats-api.service';

@Injectable()
export class GacosCommand implements OnModuleInit {
  constructor(
    private catsApi: CatsApiService,
    private botService: BotService,
  ) {}

  private logger = new Logger(GacosCommand.name);
  private inlineKeyboard = [
    [
      {
        text: 'Ver mais gacos!',
        callback_data: 'moreCats',
      },
    ],
  ];

  async onModuleInit() {
    this.botService.bot.command('gacos', async (ctx) => {
      this.botService.bot.telegram.sendPhoto(
        ctx.chat.id,
        await this.fetchCat(),
        {
          caption: 'Legal! Vamos ver uns gacos!',
          reply_markup: {
            inline_keyboard: this.inlineKeyboard,
          },
        },
      );
    });

    this.botService.bot.action('moreCats', async (ctx) => {
      this.botService.bot.telegram.sendPhoto(
        ctx.chat.id,
        await this.fetchCat(),
        {
          reply_markup: {
            inline_keyboard: this.inlineKeyboard,
          },
        },
      );
    });
  }
  private async fetchCat() {
    return Input.fromURL(await this.catsApi.fetchCat());
  }
}
