import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";
import showtimesReducer from "../features/showtimesSlice";
import authReducer from "../features/authSlice";
import bookingsReducer from "../features/bookingsSlice"

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    showtimes: showtimesReducer,
    auth: authReducer,
    bookings: bookingsReducer,
  },
});
export default store;