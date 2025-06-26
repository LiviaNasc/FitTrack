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
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

export const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  > ${FormGroup} {
    flex: 1;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    border-color: #FF6600;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background-color: #FF6600;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
  align-self: flex-start;

  &:hover {
    background-color: #e65c00;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const MedidasContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

export const MedidasTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

export const MedidasTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #f9f9f9;
    font-weight: 600;
    color: #555;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

export const LoadingMessage = styled.div`
  color: #666;
  text-align: center;
  padding: 2rem;
`;

export const EmptyMessage = styled.div`
  color: #666;
  text-align: center;
  padding: 2rem;
  font-style: italic;
`;