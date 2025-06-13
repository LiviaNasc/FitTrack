import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #FF6600;

  h1 {
    color: #FF6600;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

export const MetricasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const MetricaCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 4px solid #FF6600;

  h3 {
    color: #555;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

export const MetricaValor = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const Section = styled.section`
  margin-top: 2rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    color: #FF6600;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

export const TreinosTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #f9f9f9;
    color: #555;
    font-weight: 600;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;


export const MetricaDetalhe = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
`;

export const GraficoContainer = styled.div`
  margin-top: 1rem;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
`;

export const Legenda = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
`;

export const BarraContainer = styled.div`
  height: 20px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;

export const BarraConcluida = styled.div`
  height: 100%;
  background-color: #FF6600;
  width: ${props => props.width};
  transition: width 0.5s ease;
`;

export const BarraPendente = styled.div`
  height: 100%;
  background-color: #ddd;
  width: ${props => props.width};
  transition: width 0.5s ease;
`;