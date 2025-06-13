import * as C from './styles';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import Layout from '../../../components/Layout';
import { useState, useEffect } from 'react';
import { medidasService } from '../../../../services/api';
import { useAuth } from '../../../context/AuthContext';

function AlunoMedidas() {
  const [medidas, setMedidas] = useState([]);
  const [novaMedida, setNovaMedida] = useState({
    data: new Date().toISOString().split('T')[0],
    peso: '',
    altura: '',
    cintura: '',
    quadril: '',
    peito: '',
    braco: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const alunoId = user?.id;

  useEffect(() => {
    const carregarMedidas = async () => {
      try {
        setIsLoading(true);
        const dados = await medidasService.listarMedidasPorAluno(alunoId);
        setMedidas(dados);
      } catch (err) {
        setError('Erro ao carregar medidas');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (alunoId) {
      carregarMedidas();
    }
  }, [alunoId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovaMedida({
      ...novaMedida,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setIsLoading(true);
      await medidasService.cadastrarMedida({
        aluno_id: alunoId,
        ...novaMedida
      });
      
      // Recarregar a lista de medidas
      const dados = await medidasService.listarMedidasPorAluno(alunoId);
      setMedidas(dados);
      
      // Resetar formulário
      setNovaMedida({
        data: new Date().toISOString().split('T')[0],
        peso: '',
        altura: '',
        cintura: '',
        quadril: '',
        peito: '',
        braco: ''
      });
    } catch (err) {
      setError('Erro ao cadastrar medida. Verifique os dados e tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

    const excluirMedida = async (id) => {
    const resultado = await Swal.fire({
        title: 'Deseja excluir este registro?',
        text: 'Essa ação não poderá ser desfeita.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, excluir',
        cancelButtonText: 'Não',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
    });

    if (resultado.isConfirmed) {
        try {
        await medidasService.excluirMedida(id);
        const novasMedidas = await medidasService.listarMedidasPorAluno(alunoId);
        setMedidas(novasMedidas);
        Swal.fire('Excluído!', 'O registro foi removido.', 'success');
        } catch (err) {
        console.error(err);
        Swal.fire('Erro', 'Não foi possível excluir a medida.', 'error');
        }
    }
    };


  return (
    <Layout userType="aluno">
      <C.Container>
        <C.Header>
          <h1>Medidas Corporais</h1>
          <p>Acompanhe sua evolução física</p>
        </C.Header>

        <C.FormContainer>
          <C.Form onSubmit={handleSubmit}>
            <C.FormTitle>Adicionar Novas Medidas</C.FormTitle>
            
            <C.FormGroup>
              <C.Label>Data</C.Label>
              <C.Input
                type="date"
                name="data"
                value={novaMedida.data}
                onChange={handleInputChange}
                required
              />
            </C.FormGroup>

            <C.FormRow>
              <C.FormGroup>
                <C.Label>Peso (kg)</C.Label>
                <C.Input
                  type="number"
                  name="peso"
                  value={novaMedida.peso}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  placeholder="Ex: 75.5"
                />
              </C.FormGroup>

              <C.FormGroup>
                <C.Label>Altura (cm)</C.Label>
                <C.Input
                  type="number"
                  name="altura"
                  value={novaMedida.altura}
                  onChange={handleInputChange}
                  min="0"
                  placeholder="Ex: 175"
                />
              </C.FormGroup>
            </C.FormRow>

            <C.FormRow>
              <C.FormGroup>
                <C.Label>Cintura (cm)</C.Label>
                <C.Input
                  type="number"
                  name="cintura"
                  value={novaMedida.cintura}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  placeholder="Ex: 85.5"
                />
              </C.FormGroup>

              <C.FormGroup>
                <C.Label>Quadril (cm)</C.Label>
                <C.Input
                  type="number"
                  name="quadril"
                  value={novaMedida.quadril}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  placeholder="Ex: 95.0"
                />
              </C.FormGroup>
            </C.FormRow>

            <C.FormRow>
              <C.FormGroup>
                <C.Label>Peito (cm)</C.Label>
                <C.Input
                  type="number"
                  name="peito"
                  value={novaMedida.peito}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  placeholder="Ex: 100.0"
                />
              </C.FormGroup>

              <C.FormGroup>
                <C.Label>Braço (cm)</C.Label>
                <C.Input
                  type="number"
                  name="braco"
                  value={novaMedida.braco}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  placeholder="Ex: 35.5"
                />
              </C.FormGroup>
            </C.FormRow>

            {error && <C.ErrorMessage>{error}</C.ErrorMessage>}

            <C.SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Salvando...' : 'Salvar Medidas'}
            </C.SubmitButton>
          </C.Form>
        </C.FormContainer>

        <C.MedidasContainer>
          <C.MedidasTitle>Histórico de Medidas</C.MedidasTitle>
          
          {isLoading && medidas.length === 0 ? (
            <C.LoadingMessage>Carregando...</C.LoadingMessage>
          ) : medidas.length === 0 ? (
            <C.EmptyMessage>Nenhuma medida registrada ainda.</C.EmptyMessage>
          ) : (
            <C.MedidasTable>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Peso (kg)</th>
                  <th>Altura (cm)</th>
                  <th>Cintura (cm)</th>
                  <th>Quadril (cm)</th>
                  <th>Peito (cm)</th>
                  <th>Braço (cm)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {medidas.map((medida, index) => (
                    <tr key={index}>
                    <td>{new Date(medida.data).toLocaleDateString('pt-BR')}</td>
                    <td>{medida.peso || '-'}</td>
                    <td>{medida.altura || '-'}</td>
                    <td>{medida.cintura || '-'}</td>
                    <td>{medida.quadril || '-'}</td>
                    <td>{medida.peito || '-'}</td>
                    <td>{medida.braco || '-'}</td>
                    <td>
                        <button onClick={() => excluirMedida(medida.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FaTrashAlt size={16} />                       
                    </button>
                    </td>
                    </tr>
                ))}
                </tbody>

            </C.MedidasTable>
          )}
        </C.MedidasContainer>
      </C.Container>
    </Layout>
  );
}

export default AlunoMedidas;