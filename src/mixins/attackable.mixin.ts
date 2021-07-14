import { IAttackable } from '../interfaces/attackable.interface';
import { Constructor } from './base.mixin';

export function AttackableMixin<TBase extends Constructor>(
  Base: TBase
): Constructor<IAttackable> & TBase {
  return class extends Base implements IAttackable {
    private _health: number;
    private _healthPool: number;
    private _healthRegen: number;

    constructor(...args: any[]) {
      super(...args);

      this._health = 0;
      this._healthPool = 0;
      this._healthRegen = 0;
    }

    public getHealth(): number {
      return this._health;
    }

    public getHealthPool(): number {
      return this._healthPool;
    }

    public getHealthRegen(): number {
      return this._healthRegen;
    }
  };
}
