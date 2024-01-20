import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { getRequestConfig } from "../../../shared/utils/utils";
import { ROUTES } from "../../../config/consts";
import { env } from "../../../config/config";

type User = {
  email: string;
  id: string;
};

type InitialState = {
  isLoading: boolean;
  error: string | null;
  user: User | null;
};

const initialState: InitialState = {
  isLoading: false,
  error: null,
  user: null,
};

export const handleLogin =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const config = getRequestConfig({
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });

      const response = await fetch(`${env.API_URL}${ROUTES.login}`, config);
      const payload = await response.json();
      console.log("payload: ", payload);
      const token = payload.token;

      if (response.ok) {
        localStorage.setItem("token", token);
        dispatch({
          type: "login/setUser",
          payload: payload.user,
        });
      } else {
        dispatch(setError(payload.message));
      }
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, setIsLoading, setError, logout } = loginSlice.actions;

export default loginSlice.reducer;
