import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Recipe = {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  servings: number;
  instructions: string;
  picture: string;
  ingredients: string;
};

class RecipeRepository {
  // The C of CRUD - Create operation
  async create(recipe: Omit<Recipe, "id">): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO recipes (title, description, duration, difficulty, servings, instructions, picture, ingredients) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        recipe.title,
        recipe.description,
        recipe.duration,
        recipe.difficulty,
        recipe.servings,
        recipe.instructions,
        recipe.picture,
        recipe.ingredients,
      ],
    );
    return result.insertId;
  }

  // The R of CRUD - Read operation
  async read(id: number): Promise<Recipe | null> {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM recipes WHERE id = ?",
      [id],
    );
    return rows[0] ? (rows[0] as Recipe) : null; // Si aucune recette trouvée, retourner null
  }

  // The Rs of CRUD - Read All operation
  async readAll(): Promise<Recipe[]> {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM recipes");
    return rows as Recipe[];
  }

  // The U of CRUD - Update operation
  async update(id: number, recipe: Omit<Recipe, "id">): Promise<Recipe | null> {
    const [result] = await databaseClient.query<Result>(
      "UPDATE recipes SET title = ?, description = ?, duration = ?, difficulty = ?, servings = ?, instructions = ?, picture = ?, ingredients = ? WHERE id = ?",
      [
        recipe.title,
        recipe.description,
        recipe.duration,
        recipe.difficulty,
        recipe.servings,
        recipe.instructions,
        recipe.picture,
        recipe.ingredients,
        id,
      ],
    );

    if (result.affectedRows > 0) {
      const [rows] = await databaseClient.query<Rows>(
        "SELECT * FROM recipes WHERE id = ?",
        [id],
      );
      return rows[0] as Recipe;
    }
    return null; // Si aucune recette n'a été mise à jour, retourner null
  }

  // The D of CRUD - Delete operation
  async delete(id: number): Promise<boolean> {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM recipes WHERE id = ?",
      [id],
    );
    return result.affectedRows > 0; // Retourne true si la suppression a été effectuée, sinon false
  }
}

export default new RecipeRepository();
