const API_URL = "http://localhost:3000";

// fazer requisições autenticadas
const apiRequest = async (endpoint, method = 'GET', body = null) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.erro || 'Erro na requisição');
  }

  // Se a resposta for 204 (No Content), não tentamos fazer parse do JSON
  if (response.status === 204) {
    return null;
  }

  return await response.json();
};

// treinos
export const treinoService = {
  getTreinosByAluno: (alunoId) => apiRequest(`/treino/visualizarTreinosAluno/${alunoId}`),
  addObservacao: (treinoId, observacao) => 
    apiRequest(`/treino/${treinoId}/observacao`, 'POST', { observacao }),
  marcarComoConcluido: (treinoId) => 
    apiRequest(`/treino/${treinoId}/concluir`, 'PATCH'),
};

// exercícios
export const exercicioService = {
  listarExercicios: () => apiRequest('/exercicios'),
  criarExercicio: (exercicioData) => 
    apiRequest('/exercicios', 'POST', exercicioData),
};

// usuários
export const usuarioService = {
  getUsuario: (id) => apiRequest(`/usuarios/${id}`),
  atualizarUsuario: (id, dados) => 
    apiRequest(`/usuarios/${id}`, 'PUT', dados),
};

// alunos
export const alunoService = {
  buscarTodos: () => apiRequest('/alunos/listarAlunos'),
  buscarPorId: (id) => apiRequest(`/alunos/${id}`),
};

// instrutores
export const instrutorService = {
  buscarTodos: () => apiRequest('/instrutores/listarInstrutores'),
  buscarPorId: (id) => apiRequest(`/instrutores/${id}`),
};

export default apiRequest;