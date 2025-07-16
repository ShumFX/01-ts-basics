function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Вызовы с явной типизацией дженериков:
console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["a", "b", "c"]));
console.log(getFirstElement<boolean>([true, false, true]));

// Все вызовы с явной типизацией дженериков:
console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["a", "b", "c"]));
console.log(getFirstElement<boolean>([true, false, true]));

// Примеры с пустыми массивами:
console.log(getFirstElement<number>([]));
console.log(getFirstElement<string>([]));

// Работа с объектами:
interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

const firstUser = getFirstElement<User>(users);
console.log(firstUser?.name);

// Для массивов смешанных типов:
const mixedArray: (string | number)[] = ["hello", 42, "world"];
console.log(getFirstElement<string | number>(mixedArray));