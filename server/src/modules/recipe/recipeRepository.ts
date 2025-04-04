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
      // Si des ingrédients sont fournis, gérer leur mise à jour
      if (recipe.ingredients && recipe.ingredients.length > 0) {
        // Supprimer les anciennes relations de recette avec ingrédients
        await databaseClient.query<Result>(
          "DELETE FROM recipe_ingredients WHERE recipe_id = ?",
          [id],
        );

        // Ajouter les nouveaux ingrédients
        const ingredientsArray = recipe.ingredients.split(","); // Si vous fournissez une chaîne d'ingrédients séparés par une virgule
        for (const ingredientName of ingredientsArray) {
          const [ingredientRows] = await databaseClient.query<Rows>(
            "SELECT id FROM ingredients WHERE name = ?",
            [ingredientName.trim()],
          );

          if (ingredientRows.length > 0) {
            const ingredientId = ingredientRows[0].id;
            await databaseClient.query<Result>(
              "INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (?, ?)",
              [id, ingredientId],
            );
          } else {
            // Si l'ingrédient n'existe pas, le créer
            const [newIngredientResult] = await databaseClient.query<Result>(
              "INSERT INTO ingredients (name) VALUES (?)",
              [ingredientName.trim()],
            );
            const newIngredientId = newIngredientResult.insertId;
            await databaseClient.query<Result>(
              "INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (?, ?)",
              [id, newIngredientId],
            );
          }
        }
      }

      // Récupérer la recette mise à jour
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

  // Nouvelle méthode : récupérer les ingrédients d'une recette
  async getIngredientsForRecipe(id: number): Promise<string[]> {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT i.name
       FROM ingredients i
       LEFT JOIN recipe_ingredients ri ON i.id = ri.ingredient_id
       WHERE ri.recipe_id = ?`,
      [id],
    );

    // Extraire les noms des ingrédients et les retourner sous forme de tableau
    return rows.map((row) => row.name);
  }
}

export default new RecipeRepository();
