// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 40 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Tomek" }, "name"));

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Tomcio");
textStorage.addItem("Gosiak");
textStorage.removeItem("Tomcio");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
const combineStorage = new DataStorage<number | string>();

// Problem z pracą z obiektami polega na tym że indexOf w przypadku Gosi sprawdzi referencję  i nie usunie Gosi. Taki kod powinien pracować tylko z number | string | boolean
// const objStorage = new DataStorage<object>();
// const tomekObj = { name: "Tomek" };
// objStorage.addItem(tomekObj);
// objStorage.addItem({ name: "Gosia" });
// //...
// objStorage.removeItem(tomekObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Tomek"];
// names.push("Tomek"); !!!ERROR!!!
// names.pop("Max");  !!!ERROR!!!
