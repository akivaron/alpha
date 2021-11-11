import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import postReducer from "./posts/posts.reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  posts: postReducer,
});

export default persistReducer(persistConfig, rootReducer);
