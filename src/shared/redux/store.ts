import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../pages/Login/redux/login";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
