import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { getRequestConfig } from "../../../shared/utils/utils";
import { ROUTES } from "../../../config/consts";

type InitialState = {
  email: string;
  password: string;
  token: string;
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  email: "",
  password: "",
  token: localStorage.getItem("token") || "",
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
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const handleLogin =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const config = getRequestConfig({
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });

      const response = await fetch(
        `http://localhost:3001${ROUTES.login}`,
        config
      );
      const loginData = await response.json();
      console.log("loginData: ", loginData);
      const token = loginData.token;

      if (response.ok) {
        localStorage.setItem("token", token);
        dispatch({
          type: "login/setToken",
          payload: token,
        });
      } else {
        dispatch(setError(loginData.message));
      }
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const { setEmail, setToken, setIsLoading, setError, logout } =
  loginSlice.actions;

export default loginSlice.reducer;
