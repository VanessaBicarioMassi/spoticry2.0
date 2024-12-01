import React from "react";
import { login } from "../services/authServices";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const handleLogin = async ({ email, password }) => {
    try {
      const data = await login(email, password);
      alert(`Login realizado com sucesso! Token: ${data.token}`);
      console.log(data); 
    } catch (error) {
      alert(error || "Erro ao realizar login");
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
