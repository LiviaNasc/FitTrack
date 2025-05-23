import React from 'react';
import * as C from './styles';
import LogoutButton from '../../../components/LogoutButton';

function AlunoHome() {
  return (
    <C.HomeContainer>
    <LogoutButton />
      <C.Header>
        <h1>Meu Progresso</h1>
      </C.Header>
      <section>
        <p>Bem-vindo ao seu painel de acompanhamento</p>
      </section>
    </C.HomeContainer>
  );
}

export default AlunoHome;