import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from '../core/reducers/reducer';

import AddTodo from './addTodo';
import TodosList from './todosList';

export default class App extends React.Component {

  static createStore() {
    return createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  render() {
    return(
      <Provider store={App.createStore()}>
        <div className="container">
          <AddTodo />
          <TodosList />
        </div>
      </Provider>
    );
  };
}