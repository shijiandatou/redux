import React,{Component} from 'react';
import { INCREASE,DECREASE } from "../actiontypes";
import connect from "../connect";

//action是一个纯对象 里面需要事件的类型{type:'INCREASE',amount:2},{type:"DECREASE",amount:1}

 class Counter2 extends Component{
    constructor(){
        super();
        this.state={
           
        }
    }
    render(){
        return(
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.props.onIncrease}>+</button>
                <button onClick={this.props.onDecrease}>-</button>
            </div>
        )
    }
}
// mapStateToProp 把 store里面的状态对象映射成属性

let mapStateToProp = (state)=>(
    {
        value:state.number
    }
);
//把dispatch 方法映射成UI组件的属性
let mapDispatchToProps =(dispatch)=>(
    {
        onIncrease:()=>{dispatch({type:INCREASE,amount:1})},
        onDecrease:()=>{dispatch({type:DECREASE,amount:1})},
    }
)
export default connect(mapStateToProp,mapDispatchToProps)(Counter2)