import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<SignIn />} />
        
        {/* Rotas de autenticação */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />


      </Routes>
    </Router>
  );
}