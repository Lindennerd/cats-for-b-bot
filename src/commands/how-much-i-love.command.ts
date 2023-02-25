import { Injectable, OnModuleInit } from '@nestjs/common';
import { BotService } from '../bot.singleton.service';

@Injectable()
export class HowMuchILoveCommand implements OnModuleInit {
  private loveText: string;
  constructor(private botsService: BotService) {
    this.loveText = `Bom, a circunferência da Terra é mais ou menos 45 mil quilomentros, mas isso não chega nem perto.
    A distância da Terra até a Lua é de 384 mil quilometros, mas também é pouco ainda
    A distância  da Terra até o sol é de 149 milhões de quilometros, ou seja, 149 mil mils quilometros, é beeeem longe, mas mesmo assim ainda não cabe...
    A distância do Sol até Plutão, que nem planeta é, é de quase 6 bilhões de quilomentros, ou seja 6 milhões de milhões de quilomentros
    mas ainda falta, não chega nem perto.
    A circunferência da nossa galáxia, a Via-Láctea, é de mais ou menos 900 trilhões de quilometros, é muuuito mas muuuuuuito grande
    mas mesmo assim, ainda fica faltando...
    Pra poder expressar o quanto eu te amo, não da pra usar nenhum número inventado pela matemática, nenhuma palavra inventada em nenhum idioma,
    nenhum conceito abstrato tirado da cabeça de algum filósofo racista.
    Um amor desse tamanho, não cabe no nosso cérebro, não pode ser processado nem no melhor computador quântico
    não pode ser tocado
    não pode ser medido
    não pode ser reproduzido
    não pode ser investigado
    não pode ser aprendido
    precisa ser sentido.`;
  }

  onModuleInit() {
    this.botsService.bot.command('amor', (ctx) => {
      this.botsService.bot.telegram.sendMessage(ctx.chat.id, this.loveText);
    });
  }
}
