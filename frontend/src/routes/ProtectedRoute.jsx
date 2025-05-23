import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!user || !allowedRoles.includes(user.tipo)) {
    return <Navigate to="/signin" replace />;
  }
  
  return children;
};

export default ProtectedRoute;