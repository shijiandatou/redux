let combineReducers = (reducers)=>(
    (state={},action)=>{//返回一个新的reducer
        let newState ={};
        for(let key in reducers){//key 有两个值 counter todo
            newState[key] =reducers[key](state[key],action);
        }
        return newState;
    }
);

export default combineReducers;