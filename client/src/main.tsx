import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { getAllRecipes, getRecipeById } from "./services/request";

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
        path: "/about",
        element: <About />,
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

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Votre document HTML doit contenir un <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
