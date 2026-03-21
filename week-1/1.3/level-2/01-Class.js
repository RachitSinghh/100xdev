/**
 * Represents an Animal with basic properties and behaviors.
 * 
 * @class Animal
 * @description A class that encapsulates animal attributes such as name, leg count, and vocal sounds.
 * This serves as a foundation for modeling different animal types with their characteristics.
 * 
 * @example
 * // Create a dog instance
 * const dog = new Animal('Buddy', 4, 'Woof');
 * dog.speak(); // Output: "Hi there Woof"
 * 
 * @example
 * // Create a bird instance
 * const bird = new Animal('Tweety', 2, 'Tweet');
 * bird.speak(); // Output: "Hi there Tweet"
 * 
 * @constructor
 * @param {string} name - The name of the animal (e.g., 'Lion', 'Elephant')
 * @param {number} legCount - The number of legs the animal has (e.g., 4 for quadrupeds, 2 for birds)
 * @param {string} speaks - The sound the animal makes (e.g., 'Roar', 'Moo', 'Bark')
 * 
 * @method speak
 * @description Prints a greeting message along with the animal's characteristic sound to the console.
 * This method demonstrates how the animal communicates its presence.
 */
class Animal{
    // describe the attributes of the class
    constructor(animal, name, legCount,speaks){
        this.animal = animal; 
        this.name = name;
        this.legCount = legCount
        this.speaks = speaks
    }

    // function to call for there feature
    animalName(){
        console.log(`Hi there my is ${this.name} and i'm a ${this.animal} `)
    }

    speak(){
        console.log("Hi there " + this.speaks); 
    }
}

let dog = new Animal("dog","silky", 4, "bhow bhow"); 
let cat = new Animal("cat","simba", 4, "meow meow");
cat.animalName()
dog.animalName()

