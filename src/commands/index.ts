import { DaysCommand } from './dias.command';
import { GacosCommand } from './gacos.command';
import { HowMuchILoveCommand } from './how-much-i-love.command';
import { StartCommand } from './start.service';

export const commands = [
  StartCommand,
  GacosCommand,
  DaysCommand,
  HowMuchILoveCommand,
];
