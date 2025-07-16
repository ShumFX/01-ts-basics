function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Вызовы с явной типизацией дженериков:
console.log(getFirstElement<number>([1, 2, 3]));           // 1 (тип: number | undefined)
console.log(getFirstElement<string>(["a", "b", "c"]));     // "a" (тип: string | undefined)
console.log(getFirstElement<boolean>([true, false, true])); // true (тип: boolean | undefined)

// TypeScript может автоматически определить тип:
console.log(getFirstElement([1, 2, 3]));           // 1 (тип: number | undefined)
console.log(getFirstElement(["a", "b", "c"]));     // "a" (тип: string | undefined)
console.log(getFirstElement([true, false, true])); // true (тип: boolean | undefined)

// Примеры с пустыми массивами:
console.log(getFirstElement<number>([]));    // undefined (тип: number | undefined)
console.log(getFirstElement<string>([]));    // undefined (тип: string | undefined)

// Работа с объектами:
interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

const firstUser = getFirstElement<User>(users); // тип: User | undefined
console.log(firstUser?.name); // "John"

// Для массивов смешанных типов нужно явно указать union type:
const mixedArray: (string | number)[] = ["hello", 42, "world"];
console.log(getFirstElement<string | number>(mixedArray)); // "hello" (тип: string | number | undefined)

