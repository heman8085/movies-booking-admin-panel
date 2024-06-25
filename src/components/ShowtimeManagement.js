import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShowtime } from "../features/showtimesSlice";

const ShowtimeManagement = () => {
  const [showtime, setShowtime] = useState("");
  const movies = useSelector((state) => state.movies.movies);
  const [selectedMovie, setSelectedMovie] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addShowtime({ movieId: selectedMovie, showtime }));
    setShowtime("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl mb-4">Showtime Management</h1>
      <select
        value={selectedMovie}
        onChange={(e) => setSelectedMovie(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="" disabled>
          Select Movie
        </option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={showtime}
        onChange={(e) => setShowtime(e.target.value)}
        placeholder="Showtime"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Showtime
      </button>
    </form>
  );
};

export default ShowtimeManagement;
