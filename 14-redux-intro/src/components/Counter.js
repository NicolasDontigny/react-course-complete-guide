import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';
// import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: 'INCREMENT', value });
    dispatch(counterActions.increment());
  };
  const increaseHandler = (value) => {
    // dispatch({ type: 'INCREMENT', value });
    dispatch(counterActions.increase(value)); // { type: SOME_UNIQUE_INDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    // dispatch({ type: 'DECREMENT' });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'TOGGLE_COUNTER' });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increment 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// CLASS-BASED IMPLEMENTATION

// export class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({ type: 'INCREMENT' }),
//   decrement: () => dispatch({ type: 'DECREMENT' }),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
