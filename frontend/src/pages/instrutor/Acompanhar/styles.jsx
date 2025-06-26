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
    margin: 0;
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #444;
  border-radius: 25px;
  font-size: 16px;
  background-color: #2a2a2a;
  color: white;
  transition: all 0.3s;

  &:focus {
    border-color: #FF6600;
    outline: none;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AlunosList = styled.div`
  background: #2a2a2a;
  border-radius: 8px;
  padding: 1.5rem;
  height: fit-content;

  h2 {
    color: #FF6600;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const AlunoItem = styled.li`
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: ${props => props.selected ? '#333' : 'transparent'};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #333;
  }
`;

export const AlunoInfo = styled.div`
  flex: 1;
`;

export const AlunoNome = styled.div`
  font-weight: bold;
  margin-bottom: 0.2rem;
  color: #fefefe
`;

export const AlunoEmail = styled.div`
  font-size: 0.8rem;
  color: #aaa;
`;

export const DetalhesAluno = styled.div`
  background: #2a2a2a;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const AlunoHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #444;

  h2 {
    margin: 0 0 0.5rem 0;
    color: #FF6600;
  }

  p {
    margin: 0;
    color: #aaa;
  }
`;

export const ComentariosSection = styled.div`
  h3 {
    color: #FF6600;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
`;

export const ComentariosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ComentarioItem = styled.li`
  background: #333;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 3px solid #FF6600;
`;

export const ComentarioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  strong {
    color: #FF6600;
    margin-right: 0.5rem;
  }

  span {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

export const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: #FF6600;
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: #aaa;
`;

export const NoComments = styled.div`
  text-align: center;
  padding: 2rem;
  color: #aaa;
  background: #333;
  border-radius: 6px;
`;

export const SelectAlunoMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #aaa;
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  padding: 1rem;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 3px solid #ff6b6b;
`;

export const ExercicioInfo = styled.div`
  flex: 1;
  min-width: 200px;

  strong {
    color: #FF6600;
    font-size: 1.1rem;
    margin-right: 1rem;
  }

  span {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

export const DadosExercicio = styled.div`
  display: flex;
  gap: 1rem;
  color: #ccc;
  font-size: 0.9rem;
`;

export const ComentarioTexto = styled.p`
  background: #333;
  border-radius: 6px;
  line-height: 1.6;
  color: #fefefe;
`;