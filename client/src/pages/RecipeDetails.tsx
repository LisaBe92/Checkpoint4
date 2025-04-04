import { useLoaderData } from "react-router-dom";

type IngredientType = {
  name: string;
  quantity: number;
  unit: string;
};

type RecipeType = {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  servings: number;
  instructions: string;
  picture: string;
  ingredients: IngredientType[] | null; // Assurez-vous que ingredients peut être null ou un tableau
};

export default function RecipeDetails() {
  const { recipe } = useLoaderData() as { recipe: RecipeType };

  if (!recipe) {
    return <div>Recette introuvable</div>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <img src={recipe.picture} alt={recipe.title} />
      <p>
        <strong>Description :</strong> {recipe.description}
      </p>
      <p>
        <strong>Durée :</strong> {recipe.duration}
      </p>
      <p>
        <strong>Difficulté :</strong> {recipe.difficulty}
      </p>
      <p>
        <strong>Portions :</strong> {recipe.servings}
      </p>

      <h2>Instructions :</h2>
      <p>{recipe.instructions}</p>

      <h3>Ingrédients :</h3>
      <ul>
        {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
          recipe.ingredients.map((ingredient, index) => (
            <li key={`${ingredient.name}-${index}`}>
              {ingredient.quantity} {ingredient.unit} de {ingredient.name}
            </li>
          ))
        ) : (
          <li>Aucun ingrédient disponible.</li>
        )}
      </ul>
    </div>
  );
}
