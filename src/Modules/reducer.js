const initialState = {
  todos: []
}

function rootReducer(state = initialState, action) {

  if (action.type === 'GET_TODOS') {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload)
    })
  }
  return state;
}

export default rootReducer;
