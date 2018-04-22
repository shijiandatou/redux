
//创建仓库
const createStore = (reducer)=>{
    let state;
    //监听函数数组
    let listeners=[];
    //用来获取最新的状态
    let getState=()=>state;
    //向仓库发送action
    let dispatch = (action)=>{
        //调用reducer 传入老的state和action 返回新的state
        state = reducer(state,action);
        //调用监听函数数组
        listeners.forEach(listener=>listener());
    }
    dispatch();
    //订阅仓库内的状态变化，当状态变化后会调用对应的监听函数
    //订阅方法执行后返回一个取消订阅的函数，调用它可以取消订阅
    let subscribe = (listener)=>{
        listeners.push(listener);
        return ()=>{
            listeners.filter((l)=>{
                return listener!=l;
            })
        }
    }
    return{
        getState,//获取最新的状态对象
        dispatch,//发射action
        subscribe,//订阅状态变化事件
    }
}

export{
    createStore
}