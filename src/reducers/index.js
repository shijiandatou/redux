import counter from './counter';
import todo from './todo';
import combineReducers from "../combineReducers";
let reducer = combineReducers({
    counter,
    todo
});

export default reducer;