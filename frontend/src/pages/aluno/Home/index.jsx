import * as C from './styles';
import Layout from '../../../components/Layout';

function AlunoHome() {
  return (
    <Layout userType="aluno">
      <C.HomeContainer>
        <C.PageHeader>
          <h1>Meu Progresso</h1>
        </C.PageHeader>
        <section>
          <p>Bem-vindo ao seu painel de acompanhamento</p>
        </section>
      </C.HomeContainer>
    </Layout>
  );
}

export default AlunoHome;