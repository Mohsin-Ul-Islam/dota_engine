import { Attacker } from './attacker';
import { IHero } from '../interfaces/hero.interface';
import { IAttackable } from '../interfaces/attackable.interface';

export class Hero extends Attacker implements IHero, IAttackable {}
