import React from "react";
import ReactDOM from 'react-dom';
import { PropTypes } from "prop-types";
class Container extends React.Component{
    getChildContext(){
        //返回一个对象 这个对象就是子组件的context对象
        return {color:'red'}
    }
    render(){
        return (
            <MessageList message={this.props.message}/>
        )
    }
}
Container.childContextTypes={
    color:PropTypes.string
}
class MessageList extends React.Component{
    render(){
        return(
            <ul>
                {
                    this.props.message.map((v,i)=><Message message={v} key={i}/>)
                }
            </ul>
        )
    }
}
class Message extends React.Component{
    render(){
        return(
            <li style={{color:this.context.color}}>{this.props.message}</li>
        )
    }
}
Message.contextTypes={
    color:PropTypes.string
}
let message = [1,2,3];
ReactDOM.render(<Container message={message}>

</Container>,document.querySelector("#app"));
