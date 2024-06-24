import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/categoriesSlice";
import { db } from "../firebase";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await db.collection("categories").add({ name: category });
      dispatch(addCategory({ id: docRef.id, name: category }));
      setCategory("");
    } catch (error) {
      console.error("Error adding category: ", error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
