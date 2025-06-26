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


export const SearchContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
`;

export const SearchInput = styled(Input)`
  width: 100%;
  padding: 12px 20px;
  margin: 0;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 16px;
  background-color: #2a2a2a;
  color: white;

  &:focus {
    border-color: #FF6600;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const FilterSelect = styled.select`
  padding: 10px 15px;
  border-radius: 25px;
  border: 2px solid #e0e0e0;
  flex: 1;
  min-width: 200px;
  background-color: #2a2a2a;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;

  &:focus {
    border-color: #FF6600;
    outline: none;
  }
`;

export const ExerciciosList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 2rem;
`;

export const ExercicioCard = styled.div`
  background: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #FF6600;
  transition: transform 0.3s;
  height: 300px; /* Altura fixa */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ExercicioNome = styled.h3`
  margin-top: 0;
  color: #FF6600;
  font-size: 1.2rem;
`;

export const ExercicioDescricao = styled.p`
  color: #ccc;
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5;
  overflow-y: auto; 
  max-height: 150px; 
  padding-right: 8px; 
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #FF6600;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #E55C00;
  }
`;

export const ExercicioMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  margin-top: 15px;

  span {
    background: rgba(255, 102, 0, 0.2);
    color: #FF6600;
    padding: 4px 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }
`;

export const NoResultsMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #ccc;
  font-size: 18px;
  grid-column: 1 / -1;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #ccc;
  font-size: 18px;
`;

export const SuccessMessage = styled.div`
  color: #4caf50;
  background-color: rgba(76, 175, 80, 0.1);
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled(Form)`
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    color: #FF6600;
  }
`;

export const AddButton = styled(Button)`
  width: auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  &:hover {
    transform: translateY(-2px);
  }
`;