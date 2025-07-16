function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then(result => console.log(result)); // result имеет тип string

// Дополнительные примеры для демонстрации типизации:

// Функция с числовым промисом
function getNumber(): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 500);
  });
}

// Функция с промисом объекта
interface User {
  id: number;
  name: string;
}

function getUser(): Promise<User> {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 800);
  });
}

// Использование типизированных промисов
getMessage().then(result => {
  console.log(result.toUpperCase()); // TypeScript знает, что result это string
});

getNumber().then(result => {
  console.log(result * 2); // TypeScript знает, что result это number
});

getUser().then(result => {
  console.log(result.name); // TypeScript знает, что result это User
});

// Async/await также работает с типизацией
async function useMessages(): Promise<void> {
  const message = await getMessage(); // message имеет тип string
  const number = await getNumber();   // number имеет тип number
  const user = await getUser();       // user имеет тип User
  
  console.log(message, number, user.name);
}

// Вызываем функцию для демонстрации
useMessages();