import React from "react";
import { loginLocal } from "../services/authService";
import LoginLocalForm from "../components/LoginLocalForm";

const LoginLocalPage = () => {
  const handleLogin = async (credentials) => {
    try {
      const data = await loginLocal(credentials.email, credentials.password);
      localStorage.setItem("token", data.token);
      alert("Login local bem-sucedido!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Login Local</h1>
      <LoginLocalForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginLocalPage;
