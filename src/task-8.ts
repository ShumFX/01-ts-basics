// Интерфейс для описания объекта поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// Типизированная функция для получения постов (с использованием fetch)
async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data: Post[] = await response.json();
  return data;
}

// Использование типизированной функции
fetchPosts().then((posts) => {
  console.log(posts[0].title); // TypeScript знает, что posts это Post[]
  console.log(posts[0].id);    // TypeScript знает о свойстве id
  console.log(posts[0].body);  // TypeScript знает о свойстве body
});

// Дополнительные примеры с обработкой ошибок и async/await
async function fetchAndDisplayPosts(): Promise<void> {
  try {
    const posts = await fetchPosts();
    
    // TypeScript предоставляет автокомплит для методов массива
    posts.forEach(post => {
      console.log(`Post ${post.id}: ${post.title}`);
    });
    
    // Фильтрация постов
    const shortPosts = posts.filter(post => post.title.length < 20);
    console.log(`Found ${shortPosts.length} short posts`);
    
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Функция для получения конкретного поста
async function fetchPost(id: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data: Post = await response.json();
  return data;
}

// Использование функции для получения конкретного поста
fetchPost(1).then((post) => {
  console.log(`Post title: ${post.title}`);
  console.log(`Post body: ${post.body}`);
});

// Запуск примера
fetchAndDisplayPosts();