const redux = require('redux');

// Inputs: old state + dispatched action
// Output: new state object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// console.log('latestState: ', store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('latestState: ', latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: '' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
