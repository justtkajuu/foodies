import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

/* 🔹 Lazy Loaded Pages */
const Home = lazy(() => import("../pages/Home"));
const Recipes = lazy(() => import("../pages/Recipes"));
const SingleRecipe = lazy(() => import("../pages/SingleRecipe"));
const Create = lazy(() => import("../pages/Create"));
const About = lazy(() => import("../pages/About"));
const Fav = lazy(() => import("../pages/Fav"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const Mainroutes = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-xl font-gilroy text-red-500">
          Loading Foodies...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/create-recipe" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Mainroutes;
