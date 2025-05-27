import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/signin" />;
  if (!allowedRoles.includes(user.tipo)) return <Navigate to="/signin" />;

  return children;
}

export default ProtectedRoute;