import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const ShowtimeManagement = () => {
  const [showtimes, setShowtimes] = useState([]);
  const [newShowtime, setNewShowtime] = useState("");

  useEffect(() => {
    const fetchShowtimes = async () => {
      const snapshot = await db.collection("showtimes").get();
      let showtimesList = [];
      snapshot.forEach((doc) =>
        showtimesList.push({ id: doc.id, ...doc.data() })
      );
      setShowtimes(showtimesList);
    };
    fetchShowtimes();
  }, []);

  const handleAddShowtime = async () => {
    try {
      const docRef = await db
        .collection("showtimes")
        .add({ time: newShowtime });
      setShowtimes([...showtimes, { id: docRef.id, time: newShowtime }]);
      setNewShowtime("");
    } catch (error) {
      console.error("Error adding showtime: ", error);
    }
  };

  return (
    <div className="p-4">
      <div className="space-y-4">
        <input
          type="text"
          value={newShowtime}
          onChange={(e) => setNewShowtime(e.target.value)}
          placeholder="New Showtime"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddShowtime}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Add Showtime
        </button>
        <div>
          <h3>Existing Showtimes</h3>
          <ul>
            {showtimes.map((showtime) => (
              <li key={showtime.id}>{showtime.time}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowtimeManagement;
