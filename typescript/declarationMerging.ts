// TypeScript中的声明会创建以下三种实体之一：命名空间，类型或值。
// 创建命名空间的声明会新建一个命名空间，它包含了用（.）符号来访问时使用的名字。
// 创建类型的声明是：用声明的模型创建一个类型并绑定到给定的名字上。
// 最后，创建值的声明会创建在JavaScript输出中看到的值。

// 合并接口
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}
// 接口的非函数的成员必须是唯一的。 如果两个接口中同时声明了同名的非函数成员编译器则会报错。
let box: Box = {height: 5, width: 6, scale: 10};

// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。 同时需要注意，当接口 A与后来的接口A合并时，后面的接口具有更高的优先级。
interface Document {
  createElement(tagName: any): Element;
}
interface Document {
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: "canvas"): HTMLCanvasElement;
}

interface Document {
  createElement(tagName: "canvas"): HTMLCanvasElement;
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: any): Element;
}

// 合并命名空间
namespace Animals {
  export class Zebra { }
}

namespace Animals {
  export interface Legged { numberOfLegs: number; }
  export class Dog { }
}

// 非导出成员是如何处理的。 非导出成员仅在其原有的（合并前的）命名空间内可见。
namespace Animal {
  let haveMuscles = true;

  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}

namespace Animal {
  export function doAnimalsHaveMuscles() {
    // return haveMuscles;  // <-- error, haveMuscles is not visible here
  }
}
// 命名空间可以与其它类型的声明进行合并。 只要命名空间的定义符合将要合并类型的定义。合并结果包含两者的声明类型。 TypeScript使用这个功能去实现一些JavaScript里的设计模式。
// 合并命名空间和类
// 可以实现内部类的模式
class Album {
  label: Album.AlbumLabel;
}
namespace Album {
  export class AlbumLabel { }
}

// 创建一个函数稍后扩展它增加一些属性也是很常见的
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let suffix = "";
  export let prefix = "Hello, ";
}

alert(buildLabel("Sam Smith"));

// 也可以扩展枚举型
enum Color {
  red = 1,
  green = 2,
  blue = 4
}

namespace Color {
  export function mixColor(colorName: string) {
    if (colorName == "yellow") {
      return Color.red + Color.green;
    }
    else if (colorName == "white") {
      return Color.red + Color.green + Color.blue;
    }
    else if (colorName == "magenta") {
      return Color.red + Color.blue;
    }
    else if (colorName == "cyan") {
      return Color.green + Color.blue;
    }
  }
}
