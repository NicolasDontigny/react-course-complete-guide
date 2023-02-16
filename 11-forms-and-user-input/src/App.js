import BasicForm from 'components/BasicForm';
import SignUpForm from 'components/SignUp/SignUpForm';

function App() {
  return (
    <div className='app'>
      <SignUpForm></SignUpForm>
      <BasicForm></BasicForm>
      {/* <SimpleInput /> */}
    </div>
  );
}

export default App;
