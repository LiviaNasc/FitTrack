import styled from 'styled-components';

export const TreinosContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 4rem);
  color: #e0e0e0;

  @media (max-width: 768px) {
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
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const TreinoCard = styled.div`
  background: ${props => props.concluido ? 'rgba(76, 175, 80, 0.1)' : '#2a2a2a'};
  border: 2px solid ${props => props.concluido ? '#4CAF50' : '#3a3a3a'};
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  height: ${props => props.concluido ? 'auto' : '500px'};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(255, 102, 0, 0.2);
    border-color: ${props => props.concluido ? '#4CAF50' : '#FF6600'};
  }
`;

export const TreinoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;

  h2 {
    color: ${props => props.concluido ? '#4CAF50' : '#FF6600'};
    font-size: 1.5rem;
    margin: 0;
    font-weight: 600;
  }
`;

export const ConcluirButton = styled.button`
  background: ${props => props.concluido ? '#4CAF50' : 'transparent'};
  color: ${props => props.concluido ? 'white' : '#FF6600'};
  border: 2px solid ${props => props.concluido ? '#4CAF50' : '#FF6600'};
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${props => props.concluido ? '#45a049' : 'rgba(255, 102, 0, 0.1)'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const InstrutorObservacao = styled.div`
  background: rgba(255, 102, 0, 0.1);
  padding: 1rem;
  border-left: 3px solid #FF6600;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  font-size: 0.95rem;
  line-height: 1.5;

  strong {
    color: #FF6600;
    font-weight: 600;
  }
`;

export const ExerciciosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 8px;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #FF6600;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #E55C00;
  }
`;

export const ExercicioItem = styled.li`
  background: #333;
  border-radius: 6px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  border-left: 3px solid #FF6600;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(5px);
    background: #3a3a3a;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ExercicioNome = styled.h3`
  color: #FF6600;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "•";
    color: #FF6600;
  }
`;

export const ExercicioDetalhes = styled.p`
  color: #aaa;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "↳";
    color: #666;
  }
`;

export const ExercicioDescricao = styled.div`
  color: #ccc;
  font-size: 0.85rem;
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  border-top: 1px dashed #444;
  line-height: 1.6;
  max-height: 100px;
  overflow-y: auto;
  padding-right: 5px;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
  }
`;

export const Loading = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #FF6600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:after {
    content: "";
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 102, 0, 0.2);
    border-top-color: #FF6600;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  padding: 1.5rem;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 8px;
  margin: 2rem 0;
  text-align: center;
  border-left: 4px solid #ff6b6b;
  font-weight: 500;
`;

export const NoTreinos = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #aaa;
  background: #2a2a2a;
  border-radius: 10px;
  border: 2px dashed #444;
  margin-top: 2rem;

  &:before {
    content: "😕";
    font-size: 2rem;
    display: block;
    margin-bottom: 1rem;
  }
`;