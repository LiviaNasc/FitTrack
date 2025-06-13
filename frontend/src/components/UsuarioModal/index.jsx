import { useState } from 'react';
import * as C from './styles'; 
import { instrutorService, alunoService } from '../../../services/api';
import Swal from 'sweetalert2';

function UsuarioModal({ tipo, usuario, onClose, onRefresh }) {
  const isEdicao = tipo === 'editar';
  const [formData, setFormData] = useState(usuario || {
    nome: '',
    email: '',
    cpf: '',
    bloqueado: false,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSalvar = async () => {
    try {
      const service = usuario.tipo === 'instrutor' ? instrutorService : alunoService;
      await service.atualizarUsuario(usuario.id, formData);
      
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Usuário atualizado com sucesso',
        timer: 1500,
        showConfirmButton: false
      });
      
      onRefresh();
      onClose();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: error.message,
        confirmButtonText: 'OK'
      });
    }
  };

  const handleToggleBloqueio = async () => {
    try {
      const service = usuario.tipo === 'instrutor' ? instrutorService : alunoService;
      const novoEstado = !formData.bloqueado;
      
      const result = await Swal.fire({
        title: 'Confirmação',
        text: `Deseja realmente ${novoEstado ? 'bloquear' : 'desbloquear'} este usuário?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar'
      });

      if (result.isConfirmed) {
        await service.atualizarUsuario(usuario.id, { bloqueado: novoEstado });
        
        await Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: `Usuário ${novoEstado ? 'bloqueado' : 'desbloqueado'} com sucesso`,
          timer: 1500,
          showConfirmButton: false
        });
        
        onRefresh();
        onClose();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: error.message,
        confirmButtonText: 'OK'
      });
    }
  };

  const handleExcluir = async () => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: "Esta ação não poderá ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        const service = usuario.tipo === 'instrutor' ? instrutorService : alunoService;
        await service.deletarUsuario(usuario.id);
        
        await Swal.fire({
          icon: 'success',
          title: 'Excluído!',
          text: 'Usuário removido com sucesso',
          timer: 1500,
          showConfirmButton: false
        });
        
        onRefresh();
        onClose();
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: error.message,
          confirmButtonText: 'OK'
        });
      }
    }
  };

  return (
    <C.Overlay>
      <C.Modal>
        <h2>{isEdicao ? 'Editar Usuário' : 'Novo Usuário'}</h2>

        <label>Nome</label>
        <input name="nome" value={formData.nome} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />

        <label>CPF</label>
        <input name="cpf" value={formData.cpf} onChange={handleChange} />

        <C.ButtonGroup>
          <button onClick={handleSalvar}>Salvar</button>
          {isEdicao && (
            <>
              <button onClick={handleToggleBloqueio}>
                {formData.bloqueado ? 'Desbloquear' : 'Bloquear'}
              </button>
              <button onClick={handleExcluir}>Excluir</button>
            </>
          )}
          <button onClick={onClose} className="cancelar">Cancelar</button>
        </C.ButtonGroup>
      </C.Modal>
    </C.Overlay>
  );
}

export default UsuarioModal;