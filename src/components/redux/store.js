import { createStore } from "redux";
import { useReducer } from "./user/user-reducer";

export const store = createStore(useReducer);