import { createStore } from "redux";
import questionReducer from "./Questions/Questions.reducer";

const store = createStore(questionReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;