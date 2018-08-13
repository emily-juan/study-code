// 泛型 适用于多个类型 <>
function echo(arg) {
    return arg;
}
// 如果想要输入类型和返回类型一致时
// 使用类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identify(arg) {
    return arg;
}
var output = identify('mystring');
console.log(output);
// 泛型变量
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function identity(arg) {
    return arg;
}
var myIdentity = identity;
console.log(myIdentity('SDF'));
// 泛型类 泛型类使用（<>）括起泛型类型，跟在类名后面
var GenerricNumber = /** @class */ (function () {
    function GenerricNumber() {
    }
    return GenerricNumber;
}());
var myGenericNumber = new GenerricNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(4, 9));
var pets = new Array(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var pet in pets) {
    console.log(pet); // "species" why
}
for (var _i = 0, pets_1 = pets; _i < pets_1.length; _i++) {
    var pet = pets_1[_i];
    console.log(pet); // "Cat", "Dog", "Hamster"
}
