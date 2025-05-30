import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

const Sidebar = ({ userType }) => {
  const navigate = useNavigate();

  const alunoItems = [
    { label: 'Visualizar Treinos', path: '/aluno/home' },
    { label: 'Registrar Progresso', path: '/aluno/progresso' },
    { label: 'Monitorar Medidas', path: '/aluno/medidas' }
  ];

  const instrutorItems = [
    { label: 'Cadastrar Treino', path: '/instrutor/home' },
    { label: 'Acompanhar Alunos', path: '/instrutor/acompanhar' }
  ];

  const items = userType === 'aluno' ? alunoItems : instrutorItems;

  return (
    <C.SidebarContainer>
      <C.NavList>
        {items.map((item, index) => (
          <C.NavItem key={index} onClick={() => navigate(item.path)}>
            {item.label}
          </C.NavItem>
        ))}
      </C.NavList>
      <C.LogoutContainer>
        <LogoutButton />
      </C.LogoutContainer>
    </C.SidebarContainer>
  );
};

export default Sidebar;