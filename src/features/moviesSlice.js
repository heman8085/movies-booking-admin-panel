import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, addDoc,getDocs } from "firebase/firestore";

// Fetch movies from Firestore
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const snapshot = await getDocs(collection(db, "movies"));
  let movies = [];
  snapshot.forEach((doc) => movies.push({ id: doc.id, ...doc.data() }));
  return movies;
});

export const addMovie = createAsyncThunk("movies/addMovie", async (movie) => {
  const docRef = await addDoc(collection(db, "movies"), movie);
  return { id: docRef.id, ...movie };
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(addMovie.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default moviesSlice.reducer;
