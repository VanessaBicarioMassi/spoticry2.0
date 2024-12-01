import apiClient from "../utils/apiClient";

export const loginLocal = async (email, password) => {
  try {
    const response = await apiClient.post("/login-local", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao realizar login local";
  }
};
