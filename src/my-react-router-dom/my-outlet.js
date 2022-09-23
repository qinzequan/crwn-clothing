import { useContext } from 'react';
import { RouteContext } from './context';

const MyOutlet = () => {
  const e = useContext(RouteContext);
  console.log(e);
  return e;
};

export default MyOutlet;
