import React from "react";
import { login } from "../services/authServices";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const handleLogin = async ({ email, password }) => {
    try {
      const data = await login(email, password);
      alert("Login realizado com sucesso!");
      console.log(data);
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
