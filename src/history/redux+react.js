import { createStore } from "./redux";
import React,{ Component } from "react";
import ReactDOM from 'react-dom';
// import $ from'jquery';
const INCREASE='INCREASE';
const DECREASE='DECREASE';
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

class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    incraese = ()=>{
        console.log('12112');
        store.dispatch({
            type:INCREASE,
            amount:1
        });
    }
    decraese = ()=>{
        store.dispatch({
            type:DECREASE,
            amount:1
        })
    }
    render(){
        return(
            <div>
                <p>{store.getState().number}</p>
                <button onClick={this.incraese}>+</button>
                <button onClick={this.decraese}>-</button>
            </div>
        )
    }
}
let render = ()=>{
    ReactDOM.render(<Home />,document.querySelector("#app"));
}
render();
store.subscribe(render);