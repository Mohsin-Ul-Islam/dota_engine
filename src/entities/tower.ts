import { Attacker } from './attacker';
import { IAttackable } from '../interfaces/attackable.interface';
import { ITower } from '../interfaces/tower.interface';

export class Tower extends Attacker implements IAttackable, ITower {}
