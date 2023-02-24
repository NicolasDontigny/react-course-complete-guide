import { redirect } from 'react-router-dom';

export const getAuthToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration <= 0) {
    return 'EXPIRED';
  }

  return token;
};

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  // returns value in milliseconds
  return duration;
};

export const tokenLoader = () => getAuthToken();

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth?mode=login');
  }

  // Return null to avoid errors
  return null;
};
