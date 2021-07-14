import { ICreep } from '../interfaces/creep.interface';
import { IAttackable } from '../interfaces/attackable.interface';
import { IAttacker } from '../interfaces/attacker.interface';
import { AttackableMixin } from '../mixins/attackable.mixin';
import { AttackerMixin } from '../mixins/attacker.mixin';

export class Creep
  extends AttackerMixin(AttackableMixin(class {}))
  implements ICreep, IAttackable, IAttacker {}
