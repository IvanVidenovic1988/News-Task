import { Navigate } from 'react-router-dom'
import { ROUTES } from '../config/consts';
import { useAppSelector } from '../shared/redux/hooks';

type ChildrenProps = {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ChildrenProps) => {
  const user = useAppSelector((state) => state.login.user)

  if (!user) {
    return <Navigate to={ROUTES.login} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute