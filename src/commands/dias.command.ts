import { Injectable, OnModuleInit } from '@nestjs/common';
import { BotService } from '../bot.singleton.service';
@Injectable()
export class DaysCommand implements OnModuleInit {
  constructor(private botService: BotService) {}

  onModuleInit() {
    this.botService.bot.command('dias', (ctx) => {
      this.botService.bot.telegram.sendMessage(
        ctx.chat.id,
        `Estamos juntos desde 11 de maio de 2019, ou seja ${this.dateDiff(
          '2019-05-11',
        )}`,
      );
    });
  }

  private dateDiff(startingDate: string) {
    let startDate = new Date(
      new Date(startingDate).toISOString().substr(0, 10),
    );

    let endDate = new Date();
    if (startDate > endDate) {
      const swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    const startYear = startDate.getFullYear();
    const february =
      (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
        ? 29
        : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }

    return yearDiff + ' anos ' + monthDiff + ' meses e ' + dayDiff + ' dias';
  }
}
