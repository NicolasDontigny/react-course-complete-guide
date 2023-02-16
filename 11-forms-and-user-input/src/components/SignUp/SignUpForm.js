import useForm from 'hooks/use-form';
import { signupForm } from 'utils/create-form-field-config';
import classes from './SignUpForm.module.css';

const SignUpForm = () => {
  const { renderFormInputs } = useForm(signupForm);

  return (
    <form className={classes.signupForm}>
      <h1>Sign Up</h1>

      {renderFormInputs()}

      <button type='submit'>Submit</button>
    </form>
  );
};

export default SignUpForm;
