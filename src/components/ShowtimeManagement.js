import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/moviesSlice";
import { addShowtime } from "../features/showtimesSlice";

const ShowtimeManagement = () => {
  const [theater, setTheater] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMovie && theater && date && time) {
      const showtime = `${date} ${time}`;
      dispatch(addShowtime({ movieId: selectedMovie, theater, showtime }));
      setTheater("");
      setDate("");
      setTime("");
    }
  };

  if (status === "loading") {
    return <p>Loading movies...</p>;
  }

  if (status === "failed") {
    return <p>Failed to load movies.</p>;
  }

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
        value={theater}
        onChange={(e) => setTheater(e.target.value)}
        placeholder="Theater Name"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Showtime
      </button>
    </form>
  );
};

export default ShowtimeManagement;
