import Button from '../UI/Button';
import React, { useState, useRef } from 'react';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState(0);
  const [validUsername, setValidUsername] = useState(false);
  const [validAge, setValidAge] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (name.trim() === '') {
      setValidUsername(false);
    } else {
      setValidUsername(true);
    }

    if (+age <= 0) {
      setValidAge(false);
    } else {
      setValidAge(true);
    }

    if (name.trim() === '' || +age <= 0) {
      setShowErrorModal(true);
      return;
    }

    const user = {
      id: Math.random(),
      username: name,
      age: age,
    };
    props.onAddUser(user);
    // setEnteredUsername('');
    // setEnteredAge(0);
    nameInputRef.current.value = '';
    ageInputRef.current.value = 0;
    setValidUsername(false);
    setValidAge(false);
  };

  // const usernameEnteredHandler = (event) => {
  //   setEnteredUsername(event.target.value);

  //   if (event.target.value.trim() === '') {
  //     setValidUsername(false);
  //   } else {
  //     setValidUsername(true);
  //   }
  // };

  // const ageEnteredHandler = (event) => {
  //   setEnteredAge(event.target.value);

  //   if (+event.target.value <= 0) {
  //     setValidAge(false);
  //   } else {
  //     setValidAge(true);
  //   }
  // };

  const confirmModalHandler = () => {
    console.log('handler');
    setShowErrorModal(false);
  };

  return (
    // <Wrapper>
    // <React.Fragment></React.Fragment>
    <>
      {showErrorModal && (
        <ErrorModal
          title='Invalid'
          onConfirm={confirmModalHandler}
        >
          Please leave valid age and username
        </ErrorModal>
      )}
      <form
        onSubmit={addUserHandler}
        className={styles.input}
      >
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          className={validUsername ? '' : styles.invalid}
          // value={enteredUsername}
          // onChange={usernameEnteredHandler}
          ref={nameInputRef}
        />

        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          className={validAge ? '' : styles.invalid}
          // value={enteredAge}
          // onChange={ageEnteredHandler}
          ref={ageInputRef}
        />

        <Button type='submit'>Add User</Button>
      </form>
    </>
  );
};

export default AddUser;
