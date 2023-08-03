import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { getRequestConfig } from "../../../shared/utils/utils";
import { ROUTES } from "../../../config/consts";
import { env } from "../../../config/config";

type NewsItem = {
  id: string;
  title: string;
  trending: boolean;
  source: string;
  imageUrl: string;
};

type InitialState = {
  newsItems: NewsItem[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  newsItems: [],
  loading: false,
  error: null,
};

export const fetchNewsData = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setNewsLoading(true));

    const config = getRequestConfig({
      method: "GET",
    });
    const response = await fetch(`${env.API_URL}${ROUTES.news}`, config);
    const newsData = await response.json();

    dispatch(setNewsItems(newsData));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    dispatch(setNewsError(errorMessage));
  } finally {
    dispatch(setNewsLoading(false));
  }
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsItems: (state, action) => {
      state.newsItems = action.payload;
    },
    setNewsLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null;
    },
    setNewsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setNewsItems, setNewsLoading, setNewsError } = newsSlice.actions;

export default newsSlice.reducer;
