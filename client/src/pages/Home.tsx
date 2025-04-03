import { useLoaderData } from "react-router-dom";

export default function Home() {
  const { recipes } = useLoaderData() as {
    recipes: RecipeType[];
  };
  return (
    <>
      <h1>Home page</h1>
      {recipes.map((recipe) => (
        <p key={recipe.id}>{recipe.title} </p>
      ))}
    </>
  );
}
