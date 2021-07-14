import { Attacker } from './attacker';
import { ICreep } from '../interfaces/creep.interface';
import { IAttackable } from '../interfaces/attackable.interface';

export class Creep extends Attacker implements IAttackable, ICreep {}
