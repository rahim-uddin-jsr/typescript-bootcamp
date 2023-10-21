// __ Primitives types in typescripts

// & string type
const userName: string = "Rahim Uddin";

// & number type
const age: number = 125;

// & bool type
const isAdult: boolean = true;

// & null type
const a: null = null;

// & undefined type
let b: undefined;

// ### array types

const names: Array<string> = ["Raim", "karim"];
const names1: string[] = ["Raim", "karim"];

const ages: Array<number> = [10, 20, 30];
const ages1: number[] = [10, 20, 30];

// types include in functions

function add(num1: number = 0, num2: number = 0): number {
  return num1 + num2;
}
console.log("🚀 ~ file: index.ts:29 ~ add ~ add:", add(120, 20));

// with string
function sumIsBiggerThen20(num1: number = 0, num2: number = 0): string {
  const sum = num1 + num2;
  if (sum > 20) {
    return "sum is bigger then 20";
  } else {
    return "something went wrong";
  }
}

// ## union types

function printCarModel(model: number | string): void {
  console.log("My car model is " + model);
}

console.log(printCarModel(2063));
console.log(printCarModel("2063Y"));

// ## suppos we need to add some number and user want to give as a peramiter string or number
function pow(num1: string | number): undefined | number {
  if (typeof num1 === "number") {
    return num1 * num1;
  }
}

//### type alias

// primitive type alias
type userType = {
  uName: string;
  uId: string;
  age: number;
};

const userDataCollection: Array<userType> = [];

function setUserData(userData: userType): void {
  userDataCollection.push(userData);
  console.log(userDataCollection);
}

setUserData({ age: 25, uName: "Rahim", uId: "1" });

// union primitive type alias
type adminType = {
  name: string;
  uId: string | number;
  age: number;
  isAdmin: true;
  makeOnlyUser?: () => void; //optional type assertion
};

const printAdminData = (adminData: adminType): void => {
  console.log(adminData);
};

printAdminData({ age: 25, name: "Rahim", uId: "1", isAdmin: true });
printAdminData({ age: 25, name: "Rahim", uId: 14524, isAdmin: true });

// ### use inheritance in type alias

type InAdminDataTypes = userType & {
  isAdmin: boolean;
};
const admin: InAdminDataTypes = {
  age: 18,
  isAdmin: true,
  uId: "123",
  uName: "fsdf",
};

console.log(admin);

// ## Function type for callback functions

const addThenDivideBy2 = (
  num1: number,
  num2: number,
  add: Function,
  divide: Function
): void => {
  const sum = add(num1, num2);
  console.log("🚀 ~ file: index.ts:115 ~ sum:", sum);
  const remains = divide(num1, num2);
  console.log("🚀 ~ file: index.ts:116 ~ remains:", remains);
};

addThenDivideBy2(
  8,
  2,
  (a: number, b: number): number => a + b,
  (a: number, b: number): number => a / b
);

// ### interfaces types in typescript

interface carDetailTypes {
  model: string;
  brandName: string;
  price: string | number;
  colors: Array<string>;
  feature: {
    looks: string;
    mileages: string | number;
  };
}

const carDetails: carDetailTypes = {
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

// interface with inheritance
interface soledCarsTypes extends carDetailTypes {
  sold: boolean;
  soledPrice: string | number;
}

//#### difference between interface and type alias

// renaming primitive

type StringType = string;
type numberType = number;

// interface StringInterface=string;
// 'string' only refers to a type, but is being used as a value here.

// filed addition
// type alias can't be changed after declare

// type BikeType = {
//   make: string;
// };
// type BikeType = {
//   model: number;
// };

// interface can be also changes after declaration
interface IbikeType {
  make: string;
}
interface IbikeType {
  model: number;
}


