import React, { useEffect, useState } from 'react';

export const AlertContext = React.createContext({
  alert: null,
  setAlertHandler: (_alert) => {},
});

// export default AlertContext;

const AlertProvider = (props) => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) return;

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  const setAlertHandler = (alert) => {
    setAlert(alert);
  };

  const alertContext = {
    alert,
    setAlertHandler,
  };

  return <AlertContext.Provider value={alertContext}>{props.children}</AlertContext.Provider>;
};

export default AlertProvider;
