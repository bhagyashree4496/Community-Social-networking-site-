import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Slice";

export default configureStore({
  reducer: {
    user: userreducer,
  },
});
