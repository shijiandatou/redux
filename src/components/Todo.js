import React,{Component} from 'react';
import { store } from "../store";
import { DELETE_AODO,ADD_TODO } from "../actiontypes";


export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            list:store.getState().todo.list
        }
    }
    componentWillMount(){
        this.unsubscribe =  store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    handleKeyDown = (event)=>{
        if(event.keyCode === 13 && event.target.value.length>0){
            store.dispatch({
                type:ADD_TODO,
                text:event.target.value
            })
            // let list = this.state.list;
            // list.push(event.target.value);
            // this.setState({
            //     list,
            //     value:''
            // });
            event.target.value='';
        }
    }
    deletetFnc = (index)=>{
        store.dispatch({
            type:DELETE_AODO,
            index,
        })
    }
    render(){
  //      console.log(this.state);
        return(
            <div>
                <input onKeyDown={this.handleKeyDown} type='text' />
                <ul>
                    {
                        this.state.list.map((v,index)=><li key={index}>{v}<button onClick={this.deletetFnc.bind(this,index)}>-</button></li>)
                    }
                </ul>
            </div>
        )
    }
}