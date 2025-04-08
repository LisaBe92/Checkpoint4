import type { RequestHandler } from "express";
import recipeRepository from "./recipeRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Récupérer toutes les recettes
    const recipes = await recipeRepository.readAll();
    // Retourner toutes les recettes en format JSON
    res.json(recipes);
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number(req.params.id); // Récupérer l'id de la recette depuis les paramètres de la requête
    const recipe = await recipeRepository.read(recipeId); // Récupérer la recette par son id
    if (recipe == null) {
      res.sendStatus(404); // Si la recette n'est pas trouvée, envoyer un statut 404
    } else {
      res.json(recipe); // Retourner la recette en format JSON
    }
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extraire les données de la recette envoyées dans la requête
    const newRecipe = {
      title: req.body.title,
      description: req.body.description,
      duration: req.body.duration,
      difficulty: req.body.difficulty,
      servings: req.body.servings,
      instructions: req.body.instructions,
      picture: req.body.picture,
    };

    // Créer la nouvelle recette dans la base de données
    const insertId = await recipeRepository.create(newRecipe);

    // Retourner l'ID de la nouvelle recette avec un statut HTTP 201 (créé)
    res.status(201).json({ insertId });
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
};

// The U of BREAD - Update operation
const update: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number(req.params.id); // Récupérer l'id de la recette à mettre à jour
    const updatedRecipe = {
      title: req.body.title,
      description: req.body.description,
      duration: req.body.duration,
      difficulty: req.body.difficulty,
      servings: req.body.servings,
      instructions: req.body.instructions,
      picture: req.body.picture,
      ingredients: req.body.ingredients,
    };

    // Mettre à jour la recette dans la base de données
    const updated = await recipeRepository.update(recipeId, updatedRecipe);

    if (updated) {
      res.json(updated); // Retourner la recette mise à jour
    } else {
      res.sendStatus(404); // Si la recette n'a pas été mise à jour, renvoyer un statut 404
    }
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
};

// The D of BREAD - Delete operation
const deleteRecipe: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number(req.params.id); // Récupérer l'id de la recette à supprimer
    const deleted = await recipeRepository.delete(recipeId);

    if (deleted) {
      res.sendStatus(204); // Retourner un statut 204 (No Content) si la recette a été supprimée
    } else {
      res.sendStatus(404); // Si la recette n'a pas été supprimée, retourner un statut 404
    }
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
};

export default { browse, read, add, update, deleteRecipe };
