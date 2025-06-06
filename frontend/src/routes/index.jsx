import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import AdminHome from '../pages/admin/Home';
import AlunoHome from '../pages/aluno/Home';
import InstrutorHome from '../pages/instrutor/Home';
import ProtectedRoute from './ProtectedRoute';
import InstrutorCadastrarTreino from '../pages/instrutor/CadastrarTreino';
import InstrutorCadastrarExercicio from '../pages/instrutor/CadastrarExercicio';
import InstrutorAcompanharAluno from '../pages/instrutor/Acompanhar';
import AlunoTreinos from '../pages/aluno/Treinos';

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        
        <Route path="/signup" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <SignUp />
          </ProtectedRoute>
        } />

        <Route path="/admin/home" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminHome />
          </ProtectedRoute>
        } />
        
        <Route path="/instrutor/home" element={
          <ProtectedRoute allowedRoles={['instrutor']}>
            <InstrutorHome />
          </ProtectedRoute>
        } />

        <Route path="/instrutor/cadastrarTreino" element={
          <ProtectedRoute allowedRoles={['instrutor']}>
            <InstrutorCadastrarTreino />
          </ProtectedRoute>
        } />

        <Route path="/instrutor/cadastrarExercicio" element={
          <ProtectedRoute allowedRoles={['instrutor']}>
            <InstrutorCadastrarExercicio />
          </ProtectedRoute>
        } />

        <Route path="/instrutor/acompanharAluno" element={
          <ProtectedRoute allowedRoles={['instrutor']}>
            <InstrutorAcompanharAluno />
          </ProtectedRoute>
        } />

        
        <Route path="/aluno/home" element={
          <ProtectedRoute allowedRoles={['aluno']}>
            <AlunoHome />
          </ProtectedRoute>
        } />

        <Route path="/aluno/treinos" element={
          <ProtectedRoute allowedRoles={['aluno']}>
            <AlunoTreinos />
          </ProtectedRoute>
        } />


        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}