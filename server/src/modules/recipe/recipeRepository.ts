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
};

class RecipeRepository {
  // The C of CRUD - Create operation
  async create(recipe: Omit<Recipe, "id">): Promise<number> {
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
  }

  // The R of CRUD - Read operation
  async read(id: number): Promise<Recipe | null> {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM recipes WHERE id = ?",
      [id],
    );
    return rows[0] ? (rows[0] as Recipe) : null;
  }

  // The Rs of CRUD - Read All operation
  async readAll(): Promise<Recipe[]> {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM recipes");
    return rows as Recipe[];
  }

  // The U of CRUD - Update operation
  async update(id: number, recipe: Omit<Recipe, "id">): Promise<Recipe | null> {
    const [result] = await databaseClient.query<Result>(
      "UPDATE recipes SET title = ?, description = ?, duration = ?, difficulty = ?, servings = ?, instructions = ?, picture = ? WHERE id = ?",
      [
        recipe.title,
        recipe.description,
        recipe.duration,
        recipe.difficulty,
        recipe.servings,
        recipe.instructions,
        recipe.picture,
        id,
      ],
    );

    if (result.affectedRows === 0) {
      return null;
    }

    return this.read(id);
  }

  // The D of CRUD - Delete operation
  async delete(id: number): Promise<boolean> {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM recipes WHERE id = ?",
      [id],
    );
    return result.affectedRows > 0;
  }

  // Nouvelle méthode : récupérer les ingrédients d'une recette
  async getIngredientsForRecipe(id: number): Promise<string[]> {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT i.name
       FROM ingredients i
       LEFT JOIN recipe_ingredients ri ON i.id = ri.ingredient_id
       WHERE ri.recipe_id = ?`,
      [id],
    );

    return rows.map((row) => row.name);
  }
}

export default new RecipeRepository();
