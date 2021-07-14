import { Hero } from '../src/entities/hero';

test('attacker should be able to attack an attackable', () => {
  const dragonKnight = new Hero();
  const antiMage = new Hero();

  expect(dragonKnight.isAttackingAny()).toBe(false);
  expect(dragonKnight.isAttacking(antiMage)).toBe(false);

  dragonKnight.startAttacking(antiMage);

  expect(dragonKnight.isAttackingAny()).toBe(true);
  expect(dragonKnight.isAttacking(antiMage)).toBe(true);
});

test('attacker should be able to stop attacking an attackable', () => {
  const dragonKnight = new Hero();
  const antiMage = new Hero();

  expect(dragonKnight.isAttackingAny()).toBe(false);
  expect(dragonKnight.isAttacking(antiMage)).toBe(false);

  dragonKnight.startAttacking(antiMage);

  expect(dragonKnight.isAttackingAny()).toBe(true);
  expect(dragonKnight.isAttacking(antiMage)).toBe(true);

  dragonKnight.stopAttacking();

  expect(dragonKnight.isAttackingAny()).toBe(false);
  expect(dragonKnight.isAttacking(antiMage)).toBe(false);
});

test('attacker should be able to switch an attackable', () => {
  const dragonKnight = new Hero();
  const antiMage = new Hero();
  const morphling = new Hero();

  expect(dragonKnight.isAttackingAny()).toBe(false);
  expect(dragonKnight.isAttacking(antiMage)).toBe(false);

  dragonKnight.startAttacking(antiMage);

  expect(dragonKnight.isAttackingAny()).toBe(true);
  expect(dragonKnight.isAttacking(antiMage)).toBe(true);

  dragonKnight.startAttacking(morphling);

  expect(dragonKnight.isAttackingAny()).toBe(true);
  expect(dragonKnight.isAttacking(antiMage)).toBe(false);
  expect(dragonKnight.isAttacking(morphling)).toBe(true);
});
