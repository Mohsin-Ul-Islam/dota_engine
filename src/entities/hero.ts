import { IHero } from '../interfaces/hero.interface';
import { IAttackable } from '../interfaces/attackable.interface';
import { IAttacker } from '../interfaces/attacker.interface';
import { AttackerMixin } from '../mixins/attacker.mixin';
import { AttackableMixin } from '../mixins/attackable.mixin';

export class Hero
  extends AttackableMixin(AttackerMixin(class {}))
  implements IHero, IAttackable, IAttacker {}
