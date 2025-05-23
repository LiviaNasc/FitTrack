import styled from 'styled-components';

export const LogoutButtonStyled = styled.button`
  position: absolute;
  top: 30px;
  right: 100px;
  padding: 8px 16px;
  background-color: #ff3333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;