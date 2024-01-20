import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../pages/Login/redux/login";
import newsReducer from "../../pages/News/redux/news";

export default configureStore({
  reducer: {
    login: loginReducer,
    news: newsReducer,
  },
});
