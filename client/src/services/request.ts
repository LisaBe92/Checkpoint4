import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const getAllRecipes = () => {
  return axios
    .get(`${baseUrl}/recipes`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getRecipeById = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch recipes");
  }
};

export { getAllRecipes, getRecipeById };
