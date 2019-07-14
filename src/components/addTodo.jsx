import React from 'react';

import { connect } from 'react-redux';
import { actions } from '../core/actions/action-creators.js';

class AddTodo extends React.Component {

  onAddTodo = (evt) => {
    evt.preventDefault();
    this.props.addItem({
      value: evt.target.elements.todoField.value
    });
    evt.target.elements.todoField.value = '';
  };

  render() {
    return(
      <form onSubmit={this.onAddTodo}>
        <input name="todoField" />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (value) => {dispatch(actions.addItem(value))}
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);
