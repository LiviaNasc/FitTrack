import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(255, 102, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #333;
  }

  button {
    background: none;
    border: none;
    color: #FF6600;
    cursor: pointer;
    margin-left: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;