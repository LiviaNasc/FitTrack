import { useState, useEffect } from 'react';
import Layout from "../../../components/Layout";
import * as C from './styles';
import { alunoService } from '../../../../services/api';
import { useAuth } from '../../../context/AuthContext';
import Swal from 'sweetalert2';
import { treinoService } from '../../../../services/api';

function InstrutorAcompanharAluno() {
  const { user } = useAuth();
  const [alunos, setAlunos] = useState([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const carregarAlunos = async () => {
      try {
        setLoading(true);
        const response = await alunoService.buscarTodos();
        setAlunos(response);
      } catch (err) {
        setError(err.message || 'Erro ao carregar alunos');
        Swal.fire({
          title: 'Erro!',
          text: err.message || 'Erro ao carregar alunos',
          icon: 'error',
          confirmButtonColor: '#FF6600'
        });
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      carregarAlunos();
    }
  }, [user]);

  const handleSelecionarAluno = async (alunoId) => {
  try {
    setLoading(true);
    
    // 1. Busca dados básicos do aluno
    const aluno = await alunoService.buscarPorId(alunoId);
    setAlunoSelecionado(aluno);
    
    // 2. Busca todos os treinos do aluno
    const treinos = await treinoService.getTreinosByAluno(alunoId);
    
    // 3. Extrai os comentários de todos os exercícios concluídos
    const todosComentarios = treinos.flatMap(treino => 
      treino.exercicios
        .filter(ex => ex.concluido && ex.comentario)
        .map(ex => ({
          data: treino.data,
          nomeExercicio: ex.nome,
          comentario: ex.comentario,
          series: ex.series_realizadas,
          repeticoes: ex.repeticoes_realizadas,
          carga: ex.carga_realizada
        }))
    );
    
    setComentarios(todosComentarios);
  } catch (err) {
    Swal.fire({
      title: 'Erro!',
      text: err.message || 'Erro ao carregar comentários',
      icon: 'error',
      confirmButtonColor: '#FF6600'
    });
  } finally {
    setLoading(false);
  }
};

  const alunosFiltrados = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout userType={"instrutor"}>
      <C.Container>
        <C.Header>
          <h1>Acompanhamento de Alunos</h1>
        </C.Header>

        {error && <C.ErrorMessage>{error}</C.ErrorMessage>}

        <C.SearchContainer>
          <C.SearchInput
            type="text"
            placeholder="Pesquisar aluno por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </C.SearchContainer>

        <C.Content>
          <C.AlunosList>
            <h2>Lista de Alunos</h2>
            {loading ? (
              <C.Loading>Carregando alunos...</C.Loading>
            ) : alunosFiltrados.length > 0 ? (
              <ul>
                {alunosFiltrados.map(aluno => (
                  <C.AlunoItem 
                    key={aluno.id}
                    onClick={() => handleSelecionarAluno(aluno.id)}
                    selected={alunoSelecionado?.id === aluno.id}
                  >
                    <C.AlunoInfo>
                      <C.AlunoNome>{aluno.nome}</C.AlunoNome>
                      <C.AlunoEmail>{aluno.email}</C.AlunoEmail>
                    </C.AlunoInfo>
                  </C.AlunoItem>
                ))}
              </ul>
            ) : (
              <C.NoResults>Nenhum aluno encontrado</C.NoResults>
            )}
          </C.AlunosList>

          <C.DetalhesAluno>
            {alunoSelecionado ? (
              <>
                <C.AlunoHeader>
                  <h2>{alunoSelecionado.nome}</h2>
                  <p>{alunoSelecionado.email}</p>
                </C.AlunoHeader>

              <C.ComentariosSection>
                <h3>Comentários e Observações</h3>
                {comentarios.length > 0 ? (
                    <C.ComentariosList>
                    {comentarios.map((comentario, index) => (
                        <C.ComentarioItem key={index}>
                        <C.ComentarioHeader>
                            <C.ExercicioInfo>
                            <strong>{comentario.nomeExercicio}</strong>
                            <span>{new Date(comentario.data).toLocaleDateString('pt-BR')}</span>
                            </C.ExercicioInfo>
                            <C.DadosExercicio>
                            <span>{comentario.series} séries × {comentario.repeticoes} reps</span>
                            {comentario.carga && <span>Carga: {comentario.carga}</span>}
                            </C.DadosExercicio>
                        </C.ComentarioHeader>
                        <C.ComentarioTexto>{comentario.comentario}</C.ComentarioTexto>
                        </C.ComentarioItem>
                    ))}
                    </C.ComentariosList>
                ) : (
                    <C.NoComments>Nenhum comentário registrado</C.NoComments>
                )}
                </C.ComentariosSection>
              </>
            ) : (
              <C.SelectAlunoMessage>
                Selecione um aluno para visualizar os detalhes
              </C.SelectAlunoMessage>
            )}
          </C.DetalhesAluno>
        </C.Content>
      </C.Container>
    </Layout>
  );
}

export default InstrutorAcompanharAluno;