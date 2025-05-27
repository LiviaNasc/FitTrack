import React, { createContext, useContext, useState, useEffect } from "react";
import authService from "../../services/authService";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(authService.getUser());

  const login = async (email, senha) => {
    const usuario = await authService.login(email, senha);
    setUser(usuario);
    return usuario;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  useEffect(() => {
    const savedUser = authService.getUser();
    if (savedUser) setUser(savedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
