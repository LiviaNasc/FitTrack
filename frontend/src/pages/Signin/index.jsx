import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await login(email, password);
      switch(user.tipo) {
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
          navigate('/');
      }
    } catch (err) {
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