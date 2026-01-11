import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFF8F0] min-h-screen px-6 md:px-20 py-16 font-gilroy text-gray-800">

      {/* 🔹 Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-red-500">Foodies 🍴</span>
        </h1>
        <p className="text-gray-600 text-lg">
          A place where passion meets flavour and recipes come to life.
        </p>
      </div>

      {/* 🔹 Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* Image */}
        <div className="relative">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/43/01/97/1000_F_143019702_K55g6cb8wqbfm5qHeIaXvka1Xi0HgFoq.jpg"
            alt="Cooking Chef"
            loading="lazy"
            className="w-full h-[360px] object-cover rounded-3xl shadow-xl"
          />
         
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Journey to Flavor
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Foodies was built with a simple goal — to make cooking enjoyable,
            accessible, and inspiring. From quick breakfasts to comfort dinners,
            we bring recipes that fit every lifestyle.
          </p>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4">
              <span className="text-2xl">👨‍🍳</span>
              <p className="text-gray-700">
                Curated by passionate chefs and home cooks.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-2xl">🌍</span>
              <p className="text-gray-700">
                Global cuisines, local flavors — all in one place.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-2xl">📖</span>
              <p className="text-gray-700">
                Simple, step-by-step recipes anyone can follow.
              </p>
            </li>
          </ul>

          {/* CTA */}
          <button
            onClick={() => navigate("/recipes")}
            className="bg-red-500 text-white px-8 py-3 rounded-2xl shadow hover:bg-red-600 hover:scale-105 transition"
          >
            Explore Recipes →
          </button>
        </div>
      </div>

      {/* 🔹 Mission Section */}
      <div className="mt-24 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Our Mission
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          We believe cooking should feel joyful, not complicated. Foodies empowers
          you to create meals that bring people together, spark creativity,
          and turn everyday moments into delicious memories.
        </p>
      </div>

    </div>
  );
};

export default About;
