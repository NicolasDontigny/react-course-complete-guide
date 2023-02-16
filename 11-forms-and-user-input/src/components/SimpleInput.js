import useInput from 'hooks/use-input';
import React from 'react';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((name) => name.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email));

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={'form-control ' + (nameInputHasError && 'invalid')}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={'form-control ' + (emailInputHasError && 'invalid')}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className='error-text'>Email must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button
          type='submit'
          disabled={!formIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
