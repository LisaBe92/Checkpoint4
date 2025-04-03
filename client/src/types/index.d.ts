interface RecipeType {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  servings: number;
  instructions: string;
  picture: string;
  ingredients: string;
}

interface RecipeProps {
  recipe: Recipe;
}
