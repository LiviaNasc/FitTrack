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

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  background-color: #1a1a1a; /* Fundo escuro */
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


export const ErrorMessage = styled.span`
  color: #ff3333;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
  background: rgba(255, 0, 0, 0.1);
  padding: 8px;
  border-radius: 4px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FitnessIcon = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 40px;
  color: #FF6600;
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #666;
  font-size: 14px;
`;

export const StrongText = styled.span`
  color: #FF6600;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #E55C00;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: vertical;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;


