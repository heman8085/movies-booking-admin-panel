import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AddMovie from "../components/AddMovie";
import ShowtimeManagement from "../components/ShowtimeManagement";
import BookedMovies from "../components/BookedMovies";
import Logout from "./Logout";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-y-auto">
        <Routes>
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/manage-showtimes" element={<ShowtimeManagement />} />
          <Route path="/booked-movies" element={<BookedMovies />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
