// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = 'blue';
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month";
// Array Array<type> or type[]
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple 元组
var x;
x = ['hello', 10];
// x = [10, 'hello'] // Error
// Enums 使用枚举类型可以为一组数值赋予友好的名字
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// 枚举是在运行时真正存在的一个对象。 其中一个原因是因为这样可以从枚举值到枚举名进行反向映射。
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
// 枚举类型被编译成一个对象，它包含双向映射（name -> value）和（value -> name）
// Any 其类型的变量允许任何类型的值 不确定的可以先声明为any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// Void 用 void表示没有任何返回值的函数
function alertName() {
    alert('My name is emily');
}
// Never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// 类型主张，就是知道的比编译器多，主动告诉编译器更多信息，有两种写法
var someValue = "this is a string";
var strLength1 = someValue.length;
var strLength2 = someValue.length;
// Undefined & Null
var u = undefined;
var n = null;
