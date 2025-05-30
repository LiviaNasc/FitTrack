import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ExercicioContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const ExercicioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 15px;

  > div {
    flex: 1;
  }
`;

// Adicione isso ao seu Button existente
export const Button = styled.button`
  // ... estilos existentes
  
  ${props => props.danger && `
    background-color: #dc3545;
    &:hover {
      background-color: #c82333;
    }
  `}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  > input, > textarea, > select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  > h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }
`;

export const SuccessMessage = styled.span`
  color: #28a745;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
  background: rgba(40, 167, 69, 0.1);
  padding: 8px;
  border-radius: 4px;
`;  

export const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 14px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(255, 102, 0, 0.2);
  border-top: 5px solid #FF6600; /* Destaque laranja */
`;