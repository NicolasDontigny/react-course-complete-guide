import { redirect } from 'react-router-dom';

// No logout page, only used for action
export const logoutAction = () => {
  localStorage.removeItem('token');
  return redirect('/');
};
