export function getTodos() {
  return function(dispatch) {
    return fetch('http://localhost:3004/todos')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'GET_TODOS', payload: json })
      });
  }
}