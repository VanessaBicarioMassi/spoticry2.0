import apiClient from "../utils/apiClient";

export const getAllSongs = async () => {
  try {
    const response = await apiClient.get(
      "https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song",
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar as músicas";
  }
};
