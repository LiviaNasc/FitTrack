import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <C.Title>Login</C.Title>
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
        <C.Button type="submit">Entrar</C.Button>
        
      </C.Form>
    </C.Container>
  );
}

export default SignIn;