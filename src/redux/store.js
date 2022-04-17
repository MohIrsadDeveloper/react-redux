import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { initialState } from "./constants";

const store = createStore(rootReducer, 1000)

export default store;