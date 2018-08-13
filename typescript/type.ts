// Boolean
let isDone: boolean = false

// Number
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// String
let color: string = 'blue'
color = 'red'

let fullName: string = `Bob Bobbington`
let age: number = 37
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1} years old next month`

// Array Array<type> or type[]
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// Tuple 元组
let x: [string, number]
x = ['hello', 10]

// x = [10, 'hello'] // Error

// Enums 使用枚举类型可以为一组数值赋予友好的名字
enum Color {Red = 1, Green = 2, Blue}

let c: Color = Color.Green

// 枚举是在运行时真正存在的一个对象。 其中一个原因是因为这样可以从枚举值到枚举名进行反向映射。
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
// 枚举类型被编译成一个对象，它包含双向映射（name -> value）和（value -> name）

// Any 其类型的变量允许任何类型的值 不确定的可以先声明为any
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false

// Void 用 void表示没有任何返回值的函数
function alertName(): void {
  alert('My name is emily');
}

// Never 永远不存在值的类型，一般用于错误处理函数

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// 类型主张，就是知道的比编译器多，主动告诉编译器更多信息，有两种写法
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// Undefined & Null
let u: undefined = undefined;
let n: null = null;

// 类型推论
let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7; // error

// 最佳通用类型
// 上下文类型 通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句。
// function createZoo(): Animal[] {
//   return [new Rhino(), new Elephant(), new Snake()];
// }

// 类型兼容性
// 在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。
// 这与结构性类型系统不同，它是基于类型的组成结构，且不要求明确地声明。
// 因为JavaScript里广泛地使用匿名对象，例如函数表达式和对象字面量，所以使用结构类型系统来描述这些类型比使用名义类型系统更好。

// 在TypeScript里，有两种类型的兼容性：子类型与赋值
interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();

// 比较两个函数 忽略额外的参数在JavaScript里是很常见的
let functionA = (a: number) => 0;
let functionB = (b: number, s: string) => 0;

functionB = functionA; // OK
// functionA = functionB; // Error

// 返回值不同 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
let functionC = () => ({name: 'Alice'});
let functionD = () => ({name: 'Alice', location: 'Seattle'});

functionC = functionD; // OK
// functionD = functionC; // Error because x() lacks a location property

// 类
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) { }
}

class Size {
  feet: number;
  constructor(numFeet: number) { }
}

let animal: Animal;
let size: Size;

animal = size;  //OK
size = animal;  //OK

// 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。
enum Status { Ready, Waiting };
// enum Color { Red, Blue, Green };

let s = Status.Ready;
// s = Color.Green;  //error
