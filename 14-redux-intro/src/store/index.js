import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Redux toolkit clones automatically the state, never modifies it, so you cannot mutate the state by error
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    // Action creator method, returns an action object
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         counter: state.counter + action.value,
//       };
//     case 'DECREMENT':
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case 'TOGGLE_COUNTER':
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterSlice.reducer);

// Can use single reducer or object of reducers
export const store = configureStore({
  reducer: counterSlice.reducer,
  // reducer: {
  //   counter: counterSlice.reducer,
  // },
});

export const counterActions = counterSlice.actions;

// export default store;
