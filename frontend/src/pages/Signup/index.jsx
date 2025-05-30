import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useAuth } from '../../context/AuthContext';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('aluno');
  const [cref, setCref] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    console.log('User no SignUp:', user);
    if (!user || user.tipo !== 'admin') {
      navigate('/admin/home');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Autenticação necessária. Redirecionando...');
      setTimeout(() => navigate('/signin'), 2000);
      setIsLoading(false);
      return;
    }

    if (!name || !email || !password) {
      setError('Preencha todos os campos obrigatórios');
      setIsLoading(false);
      return;
    }

    if (userType === 'instrutor' && !cref) {
      setError('CREF é obrigatório para instrutores');
      setIsLoading(false);
      return;
    }

    const userData = {
      nome: name,
      email,
      senha: password,
      telefone: phone,
      tipo: userType,
      ...(userType === 'instrutor' && { cref }),
    };

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || 'Erro ao cadastrar usuário');
      }

      setSuccess('Usuário cadastrado com sucesso!');
      setTimeout(() => navigate('/admin/home'), 2000);

    } catch (err) {
      console.error('Erro no cadastro:', err);
      if (err.message.includes('Token')) {
        setError('Sessão expirada. Por favor, faça login novamente.');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setTimeout(() => navigate('/signin'), 2000);
      } else {
        setError(err.message || 'Erro ao cadastrar usuário');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <C.Title>Cadastro</C.Title>

        {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
        {success && <C.SuccessMessage>{success}</C.SuccessMessage>}

        <C.FormGroup>
          <C.Input
            type="text"
            placeholder="Nome completo *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </C.FormGroup>

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

        <C.FormGroup>
          <C.Input
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </C.FormGroup>

        <C.FormGroup>
          <C.Select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="aluno">Aluno</option>
            <option value="instrutor">Instrutor</option>
            <option value="admin">Administrador</option>
          </C.Select>
        </C.FormGroup>

        {userType === 'instrutor' && (
          <C.FormGroup>
            <C.Input
              type="text"
              placeholder="CREF * (apenas para instrutores)"
              value={cref}
              onChange={(e) => setCref(e.target.value)}
              required
            />
          </C.FormGroup>
        )}

        <C.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </C.Button>
        <C.Button onClick={() => navigate('/admin/home')} type="button">
          Voltar
        </C.Button>
      </C.Form>
    </C.Container>
  );
}

export default SignUp;