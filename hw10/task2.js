function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .catch(error => {
      console.error('Error todo:', error);
      throw error;
    });
}
function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .catch(error => {
      console.error('Error user:', error);
      throw error;
    });
}
Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log('Promise.all resluts:');
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch(error => {
    console.error('Error Promise.all:', error);
  });
Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log('Promise.race results:');
    console.log(result);
  })
  .catch(error => {
    console.error('Error Promise.race:', error);
  });