import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import root from "./reducers/root";

const middlewares = [thunk];

const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
