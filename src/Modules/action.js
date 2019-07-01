export function getTodos() {
  return function(dispatch) {
    return fetch('http://localhost:3004/todos')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'GET_TODOS', payload: json })
      });
  }
}

export function createTodo(todo) {
  return function(dispatch) {
    return fetch('http://localhost:3004/todos/', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
      .then(json => {
        dispatch({ type: 'CREATE_TODO', payload: json })
      });
  }
}

export function createCompleted(todo) {
  return function(dispatch) {
    return fetch('http://localhost:3004/completed/', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
      .then(json => {
        dispatch({ type: 'CREATE_COMPLETED', payload: json })
      });
  }
}

export function deleteTodo(todo) {
  return function(dispatch) {
    return fetch(`http://localhost:3004/todos/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
      .then(json => {
        dispatch({ type: 'DELETE_TODO', payload: json })
      });
  }
}

export function getCompleted() {
  return function(dispatch) {
    return fetch('http://localhost:3004/completed')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'GET_COMPLETED', payload: json })
      });
  }
}