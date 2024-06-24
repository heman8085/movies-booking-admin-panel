import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const BookedMovies = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const snapshot = await db.collection("bookings").get();
      let bookingsList = [];
      snapshot.forEach((doc) =>
        bookingsList.push({ id: doc.id, ...doc.data() })
      );
      setBookings(bookingsList);
    };
    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h3>Booked Movies</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <strong>{booking.name}</strong> booked <em>{booking.movie}</em> for{" "}
            {booking.showtime}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedMovies;
