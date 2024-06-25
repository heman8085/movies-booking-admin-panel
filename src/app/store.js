import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categoriesSlice";
import moviesReducer from "../features/moviesSlice";
import showtimesReducer from "../features/showtimesSlice";
import authReducer from "../features/authSlice";
import bookingsReducer from "../features/bookingsSlice"

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    movies: moviesReducer,
    showtimes: showtimesReducer,
    auth: authReducer,
    bookings: bookingsReducer,
  },
});
export default store;