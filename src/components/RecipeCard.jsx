import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, image, title, desc, category } = recipe;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      
      {/* 🔹 Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* 🔹 Category Badge */}
        {category && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full capitalize shadow">
            {category}
          </span>
        )}
      </div>

      {/* 🔹 Content */}
      <div className="p-4 flex flex-col h-[220px]">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3 flex-grow">
          {desc}
        </p>

        {/* 🔹 Button */}
        <Link
          to={`/recipes/details/${id}`}
          className="mt-4 inline-block text-center bg-green-600 text-white py-2 rounded-lg font-medium transition-all duration-300 hover:bg-green-700 hover:-translate-y-[1px]"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
