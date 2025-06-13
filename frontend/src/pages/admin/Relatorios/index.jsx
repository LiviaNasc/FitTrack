import { useState, useEffect } from 'react';
import * as C from './styles';
import Layout from '../../../components/Layout';
import { treinoService } from '../../../../services/api';

function VisualizarRelatorios() {
  const [relatorio, setRelatorio] = useState({
    loading: true,
    dados: null,
    error: null
  });

  useEffect(() => {
    const carregarRelatorios = async () => {
      try {
        const dados = await treinoService.estatisticasAdesao();
        setRelatorio({
          loading: false,
          dados,
          error: null
        });
      } catch (error) {
        setRelatorio({
          loading: false,
          dados: null,
          error: 'Erro ao carregar relatórios'
        });
      }
    };

    carregarRelatorios();
  }, []);

  return (
    <Layout userType={"admin"}>
      <C.Container>
        <C.Header>
          <h1>Relatórios da Academia</h1>
          <p>Desempenho e adesão</p>
        </C.Header>

        {relatorio.loading ? (
          <C.LoadingMessage>Carregando dados estatísticos...</C.LoadingMessage>
        ) : relatorio.error ? (
          <C.ErrorMessage>{relatorio.error}</C.ErrorMessage>
        ) : (
          <>
            <C.MetricasContainer>
              <C.MetricaCard>
                <h3>Exercícios Totais</h3>
                <C.MetricaValor>{relatorio.dados.totalExercicios}</C.MetricaValor>
              </C.MetricaCard>

              <C.MetricaCard>
                <h3>Taxa de Conclusão</h3>
                <C.MetricaValor>{relatorio.dados.percentualConclusao}%</C.MetricaValor>
                <C.MetricaDetalhe>
                  {relatorio.dados.concluidos}/{relatorio.dados.totalExercicios} concluídos
                </C.MetricaDetalhe>
              </C.MetricaCard>

              <C.MetricaCard>
                <h3>Desempenho Médio</h3>
                <C.MetricaValor>
                  Séries: {relatorio.dados.mediaDifSeries.toFixed(1)}<br />
                  Reps: {relatorio.dados.mediaDifRepeticoes.toFixed(1)}<br />
                  Carga: +{relatorio.dados.mediaDifCarga}kg
                </C.MetricaValor>
              </C.MetricaCard>
            </C.MetricasContainer>

            <C.Section>
              <h2>Top Alunos</h2>
              <C.TreinosTable>
                <thead>
                  <tr>
                    <th>Aluno</th>
                    <th>Treinos Concluídos</th>
                    <th>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {relatorio.dados.topAlunos.map((aluno, index) => (
                    <tr key={index}>
                      <td>{aluno.nome}</td>
                      <td>{aluno.concluidos}</td>
                      <td>
                        {aluno.concluidos > 0 ? '⭐'.repeat(aluno.concluidos) : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </C.TreinosTable>
            </C.Section>

            <C.Section>
              <h2>Análise de Desempenho</h2>
              <C.GraficoContainer>
                <C.Legenda>
                  <span style={{color: '#FF6600'}}>●</span> Concluídos: {relatorio.dados.concluidos}<br />
                  <span style={{color: '#ccc'}}>●</span> Pendentes: {relatorio.dados.totalExercicios - relatorio.dados.concluidos}
                </C.Legenda>
                <C.BarraContainer>
                  <C.BarraConcluida 
                    width={`${relatorio.dados.percentualConclusao}%`}
                  />
                  <C.BarraPendente
                    width={`${100 - relatorio.dados.percentualConclusao}%`}
                  />
                </C.BarraContainer>
              </C.GraficoContainer>
            </C.Section>
          </>
        )}
      </C.Container>
    </Layout>
  );
}

export default VisualizarRelatorios;