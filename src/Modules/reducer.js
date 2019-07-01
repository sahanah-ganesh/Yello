const initialState = {
  todos: [],
  completed: []
}

function rootReducer(state = initialState, action) {

  if (action.type === 'GET_TODOS') {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload)
    })
  }

  if (action.type === 'GET_COMPLETED') {
    return Object.assign({}, state, {
      completed: state.completed.concat(action.payload)
    })
  }

  if (action.type === 'CREATE_TODO') {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload)
    })
  }

  if (action.type === 'CREATE_COMPLETED') {
    return Object.assign({}, state, {
      completed: state.completed.concat(action.payload)
    })
  }

  if (action.type === 'DELETE_TODO') {
    return Object.assign({}, state, {
      todos: state.todos.filter((id) => id !== action.id)
    })
  }

  return state;
}

export default rootReducer;
