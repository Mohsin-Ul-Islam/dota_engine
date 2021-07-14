import { IAttacker } from '../interfaces/attacker.interface';
import { IAttackable } from '../interfaces/attackable.interface';

export abstract class Attacker implements IAttacker {
  private _isAttacking: boolean;
  private _attackTarget: IAttackable | null;

  constructor() {
    this._isAttacking = false;
    this._attackTarget = null;
  }

  public startAttacking(attackable: IAttackable): void {
    this._attackTarget = attackable;
    this._isAttacking = true;
  }

  public stopAttacking(): void {
    this._attackTarget = null;
    this._isAttacking = false;
  }

  public isAttacking(attackable: IAttackable): boolean {
    return this._isAttacking && this._attackTarget == attackable;
  }

  public isAttackingAny(): boolean {
    return this._isAttacking;
  }
}
