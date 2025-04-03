import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const { recipes } = useLoaderData() as {
    recipes: RecipeType[];
  };

  return (
    <>
      <h1>Home page</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="recipe-card"
          >
            <h2>{recipe.title}</h2>
            <img
              src={recipe.picture}
              alt={recipe.title}
              className="recipe-image"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
