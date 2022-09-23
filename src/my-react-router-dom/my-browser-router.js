import React, { useState, useEffect } from 'react';

import { PathContext } from './context';

const MyBrowserRouter = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  return <PathContext.Provider value={path}>{children}</PathContext.Provider>;
};

export default MyBrowserRouter;
