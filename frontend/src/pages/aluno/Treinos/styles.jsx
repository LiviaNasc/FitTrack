import styled from 'styled-components';

export const TreinosContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;   
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #FF6600;
  
  h1 {
    color: #FF6600;
    font-size: 2rem;
  }
`;

export const TreinoCard = styled.div`
  background: ${props => props.concluido ? '#f0fff0' : '#fff'};
  border: 1px solid ${props => props.concluido ? '#4CAF50' : '#ddd'};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const TreinoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    color: #333;
    font-size: 1.5rem;
    margin: 0;
  }
`;

export const ConcluirButton = styled.button`
  background: ${props => props.concluido ? '#4CAF50' : '#FF6600'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: ${props => props.concluido ? '#45a049' : '#e65c00'};
  }
`;

export const InstrutorObservacao = styled.p`
  background: #f8f8f8;
  padding: 0.8rem;
  border-left: 3px solid #FF6600;
  font-style: italic;
  margin-bottom: 1rem;
`;

export const ExerciciosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

export const ExercicioItem = styled.li`
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: #f9f9f9;
  border-radius: 4px;
`;

export const ExercicioNome = styled.h3`
  color: #333;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

export const ExercicioDetalhes = styled.p`
  color: #666;
  margin: 0.3rem 0;
`;

export const ExercicioDescricao = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;


export const SalvarButton = styled.button`
  align-self: flex-end;
  background: #FF6600;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e65c00;
  }
`;

export const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

export const ErrorMessage = styled.div`
  color: #d32f2f;
  padding: 1rem;
  background: #ffebee;
  border-radius: 4px;
  margin: 1rem;
  text-align: center;
`;

export const NoTreinos = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
  background: #f5f5f5;
  border-radius: 8px;
`;