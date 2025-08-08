class Animal {
    name;
    age;
    species;
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
}
class Dog extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age, "Dog");
        this.breed = breed;
    }
    speak() {
        console.log("Woof");
    }
}
class Cat extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age, "Cat");
        this.breed = breed;
    }
    speak() {
        console.log("Meow");
    }
}
class Rabbit extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age, "Rabbit");
        this.breed = breed;
    }
    speak() {
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
export {};
