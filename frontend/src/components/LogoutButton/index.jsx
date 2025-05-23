import { useNavigate } from 'react-router-dom';
import * as C from './styles';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    navigate('/signin');
  };

  return (
    <C.LogoutButtonStyled onClick={handleLogout}>
      Sair
    </C.LogoutButtonStyled>
  );
};

export default LogoutButton;