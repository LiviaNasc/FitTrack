import * as C from './styles';
import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';

function InstrutorCadastrarExercicio() {
  const [exercicios, setExercicios] = useState([]);
  const [filteredExercicios, setFilteredExercicios] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [musculo, setMusculo] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchExercicios();
  }, []);

  useEffect(() => {
    filterExercicios();
  }, [exercicios, searchTerm, tipo, musculo, equipamento, dificuldade]);

  const fetchExercicios = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/exercicios/listarExercicios', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar exercícios');
      }

      const data = await response.json();
      setExercicios(data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar exercícios');
    } finally {
      setIsLoading(false);
    }
  };

  const filterExercicios = () => {
    let filtered = [...exercicios];
    
    if (searchTerm) {
      filtered = filtered.filter(exercicio => 
        exercicio.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercicio.descricao.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (tipo) filtered = filtered.filter(exercicio => exercicio.tipo === tipo);
    if (musculo) filtered = filtered.filter(exercicio => exercicio.musculo === musculo);
    if (equipamento) filtered = filtered.filter(exercicio => exercicio.equipamento === equipamento);
    if (dificuldade) filtered = filtered.filter(exercicio => exercicio.dificuldade === dificuldade);
    
    setFilteredExercicios(filtered);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/exercicios/criarExercicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nome, descricao, tipo, musculo, equipamento, dificuldade }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar exercício');
      }

      const data = await response.json();
      setSuccess('Exercício cadastrado com sucesso!');
      fetchExercicios();
      setIsModalOpen(false);
      resetForm();
    } catch (err) {
      setError(err.message || 'Erro ao cadastrar exercício');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setNome('');
    setDescricao('');
    setTipo('');
    setMusculo('');
    setEquipamento('');
    setDificuldade('');
  };

  const tiposUnicos = [...new Set(exercicios.map(ex => ex.tipo).filter(Boolean))];
  const musculosUnicos = [...new Set(exercicios.map(ex => ex.musculo).filter(Boolean))];
  const equipamentosUnicos = [...new Set(exercicios.map(ex => ex.equipamento).filter(Boolean))];
  const dificuldadesUnicas = [...new Set(exercicios.map(ex => ex.dificuldade).filter(Boolean))];

  return (
    <Layout userType={"instrutor"}>
      <C.HomeContainer>
        <C.Header>
          <h1>Exercícios</h1>
          <C.AddButton onClick={() => setIsModalOpen(true)}>+ Adicionar Exercício</C.AddButton>
        </C.Header>

        {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
        {success && <C.SuccessMessage>{success}</C.SuccessMessage>}

        <C.SearchContainer>
          <C.SearchInput 
            type="text" 
            placeholder="Pesquisar exercícios..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </C.SearchContainer>

        <C.FiltersContainer>
          <C.FilterSelect 
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Todos os tipos</option>
            {tiposUnicos.map((tipo, index) => (
              <option key={index} value={tipo}>{tipo || 'Não especificado'}</option>
            ))}
          </C.FilterSelect>

          <C.FilterSelect 
            value={musculo}
            onChange={(e) => setMusculo(e.target.value)}
          >
            <option value="">Todos os músculos</option>
            {musculosUnicos.map((musculo, index) => (
              <option key={index} value={musculo}>{musculo || 'Não especificado'}</option>
            ))}
          </C.FilterSelect>

          <C.FilterSelect 
            value={equipamento}
            onChange={(e) => setEquipamento(e.target.value)}
          >
            <option value="">Todos os equipamentos</option>
            {equipamentosUnicos.map((equipamento, index) => (
              <option key={index} value={equipamento}>{equipamento || 'Não especificado'}</option>
            ))}
          </C.FilterSelect>

          <C.FilterSelect 
            value={dificuldade}
            onChange={(e) => setDificuldade(e.target.value)}
          >
            <option value="">Todas as dificuldades</option>
            {dificuldadesUnicas.map((dificuldade, index) => (
              <option key={index} value={dificuldade}>{dificuldade || 'Não especificado'}</option>
            ))}
          </C.FilterSelect>
        </C.FiltersContainer>

        {isLoading ? (
          <C.LoadingMessage>Carregando...</C.LoadingMessage>
        ) : (
          <C.ExerciciosList>
            {filteredExercicios.length > 0 ? (
              filteredExercicios.map((exercicio) => (
                <C.ExercicioCard key={exercicio.id}>
                  <C.ExercicioNome>{exercicio.nome}</C.ExercicioNome>
                  <C.ExercicioDescricao>{exercicio.descricao}</C.ExercicioDescricao>
                  <C.ExercicioMeta>
                    {exercicio.tipo && <span>Tipo: {exercicio.tipo}</span>}
                    {exercicio.musculo && <span>Músculo: {exercicio.musculo}</span>}
                    {exercicio.equipamento && <span>Equipamento: {exercicio.equipamento}</span>}
                    {exercicio.dificuldade && <span>Dificuldade: {exercicio.dificuldade}</span>}
                  </C.ExercicioMeta>
                </C.ExercicioCard>
              ))
            ) : (
              <C.NoResultsMessage>Nenhum exercício encontrado</C.NoResultsMessage>
            )}
          </C.ExerciciosList>
        )}

        <C.Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
          <C.ModalContent>
            <C.ModalHeader>
              <h2>Cadastrar Novo Exercício</h2>
              <C.CloseButton onClick={() => {
                setIsModalOpen(false);
                resetForm();
              }}>×</C.CloseButton>
            </C.ModalHeader>
            
            <C.Form onSubmit={handleSubmit}>
              <C.FormGroup>
                <C.Label>Nome*</C.Label>
                <C.Input 
                  type="text" 
                  value={nome}
                  placeholder="Nome do exercício"
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </C.FormGroup>

              <C.FormGroup>
                <C.Label>Descrição*</C.Label>
                <C.Textarea 
                  value={descricao}
                  placeholder="Descrição detalhada do exercício"
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
              </C.FormGroup>

              <C.FormGroup>
                <C.Label>Tipo</C.Label>
                <C.Input 
                  type="text" 
                  value={tipo}
                  placeholder="Ex: Força, Cardio, etc."
                  onChange={(e) => setTipo(e.target.value)}
                />
              </C.FormGroup>

              <C.FormGroup>
                <C.Label>Músculo</C.Label>
                <C.Input 
                  type="text" 
                  value={musculo}
                  placeholder="Ex: Peito, Pernas, etc."
                  onChange={(e) => setMusculo(e.target.value)}
                />
              </C.FormGroup>

              <C.FormGroup>
                <C.Label>Equipamento</C.Label>
                <C.Input 
                  type="text" 
                  value={equipamento}
                  placeholder="Ex: Barra, Halteres, etc."
                  onChange={(e) => setEquipamento(e.target.value)}
                />
              </C.FormGroup>

              <C.FormGroup>
                <C.Label>Dificuldade</C.Label>
                <C.Input 
                  type="text" 
                  value={dificuldade}
                  placeholder="Ex: Iniciante, Intermediário, etc."
                  onChange={(e) => setDificuldade(e.target.value)}
                />
              </C.FormGroup>

              <C.Button type="submit" disabled={isLoading}>
                {isLoading ? 'Cadastrando...' : 'Cadastrar'}
              </C.Button>
            </C.Form>
          </C.ModalContent>
        </C.Modal>
      </C.HomeContainer>
    </Layout>
  );
}

export default InstrutorCadastrarExercicio;