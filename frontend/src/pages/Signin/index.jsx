import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Preencha todos os campos');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || 'Erro ao fazer login');
      }

      // Armazena os dados do usuário
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.usuario));

      // Redireciona para a home correta baseada no tipo de usuário
      switch(data.usuario.tipo) {
        case 'admin':
          navigate('/admin/home');
          break;
        case 'instrutor':
          navigate('/instrutor/home');
          break;
        case 'aluno':
          navigate('/aluno/home');
          break;
        default:
          navigate('/'); // Redireciona para home geral se tipo desconhecido
      }

    } catch (err) {
      console.error('Erro no login:', err);
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <C.Title>Login</C.Title>
        
        {error && <C.ErrorMessage>{error}</C.ErrorMessage>}

        <C.FormGroup>
          <C.Input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </C.FormGroup>

        <C.FormGroup>
          <C.Input
            type="password"
            placeholder="Senha *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </C.FormGroup>

        <C.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </C.Button>
        
      </C.Form>
    </C.Container>
  );
}

export default SignIn;