import React from "react";
import LoginForm from "../components/LoginForm";
import { login } from "../services/authServices";

const LoginPage = () => {
  const handleLogin = async ({ email, password }) => {
    try {
      const data = await login(email, password);
      alert("Login realizado com sucesso!");
      console.log(data);
    } catch (error) {
      alert("Erro ao realizar login");
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
