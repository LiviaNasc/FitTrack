import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import * as C from './styles';

const Header = () => {
   
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const handleLogoClick = () => {
    if (!user) {
      navigate('/signin'); 
      return;
    }
    switch(user.tipo) {
      case 'admin':
        navigate('/admin/home');
        break;
      case 'instrutor':
        navigate('/instrutor/home');
        break;
      case 'aluno':
        navigate('/aluno/home');
        break;
    }
  };

  return (
    <C.HeaderContainer>
      <C.Logo onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        FitTrack
      </C.Logo>
    </C.HeaderContainer>
  );
};

export default Header;