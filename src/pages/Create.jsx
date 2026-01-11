import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const updatedRecipes = [...data, recipe];
    setdata(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    toast.success("🎉 Recipe created successfully!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-screen  flex items-center justify-center px-4 py-6 font-gilroy">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-8">
          Create a New Recipe 🍽️
        </h1>

        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="space-y-5"
        >

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-semibold">Image URL</label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              {...register("image", { required: "Image URL is required" })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block mb-1 font-semibold">Recipe Title</label>
            <input
              type="text"
              placeholder="Enter recipe title"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              {...register("title", {
                required: "Title is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              rows="3"
              placeholder="Brief description of the recipe"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              {...register("desc", { required: "Description is required" })}
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block mb-1 font-semibold">
              Ingredients <span className="text-sm text-gray-500">(comma separated)</span>
            </label>
            <textarea
              rows="3"
              placeholder="Eggs, Milk, Sugar"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              {...register("ingr", { required: "Ingredients are required" })}
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block mb-1 font-semibold">
              Instructions <span className="text-sm text-gray-500">(comma separated)</span>
            </label>
            <textarea
              rows="4"
              placeholder="Mix ingredients, Cook for 10 minutes"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              {...register("ins", { required: "Instructions are required" })}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-semibold">Category</label>
            <select
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              {...register("category", { required: true })}
            >
              <option value="">Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl font-bold text-lg hover:bg-red-600 hover:scale-[1.02] transition"
          >
            Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
