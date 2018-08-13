function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Xcat Liu';
// let user = [1, 2, 3];

console.log(sayHello(user));

let o = {
    oa: "foo",
    ob: 12,
    oc: "bar"
};
// 别名 a as newName1
// let { a: newName1, b: newName2 } = o;
// 指明类型
let { oa, ob }: {oa: string, ob: number} = o;

// 默认值

// 默认值可以让你在属性为 undefined 时使用缺省值：
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(a, b)
}
keepWholeObject({a: 'string'})
console.log('keepWholeObject')


// 解构也能用于函数声明。 看以下简单的情况：
// type C = { a: string, b?: number }
// function f ({ a, b }: C): void {
//     // ...
// }

// 解构默认值 =
function f({ a, b = 0 } = { a: ""}) {
    return `a: ${a} b: ${b}`
}
console.log(f()); // ok, default to { a: "", b: 0 }
console.log(f({a: 'yes'}))
// console.log(f({})) // error


// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label)
// }

interface labelledValue {
  label: string
}

function printLabel(labelledObj: labelledValue) {
  console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Size 20 Object'}

printLabel(myObj)

interface SquareConfig {
  color?: string;
  width?: number;
}
// () : 是返回的类型
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};

  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}
// let mySquare = createSquare({ color: "red", width: 100 })
let mySquare = createSquare({ width: 100, opacity: 0.5 });

console.log(mySquare)

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

a = ro as number[];

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// 函数类型
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  console.log(src, sub)
  let result = src.search(sub);
  return result > -1;
}

console.log(mySearch('sssddf', 'shjjjs'))

// 可索引的类型
interface StringArray {
  [index: number]: string; // 索引签名：number 值 为 string
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {suit: this.suits[pickedSuit], card: pickedCard % 13}
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + ' of ' + pickedCard.suit)


interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

// class Handler {
//   info: string;
//   onClickBad(this: Handler, e: Event) {
//     this.info = e.message;
//   }
// }
//
// let h = new Handler();
// uiElement.addClickListener(h.onClickBad);

class Handler {
  info: string;
  onClickGood(this: void, e: Event) {
    console.log("clicked")
  }
}

let h = new Handler();
//uiElement.addClickListener(h.onClickGood);

let pets = new Array(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
  console.log(pet); // "species" why
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}
