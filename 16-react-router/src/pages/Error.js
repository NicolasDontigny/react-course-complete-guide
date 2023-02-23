import MainNavigation from '../components/Layout/MainNavigation';

const ErrorPage = () => (
  <>
    <MainNavigation></MainNavigation>
    <main className='content'>
      <h1>404: An error occurred!</h1>
      <p>Could not find the requested page</p>
    </main>
  </>
);

export default ErrorPage;
