import useInput from 'hooks/use-input';
import React from 'react';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((firstName) => firstName.trim() !== '');

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((lastName) => lastName.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log('SUBMITTED!: ', { firstName: enteredFirstName, lastName: enteredLastName, email: enteredEmail });
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form
      onSubmit={formSubmissionHandler}
      autoComplete='off'
    >
      <div className='control-group'>
        <div className={`form-control ${firstNameHasError && 'invalid'}`}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && <p className='error-text'>First name must not be empty</p>}
        </div>
        <div className={`form-control ${lastNameHasError && 'invalid'}`}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && <p className='error-text'>Last name must not be empty</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasError && 'invalid'}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className='error-text'>Email must be valid format</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
