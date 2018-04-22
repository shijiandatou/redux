import React,{Component} from 'react';
import { store } from "../store";
import { INCREASE,DECREASE } from "../actiontypes";


//state 是状态树，可以是任意结构
//action是一个纯对象 里面需要事件的类型{type:'INCREASE',amount:2},{type:"DECREASE",amount:1}

let incraese = (amount)=>(
    {
        type:INCREASE,
        amount,
    }
)
let decraese = (amount)=>(
    {
        type:DECREASE,
        amount,
    }
)

export default class Counter extends Component{
    constructor(){
        super();
        this.state={
            number:store.getState().counter.number
        }
    }
    componentWillMount(){
        //订阅store 更新state
       this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().counter.number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    incraese = ()=>{
        store.dispatch(incraese(1));
    }
    decraese = ()=>{
        store.dispatch(decraese(1));
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.incraese}>+</button>
                <button onClick={this.decraese}>-</button>
            </div>
        )
    }
}