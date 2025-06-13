import { useEffect, useState } from 'react';
import * as C from './styles';
import Layout from '../../../components/Layout';
import { instrutorService, usuarioService } from '../../../../services/api';
import UsuarioCard from '../../../components/UsuarioCard';
import UsuarioModal from '../../../components/UsuarioModal';
import Swal from 'sweetalert2';

function GerirInstrutor() {
  const [instrutores, setInstrutores] = useState([]);
  const [modal, setModal] = useState(null); 

  
  useEffect(() => {
    carregarInstrutores();
  }, []);

  const carregarInstrutores = async () => {
    try {
      const listaInstrutores = await instrutorService.buscarTodos();
      
      // Busca os dados completos de cada usuário
      const instrutoresCompletos = await Promise.all(
        listaInstrutores.map(async (instrutor) => {
          const usuario = await usuarioService.getUsuario(instrutor.usuario_id);
          return { ...instrutor, ...usuario };
        })
      );
      
      setInstrutores(instrutoresCompletos);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: error.message,
        confirmButtonText: 'OK'
      });
    }
  };

  const handleEditar = (instrutor) => {
    setModal({ tipo: 'editar', usuario: instrutor });
  };

  return (
    <Layout userType="admin">
      <C.Container>
        <C.Header>
          <h1>Gerir Instrutores</h1>
        </C.Header>

        <C.Lista>
          {instrutores.map((instrutor) => (
            <UsuarioCard 
              key={instrutor.id} 
              usuario={instrutor} 
              onEditar={() => handleEditar(instrutor)} 
            />
          ))}
        </C.Lista>

        {modal && (
          <UsuarioModal
            tipo={modal.tipo}
            usuario={modal.usuario}
            onClose={() => setModal(null)}
            onRefresh={carregarInstrutores}
          />
        )}
      </C.Container>
    </Layout>
  );
}

export default GerirInstrutor;