import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const Header = styled.header`
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

export const Button = styled.button`
  background-color: #FF6600;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }
`;

export const Lista = styled.div`
  display: grid;
  gap: 1rem;
`;
