// @ts-nocheck
import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      ...state,
      value: action.value,
    };
  } else if (action.type === 'BLUR') {
    return {
      ...state,
      isTouched: true,
    };
  } else if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false,
    };
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(inputState.value);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
    // setEnteredValue('');
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: enteredValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
