import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import * as C from './styles';
import { treinoService } from '../../../../services/api';
import Layout from '../../../components/Layout';
import Swal from 'sweetalert2';

function AlunoTreinos() {
  const { user } = useAuth();
  const [treinos, setTreinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [treinoConcluido, setTreinoConcluido] = useState(() => {
    const saved = localStorage.getItem('treinosConcluidos');
    return saved ? JSON.parse(saved) : {};
  });
  const [progresso, setProgresso] = useState({});
  const [progressoSalvo, setProgressoSalvo] = useState({});

  useEffect(() => {
  const carregarTreinos = async () => {
    try {
      const response = await treinoService.getTreinosByAluno(user.id);
      setTreinos(response);
      
      const initialProgress = {};
      const initialProgressoSalvo = {};
      
      response.forEach(treino => {
        treino.exercicios.forEach(exercicio => {
          // Verifica se o exercício já foi concluído e salvo anteriormente
          const exercicioConcluido = exercicio.concluido === 1; 
          
          initialProgress[exercicio.id] = {
            series_realizadas: exercicio.series_realizadas || exercicio.series || 0,
            repeticoes_realizadas: exercicio.repeticoes_realizadas || exercicio.repeticoes || 0,
            carga_realizada: exercicio.carga_realizada || exercicio.carga || '',
            concluido: exercicioConcluido ? 1 : 0, 
            comentario: exercicio.comentario || ''
          };

          if (exercicioConcluido) {
            initialProgressoSalvo[exercicio.id] = true;
          }
        });
      });

      setProgresso(initialProgress);
      setProgressoSalvo(initialProgressoSalvo);
      
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

  const handleProgressoChange = (exercicioId, field, value) => {
  setProgresso(prev => ({
    ...prev,
    [exercicioId]: {
      ...prev[exercicioId],
      [field]: field === 'concluido' ? (value ? 1 : 0) : value
    }
  }));
};

const handleSubmitProgresso = async (exercicioId) => {
  if (!progresso[exercicioId]?.concluido) {
    Swal.fire({
      title: 'Atenção!',
      text: 'Conclua o exercício antes de salvar o progresso',
      icon: 'warning',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF6600',
      background: '#2a2a2a',
      color: '#e0e0e0'
    });
    return;
  }

  try {
    const dadosProgresso = {
      ...progresso[exercicioId],
      series_realizadas: parseInt(progresso[exercicioId].series_realizadas),
      repeticoes_realizadas: parseInt(progresso[exercicioId].repeticoes_realizadas),
    };

    await treinoService.registrarProgressoExercicio(exercicioId, dadosProgresso);
    
    setProgressoSalvo(prev => ({ ...prev, [exercicioId]: true }));
    
    setProgresso(prev => ({
      ...prev,
      [exercicioId]: {
        ...prev[exercicioId],
        concluido: 1 
      }
    }));

    Swal.fire({
      title: 'Sucesso!',
      text: 'Progresso registrado com sucesso',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF6600',
      background: '#2a2a2a',
      color: '#e0e0e0'
    });
  } catch (err) {
    console.error('Erro ao registrar progresso:', err);
    Swal.fire({
      title: 'Erro!',
      text: err.message || 'Erro ao registrar progresso',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF6600',
      background: '#2a2a2a',
      color: '#e0e0e0'
    });
  }
};

  const formatarData = (dataString) => {
    if (typeof dataString === 'string' && dataString.includes('-')) {
      const partes = dataString.split('-');
      return `${partes[2]}/${partes[1]}/${partes[0]}`; 
    }
    
    const data = new Date(dataString);
    const dataUTC = new Date(data.getTime() + data.getTimezoneOffset() * 60000);
    return dataUTC.toLocaleDateString('pt-BR');
  };

  const repeticoesOptions = Array.from({length: 16}, (_, i) => i + 5);

  return (
    <Layout userType="aluno">
      <C.TreinosContainer>
        <C.PageHeader>
          <h1>Meus Treinos</h1>
        </C.PageHeader>

        {loading ? (
          <C.Loading>Carregando treinos...</C.Loading>
        ) : error ? (
          <C.ErrorMessage>{error}</C.ErrorMessage>
        ) : treinos.length === 0 ? (
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
                {treino.exercicios.map(exercicio => {
                  const exercicioProgresso = progresso[exercicio.id] || {};
                  const exercicioConcluido = exercicioProgresso.concluido === 1;

                  return (
                      <C.ExercicioItem 
                        key={exercicio.id} 
                        concluido={progressoSalvo[exercicio.id]} 
                      >
                      <C.ExercicioNome>{exercicio.nome}</C.ExercicioNome>
                      <C.ExercicioDetalhes>
                        {exercicio.series} séries × {exercicio.repeticoes} repetições
                        {exercicio.carga && ` (${exercicio.carga} kg)`}
                      </C.ExercicioDetalhes>
                      
                      {exercicio.descricao && (
                        <C.ExercicioDescricao>{exercicio.descricao}</C.ExercicioDescricao>
                      )}

                      {/* Seção de registro de progresso */}
                      <C.ProgressoSection>
                        <C.ProgressoGrid>
                          <C.ProgressoGroup>
                            <C.ProgressoLabel>Séries realizadas:</C.ProgressoLabel>
                            <C.ProgressoSelect
                              value={exercicioProgresso.series_realizadas || exercicio.series}
                              onChange={(e) => handleProgressoChange(exercicio.id, 'series_realizadas', e.target.value)}
                            >
                              {Array.from({length: exercicio.series}, (_, i) => i + 1).map(num => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </C.ProgressoSelect>
                          </C.ProgressoGroup>

                          <C.ProgressoGroup>
                            <C.ProgressoLabel>Repetições:</C.ProgressoLabel>
                            <C.ProgressoSelect
                              value={exercicioProgresso.repeticoes_realizadas || exercicio.repeticoes}
                              onChange={(e) => handleProgressoChange(exercicio.id, 'repeticoes_realizadas', e.target.value)}
                            >
                              {repeticoesOptions.map(num => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </C.ProgressoSelect>
                          </C.ProgressoGroup>

                          <C.ProgressoGroup>
                            <C.ProgressoLabel>Carga (kg):</C.ProgressoLabel>
                            <C.ProgressoInput
                              type="text"
                              value={exercicioProgresso.carga_realizada || ''}
                              onChange={(e) => handleProgressoChange(exercicio.id, 'carga_realizada', e.target.value)}
                              placeholder="20kg"
                            />
                          </C.ProgressoGroup>
                        </C.ProgressoGrid>

                        <C.ProgressoGroup>
                          <C.ProgressoLabel>Comentários:</C.ProgressoLabel>
                          <C.ProgressoTextarea
                            value={exercicioProgresso.comentario || ''}
                            onChange={(e) => handleProgressoChange(exercicio.id, 'comentario', e.target.value)}
                            placeholder="Ex: Tive dificuldade na última série"
                          />
                        </C.ProgressoGroup>

                        <C.ProgressoActions>
                          <C.ProgressoCheckbox>
                            <input
                              type="checkbox"
                              id={`concluido-${exercicio.id}`}
                              checked={exercicioConcluido}
                              onChange={(e) => handleProgressoChange(exercicio.id, 'concluido', e.target.checked ? 1 : 0)}
                            />
                            <label htmlFor={`concluido-${exercicio.id}`}>Exercício concluído</label>
                          </C.ProgressoCheckbox>

                          <C.ProgressoButton
                            onClick={() => handleSubmitProgresso(exercicio.id)}
                          >
                            Salvar Progresso
                          </C.ProgressoButton>
                        </C.ProgressoActions>
                      </C.ProgressoSection>
                    </C.ExercicioItem>
                  );
                })}
              </C.ExerciciosList>
            </C.TreinoCard>
          ))
        )}
      </C.TreinosContainer>
    </Layout>
  );
}

export default AlunoTreinos;