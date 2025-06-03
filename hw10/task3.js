async function fetchTodoAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
  } catch (error) {
    console.error('Error todo:', error);
    throw error;
  }
}
async function fetchUserAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return await response.json();
  } catch (error) {
    console.error('Error user:', error);
    throw error;
  }
}
(async () => {
  try {
    const [todo, user] = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
    console.log('Promise.all results (async/await):');
    console.log('Todo:', todo);
    console.log('User:', user);
  } catch (error) {
    console.error('Error Promise.all (async/await):', error);
  }
})();
(async () => {
  try {
    const result = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
    console.log('Promise.race results (async/await):');
    console.log(result);
  } catch (error) {
    console.error('Error Promise.race (async/await):', error);
  }
})();