import React, { useState } from "react";
import { db } from "../firebase";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    poster: "",
    heroImage: "",
    name: "",
    description: "",
    director: "",
    genre: "",
    releaseDate: "",
    language: "",
    rating: "",
    showtime: "",
    trailerLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection("movies").add(movie);
      alert("Movie added successfully");
      setMovie({
        poster: "",
        heroImage: "",
        name: "",
        description: "",
        director: "",
        genre: "",
        releaseDate: "",
        language: "",
        rating: "",
        showtime: "",
        trailerLink: "",
      });
    } catch (error) {
      console.error("Error adding movie: ", error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="poster"
          value={movie.poster}
          onChange={handleChange}
          placeholder="Poster URL"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="heroImage"
          value={movie.heroImage}
          onChange={handleChange}
          placeholder="Hero Image URL"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="name"
          value={movie.name}
          onChange={handleChange}
          placeholder="Movie Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          value={movie.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="director"
          value={movie.director}
          onChange={handleChange}
          placeholder="Director"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="genre"
          value={movie.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          name="releaseDate"
          value={movie.releaseDate}
          onChange={handleChange}
          placeholder="Release Date"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="language"
          value={movie.language}
          onChange={handleChange}
          placeholder="Language"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="rating"
          value={movie.rating}
          onChange={handleChange}
          placeholder="IMDB Rating"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="showtime"
          value={movie.showtime}
          onChange={handleChange}
          placeholder="Showtime"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="trailerLink"
          value={movie.trailerLink}
          onChange={handleChange}
          placeholder="Trailer Link"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
