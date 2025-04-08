import databaseClient from "./client";
import type { Result, Rows } from "./client";

type Recipe = {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
  servings: number;
  instructions: string;
  picture: string;
};

class RecipeRepository {
  // Méthode pour ajouter une recette
  static async create(recipe: Omit<Recipe, "id">): Promise<number> {
    try {
      const [result] = await databaseClient.query<Result>(
        "INSERT INTO recipes (title, description, duration, difficulty, servings, instructions, picture) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          recipe.title,
          recipe.description,
          recipe.duration,
          recipe.difficulty,
          recipe.servings,
          recipe.instructions,
          recipe.picture,
        ],
      );
      return result.insertId;
    } catch (error) {
      console.error("Erreur lors de l'ajout de la recette :", error);
      throw new Error("Impossible d'ajouter la recette.");
    }
  }

  // Méthode pour récupérer toutes les recettes
  async getAll(): Promise<Recipe[]> {
    try {
      const [rows] = await databaseClient.query<Rows>("SELECT * FROM recipes");
      return rows as Recipe[];
    } catch (error) {
      console.error("Erreur lors de la récupération des recettes :", error);
      throw new Error("Impossible de récupérer les recettes.");
    }
  }

  // Méthode pour récupérer une recette par ID
  async getById(id: number): Promise<Recipe | null> {
    try {
      const [rows] = await databaseClient.query<Rows>(
        "SELECT * FROM recipes WHERE id = ?",
        [id],
      );
      return rows.length > 0 ? (rows[0] as Recipe) : null;
    } catch (error) {
      console.error("Erreur lors de la récupération de la recette :", error);
      throw new Error("Impossible de récupérer la recette.");
    }
  }

  // Méthode pour mettre à jour une recette
  async update(id: number, recipe: Partial<Omit<Recipe, "id">>): Promise<void> {
    try {
      const fields = Object.keys(recipe)
        .map((key) => `${key} = ?`)
        .join(", ");
      const values = Object.values(recipe);
      if (fields.length === 0) {
        throw new Error("Aucun champ à mettre à jour.");
      }
      await databaseClient.query(`UPDATE recipes SET ${fields} WHERE id = ?`, [
        ...values,
        id,
      ]);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la recette :", error);
      throw new Error("Impossible de mettre à jour la recette.");
    }
  }

  // Méthode pour supprimer une recette
  async delete(id: number): Promise<void> {
    try {
      const [result] = await databaseClient.query<Result>(
        "DELETE FROM recipes WHERE id = ?",
        [id],
      );
      if (result.affectedRows === 0) {
        throw new Error("Recette non trouvée.");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de la recette :", error);
      throw new Error("Impossible de supprimer la recette.");
    }
  }
}

export default RecipeRepository;
export type { Recipe };
