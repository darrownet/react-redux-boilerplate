import * as types from '../actions/action-types';

import { generateUniqueId } from '../services/generate-unique-id';

let initialState = {
  todos: []
};

const itemAdded = (todos, item) => {
  let newTodos = [...todos];
  item.id = generateUniqueId.generate(todos.length);
  newTodos.push(item);
  return newTodos;
};

const itemDeleted = (todos, id) => {
  let newTodos = [...todos];
  let todoIndex = newTodos.findIndex(item => item.id === id);
  newTodos.splice(todoIndex, 1);
  return newTodos;
};

export function reducer(state = initialState, action){

  switch(action.type){

    case types.ADD_ITEM:
      return {...state, todos:itemAdded(state.todos, action.value)};

    case types.DELETE_ITEM:
      return {...state, todos:itemDeleted(state.todos, action.value)};

    default:
      return state;
  }

}