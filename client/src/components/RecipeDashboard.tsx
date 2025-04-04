import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteRecipe,
  getAllRecipes,
  postRecipe,
  updateRecipe,
} from "../services/request"; // Assure-toi d'avoir la fonction updateRecipe dans tes services
import "../styles/RecipeDetails.css";

// À adapter si tu as déjà un type RecipeType
type RecipeType = {
  id?: number;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  difficulty: string;
  duration: string;
  servings: number;
  picture: string;
};

export default function RecipeDashboard() {
  const [formData, setFormData] = useState<RecipeType>({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    difficulty: "",
    duration: "",
    servings: 1,
    picture: "",
  });

  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data);
      } catch (error) {
        console.error("Erreur lors du chargement des recettes :", error);
        toast.error("Erreur lors du chargement des recettes");
      }
    };
    fetchRecipes();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      title,
      description,
      ingredients,
      instructions,
      difficulty,
      duration,
      picture,
      servings,
    } = formData;

    if (
      !title.trim() ||
      !description.trim() ||
      !ingredients.trim() ||
      !instructions.trim() ||
      !difficulty.trim() ||
      !duration.trim() ||
      !picture.trim() ||
      servings <= 0
    ) {
      toast.error("Tous les champs doivent être remplis correctement");
      return;
    }

    try {
      if (formData.id) {
        // Mise à jour de la recette existante
        await updateRecipe(formData.id, formData);
        setRecipes((prev) =>
          prev.map((recipe) => (recipe.id === formData.id ? formData : recipe)),
        );
        toast.success("Recette modifiée avec succès");
      } else {
        // Ajout d'une nouvelle recette
        const newRecipe = await postRecipe(formData);
        setRecipes((prev) => [...prev, newRecipe]);
        toast.success("Recette ajoutée avec succès");
      }

      setFormData({
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        difficulty: "",
        duration: "",
        servings: 1,
        picture: "",
      });
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout ou de la modification de la recette :",
        error,
      );
      toast.error("Erreur lors de l'ajout ou de la modification de la recette");
    }
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;

    try {
      await deleteRecipe(id);
      setRecipes((prev) => prev.filter((r) => r.id !== id));
      toast.success("Recette supprimée");
    } catch (error) {
      console.error("Erreur lors de la suppression de la recette :", error);
      toast.error("Erreur lors de la suppression de la recette");
    }
  };

  const handleEdit = (recipe: RecipeType) => {
    setFormData(recipe);
  };

  return (
    <section className="recipe-dashboard">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <h1>{formData.id ? "Modifier la Recette" : "Ajouter une Recette"}</h1>

        <label htmlFor="title">Nom de la recette</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          autoComplete="off"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={formData.description}
          autoComplete="off"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <label htmlFor="ingredients">Ingrédients</label>
        <textarea
          id="ingredients"
          value={formData.ingredients}
          autoComplete="off"
          onChange={(e) =>
            setFormData({ ...formData, ingredients: e.target.value })
          }
        />

        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          value={formData.instructions}
          autoComplete="off"
          onChange={(e) =>
            setFormData({ ...formData, instructions: e.target.value })
          }
        />

        <label htmlFor="difficulty">Difficulté</label>
        <select
          id="difficulty"
          value={formData.difficulty}
          onChange={(e) =>
            setFormData({ ...formData, difficulty: e.target.value })
          }
        >
          <option value="">Sélectionnez une difficulté</option>
          <option value="Facile">Facile</option>
          <option value="Moyen">Moyen</option>
          <option value="Difficile">Difficile</option>
        </select>

        <label htmlFor="duration">Durée</label>
        <input
          type="text"
          id="duration"
          value={formData.duration}
          autoComplete="off"
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
        />

        <label htmlFor="servings">Portions</label>
        <input
          type="number"
          id="servings"
          value={formData.servings}
          min="1"
          onChange={(e) => {
            const value = Number.parseInt(e.target.value, 10);
            setFormData({
              ...formData,
              servings: Number.isNaN(value) ? 1 : value,
            });
          }}
        />

        <label htmlFor="picture">Image (URL)</label>
        <input
          type="text"
          id="picture"
          value={formData.picture}
          autoComplete="off"
          onChange={(e) =>
            setFormData({ ...formData, picture: e.target.value })
          }
        />

        <button className="create" type="submit">
          {formData.id ? "+ Modifier" : "+ Ajouter"}
        </button>
      </form>

      <div className="recipe-list">
        <h2>Recettes Ajoutées</h2>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button type="button" onClick={() => handleEdit(recipe)}>
              Modifier
            </button>
            <button type="button" onClick={() => handleDelete(recipe.id)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <ToastContainer />
    </section>
  );
}
