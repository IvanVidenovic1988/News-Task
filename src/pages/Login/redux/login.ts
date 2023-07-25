import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  email: string;
  password: string;
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  email: "",
  password: "",
  token: localStorage.getItem("token") || "",
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearAuthState: (state) => {
      state.email = "";
      state.password = "";
      state.token = "";
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
});

export const {
  setEmail,
  setPassword,
  setToken,
  setIsAuthenticated,
  setIsLoading,
  setError,
  clearAuthState,
} = loginSlice.actions;

export default loginSlice.reducer;
