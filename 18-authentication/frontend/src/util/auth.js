export const getAuthToken = () => localStorage.getItem('token');

export const tokenLoader = () => getAuthToken();
