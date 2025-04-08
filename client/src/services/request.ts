import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

// Récupérer toutes les recettes
const getAllRecipes = async () => {
  try {
    const response = await axios.get(`${baseUrl}/recipes`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
    throw new Error("Failed to fetch recipes");
  }
};

// Récupérer une recette par ID
const getRecipeById = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la recette avec l'ID ${id} :`,
      error,
    );
    throw new Error("Failed to fetch recipe by ID");
  }
};

// Ajouter une nouvelle recette
const postRecipe = async (recipeData: {
  title: string;
  description: string;
  ingredients: string;
}) => {
  try {
    const response = await axios.post(`${baseUrl}/recipes`, recipeData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout de la recette :", error);
    throw new Error("Failed to add recipe");
  }
};

// Supprimer une recette
const deleteRecipe = async (id: number) => {
  try {
    await axios.delete(`${baseUrl}/recipes/${id}`);
    return { success: true };
  } catch (error) {
    console.error(
      `Erreur lors de la suppression de la recette avec l'ID ${id} :`,
      error,
    );
    throw new Error("Failed to delete recipe");
  }
};

// Récupérer les ingrédients d'une recette par ID
const getIngredientsForRecipe = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/recipes/${id}/ingredients`);
    return response.data; // Liste des ingrédients
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des ingrédients pour la recette avec l'ID ${id} :`,
      error,
    );
    throw new Error("Failed to fetch ingredients for recipe");
  }
};

// Mettre à jour une recette
const updateRecipe = async (
  id: number,
  updatedRecipe: {
    title: string;
    description: string;
    instructions: string;
    difficulty: string;
    duration: string;
    servings: number;
    picture: string;
  },
) => {
  try {
    const response = await axios.put(`${baseUrl}/recipes/${id}`, updatedRecipe);
    return response.data;
  } catch (error) {
    console.error(
      `Erreur lors de la mise à jour de la recette avec l'ID ${id} :`,
      error,
    );
    throw new Error("Failed to update recipe");
  }
};

export {
  getAllRecipes,
  getRecipeById,
  postRecipe,
  deleteRecipe,
  getIngredientsForRecipe,
  updateRecipe,
};
