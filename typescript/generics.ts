// 泛型 适用于多个类型 <>
function echo(arg: any): any {
  return arg;
}
// 如果想要输入类型和返回类型一致时
// 使用类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identify<T>(arg: T): T {
  return arg
}

let output = identify('mystring')

console.log(output)

// 泛型变量
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

// 泛型类型 函数本身的类型，创建泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;

console.log(myIdentity('SDF'))

// 泛型类 用于类的类型定义 泛型类使用（<>）括起泛型类型，跟在类名后面
class GenerricNumber<T> {
  zeroValue: String;
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenerricNumber<number>();
myGenericNumber.zeroValue = '0';
myGenericNumber.add = function(x, y) {
  return x + y
}

console.log(myGenericNumber.add(4, 9))

// 多个类型参数

// 定义泛型的时候，可以一次定义多个类型参数：

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
