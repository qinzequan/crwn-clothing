import { useState, useEffect } from 'react';

const MyRoute = ({ path, element }) => {
  // const [pathname, setPathname] = useState(window.location.pathname);
  // useEffect(() => {
  //   const handler = () => {
  //     setPathname(window.location.pathname);
  //   };
  //   window.addEventListener('popstate', handler);
  //   return () => window.removeEventListener('popstate', handler);
  // }, []);
  // return window.location.pathname === path ? element : null;
  throw new Error('not in routes');
};

export default MyRoute;
