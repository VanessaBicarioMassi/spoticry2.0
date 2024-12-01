import React from "react";
import { login } from "../services/authService";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  const handleLogin = async (credentials) => {
    try {
      const data = await login(credentials.email, credentials.password);
      localStorage.setItem("token", data.token); 
      alert("Login bem-sucedido!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
