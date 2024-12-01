import apiClient from "../utils/apiClient";

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao fazer login";
  }
};
