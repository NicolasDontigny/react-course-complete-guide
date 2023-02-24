import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // No need to use useRouteLoaderData since we are already in 'root' route
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    } else if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
      // }, 1 * 60 * 60 * 1000);
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
