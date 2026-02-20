export class Character {
    name: string;
    health: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    getHealth(): number {
        return this.health;
    }

    receiveDamage(damage: number): void {
        this.health -= damage;
    }

}
