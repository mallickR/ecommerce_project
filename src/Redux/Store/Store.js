import { createStore } from "redux";
import rootReducers from "../Reducer/IndexReducer";
const storage = createStore(rootReducers);
export default storage; 