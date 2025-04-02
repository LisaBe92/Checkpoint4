import express from "express";
import recipeActions from "./modules/recipe/recipeActions";

const router = express.Router();

// Route pour obtenir toutes les recettes (GET)
router.get("/recipes", recipeActions.browse);

// Route pour obtenir une recette par ID (GET)
router.get("/recipes/:id", recipeActions.read);

// Route pour ajouter une nouvelle recette (POST)
router.post("/recipes", recipeActions.add);

// Route pour mettre à jour une recette existante (PUT)
router.put("/recipes/:id", recipeActions.update); // Tu devras implémenter la méthode 'update' dans recipeActions

// Route pour supprimer une recette (DELETE)
router.delete("/recipes/:id", recipeActions.deleteRecipe); // Tu devras également implémenter la méthode 'delete' dans recipeActions

export default router;
