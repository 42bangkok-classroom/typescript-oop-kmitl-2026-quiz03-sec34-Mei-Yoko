export class User {
    public firstname: string ="";
    public lastname: string ="";
    private age: number= 0;
    static BIRTH_YEAR: number = 2000;

    constructor(firstname: string = "", lastname: string ="", age: number = 0){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    setFirstname(firstname: string): void{
        this.firstname = firstname;
    }

    setLastname(lastname: string): void{
        this.lastname = lastname;
    }

    setAge(age: number): void{
        this.age = age;
    }
    
    getAge(): number{
        return this.age;
    }

    getFullname(): string{
        return `$(this.firstname) $(this.lastname)`;
    }


}


