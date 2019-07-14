import * as types from './action-types.js';

export let actions = {

  addItem: function (value) {
    return {
      type: types.ADD_ITEM,
      value
    }
  },

  deleteItem: function (value) {
    return {
      type: types.DELETE_ITEM,
      value
    }
  }

};