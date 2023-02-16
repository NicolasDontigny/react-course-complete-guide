import { useState } from 'react';

const useInput = (props) => {
  const { validate, classes, name, label, hasSubmitted, defaultValue, errorMessage } = props;

  const [value, setValue] = useState(defaultValue || '');
  const [isTouched, setIsTouched] = useState(hasSubmitted);

  const isValid = validate(value);
  const showError = !isValid && isTouched;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = (_event) => {
    setIsTouched(true);
  };

  let controlClass = classes.control;
  if (showError) {
    controlClass += ` ${classes.invalid}`;
  }

  const inputField = (
    <div className={controlClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        id={name}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      {showError && <p className={classes.errorText}>{errorMessage || 'Please enter a valid value'}</p>}
    </div>
  );

  return {
    value,
    isValid,
    inputField,
  };
};

export default useInput;
