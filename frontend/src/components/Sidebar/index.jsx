import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

const Sidebar = ({ userType }) => {
  const navigate = useNavigate();

  const alunoItems = [
    { label: 'Visualizar Treinos', path: '/aluno/treinos' },
  ];

  const instrutorItems = [
    { label: 'Treinos', path: '/instrutor/cadastrarTreino' },
    { label: 'Exercícios', path: '/instrutor/cadastrarExercicio' },
    { label: 'Alunos', path: '/instrutor/acompanharAluno' }
  ];

    const adminItems = [
    { label: 'Gerir Alunos', path: '/admin/home' },
    { label: 'Gerir Instrutores', path: '/admin/home' },
    { label: 'Visualizar Relatórios', path: '/admin/home' }
  ];

  let items = [];
  if (userType === 'aluno') {
    items = alunoItems;
  } else if (userType === 'instrutor') {
    items = instrutorItems;
  } else if (userType === 'admin') {
    items = adminItems;
  }

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