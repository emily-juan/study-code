// 从ECMAScript 2015开始，JavaScript引入了模块的概念。TypeScript也沿用这个概念。
// 模块在其自身的作用域里执行，而不是在全局作用域里；
// 外部不可见，除非用 export 导出，也可以用 import 导入
// 模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。

// 模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
  }
}

// 不必要的命名空间
export namespace Shapes {
  export class Triangle { /* ... */ }
  export class Square { /* ... */ }
}

// import * as shapes from "./shapes";
// let t = new shapes.Shapes.Triangle(); // shapes.Shapes?
