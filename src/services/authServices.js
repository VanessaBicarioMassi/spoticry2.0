import apiClient from "../utils/apiClient";

export const login = async (email, password) => {
  try {
    const response = await apiClient.post(
      "https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/user/login",
      { email, password }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao realizar login";
  }
};

export const loginLocal = async (email, password) => {
  try {
    const response = await apiClient.post("/login-local", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao realizar login local";
  }
};
