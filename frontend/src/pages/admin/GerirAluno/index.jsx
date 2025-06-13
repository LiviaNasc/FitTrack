import { useEffect, useState } from 'react';
import * as C from './styles';
import Layout from '../../../components/Layout';
import { alunoService } from '../../../../services/api';
import UsuarioCard from '../../../components/UsuarioCard';
import UsuarioModal from '../../../components/UsuarioModal';

function GerirAluno() {
  const [alunos, setAlunos] = useState([]);
  const [modal, setModal] = useState(null); 

  
  useEffect(() => {
    carregarAlunos();
  }, []);

  const carregarAlunos = async () => {
    try {
      const lista = await alunoService.buscarTodos();
      setAlunos(lista);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEditar = (aluno) => {
    setModal({ tipo: 'editar', usuario: aluno });
  };



  return (
    <Layout userType="admin">
      <C.Container>
        <C.Header>
          <h1>Gerir Alunos</h1>
        </C.Header>

        <C.Lista>
          {alunos.map((aluno) => (
            <UsuarioCard key={aluno.id} usuario={aluno} onEditar={() => handleEditar(aluno)} />
          ))}
        </C.Lista>

        {modal && (
          <UsuarioModal
            tipo={modal.tipo}
            usuario={modal.usuario}
            onClose={() => setModal(null)}
            onRefresh={carregarAlunos}
          />
        )}
      </C.Container>
    </Layout>
  );
}

export default GerirAluno;
