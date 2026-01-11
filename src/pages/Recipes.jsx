import { useContext, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // 🔍 Search + Filter Logic
  const filteredRecipes = data.filter((recipe) => {
    const matchTitle = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || recipe.category === category;

    return matchTitle && matchCategory;
  });

  return (
    <div className="min-h-screen px-4 md:px-12 py-10 font-gilroy">

      {/* 🔹 Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-8">
        Explore Delicious Recipes 😋
      </h1>

      {/* 🔹 Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full sm:w-48 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
        >
          <option value="all">All Categories</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      {/* 🔹 Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-500">
          <p className="text-xl">😕 No recipes found</p>
          <p className="mt-2">Try a different search or category</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
