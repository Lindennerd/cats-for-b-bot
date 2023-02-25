import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Input } from 'telegraf';
import { BotService } from '../bot.singleton.service';

@Injectable()
export class StartCommand implements OnModuleInit {
  constructor(private botService: BotService, private config: ConfigService) {}

  private logger = new Logger(StartCommand.name);

  private emojis = {
    heartlyEyes: '\u{1F60D}',
    fingerPointingUp: '\u{1F446}',
    sun: '\u{1F31E}',
  };

  onModuleInit() {
    try {
      this.botService.bot.command('start', async (ctx) => {
        this.botService.bot.telegram.sendPhoto(
          ctx.chat.id,
          Input.fromURL(
            `${this.config.getOrThrow<string>('S3_URL')}bb-feliz.jpg`,
          ),
          {
            caption: `Olá! Eu sou o bot feito com todo amor do mundo para o b ${this.emojis.heartlyEyes}! Esse mesmo ai da foto ${this.emojis.fingerPointingUp}! A pessoa mais importante na vida do meu criador, ${this.emojis.sun}o centro de gravidade dele ${this.emojis.sun}: \n\n mantém ele sempre no melhor caminho, ao redor do qual a vida dele gira, que faz o dia amanhecer, a noite anoitecer e o qual,sem ele não é possível haver vida!`,
          },
        );
      });
    } catch (e) {
      this.logger.error(e);
    }
  }
}
