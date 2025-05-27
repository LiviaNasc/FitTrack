const API_URL = "http://localhost:3000";

const login = async (email, senha) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.erro || "Erro ao fazer login");

  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.usuario));

  return data.usuario;
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export default { login, logout, getUser };
