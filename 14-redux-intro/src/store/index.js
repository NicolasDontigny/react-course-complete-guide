import { createStore } from 'redux';

const counterReducer = (
  state = {
    counter: 0,
    showCounter: true,
  },
  action
) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  } else if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === 'SHOW_COUNTER') {
    return {
      ...state,
      showCounter: true,
    };
  } else if (action.type === 'HIDE_COUNTER') {
    return {
      ...state,
      showCounter: false,
    };
  } else if (action.type === 'TOGGLE_COUNTER') {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
