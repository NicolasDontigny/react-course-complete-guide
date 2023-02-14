import React, { useEffect, useState, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return {
    value: '',
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length >= 6,
    };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length >= 6 };
  }
  return {
    value: '',
    isValid: false,
  };
};

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailValid && passwordValid);
      console.log('VALIDATE');
    }, 1000);

    // Cleanup functions triggers before the useEffect main function, but NOT the first time the component is rendered
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(emailState.isValid && enteredEmail.includes('@'));
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
    // setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(emailState.value, passwordState.value);
    } else if (!emailValid) {
      emailInputRef.current.focus();
    } else if (!passwordValid) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          isValid={emailState.isValid}
          type='email'
          id='email'
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        >
          E-Mail
        </Input>

        <Input
          ref={passwordInputRef}
          isValid={passwordState.isValid}
          type='password'
          id='password'
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        >
          Password
        </Input>

        <div className={classes.actions}>
          <Button
            type='submit'
            className={classes.btn}
            // disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
