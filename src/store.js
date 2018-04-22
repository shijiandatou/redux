import { createStore } from "./redux";
import reducer from "./reducers/index";
/**
 * 旧的状态{number:0}{list:[]}
 * 新的状态 {counter:{number:0},todo:{list:[]}}
 */

let store = createStore(reducer);
 
export {store};