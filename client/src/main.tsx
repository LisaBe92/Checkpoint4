import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import des composants principaux
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { getAllRecipes, getRecipeById } from "./services/request";

// Configuration du routeur
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const recipes = await getAllRecipes();
            return { recipes };
          } catch (error) {
            console.error("Erreur lors du chargement des recettes :", error);
            throw new Response("Erreur lors du chargement des recettes", {
              status: 500,
            });
          }
        },
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/recipes/:recipeId",
        element: <RecipeDetails />,
        loader: async ({ params }) => {
          try {
            const recipeId = params.recipeId;
            if (!recipeId) {
              throw new Response("ID de recette manquant", { status: 400 });
            }
            const recipe = await getRecipeById(Number(recipeId));
            return { recipe };
          } catch (error) {
            console.error("Erreur lors du chargement de la recette :", error);
            throw new Response("Erreur lors du chargement de la recette", {
              status: 500,
            });
          }
        },
      },
    ],
  },
]);

// Récupération de l'élément racine dans le DOM
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Votre document HTML doit contenir un <div id="root"></div>`);
}

// Rendu de l'application
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
