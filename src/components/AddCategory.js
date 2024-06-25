import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/categoriesSlice";

const AddCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("Now Playing");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({ name: selectedCategory }));
    setSelectedCategory("Now Playing");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl mb-4">Add Category</h1>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="Now Playing">Now Playing</option>
        <option value="Top Movies in Theaters">Top Movies in Theaters</option>
        <option value="Top Rated">Top Rated</option>
        <option value="Hero Section">Hero Section</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Category
      </button>
    </form>
  );
};

export default AddCategory;
