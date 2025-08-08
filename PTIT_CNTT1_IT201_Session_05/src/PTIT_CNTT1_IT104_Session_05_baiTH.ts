class Animal {
    private name: string;
    protected age: number;
    public species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public speak(): void {
        console.log(`${this.name} makes a sound.`);
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }

    public getName(): string {
        return this.name;
    }
}

class Dog extends Animal {
    public breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Dog");
        this.breed = breed;
    }

    public speak(): void {
        console.log("Woof");
    }
}

class Cat extends Animal {
    public breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Cat");
        this.breed = breed;
    }

    public speak(): void {
        console.log("Meow");
    }
}

class Rabbit extends Animal {
    public breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Rabbit");
        this.breed = breed;
    }

    public speak(): void {
        console.log("Squeak");
    }
}

// Test
const dog = new Dog("Buddy", 3, "Golden Retriever");
const cat = new Cat("Kitty", 2, "Persian");
const rabbit = new Rabbit("Snow", 1, "Mini Lop");

dog.speak();
cat.speak();
rabbit.speak();

cat.breed = "British Shorthair";
dog.setAge(4);
console.log(`Updated Dog Age: ${dog.getAge()}`);
console.log(`Updated Cat Breed: ${cat.breed}`);