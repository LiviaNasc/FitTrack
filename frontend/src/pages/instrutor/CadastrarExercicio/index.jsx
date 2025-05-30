import * as C from './styles';
import React, { useState } from 'react';
import Layout from '../../../components/Layout';

function InstrutorCadastrarExercicio() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try{
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/exercicios/criarExercicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nome, descricao }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar exercício');
      }

      const data = await response.json();
      console.log('Exercício cadastrado com sucesso:', data);
    }catch (err) {
      setError(err.message || 'Erro ao cadastrar exercício');
    }finally {
      setIsLoading(false);
    }

    setNome('');
    setDescricao('');
  }

  return (
  <Layout userType={"instrutor"}>
    <C.HomeContainer>
      <C.Header>
        {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
        {success && <C.SuccessMessage>{success}</C.SuccessMessage>}
        <h1>Cadastrar Exercício</h1>
      </C.Header>
      <C.Form onSubmit={handleSubmit}>
        <C.FormGroup>
          <C.Input 
            type="text" 
            name="nome" 
            value={nome}
            placeholder="Digite o nome do exercício"
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </C.FormGroup>
        <C.FormGroup>
          <C.Label>Descrição</C.Label>
          <C.Textarea 
            name="descricao" 
            value={descricao}
            placeholder="Digite a descrição do exercício"
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </C.FormGroup>
        <C.Button type="submit">Cadastrar</C.Button>
      </C.Form>
    </C.HomeContainer>
  </Layout>
  );
}

export default InstrutorCadastrarExercicio;