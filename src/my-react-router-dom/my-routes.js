import { useContext } from 'react';
import { PathContext, RouteContext } from './context';

const MyRoutes = ({ children }) => {
  const v = useContext(PathContext);
  const p = [children].flat().find(r => r.props.path === v)?.props;
  return <RouteContext.Provider value={p?.children?.props?.element}>{p?.element}</RouteContext.Provider>;
};

export default MyRoutes;
