import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    console.log('state: ', state);
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [state, data]);

  return (
    // trigger an action, but not a route transition, like the default form element's action
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={classes.newsletter}
    >
      <input
        type='email'
        name='email'
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
