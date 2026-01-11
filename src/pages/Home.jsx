import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { recipecontext } from "../context/RecipeContext";

const Home = () => {
  const navigate = useNavigate();

  const { data } = useContext(recipecontext);

  // Take first 3 recipes for feature section
  const featuredRecipes = data.slice(0, 3);

  return (
    <div className="font-gilroy text-gray-800">

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-20 py-20 grid md:grid-cols-2 gap-14 items-center ">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Cook <span className="text-red-500">Delicious Meals🍳</span>
            <br /> Anytime, Anywhere
          </h1>

          <p className="mt-5 text-gray-600 max-w-md">
            Discover easy-to-follow recipes, expert cooking tips, and inspiration
            to make every meal unforgettable.
          </p>

          <button
            onClick={() => navigate("/create-recipe")}
            className="mt-7 bg-red-500 text-white px-7 py-3 rounded-xl shadow-md hover:bg-red-600 hover:scale-105 transition"
          >
            Create Recipe
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
            alt="Hero Food"
            loading="lazy"
            className="w-full max-w-md h-[360px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Recipes
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 md:px-20 py-20 ">
        <h2 className="text-3xl font-bold text-center mb-4">
          Explore Our Features
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover recipes, create your own, and save your favourites.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Tasty Recipes",
              desc: "Explore dishes worldwide",
              link: "/recipes",
              img: "https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg",
            },
            {
              title: "Create a Recipe",
              desc: "Share your culinary ideas",
              link: "/create-recipe",
              img: "https://t3.ftcdn.net/jpg/09/69/70/20/240_F_969702028_XMs2z9rOghQpgoXVCzK3Xeb4en3qoZhR.jpg",
            },
            {
              title: "Your Favourites",
              desc: "Access saved recipes",
              link: "/fav",
              img: "https://t4.ftcdn.net/jpg/03/65/77/09/240_F_365770948_UDIfG183dAjpHj51c0MjaZ3Dkd23Zdgu.jpg",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="relative h-64 rounded-3xl overflow-hidden group shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 mb-4 italic">
              “I tried three recipes in one week, and they all turned out amazing!
              This site has completely changed how I cook at home.”
            </p>
            <p className="font-semibold">— James Carter</p>
          </div>
          <img
            src="/chef.png"
            alt="Chef"
            loading="lazy"
            className="w-72 h-[300px] object-cover rounded-2xl mx-auto"
          />
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      {/* <section className="px-6 md:px-20 py-16 bg-red-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">
          Join Our Cooking Community
        </h2>
        <p className="mb-6 text-red-100">
          Get weekly recipes and exclusive cooking tips.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-800 w-64"
          />
          <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </section> */}

      
      
    </div>
  );
};

export default Home;
