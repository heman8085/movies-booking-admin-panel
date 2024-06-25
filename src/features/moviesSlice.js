import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


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
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      });
  },
});

export default moviesSlice.reducer;
