import * as C from './styles';
import Layout from '../../../components/Layout';
import { useState, useEffect } from 'react';

function InstrutorCadastrarTreino() {
  const [alunos, setAlunos] = useState([]);
  const [exercicios, setExercicios] = useState([]);
  const [selectedAluno, setSelectedAluno] = useState('');
  const [observacao, setObservacao] = useState('');
  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);
  const [data, setData] = useState(new Date().toISOString().split('T')[0]);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async (url, setData) => {
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const responseData = await response.json();
        
        if (!response.ok) {
          throw new Error(
            `Erro ${response.status}: ${responseData.message || 'Erro desconhecido'}\n` +
            `Resposta completa: ${JSON.stringify(responseData, null, 2)}`
          );
        }
        
        setData(responseData);
      } catch (error) {
        console.error('Erro completo:', error);
        alert(`Erro ao carregar dados:\n${error.message}`);
        throw error;
      }
    };

    fetchData('http://localhost:3000/alunos/listarAlunos', setAlunos);
    
    fetchData('http://localhost:3000/exercicios/listarExercicios', setExercicios);

  }, []);

  const handleAddExercicio = () => {
    
    setExerciciosSelecionados([
      ...exerciciosSelecionados,
      {
        exercicio_id: '',
        series: 3,
        repeticoes: 10,
        carga: ''
      }
    ]);
  };

  const handleRemoveExercicio = (index) => {
    const newExercicios = [...exerciciosSelecionados];
    newExercicios.splice(index, 1);
    setExerciciosSelecionados(newExercicios);
  };

  const handleExercicioChange = (index, field, value) => {
    const newExercicios = [...exerciciosSelecionados];
    newExercicios[index][field] = value;
    setExerciciosSelecionados(newExercicios);
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    
    if (!selectedAluno || exerciciosSelecionados.length === 0) {
      alert('Selecione um aluno e adicione pelo menos um exercício');
      return;
    }

    const treinoData = {
      aluno_id: parseInt(selectedAluno),
      instrutor_id: 1, 
      data: data,
      observacao: observacao,
      exercicios: exerciciosSelecionados.map(ex => ({
        exercicio_id: parseInt(ex.exercicio_id),
        series: parseInt(ex.series),
        repeticoes: parseInt(ex.repeticoes),
        carga: ex.carga
      }))
    };

    try {
      
      const response = await fetch('http://localhost:3000/treino/cadastrarTreino', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  
        },
        body: JSON.stringify(treinoData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao cadastrar treino');
      }

      alert('Treino cadastrado com sucesso!');
      // Limpar formulário
      setSelectedAluno('');
      setObservacao('');
      setExerciciosSelecionados([]);
    } catch (error) {
      console.error('Erro ao cadastrar treino:', error);
      alert(error.message || 'Erro ao cadastrar treino');
    }
  };

  return (
    <Layout userType={"instrutor"}>
      <C.HomeContainer>

      
        <C.Header>
          <h1>Cadastrar Treino</h1>
        </C.Header>
        <C.Form onSubmit={handleSubmit}>
          <C.FormGroup>
            <C.Label>Aluno</C.Label>
            <C.Select 
              value={selectedAluno} 
              onChange={(e) => setSelectedAluno(e.target.value)}
              required
            >
              <option value="">Selecione um aluno</option>
              {alunos.map(aluno => (
                <option key={aluno.id} value={aluno.id}>
                  {aluno.nome}
                </option>
              ))}
            </C.Select>
          </C.FormGroup>

          <C.FormGroup>
            <C.Label>Data</C.Label>
            <C.Input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </C.FormGroup>

          <C.FormGroup>
            <C.Label>Observações</C.Label>
            <C.Textarea
              value={observacao}
              placeholder="Observações sobre o treino"
              onChange={(e) => setObservacao(e.target.value)}
            />
          </C.FormGroup>

          <C.FormGroup>
            <C.Label>Exercícios</C.Label>
            <C.Button type="button" onClick={handleAddExercicio}>
              Adicionar Exercício
            </C.Button>
            
            {exerciciosSelecionados.map((exercicio, index) => (
              <C.ExercicioContainer key={index}>
                <C.ExercicioHeader>
                  <h4>Exercício {index + 1}</h4>
                  <C.Button 
                    type="button" 
                    onClick={() => handleRemoveExercicio(index)}
                    danger
                  >
                    Remover
                  </C.Button>
                </C.ExercicioHeader>
                
                <C.FormGroup>
                  <C.Label>Exercício</C.Label>
                  <C.Select
                    value={exercicio.exercicio_id}
                    onChange={(e) => handleExercicioChange(index, 'exercicio_id', e.target.value)}
                    required
                  >
                    <option value="">Selecione um exercício</option>
                    {exercicios.map(ex => (
                      <option key={ex.id} value={ex.id}>
                        {ex.nome} - {ex.descricao}
                      </option>
                    ))}
                  </C.Select>
                </C.FormGroup>

                <C.FormRow>
                  <C.FormGroup>
                    <C.Label>Séries</C.Label>
                    <C.Input
                      type="number"
                      min="1"
                      value={exercicio.series}
                      onChange={(e) => handleExercicioChange(index, 'series', e.target.value)}
                      required
                    />
                  </C.FormGroup>

                  <C.FormGroup>
                    <C.Label>Repetições</C.Label>
                    <C.Input
                      type="number"
                      min="1"
                      value={exercicio.repeticoes}
                      onChange={(e) => handleExercicioChange(index, 'repeticoes', e.target.value)}
                      required
                    />
                  </C.FormGroup>

                  <C.FormGroup>
                    <C.Label>Carga</C.Label>
                    <C.Input
                      type="text"
                      value={exercicio.carga}
                      placeholder="Ex: 20kg"
                      onChange={(e) => handleExercicioChange(index, 'carga', e.target.value)}
                    />
                  </C.FormGroup>
                </C.FormRow>
              </C.ExercicioContainer>
            ))}
          </C.FormGroup>

          <C.Button type="submit">Cadastrar Treino</C.Button>
        </C.Form>
        </C.HomeContainer>
    </Layout>
  );
}

export default InstrutorCadastrarTreino;