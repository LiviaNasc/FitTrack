import React from 'react';
import * as C from './styles';
import LogoutButton from '../../../components/LogoutButton';

function InstrutorHome() {
  return (
    <C.HomeContainer>
    <LogoutButton/>
      <C.Header>
        <h1>Painel do Instrutor</h1>
      </C.Header>
      <section>
        <p>Bem-vindo ao seu painel de instrutor</p>
      </section>
    </C.HomeContainer>
  );
}

export default InstrutorHome;