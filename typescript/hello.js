function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Xcat Liu';
// let user = [1, 2, 3];
console.log(sayHello(user));
var o = {
    oa: "foo",
    ob: 12,
    oc: "bar"
};
// 别名 a as newName1
// let { a: newName1, b: newName2 } = o;
// 指明类型
var oa = o.oa, ob = o.ob;
// 默认值
// 默认值可以让你在属性为 undefined 时使用缺省值：
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a, b);
}
keepWholeObject({ a: 'string' });
console.log('keepWholeObject');
// 解构也能用于函数声明。 看以下简单的情况：
// type C = { a: string, b?: number }
// function f ({ a, b }: C): void {
//     // ...
// }
// 解构默认值 =
function f(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    return "a: " + a + " b: " + b;
}
console.log(f()); // ok, default to { a: "", b: 0 }
console.log(f({ a: 'yes' }));
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 20 Object' };
printLabel(myObj);
// () : 是返回的类型
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare = createSquare({ color: "red", width: 100 })
var mySquare = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
a = ro;
var mySearch;
mySearch = function (src, sub) {
    console.log(src, sub);
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearch('sssddf', 'shjjjs'));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + ' of ' + pickedCard.suit);
