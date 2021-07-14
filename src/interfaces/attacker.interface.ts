import { IAttackable } from './attackable.interface';

export interface IAttacker {
  isAttackingAny(): boolean;
  isAttacking(attackable: IAttackable): boolean;
  startAttacking(attackable: IAttackable): void;
  stopAttacking(): void;
}
