import { createStore } from "redux";
import { productsReducers } from "./reducers";

export const store = createStore(productsReducers);
