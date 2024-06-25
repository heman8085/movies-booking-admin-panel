// src/features/authSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../firebase";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { user: null },
//   reducers: {
//     setUser: (state, action) => {
//       const { uid, email, displayName } = action.payload;
//       state.user = { uid, email, displayName };
//     },
//     clearUser: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, clearUser } = authSlice.actions;

// export const selectUser = (state) => state.auth.user;

// export const login = (email, password) => async (dispatch) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     dispatch(
//       setUser({
//         uid: user.uid,
//         email: user.email,
//         displayName: user.displayName,
//       })
//     );
//   } catch (error) {
//     console.error("Error logging in: ", error);
//   }
// };

// export const logout = () => async (dispatch) => {
//   try {
//     await signOut(auth);
//     dispatch(clearUser());
//   } catch (error) {
//     console.error("Error logging out: ", error);
//   }
// };

// export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      const { uid, email, displayName } = action.payload;
      state.user = { uid, email, displayName };
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export const initializeAuthState = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    } else {
      dispatch(clearUser());
    }
  });
};

export const login = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      })
    );
  } catch (error) {
    console.error("Error logging in: ", error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(clearUser());
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

export default authSlice.reducer;
