export class User {
    private firstname: string = "";
    private lastname: string = "";
    private age: number = 0;
    static BIRTH_YEAR: number = 0;

    setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    setAge(age: number): void {
        this.age = age;
        User.BIRTH_YEAR = new Date().getFullYear() - age;
    }

    getAge(): number {
        return this.age;
    }

    getFullName(): string {
        return `${this.firstname} ${this.lastname}`.trim();
    }
}


