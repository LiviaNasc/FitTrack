import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import * as C from './styles';
import { treinoService } from '../../../../services/api';
import Layout from '../../../components/Layout';

function AlunoTreinos() {
  const { user } = useAuth();
  const [treinos, setTreinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [treinoConcluido, setTreinoConcluido] = useState(() => {
    const saved = localStorage.getItem('treinosConcluidos');
    return saved ? JSON.parse(saved) : {};
    });

  useEffect(() => {
    const carregarTreinos = async () => {
      try {
        const response = await treinoService.getTreinosByAluno(user.id);
        setTreinos(response);
      } catch (err) {
        setError(err.message || 'Erro ao carregar treinos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      carregarTreinos();
    }
  }, [user]);

 const handleConcluirTreino = (treinoId) => {
  const newState = {
    ...treinoConcluido,
    [treinoId]: !treinoConcluido[treinoId]
  };
  
  setTreinoConcluido(newState);
  localStorage.setItem('treinosConcluidos', JSON.stringify(newState));
};

  if (loading) return <C.Loading>Carregando treinos...</C.Loading>;
  if (error) return <C.ErrorMessage>{error}</C.ErrorMessage>;

const formatarData = (dataString) => {
  // Se a data já vier no formato YYYY-MM-DD 
  if (typeof dataString === 'string' && dataString.includes('-')) {
    const partes = dataString.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`; 
  }
  
  //objeto Date ou timestamp
  const data = new Date(dataString);
  const dataUTC = new Date(data.getTime() + data.getTimezoneOffset() * 60000);
  return dataUTC.toLocaleDateString('pt-BR');
};

  return (
    <Layout userType="aluno">
      <C.TreinosContainer>
        <C.PageHeader>
          <h1>Meus Treinos</h1>
        </C.PageHeader>

        {treinos.length === 0 ? (
          <C.NoTreinos>Nenhum treino cadastrado ainda.</C.NoTreinos>
        ) : (
          treinos.map(treino => (
            <C.TreinoCard key={treino.id} concluido={treinoConcluido[treino.id]}>
              <C.TreinoHeader>
                <h2>Treino de {formatarData(treino.data)}</h2>
                <C.ConcluirButton 
                  onClick={() => handleConcluirTreino(treino.id)}
                  concluido={treinoConcluido[treino.id]}
                >
                  {treinoConcluido[treino.id] ? '✔ Concluído' : 'Marcar como concluído'}
                </C.ConcluirButton>
              </C.TreinoHeader>

              {treino.observacao && (
                <C.InstrutorObservacao>
                  <strong>Observação do instrutor:</strong> {treino.observacao}
                </C.InstrutorObservacao>
              )}

              <C.ExerciciosList>
                {treino.exercicios.map(exercicio => (
                  <C.ExercicioItem key={exercicio.id}>
                    <C.ExercicioNome>{exercicio.nome}</C.ExercicioNome>
                    <C.ExercicioDetalhes>
                      {exercicio.series} séries × {exercicio.repeticoes} repetições
                      {exercicio.carga && ` (${exercicio.carga} kg)`}
                    </C.ExercicioDetalhes>
                    {exercicio.descricao && (
                      <C.ExercicioDescricao>{exercicio.descricao}</C.ExercicioDescricao>
                    )}
                  </C.ExercicioItem>
                ))}
              </C.ExerciciosList>
            </C.TreinoCard>
          ))
        )}
      </C.TreinosContainer>
    </Layout>
  );
}

export default AlunoTreinos;