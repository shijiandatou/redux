import { ADD_TODO,DELETE_AODO } from "../actiontypes";

let  reducer = (state={list:[]},action)=>{
    if(action === undefined) return state;
    switch(action.type){
        case ADD_TODO:
            return {list:[...state.list,action.text]}
        case DELETE_AODO:
            let list = state.list;
            list.splice(action.index,1);
            //状态具有不变性 每次都要返回新的对象
            return {
                list:[...list],
            }
        default:
            return state;
    }

};

export default reducer;