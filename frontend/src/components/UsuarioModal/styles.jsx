import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: #fff;
  padding: 2rem;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255, 102, 0, 0.2);

  h2 {
    color: #FF6600;
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-top: 1rem;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  button {
    flex: 1;
    background-color: #FF6600;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;

    &.cancelar {
      background-color: #ccc;
      color: black;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
