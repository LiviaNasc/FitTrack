import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import Layout from '../../../components/Layout';

function AdminHome() {
  const navigate = useNavigate();

  return (
  <Layout userType={"admin"}>
    <C.HomeContainer>
      <C.Header>
        <h1>Painel Administrativo</h1>
      </C.Header>
      <section>
        <p>Bem-vindo ao painel de administração do FitTrack</p>
        <C.AdminButton onClick={() => navigate('/signup')}>
          Cadastrar Usuário
        </C.AdminButton>
      </section>
    </C.HomeContainer>
    </Layout>
  );
}

export default AdminHome;