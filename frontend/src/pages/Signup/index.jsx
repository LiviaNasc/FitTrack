import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('aluno');
  const [cref, setCref] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, userType, cref });
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <C.Title>Cadastro</C.Title>
        <C.Input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <C.Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <C.Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         <C.Select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="aluno">Aluno</option>
            <option value="instrutor">Instrutor</option>
          </C.Select>
        {userType === 'instrutor' && (
          <C.Input
            type="text"
            placeholder="CREF (apenas para instrutores)"
            value={cref}
            onChange={(e) => setCref(e.target.value)}
            required={userType === 'instrutor'}
          />
        )}
        <C.Button type="submit">Cadastrar</C.Button>
        <C.LinkText onClick={() => navigate('/signin')}>
          Faça login
        </C.LinkText>
      </C.Form>
    </C.Container>
  );
}

export default SignUp;