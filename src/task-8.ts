import axios from "axios";

// Интерфейс для описания объекта поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// Типизированная функция для получения постов
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

// Использование типизированной функции
fetchPosts().then((posts) => {
  console.log(posts[0].title); 
  console.log(posts[0].id);    
  console.log(posts[0].body);  
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
  const response = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.data;
}

// Использование функции для получения конкретного поста
fetchPost(1).then((post) => {
  console.log(`Post title: ${post.title}`);
  console.log(`Post body: ${post.body}`);
});

// Запуск примера
fetchAndDisplayPosts();