// __ Primitives types in typescripts
// & string type
var userName = "Rahim Uddin";
// & number type
var age = 125;
// & bool type
var isAdult = true;
// & null type
var a = null;
// & undefined type
var b;
// ### array types
var names = ["Raim", "karim"];
var names1 = ["Raim", "karim"];
var ages = [10, 20, 30];
var ages1 = [10, 20, 30];
// types include in functions
function add(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
console.log("🚀 ~ file: index.ts:29 ~ add ~ add:", add(120, 20));
// with string
function sumIsBiggerThen20(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    var sum = num1 + num2;
    if (sum > 20) {
        return "sum is bigger then 20";
    }
    else {
        return "something went wrong";
    }
}
// ## union types
function printCarModel(model) {
    console.log("My car model is " + model);
}
console.log(printCarModel(2063));
console.log(printCarModel("2063Y"));
// ## suppos we need to add some number and user want to give as a peramiter string or number
function pow(num1) {
    if (typeof num1 === "number") {
        return num1 * num1;
    }
}
var userDataCollection = [];
function setUserData(userData) {
    userDataCollection.push(userData);
    console.log(userDataCollection);
}
setUserData({ age: 25, uName: "Rahim", uId: "1" });
var printAdminData = function (adminData) {
    console.log(adminData);
};
printAdminData({ age: 25, name: "Rahim", uId: "1", isAdmin: true });
printAdminData({ age: 25, name: "Rahim", uId: 14524, isAdmin: true });
var admin = {
    age: 18,
    isAdmin: true,
    uId: "123",
    uName: "fsdf",
};
console.log(admin);
// ## Function type for callback functions
var addThenDivideBy2 = function (num1, num2, add, divide) {
    var sum = add(num1, num2);
    console.log("🚀 ~ file: index.ts:115 ~ sum:", sum);
    var remains = divide(num1, num2);
    console.log("🚀 ~ file: index.ts:116 ~ remains:", remains);
};
addThenDivideBy2(8, 2, function (a, b) { return a + b; }, function (a, b) { return a / b; });
var carDetails = {
    brandName: "Toyota",
    colors: ["black", "white"],
    model: "8662",
    price: "150000 TK",
    feature: {
        looks: "good",
        mileages: "620 km/hours",
    },
};
console.log("🚀 ~ file: index.ts:151 ~ carDetails:", carDetails);
