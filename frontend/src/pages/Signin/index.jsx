import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await login(email, password);
      switch(user.tipo) {
        case 'admin':
          navigate('/admin/home');
          break;
        case 'instrutor':
          navigate('/instrutor/home');
          break;
        case 'aluno':
          navigate('/aluno/home');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <C.LoginContainer>
      <C.LeftPanel>
        <C.BackgroundAnimation />
        <C.InspirationContent>
          <C.InspirationTitle>Sua Transformação Fitness</C.InspirationTitle>
          <C.InspirationSubtitle>
            Alcance seus objetivos com acompanhamento personalizado
          </C.InspirationSubtitle>
        </C.InspirationContent>
      </C.LeftPanel>
      
      <C.RightPanel>
        <C.GlassCard>
          <C.LoginForm onSubmit={handleSubmit}>
            <C.Logo>FitTrack</C.Logo>
            <C.WelcomeMessage>Bem-vindo de volta</C.WelcomeMessage>
            
            {error && <C.ErrorMessage>{error}</C.ErrorMessage>}

            <C.InputGroup>
              <C.Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
              />
              <C.InputLabel>Email</C.InputLabel>
            </C.InputGroup>

            <C.InputGroup>
              <C.Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 placeholder=" " 
                required
              />
              <C.InputLabel>Senha</C.InputLabel>
              <C.TogglePasswordButton 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />  }
              </C.TogglePasswordButton>
            </C.InputGroup>

            <C.SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? <C.Spinner /> : 'Acessar Sistema'}
            </C.SubmitButton>
          </C.LoginForm>
        </C.GlassCard>
      </C.RightPanel>
    </C.LoginContainer>
  );
}

export default SignIn;