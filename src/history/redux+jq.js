import { createStore } from "./redux";
import $ from'jquery';
const INCREASE='INCREASE';
const DECREASE='DECREASE';
$(document.body).append(`
    <p id='countet'></p>
    <button id='increaseBtn'>+</button>
    <button id='decreaseBtn'>-</button>
`);
// console.log($);
//state 是状态树，可以是任意结构
//action是一个纯对象 里面需要事件的类型{type:'INCREASE',amount:2},{type:"DECREASE",amount:1}
let reducer = (state={number:0},action)=>{
    if(action == undefined) return state;
    switch(action.type){
        case INCREASE:
            return {number:state.number+action.amount};
        case DECREASE:
            return {number:state.number-action.amount};
        default:
            return state;
    };
}
let store = createStore(reducer);
let render = ()=>{
    $('#countet').html(store.getState().number);
}
$('#increaseBtn').click(()=>{
    store.dispatch({
        type:INCREASE,
        amount:1
    })
});
//当仓库里的state发生变化的时候，会重新渲染页面。
store.subscribe(render);
$('#decreaseBtn').click(()=>{
    store.dispatch({
        type:DECREASE,
        amount:1
    })
})
render();
//console.log(store.getState());