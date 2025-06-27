import styled, { keyframes } from 'styled-components';

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

export const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(-45deg, #121212, #1a1a1a, #121212, #1a1a1a);
  background-size: 400% 400%;
  animation: ${gradientFlow} 15s ease infinite;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 200px;
  }
`;

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    url('data:image/svg+xml;utf8,<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path fill="%23FF660022" d="M800,700Q750,900,550,850Q350,800,300,600Q250,400,450,350Q650,300,700,500Q750,700,800,700Z"/></svg>') no-repeat,
    url('data:image/svg+xml;utf8,<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path fill="%23FF660011" d="M400,300Q350,500,250,400Q150,300,250,150Q350,0,500,50Q650,100,600,250Q550,400,400,300Z"/></svg>') no-repeat;
  background-position: 20% 30%, 80% 70%;
  background-size: 40%, 30%;
  opacity: 0.8;
  animation: ${floatAnimation} 20s ease-in-out infinite;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const GlassCard = styled.div`
  width: 100%;
  max-width: 450px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
  padding: 2.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const Logo = styled.h1`
  color: #FF6600;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #FF6600, #FF8C00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const WelcomeMessage = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  transition: all 0.3s;
  
  &:focus {
    border-color: #FF6600;
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: transparent;
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s;
  
  &:hover {
    color: #FF6600;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:focus {
    outline: none;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  
  /* Ajuste o padding direito do input para o botão */
  ${Input} {
    padding-right: 45px;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 15px;
  top: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  transition: all 0.3s;
  pointer-events: none;
  
  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown) ~ & {
    top: -10px;
    left: 10px;
    font-size: 12px;
    background: #1a1a1a;
    padding: 0 5px;
    color: #FF6600;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(to right, #FF6600, #FF8C00);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(to right, #FF8C00, #FF6600);
    transition: all 0.3s;
    z-index: -1;
  }
  
  &:hover:before {
    width: 100%;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 102, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &:before {
      width: 0;
    }
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  background: rgba(255, 0, 0, 0.1);
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 14px;
  border: 1px solid rgba(255, 0, 0, 0.2);
`;

export const InspirationContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 500px;
  padding: 2rem;
  text-align: center;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const InspirationTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: #FF6600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const InspirationSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;