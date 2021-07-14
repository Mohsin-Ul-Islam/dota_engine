import { ITower } from '../interfaces/tower.interface';
import { IAttackable } from '../interfaces/attackable.interface';
import { IAttacker } from '../interfaces/attacker.interface';
import { AttackerMixin } from '../mixins/attacker.mixin';
import { AttackableMixin } from '../mixins/attackable.mixin';

export class Tower
  extends AttackableMixin(AttackerMixin(class {}))
  implements ITower, IAttackable, IAttacker {}
