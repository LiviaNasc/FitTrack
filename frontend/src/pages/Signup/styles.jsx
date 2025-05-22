import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  background-color: #1a1a1a;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7)
  );
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(255, 102, 0, 0.3);
  border-top: 5px solid #FF6600;
`;

export const Title = styled.h2`
  color: #FF6600; /* Laranja vibrante */
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s;

  &:focus {
    border-color: #FF6600;
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 102, 0, 0.2);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #FF6600;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #E55C00;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const LinkText = styled.p`
  font-size: 14px;
  color: #757575;
  text-align: center;
  margin-top: 20px;
`;

export const StrongText = styled.span`
  color:rgb(229, 127, 49);
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff3860;
  font-size: 13px;
  margin-bottom: 10px;
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;


export const Select = styled.select`
  width: 100%;
  color: #757575;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s;
  appearance: none; /* Remove o estilo padrão do navegador */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6600' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  
  &:focus {
    border-color: #FF6600;
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 102, 0, 0.2);
  }

  &:hover {
    border-color: #FF6600;
  }

  /* Estilo das opções */
  option {
    padding: 8px;
    background: white;
    color: #333;
    
    &:hover {
      background-color: #FF6600;
      color: white;
    }
  }

  option:checked {
    background-color: #FF6600;
    color: white;
  }
`;