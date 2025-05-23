import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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

export const AdminButton = styled.button`
  background-color: #FF6600;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 20px;
  
  &:hover {
    background-color: #E55C00;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
