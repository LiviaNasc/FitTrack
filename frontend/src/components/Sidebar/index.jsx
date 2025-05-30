import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

const Sidebar = ({ userType }) => {
  const navigate = useNavigate();

  const alunoItems = [
    { label: 'Visualizar Treinos', path: '/aluno/treinos' },
    { label: 'Registrar Progresso', path: '/aluno/home' },
    { label: 'Monitorar Medidas', path: '/aluno/home' }
  ];

  const instrutorItems = [
    { label: 'Cadastrar Treino', path: '/instrutor/cadastrarTreino' },
    { label: 'Cadastrar Exercício', path: '/instrutor/cadastrarExercicio' }
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