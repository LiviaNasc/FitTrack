const API_URL = "http://localhost:3000";

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
  registrarProgressoExercicio: (exercicioId, dados) =>
    apiRequest(`/treino/treino-exercicio/${exercicioId}`, 'PUT', dados),
  estatisticasAdesao: () => apiRequest('/treino/estatisticasAdesao')
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
  deletarUsuario: (id) => apiRequest(`/alunos/${id}`, 'DELETE'),
  atualizarUsuario: (id, dados) => apiRequest(`/alunos/${id}`, 'PUT', dados),
};

export const medidasService = {
  cadastrarMedida: (dados) => apiRequest('/medidas/cadastrar', 'POST', dados),
  listarMedidasPorAluno: (alunoId) => apiRequest(`/medidas/listar/${alunoId}`),
  excluirMedida: (id) => apiRequest(`/medidas/excluir/${id}`, 'DELETE') 
};

// instrutores
export const instrutorService = {
  buscarTodos: () => apiRequest('/instrutores/listarInstrutores'),
  buscarPorId: (id) => apiRequest(`/instrutores/${id}`),
  deletarUsuario: (id) => apiRequest(`/instrutores/${id}`, 'DELETE'),
  atualizarUsuario: (id, dados) => apiRequest(`/instrutores/${id}`, 'PUT', dados),
};

export default apiRequest;