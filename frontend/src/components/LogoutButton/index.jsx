import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import * as C from './styles';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); 

  const handleLogout = () => {
    logout(); 
    navigate('/signin');
  };

  return (
    <C.LogoutButtonStyled onClick={handleLogout}>
      Sair
    </C.LogoutButtonStyled>
  );
};

export default LogoutButton;