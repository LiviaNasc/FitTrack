import styled from 'styled-components';

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

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(255, 102, 0, 0.2);
  border-top: 5px solid #FF6600;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: 0.3s ease;

  &:focus {
    border-color: #FF6600;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
  }
`;

export const Textarea = styled.textarea`
  min-height: 80px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  resize: vertical;
  transition: 0.3s ease;

  &:focus {
    border-color: #FF6600;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
  }
`;

export const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: 0.3s ease;

  &:focus {
    border-color: #FF6600;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
  }
`;

export const Button = styled.button`
  padding: 10px 16px;
  background-color: ${props => props.danger ? '#dc3545' : '#FF6600'};
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.danger ? '#c82333' : '#e65c00'};
  }
`;

export const ExercicioContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fafafa;
`;

export const ExercicioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  > div {
    flex: 1 1 30%;
    min-width: 120px;
  }
`;

export const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;
