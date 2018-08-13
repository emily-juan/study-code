class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter (person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

var user = new Student('Jane', 'M', 'User');

document.body.innerHTML = greeter(user);


interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr)

class Animal {
    name: string;
}
// index: number extends  index: string
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you an Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

interface NotOkay {
    [x: string]: Animal;
    [x: number]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    // name: string;      // error, the type of 'name' is not a subtype of the indexer
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let readonlyArray: ReadonlyStringArray = ["Alice", "Bob"];
// readonlyArray[2] = "Mallory"; // error!

// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date)
// }
//
// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d
//   }
//   constructor(h: number, m: number) {}
// }

// STATIC and INSTANT 静态与实例 new
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

// class newClock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}

  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}

  tick () {
    console.log('tick tick')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

console.log(digital.tick())
console.log(analog.tick())

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = <Square>{}
square.color = 'blue'
square.penWidth = 10
square.sideLength = 5.0

console.log(square)

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {

}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//     select() { }
// }
//
// class Location {
//
// }
