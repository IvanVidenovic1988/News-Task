import { Navigate } from 'react-router-dom'
import { ROUTES } from '../config/consts';
import { useAppSelector } from '../shared/redux/hooks';

type ChildrenProps = {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ChildrenProps) => {
  const token = useAppSelector((state) => state.login.token)

  if (!token) {
    return <Navigate to={ROUTES.login} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute