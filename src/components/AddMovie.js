import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../features/moviesSlice";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    name: "",
    description: "",
    director: "",
    genre: "",
    releaseDate: "",
    language: "",
    imdbRating: "",
    trailerLink: "",
    posterUrl: "",
    category: "", 
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie(movie));
    setMovie({
      name: "",
      description: "",
      director: "",
      genre: "",
      releaseDate: "",
      language: "",
      imdbRating: "",
      trailerLink: "",
      posterUrl: "",
      category: "", 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl mb-4">Add Movie</h1>
      <select
        name="category"
        value={movie.category}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="" disabled>
          Select Category
        </option>
        <option value="Now Playing">Now Playing</option>
        <option value="Top Movies in Theaters">Top Movies in Theaters</option>
        <option value="Top Rated">Top Rated</option>
        <option value="Hero Section">Hero Section</option>
      </select>
      <input
        type="text"
        name="name"
        value={movie.name}
        onChange={handleChange}
        placeholder="Movie Name"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="text"
        name="posterUrl"
        value={movie.posterUrl}
        onChange={handleChange}
        placeholder="Poster URL"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <textarea
        name="description"
        value={movie.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="text"
        name="director"
        value={movie.director}
        onChange={handleChange}
        placeholder="Director"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="text"
        name="genre"
        value={movie.genre}
        onChange={handleChange}
        placeholder="Genre"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="date"
        name="releaseDate"
        value={movie.releaseDate}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="text"
        name="language"
        value={movie.language}
        onChange={handleChange}
        placeholder="Language"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="number"
        name="imdbRating"
        value={movie.imdbRating}
        onChange={handleChange}
        placeholder="IMDB Rating"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="text"
        name="trailerLink"
        value={movie.trailerLink}
        onChange={handleChange}
        placeholder="Trailer Link"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      
      <button type="submit" className="p-2 bg-blue-500 text-white rounded mt-4">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
