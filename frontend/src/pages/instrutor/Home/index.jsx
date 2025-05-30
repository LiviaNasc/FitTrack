import * as C from './styles';
import Layout from '../../../components/Layout';

function InstrutorHome() {
  return (
  <Layout userType={"instrutor"}>
    <C.HomeContainer>
      <C.Header>
        <h1>Painel do Instrutor</h1>
      </C.Header>
      <section>
        <p>Bem-vindo ao seu painel de instrutor</p>
      </section>
    </C.HomeContainer>
    </Layout>
  );
}

export default InstrutorHome;