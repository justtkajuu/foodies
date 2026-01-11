import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const { id } = useParams();

  const recipe = data.find((r) => r.id === id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      ins: recipe?.ins,
      category: recipe?.category,
    },
  });

  /* ===================== FAVOURITE LOGIC ===================== */
  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const isFav = favourite.some((f) => f.id === recipe?.id);

  const toggleFavourite = () => {
    let updatedFav;

    if (isFav) {
      updatedFav = favourite.filter((f) => f.id !== recipe.id);
      toast.info("Removed from favourites");
    } else {
      updatedFav = [...favourite, recipe];
      toast.success("Added to favourites");
    }

    setFavourite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
  };

  /* ===================== UPDATE ===================== */
  const updateHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => r.id === id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...updatedRecipe };

    setdata(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success("Recipe updated!");
  };

  /* ===================== DELETE ===================== */
  const deleteHandler = () => {
    // 1️⃣ Remove from recipes
    const filteredRecipes = data.filter((r) => r.id !== id);
    setdata(filteredRecipes);
    localStorage.setItem("recipes", JSON.stringify(filteredRecipes));

    // 2️⃣ Remove from favourites if exists
    const fav = JSON.parse(localStorage.getItem("fav")) || [];
    const updatedFav = fav.filter((f) => f.id !== id);
    setFavourite(updatedFav); // update state too
    localStorage.setItem("fav", JSON.stringify(updatedFav));

    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  return (
    <div className="min-h-screen px-5 py-10 flex flex-col md:flex-row gap-10 font-gilroy">
      {/* ===================== PREVIEW CARD ===================== */}
      <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-xl p-6 space-y-4">
        {/* Image + Fav */}
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            className="w-full h-64 object-cover rounded-2xl"
          />

          <button
            onClick={toggleFavourite}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:scale-110 transition"
          >
            {isFav ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-red-500 text-xl" />
            )}
          </button>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>

        <p className="text-gray-600">
          <span className="font-semibold text-red-500">Description:</span>{" "}
          {recipe.desc}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold text-red-500">Ingredients:</span>{" "}
          {recipe.ingr}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold text-red-500">Instructions:</span>{" "}
          {recipe.ins}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold text-red-500">Category:</span>{" "}
          {recipe.category}
        </p>
      </div>

      {/* ===================== EDIT FORM ===================== */}
      <form
        onSubmit={handleSubmit(updateHandler)}
        className="w-full md:w-1/2 bg-white rounded-3xl shadow-xl p-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-red-500 text-center">
          Edit Recipe
        </h2>

        <input
          {...register("image")}
          type="url"
          placeholder="Image URL"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
        />

        <textarea
          {...register("desc")}
          rows="3"
          placeholder="Description"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
        />

        <textarea
          {...register("ingr")}
          rows="3"
          placeholder="Ingredients (comma separated)"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
        />

        <textarea
          {...register("ins")}
          rows="3"
          placeholder="Instructions"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
        />

        <select
          {...register("category")}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Update
          </button>

          <button
            type="button"
            onClick={deleteHandler}
            className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleRecipe;
