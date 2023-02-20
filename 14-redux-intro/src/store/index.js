import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';

// Can use single reducer or object of reducers
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

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
