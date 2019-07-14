import React from 'react';

import { connect } from 'react-redux';
import { actions } from "../core/actions/action-creators";

class TodosList extends React.Component {

  deleteItem = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    return(
      <ul>
        {this.props.todos.map((elem) => {
          return (
            <li key={elem.id} className="todo-item">
              <span>{elem.value}</span>
              <button onClick={() => this.deleteItem(elem.id)} className="todo-item-close">X</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {dispatch(actions.deleteItem(id))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
