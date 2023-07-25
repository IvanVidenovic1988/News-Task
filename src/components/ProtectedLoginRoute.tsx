import { Navigate } from 'react-router-dom'
import { ROUTES } from '../config/consts';
import { useAppSelector } from '../shared/redux/hooks';

type ChildrenProps = {
  children: JSX.Element;
}

const ProtectedLoginRoute = ({ children }: ChildrenProps) => {
  const token = useAppSelector((state) => state.login.token)

  if (token) {
    return <Navigate to={ROUTES.news} />;
  }

  return children;
};

export default ProtectedLoginRoute