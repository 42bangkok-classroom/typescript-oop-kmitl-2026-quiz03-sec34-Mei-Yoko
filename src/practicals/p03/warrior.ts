import { Character } from "./character";

export class Warrior extends Character {
  weapon: string;

  constructor(name: string, weapon: string, health: number){
    super(name);
    this.weapon = weapon;
    this.health = health;
  }

  getWeapon(): string{
    return this.weapon;
  }

  override  receiveDamage(damage: number): void {
    this.health -= damage * 0.9;
  }
  // TODO: implement class properties, constructor with super(...), and methods
}
