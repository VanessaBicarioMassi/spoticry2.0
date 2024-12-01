import React from "react";
import { loginLocal } from "../services/authServices";
import LoginLocalForm from "../components/LoginLocalForm";

const LoginLocalPage = () => {
  const handleLoginLocal = async ({ email, password }) => {
    try {
      const data = await loginLocal(email, password);
      alert("Login Local realizado com sucesso!");
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Login Local</h1>
      <LoginLocalForm onSubmit={handleLoginLocal} />
    </div>
  );
};

export default LoginLocalPage;
