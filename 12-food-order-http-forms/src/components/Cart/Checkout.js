import useInput from 'hooks/use-input';
import { useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    value: nameValue,
    isValid: nameIsValid,
    inputField: nameInput,
  } = useInput({
    validate: (name) => name.trim() !== '',
    classes,
    name: 'name',
    label: 'Your Name',
    hasSubmitted,
  });
  const {
    value: streetValue,
    isValid: streetIsValid,
    inputField: streetInput,
  } = useInput({
    validate: (street) => street.trim() !== '',
    classes,
    name: 'street',
    label: 'Street',
  });
  const {
    value: postalCodeValue,
    isValid: postalCodeIsValid,
    inputField: postalCodeInput,
  } = useInput({
    validate: (postalCode) => postalCode.trim() !== '',
    classes,
    name: 'postal',
    label: 'Postal Code',
  });
  const {
    value: cityValue,
    isValid: cityIsValid,
    inputField: cityInput,
  } = useInput({
    validate: (city) => city.trim() !== '',
    classes,
    name: 'city',
    label: 'City',
    errorMessage: 'Please enter a city',
  });

  const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();
    setHasSubmitted(true);

    if (!formIsValid) return;

    setHasSubmitted(false);

    const clientData = {
      name: nameValue,
      street: streetValue,
      postalCode: postalCodeValue,
      city: cityValue,
    };
    props.onConfirm(clientData);
  };

  return (
    <form onSubmit={confirmHandler}>
      {nameInput}
      {streetInput}
      {postalCodeInput}
      {cityInput}
      <div className={classes.actions}>
        <button
          type='button'
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          disabled={!formIsValid}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
